/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool answers are read by the other program's script; what the person sees goes through t(). */
/**
 * link-mc.js — ModelCraft's side of the live .3dm link (0.9 SU.810b; lib/3dm-link, copied to ./3dm-link/ by tools/3dm-link/sync.mjs). DOM-free.
 * What a link brought is one group whose placement carries `link` (saved in the file): a push makes a new definition from the
 * file through the .3dm import and swaps it in under every placement of that link, so where the person put it, its tag and anything beside it stay.
 *
 *   applyLink(model, scene, { link, name, fold }) → { applied, created, instance, objects, meshes, faces, curves, notes, undo }
 *   linkedPlacements(model, link) → [{ def, id, inst }]
 *   modelLinkTools(app) → the tool definitions (agents.js)
 */
import { createLinkStore, linkTools } from './3dm-link/index.js';
import { import3dm, read3dmFile } from './io/3dm-import.js';
import { t } from './i18n.js';

const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

export function linkedPlacements(model, link) {
  const out = [];
  for (const def of model.defs.values()) for (const [id, inst] of def.insts) if (inst.link === link) out.push({ def, id, inst });
  return out;
}

export function applyLink(model, scene, { link, name, fold = false }) {
  const label = 'Assistant: update linked ' + name;
  const top = model.undoStack[model.undoStack.length - 1];
  const r = model.change(label, (m) => {
    const x = import3dm(m, scene, t('ccdm.app.linked', { name }));
    const had = linkedPlacements(m, link);
    let instance = null;
    if (had.length) for (const p of had) { p.def.insts.set(p.id, { ...p.inst, def: x.def.id }); instance = instance || p.id; }
    else { instance = m.place(m.root, x.def.id, I.slice()); m.root.insts.set(instance, { ...m.root.insts.get(instance), link }); }
    m.purge();
    return { ...x, instance, created: !had.length };
  });
  // pushes close together: the new step goes into the one before, so one Ctrl+Z takes back the whole drag
  const now = model.undoStack[model.undoStack.length - 1];
  if (fold && top && now !== top && top.label === label) { model.undoStack.pop(); top.a = now.a; }
  return { applied: true, created: r.created, instance: r.instance, objects: scene.items.length, meshes: r.report.meshes, faces: r.report.faces, curves: r.report.curves, placements: r.report.placements, units: scene.units ? scene.units.name : null, notes: r.report.notes, undo: label };
}

export function modelLinkTools(app) {
  const { model } = app;
  return linkTools({
    app: 'ModelCraft',
    store: createLinkStore(),
    open: (bytes) => read3dmFile(bytes),
    find: (link) => { const p = linkedPlacements(model, link); return p.length ? { placements: p.length, instance: p[0].id } : null; },
    apply: async (scene, a) => {
      const r = applyLink(model, scene, a);
      app.changed();
      if (app.say) app.say(t('ccdm.app.link_done', { name: a.name, meshes: r.meshes, faces: r.faces, curves: r.curves }) + (r.notes.length ? ' ' + t('ccdm.app.notes', { notes: r.notes.join(' ') }) : ''));
      if (r.created && app.frame) app.frame();
      return r;
    },
  });
}
