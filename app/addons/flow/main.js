/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Material flow add-on for ModelCraft (0.8 SU.858, session sx-flow), on the shared add-on API 1.0
 * (docs/ADDONS-SPEC.md §5.3: one right-panel section). Lay out conveyors, stations, buffers, merges, diverts, gates, photo-eyes
 * and AGV paths in the 3D view by snapping them port to port; run a seeded discrete-event simulation (lib/sim.js); play it back
 * in the 3D view with a timeline; read the statistics and save them as CSV. No physics: loads are kinematic. PLC emulation is a
 * later, Studio-only step (docs/0.8-PART2.md § SU.858 step 5).
 *
 * The layout is kept in the .modelcraft file (window.ccDocData('flow'), key 'layout': saved with the model, opened with it, passed
 * through untouched where the add-on is off) and can also be saved and opened as a .ccflow.json file (format cadcraft-flow v1,
 * lib/layout.js). A layout kept per browser by the first cut is adopted once, on the first change. Items are placed and moved with
 * the mouse (view.js picks, lib/edit.js does the geometry); the add-on has its own Undo. A run goes to a worker (lib/runner.js)
 * with a progress line and Cancel; Live runs the model at the pace of the clock (lib/realtime.js).
 * ModelCraft's own code is not changed: the 3D marks are this add-on's own three.js groups in window.modelcraft.view.scene.
 */
import { KIND, KINDS, GROUPS, defaults, cleanParams, CONVEYOR_KINDS } from './lib/catalog.js';
import { newLayout, cleanLayout, addAfter, freePorts, snapItem, buildGraph, nextId } from './lib/layout.js';
import { Sim, checkGraph } from './lib/sim.js';
import { makePlayer } from './lib/playback.js';
import { summaryRows, elementRows, toCsv, fmt } from './lib/report.js';
import { createPlc, ioMap, ioCsv } from './lib/plc.js';
import { startLink } from './lib/plc-link.js';
import { exampleLine, exampleAgv } from './lib/examples.js';
import { runSim } from './lib/runner.js';
import { makeRealtime } from './lib/realtime.js';
import { groundPoint, gridSnap, groupOf, moveItems, placeAt, makeHistory, itemZ } from './lib/edit.js';
import { PRESETS, cleanCalendar } from './lib/calendar.js';
import { DIST_KINDS } from './lib/rng.js';
import { FlowView } from './view.js';

const DIST_FIELDS = { const: ['v'], uniform: ['a', 'b'], exp: ['mean'], normal: ['mean', 'sd'], tri: ['a', 'm', 'b'], erlang: ['mean', 'k'] };
export const TRACE_HOURS = 2, MAX_EVENTS = 2e7, SPEEDS = [1, 10, 60, 600], DAY_NAMES = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return el;
}

const CSS = `
.flow-p{display:flex;flex-direction:column;gap:.5rem;font-size:.85rem}
.flow-p fieldset{border:1px solid var(--line,#ccd);padding:.4rem .5rem;margin:0;display:flex;flex-direction:column;gap:.35rem}
.flow-p legend{font-weight:600;font-size:.8rem;padding:0 .2rem}
.flow-p .row{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}
.flow-p label{display:flex;justify-content:space-between;gap:.4rem;align-items:center}
.flow-p label>span{flex:1;color:var(--ink-2,#555)}
.flow-p input[type=number],.flow-p input[type=text],.flow-p select{width:7.5rem;max-width:60%;font:inherit;padding:.1rem .25rem}
.flow-p button{width:auto;flex:0 0 auto;font:inherit;padding:.15rem .5rem;border:1px solid var(--line,#99a);background:transparent;color:inherit;border-radius:2px;cursor:pointer}
.flow-p button.primary{border-width:2px;font-weight:600}
.flow-p select[size]{width:100%;max-width:100%}
.flow-p table{width:100%;border-collapse:collapse}
.flow-p td{padding:.1rem .2rem;border-bottom:1px solid var(--line,#dde)}
.flow-p td:last-child{text-align:right;font-variant-numeric:tabular-nums}
.flow-p .msg{color:var(--ink-2,#555)}
.flow-p .bad{color:#b3122e}
.flow-p input[type=range]{width:100%}
`;

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  // the layout lives in the model file; a layout kept per browser by the first cut is adopted until the first change writes it
  const docApi = typeof window.ccDocData === 'function' ? window.ccDocData((api.addon && api.addon.id) || 'flow') : null;
  let legacy = false, alive = true;
  const readLayout = () => {
    const fromDoc = docApi ? cleanLayout(docApi.data('layout')) : { dropped: -1 };
    if (fromDoc.dropped !== -1) return fromDoc.layout;
    const old = cleanLayout(api.storage.get('layout'));
    if (old.dropped !== -1 && old.layout.items.length) { legacy = !!docApi; return old.layout; }
    return newLayout();
  };
  let layout = readLayout();
  let sel = null, built = buildGraph(layout), fv = null;
  let result = null, player = null, playT = 0, playing = false, speed = 60, raf = 0, lastTs = 0, msg = '', bad = false;
  let root = null, timeEl = null, slider = null, playBtn = null;
  let job = null, progress = null, progEl = null;      // a run in the worker
  let live = null, liveRaf = 0;                         // Live: { sim, rt, player }
  let mouseOn = api.storage.get('mouse') !== false, armed = null, drag = null;
  const hist = makeHistory(60);
  let lastJson = JSON.stringify(layout), writtenJson = lastJson;

  const style = h('style', { 'data-addon': 'flow', text: CSS });
  document.head.append(style);
  api.onDeactivate(() => { alive = false; cancelAnimationFrame(raf); cancelAnimationFrame(liveRaf); if (job) job.cancel(); detachMouse(); style.remove(); if (fv) fv.dispose(); fv = null; });

  const view = () => {
    const v = window.modelcraft && window.modelcraft.view;
    if (!fv && v && v.scene) fv = new FlowView(v);
    return fv;
  };
  const save = (json) => {
    if (json === writtenJson) return;
    writtenJson = json;
    if (!docApi) { api.storage.set('layout', layout); return; }
    const empty = !layout.items.length && !layout.calendars.length && !(layout.pools || []).length;
    docApi.setData('layout', empty ? null : layout);
    if (legacy) { api.storage.set('layout', null); legacy = false; }
  };
  const changed = (keepResult = false, fromHistory = false) => {
    const json = JSON.stringify(layout);
    if (json !== lastJson) { if (!fromHistory) hist.push(lastJson); lastJson = json; }
    save(json);
    built = buildGraph(layout);
    if (!keepResult) { stopAll(); result = null; player = null; if (view()) fv.drawFrame(null); }
    if (view()) fv.drawLayout(layout, built, sel);
    render();
  };
  const useJson = (json) => {
    layout = cleanLayout(JSON.parse(json)).layout; lastJson = json;
    if (sel && !layout.items.some((i) => i.id === sel)) sel = null;
    changed(false, true);
  };
  function undo() { const prev = hist.undo(lastJson); if (prev) { say(t('msg.undone')); useJson(prev); } }
  function redo() { const nxt = hist.redo(lastJson); if (nxt) { say(t('msg.redone')); useJson(nxt); } }
  // a model file opened (or New): the layout that file holds
  if (docApi) docApi.onOpen(() => {
    if (!alive) return;
    const r = cleanLayout(docApi.data('layout'));
    layout = r.dropped === -1 ? newLayout() : r.layout;
    legacy = false; sel = null; msg = ''; bad = false;
    lastJson = writtenJson = JSON.stringify(layout); hist.clear();
    stopAll(); result = null; player = null;
    built = buildGraph(layout);
    if (view()) { fv.drawFrame(null); fv.drawLayout(layout, built, sel); zoom(); }
    render();
  });
  const item = () => layout.items.find((i) => i.id === sel) || null;
  const say = (text, isBad = false) => { msg = text; bad = isBad; };

  // ---------------------------------------------------------------------------------------------------- actions
  function addItem(kind, after, at) {
    let it = null;
    if (at) it = placeAt(layout, kind, gridSnap(at[0], 0.1), gridSnap(at[1], 0.1));
    else if (after) { const [id, port] = after.split('|'); it = addAfter(layout, id, port, kind); }
    if (!it) {
      const z = CONVEYOR_KINDS.includes(kind) || ['source', 'sink', 'station', 'buffer', 'merge', 'divert', 'gate', 'transfer', 'agv-pick', 'agv-drop'].includes(kind) ? 0.8 : 0;
      const maxX = layout.items.reduce((m, i) => Math.max(m, i.x), -2);
      it = { id: nextId(layout, kind), kind, x: layout.items.length ? maxX + 2 : 0, y: 0, z, rot: 0, params: defaults(kind) };
    }
    if (kind === 'sensor' && !it.params.on) { const c = layout.items.find((i) => CONVEYOR_KINDS.includes(i.kind)); if (c) it.params.on = c.id; }
    if (kind === 'agv-pick' && !it.params.to) { const d = layout.items.find((i) => i.kind === 'agv-drop'); if (d) it.params.to = d.id; }
    layout.items.push(it);
    sel = it.id;
    if (at) snapItem(layout, it.id, 0.6);   // dropped near a free port: it joins
    say(t('msg.added', { id: it.id }));
    changed();
  }
  function remove() {
    if (!sel) return;
    layout.items = layout.items.filter((i) => i.id !== sel);
    for (const o of layout.items) for (const [k, sp] of Object.entries(KIND[o.kind].params)) if (sp.kind === 'ref' && o.params[k] === sel) o.params[k] = '';
    say(t('msg.removed', { id: sel }));
    sel = null; changed();
  }
  function snap() {
    if (!sel) return;
    say(snapItem(layout, sel, 0.6) ? t('msg.snapped', { id: sel }) : t('msg.noSnap'), false);
    changed();
  }
  function setLayout(L, text) { layout = L; sel = null; say(text); changed(); zoom(); }
  function zoom() {
    const v = view(), mc = window.modelcraft;
    const bb = v && v.bounds(layout, built);
    if (bb && mc && mc.cam && mc.cam.fit) { mc.cam.fit(bb); mc.view.invalidate(); }
  }
  function download(name, text, type) {
    const a = h('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  }
  function openFile() {
    const inp = h('input', { type: 'file', accept: '.json,.ccflow.json,application/json' });
    inp.addEventListener('change', async () => {
      const f = inp.files && inp.files[0];
      if (!f) return;
      if (f.size > 5e6) { say(t('msg.tooBig'), true); render(); return; }
      let raw = null;
      try { raw = JSON.parse(await f.text()); } catch { raw = null; }
      const r = cleanLayout(raw);
      if (r.dropped === -1) { say(t('msg.notLayout'), true); render(); return; }
      setLayout(r.layout, r.dropped ? t('msg.openedDropped', { n: r.dropped }) : t('msg.opened', { name: f.name }));
    });
    inp.click();
  }
  const runProblems = () => [...built.problems, ...checkGraph(built.graph)];
  const runOpts = () => {
    const until = layout.run.hours * 3600;
    return { seed: layout.run.seed, until, warmup: Math.min(layout.run.warmup * 60, until * 0.9), traceUntil: Math.min(until, TRACE_HOURS * 3600), maxEvents: MAX_EVENTS };
  };
  const workerUrl = () => { try { return new URL('./lib/worker.js', import.meta.url).href; } catch { return null; } };
  /** Run in a worker (the page stays alive; a progress line; Cancel); on this thread where a worker cannot start. */
  async function run() {
    stopAll();
    const problems = runProblems();
    if (problems.length) { result = null; player = null; say(problems.slice(0, 6).map(problemText).join(' · '), true); render(); return; }
    const opts = runOpts();
    progress = { t: 0, until: opts.until, events: 0 };
    say(t('msg.running'));
    const mine = runSim(built.graph, { ...opts, progressEvery: 100000 }, { Worker: window.Worker, url: workerUrl(), onProgress: (p) => { progress = p; showProgress(); } });
    job = mine;
    render();
    try {
      const out = await mine.promise;
      if (job !== mine) return;
      result = out.result;
      player = makePlayer(result.trace, built);
      playT = 0;
      if (result.failed) say(t('msg.stopped', { why: problemText(result.failed), t: fmt(result.failed.t) }), true);
      else say(t('msg.ran', { hours: layout.run.hours, events: result.events, ms: Math.round(out.ms) }) + (result.warnings.some((w) => w.code === 'max-events') ? ' ' + t('msg.maxEvents') : '') + (out.inWorker ? '' : ' ' + t('msg.noWorker')));
      if (view()) fv.drawFrame(player.frame(0));
    } catch (e) {
      if (job !== mine) return;
      result = null; player = null;
      if (e && e.cancelled) say(t('msg.cancelled')); else say(t('msg.runFailed', { why: String((e && e.message) || e) }), true);
    } finally {
      if (job === mine) { job = null; progress = null; progEl = null; render(); }
    }
  }
  function cancelRun() { if (job) job.cancel(); }
  function showProgress() {
    if (!progEl || !progress) return;
    progEl.value = progress.t; progEl.max = progress.until;
    progEl.textContent = `${Math.round((100 * progress.t) / progress.until)} %`;
    const lab = progEl.nextSibling;
    if (lab) lab.textContent = t('run.progress', { done: clock(progress.t), total: clock(progress.until), events: progress.events });
  }

  // ---------------------------------------------------------------------------------------------------- live (the model at the pace of the clock)
  function goLive() {
    stopAll();
    const problems = runProblems();
    if (problems.length) { say(problems.slice(0, 6).map(problemText).join(' · '), true); render(); return; }
    const sim = new Sim(built.graph, runOpts());
    const rt = makeRealtime(sim, { scale: speed, clock: () => performance.now() });
    if (!rt.start()) { say(t('msg.liveNo'), true); render(); return; }
    live = { sim, rt, player: makePlayer(sim.trace, built, { live: true }), plc: createPlc({ sim, graph: built.graph }) };
    result = null; player = null;
    say(t('msg.live'));
    liveRaf = requestAnimationFrame(liveTick);
    render();
  }
  function liveTick() {
    if (!live) return;
    const { sim, rt } = live;
    const st = rt.tick();
    if (view()) fv.drawFrame(live.player.frame(st.t));
    if (timeEl) timeEl.textContent = clock(st.t);
    if (st.done) { finishLive(); return; }
    liveRaf = requestAnimationFrame(liveTick);
  }
  function finishLive() {
    const { sim } = live; unlink();
    live = null; cancelAnimationFrame(liveRaf);
    result = sim.results();
    player = makePlayer(result.trace, built);
    playT = Math.min(sim.now, player.until);
    if (result.failed) say(t('msg.stopped', { why: problemText(result.failed), t: fmt(result.failed.t) }), true);
    else say(t('msg.liveDone', { hours: fmt(sim.now / 3600) }));
    showAt(playT);
    render();
  }
  function stopLive() { if (!live) return; unlink(); live = null; cancelAnimationFrame(liveRaf); say(t('msg.liveStopped')); if (view()) fv.drawFrame(null); render(); }
  function stopAll() { stop(); if (job) job.cancel(); if (live) { unlink(); live = null; cancelAnimationFrame(liveRaf); } }

  // ---------------------------------------------------------------------------------------------------- PLC (Modbus TCP through Studio, step 5)
  let plcLink = null, plcPort = 5020, plcMsg = '';
  const desk = () => (typeof window !== 'undefined' && window.cadcraftDesktop && window.cadcraftDesktop.plc ? window.cadcraftDesktop : null);
  function unlink() { if (plcLink) { plcLink.stop(); plcLink = null; } }
  async function link() {
    if (!live || !live.plc || plcLink) return;
    try { plcLink = await startLink({ desk: desk(), plc: live.plc, port: plcPort }); plcMsg = t('plc.listening', { port: plcLink.port }); }
    catch (e) { plcMsg = t(e && e.code === 'no_link' ? 'plc.nolink' : 'plc.refused', { why: String((e && e.message) || e).slice(0, 120) }); }
    render();
  }

  // ---------------------------------------------------------------------------------------------------- the mouse
  const overEl = () => window.modelcraft && window.modelcraft.ui && window.modelcraft.ui.over;
  const rayAt = (e) => { const r = overEl().getBoundingClientRect(); return window.modelcraft.cam.ray(e.clientX - r.left, e.clientY - r.top); };
  const take = (e) => { e.stopImmediatePropagation(); e.preventDefault(); };
  function onDown(e) {
    if (e.button !== 0 || !mouseOn || !view() || !window.modelcraft.cam) return;
    const ray = rayAt(e);
    if (armed) {
      const g = groundPoint(ray, itemZ(armed));
      if (!g) return;
      take(e);
      addItem(armed, '', g);
      return;
    }
    const hit = fv.pick(ray);
    if (!hit || !hit.id) return;
    take(e);
    const it = layout.items.find((i) => i.id === hit.id);
    if (!it) return;
    sel = it.id;
    drag = { id: it.id, ids: e.shiftKey ? groupOf(layout, it.id) : [it.id], z: it.z, last: groundPoint(ray, it.z), moved: false, pid: e.pointerId };
    try { overEl().setPointerCapture(e.pointerId); } catch { /* not capturable */ }
    window.addEventListener('pointermove', onMove, true);
    window.addEventListener('pointerup', onUp, true);
    window.addEventListener('pointercancel', onUp, true);
    changed(true);
    say(t(e.shiftKey ? 'msg.dragGroup' : 'msg.drag', { id: it.id, n: drag.ids.length }));
    render();
  }
  function onMove(e) {
    if (!drag) return;
    e.stopPropagation(); e.preventDefault();
    const g = groundPoint(rayAt(e), drag.z);
    if (!g || !drag.last) { if (g) drag.last = g; return; }
    const dx = g[0] - drag.last[0], dy = g[1] - drag.last[1];
    if (!dx && !dy) return;
    moveItems(layout, drag.ids, dx, dy);
    fv.translate(drag.ids, dx, dy);
    drag.last = g; drag.moved = true;
  }
  function onUp(e) {
    if (!drag) return;
    e.stopPropagation();
    const d = drag; drag = null;
    window.removeEventListener('pointermove', onMove, true);
    window.removeEventListener('pointerup', onUp, true);
    window.removeEventListener('pointercancel', onUp, true);
    try { overEl().releasePointerCapture(d.pid); } catch { /* released */ }
    if (!d.moved) { render(); return; }
    if (d.ids.length === 1) {
      const it = layout.items.find((i) => i.id === d.id);
      it.x = gridSnap(it.x, 0.01); it.y = gridSnap(it.y, 0.01);
      say(snapItem(layout, d.id, 0.6) ? t('msg.snapped', { id: d.id }) : t('msg.moved', { id: d.id }));
    } else say(t('msg.movedGroup', { n: d.ids.length }));
    changed();
  }
  function onKey(e) { if (e.key === 'Escape' && armed) { armed = null; setCursor(); say(t('msg.placeOff')); render(); } }
  const setCursor = () => { const o = overEl(); if (o) o.style.cursor = armed ? 'crosshair' : ''; };
  function attachMouse() {
    const o = overEl();
    if (!o) return false;
    o.addEventListener('pointerdown', onDown, true);   // capture: before ModelCraft's own tools, only when a mark of ours is hit (or a placing is armed)
    window.addEventListener('keydown', onKey, true);
    return true;
  }
  function detachMouse() {
    const o = overEl();
    if (o) { o.removeEventListener('pointerdown', onDown, true); o.style.cursor = ''; }
    window.removeEventListener('keydown', onKey, true);
    window.removeEventListener('pointermove', onMove, true);
    window.removeEventListener('pointerup', onUp, true);
    window.removeEventListener('pointercancel', onUp, true);
  }
  function arm(kind) { armed = armed === kind ? null : kind; setCursor(); say(armed ? t('msg.placeOn', { kind: t('kind.' + armed) }) : t('msg.placeOff')); render(); }
  function problemText(p) { return t('problem.' + p.code, { id: p.id ?? '', port: p.port ?? '', key: p.key ?? '', vehicles: (p.vehicles || []).join(', '), edge: p.edge ?? '' }); }

  // ---------------------------------------------------------------------------------------------------- playback
  function stop() { playing = false; cancelAnimationFrame(raf); raf = 0; if (playBtn) playBtn.textContent = t('play.play'); }
  function showAt(time) {
    playT = Math.max(0, Math.min(player ? player.until : 0, time));
    if (player && view()) fv.drawFrame(player.frame(playT));
    if (slider) slider.value = String(playT);
    if (timeEl) timeEl.textContent = clock(playT);
  }
  function tick(ts) {
    if (!playing) return;
    const dt = lastTs ? (ts - lastTs) / 1000 : 0;
    lastTs = ts;
    showAt(playT + dt * speed);
    if (playT >= player.until) { stop(); return; }
    raf = requestAnimationFrame(tick);
  }
  function togglePlay() {
    if (!player) return;
    if (playing) { stop(); return; }
    if (playT >= player.until) playT = 0;
    playing = true; lastTs = 0; playBtn.textContent = t('play.pause');
    raf = requestAnimationFrame(tick);
  }
  const clock = (s) => { const hh = Math.floor(s / 3600), mm = Math.floor((s % 3600) / 60), ss = Math.floor(s % 60); return `${hh}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`; };

  // ---------------------------------------------------------------------------------------------------- the panel
  const num = (label, value, onset, attrs = {}) => h('label', {}, h('span', { text: label }), h('input', { type: 'number', step: 'any', value, ...attrs, onchange: (e) => { const v = Number(e.target.value); if (Number.isFinite(v)) onset(v); } }));
  const choice = (label, value, opts, onset) => h('label', {}, h('span', { text: label }), h('select', { onchange: (e) => onset(e.target.value) }, opts.map(([v, l]) => h('option', { value: v, selected: v === value, text: l }))));

  function paramField(it, name, spec) {
    const p = it.params, set = (v) => { it.params = cleanParams(it.kind, { ...p, [name]: v }); changed(); };
    const label = t('param.' + name) + (spec.kind === 'm' ? ' (m)' : spec.kind === 'mps' ? ' (m/s)' : spec.kind === 'deg' ? ' (°)' : spec.kind === 's' ? ' (s)' : spec.kind === 'h' ? ' (h)' : spec.kind === 'min' ? ' (min)' : '');
    switch (spec.kind) {
      case 'bool': return h('label', {}, h('span', { text: label }), h('input', { type: 'checkbox', checked: !!p[name], onchange: (e) => set(e.target.checked) }));
      case 'choice': return choice(label, p[name], spec.choices.map((c) => [c, t('choice.' + name + '.' + c)]), set);
      case 'text': return h('label', { title: t('hint.' + name) }, h('span', { text: label }), h('input', { type: 'text', value: p[name], placeholder: t('hint.' + name), onchange: (e) => set(e.target.value) }));
      case 'ref': {
        if (name === 'calendar') return choice(label, p[name], [['', t('choice.none')], ...layout.calendars.map((c) => [c.id, c.name])], set);
        if (name === 'pool') return choice(label, p[name], [['', t('choice.none')], ...(layout.pools || []).map((c) => [c.id, c.name + ' (' + c.size + ')'])], set);
        const kinds = name === 'on' ? CONVEYOR_KINDS : ['agv-drop'];
        const opts = [['', t('choice.none')], ...layout.items.filter((i) => kinds.includes(i.kind)).map((i) => [i.id, i.id])];
        return choice(label, p[name], opts, set);
      }
      case 'dist': {
        const d = p[name];
        const box = h('fieldset', {}, h('legend', { text: label }),
          choice(t('dist.kind'), d.kind, DIST_KINDS.map((k) => [k, t('dist.' + k)]), (k) => set({ kind: k, ...Object.fromEntries(DIST_FIELDS[k].map((f) => [f, f === 'k' ? 2 : d.mean ?? d.v ?? 10])) })));
        for (const f of DIST_FIELDS[d.kind]) box.append(num(t('dist.f.' + f) + (f === 'k' ? '' : ' (s)'), d[f], (v) => set({ ...d, [f]: v }), { min: 0 }));
        return box;
      }
      default: return num(label, p[name], set, { min: spec.min, max: spec.max, step: spec.step || 'any' });
    }
  }

  // ---------------------------------------------------------------------------------------------------- shifts
  function shiftsPanel() {
    const setCal = (c, fn) => { fn(c); const cc = cleanCalendar({ ...c }); Object.assign(c, cc); changed(); };
    const box = h('fieldset', {}, h('legend', { text: t('shifts.title') }), h('p', { class: 'msg', text: t('shifts.note') }));
    for (const c of layout.calendars) {
      const f = h('fieldset', {}, h('legend', { text: c.name }),
        h('label', {}, h('span', { text: t('shifts.name') }), h('input', { type: 'text', value: c.name, onchange: (e) => setCal(c, (x) => { x.name = e.target.value; }) })),
        choice(t('shifts.preset'), '', [['', t('shifts.pick')], ...Object.keys(PRESETS).map((k) => [k, t('shifts.p.' + k)])], (k) => { if (k) setCal(c, (x) => { x.windows = PRESETS[k].map((w) => ({ ...w, days: [...w.days] })); }); }));
      c.windows.forEach((w, wi) => {
        f.append(h('div', { class: 'row' },
          ...DAY_NAMES.map((d, di) => h('label', { title: t('shifts.day.' + d) }, h('input', { type: 'checkbox', checked: w.days.includes(di), onchange: (e) => setCal(c, () => { w.days = e.target.checked ? [...new Set([...w.days, di])].sort() : w.days.filter((x) => x !== di); }) }), h('span', { text: t('shifts.d.' + d) }))),
          h('input', { type: 'text', value: w.from, size: 5, 'aria-label': t('shifts.from'), onchange: (e) => setCal(c, () => { w.from = e.target.value; }) }),
          h('input', { type: 'text', value: w.to, size: 5, 'aria-label': t('shifts.to'), onchange: (e) => setCal(c, () => { w.to = e.target.value; }) }),
          h('button', { type: 'button', text: t('btn.removeWindow'), onclick: () => setCal(c, (x) => { x.windows.splice(wi, 1); }) })));
      });
      f.append(h('div', { class: 'row' },
        h('button', { type: 'button', text: t('shifts.addWindow'), disabled: c.windows.length >= 12, onclick: () => setCal(c, (x) => { x.windows.push({ days: [0, 1, 2, 3, 4], from: '06:00', to: '14:00' }); }) }),
        h('button', { type: 'button', text: t('shifts.remove'), onclick: () => { layout.calendars = layout.calendars.filter((x) => x !== c); for (const o of layout.items) if (o.params.calendar === c.id) o.params.calendar = ''; say(t('shifts.removed', { name: c.name })); changed(); } })));
      box.append(f);
    }
    box.append(h('div', { class: 'row' }, h('button', { type: 'button', text: t('shifts.add'), disabled: layout.calendars.length >= 20, onclick: () => {
      let n = 1; while (layout.calendars.some((c) => c.id === 'shift-' + n)) n++;
      layout.calendars.push({ id: 'shift-' + n, name: t('shifts.default', { n }), windows: PRESETS['one-shift'].map((w) => ({ ...w, days: [...w.days] })) });
      say(t('shifts.added')); changed();
    } })));
    return box;
  }

  // ---------------------------------------------------------------------------------------------------- operator pools (round 4)
  function poolsPanel() {
    const box = h('fieldset', {}, h('legend', { text: t('pools.title') }), h('p', { class: 'msg', text: t('pools.note') }));
    layout.pools = layout.pools || [];
    for (const q of layout.pools) {
      box.append(h('div', { class: 'row' },
        h('input', { type: 'text', value: q.name, 'aria-label': t('pools.name'), onchange: (e) => { q.name = e.target.value.slice(0, 60); changed(); } }),
        num(t('pools.size'), q.size, (v) => { q.size = Math.max(1, Math.min(100, Math.round(v))); changed(); }, { min: 1, max: 100, step: 1 }),
        h('button', { type: 'button', text: t('pools.remove'), onclick: () => { layout.pools = layout.pools.filter((x) => x !== q); for (const o of layout.items) if (o.params.pool === q.id) o.params.pool = ''; say(t('pools.removed')); changed(); } })));
    }
    box.append(h('div', { class: 'row' }, h('button', { type: 'button', text: t('pools.add'), disabled: layout.pools.length >= 20, onclick: () => {
      let n = 1; while (layout.pools.some((c) => c.id === 'crew-' + n)) n++;
      layout.pools.push({ id: 'crew-' + n, name: t('pools.default', { n }), size: 1 }); say(t('pools.added')); changed();
    } })));
    return box;
  }

  function render() {
    if (!root) return;
    const it = item();
    root.replaceChildren();
    const p = h('div', { class: 'flow-p' });
    // file row
    p.append(h('div', { class: 'row' },
      h('button', { type: 'button', text: t('btn.exampleLine'), onclick: () => setLayout(exampleLine(), t('msg.example')) }),
      h('button', { type: 'button', text: t('btn.exampleAgv'), onclick: () => setLayout(exampleAgv(), t('msg.example')) }),
      h('button', { type: 'button', text: t('btn.new'), onclick: () => { if (!layout.items.length || confirm(t('confirm.new'))) setLayout(newLayout(), t('msg.new')); } }),
      h('button', { type: 'button', text: t('btn.open'), onclick: openFile }),
      h('button', { type: 'button', text: t('btn.save'), disabled: !layout.items.length, onclick: () => download('layout.ccflow.json', JSON.stringify(layout, null, 1), 'application/json') }),
      h('button', { type: 'button', text: t('btn.zoom'), disabled: !layout.items.length, onclick: zoom }),
      h('button', { type: 'button', text: t('btn.undo'), disabled: !hist.canUndo, onclick: undo }),
      h('button', { type: 'button', text: t('btn.redo'), disabled: !hist.canRedo, onclick: redo })));
    // add from the catalogue
    const kindSel = h('select', { 'aria-label': t('add.kind') }, GROUPS.map((g) => h('optgroup', { label: t('group.' + g) }, KINDS.filter((k) => KIND[k].group === g).map((k) => h('option', { value: k, text: t('kind.' + k) })))));
    const fp = freePorts(layout).filter((x) => x.dir === 'out');
    const agvEnds = layout.items.filter((i) => i.kind === 'agv-path' || i.kind === 'agv-pick').map((i) => [i.id + '|' + (i.kind === 'agv-path' ? 'b' : 'node'), t('add.afterAgv', { id: i.id })]);
    const prefer = it ? fp.find((x) => x.id === it.id) : fp[fp.length - 1];
    const afterSel = h('select', { 'aria-label': t('add.after') }, h('option', { value: '', text: t('add.free') }),
      fp.map((x) => h('option', { value: x.id + '|' + x.name, selected: prefer && x.id === prefer.id && x.name === prefer.name, text: t('add.afterPort', { id: x.id, port: x.name }) })),
      agvEnds.map(([v, l]) => h('option', { value: v, text: l })));
    p.append(h('fieldset', {}, h('legend', { text: t('add.title') }),
      h('label', {}, h('span', { text: t('add.kind') }), kindSel),
      h('label', {}, h('span', { text: t('add.after') }), afterSel),
      h('div', { class: 'row' },
        h('button', { type: 'button', class: 'primary', text: t('btn.add'), onclick: () => addItem(kindSel.value, afterSel.value) }),
        h('button', { type: 'button', text: armed ? t('btn.placeStop') : t('btn.place'), 'aria-pressed': armed ? 'true' : 'false', disabled: !mouseOn, onclick: () => arm(kindSel.value) })),
      h('label', {}, h('span', { text: t('mouse.on') }), h('input', { type: 'checkbox', checked: mouseOn, onchange: (e) => { mouseOn = e.target.checked; api.storage.set('mouse', mouseOn); if (!mouseOn) { armed = null; setCursor(); } render(); } })),
      h('p', { class: 'msg', text: t('mouse.note') })));
    // items
    if (layout.items.length) {
      p.append(h('fieldset', {}, h('legend', { text: t('items.title', { n: layout.items.length }) }),
        h('select', { size: Math.min(8, layout.items.length + 1), 'aria-label': t('items.title', { n: layout.items.length }), onchange: (e) => { sel = e.target.value; changed(true); } },
          layout.items.map((i) => h('option', { value: i.id, selected: i.id === sel, text: `${i.id} · ${t('kind.' + i.kind)}` })))));
    }
    // the selected item
    if (it) {
      const f = h('fieldset', {}, h('legend', { text: `${it.id} · ${t('kind.' + it.kind)}` }));
      const pos = (k) => num(t('pos.' + k) + (k === 'rot' ? ' (°)' : ' (m)'), Math.round(it[k] * 1e4) / 1e4, (v) => { it[k] = k === 'rot' ? ((v % 360) + 360) % 360 : v; changed(); });
      if (it.kind !== 'sensor') f.append(pos('x'), pos('y'), pos('z'), pos('rot'));
      for (const [name, spec] of Object.entries(KIND[it.kind].params)) f.append(paramField(it, name, spec));
      f.append(h('div', { class: 'row' },
        h('button', { type: 'button', text: t('btn.rotate'), onclick: () => { it.rot = (it.rot + 90) % 360; changed(); } }),
        h('button', { type: 'button', text: t('btn.snap'), onclick: snap }),
        h('button', { type: 'button', text: t('btn.remove'), onclick: remove })));
      p.append(f);
    }
    // AGV fleet
    if (layout.items.some((i) => i.kind.startsWith('agv'))) {
      const fl = layout.fleet, setF = (k) => (v) => { layout.fleet = { ...fl, [k]: v }; layout = cleanLayout(layout).layout; changed(); };
      p.append(h('fieldset', {}, h('legend', { text: t('fleet.title') }),
        num(t('fleet.vehicles'), fl.vehicles, setF('vehicles'), { min: 0, max: 50, step: 1 }), num(t('fleet.speed'), fl.speed, setF('speed'), { min: 0.05 }),
        num(t('fleet.load'), fl.load, setF('load'), { min: 0 }), num(t('fleet.unload'), fl.unload, setF('unload'), { min: 0 }),
        h('label', { title: t('fleet.nodesHint') }, h('span', { text: t('fleet.nodes') }), h('input', { type: 'checkbox', checked: !!fl.nodes, onchange: (e) => setF('nodes')(e.target.checked) })),
        num(t('fleet.mtbf') + ' (h)', fl.mtbf, setF('mtbf'), { min: 0 }), num(t('fleet.mttr') + ' (min)', fl.mttr, setF('mttr'), { min: 0.01 }),
        h('label', { title: t('fleet.parkHint') }, h('span', { text: t('fleet.park') }), h('input', { type: 'text', value: (fl.park || []).join(', '), placeholder: t('fleet.parkPlaceholder'), onchange: (e) => setF('park')(e.target.value.split(/[\s,;]+/).filter(Boolean)) }))));
    }
    // PLC emulation (Modbus TCP): the addresses, and the link in Studio while the model runs live
    if (layout.items.some((i) => i.kind === 'gate' || i.kind === 'sensor')) {
      const map = ioMap(built.graph), plcGates = map.coils.length;
      const rows = [...map.di.map((x) => ['DI', x]), ...map.coils.map((x) => ['coil', x]), ...map.ir.map((x) => ['IR', x])];
      p.append(h('fieldset', {}, h('legend', { text: t('plc.title') }),
        h('p', { class: 'msg', text: plcGates ? t('plc.intro', { gates: plcGates }) : t('plc.nogate') }),
        h('details', {}, h('summary', { text: t('plc.addresses', { n: rows.length }) }), h('table', {}, rows.map(([k, x]) => h('tr', {}, h('td', { text: k }), h('td', { class: 'num', text: String(x.address) }), h('td', { text: x.label }))))),
        h('div', { class: 'row' }, h('button', { type: 'button', text: t('plc.csv'), onclick: () => download('flow-plc-addresses.csv', ioCsv(map), 'text/csv') })),
        desk() ? h('div', { class: 'row' }, num(t('plc.port'), plcPort, (v) => { plcPort = Math.max(1024, Math.min(65535, Math.round(v))); }, { min: 1024, max: 65535, step: 1 }),
          plcLink ? h('button', { type: 'button', text: t('plc.stop'), onclick: () => { unlink(); plcMsg = ''; render(); } })
            : h('button', { type: 'button', text: t('plc.start'), title: t('plc.start.hint'), disabled: !live || !plcGates, onclick: link })) : h('p', { class: 'msg', text: t('plc.studio') }),
        plcMsg ? h('p', { class: 'msg', role: 'status', text: plcMsg }) : null));
    }
    // shifts and operators
    p.append(shiftsPanel());
    p.append(poolsPanel());
    // run
    const rn = layout.run, setR = (k) => (v) => { layout.run = { ...rn, [k]: v }; layout = cleanLayout(layout).layout; changed(); };
    p.append(h('fieldset', {}, h('legend', { text: t('run.title') }),
      num(t('run.hours'), rn.hours, setR('hours'), { min: 0.01 }), num(t('run.warmup'), rn.warmup, setR('warmup'), { min: 0 }), num(t('run.seed'), rn.seed, setR('seed'), { min: 0, step: 1 }),
      h('div', { class: 'row' },
        h('button', { type: 'button', class: 'primary', text: t('btn.run'), disabled: !layout.items.length || !!job || !!live, onclick: run }),
        job ? h('button', { type: 'button', text: t('btn.cancel'), onclick: cancelRun }) : null,
        live ? h('button', { type: 'button', text: t('btn.liveStop'), onclick: stopLive }) : h('button', { type: 'button', text: t('btn.live'), title: t('live.hint'), disabled: !layout.items.length || !!job, onclick: goLive }),
        live ? h('button', { type: 'button', text: live.rt.paused ? t('btn.liveResume') : t('btn.livePause'), onclick: () => { if (live.rt.paused) live.rt.resume(); else live.rt.pause(); render(); } }) : null),
      job ? h('div', { class: 'row' }, (progEl = h('progress', { max: progress ? progress.until : 1, value: progress ? progress.t : 0 })), h('span', { class: 'msg', text: progress ? t('run.progress', { done: clock(progress.t), total: clock(progress.until), events: progress.events }) : '' })) : null,
      live ? h('div', { class: 'row' }, choice(t('play.speed'), String(speed), SPEEDS.map((s) => [String(s), t('play.x', { n: s })]), (v) => { speed = Number(v); live.rt.setScale(speed); }), (timeEl = h('span', { class: 'msg', text: clock(live.sim.now) }))) : null));
    if (msg) p.append(h('p', { class: bad ? 'msg bad' : 'msg', role: 'status', text: msg }));   // i18n-ignore (class names)
    // playback + results
    if (result && result.ok !== undefined && result.elements) {
      timeEl = h('span', { class: 'msg', text: clock(playT) });
      slider = h('input', { type: 'range', min: 0, max: player.until, step: 'any', value: playT, 'aria-label': t('play.time'), oninput: (e) => { stop(); showAt(Number(e.target.value)); } });
      playBtn = h('button', { type: 'button', class: 'primary', text: playing ? t('play.pause') : t('play.play'), onclick: togglePlay });
      p.append(h('fieldset', {}, h('legend', { text: t('play.title') }),
        h('div', { class: 'row' }, playBtn, choice(t('play.speed'), String(speed), SPEEDS.map((s) => [String(s), t('play.x', { n: s })]), (v) => { speed = Number(v); }), timeEl),
        slider, h('p', { class: 'msg', text: t('play.note', { hours: fmt(player.until / 3600) }) + (player.full ? ' ' + t('play.full') : '') })));
      const tbl = (rows) => h('table', {}, rows.map((r) => h('tr', {}, h('td', { text: r.label }), h('td', { text: String(r.value) }))));
      const res = h('fieldset', {}, h('legend', { text: t('stats.title') }), tbl(summaryRows(result, t)));
      for (const er of elementRows(result, t)) res.append(h('details', {}, h('summary', { text: `${er.id} · ${t('kind.' + er.kind)}` }), tbl(er.cells)));
      res.append(h('div', { class: 'row' }, h('button', { type: 'button', text: t('btn.csv'), onclick: () => download('flow-results.csv', toCsv(result, t), 'text/csv') })));
      p.append(res);
    } else { slider = playBtn = null; if (!live) timeEl = null; }
    p.append(h('p', { class: 'msg', text: t('panel.note') }));
    root.append(p);
  }

  api.ui.panelSection({ id: 'flow', title: t('panel.title'), side: 'right', render(el) { root = el; render(); } });
  // the 3D view may come up after the add-on: draw once it is there
  const wait = setInterval(() => { if (view() && attachMouse()) { clearInterval(wait); fv.drawLayout(layout, built, sel); } }, 300);
  api.onDeactivate(() => clearInterval(wait));

  // tests and the console
  const screenOf = (id) => {
    const it = layout.items.find((i) => i.id === id), mc = window.modelcraft, o = overEl();
    if (!it || !mc || !o) return null;
    const g = built.geom[id], at = g.path ? g.path.at(g.path.length / 2).p : [it.x, it.y, it.z];
    const pr = mc.cam.project(at), r = o.getBoundingClientRect();
    return pr ? { x: r.left + pr[0], y: r.top + pr[1] } : null;
  };
  window.ccFlow = { layout: () => layout, run, cancel: cancelRun, live: goLive, liveStop: stopLive, isLive: () => !!live, running: () => !!job, undo, redo, history: () => ({ canUndo: hist.canUndo, canRedo: hist.canRedo }), screenOf, selected: () => sel, armed: () => armed, arm, docWritten: () => writtenJson, result: () => result, frame: (s) => (player ? player.frame(s) : null), showAt: (s) => showAt(s), load: (L) => setLayout(cleanLayout(L).layout, ''), example: (k) => setLayout(k === 'agv' ? exampleAgv() : exampleLine(), '') };
  api.onDeactivate(() => { delete window.ccFlow; });
}
