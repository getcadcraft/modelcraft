/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-split-mc.js — a split's pieces in ModelCraft's model (0.8 SU.929, session sx-split). DOM-free; ModelCraft's alone.
 *
 *   placePieces(model, path, iids, pieces, {label, name, color, tag, toLocal})
 *       → [{iid, number, solid (true: a group of faces; false: a mesh), why}]: in ONE undo step the placements `iids` of
 *         the open context `path` are taken out and every piece is placed where it was cut from. A piece is a solid group
 *         of faces when the kernel holds it closed (print-solid.js solidFromTris), else a mesh. `pieces` = print-split.js
 *         result pieces (`tris` in world millimetres); `toLocal(p)` turns a world-mm point into the context's metres
 *         (default: ÷ 1000). Names: "<name> 1", "<name> 2" … (the joint numbers on the faces read the same; a name
 *         already in the model gets the model's usual "#n"). `color`: the paint for every piece (the UI passes the
 *         placement's, else the first painted face's, since the pieces' faces are new).
 */
import { solidFromTris, meshFromTris } from './print-solid.js';
import { translation } from './vec.js';

export function placePieces(model, path, iids, pieces, { label, name = 'Piece', color, tag, toLocal = (p) => p.map((x) => x / 1000) } = {}) {
  const out = [];
  model.change(label, (m) => {
    const d = m.context(path).def;
    const taken = new Set([...m.defs.values()].map((x) => x.name));
    for (const p of pieces) {
      const local = p.tris.map((tri) => tri.map(toLocal));
      const base = name + ' ' + p.number, nm = taken.has(base) ? m.uniqueName(base) : base;
      taken.add(nm);
      const r = solidFromTris(m, local, nm);
      const nd = r.def || m.newMeshDef(meshFromTris(local), nm);
      const iid = m.place(d, nd.id, translation([0, 0, 0]));
      const inst = d.insts.get(iid);
      if (color) inst.color = color;
      if (tag) inst.tag = tag;
      out.push({ iid, number: p.number, solid: !!r.def, why: r.why });
    }
    for (const id of iids) d.insts.delete(id);
    m.purge?.();
  });
  return out;
}
