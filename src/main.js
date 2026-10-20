import './styles.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CONFIG } from './config.js';
import { Ravana } from './ravana.js';
import { Bow } from './bow.js';
import { Arrows } from './arrows.js';
import { Effects, Sfx, COLORS } from './effects.js';
import { Fireballs } from './attacks.js';
import { Panel, OverheadCounter, Overlay } from './ui.js';
import { XRManager, detectCapabilities } from './xr.js';
import { Archery } from './archery.js';

// ---------------------------------------------------------------------------
// Renderer / scene
// ---------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // transparent => passthrough shows through in immersive-ar
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.localClippingEnabled = true;
renderer.xr.enabled = true;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.03, 100);
camera.position.set(0, 1.6, 0);
scene.add(camera);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight(0xfff1dc, 0x3a2414, 0.7));
const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(1.5, 4, 2.5);
scene.add(sun);

// Desktop/VR-test helpers only — never shown in mixed reality.
const desktopBackdrop = new THREE.Color(0x15100c);
const grid = new THREE.GridHelper(20, 40, 0x6b4a22, 0x2d2016);
scene.add(grid);

const reticle = new THREE.Mesh(
  new THREE.RingGeometry(0.22, 0.27, 40).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0xffc94d, transparent: true, opacity: 0.9, depthTest: false }),
);
reticle.renderOrder = 15;
reticle.visible = false;
scene.add(reticle);

// ---------------------------------------------------------------------------
// Game objects
// ---------------------------------------------------------------------------
const overlay = new Overlay();
const sfx = new Sfx();
const effects = new Effects(scene, camera);
const ravana = new Ravana(scene);
const bow = new Bow(scene);
const panel = new Panel(scene);
const counter = new OverheadCounter(scene);
const fireballs = new Fireballs(scene, effects, sfx);
let arrows = null;

const game = {
  state: 'loading', // loading | placing | ready | battle | finale | victory
  mode: 'none', // none | desktop | immersive-ar | immersive-vr
  score: 0,
  shots: 0,
  headHits: 0,
  message: '',
  compatWarning: '',
  finaleT: 0,
  placeYawOffset: 0,
  placement: null, // last valid floor hit while placing
  activePointer: null,
  panelPlacePending: 0,
};
window.RAVANA = { game, ravana, bow, CONFIG, effects, camera, scene, fireballs, get arrows() { return arrows; } };

const xr = new XRManager(renderer, scene, {
  onSelect: (p) => handleSelect(p),
  onSelectEnd: (p) => archery.selectEnd(p),
  onSqueeze: (p) => {
    sfx.unlock();
    game.activePointer = p;
    if (game.state === 'ready' || game.state === 'battle') archery.squeezeStart(p);
  },
  onSqueezeEnd: (p) => archery.squeezeEnd(p),
  onFist: (p) => {
    sfx.unlock();
    if (game.state === 'ready' || game.state === 'battle') archery.fistStart(p);
  },
  onFistEnd: (p) => archery.fistEnd(p),
  onConnected: (p) => {
    if (!game.activePointer) game.activePointer = p;
    refreshPanel(); // instructions differ for hands vs controllers
  },
  onReferenceReset: () => {
    if (!xr.anchor && game.state !== 'placing') {
      game.message = 'Tracking origin was reset. If Ravana moved, press Reposition.';
      refreshPanel();
    }
  },
  onEnd: () => {
    game.mode = 'none';
    applyModeVisuals();
    overlay.show();
    overlay.setStatus('Immersive session ended. You can enter again.', '');
  },
});

const archery = new Archery(bow, xr, camera, {
  onFire: (speed) => fireArrow(speed),
  sfx,
  haptic: (p, i, ms) => pulse(p, i, ms),
});
window.RAVANA.archery = archery;
window.RAVANA.renderer = renderer;
// Debug: advance the game by dt seconds (works even when the tab isn't animating).
window.RAVANA.step = (dt = 1 / 60) => loop(lastTime + dt * 1000, null);

// Desktop pointer (mouse)
const mouse = new THREE.Vector2(0, 0);
const desktopPointer = { desktop: true, handedness: 'mouse', controller: null };
const aimLine = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -1)]),
  new THREE.LineBasicMaterial({ color: 0xffc94d, transparent: true, opacity: 0.6 }),
);
aimLine.visible = false;
scene.add(aimLine);

const raycaster = new THREE.Raycaster();
const _o = new THREE.Vector3();
const _d = new THREE.Vector3();
const _v = new THREE.Vector3();
const _w = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);

function pointerRay(p, origin, dir) {
  if (p.desktop) {
    raycaster.setFromCamera(mouse, camera);
    origin.copy(raycaster.ray.origin);
    dir.copy(raycaster.ray.direction);
  } else {
    xr.ray(p, origin, dir);
  }
}

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------
function remaining() {
  return ravana.liveTargets().length;
}

function refreshPanel() {
  const s = game.state;
  const base = {
    total: ravana.targets.length,
    remaining: remaining(),
    destroyed: ravana.targets.map((t) => t.destroyed),
    score: game.score,
    navel: ravana.navel?.hit ? 'hit' : ravana.navel?.active ? 'active' : 'hidden',
    warning: [game.compatWarning, ravana.hitboxWarning].filter(Boolean).join(' '),
  };
  const hb = { id: 'hitboxes', label: `Hitboxes: ${ravana.debugVisible ? 'ON' : 'OFF'}` };
  if (s === 'loading') {
    panel.set({ message: 'Loading…' });
  } else if (s === 'placing') {
    const desktop = game.mode === 'desktop';
    const floorSrc = game.placement?.source === 'hit-test' ? 'real floor (WebXR hit test)' : desktop ? 'preview floor' : 'runtime floor plane (local-floor, y = 0)';
    panel.set({
      ...base,
      total: 0,
      message:
        (desktop
          ? 'Click the floor where Ravana should stand.'
          : 'Point at the floor where Ravana should stand and pull the trigger. Thumbstick ↕ height, ↔ turn.') +
        `\nHeight: ${ravana.height.toFixed(2)} m · Floor: ${game.placement ? floorSrc : 'searching…'}`,
      buttons: [
        { id: 'heightDown', label: 'Height −' },
        { id: 'heightUp', label: 'Height +' },
        { id: 'resetPlace', label: 'Reset size' },
      ],
    });
  } else if (s === 'ready') {
    const resumed = remaining() < ravana.targets.length;
    panel.set({
      ...base,
      message: game.message || `Ravana stands ${ravana.height.toFixed(1)} m tall. ${howToShoot()} Practice shots are allowed before the battle.`,
      buttons: [
        { id: 'start', label: resumed ? 'Resume Battle' : 'Start Battle', primary: true },
        { id: 'reposition', label: 'Reposition Ravana' },
        { id: 'attacks', label: `Fireballs: ${fireballs.enabled ? 'ON' : 'OFF'}` },
        hb,
      ],
    });
  } else if (s === 'battle' || s === 'finale') {
    panel.set({
      ...base,
      message: s === 'finale' ? 'BRAHMASTRA!' : game.message,
      warning: fireballs.warning ? '⚠ FIREBALL INCOMING — shoot it down or lean aside!' : base.warning,
      buttons: s === 'finale' ? [] : [{ id: 'restart', label: 'Restart' }, { id: 'reposition', label: 'Reposition' }, hb],
    });
  } else if (s === 'victory') {
    const acc = game.shots ? Math.round((game.headHits / game.shots) * 100) : 0;
    panel.set({
      victory: true,
      score: game.score,
      stats: `${ravana.targets.length} heads + navel in ${game.shots} arrows · accuracy ${acc}%`,
      buttons: [{ id: 'restart', label: 'Restart', primary: true }, { id: 'reposition', label: 'Reposition Ravana' }],
    });
  }
}

function howToShoot() {
  return game.mode === 'desktop'
    ? 'Hold the left mouse button to draw the string, release to shoot.'
    : xr.pointers.some((p) => p.connected && p.isHand)
      ? 'Close your FIST on the floating bow to hold it. With your other hand make a fist (or pinch) at the string, pull back and open your hand to shoot.'
      : 'Grab the floating bow with the GRIP button. With your other hand squeeze GRIP at the string, pull back and let go to shoot.';
}

function placePanel() {
  if ((game.state === 'ready' || game.state === 'battle') && !archery.holder && game.mode !== 'desktop') archery.placeAtRest();
  if (game.state === 'battle' || game.state === 'finale') panel.placeInFront(camera, { yawOffsetDeg: 38, down: 0.4, distance: 1.35 });
  else panel.placeInFront(camera, { down: 0.22 });
}

function setState(s) {
  game.state = s;
  reticle.visible = false;
  bow.group.visible = s === 'ready' || s === 'battle';
  counter.sprite.visible = s === 'battle' || s === 'ready';
  game.panelPlacePending = renderer.xr.isPresenting ? 3 : 1; // wait for a real head pose in XR
  refreshPanel();
}

function handleButton(id) {
  sfx.play('click');
  switch (id) {
    case 'heightUp': ravana.setHeight(ravana.height + CONFIG.ravana.heightStep); break;
    case 'heightDown': ravana.setHeight(ravana.height - CONFIG.ravana.heightStep); break;
    case 'resetPlace': ravana.setHeight(CONFIG.ravana.defaultHeight); game.placeYawOffset = 0; break;
    case 'start':
      game.message = `Destroy all ten heads! ${howToShoot()}`;
      fireballs.timer = CONFIG.attacks.firstDelay;
      setState('battle');
      return;
    case 'reposition':
      archery.cancelDraw();
      if (game.state === 'victory' || game.state === 'finale') restart(false);
      arrows.clear();
      fireballs.reset();
      setState('placing');
      return;
    case 'restart': restart(true); return;
    case 'attacks': fireballs.enabled = !fireballs.enabled; break;
    case 'hitboxes': ravana.setDebugVisible(!ravana.debugVisible); break;
    default: break;
  }
  refreshPanel();
}

function restart(toReady) {
  arrows.clear();
  effects.clear();
  fireballs.reset();
  ravana.resetTargets();
  game.score = 0;
  game.shots = 0;
  game.headHits = 0;
  game.message = '';
  if (toReady) setState('ready');
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------
function handleSelect(p) {
  sfx.unlock();
  // A hand busy with the bow or string never clicks the UI by accident.
  if (!p.desktop && (p === archery.holder || p === archery.drawer)) return;
  game.activePointer = p;
  pointerRay(p, _o, _d);
  raycaster.set(_o, _d);
  const pick = panel.pick(raycaster);
  if (pick) {
    if (pick.id) handleButton(pick.id);
    return;
  }
  if (game.state === 'placing') confirmPlacement();
  else if (game.state === 'ready' || game.state === 'battle') {
    if (p.desktop) archery.desktopPress();
    else archery.selectStart(p);
  }
}

function confirmPlacement() {
  if (!game.placement) return;
  ravana.place(game.placement.position, null);
  xr.requestAnchor(game.placement.position, game.placement.result);
  game.message = '';
  setState('ready');
  console.log(`[game] Ravana placed at ${game.placement.position.toArray().map((n) => n.toFixed(2))} (${game.placement.source}), height ${ravana.height} m`);
}

/** Called by Archery when the string is released with enough draw. */
function fireArrow(speed) {
  bow.getFireRay(_o, _d);
  arrows.fire(_o, _d, speed);
  if (game.state === 'battle') game.shots++;
  sfx.play('shoot');
}

function pulse(p, intensity, ms) {
  const act = p?.inputSource?.gamepad?.hapticActuators?.[0];
  act?.pulse?.(intensity, ms);
}

// Desktop mouse
renderer.domElement.addEventListener('pointermove', (e) => {
  mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  if (look.active) {
    look.yaw -= (e.clientX - look.x) * 0.004;
    look.pitch = THREE.MathUtils.clamp(look.pitch - (e.clientY - look.y) * 0.004, -1.2, 1.2);
    look.x = e.clientX;
    look.y = e.clientY;
  }
});
const look = { active: false, x: 0, y: 0, yaw: 0, pitch: -0.05 };
renderer.domElement.addEventListener('pointerdown', (e) => {
  if (game.mode !== 'desktop') return;
  if (e.button === 2) {
    Object.assign(look, { active: true, x: e.clientX, y: e.clientY });
  } else if (e.button === 0) {
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    handleSelect(desktopPointer);
  }
});
window.addEventListener('pointerup', (e) => {
  look.active = false;
  if (game.mode === 'desktop' && e.button === 0) archery.desktopRelease();
});
renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
renderer.domElement.addEventListener('wheel', (e) => {
  if (game.mode !== 'desktop') return;
  camera.getWorldDirection(_v).setY(0).normalize();
  camera.position.addScaledVector(_v, -Math.sign(e.deltaY) * 0.4);
});
window.addEventListener('keydown', (e) => {
  if (game.mode !== 'desktop') return;
  if (e.key === 'h' || e.key === 'H') handleButton('hitboxes');
  if (e.key === 'r' || e.key === 'R') handleButton('restart');
  if (e.key === 'Escape') {
    game.mode = 'none';
    applyModeVisuals();
    overlay.show();
  }
});
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------------------------------------------------------------------
// Collision handling
// ---------------------------------------------------------------------------
function collide(p0, p1) {
  if (game.state !== 'battle') {
    // Arrows already in flight when the finale starts just pass harmlessly.
    return null;
  }
  const fb = fireballs.segmentTest(p0, p1);
  const hit = ravana.segmentTest(p0, p1);
  if (fb && (!hit || p0.distanceTo(fb.point) < p0.distanceTo(hit.point))) {
    fireballs.destroy(fb.fireball);
    addScore(CONFIG.scoring.fireballShot, fb.point, '#ffb347');
    sfx.play('shotdown');
    game.message = 'Fireball destroyed!';
    refreshPanel();
    return { point: fb.point };
  }
  if (!hit) return null;
  if (hit.type === 'head') {
    onHeadHit(hit.target, hit.point);
    return { point: hit.point };
  }
  if (hit.type === 'navel') {
    onNavelHit(hit.point);
    return { point: hit.point };
  }
  effects.bodyHit(hit.point);
  sfx.play('body');
  return { point: hit.point, stickTo: ravana.root };
}

function onHeadHit(target, point) {
  const destroyed = ravana.registerHit(target);
  const center = ravana.worldCenter(target, new THREE.Vector3());
  const scale = ravana.height / 2.5;
  game.headHits++;
  pulse(archery.holder, 0.8, 80);
  if (destroyed) {
    effects.hit(point, scale);
    effects.destroy(center, scale);
    addScore(CONFIG.scoring.headDestroyed, _v.copy(center).addScaledVector(UP, 0.25 * scale), '#ffd34d');
    sfx.play('destroy');
    const left = remaining();
    game.message = left ? `Head ${target.index + 1} destroyed! ${left} remaining.` : 'All ten heads destroyed!';
    console.log(`[game] target ${target.index + 1} (${target.name}) destroyed. Remaining ${left}`);
    if (left === 0) startNavelPhase();
  } else {
    effects.hit(point, scale);
    addScore(CONFIG.scoring.headHit, _v.copy(center).addScaledVector(UP, 0.2 * scale), '#ffb347');
    sfx.play('hit');
    game.message = `Head ${target.index + 1} hit (${target.hits}/${CONFIG.hitboxes.hitsPerTarget}).`;
  }
  refreshPanel();
}

/** All heads down: Ravana's immortality (amrita) lies in his navel — reveal the final target. */
function startNavelPhase() {
  ravana.setNavelActive(true);
  const p = ravana.navelWorld(new THREE.Vector3());
  effects.flash(p, COLORS.GOLD, 0.6, 0.6);
  effects.ring(p, COLORS.ORANGE, 0.5, 0.9);
  sfx.play('warn');
  game.message = "All ten heads destroyed! Ravana's immortality lies in his NAVEL — strike it to end him!";
  console.log('[game] navel phase — final target revealed');
  refreshPanel();
}

function onNavelHit(point) {
  ravana.navel.hit = true;
  ravana.setNavelActive(false);
  game.headHits++;
  const p = ravana.navelWorld(new THREE.Vector3());
  const scale = ravana.height / 2.5;
  effects.hit(point, scale * 1.4);
  effects.destroy(p, scale * 1.6);
  addScore(CONFIG.navel.score, _v.copy(p).addScaledVector(UP, 0.3 * scale), '#ffe08a');
  sfx.play('destroy');
  pulse(archery.holder, 1, 120);
  game.message = 'The navel is pierced!';
  console.log('[game] navel hit — Brahmastra');
  startFinale();
}

function addScore(n, pos, color) {
  game.score = Math.max(0, game.score + n);
  effects.floatText(pos, n > 0 ? `+${n}` : `${n}`, color);
}

// ---------------------------------------------------------------------------
// Brahmastra finale
// ---------------------------------------------------------------------------
function startFinale() {
  game.finaleT = 0;
  game.exploded = false;
  fireballs.reset();
  archery.cancelDraw();
  setState('finale');
  bow.group.visible = false;
  const s = ravana.root.scale.x;
  const box = ravana.modelBox;
  const radius = Math.max(box.max.x - box.min.x, box.max.z - box.min.z) * 0.5 * s * 0.85;
  effects.startAura(ravana.root.position, radius, ravana.height * 1.15);
  game.finaleRadius = radius;
  sfx.play('charge');
}

/**
 * Dussehra finale (after the navel is pierced):
 *   0.0–1.8 s  Brahmastra charge — golden aura and rising embers
 *   1.8–4.6 s  the effigy burns — flames, smoke and crackers popping all over his body
 *   4.6 s      BIG EXPLOSION — flash, light, shockwaves, fire, smoke, flying debris
 *   5.4 s+     fireworks + giant "HAPPY DUSSEHRA" in the sky; victory panel at 6.6 s
 */
const FIREWORK_TIMES = [5.4, 5.9, 6.5, 7.0, 7.6, 8.3];
function updateFinale(dt) {
  const prev = game.finaleT;
  const t = (game.finaleT += dt);
  const H = ravana.height;
  const s = Math.max(1, H / 4);
  const base = new THREE.Vector3(ravana.root.position.x, ravana.floorY, ravana.root.position.z);
  const crossed = (x) => prev < x && t >= x;

  if (t < 1.8) {
    const k = t / 1.8;
    ravana.setFinale(k * 0.55, 0);
    effects.setAura(k);
    for (let i = 0; i < 4; i++) {
      const a = Math.random() * Math.PI * 2;
      _v.set(base.x + Math.cos(a) * game.finaleRadius, base.y + Math.random() * H * 0.3, base.z + Math.sin(a) * game.finaleRadius);
      effects.particles.emit(_v, 1, { color: COLORS.GOLD, speed: 0.3, up: (1.5 + k * 2) * s, life: 1.2, size: 0.05 * s, gravity: 0.5, drag: 0.5 });
    }
  } else if (t < 4.6) {
    if (crossed(1.8)) {
      sfx.play('burn');
      game.message = 'The effigy of Ravana burns!';
      refreshPanel();
    }
    const k = (t - 1.8) / 2.8;
    // Embers glowing through the effigy: red-orange, flickering, texture still visible.
    ravana.setFinale(0.12 + 0.18 * k + 0.1 * Math.random(), 0, [1.0, 0.22, 0.02]);
    effects.setAura(Math.max(0, 1 - k * 2));
    if (crossed(3.2)) sfx.play('burn');
    const pop = effects.burn((out) => ravana.surfacePoint(out), H, 0.6 + k * 1.6);
    if (pop) {
      effects.crackerPop(ravana.surfacePoint(_v), H);
      sfx.play('crackle');
    }
  } else if (!game.exploded) {
    game.exploded = true;
    const chest = ravana.chestPoint(new THREE.Vector3());
    ravana.root.visible = false; // gone in the flash
    effects.setAura(0);
    effects.bigExplosion(chest, ravana.floorY, H);
    sfx.play('bigboom');
    for (const p of xr.pointers) pulse(p, 1, 400);
    console.log('[game] Ravana explodes');
  }

  for (const ft of FIREWORK_TIMES) {
    if (crossed(ft)) {
      launchFireworks(base, H, s, 1 + (Math.random() < 0.5 ? 1 : 0));
    }
  }
  if (crossed(5.8)) {
    effects.showBanner(new THREE.Vector3(base.x, base.y + H * 1.05 + 0.5, base.z), Math.max(3.2, H * 1.5));
    sfx.play('victory');
  }
  if (t > 6.6) {
    game.fireworkTimer = 1.2;
    setState('victory');
    console.log(`[game] VICTORY — score ${game.score}, shots ${game.shots}`);
  }
}

function launchFireworks(base, H, s, n) {
  for (let i = 0; i < n; i++) {
    const p = base.clone().add(new THREE.Vector3((Math.random() - 0.5) * H * 0.5, 0, (Math.random() - 0.5) * H * 0.5));
    effects.firework(p, H * 1.3 + 2, s);
  }
  sfx.play('whistle');
}

// ---------------------------------------------------------------------------
// Per-frame
// ---------------------------------------------------------------------------
function updateBowPose(dt) {
  if (game.mode === 'desktop') {
    // Bow held low-right of the view, aimed at whatever the mouse points at.
    camera.updateMatrixWorld(true);
    _o.set(0.2, -0.2, -0.65).applyMatrix4(camera.matrixWorld);
    bow.group.scale.setScalar(0.55);
    pointerRay(desktopPointer, _v, _d);
    const aim = ravana.root.visible ? ravana.rayTest(_v, _d, 90) : null;
    const target = _w.copy(_v).addScaledVector(_d, aim ? aim.distance : 15);
    _m.lookAt(_o, target, UP);
    _q.setFromRotationMatrix(_m);
    bow.setPose(_o, _q);
    archery.desktopUpdate(dt);
  } else {
    archery.update(dt);
  }
  bow.group.visible = game.state === 'ready' || game.state === 'battle';
}

/** Aim line: only while an arrow is drawn. */
function updateAimLaser() {
  if (!archery.drawing) {
    aimLine.visible = false;
    return;
  }
  bow.getFireRay(_o, _d);
  const aim = ravana.rayTest(_o, _d, 90);
  if (aim?.type === 'head') aim.target.aimed = true;
  if (aim?.type === 'navel') ravana.navel.aimed = true;
  aimLine.visible = true;
  aimLine.position.copy(_o);
  aimLine.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), _d);
  aimLine.scale.z = aim ? aim.distance : 6;
  aimLine.material.opacity = 0.25 + 0.5 * (bow.draw / CONFIG.bow.maxDraw);
}

function updatePointers(frame) {
  let hover = null;
  const pointers = game.mode === 'desktop' ? [desktopPointer] : xr.pointers.filter((p) => p.connected);
  for (const p of pointers) {
    pointerRay(p, _o, _d);
    raycaster.set(_o, _d);
    const pick = panel.pick(raycaster);
    if (pick?.id) hover = pick.id;
    if (!p.desktop) {
      // Pointer rays only for placement and UI — hands are busy with the bow in combat.
      const combat = game.state === 'ready' || game.state === 'battle';
      p.line.visible = !combat || (!!pick && p !== archery.drawer);
      p.line.scale.z = pick ? pick.distance : 3;
    }
  }
  panel.setHover(hover);

  if (game.state === 'placing') {
    const p = game.mode === 'desktop' ? desktopPointer : game.activePointer || pointers[0];
    let hit = null;
    if (p) {
      if (p.desktop) {
        pointerRay(p, _o, _d);
        const pt = new THREE.Ray(_o, _d).intersectPlane(new THREE.Plane(UP, 0), new THREE.Vector3());
        if (pt) hit = { position: pt, source: 'desktop', result: null };
      } else hit = xr.floorHit(p, frame);
    }
    const had = !!game.placement;
    const oldSrc = game.placement?.source;
    game.placement = hit;
    if (hit) {
      reticle.visible = true;
      reticle.position.copy(hit.position);
      // Keep the ring readable when placing far away.
      camera.getWorldPosition(_w);
      reticle.scale.setScalar(Math.max(1, hit.position.distanceTo(_w) * 0.12) * Math.max(1, ravana.height / 4));
      // Thumbstick: height (Y) and turn (X)
      const axes = p?.inputSource?.gamepad?.axes;
      if (axes && axes.length >= 4) {
        const ax = Math.abs(axes[2]) > 0.3 ? axes[2] : 0;
        const ay = Math.abs(axes[3]) > 0.3 ? axes[3] : 0;
        if (ay) ravana.setHeight(ravana.height - ay * Math.max(1.5, ravana.height * 0.6) * game.dt);
        if (ax) game.placeYawOffset -= ax * 2 * game.dt;
        if (ax || ay) game.placeDirty = true;
      }
      camera.getWorldPosition(_v);
      ravana.place(hit.position, _v);
      ravana.root.rotation.y += game.placeYawOffset;
    } else {
      reticle.visible = false;
    }
    if (had !== !!hit || oldSrc !== hit?.source || game.placeDirty) {
      game.placeDirty = false;
      refreshPanel();
    }
  }
}

let lastTime = performance.now();
let elapsed = 0;
let lastWarning = false;
function loop(time, frame) {
  const dt = Math.min(0.05, (time - lastTime) / 1000 || 0);
  lastTime = time;
  elapsed += dt;
  game.dt = dt;

  if (game.mode === 'desktop') {
    camera.rotation.set(look.pitch, look.yaw, 0, 'YXZ');
    camera.updateMatrixWorld(true);
  }

  if (game.state !== 'loading' && game.mode !== 'none') {
    if (game.panelPlacePending > 0 && --game.panelPlacePending === 0) placePanel();

    // Anchor tracking (keeps Ravana locked to the room if the runtime re-localises).
    if (frame && game.state !== 'placing') {
      const ap = xr.updateAnchor(frame);
      if (ap) {
        ravana.floorY = ap.y;
        ravana.root.position.set(ap.x, ap.y - (ravana.sink || 0), ap.z);
      }
    }

    xr.updateHands();
    updatePointers(frame);
    ravana.update(dt, elapsed);

    if (game.state === 'ready' || game.state === 'battle') {
      updateBowPose(dt);
      updateAimLaser();
    } else {
      aimLine.visible = false;
    }
    bow.update(dt);

    if (arrows) arrows.update(dt, collide);

    camera.getWorldPosition(_v);
    if (fireballs.update(dt, game.state === 'battle', ravana, _v)) {
      effects.playerDamage();
      sfx.play('damage');
      addScore(CONFIG.scoring.playerHit, _w.copy(_v).addScaledVector(camera.getWorldDirection(_d), 0.8), '#ff5a3a');
      for (const p of xr.pointers) pulse(p, 1, 200);
      game.message = 'You were hit by a fireball!';
      refreshPanel();
    }
    if (fireballs.warning !== lastWarning) {
      lastWarning = fireballs.warning;
      refreshPanel();
    }

    if (game.state === 'finale') updateFinale(dt);

    if (counter.sprite.visible && ravana.root.visible) {
      counter.set(ravana.navel?.active ? 'NAVEL!' : `${remaining()}/${ravana.targets.length}`);
      ravana.topPoint(counter.sprite.position);
      const sc = 0.5 * Math.max(1, ravana.height / 2.5);
      counter.sprite.scale.set(sc, sc * 0.375, 1);
    }
  }

  // Keep celebrating while the victory panel is up.
  if (game.state === 'victory' && game.mode !== 'none') {
    game.fireworkTimer -= dt;
    if (game.fireworkTimer <= 0) {
      game.fireworkTimer = 1.4 + Math.random() * 1.2;
      const H = ravana.height;
      launchFireworks(new THREE.Vector3(ravana.root.position.x, ravana.floorY, ravana.root.position.z), H, Math.max(1, H / 4), 1);
    }
  }

  effects.update(dt, elapsed, renderer, sfx);
  renderer.render(scene, camera);
}

// Test helper (desktop or remote-debug console): aim the bow at head i (1-10) and shoot.
window.RAVANA.shootAt = (i) => {
  const t = ravana.targets[i - 1];
  if (!t || game.state !== 'battle') return 'not in battle / no such target';
  const target = ravana.worldCenter(t, new THREE.Vector3());
  bow.setDraw(CONFIG.bow.maxDraw, true);
  _m.lookAt(bow.group.position, target, UP);
  bow.group.quaternion.setFromRotationMatrix(_m);
  fireArrow(CONFIG.arrows.speed);
  bow.setDraw(0, false);
  return `fired at ${t.name}`;
};

window.RAVANA.shootNavel = () => {
  if (!ravana.navel.active || game.state !== 'battle') return 'navel not active';
  const target = ravana.navelWorld(new THREE.Vector3());
  bow.setDraw(CONFIG.bow.maxDraw, true);
  _m.lookAt(bow.group.position, target, UP);
  bow.group.quaternion.setFromRotationMatrix(_m);
  fireArrow(CONFIG.arrows.speed);
  bow.setDraw(0, false);
  return 'fired at navel';
};

// ---------------------------------------------------------------------------
// Modes
// ---------------------------------------------------------------------------
function applyModeVisuals() {
  const mr = game.mode === 'immersive-ar' && xr.info?.passthrough;
  scene.background = mr ? null : desktopBackdrop;
  grid.visible = !mr;
  aimLine.visible = false;
  for (const p of xr.pointers) p.controller.visible = game.mode.startsWith('immersive');
}

async function enterXR(mode) {
  sfx.unlock();
  try {
    const info = await xr.start(mode);
    game.mode = mode;
    if (mode === 'immersive-vr') {
      game.compatWarning = 'VR TEST MODE — no passthrough. This is NOT mixed reality.';
    } else if (!info.passthrough) {
      game.compatWarning = `Passthrough not active (environmentBlendMode = "${info.environmentBlendMode}"). This is NOT mixed reality.`;
    } else {
      game.compatWarning = '';
    }
    if (mode === 'immersive-ar' && !info.hitTest) console.warn('[xr] hit-test unavailable — placement uses the local-floor plane (y = 0).');
    applyModeVisuals();
    overlay.hide();
    camera.position.set(0, 0, 0);
    camera.rotation.set(0, 0, 0);
    setState(ravana.floorY === undefined ? 'placing' : game.state === 'loading' ? 'placing' : game.state);
  } catch (e) {
    console.error('[xr] could not start session', e);
    overlay.setStatus(`Could not start ${mode}: ${e.message}`, 'bad');
  }
}

function enterDesktop() {
  sfx.unlock();
  game.mode = 'desktop';
  game.compatWarning = 'DESKTOP PREVIEW — not mixed reality.';
  camera.position.set(0, 1.6, 0);
  look.yaw = 0;
  look.pitch = -0.05;
  applyModeVisuals();
  overlay.hide();
  if (ravana.floorY === undefined) {
    setState('placing');
  } else setState(game.state === 'loading' ? 'placing' : game.state);
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
async function boot() {
  renderer.setAnimationLoop(loop);
  applyModeVisuals();
  const capsP = detectCapabilities();

  const manager = new THREE.LoadingManager();
  const loader = new GLTFLoader(manager);
  const progress = {};
  const onProg = (name) => (e) => {
    progress[name] = e.total ? e.loaded / e.total : 0;
    overlay.setStatus(`Loading models… ${Object.entries(progress).map(([k, v]) => `${k} ${(v * 100) | 0}%`).join(' · ')}`);
  };
  overlay.setStatus('Loading models…');
  try {
    const t0 = performance.now();
    const [rs] = await Promise.all([ravana.load(loader, onProg('ravana')), bow.load(loader)]);
    arrows = new Arrows(scene, bow.arrowTemplate);
    // Pre-compile every shader now (bow flex, nocked arrow, effects) so the first draw doesn't hitch.
    const hidden = [];
    scene.traverse((o) => { if (!o.visible) { hidden.push(o); o.visible = true; } });
    renderer.compile(scene, camera);
    hidden.forEach((o) => (o.visible = false));
    console.log(`[game] assets ready in ${((performance.now() - t0) / 1000).toFixed(1)} s`);
    overlay.addDiag('Ravana model', `${rs.triangles.toLocaleString()} triangles`, rs.triangles < 300000);
    overlay.addDiag(
      'Head targets',
      ravana.hitboxSource === 'glb' ? `${ravana.targets.length} hitbox nodes found in GLB` : `NOT found — using config fallback`,
      ravana.hitboxSource === 'glb' && ravana.targets.length === 10,
    );
    overlay.addDiag('Bow model', `${bow.summary.triangles.toLocaleString()} triangles`, true);
  } catch (e) {
    console.error('[game] asset loading failed', e);
    overlay.setStatus(`Failed to load models: ${e.message}. Check public/models/ and the console.`, 'bad');
    return;
  }

  const caps = await capsP;
  overlay.addDiag('Secure context (HTTPS / localhost)', caps.secure ? 'yes' : 'NO', caps.secure);
  overlay.addDiag('WebXR API', caps.webxr ? 'available' : 'not available', caps.webxr);
  overlay.addDiag('immersive-ar (passthrough MR)', caps.ar ? 'supported' : 'not supported', caps.ar);
  overlay.addDiag('immersive-vr', caps.vr ? 'supported' : 'not supported', caps.vr ? true : null);
  overlay.addDiag('Browser', caps.questBrowser ? 'Meta Quest Browser' : caps.quest ? 'Quest (other browser)' : 'not a Quest browser', caps.questBrowser ? true : null);

  game.state = 'ready-to-enter';
  if (caps.ar) {
    overlay.setStatus('Ready. Put on the headset and enter Mixed Reality.', 'ok');
    overlay.addButton('Enter Mixed Reality', () => enterXR('immersive-ar'), true);
  } else {
    let why = !caps.secure
      ? 'This page is not a secure context — WebXR needs HTTPS (or localhost via adb reverse).'
      : !caps.webxr
        ? 'This browser has no WebXR API.'
        : 'This browser does not support immersive-ar, so passthrough Mixed Reality is unavailable here.';
    overlay.setStatus(`${why} See README → “Troubleshooting”.`, 'bad');
    if (caps.vr) overlay.addButton('Enter VR test mode (no passthrough — not MR)', () => enterXR('immersive-vr'));
  }
  overlay.addButton('Desktop preview (mouse)', enterDesktop);
  if (CONFIG.debug) ravana.setDebugVisible(true);
}

boot();
