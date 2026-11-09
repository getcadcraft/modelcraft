/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-host.js — ModelCraft as a host of the print stage (roadmap PS.1; lib/printstage's copy in printstage/, loaded on first use).
 * The view is the stage: the top-level groups of the model are what lies on the bed, the usual tools move them, and everything shown
 * prints (print-mc.js, the same triangles as Check for 3D printing). One point in the model at 0,0 is the bed's corner.
 *
 *   mountPrintStage({ anchor, model, view, cam, host, t, el, print, fileName, load, save, moreSlicers, moreLinks }) → { open(), addItem(uuid, version) }
 */
import { printStagePanel } from './printstage/ps-panel.js';
import { PrintOverlay } from '../../print-view.js';
import { printTriangles } from '../../print-mc.js';
import { placementTris, meshFromTris } from '../../print-solid.js';
import { manifold } from '../../solids.js';
import { translation, mmul, scaling } from '../../vec.js';

const MM = 1000;

export function mountPrintStage({ anchor, model, view, cam, host, t, el, print, fileName, load, save, moreSlicers, moreLinks }) {
  const overlay = new PrintOverlay(view);
  const card = el('section', { className: 'mc-guide ps-card', dataset: { printStage: '' }, hidden: true, 'aria-labelledby': 'ps-h' });
  anchor.parentElement.insertBefore(card, anchor);
  if (!document.querySelector('link[data-ps-css]')) document.head.append(el('link', { rel: 'stylesheet', href: new URL('./printstage/ps-panel.css', import.meta.url).href, dataset: { psCss: '' } }));
  let bed = null, open = false, small = false;

  const rootDef = () => model.context([]).def;
  const boxOf = (iid) => {
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    for (const tri of placementTris(model, rootDef(), iid)) for (const p of tri) for (let k = 0; k < 3; k++) { const v = p[k] * MM; if (v < min[k]) min[k] = v; if (v > max[k]) max[k] = v; }
    return { min, max };
  };
  const shown = (inst) => !inst.hidden && !(inst.tag && model.hiddenTags().has(inst.tag));
  let pending = null;
  const edit = (label, fn) => (pending ? fn(pending) : model.change(label, fn));
  const inst = (m, id) => m.context([]).def.insts.get(id);

  const stage = printStagePanel({
    el, t,
    cls: { block: 'ps-block', note: 'ps-note', head: 'ps-head', btn: 'btn-line btn-sm-cc', primary: 'btn-plot btn-sm-cc', link: 'mc-linkbtn', select: 'mc-input', input: 'mc-input', error: 'ps-error', list: 'ps-list', row: 'ps-row', field: 'ps-field', check: 'ps-check', send: 'ps-send', steps: 'ps-steps' },
    objects: () => {
      const out = [];
      for (const [id, i] of rootDef().insts) {
        if (!shown(i)) continue;
        const b = boxOf(id);
        if (Number.isFinite(b.min[0])) out.push({ id, name: model.def(i.def)?.name || t('ps.title'), ...b });
      }
      return out;
    },
    plate: () => printTriangles(model, { path: [], sel: [] }).tris.map((x) => x.p),
    place: (name, tris, { scale, at }) => edit(t('ps.undo.add'), (m) => {
      const taken = [...m.defs.values()].some((d) => d.name === name);   // the model's "#n" only when the name is already used
      const def = m.newMeshDef(meshFromTris(tris.map((tri) => tri.map((p) => p.map((v) => v / MM)))), taken ? m.uniqueName(name) : name);
      return m.place(m.context([]).def, def.id, mmul(translation([at[0] / MM, at[1] / MM, 0]), scaling(scale)));
    }),
    moveTo: (id, x, y) => {
      const b = boxOf(id), dx = (x - (b.min[0] + b.max[0]) / 2) / MM, dy = (y - (b.min[1] + b.max[1]) / 2) / MM;
      edit(t('ps.undo.arrange'), (m) => { const i = inst(m, id); if (i) i.m = mmul(translation([dx, dy, 0]), i.m); });
    },
    drop: (id) => { const dz = -boxOf(id).min[2] / MM; if (Math.abs(dz) > 1e-7) edit(t('ps.undo.arrange'), (m) => { const i = inst(m, id); if (i) i.m = mmul(translation([0, 0, dz]), i.m); }); },
    rescale: (id, f) => {
      const b = boxOf(id), about = [(b.min[0] + b.max[0]) / 2 / MM, (b.min[1] + b.max[1]) / 2 / MM, b.min[2] / MM];
      edit(t('ps.undo.fit'), (m) => { const i = inst(m, id); if (i) i.m = mmul(scaling(f, about), i.m); });
    },
    remove: (id) => edit(t('ps.undo.remove'), (m) => { m.context([]).def.insts.delete(id); m.purge?.(); }),
    select: (id) => { host.setSel([{ t: 'i', id }]); },
    batch: (label, fn) => model.change(label, (m) => { pending = m; try { fn(); } finally { pending = null; } }),
    showBed: (b) => {
      bed = b;
      const [x, y, z] = b.map((v) => v / MM);
      overlay.set('bed', { lines: Float32Array.from([0, 0, 0, x, 0, 0, x, 0, 0, x, y, 0, x, y, 0, 0, y, 0, 0, y, 0, 0, 0, 0]), color: overlay.token('--ink-2', '#34404e'), dashed: true });
      cam.fit({ min: [0, 0, 0], max: [x, y, Math.min(z, Math.max(x, y) / 2)] });
      view.invalidate();
    },
    manifold: () => manifold(),
    // CadCraft basic slices on a worker thread when the page can name manifold's file (import maps do not reach a worker); otherwise on the page
    worker: (() => { try { const m = import.meta.resolve?.('manifold-3d'); return m ? { url: new URL('./printstage/ps-worker.js', import.meta.url).href, manifoldUrl: m } : null; } catch { return null; } })(),
    fetchFn: (...a) => fetch(...a),
    serial: navigator.serial || null,
    load, save,
    moreSlicers, moreLinks,
    studio: window.cadcraftStudio?.engines || null,
    download: (name, text, type) => { const a = el('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name }); a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); },
    print, fileName,
    confirm: (paragraphs, opts = {}) => new Promise((done) => {
      let yes = false;
      const finish = (v) => { yes = v; dlg.close(); };
      const dlg = el('dialog', { className: 'mc-dialog', 'aria-labelledby': 'ps-ask-h', dataset: { psConfirm: '' } },
        el('div', { className: 'mc-dialog-head' }, el('h2', { className: 'mc-h', id: 'ps-ask-h' }, opts.title || t('ps.send.button'))),
        el('div', { className: 'mc-dialog-text' }, ...paragraphs.map((x) => el('p', {}, x))),
        el('div', { className: 'mc-dialog-foot' },
          el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { psYes: '' }, onclick: () => finish(true) }, opts.yes || t('ps.send.button')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { psNo: '' }, onclick: () => finish(false) }, t('ps.send.cancel'))));
      dlg.addEventListener('close', () => { dlg.remove(); done(yes); });
      anchor.closest('.mc-app, [data-app-root]')?.append(dlg) ?? document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('[data-ps-no]').focus();
    }),
    rerender: () => { if (open) draw(); },
  });

  function draw() {
    // a redraw keeps the search box's focus and text from being lost mid-typing: the panel holds the query
    const scroll = card.scrollTop;
    card.replaceChildren(
      el('div', { className: 'mc-guide-top' },
        el('p', { className: 'mc-guide-step' }, t('ps.eyebrow')),
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { psSmall: small ? '1' : '0' }, onclick: () => { small = !small; draw(); } }, t(small ? 'ps.show' : 'ps.hide')),
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { psClose: '' }, title: t('ps.close'), 'aria-label': t('ps.close'), onclick: close }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      el('h2', { className: 'mc-guide-h', id: 'ps-h' }, t('ps.title')),
      ...(small ? [] : [el('p', { className: 'ps-note' }, t('ps.lab'))]),
      ...stage.panel({ small }));
    card.scrollTop = scroll;
  }
  function close() { open = false; card.hidden = true; bed = null; overlay.set('bed', null); view.invalidate(); }
  // things move under the usual tools: the list and its off-the-bed marks follow, but never while someone is typing in the card
  addEventListener('cc-print-slicers', () => { if (open) draw(); });
  let seen = -1;
  const watch = setInterval(() => { if (open && model.version !== seen) { seen = model.version; if (!card.contains(document.activeElement) || document.activeElement.tagName === 'BUTTON') draw(); } }, 400);
  return {
    open() {
      if (!anchor.hidden) anchor.querySelector('[data-guide-close]')?.click();   // the first-model guide uses the same corner of the view
      open = true; card.hidden = false;
      bed = stage.job().bed;
      overlay.set('bed', null);
      const [x, y] = bed.map((v) => v / MM);
      overlay.set('bed', { lines: Float32Array.from([0, 0, 0, x, 0, 0, x, 0, 0, x, y, 0, x, y, 0, 0, y, 0, 0, y, 0, 0, 0, 0]), color: overlay.token('--ink-2', '#34404e'), dashed: true });
      view.invalidate();
      draw();
    },
    addItem: (uuid, version) => stage.addItem(uuid, version),
    stage, dispose() { clearInterval(watch); close(); card.remove(); stage.dispose(); },
  };
}
