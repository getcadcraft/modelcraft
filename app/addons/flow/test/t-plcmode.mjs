// SPDX-License-Identifier: Apache-2.0
// 0.9 SU.858: PLC mode SOFT / REAL — the saved setup, the address map, the transports, the REAL path against a Modbus TCP server written in JS (node:net, loopback),
// the SOFT path with the twin's soft PLC, and the flow simulation's determinism.
import net from 'node:net';
import { startServer } from './modbus-server.mjs';
const { ok, section, mine } = globalThis.__flowTest;
const { Sim } = await mine('../../flow/sim.js');
const PM = await mine('lib/plc-mode.js');
const TR = await mine('lib/plc-transport.js');
const MB = await mine('lib/modbus.js');
const eng = await PM.loadEngines();
const { ioList, starterProgram, Rig } = eng.commission;

const L = (from, out, to, inn = 'in') => ({ from, out, to, in: inn });
const plant = () => ({
  elements: [
    { id: 'src', type: 'source', types: [{ type: 'A', weight: 1, length: 0.4 }], mode: 'saturate' },
    { id: 'c1', type: 'conveyor', length: 6, speed: 0.5, gap: 0.1 },
    { id: 'g', type: 'gate', mode: 'plc', name: 'Stop 1' },
    { id: 'c2', type: 'conveyor', length: 6, speed: 0.5, gap: 0.1 },
    { id: 'eye', type: 'sensor', on: 'c2', at: 0.3, name: 'Eye 1' },
    { id: 'out', type: 'sink' },
  ],
  links: [L('src', 'out', 'c1'), L('c1', 'out', 'g'), L('g', 'out', 'c2'), L('c2', 'out', 'out')],
});
const graph = plant(), io = ioList(graph);

section('PLC mode: what the model file keeps');
{
  const dirty = { mode: 'real', unit: 7, cycleMs: 5, host: '192.168.1.20', port: 502, password: 'hunter2', token: 'x', secret: 's', program: 'PROGRAM X', map: [{ tag: 'g_open', dir: 'from-plc', type: 'bool', table: 'coil', address: 100, scale: 1, host: '10.0.0.1', pass: 'p' }, { tag: '' }, null] };
  const s = PM.cleanSetup(dirty), json = JSON.stringify(s);
  ok(s.mode === 'real' && s.unit === 7 && s.cycleMs === 20 && s.program === 'PROGRAM X' && s.map.length === 1, 'mode, unit, program and map are kept; the cycle is held to 20 ms or more; empty rows dropped');
  ok(!/192\.168|hunter2|"host"|"port"|password|token|secret|"pass"|10\.0\.0\.1/.test(json), 'no host, port, password or token ever reaches the saved setup');
  ok(PM.cleanSetup(undefined).mode === 'soft' && PM.cleanSetup({ mode: 'weird' }).mode === 'soft' && PM.cleanSetup(null).map === null, 'the default is Soft, with the default map');
  ok(PM.cleanSetup({ unit: 999 }).unit === 247 && PM.cleanSetup({ map: [{ tag: 'a', address: 1e9, table: 'zzz', type: 'zzz', scale: 0 }] }).map[0].address === 65535, 'unit and addresses are clamped; unknown tables and types fall back');
}

section('PLC mode: the address map');
const map = PM.defaultMap(io);
{
  ok(io.inputs.length === 6 && io.outputs.length === 1, `tags come from the twin's ioList: ${io.inputs.length} inputs (model to PLC), ${io.outputs.length} output (PLC to model)`);
  ok(PM.checkMap(map, io).length === 0, 'the default map is clean');
  ok(map.filter((r) => r.dir === 'to-plc' && r.table === 'coil').length === 4 && map.filter((r) => r.table === 'holding').length === 2 && map.find((r) => r.tag === 'g_open').address === 100, 'bits go to coils 0-3, the two counters to holding registers 0-1, the gate command is coil 100');
  const codes = (m) => PM.checkMap(m, io).map((p) => p.code).join();
  const row = (o) => ({ tag: 'g_open', dir: 'from-plc', type: 'bool', table: 'coil', address: 100, scale: 1, ...o });
  ok(codes([row({ tag: 'nope' })]) === 'unknown_tag', 'a tag the layout does not have');
  ok(codes([row({ dir: 'to-plc' })]).includes('wrong_direction'), 'a PLC output marked as written to the PLC');
  ok(codes([{ ...map[0], table: 'discrete' }]).includes('wrong_table'), 'the client cannot write a discrete input or an input register');
  ok(codes([row({ table: 'coil', type: 'uint16' })]).includes('bad_type'), 'a coil holds a bit');
  ok(codes([row({ address: 65536 })]).includes('out_of_range') && codes([{ ...map[4], type: 'uint32', address: 65535 }]).includes('out_of_range'), 'past address 65535, also for a 32-bit value');
  ok(codes([row({ scale: 0 })]).includes('bad_scale'), 'a scale of zero');
  ok(codes([map[0], { ...map[1], address: map[0].address }]).includes('overlap'), 'two tags on one address');
  ok(codes([row({ address: 0 }), map[0]]).includes('overlap'), 'a command and a sensor on the same coil');
  const plan = PM.planExchange(map, io);
  ok(plan.writes.length === 2 && plan.writes[0].table === 'coil' && plan.writes[0].count === 4 && plan.writes[1].table === 'holding' && plan.reads.length === 1 && plan.reads[0].address === 100, 'neighbouring addresses become one request: one coil write, one register write, one coil read');
  const split = PM.planExchange(map.map((r, i) => (i === 2 ? { ...r, address: 20 } : r)), io);
  ok(split.writes.filter((w) => w.table === 'coil').length === 3, 'a gap in the addresses splits the write');
}

section('PLC mode: transports');
{
  const b = TR.browserTransport();
  ok(!b.available && /raw TCP/.test(b.reason) && /Soft mode works/.test(b.reason), 'a browser tab: Real is not available, and the reason is plain');
  ok(TR.pickTransport({}).available === false && TR.pickTransport({ cadcraftDesktop: { plc: { start() {}, poll() {}, respond() {}, stop() {} } } }).kind === 'studio-old', 'a Studio without the client commands says so');
  const calls = [];
  const desk = { plc: { connect: async (h, p) => calls.push(['connect', h, p]), exchange: async (f) => { calls.push(['exchange', f.length]); return [f[0], f[1], 0, 0, 0, 4, f[6], 1, 1, 0]; }, disconnect: async () => calls.push(['disconnect']) } };
  const st = TR.studioTransport(desk);
  let early = false; try { await st.exchange(new Uint8Array(12)); } catch (e) { early = e.code === 'closed'; }
  await st.connect({ host: '192.168.1.20', port: 502.4 });
  const ans = await st.exchange(MB.frame(5, 1, MB.build.readCoils(0, 1)));
  await st.close();
  ok(early && st.available && calls[0].join() === 'connect,192.168.1.20,502' && ans instanceof Uint8Array && ans.length === 10 && calls[2][0] === 'disconnect', 'the Studio transport: no exchange before connect, whole port, bytes in and out, disconnect');
  const lost = TR.studioTransport({ plc: { connect: async () => {}, exchange: async () => { throw new Error('timed out'); }, disconnect: async () => {} } });
  await lost.connect({ host: '10.0.0.2', port: 502 });
  let c1 = ''; try { await lost.exchange(new Uint8Array(12)); } catch (e) { c1 = e.code; }
  let c2 = ''; try { await lost.exchange(new Uint8Array(12)); } catch (e) { c2 = e.code; }
  ok(c1 === 'lost' && c2 === 'closed', 'an error from Studio ends the connection (Studio drops it too)');
}

/** A real TCP transport for the tests only (the shipped one is Studio's). */
function tcpTransport() {
  let sock = null, buf = Buffer.alloc(0), waiter = null;
  const take = () => {
    if (buf.length >= 7 && buf.length >= 6 + buf.readUInt16BE(4) && waiter) { const n = 6 + buf.readUInt16BE(4), f = Uint8Array.from(buf.subarray(0, n)); buf = buf.subarray(n); const w = waiter; waiter = null; clearTimeout(w.t); w.res(f); }
  };
  return {
    kind: 'test-tcp', available: true,
    connect: ({ host, port }) => new Promise((res, rej) => { sock = net.connect(port, host, res); sock.on('error', rej); sock.on('data', (d) => { buf = Buffer.concat([buf, d]); take(); }); sock.setNoDelay(true); }),
    exchange: (f) => new Promise((res, rej) => {
      const t = setTimeout(() => { waiter = null; try { sock.destroy(); } catch { /* */ } rej(Object.assign(new Error('timed out'), { code: 'lost' })); }, 400);
      waiter = { res, t }; sock.write(Buffer.from(f)); take();
    }),
    close: async () => { try { sock.destroy(); } catch { /* */ } },
  };
}
const rowOf = (tag) => map.find((r) => r.tag === tag);

section('PLC mode REAL: a Modbus TCP server written in JS stands in for the PLC (loopback)');
{
  // the "PLC program": the gate is open while the emergency stop is healthy and the eye after the gate is not stopped on
  const scan = (t) => { t.coil[rowOf('g_open').address] = t.coil[rowOf('estop_ok').address] && !t.coil[rowOf('eye_standing').address] ? 1 : 0; };
  const srv = await startServer({ scan });
  const sim = new Sim(graph, { until: 3600, seed: 1 }); sim.begin();
  const bridge = new PM.TagBridge({ sim, io });
  const link = new PM.RealLink({ transport: tcpTransport(), bridge, map, io, unit: 1, host: '127.0.0.1', port: srv.port, cycleMs: 100 });
  await link.connect();
  ok(link.state === 'connected', 'connected to the server over a real TCP socket');
  let opened = false;
  for (let t = 0; t <= 300; t += 0.1) {
    sim.advance(t); await link.cycle();
    if (sim.els.get('g').isOpen) opened = true;
  }
  ok(opened && sim.done > 5, `the PLC's output coil opened the model's gate and loads flowed: ${sim.done} loads done in 300 s`);
  ok(srv.tables.coil[rowOf('estop_ok').address] === 1 && srv.tables.holding[rowOf('loads_done').address] === (sim.done & 0x7fff), 'the model\'s sensors reached the PLC: estop_ok coil, loads_done holding register');
  ok(link.stats.errors === 0 && link.stats.cycles === 3001 && link.stats.writes === 3001 * 2 && link.stats.reads === 3001, `${link.stats.cycles} exchanges, ${link.stats.writes} writes, ${link.stats.reads} reads, no errors`);
  const fcs = new Set(srv.log.map((p) => p[0]));
  ok([...fcs].every((f) => [1, 15, 16].includes(f)), `only the function codes the plan needs went out: ${[...fcs].join(', ')}`);
  // the PLC drops the command: the gate follows
  srv.tables.coil[rowOf('estop_ok').address] = 0; // the server's scan reads the coil the model writes, so force through the model: estop
  bridge.estop = true; for (let i = 0; i < 3; i++) { sim.advance(300.1 + i * 0.1); await link.cycle(); }
  ok(sim.els.get('g').isOpen === false && link.values.g_open === 0, 'an emergency stop on the model side: the PLC sees estop_ok = 0 and its command closes the gate');
  await link.stop();
  ok(sim.els.get('g').isOpen === false, 'stopping the link closes the gates (fail-safe)');
  await srv.close();
}

section('PLC mode REAL: a PLC that stops answering, and an exception');
{
  const srv = await startServer({ silentAfter: 12 });
  const sim = new Sim(graph, { until: 3600, seed: 1 }); sim.begin();
  const bridge = new PM.TagBridge({ sim, io });
  sim.input('g', true);
  const link = new PM.RealLink({ transport: tcpTransport(), bridge, map, io, host: '127.0.0.1', port: srv.port, maxErrors: 2 });
  await link.connect();
  for (let i = 0; i < 10; i++) await link.cycle();
  ok(link.state === 'lost' && link.stats.errors >= 1 && /timed out/.test(link.lastError), `a silent PLC: the link is lost (${link.lastError}) after ${link.stats.cycles} good exchanges`);
  ok(sim.els.get('g').isOpen === false, 'and the gates are closed, not left open');
  await srv.close();
  // an exception answer keeps the connection, counts, and ends the link only after maxErrors in a row
  const mock = TR.mockTransport((f) => { const p = MB.parseFrame(f); const out = Uint8Array.of(p.pdu[0] | 0x80, 2); const r = new Uint8Array(9); r.set(f.subarray(0, 4)); r[5] = 3; r[6] = p.unit; r.set(out, 7); return r; });
  const l2 = new PM.RealLink({ transport: mock, bridge, map, io, maxErrors: 3 });
  await l2.connect(); await l2.cycle();
  ok(l2.state === 'connected' && l2.stats.exceptions === 1 && /exception 2/.test(l2.lastError), 'an exception answer (illegal data address) is counted and the link stays up');
  await l2.cycle(); await l2.cycle();
  ok(l2.state === 'lost', 'three in a row end the link');
  let refused = ''; try { await new PM.RealLink({ transport: TR.browserTransport(), bridge, map, io }).connect(); } catch (e) { refused = e.code; }
  let badmap = ''; try { await new PM.RealLink({ transport: mock, bridge, map: [{ ...map[0], address: 70000 }], io }).connect(); } catch (e) { badmap = e.code; }
  ok(refused === 'no_link' && badmap === 'map', 'a browser transport and a bad map both refuse to connect');
}

section('PLC mode SOFT: the twin\'s soft PLC on the model');
{
  const program = starterProgram(graph);
  const a = PM.runSoft({ engines: eng, Sim, graph, program, seconds: 600, seed: 3 });
  const b = PM.runSoft({ engines: eng, Sim, graph, program, seconds: 600, seed: 3 });
  ok(a.ok && a.summary.done > 10, `a 600 s soft run through the starter program: ${a.summary.done} loads done, ${a.summary.scans} scans`);
  ok(JSON.stringify(a.summary) === JSON.stringify(b.summary), 'the same program and seed give the same result to the byte');
  ok(PM.runSoft({ engines: eng, Sim, graph, program: 'PROGRAM X VAR a : BOOL; END_VAR a := ;', seconds: 10 }).ok === false, 'a program with a syntax error is reported, not run');
  const sim = new Sim(graph, { until: 3600, seed: 3 }); sim.begin();
  const live = new PM.SoftLive({ engines: eng, sim, io, program, cycleMs: 100 });
  ok(live.ok, 'the soft PLC binds to a live model');
  let scans = 0;
  for (let t = 0; t <= 300; t += 0.25) { sim.advance(t); scans += live.tick(); }
  ok(sim.done > 5 && scans >= 2900, `driven by the clock like Live: ${sim.done} loads done, ${scans} scans in 300 s of model time`);
  ok(!new PM.SoftLive({ engines: eng, sim, io, program: 'PROGRAM X VAR a : BOOL; END_VAR a := ;' }).ok, 'a live soft PLC with a broken program does not start');
  // the REAL path and the SOFT path run the same logic on the same tags: both open the gate and move loads
  const r = new Rig({ Sim, graph, program, seed: 3, until: 700, cycleMs: 100 }); r.run(300);
  ok(Math.abs(r.sim.done - sim.done) <= Math.max(2, Math.round(r.sim.done * 0.1)), `lock-step soft run and live soft run agree within 10 percent (${r.sim.done} / ${sim.done})`);
}

section('PLC mode: the flow simulation stays deterministic');
{
  const g2 = { ...plant(), elements: plant().elements.map((e) => (e.id === 'g' ? { ...e, mode: 'open' } : e)) };
  const runOne = (read) => {
    const s = new Sim(g2, { until: 3600, seed: 11 }); s.begin();
    const io2 = ioList(g2), br = new PM.TagBridge({ sim: s, io: io2 });
    for (let t = 0; t <= 1200; t += 0.5) { s.advance(t); if (read) for (const p of io2.inputs) br.read(p.name); }
    return JSON.stringify([s.done, s.alive, s.now]);
  };
  ok(runOne(false) === runOne(true), 'reading every tag every step does not change the run (a PLC mode that is off or only reads leaves results byte for byte)');
}
