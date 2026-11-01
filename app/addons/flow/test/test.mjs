#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Material flow add-on's Node tests (0.8 SU.858, session sx-flow): the simulation core against known answers
 * (t-sim.mjs), the catalogue, ports and layout (t-layout.mjs), playback and CSV (t-play.mjs), the add-on files (t-addon.mjs).
 *   node public_html/assets/apps/modelcraft/dev/addons/flow/test/test.mjs [--verbose] [--only sim,layout,play,flow8,addon]
 */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const APP = path.resolve(ADDON, '../..');
const VERBOSE = process.argv.includes('--verbose');
const oi = process.argv.indexOf('--only');
const ONLY = oi > 0 ? process.argv[oi + 1].split(',') : null;
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok  ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
globalThis.__flowTest = { ok, section, near, mine, ADDON, APP, VERBOSE };

const t0 = Date.now();
for (const part of ['sim', 'layout', 'play', 'flow8', 'flow-r3', 'flow-r4', 'plc', 'addon']) {
  if (ONLY && !ONLY.includes(part)) continue;
  try { await import(pathToFileURL(path.join(HERE, `t-${part}.mjs`)).href); }
  catch (e) { if (e.code === 'ERR_MODULE_NOT_FOUND' && String(e.message).includes(`t-${part}.mjs`)) continue; fail++; console.log(`  FAIL t-${part}.mjs threw — ${e.stack}`); }
}
console.log(`\nflow add-on: ${pass} passed, ${fail} failed (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
process.exit(fail ? 1 : 0);
