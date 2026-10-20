import * as THREE from 'three';

const _v = new THREE.Vector3(); // NOTE: Particles.emit() uses _v as scratch — never pass it in and reuse it after
const _bp = new THREE.Vector3(); // burn(): surface sample point
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const FLAT = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));

function radialTexture(size = 64) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.7)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/**
 * Fixed-capacity, single-draw-call particle system. `mode` 'additive' (fire, sparks) or
 * 'smoke' (normal blending, soft grey puffs that grow as they rise). Dead particles are
 * swap-removed so only live particles are uploaded/drawn.
 */
class Particles {
  constructor(scene, capacity = 900, mode = 'additive') {
    this.cap = capacity;
    this.mode = mode;
    this.n = 0;
    this.pos = new Float32Array(capacity * 3);
    this.vel = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 4);
    this.size = new Float32Array(capacity);
    this.baseSize = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.grav = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);
    this.alpha0 = new Float32Array(capacity);
    this.grow = new Float32Array(capacity);

    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.colAttr = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('pcolor', this.colAttr);
    geo.setAttribute('psize', this.sizeAttr);
    geo.setDrawRange(0, 0);
    const smoke = mode === 'smoke';
    this.material = new THREE.ShaderMaterial({
      uniforms: { uHalfH: { value: 800 } },
      vertexShader: /* glsl */ `
        attribute vec4 pcolor; attribute float psize; uniform float uHalfH; varying vec4 vColor;
        void main() {
          vColor = pcolor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(psize * projectionMatrix[1][1] * uHalfH / max(0.05, -mv.z), 0.0, 512.0);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: smoke
        ? /* glsl */ `
        varying vec4 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor.rgb, vColor.a * a * a);
        }`
        : /* glsl */ `
        varying vec4 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.05, d);
          float core = smoothstep(0.18, 0.0, d);
          gl_FragColor = vec4((vColor.rgb + core * 0.6) * a * vColor.a, 1.0);
        }`,
      blending: smoke ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = smoke ? 4 : 5;
    scene.add(this.points);
  }

  emit(origin, count, o = {}) {
    const color = o.color || new THREE.Color(1, 0.75, 0.2);
    const speed = o.speed ?? 2;
    const life = o.life ?? 0.8;
    const size = o.size ?? 0.05;
    // Copy the origin first: callers may pass a shared scratch vector (including _v).
    const ox = origin.x, oy = origin.y, oz = origin.z;
    for (let k = 0; k < count && this.n < this.cap; k++) {
      const i = this.n++;
      _v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      if (_v.lengthSq() > 1) _v.normalize();
      if (o.shell) _v.normalize(); // firework shells: particles on a sphere
      if (o.dir) _v.multiplyScalar(o.spread ?? 1).add(o.dir).normalize();
      const sp = speed * (o.shell ? 0.85 + Math.random() * 0.15 : 0.35 + Math.random() * 0.65);
      const r = o.radius ? o.radius * Math.random() : 0;
      this.pos[i * 3] = ox + _v.x * r;
      this.pos[i * 3 + 1] = oy + _v.y * r;
      this.pos[i * 3 + 2] = oz + _v.z * r;
      this.vel[i * 3] = _v.x * sp;
      this.vel[i * 3 + 1] = _v.y * sp + (o.up ?? 0);
      this.vel[i * 3 + 2] = _v.z * sp;
      const jitter = 0.85 + Math.random() * 0.3;
      const c = o.palette ? o.palette[(Math.random() * o.palette.length) | 0] : color;
      this.col[i * 4] = c.r * jitter;
      this.col[i * 4 + 1] = c.g * jitter;
      this.col[i * 4 + 2] = c.b * jitter;
      this.alpha0[i] = o.alpha ?? 1;
      this.col[i * 4 + 3] = this.alpha0[i];
      this.baseSize[i] = size * (0.6 + Math.random() * 0.8);
      this.size[i] = this.baseSize[i];
      this.maxLife[i] = this.life[i] = life * (0.6 + Math.random() * 0.6);
      this.grav[i] = o.gravity ?? -1.5;
      this.drag[i] = o.drag ?? 2.5;
      this.grow[i] = o.grow ?? 0;
    }
  }

  _kill(i) {
    const j = --this.n;
    if (i === j) return;
    for (let a = 0; a < 3; a++) {
      this.pos[i * 3 + a] = this.pos[j * 3 + a];
      this.vel[i * 3 + a] = this.vel[j * 3 + a];
    }
    for (let a = 0; a < 4; a++) this.col[i * 4 + a] = this.col[j * 4 + a];
    this.size[i] = this.size[j];
    this.baseSize[i] = this.baseSize[j];
    this.life[i] = this.life[j];
    this.maxLife[i] = this.maxLife[j];
    this.grav[i] = this.grav[j];
    this.drag[i] = this.drag[j];
    this.alpha0[i] = this.alpha0[j];
    this.grow[i] = this.grow[j];
  }

  update(dt, halfH) {
    this.material.uniforms.uHalfH.value = halfH;
    for (let i = this.n - 1; i >= 0; i--) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this._kill(i);
        continue;
      }
      const k = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= k;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k + this.grav[i] * dt;
      this.vel[i * 3 + 2] *= k;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const f = this.life[i] / this.maxLife[i];
      this.col[i * 4 + 3] = this.alpha0[i] * (this.mode === 'smoke' ? Math.min(1, f * 2) : f);
      this.size[i] = this.grow[i] ? this.baseSize[i] * (1 + this.grow[i] * (1 - f)) : this.baseSize[i] * (0.4 + 0.6 * f);
    }
    const geo = this.points.geometry;
    geo.setDrawRange(0, this.n);
    if (this.n) {
      this.posAttr.addUpdateRange(0, this.n * 3);
      this.colAttr.addUpdateRange(0, this.n * 4);
      this.sizeAttr.addUpdateRange(0, this.n);
      this.posAttr.needsUpdate = this.colAttr.needsUpdate = this.sizeAttr.needsUpdate = true;
    }
  }

  clear() {
    this.n = 0;
    this.points.geometry.setDrawRange(0, 0);
  }
}

/** Fixed pool of short-lived objects. */
class Pool {
  constructor(make, n) {
    this.items = Array.from({ length: n }, () => ({ obj: make(), t: 0, dur: 0, active: false }));
  }
  get() {
    let it = this.items.find((i) => !i.active);
    if (!it) it = this.items.reduce((a, b) => (a.t / a.dur > b.t / b.dur ? a : b)); // reuse most-finished
    it.active = true;
    it.t = 0;
    it.obj.visible = true;
    return it;
  }
  each(fn) {
    for (const it of this.items) if (it.active) fn(it);
  }
  clear() {
    for (const it of this.items) {
      it.active = false;
      it.obj.visible = false;
    }
  }
}

const GOLD = new THREE.Color(1.0, 0.78, 0.25);
const ORANGE = new THREE.Color(1.0, 0.45, 0.05);
const RED = new THREE.Color(1.0, 0.15, 0.05);
const WHITE = new THREE.Color(1, 1, 1);
const YELLOW = new THREE.Color(1, 0.95, 0.4);
const SMOKE = new THREE.Color(0.22, 0.2, 0.19);
const FLAMES = [new THREE.Color(1, 0.35, 0.02), new THREE.Color(1, 0.6, 0.08), new THREE.Color(1, 0.85, 0.3), new THREE.Color(0.95, 0.15, 0.02)];
const FIREWORK_PALETTES = [
  [new THREE.Color(1, 0.8, 0.2), new THREE.Color(1, 1, 0.7)], // gold
  [new THREE.Color(1, 0.15, 0.2), new THREE.Color(1, 0.6, 0.6)], // red
  [new THREE.Color(0.2, 1, 0.35), new THREE.Color(0.8, 1, 0.6)], // green
  [new THREE.Color(0.25, 0.5, 1), new THREE.Color(0.7, 0.85, 1)], // blue
  [new THREE.Color(1, 0.3, 0.9), new THREE.Color(1, 0.75, 1)], // pink
  [new THREE.Color(1, 0.5, 0.05), new THREE.Color(1, 0.85, 0.3)], // saffron
];

/** "HAPPY DUSSEHRA" banner for the sky, drawn once into a canvas texture. */
function dussehraTexture() {
  const c = document.createElement('canvas');
  c.width = 2048;
  c.height = 640;
  const g = c.getContext('2d');
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  // soft halo
  const halo = g.createRadialGradient(1024, 300, 50, 1024, 300, 900);
  halo.addColorStop(0, 'rgba(255,170,40,0.35)');
  halo.addColorStop(1, 'rgba(255,120,0,0)');
  g.fillStyle = halo;
  g.fillRect(0, 0, 2048, 640);
  g.font = 'bold 230px "Trebuchet MS", "Segoe UI", sans-serif';
  const grd = g.createLinearGradient(0, 140, 0, 360);
  grd.addColorStop(0, '#fff6c8');
  grd.addColorStop(0.45, '#ffcc33');
  grd.addColorStop(1, '#ff7a00');
  g.shadowColor = 'rgba(255,140,0,0.95)';
  g.shadowBlur = 60;
  g.lineWidth = 14;
  g.strokeStyle = 'rgba(90,20,0,0.9)';
  g.strokeText('HAPPY DUSSEHRA', 1024, 250);
  g.fillStyle = grd;
  g.fillText('HAPPY DUSSEHRA', 1024, 250);
  g.shadowBlur = 30;
  g.font = 'italic 92px "Trebuchet MS", "Segoe UI", sans-serif';
  g.fillStyle = '#ffe8b0';
  g.fillText('Victory of good over evil', 1024, 470);
  // ornaments
  g.fillStyle = '#ffcc33';
  for (const x of [330, 1718]) {
    g.beginPath();
    g.moveTo(x, 470 - 26);
    g.lineTo(x + 26, 470);
    g.lineTo(x, 470 + 26);
    g.lineTo(x - 26, 470);
    g.closePath();
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.particles = new Particles(scene, 2600, 'additive');
    this.smoke = new Particles(scene, 500, 'smoke');
    this.glowTex = radialTexture();
    this.textCache = new Map();

    this.flashes = new Pool(() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, toneMapped: false }));
      s.visible = false;
      s.renderOrder = 6;
      scene.add(s);
      return s;
    }, 16);

    const ringGeo = new THREE.RingGeometry(0.88, 1, 64);
    this.rings = new Pool(() => {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide, toneMapped: false }));
      m.visible = false;
      m.renderOrder = 6;
      scene.add(m);
      return m;
    }, 10);

    this.texts = new Pool(() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ depthTest: false, depthWrite: false, transparent: true }));
      s.visible = false;
      s.renderOrder = 20;
      scene.add(s);
      return s;
    }, 8);

    // Brahmastra aura: open cylinder with a vertical additive gradient.
    this.aura = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1, 1, 40, 1, true),
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uIntensity: { value: 0 } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
        fragmentShader: `uniform float uTime; uniform float uIntensity; varying vec2 vUv;
          void main(){
            float band = 0.55 + 0.45 * sin(vUv.x * 50.0 + uTime * 6.0 + vUv.y * 8.0);
            float fade = pow(1.0 - vUv.y, 1.4);
            vec3 c = mix(vec3(1.0,0.55,0.1), vec3(1.0,0.9,0.5), vUv.y);
            gl_FragColor = vec4(c * fade * band * uIntensity, 1.0);
          }`,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    );
    this.aura.visible = false;
    this.aura.renderOrder = 4;
    scene.add(this.aura);

    // Explosion light: always in the scene (intensity 0) so the light count never changes
    // — adding/removing lights would force a shader recompile and a hitch mid-explosion.
    this.light = new THREE.PointLight(0xffa040, 0, 30, 2);
    scene.add(this.light);
    this.lightT = 0;

    // Debris shards for the big explosion (one instanced draw call).
    const shardGeo = new THREE.TetrahedronGeometry(1, 0);
    this.shardMat = new THREE.MeshStandardMaterial({ color: 0x7a2a10, emissive: 0xff5a10, emissiveIntensity: 1.5, roughness: 0.6, metalness: 0.2 });
    this.shards = new THREE.InstancedMesh(shardGeo, this.shardMat, 90);
    this.shards.frustumCulled = false;
    this.shards.count = 0;
    scene.add(this.shards);
    this.shardData = Array.from({ length: 90 }, () => ({ p: new THREE.Vector3(), v: new THREE.Vector3(), r: new THREE.Euler(), w: new THREE.Vector3(), s: 1, life: 0 }));
    this.shardsActive = 0;

    // Fireworks rockets.
    this.rockets = [];

    // HAPPY DUSSEHRA sky banner.
    this.banner = new THREE.Sprite(new THREE.SpriteMaterial({ map: dussehraTexture(), transparent: true, depthWrite: false, toneMapped: false }));
    this.banner.visible = false;
    this.banner.renderOrder = 25;
    scene.add(this.banner);
    this.bannerT = -1;

    // Damage vignette: small inverted sphere around the viewer's head.
    this.damage = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xff1a00, side: THREE.BackSide, transparent: true, opacity: 0, depthTest: false, depthWrite: false }),
    );
    this.damage.renderOrder = 100;
    this.damage.visible = false;
    camera.add(this.damage);
    this.damageT = 0;
  }

  _textTexture(str, color) {
    const key = str + color;
    if (this.textCache.has(key)) return this.textCache.get(key);
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 96;
    const g = c.getContext('2d');
    g.font = 'bold 64px "Trebuchet MS", sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineWidth = 8;
    g.strokeStyle = 'rgba(30,8,0,0.9)';
    g.strokeText(str, 128, 50);
    g.fillStyle = color;
    g.fillText(str, 128, 50);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    this.textCache.set(key, t);
    return t;
  }

  flash(pos, color, size, dur = 0.35) {
    const it = this.flashes.get();
    it.dur = dur;
    it.size = size;
    it.obj.position.copy(pos);
    it.obj.material.color.copy(color);
  }

  /** Expanding ring. flat = lies on the ground (shockwave); otherwise faces the viewer. */
  ring(pos, color, radius, dur = 0.8, flat = false) {
    const it = this.rings.get();
    it.dur = dur;
    it.size = radius;
    it.flat = flat;
    it.obj.position.copy(pos);
    it.obj.material.color.copy(color);
  }

  floatText(pos, str, color = '#ffd34d', size = 0.14) {
    const it = this.texts.get();
    it.dur = 1.5;
    it.size = size;
    it.start = pos.clone();
    it.obj.material.map = this._textTexture(str, color);
    it.obj.material.needsUpdate = true;
    it.obj.position.copy(pos);
    it.obj.scale.set(size * 2.67, size, 1);
  }

  /** Normal hit: orange flash + golden sparks. */
  hit(pos, scale = 1) {
    this.flash(pos, ORANGE, 0.5 * scale, 0.3);
    this.particles.emit(pos, 40, { color: GOLD, speed: 2.6 * scale, life: 0.8, size: 0.04 * scale });
  }

  /** Target destroyed: golden explosion, ring, sparks + a little smoke. */
  destroy(pos, scale = 1) {
    this.flash(pos, GOLD, 1.1 * scale, 0.55);
    this.flash(pos, WHITE, 0.45 * scale, 0.2);
    this.ring(pos, GOLD, 0.8 * scale, 0.7);
    this.particles.emit(pos, 90, { color: GOLD, speed: 3.6 * scale, life: 1.2, size: 0.05 * scale, gravity: -1.2 * scale });
    this.particles.emit(pos, 35, { palette: FLAMES, speed: 1.6 * scale, life: 0.9, size: 0.08 * scale, gravity: 0.8 * scale });
    this.smoke.emit(pos, 6, { color: SMOKE, speed: 0.4 * scale, up: 0.4 * scale, life: 1.8, size: 0.25 * scale, alpha: 0.35, gravity: 0.2, drag: 1, grow: 1.5 });
    this.lightPulse(pos, 3 * scale, 0.35, scale * 8);
  }

  bodyHit(pos) {
    this.flash(pos, ORANGE, 0.2, 0.15);
    this.particles.emit(pos, 10, { color: ORANGE, speed: 1.3, life: 0.45, size: 0.03 });
  }

  fireballBurst(pos) {
    this.flash(pos, RED, 0.7, 0.35);
    this.particles.emit(pos, 50, { palette: FLAMES, speed: 2.8, life: 0.8, size: 0.05 });
  }

  playerDamage() {
    this.damageT = 0.5;
  }

  /** Short bright point-light flash (lights up the real-room-coloured scene objects). */
  lightPulse(pos, intensity, dur, distance) {
    this.light.position.copy(pos);
    this.light.distance = distance;
    this.lightPeak = intensity;
    this.lightDur = dur;
    this.lightT = dur;
  }

  /** One frame of a burning effigy: flames, smoke and cracker pops at surface points. */
  burn(surfacePoint, H, rate = 1) {
    const s = H / 2.5;
    for (let i = 0; i < Math.ceil(12 * rate); i++) {
      surfacePoint(_bp);
      // big licking flames + small bright sparks
      this.particles.emit(_bp, 1, { palette: FLAMES, speed: 0.3 * s, up: 1.0 * s, life: 1.0, size: 0.24 * s, gravity: 1.0 * s, drag: 1.2, alpha: 0.75 });
      if (i % 3 === 0) this.particles.emit(_bp, 1, { color: YELLOW, speed: 0.8 * s, up: 1.6 * s, life: 0.8, size: 0.05 * s, gravity: 0.4 * s, drag: 0.6 });
    }
    if (Math.random() < 0.5 * rate) {
      surfacePoint(_bp);
      if (_bp.y > 0) this.smoke.emit(_bp, 1, { color: SMOKE, speed: 0.15 * s, up: 0.5 * s, life: 2.6, size: 0.35 * s, alpha: 0.4, gravity: 0.25 * s, drag: 0.6, grow: 2 });
    }
    return Math.random() < 0.12 * rate; // caller plays a crackle when a cracker pops
  }

  crackerPop(pos, H) {
    const s = H / 2.5;
    this.flash(pos, YELLOW, 0.35 * s, 0.12);
    this.particles.emit(pos, 18, { color: WHITE, palette: [WHITE, YELLOW], speed: 2.2 * s, life: 0.35, size: 0.025 * s, gravity: -2 });
  }

  /** The big one: flash, light, shockwaves, fire, smoke and flying debris. */
  bigExplosion(center, floor, H) {
    const s = H / 2.5;
    this.flash(center, WHITE, H * 1.6, 0.5);
    this.flash(center, GOLD, H * 2.6, 1.3);
    this.flash(center, ORANGE, H * 3.4, 1.8);
    this.ring(center, GOLD, H * 1.1, 1.1);
    this.ring(center, WHITE, H * 0.6, 0.6);
    this.ring(new THREE.Vector3(center.x, floor + 0.05, center.z), ORANGE, H * 1.6, 1.4, true); // ground shockwave
    this.ring(new THREE.Vector3(center.x, floor + 0.05, center.z), GOLD, H * 0.9, 1.0, true);
    this.particles.emit(center, 650, { palette: [GOLD, YELLOW, ORANGE, WHITE], speed: 7 * s, life: 2.0, size: 0.07 * s, gravity: -1.6 * s, radius: H * 0.18, drag: 1.4 });
    this.particles.emit(center, 260, { palette: FLAMES, speed: 3 * s, up: 1 * s, life: 1.6, size: 0.16 * s, gravity: 0.6 * s, radius: H * 0.25, drag: 1.5 });
    this.smoke.emit(center, 110, { color: SMOKE, speed: 1.6 * s, up: 0.6 * s, life: 4, size: 0.5 * s, alpha: 0.45, gravity: 0.2 * s, drag: 0.9, radius: H * 0.2, grow: 2.5 });
    this.lightPulse(center, 60 * s * s, 1.6, H * 7);
    // debris
    this.shardsActive = this.shardData.length;
    this.shards.count = this.shardsActive;
    for (const d of this.shardData) {
      d.p.set(center.x + (Math.random() - 0.5) * H * 0.3, center.y + (Math.random() - 0.5) * H * 0.5, center.z + (Math.random() - 0.5) * H * 0.2);
      d.v.set(Math.random() * 2 - 1, Math.random() * 1.4 - 0.2, Math.random() * 2 - 1).normalize().multiplyScalar((3 + Math.random() * 6) * s);
      d.r.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      d.w.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      d.s = (0.03 + Math.random() * 0.06) * s;
      d.life = 2.2 + Math.random() * 1.2;
      d.floor = floor;
    }
  }

  /** Launch a firework rocket from `base`; bursts at `height` metres above it. */
  firework(base, height, s = 1) {
    const pal = FIREWORK_PALETTES[(Math.random() * FIREWORK_PALETTES.length) | 0];
    this.rockets.push({
      p: base.clone(),
      v: new THREE.Vector3((Math.random() - 0.5) * 1.2 * s, (4 + Math.random() * 2) * s, (Math.random() - 0.5) * 1.2 * s),
      burstY: base.y + height * (0.8 + Math.random() * 0.4),
      pal,
      s,
    });
  }

  showBanner(pos, width) {
    this.banner.position.copy(pos);
    this.banner.userData.base = pos.clone();
    this.banner.userData.width = width;
    this.banner.visible = true;
    this.bannerT = 0;
  }

  startAura(center, radius, height) {
    this.aura.visible = true;
    this.aura.position.set(center.x, center.y + height / 2, center.z);
    this.aura.scale.set(radius, height, radius);
    this.aura.material.uniforms.uIntensity.value = 0;
  }

  setAura(intensity) {
    this.aura.material.uniforms.uIntensity.value = intensity;
    this.aura.visible = intensity > 0.001;
  }

  update(dt, time, renderer, sfx) {
    // Pixel scale for point sprites (per-eye viewport height in XR).
    let halfH = renderer.domElement.height / 2;
    if (renderer.xr.isPresenting) {
      const cams = renderer.xr.getCamera().cameras;
      if (cams.length && cams[0].viewport.w > 0) halfH = cams[0].viewport.w / 2;
    }

    // rockets: rise with a sparkling trail, then burst into a coloured shell
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.v.y -= 2.5 * dt * r.s;
      r.p.addScaledVector(r.v, dt);
      this.particles.emit(r.p, 3, { color: YELLOW, speed: 0.3 * r.s, life: 0.6, size: 0.08 * r.s, gravity: -1 });
      if (r.p.y >= r.burstY || r.v.y <= 0) {
        this.particles.emit(r.p, 240, { palette: r.pal, shell: true, speed: 9 * r.s, life: 2.2, size: 0.16 * r.s, gravity: -1.6 * r.s, drag: 1.2 });
        this.particles.emit(r.p, 90, { palette: r.pal, shell: true, speed: 4.5 * r.s, life: 1.8, size: 0.12 * r.s, gravity: -1.2 * r.s, drag: 1.2 });
        this.particles.emit(r.p, 50, { color: WHITE, speed: 3 * r.s, life: 1.2, size: 0.07 * r.s, gravity: -1 });
        this.flash(r.p, r.pal[0], 5 * r.s, 0.5);
        sfx?.play('firework');
        this.rockets.splice(i, 1);
      }
    }

    this.particles.update(dt, halfH);
    this.smoke.update(dt, halfH);

    this.camera.getWorldQuaternion(_q);
    this.flashes.each((it) => {
      it.t += dt;
      const f = it.t / it.dur;
      if (f >= 1) {
        it.active = false;
        it.obj.visible = false;
        return;
      }
      it.obj.scale.setScalar(it.size * (0.6 + f * 0.8));
      it.obj.material.opacity = 1 - f;
    });
    this.rings.each((it) => {
      it.t += dt;
      const f = it.t / it.dur;
      if (f >= 1) {
        it.active = false;
        it.obj.visible = false;
        return;
      }
      it.obj.quaternion.copy(it.flat ? FLAT : _q);
      it.obj.scale.setScalar(0.05 + it.size * Math.sqrt(f));
      it.obj.material.opacity = 1 - f;
    });
    this.texts.each((it) => {
      it.t += dt;
      const f = it.t / it.dur;
      if (f >= 1) {
        it.active = false;
        it.obj.visible = false;
        return;
      }
      it.obj.position.copy(it.start).y += f * 0.35;
      it.obj.material.opacity = f < 0.7 ? 1 : 1 - (f - 0.7) / 0.3;
    });

    // explosion light decay
    if (this.lightT > 0) {
      this.lightT = Math.max(0, this.lightT - dt);
      const f = this.lightT / this.lightDur;
      this.light.intensity = this.lightPeak * f * f;
    } else this.light.intensity = 0;

    // debris shards
    if (this.shardsActive) {
      let alive = 0;
      this.shardData.forEach((d, i) => {
        d.life -= dt;
        if (d.life > 0) {
          alive++;
          d.v.y -= 9.8 * dt;
          d.p.addScaledVector(d.v, dt);
          if (d.p.y < d.floor + d.s) { // bounce & settle on the floor
            d.p.y = d.floor + d.s;
            d.v.y *= -0.3;
            d.v.x *= 0.6;
            d.v.z *= 0.6;
          }
          d.r.x += d.w.x * dt;
          d.r.y += d.w.y * dt;
          d.r.z += d.w.z * dt;
          if (Math.random() < 0.15) this.particles.emit(d.p, 1, { palette: FLAMES, speed: 0.1, life: 0.5, size: d.s * 1.5, gravity: 0.5 });
        }
        const sc = d.life > 0 ? d.s * Math.min(1, d.life) : 0;
        _m.compose(d.p, _q.setFromEuler(d.r), _s.set(sc, sc, sc));
        this.shards.setMatrixAt(i, _m);
      });
      this.shards.instanceMatrix.needsUpdate = true;
      this.shardMat.emissiveIntensity = 1.5;
      if (!alive) {
        this.shardsActive = 0;
        this.shards.count = 0;
      }
    }

    // HAPPY DUSSEHRA banner: fade/scale in, gentle bob
    if (this.bannerT >= 0) {
      this.bannerT += dt;
      const k = Math.min(1, this.bannerT / 1.2);
      const ease = 1 - Math.pow(1 - k, 3);
      const w = this.banner.userData.width * (0.6 + 0.4 * ease);
      this.banner.scale.set(w, w * (640 / 2048), 1);
      this.banner.material.opacity = ease;
      this.banner.position.copy(this.banner.userData.base).y += Math.sin(time * 1.2) * w * 0.02;
    }

    this.aura.material.uniforms.uTime.value = time;

    if (this.damageT > 0) {
      this.damageT -= dt;
      this.damage.visible = true;
      this.damage.material.opacity = Math.max(0, this.damageT / 0.5) * 0.45;
    } else this.damage.visible = false;
  }

  clear() {
    this.particles.clear();
    this.smoke.clear();
    this.flashes.clear();
    this.rings.clear();
    this.texts.clear();
    this.setAura(0);
    this.damageT = 0;
    this.rockets.length = 0;
    this.shardsActive = 0;
    this.shards.count = 0;
    this.lightT = 0;
    this.light.intensity = 0;
    this.banner.visible = false;
    this.bannerT = -1;
  }
}

export const COLORS = { GOLD, ORANGE, RED, WHITE, YELLOW };

/** Procedural WebAudio sound effects (no audio files needed). */
export class Sfx {
  constructor() {
    this.ctx = null;
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate * 2;
      this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noise.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  _env(node, t0, a, peak, dur) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    node.connect(g);
    g.connect(this.master);
    return g;
  }

  _osc(type, f0, f1, dur, peak = 0.3, delay = 0) {
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    this._env(o, t, 0.005, peak, dur);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  _noise(dur, filterType, f0, f1, peak = 0.3, delay = 0) {
    const t = this.ctx.currentTime + delay;
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise;
    const f = this.ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    s.connect(f);
    this._env(f, t, 0.005, peak, dur);
    s.start(t);
    s.stop(t + dur + 0.05);
  }

  play(name) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    switch (name) {
      case 'shoot': this._osc('triangle', 260, 90, 0.18, 0.35); this._noise(0.12, 'highpass', 3000, 1500, 0.15); break;
      case 'body': this._noise(0.15, 'lowpass', 900, 200, 0.4); break;
      case 'hit': this._osc('sine', 880, 880, 0.35, 0.25); this._osc('sine', 1320, 1320, 0.35, 0.15, 0.04); break;
      case 'destroy': this._osc('sine', 660, 1320, 0.4, 0.3); this._noise(0.6, 'lowpass', 2500, 200, 0.5); this._osc('sine', 110, 40, 0.5, 0.5); break;
      case 'warn': this._osc('sawtooth', 140, 520, 1.2, 0.08); break;
      case 'launch': this._noise(0.6, 'bandpass', 400, 1200, 0.25); break;
      case 'damage': this._osc('square', 120, 60, 0.3, 0.25); this._noise(0.25, 'lowpass', 1200, 300, 0.3); break;
      case 'shotdown': this._noise(0.3, 'bandpass', 1500, 400, 0.35); break;
      case 'explode': this._noise(1.8, 'lowpass', 3000, 60, 0.8); this._osc('sine', 90, 30, 1.6, 0.7); break;
      case 'bigboom':
        this._noise(3.5, 'lowpass', 4000, 40, 1.0);
        this._osc('sine', 70, 22, 3.0, 0.9);
        this._osc('sawtooth', 50, 25, 1.2, 0.25);
        for (let i = 0; i < 14; i++) this._noise(0.06, 'highpass', 3000, 2000, 0.25, 0.6 + Math.random() * 2.2); // crackling aftermath
        break;
      case 'burn': this._noise(2.4, 'bandpass', 600, 300, 0.25); break;
      case 'crackle': this._noise(0.05, 'highpass', 2500, 1800, 0.35); this._noise(0.04, 'highpass', 3000, 2000, 0.2, 0.05); break;
      case 'firework':
        this._noise(0.9, 'lowpass', 1800, 80, 0.55);
        for (let i = 0; i < 6; i++) this._noise(0.04, 'highpass', 3500, 2500, 0.15, 0.25 + Math.random() * 0.8);
        break;
      case 'whistle': this._osc('sine', 900, 2400, 0.9, 0.06); break;
      case 'charge': this._osc('sawtooth', 110, 880, 2.0, 0.08); this._osc('sine', 220, 1760, 2.0, 0.12); break;
      case 'victory': [523, 659, 784, 1046, 1318].forEach((f, i) => this._osc('triangle', f, f, 1.4, 0.18, i * 0.13)); break;
      case 'grab': this._osc('sine', 300, 500, 0.08, 0.2); this._noise(0.06, 'bandpass', 1800, 900, 0.12); break;
      case 'nock': this._osc('triangle', 900, 600, 0.05, 0.15); break;
      case 'creak': this._noise(0.12, 'bandpass', 500, 350, 0.06); break;
      case 'click': this._osc('sine', 1200, 900, 0.06, 0.15); break;
      default: break;
    }
  }
}
