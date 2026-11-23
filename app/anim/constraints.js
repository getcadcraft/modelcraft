/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim/constraints.js — IK and constraints (0.7 AN.3, session `anim`): after the keys, each constraint (render/anim.js
 * `constraints`, in list order) moves its owner — a bone of a rig, or a placement — towards what it asks, by its influence
 * (0…1, animatable on target 'cns:<id>'). DOM-free; the page hands in what lives in the model (`ctx`).
 *
 * Bones (in the rig's mesh coordinates):
 *   'ik'      the owner bone is the tip of a chain of `chain` bones (it and its parents) whose tip reaches the target: two
 *             bones by the law of cosines, bending towards `pole` when given (else the way the chain already bends), more
 *             by FABRIK (`iterations` sweeps); each bone keeps its twist (it is swung, not spun). Out of reach: straight at it
 *   'lookat'  the bone's `axis` (+y = along it) points at the target
 *   'copy'    takes the target's place / turn / size (`mix`)
 *   'limit'   keeps its own place / turn (XYZ °) / size within [min, max] per axis (null = free)
 *   'childof' moves with the target as if it hung from it: target · inverse (the target as it was when set) · own
 * Placements (in world coordinates): 'lookat', 'copy', 'limit', 'childof' as above, and
 *   'path'    sits on a curve object at `offset` (0 = its start, 1 = its end, by length), turned along it when `follow`
 *
 *   solveRig(rig, pose(id) → {location, rotation, scale}, cons, ctx) → {world, skin, locals}   ctx: {point(target) → [x, y, z]
 *     in the mesh's coordinates | null, matrix(target) → m16 | null, influence(c), }
 *   solveObjects(anim, poses Map(key → local m16), vals, ctx) → Map(key → local m16) for every constrained placement (owners
 *     whose targets are themselves constrained run after them)
 *     ctx: {local(path) → its own matrix (keys or rest), parentWorld(path, poses), point(target), matrix(target),
 *     curve(path) → {pts: Float64Array world xyz…, closed}}
 *   twoBoneIK(a, L1, L2, target, poleDir) → {elbow, end} · fabrik(joints, lengths, target, iterations) → joints
 *   swing(u, v) → quaternion turning unit u onto unit v · alongPath(pts, closed, k) → {p, d}
 */
import { compose, decompose, slerp, eulerToQuat, quatToEuler, pathKey } from '../render/anim.js';
import { mul, inv, point, boneRest, order } from './rig.js';
import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, scale3 as scl, sub3 as sub } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const norm = (a) => { const l = len(a); return l > 1e-12 ? scl(a, 1 / l) : [0, 0, 0]; };
const AXIS = { '+x': [1, 0, 0], '-x': [-1, 0, 0], '+y': [0, 1, 0], '-y': [0, -1, 0], '+z': [0, 0, 1], '-z': [0, 0, -1] };
const col = (m, c) => [m[c * 4], m[c * 4 + 1], m[c * 4 + 2]];
const qmul = (a, b) => [
  a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
  a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
];

/** The shortest turn taking unit vector u onto unit vector v (a quaternion). */
export function swing(u, v) {
  const d = dot(u, v);
  if (d > 1 - 1e-12) return [0, 0, 0, 1];
  if (d < -1 + 1e-12) {
    // half a turn about any axis square to u
    const ax = norm(Math.abs(u[0]) < 0.9 ? cross(u, [1, 0, 0]) : cross(u, [0, 1, 0]));
    return [ax[0], ax[1], ax[2], 0];
  }
  const c = cross(u, v), w = 1 + d, l = Math.hypot(c[0], c[1], c[2], w);
  return [c[0] / l, c[1] / l, c[2] / l, w / l];
}
/** A matrix turned by quaternion q about point o (its scale and the rest kept). */
function turnAbout(m, q, o) {
  const R = compose({ t: [0, 0, 0], q, s: [1, 1, 1] });
  const T1 = compose({ t: o, q: [0, 0, 0, 1], s: [1, 1, 1] }), T0 = compose({ t: scl(o, -1), q: [0, 0, 0, 1], s: [1, 1, 1] });
  return mul(T1, mul(R, mul(T0, m)));
}

/** Two bones from a with lengths L1, L2 reaching for target: the elbow (bent towards poleDir) and the end. */
export function twoBoneIK(a, L1, L2, target, poleDir) {
  const toT = sub(target, a), dRaw = len(toT);
  const dir = dRaw > 1e-12 ? scl(toT, 1 / dRaw) : [0, 0, 1];
  const d = Math.min(Math.max(dRaw, Math.abs(L1 - L2) + 1e-9), L1 + L2 - 1e-9);
  // the bend: poleDir made square to the line, else any square direction
  let n = sub(poleDir || [0, 0, 0], scl(dir, dot(poleDir || [0, 0, 0], dir)));
  if (len(n) < 1e-9) n = Math.abs(dir[2]) < 0.9 ? cross(dir, [0, 0, 1]) : cross(dir, [1, 0, 0]);
  n = norm(n);
  const cosA = Math.min(1, Math.max(-1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))), sinA = Math.sqrt(1 - cosA * cosA);
  const elbow = add(a, add(scl(dir, L1 * cosA), scl(n, L1 * sinA)));
  return { elbow, end: add(a, scl(dir, d)) };
}
/** FABRIK: joints [p0 … pn] (p0 stays), segment lengths, a target for pn. → new joints. */
export function fabrik(joints, lengths, target, iterations = 12) {
  const p = joints.map((x) => x.slice()), n = p.length - 1, root = p[0].slice();
  const total = lengths.reduce((s, x) => s + x, 0);
  if (len(sub(target, root)) >= total) {
    // out of reach: straight at it
    const d = norm(sub(target, root));
    for (let i = 1; i <= n; i++) p[i] = add(p[i - 1], scl(d, lengths[i - 1]));
    return p;
  }
  for (let it = 0; it < iterations; it++) {
    p[n] = target.slice();
    for (let i = n - 1; i >= 0; i--) p[i] = add(p[i + 1], scl(norm(sub(p[i], p[i + 1])), lengths[i]));
    p[0] = root.slice();
    for (let i = 1; i <= n; i++) p[i] = add(p[i - 1], scl(norm(sub(p[i], p[i - 1])), lengths[i - 1]));
    if (len(sub(p[n], target)) < 1e-7) break;
  }
  return p;
}
/** A point k (0…1) of the way along a polyline by length, and the direction there. */
export function alongPath(pts, closed, k) {
  const n = pts.length / 3;
  if (n < 2) return null;
  const P = (i) => [pts[(i % n) * 3], pts[(i % n) * 3 + 1], pts[(i % n) * 3 + 2]];
  const segs = closed ? n : n - 1, L = [];
  let total = 0;
  for (let i = 0; i < segs; i++) { const l = len(sub(P(i + 1), P(i))); L.push(l); total += l; }
  if (total <= 0) return { p: P(0), d: [0, 1, 0] };
  let s = Math.min(1, Math.max(0, k)) * total;
  for (let i = 0; i < segs; i++) {
    if (s <= L[i] || i === segs - 1) {
      const f = L[i] > 0 ? Math.min(1, s / L[i]) : 0, a = P(i), b = P(i + 1);
      return { p: add(a, scl(sub(b, a), f)), d: norm(sub(b, a)) };
    }
    s -= L[i];
  }
  return null;
}
/** A matrix whose `axis` points along d (up kept as near `upAxis` → world +Z as it can), its place and scale from m. */
function aim(m, d, axis = '+y', upAxis = '+z') {
  const D = decompose(m), cur = norm(point(compose({ t: [0, 0, 0], q: D.q, s: [1, 1, 1] }), AXIS[axis]));
  const q1 = swing(cur, norm(d));
  let q = qmul(q1, D.q);
  // then turn about d so the up axis leans to world +Z
  const R = compose({ t: [0, 0, 0], q, s: [1, 1, 1] }), up = point(R, AXIS[upAxis]), dn = norm(d);
  const want = sub([0, 0, 1], scl(dn, dot([0, 0, 1], dn))), have = sub(up, scl(dn, dot(up, dn)));
  if (len(want) > 1e-6 && len(have) > 1e-6 && axis[1] !== upAxis[1]) q = qmul(swing(norm(have), norm(want)), q);
  return compose({ t: D.t, q, s: D.s });
}
/** Blend two matrices (place, turn, size) by k. */
function blend(a, b, k) {
  if (k >= 1) return b.slice();
  if (k <= 0) return a.slice();
  const A = decompose(a), B = decompose(b);
  return compose({ t: A.t.map((v, i) => v + (B.t[i] - v) * k), q: slerp(A.q, B.q, k), s: A.s.map((v, i) => v + (B.s[i] - v) * k) });
}
const clampTRS = (m, lim, near) => {
  const D = decompose(m);
  let e = quatToEuler(D.q, near);
  const c3 = (v, r) => v.map((x, i) => (r && r[i] ? Math.min(r[i][1], Math.max(r[i][0], x)) : x));
  return { location: c3(D.t, lim.location), rotation: c3(e, lim.rotation), scale: c3(D.s, lim.scale) };
};

// ---- bones ----
export function solveRig(rig, poseOf, cons, ctx = {}) {
  const rest = new Map(rig.bones.map((b) => [b.id, boneRest(b)])), ord = order(rig), byId = new Map(rig.bones.map((b) => [b.id, b]));
  const locals = new Map();
  for (const b of rig.bones) {
    const p = poseOf(b.id) || {};
    locals.set(b.id, compose({ t: p.location || [0, 0, 0], q: eulerToQuat(p.rotation || [0, 0, 0]), s: p.scale || [1, 1, 1] }));
  }
  const parentRel = (b, world) => (b.parent && world.has(b.parent) ? mul(world.get(b.parent), mul(inv(rest.get(b.parent)), rest.get(b.id))) : rest.get(b.id));
  const worlds = () => {
    const w = new Map();
    for (const b of ord) w.set(b.id, mul(parentRel(b, w), locals.get(b.id)));
    return w;
  };
  let world = worlds();
  /** Give bone b a new world matrix (by influence k): its local is worked back from its parent's. */
  const setWorld = (b, W, k) => {
    const L = mul(inv(parentRel(b, world)), W);
    locals.set(b.id, blend(locals.get(b.id), L, k));
    world = worlds();
  };
  const head = (id) => point(world.get(id), [0, 0, 0]);
  const lengthOf = (b) => len(sub(b.tail, b.head));
  const tip = (id) => point(world.get(id), [0, lengthOf(byId.get(id)), 0]);
  for (const c of cons) {
    if (!c.on) continue;
    const id = c.owner.slice(c.owner.indexOf('/') + 1), b = byId.get(id);
    const k = ctx.influence ? ctx.influence(c) : c.influence;
    if (!b || !(k > 0)) continue;
    // a bone of this rig: its head; a point: as given (the mesh's coordinates); a placement: through ctx
    const ptOf = (x) => (!x ? null : x.kind === 'bone' && x.rig === rig.id ? (byId.has(x.bone) ? head(x.bone) : null) : x.kind === 'point' ? x.p.slice() : ctx.point?.(x) || null);
    const tgtPoint = () => ptOf(c.target);
    const tgtMatrix = () => (!c.target ? null : c.target.kind === 'bone' && c.target.rig === rig.id ? world.get(c.target.bone) || null
      : c.target.kind === 'point' ? compose({ t: c.target.p, q: [0, 0, 0, 1], s: [1, 1, 1] }) : ctx.matrix?.(c.target) || null);
    if (c.type === 'ik') {
      const T = tgtPoint();
      if (!T) continue;
      const chain = [b];
      while (chain.length < c.chain && chain[0].parent && byId.has(chain[0].parent)) chain.unshift(byId.get(chain[0].parent));
      const joints = [...chain.map((x) => head(x.id)), tip(b.id)], lengths = chain.map(lengthOf);
      let next;
      if (chain.length === 2) {
        const pole = ptOf(c.pole);
        const bendNow = sub(joints[1], add(joints[0], scl(norm(sub(joints[2], joints[0])), dot(sub(joints[1], joints[0]), norm(sub(joints[2], joints[0]))))));
        const r = twoBoneIK(joints[0], lengths[0], lengths[1], T, pole ? sub(pole, joints[0]) : bendNow);
        next = [joints[0], r.elbow, r.end];
      } else if (chain.length === 1) next = [joints[0], add(joints[0], scl(norm(sub(T, joints[0])), lengths[0]))];
      else next = fabrik(joints, lengths, T, c.iterations);
      // swing each bone of the chain, root first, so its Y runs to the next joint
      chain.forEach((x, i) => {
        const W = world.get(x.id), from = norm(col(W, 1)), to = norm(sub(next[i + 1], head(x.id)));
        setWorld(x, turnAbout(W, swing(from, to), head(x.id)), k);
      });
    } else if (c.type === 'lookat') {
      const T = tgtPoint();
      if (!T) continue;
      setWorld(b, aim(world.get(b.id), sub(T, head(b.id)), c.axis, c.up), k);
    } else if (c.type === 'copy') {
      const M = tgtMatrix();
      if (!M) continue;
      const A = decompose(world.get(b.id)), B = decompose(M);
      setWorld(b, compose({ t: c.mix.location ? B.t : A.t, q: c.mix.rotation ? B.q : A.q, s: c.mix.scale ? B.s : A.s }), k);
    } else if (c.type === 'limit') {
      const p = poseOf(b.id) || {}, x = clampTRS(locals.get(b.id), c.limits, p.rotation || [0, 0, 0]);
      locals.set(b.id, blend(locals.get(b.id), compose({ t: x.location, q: eulerToQuat(x.rotation), s: x.scale }), k));
      world = worlds();
    } else if (c.type === 'childof') {
      const M = tgtMatrix();
      if (!M) continue;
      setWorld(b, mul(M, mul(c.inverse || inv(M), world.get(b.id))), k);
    }
  }
  const skin = new Map(rig.bones.map((x) => [x.id, mul(world.get(x.id), inv(rest.get(x.id)))]));
  return { world, skin, rest, locals };
}

// ---- placements ----
export function solveObjects(anim, poses, vals, ctx) {
  const out = new Map();
  const all = (anim.constraints || []).filter((c) => c.on && c.owner.startsWith('obj:'));
  if (!all.length) return out;
  // owners whose targets are other owners come after them (a placement looking at one that follows a path sees it on the
  // path); each owner's own constraints keep their order; a loop keeps the list's order
  const owners = [...new Set(all.map((c) => c.owner.slice(4)))], deps = new Map(owners.map((o) => [o, new Set()]));
  for (const c of all) for (const x of [c.target, c.pole]) if (x && x.kind === 'obj') { const k = pathKey(x.path); if (deps.has(k) && k !== c.owner.slice(4)) deps.get(c.owner.slice(4)).add(k); }
  const sorted = [], state = new Map();
  const visit = (o) => { if (state.get(o) === 2 || state.get(o) === 1) return; state.set(o, 1); for (const d of deps.get(o)) visit(d); state.set(o, 2); sorted.push(o); };
  for (const o of owners) visit(o);
  const cons = sorted.flatMap((o) => all.filter((c) => c.owner.slice(4) === o));
  const cur = new Map(poses);
  const localOf = (key, path) => cur.get(key) || ctx.local(path);
  for (const c of cons) {
    const key = c.owner.slice(4), path = key.split('/').map(Number);
    const k = vals && vals.has('cns:' + c.id + '|influence') ? vals.get('cns:' + c.id + '|influence')[0] : c.influence;
    if (!(k > 0)) continue;
    const L = localOf(key, path);
    if (!L) continue;
    const PW = ctx.parentWorld(path, cur), W = mul(PW, L);
    let N = null;
    if (c.type === 'lookat') { const T = ctx.point(c.target, cur); if (T) N = aim(W, sub(T, col(W, 3)), c.axis, c.up); }
    else if (c.type === 'copy') {
      const M = ctx.matrix(c.target, cur);
      if (M) { const A = decompose(W), B = decompose(M); N = compose({ t: c.mix.location ? B.t : A.t, q: c.mix.rotation ? B.q : A.q, s: c.mix.scale ? B.s : A.s }); }
    } else if (c.type === 'limit') {
      const x = clampTRS(L, c.limits, null);
      cur.set(key, blend(L, compose({ t: x.location, q: eulerToQuat(x.rotation), s: x.scale }), k));
      out.set(key, cur.get(key));
      continue;
    } else if (c.type === 'childof') { const M = ctx.matrix(c.target, cur); if (M) N = mul(M, mul(c.inverse || inv(M), W)); }
    else if (c.type === 'path') {
      const cv = c.target && c.target.kind === 'obj' ? ctx.curve(c.target.path, cur) : null;
      const off = vals && vals.has('cns:' + c.id + '|offset') ? vals.get('cns:' + c.id + '|offset')[0] : c.offset;
      const at = cv && alongPath(cv.pts, cv.closed, off);
      if (at) { const D = decompose(W); N = compose({ t: at.p, q: D.q, s: D.s }); if (c.follow) N = aim(N, at.d, c.axis, c.up); }
    }
    if (!N) continue;
    const next = blend(L, mul(inv(PW), N), k);
    cur.set(key, next);
    out.set(key, next);
  }
  return out;
}
export { pathKey };
