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
    roundRect(g, 8, 8, W - 16, H - 16, 36);
    g.fillStyle = 'rgba(18,8,4,0.84)';
    g.fill();
    g.lineWidth = 5;
    g.strokeStyle = 'rgba(255,190,70,0.85)';
    g.stroke();

    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillStyle = GOLD;
    g.font = 'bold 50px "Trebuchet MS", "Segoe UI", sans-serif';
    g.fillText('RAVANA — THE FINAL ARROW', W / 2, 66);
    g.fillStyle = 'rgba(255,190,70,0.35)';
    g.fillRect(140, 104, W - 280, 3);

    let y = 150;
    if (s.victory) {
      g.shadowColor = ORANGE;
      g.shadowBlur = 30;
      g.fillStyle = '#ffe08a';
      g.font = 'bold 96px "Trebuchet MS", sans-serif';
      g.fillText('DHARMA PREVAILS', W / 2, 220);
      g.shadowBlur = 0;
      g.fillStyle = '#fff';
      g.font = 'bold 48px "Trebuchet MS", sans-serif';
      g.fillText(`Final score: ${s.score}`, W / 2, 330);
      g.font = '34px "Trebuchet MS", sans-serif';
      g.fillStyle = '#f3d9b0';
      g.fillText(s.stats || '', W / 2, 395);
    } else {
      if (s.total) {
        g.font = 'bold 42px "Trebuchet MS", sans-serif';
        g.fillStyle = '#fff';
        g.fillText(`Remaining targets: ${s.remaining}/${s.total}`, W / 2, y);
        // progress bar (fills as heads are destroyed)
        y += 48;
        const bx = 110, bw = W - 220, bh = 26;
        roundRect(g, bx, y, bw, bh, 13);
        g.fillStyle = 'rgba(255,255,255,0.12)';
        g.fill();
        const p = (s.total - s.remaining) / s.total;
        if (p > 0) {
          const grd = g.createLinearGradient(bx, 0, bx + bw, 0);
          grd.addColorStop(0, RED);
          grd.addColorStop(0.5, ORANGE);
          grd.addColorStop(1, GOLD);
          roundRect(g, bx, y, Math.max(26, bw * p), bh, 13);
          g.fillStyle = grd;
          g.fill();
        }
        // ten target indicators
        y += 72;
        const n = s.total;
        const gap = 78;
        const x0 = W / 2 - ((n - 1) * gap) / 2;
        for (let i = 0; i < n; i++) {
          const dead = s.destroyed?.[i];
          const cx = x0 + i * gap;
          g.beginPath();
          g.arc(cx, y, 26, 0, Math.PI * 2);
          g.fillStyle = dead ? 'rgba(60,20,10,0.9)' : 'rgba(255,190,70,0.95)';
          g.fill();
          g.lineWidth = 3;
          g.strokeStyle = dead ? RED : '#fff3c4';
          g.stroke();
          g.fillStyle = dead ? RED : '#2a1200';
          g.font = 'bold 26px "Trebuchet MS", sans-serif';
          g.fillText(dead ? '✕' : String(i + 1), cx, y + 1);
        }
        y += 58;
        g.font = 'bold 38px "Trebuchet MS", sans-serif';
        g.fillStyle = GOLD;
        g.fillText(`Score: ${s.score ?? 0}`, W / 2, y);
        y += 30;
      }
      if (s.message) {
        g.font = '32px "Trebuchet MS", sans-serif';
        g.fillStyle = '#f3e4cc';
        const lines = wrap(g, s.message, W - 140).slice(0, s.total ? 3 : 7);
        lines.forEach((l, i) => g.fillText(l, W / 2, y + 26 + i * 40));
        y += 26 + lines.length * 40;
      }
      if (s.warning) {
        g.font = 'bold 30px "Trebuchet MS", sans-serif';
        g.fillStyle = RED;
        wrap(g, s.warning, W - 140).slice(0, 3).forEach((l, i) => g.fillText(l, W / 2, y + 22 + i * 36));
      }
    }

    // Buttons (bottom, up to two rows of three)
    this.buttons = [];
    const list = s.buttons || [];
    const rows = list.length > 3 ? 2 : 1;
    const bh = 78;
    list.forEach((b, i) => {
      const row = rows === 2 && i >= Math.ceil(list.length / 2) ? 1 : 0;
      const inRow = rows === 2 ? (row ? list.length - Math.ceil(list.length / 2) : Math.ceil(list.length / 2)) : list.length;
      const idx = row ? i - Math.ceil(list.length / 2) : i;
      const bw = Math.min(300, (W - 120 - (inRow - 1) * 24) / inRow);
      const total = inRow * bw + (inRow - 1) * 24;
      const x = W / 2 - total / 2 + idx * (bw + 24);
      const by = H - 40 - bh - (rows - 1 - row) * (bh + 18);
      const hov = this.hover === b.id;
      roundRect(g, x, by, bw, bh, 20);
      g.fillStyle = b.primary ? (hov ? '#ffb347' : '#e8891c') : hov ? 'rgba(255,190,70,0.45)' : 'rgba(255,190,70,0.16)';
      g.fill();
      g.lineWidth = hov ? 5 : 3;
      g.strokeStyle = b.primary ? '#ffe2a0' : GOLD;
      g.stroke();
      g.fillStyle = b.primary ? '#2a1000' : '#fff';
      g.font = `bold ${bw < 240 ? 28 : 32}px "Trebuchet MS", sans-serif`;
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
    roundRect(g, 4, 4, 248, 88, 30);
    g.fillStyle = 'rgba(18,8,4,0.75)';
    g.fill();
    g.strokeStyle = GOLD;
    g.lineWidth = 4;
    g.stroke();
    g.fillStyle = GOLD;
    g.font = 'bold 54px "Trebuchet MS", sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
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
