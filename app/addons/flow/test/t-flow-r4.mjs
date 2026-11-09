/* SPDX-License-Identifier: Apache-2.0 */
// 0.8 round 4 (part-model_PART_4), SU.858 rest: gates and vehicles break down, idle vehicles park, stations share a pool of operators.
const { ok, section, mine } = globalThis.__flowTest;
const { simulate, checkGraph } = await mine('../../flow/sim.js');
const C = await mine('../../flow/catalog.js');
const LAY = await mine('../../flow/layout.js');

const H = 3600;
const L = (from, out, to, i = 'in') => ({ from, out, to, in: i });
const cst = (v) => ({ kind: 'const', v });

section('gate breakdowns (round 4)');
{
  const g = (extra = {}) => ({
    elements: [{ id: 's', type: 'source', interarrival: cst(2), L: 0.4, mode: 'interval' }, { id: 'g', type: 'gate', mode: 'open', ...extra }, { id: 'k', type: 'sink' }],
    links: [L('s', 'out', 'g'), L('g', 'out', 'k')],
  });
  const mtbf = 600, mttr = 60, until = 400 * H, A = mtbf / (mtbf + mttr);
  const base = simulate(g(), { seed: 3, until: 20 * H }), r = simulate(g({ mtbf, mttr }), { seed: 3, until });
  ok(base.ok && r.ok, 'runs');
  const a = r.elements.g.availability;
  ok(Math.abs(a - A) / A < 0.03, `gate availability ≈ MTBF / (MTBF + MTTR) = ${A.toFixed(4)}; got ${a}`);
  ok(r.elements.g.failures > 0 && r.elements.g.failures < until / mtbf, 'it failed some times: ' + r.elements.g.failures);
  ok(base.elements.g.availability === undefined, 'a gate that cannot fail reports no availability');
  ok(checkGraph(g({ mtbf: 100 })).some((x) => x.code === 'bad-param' && x.key === 'mttr'), 'an MTBF with no MTTR is refused on a gate');
  ok(C.KIND.gate.params.mtbf && C.KIND.gate.params.mttr, 'the gate has Time between breakdowns and Mean repair time');
  // a shut gate stops the line: throughput falls by about the down share
  ok(r.lead.max > base.lead.max + 20 && r.lead.p95 >= base.lead.p95, 'a shut gate makes loads wait: longest time in the system ' + r.lead.max.toFixed(0) + ' s vs ' + base.lead.max.toFixed(0) + ' s');
  // the layout carries hours and minutes
  const lay = LAY.newLayout(); lay.items.push({ id: 'gt1', kind: 'gate', x: 0, y: 0, z: 0, rot: 0, params: { mode: 'open', mtbf: 2, mttr: 3 } });
  const gr = LAY.buildGraph(LAY.cleanLayout(lay).layout);
  if (gr) { const ge = gr.graph.elements.find((e) => e.id === 'gt1'); ok(ge && ge.mtbf === 7200 && ge.mttr === 180, 'the layout writes hours and minutes as seconds: ' + (ge && ge.mtbf + '/' + ge.mttr)); }
}

section('operator pools (round 4)');
{
  const line = (poolSize) => ({
    elements: [{ id: 's', type: 'source', mode: 'saturate', L: 0.4, interarrival: cst(1) },
      { id: 'a', type: 'station', servers: 2, queue: 3, time: cst(10), pool: 'crew' }, { id: 'b', type: 'station', servers: 2, queue: 3, time: cst(10), pool: 'crew' }, { id: 'k', type: 'sink' }],
    links: [L('s', 'out', 'a'), L('a', 'out', 'b'), L('b', 'out', 'k')],
    pools: poolSize ? [{ id: 'crew', size: poolSize }] : [],
  });
  ok(checkGraph(line(0)).some((x) => x.code === 'pool-unknown'), 'a station naming a pool that is not defined is refused');
  ok(checkGraph({ ...line(2), pools: [{ id: 'crew', size: 0 }] }).some((x) => x.code === 'bad-param' && x.key === 'size'), 'a pool of size 0 is refused');
  const until = 10000;
  // 4 servers in all, 10 s each: 0.4 per second without a limit; with 1 operator only one service at a time = 0.1 per second; 2 operators = 0.2
  const free = simulate({ ...line(4) }, { seed: 1, until }), one = simulate(line(1), { seed: 1, until }), two = simulate(line(2), { seed: 1, until });
  const noPool = simulate({ ...line(4), elements: line(4).elements.map((e) => { const { pool, ...r } = e; return r; }) }, { seed: 1, until });
  ok(free.ok && one.ok && two.ok && noPool.ok, 'runs');
  const rate = (r) => r.done / until;
  ok(Math.abs(rate(noPool) - 0.2) < 0.01, 'without a pool two stages of two 10 s servers pass 0.2 a second (the stages are in series): ' + rate(noPool).toFixed(3));
  ok(Math.abs(rate(one) - 0.05) < 0.005, 'one operator for two stages in series: 0.05 a second (a person serves one load, then the next stage): ' + rate(one).toFixed(3));
  ok(rate(two) > rate(one) * 1.8 && rate(two) <= rate(noPool) + 0.001, 'two operators about double that: ' + rate(two).toFixed(3));
  ok(Math.abs(rate(free) - rate(noPool)) < 1e-9, 'a pool as big as every server changes nothing');
  ok(one.pools.length === 1 && one.pools[0].peak === 1 && one.pools[0].utilisation > 0.95, 'the pool reports its use: ' + JSON.stringify(one.pools[0]));
  ok(one.elements.a.pool === 'crew', 'a station reports its pool');
  const a = JSON.stringify({ ...simulate(line(2), { seed: 1, until }), trace: undefined }), b = JSON.stringify({ ...simulate(line(2), { seed: 1, until }), trace: undefined });
  ok(a === b, 'seeded: the same twice');
}

section('vehicle breakdowns and parking (round 4)');
{
  const loop = (n = 4, len = 10) => Array.from({ length: n }, (_, i) => ({ id: 'e' + i, from: 'n' + i, to: 'n' + ((i + 1) % n), length: len }));
  const g = (fleet, src = { mode: 'saturate' }) => ({
    elements: [{ id: 'src', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], ...src }, { id: 'pk', type: 'agv-pick', node: 'n0', to: 'dp', capacity: 1 }, { id: 'dp', type: 'agv-drop', node: 'n2', capacity: 1 }, { id: 'out', type: 'sink' }],
    links: [L('src', 'out', 'pk'), L('dp', 'out', 'out')],
    agv: { edges: loop(), fleet: { speed: 1, load: 5, unload: 5, ...fleet } },
  });
  const until = 200 * H;
  const base = simulate(g({ vehicles: 2 }), { seed: 4, until: 20 * H }), r = simulate(g({ vehicles: 2, mtbf: 1800, mttr: 600 }), { seed: 4, until });
  ok(base.ok && r.ok, 'runs: ' + JSON.stringify(r.failed || ''));
  ok(r.vehicles.every((v) => v.failures > 0 && v.availability < 0.99 && v.availability > 0.6), 'each vehicle failed and was down some of the time: ' + r.vehicles.map((v) => v.failures + '/' + v.availability).join(' '));
  ok(base.vehicles.every((v) => v.availability === undefined), 'a fleet that cannot fail reports no availability');
  const per = (x, u) => x.done / u;
  ok(per(r, until) < per(base, 20 * H) * 0.97, 'breakdowns cost throughput: ' + per(r, until).toFixed(4) + ' vs ' + per(base, 20 * H).toFixed(4));
  ok(r.vehicles.every((v) => Math.abs(v.time.down - (1 - v.availability)) < 1e-5), 'the down share of the vehicle\'s time is its unavailability');
  ok(JSON.stringify({ ...simulate(g({ vehicles: 2, mtbf: 1800, mttr: 600 }), { seed: 4, until: 10 * H }), trace: undefined }) === JSON.stringify({ ...simulate(g({ vehicles: 2, mtbf: 1800, mttr: 600 }), { seed: 4, until: 10 * H }), trace: undefined }), 'seeded: the same twice');
  // parking: with no work the vehicles go to the parking nodes, one each, and stay there
  const idle = (fleet) => g(fleet, { mode: 'interval', interarrival: cst(1e9), limit: 0 });
  const p = simulate(idle({ vehicles: 2, start: ['e0', 'e1'], park: ['n3', 'n2'] }), { seed: 1, until: 500 });
  ok(p.ok, 'runs idle with parking');
  const pk = simulate({ ...g({ vehicles: 2, start: ['e0', 'e1'], park: ['n3', 'n2'] }, { interarrival: cst(1e6), firstAtStart: false }) }, { seed: 1, until: 500, traceUntil: 500 });
  const last = new Map(); for (const t of pk.trace.vehicles) if (t.t0 >= 0) last.set(t.v, t.e);
  const ends = [...last.entries()].map(([v, e]) => ({ e0: 'n1', e1: 'n2', e2: 'n3', e3: 'n0' }[e])).sort();
  ok(ends.join() === 'n2,n3' || ends.join() === 'n3,n2', 'each vehicle ends on its own parking node: ' + ends.join());
}

section('the layout carries pools, parking and fleet breakdowns (round 4)');
{
  const lay = LAY.newLayout();
  lay.pools.push({ id: 'crew-1', name: 'Packers', size: 2 });
  lay.items.push({ id: 'st1', kind: 'station', x: 0, y: 0, z: 0, rot: 0, params: { pool: 'crew-1' } }, { id: 'st2', kind: 'station', x: 5, y: 0, z: 0, rot: 0, params: { pool: 'nope' } });
  lay.fleet = { ...lay.fleet, mtbf: 2, mttr: 10, park: ['p1', 'Bad Id!'] };
  const c = LAY.cleanLayout(JSON.parse(JSON.stringify(lay))).layout;
  ok(c.pools.length === 1 && c.pools[0].size === 2 && c.fleet.mtbf === 2 && c.fleet.mttr === 10 && c.fleet.park.join() === 'p1', 'saved and read back, bad ids dropped');
  const bad = LAY.cleanLayout({ ...JSON.parse(JSON.stringify(lay)), pools: [{ id: 'x', size: 0 }, { id: 'x', size: 3 }, { id: 'A b', size: 1 }] });
  ok(bad.layout.pools.length === 1 && bad.layout.pools[0].size === 1 && bad.dropped >= 2, 'a pool is at least 1 person; a duplicate or bad id is dropped');
  const g = LAY.buildGraph(c).graph;
  ok(g.pools.length === 1 && g.pools[0].id === 'crew-1' && g.pools[0].size === 2, 'the graph has the pool');
  ok(g.elements.find((e) => e.id === 'st1').pool === 'crew-1' && g.elements.find((e) => e.id === 'st2').pool === undefined, 'a station keeps its pool; an unknown pool is left off');
  ok(LAY.cleanLayout({ format: 'cadcraft-flow', version: 1, items: [] }).layout.pools.length === 0, 'a file from before pools has none');
}
