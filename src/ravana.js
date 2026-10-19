import * as THREE from 'three';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { CONFIG } from './config.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const _v = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _min = new THREE.Vector3();
const _max = new THREE.Vector3();
const fmt = (v) => `(${v.x.toFixed(3)}, ${v.y.toFixed(3)}, ${v.z.toFixed(3)})`;

/** Count triangles of a mesh. */
function triCount(mesh) {
  const g = mesh.geometry;
  return g.index ? g.index.count / 3 : g.attributes.position.count / 3;
}

/**
 * Logs the full glTF hierarchy plus meshes, materials, textures and animations.
 * Returns a summary object (also used by the on-screen diagnostics).
 */
export function inspectGLTF(label, gltf) {
  const summary = { label, nodes: 0, meshes: 0, triangles: 0, materials: new Set(), textures: new Set(), animations: gltf.animations.map((a) => a.name || '(unnamed)') };
  console.groupCollapsed(`[inspect] ${label}: scene hierarchy`);
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    summary.nodes++;
    let depth = 0;
    for (let p = o.parent; p; p = p.parent) depth++;
    const ws = o.getWorldScale(new THREE.Vector3());
    let extra = '';
    if (o.isMesh) {
      const t = triCount(o);
      summary.meshes++;
      summary.triangles += t;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        summary.materials.add(m.name || m.type);
        for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap']) if (m[k]) summary.textures.add(`${k}:${m[k].image?.width}x${m[k].image?.height}`);
      }
      extra = ` tris=${t} material=${mats.map((m) => m.name).join(',')}`;
    }
    console.log(`${'  '.repeat(depth)}${o.type} "${o.name}" localPos${fmt(o.position)} scale${fmt(o.scale)} worldPos${fmt(o.getWorldPosition(_v))} worldScale${fmt(ws)}${extra}`);
  });
  console.groupEnd();
  const box = new THREE.Box3().setFromObject(gltf.scene);
  summary.bbox = { min: box.min.toArray(), max: box.max.toArray(), size: box.getSize(new THREE.Vector3()).toArray() };
  summary.materials = [...summary.materials];
  summary.textures = [...summary.textures];
  console.log(`[inspect] ${label}:`, { nodes: summary.nodes, meshes: summary.meshes, triangles: summary.triangles, materials: summary.materials, textures: summary.textures, animations: summary.animations, bbox: summary.bbox });
  return summary;
}

/** Segment (a->b) vs sphere. Returns entry fraction in [0,1] or -1 (0 if a starts inside). */
function segmentSphere(a, b, c, r) {
  const d = _v.subVectors(b, a);
  const m = _min.subVectors(a, c);
  const A = d.dot(d);
  const B = m.dot(d);
  const C = m.dot(m) - r * r;
  if (C <= 0) return 0;
  if (A < 1e-12) return -1;
  const disc = B * B - A * C;
  if (disc < 0) return -1;
  const t = (-B - Math.sqrt(disc)) / A;
  return t >= 0 && t <= 1 ? t : -1;
}

function ringTexture(size = 128) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, size * 0.28, size / 2, size / 2, size / 2);
  grd.addColorStop(0, 'rgba(255,220,120,0)');
  grd.addColorStop(0.55, 'rgba(255,200,80,1)');
  grd.addColorStop(0.75, 'rgba(255,120,20,0.8)');
  grd.addColorStop(1, 'rgba(255,80,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  g.fillStyle = 'rgba(255,240,180,1)';
  g.beginPath();
  g.arc(size / 2, size / 2, size * 0.08, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Segment (a->b) vs AABB slab test. Returns entry fraction in [0,1] or -1. */
function segmentAABB(a, b, min, max) {
  let t0 = 0;
  let t1 = 1;
  for (const k of ['x', 'y', 'z']) {
    const d = b[k] - a[k];
    if (Math.abs(d) < 1e-9) {
      if (a[k] < min[k] || a[k] > max[k]) return -1;
    } else {
      let ta = (min[k] - a[k]) / d;
      let tb = (max[k] - a[k]) / d;
      if (ta > tb) [ta, tb] = [tb, ta];
      t0 = Math.max(t0, ta);
      t1 = Math.min(t1, tb);
      if (t0 > t1) return -1;
    }
  }
  return t0;
}

export class Ravana {
  constructor(scene) {
    // root: world placement (floor position, yaw, uniform scale). Local units = model units.
    this.root = new THREE.Group();
    this.root.name = 'RavanaRoot';
    // pivot: recentres the model so the soles sit at y = 0 and x/z is centred.
    this.pivot = new THREE.Group();
    this.root.add(this.pivot);
    this.root.visible = false;
    scene.add(this.root);

    this.targets = [];
    this.bodyMeshes = [];
    this.materials = [];
    this.modelHeight = 1;
    this.height = CONFIG.ravana.defaultHeight;
    this.hitboxSource = 'none';
    this.hitboxWarning = '';
    this.debugVisible = CONFIG.debug;
    this.invMatrix = new THREE.Matrix4();
    this.raycaster = new THREE.Raycaster();
    this.raycaster.firstHitOnly = true;
    this.clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.sink = 0;
  }

  async load(loader, onProgress) {
    const gltf = await loader.loadAsync(CONFIG.models.ravana, onProgress);
    this.summary = inspectGLTF('ravana.glb', gltf);
    if (this.summary.triangles > 300000) {
      console.warn(`[ravana] ${this.summary.triangles} triangles — heavy for Quest 3 browser. Prefer ravana.glb (~150k tris).`);
    }
    if (gltf.animations.length === 0) console.log('[ravana] No animations in the GLB (static pose).');

    const model = gltf.scene;
    this.model = model;
    this.pivot.add(model);

    // Bounding box of the geometry only (Empties have no geometry and are ignored).
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    this.modelHeight = size.y;
    this.modelBox = box.clone();
    this.pivot.position.set(-center.x, -box.min.y, -center.z);
    console.log(`[ravana] model bbox min${fmt(box.min)} max${fmt(box.max)} size${fmt(size)}. Feet offset applied: ${fmt(this.pivot.position)}`);

    model.traverse((o) => {
      if (!o.isMesh) return;
      this.bodyMeshes.push(o);
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        m.envMapIntensity = 1.0;
        this.materials.push(m);
      }
      if (CONFIG.ravana.bodyCollision) {
        const t0 = performance.now();
        o.geometry.computeBoundsTree();
        console.log(`[ravana] BVH for "${o.name}" built in ${(performance.now() - t0).toFixed(0)} ms`);
      }
    });

    this.root.updateMatrixWorld(true);
    this._findHitboxes(model);
    this._buildTargetVisuals();
    this._setupNavel();
    this.setHeight(this.height);
    return this.summary;
  }

  _findHitboxes(model) {
    const { namePatterns, expectedCount, sizeMultiplier, defaultHalfExtent } = CONFIG.hitboxes;
    const all = [];
    model.traverse((o) => all.push(o));

    const candidates = all.filter((o) => /hitbox|collider|head/i.test(o.name));
    console.groupCollapsed(`[ravana] nodes whose names contain Hitbox / Collider / Head: ${candidates.length}`);
    for (const o of candidates) console.log(`${o.type} "${o.name}" isMesh=${!!o.isMesh} worldPos${fmt(o.getWorldPosition(_v))} worldScale${fmt(o.getWorldScale(_a))}`, o.userData);
    console.groupEnd();

    let found = null;
    for (const re of namePatterns) {
      const m = all.filter((o) => o !== model && re.test(o.name));
      if (m.length === expectedCount) {
        found = m;
        console.log(`[ravana] Hitbox naming pattern ${re} matched ${m.length} nodes.`);
        break;
      }
      if (m.length) console.warn(`[ravana] Pattern ${re} matched ${m.length} nodes (expected ${expectedCount}) — skipped.`);
    }

    const rootInv = new THREE.Matrix4().copy(this.root.matrixWorld).invert();
    if (found) {
      const num = (o) => Number((o.name.match(/(\d+)\s*$/) || [])[1]);
      found.sort((a, b) => (num(a) || 0) - (num(b) || 0) || a.getWorldPosition(_a).x - b.getWorldPosition(_b).x);
      this.hitboxSource = 'glb';
      found.forEach((node, i) => {
        let center;
        let half;
        if (node.isMesh) {
          // Exported mesh collider: use its bounding box.
          const bb = new THREE.Box3().setFromObject(node);
          bb.applyMatrix4(rootInv);
          center = bb.getCenter(new THREE.Vector3());
          half = bb.getSize(new THREE.Vector3()).multiplyScalar(0.5);
        } else {
          // Empty / transform node: centre = world position, half extents = world scale
          // (a Blender cube Empty of display size 1 spans -1..1 on each axis).
          node.updateWorldMatrix(true, false);
          center = node.getWorldPosition(new THREE.Vector3()).applyMatrix4(rootInv);
          half = node.getWorldScale(new THREE.Vector3());
          const rootScale = this.root.getWorldScale(_v).x;
          half.divideScalar(rootScale);
          if (half.x < 1e-4 || half.x > 10) half.setScalar(defaultHalfExtent);
        }
        half.multiplyScalar(sizeMultiplier);
        this.targets.push(this._makeTarget(i, node.name, center, half, node.userData?.source_name));
      });
    } else {
      this.hitboxSource = 'fallback';
      this.hitboxWarning = 'No hitbox nodes found in ravana.glb — using CONFIG.hitboxes.fallback (edit src/config.js).';
      console.warn(`[ravana] ${this.hitboxWarning}`);
      CONFIG.hitboxes.fallback.forEach((h, i) => {
        const center = new THREE.Vector3(...h.center).add(this.pivot.position);
        const half = new THREE.Vector3(...h.half).multiplyScalar(sizeMultiplier);
        this.targets.push(this._makeTarget(i, `fallback_${i + 1}`, center, half));
      });
    }
    console.table(this.targets.map((t) => ({ index: t.index + 1, node: t.name, source: t.sourceName || '', center: fmt(t.center), halfExtents: fmt(t.half) })));
  }

  _makeTarget(index, name, center, half, sourceName) {
    return {
      index,
      name,
      sourceName,
      center,
      half,
      min: center.clone().sub(half),
      max: center.clone().add(half),
      hits: 0,
      destroyed: false,
      highlight: 0,
    };
  }

  _buildTargetVisuals() {
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2));
    const markerGeo = new THREE.OctahedronGeometry(0.035, 0);
    this.debugGroup = new THREE.Group();
    this.debugGroup.visible = this.debugVisible;
    this.root.add(this.debugGroup);
    for (const t of this.targets) {
      t.debugBox = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x33ff66, depthTest: false, transparent: true }));
      t.debugBox.position.copy(t.center);
      t.debugBox.scale.copy(t.half);
      t.debugBox.renderOrder = 10;
      this.debugGroup.add(t.debugBox);

      t.marker = new THREE.Mesh(markerGeo, new THREE.MeshBasicMaterial({ color: 0xffc23a, transparent: true, opacity: 0.9 }));
      t.marker.position.set(t.center.x, t.max.y + 0.06, t.center.z);
      t.marker.visible = CONFIG.hitboxes.showMarkers;
      this.root.add(t.marker);
    }
  }

  /** Navel target: x/y from config, z snapped onto the front of the body by a raycast. */
  _setupNavel() {
    const n = CONFIG.navel;
    const center = new THREE.Vector3(n.modelPosition[0], n.modelPosition[1], 0).add(this.pivot.position);
    center.z = this.modelBox.max.z + this.pivot.position.z + 1;
    this.root.updateMatrixWorld(true);
    this.raycaster.set(center.clone(), new THREE.Vector3(0, 0, -1));
    this.raycaster.far = 10;
    const hit = this.raycaster.intersectObjects(this.bodyMeshes, false)[0];
    if (hit) {
      center.z = hit.point.z - n.radius * 0.3; // sphere pokes ~70 % of its radius out of the belly
      console.log(`[ravana] navel target at root-local ${fmt(center)} (surface found by raycast)`);
    } else {
      center.z = this.pivot.position.z;
      console.warn('[ravana] navel raycast missed the body — using the model centre depth. Adjust CONFIG.navel.modelPosition.');
    }
    const radius = n.radius * CONFIG.hitboxes.sizeMultiplier;
    this.navel = { center, radius, active: false, hit: false, aimed: false };

    // Visuals: pulsing ring sprite + glow, only while the navel phase is active.
    this.navelMarker = new THREE.Group();
    this.navelMarker.position.copy(center);
    const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTexture(), blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, transparent: true, toneMapped: false }));
    ring.scale.setScalar(radius * 3.2);
    ring.renderOrder = 12;
    this.navelMarker.add(ring);
    this.navelRing = ring;
    this.navelMarker.visible = false;
    this.root.add(this.navelMarker);

    const dbg = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 8), new THREE.MeshBasicMaterial({ color: 0xff44ff, wireframe: true, depthTest: false, transparent: true }));
    dbg.position.copy(center);
    dbg.renderOrder = 10;
    this.debugGroup.add(dbg);
  }

  setNavelActive(v) {
    this.navel.active = v;
    this.navelMarker.visible = v;
  }

  setDebugVisible(v) {
    this.debugVisible = v;
    if (this.debugGroup) this.debugGroup.visible = v;
  }

  setHeight(h) {
    const { minHeight, maxHeight } = CONFIG.ravana;
    this.height = THREE.MathUtils.clamp(h, minHeight, maxHeight);
    this.root.scale.setScalar(this.height / this.modelHeight);
    this.root.updateMatrixWorld(true);
  }

  /** Place feet at `pos` (world, floor level) and turn to face `facePoint`. */
  place(pos, facePoint) {
    this.root.position.copy(pos);
    if (facePoint) {
      this.yaw = Math.atan2(facePoint.x - pos.x, facePoint.z - pos.z); // model faces +Z
      this.root.rotation.set(0, this.yaw, 0);
    }
    this.floorY = pos.y;
    this.root.visible = true;
    this.root.updateMatrixWorld(true);
  }

  /** Called once per frame before collision queries. */
  update(dt, time) {
    this.root.updateMatrixWorld(true);
    this.invMatrix.copy(this.root.matrixWorld).invert();
    for (const t of this.targets) {
      t.highlight = Math.max(0, t.highlight - dt * 3);
      if (!t.destroyed) {
        t.marker.rotation.y = time * 2 + t.index;
        const s = 1 + t.highlight * 1.5 + (t.aimed ? 0.5 : 0);
        t.marker.scale.setScalar(s);
        t.marker.material.color.setHex(t.highlight > 0 ? 0xff6a00 : t.aimed ? 0xffffff : 0xffc23a);
        t.debugBox.material.color.setHex(t.aimed ? 0xffffff : 0x33ff66);
      }
      t.aimed = false;
    }
    if (this.navel?.active) {
      const pulse = 1 + 0.25 * Math.sin(time * 6) + (this.navel.aimed ? 0.4 : 0);
      this.navelRing.scale.setScalar(this.navel.radius * 3.2 * pulse);
      this.navelRing.material.rotation = time * 1.5;
    }
    if (this.navel) this.navel.aimed = false;
  }

  liveTargets() {
    return this.targets.filter((t) => !t.destroyed);
  }

  navelWorld(out = new THREE.Vector3()) {
    return out.copy(this.navel.center).applyMatrix4(this.root.matrixWorld);
  }

  worldCenter(target, out = new THREE.Vector3()) {
    return out.copy(target.center).applyMatrix4(this.root.matrixWorld);
  }

  /**
   * Swept collision for a segment p0 -> p1 (world). Heads take priority over the body.
   * Returns { type: 'head'|'body', target?, point: Vector3 (world), t } or null.
   */
  segmentTest(p0, p1) {
    if (!this.root.visible) return null;
    _a.copy(p0).applyMatrix4(this.invMatrix);
    _b.copy(p1).applyMatrix4(this.invMatrix);
    let best = null;
    for (const t of this.targets) {
      if (t.destroyed) continue;
      const f = segmentAABB(_a, _b, t.min, t.max);
      if (f >= 0 && (!best || f < best.t)) best = { type: 'head', target: t, t: f };
    }
    if (this.navel?.active) {
      const f = segmentSphere(_a, _b, this.navel.center, this.navel.radius);
      if (f >= 0 && (!best || f < best.t)) best = { type: 'navel', t: f };
    }
    if (best) {
      best.point = new THREE.Vector3().lerpVectors(p0, p1, best.t);
      return best;
    }
    if (!CONFIG.ravana.bodyCollision) return null;
    const len = _v.subVectors(p1, p0).length();
    if (len < 1e-6) return null;
    this.raycaster.set(p0, _v.divideScalar(len));
    this.raycaster.far = len;
    const hit = this.raycaster.intersectObjects(this.bodyMeshes, false)[0];
    if (hit) return { type: 'body', point: hit.point.clone(), t: hit.distance / len, object: hit.object };
    return null;
  }

  /** Aim query (laser sight): returns { type, target?, distance } or null. */
  rayTest(origin, dir, maxDist) {
    _b.copy(dir).multiplyScalar(maxDist).add(origin);
    const hit = this.segmentTest(origin, _b);
    if (hit) hit.distance = hit.t * maxDist;
    return hit;
  }

  registerHit(target) {
    target.hits++;
    target.highlight = 1;
    if (target.hits >= CONFIG.hitboxes.hitsPerTarget) {
      target.destroyed = true;
      target.marker.material.color.setHex(0x333333);
      target.marker.material.opacity = 0.35;
      target.marker.scale.setScalar(0.6);
      target.debugBox.material.color.setHex(0xff3333);
      return true;
    }
    return false;
  }

  /** Finale: golden emissive glow (0..1) and sinking below the real floor (metres). */
  setFinale(glow, sinkMetres) {
    for (const m of this.materials) {
      m.emissive.setRGB(1.0, 0.62, 0.15);
      m.emissiveIntensity = glow * 1.6;
      m.clippingPlanes = sinkMetres > 0 ? [this.clipPlane] : null;
    }
    this.sink = sinkMetres;
    this.clipPlane.constant = -(this.floorY ?? 0);
    this.root.position.y = (this.floorY ?? 0) - sinkMetres;
  }

  resetTargets() {
    for (const t of this.targets) {
      t.hits = 0;
      t.destroyed = false;
      t.highlight = 0;
      t.marker.material.opacity = 0.9;
      t.marker.visible = CONFIG.hitboxes.showMarkers;
    }
    this.setFinale(0, 0);
    for (const m of this.materials) m.emissive.setRGB(0, 0, 0);
    if (this.navel) {
      this.navel.hit = false;
      this.setNavelActive(false);
    }
    this.root.visible = this.floorY !== undefined;
  }

  /** World-space point roughly at the chest, slightly in front, for fireball launches. */
  chestPoint(out = new THREE.Vector3()) {
    const zFront = this.modelBox.max.z - this.modelBox.getCenter(_v).z;
    out.set(0, this.modelHeight * 0.58, zFront * 0.55);
    return out.applyMatrix4(this.root.matrixWorld);
  }

  topPoint(out = new THREE.Vector3()) {
    out.set(0, this.modelHeight * 1.08, 0);
    return out.applyMatrix4(this.root.matrixWorld);
  }

  getWorldQuaternion(out = _q) {
    return this.root.getWorldQuaternion(out);
  }
}
