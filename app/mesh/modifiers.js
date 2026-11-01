/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/modifiers.js — the modifier stack of a mesh (0.7 MD.3), DOM-free. A mesh definition carries `mods`: an ordered list
 * of {type, on, view, render, params}; what shows (and exports, prints, renders) is the mesh with each modifier that is on
 * applied in turn — the mesh itself is never changed until a modifier is applied (Apply). This module evaluates one step at
 * a time on copies; mesh/mod-job.js runs it in compute's pool, the page keeps the results (mesh/mod-eval.js).
 *
 *   MOD_TYPES, MODS[type].defaults, cleanMods(list) (untrusted: types, numbers, references checked, at most 32)
 *   refsOf(mods) → the other objects a stack needs ({index, kind: 'object' | 'curve' | 'lattice', ref})
 *   applyMod(mesh, mod, {render, ref, manifold}) → Mesh         (a new mesh; `ref` = the resolved data for the modifier)
 *   evaluate(mesh, mods, {render, refs, manifold, upTo, budget}) → {mesh, notes, info[i] ({level}: a lowered view level)}
 *
 * Modifiers (params): scale {factors [x, y, z], each 0.0001…10000, about the origin} · mirror {x, y, z, merge, dist} · array {count, mode linear|radial|curve, rel [x,y,z], abs [x,y,z],
 * axis, angle (degrees), merge, dist, curve (ref)} · subsurf {levels, renderLevels, adaptive (the view level comes down past `budget` faces),
 * limit (renders on the limit surface)} · bevel {width, segments, profile,
 * angle} · solidify {thickness, offset −1…1, rim} · boolean {op union|difference|intersect, target (ref)} · displace
 * {strength, scale, seed, dir normal|x|y|z} · weld {dist} · decimate {ratio} · smooth {factor, repeat} · lattice {cage
 * (ref)} · curve {curve (ref), axis x|y|z} · shrinkwrap {target (ref), offset}.
 * References are to other definitions in the model ('d12'; a curve: 'd12/curve:7'); the page resolves them into this
 * mesh's own space (resolveRef in mod-eval.js) and passes plain arrays in `refs`.
 */
import { Mesh, FL_SHARP } from '../mesh.js';
import * as O from './ops.js';
import { subdivide, limitPositions } from './subdiv.js';
import { BoxTree } from '../bvh.js';

const num = (x, lo, hi, d) => (typeof x === 'number' && Number.isFinite(x) ? Math.max(lo, Math.min(hi, x)) : d);
const int = (x, lo, hi, d) => Math.round(num(x, lo, hi, d));
const bool = (x, d) => (typeof x === 'boolean' ? x : d);
const one = (x, list, d) => (list.includes(x) ? x : d);
const vec3 = (x, d) => (Array.isArray(x) && x.length === 3 && x.every((y) => typeof y === 'number' && Number.isFinite(y) && Math.abs(y) < 1e6) ? x.slice() : d.slice());
const REF_RE = /^(d\d{1,9}|root)(\/(arc|circle|polygon|curve):\d{1,9})?$/;
const ref = (x) => (typeof x === 'string' && REF_RE.test(x) ? x : '');

const facs = (x, d) => (Array.isArray(x) && x.length === 3 && x.every((y) => typeof y === 'number' && Number.isFinite(y) && y >= 1e-4 && y <= 1e4) ? x.slice() : d.slice());

export const MODS = {
  // 0.8 GH.2: scale about the object's own origin, a factor for each of its red, green and blue axes. The same item sits on a
  // group or component stack (group-mods.js), where only scale and linear array are offered.
  scale: { defaults: { factors: [1, 1, 1] }, clean: (p) => ({ factors: facs(p.factors, [1, 1, 1]) }) },
  mirror: { defaults: { x: true, y: false, z: false, merge: true, dist: 0.001 }, clean: (p) => ({ x: bool(p.x, true), y: bool(p.y, false), z: bool(p.z, false), merge: bool(p.merge, true), dist: num(p.dist, 0, 10, 0.001) }) },
  array: { defaults: { count: 3, mode: 'linear', rel: [1, 0, 0], abs: [0, 0, 0], axis: 'z', angle: 360, merge: false, dist: 0.001, curve: '' },
    clean: (p) => ({ count: int(p.count, 1, 1000, 3), mode: one(p.mode, ['linear', 'radial', 'curve'], 'linear'), rel: vec3(p.rel, [1, 0, 0]), abs: vec3(p.abs, [0, 0, 0]), axis: one(p.axis, ['x', 'y', 'z'], 'z'), angle: num(p.angle, -3600, 3600, 360), merge: bool(p.merge, false), dist: num(p.dist, 0, 10, 0.001), curve: ref(p.curve) }) },
  subsurf: { defaults: { levels: 1, renderLevels: 2, adaptive: true, limit: true }, clean: (p) => ({ levels: int(p.levels, 0, 6, 1), renderLevels: int(p.renderLevels, 0, 6, 2), adaptive: bool(p.adaptive, true), limit: bool(p.limit, true) }) },
  bevel: { defaults: { width: 0.02, segments: 2, profile: 0.5, angle: 30 }, clean: (p) => ({ width: num(p.width, 0, 1e4, 0.02), segments: int(p.segments, 1, 32, 2), profile: num(p.profile, 0, 1, 0.5), angle: num(p.angle, 0, 180, 30) }) },
  solidify: { defaults: { thickness: 0.05, offset: -1, rim: true }, clean: (p) => ({ thickness: num(p.thickness, -1e4, 1e4, 0.05), offset: num(p.offset, -1, 1, -1), rim: bool(p.rim, true) }) },
  boolean: { defaults: { op: 'difference', target: '' }, clean: (p) => ({ op: one(p.op, ['union', 'difference', 'intersect'], 'difference'), target: ref(p.target) }) },
  displace: { defaults: { strength: 0.05, scale: 1, seed: 1, dir: 'normal' }, clean: (p) => ({ strength: num(p.strength, -1e4, 1e4, 0.05), scale: num(p.scale, 1e-6, 1e6, 1), seed: int(p.seed, 0, 1e6, 1), dir: one(p.dir, ['normal', 'x', 'y', 'z'], 'normal') }) },
  weld: { defaults: { dist: 0.001 }, clean: (p) => ({ dist: num(p.dist, 0, 10, 0.001) }) },
  decimate: { defaults: { ratio: 0.5 }, clean: (p) => ({ ratio: num(p.ratio, 0.001, 1, 0.5) }) },
  smooth: { defaults: { factor: 0.5, repeat: 1 }, clean: (p) => ({ factor: num(p.factor, -2, 2, 0.5), repeat: int(p.repeat, 1, 200, 1) }) },
  lattice: { defaults: { cage: '' }, clean: (p) => ({ cage: ref(p.cage) }) },
  curve: { defaults: { curve: '', axis: 'x' }, clean: (p) => ({ curve: ref(p.curve), axis: one(p.axis, ['x', 'y', 'z'], 'x') }) },
  shrinkwrap: { defaults: { target: '', offset: 0 }, clean: (p) => ({ target: ref(p.target), offset: num(p.offset, -1e4, 1e4, 0) }) },
};
export const MOD_TYPES = Object.keys(MODS);

/** A stack from anything (a file, a clipboard, the panel): bad entries left out. */
export function cleanMods(list) {
  const out = [];
  for (const m of Array.isArray(list) ? list.slice(0, 32) : []) {
    if (!m || typeof m !== 'object' || !MODS[m.type]) continue;
    out.push({ type: m.type, on: m.on !== false, view: m.view !== false, render: m.render !== false, name: typeof m.name === 'string' ? m.name.replace(/[\u0000-\u001f]/g, ' ').slice(0, 60) : '', params: MODS[m.type].clean(m.params || {}) });
  }
  return out;
}
export const newMod = (type) => ({ type, on: true, view: true, render: true, name: '', params: structuredClone(MODS[type].defaults) });

/** The references a stack needs resolved: [{index, kind, ref}]. */
export function refsOf(mods) {
  const out = [];
  mods.forEach((m, i) => {
    if (!m.on) return;
    const p = m.params;
    if (m.type === 'boolean' && p.target) out.push({ index: i, kind: 'object', ref: p.target });
    if (m.type === 'shrinkwrap' && p.target) out.push({ index: i, kind: 'object', ref: p.target });
    if (m.type === 'lattice' && p.cage) out.push({ index: i, kind: 'lattice', ref: p.cage });
    if ((m.type === 'curve' || (m.type === 'array' && p.mode === 'curve')) && p.curve) out.push({ index: i, kind: 'curve', ref: p.curve });
  });
  return out;
}

// ---- helpers ----
const P3 = (m, v) => [m.P[v * 3], m.P[v * 3 + 1], m.P[v * 3 + 2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a); return l > 0 ? mul(a, 1 / l) : [0, 0, 0]; };
const AX = { x: 0, y: 1, z: 2 };

/**
 * One mesh from copies of meshes: parts = [{mesh, map(p) → p, flip}] (flip = the copy is mirrored: its faces run the other
 * way). Paint, flags and the layers every part has go along.
 */
export function combine(parts) {
  const arrs = parts.map((pt) => pt.mesh.toArrays());
  let nv = 0, nf = 0, nc = 0;
  for (const a of arrs) { nv += a.nv; nf += a.nf; nc += a.fi.length; }
  const p = new Float64Array(nv * 3), fc = new Int32Array(nf), fi = new Int32Array(nc), fm = new Int32Array(nf), ff = new Uint8Array(nf), vf = new Uint8Array(nv), hf = new Uint8Array(nc);
  const paints = [], pidx = new Map();
  const names = arrs[0].attrs.filter((L) => arrs.every((a) => a.attrs.some((M) => M.name === L.name && M.domain === L.domain && M.size === L.size && M.type === L.type)));
  const attrs = names.map((L) => ({ name: L.name, domain: L.domain, size: L.size, type: L.type, data: new (L.type === 'f32' ? Float32Array : Int32Array)((L.domain === 'vertex' ? nv : L.domain === 'face' ? nf : nc) * L.size) }));
  let vo = 0, fo = 0, co = 0;
  arrs.forEach((a, i) => {
    const pt = parts[i];
    for (let v = 0; v < a.nv; v++) { const q = pt.map ? pt.map([a.p[v * 3], a.p[v * 3 + 1], a.p[v * 3 + 2]]) : [a.p[v * 3], a.p[v * 3 + 1], a.p[v * 3 + 2]]; p.set(q, (vo + v) * 3); vf[vo + v] = a.vf[v]; }
    const pm = a.paints.map((x) => { if (!x) return -1; if (!pidx.has(x)) { pidx.set(x, paints.length); paints.push(x); } return pidx.get(x); });
    let c = 0;
    for (let f = 0; f < a.nf; f++) {
      const n = a.fc[f];
      fc[fo + f] = n; fm[fo + f] = a.fm[f] >= 0 ? pm[a.fm[f]] ?? -1 : -1; ff[fo + f] = a.ff[f];
      for (let q = 0; q < n; q++) {
        // a mirrored face: the corners in reverse, each keeping its own vertex's data; the edge flags shift by one
        const src = pt.flip ? c + ((n - q) % n) : c + q;
        fi[co + c + q] = vo + a.fi[src];
        hf[co + c + q] = pt.flip ? a.hf[c + ((n - q - 1 + n) % n)] : a.hf[src];
        for (let L = 0; L < names.length; L++) if (names[L].domain === 'corner' || names[L].domain === 'edge') {
          const sl = a.attrs.find((M) => M.name === names[L].name), s = sl.size;
          for (let j = 0; j < s; j++) attrs[L].data[(co + c + q) * s + j] = sl.data[src * s + j];
        }
      }
      c += n;
    }
    for (let L = 0; L < names.length; L++) {
      const sl = a.attrs.find((M) => M.name === names[L].name), s = sl.size, d = attrs[L].data;
      if (sl.domain === 'vertex') d.set(sl.data, vo * s); else if (sl.domain === 'face') d.set(sl.data, fo * s);
    }
    vo += a.nv; fo += a.nf; co += c;
  });
  return Mesh.fromArrays({ nv, nf, p, fc, fi, fm, ff, vf, hf, paints, attrs });
}
const bounds = (m) => m.bounds() || { min: [0, 0, 0], max: [0, 0, 0] };
/** A copy with its normals per vertex (for moving along them). */
const vnormals = (m) => O.vertexNormals(m);
/** A mesh from triangles (positions, indices), sharp where faces bend more than `deg`. */
function fromTris(pos, tri, deg = 30) {
  const pts = [], faces = [];
  for (let i = 0; i < pos.length / 3; i++) pts.push([pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]]);
  for (let i = 0; i < tri.length; i += 3) faces.push([tri[i], tri[i + 1], tri[i + 2]]);
  const m = Mesh.fromLists(pts, faces);
  O.mergeByDistance(m, 1e-9, null);
  const lim = Math.cos((deg * Math.PI) / 180), A = [0, 0, 0], B = [0, 0, 0];
  for (let h = 0; h < m.nh; h++) { const t = m.hTw[h]; if (m.heDead(h) || t < h) continue; m.faceNormal(m.hF[h], A); m.faceNormal(m.hF[t], B); if (dot(A, B) < lim) { m.hFl[h] |= FL_SHARP; m.hFl[t] |= FL_SHARP; } }
  return m;
}
function trianglesOf(m) {
  const T = m.triangulate({ hidden: true }), pos = new Float64Array(m.nv * 3), tri = new Uint32Array(T.n * 3);
  pos.set(m.P.subarray(0, m.nv * 3));
  for (let i = 0; i < T.n * 3; i++) tri[i] = m.hV[T.tri[i]];
  return { pos, tri };
}

// ---- value noise (seeded, smooth): for Displace ----
function hash3(x, y, z, seed) { let h = (x * 374761393 + y * 668265263 + z * 1274126177 + seed * 1442695041) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
export function noise3(x, y, z, seed = 1) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
  const s = (t) => t * t * (3 - 2 * t), u = s(xf), v = s(yf), w = s(zf);
  const L = (a, b, t) => a + (b - a) * t;
  const c = (dx, dy, dz) => hash3(xi + dx, yi + dy, zi + dz, seed);
  return 2 * L(L(L(c(0, 0, 0), c(1, 0, 0), u), L(c(0, 1, 0), c(1, 1, 0), u), v), L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v), w) - 1;
}

// ---- decimate: quadric edge collapse (Garland and Heckbert, "Surface Simplification Using Quadric Error Metrics", 1997) ----
export function decimateTris(pos, tri, target) {
  const nv = pos.length / 3, nt = tri.length / 3;
  const Q = new Float64Array(nv * 10);
  const alive = new Uint8Array(nt).fill(1), parent = new Int32Array(nv);
  for (let i = 0; i < nv; i++) parent[i] = i;
  const find = (v) => { while (parent[v] !== v) { parent[v] = parent[parent[v]]; v = parent[v]; } return v; };
  const P = pos.slice();
  const addQ = (v, a, b, c, d) => { const o = v * 10; Q[o] += a * a; Q[o + 1] += a * b; Q[o + 2] += a * c; Q[o + 3] += a * d; Q[o + 4] += b * b; Q[o + 5] += b * c; Q[o + 6] += b * d; Q[o + 7] += c * c; Q[o + 8] += c * d; Q[o + 9] += d * d; };
  const vt = Array.from({ length: nv }, () => []);
  for (let t = 0; t < nt; t++) {
    const [a, b, c] = [tri[t * 3], tri[t * 3 + 1], tri[t * 3 + 2]];
    const A = [P[a * 3], P[a * 3 + 1], P[a * 3 + 2]], n = norm(cross(sub([P[b * 3], P[b * 3 + 1], P[b * 3 + 2]], A), sub([P[c * 3], P[c * 3 + 1], P[c * 3 + 2]], A)));
    const d = -dot(n, A);
    for (const v of [a, b, c]) { addQ(v, n[0], n[1], n[2], d); vt[v].push(t); }
  }
  // open borders: a plane square to the face through the edge keeps them in place
  const ek = new Map();
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) { const a = tri[t * 3 + k], b = tri[t * 3 + (k + 1) % 3]; const key = a < b ? a + ',' + b : b + ',' + a; ek.set(key, (ek.get(key) || 0) + 1); }
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const a = tri[t * 3 + k], b = tri[t * 3 + (k + 1) % 3], key = a < b ? a + ',' + b : b + ',' + a;
    if (ek.get(key) !== 1) continue;
    const A = [P[a * 3], P[a * 3 + 1], P[a * 3 + 2]], B = [P[b * 3], P[b * 3 + 1], P[b * 3 + 2]], c = tri[t * 3 + (k + 2) % 3];
    const fn = norm(cross(sub(B, A), sub([P[c * 3], P[c * 3 + 1], P[c * 3 + 2]], A))), n = norm(cross(sub(B, A), fn)), d = -dot(n, A);
    for (const v of [a, b]) for (let r = 0; r < 4; r++) addQ(v, n[0] * 10, n[1] * 10, n[2] * 10, d * 10);
  }
  const cost = (a, b) => {
    const o = new Float64Array(10);
    for (let i = 0; i < 10; i++) o[i] = Q[a * 10 + i] + Q[b * 10 + i];
    const x = (P[a * 3] + P[b * 3]) / 2, y = (P[a * 3 + 1] + P[b * 3 + 1]) / 2, z = (P[a * 3 + 2] + P[b * 3 + 2]) / 2;
    const e = o[0] * x * x + 2 * o[1] * x * y + 2 * o[2] * x * z + 2 * o[3] * x + o[4] * y * y + 2 * o[5] * y * z + 2 * o[6] * y + o[7] * z * z + 2 * o[8] * z + o[9];
    return { e: Math.max(0, e), p: [x, y, z] };
  };
  // a heap of candidate edges (lazy: stale entries are skipped)
  const heap = [];
  const push = (e, a, b) => { heap.push([e, a, b]); let i = heap.length - 1; while (i > 0) { const j = (i - 1) >> 1; if (heap[j][0] <= heap[i][0]) break; [heap[i], heap[j]] = [heap[j], heap[i]]; i = j; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[i], heap[m]] = [heap[m], heap[i]]; i = m; } } return top; };
  for (const key of ek.keys()) { const [a, b] = key.split(',').map(Number); push(cost(a, b).e, a, b); }
  let live = nt;
  const adjacent = (a, b) => vt[a].some((t) => { if (!alive[t]) return false; let ha = false, hb = false; for (let k = 0; k < 3; k++) { const x = find(tri[t * 3 + k]); if (x === a) ha = true; if (x === b) hb = true; } return ha && hb; });
  while (live > target && heap.length) {
    const [e0, a0, b0] = pop();
    const a = find(a0), b = find(b0);
    if (a === b || !adjacent(a, b)) continue;
    // an entry made before its ends' quadrics grew is put back at today's cost
    const { e, p } = cost(a, b);
    if (e > e0 * (1 + 1e-9) + 1e-18) { push(e, a, b); continue; }
    // the triangles that would flip are a reason to skip this collapse
    let flips = false;
    for (const v of [a, b]) for (const t of vt[v]) {
      if (!alive[t]) continue;
      const vs = [0, 1, 2].map((k) => find(tri[t * 3 + k]));
      if (vs.includes(a) && vs.includes(b)) continue;
      const q = vs.map((x) => (x === a || x === b ? p : [P[x * 3], P[x * 3 + 1], P[x * 3 + 2]]));
      const before = vs.map((x) => [P[x * 3], P[x * 3 + 1], P[x * 3 + 2]]);
      if (dot(cross(sub(q[1], q[0]), sub(q[2], q[0])), cross(sub(before[1], before[0]), sub(before[2], before[0]))) <= 0) { flips = true; break; }
    }
    if (flips) continue;
    parent[b] = a;
    P[a * 3] = p[0]; P[a * 3 + 1] = p[1]; P[a * 3 + 2] = p[2];
    for (let i = 0; i < 10; i++) Q[a * 10 + i] += Q[b * 10 + i];
    for (const t of vt[b]) vt[a].push(t);
    for (const t of vt[a]) {
      if (!alive[t]) continue;
      const vs = [0, 1, 2].map((k) => find(tri[t * 3 + k]));
      if (vs[0] === vs[1] || vs[1] === vs[2] || vs[0] === vs[2]) { alive[t] = 0; live--; }
    }
    const nb = new Set();
    for (const t of vt[a]) if (alive[t]) for (let k = 0; k < 3; k++) { const x = find(tri[t * 3 + k]); if (x !== a) nb.add(x); }
    for (const x of nb) push(cost(a, x).e, a, x);
  }
  const map = new Int32Array(nv).fill(-1), outP = [], outT = [];
  for (let t = 0; t < nt; t++) {
    if (!alive[t]) continue;
    for (let k = 0; k < 3; k++) {
      const v = find(tri[t * 3 + k]);
      if (map[v] < 0) { map[v] = outP.length / 3; outP.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); }
      outT.push(map[v]);
    }
  }
  return { pos: Float64Array.from(outP), tri: Uint32Array.from(outT) };
}

// ---- lattice: transfinite (Coons) volume interpolation of the cage's displacements ----
/** cage = {res: [nx, ny, nz], min, max (the rest box), disp: Map 'i,j,k' → [dx, dy, dz] (the boundary points' moves)}. */
export function latticeDisplace(p, cage) {
  const [nx, ny, nz] = cage.res, { min, max } = cage;
  const u = (p[0] - min[0]) / ((max[0] - min[0]) || 1), v = (p[1] - min[1]) / ((max[1] - min[1]) || 1), w = (p[2] - min[2]) / ((max[2] - min[2]) || 1);
  const D = (i, j, k) => cage.disp.get(i + ',' + j + ',' + k) || [0, 0, 0];
  // a boundary face of the grid, bilinear: s, t in 0…1 across it
  const face = (fixed, val, s, t) => {
    const [na, nb] = fixed === 0 ? [ny, nz] : fixed === 1 ? [nx, nz] : [nx, ny];
    const a = Math.max(0, Math.min(na - 1, s * (na - 1))), b = Math.max(0, Math.min(nb - 1, t * (nb - 1)));
    const a0 = Math.min(na - 2, Math.floor(a)), b0 = Math.min(nb - 2, Math.floor(b)), fa = a - Math.max(0, a0), fb = b - Math.max(0, b0);
    const A0 = Math.max(0, a0), B0 = Math.max(0, b0);
    const at = (x, y) => (fixed === 0 ? D(val, x, y) : fixed === 1 ? D(x, val, y) : D(x, y, val));
    const r = [0, 0, 0];
    const cs = [[A0, B0, (1 - fa) * (1 - fb)], [A0 + 1, B0, fa * (1 - fb)], [A0, B0 + 1, (1 - fa) * fb], [A0 + 1, B0 + 1, fa * fb]];
    for (const [x, y, k] of cs) { const d = at(Math.min(x, na - 1), Math.min(y, nb - 1)); r[0] += d[0] * k; r[1] += d[1] * k; r[2] += d[2] * k; }
    return r;
  };
  const edge = (axis, a, b, t) => {
    // an edge of the box along `axis`, the other two indices fixed at a (0 | last) and b; linear along it
    const n = [nx, ny, nz][axis], x = Math.max(0, Math.min(n - 1, t * (n - 1))), x0 = Math.min(n - 2, Math.floor(x)), f = x - Math.max(0, x0), X0 = Math.max(0, x0);
    const at = (i) => (axis === 0 ? D(i, a, b) : axis === 1 ? D(a, i, b) : D(a, b, i));
    const d0 = at(X0), d1 = at(Math.min(X0 + 1, n - 1));
    return [d0[0] + (d1[0] - d0[0]) * f, d0[1] + (d1[1] - d0[1]) * f, d0[2] + (d1[2] - d0[2]) * f];
  };
  const L = [nx - 1, ny - 1, nz - 1];
  const r = [0, 0, 0], acc = (d, k) => { r[0] += d[0] * k; r[1] += d[1] * k; r[2] += d[2] * k; };
  acc(face(0, 0, v, w), 1 - u); acc(face(0, L[0], v, w), u);
  acc(face(1, 0, u, w), 1 - v); acc(face(1, L[1], u, w), v);
  acc(face(2, 0, u, v), 1 - w); acc(face(2, L[2], u, v), w);
  for (const [a, A] of [[0, 1 - v], [L[1], v]]) for (const [b, B] of [[0, 1 - w], [L[2], w]]) acc(edge(0, a, b, u), -A * B);
  for (const [a, A] of [[0, 1 - u], [L[0], u]]) for (const [b, B] of [[0, 1 - w], [L[2], w]]) acc(edge(1, a, b, v), -A * B);
  for (const [a, A] of [[0, 1 - u], [L[0], u]]) for (const [b, B] of [[0, 1 - v], [L[1], v]]) acc(edge(2, a, b, w), -A * B);
  for (const [i, I] of [[0, 1 - u], [L[0], u]]) for (const [j, J] of [[0, 1 - v], [L[1], v]]) for (const [k, K] of [[0, 1 - w], [L[2], w]]) acc(D(i, j, k), I * J * K);
  return r;
}

// ---- along a curve ----
/** A polyline's frames by arc length: {length, at(s) → {p, t, n, b}} (n: the up direction made square to the tangent). */
export function curveFrames(pts) {
  const L = [0];
  for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + len(sub(pts[i], pts[i - 1])));
  const total = L[L.length - 1];
  const at = (s) => {
    const x = Math.max(0, Math.min(total, s));
    let i = 1;
    while (i < L.length - 1 && L[i] < x) i++;
    const seg = L[i] - L[i - 1] || 1, f = (x - L[i - 1]) / seg, p = add(pts[i - 1], mul(sub(pts[i], pts[i - 1]), f));
    const t = norm(sub(pts[i], pts[i - 1]));
    let up = Math.abs(t[2]) < 0.99 ? [0, 0, 1] : [0, 1, 0];
    const b = norm(cross(t, up)), n = cross(b, t);
    return { p, t, n, b };
  };
  return { length: total, at };
}

// ---- nearest point on triangles (shrinkwrap) ----
function closestOnTri(p, a, b, c) {
  // Ericson, "Real-Time Collision Detection", 5.1.5
  const ab = sub(b, a), ac = sub(c, a), ap = sub(p, a), d1 = dot(ab, ap), d2 = dot(ac, ap);
  if (d1 <= 0 && d2 <= 0) return a;
  const bp = sub(p, b), d3 = dot(ab, bp), d4 = dot(ac, bp);
  if (d3 >= 0 && d4 <= d3) return b;
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) return add(a, mul(ab, d1 / (d1 - d3)));
  const cp = sub(p, c), d5 = dot(ab, cp), d6 = dot(ac, cp);
  if (d6 >= 0 && d5 <= d6) return c;
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) return add(a, mul(ac, d2 / (d2 - d6)));
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) return add(b, mul(sub(c, b), (d4 - d3) / ((d4 - d3) + (d5 - d6))));
  const den = 1 / (va + vb + vc);
  return add(a, add(mul(ab, vb * den), mul(ac, vc * den)));
}
export function nearestOnTris(target) {
  const { pos, tri } = target, n = tri.length / 3, boxes = new Float64Array(n * 6);
  const V = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
  for (let t = 0; t < n; t++) for (let k = 0; k < 3; k++) {
    const xs = [pos[tri[t * 3] * 3 + k], pos[tri[t * 3 + 1] * 3 + k], pos[tri[t * 3 + 2] * 3 + k]];
    boxes[t * 6 + k] = Math.min(...xs); boxes[t * 6 + 3 + k] = Math.max(...xs);
  }
  const tree = new BoxTree(boxes);
  const size = tree.min ? len(sub(tree.max, tree.min)) || 1 : 1;
  return (p) => {
    let r = size / 64, best = null;
    for (let tries = 0; tries < 30 && !best; tries++, r *= 2) {
      tree.box(sub(p, [r, r, r]), add(p, [r, r, r]), (t) => {
        const q = closestOnTri(p, V(tri[t * 3]), V(tri[t * 3 + 1]), V(tri[t * 3 + 2])), d = len(sub(q, p));
        if (!best || d < best.d) best = { q, d, t };
        return false;
      });
      if (best && best.d > r) best = null;   // something nearer may sit just outside the box: look wider
    }
    return best;
  };
}

// ---- one modifier ----
/** Faces after `levels` of Catmull-Clark: every corner becomes a quad, then ×4 per level. */
export function subdividedFaces(mesh, levels) {
  if (!levels) return mesh.faceCount;
  let corners = 0;
  for (let f = 0; f < mesh.nf; f++) if (!mesh.faceDead(f)) corners += mesh.faceSize(f);
  return corners * 4 ** (levels - 1);
}
export function applyMod(mesh, mod, { render = false, ref = null, manifold = null, notes = [], budget = 0, info = {} } = {}) {
  const p = mod.params;
  switch (mod.type) {
    case 'scale': {
      const f = p.factors;
      return combine([{ mesh, map: (q) => [q[0] * f[0], q[1] * f[1], q[2] * f[2]] }]);
    }
    case 'mirror': {
      let cur = mesh;
      for (const ax of ['x', 'y', 'z']) {
        if (!p[ax]) continue;
        const k = AX[ax];
        const part = cur.clone();
        cur = combine([{ mesh: cur }, { mesh: part, map: (q) => { const r = q.slice(); r[k] = -r[k]; return r; }, flip: true }]);
        if (p.merge) { const onPlane = []; for (let v = 0; v < cur.nv; v++) if (!cur.vertDead(v) && Math.abs(cur.P[v * 3 + k]) <= p.dist) onPlane.push(v); if (onPlane.length) O.mergeByDistance(cur, Math.max(p.dist * 2, 1e-12), onPlane); }
      }
      return cur;
    }
    case 'array': {
      const n = p.count, b = bounds(mesh), size = sub(b.max, b.min);
      const parts = [];
      if (p.mode === 'radial') {
        const k = AX[p.axis], full = Math.abs(Math.abs(p.angle) - 360) < 1e-9, step = ((p.angle * Math.PI) / 180) / (full ? n : Math.max(1, n - 1));
        for (let i = 0; i < n; i++) {
          const a = step * i, c = Math.cos(a), s = Math.sin(a);
          parts.push({ mesh, map: (q) => { const r = q.slice(), i1 = (k + 1) % 3, i2 = (k + 2) % 3; r[i1] = q[i1] * c - q[i2] * s; r[i2] = q[i1] * s + q[i2] * c; return r; } });
        }
      } else if (p.mode === 'curve' && ref?.pts?.length > 1) {
        const F = curveFrames(ref.pts), len0 = Math.max(1e-9, size[0] * (p.rel[0] || 1) + p.abs[0]);
        for (let i = 0; i < n && i * len0 <= F.length + 1e-9; i++) {
          const fr = F.at(i * len0 + (size[0] / 2));
          parts.push({ mesh, map: (q) => { const x = q[0] - (b.min[0] + size[0] / 2); return add(fr.p, add(add(mul(fr.t, x), mul(fr.b, -q[1])), mul(fr.n, q[2]))); } });
        }
      } else {
        const d = add([size[0] * p.rel[0], size[1] * p.rel[1], size[2] * p.rel[2]], p.abs);
        for (let i = 0; i < n; i++) parts.push({ mesh, map: (q) => add(q, mul(d, i)) });
      }
      if (!parts.length) return mesh.clone();
      const out = combine(parts);
      if (p.merge) O.mergeByDistance(out, p.dist, null);
      return out;
    }
    case 'subsurf': {
      // the view's level comes down on a big mesh (adaptive: the computer's face budget); renders keep theirs, on the limit surface
      let L = render ? p.renderLevels : p.levels;
      if (!render && p.adaptive && budget > 0) { while (L > 0 && subdividedFaces(mesh, L) > budget) L--; if (L < p.levels) info.level = L; }
      const r = subdivide(mesh, L);
      if (render && p.limit && L > 0) { const lp = limitPositions(r); for (let v = 0; v < r.nv; v++) if (!r.vertDead(v)) { r.P[v * 3] = lp[v * 3]; r.P[v * 3 + 1] = lp[v * 3 + 1]; r.P[v * 3 + 2] = lp[v * 3 + 2]; } }
      return r;
    }
    case 'bevel': {
      const m = mesh.clone(), lim = Math.cos((p.angle * Math.PI) / 180), A = [0, 0, 0], B = [0, 0, 0], es = [];
      for (let h = 0; h < m.nh; h++) { const t = m.hTw[h]; if (m.heDead(h) || t < h) continue; m.faceNormal(m.hF[h], A); m.faceNormal(m.hF[t], B); if (dot(A, B) < lim) es.push(h); }
      if (!es.length || !(p.width > 0)) return m;
      try { O.bevel(m, { edges: es, width: p.width, segments: p.segments, profile: p.profile }); } catch (e) { notes.push('bevel'); return mesh.clone(); }
      return m;
    }
    case 'solidify': {
      const N = vnormals(mesh), t = p.thickness, o1 = (t * (p.offset + 1)) / 2, o2 = (t * (p.offset - 1)) / 2;
      const along = (d) => (q, v) => [q[0] + N[v * 3] * d, q[1] + N[v * 3 + 1] * d, q[2] + N[v * 3 + 2] * d];
      // the vertex index is needed: shift copies by hand
      const outer = mesh.clone(), inner = mesh.clone();
      for (const [m, d] of [[outer, o1], [inner, o2]]) { const f = along(d); for (let v = 0; v < m.nv; v++) if (!m.vertDead(v)) { const q = f(P3(m, v), v); m.P[v * 3] = q[0]; m.P[v * 3 + 1] = q[1]; m.P[v * 3 + 2] = q[2]; } }
      const nvOuter = outer.toArrays().nv;
      const out = combine([{ mesh: outer }, { mesh: inner, flip: true }]);
      if (p.rim) {
        // the open border of the outer copy, joined to the same border of the inner one
        const adds = [];
        for (let h = 0; h < out.nh; h++) {
          if (out.heDead(h) || out.hTw[h] >= 0) continue;
          const a = out.hV[h], b = out.head(h);
          if (a >= nvOuter || b >= nvOuter) continue;
          adds.push({ verts: [b, a, a + nvOuter, b + nvOuter], mat: out.fMat[out.hF[h]], from: out.hF[h], corners: [out.hNx[h], h, h, out.hNx[h]] });
        }
        try { out.replaceFaces([], adds); } catch (e) { notes.push('solidify'); }
      }
      return out;
    }
    case 'boolean': {
      if (!ref?.tris || !manifold) { notes.push(manifold ? 'boolean_target' : 'boolean_later'); return mesh.clone(); }
      const a = trianglesOf(mesh), b = ref.tris;
      try {
        const { Manifold, Mesh: MMesh } = manifold;
        const mk = (t) => new Manifold(new MMesh({ numProp: 3, vertProperties: Float32Array.from(t.pos), triVerts: Uint32Array.from(t.tri) }));
        const A = mk(a), Bm = mk(b);
        const R = p.op === 'union' ? Manifold.union(A, Bm) : p.op === 'intersect' ? Manifold.intersection(A, Bm) : Manifold.difference(A, Bm);
        const g = R.getMesh(), np = g.numProp, pos = new Float64Array((g.vertProperties.length / np) * 3);
        for (let i = 0; i < pos.length / 3; i++) { pos[i * 3] = g.vertProperties[i * np]; pos[i * 3 + 1] = g.vertProperties[i * np + 1]; pos[i * 3 + 2] = g.vertProperties[i * np + 2]; }
        const out = fromTris(pos, g.triVerts);
        A.delete?.(); Bm.delete?.(); R.delete?.();
        return out;
      } catch (e) { notes.push('boolean_not_solid'); return mesh.clone(); }
    }
    case 'displace': {
      const m = mesh.clone(), N = vnormals(m), k = p.dir === 'normal' ? -1 : AX[p.dir];
      for (let v = 0; v < m.nv; v++) {
        if (m.vertDead(v)) continue;
        const q = P3(m, v), d = noise3(q[0] / p.scale, q[1] / p.scale, q[2] / p.scale, p.seed) * p.strength;
        if (k < 0) { m.P[v * 3] += N[v * 3] * d; m.P[v * 3 + 1] += N[v * 3 + 1] * d; m.P[v * 3 + 2] += N[v * 3 + 2] * d; } else m.P[v * 3 + k] += d;
      }
      return m;
    }
    case 'weld': { const m = mesh.clone(); O.mergeByDistance(m, p.dist, null); return m; }
    case 'decimate': {
      if (p.ratio >= 1) return mesh.clone();
      const t = trianglesOf(mesh), r = decimateTris(t.pos, t.tri, Math.max(4, Math.round((t.tri.length / 3) * p.ratio)));
      return fromTris(r.pos, r.tri);
    }
    case 'smooth': { const m = mesh.clone(), vs = []; for (let v = 0; v < m.nv; v++) if (!m.vertDead(v)) vs.push(v); O.smoothVerts(m, vs, { factor: p.factor, repeat: p.repeat }); return m; }
    case 'lattice': {
      if (!ref?.cage) { notes.push('lattice_cage'); return mesh.clone(); }
      const m = mesh.clone();
      for (let v = 0; v < m.nv; v++) { if (m.vertDead(v)) continue; const d = latticeDisplace(P3(m, v), ref.cage); m.P[v * 3] += d[0]; m.P[v * 3 + 1] += d[1]; m.P[v * 3 + 2] += d[2]; }
      return m;
    }
    case 'curve': {
      if (!ref?.pts || ref.pts.length < 2) { notes.push('curve_ref'); return mesh.clone(); }
      const m = mesh.clone(), F = curveFrames(ref.pts), k = AX[p.axis], i1 = (k + 1) % 3, i2 = (k + 2) % 3;
      for (let v = 0; v < m.nv; v++) {
        if (m.vertDead(v)) continue;
        const q = P3(m, v), fr = F.at(q[k]), r = add(fr.p, add(mul(fr.b, -q[i1]), mul(fr.n, q[i2])));
        m.P[v * 3] = r[0]; m.P[v * 3 + 1] = r[1]; m.P[v * 3 + 2] = r[2];
      }
      return m;
    }
    case 'shrinkwrap': {
      if (!ref?.tris) { notes.push('shrinkwrap_target'); return mesh.clone(); }
      const m = mesh.clone(), near = nearestOnTris(ref.tris), N = vnormals(m);
      for (let v = 0; v < m.nv; v++) {
        if (m.vertDead(v)) continue;
        const hit = near(P3(m, v));
        if (!hit) continue;
        const r = add(hit.q, mul([N[v * 3], N[v * 3 + 1], N[v * 3 + 2]], p.offset));
        m.P[v * 3] = r[0]; m.P[v * 3 + 1] = r[1]; m.P[v * 3 + 2] = r[2];
      }
      return m;
    }
    default: return mesh.clone();
  }
}

/** The stack applied in turn (only modifiers on, and on for the view or the render as asked). → {mesh, notes}. */
export function evaluate(mesh, mods, { render = false, refs = new Map(), manifold = null, upTo = Infinity, budget = 0 } = {}) {
  let cur = mesh;
  const notes = [], info = [];
  mods.forEach((m, i) => {
    if (i > upTo || !m.on || !(render ? m.render : m.view)) return;
    cur = applyMod(cur, m, { render, ref: refs.get(i) || null, manifold, notes, budget, info: (info[i] = {}) });
  });
  return { mesh: cur === mesh ? mesh : cur, notes, info };
}
