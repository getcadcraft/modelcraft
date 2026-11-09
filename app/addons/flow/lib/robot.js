/* SPDX-License-Identifier: Apache-2.0 */
/**
 * robot.js — robot cells for the Material flow add-on (0.9 SU.1128, session flow-robots-09). DOM-free, no imports. Metres, seconds,
 * radians inside; degrees only in the spec objects that people edit.
 *
 * Robots (all kinematic only: no dynamics, no collision with the world, no payload):
 *   arm    serial revolute chain from classic Denavit-Hartenberg rows {a, alpha, d, offset, min, max, vmax, amax} (degrees, m).
 *          Inverse kinematics is numeric (damped least squares, deterministic restarts) for a tool point and "tool points down".
 *   scara  l1, l2 arms, vertical slide z, tool yaw. Closed-form inverse kinematics, both elbow solutions.
 *   delta  three arms (Clavel), closed-form inverse kinematics from the published geometry (f, e, rf, re). Inverse only.
 *
 *   makeRobot(type, raw)            clean robot spec (unknown keys dropped, numbers clamped); PRESETS lists the starters
 *   fkArm / fkScara(robot, q)       tool point in world metres
 *   ikPoint(robot, p, opts)         { ok, q, why } why: 'radius' | 'limits' | 'orientation' ; opts { seed, yaw }
 *   reachReport(robot, targets, clear)   one row per target (the point and the point `clear` m above it)
 *   envelopeRadii(robot, z)         { min, max } radial reach along +x of the base at height z (null when none)
 *   trapezoid(d, v, a)              time to move distance d from rest to rest with speed limit v and acceleration limit a
 *   moveTime(robot, qa, qb, pct)    synchronized joint move, every joint at its own limits scaled by pct
 *   parseProgram / formatProgram    the neutral text program (CCROBOT 1)
 *   runProgram(cell, prog)          { ok, steps, cycle, issues }; pathCsv(run) the same path as a list
 *   fkCartesian / cartesian type   gantry with x, y, z slides and a tool yaw (closed-form inverse)
 * Program files in other formats (URDF, joint trajectory, vendor languages): lib/robot-formats.js; robot models: lib/robot-library.js.
 * The neutral text (CCROBOT 1) is ours. See help/flow-robots.md.
 */
const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const num = (v, def, lo, hi) => { const n = typeof v === 'string' && v.trim() !== '' ? Number(v) : v; return typeof n === 'number' && Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def; };
const sid = (v, def = '') => (typeof v === 'string' && /^[A-Za-z][A-Za-z0-9_.-]{0,31}$/.test(v) ? v : def);

// ------------------------------------------------------------------------------------------------ 4x4 matrices (row-major arrays of 16)
const I4 = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function mul(A, B) {
  const C = new Array(16).fill(0);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let s = 0; for (let k = 0; k < 4; k++) s += A[i * 4 + k] * B[k * 4 + j]; C[i * 4 + j] = s; }
  return C;
}
function dh(a, alpha, d, theta) {
  const ct = Math.cos(theta), st = Math.sin(theta), ca = Math.cos(alpha), sa = Math.sin(alpha);
  return [ct, -st * ca, st * sa, a * ct, st, ct * ca, -ct * sa, a * st, 0, sa, ca, d, 0, 0, 0, 1];
}
const rotZ = (r) => [Math.cos(r), -Math.sin(r), 0, 0, Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// ------------------------------------------------------------------------------------------------ specs
const JOINT_DEF = { a: 0, alpha: 0, d: 0, offset: 0, min: -170, max: 170, vmax: 180, amax: 600 };
function cleanJoint(j) {
  j = j || {};
  const min = num(j.min, JOINT_DEF.min, -720, 720), max = num(j.max, JOINT_DEF.max, -720, 720);
  return {
    a: num(j.a, 0, -5, 5), alpha: num(j.alpha, 0, -180, 180), d: num(j.d, 0, -5, 5), offset: num(j.offset, 0, -360, 360),
    min: Math.min(min, max), max: Math.max(min, max), vmax: num(j.vmax, JOINT_DEF.vmax, 1, 3600), amax: num(j.amax, JOINT_DEF.amax, 1, 100000),
  };
}
export const PRESETS = {
  arm6: { type: 'arm', name: 'Generic 6-axis (about 0.85 m)', joints: [
    { a: 0, alpha: 90, d: 0.16 }, { a: -0.42, alpha: 0, d: 0 }, { a: -0.39, alpha: 0, d: 0 },
    { a: 0, alpha: 90, d: 0.13 }, { a: 0, alpha: -90, d: 0.10 }, { a: 0, alpha: 0, d: 0.10 }], tool: 0.12 },
  scara: { type: 'scara', name: 'Generic SCARA (0.5 m)', l1: 0.3, l2: 0.2, zmin: 0, zmax: 0.15, tool: 0 },
  delta: { type: 'delta', name: 'Generic delta (parallel picker)', f: 0.3, e: 0.1, rf: 0.2, re: 0.45, zmin: -0.5, zmax: -0.25 },
  cartesian: { type: 'cartesian', name: 'Generic Cartesian (gantry, 0.8 x 0.6 x 0.3 m)', xmin: 0, xmax: 0.8, ymin: -0.3, ymax: 0.3, zmin: 0, zmax: 0.3, tool: 0.05 },
};
export function makeRobot(type, raw = {}) {
  raw = raw || {};
  const r = {
    id: sid(raw.id, 'R1'), type: type === 'scara' || type === 'delta' || type === 'cartesian' ? type : 'arm',
    name: typeof raw.name === 'string' ? raw.name.slice(0, 60) : '',
    x: num(raw.x, 0, -1e4, 1e4), y: num(raw.y, 0, -1e4, 1e4), z: num(raw.z, 0, -1e4, 1e4), rot: num(raw.rot, 0, -360, 360),
    tcpV: num(raw.tcpV, 1, 0.01, 20), tcpA: num(raw.tcpA, 5, 0.01, 500),
  };
  if (r.type === 'arm') {
    const src = Array.isArray(raw.joints) && raw.joints.length >= 3 ? raw.joints.slice(0, 8) : PRESETS.arm6.joints;
    r.joints = src.map(cleanJoint); r.tool = num(raw.tool, 0.12, 0, 2);
    r.home = Array.isArray(raw.home) && raw.home.length === r.joints.length ? raw.home.map((v, i) => Math.min(r.joints[i].max, Math.max(r.joints[i].min, num(v, 0, -720, 720)))) : r.joints.map((j) => Math.min(j.max, Math.max(j.min, 0)));
  } else if (r.type === 'scara') {
    const z0 = num(raw.zmin, 0, -5, 5), z1 = num(raw.zmax, 0.15, -5, 5);
    Object.assign(r, { l1: num(raw.l1, 0.3, 0.01, 5), l2: num(raw.l2, 0.2, 0.01, 5), zmin: Math.min(z0, z1), zmax: Math.max(z0, z1), tool: num(raw.tool, 0, 0, 2),
      q1: [num(raw.q1min, -130, -360, 360), num(raw.q1max, 130, -360, 360)], q2: [num(raw.q2min, -145, -360, 360), num(raw.q2max, 145, -360, 360)],
      vmax: [300, 450, 1.0, 1000], amax: [1500, 2250, 10, 8000] });
    r.home = [0, 90 * D2R * (r.l1 > 0 ? 1 : 1), r.zmax, 0];
    r.home[1] = Math.min(r.q2[1], 90) * D2R; r.home[0] = 0;
  } else if (r.type === 'cartesian') {
    const rg = (lo, hi, dl, dh) => { const a = num(lo, dl, -20, 20), b = num(hi, dh, -20, 20); return [Math.min(a, b), Math.max(a, b)]; };
    r.rx = rg(raw.xmin, raw.xmax, 0, 0.8); r.ry = rg(raw.ymin, raw.ymax, -0.3, 0.3); r.rz = rg(raw.zmin, raw.zmax, 0, 0.3);
    Object.assign(r, { tool: num(raw.tool, 0.05, 0, 2), vmax: [1, 1, 1, 360], amax: [5, 5, 5, 2000] });
    r.home = [(r.rx[0] + r.rx[1]) / 2, (r.ry[0] + r.ry[1]) / 2, r.rz[1], 0];
  } else {
    const z0 = num(raw.zmin, -0.5, -5, -0.01), z1 = num(raw.zmax, -0.25, -5, -0.01);
    Object.assign(r, { f: num(raw.f, 0.3, 0.01, 3), e: num(raw.e, 0.1, 0.01, 3), rf: num(raw.rf, 0.2, 0.01, 3), re: num(raw.re, 0.45, 0.01, 5),
      zmin: Math.min(z0, z1), zmax: Math.max(z0, z1), vmax: [400, 400, 400], amax: [4000, 4000, 4000], qmin: -60, qmax: 90 });
    const h = deltaIk(r, 0, 0, (r.zmin + r.zmax) / 2);
    r.home = h || [0, 0, 0];
  }
  return r;
}
export const nDof = (r) => (r.type === 'arm' ? r.joints.length : r.type === 'scara' || r.type === 'cartesian' ? 4 : 3);
/** Is joint i of this robot a slide (metres) rather than a turn (radians)? */
export const isSlide = (r, i) => (r.type === 'scara' ? i === 2 : r.type === 'cartesian' ? i < 3 : false);
export const jointLimits = (r) => {
  if (r.type === 'arm') return r.joints.map((j) => [j.min * D2R, j.max * D2R]);
  if (r.type === 'scara') return [r.q1.map((v) => v * D2R), r.q2.map((v) => v * D2R), [r.zmin, r.zmax], [-Math.PI * 2, Math.PI * 2]];
  if (r.type === 'cartesian') return [r.rx, r.ry, r.rz, [-Math.PI * 2, Math.PI * 2]];
  return [0, 1, 2].map(() => [r.qmin * D2R, r.qmax * D2R]);
};
const jointVA = (r) => (r.type === 'arm' ? { v: r.joints.map((j) => j.vmax * D2R), a: r.joints.map((j) => j.amax * D2R) }
  : { v: r.vmax.map((v, i) => (isSlide(r, i) ? v : v * D2R)), a: r.amax.map((v, i) => (isSlide(r, i) ? v : v * D2R)) });

// ------------------------------------------------------------------------------------------------ frames: world <-> robot base
const toBase = (r, p) => { const c = Math.cos(-r.rot * D2R), s = Math.sin(-r.rot * D2R), x = p[0] - r.x, y = p[1] - r.y; return [c * x - s * y, s * x + c * y, p[2] - r.z]; };
const toWorld = (r, p) => { const c = Math.cos(r.rot * D2R), s = Math.sin(r.rot * D2R); return [r.x + c * p[0] - s * p[1], r.y + s * p[0] + c * p[1], r.z + p[2]]; };

// ------------------------------------------------------------------------------------------------ forward kinematics
/** Arm: { T (flange frame in the base frame), tool: tool point in the base frame, zAxis: tool z in the base frame }. */
export function fkArmBase(r, q) {
  let T = I4();
  r.joints.forEach((j, i) => { T = mul(T, dh(j.a, j.alpha * D2R, j.d, q[i] + j.offset * D2R)); });
  return { T, tool: [T[3] + T[2] * r.tool, T[7] + T[6] * r.tool, T[11] + T[10] * r.tool], zAxis: [T[2], T[6], T[10]] };
}
export const fkArm = (r, q) => toWorld(r, fkArmBase(r, q).tool);
/** SCARA q = [q1, q2, z (m above the base), q4]: the tool point (the slide's end, `tool` m below it) and the tool yaw in the world. */
export function fkScara(r, q) {
  const p = [r.l1 * Math.cos(q[0]) + r.l2 * Math.cos(q[0] + q[1]), r.l1 * Math.sin(q[0]) + r.l2 * Math.sin(q[0] + q[1]), q[2] - r.tool];
  return { p: toWorld(r, p), yaw: q[0] + q[1] + q[3] + r.rot * D2R };
}
/** Cartesian gantry q = [x, y, z (base frame, the slide's end), yaw]: the tool point is `tool` m below the slide end. */
export function fkCartesian(r, q) { return toWorld(r, [q[0], q[1], q[2] - r.tool]); }
export const fkPoint = (r, q) => (r.type === 'arm' ? fkArm(r, q) : r.type === 'scara' ? fkScara(r, q).p : r.type === 'cartesian' ? fkCartesian(r, q) : null);

// ------------------------------------------------------------------------------------------------ inverse kinematics
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function solve(A, b) {                       // Gaussian elimination with partial pivoting; A is n x n
  const n = b.length, M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c; for (let i = c + 1; i < n; i++) if (Math.abs(M[i][c]) > Math.abs(M[p][c])) p = i;
    if (Math.abs(M[p][c]) < 1e-14) return null;
    [M[c], M[p]] = [M[p], M[c]];
    for (let i = c + 1; i < n; i++) { const f = M[i][c] / M[c][c]; for (let k = c; k <= n; k++) M[i][k] -= f * M[c][k]; }
  }
  const x = new Array(n);
  for (let i = n - 1; i >= 0; i--) { let s = M[i][n]; for (let k = i + 1; k < n; k++) s -= M[i][k] * x[k]; x[i] = s / M[i][i]; }
  return x;
}
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const clampQ = (q, lim) => q.map((v, i) => Math.min(lim[i][1], Math.max(lim[i][0], v)));

/** Numeric arm IK for a tool point (base frame) with the tool z axis pointing straight down. Returns { ok, q, err } best found. */
function ikArmBase(r, pb, down, seeds) {
  const lim = jointLimits(r), n = r.joints.length, zd = [0, 0, -1];
  const err = (q) => {
    const f = fkArmBase(r, q), e = [pb[0] - f.tool[0], pb[1] - f.tool[1], pb[2] - f.tool[2]];
    const o = down ? [f.zAxis[0] - zd[0], f.zAxis[1] - zd[1], f.zAxis[2] - zd[2]] : [0, 0, 0];   // not a cross product: that is zero when the axis points straight up
    return [e[0], e[1], e[2], o[0] * 0.3, o[1] * 0.3, o[2] * 0.3];
  };
  const norm = (e) => Math.hypot(e[0], e[1], e[2]);
  let best = { ok: false, q: seeds[0], err: Infinity, oerr: Infinity };
  for (const s0 of seeds) {
    let q = clampQ(s0.slice(), lim);
    for (let it = 0; it < 120; it++) {
      const e = err(q), pe = norm(e), oe = Math.hypot(e[3], e[4], e[5]) / 0.3;
      if (pe < best.err || (pe === best.err && oe < best.oerr)) best = { ok: false, q: q.slice(), err: pe, oerr: oe };
      if (pe < 1e-5 && oe < 1e-4) { best = { ok: true, q, err: pe, oerr: oe }; return best; }
      const J = Array.from({ length: 6 }, () => new Array(n));
      for (let j = 0; j < n; j++) { const qq = q.slice(); qq[j] += 1e-6; const e2 = err(qq); for (let i = 0; i < 6; i++) J[i][j] = (e[i] - e2[i]) / 1e-6; }
      const lam = 0.02 + (pe + oe) * 0.1, JJ = J.map((ri, i) => J.map((rj, k) => ri.reduce((s, v, c) => s + v * rj[c], 0) + (i === k ? lam * lam : 0)));
      const y = solve(JJ, e); if (!y) break;
      const dq = new Array(n).fill(0).map((_, j) => J.reduce((s, row, i) => s + row[j] * y[i], 0));
      const m = Math.max(...dq.map(Math.abs)); const k = m > 0.3 ? 0.3 / m : 1;
      q = clampQ(q.map((v, j) => v + k * dq[j]), lim);
    }
  }
  return best;
}
function armSeeds(r, seed) {
  const lim = jointLimits(r), rnd = rng(12345), out = [];
  if (seed) out.push(seed);
  out.push(r.home.slice());
  out.push(lim.map(([lo, hi]) => (lo + hi) / 2));
  for (let k = 0; k < 14; k++) out.push(lim.map(([lo, hi]) => lo + rnd() * (hi - lo)));
  return out;
}
function scaraIk(r, pb, yaw, seed) {
  const x = pb[0], y = pb[1], z = pb[2] + r.tool, rr = x * x + y * y, c2 = (rr - r.l1 * r.l1 - r.l2 * r.l2) / (2 * r.l1 * r.l2);
  if (c2 > 1 + 1e-9 || c2 < -1 - 1e-9) return { ok: false, why: 'radius' };
  if (z < r.zmin - 1e-9 || z > r.zmax + 1e-9) return { ok: false, why: 'limits' };
  const lim = jointLimits(r), s2m = Math.sqrt(Math.max(0, 1 - c2 * c2)), out = [];
  for (const s2 of [s2m, -s2m]) {
    const q2 = Math.atan2(s2, c2), q1 = Math.atan2(y, x) - Math.atan2(r.l2 * s2, r.l1 + r.l2 * c2);
    const wrap = (v) => Math.atan2(Math.sin(v), Math.cos(v));
    const a1 = wrap(q1), a2 = wrap(q2), q4 = wrap((yaw || 0) - r.rot * D2R - a1 - a2);
    const q = [a1, a2, z, q4];
    if (a1 >= lim[0][0] - 1e-9 && a1 <= lim[0][1] + 1e-9 && a2 >= lim[1][0] - 1e-9 && a2 <= lim[1][1] + 1e-9) out.push(q);
    if (s2m === 0) break;
  }
  if (!out.length) return { ok: false, why: 'limits' };
  const d = (q) => (seed ? q.reduce((s, v, i) => s + Math.abs(v - seed[i]), 0) : 0);
  out.sort((a, b) => d(a) - d(b));
  return { ok: true, q: out[0], alt: out[1] || null };
}
function cartesianIk(r, pb, yaw) {
  const q = [pb[0], pb[1], pb[2] + r.tool], lim = jointLimits(r), e = 1e-9;
  if (q.some((v, i) => i < 3 && (v < lim[i][0] - e || v > lim[i][1] + e))) return { ok: false, why: 'limits' };
  const wrap = (v) => Math.atan2(Math.sin(v), Math.cos(v));
  q.push(wrap((yaw || 0) - r.rot * D2R));
  return { ok: true, q };
}
/** Delta (Clavel) closed form. Joint angles in radians, positive = upper arm swung down from horizontal. Null when out of reach. */
export function deltaIk(r, x0, y0, z0) {
  const sqrt3 = Math.sqrt(3), tan30 = 1 / sqrt3, q = [];
  const one = (x, y, z) => {
    const y1 = -0.5 * tan30 * r.f, yy = y - 0.5 * tan30 * r.e;
    const a = (x * x + yy * yy + z * z + r.rf * r.rf - r.re * r.re - y1 * y1) / (2 * z), b = (y1 - yy) / z;
    const d = -(a + b * y1) * (a + b * y1) + r.rf * (b * b * r.rf + r.rf);
    if (d < 0) return null;
    const yj = (y1 - a * b - Math.sqrt(d)) / (b * b + 1), zj = a + b * yj;
    return Math.atan2(-zj, y1 - yj) + (yj > y1 ? Math.PI : 0);
  };
  const c = Math.cos(120 * D2R), s = Math.sin(120 * D2R);
  for (const [cc, ss] of [[1, 0], [c, s], [c, -s]]) {
    const v = one(x0 * cc + y0 * ss, y0 * cc - x0 * ss, z0);
    if (v === null || !Number.isFinite(v)) return null;
    q.push(v);
  }
  return q;
}
/** Which way each delta arm sits: the elbow point of arm k in the base frame (for checks and drawing). */
export function deltaElbows(r, q) {
  const t = Math.tan(30 * D2R);
  return [0, 120, 240].map((deg, k) => {
    const a = deg * D2R, rb = r.f * 0.5 * t * 1, ex = r.f * t * 0.5;          // base joint at radius f/(2 sqrt3), upper arm swings outward
    const ra = ex + r.rf * Math.cos(q[k]);
    // arm 0 is the one on the -y side in Clavel's frame; rotate its (0, -ra) by the arm's angle
    const p0 = [0, -ra, -r.rf * Math.sin(q[k])], c = Math.cos(a), s = Math.sin(a);
    void rb; return [p0[0] * c - p0[1] * s, p0[0] * s + p0[1] * c, p0[2]];
  });
}
export function ikPoint(r, p, opts = {}) {
  const pb = toBase(r, p);
  if (r.type === 'scara') return scaraIk(r, pb, opts.yaw, opts.seed);
  if (r.type === 'cartesian') return cartesianIk(r, pb, opts.yaw);
  if (r.type === 'delta') {
    const q = deltaIk(r, pb[0], pb[1], pb[2]);
    if (!q || pb[2] > r.zmax + 1e-9 || pb[2] < r.zmin - 1e-9) return { ok: false, why: q ? 'limits' : 'radius' };
    const lim = jointLimits(r);
    return q.every((v, i) => v >= lim[i][0] - 1e-9 && v <= lim[i][1] + 1e-9) ? { ok: true, q } : { ok: false, why: 'limits' };
  }
  // arm: a quick radial test before the numeric search
  const maxR = r.joints.reduce((s, j) => s + Math.abs(j.a) + Math.abs(j.d), 0) + r.tool;
  if (Math.hypot(pb[0], pb[1], pb[2] - 0) > maxR + 1e-9) return { ok: false, why: 'radius' };
  const res = ikArmBase(r, pb, opts.down !== false, armSeeds(r, opts.seed));
  if (res.ok) return { ok: true, q: res.q };
  return { ok: false, why: res.err < 1e-3 ? 'orientation' : 'limits', q: res.q, err: res.err };
}

// ------------------------------------------------------------------------------------------------ reach
export function reachReport(r, targets, clear = 0.1) {
  return targets.map((t) => {
    const p = t.p, ik = ikPoint(r, p), up = ikPoint(r, [p[0], p[1], p[2] + clear], { seed: ik.q });
    const dist = Math.round(Math.hypot(p[0] - r.x, p[1] - r.y, p[2] - r.z) * 1e4) / 1e4;
    return { name: t.name, ok: ik.ok && up.ok, dist, why: ik.ok ? (up.ok ? '' : 'approach-' + up.why) : ik.why };
  });
}
export function envelopeRadii(r, z) {
  let lo = null, hi = null;
  const w = [r.x, r.y, r.z], c = Math.cos(r.rot * D2R), s = Math.sin(r.rot * D2R);
  for (let d = 0.02; d <= 4; d += 0.02) {
    if (ikPoint(r, [w[0] + c * d, w[1] + s * d, z]).ok) { if (lo === null) lo = d; hi = d; }
  }
  return lo === null ? null : { min: Math.round(lo * 100) / 100, max: Math.round(hi * 100) / 100 };
}

// ------------------------------------------------------------------------------------------------ time
/** Rest-to-rest time over distance d with speed limit v and acceleration limit a (trapezoid, or triangle when d is short). */
export function trapezoid(d, v, a) {
  d = Math.abs(d); if (d <= 0) return 0;
  const dAcc = (v * v) / a;                                  // distance used to speed up and slow down
  return d >= dAcc ? d / v + v / a : 2 * Math.sqrt(d / a);
}
export function moveTime(r, qa, qb, pct = 100) {
  const k = Math.min(1, Math.max(0.01, pct / 100)), va = jointVA(r);
  let t = 0;
  for (let i = 0; i < qb.length; i++) t = Math.max(t, trapezoid(qb[i] - qa[i], va.v[i] * k, va.a[i] * k));
  return t;
}

// ------------------------------------------------------------------------------------------------ the neutral program
const HEADER = 'CCROBOT 1';
const OPS = ['movej', 'movel', 'pick', 'place', 'wait', 'speed', 'home', 'out', 'waitin'];
export function parseProgram(text) {
  const prog = { robot: '', points: {}, ops: [] }, errors = [];
  const lines = String(text || '').split(/\r?\n/);
  let sawHeader = false;
  lines.forEach((raw, i) => {
    const line = raw.replace(/#.*/, '').trim(); if (!line) return;
    const w = line.split(/\s+/), cmd = w[0].toLowerCase(), n = i + 1;
    if (!sawHeader) { if (line.toUpperCase() === HEADER) { sawHeader = true; return; } errors.push({ line: n, code: 'header' }); sawHeader = true; }
    if (cmd === 'ccrobot') return;
    const nums = (a) => a.map(Number);
    if (cmd === 'robot') { if (w.length === 2 && sid(w[1])) prog.robot = w[1]; else errors.push({ line: n, code: 'syntax' }); return; }
    if (cmd === 'point') {
      const v = nums(w.slice(2, 5));
      if (w.length !== 5 || !sid(w[1]) || v.some((x) => !Number.isFinite(x))) errors.push({ line: n, code: 'syntax' }); else prog.points[w[1]] = v;
      return;
    }
    if (!OPS.includes(cmd)) { errors.push({ line: n, code: 'unknown', word: w[0].slice(0, 20) }); return; }
    const op = { op: cmd, line: n };
    if (cmd === 'home') { if (w.length !== 1) errors.push({ line: n, code: 'syntax' }); }
    else if (cmd === 'out' || cmd === 'waitin') {              // out N on|off  /  waitin N on|off  (digital signal number 1 to 99)
      const k = Number(w[1]), st = (w[2] || '').toLowerCase();
      if (w.length !== 3 || !Number.isInteger(k) || k < 1 || k > 99 || (st !== 'on' && st !== 'off')) { errors.push({ line: n, code: 'io-syntax' }); return; }
      op.n = k; op.on = st === 'on';
    }
    else if (cmd === 'wait' || cmd === 'speed') {
      const v = Number(w[1]);
      if (w.length !== 2 || !Number.isFinite(v) || v < 0 || (cmd === 'speed' && (v < 1 || v > 100))) { errors.push({ line: n, code: cmd === 'speed' ? 'speed-range' : 'syntax' }); return; }
      op.v = v;
    } else {
      if (w.length < 2 || !sid(w[1])) { errors.push({ line: n, code: 'syntax' }); return; }
      op.to = w[1];
      for (let k = 2; k < w.length; k += 2) {                 // pick/place only: clear <m>, grip <s>
        const key = w[k].toLowerCase(), v = Number(w[k + 1]);
        if ((cmd === 'pick' || cmd === 'place') && (key === 'clear' || key === 'grip') && Number.isFinite(v) && v >= 0) op[key] = v;
        else { errors.push({ line: n, code: 'syntax' }); break; }
      }
    }
    prog.ops.push(op);
  });
  if (!sawHeader) errors.push({ line: 1, code: 'header' });
  return { ok: errors.length === 0, prog, errors };
}
export function formatProgram(prog) {
  const out = [HEADER];
  if (prog.robot) out.push('robot ' + prog.robot);
  for (const [k, v] of Object.entries(prog.points || {})) out.push(`point ${k} ${v.map((x) => Math.round(x * 1e5) / 1e5).join(' ')}`);
  for (const o of prog.ops) {
    if (o.op === 'home') out.push('home');
    else if (o.op === 'wait' || o.op === 'speed') out.push(`${o.op} ${o.v}`);
    else if (o.op === 'out' || o.op === 'waitin') out.push(`${o.op} ${o.n} ${o.on ? 'on' : 'off'}`);
    else out.push(`${o.op} ${o.to}` + (o.clear !== undefined ? ` clear ${o.clear}` : '') + (o.grip !== undefined ? ` grip ${o.grip}` : ''));
  }
  return out.join('\n') + '\n';
}

/**
 * Run a program on a robot. cell = { robot, targets: { name: [x,y,z] } (world metres, tool-point positions), clear, grip }.
 * Stops at the first op that cannot be done. steps: one per motion/wait (pick and place give four: approach, down, grip, up).
 */
export function runProgram(cell, prog) {
  const r = cell.robot, pts = { ...(cell.targets || {}), ...(prog.points || {}) }, steps = [], issues = [];
  let q = r.home.slice(), pct = 100, t = 0;
  const add = (s) => { t += s.t; steps.push({ ...s, pct, q: (s.q || q).slice(), tcum: Math.round(t * 1e6) / 1e6, t: Math.round(s.t * 1e6) / 1e6 }); };
  const fail = (line, code, extra = {}) => { issues.push({ line, code, ...extra }); };
  const jmove = (op, label, p) => {
    const ik = ikPoint(r, p, { seed: q });
    if (!ik.ok) { fail(op.line, 'unreachable', { target: label, why: ik.why }); return false; }
    add({ line: op.line, op: 'movej', target: label, p, t: moveTime(r, q, ik.q, pct), q: ik.q }); q = ik.q; return true;
  };
  const lmove = (op, label, p) => {
    const from = fkPoint(r, q) || cell.at || p, len = Math.hypot(p[0] - from[0], p[1] - from[1], p[2] - from[2]);
    const n = Math.max(2, Math.ceil(len / 0.01)), travel = new Array(q.length).fill(0);
    let prev = q; const qs = [];
    for (let i = 1; i <= n; i++) {
      const f = i / n, pi = [from[0] + (p[0] - from[0]) * f, from[1] + (p[1] - from[1]) * f, from[2] + (p[2] - from[2]) * f];
      const ik = ikPoint(r, pi, { seed: prev });
      if (!ik.ok) { fail(op.line, 'path-unreachable', { target: label, at: Math.round(f * 100), why: ik.why }); return false; }
      ik.q.forEach((v, j) => { travel[j] += Math.abs(v - prev[j]); });
      if (i === 1 || true) if (ik.q.some((v, j) => Math.abs(v - prev[j]) > 0.6)) { fail(op.line, 'joint-jump', { target: label, at: Math.round(f * 100) }); return false; }
      prev = ik.q; if (i % 5 === 0 || i === n) qs.push(ik.q);
    }
    const k = Math.min(1, Math.max(0.01, pct / 100)), va = jointVA(r);
    let tt = trapezoid(len, r.tcpV * k, r.tcpA * k);
    travel.forEach((d, j) => { tt = Math.max(tt, trapezoid(d, va.v[j] * k, va.a[j] * k)); });
    add({ line: op.line, op: 'movel', target: label, p, t: tt, q: prev, qs }); q = prev; return true;
  };
  for (const op of prog.ops) {
    if (op.op === 'speed') { pct = op.v; continue; }
    if (op.op === 'out' || op.op === 'waitin') { add({ line: op.line, op: op.op === 'out' ? 'out' : 'waitin', target: '', p: null, t: 0, io: { n: op.n, on: op.on } }); continue; }
    if (op.op === 'wait') { add({ line: op.line, op: 'wait', target: '', p: null, t: op.v }); continue; }
    if (op.op === 'home') {
      add({ line: op.line, op: 'movej', target: 'home', p: fkPoint(r, r.home), t: moveTime(r, q, r.home, pct), q: r.home }); q = r.home.slice(); continue;
    }
    const p = pts[op.to];
    if (!p) { fail(op.line, 'no-target', { target: op.to }); break; }
    if (op.op === 'movej') { if (!jmove(op, op.to, p)) break; continue; }
    if (op.op === 'movel') { if (!lmove(op, op.to, p)) break; continue; }
    const c = op.clear ?? cell.clear ?? 0.1, g = op.grip ?? cell.grip ?? 0.3, up = [p[0], p[1], p[2] + c];
    if (!jmove(op, op.to + '+', up)) break;
    if (!lmove(op, op.to, p)) break;
    add({ line: op.line, op: op.op === 'pick' ? 'grip' : 'release', target: op.to, p, t: g, io: { n: cell.gripOut || 1, on: op.op === 'pick' } });
    if (!lmove(op, op.to + '+', up)) break;
  }
  return { ok: issues.length === 0, steps, cycle: Math.round(t * 1e6) / 1e6, issues, q };
}
export function pathCsv(run) {
  const rows = [['step', 'line', 'op', 'target', 'x', 'y', 'z', 'seconds', 'cumulative_seconds']];
  run.steps.forEach((s, i) => rows.push([i + 1, s.line, s.op, s.target, ...(s.p ? s.p.map((v) => Math.round(v * 1e4) / 1e4) : ['', '', '']), s.t, s.tcum]));
  return rows.map((r) => r.join(',')).join('\n') + '\n';
}
export { D2R, R2D, toBase, toWorld };
