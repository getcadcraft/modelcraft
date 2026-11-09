/* SPDX-License-Identifier: Apache-2.0 */
// The add-on's files: the manifest through ModelCraft's own loader, every string the code asks for in en and es-MX, help in
// sync, SPDX headers, no network use. (The panel and the 3D view are checked in the browser: test/browser.mjs.)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
const { ok, section, mine, ADDON, APP } = globalThis.__flowTest;
const C = await mine('../../flow/catalog.js');
const R = await mine('../../flow/rng.js');

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
  const ENG = (k) => k.startsWith('plcmode.') || k.startsWith('orders.') || ['choice.mode.orders', 'param.orders', 'problem.orders-missing', 'problem.orders-empty'].includes(k);   // English only until the language run (rule 57)
  const keys = (o) => Object.keys(o).filter((k) => !k.startsWith('@') && !ENG(k)).sort().join('|');   // plcmode.* (0.9 SU.858): English only until translated
  const base = (o) => Object.fromEntries(Object.entries(o).filter(([k]) => !k.startsWith('robotx.') && !ENG(k)));
  ok(keys(base(en)) === keys(es), 'es-MX (draft) has every en key (the robotx.* robot-format strings are English only, 2026-11-06)', '');
  ok(Object.keys(es).every((k) => k in en || k.startsWith('@')), 'es-MX has no key en lacks');
  const code = read('main.js') + read('../../flow/report.js') + read('robot-ui.js') + read('plc-ui.js');
  const used = new Set([...code.matchAll(/\bt\('([a-zA-Z][a-zA-Z0-9.-]*[a-zA-Z0-9])'/g)].map((m) => m[1]));
  for (const k of C.KINDS) { used.add('kind.' + k); used.add('group.' + C.KIND[k].group); for (const [n, s] of Object.entries(C.KIND[k].params)) { used.add('param.' + n); if (s.choices) for (const c of s.choices) used.add(`choice.${n}.${c}`); if (s.kind === 'text') used.add('hint.' + n); } }
  for (const d of R.DIST_KINDS) used.add('dist.' + d);
  for (const f of ['v', 'a', 'b', 'm', 'mean', 'sd', 'k']) used.add('dist.f.' + f);
  for (const p of ['x', 'y', 'z', 'rot']) used.add('pos.' + p);
  const src = read('../../flow/sim.js') + read('../../flow/layout.js');
  // problems and run failures (the two warnings, max-events and trace-full, have their own msg./play. strings)
  for (const m of src.matchAll(/code: '([a-z-]+)'/g)) if (!['max-events', 'trace-full'].includes(m[1])) used.add('problem.' + m[1]);
  for (const m of src.matchAll(/fail\('([a-z-]+)'/g)) used.add('problem.' + m[1]);
  for (const m of read('../../flow/report.js').matchAll(/\['([a-zA-Z]+)', '[nxp]'\]/g)) used.add('stat.' + m[1]);
  used.add('kind.vehicle');
  for (const k of ['one-shift', 'two-shifts', 'three-shifts', 'every-day']) used.add('shifts.p.' + k);
  for (const d of ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']) { used.add('shifts.day.' + d); used.add('shifts.d.' + d); }
  for (const k of ['scara', 'arm', 'delta']) used.add('robot.kind.' + k);
  for (const k of ['scara', 'arm', 'delta', 'cartesian']) used.add('robotx.kind.' + k);
  for (const k of ['a', 'alpha', 'd', 'offset', 'min', 'max', 'vmax', 'amax']) used.add('robotx.col.' + k);
  for (const k of ['l1', 'l2', 'zmin', 'zmax', 'q1min', 'q1max', 'q2min', 'q2max', 'f', 'e', 'rf', 're', 'xmin', 'xmax', 'ymin', 'ymax']) used.add('robotx.param.' + k);
  for (const k of ['dh', 'scara', 'delta', 'cartesian']) used.add('robotx.table.' + (k === 'dh' ? 'dh' : k));
  for (const k of ['neutral', 'open', 'vendor']) used.add('robotx.fmt.group.' + k);
  for (const k of ['no-run', 'robot-type', 'six-axes', 'signal-range', 'unknown-format']) used.add('robotx.refused.' + k);
  for (const k of ['signal', 'tool', 'frame', 'blend', 'program', 'wait']) used.add('robotx.omit.' + k);
  for (const k of ['out', 'waitin']) used.add('robotx.op.' + k);
  used.add('robotx.issue.io-syntax');
  for (const k of ['radius', 'limits', 'orientation']) used.add('robot.why.' + k);
  for (const k of ['movej', 'movel', 'grip', 'release', 'wait']) used.add('robot.op.' + k);
  for (const k of ['header', 'syntax', 'unknown', 'speed-range', 'unreachable', 'path-unreachable', 'joint-jump', 'no-target']) used.add('robot.issue.' + k);
  const missing = [...used].filter((k) => !(k in en));
  ok(missing.length === 0, `every string the add-on asks for is in en.json (${used.size} keys)`, missing.join(' '));
  ok(!Object.values(en).join(' ').match(/utilisation|colour|metre|behaviour|catalogue/i), 'US spelling in the strings');
}
{
  const out = execFileSync('php', [path.join(APP, '../../../../../bin/build-help.php'), '--addon', ADDON, '--id', 'flow', '--name', 'Material flow', '--app', 'modelcraft', '--check'], { encoding: 'utf8' });
  ok(/ok \(9 topics\)/.test(out), 'help builds (9 topics)', out.trim());
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
