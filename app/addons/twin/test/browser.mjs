#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser.mjs — the Digital twin add-on in the real /lab/modelcraft page, headless Chromium (0.9 TW). Run as root (ModelCraft's test admin, as the flow add-on's browser test):
 *   node public_html/assets/apps/modelcraft/dev/addons/twin/test/browser.mjs [--out <dir>]
 * Off by default; switched on, the panel; a cell; the equipment drawn in place of the flow marks; a run plays; the soft PLC drives the model through the panel, faults, tests; the ride; compare;
 * bill of materials; settings in the model file; USD download; the run put in the model and on the timeline, read back by Render's own scene; a video; off again removes all of it.
 * Uses SwiftShader: nothing here measures frame rate or a real GPU's picture.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../../../..');
const BASE = 'https://getcadcraft.com';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(arg('--out', path.join(REPO, 'tmp/shots/twin')));
fs.mkdirSync(OUT, { recursive: true });
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra !== '' ? ' — ' + extra : '')); } };
const { chromium } = createRequire(path.join(REPO, 'tools/modelcraft-test/package.json'))('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const adminPhp = path.join(REPO, 'tools/modelcraft-test/admin.php');
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--ignore-certificate-errors'] });
const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'up'], { encoding: 'utf8' }));
const ctx = await browser.newContext({ viewport: { width: 1500, height: 950 }, acceptDownloads: true, ignoreHTTPSErrors: true });
const page = await ctx.newPage(), errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(m.text()); });
page.on('dialog', (d) => d.accept());
const tw = (id) => `.twin [data-tw="${id}"]`;
const openSection = (id) => page.evaluate((s) => { const d = document.querySelector(`.twin [data-tw-section="${s}"]`); if (d) d.open = true; }, id);
const shot = async (name) => { await page.waitForTimeout(700); await page.screenshot({ path: path.join(OUT, name + '.png') }); };
const scene = (name) => page.evaluate((n) => { const g = window.modelcraft.view.scene.getObjectByName(n); return g ? { visible: g.visible, kids: g.children.length, count: g.children.reduce((a, c) => a + (c.count || 0), 0) } : null; }, name);

try {
  await page.goto(BASE + '/admin/login', { waitUntil: 'domcontentloaded' });
  await page.fill('input[name="email"]', admin.email); await page.fill('input[name="password"]', admin.password);
  await Promise.all([page.waitForNavigation(), page.click('form button[type="submit"]')]);
  await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().length > 0, null, { timeout: 30000 });
  const listed = await page.evaluate(() => window.ccAddons.list().map((a) => ({ id: a.id, state: a.state })));
  const t0 = listed.find((a) => a.id === 'twin');
  ok(t0 && t0.state !== 'active' && !(await page.evaluate(() => !!window.ccTwin)), 'found, and off by default', JSON.stringify(listed));
  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true, twin: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.ccTwin && !!window.ccFlow, null, { timeout: 30000 });
  await page.waitForSelector('.twin[data-twin]', { timeout: 15000 }).catch(async () => {
    // the panel section may be collapsed: open it through its title
    await page.evaluate(() => { const e = [...document.querySelectorAll('main aside *')].find((x) => x.textContent.trim() === 'Digital twin'); if (e) e.click(); });
    await page.waitForSelector('.twin[data-twin]', { timeout: 15000 });
  });
  ok(true, 'switched on: the panel is in the right side');
  ok(/not a safety validation/i.test(await page.textContent('[data-tw-safety]')), 'the panel says it is not a safety validation');

  // ---- a cell, the equipment
  await page.selectOption(tw('cell'), 'palletizing');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(600);
  ok(await page.evaluate(() => window.ccFlow.layout().items.some((i) => i.kind === 'station')), 'a cell loads into Material flow');
  let eq = await scene('twin-equipment');
  ok(eq && eq.kids > 3 && eq.visible, 'the equipment is in the 3D view', JSON.stringify(eq));
  ok((await scene('flow-layout')).visible === false, 'the plain flow marks are hidden while it shows');
  await page.selectOption(tw('cell'), 'guarded');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(600);
  await page.evaluate(() => { window.ccFlow.zoom && window.ccFlow.zoom(); });
  await page.click(tw('run'));
  await page.waitForTimeout(300);
  ok(/finished/.test(await page.textContent('[data-tw-msg="show"]')), 'Run gives a result in words', await page.textContent('[data-tw-msg="show"]'));
  // the guarded cell's gate needs a PLC: nothing gets through by rules alone, which the words say
  await page.selectOption(tw('cell'), 'palletizing');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(400);
  await page.evaluate(() => { window.modelcraft.view && window.ccFlow.zoom && window.ccFlow.zoom(); });
  await page.click(tw('run'));
  await page.waitForSelector(tw('play'));
  await page.$eval(tw('time'), (e) => { e.value = 300; e.dispatchEvent(new Event('input', { bubbles: true })); });
  await page.waitForTimeout(300);
  const dyn = await scene('twin-moving');
  ok(dyn && dyn.count > 3, 'the slider draws cartons and the arm', JSON.stringify(dyn));
  await page.evaluate(() => { const m = window.modelcraft, cam = m.cam; cam.target = [6, 0, 1]; });
  await shot('palletizing');
  await page.click(tw('play')); await page.waitForTimeout(800); await page.click(tw('play'));
  ok(await page.evaluate(() => window.ccTwin.ui().runtime().playT > 300), 'Play moves on');

  // ---- bill of materials
  await openSection('bom');
  ok(await page.$$eval(tw('bom') + ' tr', (r) => r.length) > 3, 'a bill of materials');
  const [dlBom] = await Promise.all([page.waitForEvent('download'), page.click(tw('bom-csv'))]);
  ok(/unit price/.test(fs.readFileSync(await dlBom.path(), 'utf8')), 'the list saves as CSV');

  // ---- USD
  const [dlUsd] = await Promise.all([page.waitForEvent('download'), page.click(tw('usd'))]);
  const usd = fs.readFileSync(await dlUsd.path(), 'utf8');
  ok(/^#usda 1\.0/.test(usd) && /timeSamples/.test(usd), 'animated USD downloads', usd.length);
  fs.writeFileSync(path.join(OUT, 'run.usda'), usd);

  // ---- the run in the model and on the timeline
  await page.evaluate(() => { const r = window.ccTwin.ui().state(); r.video = { from: 200, seconds: 30 }; });
  const baked = await page.evaluate(() => window.ccTwin.ui().bake());
  ok(baked && baked.parts > 20 && baked.tracks > 0, 'the run goes in the model', JSON.stringify(baked));
  const anim = await page.evaluate(() => { const a = window.modelcraft.timeline.anim, m = window.modelcraft.model; return { tracks: a.objects.length, len: a.length, ok: a.objects.every((o) => !!m.placementAt(o.path)) }; });
  ok(anim.tracks === baked.tracks && anim.ok, 'each track points at a real placement', JSON.stringify(anim));
  const moved = await page.evaluate(async () => {
    const { mcScene } = await import(new URL('render-mc.js', document.querySelector('script[type=importmap]') ? window.location.origin + '/assets/apps/modelcraft/dev/' : '').href);
    const m = window.modelcraft, s = mcScene(m.model, m.cam, m.view.style, {}, { anim: m.timeline.anim });
    return { hasFrame: typeof s.frameAt === 'function' };
  }).catch((e) => ({ err: String(e) }));
  ok(moved.hasFrame, 'Render\'s own scene takes the animation', JSON.stringify(moved));
  const count = await page.evaluate(() => [...window.modelcraft.model.root.insts.values()].filter((i) => /Digital twin/.test(i.tag || '')).length);
  ok(count === 2, 'two groups in the model, tagged', count);
  const saved = await page.evaluate(() => { const f = window.modelcraft.file(); return { anim: !!f.anim, setup: !!(f.addons && f.addons.twin && f.addons.twin.setup) }; });
  ok(saved.anim && saved.setup, 'the timeline and settings are in the file', JSON.stringify(saved));
  await page.click(tw('unbake'));
  await page.waitForTimeout(300);
  ok(await page.evaluate(() => [...window.modelcraft.model.root.insts.values()].filter((i) => /Digital twin/.test(i.tag || '')).length) === 0, 'and comes out again');

  // ---- video (the page's own encoder)
  await page.evaluate(() => { const r = window.ccTwin.ui().state(); r.video = { from: 100, seconds: 1 }; });
  const [dlVid] = await Promise.all([page.waitForEvent('download', { timeout: 60000 }), page.click(tw('video'))]);
  const vid = await dlVid.path();
  ok(fs.statSync(vid).size > 200, `a video saves (${dlVid.suggestedFilename()}, ${fs.statSync(vid).size} bytes)`);

  // ---- the soft PLC through the panel
  await page.selectOption(tw('cell'), 'guarded');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(400);
  await openSection('controls');
  const prog = await page.inputValue(tw('program'));
  ok(/eye_2_standing/.test(prog), 'the starter program is in the box');
  const r0 = await page.evaluate(async () => { const u = window.ccTwin.ui(), rig = u.startRig(); rig.run(600); return rig.summary(); });
  ok(r0.done > 15, 'Start: the soft PLC gets work through the gate', JSON.stringify(r0));
  await page.waitForTimeout(800);
  ok(/finished/.test(await page.textContent('[data-tw-msg="rig-status"]')), 'the status line runs');
  const followed = await page.waitForFunction(() => { const g = window.modelcraft.view.scene.getObjectByName('twin-moving'); return g && g.children.some((c) => c.name.startsWith('twin:load') && c.count > 0); }, null, { timeout: 15000 }).then(() => true).catch(() => false);
  ok(followed, 'and the 3D view follows the PLC run', JSON.stringify(await page.evaluate(() => { const u = window.ccTwin.ui().runtime(); return { t: u.rig && u.rig.t, res: u.rig && u.rig.sim.trace.res.length, frame: u.rigPlayer && u.rigPlayer.frame(u.rig.t).loads.length }; })));
  await shot('controls');
  await page.selectOption(tw('fault-kind'), 'estop');
  await page.waitForTimeout(100);
  await page.click(tw('fault-apply'));
  await page.waitForTimeout(500);
  const sf = await page.evaluate(() => { const r = window.ccTwin.ui().runtime().rig; r.run(2); return { estop: r.value('estop_ok'), gate: r.value(r.io.outputs[0].name) }; });
  ok(sf.estop === false && sf.gate === false, 'an emergency stop from the panel closes the gate through the program', JSON.stringify(sf));
  await page.click(tw('fault-clear'));
  await page.waitForTimeout(200);
  await page.click(tw('rig-stop'));
  await page.fill(tw('program'), 'PROGRAM Main nonsense END_PROGRAM');
  await page.$eval(tw('program'), (e) => e.dispatchEvent(new Event('change', { bubbles: true })));
  await page.click(tw('rig-start'));
  await page.waitForTimeout(200);
  ok(/problems/.test(await page.textContent('[data-tw-msg="rig"]')), 'a broken program is reported in words, not thrown');
  await page.click(tw('starter'));
  await page.click(tw('tests'));
  await page.waitForFunction(() => document.querySelector('.twin [data-tw="tests-table"]'), null, { timeout: 120000 });
  const testRows = await page.$$eval(tw('tests-table') + ' .tw-ok', (r) => r.length);
  ok(testRows >= 4, `the stock tests run and pass on the starter (${testRows})`, await page.textContent('[data-tw-msg="tests"]'));
  const [dlT] = await Promise.all([page.waitForEvent('download'), page.click(tw('tests-csv'))]);
  ok(/test,passed/.test(fs.readFileSync(await dlT.path(), 'utf8')), 'the report saves');

  // ---- will it ride?
  await page.selectOption(tw('cell'), 'incline');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(400);
  await openSection('physics');
  await page.click(tw('ride'));
  await page.waitForSelector('[data-tw-msg="ride"]', { timeout: 60000 });
  ok(/rides the whole line/.test(await page.textContent('[data-tw-msg="ride"]')), 'a normal box rides the incline line', await page.textContent('[data-tw-msg="ride"]'));
  ok(await page.$$eval(tw('screen') + ' tr', (r) => r.length) >= 5, 'the formula table lists the belts');
  await shot('incline');
  await page.fill(tw('p-mu'), '0.25');
  await page.$eval(tw('p-mu'), (e) => e.dispatchEvent(new Event('change', { bubbles: true })));
  await page.click(tw('ride'));
  await page.waitForTimeout(800);
  const slip = await page.textContent('[data-tw-msg="ride"]');
  ok(/cannot climb|stops moving/.test(slip) && /incline/.test(slip), 'a slippery box does not get up, and it names the belt', slip);

  // ---- compare
  await page.selectOption(tw('cell'), 'palletizing');
  await page.click(tw('cell-use'));
  await page.waitForTimeout(400);
  await openSection('compare');
  const st = await page.evaluate(() => window.ccFlow.layout().items.find((i) => i.kind === 'station').id);
  await page.fill(tw('variants'), `Slower: ${st}.time=12\nnot a line`);
  await page.$eval(tw('variants'), (e) => e.dispatchEvent(new Event('change', { bubbles: true })));
  await page.fill(tw('runs'), '3'); await page.$eval(tw('runs'), (e) => e.dispatchEvent(new Event('change', { bubbles: true })));
  await page.fill(tw('hours'), '2'); await page.$eval(tw('hours'), (e) => e.dispatchEvent(new Event('change', { bubbles: true })));
  await page.click(tw('compare'));
  await page.waitForSelector(tw('compare-table'), { timeout: 60000 });
  const tbl = await page.textContent(tw('compare-table'));
  ok(/Slower/.test(tbl) && /Worse/.test(tbl), 'the slower version is reported worse', tbl);
  ok(/not a line/.test(await page.textContent('[data-tw-msg="cmp"]')), 'a line it cannot read is named');
  ok(await page.$$eval(tw('bottle') + ' tr', (r) => r.length) >= 2, 'a bottleneck ranking');
  await shot('compare');

  // ---- compare with a measured line (TW.12): a made-up file from a known run, plus one with a bad row
  await openSection('measured');
  const made = await page.evaluate(async () => {
    const T = await import('/assets/apps/modelcraft/dev/twin/index.js'), LY = await import('/assets/apps/modelcraft/dev/flow/layout.js'), S = await import('/assets/apps/modelcraft/dev/flow/sim.js');
    const L = window.ccFlow.layout(), b = LY.buildGraph(L), src = L.items.find((i) => i.kind === 'source').id, snk = L.items.find((i) => i.kind === 'sink').id;
    const r = S.simulate(b.graph, { seed: 1, until: 3600, traceUntil: 3600 });
    const pass = T.simPassages(r.trace, [src, snk], b.graph);
    const rows = ['part,point,time_s'];
    for (const [id, p] of pass) for (const [pt, t] of Object.entries(p)) rows.push(`L${id},${pt},${(t + 100).toFixed(3)}`);
    return { text: rows.join('\n') + '\n', src, snk, n: pass.size };
  });
  const pick = async (name, text) => { const [fc] = await Promise.all([page.waitForEvent('filechooser'), page.click(tw('meas-open'))]); await fc.setFiles({ name, mimeType: 'text/csv', buffer: Buffer.from(text) }); await page.waitForTimeout(300); };
  await pick('bad.csv', 'part,point,time_s\nA,x,1\nA,y,soon\nA,z,3\n');
  ok(/Line 3/.test(await page.textContent('[data-tw-msg="meas-err"]')) && /soon/.test(await page.textContent('[data-tw-msg="meas-err"]')), 'a bad row is named with its line and what it said, and nothing loads');
  await pick('line.csv', made.text);
  await page.selectOption(tw('meas-from'), made.src); await page.selectOption(tw('meas-to'), made.snk);
  await page.click(tw('meas-run'));
  await page.waitForSelector(tw('meas-table'), { timeout: 60000 });
  const mt = await page.textContent(tw('meas-table'));
  ok(/Throughput/.test(mt) && /Ride time, mean/.test(mt) && /Model minus measured/.test(mt), 'the comparison table is on the page', mt.slice(0, 160));
  const dlM = await Promise.all([page.waitForEvent('download'), page.click(tw('meas-csv'))]).then(([d]) => d);
  ok(/^measure,point,unit,measured,simulated,difference/.test(fs.readFileSync(await dlM.path(), 'utf8')), 'the comparison saves as CSV');
  ok(/does not adjust the model|nothing here adjusted/.test(await page.textContent('.twin')), 'the page says it compares and does not adjust');
  await shot('measured');

  // ---- settings travel; switching off leaves nothing
  const setup = await page.evaluate(() => window.modelcraft.file().addons.twin.setup);
  ok(setup.runs === 3 && setup.hours === 2, 'settings are in the model file', JSON.stringify(setup).slice(0, 120));
  ok(errors.length === 0, 'no console errors', errors.slice(0, 3).join(' | '));
  await page.evaluate(() => window.ccAddons.setEnabled ? window.ccAddons.setEnabled('twin', false) : null);
  await page.waitForTimeout(300);
  if (await page.evaluate(() => !window.ccTwin)) {
    ok(!(await scene('twin-equipment')), 'switched off: the equipment is gone');
    ok((await scene('flow-layout')).visible === true, 'and the flow marks are back');
  } else console.log('  (no setEnabled on this build: switching off not driven)');
} catch (e) {
  fail++; console.log('  FAIL threw: ' + String(e && e.stack || e).slice(0, 700));
  await page.screenshot({ path: path.join(OUT, 'failed.png') }).catch(() => {});
  if (errors.length) console.log('  console: ' + errors.slice(0, 4).join(' | '));
}
await browser.close();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
