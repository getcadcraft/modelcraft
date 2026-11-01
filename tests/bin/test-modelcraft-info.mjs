#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-modelcraft-info.mjs — ModelCraft's Model info data (0.7.1 71.13, modelcraft/dev/model-info.js, DOM-free): the file's
 * `info` checked on open, the new-model start (Preferences › New models) checked on read, statistics, the component list and
 * the file version Save writes. The dialog and the round trip through a real file: tools/modelcraft-test/browser-071.mjs.
 *
 *   node bin/test-modelcraft-info.mjs [--verbose]
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'public_html/assets/apps/modelcraft/dev');
const VERBOSE = process.argv.includes('--verbose');
let pass = 0, fail = 0;
const ok = (c, what, detail = '') => { if (c) { pass++; if (VERBOSE) console.log('  ok    ' + what); } else { fail++; console.log('  FAIL  ' + what + (detail ? ' — ' + detail : '')); } };

const M = await import(path.join(APP, 'model.js'));
const I = await import(path.join(APP, 'model-info.js'));

// the file's info (untrusted)
ok(I.cleanInfo(null) === null && I.cleanInfo('x') === null && I.cleanInfo([]) === null && I.cleanInfo({}) === null, 'cleanInfo: nothing → null');
const ci = I.cleanInfo({ author: '  Ana  ', org: 7, description: 'a\r\nb\u0007', extra: 'x' });
ok(ci && ci.author === 'Ana' && !('org' in ci) && ci.description === 'a\nb' && !('extra' in ci), 'cleanInfo: strings only, trimmed, CRLF → LF, control characters out, unknown keys dropped', JSON.stringify(ci));
ok(I.cleanInfo({ author: 'x'.repeat(999), description: 'y'.repeat(9999) }).author.length === I.INFO_LIMITS.author && I.cleanInfo({ description: 'y'.repeat(9999) }).description.length === I.INFO_LIMITS.description, 'cleanInfo: cut to the limits');
ok(I.cleanInfo({ author: '   ' }) === null, 'cleanInfo: only blanks → null (the key is not written)');

// the new-model start
const units = ['ft-in', 'mm', 'm'];
ok(I.cleanTemplate({ v: 2, units: 'mm' }, units) === null && I.cleanTemplate(null, units) === null, 'cleanTemplate: wrong format → null');
const tp = I.cleanTemplate({ v: 1, units: 'parsec', style: { mode: 'xray', edges: 0, shadows: 'yes' }, sun: { lat: 95, lon: 0, tz: 0 } }, units);
ok(tp && !tp.units && tp.style.mode === 'xray' && tp.style.edges === true && tp.style.shadows === false && !tp.sun, 'cleanTemplate: unknown unit and an impossible place dropped; display kept', JSON.stringify(tp));
const to = I.templateOf('mm', { mode: 'hidden', edges: false, shadows: true, sun: { month: 6, day: 21, hour: 15, lat: 51.5, lon: -0.12, tz: 0 } });
ok(to && to.units === 'mm' && to.style.mode === 'hidden' && to.style.edges === false && to.style.shadows === true && to.sun.lat === 51.5 && !('month' in to.sun), 'templateOf: units, display and place (not the date)', JSON.stringify(to));
ok(JSON.stringify(I.cleanTemplate(JSON.parse(JSON.stringify(to)), units)) === JSON.stringify(to), 'templateOf → stored → read back: the same');
ok(I.readTemplate(units) === null && I.writeTemplate(to) === false, 'no localStorage (Node): nothing read, writing says so');

// statistics, components, file version
const m = new M.Model();
m.change('box', (mm) => {
  M.addPolygon(mm.root, M.rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3));
  const f = [...mm.root.faces.keys()].pop();
  M.pushPull(mm.root, f, 2.5);
  const id = mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: f }]), 'component', 'Box');
  const def = mm.root.insts.get(id).def;
  mm.place(mm.root, def, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 6, 0, 0, 1]);
});
const st = I.modelStats(m, { materials: 2 });
ok(st.faces === 6 && st.edges === 12 && st.components === 1 && st.groups === 0 && st.placements === 2 && st.unused === 0 && st.materials === 2 && st.meshes === 0,
  'modelStats: a component placed twice counts its 6 faces and 12 edges once; 2 placements', JSON.stringify(st));
const cl = I.componentList(m);
ok(cl.length === 1 && cl[0].name === 'Box' && cl[0].n === 2, 'componentList: the definition and how many times it is placed', JSON.stringify(cl));
ok(I.saveVersion(m) === 1 && I.saveVersion(m) === m.toJSON().version, 'saveVersion: what toJSON writes (1 without meshes)');
const j = m.toJSON();
j.info = { author: 'Ana' };
const m2 = new M.Model();
m2.load(j);
ok(m2.root.insts.size === 2, 'the kernel opens a file with an info key (it ignores what it does not know)');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
