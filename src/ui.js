import * as THREE from 'three';
import { CONFIG } from './config.js';

const W = 1024;
const H = 720;
const GOLD = '#ffc94d';
const ORANGE = '#ff7a1a';
const RED = '#ff3b2f';
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function wrap(g, text, maxW) {
  const lines = [];
  for (const para of String(text).split('\n')) {
    let line = '';
    for (const word of para.split(' ')) {
      const t = line ? `${line} ${word}` : word;
      if (g.measureText(t).width > maxW && line) {
        lines.push(line);
        line = word;
      } else line = t;
    }
    lines.push(line);
  }
  return lines;
}

// ---- decorative drawing helpers -------------------------------------------------
function goldFill(g, y0, y1) {
  const grd = g.createLinearGradient(0, y0, 0, y1);
  grd.addColorStop(0, '#fff3c0');
  grd.addColorStop(0.5, '#ffc94d');
  grd.addColorStop(1, '#ff8c1a');
  return grd;
}

function goldStroke(g) {
  const grd = g.createLinearGradient(0, 0, W, H);
  grd.addColorStop(0, '#ffe08a');
  grd.addColorStop(0.5, '#c98a24');
  grd.addColorStop(1, '#ffd36b');
  return grd;
}

function divider(g, y) {
  const grd = g.createLinearGradient(140, 0, W - 140, 0);
  grd.addColorStop(0, 'rgba(255,190,70,0)');
  grd.addColorStop(0.5, 'rgba(255,190,70,0.9)');
  grd.addColorStop(1, 'rgba(255,190,70,0)');
  g.fillStyle = grd;
  g.fillRect(140, y - 1, W - 280, 2);
  g.save();
  g.translate(W / 2, y);
  g.rotate(Math.PI / 4);
  g.fillStyle = '#ffc94d';
  g.fillRect(-7, -7, 14, 14);
  g.restore();
}

function lotus(g, x, y, r) {
  g.save();
  g.translate(x, y);
  g.fillStyle = 'rgba(255,200,90,0.85)';
  for (let i = 0; i < 8; i++) {
    g.rotate(Math.PI / 4);
    g.beginPath();
    g.ellipse(0, -r * 0.55, r * 0.22, r * 0.55, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.beginPath();
  g.arc(0, 0, r * 0.28, 0, Math.PI * 2);
  g.fillStyle = '#ff8c1a';
  g.fill();
  g.restore();
}

/** Small oil lamp (diya) with a flame. */
function diya(g, x, y) {
  g.save();
  g.translate(x, y);
  const flame = g.createRadialGradient(0, -22, 2, 0, -18, 26);
  flame.addColorStop(0, 'rgba(255,250,200,1)');
  flame.addColorStop(0.4, 'rgba(255,190,60,0.9)');
  flame.addColorStop(1, 'rgba(255,90,0,0)');
  g.fillStyle = flame;
  g.beginPath();
  g.arc(0, -18, 26, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#ffe9a0';
  g.beginPath();
  g.moveTo(0, -34);
  g.quadraticCurveTo(9, -16, 0, -8);
  g.quadraticCurveTo(-9, -16, 0, -34);
  g.fill();
  g.fillStyle = '#c4621a';
  g.beginPath();
  g.ellipse(0, 2, 26, 11, 0, 0, Math.PI);
  g.fill();
  g.fillStyle = '#e8892c';
  g.fillRect(-26, -2, 52, 5);
  g.restore();
}

/** Crown icon for a head target (live = gold, destroyed = dark with a red cross). */
function crown(g, x, y, r, dead, label) {
  g.save();
  g.translate(x, y);
  g.beginPath();
  g.arc(0, 0, r + 4, 0, Math.PI * 2);
  g.fillStyle = dead ? 'rgba(50,14,8,0.95)' : 'rgba(255,190,70,0.16)';
  g.fill();
  g.lineWidth = 2;
  g.strokeStyle = dead ? 'rgba(255,70,50,0.8)' : 'rgba(255,210,110,0.9)';
  g.stroke();
  g.beginPath();
  g.moveTo(-r * 0.7, r * 0.45);
  g.lineTo(-r * 0.75, -r * 0.35);
  g.lineTo(-r * 0.35, r * 0.05);
  g.lineTo(0, -r * 0.6);
  g.lineTo(r * 0.35, r * 0.05);
  g.lineTo(r * 0.75, -r * 0.35);
  g.lineTo(r * 0.7, r * 0.45);
  g.closePath();
  g.fillStyle = dead ? '#5a2a1a' : goldFill(g, -r, r);
  g.fill();
  if (!dead) {
    g.fillStyle = '#e0242a';
    g.beginPath();
    g.arc(0, r * 0.12, r * 0.13, 0, Math.PI * 2);
    g.fill();
  }
  g.font = `bold ${Math.round(r * 0.62)}px "Trebuchet MS", sans-serif`;
  g.fillStyle = dead ? '#ff5a46' : '#fff0c8';
  g.fillText(dead ? 'X' : String(label), 0, r * 0.95 + 8);
  g.restore();
}

/** Navel target icon: a sun-chakra; glows when active, crossed when hit. */
function chakra(g, x, y, r, state) {
  const active = state === 'active';
  const hit = state === 'hit';
  g.save();
  g.translate(x, y);
  if (active) {
    g.shadowColor = 'rgba(255,160,40,1)';
    g.shadowBlur = 22;
  }
  g.beginPath();
  g.arc(0, 0, r + 4, 0, Math.PI * 2);
  g.fillStyle = hit ? 'rgba(50,14,8,0.95)' : active ? 'rgba(255,150,40,0.45)' : 'rgba(255,190,70,0.08)';
  g.fill();
  g.shadowBlur = 0;
  g.strokeStyle = active ? '#ffe08a' : 'rgba(255,200,90,0.5)';
  g.lineWidth = active ? 3 : 2;
  g.stroke();
  for (let i = 0; i < 12; i++) {
    g.rotate(Math.PI / 6);
    g.beginPath();
    g.moveTo(0, r * 0.25);
    g.lineTo(0, r * 0.75);
    g.stroke();
  }
  g.beginPath();
  g.arc(0, 0, r * 0.22, 0, Math.PI * 2);
  g.fillStyle = hit ? '#ff5a46' : active ? '#fff3c0' : 'rgba(255,200,90,0.5)';
  g.fill();
  g.restore();
  g.font = `bold ${Math.round(r * 0.55)}px "Trebuchet MS", sans-serif`;
  g.fillStyle = hit ? '#ff5a46' : active ? '#ffe08a' : 'rgba(255,220,160,0.6)';
  g.fillText(hit ? 'X' : 'NAVEL', x, y + r * 0.95 + 8);
}


/**
 * World-space game panel drawn into a CanvasTexture. Redrawn only when its state changes.
 * Buttons are hit-tested through the panel's UV coordinates.
 */
export class Panel {
  constructor(scene) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = W;
    this.canvas.height = H;
    this.g = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 4;
    const w = CONFIG.ui.panelWidth;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, (w * H) / W),
      new THREE.MeshBasicMaterial({ map: this.texture, transparent: true, depthWrite: false }),
    );
    this.mesh.renderOrder = 30;
    this.mesh.name = 'GamePanel';
    scene.add(this.mesh);
    this.buttons = [];
    this.hover = null;
    this.state = {};
  }

  set(state) {
    this.state = state;
    this.draw();
  }

  setHover(id) {
    if (id !== this.hover) {
      this.hover = id;
      this.draw();
    }
  }

  draw() {
    const g = this.g;
    const s = this.state;
    g.clearRect(0, 0, W, H);
    g.textAlign = 'center';
    g.textBaseline = 'middle';

    // Background: deep maroon to near-black, warm glow behind the title, faint mandala rings.
    roundRect(g, 10, 10, W - 20, H - 20, 40);
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, 'rgba(70,16,6,0.94)');
    bg.addColorStop(0.45, 'rgba(32,8,4,0.93)');
    bg.addColorStop(1, 'rgba(14,4,2,0.94)');
    g.fillStyle = bg;
    g.fill();
    g.save();
    g.clip();
    const glow = g.createRadialGradient(W / 2, 40, 10, W / 2, 40, 520);
    glow.addColorStop(0, 'rgba(255,150,40,0.28)');
    glow.addColorStop(1, 'rgba(255,120,20,0)');
    g.fillStyle = glow;
    g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,190,80,0.06)';
    g.lineWidth = 2;
    for (let r = 120; r < 900; r += 70) {
      g.beginPath();
      g.arc(W / 2, H + 120, r, 0, Math.PI * 2);
      g.stroke();
    }
    g.restore();

    // Double gold border with lotus corners.
    g.lineWidth = 6;
    g.strokeStyle = goldStroke(g);
    roundRect(g, 10, 10, W - 20, H - 20, 40);
    g.stroke();
    g.lineWidth = 2;
    g.strokeStyle = 'rgba(255,200,90,0.55)';
    roundRect(g, 26, 26, W - 52, H - 52, 30);
    g.stroke();
    for (const [x, y] of [[44, 44], [W - 44, 44], [44, H - 44], [W - 44, H - 44]]) lotus(g, x, y, 16);

    // Title row with diyas.
    diya(g, 170, 72);
    diya(g, W - 170, 72);
    g.font = 'bold 54px "Trebuchet MS", "Segoe UI", sans-serif';
    g.shadowColor = 'rgba(255,140,0,0.8)';
    g.shadowBlur = 18;
    g.fillStyle = goldFill(g, 36, 84);
    g.fillText('RAVANA', W / 2, 60);
    g.shadowBlur = 0;
    g.font = 'bold 22px "Trebuchet MS", sans-serif';
    g.fillStyle = '#ffb46a';
    g.fillText('T H E    F I N A L    A R R O W', W / 2, 100);
    divider(g, 124);

    let y = 162;
    if (s.victory) {
      g.shadowColor = 'rgba(255,140,0,0.95)';
      g.shadowBlur = 36;
      g.font = 'bold 96px "Trebuchet MS", sans-serif';
      g.fillStyle = goldFill(g, 165, 255);
      g.fillText('HAPPY DUSSEHRA', W / 2, 212);
      g.shadowBlur = 0;
      g.font = 'italic 32px "Trebuchet MS", sans-serif';
      g.fillStyle = '#ffe2b0';
      g.fillText('Dharma prevails — good triumphs over evil', W / 2, 286);
      roundRect(g, W / 2 - 220, 324, 440, 96, 48);
      g.fillStyle = 'rgba(255,190,70,0.14)';
      g.fill();
      g.lineWidth = 3;
      g.strokeStyle = 'rgba(255,200,90,0.8)';
      g.stroke();
      g.font = 'bold 24px "Trebuchet MS", sans-serif';
      g.fillStyle = '#ffb46a';
      g.fillText('FINAL SCORE', W / 2, 350);
      g.font = 'bold 46px "Trebuchet MS", sans-serif';
      g.fillStyle = '#fff3cf';
      g.fillText(String(s.score), W / 2, 392);
      g.font = '27px "Trebuchet MS", sans-serif';
      g.fillStyle = '#f3d9b0';
      g.fillText(s.stats || '', W / 2, 456);
    } else {
      if (s.total) {
        g.font = 'bold 32px "Trebuchet MS", sans-serif';
        g.textAlign = 'left';
        g.fillStyle = s.navel === 'active' ? '#ffe08a' : '#fff1d6';
        g.fillText(s.navel === 'active' ? 'FINAL TARGET: THE NAVEL' : `Heads remaining  ${s.remaining} / ${s.total}`, 90, y);
        g.textAlign = 'right';
        g.fillStyle = goldFill(g, y - 20, y + 20);
        g.fillText(`SCORE  ${s.score ?? 0}`, W - 90, y);
        g.textAlign = 'center';
        y += 34;
        const bx = 90, bw = W - 180, bh = 20;
        roundRect(g, bx, y, bw, bh, 10);
        g.fillStyle = 'rgba(255,255,255,0.10)';
        g.fill();
        const done = s.total - s.remaining + (s.navel === 'hit' ? 1 : 0);
        const p = done / (s.total + 1);
        if (p > 0) {
          const grd = g.createLinearGradient(bx, 0, bx + bw, 0);
          grd.addColorStop(0, RED);
          grd.addColorStop(0.5, ORANGE);
          grd.addColorStop(1, GOLD);
          g.save();
          g.shadowColor = 'rgba(255,150,40,0.9)';
          g.shadowBlur = 14;
          roundRect(g, bx, y, Math.max(20, bw * p), bh, 10);
          g.fillStyle = grd;
          g.fill();
          g.restore();
        }
        y += 66;
        const n = s.total;
        const gap = 74;
        const x0 = W / 2 - (n * gap) / 2;
        for (let i = 0; i < n; i++) crown(g, x0 + i * gap, y, 25, !!s.destroyed?.[i], i + 1);
        chakra(g, x0 + n * gap + 6, y, 25, s.navel);
        y += 48;
      }
      if (s.message) {
        g.font = '30px "Trebuchet MS", sans-serif';
        g.fillStyle = '#f6e7cf';
        const lines = wrap(g, s.message, W - 170).slice(0, s.total ? 3 : 7);
        lines.forEach((l, i) => g.fillText(l, W / 2, y + 24 + i * 38));
        y += 24 + lines.length * 38;
      }
      if (s.warning) {
        g.font = 'bold 25px "Trebuchet MS", sans-serif';
        const lines = wrap(g, s.warning, W - 220).slice(0, 2);
        const ph = 16 + lines.length * 30;
        roundRect(g, 90, y + 4, W - 180, ph, 18);
        g.fillStyle = 'rgba(200,20,10,0.22)';
        g.fill();
        g.lineWidth = 2;
        g.strokeStyle = 'rgba(255,80,60,0.7)';
        g.stroke();
        g.fillStyle = '#ff8a7a';
        lines.forEach((l, i) => g.fillText(l, W / 2, y + 4 + 23 + i * 30));
      }
    }

    // Buttons (bottom, up to two rows) — pill shaped, primary in saffron-gold.
    this.buttons = [];
    const list = s.buttons || [];
    const rows = list.length > 3 ? 2 : 1;
    const bh = 74;
    const half = Math.ceil(list.length / 2);
    list.forEach((b, i) => {
      const row = rows === 2 && i >= half ? 1 : 0;
      const inRow = rows === 2 ? (row ? list.length - half : half) : list.length;
      const idx = row ? i - half : i;
      const bw = Math.min(330, (W - 150 - (inRow - 1) * 26) / inRow);
      const total = inRow * bw + (inRow - 1) * 26;
      const x = W / 2 - total / 2 + idx * (bw + 26);
      const by = H - 54 - bh - (rows - 1 - row) * (bh + 16);
      const hov = this.hover === b.id;
      g.save();
      if (hov) {
        g.shadowColor = 'rgba(255,170,60,0.95)';
        g.shadowBlur = 26;
      }
      roundRect(g, x, by, bw, bh, bh / 2);
      if (b.primary) {
        const grd = g.createLinearGradient(0, by, 0, by + bh);
        grd.addColorStop(0, hov ? '#ffe08a' : '#ffcf5a');
        grd.addColorStop(1, hov ? '#ff9a2e' : '#e8761a');
        g.fillStyle = grd;
      } else {
        g.fillStyle = hov ? 'rgba(255,190,70,0.38)' : 'rgba(40,12,5,0.85)';
      }
      g.fill();
      g.restore();
      g.lineWidth = hov ? 4 : 2.5;
      g.strokeStyle = b.primary ? '#fff0c0' : 'rgba(255,200,90,0.9)';
      roundRect(g, x, by, bw, bh, bh / 2);
      g.stroke();
      g.fillStyle = b.primary ? '#2a0e00' : '#ffe7bd';
      g.font = `bold ${bw < 250 ? 25 : 29}px "Trebuchet MS", sans-serif`;
      g.fillText(b.label, x + bw / 2, by + bh / 2 + 1);
      this.buttons.push({ id: b.id, x, y: by, w: bw, h: bh });
    });
    this.texture.needsUpdate = true;
  }


  /** Raycast the panel. Returns { id } (id may be null) or null if the panel wasn't hit. */
  pick(raycaster) {
    if (!this.mesh.visible) return null;
    const hit = raycaster.intersectObject(this.mesh, false)[0];
    if (!hit) return null;
    const px = hit.uv.x * W;
    const py = (1 - hit.uv.y) * H;
    const b = this.buttons.find((bb) => px >= bb.x && px <= bb.x + bb.w && py >= bb.y && py <= bb.y + bb.h);
    return { id: b ? b.id : null, distance: hit.distance, point: hit.point };
  }

  /**
   * Put the panel in front of the viewer (yaw-only, so it stays upright).
   * yawOffsetDeg > 0 swings it to the viewer's left.
   */
  placeInFront(camera, { distance = CONFIG.ui.distance, down = 0.22, yawOffsetDeg = 0 } = {}) {
    camera.getWorldPosition(_v);
    camera.getWorldQuaternion(_q);
    _e.setFromQuaternion(_q, 'YXZ');
    const yaw = _e.y + THREE.MathUtils.degToRad(yawOffsetDeg);
    this.mesh.position.set(_v.x - Math.sin(yaw) * distance, _v.y - down, _v.z - Math.cos(yaw) * distance);
    this.mesh.rotation.set(-0.12, yaw, 0, 'YXZ');
  }
}

/** Small "7/10" counter floating above Ravana. */
export class OverheadCounter {
  constructor(scene) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 256;
    this.canvas.height = 96;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.texture, transparent: true, depthWrite: false }));
    this.sprite.scale.set(0.5, 0.1875, 1);
    this.sprite.renderOrder = 25;
    this.sprite.visible = false;
    scene.add(this.sprite);
    this.last = '';
  }

  set(text) {
    if (text === this.last) return;
    this.last = text;
    const g = this.canvas.getContext('2d');
    g.clearRect(0, 0, 256, 96);
    roundRect(g, 6, 8, 244, 80, 40);
    const bg = g.createLinearGradient(0, 8, 0, 88);
    bg.addColorStop(0, 'rgba(70,16,6,0.9)');
    bg.addColorStop(1, 'rgba(20,6,3,0.9)');
    g.fillStyle = bg;
    g.fill();
    g.strokeStyle = '#ffc94d';
    g.lineWidth = 4;
    g.stroke();
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const navel = text.startsWith('NAVEL');
    g.font = `bold ${navel ? 40 : 50}px "Trebuchet MS", sans-serif`;
    g.shadowColor = 'rgba(255,140,0,0.9)';
    g.shadowBlur = 12;
    g.fillStyle = navel ? '#ffe08a' : '#ffc94d';
    g.fillText(text, 128, 50);
    this.texture.needsUpdate = true;
  }
}

/** The 2D HTML landing page shown before entering an immersive session. */
export class Overlay {
  constructor() {
    this.root = document.getElementById('overlay');
    this.status = document.getElementById('status');
    this.diag = document.getElementById('diagnostics');
    this.buttons = document.getElementById('buttons');
  }

  setStatus(html, kind = '') {
    this.status.innerHTML = html;
    this.status.className = kind;
  }

  addDiag(label, value, ok) {
    const li = document.createElement('li');
    li.className = ok === true ? 'ok' : ok === false ? 'bad' : 'info';
    li.innerHTML = `<span>${label}</span><b>${value}</b>`;
    this.diag.appendChild(li);
  }

  addButton(label, onClick, primary = false) {
    const b = document.createElement('button');
    b.textContent = label;
    if (primary) b.className = 'primary';
    b.addEventListener('click', onClick);
    this.buttons.appendChild(b);
    return b;
  }

  hide() {
    this.root.classList.add('hidden');
  }

  show() {
    this.root.classList.remove('hidden');
  }
}
