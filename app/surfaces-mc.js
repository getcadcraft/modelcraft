/* SPDX-License-Identifier: Apache-2.0 */
/**
 * surfaces-mc.js — ModelCraft's thin adapter for the Surfaces panel (0.8 round 3, model_PART_3; SU.747b, cc-nurbs mounted). The panel,
 * its session and its three.js drawing are the shared cc-nurbs-ui (./nurbs-ui/, byte copies of lib/nurbs-ui via tools/nurbs-ui/sync.mjs);
 * the geometry is cc-nurbs (./nurbs/, copies of lib/nurbs via tools/nurbs/sync.mjs). What is ModelCraft's here, and only here:
 *   - the patch set is kept in the .modelcraft file through the doc-data hook (`addons.nurbs` = { doc }), outside the model's undo like the
 *     file's materials; the panel has its own Undo / Redo (one step per command);
 *   - the model is in metres and cc-nurbs in millimetres (display scale 0.001; picked points × 1000);
 *   - picking in 3D: a click on the view while a command waits for a curve, surface, edge or end (capture phase, before the tools), and
 *     a point-picking tool ('nurbspts') that uses ModelCraft's own snapping (Tools.snap);
 *   - continuity problems go to the shell's Problems (source 'modelcraft.nurbs', fix "Match" = surface.match, one panel undo step).
 *
 *   mountSurfacesMc({ box, model, view, cam, tools, docData, t, print, save, open, base, afterDraw }) → { session, display, panel, refresh() }
 *   window.modelcraft.surfaces (tests) = that object once mounted.
 */
import * as THREE from 'three';
import * as N from './nurbs/index.js';
import { Session } from './nurbs-ui/session.js';
import { NurbsDisplay } from './nurbs-ui/display.js';
import { mountSurfacesPanel } from './nurbs-ui/panel.js';
import { Tool, registerTool } from './tools.js';

const MM = 1000;   // model metres → cc-nurbs millimetres

/** Point picking with ModelCraft's inference: each click adds the snapped point; Enter / double click finishes, Esc cancels. */
class NurbsPointsTool extends Tool {
  constructor(T, name, arg = {}) { super(T, name); this.arg = arg; this.pts = []; }
  get hint() { return this.arg.hint ? this.arg.hint(this.pts.length) : ''; }
  get lockable() { return true; }
  move(ev) { const r = this.snap(ev, { from: this.pts.length ? this.pts[this.pts.length - 1] : null }); this.h.overlay({ marker: this.marker(r), points: this.pts }); }
  down(ev) {
    const r = this.snap(ev, { from: this.pts.length ? this.pts[this.pts.length - 1] : null });
    if (!r || !r.p) return;
    const last = this.pts[this.pts.length - 1];
    if (ev.count >= 2 || (last && Math.hypot(r.p[0] - last[0], r.p[1] - last[1], r.p[2] - last[2]) < 1e-9)) { this.finish(); return; }
    this.pts.push(r.p.slice());
    this.busy = true;   // the page's Enter calls finish() on a busy tool
    this.h.tip(this.hint);
  }
  snap(ev, opts) { return this.T.snap(ev, opts); }
  finish() { const pts = this.pts, done = this.arg.done; this.pts = []; this.busy = false; this.arg.done = null; done?.(pts); this.T.set('select'); }
  cancel() { const done = this.arg.done; this.arg.done = null; done?.(null); super.cancel(); }
}
registerTool('nurbspts', NurbsPointsTool);

export function mountSurfacesMc({ box, model, view, cam, tools, docData, t, print, save, open, base, afterDraw, over }) {
  const store = docData.forAddon('nurbs');
  let viewOpts = { mode: 'shaded', cvs: false };
  let src = null, panel = null, collecting = false, quiet = false;
  const display = new NurbsDisplay(THREE, N, view.scene, { scale: 1 / MM });
  const label = (l) => t('nurbs.ui.undo.label') + ': ' + l;
  const session = new Session(N, {
    onChange: (why) => {
      if (why === 'doc' && !quiet) store.setData('doc', session.doc.items.length ? JSON.parse(N.doc.toJSON(session.doc)) : null);
      draw();
      panel?.refresh();
      if (why === 'doc' || why === 'load') src?.invalidate();
    },
  });
  /** The file's patch set (untrusted: cc-nurbs cleans it; a broken one is left out and said). */
  const fromFile = () => {
    const j = store.data('doc');
    quiet = true;
    try { session.load(j && typeof j === 'object' ? j : null); } catch (e) { session.load(null); print(t(e && e.code ? e.code : 'nurbs.ui.err.failed', (e && e.vars) || { error: String(e?.message || e) })); }
    finally { quiet = false; }
  };
  function draw() {
    const picks = session.cmd ? session.picks : [];
    display.draw(session.doc, { ...viewOpts, picks, tol: 0.05 });
    display.view(cam.eye.slice());
    view.invalidate();
  }
  afterDraw.add(() => { if (display.view(cam.eye.slice())) view.invalidate(); });

  // ---- picking in the view while a command waits (capture phase: the tools never see the click) ----
  const ray = new THREE.Raycaster();
  const onDown = (ev) => {
    if (!collecting || ev.button !== 0 || tools.name === 'nurbspts') return;
    const r = over.getBoundingClientRect(), x = (ev.clientX - r.left) * (cam.w / r.width), y = (ev.clientY - r.top) * (cam.h / r.height);
    const q = cam.ray(x, y);
    ray.set(new THREE.Vector3(...q.o), new THREE.Vector3(...q.d));
    ray.params.Line = { threshold: cam.pixelSize(cam.target) * 6 };
    const hit = display.pick(ray);
    if (!hit) return;
    ev.stopPropagation(); ev.preventDefault();
    if (!session.pick(hit) && !session.pick({ id: hit.id })) print(t('nurbs.ui.pick.miss'));
  };
  over.addEventListener('pointerdown', onDown, true);

  const host = {
    t, session, get view() { return viewOpts; },
    setView: (v) => { viewOpts = { mode: ['shaded', 'zebra', 'curvature'].includes(v.mode) ? v.mode : 'shaded', cvs: !!v.cvs }; draw(); panel?.refresh(); },
    collecting: (on) => { if (on !== collecting) { collecting = on; if (on) print(t('nurbs.ui.pick.hint')); } },
    pickPoints: () => new Promise((resolve) => {
      tools.set('nurbspts', { hint: (n) => t('nurbs.ui.points.hint', { n }), done: (pts) => resolve(pts ? pts.map((p) => p.map((v) => Math.round(v * MM * 1e6) / 1e6)) : null) });
      over.focus({ preventScroll: true });
    }),
    save, open, base, print, range: () => display.range(),
  };
  panel = mountSurfacesPanel(box, host);
  store.onOpen(() => fromFile());
  fromFile();

  // ---- continuity as shared Problems (rule 29) ----
  const go = () => {
    const P = window.ccProblems;
    if (!P) return;
    src = P.source({ id: 'modelcraft.nurbs', kind: 'check', label: t('nurbs.ui.title'),
      run: () => (session.doc.items.some((i) => i.kind === 'surface') ? N.doc.continuity(session.doc).problems : []),
      fix: async (p, f) => {
        if (f.action !== 'nurbs.match') return false;
        const r = session.match(f.args, label(t('nurbs.cmd.match_surface')));
        if (!r.ok) print(t(r.error.key, r.error.vars));
        return r.ok;
      } });
    src.invalidate();
  };
  if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }

  return { session, display, panel, refresh: () => { draw(); panel.refresh(); }, newFile: () => { quiet = true; session.load(null); quiet = false; } };
}
