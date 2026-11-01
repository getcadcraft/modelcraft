/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are protocol data and developer messages. */
/**
 * plc.js — PLC emulation for the Material flow add-on (0.8 SU.858 step 5; owner 2026-10-29: "go with Studio step 5, as an add-on"; Modbus TCP first,
 * docs/0.8-sessions/flow-08.md O2). DOM-free. A real PLC (or a soft one) talks Modbus TCP to the model as if it were the plant: it reads photo-eyes
 * and counters, and opens and closes stop gates. This file is the plant's side of that conversation, with no network in it: the bytes of a Modbus
 * TCP frame come in, the bytes of the answer go out. The socket is Studio's (desktop-shell plc.rs listens on this computer and hands frames over);
 * the model's clock follows the wall clock (realtime.js makeRealtime), so a PLC scan of 10 ms sees a plant that moves at the real speed.
 *
 *   ioMap(graph) → { di: [point], coils: [point], ir: [point] }     the address list (CSV for the PLC programmer: ioCsv(map))
 *   createPlc({ sim, graph, unit = 1, writes = true }) → { map, handle(frame) → Uint8Array | null, refresh(), values() }
 *
 * What is mapped (addresses are 0-based, the way Modbus puts them on the wire; PLC tools usually show them +1 or +10001/+30001):
 *   discrete inputs (FC 02, also readable as coils with FC 01)   per photo-eye: blocked (a load covers it), standing (a load is stopped on it);
 *                                                                per gate in mode "plc": is open
 *   coils (FC 01/05/15)                                          per gate in mode "plc": open command (1 = open); a gate in any other mode is not a coil
 *   input registers (FC 04; FC 03 answers the same registers)    0 model seconds (low 16 bits), 1 model seconds (high), 2 loads done, 3 loads in the system,
 *                                                                then one per photo-eye: loads that passed it (low 16 bits)
 * Nothing physical: loads move kinematically, the PLC cannot make a belt run faster. Writes are accepted only to the gate coils; every other address is an
 * exception, never a crash. A frame that is not Modbus (protocol id, length) gets no answer, as on a real device. Unit id: ours, or 255; others get no answer.
 */
const MAX_PDU = 253;
export const FC = { READ_COILS: 1, READ_DISCRETE: 2, READ_HOLDING: 3, READ_INPUT: 4, WRITE_COIL: 5, WRITE_REGISTER: 6, WRITE_COILS: 15, WRITE_REGISTERS: 16 };
export const EXC = { ILLEGAL_FUNCTION: 1, ILLEGAL_ADDRESS: 2, ILLEGAL_VALUE: 3, DEVICE_FAILURE: 4 };

const name = (e) => String(e.name || e.id);

export function ioMap(graph) {
  const di = [], coils = [], ir = [
    { address: 0, key: 'time.lo', label: 'Model time, seconds (low 16 bits)' }, { address: 1, key: 'time.hi', label: 'Model time, seconds (high 16 bits)' },
    { address: 2, key: 'done', label: 'Loads that have left the system (low 16 bits)' }, { address: 3, key: 'wip', label: 'Loads in the system' },
  ];
  for (const e of graph.elements || []) {
    if (e.type === 'sensor') {
      di.push({ address: di.length, element: e.id, key: 'covered', label: `${name(e)}: a load is on the eye` });
      di.push({ address: di.length, element: e.id, key: 'standing', label: `${name(e)}: a load is stopped on the eye` });
      ir.push({ address: ir.length, element: e.id, key: 'count', label: `${name(e)}: loads that passed (low 16 bits)` });
    } else if (e.type === 'gate' && e.mode === 'plc') {
      coils.push({ address: coils.length, element: e.id, key: 'open', label: `${name(e)}: open command (1 = open)` });
      di.push({ address: di.length, element: e.id, key: 'isopen', label: `${name(e)}: is open` });
    }
  }
  return { di, coils, ir };
}

const q = (s) => (/[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
/** The address list for the PLC programmer (CSV, a header line, one row per point). */
export function ioCsv(map) {
  const rows = [['table', 'function', 'address', 'element', 'meaning']];
  for (const p of map.di) rows.push(['discrete input', 'FC 02 (and FC 01)', p.address, p.element, p.label]);
  for (const p of map.coils) rows.push(['coil', 'FC 01, 05, 15', p.address, p.element, p.label]);
  for (const p of map.ir) rows.push(['input register', 'FC 04 (and FC 03)', p.address, p.element || '', p.label]);
  return rows.map((r) => r.map((c) => q(String(c))).join(',')).join('\r\n') + '\r\n';
}

export function createPlc({ sim, graph, unit = 1, writes = true }) {
  const map = ioMap(graph);
  const dIn = new Uint8Array(map.di.length), cOut = new Uint8Array(map.coils.length), regs = new Uint16Array(map.ir.length);
  const el = (id) => sim.els.get(id);

  /** Read the model into the images (before every read). */
  function refresh() {
    map.di.forEach((p, i) => {
      const e = el(p.element);
      dIn[i] = !e ? 0 : p.key === 'covered' ? (e.covered() ? 1 : 0) : p.key === 'standing' ? (e.standing() ? 1 : 0) : (e.isOpen ? 1 : 0);
    });
    const t = Math.floor(sim.now);
    map.ir.forEach((p, i) => {
      let v = 0;
      if (p.key === 'time.lo') v = t & 0xffff; else if (p.key === 'time.hi') v = (t >>> 16) & 0xffff;
      else if (p.key === 'done') v = sim.done & 0xffff; else if (p.key === 'wip') v = Math.min(0xffff, sim.alive);
      else if (p.key === 'count') v = (el(p.element)?.count || 0) & 0xffff;
      regs[i] = v;
    });
    map.coils.forEach((p, i) => { const e = el(p.element); if (e) cOut[i] = e.isOpen ? 1 : 0; });
  }
  const setCoil = (i, v) => { cOut[i] = v ? 1 : 0; sim.input(map.coils[i].element, !!v); };

  const be16 = (b, o) => (b[o] << 8) | b[o + 1];
  const exc = (fc, code) => Uint8Array.of(fc | 0x80, code);
  const packBits = (arr, from, n) => { const out = new Uint8Array(Math.ceil(n / 8)); for (let k = 0; k < n; k++) if (arr[from + k]) out[k >> 3] |= 1 << (k & 7); return out; };

  /** One request PDU (function code + data) → the answer PDU. */
  function pdu(req) {
    const fc = req[0];
    switch (fc) {
      case FC.READ_COILS: case FC.READ_DISCRETE: {
        if (req.length !== 5) return exc(fc, EXC.ILLEGAL_VALUE);
        const a = be16(req, 1), n = be16(req, 3);
        if (n < 1 || n > 2000) return exc(fc, EXC.ILLEGAL_VALUE);
        // FC 01 reads the coils; FC 02 the discrete inputs. A PLC tool that reads FC 01 over the input addresses gets them too: coils first, then none.
        const arr = fc === FC.READ_COILS ? cOut : dIn;
        if (a + n > arr.length) return exc(fc, EXC.ILLEGAL_ADDRESS);
        refresh();
        const bits = packBits(arr, a, n);
        return Uint8Array.of(fc, bits.length, ...bits);
      }
      case FC.READ_HOLDING: case FC.READ_INPUT: {
        if (req.length !== 5) return exc(fc, EXC.ILLEGAL_VALUE);
        const a = be16(req, 1), n = be16(req, 3);
        if (n < 1 || n > 125) return exc(fc, EXC.ILLEGAL_VALUE);
        if (a + n > regs.length) return exc(fc, EXC.ILLEGAL_ADDRESS);
        refresh();
        const out = new Uint8Array(2 + 2 * n); out[0] = fc; out[1] = 2 * n;
        for (let k = 0; k < n; k++) { out[2 + 2 * k] = regs[a + k] >> 8; out[3 + 2 * k] = regs[a + k] & 255; }
        return out;
      }
      case FC.WRITE_COIL: {
        if (req.length !== 5) return exc(fc, EXC.ILLEGAL_VALUE);
        const a = be16(req, 1), v = be16(req, 3);
        if (v !== 0x0000 && v !== 0xff00) return exc(fc, EXC.ILLEGAL_VALUE);
        if (!writes || a >= cOut.length) return exc(fc, EXC.ILLEGAL_ADDRESS);
        setCoil(a, v === 0xff00);
        return req.slice(0, 5);
      }
      case FC.WRITE_COILS: {
        if (req.length < 6) return exc(fc, EXC.ILLEGAL_VALUE);
        const a = be16(req, 1), n = be16(req, 3), bc = req[5];
        if (n < 1 || n > 1968 || bc !== Math.ceil(n / 8) || req.length !== 6 + bc) return exc(fc, EXC.ILLEGAL_VALUE);
        if (!writes || a + n > cOut.length) return exc(fc, EXC.ILLEGAL_ADDRESS);
        for (let k = 0; k < n; k++) setCoil(a + k, (req[6 + (k >> 3)] >> (k & 7)) & 1);
        return req.slice(0, 5);
      }
      case FC.WRITE_REGISTER: case FC.WRITE_REGISTERS:
        return req.length >= 5 && be16(req, 1) < 65536 ? exc(fc, EXC.ILLEGAL_ADDRESS) : exc(fc, EXC.ILLEGAL_VALUE);   // the model has no writable registers
      default:
        return exc(fc, EXC.ILLEGAL_FUNCTION);
    }
  }

  /** A whole Modbus TCP frame (MBAP header + PDU) → the answer frame, or null when there is none to give. */
  function handle(frame) {
    if (!(frame instanceof Uint8Array) || frame.length < 8 || frame.length > 7 + MAX_PDU) return null;
    if (be16(frame, 2) !== 0) return null;                          // protocol id
    if (be16(frame, 4) !== frame.length - 6) return null;           // length = unit id + PDU
    const u = frame[6];
    if (u !== unit && u !== 255) return null;
    const out = pdu(frame.subarray(7));
    const res = new Uint8Array(7 + out.length);
    res.set(frame.subarray(0, 4)); res[4] = (out.length + 1) >> 8; res[5] = (out.length + 1) & 255; res[6] = u; res.set(out, 7);
    return res;
  }
  return { map, handle, refresh, values: () => ({ di: Array.from(dIn), coils: Array.from(cOut), ir: Array.from(regs) }), unit };
}

/** A request frame, for tests and for tools that want to talk to the plant without a library. */
export function request(fc, data, { tx = 1, unit = 1 } = {}) {
  const pdu = Uint8Array.of(fc, ...data);
  const f = new Uint8Array(7 + pdu.length);
  f[0] = tx >> 8; f[1] = tx & 255; f[4] = (pdu.length + 1) >> 8; f[5] = (pdu.length + 1) & 255; f[6] = unit; f.set(pdu, 7);
  return f;
}
