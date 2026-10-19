import * as THREE from 'three';
import { CONFIG } from './config.js';

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();

/**
 * Two-handed archery (controllers or tracked hands):
 *  1. Squeeze the GRIP button (or close your FIST) near the bow handle to pick it up; it follows
 *     the controller / fist for as long as you hold.
 *  2. Bring the OTHER hand to the string and squeeze GRIP / trigger (or FIST / PINCH) — an arrow is nocked.
 *  3. Pull back: the string follows the hand, the limbs flex, the bow aims from string to grip.
 *  4. Let go of the button to release: arrow speed scales with the draw distance.
 * When the bow is not held it floats where it was dropped (or in front of you).
 */
export class Archery {
  constructor(bow, xr, camera, { onFire, sfx, haptic }) {
    this.bow = bow;
    this.xr = xr;
    this.camera = camera;
    this.onFire = onFire;
    this.sfx = sfx;
    this.haptic = haptic;
    this.holder = null; // pointer holding the bow
    this.holdButton = null;
    this.drawer = null; // pointer holding the string
    this.drawButton = null;
    this.lastTick = 0;
    this.restPos = new THREE.Vector3();
    this.restQuat = new THREE.Quaternion();
    this.ctrlOffset = new THREE.Vector3();
    this.ctrlOffsetQuat = new THREE.Quaternion();
    this.desktopDrawT = 0;
  }

  get drawing() {
    return !!this.drawer;
  }

  /** Float the bow in front of the viewer, upright, ready to be grabbed. */
  placeAtRest() {
    this.holder = null;
    this.cancelDraw();
    this.camera.getWorldPosition(_a);
    this.camera.getWorldQuaternion(_q);
    _e.setFromQuaternion(_q, 'YXZ');
    const d = CONFIG.bow.restDistance;
    this.restPos.set(_a.x - Math.sin(_e.y) * d, _a.y - 0.4, _a.z - Math.cos(_e.y) * d);
    // Upright, aimed forward, slightly turned so the grip faces the player's left hand.
    this.restQuat.setFromEuler(new THREE.Euler(0, _e.y + 0.35, 0, 'YXZ'));
    this.bow.setPose(this.restPos, this.restQuat);
  }

  _hand(p, out, button) {
    return this.xr.handPosition(p, out, button === 'select' ? 'pinch' : 'fist');
  }

  /** Hand tracking: fist closed / opened. */
  fistStart(p) {
    return this._press(p, 'fist');
  }

  fistEnd(p) {
    this._unpress(p, 'fist');
  }

  /** Grip button pressed. Returns true if consumed. */
  squeezeStart(p) {
    return this._press(p, 'squeeze');
  }

  squeezeEnd(p) {
    this._unpress(p, 'squeeze');
  }

  /** Trigger pressed (after UI hit-testing). Returns true if consumed. */
  selectStart(p) {
    return this._press(p, 'select');
  }

  selectEnd(p) {
    this._unpress(p, 'select');
  }

  _press(p, button) {
    if (!this.holder) {
      // Tracked hands pick the bow up with a fist only (a pinch is for the string / UI).
      if (p.isHand && button !== 'fist') return false;
      if (this._hand(p, _a, button).distanceTo(this.bow.gripWorld(_b)) < CONFIG.bow.grabRadius) {
        this.holder = p;
        this.holdButton = button;
        this.sfx.play('grab');
        this.haptic(p, 0.5, 40);
        return true;
      }
      return false;
    }
    if (p === this.holder || this.drawer) return false;
    if (this._hand(p, _a, button).distanceTo(this.bow.nockWorld(_b)) < CONFIG.bow.stringGrabRadius) {
      this.drawer = p;
      this.drawButton = button;
      this.bow.setDraw(0, true);
      this.sfx.play('nock');
      this.haptic(p, 0.4, 30);
      return true;
    }
    return false;
  }

  _unpress(p, button) {
    if (p === this.drawer && button === this.drawButton) this.release();
    else if (p === this.holder && button === this.holdButton) {
      // Dropping the bow: it stays floating where it is.
      this.cancelDraw();
      this.holder = null;
      this.restPos.copy(this.bow.group.position);
      this.restQuat.copy(this.bow.group.quaternion);
    }
  }

  /** Let go of the string. Fires if drawn far enough. */
  release() {
    const draw = this.bow.draw;
    const drawer = this.drawer;
    this.drawer = null;
    this.drawButton = null;
    if (draw >= CONFIG.bow.minDraw && this.bow.cooldown <= 0) {
      const k = draw / CONFIG.bow.maxDraw;
      const speed = CONFIG.arrows.minSpeed + (CONFIG.arrows.speed - CONFIG.arrows.minSpeed) * k;
      this.onFire(speed, k);
      this.bow.cooldown = CONFIG.bow.fireCooldown;
      this.haptic(this.holder, 0.3 + 0.6 * k, 60);
      this.haptic(drawer, 0.5, 30);
    }
    this.bow.setDraw(0, false);
  }

  cancelDraw() {
    this.drawer = null;
    this.drawButton = null;
    this.desktopDrawT = 0;
    if (this.bow.nocked) this.bow.setDraw(0, false);
  }

  /** Per-frame update for XR controllers. */
  update(dt) {
    const bow = this.bow;
    if (!this.holder || !this.holder.connected) {
      if (this.holder) this.holder = null;
      if (this.drawer) this.cancelDraw();
      // Keep a dropped bow reachable: if the player walked away, bring it back in front.
      this.camera.getWorldPosition(_a);
      if (this.restPos.distanceTo(_a) > 1.6) this.placeAtRest();
      bow.setPose(this.restPos, this.restQuat);
      bow.group.scale.setScalar(1);
      return;
    }

    let grip;
    if (this.holder.isHand) {
      // Bow attached to the closed fist: handle runs through the curled fingers.
      if (this.xr.fistPose(this.holder, _a, _q)) {
        this.lastFistPos = (this.lastFistPos || new THREE.Vector3()).copy(_a);
        this.lastFistQuat = (this.lastFistQuat || new THREE.Quaternion()).copy(_q);
      } else if (this.lastFistPos) {
        _a.copy(this.lastFistPos); // hand briefly lost: keep the last pose
        _q.copy(this.lastFistQuat);
      }
      _b.fromArray(CONFIG.hands.bowOffset).applyQuaternion(_q);
      grip = _a.add(_b);
    } else {
      // Holding pose = controller target-ray pose + configured offset.
      const ctrl = this.holder.controller;
      ctrl.updateMatrixWorld(true);
      ctrl.matrixWorld.decompose(_a, _q, _s);
      _b.fromArray(CONFIG.bow.position).applyQuaternion(_q);
      grip = _a.add(_b);
    }
    bow.group.scale.setScalar(1);

    if (this.drawer && this.drawer.connected) {
      // Aim from the string hand through the grip; keep the bow hand's "up" for roll.
      const hand = this._hand(this.drawer, _c, this.drawButton);
      const aimVec = _b.subVectors(grip, hand);
      const dist = aimVec.length();
      if (dist > 0.05) {
        const fwd = aimVec.divideScalar(dist); // world aim direction
        const up = new THREE.Vector3(0, 1, 0).applyQuaternion(_q);
        const back = fwd.clone().negate();
        const right = new THREE.Vector3().crossVectors(up, back);
        if (right.lengthSq() < 1e-4) right.set(1, 0, 0).applyQuaternion(_q);
        right.normalize();
        const up2 = new THREE.Vector3().crossVectors(back, right);
        _m.makeBasis(right, up2, back);
        _q.setFromRotationMatrix(_m);
      }
      bow.setPose(grip, _q);
      const prev = bow.draw;
      bow.setDraw(dist - bow.brace, true);
      // Haptic "creak" ticks every 4 cm of draw.
      if (Math.floor(bow.draw / 0.04) !== Math.floor(prev / 0.04)) {
        this.haptic(this.drawer, 0.12 + 0.3 * (bow.draw / CONFIG.bow.maxDraw), 12);
        if (bow.draw > prev) this.sfx.play('creak');
      }
    } else {
      if (this.drawer) this.cancelDraw();
      bow.setPose(grip, _q);
    }
  }

  // ---- Desktop emulation: hold the mouse button to draw, release to shoot. ----
  desktopPress() {
    this.drawer = { desktop: true };
    this.drawButton = 'mouse';
    this.desktopDrawT = 0;
    this.bow.setDraw(0, true);
    this.sfx.play('nock');
  }

  desktopUpdate(dt) {
    if (!this.drawer?.desktop) return;
    this.desktopDrawT += dt;
    this.bow.setDraw(Math.min(1, this.desktopDrawT / 0.9) * CONFIG.bow.maxDraw, true);
  }

  desktopRelease() {
    if (this.drawer?.desktop) this.release();
  }
}
