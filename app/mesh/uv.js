/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/uv.js — UV tools for ModelCraft's meshes (0.7 MD.5), DOM-free. UVs live in the mesh's 'uv' corner layer (one
 * [u, v] per face corner); every function writes through the mesh (journalled: run it inside model.meshEdit for one undo
 * step). Our own, from the published methods:
 *   conformal unwrap — B. Lévy, S. Petitjean, N. Ray, J. Maillot, "Least Squares Conformal Maps for Automatic Texture Atlas
 *     Generation", SIGGRAPH 2002 (LSCM; two pinned points, solved by conjugate gradients on the normal equations);
 *   angle-based unwrap — A. Sheffer, E. de Sturler, "Parameterization of Faceted Surfaces for Meshing using Angle-Based
 *     Flattening", 2001, and A. Sheffer, B. Lévy, M. Mogilnitsky, A. Bogomyakov, "ABF++", ACM TOG 24(2), 2005 (Newton on the
 *     angles with the triangle, planarity and wheel constraints; the system reduced to the constraints' Schur complement
 *     because the energy's Hessian is diagonal; then LSCM from the angles' triangle shapes);
 *   packing — islands scaled to one texel density, turned to their smallest bounding rectangle (rotating calipers on the
 *     convex hull), then placed in shelves, the shelf width chosen for the squarest result.
 * No code from xatlas or any other UV library was read or used.
 *
 *   islands(m, faces?) → [{faces, wedges: Int32Array per corner (−1 outside), nW, boundary: Uint8Array per wedge, closed}]
 *   unwrap(m, faces?, {method: 'angle' | 'conformal', pack, margin}) → {islands, notes}
 *   projectBox | projectCylinder | projectSphere (m, faces?, {axis, center, size}) · projectView(m, faces?, toScreen)
 *   pack(m, faces?, {margin, rotate}) → {islands, side}
 *   uvIslands(m, faces?) → [[face…]]            faces joined where their UVs are continuous (and no seam between)
 *   stretch(m, mode = 'angle' | 'area') → Float32Array per face, 0 = none … 1 = a lot (flipped faces 1)
 *   markSeams(m, edges, on) · seamsFromSharp(m, deg) · seamsFromIslands(m) · clearSeams(m)
 * `faces` = an array of face indices; missing or empty = every face that shows.
 */
import { FL_SEAM, FL_HIDE, FL_SHARP } from '../mesh.js';
import { cross3 as crs, dot3 as dt3, len3 as ln3, sub3 as sub, unit3 as norm3 } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const TAU = Math.PI * 2;
const live = (m, f) => !m.faceDead(f) && !(m.fFl[f] & FL_HIDE);
function faceList(m, faces) {
  if (faces && faces.length) return faces.filter((f) => live(m, f));
  const out = [];
  for (let f = 0; f < m.nf; f++) if (live(m, f)) out.push(f);
  return out;
}
function ensureUV(m) { if (!m.hasAttr('uv')) m.addAttr('uv', 'corner', 2); return m.attrArray('uv'); }
const putUV = (m, h, u, v) => m.setAttr('uv', h, [u, v]);

// ---- seams ----
export function markSeams(m, edges, on = true) { for (const h of edges) m.setEdgeFlag(h, FL_SEAM, on); return edges.length; }
export function clearSeams(m) { let n = 0; for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.hFl[h] & FL_SEAM && m.edgeOf(h) === h) { m.setEdgeFlag(h, FL_SEAM, false); n++; } return n; }
/** Seams on sharp edges: marked sharp, or where the faces meet at more than `deg` degrees. */
export function seamsFromSharp(m, deg = 60) {
  const lim = Math.cos((deg * Math.PI) / 180), A = [0, 0, 0], B = [0, 0, 0];
  let n = 0;
  for (let h = 0; h < m.nh; h++) {
    const t = m.hTw[h];
    if (m.heDead(h) || t < 0 || m.edgeOf(h) !== h) continue;
    m.faceNormal(m.hF[h], A); m.faceNormal(m.hF[t], B);
    if (m.hFl[h] & FL_SHARP || A[0] * B[0] + A[1] * B[1] + A[2] * B[2] < lim) { if (!(m.hFl[h] & FL_SEAM)) { m.setEdgeFlag(h, FL_SEAM, true); n++; } }
  }
  return n;
}
/** Seams where the UVs already break (the borders of the UV islands). */
export function seamsFromIslands(m) {
  const uv = m.attrArray('uv');
  if (!uv) return 0;
  let n = 0;
  for (let h = 0; h < m.nh; h++) {
    const t = m.hTw[h];
    if (m.heDead(h) || t < 0 || m.edgeOf(h) !== h || m.hFl[h] & FL_SEAM) continue;
    if (!uvJoined(m, uv, h, t)) { m.setEdgeFlag(h, FL_SEAM, true); n++; }
  }
  return n;
}
const EPS_UV = 1e-7;
const same = (uv, a, b) => Math.abs(uv[a * 2] - uv[b * 2]) <= EPS_UV && Math.abs(uv[a * 2 + 1] - uv[b * 2 + 1]) <= EPS_UV;
/** Do the two faces of edge h / t share both ends' UVs? (h runs a→b in its face, t b→a: a's corners are h and next(t).) */
const uvJoined = (m, uv, h, t) => same(uv, h, m.hNx[t]) && same(uv, m.hNx[h], t);

// ---- islands and wedges ----
/**
 * Islands of `faces` cut at seams, open edges and the edge of the set. Within an island, the corners round one vertex that
 * are not split by a seam are one "wedge" (one UV point to solve for).
 */
export function islands(m, faces) {
  const list = faceList(m, faces), inSet = new Int32Array(m.nf).fill(-1);
  for (const f of list) inSet[f] = 0;
  const island = new Int32Array(m.nf).fill(-1), out = [];
  const crosses = (h) => { const t = m.hTw[h]; return t >= 0 && !(m.hFl[h] & FL_SEAM) && inSet[m.hF[t]] >= 0; };
  for (const f0 of list) {
    if (island[f0] >= 0) continue;
    const id = out.length, fs = [f0];
    island[f0] = id;
    for (let i = 0; i < fs.length; i++) {
      for (const h of m.faceCorners(fs[i], [])) if (crosses(h)) { const g = m.hF[m.hTw[h]]; if (island[g] < 0) { island[g] = id; fs.push(g); } }
    }
    out.push({ faces: fs });
  }
  // wedges: union of corners across the island's inner edges
  const parent = new Int32Array(m.nh);
  for (let h = 0; h < m.nh; h++) parent[h] = h;
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const join = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[b] = a; };
  for (const f of list) for (const h of m.faceCorners(f, [])) if (crosses(h)) { const t = m.hTw[h]; join(h, m.hNx[t]); join(m.hNx[h], t); }
  for (const I of out) {
    const w = new Int32Array(m.nh).fill(-1), roots = new Map();
    for (const f of I.faces) for (const h of m.faceCorners(f, [])) { const r = find(h); let k = roots.get(r); if (k === undefined) { k = roots.size; roots.set(r, k); } w[h] = k; }
    const boundary = new Uint8Array(roots.size);
    for (const f of I.faces) for (const h of m.faceCorners(f, [])) { if (!crosses(h)) { boundary[w[h]] = 1; boundary[w[m.hNx[h]]] = 1; } }
    I.wedges = w; I.nW = roots.size; I.boundary = boundary; I.closed = !boundary.some((x) => x);
  }
  return out;
}

// ---- a sparse least-squares solve (CGLS with column scaling) ----
/** Rows: [{c: Int32Array cols, v: Float64Array vals, b}]; n unknowns; x0 start. Minimises |Ax − b|. */
function cgls(rows, n, x0, { iters = 4000, tol = 1e-12 } = {}) {
  const colN = new Float64Array(n);
  for (const r of rows) for (let k = 0; k < r.c.length; k++) colN[r.c[k]] += r.v[k] * r.v[k];
  const D = new Float64Array(n);
  for (let j = 0; j < n; j++) D[j] = colN[j] > 0 ? 1 / Math.sqrt(colN[j]) : 0;
  const Av = (y, out) => { for (let i = 0; i < rows.length; i++) { const r = rows[i]; let s = 0; for (let k = 0; k < r.c.length; k++) s += r.v[k] * D[r.c[k]] * y[r.c[k]]; out[i] = s; } return out; };
  const ATv = (z, out) => { out.fill(0); for (let i = 0; i < rows.length; i++) { const r = rows[i], zi = z[i]; if (!zi) continue; for (let k = 0; k < r.c.length; k++) out[r.c[k]] += r.v[k] * D[r.c[k]] * zi; } return out; };
  const y = new Float64Array(n);
  for (let j = 0; j < n; j++) y[j] = D[j] > 0 ? x0[j] / D[j] : 0;
  const R = rows.length, r = new Float64Array(R), q = new Float64Array(R), s = new Float64Array(n), p = new Float64Array(n);
  Av(y, r);
  for (let i = 0; i < R; i++) r[i] = rows[i].b - r[i];
  ATv(r, s); p.set(s);
  let gamma = dot(s, s);
  const g0 = gamma;
  for (let it = 0; it < iters && gamma > tol * tol * Math.max(1, g0); it++) {
    Av(p, q);
    const qq = dot(q, q);
    if (!(qq > 0)) break;
    const a = gamma / qq;
    for (let j = 0; j < n; j++) y[j] += a * p[j];
    for (let i = 0; i < R; i++) r[i] -= a * q[i];
    ATv(r, s);
    const g2 = dot(s, s), b = g2 / gamma;
    gamma = g2;
    for (let j = 0; j < n; j++) p[j] = s[j] + b * p[j];
  }
  const x = new Float64Array(n);
  for (let j = 0; j < n; j++) x[j] = y[j] * D[j];
  return x;
}
function dot(a, b) { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * b[i]; return s; }

/**
 * LSCM: wedge UVs from triangles (tri: wedge triples) with their own 2-D shapes (loc: 6 numbers per triangle). Two wedges
 * pinned; `init` a starting guess (2 per wedge) the solver only improves.
 */
export function lscm(nW, tri, loc, pins, init) {
  const pinned = new Map(pins.map(([w, u, v]) => [w, [u, v]]));
  // unknowns: the free wedges' u and v
  const col = new Int32Array(nW).fill(-1);
  let n = 0;
  for (let w = 0; w < nW; w++) if (!pinned.has(w)) col[w] = n++;
  const rows = [];
  for (let t = 0; t < tri.length / 3; t++) {
    const [x0, y0, x1, y1, x2, y2] = loc.subarray(t * 6, t * 6 + 6);
    const d = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    if (!(Math.abs(d) > 1e-30)) continue;
    const s = 1 / Math.sqrt(Math.abs(d));
    const W = [[(x2 - x1) * s, (y2 - y1) * s], [(x0 - x2) * s, (y0 - y2) * s], [(x1 - x0) * s, (y1 - y0) * s]];
    // real part: Σ a u − b v; imaginary part: Σ b u + a v
    for (const part of [0, 1]) {
      const c = [], v = [];
      let b = 0;
      for (let j = 0; j < 3; j++) {
        const w = tri[t * 3 + j], [a, bb] = W[j];
        const cu = part ? bb : a, cv = part ? a : -bb;
        const p = pinned.get(w);
        if (p) { b -= cu * p[0] + cv * p[1]; continue; }
        c.push(col[w] * 2, col[w] * 2 + 1); v.push(cu, cv);
      }
      if (c.length) rows.push({ c: Int32Array.from(c), v: Float64Array.from(v), b });
    }
  }
  const x0 = new Float64Array(n * 2);
  if (init) for (let w = 0; w < nW; w++) if (col[w] >= 0) { x0[col[w] * 2] = init[w * 2]; x0[col[w] * 2 + 1] = init[w * 2 + 1]; }
  const x = cgls(rows, n * 2, x0, { iters: Math.max(400, Math.min(20000, n * 4)) });
  const out = new Float64Array(nW * 2);
  for (let w = 0; w < nW; w++) {
    const p = pinned.get(w);
    if (p) { out[w * 2] = p[0]; out[w * 2 + 1] = p[1]; } else { out[w * 2] = x[col[w] * 2]; out[w * 2 + 1] = x[col[w] * 2 + 1]; }
  }
  return out;
}

/**
 * ABF: triangle corner angles close to the surface's own (β, made to add up to 2π round inner wedges) that a flat
 * triangulation can have: each triangle π, each inner wedge 2π, and each inner wedge's wheel closes (Π sin of the angles
 * after = Π sin of the angles before). Newton steps; each solves the constraints' Schur complement by conjugate gradients.
 * → Float64Array of angles (3 per triangle), or null when it did not settle.
 */
export function abfAngles(nW, tri, beta, inner) {
  const T = tri.length / 3, n = T * 3;
  // the corners of each inner wedge
  const at = Array.from({ length: nW }, () => []);
  for (let i = 0; i < n; i++) at[tri[i]].push(i);
  const innerW = [];
  for (let w = 0; w < nW; w++) if (inner[w] && at[w].length >= 3) innerW.push(w);
  const b = Float64Array.from(beta);
  for (const w of innerW) { let s = 0; for (const i of at[w]) s += b[i]; if (s > 0) for (const i of at[w]) b[i] *= TAU / s; }
  const wt = new Float64Array(n);
  for (let i = 0; i < n; i++) { b[i] = Math.min(Math.PI - 1e-3, Math.max(1e-3, b[i])); wt[i] = 1 / (b[i] * b[i]); }
  const a = Float64Array.from(b);
  const R = T + 2 * innerW.length;
  let lam = new Float64Array(R);
  const next = (i) => i - (i % 3) + ((i % 3) + 1) % 3, prev = (i) => i - (i % 3) + ((i % 3) + 2) % 3;
  // the constraint rows as lists (rebuilt each step: the wheel rows' values change)
  for (let iter = 0; iter < 30; iter++) {
    const rows = [], C = new Float64Array(R);
    for (let t = 0; t < T; t++) { rows.push({ c: [t * 3, t * 3 + 1, t * 3 + 2], v: [1, 1, 1] }); C[t] = a[t * 3] + a[t * 3 + 1] + a[t * 3 + 2] - Math.PI; }
    innerW.forEach((w, k) => {
      const cs = at[w];
      rows.push({ c: cs.slice(), v: cs.map(() => 1) });
      let s = 0; for (const i of cs) s += a[i];
      C[T + k] = s - TAU;
    });
    innerW.forEach((w, k) => {
      const c = [], v = [];
      let s = 0;
      for (const i of at[w]) {
        const nI = next(i), pI = prev(i);
        s += Math.log(Math.sin(a[nI])) - Math.log(Math.sin(a[pI]));
        c.push(nI, pI); v.push(1 / Math.tan(a[nI]), -1 / Math.tan(a[pI]));
      }
      rows.push({ c, v });
      C[T + innerW.length + k] = s;
    });
    let worst = 0; for (let r = 0; r < R; r++) worst = Math.max(worst, Math.abs(C[r]));
    if (worst < 1e-9 && iter > 0) break;
    const Dinv = new Float64Array(n);
    for (let i = 0; i < n; i++) Dinv[i] = 1 / (2 * wt[i]);
    // g + Jᵀλ
    const gl = new Float64Array(n);
    for (let i = 0; i < n; i++) gl[i] = 2 * wt[i] * (a[i] - b[i]);
    rows.forEach((r, k) => { const l = lam[k]; if (l) for (let j = 0; j < r.c.length; j++) gl[r.c[j]] += r.v[j] * l; });
    // rhs = C − J D gl
    const rhs = new Float64Array(R);
    rows.forEach((r, k) => { let s = 0; for (let j = 0; j < r.c.length; j++) s += r.v[j] * Dinv[r.c[j]] * gl[r.c[j]]; rhs[k] = C[k] - s; });
    // S y = J D Jᵀ y, preconditioned by its diagonal
    const tmp = new Float64Array(n);
    const S = (y, out) => {
      tmp.fill(0);
      rows.forEach((r, k) => { const l = y[k]; if (l) for (let j = 0; j < r.c.length; j++) tmp[r.c[j]] += r.v[j] * l; });
      for (let i = 0; i < n; i++) tmp[i] *= Dinv[i];
      rows.forEach((r, k) => { let s = 0; for (let j = 0; j < r.c.length; j++) s += r.v[j] * tmp[r.c[j]]; out[k] = s; });
      return out;
    };
    const diag = new Float64Array(R);
    rows.forEach((r, k) => { let s = 0; for (let j = 0; j < r.c.length; j++) s += r.v[j] * r.v[j] * Dinv[r.c[j]]; diag[k] = s > 0 ? 1 / s : 0; });
    const dl = pcg(S, rhs, diag, R);
    // dα = −D (gl + Jᵀ dλ)
    const jt = new Float64Array(n);
    rows.forEach((r, k) => { const l = dl[k]; if (l) for (let j = 0; j < r.c.length; j++) jt[r.c[j]] += r.v[j] * l; });
    let step = 0;
    for (let i = 0; i < n; i++) {
      const d = -Dinv[i] * (gl[i] + jt[i]);
      a[i] = Math.min(Math.PI - 1e-4, Math.max(1e-4, a[i] + d));
      step = Math.max(step, Math.abs(d));
    }
    for (let k = 0; k < R; k++) lam[k] += dl[k];
    if (!a.every(Number.isFinite)) return null;
    if (step < 1e-12) break;
  }
  // settled?
  let worst = 0;
  for (let t = 0; t < T; t++) worst = Math.max(worst, Math.abs(a[t * 3] + a[t * 3 + 1] + a[t * 3 + 2] - Math.PI));
  for (const w of innerW) { let s = 0; for (const i of at[w]) s += a[i]; worst = Math.max(worst, Math.abs(s - TAU)); }
  return worst < 1e-5 ? a : null;
}
function pcg(A, b, Minv, n, { iters = 2000, tol = 1e-14 } = {}) {
  const x = new Float64Array(n), r = Float64Array.from(b), z = new Float64Array(n), p = new Float64Array(n), q = new Float64Array(n);
  for (let i = 0; i < n; i++) z[i] = r[i] * Minv[i];
  p.set(z);
  let rz = dot(r, z);
  const r0 = Math.max(dot(r, r), 1e-300);
  for (let it = 0; it < iters; it++) {
    A(p, q);
    const pq = dot(p, q);
    if (!(pq > 0)) break;
    const al = rz / pq;
    for (let i = 0; i < n; i++) { x[i] += al * p[i]; r[i] -= al * q[i]; }
    if (dot(r, r) < tol * r0) break;
    for (let i = 0; i < n; i++) z[i] = r[i] * Minv[i];
    const rz2 = dot(r, z), be = rz2 / rz;
    rz = rz2;
    for (let i = 0; i < n; i++) p[i] = z[i] + be * p[i];
  }
  return x;
}

// ---- unwrap ----
const pos = (m, h) => { const v = m.hV[h] * 3; return [m.P[v], m.P[v + 1], m.P[v + 2]]; };
/** Corner angles of a 3-D triangle. */
function angles3(A, B, C) {
  const ang = (p, q, r) => { const u = sub(q, p), v = sub(r, p), l = ln3(u) * ln3(v); return l > 0 ? Math.acos(Math.max(-1, Math.min(1, dt3(u, v) / l))) : Math.PI / 3; };
  return [ang(A, B, C), ang(B, C, A), ang(C, A, B)];
}
/** A triangle's own 2-D shape: A at 0, B on +x. */
function local2(A, B, C) {
  const ab = sub(B, A), ac = sub(C, A), l = ln3(ab) || 1e-30, x = [ab[0] / l, ab[1] / l, ab[2] / l];
  const n = crs(ab, ac), y = crs(n, ab), ly = ln3(y) || 1e-30;
  return [0, 0, l, 0, dt3(ac, x), dt3(ac, [y[0] / ly, y[1] / ly, y[2] / ly])];
}
/** A triangle's shape from its angles (law of sines). */
function fromAngles(a0, a1, a2) {
  const c = Math.sin(a2), b = Math.sin(a1);
  return [0, 0, c, 0, b * Math.cos(a0), b * Math.sin(a0)];
}

/** Unwrap islands of the faces flat; then pack them into the unit square (unless pack false). */
export function unwrap(m, faces, { method = 'angle', pack: doPack = true, margin = 0.01 } = {}) {
  ensureUV(m);
  const I = islands(m, faces), notes = [], T = m.triangulate();
  const triOf = new Map();   // face → its triangles' corner triples
  for (let i = 0; i < T.n; i++) { const f = T.face[i]; let l = triOf.get(f); if (!l) triOf.set(f, (l = [])); l.push(T.tri[i * 3], T.tri[i * 3 + 1], T.tri[i * 3 + 2]); }
  let angleFell = 0;
  for (const isl of I) {
    if (isl.closed) notes.push('closed');
    const corners = [];
    for (const f of isl.faces) for (const h of triOf.get(f) || []) corners.push(h);
    if (!corners.length) continue;
    const tri = new Int32Array(corners.length), nT = corners.length / 3;
    for (let i = 0; i < corners.length; i++) tri[i] = isl.wedges[corners[i]];
    // 3-D positions per wedge (any of its corners), for pins and the first guess
    const wp = new Float64Array(isl.nW * 3);
    for (const h of corners) wp.set(pos(m, h), isl.wedges[h] * 3);
    let loc = new Float64Array(nT * 6);
    for (let t = 0; t < nT; t++) loc.set(local2(pos(m, corners[t * 3]), pos(m, corners[t * 3 + 1]), pos(m, corners[t * 3 + 2])), t * 6);
    if (method === 'angle' && nT > 1) {
      const beta = new Float64Array(nT * 3);
      for (let t = 0; t < nT; t++) beta.set(angles3(pos(m, corners[t * 3]), pos(m, corners[t * 3 + 1]), pos(m, corners[t * 3 + 2])), t * 3);
      const inner = new Uint8Array(isl.nW); for (let w = 0; w < isl.nW; w++) inner[w] = isl.boundary[w] ? 0 : 1;
      const a = isl.closed ? null : abfAngles(isl.nW, tri, beta, inner);
      if (a) { loc = new Float64Array(nT * 6); for (let t = 0; t < nT; t++) loc.set(fromAngles(a[t * 3], a[t * 3 + 1], a[t * 3 + 2]), t * 6); }
      else if (!isl.closed) angleFell++;
    }
    // pins: the two wedges farthest apart along the island's longest direction
    const { pins, init } = pinsAndGuess(isl.nW, wp);
    const uv = lscm(isl.nW, tri, loc, pins, init);
    // conformal maps can come out mirrored: keep the faces facing up
    let signed = 0;
    for (let t = 0; t < nT; t++) {
      const [a, b, c] = [tri[t * 3], tri[t * 3 + 1], tri[t * 3 + 2]];
      signed += (uv[b * 2] - uv[a * 2]) * (uv[c * 2 + 1] - uv[a * 2 + 1]) - (uv[c * 2] - uv[a * 2]) * (uv[b * 2 + 1] - uv[a * 2 + 1]);
    }
    const flip = signed < 0;
    for (const f of isl.faces) for (const h of m.faceCorners(f, [])) { const w = isl.wedges[h]; putUV(m, h, flip ? -uv[w * 2] : uv[w * 2], uv[w * 2 + 1]); }
  }
  if (angleFell) notes.push('angle_fell');
  if (doPack) pack(m, faceList(m, faces), { margin });
  return { islands: I.length, notes: [...new Set(notes)] };
}
function pinsAndGuess(nW, wp) {
  // the longest axis of the box round the wedges, its two ends pinned at their true distance apart
  let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let w = 0; w < nW; w++) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], wp[w * 3 + k]); hi[k] = Math.max(hi[k], wp[w * 3 + k]); }
  const ax = [0, 1, 2].reduce((b, k) => (hi[k] - lo[k] > hi[b] - lo[b] ? k : b), 0);
  let a = 0, b = 0;
  for (let w = 0; w < nW; w++) { if (wp[w * 3 + ax] < wp[a * 3 + ax]) a = w; if (wp[w * 3 + ax] > wp[b * 3 + ax]) b = w; }
  if (a === b) b = (a + 1) % Math.max(1, nW);
  const d = Math.hypot(wp[b * 3] - wp[a * 3], wp[b * 3 + 1] - wp[a * 3 + 1], wp[b * 3 + 2] - wp[a * 3 + 2]) || 1;
  // a first guess: the wedges projected on the plane that fits them best (Newell-like normal of the spread), placed like the pins
  const c = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2];
  const e1 = norm3(sub([wp[b * 3], wp[b * 3 + 1], wp[b * 3 + 2]], [wp[a * 3], wp[a * 3 + 1], wp[a * 3 + 2]]));
  // the direction of most spread square to e1
  let best = null, bl = -1;
  for (const k of [0, 1, 2]) { const t = [0, 0, 0]; t[k] = 1; const s = sub(t, e1.map((x) => x * dt3(t, e1))); const l = ln3(s); if (l > bl) { bl = l; best = s; } }
  let e2 = norm3(best), spread = 0, spreadN = 0;
  for (let w = 0; w < nW; w++) { const p = sub([wp[w * 3], wp[w * 3 + 1], wp[w * 3 + 2]], c); spread += Math.abs(dt3(p, e2)); spreadN += Math.abs(dt3(p, norm3(crs(e1, e2)))); }
  if (spreadN > spread) e2 = norm3(crs(e1, e2));
  const init = new Float64Array(nW * 2), A = [wp[a * 3], wp[a * 3 + 1], wp[a * 3 + 2]];
  for (let w = 0; w < nW; w++) { const p = sub([wp[w * 3], wp[w * 3 + 1], wp[w * 3 + 2]], A); init[w * 2] = dt3(p, e1); init[w * 2 + 1] = dt3(p, e2); }
  return { pins: [[a, 0, 0], [b, d, 0]], init };
}

// ---- projections ----
function bounds(m, list) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const f of list) for (const h of m.faceCorners(f, [])) { const p = pos(m, h); for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], p[k]); hi[k] = Math.max(hi[k], p[k]); } }
  return { lo, hi, c: [0, 1, 2].map((k) => (lo[k] + hi[k]) / 2), size: Math.max(1e-12, ...[0, 1, 2].map((k) => hi[k] - lo[k])) };
}
const AX = { x: 0, y: 1, z: 2 };
/** Each face onto the side of a box its normal faces most; `size` the box (default: the faces' largest extent). */
export function projectBox(m, faces, { size } = {}) {
  ensureUV(m);
  const list = faceList(m, faces), B = bounds(m, list), s = size || B.size, n = [0, 0, 0];
  for (const f of list) {
    m.faceNormal(f, n);
    const k = [0, 1, 2].reduce((b, i) => (Math.abs(n[i]) > Math.abs(n[b]) ? i : b), 0);
    // the two other axes, turned so the face reads the right way round from outside
    const [i, j] = k === 0 ? [1, 2] : k === 1 ? [0, 2] : [0, 1], sg = n[k] >= 0 ? 1 : -1;
    for (const h of m.faceCorners(f, [])) {
      const p = pos(m, h);
      let u = (p[i] - B.lo[i]) / s, v = (p[j] - B.lo[j]) / s;
      if ((k === 1 && sg > 0) || (k !== 1 && sg < 0)) u = 1 - u;
      putUV(m, h, u, v);
    }
  }
  return list.length;
}
/** Round an axis (through the faces' centre): u the angle round it, v the height along it. */
export function projectCylinder(m, faces, { axis = 'z' } = {}) {
  ensureUV(m);
  const list = faceList(m, faces), B = bounds(m, list), k = AX[axis], i = (k + 1) % 3, j = (k + 2) % 3, hgt = Math.max(1e-12, B.hi[k] - B.lo[k]);
  for (const f of list) wrapFace(m, f, (p) => [(Math.atan2(p[j] - B.c[j], p[i] - B.c[i]) / TAU + 1) % 1, (p[k] - B.lo[k]) / hgt]);
  return list.length;
}
/** From the faces' centre: u the angle round the axis, v the latitude. */
export function projectSphere(m, faces, { axis = 'z' } = {}) {
  ensureUV(m);
  const list = faceList(m, faces), B = bounds(m, list), k = AX[axis], i = (k + 1) % 3, j = (k + 2) % 3;
  for (const f of list) wrapFace(m, f, (p) => {
    const d = sub(p, B.c), r = ln3(d) || 1;
    return [(Math.atan2(d[j], d[i]) / TAU + 1) % 1, 1 - Math.acos(Math.max(-1, Math.min(1, d[k] / r))) / Math.PI];
  });
  return list.length;
}
/** A face's corners mapped by fn; a face across the wrap (u jumping over 0.5) gets its small u's moved up by one. */
function wrapFace(m, f, fn) {
  const cs = m.faceCorners(f, []), uv = cs.map((h) => fn(pos(m, h)));
  const us = uv.map((x) => x[0]);
  if (Math.max(...us) - Math.min(...us) > 0.5) for (const x of uv) if (x[0] < 0.5) x[0] += 1;
  cs.forEach((h, q) => putUV(m, h, uv[q][0], uv[q][1]));
}
/** As seen: toScreen(p) → [x, y] (the camera, the placement's matrix applied by the caller); fitted to the unit square. */
export function projectView(m, faces, toScreen) {
  ensureUV(m);
  const list = faceList(m, faces), pts = new Map();
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const f of list) for (const h of m.faceCorners(f, [])) { const s = toScreen(pos(m, h)); if (!s) continue; pts.set(h, s); x0 = Math.min(x0, s[0]); y0 = Math.min(y0, s[1]); x1 = Math.max(x1, s[0]); y1 = Math.max(y1, s[1]); }
  const s = Math.max(1e-12, x1 - x0, y1 - y0);
  for (const [h, p] of pts) putUV(m, h, (p[0] - x0) / s, 1 - (p[1] - y0) / s);   // screen y runs down
  return list.length;
}

// ---- UV islands, packing ----
export function uvIslands(m, faces) {
  const uv = m.attrArray('uv'), list = faceList(m, faces), inSet = new Uint8Array(m.nf);
  for (const f of list) inSet[f] = 1;
  const seen = new Int32Array(m.nf).fill(-1), out = [];
  for (const f0 of list) {
    if (seen[f0] >= 0) continue;
    const fs = [f0]; seen[f0] = out.length;
    for (let i = 0; i < fs.length; i++) for (const h of m.faceCorners(fs[i], [])) {
      const t = m.hTw[h];
      if (t < 0 || m.hFl[h] & FL_SEAM || !uv) continue;
      const g = m.hF[t];
      if (!inSet[g] || seen[g] >= 0 || !uvJoined(m, uv, h, t)) continue;
      seen[g] = out.length; fs.push(g);
    }
    out.push(fs);
  }
  return out;
}
function hull(pts) {
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (hi.length >= 2 && cr(hi[hi.length - 2], hi[hi.length - 1], q) <= 0) hi.pop(); hi.push(q); }
  return lo.slice(0, -1).concat(hi.slice(0, -1));
}
/** The angle that makes the points' bounding rectangle smallest (each hull edge tried: the best one lies along one). */
export function bestAngle(pts) {
  const H = hull(pts);
  let best = 0, area = Infinity;
  for (let i = 0; i < H.length; i++) {
    const a = H[i], b = H[(i + 1) % H.length], ang = -Math.atan2(b[1] - a[1], b[0] - a[0]), c = Math.cos(ang), s = Math.sin(ang);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const q of H) { const x = q[0] * c - q[1] * s, y = q[0] * s + q[1] * c; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const A = (x1 - x0) * (y1 - y0);
    if (A < area - 1e-15) { area = A; best = ang; }
  }
  return best;
}
/** Rectangles [w, h] into shelves `width` wide → {at: [[x, y]], height}. Tallest first. */
function shelves(rects, width) {
  const order = rects.map((r, i) => i).sort((a, b) => rects[b][1] - rects[a][1] || rects[b][0] - rects[a][0]);
  const at = new Array(rects.length);
  let x = 0, y = 0, rowH = 0, maxW = 0;
  for (const i of order) {
    const [w, h] = rects[i];
    if (x > 0 && x + w > width) { y += rowH; x = 0; rowH = 0; }
    at[i] = [x, y]; x += w; rowH = Math.max(rowH, h); maxW = Math.max(maxW, x);
  }
  return { at, height: y + rowH, width: maxW };
}
/**
 * Pack the UV islands of the faces into the unit square: each scaled to the same texel density (its UV area to its 3-D
 * area), turned to its smallest rectangle (`rotate`), `margin` (of the square) round each.
 */
export function pack(m, faces, { margin = 0.01, rotate = true } = {}) {
  const uv = ensureUV(m), groups = uvIslands(m, faces);
  if (!groups.length) return { islands: 0, side: 0 };
  const T = m.triangulate(), triOf = new Map();
  for (let i = 0; i < T.n; i++) { const f = T.face[i]; let l = triOf.get(f); if (!l) triOf.set(f, (l = [])); l.push(T.tri[i * 3], T.tri[i * 3 + 1], T.tri[i * 3 + 2]); }
  const isl = groups.map((fs) => {
    let a3 = 0, a2 = 0;
    for (const f of fs) { const t = triOf.get(f) || []; for (let i = 0; i < t.length; i += 3) {
      a3 += ln3(crs(sub(pos(m, t[i + 1]), pos(m, t[i])), sub(pos(m, t[i + 2]), pos(m, t[i])))) / 2;
      a2 += Math.abs((uv[t[i + 1] * 2] - uv[t[i] * 2]) * (uv[t[i + 2] * 2 + 1] - uv[t[i] * 2 + 1]) - (uv[t[i + 2] * 2] - uv[t[i] * 2]) * (uv[t[i + 1] * 2 + 1] - uv[t[i] * 2 + 1])) / 2;
    } }
    const k = a2 > 1e-30 ? Math.sqrt(a3 / a2) : 1;
    const corners = []; for (const f of fs) for (const h of m.faceCorners(f, [])) corners.push(h);
    let pts = corners.map((h) => [uv[h * 2] * k, uv[h * 2 + 1] * k]);
    const ang = rotate ? bestAngle(pts) : 0, c = Math.cos(ang), s = Math.sin(ang);
    pts = pts.map(([x, y]) => [x * c - y * s, x * s + y * c]);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    // lying flat: wider than tall
    let turn = false;
    if (rotate && y1 - y0 > x1 - x0) { turn = true; pts = pts.map(([x, y]) => [y, -x]); [x0, x1, y0, y1] = [y0, y1, -x1, -x0]; }
    void turn;
    return { corners, pts: pts.map(([x, y]) => [x - x0, y - y0]), w: x1 - x0, h: y1 - y0, a3 };
  });
  // margins in the units of the packed result: a share of the square root of the total area, then a few widths tried
  const total = isl.reduce((s, I) => s + I.w * I.h, 0), pad = margin * Math.sqrt(Math.max(total, 1e-30)) * 1.1;
  const rects = isl.map((I) => [I.w + 2 * pad, I.h + 2 * pad]);
  const widest = Math.max(...rects.map((r) => r[0])), sum = rects.reduce((s, r) => s + r[0] * r[1], 0);
  let best = null;
  for (let k = 0; k < 24; k++) {
    const W = Math.max(widest, Math.sqrt(sum) * (0.7 + k * 0.05));
    const r = shelves(rects, W), side = Math.max(r.width, r.height);
    if (!best || side < best.side - 1e-15) best = { ...r, side };
  }
  const S = best.side || 1;
  isl.forEach((I, i) => {
    const [ox, oy] = best.at[i];
    I.corners.forEach((h, q) => putUV(m, h, (ox + pad + I.pts[q][0]) / S, (oy + pad + I.pts[q][1]) / S));
  });
  return { islands: isl.length, side: S };
}

// ---- stretch ----
/**
 * How much each face's UVs stretch it, 0 none … 1 a lot: 'angle' 1 − σ₂/σ₁ (shapes bent), 'area' |log(σ₁σ₂)| over log 4
 * (made bigger or smaller than the mesh's average), σ the singular values of the 3-D → UV map; a flipped face is 1, a face
 * with no UV area is 1.
 */
export function stretch(m, mode = 'angle') {
  const uv = m.attrArray('uv'), out = new Float32Array(m.nf);
  if (!uv) return out.fill(1);
  const T = m.triangulate(), per = [];
  let A3 = 0, A2 = 0;
  for (let i = 0; i < T.n; i++) {
    const [a, b, c] = [T.tri[i * 3], T.tri[i * 3 + 1], T.tri[i * 3 + 2]];
    const L = local2(pos(m, a), pos(m, b), pos(m, c));
    const area3 = Math.abs(L[2] * L[5]) / 2;
    const du1 = uv[b * 2] - uv[a * 2], dv1 = uv[b * 2 + 1] - uv[a * 2 + 1], du2 = uv[c * 2] - uv[a * 2], dv2 = uv[c * 2 + 1] - uv[a * 2 + 1];
    const area2 = (du1 * dv2 - du2 * dv1) / 2;
    A3 += area3; A2 += Math.abs(area2);
    per.push({ f: T.face[i], L, d: [du1, dv1, du2, dv2], area3, area2 });
  }
  const k = A3 > 0 && A2 > 0 ? Math.sqrt(A2 / A3) : 1;
  const sum = new Float64Array(m.nf), wsum = new Float64Array(m.nf);
  for (const t of per) {
    let s;
    if (!(t.area3 > 0)) continue;
    if (!(t.area2 > 1e-30)) s = 1;
    else {
      // Jacobian of (x, y) → (u, v) for the triangle: local A (0,0), B (L2, 0), C (L4, L5)
      const [, , x1, , x2, y2] = t.L, [du1, dv1, du2, dv2] = t.d;
      const Ju = [du1 / x1, (du2 - du1 * x2 / x1) / y2], Jv = [dv1 / x1, (dv2 - dv1 * x2 / x1) / y2];
      const a = (Ju[0] * Ju[0] + Jv[0] * Jv[0]) / (k * k), c = (Ju[1] * Ju[1] + Jv[1] * Jv[1]) / (k * k), b = (Ju[0] * Ju[1] + Jv[0] * Jv[1]) / (k * k);
      const tr = a + c, det = Math.max(0, a * c - b * b), disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
      const s1 = Math.sqrt(Math.max(0, tr / 2 + disc)), s2 = Math.sqrt(Math.max(0, tr / 2 - disc));
      s = mode === 'area' ? Math.min(1, Math.abs(Math.log(Math.max(1e-12, s1 * s2))) / Math.log(4)) : s1 > 0 ? 1 - s2 / s1 : 1;
    }
    sum[t.f] += s * t.area3; wsum[t.f] += t.area3;
  }
  for (let f = 0; f < m.nf; f++) out[f] = wsum[f] > 0 ? sum[f] / wsum[f] : 0;
  return out;
}
