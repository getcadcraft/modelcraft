// SPDX-License-Identifier: Apache-2.0
// A small Modbus TCP server in plain JS (node:net), for the REAL-mode loopback tests (0.9 SU.858). Written from the public Modbus Application Protocol spec V1.1b3.
// It stands in for a PLC: four tables, function codes 1-6, 15, 16, and an optional `scan(tables)` the test uses as the PLC's program (run before every answer).
import net from 'node:net';

export function startServer({ scan = null, onRequest = null, silentAfter = Infinity } = {}) {
  const t = { coil: new Uint8Array(65536), discrete: new Uint8Array(65536), holding: new Uint16Array(65536), input: new Uint16Array(65536) };
  const log = [];
  let served = 0;
  const server = net.createServer((sock) => {
    let buf = Buffer.alloc(0);
    sock.on('data', (d) => {
      buf = Buffer.concat([buf, d]);
      while (buf.length >= 7) {
        const len = buf.readUInt16BE(4);
        if (buf.length < 6 + len) break;
        const f = buf.subarray(0, 6 + len); buf = buf.subarray(6 + len);
        if (served++ >= silentAfter) continue;   // a PLC that stopped answering
        const pdu = f.subarray(7); log.push(Array.from(pdu));
        if (onRequest) onRequest(pdu);
        if (scan) scan(t);
        const out = answer(t, pdu);
        const head = Buffer.alloc(7); f.copy(head, 0, 0, 4); head.writeUInt16BE(out.length + 1, 4); head[6] = f[6];
        sock.write(Buffer.concat([head, Buffer.from(out)]));
      }
    });
    sock.on('error', () => {});
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ port: server.address().port, tables: t, log, close: () => new Promise((r) => { server.close(r); server.closeAllConnections?.(); }) })));
}

function answer(t, p) {
  const fc = p[0], u = (o) => (p[o] << 8) | p[o + 1], exc = (c) => [fc | 0x80, c];
  const a = p.length >= 3 ? u(1) : 0, n = p.length >= 5 ? u(3) : 0;
  switch (fc) {
    case 1: case 2: {
      if (n < 1 || n > 2000) return exc(3);
      if (a + n > 65536) return exc(2);
      const tab = fc === 1 ? t.coil : t.discrete, out = new Array(Math.ceil(n / 8)).fill(0);
      for (let k = 0; k < n; k++) if (tab[a + k]) out[k >> 3] |= 1 << (k & 7);
      return [fc, out.length, ...out];
    }
    case 3: case 4: {
      if (n < 1 || n > 125) return exc(3);
      if (a + n > 65536) return exc(2);
      const tab = fc === 3 ? t.holding : t.input, out = [];
      for (let k = 0; k < n; k++) out.push(tab[a + k] >> 8, tab[a + k] & 255);
      return [fc, out.length, ...out];
    }
    case 5: if (n !== 0 && n !== 0xff00) return exc(3); t.coil[a] = n ? 1 : 0; return Array.from(p.subarray(0, 5));
    case 6: t.holding[a] = n; return Array.from(p.subarray(0, 5));
    case 15: {
      if (n < 1 || n > 1968 || p[5] !== Math.ceil(n / 8)) return exc(3);
      for (let k = 0; k < n; k++) t.coil[a + k] = (p[6 + (k >> 3)] >> (k & 7)) & 1;
      return Array.from(p.subarray(0, 5));
    }
    case 16: {
      if (n < 1 || n > 123 || p[5] !== 2 * n) return exc(3);
      for (let k = 0; k < n; k++) t.holding[a + k] = (p[6 + 2 * k] << 8) | p[7 + 2 * k];
      return Array.from(p.subarray(0, 5));
    }
    default: return exc(1);
  }
}
