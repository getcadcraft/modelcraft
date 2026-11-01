/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — these words are read by the person's assistant program (agents.js), not shown on the screen. */
/**
 * scene-say.js — "say the scene" (0.8 round 2, EG.61, session `model_PART_2`): time of day, date or season, weather, trees and
 * people, worked out from plain choices. The apps contain no AI (rule 35): the person's own assistant turns "dusk, light rain,
 * autumn trees, people on the plaza" into these choices and calls the tools (agents.js); this file is the numbers behind them.
 * DOM-free, no model access (scene-entourage.js edits the model), so Node tests it as is.
 *
 * What a look is made of (all of it already travels to every render engine, RE.1/RE.2, except fog):
 *   - the sun: month, day, hour (sun.js, NOAA) — the model's own sun, so shadows in the view and every engine follow
 *   - the sky: render/looks.js SKIES 'clear' | 'dusk' | 'overcast' (the Blender engine reads the sun and the sky kind)
 *   - the exposure, in stops
 *   - wet surfaces: the colours of flat, upward-facing faces take a glossier look (settings.looks), so rain shows as shine
 *   - fog with light shafts: settings.fog, drawn by the path tracer (high quality) only; the quick render and other engines skip it
 *   - trees in the season's colours, people (with umbrellas in rain) — real objects in the model (scene-entourage.js)
 *
 *   TIMES, SEASONS, WEATHERS, TREE_KINDS, PERSON_KINDS
 *   dayTimes(sun) → {rise, set, noon, maxAlt}                 local clock hours; rise/set null when the sun never crosses
 *   hourFor(time, sun) → {hour, sky, exposure, night, notes}   a named time (or an hour) on that day
 *   seasonOf(month, lat) · seasonDate(season, lat)
 *   weatherLook(weather) → {sky, exposure, fog|null, wet}
 *   lookFor({time, hour, date, season, weather, sun, engine}) → {sun, patch, wet, season, weather, time, notes}
 *   variantsFor(slug, season) → [{key, recolor, omit}]          how a tree looks in a season
 *   spread(region, count, opts) → [{x, y}]                      seeded, no two closer than minDist
 *   rng(seed)
 */
import { sunPosition } from './sun.js';

export const TIMES = ['dawn', 'morning', 'noon', 'afternoon', 'golden-hour', 'dusk', 'night'];
export const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
export const WEATHERS = ['clear', 'overcast', 'fog', 'light-rain', 'rain', 'storm'];
export const TREE_KINDS = ['tree-deciduous-6m', 'tree-deciduous-10m', 'tree-ornamental-4m', 'tree-conifer-8m', 'tree-columnar-7m', 'tree-birch-9m', 'tree-palm-8m', 'shrub-round-1200', 'shrub-small-600', 'hedge-2000'];
export const PERSON_KINDS = ['person-standing', 'person-walking', 'person-standing-2', 'child-standing'];

const r2 = (v) => Math.round(v * 100) / 100;

/** Seeded random numbers (the entourage generator's own generator): the same words give the same picture. */
export function rng(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ------------------------------------------------------------------ the day
/** Sunrise, sunset and solar noon (local clock hours) and the highest the sun gets, on the day in `sun` ({month, day, lat, lon, tz}). */
export function dayTimes(sun) {
  let rise = null, set = null, noon = 12, maxAlt = -90, prev = null;
  for (let i = 0; i <= 480; i++) {
    const h = Math.min(i * 0.05, 23.99), a = sunPosition({ ...sun, hour: h }).altitude;
    if (a > maxAlt) { maxAlt = a; noon = h; }
    if (prev !== null) { if (prev <= 0 && a > 0 && rise === null) rise = h; if (prev > 0 && a <= 0) set = h; }
    prev = a;
  }
  return { rise, set, noon: r2(noon), maxAlt: r2(maxAlt) };
}

const FIXED = { dawn: 6, morning: 9, noon: 12, afternoon: 15, 'golden-hour': 18, dusk: 20, night: 23 };
/** Exposure nudges in stops: a low sun reads darker through the same camera. */
const TIME_EXPOSURE = { dawn: -0.2, morning: 0, noon: 0, afternoon: 0, 'golden-hour': 0.1, dusk: -0.3, night: 0 };

/** A named time of day (or an hour, 0–24) on the day in `sun`: the hour on the clock, the sky it asks for, its exposure nudge. */
export function hourFor(time, sun) {
  const notes = [];
  if (typeof time === 'number') {
    const hour = Math.min(23.99, Math.max(0, time));
    return { hour: r2(hour), sky: null, exposure: 0, night: sunPosition({ ...sun, hour }).altitude <= 0, notes };
  }
  if (!TIMES.includes(time)) throw new RangeError('time is one of ' + TIMES.join(', ') + ', or an hour from 0 to 24.');
  const d = dayTimes(sun);
  let hour;
  if (d.rise === null || d.set === null) {
    hour = FIXED[time];
    notes.push(d.maxAlt > 0 ? 'The sun does not set on this date at this latitude: the clock hour is a plain ' + hour + ':00.' : 'The sun does not rise on this date at this latitude: the picture is dark whatever the hour.');
  } else if (time === 'dawn') hour = d.rise + 0.3;
  else if (time === 'morning') hour = d.rise + 0.45 * (d.noon - d.rise);
  else if (time === 'noon') hour = d.noon;
  else if (time === 'afternoon') hour = d.noon + 0.55 * (d.set - d.noon);
  else if (time === 'golden-hour') {
    let h = d.set - 0.8;
    for (let x = d.noon; x < d.set; x += 0.05) if (sunPosition({ ...sun, hour: x }).altitude <= 7) { h = x; break; }
    hour = h;
  } else if (time === 'dusk') hour = d.set - 0.1;
  else {
    hour = d.set + 2;
    if (hour > 23.9) { hour = 23.9; notes.push('Night falls late on this date here: 23:54 is the darkest clock time on the day.'); }
  }
  hour = r2(Math.min(23.99, Math.max(0, hour)));
  const night = sunPosition({ ...sun, hour }).altitude <= 0;
  if (night) notes.push('The sun is down: the sky is the dark night sky and only lamps (Render › lamps) and lit windows light the picture.');
  return { hour, sky: time === 'dusk' ? 'dusk' : null, exposure: TIME_EXPOSURE[time] || 0, night, notes };
}

// ------------------------------------------------------------------ the year
/** The season of a month in the model's hemisphere (meteorological: Dec–Feb is winter in the north). */
export function seasonOf(month, lat = 40) {
  const n = month === 12 || month <= 2 ? 'winter' : month <= 5 ? 'spring' : month <= 8 ? 'summer' : 'autumn';
  if (lat >= 0) return n;
  return { winter: 'summer', spring: 'autumn', summer: 'winter', autumn: 'spring' }[n];
}
/** A day in the middle of a season, for the sun. */
export function seasonDate(season, lat = 40) {
  if (!SEASONS.includes(season)) throw new RangeError('season is one of ' + SEASONS.join(', ') + '.');
  const north = { spring: [4, 15], summer: [6, 21], autumn: [10, 15], winter: [1, 15] };
  const south = { spring: [10, 15], summer: [12, 21], autumn: [4, 15], winter: [7, 15] };
  const [month, day] = (lat >= 0 ? north : south)[season];
  return { month, day };
}

// ------------------------------------------------------------------ the weather
/**
 * Weather as render settings. wet = 0 dry, 1 damp (flat surfaces turn satin), 2 wet (they turn glossy). Fog is the path tracer's
 * (pt-volume.js): visibility in metres, the layer's top above the ground, the light's forward lean.
 */
const WEATHER = {
  clear: { sky: null, exposure: 0, fog: null, wet: 0, rain: false },
  overcast: { sky: 'overcast', exposure: 0.2, fog: null, wet: 0, rain: false },
  fog: { sky: 'overcast', exposure: 0.3, fog: { on: true, visibility: 160, top: 60, g: 0.3, color: '#dfe2e4' }, wet: 1, rain: false },
  'light-rain': { sky: 'overcast', exposure: -0.2, fog: { on: true, visibility: 1500, top: 90, g: 0.2, color: '#cfd4d8' }, wet: 1, rain: true },
  rain: { sky: 'overcast', exposure: -0.5, fog: { on: true, visibility: 700, top: 90, g: 0.2, color: '#c3c9ce' }, wet: 2, rain: true },
  storm: { sky: 'overcast', exposure: -1, fog: { on: true, visibility: 350, top: 120, g: 0.1, color: '#a9b0b7' }, wet: 2, rain: true },
};
export function weatherLook(weather) {
  const w = WEATHER[weather];
  if (!w) throw new RangeError('weather is one of ' + WEATHERS.join(', ') + '.');
  return { ...w, fog: w.fog ? { ...w.fog } : null };
}

/** Which engines draw what: said once, in the result, so the assistant can tell the person. */
function engineNotes(weather, engine) {
  const w = WEATHER[weather], out = [];
  if (w.fog) out.push('Fog and the soft light in it show in the high-quality render (the path tracer, Render › Mode). The quick render and the outside engines (Blender, Unreal) draw the grey sky, the light and the wet surfaces, not the haze.');
  if (w.rain) out.push('Rain is shown by the overcast sky, the dim light, the haze, shiny wet paving and umbrellas; falling streaks are not drawn.');
  if (engine && !['', 'fast', 'pt'].includes(engine)) out.push('The render engine is "' + engine + '": it receives the sun, the sky and the wet surfaces in the hand-off package; the haze stays in the built-in path tracer.');
  return out;
}

/**
 * The whole look for the choices made. `sun` = the model's sun {month, day, hour, lat, lon, tz}; `engine` = the render settings'
 * engine id (for the notes only). time may be a name, an hour, or absent (the sun's hour stays). date {month, day} beats season.
 */
export function lookFor({ time, date, season, weather, sun, engine = '' } = {}) {
  const base = { month: 6, day: 21, hour: 15, lat: 40, lon: -105, tz: -7, ...(sun || {}) };
  const notes = [];
  let seas = null;
  let day = { month: base.month, day: base.day };
  if (date) {
    const m = Math.round(date.month), d = Math.round(date.day);
    if (!(m >= 1 && m <= 12 && d >= 1 && d <= 31)) throw new RangeError('date is {month: 1–12, day: 1–31}.');
    day = { month: m, day: d };
    seas = season || seasonOf(m, base.lat);
  } else if (season) { day = seasonDate(season, base.lat); seas = season; }
  const onDay = { ...base, ...day };
  let hour = base.hour, skyHint = null, expo = 0;
  if (time !== undefined && time !== null) {
    const h = hourFor(time, onDay);
    hour = h.hour; skyHint = h.sky; expo = h.exposure; notes.push(...h.notes);
  }
  const wName = weather || 'clear';
  const w = weatherLook(wName);
  const sky = w.sky || skyHint || 'clear';
  const nightNow = sunPosition({ ...onDay, hour }).altitude <= 0;
  notes.push(...engineNotes(wName, engine));
  return {
    sun: { month: day.month, day: day.day, hour: r2(hour) },
    patch: { sky, exposure: r2(w.exposure + expo), fog: w.fog ? { ...w.fog } : { on: false }, sun: null },
    wet: w.wet, rain: w.rain, season: seas || seasonOf(day.month, base.lat), seasonGiven: !!seas,
    weather: wName, night: nightNow, notes,
  };
}

// ------------------------------------------------------------------ trees in a season
/** What each kind does with the seasons: broadleaf drops its leaves, ornamental blossoms, evergreen and palm stay as they are. */
const HABIT = {
  'tree-deciduous-6m': 'broadleaf', 'tree-deciduous-10m': 'broadleaf', 'tree-birch-9m': 'broadleaf', 'tree-columnar-7m': 'broadleaf',
  'tree-ornamental-4m': 'ornamental', 'tree-conifer-8m': 'evergreen', 'tree-palm-8m': 'evergreen',
  'shrub-round-1200': 'shrub', 'shrub-small-600': 'shrub', 'hedge-2000': 'shrub',
};
const LEAF_PART = { 'tree-conifer-8m': 'needles', 'tree-palm-8m': 'fronds' };
const COLORS = {
  spring: ['#9cc25a', '#8ab84d', '#a9c96a'],
  blossom: ['#e9b7c9', '#f0c9d6', '#d99fb5'],
  autumn: ['#c8641e', '#d9a21b', '#a63d1f', '#b8862b'],
  shrubWinter: ['#6b5f3e', '#5d5a3c'],
};
export const habitOf = (slug) => HABIT[slug] || null;
/**
 * How a tree of this kind looks in a season: a list of variants (a street of trees takes several, so they do not all match):
 * {key (names the component), recolor {part: '#rrggbb'}, omit [part names]}. Summer is the library's own colours.
 */
export function variantsFor(slug, season) {
  const habit = HABIT[slug];
  if (!habit) throw new RangeError('Unknown plant "' + slug + '". Kinds: ' + TREE_KINDS.join(', ') + '.');
  if (!SEASONS.includes(season)) throw new RangeError('season is one of ' + SEASONS.join(', ') + '.');
  const part = LEAF_PART[slug] || 'leaves';
  if (season === 'summer' || habit === 'evergreen') return [{ key: 'summer', recolor: {}, omit: [] }];
  if (season === 'spring') {
    const list = habit === 'ornamental' ? COLORS.blossom : COLORS.spring;
    return list.map((c) => ({ key: 'spring' + c.slice(1), recolor: { [part]: c }, omit: [] }));
  }
  if (season === 'autumn') return COLORS.autumn.map((c) => ({ key: 'autumn' + c.slice(1), recolor: { [part]: c }, omit: [] }));
  // winter
  if (habit === 'shrub') return COLORS.shrubWinter.map((c) => ({ key: 'winter' + c.slice(1), recolor: { [part]: c }, omit: [] }));
  return [{ key: 'winter', recolor: {}, omit: [part] }];
}

// ------------------------------------------------------------------ where things go
/**
 * `count` points inside a region, seeded, none closer than minDist to another or to `keep` (points already there) and none
 * inside an `avoid` box [x0, y0, x1, y1]. region = {rect: [x0, y0, x1, y1], inside?: (x, y) → bool} or {line: [[x, y], [x, y]]}
 * (points evenly along it, `jitter` metres sideways at most). Fewer points come back, with `short`, when the region is full.
 */
export function spread(region, count, { minDist = 1, seed = 1, avoid = [], keep = [], margin = 0.3, jitter = 0.3 } = {}) {
  const R = rng(seed), out = [];
  const near = (x, y) => out.concat(keep).some((p) => (p.x - x) ** 2 + (p.y - y) ** 2 < minDist * minDist);
  const blocked = (x, y) => avoid.some((b) => x >= b[0] - 0.2 && x <= b[2] + 0.2 && y >= b[1] - 0.2 && y <= b[3] + 0.2);
  if (region.line) {
    const [[ax, ay], [bx, by]] = region.line, L = Math.hypot(bx - ax, by - ay);
    if (L < 1e-6) return { points: [{ x: ax, y: ay }], short: Math.max(0, count - 1) };
    const nx = -(by - ay) / L, ny = (bx - ax) / L;
    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0.5 : i / (count - 1), s = (R() * 2 - 1) * jitter;
      const x = ax + (bx - ax) * t + nx * s, y = ay + (by - ay) * t + ny * s;
      if (!blocked(x, y)) out.push({ x: r2(x), y: r2(y) });
    }
    return { points: out, short: count - out.length };
  }
  const [x0, y0, x1, y1] = region.rect;
  const w = x1 - x0 - 2 * margin, h = y1 - y0 - 2 * margin;
  if (w <= 0 || h <= 0) return { points: [], short: count };
  const inside = region.inside || (() => true);
  for (let n = 0; n < count; n++) {
    let ok = false;
    for (let tries = 0; tries < 60 && !ok; tries++) {
      const x = x0 + margin + R() * w, y = y0 + margin + R() * h;
      if (!inside(x, y) || blocked(x, y) || near(x, y)) continue;
      out.push({ x: r2(x), y: r2(y) }); ok = true;
    }
  }
  return { points: out, short: count - out.length };
}

/** A column-major 4×4: yaw about Z (radians), uniform scale, then the move. */
export function placement(x, y, z, yaw = 0, scale = 1) {
  const c = Math.cos(yaw) * scale, s = Math.sin(yaw) * scale;
  return [c, s, 0, 0, -s, c, 0, 0, 0, 0, scale, 0, x, y, z, 1];
}

/** The clothes a crowd wears: muted, a few bright. */
export const CLOTHES = ['#3e5c7a', '#7a3e3e', '#c8c1b3', '#3e7a5c', '#5a5a66', '#a8763e', '#2f3b4f', '#b34a4a'];
export const UMBRELLAS = ['#1f2a44', '#2d2d30', '#8a1f24', '#2d5a3a', '#c9a227'];

/** The scene's saved words, from a file (untrusted): only what look_set wrote, nothing else. */
export function cleanSay(x) {
  if (!x || typeof x !== 'object') return null;
  const time = TIMES.includes(x.time) ? x.time : typeof x.time === 'number' && x.time >= 0 && x.time < 24 ? x.time : null;
  const wet = (Array.isArray(x.wet) ? x.wet : []).filter((k) => typeof k === 'string' && /^(#[0-9a-f]{6}|default)$/.test(k)).slice(0, 12);
  return {
    v: 1, time, weather: WEATHERS.includes(x.weather) ? x.weather : null, season: SEASONS.includes(x.season) ? x.season : null,
    wet, wetLook: x.wetLook === 'glossy' ? 'glossy' : 'satin',
  };
}
