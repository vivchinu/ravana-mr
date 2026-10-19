import * as THREE from 'three';

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();

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
 * One fixed-capacity, single-draw-call additive particle system. Dead particles are
 * swap-removed so only live particles are uploaded/drawn.
 */
class Particles {
  constructor(scene, capacity = 900) {
    this.cap = capacity;
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

    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.colAttr = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('pcolor', this.colAttr);
    geo.setAttribute('psize', this.sizeAttr);
    geo.setDrawRange(0, 0);
    this.material = new THREE.ShaderMaterial({
      uniforms: { uHalfH: { value: 800 } },
      vertexShader: /* glsl */ `
        attribute vec4 pcolor; attribute float psize; uniform float uHalfH; varying vec4 vColor;
        void main() {
          vColor = pcolor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(psize * projectionMatrix[1][1] * uHalfH / max(0.05, -mv.z), 0.0, 256.0);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        varying vec4 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(vColor.rgb * a * vColor.a, 1.0);
        }`,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
  }

  emit(origin, count, o = {}) {
    const color = o.color || new THREE.Color(1, 0.75, 0.2);
    const speed = o.speed ?? 2;
    const life = o.life ?? 0.8;
    const size = o.size ?? 0.05;
    for (let k = 0; k < count && this.n < this.cap; k++) {
      const i = this.n++;
      // random direction (optionally biased)
      _v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      if (_v.lengthSq() > 1) _v.normalize();
      if (o.dir) _v.multiplyScalar(o.spread ?? 1).add(o.dir).normalize();
      const sp = speed * (0.35 + Math.random() * 0.65);
      const r = o.radius ? o.radius * Math.random() : 0;
      this.pos[i * 3] = origin.x + _v.x * r;
      this.pos[i * 3 + 1] = origin.y + _v.y * r;
      this.pos[i * 3 + 2] = origin.z + _v.z * r;
      this.vel[i * 3] = _v.x * sp;
      this.vel[i * 3 + 1] = _v.y * sp + (o.up ?? 0);
      this.vel[i * 3 + 2] = _v.z * sp;
      const jitter = 0.85 + Math.random() * 0.3;
      this.col[i * 4] = color.r * jitter;
      this.col[i * 4 + 1] = color.g * jitter;
      this.col[i * 4 + 2] = color.b * jitter;
      this.alpha0[i] = o.alpha ?? 1;
      this.col[i * 4 + 3] = this.alpha0[i];
      this.baseSize[i] = size * (0.6 + Math.random() * 0.8);
      this.size[i] = this.baseSize[i];
      this.maxLife[i] = this.life[i] = life * (0.6 + Math.random() * 0.6);
      this.grav[i] = o.gravity ?? -1.5;
      this.drag[i] = o.drag ?? 2.5;
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
      this.col[i * 4 + 3] = this.alpha0[i] * f;
      this.size[i] = this.baseSize[i] * (0.4 + 0.6 * f);
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

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.particles = new Particles(scene);
    this.glowTex = radialTexture();
    this.textCache = new Map();

    this.flashes = new Pool(() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.visible = false;
      s.renderOrder = 6;
      scene.add(s);
      return s;
    }, 12);

    const ringGeo = new THREE.RingGeometry(0.88, 1, 48);
    this.rings = new Pool(() => {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide }));
      m.visible = false;
      m.renderOrder = 6;
      scene.add(m);
      return m;
    }, 8);

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

  ring(pos, color, radius, dur = 0.8) {
    const it = this.rings.get();
    it.dur = dur;
    it.size = radius;
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

  /** Normal hit: orange flash + golden particles. */
  hit(pos, scale = 1) {
    this.flash(pos, ORANGE, 0.45 * scale, 0.3);
    this.particles.emit(pos, 30, { color: GOLD, speed: 2.2 * scale, life: 0.7, size: 0.035 * scale });
  }

  /** Target destroyed: bigger golden explosion + expanding ring. */
  destroy(pos, scale = 1) {
    this.flash(pos, GOLD, 0.9 * scale, 0.5);
    this.flash(pos, WHITE, 0.4 * scale, 0.2);
    this.ring(pos, GOLD, 0.7 * scale, 0.7);
    this.particles.emit(pos, 70, { color: GOLD, speed: 3.2 * scale, life: 1.1, size: 0.05 * scale, gravity: -1 });
    this.particles.emit(pos, 25, { color: ORANGE, speed: 1.5 * scale, life: 0.9, size: 0.07 * scale, gravity: 0.6 });
  }

  bodyHit(pos) {
    this.flash(pos, ORANGE, 0.18, 0.15);
    this.particles.emit(pos, 8, { color: ORANGE, speed: 1.2, life: 0.4, size: 0.025 });
  }

  fireballBurst(pos) {
    this.flash(pos, RED, 0.6, 0.35);
    this.particles.emit(pos, 40, { color: ORANGE, speed: 2.5, life: 0.7, size: 0.05 });
  }

  playerDamage() {
    this.damageT = 0.5;
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

  update(dt, time, renderer) {
    // Pixel scale for point sprites (per-eye viewport height in XR).
    let halfH = renderer.domElement.height / 2;
    if (renderer.xr.isPresenting) {
      const cams = renderer.xr.getCamera().cameras;
      if (cams.length && cams[0].viewport.w > 0) halfH = cams[0].viewport.w / 2;
    }
    this.particles.update(dt, halfH);

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
      it.obj.quaternion.copy(_q);
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

    this.aura.material.uniforms.uTime.value = time;

    if (this.damageT > 0) {
      this.damageT -= dt;
      this.damage.visible = true;
      this.damage.material.opacity = Math.max(0, this.damageT / 0.5) * 0.45;
    } else this.damage.visible = false;
  }

  clear() {
    this.particles.clear();
    this.flashes.clear();
    this.rings.clear();
    this.texts.clear();
    this.setAura(0);
    this.damageT = 0;
  }
}

export const COLORS = { GOLD, ORANGE, RED, WHITE };

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
      const len = this.ctx.sampleRate;
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
      case 'charge': this._osc('sawtooth', 110, 880, 2.0, 0.08); this._osc('sine', 220, 1760, 2.0, 0.12); break;
      case 'victory': [523, 659, 784, 1046].forEach((f, i) => this._osc('triangle', f, f, 1.2, 0.18, i * 0.12)); break;
      case 'grab': this._osc('sine', 300, 500, 0.08, 0.2); this._noise(0.06, 'bandpass', 1800, 900, 0.12); break;
      case 'nock': this._osc('triangle', 900, 600, 0.05, 0.15); break;
      case 'creak': this._noise(0.12, 'bandpass', 500, 350, 0.06); break;
      case 'click': this._osc('sine', 1200, 900, 0.06, 0.15); break;
      default: break;
    }
  }
}
