/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xr-core.js — the maths and data of design review in a headset (0.6 LC.19), DOM-free and import-free so Node tests drive
 * it as the page does. Shared by ModelCraft and BimCraft: canonical in modelcraft/dev/xr/, byte-identical copy in
 * bimcraft/dev/xr/ (node tools/xr/sync.mjs).
 *
 * Spaces. The app's own space ("app"): ModelCraft Z up, BimCraft Y up (its viewer's), metres. The model's space in the
 * headset ("model"): the app's turned so Y is up (upMatrix). The headset's space ("xr"): WebXR's local-floor, metres, Y up,
 * the floor at y = 0. The model sits in the headset's space through the **rig** = {at: model point under the person's feet
 * (or the table's centre), yaw (radians about Y), scale, anchor: where that model point sits in xr space}:
 *   rigMatrix(rig) = T(anchor) · Ry(yaw) · S(scale) · T(−at)                (model → xr)
 *
 *   upMatrix(up) → app → model (Y up)          · apply(m, p) · applyDir(m, d) · mul(a, b) · invert(m) (rigid + uniform scale)
 *   rigMatrix(rig) · startRig(appCam, upM, floorAt) → the rig that puts the person where the app's camera stands, facing its way
 *   teleportRig(rig, hitModel, headXr, normalModel) → rig | null (only onto floors: a surface facing up, ≤ 35° slope)
 *   turnRig(rig, headXr, degrees) → the person turned right by `degrees` about their head (snap turn)
 *   tableRig(bounds, headXr, headYaw, {size, height, ahead}) → the model as a table-top model in front of the person
 *   snapToVertex(hit, tri, radius) → the nearest corner of the hit triangle within radius, else the hit
 *   measure(a, b) → metres between two model points (scale-free: model space)
 *   sectionPlane(hitModel, normalModel, eyeModel, depth) → {n, d}: keeps n·p ≤ d, the far side of what was pointed at
 *   planCut(hitModel, height) → {n, d}: a floor pointed at from above → everything `height` above it cut away (a plan)
 *   bcfCamera(headXrMatrix, rig, upM, fovDeg) → {kind 'perspective', viewPoint, direction, up, fov} in app space
 *   packPresence({head, left, right, rig, mode, name}, appFromXr) → a small plain object for Live (app space, mm)
 *   cleanPeer(p) → a peer's VR presence checked (it comes from another computer), or null
 *   MODES · FLOOR_SLOPE_DEG
 */

export const MODES = ['teleport', 'measure', 'section', 'issue'];
export const FLOOR_SLOPE_DEG = 35;

// ---- 4 × 4 column-major matrices (three.js layout) ----
export const IDENT = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
export function mul(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  }
  return o;
}
export const apply = (m, p) => [m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12], m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13], m[2] * p[0] + m[6] * p[1] + m[10] * p[2] + m[14]];
export const applyDir = (m, d) => [m[0] * d[0] + m[4] * d[1] + m[8] * d[2], m[1] * d[0] + m[5] * d[1] + m[9] * d[2], m[2] * d[0] + m[6] * d[1] + m[10] * d[2]];
const T = (v) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v[0], v[1], v[2], 1];
const S = (s) => [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1];
const Ry = (a) => { const c = Math.cos(a), s = Math.sin(a); return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]; };
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const fin = (x) => typeof x === 'number' && Number.isFinite(x);

/** The inverse of a rigid motion with a uniform scale (all the rigs and poses here are). */
export function invert(m) {
  const s2 = m[0] * m[0] + m[1] * m[1] + m[2] * m[2] || 1;
  const r = [m[0] / s2, m[4] / s2, m[8] / s2, 0, m[1] / s2, m[5] / s2, m[9] / s2, 0, m[2] / s2, m[6] / s2, m[10] / s2, 0, 0, 0, 0, 1];
  const t = applyDir(r, [m[12], m[13], m[14]]);
  r[12] = -t[0]; r[13] = -t[1]; r[14] = -t[2];
  return r;
}

/** App space → model space with Y up: Z up turns (x, y, z) → (x, z, −y); Y up stays. */
export function upMatrix(up) {
  if (up[2] > 0.5) return [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];
  return IDENT.slice();
}

export function rigMatrix(rig) {
  return mul(T(rig.anchor || [0, 0, 0]), mul(Ry(rig.yaw || 0), mul(S(rig.scale || 1), T(rig.at.map((v) => -v)))));
}

/** The direction a camera looks, as a yaw about Y (0 = looking along −Z, WebXR's forward). */
const yawOf = (dir) => Math.atan2(-dir[0], -dir[2]);

/**
 * Where a person starts: standing under the app's camera (its eye dropped to `floorAt(eyeModel)` — the floor below, or the
 * ground), looking the camera's way. appCam = {eye, target} in app space. The person's own head starts at the xr origin.
 */
export function startRig(appCam, upM, floorAt) {
  const eye = apply(upM, appCam.eye), tgt = apply(upM, appCam.target);
  const f = floorAt(eye);
  const at = [eye[0], fin(f) ? f : 0, eye[2]];
  // the model turns so the camera's direction becomes the person's forward (−Z)
  const look = yawOf(sub(tgt, eye));
  return { at, yaw: -look, scale: 1, anchor: [0, 0, 0] };
}

/**
 * Teleport: the point pointed at (model space) goes under the person's feet. Only onto floors: the surface must face up
 * (normal within FLOOR_SLOPE_DEG of up). The person's head xz in xr stays where it is: the model moves under them.
 */
export function teleportRig(rig, hitModel, headXr, normalModel) {
  if (!hitModel || !normalModel || normalModel[1] < Math.cos((FLOOR_SLOPE_DEG * Math.PI) / 180) * len(normalModel)) return null;
  return { ...rig, at: hitModel.slice(), anchor: [headXr[0], 0, headXr[2]] };
}

/** Snap turn: the person turns `degrees` to the right (negative: left); the model turns the other way about their head. */
export function turnRig(rig, headXr, degrees) {
  const a = (degrees * Math.PI) / 180;
  // the model point under the head stays under the head
  const M = rigMatrix(rig), under = apply(invert(M), [headXr[0], rig.anchor[1], headXr[2]]);
  return { ...rig, at: under, anchor: [headXr[0], rig.anchor[1], headXr[2]], yaw: (rig.yaw || 0) + a };
}

/** The model as a table-top model: its footprint fitted into `size` metres, `ahead` metres in front of the head, its base at `height`. */
export function tableRig(bounds, headXr, headYaw, { size = 1.0, height = 0.75, ahead = 0.7 } = {}) {
  const ext = Math.max(bounds.max[0] - bounds.min[0], bounds.max[2] - bounds.min[2], 1e-6);
  const scale = Math.min(1, size / ext);
  const c = [(bounds.min[0] + bounds.max[0]) / 2, bounds.min[1], (bounds.min[2] + bounds.max[2]) / 2];
  const fwd = [-Math.sin(headYaw), 0, -Math.cos(headYaw)];
  return { at: c, yaw: headYaw, scale, anchor: [headXr[0] + fwd[0] * ahead, height, headXr[2] + fwd[2] * ahead], table: true };
}

/** The corner of the triangle nearest the hit, when within `radius`; else the hit itself. tri = [a, b, c]. */
export function snapToVertex(hit, tri, radius) {
  let best = null, bd = radius;
  for (const v of tri || []) { const d = len(sub(v, hit)); if (d <= bd) { bd = d; best = v; } }
  return best ? best.slice() : hit.slice();
}

export const measure = (a, b) => len(sub(b, a));

/** A floor pointed at from above: a plan cut, everything more than `height` above it cut away (walls show their lower part). */
export function planCut(hitModel, height = 1.2) {
  const at = [hitModel[0], hitModel[1] + height, hitModel[2]];
  return { n: [0, 1, 0], d: at[1], at };
}

/**
 * The section plane through what was pointed at, cutting away the side toward the eye (so you see in), `depth` metres
 * behind the surface. → {n, d} with the KEPT side n·p ≤ d … stored as the cut-away direction n (as BCF does) and d.
 */
export function sectionPlane(hitModel, normalModel, eyeModel, depth = 0.01) {
  let n = norm(normalModel);
  if (dot(n, sub(eyeModel, hitModel)) < 0) n = n.map((v) => -v);   // n points to the eye: the side cut away
  const p = [hitModel[0] - n[0] * depth, hitModel[1] - n[1] * depth, hitModel[2] - n[2] * depth];
  return { n, d: dot(n, p), at: p };   // a point p is cut away when n·p > d
}

/**
 * The BCF camera of what the person sees: the head's pose (xr) back through the rig into model space, then app space.
 * headXr = the head's matrix in xr space (column-major; it looks along its −Z, up its +Y).
 */
export function bcfCamera(headXr, rig, upM, fovDeg = 90) {
  const toApp = mul(invert(upM), invert(rigMatrix(rig)));
  const eye = apply(toApp, [headXr[12], headXr[13], headXr[14]]);
  const dir = norm(applyDir(toApp, applyDir(headXr, [0, 0, -1])));
  const up = norm(applyDir(toApp, applyDir(headXr, [0, 1, 0])));
  return { kind: 'perspective', viewPoint: eye, direction: dir, up, fov: fovDeg };
}

// ---- presence (Studio Live): other people's heads and hands; app space, millimetres, so every app reads them the same ----
const mm = (v) => Math.round(v * 1000);
const q4 = (q) => q.map((v) => Math.round(v * 10000) / 10000);
/** A pose matrix (xr) → [x, y, z (mm, app space), qx, qy, qz, qw (app space)]. */
function poseOut(m, toApp) {
  const p = apply(toApp, [m[12], m[13], m[14]]);
  // the rotation part in app space: columns of toApp · m (scale divided out)
  const r = mul(toApp, m), s = Math.hypot(r[0], r[1], r[2]) || 1;
  const a = [r[0] / s, r[1] / s, r[2] / s], b = [r[4] / s, r[5] / s, r[6] / s], c = [r[8] / s, r[9] / s, r[10] / s];
  const tr = a[0] + b[1] + c[2];
  let q;
  if (tr > 0) { const S2 = Math.sqrt(tr + 1) * 2; q = [(b[2] - c[1]) / S2, (c[0] - a[2]) / S2, (a[1] - b[0]) / S2, 0.25 * S2]; }
  else if (a[0] > b[1] && a[0] > c[2]) { const S2 = Math.sqrt(1 + a[0] - b[1] - c[2]) * 2; q = [0.25 * S2, (b[0] + a[1]) / S2, (c[0] + a[2]) / S2, (b[2] - c[1]) / S2]; }
  else if (b[1] > c[2]) { const S2 = Math.sqrt(1 + b[1] - a[0] - c[2]) * 2; q = [(b[0] + a[1]) / S2, 0.25 * S2, (c[1] + b[2]) / S2, (c[0] - a[2]) / S2]; }
  else { const S2 = Math.sqrt(1 + c[2] - a[0] - b[1]) * 2; q = [(c[0] + a[2]) / S2, (c[1] + b[2]) / S2, 0.25 * S2, (a[1] - b[0]) / S2]; }
  return [mm(p[0]), mm(p[1]), mm(p[2]), ...q4(q)];
}
export function packPresence({ head, left = null, right = null, rig, mode = 'teleport', pointer = null }, upM) {
  const toApp = mul(invert(upM), invert(rigMatrix(rig)));
  return {
    v: 1, h: poseOut(head, toApp), l: left ? poseOut(left, toApp) : null, r: right ? poseOut(right, toApp) : null,
    s: Math.round((rig.scale || 1) * 1000) / 1000, m: MODES.includes(mode) ? mode : 'teleport', t: !!rig.table,
    p: pointer ? apply(toApp, pointer).map(mm) : null,
  };
}
const isPose = (a) => Array.isArray(a) && a.length === 7 && a.every(fin) && a.slice(0, 3).every((v) => Math.abs(v) < 1e10) && a.slice(3).every((v) => Math.abs(v) <= 1.0001);
/** A peer's VR presence (untrusted: from another computer) → {head, left, right, scale, mode, table, pointer} in app space, metres. */
export function cleanPeer(p) {
  const x = p && typeof p === 'object' ? p.xr : null;
  if (!x || typeof x !== 'object' || x.v !== 1 || !isPose(x.h)) return null;
  const pose = (a) => (isPose(a) ? { p: a.slice(0, 3).map((v) => v / 1000), q: a.slice(3) } : null);
  return {
    head: pose(x.h), left: pose(x.l), right: pose(x.r),
    scale: fin(x.s) ? Math.min(1, Math.max(1e-4, x.s)) : 1, mode: MODES.includes(x.m) ? x.m : 'teleport', table: x.t === true,
    pointer: Array.isArray(x.p) && x.p.length === 3 && x.p.every((v) => fin(v) && Math.abs(v) < 1e10) ? x.p.map((v) => v / 1000) : null,
  };
}
