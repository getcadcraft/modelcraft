#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-orders.mjs — orders from a file in the Material flow add-on, in /lab/modelcraft, headless Chromium (0.9 TW.15). Run as root:
 *   node public_html/assets/apps/modelcraft/dev/addons/flow/test/browser-orders.mjs [--keep-admin]
 * A bad file names its first bad row and loads nothing; the sample loads; a source set to the table makes exactly the file's loads at the file's times; the same run twice
 * is the same; the table is in the model file.
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


const panelText = (page) => page.evaluate(() => { const f = [...document.querySelectorAll('fieldset')].find((x) => /Orders from a file/.test(x.querySelector('legend')?.textContent || '')); return f ? f.innerText : ''; });
const openAddon = async (ctx) => {
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.ccAddons && window.ccAddons.list().length > 0, null, { timeout: 30000 });
  await page.evaluate(() => localStorage.setItem('cc-addons:modelcraft', JSON.stringify({ off: {}, on: { flow: true } })));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => !!window.ccFlow, null, { timeout: 30000 });
  return { page, errors };
};
const pick = async (page, name, text) => {
  const [fc] = await Promise.all([page.waitForEvent('filechooser', { timeout: 5000 }), page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => x.textContent === 'Open an orders file'); if (!b) throw new Error('no button'); b.click(); })]);
  await fc.setFiles({ name, mimeType: 'text/csv', buffer: Buffer.from(text) });
  await page.waitForTimeout(300);
};
try {
  const admin = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'up'], { encoding: 'utf8' }));
  const ctx = await browser.newContext({ viewport: { width: 1500, height: 950 }, acceptDownloads: true });
  const lp = await ctx.newPage();
  await lp.goto(BASE + '/admin/login', { waitUntil: 'domcontentloaded' });
  await lp.fill('input[name="email"]', admin.email); await lp.fill('input[name="password"]', admin.password);
  await Promise.all([lp.waitForNavigation(), lp.click('form button[type="submit"]')]);
  await lp.close();
  const { page, errors } = await openAddon(ctx);
  await page.evaluate(async () => { const m = await import('/assets/apps/modelcraft/dev/flow/examples.js'); window.ccFlow.load(m.exampleLine()); });
  ok(/Orders from a file/.test(await panelText(page)), 'the Orders from a file section is in the right panel');

  await pick(page, 'bad.csv', 'time_s,type\n10,A\n20,A\nsoon,B\n40,A\n');
  const t1 = await panelText(page);
  ok(/Line 4/.test(t1) && /soon/.test(t1) && /not loaded/.test(t1), 'a bad file names its first bad row (line 4, "soon") and says it was not loaded', t1.slice(0, 200));
  ok(await page.evaluate(() => window.ccFlow.layout().orders.length === 0), 'nothing was loaded and no row was skipped');

  await pick(page, 'week.csv', 'time_s,type,qty\n60,A,2\n120,B,\n600,A,3\n');
  ok(await page.evaluate(() => window.ccFlow.layout().orders.length === 1 && window.ccFlow.layout().orders[0].rows.length === 3), 'a good file becomes a table of 3 rows');
  ok(/3 rows, 6 loads/.test(await panelText(page)), 'and the panel says 3 rows, 6 loads');

  // a source set to the table; a quiet line, then run
  await page.evaluate(async () => {
    const L = window.ccFlow.layout();
    const src = L.items.find((i) => i.kind === 'source');
    src.params = { ...src.params, mode: 'orders', orders: L.orders[0].id };
    window.ccFlow.load(L);
    const M = window.ccFlow.layout(); M.run.hours = 1; M.run.warmup = 0;
    await window.ccFlow.run();
  });
  const res = await page.evaluate(() => { const r = window.ccFlow.result(); return r ? { created: r.created, done: r.done, src: Object.values(r.elements).find((e) => e.ordersTotal !== undefined) } : null; });
  ok(res && res.created === 6 && res.src && res.src.ordersTotal === 6, 'the run makes exactly the six loads of the file', JSON.stringify(res));
  const json1 = await page.evaluate(() => JSON.stringify(window.ccFlow.result()));
  await page.evaluate(async () => { await window.ccFlow.run(); });
  const json2 = await page.evaluate(() => JSON.stringify(window.ccFlow.result()));
  ok(json1 === json2, 'the same file run again gives the same result byte for byte');
  const doc = await page.evaluate(() => window.ccFlow.docWritten());
  ok(/"orders":\[\{"id":"orders-1"/.test(doc || ''), 'the table is in the model file', (doc || '').slice(0, 80));

  await page.evaluate(() => { window.ccFlow.layout().orders = []; });
  await pick(page, 'x.csv', 'time_s\n1\n');
  await page.evaluate(() => [...document.querySelectorAll('button')].find((x) => x.textContent === 'Use the sample orders').click());
  await page.waitForTimeout(400);
  ok(await page.evaluate(() => window.ccFlow.layout().orders.some((o) => o.file === 'orders-sample.csv' && o.rows.length > 100)), 'the sample orders load');
  await page.screenshot({ path: path.join(REPO, 'tmp/shots/flow-orders.png') }).catch(() => {});
  ok(errors.length === 0, 'no console errors', errors.slice(0, 3).join(' | '));
  await ctx.close();
} catch (e) {
  fail++; console.log('  FAIL threw — ' + (e.stack || e));
} finally {
  await browser.close();
  if (!KEEP_ADMIN) { try { execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'down']); } catch { /* best effort */ } }
}
console.log(`\nflow orders in the browser: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
