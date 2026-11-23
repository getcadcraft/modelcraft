/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh/curve.js — curve objects (0.7 MD.6), DOM-free: Bézier, NURBS and poly splines that make a mesh by being given a
 * thickness (bevel), a width (extrude), a taper along them, or — closed and flat — filled. A curve object is a mesh
 * definition carrying `curve` (this module's plain data, kept in undo and the file); the mesh that shows is made from it
 * (mesh/mod-eval.js, before the modifiers). Our own, from the published methods: cubic Bézier segments; NURBS by de Boor's
 * algorithm in homogeneous coordinates (L. Piegl, W. Tiller, "The NURBS Book", 2nd ed., algorithms A2.1 and A4.1);
 * rotation-minimizing frames by double reflection (W. Wang, B. Jüttler, D. Zheng, Y. Liu, "Computation of Rotation
 * Minimizing Frames", ACM TOG 27(1), 2008); fills by ear clipping (earcut.js).
 *
 *   curve = { dim: '3d' | '2d', fill: bool (2d, closed splines), extrude, bevel: {depth, resolution}, caps: bool,
 *             taper: [scale…] (evenly along each spline, ≥ 1 value), splines: [spline], text?: {string, height, weight} }
 *   spline = { type: 'bezier' | 'nurbs' | 'poly', cyclic, resolution (samples per segment), order (nurbs, 2…6),
 *              points: [{p: [x,y,z], hl, hr (bezier handles), h: 'auto' | 'vector' | 'free', w (nurbs weight), radius, tilt}] }
 *
 *   newCurve(kind, size) · cleanCurve(x) (untrusted: types, counts, finite numbers; null when unusable)
 *   handles(spline) → the spline with auto / vector handles placed · sample(spline) → [{p, t, s, radius, tilt}], closed
 *   curveMesh(curve) → Mesh · curveLines(curve) → Float32Array of segments (the curve itself, for the view)
 *   insertAfter(spline, i) (split a segment at its middle, the shape kept for Bézier) · fromPoints(pts, closed) (a Bézier
 *   through points, auto handles) · reverse(spline) · toType(spline, type)
 */
import { Mesh } from '../mesh.js';
import { earcut } from '../earcut.js';
import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, lerp3 as lerp, scale3 as mul, sub3 as sub } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { ringArea as area2 } from '../geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const TYPES = ['bezier', 'nurbs', 'poly'], HANDLES = ['auto', 'vector', 'free'];
const LIMITS = { splines: 500, points: 20000, resolution: 64 };
const norm = (a) => { const l = len(a); return l > 0 ? mul(a, 1 / l) : [0, 0, 0]; };

// ---- data ----
const fin = (x, d, lim = 1e7) => (typeof x === 'number' && Number.isFinite(x) && Math.abs(x) <= lim ? x : d);
const v3 = (x, d = null) => (Array.isArray(x) && x.length === 3 && x.every((y) => typeof y === 'number' && Number.isFinite(y) && Math.abs(y) <= 1e7) ? x.slice() : d);
/** A curve from a file or the clipboard (untrusted): bad points and splines left out; null when nothing is left. */
export function cleanCurve(x) {
  if (!x || typeof x !== 'object' || !Array.isArray(x.splines)) return null;
  const splines = [];
  let total = 0;
  for (const s of x.splines.slice(0, LIMITS.splines)) {
    if (!s || typeof s !== 'object' || !TYPES.includes(s.type) || !Array.isArray(s.points)) continue;
    const points = [];
    for (const q of s.points) {
      if (total >= LIMITS.points) break;
      const p = v3(q?.p);
      if (!p) continue;
      points.push({ p, hl: v3(q.hl, p.slice()), hr: v3(q.hr, p.slice()), h: HANDLES.includes(q.h) ? q.h : 'auto', w: Math.max(1e-6, fin(q.w, 1, 1e6)), radius: Math.max(0, fin(q.radius, 1, 1e6)), tilt: fin(q.tilt, 0, 1e4) });
      total++;
    }
    if (points.length < 2) continue;
    splines.push({ type: s.type, cyclic: !!s.cyclic, resolution: Math.round(Math.max(1, Math.min(LIMITS.resolution, fin(s.resolution, 12)))), order: Math.round(Math.max(2, Math.min(6, fin(s.order, 4)))), points });
  }
  if (!splines.length) return null;
  const taper = Array.isArray(x.taper) ? x.taper.slice(0, 64).map((t) => Math.max(0, fin(t, 1, 1e4))) : [1];
  const text = x.text && typeof x.text === 'object' && typeof x.text.string === 'string'
    ? { string: x.text.string.replace(/[\u0000-\u0009\u000b-\u001f]/g, ' ').slice(0, 2000), height: Math.max(1e-6, fin(x.text.height, 1)), weight: Math.max(0.01, Math.min(0.5, fin(x.text.weight, 0.14))) } : null;
  return {
    dim: x.dim === '2d' ? '2d' : '3d', fill: !!x.fill, extrude: Math.max(0, fin(x.extrude, 0, 1e6)),
    bevel: { depth: Math.max(0, fin(x.bevel?.depth, 0, 1e6)), resolution: Math.round(Math.max(0, Math.min(16, fin(x.bevel?.resolution, 4)))) },
    caps: x.caps !== false, taper: taper.length ? taper : [1], splines, ...(text ? { text } : {}),
  };
}
const pt = (p, extra = {}) => ({ p, hl: p.slice(), hr: p.slice(), h: 'auto', w: 1, radius: 1, tilt: 0, ...extra });
/** A new curve of `size` (m): 'bezier' (an S), 'bezier-circle', 'nurbs' (an S), 'nurbs-circle', 'path' (a straight NURBS). */
export function newCurve(kind, size = 1) {
  const s = size, base = { dim: '3d', fill: false, extrude: 0, bevel: { depth: s / 40, resolution: 4 }, caps: true, taper: [1] };
  if (kind === 'bezier-circle' || kind === 'nurbs-circle') {
    const r = s / 2;
    if (kind === 'bezier-circle') {
      const k = r * 0.5522847498;   // the cubic that best fits a quarter circle
      const P = [[r, 0, 0], [0, r, 0], [-r, 0, 0], [0, -r, 0]], T = [[0, 1, 0], [-1, 0, 0], [0, -1, 0], [1, 0, 0]];
      return { ...base, dim: '2d', splines: [{ type: 'bezier', cyclic: true, resolution: 12, order: 4, points: P.map((p, i) => pt(p, { hl: sub(p, mul(T[i], k)), hr: add(p, mul(T[i], k)), h: 'free' })) }] };
    }
    // eight points on a regular octagon, order 3, uniform knots, equal weights: the curve keeps between 0.924 and 0.927 of
    // the octagon's radius (round to 0.3 %), so the octagon is made 1 / 0.9254 of the circle's radius
    const R = r / 0.9254, P = Array.from({ length: 8 }, (_, i) => [R * Math.cos((i * Math.PI) / 4), R * Math.sin((i * Math.PI) / 4), 0]);
    return { ...base, dim: '2d', splines: [{ type: 'nurbs', cyclic: true, resolution: 12, order: 3, points: P.map((p) => pt(p)) }] };
  }
  if (kind === 'path') return { ...base, splines: [{ type: 'nurbs', cyclic: false, resolution: 12, order: 4, points: [0, 1, 2, 3, 4].map((i) => pt([((i - 2) * s) / 4, 0, 0])) }] };
  const P = [[-s / 2, 0, 0], [-s / 6, s / 4, 0], [s / 6, -s / 4, 0], [s / 2, 0, 0]];
  return { ...base, splines: [{ type: kind === 'nurbs' ? 'nurbs' : 'bezier', cyclic: false, resolution: 12, order: 4, points: P.map((p) => pt(p)) }] };
}

// ---- evaluation ----
/** Place auto and vector handles (free ones are kept), as a copy. */
export function handles(sp) {
  const s = structuredClone(sp), n = s.points.length;
  for (let i = 0; i < n; i++) {
    const q = s.points[i];
    if (q.h === 'free') continue;
    const prev = i > 0 ? s.points[i - 1].p : s.cyclic ? s.points[n - 1].p : null, next = i < n - 1 ? s.points[i + 1].p : s.cyclic ? s.points[0].p : null;
    if (q.h === 'vector') {
      q.hl = prev ? lerp(q.p, prev, 1 / 3) : q.p.slice();
      q.hr = next ? lerp(q.p, next, 1 / 3) : q.p.slice();
      continue;
    }
    // auto: along the line from the point before to the point after, a third of each side's length
    const d = norm(sub(next || q.p, prev || q.p));
    q.hl = prev ? sub(q.p, mul(d, len(sub(q.p, prev)) / 3)) : q.p.slice();
    q.hr = next ? add(q.p, mul(d, len(sub(next, q.p)) / 3)) : q.p.slice();
  }
  return s;
}
const bez = (a, b, c, d, t) => { const u = 1 - t; return [0, 1, 2].map((k) => u * u * u * a[k] + 3 * u * u * t * b[k] + 3 * u * t * t * c[k] + t * t * t * d[k]); };
/** The knots of a NURBS spline: clamped (open) or uniform periodic (cyclic, points wrapped). */
function knots(n, k, cyclic) {
  if (cyclic) return Array.from({ length: n + k }, (_, i) => i);
  const m = n + k, U = [];
  for (let i = 0; i < m; i++) U.push(i < k ? 0 : i >= n ? n - k + 1 : i - k + 1);
  return U;
}
/** de Boor at u (homogeneous points [x w, y w, z w, w]). */
function deBoor(P, U, k, u) {
  const p = k - 1;
  let s = p;
  while (s < P.length - 1 && u >= U[s + 1]) s++;
  const d = [];
  for (let j = 0; j <= p; j++) d.push(P[s - p + j].slice());
  for (let r = 1; r <= p; r++) for (let j = p; j >= r; j--) {
    const i = s - p + j, den = U[i + p - r + 1] - U[i], a = den > 0 ? (u - U[i]) / den : 0;
    for (let c = 0; c < 4; c++) d[j][c] = (1 - a) * d[j - 1][c] + a * d[j][c];
  }
  const q = d[p];
  return [q[0] / q[3], q[1] / q[3], q[2] / q[3]];
}
/**
 * Points along a spline with their tangents, arc length (s, 0…1) and the radius and tilt between its control points.
 * → {pts: [{p, t, s, radius, tilt}], closed}
 */
export function sample(sp) {
  const n = sp.points.length, out = [];
  if (n < 2) return { pts: [], closed: false };
  const res = Math.max(1, sp.resolution || 12);
  const attr = (i, j, f) => ({ radius: sp.points[i].radius + (sp.points[j].radius - sp.points[i].radius) * f, tilt: sp.points[i].tilt + (sp.points[j].tilt - sp.points[i].tilt) * f });
  if (sp.type === 'poly') {
    const segs = sp.cyclic ? n : n - 1;
    for (let i = 0; i < segs; i++) out.push({ p: sp.points[i].p.slice(), ...attr(i, i, 0) });
    if (!sp.cyclic) out.push({ p: sp.points[n - 1].p.slice(), ...attr(n - 1, n - 1, 0) });
  } else if (sp.type === 'bezier') {
    const s = handles(sp), segs = s.cyclic ? n : n - 1;
    for (let i = 0; i < segs; i++) {
      const a = s.points[i], b = s.points[(i + 1) % n];
      for (let k = 0; k < res; k++) { const f = k / res; out.push({ p: bez(a.p, a.hr, b.hl, b.p, f), ...attr(i, (i + 1) % n, f) }); }
    }
    if (!s.cyclic) out.push({ p: s.points[n - 1].p.slice(), ...attr(n - 1, n - 1, 0) });
  } else {
    const k = Math.min(sp.order || 4, n + (sp.cyclic ? 0 : 0));
    const H = sp.points.map((q) => [q.p[0] * q.w, q.p[1] * q.w, q.p[2] * q.w, q.w]);
    const P = sp.cyclic ? H.concat(H.slice(0, k - 1)) : H;
    const kk = Math.min(k, P.length);
    const U = knots(P.length, kk, sp.cyclic);
    const u0 = U[kk - 1], u1 = U[P.length], steps = res * (sp.cyclic ? n : n - 1);
    for (let i = 0; i <= steps; i++) {
      if (sp.cyclic && i === steps) break;
      const u = u0 + ((u1 - u0) * i) / steps, f = (i / steps) * (sp.cyclic ? n : n - 1), j = Math.min(n - 1, Math.floor(f));
      out.push({ p: deBoor(P, U, kk, Math.min(u, u1 - 1e-12 * (u1 - u0 || 1))), ...attr(j % n, (j + 1) % n, f - j) });
    }
    if (!sp.cyclic) out[out.length - 1].p = deBoor(P, U, kk, u1 - 1e-12 * (u1 - u0 || 1));
  }
  // drop repeated points, then tangents and arc length
  const pts = [];
  for (const q of out) if (!pts.length || len(sub(q.p, pts[pts.length - 1].p)) > 1e-12) pts.push(q);
  if (sp.cyclic && pts.length > 1 && len(sub(pts[0].p, pts[pts.length - 1].p)) <= 1e-12) pts.pop();
  const m = pts.length, closed = !!sp.cyclic && m > 2;
  let L = 0;
  const acc = [0];
  for (let i = 1; i < m; i++) { L += len(sub(pts[i].p, pts[i - 1].p)); acc.push(L); }
  if (closed) L += len(sub(pts[0].p, pts[m - 1].p));
  for (let i = 0; i < m; i++) {
    const a = i > 0 ? pts[i - 1].p : closed ? pts[m - 1].p : pts[i].p, b = i < m - 1 ? pts[i + 1].p : closed ? pts[0].p : pts[i].p;
    pts[i].t = norm(sub(b, a));
    pts[i].s = L > 0 ? acc[i] / L : 0;
  }
  return { pts, closed, length: L };
}

/** Rotation-minimizing frames along the points (double reflection); a closed curve's left-over twist spread evenly. */
function frames(pts, closed, up = null) {
  const m = pts.length, R = new Array(m);
  const t0 = pts[0].t;
  let r = up && Math.abs(dot(up, t0)) < 0.999 ? norm(sub(up, mul(t0, dot(up, t0)))) : (() => { const a = Math.abs(t0[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0]; return norm(cross(cross(t0, a), t0)); })();
  R[0] = r;
  for (let i = 0; i + 1 < m; i++) {
    const v1 = sub(pts[i + 1].p, pts[i].p), c1 = dot(v1, v1);
    if (!(c1 > 0)) { R[i + 1] = r; continue; }
    const rL = sub(r, mul(v1, (2 / c1) * dot(v1, r))), tL = sub(pts[i].t, mul(v1, (2 / c1) * dot(v1, pts[i].t)));
    const v2 = sub(pts[i + 1].t, tL), c2 = dot(v2, v2);
    r = c2 > 0 ? sub(rL, mul(v2, (2 / c2) * dot(v2, rL))) : rL;
    r = norm(sub(r, mul(pts[i + 1].t, dot(r, pts[i + 1].t))));
    R[i + 1] = r;
  }
  if (closed && m > 2) {
    // carry the last frame round to the start: the angle it misses by is undone a little at each point
    const v1 = sub(pts[0].p, pts[m - 1].p), c1 = dot(v1, v1);
    let rr = R[m - 1];
    if (c1 > 0) { const rL = sub(rr, mul(v1, (2 / c1) * dot(v1, rr))), tL = sub(pts[m - 1].t, mul(v1, (2 / c1) * dot(v1, pts[m - 1].t))), v2 = sub(pts[0].t, tL), c2 = dot(v2, v2); rr = c2 > 0 ? sub(rL, mul(v2, (2 / c2) * dot(v2, rL))) : rL; }
    const b0 = cross(pts[0].t, R[0]), miss = Math.atan2(dot(rr, b0), dot(rr, R[0]));
    for (let i = 0; i < m; i++) R[i] = rotate(R[i], pts[i].t, -miss * pts[i].s);
  }
  return R.map((x, i) => { const rt = rotate(x, pts[i].t, pts[i].tilt || 0); return { n: rt, b: cross(pts[i].t, rt) }; });
}
const rotate = (v, axis, a) => { const c = Math.cos(a), s = Math.sin(a), k = dot(axis, v), x = cross(axis, v); return [v[0] * c + x[0] * s + axis[0] * k * (1 - c), v[1] * c + x[1] * s + axis[1] * k * (1 - c), v[2] * c + x[2] * s + axis[2] * k * (1 - c)]; };

/** The taper's scale at s (0…1): its values evenly along, joined smoothly (Catmull-Rom). */
function taperAt(taper, s) {
  const n = taper.length;
  if (n === 1) return taper[0];
  const f = Math.max(0, Math.min(1, s)) * (n - 1), i = Math.min(n - 2, Math.floor(f)), t = f - i;
  const p0 = taper[Math.max(0, i - 1)], p1 = taper[i], p2 = taper[i + 1], p3 = taper[Math.min(n - 1, i + 2)];
  return Math.max(0, 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t));
}
/** The cross-section: bevel round (a circle, or a stadium with extrude), or a ribbon (extrude only). → {pts: [[x, y]], closed} */
function profile(depth, res, extrude) {
  const q = Math.max(1, res + 1);   // segments per quarter
  if (depth > 0) {
    const out = [];
    if (extrude > 0) {
      for (let i = 0; i <= 2 * q; i++) { const a = -Math.PI / 2 + (Math.PI * i) / (2 * q); out.push([depth * Math.cos(a), extrude + depth * Math.sin(a)]); }
      for (let i = 0; i <= 2 * q; i++) { const a = Math.PI / 2 + (Math.PI * i) / (2 * q); out.push([depth * Math.cos(a), -extrude + depth * Math.sin(a)]); }
    } else for (let i = 0; i < 4 * q; i++) { const a = (2 * Math.PI * i) / (4 * q); out.push([depth * Math.cos(a), depth * Math.sin(a)]); }
    return { pts: out, closed: true };
  }
  if (extrude > 0) return { pts: [[0, -extrude], [0, extrude]], closed: false };
  return null;
}

/** The mesh a curve makes. */
export function curveMesh(curve) {
  const P = [], F = [];
  const fill = curve.dim === '2d' && curve.fill;
  const loops = [];
  for (const sp of curve.splines) {
    const S = sample(sp);
    if (S.pts.length < 2) continue;
    if (fill && S.closed) { loops.push(S.pts.map((q) => [q.p[0], q.p[1]])); continue; }
    sweep(S, curve, P, F);
  }
  if (loops.length) filled(loops, curve, P, F);
  const m = Mesh.fromLists(P, F);
  return m;
}
function sweep(S, curve, P, F) {
  const pr = profile(curve.bevel.depth, curve.bevel.resolution, curve.extrude);
  if (!pr) return;
  const fr = frames(S.pts, S.closed, curve.dim === '2d' ? [0, 0, 1] : null);
  const base = P.length, np = pr.pts.length, m = S.pts.length, f0 = F.length;
  for (let i = 0; i < m; i++) {
    const q = S.pts[i], k = q.radius * taperAt(curve.taper, q.s), { n, b } = fr[i];
    // a flat curve: the profile's x along the curve's side in its plane (b), its y up (n = +z)
    for (const [x, y] of pr.pts) P.push(add(q.p, add(mul(b, -x * k), mul(n, y * k))));
  }
  const ring = (i) => base + (i % m) * np;
  const segs = S.closed ? m : m - 1, pe = pr.closed ? np : np - 1;
  for (let i = 0; i < segs; i++) for (let j = 0; j < pe; j++) {
    const a = ring(i) + j, b2 = ring(i) + ((j + 1) % np), c = ring(i + 1) + ((j + 1) % np), d = ring(i + 1) + j;
    F.push([a, d, c, b2]);
  }
  if (!S.closed && pr.closed && curve.caps) {
    F.push(Array.from({ length: np }, (_, j) => ring(0) + j));
    F.push(Array.from({ length: np }, (_, j) => ring(m - 1) + (np - 1 - j)));
  }
  // facing out: the first side face's normal against the way from the curve to it
  if (pr.closed && f0 < F.length) {
    const [a, b2, c] = F[f0], nrm = cross(sub(P[b2], P[a]), sub(P[c], P[a]));
    if (dot(nrm, sub(P[a], S.pts[0].p)) < 0) for (let i = f0; i < F.length; i++) F[i].reverse();
  }
}
const ccw = (f, a, b, c) => (f[b * 2] - f[a * 2]) * (f[c * 2 + 1] - f[a * 2 + 1]) - (f[c * 2] - f[a * 2]) * (f[b * 2 + 1] - f[a * 2 + 1]);
const inside = (p, L) => { let c = false; for (let i = 0, j = L.length - 1; i < L.length; j = i++) { const a = L[i], b = L[j]; if (a[1] > p[1] !== b[1] > p[1] && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
/** Each vertex of a loop moved d along its outward side (mitred, limited to 4 × d at sharp corners). */
function offsetLoop(L, d) {
  const n = L.length, out = [];
  for (let i = 0; i < n; i++) {
    const a = L[(i + n - 1) % n], p = L[i], b = L[(i + 1) % n];
    let e1 = [p[0] - a[0], p[1] - a[1]], e2 = [b[0] - p[0], b[1] - p[1]];
    const l1 = Math.hypot(e1[0], e1[1]) || 1, l2 = Math.hypot(e2[0], e2[1]) || 1;
    e1 = [e1[0] / l1, e1[1] / l1]; e2 = [e2[0] / l2, e2[1] / l2];
    // outward = to the right of a counter-clockwise outline
    const n1 = [e1[1], -e1[0]], n2 = [e2[1], -e2[0]];
    let m = [n1[0] + n2[0], n1[1] + n2[1]];
    const ml = Math.hypot(m[0], m[1]);
    m = ml > 1e-9 ? [m[0] / ml, m[1] / ml] : n1;
    const c = Math.max(0.25, m[0] * n1[0] + m[1] * n1[1]);
    out.push([p[0] + (m[0] * d) / c, p[1] + (m[1] * d) / c]);
  }
  return out;
}
/** Closed flat loops filled: outlines with their holes, given a thickness (extrude) and a rounded edge (bevel). */
function filled(loops, curve, P, F) {
  // nesting: a loop inside an even number of others is an outline, else a hole of the smallest outline round it
  const info = loops.map((L, i) => ({ L, i, depth: loops.filter((M, j) => j !== i && inside(L[0], M)).length, area: Math.abs(area2(L)) }));
  for (const x of info) x.L = (x.depth % 2 === 0) === area2(x.L) > 0 ? x.L : x.L.slice().reverse();   // outlines CCW, holes CW
  const outers = info.filter((x) => x.depth % 2 === 0);
  const e = curve.extrude, d = curve.bevel.depth, q = Math.max(1, curve.bevel.resolution + 1);
  // the edge's profile, bottom to top: [outward offset, z]
  const prof = [];
  if (d > 0) {
    for (let i = 0; i <= q; i++) { const a = -Math.PI / 2 + (Math.PI / 2) * (i / q); prof.push([d * Math.cos(a), -e + d * Math.sin(a)]); }
    for (let i = 0; i <= q; i++) { const a = (Math.PI / 2) * (i / q); prof.push([d * Math.cos(a), e + d * Math.sin(a)]); }
    if (e === 0) prof.splice(q + 1, 1);   // the two middle rings are the same
  } else if (e > 0) prof.push([0, -e], [0, e]);
  for (const o of outers) {
    const holes = info.filter((h) => h.depth === o.depth + 1 && inside(h.L[0], o.L) && !info.some((x) => x !== o && x.depth === o.depth && x.area < o.area && inside(h.L[0], x.L) && inside(x.L[0], o.L)));
    const group = [o, ...holes];
    // side rings
    const ringsOf = group.map((x) => {
      const rings = prof.map(([off, z]) => { const base = P.length; for (const [px, py] of offsetLoop(x.L, off)) P.push([px, py, z]); return base; });
      const n = x.L.length;
      for (let r = 0; r + 1 < rings.length; r++) for (let i = 0; i < n; i++) F.push([rings[r] + i, rings[r] + ((i + 1) % n), rings[r + 1] + ((i + 1) % n), rings[r + 1] + i]);
      return { rings, n };
    });
    // caps: the top and bottom rings (or one face at z = 0 when it has no thickness), with the holes cut by ear clipping
    const flat = [], holeIdx = [], idx = [];
    group.forEach((x, g) => { if (g) holeIdx.push(flat.length / 2); x.L.forEach(([px, py], i) => { flat.push(px, py); idx.push([g, i]); }); });
    const tri = earcut(flat, holeIdx);
    const vAt = (g, i, which) => { const R = ringsOf[g]; return R.rings.length ? (which ? R.rings[R.rings.length - 1] : R.rings[0]) + i : null; };
    if (!prof.length) {
      const base = P.length;
      group.forEach((x) => x.L.forEach(([px, py]) => P.push([px, py, 0])));
      for (let i = 0; i < tri.length; i += 3) F.push(ccw(flat, tri[i], tri[i + 1], tri[i + 2]) < 0 ? [base + tri[i], base + tri[i + 2], base + tri[i + 1]] : [base + tri[i], base + tri[i + 1], base + tri[i + 2]]);
      continue;
    }
    for (let i = 0; i < tri.length; i += 3) {
      let [a, b, c] = [idx[tri[i]], idx[tri[i + 1]], idx[tri[i + 2]]];
      if (ccw(flat, tri[i], tri[i + 1], tri[i + 2]) < 0) [b, c] = [c, b];   // the top faces up, the bottom down
      F.push([vAt(a[0], a[1], 1), vAt(b[0], b[1], 1), vAt(c[0], c[1], 1)]);
      F.push([vAt(c[0], c[1], 0), vAt(b[0], b[1], 0), vAt(a[0], a[1], 0)]);
    }
  }
}

/** The curve itself as line segments (the splines as sampled), for the view when it makes no faces. */
export function curveLines(curve) {
  const out = [];
  for (const sp of curve.splines) {
    const { pts, closed } = sample(sp);
    for (let i = 0; i + 1 < pts.length; i++) out.push(...pts[i].p, ...pts[i + 1].p);
    if (closed && pts.length > 2) out.push(...pts[pts.length - 1].p, ...pts[0].p);
  }
  return Float32Array.from(out);
}

// ---- editing helpers ----
/** A point added in the middle of segment i → i + 1: for Bézier by de Casteljau (the shape unchanged), else the midpoint. */
export function insertAfter(sp, i) {
  const s = sp.type === 'bezier' ? handles(sp) : structuredClone(sp), n = s.points.length, j = (i + 1) % n;
  if (!s.cyclic && i >= n - 1) return sp;
  const a = s.points[i], b = s.points[j];
  let np;
  if (s.type === 'bezier') {
    const p01 = lerp(a.p, a.hr, 0.5), p12 = lerp(a.hr, b.hl, 0.5), p23 = lerp(b.hl, b.p, 0.5), p012 = lerp(p01, p12, 0.5), p123 = lerp(p12, p23, 0.5), mid = lerp(p012, p123, 0.5);
    a.hr = p01; b.hl = p23;
    if (a.h === 'auto') a.h = 'free';
    if (b.h === 'auto') b.h = 'free';
    np = pt(mid, { hl: p012, hr: p123, h: 'free', radius: (a.radius + b.radius) / 2, tilt: (a.tilt + b.tilt) / 2 });
  } else np = pt(lerp(a.p, b.p, 0.5), { w: (a.w + b.w) / 2, radius: (a.radius + b.radius) / 2, tilt: (a.tilt + b.tilt) / 2 });
  s.points.splice(i + 1, 0, np);
  return s;
}
/** A Bézier spline through points (auto handles). */
export function fromPoints(pts, closed = false) { return { type: 'bezier', cyclic: closed, resolution: 12, order: 4, points: pts.map((p) => pt(p.slice())) }; }
/** The points the other way round (handles swapped). */
export function reverse(sp) { const s = structuredClone(sp); s.points.reverse(); for (const q of s.points) [q.hl, q.hr] = [q.hr, q.hl]; return s; }
/** A spline as another type (the control points kept; Bézier handles placed automatically). */
export function toType(sp, type) { const s = structuredClone(sp); s.type = type; if (type === 'bezier') for (const q of s.points) if (q.h === 'free') q.h = 'auto'; return s; }
