#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-plc.mjs — the PLC mode panel of the Material flow add-on in /lab/modelcraft, headless Chromium (0.9 SU.858). Run as root:
 *   node public_html/assets/apps/modelcraft/dev/addons/flow/test/browser-plc.mjs [--keep-admin]
 * Part 1, a browser tab: Soft end to end (starter program, a fast run, attach to Live and the gate opens), the setup in the model file without any host,
 * Real switched off with the reason. Part 2, a window that has a Studio-like PLC bridge (a stand-in written in the test page, no hardware): Real connects,
 * the PLC's coil opens the gate, loads flow, the host is not in the model file, the link closes the gates when the run ends.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../../../..');
const BASE = 'https://getcadcraft.com';
const KEEP_ADMIN = process.argv.includes('--keep-admin');
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const { chromium } = createRequire(path.join(REPO, 'tools/modelcraft-test/package.json'))('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const adminPhp = path.join(REPO, 'tools/modelcraft-test/admin.php');
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const FLOW = '/assets/apps/modelcraft/dev/addons/flow/';

// a layout with a gate the PLC drives: source -> belt -> gate (plc) -> belt with a photo-eye -> belt -> sink
const makeLayout = async (page) => page.evaluate(async (F) => {
  const m = await import(F + '../../flow/layout.js'), c = await import(F + '../../flow/catalog.js');
  const L = m.newLayout(), d = c.defaults;
  L.items.push({ id: 'source-1', kind: 'source', x: 0, y: 0, z: 0.8, rot: 0, params: { ...d('source'), interarrival: { kind: 'const', v: 6 } } });
  const belt = { ...d('conveyor'), speed: 0.5, gap: 0.1, length: 5 };
  const add = (from, kind, params) => { const it = m.addAfter(L, from, 'out', kind, params); L.items.push(it); return it; };
  const c1 = add('source-1', 'conveyor', belt), g = add(c1.id, 'gate', { ...d('gate'), mode: 'plc' }), c2 = add(g.id, 'conveyor', belt);
  L.items.push({ id: 'sensor-1', kind: 'sensor', x: c2.x, y: c2.y, z: c2.z, rot: 0, params: { ...d('sensor'), on: c2.id, at: 0.4 } });
  const c3 = add(c2.id, 'conveyor', { ...belt, length: 3 }); add(c3.id, 'sink', d('sink'));
  window.ccFlow.load(L);
  return L.items.length;
}, FLOW);

async function openPage(ctx, init) {
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  if (init) await page.addInitScript(init);
  await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().length > 0, null, { timeout: 30000 });
  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  try { await page.waitForFunction(() => !!window.ccFlow && !!window.ccFlow.plcMode(), null, { timeout: 30000 }); } catch (e) { console.log('  page errors: ' + errors.slice(0, 4).join(' | ')); throw e; }
  return { page, errors };
}
const openSection = async (page) => {
  if (await page.locator('.flow-plcmode').first().isVisible()) return;
  await page.evaluate(() => document.querySelector('.flow-plcmode').closest('section').firstElementChild.click());
  await page.waitForTimeout(200);
};
const panel = (page) => page.evaluate(() => { const s = [...document.querySelectorAll('.flow-plcmode')][0]; return s ? s.innerText : ''; });

try {
  const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'up'], { encoding: 'utf8' }));
  const ctx = await browser.newContext({ viewport: { width: 1500, height: 950 }, acceptDownloads: true });
  const lp = await ctx.newPage();
  await lp.goto(BASE + '/admin/login', { waitUntil: 'domcontentloaded' });
  await lp.fill('input[name="email"]', admin.email); await lp.fill('input[name="password"]', admin.password);
  await Promise.all([lp.waitForNavigation(), lp.click('form button[type="submit"]')]);
  await lp.close();

  // ------------------------------------------------------------------ part 1: a browser tab
  const { page, errors } = await openPage(ctx, null);
  ok(await page.evaluate(() => !!document.querySelector('.flow-plcmode')), 'the PLC mode section is in the right panel');
  ok((await panel(page)).includes('Simulation only.'), 'the safety line is shown');
  await makeLayout(page);
  await page.waitForTimeout(400);
  await page.waitForFunction(() => /Starter program/.test(document.querySelector('.flow-plcmode').innerText), null, { timeout: 15000 });
  ok(await page.evaluate(() => document.querySelector('input[name=plcmode][value=soft]').checked), 'Soft is the default');
  await openSection(page);
  await page.click('.flow-plcmode button:has-text("Starter program")');
  const prog = await page.evaluate(() => document.querySelector('.flow-plcmode textarea').value);
  ok(/PROGRAM Main/.test(prog) && /sensor_1_standing/.test(prog) && /g_open|gate/.test(prog) , 'Starter program writes a program for the layout', prog.slice(0, 80));
  await page.click('.flow-plcmode button:has-text("Run 10 minutes")');
  await page.waitForFunction(() => /Loads done/.test(document.querySelector('.flow-plcmode').innerText), null, { timeout: 30000 });
  const done = await page.evaluate(() => { const r = [...document.querySelectorAll('.flow-plcmode tr')].find((x) => /Loads done/.test(x.innerText)); return Number(r.cells[1].textContent); });
  ok(done >= 50, `Soft run: ${done} loads done in 10 minutes of model time`);
  const doc = await page.evaluate(() => JSON.stringify(window.ccDocData('flow').data('plc')));
  ok(/"mode":"soft"/.test(doc) && /PROGRAM Main/.test(doc) && !/host|port|pass|secret|token/i.test(doc), 'the setup is in the model file, with no host, port or secret', doc.slice(0, 120));

  // Soft on a live run: the gate (mode plc) is closed until the soft PLC opens it
  await page.evaluate(() => window.ccFlow.live());
  await page.waitForFunction(() => window.ccFlow.isLive(), null, { timeout: 10000 });
  await page.click('.flow-plcmode button:has-text("Attach to the live run")');
  ok(await page.evaluate(() => window.ccFlow.plcMode().state().soft), 'Attach: the soft PLC is bound to the live run');
  await page.evaluate(() => { const b = [...document.querySelectorAll('.flow-p select')].find((s) => [...s.options].some((o) => o.value === '600')); if (b) { b.value = '600'; b.dispatchEvent(new Event('change', { bubbles: true })); } });
  await page.waitForFunction(() => { const s = window.ccFlow.liveSim(); return s && s.done > 3; }, null, { timeout: 40000 });
  ok(true, 'the live model moved loads through the gate the soft PLC opened');
  await page.evaluate(() => window.ccFlow.liveStop());
  await page.waitForTimeout(300);
  ok(await page.evaluate(() => !window.ccFlow.plcMode().state().soft), 'when the live run ends the soft PLC detaches');

  // Real in a browser tab: off, with the reason
  await page.click('.flow-plcmode input[value=real]');
  await page.waitForTimeout(200);
  const t = await panel(page);
  ok(/cannot open a raw TCP/.test(t) && /Soft mode works/.test(t), 'Real in a browser tab says plainly why it is off');
  ok(await page.evaluate(() => document.querySelector('.flow-plcmode button.primary:last-of-type') && [...document.querySelectorAll('.flow-plcmode button')].find((b) => /Connect to the PLC/.test(b.textContent)).disabled), 'and Connect is disabled');
  ok(await page.evaluate(() => [...document.querySelectorAll('.flow-plcmode input[type=text]')].every((i) => i.disabled)), 'the host box is disabled');
  ok(await page.evaluate(() => /real/.test(JSON.stringify(window.ccDocData('flow').data('plc')))), 'the mode is saved with the document');
  await page.screenshot({ path: path.join(REPO, 'tmp/shots/plc-mode-browser.png') }).catch(() => {});
  ok(errors.length === 0, 'no console errors (browser tab)', errors.slice(0, 3).join(' | '));
  await page.close();

  // ------------------------------------------------------------------ part 2: a window with a Studio-like bridge (stand-in, no hardware)
  const bridge = () => {
    // the stand-in PLC: the coils/registers a Modbus server keeps, its "program" (g_open = estop_ok AND NOT sensor_1_standing), and Studio's rules
    const S = { coil: new Uint8Array(65536), hold: new Uint16Array(65536), connected: null, log: [] };
    window.__plc = S;
    const rd = (b, o) => (b[o] << 8) | b[o + 1];
    window.cadcraftDesktop = Object.freeze({ plc: Object.freeze({
      start: async () => ({ port: 5020 }), poll: async () => [], respond: async () => null, stop: async () => null,
      connect: async (host, port) => { if (!/^(10\.|192\.168\.|127\.)/.test(host)) throw new Error('only this computer and private networks are allowed'); S.connected = host + ':' + port; },
      disconnect: async () => { S.connected = null; },
      exchange: async (frame) => {
        if (!S.connected) throw new Error('not connected');
        const f = Array.from(frame), pdu = f.slice(7), fc = pdu[0], a = rd(pdu, 1), n = rd(pdu, 3);
        S.log.push(fc);
        S.coil[100] = S.coil[0] && !S.coil[2] ? 1 : 0;   // coils 0.. = estop_ok, sensor_1_covered, sensor_1_standing, g_is_open; the command is coil 100
        let out;
        if (fc === 1) { const by = new Array(Math.ceil(n / 8)).fill(0); for (let k = 0; k < n; k++) if (S.coil[a + k]) by[k >> 3] |= 1 << (k & 7); out = [1, by.length, ...by]; }
        else if (fc === 15) { for (let k = 0; k < n; k++) S.coil[a + k] = (pdu[6 + (k >> 3)] >> (k & 7)) & 1; out = pdu.slice(0, 5); }
        else if (fc === 16) { for (let k = 0; k < n; k++) S.hold[a + k] = rd(pdu, 6 + 2 * k); out = pdu.slice(0, 5); }
        else if (fc === 5) { S.coil[a] = n ? 1 : 0; out = pdu.slice(0, 5); }
        else out = [fc | 0x80, 1];
        return [f[0], f[1], 0, 0, 0, out.length + 1, f[6], ...out];
      },
    }) });
  };
  const two = await openPage(ctx, bridge);
  await makeLayout(two.page);
  await two.page.waitForFunction(() => /Starter program/.test(document.querySelector('.flow-plcmode').innerText), null, { timeout: 15000 });
  await openSection(two.page);
  await two.page.click('.flow-plcmode input[value=real]');
  await two.page.waitForTimeout(200);
  ok(!/cannot open a raw TCP/.test(await panel(two.page)) && await two.page.evaluate(() => window.ccFlow.plcMode().state().available), 'with Studio\'s bridge Real is available');
  ok(await two.page.evaluate(() => document.querySelectorAll('.flow-plcmode details tr').length >= 7), 'the address map lists every tag');
  await two.page.fill('.flow-plcmode input[type=text]', '8.8.8.8');
  await two.page.evaluate(() => window.ccFlow.live());
  await two.page.waitForFunction(() => window.ccFlow.isLive(), null, { timeout: 10000 });
  ok(await two.page.evaluate(() => [...document.querySelectorAll('.flow-plcmode button')].find((b) => /Connect to the PLC/.test(b.textContent)).disabled), 'Connect stays disabled until the safety box is ticked');
  await two.page.check('.flow-plcmode input[type=checkbox]');
  await two.page.click('.flow-plcmode button:has-text("Connect to the PLC")');
  await two.page.waitForFunction(() => /Could not connect/.test(document.querySelector('.flow-plcmode').innerText), null, { timeout: 5000 });
  ok(true, 'a public address is refused (by Studio) with its message');
  await two.page.fill('.flow-plcmode input[type=text]', '192.168.1.20');
  await two.page.click('.flow-plcmode button:has-text("Connect to the PLC")');
  await two.page.waitForFunction(() => window.ccFlow.plcMode().state().real, null, { timeout: 5000 });
  ok(await two.page.evaluate(() => window.__plc.connected === '192.168.1.20:502'), 'connected through the bridge to the address typed');
  await two.page.evaluate(() => { const b = [...document.querySelectorAll('.flow-p select')].find((s) => [...s.options].some((o) => o.value === '600')); if (b) { b.value = '600'; b.dispatchEvent(new Event('change', { bubbles: true })); } });
  await two.page.waitForFunction(() => { const s = window.ccFlow.liveSim(); return s && s.done > 3; }, null, { timeout: 40000 });
  const real = await two.page.evaluate(() => ({ done: window.ccFlow.liveSim().done, estop: window.__plc.coil[0], cmd: window.__plc.coil[100], fcs: [...new Set(window.__plc.log)].sort().join(), stats: document.querySelector('[data-plcstats]')?.textContent }));
  ok(real.estop === 1 && real.cmd === 1, 'the model\'s estop_ok reached the PLC\'s coil 0 and the PLC\'s command (coil 100) is set', JSON.stringify(real));
  ok(real.done > 3, `loads flowed through the gate the (stand-in) PLC opened: ${real.done} done`);
  ok(real.fcs === '1,15,16', 'only function codes 1, 15 and 16 were sent', real.fcs);
  ok(/Exchanges \d+, errors 0/.test(real.stats || ''), 'the panel shows the exchange count', real.stats);
  const doc2 = await two.page.evaluate(() => JSON.stringify(window.ccDocData('flow').data('plc')));
  ok(/"mode":"real"/.test(doc2) && !/192\.168|8\.8\.8\.8|host|pass|secret|token/i.test(doc2), 'the model file has the mode and no host or secret', doc2.slice(0, 120));
  await two.page.screenshot({ path: path.join(REPO, 'tmp/shots/plc-mode-real.png') }).catch(() => {});
  await two.page.evaluate(() => window.ccFlow.liveStop());
  await two.page.waitForTimeout(400);
  ok(await two.page.evaluate(() => window.__plc.connected === null && !window.ccFlow.plcMode().state().real), 'when the live run ends the link is closed');
  ok(two.errors.length === 0, 'no console errors (Studio-like window)', two.errors.slice(0, 3).join(' | '));
  await ctx.close();
} catch (e) {
  fail++; console.log('  FAIL threw — ' + (e.stack || e));
} finally {
  await browser.close();
  if (!KEEP_ADMIN) { try { execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'down']); } catch { /* best effort */ } }
}
console.log(`\nflow PLC mode in the browser: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
