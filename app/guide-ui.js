/* SPDX-License-Identifier: Apache-2.0 */
/**
 * guide-ui.js: modelcraft.js's 10 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountGuide(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { guideStep, GUIDE_STEPS } from './firstmodel.js';
import { el } from './ui-util.js';
import { connected } from './model.js';

export function mountGuide(ctx) {
  const { ST, ui, model, host, blender, kb, print, setTool, hideHint, closeMenus, openPrintTool, print3d, focusView, confirmDiscard, root } = ctx;

  // ---- the guided first model (0.6 LC.21, firstmodel.js): a card over the view; each step is read from the model, so any
  // way of doing it counts and Undo steps back. Opened from the Start modeling card or Views › Guided first model. ----
  const guideBox = root.querySelector('[data-guide]');
  ST.guideOn = false; ST.guideAt = -1; ST.guideVer = -1;
  function syncGuide(force) {
    if (!ST.guideOn || !guideBox) return;
    if (!force && ST.guideVer === model.version && ST.guideAt >= 0) return;
    ST.guideVer = model.version;
    const step = guideStep(model, { ready: ST.printReady === model.version });
    if (step === ST.guideAt && !force) return;
    ST.guideAt = step;
    const name = GUIDE_STEPS[step] || 'done';
    const K = blender() ? { face: 'B', solid: 'E', group: 'Ctrl+G' } : { face: 'R', solid: 'P', group: 'Shift+G' };
    const act = (label, fn) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { guideAct: name }, onclick: fn }, label);
    const actions = {
      face: () => act(ctx.t('app.guide.tool'), () => { setTool('rect'); ui.over.focus({ preventScroll: true }); }),
      solid: () => act(ctx.t('app.guide.tool'), () => { setTool('push'); ui.over.focus({ preventScroll: true }); }),
      group: () => act(ctx.t('app.guide.select'), () => {
        host.openContext([]);
        const d = model.root, f = [...d.faces.keys()][0];
        host.setSel(f === undefined ? [] : connected(d, [{ t: 'f', id: f }]));
        ui.over.focus({ preventScroll: true });
      }),
      print: () => act(ctx.t('app.guide.check'), () => print3d()),
      done: () => act(ctx.t('app.guide.done'), () => closeGuide()),
    };
    guideBox.replaceChildren(
      el('div', { className: 'mc-guide-top' },
        el('p', { className: 'mc-guide-step', dataset: { guideStep: String(step) } }, step < GUIDE_STEPS.length ? ctx.t('app.guide.step', { n: step + 1, total: GUIDE_STEPS.length }) : ctx.t('app.guide.title')),
        el('button', { type: 'button', className: 'mc-linkbtn', dataset: { guideClose: '' }, title: ctx.t('app.guide.close'), 'aria-label': ctx.t('app.guide.close'), onclick: closeGuide }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      el('h2', { className: 'mc-guide-h', id: 'mc-guide-h' }, ctx.t('app.guide.' + name + '.h')),
      el('p', {}, ...ctx.lx('app.guide.' + name + '.body', { key: kb(K[name] || ''), eg: kb(name === 'face' ? '40mm,30mm' : '20mm'), enter: kb('Enter') })),
      el('ol', { className: 'mc-guide-list' }, ...GUIDE_STEPS.map((k, i) => el('li', { className: i < step ? 'is-done' : i === step ? 'is-now' : '' }, ctx.t('app.guide.' + k + '.short')))),
      el('div', { className: 'mc-actions' }, actions[name]()));
    if (step > 0 && step < GUIDE_STEPS.length) print(ctx.t('app.guide.next', { step: ctx.t('app.guide.' + name + '.short') }));
  }
  function openGuide(auto) {
    closeMenus(); if (auto !== true) hideHint();   // 2026-11-12: the tour that starts by itself leaves the start card (and its sample button) up
    ST.printTools?.close();   // 0.7 LC.21: one card over the view at a time
    ST.guideOn = true; ST.guideAt = -1; guideBox.hidden = false;
    syncGuide(true);
    if (auto !== true) guideBox.querySelector('[data-guide-act]')?.focus({ preventScroll: true });   // started by itself: the focus stays where it is
  }
  // 0.7: it is also the first-model tour — it starts by itself the first time ModelCraft opens with nothing in it, unless this
  // app's switch (Settings › ModelCraft, modelcraft.tour.auto) or every app's (Settings › Global, cc-tours) is off. Closing it
  // in any way counts as having run (modelcraft.tour = 'done' | 'skipped'), as CadCraft's tour does.
  const TOUR_KEY = 'modelcraft.tour', TOUR_AUTO_KEY = 'modelcraft.tour.auto', TOURS_KEY = 'cc-tours';
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const lsSet = (k, v) => { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch { /* private window */ } };
  function closeGuide() {
    ST.guideOn = false; guideBox.hidden = true;
    lsSet(TOUR_KEY, ST.guideAt >= GUIDE_STEPS.length ? 'done' : 'skipped');
    focusView();
  }
  // 2026-11-12: "Try a sample file" on the start card (and in Ctrl+K once the card is closed): opens the bundled house through the real openFile path
  async function openSample() {
    try {
      if (!(await confirmDiscard())) return;
      const r = await fetch(new URL('./samples/modelcraft-house.modelcraft', import.meta.url));
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const text = await r.text();
      await ctx.openFile({ name: 'modelcraft-house.modelcraft', size: text.length, text: async () => text });
    } catch (err) { print(ctx.t('app.open.failed', { error: err.message })); }
  }
  root.querySelectorAll('[data-hint-sample]').forEach((b) => b.addEventListener('click', openSample));
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'modelcraft-sample', label: ctx.t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }
  root.querySelectorAll('[data-guide-open]').forEach((b) => b.addEventListener('click', () => openGuide()));
  setTimeout(() => {
    const d = model.root, empty = !(d.edges.size || d.faces.size || d.insts.size || model.dims.size || model.guides.size);
    if (!ST.guideOn && empty && !lsGet(TOUR_KEY) && lsGet(TOUR_AUTO_KEY) !== 'off' && lsGet(TOURS_KEY) !== 'off') openGuide(true);
  }, 1500);
  {
    const sd = document.querySelector('[data-app-settings]'), auto = sd?.querySelector('[data-tour-auto]');
    sd?.querySelector('[data-set-tour]')?.addEventListener('click', () => { sd.close?.(); openGuide(); });
    if (auto) {
      auto.checked = lsGet(TOUR_AUTO_KEY) !== 'off';
      auto.addEventListener('change', () => lsSet(TOUR_AUTO_KEY, auto.checked ? null : 'off'));
      sd.addEventListener('cc-settings-reset', () => { lsSet(TOUR_AUTO_KEY, null); auto.checked = true; });
    }
  }
  setInterval(() => syncGuide(false), 400);
  window.modelcraft.guide = { open: openGuide, close: closeGuide, step: () => (ST.guideOn ? ST.guideAt : null) };
  window.modelcraft.printTool = { open: openPrintTool, close: () => ST.printTools?.close(), current: () => ST.printTools?.current() || null };   // 0.7 LC.21 (tests)

  return { guideBox, syncGuide, closeGuide };
}
