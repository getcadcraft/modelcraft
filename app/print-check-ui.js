/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-check-ui.js: modelcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPrintCheck(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { printProblems } from './problems-modelcraft.js';
import { el } from './ui-util.js';
import * as i18n from "./i18n.js";
import { solidProblems } from './model.js';

export function mountPrintCheck(ctx) {
  const { ST, ui, model, cam, host, view, afterDraw, settings, print, setTool, problemList, act, afterHistory, download, base, focusView, ask, root } = ctx;

  /**
   * Check for 3D printing (0.5 SG.4, #531): the selection, or everything shown, as a printer mesh (mm, Z up) through
   * print3d.js — closed, faces the right way, not passing through itself; size, volume, base, overhangs — then STL or
   * 3MF of exactly that mesh. 0.6 LC.21 (printprep.js): each problem in plain words (what is wrong · why it matters · what
   * to do), the parts it is in with Show, one Fix what can be fixed (one undo step, then the check runs again), and the
   * printer bed from Settings. The modules load on first use.
   */
  ST.printReady = -1;   // model.version of the last check that said ready (the guided first model's last step)
  // 0.8 P.6 (round 3, model_PART_3): the print check as a source of the shell's Problems (problems-modelcraft.js; docs/0.8-PROBLEMS-SPEC.md).
  // The check is the person's own action (it can be heavy), so print3d() pushes each result; a model change clears it; markers sit at the
  // first place the check found each problem (mm → the model's meters, drawn over the view).
  {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      ST.printSrc = P.source({ id: 'modelcraft.print', kind: 'check', label: ctx.t('problems.src.print'),
        fix: async (p, f) => {
          if (f.action !== 'repair' || !ST.printRep || ST.printAt !== model.version) return false;
          const PP = await import('./printprep.js');
          const r = PP.fixParts(model, PP.partsToFix(model, ST.printChoice, ST.printRep).filter((x) => x.fixable), ctx.t('app.undo.prep_fix'));
          afterHistory();
          await checkForPrint();   // check again, so the panel shows what is left
          return !!(r.stray || r.inner || r.flipped || r.holes);
        } });
      P.adapter({ t: ctx.t, file: base, select: () => {}, focus: () => {} });
      P.markers({
        stage: ui.gl.parentElement,
        anchor: (p) => {   // mm (the print check's first place, a surface edge's worst point) → the model's metres
          const a = ST.printAnchors.get(p.id);
          if (a) return ST.printAt === model.version ? a.map((v) => v / 1000) : null;
          return p.where?.space === '3d' && Array.isArray(p.where.at) ? p.where.at.map((v) => v / 1000) : null;
        },
        toScreen: (pt) => {
          const q = cam.project(pt);
          if (!q || q[2] > 1) return { x: 0, y: 0, behind: true };
          const r = ui.gl.getBoundingClientRect(), s = ui.gl.parentElement.getBoundingClientRect();
          return { x: q[0] * (r.width / cam.w) + (r.left - s.left), y: q[1] * (r.height / cam.h) + (r.top - s.top) };
        },
        onView: (fn) => { afterDraw.add(fn); return () => afterDraw.delete(fn); },
      });
    };
    if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
  }
  /** The print check on what print3d() would check, pushed to Problems; returns what the dialog needs. */
  async function checkForPrint() {
    const [P, { printTriangles }, PP] = await Promise.all([import('./print3d.js'), import('./print-mc.js'), import('./printprep.js')]);
    const choice = { path: host.path, sel: host.sel };
    const { tris, what } = printTriangles(model, choice);
    const bed = PP.bedSize(settings.bed);
    const rep = P.printCheck(P.meshFromTriangles(tris), { bed });
    if (ST.printSrc) { const r = printProblems(rep, { t: ctx.t, bed }); ST.printAnchors = r.anchors; ST.printRep = rep; ST.printChoice = choice; ST.printAt = model.version; ST.printSrc.set(r.problems); }
    return { P, PP, choice, what, bed, rep };
  }
  // 0.7 LC.21 (session print-07): Supports preview, Wall thickness, Hollow, Repair — a card over the view (print-ui.js, loaded on first use)
  ST.printTools = null;
  async function openPrintTool(name) {
    ST.printTools ??= (await import('./print-ui.js')).mountPrintTools({ root, anchor: ctx.guideBox, model, view, cam, host, t: ctx.t, el, print, settings, ask, afterHistory, focusView, over: ui.over, closeGuide: () => { if (ST.guideOn) ctx.closeGuide(); } });
    ST.printTools.open(name);
  }
  // 0.7 LC.21 (session print-07): the Beginner menu style's commands ([data-beginner] in ui.inc; beginner-mc.js, loaded on first use)
  ST.beginner = null;
  root.querySelectorAll('[data-beginner]').forEach((b) => b.addEventListener('click', async () => {
    ST.beginner ??= (await import('./beginner-mc.js')).mountBeginner({ model, host, t: ctx.t, print, setTool, afterHistory, clickAct: act });
    await ST.beginner.run(b.dataset.beginner);
  }));
  async function print3d() {
    print(ctx.t('app.print3d.checking'));
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    const { P, PP, choice, what, bed, rep } = await checkForPrint();
    const plain = PP.plainReport(rep);
    const parts = plain.fix ? PP.partsToFix(model, choice, rep) : [];
    if (rep.ok) ST.printReady = model.version;
    ctx.syncGuide(true);   // a check changes no geometry, so the guide's version watch alone would not see it
    const mm = (v) => (Math.round(v * 10) / 10).toLocaleString(i18n.locale() === 'en-XA' ? 'en' : i18n.locale());
    const facts = el('ul', { className: 'mc-print-facts' },
      el('li', {}, ctx.t(what === 'selection' ? 'app.print3d.what.sel' : 'app.print3d.what.all')),
      rep.size ? el('li', {}, ctx.t('app.print3d.size', { w: mm(rep.size[0]), d: mm(rep.size[1]), h: mm(rep.size[2]) })) : null,
      rep.volume != null ? el('li', {}, ctx.t('app.print3d.volume', { v: mm(rep.volume / 1000) })) : null,
      el('li', {}, ctx.t('app.print3d.tris', { n: rep.triangles })),
      el('li', {}, bed ? ctx.t('app.prep.bed', { x: bed[0], y: bed[1], z: bed[2] }) : ctx.t('app.prep.bed.none')));
    const row = (r) => el('li', { className: 'mc-prep-row', dataset: { prepKind: r.kind } },
      el('span', { className: 'mc-prep-what' }, ctx.t((r.level === 'fix' ? 'app.print3d.p.' : 'app.print3d.w.') + r.kind, { n: r.n, share: Math.max(1, Math.round((r.share || 0) * 100)), angle: r.angle || 45 })),
      el('span', { className: 'mc-prep-why' }, ctx.t('app.prep.why.' + r.kind)),
      el('span', { className: 'mc-prep-todo' }, ctx.t('app.prep.todo.' + r.kind)));
    const fixRows = plain.rows.filter((r) => r.level === 'fix'), lookRows = plain.rows.filter((r) => r.level === 'look');
    const partName = (p) => (p.name ? p.name : ctx.t(p.defId === 'root' ? 'app.prep.part.loose' : 'app.prep.part.unnamed'));
    const partList = (p) => problemList({ holes: { length: p.holes }, extra: { length: p.extra }, inner: { length: p.inner }, stray: { length: p.stray }, flipped: { length: p.flipped } });
    const fixable = parts.some((p) => p.fixable);
    const body = el('div', { className: 'mc-print' },
      el('p', { className: 'mc-print-verdict', dataset: { printOk: rep.ok ? '1' : '0', prepVerdict: plain.verdict } },
        plain.verdict === 'empty' ? ctx.t('app.print3d.p.empty') : plain.verdict === 'fix' ? ctx.t('app.prep.verdict.fix', { n: plain.fix })
          : plain.verdict === 'look' ? ctx.t('app.prep.verdict.look', { n: plain.look }) : ctx.t('app.prep.verdict.ready')),
      plain.verdict === 'empty' ? el('p', { className: 'mc-note' }, ctx.t('app.prep.todo.empty')) : null,
      fixRows.length && plain.verdict !== 'empty' ? el('h3', { className: 'mc-prep-h' }, ctx.t('app.prep.h.fix')) : null,
      fixRows.length && plain.verdict !== 'empty' ? el('ul', { className: 'mc-print-problems', dataset: { printProblems: '' } }, ...fixRows.map(row)) : null,
      parts.length ? el('h3', { className: 'mc-prep-h' }, ctx.t('app.prep.parts.h')) : null,
      parts.length ? el('ul', { className: 'mc-prep-parts', dataset: { prepParts: '' } }, ...parts.map((p, k) => el('li', {},
        el('span', {}, ctx.t('app.prep.part', { name: partName(p), list: partList(p) })), ' ',
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { key: 'show:' + k } }, ctx.t('app.prep.show'))))) : null,
      lookRows.length ? el('h3', { className: 'mc-prep-h' }, ctx.t('app.prep.h.look')) : null,
      lookRows.length ? el('ul', { className: 'mc-print-warnings', dataset: { printWarnings: '' } }, ...lookRows.map(row)) : null,
      facts,
      plain.fix && !parts.length && plain.verdict !== 'empty' ? el('p', { className: 'mc-note' }, ctx.t('app.print3d.fixhint')) : null,
      rep.triangles ? el('p', { className: 'mc-prep-tools', dataset: { prepTools: '' } }, el('span', {}, ctx.t('app.ptool.lead')), ...['supports', 'walls', 'hollow', 'repair', 'split'].map((k) => el('button', { type: 'button', className: 'mc-linkbtn', dataset: { key: 'tool:' + k } }, ctx.t(k === 'split' ? 'sx.split.open' : 'app.ptool.' + k + '.open')))) : null);   // 0.7 LC.21 print-07; 'split' 0.8 SU.929 sx-split
    print(plain.verdict === 'fix' ? ctx.t('app.prep.verdict.fix', { n: plain.fix }) : ctx.t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready'));
    const buttons = !rep.triangles ? [['cancel', ctx.t('app.btn.close'), 'btn-plot']]
      : [['cancel', ctx.t('app.btn.cancel'), 'btn-line'], ...(fixable ? [['fix', ctx.t('app.prep.fixall'), 'btn-line']] : []), ['stl', ctx.t('app.print3d.stl'), 'btn-line'], ['3mf', ctx.t('app.print3d.3mf'), rep.ok ? 'btn-plot' : 'btn-line']];
    const key = await ask({ title: ctx.t('app.print3d.title'), body, buttons });
    if (key.startsWith('tool:')) { await openPrintTool(key.slice(5)); return; }   // 0.7 LC.21 print-07
    if (key.startsWith('show:')) {
      // open the part and select what is wrong in it, as Entity info's Show problems does
      const p = parts[Number(key.slice(5))];
      if (!p || !model.def(p.defId)) return;
      const sp = solidProblems(model.def(p.defId));
      host.openContext(p.path);
      host.setSel([...[...sp.holes, ...sp.extra, ...sp.stray].map((id) => ({ t: 'e', id })), ...[...sp.inner, ...(p.flipped ? sp.flipped : [])].map((id) => ({ t: 'f', id }))]);
      print(ctx.t('app.check.showing', { list: partList(p) }));
      return;
    }
    if (key === 'fix') {
      const r = PP.fixParts(model, parts.filter((p) => p.fixable), ctx.t('app.undo.prep_fix'));
      afterHistory();
      const done = [r.stray && ctx.t('app.check.fixed.stray', { n: r.stray }), r.inner && ctx.t('app.check.fixed.inner', { n: r.inner }), r.flipped && ctx.t('app.check.fixed.flipped', { n: r.flipped }), r.holes && ctx.t('app.check.fixed.holes', { n: r.holes })].filter(Boolean).join(' · ');
      print(done ? ctx.t('app.check.fixed', { done }) : ctx.t('app.prep.nothing'));
      await print3d();   // check again, so the dialog shows what is left
      return;
    }
    if (key !== 'stl' && key !== '3mf') return;
    const file = base() + '.' + key;
    if (key === 'stl') download(P.stlBinary(rep.mesh, 'ModelCraft ' + base()), file, 'model/stl');   // i18n-ignore: the STL header
    else download(P.threeMF(rep.mesh, { name: base(), app: 'ModelCraft' }), file, 'model/3mf');   // i18n-ignore: an app name in the file
    print(ctx.t('app.print3d.done', { file, n: rep.mesh.indices.length / 3 }));
  }

  return { openPrintTool, print3d };
}
