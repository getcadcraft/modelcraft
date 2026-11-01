/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handoff-mc.js — ModelCraft's side of the render hand-off (0.8 RE.2, session `engines`; render/handoff.js has the package and
 * the manifest). Apart from three.js geometry (mcScene) DOM-free. The Render dialog's `handoff(settings, {w, h})` option is made here:
 *
 *   mcHandoff({ model, cam, style, file, name, appVersion }) → async (settings, { w, h, frames?, glb? }) → package { manifest, files }
 *     glb: true adds scene.glb (io/gltf-write.js: the glTF half of "Open in …", for programs that read glTF, not USD)
 *     file = the model's own file text parsed (what Export › USD hands saveUsd), name = the file's base name.
 * The USD is the app's own export (usd-modelcraft.js saveUsd: `scene.usdc`, or `scene.usdz` when the model carries pictures, since
 * saveUsd puts textures only inside a .usdz), the scene is the one the dialog would render (render-mc.js mcScene: hidden things left
 * out, the section cut, the lamps that are on), so what an engine draws is what the dialog shows.
 */
import { saveUsd } from './usd-modelcraft.js';
import { mcScene } from './render-mc.js';
import { cleanSettings } from './render/looks.js';
import { buildManifest, buildPackage, primOfModelCraft } from './render/handoff.js';
import { identifier } from './usd/index.js';
import { exportGltf } from './io/gltf-write.js';

export function mcHandoff({ model, cam, style, file, name = 'model', appVersion = '' }) {
  return async (settingsIn, { w, h, frames = null, glb = false }) => {
    const settings = cleanSettings({ ...settingsIn, mode: 'hq' });
    const scene = mcScene(model, cam, style, settings);
    try {
      const format = file.images && file.images.length ? 'usdz' : 'usdc';
      const r = saveUsd(file, model, { format, name: name + '.modelcraft', appVersion });
      const usd = r.data instanceof Uint8Array ? r.data : new TextEncoder().encode(String(r.data));
      const cameras = (file.scenes || []).map((s) => ({ name: s.name || 'Scene', prim: '/World/Cameras/' + identifier(s.name || 'Scene') }));
      const manifest = buildManifest({ app: 'ModelCraft', appVersion, scene, settings, w, h, usdFile: 'scene.' + format, primOf: primOfModelCraft, cameras, frames, created: new Date().toISOString() });
      return buildPackage({ manifest, usd, ies: manifest.iesFiles, extra: glb ? { 'scene.glb': exportGltf(model).bytes } : {} });
    } finally { scene.dispose?.(); }
  };
}
