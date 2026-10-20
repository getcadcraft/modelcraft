#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
// Synthetic geometry only. Run with npm test -- --only test-modelcraft-modifiers.mjs.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public_html/assets/apps/modelcraft/dev');
const { init } = await import(path.join(APP, 'i18n.js'));
init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { Model, addPolygon, rectPts, pushPull, copySel } = await import(path.join(APP, 'model.js'));
const { ident, translation } = await import(path.join(APP, 'vec.js'));
const { modifierDef, setModifiers } = await import(path.join(APP, 'modifiers.js'));
const { exportOBJ } = await import(path.join(APP, 'io.js'));
const { sceneOf } = await import(path.join(APP, 'infer.js'));
const { stretchDef } = await import(path.join(APP, 'dynamic.js'));
const scale = { type: 'scale', factors: [2, 1, 1] };
const array = { type: 'array', count: 3, offset: [3, 0, 0] };
function fixture() {
  const m = new Model(), src = m.newDef('group', 'Box');
  addPolygon(src, rectPts([0, 0, 0], [1, 0, 0], [0, 1, 0], 1, 1));
  pushPull(src, [...src.faces.keys()][0], 1);
  const iid = m.place(m.root, src.id, translation([10, 0, 0]));
  return { m, src, iid };
}
function apply(f, ops) {
  return f.m.change('Modifiers', m => {
    const d = modifierDef(m, m.def(f.src.id), ops);
    m.root.insts.get(f.iid).def = d.id;
    return d;
  });
}
{
  const f = fixture(), { m, src, iid } = f;
  const before = JSON.stringify(m.toJSON().defs.find(d => d.id === src.id));
  const d = apply(f, [array, scale]);
  assert.equal(m.bbox(d).max[0], 14, 'Array then Scale scales spacing');
  assert.equal(m.bbox().max[0], 24, 'local-space stack keeps outer placement');
  assert.equal(sceneOf(m).insts.length, 3, 'viewport/picking scene sees all generated copies');
  const obj = exportOBJ(m), xs = obj.split('\n').filter(l => l.startsWith('v ')).map(l => Number(l.split(' ')[1]));
  assert.equal(Math.min(...xs), 10); assert.equal(Math.max(...xs), 24, 'OBJ exports evaluated world coordinates');
  assert.equal(d.verts.size, 0, 'result is placements, not duplicated geometry');
  assert.equal(JSON.stringify(m.toJSON().defs.find(d => d.id === src.id)), before, 'source unchanged');
  assert.equal(m.undoStack.length, 1);
  m.change('Reorder', m => setModifiers(m, m.def(d.id), [scale, array]));
  assert.equal(m.bbox(m.def(d.id)).max[0], 8, 'Scale then Array keeps spacing');
  m.undo(); assert.equal(m.bbox(m.def(d.id)).max[0], 14);
  m.redo(); assert.equal(m.bbox(m.def(d.id)).max[0], 8);
  m.change('Disable', m => setModifiers(m, m.def(d.id), [scale, { ...array, enabled: false }]));
  assert.equal(m.def(d.id).insts.size, 1);
  m.change('Remove', m => setModifiers(m, m.def(d.id), []));
  assert.equal(m.bbox(m.def(d.id)).max[0], 1);
  m.change('Source edit', m => m.setDefSize(src.id, 0, 4));
  assert.equal(m.bbox(m.def(d.id)).max[0], 4, 'source edits flow through without reevaluation');
  m.change('Purge', m => m.purge());
  assert.ok(m.def(src.id));
  const saved = JSON.parse(m.snapshot()), back = new Model(); back.load(saved); back.purge();
  assert.deepEqual(back.def(d.id).mods, m.def(d.id).mods);
  assert.equal(back.bbox().max[0], 14);
  const old = new Model(); old.load({ ...saved, defs: saved.defs.map(({ mods, ...rest }) => rest) });
  assert.deepEqual(old.bbox(), back.bbox(), 'ordinary placements display without recipe metadata');
  const copied = m.change('Copy', m => copySel(m.root, [{ t: 'i', id: iid }]))[0].id;
  assert.equal(m.root.insts.get(copied).def, d.id, 'copies share the recipe');
  const unique = m.change('Unique', m => m.makeUnique(m.root, copied));
  assert.equal(m.def(unique).mods.src, src.id);
  m.change('Change unique', m => setModifiers(m, m.def(unique), [scale]));
  assert.equal(m.def(d.id).mods.ops.length, 0, 'unique recipe edits are independent');
  assert.equal(m.bbox(m.def(unique)).max[0], 8);
  const clip = m.copyClip([], [{ t: 'i', id: copied }]), pasted = new Model();
  // Deliberately occupy source ids: paste must remap recipe references as well as placements.
  pasted.newDef('group', 'Existing');
  const ps = pasted.change('Paste', m => m.pasteClip([], clip, ident()));
  const pd = pasted.def(pasted.root.insts.get(ps.find(s => s.t === 'i').id).def);
  assert.notEqual(pd.mods.src, src.id);
  assert.ok(pasted.def(pd.mods.src));
  assert.equal(pasted.bbox(pd).max[0], 8);
  const again = new Model(); again.load(JSON.parse(pasted.snapshot()));
  assert.deepEqual(again.bbox(), pasted.bbox());
  console.log('pass: order, history, source edits, save/load, purge, copy, unique, cross-model paste');
}
{
  const f = fixture(), { m, src } = f, d = apply(f, [scale, array]);
  const bb = m.bbox(d), steps = m.undoStack.length;
  const copyIds = [...d.insts.keys()], v = [...src.verts.keys()][0];
  assert.throws(() => m.change('Resize array spacing', m => m.moveEnd(
    { path: [f.iid, copyIds[1]], v }, { path: [f.iid, copyIds[0]], v }, [1, 0, 0], 1)), /[Bb]ake/);
  const extra = m.newDef('group', 'Extra');
  const ei = m.place(m.root, extra.id, ident());
  assert.throws(() => m.change('Move into result', m => m.moveInto([], ei, [f.iid])), /[Bb]ake/);
  assert.throws(() => m.change('Explode', m => m.explode(m.root, f.iid)), /[Bb]ake/);
  assert.throws(() => m.change('Resize', m => m.setDefSize(d.id, 0, 12)), /[Bb]ake/);
  assert.throws(() => m.change('Stretch', m => stretchDef(m, m.def(d.id), [3, 3, 3], 'No')), /[Mm]odifier/);
  m.change('Bake', m => m.bakeModifiers(d.id));
  assert.equal(m.undoStack.length, steps + 1);
  assert.ok(!m.def(d.id).mods);
  assert.equal(m.def(d.id).insts.size, 0);
  assert.equal(m.def(d.id).faces.size, 18);
  assert.deepEqual(m.bbox(m.def(d.id)), bb);
  m.change('Edit source after bake', m => m.setDefSize(src.id, 0, 5));
  assert.deepEqual(m.bbox(m.def(d.id)), bb, 'baked geometry detached from source');
  m.undo(); m.undo(); assert.ok(m.def(d.id).mods);
  m.redo(); assert.ok(!m.def(d.id).mods);
  console.log('pass: explicit bake, geometry, detach, undo/redo, direct edit and stretch guards');
}
{
  const f = fixture(), { m, src } = f, d = apply(f, [scale, array]);
  const snap = m.snapshot(), steps = m.undoStack.length;
  for (const ops of [[{ ...scale, factors: [0, 1, 1] }], [{ ...array, count: 1.5 }], [{ ...array, count: 1001 }],
    [{ ...array, count: 100 }, { ...array, count: 100 }], [{ ...scale, factors: [Infinity, 1, 1] }], [{ type: 'bend' }]]) {
    assert.throws(() => m.change('Bad recipe', m => setModifiers(m, m.def(d.id), ops)));
    assert.equal(m.snapshot(), snap); assert.equal(m.undoStack.length, steps);
  }
  assert.throws(() => m.change('Nested recipe', m => modifierDef(m, m.def(d.id), [scale])));
  m.def(src.id).dyn = { src: src.id, size: [1, 1, 1] };
  assert.throws(() => modifierDef(m, m.def(src.id), [scale])); delete m.def(src.id).dyn;
  for (const alter of [j => { j.mods.src = 'd9999'; }, j => { j.mods.src = j.id; },
    j => { j.dyn = { src: src.id, size: [1, 1, 1] }; }, j => { j.mods.ops[0].factors = [0, 1, 1]; }]) {
    const j = JSON.parse(snap); alter(j.defs.find(x => x.id === d.id));
    assert.throws(() => new Model().load(j));
  }
  console.log('pass: invalid recipes roll back; bad source, incompatible dyn and invalid file metadata rejected');
}
console.log('Modifier tests passed.');
