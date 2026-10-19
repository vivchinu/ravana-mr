import * as THREE from 'three';
import { CONFIG } from './config.js';

const FORWARD = new THREE.Vector3(0, 0, -1);
const _dir = new THREE.Vector3();

/**
 * Pooled arrow projectiles. Each arrow's origin is its tip, so the swept segment
 * (previous tip -> current tip) is what gets collision-tested every frame.
 */
export class Arrows {
  constructor(scene, template) {
    this.scene = scene;
    this.pool = [];
    this.active = [];
    this.fired = 0;
    for (let i = 0; i < CONFIG.arrows.maxActive; i++) {
      const obj = template.clone();
      obj.visible = false;
      scene.add(obj);
      this.pool.push({ obj, vel: new THREE.Vector3(), prev: new THREE.Vector3(), age: 0, state: 'idle' });
    }
  }

  fire(origin, dir, speed = CONFIG.arrows.speed) {
    let a = this.pool.find((p) => p.state === 'idle');
    if (!a) {
      // Recycle the oldest arrow rather than allocating a new one.
      a = this.active.shift();
      this._release(a);
    }
    if (a.obj.parent !== this.scene) this.scene.add(a.obj);
    a.obj.scale.setScalar(1);
    a.obj.position.copy(origin);
    a.prev.copy(origin);
    a.vel.copy(dir).normalize().multiplyScalar(speed);
    a.obj.quaternion.setFromUnitVectors(FORWARD, _dir.copy(a.vel).normalize());
    a.age = 0;
    a.state = 'flying';
    a.obj.visible = true;
    this.active.push(a);
    this.fired++;
    return a;
  }

  /**
   * @param {(p0: THREE.Vector3, p1: THREE.Vector3, arrow) => {point, stickTo?, consume?} | null} collide
   *   Called with the swept segment. Return a hit to stop the arrow there.
   */
  update(dt, collide) {
    const g = CONFIG.arrows.gravity;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const a = this.active[i];
      a.age += dt;
      if (a.state === 'flying') {
        a.prev.copy(a.obj.position);
        if (g) a.vel.y -= g * dt;
        a.obj.position.addScaledVector(a.vel, dt);
        if (g) a.obj.quaternion.setFromUnitVectors(FORWARD, _dir.copy(a.vel).normalize());
        const hit = collide(a.prev, a.obj.position, a);
        if (hit) {
          a.obj.position.copy(hit.point);
          if (hit.stickTo) {
            // Embed slightly and stick to the body so it moves with Ravana.
            a.obj.position.addScaledVector(_dir.copy(a.vel).normalize(), 0.06);
            hit.stickTo.attach(a.obj);
            a.state = 'stuck';
            a.age = 0;
          } else {
            this._remove(i);
            continue;
          }
        } else if (a.age > CONFIG.arrows.lifetime) {
          this._remove(i);
        }
      } else if (a.state === 'stuck' && a.age > CONFIG.arrows.stuckLifetime) {
        this._remove(i);
      }
    }
  }

  _remove(i) {
    const a = this.active[i];
    this.active.splice(i, 1);
    this._release(a);
  }

  _release(a) {
    a.state = 'idle';
    a.obj.visible = false;
    if (a.obj.parent !== this.scene) this.scene.attach(a.obj);
  }

  clear() {
    while (this.active.length) this._remove(this.active.length - 1);
    this.fired = 0;
  }
}
