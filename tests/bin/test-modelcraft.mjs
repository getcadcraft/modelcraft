#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-modelcraft.mjs — ModelCraft's DOM-free modules (assets/apps/modelcraft/dev): the model kernel
 * (edges, faces, holes, push/pull, groups, components, undo), inference snapping, the camera, sun
 * position, lengths, and every file format, read back by a second reader where one exists
 * (web-ifc for IFC, the Khronos glTF validator and trimesh for GLB/OBJ/STL, the Collada 1.4.1 schema,
 * pycollada and trimesh for DAE; DAE import from a pycollada-written file; DWG import from the CadCraft
 * sample DWGs in /var/www/CADCRAFT/testfiles/dwg-samples, read in place by cc-dwg's readDwg, against LibreDWG's own
 * DXF as an independent oracle).
 *
 *   node bin/test-modelcraft.mjs [--build dev|x.y] [--verbose] [--keep]
 * Second readers: (cd tools/modelcraft-test && npm install) and
 * python3 -m venv tools/modelcraft-test/venv && tools/modelcraft-test/venv/bin/pip install trimesh numpy pycollada lxml
 * and, for the Khronos copy of the schema (else pycollada's bundled copy is used),
 * curl -o tools/modelcraft-test/schema/collada_schema_1_4_1.xsd https://www.khronos.org/files/collada_schema_1_4_1.xsd
 * (each is skipped with a note when missing). --keep leaves the exported files in tmp/modelcraft-test/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bi = process.argv.indexOf('--build');
const BUILD = bi > 0 ? process.argv[bi + 1] : 'dev';
const APP = path.join(ROOT, 'public_html/assets/apps/modelcraft', BUILD);
const VERBOSE = process.argv.includes('--verbose');
const KEEP = process.argv.includes('--keep');
const OUT = path.join(ROOT, 'tmp/modelcraft-test');
fs.mkdirSync(OUT, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (VERBOSE) console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m); } };
const close = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
const section = (s) => console.log('\n== ' + s);

// language files (0.4 G): the kernel says every word through t(); load the build's English catalog before anything runs
const I18N = await import(path.join(APP, 'i18n.js'));
const LANG_FILE = path.join(APP, 'lang/en.json');
if (fs.existsSync(LANG_FILE)) I18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(LANG_FILE, 'utf8')) });
const M = await import(path.join(APP, 'model.js'));
const V = await import(path.join(APP, 'vec.js'));
const { Model, addEdge, addPolygon, rectPts, ngonPts, pushPull, solidInfo, faceNormal, eraseEdges, transformSel, copySel, faceArea } = M;

const facesFacing = (def, n) => [...def.faces].filter(([, f]) => V.dot(faceNormal(def, f), n) > 1 - 1e-9).map(([id]) => id);
const connected0 = (def) => M.connected(def, [...def.faces.keys()].slice(0, 1).map((id) => ({ t: 'f', id })));
const euler = (def) => def.verts.size - def.edges.size + def.faces.size;

// ---------------------------------------------------------------------------
section('edges make faces');
{
  const m = new Model(), d = m.root;
  addEdge(d, [0, 0, 0], [4, 0, 0]);
  addEdge(d, [4, 0, 0], [4, 3, 0]);
  addEdge(d, [4, 3, 0], [0, 3, 0]);
  ok(d.faces.size === 0, 'three lines: no face yet');
  addEdge(d, [0, 3, 0], [0, 0, 0]);
  ok(d.faces.size === 1, 'the fourth line closes the loop: one face');
  const f = [...d.faces.values()][0];
  ok(close(faceArea(d, f), 12), 'face area 12 m²');
  ok(close(faceNormal(d, f)[2], 1), 'a ground face faces up');
  addEdge(d, [2, 0, 0], [2, 3, 0]);
  ok(d.faces.size === 2, 'a line across the face from edge to edge splits it in two');
  ok([...d.faces.values()].every((g) => close(faceArea(d, g), 6)), 'two halves of 6 m²');
  ok(d.edges.size === 7, 'the split edges: 7 edges');
  addEdge(d, [1, 1.5, 0], [1.5, 1.5, 0]);
  ok(d.faces.size === 2, 'a dangling line on a face makes no face');
  eraseEdges(d, [...d.edges].filter(([, e]) => V.dist(d.verts.get(e.a), [2, 0, 0]) < 1e-9 || V.dist(d.verts.get(e.b), [2, 0, 0]) < 1e-9).filter(([, e]) => Math.abs(d.verts.get(e.a)[0] - d.verts.get(e.b)[0]) < 1e-9).map(([id]) => id));
  ok(d.faces.size === 1 && close(faceArea(d, [...d.faces.values()][0]), 12), 'erasing the splitting edge merges the halves');
}
{
  const m = new Model(), d = m.root;
  addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 10, 10));
  addPolygon(d, rectPts([3, 3, 0], [1, 0, 0], [0, 1, 0], 2, 2));
  ok(d.faces.size === 2, 'a rectangle inside a face: two faces');
  const big = [...d.faces.values()].find((f) => f.loops.length === 2);
  ok(!!big && close(faceArea(d, big), 96), 'the outer face gets a hole (96 m²)');
  addPolygon(d, ngonPts([7, 7, 0], [0, 0, 1], [1, 0, 0], 1, 24));
  ok(d.faces.size === 3, 'a circle (24 sides) on the face: another face + hole');
  const holed = [...d.faces.values()].find((f) => f.loops.length === 3);
  ok(!!holed, 'the outer face now has two holes');
}

section('push/pull');
{
  const m = new Model(), d = m.root;
  addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3));
  const fid = [...d.faces.keys()][0];
  const r = pushPull(d, fid, 2.5);
  ok(r.ok && r.mode === 'extrude', 'a lone face extrudes');
  let s = solidInfo(d);
  ok(s.faces === 6 && s.edges === 12 && s.verts === 8, `box: 6 faces, 12 edges, 8 vertices (${s.faces}/${s.edges}/${s.verts})`);
  ok(s.closed, 'the box is closed (every edge has two faces)');
  ok(close(s.volume, 30), `volume 30 m³ with outward faces (${s.volume})`);
  ok(euler(d) === 2, 'Euler V − E + F = 2');
  const top = facesFacing(d, [0, 0, 1]);
  ok(top.length === 1, 'one face looks up');
  const r2 = pushPull(d, top[0], 1.5);
  ok(r2.mode === 'move', 'pulling the top of a box moves it');
  s = solidInfo(d);
  ok(s.faces === 6 && s.closed && close(s.volume, 48), `taller box: 6 faces, volume 48 (${s.volume})`);
  const r3 = pushPull(d, top[0], -1.5);
  s = solidInfo(d);
  ok(r3.mode === 'move' && close(s.volume, 30), 'pushing back by 1.5 restores 30 m³');
  const r4 = pushPull(d, facesFacing(d, [0, 0, 1])[0], -10);
  ok(close(r4.distance, -2.5), 'pushing further than the height stops at zero');
  ok(d.faces.size === 0, `pushed back to zero: the solid is gone (${d.faces.size} faces left)`);
}
{
  const m = new Model(), d = m.root;
  addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 1));
  pushPull(d, [...d.faces.keys()][0], 3);    // wall 4 long, 1 thick, 3 high
  const front = facesFacing(d, [0, -1, 0])[0];
  ok(front !== undefined, 'the wall has a front face');
  addPolygon(d, rectPts([1, 0, 0.5], [1, 0, 0], [0, 0, 1], 1, 1.5));
  ok(d.def === undefined && facesFacing(d, [0, -1, 0]).length === 2, 'a rectangle drawn on the front face splits it (2 faces look forward)');
  const win = facesFacing(d, [0, -1, 0]).find((id) => close(faceArea(d, d.faces.get(id)), 1.5));
  ok(win !== undefined, 'the window face is 1.5 m²');
  const r = pushPull(d, win, -5);
  ok(close(r.distance, -1), `pushing in stops at the back face (distance ${r.distance})`);
  const s = solidInfo(d);
  ok(s.closed, 'the wall with an opening is still closed');
  ok(close(s.volume, 12 - 1.5), `volume = 12 − 1.5 m³ (${s.volume})`);
  const back = facesFacing(d, [0, 1, 0]);
  ok(back.length === 1 && d.faces.get(back[0]).loops.length === 2, 'the back face has a hole');
  const rings = [...d.faces.values()].reduce((k, f) => k + f.loops.length - 1, 0);
  ok(euler(d) - rings === 0, `a solid with a hole through it: V − E + F − rings = 0 (genus 1) (${euler(d) - rings})`);
}
{
  const m = new Model(), d = m.root;
  addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 4));
  pushPull(d, [...d.faces.keys()][0], 2);
  const top = facesFacing(d, [0, 0, 1])[0];
  addPolygon(d, rectPts([1, 1, 2], [1, 0, 0], [0, 1, 0], 2, 2));
  const inner = facesFacing(d, [0, 0, 1]).find((id) => close(faceArea(d, d.faces.get(id)), 4));
  const r = pushPull(d, inner, 1);
  let s = solidInfo(d);
  ok(r.mode === 'extrude' && s.closed && close(s.volume, 36), `a bump on the top: closed, 32 + 4 = 36 m³ (${s.volume})`);
  const r2 = pushPull(d, r.face, -1);
  s = solidInfo(d);
  ok(r2.mode === 'move' && s.closed && close(s.volume, 32), `the bump pushed back to zero: 32 m³ again (${s.volume})`);
  const recess = facesFacing(d, [0, 0, 1]).find((id) => close(faceArea(d, d.faces.get(id)), 4));
  if (recess !== undefined) {
    pushPull(d, recess, -0.5);
    s = solidInfo(d);
    ok(s.closed && close(s.volume, 30), `a recess 0.5 deep: 30 m³ (${s.volume})`);
  } else ok(false, 'inner face still there after push back');
  void top;
}
{
  const m = new Model(), d = m.root;
  addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2));
  const r = pushPull(d, [...d.faces.keys()][0], -1);
  const s = solidInfo(d);
  ok(r.ok && s.closed && close(s.volume, 4), `pushing a lone face down makes a box below it (${s.volume})`);
}

section('undo');
{
  const m = new Model();
  m.change('Rectangle', (mm) => addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3)));
  m.change('Push/pull', (mm) => pushPull(mm.root, [...mm.root.faces.keys()][0], 2));
  ok(m.root.faces.size === 6, 'two steps: a box');
  ok(m.undo() === 'Push/pull' && m.root.faces.size === 1, 'undo → back to the rectangle');
  ok(m.undo() === 'Rectangle' && m.root.faces.size === 0 && m.root.edges.size === 0, 'undo → empty');
  ok(m.undo() === null, 'nothing more to undo');
  m.redo(); m.redo();
  ok(m.root.faces.size === 6 && close(solidInfo(m.root).volume, 24), 'redo twice → the box again');
  m.begin();
  const top = facesFacing(m.root, [0, 0, 1])[0];
  for (const h of [0.5, 1, 1.5]) m.preview((mm) => pushPull(mm.root, top, h));
  m.commit('Push/pull');
  ok(close(solidInfo(m.root).volume, 42), 'a live preview commits only its last state (24 + 12 × 1.5 = 42 m³)');
  m.undo();
  ok(close(solidInfo(m.root).volume, 24), 'and undoes in one step');
}


section('units, sun, camera');
{
  const U = await import(path.join(APP, 'units.js'));
  const IN = 0.0254, FT = 0.3048;
  const cases = [["10'", 'ft-in', 10 * FT], ["10'6\"", 'ft-in', 10 * FT + 6 * IN], ["10'-6 1/2\"", 'ft-in', 10 * FT + 6.5 * IN], ['6 1/2"', 'm', 6.5 * IN],
    ['3/4"', 'm', 0.75 * IN], ['18', 'ft-in', 18 * IN], ['3.2m', 'ft-in', 3.2], ['320cm', 'm', 3.2], ['3200', 'mm', 3.2], ['1.5ft', 'm', 1.5 * FT], ['-2m', 'm', -2]];
  for (const [t, u, v] of cases) ok(close(U.parseLength(t, u), v, 1e-9), `parseLength(${t}, ${u}) = ${v.toFixed(5)} m`);
  ok(U.parseLength('abc', 'm') === null && U.parseLength('', 'm') === null, 'nonsense is refused');
  ok(U.formatLength(10 * FT + 6.5 * IN, 'ft-in') === `10' 6 1/2"`, 'formatLength ft-in to 1/16"');
  ok(U.formatLength(3.25, 'm') === '3.25 m' && U.formatLength(3.25, 'mm') === '3250 mm', 'formatLength m / mm');
  const pv = U.parseValue('4m,3m', 'm');
  ok(pv.kind === 'list' && close(pv.vs[0], 4) && close(pv.vs[1], 3), 'value box: 4m,3m');
  ok(U.parseValue('24s').n === 24 && U.parseValue('3x').kind === 'array' && U.parseValue('/4').n === 4, 'value box: 24s, 3x, /4');
  ok(U.parseValue('[1,2,3]', 'm').kind === 'abs' && U.parseValue('<1,0,0>', 'm').p[0] === 1, 'value box: [x,y,z] and <dx,dy,dz>');
  // a new model's unit from the browser locale: feet and inches in the US, Liberia and Myanmar, else millimeters
  const loc = [['en-US', 'ft-in'], ['en', 'ft-in'], ['es-US', 'ft-in'], ['en-LR', 'ft-in'], ['my', 'ft-in'], ['my-MM', 'ft-in'], ['en-GB', 'mm'], ['en-CA', 'mm'],
    ['de-DE', 'mm'], ['fr', 'mm'], ['ja-JP', 'mm'], ['en-AU', 'mm'], ['es-MX', 'mm'], ['', 'mm'], ['not a locale!', 'mm']];
  const badLoc = loc.filter(([l, want]) => U.localeUnits(l) !== want).map(([l]) => l + ' → ' + U.localeUnits(l));
  ok(!badLoc.length, `localeUnits: ${loc.length} locales (en-US, en, es-US, en-LR, my → ft-in; en-GB, de-DE, ja-JP, … → mm)${badLoc.length ? ': ' + badLoc.join(', ') : ''}`);
  // the bare-number rule follows the unit: inches for ft-in, millimeters for a millimeter model
  ok(close(U.parseLength('18', 'ft-in'), 18 * IN, 1e-12) && close(U.parseLength('2400', 'mm'), 2.4, 1e-12) && close(U.parseValue('4000,3000', 'mm').vs[1], 3, 1e-12), 'bare numbers: 18 → 18" (ft-in), 2400 → 2.4 m and 4000,3000 → 4 m × 3 m (mm)');
  ok(U.formatArea(12, 'mm') === '12 m²' && U.formatArea(0.0016, 'mm') === '1600 mm²' && U.formatVolume(30, 'mm') === '30 m³' && U.formatVolume(64e-6, 'mm') === '64000 mm³',
    'millimeter models: a room\'s area and volume in m² / m³, small parts in mm² / mm³');

  const { sunPosition } = await import(path.join(APP, 'sun.js'));
  // solar noon altitude ≈ 90 − lat + declination; find the day's highest sun and compare
  let best = -99;
  for (let h = 10; h <= 15; h += 1 / 60) best = Math.max(best, sunPosition({ month: 6, day: 21, hour: h, lat: 40, lon: -105, tz: -7 }).altitude);
  ok(close(best, 90 - 40 + 23.44, 0.3), `June solstice, 40° N: highest sun ${best.toFixed(2)}° (≈ 73.44°)`);
  best = -99;
  for (let h = 10; h <= 15; h += 1 / 60) best = Math.max(best, sunPosition({ month: 12, day: 21, hour: h, lat: 40, lon: -105, tz: -7 }).altitude);
  ok(close(best, 90 - 40 - 23.44, 0.3), `December solstice, 40° N: ${best.toFixed(2)}° (≈ 26.56°)`);
  const am = sunPosition({ month: 3, day: 20, hour: 8, lat: 40, lon: -105, tz: -7 }), pm = sunPosition({ month: 3, day: 20, hour: 16, lat: 40, lon: -105, tz: -7 });
  ok(am.azimuth > 90 && am.azimuth < 135 && pm.azimuth > 225 && pm.azimuth < 270, `equinox: morning sun in the east-southeast (${am.azimuth.toFixed(0)}°), afternoon west-southwest (${pm.azimuth.toFixed(0)}°)`);
  ok(am.dir[0] > 0 && pm.dir[0] < 0 && close(V.len(am.dir), 1), 'sun direction: +X is east');
  ok(!sunPosition({ month: 6, day: 21, hour: 1, lat: 40, lon: -105, tz: -7 }).up, 'no sun at 1 am');

  const { Camera } = await import(path.join(APP, 'camera.js'));
  const cam = new Camera();
  cam.setSize(800, 600);
  cam.eye = [10, -10, 10]; cam.target = [0, 0, 0]; cam.clip(10);
  const s = cam.project([0, 0, 0]);
  ok(close(s[0], 400, 1e-6) && close(s[1], 300, 1e-6), 'the target projects to the centre');
  const r = cam.ray(123, 456), hit = V.rayPlane(r.o, r.d, { n: [0, 0, 1], d: 0 }), back = cam.project(hit.p);
  ok(close(back[0], 123, 1e-6) && close(back[1], 456, 1e-6), 'a pick ray and the projection agree (perspective)');
  cam.persp = false;
  const r2 = cam.ray(700, 50), hit2 = V.rayPlane(r2.o, r2.d, { n: [0, 0, 1], d: 0 }), back2 = cam.project(hit2.p);
  ok(close(back2[0], 700, 1e-6) && close(back2[1], 50, 1e-6), 'and in parallel projection');
  cam.persp = true;
  const before = cam.ray(600, 200), P = V.rayPlane(before.o, before.d, { n: [0, 0, 1], d: 0 }).p;
  cam.zoomAt(0.5, 600, 200, P);
  const after = cam.project(P);
  ok(close(after[0], 600, 1e-6) && close(after[1], 200, 1e-6) && close(cam.distance, V.len([10, -10, 10]) / 2, 1e-9), 'zoom at the cursor keeps the point under it');
  cam.fit({ min: [0, 0, 0], max: [4, 3, 2] });
  const corners = [[0, 0, 0], [4, 0, 0], [0, 3, 0], [4, 3, 0], [0, 0, 2], [4, 0, 2], [0, 3, 2], [4, 3, 2]].map((p) => cam.project(p));
  ok(corners.every((c) => c && c[0] > 0 && c[0] < 800 && c[1] > 0 && c[1] < 600), 'zoom extents shows the whole box');
}

section('tools, driven by clicks through a camera');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, infer, pick } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model();
  model.units = 'm';
  const cam = new Camera();
  cam.setSize(1000, 800);
  let cache = null;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(s) { host.sel = s; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); host.sel = []; },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const s = at(p); T.click(s[0], s[1], { ...mods, time: (clickAt.t = (clickAt.t || 0) + 1000) }); };
  const moveTo = (p) => { const s = at(p); T.move({ x: s[0], y: s[1] }); };
  // look down at the ground from an angle
  cam.eye = [6, -14, 12]; cam.target = [2, 2, 0]; cam.clip(20);

  T.set('rect');
  clickAt([0, 0, 0]);
  moveTo([4, 3, 0]);
  T.value('4m,3m');
  ok(model.root.faces.size === 1 && close(faceArea(model.root, [...model.root.faces.values()][0]), 12), 'rectangle tool: two clicks + "4m,3m" → a 12 m² face');
  const sc = host.scene();
  const snapEnd = infer(sc, cam, at([4, 0, 0])[0] + 4, at([4, 0, 0])[1] - 3, {});
  ok(snapEnd.kind === 'end' && V.dist(snapEnd.p, [4, 0, 0]) < 1e-9, 'inference: endpoint within a few pixels');
  const mp = at([2, 0, 0]);
  const snapMid = infer(sc, cam, mp[0] + 2, mp[1] + 2, {});
  ok(snapMid.kind === 'mid' && V.dist(snapMid.p, [2, 0, 0]) < 1e-9, 'inference: midpoint');
  const ep = at([1, 3, 0]);
  const snapOn = infer(sc, cam, ep[0], ep[1] + 1, {});
  ok(snapOn.kind === 'edge' && Math.abs(snapOn.p[1] - 3) < 1e-6, 'inference: on edge');
  const fp = at([2.5, 1.2, 0]);
  const snapFace = infer(sc, cam, fp[0], fp[1], {});
  ok(snapFace.kind === 'face' && close(snapFace.p[2], 0) && !!snapFace.face, 'inference: on face');
  const ax = at([8, 0.0, 0]);
  const snapAx = infer(sc, cam, ax[0], ax[1] + 5, { from: [4, 0, 0], axes: { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] } });
  ok(snapAx.kind === 'axis-x' && close(snapAx.p[1], 0) && close(snapAx.p[2], 0), 'inference: on red axis from the start point');
  const up = at([4, 3, 2]);
  const snapZ = infer(sc, cam, up[0] + 3, up[1], { from: [4, 3, 0], axes: { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] } });
  ok(snapZ.kind === 'axis-z' && close(snapZ.p[0], 4, 1e-6) && close(snapZ.p[1], 3, 1e-6), 'inference: on blue axis');
  const lk = infer(sc, cam, up[0] + 40, up[1] + 30, { from: [4, 3, 0], lockDir: [0, 0, 1] });
  ok(lk.kind === 'lock' && close(lk.p[0], 4, 1e-6) && close(lk.p[1], 3, 1e-6), 'a locked axis keeps the point on it');

  T.set('push');
  clickAt([2, 1.5, 0]);
  T.value('2.5');
  let s = solidInfo(model.root);
  ok(s.closed && close(s.volume, 30), `push/pull tool: click the face, type 2.5 → 30 m³ box (${s.volume})`);
  // pull the top up by clicking and moving along the blue axis
  T.set('push');
  clickAt([2, 1.5, 2.5]);
  moveTo([2, 1.5, 3.5]);
  clickAt([2, 1.5, 3.5]);
  s = solidInfo(model.root);
  ok(s.closed && close(s.volume, 42, 0.05), `push/pull by mouse: the top follows the cursor to 3.5 m (${s.volume?.toFixed(3)} m³)`);
  model.undo();
  ok(close(solidInfo(model.root).volume, 30), 'one undo per push/pull');

  // line tool: a line across the top face splits it
  T.set('line');
  clickAt([0, 1, 2.5]);
  clickAt([4, 1, 2.5]);
  T.escape();
  ok(facesFacing(model.root, [0, 0, 1]).length === 2, 'line tool: a line across the top face from edge to edge splits it');
  T.set('select');
  clickAt([2, 0.5, 2.5]);
  ok(host.sel.length === 1 && host.sel[0].t === 'f', 'select: click a face');
  const sTop = host.sel[0];
  clickAt([2, 0.5, 2.5]); clickAt.t -= 900; clickAt([2, 0.5, 2.5]);
  ok(host.sel.length === 5 && host.sel.filter((x) => x.t === 'e').length === 4, 'select: double-click → the face and its 4 edges');
  void sTop;
  // triple click selects everything connected
  clickAt.t += 2000;
  clickAt([2, 0.5, 2.5]); clickAt.t -= 900; clickAt([2, 0.5, 2.5]); clickAt.t -= 900; clickAt([2, 0.5, 2.5]);
  ok(host.sel.filter((x) => x.t === 'f').length === model.root.faces.size, `select: triple-click → everything connected (${host.sel.length})`);
  // window and crossing
  const a = at([-1, -1, 0]), b = at([5, 4, 3]);
  T.set('select');
  T.move({ x: Math.min(a[0], b[0]) - 200, y: 5 });
  T.down({ x: 5, y: 5, time: 1e7 }); T.move({ x: 995, y: 795 }); T.up({ x: 995, y: 795 });
  ok(host.sel.length === model.root.faces.size + model.root.edges.size - [...model.root.edges.values()].filter((e) => e.soft).length, 'window selection over everything selects it all');
  T.down({ x: 995, y: 795, time: 2e7 }); T.move({ x: at([2, 1.5, 2.5])[0], y: at([2, 1.5, 2.5])[1] }); T.up({ x: at([2, 1.5, 2.5])[0], y: at([2, 1.5, 2.5])[1] });
  ok(host.sel.length > 0, `crossing selection (right to left) picks what it touches (${host.sel.length})`);

  // groups, move, components
  model.change('Make group', (m) => m.makeGroup(m.root, connected0(m.root), 'group'));
  ok(model.root.faces.size === 0 && model.root.insts.size === 1, 'make group: the box moves into a group');
  const iid = [...model.root.insts.keys()][0];
  host.sel = [{ t: 'i', id: iid }];
  T.set('move');
  clickAt([0, 0, 0]);
  moveTo([6, 0, 0]);
  T.value('6');
  const inst = model.root.insts.get(iid);
  ok(close(inst.m[12], 6) && close(inst.m[13], 0), 'move tool: click a point, type 6 → the group moves 6 m along red');
  T.set('move');
  host.sel = [{ t: 'i', id: iid }];
  clickAt([6, 0, 0], { ctrl: true });
  // from this camera the green and blue axes through (6,0,0) overlap on screen: lock green with the ← key
  ok(T.key('ArrowLeft') && T.lock?.kind === 'axis-y', 'the ← key locks the green axis');
  moveTo([6, 5, 0]);
  T.value('5');
  T.value('3x');
  ok(model.root.insts.size === 4, `copy with Ctrl, then "3x" → three copies in a row (${model.root.insts.size} instances)`);
  const ys = [...model.root.insts.values()].map((i) => +i.m[13].toFixed(6)).sort((x, y) => x - y);
  ok(JSON.stringify(ys) === JSON.stringify([0, 5, 10, 15]), `copies at 5 m spacing (${ys})`);
  // editing a group: double-click opens it; a second group copy shares nothing (groups are copied as instances of one def until made unique)
  const counts = model.instanceCounts();
  ok([...counts.values()].includes(4), 'copies of a group share one definition until edited');

  // rotate an instance 90° about blue
  T.set('rotate');
  host.sel = [{ t: 'i', id: iid }];
  clickAt([6, 0, 0]);
  clickAt([8, 0, 0]);
  T.move({ x: at([6, 2, 0])[0], y: at([6, 2, 0])[1] });
  T.value('90');
  const im = model.root.insts.get(iid).m;
  ok(close(im[0], 0, 1e-9) && close(im[1], 1, 1e-9), 'rotate tool: 90° about the blue axis turns red into green');
  // scale by three clicks (the tool started with nothing selected, so no grips: 0.4 M16 grips are tested below)
  host.sel = [];
  T.set('scale');
  host.sel = [{ t: 'i', id: iid }];
  clickAt([6, 0, 0]);
  clickAt([7, 0, 0]);
  T.move({ x: at([8, 0, 0])[0], y: at([8, 0, 0])[1] });
  T.value('2');
  const sm = model.root.insts.get(iid).m;
  ok(close(V.len([sm[0], sm[1], sm[2]]), 2, 1e-9), 'scale tool: factor 2 doubles the group');

  // tape measure: guide line parallel to an edge, guide point
  const m2 = new Model(); m2.units = 'm';
  host.model = m2; host.path = []; host.sel = []; cache = null;
  m2.change('r', (m) => addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3)));
  T.set('tape');
  clickAt([2.3, 0, 0]);
  moveTo([2.3, 1, 0]);
  T.value('1.2');
  const gl = [...m2.guides.values()][0];
  ok(gl && gl.kind === 'line' && close(Math.abs(gl.d[0]), 1) && close(gl.p[1], 1.2, 1e-9), 'tape measure from an edge: a parallel guide line 1.2 m off');
  T.set('tape');
  clickAt([4, 3, 0]);
  moveTo([4, 5, 0]);
  T.value('2');
  const gp = [...m2.guides.values()].find((g) => g.kind === 'point');
  ok(gp && V.dist(gp.p, [4, 5, 0]) < 1e-6, 'tape measure from a point: a guide point 2 m away');
  const sg = sceneOf(m2), gpp = at([1.0, 1.2, 0]);
  const onG = infer(sg, cam, gpp[0], gpp[1] - 2, {});
  ok(onG.kind === 'guide' || onG.kind === 'face', `inference sees the guide line (${onG.kind})`);
  const gpt = at([4, 5, 0]);
  ok(infer(sg, cam, gpt[0] + 2, gpt[1], {}).kind === 'guidept', 'inference snaps to the guide point');

  // circle + push → cylinder with soft sides
  T.set('circle');
  clickAt([8, 8, 0]);
  moveTo([9, 8, 0]);
  T.value('1');
  const circ = [...m2.root.faces.values()].find((f) => f.loops[0].length === 24);
  ok(!!circ && close(faceArea(m2.root, circ), 0.5 * 24 * Math.sin(2 * Math.PI / 24), 1e-9), 'circle tool: 24 sides, radius 1');
  T.set('push');
  clickAt([8, 8, 0]);
  T.value('3');
  const cyl = [...m2.root.edges.values()].filter((e) => e.soft).length;
  ok(cyl === 24, `pulled circle: 24 soft side edges (${cyl})`);

  // eraser on an edge between two coplanar faces heals them
  T.set('line');
  clickAt([2, 0, 0]); clickAt([2, 3, 0]); T.escape();
  const ground = () => facesFacing(m2.root, [0, 0, 1]).filter((id) => m2.root.faces.get(id).loops[0].length < 24 && close(m2.root.verts.get(m2.root.faces.get(id).loops[0][0])[2], 0)).length;
  const nRect = ground();
  T.set('erase');
  const mid = at([2, 1.5, 0]);
  T.down({ x: mid[0], y: mid[1], time: 9e7 }); T.up({ x: mid[0], y: mid[1] });
  const nAfter = ground();
  ok(nRect === 2 && nAfter === 1, `eraser: the splitting line goes and the two halves heal (${nRect} → ${nAfter})`);
  void pick;
}

section('tools on faces and inside groups');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, infer } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null;
  const host = {
    model, cam, path: [], sel: [], units: 'm',
    scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print() {}, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  let t = 0;
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  model.change('box', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 1)); pushPull(m.root, [...m.root.faces.keys()][0], 3); });
  cam.eye = [2, -12, 2.5]; cam.target = [2, 0, 1.5]; cam.clip(20);
  // a rectangle on the vertical front face, then pushed through: a window opening
  T.set('rect');
  clickAt([1, 0, 0.8]);
  moveTo([2.2, 0, 2.2]);
  T.value('1.2,1.4');
  ok(facesFacing(model.root, [0, -1, 0]).length === 2, 'rectangle tool on a vertical face: drawn in its plane, splitting it');
  const winF = facesFacing(model.root, [0, -1, 0]).find((id) => close(faceArea(model.root, model.root.faces.get(id)), 1.68));
  ok(winF !== undefined, 'the window face is 1.2 × 1.4 = 1.68 m² (width along red, height along blue)');
  T.set('push');
  clickAt([1.6, 0, 1.5]);
  moveTo([1.6, 0.5, 1.5]);
  T.value('5');
  const sw = solidInfo(model.root);
  ok(sw.closed && close(sw.volume, 12 - 1.68), `push/pull tool through the wall: an opening, still closed (${sw.volume?.toFixed(3)} m³)`);

  // parallel / perpendicular inference to the last edge hovered
  const sc = host.scene();
  const ref = { a: [0, 0, 0], b: [1, 1, 0] };
  cam.eye = [2, -2, 14]; cam.target = [2, 2, 0]; cam.clip(20);
  const from = [6, 0, 0], tgt = [8, 2, 0], tq = at(tgt);
  const par = infer(sc, cam, tq[0] + 2, tq[1], { from, ref, axes: { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] } });
  ok(par.kind === 'parallel' && close(par.p[0] - 6, par.p[1], 1e-6), `inference: parallel to the reference edge (${par.kind})`);
  const tq2 = at([8, -2, 0]);
  const per = infer(sc, cam, tq2[0] + 2, tq2[1], { from, ref, axes: { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] } });
  ok(per.kind === 'perp' && close(per.p[0] - 6, -per.p[1], 1e-6), `inference: perpendicular to it (${per.kind})`);

  // edit inside a moved group with the tools: geometry goes into the group's own coordinates
  const m2 = new Model(); m2.units = 'm';
  host.model = m2; cache = null;
  host.scene = () => { if (!cache || cache.version !== m2.version) cache = sceneOf(m2); return cache; };
  const iid = m2.change('g', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2)); pushPull(m.root, [...m.root.faces.keys()][0], 1); const id = m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: [...m.root.faces.keys()][0] }]), 'component', 'Block'); m.root.insts.get(id).m = V.translation([10, 0, 0]); m.place(m.root, m.root.insts.get(id).def, V.translation([20, 0, 0])); return id; });
  host.openContext([iid]);
  cam.eye = [11, -6, 8]; cam.target = [11, 1, 1]; cam.clip(20);
  T.set('rect');
  clickAt([10.5, 0.5, 1]);
  moveTo([11.5, 1.5, 1]);
  T.value('1,1');
  const d = m2.def(m2.root.insts.get(iid).def);
  const inner = facesFacing(d, [0, 0, 1]).find((id) => close(faceArea(d, d.faces.get(id)), 1));
  ok(inner !== undefined && close(d.verts.get(d.faces.get(inner).loops[0][0])[2], 1), 'inside the open component: the rectangle lands on its top in local coordinates');
  T.set('push');
  clickAt([11, 1, 1]);
  T.value('0.5');
  const vols = [];
  m2.walk((dd, wm, p) => { if (p.length === 1) vols.push(solidInfo(dd).volume); });
  ok(vols.length === 2 && vols.every((v) => close(v, 4.5)), `pulled inside one instance: both instances of the component change (${vols.map((v) => v?.toFixed(2))})`);
  const sc2 = sceneOf(m2);
  cam.eye = [16, -14, 12]; cam.target = [16, 1, 0.5]; cam.clip(30);
  const other = infer(sc2, cam, at([22, 2, 1])[0] + 2, at([22, 2, 1])[1] + 2, {});
  ok(other.kind === 'end' && V.dist(other.p, [22, 2, 1]) < 1e-9, 'inference reaches geometry in other instances (world coordinates) ' + JSON.stringify([other.kind, other.p, at([22, 2, 1])]));

  // U.2 (user, 2026-10-13): a circle from the midpoint of a pushed shape's end face lies in that face, not flat on the ground
  for (const inGroup of [false, true]) {
    const m3 = new Model(); m3.units = 'm';
    host.model = m3; host.path = []; host.sel = []; cache = null;
    host.scene = () => { if (!cache || cache.version !== m3.version) cache = sceneOf(m3); return cache; };
    m3.change('bar', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 3, 0.3)); pushPull(m.root, [...m.root.faces.keys()][0], 0.2); });
    if (inGroup) {
      const gid = m3.change('g', (m) => m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: [...m.root.faces.keys()][0] }]), 'group'));
      host.openContext([gid]);
    }
    const D = () => (inGroup ? m3.def(m3.root.insts.get(host.path[0]).def) : m3.root);
    const endFaces = () => facesFacing(D(), [1, 0, 0]).length;
    cam.eye = [4.2, -0.9, 0.7]; cam.target = [3, 0.15, 0.1]; cam.clip(8);
    const where = inGroup ? ' (inside a group)' : '';
    const sce = host.scene(), em = at([3, 0.15, 0.2]);
    const r0 = infer(sce, cam, em[0], em[1] + 2, {});
    ok(r0.kind === 'mid' && r0.face && close(Math.abs(r0.face.n[0]), 1), `a midpoint on the end face carries that face${where} (${r0.kind}, ${r0.face ? r0.face.n.map((x) => +x.toFixed(3)) : 'no face'})`);
    const cm = at([3, 0.15, 0.1]);
    const rc = infer(sce, cam, cm[0] + 3, cm[1] - 2, {});
    ok(rc.kind === 'center' && V.dist(rc.p, [3, 0.15, 0.1]) < 1e-9 && rc.face, `inference: center of face${where} (${rc.kind})`);
    for (const [c, label] of [[[3, 0.15, 0.2], 'an end-face edge midpoint'], [[3, 0.15, 0.1], 'the end face\'s center']]) {
      const before = endFaces(), vb = new Set(D().verts.keys());
      T.set('circle');
      // the cursor a few pixels inside the end face (the edge's midpoint is on the top face too: the face under the cursor decides)
      const q = at(c), k = at([3, 0.15, 0.1]), kd = Math.hypot(k[0] - q[0], k[1] - q[1]) || 1;
      const qx = q[0] + (k[0] - q[0]) / kd * 2, qy = q[1] + (k[1] - q[1]) / kd * 2;
      T.move({ x: qx, y: qy }); T.click(qx, qy, { time: (t += 1000) });
      moveTo([3, 0.2, 0.1]);
      T.value('0.04');
      const pts = [...D().verts].filter(([id]) => !vb.has(id)).map(([, p]) => p);
      ok(pts.length >= 24 && pts.every((p) => close(p[0], 3, 1e-9)), `circle centred on ${label} lies in the end face's plane${where} (${pts.length} new points)`);
      ok(endFaces() > before, `…and cuts the end face (${before} → ${endFaces()} faces facing +x)${where}`);
      m3.undo();
    }
    host.path = [];
  }
}

section('arcs and circles (0.4 M3)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { curveInfo, setCurveRadius, curveEdges } = M;
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  cam.eye = [2, -8, 12]; cam.target = [2, 1, 0]; cam.clip(30);
  const arcIds = (def) => [...new Set([...def.edges.values()].map((e) => e.curve).filter((c) => /^arc:/.test(c || '')))];
  // 2-point arc on the ground: ends, bulge typed = half the chord → a half circle
  T.set('arc');
  clickAt([0, 0, 0]); clickAt([4, 0, 0]); moveTo([2, 1.5, 0]); T.value('2');
  let ids = arcIds(model.root);
  let ci = ids.length === 1 ? curveInfo(model.root, ids[0]) : null;
  ok(ci && ci.segs === 12 && ci.round && close(ci.radius, 2, 1e-9) && close(ci.sweep, Math.PI, 1e-9) && V.dist(ci.center, [2, 0, 0]) < 1e-9 && ci.verts.every((v) => close(model.root.verts.get(v)[2], 0)), `Arc (A): two ends, bulge 2 → a half circle of radius 2 in 12 segments on the ground (${ci && ci.radius})`);
  ok(Math.max(...[...model.root.verts.values()].map((p) => p[1])) > 1.9, 'it bulges toward the pointer (+green)');
  // a line closing it makes a face (half disc)
  T.set('line'); clickAt([0, 0, 0]); clickAt([4, 0, 0]); T.escape();
  ok(model.root.faces.size === 1 && close(faceArea(model.root, [...model.root.faces.values()][0]), 0.5 * 12 * 4 * Math.sin(Math.PI / 12), 1e-9), 'a line across its ends closes a half-disc face');
  // selecting one segment selects the whole arc
  T.set('select');
  const segMid = (() => { const e = model.root.edges.get(curveEdges(model.root, ids[0])[5]); return V.mul(V.add(model.root.verts.get(e.a), model.root.verts.get(e.b)), 0.5); })();
  clickAt(segMid);
  ok(host.sel.length === 12 && host.sel.every((x) => x.t === 'e' && model.root.edges.get(x.id).curve === ids[0]), `one click on a segment selects the whole arc (${host.sel.length} edges)`);
  // radius: 2 → 3 (one undo step); the half-disc face follows
  model.change('Radius', (m) => setCurveRadius(m.root, ids[0], 3));
  ci = curveInfo(model.root, ids[0]);
  ok(close(ci.radius, 3, 1e-9) && model.root.faces.size === 1, `radius 3 typed in Entity info: the arc grows about its centre (${ci.radius.toFixed(6)}); its face follows`);
  model.undo();
  ok(close(curveInfo(model.root, ids[0]).radius, 2, 1e-9), 'one undo puts it back');
  // typed segments, then an arc on an upright face of a box
  const m2 = new Model(); m2.units = 'm';
  host.model = m2; host.path = []; host.sel = []; cache = null;
  m2.change('box', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 1)); pushPull(m.root, [...m.root.faces.keys()][0], 3); });
  cam.eye = [2, -12, 2.5]; cam.target = [2, 0, 1.5]; cam.clip(20);
  T.set('arc'); T.value('6s');
  clickAt([1, 0, 1]); clickAt([3, 0, 1]); moveTo([2, 0, 2]); T.value('0.5');
  ids = arcIds(m2.root); ci = ids.length ? curveInfo(m2.root, ids[0]) : null;
  ok(ci && ci.segs === 6 && ci.verts.every((v) => close(m2.root.verts.get(v)[1], 0, 1e-9)) && Math.max(...ci.verts.map((v) => m2.root.verts.get(v)[2])) > 1.49, `an arc started on the front face is drawn in its plane (y = 0), 6 segments typed (${ci && ci.segs})`);
  // arc from its center: center, a typed radius, a typed angle
  const m3 = new Model(); m3.units = 'm';
  host.model = m3; cache = null;
  cam.eye = [2, -8, 12]; cam.target = [2, 1, 0]; cam.clip(30);
  T.set('arcc');
  clickAt([10, 0, 0]); moveTo([12, 0, 0]); T.value('2'); moveTo([10, 2, 0]); T.value('90');
  ids = arcIds(m3.root); ci = ids.length ? curveInfo(m3.root, ids[0]) : null;
  ok(ci && close(ci.radius, 2, 1e-9) && close(ci.sweep, Math.PI / 2, 1e-9) && V.dist(ci.center, [10, 0, 0]) < 1e-9 && ci.segs === 12, `Arc from center: center, radius 2, 90° → a quarter arc (${ci && ci.sweep})`);
  // circles and polygons are curves too; a pushed circle keeps its radius
  T.set('circle'); clickAt([0, 5, 0]); moveTo([1, 5, 0]); T.value('1');
  const circ = [...new Set([...m3.root.edges.values()].map((e) => e.curve).filter((c) => /^circle:/.test(c || '')))];
  ci = circ.length === 1 ? curveInfo(m3.root, circ[0]) : null;
  ok(ci && ci.closed && ci.segs === 24 && close(ci.radius, 1, 1e-9) && ci.flat, 'Circle: one closed curve of 24 segments, radius 1');
  m3.change('r', (m) => setCurveRadius(m.root, circ[0], 1.5));
  const disc = [...m3.root.faces.values()].find((f) => f.loops[0].length === 24);
  ok(disc && close(faceArea(m3.root, disc), 2.25 * 0.5 * 24 * Math.sin(2 * Math.PI / 24), 1e-9), 'its radius 1 → 1.5: the disc grows to 2.25×');
  T.set('push'); clickAt([0, 5, 0]); T.value('1');
  let err = null;
  try { m3.change('r', (m) => setCurveRadius(m.root, circ[0], 2)); } catch (x) { err = x.message; }
  ok(curveInfo(m3.root, circ[0]).flat === false && /pushed or pulled/.test(err || ''), 'after push/pull its radius can no longer change (says why; nothing changes)');
  // the file keeps the curves; a copy is a curve of its own
  const m4 = new Model(); m4.load(JSON.parse(JSON.stringify(m3.toJSON())));
  ok(curveInfo(m4.root, ids[0])?.segs === 12 && curveInfo(m4.root, circ[0])?.segs === 24, 'saved and reopened: the arc and the circle are still curves');
  const before = new Set([...m3.root.edges.values()].map((e) => e.curve).filter(Boolean));
  m3.change('copy', (m) => M.copySel(m.root, curveEdges(m.root, ids[0]).map((id) => ({ t: 'e', id }))));
  const after = new Set([...m3.root.edges.values()].map((e) => e.curve).filter(Boolean));
  ok(after.size === before.size + 1, 'a copied arc gets a curve id of its own (selecting one does not select the other)');
}

section('offset (0.4 M4)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { curveInfo } = M;
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  const topAt = (z) => [...model.root.faces].filter(([, f]) => close(faceNormal(model.root, f)[2], 1) && close(model.root.verts.get(f.loops[0][0])[2], z)).map(([id]) => id);
  // the user's test (2026-10-13): a 16:9 screen, pushed to its thickness, front offset inward for the glass, the glass pushed in
  model.change('screen', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1.6, 0.9)); pushPull(m.root, [...m.root.faces.keys()][0], 0.05); });
  cam.eye = [0.8, -1.2, 2.2]; cam.target = [0.8, 0.45, 0.05]; cam.clip(10);
  T.set('offset');
  clickAt([0.8, 0.45, 0.05]); moveTo([0.8, 0.2, 0.05]); T.value('0.03');
  const tops = topAt(0.05);
  const glass = tops.map((id) => model.root.faces.get(id)).find((f) => f.loops.length === 1 && close(faceArea(model.root, f), 1.54 * 0.84, 1e-9));
  ok(tops.length === 2 && glass, `Offset (F): click the front, type 0.03 → a 1.54 × 0.84 glass face inside a 30 mm frame (${tops.length} faces on the front)`);
  T.set('push'); clickAt([0.8, 0.45, 0.05]); moveTo([0.8, 0.45, 0.04]); T.value('0.005');
  let si = solidInfo(model.root);
  ok(si.closed && close(si.volume, 1.6 * 0.9 * 0.05 - 1.54 * 0.84 * 0.005, 1e-9), `…then Push/pull the glass in 5 mm: a closed screen with a recess (${si.volume?.toFixed(6)} m³)`);
  // offset outward: a ring face around a lone rectangle; then a selected face, then double-click repeats the distance
  const m2 = new Model(); m2.units = 'm';
  host.model = m2; cache = null; host.sel = [];
  m2.change('r', (m) => addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3)));
  cam.eye = [2, -6, 10]; cam.target = [2, 1.5, 0]; cam.clip(30);
  host.sel = [{ t: 'f', id: [...m2.root.faces.keys()][0] }];
  T.set('offset');
  moveTo([2, -0.5, 0]); T.value('0.5');
  const areas = [...m2.root.faces.values()].map((f) => faceArea(m2.root, f)).sort((a, b) => a - b);
  ok(areas.length === 2 && close(areas[0], 5 * 4 - 12, 1e-9) && close(areas[1], 12, 1e-9), `a selected face, the pointer outside, 0.5 typed → offset outward: a 0.5 m ring around it (${areas.map((a) => a.toFixed(3))})`);
  T.set('offset');
  clickAt([2, 1.5, 0]); moveTo([2, 1.2, 0]); T.value('0.5');
  ok(m2.root.faces.size === 3 && [...m2.root.faces.values()].some((f) => close(faceArea(m2.root, f), 6, 1e-9)), 'click the face, the pointer inside, 0.5 → inward: a 3 × 2 face inside');
  T.set('offset');
  const q = at([2, 1.5, 0]);
  T.move({ x: q[0], y: q[1] });
  T.down({ x: q[0], y: q[1], time: (t += 5000) }); T.up({ x: q[0], y: q[1] });
  T.down({ x: q[0], y: q[1], time: (t += 100) }); T.up({ x: q[0], y: q[1] });
  ok(m2.root.faces.size === 4 && [...m2.root.faces.values()].some((f) => close(faceArea(m2.root, f), 2, 1e-9)), 'double-click a face repeats the last distance: a 2 × 1 face inside that');
  T.set('offset'); clickAt([2, 1.5, 0]); moveTo([2, 1.2, 0]); T.value('3');
  const err = host.msgs[host.msgs.length - 1];
  ok(/further than this face allows/.test(err) && m2.root.faces.size === 4, 'an offset larger than the face allows is refused with the reason: ' + err);
  // a circle offsets to a circle
  const m3 = new Model(); m3.units = 'm';
  host.model = m3; cache = null; host.sel = [];
  T.set('circle'); clickAt([2, 1.5, 0]); moveTo([3, 1.5, 0]); T.value('1');
  T.set('offset'); clickAt([2, 1.5, 0]); moveTo([2.2, 1.5, 0]); T.value('0.25');
  const circles = [...new Set([...m3.root.edges.values()].map((e) => e.curve).filter((c) => /^circle:/.test(c || '')))].map((c) => curveInfo(m3.root, c));
  ok(circles.length === 2 && circles.some((c) => c.round && close(c.radius, 1 - 0.25 / Math.cos(Math.PI / 24), 1e-9)), `a circle offsets inward to a circle of its own, 0.25 in from each side (radius ${circles.map((c) => c.radius.toFixed(4))})`);
  // a chain of selected edges (an L of two lines) offsets to a parallel L
  const m4 = new Model(); m4.units = 'm';
  host.model = m4; cache = null;
  m4.change('L', (m) => { addEdge(m.root, [0, 0, 0], [3, 0, 0]); addEdge(m.root, [3, 0, 0], [3, 2, 0]); });
  host.sel = [...m4.root.edges.keys()].map((id) => ({ t: 'e', id }));
  T.set('offset'); moveTo([2, 0.4, 0]); T.value('0.2');
  const segs = [...m4.root.edges.values()].map((e) => [m4.root.verts.get(e.a), m4.root.verts.get(e.b)]);
  ok(segs.length === 4 && segs.some(([a, b]) => close(a[1], 0.2) && close(b[1], 0.2) && close(Math.abs(a[0] - b[0]), 2.8)) && segs.some(([a, b]) => close(a[0], 2.8) && close(b[0], 2.8) && close(Math.abs(a[1] - b[1]), 1.8)), 'selected edges (an L): offset 0.2 toward the pointer → a parallel L, corner mitred');
}

section('smooth curves (0.4 M27)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { curveInfo, curveEdges } = M;
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  cam.eye = [4, -10, 12]; cam.target = [4, 2, 0]; cam.clip(40);
  const curves = (def) => [...new Set([...def.edges.values()].map((e) => e.curve).filter((c) => /^curve:/.test(c || '')))];
  const P = [[0, 0, 0], [2, 3, 0], [5, 1, 0], [8, 4, 0]];
  T.set('curve');
  for (const p of P) clickAt(p);
  T.tool.finish();
  let ids = curves(model.root), cid = ids[0];
  let ci = cid ? curveInfo(model.root, cid) : null;
  const passes = (def, pts) => pts.every((p) => [...def.verts.values()].some((q) => V.dist(p, q) < 1e-9));
  ok(ids.length === 1 && ci.segs === 24 && !ci.closed && passes(model.root, P) && model.root.splines.get(cid)?.pts.length === 4, `Curve: 4 clicks + Enter → one smooth curve through every point (${ci?.segs} segments, 8 per span), its points kept`);
  ok(ci.length > P.slice(1).reduce((a, p, i) => a + V.dist(P[i], p), 0), 'it is longer than the straight lines between the points (it bends through them)');
  // a cable going up: typed 3D offsets; a double-click finishes
  T.set('curve');
  clickAt([0, 6, 0]); T.value('<2,0,1>'); T.value('<2,1,1>');
  const q = at([4, 7, 2]); T.move({ x: q[0], y: q[1] });
  T.click(q[0], q[1], { time: (t += 1000) }); T.click(q[0], q[1], { time: (t += 100) });
  const c2 = curves(model.root).find((c) => c !== cid);
  ok(c2 && model.root.splines.get(c2).pts.length >= 3 && Math.max(...model.root.splines.get(c2).pts.map((p) => p[2])) >= 2 - 1e-9, 'typed <dx,dy,dz> points leave the ground (a 3D curve); a double-click finishes it');
  // Backspace takes the last point back; a click on the first point closes the curve
  T.set('curve');
  clickAt([10, 0, 0]); clickAt([12, 0, 0]); clickAt([13, 9, 0]);
  T.tool.back();
  ok(T.tool.pts.length === 2, 'Backspace takes the last point back');
  clickAt([12, 2, 0]); clickAt([10, 0, 0]);
  const c3 = curves(model.root).find((c) => c !== cid && c !== c2);
  ok(c3 && curveInfo(model.root, c3).closed && model.root.splines.get(c3).closed, 'clicking the first point again closes the curve');
  ok(model.root.faces.size === 1, 'a closed flat curve makes a face, as any closed outline does');
  // edit: grab a point, put it elsewhere (one undo step); the curve still passes through all its points
  T.set('curve', { edit: cid });
  clickAt([5, 1, 0]); clickAt([5, -1, 0]);
  const Pe = [P[0], P[1], [5, -1, 0], P[3]];
  ok(passes(model.root, Pe) && !passes(model.root, [[5, 1, 0]]) && curveEdges(model.root, cid).length === 24 && V.dist(model.root.splines.get(cid).pts[2], [5, -1, 0]) < 1e-9, 'Edit points: click a square, click its new place → the curve is redrawn through it (same curve)');
  model.undo();
  ok(passes(model.root, P), 'one undo puts the old curve back');
  T.escape(); T.set('select');
  // a curve that bounds a face cannot be edited (its face would lose its outline)
  let err = null;
  try { model.change('e', (m) => M.editSpline(m.root, c3, [[10, 0, 0], [12, 0, 0], [12, 3, 0]])); } catch (x) { err = x.message; }
  ok(/bounds a face/.test(err || ''), 'a curve that bounds a face is not edited (says why)');
  // moved whole, it stays editable and its points move with it
  model.change('mv', (m) => M.transformSel(m.root, curveEdges(m.root, cid).map((id) => ({ t: 'e', id })), V.translation([0, 0, 3])));
  ok(model.root.splines.get(cid).pts.every((p, i) => V.dist(p, V.add(P[i], [0, 0, 3])) < 1e-9), 'Move (the whole curve): its points move with it, so it can still be edited');
  // file, group, copy
  const m2 = new Model(); m2.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(m2.root.splines.size === 3 && m2.root.splines.get(cid).pts.length === 4, 'saved and reopened: the curves keep their points');
  const gid = model.change('g', (m) => m.makeGroup(m.root, curveEdges(m.root, cid).map((id) => ({ t: 'e', id })), 'group'));
  const gd = model.def(model.root.insts.get(gid).def);
  ok(gd.splines.has(cid) && passes(gd, gd.splines.get(cid).pts), 'made into a group: the curve and its points move into the group');
  model.change('c', (m) => M.copySel(m.root, curveEdges(m.root, c2).map((id) => ({ t: 'e', id }))));
  ok(model.root.splines.size === 3 && curves(model.root).length === 3, 'a copied curve is a curve of its own, editable too (' + model.root.splines.size + ' / ' + curves(model.root).length + ')');
}

section('follow me (0.4 M10)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { followMe, curveEdges } = M;
  const ngonArea = (r, n) => 0.5 * n * r * r * Math.sin(2 * Math.PI / n);
  // a straight pipe
  let m = new Model();
  m.change('pipe', (mm) => { addPolygon(mm.root, ngonPts([0, 0, 1], [1, 0, 0], [0, 1, 0], 0.1, 24)); addEdge(mm.root, [0, 0, 1], [3, 0, 1]); });
  let fid = [...m.root.faces.keys()][0], path1 = [...m.root.edges].filter(([, e]) => { const a = m.root.verts.get(e.a), b = m.root.verts.get(e.b); return Math.abs(a[1]) < 1e-12 && Math.abs(b[1]) < 1e-12 && Math.abs(a[2] - 1) < 1e-12 && Math.abs(b[2] - 1) < 1e-12; }).map(([id]) => id);
  m.change('fm', (mm) => followMe(mm.root, fid, path1));
  let si = solidInfo(m.root);
  ok(si.closed && close(si.volume, ngonArea(0.1, 24) * 3, 1e-9), `Follow me: a circle along a straight line → a closed pipe, volume = area × length (${si.volume?.toFixed(6)})`);
  ok([...m.root.edges.values()].filter((e) => e.soft).length === 24, 'the pipe\'s 24 sides are smooth (soft edges between them)');
  // a square along an L: the mitred corner keeps area × centreline length
  m = new Model();
  m.change('L', (mm) => { addPolygon(mm.root, rectPts([0, -0.1, -0.1], [0, 1, 0], [0, 0, 1], 0.2, 0.2)); addEdge(mm.root, [0, 0, 0], [2, 0, 0], { faces: false }); addEdge(mm.root, [2, 0, 0], [2, 2, 0], { faces: false }); });
  fid = [...m.root.faces.keys()][0];
  const pathL = [...m.root.edges].filter(([, e]) => { const a = m.root.verts.get(e.a), b = m.root.verts.get(e.b); return Math.abs(a[2]) < 1e-12 && Math.abs(b[2]) < 1e-12 && Math.abs(a[1]) + Math.abs(b[1]) + Math.abs(a[0] - 2) + Math.abs(b[0] - 2) > 0 && !(Math.abs(a[0]) < 1e-12 && Math.abs(b[0]) < 1e-12); }).map(([id]) => id);
  m.change('fm', (mm) => followMe(mm.root, fid, pathL));
  si = solidInfo(m.root);
  ok(si.closed && close(si.volume, 0.04 * 4, 1e-9), `a square along an L: one closed solid, the mitred corner keeping area × centreline length = 0.16 m³ (${si.volume?.toFixed(6)})`);
  ok([...m.root.faces.values()].every((f) => { const pl = M.facePlane(m.root, f); return f.loops[0].every((v) => Math.abs(V.dot(pl.n, m.root.verts.get(v)) - pl.d) < 1e-9); }), 'every face it made is flat');
  // a closed path: a ring (Pappus: volume ≈ 2πR × area)
  m = new Model();
  m.change('ring', (mm) => {
    const R = 1, P = ngonPts([0, 0, 0], [0, 0, 1], [1, 0, 0], R, 48);
    for (let i = 0; i < 48; i++) addEdge(mm.root, P[i], P[(i + 1) % 48], { faces: false });
    addPolygon(mm.root, ngonPts([1, 0, 0], [0, 1, 0], [1, 0, 0], 0.1, 12));
  });
  fid = [...m.root.faces.keys()][0];
  const ringPath = [...m.root.edges].filter(([, e]) => Math.abs(V.len(m.root.verts.get(e.a)) - 1) < 1e-9 && Math.abs(V.len(m.root.verts.get(e.b)) - 1) < 1e-9).map(([id]) => id);
  const r1 = m.change('fm', (mm) => followMe(mm.root, fid, ringPath));
  si = solidInfo(m.root);
  const pappus = 2 * Math.PI * 1 * ngonArea(0.1, 12);
  ok(r1.closed && si.closed && Math.abs(si.volume - pappus) / pappus < 0.01 && !m.root.faces.has(fid), `a closed path makes a closed ring; the profile face is used up (volume ${si.volume?.toFixed(5)} vs Pappus ${pappus.toFixed(5)})`);
  // the user's cable: a Curve drawn with the tool, a circle at its start, Follow me by selection + click
  m = new Model(); m.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model: m, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== m.version) cache = sceneOf(m); return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(x) { host.msgs.push(x); }, changed() {},
    openContext(p) { host.path = p; }, closeContext() {},
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  cam.eye = [3, -8, 6]; cam.target = [3, 1, 0.5]; cam.clip(30);
  m.change('cable', (mm) => {
    M.addSpline(mm.root, [[0, 0, 0.5], [2, 1, 0.5], [4, -0.5, 1], [6, 1, 0.5]]);
    addPolygon(mm.root, ngonPts([0, 0, 0.5], V.norm(V.sub(M.smoothPts([[0, 0, 0.5], [2, 1, 0.5], [4, -0.5, 1], [6, 1, 0.5]])[1], [0, 0, 0.5])), [0, 0, 1], 0.05, 16));
  });
  const cid = [...m.root.splines.keys()][0];
  host.sel = curveEdges(m.root, cid).map((id) => ({ t: 'e', id }));
  T.set('follow');
  const disc = [...m.root.faces.keys()][0];
  T.tool.run(disc, host.sel.map((x) => x.id));
  si = solidInfo(m.root);
  ok(si.closed && si.volume > 0 && [...m.root.edges.values()].filter((e) => e.soft).length > 100, `the user's cable: a circle swept along a smooth Curve → a closed, smooth tube (${m.root.faces.size} faces, ${si.volume?.toFixed(5)} m³)`);
  // click the face first, then an edge of the path
  m.undo(); cache = null; host.sel = [];
  T.set('follow');
  cam.eye = [-0.6, -0.4, 0.7]; cam.target = [0, 0, 0.5]; cam.clip(10);   // close enough that the 5 cm disc is a face, not just its edges
  clickAt([0, 0, 0.53]);   // off the centre: the path starts at the disc's centre
  ok(T.tool.face !== null, 'with no path selected, a click on the face picks it and asks for the path');
  cam.eye = [3, -8, 6]; cam.target = [3, 1, 0.5]; cam.clip(30);
  const pe = (() => { const e = m.root.edges.get(curveEdges(m.root, cid)[12]); return V.mul(V.add(m.root.verts.get(e.a), m.root.verts.get(e.b)), 0.5); })();
  clickAt(pe);
  ok(solidInfo(m.root).closed, 'click the face, then an edge of the path: the same tube');
  // refused: the face lies along the path
  m = new Model();
  m.change('flat', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1)); addEdge(mm.root, [0, 0, 0], [-2, 0, 0], { faces: false }); });
  let err = null;
  try { m.change('fm', (mm) => followMe(mm.root, [...mm.root.faces.keys()][0], [...mm.root.edges].filter(([, e]) => m.root.verts.get(e.a)[0] <= 0 && m.root.verts.get(e.b)[0] <= 0 && (m.root.verts.get(e.a)[0] < 0 || m.root.verts.get(e.b)[0] < 0)).map(([id]) => id))); } catch (x) { err = x.message; }
  ok(/lies along the path/.test(err || '') && m.root.faces.size === 1, 'a face lying along the path is refused, saying why (nothing changes)');
}

section('protractor (0.4 M14)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext() {}, closeContext() {},
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  cam.eye = [1, -6, 9]; cam.target = [1, 1, 0]; cam.clip(30);
  const lastGuide = () => [...model.guides.values()].pop();
  T.set('protractor');
  clickAt([0, 0, 0]); clickAt([1, 0, 0]); moveTo([2, 2.05, 0]); clickAt([2, 2.05, 0]);
  let g = lastGuide();
  ok(g && g.kind === 'line' && V.dist(g.p, [0, 0, 0]) < 1e-9 && Math.abs(Math.abs(g.d[0]) - Math.SQRT1_2) < 1e-9 && Math.abs(Math.abs(g.d[1]) - Math.SQRT1_2) < 1e-9 && Math.abs(g.d[2]) < 1e-12, 'Protractor: center, 0° along red, the pointer near 45° → a guide line at exactly 45° (15° snap)');
  T.set('protractor');
  clickAt([0, 0, 0]); clickAt([1, 0, 0]); moveTo([1, 0.3, 0]); T.value('30');
  g = lastGuide();
  ok(Math.abs(g.d[1] / g.d[0] - Math.tan(Math.PI / 6)) < 1e-9, 'a typed 30 → a guide line at 30° on the pointer\'s side');
  // on an upright face: the protractor lies on it
  model.change('box', (m) => { addPolygon(m.root, rectPts([4, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1)); pushPull(m.root, [...m.root.faces.keys()][0], 2); });
  cache = null;
  cam.eye = [5, -8, 1]; cam.target = [5, 0, 1]; cam.clip(30);
  T.set('protractor');
  clickAt([5, 0, 1]); clickAt([5.8, 0, 1]); moveTo([5.5, 0, 1.6]); T.value('60');
  g = lastGuide();
  ok(Math.abs(g.d[1]) < 1e-12 && Math.abs(Math.abs(g.d[2]) - Math.sin(Math.PI / 3)) < 1e-9, 'centered on the front face: the guide stands in that face (60° up from red)');
  // → after the center: square to red (the green-blue plane)
  cam.eye = [1, -6, 9]; cam.target = [1, 1, 0]; cam.clip(30);
  T.set('protractor');
  clickAt([0, 0, 0]);
  T.key('ArrowRight');
  clickAt([0, 1, 0]); moveTo([0, 1, 1]); T.value('90');
  g = lastGuide();
  ok(Math.abs(g.d[0]) < 1e-12 && Math.abs(Math.abs(g.d[2]) - 1) < 1e-9, 'the → key stands the protractor square to red: 0° along green, 90° straight up');
}

section('flip (0.4 M15)');
{
  const { flipSel, mirrorMatrix } = M;
  // an L-shaped solid (not symmetric) as loose geometry
  const m = new Model();
  m.change('L', (mm) => { addPolygon(mm.root, [[0, 0, 0], [3, 0, 0], [3, 1, 0], [1, 1, 0], [1, 2, 0], [0, 2, 0]]); pushPull(mm.root, [...mm.root.faces.keys()][0], 1); });
  const v0 = solidInfo(m.root).volume;
  const all = M.connected(m.root, [{ t: 'f', id: [...m.root.faces.keys()][0] }]);
  m.change('flip', (mm) => flipSel(mm.root, all, [1.5, 1, 0.5], [1, 0, 0]));
  const si = solidInfo(m.root);
  const xs = [...m.root.verts.values()].map((p) => p[0]);
  ok(si.closed && close(si.volume, v0, 1e-9) && close(Math.min(...xs), 0) && close(Math.max(...xs), 3) && [...m.root.verts.values()].some((p) => close(p[0], 2) && close(p[1], 2)), `Flip along red: the L mirrors in place (its arm now at x = 2…3), still a closed solid with the same positive volume (${si.volume?.toFixed(3)})`);
  // a group: its placement mirrors (no geometry rewritten)
  const g = new Model();
  const iid = g.change('g', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1)); pushPull(mm.root, [...mm.root.faces.keys()][0], 1); return mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: [...mm.root.faces.keys()][0] }]), 'group'); });
  g.change('flip', (mm) => flipSel(mm.root, [{ t: 'i', id: iid }], [1, 0.5, 0.5], [0, 0, 1]));
  const im = g.root.insts.get(iid).m;
  ok(V.det3(im) < 0 && close(im[10], -1) && close(im[14], 1), 'Flip a group along blue: its placement mirrors (det −1), it stays where it was');
  const wt = M.worldTriangles(g);
  const vol = wt.reduce((s2, t2) => s2 + V.dot(t2.p[0], V.cross(t2.p[1], t2.p[2])) / 6, 0);
  ok(close(vol, 2, 1e-9), 'its faces still face out in world space (volume +2 from the world triangles)');
  // a flipped copy beside the original (mirrored across the selection's far side): two solids, both positive
  const c = new Model();
  c.change('L', (mm) => { addPolygon(mm.root, [[0, 0, 0], [3, 0, 0], [3, 1, 0], [1, 1, 0], [1, 2, 0], [0, 2, 0]]); pushPull(mm.root, [...mm.root.faces.keys()][0], 1); });
  const sel = M.connected(c.root, [{ t: 'f', id: [...c.root.faces.keys()][0] }]);
  const out = c.change('fc', (mm) => flipSel(mm.root, sel, [3, 1, 0.5], [1, 0, 0], true));
  const xs2 = [...c.root.verts.values()].map((p) => p[0]);
  ok(out.length === sel.length && close(Math.max(...xs2), 6), 'Flipped copy along red: a mirrored copy lands beside the original (out to x = 6; loose geometry touching there joins, as touching loose geometry does)');
  const gc = new Model();
  const gi = gc.change('g', (mm) => { addPolygon(mm.root, [[0, 0, 0], [3, 0, 0], [3, 1, 0], [1, 1, 0], [1, 2, 0], [0, 2, 0]]); pushPull(mm.root, [...mm.root.faces.keys()][0], 1); return mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: [...mm.root.faces.keys()][0] }]), 'group'); });
  const outG = gc.change('fc', (mm) => flipSel(mm.root, [{ t: 'i', id: gi }], [3, 1, 0.5], [1, 0, 0], true));
  const wv = M.worldTriangles(gc).reduce((s2, t2) => s2 + V.dot(t2.p[0], V.cross(t2.p[1], t2.p[2])) / 6, 0);
  ok(outG.length === 1 && gc.root.insts.size === 2 && close(wv, 2 * v0, 1e-9) && V.det3(gc.root.insts.get(outG[0].id).m) < 0, 'a flipped copy of a group: a second, mirrored placement beside it; both face out (world volume 2 × the L)');
  ok(V.det3(mirrorMatrix([1, 2, 3], [0, 1, 0])) < 0, 'mirrorMatrix is a reflection');
}

section('scale grips (0.4 M16)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext() {}, closeContext() {},
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1], ...mods }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  model.change('box', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1)); pushPull(m.root, [...m.root.faces.keys()][0], 1); });
  cam.eye = [6, -6, 5]; cam.target = [1, 0.5, 0.5]; cam.clip(30);
  const bbox = () => { let b = null; for (const p of model.root.verts.values()) b = V.bboxAdd(b, p); return b; };
  host.sel = M.connected(model.root, [{ t: 'f', id: [...model.root.faces.keys()][0] }]);
  T.set('scale');
  ok(T.tool.grips.length === 26, `Scale with a selection: 26 grips on its box (${T.tool.grips.length})`);
  // the middle of the +red side: stretch along red only, about the opposite side
  clickAt([2, 0.5, 0.5]); moveTo([3, 0.5, 0.5]); T.value('2');
  let b = bbox();
  ok(close(b.min[0], 0) && close(b.max[0], 4) && close(b.max[1], 1) && close(b.max[2], 1), `the +red side's grip, 2 typed → 4 m along red, the far side staying put; green and blue unchanged (${b.max.map((x) => +x.toFixed(3))})`);
  // a corner: even, about the opposite corner
  host.sel = M.connected(model.root, [{ t: 'f', id: [...model.root.faces.keys()][0] }]);
  T.set('scale');
  clickAt([4, 1, 1]); moveTo([3, 0.7, 0.7]); T.value('0.5');
  b = bbox();
  ok(close(b.max[0], 2) && close(b.max[1], 0.5) && close(b.max[2], 0.5) && close(b.min[0], 0), `a corner grip, 0.5 typed → half the size every way, about the opposite corner (${b.max.map((x) => +x.toFixed(3))})`);
  // three typed factors
  host.sel = M.connected(model.root, [{ t: 'f', id: [...model.root.faces.keys()][0] }]);
  T.set('scale');
  clickAt([2, 0.5, 0.5]); T.value('2,3,4');
  b = bbox();
  ok(close(b.max[0], 4) && close(b.max[1], 1.5) && close(b.max[2], 2), `three factors typed (2,3,4): red, green and blue each scaled (${b.max.map((x) => +x.toFixed(3))})`);
  // Ctrl: about the centre
  host.sel = M.connected(model.root, [{ t: 'f', id: [...model.root.faces.keys()][0] }]);
  T.set('scale');
  clickAt([4, 0.75, 1], { ctrl: true }); T.value('2');
  b = bbox();
  ok(close(b.min[0], -2) && close(b.max[0], 6), `Ctrl+click a grip: it scales about the center (red now −2…6) (${b.min[0].toFixed(3)} … ${b.max[0].toFixed(3)})`);
  const si = solidInfo(model.root);
  ok(si.closed && close(si.volume, 8 * 1.5 * 2, 1e-9), `still one closed box (${si.volume?.toFixed(3)} m³)`);
  // a group: its placement takes the stretch
  const gid = model.change('g', (m) => m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: [...m.root.faces.keys()][0] }]), 'group'));
  host.sel = [{ t: 'i', id: gid }];
  T.set('scale');
  clickAt([2, 1.5, 1]); T.value('3');
  const im = model.root.insts.get(gid).m;
  ok(close(V.len([im[4], im[5], im[6]]), 3, 1e-9) && close(V.len([im[0], im[1], im[2]]), 1, 1e-9), 'a group: the +green grip, 3 → its placement stretches 3× along green only');
}

section('hide and isolate (0.4 M17)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, pick, infer } = await import(path.join(APP, 'infer.js'));
  const { hideSel, isolateSel, unhideAll, hiddenCount } = M;
  // the user's case: two groups 5 cm apart; hide the front one to work on the face behind it
  const m = new Model();
  const [gA, gB] = m.change('two', (mm) => {
    const mk = (y) => { addPolygon(mm.root, rectPts([0, y, 0], [1, 0, 0], [0, 1, 0], 2, 0.2)); const f = [...mm.root.faces.keys()].pop(); pushPull(mm.root, f, 1); return mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: [...mm.root.faces.keys()][0] }]), 'group'); };
    return [mk(0), mk(0.25)];
  });
  const cam = new Camera(); cam.setSize(1000, 800);
  cam.eye = [1, -6, 0.5]; cam.target = [1, 0.3, 0.5]; cam.clip(20);
  const [x, y] = cam.project([1, 0.25, 0.5]);
  ok(pick(sceneOf(m), cam, x, y)?.id === gA, 'from the front, a click lands on the front group');
  m.change('hide', (mm) => hideSel(mm.root, [{ t: 'i', id: gA }], true));
  const sc = sceneOf(m);
  ok(pick(sc, cam, x, y)?.id === gB && sc.faces.every((f) => f.path[0] === gB), 'Hide the front group: clicks and snaps reach the group behind it (the hidden one is not in the scene)');
  const r = infer(sc, cam, x, y, {});
  ok((r.kind === 'face' || r.kind === 'center') && r.face && Math.abs(r.p[1] - 0.25) < 1e-9, `drawing snaps to the back group's front face, through the gap (${r.kind})`);
  const m2 = new Model(); m2.load(JSON.parse(JSON.stringify(m.toJSON())));
  ok(m2.root.insts.get(gA).hidden === true && hiddenCount(m2) === 1, 'saved and reopened: still hidden');
  ok(m.change('u', (mm) => unhideAll(mm)) === 1 && !m.root.insts.get(gA).hidden && sceneOf(m).faces.some((f) => f.path[0] === gA), 'Unhide all shows it again');
  // isolate: everything else in the open group hides; the selected face keeps its edges
  const m3 = new Model();
  m3.change('b', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1)); pushPull(mm.root, [...mm.root.faces.keys()][0], 1); });
  const top = [...m3.root.faces].find(([, f]) => close(faceNormal(m3.root, f)[2], 1))[0];
  const n = m3.change('iso', (mm) => isolateSel(mm.root, [{ t: 'f', id: top }]));
  const s3 = sceneOf(m3);
  ok(n === 5 + 8 && s3.faces.length === 1 && s3.edges.length === 4, `Isolate the top face: the other 5 faces and 8 edges hide; the top and its 4 edges stay (${n})`);
  // a hidden edge stays hidden when a line splits it
  const m4 = new Model();
  m4.change('e', (mm) => addEdge(mm.root, [0, 0, 0], [4, 0, 0], { faces: false }));
  m4.change('h', (mm) => hideSel(mm.root, [{ t: 'e', id: [...mm.root.edges.keys()][0] }], true));
  m4.change('x', (mm) => addEdge(mm.root, [2, -1, 0], [2, 1, 0], { faces: false }));
  const along = [...m4.root.edges.values()].filter((e) => close(m4.root.verts.get(e.a)[1], 0) && close(m4.root.verts.get(e.b)[1], 0));
  ok(along.length === 2 && along.every((e) => e.hidden), 'a hidden edge split by a line: both pieces stay hidden');
}

section('snapping to a closed group (0.4 M29, user report)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const m = new Model(); m.units = 'm';
  let gA, gB;
  m.change('a', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1)); pushPull(mm.root, [...mm.root.faces.keys()][0], 1.5); gA = mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: [...mm.root.faces.keys()][0] }]), 'group'); });
  m.change('b', (mm) => { addPolygon(mm.root, rectPts([4, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1)); const f = [...mm.root.faces.keys()][0]; pushPull(mm.root, f, 1); gB = mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: f }]), 'group'); });
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0;
  const host = { model: m, cam, path: [], sel: [], units: 'm', scene() { if (!cache || cache.version !== m.version) cache = sceneOf(m); return cache; }, setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print() {}, changed() {}, openContext(p) { host.path = p; }, closeContext() {} };
  const T = new Tools(host);
  const visibleOk = [];
  for (const ctx of [[], [gB]]) {
    host.path = ctx;
    for (const eye of [[6, -6, 5], [-4, -5, 3], [7, 3, 4], [1, 0.5, 9]]) {
      cam.eye = eye; cam.target = [2, 0.5, 0.7]; cam.clip(30);
      const sc = host.scene();
      for (const x of [0, 2]) for (const y of [0, 1]) for (const z of [0, 1.5]) {
        const p = [x, y, z], s2 = cam.project(p), ray = cam.ray(s2[0], s2[1]), tp = V.dist(ray.o, p);
        let hidden = false;
        for (const f of sc.faces) for (const [a2, b2, c2] of f.tris) { const tt = V.rayTri(ray.o, ray.d, a2, b2, c2); if (tt !== null && tt < tp - 1e-6) hidden = true; }
        if (hidden) continue;
        T.set('line'); T.move({ x: s2[0] + 2, y: s2[1] - 1 });
        visibleOk.push(T.tool.cur?.kind === 'end' && V.dist(T.tool.cur.p, p) < 1e-9);
      }
    }
  }
  ok(visibleOk.length >= 40 && visibleOk.every(Boolean), `Line snaps to every visible corner of a closed group, from the top level and from inside another group, from 4 views (${visibleOk.filter(Boolean).length}/${visibleOk.length})`);
  // 0.6 DC.21 (the same report): every drawing/editing tool, and the edges' midpoints too (an end closer than the midpoint wins)
  const toolsOk = {};
  for (const ctx of [[], [gB]]) {
    host.path = ctx;
    for (const eye of [[6, -6, 5], [-4, -5, 3]]) {
      cam.eye = eye; cam.target = [2, 0.5, 0.7]; cam.clip(30);
      const sc = host.scene();
      for (const e of sc.edges) {
        if (e.path?.[0] !== gA) continue;
        for (const [kind, p] of [['end', e.a], ['mid', V.mul(V.add(e.a, e.b), 0.5)]]) {
          const s2 = cam.project(p), ray = cam.ray(s2[0], s2[1]), tp = V.dist(ray.o, p);
          let hidden = false;
          for (const f of sc.faces) for (const [a2, b2, c2] of f.tris) { const tt = V.rayTri(ray.o, ray.d, a2, b2, c2); if (tt !== null && tt < tp - 1e-6) hidden = true; }
          if (hidden) continue;
          for (const tool of ['rect', 'circle', 'move', 'tape']) {
            T.set(tool); T.move({ x: s2[0] + 1, y: s2[1] - 1 });
            const c = T.tool.cur, k = tool + ' ' + kind;
            toolsOk[k] ||= [0, 0];
            toolsOk[k][1]++;
            if (c && V.dist(c.p, p) < 1e-9 && (c.kind === kind || (kind === 'mid' && c.kind === 'end'))) toolsOk[k][0]++;
          }
        }
      }
    }
  }
  ok(Object.keys(toolsOk).length === 8 && Object.values(toolsOk).every(([g, n]) => n >= 8 && g === n), `Rectangle, Circle, Move and Tape snap to closed group A's corners and edge midpoints too (${Object.entries(toolsOk).map(([k, [g, n]]) => k + ' ' + g + '/' + n).join(', ')})`);
  host.path = [];
  // draw from a corner of the closed group while editing inside the other one: the line lands in that group, starting exactly there
  host.path = [gB];
  cam.eye = [6, -6, 5]; cam.target = [2, 0.5, 0.7]; cam.clip(30);
  const q = cam.project([2, 0, 1.5]);
  T.set('line');
  T.move({ x: q[0] + 2, y: q[1] - 1 }); T.click(q[0] + 2, q[1] - 1, { time: (t += 1000) });
  T.value('<0,0,1>'); T.escape();
  const dB = m.def(m.root.insts.get(gB).def), mB = m.root.insts.get(gB).m;
  const ends = [...dB.edges.values()].map((e) => [V.apply(mB, dB.verts.get(e.a)), V.apply(mB, dB.verts.get(e.b))]).find(([a2, b2]) => (V.dist(a2, [2, 0, 1.5]) < 1e-9 && V.dist(b2, [2, 0, 2.5]) < 1e-9) || (V.dist(b2, [2, 0, 1.5]) < 1e-9 && V.dist(a2, [2, 0, 2.5]) < 1e-9));
  ok(!!ends, 'inside group B, a line started on closed group A\'s top corner starts exactly there (in B\'s own coordinates)');
}

section('touch reach (0.4 S.8)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const m = new Model(); m.units = 'm';
  m.change('r', (mm) => addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3)));
  const cam = new Camera(); cam.setSize(1000, 800); cam.eye = [2, -6, 10]; cam.target = [2, 1.5, 0]; cam.clip(30);
  const host = { model: m, cam, path: [], sel: [], units: 'm', scene: () => sceneOf(m), setSel() {}, overlay() {}, tip() {}, vcb() {}, print() {}, changed() {}, openContext() {}, closeContext() {} };
  const T = new Tools(host);
  const c = cam.project([4, 3, 0]);
  T.set('line'); T.move({ x: c[0] + 16, y: c[1] - 4 });
  const mouse = T.tool.cur.kind;
  T.touch = true; T.set('line'); T.move({ x: c[0] + 16, y: c[1] - 4 });
  ok(mouse !== 'end' && T.tool.cur.kind === 'end', `a finger 16 px from a corner snaps to it (touch: ${T.tool.cur.kind}); a mouse pointer does not (${mouse})`);
  const e = cam.project([2, 3, 0]);
  T.touch = false;
  const pm = T.pickAt({ x: e[0], y: e[1] - 11 });
  T.touch = true;
  const pt = T.pickAt({ x: e[0], y: e[1] - 11 });
  ok((!pm || pm.t !== 'e') && pt?.t === 'e', 'a tap 11 px off an edge picks the edge on touch, not with a mouse');
}

section('paint tool (0.4 M8)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, t = 0, picked = 'none';
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version) cache = sceneOf(host.model); return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {}, paintChanged(c) { picked = c; },
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { ...mods, time: (t += 1000) }); };
  // two boxes side by side (connected through a shared wall? no: apart), and a group
  model.change('boxes', (m) => {
    addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2)); pushPull(m.root, [...m.root.faces.keys()][0], 1);
    addPolygon(m.root, rectPts([4, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2));
    const f2 = [...m.root.faces].find(([, f]) => close(m.root.verts.get(f.loops[0][0])[0], 4) || close(m.root.verts.get(f.loops[0][0])[0], 6))[0];
    pushPull(m.root, f2, 1);
  });
  cam.eye = [3, -8, 7]; cam.target = [3, 1, 0.5]; cam.clip(30);
  const faceAt = (x, y, z, n) => [...model.root.faces].find(([, f]) => { const N = faceNormal(model.root, f); return V.dot(N, n) > 0.999 && Math.abs(V.dot(N, V.sub([x, y, z], model.root.verts.get(f.loops[0][0])))) < 1e-9 && f.loops[0].some((v) => Math.abs(model.root.verts.get(v)[0] - x) < 1.01); });
  T.paintColor = '#c0392b';
  T.set('paint');
  clickAt([1, 0, 0.5]);
  const front1 = faceAt(1, 0, 0.5, [0, -1, 0]);
  ok(front1 && front1[1].color === '#c0392b' && [...model.root.faces.values()].filter((f) => f.color).length === 1, 'Paint (B): a click paints one face');
  T.paintColor = '#2b5fbd';
  clickAt([1, 1, 1], { ctrl: true });
  const box1 = [...model.root.faces.values()].filter((f) => f.loops[0].every((v) => model.root.verts.get(v)[0] <= 2 + 1e-9));
  ok(box1.filter((f) => f.color === '#2b5fbd').length === 5 && box1.filter((f) => f.color === '#c0392b').length === 1 && [...model.root.faces.values()].filter((f) => f.color === '#2b5fbd').length === 5, 'Ctrl+click: every connected face of the clicked face\'s colour (the 5 uncoloured faces of that box, not the red one, not the other box)');
  T.paintColor = '#2e9d57';
  clickAt([1, 1, 1], { shift: true });
  ok([...model.root.faces.values()].filter((f) => f.color === '#2e9d57').length === 5 && ![...model.root.faces.values()].some((f) => f.color === '#2b5fbd'), 'Shift+click: every face of that colour in the open group is replaced');
  clickAt([1, 0, 0.5], { alt: true });
  ok(T.paintColor === '#c0392b' && picked === '#c0392b', 'Alt+click picks up the colour of the clicked face (the panel is told)');
  T.paintColor = null;
  clickAt([1, 0, 0.5]);
  ok(!faceAt(1, 0, 0.5, [0, -1, 0])[1].color, 'the Default swatch (no colour) takes a face back to the default');
  // a group: the click paints the placement
  model.change('g', (m) => m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: faceAt(5, 1, 1, [0, 0, 1])[0] }]), 'group'));
  const gid = [...model.root.insts.keys()][0];
  T.paintColor = '#f1c40f';
  clickAt([5, 1, 1]);
  ok(model.root.insts.get(gid).color === '#f1c40f' && ![...model.def(model.root.insts.get(gid).def).faces.values()].some((f) => f.color), 'clicking a group paints the placement, not the faces inside');
  // a selection: clicking one of the selected faces paints them all
  const twoF = [...model.root.faces.keys()].slice(0, 2);
  host.sel = twoF.map((id) => ({ t: 'f', id }));
  const mid = (fid) => { const f = model.root.faces.get(fid); const P = f.loops[0].map((v) => model.root.verts.get(v)); return V.mul(P.reduce((a, b) => V.add(a, b), [0, 0, 0]), 1 / P.length); };
  T.paintColor = '#7d4ab0';
  const u0 = model.undoStack.length;
  clickAt(mid(twoF[0]));
  ok(twoF.every((id) => model.root.faces.get(id).color === '#7d4ab0') && model.undoStack.length === u0 + 1, 'clicking a selected face paints the whole selection, one undo step');
}

section('collisions, snapping off, Blender-style grab/rotate/scale, copy and paste');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, infer } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { collider } = await import(path.join(APP, 'collide.js'));
  const model = new Model();
  model.units = 'm';
  const cam = new Camera();
  cam.setSize(1000, 800);
  let cache = null;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version) cache = sceneOf(host.model); return cache; },
    setSel(s) { host.sel = s; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); host.sel = []; },
  };
  const T = new Tools(host);
  T.collide = true;
  cam.eye = [10, -18, 14]; cam.target = [3, 2, 0]; cam.clip(30);
  const at = (p) => cam.project(p);
  const ev = (p) => { const q = at(p); return { x: q[0], y: q[1] }; };
  const box = (x0, y0, w, d, h) => {
    const iid = model.change('box', (m) => {
      const def = m.root;
      addPolygon(def, rectPts([x0, y0, 0], [1, 0, 0], [0, 1, 0], w, d), [0, 0, 1]);
      const fid = [...def.faces.keys()].pop();
      pushPull(def, fid, h);
      const sel = M.connected(def, [{ t: 'f', id: fid }]);
      return m.makeGroup(def, sel, 'group');
    });
    return iid;
  };
  const posOf = (iid) => model.root.insts.get(iid).m.slice(12, 15);
  const wallA = box(0, 0, 4, 0.2, 2.5);           // a wall along red
  const wallB = box(6, -2, 0.2, 4, 2.5);          // another, crossing green, 2 m to the right of wallA's end
  host.sel = [{ t: 'i', id: wallA }];

  // moving wallA 4 m along red runs into wallB at x = 6: it stops touching (end face at 6)
  T.set('move');
  const mt = T.tool;
  mt.begin([0, 0, 0], false);
  mt.apply([4, 0, 0]);
  ok(mt.stopped && close(mt.delta[0], 2, 1e-4), `collide: a moved wall stops where it touches the other (moved ${mt.delta[0].toFixed(5)} m of 4)`);
  mt.finish();
  ok(close(posOf(wallA)[0], 2, 1e-4), 'collide: the stop is what gets committed');
  // touching is fine: sliding along the other wall's face is not blocked
  T.set('move');
  T.tool.begin([0, 0, 0], false);
  T.tool.apply([0, 1, 0]);
  ok(!T.tool.stopped && close(T.tool.delta[1], 1), 'collide: sliding along the face it touches is allowed');
  T.escape();
  // a box set down on top of another is fine (face on face)
  const cube = box(10, 0, 1, 1, 1);
  host.sel = [{ t: 'i', id: cube }];
  T.set('move');
  T.tool.begin([0, 0, 0], false);
  T.tool.apply([-3.8, 0, 2.5]);                  // onto wallB's top (x 6.2..7.2 overlaps 6..6.2? no: lands at 6.2) — off it, in the air
  ok(!T.tool.stopped, 'collide: a move through empty air is not stopped');
  T.escape();
  // lift it over wallB (collide off), then lower it: it lands on the top face and stays there
  T.collide = false;
  T.set('move'); T.tool.begin([0, 0, 0], false); T.tool.apply([-4, -1, 5]); T.tool.finish();
  T.collide = true;
  T.set('move'); T.tool.begin([0, 0, 0], false); T.tool.apply([0, 0, -10]);
  ok(T.tool.stopped && close(T.tool.delta[2], -2.5, 1e-4), `collide: lowered onto a wall, it lands on the top face (${T.tool.delta[2].toFixed(5)})`);
  T.tool.finish();
  T.set('move'); T.tool.begin([0, 0, 0], false); T.tool.apply([0, 0.5, 0]);
  ok(!T.tool.stopped, 'collide: resting face on face, it can slide along the top');
  T.escape();
  model.undo(); model.undo();
  // a fast move does not jump through a thin wall
  T.set('move');
  T.tool.begin([0, 0, 0], false);
  T.tool.apply([-9, 1, 0]);
  ok(T.tool.stopped && T.tool.delta[0] > -3.81 && T.tool.delta[0] < -3.79, `collide: a long move stops at the thin wall instead of jumping it (${T.tool.delta[0].toFixed(4)})`);
  T.escape();
  // off: it passes through
  T.collide = false;
  T.set('move');
  T.tool.begin([0, 0, 0], false);
  T.tool.apply([-9, 1, 0]);
  ok(!T.tool.stopped && close(T.tool.delta[0], -9), 'collide off: the move passes through');
  T.escape();
  T.collide = true;
  // things that already overlap can still be pulled apart
  const inside = box(6.05, 0, 0.1, 0.5, 0.5);    // starts inside wallB
  host.sel = [{ t: 'i', id: inside }];
  T.set('move');
  T.tool.begin([0, 0, 0], false);
  T.tool.apply([3, 0, 0]);
  ok(!T.tool.stopped, 'collide: geometry that already overlaps at the start is not in the way');
  T.escape();
  // the collider on its own: a box wholly swallowed by a bigger one is caught
  {
    const m2 = new Model();
    const mk = (x0, s) => m2.change('b', (m) => { addPolygon(m.root, rectPts([x0, 0, 0], [1, 0, 0], [0, 1, 0], s, s), [0, 0, 1]); const f = [...m.root.faces.keys()].pop(); pushPull(m.root, f, s); return m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: f }]), 'group'); });
    const small = mk(0, 0.5), big = mk(3, 2);
    const sc = sceneOf(m2);
    const c = collider(sc, { moving: (o) => o.path[0] === small });
    const r = c.clamp([3.75, 0.75, 0.75]);
    ok(r.hit && close(r.delta[0], 2.5, 1e-3), `collider: the small box stops at the big one's face (${r.delta[0].toFixed(4)})`);
    void big;
  }

  // push/pull: pulling a lone face up stops under a slab above it
  {
    const m3 = new Model();
    m3.units = 'm';
    m3.change('slab', (m) => { addPolygon(m.root, rectPts([0, 0, 3], [1, 0, 0], [0, 1, 0], 4, 4), [0, 0, 1]); const f = [...m.root.faces.keys()].pop(); pushPull(m.root, f, 0.3); m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: f }]), 'group'); });
    m3.change('pad', (m) => addPolygon(m.root, rectPts([1, 1, 0], [1, 0, 0], [0, 1, 0], 1, 1), [0, 0, 1]));
    const h2 = { ...host, model: m3, sel: [], path: [] };
    let c3 = null;
    h2.scene = () => { if (!c3 || c3.version !== m3.version) c3 = sceneOf(m3); return c3; };
    const T3 = new Tools(h2);
    T3.collide = true;
    T3.set('push');
    const cam3 = cam;
    cam3.eye = [6, -8, 6]; cam3.target = [1.5, 1.5, 0];
    const fp = cam3.project([1.5, 1.5, 0]);
    T3.click(fp[0], fp[1], { time: 1 });
    T3.value('5');
    const s3 = solidInfo(m3.root);
    ok(s3.closed && close(s3.volume, 3, 1e-3), `collide: push/pull stops under the slab (3 m tall, not 5: ${s3.volume?.toFixed(4)} m³)`);
    cam.eye = [10, -18, 14]; cam.target = [3, 2, 0];
  }

  // snapping off: no endpoint snap
  {
    const sc = host.scene();
    const corner = at([4 + 2, 0.2, 2.5]);
    const on = infer(sc, cam, corner[0] + 3, corner[1] - 2, {});
    const offR = infer(sc, cam, corner[0] + 3, corner[1] - 2, { snap: false });
    ok(on.kind === 'end' && offR.kind !== 'end' && offR.kind !== 'edge', `snapping off: no endpoint or edge snap (${on.kind} → ${offR.kind})`);
    T.snapping = false;
    ok(T.snap({ x: corner[0] + 3, y: corner[1] - 2 }).kind !== 'end', 'tools.snapping = false reaches the tools');
    T.snapping = true;
  }

  // Blender-style: G grabs from the cursor, X locks red, a click puts it down, back to Select
  host.sel = [{ t: 'i', id: cube }];
  const before = posOf(cube);
  T.collide = false;
  ok(T.grab(ev([10.5, 0.5, 1])), 'grab starts with a selection');
  ok(T.name === 'move' && T.tool.busy && T.tool.modal, 'grab: Move is running at once (no first click)');
  T.key('ArrowRight');
  T.move(ev([12.5, 2, 1]));
  T.down({ ...ev([12.5, 2, 1]), time: 5000 }); T.up({ ...ev([12.5, 2, 1]), time: 5001 });
  const after = posOf(cube);
  ok(close(after[1], before[1], 1e-6) && close(after[2], before[2], 1e-6) && after[0] > before[0] + 1, `grab + red lock: moved along red only (${after.map((v) => v.toFixed(3))})`);
  ok(T.name === 'select', 'grab: back to Select after the click');
  // Shift+D: duplicate and grab; Esc cancels and leaves nothing behind
  const nInst = model.root.insts.size;
  T.grab(ev([12.5, 0.5, 1]), { copy: true });
  T.move(ev([14, 0.5, 1]));
  T.escape();
  ok(model.root.insts.size === nInst && T.name === 'select', 'duplicate + Esc: no copy left, back to Select');
  T.grab(ev([12.5, 0.5, 1]), { copy: true });
  T.move(ev([14, 0.5, 1]));
  T.value('3');
  ok(model.root.insts.size === nInst + 1, 'duplicate + typed distance: one copy');
  T.value('3x');
  ok(model.root.insts.size === nInst + 3, 'then 3x in Select makes three copies in a row');
  model.undo();
  model.undo();
  // R: rotate about the selection's centre, typed degrees
  host.sel = [{ t: 'i', id: wallA }];
  const cA = T.selCenter();
  T.turn(ev([cA[0] + 1, cA[1], 0]));
  ok(T.name === 'rotate' && T.tool.stage === 2, 'turn: Rotate starts at the angle stage');
  T.value('90');
  const bbA = model.bbox(model.def(model.root.insts.get(wallA).def), model.root.insts.get(wallA).m);
  ok(close(bbA.max[0] - bbA.min[0], 0.2, 1e-6) && close(bbA.max[1] - bbA.min[1], 4, 1e-6) && V.dist(T.selCenter(), cA) < 1e-6, 'turn + "90": the wall turned a quarter about its own centre');
  ok(T.name === 'select', 'turn: back to Select');
  // S: scale about the centre, typed factor
  host.sel = [{ t: 'i', id: cube }];
  const cC = T.selCenter();
  T.resize(ev([cC[0] + 1, cC[1], cC[2]]));
  T.value('2');
  const bbC = model.bbox(model.def(model.root.insts.get(cube).def), model.root.insts.get(cube).m);
  ok(close(bbC.max[0] - bbC.min[0], 2, 1e-6) && V.dist(T.selCenter(), cC) < 1e-6, 'resize + "2": twice the size about its centre');

  // copy and paste: a group pastes as a new group; a component pastes as another placement of it
  const nDefs = model.defs.size;
  const clip = model.copyClip([], [{ t: 'i', id: cube }]);
  ok(clip && clip.format === 'modelcraft-clip' && JSON.parse(JSON.stringify(clip)).top, 'copyClip: plain JSON');
  const pasted = model.change('Paste', (m) => m.pasteClip([], clip, V.translation([20, 0, 0])));
  ok(pasted.length === 1 && pasted[0].t === 'i' && model.defs.size === nDefs + 1, 'paste: a copied group comes back as a new group');
  ok(close(model.bbox(model.def(model.root.insts.get(pasted[0].id).def), model.root.insts.get(pasted[0].id).m).min[0], 20, 1e-6), 'paste: lands with its lowest corner at the point');
  const compIid = model.change('c', (m) => { const d = m.def(m.root.insts.get(cube).def); d.kind = 'component'; return cube; });
  const clip2 = model.copyClip([], [{ t: 'i', id: compIid }]);
  const p2 = model.change('Paste', (m) => m.pasteClip([], clip2, V.translation([25, 0, 0])));
  ok(model.root.insts.get(p2[0].id).def === model.root.insts.get(cube).def, 'paste: a component stays the same component in its own model');
  // into another model (another tab): a new component definition
  const other = new Model();
  const p3 = other.change('Paste', (m) => m.pasteClip([], JSON.parse(JSON.stringify(clip2)), V.ident()));
  const d3 = other.def(other.root.insts.get(p3[0].id).def);
  ok(d3 && d3.kind === 'component' && d3.faces.size === 6, 'paste into another model: the component comes with its definition');
  // loose geometry copies as loose geometry, in place
  const looseM = new Model();
  looseM.change('r', (m) => addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 1), [0, 0, 1]));
  const fsel = M.faceWithEdges(looseM.root, [...looseM.root.faces.keys()][0]);
  const lc = looseM.copyClip([], fsel);
  const lp = looseM.change('Paste', (m) => m.pasteClip([], lc, V.translation([5, 0, 0])));
  ok(looseM.root.faces.size === 2 && lp.some((x) => x.t === 'f') && !looseM.root.insts.size, 'paste: loose faces paste as loose faces');
  // refused: a component pasted inside itself; a tampered clipboard
  let threw = '';
  try { model.change('Paste', (m) => m.pasteClip([cube], clip2, V.ident())); } catch (e) { threw = e.message; }
  ok(/inside itself/.test(threw), 'paste: refuses a component inside itself (' + threw + ')');
  threw = '';
  const bad = JSON.parse(JSON.stringify(clip2)); bad.top.insts[0].def = 'd999';
  const v0 = model.version, n0 = model.defs.size;
  try { model.change('Paste', (m) => m.pasteClip([], bad, V.ident())); } catch (e) { threw = e.message; }
  ok(threw && model.defs.size === n0, 'paste: a tampered clipboard is refused and changes nothing (' + threw + ')');
  void v0;
}

section('components');
{
  const m = new Model();
  m.change('col', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 0.4, 0.4)); pushPull(mm.root, [...mm.root.faces.keys()][0], 3); });
  const iid = m.change('Make component', (mm) => mm.makeGroup(mm.root, connected0(mm.root), 'component', 'Column'));
  const def = m.def(m.root.insts.get(iid).def);
  ok(def.kind === 'component' && def.name === 'Column', 'make component: named definition');
  m.change('Place 7 more', (mm) => { for (let k = 1; k < 8; k++) mm.place(mm.root, def.id, V.translation([k * 3, 0, 0])); });
  ok(m.instanceCounts().get(def.id) === 8, 'one column placed eight times');
  m.change('Edit column', (mm) => { const d = mm.def(def.id); const top = facesFacing(d, [0, 0, 1])[0]; pushPull(d, top, 1); });
  const vols = [];
  m.walk((d, wm, p) => { if (p.length === 1) vols.push(solidInfo(d).volume); });
  ok(vols.length === 8 && vols.every((v) => close(v, 0.16 * 4)), 'edit the definition once: all eight columns are 4 m tall');
  const bb = m.bbox();
  ok(close(bb.max[2], 4) && close(bb.max[0], 21.4), 'model extents follow (21.4 × 4 m)');
  const one = [...m.root.insts.keys()][3];
  m.change('Make unique', (mm) => mm.makeUnique(mm.root, one));
  m.change('Edit one', (mm) => { const d = mm.def(mm.root.insts.get(one).def); pushPull(d, facesFacing(d, [0, 0, 1])[0], 1); });
  ok(close(m.bbox().max[2], 5) && m.instanceCounts().get(def.id) === 7, 'make unique: editing it leaves the other seven alone');
  m.change('Explode', (mm) => mm.explode(mm.root, one));
  ok(m.root.faces.size === 6 && close(solidInfo(m.root).volume, 0.16 * 5), 'explode: its geometry joins the model; the unused definition is purged');
  ok(![...m.defs.values()].some((d) => d.kind === 'component' && d.id !== def.id), 'purged');
  const j = JSON.parse(m.snapshot());
  const m3 = new Model(); m3.load(j);
  ok(m3.snapshot() === m.snapshot(), 'native file round trip is exact');
}

section('more geometry');
{
  // L-shaped footprint drawn by lines, then pulled: closed solid with 8 sides
  const m = new Model(), d = m.root;
  const L = [[0, 0, 0], [6, 0, 0], [6, 2, 0], [2, 2, 0], [2, 5, 0], [0, 5, 0]];
  for (let i = 0; i < L.length; i++) addEdge(d, L[i], L[(i + 1) % L.length]);
  ok(d.faces.size === 1 && close(faceArea(d, [...d.faces.values()][0]), 18), 'an L of six lines closes into an 18 m² face');
  pushPull(d, [...d.faces.keys()][0], 3);
  const s = solidInfo(d);
  ok(s.closed && s.faces === 8 && close(s.volume, 54), `pulled L: 8 faces, 54 m³ (${s.faces}, ${s.volume})`);
  // a rectangle on the top touching its edge, pulled up: its side merges with the wall below (no seam)
  addPolygon(d, rectPts([0, 0, 3], [1, 0, 0], [0, 1, 0], 2, 2));
  const pad = facesFacing(d, [0, 0, 1]).find((id) => close(faceArea(d, d.faces.get(id)), 4));
  pushPull(d, pad, 1);
  const s2 = solidInfo(d);
  const fronts = facesFacing(d, [0, -1, 0]);
  ok(s2.closed && close(s2.volume, 58) && fronts.length === 1, `a pad on the corner pulled up: closed, 58 m³, its front merged with the wall (${fronts.length} front face)`);
  // move a face: the connected geometry stretches and stays closed
  const m4 = new Model(), d4 = m4.root;
  addPolygon(d4, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2));
  pushPull(d4, [...d4.faces.keys()][0], 2);
  const right = facesFacing(d4, [1, 0, 0])[0];
  transformSel(d4, [{ t: 'f', id: right }], V.translation([1, 0, 0]));
  const s4 = solidInfo(d4);
  ok(s4.closed && close(s4.volume, 12), `moving a face stretches the box (12 m³: ${s4.volume})`);
  // move the top's corner up: the top folds into two triangles and the solid stays closed
  const topf = facesFacing(d4, [0, 0, 1])[0];
  const corner = d4.faces.get(topf).loops[0][0];
  const eid = [...d4.edges].find(([, e]) => e.a === corner || e.b === corner)[0];
  void eid;
  const vsel = [...d4.edges].filter(([, e]) => e.a === corner || e.b === corner);
  // moving one vertex: select its edges' shared vertex by selecting an edge and nudging only that point
  const P0 = d4.verts.get(corner).slice();
  d4.verts.set(corner, V.add(P0, [0, 0, 1]));
  // the kernel's transformSel folds non-planar faces; apply a zero move to trigger it on the touched faces
  d4.verts.set(corner, P0);
  transformSel(d4, [{ t: 'e', id: vsel[0][0] }], V.translation([0, 0, 0]));
  ok(solidInfo(d4).closed, 'a zero move leaves it closed');
  const m5 = new Model(), d5 = m5.root;
  addPolygon(d5, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 2, 2));
  pushPull(d5, [...d5.faces.keys()][0], 2);
  const before = d5.faces.size;
  const cv = d5.faces.get(facesFacing(d5, [0, 0, 1])[0]).loops[0][0];
  M.transformVerts(d5, new Set([cv]), V.translation([0, 0, 0.5]));
  const s5 = solidInfo(d5);
  ok(s5.closed && d5.faces.size === before + 1, `lifting one top corner folds the top into two triangles (the sides stay planar) and stays closed (${before} → ${d5.faces.size} faces)`);
  ok(s5.volume > 8 + 0.3, `volume grows by the lifted corner (${s5.volume?.toFixed(4)})`);
}

// view cube (canonical copies; full checks in bin/test-viewcube.mjs): this build's camera through the adapter
section('dimensions: place them, then resize the model by typing a new length');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, pickDim, dimLayout } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { formatLength } = await import(path.join(APP, 'units.js'));
  const model = new Model();
  model.units = 'm';
  const cam = new Camera();
  cam.setSize(1000, 800);
  let cache = null;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version) cache = sceneOf(host.model); return cache; },
    setSel(s) { host.sel = s; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); host.sel = []; },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p, mods) => { const s = at(p); T.click(s[0], s[1], { ...mods, time: (clickAt.t = (clickAt.t || 0) + 1000) }); };
  const moveTo = (p) => { const s = at(p); T.move({ x: s[0], y: s[1] }); };
  cam.eye = [8, -14, 12]; cam.target = [2, 2, 1]; cam.clip(20);
  const bb = () => model.bbox();
  // a 4 × 3 × 2.5 m box
  model.change('box', (m) => { addPolygon(m.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3), [0, 0, 1]); pushPull(m.root, [...m.root.faces.keys()][0], 2.5); });
  ok(close(solidInfo(model.root).volume, 30), 'a 4 × 3 × 2.5 m box');

  // two corners, then where the line goes; then type a new length straight away
  T.set('dim');
  clickAt([0, 0, 0]); clickAt([4, 0, 0]); moveTo([2, -1, 0]); clickAt([2, -1, 0]);
  const [did, dm] = [...model.dims][0] || [];
  ok(model.dims.size === 1 && dm.a.path && dm.b.path, 'dimension tool: two corners → a dimension attached to both vertices');
  ok(dm && close(dimLayout(model, dm, cam).L, 4) && close(dm.off[1], -1, 1e-6), 'it measures 4 m, its line 1 m in front (' + JSON.stringify(dm?.off) + ' ' + dimLayout(model, dm, cam).L + ')');
  T.value('6m');
  ok(close(bb().max[0], 6) && close(bb().min[0], 0) && close(solidInfo(model.root).volume, 45) && solidInfo(model.root).closed, 'typing 6m right after: the far side moves, the box is 6 m wide and still a closed solid');
  ok(close(V.dist(...model.dimEnds(dm)), 6), 'the dimension follows the geometry: it reads 6 m');

  // later: select it (click its text) and type a length
  T.set('select');
  const l = dimLayout(model, dm, cam);
  T.click(l.M[0], l.M[1], { time: 5e6 });
  ok(host.sel.length === 1 && host.sel[0].t === 'd' && host.sel[0].id === did, 'select tool: clicking the dimension text selects the dimension');
  ok(pickDim(model, cam, l.M[0], l.M[1], (m) => formatLength(m, 'm'))?.id === did, 'pickDim finds it');
  T.value('5');
  ok(close(bb().max[0], 5) && close(solidInfo(model.root).volume, 37.5), 'selected dimension + "5" → 5 m wide');
  model.change('both', (m) => { m.dims.get(did).move = 'both'; });
  model.change('len', (m) => m.setDimLength(did, 7));
  ok(close(bb().min[0], -1) && close(bb().max[0], 6), 'moving both ends: it grows 1 m each way, centred');
  model.change('a', (m) => { m.dims.get(did).move = 'a'; });
  model.change('len', (m) => m.setDimLength(did, 6));
  ok(close(bb().min[0], 0) && close(bb().max[0], 6), 'moving the first end: the near side moves');

  // a height dimension, an edge length, a refusal
  const hid = model.change('h', (m) => m.addDim([0, 0, 0], [0, 0, 2.5], [-1, 0, 0]));
  model.change('h', (m) => m.setDimLength(hid, 3));
  ok(close(bb().max[2], 3) && solidInfo(model.root).closed, 'height dimension → 3 m tall, still closed');
  const eY = [...model.root.edges].find(([, e]) => { const a = model.root.verts.get(e.a), b = model.root.verts.get(e.b); return close(a[0], 0) && close(b[0], 0) && close(a[2], 0) && close(b[2], 0); })[0];
  T.set('select'); host.sel = [{ t: 'e', id: eY }];
  T.value('4');
  ok(close(bb().max[1], 4) && close(bb().min[1], 0) && close(solidInfo(model.root).volume, 6 * 4 * 3), 'selected edge + "4" → the box is 4 m deep');
  const before = model.snapshot();
  let msg = '';
  try { model.change('bad', (m) => m.setDimLength(did, -2)); } catch (e) { msg = e.message; }
  ok(msg && model.snapshot() === before, 'a length of zero or less is refused and nothing changes (' + msg + ')');
  const free = model.change('free', (m) => m.addDim([2, -5, 0], [3, -5, 0], [0, -1, 0]));
  msg = '';
  try { model.change('free', (m) => m.setDimLength(free, 2)); } catch (e) { msg = e.message; }
  ok(!model.dims.get(free).a.path && /not on a corner/.test(msg), 'a dimension in empty space measures but refuses to resize');

  // groups: the dimension stays attached; the group's size is editable too
  const gi = model.change('g', (m) => m.makeGroup(m.root, [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'group'));
  ok(model.dims.get(did).b.path?.[0] === gi, 'after Make group the dimension re-attaches to the vertex inside the group');
  model.change('m', (m) => { m.dims.get(did).move = 'b'; });
  model.change('len', (m) => m.setDimLength(did, 8));
  ok(close(bb().max[0], 8), 'resizing through a dimension inside a group stretches the group');
  const gd = model.root.insts.get(gi).def;
  model.change('size', (m) => m.setDefSize(gd, 2, 2));
  ok(close(bb().max[2], 2) && solidInfo(model.def(gd)).closed, 'group size: height 2 m (Entity info), still closed');
  // two groups: dimension between them moves the second group whole
  const g2 = model.change('g2', (m) => { const d = m.newDef('group'); addPolygon(d, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1), [0, 0, 1]); pushPull(d, [...d.faces.keys()][0], 1); return m.place(m.root, d.id, V.translation([10, 0, 0])); });
  const gap = model.change('gap', (m) => m.addDim([8, 0, 0], [10, 0, 0], [0, -2, 0]));
  model.change('gap', (m) => m.setDimLength(gap, 3));
  ok(close(model.root.insts.get(g2).m[12], 11) && close(bb().max[0], 12), 'a dimension between two groups: the second group moves (gap 2 → 3 m)');

  // save, reopen, undo
  const j = JSON.parse(model.snapshot()), m2 = new Model();
  m2.load(j);
  ok(m2.dims.size === model.dims.size && close(V.dist(...m2.dimEnds(m2.dims.get(did))), 8), 'dimensions are saved in the file and reopen attached');
  const bad = JSON.parse(model.snapshot()); bad.dims.push({ id: 'x' }, { id: 99999, a: { p: [0, 0] }, b: { p: [1, 1, 1] }, off: [0, 0, 0] }, null);
  const m3 = new Model(); m3.load(bad);
  ok(m3.dims.size === model.dims.size, 'broken dimensions in a file are skipped');
  model.undo();
  ok(close(model.root.insts.get(g2).m[12], 10), 'undo puts the group back');
  T.set('erase');
  const l2 = dimLayout(model, model.dims.get(gap), cam);
  T.down({ x: l2.M[0], y: l2.M[1], time: 9e8 }); T.up({ x: l2.M[0], y: l2.M[1] });
  ok(!model.dims.has(gap), 'eraser removes a dimension');
}

section('radius, diameter and angle dimensions (0.4 M5)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, pickDim, dimLayout, dimText, dimTextBox } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const { formatLength } = await import(path.join(APP, 'units.js'));
  const { curveInfo } = M;
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, tm = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: (tm += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  const fmt = (m) => formatLength(m, 'm');
  const lerp = (a, b, k) => a.map((x, i) => x + (b[i] - x) * k);
  const look = (tg, h) => { cam.eye = [tg[0], tg[1] - 2, h]; cam.target = tg; cam.clip(40); };
  look([4, 4, 0], 22);
  const curves = (kind) => [...new Set([...model.root.edges.values()].map((e) => e.curve).filter((c) => (c || '').startsWith(kind + ':')))];
  // a circle of radius 2 (24 sides) on the ground at (2, 2): click one of its edges between corners
  T.set('circle'); clickAt([2, 2, 0]); moveTo([4, 2, 0]); T.value('2');
  const cid = curves('circle')[0];
  let ci = curveInfo(model.root, cid);
  const P0 = model.root.verts.get(ci.verts[0]), P1 = model.root.verts.get(ci.verts[1]);
  T.set('dim');
  look([2, 2, 0], 7);
  clickAt(lerp(P0, P1, 0.71));
  ok(T.tool.stage === 3 && T.tool.rad?.kind === 'dia', 'Dimension on a circle\'s edge: a diameter to place (stage ' + T.tool.stage + ')');
  clickAt([5.5, 2, 0]);
  let [id, dm] = [...model.dims].at(-1) || [];
  let l = dm && dimLayout(model, dm, cam);
  ok(dm?.kind === 'dia' && close(l.L, 4, 1e-9) && dimText(l, fmt) === 'Ø 4 m', `a click places it: Ø 4 m (${l && dimText(l, fmt)})`);
  ok(close(V.dist(l.T, [5.5, 2, 0]), 0, 1e-6) && close(V.dist(l.P, [4, 2, 0]), 0, 1e-6) && close(V.dist(l.Q, [0, 2, 0]), 0, 1e-6), 'its line runs across the circle through the centre, out to the text');
  T.value('3');
  ci = curveInfo(model.root, cid);
  ok(close(ci.radius, 1.5, 1e-9) && V.dist(ci.center, [2, 2, 0]) < 1e-9, `typing 3 right after → the circle is 3 m across, about the same centre (r ${ci.radius})`);
  ok(model.root.faces.size === 1 && close(dimLayout(model, dm, cam).L, 3, 1e-9), 'its disc follows, and the dimension reads 3');
  const box = dimTextBox(at(l.T), dimText(dimLayout(model, dm, cam), fmt));
  ok(pickDim(model, cam, box.x + box.w / 2, box.y + 5, fmt)?.id === id, 'clicking its text picks it');
  host.sel = [{ t: 'd', id }]; T.set('select'); T.value('5');
  ok(close(curveInfo(model.root, cid).radius, 2.5, 1e-9) && /Diameter set to 5 m/.test(host.msgs.at(-1)), 'selected later, typing 5 → 5 m across: ' + host.msgs.at(-1));
  model.change('kind', (m) => { m.dims.get(id).kind = 'rad'; });
  ok(dimText(dimLayout(model, dm, cam), fmt) === 'R 2.5 m', 'shown as a radius it reads R 2.5 m');
  host.sel = [{ t: 'd', id }]; T.value('1');
  ok(close(curveInfo(model.root, cid).radius, 1, 1e-9), 'and typing 1 sets the radius to 1');
  model.undo();
  ok(close(curveInfo(model.root, cid).radius, 2.5, 1e-9), 'undo puts the size back');
  // an arc: a radius
  look([8, 0.5, 0], 7);
  T.set('arc'); clickAt([6, 0, 0]); clickAt([10, 0, 0]); moveTo([8, 1.5, 0]); T.value('1');
  const aid = curves('arc')[0];
  const ai = curveInfo(model.root, aid);
  const A0 = model.root.verts.get(ai.verts[5]), A1 = model.root.verts.get(ai.verts[6]);
  T.set('dim'); clickAt(lerp(A0, A1, 0.3));
  ok(T.tool.stage === 3 && T.tool.rad?.kind === 'rad', 'on an arc: a radius');
  clickAt([8, -3, 0]);
  [id, dm] = [...model.dims].at(-1);
  l = dimLayout(model, dm, cam);
  ok(dm.kind === 'rad' && close(l.L, ai.radius, 1e-9) && /^R /.test(dimText(l, fmt)), `R ${fmt(ai.radius)} (${dimText(l, fmt)})`);
  // save and open: the radial dimensions come back on their curves
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  const rd = [...back.dims.values()].filter((d) => d.kind === 'rad' || d.kind === 'dia');
  ok(rd.length === 2 && rd.every((d) => back.radialAt(d.c)?.live), 'saved and opened, both still sit on their curves');
  // a triangle with a 30° corner at the origin: click one edge, then the other, then inside the angle
  const tri = [[0, 6, 0], [6, 6, 0], [6, 6 + 6 * Math.tan(Math.PI / 6), 0]];
  look([3, 7.5, 0], 14);
  T.set('line'); clickAt(tri[0]); clickAt(tri[1]); clickAt(tri[2]); clickAt(tri[0]);
  T.set('dim');
  clickAt(lerp(tri[0], tri[1], 0.37));
  ok(T.tool.stage === 2 && T.tool.edge1, 'first edge: a linear dimension to place, as before');
  moveTo(lerp(tri[0], tri[2], 0.62));
  ok(host.ov?.dims?.[0]?.kind === 'ang', 'over a second edge that meets it, the angle shows instead');
  clickAt(lerp(tri[0], tri[2], 0.62));
  ok(T.tool.stage === 4, 'clicking it: an angle to place');
  clickAt([3, 6.6, 0]);
  [id, dm] = [...model.dims].at(-1);
  l = dimLayout(model, dm, cam);
  ok(dm.kind === 'ang' && close(l.L, Math.PI / 6, 1e-9) && dimText(l, fmt) === '30°' && /Angle 30°/.test(host.msgs.at(-1)), `inside the corner: 30° (${dimText(l, fmt)})`);
  ok(close(V.dist(l.arc[0], tri[0]), 3 * Math.hypot(1, 0.2), 0.05 * 3), 'its arc runs about where it was clicked');
  model.change('beside', (m) => { m.dims.get(id).off = [-3, 0.5, 0]; });
  ok(close(dimLayout(model, dm, cam).L, (5 * Math.PI) / 6, 1e-9), 'moved beside the corner it reads 150° (the angle next to it)');
  let msg = '';
  try { model.setDimLength(id, 2); } catch (err) { msg = err.message; }
  ok(/measures only/.test(msg), 'an angle dimension does not resize: ' + msg);
  host.sel = [{ t: 'd', id }]; T.set('select'); host.msgs.length = 0; T.value('2');
  ok(/measures only/.test(host.msgs.at(-1) || ''), 'typing a length with it selected says so');
  // the angle follows its corner
  model.change('move', (m) => { for (const [v, p] of m.root.verts) if (V.dist(p, tri[2]) < 1e-9) m.root.verts.set(v, [6, 12, 0]); });
  ok(close(dimLayout(model, model.dims.get(id), cam).L, (3 * Math.PI) / 4, 1e-9), 'when a line\'s end moves (the edges now 45° apart), the angle beside them follows: 135°');
  // a pushed circle (a cylinder) measures but cannot resize
  look([12, 8, 0], 10);
  T.set('circle'); clickAt([12, 8, 0]); moveTo([13, 8, 0]); T.value('1');
  const cyl = curves('circle').find((c) => c !== cid);
  const fid = [...model.root.faces.keys()].at(-1);
  model.change('push', (m) => M.pushPull(m.root, fid, 2));
  const cyli = curveInfo(model.root, cyl);
  const did = model.change('d', (m) => m.addRadialDim([], cyl, [2, 0, 0], 'dia'));
  msg = '';
  try { model.setDimLength(did, 4); } catch (err) { msg = err.message; }
  ok(cyli && !cyli.flat && msg && close(curveInfo(model.root, cyl).radius, 1, 1e-9), 'a pushed circle (a cylinder\'s end) keeps its size: ' + msg);
  // erased curve: the dimension stays where it was and no longer resizes
  const lone = model.change('d2', (m) => m.addRadialDim([], aid, [0, -3, 0], 'rad'));
  model.change('erase arc', (m) => { for (const eid of M.curveEdges(m.root, aid)) m.root.edges.delete(eid); });
  ok(model.radialAt(model.dims.get(lone).c)?.live === false, 'its curve erased, a radius dimension keeps its last place');
}

section('tags: show and hide groups and components (0.4 M6)');
{
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const model = new Model(); model.units = 'm';
  const box = (x) => model.change('box', (m) => { M.addPolygon(m.root, [[x, 0, 0], [x + 1, 0, 0], [x + 1, 1, 0], [x, 1, 0]], [0, 0, 1]); const f = [...m.root.faces.keys()].at(-1); M.pushPull(m.root, f, 1); return m.makeGroup(m.root, [...[...m.root.faces.keys()].map((id) => ({ t: 'f', id })), ...[...m.root.edges.keys()].map((id) => ({ t: 'e', id }))], 'group'); });
  const g1 = box(0), g2 = box(3), g3 = box(6);
  const furn = model.change('add', (m) => m.addTag('Furniture'));
  const walls = model.change('add', (m) => m.addTag('Walls'));
  ok(furn === 'Furniture' && walls === 'Walls' && model.change('add', (m) => m.addTag('furniture')) === 'furniture 2', 'tags have unique names (case aside): a second "furniture" becomes "furniture 2"');
  model.change('tag', (m) => m.setTag(m.root, [g1, g2], 'Furniture'));
  model.change('tag', (m) => m.setTag(m.root, [g3], 'Walls'));
  let c = model.tagCounts();
  ok(c.get('Furniture') === 2 && c.get('Walls') === 1 && c.get('') === 0, 'counts per tag: Furniture 2, Walls 1, untagged 0');
  const shown = () => sceneOf(model).faces.length;
  const all = shown();
  model.change('hide', (m) => m.setTagHidden('Furniture', true));
  ok(shown() === all / 3, `hiding Furniture leaves only the wall's faces on screen (${shown()} of ${all}) — so nothing hidden is snapped to or picked`);
  model.undo();
  ok(shown() === all, 'undo shows it again');
  model.redo();
  // rename follows to the placements; a name taken is refused
  model.change('ren', (m) => m.renameTag('Furniture', 'Chairs'));
  ok(model.root.insts.get(g1).tag === 'Chairs' && model.tag('chairs')?.hidden === true, 'renaming keeps the placements and the hidden state');
  let msg = '';
  try { model.renameTag('Chairs', 'walls'); } catch (err) { msg = err.message; }
  ok(/already a tag called walls/.test(msg), 'a name another tag has is refused: ' + msg);
  // saved and opened
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(back.tags.length === 3 && back.tag('Chairs').hidden && back.root.insts.get(g3).tag === 'Walls' && sceneOf(back).faces.length === all / 3, 'saved in the file: tags, hidden state, each placement\'s tag');
  // a file naming a tag it does not list still opens, with that tag added
  const j = JSON.parse(JSON.stringify(model.toJSON())); delete j.tags; j.defs.find((d) => d.id === 'root').insts[0].tag = 'Doors';
  const odd = new Model(); odd.load(j);
  ok(odd.tag('Doors') && !odd.tag('Doors').hidden, 'a placement tagged with a name the list lacks: the tag is added, shown');
  // copy into another model: the tag comes along
  model.change('show', (m) => m.setTagHidden('Chairs', false));
  const clip = model.copyClip([], [{ t: 'i', id: g1 }]);
  const other = new Model(); other.units = 'm';
  other.change('paste', (m) => m.pasteClip([], clip, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  ok(other.tag('Chairs') && [...other.root.insts.values()].some((i) => i.tag === 'Chairs'), 'pasted into another model, a group keeps its tag and the tag is added there');
  // delete: the placements become untagged
  const n = model.change('del', (m) => m.deleteTag('Chairs'));
  c = model.tagCounts();
  ok(n === 2 && !model.tag('Chairs') && c.get('') === 2 && !model.root.insts.get(g1).tag, 'deleting a tag untags its 2 placements');
  // nested: a hidden tag inside a group hides only that placement
  const outer = model.change('grp', (m) => m.makeGroup(m.root, [{ t: 'i', id: g1 }, { t: 'i', id: g3 }], 'group'));
  const inner = model.def(model.root.insts.get(outer).def);
  ok([...inner.insts.values()].some((i) => i.tag === 'Walls'), 'grouped, a placement keeps its tag');
  model.change('hide', (m) => m.setTagHidden('Walls', true));
  ok(shown() === (all / 3) * 2, 'a hidden tag hides it inside the group too, and only it');
}

section('section planes (0.4 M7)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, pick, infer, pickSection, sectionLayout } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800); cam.eye = [2, -9, 6]; cam.target = [2, 1.5, 1]; cam.clip(40);
  let cache = null, tm = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version) cache = sceneOf(host.model); return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: (tm += 1000) }); };
  // a 4 × 3 × 2 box
  model.change('box', (m) => { M.addPolygon(m.root, [[0, 0, 0], [4, 0, 0], [4, 3, 0], [0, 3, 0]], [0, 0, 1]); M.pushPull(m.root, [...m.root.faces.keys()][0], 2); });
  // the Section tool on the front face (y = 0, facing the eye): a plane there, arrows toward the eye (−green)
  T.set('section');
  clickAt([1.3, 0, 0.7]);
  const [sid, sp] = [...model.sections][0] || [];
  ok(sp && Math.abs(sp.p[1]) < 1e-9 && V.dist(sp.n, [0, -1, 0]) < 1e-9 && model.activeSection === sid && T.name === 'select' && host.sel[0]?.t === 's', `Section on the front face: a plane in it, arrows toward you, active, selected (${sp && sp.n})`);
  ok(sp.name === 'Section 1' && /Section 1 placed/.test(host.msgs.at(-1)), 'named Section 1: ' + host.msgs.at(-1));
  // slid 1 m into the box (toward +green): the front metre is cut away
  model.change('move', (m) => { const s = m.sections.get(sid); s.p = [s.p[0], 1, s.p[2]]; });
  let sc = sceneOf(model);
  const front = sc.faces.find((f) => V.dist(f.n, [0, -1, 0]) < 1e-9);
  ok(!front && sc.faces.length === 5, `faces wholly on the cut-away side are out of the scene (the front face; ${sc.faces.length} left)`);
  const hitFront = pick(sc, cam, ...at([2, 0, 1]).slice(0, 2));
  ok(hitFront?.t === 'f' && !sc.keep([2, 0, 1]) && sc.keep([2, 1.5, 1]), 'a click where the front face was reaches through to what is behind the cut');
  const r = infer(sc, cam, ...at([4, 0, 2]).slice(0, 2), {});
  ok(!(r.kind === 'end' && V.dist(r.p, [4, 0, 2]) < 1e-9), `no snapping to a corner that is cut away (${r.kind})`);
  // off: the whole model is back
  model.change('off', (m) => { m.sectionView.cuts = false; });
  ok(sceneOf(model).faces.length === 6 && model.activeCut() === null, 'Show section cuts off: the whole model is back');
  model.undo();
  ok(model.activeCut()?.id === sid, 'undo turns it back on');
  // reverse: the other side is cut away
  model.change('rev', (m) => { const s = m.sections.get(sid); s.n = V.mul(s.n, -1); });
  sc = sceneOf(model);
  ok(sc.faces.some((f) => V.dist(f.n, [0, -1, 0]) < 1e-9) && !sc.faces.some((f) => V.dist(f.n, [0, 1, 0]) < 1e-9), 'reversed, the back is cut away and the front stays');
  // the outline: around the model, picked by a click on it
  const l = sectionLayout(model, model.sections.get(sid));
  const q = at(V.mul(V.add(l.corners[0], l.corners[1]), 0.5));
  ok(pickSection(model, cam, q[0], q[1])?.id === sid && T.pickAt({ x: q[0], y: q[1] })?.t === 's', 'clicking its outline selects it');
  ok(l.corners.every((c) => Math.abs(c[1] - 1) < 1e-9) && Math.min(...l.corners.map((c) => c[0])) < 0 && Math.max(...l.corners.map((c) => c[0])) > 4, 'its outline lies in the plane and is wider than the model');
  // saved in the file
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(back.sections.size === 1 && back.activeSection === sid && back.sections.get(sid).name === 'Section 1' && V.dist(back.sections.get(sid).n, [0, 1, 0]) < 1e-9, 'saved in the file: the plane, its name and which one is active');
  model.change('planes', (m) => { m.sectionView.planes = false; });
  const b2 = new Model(); b2.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(b2.sectionView.planes === false && b2.sectionView.cuts === true && pickSection(b2, cam, q[0], q[1]) === null, 'hidden planes stay hidden in the file, and cannot be clicked');
  // a second plane takes over the cut; erasing the active one leaves none
  T.set('section'); model.change('planes', (m) => { m.sectionView.planes = true; });
  clickAt([4, 1.5, 1]);
  const sid2 = model.activeSection;
  ok(sid2 !== sid && model.sections.size === 2 && model.sections.get(sid2).name === 'Section 2', 'a second plane becomes the active one');
  model.change('del', (m) => m.deleteSection(sid2));
  ok(model.activeSection === null && model.activeCut() === null, 'deleting the active plane: nothing cuts');
}

section('solid tools: union, subtract, intersect (0.4 M9)');
{
  const S = await import(path.join(APP, 'solids.js'));
  const { pathToFileURL } = await import('node:url');
  const MF = await S.manifold(() => import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href));
  const model = new Model(); model.units = 'm';
  const box = (o, w, d, h, m = model, path = []) => m.change('box', (mm) => {
    const def = mm.context(path).def;
    const before = new Set([...def.faces.keys(), ...def.edges.keys()].map(String));
    M.addPolygon(def, [[o[0], o[1], o[2]], [o[0] + w, o[1], o[2]], [o[0] + w, o[1] + d, o[2]], [o[0], o[1] + d, o[2]]], [0, 0, 1]);
    const f = [...def.faces.keys()].find((id) => !before.has(String(id)));
    M.pushPull(def, f, h);
    const sel = [...[...def.faces.keys()].filter((id) => !before.has(String(id))).map((id) => ({ t: 'f', id })), ...[...def.edges.keys()].filter((id) => !before.has(String(id))).map((id) => ({ t: 'e', id }))];
    return mm.makeGroup(def, sel, 'group');
  });
  // two 2 m cubes overlapping by 1 m along red
  const a = box([0, 0, 0], 2, 2, 2), b = box([1, 0, 0], 2, 2, 2);
  model.change('tag', (m) => { m.addTag('Walls'); m.setTag(m.root, [a], 'Walls'); m.root.insts.get(a).color = '#c0392b'; });
  ok(S.isSolid(model, model.root, a) && S.isSolid(model, model.root, b), 'two boxes made into groups are solids');
  const undoBefore = model.undoStack.length;
  let r = S.solidOp(MF, model, [], 'union', [a, b]);
  ok(r.closed && close(r.volume, 12, 1e-6) && model.root.insts.size === 1, `Union: one closed solid of 12 m³ in their place (${r.volume})`);
  const ri = model.root.insts.get(r.iid);
  ok(ri.tag === 'Walls' && ri.color === '#c0392b' && model.undoStack.length === undoBefore + 1, 'it keeps the first one\'s tag and colour, in one undo step');
  ok(model.def(ri.def).faces.size === 6, `coplanar triangles read as faces: the joined block has 6 faces (${model.def(ri.def).faces.size})`);
  model.undo();
  ok(model.root.insts.size === 2 && model.root.insts.has(a) && model.root.insts.has(b), 'undo brings back the two boxes');
  r = S.solidOp(MF, model, [], 'intersect', [a, b]);
  ok(close(r.volume, 4, 1e-6), `Intersect: the shared 1 × 2 × 2 m (${r.volume})`);
  model.undo();
  r = S.solidOp(MF, model, [], 'subtract', [a], [b]);
  ok(close(r.volume, 4, 1e-6) && r.closed, `Subtract the second from the first: 4 m³ left (${r.volume})`);
  model.undo();
  // a hole through a block: still one solid, with the hole's faces
  const c = box([0.5, 0.5, -1], 1, 1, 4);
  r = S.solidOp(MF, model, [], 'subtract', [a], [c]);
  ok(close(r.volume, 8 - 2, 1e-6) && r.closed && model.def(model.root.insts.get(r.iid).def).faces.size === 10, `a post through a block: 6 m³ with a square hole, 10 faces (${r.volume})`);
  model.undo();
  // not a solid: says which, and changes nothing
  const open = model.change('open', (m) => { M.addPolygon(m.root, [[5, 0, 0], [6, 0, 0], [6, 1, 0], [5, 1, 0]], [0, 0, 1]); return m.makeGroup(m.root, [...m.root.faces.keys()].map((id) => ({ t: 'f', id })).concat([...m.root.edges.keys()].map((id) => ({ t: 'e', id }))), 'group'); });
  let msg = '';
  const n0 = model.undoStack.length;
  try { S.solidOp(MF, model, [], 'union', [a, open]); } catch (err) { msg = err.message; }
  ok(/is not a solid/.test(msg) && model.undoStack.length === n0, 'a lone face is refused, naming it: ' + msg);
  msg = '';
  const far = box([10, 0, 0], 1, 1, 1);
  try { S.solidOp(MF, model, [], 'intersect', [a, far]); } catch (err) { msg = err.message; }
  ok(/do not overlap/.test(msg), 'intersecting solids apart: ' + msg);
  // inside an open group: the result stays there
  const outer = model.change('grp', (m) => m.makeGroup(m.root, [{ t: 'i', id: a }, { t: 'i', id: b }], 'group'));
  const inner = model.def(model.root.insts.get(outer).def);
  const ids = [...inner.insts.keys()];
  r = S.solidOp(MF, model, [outer], 'union', ids);
  ok(inner.insts.size === 1 && inner.insts.has(r.iid) && close(r.volume, 12, 1e-6), 'inside an open group, the union stays in that group');
}

section('soften and smooth edges by angle (0.4 M18)');
{
  const IOm = await import(path.join(APP, 'io.js'));
  const model = new Model(); model.units = 'm';
  // a 12-sided prism (a coarse cylinder: sides meet at 30°) — its side edges hard to begin with
  const ring = Array.from({ length: 12 }, (_, i) => [Math.cos((i * Math.PI) / 6), Math.sin((i * Math.PI) / 6), 0]);
  model.change('p', (m) => { M.addPolygon(m.root, ring, [0, 0, 1]); M.pushPull(m.root, [...m.root.faces.keys()][0], 2); for (const e of m.root.edges.values()) delete e.soft; });
  const def = model.root, all = [...def.edges.keys()];
  const softN = () => [...model.root.edges.values()].filter((e) => e.soft).length;
  let n = model.change('s', (m) => M.softenEdges(m.root, all, 20));
  ok(n === 0 && softN() === 0, 'soften up to 20°: the sides meet at 30°, so nothing changes');
  n = model.change('s', (m) => M.softenEdges(m.root, all, 31));
  ok(n === 12 && softN() === 12, `soften up to 31°: the 12 side edges go soft, the 24 rim edges (90°) stay hard (${n})`);
  const sm = M.smoothNormals(def);
  const side = [...def.faces].find(([, f]) => Math.abs(M.faceNormal(def, f)[2]) < 1e-9);
  const corner = side[1].loops[0][0], q = sm.get(side[0] + '|' + corner), P = def.verts.get(corner);
  ok(q && close(Math.hypot(q[0], q[1]), 1, 1e-9) && Math.abs(q[2]) < 1e-9 && close((q[0] * P[0] + q[1] * P[1]) / Math.hypot(P[0], P[1]), 1, 1e-9), 'a side face\'s corner normal points straight out from the axis (averaged with its neighbour)');
  const top = [...def.faces].find(([, f]) => M.faceNormal(def, f)[2] > 0.9);
  ok(!sm.has(top[0] + '|' + top[1].loops[0][0]), 'the caps stay flat (no soft edge joins them)');
  // GLB: the side normals are per corner
  const glb = IOm.exportGLB(model);
  const dv = new DataView(glb.buffer, glb.byteOffset, glb.byteLength), jl = dv.getUint32(12, true);
  const gj = JSON.parse(new TextDecoder().decode(glb.subarray(20, 20 + jl))), bin = glb.subarray(20 + jl + 8);
  const prim = gj.meshes[0].primitives[0], acc = gj.accessors[prim.attributes.NORMAL], view = gj.bufferViews[acc.bufferView];
  const nor = new Float32Array(bin.buffer.slice(bin.byteOffset + (view.byteOffset || 0), bin.byteOffset + (view.byteOffset || 0) + acc.count * 12));
  const distinct = new Set(); for (let i = 0; i < acc.count; i++) distinct.add([nor[i * 3], nor[i * 3 + 1], nor[i * 3 + 2]].map((x) => x.toFixed(3)).join());
  ok(distinct.size >= 12 + 2 && distinct.size <= 12 + 2 + 2, `GLB: smooth sides share a normal per corner around the ring (${distinct.size} distinct normals, 12 + the caps)`);
  // OBJ: corners of the sides use the shared normals
  const obj = IOm.exportOBJ(model);
  const vn = obj.split('\n').filter((l) => l.startsWith('vn ')).length;
  ok(vn === 12 + 2, `OBJ: 12 corner normals around the ring + the 2 caps' (${vn} vn lines)`);
  // harden all
  n = model.change('h', (m) => M.softenEdges(m.root, all, 0));
  ok(n === 12 && softN() === 0 && M.smoothNormals(def).size === 0, 'Harden all: every edge hard, the prism shades flat again');
  ok(IOm.exportOBJ(model).split('\n').filter((l) => l.startsWith('vn ')).length === 14, 'and OBJ is back to one normal per face (14)');
  model.undo();
  ok(softN() === 12, 'undo softens them again');
}

section('intersect faces (0.4 M19)');
{
  const prism = (m, def, o, w, d, h) => {
    const before = new Set([...def.faces.keys()].map(String));
    M.addPolygon(def, [[o[0], o[1], o[2]], [o[0] + w, o[1], o[2]], [o[0] + w, o[1] + d, o[2]], [o[0], o[1] + d, o[2]]], [0, 0, 1]);
    M.pushPull(def, [...def.faces.keys()].find((id) => !before.has(String(id))), h);
  };
  // a 4 × 0.2 × 3 m wall (a group) and a 1 m beam (a group) passing through it along green
  const model = new Model(); model.units = 'm';
  const wall = model.change('w', (m) => { prism(m, m.root, [0, 0, 0], 4, 0.2, 3); return m.makeGroup(m.root, [...[...m.root.faces.keys()].map((id) => ({ t: 'f', id })), ...[...m.root.edges.keys()].map((id) => ({ t: 'e', id }))], 'group'); });
  const beam = model.change('b', (m) => { prism(m, m.root, [1.5, -1, 1], 1, 2.2, 1); return m.makeGroup(m.root, [...[...m.root.faces.keys()].map((id) => ({ t: 'f', id })), ...[...m.root.edges.keys()].map((id) => ({ t: 'e', id }))], 'group'); });
  const wallDef = () => model.def(model.root.insts.get(wall).def);
  const f0 = wallDef().faces.size;
  // open the wall, select its faces, Intersect with model: the beam's outline is drawn on both faces of the wall
  const n = model.change('x', (m) => M.intersectFaces(m, [wall], [...wallDef().faces.keys()].map((id) => ({ t: 'f', id })), 'model'));
  ok(n === 8 && wallDef().faces.size === f0 + 2, `inside the wall, Intersect with model draws the beam's outline on its two big faces: 8 edges, 2 new faces where it passes (${n}, ${wallDef().faces.size - f0})`);
  const sq = [...wallDef().faces.values()].filter((f) => close(M.faceArea(wallDef(), f), 1, 1e-9));
  ok(sq.length === 2, 'the two new faces are the 1 × 1 m squares the beam passes through — push one through to cut the opening');
  model.undo();
  ok(wallDef().faces.size === f0, 'one undo step');
  // at the top level, with both groups selected: the lines are drawn in the model, loose (the groups stay closed)
  const n2 = model.change('x', (m) => M.intersectFaces(m, [], [{ t: 'i', id: wall }, { t: 'i', id: beam }], 'selection'));
  ok(n2 === 8 && model.root.edges.size === 8 && model.root.faces.size === 2 && wallDef().faces.size === f0, `two groups selected, Intersect with selection: the 8 lines are drawn in the model (each closed square makes a face, as drawn lines do), the groups untouched (${n2})`);
  model.undo();
  // loose geometry in one context: a box sunk into a slab → the slab's top face gets the box's outline (a face inside it)
  const m2 = new Model(); m2.units = 'm';
  m2.change('s', (m) => { prism(m, m.root, [0, 0, 0], 4, 4, 0.5); });
  const slab = m2.root.faces.size;
  m2.change('c', (m) => { const g = m.makeGroup(m.root, [...[...m.root.faces.keys()].map((id) => ({ t: 'f', id })), ...[...m.root.edges.keys()].map((id) => ({ t: 'e', id }))], 'group'); return g; });
  const slabI = [...m2.root.insts.keys()][0];
  m2.change('box', (m) => { prism(m, m.root, [1, 1, 0.25], 1, 1, 1); });
  const n3 = m2.change('x', (m) => M.intersectFaces(m, [], [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'model'));
  const sides = [...m2.root.faces.values()].filter((f) => Math.abs(M.faceNormal(m2.root, f)[2]) < 1e-9);
  ok(n3 === 8 && sides.length === 8, `a loose box sunk 0.25 m into a slab (a group): its 4 sides are split where they meet the slab's top (4 lines + the 4 upright edges split = ${n3}, ${sides.length} side faces)`);
  ok(slab === 6 && m2.def(m2.root.insts.get(slabI).def).faces.size === 6, 'the slab group itself is not changed (lines go to the open context only)');
  // parallel faces never cross
  const m3 = new Model(); m3.change('p', (m) => { prism(m, m.root, [0, 0, 0], 1, 1, 1); prism(m, m.root, [3, 0, 0], 1, 1, 1); });
  ok(m3.change('x', (m) => M.intersectFaces(m, [], [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'model')) === 0, 'boxes apart: nothing to draw');
}

section('drawing axes: move, turn, align to a face (0.4 M20)');
{
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800); cam.eye = [4, -10, 12]; cam.target = [4, 3, 0]; cam.clip(40);
  let cache = null, tm = 0;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version) cache = sceneOf(host.model); return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const clickAt = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: (tm += 1000) }); };
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  ok(model.axesM === null && T.axes().o.join() === '0,0,0', 'a new model draws on its own axes');
  // Place axes: origin (2, 1, 0), red toward 45°, green beyond
  const c45 = Math.SQRT1_2;
  T.set('axes');
  clickAt([2, 1, 0]); clickAt([2 + 2 * c45, 1 + 2 * c45, 0]); clickAt([2 - 2 * c45, 1 + 2 * c45, 0]);
  const A = T.axes();
  ok(model.axesM && V.dist(A.o, [2, 1, 0]) < 1e-9 && V.dist(A.x, [c45, c45, 0]) < 1e-9 && V.dist(A.y, [-c45, c45, 0]) < 1e-9 && V.dist(A.z, [0, 0, 1]) < 1e-9 && T.name === 'select', `Place axes: three clicks put the origin at (2, 1) with red turned 45° (${A.x.map((x) => x.toFixed(3))})`);
  // a rectangle typed 2,1 on the ground now runs along the turned red and green
  T.set('rect'); clickAt([2, 1, 0]); moveTo([2.5, 2.5, 0]); T.value('2,1');
  const pts = [...model.root.verts.values()];
  ok(pts.some((p) => V.dist(p, [2 + 2 * c45, 1 + 2 * c45, 0]) < 1e-9) && pts.some((p) => V.dist(p, [2 - c45, 1 + c45, 0]) < 1e-9), 'a rectangle typed 2,1 from the origin runs 2 m along the new red and 1 m along the new green');
  // the origin snap moved with the axes
  const { infer } = await import(path.join(APP, 'infer.js'));
  const q = at([2, 1, 0]);
  const r = infer(sceneOf(new Model()), cam, q[0], q[1], { axes: A, ...T.groundOpts() });
  ok(r.kind === 'origin' && V.dist(r.p, [2, 1, 0]) < 1e-9, `the origin snap is at the axes' origin (${r.kind})`);
  // saved in the file; undo
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(back.axesM && V.dist([back.axesM[12], back.axesM[13], back.axesM[14]], [2, 1, 0]) < 1e-12, 'saved in the file');
  const bad = JSON.parse(JSON.stringify(model.toJSON())); bad.axes[0] = 5;
  const b2 = new Model(); b2.load(bad);
  ok(b2.axesM === null, 'a file with axes that are not a proper frame opens with the model\'s own axes');
  // align to a face: an upright face facing −green (the front of a box)
  const m2 = new Model();
  m2.change('box', (m) => { M.addPolygon(m.root, [[0, 0, 0], [3, 0, 0], [3, 2, 0], [0, 2, 0]], [0, 0, 1]); M.pushPull(m.root, [...m.root.faces.keys()][0], 1); });
  const front = [...m2.root.faces].find(([, f]) => V.dist(M.faceNormal(m2.root, f), [0, -1, 0]) < 1e-9);
  const loop = front[1].loops[0].map((v) => m2.root.verts.get(v));
  let bi = 0; for (let i = 1; i < loop.length; i++) if (V.dist(loop[i], loop[(i + 1) % loop.length]) > V.dist(loop[bi], loop[(bi + 1) % loop.length])) bi = i;
  m2.change('ax', (m) => m.setAxes(loop[bi], V.sub(loop[(bi + 1) % loop.length], loop[bi]), V.cross([0, -1, 0], V.sub(loop[(bi + 1) % loop.length], loop[bi]))));
  const F = m2.axesFrame([]);
  ok(V.dist([F[8], F[9], F[10]], [0, -1, 0]) < 1e-9 && Math.abs(Math.abs(F[0]) - 1) < 1e-9, 'aligned to the front face: blue points out of it, red along its 3 m edge');
  // inside a group, the group's own axes; reset
  const g = m2.change('g', (m) => m.makeGroup(m.root, [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'group'));
  ok(m2.axesFrame([g]).every((v, i) => Math.abs(v - m2.context([g]).m[i]) < 1e-12), 'inside an open group its own axes are used');
  m2.change('r', (m) => m.resetAxes());
  ok(m2.axesM === null && !('axes' in m2.toJSON()), 'Reset axes: back to the model\'s own, and nothing extra in the file');
  let msg = '';
  try { m2.setAxes([0, 0, 0], [1, 0, 0], [2, 0, 0]); } catch (err) { msg = err.message; }
  ok(/must not lie on one line/.test(msg), 'red and green on one line are refused: ' + msg);
}

section('solid checker: why it is not a solid, and fixing the simple cases (0.4 M21)');
{
  const boxDef = () => { const m = new Model(); m.change('b', (mm) => { M.addPolygon(mm.root, [[0, 0, 0], [2, 0, 0], [2, 2, 0], [0, 2, 0]], [0, 0, 1]); M.pushPull(mm.root, [...mm.root.faces.keys()][0], 2); }); return m; };
  const vol = (d) => M.solidInfo(d).volume;
  let m = boxDef();
  let p = M.solidProblems(m.root);
  ok(!p.holes.length && !p.extra.length && !p.inner.length && !p.stray.length && !p.flipped.length && close(vol(m.root), 8, 1e-9), 'a pushed box has no problems (8 m³)');
  // a missing face: 4 rim edges; Fix closes it
  const top = [...m.root.faces].find(([, f]) => M.faceNormal(m.root, f)[2] > 0.9)[0];
  m.root.faces.delete(top);
  p = M.solidProblems(m.root);
  ok(p.holes.length === 4 && !M.solidInfo(m.root).closed, `top face erased: 4 edges border the hole (${p.holes.length})`);
  let r = M.fixSolid(m.root);
  ok(r.holes === 1 && M.solidInfo(m.root).closed && close(vol(m.root), 8, 1e-9), `Fix closes the flat hole with a face facing out (${JSON.stringify(r)}, ${vol(m.root)})`);
  // one face turned the wrong way
  m = boxDef();
  const side = [...m.root.faces.keys()][2];
  M.reverseFaces(m.root, [side]);
  p = M.solidProblems(m.root);
  ok(p.flipped.length === 1 && p.flipped[0] === side, 'a face turned the other way is found (the one, not its five neighbours)');
  r = M.fixSolid(m.root);
  ok(r.flipped === 1 && !M.solidProblems(m.root).flipped.length && close(vol(m.root), 8, 1e-9), 'Fix turns it back');
  // the whole box inside out
  m = boxDef();
  M.reverseFaces(m.root, [...m.root.faces.keys()]);
  ok(close(M.solidInfo(m.root).volume, -8, 1e-9) && M.solidProblems(m.root).flipped.length === 6, 'a box inside out: all 6 faces need turning (its volume reads −8)');
  M.fixSolid(m.root);
  ok(close(vol(m.root), 8, 1e-9), 'Fix turns it right way out (+8)');
  // a stray edge
  m = boxDef();
  M.addEdge(m.root, [3, 3, 0], [4, 3, 0]);
  p = M.solidProblems(m.root);
  ok(p.stray.length === 1, 'a loose edge beside it is a stray edge');
  r = M.fixSolid(m.root);
  ok(r.stray === 1 && m.root.edges.size === 12, 'Fix removes it');
  // a wall inside the box: its edges have three faces, it is an inner face
  m = boxDef();
  M.addPolygon(m.root, [[1, 0, 0], [1, 2, 0], [1, 2, 2], [1, 0, 2]], [1, 0, 0]);
  p = M.solidProblems(m.root);
  ok(p.inner.length === 1 && p.extra.length === 4 && !M.solidInfo(m.root).closed, `a wall inside the box: 1 inner face, 4 edges with three faces (${p.inner.length}, ${p.extra.length})`);
  r = M.fixSolid(m.root);
  ok(r.inner === 1 && M.solidInfo(m.root).closed && close(vol(m.root), 8, 1e-9), 'Fix removes the inner face: a solid again');
}

section('outliner: move a group into another, keeping its place (0.4 M22)');
{
  const model = new Model();
  const mk = (x) => model.change('b', (m) => { M.addPolygon(m.root, [[x, 0, 0], [x + 1, 0, 0], [x + 1, 1, 0], [x, 1, 0]], [0, 0, 1]); const f = [...m.root.faces.keys()].at(-1); M.pushPull(m.root, f, 1); return m.makeGroup(m.root, [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'group'); });
  const a = mk(0), b = mk(3);
  // b turned and moved, so keeping the world place needs its inverse
  model.change('turn', (m) => { const i = m.root.insts.get(b); i.m = V.mmul(V.translation([0.5, 2, 0]), V.mmul(i.m, V.rotation([0, 0, 1], Math.PI / 6, [3.5, 0.5, 0]))); });
  const bbA = model.bbox(model.def(model.root.insts.get(a).def), model.root.insts.get(a).m);
  model.change('tag', (m) => { m.root.insts.get(a).color = '#2e9d57'; });
  const nid = model.change('mv', (m) => m.moveInto([], a, [b]));
  const bi = model.root.insts.get(b), inner = model.def(bi.def), ai = inner.insts.get(nid);
  const bbA2 = model.bbox(model.def(ai.def), V.mmul(bi.m, ai.m));
  ok(!model.root.insts.has(a) && ai && V.dist(bbA.min, bbA2.min) < 1e-9 && V.dist(bbA.max, bbA2.max) < 1e-9 && ai.color === '#2e9d57', 'a group dragged onto another goes inside it, stays where it was, and keeps its colour');
  let msg = '';
  try { model.moveInto([], b, [b]); } catch (err) { msg = err.message; }
  ok(/cannot go inside itself/.test(msg), 'onto itself: refused');
  msg = '';
  try { model.moveInto([b], nid, [b, nid]); } catch (err) { msg = err.message; }
  ok(/cannot go inside itself/.test(msg), 'into a group inside itself: refused');
  const back = model.change('out', (m) => m.moveInto([b], nid, []));
  const bbA3 = model.bbox(model.def(model.root.insts.get(back).def), model.root.insts.get(back).m);
  ok(V.dist(bbA.min, bbA3.min) < 1e-9 && inner.insts.size === 0, 'and back out to the top level, still in the same place');
}

section('scenes remember what is hidden (0.4 M23)');
{
  const model = new Model();
  const mk = (x) => model.change('b', (m) => { M.addPolygon(m.root, [[x, 0, 0], [x + 1, 0, 0], [x + 1, 1, 0], [x, 1, 0]], [0, 0, 1]); M.pushPull(m.root, [...m.root.faces.keys()].at(-1), 1); return m.makeGroup(m.root, [...m.root.faces.keys()].map((id) => ({ t: 'f', id })), 'group'); });
  const a = mk(0), b = mk(3);
  model.change('tags', (m) => { m.addTag('Roof'); m.setTag(m.root, [b], 'Roof'); });
  const sec = model.change('s', (m) => m.addSection([0, 0.5, 0], [0, -1, 0]));
  // scene 1: everything shown, no cut; scene 2: a hidden, Roof hidden, cut on
  model.change('v', (m) => { m.activeSection = null; });
  const v1 = model.captureVis();
  model.change('v', (m) => { m.root.insts.get(a).hidden = true; m.setTagHidden('Roof', true); m.activeSection = sec; });
  const v2 = model.captureVis();
  ok(v2.insts.length === 1 && v2.insts[0][0] === a && v2.tags.join() === 'Roof' && v2.section === sec && !v1.insts.length && v1.section === null, 'a scene captures the hidden group, the hidden tag and the active cut');
  const sc = M.cleanScene({ name: 'Cut', cam: { eye: [1, -5, 3], target: [0, 0, 0] }, vis: v2 });
  ok(sc.vis && sc.vis.tags[0] === 'Roof' && sc.vis.section === sec, 'cleanScene keeps it');
  const undoN = model.undoStack.length;
  model.applyVis(v1);
  ok(!model.root.insts.get(a).hidden && !model.tag('Roof').hidden && model.activeCut() === null && model.undoStack.length === undoN, 'going to scene 1 shows everything again, with no undo step');
  model.applyVis(sc.vis);
  ok(model.root.insts.get(a).hidden && model.tag('Roof').hidden && model.activeCut()?.id === sec, 'going to scene 2 hides them again and cuts');
  model.change('scenes', (m) => { m.scenes = [M.cleanScene({ name: 'All', cam: { eye: [1, -5, 3], target: [0, 0, 0] }, vis: v1 }), sc]; });
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok(back.scenes[1].vis?.insts[0][0] === a && back.scenes[0].vis.insts.length === 0, 'saved in the file with the scenes');
  const old = M.cleanScene({ name: 'Old', cam: { eye: [1, -5, 3], target: [0, 0, 0] } });
  ok(!('vis' in old), 'a scene from an older file has no visibility, so going to it leaves what is hidden alone');
}

section('3D text (0.4 M11)');
{
  const T3 = await import(path.join(APP, 'text3d.js'));
  const S = await import(path.join(APP, 'solids.js'));
  const { pathToFileURL } = await import('node:url');
  const MF = await S.manifold(() => import(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href));
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const flat = model.change('t', (m) => T3.textDef(MF, m, 'Hello O', { height: 1 }));
  const withHoles = [...flat.faces.values()].filter((f) => f.loops.length > 1).length;
  const bb = model.bbox(flat);
  ok(flat.kind === 'component' && flat.faces.size === 6 && withHoles === 3 && [...flat.faces.values()].every((f) => M.faceNormal(flat, f)[2] > 0.99), `flat: one face per letter piece (H e l l o O = 6), the e, o and O keep their holes (3), all facing up`);
  ok(close(bb.max[1] - bb.min[1], 1 + 0.14, 1e-6) && close(bb.min[0], -0.07, 1e-6) && bb.max[2] === 0, `capital height 1 plus the pen width; on the ground (${bb.max[1] - bb.min[1]})`);
  const solid = model.change('t', (m) => T3.textDef(MF, m, 'Hi', { height: 0.5, depth: 0.05 }));
  const si = M.solidInfo(solid);
  ok(si.closed && si.volume > 0 && close(model.bbox(solid).max[2], 0.05, 1e-6), `depth 0.05: closed solid letters, 5 cm deep (${si.volume.toFixed(5)} m³)`);
  const two = model.change('t', (m) => T3.textDef(MF, m, 'AB\nCD', { height: 1 })), tb = model.bbox(two);
  ok(two.faces.size === 4 && close(tb.max[1] - tb.min[1], 1.6 + 1 + 0.14, 1e-6), `two lines: 4 letters, the second line 1.6 × the height below (${(tb.max[1] - tb.min[1]).toFixed(3)} tall)`);
  // placed on the front face of a box with the Place tool's face alignment: it stands on the wall, reading left to right
  model.change('box', (m) => { M.addPolygon(m.root, [[0, 0, 0], [4, 0, 0], [4, 3, 0], [0, 3, 0]], [0, 0, 1]); M.pushPull(m.root, [...m.root.faces.keys()].find((id) => M.faceNormal(m.root, m.root.faces.get(id))[2] !== 0 && m.root.faces.get(id).loops[0].length === 4), 2); });
  const cam = new Camera(); cam.setSize(1000, 800); cam.eye = [2, -8, 1.5]; cam.target = [2, 0, 1]; cam.clip(30);
  let cache = null;
  const host = { model, cam, path: [], sel: [], units: 'm', msgs: [], scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
    setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {}, openContext() {}, closeContext() {} };
  const T = new Tools(host);
  T.set('place', { defId: flat.id, align: true });
  const q = cam.project([1, 0, 1]);
  T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: 1000 });
  const inst = [...model.root.insts.values()].at(-1);
  ok(inst && inst.def === flat.id && V.dist([inst.m[0], inst.m[1], inst.m[2]], [1, 0, 0]) < 1e-9 && V.dist([inst.m[4], inst.m[5], inst.m[6]], [0, 0, 1]) < 1e-9 && V.dist([inst.m[8], inst.m[9], inst.m[10]], [0, -1, 0]) < 1e-9 && Math.abs(inst.m[13]) < 1e-9, 'placed on the front wall: it stands on it (up = blue), reads along red, faces out of the wall');
}

section('PDF of the view (0.4 M13)');
{
  const { viewPdf } = await import(path.join(APP, 'viewpdf.js'));
  // an 8 × 6 blue JPEG
  const jpeg = Uint8Array.from(Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAABgf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCXAUUYf//Z', 'base64'));
  const pdf = viewPdf({ jpeg, width: 8, height: 6, caption: 'House (v2) — 13 Oct 2026, meters', paper: 'a4' });
  const txt = Buffer.from(pdf).toString('latin1');
  const xref = +txt.match(/startxref\n(\d+)/)[1];
  const offs = [...txt.slice(xref).matchAll(/^(\d{10}) 00000 n /gm)].map((m) => +m[1]);
  ok(txt.startsWith('%PDF-1.4') && txt.slice(xref, xref + 4) === 'xref' && offs.length === 6 && offs.every((o, k) => txt.startsWith((k + 1) + ' 0 obj\n', o)), 'the PDF is well formed: header, 6 objects at the offsets its xref table gives');
  ok(/\/MediaBox \[0 0 842 595\]/.test(txt) && /\(House \\\(v2\\\) \? 13 Oct 2026, meters\) Tj/.test(txt), 'A4 landscape; the caption is escaped, and a character Helvetica lacks prints as ?');
  const pl = viewPdf({ jpeg, width: 8, height: 6, paper: 'letter' });
  ok(/\/MediaBox \[0 0 792 612\]/.test(Buffer.from(pl).toString('latin1')), 'Letter landscape for feet and inches');
  const f = path.join(ROOT, 'tmp/shots/modelcraft/view-test.pdf');
  fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, pdf);
  let info = '';
  try { info = (await import('node:child_process')).execFileSync('pdfinfo', [f], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (err) { info = err.code === 'ENOENT' ? null : String(err.stderr || err.message); }
  if (info === null) console.log('  note pdfinfo missing: the PDF is checked by structure only');
  else ok(/Pages:\s+1/.test(info) && /Page size:\s+842 x 595 pts/.test(info), 'poppler\'s pdfinfo reads it: 1 page, 842 × 595 pt');
}

section('terrain: from contours, a grid, the Sculpt brush (0.4 M24)');
{
  const TR = await import(path.join(APP, 'terrain.js'));
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  // Delaunay: a square and its centre → 4 triangles, all counter-clockwise; no point inside any circumcircle
  const sq = [[0, 0], [2, 0], [2, 2], [0, 2], [1, 1]];
  const dt = TR.delaunay(sq);
  ok(dt.length === 4 && dt.every(([a, b, c]) => (sq[b][0] - sq[a][0]) * (sq[c][1] - sq[a][1]) - (sq[b][1] - sq[a][1]) * (sq[c][0] - sq[a][0]) > 0), `Delaunay: a square with its centre makes 4 counter-clockwise triangles (${dt.length})`);
  const rnd = Array.from({ length: 400 }, (_, i) => [Math.sin(i * 12.9898) * 43758.5453 % 50, Math.cos(i * 78.233) * 12345.678 % 50]);
  const tr = TR.delaunay(rnd);
  const empty = tr.every(([a, b, c]) => { const [ax, ay] = rnd[a], [bx, by] = rnd[b], [cx, cy] = rnd[c]; return rnd.every(([px, py], k) => { if (k === a || k === b || k === c) return true; const m = [[ax - px, ay - py, (ax - px) ** 2 + (ay - py) ** 2], [bx - px, by - py, (bx - px) ** 2 + (by - py) ** 2], [cx - px, cy - py, (cx - px) ** 2 + (cy - py) ** 2]]; const det = m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]); return det <= 1e-6; }); });
  ok(empty, `400 scattered points: no point lies inside any triangle's circumcircle (${tr.length} triangles)`);
  // three contour rings at 0, 1 and 2 m
  const model = new Model(); model.units = 'm';
  const eids = model.change('c', (m) => { const ids = []; for (const [r, z] of [[10, 0], [7, 1], [4, 2]]) { const pts = Array.from({ length: 24 }, (_, i) => [r * Math.cos((i * Math.PI) / 12), r * Math.sin((i * Math.PI) / 12), z]); for (let i = 0; i < 24; i++) ids.push(...M.addEdge(m.root, pts[i], pts[(i + 1) % 24], { faces: false })); } return ids; });
  const td = model.change('t', (m) => TR.terrainFromContours(m, m.root, eids));
  const tb = model.bbox(td);
  ok(td.faces.size === 2 * 72 - 2 - 24 && [...td.faces.values()].every((f) => f.loops[0].length === 3) && close(tb.min[2], 0) && close(tb.max[2], 2), `from 3 contour rings (72 points): ${td.faces.size} triangles (2n − 2 − the 24 on the rim), from 0 to 2 m`);
  ok([...td.edges.values()].filter((e) => !e.soft).length === 24, 'only the 24 rim edges stay hard: the ground shades smooth');
  // a 10 × 6 m grid, 1 m cells, then the brush
  const g = model.change('g', (m) => TR.terrainGrid(m, { width: 10, depth: 6, spacing: 1 }));
  const gi = model.change('p', (m) => m.place(m.root, g.id, V.translation([20, 0, 0])));
  ok(g.faces.size === 120 && g.verts.size === 77, 'a 10 × 6 m grid of 1 m cells: 120 triangles, 77 points');
  const cam = new Camera(); cam.setSize(1000, 800); cam.eye = [25, -12, 14]; cam.target = [25, 3, 0]; cam.clip(60);
  let cache = null;
  const host = { model, cam, path: [gi], sel: [], units: 'm', msgs: [], scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { host.ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {}, openContext(p) { host.path = p; }, closeContext() { host.path = []; } };
  const T = new Tools(host);
  T.set('sculpt');
  T.value('2');
  const q = cam.project([25, 3, 0]);
  // a click, then 1.5 typed: the point under it rises 1.5 m, ones 1 m away by half the cosine ease, 2 m away not at all
  T.move({ x: q[0], y: q[1] }); T.down({ x: q[0], y: q[1] }); T.up({ x: q[0], y: q[1] });
  T.value('1.5');
  const zAt = (x, y) => [...model.def(g.id).verts.values()].find((p) => close(p[0], x) && close(p[1], y))?.[2];
  ok(close(zAt(5, 3), 1.5, 1e-9) && close(zAt(6, 3), 0.75, 1e-9) && close(zAt(7, 3), 0, 1e-9) && /Raised by 1.5 m under a 2 m brush/.test(host.msgs.at(-1)), `click, type 1.5: the centre rises 1.5 m, 1 m out 0.75 m, 2 m out stays (${zAt(5, 3)}, ${zAt(6, 3)}, ${zAt(7, 3)})`);
  ok([...model.def(g.id).faces.values()].every((f) => f.loops[0].length === 3), 'every face is still a flat triangle');
  // a drag upward raises live, and one undo step puts it back
  const before = zAt(4, 2), n0 = model.undoStack.length;
  const q2 = cam.project([24, 2, zAt(4, 2)]);
  T.move({ x: q2[0], y: q2[1] }); T.down({ x: q2[0], y: q2[1] }); T.move({ x: q2[0], y: q2[1] - 40, dragging: true }); T.up({ x: q2[0], y: q2[1] - 40, dragged: true });
  ok(zAt(4, 2) > before + 0.05 && model.undoStack.length === n0 + 1, `dragging 40 px up raises the ground there (${before.toFixed(3)} → ${zAt(4, 2).toFixed(3)}), in one undo step`);
  model.undo();
  ok(close(zAt(4, 2), before, 1e-12), 'undo puts it back');
  // not on terrain: a quad face is refused
  const m2 = new Model(); m2.change('q', (m) => { M.addPolygon(m.root, [[0, 0, 0], [4, 0, 0], [4, 4, 0], [0, 4, 0]], [0, 0, 1]); });
  const h2 = { ...host, model: m2, path: [], msgs: [] };
  h2.scene = () => sceneOf(m2); h2.print = (x) => h2.msgs.push(x);
  const T2 = new Tools(h2); T2.set('sculpt');
  cam.target = [2, 2, 0]; cam.eye = [2, -8, 10];
  const q4 = cam.project([2, 2, 0]);
  T2.move({ x: q4[0], y: q4[1] }); T2.down({ x: q4[0], y: q4[1] });
  ok(/terrain made of triangles/.test(h2.msgs.at(-1) || ''), 'a plain quad face is not terrain: it says so and moves nothing');
}

section('starter component library (0.4 M25)');
{
  const ST = await import(path.join(APP, 'starter.js'));
  const model = new Model();
  const bad = [], sizes = {};
  for (const it of ST.STARTER) {
    let c = null;
    try { c = model.change('s', (m) => { const d = ST.buildStarter(m, it.id, 'x'); d.starter = it.id; return d; }); } catch (err) { bad.push(it.id + ': ' + err.message); continue; }
    const parts = [...c.insts.values()].map((i) => model.def(i.def));
    for (const d of parts) { const si = M.solidInfo(d); if (!si.closed || !(si.volume > 0)) bad.push(it.id + '/' + d.name); }
    const bb = model.bbox(c);
    sizes[it.id] = bb.max.map((x, k) => +(x - bb.min[k]).toFixed(2));
    if (!it.wall && it.id !== 'wall_cabinet' && Math.abs(bb.min[2]) > 1e-9) bad.push(it.id + ' does not stand on z = 0');   // the wall cabinet hangs at 1.45 m above where you click
  }
  ok(ST.STARTER.length >= 30 && !bad.length, `${ST.STARTER.length} starter things, every part a closed solid facing out, furniture standing on the ground` + (bad.length ? ': ' + bad.join(', ') : ''));
  ok(sizes.door.join() === '0.9,2.1,0.13' && sizes.table.join() === '1.6,0.9,0.76' && sizes.person[2] === 1.75 && sizes.stair[2] === 2.7, `real sizes: door 0.9 × 2.1 m, table 1.6 × 0.9 × 0.76 m, a person 1.75 m, a stair 2.7 m high (15 risers of 18 cm)`);
  ok(ST.STARTER.every((s) => I18N.has('app.starter.' + s.id) && I18N.has('app.starter.cat.' + s.cat)), 'every thing and category has its name in lang/en.json');
  // the marker survives undo and the file, so picking it again reuses the component
  const chair = [...model.defs.values()].find((d) => d.starter === 'chair');
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  model.undo(); model.redo();
  ok(back.def(chair.id).starter === 'chair' && [...model.defs.values()].some((d) => d.starter === 'chair'), 'which starter thing a component is, is kept in the file and through undo');
}

section('components that stretch or repeat their parts (0.4 M26)');
{
  const DY = await import(path.join(APP, 'dynamic.js'));
  const ST = await import(path.join(APP, 'starter.js'));
  const model = new Model();
  const tbl = model.change('t', (m) => ST.buildStarter(m, 'table', 'Table'));
  const ti = model.change('p', (m) => m.place(m.root, tbl.id, V.ident()));
  // stretched to 2.4 × 1 m: the top grows, the legs keep their 6 cm and stay 5 cm from the ends
  const big = model.change('s', (m) => { const d = DY.stretchDef(m, tbl, [2.4, 1.0, 0.76], 'Table'); m.root.insts.get(ti).def = d.id; m.purge(); return d; });
  const parts = DY.partsOf(model, big), top = parts.find((p) => p.box.max[2] > 0.75), legs = parts.filter((p) => p.box.max[2] <= 0.72 + 1e-9);
  ok(top && close(top.box.max[0] - top.box.min[0], 2.4, 1e-9) && close(top.box.max[1] - top.box.min[1], 1.0, 1e-9), 'Stretch to 2.4 × 1 m: the top is 2.4 × 1 m');
  ok(legs.length === 4 && legs.every((p) => close(p.box.max[0] - p.box.min[0], 0.06, 1e-9)) && legs.some((p) => close(p.box.min[0], 0.05, 1e-9)) && legs.some((p) => close(p.box.max[0], 2.35, 1e-9)), 'the legs keep their 6 cm and stay 5 cm in from each end');
  ok(model.def(tbl.id) && big.dyn?.src === tbl.id && big.insts.size === tbl.insts.size, 'the original stays (unplaced) so the copy can be stretched again; the parts are shared definitions');
  // stretched again, from the original (not from the stretched copy)
  const again = model.change('s2', (m) => { const d = DY.stretchDef(m, m.def(big.dyn.src), [1.2, 0.8, 0.76], 'Table'); m.root.insts.get(ti).def = d.id; m.purge(); return d; });
  ok(close(model.bbox(again).max[0] - model.bbox(again).min[0], 1.2, 1e-9) && !model.defs.has(big.id), 'stretched again to 1.2 m from the original; the 2.4 m copy, now unused, is gone');
  // a bookshelf 3 m tall: its shelves spread out in proportion; a stair 3.6 m high: its steps scale
  const sh = model.change('b', (m) => ST.buildStarter(m, 'bookshelf', 'Shelf'));
  const tall = model.change('s', (m) => DY.stretchDef(m, sh, [0.8, 0.3, 3.0], 'Tall'));
  const zs = DY.partsOf(model, tall).filter((p) => close(p.box.max[2] - p.box.min[2], 0.02, 1e-9)).map((p) => p.box.min[2]).sort((x, y) => x - y);
  ok(zs.length === 6 && close(zs[5], 2.94, 0.02) && zs.every((z, i) => !i || z - zs[i - 1] > 0.5), `a 3 m bookshelf: 6 shelves spread over the height (${zs.map((z) => z.toFixed(2)).join(' ')})`);
  const st = model.change('st', (m) => ST.buildStarter(m, 'stair', 'Stair'));
  const st2 = model.change('s', (m) => DY.stretchDef(m, st, [1.2, 5.4, 3.6], 'Stair'));
  const sb = model.bbox(st2);
  ok(close(sb.max[1], 5.4, 1e-9) && close(sb.max[2], 3.6, 1e-9) && close(sb.max[0], 1.2, 1e-9), 'a stair stretched to 1.2 × 5.4 m, 3.6 m high: its steps scale with it');
  // repeat: a 4 m railing whose posts repeat every metre, stretched to 10 m
  const rail = model.change('r', (m) => {
    const c = m.newDef('component', 'Railing');
    const bar = m.newDef('group', 'Bar'); M.addPolygon(bar, [[0, 0, 0.95], [4, 0, 0.95], [4, 0.05, 0.95], [0, 0.05, 0.95]]); M.pushPull(bar, [...bar.faces.keys()][0], 0.05); m.place(c, bar.id, V.ident());
    const post = m.newDef('group', 'Post'); M.addPolygon(post, [[0, 0, 0], [0.05, 0, 0], [0.05, 0.05, 0], [0, 0.05, 0]]); M.pushPull(post, [...post.faces.keys()][0], 0.95);
    const pi = m.place(c, post.id, V.ident()); c.insts.get(pi).rule = { x: 'repeat', sx: 1 };
    m.place(c, post.id, V.translation([3.95, 0, 0]));
    return c;
  });
  const r10 = model.change('s', (m) => DY.stretchDef(m, rail, [10, 0.05, 1.0], 'Railing'));
  const posts = DY.partsOf(model, r10).filter((p) => close(p.box.max[2], 0.95, 1e-9) && close(p.box.min[2], 0, 1e-9));
  ok(posts.length === 11, `a 4 m railing stretched to 10 m: the posts repeat every metre (10 + the end post = ${posts.length})`);
  const back = new Model(); back.load(JSON.parse(JSON.stringify(model.toJSON())));
  ok([...back.def(rail.id).insts.values()].some((i) => i.rule?.x === 'repeat' && i.rule.sx === 1) && back.def(r10.id).dyn?.src === rail.id, 'the rules and what a copy was stretched from are kept in the file');
}

section('view cube with this build\'s camera');
{
  const VCm = await import(path.join(APP, 'viewcube.js'));
  const VA = await import(path.join(APP, 'viewcube-camera.js'));
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const cam = new Camera();
  const o = VA.cameraCubeOptions(cam, {});
  const bad = VCm.TARGETS.filter((k) => { const w = VCm.viewForTarget(k, o.getView()); o.setView(w, { animate: false }); const g = o.getView(); return VCm.viewAngle(g, w) > 1e-3; });
  ok(bad.length === 0, 'all 26 view cube targets set the camera exactly' + (bad.length ? ': ' + bad.join(', ') : ''));
  const inc = fs.readFileSync(path.join(APP, 'settings.inc'), 'utf8');
  ok(['cube', 'axes', 'none'].every((v) => inc.includes(`name="mcCorner" value="${v}"`)), 'settings.inc offers Corner indicator: View cube | Axis icon | None');
}
{
  const { run } = await import(path.join(ROOT, 'tools/modelcraft-test/formats.mjs'));
  await run({ ok, close, section, APP, OUT, ROOT, VERBOSE });
}
section('SketchUp import (0.5, cc-skp + skp-import.js)');
{
  const { importSKP } = await import(path.join(APP, 'skp-import.js'));
  // a hand-made cc-skp model (inches, Z up): a component painted red and blue by its two placements, a group, a loose
  // edge, a soft edge, tags (a hidden one; a group on a shown one), and things SketchUp would not show (a hidden placement,
  // a face on a hidden tag, a hidden loose edge)
  const sq = (s, z = 0) => [[[0, 0, z], [s, 0, z], [s, s, z], [0, s, z]]];
  const tr = (x) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, 0, 0, 1];
  const skp = {
    format: 'skp', container: 'legacy', version: '6.0.1', major: 6,
    materials: [{ name: 'Red', color: [255, 0, 0], alpha: 1, texture: null }, { name: 'Blue', color: [0, 0, 255], alpha: 1, texture: null },
      { name: 'Wood', color: null, alpha: 1, texture: { name: 'wood.jpg' } }],
    layers: [{ name: 'Layer0', visible: true, color: null }, { name: 'Off', visible: false, color: null }, { name: 'Doors', visible: true, color: null }],
    defs: [
      { name: 'Model', kind: 'model', faces: [{ loops: sq(100), front: 2, back: null, layer: 0 }, { loops: sq(50, 10), front: null, back: null, layer: 1 }],
        edges: [{ a: [0, 0, 0], b: [0, 0, 100], layer: 0, soft: false, smooth: false, hidden: false }, { a: [0, 0, 0], b: [0, 100, 100], layer: 0, soft: false, smooth: false, hidden: true }], soft: [],
        insts: [{ def: 1, m: tr(10), name: 'C1', layer: 0, hidden: false, material: 0 }, { def: 1, m: tr(20), name: '', layer: 0, hidden: false, material: 1 },
          { def: 1, m: tr(30), name: '', layer: 0, hidden: true, material: 0 }, { def: 2, m: tr(0), name: 'G', layer: 2, hidden: false, material: null },
          { def: 2, m: tr(40), name: 'OffBoard', layer: 1, hidden: false, material: null }] },
      { name: 'Cap', kind: 'component', faces: [{ loops: sq(1), front: null, back: null, layer: 0 }, { loops: [[[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]]], front: null, back: null, layer: 0 }],
        edges: [], soft: [[[0, 0, 0], [1, 0, 0]]], insts: [] },
      { name: 'Board', kind: 'group', faces: [{ loops: sq(2), front: 0, back: null, layer: 2 }], edges: [], soft: [], insts: [] },
    ],
    root: 0, thumbnail: null, units: { length: 'in' }, notes: [], counts: {},
  };
  const m = new M.Model();
  const r = m.change('Import SketchUp model', (mm) => { const x = importSKP(mm, skp, 'PIMETA'); mm.place(mm.root, x.def.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); return x; });
  const top = r.def;
  ok(top.kind === 'group' && top.name === 'PIMETA', 'the import is one group named after the file');
  const caps = [...m.defs.values()].filter((d) => d.name === 'Cap');
  ok(caps.length === 1 && caps[0].kind === 'component', 'a component painted two colours stays one component: ' + caps.length);
  const capInsts = [...top.insts.values()].filter((i) => i.def === caps[0]?.id);
  ok(capInsts.length === 3 && [...caps[0].faces.values()].every((f) => f.color == null), 'its faces keep no colour of their own; 3 placements');
  const paints = capInsts.map((i) => i.color).sort();
  ok(JSON.stringify(paints) === JSON.stringify(['#0000ff', '#ff0000', '#ff0000']), 'the material on each placement becomes its paint: ' + paints);
  const shownCap = (c) => { let n = 0; m.walkShown((d, mm, p, col) => { if (d === caps[0] && col === c) n++; }); return n; };
  ok(shownCap('#ff0000') === 1 && shownCap('#0000ff') === 1, 'on screen: one red copy, one blue (the hidden one not drawn)');
  const hid = capInsts.filter((i) => i.hidden);
  ok(hid.length === 1 && close(hid[0].m[12], 30 * 0.0254), 'the hidden placement comes in hidden');
  ok(m.tag('Off') && m.tag('Off').hidden === true && m.tag('Doors') && !m.tag('Doors').hidden, 'tags come over, hidden as in SketchUp: ' + JSON.stringify(m.tags));
  const g = [...top.insts.values()].find((i) => i.name === 'G');
  ok(g && g.tag === 'Doors', 'a group on a tag carries it');
  const tf = [...top.faces.values()];
  ok(tf.length === 2 && tf.filter((f) => f.hidden).length === 1, 'the face on a hidden tag comes in hidden');
  ok([...top.edges.values()].filter((e) => e.hidden).length === 1, 'a hidden loose edge comes in hidden');
  ok(r.report.hidden === 3, 'hidden things are counted (a placement, a face, an edge): ' + r.report.hidden);
  ok(r.report.tags === 2 && r.report.untagged === 1, 'report: 2 tags added, 1 face on a shown tag left untagged: ' + r.report.tags + '/' + r.report.untagged);
  ok(tf.find((f) => !f.hidden && f.color == null), 'a textured material with no colour gives no colour');
  ok(r.report.textured === 1, 'textured faces are counted: ' + r.report.textured);
  const p = [...top.verts.values()].reduce((a, v) => Math.max(a, v[0]), 0);
  ok(close(p, 100 * 0.0254), 'inches become meters: ' + p);
  const c1 = [...top.insts.values()].find((i) => i.name === 'C1');
  ok(c1 && close(c1.m[12], 10 * 0.0254), 'a placement\'s move becomes meters, named as in the file');
  ok(caps.every((d) => [...d.edges.values()].some((e) => e.soft)), 'soft edges from the file stay soft');
  ok([...top.edges.values()].some((e) => { const a = top.verts.get(e.a), b = top.verts.get(e.b); return !e.hidden && close(Math.abs(a[2] - b[2]), 100 * 0.0254); }), 'a loose edge is kept');
  ok(r.report.components === 1 && r.report.groups === 1, 'report counts components and groups');
  const board = [...m.defs.values()].find((d) => d.name === 'Board');
  let boards = 0; m.walkShown((d) => { if (d === board) boards++; });
  ok([...top.insts.values()].find((i) => i.name === 'OffBoard')?.tag === 'Off' && boards === 1, 'a group on a hidden tag carries it and is not drawn: ' + boards);
  const m2 = new M.Model();
  m2.tags.push({ name: 'Doors', hidden: true });
  const r2 = m2.change('again', (mm) => importSKP(mm, skp, 'again'));
  ok(m2.tags.filter((x) => x.name.toLowerCase() === 'doors').length === 1 && m2.tag('Doors').hidden === true && r2.report.tags === 1, 'a tag the model already has is reused as it is');
  const json = JSON.parse(JSON.stringify(m.toJSON()));
  const back = new M.Model(); back.load(json);
  ok(back.tag('Off')?.hidden === true && [...back.defs.values()].some((d) => [...d.insts.values()].some((i) => i.tag === 'Doors')), 'tags and hidden survive save and reopen');
  m.undo();
  ok(!m.tag('Off') && !m.tag('Doors'), 'one undo takes the import and its tags away');
  let msg = '';
  try { importSKP(new M.Model(), { format: 'skp', defs: [], root: 0 }); } catch (err) { msg = err.message; }
  ok(msg.length > 0, 'a model with nothing in it is refused: ' + msg);

  // the real reader on the corpus (outside git; skipped when missing)
  const CORPUS = '/var/www/CADCRAFT/testfiles/skp-corpus';
  const READER = path.join(APP, 'skp/read.js');
  if (!fs.existsSync(READER) || !fs.existsSync(CORPUS)) console.log('  (skipped: ' + (fs.existsSync(READER) ? CORPUS : READER) + ' missing)');
  else {
    const { readSkp } = await import(READER);
    const files = [];
    const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const f = path.join(d, e.name); if (e.isDirectory()) walk(f); else if (/\.skp$/i.test(e.name)) files.push(f); } };
    walk(CORPUS);
    for (const f of files) {
      const name = path.relative(CORPUS, f);
      try {
        const s = await readSkp(new Uint8Array(fs.readFileSync(f)));
        const mm = new M.Model();
        const x = mm.change('import', (q) => { const y = importSKP(q, s, path.basename(f, '.skp')); q.place(q.root, y.def.id, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); return y; });
        ok(x.report.faces > 0 || x.def.edges.size > 0 || x.def.insts.size > 0, `${name} (v${s.version}, ${s.container}) imports: ${x.report.faces} faces, ${x.report.components} components, ${x.report.groups} groups`);
      } catch (err) {
        const empty = /nothing to show/.test(err.message);
        ok(err.name === 'SkpError' || empty, `${name}: ${err.code || ''} ${err.message}`);
      }
    }
  }
}
{
  const { run } = await import(path.join(ROOT, 'tools/modelcraft-test/print3d.mjs'));
  await run({ ok, close, section, APP, OUT, ROOT });
}
section('3D printing from a model: print-mc.js (0.5 SG.4)');
{
  const P = await import(path.join(APP, 'print3d.js'));
  const { printTriangles } = await import(path.join(APP, 'print-mc.js'));
  // a 20 mm cube made with the tools, as a component placed four times: painted red, painted blue, mirrored, hidden
  const m = new Model();
  const ids = m.change('cubes', (mm) => {
    addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 0.02, 0.02));
    pushPull(mm.root, [...mm.root.faces.keys()][0], 0.02);
    const a = mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: [...mm.root.faces.keys()][0] }]), 'component', 'Cube');
    const d = mm.root.insts.get(a).def;
    mm.root.insts.get(a).color = '#ff0000';
    const b = mm.place(mm.root, d, V.translation([0.05, 0, 0])); mm.root.insts.get(b).color = '#0000ff';
    const c = mm.place(mm.root, d, [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.15, 0, 0, 1]);
    const h = mm.place(mm.root, d, V.translation([0.3, 0, 0])); mm.root.insts.get(h).hidden = true;
    return { a, b, c, h };
  });
  const all = printTriangles(m);
  const r = P.printCheck(P.meshFromTriangles(all.tris));
  ok(all.what === 'all' && r.ok && r.shells === 3, 'everything shown: 3 cubes (the hidden copy left out), ready — ' + r.problems.map((x) => x.kind));
  ok(close(r.volume, 3 * 8000, 1e-6), 'meters become millimeters: 3 × 8000 mm³ = ' + r.volume);
  ok(r.inverted === 0, 'the mirrored copy is not inside out');
  ok(close(r.size[0], 150, 1e-6) && close(r.size[2], 20, 1e-6) && close(r.bedArea, 3 * 400, 1e-6), 'size 150 × 20 × 20 mm, standing on three 400 mm² bases');
  const cols = new Set(all.tris.map((x) => x.color));
  ok(cols.has('#ff0000') && cols.has('#0000ff') && cols.has(null), 'colors as the view shows them: ' + [...cols]);
  const one = printTriangles(m, { sel: [{ t: 'i', id: ids.b }] });
  const r1 = P.printCheck(P.meshFromTriangles(one.tris));
  ok(one.what === 'selection' && r1.ok && close(r1.volume, 8000, 1e-6) && one.tris.every((x) => x.color === '#0000ff'), 'the selection only: one blue cube');
  m.change('tag', (mm) => { mm.tags.push({ name: 'Off', hidden: true }); mm.root.insts.get(ids.a).tag = 'Off'; });
  ok(P.printCheck(P.meshFromTriangles(printTriangles(m).tris)).shells === 2, 'a copy on a hidden tag is left out');
  ok(printTriangles(m, { sel: [{ t: 'i', id: ids.a }] }).tris.length === 0, 'a selected copy on a hidden tag prints nothing');
  // a face selected inside the open component: just that face (open edges)
  const cdef = m.root.insts.get(ids.b).def;
  const f0 = [...m.defs.get(cdef).faces.keys()][0];
  const rf = P.printCheck(P.meshFromTriangles(printTriangles(m, { path: [ids.b], sel: [{ t: 'f', id: f0 }] }).tris));
  ok(!rf.ok && rf.open === 4, 'one face selected inside the cube: 4 open edges');
  // a hole: erase the cube's top
  const m2 = new Model();
  m2.change('box', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 0.02, 0.02)); pushPull(mm.root, [...mm.root.faces.keys()][0], 0.02); });
  const top = [...m2.root.faces].find(([, f]) => faceNormal(m2.root, f)[2] > 0.99)[0];
  m2.change('hole', (mm) => { mm.root.faces.delete(top); });
  const r2 = P.printCheck(P.meshFromTriangles(printTriangles(m2).tris));
  ok(!r2.ok && r2.open === 4 && r2.problems[0].kind === 'open', 'a box with its top gone: 4 open edges');
  // the files round-trip the mesh the check saw
  const stl = P.stlBinary(r.mesh), mf = P.threeMF(r.mesh, { name: 'cubes', app: 'ModelCraft' });
  ok(new DataView(stl.buffer).getUint32(80, true) === r.mesh.indices.length / 3 && mf[0] === 0x50 && mf[1] === 0x4b, 'STL and 3MF of the checked mesh');
}
section('beginner 3D and print prep: firstmodel.js + printprep.js (0.6 LC.21)');
{
  const F = await import(path.join(APP, 'firstmodel.js'));
  const PP = await import(path.join(APP, 'printprep.js'));
  const P = await import(path.join(APP, 'print3d.js'));
  const { printTriangles } = await import(path.join(APP, 'print-mc.js'));
  const check = (m, choice = {}, bed = null) => P.printCheck(P.meshFromTriangles(printTriangles(m, choice).tris), { bed });
  const box = (mm, x, w, d, h) => {
    const had = new Set(mm.root.faces.keys());
    addPolygon(mm.root, rectPts([x, 0, 0], [1, 0, 0], [0, 1, 0], w, d));
    const f = [...mm.root.faces.keys()].find((k) => !had.has(k));
    pushPull(mm.root, f, h);
    return f;
  };
  const group = (mm, f, kind = 'group', name) => mm.makeGroup(mm.root, M.connected(mm.root, [{ t: 'f', id: f }]), kind, name);

  // the guided first model: each step read from the model, Undo steps back
  const g = new Model();
  ok(F.guideStep(g) === 0, 'guide: an empty model is at step 1 (draw a rectangle)');
  g.change('r', (mm) => addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 0.04, 0.03)));
  ok(F.guideStep(g) === 1, 'guide: a rectangle on the ground → step 2 (pull it up)');
  g.change('p', (mm) => pushPull(mm.root, [...mm.root.faces.keys()][0], 0.02));
  const sh = F.shells(g.root);
  ok(sh.length === 1 && sh[0].closed && close(sh[0].volume, 0.04 * 0.03 * 0.02, 1e-12), 'guide: pulled up 20 mm → one closed piece of 40 × 30 × 20 mm = ' + sh[0].volume + ' m³');
  ok(F.guideStep(g) === 2, 'guide: a loose box → step 3 (make it one object)');
  g.change('g', (mm) => group(mm, [...mm.root.faces.keys()][0], 'group', 'Box'));
  ok(F.guideStep(g) === 3 && F.guideStep(g, { ready: false }) === 3, 'guide: grouped → step 4 (check it for 3D printing)');
  ok(F.guideStep(g, { ready: true }) === 4, 'guide: grouped and checked ready → done');
  g.undo();
  ok(F.guideStep(g) === 2, 'guide: Undo the group → back to step 3');
  g.redo();
  ok(F.guideStep(g) === 3, 'guide: Redo → step 4 again');
  // other ways count too: a face grouped before it is pulled up is not a solid yet; the starter library's chair is
  const g2 = new Model();
  g2.change('r', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1)); group(mm, [...mm.root.faces.keys()][0]); });
  ok(F.guideStep(g2) === 1, 'guide: a flat face in a group → still step 2 (no solid yet)');
  const { buildStarter } = await import(path.join(APP, 'starter.js'));
  const g3 = new Model();
  g3.change('chair', (mm) => { const d = buildStarter(mm, 'chair', 'Chair'); mm.place(mm.root, d.id, V.ident()); });
  ok(F.guideStep(g3) === 3, 'guide: a placed starter chair (solid parts in a component) → step 4');
  const g4 = new Model();
  g4.change('h', (mm) => { const f = box(mm, 0, 0.02, 0.02, 0.02); group(mm, f); });
  g4.change('hide', (mm) => { for (const i of mm.root.insts.values()) i.hidden = true; });
  ok(F.guideStep(g4) === 0, 'guide: a hidden group does not count (what shows is what counts)');
  const two = new Model();
  two.change('2', (mm) => { box(mm, 0, 0.01, 0.01, 0.01); box(mm, 0.05, 0.02, 0.01, 0.01); });
  const s2 = F.shells(two.root);
  ok(s2.length === 2 && s2.every((s) => s.closed) && close(s2[0].volume + s2[1].volume, 1e-6 + 2e-6, 1e-12), 'shells: two separate boxes → two closed pieces, 1 + 2 cm³');

  // plain words: most serious first, the verdict counts
  const rep0 = { problems: [{ kind: 'flipped', n: 2 }, { kind: 'open', n: 4 }], warnings: [{ kind: 'overhang', share: 0.2, angle: 45 }, { kind: 'tiny' }] };
  const pr0 = PP.plainReport(rep0);
  ok(pr0.verdict === 'fix' && pr0.fix === 2 && pr0.look === 2 && pr0.rows.map((r) => r.kind).join() === 'open,flipped,tiny,overhang', 'plain: holes before turned faces, wrong units before overhangs — ' + pr0.rows.map((r) => r.kind));
  ok(PP.plainReport({ problems: [], warnings: [{ kind: 'nobase' }] }).verdict === 'look' && PP.plainReport({ problems: [], warnings: [] }).verdict === 'ready', 'plain: warnings only → "look"; nothing → "ready"');
  const pe = PP.plainReport({ problems: [{ kind: 'empty', n: 0, at: [] }], warnings: [] });
  ok(pe.verdict === 'empty' && pe.fix === 0, 'plain: nothing shown → "empty", no count of things to fix');

  // the bed: sizes only, from Settings
  ok(JSON.stringify(PP.bedSize('220')) === '[220,220,250]' && PP.bedSize('') === null && PP.bedSize('999') === null && PP.bedSize('__proto__') === null && PP.bedSize('constructor') === null, 'bed: 220 → 220 × 220 × 250 mm; not set / unknown / prototype names → none');
  const big = new Model();
  big.change('b', (mm) => group(mm, box(mm, 0, 0.2, 0.05, 0.05), 'group', 'Long'));
  const rb = check(big, {}, PP.bedSize('180'));
  ok(rb.ok && PP.plainReport(rb).rows.some((r) => r.kind === 'bed') && !PP.plainReport(check(big, {}, PP.bedSize('220'))).rows.some((r) => r.kind === 'bed'), 'bed: a 200 mm bar is too long for 180 mm, fits 220 mm');

  // the parts with problems, and one Fix for all of them
  const holed = new Model();
  const ids = holed.change('c', (mm) => {
    const a = group(mm, box(mm, 0, 0.02, 0.02, 0.02), 'component', 'Cube');
    const b = mm.place(mm.root, mm.root.insts.get(a).def, V.translation([0.05, 0, 0]));
    const ok2 = group(mm, box(mm, 0.1, 0.02, 0.02, 0.02), 'group', 'Good');
    return { a, b, ok2 };
  });
  const cube = holed.defs.get(holed.root.insts.get(ids.a).def);
  const topF = [...cube.faces].find(([, f]) => faceNormal(cube, f)[2] > 0.99)[0];
  holed.change('hole', (mm) => { mm.def(cube.id).faces.delete(topF); });
  const rh = check(holed);
  const parts = PP.partsToFix(holed, {}, rh);
  ok(!rh.ok && parts.length === 1 && parts[0].name === 'Cube' && parts[0].holes === 4 && parts[0].fixable && parts[0].path.join() === String(ids.a), 'parts: a component with its top gone, placed twice → one row "Cube", 4 hole edges, at its first placement; the good group is not listed');
  const undoBefore = holed.undoStack.length;
  const fx = PP.fixParts(holed, parts, 'fix');
  ok(fx.holes === 1 && holed.undoStack.length === undoBefore + 1, 'fix: one flat hole closed, as one undo step');
  const rh2 = check(holed);
  ok(rh2.ok && rh2.shells === 3 && PP.partsToFix(holed, {}, rh2).length === 0, 'fix: then ready, both copies closed (3 cubes) and no parts left');
  holed.undo();
  ok(!check(holed).ok, 'fix: Undo brings the hole back');
  // a face turned the wrong way, loose in the model (no group)
  const turned = new Model();
  turned.change('t', (mm) => { const f = box(mm, 0, 0.02, 0.02, 0.02); M.reverseFaces(mm.root, [f]); });
  const rt = check(turned), pt = PP.partsToFix(turned, {}, rt);
  ok(!rt.ok && pt.length === 1 && pt[0].defId === 'root' && pt[0].name === null && pt[0].flipped === 1, 'parts: one turned face on loose faces → the "Faces not in a group" row, 1 turned');
  PP.fixParts(turned, pt, 'fix');
  ok(check(turned).ok, 'fix: the turned face turned back → ready');
  // a hollow part (a 40 mm box with a 20 mm group inside it, turned to face in) is ready and lists nothing
  const hollow = new Model();
  hollow.change('h', (mm) => {
    group(mm, box(mm, 0, 0.04, 0.04, 0.04), 'group', 'Outer');
    const inner = group(mm, box(mm, 0.1, 0.02, 0.02, 0.02), 'group', 'Hollow');
    const d = mm.def(mm.root.insts.get(inner).def);
    M.reverseFaces(d, [...d.faces.keys()]);
    mm.root.insts.get(inner).m = V.translation([0.01, 0.01, 0.01]);   // a group's origin is its own lowest corner
  });
  const rhw = check(hollow);
  ok(rhw.ok && close(rhw.volume, 64000 - 8000, 1e-6) && PP.partsToFix(hollow, {}, rhw).length === 0, 'parts: a hollow box is ready (56 cm³) and nothing is listed to fix');
  // only what is selected: the broken cube unselected → nothing to fix in the selection
  holed.redo();
  ok(PP.partsToFix(holed, { sel: [{ t: 'i', id: ids.ok2 }] }, check(holed, { sel: [{ t: 'i', id: ids.ok2 }] })).length === 0, 'parts: follow the selection (the good group alone has nothing to fix)');

  // every word the dialog and the card use exists
  const EN = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
  const kinds = ['empty', 'open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect', 'overlap', 'touch', 'tiny', 'bed', 'nobase', 'overhang', 'degenerate', 'unchecked'];
  const missing = [...kinds.filter((k) => k !== 'empty').map((k) => 'app.prep.why.' + k), ...kinds.map((k) => 'app.prep.todo.' + k),
    ...[...F.GUIDE_STEPS, 'done'].flatMap((k) => ['app.guide.' + k + '.h', 'app.guide.' + k + '.body']), ...F.GUIDE_STEPS.map((k) => 'app.guide.' + k + '.short'),
    ...Object.keys(PP.BEDS).map((k) => 'set.printbed.' + k), 'set.printbed.none', 'ui.hint.guide', 'ui.views.guide'].filter((k) => !(k in EN));
  ok(!missing.length, 'every print prep, guide and bed string is in en.json' + (missing.length ? ': missing ' + missing : ''));
}
section('push/pull to a face\'s level (0.5 DR.4, Discord)');
{
  // tangentsoft's model (2026-10-14): a box, a circle on top pulled up into a post, its top offset inward, the inner face
  // pushed in a little; then "push that innermost face down to meet the box level", by pointing at the box's top
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, TIPS } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  const model = new Model(); model.units = 'm';
  const cam = new Camera(); cam.setSize(1000, 800);
  let cache = null, tt = 0, ov = null;
  const host = {
    model, cam, path: [], sel: [], units: 'm', msgs: [],
    scene() { if (!cache || cache.version !== host.model.version || cache.model !== host.model) { cache = sceneOf(host.model); cache.model = host.model; } return cache; },
    setSel(x) { host.sel = x; }, overlay(o) { ov = o; }, tip() {}, vcb() {}, print(m) { host.msgs.push(m); }, changed() {},
    openContext(p) { host.path = p; host.sel = []; }, closeContext() { host.path = host.path.slice(0, -1); },
  };
  const T = new Tools(host);
  const at = (p) => cam.project(p);
  const moveTo = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); };
  const clickAt = (p) => { moveTo(p); const q = at(p); T.click(q[0], q[1], { time: (tt += 1000) }); };
  const d = () => model.root;
  const upAt = (z) => [...d().faces].filter(([, f]) => close(faceNormal(d(), f)[2], 1, 1e-9) && close(d().verts.get(f.loops[0][0])[2], z, 1e-9)).map(([id, f]) => ({ id, f, area: faceArea(d(), f) }));
  const flat = () => [...d().faces.values()].filter((f) => faceArea(d(), f) < 1e-9).length;
  cam.eye = [2, -2, 9]; cam.target = [1, 1, 2]; cam.clip(20);
  T.set('rect'); clickAt([0, 0, 0]); moveTo([2, 2, 0]); T.value('2m,2m');
  T.set('push'); clickAt([1, 1, 0]); T.value('2');
  T.set('circle'); clickAt([1, 1, 2]); moveTo([1.5, 1, 2]); T.value('0.5');
  T.set('push'); clickAt([1, 1, 2]); moveTo([1, 1, 2.5]); T.value('1');
  T.set('offset'); clickAt([1, 1, 3]); moveTo([1, 1.2, 3]); T.value('0.1');
  const inner = upAt(3).find((x) => x.f.loops.length === 1), ring = upAt(3).find((x) => x.f.loops.length === 2);
  const top0 = 0.5 * 24 * 0.5 * 0.5 * Math.sin(2 * Math.PI / 24);
  ok(inner && ring && inner.area < top0 - 0.2 && close(inner.area + ring.area, top0, 1e-9), 'the post\'s top offset 0.1 inward: an inner face inside a ring');
  model.change('recess', (m) => pushPull(m.root, inner.id, -0.3));
  const v0 = solidInfo(d()).volume, ringA = ring.area, innerA = inner.area;
  ok(upAt(2.7).length === 1, 'the inner face pushed in 0.3 (a recess in the post)');
  // point at the box's top beside the post: the inner face lands level with it
  T.set('push'); clickAt([1, 1, 2.7]);
  moveTo([0.25, 0.25, 2]);
  ok(ov && ov.tip === TIPS.face && ov.marker && ov.marker.kind === 'face', `pushing, the box's top under the cursor is marked "On face" (${ov && ov.tip})`);
  clickAt([0.25, 0.25, 2]);
  let s = solidInfo(d());
  const low = upAt(2).filter((x) => x.f.loops.length === 1);
  ok(low.length === 1 && close(low[0].area, innerA, 1e-9), 'the inner face is level with the box\'s top (z = 2 exactly)');
  ok(s.closed && close(s.volume, v0 - 0.7 * innerA, 1e-9) && flat() === 0, `a closed solid, no zero-height sides left over (${s.volume.toFixed(6)} m³)`);
  ok(close(s.volume, 8 + ringA, 1e-9), 'box + a tube of the ring\'s area, 1 m tall');
  // a face at an angle says nothing about depth: the push follows the cursor; the face being pushed hides what is behind it
  T.set('push'); clickAt([1, 1, 2]);
  moveTo([1, 0, 1]);
  ok(ov && ov.tip !== TIPS.face && !(ov.marker && ov.marker.kind === 'face'), 'the box\'s front (not parallel) is not a level to push to');
  T.escape();
  T.set('push'); clickAt([0.25, 0.25, 2]);
  moveTo([0.25, 0.25, 2]);
  ok(ov && ov.tip !== TIPS.face && close(Math.abs(T.tool.d || 0), 0, 1e-6), 'over the pushed face itself, the box\'s bottom behind it is not snapped to');
  T.escape();
  ok(close(solidInfo(d()).volume, s.volume, 1e-12), 'Esc leaves the model as it was');
  // pull it back up, pointing at the ring around it (looking down the post): flush again, the sides gone, the faces as they were after Offset
  cam.eye = [1.05, 0.9, 12]; cam.target = [1, 1, 2]; cam.clip(20);
  T.set('push'); clickAt([1, 1, 2]);
  moveTo([1, 1.45, 3]);
  ok(ov && ov.marker && close(ov.marker.p[2], 3, 1e-9) && close(T.tool.d, 1, 1e-9), `pulling, the cursor on the ring (a narrow face: its corners snap first) sets the level (${ov && ov.marker && ov.marker.kind})`);
  clickAt([1, 1.45, 3]);
  s = solidInfo(d());
  const back = upAt(3);
  ok(s.closed && flat() === 0 && back.length === 2 && close(s.volume, 8 + (ringA + innerA), 1e-9), `flush with the ring again: closed, no zero-height sides, the ring and the inner face (${back.length} faces on top)`);
  // typed distances are unchanged: a typed 0.5 goes 0.5 even with a face under the cursor
  T.set('push'); clickAt([1, 1, 3]); moveTo([0.25, 0.25, 2]); T.value('0.5');
  ok(upAt(2.5).length === 1, 'typed 0.5 while pointing at the box\'s top: pushed 0.5, not to the box');
}
section('a circle from a pushed rectangle\'s face (0.6 DC.26, Discord)');
{
  // tangentsoft (2026-10-13, then on 0.3): "draw a rectangle and Push it out into a long shape. Grab the circle tool and try to
  // draw one out from the midpoint of one of the faces" (a USB-A grip, 16 × 8 mm, the circle on its narrow end). 0.3 gave a
  // midpoint no face, so the circle lay flat on the ground; 0.4 U.2 fixed it. Pinned here with the reporter's own steps, in
  // millimetres, loose, as a closed group and inside the opened group, from every face's centre and every edge midpoint.
  const { Camera } = await import(path.join(APP, 'camera.js'));
  const { sceneOf, faceCenter, onFace } = await import(path.join(APP, 'infer.js'));
  const { Tools } = await import(path.join(APP, 'tools.js'));
  for (const grp of ['loose', 'a closed group', 'inside the group']) {
    const model = new Model(); model.units = 'mm';
    const cam = new Camera(); cam.setSize(1200, 800);
    let cache = null, tt = 0;
    const host = { model, cam, path: [], sel: [], units: 'mm', scene() { if (!cache || cache.version !== model.version) cache = sceneOf(model); return cache; },
      setSel(x) { host.sel = x; }, overlay() {}, tip() {}, vcb() {}, print() {}, changed() {}, openContext(p) { host.path = p; }, closeContext() { host.path = []; } };
    const T = new Tools(host);
    const at = (p) => cam.project(p);
    const clickAt = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: (tt += 1000) }); };
    cam.eye = [0.08, -0.06, 0.07]; cam.target = [0.008, 0.004, 0.02]; cam.clip(0.3);
    T.set('rect'); clickAt([0, 0, 0]); { const q = at([0.016, 0.008, 0]); T.move({ x: q[0], y: q[1] }); } T.value('16,8');
    T.set('push'); clickAt([0.008, 0.004, 0]); { const q = at([0.008, 0.004, 0.04]); T.move({ x: q[0], y: q[1] }); } T.value('40');
    ok(close(solidInfo(model.root).volume, 0.016 * 0.008 * 0.04, 1e-12), `the grip: 16 × 8 mm pushed 40 mm (${grp})`);
    if (grp !== 'loose') model.change('g', (m) => m.makeGroup(m.root, M.connected(m.root, [{ t: 'f', id: [...m.root.faces.keys()][0] }]), 'group'));
    if (grp === 'inside the group') host.path = [[...model.root.insts.keys()][0]];
    const sc = host.scene();
    let tried = 0, good = 0, cut = 0, cutTried = 0;
    const bad = [];
    for (const f of sc.faces) {
      const c = faceCenter(f);
      if (V.dot(f.n, V.sub(cam.eye, c)) <= 0) continue;   // faces turned away from the eye
      const targets = [['center', c], ...sc.edges.map((e) => V.mul(V.add(e.a, e.b), 0.5)).filter((p) => onFace(f, p)).map((p) => ['mid', p])];
      for (const [kind, p] of targets) {
        // the pointer 2 px inside the face from the point (an edge's midpoint is on two faces: the one under the pointer decides)
        const q = at(p), k = at(c), kd = Math.hypot(k[0] - q[0], k[1] - q[1]) || 1;
        const x = q[0] + (k[0] - q[0]) / kd * 2, y = q[1] + (k[1] - q[1]) / kd * 2;
        T.set('circle'); T.move({ x, y });
        const r = T.tool.cur;
        tried++;
        const snapped = r.kind === kind && V.dist(r.p, p) < 1e-9 && r.face && V.dot(r.face.n, f.n) > 1 - 1e-9;
        if (!snapped) { bad.push(kind + ' ' + f.n.map((v) => +v.toFixed(2)) + ' → ' + r.kind); continue; }
        // draw it: a 2 mm circle, in that face's plane
        const D = () => (host.path.length ? model.def(model.root.insts.get(host.path[0]).def) : model.root);
        const vb = new Set(D().verts.keys()), fb = D().faces.size;
        T.click(x, y, { time: (tt += 1000) });
        T.value('2');
        const mw = host.path.length ? model.root.insts.get(host.path[0]).m : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        const pts = [...D().verts].filter(([id]) => !vb.has(id)).map(([, v]) => V.apply(mw, v));
        if (pts.length >= 24 && pts.every((v) => Math.abs(V.dot(f.n, v) - f.plane.d) < 1e-9)) good++;
        else bad.push(kind + ' ' + f.n.map((v) => +v.toFixed(2)) + ' drawn off the face');
        if (grp !== 'a closed group') { cutTried++; if (D().faces.size > fb) cut++; }
        model.undo(); cache = null;
      }
    }
    ok(tried >= 12 && good === tried, `${grp}: the circle snaps to every visible face's centre and edge midpoints and lies in that face (${good}/${tried})${bad.length ? ' ' + bad.join('; ') : ''}`);
    if (cutTried) ok(cut === cutTried, `${grp}: …and cuts the face it starts on (${cut}/${cutTried})`);
  }
}

section('a scene\'s camera can be locked (0.6 DC.64, Discord)');
{
  // tangentsoft (2026-10-16): "save a given view as a named camera … lock the camera, so I can get a consistent render as a
  // drawing evolves". The file gains one optional scene key, `lock: true`; nothing else changes.
  const cam = { eye: [1, -5, 3], target: [0, 0, 0] };
  const locked = M.cleanScene({ name: 'Front', cam, lock: true });
  ok(locked.lock === true && locked.cam.eye.join() === '1,-5,3', 'cleanScene keeps lock: true with the camera');
  for (const bad of [false, 'true', 1, null, {}, []]) ok(!('lock' in M.cleanScene({ name: 'x', cam, lock: bad })), `an untrusted lock of ${JSON.stringify(bad)} is not a lock (no key written)`);
  const plain = M.cleanScene({ name: 'Plain', cam });
  ok(!('lock' in plain), 'an unlocked scene carries no lock key, so it saves exactly as before');
  const model = new Model();
  model.change('scenes', (m) => { m.scenes = [plain, locked]; });
  const j = JSON.parse(JSON.stringify(model.toJSON()));
  ok(j.scenes[1].lock === true && !('lock' in j.scenes[0]), 'saved in the file: lock on the locked scene only');
  const back = new Model(); back.load(j);
  ok(back.scenes[1].lock === true && !back.scenes[0].lock && back.scenes[1].cam.eye.join() === '1,-5,3', 'and read back');
  // an older file (no lock key anywhere) opens unchanged and saves its scenes byte for byte the same
  const oldFile = { ...j, scenes: j.scenes.map(({ lock, ...s }) => s) };
  const o = new Model(); o.load(JSON.parse(JSON.stringify(oldFile)));
  ok(o.scenes.every((s) => !s.lock) && JSON.stringify(o.toJSON().scenes) === JSON.stringify(oldFile.scenes), 'an older file opens unlocked and its scenes save byte for byte as they were');
  // locking is an undo step
  const n0 = model.undoStack.length;
  model.change('Unlock scene camera', (m) => { m.scenes = m.scenes.map((s, k) => (k === 1 ? M.cleanScene({ ...s, lock: false }) : s)); });
  ok(!model.scenes[1].lock && model.undoStack.length === n0 + 1, 'unlocking is one undo step');
  model.undo();
  ok(model.scenes[1].lock === true, 'undo locks it again');
}

section('push/pull flush keeps the outline (0.6 DR.4, the owner\'s choice)');
{
  // Decision (2026-10-17): when an inner face lands flush with the face around it, KEEP its outline (two faces in one plane,
  // the outline's edges stay) rather than merging back into one face. Pinned three ways: a recess pushed back out by a typed
  // distance, a bump pushed back down, and the Push/pull tool snapping to the level of the face around it.
  const mkBox = () => {
    const m = new Model(); m.units = 'm';
    m.change('box', (mm) => { addPolygon(mm.root, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 4, 3)); pushPull(mm.root, [...mm.root.faces.keys()][0], 2); });
    m.change('rect on top', (mm) => addPolygon(mm.root, rectPts([1, 1, 2], [1, 0, 0], [0, 1, 0], 2, 1), [0, 0, 1]));
    return m;
  };
  const tops = (d) => [...d.faces].filter(([, f]) => close(faceNormal(d, f)[2], 1, 1e-9) && close(d.verts.get(f.loops[0][0])[2], 2, 1e-9));
  const outline = (d) => [...d.edges.values()].filter((e) => { const a = d.verts.get(e.a), b = d.verts.get(e.b); return close(a[2], 2, 1e-9) && close(b[2], 2, 1e-9) && [a, b].every((p) => p[0] > 0.5 && p[0] < 3.5 && p[1] > 0.5 && p[1] < 2.5); }).length;
  const zeroFaces = (d) => [...d.faces.values()].filter((f) => faceArea(d, f) < 1e-9).length;
  const check = (m, label) => {
    const d = m.root, s = solidInfo(d), tp = tops(d);
    ok(s.closed && close(s.volume, 24, 1e-9), `${label}: a closed box of 24 m³ again (${s.volume?.toFixed(6)})`);
    ok(tp.length === 2 && tp.some(([, f]) => f.loops.length === 2) && tp.some(([, f]) => close(faceArea(d, f), 2, 1e-9)), `${label}: the outline is kept: the inner 2 m² face and the top around it, both at z = 2 (${tp.length} faces on top)`);
    ok(outline(d) === 4 && zeroFaces(d) === 0 && d.faces.size === 7, `${label}: its four edges stay, no zero-height sides (${outline(d)} edges, ${d.faces.size} faces)`);
  };
  for (const [dir, label] of [[-0.5, 'pushed in 0.5, then out 0.5'], [0.5, 'pulled out 0.5, then back 0.5']]) {
    const m = mkBox();
    const f0 = tops(m.root).find(([, f]) => f.loops.length === 1)[0];
    const r1 = m.change('one way', (mm) => pushPull(mm.root, f0, dir));
    ok(r1.ok && !close(solidInfo(m.root).volume, 24, 1e-6), `${label}: the first push changes the box (${solidInfo(m.root).volume.toFixed(3)} m³)`);
    m.change('back', (mm) => pushPull(mm.root, r1.face ?? f0, -dir));
    check(m, label);
    if (dir < 0) {
      // the help's way back to one face: erase the outline's edges, the two faces heal into one
      const ids = [...m.root.edges].filter(([, e]) => { const a = m.root.verts.get(e.a), b = m.root.verts.get(e.b); return close(a[2], 2, 1e-9) && close(b[2], 2, 1e-9) && [a, b].every((p) => p[0] > 0.5 && p[0] < 3.5 && p[1] > 0.5 && p[1] < 2.5); }).map(([id]) => id);
      m.change('erase outline', (mm) => eraseEdges(mm.root, ids));
      const tp = tops(m.root);
      ok(tp.length === 1 && tp[0][1].loops.length === 1 && close(faceArea(m.root, tp[0][1]), 12, 1e-9) && solidInfo(m.root).closed, `erasing the kept outline merges the top back into one 12 m² face (${tp.length} face)`);
    }
  }
  {
    // with the tool: the recess pulled back, the cursor on the top around it ("On face" sets the level)
    const { Camera } = await import(path.join(APP, 'camera.js'));
    const { sceneOf } = await import(path.join(APP, 'infer.js'));
    const { Tools } = await import(path.join(APP, 'tools.js'));
    const m = mkBox();
    const f0 = tops(m.root).find(([, f]) => f.loops.length === 1)[0];
    m.change('recess', (mm) => pushPull(mm.root, f0, -0.5));
    const cam = new Camera(); cam.setSize(1000, 800);
    let cache = null, tt = 0;
    const host = { model: m, cam, path: [], sel: [], units: 'm', scene() { if (!cache || cache.version !== m.version) cache = sceneOf(m); return cache; }, setSel() {}, overlay() {}, tip() {}, vcb() {}, print() {}, changed() {}, openContext() {}, closeContext() {} };
    const T = new Tools(host);
    cam.eye = [2.1, 1.4, 12]; cam.target = [2, 1.5, 1.5]; cam.clip(20);
    const at = (p) => cam.project(p);
    const clickAt = (p) => { const q = at(p); T.move({ x: q[0], y: q[1] }); T.click(q[0], q[1], { time: (tt += 1000) }); };
    T.set('push'); clickAt([2, 1.5, 1.5]); { const q = at([0.5, 0.5, 2]); T.move({ x: q[0], y: q[1] }); }
    ok(close(T.tool.d, 0.5, 1e-9), `the tool: pointing at the top around the recess sets the level (${T.tool.d})`);
    clickAt([0.5, 0.5, 2]);
    check(m, 'the tool, pulled up to the top around it');
  }
}

section('language files (0.4 G)');
{
  // error paths that once called t() under a local variable named t (they threw "t is not a function")
  const IOm = await import(path.join(APP, 'io.js'));
  const m = new M.Model();
  let msg = '';
  try { m.setEdgeLength([], 999999, 1); } catch (err) { msg = err.message; }
  ok(msg === 'the edge is gone', 'a length for an edge that is gone says so: ' + msg);
  msg = '';
  const gl = new TextEncoder().encode(JSON.stringify({ asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0] }], nodes: [{ translation: ['x', 0, 0] }] }));
  try { IOm.importGLTF(m, gl); } catch (err) { msg = err.message; }
  ok(/node transform is not a number/.test(msg), 'a glTF node with a broken transform says so: ' + msg);
}
ok(!fs.existsSync(LANG_FILE) || I18N.missing().length === 0, 'every word the tests reached has a key in lang/en.json' + (I18N.missing().length ? ': missing ' + I18N.missing().slice(0, 8).join(', ') : ''));

console.log(`\n${pass} passed, ${fail} failed`);
if (!KEEP) fs.rmSync(OUT, { recursive: true, force: true });
process.exit(fail ? 1 : 0);
void execFileSync; void createRequire; void transformSel; void copySel;
