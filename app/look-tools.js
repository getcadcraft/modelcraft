/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * look-tools.js — "say the scene" for AI assistants (0.8 round 2, EG.61 ★, session `model_PART_2`; docs/AI-CONNECT-SPEC.md § 2).
 * The apps contain no AI (rule 35): the person's own assistant — or the Ask box, which is the same assistant — turns "dusk, light rain,
 * autumn trees, people on the plaza" into one look_set call; this file is what the call does, through scene-say.js (the numbers) and
 * scene-entourage.js (the trees and people). Nothing here reads words.
 *
 *   look_set      time, date or season, weather, and trees / people to plant, in one call (preview shows it first)
 *   look_describe the look now: sun, sky, fog, exposure, weather, season, what the scene holds, the render engine
 *   places_list   where trees and people can stand (ids for look_set / trees_add / people_add)
 *   trees_add · people_add · entourage_delete
 *
 * The sun is the model's own sun (Style › sun), so the view's shadows and every render engine follow it. Sky, exposure, fog and
 * the wet look are the Render dialog's settings (saved with the file). Trees and people are placements on tags of their own and
 * one undo step ("Assistant: scene look"); the sun and the render settings are view state, not in Undo (the result says so).
 *
 *   lookTools({ app, model, edit, PREFIX }) → tool definitions for C.tool()
 *     app.look = { sun() → {month, day, hour, lat, lon, tz}, setSun({month, day, hour}), settings() → render settings | null,
 *                  saveSettings(s), state() → the scene's saved words | null, saveState(s), flatColors() → [{key, area}] }
 */
import { ToolError } from './host.js';
import { sunPosition } from './sun.js';
import { TIMES, SEASONS, WEATHERS, TREE_KINDS, PERSON_KINDS, lookFor, weatherLook, dayTimes } from './scene-say.js';
import { placesOf, plantTrees, plantPeople, setTreeSeason, clearScene, sceneCounts } from './scene-entourage.js';

const DEFAULT_FOG = Object.freeze({ on: false, visibility: 300, top: 40, g: 0.5, color: '#ffffff' });
const WET_COLOURS = 6;   // the largest flat colours turn wet; a plaza and a road, not every swatch

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const COORD = { type: 'number', minimum: -1000000, maximum: 1000000 };
const WHERE = obj({
  instance: { type: 'integer', minimum: 1, description: 'A placement\'s id from places_list (stand on or in it: trees and people go on its top).' },
  face: { type: 'integer', minimum: 0, description: 'A loose flat face\'s id from places_list.' },
  rect: { type: 'array', items: COORD, minItems: 4, maxItems: 4, description: 'A rectangle [x0, y0, x1, y1] in metres (Z up, north +Y).' },
  line: { type: 'array', items: { type: 'array', items: COORD, minItems: 2, maxItems: 2 }, minItems: 2, maxItems: 2, description: 'A line [[x, y], [x, y]] in metres; things stand evenly along it, and people on it walk along it, half each way (a crowd on a path).' },
  z: { ...COORD, description: 'The height they stand at in metres. Default: the top of the placement or face, else 0.' },
});
WHERE.description = 'Where, with exactly one of instance, face, rect or line (call places_list for ids).';
const TREES = obj({
  kind: { type: 'string', enum: TREE_KINDS, description: 'Which plant. Default tree-deciduous-6m.' },
  count: { type: 'integer', minimum: 1, maximum: 200, description: 'How many (fewer come back, with `short`, when the place is full).' },
  where: WHERE,
  seed: { type: 'integer', minimum: 0, maximum: 2147483647, description: 'Same seed, same layout. Default: a new one each call.' },
  spacing: { type: 'number', minimum: 0.3, maximum: 50, description: 'The least distance between two, in metres. Default about the size of the crown.' },
}, ['where']);
const PEOPLE = obj({
  count: { type: 'integer', minimum: 1, maximum: 200, description: 'How many people.' },
  where: WHERE,
  mix: { type: 'array', items: { type: 'string', enum: PERSON_KINDS }, minItems: 1, maxItems: 4, description: 'Which figures to draw from. Default all four.' },
  umbrellas: { type: 'string', enum: ['auto', 'yes', 'no'], default: 'auto', description: '"auto" = under umbrellas while it rains; yes / no to force it.' },
  seed: { type: 'integer', minimum: 0, maximum: 2147483647, description: 'Same seed, same layout. Default: a new one each call.' },
}, ['where']);

const OUT = {
  type: 'object',
  properties: {
    look: { type: 'object', description: 'The look now.', properties: {
      sun: { type: 'object', description: 'month, day, hour, altitude and azimuth in degrees.' }, sky: { type: 'string', description: 'clear, overcast or dusk.' }, exposure: { type: 'number', description: 'Stops.' }, fog: { type: 'object', description: 'Settings of the haze.' },
      weather: { type: 'string', description: 'The weather named.' }, season: { type: 'string', description: 'The season the trees are in.' }, time: { description: 'The time named, or the hour.' }, wet: { type: 'array', items: { type: 'string' }, description: 'The colours that turned wet.' } } },
    trees: { type: 'object', description: 'What was planted, or null.' }, people: { type: 'object', description: 'Who was placed, or null.' },
    notes: { type: 'array', items: { type: 'string' }, description: 'Things to tell the person.' }, undo: { type: 'string', description: 'The undo step\'s label when the model changed.' },
  },
};

export function lookTools({ app, model, edit, PREFIX }) {
  const L = () => { if (!app.look) throw new ToolError('unsupported', 'This window cannot set a look.', { next: ['Open ModelCraft in a browser tab or in CadCraft Studio.'] }); return app.look; };
  const sunInfo = (s) => { const p = sunPosition(s); return { month: s.month, day: s.day, hour: s.hour, altitude: Math.round(p.altitude * 10) / 10, azimuth: Math.round(p.azimuth * 10) / 10 }; };

  /** One call: the look, then the trees, then the people. ctx.preview: the view and render settings stay as they are (the model part is rolled back by the dispatcher). */
  async function run(a, ctx) {
    const look = L(), preview = !!(ctx && ctx.preview);
    const st = look.state() || {}, settings = look.settings() || {}, cur = look.sun();
    if (a.time !== undefined && a.hour !== undefined) throw new ToolError('invalid_argument', 'Give time or hour, not both.', { next: ['time: ' + TIMES.join(', ') + '.', 'hour: a number 0–23.99.'] });
    const when = a.time ?? a.hour;
    const wants = when !== undefined || a.date || a.season || a.weather;
    let P = null;
    if (wants) {
      try { P = lookFor({ time: when ?? st.time ?? undefined, date: a.date, season: a.season, weather: a.weather ?? st.weather ?? 'clear', sun: cur, engine: settings.engine || '' }); }
      catch (e) { throw new ToolError('invalid_argument', e.message, { next: ['time: ' + TIMES.join(', ') + ' or an hour 0–24.', 'weather: ' + WEATHERS.join(', ') + '.', 'season: ' + SEASONS.join(', ') + '.'] }); }
    }
    const notes = P ? P.notes.slice() : [];
    let out = { look: null, trees: null, people: null };
    // ---- the sun, the sky, the wet and the fog: view state
    if (P) {
      const s = { ...settings, looks: { ...(settings.looks || {}) } };
      for (const k of st.wet || []) if (s.looks[k] === st.wetLook) delete s.looks[k];
      const wetLook = P.wet === 2 ? 'glossy' : 'satin', wet = [];
      let skipped = 0;
      if (P.wet > 0) {
        const flats = await look.flatColors();   // the ground: the colours with a real share of the flat area (a roof's few square metres stay dry)
        for (const { key } of flats.filter((c) => c.area >= Math.max(4, flats[0].area * 0.15)).slice(0, WET_COLOURS)) {
          if (s.looks[key]) { skipped++; continue; }   // the person set that colour's look: theirs stays
          s.looks[key] = wetLook; wet.push(key);
        }
        if (!wet.length) notes.push('No flat surface colour could turn wet: floors and paving painted with library materials carry their own look (give them a colour, or a glossy material), and colours the person already gave a look stay as they are.');
        else if (skipped) notes.push(skipped + ' flat surface colour(s) keep the look the person gave them.');
      }
      s.sky = P.patch.sky; s.exposure = P.patch.exposure; s.fog = { ...DEFAULT_FOG, ...P.patch.fog }; s.sun = null;   // sun null = the model's own sun, which is the one set here
      const stateOut = { v: 1, time: when ?? st.time ?? null, weather: P.weather, season: a.season || a.date ? P.season : (st.season ?? null), wet, wetLook };
      if (!preview) { look.setSun(P.sun); look.saveSettings(s); look.saveState(stateOut); }
      const sunAt = { ...cur, ...P.sun };
      out.look = { sun: sunInfo(sunAt), sky: P.patch.sky, exposure: P.patch.exposure, fog: s.fog, weather: P.weather, season: stateOut.season, time: stateOut.time ?? P.sun.hour, wet };
      notes.push('The sun, sky, fog and wet surfaces are view and render settings: Undo does not take them back; set them again to change them.');
    }
    // ---- trees and people: placements in the model, one undo step
    const season = P?.seasonGiven ? P.season : (a.treeSeason ?? st.season ?? 'summer');
    const turn = P?.seasonGiven ? P.season : a.treeSeason || null;   // trees_add with a season turns the scene's other trees too, and leaves the sun alone
    if (a.treeSeason && !preview && !P) look.saveState({ ...st, v: 1, season: a.treeSeason });
    const raining = P ? P.rain : !!(st.weather && weatherLook(st.weather).rain);
    let undo = null;
    if (a.trees || a.people || turn || a.replace) {
      edit('scene look', (m) => {
        if (a.replace) { if (a.trees) clearScene(m, 'trees'); if (a.people) clearScene(m, 'people'); }
        if (turn) out.seasonChange = setTreeSeason(m, turn);
        if (a.trees) out.trees = plantTrees(m, { ...a.trees, season, ...(a.trees.spacing ? { minDist: a.trees.spacing } : {}) });
        if (a.people) out.people = plantPeople(m, { ...a.people, umbrellas: a.people.umbrellas === 'yes' || ((a.people.umbrellas || 'auto') === 'auto' && raining) });
      });
      undo = PREFIX + 'scene look';
      for (const r of [out.trees, out.people]) if (r?.short) notes.push(r.short + ' did not fit in ' + r.where + ' (it is full, or part of it is taken by what stands there).');
      if (out.trees?.warning) notes.push(out.trees.warning);
    }
    if (!out.look && !out.trees && !out.people && !out.seasonChange) throw new ToolError('invalid_argument', 'Nothing to set: give time, date, season, weather, trees or people.', { next: ['Example: {time: "dusk", weather: "light-rain", season: "autumn", trees: {count: 8, where: {instance: 3}}, people: {count: 12, where: {instance: 3}}}.', 'Call look_describe for the look now and places_list for places.'] });
    const sc = sceneCounts(model);
    if (out.seasonChange) notes.push(out.seasonChange.trees ? 'The ' + out.seasonChange.trees + ' scene tree(s) already in the model took the season.' : 'There are no scene trees in the model yet to turn to the season.');
    return { ...out, scene: sc, notes, ...(undo ? { undo } : {}) };
  }

  const set = {
    name: 'look_set', group: 'edit', rollbackPreview: true, title: 'Set the time, weather and season',
    description: 'Say the scene in one call: the time of day (a name or an hour), the date or season, the weather, and trees and people to place in it. It sets the model\'s sun (shadows follow), the sky, exposure, fog and wet paving for the renders, turns the scene\'s trees to the season, and plants trees and people where you name. Returns the look now and what was placed. Fog shows in the high-quality render; the notes say what each engine draws. Trees and people are one undo step; the sun and render settings are not in Undo.',
    inputSchema: obj({
      time: { type: 'string', enum: TIMES, description: 'A time of day on the sun\'s date: ' + TIMES.join(', ') + '. For an exact time use hour instead.' },
      hour: { type: 'number', minimum: 0, maximum: 23.99, description: 'An hour on the clock instead of time: 17.5 = 5:30 pm, in the model\'s own time zone.' },
      date: { ...obj({ month: { type: 'integer', minimum: 1, maximum: 12, description: 'Month 1–12.' }, day: { type: 'integer', minimum: 1, maximum: 31, description: 'Day of the month.' } }, ['month', 'day']), description: 'The sun\'s date; beats season for the sun.' },
      season: { type: 'string', enum: SEASONS, description: 'A season: it picks a date for the sun (unless date is given) and turns the scene\'s trees. Seasons follow the model\'s hemisphere.' },
      weather: { type: 'string', enum: WEATHERS, description: 'The weather: clear, overcast, fog, light-rain, rain or storm. Rain shows as grey light, haze, wet paving and umbrellas; streaks are not drawn.' },
      trees: { ...TREES, description: 'Trees, shrubs or a hedge to plant: kind, count, where.' }, people: { ...PEOPLE, description: 'People to place: count, where, and optionally mix and umbrellas.' },
      replace: { type: 'boolean', default: false, description: 'true removes the scene\'s earlier trees (when trees is given) and people (when people is given) first.' },
    }),
    outputSchema: OUT,
    run,
  };

  const describe = {
    name: 'look_describe', group: 'read', title: 'Describe the look',
    description: 'The look now: the sun (date, hour, altitude, azimuth) and the day\'s sunrise, noon and sunset, sky, exposure, fog, wet colours, the weather and season last set, the render engine chosen, and how many scene trees and people the model holds. Use places_list to find places for them.',
    inputSchema: obj({}),
    run: async () => {
      const look = L(), st = look.state() || {}, s = look.settings() || {}, cur = look.sun(), t = dayTimes(cur);
      return { sun: sunInfo(cur), day: { sunrise: t.rise, noon: t.noon, sunset: t.set }, sky: s.sky || 'clear', exposure: s.exposure || 0, fog: s.fog || DEFAULT_FOG, engine: s.engine || '', mode: s.mode || 'fast',
        weather: st.weather ?? null, season: st.season ?? null, time: st.time ?? null, wet: st.wet || [], scene: sceneCounts(model) };
    },
  };

  const places = {
    name: 'places_list', group: 'read', untrusted: true, title: 'List places for trees and people',
    description: 'Placements and big flat faces at the model\'s top level where trees and people can stand: id (instance or face), name, kind (flat = a slab or paving, standing = a tall thing), bounding box and top height in metres, area in m². Names come from the file. Pass the id as where in look_set, trees_add or people_add.',
    inputSchema: obj({ limit: { type: 'integer', minimum: 1, maximum: 200, default: 50, description: 'How many places (largest first).' } }),
    run: async (a) => placesOf(model, { limit: a.limit || 50 }),
  };

  const treesAdd = {
    name: 'trees_add', group: 'edit', rollbackPreview: true, title: 'Plant trees',
    description: 'Plant trees, shrubs or a hedge in a place (instance, face, rectangle or line, from places_list), in the season last set (or the one given). Returns their ids. Same as look_set with only trees. One undo step.',
    inputSchema: obj({ ...TREES.properties, season: { type: 'string', enum: SEASONS, description: 'Plant them in this season\'s colours (and turn the scene\'s other trees to it).' } }, ['where']),
    run: (a, ctx) => { const { season, ...trees } = a; return run({ trees, ...(season ? { treeSeason: season } : {}) }, ctx); },
  };
  const peopleAdd = {
    name: 'people_add', group: 'edit', rollbackPreview: true, title: 'Place people',
    description: 'Place people (standing, walking, a child) in a place (from places_list), under umbrellas while the weather set is rain. Returns their ids. Same as look_set with only people. One undo step.',
    inputSchema: PEOPLE,
    run: (a, ctx) => run({ people: a }, ctx),
  };
  const del = {
    name: 'entourage_delete', group: 'edit', rollbackPreview: true, title: 'Clear the scene\'s trees and people',
    description: 'Remove the trees, people and umbrellas the scene tools placed (not anything the person drew). Returns how many were removed. One undo step.',
    inputSchema: obj({ what: { type: 'string', enum: ['all', 'trees', 'people'], default: 'all', description: 'all, only the trees, or only the people (and their umbrellas).' } }),
    run: async (a) => { const r = edit('clear scene', (m) => clearScene(m, a.what || 'all')); return { ...r, scene: sceneCounts(model), undo: PREFIX + 'clear scene' }; },
  };
  return [set, describe, places, treesAdd, peopleAdd, del];
}
