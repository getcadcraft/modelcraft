/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim.js — an animation on a timeline (0.6 LC.10): a camera path and object keyframes, played in the view and rendered
 * to video frame by frame. Shared by ModelCraft and BimCraft: canonical in modelcraft/dev/render/, byte-identical copy in
 * bimcraft/dev/render/ (node tools/render/sync.mjs). DOM-free and import-free, so Node tests drive it as the page does.
 *
 *   anim = {
 *     format: 'cadcraft-anim', version: 1,
 *     fps: 24 | 25 | 30 | 60,  length: seconds (0.5 … 3600),
 *     camera: [{t, cam: {eye, target, fov, persp, height}, ease}],          the camera's keys, by time
 *     objects: [{path: [instance ids], name, keys: [{t, m: number[16], ease}]}]   placements that move (column-major
 *                                                                           matrices, the placement's own, in its parent)
 *   }
 *   ease (of the stretch that starts at a key): 'smooth' (a curve through the keys around it), 'linear' (straight, steady
 *   speed), 'stop' (slows into this key and out of it: no speed at the key), 'hold' (stays put until the next key).
 *
 *   emptyAnim() · cleanAnim(untrusted) → anim | null · EASES · FPS
 *   setCameraKey(anim, t, cam, ease?) · setObjectKey(anim, path, name, t, m, ease?) · removeKey(anim, track, t)
 *   moveKey(anim, track, t, t2) · setEase(anim, track, t, ease) · removeTrack(anim, track) · retime(anim, length)
 *     (each returns a new anim; track = 'camera' or an index into objects)
 *   cameraAt(anim, t) → cam | null · poseAt(track, t) → m · posesAt(anim, t) → [{path, key, m}]
 *   keyTimes(anim) → sorted times · nextKey(anim, t, dir) → t | null · frameCount(anim, fps?) · frameTime(i, fps)
 *   fromScenes(scenes, {move, hold}) → camera keys, the scenes in order (the walkthrough video, WALK)
 *   pathKey(path) → 'a/b/c' · decompose(m) → {t, q, s} · compose({t, q, s}) → m · slerp(a, b, k)
 *
 * Times are seconds, kept to the millisecond. A key at the same time as another on its track replaces it.
 */

export const FORMAT = 'cadcraft-anim';
export const EASES = ['smooth', 'linear', 'stop', 'hold'];
export const FPS = [24, 25, 30, 60];
export const LIMITS = { length: 3600, keys: 2000, tracks: 500, path: 32 };

const r3 = (x) => Math.round(x * 1000) / 1000;
const fin = (x) => typeof x === 'number' && Number.isFinite(x);
const isPt = (p) => Array.isArray(p) && p.length === 3 && p.every((x) => fin(x) && Math.abs(x) < 1e9);
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const cleanName = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 80);

export function emptyAnim(length = 10, fps = 30) {
  return { format: FORMAT, version: 1, fps: FPS.includes(fps) ? fps : 30, length: clamp(r3(length), 0.5, LIMITS.length), camera: [], objects: [] };
}

export const pathKey = (path) => path.join('/');

function cleanCam(c) {
  if (!c || !isPt(c.eye) || !isPt(c.target)) return null;
  if (Math.hypot(c.eye[0] - c.target[0], c.eye[1] - c.target[1], c.eye[2] - c.target[2]) < 1e-9) return null;
  return {
    eye: c.eye.slice(), target: c.target.slice(),
    fov: fin(c.fov) ? clamp(c.fov, 10, 120) : 35, persp: c.persp !== false,
    height: fin(c.height) ? clamp(c.height, 1e-6, 1e7) : 10,
  };
}
const cleanEase = (e) => (EASES.includes(e) ? e : 'smooth');
const isMatrix = (m) => Array.isArray(m) && m.length === 16 && m.every((x) => fin(x) && Math.abs(x) < 1e9);

function sortKeys(keys) {
  keys.sort((a, b) => a.t - b.t);
  const out = [];
  for (const k of keys) { if (out.length && out[out.length - 1].t === k.t) out[out.length - 1] = k; else out.push(k); }
  return out;
}

/** A file's animation, checked (it is untrusted): unknown keys dropped, numbers range-checked, keys sorted. null = nothing usable. */
export function cleanAnim(a) {
  if (!a || typeof a !== 'object' || a.format !== FORMAT || a.version !== 1) return null;
  const out = emptyAnim(fin(a.length) ? a.length : 10, a.fps);
  const L = out.length;
  const time = (t) => (fin(t) && t >= 0 && t <= L + 1e-9 ? r3(t) : null);
  if (Array.isArray(a.camera)) {
    const ks = [];
    for (const k of a.camera.slice(0, LIMITS.keys)) {
      const t = time(k && k.t), cam = k && cleanCam(k.cam);
      if (t !== null && cam) ks.push({ t, cam, ease: cleanEase(k.ease) });
    }
    out.camera = sortKeys(ks);
  }
  if (Array.isArray(a.objects)) {
    const seen = new Set();
    for (const o of a.objects.slice(0, LIMITS.tracks)) {
      if (!o || !Array.isArray(o.path) || !o.path.length || o.path.length > LIMITS.path || !o.path.every((x) => Number.isInteger(x) && x >= 0)) continue;
      const key = pathKey(o.path);
      if (seen.has(key)) continue;
      const ks = [];
      for (const k of (Array.isArray(o.keys) ? o.keys : []).slice(0, LIMITS.keys)) {
        const t = time(k && k.t);
        if (t !== null && k && isMatrix(k.m)) ks.push({ t, m: k.m.slice(), ease: cleanEase(k.ease) });
      }
      if (!ks.length) continue;
      seen.add(key);
      out.objects.push({ path: o.path.slice(), name: cleanName(o.name), keys: sortKeys(ks) });
    }
  }
  return out;
}

// ---- editing (each returns a new animation; the input is left alone) ----
const copy = (a) => ({ ...a, camera: a.camera.map((k) => ({ ...k })), objects: a.objects.map((o) => ({ ...o, keys: o.keys.map((k) => ({ ...k })) })) });
const grow = (a, t) => { if (t > a.length) a.length = clamp(r3(t), 0.5, LIMITS.length); };

export function setCameraKey(anim, t, cam, ease) {
  const c = cleanCam(cam);
  if (!c || !fin(t) || t < 0 || t > LIMITS.length) return anim;
  const a = copy(anim), at = r3(t);
  const old = a.camera.find((k) => k.t === at);
  a.camera = sortKeys([...a.camera, { t: at, cam: c, ease: cleanEase(ease ?? (old ? old.ease : 'smooth')) }]);
  grow(a, at);
  return a;
}

export function setObjectKey(anim, path, name, t, m, ease) {
  if (!Array.isArray(path) || !path.length || !isMatrix(m) || !fin(t) || t < 0 || t > LIMITS.length) return anim;
  const a = copy(anim), at = r3(t), key = pathKey(path);
  let o = a.objects.find((x) => pathKey(x.path) === key);
  if (!o) { if (a.objects.length >= LIMITS.tracks) return anim; o = { path: path.slice(), name: cleanName(name), keys: [] }; a.objects.push(o); }
  else if (name) o.name = cleanName(name);
  const old = o.keys.find((k) => k.t === at);
  o.keys = sortKeys([...o.keys, { t: at, m: m.slice(), ease: cleanEase(ease ?? (old ? old.ease : 'smooth')) }]);
  grow(a, at);
  return a;
}

const keysOf = (a, track) => (track === 'camera' ? a.camera : a.objects[track] ? a.objects[track].keys : null);
function setKeys(a, track, keys) {
  if (track === 'camera') a.camera = keys;
  else if (keys.length) a.objects[track].keys = keys;
  else a.objects.splice(track, 1);   // an object with no keys left no longer moves
}

export function removeKey(anim, track, t) {
  const a = copy(anim), ks = keysOf(a, track);
  if (!ks) return anim;
  setKeys(a, track, ks.filter((k) => k.t !== r3(t)));
  return a;
}
export function moveKey(anim, track, t, t2) {
  const a = copy(anim), ks = keysOf(a, track);
  if (!ks || !fin(t2)) return anim;
  const k = ks.find((x) => x.t === r3(t));
  if (!k) return anim;
  k.t = r3(clamp(t2, 0, LIMITS.length));
  setKeys(a, track, sortKeys(ks));
  grow(a, k.t);
  return a;
}
export function setEase(anim, track, t, ease) {
  const a = copy(anim), ks = keysOf(a, track);
  const k = ks && ks.find((x) => x.t === r3(t));
  if (!k) return anim;
  k.ease = cleanEase(ease);
  return a;
}
export function removeTrack(anim, track) {
  const a = copy(anim);
  if (track === 'camera') a.camera = []; else if (a.objects[track]) a.objects.splice(track, 1);
  return a;
}
/** Stretch or squeeze every key to a new length (seconds). */
export function retime(anim, length) {
  if (!fin(length)) return anim;
  const L = clamp(r3(length), 0.5, LIMITS.length), k = L / anim.length;
  const a = copy(anim);
  a.length = L;
  a.camera = sortKeys(a.camera.map((x) => ({ ...x, t: r3(x.t * k) })));
  for (const o of a.objects) o.keys = sortKeys(o.keys.map((x) => ({ ...x, t: r3(x.t * k) })));
  return a;
}

// ---- reading ----
export function keyTimes(anim) {
  const s = new Set(anim.camera.map((k) => k.t));
  for (const o of anim.objects) for (const k of o.keys) s.add(k.t);
  return [...s].sort((a, b) => a - b);
}
/** The next key after t (dir 1) or before it (dir -1), on any track; null when there is none. */
export function nextKey(anim, t, dir = 1) {
  const ts = keyTimes(anim);
  if (dir > 0) return ts.find((x) => x > t + 1e-6) ?? null;
  for (let i = ts.length - 1; i >= 0; i--) if (ts[i] < t - 1e-6) return ts[i];
  return null;
}
export const frameCount = (anim, fps = anim.fps) => Math.max(1, Math.round(anim.length * fps) + 1);
export const frameTime = (i, fps) => i / fps;

/** Where t falls among the keys: {i, s} = between keys i and i+1 at s ∈ [0, 1] of the way (before the first / after the last: clamped). */
function locate(keys, t) {
  if (t <= keys[0].t) return { i: 0, s: 0 };
  const n = keys.length;
  if (t >= keys[n - 1].t) return { i: n - 1, s: 0 };
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (keys[mid].t <= t) lo = mid; else hi = mid; }
  return { i: lo, s: (t - keys[lo].t) / (keys[lo + 1].t - keys[lo].t) };
}

/**
 * The speed of a value at key i (per second): a curve through its neighbours (Catmull–Rom on uneven times), nothing at the
 * ends and at 'stop' keys. `get(k)` reads the value (an array) out of a key.
 */
function tangent(keys, i, get) {
  const k = keys[i];
  // a key that then holds still is arrived at slowly too, as is one after a hold
  if (i === 0 || i === keys.length - 1 || k.ease === 'stop' || k.ease === 'hold' || keys[i - 1].ease === 'hold') return null;
  const a = get(keys[i - 1]), b = get(keys[i + 1]), dt = keys[i + 1].t - keys[i - 1].t;
  return a.map((x, j) => (b[j] - x) / dt);
}

/** A value between keys i and i+1 at s: Hermite with the keys' speeds, a straight line, or held. */
function between(keys, i, s, get) {
  const k0 = keys[i], k1 = keys[i + 1], p0 = get(k0), p1 = get(k1);
  if (k0.ease === 'hold') return p0.slice();
  if (k0.ease === 'linear') return p0.map((x, j) => x + (p1[j] - x) * s);
  const dt = k1.t - k0.t;
  const m0 = k0.ease === 'stop' ? null : tangent(keys, i, get);
  const m1 = k1.ease === 'stop' ? null : tangent(keys, i + 1, get);
  const s2 = s * s, s3 = s2 * s;
  const h00 = 2 * s3 - 3 * s2 + 1, h10 = s3 - 2 * s2 + s, h01 = -2 * s3 + 3 * s2, h11 = s3 - s2;
  return p0.map((x, j) => h00 * x + h01 * p1[j] + h10 * dt * (m0 ? m0[j] : 0) + h11 * dt * (m1 ? m1[j] : 0));
}

/** How far along (0…1) a stretch starting at a key is at s, for values that can't be curved through (rotations, switches). */
function eased(ease, s) {
  if (ease === 'hold') return 0;
  if (ease === 'linear') return s;
  return s * s * (3 - 2 * s);
}

/** The camera at time t (seconds), or null when the camera has no keys. */
export function cameraAt(anim, t) {
  const keys = anim.camera;
  if (!keys.length) return null;
  const { i, s } = locate(keys, t);
  if (s === 0 || i === keys.length - 1) return cleanCam(keys[i].cam);
  const v = between(keys, i, s, (k) => [...k.cam.eye, ...k.cam.target, k.cam.fov, Math.log(k.cam.height)]);
  const k = eased(keys[i].ease, s), a = keys[i].cam, b = keys[i + 1].cam;
  const cam = { eye: v.slice(0, 3), target: v.slice(3, 6), fov: clamp(v[6], 10, 120), persp: k < 0.5 ? a.persp : b.persp, height: clamp(Math.exp(v[7]), 1e-6, 1e7) };
  return cleanCam(cam) || cleanCam(a);
}

// ---- matrices: column-major 4×4 (three.js / glTF layout) ----
/** A placement matrix as position, rotation (unit quaternion x, y, z, w) and scale (a mirror shows as a negative x scale). */
export function decompose(m) {
  const col = (c) => [m[c * 4], m[c * 4 + 1], m[c * 4 + 2]];
  let x = col(0), y = col(1), z = col(2);
  let sx = Math.hypot(...x), sy = Math.hypot(...y), sz = Math.hypot(...z);
  const det = x[0] * (y[1] * z[2] - y[2] * z[1]) - x[1] * (y[0] * z[2] - y[2] * z[0]) + x[2] * (y[0] * z[1] - y[1] * z[0]);
  if (det < 0) sx = -sx;
  const n = (v, s) => (Math.abs(s) > 1e-12 ? v.map((u) => u / s) : v);
  x = n(x, sx); y = n(y, sy); z = n(z, sz);
  // rotation matrix → quaternion (Shepperd)
  const [m00, m10, m20] = x, [m01, m11, m21] = y, [m02, m12, m22] = z;
  const tr = m00 + m11 + m22;
  let q;
  if (tr > 0) { const S = Math.sqrt(tr + 1) * 2; q = [(m21 - m12) / S, (m02 - m20) / S, (m10 - m01) / S, 0.25 * S]; }
  else if (m00 > m11 && m00 > m22) { const S = Math.sqrt(1 + m00 - m11 - m22) * 2; q = [0.25 * S, (m01 + m10) / S, (m02 + m20) / S, (m21 - m12) / S]; }
  else if (m11 > m22) { const S = Math.sqrt(1 + m11 - m00 - m22) * 2; q = [(m01 + m10) / S, 0.25 * S, (m12 + m21) / S, (m02 - m20) / S]; }
  else { const S = Math.sqrt(1 + m22 - m00 - m11) * 2; q = [(m02 + m20) / S, (m12 + m21) / S, 0.25 * S, (m10 - m01) / S]; }
  const ql = Math.hypot(...q) || 1;
  return { t: [m[12], m[13], m[14]], q: q.map((v) => v / ql), s: [sx, sy, sz] };
}
export function compose({ t, q, s }) {
  const [x, y, z, w] = q;
  const xx = x * x, yy = y * y, zz = z * z, xy = x * y, xz = x * z, yz = y * z, wx = w * x, wy = w * y, wz = w * z;
  return [
    (1 - 2 * (yy + zz)) * s[0], 2 * (xy + wz) * s[0], 2 * (xz - wy) * s[0], 0,
    2 * (xy - wz) * s[1], (1 - 2 * (xx + zz)) * s[1], 2 * (yz + wx) * s[1], 0,
    2 * (xz + wy) * s[2], 2 * (yz - wx) * s[2], (1 - 2 * (xx + yy)) * s[2], 0,
    t[0], t[1], t[2], 1,
  ];
}
/** Spherical blend of two unit quaternions, the short way round. */
export function slerp(a, b, k) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  const bb = d < 0 ? b.map((v) => -v) : b;
  d = Math.abs(d);
  if (d > 0.9995) { const r = a.map((v, i) => v + (bb[i] - v) * k), l = Math.hypot(...r) || 1; return r.map((v) => v / l); }
  const th = Math.acos(Math.min(1, d)), sn = Math.sin(th);
  const wa = Math.sin((1 - k) * th) / sn, wb = Math.sin(k * th) / sn;
  return a.map((v, i) => v * wa + bb[i] * wb);
}

/** One object's placement matrix at time t: its position follows the keys' curve, its turn and size blend between keys. */
export function poseAt(track, t) {
  const keys = track.keys;
  const { i, s } = locate(keys, t);
  if (s === 0 || i === keys.length - 1) return keys[i].m.slice();
  const d = (k) => (k._d || (Object.defineProperty(k, '_d', { value: decompose(k.m), enumerable: false }), k._d));
  const pos = between(keys, i, s, (k) => d(k).t);
  const k = eased(keys[i].ease, s), a = d(keys[i]), b = d(keys[i + 1]);
  const q = slerp(a.q, b.q, k);
  const sc = a.s.map((v, j) => v + (b.s[j] - v) * k);
  return compose({ t: pos, q, s: sc });
}
export function posesAt(anim, t) {
  return anim.objects.map((o) => ({ path: o.path, key: pathKey(o.path), m: poseAt(o, t) }));
}

/**
 * Camera keys from saved scenes, in order (the walkthrough video): each scene is held for `hold` seconds, and the camera
 * moves to the next one over `move` seconds, slowing into every scene. → {keys, length}
 */
export function fromScenes(scenes, { move = 3, hold = 1.5 } = {}) {
  const keys = [];
  let t = 0;
  scenes.forEach((sc, i) => {
    const cam = sc && cleanCam(sc.cam);
    if (!cam) return;
    if (keys.length) t += move;
    keys.push({ t: r3(t), cam, ease: hold > 0 ? 'hold' : 'stop' });
    if (hold > 0) { t += hold; keys.push({ t: r3(t), cam: { ...cam, eye: cam.eye.slice(), target: cam.target.slice() }, ease: 'stop' }); }
  });
  return { keys: sortKeys(keys), length: Math.max(0.5, r3(t)) };
}
