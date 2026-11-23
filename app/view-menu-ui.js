/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view-menu-ui.js: modelcraft.js's 16 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountViewMenu(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { readTemplate } from './model-info.js';
import * as i18n from "./i18n.js";
import { sunPosition } from './sun.js';
import { cleanScene } from './model.js';

export function mountViewMenu(ctx) {
  const { ST, $, ui, model, cam, MC_UNITS, host, view, viewports, print, afterHistory, syncSectionMenu, closeMenus, renderScenes, root } = ctx;

  // ---- views ----
  root.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => {
    closeMenus();
    cam.standard(b.dataset.view, model.bbox() || { min: [-5, -5, 0], max: [5, 5, 3] });
    view.invalidate();
    print(ctx.t('app.view.done', { view: b.textContent }));
  }));
  const perspBtn = $('[data-persp]');
  perspBtn.addEventListener('click', () => {
    cam.persp = !cam.persp;
    perspBtn.setAttribute('aria-checked', String(cam.persp));
    print(cam.persp ? ctx.t('app.persp.on') : ctx.t('app.persp.off'));
    view.invalidate();
  });
  const views4Btn = $('[data-views4]');
  views4Btn?.addEventListener('click', () => { closeMenus(); const now = viewports.toggle(); views4Btn.setAttribute('aria-checked', String(now === 'four')); print(ctx.t(now === 'four' ? 'app.views4.on' : 'app.views4.off')); });
  const presentBtn = $('[data-present]');
  function setPresentation(on) {
    ST.presentation = !!on;
    presentBtn.setAttribute('aria-checked', String(ST.presentation));
    root.classList.toggle('is-presenting', ST.presentation);
    print(ST.presentation ? ctx.t('app.present.on') : ctx.t('app.present.off'));
    view.invalidate();
  }
  presentBtn.addEventListener('click', () => { closeMenus(); setPresentation(!ST.presentation); });
  // section planes and cuts on or off (0.4 M7): kept in the file, one undo step each
  const secPlanesBtn = $('[data-sec-planes]'), secCutsBtn = $('[data-sec-cuts]');

  function setSectionView(key, on) {
    model.change(ctx.t(on ? 'app.undo.sec_show' : 'app.undo.sec_hide'), (m) => { m.sectionView[key] = on; }, []);
    if (key === 'planes' && !on) host.setSel(host.sel.filter((s) => s.t !== 's'));
    print(ctx.t('app.sec.' + key + (on ? '.on' : '.off')));
    syncSectionMenu(); afterHistory();
  }
  secPlanesBtn.addEventListener('click', () => { closeMenus(); setSectionView('planes', !model.sectionView.planes); });
  secCutsBtn.addEventListener('click', () => { closeMenus(); setSectionView('cuts', !model.sectionView.cuts); });
  // 0.7.1 MC-KEYS-COMMANDS: X-ray (the Faces style, back to the one you had), Hide rest of model (while a group or component
  // is open, only it is drawn) and Hidden objects (hidden groups and components drawn faded; still not picked or exported).
  // The last two are how you look at the model now, not part of the file (like the presentation view).
  const xrayBtn = $('[data-xray]'), restBtn = $('[data-hide-rest]'), hiddenBtn = $('[data-show-hidden]');
  ST.faceModeBefore = 'shaded';
  function syncViewMenu() {   // looked up each time: styleToUi may run before this part of the setup
    root.querySelector('[data-xray]')?.setAttribute('aria-checked', String(view.style.mode === 'xray'));
    root.querySelector('[data-hide-rest]')?.setAttribute('aria-checked', String(ST.hideRest));
    root.querySelector('[data-show-hidden]')?.setAttribute('aria-checked', String(ST.showHidden));
  }
  function toggleXray() {
    const on = view.style.mode !== 'xray';
    if (on) ST.faceModeBefore = view.style.mode;
    ui.mode.value = on ? 'xray' : (ST.faceModeBefore === 'xray' ? 'shaded' : ST.faceModeBefore);
    ui.mode.dispatchEvent(new Event('change'));   // the Style panel's own path (and its X-ray message)
    if (!on) print(ctx.t('app.view.xray.off'));
  }
  xrayBtn?.addEventListener('click', () => { closeMenus(); toggleXray(); });
  restBtn?.addEventListener('click', () => { closeMenus(); ST.hideRest = !ST.hideRest; syncViewMenu(); print(ctx.t(ST.hideRest ? 'app.view.rest.on' : 'app.view.rest.off')); view.invalidate(); });
  hiddenBtn?.addEventListener('click', () => { closeMenus(); ST.showHidden = !ST.showHidden; syncViewMenu(); print(ctx.t(ST.showHidden ? 'app.view.hidden.on' : 'app.view.hidden.off')); view.invalidate(); });
  ui.mode.addEventListener('change', () => queueMicrotask(syncViewMenu));   // after the Style panel's own handler set view.style

  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.mc-menu[open]')) if (!d.contains(e.target)) d.open = false; });

  // ---- style ----
  /** A new model's display and location: Preferences › New models (0.7.1 71.13), else the built-in start. */
  function startStyle() {
    const tpl = readTemplate(MC_UNITS);
    view.style = { ...view.style, mode: 'shaded', edges: true, shadows: false, ...(tpl?.style || {}), ...(tpl?.sun ? { sun: { ...view.style.sun, ...tpl.sun } } : {}) };
  }
  function styleToUi() {
    const st = view.style;
    ui.mode.value = st.mode; ui.edges.checked = st.edges; ui.shadows.checked = st.shadows;
    syncViewMenu();   // 0.7.1: Views › X-ray follows a scene's style
    ui.sun.disabled = !st.shadows;
    ui.sunMonth.value = String(st.sun.month); ui.sunDay.value = String(st.sun.day); ui.sunHour.value = String(st.sun.hour);
    ui.sunLat.value = String(st.sun.lat); ui.sunLon.value = String(st.sun.lon); ui.sunTz.value = String(st.sun.tz);
    sunText();
  }
  function sunText() {
    const st = view.style.sun, h = Math.floor(st.hour), mi = Math.round((st.hour - h) * 60);
    // the time in the page's language (12 or 24 hours as that language writes it)
    try { ui.sunHourOut.textContent = new Intl.DateTimeFormat(i18n.locale() === 'en-XA' ? 'en' : i18n.locale(), { hour: 'numeric', minute: '2-digit' }).format(new Date(2000, 0, 1, h, mi)); }
    catch { ui.sunHourOut.textContent = `${h}:${String(mi).padStart(2, '0')}`; }
    const s = sunPosition(st);
    ui.sunInfo.textContent = s.up ? ctx.t('app.sun.info', { alt: s.altitude.toFixed(0), az: s.azimuth.toFixed(0) }) : ctx.t('app.sun.down');
  }
  function uiToStyle() {
    const n = (x, lo, hi, d) => { const v = parseFloat(x); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
    const st = view.style;
    view.style = {
      mode: ui.mode.value, edges: ui.edges.checked, shadows: ui.shadows.checked,
      sun: {
        month: n(ui.sunMonth.value, 1, 12, st.sun.month) | 0, day: n(ui.sunDay.value, 1, 31, st.sun.day) | 0, hour: n(ui.sunHour.value, 0, 23.99, st.sun.hour),
        lat: n(ui.sunLat.value, -90, 90, st.sun.lat), lon: n(ui.sunLon.value, -180, 180, st.sun.lon), tz: n(ui.sunTz.value, -14, 14, st.sun.tz),
      },
    };
    ui.sun.disabled = !view.style.shadows;
    sunText();
    view.invalidate();
  }
  for (const c of [ui.mode, ui.edges, ui.shadows, ui.sunMonth, ui.sunDay, ui.sunHour, ui.sunLat, ui.sunLon, ui.sunTz]) {
    c.addEventListener('input', uiToStyle);
    c.addEventListener('change', uiToStyle);
  }
  // 0.7.1 FIX-071-XRAY: Faces picked with the mouse hands the keys back to the view. Left focused, the select took the
  // next arrow key or "x" (orbiting by keys stepped Wire → X-ray, "x" jumped to it) and the model went see-through.
  // A keyboard user arrowing through the list keeps the focus. Turning X-ray on says how to turn it off.
  ST.modeByPointer = false;
  ui.mode.addEventListener('pointerdown', () => { ST.modeByPointer = true; });
  ui.mode.addEventListener('keydown', () => { ST.modeByPointer = false; });
  ui.mode.addEventListener('change', () => {
    if (ui.mode.value === 'xray') print(ctx.t('app.style.xray_on'));
    if (ST.modeByPointer) { ST.modeByPointer = false; ui.over.focus({ preventScroll: true }); }
  });
  if (readTemplate(MC_UNITS)) startStyle();   // 0.7.1 71.13: Preferences › New models
  styleToUi();

  // ---- scenes ----
  $('[data-scene-add]').addEventListener('click', () => {
    const name = ctx.t('app.scene.default', { n: model.scenes.length + 1 });
    const s = cleanScene({ name, cam: cam.toJSON(), style: view.style, vis: model.captureVis() });
    model.change(ctx.t('ui.scenes.add'), (m) => { m.scenes = [...m.scenes, s]; }, []);
    ST.sceneIndex = model.scenes.length - 1;
    renderScenes();
    // 2026-11-09: with Auto-focus panel on, the Scenes section may be folded: adding a scene opens it so the new row (its Update / Lock / Rename buttons) is seen.
    try { const af = window.ccAutoFocus && window.ccAutoFocus.get('auto-modelcraft-right'); if (af) af.reveal('scenes', true); } catch { /* the fold is a convenience */ }
    print(ctx.t('app.scene.saved', { name }));
  });
  $('[data-scene-prev]').addEventListener('click', () => ctx.stepScene(-1));
  $('[data-scene-next]').addEventListener('click', () => ctx.stepScene(1));

  return { perspBtn, setPresentation, secPlanesBtn, secCutsBtn, startStyle, styleToUi };
}
