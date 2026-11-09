#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser.mjs — the Material flow add-on in /lab/modelcraft, headless Chromium (0.8 SU.858, session sx-flow). Run as root (it
 * uses ModelCraft's test admin, as tools/modelcraft-test/browser-print07.mjs does):
 *   node public_html/assets/apps/modelcraft/dev/addons/flow/test/browser.mjs [--out <dir>] [--keep-admin]
 * Session flow-08 adds: the layout kept in the .modelcraft file (ccDocData) and read back on open/New, dragging and placing with the
 * mouse (ids on the overlay meshes), Undo, the worker run with progress and Cancel, Live, and the shift calendars panel.
 * Checks: off by default; switched on it loads with no console errors; the panel section; both examples draw in the 3D view,
 * run, give results, play back (loads and vehicles drawn), CSV saves; a layout file round trip; switching off removes it all.
 * Screenshots (paper and model) in --out (default tmp/shots/sx-flow).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../../../..');
const BASE = 'https://getcadcraft.com';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(arg('--out', path.join(REPO, 'tmp/shots/sx-flow')));
const KEEP_ADMIN = process.argv.includes('--keep-admin');
const STATE = path.join(REPO, 'tmp/sx-flow-browser-state.json');
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

try {
  const ctx = await signedIn();
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().length > 0, null, { timeout: 30000 });
  const listed = await page.evaluate(() => window.ccAddons.list().map((a) => ({ id: a.id, state: a.state })));
  const f0 = listed.find((a) => a.id === 'flow');
  ok(f0 && f0.state !== 'active' && !(await page.evaluate(() => !!window.ccFlow)), 'bundled, found, and off by default', JSON.stringify(listed));

  // switch it on (as Settings › Add-ons does: remembered per app) and reload
  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.ccFlow, null, { timeout: 30000 });
  ok(true, 'switched on, it activates');
  const section = await page.evaluate(() => [...document.querySelectorAll('main aside *')].some((e) => e.textContent.trim() === 'Material flow'));
  ok(section, 'its section is in the right panel');

  // the shell folds add-on panel sections to one open at a time (app-settings.js af-*): open the one a step needs
  const openSec = (title) => page.evaluate((tt) => { const h = [...document.querySelectorAll('main aside .shell-addon-section-h')].find((x) => x.textContent.trim().startsWith(tt)); if (!h) return false; if (h.nextElementSibling.classList.contains('af-collapsed')) h.click(); return true; }, title);

  // example line: draws, runs, results, playback
  await page.evaluate(() => window.ccFlow.example('line'));
  await page.waitForTimeout(300);
  const drawn = await page.evaluate(() => window.modelcraft.view.scene.children.some((o) => o.name === 'flow-layout' && o.children.length > 20));
  ok(drawn, 'the example line is drawn in the 3D view');
  await openSec('Material flow');
  await page.click('.flow-p button.primary:has-text("Run")');
  await page.waitForFunction(() => window.ccFlow.result() && window.ccFlow.result().elements, null, { timeout: 60000 });
  const r = await page.evaluate(() => { const r = window.ccFlow.result(); return { ok: r.ok, done: r.done, perHour: r.perHour }; });
  ok(r.ok && r.done > 1000 && Math.abs(r.perHour - 180) < 15, 'Run: 8 hours simulated, ~180 loads an hour', JSON.stringify(r));
  const results = await page.evaluate(() => [...document.querySelectorAll('.flow-p legend')].some((l) => l.textContent === 'Results') && document.querySelectorAll('.flow-p details').length > 10);
  ok(results, 'results table and per-element details in the panel');
  await page.evaluate(() => window.ccFlow.showAt(1800));
  const f = await page.evaluate(() => window.ccFlow.frame(1800));
  const inst = await page.evaluate(() => { const g = window.modelcraft.view.scene.children.find((o) => o.name === 'flow-playback'); return g ? g.children.reduce((a, m) => a + (m.count || 0), 0) : 0; });
  ok(f.loads.length > 0 && inst === f.loads.length, 'playback at 0:30:00 draws every load of the frame', `${f.loads.length} ${inst}`);
  await page.click('.flow-p button:has-text("Play")');
  await page.waitForTimeout(800);
  const moved = await page.evaluate(() => Number(document.querySelector('.flow-p input[type=range]').value));
  ok(moved > 1800, 'Play moves the timeline on', String(moved));
  await page.click('.flow-p button:has-text("Pause")');
  await page.click('.flow-p button:has-text("Zoom to layout")');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT, 'flow-line-paper.png') });
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('.flow-p button:has-text("Save results as CSV")')]);
  const csv = fs.readFileSync(await dl.path(), 'utf8');
  ok(dl.suggestedFilename() === 'flow-results.csv' && csv.startsWith('element,kind,measure,value') && csv.includes('station-1,station,utilisation,'), 'CSV saves with the station rows');

  // layout file round trip
  const [dl2] = await Promise.all([page.waitForEvent('download'), page.click('.flow-p button:has-text("Save…")')]);
  const saved = JSON.parse(fs.readFileSync(await dl2.path(), 'utf8'));
  ok(saved.format === 'cadcraft-flow' && saved.items.length > 15, 'Save writes a cadcraft-flow layout');
  await page.evaluate(() => window.ccFlow.example('agv'));
  const [fc] = await Promise.all([page.waitForEvent('filechooser'), page.click('.flow-p button:has-text("Open…")')]);
  await fc.setFiles(await dl2.path());
  await page.waitForTimeout(400);
  ok(await page.evaluate((n) => window.ccFlow.layout().items.length === n && window.ccFlow.layout().items.some((i) => i.kind === 'merge'), saved.items.length), 'Open reads it back');

  // add from the catalog: a conveyor after the sink is refused (no output); after the last free output it joins
  const before = await page.evaluate(() => window.ccFlow.layout().items.length);
  await page.selectOption('.flow-p select[aria-label="Item"]', 'buffer');
  await page.click('.flow-p button:has-text("Add")');
  ok(await page.evaluate((n) => window.ccFlow.layout().items.length === n + 1, before), 'Add puts a catalog item in the layout');

  // the AGV example in model space
  await page.evaluate(() => window.ccFlow.example('agv'));
  await page.click('.flow-p button.primary:has-text("Run")');
  await page.waitForFunction(() => window.ccFlow.result() && window.ccFlow.result().vehicles.length === 2, null, { timeout: 60000 });
  await page.evaluate(() => window.ccFlow.showAt(900));
  const fa = await page.evaluate(() => window.ccFlow.frame(900));
  ok(fa.vehicles.length === 2, 'AGV example: two vehicles drawn in playback');
  await page.evaluate(() => { document.documentElement.dataset.space = 'model'; });
  await page.click('.flow-p button:has-text("Zoom to layout")');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT, 'flow-agv-model.png') });


  // ---- flow-08: the layout in the model file, the mouse, undo, worker run, cancel, live, shifts ----
  await page.evaluate(() => window.ccFlow.example('line'));
  await page.waitForTimeout(400);
  const nItems = await page.evaluate(() => window.ccFlow.layout().items.length);
  const inFile = await page.evaluate(() => { const f = window.modelcraft.file(); const l = f.addons && f.addons.flow && f.addons.flow.layout; return l ? l.items.length : -1; });
  ok(inFile === nItems, 'the layout is in the model file (addons.flow.layout)', `${inFile} vs ${nItems}`);
  const reopened = await page.evaluate(() => {
    const dd = window.modelcraft.docData(), keep = JSON.parse(JSON.stringify(dd.toJSON()));
    dd.load(null);                                   // New
    const afterNew = window.ccFlow.layout().items.length;
    dd.load(keep);                                   // a file with the layout opens
    return { afterNew, afterOpen: window.ccFlow.layout().items.length };
  });
  ok(reopened.afterNew === 0 && reopened.afterOpen === nItems, 'New clears the layout; opening a file brings its layout back', JSON.stringify(reopened));
  const pass = await page.evaluate(() => { const dd = window.modelcraft.docData(); dd.load({ other: { k: 1 } }); const a = JSON.stringify(dd.toJSON()); return a; });
  ok(pass.includes('"other"'), 'data of other add-ons passes through untouched');
  await page.evaluate(() => window.ccFlow.example('line'));
  await page.waitForTimeout(300);

  // dragging with the mouse
  const stx = await page.evaluate(() => window.ccFlow.layout().items.find((i) => i.id === 'station-1').x);
  const sp = await page.evaluate(() => window.ccFlow.screenOf('station-1'));
  ok(sp && sp.x > 0, 'an item has a place on the screen', JSON.stringify(sp));
  await page.mouse.move(sp.x, sp.y); await page.mouse.down(); await page.mouse.move(sp.x + 40, sp.y + 10, { steps: 6 }); await page.mouse.move(sp.x + 80, sp.y + 20, { steps: 6 });
  const dragging = await page.evaluate(() => window.ccFlow.selected());
  await page.mouse.up();
  const stx2 = await page.evaluate(() => window.ccFlow.layout().items.find((i) => i.id === 'station-1').x);
  ok(dragging === 'station-1' && Math.abs(stx2 - stx) > 0.05, 'dragging an item moves it', `${stx} → ${stx2}`);
  ok(await page.evaluate(() => window.ccFlow.history().canUndo), 'and is one undo step');
  await page.evaluate(() => window.ccFlow.undo());
  const stx3 = await page.evaluate(() => window.ccFlow.layout().items.find((i) => i.id === 'station-1').x);
  ok(Math.abs(stx3 - stx) < 1e-9 && await page.evaluate(() => window.ccFlow.history().canRedo), 'Undo puts it back; Redo is on');
  // Shift-drag moves the whole line
  const x0 = await page.evaluate(() => window.ccFlow.layout().items.map((i) => i.x));
  const sp2 = await page.evaluate(() => window.ccFlow.screenOf('station-1'));
  await page.keyboard.down('Shift');
  await page.mouse.move(sp2.x, sp2.y); await page.mouse.down(); await page.mouse.move(sp2.x + 30, sp2.y, { steps: 5 }); await page.mouse.up();
  await page.keyboard.up('Shift');
  const x1 = await page.evaluate(() => window.ccFlow.layout().items.map((i) => i.x));
  ok(x0.every((v, i) => Math.abs(x1[i] - v) > 0.01), 'Shift-drag moves everything joined to the item');
  ok(await page.evaluate(() => { const L = window.ccFlow.layout(); return L.items.length > 15; }), 'the whole line is still there');
  await page.evaluate(() => window.ccFlow.undo());
  // placing with the mouse
  const before2 = await page.evaluate(() => window.ccFlow.layout().items.length);
  await page.evaluate(() => window.ccFlow.arm('buffer'));
  const spot = await page.evaluate(() => { const r = window.modelcraft.ui.over.getBoundingClientRect(); return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.9 }; });
  await page.mouse.click(spot.x, spot.y);
  ok(await page.evaluate((n) => window.ccFlow.layout().items.length === n + 1, before2) && await page.evaluate(() => window.ccFlow.armed() === 'buffer'), 'Place with mouse: a click adds the item and keeps placing');
  await page.keyboard.press('Escape');
  ok(await page.evaluate(() => window.ccFlow.armed() === null), 'Esc stops placing');
  await page.evaluate(() => window.ccFlow.undo());   // the loose buffer would be an unlinked port: take it back
  ok(await page.evaluate((n) => window.ccFlow.layout().items.length === n, before2), 'and Undo takes the placed item back');

  // run in a worker with progress; cancel
  await page.evaluate(() => { const L = window.ccFlow.layout(); L.run.hours = 8; });
  await page.click('.flow-p button.primary:has-text("Run")');
  await page.waitForFunction(() => window.ccFlow.result() && window.ccFlow.result().elements, null, { timeout: 60000 });
  const msgText = await page.evaluate(() => (document.querySelector('.flow-p .msg[role=status]') || {}).textContent || '');
  ok(/Simulated 8 h/.test(msgText) && !/page itself/.test(msgText), 'Run happened in a worker', msgText);
  await page.evaluate(() => { window.ccFlow.layout().run.hours = 10000; });
  await page.click('.flow-p button.primary:has-text("Run")');
  await page.waitForFunction(() => !!document.querySelector('.flow-p progress'), null, { timeout: 10000 });
  ok(await page.evaluate(() => window.ccFlow.running()), 'a long run shows a progress bar while it works');
  await page.waitForTimeout(600);
  await page.click('.flow-p button:has-text("Cancel")');
  await page.waitForFunction(() => !window.ccFlow.running(), null, { timeout: 10000 });
  ok(/cancelled/i.test(await page.evaluate(() => (document.querySelector('.flow-p .msg[role=status]') || {}).textContent || '')), 'Cancel stops it and says so');
  await page.evaluate(() => { window.ccFlow.layout().run.hours = 1; });
  // live
  await page.evaluate(() => window.ccFlow.live());
  await page.waitForTimeout(1500);
  const liveOn = await page.evaluate(() => { const g = window.modelcraft.view.scene.children.find((o) => o.name === 'flow-playback'); return { live: window.ccFlow.isLive(), n: g ? g.children.reduce((a, m) => a + (m.count || 0), 0) : 0 }; });
  ok(liveOn.live && liveOn.n > 0, 'Live: the model runs in real time and draws loads', JSON.stringify(liveOn));
  await page.click('.flow-p button:has-text("Stop live")');
  ok(!(await page.evaluate(() => window.ccFlow.isLive())), 'Stop live');
  // shifts
  await page.click('.flow-p button:has-text("Add a shift calendar")');
  ok(await page.evaluate(() => window.ccFlow.layout().calendars.length === 1 && window.ccFlow.layout().calendars[0].windows.length === 1), 'a shift calendar is added with a Mon–Fri window');
  await page.evaluate(() => { const L = JSON.parse(JSON.stringify(window.ccFlow.layout())); const st = L.items.find((i) => i.id === 'station-1'); st.params.calendar = 'shift-1'; st.params.mtbf = 2; L.run.hours = 24; window.ccFlow.load(L); });
  await page.click('.flow-p button.primary:has-text("Run")');
  await page.waitForFunction(() => window.ccFlow.result() && window.ccFlow.result().elements, null, { timeout: 60000 });
  const st = await page.evaluate(() => window.ccFlow.result().elements['station-1']);
  ok(st.calendarOpen > 0.2 && st.calendarOpen < 0.4 && st.availability < 1 && st.failures > 0, 'a station on a shift calendar with breakdowns reports both', JSON.stringify([st.calendarOpen, st.availability, st.failures]));

  // robot cell (0.9 SU.1128): add a SCARA to the AGV/line example, check reach, run the sample program, export, use the cycle time
  await page.evaluate(() => window.ccFlow.example('line'));
  await page.waitForTimeout(300);
  ok(await page.evaluate(() => [...document.querySelectorAll('main aside *')].some((e) => e.textContent.trim() === 'Robot cell')), 'the Robot cell section is in the right panel');
  await openSec('Robot cell');
  await page.click('.flow-robot button.primary:has-text("Add robot cell")');
  await page.waitForSelector('.flow-robot textarea');
  ok((await page.inputValue('.flow-robot textarea')).startsWith('CCROBOT 1'), 'a sample program is written');
  await page.click('.flow-robot button:has-text("Run program")');
  await page.waitForSelector('.flow-robot legend:has-text("Result")');
  const rtxt = await page.evaluate(() => [...document.querySelectorAll('.flow-robot .msg')].map((e) => e.textContent).join(' | '));
  ok(/Not reachable|Reachable/.test(await page.evaluate(() => document.querySelector('.flow-robot').textContent)), 'the reach list shows stations', rtxt);
  // move the robot next to the first station so the program can run
  const st1 = await page.evaluate(() => { const i = window.ccFlow.layout().items.find((x) => x.kind === 'station'); return { x: i.x, y: i.y }; });
  await page.fill('.flow-robot label:has-text("(m)") input >> nth=0', String(st1.x + 0.1));
  await page.dispatchEvent('.flow-robot label:has-text("(m)") input >> nth=0', 'change');
  await page.fill('.flow-robot label:has-text("(m)") input >> nth=1', String(st1.y + 0.1));
  await page.dispatchEvent('.flow-robot label:has-text("(m)") input >> nth=1', 'change');
  await page.click('.flow-robot button:has-text("Run program")');
  await page.waitForTimeout(300);
  const rres = await page.evaluate(() => document.querySelector('.flow-robot').textContent);
  ok(/Cycle time: [\d.]+ s|Stopped after/.test(rres), 'Run program reports a cycle time or says why it stopped', rres.slice(0, 300));
  const [dlr] = await Promise.all([page.waitForEvent('download'), page.click('.flow-robot button:has-text("Save program text")')]);
  ok(fs.readFileSync(await dlr.path(), 'utf8').startsWith('CCROBOT 1'), 'Save program text writes the neutral program');

  // robot formats (0.9 SU.1128, owner 2026-11-06): URScript is not offered for a SCARA; pick the 6-axis model, tick formats, save them
  ok(await page.evaluate(() => document.querySelector('.flow-robot [data-format="urscript"]').disabled), 'SCARA: URScript is greyed out');
  ok(await page.evaluate(() => document.querySelector('.flow-robot [data-format="csv"]').disabled && document.querySelector('.flow-robot [data-format="csv"]').checked), 'the path list is always ticked');
  await page.selectOption('.flow-robot select[aria-label="Robot model"]', 'generic-arm6');
  await page.click('.flow-robot button:has-text("Use this model")');
  await page.waitForSelector('.flow-robot [data-format="urscript"]:not([disabled])');
  ok(true, '6-axis model: URScript can be ticked');
  await page.fill('.flow-robot label:has-text("(m)") input >> nth=0', '0'); await page.dispatchEvent('.flow-robot label:has-text("(m)") input >> nth=0', 'change');
  await page.fill('.flow-robot label:has-text("(m)") input >> nth=1', '0'); await page.dispatchEvent('.flow-robot label:has-text("(m)") input >> nth=1', 'change');
  await page.fill('.flow-robot label:has-text("(m)") input >> nth=2', '0'); await page.dispatchEvent('.flow-robot label:has-text("(m)") input >> nth=2', 'change');
  await page.fill('.flow-robot textarea', 'CCROBOT 1\npoint A 0.4 0.2 0.1\npoint B 0.4 -0.2 0.1\nhome\npick A\nplace B\nhome\n');
  await page.dispatchEvent('.flow-robot textarea', 'input');
  for (const id of ['urdf', 'trajectory', 'urscript']) await page.check(`.flow-robot [data-format="${id}"]`);
  ok(await page.evaluate(() => document.querySelector('.flow-robot details summary + p, .flow-robot details') !== null), 'joint table and sources are in the panel');
  const files = {};
  page.on('download', async (d) => { files[d.suggestedFilename()] = fs.readFileSync(await d.path(), 'utf8'); });
  await page.click('.flow-robot button[data-action="save-formats"]');
  await page.waitForTimeout(1500);
  const names = Object.keys(files);
  ok(names.length === 5, 'five files saved (path list x2, URDF, trajectory, URScript)', names.join(', '));
  const fx = (ext) => files[names.find((n) => n.endsWith(ext))] || '';
  ok(fx('.urdf').startsWith('<?xml') && fx('.urdf').includes('<robot name="R1">') && fx('.urdf').trim().endsWith('</robot>'), 'URDF file is XML with the robot');
  ok(fx('.script').includes('def cadcraft_cell():') && fx('.script').includes('Generated by CadCraft; simulate and verify on your robot controller before running; not endorsed by the vendor'), 'URScript file has the program and the not-verified line');
  ok(JSON.parse(fx('.trajectory.json')).joint_names.length === 6, 'trajectory file has six joint names');
  ok(JSON.parse(files[names.find((n) => n.endsWith('.json') && !n.endsWith('.trajectory.json'))] || '{}').steps.length > 5, 'path list JSON has the steps');
  ok(await page.evaluate(() => ['urdf', 'trajectory', 'urscript'].every((id) => document.querySelector(`.flow-robot [data-format="${id}"]`).checked)), 'the ticked formats stay ticked');
  ok(/Saved/.test(await page.evaluate(() => document.querySelector('.flow-robot-formats').textContent)), 'the panel says what was saved');
  ok(await page.evaluate(() => /ABB RAPID/.test(document.querySelector('.flow-robot-formats').textContent) && /Sources and formats left out/.test(document.querySelector('.flow-robot-formats').textContent)), 'sources and the languages left out are listed');

  ok(errors.length === 0, 'no console errors', errors.slice(0, 3).join(' | '));

  // switch it off: its 3D groups and panel go
  await page.evaluate(async () => { const a = window.ccAddons.loader; if (a.disable) await a.disable('flow'); else if (a.setEnabled) await a.setEnabled('flow', false); });
  await page.waitForTimeout(300);
  const gone = await page.evaluate(() => !window.ccFlow && !window.modelcraft.view.scene.children.some((o) => /^flow-/.test(o.name)));
  ok(gone, 'switched off: its 3D marks and console handle are gone');
  await ctx.close();
} catch (e) {
  fail++; console.log('  FAIL threw — ' + (e.stack || e));
} finally {
  await browser.close();
  if (!KEEP_ADMIN) { try { execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'down']); } catch { /* best effort */ } }
  if (fs.existsSync(STATE)) fs.unlinkSync(STATE);
}
console.log(`\nflow add-on in the browser: ${pass} passed, ${fail} failed (shots in ${OUT})`);
process.exit(fail ? 1 : 0);
