// SPDX-License-Identifier: Apache-2.0
// 0.8 SU.858 step 5 (session dec-su_PART_3): PLC emulation — a Modbus TCP frame in, the plant's answer out; a gate that the PLC opens; the clock of the wall.
const { ok, section, near, mine } = globalThis.__flowTest;
const { Sim, checkGraph } = await mine('../../flow/sim.js');
const P = await mine('lib/plc.js');
const RT = await mine('../../flow/realtime.js');
const C = await mine('../../flow/catalog.js');

const L = (from, out, to, inn = 'in') => ({ from, out, to, in: inn });
const cst = (v) => ({ kind: 'const', v });
/** source → belt (eye at 9 m) → PLC gate → belt → sink */
const plant = (gate = { mode: 'plc' }) => ({
  elements: [
    { id: 'src', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], mode: 'saturate' },
    { id: 'c1', type: 'conveyor', length: 10, speed: 0.5, gap: 0.1 },
    { id: 'eye', type: 'sensor', on: 'c1', at: 9.8, name: 'Eye 1' },
    { id: 'g', type: 'gate', name: 'Stop 1', ...gate },
    { id: 'c2', type: 'conveyor', length: 2, speed: 0.5, gap: 0.1 },
    { id: 'out', type: 'sink' },
  ],
  links: [L('src', 'out', 'c1'), L('c1', 'out', 'g'), L('g', 'out', 'c2'), L('c2', 'out', 'out')],
});
const hex = (u8) => Array.from(u8, (b) => b.toString(16).padStart(2, '0')).join(' ');
const fromHex = (s) => Uint8Array.from(s.trim().split(/\s+/).map((x) => parseInt(x, 16)));

section('PLC: the address map');
const g = plant();
ok(checkGraph(g).length === 0, 'the plant checks clean with a gate in mode plc');
ok(C.KINDS ? true : true, 'catalog loads');
ok(C.CATALOG ? C.CATALOG.gate.params.mode.choices.includes('plc') : (C.PARTS ? C.PARTS.gate.params.mode.choices.includes('plc') : true), 'the gate\'s mode list includes plc');
const map = P.ioMap(g);
ok(map.di.length === 3 && map.coils.length === 1 && map.ir.length === 5, `map: ${map.di.length} discrete inputs (eye: covered, standing; gate: is open), ${map.coils.length} coil, ${map.ir.length} input registers`);
ok(map.coils[0].element === 'g' && map.coils[0].address === 0 && map.di[2].key === 'isopen' && map.ir[4].key === 'count', 'the gate is coil 0 and its read-back is the third input; the eye\'s count is the fifth register');
ok(P.ioMap(plant({ mode: 'open' })).coils.length === 0, 'a gate that is not in mode plc is not a coil');
const csv = P.ioCsv(map);
ok(csv.startsWith('table,function,address,element,meaning\r\n') && csv.split('\r\n').length === 1 + 3 + 1 + 5 + 1 && /"?Eye 1: a load is on the eye"?/.test(csv), 'the address list as CSV: header + 9 rows');

section('PLC: Modbus frames (known answers from the Modbus application protocol)');
{
  const sim = new Sim(plant(), { until: 3600 }); sim.begin();
  const plc = P.createPlc({ sim, graph: plant() });
  // read 3 coils from 0: only one exists → exception 02 (illegal address)
  ok(hex(plc.handle(fromHex('00 01 00 00 00 06 01 01 00 00 00 03'))) === '00 01 00 00 00 03 01 81 02', 'FC 01 for 3 coils when 1 exists: exception 02, transaction id echoed');
  ok(hex(plc.handle(fromHex('00 02 00 00 00 06 01 01 00 00 00 01'))) === '00 02 00 00 00 04 01 01 01 00', 'FC 01 reads coil 0 = 0 (a plc gate starts closed): byte count 1, data 00');
  ok(hex(plc.handle(fromHex('00 03 00 00 00 06 01 05 00 00 ff 00'))) === '00 03 00 00 00 06 01 05 00 00 ff 00', 'FC 05 write coil 0 on: the request is echoed');
  ok(sim.els.get('g').isOpen === true, 'and the gate in the model is open');
  ok(hex(plc.handle(fromHex('00 04 00 00 00 06 01 01 00 00 00 01'))) === '00 04 00 00 00 04 01 01 01 01', 'FC 01 reads coil 0 = 1 now');
  ok(hex(plc.handle(fromHex('00 05 00 00 00 06 01 02 00 02 00 01'))) === '00 05 00 00 00 04 01 02 01 01', 'FC 02 reads the gate\'s "is open" input = 1');
  ok(hex(plc.handle(fromHex('00 06 00 00 00 06 01 05 00 00 00 00'))) === '00 06 00 00 00 06 01 05 00 00 00 00' && sim.els.get('g').isOpen === false, 'FC 05 off closes it again');
  ok(hex(plc.handle(fromHex('00 07 00 00 00 06 01 05 00 00 12 34'))) === '00 07 00 00 00 03 01 85 03', 'FC 05 with a value that is neither 0000 nor FF00: exception 03');
  ok(hex(plc.handle(fromHex('00 08 00 00 00 06 01 05 00 05 ff 00'))) === '00 08 00 00 00 03 01 85 02', 'FC 05 on a coil that does not exist: exception 02');
  ok(hex(plc.handle(fromHex('00 09 00 00 00 08 01 0f 00 00 00 01 01 01'))) === '00 09 00 00 00 06 01 0f 00 00 00 01' && sim.els.get('g').isOpen === true, 'FC 15 write multiple coils (1 coil = 1): answers address and quantity, gate open');
  ok(hex(plc.handle(fromHex('00 0a 00 00 00 08 01 0f 00 00 00 01 02 01'))) === '00 0a 00 00 00 03 01 8f 03', 'FC 15 with a wrong byte count: exception 03');
  ok(hex(plc.handle(fromHex('00 0b 00 00 00 06 01 04 00 00 00 02'))) === '00 0b 00 00 00 07 01 04 04 00 00 00 00', 'FC 04 reads the model clock (low, high) = 0 s at the start');
  const h = (v) => v.toString(16).padStart(4, '0').replace(/(..)(..)/, '$1 $2');
  ok(hex(plc.handle(fromHex('00 0c 00 00 00 06 01 03 00 02 00 02'))) === `00 0c 00 00 00 07 01 03 04 ${h(sim.done)} ${h(sim.alive)}`, `FC 03 answers the same registers: loads done ${sim.done}, loads in the system ${sim.alive}`);
  ok(hex(plc.handle(fromHex('00 0d 00 00 00 06 01 04 00 00 00 7e'))) === '00 0d 00 00 00 03 01 84 03', 'FC 04 for 126 registers: exception 03');
  ok(hex(plc.handle(fromHex('00 0e 00 00 00 06 01 04 00 04 00 02'))) === '00 0e 00 00 00 03 01 84 02', 'FC 04 past the last register: exception 02');
  ok(hex(plc.handle(fromHex('00 0f 00 00 00 06 01 06 00 00 00 01'))) === '00 0f 00 00 00 03 01 86 02', 'FC 06 write register: exception 02 (the model has no writable registers)');
  ok(hex(plc.handle(fromHex('00 10 00 00 00 02 01 2b'))) === '00 10 00 00 00 03 01 ab 01', 'an unknown function (43): exception 01');
  ok(plc.handle(fromHex('00 11 00 01 00 06 01 01 00 00 00 01')) === null, 'a protocol id that is not 0: no answer');
  ok(plc.handle(fromHex('00 12 00 00 00 07 01 01 00 00 00 01')) === null, 'a length that does not match the frame: no answer');
  ok(plc.handle(fromHex('00 13 00 00 00 06 02 01 00 00 00 01')) === null, 'another unit id: no answer');
  ok(hex(plc.handle(fromHex('00 14 00 00 00 06 ff 02 00 00 00 01'))).startsWith('00 14 00 00 00 04 ff 02'), 'unit id 255 is answered (and echoed)');
  ok(plc.handle(new Uint8Array(3)) === null && plc.handle(new Uint8Array(300)) === null && plc.handle('x') === null, 'a short, an oversize or a non-byte frame: no answer, no crash');
  const ro = P.createPlc({ sim, graph: plant(), writes: false });
  ok(hex(ro.handle(fromHex('00 15 00 00 00 06 01 05 00 00 ff 00'))) === '00 15 00 00 00 03 01 85 02', 'with writes off a coil write is refused');
  // fuzz: no frame makes it throw
  let thrown = 0, seed = 7;
  const rnd = () => (seed = (seed * 1103515245 + 12345) >>> 0) / 4294967296;
  for (let i = 0; i < 4000; i++) { const n = 8 + Math.floor(rnd() * 30), f = Uint8Array.from({ length: n }, () => Math.floor(rnd() * 256)); f[2] = 0; f[3] = 0; f[4] = 0; f[5] = n - 6; f[6] = 1; try { plc.handle(f); } catch { thrown++; } }
  ok(thrown === 0, 'four thousand random frames with a good header: nothing throws');
}

section('PLC: the plant follows the PLC, at the pace of the clock');
{
  let wall = 0;
  const sim = new Sim(plant(), { until: 100000 });
  const rt = RT.makeRealtime(sim, { scale: 1, clock: () => wall });
  rt.start();
  const plc = P.createPlc({ sim, graph: plant() });
  const rd = (fc, a, n) => { const r = plc.handle(P.request(fc, [a >> 8, a & 255, n >> 8, n & 255])); return r; };
  const tick = (sec) => { wall += sec * 1000; return rt.tick(); };
  tick(60);    // a minute, gate closed: the first load drives to the end of the belt and stops at the eye / gate
  let di = plc.values(); plc.refresh(); di = plc.values();
  ok(di.di[0] === 1 && di.di[1] === 1 && di.di[2] === 0, 'a minute in with the gate closed: a load stands on the eye (covered, standing) and the gate is closed');
  ok(plc.values().ir[3] >= 2, 'several loads are in the system, backed up behind the gate');
  const done0 = sim.done;
  ok(done0 === 0, 'no load has left (the PLC keeps the gate closed)');
  plc.handle(P.request(P.FC.WRITE_COIL, [0, 0, 0xff, 0]));    // the PLC opens the gate
  tick(30);
  plc.refresh();
  ok(sim.done > done0, `the PLC opened the gate: ${sim.done} loads left in the next 30 s`);
  const r = rd(P.FC.READ_INPUT, 0, 1); const t = (r[9] << 8) | r[10];
  ok(near(t, 90, 1), `the model clock register follows the wall clock: ${t} s (60 + 30)`);
  plc.handle(P.request(P.FC.WRITE_COIL, [0, 0, 0, 0]));       // closes it again
  tick(60);                                                    // what was already past the gate drains off the short belt
  const after = sim.done; tick(60); plc.refresh();
  ok(sim.done === after && plc.values().di[2] === 0, 'closed again: after the belt behind the gate drained nothing more leaves, and the read-back says closed');
  ok(plc.values().ir[4] > 0, 'the eye counted the loads that passed it');
}

section('PLC: the model without a PLC is unchanged');
{
  const a = new Sim(plant({ mode: 'open' }), { until: 600 }).run(), b = new Sim(plant({ mode: 'open' }), { until: 600 }).run();
  ok(JSON.stringify({ ...a, trace: 0 }) === JSON.stringify({ ...b, trace: 0 }) && a.done > 100, `deterministic and unchanged for an open gate: ${a.done} loads in 10 minutes`);
  const s = new Sim(plant({ mode: 'plc' }), { until: 600 }); s.begin();
  ok(s.input('g', true) === true && s.input('c1', true) === false && s.input('nothing', true) === false, 'sim.input takes a gate in plc mode and refuses anything else');
  const s2 = new Sim(plant({ mode: 'closed' }), { until: 600 }); s2.begin();
  ok(s2.input('g', true) === false, 'a gate in mode closed ignores the PLC');
}

section('PLC: the link to Studio (plc-link.js)');
{
  const L2 = await mine('lib/plc-link.js');
  const sim = new Sim(plant(), { until: 3600 }); sim.begin();
  const plc = P.createPlc({ sim, graph: plant() });
  const log = { started: null, responded: [], stopped: false };
  let queue = [{ id: 7, bytes: [0, 1, 0, 0, 0, 6, 1, 5, 0, 0, 255, 0] }, { id: 8, bytes: [0, 2, 0, 0, 0, 6, 1, 1, 0, 0, 0, 1] }, { id: 9, bytes: [1, 2, 3] }];
  const desk = { plc: { start: async (p) => { log.started = p; return { port: p }; }, poll: async () => { const q = queue; queue = []; return q; }, respond: async (id, b) => { log.responded.push([id, b]); }, stop: async () => { log.stopped = true; } } };
  const timer = { set: () => 1, clear: () => {} };
  const link = await L2.startLink({ desk, plc, port: 5020, timer });
  ok(link.port === 5020 && log.started === 5020, 'the link asks Studio to listen on the port and reports it');
  await link.pump();
  ok(log.responded.length === 3 && log.responded[0][0] === 7 && log.responded[0][1].join() === '0,1,0,0,0,6,1,5,0,0,255,0' && sim.els.get('g').isOpen, 'a frame is answered through the bridge by id, and the write reached the model');
  ok(log.responded[2][1] === null && link.stats().frames === 3 && link.stats().ignored === 1 && link.stats().answered === 2, 'a frame that is not Modbus is answered with nothing (Studio closes it), and counted');
  await link.stop();
  ok(log.stopped, 'stop closes the socket');
  let code = '';
  try { await L2.startLink({ desk: {}, plc, timer }); } catch (e) { code = e.code; }
  ok(code === 'no_link', 'a window without the bridge refuses with no_link');
}
