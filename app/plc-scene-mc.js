/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol and property names only; the Engines panel words everything the person sees. */
/**
 * plc-scene-mc.js — ModelCraft as a 3D host for the soft PLC (0.8 XE.13, apps-mount_PART_5). The shell's Engines panel (plc engine, JSON input with
 * `"scene": true`) binds a control program to the placements of the open model through lib/plc `scenePlant`; this file is the model's side of that:
 *
 *   window.ccSceneHost = { app: 'modelcraft', objects() → [{ name, props }], open() → session }
 *   session.has(name) · session.read(name, prop) → value · session.apply(name, prop, value) · session.state() → { 'Name.prop': value } (what the run changed)
 *   session.close(keep) → n     keep = true writes the changed placements into the model as ONE undo step; false (the default) leaves the model as it was.
 *
 * Objects are the placements (groups and components) of the model's top level, named by their own name (else their definition's). Properties:
 *   x, y, z    the placement's position in the model's units (metres by default)
 *   rotZ       the turn about the vertical axis, degrees
 *   hidden     true / false
 * A run works on an overlay, so the model is never changed while the program runs: reads see the program's own writes, everything else is the model's.
 */
const PROPS = ['x', 'y', 'z', 'rotZ', 'hidden'];

export function installSceneHost({ model, win = typeof window !== 'undefined' ? window : null }) {
  const topInsts = () => { const ctx = model.context([]); return ctx ? [...ctx.def.insts.entries()] : []; };
  const nameOf = (id, inst) => String(inst.name || model.defs.get(inst.def)?.name || ('placement ' + id));
  const find = (name) => { for (const [id, inst] of topInsts()) if (nameOf(id, inst) === name) return [id, inst]; return null; };
  const rotZOf = (m) => Math.atan2(m[1], m[0]) * 180 / Math.PI;
  const baseValue = (inst, prop) => (prop === 'x' ? inst.m[12] : prop === 'y' ? inst.m[13] : prop === 'z' ? inst.m[14] : prop === 'rotZ' ? rotZOf(inst.m) : prop === 'hidden' ? !!inst.hidden : undefined);

  const host = {
    app: 'modelcraft',
    props: PROPS.slice(),
    objects() { return topInsts().map(([id, inst]) => ({ name: nameOf(id, inst), props: PROPS.slice() })); },
    open() {
      const overlay = new Map();   // 'name\u0000prop' → value
      const key = (n, p) => n + '\u0000' + p;
      return {
        has(name) { return !!find(name); },
        hasProp(prop) { return PROPS.includes(prop); },
        read(name, prop) {
          if (overlay.has(key(name, prop))) return overlay.get(key(name, prop));
          const f = find(name); return f ? baseValue(f[1], prop) : undefined;
        },
        apply(name, prop, value) {
          if (!find(name) || !PROPS.includes(prop)) return false;
          overlay.set(key(name, prop), prop === 'hidden' ? !!value : Number(value));
          return true;
        },
        state() { const o = {}; for (const [k, v] of overlay) o[k.replace('\u0000', '.')] = v; return o; },
        close(keep = false) {
          if (!keep || !overlay.size) return 0;
          const changes = [...overlay].map(([k, v]) => { const [n, p] = k.split('\u0000'); return [n, p, v]; });
          let n = 0;
          model.change('Run the control program on the model', () => {
            for (const [name, prop, v] of changes) {
              const f = find(name); if (!f) continue;
              const inst = f[1];
              if (prop === 'hidden') { if (v) inst.hidden = true; else delete inst.hidden; }
              else if (prop === 'rotZ') {
                const m = inst.m.slice(), sx = Math.hypot(m[0], m[1]) || 1, sy = Math.hypot(m[4], m[5]) || 1, a = v * Math.PI / 180;
                m[0] = sx * Math.cos(a); m[1] = sx * Math.sin(a); m[4] = -sy * Math.sin(a); m[5] = sy * Math.cos(a);
                inst.m = m;
              } else { const m = inst.m.slice(); m[{ x: 12, y: 13, z: 14 }[prop]] = v; inst.m = m; }
              n++;
            }
          });
          return n;
        },
      };
    },
  };
  if (win) win.ccSceneHost = host;
  return host;
}
