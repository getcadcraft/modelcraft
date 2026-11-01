/* SPDX-License-Identifier: Apache-2.0 */
// 0.8 round 3 (model_PART_3), SU.858 next step: belts break down — an accumulating or a plain belt stops for a repair, every load on it stays
// put, nothing gets on or off, it runs on from where it stopped; availability ≈ MTBF / (MTBF + MTTR); seeded; the layout's hours and minutes.
const { ok, section, mine } = globalThis.__flowTest;
const { simulate, checkGraph } = await mine('lib/sim.js');
const C = await mine('lib/catalog.js');
const PB = await mine('lib/playback.js');

const H = 3600;
const strip = (r) => JSON.stringify({ ...r, trace: undefined });
const line = (belt = {}, src = { mode: 'saturate' }) => ({
  elements: [{ id: 's', type: 'source', interarrival: { kind: 'const', v: 1 }, L: 0.4, ...src }, { id: 'c', type: 'conveyor', length: 10, speed: 1, gap: 0.1, accumulate: true, ...belt }, { id: 'k', type: 'sink' }],
  links: [{ from: 's', out: 'out', to: 'c', in: 'in' }, { from: 'c', out: 'out', to: 'k', in: 'in' }],
});

section('belt breakdowns (round 3)');
for (const acc of [true, false]) {
  const name = acc ? 'accumulating belt' : 'plain belt';
  const base = simulate(line({ accumulate: acc }), { seed: 2, until: 50 * H });
  const mtbf = 1800, mttr = 300, until = 1000 * H, A = mtbf / (mtbf + mttr);
  const r = simulate(line({ accumulate: acc, mtbf, mttr }), { seed: 2, until });
  ok(r.ok && base.ok, name + ': runs', JSON.stringify(r.problems || base.problems || '').slice(0, 200));
  const a = r.elements.c.availability;
  ok(Math.abs(a - A) / A < 0.03, `${name}: availability ≈ MTBF / (MTBF + MTTR) = ${A.toFixed(4)}; got ${a}`);
  ok(Math.abs(r.elements.c.failures - until / (mtbf + mttr)) / (until / (mtbf + mttr)) < 0.08, `${name}: failures ≈ ${(until / (mtbf + mttr)).toFixed(0)}; got ${r.elements.c.failures}`);
  const rate = r.done / until, rate0 = base.done / (50 * H);
  ok(Math.abs(rate / rate0 - A) < 0.03, `${name}: a saturated belt's output follows its availability: ${(rate / rate0).toFixed(4)} vs ${A.toFixed(4)}`);
  ok(strip(r) === strip(simulate(line({ accumulate: acc, mtbf, mttr }), { seed: 2, until })) && strip(r) !== strip(simulate(line({ accumulate: acc, mtbf, mttr }), { seed: 7, until })), name + ': breakdowns are seeded');
  ok(base.elements.c.availability === undefined, name + ': a belt that never breaks reports no availability');
}

section('belt breakdowns: the loads stand still while it is down');
{
  // one load on a 10 m belt at 1 m/s, the belt breaks at once and is repaired: the load's playback position does not move while down
  const g = line({ mtbf: 4, mttr: 20 }, { mode: 'interval', interarrival: { kind: 'const', v: 1e6 }, firstAtStart: true, limit: 1 });
  const r = simulate(g, { seed: 1, until: 200, traceUntil: 200 });
  const rec = r.trace && r.trace.res.find((x) => x.el === 'c');
  const k = rec && rec.k;
  ok(Array.isArray(k) && k.length >= 3, 'the belt load\'s record has a stop and a restart', JSON.stringify(k)?.slice(0, 200));
  if (Array.isArray(k) && k.length >= 3) {
    const at = (t) => { let x = k[0]; for (const y of k) { if (y[0] <= t) x = y; else break; } return Math.min(1 * t + x[1], x[2]); };
    const [tStop] = k[1], [tGo] = k[2];
    ok(tGo > tStop && Math.abs(at(tStop + 0.01) - at(tGo - 0.01)) < 1e-6, `stopped from ${tStop.toFixed(2)} s to ${tGo.toFixed(2)} s at ${at(tStop).toFixed(3)} m`);
    ok(at(tGo + 1) > at(tGo) + 0.5, 'and moves on after the repair');
  }
  ok(r.done <= 1 && r.elements.c.failures >= 1, 'nothing was lost or doubled');
}

section('belt breakdowns: the catalogue, the layout and the checks');
{
  ok(C.KIND.conveyor.params.mtbf && C.KIND.curve.params.mttr && C.KIND.incline.params.mtbf, 'straight, curved and inclined belts have Time between breakdowns and Mean repair time');
  ok(checkGraph(line({ mtbf: 100 })).some((x) => x.code === 'bad-param' && x.key === 'mttr'), 'an MTBF with no MTTR is refused on a belt too');
  void PB;
}
