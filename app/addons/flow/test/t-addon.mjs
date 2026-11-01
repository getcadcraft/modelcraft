/* SPDX-License-Identifier: Apache-2.0 */
// The add-on's files: the manifest through ModelCraft's own loader, every string the code asks for in en and es-MX, help in
// sync, SPDX headers, no network use. (The panel and the 3D view are checked in the browser: test/browser.mjs.)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
const { ok, section, mine, ADDON, APP } = globalThis.__flowTest;
const C = await mine('lib/catalog.js');
const R = await mine('lib/rng.js');

const read = (f) => fs.readFileSync(path.join(ADDON, f), 'utf8');
const files = (dir) => fs.readdirSync(path.join(ADDON, dir), { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? files(path.join(dir, d.name)) : [path.join(dir, d.name)]));

section('add-on: manifest, strings, help, hygiene');
{
  const { checkManifest } = await import(pathToFileURL(path.join(APP, 'addons.js')).href);
  const man = JSON.parse(read('addon.json'));
  const c = checkManifest(man, { app: 'modelcraft', apiVersion: '1.0' });
  ok(c.ok, 'ModelCraft\'s loader accepts addon.json', JSON.stringify(c));
  ok(man.default === 'off' && man.license === 'Apache-2.0' && fs.existsSync(path.join(ADDON, 'LICENSE')), 'bundled off by default, Apache-2.0 with its LICENSE');
  const idx = JSON.parse(fs.readFileSync(path.join(APP, 'addons/index.json'), 'utf8'));
  ok(idx.addons.includes('flow'), 'listed in ModelCraft\'s addons/index.json');
  ok(!/Demo3D|Emulate3D|Siemens|Rockwell/i.test(man.name + man.description + read('lang/en.json')), 'no product names in the name, description or strings');
}
{
  const en = JSON.parse(read('lang/en.json')), es = JSON.parse(read('lang/es-MX.json'));
  const keys = (o) => Object.keys(o).filter((k) => !k.startsWith('@')).sort().join('|');
  ok(keys(en) === keys(es), 'es-MX (draft) has every en key', '');
  const code = read('main.js') + read('lib/report.js');
  const used = new Set([...code.matchAll(/\bt\('([a-zA-Z][a-zA-Z0-9.-]*[a-zA-Z0-9])'/g)].map((m) => m[1]));
  for (const k of C.KINDS) { used.add('kind.' + k); used.add('group.' + C.KIND[k].group); for (const [n, s] of Object.entries(C.KIND[k].params)) { used.add('param.' + n); if (s.choices) for (const c of s.choices) used.add(`choice.${n}.${c}`); if (s.kind === 'text') used.add('hint.' + n); } }
  for (const d of R.DIST_KINDS) used.add('dist.' + d);
  for (const f of ['v', 'a', 'b', 'm', 'mean', 'sd', 'k']) used.add('dist.f.' + f);
  for (const p of ['x', 'y', 'z', 'rot']) used.add('pos.' + p);
  const src = read('lib/sim.js') + read('lib/layout.js');
  // problems and run failures (the two warnings, max-events and trace-full, have their own msg./play. strings)
  for (const m of src.matchAll(/code: '([a-z-]+)'/g)) if (!['max-events', 'trace-full'].includes(m[1])) used.add('problem.' + m[1]);
  for (const m of src.matchAll(/fail\('([a-z-]+)'/g)) used.add('problem.' + m[1]);
  for (const m of read('lib/report.js').matchAll(/\['([a-zA-Z]+)', '[nxp]'\]/g)) used.add('stat.' + m[1]);
  used.add('kind.vehicle');
  for (const k of ['one-shift', 'two-shifts', 'three-shifts', 'every-day']) used.add('shifts.p.' + k);
  for (const d of ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']) { used.add('shifts.day.' + d); used.add('shifts.d.' + d); }
  const missing = [...used].filter((k) => !(k in en));
  ok(missing.length === 0, `every string the add-on asks for is in en.json (${used.size} keys)`, missing.join(' '));
  ok(!Object.values(en).join(' ').match(/utilisation|colour|metre|behaviour|catalogue/i), 'US spelling in the strings');
}
{
  const out = execFileSync('php', [path.join(APP, '../../../../../bin/build-help.php'), '--addon', ADDON, '--id', 'flow', '--name', 'Material flow', '--app', 'modelcraft', '--check'], { encoding: 'utf8' });
  ok(/ok \(6 topics\)/.test(out), 'help builds (6 topics)', out.trim());
  const built = read('help/help.js');
  const tmp = fs.mkdtempSync(path.join(path.dirname(ADDON), '.flow-help-'));
  try {
    fs.cpSync(path.join(ADDON, 'help'), path.join(tmp, 'help'), { recursive: true });
    execFileSync('php', [path.join(APP, '../../../../../bin/build-help.php'), '--addon', tmp, '--id', 'flow', '--name', 'Material flow', '--app', 'modelcraft'], { encoding: 'utf8' });
    ok(fs.readFileSync(path.join(tmp, 'help/help.js'), 'utf8') === built, 'help/help.js is up to date with help/*.md');
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}
{
  const js = files('.').filter((f) => /\.(m?js)$/.test(f) && !f.endsWith('help.js'));
  ok(js.every((f) => /SPDX-License-Identifier: Apache-2.0/.test(read(f).slice(0, 200))), 'SPDX header on every module and test');
  const code = js.filter((f) => !f.startsWith('test')).map(read).join('\n');
  ok(!/\bfetch\(|XMLHttpRequest|WebSocket|navigator\.sendBeacon|\beval\(|new Function\(/.test(code), 'no network calls, no eval');
  const libs = files('lib').map(read).join('\n');
  ok(!/\bdocument\.|\bwindow\./.test(libs), 'lib/ is DOM-free');
}
