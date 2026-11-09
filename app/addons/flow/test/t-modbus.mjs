// SPDX-License-Identifier: Apache-2.0
// 0.9 SU.858 REAL mode: the Modbus TCP client codec against the public spec. Source: "MODBUS Application Protocol Specification V1.1b3" (modbus.org, 2012),
// section 6 (function examples) and section 7 (exception responses); "MODBUS Messaging on TCP/IP Implementation Guide V1.0b" for the MBAP header.
const { ok, section, mine } = globalThis.__flowTest;
const M = await mine('lib/modbus.js');
const hex = (u8) => Array.from(u8, (b) => b.toString(16).padStart(2, '0')).join(' ');
const fromHex = (s) => Uint8Array.from(s.trim().split(/\s+/).map((x) => parseInt(x, 16)));
const throwsKind = (f, kind, detail) => { try { f(); } catch (e) { return e instanceof M.ModbusError && e.kind === kind && (detail === undefined || e.detail === detail); } return false; };

section('Modbus client: request PDUs (spec section 6 examples)');
ok(hex(M.build.readCoils(19, 19)) === '01 00 13 00 13', 'FC 01 read coils 20-38 (address 19, 19 coils): 01 00 13 00 13');
ok(hex(M.build.readDiscrete(196, 22)) === '02 00 c4 00 16', 'FC 02 read discrete inputs 197-218: 02 00 C4 00 16');
ok(hex(M.build.readHolding(107, 3)) === '03 00 6b 00 03', 'FC 03 read holding registers 108-110: 03 00 6B 00 03');
ok(hex(M.build.readInput(8, 1)) === '04 00 08 00 01', 'FC 04 read input register 9: 04 00 08 00 01');
ok(hex(M.build.writeCoil(172, true)) === '05 00 ac ff 00' && hex(M.build.writeCoil(172, false)) === '05 00 ac 00 00', 'FC 05 write coil 173 on / off: 05 00 AC FF 00 / 00 00');
ok(hex(M.build.writeRegister(1, 3)) === '06 00 01 00 03', 'FC 06 write register 2 = 3: 06 00 01 00 03');
ok(hex(M.build.writeCoils(19, [1, 0, 1, 1, 0, 0, 1, 1, 1, 0].map(Boolean))) === '0f 00 13 00 0a 02 cd 01', 'FC 15 write coils 20-29 = CD 01: 0F 00 13 00 0A 02 CD 01');
ok(hex(M.build.writeRegisters(1, [10, 258])) === '10 00 01 00 02 04 00 0a 01 02', 'FC 16 write registers 2-3 = 000A 0102: 10 00 01 00 02 04 00 0A 01 02');

section('Modbus client: answers (spec section 6 examples)');
{
  const r = M.readAnswer(M.build.readCoils(19, 19), fromHex('01 03 cd 6b 05')).bits.map((b) => (b ? 1 : 0)).join('');
  ok(r === '1011001111010110101', 'FC 01 answer CD 6B 05: coils 20-27 = 1,0,1,1,0,0,1,1; 28-35 = 1,1,0,1,0,1,1,0; 36-38 = 1,0,1');
  ok(M.readAnswer(M.build.readHolding(107, 3), fromHex('03 06 02 2b 00 00 00 64')).words.join(',') === '555,0,100', 'FC 03 answer: registers 555, 0, 100');
  ok(M.readAnswer(M.build.readInput(8, 1), fromHex('04 02 00 0a')).words[0] === 10, 'FC 04 answer: 10');
  ok(M.readAnswer(M.build.readDiscrete(196, 22), fromHex('02 03 ac db 35')).bits.length === 22, 'FC 02 answer AC DB 35: 22 inputs');
  ok(M.readAnswer(M.build.writeCoil(172, true), fromHex('05 00 ac ff 00')).echo, 'FC 05 echo accepted');
  ok(throwsKind(() => M.readAnswer(M.build.writeCoil(172, true), fromHex('05 00 ac 00 00')), 'answer'), 'FC 05 answer that is not an echo is refused');
  ok(M.readAnswer(M.build.writeRegister(1, 3), fromHex('06 00 01 00 03')).echo, 'FC 06 echo accepted');
  ok(M.readAnswer(M.build.writeCoils(19, new Array(10).fill(true)), fromHex('0f 00 13 00 0a')).echo, 'FC 15 answer: address and quantity');
  ok(throwsKind(() => M.readAnswer(M.build.writeCoils(19, new Array(10).fill(true)), fromHex('0f 00 13 00 09')), 'answer'), 'FC 15 answer with another quantity is refused');
  ok(M.readAnswer(M.build.writeRegisters(1, [10, 258]), fromHex('10 00 01 00 02')).echo, 'FC 16 answer: address and quantity');
}

section('Modbus client: exception answers (spec section 7)');
ok(throwsKind(() => M.readAnswer(M.build.readCoils(0, 1), fromHex('81 02')), 'exception', 2), 'function 01 with the high bit and code 02: illegal data address');
ok(throwsKind(() => M.readAnswer(M.build.readHolding(0, 1), fromHex('83 01')), 'exception', 1), 'function 03 + 80: exception 01 illegal function');
ok(throwsKind(() => M.readAnswer(M.build.readHolding(0, 1), fromHex('83 04')), 'exception', 4) && /server device failure/.test(new M.ModbusError('exception', 4).message), 'exception 04 is "server device failure"');
ok(M.EXCEPTIONS[1] === 'illegal function' && M.EXCEPTIONS[2] === 'illegal data address' && M.EXCEPTIONS[3] === 'illegal data value' && M.EXCEPTIONS[4] === 'server device failure', 'exception names 01 to 04 as the spec lists them');
ok(throwsKind(() => M.readAnswer(M.build.readHolding(0, 1), fromHex('04 02 00 0a')), 'answer'), 'an answer for another function is refused');
ok(throwsKind(() => M.readAnswer(M.build.readHolding(0, 2), fromHex('03 02 00 0a')), 'answer'), 'a byte count that does not fit the quantity is refused');

section('Modbus client: MBAP header and limits');
{
  const f = M.frame(1, 0x11, M.build.readHolding(107, 3));
  ok(hex(f) === '00 01 00 00 00 06 11 03 00 6b 00 03', 'MBAP: transaction 1, protocol 0, length 6 (unit + PDU), unit 17, then the PDU');
  const p = M.parseFrame(f);
  ok(p.tx === 1 && p.unit === 0x11 && hex(p.pdu) === '03 00 6b 00 03', 'parseFrame reads it back');
  ok(M.frame(0x1234, 1, M.build.readCoils(0, 1))[0] === 0x12 && M.frame(0x1234, 1, M.build.readCoils(0, 1))[1] === 0x34, 'transaction id is big-endian');
  ok(throwsKind(() => M.parseFrame(fromHex('00 01 00 01 00 06 11 03 00 6b 00 03')), 'frame'), 'protocol id other than 0 is refused');
  ok(throwsKind(() => M.parseFrame(fromHex('00 01 00 00 00 09 11 03 00 6b 00 03')), 'frame'), 'a length field that does not match is refused');
  ok(throwsKind(() => M.build.readHolding(0, 126), 'range') && throwsKind(() => M.build.readCoils(0, 2001), 'range') && throwsKind(() => M.build.readCoils(0, 0), 'range'), 'read limits: 125 registers, 2000 coils, at least 1');
  ok(throwsKind(() => M.build.writeRegisters(0, new Array(124).fill(0)), 'range') && throwsKind(() => M.build.writeCoils(0, new Array(1969).fill(true)), 'range'), 'write limits: 123 registers, 1968 coils');
  ok(throwsKind(() => M.build.readHolding(65535, 2), 'range') && throwsKind(() => M.build.writeRegister(70000, 1), 'range') && throwsKind(() => M.build.writeRegister(0, 70000), 'range'), 'addresses and values stay inside 16 bits');
}

section('Modbus client: values in registers');
{
  ok(M.toWords('uint16', 1234.4).join() === '1234' && M.toWords('int16', -2).join() === '65534' && M.fromWords('int16', [65534]) === -2, '16-bit signed and unsigned');
  ok(M.toWords('uint16', 70000).join() === '65535' && M.toWords('uint16', -5).join() === '0', 'a value out of range is clamped, never wrapped');
  ok(M.toWords('uint32', 0x12345678).join() === '4660,22136' && M.fromWords('uint32', [0x1234, 0x5678]) === 0x12345678, '32-bit: high word first');
  ok(M.toWords('uint32', 0x12345678, true).join() === '22136,4660' && M.fromWords('uint32', [0x5678, 0x1234], true) === 0x12345678, '32-bit with the words swapped');
  ok(M.fromWords('int32', M.toWords('int32', -100000)) === -100000, '32-bit signed round trip');
  ok(M.toWords('bool', 5).join() === '1' && M.fromWords('bool', [0]) === 0, 'bool in a register is 0 or 1');
  ok(hex(M.packBits([true, false, true, true, false, false, true, true, true, false])) === 'cd 01', 'bits are packed low bit first (spec: CD 01)');
}
