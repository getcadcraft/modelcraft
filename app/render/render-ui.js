/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-ui.js — the Render dialog (0.5 RC.11 (a)), shared by ModelCraft and BimCraft: canonical in modelcraft/dev/render/,
 * byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs). Words through t() with keys `render.*`; the
 * sync script copies those keys from ModelCraft's lang/en.json into BimCraft's.
 *
 *   openRenderDialog({
 *     scene(settings) → scene        the app's adapter (render-mc.js / render-bim.js); called at each Render
 *     viewSize() → {w, h}            the 3D view in CSS pixels (the "view" sizes)
 *     colors() → [{key, faces, look?}]   the colours on screen ('default' = unpainted) and their own look, for Materials
 *     modelSun() → {month, day, hour, src, lat} | null   the base date and time; src 'style' (ModelCraft's Style › sun),
 *                                    'site' (the file's site latitude) or 'assumed' (no location in the file)
 *     settings, save(settings)       the remembered settings (looks.js cleanSettings) and where to keep changes
 *     download(blob, name), fileBase() → string, onClose()
 *     lamps() → [{key, name, lumens, on}], setLamp(key, {on | lumens})   optional: the model's lamps listed to switch and dim
 *                                    (BimCraft's light fixtures; ModelCraft edits its lamps in its own Lights panel)
 *     parent                         where the dialog goes (the app's root, so its own key handling sees a dialog open)
 *   }) → {dialog, close()}
 *
 * A modal <dialog>: settings on the right, the picture on the left, filling in as the passes add up. Render ⇄ Stop
 * (Stop keeps the picture so far); Save PNG downloads the last picture. Nothing here touches the model.
 */
import { t, locale } from "../i18n.js";
import { QUALITY, SIZES, SKIES, LOOK_KEYS, MODES, MINUTES, cleanSettings, sizeFor } from "./looks.js";
import { renderStill, webglInfo } from "./render-core.js";

const CSS = `
.cc-render { width: min(64rem, calc(100vw - 2rem)); max-height: calc(100vh - 2rem); padding: 0; color: var(--ink); background: var(--sheet-2);
  border: var(--pen-2, 1.5px) solid var(--ink); border-radius: var(--radius, 2px); }
.cc-render::backdrop { background: color-mix(in srgb, var(--ink) 35%, transparent); }
.cc-render-head, .cc-render-foot { display: flex; align-items: center; gap: .75rem; padding: .6rem 1rem; }
.cc-render-head { border-bottom: var(--pen-1, 1px) solid var(--line); }
.cc-render-head h2 { margin: 0; font-size: var(--fs-md, 1.1rem); flex: 1; }
.cc-render-foot { border-top: var(--pen-1, 1px) solid var(--line); flex-wrap: wrap; }
.cc-render-status { flex: 1; min-width: 12rem; font-size: var(--fs-sm, .875rem); color: var(--ink-2); }
.cc-render-body { display: grid; grid-template-columns: minmax(0, 1fr) 18rem; gap: 1rem; padding: 1rem; overflow: auto; max-height: calc(100vh - 9rem); }
.cc-render-pic { display: grid; place-items: center; min-height: 14rem; background: var(--sheet); border: var(--pen-1, 1px) solid var(--line); }
.cc-render-pic canvas, .cc-render-pic img { display: block; max-width: 100%; max-height: calc(100vh - 12rem); height: auto; }
.cc-render-pic p { margin: 1rem; color: var(--ink-2); text-align: center; }
.cc-render-form { display: grid; gap: .7rem; align-content: start; font-size: var(--fs-sm, .875rem); }
.cc-render-form label { display: grid; gap: .2rem; }
.cc-render-form .cc-render-check { display: flex; gap: .45rem; align-items: center; }
.cc-render-form fieldset { border: 0; padding: 0; margin: 0; display: grid; gap: .4rem; }
.cc-render-form legend { float: none; width: auto; font-size: inherit; font-weight: 600; line-height: inherit; padding: 0; margin-bottom: .2rem; }
.cc-render-row { display: flex; gap: .5rem; align-items: center; }
.cc-render-row > * { flex: 1 1 0; min-width: 0; }
.cc-render-date { display: grid; grid-template-columns: minmax(0, 1fr) 4rem; gap: .5rem; }
.cc-render-date input[type=time] { grid-column: 1 / -1; }
.cc-render .form-control { background-color: var(--sheet-2); color: var(--ink); border-color: var(--line); }
.cc-render .form-control:disabled, .cc-render select:disabled { background-color: var(--sheet); color: var(--ink-2); border-color: var(--line); opacity: 1; }
.cc-render-note { margin: 0; color: var(--ink-2); font-size: var(--fs-sm, .875rem); }
.cc-render-looks { display: grid; gap: .35rem; max-height: 14rem; overflow: auto; padding-right: .25rem; }
.cc-render-look { display: grid; grid-template-columns: 1.25rem minmax(0, 1fr) 7.5rem; gap: .45rem; align-items: center; }
.cc-render-swatch { width: 1.25rem; height: 1.25rem; border: var(--pen-1, 1px) solid var(--ink); }
.cc-render-look span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cc-render input[type=range] { width: 100%; }
@media (max-width: 760px) { .cc-render-body { grid-template-columns: 1fr; } }
`;

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v;
    else if (k === 'dataset') Object.assign(e.dataset, v);
    else if (k === 'style') e.style.cssText = v;
    else if (k in e && typeof v !== 'string') e[k] = v;
    else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return e;
}

/** The dialogs' styles (this one and the video dialog, video-ui.js), added to the page once. */
export function injectCss() {
  if (document.getElementById('cc-render-css')) return;
  const s = document.createElement('style');
  s.id = 'cc-render-css';
  s.textContent = CSS;
  document.head.append(s);
}

const pad = (n) => String(n).padStart(2, '0');
const hourText = (h) => pad(Math.floor(h)) + ':' + pad(Math.round((h % 1) * 60) % 60);

export function openRenderDialog(o) {
  injectCss();
  let settings = cleanSettings(o.settings);
  const gl = webglInfo();
  let running = null, lastBlob = null, lastPic = null;
  const msun = o.modelSun ? o.modelSun() : null;
  const loc = (() => { try { return locale(); } catch { return 'en'; } })();
  const monthName = (m) => { try { return new Date(2026, m - 1, 1).toLocaleDateString(loc === 'en-XA' ? 'en' : loc, { month: 'long' }); } catch { return String(m); } };

  const opt = (value, label, cur) => el('option', { value, selected: value === cur }, label);
  const v = o.viewSize();
  const sizeLabel = (k) => {
    const z = sizeFor({ size: k }, v.w, v.h);
    return t('render.size.' + k, { w: z.w, h: z.h });
  };
  const sizeSel = el('select', { className: 'select-cc', dataset: { renderSize: '' } }, Object.keys(SIZES).map((k) => opt(k, sizeLabel(k), settings.size)));
  const modeSel = el('select', { className: 'select-cc', dataset: { renderMode: '' } }, MODES.map((k) => opt(k, t('render.mode.' + k), settings.mode)));
  const minSel = el('select', { className: 'select-cc', dataset: { renderMinutes: '' } }, MINUTES.map((k) => opt(String(k), k ? t('render.minutes', { n: k }) : t('render.minutes.none'), String(settings.minutes))));
  const minRow = el('label', { dataset: { renderMinutesRow: '' } }, t('render.limit'), minSel);
  const modeNote = el('p', { className: 'cc-render-note', dataset: { renderModeNote: '' } }, '');
  const qualSel = el('select', { className: 'select-cc', dataset: { renderQuality: '' } }, Object.keys(QUALITY).map((k) => opt(k, t('render.quality.' + k, { n: QUALITY[k] }), settings.quality)));
  const skySel = el('select', { className: 'select-cc', dataset: { renderSky: '' } }, Object.keys(SKIES).map((k) => opt(k, t('render.sky.' + k), settings.sky)));
  const expIn = el('input', { type: 'range', min: '-3', max: '3', step: '0.5', value: String(settings.exposure), dataset: { renderExposure: '' } });
  const expOut = el('output', {}, '');
  const edgesIn = el('input', { type: 'checkbox', checked: settings.edges, dataset: { renderEdges: '' } });
  const groundIn = el('input', { type: 'checkbox', checked: settings.ground, dataset: { renderGround: '' } });

  // the sun: the model's own date and time, or this render's
  let sunFs = null, ownIn = null, monSel = null, dayIn = null, timeIn = null, sunNote = null;
  if (msun) {
    const cur = settings.sun || msun;
    ownIn = el('input', { type: 'checkbox', checked: !!settings.sun, dataset: { renderSunOwn: '' } });
    monSel = el('select', { className: 'select-cc', 'aria-label': t('render.sun.month') }, Array.from({ length: 12 }, (_, i) => opt(String(i + 1), monthName(i + 1), String(cur.month))));
    dayIn = el('input', { type: 'number', min: '1', max: '31', step: '1', value: String(cur.day), 'aria-label': t('render.sun.day'), className: 'form-control form-control-sm' });
    timeIn = el('input', { type: 'time', step: '900', value: hourText(cur.hour), 'aria-label': t('render.sun.time'), className: 'form-control form-control-sm', dataset: { renderSunTime: '' } });
    const sunKey = msun.src === 'site' ? 'render.sun.site' : msun.src === 'assumed' ? 'render.sun.assumed' : 'render.sun.model';
    sunNote = el('p', { className: 'cc-render-note', dataset: { renderSunNote: '' } }, t(sunKey, { date: monthName(msun.month) + ' ' + msun.day, time: hourText(msun.hour), lat: Math.round((msun.lat ?? 0) * 10) / 10 }));
    sunFs = el('fieldset', {}, el('legend', {}, t('render.sun')), sunNote,
      el('label', { className: 'cc-render-check' }, ownIn, t('render.sun.own')),
      el('div', { className: 'cc-render-date' }, monSel, dayIn, timeIn));
  }

  // materials: a look per colour on screen
  const lookSel = new Map();
  const colors = o.colors ? o.colors().slice(0, 200) : [];
  const ownLook = new Map(colors.map((c) => [c.key, LOOK_KEYS.includes(c.look) ? c.look : 'matte']));
  const looksBox = el('div', { className: 'cc-render-looks', dataset: { renderLooks: '' } }, colors.map(({ key, faces }) => {
    const sel = el('select', { className: 'select-cc', 'aria-label': t('render.look.for', { color: key === 'default' ? t('render.default') : key }), dataset: { renderLook: key } },
      LOOK_KEYS.map((k) => opt(k, t('render.look.' + k), settings.looks[key] || ownLook.get(key))));
    lookSel.set(key, sel);
    return el('div', { className: 'cc-render-look' },
      el('span', { className: 'cc-render-swatch', style: 'background:' + (key === 'default' ? 'var(--sheet)' : key) }),
      el('span', { title: t('render.faces', { n: faces }) }, key === 'default' ? t('render.default') : key),
      sel);
  }));

  // the model's lamps (when the app lists them): switch each on or off and set its brightness; saved in the model
  const lamps = o.lamps ? o.lamps().slice(0, 100) : [];
  const lampsFs = lamps.length ? el('fieldset', { dataset: { renderLamps: '' } }, el('legend', {}, t('render.lamps')), el('p', { className: 'cc-render-note' }, t('render.lamps.hint')),
    el('div', { className: 'cc-render-looks' }, lamps.map((L) => {
      const on = el('input', { type: 'checkbox', checked: L.on, 'aria-label': t('render.lamp.on', { name: L.name }), dataset: { renderLampOn: String(L.key) } });
      const lm = el('input', { type: 'number', min: '1', max: '200000', step: '50', value: String(L.lumens), className: 'form-control form-control-sm', 'aria-label': t('render.lamp.lumens', { name: L.name }), dataset: { renderLampLumens: String(L.key) } });
      on.addEventListener('change', () => o.setLamp(L.key, { on: on.checked }));
      lm.addEventListener('change', () => { const v = Number(lm.value); if (Number.isFinite(v) && v > 0) o.setLamp(L.key, { lumens: v }); });
      return el('div', { className: 'cc-render-look' }, on, el('span', { title: L.name }, L.name), lm);
    }))) : null;
  const pic = el('div', { className: 'cc-render-pic', dataset: { renderPic: '' } }, el('p', {}, gl.ok ? t('render.placeholder') : t('render.nogl')));
  const status = el('p', { className: 'cc-render-status', role: 'status', dataset: { renderStatus: '' } }, '');
  const goBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { renderGo: '' }, disabled: !gl.ok }, t('render.go'));
  const saveBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderSave: '' }, disabled: true }, t('render.save'));
  const closeBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderClose: '' } }, t('render.close'));

  const form = el('form', { className: 'cc-render-form', method: 'dialog' },
    el('label', {}, t('render.mode'), modeSel),
    modeNote,
    minRow,
    el('label', {}, t('render.size'), sizeSel),
    el('label', {}, t('render.quality'), qualSel),
    el('label', {}, t('render.sky'), skySel),
    sunFs,
    el('label', {}, el('span', {}, t('render.exposure'), ' ', expOut), expIn),
    el('label', { className: 'cc-render-check' }, groundIn, t('render.ground')),
    el('label', { className: 'cc-render-check' }, edgesIn, t('render.edges')),
    colors.length ? el('fieldset', {}, el('legend', {}, t('render.looks')), el('p', { className: 'cc-render-note' }, t('render.looks.hint')), looksBox) : null,
    lampsFs);
  form.addEventListener('submit', (e) => e.preventDefault());
  const dlg = el('dialog', { className: 'cc-render', 'aria-labelledby': 'cc-render-h', dataset: { renderDialog: '' } },
    el('div', { className: 'cc-render-head' }, el('h2', { id: 'cc-render-h' }, t('render.title'))),
    el('div', { className: 'cc-render-body' }, pic, form),
    el('div', { className: 'cc-render-foot' }, status, goBtn, saveBtn, closeBtn));

  const readForm = () => {
    const s = {
      mode: modeSel.value, minutes: Number(minSel.value),
      size: sizeSel.value, quality: qualSel.value, sky: skySel.value, exposure: Number(expIn.value), edges: edgesIn.checked, ground: groundIn.checked,
      sun: null, looks: {},
    };
    if (ownIn && ownIn.checked) {
      const [hh, mm] = (timeIn.value || '12:00').split(':').map(Number);
      s.sun = { month: Number(monSel.value), day: Number(dayIn.value), hour: (hh || 0) + (mm || 0) / 60 };
    }
    for (const [k, sel] of lookSel) if (sel.value !== ownLook.get(k)) s.looks[k] = sel.value;
    // keep looks of colours not on screen now (hidden tags, other scenes)
    for (const [k, val] of Object.entries(settings.looks)) if (!lookSel.has(k)) s.looks[k] = val;
    return cleanSettings(s);
  };
  const syncForm = () => {
    const hq = modeSel.value === 'hq';
    minRow.hidden = !hq;
    modeNote.textContent = t(hq ? 'render.mode.hq.note' : 'render.mode.fast.note');
    edgesIn.closest('label').hidden = hq;
    const ev = Number(expIn.value);
    expOut.value = (ev > 0 ? '+' : '') + ev;
    if (ownIn) for (const x of [monSel, dayIn, timeIn]) x.disabled = !ownIn.checked || !!running;
  };
  form.addEventListener('input', () => { syncForm(); settings = readForm(); o.save?.(settings); });
  form.addEventListener('change', () => { syncForm(); settings = readForm(); o.save?.(settings); });
  syncForm();

  const setRunning = (on) => {
    for (const x of form.querySelectorAll('input, select')) x.disabled = on;
    goBtn.textContent = on ? t('render.stop') : t('render.go');
    goBtn.className = (on ? 'btn-line' : 'btn-plot') + ' btn-sm-cc';
    saveBtn.disabled = on || !lastBlob;
    syncForm();
  };

  async function go() {
    if (running) { running.abort(); return; }
    settings = readForm();
    o.save?.(settings);
    const vs = o.viewSize(), { w, h } = sizeFor(settings, vs.w, vs.h);
    let scene;
    try { scene = o.scene(settings); } catch (e) { status.textContent = t('render.failed', { error: String(e?.message || e) }); return; }
    if (!scene.items.some((it) => !it.lines)) { scene.dispose?.(); status.textContent = t('render.empty'); return; }
    running = new AbortController();
    setRunning(true);
    const n = QUALITY[settings.quality], hq = settings.mode === 'hq';
    status.textContent = hq ? t('render.hq.preparing') : t('render.progress', { done: 0, n });
    let shown = null;
    try {
      const onProgress = (f, canvas) => {
        if (!shown) { shown = el('canvas', { width: w, height: h, 'aria-label': t('render.alt'), role: 'img' }); pic.replaceChildren(shown); }
        shown.getContext('2d').drawImage(canvas, 0, 0);
        status.textContent = t(hq ? 'render.hq.progress' : 'render.progress', { done: Math.round(f * n), n });
      };
      let r;
      if (hq) {
        let PTm;
        try { PTm = await import('./render-pt.js'); } catch (e) { throw new Error(t('render.hq.load', { error: String(e?.message || e) })); }
        r = await PTm.pathTraceStill(scene, settings, { w, h, signal: running.signal, onProgress, seconds: settings.minutes * 60 });
      } else r = await renderStill(scene, settings, { w, h, signal: running.signal, onProgress });
      if (r.blob) {
        lastBlob = r.blob;
        if (lastPic) URL.revokeObjectURL(lastPic);
        lastPic = URL.createObjectURL(r.blob);
        pic.replaceChildren(el('img', { src: lastPic, alt: t('render.alt'), width: String(r.w), height: String(r.h), dataset: { renderImage: '' } }));
      }
      const s = (r.ms / 1000).toFixed(1);
      status.textContent = (r.budget ? t('render.budget', { passes: r.passes, s })
        : r.stopped ? (r.passes ? t(hq ? 'render.hq.stopped' : 'render.stopped', { passes: r.passes, s }) : t('render.stopped.none'))
        : t(hq ? 'render.hq.done' : 'render.done', { w: r.w, h: r.h, passes: r.passes, s })) + (scene.sun ? '' : ' ' + t('render.sun.down'));
    } catch (e) {
      status.textContent = t('render.failed', { error: String(e?.message || e) });
    } finally {
      scene.dispose?.();
      running = null;
      setRunning(false);
    }
  }
  goBtn.addEventListener('click', go);
  saveBtn.addEventListener('click', () => {
    if (!lastBlob) return;
    const name = (o.fileBase ? o.fileBase() : 'render') + ' render.png';
    o.download(lastBlob, name);
    status.textContent = t('render.saved', { file: name });
  });
  const close = () => { if (running) running.abort(); if (dlg.open) dlg.close(); };
  closeBtn.addEventListener('click', close);
  // Esc while rendering stops the render and keeps the dialog (handled on keydown: a prevented cancel is not reliable)
  dlg.addEventListener('keydown', (e) => { if (e.key === 'Escape' && running) { e.preventDefault(); e.stopPropagation(); running.abort(); } });
  dlg.addEventListener('cancel', (e) => { if (running) { e.preventDefault(); running.abort(); } });
  dlg.addEventListener('close', () => { if (lastPic) URL.revokeObjectURL(lastPic); dlg.remove(); o.onClose?.(); });
  (o.parent || document.body).append(dlg);
  dlg.showModal();
  (gl.ok ? goBtn : closeBtn).focus();
  return { dialog: dlg, close };
}
