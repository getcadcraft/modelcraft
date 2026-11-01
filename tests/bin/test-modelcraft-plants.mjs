#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-modelcraft-plants.mjs — ModelCraft's Plants group in the starter library (0.8 LD.1): every species of the shared plant list builds as a
 * component of closed solids, standing on z = 0, scaled to its size at maturity (or at planting).
 *   node bin/test-modelcraft-plants.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'public_html/assets/apps/modelcraft/dev');
let pass = 0, fail = 0;
const ok = (c, m, d = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (d ? ' (' + d + ')' : '')); } };
// starter.js reads the language catalog through i18n.js: give it the English file like the main suite does
const M = await import(path.join(APP, 'model.js'));
const ST = await import(path.join(APP, 'starter.js'));
const P = await import(path.join(APP, 'plants/plants.js'));
const seed = P.readPlants(JSON.parse(fs.readFileSync(path.join(APP, 'plants/plants-seed.json'), 'utf8'))).library.species;
console.log('== plants as ModelCraft components');
ok(seed.length >= 400, seed.length + ' species in the bundled list');
const model = new M.Model(), bad = [], off = [];
let n = 0;
for (const sp of seed) {
  let c;
  try { c = model.change('p', (m) => { const d = ST.buildPlant(m, sp, sp.botanical); return d; }); } catch (e) { bad.push(sp.key + ': ' + e.message); continue; }
  n++;
  if (c.starter !== 'plant:' + sp.key) bad.push(sp.key + ' starter');
  for (const i of c.insts.values()) { const si = M.solidInfo(model.def(i.def)); if (!si.closed || !(si.volume > 0)) bad.push(sp.key + '/' + model.def(i.def).name); }
  const bb = model.bbox(c), h = bb.max[2] - bb.min[2], w = Math.max(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1]);
  if (Math.abs(bb.min[2]) > 1e-6) bad.push(sp.key + ' not on z = 0');
  if (Math.abs(h - sp.size.mature.h) > 0.06 * sp.size.mature.h + 0.03) off.push(sp.key + ' h ' + h.toFixed(2) + ' vs ' + sp.size.mature.h);
  if (w > sp.size.mature.s * 1.6 + 0.1) off.push(sp.key + ' w ' + w.toFixed(2) + ' vs ' + sp.size.mature.s);
}
ok(n === seed.length && !bad.length, `all ${n} species build as closed solids on the ground` + (bad.length ? ': ' + bad.slice(0, 5).join(', ') : ''));
ok(off.length < seed.length * 0.02, `heights follow the list (${off.length} outside 6 %)`, off.slice(0, 4).join(' | '));
const tree = seed.find((s) => s.type === 'tree'), c1 = model.change('p', (m) => ST.buildPlant(m, tree, 'a', { which: 'plant' }));
const bb = model.bbox(c1), hp = bb.max[2] - bb.min[2];
ok(!tree.size.plant || Math.abs(hp - tree.size.plant.h) < 0.06 * tree.size.plant.h + 0.03, 'at planting, the size at planting', `${hp.toFixed(2)} vs ${tree.size.plant?.h}`);
const turf = seed.find((s) => ST && P.modelOf(s) === '');
if (turf) { const c = model.change('p', (m) => ST.buildPlant(m, turf, 't')); ok(c.insts.size === 1, 'turf is a single slab'); } else ok(true, 'no species without a model in this list');
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
