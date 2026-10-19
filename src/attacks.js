import * as THREE from 'three';
import { CONFIG } from './config.js';
import { COLORS } from './effects.js';

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();

/**
 * Optional Ravana fireball attack: charge-up glow (warning) -> straight, slow, predictable
 * flight toward (beside) the player's head. Can be shot down with arrows.
 */
export class Fireballs {
  constructor(scene, effects, sfx) {
    this.effects = effects;
    this.sfx = sfx;
    this.enabled = CONFIG.attacks.enabled;
    const geo = new THREE.SphereGeometry(1, 16, 12);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffb040, toneMapped: false });
    const glowMat = new THREE.SpriteMaterial({ map: effects.glowTex, color: 0xff4a00, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, toneMapped: false });
    this.pool = Array.from({ length: 4 }, () => {
      const g = new THREE.Group();
      const core = new THREE.Mesh(geo, coreMat);
      const glow = new THREE.Sprite(glowMat);
      glow.scale.setScalar(5);
      const halo = new THREE.Sprite(glowMat);
      halo.scale.setScalar(9);
      g.add(core, glow, halo);
      g.visible = false;
      scene.add(g);
      return { obj: g, state: 'idle', t: 0, vel: new THREE.Vector3() };
    });
    this.timer = CONFIG.attacks.firstDelay;
  }

  reset() {
    for (const f of this.pool) {
      f.state = 'idle';
      f.obj.visible = false;
    }
    this.timer = CONFIG.attacks.firstDelay;
  }

  get warning() {
    return this.pool.some((f) => f.state === 'charging');
  }

  /**
   * @param {THREE.Vector3} head  player head (camera) world position
   * @returns {boolean} true if the player was hit this frame
   */
  update(dt, active, ravana, head) {
    const A = CONFIG.attacks;
    let playerHit = false;
    if (active && this.enabled) {
      this.timer -= dt;
      if (this.timer <= 0) {
        this.timer = A.cooldown;
        const start = ravana.chestPoint(new THREE.Vector3());
        // Never spawn on top of the player.
        if (start.distanceTo(head) >= A.minPlayerDistance) {
          const f = this.pool.find((p) => p.state === 'idle');
          if (f) {
            f.state = 'charging';
            f.t = 0;
            f.obj.position.copy(start);
            f.obj.scale.setScalar(0.01);
            f.obj.visible = true;
            this.sfx.play('warn');
          }
        }
      }
    }

    for (const f of this.pool) {
      if (f.state === 'idle') continue;
      f.t += dt;
      if (f.state === 'charging') {
        // Warning: grows and flickers at the launch point.
        const k = Math.min(1, f.t / A.warningTime);
        f.obj.scale.setScalar(A.radius * (0.2 + 0.8 * k) * (1 + 0.15 * Math.sin(f.t * 30)));
        if (Math.random() < 0.5) this.effects.particles.emit(f.obj.position, 1, { color: COLORS.ORANGE, speed: 0.6, life: 0.4, size: 0.04, radius: A.radius * 2, gravity: 0.5 });
        if (!active) { this._kill(f); continue; }
        if (f.t >= A.warningTime) {
          // Aim at (or just beside) where the head is NOW; flight is then a straight line.
          _v.set((Math.random() * 2 - 1) * A.maxLateralOffset, (Math.random() * 2 - 1) * A.maxLateralOffset * 0.5, 0);
          _w.copy(head).add(_v).sub(f.obj.position).normalize();
          f.vel.copy(_w).multiplyScalar(A.speed);
          f.state = 'flying';
          f.t = 0;
          this.sfx.play('launch');
        }
      } else if (f.state === 'flying') {
        f.obj.position.addScaledVector(f.vel, dt);
        f.obj.scale.setScalar(A.radius * (1 + 0.1 * Math.sin(f.t * 25)));
        if (Math.random() < 0.6) this.effects.particles.emit(f.obj.position, 1, { color: COLORS.ORANGE, speed: 0.2, life: 0.5, size: 0.05, gravity: 0.3 });
        if (f.obj.position.distanceTo(head) < A.radius + A.playerRadius) {
          playerHit = true;
          this.effects.fireballBurst(f.obj.position);
          this._kill(f);
        } else if (f.t > A.lifetime || !active) {
          this._kill(f);
        } else {
          // Despawn once well past the player.
          _v.subVectors(f.obj.position, head);
          if (_v.dot(f.vel) > 0 && _v.length() > 2) this._kill(f);
        }
      }
    }
    return playerHit;
  }

  /** Arrow segment vs. fireballs. Returns the fireball hit or null. */
  segmentTest(p0, p1) {
    const r = CONFIG.attacks.radius * 1.6; // a little forgiving
    for (const f of this.pool) {
      if (f.state !== 'flying' && f.state !== 'charging') continue;
      const c = f.obj.position;
      _v.subVectors(p1, p0);
      const len2 = _v.lengthSq();
      const t = len2 > 0 ? THREE.MathUtils.clamp(_w.subVectors(c, p0).dot(_v) / len2, 0, 1) : 0;
      _w.copy(p0).addScaledVector(_v, t);
      if (_w.distanceTo(c) < r) return { fireball: f, point: c.clone() };
    }
    return null;
  }

  destroy(f) {
    this.effects.fireballBurst(f.obj.position);
    this._kill(f);
  }

  _kill(f) {
    f.state = 'idle';
    f.obj.visible = false;
  }
}
