/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/ops.js — the edit-mode operators of ModelCraft's meshes (0.7 MD.2), DOM-free. Each works on a Mesh inside an edit
 * (model.meshEdit / meshPreview: mesh.begin() … end(), so it is journalled and one undo step), takes plain lists of
 * elements (vertex, half-edge or face indices; an edge is any one of its half-edges) and returns what it made, so the
 * caller can select it and move it on. Topology changes go through mesh.replaceFaces (one general step: faces out,
 * faces in, twins re-paired, fans re-split), so the mesh stays a valid half-edge mesh whatever the selection was; an
 * operator that would make an edge with three faces throws MeshError 'nonmanifold' before it changes anything it can't
 * take back (the edit is cancelled by the caller).
 *
 * Corner layers (UVs, colours, normals) follow: a face that keeps its corners keeps their values, a new corner copies the
 * nearest old one or a blend of two (along an edge), as the operator says. Vertex layers (weights) are copied to a vertex
 * made from another.
 */
import { MeshError, FL_SHARP } from '../mesh.js';
import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, lerp3 as lerp, scale3 as mul, sub3 as sub } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

// ---- small vector helpers (Float64 positions in the mesh's P) ----
const P3 = (m, v) => [m.P[v * 3], m.P[v * 3 + 1], m.P[v * 3 + 2]];
const norm = (a) => { const l = len(a); return l > 0 ? [a[0] / l, a[1] / l, a[2] / l] : [0, 0, 0]; };
export const vecs = { P3, sub, add, mul, dot, cross, len, norm, lerp };

/** A new vertex at p, with the vertex layers of `from` (or zeros). */
export function newVert(m, p, from = -1) {
  const v = m.addVertex(p[0], p[1], p[2]);
  if (from >= 0) for (const L of m.attrs.values()) {
    if (L.domain !== 'vertex') continue;
    const vals = Array.from({ length: L.size }, (_, q) => L.col.a[from * L.size + q]);
    if (vals.some((x) => x)) m.setAttr(L.name, v, vals);
  }
  return v;
}
/** A face as replaceFaces wants it, keeping its own corners' values: {verts, mat, from, corners}. */
function sameFace(m, f, map = null) {
  const cs = m.faceCorners(f);
  return { verts: cs.map((h) => (map ? map.get(m.hV[h]) ?? m.hV[h] : m.hV[h])), mat: m.fMat[f], from: f, corners: cs.slice() };
}
const asSet = (list) => (list instanceof Set ? list : new Set(list));
/** Faces of the mesh that show and are alive among `faces`. */
const liveFaces = (m, faces) => [...asSet(faces)].filter((f) => f >= 0 && f < m.nf && !m.faceDead(f));
/** Each vertex's unit normal: the faces round it averaged by area (only `faces`, when given). */
export function vertexNormals(m, faces = null) {
  const N = new Float64Array(m.nv * 3), t = [0, 0, 0], cs = [];
  for (const f of faces ? liveFaces(m, faces) : Array.from({ length: m.nf }, (_, i) => i)) {
    if (m.faceDead(f)) continue;
    m.faceNormalRaw(f, t);
    for (const h of m.faceCorners(f, cs)) { const v = m.hV[h]; N[v * 3] += t[0]; N[v * 3 + 1] += t[1]; N[v * 3 + 2] += t[2]; }
  }
  for (let v = 0; v < m.nv; v++) { const l = Math.hypot(N[v * 3], N[v * 3 + 1], N[v * 3 + 2]); if (l > 0) { N[v * 3] /= l; N[v * 3 + 1] /= l; N[v * 3 + 2] /= l; } }
  return N;
}

// ---- delete ----
/** Delete vertices (and every face using them), edges (and the faces on them), or faces. → the faces removed. */
export function deleteElems(m, { verts = [], edges = [], faces = [] }) {
  const gone = new Set(liveFaces(m, faces)), vs = new Set(verts), cs = [];
  for (const h of edges) { if (!m.heDead(h)) { gone.add(m.hF[h]); const t = m.hTw[h]; if (t >= 0) gone.add(m.hF[t]); } }
  if (vs.size) for (let f = 0; f < m.nf; f++) if (!m.faceDead(f) && m.faceCorners(f, cs).some((h) => vs.has(m.hV[h]))) gone.add(f);
  m.removeFaces([...gone]);
  for (const v of vs) if (!m.vertDead(v) && m.vHe[v] < 0) m.setVertFlag(v, 1, true);
  return [...gone];
}

// ---- extrude ----
/**
 * Extrude a region of faces: its vertices are doubled, the faces move onto the copies, and the region's border gets a
 * band of side faces joining old and new. Nothing moves yet (the caller moves `verts`, e.g. along `normal`). A region with
 * no border (a whole closed piece) gets a copy with no sides. → {verts (the new ones), faces (the region, renumbered),
 * sides, normal (the region's average normal)}.
 */
export function extrudeRegion(m, faces) {
  const R = liveFaces(m, faces), inR = new Set(R), cs = [];
  if (!R.length) return { verts: [], faces: [], sides: [], normal: [0, 0, 1] };
  const map = new Map();
  let n = [0, 0, 0];
  const t = [0, 0, 0];
  for (const f of R) { m.faceNormalRaw(f, t); n = add(n, t); for (const h of m.faceCorners(f, cs)) { const v = m.hV[h]; if (!map.has(v)) map.set(v, newVert(m, P3(m, v), v)); } }
  const add_ = R.map((f) => sameFace(m, f, map));
  const sides = [];
  for (const f of R) for (const h of m.faceCorners(f, cs)) {
    const tw = m.hTw[h];
    if (tw >= 0 && inR.has(m.hF[tw])) continue;
    const a = m.hV[h], b = m.head(h), nx = m.hNx[h];
    sides.push({ verts: [a, b, map.get(b), map.get(a)], mat: m.fMat[f], from: f, corners: [h, nx, nx, h] });
  }
  const r = m.replaceFaces(R, [...add_, ...sides]);
  return { verts: [...map.values()], faces: r.faces.slice(0, R.length), sides: r.faces.slice(R.length), normal: norm(n) };
}
/** Extrude each face on its own (its own copies and sides). → {verts, faces, sides, dirs: Map vertex → its face's normal}. */
export function extrudeIndividual(m, faces) {
  const R = liveFaces(m, faces), cs = [], adds = [], dirs = new Map(), made = [];
  for (const f of R) {
    const nrm = m.faceNormal(f), map = new Map();
    for (const h of m.faceCorners(f, cs)) { const v = m.hV[h]; const w = newVert(m, P3(m, v), v); map.set(v, w); dirs.set(w, nrm); made.push(w); }
    adds.push(sameFace(m, f, map));
    for (const h of m.faceCorners(f, cs)) { const a = m.hV[h], b = m.head(h), nx = m.hNx[h]; adds.push({ verts: [a, b, map.get(b), map.get(a)], mat: m.fMat[f], from: f, corners: [h, nx, nx, h] }); }
  }
  const r = m.replaceFaces(R, adds);
  return { verts: made, faces: r.faces, dirs };
}
/** Extrude open border edges into new faces (an edge with a face on both sides cannot be: refused). → {verts}. */
export function extrudeEdges(m, edges) {
  const list = [...new Set(edges)].filter((h) => !m.heDead(h) && m.hTw[h] < 0);   // an edge with a face on both sides can't be
  if (!list.length) throw new MeshError('need_border');
  const map = new Map(), adds = [];
  const dup = (v) => { if (!map.has(v)) map.set(v, newVert(m, P3(m, v), v)); return map.get(v); };
  for (const h of list) { const a = m.hV[h], b = m.head(h); adds.push({ verts: [b, a, dup(a), dup(b)], mat: m.fMat[m.hF[h]], from: m.hF[h], corners: [m.hNx[h], h, h, m.hNx[h]] }); }
  m.replaceFaces([], adds);
  return { verts: [...map.values()] };
}

// ---- inset ----
/**
 * Inset faces by `thickness` (metres) and raise the inner faces by `depth` along their normals: as one region (a band
 * round the region's border; corners meet on the bisector, kept within half the shorter edge) or each face on its own.
 * → {faces (the inner ones), band}.
 */
export function insetFaces(m, faces, { thickness = 0.1, depth = 0, individual = false } = {}) {
  const R = liveFaces(m, faces), cs = [];
  if (!R.length) return { faces: [], band: [] };
  if (individual) {
    const adds = [], inner = [];
    for (const f of R) {
      const vs = m.faceVerts(f, []), corners = m.faceCorners(f, []), nrm = m.faceNormal(f), n = vs.length;
      const P = vs.map((v) => P3(m, v)), map = new Map();
      vs.forEach((v, i) => {
        const p = P[i], a = P[(i + n - 1) % n], b = P[(i + 1) % n];
        const q = insetCorner(p, a, b, nrm, thickness);
        map.set(v, newVert(m, add(q, mul(nrm, depth)), v));
      });
      inner.push(adds.length);
      adds.push({ verts: vs.map((v) => map.get(v)), mat: m.fMat[f], from: f, corners });
      vs.forEach((v, i) => { const w = vs[(i + 1) % n]; adds.push({ verts: [v, w, map.get(w), map.get(v)], mat: m.fMat[f], from: f, corners: [corners[i], corners[(i + 1) % n], corners[(i + 1) % n], corners[i]] }); });
    }
    const r = m.replaceFaces(R, adds);
    const innerSet = new Set(inner);   // 0.11 PERF.76: a Set, not includes() per face
    return { faces: inner.map((i) => r.faces[i]), band: r.faces.filter((_, i) => !innerSet.has(i)) };
  }
  // region: only border vertices move in; each border vertex's new place from its two border edges (in their faces' planes)
  const inR = new Set(R), border = [];
  for (const f of R) for (const h of m.faceCorners(f, cs)) { const t = m.hTw[h]; if (t < 0 || !inR.has(m.hF[t])) border.push(h); }
  const inEdge = new Map(), outEdge = new Map();   // border vertex → the border half-edge ending at it / starting from it
  for (const h of border) { outEdge.set(m.hV[h], h); inEdge.set(m.head(h), h); }
  const map = new Map();
  for (const [v, hOut] of outEdge) {
    const hIn = inEdge.get(v);
    if (hIn === undefined) continue;
    const p = P3(m, v), a = P3(m, m.hV[hIn]), b = P3(m, m.head(hOut));
    const nrm = norm(add(m.faceNormal(m.hF[hIn]), m.faceNormal(m.hF[hOut])));
    map.set(v, newVert(m, add(insetCorner(p, a, b, nrm, thickness), mul(nrm, depth)), v));
  }
  // inner vertices (not on the border) rise by depth along their normal
  const N = vertexNormals(m, R), news = new Set(map.values()), lifted = new Set();
  const adds = R.map((f) => sameFace(m, f, map));
  const band = [];
  for (const h of border) {
    const a = m.hV[h], b = m.head(h);
    if (!map.has(a) || !map.has(b)) continue;
    band.push({ verts: [a, b, map.get(b), map.get(a)], mat: m.fMat[m.hF[h]], from: m.hF[h], corners: [h, m.hNx[h], m.hNx[h], h] });
  }
  const r = m.replaceFaces(R, [...adds, ...band]);
  if (depth) for (const f of r.faces.slice(0, R.length)) for (const h of m.faceCorners(f, cs)) {
    const v = m.hV[h];
    if (news.has(v) || lifted.has(v)) continue;
    lifted.add(v);
    m.setPos(v, m.P[v * 3] + N[v * 3] * depth, m.P[v * 3 + 1] + N[v * 3 + 1] * depth, m.P[v * 3 + 2] + N[v * 3 + 2] * depth);
  }
  return { faces: r.faces.slice(0, R.length), band: r.faces.slice(R.length) };
}
/** Where corner p (between a before it and b after it, counter-clockwise about n) moves when its edges move in by d. */
function insetCorner(p, a, b, n, d) {
  const u1 = norm(sub(p, a)), u2 = norm(sub(b, p));
  const in1 = norm(cross(n, u1)), in2 = norm(cross(n, u2));   // inward, left of each edge
  const bis = norm(add(in1, in2));
  const c = dot(bis, in1);
  let k = c > 1e-6 ? d / c : d;
  const lim = 0.5 * Math.min(len(sub(p, a)), len(sub(b, p))) / Math.max(1e-9, Math.sqrt(Math.max(0, 1 - c * c)) || 1);
  if (k > lim * 4) k = lim * 4;
  return add(p, mul(bis, k));
}

// ---- merge ----
/**
 * Merge vertices into one: at their centre, at the first or the last listed, or at a point. Faces that lose corners
 * shrink; faces left with fewer than three go. → the vertex kept.
 */
export function mergeVerts(m, verts, at = 'center') {
  const vs = [...new Set(verts)].filter((v) => !m.vertDead(v));
  if (vs.length < 2) return vs[0] ?? -1;
  const keep = at === 'last' ? vs[vs.length - 1] : vs[0];
  let p;
  if (Array.isArray(at)) p = at;
  else if (at === 'center') { p = [0, 0, 0]; for (const v of vs) p = add(p, P3(m, v)); p = mul(p, 1 / vs.length); }
  else p = P3(m, keep);
  const map = new Map(vs.map((v) => [v, keep]));
  remap(m, map);
  m.setPos(keep, p[0], p[1], p[2]);
  return keep;
}
/** Merge vertices closer than `dist` (among `verts`, else all): → how many were merged away. */
export function mergeByDistance(m, dist, verts = null) {
  const vs = verts ? [...new Set(verts)] : Array.from({ length: m.nv }, (_, i) => i);
  const live = vs.filter((v) => !m.vertDead(v));
  const cell = Math.max(dist, 1e-9), grid = new Map(), map = new Map();
  const kk = (x, y, z) => x + ',' + y + ',' + z;
  for (const v of live) {
    const p = P3(m, v), c = p.map((x) => Math.floor(x / cell));
    let hit = -1;
    for (let dx = -1; dx <= 1 && hit < 0; dx++) for (let dy = -1; dy <= 1 && hit < 0; dy++) for (let dz = -1; dz <= 1 && hit < 0; dz++) {
      for (const w of grid.get(kk(c[0] + dx, c[1] + dy, c[2] + dz)) || []) if (len(sub(P3(m, w), p)) <= dist) { hit = w; break; }
    }
    if (hit >= 0) { map.set(v, hit); continue; }
    const k = kk(c[0], c[1], c[2]);
    if (!grid.has(k)) grid.set(k, []);
    grid.get(k).push(v);
  }
  if (map.size) remap(m, map);
  return map.size;
}
/** Re-make every face that uses a vertex in `map` (old → new), dropping repeated corners and faces left too small. */
function remap(m, map) {
  const cs = [], touched = [];
  for (let f = 0; f < m.nf; f++) if (!m.faceDead(f) && m.faceCorners(f, cs).some((h) => map.has(m.hV[h]))) touched.push(f);
  const adds = [];
  for (const f of touched) {
    const corners = m.faceCorners(f, []);
    let vs = corners.map((h) => map.get(m.hV[h]) ?? m.hV[h]), keepC = corners.slice();
    // drop a corner equal to the one before it (cyclically)
    const out = [], oc = [];
    vs.forEach((v, i) => { if (v !== vs[(i + vs.length - 1) % vs.length]) { out.push(v); oc.push(keepC[i]); } });
    if (out.length < 3 || new Set(out).size !== out.length) continue;
    adds.push({ verts: out, mat: m.fMat[f], from: f, corners: oc });
  }
  m.replaceFaces(touched, adds, { keepLoose: false });
  for (const [v] of map) if (!m.vertDead(v) && m.vHe[v] < 0) m.setVertFlag(v, 1, true);
}

// ---- dissolve ----
/**
 * Dissolve faces: each connected piece of `faces` with one border loop becomes one face (pieces with holes are left).
 * → the faces made.
 */
export function dissolveFaces(m, faces) {
  const R = liveFaces(m, faces), inR = new Set(R), done = new Set(), made = [];
  for (const f0 of R) {
    if (done.has(f0)) continue;
    // the connected piece
    const piece = [f0], seen = new Set([f0]);
    for (let i = 0; i < piece.length; i++) for (const h of m.faceCorners(piece[i], [])) { const t = m.hTw[h]; if (t >= 0 && inR.has(m.hF[t]) && !seen.has(m.hF[t])) { seen.add(m.hF[t]); piece.push(m.hF[t]); } }
    for (const f of piece) done.add(f);
    const loops = borderLoops(m, new Set(piece));
    if (loops.length !== 1) continue;
    const loop = loops[0];
    const r = m.replaceFaces(piece, [{ verts: loop.map((h) => m.hV[h]), mat: m.fMat[f0], from: f0, corners: loop }], { keepLoose: false });
    made.push(...r.faces);
  }
  return made;
}
/** Dissolve edges: the two faces on each are joined (each group of faces joined this way becomes one). */
export function dissolveEdges(m, edges) {
  const inner = edges.filter((h) => !m.heDead(h) && m.hTw[h] >= 0);
  // union the faces across the edges
  const parent = new Map();
  const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
  for (const h of inner) for (const f of [m.hF[h], m.hF[m.hTw[h]]]) if (!parent.has(f)) parent.set(f, f);
  for (const h of inner) { const a = find(m.hF[h]), b = find(m.hF[m.hTw[h]]); if (a !== b) parent.set(a, b); }
  const groups = new Map();
  for (const f of parent.keys()) { const r = find(f); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(f); }
  const made = [];
  for (const g of groups.values()) made.push(...dissolveFaces(m, g));
  return made;
}
/** Dissolve vertices: the faces round each (one fan, two or more faces) become one face without it; a vertex between two edges in a line just leaves its faces. */
export function dissolveVerts(m, verts) {
  const made = [];
  for (const v of verts) {
    if (m.vertDead(v) || m.vHe[v] < 0) continue;
    const ring = m.outgoing(v), faces = [...new Set(ring.map((h) => m.hF[h]))];
    if (faces.length === 1 || (ring.length === 2 && m.isBoundaryVert(v))) {
      // just take the corner out of its face(s)
      const adds = [];
      for (const f of faces) {
        const cs = m.faceCorners(f, []).filter((h) => m.hV[h] !== v);
        if (cs.length >= 3) adds.push({ verts: cs.map((h) => m.hV[h]), mat: m.fMat[f], from: f, corners: cs });
      }
      m.replaceFaces(faces, adds, { keepLoose: false });
      if (!m.vertDead(v) && m.vHe[v] < 0) m.setVertFlag(v, 1, true);
      continue;
    }
    const loops = borderLoops(m, new Set(faces));
    if (loops.length !== 1) continue;
    const loop = loops[0].filter((h) => m.hV[h] !== v);
    if (loop.length < 3) continue;
    const r = m.replaceFaces(faces, [{ verts: loop.map((h) => m.hV[h]), mat: m.fMat[faces[0]], from: faces[0], corners: loop }], { keepLoose: false });
    if (!m.vertDead(v) && m.vHe[v] < 0) m.setVertFlag(v, 1, true);
    made.push(...r.faces);
  }
  return made;
}
/** The border loops of a set of faces, each a list of half-edges (inside the set) in order. */
export function borderLoops(m, set) {
  const border = [], cs = [];
  for (const f of set) for (const h of m.faceCorners(f, cs)) { const t = m.hTw[h]; if (t < 0 || !set.has(m.hF[t])) border.push(h); }
  const from = new Map();
  for (const h of border) { if (from.has(m.hV[h])) return []; from.set(m.hV[h], h); }   // a vertex the border passes twice: not handled
  const used = new Set(), loops = [];
  for (const h0 of border) {
    if (used.has(h0)) continue;
    const loop = [];
    let h = h0;
    for (let g = 0; g < 1e6; g++) { used.add(h); loop.push(h); const nx = from.get(m.head(h)); if (nx === undefined || nx === h0) break; h = nx; }
    loops.push(loop);
  }
  return loops;
}

// ---- fill ----
/**
 * Make a face from selected vertices on an open border (or from open border edges): the border loop through them closes
 * with one face, when the selection is a whole open border loop; two open edges that face each other make a quad.
 * → the face made.
 */
export function fill(m, { verts = [], edges = [] }) {
  const vs = new Set(verts);
  for (const h of edges) { vs.add(m.hV[h]); vs.add(m.head(h)); }
  // the open half-edges among the selected vertices; each has its face on the left, the hole on the right
  const open = [];
  for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.hTw[h] < 0 && vs.has(m.hV[h]) && vs.has(m.head(h))) open.push(h);
  if (!open.length) throw new MeshError('need_border');
  const from = new Map(open.map((h) => [m.hV[h], h]));
  // follow the border from the first open edge; if it closes, the new face is that loop run the other way
  const loop = [], inLoop = new Set();   // 0.11 PERF.76: inLoop answers "already in the loop" in one step
  let h = open[0];
  for (let g = 0; g < 1e6; g++) { loop.push(h); inLoop.add(h); const nx = from.get(m.head(h)); if (nx === undefined || nx === open[0] || inLoop.has(nx)) { if (nx === open[0]) loop.closed = true; break; } h = nx; }
  if (loop.closed && loop.length >= 3) {
    const rev = loop.slice().reverse();   // a_k+1 → a_k against each open half-edge a_k → a_k+1
    const verts = rev.map((x) => m.head(x)), corners = rev.map((x) => m.hNx[x]);
    return m.replaceFaces([], [{ verts, mat: m.fMat[m.hF[open[0]]], from: m.hF[open[0]], corners }]).faces[0];
  }
  if (open.length === 2 && m.head(open[0]) !== m.hV[open[1]] && m.head(open[1]) !== m.hV[open[0]]) {
    // two separate open edges: a quad between them
    const [h1, h2] = open;
    return m.replaceFaces([], [{ verts: [m.head(h1), m.hV[h1], m.head(h2), m.hV[h2]], mat: m.fMat[m.hF[h1]], from: m.hF[h1], corners: [m.hNx[h1], h1, m.hNx[h2], h2] }]).faces[0];
  }
  throw new MeshError('need_border');
}

// ---- subdivide, loop cut ----
/** Points on each listed edge, `cuts` of them evenly (shared by both faces): Map edge(canonical half-edge) → [new vertices from hV to head]. */
function cutEdges(m, edges, cuts, slide = 0) {
  const out = new Map();
  for (const h0 of edges) {
    const h = m.edgeOf(h0);
    if (out.has(h)) continue;
    const a = m.hV[h], b = m.head(h), A = P3(m, a), B = P3(m, b), list = [];
    for (let k = 1; k <= cuts; k++) {
      let s = k / (cuts + 1);
      if (slide) s = Math.min(0.999, Math.max(0.001, s + slide / (cuts + 1)));
      const v = newVert(m, lerp(A, B, s), a);
      list.push({ v, s });
    }
    out.set(h, list);
  }
  return out;
}
/** The points of edge `h` (either half) as seen from its own start, in order. */
function along(m, cuts, h) { const k = m.edgeOf(h), list = cuts.get(k); if (!list) return []; return (k === h ? list : list.slice().reverse()).map((x) => x.v); }
/** Blend of the two corners an edge point lies between: for corner layers. */
const blendCorner = (h, nx, s) => [[h, 1 - s], [nx, s]];
/**
 * Subdivide: cut every listed edge into `cuts` + 1; a quad whose four edges are all cut becomes a grid of quads, a
 * triangle with all three cut a grid of triangles (one cut: four), other faces just gain the points on their edges.
 * → {verts (new), faces}.
 */
export function subdivide(m, { edges = [], faces = [] }, cuts = 1) {
  const es = new Set(edges.map((h) => m.edgeOf(h)));
  for (const f of liveFaces(m, faces)) for (const h of m.faceCorners(f, [])) es.add(m.edgeOf(h));
  const C = cutEdges(m, [...es], cuts);
  const touched = new Set();
  for (const h of es) { touched.add(m.hF[h]); const t = m.hTw[h]; if (t >= 0) touched.add(m.hF[t]); }
  const adds = [], made = [], madeSet = new Set(), gridFaces = new Set();   // indices into adds of the faces made from subdivided faces
  for (const v of C.values()) for (const x of v) { made.push(x.v); madeSet.add(x.v); }
  for (const f of touched) {
    if (m.faceDead(f)) continue;
    const cs = m.faceCorners(f, []), n = cs.length;
    const all = cs.every((h) => es.has(m.edgeOf(h)));
    const first = adds.length;
    if (all && n === 4) {
      // a grid: rows of points from side 0 (cs[0]→cs[1]) to side 2 (reversed), interior points by blending
      const side = cs.map((h) => [m.hV[h], ...along(m, C, h)]);   // each side from its start, without its end
      const N = cuts + 1, grid = [];
      for (let i = 0; i <= N; i++) {
        grid.push([]);
        for (let j = 0; j <= N; j++) {
          // corners (0,0)=c0 (N,0)=c1 (N,N)=c2 (0,N)=c3; side0: j=0 i=0..N; side1: i=N j=0..N; side2: j=N i=N..0; side3: i=0 j=N..0
          if (j === 0) grid[i].push(i === N ? m.hV[cs[1]] : side[0][i]);
          else if (i === N) grid[i].push(j === N ? m.hV[cs[2]] : side[1][j]);
          else if (j === N) grid[i].push(i === 0 ? m.hV[cs[3]] : side[2][N - i]);
          else if (i === 0) grid[i].push(side[3][N - j]);
          else {
            // a Coons patch over the four sides (flat quads stay flat; warped ones follow their sides)
            const P = (x) => P3(m, x), u = i / N, w = j / N;
            const c00 = P(m.hV[cs[0]]), c10 = P(m.hV[cs[1]]), c11 = P(m.hV[cs[2]]), c01 = P(m.hV[cs[3]]);
            const S0 = P(side[0][i]), S2 = P(side[2][N - i]), S3 = P(side[3][N - j]), S1 = P(side[1][j]);
            const ruled = add(add(mul(S0, 1 - w), mul(S2, w)), add(mul(S3, 1 - u), mul(S1, u)));
            const bil = add(add(mul(c00, (1 - u) * (1 - w)), mul(c10, u * (1 - w))), add(mul(c11, u * w), mul(c01, (1 - u) * w)));
            grid[i].push(newVert(m, sub(ruled, bil), m.hV[cs[0]]));
          }
        }
      }
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        const corners = [cs[0], cs[1], cs[2], cs[3]].map((c, q) => c);   // copy the face's corner values from the nearest corner
        const pick = (ii, jj) => corners[ii * 2 >= N ? (jj * 2 >= N ? 2 : 1) : jj * 2 >= N ? 3 : 0];
        adds.push({ verts: [grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]], mat: m.fMat[f], from: f, corners: [pick(i, j), pick(i + 1, j), pick(i + 1, j + 1), pick(i, j + 1)] });
      }
      for (const row of grid) for (const v of row) if (v >= 0 && !madeSet.has(v) && !cs.some((h) => m.hV[h] === v)) { made.push(v); madeSet.add(v); }
      for (let k = first; k < adds.length; k++) gridFaces.add(k);
      continue;
    }
    if (all && n === 3 && cuts === 1) {
      const [h0, h1, h2] = cs, a = m.hV[h0], b = m.hV[h1], c = m.hV[h2];
      const ab = along(m, C, h0)[0], bc = along(m, C, h1)[0], ca = along(m, C, h2)[0];
      adds.push({ verts: [a, ab, ca], mat: m.fMat[f], from: f, corners: [h0, h0, h0] }, { verts: [ab, b, bc], mat: m.fMat[f], from: f, corners: [h1, h1, h1] },
        { verts: [ca, bc, c], mat: m.fMat[f], from: f, corners: [h2, h2, h2] }, { verts: [ab, bc, ca], mat: m.fMat[f], from: f, corners: [h0, h1, h2] });
      for (let k = first; k < adds.length; k++) gridFaces.add(k);
      continue;
    }
    // other faces: the points go into the face's outline
    const vs = [], cc = [];
    for (const h of cs) { vs.push(m.hV[h]); cc.push(h); for (const v of along(m, C, h)) { vs.push(v); cc.push(h); } }
    adds.push({ verts: vs, mat: m.fMat[f], from: f, corners: cc });
  }
  const r = m.replaceFaces([...touched].filter((f) => !m.faceDead(f)), adds);
  return { verts: made, faces: r.faces.filter((_, k) => gridFaces.has(k)), touched: r.faces };
}
/**
 * Loop cut: `cuts` new edge loops across the edge ring through half-edge h (quads only; the ring stops at other faces,
 * whose outlines gain the points). `slide` −1…1 moves a single cut toward either side. → {verts, edges (the new loops' half-edges)}.
 */
export function loopCut(m, h, { cuts = 1, slide = 0 } = {}) {
  const ring = ringFrom(m, h);
  if (!ring.edges.length) throw new MeshError('need_ring');
  const C = cutEdges(m, ring.edges, cuts, cuts === 1 ? slide : 0);
  const touched = new Set(ring.faces);
  for (const e of ring.edges) { touched.add(m.hF[e]); const t = m.hTw[e]; if (t >= 0) touched.add(m.hF[t]); }
  const adds = [], newEdges = [];
  const ringFaces = new Set(ring.faces);
  for (const f of touched) {
    const cs = m.faceCorners(f, []);
    if (ringFaces.has(f)) {
      // a quad crossed by the ring: its two ring edges are opposite; split into cuts + 1 strips
      const i0 = cs.findIndex((x) => C.has(m.edgeOf(x)) && C.has(m.edgeOf(cs[(cs.indexOf(x) + 2) % 4])));
      const e1 = cs[i0], e2 = cs[(i0 + 2) % 4];
      const A = [m.hV[e1], ...along(m, C, e1), m.head(e1)];   // along e1
      const B = [m.head(e2), ...along(m, C, e2).slice().reverse(), m.hV[e2]];   // along e2 the same way as e1
      for (let k = 0; k + 1 < A.length; k++) adds.push({ verts: [A[k], A[k + 1], B[k + 1], B[k]], mat: m.fMat[f], from: f, corners: [e1, e1, e2, e2] });
      continue;
    }
    const vs = [], cc = [];
    for (const x of cs) { vs.push(m.hV[x]); cc.push(x); for (const v of along(m, C, x)) { vs.push(v); cc.push(x); } }
    adds.push({ verts: vs, mat: m.fMat[f], from: f, corners: cc });
  }
  m.replaceFaces([...touched], adds);
  const verts = [];
  for (const l of C.values()) verts.push(...l.map((x) => x.v));
  const vertSet = new Set(verts);
  for (const v of verts) for (const x of m.outgoing(v)) { const w = m.head(x); if (vertSet.has(w)) newEdges.push(m.edgeOf(x)); }
  return { verts, edges: [...new Set(newEdges)] };
}
/** The edge ring through h for a loop cut: {edges (canonical), faces (the quads crossed)}. */
export function ringFrom(m, h) {
  const edges = [m.edgeOf(h)], faces = [], seenE = new Set(edges), seenF = new Set();
  for (const start of [h, m.hTw[h]]) {
    let cur = start;
    for (let g = 0; g < 1e6 && cur >= 0; g++) {
      const f = m.hF[cur];
      if (seenF.has(f) || m.faceSize(f) !== 4) break;
      seenF.add(f); faces.push(f);
      const opp = m.hNx[m.hNx[cur]], k = m.edgeOf(opp);
      if (seenE.has(k)) break;
      seenE.add(k); edges.push(k);
      cur = m.hTw[opp];
    }
  }
  return { edges, faces };
}

// ---- bridge ----
/**
 * Bridge two open border loops (each given by any of its edges, or all of them): quads join them, the loops paired up
 * by the rotation and direction that keep the quads shortest. Loops of different lengths are refused.
 * → the faces made.
 */
export function bridgeLoops(m, edges) {
  const bord = [...new Set(edges)].filter((h) => !m.heDead(h) && m.hTw[h] < 0);
  // group into loops by walking the borders
  const loops = [], used = new Set();
  for (const h0 of bord) {
    if (used.has(h0)) continue;
    const loop = [];
    let h = h0;
    for (let g = 0; g < 1e6; g++) {
      used.add(h); loop.push(h);
      let nx = m.hNx[h];
      for (let k = 0; k < 1e5 && m.hTw[nx] >= 0; k++) nx = m.hNx[m.hTw[nx]];
      if (nx === h0 || used.has(nx)) break;
      h = nx;
    }
    loops.push(loop);
  }
  if (loops.length !== 2) throw new MeshError('need_two_loops');
  const [L1, L2] = loops;
  if (L1.length !== L2.length) throw new MeshError('loops_differ');
  const n = L1.length, A = L1.map((h) => m.hV[h]), B = L2.map((h) => m.hV[h]);
  // B runs the opposite way round to A when facing it: try both directions and every rotation
  let best = null;
  for (const dir of [1, -1]) for (let r = 0; r < n; r++) {
    let d = 0;
    for (let i = 0; i < n; i++) d += len(sub(P3(m, A[i]), P3(m, B[(r + dir * i + n * n) % n])));
    if (!best || d < best.d) best = { d, dir, r };
  }
  const bAt = (i) => B[(best.r + best.dir * i + n * n) % n];
  const adds = [];
  for (let i = 0; i < n; i++) {
    const a0 = A[i], a1 = A[(i + 1) % n], b0 = bAt(i), b1 = bAt(i + 1);
    // the new face runs a1 → a0 (against A's border half-edge a0 → a1)
    adds.push({ verts: [a1, a0, b0, b1], mat: m.fMat[m.hF[L1[i]]], from: m.hF[L1[i]], corners: [m.hNx[L1[i]], L1[i], L1[i], m.hNx[L1[i]]] });
  }
  try { return m.replaceFaces([], adds).faces; } catch (e) {
    if (e.code !== 'nonmanifold') throw e;
    throw new MeshError('bridge_dir');
  }
}
// ---- bevel ----
/**
 * Bevel edges (each with a face on both sides) by `width` (metres) with `segments` steps on a curve whose roundness is
 * `profile` (0 flat, 0.5 round, 1 square), or bevel vertices (`verts`, one segment: each corner cut flat).
 *
 * At every vertex an edge to bevel touches, each face corner there is replaced by new points: where two bevelled edges
 * meet in a face, the point where their offset lines cross (the offset is `width` inside that face); where a bevelled
 * edge meets a plain edge, a point slid along the plain edge to where the offset reaches it (shared by the two faces on
 * that edge); between two plain edges, the corner is cut by points on both (slid `width`, or as far as a bevelled
 * neighbour needs). Each bevelled edge becomes a strip of quads between the two faces' new edges, following the profile
 * from one face's point to the other's past the old corner; round each vertex the points left over make a cap face.
 * Slides are kept within 0.45 of an edge's length (0.9 when its far end stays). The old vertices go.
 * → {faces (the strips and caps), verts (new)}.
 */
export function bevel(m, { edges = [], verts = [], width = 0.1, segments = 1, profile = 0.5 } = {}) {
  const B = new Set();
  for (const h of edges) if (!m.heDead(h) && m.hTw[h] >= 0) B.add(m.edgeOf(h));
  const V = new Set();
  for (const h of B) { V.add(m.hV[h]); V.add(m.head(h)); }
  for (const v of verts) if (!m.vertDead(v) && m.vHe[v] >= 0 && !m.isBoundaryVert(v)) V.add(v);
  if (!V.size) throw new MeshError('need_edges');
  const segs = B.size ? Math.max(1, Math.min(64, Math.round(segments))) : 1;
  const isB = (h) => B.has(m.edgeOf(h));
  const touchedEnd = (h) => V.has(m.hV[h]) && V.has(m.head(h));
  const dirOf = (v, w) => norm(sub(P3(m, w), P3(m, v)));
  const elen = (h) => len(sub(P3(m, m.head(h)), P3(m, m.hV[h])));
  // slide points on plain edges at each vertex: key v:edge → {d sum, n, v (made later)}
  const slide = new Map(), meets = new Map();   // meets: corner half-edge → vertex
  const skey = (v, h) => v + ':' + m.edgeOf(h);
  const want = (v, h, d) => { const k = skey(v, h); const s = slide.get(k) || { sum: 0, n: 0, h, v }; if (d !== null) { s.sum += d; s.n++; } slide.set(k, s); };
  const sinBetween = (u1, u2) => len(cross(u1, u2));
  const corners = new Map();   // v → its outgoing half-edges (the face corners at v), clockwise
  for (const v of V) corners.set(v, m.outgoing(v));
  for (const [v, cs] of corners) for (const c of cs) {
    const hin = m.hPv[c], ein = isB(hin), eout = isB(c);
    const uOut = dirOf(v, m.head(c)), uIn = dirOf(v, m.hV[hin]);
    const sn = sinBetween(uIn, uOut);
    if (ein && !eout) want(v, c, sn > 1e-6 ? width / sn : width);
    else if (eout && !ein) want(v, hin, sn > 1e-6 ? width / sn : width);
    else if (!ein && !eout) { want(v, hin, null); want(v, c, null); }
  }
  // make the slide points (clamped along their edge)
  for (const s of slide.values()) {
    const v = s.v, h = s.h, far = m.hV[h] === v ? m.head(h) : m.hV[h];
    let d = s.n ? s.sum / s.n : width;
    const L = elen(h), cap = (V.has(far) ? 0.45 : 0.9) * L;
    if (d > cap) d = cap;
    s.vert = newVert(m, add(P3(m, v), mul(dirOf(v, far), d)), v);
  }
  const S = (v, h) => slide.get(skey(v, h)).vert;
  // meet points of two bevelled edges in a face
  for (const [v, cs] of corners) for (const c of cs) {
    const hin = m.hPv[c];
    if (!(isB(hin) && isB(c))) continue;
    const uOut = dirOf(v, m.head(c)), uIn = dirOf(v, m.hV[hin]);
    const sn = sinBetween(uIn, uOut);
    let k = sn > 1e-6 ? width / sn : width;
    const cap = 0.45 * Math.min(elen(c), elen(hin)) / Math.max(1e-9, len(add(uIn, uOut)) / 2 || 1);
    if (k > cap * 2) k = cap * 2;
    meets.set(c, newVert(m, add(P3(m, v), mul(add(uIn, uOut), k)), v));
  }
  // what replaces each corner at a touched vertex, in the face's own order (the incoming edge's side first)
  const rep = new Map();
  for (const [v, cs] of corners) for (const c of cs) {
    const hin = m.hPv[c], ein = isB(hin), eout = isB(c);
    rep.set(c, ein && eout ? [meets.get(c)] : ein ? [S(v, c)] : eout ? [S(v, hin)] : [S(v, hin), S(v, c)]);
  }
  // the profile across a bevelled edge's end: from p0 to p1 past the old corner pc (segs − 1 points between)
  const profilePts = (p0, p1, pc, from) => {
    const out = [];
    const M = lerp(p0, p1, 0.5), Q = add(M, mul(sub(pc, M), 2 * profile));
    for (let k = 1; k < segs; k++) {
      const t = k / segs, a = (1 - t) * (1 - t), b = 2 * t * (1 - t), c = t * t;
      out.push(newVert(m, add(add(mul(p0, a), mul(Q, b)), mul(p1, c)), from));
    }
    return out;
  };
  // every face with a corner at a touched vertex, rebuilt
  const faces = new Set();
  for (const cs of corners.values()) for (const c of cs) faces.add(m.hF[c]);
  const adds = [];
  for (const f of faces) {
    const vs = [], cc = [];
    for (const c of m.faceCorners(f, [])) {
      if (rep.has(c)) for (const x of rep.get(c)) { vs.push(x); cc.push(c); }
      else { vs.push(m.hV[c]); cc.push(c); }
    }
    if (vs.length >= 3 && new Set(vs).size === vs.length) adds.push({ verts: vs, mat: m.fMat[f], from: f, corners: cc });
  }
  // strips along the bevelled edges, and the profile points at each end (shared with the caps)
  const prof = new Map();   // half-edge c (the corner whose outgoing edge is bevelled) → points from rep(c).last to rep(next corner).first
  const made = [];
  for (const h of B) {
    const t = m.hTw[h], a = m.hV[h], b = m.head(h);
    const cA1 = h, cA2 = m.hNx[t], cB1 = m.hNx[h], cB2 = t;   // F1's corner at a, F2's at a, F1's at b, F2's at b
    const A0 = rep.get(cA1).at(-1), As = rep.get(cA2)[0], B0 = rep.get(cB1)[0], Bs = rep.get(cB2).at(-1);
    const Amid = profilePts(P3(m, A0), P3(m, As), P3(m, a), a), Bmid = profilePts(P3(m, B0), P3(m, Bs), P3(m, b), b);
    prof.set(cA1, Amid);            // round a, after F1's corner: A0 … As
    prof.set(cB2, Bmid.slice().reverse() );   // round b, after F2's corner: Bs … B0
    const A = [A0, ...Amid, As], Bv = [B0, ...Bmid, Bs];
    for (let k = 0; k < segs; k++) {
      const q = [Bv[k], A[k], A[k + 1], Bv[k + 1]];
      if (new Set(q).size === 4) adds.push({ verts: q, mat: m.fMat[m.hF[h]], from: m.hF[h], corners: [cB1, cA1, cA2, cB2] });
    }
    made.push(...Amid, ...Bmid);
  }
  // caps: round each touched vertex, every corner's points then (across a bevelled edge) that edge's profile; the cap
  // runs the other way, against the faces round it
  for (const [v, cs] of corners) {
    const ring = [];
    for (const c of cs) {
      ring.push(...rep.get(c));
      if (isB(c)) ring.push(...(prof.get(c) || []));
    }
    const out = ring.filter((x, i) => x !== ring[(i + ring.length - 1) % ring.length]);
    if (out.length >= 3 && new Set(out).size === out.length) adds.push({ verts: out.slice().reverse(), mat: m.fMat[m.hF[cs[0]]], from: m.hF[cs[0]], corners: out.map(() => cs[0]) });
  }
  const r = m.replaceFaces([...faces], adds, { keepLoose: false });
  for (const s of slide.values()) made.push(s.vert);
  made.push(...meets.values());
  return { faces: r.faces, verts: made };
}

// ---- flip ----
/** Turn faces over (their corners run the other way, with their corner values). → the faces made. */
export function flipFaces(m, faces) {
  const R = liveFaces(m, faces);
  const adds = R.map((f) => { const cs = m.faceCorners(f, []).slice().reverse(); return { verts: cs.map((h) => m.hV[h]), mat: m.fMat[f], from: f, corners: cs }; });
  return m.replaceFaces(R, adds).faces;
}

// ---- spin ----
/**
 * Spin: extrude a region of faces (or open border edges) round an axis `steps` times by `angle` (radians) in all,
 * about `center`, axis `axis` (unit). A full turn (2π) joins the last step to the first. → {verts (the last copy's), faces}.
 */
export function spin(m, { faces = [], edges = [], center = [0, 0, 0], axis = [0, 0, 1], angle = Math.PI * 2, steps = 12 } = {}) {
  const n = Math.max(1, Math.min(512, Math.round(steps)));
  const full = Math.abs(Math.abs(angle) - Math.PI * 2) < 1e-9;
  const rot = (p, a) => {
    const k = norm(axis), q = sub(p, center), c = Math.cos(a), sn = Math.sin(a);
    return add(center, add(add(mul(q, c), mul(cross(k, q), sn)), mul(k, dot(k, q) * (1 - c))));
  };
  let curF = liveFaces(m, faces), curE = edges.filter((h) => !m.heDead(h) && m.hTw[h] < 0), made = [];
  if (curF.length) {
    // a region facing against the way it turns is turned over first, so the solid made faces out
    let nrm = [0, 0, 0], c = [0, 0, 0], k = 0;
    const t = [0, 0, 0];
    for (const f of curF) { m.faceNormalRaw(f, t); nrm = add(nrm, t); c = add(c, m.faceCenter(f)); k++; }
    const tangent = mul(cross(norm(axis), sub(mul(c, 1 / k), center)), Math.sign(angle) || 1);
    if (dot(nrm, tangent) < 0) curF = flipFaces(m, curF);
  }
  const start = new Map();
  // the region where it starts: a cap there (the region's own faces move on with the spin)
  const startCap = curF.map((f) => ({ corners: m.faceCorners(f, []).slice(), mat: m.fMat[f], from: f }));
  const firstVerts = new Set();
  for (const c of startCap) for (const h of c.corners) firstVerts.add(m.hV[h]);
  for (const h of curE) { firstVerts.add(m.hV[h]); firstVerts.add(m.head(h)); }
  for (let i = 1; i <= n; i++) {
    const r = curF.length ? extrudeRegion(m, curF) : extrudeEdges(m, curE);
    const a = (angle * i) / n;
    for (const v of r.verts) {
      if (!start.has(v)) {
        // the copy's start: the vertex it came from, followed back to the first step's
        const src = sourceOf(m, v);
        start.set(v, start.get(src) ?? src);
      }
      const p0 = P3(m, start.get(v));
      const p = rot(p0, a);
      m.setPos(v, p[0], p[1], p[2]);
    }
    made = r.verts;
    if (curF.length) curF = r.faces;
    else curE = openOf(m, r.verts);
  }
  if (full) {
    // the last step lands on the first: its end faces go, its ring is merged onto the start's
    if (curF.length) m.removeFaces(curF, { keepLoose: true });
    mergeByDistance(m, 1e-7 * Math.max(1, len(sub(P3(m, made[0] ?? 0), center))), [...firstVerts, ...made]);
  } else if (startCap.length) {
    m.replaceFaces([], startCap.map((c) => { const rc = c.corners.slice().reverse(); return { verts: rc.map((h) => m.hV[h]), mat: c.mat, corners: rc }; }));
  }
  return { verts: made };
}
/** The vertex a freshly copied vertex was made from: the one at the same place joined to it by an edge. */
function sourceOf(m, v) {
  const p = P3(m, v);
  for (const h of m.outgoing(v)) { const w = m.head(h); if (len(sub(P3(m, w), p)) < 1e-12) return w; }
  for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.head(h) === v) { const w = m.hV[h]; if (len(sub(P3(m, w), p)) < 1e-12) return w; }
  return v;
}
/** Open border half-edges between vertices of a set. */
function openOf(m, verts) {
  const set = new Set(verts), out = [];
  for (const v of set) for (const h of m.outgoing(v)) if (m.hTw[h] < 0 && set.has(m.head(h))) out.push(h);
  for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.hTw[h] < 0 && set.has(m.hV[h]) && set.has(m.head(h))) out.push(h);
  return [...new Set(out)];
}

// ---- cut: bisect and knife ----
/** Split a polygon (vertex list) along a chord between positions i and j (not next to each other). → [poly1, poly2]. */
function splitPoly(list, i, j) {
  if (i > j) [i, j] = [j, i];
  return [list.slice(i, j + 1), [...list.slice(j), ...list.slice(0, i + 1)]];
}
/**
 * Bisect: cut faces with the plane {p, n}: each edge the plane crosses gets a point (shared by its faces), and a face
 * crossed at two places is split in two along the cut. Faces next to a cut edge that are not in the list just gain the
 * point. → {verts (new), edges (the cut's new edges)}.
 */
export function bisect(m, faces, plane) {
  const R = liveFaces(m, faces), n = norm(plane.n), d0 = dot(n, plane.p), eps = 1e-9;
  const dist = (v) => dot(P3(m, v), n) - d0;
  const cut = new Map();   // canonical edge → new vertex
  for (const f of R) for (const h of m.faceCorners(f, [])) {
    const k = m.edgeOf(h);
    if (cut.has(k)) continue;
    const a = m.hV[k], b = m.head(k), da = dist(a), db = dist(b);
    if ((da > eps && db < -eps) || (da < -eps && db > eps)) cut.set(k, newVert(m, lerp(P3(m, a), P3(m, b), da / (da - db)), a));
  }
  return splitByPoints(m, R, cut, (v) => Math.abs(dist(v)) <= eps);
}
/** Rebuild faces with the points `cut` (canonical edge → vertex) put in; faces of `split` with two points on the cut are halved. */
function splitByPoints(m, split, cut, onCut) {
  const touched = new Set(split);
  for (const k of cut.keys()) { touched.add(m.hF[k]); const t = m.hTw[k]; if (t >= 0) touched.add(m.hF[t]); }
  const inSplit = new Set(split), adds = [], newEdges = [], cutVerts = new Set(cut.values());   // 0.11 PERF.76: the cut's vertices once, not [...cut.values()] per corner
  for (const f of touched) {
    const vs = [], cc = [];
    for (const h of m.faceCorners(f, [])) {
      vs.push(m.hV[h]); cc.push(h);
      const k = m.edgeOf(h);
      if (cut.has(k)) { vs.push(cut.get(k)); cc.push(h); }
    }
    const on = vs.map((v, i) => (cut.size && cutVerts.has(v)) || (inSplit.has(f) && onCut(v)) ? i : -1).filter((i) => i >= 0);
    if (inSplit.has(f) && on.length === 2 && Math.abs(on[0] - on[1]) !== 1 && Math.abs(on[0] - on[1]) !== vs.length - 1) {
      const [p1, p2] = splitPoly(vs, on[0], on[1]), [c1, c2] = splitPoly(cc, on[0], on[1]);
      adds.push({ verts: p1, mat: m.fMat[f], from: f, corners: c1 }, { verts: p2, mat: m.fMat[f], from: f, corners: c2 });
      newEdges.push([vs[on[0]], vs[on[1]]]);
    } else adds.push({ verts: vs, mat: m.fMat[f], from: f, corners: cc });
  }
  m.replaceFaces([...touched], adds);
  const edges = [];
  for (const [a, b] of newEdges) { const h = m.findHe(a, b); if (h >= 0) edges.push(m.edgeOf(h)); }
  return { verts: [...cut.values()], edges };
}
/**
 * Knife: cut along points that lie on edges or vertices, `points` = [{v} | {h, s} (half-edge h, s along it from its
 * start)], each cut going straight across the faces between two points in the plane through them and `eye` (the
 * camera: so the cut follows what is seen). Faces it crosses are split; it walks at most 10 000 faces per stretch.
 * → {verts, edges (the cut)}.
 */
export function knife(m, points, eye) {
  const verts = [], edges = [];
  // a point on an edge is kept as the edge's two vertices: splitting faces makes new half-edges, the vertices stay
  const pts = points.map((q) => (q.v !== undefined ? { v: q.v } : { a: m.hV[q.h], b: m.head(q.h), s: q.s }));
  const vertOf = (q0) => {
    if (q0.v !== undefined) return q0.v;
    if (q0.s <= 1e-6) return q0.a;
    if (q0.s >= 1 - 1e-6) return q0.b;
    let h = m.findHe(q0.a, q0.b), s = q0.s;
    if (h < 0) { h = m.findHe(q0.b, q0.a); s = 1 - s; }
    if (h < 0) throw new MeshError('gone');
    const q = { h, s };
    // split the edge here (both faces gain the point)
    const k = m.edgeOf(q.h), sk = k === q.h ? q.s : 1 - q.s;
    const v = newVert(m, lerp(P3(m, m.hV[k]), P3(m, m.head(k)), sk), m.hV[k]);
    splitByPoints(m, [], new Map([[k, v]]), () => false);
    verts.push(v);
    return v;
  };
  let prev = vertOf(pts[0]);
  for (let i = 1; i < pts.length; i++) {
    const target = vertOf(pts[i]), A = P3(m, prev), Bp = P3(m, target);
    const nrm = norm(cross(sub(Bp, A), sub(eye, A)));
    if (!len(nrm)) { prev = target; continue; }
    let cur = prev;
    for (let guard = 0; guard < 10000 && cur !== target; guard++) {
      // a face round cur that holds target: split it straight away
      const ring = m.outgoing(cur);
      const shared = ring.map((h) => m.hF[h]).find((f) => m.faceVerts(f, []).includes(target));
      if (shared !== undefined) {
        const vs = m.faceVerts(shared, []), gap = Math.abs(vs.indexOf(cur) - vs.indexOf(target));
        if (gap !== 1 && gap !== vs.length - 1) {   // not already joined by an edge of the face
          const r = splitByPoints(m, [shared], new Map(), (v) => v === cur || v === target);
          edges.push(...r.edges);
        }
        cur = target;
        break;
      }
      // else: across the face round cur that the plane leaves cur into, toward target
      let next = null;
      for (const h of ring) {
        const f = m.hF[h], cs = m.faceCorners(f, []);
        for (const g of cs) {
          if (m.hV[g] === cur || m.head(g) === cur) continue;
          const a = P3(m, m.hV[g]), b = P3(m, m.head(g)), da = dot(sub(a, A), nrm), db = dot(sub(b, A), nrm);
          if (!((da > 1e-12 && db < -1e-12) || (da < -1e-12 && db > 1e-12) || Math.abs(da) <= 1e-12 || Math.abs(db) <= 1e-12)) continue;
          const s = Math.abs(da) <= 1e-12 ? 0 : Math.abs(db) <= 1e-12 ? 1 : da / (da - db);
          const X = lerp(a, b, s);
          // it must move toward the target along the cut
          if (dot(sub(X, A), sub(Bp, A)) <= dot(sub(P3(m, cur), A), sub(Bp, A)) + 1e-12) continue;
          if (!next || dot(sub(X, A), sub(Bp, A)) < next.t) next = { f, g, s, t: dot(sub(X, A), sub(Bp, A)) };
        }
      }
      if (!next) break;
      const v = vertOf({ a: m.hV[next.g], b: m.head(next.g), s: next.s });
      const f = m.hF[m.outgoing(cur).find((h) => m.faceVerts(m.hF[h], []).includes(v)) ?? -1];
      if (f !== undefined && f >= 0) { const r = splitByPoints(m, [f], new Map(), (x) => x === cur || x === v); edges.push(...r.edges); }
      cur = v;
    }
    prev = target;
  }
  return { verts, edges };
}

// ---- grid fill ----
/**
 * Fill an open border loop (given by its edges or vertices) with a grid of quads: the loop's 2(a + b) edges are taken as
 * four sides a, b, a, b long (`span` = a, else as square as the loop allows), starting `offset` edges along. Points
 * inside follow the four sides (a Coons patch). → the faces made.
 */
export function gridFill(m, { edges = [], verts = [] }, { span = 0, offset = 0 } = {}) {
  const vs = new Set(verts);
  for (const h of edges) { vs.add(m.hV[h]); vs.add(m.head(h)); }
  const open = [];
  for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.hTw[h] < 0 && vs.has(m.hV[h]) && vs.has(m.head(h))) open.push(h);
  const from = new Map(open.map((h) => [m.hV[h], h]));
  const loop = [], inLoop = new Set();
  let h = open[0];
  for (let g = 0; h !== undefined && g < 1e6; g++) { loop.push(h); inLoop.add(h); const nx = from.get(m.head(h)); if (nx === open[0]) break; if (nx === undefined || inLoop.has(nx)) { loop.length = 0; break; } h = nx; }
  const n = loop.length;
  if (n < 4 || n % 2) throw new MeshError('need_even_loop');
  // the fill runs against the border: its order is the loop reversed
  const rev = loop.slice().reverse();
  const L0 = rev.map((x) => m.head(x)), corner = rev.map((x) => m.hNx[x]);
  const o = ((offset % n) + n) % n;
  const L = [...L0.slice(o), ...L0.slice(0, o)], C = [...corner.slice(o), ...corner.slice(0, o)];
  const half = n / 2, a = span >= 1 && span < half ? span : Math.max(1, Math.floor(half / 2)), b = half - a;
  const at = (k) => L[((k % n) + n) % n];
  // grid(i, j), i 0…a along side 0, j 0…b along side 1
  const g = [];
  for (let i = 0; i <= a; i++) {
    g.push([]);
    for (let j = 0; j <= b; j++) {
      if (j === 0) g[i].push(at(i));
      else if (i === a) g[i].push(at(a + j));
      else if (j === b) g[i].push(at(2 * a + b - i));
      else if (i === 0) g[i].push(at(n - j));
      else {
        const u = i / a, w = j / b, P = (x) => P3(m, x);
        const S0 = P(at(i)), S2 = P(at(2 * a + b - i)), S3 = P(at(n - j)), S1 = P(at(a + j));
        const c00 = P(at(0)), c10 = P(at(a)), c11 = P(at(a + b)), c01 = P(at(2 * a + b));
        const ruled = add(add(mul(S0, 1 - w), mul(S2, w)), add(mul(S3, 1 - u), mul(S1, u)));
        const bil = add(add(mul(c00, (1 - u) * (1 - w)), mul(c10, u * (1 - w))), add(mul(c11, u * w), mul(c01, (1 - u) * w)));
        g[i].push(newVert(m, sub(ruled, bil), at(0)));
      }
    }
  }
  const adds = [], f0 = m.hF[loop[0]], cOf = (v) => { const k = L.indexOf(v); return k >= 0 ? C[k] : C[0]; };
  for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) {
    const q = [g[i][j], g[i + 1][j], g[i + 1][j + 1], g[i][j + 1]];
    adds.push({ verts: q, mat: m.fMat[f0], from: f0, corners: q.map(cOf) });
  }
  return m.replaceFaces([], adds).faces;
}

// ---- slide, shrink/fatten, smooth, proportional editing ----
/**
 * Rails for sliding an edge loop: for each selected vertex, the far ends of its two edges that leave the selection on
 * either side (side A the one most along the loop's common direction). → Map vertex → {a: far vertex, b: far vertex}.
 */
export function slideRails(m, verts) {
  const set = new Set(verts), out = new Map();
  let ref = null, openIn = null;
  for (const v of set) {
    const others = m.outgoing(v).map((h) => m.head(h)).filter((w) => !set.has(w));
    if (!openIn) { openIn = new Map(); for (let h = 0; h < m.nh; h++) if (!m.heDead(h) && m.hTw[h] < 0) { const t = m.head(h); (openIn.get(t) || openIn.set(t, []).get(t)).push(m.hV[h]); } }   // 0.11 PERF.76: the open half-edges by head, once (was a scan of every half-edge per vertex)
    for (const w of openIn.get(v) || []) if (!set.has(w) && !others.includes(w)) others.push(w);
    if (!others.length) continue;
    const dirs = others.map((w) => ({ w, d: norm(sub(P3(m, w), P3(m, v))) }));
    if (!ref) ref = dirs[0].d;
    dirs.sort((x, y) => dot(y.d, ref) - dot(x.d, ref));
    out.set(v, { a: dirs[0].w, b: dirs[dirs.length - 1].w === dirs[0].w ? -1 : dirs[dirs.length - 1].w });
  }
  return out;
}
/** Put the slid vertices at t (−1…1) along their rails from their places in `base` (Float64Array of x, y, z per vertex, or the mesh's own). */
export function applySlide(m, rails, t, base) {
  for (const [v, r] of rails) {
    const p = base ? [base[v * 3], base[v * 3 + 1], base[v * 3 + 2]] : P3(m, v);
    const w = t >= 0 ? r.a : r.b;
    if (w < 0) continue;
    const q = lerp(p, P3(m, w), Math.abs(t));
    m.setPos(v, q[0], q[1], q[2]);
  }
}
/** Shrink or fatten: every vertex along its normal (from the faces round it) by d. */
export function shrinkFatten(m, verts, d) {
  const N = vertexNormals(m);
  for (const v of verts) m.setPos(v, m.P[v * 3] + N[v * 3] * d, m.P[v * 3 + 1] + N[v * 3 + 1] * d, m.P[v * 3 + 2] + N[v * 3 + 2] * d);
}
/** Smooth vertices: each moves `factor` of the way to the average of its neighbours, `repeat` times (open borders stay along their border). */
/** Crease edges for subdivision (0.7 MD.4): the 'crease' edge layer (0 smooth … 1 sharp for four levels) on each edge. */
export function setCrease(m, edges, value) {
  const v = Math.max(0, Math.min(1, +value || 0));
  if (!m.hasAttr('crease')) { if (!v) return 0; m.addAttr('crease', 'edge', 1); }
  for (const h of edges) m.setAttr('crease', h, [v]);
  return edges.length;
}
/** The crease shared by edges, or null when they differ (or there are none). */
export function creaseOfEdges(m, edges) {
  const a = m.attrArray('crease');
  let v = null;
  for (const h of edges) { const x = a ? a[h] : 0; if (v === null) v = x; else if (Math.abs(x - v) > 1e-6) return null; }
  return v;
}
export function smoothVerts(m, verts, { factor = 0.5, repeat = 1 } = {}) {
  const vs = [...new Set(verts)].filter((v) => !m.vertDead(v) && m.vHe[v] >= 0);
  for (let r = 0; r < repeat; r++) {
    const next = vs.map((v) => {
      const border = m.isBoundaryVert(v);
      const nb = m.outgoing(v).map((h) => m.head(h));
      if (border) { const ring = m.outgoing(v); nb.length = 0; nb.push(m.head(ring[ring.length - 1]), m.hV[m.hPv[ring[0]]]); }
      let c = [0, 0, 0];
      for (const w of nb) c = add(c, P3(m, w));
      c = mul(c, 1 / nb.length);
      return lerp(P3(m, v), c, factor);
    });
    vs.forEach((v, i) => m.setPos(v, next[i][0], next[i][1], next[i][2]));
  }
}
export const FALLOFFS = ['smooth', 'sphere', 'root', 'linear', 'sharp', 'constant'];
/**
 * Proportional editing: how much each vertex follows a move of the selected ones (1 for them, falling to 0 at `radius`):
 * by straight distance, or along edges when `connected`. → Float32Array per vertex slot (0 = stays).
 */
export function falloffWeights(m, sel, radius, { mode = 'smooth', connected = false } = {}) {
  const W = new Float32Array(m.nv), D = new Float64Array(m.nv).fill(Infinity);
  const f = (t) => { const x = 1 - t; switch (mode) { case 'sphere': return Math.sqrt(Math.max(0, 1 - t * t)); case 'root': return Math.sqrt(x); case 'linear': return x; case 'sharp': return x * x; case 'constant': return 1; default: return x * x * (3 - 2 * x); } };
  const S = [...new Set(sel)];
  for (const v of S) { D[v] = 0; W[v] = 1; }
  if (!(radius > 0)) return W;
  if (connected) {
    // shortest distance along edges (a plain heap of [distance, vertex])
    const heap = S.map((v) => [0, v]);
    const pop = () => { let bi = 0; for (let i = 1; i < heap.length; i++) if (heap[i][0] < heap[bi][0]) bi = i; return heap.splice(bi, 1)[0]; };
    while (heap.length) {
      const [d, v] = pop();
      if (d > D[v] || d > radius) continue;
      for (const h of m.outgoing(v)) {
        const w = m.head(h), nd = d + len(sub(P3(m, w), P3(m, v)));
        if (nd < D[w] && nd <= radius) { D[w] = nd; heap.push([nd, w]); }
      }
    }
  } else {
    // straight distance to the nearest selected vertex (a grid of the selected ones)
    const cell = radius, grid = new Map(), key = (x, y, z) => x + ',' + y + ',' + z;
    for (const v of S) { const c = P3(m, v).map((x) => Math.floor(x / cell)); const k = key(...c); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(v); }
    for (let v = 0; v < m.nv; v++) {
      if (m.vertDead(v) || D[v] === 0) continue;
      const p = P3(m, v), c = p.map((x) => Math.floor(x / cell));
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) for (const s of grid.get(key(c[0] + dx, c[1] + dy, c[2] + dz)) || []) { const d = len(sub(P3(m, s), p)); if (d < D[v]) D[v] = d; }
    }
  }
  for (let v = 0; v < m.nv; v++) if (D[v] > 0 && D[v] <= radius) W[v] = f(D[v] / radius);
  return W;
}
