/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — DOM-free library: its literals are protocol data and developer messages. */
/**
 * plc-link.js — the page's end of Studio's Modbus socket (0.8 SU.858 step 5). Studio (desktop-shell plc.rs) listens on this computer and keeps each
 * Modbus TCP frame a PLC sends until the page answers it; this module polls for the frames, gives each to plc.js `handle` and hands the answer back.
 * The socket, the port and the "this computer only" rule are Studio's; the page never opens a port itself.
 *
 *   the shell bridge object `cadcraftDesktop.plc` = { start(port) → { port }, poll() → [{ id, bytes }], respond(id, bytes | null), stop() }      (bridge.js, plc.rs)
 *   const link = await startLink({ desk, plc, port, every = 20 })  → { port, stop(), stats() }       throws { code } when Studio refuses (port in use …)
 */
export async function startLink({ desk, plc, port = 5020, every = 20, timer = { set: (f, ms) => setInterval(f, ms), clear: (h) => clearInterval(h) } }) {
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
