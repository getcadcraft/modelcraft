/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are protocol data and developer messages. */
/**
 * plc-transport.js — how Modbus TCP frames reach a real PLC (0.9 SU.858 REAL mode). One small interface, three implementations:
 *
 *   transport = { kind, available, reason?, connect({ host, port }) → Promise, exchange(frame: Uint8Array) → Promise<Uint8Array>, close() → Promise }
 *
 *   studioTransport(desk)   Studio's shell bridge `cadcraftDesktop.plc.{connect, exchange, disconnect}` (desktop-shell plc.rs: cc_plc_connect, cc_plc_exchange,
 *                           cc_plc_disconnect). Studio opens the socket, refuses names and public addresses, and passes only whole Modbus frames of function codes
 *                           1-6, 15, 16. A Studio build older than 0.9 has no `connect`: available = false with a plain reason.
 *   browserTransport()      a browser tab cannot open a raw TCP socket: available = false and the reason the panel shows. Soft mode needs none of this.
 *   mockTransport(handler)  in-process, for tests and demos: handler(frame) → answer frame | null (null = silence, as a dead device).
 */
export const NO_BROWSER = 'A browser tab cannot open a raw TCP connection, so it cannot talk to a PLC. Use CadCraft Studio on the desktop for Real mode. Soft mode works here.';
export const NO_STUDIO_CLIENT = 'This CadCraft Studio has no PLC client yet (it needs the 0.9 build). Soft mode works here.';

export function browserTransport() {
  return { kind: 'browser', available: false, reason: NO_BROWSER, async connect() { throw Object.assign(new Error(NO_BROWSER), { code: 'no_link' }); }, async exchange() { throw Object.assign(new Error(NO_BROWSER), { code: 'no_link' }); }, async close() {} };
}

export function studioTransport(desk) {
  const plc = desk && desk.plc;
  if (!plc) return { ...browserTransport(), kind: 'studio-none', reason: NO_BROWSER };
  if (typeof plc.connect !== 'function' || typeof plc.exchange !== 'function') {
    const e = () => Object.assign(new Error(NO_STUDIO_CLIENT), { code: 'no_client' });
    return { kind: 'studio-old', available: false, reason: NO_STUDIO_CLIENT, async connect() { throw e(); }, async exchange() { throw e(); }, async close() {} };
  }
  let open = false;
  return {
    kind: 'studio', available: true,
    async connect({ host, port }) {
      try { await plc.connect(String(host || ''), Math.round(Number(port) || 502)); open = true; }
      catch (e) { throw Object.assign(new Error(String((e && e.message) || e)), { code: 'refused' }); }
    },
    async exchange(frame) {
      if (!open) throw Object.assign(new Error('not connected'), { code: 'closed' });
      try { const out = await plc.exchange(frame); return out instanceof Uint8Array ? out : Uint8Array.from(out || []); }
      catch (e) { open = false; throw Object.assign(new Error(String((e && e.message) || e)), { code: 'lost' }); }   // Studio drops the connection on any error
    },
    async close() { open = false; try { await plc.disconnect(); } catch { /* closed */ } },
  };
}

export function mockTransport(handler) {
  let open = false;
  return {
    kind: 'mock', available: true,
    async connect() { open = true; },
    async exchange(frame) {
      if (!open) throw Object.assign(new Error('not connected'), { code: 'closed' });
      const out = await handler(frame);
      if (!out) { open = false; throw Object.assign(new Error('no answer'), { code: 'lost' }); }
      return out;
    },
    async close() { open = false; },
  };
}

/** The transport for the page that is open. */
export function pickTransport(win = typeof window !== 'undefined' ? window : null) {
  const desk = win && win.cadcraftDesktop;
  return desk && desk.plc ? studioTransport(desk) : browserTransport();
}
