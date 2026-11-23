/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/sculpt.js — sculpting a mesh (0.7 MD.7), DOM-free: brushes that push, pull, smooth and pinch the surface under a
 * round brush, a mask that protects vertices, X symmetry, and dynamic detail (long edges under the brush are split as you
 * sculpt, on a triangle mesh). Every write goes through the mesh (journalled), so a stroke is one undo step when the caller
 * runs it inside model.meshStroke.
 *
 *   const S = new Sculptor(mesh)        neighbours, a triangle tree for the brush's ray, vertex normals
 *   S.hit(o, d) → {p, n, f} | null      the nearest surface point on a ray (mesh space)
 *   S.dab(brush, at) → n vertices moved  at = {p, r (radius, mesh units), strength 0…1, pressure 0…1, invert, sym ('x' | ''),
 *                                        view (unit vector toward the viewer, for grab), delta (grab: the move), detail (edge
 *                                        length to split down to, 0 = off)}
 *   S.grabStart(p, r, sym) · S.refresh() (after the topology changed) · S.maskAll(v) · S.maskInvert()
 *   BRUSHES · falloff(x)
 * Falloff: smooth (1 − 3x² + 2x³). The area's normal and plane: the falloff-weighted mean of the vertex normals and
 * positions under the brush (as sculpting programs commonly do; no code from any was read).
 */
import { BoxTree } from '../bvh.js';
import { dot3 as dot, lerp3 as lerp, scale3 as mul, sub3 as sub } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const BRUSHES = ['draw', 'clay', 'smooth', 'grab', 'inflate', 'crease', 'pinch', 'flatten', 'mask'];
export const falloff = (x) => (x >= 1 ? 0 : x <= 0 ? 1 : 1 - 3 * x * x + 2 * x * x * x);

export class Sculptor {
  constructor(mesh) { this.m = mesh; this.refresh(); this.grab = null; }
  /** Rebuild what depends on the mesh's shape and topology (after a split, or when the mesh changed outside a stroke). */
  refresh() {
    const m = this.m;
    this.topo = m.topo; this.liveTopo = m.liveTopo || 0;
    // neighbours of each vertex (by its edges)
    const nb = Array.from({ length: m.nv }, () => []);
    for (let h = 0; h < m.nh; h++) {
      if (m.heDead(h)) continue;
      const a = m.hV[h], b = m.head(h);
      if (!nb[a].includes(b)) nb[a].push(b);
      if (!nb[b].includes(a)) nb[b].push(a);
    }
    this.nb = nb;
    this.tri = m.triangulate();
    this.build();
    this.normals();
    this.stamp = new Uint32Array(m.nv); this.tick = 0;
    this.slack = 0;
  }
  /** The triangle tree (boxes widened by `slack` as a stroke moves the surface, so a stale tree still finds it). */
  build() {
    const m = this.m, T = this.tri, P = m.P, boxes = new Float64Array(T.n * 6);
    for (let i = 0; i < T.n; i++) {
      for (let k = 0; k < 3; k++) { boxes[i * 6 + k] = Infinity; boxes[i * 6 + 3 + k] = -Infinity; }
      for (let q = 0; q < 3; q++) { const v = m.hV[T.tri[i * 3 + q]] * 3; for (let k = 0; k < 3; k++) { boxes[i * 6 + k] = Math.min(boxes[i * 6 + k], P[v + k]); boxes[i * 6 + 3 + k] = Math.max(boxes[i * 6 + 3 + k], P[v + k]); } }
    }
    this.boxes = boxes; this.tree = new BoxTree(boxes); this.slack = 0;
  }
  normals() {
    const m = this.m, N = new Float64Array(m.nv * 3), T = this.tri, P = m.P;
    for (let i = 0; i < T.n; i++) {
      const a = m.hV[T.tri[i * 3]] * 3, b = m.hV[T.tri[i * 3 + 1]] * 3, c = m.hV[T.tri[i * 3 + 2]] * 3;
      const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      for (const o of [a, b, c]) { N[o] += nx; N[o + 1] += ny; N[o + 2] += nz; }
    }
    for (let v = 0; v < m.nv; v++) { const l = Math.hypot(N[v * 3], N[v * 3 + 1], N[v * 3 + 2]) || 1; N[v * 3] /= l; N[v * 3 + 1] /= l; N[v * 3 + 2] /= l; }
    this.N = N;
  }
  /** Ray o + t·d (mesh space) → the nearest hit {p, n, t}, or null (Möller–Trumbore on each triangle the tree offers). */
  hit(o, d) {
    const m = this.m, T = this.tri, P = m.P;
    let best = null;
    const s = this.slack;
    const test = (i) => {
      const A = m.hV[T.tri[i * 3]] * 3, B = m.hV[T.tri[i * 3 + 1]] * 3, C = m.hV[T.tri[i * 3 + 2]] * 3;
      const e1 = [P[B] - P[A], P[B + 1] - P[A + 1], P[B + 2] - P[A + 2]], e2 = [P[C] - P[A], P[C + 1] - P[A + 1], P[C + 2] - P[A + 2]];
      const pv = [d[1] * e2[2] - d[2] * e2[1], d[2] * e2[0] - d[0] * e2[2], d[0] * e2[1] - d[1] * e2[0]], det = e1[0] * pv[0] + e1[1] * pv[1] + e1[2] * pv[2];
      if (Math.abs(det) < 1e-18) return;
      const inv = 1 / det, tv = [o[0] - P[A], o[1] - P[A + 1], o[2] - P[A + 2]], u = (tv[0] * pv[0] + tv[1] * pv[1] + tv[2] * pv[2]) * inv;
      if (u < 0 || u > 1) return;
      const qv = [tv[1] * e1[2] - tv[2] * e1[1], tv[2] * e1[0] - tv[0] * e1[2], tv[0] * e1[1] - tv[1] * e1[0]], v = (d[0] * qv[0] + d[1] * qv[1] + d[2] * qv[2]) * inv;
      if (v < 0 || u + v > 1) return;
      const t = (e2[0] * qv[0] + e2[1] * qv[1] + e2[2] * qv[2]) * inv;
      if (t <= 0 || (best && t >= best.t)) return;
      const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]], l = Math.hypot(n[0], n[1], n[2]) || 1;
      best = { t, p: [o[0] + d[0] * t, o[1] + d[1] * t, o[2] + d[2] * t], n: [n[0] / l, n[1] / l, n[2] / l], f: T.face[i] };
    };
    if (s > 0) this.tree.walk((lo, hi) => rayBox(o, d, lo, hi, s), test);
    else this.tree.ray(o, d, test);
    return best;
  }
  /** Vertices within r of p → [{v, w (falloff)}]. */
  near(p, r) {
    const m = this.m, T = this.tri, P = m.P, out = [], r2 = r * r, s = this.slack;
    this.tick = (this.tick + 1) >>> 0 || 1;
    const st = this.stamp, tk = this.tick;
    this.tree.box([p[0] - r - s, p[1] - r - s, p[2] - r - s], [p[0] + r + s, p[1] + r + s, p[2] + r + s], (i) => {
      for (let q = 0; q < 3; q++) {
        const v = m.hV[T.tri[i * 3 + q]];
        if (st[v] === tk) continue;
        st[v] = tk;
        const dx = P[v * 3] - p[0], dy = P[v * 3 + 1] - p[1], dz = P[v * 3 + 2] - p[2], d2 = dx * dx + dy * dy + dz * dz;
        if (d2 <= r2) out.push({ v, w: falloff(Math.sqrt(d2) / r) });
      }
    });
    return out;
  }
  /** Grab: the vertices under the brush and their weights at the stroke's start (they follow the pointer from there). */
  grabStart(p, r, sym = '') {
    const m = this.m, take = (q) => this.near(q, r).map(({ v, w }) => ({ v, w, p0: [m.P[v * 3], m.P[v * 3 + 1], m.P[v * 3 + 2]] }));
    this.grab = { sets: [{ list: take(p), mir: false }].concat(sym === 'x' ? [{ list: take([-p[0], p[1], p[2]]), mir: true }] : []) };
  }

  /** One dab of a brush. → the number of vertices it moved (or masked). */
  dab(brush, at) {
    const m = this.m, P = m.P;
    const mask = brush === 'mask' ? null : m.attrArray('mask');
    const k = Math.max(0, Math.min(1, at.strength ?? 0.5)) * Math.max(0, Math.min(1, at.pressure ?? 1)), sign = at.invert ? -1 : 1, r = at.r;
    let n = 0;
    if (brush === 'grab') {
      if (!this.grab) return 0;
      for (const set of this.grab.sets) {
        const d = set.mir ? [-at.delta[0], at.delta[1], at.delta[2]] : at.delta;
        for (const { v, w, p0 } of set.list) {
          const ww = w * (mask ? 1 - mask[v] : 1);
          m.setPos(v, p0[0] + d[0] * ww, p0[1] + d[1] * ww, p0[2] + d[2] * ww); n++;
        }
      }
      this.moved(Math.hypot(...at.delta));
      return n;
    }
    const centers = [{ p: at.p, mir: false }];
    if (at.sym === 'x' && Math.abs(at.p[0]) > r * 0.05) centers.push({ p: [-at.p[0], at.p[1], at.p[2]], mir: true });   // on the middle line one dab does both sides
    let maxMove = 0;
    for (const c of centers) {
      const list = this.near(c.p, r);
      if (!list.length) continue;
      if (brush === 'mask') {
        if (!m.hasAttr('mask')) m.addAttr('mask', 'vertex', 1);
        const M = m.attrArray('mask');
        for (const { v, w } of list) { const x = Math.max(0, Math.min(1, M[v] + sign * w * k)); if (x !== M[v]) { m.setAttr('mask', v, [x]); n++; } }
        continue;
      }
      // the area under the brush: its normal and centre
      let an = [0, 0, 0], ac = [0, 0, 0], ws = 0;
      for (const { v, w } of list) { for (let q = 0; q < 3; q++) { an[q] += this.N[v * 3 + q] * w; ac[q] += P[v * 3 + q] * w; } ws += w; }
      const al = Math.hypot(...an) || 1;
      an = an.map((x) => x / al); ac = ac.map((x) => x / (ws || 1));
      const step = r * 0.1 * k;   // how far one full-strength dab moves the middle of the brush
      const moves = [];
      for (const { v, w } of list) {
        const f = w * (mask ? 1 - mask[v] : 1);
        if (f <= 0) continue;
        const p = [P[v * 3], P[v * 3 + 1], P[v * 3 + 2]], nv = [this.N[v * 3], this.N[v * 3 + 1], this.N[v * 3 + 2]];
        let q = p;
        if (brush === 'draw') q = addS(p, an, sign * step * f);
        else if (brush === 'inflate') q = addS(p, nv, sign * step * f);
        else if (brush === 'flatten' || brush === 'clay') {
          // toward the area's plane (clay: a plane raised by a step, and only up to it)
          const plane = brush === 'clay' ? addS(ac, an, sign * step) : ac, dd = dot(sub(p, plane), an);
          if (brush === 'clay' && sign * dd >= 0) continue;
          q = addS(p, an, -dd * Math.min(1, f * Math.max(0.1, k)));
        } else if (brush === 'smooth') {
          const nb = this.nb[v];
          if (!nb.length) continue;
          const avg = [0, 0, 0];
          for (const u of nb) for (let i = 0; i < 3; i++) avg[i] += P[u * 3 + i];
          q = lerp(p, avg.map((x) => x / nb.length), Math.min(1, f * Math.max(0.1, k)));
        } else if (brush === 'pinch' || brush === 'crease') {
          // toward the brush's middle, along the surface; crease also cuts in (out, inverted)
          const to = sub(c.p, p), tan = sub(to, mul(an, dot(to, an)));
          q = addS(p, tan, f * k * 0.3 * (brush === 'pinch' ? sign : 1));
          if (brush === 'crease') q = addS(q, an, -sign * step * f * 0.6);
        }
        moves.push([v, q]);
      }
      for (const [v, q] of moves) { const d = Math.hypot(q[0] - P[v * 3], q[1] - P[v * 3 + 1], q[2] - P[v * 3 + 2]); maxMove = Math.max(maxMove, d); m.setPos(v, q[0], q[1], q[2]); n++; }
    }
    if (brush !== 'mask') this.moved(maxMove);
    if (at.detail > 0 && brush !== 'mask' && brush !== 'smooth') n += this.detail(centers.map((c) => c.p), r, at.detail);
    return n;
  }
  /** After moving: the normals under the brush again, and the tree's slack grows by how far anything moved. */
  moved(d) {
    this.slack += d;
    if (this.slack > 0) this.normals();
    // a tree too stale to be quick: build it again
    if (this.slack > this.size() * 0.05) this.build();
  }
  size() { if (!this._size) { const t = this.tree; this._size = t.min ? Math.hypot(t.max[0] - t.min[0], t.max[1] - t.min[1], t.max[2] - t.min[2]) : 1; } return this._size; }

  /** Dynamic detail: split triangle edges under the brush longer than `len` (longest first, at most 400 a dab). */
  detail(centres, r, len) {
    const m = this.m, P = m.P, L2 = len * len, cand = [];
    for (const c of centres) for (const { v } of this.near(c, r)) {
      if (m.vHe[v] < 0) continue;
      for (const g of m.outgoing(v)) {
        const b = m.head(g), dx = P[b * 3] - P[v * 3], dy = P[b * 3 + 1] - P[v * 3 + 1], dz = P[b * 3 + 2] - P[v * 3 + 2], d2 = dx * dx + dy * dy + dz * dz;
        if (d2 > L2 && m.edgeOf(g) === g) cand.push([d2, g]);
      }
    }
    if (!cand.length) return 0;
    cand.sort((a, b) => b[0] - a[0]);
    let n = 0;
    const done = new Set();
    for (const [, h] of cand) {
      if (n >= 400) break;
      if (m.heDead(h) || done.has(h)) continue;
      const t = m.hTw[h], f1 = m.hF[h], f2 = t >= 0 ? m.hF[t] : -1;
      if (m.faceSize(f1) !== 3 || (f2 >= 0 && m.faceSize(f2) !== 3)) continue;
      done.add(h); if (t >= 0) done.add(t);
      splitEdge(m, h);
      n++;
    }
    if (n) { m.liveTopo = (m.liveTopo || 0) + 1; this.refresh(); }
    return n;
  }
  /** Mask: every vertex to v (0 clears), or each turned over. */
  maskAll(v) { const m = this.m; if (!m.hasAttr('mask')) { if (!v) return 0; m.addAttr('mask', 'vertex', 1); } for (let i = 0; i < m.nv; i++) if (!m.vertDead(i)) m.setAttr('mask', i, [v]); return m.nv; }
  maskInvert() { const m = this.m; if (!m.hasAttr('mask')) m.addAttr('mask', 'vertex', 1); const M = m.attrArray('mask'); for (let i = 0; i < m.nv; i++) if (!m.vertDead(i)) m.setAttr('mask', i, [1 - M[i]]); return m.nv; }
}

/** Split triangle edge h (and its twin's triangle) at the middle: two triangles become four, corner layers kept. */
export function splitEdge(m, h) {
  const t = m.hTw[h], a = m.hV[h], b = m.head(h), P = m.P;
  const mid = m.addVertex((P[a * 3] + P[b * 3]) / 2, (P[a * 3 + 1] + P[b * 3 + 1]) / 2, (P[a * 3 + 2] + P[b * 3 + 2]) / 2);
  const remove = [m.hF[h]], add = [];
  // triangle (a, b, c): corners h (a), next (b), prev (c)
  const c1 = m.hPv[h], hb = m.hNx[h], c = m.hV[c1];
  add.push({ verts: [a, mid, c], from: m.hF[h], corners: [h, [[h, 0.5], [hb, 0.5]], c1] });
  add.push({ verts: [mid, b, c], from: m.hF[h], corners: [[[h, 0.5], [hb, 0.5]], hb, c1] });
  if (t >= 0) {
    // the twin's triangle (b, a, d): corners t (b), next (a), prev (d)
    remove.push(m.hF[t]);
    const ta = m.hNx[t], d1 = m.hPv[t], d = m.hV[d1];
    add.push({ verts: [b, mid, d], from: m.hF[t], corners: [t, [[t, 0.5], [ta, 0.5]], d1] });
    add.push({ verts: [mid, a, d], from: m.hF[t], corners: [[[t, 0.5], [ta, 0.5]], ta, d1] });
  }
  for (const x of add) x.mat = m.fMat[x.from];
  m.replaceFaces(remove, add);
  return mid;
}

// ---- small vector helpers ----
const addS = (a, d, k) => [a[0] + d[0] * k, a[1] + d[1] * k, a[2] + d[2] * k];
/** Does the ray pass within s of the box [lo, hi]? (slab test on the box grown by s) */
function rayBox(o, d, lo, hi, s) {
  let t0 = 0, t1 = Infinity;
  for (let k = 0; k < 3; k++) {
    const a = lo[k] - s, b = hi[k] + s;
    if (Math.abs(d[k]) < 1e-18) { if (o[k] < a || o[k] > b) return false; continue; }
    let u = (a - o[k]) / d[k], v = (b - o[k]) / d[k];
    if (u > v) [u, v] = [v, u];
    t0 = Math.max(t0, u); t1 = Math.min(t1, v);
    if (t0 > t1) return false;
  }
  return true;
}
