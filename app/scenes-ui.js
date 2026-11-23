/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scenes-ui.js: modelcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountScenes(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { lerpCam } from './camera.js';
import { mountTimeline } from './timeline.js';
import { mountXrMc } from './xr-mc.js';
import { cleanScene } from './model.js';

export function mountScenes(ctx) {
  const { ST, $, ui, model, cam, host, view, tools, print, askText, perspBtn, setPresentation, syncSectionMenu, closeMenus, styleToUi, renderScenes, scheduleInfo, download, base, root } = ctx;

  const playBtn = $('[data-scene-play]');
  playBtn.addEventListener('click', () => (ST.playing ? stopPlay() : startPlay()));
  function startPlay() {
    if (model.scenes.length < 2) { print(ctx.t('app.scene.play.few')); return; }
    playBtn.setAttribute('aria-pressed', 'true');
    playBtn.lastChild.textContent = ' ' + ctx.t('app.scene.stop');
    const tick = () => { stepScene(1); ST.playing = setTimeout(tick, 3200); };
    tick();
  }
  function stopPlay() {
    if (!ST.playing) return;
    clearTimeout(ST.playing); ST.playing = null;
    playBtn.setAttribute('aria-pressed', 'false');
    playBtn.lastChild.textContent = ' ' + ctx.t('ui.scenes.play');
  }
  function stepScene(d) {
    if (!model.scenes.length) return;
    const n = model.scenes.length;
    goScene(((ST.sceneIndex < 0 ? (d > 0 ? -1 : 0) : ST.sceneIndex) + d + n) % n);
  }
  ST.anim = null;
  /** Go to scene i: its style, what it shows (0.4 M23) and its camera, moving there over `ms`. Resolves when there. */
  function goScene(i, animate = true, { ms = 650, quiet = false, force = false } = {}) {
    const s = model.scenes[i];
    if (!s) return Promise.resolve();
    ST.layouts?.scene(i);   // 0.7 WS.9: a layout's view tab follows (it keeps the free camera first)
    ST.sceneIndex = i;
    view.style = JSON.parse(JSON.stringify(s.style));
    styleToUi();
    if (s.vis) { model.applyVis(s.vis); host.setSel(host.sel.filter((x) => x.t !== 'i')); syncSectionMenu(); ST.tagsDrawn = ''; scheduleInfo(); }
    const from = cam.toJSON(), to = s.cam;
    if (ST.anim) cancelAnimationFrame(ST.anim);
    let arrive;
    const there = new Promise((r) => { arrive = r; });
    if (!animate || (!force && matchMedia('(prefers-reduced-motion: reduce)').matches)) { cam.set(to); view.invalidate(); arrive(); }   // i18n-ignore: a media query
    else {
      const t0 = performance.now();
      const step = (tm) => {
        const k = Math.min(1, (tm - t0) / ms);
        cam.set(lerpCam(from, to, k));
        view.invalidate();
        if (k < 1) ST.anim = requestAnimationFrame(step); else { ST.anim = null; cam.set(to); arrive(); }
      };
      ST.anim = requestAnimationFrame(step);
    }
    perspBtn.setAttribute('aria-checked', String(to.persp !== false));
    renderScenes();
    if (!quiet) print(ctx.t('app.scene.go', { name: s.name }));
    return there;
  }
  // ---- the scenes as a WebM animation (0.4 M23): played from the first to the last, the 3D view and its marks drawn
  // into one canvas each frame, recorded with MediaRecorder; presentation view while it records; Esc or the button stops
  const recBtn = $('[data-scene-record]');
  ST.recording = null;
  recBtn.addEventListener('click', () => (ST.recording ? (ST.recording.stop = true) : recordScenes()));
  async function recordScenes() {
    const n = model.scenes.length;
    if (n < 2) { print(ctx.t('app.scene.rec.few')); return; }
    const mime = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find((m) => window.MediaRecorder?.isTypeSupported?.(m));   // i18n-ignore: media types
    if (!mime || !HTMLCanvasElement.prototype.captureStream) { print(ctx.t('app.scene.rec.none')); return; }
    stopPlay();
    tools.escape();
    const wasPresent = ST.presentation, keepSel = host.sel;
    host.setSel([]);
    if (!wasPresent) setPresentation(true);
    const out = document.createElement('canvas');
    out.width = Math.max(2, ui.gl.width & ~1); out.height = Math.max(2, ui.gl.height & ~1);
    const g = out.getContext('2d');
    const rec = new MediaRecorder(out.captureStream(30), { mimeType: mime, videoBitsPerSecond: 8e6 });
    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    const stopped = new Promise((r) => { rec.onstop = r; });
    ST.recording = { stop: false };
    recBtn.setAttribute('aria-pressed', 'true');
    let live = true;
    const paint = () => { if (!live) return; g.drawImage(ui.gl, 0, 0, out.width, out.height); g.drawImage(ui.over, 0, 0, out.width, out.height); requestAnimationFrame(paint); };
    const hold = (ms) => new Promise((r) => setTimeout(r, ms));
    const t0 = performance.now();
    try {
      await goScene(0, false, { quiet: true });
      await hold(100);
      paint();
      rec.start(500);
      print(ctx.t('app.scene.rec.progress', { i: 1, n }));
      await hold(1500);
      for (let i = 1; i < n && !ST.recording.stop; i++) {
        print(ctx.t('app.scene.rec.progress', { i: i + 1, n }));
        await goScene(i, true, { ms: 2000, quiet: true, force: true });
        await hold(1500);
      }
    } finally {
      if (rec.state !== 'inactive') rec.stop();
      await stopped;
      live = false;
      const cancelled = ST.recording.stop;
      ST.recording = null;
      recBtn.setAttribute('aria-pressed', 'false');
      if (!wasPresent) setPresentation(false);
      host.setSel(keepSel);
      if (cancelled) print(ctx.t('app.scene.rec.stopped'));
      else {
        const name = base() + '.webm';
        download(new Blob(chunks, { type: 'video/webm' }), name, 'video/webm');
        print(ctx.t('app.scene.rec.done', { file: name, s: Math.round((performance.now() - t0) / 1000) }));
      }
    }
  }
  // ---- the animation timeline (0.6 LC.10, session lc-model): timeline.js under the view (Views › Timeline); Render video in
  // Export and on the timeline. With no keys and two scenes or more, Render video uses the scenes as the camera path (WALK).
  const tlToggle = $('[data-timeline-toggle]');
  ST.timeline = mountTimeline({
    root, model, cam, view, host, t: ctx.t, print,
    selected: () => host.sel.filter((x) => x.t === 'i').map((x) => {
      const path = [...host.path, x.id], pl = model.placementAt(path);
      return pl ? { path, name: pl.inst.name || model.defs.get(pl.inst.def)?.name || '' } : null;
    }).filter(Boolean),
    perspChanged: () => perspBtn.setAttribute('aria-checked', String(cam.persp !== false)),
    busy: () => !!(tools.tool && tools.tool.busy) || !!ST.recording,
    changed: () => model.bumpSafe(),   // the autosave copy follows timeline edits too
    openVideo,
    onToggle: (on) => tlToggle.setAttribute('aria-checked', String(on)),
    playState: scheduleInfo,   // 0.9 FX.31: the Animate toolbar's Play shows Pause while it plays
  });
  tlToggle.addEventListener('click', () => { closeMenus(); ST.timeline.toggle(); });
  // ---- review in a headset (0.6 LC.19, session lc-model): xr-mc.js (Views › Review in VR, the Issues list) on xr/xr-session.js ----
  ST.xrmc = mountXrMc({ root, model, cam, view, host, t: ctx.t, print, settings: () => ST.renderSettings, download, base,
    perspChanged: () => perspBtn.setAttribute('aria-checked', String(cam.persp !== false)), closeMenus });
  async function openVideo() {
    if (!model.root.faces.size && !model.root.insts.size) { print(ctx.t('app.export.empty')); return; }
    if (!ST.timeline.has()) {
      if (model.scenes.length < 2) { ST.timeline.open(); print(ctx.t('app.tl.video.none')); return; }
      ST.timeline.fromScenes();   // WALK: the scenes, in order, as the camera's path
    }
    ST.timeline.stop();
    const [{ openVideoDialog }, { mcScene }] = await Promise.all([import('./render/video-ui.js'), import('./render-mc.js')]);
    openVideoDialog({
      scene: (s) => mcScene(model, cam, view.style, s, { anim: ST.timeline.anim }),
      length: () => ST.timeline.anim.length,
      fps: ST.timeline.anim.fps,
      viewSize: () => ({ w: ui.gl.clientWidth, h: ui.gl.clientHeight }),
      settings: ST.renderSettings,
      video: ST.videoSettings,
      saveVideo: (v) => { ST.videoSettings = v; },
      download: (blob, name) => download(blob, name, blob.type),
      fileBase: base,
      onClose: () => { view.invalidate(); ui.over.focus({ preventScroll: true }); },
      parent: root,
    });
  }

  function updateScene(i) {
    // a locked scene (0.6 DC.64) keeps its camera: the style and what is hidden still update
    const old = model.scenes[i];
    const s = cleanScene({ name: old.name, lock: old.lock, cam: old.lock ? old.cam : cam.toJSON(), style: view.style, vis: model.captureVis() });
    model.change(ctx.t('app.undo.scene_update'), (m) => { m.scenes = m.scenes.map((x, k) => (k === i ? s : x)); }, []);
    ST.sceneIndex = i;
    renderScenes();
    print(ctx.t(s.lock ? 'app.scene.updated.locked' : 'app.scene.updated', { name: s.name }));
  }
  function lockScene(i, lock) {
    const nm = model.scenes[i].name;
    model.change(ctx.t(lock ? 'app.undo.scene_lock' : 'app.undo.scene_unlock'), (m) => { m.scenes = m.scenes.map((x, k) => (k === i ? cleanScene({ ...x, lock }) : x)); }, []);
    renderScenes();
    print(ctx.t(lock ? 'app.scene.locked' : 'app.scene.unlocked', { name: nm }));
  }
  async function renameScene(i) {
    const name = await askText(ctx.t('app.scene.rename.h'), ctx.t('app.scene.rename.label'), model.scenes[i].name);
    if (!name) return;
    model.change(ctx.t('app.scene.rename.h'), (m) => { m.scenes = m.scenes.map((x, k) => (k === i ? { ...x, name: name.slice(0, 80) } : x)); }, []);
    renderScenes();
  }
  function deleteScene(i) {
    const nm = model.scenes[i].name;
    model.change(ctx.t('app.undo.scene_delete'), (m) => { m.scenes = m.scenes.filter((_, k) => k !== i); }, []);
    if (ST.sceneIndex >= model.scenes.length) ST.sceneIndex = model.scenes.length - 1;
    renderScenes();
    print(ctx.t('app.scene.deleted', { name: nm }));
  }

  return { stopPlay, stepScene, goScene, openVideo, updateScene, lockScene, renameScene, deleteScene };
}
