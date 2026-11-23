/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim/physics.js — simple rigid bodies (0.7 AN.5, session `anim`): drop, stack and collide, then bake to keys. Our own
 * implementation of extended position-based dynamics for rigid bodies (M. Müller, M. Macklin, N. Chentanez, S. Jeschke,
 * T.-Y. Kim, "Detailed Rigid Body Simulation with Extended Position Based Dynamics", SCA 2020): small substeps, contacts
 * solved as position constraints with static friction, then restitution and dynamic friction on the velocities. DOM-free.
 *
 * Shapes: a box (the placement's bounds) or a sphere (round its bounds). A box touches with 26 points (corners, edge middles,
 * face middles), so boxes stack face to face; against a box or the ground, a point's depth and normal come from the nearest
 * face. Not built: cloth, fluids, soft bodies, joints between bodies, shapes other than boxes and spheres.
 *
 *   simulate({bodies, gravity, ground: {on, z}, fps, from, to, substeps, maxSteps}) → {frames: [Map(id → {x, q})], steps, ms, settled}
 *     body = {id, kind 'active' | 'passive', shape 'box' | 'sphere', half [hx, hy, hz] (box, scaled), r (sphere), x [centre],
 *             q [quaternion], v?, w?, mass, friction, bounce}
 *   bodyFromPlacement(id, W (world m16), bounds {min, max} (definition), opts) → body   (W's scale goes into the size)
 *   placementAt(body, state) → the world m16 of the placement at that state (its offset from the body's centre kept)
 *   cleanPhysics(x) → settings | null · PHYSICS_DEFAULTS   (in render/anim.js: the settings travel in the animation)
 */

import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, scale3 as scl, sub3 as sub } from '../geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
const qmul = (a, b) => [
  a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
  a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
];
const qnorm = (q) => { const l = Math.hypot(q[0], q[1], q[2], q[3]) || 1; return [q[0] / l, q[1] / l, q[2] / l, q[3] / l]; };
const qconj = (q) => [-q[0], -q[1], -q[2], q[3]];
/** Rotate v by unit quaternion q. */
function rot(q, v) {
  const u = [q[0], q[1], q[2]], s = q[3], c = add(cross(u, v), scl(v, s));
  return add(v, scl(cross(u, c), 2));
}
const rotInv = (q, v) => rot(qconj(q), v);

export { cleanPhysics, PHYSICS_DEFAULTS } from '../render/anim.js';

/** A rigid body from a placement: its definition's bounds, its world matrix (whose scale goes into the size). */
export function bodyFromPlacement(id, W, bounds, { kind = 'active', shape = 'box', mass = 1, friction = 0.5, bounce = 0.1 } = {}) {
  const sx = Math.hypot(W[0], W[1], W[2]), sy = Math.hypot(W[4], W[5], W[6]), sz = Math.hypot(W[8], W[9], W[10]);
  const c = scl(add(bounds.min, bounds.max), 0.5), hl = scl(sub(bounds.max, bounds.min), 0.5);
  const half = [Math.max(1e-4, hl[0] * sx), Math.max(1e-4, hl[1] * sy), Math.max(1e-4, hl[2] * sz)];
  // the turn: W's columns without their scale (a mirrored placement is turned, not flipped)
  const x = [W[0] / sx, W[1] / sx, W[2] / sx], y = [W[4] / sy, W[5] / sy, W[6] / sy], z = [W[8] / sz, W[9] / sz, W[10] / sz];
  const q = matToQuat(x, y, z);
  const centre = [W[0] * c[0] + W[4] * c[1] + W[8] * c[2] + W[12], W[1] * c[0] + W[5] * c[1] + W[9] * c[2] + W[13], W[2] * c[0] + W[6] * c[1] + W[10] * c[2] + W[14]];
  return { id, kind, shape, half, r: Math.max(...half), x: centre, q, mass, friction, bounce,   // a sphere: as big as the bounds' widest half
    place: { scale: [sx, sy, sz], c } };
}
function matToQuat(x, y, z) {
  const m00 = x[0], m10 = x[1], m20 = x[2], m01 = y[0], m11 = y[1], m21 = y[2], m02 = z[0], m12 = z[1], m22 = z[2], tr = m00 + m11 + m22;
  let q;
  if (tr > 0) { const S = Math.sqrt(tr + 1) * 2; q = [(m21 - m12) / S, (m02 - m20) / S, (m10 - m01) / S, 0.25 * S]; }
  else if (m00 > m11 && m00 > m22) { const S = Math.sqrt(1 + m00 - m11 - m22) * 2; q = [0.25 * S, (m01 + m10) / S, (m02 + m20) / S, (m21 - m12) / S]; }
  else if (m11 > m22) { const S = Math.sqrt(1 + m11 - m00 - m22) * 2; q = [(m01 + m10) / S, 0.25 * S, (m12 + m21) / S, (m02 - m20) / S]; }
  else { const S = Math.sqrt(1 + m22 - m00 - m11) * 2; q = [(m02 + m20) / S, (m12 + m21) / S, 0.25 * S, (m10 - m01) / S]; }
  return qnorm(q);
}
/** The placement's world matrix with its body at state {x, q}. */
export function placementAt(body, st) {
  const { scale: s, c } = body.place, q = st.q;
  const X = rot(q, [1, 0, 0]), Y = rot(q, [0, 1, 0]), Z = rot(q, [0, 0, 1]);
  const off = add(add(scl(X, s[0] * c[0]), scl(Y, s[1] * c[1])), scl(Z, s[2] * c[2]));
  const t = sub(st.x, off);
  return [X[0] * s[0], X[1] * s[0], X[2] * s[0], 0, Y[0] * s[1], Y[1] * s[1], Y[2] * s[1], 0, Z[0] * s[2], Z[1] * s[2], Z[2] * s[2], 0, t[0], t[1], t[2], 1];
}

// ---- the solver ----
function prepare(b) {
  const B = { ...b, x: b.x.slice(), q: qnorm(b.q.slice()), v: (b.v || [0, 0, 0]).slice(), w: (b.w || [0, 0, 0]).slice() };
  B.dyn = b.kind === 'active';
  B.invMass = B.dyn ? 1 / b.mass : 0;
  if (b.shape === 'sphere') { B.r = b.r || Math.max(...b.half); const I = 0.4 * b.mass * B.r * B.r; B.invI = B.dyn ? [1 / I, 1 / I, 1 / I] : [0, 0, 0]; }
  else {
    const [a, c, d] = b.half.map((h) => 2 * h), m = b.mass;
    B.invI = B.dyn ? [12 / (m * (c * c + d * d)), 12 / (m * (a * a + d * d)), 12 / (m * (a * a + c * c))] : [0, 0, 0];
    // the points a box touches with: corners, edge middles, face middles (body coordinates)
    B.pts = [];
    for (const i of [-1, 0, 1]) for (const j of [-1, 0, 1]) for (const k of [-1, 0, 1]) if (i || j || k) B.pts.push([i * b.half[0], j * b.half[1], k * b.half[2]]);
  }
  B.bound = b.shape === 'sphere' ? B.r : len(b.half);
  return B;
}
/** World inverse inertia applied to a vector: R · I⁻¹ · Rᵀ · v. */
const invIw = (B, v) => { const l = rotInv(B.q, v); return rot(B.q, [l[0] * B.invI[0], l[1] * B.invI[1], l[2] * B.invI[2]]); };
/** How far point p (world) is inside box B, and the normal out of B there (the nearest face). → {d, n} | null */
function inBox(B, p, margin = 0) {
  const l = rotInv(B.q, sub(p, B.x)), h = B.half;
  const ex = [h[0] + margin - Math.abs(l[0]), h[1] + margin - Math.abs(l[1]), h[2] + margin - Math.abs(l[2])];
  if (ex[0] < 0 || ex[1] < 0 || ex[2] < 0) return null;
  const a = ex[0] < ex[1] ? (ex[0] < ex[2] ? 0 : 2) : ex[1] < ex[2] ? 1 : 2;
  const nl = [0, 0, 0]; nl[a] = l[a] >= 0 ? 1 : -1;
  return { d: ex[a] - margin, n: rot(B.q, nl) };
}
/**
 * Contacts of body A against body B or the ground: [{a, b, at() → {p (world, on A), n (from B into A), d (depth)} | null}].
 * Each is measured again when it is solved (`at`), as XPBD wants: a correction moves the body, the next one sees that.
 */
function sphereBox(S, Bx) {
  const l = rotInv(Bx.q, sub(S.x, Bx.x)), h = Bx.half, cp = [Math.max(-h[0], Math.min(h[0], l[0])), Math.max(-h[1], Math.min(h[1], l[1])), Math.max(-h[2], Math.min(h[2], l[2]))];
  const dv = sub(l, cp), dl = len(dv);
  if (dl > 1e-9) { if (dl >= S.r) return null; const n = rot(Bx.q, scl(dv, 1 / dl)); return { p: sub(S.x, scl(n, S.r)), n, d: S.r - dl }; }
  const ib = inBox(Bx, S.x);
  return ib ? { p: sub(S.x, scl(ib.n, S.r)), n: ib.n, d: ib.d + S.r } : null;
}
function contacts(A, B, ground) {
  const out = [];
  if (ground) {
    const z = ground.z;
    if (A.shape === 'sphere') { if (A.x[2] - A.r < z + 1e-3) out.push({ a: A, b: null, at: () => { const d = z - (A.x[2] - A.r); return d > 0 ? { p: [A.x[0], A.x[1], A.x[2] - A.r], n: [0, 0, 1], d } : null; } }); }
    else for (const pt of A.pts) {
      if (add(A.x, rot(A.q, pt))[2] >= z + 1e-3) continue;
      out.push({ a: A, b: null, at: () => { const p = add(A.x, rot(A.q, pt)), d = z - p[2]; return d > 0 ? { p, n: [0, 0, 1], d } : null; } });
    }
    return out;
  }
  if (len(sub(A.x, B.x)) > A.bound + B.bound + 1e-3) return out;
  if (A.shape === 'sphere' && B.shape === 'sphere') {
    out.push({ a: A, b: B, at: () => { const dv = sub(A.x, B.x), dl = len(dv), d = A.r + B.r - dl; if (!(d > 0) || dl < 1e-12) return null; const n = scl(dv, 1 / dl); return { p: sub(A.x, scl(n, A.r)), n, d }; } });
    return out;
  }
  if (A.shape === 'sphere' && B.shape === 'box') { out.push({ a: A, b: B, at: () => sphereBox(A, B) }); return out; }
  if (A.shape === 'box' && B.shape === 'sphere') {
    out.push({ a: A, b: B, at: () => { const c = sphereBox(B, A); return c ? { p: add(c.p, scl(c.n, c.d)), n: scl(c.n, -1), d: c.d } : null; } });
    return out;
  }
  // box against box: A's points inside B (a little margin, so a resting contact is found before it sinks in)
  for (const pt of A.pts) {
    if (!inBox(B, add(A.x, rot(A.q, pt)), 1e-3)) continue;
    out.push({ a: A, b: B, at: () => { const p = add(A.x, rot(A.q, pt)), ib = inBox(B, p); return ib && ib.d > 0 ? { p, n: ib.n, d: ib.d } : null; } });
  }
  return out;
}
/** Move bodies apart along n by a positional correction of size c at points pa / pb (XPBD, compliance 0). → λ */
function applyPositional(A, B, pa, pb, n, c) {
  const ra = sub(pa, A.x), rb = B ? sub(pb, B.x) : null;
  const ca = cross(ra, n), cb = rb ? cross(rb, n) : null;
  const wa = A.invMass + dot(ca, invIw(A, ca)), wb = B ? B.invMass + dot(cb, invIw(B, cb)) : 0;
  const w = wa + wb;
  if (w <= 0) return 0;
  const lam = c / w, P = scl(n, lam);
  const nudge = (X, r, Pp, s) => {
    if (!X.dyn) return;
    X.x = add(X.x, scl(Pp, s * X.invMass));
    const dw = invIw(X, cross(r, scl(Pp, s)));
    X.q = qnorm(add4(X.q, scl4(qmul([dw[0], dw[1], dw[2], 0], X.q), 0.5)));
  };
  nudge(A, ra, P, 1);
  if (B) nudge(B, rb, P, -1);
  return lam;
}
const add4 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
const scl4 = (a, k) => [a[0] * k, a[1] * k, a[2] * k, a[3] * k];
const velAt = (X, p) => (X ? add(X.v, cross(X.w, sub(p, X.x))) : [0, 0, 0]);
/** The inverse mass two bodies show to a push along dir at p (their turning included). */
function genMass(A, B, p, dir) {
  const ra = sub(p, A.x), ca = cross(ra, dir);
  let w = A.invMass + dot(ca, invIw(A, ca));
  if (B) { const rb = sub(p, B.x), cb = cross(rb, dir); w += B.invMass + dot(cb, invIw(B, cb)); }
  return w || 1e-12;
}
/** An impulse of size j along dir at p: A gets +, B gets −. */
function applyImpulse(A, B, p, dir, j) {
  const J = scl(dir, j);
  if (A.dyn) { A.v = add(A.v, scl(J, A.invMass)); A.w = add(A.w, invIw(A, cross(sub(p, A.x), J))); }
  if (B && B.dyn) { B.v = sub(B.v, scl(J, B.invMass)); B.w = sub(B.w, invIw(B, cross(sub(p, B.x), J))); }
}
function applyVelocity(A, B, p, dv) {
  // an impulse that changes the relative velocity at p by dv (A gets +, B gets −)
  const n = len(dv);
  if (n < 1e-12) return;
  const dir = scl(dv, 1 / n), ra = sub(p, A.x), rb = B ? sub(p, B.x) : null;
  const ca = cross(ra, dir), cb = rb ? cross(rb, dir) : null;
  const w = A.invMass + dot(ca, invIw(A, ca)) + (B ? B.invMass + dot(cb, invIw(B, cb)) : 0);
  if (w <= 0) return;
  const J = scl(dir, n / w);
  if (A.dyn) { A.v = add(A.v, scl(J, A.invMass)); A.w = add(A.w, invIw(A, cross(ra, J))); }
  if (B && B.dyn) { B.v = sub(B.v, scl(J, B.invMass)); B.w = sub(B.w, invIw(B, cross(rb, J))); }
}

export function simulate({ bodies, gravity = [0, 0, -9.81], ground = { on: true, z: 0 }, fps = 30, from = 0, to = 3, substeps = 20, maxSteps = 2e6 } = {}) {
  const t0 = typeof performance !== 'undefined' ? performance.now() : 0;
  const B = bodies.map(prepare), dyn = B.filter((b) => b.dyn);
  const frames = [], nFrames = Math.max(1, Math.round((to - from) * fps) + 1), h = 1 / fps / substeps;
  const snap = () => new Map(B.map((b) => [b.id, { x: b.x.slice(), q: b.q.slice() }]));
  frames.push(snap());
  let steps = 0;
  for (let f = 1; f < nFrames && steps < maxSteps; f++) {
    for (let s = 0; s < substeps; s++, steps++) {
      // integrate
      for (const b of dyn) {
        b.px = b.x.slice(); b.pq = b.q.slice();
        b.v = add(b.v, scl(gravity, h));
        b.x = add(b.x, scl(b.v, h));
        b.q = qnorm(add4(b.q, scl4(qmul([b.w[0], b.w[1], b.w[2], 0], b.q), 0.5 * h)));
      }
      // contacts: each moving body against the ground, the bodies after it, and every passive one
      const cs = [];
      for (let i = 0; i < B.length; i++) {
        const A = B[i];
        if (!A.dyn) continue;
        if (ground && ground.on) cs.push(...contacts(A, null, ground));
        for (let j = 0; j < B.length; j++) {
          if (j === i) continue;
          const O = B[j];
          if (O.dyn && j < i) continue;   // each pair of moving bodies once…
          cs.push(...contacts(A, O, null));
          if (O.dyn) for (const c of contacts(O, A, null)) cs.push(c);   // …both ways round (each one's points in the other)
        }
      }
      // positions: push out, then hold still where friction can (static friction)
      for (const c of cs) {
        const A = c.a, O = c.b, g = c.at();
        if (!g) continue;
        c.p = g.p; c.n = g.n;
        const pa = g.p, pb = g.p;
        const lam = applyPositional(A, O, pa, pb, g.n, g.d);
        c.lam = lam;
        // how far the contact point slid along the surface during this substep
        const ra = rotInv(A.pq || A.q, sub(c.p, A.px || A.x));
        const pPrev = add(A.px || A.x, rot(A.pq || A.q, ra)), pNow = c.p;
        let slide = sub(pNow, pPrev);
        if (O && O.dyn) { const rb = rotInv(O.pq || O.q, sub(c.p, O.px || O.x)); slide = sub(slide, sub(add(O.x, rot(O.q, rb)), add(O.px || O.x, rot(O.pq || O.q, rb)))); }
        const st = sub(slide, scl(c.n, dot(slide, c.n))), stl = len(st);
        const mu = O ? Math.sqrt(A.friction * O.friction) : A.friction;
        if (stl > 1e-12 && stl < mu * Math.abs(lam) * 1.5 + 1e-9) applyPositional(A, O, pa, pb, scl(st, -1 / stl), stl);
      }
      // velocities from positions
      for (const b of dyn) {
        b.vPrev = b.v.slice(); b.wPrev = b.w.slice();
        b.v = scl(sub(b.x, b.px), 1 / h);
        const dq = qmul(b.q, qconj(b.pq));
        b.w = scl([dq[0], dq[1], dq[2]], (2 / h) * (dq[3] >= 0 ? 1 : -1));
      }
      // dynamic friction, then the normal speeds (a few sweeps: one corner's correction changes the others')
      const live = cs.filter((c) => c.lam && c.n);
      for (const c of live) {
        const A = c.a, O = c.b, vr = sub(velAt(A, c.p), velAt(O, c.p)), vn = dot(vr, c.n);
        const vt = sub(vr, scl(c.n, vn)), vtl = len(vt);
        // dynamic friction as an impulse: μ × this contact's push (λ / h), never more than stops the sliding
        const mu = O ? Math.sqrt(A.friction * O.friction) : A.friction;
        if (vtl > 1e-9) { const dir = scl(vt, -1 / vtl); applyImpulse(A, O, c.p, dir, Math.min((mu * Math.abs(c.lam)) / h, vtl / genMass(A, O, c.p, dir))); }
        const vPrevN = dot(sub(add(A.vPrev || A.v, cross(A.wPrev || A.w, sub(c.p, A.x))), O ? add(O.vPrev || O.v, cross(O.wPrev || O.w, sub(c.p, O.x))) : [0, 0, 0]), c.n);
        const e = Math.abs(vPrevN) < 2 * Math.abs(dot(gravity, c.n)) * h ? 0 : (O ? Math.max(A.bounce, O.bounce) : A.bounce);
        // the normal speed after the contact: −e × the speed it came in with (the push out of the surface gives none of its own)
        c.target = -e * Math.min(vPrevN, 0);
      }
      for (let sweep = 0; sweep < 4; sweep++) for (const c of live) {
        const vn = dot(sub(velAt(c.a, c.p), velAt(c.b, c.p)), c.n);
        if (Math.abs(c.target - vn) > 1e-9) applyVelocity(c.a, c.b, c.p, scl(c.n, c.target - vn));
      }
    }
    frames.push(snap());
  }
  const last = dyn.every((b) => len(b.v) < 0.02 && len(b.w) < 0.05);
  return { frames, steps, ms: typeof performance !== 'undefined' ? Math.round(performance.now() - t0) : 0, settled: last };
}
