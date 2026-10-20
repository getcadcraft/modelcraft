#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
// Run the dev shell first. Optional env: MODELCRAFT_URL, PLAYWRIGHT_MODULE, CHROME_CHANNEL, MODIFIER_SCREENSHOT.
import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_CHANNEL ? { channel: process.env.CHROME_CHANNEL } : {}) });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await page.goto(process.env.MODELCRAFT_URL || 'http://127.0.0.1:8000/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => !!window.modelcraft);
  await page.locator('[data-over]').click({ position: { x: 550, y: 600 } });
  // Build only the synthetic starting box through the kernel; exercise modifiers with visible controls.
  await page.evaluate(async () => {
    const { addPolygon, rectPts, pushPull } = await import('/assets/apps/modelcraft/dev/model.js');
    const { ident } = await import('/assets/apps/modelcraft/dev/vec.js');
    const { model, host, view, cam } = window.modelcraft;
    model.units = 'm';
    const d = model.newDef('group', 'Modifier test box');
    addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1));
    pushPull(d, [...d.faces.keys()][0], 1);
    const iid = model.place(model.root, d.id, ident());
    window.modifierTest = { iid, source: d.id };
    model.version++; host.setSel([{ t: 'i', id: iid }]);
    cam.eye = [18, -20, 15]; cam.target = [6, 0, 0]; view.invalidate();
  });
  const info = page.locator('[data-info]');
  const click = name => info.getByRole('button', { name, exact: true }).click();
  const field = async (name, value) => { const input = info.getByLabel(name, { exact: true }); await input.fill(value); await input.press('Tab'); };
  const state = () => page.evaluate(() => {
    const { model, host } = window.modelcraft, { iid, source } = window.modifierTest;
    const d = model.def(model.root.insts.get(iid).def);
    return { max: model.bbox(d).max[0], mods: d.mods, sourceMax: model.bbox(model.def(source)).max[0],
      path: host.path, faces: d.faces.size, steps: model.undoStack.length, id: d.id };
  });
  const maxIs = value => page.waitForFunction(x => {
    const { model } = window.modelcraft, i = model.root.insts.get(window.modifierTest.iid);
    return model.bbox(model.def(i.def)).max[0] === x;
  }, value);
  await click('Add linear Array');
  await field('Copies (including original)', '3');
  await field('Red spacing', '3m'); await maxIs(7);
  await click('Add Scale'); await field('Red scale factor', '2'); await maxIs(14);
  assert.equal((await state()).sourceMax, 1);
  const beforeBad = await state();
  await field('Red scale factor', '0');
  assert.equal((await state()).max, 14); assert.equal((await state()).steps, beforeBad.steps);
  await info.getByRole('button', { name: 'Move earlier', exact: true }).last().click(); await maxIs(8);
  await info.getByRole('checkbox', { name: 'Enabled', exact: true }).last().uncheck(); await maxIs(2);
  await info.getByRole('checkbox', { name: 'Enabled', exact: true }).last().check(); await maxIs(8);
  assert.equal(await page.locator('[data-tree] .mc-node').count(), 1, 'Outliner does not expose generated placements');
  await page.locator('[data-tree] .mc-node').dblclick();
  assert.deepEqual((await state()).path, [], 'double-click cannot edit the generated result');
  await click('Edit source');
  assert.equal((await state()).path.length, 2);
  // Change source geometry through the kernel while the source is explicitly open.
  await page.evaluate(() => {
    const { model, host } = window.modelcraft;
    model.change('Source size', m => m.setDefSize(host.model.context(host.path).def.id, 0, 2));
    host.changed(); host.closeContext();
  });
  await maxIs(10); assert.deepEqual((await state()).path, []);
  // Save through the app's normal button and reopen the downloaded native file.
  const downloadPromise = page.waitForEvent('download');
  await page.locator('[data-act="save"]').click();
  const download = await downloadPromise, file = await download.path();
  assert.ok(file);
  const saved = await import('node:fs/promises').then(fs => fs.readFile(file, 'utf8'));
  assert.ok(saved.includes('"mods"'));
  await page.evaluate(text => {
    const { model, host } = window.modelcraft;
    const saved = JSON.parse(text); model.load(saved.model || saved);
    host.path = []; host.setSel([{ t: 'i', id: window.modifierTest.iid }]); host.changed();
  }, saved);
  await maxIs(10);
  // Remove and undo through the UI as well as the kernel test.
  await info.getByRole('button', { name: 'Remove modifier', exact: true }).last().click(); await maxIs(4);
  await page.locator('[data-act="undo"]').click(); await maxIs(10);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  if (process.env.MODIFIER_SCREENSHOT) {
    await info.getByRole('heading', { name: 'Modifier stack', exact: true }).scrollIntoViewIfNeeded();
    await page.screenshot({ path: process.env.MODIFIER_SCREENSHOT });
  }
  await click('Bake modifiers');
  assert.ok(!(await state()).mods); assert.equal((await state()).faces, 18);
  await page.locator('[data-act="undo"]').click();
  assert.ok((await state()).mods); await maxIs(10);
  await page.locator('[data-act="redo"]').click();
  assert.ok(!(await state()).mods);
  assert.deepEqual(errors, []);
  console.log('PASS: Chrome controls, parameters, order, disable, source editing, Outliner guard, native save/reopen, Bake, undo/redo; no page errors.');
} finally { await browser.close(); }
