/* SPDX-License-Identifier: Apache-2.0 */
// The catalogue, ports, snapping and the flow graph built from geometry (lib/catalog.js, lib/layout.js, lib/examples.js).
const { ok, section, near, mine } = globalThis.__flowTest;
const C = await mine('../../flow/catalog.js');
const LY = await mine('../../flow/layout.js');
const EX = await mine('../../flow/examples.js');
const { checkGraph, simulate } = await mine('../../flow/sim.js');

const nearP = (a, b, tol = 1e-9) => a.every((x, i) => Math.abs(x - b[i]) <= tol);

section('catalogue: kinds, defaults, ports, paths');
{
  ok(C.KINDS.length === 16 && C.KINDS.every((k) => C.KIND[k].group && C.GROUPS.includes(C.KIND[k].group)), 'sixteen kinds, each in a group');
  for (const k of C.KINDS) {
    const d = C.defaults(k);
    const ports = C.localPorts(k, d);
    ok(Array.isArray(ports) && ports.every((p) => p.p.length === 3 && Number.isFinite(p.h)), `${k}: ports have a place and a heading`);
  }
  const cv = C.localPath('curve', { radius: 2, angle: 90 });
  ok(near(cv.length, Math.PI, 1e-12) && nearP(cv.at(cv.length).p, [2, 2, 0], 1e-12) && near(cv.at(cv.length).h, 90, 1e-9), 'a 90° left curve of radius 2: π m long, ends at (2, 2) heading 90°');
  const cr = C.localPath('curve', { radius: 1, angle: -45 });
  ok(cr.at(cr.length).p[1] < 0 && near(cr.at(cr.length).h, -45, 1e-9), 'a negative angle turns right');
  const inc = C.localPath('incline', { length: 3, rise: 4 });
  ok(near(inc.length, 5, 1e-12) && nearP(inc.at(5).p, [3, 0, 4]), 'an incline 3 m run, 4 m rise is 5 m of belt');
  ok(C.localPath('zone', { zones: 5, zoneLength: 1.2 }).length === 6, 'a zone conveyor is zones × zone length long');
  const p = C.cleanParams('station', { servers: 7.6, queue: -3, time: { kind: 'exp', mean: 12 }, evil: '<x>' });
  ok(p.servers === 8 && p.queue === 0 && p.time.mean === 12 && !('evil' in p), 'cleanParams rounds, clamps, keeps a good distribution and drops unknown keys');
  ok(C.cleanParams('merge', { rule: 'random' }).rule === 'priority', 'an unknown rule falls back to the default');
  const ty = C.parseTypes('A 3 0.4, B 1 0.6, <bad> 1 1, C x 0');
  ok(ty.length === 2 && ty[1].type === 'B' && ty[1].length === 0.6, 'load types "A 3 0.4, B 1 0.6" parse; bad ones are skipped');
  ok(JSON.stringify(C.parseMap('A 1, B 2, C 0')) === '{"A":1,"B":2}', 'divert type map parses');
}

section('layout: placing by ports, joining, snapping');
{
  const L = LY.newLayout();
  L.items.push({ id: 'source-1', kind: 'source', x: 1, y: 2, z: 0.8, rot: 30, params: C.defaults('source') });
  const c = LY.addAfter(L, 'source-1', 'out', 'conveyor', { ...C.defaults('conveyor'), length: 4 });
  L.items.push(c);
  const sp = LY.worldPorts(L.items[0]).find((p) => p.name === 'out'), ci = LY.worldPorts(c).find((p) => p.name === 'in');
  ok(nearP(sp.p, ci.p, 1e-9) && near(sp.h, ci.h, 1e-9), 'addAfter puts the new item\'s input exactly on the output, same heading');
  const cu = LY.addAfter(L, c.id, 'out', 'curve', { ...C.defaults('curve'), radius: 1, angle: 90 });
  L.items.push(cu);
  const k = LY.addAfter(L, cu.id, 'out', 'sink');
  L.items.push(k);
  const { links } = LY.connect(L);
  ok(links.length === 3 && links.map((l) => l.from + '>' + l.to).join(' ') === 'source-1>conveyor-1 conveyor-1>curve-1 curve-1>sink-1', 'connect joins touching ports: source → belt → curve → sink');
  ok(near(LY.worldPorts(k)[0].h, 120, 1e-9), 'after a 90° left curve from 30° the sink\'s input heads 120°');
  // move the sink a bit and snap it back
  k.x += 0.2; k.y -= 0.1;
  ok(LY.connect(L).links.length === 2, 'moving an item breaks its joint');
  ok(LY.snapItem(L, k.id, 0.5) && LY.connect(L).links.length === 3, 'snapItem puts it back on the free port within 0.5 m');
  k.x += 3;
  ok(!LY.snapItem(L, k.id, 0.5), 'nothing within reach: no snap');
  ok(LY.freePorts(L).some((p) => p.id === k.id && p.name === 'in'), 'free ports lists the loose input');
}
{
  const { layout, dropped } = LY.cleanLayout({ format: 'cadcraft-flow', version: 1, items: [{ id: 'a', kind: 'sink', x: 1 }, { id: 'a', kind: 'sink' }, { id: 'B!', kind: 'sink' }, { id: 'c', kind: 'warp' }], fleet: { vehicles: 999 }, run: { hours: -1 } });
  ok(layout.items.length === 1 && dropped === 3 && layout.fleet.vehicles === 50 && layout.run.hours === 0.01, 'cleanLayout drops duplicates, bad ids, unknown kinds; clamps the fleet and run');
  ok(LY.cleanLayout({ format: 'other' }).dropped === -1 && LY.cleanLayout({ format: 'cadcraft-flow', version: 99 }).dropped === -1, 'another format or a newer version is refused');
}

section('examples: built by snapping, every port joined, the graph runs');
{
  const L = EX.exampleLine();
  const b = LY.buildGraph(L);
  ok(b.problems.length === 0 && checkGraph(b.graph).length === 0, 'example line: no problems', JSON.stringify(checkGraph(b.graph)));
  const m = b.graph.links.filter((l) => l.to.startsWith('merge'));
  ok(m.length === 2 && m.map((l) => l.in).sort().join() === 'in1,in3', 'lane 2 comes round and meets the merge\'s third input exactly');
  const cv = b.graph.elements.find((e) => e.id === 'curve-1');
  ok(near(cv.length, Math.PI / 2, 1e-12), 'a curve\'s belt length is its arc');
  const r = simulate(b.graph, { seed: 1, until: 8 * 3600, warmup: 1800 });
  ok(r.ok && r.done > 1000 && r.elements['divert-1'].byOutput.every((n) => n > 500), 'it runs: loads through both lanes', `${r.done} ${JSON.stringify(r.elements['divert-1'].byOutput)}`);
  ok(near(r.perHour, 3600 / 20, 12), 'throughput ≈ the arrival rate (one every 20 s = 180 an hour): the line keeps up', String(r.perHour));
}
{
  const L = EX.exampleAgv();
  const b = LY.buildGraph(L);
  ok(b.problems.length === 0 && checkGraph(b.graph).length === 0, 'example AGV: no problems', JSON.stringify([...b.problems, ...checkGraph(b.graph)]));
  ok(b.graph.agv.edges.length === 4 && b.agvNodes.length === 4, 'four path segments make a loop of four nodes');
  const els = Object.fromEntries(b.graph.elements.map((e) => [e.id, e]));
  ok(els['agvpick-1'].node === 'n1' && els['agvdrop-1'].node === 'n3', 'pickup sits on the first node, drop on the opposite corner');
  const r = simulate(b.graph, { seed: 1, until: 8 * 3600, warmup: 1800 });
  ok(r.ok && near(r.perHour, 90, 8), 'two vehicles keep up with a load every 40 s (90 an hour)', String(r.perHour));
  ok(r.vehicles.length === 2 && r.vehicles.every((v) => v.delivered > 50), 'both vehicles work');
}
