/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are protocol data and developer messages. */
/**
 * modbus.js — the client side of Modbus TCP (0.9 SU.858 REAL mode). DOM-free, no network: it builds request frames and reads answer frames; a transport (plc-transport.js)
 * moves the bytes. (lib/plc.js is the other side: the plant as a Modbus server.) Written from the public "MODBUS Application Protocol Specification V1.1b3" (2012) and
 * "MODBUS Messaging on TCP/IP Implementation Guide V1.0b", modbus.org; the known-answer tests quote the spec's own examples.
 *
 *   MBAP header (7 bytes): transaction id (2), protocol id = 0 (2), length = unit id + PDU (2), unit id (1); then the PDU (function code + data).
 *   build.readCoils(addr, n) · readDiscrete · readHolding · readInput · writeCoil(addr, on) · writeRegister(addr, v) · writeCoils(addr, bits[]) · writeRegisters(addr, words[])  → PDU
 *   frame(tx, unit, pdu) → Uint8Array         the whole request          parseFrame(bytes) → { tx, unit, pdu }  or throws ModbusError('frame')
 *   readAnswer(reqPdu, ansPdu) → { bits } | { words } | { echo: true }      or throws ModbusError('exception', code)
 * Limits are the spec's: 2000 coils or 125 registers per read, 1968 coils or 123 registers per multiple write.
 */
export const FC = { READ_COILS: 1, READ_DISCRETE: 2, READ_HOLDING: 3, READ_INPUT: 4, WRITE_COIL: 5, WRITE_REGISTER: 6, WRITE_COILS: 15, WRITE_REGISTERS: 16 };
export const EXCEPTIONS = { 1: 'illegal function', 2: 'illegal data address', 3: 'illegal data value', 4: 'server device failure', 5: 'acknowledge', 6: 'server device busy', 8: 'memory parity error', 10: 'gateway path unavailable', 11: 'gateway target failed to respond' };
export const MAX = { readBits: 2000, readWords: 125, writeBits: 1968, writeWords: 123, pdu: 253 };

export class ModbusError extends Error {
  constructor(kind, detail, message) { super(message || (kind === 'exception' ? `PLC answered exception ${detail}: ${EXCEPTIONS[detail] || 'unknown'}` : `${kind}: ${detail}`)); this.kind = kind; this.detail = detail; this.code = kind === 'exception' ? detail : 0; }
}

const u16 = (v) => { if (!Number.isInteger(v) || v < 0 || v > 0xffff) throw new ModbusError('range', v, `value ${v} does not fit 16 bits`); return v; };
const be = (v) => [(u16(v) >> 8) & 255, v & 255];
const rd = (b, o) => (b[o] << 8) | b[o + 1];

export function packBits(bits) {
  const out = new Uint8Array(Math.ceil(bits.length / 8));
  bits.forEach((b, k) => { if (b) out[k >> 3] |= 1 << (k & 7); });
  return out;
}
export function unpackBits(bytes, n) {
  const out = [];
  for (let k = 0; k < n; k++) out.push(((bytes[k >> 3] >> (k & 7)) & 1) === 1);
  return out;
}

const readReq = (fc, max) => (addr, n) => {
  u16(addr); if (!Number.isInteger(n) || n < 1 || n > max) throw new ModbusError('range', n, `read ${n} items: 1 to ${max} allowed`);
  if (addr + n > 0x10000) throw new ModbusError('range', addr, 'past address 65535');
  return Uint8Array.of(fc, ...be(addr), ...be(n));
};
export const build = {
  readCoils: readReq(FC.READ_COILS, MAX.readBits),
  readDiscrete: readReq(FC.READ_DISCRETE, MAX.readBits),
  readHolding: readReq(FC.READ_HOLDING, MAX.readWords),
  readInput: readReq(FC.READ_INPUT, MAX.readWords),
  writeCoil: (addr, on) => Uint8Array.of(FC.WRITE_COIL, ...be(addr), on ? 0xff : 0x00, 0x00),
  writeRegister: (addr, v) => Uint8Array.of(FC.WRITE_REGISTER, ...be(addr), ...be(v)),
  writeCoils(addr, bits) {
    u16(addr); if (!bits.length || bits.length > MAX.writeBits) throw new ModbusError('range', bits.length, `write ${bits.length} coils: 1 to ${MAX.writeBits} allowed`);
    if (addr + bits.length > 0x10000) throw new ModbusError('range', addr, 'past address 65535');
    const data = packBits(bits);
    return Uint8Array.of(FC.WRITE_COILS, ...be(addr), ...be(bits.length), data.length, ...data);
  },
  writeRegisters(addr, words) {
    u16(addr); if (!words.length || words.length > MAX.writeWords) throw new ModbusError('range', words.length, `write ${words.length} registers: 1 to ${MAX.writeWords} allowed`);
    if (addr + words.length > 0x10000) throw new ModbusError('range', addr, 'past address 65535');
    return Uint8Array.of(FC.WRITE_REGISTERS, ...be(addr), ...be(words.length), words.length * 2, ...words.flatMap(be));
  },
};

/** A whole request frame: MBAP header + PDU. */
export function frame(tx, unit, pdu) {
  if (pdu.length < 1 || pdu.length > MAX.pdu) throw new ModbusError('range', pdu.length, 'PDU size');
  const f = new Uint8Array(7 + pdu.length);
  f[0] = (tx >> 8) & 255; f[1] = tx & 255; f[4] = ((pdu.length + 1) >> 8) & 255; f[5] = (pdu.length + 1) & 255; f[6] = unit & 255; f.set(pdu, 7);
  return f;
}
export function parseFrame(bytes) {
  const b = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes || []);
  if (b.length < 8) throw new ModbusError('frame', 'too short');
  if (rd(b, 2) !== 0) throw new ModbusError('frame', 'protocol id is not 0');
  if (rd(b, 4) !== b.length - 6) throw new ModbusError('frame', 'length field does not match');
  return { tx: rd(b, 0), unit: b[6], pdu: b.subarray(7) };
}

/** Read an answer PDU for a request PDU. Throws ModbusError('exception', code) for an exception answer and ModbusError('answer', …) for one that does not fit the request. */
export function readAnswer(req, ans) {
  const fc = req[0];
  if (ans.length < 2) throw new ModbusError('answer', 'too short');
  if (ans[0] === (fc | 0x80)) throw new ModbusError('exception', ans[1]);
  if (ans[0] !== fc) throw new ModbusError('answer', `function ${ans[0]} for a request of function ${fc}`);
  switch (fc) {
    case FC.READ_COILS: case FC.READ_DISCRETE: {
      const n = rd(req, 3), bc = ans[1];
      if (bc !== Math.ceil(n / 8) || ans.length !== 2 + bc) throw new ModbusError('answer', 'byte count');
      return { bits: unpackBits(ans.subarray(2), n) };
    }
    case FC.READ_HOLDING: case FC.READ_INPUT: {
      const n = rd(req, 3), bc = ans[1];
      if (bc !== 2 * n || ans.length !== 2 + bc) throw new ModbusError('answer', 'byte count');
      return { words: Array.from({ length: n }, (_, k) => rd(ans, 2 + 2 * k)) };
    }
    case FC.WRITE_COIL: case FC.WRITE_REGISTER:
      if (ans.length !== 5 || ans.some((v, i) => v !== req[i])) throw new ModbusError('answer', 'a single write is answered with an echo of the request');
      return { echo: true };
    case FC.WRITE_COILS: case FC.WRITE_REGISTERS:
      if (ans.length !== 5 || rd(ans, 1) !== rd(req, 1) || rd(ans, 3) !== rd(req, 3)) throw new ModbusError('answer', 'a multiple write is answered with its address and quantity');
      return { echo: true };
    default: throw new ModbusError('answer', `function ${fc} is not one this client sends`);
  }
}

// ---------------------------------------------------------------------------------------------------------------------- values in registers
/** Register types: 16-bit signed/unsigned, 32-bit signed/unsigned in two registers (high word first unless `wordSwap`). */
export const WORDS = { bool: 1, uint16: 1, int16: 1, uint32: 2, int32: 2 };
export function toWords(type, raw, wordSwap = false) {
  if (type === 'bool') return [raw ? 1 : 0];
  const lim = { uint16: [0, 0xffff], int16: [-0x8000, 0x7fff], uint32: [0, 0xffffffff], int32: [-0x80000000, 0x7fffffff] }[type];
  if (!lim) throw new ModbusError('range', type, 'unknown register type');
  const v = Math.max(lim[0], Math.min(lim[1], Math.round(raw)));
  if (WORDS[type] === 1) return [v & 0xffff];
  const u = v >>> 0, hi = (u >>> 16) & 0xffff, lo = u & 0xffff;
  return wordSwap ? [lo, hi] : [hi, lo];
}
export function fromWords(type, words, wordSwap = false) {
  if (type === 'bool') return words[0] !== 0 ? 1 : 0;
  if (type === 'uint16') return words[0];
  if (type === 'int16') return words[0] >= 0x8000 ? words[0] - 0x10000 : words[0];
  const [hi, lo] = wordSwap ? [words[1], words[0]] : [words[0], words[1]];
  const u = ((hi << 16) | lo) >>> 0;
  return type === 'uint32' ? u : (u | 0);
}
