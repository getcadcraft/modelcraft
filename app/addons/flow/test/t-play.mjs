/* SPDX-License-Identifier: Apache-2.0 */
// Playback (lib/playback.js) and the report / CSV (lib/report.js).
const { ok, section, near, mine } = globalThis.__flowTest;
const LY = await mine('lib/layout.js');
const C = await mine('lib/catalog.js');
const EX = await mine('lib/examples.js');
const { simulate } = await mine('lib/sim.js');
const { makePlayer } = await mine('lib/playback.js');
const RP = await mine('lib/report.js');
const t = (k, v) => k + (v ? JSON.stringify(v) : '');

section('playback: loads where the simulation says');
{
  // one load along a straight 10 m belt at 0.5 m/s, rotated 90°: at time t its middle is at y = 0.3 + 0.5·t + 0.2
  const L = LY.newLayout();
  L.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 90, params: { ...C.defaults('source'), interarrival: { kind: 'const', v: 1000 }, types: 'A 1 0.4' } });
  L.items.push(LY.addAfter(L, 'source-1', 'out', 'conveyor', { ...C.defaults('conveyor'), length: 10, speed: 0.5 }));
  L.items.push(LY.addAfter(L, 'conveyor-1', 'out', 'sink'));
  const b = LY.buildGraph(L);
  b.graph.elements[0].firstAtStart = true;
  const r = simulate(b.graph, { until: 100, traceUntil: 100 });
  const pl = makePlayer(r.trace, b);
  const f = pl.frame(4);
  ok(f.loads.length === 1 && near(f.loads[0].p[1], 0.3 + 0.5 * 4 + 0.2, 1e-9) && near(f.loads[0].p[0], 0, 1e-9) && near(f.loads[0].h, 90, 1e-9), 'at 4 s the load is 2 m along the rotated belt, facing along it', JSON.stringify(f.loads[0]));
  ok(pl.frame(19.3).loads.length === 0, 'after 19.2 s it has left for the sink (not drawn)');
  ok(pl.frame(1).loads.length === 1, 'going back in time finds it again');
}
{
  // accumulation shows: a closed gate, saturated feed; at the end 20 loads stand 0.5 m apart
  const L = LY.newLayout();
  L.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 0, params: { ...C.defaults('source'), mode: 'saturate', types: 'A 1 0.4' } });
  L.items.push(LY.addAfter(L, 'source-1', 'out', 'conveyor', { ...C.defaults('conveyor'), length: 10, speed: 0.5, gap: 0.1 }));
  L.items.push(LY.addAfter(L, 'conveyor-1', 'out', 'gate', { ...C.defaults('gate'), mode: 'closed' }));
  L.items.push(LY.addAfter(L, 'gate-1', 'out', 'sink'));
  const b = LY.buildGraph(L);
  const r = simulate(b.graph, { until: 300, traceUntil: 300 });
  const f = makePlayer(r.trace, b).frame(300);
  const xs = f.loads.filter((l) => l.p[0] > 0.3).map((l) => l.p[0]).sort((a, b) => b - a);
  ok(xs.length === 20 && xs.every((x, i) => near(x, 0.3 + 9.8 - 0.5 * i, 1e-6)), 'twenty loads nose to tail, the first at the belt\'s end', xs.slice(0, 3).join(' '));
}
{
  const L = EX.exampleAgv(), b = LY.buildGraph(L);
  const r = simulate(b.graph, { seed: 2, until: 600, traceUntil: 600 });
  const pl = makePlayer(r.trace, b);
  let carried = 0, onPath = true;
  for (let s = 0; s <= 600; s += 5) {
    const f = pl.frame(s);
    if (f.vehicles.length !== 2) onPath = false;
    carried += f.vehicles.filter((v) => v.loaded).length;
  }
  ok(onPath && carried > 10, 'two vehicles are drawn all the way; they are seen carrying loads');
}

section('report and CSV');
{
  const L = EX.exampleLine(), b = LY.buildGraph(L);
  const r = simulate(b.graph, { seed: 3, until: 7200, warmup: 600 });
  const sum = RP.summaryRows(r, t);
  ok(sum.find((x) => x.key === 'done').value === r.done && sum.some((x) => x.key === 'type:A'), 'summary rows: done, per hour, lead times, per type');
  const er = RP.elementRows(r, t);
  ok(er.find((x) => x.id === 'station-1').cells.some((c) => c.key === 'utilisation' && /%$/.test(c.value)), 'station rows show utilisation as a percentage');
  const csv = RP.toCsv(r, t);
  const lines = csv.trim().split('\r\n');
  ok(lines[0] === 'csv.element,csv.kind,csv.measure,csv.value' && lines.every((l) => l.split(',').length >= 4), 'CSV: a header and four columns');
  ok(lines.some((l) => l.startsWith('station-1,station,utilisation,')) && lines.some((l) => l === `,run,done,${r.done}`), 'CSV carries station utilisation and the run totals at full precision');
  ok(RP.toCsv({ ...r, elements: { '=cmd': { type: 'sink', done: 1 } }, vehicles: [] }, t).includes("'=cmd"), 'a cell starting like a formula is quoted');
  ok(RP.fmt(0.123456) === '0.12' && RP.fmt(12.345) === '12.3' && RP.fmt(1234.5) === '1235', 'numbers rounded for people');
}
