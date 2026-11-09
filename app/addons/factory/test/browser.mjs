#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser.mjs — the Factory floor add-on in the real /lab/modelcraft and /lab/partcraft pages, headless Chromium (0.9 D8.13, session
 * factory-floor-09). Run as root (it uses ModelCraft's test admin, as the flow add-on's browser test does):
 *   node public_html/assets/apps/modelcraft/dev/addons/factory/test/browser.mjs [--out <dir>] [--keep-admin]
 * Checks: off by default; on, its section is in the right panel with no console errors; the flow example line's stations become machines;
 * Simulate every machine + Read once/Start reading fill the live table and OEE; the operator screen draws a label per station over the 3D
 * view; limits; writing is off, asks before it turns on, and a write is refused (no channel); a program file is queued, checked, and Send
 * goes through a stand-in for Studio's ccSendToMachine (the real dialog is Studio's); the PartCraft tab hands a posted program to the
 * queue through the outbox; CSVs save; switching off removes the overlay.
 * Everything here reads the SIMULATOR: no real machine, agent or Studio bridge is involved.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../../../..');
const BASE = 'https://getcadcraft.com';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(arg('--out', path.join(REPO, 'tmp/shots/factory-floor')));
const KEEP_ADMIN = process.argv.includes('--keep-admin');
const STATE = path.join(REPO, 'tmp/factory-browser-state.json');
fs.mkdirSync(OUT, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };

const { chromium } = createRequire(path.join(REPO, 'tools/modelcraft-test/package.json'))('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const adminPhp = path.join(REPO, 'tools/modelcraft-test/admin.php');
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });

async function signedIn() {
  const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'up'], { encoding: 'utf8' }));
  const c = await browser.newContext({ viewport: { width: 1500, height: 950 }, acceptDownloads: true });
  const p = await c.newPage();
  await p.goto(BASE + '/admin/login', { waitUntil: 'domcontentloaded' });
  await p.fill('input[name="email"]', admin.email);
  await p.fill('input[name="password"]', admin.password);
  await Promise.all([p.waitForNavigation(), p.click('form button[type="submit"]')]);
  await c.storageState({ path: STATE });
  fs.chmodSync(STATE, 0o600);
  await p.close();
  return c;
}
const watch = (page, errors) => {
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(m.text()); });
};

try {
  const ctx = await signedIn();
  const page = await ctx.newPage(); const errors = []; watch(page, errors);
  page.on('dialog', (d) => d.accept());
  await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().length > 0, null, { timeout: 30000 });
  const listed = await page.evaluate(() => window.ccAddons.list().map((a) => ({ id: a.id, state: a.state })));
  const f0 = listed.find((a) => a.id === 'factory');
  ok(f0 && f0.state !== 'active' && !(await page.evaluate(() => !!window.ccFactory)), 'bundled, found, and off by default', JSON.stringify(listed));

  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true, factory: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.ccFactory && !!window.ccFlow, null, { timeout: 30000 });
  ok(await page.evaluate(() => [...document.querySelectorAll('main aside *')].some((e) => e.textContent.trim() === 'Factory floor')), 'switched on: its section is in the right panel');
  ok(/Not a safety system/.test(await page.textContent('[data-ff-safety]')), 'the panel says it is not a safety system');

  await page.evaluate(() => window.ccFlow.example('line'));
  await page.waitForTimeout(3500);   // the add-on picks the stations up (cached read, every 3 s)
  await page.evaluate(() => window.ccFactory.ui().refresh());
  const ms = await page.evaluate(() => window.ccFactory.ui().machines().map((m) => ({ id: m.id, at: !!m.at, cycle: m.idealCycleS })));
  const nSt = await page.evaluate(() => window.ccFlow.layout().items.filter((i) => i.kind === 'station').length);
  ok(ms.length === nSt && nSt > 0 && ms.every((m) => m.at && m.cycle > 0), `the flow example's ${nSt} stations are machines with a place and an ideal cycle`, JSON.stringify(ms));
  await page.click('[data-ff-act="factory.m.allSim"]');
  await page.click('[data-ff-act="factory.mon.once"]');
  await page.waitForSelector('[data-ff-status] [data-ff-state]');
  const st1 = await page.$$eval('[data-ff-status] [data-ff-state]', (a) => a.map((x) => x.getAttribute('data-ff-state')));
  ok(st1.length === nSt && st1.every((s) => s === 'running'), 'Read once: every simulated machine reads as running', st1.join());
  // run the shop fast for a while and read again
  await page.selectOption('[data-ff-speed]', '600');
  await page.click('[data-ff-act="factory.mon.start"]');
  await page.waitForTimeout(6000);
  const oee = await page.evaluate(() => { const u = window.ccFactory.ui(); return u.machines().map((m) => u.recorder.oee(m.id, { idealCycleS: m.idealCycleS })); });
  ok(oee.every((o) => o.seen && o.total > 0 && o.oee > 0 && o.oee <= 1), 'Start reading at 600×: parts counted and an OEE for every machine', JSON.stringify(oee.map((o) => [o.total, o.oee && +o.oee.toFixed(3)])));
  ok(await page.$$eval('[data-ff-oee-row]', (r) => r.length) === nSt, 'the History and OEE table has a row per machine');
  ok(await page.evaluate(() => window.ccFactory.ui().monitor.values('station-1').some((v) => v.name === 'Sspeed')), 'values (spindle speed) read into lib/live\'s tag store');

  // the operator screen over the layout
  await page.check('[data-ff-overlay-on]');
  await page.click('.flow-p button:has-text("Zoom to layout")');
  await page.waitForTimeout(600);
  const tags = await page.evaluate(() => { const v = window.modelcraft.ui.over.getBoundingClientRect(); return [...document.querySelectorAll('[data-ff-tag]')].map((x) => { const b = x.getBoundingClientRect(); return { id: x.getAttribute('data-ff-tag'), w: b.width, inView: b.left >= v.left - 1 && b.right <= v.right + 200 && b.top >= v.top - 60 && b.bottom <= v.bottom + 1, text: x.textContent }; }); });
  ok(tags.length === nSt && tags.every((x) => x.w > 20 && x.inView && /parts/.test(x.text)), 'operator screen: a label drawn over each station in the 3D view, with its state and parts', JSON.stringify(tags.slice(0, 2)));
  await page.screenshot({ path: path.join(OUT, 'factory-operator-paper.png') });
  await page.click('[data-ff-act="factory.mon.stop"]');

  // a machine's settings: limits, writing off / ask / refused
  await page.click('[data-ff-pick="station-1"]');
  await page.waitForSelector('[data-ff-machine="station-1"]');
  ok(!(await page.isChecked('[data-ff-write-allow]')), 'writing is off for the device');
  await page.check('[data-ff-write-allow]');            // the dialog is accepted by the test
  await page.waitForSelector('[data-ff-write-node]');
  await page.fill('[data-ff-write-node]', 'ns=2;s=Override'); await page.fill('[data-ff-write-value]', '90');
  await page.click('[data-ff-act="factory.w.write"]');
  await page.waitForTimeout(200);
  ok(/no way to write/.test(await page.textContent('[data-ff-msg]')), 'a confirmed write is refused: no write channel exists');
  await page.uncheck('[data-ff-write-allow]');
  ok(await page.evaluate(() => window.ccFactory.ui().machines().find((m) => m.id === 'station-1').write === false), 'and it can be switched off again');
  // MTConnect source settings for one machine (the page cannot reach a plain-http agent: says so)
  await page.click('[data-ff-pick="station-1"]').catch(() => {});
  if (!(await page.$('[data-ff-machine="station-1"]'))) await page.click('[data-ff-pick="station-1"]');
  await page.selectOption('[data-ff-machine="station-1"] [data-ff-protocol]', 'mtconnect');
  await page.waitForSelector('[data-ff-base]');
  ok(/plain http/.test(await page.textContent('[data-ff-machine="station-1"]')), 'MTConnect in a web page: says plain-http agents need Studio');
  await page.click('[data-ff-act="factory.m.allSim"]');

  // job queue: a program file, check, Send through a stand-in for Studio's ccSendToMachine
  ok(/needs CadCraft Studio/.test(await page.textContent('[data-ff-jobs]')), 'without Studio: Send is not offered, the queue says why');
  const nc = path.join(OUT, 'Bracket.nc'); fs.writeFileSync(nc, 'G21\nG90\nG0 X0 Y0\nM30\n');
  const [fc] = await Promise.all([page.waitForEvent('filechooser'), page.click('[data-ff-act="factory.jobs.openProgram"]')]);
  await fc.setFiles(nc);
  await page.waitForSelector('[data-ff-job]');
  ok(await page.evaluate(() => window.ccFactory.ui().jobs().some((j) => j.file === 'Bracket.nc' && j.state === 'queued')), 'a program file is queued');
  await page.evaluate(() => { window.__sent = []; Object.defineProperty(window, 'ccSendToMachine', { value: async (o) => { window.__sent.push({ kind: o.kind, name: o.files[0].name, n: o.files[0].bytes.length, start: 'start' in o }); return { ok: true, sent: 1 }; }, configurable: true }); window.cadcraftDesktop = { machines: {} }; window.ccFactory.ui().refresh(); });
  await page.selectOption('[data-ff-job] select', 'station-2');
  await page.click('[data-ff-job] [data-ff-act="factory.jobs.send"]');
  await page.waitForTimeout(300);
  const sent = await page.evaluate(() => window.__sent);
  ok(sent.length === 1 && sent[0].kind === 'gcode' && sent[0].name === 'Bracket.nc' && !sent[0].start, 'Send hands the file to ccSendToMachine (stand-in), no start asked', JSON.stringify(sent));
  ok(await page.evaluate(() => window.ccFactory.ui().jobs().find((j) => j.file === 'Bracket.nc').state === 'sent'), 'the job is marked sent');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-ff-act="factory.oee.csv"]')]);
  const csv = fs.readFileSync(await dl.path(), 'utf8');
  ok(csv.startsWith('machine,period_s') && csv.split('\n').length > nSt, 'OEE CSV saves');
  const [dl2] = await Promise.all([page.waitForEvent('download'), page.click('[data-ff-act="factory.oee.states"]')]);
  ok(fs.readFileSync(await dl2.path(), 'utf8').includes('station-1,running,'), 'state history CSV saves');
  ok(await page.evaluate(() => { const f = window.modelcraft.file(); return !!(f.addons && f.addons.factory && f.addons.factory.setup && f.addons.factory.setup.jobs.length); }), 'the machine settings and the job queue are in the model file (addons.factory.setup)');
  ok(errors.length === 0, 'ModelCraft: no console errors', errors.slice(0, 3).join(' | '));

  // PartCraft: the tab, a posted program, the hand-over
  const pp = await ctx.newPage(); const perr = []; watch(pp, perr);
  await pp.goto(BASE + '/lab/partcraft', { waitUntil: 'networkidle' });
  await pp.waitForFunction(() => window.ccAddons && window.ccAddons.list && window.ccAddons.list().length > 0, null, { timeout: 30000 }).catch(() => {});
  await pp.evaluate(() => { const k = 'cc-addons:partcraft'; const v = JSON.parse(localStorage.getItem(k) || '{"off":{},"on":{}}'); v.on = { ...(v.on || {}), factory: true }; localStorage.setItem(k, JSON.stringify(v)); });
  await pp.reload({ waitUntil: 'networkidle' });
  await pp.waitForFunction(() => !!window.ccFactoryPart, null, { timeout: 30000 });
  ok(true, 'PartCraft: switched on, it activates');
  await pp.evaluate(() => window.dispatchEvent(new CustomEvent('cc-cam-posted', { detail: { app: 'partcraft', file: 'Part.nc', text: 'G21\nM30\n', post: 'generic', postName: 'Generic', part: 'Part' } })));
  await pp.evaluate(() => { const tab = [...document.querySelectorAll('[role=tab], .pc-tab, button')].find((b) => b.textContent.trim() === 'Factory floor'); if (tab) tab.click(); });
  await pp.waitForTimeout(300);
  ok(await pp.evaluate(() => !!document.querySelector('[data-ff-part]') && /Part\.nc/.test(document.querySelector('[data-ff-part]').textContent)), 'PartCraft: the Factory floor tab shows the last posted program');
  await pp.click('[data-ff-part] [data-ff-act="factory.part.queue"]');
  ok(await pp.evaluate(() => window.ccFactoryPart.outbox().length >= 1), 'Add to the factory job queue puts it in the hand-over outbox');
  ok(perr.length === 0, 'PartCraft: no console errors', perr.slice(0, 3).join(' | '));
  await pp.close();
  await page.evaluate(() => window.ccFactory.ui().refresh());
  const nJobs = await page.evaluate(() => window.ccFactory.ui().jobs().length);
  await page.click('[data-ff-act="factory.jobs.take"]');
  ok(await page.evaluate((n) => { const j = window.ccFactory.ui().jobs(); return j.length === n + 1 && j.at(-1).file === 'Part.nc' && j.at(-1).post === 'generic' && j.at(-1).from.app === 'partcraft'; }, nJobs), 'ModelCraft: Take jobs from PartCraft brings it into the queue');

  // switch off: overlay and handle go
  await page.evaluate(async () => { const a = window.ccAddons.loader; if (a.disable) await a.disable('factory'); else if (a.setEnabled) await a.setEnabled('factory', false); });
  await page.waitForTimeout(300);
  ok(await page.evaluate(() => !window.ccFactory && !document.querySelector('[data-ff-overlay]')), 'switched off: the operator screen and console handle are gone');
  await ctx.close();
} catch (e) {
  fail++; console.log('  FAIL threw — ' + (e.stack || e));
} finally {
  await browser.close();
  if (!KEEP_ADMIN) { try { execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'down']); } catch { /* best effort */ } }
  if (fs.existsSync(STATE)) fs.unlinkSync(STATE);
}
console.log(`\nfactory add-on in the browser: ${pass} passed, ${fail} failed (shots in ${OUT})`);
process.exit(fail ? 1 : 0);
