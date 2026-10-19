import * as THREE from 'three';
import { CONFIG } from './config.js';

const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _d = new THREE.Vector3();
const FLOOR = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const _j = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];

const _loop = new THREE.Vector3();
const LOOP_JOINTS = ['middle', 'ring'].flatMap((f) => ['phalanx-proximal', 'phalanx-intermediate', 'phalanx-distal', 'tip'].map((s) => `${f}-finger-${s}`));

/**
 * Centre of the loop formed by the curled middle + ring fingers = where a handle sits in a fist.
 * (Knuckle, middle joints, last joints and tips wrap around the handle.)
 */
function fistCentre(p, out) {
  out.set(0, 0, 0);
  for (const n of LOOP_JOINTS) {
    if (!joint(p, n, _loop)) return null;
    out.add(_loop);
  }
  return out.multiplyScalar(1 / LOOP_JOINTS.length);
}

/** World position of a tracked hand joint, or null if it isn't tracked this frame. */
function joint(p, name, out) {
  const j = p.hand?.joints?.[name];
  if (!j || !j.visible) return null;
  j.updateMatrixWorld(true);
  return out.setFromMatrixPosition(j.matrixWorld);
}

/** Query what the current browser actually supports. Nothing here is assumed. */
export async function detectCapabilities() {
  const ua = navigator.userAgent;
  const caps = {
    secure: window.isSecureContext,
    webxr: 'xr' in navigator,
    ar: false,
    vr: false,
    questBrowser: /OculusBrowser/i.test(ua),
    quest: /Quest/i.test(ua),
    ua,
  };
  if (caps.webxr) {
    try { caps.ar = await navigator.xr.isSessionSupported('immersive-ar'); } catch (e) { caps.arError = e.message; }
    try { caps.vr = await navigator.xr.isSessionSupported('immersive-vr'); } catch (e) { caps.vrError = e.message; }
  }
  console.log('[xr] capabilities', caps);
  return caps;
}

/**
 * Owns the immersive session, the two controller "pointers", per-controller hit-test
 * sources and the optional placement anchor.
 */
export class XRManager {
  constructor(renderer, scene, handlers) {
    this.renderer = renderer;
    this.scene = scene;
    this.h = handlers;
    this.session = null;
    this.info = null;
    this.pointers = [];
    this.anchor = null;
    this.pendingAnchor = null;

    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]);
    for (let i = 0; i < 2; i++) {
      const controller = renderer.xr.getController(i);
      const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xffc94d, transparent: true, opacity: 0.75 }));
      line.scale.z = 3;
      controller.add(line);
      const tipDot = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe7a8 }));
      controller.add(tipDot);
      scene.add(controller);
      // Grip space (palm) — used for hand positions when grabbing the bow / string.
      const grip = renderer.xr.getControllerGrip(i);
      scene.add(grip);
      // Hand (WebXR hand tracking): joints are updated by three.js when a hand is the input source.
      const hand = renderer.xr.getHand(i);
      scene.add(hand);
      const p = { index: i, controller, grip, hand, line, connected: false, isHand: false, fist: false, pinch: false, handedness: 'none', inputSource: null, hitTestSource: null, lastHit: null };
      controller.addEventListener('connected', (e) => this._onConnected(p, e.data));
      controller.addEventListener('disconnected', () => this._onDisconnected(p));
      controller.addEventListener('selectstart', () => this.h.onSelect?.(p));
      controller.addEventListener('selectend', () => this.h.onSelectEnd?.(p));
      controller.addEventListener('squeezestart', () => this.h.onSqueeze?.(p));
      controller.addEventListener('squeezeend', () => this.h.onSqueezeEnd?.(p));
      this.pointers.push(p);
    }
  }

  async start(mode) {
    const init = {
      requiredFeatures: ['local-floor'],
      optionalFeatures: ['hit-test', 'anchors', 'plane-detection', 'hand-tracking', 'bounded-floor'],
    };
    const session = await navigator.xr.requestSession(mode, init);
    this.session = session;
    this.renderer.xr.setReferenceSpaceType('local-floor');
    await this.renderer.xr.setSession(session);
    this.renderer.xr.setFoveation?.(1);
    try { if (session.supportedFrameRates?.includes(72)) await session.updateTargetFrameRate(72); } catch { /* optional */ }

    const enabled = session.enabledFeatures ? [...session.enabledFeatures] : null;
    const blend = session.environmentBlendMode || 'unknown';
    this.info = {
      mode,
      environmentBlendMode: blend,
      passthrough: mode === 'immersive-ar' && (blend === 'alpha-blend' || blend === 'additive'),
      enabledFeatures: enabled,
      hitTest: enabled ? enabled.includes('hit-test') : typeof session.requestHitTestSource === 'function',
      anchors: enabled ? enabled.includes('anchors') : false,
    };
    console.log('[xr] session started', this.info);

    const ref = this.renderer.xr.getReferenceSpace();
    ref?.addEventListener?.('reset', () => this.h.onReferenceReset?.());
    session.addEventListener('end', () => {
      this.session = null;
      this.anchor = null;
      for (const p of this.pointers) this._onDisconnected(p);
      this.h.onEnd?.();
    });
    // 'connected' may have fired before this.info existed — request hit-test sources now.
    for (const p of this.pointers) {
      if (p.connected && !p.hitTestSource && p.inputSource) this._onConnected(p, p.inputSource);
    }
    return this.info;
  }

  async _onConnected(p, inputSource) {
    p.connected = true;
    p.inputSource = inputSource;
    p.handedness = inputSource.handedness;
    p.isHand = !!inputSource.hand;
    p.fist = false;
    p.line.visible = inputSource.targetRayMode === 'tracked-pointer';
    console.log(`[xr] input connected: ${inputSource.handedness} ${inputSource.targetRayMode} profiles=${inputSource.profiles?.join(',')}`);
    if (this.session && this.info?.hitTest && this.session.requestHitTestSource) {
      try {
        p.hitTestSource = await this.session.requestHitTestSource({ space: inputSource.targetRaySpace });
      } catch (e) {
        console.warn('[xr] hit-test source failed for', inputSource.handedness, e);
      }
    }
    this.h.onConnected?.(p);
  }

  _onDisconnected(p) {
    if (p.fist) this.h.onFistEnd?.(p);
    p.fist = false;
    p.connected = false;
    p.hitTestSource?.cancel?.();
    p.hitTestSource = null;
    p.inputSource = null;
  }

  pointerByHand(hand) {
    return this.pointers.find((p) => p.connected && p.handedness === hand) || this.pointers.find((p) => p.connected) || null;
  }

  /**
   * Per-frame hand-tracking gestures. A fist = middle, ring and little fingers curled
   * (fingertip close to the wrist compared to the knuckle). Hysteresis avoids flicker.
   */
  updateHands() {
    for (const p of this.pointers) {
      if (!p.connected || !p.isHand) continue;
      const wrist = joint(p, 'wrist', _j[0]);
      let ratio = 0;
      let n = 0;
      if (wrist) {
        for (const f of ['middle', 'ring', 'pinky']) {
          const tip = joint(p, `${f}-finger-tip`, _j[1]);
          const knuckle = joint(p, `${f}-finger-phalanx-proximal`, _j[2]);
          if (!tip || !knuckle) continue;
          ratio += tip.distanceTo(wrist) / Math.max(1e-4, knuckle.distanceTo(wrist));
          n++;
        }
      }
      const tracked = n === 3;
      const curl = tracked ? ratio / n : 99;
      p.curl = curl;
      const thumb = joint(p, 'thumb-tip', _j[3]);
      const index = joint(p, 'index-finger-tip', _j[4]);
      p.pinchDist = thumb && index ? thumb.distanceTo(index) : 1;
      const fist = p.fist ? tracked && curl < CONFIG.hands.fistCurlOpen : tracked && curl < CONFIG.hands.fistCurlClose;
      if (fist !== p.fist) {
        p.fist = fist;
        if (fist) this.h.onFist?.(p);
        else this.h.onFistEnd?.(p);
      }
    }
  }

  /**
   * Pose of a closed fist holding a vertical handle: position = centre of the finger loop,
   * +Y from the little-finger knuckle to the index knuckle (handle axis), -Z along the forearm.
   * Returns false if the hand isn't tracked.
   */
  fistPose(p, pos, quat) {
    const wrist = joint(p, 'wrist', _j[0]);
    const idx = joint(p, 'index-finger-phalanx-proximal', _j[1]);
    const pinky = joint(p, 'pinky-finger-phalanx-proximal', _j[2]);
    if (!wrist || !idx || !pinky || !fistCentre(p, pos)) return false;
    const up = new THREE.Vector3().subVectors(idx, pinky).normalize();
    const mid = new THREE.Vector3().addVectors(idx, pinky).multiplyScalar(0.5);
    const fwd = mid.sub(wrist);
    fwd.addScaledVector(up, -fwd.dot(up)).normalize();
    const back = fwd.negate();
    const right = new THREE.Vector3().crossVectors(up, back).normalize();
    const up2 = new THREE.Vector3().crossVectors(back, right);
    quat.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up2, back));
    return true;
  }

  /** Hand position (world): fist centre / pinch point for tracked hands, otherwise the grip or ray origin. */
  handPosition(p, out, mode = 'fist') {
    if (p.isHand) {
      if (mode === 'pinch') {
        const t = joint(p, 'thumb-tip', _j[0]);
        const i = joint(p, 'index-finger-tip', _j[1]);
        if (t && i) return out.copy(t).add(i).multiplyScalar(0.5);
      }
      if (fistCentre(p, out)) return out;
    }
    const src = p.grip && p.grip.visible ? p.grip : p.controller;
    src.updateMatrixWorld(true);
    return out.setFromMatrixPosition(src.matrixWorld);
  }

  /** Ray (world space) for a pointer. */
  ray(p, origin, dir) {
    p.controller.updateMatrixWorld(true);
    origin.setFromMatrixPosition(p.controller.matrixWorld);
    dir.set(0, 0, -1).transformDirection(p.controller.matrixWorld);
  }

  /**
   * Floor point under a pointer: real hit test (horizontal, upward-facing surfaces only)
   * when available, otherwise the local-floor plane y = 0 reported by the runtime.
   */
  floorHit(p, frame) {
    if (p.hitTestSource && frame) {
      const results = frame.getHitTestResults(p.hitTestSource);
      const ref = this.renderer.xr.getReferenceSpace();
      for (const r of results) {
        const pose = r.getPose(ref);
        if (!pose) continue;
        _m.fromArray(pose.transform.matrix);
        const upY = _m.elements[5]; // world Y of the surface normal (pose +Y)
        if (upY > 0.8) {
          return { position: new THREE.Vector3().setFromMatrixPosition(_m), source: 'hit-test', result: r };
        }
      }
    }
    this.ray(p, _p, _d);
    const r = new THREE.Ray(_p, _d);
    const hit = r.intersectPlane(FLOOR, new THREE.Vector3());
    if (hit && hit.distanceTo(_p) < 20) return { position: hit, source: 'floor-plane', result: null };
    return null;
  }

  /** Request an anchor at `position` on the next frame (if the runtime supports anchors). */
  requestAnchor(position, hitResult) {
    this.anchor?.delete?.();
    this.anchor = null;
    if (!this.info?.anchors) return;
    this.pendingAnchor = { position: position.clone(), hitResult };
  }

  /** Per-frame: create pending anchor; returns the anchored position if tracked. */
  updateAnchor(frame) {
    if (!frame) return null;
    const ref = this.renderer.xr.getReferenceSpace();
    if (this.pendingAnchor) {
      const { position, hitResult } = this.pendingAnchor;
      this.pendingAnchor = null;
      const make = hitResult?.createAnchor
        ? hitResult.createAnchor()
        : frame.createAnchor?.(new XRRigidTransform({ x: position.x, y: position.y, z: position.z }), ref);
      Promise.resolve(make)
        .then((a) => {
          if (a) {
            this.anchor = a;
            console.log('[xr] anchor created');
          }
        })
        .catch((e) => console.warn('[xr] anchor creation failed (placement stays in local-floor space)', e));
    }
    if (this.anchor && frame.trackedAnchors?.has(this.anchor)) {
      const pose = frame.getPose(this.anchor.anchorSpace, ref);
      if (pose) return new THREE.Vector3(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);
    }
    return null;
  }

  end() {
    this.session?.end();
  }
}
