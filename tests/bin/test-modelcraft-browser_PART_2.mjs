#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-modelcraft-browser_PART_2.mjs — the browser pass for the 0.6 round-2 ModelCraft items (session
 * model-markup_PART_2): headless Chromium at /lab/modelcraft, real mouse and keys.
 *   node bin/test-modelcraft-browser_PART_2.mjs [--only dc26,dr4,dc64,dc21,lc21] [--out <dir>]
 * lc21 (session model-part-extra_PART_2): the guided first model by real clicks and keys, then print prep (Fix, bed, 3MF).
 * Run as root. Signs in with ModelCraft's test admin (tools/modelcraft-test/admin.php, the session kept in
 * tmp/modelcraft-browser-state.json like tools/modelcraft-test/browser.mjs, so the shared login throttle is not hit
 * again). Fails on any console error. Screenshots go to --out (default tmp/shots/modelcraft-part2).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://getcadcraft.com';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(arg('--out', path.join(REPO, 'tmp/shots/modelcraft-part2')));
const STATE = path.join(REPO, 'tmp/modelcraft-browser-state.json');
const ONLY = (arg('--only', 'dc26,dr4,dc64,dc21,lc21') || '').split(',');
fs.mkdirSync(OUT, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m); } };
const section = (s) => console.log('\n== ' + s);

const { chromium } = await import(path.join(REPO, 'tools/modelcraft-test/node_modules/playwright-core/index.mjs')).catch(() => import('playwright-core'));
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const adminPhp = path.join(REPO, 'tools/modelcraft-test/admin.php');
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const problems = [];

async function signedInContext(opts) {
  if (fs.existsSync(STATE)) {
    const c = await browser.newContext({ ...opts, storageState: STATE, acceptDownloads: true });
    const p = await c.newPage();
    const r = await p.goto(BASE + '/lab/modelcraft', { waitUntil: 'domcontentloaded' });
    const okLab = r && r.status() === 200 && p.url().includes('/lab/modelcraft');
    await p.close();
    if (okLab) return c;
    await c.close();
  }
  const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'up'], { encoding: 'utf8' }));
  const c = await browser.newContext({ ...opts, acceptDownloads: true });
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

let ctx;
try {
  ctx = await signedInContext({ viewport: { width: 1400, height: 900 }, locale: 'en-US' });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error') problems.push('console: ' + m.text()); });
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
  const fresh = async (units) => {
    await page.goto(BASE + '/lab/modelcraft?space=paper', { waitUntil: 'networkidle' });
    await page.selectOption('[data-units]', units);
    await page.locator('[data-over]').focus();
  };
  const S = (p) => page.evaluate((pp) => { const s = window.modelcraft.cam.project(pp); const r = document.querySelector('[data-over]').getBoundingClientRect(); return [r.left + s[0], r.top + s[1]]; }, p);
  const look = (eye, target) => page.evaluate(([e, t]) => { const c = window.modelcraft.cam; c.eye = e; c.target = t; window.modelcraft.view.invalidate(); }, [eye, target]);
  const moveTo = async (p, dx = 0, dy = 0) => { const [x, y] = await S(p); await page.mouse.move(x + dx, y + dy, { steps: 4 }); };
  const clickAt = async (p, dx = 0, dy = 0) => { await moveTo(p, dx, dy); const [x, y] = await S(p); await page.mouse.click(x + dx, y + dy); };
  const typeV = async (t) => { await page.keyboard.type(t); await page.keyboard.press('Enter'); };
  const tip = () => page.evaluate(() => window.modelcraft.host.overlayState?.tip || '');

  if (ONLY.includes('dc26')) {
    section('DC.26 a circle from a pushed rectangle\'s face');
    await fresh('mm');
    await look([0.08, -0.06, 0.07], [0.008, 0.004, 0.02]);
    await page.keyboard.press('r'); await clickAt([0, 0, 0]); await moveTo([0.016, 0.008, 0]); await typeV('16,8');
    await page.keyboard.press('p'); await clickAt([0.008, 0.004, 0]); await moveTo([0.008, 0.004, 0.03]); await typeV('40');
    ok(await page.evaluate(() => window.modelcraft.model.root.faces.size === 6), 'R + P with typed sizes: a 16 × 8 × 40 mm grip');
    // the narrow end facing +x: its centre, then the middle of its top edge (pointer just inside the end face)
    for (const [label, p, want] of [['the end face\'s centre', [0.016, 0.004, 0.02], 'Center of face'], ['the middle of the end face\'s top edge', [0.016, 0.004, 0.04], 'Midpoint']]) {
      await page.keyboard.press('c');
      const [cx, cy] = await S([0.016, 0.004, 0.02]), [px, py] = await S(p), dd = Math.hypot(cx - px, cy - py) || 1;
      const dx = (cx - px) / dd * 2, dy = (cy - py) / dd * 2;
      await moveTo(p, dx, dy);
      const tp = await tip();
      ok(tp === want, `circle tool on ${label}: the tip says "${want}" (${tp})`);
      const before = await page.evaluate(() => new Set(window.modelcraft.model.root.verts.keys()).size);
      await clickAt(p, dx, dy);
      await typeV('2');
      const r = await page.evaluate((n0) => { const vs = [...window.modelcraft.model.root.verts.values()].slice(n0); return { n: vs.length, onEnd: vs.every((v) => Math.abs(v[0] - 0.016) < 1e-9) }; }, before);
      ok(r.n >= 24 && r.onEnd, `…the circle lies on the narrow end (${r.n} new points, all at x = 16 mm)`);
      await page.screenshot({ path: path.join(OUT, `dc26-${want === 'Midpoint' ? 'mid' : 'center'}.png`) });
      await page.keyboard.press('Control+z');
      await page.keyboard.press('Escape');
    }
  }
  if (ONLY.includes('dr4')) {
    section('DR.4 push/pull flush keeps the outline');
    await fresh('m');
    await look([2.1, -3, 10], [2, 1.5, 1.5]);
    await page.keyboard.press('r'); await clickAt([0, 0, 0]); await moveTo([4, 3, 0]); await typeV('4,3');
    await page.keyboard.press('p'); await clickAt([2, 1.5, 0]); await moveTo([2, 1.5, 1]); await typeV('2');
    await page.keyboard.press('r'); await clickAt([1, 1, 2]); await moveTo([3, 2, 2]); await typeV('2,1');
    await page.keyboard.press('p'); await clickAt([2, 1.5, 2]); await moveTo([2, 1.5, 1.8]); await typeV('0.5');
    const st = () => page.evaluate(() => {
      const d = window.modelcraft.model.root, V = (id) => d.verts.get(id);
      const top = [...d.faces.values()].filter((f) => f.loops[0].every((v) => Math.abs(V(v)[2] - 2) < 1e-9));
      return { faces: d.faces.size, top: top.length, holes: top.map((f) => f.loops.length).sort().join(',') };
    });
    let s = await st();
    ok(s.faces === 11 && s.top === 1, `a 2 × 1 rectangle on the box's top pushed 0.5 in: a recess (${s.faces} faces)`);
    await page.keyboard.press('p'); await clickAt([2, 1.5, 1.5]);
    await moveTo([0.4, 0.4, 2]);
    const tp = await tip();
    ok(tp === 'On face', `pulling it back, the top around it says "On face" (${tp})`);
    await clickAt([0.4, 0.4, 2]);
    s = await st();
    ok(s.faces === 7 && s.top === 2 && s.holes === '1,2', `flush again: the outline stays, two faces on top, no sides left (${JSON.stringify(s)})`);
    await page.screenshot({ path: path.join(OUT, 'dr4-flush.png') });
  }
  if (ONLY.includes('dc64')) {
    section('DC.64 lock a scene\'s camera');
    await fresh('m');
    await look([9, -12, 9], [2, 1.5, 1]);
    await page.keyboard.press('r'); await clickAt([0, 0, 0]); await moveTo([4, 3, 0]); await typeV('4,3');
    await page.keyboard.press('p'); await clickAt([2, 1.5, 0]); await moveTo([2, 1.5, 1]); await typeV('2');
    await page.click('[data-scene-add]');
    const camNow = () => page.evaluate(() => window.modelcraft.cam.toJSON().eye.map((x) => +x.toFixed(9)).join());
    const sceneCam = () => page.evaluate(() => window.modelcraft.model.scenes[0].cam.eye.map((x) => +x.toFixed(9)).join());
    const saved = await sceneCam();
    const lockBtn = page.locator('[data-scenes] li').first().locator('[data-scene-lock]');
    ok(await lockBtn.getAttribute('aria-pressed') === 'false', 'a new scene\'s camera is not locked');
    await lockBtn.click();
    ok(await page.evaluate(() => window.modelcraft.model.scenes[0].lock === true) && await page.locator('[data-scenes] li').first().locator('[data-scene-lock]').getAttribute('aria-pressed') === 'true', 'the padlock locks it (aria-pressed true)');
    ok(await page.locator('[data-scenebar] .mc-scene-lockmark').count() === 1, 'its tab over the view shows a padlock');
    const msg1 = await page.textContent('[data-msg]');
    ok(/camera locked/.test(msg1), `the status bar says so (${msg1})`);
    // orbit away, change the style, Update: the style goes in, the camera stays
    await look([-6, -10, 4], [2, 1.5, 1]);
    await page.uncheck('[data-style-edges]');
    ok(await camNow() !== saved, 'orbited away from the scene');
    await page.locator('[data-scenes] li').first().locator('.mc-scene-acts button').first().click();
    ok(await sceneCam() === saved, 'Update on a locked scene keeps its camera');
    ok(await page.evaluate(() => window.modelcraft.model.scenes[0].style.edges === false), '…and saves the new style (edges off)');
    const msg2 = await page.textContent('[data-msg]');
    ok(/stayed as it was/.test(msg2), `the status bar says the view stayed (${msg2})`);
    // go to it: exactly the saved camera, as many times as you like
    await page.locator('[data-scenebar] button').first().click();
    await page.waitForTimeout(900);
    ok(await camNow() === saved, 'going to the scene puts the camera exactly back');
    await page.screenshot({ path: path.join(OUT, 'dc64-locked.png') });
    // the lock survives a save and reopen (toJSON → load)
    ok(await page.evaluate(() => { const j = JSON.parse(JSON.stringify(window.modelcraft.model.toJSON())); return j.scenes[0].lock === true; }), 'the file carries the lock');
    // undo the lock, Update moves the camera again
    await page.locator('[data-scenes] li').first().locator('[data-scene-lock]').click();
    await look([-6, -10, 4], [2, 1.5, 1]);
    await page.locator('[data-scenes] li').first().locator('.mc-scene-acts button').first().click();
    ok(await page.evaluate(() => !('lock' in window.modelcraft.model.scenes[0])) && await sceneCam() !== saved, 'unlocked, Update saves the current view again (and no lock key is left)');
    await page.keyboard.press('Control+z');
    await page.keyboard.press('Control+z');
    ok(await page.evaluate(() => window.modelcraft.model.scenes[0].lock === true) && await sceneCam() === saved, 'two undos: the scene is locked on its saved view again');
  }
  if (ONLY.includes('dc21')) {
    section('DC.21 a clean presentation view, and snapping to a closed group\'s corners');
    await fresh('m');
    await look([12, -14, 10], [3.5, 1.5, 1]);
    // a box made a group, a loose box beside it, a guide line, a guide point, a section plane
    await page.keyboard.press('r'); await clickAt([0, 0, 0]); await moveTo([4, 3, 0]); await typeV('4,3');
    await page.keyboard.press('p'); await clickAt([2, 1.5, 0]); await moveTo([2, 1.5, 1]); await typeV('2');
    await page.keyboard.press('Space');
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Shift+G');
    ok(await page.evaluate(() => window.modelcraft.model.root.insts.size === 1), 'the box is a group (Ctrl+A, Shift+G)');
    // snapping to the closed group's top corner with the rectangle tool, then drawing from it
    await page.keyboard.press('r');
    await moveTo([4, 3, 2], 2, -1);
    ok(await tip() === 'Endpoint', `Rectangle on the closed group's top corner: "Endpoint" (${await tip()})`);
    await moveTo([4, 1.5, 2], 1, -1);
    ok(await tip() === 'Midpoint', `…and on the middle of its top edge: "Midpoint" (${await tip()})`);
    await page.keyboard.press('Escape');
    await page.keyboard.press('r'); await clickAt([6, 0, 0]); await moveTo([8, 2, 0]); await typeV('2,2');
    await page.evaluate(() => { const M = window.modelcraft.model; M.change('helpers', (m) => { m.addGuideLine([0, -1, 0], [1, 0, 0]); m.addGuidePoint([5, 4, 0]); m.addSection([2, 1.5, 1], [0, -1, 0]); }); });
    const faded = () => page.evaluate(() => { let n = 0, all = 0; window.modelcraft.view.root.traverse((o) => { if (o.isMesh && o.material && !Array.isArray(o.material)) { all++; if (o.material.transparent && o.material.opacity < 0.5) n++; } }); return { n, all }; });
    const overlayPx = () => page.evaluate(() => { const v = window.modelcraft.view; v.draw(); const c = v.over, d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
    await page.evaluate(() => window.modelcraft.host.openContext([[...window.modelcraft.model.root.insts.keys()][0]]));
    await page.evaluate(() => window.modelcraft.view.draw());
    const f0 = await faded();
    ok(f0.n > 0, `editing inside the group, the loose face outside it fades (${f0.n} faded meshes)`);
    const px0 = await overlayPx();
    ok(px0 > 0, `…and the overlay has the guides, the section plane, the group's box (${px0} px)`);
    await page.keyboard.press('Shift+P');
    ok(await page.evaluate(() => window.modelcraft.presenting()), 'Shift+P: presentation view');
    await page.evaluate(() => window.modelcraft.view.draw());
    const f1 = await faded();
    ok(f1.n === 0 && f1.all > 0, `presentation view: nothing fades outside the open group (${f1.n} of ${f1.all} meshes faded)`);
    ok(await overlayPx() === 0, 'presentation view: no guide point, section outline or group box on the overlay');
    ok(await page.evaluate(() => window.modelcraft.view.extras.children.length === 0), 'presentation view: no axes or guide lines in the 3D view');
    await page.screenshot({ path: path.join(OUT, 'dc21-present.png') });
    await page.keyboard.press('Shift+P');
    await page.evaluate(() => window.modelcraft.view.draw());
    ok((await faded()).n === f0.n && await overlayPx() > 0, 'Shift+P again: the faded outside and the marks are back');
  }
  if (ONLY.includes('lc21')) {
    section('LC.21 the guided first model, and print prep');
    await fresh('mm');
    await look([0.09, -0.08, 0.08], [0.02, 0.015, 0.01]);
    const stepIs = (n) => page.waitForFunction((k) => document.querySelector('[data-guide] [data-guide-step]')?.dataset.guideStep === k, String(n), { timeout: 5000 }).then(() => true, () => false);
    ok(await page.locator('[data-hint] [data-guide-open]').isVisible(), 'the Start modeling card offers "Guided first model"');
    await page.click('[data-hint] [data-guide-open]');
    ok(await page.locator('[data-guide]').isVisible() && await page.locator('[data-hint]').isHidden() && await stepIs(0), 'the guide opens at step 1 of 4 and the Start card goes');
    await page.screenshot({ path: path.join(OUT, 'lc21-guide-step1.png') });
    await page.click('[data-guide] [data-guide-act="face"]');
    ok(await page.locator('[data-tool="rect"]').getAttribute('aria-pressed') === 'true', 'Pick the tool picks Rectangle');
    await clickAt([0, 0, 0]); await moveTo([0.04, 0.03, 0]); await typeV('40,30');
    ok(await stepIs(1), 'a 40 × 30 mm rectangle drawn → step 2 (pull it up)');
    await page.keyboard.press('p'); await clickAt([0.02, 0.015, 0]); await moveTo([0.02, 0.015, 0.01]); await typeV('20');
    ok(await stepIs(2), 'pushed up 20 mm → step 3 (make it one object)');
    await page.click('[data-guide] [data-guide-act="group"]');
    ok(await page.evaluate(() => window.modelcraft.host.sel.length) > 0, 'Select the box selects it');
    await page.keyboard.press('Shift+G');
    ok(await stepIs(3), 'Shift+G made it a group → step 4 (check it)');
    await page.click('[data-guide] [data-guide-act="print"]');
    await page.waitForSelector('dialog [data-prep-verdict]');
    ok(await page.getAttribute('dialog [data-prep-verdict]', 'data-prep-verdict') === 'ready', 'Check it now: the dialog says Ready to print');
    await page.click('dialog button[data-key="cancel"]');
    ok(await stepIs(4), 'checked ready → the guide says the first model is made');
    await page.screenshot({ path: path.join(OUT, 'lc21-guide-done.png') });
    await page.click('[data-guide] [data-guide-act="done"]');
    ok(await page.locator('[data-guide]').isHidden(), 'Done closes the guide');
    // a hole in the group, a printer bed, then Fix what can be fixed and a 3MF
    await page.evaluate(() => {
      const m = window.modelcraft.model, iid = [...m.root.insts.keys()][0], d = m.def(m.root.insts.get(iid).def);
      const top = [...d.faces].find(([, f]) => f.loops[0].every((v) => Math.abs(d.verts.get(v)[2] - 0.02) < 1e-9))[0];
      m.change('hole', (mm) => { mm.def(d.id).faces.delete(top); }, [d.id]);
      window.modelcraft.afterHistory();
      const r = document.querySelector('[data-app-settings] input[name="mcBed"][value="180"]');
      r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true }));
      window.modelcraft.host.setSel([]);
    });
    ok(await page.evaluate(() => window.modelcraft.settings.bed) === '180', 'Settings › 3D printer bed: 180 mm chosen');
    await page.click('[data-export-menu] > summary'); await page.click('[data-export="print3d"]');
    await page.waitForSelector('dialog [data-prep-verdict]');
    const d1 = await page.evaluate(() => { const g = document.querySelector('dialog'); return { v: g.querySelector('[data-prep-verdict]').dataset.prepVerdict, kinds: [...g.querySelectorAll('[data-prep-kind]')].map((x) => x.dataset.prepKind), parts: g.querySelectorAll('[data-prep-parts] li').length, rowText: g.querySelector('[data-prep-kind="open"]')?.innerText || '', facts: g.querySelector('.mc-print-facts').innerText, fix: !!g.querySelector('button[data-key="fix"]') }; });
    ok(d1.v === 'fix' && d1.kinds[0] === 'open' && d1.parts === 1 && d1.fix, `with its top gone: "1 thing to fix", the hole first, one part listed, Fix offered (${JSON.stringify({ v: d1.v, kinds: d1.kinds, parts: d1.parts })})`);
    ok(/hole/.test(d1.rowText) && /closed shape/.test(d1.rowText) && /Fix what can be fixed/.test(d1.rowText), 'the hole row says what, why and what to do');
    ok(/Printer bed: 180 × 180 × 180 mm/.test(d1.facts), 'the facts name the printer bed');
    await page.screenshot({ path: path.join(OUT, 'lc21-prep-fix.png') });
    const undo0 = await page.evaluate(() => window.modelcraft.model.undoStack.length);
    await page.click('dialog button[data-key="fix"]');
    await page.waitForFunction(() => document.querySelector('dialog [data-prep-verdict]')?.dataset.prepVerdict === 'ready', null, { timeout: 5000 }).catch(() => {});
    ok(await page.getAttribute('dialog [data-prep-verdict]', 'data-prep-verdict') === 'ready' && await page.evaluate((u) => window.modelcraft.model.undoStack.length === u + 1, undo0), 'Fix what can be fixed: one undo step, and the check runs again: Ready to print');
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('dialog button[data-key="3mf"]')]);
    const f = path.join(OUT, 'lc21.3mf'); await dl.saveAs(f);
    const b = fs.readFileSync(f);
    ok(b[0] === 0x50 && b[1] === 0x4b && b.includes(Buffer.from('3D/3dmodel.model')), `Download 3MF: ${dl.suggestedFilename()}, a zip with the 3D model part`);
    await page.evaluate(() => { const r = document.querySelector('[data-app-settings] input[name="mcBed"][value=""]'); r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true })); });
  }
} finally {
  if (ctx) await ctx.close();
  await browser.close();
}
ok(problems.length === 0, 'no console errors' + (problems.length ? ': ' + problems.slice(0, 5).join(' | ') : ''));
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
