/* SPDX-License-Identifier: Apache-2.0 */
/**
 * addon-bodies-mc.js — display bodies an add-on puts in ModelCraft's model (add-on API 1.4 `api.model.addBodies`, 0.8 DC.117, session `cabinetcraft_hosts`). DOM-free:
 * tools/addons-test/cabinetcraft-model-node.mjs runs it on a real Model.
 *
 * A call makes ONE group at the model's top level (tagged with a tag of the add-on's own, so it can be found again after Save and Open and hidden with the tag), and inside it one
 * sub-group per `in` name (a cabinet), each holding the bodies' faces coloured. They are real geometry (faces and edges): they export to OBJ, glTF and STL with the rest, they render, they can be
 * selected and measured, and they are an ordinary group the person may edit or erase. Replacing a group erases the old one first. All of it is ONE undo step (Model.change).
 * Units: the call is in millimetres, ModelCraft's model in metres; the room's axes (x, y plan, z up) are ModelCraft's. `at` = [x, y, z] mm moves the whole group.
 *
 *   placeBodies(model, { owner, ownerName, group, bodies, name, label, at }) → { count, instance, tag }
 *   removeBodies(model, { owner, ownerName, group, label }) → boolean
 *   listBodies(model, owner) → [{ group, name, count }]
 */
import { vAdd, fAdd } from './model.js';
import { translation } from './vec.js';

const MM = 1000;
const LIMITS = { bodies: 6000, triangles: 60000, coord: 1e7 };
const tagName = (ownerName, group) => (String(ownerName || 'add-on') + ' / ' + group).slice(0, 80);
const okNum = (v) => Number.isFinite(v) && Math.abs(v) <= LIMITS.coord;

/** One body → faces in `def` (metres). Returns the number of triangles-worth made, 0 when the body cannot be read. */
function addBody(def, b) {
  const color = /^#[0-9a-f]{6}$/i.test(String(b.color)) ? b.color : '#c9c2b4';
  if (b.prism && Array.isArray(b.prism.pts)) {
    const pts = b.prism.pts.map((p) => [Number(p[0]), Number(p[1])]);
    const z0 = Number(b.prism.z0), z1 = Number(b.prism.z1);
    if (pts.length < 3 || !pts.every((p) => okNum(p[0]) && okNum(p[1])) || !okNum(z0) || !okNum(z1) || !(z1 > z0)) return 0;
    const bot = pts.map((p) => vAdd(def, [p[0] / MM, p[1] / MM, z0 / MM])), top = pts.map((p) => vAdd(def, [p[0] / MM, p[1] / MM, z1 / MM]));
    fAdd(def, [bot.slice().reverse()], color); fAdd(def, [top], color);
    for (let i = 0; i < pts.length; i++) { const j = (i + 1) % pts.length; fAdd(def, [[bot[i], bot[j], top[j], top[i]]], color); }
    return 2 * (pts.length - 2) + 2 * pts.length;
  }
  if (Array.isArray(b.box) && b.box.length === 6) {
    const [x0, y0, z0, x1, y1, z1] = b.box.map(Number);
    if (![x0, y0, z0, x1, y1, z1].every(okNum) || !(x1 > x0 && y1 > y0 && z1 > z0)) return 0;
    return addBody(def, { color, prism: { pts: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], z0, z1 } });
  }
  if (b.mesh && Array.isArray(b.mesh.positions) && Array.isArray(b.mesh.indices)) {
    const P = b.mesh.positions, I = b.mesh.indices;
    if (P.length % 3 || I.length % 3 || !P.every((v) => okNum(Number(v)))) return 0;
    const ids = [];
    for (let i = 0; i < P.length; i += 3) ids.push(vAdd(def, [P[i] / MM, P[i + 1] / MM, P[i + 2] / MM]));
    let n = 0;
    for (let i = 0; i < I.length; i += 3) { const a = I[i], c = I[i + 1], d = I[i + 2]; if (ids[a] === undefined || ids[c] === undefined || ids[d] === undefined || a === c || c === d || a === d) continue; fAdd(def, [[ids[a], ids[c], ids[d]]], color); n++; }
    return n;
  }
  return 0;
}

function dropTree(model, defId, seen = new Set()) {
  if (seen.has(defId)) return;
  seen.add(defId);
  const d = model.defs.get(defId);
  if (!d) return;
  for (const i of d.insts.values()) dropTree(model, i.def, seen);
  model.defs.delete(defId);
}

function findOurs(model, tag) {
  const out = [];
  for (const [iid, inst] of model.root.insts) if (inst.tag === tag) out.push(iid);
  return out;
}

export function removeBodies(model, { ownerName, group, label = 'Remove bodies' } = {}) {
  const tag = tagName(ownerName, group);
  const had = findOurs(model, tag);
  if (!had.length) return false;
  model.change(label, (m) => {
    for (const iid of findOurs(m, tag)) { const inst = m.root.insts.get(iid); m.root.insts.delete(iid); if (inst) dropTree(m, inst.def); }
  });
  return true;
}

export function placeBodies(model, { owner, ownerName, group, bodies, name, label = 'Place bodies', at = [0, 0, 0] } = {}) {
  const list = (Array.isArray(bodies) ? bodies : []).slice(0, LIMITS.bodies);
  const tag = tagName(ownerName, group);
  const off = [Number(at[0]) || 0, Number(at[1]) || 0, Number(at[2]) || 0];
  if (!off.every(okNum)) throw new Error('addBodies: at');
  let count = 0, tris = 0, instance = null;
  // check before any undo step is made: a call with nothing usable throws and changes nothing
  const probe = list.filter((b) => b && typeof b === 'object');
  if (!probe.length) throw new Error('addBodies: no body');
  model.change(label, (m) => {
    for (const iid of findOurs(m, tag)) { const inst = m.root.insts.get(iid); m.root.insts.delete(iid); if (inst) dropTree(m, inst.def); }
    const top = m.newDef('group', String(name || group).slice(0, 80));
    const subs = new Map();
    for (const b of probe) {
      if (tris > LIMITS.triangles) break;
      const key = b.in ? String(b.in).slice(0, 80) : null;
      let target = top;
      if (key) { if (!subs.has(key)) { const sd = m.newDef('group', key); m.place(top, sd.id, translation([0, 0, 0])); subs.set(key, sd); } target = subs.get(key); }
      const piece = m.newDef('group', String(b.name || 'body').slice(0, 80));
      const n = addBody(piece, b);
      if (!n) { m.defs.delete(piece.id); continue; }
      tris += n; count++;
      m.place(target, piece.id, translation([0, 0, 0]));
    }
    if (!count) { dropTree(m, top.id); throw new Error('addBodies: no body could be read'); }
    instance = m.place(m.root, top.id, translation([off[0] / MM, off[1] / MM, off[2] / MM]));
    const nm = m.tag(tag) ? m.tag(tag).name : m.addTag(tag);
    m.root.insts.get(instance).tag = nm;
  });
  return { count, instance, tag };
}

export function listBodies(model, owner, ownerName) {
  const out = [];
  const prefix = String(ownerName || '') + ' / ';
  for (const [, inst] of model.root.insts) {
    if (typeof inst.tag !== 'string' || (ownerName && !inst.tag.startsWith(prefix))) continue;
    const d = model.defs.get(inst.def);
    let n = 0;
    const walk = (def) => { for (const i of def.insts.values()) { const c = model.defs.get(i.def); if (c) walk(c); } n += def.faces.size ? 1 : 0; };
    if (d) walk(d);
    out.push({ group: inst.tag.slice(prefix.length), name: d ? d.name : '', count: n });
  }
  void owner;
  return out;
}
