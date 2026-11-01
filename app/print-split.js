/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-split.js — split a model too big for the printer into pieces that fit, with connectors and part numbers
 * (0.8 SU.929, session sx-split; asked as an alternative to a splitter whose licence lives on a USB stick). DOM-free;
 * ModelCraft's alone (PartCraft gets it through its own sync script, never by hand). Booleans by manifold-3d.
 *
 * Meshes are printer meshes (print3d.js): millimetres, Z up, triangles wound counter-clockwise seen from outside.
 * `tris` may be [[p, p, p] …] or print-mc.js's [{p: [p, p, p]} …].
 *
 *   SPLIT_DEFAULTS                       every option below and its default
 *   gridForBed(size, bed, {extra, maxN}) → {counts [nx, ny, nz], cell [mm ×3], pieces, perm, slack} | null: the fewest equal
 *                                          cells whose size (+ `extra` mm for a male connector on a cut side) fits the bed in
 *                                          some axis order (a piece may lie on its side)
 *   gridPlanes(lo, hi, counts)           → planes [{n, d, axis}] cutting the box lo–hi into counts cells (n·x = d)
 *   splitForPrint(M, tris, opts)         → the result below. M = the manifold-3d module (solids.js manifold()).
 *       opts: planes [{n, d}] (world mm) | bed [x, y, z] (a grid that fits it) — planes win
 *             connector peg | key | dovetail | dowel | magnet | none; clearance (mm, 0.2, per side); wall (mm, 2: the least
 *             material around any connector or hole); perFace (2: connectors per touching area, spread along it)
 *             pegD 5, pegL 6 · keyW 5, keyL 6 · dovetailW 6 (root), dovetailH 4, dovetailAngle 15° · dowelD 5, dowelL 20
 *             (holes dowelL/2 + clearance deep each side, pins made too) · magnetD 6, magnetH 3 (a pocket each side)
 *             numbers (true: the joint's number engraved on both mating faces), textH 5 (shrinks to textMin 2.5 to fit),
 *             textDepth 0.6 · segments 32 (round connectors) · samples 64 (grid across a cut face)
 *             place {'a-b': [[x, y, z] …]} (world mm): connector points for the joint between pieces a and b instead of the
 *             automatic ones (each is still checked; one that doesn't fit is reported, not made)
 *   orientForBed(mesh, bed)              → {mesh, perm, fits}: the piece turned (90° steps) so it fits, standing on z = 0
 *   assemblySheet(res, {width, explode}) → SVG text: the pieces pulled apart (isometric), numbered, and the list
 *   splitFiles(res, {format stl|3mf, name, bed, sheet, extra}) → [{name, data}] (each piece laid on the bed, pins,
 *                                          assembly.svg, assembly.txt); splitZip(…) → the same as one stored zip (print3d.js)
 *
 * Result: {ok (every piece passes the print check), pieces [{number, tris (world mm), mesh (welded), check (printCheck), lo,
 *   hi, size, volume, fits, joints [joint ids]}], pins [{number, tris, mesh, check}], joints [{id, a, b, label, plane, area,
 *   connectors [{kind, at, n, dir? (a dovetail's slide), open? (its open ends: 1 = a stopped dovetail)}], labels [{at, h}],
 *   notes ['small' (no connector fits) | 'no-label' (no room for the number) | 'placed-misfit' (a placed spot didn't fit)]}],
 *   planes, counts, volume (the original's), size, notes ['dovetail-directions'], opts}
 *
 * How it works: the model is cut by each plane (manifold splitByPlane); a cell that falls apart is one piece per part. For
 * each plane the cut through the ORIGINAL model is sampled on a grid in the plane (inside by crossings, distance to the
 * outline by a bucketed search, distance to the other cut planes from their equations); the touching areas between two
 * pieces are the connected sample regions. Connector spots are the most-inside samples of the region's slices along its long
 * axis, at least wall + clearance + their own size from the outline, far enough from every other cut plane that their holes
 * never meet that plane's, and checked in 3D along their depth (inside the model, wall all round). The male part goes on the
 * piece below the plane (the plane's normal points out of it). Numbers are our stroke font, engraved, reading the right way
 * on each face. Then piece = (cut ∪ male parts) − holes − numbers, in one manifold pass per piece.
 */
import { textStrokes, textWidth } from './strokefont.js';
import { triMesh, rayNearest, nearestDist } from './print-geom.js';
import { meshFromTriangles, weld, printCheck, stlBinary, threeMF, zipStored } from './print3d.js';
import { t } from './i18n.js';

export const SPLIT_DEFAULTS = Object.freeze({
  connector: 'peg', clearance: 0.2, wall: 2, perFace: 2,
  pegD: 5, pegL: 6, keyW: 5, keyL: 6, dovetailW: 6, dovetailH: 4, dovetailAngle: 15,
  dowelD: 5, dowelL: 20, magnetD: 6, magnetH: 3,
  numbers: true, textH: 5, textMin: 2.5, textDepth: 0.6,
  segments: 32, samples: 64, place: null,
});
export const CONNECTORS = ['peg', 'key', 'dovetail', 'dowel', 'magnet', 'none'];

// ---------------------------------------------------------------- small vector helpers (allocation is fine: per joint, not per ray)
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (a, b, s = 1) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const SIMPLIFY = 1e-3;   // mm
const SNAP = 2e-4;   // mm: how far a 32-bit corner may lie off a plane the split made and still go back onto it
const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];

const plainTris = (tris) => tris.map((x) => (Array.isArray(x) ? x : x.p));
function bbox(tris) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const tri of tris) for (const p of tri) for (let k = 0; k < 3; k++) { if (p[k] < lo[k]) lo[k] = p[k]; if (p[k] > hi[k]) hi[k] = p[k]; }
  return { lo, hi };
}

// ---------------------------------------------------------------- the grid that fits a bed

export function gridForBed(size, bed, { extra = 0, maxN = 32 } = {}) {
  if (!bed || bed.length !== 3 || bed.some((b) => !(b > 0))) return null;
  const big = Math.max(...bed);
  const lo = size.map((s) => Math.max(1, Math.ceil(s / big - 1e-9)));
  let best = null;
  for (let nx = lo[0]; nx <= maxN; nx++) {
    if (best && nx * lo[1] * lo[2] > best.pieces) break;
    for (let ny = lo[1]; ny <= maxN; ny++) {
      if (best && nx * ny * lo[2] > best.pieces) break;
      for (let nz = lo[2]; nz <= maxN; nz++) {
        const pieces = nx * ny * nz;
        if (best && pieces > best.pieces) break;
        const n = [nx, ny, nz], cell = size.map((s, k) => s / n[k]);
        const ext = cell.map((c, k) => c + (n[k] > 1 ? extra : 0));
        for (let pi = 0; pi < PERMS.length; pi++) {
          const p = PERMS[pi];
          if (!ext.every((e, k) => e <= bed[p[k]] + 1e-9)) continue;
          const slack = Math.min(...ext.map((e, k) => bed[p[k]] - e));
          // fewer pieces first; then no turning; then the most room left
          const better = !best || pieces < best.pieces || (pieces === best.pieces && ((pi === 0) > (best.permIndex === 0) || ((pi === 0) === (best.permIndex === 0) && slack > best.slack + 1e-9)));
          if (better) best = { counts: n, cell, pieces, perm: p.slice(), permIndex: pi, slack };
        }
        if (best && best.pieces === pieces) break;
      }
    }
  }
  if (best) delete best.permIndex;
  return best;
}

export function gridPlanes(lo, hi, counts) {
  const out = [];
  for (let k = 0; k < 3; k++) for (let i = 1; i < counts[k]; i++) {
    const n = [0, 0, 0]; n[k] = 1;
    out.push({ n, d: lo[k] + (hi[k] - lo[k]) * i / counts[k], axis: k });
  }
  return out;
}

// ---------------------------------------------------------------- manifold in and out

function toManifold(M, tris, o) {
  const key = new Map(), verts = [], idx = [];
  const vid = (p) => {
    const q = [p[0] - o[0], p[1] - o[1], p[2] - o[2]];
    const k = q.map((x) => Math.round(x * 1e5)).join(',');   // 10 nm in mm
    let i = key.get(k);
    if (i === undefined) { i = verts.length / 3; key.set(k, i); verts.push(q[0], q[1], q[2]); }
    return i;
  };
  for (const tri of tris) { const a = vid(tri[0]), b = vid(tri[1]), c = vid(tri[2]); if (a !== b && b !== c && a !== c) idx.push(a, b, c); }
  const mesh = new M.Mesh({ numProp: 3, vertProperties: new Float32Array(verts), triVerts: new Uint32Array(idx) });
  mesh.merge();
  const man = new M.Manifold(mesh);
  if (man.status() !== 'NoError' || man.isEmpty()) { man.delete?.(); const e = new Error('open'); e.code = 'open'; throw e; }
  return man;
}
/** A manifold's mesh as {positions (local mm, Float64Array), indices}. */
function localMesh(man) {
  const g = man.getMesh(), np = g.numProp, nv = g.vertProperties.length / np;
  const positions = new Float64Array(nv * 3);
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) positions[i * 3 + k] = g.vertProperties[i * np + k];
  return { positions, indices: new Uint32Array(g.triVerts) };
}
function worldTris(lm, o) {
  const P = lm.positions, I = lm.indices, out = [];
  const p = (i) => [P[i * 3] + o[0], P[i * 3 + 1] + o[1], P[i * 3 + 2] + o[2]];
  for (let k = 0; k < I.length; k += 3) out.push([p(I[k]), p(I[k + 1]), p(I[k + 2])]);
  return out;
}
const RAY = norm([0.3613, 0.4817, 0.7983]);   // a direction no model edge lines up with by accident
function insideT(T, p) {
  const hit = { tri: -1, back: 0 };
  const d = rayNearest(T, p[0], p[1], p[2], RAY[0], RAY[1], RAY[2], 0, Infinity, -1, hit);
  return d >= 0 && hit.back === 1;
}

// ---------------------------------------------------------------- a cut through the model, sampled in its plane

/** The plane's in-plane axes: V = world up projected (or world Y), U = V × n, so U × V = n. */
function planeBasis(n) {
  let v = [0, 0, 1];
  if (Math.abs(n[2]) > 0.9) v = [0, 1, 0];
  const s = dot(v, n);
  v = norm([v[0] - n[0] * s, v[1] - n[1] * s, v[2] - n[2] * s]);
  return { U: cross(v, n), V: v };
}

function sectionSegments(L, n, d, B) {
  const segs = [];
  for (const tri of L) {
    const s = tri.map((p) => dot(n, p) - d);
    const pos = s.map((x) => x >= 0);
    if (pos[0] === pos[1] && pos[1] === pos[2]) continue;
    const pts = [];
    for (let i = 0; i < 3; i++) {
      const j = (i + 1) % 3;
      if (pos[i] === pos[j]) continue;
      const k = s[i] / (s[i] - s[j]), p = add(tri[i], [tri[j][0] - tri[i][0], tri[j][1] - tri[i][1], tri[j][2] - tri[i][2]], k);
      pts.push(dot(p, B.U), dot(p, B.V));
    }
    if (pts.length === 4) segs.push(pts[0], pts[1], pts[2], pts[3]);
  }
  return segs;
}

/** Samples on a grid over the section: inside (crossings along each row) and distance to the outline (bucketed). */
function sampleSection(segs, samples) {
  const ns = segs.length / 4;
  if (!ns) return null;
  let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity;
  for (let i = 0; i < segs.length; i += 2) { u0 = Math.min(u0, segs[i]); u1 = Math.max(u1, segs[i]); v0 = Math.min(v0, segs[i + 1]); v1 = Math.max(v1, segs[i + 1]); }
  const step = Math.max(Math.max(u1 - u0, v1 - v0) / samples, 0.2);
  const nu = Math.max(1, Math.ceil((u1 - u0) / step)), nv = Math.max(1, Math.ceil((v1 - v0) / step));
  const inside = new Uint8Array(nu * nv), dist = new Float64Array(nu * nv);
  const cu = (u) => Math.min(nu - 1, Math.max(0, Math.floor((u - u0) / step)));
  const cv = (v) => Math.min(nv - 1, Math.max(0, Math.floor((v - v0) / step)));
  const rows = Array.from({ length: nv }, () => []), cells = Array.from({ length: nu * nv }, () => null);
  for (let s = 0; s < ns; s++) {
    const a = segs[s * 4], b = segs[s * 4 + 1], c = segs[s * 4 + 2], e = segs[s * 4 + 3];
    const j0 = cv(Math.min(b, e)), j1 = cv(Math.max(b, e)), i0 = cu(Math.min(a, c)), i1 = cu(Math.max(a, c));
    for (let j = j0; j <= j1; j++) { rows[j].push(s); for (let i = i0; i <= i1; i++) (cells[j * nu + i] ||= []).push(s); }
  }
  const xs = [];
  for (let j = 0; j < nv; j++) {
    const v = v0 + (j + 0.5) * step;
    xs.length = 0;
    for (const s of rows[j]) {
      const b = segs[s * 4 + 1], e = segs[s * 4 + 3];
      if ((b > v) === (e > v)) continue;
      const a = segs[s * 4], c = segs[s * 4 + 2];
      xs.push(a + (v - b) * (c - a) / (e - b));
    }
    xs.sort((p, q) => p - q);
    let k = 0;
    for (let i = 0; i < nu; i++) {
      const u = u0 + (i + 0.5) * step;
      while (k < xs.length && xs[k] < u) k++;
      inside[j * nu + i] = k & 1;
    }
  }
  const segD2 = (s, u, v) => {
    const a = segs[s * 4], b = segs[s * 4 + 1], dx = segs[s * 4 + 2] - a, dy = segs[s * 4 + 3] - b;
    const l2 = dx * dx + dy * dy, tt = l2 ? Math.max(0, Math.min(1, ((u - a) * dx + (v - b) * dy) / l2)) : 0;
    const x = a + dx * tt - u, y = b + dy * tt - v;
    return x * x + y * y;
  };
  // nearest outline segment per sample: exact in the cells the outline crosses, then carried across the grid by two
  // raster passes over the 8 neighbours (each candidate measured exactly); the 3D check measures connectors exactly anyway
  const near = new Int32Array(nu * nv).fill(-1), best = new Float64Array(nu * nv).fill(Infinity);
  const su = (i) => u0 + (i + 0.5) * step, sv = (j) => v0 + (j + 0.5) * step;
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const list = cells[j * nu + i];
    if (!list) continue;
    // the segments of this cell and its neighbours, so a sample right beside the outline starts exact
    for (let jj = Math.max(0, j - 1); jj <= Math.min(nv - 1, j + 1); jj++) for (let ii = Math.max(0, i - 1); ii <= Math.min(nu - 1, i + 1); ii++) {
      const id = jj * nu + ii;
      for (const sg of list) { const d2 = segD2(sg, su(ii), sv(jj)); if (d2 < best[id]) { best[id] = d2; near[id] = sg; } }
    }
  }
  const relax = (i, j, di, dj) => {
    const a = j + dj, b = i + di;
    if (a < 0 || b < 0 || a >= nv || b >= nu) return;
    const sg = near[a * nu + b], id = j * nu + i;
    if (sg < 0 || sg === near[id]) return;
    const d2 = segD2(sg, su(i), sv(j));
    if (d2 < best[id]) { best[id] = d2; near[id] = sg; }
  };
  for (let pass = 0; pass < 2; pass++) {
    for (let j = 0; j < nv; j++) {
      for (let i = 0; i < nu; i++) { relax(i, j, -1, 0); relax(i, j, -1, -1); relax(i, j, 0, -1); relax(i, j, 1, -1); }
      for (let i = nu - 1; i >= 0; i--) relax(i, j, 1, 0);
    }
    for (let j = nv - 1; j >= 0; j--) {
      for (let i = nu - 1; i >= 0; i--) { relax(i, j, 1, 0); relax(i, j, 1, 1); relax(i, j, 0, 1); relax(i, j, -1, 1); }
      for (let i = 0; i < nu; i++) relax(i, j, -1, 0);
    }
  }
  for (let id = 0; id < nu * nv; id++) if (inside[id]) dist[id] = Math.sqrt(best[id]);
  return { u0, v0, step, nu, nv, inside, dist };
}

// ---------------------------------------------------------------- connectors

/** What a connector needs: lateral = least distance from its axis to any outside (its size + clearance + wall). */
function connSpec(o) {
  const c = o.clearance, w = o.wall;
  switch (o.connector) {
    case 'peg': return { kind: 'peg', lateral: o.pegD / 2 + c + w, depthA: 0, depthB: o.pegL + c };
    case 'key': return { kind: 'key', lateral: o.keyW / 2 * Math.SQRT2 + c + w, depthA: 0, depthB: o.keyL + c };
    case 'dovetail': {
      const w1 = o.dovetailW + 2 * o.dovetailH * Math.tan(o.dovetailAngle * Math.PI / 180);
      return { kind: 'dovetail', lateral: w1 / 2 + c + w, depthA: 0, depthB: o.dovetailH + c, w1 };
    }
    case 'dowel': return { kind: 'dowel', lateral: o.dowelD / 2 + c + w, depthA: o.dowelL / 2 + c, depthB: o.dowelL / 2 + c };
    case 'magnet': return { kind: 'magnet', lateral: o.magnetD / 2 + c + w, depthA: o.magnetH + c, depthB: o.magnetH + c };
    default: return null;
  }
}

/** Column-major 4×4 of the frame (origin x, axes ax, ay, az) for manifold.transform. */
const frameMat = (x, ax, ay, az) => [ax[0], ax[1], ax[2], 0, ay[0], ay[1], ay[2], 0, az[0], az[1], az[2], 0, x[0], x[1], x[2], 1];

function boxHull(M, x0, x1, y0, y1, z0, z1) {
  const pts = [];
  for (const x of [x0, x1]) for (const y of [y0, y1]) for (const z of [z0, z1]) pts.push([x, y, z]);
  return M.Manifold.hull(pts);
}
function cyl(M, r, z0, z1, seg, rTop = r) { return M.Manifold.cylinder(z1 - z0, r, rTop, seg).translate([0, 0, z0]); }
/** A round hole whose flat sides (not its corners) lie at radius r, so the faceting never eats into the clearance. */
const hole = (M, r, z0, z1, seg) => cyl(M, r / Math.cos(Math.PI / seg), z0, z1, seg);

/** The male part (on A, frame z = out of A into B) and the hole (in B; in A too for dowels and magnets), frame coordinates. */
function connSolids(M, o, spec, len) {
  const c = o.clearance, seg = o.segments, root = 0.5, out = { male: null, holeB: null, holeA: null, pin: null };
  if (spec.kind === 'peg') {
    const r = o.pegD / 2, L = o.pegL, ch = Math.min(0.5, r / 3);
    out.male = M.Manifold.union([cyl(M, r, -root, L - ch, seg), cyl(M, r, L - ch, L, seg, r - ch)]);
    out.holeB = hole(M, r + c, -root, L + c, seg);
  } else if (spec.kind === 'key') {
    const h = o.keyW / 2, L = o.keyL;
    out.male = boxHull(M, -h, h, -h, h, -root, L);
    out.holeB = boxHull(M, -h - c, h + c, -h - c, h + c, -root, L + c);
  } else if (spec.kind === 'dovetail') {
    // runs along frame x over [len[0], len[1]]; narrow at the cut (root width W0), wide at the tip (W1)
    const H = o.dovetailH, w0 = o.dovetailW / 2, w1 = spec.w1 / 2, [a, b] = len;
    const tz = (z, w) => w0 + (w1 - w0) * (z / H) + w;   // half width at height z, grown by w
    const prism = (g, top) => M.Manifold.hull([a - g, b + g].flatMap((x) => [[x, -tz(-root, g), -root], [x, tz(-root, g), -root], [x, -tz(top, g), top], [x, tz(top, g), top]]));
    out.male = prism(0, H);
    out.holeB = prism(c, H + c);
  } else if (spec.kind === 'dowel') {
    const r = o.dowelD / 2, D = o.dowelL / 2 + c;
    out.holeB = hole(M, r + c, -root, D, seg);
    out.holeA = hole(M, r + c, -D, root, seg);
    const L = o.dowelL - c, ch = Math.min(0.5, r / 3);   // a printed pin, chamfered both ends
    out.pin = M.Manifold.union([cyl(M, r - ch, 0, ch, seg, r), cyl(M, r, ch, L - ch, seg), cyl(M, r, L - ch, L, seg, r - ch)]);
  } else if (spec.kind === 'magnet') {
    const r = o.magnetD / 2 + c, D = o.magnetH + c;
    out.holeB = hole(M, r, -root, D, seg);
    out.holeA = hole(M, r, -D, root, seg);
  }
  return out;
}

/**
 * Text as one solid in frame coordinates: centred on the origin, reading along +x with +y up, z from z0 to z1. Each stroke
 * is a rectangle with square ends; their outline is joined in 2D (manifold's CrossSection), cleaned of edges under 10 µm and
 * extruded — a clean outline keeps the kernel's flat-face merge happy when the piece goes into the model.
 */
function textSolid(M, text, h, z0, z1) {
  const sw = Math.max(0.6, h * 0.14), { lines, width } = textStrokes(text, { h });
  const polys = [], ox = -width / 2, oy = -h / 2;
  for (const l of lines) for (let i = 0; i + 1 < l.length; i++) {
    const p = [l[i][0] + ox, l[i][1] + oy], q = [l[i + 1][0] + ox, l[i + 1][1] + oy];
    let dx = q[0] - p[0], dy = q[1] - p[1];
    const len = Math.hypot(dx, dy);
    if (len < 1e-9) { dx = 1; dy = 0; } else { dx /= len; dy /= len; }
    const r = sw / 2, nx = -dy * r, ny = dx * r, ex = dx * r, ey = dy * r;
    polys.push([[p[0] - ex - nx, p[1] - ey - ny], [q[0] + ex - nx, q[1] + ey - ny], [q[0] + ex + nx, q[1] + ey + ny], [p[0] - ex + nx, p[1] - ey + ny]]);
  }
  if (!polys.length) return null;
  const cs = M.CrossSection.ofPolygons(polys, 'NonZero'), clean = cs.simplify(0.01);
  const m = M.Manifold.extrude(clean, z1 - z0).translate([0, 0, z0]);
  cs.delete?.(); clean.delete?.();
  return m;
}
const textBox = (text, h) => { const sw = Math.max(0.6, h * 0.14); return { w: textWidth(text, h) + sw, h: h + sw }; };

// ---------------------------------------------------------------- the split

export async function splitForPrint(M, trisIn, optsIn = {}) {
  const o = { ...SPLIT_DEFAULTS, ...optsIn };
  const tris = plainTris(trisIn);
  if (!tris.length) { const e = new Error('empty'); e.code = 'empty'; throw e; }
  const { lo, hi } = bbox(tris);
  const size = [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]];
  const org = lo.map((v, k) => (v + hi[k]) / 2);
  const spec = connSpec(o);
  const maleExtra = spec ? (spec.kind === 'peg' ? o.pegL : spec.kind === 'key' ? o.keyL : spec.kind === 'dovetail' ? o.dovetailH : 0) : 0;
  let planes, counts = null;
  if (o.planes && o.planes.length) planes = o.planes.map((p) => { const n = norm(p.n); const l = Math.hypot(...p.n) || 1; return { n, d: p.d / l }; });
  else if (o.bed) {
    const g = gridForBed(size, o.bed, { extra: maleExtra });
    if (!g) { const e = new Error('bed'); e.code = 'bed'; throw e; }
    counts = g.counts;
    planes = gridPlanes(lo, hi, counts);
  } else planes = [];
  const lp = planes.map((p) => ({ n: p.n, d: p.d - dot(p.n, org) }));   // planes in local coordinates
  const L = tris.map((tri) => tri.map((p) => [p[0] - org[0], p[1] - org[1], p[2] - org[2]]));

  const bin = [];
  const keep = (m) => { bin.push(m); return m; };
  try {
    const O = keep(toManifold(M, tris, org));
    const volume = O.volume();
    // 1. cut: cells with their side of each plane
    let cells = [{ m: O, sign: [] }];
    for (const p of lp) {
      const next = [];
      for (const c of cells) {
        const [above, below] = c.m.splitByPlane(p.n, p.d);
        keep(above); keep(below);
        if (!above.isEmpty() && above.volume() > 1e-9) next.push({ m: above, sign: [...c.sign, 1] });
        if (!below.isEmpty() && below.volume() > 1e-9) next.push({ m: below, sign: [...c.sign, -1] });
      }
      cells = next;
    }
    // 2. pieces: each cell's parts, numbered bottom layer first, then front to back, left to right
    const pieces = [];
    for (const c of cells) {
      const parts = c.m.decompose();
      for (const m of parts) { keep(m); const lm = localMesh(m); pieces.push({ m, sign: c.sign, lm, T: triMesh(lm), bb: bbox(worldTris(lm, [0, 0, 0])) }); }
    }
    const r1 = (x) => Math.round(x * 10) / 10;
    pieces.sort((a, b) => r1(a.bb.lo[2]) - r1(b.bb.lo[2]) || r1(a.bb.lo[1]) - r1(b.bb.lo[1]) || r1(a.bb.lo[0]) - r1(b.bb.lo[0]));
    pieces.forEach((p, i) => { p.number = i + 1; p.adds = []; p.cuts = []; p.joints = []; });
    const T0 = triMesh(weld(meshFromTriangles(L.map((p) => ({ p }))), 1e-6));

    // 3. joints: for each plane, the touching areas between the pieces either side
    const joints = [], pins = [];
    const jointByKey = new Map();
    const Dmax = spec ? Math.max(spec.depthA, spec.depthB) : 0;
    for (let k = 0; k < lp.length; k++) {
      const { n, d } = lp[k], B = planeBasis(n);
      // the grid is finer when the plane is shared by several cells (a bed grid), up to 512 across
      const across = counts ? Math.max(...counts) : 1;
      const S = sampleSection(sectionSegments(L, n, d, B), Math.min(512, o.samples * across));
      if (!S) continue;
      const others = [];
      for (let j = 0; j < lp.length; j++) if (j !== k) {
        const c = dot(lp[j].n, n), sin = Math.sqrt(Math.max(0, 1 - c * c));
        others.push({ j, n: lp[j].n, d: lp[j].d, sin: sin < 1e-6 ? 0 : sin });
      }
      const at = (i, jj) => { const u = S.u0 + (i + 0.5) * S.step, v = S.v0 + (jj + 0.5) * S.step; return add(add(n.map((x) => x * d), B.U, u), B.V, v); };
      // the cell pairs across this plane: same side of every other plane
      const sides = new Map();
      for (const c of cells) { const key = c.sign.map((s, j) => (j === k ? '*' : s)).join(','); (sides.get(key) || sides.set(key, []).get(key)).push(c); }
      for (const [key] of sides) {
        const sign = key.split(',').map((s) => (s === '*' ? 0 : +s));
        const N = S.nu * S.nv, valid = new Uint8Array(N), dPl = new Float64Array(N);
        for (let jj = 0; jj < S.nv; jj++) for (let i = 0; i < S.nu; i++) {
          const id = jj * S.nu + i;
          if (!S.inside[id]) continue;
          const x = at(i, jj);
          let ok = true, dp = Infinity;
          for (const q of others) {
            const s = sign[q.j] * (dot(q.n, x) - q.d);
            if (s <= 0) { ok = false; break; }
            if (q.sin) dp = Math.min(dp, s / q.sin);
          }
          if (ok) { valid[id] = 1; dPl[id] = dp; }
        }
        // connected regions
        const seen = new Uint8Array(N);
        for (let s0 = 0; s0 < N; s0++) {
          if (!valid[s0] || seen[s0]) continue;
          const reg = [s0];
          seen[s0] = 1;
          for (let h = 0; h < reg.length; h++) {
            const id = reg[h], i = id % S.nu, jj = (id - i) / S.nu;
            for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
              const a = i + di, b = jj + dj;
              if (a < 0 || b < 0 || a >= S.nu || b >= S.nv) continue;
              const nid = b * S.nu + a;
              if (valid[nid] && !seen[nid]) { seen[nid] = 1; reg.push(nid); }
            }
          }
          // which pieces touch here: probe just either side of the most-inside sample
          let probe = reg[0];
          for (const id of reg) if (S.dist[id] > S.dist[probe]) probe = id;
          const px = at(probe % S.nu, (probe - (probe % S.nu)) / S.nu), eps = Math.min(0.05, S.step / 4);
          const below = add(px, n, -eps), above = add(px, n, eps);
          const pa = pieces.find((p) => p.sign[k] === -1 && p.sign.every((s, j) => j === k || s === sign[j]) && insideT(p.T, below));
          const pb = pieces.find((p) => p.sign[k] === 1 && p.sign.every((s, j) => j === k || s === sign[j]) && insideT(p.T, above));
          if (!pa || !pb) continue;
          const jkey = pa.number + '-' + pb.number;
          let J = jointByKey.get(jkey);
          if (!J) {
            J = { id: joints.length + 1, a: pa.number, b: pb.number, label: jkey, plane: k, area: 0, connectors: [], labels: [], notes: [], _regions: [] };
            joints.push(J); jointByKey.set(jkey, J); pa.joints.push(J.id); pb.joints.push(J.id);
          }
          J.area += reg.length * S.step * S.step;
          J._regions.push({ reg, S, B, n, d, others, sign, at, pa, pb, dPl });
        }
      }
    }

    // 4. connectors and numbers per joint
    const fits3d = (x, n, others, sign, lat, dA, dB) => {
      const need = lat;
      const ok = (q) => {
        if (!insideT(T0, q)) return false;
        if (nearestDist(T0, q[0], q[1], q[2], need) < need) return false;
        for (const p of others) if (sign[p.j] * (dot(p.n, q) - p.d) < need + Dmax) return false;
        return true;
      };
      const stepT = 0.75;
      for (const [dir, depth] of [[1, dB], [-1, dA]]) {
        if (!depth) continue;
        for (let tt = Math.min(0.1, depth); ; tt = Math.min(depth, tt + stepT)) { if (!ok(add(x, n, dir * tt))) return false; if (tt >= depth) break; }
      }
      // the face itself: the axis point a hair inside each side
      return ok(add(x, n, 0.05)) && ok(add(x, n, -0.05));
    };
    for (const J of joints) {
      J._regions.sort((p, q) => q.reg.length - p.reg.length);
      const placed = o.place && o.place[J.label] ? o.place[J.label].map((p) => [p[0] - org[0], p[1] - org[1], p[2] - org[2]]) : null;
      for (const R of J._regions) {
        const { reg, S, n, others, sign, at, B } = R;
        const xy = (id) => [id % S.nu, (id - (id % S.nu)) / S.nu];
        const occupied = [];   // {x, r} circles and {x, dir, r} strips in the plane, for the numbers to keep clear of
        if (spec) {
          const lat = spec.lateral;
          const Q = reg.filter((id) => S.dist[id] >= lat && dPl0(R, id) >= lat + Dmax);
          let picks = [];
          if (placed) {
            for (const p of placed) {
              const x = add(p, n, -(dot(n, p) - R.d));
              const u = dot(x, B.U), v = dot(x, B.V), i = Math.floor((u - S.u0) / S.step), jj = Math.floor((v - S.v0) / S.step);
              if (i < 0 || jj < 0 || i >= S.nu || jj >= S.nv || !reg.includes(jj * S.nu + i)) continue;
              if (fits3d(x, n, others, sign, lat, spec.depthA, spec.depthB)) picks.push({ x, id: jj * S.nu + i });
              else J.notes.push('placed-misfit');
            }
          } else if (Q.length) {
            if (spec.kind === 'dovetail') {
              const room = (id) => Math.min(S.dist[id], R.dPl[id] - Dmax);
              const order = Q.slice().sort((p, q) => room(q) - room(p));
              for (const id of order.slice(0, 200)) {
                const strip = dovetailRun(R, id, spec, o, Dmax);
                if (!strip) continue;
                const x = at(...xy(id));
                if (!fits3d(x, n, others, sign, lat, 0, spec.depthB)) continue;
                picks.push({ x, id, strip });
                break;
              }
            } else picks = spreadPicks(Q, S, (id) => Math.min(S.dist[id], R.dPl[id] - Dmax), Math.max(1, o.perFace | 0), lat, (id) => fits3d(at(...xy(id)), n, others, sign, lat, spec.depthA, spec.depthB)).map((id) => ({ x: at(...xy(id)), id }));
          }
          if (!picks.length && !J.connectors.length) J.notes.push('small');
          for (const pk of picks) {
            const dir = pk.strip ? pk.strip.dir : null;
            const len = pk.strip ? pk.strip.len : null;
            const ax = dir ? (dir === 'u' ? B.U : B.V) : B.U, ay = dir ? (dir === 'u' ? B.V : B.U.map((x) => -x)) : B.V;
            const F = frameMat(pk.x, ax, ay, n);
            const sol = connSolids(M, o, spec, len || [0, 0]);
            const tf = (m) => { if (!m) return null; const r = keep(m.transform(F)); m.delete?.(); return r; };
            const male = tf(sol.male), holeB = tf(sol.holeB), holeA = tf(sol.holeA);
            // a dovetail's tongue is clipped to the model's own shape, so it never sticks out of it
            if (male) R.pa.adds.push(spec.kind === 'dovetail' ? keep(male.intersect(O)) : male);
            if (holeB) R.pb.cuts.push(holeB);
            if (holeA) R.pa.cuts.push(holeA);
            if (sol.pin) { pins.push({ man: keep(sol.pin), joint: J.id }); }
            J.connectors.push({ kind: spec.kind, at: add(pk.x, org), n: n.slice(), dir: dir ? (dir === 'u' ? B.U : B.V).slice() : undefined, open: pk.strip ? pk.strip.open : undefined });
            occupied.push(pk.strip ? { x: pk.x, dir: dir === 'u' ? B.U : B.V, r: spec.lateral } : { x: pk.x, r: spec.lateral });
          }
        }
        // the number, on both faces, where it fits clear of the connectors
        if (o.numbers && !J.labels.length) {
          let done = false;
          for (let h = o.textH; h >= o.textMin - 1e-9 && !done; h -= 0.5) {
            const bx = textBox(J.label, h), half = Math.hypot(bx.w, bx.h) / 2;
            let best = -1;
            for (const id of reg) {
              if (S.dist[id] < half + 0.5 || dPl0(R, id) < half + Dmax + o.wall) continue;
              const x = at(...xy(id));
              if (occupied.some((c) => clearOf(c, x) < c.r + half + 1)) continue;
              if (best < 0 || Math.min(S.dist[id], R.dPl[id]) > Math.min(S.dist[best], R.dPl[best])) best = id;
            }
            if (best < 0) continue;
            const x = at(...xy(best));
            const zA = [-o.textDepth, 0.5];
            const tA = textSolid(M, J.label, h, zA[0], zA[1]), tB = textSolid(M, J.label, h, zA[0], zA[1]);
            if (tA) { R.pa.cuts.push(keep(tA.transform(frameMat(x, B.U, B.V, n)))); tA.delete?.(); }
            if (tB) { R.pb.cuts.push(keep(tB.transform(frameMat(x, B.U.map((v) => -v), B.V, n.map((v) => -v))))); tB.delete?.(); }
            J.labels.push({ at: add(x, org), h });
            done = true;
          }
          if (!done) J.notes.push('no-label');
        }
      }
      delete J._regions;
    }

    // 5. build each piece, back in world coordinates, and check it. manifold hands back 32-bit corners, so a flat side on a
    // slanting plane comes back a few µm out of flat and the print check's strict test sees its triangles crossing: every
    // corner within SNAP of a plane the split made (each cut and its connector and number depths) goes back onto it
    const offs = new Set([0]);
    if (o.numbers) { offs.add(-o.textDepth); offs.add(o.textDepth); }
    if (spec) {
      const c = o.clearance;
      for (const v of [spec.depthB, -spec.depthA, maleExtra, o.pegL - Math.min(0.5, o.pegD / 6), o.dovetailH + c]) if (v) offs.add(v);
    }
    const snaps = [];
    for (const p of lp) if (Math.max(Math.abs(p.n[0]), Math.abs(p.n[1]), Math.abs(p.n[2])) < 1 - 1e-12) for (const v of offs) snaps.push({ n: p.n, d: p.d + v });
    const snapMesh = (lm) => {
      if (!snaps.length) return lm;
      const P = lm.positions;
      for (let i = 0; i < P.length; i += 3) for (const q of snaps) {
        const s = q.n[0] * P[i] + q.n[1] * P[i + 1] + q.n[2] * P[i + 2] - q.d;
        if (s && Math.abs(s) < SNAP) { P[i] -= q.n[0] * s; P[i + 1] -= q.n[1] * s; P[i + 2] -= q.n[2] * s; }
      }
      return lm;
    };
    const outPieces = [];
    for (const p of pieces) {
      let m = p.m;
      if (p.adds.length) m = keep(M.Manifold.union([m, ...p.adds]));
      if (p.cuts.length) { const u = keep(M.Manifold.union(p.cuts)); m = keep(m.subtract(u)); }
      if (p.adds.length || p.cuts.length) m = keep(m.simplify(SIMPLIFY));   // slivers from the number strokes' union go (≤ 1 µm moves)
      const wt = worldTris(snapMesh(localMesh(m)), org);
      const mesh = weld(meshFromTriangles(wt.map((q) => ({ p: q }))));
      const check = printCheck(mesh, { bed: o.bed || null });
      const bb = bbox(wt);
      const fits = o.bed ? !!orientPerm(bb, o.bed) : true;
      outPieces.push({ number: p.number, tris: wt, mesh, check, lo: bb.lo, hi: bb.hi, size: bb.hi.map((v, k) => v - bb.lo[k]), volume: m.volume(), fits, joints: p.joints });
    }
    const outPins = pins.map((pn, i) => {
      const wt = worldTris(localMesh(pn.man), org);
      const mesh = weld(meshFromTriangles(wt.map((q) => ({ p: q }))));
      return { number: i + 1, joint: pn.joint, tris: wt, mesh, check: printCheck(mesh) };
    });
    const ok = outPieces.every((p) => p.check.ok) && outPins.every((p) => p.check.ok);
    // dovetails slide sideways: with cuts in more than one direction a piece may be held by two slides at once
    const notes = [];
    if (spec && spec.kind === 'dovetail' && lp.some((p) => lp.some((q) => Math.abs(dot(p.n, q.n)) < 0.999))) notes.push('dovetail-directions');
    return { ok, pieces: outPieces, pins: outPins, joints, planes, counts, volume, size, notes, opts: o };
  } finally {
    for (const m of bin) m.delete?.();
  }
}

/** Distance from x to the cut planes other than this one, in the plane (from the sampled table). */
const dPl0 = (R, id) => R.dPl[id];
function clearOf(c, x) {
  const dx = [x[0] - c.x[0], x[1] - c.x[1], x[2] - c.x[2]];
  if (!c.dir) return Math.hypot(...dx);
  const along = dot(dx, c.dir);
  return Math.hypot(dx[0] - c.dir[0] * along, dx[1] - c.dir[1] * along, dx[2] - c.dir[2] * along);
}

/**
 * Up to k spots spread along the region's long axis: the region's good samples Q are cut into k slices by their position
 * along the principal axis, and each slice gives its sample with the most room — room(id) = the distance to the outline or
 * to another cut (less what that cut's holes need), whichever is nearer — (ties: the one nearest the slice's middle) that
 * also passes the 3D check and stays 2·lateral from the spots already taken.
 */
function spreadPicks(Q, S, room, k, lat, check) {
  const xy = (id) => { const i = id % S.nu; return [S.u0 + (i + 0.5) * S.step, S.v0 + ((id - i) / S.nu + 0.5) * S.step]; };
  const P = Q.map(xy);
  let mu = 0, mv = 0;
  for (const [u, v] of P) { mu += u; mv += v; }
  mu /= P.length; mv /= P.length;
  let suu = 0, svv = 0, suv = 0;
  for (const [u, v] of P) { suu += (u - mu) ** 2; svv += (v - mv) ** 2; suv += (u - mu) * (v - mv); }
  const th = 0.5 * Math.atan2(2 * suv, suu - svv), ax = [Math.cos(th), Math.sin(th)];
  const proj = P.map(([u, v]) => (u - mu) * ax[0] + (v - mv) * ax[1]);
  const order = Q.map((id, i) => i).sort((a, b) => proj[a] - proj[b]);
  const picks = [], pickXY = [];
  for (let s = 0; s < k; s++) {
    const slice = order.slice(Math.floor(order.length * s / k), Math.floor(order.length * (s + 1) / k));
    if (!slice.length) continue;
    let cu = 0, cv = 0;
    for (const i of slice) { cu += P[i][0]; cv += P[i][1]; }
    cu /= slice.length; cv /= slice.length;
    // room inside the slice: an inner slice boundary counts as an edge, so each spot sits in the middle of its own share
    const sLo = proj[slice[0]], sHi = proj[slice[slice.length - 1]];
    const rs = (i) => Math.min(room(Q[i]), s > 0 ? proj[i] - sLo : Infinity, s < k - 1 ? sHi - proj[i] : Infinity);
    const ranked = slice.slice().sort((a, b) => (rs(b) - rs(a)) || (Math.hypot(P[a][0] - cu, P[a][1] - cv) - Math.hypot(P[b][0] - cu, P[b][1] - cv)));
    // within a step of the most room, nearest the slice's middle wins
    const top = rs(ranked[0]);
    const near = ranked.filter((i) => rs(i) >= top - S.step * 0.75).sort((a, b) => Math.hypot(P[a][0] - cu, P[a][1] - cv) - Math.hypot(P[b][0] - cu, P[b][1] - cv));
    const tries = [...near, ...ranked.filter((i) => !near.includes(i))].slice(0, 400);
    for (const i of tries) {
      if (pickXY.some((q) => Math.hypot(q[0] - P[i][0], q[1] - P[i][1]) < 2 * lat)) continue;
      if (!check(Q[i])) continue;
      picks.push(Q[i]); pickXY.push(P[i]);
      break;
    }
  }
  return picks;
}

/**
 * A dovetail through sample id runs along U or V and must leave the model through its outside at one end at least (it
 * slides in from there); an end that would meet another cut plane stops `lateral` short of where the samples stop being
 * clear of that plane (a stopped dovetail). Both ends open is preferred, then the shorter run.
 * → {dir 'u' | 'v', len [from, to] mm along it from the spot, open: 1 | 2} | null
 */
function dovetailRun(R, id, spec, o, Dmax) {
  const { S, reg } = R;
  const inReg = new Set(reg);
  const i0 = id % S.nu, j0 = (id - i0) / S.nu;
  const tries = [];
  for (const dir of ['u', 'v']) {
    const di = dir === 'u' ? 1 : 0, dj = dir === 'u' ? 0 : 1;
    const ends = [];
    let open = 0;
    for (const sgn of [-1, 1]) {
      let i = i0, j = j0, steps = 0, out = false;
      for (;;) {
        const ni = i + sgn * di, nj = j + sgn * dj;
        const inGrid = ni >= 0 && nj >= 0 && ni < S.nu && nj < S.nv;
        const nid = nj * S.nu + ni;
        if (!inGrid || !S.inside[nid]) { out = true; break; }                        // leaves through the outside
        if (!inReg.has(nid) || dPl0(R, nid) < spec.lateral + Dmax) break;            // nears another cut plane
        i = ni; j = nj; steps++;
      }
      if (out) { open++; ends.push(sgn * ((steps + 0.5) * S.step + o.wall + 1)); }
      else ends.push(sgn * Math.max(0, steps * S.step - spec.lateral));
    }
    const span = ends[1] - ends[0];
    if (open && span >= 2 * spec.lateral) tries.push({ dir, len: ends, open, span });
  }
  if (!tries.length) return null;
  tries.sort((a, b) => b.open - a.open || a.span - b.span);
  return tries[0];
}

// ---------------------------------------------------------------- laying pieces on the bed

/** The first axis order (old axis k → bed axis p[k]) in which the box fits the bed; the unturned one first. */
function orientPerm(bb, bed) {
  const s = bb.hi.map((v, k) => v - bb.lo[k]);
  for (const p of PERMS) if (s.every((x, k) => x <= bed[p[k]] + 1e-6)) return p;
  return null;
}
const parityOf = (p) => ((p[0] > p[1]) + (p[0] > p[2]) + (p[1] > p[2])) % 2 ? -1 : 1;

/** The piece turned in 90° steps so it fits the bed (as it is when it already fits), moved to stand on z = 0 at x, y ≥ 0. */
export function orientForBed(mesh, bed) {
  const P = mesh.positions, nv = P.length / 3;
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { const x = P[i * 3 + k]; if (x < lo[k]) lo[k] = x; if (x > hi[k]) hi[k] = x; }
  const perm = bed ? orientPerm({ lo, hi }, bed) : null;
  const p = perm || [0, 1, 2];
  // old axis k becomes new axis p[k]: new[m] = sgn[m] · old[q[m]]; an odd order flips z so it stays a turn, not a mirror
  const q = [0, 1, 2].map((m) => p.indexOf(m));
  const sgn = [1, 1, parityOf(p)];
  const out = new Float64Array(P.length);
  const nlo = [Infinity, Infinity, Infinity];
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { const v = sgn[k] * P[i * 3 + q[k]]; out[i * 3 + k] = v; if (v < nlo[k]) nlo[k] = v; }
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) out[i * 3 + k] -= nlo[k];
  return { mesh: { positions: out, indices: mesh.indices, colors: mesh.colors || null }, perm: p, fits: !bed || !!perm };
}

// ---------------------------------------------------------------- the assembly sheet and the files

const HUES = [210, 25, 130, 280, 50, 175, 330, 95, 245, 0];
const f1 = (x) => (Math.round(x * 10) / 10).toString();

export function assemblySheet(res, { width = 960, explode = 0.45 } = {}) {
  const w = norm([1, -1.25, 0.9]), r = norm(cross([0, 0, 1], w)), up = cross(w, r);   // toward the viewer, right, up
  // explode: every piece moves away from the middle of the model by `explode` × its own offset
  const all = res.pieces;
  const mid = [0, 1, 2].map((k) => (Math.min(...all.map((p) => p.lo[k])) + Math.max(...all.map((p) => p.hi[k]))) / 2);
  const L = norm([0.35, -0.55, 0.75]);
  const groups = [];
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const p of all) {
    const polys = [];
    const c = p.lo.map((v, k) => (v + p.hi[k]) / 2), off = c.map((v, k) => (v - mid[k]) * explode);
    const hue = HUES[(p.number - 1) % HUES.length];
    for (const tri of p.tris) {
      const q = tri.map((v) => add(v, off));
      const nn = norm(cross([q[1][0] - q[0][0], q[1][1] - q[0][1], q[1][2] - q[0][2]], [q[2][0] - q[0][0], q[2][1] - q[0][1], q[2][2] - q[0][2]]));
      if (dot(nn, w) <= 0) continue;
      const pts = q.map((v) => [dot(v, r), -dot(v, up)]);
      for (const [a, b] of pts) { x0 = Math.min(x0, a); x1 = Math.max(x1, a); y0 = Math.min(y0, b); y1 = Math.max(y1, b); }
      const light = 38 + 40 * Math.max(0, dot(nn, L));
      polys.push({ depth: (dot(q[0], w) + dot(q[1], w) + dot(q[2], w)) / 3, pts, fill: `hsl(${hue} 55% ${light.toFixed(0)}%)` });
    }
    const cc = add(c, off);
    polys.sort((a, b) => a.depth - b.depth);
    groups.push({ depth: dot(cc, w), polys, label: { n: p.number, x: dot(cc, r), y: -dot(cc, up) } });
  }
  // pieces back to front (they are pulled apart, so whole pieces rarely cross), each piece's triangles back to front
  groups.sort((a, b) => a.depth - b.depth);
  const pad = 24, pw = width - 2 * pad, s = pw / Math.max(1e-9, x1 - x0), ph = (y1 - y0) * s;
  const X = (x) => pad + (x - x0) * s, Y = (y) => pad + (y - y0) * s;
  const rows = sheetRows(res);
  const lineH = 18, listTop = pad + ph + 36, height = Math.ceil(listTop + (rows.length + 1) * lineH + pad);
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const out = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="Arial, Helvetica, sans-serif">`,
    `<rect width="100%" height="100%" fill="#ffffff"/>`,
    `<g stroke-width="0.4" stroke-linejoin="round">`];
  // runs of triangles with the same shade go in one path (a flat side is one path, not hundreds); triangles under a
  // twentieth of a pixel are left out (the numbers' engraving), the stroke closes the seams; each piece's number is drawn
  // with it, so a piece behind another keeps its number hidden too
  const area = (q) => Math.abs((q[1][0] - q[0][0]) * (q[2][1] - q[0][1]) - (q[2][0] - q[0][0]) * (q[1][1] - q[0][1])) * s * s / 2;
  for (const g of groups) {
    const keepP = g.polys.filter((q) => area(q.pts) >= 0.05);
    for (let i = 0; i < keepP.length;) {
      const fill = keepP[i].fill, d = [];
      for (; i < keepP.length && keepP[i].fill === fill; i++) d.push('M' + keepP[i].pts.map(([a, b]) => X(a).toFixed(1) + ' ' + Y(b).toFixed(1)).join('L') + 'Z');
      out.push(`<path d="${d.join('')}" fill="${fill}" stroke="${fill}"/>`);
    }
    const l = g.label;
    out.push(`<g font-size="16" font-weight="700" text-anchor="middle" dominant-baseline="central"><circle cx="${X(l.x).toFixed(1)}" cy="${Y(l.y).toFixed(1)}" r="13" fill="#ffffff" stroke="#222" stroke-width="1.5"/><text x="${X(l.x).toFixed(1)}" y="${Y(l.y).toFixed(1)}" fill="#111" stroke="none">${l.n}</text></g>`);
  }
  out.push(`</g><g font-size="13" fill="#111"><text x="${pad}" y="${listTop - 10}" font-weight="700">${esc(t('sx.split.sheet.title', { n: res.pieces.length }))}</text>`);
  rows.forEach((row, i) => out.push(`<text x="${pad}" y="${listTop + (i + 1) * lineH}">${esc(row)}</text>`));
  out.push('</g></svg>');
  return out.join('\n');
}

/** One line per piece, then per joint, then the pins — the list on the sheet and in assembly.txt. */
export function sheetRows(res) {
  const rows = [];
  for (const p of res.pieces) rows.push(t('sx.split.sheet.piece', { n: p.number, x: f1(p.size[0]), y: f1(p.size[1]), z: f1(p.size[2]), cm3: f1(p.volume / 1000) }));
  for (const j of res.joints.slice().sort((a, b) => a.a - b.a || a.b - b.b)) {
    const kinds = j.connectors.length ? t('sx.split.sheet.conn.' + j.connectors[0].kind, { n: j.connectors.length }) : t('sx.split.sheet.conn.none');
    rows.push(t('sx.split.sheet.joint', { a: j.a, b: j.b, label: j.label, what: kinds }));
  }
  if (res.pins.length) rows.push(t('sx.split.sheet.pins', { n: res.pins.length, d: f1(res.opts.dowelD), l: f1(res.opts.dowelL - res.opts.clearance) }));
  return rows;
}

export function splitFiles(res, { format = 'stl', name = 'model', bed = null, sheet = true, extra = [] } = {}) {
  const safe = String(name || 'model').replace(/[^\p{L}\p{N}._ -]+/gu, '_').trim() || 'model';
  const pad2 = (n, all) => String(n).padStart(Math.max(2, String(all).length), '0');
  const files = [];
  const put = (base, mesh) => {
    const m = orientForBed(mesh, bed || res.opts.bed || null).mesh;
    if (format === '3mf') files.push({ name: base + '.3mf', data: threeMF(m, { name: base }) });
    else files.push({ name: base + '.stl', data: stlBinary(m, base) });
  };
  for (const p of res.pieces) put(`${safe}-${pad2(p.number, res.pieces.length)}`, p.mesh);
  for (const p of res.pins) put(`${safe}-pin-${pad2(p.number, res.pins.length)}`, p.mesh);   // i18n-ignore: file names in the zip
  if (sheet) {
    files.push({ name: 'assembly.svg', data: assemblySheet(res) });
    files.push({ name: 'assembly.txt', data: [t('sx.split.sheet.title', { n: res.pieces.length }), '', ...sheetRows(res), '', t('sx.split.sheet.note')].join('\n') + '\n' });
  }
  for (const f of extra) files.push(f);
  return files;
}
export const splitZip = (res, opts = {}) => zipStored(splitFiles(res, opts));
