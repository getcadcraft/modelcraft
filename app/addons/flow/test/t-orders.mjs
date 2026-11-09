/* SPDX-License-Identifier: Apache-2.0 */
// 0.9 TW.15: orders and arrivals from a file in place of a random source (lib/flow/orders.js, the source's `orders` mode).
const { ok, section, near, mine } = globalThis.__flowTest;
const O = await mine('../../flow/orders.js');
const { simulate, checkGraph } = await mine('../../flow/sim.js');
const LY = await mine('../../flow/layout.js');
const C = await mine('../../flow/catalog.js');

section('orders file: columns, units, time base');
{
  const a = O.parseOrders('time_s,type,qty\n10,A,2\n5,B,\n');
  ok(a.ok && a.rows.length === 2 && a.rows[0].t === 5 && a.rows[0].type === 'B' && a.rows[1].qty === 2 && a.count === 3, 'seconds; rows sorted by time; count adds the quantities', JSON.stringify(a));
  ok(O.parseOrders('time_min\n1.5\n').rows[0].t === 90 && O.parseOrders('time_h\n0.5\n').rows[0].t === 1800, 'minutes and hours become seconds');
  ok(O.parseOrders('time\n2\n', { timeUnit: 'min' }).rows[0].t === 120 && O.parseOrders('time\n2\n').rows[0].t === 2, 'plain time takes the chosen unit, seconds by default');
  const c = O.parseOrders('clock,type\n06:00:30,A\n06:01:00,A\n');
  ok(c.ok && c.rows[0].t === 0 && c.rows[1].t === 30 && c.unit === 'clock', 'time of day counts from the first row');
  ok(O.parseOrders('clock\n06:00\n06:10\n', { clockBase: 6 * 3600 - 60 }).rows[0].t === 60, 'or from a base the person gives');
  const d = O.parseOrders('﻿# a note\r\nTime_S;Length_MM;Source;Order\r\n\r\n1;400;source-1;"PO 7, rush"\r\n');
  ok(d.ok && d.rows[0].length === 0.4 && d.rows[0].source === 'source-1' && d.rows[0].label === 'PO 7, rush', 'semicolons, byte-order mark, comment and blank lines, quotes, mm, any case', JSON.stringify(d));
  ok(O.parseOrders('time_s,colour\n1,red\n').ignored.join() === 'colour', 'a column it does not know is named, not used');
  const e = O.parseOrders('time_s,type\n5,A\n5,B\n5,C\n1,D\n');
  ok(e.rows.map((r) => r.type).join('') === 'DABC', 'equal times keep the file order');
  ok(O.ordersCsv(e.rows).split('\n')[1] === '1,D,,,,' && O.parseOrders(O.ordersCsv(e.rows)).rows.length === 4, 'written back it reads the same');
}

section('orders file: the first bad row stops the read, nothing is skipped');
{
  const bad = (txt, code, line, o) => { const r = O.parseOrders(txt, o); ok(!r.ok && r.error.code === code && r.error.line === line && r.rows.length === 0, `${code} at line ${line}`, JSON.stringify(r.error)); return r; };
  bad('', 'empty', 0);
  bad('type\nA\n', 'no-time-column', 1);
  bad('time_s,time_min\n1,1\n', 'two-time-columns', 1);
  bad('time_s,type\n1,A\nsoon,A\n9,not a type\n', 'bad-time', 3);
  bad('time_s\n1\n-4\n', 'negative-time', 3);
  bad('clock\n6:00\n25:61\n', 'bad-clock', 3);
  bad('time_s,type\n1,A\n2,B C\n', 'bad-type', 3);
  bad('time_s,length_m\n1,0\n', 'bad-length', 2);
  bad('time_s,length_m\n1,50\n', 'bad-length', 2);
  bad('time_s,qty\n1,1.5\n', 'bad-qty', 2);
  bad('time_s,qty\n1,0\n', 'bad-qty', 2);
  bad('time_s,source\n1,Source 1\n', 'bad-source', 2);
  bad('time_s,type\n1,A,extra\n', 'too-many-cells', 2);
  bad('type,time_s\nA,1\n\n# note\nB\n', 'short-row', 5);
  bad('time_s,type\n1,"A\n', 'bad-quote', 2);
  const r = O.parseOrders('time_s\n1\n2\nx\n4\n');
  ok(r.error.value === 'x' && r.error.column === 'time_s', 'the error names the cell and the column', JSON.stringify(r.error));
  ok(O.parseOrders('time_s\n' + '1\n'.repeat(O.MAX_ROWS + 1)).error.code === 'too-many-rows', 'a file past the row limit is refused, not cut');
  ok(O.ordersCsv([{ t: 1, label: '=cmd|x' }]).includes("'=cmd|x"), 'a label that looks like a formula is quoted on the way out');
}

section('orders in the run: the same file gives the same run');
{
  const g = (rows, extra = {}) => ({
    elements: [{ id: 's', type: 'source', mode: 'orders', orders: rows, interarrival: { kind: 'exp', mean: 5 }, types: [{ type: 'A', weight: 1, length: 0.4 }, { type: 'B', weight: 1, length: 0.8 }], ...extra },
      { id: 'c', type: 'conveyor', length: 5, speed: 0.5, gap: 0.1, accumulate: true }, { id: 'k', type: 'sink' }],
    links: [{ from: 's', out: 'out', to: 'c', in: 'in' }, { from: 'c', out: 'out', to: 'k', in: 'in' }],
  });
  const p = O.parseOrders('time_s,type,qty\n100,A,\n1000,B,2\n');
  ok(!checkGraph(g(p.rows)).length, 'a graph with orders passes the checks');
  const r1 = simulate(g(p.rows), { seed: 1, until: 2000, traceUntil: 2000 }), r2 = simulate(g(p.rows), { seed: 99, until: 2000, traceUntil: 2000 });
  ok(JSON.stringify({ ...r1, seed: 0 }) === JSON.stringify({ ...r2, seed: 0 }), 'any seed: no random draw is used, so the run is the same');
  ok(r1.done === 3 && r1.elements.s.created === 3 && r1.elements.s.ordersTotal === 3, 'three loads from two rows (quantity 2)', JSON.stringify(r1.elements.s));
  // a load crosses in (belt length - its own length) / speed: A (0.4 m) 9.2 s, B (0.8 m) 8.4 s; the second B of the pair waits one pitch (0.8 + 0.1 gap) / 0.5 = 1.8 s behind the first
  ok(near(r1.elements.k.leadMax, 8.4 + 1.8, 1e-6), 'known crossing times: the slowest is the second B, 10.2 s', String(r1.elements.k.leadMax));
  const one = simulate(g(O.parseOrders('time_s,type\n100,A\n').rows), { seed: 1, until: 1000 });
  ok(near(one.elements.k.leadMax, 9.2, 1e-6), 'one A load crosses in 9.2 s', String(one.elements.k.leadMax));
  const late = simulate(g(p.rows), { seed: 1, until: 500 });
  ok(late.done === 1 && late.elements.s.ordersTotal === 3, 'orders after the end of the run are not reached; the total says how many there were');
  const typed = simulate(g(O.parseOrders('time_s,type\n1,B\n').rows), { seed: 1, until: 100 });
  ok(typed.elements.k.byType.B === 1, 'the order names the type');
  const noType = simulate(g(O.parseOrders('time_s\n1\n').rows), { seed: 1, until: 100 });
  ok(noType.elements.k.byType.A === 1, 'no type: the source\'s first type');
  const longL = checkGraph(g(O.parseOrders('time_s,length_m\n1,19\n').rows));
  ok(longL.length > 0, 'a load longer than a belt is a problem the check names', JSON.stringify(longL));
}

section('orders in the layout: tables, saving, problems');
{
  const L = LY.newLayout();
  L.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 0, params: { ...C.defaults('source'), mode: 'orders', orders: 'orders-1' } });
  let b = LY.buildGraph(L);
  ok(b.problems.some((p) => p.code === 'orders-missing' && p.id === 'source-1'), 'a source set to a table that is not there: orders-missing');
  L.orders.push({ id: 'orders-1', name: 'Week 12', file: 'w12.csv', unit: 's', rows: [{ t: 5, type: 'A' }, { t: 7, source: 'source-9' }] });
  b = LY.buildGraph(L);
  ok(!b.problems.some((p) => p.code === 'orders-missing') && b.graph.elements[0].orders.length === 1, 'the source takes the rows meant for it: its id, or no source named');
  L.orders[0].rows = [{ t: 7, source: 'source-9' }];
  ok(LY.buildGraph(L).problems.some((p) => p.code === 'orders-empty'), 'a table with nothing for this source: orders-empty');
  L.orders[0].rows = [{ t: 9, type: 'A' }, { t: 3, type: 'B', qty: 4 }];
  const back = LY.cleanLayout(JSON.parse(JSON.stringify(L)));
  ok(back.dropped === 0 && back.layout.orders.length === 1 && back.layout.orders[0].rows[0].t === 3 && back.layout.orders[0].rows[0].qty === 4 && back.layout.orders[0].file === 'w12.csv', 'saved and reopened, the table is the same (sorted)');
  const junk = LY.cleanLayout({ ...JSON.parse(JSON.stringify(L)), orders: [{ id: 'x y', rows: [] }, { id: 'ok-1', rows: [{ t: 'soon' }] }, { id: 'ok-2', rows: [{ t: 2 }] }] });
  ok(junk.dropped === 2 && junk.layout.orders.length === 1 && junk.layout.orders[0].id === 'ok-2', 'a bad table in a file is dropped and counted, never half read');
  ok(C.KIND.source.params.mode.choices.includes('orders') && LY.newLayout().orders.length === 0, 'the source offers the mode; a new layout has no tables');
}
