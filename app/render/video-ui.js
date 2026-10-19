/* SPDX-License-Identifier: Apache-2.0 */
/**
 * video-ui.js — the Render video dialog (0.6 LC.10; the walkthrough video, WALK, is its first use), shared by ModelCraft and
 * BimCraft: canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs).
 * Words through t() with keys `render.video.*` (copied into BimCraft's en.json by the sync script).
 *
 *   openVideoDialog({
 *     scene(settings) → scene + frameAt(t seconds) → {camera(aspect), matrices?}   the app's adapter, at each Render
 *     length() → seconds,  fps                        the animation's length and its own frame rate
 *     viewSize() → {w, h}, settings                    the view (for "the view's size") and the Render dialog's remembered
 *                                                      settings (sky, sun, materials, brightness: one look for both)
 *     video, saveVideo(v)                              this dialog's remembered choices {size, fps, quality, format}
 *     download(blob, name), fileBase() → string, parent, onClose()
 *   }) → {dialog, close()}
 *
 * Each frame is rendered by render-core's renderFrames (the fast renderer: the path tracer is far too slow for hundreds of
 * frames), then handed to video.js. Stop keeps the frames done so far: Save writes them as a shorter video.
 */
import { t } from '../i18n.js';
import { cleanSettings } from './looks.js';
import { renderFrames, webglInfo } from './render-core.js';
import { injectCss } from './render-ui.js';
import { videoSupport, createVideoSink, even } from './video.js';

export const VIDEO_SIZES = { view: null, p480: [854, 480], p720: [1280, 720], p1080: [1920, 1080] };
export const VIDEO_QUALITY = { quick: 4, draft: 16, good: 64 };
export const VIDEO_FPS = [24, 25, 30, 60];
export const VIDEO_FORMATS = ['webm', 'png'];

/** The remembered choices, checked (they come from storage or a file). */
export function cleanVideo(v, fps = 30) {
  const o = v && typeof v === 'object' ? v : {};
  return {
    size: o.size in VIDEO_SIZES ? o.size : 'p720',
    fps: VIDEO_FPS.includes(o.fps) ? o.fps : (VIDEO_FPS.includes(fps) ? fps : 30),
    quality: o.quality in VIDEO_QUALITY ? o.quality : 'draft',
    format: VIDEO_FORMATS.includes(o.format) ? o.format : 'webm',
  };
}
/** The picture size for a choice: a fixed size, or the view's own (even, at most 1920 on the long side). */
export function videoSize(size, vw, vh) {
  const f = VIDEO_SIZES[size];
  if (f) return { w: f[0], h: f[1] };
  const k = Math.min(1, 1920 / Math.max(vw, vh, 1));
  return { w: even(vw * k), h: even(vh * k) };
}

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v;
    else if (k === 'dataset') Object.assign(e.dataset, v);
    else if (k in e && typeof v !== 'string') e[k] = v;
    else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return e;
}
const secs = (s) => (s < 60 ? t('render.video.secs', { s: Math.max(1, Math.round(s)) }) : t('render.video.mins', { m: Math.round(s / 6) / 10 }));

export function openVideoDialog(o) {
  injectCss();
  const gl = webglInfo();
  let v = cleanVideo(o.video, o.fps);
  let running = null, lastBlob = null, lastExt = 'webm', canWebm = false;
  const vs = o.viewSize();
  const opt = (value, label, cur) => el('option', { value, selected: String(value) === String(cur) }, label);
  const sizeSel = el('select', { className: 'select-cc', dataset: { videoSize: '' } }, Object.keys(VIDEO_SIZES).map((k) => {
    const z = videoSize(k, vs.w, vs.h);
    return opt(k, t('render.video.size.' + k, { w: z.w, h: z.h }), v.size);
  }));
  const fpsSel = el('select', { className: 'select-cc', dataset: { videoFps: '' } }, VIDEO_FPS.map((f) => opt(String(f), t('render.video.fps.n', { n: f }), String(v.fps))));
  const qualSel = el('select', { className: 'select-cc', dataset: { videoQuality: '' } }, Object.keys(VIDEO_QUALITY).map((k) => opt(k, t('render.video.quality.' + k, { n: VIDEO_QUALITY[k] }), v.quality)));
  const fmtSel = el('select', { className: 'select-cc', dataset: { videoFormat: '' } }, VIDEO_FORMATS.map((k) => opt(k, t('render.video.format.' + k), v.format)));
  const fmtNote = el('p', { className: 'cc-render-note', dataset: { videoFormatNote: '' } }, '');
  const est = el('p', { className: 'cc-render-note', dataset: { videoEstimate: '' } }, '');
  const pic = el('div', { className: 'cc-render-pic', dataset: { videoPic: '' } }, el('p', {}, gl.ok ? t('render.video.placeholder') : t('render.nogl')));
  const status = el('p', { className: 'cc-render-status', role: 'status', dataset: { videoStatus: '' } }, '');
  const goBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { videoGo: '' }, disabled: !gl.ok }, t('render.video.go'));
  const saveBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { videoSave: '' }, disabled: true }, t('render.video.save'));
  const closeBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { videoClose: '' } }, t('render.close'));
  const form = el('form', { className: 'cc-render-form', method: 'dialog' },
    el('label', {}, t('render.video.size'), sizeSel),
    el('label', {}, t('render.video.fps'), fpsSel),
    el('label', {}, t('render.video.quality'), qualSel),
    el('label', {}, t('render.video.format'), fmtSel), fmtNote,
    est,
    el('p', { className: 'cc-render-note' }, t('render.video.look')));
  form.addEventListener('submit', (e) => e.preventDefault());
  const dlg = el('dialog', { className: 'cc-render', 'aria-labelledby': 'cc-video-h', dataset: { videoDialog: '' } },
    el('div', { className: 'cc-render-head' }, el('h2', { id: 'cc-video-h' }, t('render.video.title'))),
    el('div', { className: 'cc-render-body' }, pic, form),
    el('div', { className: 'cc-render-foot' }, status, goBtn, saveBtn, closeBtn));

  const read = () => cleanVideo({ size: sizeSel.value, fps: Number(fpsSel.value), quality: qualSel.value, format: fmtSel.value }, o.fps);
  const sync = () => {
    v = read();
    const n = Math.max(1, Math.round(o.length() * v.fps) + 1), z = videoSize(v.size, vs.w, vs.h);
    est.textContent = t('render.video.estimate', { n, s: Math.round(o.length() * 10) / 10, w: z.w, h: z.h, passes: VIDEO_QUALITY[v.quality] });
    fmtNote.textContent = v.format === 'png' ? t('render.video.format.png.note') : canWebm ? '' : t('render.video.format.none');
    if (!running) goBtn.disabled = !gl.ok || (v.format === 'webm' && !canWebm);
  };
  form.addEventListener('change', () => { sync(); o.saveVideo?.(v); });
  videoSupport(1280, 720, 30).then((s) => { canWebm = !!s.webm; sync(); });
  sync();

  const setRunning = (on) => {
    for (const x of form.querySelectorAll('select')) x.disabled = on;
    goBtn.textContent = on ? t('render.stop') : t('render.video.go');
    goBtn.className = (on ? 'btn-line' : 'btn-plot') + ' btn-sm-cc';
    saveBtn.disabled = on || !lastBlob;
    if (!on) sync();
  };

  async function go() {
    if (running) { running.abort(); return; }
    v = read();
    o.saveVideo?.(v);
    const settings = cleanSettings(o.settings);
    const { w, h } = videoSize(v.size, vs.w, vs.h);
    const L = o.length(), n = Math.max(1, Math.round(L * v.fps) + 1), passes = VIDEO_QUALITY[v.quality];
    let scene;
    try { scene = o.scene(settings); } catch (e) { status.textContent = t('render.failed', { error: String(e?.message || e) }); return; }
    if (!scene.items.some((it) => !it.lines)) { scene.dispose?.(); status.textContent = t('render.empty'); return; }
    let sink;
    try { sink = await createVideoSink({ kind: v.format, w, h, fps: v.fps }); }
    catch { scene.dispose?.(); status.textContent = t('render.video.format.none'); return; }
    running = new AbortController();
    lastBlob = null;
    setRunning(true);
    const shown = el('canvas', { width: w, height: h, role: 'img', 'aria-label': t('render.video.alt') });
    pic.replaceChildren(shown);
    const t0 = performance.now();
    let made = 0;
    status.textContent = t('render.video.progress', { i: 1, n, left: '…' });
    try {
      const r = await renderFrames(scene, settings, {
        w, h, frames: n, passes, signal: running.signal,
        frameAt: (i) => scene.frameAt(Math.min(L, i / v.fps)),
        onFrame: async (i, canvas) => {
          shown.getContext('2d').drawImage(canvas, 0, 0, w, h);
          await sink.add(canvas, i);
          made = i + 1;
          const per = (performance.now() - t0) / made / 1000;
          status.textContent = t('render.video.progress', { i: Math.min(n, made + 1), n, left: secs(per * (n - made)) });
        },
      });
      if (made) {
        const out = await sink.finish();
        lastBlob = out.blob; lastExt = out.ext;
        const s = Math.round((performance.now() - t0) / 100) / 10;
        status.textContent = r.stopped ? t('render.video.stopped', { frames: made, n, s }) : t('render.video.done', { frames: made, w, h, s });
      } else { sink.abort(); status.textContent = t('render.stopped.none'); }
    } catch (e) {
      sink.abort();
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
    const name = (o.fileBase ? o.fileBase() : 'animation') + (lastExt === 'zip' ? ' frames.zip' : ' animation.webm');   // i18n-ignore: file name endings
    o.download(lastBlob, name);
    status.textContent = t('render.saved', { file: name });
  });
  const close = () => { if (running) running.abort(); if (dlg.open) dlg.close(); };
  closeBtn.addEventListener('click', close);
  dlg.addEventListener('keydown', (e) => { if (e.key === 'Escape' && running) { e.preventDefault(); e.stopPropagation(); running.abort(); } });
  dlg.addEventListener('cancel', (e) => { if (running) { e.preventDefault(); running.abort(); } });
  dlg.addEventListener('close', () => { dlg.remove(); o.onClose?.(); });
  (o.parent || document.body).append(dlg);
  dlg.showModal();
  (gl.ok ? goBtn : closeBtn).focus();
  return { dialog: dlg, close };
}
