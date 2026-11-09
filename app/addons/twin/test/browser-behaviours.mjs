#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-behaviours.mjs — behaviours on imported CAD (TW.13) in the real /lab/modelcraft page, headless Chromium (0.9 TW). Run as root (ModelCraft's test admin, as the flow add-on's browser test):
 *   node public_html/assets/apps/modelcraft/dev/addons/twin/test/browser-behaviours.mjs [--out <dir>]
  * A real STEP file (fixtures/step/box.step) imported through the app's own Import; a face picked with a real click; a conveyor surface, a joint and a sensor added, tested, saved in the model file, read back. Uses SwiftShader.
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
  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true, twin: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.ccTwin && !!window.ccFlow, null, { timeout: 30000 });
  await page.waitForSelector('.twin[data-twin]', { timeout: 15000 }).catch(async () => {
    await page.evaluate(() => { const e = [...document.querySelectorAll('main aside *')].find((x) => x.textContent.trim() === 'Digital twin'); if (e) e.click(); });
    await page.waitForSelector('.twin[data-twin]', { timeout: 15000 });
  });
  await openSection('behaviours');
  ok(/no imported part/i.test(await page.textContent('.twin [data-tw-section="behaviours"]')), 'with nothing imported the section says so');

  // ---- a real STEP file through the app's own Import
  await page.setInputFiles('[data-file-import]', path.join(REPO, 'fixtures/step/box.step'));
  await page.waitForFunction(() => /Imported box\.step/.test(window.modelcraft.ui.msg.textContent), null, { timeout: 60000 });
  await page.evaluate(() => window.modelcraft.host && window.modelcraft.host.frame && window.modelcraft.host.frame());
  await page.evaluate(() => { const u = window.ccTwin.ui(); u.bhRecheck(); u.refresh(); });
  await page.waitForSelector(tw('bh-pick'), { timeout: 10000 }).catch(() => {});
  await openSection('behaviours');
  ok(await page.isVisible(tw('bh-pick')), 'after the import the section offers Pick a face');
  const parts = await page.evaluate(() => window.ccTwin.host.behaviours.parts());
  ok(parts.length === 1, 'the imported box is one part', JSON.stringify(parts));
  const faces = await page.evaluate((k) => window.ccTwin.host.behaviours.faces(k).map((f) => ({ id: f.id, kind: f.kind, n: f.n, area: f.area })), parts[0].key);
  ok(faces.length === 6 && faces.every((f) => f.kind === 'plane'), 'its six faces are read from the mesh as planes', JSON.stringify(faces.map((f) => f.kind)));
  // a smaller load, to fit a 50 x 40 mm top
  await page.evaluate(() => { const S = window.ccTwin.ui().state(); S.load = { l: 0.02, w: 0.02, h: 0.01, mass: 0.1, mu: 0.5 }; });

  // ---- pick the top face with a real click
  await page.evaluate(() => { const c = window.modelcraft.cam; c.target = [0.025, 0.02, 0.03]; });
  await page.evaluate(() => window.modelcraft.cam.orbit && window.modelcraft.cam.orbit(0, 0));
  await page.click(tw('bh-pick'));
  ok(/Click a face/.test(await page.textContent(tw('bh-pick')).catch(() => '') + await page.textContent('[data-tw-msg="bh"]')), 'Pick a face asks for a click');
  const hitTop = await page.evaluate(() => { const h = window.ccTwin.hitRay({ o: [0.025, 0.02, 1], d: [0, 0, -1] }); return h; });
  ok(hitTop && hitTop.face >= 0, 'a ray from above finds a face of the part', JSON.stringify(hitTop));
  const xy = await page.evaluate(() => { const c = window.modelcraft.cam, p = c.project([0.025, 0.02, 0.03]), r = window.modelcraft.ui.gl.getBoundingClientRect(); return p ? [r.left + p[0], r.top + p[1], c.ray(p[0], p[1]).d] : null; });
  ok(!!xy, 'the top face centre is on screen');
  await page.mouse.click(xy[0], xy[1]);
  await page.waitForTimeout(300);
  const picked = await page.evaluate(() => window.ccTwin.ui().runtime().bh.picked);
  ok(picked && picked.face.kind === 'plane', 'the click picked a plane face', JSON.stringify(picked && picked.face && [picked.face.id, picked.face.c, picked.face.n]));
  // the camera may not look straight down: whichever face was picked, pick the top deterministically by its id for the rest
  const topId = await page.evaluate((k) => window.ccTwin.host.behaviours.faces(k).find((f) => f.n[2] > 0.999).id, parts[0].key);
  await page.evaluate(([k, id]) => { const A = window.ccTwin.host.behaviours; const f = A.faces(k).find((q) => q.id === id); const R = window.ccTwin.ui().runtime(); R.bh.picked = { part: k, partName: A.parts()[0].name, face: JSON.parse(JSON.stringify({ id: f.id, kind: f.kind, area: f.area, c: f.c, lo: f.lo, hi: f.hi, n: f.n, d: f.d })) }; }, [parts[0].key, topId]);

  // ---- conveyor
  await page.selectOption(tw('bh-kind'), 'conveyor');
  await page.fill(tw('bh-speed'), '0.5'); await page.dispatchEvent(tw('bh-speed'), 'change');
  await page.click(tw('bh-add'));
  const added = await page.evaluate(() => window.ccTwin.ui().state().behaviours);
  ok(added.length === 1 && added[0].kind === 'conveyor' && Math.abs(added[0].dir[0]) > 0.999 && added[0].speed === 0.5, 'a conveyor surface is added on the top face, moving along X', JSON.stringify(added[0] && added[0].dir));
  await page.click(tw('bh-test-c1'));
  const rc = await page.textContent('[data-tw-bh-result="c1"]');
  ok(/reaches its far end in/.test(rc) && /arrived/.test(rc), 'Test gives a time in words', rc);
  const num = await page.evaluate(() => { const r = window.ccTwin.ui().runtime().bh.results.c1; return { t: r.r.t, th: r.r.theory, t2: r.r2.t, d: r.r2.distance }; });
  ok(Math.abs(num.t - num.th) < num.th * 0.05, `from rest: ${num.t.toFixed(3)} s vs the formula ${num.th.toFixed(3)} s`);
  ok(Math.abs(num.t2 - num.d / 0.5) < (num.d / 0.5) * 0.06 + 0.01, `at belt speed: ${num.t2.toFixed(3)} s vs ${(num.d / 0.5).toFixed(3)} s`);

  // ---- joint on the side face's normal (a slide), then a sensor on another face
  const sideId = await page.evaluate((k) => window.ccTwin.host.behaviours.faces(k).find((f) => f.n[1] > 0.999).id, parts[0].key);
  const pickById = (id, kind) => page.evaluate(([k, id2]) => { const A = window.ccTwin.host.behaviours; const f = A.faces(k).find((q) => q.id === id2); const R = window.ccTwin.ui().runtime(); R.bh.picked = { part: k, partName: A.parts()[0].name, face: JSON.parse(JSON.stringify({ id: f.id, kind: f.kind, area: f.area, c: f.c, lo: f.lo, hi: f.hi, n: f.n, d: f.d })) }; }, [parts[0].key, id]);
  await page.selectOption(tw('bh-kind'), 'joint'); await pickById(sideId);
  await page.selectOption(tw('bh-type'), 'slide');
  for (const [id, v] of [['bh-min', '0'], ['bh-max', '0.02'], ['bh-home', '0'], ['bh-rate', '0.01']]) { await page.fill(tw(id), v); await page.dispatchEvent(tw(id), 'change'); }
  await page.click(tw('bh-add'));
  await page.click(tw('bh-test-j1'));
  ok(/takes 2 s/.test(await page.textContent('[data-tw-bh-result="j1"]')), 'a slide of 0.02 m at 0.01 m a second takes 2 s', await page.textContent('[data-tw-bh-result="j1"]'));
  await page.selectOption(tw('bh-kind'), 'sensor'); await pickById(sideId);
  await page.fill(tw('bh-range'), '1'); await page.dispatchEvent(tw('bh-range'), 'change');
  await page.click(tw('bh-add'));
  const nb = await page.evaluate(() => window.ccTwin.ui().state().behaviours.map((b) => b.id));
  ok(JSON.stringify(nb) === '["c1","j1","s1"]', 'three jobs listed', JSON.stringify(nb));
  await page.click(tw('bh-test-s1'));
  const rs = await page.textContent('[data-tw-bh-result="s1"]');
  ok(/breaks the beam at|never breaks/.test(rs), 'the sensor test answers in words', rs);

  // ---- saved in the model file and read back
  const file = await page.evaluate(() => window.modelcraft.file().addons.twin.setup.behaviours);
  ok(file && file.length === 3 && file.every((b) => b.face && b.part), 'the three jobs are in the model file', JSON.stringify(file && file.map((b) => b.id)));
  const text = await page.evaluate(() => JSON.stringify(window.modelcraft.file()));
  await page.evaluate((t) => window.ccTwin.ui().load(JSON.parse(t).addons.twin.setup), text);
  const back = await page.evaluate(() => window.ccTwin.ui().state().behaviours.length);
  ok(back === 3, 'read back from the file: three jobs');
  await page.click(tw('bh-recheck'));
  const st = await page.evaluate(() => Object.values(window.ccTwin.ui().runtime().bh.status).map((m) => m.status));
  ok(st.length === 3 && st.every((x) => x === 'same'), 'every job finds its face again', JSON.stringify(st));

  // ---- the part is imported again from another file: the faces are found, or the page says it cannot
  await page.setInputFiles('[data-file-import]', path.join(REPO, 'fixtures/step/box-ap242.step'));
  await page.waitForFunction(() => /Imported box-ap242\.step/.test(window.modelcraft.ui.msg.textContent), null, { timeout: 60000 });
  const lost = await page.evaluate(() => { const ui = window.ccTwin.ui(); ui.bhRecheck(); return Object.values(ui.runtime().bh.status).map((m) => m.status); });
  ok(lost.length === 3 && lost.every((x) => x === 'same' || x === 'moved'), 'the jobs are on the first box and still find it (the second import is another part)', JSON.stringify(lost));
  // delete the part: jobs say plainly that the part is gone
  await page.evaluate(() => { const m = window.modelcraft.model; const parts = window.ccTwin.host.behaviours.parts(); void m; void parts; });
  await page.evaluate(() => { const b = window.ccTwin.ui().state().behaviours[0]; b.part = 'dGone'; window.ccTwin.ui().bhRecheck(); window.ccTwin.ui().refresh(); });
  const gone = await page.textContent('[data-tw-bh-status="c1"]');
  ok(/no longer in the model/.test(gone), 'a job whose part is gone says so', gone);
  await shot('behaviours');
  await openSection('behaviours');
  ok(/not a safety validation/i.test(await page.textContent('.twin [data-tw-section="behaviours"]')), 'the section says it is not a safety validation');
  ok(!/biggest gap|market leader/i.test(await page.textContent('.twin')), 'no comparison with other programs in the panel');
  ok(errors.length === 0, 'no console errors', errors.slice(0, 3).join(' | '));
} catch (e) {
  fail++; console.log('  FAIL threw: ' + String(e && e.stack || e).slice(0, 700));
  await page.screenshot({ path: path.join(OUT, 'failed-behaviours.png') }).catch(() => {});
  if (errors.length) console.log('  console: ' + errors.slice(0, 4).join(' | '));
}
await browser.close();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
