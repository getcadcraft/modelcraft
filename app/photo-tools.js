/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person. */
/**
 * photo-tools.js — "material from a photo" for AI assistants (0.8 round 2, EG.62, session `model_PART_2`; docs/AI-CONNECT-SPEC.md § 2).
 * The same function as the Shading panel's "A photo…" button (ws-shading.js makeMaterialFromPhoto): the photo is read, flattened,
 * made to tile, and its colour, roughness and normal map become a node material of the file. Image processing only (rule 35).
 *
 *   material_make    a photo (a file in an allowed folder, Studio; or a picture already in the file) → a tiling material
 *   pictures_list    the pictures in the file (ids for material_make)
 *   material_delete  take a material of the file away (the one material_make made, or any of the file's own)
 *
 *   photoTools({ app, C }) → tool definitions for C.tool()
 *     app.photo = { pictures() → [{id, name, mime, kb}], picture(id) → {mime, bytes} | null, make(photo, opts) → result,
 *                   has(id) → bool, remove(id) }
 */
import { ToolError } from './host.js';
import { decodePhoto, MAX_SIDE } from './photo-material.js';

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const MIME = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
const MAX_BYTES = 32 * 1048576;
const FRACTION = { type: 'number', minimum: 0, maximum: 1 };

export function photoTools({ app, C }) {
  const P = () => { if (!app.photo) throw new ToolError('unsupported', 'This window cannot make materials.', { next: ['Open ModelCraft in a browser tab or in CadCraft Studio.'] }); return app.photo; };

  const make = {
    name: 'material_make', group: 'edit', title: 'Make a material from a photo',
    description: 'Make a tiling material from one photo of a surface: the lighting is flattened, the edges are made to join, and a colour map, a roughness map and a normal map are worked out from the picture by image processing (no model). Give a file in an allowed folder (Studio) or a picture already in the file (pictures_list). Returns the material\'s paint id (use it with the paint tool), the seam before and after (1 is invisible) and notes. Roughness is an estimate: set it for the surface. The material and its pictures are not in Undo; material_delete removes them.',
    inputSchema: obj({
      path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a PNG, JPEG or WebP file inside the folders the person allowed (Settings › Assistants › Folders it may use), up to 32 MB.' },
      picture: { type: 'string', minLength: 1, maxLength: 64, description: 'The id of a picture already in the file, from pictures_list (browser or Studio).' },
      name: { type: 'string', minLength: 1, maxLength: 80, description: 'The material\'s name. Default: "Photo material".' },
      tile: { type: 'number', minimum: 0.01, maximum: 100, default: 1, description: 'How many metres across the photo (the part used) shows in real life. This sets the size of one repeat. Default 1.' },
      crop: { type: 'array', items: FRACTION, minItems: 4, maxItems: 4, description: 'The part of the photo to use as [x, y, width, height] fractions of the picture, from the top left (e.g. [0.2, 0.2, 0.5, 0.5]). Default: the largest square in the middle.' },
      flatten: { type: 'boolean', default: true, description: 'Take the lighting falling off across the photo out of the colours (a side-lit photo tiles as stripes otherwise).' },
      seamless: { type: 'boolean', default: true, description: 'Make the tile join itself at the edges. A busy pattern can show a soft ghost along the old middle.' },
      roughness: { type: 'number', minimum: 0, maximum: 1, default: 0.65, description: 'The surface\'s base roughness: 0.15 polished, 0.4 satin, 0.65 default, 0.9 chalk. The photo adds detail around it.' },
      bump: { type: 'number', minimum: 0, maximum: 4, default: 1, description: 'How strongly the relief reads in the normal map: 0 none, 1 default, 4 deep.' },
    }),
    outputSchema: { type: 'object', properties: {
      id: { type: 'string', description: 'The material\'s id in the file (null in a preview).' }, paint: { type: 'string', description: 'The paint id for the paint tool: "mat:<id>".' }, name: { type: 'string', description: 'The name.' },
      size: { type: 'number', description: 'Metres per repeat.' }, maps: { type: 'array', items: { type: 'string' }, description: 'color, roughness, normal.' }, seam: { type: 'object', description: 'before and after: 1 = invisible.' }, notes: { type: 'array', items: { type: 'string' }, description: 'Things to tell the person.' } } },
    preview: (a) => run(a, true),
    run: (a) => run(a, false),
  };
  async function run(a, preview) {
    const host = P();
    if (!!a.path === !!a.picture) throw new ToolError('invalid_argument', 'Give exactly one of path (a file, Studio) or picture (an id from pictures_list).', { next: ['Call pictures_list for the pictures in the file.', 'In CadCraft Studio, give path to a photo inside an allowed folder.'] });
    let bytes, mime;
    if (a.path) {
      if (!C.files.available) throw new ToolError('unsupported', 'File paths work only in CadCraft Studio (the desktop app).', { next: ['Ask the person to add the photo with Shading › Add picture, then use picture with an id from pictures_list.'] });
      mime = MIME[(/\.([a-z0-9]+)$/i.exec(a.path) || [])[1]?.toLowerCase()];
      if (!mime) throw new ToolError('invalid_argument', 'The photo must be a .png, .jpg, .jpeg or .webp file.', { next: ['Give a path that ends in one of those.'] });
      bytes = await C.files.read(a.path);
    } else {
      const pic = host.picture(a.picture);
      if (!pic) throw new ToolError('not_found', 'There is no picture ' + JSON.stringify(a.picture) + ' in the file.', { next: ['Call pictures_list for the ids.'] });
      ({ mime, bytes } = pic);
    }
    if (bytes.length > MAX_BYTES) throw new ToolError('too_large', 'That picture is over 32 MB.', { next: ['Use a smaller export of the photo.'] });
    let photo;
    try { photo = await decodePhoto(mime, bytes); } catch (e) { throw new ToolError('invalid_argument', /larger than/.test(e.message) ? e.message : 'That file could not be read as a picture.', { next: ['Use a PNG, JPEG or WebP up to ' + MAX_SIDE + ' pixels on a side.'] }); }
    try { return host.make(photo, { name: a.name, size: a.tile ?? 1, crop: a.crop, flatten: a.flatten, seamless: a.seamless, roughness: a.roughness, bump: a.bump, preview: !!preview }); }
    catch (e) { if (e instanceof RangeError) throw new ToolError('invalid_argument', e.message, { next: ['crop is [x, y, width, height] as fractions of the picture.'] }); throw e; }
  }

  const list = {
    name: 'pictures_list', group: 'read', untrusted: true, title: 'List the pictures in the file',
    description: 'The pictures kept in the file (imported textures and photos): id, name, type and size in KB. Names come from the file. Use an id as picture in material_make.',
    inputSchema: obj({ limit: { type: 'integer', minimum: 1, maximum: 500, default: 100, description: 'How many pictures to return.' }, offset: { type: 'integer', minimum: 0, maximum: 100000, default: 0, description: 'Skip this many.' } }),
    run: async (a) => { const all = P().pictures(), off = a.offset || 0, lim = a.limit || 100; return { total: all.length, returned: Math.min(lim, Math.max(0, all.length - off)), pictures: all.slice(off, off + lim) }; },
  };

  const del = {
    name: 'material_delete', group: 'edit', title: 'Remove a material from the file',
    description: 'Remove one of the file\'s own materials (an id such as the one material_make returned, with or without "mat:"). Faces that wore it show the default colour. The library\'s materials cannot be removed. Returns whether it went.',
    inputSchema: obj({ id: { type: 'string', minLength: 1, maxLength: 20, description: 'The material\'s id, e.g. "m3k9x0aq" or "mat:m3k9x0aq".' } }, ['id']),
    preview: (a) => { const id = String(a.id).replace(/^mat:/, ''); return { exists: P().has(id), id }; },
    run: async (a) => {
      const id = String(a.id).replace(/^mat:/, '');
      if (!P().has(id)) throw new ToolError('not_found', 'The file has no material ' + JSON.stringify(id) + '.', { next: ['Call materials_list for the materials the file has.'] });
      P().remove(id);
      return { removed: id };
    },
  };
  return [make, list, del];
}
