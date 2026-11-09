/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are tag names, protocol data and developer messages. */
/**
 * plc-mode.js — the PLC mode of the Material flow add-on (0.9 SU.858; owner 2026-11-06: "allow #858 to use selected REAL or SOFT in the panel"). DOM-free.
 *
 *   SOFT   the soft PLC of lib/twin (lib/plc: IEC 61131-3 ST and PLCopen XML) runs on the flow model, no hardware. One engine: the Digital twin add-on's `commission.js`
 *          (Rig for a fast, repeatable run; the same ioList() tags for a live run). This file writes no second soft PLC.
 *   REAL   the same tags go to a real PLC over Modbus TCP: each cycle the model's sensors are written to the PLC's registers and coils, and the PLC's output coils or
 *          registers are read back and applied to the model's gates. Studio opens the socket (plc-transport.js); the address map says where each tag lives.
 *
 * Tags are commission.ioList(graph): inputs (model → PLC) estop_ok, <eye>_covered, <eye>_standing, <gate>_is_open, loads_done, loads_inside; outputs (PLC → model) <gate>_open.
 *
 *   cleanSetup(raw) → setup       what is saved in the model file: mode, unit, cycle, soft program, address map. NEVER a host, a port or a secret: those are per computer.
 *   defaultMap(io) · checkMap(map, io) → [{ code, tag }]
 *   planExchange(map, io) → { writes: [...], reads: [...] }       grouped runs of neighbouring addresses
 *   new TagBridge({ sim, io }) · new RealLink({ transport, bridge, map, io, unit, ... }) · new SoftLive({ engines, sim, io, program, cycleMs })
 *   loadEngines() → { commission, plc }       the twin's soft PLC, loaded when first needed
 */
import { FC, build, frame, parseFrame, readAnswer, ModbusError, WORDS, toWords, fromWords, MAX } from './modbus.js';

export const MODES = ['soft', 'real'];
export const TABLES = ['coil', 'discrete', 'holding', 'input'];
export const TYPES = ['bool', 'uint16', 'int16', 'uint32', 'int32'];
export const SAFETY_KEYS = ['simulation_only', 'never_unattended', 'your_responsibility'];

const clampInt = (v, lo, hi, d) => { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };

/** What the model file keeps. Whitelisted field by field, so a host, port, password or token handed in is dropped. */
export function cleanSetup(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const map = Array.isArray(r.map) ? r.map.slice(0, 400).map((x) => {
    if (!x || typeof x !== 'object') return null;
    const row = {
      tag: String(x.tag || '').slice(0, 80), dir: x.dir === 'from-plc' ? 'from-plc' : 'to-plc', type: TYPES.includes(x.type) ? x.type : 'bool',
      table: TABLES.includes(x.table) ? x.table : 'coil', address: clampInt(x.address, 0, 65535, 0), scale: Number.isFinite(Number(x.scale)) && Number(x.scale) !== 0 ? Number(x.scale) : 1,
    };
    return row.tag ? row : null;
  }).filter(Boolean) : null;
  return {
    mode: r.mode === 'real' ? 'real' : 'soft',
    unit: clampInt(r.unit, 0, 247, 1),
    cycleMs: clampInt(r.cycleMs, 20, 1000, 100),
    wordSwap: r.wordSwap === true,
    program: typeof r.program === 'string' ? r.program.slice(0, 20000) : '',
    map,   // null = the default map for the layout
  };
}

// ---------------------------------------------------------------------------------------------------------------------- the address map
const isBoolTable = (t) => t === 'coil' || t === 'discrete';
const widthOf = (row) => (isBoolTable(row.table) ? 1 : WORDS[row.type] || 1);

/** One row per tag. Bits go to coils (model → PLC, from address 0; PLC → model, from address 100), counters to 16-bit holding registers (model → PLC). Editable. */
export function defaultMap(io) {
  const rows = [];
  let coil = 0, hold = 0, out = 100;
  for (const p of io.inputs) {
    if (p.type === 'BOOL') rows.push({ tag: p.name, dir: 'to-plc', type: 'bool', table: 'coil', address: coil++, scale: 1 });
    else rows.push({ tag: p.name, dir: 'to-plc', type: 'uint16', table: 'holding', address: hold++, scale: 1 });
  }
  for (const p of io.outputs) rows.push({ tag: p.name, dir: 'from-plc', type: 'bool', table: 'coil', address: out++, scale: 1 });
  return rows;
}

/** Problems with a map (empty = usable). Codes: unknown_tag, wrong_direction, wrong_table, bad_type, out_of_range, overlap, bad_scale, duplicate_tag. */
export function checkMap(map, io) {
  const out = [], tags = new Map([...io.inputs.map((p) => [p.name, 'to-plc']), ...io.outputs.map((p) => [p.name, 'from-plc'])]);
  const seen = new Set(), used = new Map();
  for (const r of map) {
    if (!tags.has(r.tag)) { out.push({ code: 'unknown_tag', tag: r.tag }); continue; }
    if (seen.has(r.tag)) out.push({ code: 'duplicate_tag', tag: r.tag });
    seen.add(r.tag);
    if (tags.get(r.tag) !== r.dir) out.push({ code: 'wrong_direction', tag: r.tag });
    if (r.dir === 'to-plc' && (r.table === 'discrete' || r.table === 'input')) out.push({ code: 'wrong_table', tag: r.tag });   // a client cannot write a read-only table
    if (isBoolTable(r.table) && r.type !== 'bool') out.push({ code: 'bad_type', tag: r.tag });
    if (!(Number.isFinite(r.scale) && r.scale !== 0)) out.push({ code: 'bad_scale', tag: r.tag });
    const w = widthOf(r);
    if (r.address < 0 || r.address + w > 0x10000) { out.push({ code: 'out_of_range', tag: r.tag }); continue; }
    for (let k = 0; k < w; k++) {
      // the coil table is one table for reads and writes; the registers likewise (holding is shared, input is read-only)
      const key = (r.table === 'discrete' ? 'discrete' : r.table === 'input' ? 'input' : r.table) + ':' + (r.address + k);
      if (used.has(key)) { out.push({ code: 'overlap', tag: r.tag, other: used.get(key) }); break; }
      used.set(key, r.tag);
    }
  }
  return out;
}

/** Group neighbouring addresses of one table and direction into runs a single request can carry. Writes: to-plc rows only. Reads: from-plc rows only. */
export function planExchange(map, io) {
  const names = new Set([...io.inputs.map((p) => p.name), ...io.outputs.map((p) => p.name)]);
  const runs = (dir) => {
    const out = [];
    for (const table of TABLES) {
      const rows = map.filter((r) => r.dir === dir && r.table === table && names.has(r.tag)).sort((a, b) => a.address - b.address);
      let cur = null;
      for (const r of rows) {
        const w = widthOf(r), cap = isBoolTable(table) ? (dir === 'to-plc' ? MAX.writeBits : MAX.readBits) : (dir === 'to-plc' ? MAX.writeWords : MAX.readWords);
        if (cur && r.address === cur.address + cur.count && cur.count + w <= cap) { cur.rows.push(r); cur.count += w; }
        else { cur = { table, address: r.address, count: w, rows: [r] }; out.push(cur); }
      }
    }
    return out;
  };
  return { writes: runs('to-plc'), reads: runs('from-plc') };
}

// ---------------------------------------------------------------------------------------------------------------------- model <-> tags
export class TagBridge {
  constructor({ sim, io }) { this.sim = sim; this.io = io; this.estop = false; this.held = new Set(); }
  read(name) {
    const p = this.io.inputs.find((x) => x.name === name);
    if (!p) return 0;
    const el = p.element ? this.sim.els.get(p.element) : null;
    switch (p.key) {
      case 'estop': return this.estop ? 0 : 1;
      case 'covered': return el && el.covered() ? 1 : 0;
      case 'standing': return el && el.standing() ? 1 : 0;
      case 'isopen': return el && el.isOpen ? 1 : 0;
      case 'loads_done': return this.sim.done & 0x7fff;
      case 'loads_inside': return this.sim.alive & 0x7fff;
      default: return 0;
    }
  }
  apply(name, value) {
    const o = this.io.outputs.find((x) => x.name === name);
    if (o && !this.held.has(o.element)) this.sim.input(o.element, !!value);
  }
  /** Every output to its safe value: gates closed. */
  failSafe() { for (const o of this.io.outputs) this.apply(o.name, false); }
}

// ---------------------------------------------------------------------------------------------------------------------- REAL
export class RealLink {
  constructor({ transport, bridge, map, io, unit = 1, wordSwap = false, host = '', port = 502, cycleMs = 100, maxErrors = 5 }) {
    this.transport = transport; this.bridge = bridge; this.map = map; this.io = io; this.unit = unit; this.wordSwap = wordSwap; this.host = host; this.port = port; this.cycleMs = cycleMs; this.maxErrors = maxErrors;
    this.plan = planExchange(map, io); this.tx = 0; this.state = 'idle'; this.lastError = ''; this.values = {};
    this.stats = { cycles: 0, requests: 0, writes: 0, reads: 0, exceptions: 0, errors: 0 };
    this.consecutive = 0; this.busy = false; this.timer = null;
  }
  problems() { return checkMap(this.map, this.io); }
  async connect() {
    const p = this.problems();
    if (p.length) throw Object.assign(new Error('address map: ' + p[0].code + ' ' + p[0].tag), { code: 'map' });
    if (!this.transport.available) throw Object.assign(new Error(this.transport.reason || 'no transport'), { code: 'no_link' });
    try { await this.transport.close(); } catch { /* nothing open */ }   // a link that ended on exception answers keeps Studio's socket: close it, or the new connect is refused ("already connected")
    await this.transport.connect({ host: this.host, port: this.port });
    this.state = 'connected'; this.consecutive = 0; this.lastError = '';
  }
  async ask(pdu) {
    const f = frame(this.tx = (this.tx + 1) & 0xffff, this.unit, pdu);
    this.stats.requests++;
    const ans = parseFrame(await this.transport.exchange(f));
    if (ans.tx !== (f[0] << 8 | f[1])) throw new ModbusError('answer', 'transaction id');
    return readAnswer(pdu, ans.pdu);
  }
  rawOf(row) {
    const v = this.bridge.read(row.tag);
    return row.type === 'bool' ? (v ? 1 : 0) : v * row.scale;
  }
  /** One exchange: write the model's inputs to the PLC, read the PLC's outputs, apply them. Never throws: a failure is counted, and after maxErrors in a row the link stops and the gates close. */
  async cycle() {
    if (this.state !== 'connected' || this.busy) return false;
    this.busy = true;
    try {
      for (const run of this.plan.writes) {
        if (run.table === 'coil') {
          const bits = run.rows.map((r) => !!this.rawOf(r));
          await this.ask(bits.length === 1 ? build.writeCoil(run.address, bits[0]) : build.writeCoils(run.address, bits));
        } else {
          const words = run.rows.flatMap((r) => toWords(r.type, this.rawOf(r), this.wordSwap));
          await this.ask(words.length === 1 ? build.writeRegister(run.address, words[0]) : build.writeRegisters(run.address, words));
        }
        run.rows.forEach((r) => { this.values[r.tag] = this.bridge.read(r.tag); });
        this.stats.writes++;
      }
      for (const run of this.plan.reads) {
        const pdu = { coil: build.readCoils, discrete: build.readDiscrete, holding: build.readHolding, input: build.readInput }[run.table](run.address, run.count);
        const a = await this.ask(pdu);
        let at = 0;
        for (const r of run.rows) {
          let value;
          if (isBoolTable(run.table)) value = a.bits[at++] ? 1 : 0;
          else { const w = WORDS[r.type]; value = fromWords(r.type, a.words.slice(at, at + w), this.wordSwap) / r.scale; at += w; }
          this.values[r.tag] = value;
          this.bridge.apply(r.tag, value);
        }
        this.stats.reads++;
      }
      this.stats.cycles++; this.consecutive = 0;
      return true;
    } catch (e) {
      this.stats.errors++; this.consecutive++; this.lastError = String((e && e.message) || e);
      if (e instanceof ModbusError && e.kind === 'exception') this.stats.exceptions++;
      // a transport error ends the connection (Studio drops it); a PLC exception leaves it open
      if (!(e instanceof ModbusError) || this.consecutive >= this.maxErrors) { this.state = 'lost'; this.bridge.failSafe(); this.stop(false); }
      return false;
    } finally { this.busy = false; }
  }
  start(timer = { set: (f, ms) => setInterval(f, ms), clear: (h) => clearInterval(h) }) {
    this.timerApi = timer;
    this.timer = timer.set(() => { this.cycle(); }, Math.max(20, this.cycleMs));
  }
  stop(close = true) {
    if (this.timer !== null && this.timerApi) { this.timerApi.clear(this.timer); this.timer = null; }
    if (close) { this.bridge.failSafe(); this.state = this.state === 'lost' ? 'lost' : 'idle'; return this.transport.close(); }
    return Promise.resolve();
  }
}

// ---------------------------------------------------------------------------------------------------------------------- SOFT
let enginesP = null;
/** The twin's soft PLC engine (commission.js over lib/plc), loaded on first use so the flow add-on works without it. */
export function loadEngines() {
  if (!enginesP) enginesP = Promise.all([import('../../../twin/commission.js'), import('../../../plc/index.js')]).then(([commission, plc]) => ({ commission, plc }));
  return enginesP;
}

/** The soft PLC driving a LIVE model (paced by the clock): one scan per cycle of model time, sensors in, commands out. For a repeatable run use commission.Rig. */
export class SoftLive {
  constructor({ engines, sim, io, program, cycleMs = 100 }) {
    const { commission, plc } = engines;
    this.bridge = new TagBridge({ sim, io }); this.sim = sim; this.io = io; this.problems = [];
    const { project, problems } = commission.loadProgram(program);
    this.problems = problems.filter((p) => p.severity === 'error');
    if (this.problems.length) return;
    this.plc = new plc.SoftPLC(project, { cycleMs });
    if (this.plc.problems.some((p) => p.severity === 'error')) { this.problems = this.plc.problems.filter((p) => p.severity === 'error'); this.plc = null; return; }
    const sense = {}, command = {};
    for (const p of io.inputs) sense[p.addr] = p.name;
    for (const p of io.outputs) command[p.addr] = p.name;
    const self = this;
    this.plc.bind({
      sense() { const o = {}; for (const p of io.inputs) o[p.name] = p.type === 'BOOL' ? !!self.bridge.read(p.name) : self.bridge.read(p.name); return o; },
      command(name, v) { self.bridge.apply(name, v); },
      step() { /* the model is advanced by the clock, not by the PLC */ },
    }, { sense, command });
    this.cycleMs = cycleMs;
  }
  get ok() { return !!this.plc; }
  /** Run the scans that are due for the model time now (at most 40 at once, so a stalled tab does not freeze on return). */
  tick() {
    if (!this.plc) return 0;
    const due = Math.min(40, Math.floor((this.sim.now * 1000 - this.plc.time) / this.cycleMs));
    for (let i = 0; i < due; i++) this.plc.cycle();
    return Math.max(0, due);
  }
}

/** A repeatable, faster-than-real-time run of the soft PLC on the layout. Same program + seed = same result to the byte. */
export function runSoft({ engines, Sim, graph, program, seconds = 600, seed = 1, cycleMs = 100 }) {
  const rig = new engines.commission.Rig({ Sim, graph, program, seed, until: Math.max(seconds + 10, 60), cycleMs });
  if (rig.problems.length) return { ok: false, problems: rig.problems, summary: null };
  rig.run(seconds);
  return { ok: true, problems: [], summary: rig.summary(), warnings: rig.warnings || [] };
}
