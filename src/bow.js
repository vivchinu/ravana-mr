import * as THREE from 'three';
import { CONFIG } from './config.js';
import { inspectGLTF } from './ravana.js';

const AXES = ['x', 'y', 'z'];
const UNIT = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) };
const Y_AXIS = new THREE.Vector3(0, 1, 0);
const _v = new THREE.Vector3();
const _w = new THREE.Vector3();

function longestAxis(size) {
  return AXES.reduce((a, b) => (size[b] > size[a] ? b : a));
}

/** Lightweight procedural arrow (used only if bow.glb contains no arrow mesh). Tip at origin, points -Z. */
function makeProceduralArrow(length) {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x8a5a2b, roughness: 0.8 });
  const steel = new THREE.MeshStandardMaterial({ color: 0xd9c27a, metalness: 0.8, roughness: 0.3 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, length * 0.9, 6), wood);
  shaft.rotation.x = Math.PI / 2;
  shaft.position.z = length * 0.55;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.014, length * 0.1, 6), steel);
  tip.rotation.x = -Math.PI / 2;
  tip.position.z = length * 0.05;
  g.add(shaft, tip);
  return g;
}

/**
 * The bow. Coordinate frames:
 *  - group:  follows the holding hand. Origin = grip (riser centre), -Z = aim, +Y = up. Metres.
 *  - model:  child of group, uniform scale only. All bow meshes are baked into this space so the
 *            limb-flex vertex shader can bend them by height (|y|) when the string is drawn.
 * The straight middle section of the original string mesh is cut out and replaced by two
 * dynamic string segments (top tip -> nock -> bottom tip) that follow the drawing hand.
 */
export class Bow {
  constructor(scene) {
    this.group = new THREE.Group();
    this.offset = new THREE.Group(); // CONFIG.bow.rotationDeg (visual correction only)
    this.model = new THREE.Group();
    this.group.add(this.offset);
    this.offset.add(this.model);
    this.group.visible = false;
    scene.add(this.group);
    this.cooldown = 0;
    this.draw = 0; // current draw distance (group units = metres)
    this.drawing = false;
    this.flexUniforms = { uDraw: { value: 0 }, uHalfH: { value: 1 }, uFlexZ: { value: 0 }, uFlexY: { value: 0 }, uNock: { value: 0 }, uCut: { value: 1 } };
  }

  async load(loader) {
    const gltf = await loader.loadAsync(CONFIG.models.bow);
    this.summary = inspectGLTF('bow.glb', gltf);
    const scene = gltf.scene;
    scene.updateMatrixWorld(true);

    // 1) Detach the arrow mesh (reused as the projectile).
    let arrowMesh = null;
    scene.traverse((o) => {
      if (!arrowMesh && o.isMesh && /arrow|flecha/i.test(o.name)) arrowMesh = o;
    });
    let arrowWorld = null;
    if (arrowMesh) {
      arrowWorld = arrowMesh.matrixWorld.clone();
      arrowMesh.parent.remove(arrowMesh);
      console.log(`[bow] Using arrow mesh "${arrowMesh.name}" from bow.glb as the projectile.`);
    } else {
      console.warn('[bow] No arrow mesh found in bow.glb — using a procedural arrow.');
    }
    scene.updateMatrixWorld(true);

    // 2) Auto-orientation: limbs -> +Y, shooting direction -> -Z.
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const up = longestAxis(size);
    let shootAxis;
    if (arrowMesh) {
      if (!arrowMesh.geometry.boundingBox) arrowMesh.geometry.computeBoundingBox();
      shootAxis = longestAxis(arrowMesh.geometry.boundingBox.clone().applyMatrix4(arrowWorld).getSize(new THREE.Vector3()));
    } else {
      shootAxis = AXES.filter((a) => a !== up).reduce((a, b) => (size[b] > size[a] ? b : a));
    }
    const meshes = [];
    scene.traverse((o) => o.isMesh && meshes.push(o));
    // Main limb mesh = the non-string mesh spanning the most of the bow's height (tip to tip).
    // Vertex count is unreliable here: the string and the feathers are denser than the limbs.
    const limbCandidates = meshes.filter((m) => !/cuerda|string/i.test(m.name));
    const span = (m) => new THREE.Box3().setFromObject(m).getSize(_w)[up];
    const main = (limbCandidates.length ? limbCandidates : meshes).reduce((a, b) => (span(b) > span(a) ? b : a));
    console.log(`[bow] limb mesh for grip / orientation: "${main.name}"`);
    // Forward sign: the riser (middle) sits forward of the limb tips.
    let sign = 1;
    {
      const pos = main.geometry.attributes.position;
      let midSum = 0, midN = 0, tipSum = 0, tipN = 0;
      for (let i = 0; i < pos.count; i++) {
        _v.fromBufferAttribute(pos, i).applyMatrix4(main.matrixWorld);
        const f = (_v[up] - box.min[up]) / size[up];
        if (f > 0.4 && f < 0.6) { midSum += _v[shootAxis]; midN++; }
        if (f < 0.1 || f > 0.9) { tipSum += _v[shootAxis]; tipN++; }
      }
      if (midN && tipN) sign = Math.sign(midSum / midN - tipSum / tipN) || 1;
    }
    if (CONFIG.bow.flipArrow) sign = -sign;
    const forward = UNIT[shootAxis].clone().multiplyScalar(sign);
    const right = new THREE.Vector3().crossVectors(forward, UNIT[up]).normalize();
    const src = new THREE.Matrix4().makeBasis(right, UNIT[up], forward.clone().negate());
    const dst = new THREE.Matrix4().makeBasis(new THREE.Vector3(1, 0, 0), Y_AXIS, new THREE.Vector3(0, 0, 1));
    this.autoQuat = new THREE.Quaternion().setFromRotationMatrix(dst.multiply(src.invert()));
    const orient = new THREE.Matrix4().makeRotationFromQuaternion(this.autoQuat);
    console.log(`[bow] size${size.toArray().map((n) => n.toFixed(3))} up=${up} shootAxis=${sign > 0 ? '+' : '-'}${shootAxis}`);

    // 3) Bake every bow mesh into oriented model space.
    const baked = meshes.map((m) => {
      const g = m.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(orient, m.matrixWorld));
      return { name: m.name, geo: g, material: m.material };
    });
    const bbox = new THREE.Box3();
    baked.forEach((b) => { b.geo.computeBoundingBox(); bbox.union(b.geo.boundingBox); });
    const yc = (bbox.min.y + bbox.max.y) / 2;
    const halfH = (bbox.max.y - bbox.min.y) / 2;

    // String line: vertices of the string mesh in the "pure string" band (30–50 % of half-height).
    const stringPart = baked.find((b) => /cuerda|string/i.test(b.name));
    let sx = 0, sz = 0, sr = 0.004;
    if (stringPart) {
      const p = stringPart.geo.attributes.position;
      let n = 0;
      for (let i = 0; i < p.count; i++) {
        const h = Math.abs(p.getY(i) - yc) / halfH;
        if (h > 0.3 && h < 0.55) { sx += p.getX(i); sz += p.getZ(i); n++; }
      }
      if (n) {
        sx /= n; sz /= n;
        // Radius = half the string's sideways (x) thickness; z drifts slightly along a slanted string.
        let xmin = Infinity, xmax = -Infinity;
        for (let i = 0; i < p.count; i++) {
          const h = Math.abs(p.getY(i) - yc) / halfH;
          if (h > 0.3 && h < 0.55) { xmin = Math.min(xmin, p.getX(i)); xmax = Math.max(xmax, p.getX(i)); }
        }
        sr = Math.max(0.002, (xmax - xmin) / 2);
      }
    }
    // Grip: centre of the main limb mesh around mid-height.
    let gz = 0, gn = 0;
    {
      const mainBaked = baked.find((b) => b.name === main.name);
      const p = mainBaked.geo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        if (Math.abs(p.getY(i) - yc) < halfH * 0.06) { gz += p.getZ(i); gn++; }
      }
      gz = gn ? gz / gn : (bbox.min.z + bbox.max.z) / 2;
    }
    // Model origin = grip, aligned with the string in x so the arrow lies on the string plane.
    const shift = new THREE.Vector3(-sx, -yc, -gz);
    baked.forEach((b) => b.geo.translate(shift.x, shift.y, shift.z));
    this.braceModel = sz - gz; // string rest distance behind the grip (model units)
    this.halfHModel = halfH;
    const yCut = halfH * CONFIG.bow.stringCut;

    // Cut the straight string section out of the string mesh.
    if (stringPart) {
      const g = stringPart.geo;
      const p = g.attributes.position;
      const idx = g.index ? g.index.array : [...Array(p.count).keys()];
      const keep = [];
      const near = (i) => Math.hypot(p.getX(i), p.getZ(i) - this.braceModel) < sr + halfH * 0.02 && Math.abs(p.getY(i)) < yCut;
      for (let t = 0; t < idx.length; t += 3) {
        const a = idx[t], b = idx[t + 1], c = idx[t + 2];
        if (!(near(a) || near(b) || near(c))) keep.push(a, b, c);
      }
      console.log(`[bow] string cut: removed ${(idx.length - keep.length) / 3} of ${idx.length / 3} triangles from "${stringPart.name}"`);
      g.setIndex(keep);
    }

    // Bow materials: double-sided clones with a limb-flex vertex shader (arrows keep the original).
    // Parts that sit on the string (beads) also follow the string when it is drawn.
    const srcMat = baked[0].material;
    const makeMat = (onString) => {
      const mat = srcMat.clone();
      // The GLB marks the material alphaMode BLEND. Blended surfaces don't write depth, so the
      // ribbon's back faces drew over its front faces. Render opaque + double-sided with an
      // alpha cutout instead (keeps the feather silhouettes).
      mat.side = THREE.DoubleSide;
      mat.transparent = false;
      mat.depthWrite = true;
      mat.alphaTest = 0.5;
      mat.onBeforeCompile = (shader) => {
        Object.assign(shader.uniforms, this.flexUniforms);
        shader.vertexShader =
          'uniform float uDraw; uniform float uHalfH; uniform float uFlexZ; uniform float uFlexY; uniform float uNock; uniform float uCut;\n' +
          shader.vertexShader.replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
            ${onString
              ? 'transformed.z += uNock * max(0.0, 1.0 - abs(transformed.y) / uCut);'
              : `float bh = abs(transformed.y) / uHalfH;
            float bt = max(0.0, bh - 0.12) / 0.88; bt *= bt;
            transformed.z += uDraw * uFlexZ * bt;
            transformed.y -= sign(transformed.y) * uDraw * uFlexY * bt;`}`,
          );
      };
      mat.customProgramCacheKey = () => (onString ? 'bow-string-part' : 'bow-flex');
      return mat;
    };
    const flexMat = makeMat(false);
    const stringMat = makeMat(true);
    this.flexUniforms.uHalfH.value = halfH;
    this.flexUniforms.uFlexZ.value = halfH * CONFIG.bow.flexBack;
    this.flexUniforms.uFlexY.value = halfH * CONFIG.bow.flexIn;
    this.flexUniforms.uCut.value = yCut;
    console.log(`[bow] material: source alphaMode ${srcMat.transparent ? 'BLEND' : 'OPAQUE/MASK'}, side ${srcMat.side} -> opaque, alphaTest 0.5, DoubleSide`);
    for (const b of baked) {
      // A mesh lying entirely on the string line (within ~2.5 cm) moves with the string.
      b.geo.computeBoundingBox();
      const bb = b.geo.boundingBox;
      const onString = b !== stringPart && Math.max(Math.abs(bb.min.x), Math.abs(bb.max.x)) < sr + halfH * 0.04 &&
        Math.abs(bb.min.z - this.braceModel) < halfH * 0.04 && Math.abs(bb.max.z - this.braceModel) < halfH * 0.04 && Math.max(-bb.min.y, bb.max.y) < yCut * 1.15;
      if (onString) console.log(`[bow] "${b.name}" sits on the string — it will follow the draw.`);
      const m = new THREE.Mesh(b.geo, onString ? stringMat : flexMat);
      m.name = b.name;
      m.frustumCulled = false;
      this.model.add(m);
    }

    const scale = CONFIG.bow.height / (halfH * 2);
    this.bowScale = scale;
    this.model.scale.setScalar(scale);
    this.brace = this.braceModel * scale; // metres
    this.stringTop0 = new THREE.Vector3(0, yCut, this.braceModel);
    this.stringBottom0 = new THREE.Vector3(0, -yCut, this.braceModel);
    console.log(`[bow] grip at origin, brace height ${(this.brace * 100).toFixed(1)} cm, string radius ${(sr * scale * 1000).toFixed(1)} mm`);

    // 4) Dynamic string: two thin cylinders, in model space.
    const strMat = new THREE.MeshStandardMaterial({ color: CONFIG.bow.stringColor, roughness: 0.7, side: THREE.DoubleSide });
    const strGeo = new THREE.CylinderGeometry(1, 1, 1, 6, 1, true).translate(0, 0.5, 0);
    this.strings = [new THREE.Mesh(strGeo, strMat), new THREE.Mesh(strGeo, strMat)];
    this.stringRadius = Math.max(sr, 0.0025 / scale);
    this.strings.forEach((s) => { s.frustumCulled = false; this.model.add(s); });

    this.applyOffsets();

    // 5) Arrow template: tip at origin pointing -Z, CONFIG.arrows.length long.
    this.arrowTemplate = new THREE.Group();
    if (arrowMesh) {
      const holder = new THREE.Group();
      arrowWorld.decompose(arrowMesh.position, arrowMesh.quaternion, arrowMesh.scale);
      arrowMesh.material = arrowMesh.material.clone();
      arrowMesh.material.side = THREE.DoubleSide;
      arrowMesh.material.transparent = false;
      arrowMesh.material.depthWrite = true;
      arrowMesh.material.alphaTest = 0.5;
      holder.add(arrowMesh);
      holder.quaternion.copy(this.autoQuat);
      holder.updateMatrixWorld(true);
      const ab = new THREE.Box3().setFromObject(holder);
      const wrap = new THREE.Group();
      wrap.add(holder);
      holder.position.set(-(ab.min.x + ab.max.x) / 2, -(ab.min.y + ab.max.y) / 2, -ab.min.z);
      wrap.scale.setScalar(CONFIG.arrows.length / (ab.max.z - ab.min.z));
      this.arrowTemplate.add(wrap);
    } else {
      this.arrowTemplate.add(makeProceduralArrow(CONFIG.arrows.length));
    }
    this.arrowTemplate.traverse((o) => { if (o.isMesh) o.frustumCulled = false; });

    // Nocked arrow: appears only while the string is held.
    this.nocked = this.arrowTemplate.clone();
    this.nocked.visible = false;
    this.group.add(this.nocked);

    this.setDraw(0, false);
    return this.summary;
  }

  applyOffsets() {
    this.offset.rotation.set(...CONFIG.bow.rotationDeg.map(THREE.MathUtils.degToRad));
  }

  /** Limb tip position (model space) for the current flex. Mirrors the vertex shader. */
  _flexed(p0, k, out) {
    const { uHalfH, uFlexZ, uFlexY } = this.flexUniforms;
    const bh = Math.abs(p0.y) / uHalfH.value;
    let bt = Math.max(0, bh - 0.12) / 0.88;
    bt *= bt;
    return out.set(p0.x, p0.y - Math.sign(p0.y) * k * uFlexY.value * bt, p0.z + k * uFlexZ.value * bt);
  }

  /**
   * Set the draw distance (metres behind the rest position) and whether an arrow is nocked.
   * Updates limb flex, both string segments and the nocked arrow.
   */
  setDraw(d, nocked) {
    this.draw = THREE.MathUtils.clamp(d, 0, CONFIG.bow.maxDraw);
    const k = this.draw / CONFIG.bow.maxDraw;
    this.flexUniforms.uDraw.value = k;
    const s = this.bowScale;
    this.flexUniforms.uNock.value = this.draw / s;
    const nock = _v.set(0, 0, this.braceModel + this.draw / s);
    const ends = [this._flexed(this.stringTop0, k, new THREE.Vector3()), this._flexed(this.stringBottom0, k, new THREE.Vector3())];
    ends.forEach((end, i) => {
      const seg = this.strings[i];
      _w.subVectors(nock, end);
      const len = _w.length();
      seg.position.copy(end);
      seg.quaternion.setFromUnitVectors(Y_AXIS, _w.divideScalar(len));
      seg.scale.set(this.stringRadius, len, this.stringRadius);
    });
    this.nocked.visible = !!nocked;
    // Arrow nock sits on the string; arrow origin is its tip.
    this.nocked.position.set(0, 0, this.brace + this.draw - CONFIG.arrows.length);
  }

  /** World position of the string's nocking point (where the drawing hand grabs). */
  nockWorld(out) {
    this.group.updateMatrixWorld(true);
    return out.set(0, 0, this.brace + this.draw).applyMatrix4(this.group.matrixWorld);
  }

  gripWorld(out) {
    this.group.updateMatrixWorld(true);
    return out.setFromMatrixPosition(this.group.matrixWorld);
  }

  setPose(position, quaternion) {
    this.group.position.copy(position);
    this.group.quaternion.copy(quaternion);
  }

  /** World-space firing point (nocked arrow tip) and direction (-Z of the bow). */
  getFireRay(origin, dir) {
    this.group.updateMatrixWorld(true);
    origin.copy(this.nocked.position).applyMatrix4(this.group.matrixWorld);
    dir.set(0, 0, -1).transformDirection(this.group.matrixWorld);
    return { origin, dir };
  }

  update(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt);
  }
}
