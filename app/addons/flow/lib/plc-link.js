/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are protocol data and developer messages. */
/**
 * plc-link.js — the page's end of Studio's Modbus socket (0.8 SU.858 step 5). Studio (desktop-shell plc.rs) listens on this computer and keeps each
 * Modbus TCP frame a PLC sends until the page answers it; this module polls for the frames, gives each to plc.js `handle` and hands the answer back.
 * The socket, the port and the "this computer only" rule are Studio's; the page never opens a port itself.
 *
 *   the shell bridge object `cadcraftDesktop.plc` = { start(port) → { port }, poll() → [{ id, bytes }], respond(id, bytes | null), stop() }      (bridge.js, plc.rs)
 *   const link = await startLink({ desk, plc, port, every = 20, driver })  → { port, stop(), stats() }       throws { code } when Studio refuses (port in use …)
 *
 * The protocol is a data choice (0.9 TW.11/TW.14): DRIVERS is the table. A second protocol is a new row (and its codec file + the matching Rust framing in plc.rs),
 * not a rewrite of this link. `driver` names a row; the default is "modbus-tcp", whose behaviour is unchanged.
 */

/** port: the default port Studio listens on; devicePort: the standard port a PLC itself listens on; address: how PLC tools write an address;
 *  reads/writes: what the plant side can answer; spec: the public document each field is encoded from; status: built | planned (a planned row has no codec and driverFor refuses it). */
export const DRIVERS = {
  'modbus-tcp': {
    id: 'modbus-tcp', name: 'Modbus TCP', status: 'built', port: 5020, devicePort: 502,
    address: { syntax: 'table + 0-based number', tables: ['coil', 'discrete', 'holding', 'input'], example: 'holding 12', note: 'PLC tools often show +1 or +10001/+30001/+40001; the wire address is 0-based' },
    reads: ['bits (FC 01, 02)', '16-bit words (FC 03, 04)'], writes: ['one or many coils (FC 05, 15)', 'one or many holding registers (FC 06, 16)'],
    functionCodes: [1, 2, 3, 4, 5, 6, 15, 16],
    spec: 'MODBUS Application Protocol Specification V1.1b3, sections 6-7; MODBUS Messaging on TCP/IP Implementation Guide V1.0b (MBAP header)',
    codec: 'modbus.js', plant: 'plc.js',
  },
  's7': {
    id: 's7', name: 'Siemens S7', status: 'planned', port: 1102, devicePort: 102,
    address: { syntax: 'area + DB number + byte.bit', tables: [], example: 'DB1.DBX0.0' }, reads: [], writes: [], functionCodes: [],
    spec: 'none usable yet: see docs/0.9-sessions/twin-plc-09.md (no public, permitted specification of the S7comm layer found)',
    codec: null, plant: null,
  },
};

/** The driver row for a name; throws { code } when it is unknown or has no codec yet, so the panel can say why instead of failing inside a socket. */
export function driverFor(id = 'modbus-tcp') {
  const d = DRIVERS[id];
  if (!d) throw Object.assign(new Error(`unknown PLC protocol "${id}"`), { code: 'unknown_driver' });
  if (d.status !== 'built') throw Object.assign(new Error(`${d.name} is planned, not built yet`), { code: 'driver_not_built' });
  return d;
}
/** The rows the panel may offer: built drivers only. */
export const builtDrivers = () => Object.values(DRIVERS).filter((d) => d.status === 'built');

export async function startLink({ desk, plc, port, driver = 'modbus-tcp', every = 20, timer = { set: (f, ms) => setInterval(f, ms), clear: (h) => clearInterval(h) } }) {
  const drv = driverFor(driver);
  if (port === undefined) port = drv.port;
  if (!desk || !desk.plc || typeof desk.plc.start !== 'function') throw Object.assign(new Error('no PLC link in this window'), { code: 'no_link' });
  const started = await desk.plc.start(Math.round(port));
  const stats = { frames: 0, answered: 0, ignored: 0, errors: 0 };
  let busy = false, stopped = false;
  const pump = async () => {
    if (busy || stopped) return;
    busy = true;
    try {
      for (const f of (await desk.plc.poll()) || []) {
        stats.frames++;
        let out = null;
        try { out = plc.handle(f.bytes instanceof Uint8Array ? f.bytes : Uint8Array.from(f.bytes || [])); } catch { stats.errors++; }
        if (out) stats.answered++; else stats.ignored++;
        await desk.plc.respond(f.id, out ? Array.from(out) : null);
      }
    } catch { stats.errors++; } finally { busy = false; }
  };
  const h = timer.set(pump, Math.max(5, every));
  return { port: started && started.port ? started.port : port, stats: () => ({ ...stats }), pump, async stop() { stopped = true; timer.clear(h); try { await desk.plc.stop(); } catch { /* closed */ } } };
}
