/* SPDX-License-Identifier: Apache-2.0 */
// Known answers for the simulation core (lib/sim.js): queueing theory, conveyor kinematics and accumulation, merge rules,
// divert rules, gates, AGVs with reservation, determinism. Run by test.mjs.
const { ok, section, near, mine } = globalThis.__flowTest;
const { simulate, checkGraph, Sim } = await mine('lib/sim.js');
const R = await mine('lib/rng.js');

const L = (from, out, to, inp = 'in') => ({ from, out, to, in: inp });
const exp = (mean) => ({ kind: 'exp', mean });
const cst = (v) => ({ kind: 'const', v });
const rel = (a, b) => Math.abs(a - b) / Math.abs(b);

// ------------------------------------------------------------------------------------------- random numbers
section('rng: seeded streams and distributions');
{
  const a = R.makeRng(7, 'x'), b = R.makeRng(7, 'x'), c = R.makeRng(7, 'y'), d = R.makeRng(8, 'x');
  const sa = Array.from({ length: 5 }, () => a.next()), sb = Array.from({ length: 5 }, () => b.next());
  ok(JSON.stringify(sa) === JSON.stringify(sb), 'same seed and key → same numbers');
  ok(c.next() !== R.makeRng(7, 'x').next() && d.next() !== R.makeRng(7, 'x').next(), 'another key or seed → other numbers');
  const r = R.makeRng(1, 'm');
  const N = 200000;
  const mean = (dist) => { let s = 0; for (let i = 0; i < N; i++) s += R.sample(dist, r); return s / N; };
  ok(rel(mean(exp(10)), 10) < 0.01, 'exponential mean 10 within 1 %');
  ok(rel(mean({ kind: 'uniform', a: 2, b: 6 }), 4) < 0.01, 'uniform 2–6 mean 4 within 1 %');
  ok(rel(mean({ kind: 'tri', a: 1, m: 2, b: 6 }), 3) < 0.01, 'triangular 1/2/6 mean 3 within 1 %');
  ok(rel(mean({ kind: 'erlang', mean: 5, k: 3 }), 5) < 0.01, 'Erlang-3 mean 5 within 1 %');
  ok(rel(mean({ kind: 'normal', mean: 10, sd: 1 }), 10) < 0.01, 'normal 10 ± 1 mean within 1 %');
  let neg = false; for (let i = 0; i < 20000; i++) if (R.sample({ kind: 'normal', mean: 1, sd: 2 }, r) < 0) neg = true;
  ok(!neg, 'normal is cut at 0 (never a negative time)');
  ok(R.cleanDist({ kind: 'uniform', a: 5, b: 1 }).kind === 'const' && R.cleanDist({ kind: 'exp', mean: -1 }, null) === null && R.cleanDist(3).v === 3, 'cleanDist refuses bad input');
}

// ------------------------------------------------------------------------------------------- queueing theory
section('station: queueing theory known answers (long seeded runs)');
const station = (inter, time, servers = 1) => ({
  elements: [
    { id: 'src', type: 'source', interarrival: inter },
    { id: 'st', type: 'station', servers, time },
    { id: 'out', type: 'sink' },
  ],
  links: [L('src', 'out', 'st'), L('st', 'out', 'out')],
});
{
  // M/D/1 at rho = 0.8: lambda = 0.1/s, service 8 s. Pollaczek–Khinchine: Wq = rho·s / (2(1 − rho)) = 16 s, Lq = lambda·Wq = 1.6.
  const r = simulate(station(exp(10), cst(8)), { seed: 11, until: 3e6, warmup: 2e4 });
  const s = r.elements.st;
  ok(rel(s.utilisation, 0.8) < 0.01, 'M/D/1 ρ=0.8: utilisation 0.8 within 1 %', String(s.utilisation));
  ok(rel(s.waitMean, 16) < 0.04, 'M/D/1 ρ=0.8: mean wait in queue 16 s within 4 %', String(s.waitMean));
  ok(rel(s.queueMean, 1.6) < 0.04, 'M/D/1 ρ=0.8: mean queue 1.6 within 4 %', String(s.queueMean));
  ok(rel(r.lead.mean, 24) < 0.04, 'M/D/1 ρ=0.8: lead time Wq + s = 24 s within 4 %', String(r.lead.mean));
  ok(rel(s.queueMean, 0.1 * s.waitMean) < 0.02, "Little's law: Lq = λ·Wq within 2 %");
  ok(s.blocked === 0, 'a sink never blocks the station');
}
{
  // M/M/1 at rho = 0.8: Wq = rho / (mu − lambda) = 0.8 / (0.125 − 0.1) = 32 s, Lq = 3.2.
  const r = simulate(station(exp(10), exp(8)), { seed: 12, until: 4e6, warmup: 2e4 });
  const s = r.elements.st;
  ok(rel(s.utilisation, 0.8) < 0.015, 'M/M/1 ρ=0.8: utilisation 0.8', String(s.utilisation));
  ok(rel(s.waitMean, 32) < 0.06, 'M/M/1 ρ=0.8: mean wait 32 s within 6 %', String(s.waitMean));
  ok(rel(s.queueMean, 3.2) < 0.06, 'M/M/1 ρ=0.8: mean queue 3.2 within 6 %', String(s.queueMean));
}
{
  // M/M/2 at rho = 0.8: lambda 0.1, mu 1/16, a = 1.6. Erlang C = 0.7111…, Wq = C / (2·mu − lambda) = 28.44 s.
  const C = (1.6 ** 2 / 2) * (2 / 0.4) / (1 + 1.6 + (1.6 ** 2 / 2) * (2 / 0.4));
  const wq = C / (2 / 16 - 0.1);
  const r = simulate(station(exp(10), exp(16), 2), { seed: 13, until: 4e6, warmup: 2e4 });
  const s = r.elements.st;
  ok(rel(s.utilisation, 0.8) < 0.015, 'M/M/2 ρ=0.8: utilisation per server 0.8', String(s.utilisation));
  ok(rel(s.waitMean, wq) < 0.06, `M/M/2 ρ=0.8: mean wait ${wq.toFixed(2)} s (Erlang C) within 6 %`, String(s.waitMean));
}
{
  // D/D/1: arrivals every 10 s, service 8 s: nobody waits, utilisation exactly 0.8.
  const r = simulate(station(cst(10), cst(8)), { seed: 1, until: 1000 });
  const s = r.elements.st;
  ok(s.waitMean === 0 && s.queueMax === 0, 'D/D/1: nobody waits');
  ok(near(s.utilisation, 0.792, 1e-9), 'D/D/1: utilisation exactly 0.792 over 0–1000 s (first arrival at 10 s, 99 × 8 s busy)', String(s.utilisation));
  ok(r.done === 99 && r.lead.min === 8 && r.lead.max === 8, 'D/D/1: 99 done by 1000 s, each in 8 s', `${r.done} ${r.lead.min} ${r.lead.max}`);
}
{
  // a full queue blocks upstream: station queue 2 behind a buffer of 3; source every 1 s, service 4 s → buffer full, then source backs up
  const g = {
    elements: [
      { id: 'src', type: 'source', interarrival: cst(1), firstAtStart: true },
      { id: 'buf', type: 'buffer', capacity: 3 },
      { id: 'st', type: 'station', servers: 1, queue: 2, time: cst(4) },
      { id: 'out', type: 'sink' },
    ],
    links: [L('src', 'out', 'buf'), L('buf', 'out', 'st'), L('st', 'out', 'out')],
  };
  const r = simulate(g, { until: 400 });
  ok(r.elements.buf.max === 3 && r.elements.st.queueMax === 2, 'buffer and station queue fill to their capacities');
  ok(near(r.elements.st.utilisation, 1, 0.02), 'the bottleneck station is busy all the time');
  ok(r.done === 100, 'throughput = one every 4 s (4, 8, … 400 s: 100)', String(r.done));
  ok(r.created === r.done + r.wip, 'every load is counted: created = done + in the system');
}

// ------------------------------------------------------------------------------------------- conveyors
section('conveyor: kinematics, accumulation, slug belts, zones');
const line = (conv, extra = {}) => ({
  elements: [
    { id: 'src', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], ...extra.src },
    { id: 'c', type: 'conveyor', length: 10, speed: 0.5, gap: 0.1, ...conv },
    { id: 'g', type: 'gate', mode: 'open', ...extra.gate },
    { id: 'out', type: 'sink' },
  ],
  links: [L('src', 'out', 'c'), L('c', 'out', 'g'), L('g', 'out', 'out')],
});
{
  const r = simulate(line({}, { src: { interarrival: cst(1000), firstAtStart: true } }), { until: 100 });
  ok(r.done === 1 && near(r.lead.mean, 19.2, 1e-9), 'one load: 10 m at 0.5 m/s, 0.4 m long → off the end at (10 − 0.4)/0.5 = 19.2 s', String(r.lead.mean));
}
{
  const r = simulate(line({}, { src: { mode: 'saturate' } }), { until: 1000.0001 });
  ok(r.done === 981, 'saturated: one load per pitch/speed = 1 s after the first at 19.2 s → 981 by 1000 s', String(r.done));
  ok(near(r.elements.c.onMean, 19.2 * (980 / 1000) + 0.0192 * 0, 0.4), 'a free-flowing belt holds 19.2 loads on average', String(r.elements.c.onMean));
}
{
  // accumulation: closed gate at the end. capacity = floor((length − L) / pitch) + 1 = floor(9.6 / 0.5) + 1 = 20
  const sim = new Sim(line({}, { src: { mode: 'saturate' }, gate: { mode: 'closed' } }), { until: 500 });
  const r = sim.run();
  const c = sim.els.get('c');
  ok(c.loads.length === 20 && r.elements.c.onMax === 20, 'accumulation: 20 loads on a 10 m belt (0.4 m loads, 0.1 m gaps)', String(c.loads.length));
  const ps = c.loads.map((e) => c.pos(e));
  ok(ps.every((p, i) => near(p, 9.6 - 0.5 * i, 1e-9)), 'they stand nose to tail 0.5 m apart, the first at the end', ps.slice(0, 3).join(' '));
  ok(r.done === 0 && sim.els.get('src').backlog.length === 1, 'nothing passes a closed gate; the next load waits at the source');
  ok(near(r.elements.c.blockedFraction, (500 - 19.2) / 500, 1e-6), 'blocked from 19.2 s on', String(r.elements.c.blockedFraction));
}
{
  // release: the gate opens at 100 s; loads leave every pitch/speed = 1 s
  const sim = new Sim(line({}, { src: { mode: 'saturate' }, gate: { mode: 'cycle', open: 1e6, closed: 100, offset: 100 } }), { until: 104.5, traceUntil: 200 });
  const r = sim.run();
  const outs = r.trace.res.filter((x) => x.el === 'c' && x.t1 < Infinity).map((x) => x.t1);
  ok(outs.length === 5 && outs.every((t, i) => near(t, 100 + i, 1e-6)), 'after the gate opens at 100 s: loads leave at 100, 101, 102, 103, 104 s', outs.join(' '));
}
{
  // slug (non-accumulating) vs accumulating with loads every 4 s (2 m apart) against a closed gate
  const acc = new Sim(line({ accumulate: true }, { src: { interarrival: cst(4), firstAtStart: true }, gate: { mode: 'closed' } }), { until: 400 });
  acc.run();
  const slug = new Sim(line({ accumulate: false }, { src: { interarrival: cst(4), firstAtStart: true }, gate: { mode: 'closed' } }), { until: 400 });
  slug.run();
  const sc = slug.els.get('c');
  ok(acc.els.get('c').loads.length === 20, 'accumulating belt fills to 20');
  ok(sc.loads.length === 6, 'slug belt stops when its first load is held: 5 on it at 19.2 s, one more fits at 20 s, then none (6)', String(sc.loads.length));
  ok(sc.loads.map((e) => sc.pos(e)).every((p, i) => near(p, 9.6 - (i < 5 ? 2 * i : 9.6), 1e-6)), 'a stopped slug belt keeps the gaps the loads came with');
}
{
  // zones: 8 zones of 1.25 m (10 m), one load per zone
  const sim = new Sim(line({ pitch: 1.25 }, { src: { mode: 'saturate' }, gate: { mode: 'closed' } }), { until: 300 });
  sim.run();
  const c = sim.els.get('c');
  ok(c.loads.length === 8 && c.loads.every((e, i) => near(c.pos(e), 9.6 - 1.25 * i, 1e-9)), 'zone accumulation: 8 zones of 1.25 m hold 8 loads, one per zone');
}
{
  // two belts in a row, the second slower: the first backs up only as much as the second's spacing needs
  const g = {
    elements: [
      { id: 'src', type: 'source', mode: 'saturate', types: [{ type: 'A', weight: 1, length: 0.4 }] },
      { id: 'c1', type: 'conveyor', length: 4, speed: 1, gap: 0.1 },
      { id: 'c2', type: 'conveyor', length: 4, speed: 0.25, gap: 0.1 },
      { id: 'out', type: 'sink' },
    ],
    links: [L('src', 'out', 'c1'), L('c1', 'out', 'c2'), L('c2', 'out', 'out')],
  };
  const r = simulate(g, { until: 2000, warmup: 200 });
  ok(near(r.perHour, 0.25 / 0.5 * 3600, 1), 'a line runs at its slowest belt: 0.25 m/s ÷ 0.5 m pitch = 1800 an hour', String(r.perHour));
  ok(r.elements.c1.onMax === 8, 'the faster belt in front backs up to its capacity (8)', String(r.elements.c1.onMax));
}

// ------------------------------------------------------------------------------------------- merge
section('merge: priority, alternate, first come');
const mergeGraph = (rule, s1 = { mode: 'saturate' }, s2 = { mode: 'saturate' }) => ({
  elements: [
    { id: 's1', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], ...s1 },
    { id: 's2', type: 'source', types: [{ type: 'B', weight: 1, length: 0.4 }], ...s2 },
    { id: 'a', type: 'conveyor', length: 2, speed: 1, gap: 0.1 },
    { id: 'b', type: 'conveyor', length: 2, speed: 1, gap: 0.1 },
    { id: 'm', type: 'merge', rule },
    { id: 'c', type: 'conveyor', length: 5, speed: 0.5, gap: 0.1 },
    { id: 'out', type: 'sink' },
  ],
  links: [L('s1', 'out', 'a'), L('s2', 'out', 'b'), L('a', 'out', 'm', 'in1'), L('b', 'out', 'm', 'in2'), L('m', 'out', 'c'), L('c', 'out', 'out')],
});
{
  const r = simulate(mergeGraph('priority'), { until: 1000 });
  const m = r.elements.m.byInput;
  ok(m.in2 === 0 && m.in1 > 900, 'priority: with both lanes always full, everything comes from the first input', JSON.stringify(m));
  ok(near(r.elements.c.passed, 1000 - 1.6 - 9.2, 1.01), 'the merged belt runs full: one load a second', String(r.elements.c.passed));
}
{
  const r = simulate(mergeGraph('alternate'), { until: 1000 });
  const m = r.elements.m.byInput;
  ok(Math.abs(m.in1 - m.in2) <= 1 && m.in1 > 450, 'alternate: the inputs take turns (counts differ by at most 1)', JSON.stringify(m));
}
{
  const r = simulate(mergeGraph('fifo'), { until: 1000 });
  const m = r.elements.m.byInput;
  ok(Math.abs(m.in1 - m.in2) <= 1, 'first come: with both always waiting, the one waiting longer goes (turns)', JSON.stringify(m));
}
{
  // priority lane that is not full: in1 a load every 3 s; the merged belt takes one a second. Every in1 load gets through and
  // waits at most one spacing (1 s); in2 fills the rest.
  const sim = new Sim(mergeGraph('priority', { interarrival: cst(3), firstAtStart: true }), { until: 999.5, traceUntil: 1000, maxTrace: 1e6 });
  const r = sim.run();
  const m = r.elements.m.byInput;
  ok(m.in1 === 333, 'priority: all 333 loads of the light lane pass', JSON.stringify(m));
  ok(Math.abs(m.in1 + m.in2 - r.elements.c.passed - sim.els.get('c').loads.length) === 0 && m.in2 > 600, 'the busy lane fills the gaps');
  const waits = r.trace.res.filter((x) => x.el === 'a' && x.t1 < Infinity).map((x) => x.t1 - x.t0 - 1.6);
  ok(waits.length > 300 && Math.max(...waits) <= 1 + 1e-6, 'a priority load waits at the merge at most one spacing (1 s)', String(Math.max(...waits)));
}

// ------------------------------------------------------------------------------------------- divert
section('divert: round-robin, by type, first free, percent, by photo-eye');
const divGraph = (div, srcTypes, lane1 = {}, extra = [], l1 = {}) => ({
  elements: [
    { id: 'src', type: 'source', mode: 'saturate', types: srcTypes || [{ type: 'A', weight: 1, length: 0.4 }] },
    { id: 'c', type: 'conveyor', length: 3, speed: 1, gap: 0.1 },
    { id: 'd', type: 'divert', ...div },
    { id: 'l1', type: 'conveyor', length: 10, speed: 0.5, gap: 0.1, ...l1 },
    { id: 'g1', type: 'gate', mode: 'open', ...lane1 },
    { id: 'l2', type: 'conveyor', length: 10, speed: 0.5, gap: 0.1 },
    { id: 'k1', type: 'sink' }, { id: 'k2', type: 'sink' }, ...extra,
  ],
  links: [L('src', 'out', 'c'), L('c', 'out', 'd'), L('d', 'out1', 'l1'), L('d', 'out2', 'l2'), L('l1', 'out', 'g1'), L('g1', 'out', 'k1'), L('l2', 'out', 'k2')],
});
{
  const r = simulate(divGraph({ rule: 'round-robin' }), { until: 1000 });
  const o = r.elements.d.byOutput;
  ok(Math.abs(o[0] - o[1]) <= 1 && o[0] > 900, 'round-robin: lanes take turns (differ by at most 1)', JSON.stringify(o));
  ok(near(r.elements.d.passed, 2 * 1000, 30), 'two lanes at one a second each take two a second', String(r.elements.d.passed));
}
{
  const types = [{ type: 'A', weight: 1, length: 0.4 }, { type: 'B', weight: 3, length: 0.4 }];
  const r = simulate(divGraph({ rule: 'type', map: { A: 1, B: 2 } }, types), { until: 5000, seed: 4 });
  ok(Object.keys(r.elements.k1.byType).join() === 'A' && Object.keys(r.elements.k2.byType).join() === 'B', 'by type: A only to lane 1, B only to lane 2');
  const share = r.elements.k1.done / (r.elements.k1.done + r.elements.k2.done);
  ok(near(share, 0.25, 0.03), 'the mix 1 : 3 shows up as a quarter of A', String(share));
}
{
  const sim = new Sim(divGraph({ rule: 'first-free' }, null, { mode: 'closed' }), { until: 1000 });
  const r = sim.run();
  ok(sim.els.get('l1').loads.length === 20 && r.elements.k1.done === 0, 'first free: lane 1 (closed) fills to its 20');
  ok(r.elements.d.byOutput[0] === 20 && r.elements.k2.done > 900, 'then everything goes to lane 2', JSON.stringify(r.elements.d.byOutput));
}
{
  const r = simulate(divGraph({ rule: 'percent', weights: [1, 3] }), { until: 4000, seed: 9 });
  const o = r.elements.d.byOutput, share = o[0] / (o[0] + o[1]);
  ok(near(share, 0.25, 0.02), 'percent 1 : 3 → a quarter to lane 1 (seeded)', String(share));
}
{
  // photo-eye half way along lane 1 (2 m/s, so loads in transit run 1 m apart, less dense than the 0.5 m stack): lane 1 is
  // used until a load stands on the eye, then lane 2. (On a lane fed at full stack density an eye cannot help: the loads on
  // their way already fill it.)
  const sens = [{ id: 'eye', type: 'sensor', on: 'l1', at: 5 }];
  const sim = new Sim(divGraph({ rule: 'sensor', sensors: ['eye'] }, null, { mode: 'closed' }, sens, { speed: 2 }), { until: 600 });
  const r = sim.run();
  const l1 = sim.els.get('l1');
  const n = l1.loads.length;
  ok(n >= 11 && n < 20 && r.elements.d.byOutput[0] === n, 'by photo-eye: lane 1 takes loads only until one stands on its eye (' + n + ' of 20)', String(n));
  ok(l1.loads.some((e) => { const p = l1.pos(e); return p <= 5 && 5 <= p + 0.4; }) && sim.els.get('eye').standing(), 'a stopped load is on the eye');
  ok(r.elements.k2.done > 400, 'the rest go to lane 2');
}

// ------------------------------------------------------------------------------------------- AGVs
section('AGVs: dispatch, reservation, known cycle times, deadlock');
const loop = (n = 4, len = 10) => Array.from({ length: n }, (_, i) => ({ id: 'e' + i, from: 'n' + i, to: 'n' + ((i + 1) % n), length: len }));
const agvGraph = (fleet, src = { mode: 'saturate' }) => ({
  elements: [
    { id: 'src', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], ...src },
    { id: 'pk', type: 'agv-pick', node: 'n0', to: 'dp', capacity: 1 },
    { id: 'dp', type: 'agv-drop', node: 'n2', capacity: 1 },
    { id: 'out', type: 'sink' },
  ],
  links: [L('src', 'out', 'pk'), L('dp', 'out', 'out')],
  agv: { edges: loop(), fleet: { speed: 1, load: 5, unload: 5, ...fleet } },
});
{
  // one vehicle waiting at n0 (on e3): load 5 s, 20 m to n2, unload 5 s → first delivery at 30 s; then 20 m back + 5 + 20 + 5 = 50 s a load
  const sim = new Sim(agvGraph({ vehicles: 1, start: ['e3'] }), { until: 1000, traceUntil: 1000 });
  const r = sim.run();
  const t = r.trace.res.filter((x) => x.el === 'out' || x.el === 'dp').map((x) => x.t0);
  ok(near(t[0], 30, 1e-9), 'first delivery at 30 s (load 5 + 20 m at 1 m/s + unload 5)', String(t[0]));
  ok(r.done === 20, 'one load every 50 s: 20 by 1000 s (30, 80, … 980)', String(r.done));
  const v = r.vehicles[0];
  ok(near(v.time.loaded, 400 / 1000, 0.021) && near(v.time.empty, 380 / 1000, 0.021), 'vehicle time split: 40 % loaded travel, ~38 % empty', JSON.stringify(v.time));
}
{
  // two vehicles: never two on one segment; throughput doubles minus the waiting at the shared segments
  const sim = new Sim(agvGraph({ vehicles: 2 }), { until: 5000, traceUntil: 5000 });
  const r = sim.run();
  const mv = r.trace.vehicles.filter((m) => m.t0 >= 0);
  let clash = 0;
  for (const a of mv) for (const b of mv) if (a !== b && a.e === b.e && a.v !== b.v && a.t0 < b.t1 - 1e-9 && b.t0 < a.t1 - 1e-9) clash++;
  ok(clash === 0, 'reservation: two vehicles are never on the same segment at once', String(clash));
  ok(r.done > 100 && r.done <= 2 * 100 + 1, 'two vehicles deliver more than one could (100 in 5000 s), at most twice', String(r.done));
  ok(r.ok, 'no deadlock with 2 vehicles on 4 segments');
}
{
  // the nearest idle vehicle goes: vehicles at n1 (e0) and n3 (e2); a pickup at n0: n3 → n0 is 10 m, n1 → n0 is 30 m
  const sim = new Sim(agvGraph({ vehicles: 2, start: ['e0', 'e2'] }, { interarrival: cst(1e6), firstAtStart: true }), { until: 200 });
  const r = sim.run();
  ok(r.vehicles[1].delivered === 1 && r.vehicles[0].delivered === 0, 'dispatch: the nearer vehicle (2) takes the load', JSON.stringify(r.vehicles.map((v) => v.delivered)));
}
{
  // an idle vehicle in the way moves on: vehicle 2 parked on e1 (at n2, the drop) is nudged when vehicle 1 needs e1
  const sim = new Sim(agvGraph({ vehicles: 2, start: ['e3', 'e1'] }, { interarrival: cst(1e6), firstAtStart: true }), { until: 200 });
  const r = sim.run();
  ok(r.ok && r.done === 1 && r.vehicles[0].delivered + r.vehicles[1].delivered === 1, 'a parked vehicle in the way is sent on; the load gets through');
}
{
  // 2 vehicles on a 2-segment loop, both needing to move: a deadlock is found and reported, not a hang
  const g = agvGraph({ vehicles: 2 });
  g.agv.edges = loop(2, 10);
  g.elements[2].node = 'n1';
  const r = simulate(g, { until: 1000 });
  ok(!r.ok && r.failed && r.failed.code === 'agv-deadlock', 'deadlock reported with the time and vehicles', JSON.stringify(r.failed));
}

// ------------------------------------------------------------------------------------------- checks + determinism
section('graph checks and determinism');
{
  const p = checkGraph({ elements: [{ id: 'a', type: 'source', interarrival: cst(1) }, { id: 'b', type: 'conveyor', length: 0.2, speed: 0 }, { id: 'c', type: 'warp' }], links: [L('a', 'out', 'b')] });
  const codes = p.map((x) => x.code + (x.key ? ':' + x.key : ''));
  ok(codes.includes('out-unlinked') && codes.includes('bad-param:speed') && codes.includes('unknown-type') && codes.includes('load-too-long'), 'checks: an output to nowhere, a stopped belt, an unknown type, a load longer than its belt', codes.join(' '));
  const r = simulate({ elements: [{ id: 'a', type: 'source', interarrival: cst(1) }], links: [] });
  ok(!r.ok && r.problems.length === 1, 'a graph with problems does not run');
}
{
  const g = mergeGraph('fifo', { interarrival: exp(1.5) }, { interarrival: { kind: 'tri', a: 0.5, m: 1, b: 3 } });
  const a = simulate(g, { seed: 42, until: 20000, warmup: 100 }), b = simulate(g, { seed: 42, until: 20000, warmup: 100 }), c = simulate(g, { seed: 43, until: 20000, warmup: 100 });
  delete a.trace; delete b.trace; delete c.trace;
  ok(JSON.stringify(a) === JSON.stringify(b), 'same seed → identical results, to the last digit');
  ok(JSON.stringify(a) !== JSON.stringify(c), 'another seed → other results');
  ok(a.created === 0 || a.created - a.done <= a.wip + 1e9, 'counts are sane');
}
