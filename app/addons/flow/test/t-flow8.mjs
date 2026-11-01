/* SPDX-License-Identifier: Apache-2.0 */
// Session flow-08: shift calendars, breakdowns, two-way AGV lanes with node reservation, stepping and real-time pacing, the worker
// with progress and cancel, mouse-editing geometry, and the layout round trip of all of it.
import path from 'node:path';
import { Worker as NodeWorker } from 'node:worker_threads';
const { ok, section, near, mine, ADDON } = globalThis.__flowTest;
const CAL = await mine('lib/calendar.js');
const { Sim, simulate, checkGraph } = await mine('lib/sim.js');
const LY = await mine('lib/layout.js');
const EX = await mine('lib/examples.js');
const C = await mine('lib/catalog.js');
const ED = await mine('lib/edit.js');
const RT = await mine('lib/realtime.js');
const RUN = await mine('lib/runner.js');
const PB = await mine('lib/playback.js');

const H = 3600, D = 86400, W = 604800;
const strip = (r) => JSON.stringify({ ...r, trace: undefined });

section('shifts: calendar arithmetic');
{
  const one = CAL.compile({ windows: CAL.PRESETS['one-shift'] });   // Mon–Fri 06:00–14:00
  ok(one.isOn(7 * H) && !one.isOn(5 * H) && !one.isOn(14 * H) && one.isOn(14 * H - 1), 'one shift: on 06:00–14:00, off at 14:00 sharp');
  ok(!one.isOn(5 * D + 8 * H) && !one.isOn(6 * D + 8 * H), 'one shift: off on Saturday and Sunday');
  ok(one.nextOn(4 * D + 15 * H) === W + 6 * H, 'one shift: after Friday 15:00 the next opening is Monday 06:00');
  ok(one.nextOn(7 * H) === 7 * H && one.nextOff(7 * H) === 14 * H, 'nextOn is now when on; nextOff is the end of the window');
  ok(near(one.onTime(0, W), 5 * 8 * H), 'a week of one shift is 40 hours on');
  ok(near(one.onTime(7 * H, 9 * H), 2 * H) && near(one.onTime(15 * H, 20 * H), 0), 'onTime over part of a window, and over none');
  const night = CAL.compile({ windows: [{ days: [0], from: '22:00', to: '06:00' }] });
  ok(night.isOn(23 * H) && night.isOn(D + 5 * H) && !night.isOn(D + 6 * H) && !night.isOn(21 * H), 'an overnight window runs into the next day');
  const wrap = CAL.compile({ windows: [{ days: [6], from: '22:00', to: '06:00' }] });
  ok(wrap.isOn(6 * D + 23 * H) && wrap.isOn(3 * H) && wrap.isOn(W + 5 * H) && !wrap.isOn(W + 7 * H), 'a Sunday-night window wraps to Monday morning, week after week');
  ok(near(wrap.onTime(0, W), 8 * H), 'and is still eight hours a week');
  const all = CAL.compile({ windows: CAL.PRESETS['every-day'] });
  ok(all.always && all.nextOff(5) === Infinity && all.isOn(123456), 'every day, 00:00–00:00 is always on');
  const none = CAL.compile({ windows: [] });
  ok(none.never && none.nextOn(5) === Infinity && !none.isOn(5), 'no windows is never on');
  const two = CAL.compile({ windows: [{ days: [0], from: '06:00', to: '10:00' }, { days: [0], from: '10:00', to: '12:00' }] });
  ok(two.nextOff(7 * H) === 12 * H, 'windows that touch are one stretch');
  ok(CAL.parseHHMM('24:00') === D && CAL.parseHHMM('7:30') === 27000 && CAL.parseHHMM('25:00') === null && CAL.parseHHMM('06:60') === null, 'times parse and are checked');
  const c = CAL.cleanCalendar({ id: 'a-1', name: '<b>x</b>', windows: [{ days: [1, 1, 9, 'x'], from: '6:00', to: '14:00' }, { days: [], from: '06:00', to: '14:00' }, { days: [0], from: 'no', to: '14:00' }] });
  ok(c && c.windows.length === 1 && JSON.stringify(c.windows[0].days) === '[1]' && c.windows[0].from === '06:00' && !c.name.includes('<'), 'cleanCalendar drops bad windows, days and markup');
  ok(CAL.cleanCalendar({ id: 'Bad Id' }) === null, 'a calendar needs a clean id');
}

section('shifts: a station works only while the calendar is on');
const lineG = (st, src = {}, cals = []) => ({
  calendars: cals,
  elements: [{ id: 's', type: 'source', interarrival: { kind: 'const', v: 10 }, ...src }, { id: 'st', type: 'station', servers: 1, queue: 5, time: { kind: 'const', v: 5 }, ...st }, { id: 'k', type: 'sink' }],
  links: [{ from: 's', out: 'out', to: 'st', in: 'in' }, { from: 'st', out: 'out', to: 'k', in: 'in' }],
});
{
  const hour = { id: 'mon', windows: [{ days: [0], from: '00:00', to: '01:00' }] };
  const r = simulate(lineG({ calendar: 'mon' }, {}, [hour]), { seed: 1, until: 2 * H });
  ok(r.ok && r.done === 359, `Monday 00:00–01:00 only, a load every 10 s, 5 s of work: 359 done (arrivals 10…3590); got ${r.done}`);
  ok(near(r.elements.st.calendarOpen, 0.5, 1e-9), 'the station was open half of the two hours', String(r.elements.st.calendarOpen));
  ok(r.elements.st.queueMax === 5, 'while closed it queues to its limit (5) and then holds the line back');
  const days = { id: 'two', windows: [{ days: [0, 1], from: '00:00', to: '01:00' }] };
  const r2 = simulate(lineG({ calendar: 'two' }, { calendar: 'two' }, [days]), { seed: 1, until: D + 2 * H });
  ok(r2.ok && r2.done === 719, `a source on the same calendar: 359 Monday + 360 Tuesday (the first one at opening) = 719; got ${r2.done}`);
  const r0 = simulate(lineG({}, {}, []), { seed: 1, until: 2 * H });
  ok(r0.done === 719 || r0.done === 719, 'no calendar: unchanged (719 in two hours)', String(r0.done));
  ok(simulate(lineG({ calendar: 'mon' }, {}, [hour]), { seed: 1, until: 2 * H }).done === r.done && strip(r) === strip(simulate(lineG({ calendar: 'mon' }, {}, [hour]), { seed: 1, until: 2 * H })), 'same seed, same result');
  const p = checkGraph(lineG({ calendar: 'nope' }, {}, [hour]));
  ok(p.some((x) => x.code === 'calendar-unknown' && x.id === 'st'), 'an unknown calendar is a problem');
  ok(checkGraph(lineG({ calendar: 'e' }, {}, [{ id: 'e', windows: [] }])).some((x) => x.code === 'calendar-never'), 'a calendar that is never on is a problem');
  // service in progress at closing time finishes
  const g = lineG({ calendar: 'x', time: { kind: 'const', v: 100 } }, { interarrival: { kind: 'const', v: 3550 } }, [{ id: 'x', windows: [{ days: [0], from: '00:00', to: '01:00' }] }]);
  ok(simulate(g, { seed: 1, until: 2 * H }).done === 1, 'a service that began before closing time finishes after it');
}

section('breakdowns: availability and lost work');
{
  const g = (extra = {}) => lineG({ time: { kind: 'const', v: 10 }, queue: 5, ...extra }, { mode: 'saturate' });
  const base = simulate(g(), { seed: 3, until: 100 * H });
  ok(base.done === 36000, 'saturated station, 10 s each, no failures: 36 000 in 100 h', String(base.done));
  const mtbf = 3600, mttr = 600, until = 2000 * H;
  const r = simulate(g({ mtbf, mttr }), { seed: 3, until });
  const A = mtbf / (mtbf + mttr), a = r.elements.st.availability;
  ok(Math.abs(a - A) / A < 0.03, `availability ≈ MTBF / (MTBF + MTTR) = ${A.toFixed(4)}; got ${a}`);
  const cycles = until / (mtbf + mttr);
  ok(Math.abs(r.elements.st.failures - cycles) / cycles < 0.08, `failures ≈ ${cycles.toFixed(0)}; got ${r.elements.st.failures}`);
  const tp = r.done / (until / 10);
  ok(Math.abs(tp - A) / A < 0.03, `a saturated station's output follows its availability: ${tp.toFixed(4)} vs ${A.toFixed(4)}`);
  ok(strip(r) === strip(simulate(g({ mtbf, mttr }), { seed: 3, until })) && strip(r) !== strip(simulate(g({ mtbf, mttr }), { seed: 4, until })), 'breakdowns are seeded: same seed same, other seed differs');
  const r1 = simulate(g({ mtbf, mttr }), { seed: 3, until: 5 * H });
  ok(simulate(g(), { seed: 3, until: 5 * H }).elements.st.availability === undefined && r1.elements.st.availability !== undefined, 'only stations with breakdowns report availability');
  ok(checkGraph(g({ mtbf: 100 })).some((x) => x.code === 'bad-param' && x.key === 'mttr'), 'an MTBF with no MTTR is refused');
  // a repair pauses the service in progress: with an MTTR far above the service time the loads are never lost or doubled
  const rr = simulate(g({ mtbf: 50, mttr: 40, time: { kind: 'const', v: 30 } }), { seed: 5, until: 50 * H });
  ok(rr.ok && rr.created - rr.done - rr.wip === 0 && rr.elements.st.failures > 1000, 'every load that went in comes out or is still inside (nothing lost, nothing doubled)');
}

section('AGV: two-way lanes, node reservation');
{
  // a triangle of two-way lanes n1–n2–n3–n1, 10 m each; shuttle n1→n2 and n2→n1 with two vehicles
  const tri = (twoWay, nodes) => {
    const mk = (id, from, to) => [{ id, from, to, length: 10, ...(twoWay ? { lane: id } : {}) }, ...(twoWay ? [{ id: id + '~r', from: to, to: from, length: 10, lane: id }] : [])];
    return {
      elements: [
        { id: 's1', type: 'source', mode: 'interval', interarrival: { kind: 'exp', mean: 40 }, types: [{ type: 'A', weight: 1, length: 0.4 }] },
        { id: 'p1', type: 'agv-pick', node: 'n1', to: 'd1', capacity: 4 }, { id: 'd1', type: 'agv-drop', node: 'n2', capacity: 4 }, { id: 'k1', type: 'sink' },
        { id: 's2', type: 'source', mode: 'interval', interarrival: { kind: 'exp', mean: 40 }, types: [{ type: 'B', weight: 1, length: 0.4 }] },
        { id: 'p2', type: 'agv-pick', node: 'n2', to: 'd2', capacity: 4 }, { id: 'd2', type: 'agv-drop', node: 'n1', capacity: 4 }, { id: 'k2', type: 'sink' },
      ],
      links: [
        { from: 's1', out: 'out', to: 'p1', in: 'in' }, { from: 'd1', out: 'out', to: 'k1', in: 'in' },
        { from: 's2', out: 'out', to: 'p2', in: 'in' }, { from: 'd2', out: 'out', to: 'k2', in: 'in' },
      ],
      agv: { edges: [...mk('a', 'n1', 'n2'), ...mk('b', 'n2', 'n3'), ...mk('c', 'n3', 'n1')], fleet: { vehicles: 2, speed: 1, load: 5, unload: 5, nodes } },
    };
  };
  const noOverlap = (r, key) => {
    const by = new Map();
    for (const m of r.trace.vehicles) { if (m.t0 < 0) continue; const k = key(m); if (!by.has(k)) by.set(k, []); by.get(k).push(m); }
    for (const list of by.values()) {
      list.sort((x, y) => x.t0 - y.t0);
      for (let i = 1; i < list.length; i++) if (list[i].t0 < list[i - 1].t1 - 1e-9 && list[i].v !== list[i - 1].v) return false;
    }
    return true;
  };
  const r = simulate(tri(true, false), { seed: 2, until: 8 * H, traceUntil: 8 * H, maxTrace: 1e6 });
  ok(r.ok && r.done > 100, `two vehicles shuttle both ways over two-way lanes without a failure (${r.done} delivered)`, JSON.stringify(r.failed));
  ok(noOverlap(r, (m) => m.e.replace(/~r$/, '')), 'never two vehicles on one lane at the same time (either direction)');
  ok(r.vehicles.every((v) => v.delivered > 100), `both vehicles deliver, neither starves the other (${r.vehicles.map((v) => v.delivered).join(' / ')})`);
  ok(r.done >= 0 && strip(r) === strip(simulate(tri(true, false), { seed: 2, until: 8 * H, traceUntil: 8 * H, maxTrace: 1e6 })), 'same seed, same result');
  // node reservation at a junction: two squares of two-way lanes sharing the corner C (four lanes meet there), three vehicles
  const eight = (nodes) => {
    const mk = (id, from, to) => [{ id, from, to, length: 8, lane: id }, { id: id + '~r', from: to, to: from, length: 8, lane: id }];
    const src = (id, ty) => ({ id, type: 'source', mode: 'interval', interarrival: { kind: 'exp', mean: 30 }, types: [{ type: ty, weight: 1, length: 0.4 }] });
    return {
      elements: [src('s1', 'A'), { id: 'p1', type: 'agv-pick', node: 'a2', to: 'd1', capacity: 4 }, { id: 'd1', type: 'agv-drop', node: 'b2', capacity: 4 }, { id: 'k1', type: 'sink' },
        src('s2', 'B'), { id: 'p2', type: 'agv-pick', node: 'b2', to: 'd2', capacity: 4 }, { id: 'd2', type: 'agv-drop', node: 'a2', capacity: 4 }, { id: 'k2', type: 'sink' }],
      links: [{ from: 's1', out: 'out', to: 'p1', in: 'in' }, { from: 'd1', out: 'out', to: 'k1', in: 'in' }, { from: 's2', out: 'out', to: 'p2', in: 'in' }, { from: 'd2', out: 'out', to: 'k2', in: 'in' }],
      agv: { edges: [...mk('a1', 'c', 'a1'), ...mk('a2', 'a1', 'a2'), ...mk('a3', 'a2', 'a3'), ...mk('a4', 'a3', 'c'), ...mk('b1', 'c', 'b1'), ...mk('b2', 'b1', 'b2'), ...mk('b3', 'b2', 'b3'), ...mk('b4', 'b3', 'c')], fleet: { vehicles: 3, speed: 1, load: 3, unload: 3, nodes } },
    };
  };
  const rn = simulate(eight(true), { seed: 4, until: 8 * H, traceUntil: 8 * H, maxTrace: 1e6 });
  ok(rn.ok && rn.done > 200 && rn.vehicles.every((v) => v.delivered > 0), `three vehicles cross a four-lane junction with node reservation (${rn.done} delivered)`, JSON.stringify(rn.failed));
  const edges = new Map(eight(true).agv.edges.map((e) => [e.id, e]));
  const hold = [], byV = new Map();
  for (const m of rn.trace.vehicles) { if (m.t0 < 0) continue; if (!byV.has(m.v)) byV.set(m.v, []); byV.get(m.v).push(m); }
  for (const [v, list] of byV) {
    list.sort((x, y) => x.t0 - y.t0);
    for (let i = 0; i < list.length - 1; i++) if (edges.get(list[i].e).to === 'c') hold.push({ v, a: list[i].t0, b: list[i + 1].t0 });
  }
  hold.sort((x, y) => x.a - y.a);
  let clash = false;
  for (let i = 1; i < hold.length; i++) if (hold[i].a < hold[i - 1].b - 1e-9 && hold[i].v !== hold[i - 1].v) clash = true;
  ok(hold.length > 20 && !clash, `the junction is held by one vehicle at a time (${hold.length} passes, none overlapping)`);
  ok(noOverlap(rn, (m) => m.e.replace(/~r$/, '')), 'and no lane ever holds two vehicles');
  const rf = simulate(eight(false), { seed: 4, until: 8 * H });
  ok(rf.ok || rf.failed, 'the same layout without node reservation runs too, or says why not');
  // one-way parity: the old loop still behaves (first delivery 30 s + 20 s rule is in t-sim); here only that lanes default to the edge
  const one = simulate(tri(false, false), { seed: 2, until: 8 * H });
  ok(one.ok || one.failed.code === 'agv-deadlock' || one.failed.code === 'agv-no-route', 'one-way triangle: runs, or says why it cannot (never hangs)');
  // a dead end that blocks: the idle vehicle sits at the end of the only lane, another needs to come the other way
  const dead = {
    elements: [{ id: 's', type: 'source', mode: 'interval', interarrival: { kind: 'const', v: 100 }, types: [{ type: 'A', weight: 1, length: 0.4 }] }, { id: 'p', type: 'agv-pick', node: 'n2', to: 'd', capacity: 4 }, { id: 'd', type: 'agv-drop', node: 'n1', capacity: 4 }, { id: 'k', type: 'sink' }],
    links: [{ from: 's', out: 'out', to: 'p', in: 'in' }, { from: 'd', out: 'out', to: 'k', in: 'in' }],
    agv: { edges: [{ id: 'a', from: 'n1', to: 'n2', length: 10, lane: 'a' }, { id: 'a~r', from: 'n2', to: 'n1', length: 10, lane: 'a' }, { id: 'x', from: 'n3', to: 'n1', length: 5 }, { id: 'y', from: 'n1', to: 'n3', length: 5 }], fleet: { vehicles: 2, speed: 1, load: 1, unload: 1 } },
  };
  const rd = simulate(dead, { seed: 1, until: 3600 });
  ok(rd.ok || ['agv-blocked', 'agv-deadlock'].includes(rd.failed.code), 'a blocked lane is reported as agv-blocked or agv-deadlock, never a hang', JSON.stringify(rd.failed));
}

section('stepping, progress and real time');
{
  const b = LY.buildGraph(EX.exampleLine());
  const full = simulate(b.graph, { seed: 1, until: 1800, warmup: 300 });
  const sim = new Sim(b.graph, { seed: 1, until: 1800, warmup: 300 });
  ok(sim.begin(), 'begin() sets the run up');
  let calls = 0;
  for (let t = 0; t < 1800; t += 7) { sim.advance(t); calls++; }
  sim.advance(1800);
  ok(sim.over && strip(sim.results()) === strip(full), `${calls} small steps give exactly the result of one run()`);
  ok(sim.now === 1800, 'and the clock ends at `until`');
  let prog = [];
  simulate(b.graph, { seed: 1, until: 8 * H, progressEvery: 2000, onProgress: (p) => prog.push(p) });
  ok(prog.length > 3 && prog.every((p, i) => i === 0 || (p.t >= prog[i - 1].t && p.events > prog[i - 1].events)) && prog[0].until === 8 * H, `progress reports come in order (${prog.length} of them)`);
  // real time: a hand-driven clock
  let wall = 0;
  const live = new Sim(b.graph, { seed: 1, until: 1800, warmup: 300, traceUntil: 1800 });
  const rt = RT.makeRealtime(live, { scale: 60, clock: () => wall });
  ok(rt.start() && rt.tick().t === 0, 'real time starts at zero');
  wall = 5000; let s = rt.tick();
  ok(near(s.t, 300, 1e-6) && !s.done, 'five wall seconds at 60× is five model minutes');
  rt.pause(); wall = 9000; ok(rt.tick().t === s.t, 'paused: the model waits');
  rt.resume(); rt.setScale(1); wall = 10000; ok(near(rt.tick().t, s.t + 1, 1e-6), 'resumed at 1×: one more second after one wall second');
  rt.setScale(600);
  for (let i = 0; i < 100 && !s.done; i++) { wall += 500; s = rt.tick(); }
  ok(s.done && strip(live.results()) === strip(full), 'run to the end in real time: the same result as the batch run');
  // a live player reads the growing trace
  const l2 = new Sim(b.graph, { seed: 1, until: 600, traceUntil: 600 });
  const pl = PB.makePlayer(l2.trace, b, { live: true });
  l2.begin(); l2.advance(120);
  const f1 = pl.frame(120).loads.length;
  l2.advance(300);
  const f2 = pl.frame(300);
  const ref = PB.makePlayer(simulate(b.graph, { seed: 1, until: 600, traceUntil: 600 }).trace, b).frame(300);
  ok(f1 > 0 && JSON.stringify(f2) === JSON.stringify(ref), 'a live player draws the same frame as a player on the finished trace');
}

section('worker: results, progress, cancel, fallback');
{
  const b = LY.buildGraph(EX.exampleLine());
  const opts = { seed: 1, until: 4 * H, warmup: 300, traceUntil: 1800, progressEvery: 1000 };
  const url = path.join(ADDON, 'test', 'worker-shim.mjs');
  class NW { constructor(u) { this.w = new NodeWorker(u); this.w.on('message', (d) => this.onmessage && this.onmessage({ data: d })); this.w.on('error', (e) => this.onerror && this.onerror(e)); } postMessage(m) { this.w.postMessage(m); } terminate() { this.w.terminate(); } }
  const direct = simulate(b.graph, opts);
  let progress = 0;
  const job = RUN.runSim(b.graph, opts, { Worker: NW, url, onProgress: () => { progress++; } });
  const out = await job.promise;
  ok(out.inWorker && JSON.stringify(out.result) === JSON.stringify(direct), 'a worker run gives the same result (trace included) as the same run on this thread');
  ok(progress >= 2, `the worker reports progress (${progress} messages)`);
  let cancelled = false;
  const long = RUN.runSim(b.graph, { seed: 1, until: 1e6 * H, progressEvery: 20000, maxEvents: 1e9 }, { Worker: NW, url, onProgress: () => { if (!cancelled) { cancelled = true; long.cancel(); } } });
  const e = await long.promise.then(() => null, (x) => x);
  ok(e && e.cancelled === true, 'cancel stops a long run and the promise says so');
  class Bad { constructor() { throw new Error('no workers here'); } }
  const fb = await RUN.runSim(b.graph, opts, { Worker: Bad, url }).promise;
  ok(!fb.inWorker && JSON.stringify(fb.result) === JSON.stringify(direct), 'where a worker cannot start the run happens on this thread, same result');
  const none = await RUN.runSim(b.graph, opts, { Worker: undefined, url: undefined }).promise;
  ok(!none.inWorker && none.result.done === direct.done, 'no Worker at all: also on this thread');
  const bad = await RUN.runSim({ elements: [{ id: 's', type: 'source', interarrival: { kind: 'const', v: 1 } }], links: [] }, {}, { Worker: NW, url }).promise;
  ok(bad.result.ok === false && bad.result.problems.some((p) => p.code === 'out-unlinked'), 'a graph with problems comes back as ok:false, not a crash');
}

section('editing: ground point, groups, history, placing');
{
  ok(ED.groundPoint({ o: [1, 2, 10], d: [0, 0, -1] }, 0).join() === '1,2', 'a ray straight down meets the ground under it');
  const g = ED.groundPoint({ o: [0, 0, 10], d: [0.6, 0, -0.8] }, 0.8);
  ok(near(g[0], 6.9, 1e-9) && near(g[1], 0, 1e-12), 'a slanted ray meets the plane at the item\'s height');
  ok(ED.groundPoint({ o: [0, 0, 10], d: [1, 0, 0] }, 0) === null && ED.groundPoint({ o: [0, 0, -1], d: [0, 0, -1] }, 0) === null, 'parallel to the plane, or pointing away: nothing');
  ok(ED.gridSnap(1.234, 0.1) - 1.2 < 1e-9 && ED.gridSnap(1.234, 0) === 1.234, 'grid snap');
  const L = EX.exampleLine();
  const ids = ED.groupOf(L, L.items[0].id);
  ok(ids.length === L.items.length, `a connected line moves as one group (${ids.length} of ${L.items.length})`);
  const A = EX.exampleAgv();
  const gp = ED.groupOf(A, A.items.find((i) => i.kind === 'agv-path').id);
  ok(gp.length === A.items.length, 'the AGV example is one group: paths, pickup, drop and the belts they touch');
  const x0 = L.items[0].x;
  ED.moveItems(L, ids, 1.5, -2);
  ok(near(L.items[0].x, x0 + 1.5) && LY.connect(L).links.length === LY.connect(EX.exampleLine()).links.length, 'moving a whole group keeps every joint');
  // placing near a free port snaps on
  const P = LY.newLayout();
  P.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 0, params: C.defaults('source') });
  const out = LY.freePorts(P).find((p) => p.name === 'out');
  const it = ED.placeAt(P, 'conveyor', out.p[0] + 0.3, out.p[1] + 0.2);
  P.items.push(it);
  ok(it.z === 0.8 && it.id === 'conveyor-1' && ED.placeAt(P, 'agv-path', 0, 0).z === 0, 'placed items get their usual height (raised for belts, ground for AGV paths)');
  ok(LY.snapItem(P, it.id, 0.6) && LY.connect(P).links.length === 1, 'dropped within 0.6 m of a free port it snaps on and joins');
  const h = ED.makeHistory(3);
  h.push('a'); h.push('b'); h.push('c'); h.push('d');
  ok(h.undo('e') === 'd' && h.undo('d') === 'c' && h.undo('c') === 'b' && h.undo('b') === null, 'history keeps the last 3 steps');
  ok(h.redo('b') === 'c' && h.canRedo, 'redo walks forward again');
  h.push('z');
  ok(!h.canRedo, 'a new step clears redo');
}

section('layout: calendars, breakdown params, two-way paths round trip');
{
  const L = LY.newLayout();
  L.calendars.push({ id: 'day', name: 'Day', windows: [{ days: [0, 1, 2, 3, 4], from: '06:00', to: '14:00' }] });
  L.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 0, params: { ...C.defaults('source'), calendar: 'day' } });
  const st = LY.addAfter(L, 'source-1', 'out', 'station', { ...C.defaults('station'), calendar: 'day', mtbf: 4, mttr: 20 });
  L.items.push(st);
  const k = LY.addAfter(L, st.id, 'out', 'sink'); L.items.push(k);
  const back = LY.cleanLayout(JSON.parse(JSON.stringify(L)));
  ok(back.dropped === 0 && JSON.stringify(back.layout) === JSON.stringify(L), 'calendars and the new parameters survive a save and open');
  const b = LY.buildGraph(L);
  const el = b.graph.elements.find((e) => e.id === st.id);
  ok(el.calendar === 'day' && el.mtbf === 4 * 3600 && el.mttr === 20 * 60 && b.graph.calendars.length === 1, 'the graph gets the calendar id, MTBF in seconds and MTTR in seconds');
  ok(b.graph.elements.find((e) => e.id === 'source-1').calendar === 'day', 'a source takes the calendar too');
  ok(!('mtbf' in b.graph.elements.find((e) => e.id === 'source-1')), 'only stations get breakdowns');
  const old = LY.cleanLayout({ format: 'cadcraft-flow', version: 1, items: [], run: {}, fleet: {} });
  ok(old.dropped === 0 && Array.isArray(old.layout.calendars) && old.layout.calendars.length === 0 && old.layout.fleet.nodes === false, 'a file from before shifts opens with none');
  ok(LY.cleanLayout({ format: 'cadcraft-flow', version: 1, calendars: [{ id: 'a', windows: [] }, { id: 'a', windows: [] }, 5] }).dropped === 2, 'duplicate and bad calendars are dropped');
  const r = simulate(b.graph, { seed: 1, until: 2 * 24 * 3600 });
  ok(r.ok && r.elements[st.id].calendarOpen > 0.3 && r.elements[st.id].calendarOpen < 0.4 && r.elements[st.id].availability < 1, 'a layout built with shifts and breakdowns runs');
  // two-way path in a layout
  const A = EX.exampleAgv();
  A.items.filter((i) => i.kind === 'agv-path').forEach((i) => { i.params.twoWay = true; });
  const bt = LY.buildGraph(A);
  ok(bt.graph.agv.edges.length === 8 && bt.graph.agv.edges.filter((e) => e.lane).length === 8 && bt.graph.agv.edges.filter((e) => e.id.endsWith('~r')).every((e) => e.lane === e.id.slice(0, -2)), 'four two-way paths make eight edges, each pair on one lane');
  const pathItem = A.items.find((i) => i.kind === 'agv-path');
  const gf = bt.geom[pathItem.id].path, gr = bt.geom[pathItem.id + LY.REVERSE].path;
  ok(near(gr.at(0).p[0], gf.at(gf.length).p[0]) && near(Math.abs(gr.at(0).h - gf.at(0).h), 180, 1e-9), 'the reverse edge runs the same line backwards');
  const rt2 = simulate(bt.graph, { seed: 1, until: 3600, traceUntil: 3600 });
  ok(rt2.ok || rt2.failed, 'a two-way AGV layout runs or says why not');
  ok(PB.makePlayer(rt2.trace, bt).frame(1800).vehicles.every((v) => v.p.every(Number.isFinite)), 'playback finds every vehicle on a reverse edge');
}
