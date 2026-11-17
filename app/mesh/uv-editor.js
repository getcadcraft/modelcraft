/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/uv-editor.js — the UV editor beside the 3D view in the UV workspace (0.7 MD.5): the edited mesh's faces laid out
 * in their UVs over the unit square. It shares the selection with the 3D view (the Mesh tool's), so picking a face here
 * picks it there and back. Words through the host's `t`, nothing typed into the DOM as HTML.
 *
 *   new UVEditor(host, box)    box = the element it fills (a canvas is made in it)
 *   attach(tool) · detach() · draw() (asked for on the next frame) · fit()
 * Mouse: click a face (Shift adds or removes), drag a box, double-click (or L) its island; drag a selected face to move
 * the selection's UVs; R and S then a drag turn and scale them about their centre (Esc cancels, a click keeps); wheel
 * zooms at the pointer, middle or right drag pans. Each move is one undo step (the mesh's).
 */
import { uvIslands } from './uv.js';
import { PadDetector } from '../wheel-pad.js';   // D7.56: a trackpad's two-finger swipe pans

const token = (name, fb) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fb;

export class UVEditor {
  constructor(host, box) {
    this.h = host; this.box = box; this.tool = null;
    this.cv = document.createElement('canvas');
    this.cv.className = 'mc-uv-canvas';
    this.cv.tabIndex = 0;
    this.cv.setAttribute('aria-label', host.t('app.uv.editor'));
    box.append(this.cv);
    Object.defineProperty(this.cv, 'uvView', { configurable: true, get: () => ({ ox: this.ox, oy: this.oy, z: this.z }) });   // for tests: the pan and zoom, read-only (uv → screen below)
    this.z = 300; this.ox = 20; this.oy = 320;   // uv → screen: x = ox + u·z, y = oy − v·z
    this.drag = null; this.op = null; this.hover = false; this.stretch = null; this._raf = 0;
    const on = (n, f, o) => this.cv.addEventListener(n, f, o);
    on('pointerdown', (e) => this.down(e));
    on('pointermove', (e) => this.move(e));
    on('pointerup', (e) => this.up(e));
    on('pointerenter', () => { this.hover = true; });
    on('pointerleave', () => { this.hover = false; });
    on('dblclick', (e) => { const f = this.faceAt(this.local(e)); if (f >= 0) this.selectIsland(f, e.shiftKey); });
    const pad = new PadDetector();
    on('wheel', (e) => { e.preventDefault(); if (pad.isSwipe(e)) { this.ox -= e.deltaX; this.oy -= e.deltaY; this.draw(); return; }   // D7.56: two fingers pan, a pinch and a mouse wheel zoom
      const p = this.local(e), k = Math.exp(-e.deltaY * 0.0015); this.ox = p[0] - (p[0] - this.ox) * k; this.oy = p[1] - (p[1] - this.oy) * k; this.z *= k; this.draw(); }, { passive: false });
    on('contextmenu', (e) => e.preventDefault());
    this.ro = new ResizeObserver(() => { this.size(); this.draw(); });
    this.ro.observe(box);
    this.size();
  }
  size() {
    const r = this.box.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = Math.max(1, r.width); this.hgt = Math.max(1, r.height); this.dpr = dpr;
    this.cv.width = Math.round(this.w * dpr); this.cv.height = Math.round(this.hgt * dpr);
  }
  attach(tool) { this.tool = tool; this.fit(); this.draw(); }
  detach() { this.tool = null; this.op = null; this.draw(); }
  destroy() { this.ro.disconnect(); this.cv.remove(); }
  /** The unit square to fill the editor. */
  fit() { const s = Math.min(this.w, this.hgt) * 0.86; this.z = s; this.ox = (this.w - s) / 2; this.oy = (this.hgt + s) / 2; }
  local(e) { const r = this.cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  toUV(p) { return [(p[0] - this.ox) / this.z, (this.oy - p[1]) / this.z]; }
  toS(u, v) { return [this.ox + u * this.z, this.oy - v * this.z]; }
  get mesh() { return this.tool?.mesh || null; }
  draw() { if (!this._raf) this._raf = requestAnimationFrame(() => { this._raf = 0; this.paint(); }); }

  paint() {
    const g = this.cv.getContext('2d'), d = this.dpr;
    g.setTransform(d, 0, 0, d, 0, 0);
    g.fillStyle = token('--sheet-2', '#e9eef3'); g.fillRect(0, 0, this.w, this.hgt);
    // the unit square and its tenths
    const [x0, y0] = this.toS(0, 1), s = this.z;
    g.fillStyle = token('--sheet', '#f3f6f8'); g.fillRect(x0, y0, s, s);
    g.strokeStyle = token('--grid', '#d5dde5'); g.lineWidth = 1;
    g.beginPath();
    for (let i = 1; i < 10; i++) { g.moveTo(x0 + (s * i) / 10, y0); g.lineTo(x0 + (s * i) / 10, y0 + s); g.moveTo(x0, y0 + (s * i) / 10); g.lineTo(x0 + s, y0 + (s * i) / 10); }
    g.stroke();
    g.strokeStyle = token('--ink-2', '#34404e'); g.lineWidth = 1.5; g.strokeRect(x0, y0, s, s);
    const m = this.mesh;
    if (!m) { g.fillStyle = token('--ink-2', '#34404e'); g.font = '13px sans-serif'; g.fillText(this.h.t('app.uv.no_mesh'), 12, 22); return; }
    const uv = m.attrArray('uv');
    if (!uv) { g.fillStyle = token('--ink-2', '#34404e'); g.font = '13px sans-serif'; g.fillText(this.h.t('app.uv.no_uvs'), 12, 22); return; }
    const sel = this.tool.sel, selC = token('--layer-blue', '#1e48c8'), ink = token('--ink', '#17202b'), red = token('--layer-red', '#b3122e');
    const st = this.stretch;
    const fill = (f) => {
      if (st) { const t = Math.max(0, Math.min(1, st[f] || 0)); return `hsl(${Math.round(220 - 220 * t)} 70% 50% / 0.55)`; }
      return null;
    };
    const cs = [];
    // faces: fills first (stretch, selection), then the edges, seams red on top
    for (let f = 0; f < m.nf; f++) {
      if (m.faceDead(f) || m.fFl[f] & 4) continue;
      m.faceCorners(f, cs);
      const fc = sel.f[f] ? null : fill(f);
      if (!fc && !sel.f[f]) continue;
      g.beginPath();
      cs.forEach((h, i) => { const p = this.toS(uv[h * 2], uv[h * 2 + 1]); if (i) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); });
      g.closePath();
      if (sel.f[f]) { g.globalAlpha = 0.4; g.fillStyle = selC; } else g.fillStyle = fc;
      g.fill(); g.globalAlpha = 1;
    }
    g.lineWidth = 1; g.strokeStyle = ink; g.globalAlpha = 0.7;
    g.beginPath();
    for (let f = 0; f < m.nf; f++) {
      if (m.faceDead(f) || m.fFl[f] & 4) continue;
      m.faceCorners(f, cs);
      cs.forEach((h, i) => { const p = this.toS(uv[h * 2], uv[h * 2 + 1]); if (i) g.lineTo(p[0], p[1]); else g.moveTo(p[0], p[1]); });
      g.closePath();
    }
    g.stroke(); g.globalAlpha = 1;
    // seams
    g.strokeStyle = red; g.lineWidth = 2;
    g.beginPath();
    for (let h = 0; h < m.nh; h++) {
      if (m.heDead(h) || !(m.hFl[h] & 16) || m.fFl[m.hF[h]] & 4) continue;
      const a = this.toS(uv[h * 2], uv[h * 2 + 1]), n = m.hNx[h], b = this.toS(uv[n * 2], uv[n * 2 + 1]);
      g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]);
    }
    g.stroke();
    if (this.drag?.kind === 'box') {
      const [a, b] = [this.drag.p0, this.drag.p1];
      g.strokeStyle = selC; g.setLineDash([4, 3]); g.strokeRect(Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])); g.setLineDash([]);
    }
  }

  /** The face whose UV polygon holds screen point p (the last drawn wins), or −1. */
  faceAt(p) {
    const m = this.mesh, uv = m?.attrArray('uv');
    if (!uv) return -1;
    const [u, v] = this.toUV(p), cs = [];
    let hit = -1;
    for (let f = 0; f < m.nf; f++) {
      if (m.faceDead(f) || m.fFl[f] & 4) continue;
      m.faceCorners(f, cs);
      let inside = false;
      for (let i = 0, j = cs.length - 1; i < cs.length; j = i++) {
        const a = cs[i], b = cs[j], ya = uv[a * 2 + 1], yb = uv[b * 2 + 1];
        if (ya > v !== yb > v && u < ((uv[b * 2] - uv[a * 2]) * (v - ya)) / (yb - ya) + uv[a * 2]) inside = !inside;
      }
      if (inside) hit = f;
    }
    return hit;
  }
  selectIsland(f, add) {
    const isl = uvIslands(this.mesh).find((fs) => fs.includes(f));
    if (!isl) return;
    const S = this.tool.sel;
    if (S.mode !== 'face') this.tool.setMode('face');
    if (!add) S.clear();
    for (const g of isl) S.pickFace(g, 'add');
    this.tool.selChanged(); this.h.renderPanel(); this.draw();
  }
  selectedCorners() {
    const m = this.mesh, out = [], cs = [];
    for (const f of this.tool.sel.faces()) { m.faceCorners(f, cs); out.push(...cs); }
    return out;
  }

  down(e) {
    if (!this.tool) return;
    this.cv.focus();
    const p = this.local(e);
    this.cv.setPointerCapture(e.pointerId);
    if (this.op) { this.finish(true); return; }
    if (e.button === 1 || e.button === 2) { this.drag = { kind: 'pan', p0: p, o: [this.ox, this.oy] }; return; }
    const f = this.faceAt(p);
    if (f >= 0 && this.tool.sel.f[f] && !e.shiftKey) { this.startOp('move', p, true); return; }
    this.drag = { kind: 'box', p0: p, p1: p, shift: e.shiftKey, face: f };
  }
  move(e) {
    const p = this.local(e);
    this.lastP = p;
    if (this.op) { this.op.p = p; this.preview(); return; }
    if (!this.drag) return;
    if (this.drag.kind === 'pan') { this.ox = this.drag.o[0] + p[0] - this.drag.p0[0]; this.oy = this.drag.o[1] + p[1] - this.drag.p0[1]; this.draw(); return; }
    this.drag.p1 = p; this.draw();
  }
  up(e) {
    const d = this.drag;
    this.drag = null;
    if (this.op && this.op.kind === 'move' && this.op.byDrag) { this.finish(true); return; }
    if (!d || d.kind !== 'box') { this.draw(); return; }
    const S = this.tool.sel, m = this.mesh, uv = m.attrArray('uv');
    if (S.mode !== 'face') this.tool.setMode('face');
    const small = Math.hypot(d.p1[0] - d.p0[0], d.p1[1] - d.p0[1]) < 4;
    if (small) {
      if (d.face >= 0) S.pickFace(d.face, d.shift ? 'toggle' : 'set');
      else if (!d.shift) S.clear();
    } else if (uv) {
      // faces whose every corner is inside the box
      const a = this.toUV([Math.min(d.p0[0], d.p1[0]), Math.max(d.p0[1], d.p1[1])]), b = this.toUV([Math.max(d.p0[0], d.p1[0]), Math.min(d.p0[1], d.p1[1])]);
      if (!d.shift) S.clear();
      const cs = [];
      for (let f = 0; f < m.nf; f++) {
        if (m.faceDead(f) || m.fFl[f] & 4) continue;
        m.faceCorners(f, cs);
        if (cs.every((h) => uv[h * 2] >= a[0] && uv[h * 2] <= b[0] && uv[h * 2 + 1] >= a[1] && uv[h * 2 + 1] <= b[1])) S.pickFace(f, 'add');
      }
    }
    this.tool.selChanged(); this.h.renderPanel(); this.draw();
  }
  /** Keys while the pointer is over the editor (the workspace hands them here). → true when used. */
  key(e) {
    const l = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (this.op) {
      if (e.key === 'Escape') { this.finish(false); return true; }
      if (e.key === 'Enter') { this.finish(true); return true; }
      return true;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return false;
    if (l === 'r' || l === 's' || l === 'g') { if (!this.tool.sel.faces().length) { this.h.print(this.h.t('app.uv.need_faces')); return true; } this.startOp({ r: 'rotate', s: 'scale', g: 'move' }[l], this.lastP || [this.w / 2, this.hgt / 2]); return true; }
    if (l === 'l') { const f = this.faceAt(this.lastP || [0, 0]); if (f >= 0) this.selectIsland(f, e.shiftKey); return true; }
    if (l === 'Home' || l === 'f') { this.fit(); this.draw(); return true; }
    return false;
  }

  // ---- move / rotate / scale of the selected faces' UVs, previewed live, one undo step ----
  startOp(kind, p, byDrag = false) {
    const corners = this.selectedCorners();
    if (!corners.length) return;
    const uv = this.mesh.attrArray('uv');
    const base = corners.map((h) => [uv[h * 2], uv[h * 2 + 1]]);
    let cx = 0, cy = 0;
    for (const [u, v] of base) { cx += u; cy += v; }
    cx /= base.length; cy /= base.length;
    this.op = { kind, p0: p, p, corners, base, c: [cx, cy], byDrag };
    this.h.model.begin();
    this.h.tip(this.h.t('app.uv.hint.' + kind));
    this.preview();
  }
  preview() {
    const o = this.op, [u0, v0] = this.toUV(o.p0), [u1, v1] = this.toUV(o.p), [cx, cy] = o.c;
    let fn;
    if (o.kind === 'move') fn = ([u, v]) => [u + u1 - u0, v + v1 - v0];
    else if (o.kind === 'rotate') { const a = Math.atan2(v1 - cy, u1 - cx) - Math.atan2(v0 - cy, u0 - cx), c = Math.cos(a), s = Math.sin(a); fn = ([u, v]) => [cx + (u - cx) * c - (v - cy) * s, cy + (u - cx) * s + (v - cy) * c]; }
    else { const k = Math.hypot(u1 - cx, v1 - cy) / Math.max(1e-9, Math.hypot(u0 - cx, v0 - cy)); fn = ([u, v]) => [cx + (u - cx) * k, cy + (v - cy) * k]; }
    this.h.model.meshPreview(this.tool.defId, (me) => { o.corners.forEach((h, i) => { const q = fn(o.base[i]); me.setAttr('uv', h, q); }); });
    this.h.changed?.(); this.h.view?.invalidate?.(); this.draw();
  }
  finish(keep) {
    const o = this.op;
    this.op = null;
    if (!o) return;
    if (keep) this.h.model.commit(this.h.t('app.uv.undo.' + o.kind)); else this.h.model.abort();
    this.h.tip(this.h.t('app.uv.hint.editor'));
    this.h.changed?.(); this.h.renderPanel(); this.draw();
  }
}
