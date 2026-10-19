/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-core.js — a rendered still of a 3D scene (0.5 RC.11 (a), from the SG.6 spike). Shared by ModelCraft and BimCraft:
 * canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs). Each app
 * hands it a plain scene through its own adapter (ModelCraft: render-mc.js, Z up; BimCraft: render-bim.js, Y up), so this
 * file knows nothing about either app's model.
 *
 *   renderStill(scene, settings, {w, h, onProgress(frac, canvas), signal, previewEvery}) → Promise<{blob, w, h, passes, ms, stopped}>
 *   renderFrames(scene, settings, {w, h, frames, frameAt(i), onFrame(i, canvas), onProgress(i, frac), signal, passes}) → {frames, ms, stopped}
 *     (0.6 LC.10: video frames through one renderer; see below)
 *   webglInfo() → {ok, halfFloat, renderer}
 *
 *   scene = {
 *     items: [{geometry: THREE.BufferGeometry, matrix?: number[16] (column-major, to world), look: '#rrggbb' | 'default' |
 *              'mat:<library id>' (materials.js; the geometry then carries `uv` in metres, materials.js planarUVs) |
 *              'img:<image id>' (an imported texture from scene.images[id] = {mime, data}; the geometry carries its UVs),
 *              lines?: true (edges, drawn only with settings.edges), shadow?: false}],
 *     defaultColor: '#rrggbb'  (what 'default' faces are),  looks?: {key: look}  (the file's own looks where the settings choose none),
 *     up: [x, y, z],  bounds: {min, max},  groundAt: height of the ground along `up`,
 *     camera(aspect) → {world: number[16] (camera to world), proj: number[16]},
 *     sun: [x, y, z] toward the sun (world) | null,
 *     clip?: [{n: [x, y, z], d}]  keep n·p ≤ d (a section cut),
 *     lights?: [{kind 'point'|'spot'|'area', p, dir, color, lumens, angle (spot, full degrees), size [w, h] (m), on}]  lamps
 *   }
 *
 * Only three.js core (vendored). An offscreen WebGLRenderer accumulates `QUALITY[settings.quality]` passes into a
 * half-float target; each pass jitters the camera under a pixel (anti-aliasing), the sun inside its small cone (soft shadow
 * edges) and a second shadow-casting sky light over the hemisphere, cosine-weighted (soft contact shadows and sky occlusion
 * — the ambient occlusion of daylight). The sum is divided by the passes done and tone-mapped (ACES filmic, exposure in
 * stops) to sRGB once, so Stop keeps a finished picture of what was rendered so far. Physically based materials from the
 * colours' looks (looks.js); the sky is a gradient dome filtered for image light and reflections; the ground is a matte
 * plane that takes the shadows and fades into the horizon.
 */

import * as THREE from 'three';
import { QUALITY, SKIES, NIGHT, SHADOW_LAMPS, lampCandela, lampAt, lookFor, farPlane, basis, hemisphere, sunDisc, halton } from './looks.js';
import { libMaterial, imageTextureReady, imageMaterial } from './three-mats.js';

const quadVS = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

function skyDome(sky, up) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      zen: { value: new THREE.Color(sky.zenith) }, hor: { value: new THREE.Color(sky.horizon) }, gnd: { value: new THREE.Color(sky.ground) },
      up: { value: new THREE.Vector3(...up) },
    },
    vertexShader: 'varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 zen; uniform vec3 hor; uniform vec3 gnd; uniform vec3 up; varying vec3 vDir;\n'
      + 'void main() { float z = dot(normalize(vDir), up); vec3 c = z >= 0.0 ? mix(hor, zen, pow(z, 0.6)) : mix(hor, gnd, pow(-z, 0.4)); gl_FragColor = vec4(c, 1.0); }',
  });
  return new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), mat);
}

let infoCache = null;
/** Can this browser render? (WebGL 2 and a half-float target.) Checked once, on a throwaway context. */
export function webglInfo() {
  if (infoCache) return infoCache;
  let ok = false, halfFloat = false, renderer = '';
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    if (gl) {
      ok = true;
      halfFloat = !!(gl.getExtension('EXT_color_buffer_half_float') || gl.getExtension('EXT_color_buffer_float'));
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      renderer = String(dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) || '');
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch { ok = false; }
  infoCache = { ok, halfFloat, renderer };
  return infoCache;
}

function material(look, clipping) {
  const common = { color: new THREE.Color(look.color), roughness: look.rough, metalness: look.metal, side: THREE.DoubleSide, fog: false, clippingPlanes: clipping, clipShadows: true };
  if (look.glass > 0) {
    // see-through with reflections of the sky; colour tints what shows through. No refraction in this mode.
    return new THREE.MeshPhysicalMaterial({ ...common, transparent: true, opacity: Math.max(0.08, 1 - look.glass), depthWrite: false, ior: 1.5, specularIntensity: 1, envMapIntensity: 1.4 });
  }
  return new THREE.MeshStandardMaterial({ ...common, shadowSide: THREE.BackSide });
}

export async function renderStill(scene, settings, { w, h, onProgress, signal, previewEvery = 4 } = {}) {
  const t0 = performance.now();
  w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h));
  const passes = QUALITY[settings.quality] || QUALITY.good;
  const r = await prepare(scene, settings, w, h);
  try {
    const done = await r.accumulate(scene.camera(w / h), passes, { signal, previewEvery, onProgress });
    if (!done) return { blob: null, w, h, passes: 0, ms: Math.round(performance.now() - t0), stopped: true };
    const blob = await new Promise((res, rej) => r.canvas.toBlob((bl) => (bl ? res(bl) : rej(new Error('no image'))), 'image/png'));   // i18n-ignore: a media type; never shown
    return { blob, w, h, passes: done, ms: Math.round(performance.now() - t0), stopped: done < passes };
  } finally { r.dispose(); }
}

/**
 * Frames of an animation (0.6 LC.10) through one renderer: the model, sky, ground and lights are set up once; each frame
 * moves the camera and any placements that move, then accumulates its passes from nothing, as a still does.
 *   frameAt(i) → {camera?(aspect) → {world, proj}, matrices?: [number[16] | null] (per scene item, null = as it was)}
 *   onFrame(i, canvas) (awaited) gets the finished, tone-mapped frame; onProgress(i, frac) after every few passes.
 *   → {frames: how many were finished, ms, stopped}
 */
export async function renderFrames(scene, settings, { w, h, frames, frameAt, onFrame, onProgress, signal, passes } = {}) {
  const t0 = performance.now();
  w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h));
  const n = Math.max(1, Math.round(passes || QUALITY[settings.quality] || QUALITY.draft));
  const r = await prepare(scene, settings, w, h);
  let i = 0;
  try {
    for (; i < frames; i++) {
      if (signal?.aborted) break;
      const f = (frameAt && frameAt(i)) || {};
      if (f.matrices) r.setMatrices(f.matrices);
      const done = await r.accumulate((f.camera || scene.camera)(w / h), n, { signal, previewEvery: Math.max(4, n), onProgress: (k) => onProgress?.(i, k) });
      if (done < n) break;   // stopped inside the frame: not finished, so not handed on
      await onFrame(i, r.canvas);
    }
    return { frames: i, ms: Math.round(performance.now() - t0), stopped: i < frames };
  } finally { r.dispose(); }
}

/** The scene set up once in an offscreen renderer → {canvas, accumulate(camSpec, passes, opts) → passes done, setMatrices(list), dispose()}. */
async function prepare(scene, settings, w, h) {
  const sky0 = SKIES[settings.sky] || SKIES.clear;
  // the sun below the horizon: night, unless it is the white studio (lamps light the model then)
  const night = !sky0.plain && !scene.sun;
  const sky = night ? NIGHT : sky0;
  const canvas = document.createElement('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(1);
  renderer.setSize(w, h, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;   // the softness comes from the accumulation, not the filter
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = Math.pow(2, settings.exposure || 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.localClippingEnabled = !!(scene.clip && scene.clip.length);
  const disposables = [];
  let done = 0;
  const dispose = () => {
    for (const d of disposables) d?.dispose?.();
    renderer.dispose();
    renderer.forceContextLoss?.();
  };
  try {
    const up = basis(scene.up || [0, 0, 1]).up;
    const bb = scene.bounds;
    const c = bb ? [(bb.min[0] + bb.max[0]) / 2, (bb.min[1] + bb.max[1]) / 2, (bb.min[2] + bb.max[2]) / 2] : [0, 0, 0];
    const R = bb ? Math.max(Math.hypot(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]) / 2, 0.5) : 5;
    const clipping = (scene.clip || []).map((p) => new THREE.Plane(new THREE.Vector3(-p.n[0], -p.n[1], -p.n[2]), p.d));

    // ---- the model: one material per look ----
    const three = new THREE.Scene();
    three.fog = new THREE.Fog(new THREE.Color(sky.horizon), R * 10, R * 120);   // only the ground fogs (materials say fog: false)
    const mats = new Map();
    // imported textures: decoded before the first pass (made for this render, disposed with it)
    const imgTex = new Map();
    for (const it of scene.items) {
      if (!it.look || !it.look.startsWith('img:') || imgTex.has(it.look)) continue;
      const im = scene.images && scene.images[it.look.slice(4)];
      const tex = im ? await imageTextureReady(im) : null;
      imgTex.set(it.look, tex);
      if (tex) disposables.push(tex);
    }
    const matFor = (key) => {
      let m = mats.get(key);
      if (!m && imgTex.get(key)) { m = imageMaterial(imgTex.get(key), { clipping }); mats.set(key, m); disposables.push(m); }
      if (!m) {
        m = (key.startsWith('mat:') && libMaterial(key.slice(4), { size: 512, clipping })) || material(lookFor(key, settings, scene.defaultColor, scene.looks && scene.looks[key]), clipping);
        mats.set(key, m); disposables.push(m);   // the library's textures are shared and cached: never disposed here
      }
      return m;
    };
    const edgeMat = new THREE.LineBasicMaterial({ color: '#2a2f36', transparent: true, opacity: 0.55, fog: false, clippingPlanes: clipping });
    disposables.push(edgeMat);
    const objs = scene.items.map((it) => {
      if (it.lines && !settings.edges) return null;
      const mat = it.lines ? edgeMat : matFor(it.look || 'default');
      const o = it.lines ? new THREE.LineSegments(it.geometry, mat) : new THREE.Mesh(it.geometry, mat);
      if (!it.lines) { o.castShadow = it.shadow !== false && !(mat.transparent); o.receiveShadow = true; }
      o.matrixAutoUpdate = false;
      if (it.matrix) o.matrix.fromArray(it.matrix);
      three.add(o);
      return o;
    });
    three.updateMatrixWorld(true);

    // ---- the sky: a gradient dome around the model (the background; the ground fogs into its horizon colour) and the
    // same dome filtered for image light and reflections ----
    const SKY_R = R * 150;
    const dome = skyDome(sky, up);
    dome.scale.setScalar(SKY_R);
    dome.position.set(c[0], c[1], c[2]);
    dome.frustumCulled = false;
    three.add(dome);
    const pm = new THREE.PMREMGenerator(renderer);
    const skyScene = new THREE.Scene();
    const domeEnv = skyDome(sky, up);
    skyScene.add(domeEnv);
    const env = pm.fromScene(skyScene, 0, 0.1, 100);
    three.environment = env.texture;
    three.environmentIntensity = sky.env;
    disposables.push(env, pm, dome.geometry, dome.material, domeEnv.geometry, domeEnv.material);

    // ---- the ground: a matte plane under the model, square to `up`, fading into the horizon before the dome ----
    if (settings.ground) {
      const groundMat = new THREE.MeshStandardMaterial({ color: sky.plain ? '#f4f4f2' : '#cbc6bb', roughness: 1, metalness: 0, fog: !sky.plain });
      const ground = new THREE.Mesh(new THREE.CircleGeometry(SKY_R * 0.98, 96), groundMat);
      ground.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...up));
      const lift = (c[0] * up[0] + c[1] * up[1] + c[2] * up[2]) - (scene.groundAt ?? 0) + R * 1e-4;
      ground.position.set(c[0] - up[0] * lift, c[1] - up[1] * lift, c[2] - up[2] * lift);
      ground.receiveShadow = true;
      three.add(ground);
      disposables.push(groundMat, ground.geometry);
    }

    // ---- lights: the sun (when up) and the sampled sky ----
    const sunOn = !!scene.sun && (scene.sun[0] * up[0] + scene.sun[1] * up[1] + scene.sun[2] * up[2]) > 0.02 && sky.sun > 0;
    const sun = new THREE.DirectionalLight(sky.tint, sunOn ? sky.sun : 0);
    const skyL = new THREE.DirectionalLight(sky.skyTint, sky.sky * (sunOn || night ? 1 : 1.35));
    const lights = sunOn ? [sun, skyL] : [skyL];
    for (const L of lights) {
      L.castShadow = true;
      L.shadow.mapSize.set(2048, 2048);
      L.shadow.bias = -0.0002;
      L.shadow.normalBias = R * 0.002;
      const sc = L.shadow.camera;
      sc.left = -R * 1.6; sc.right = R * 1.6; sc.top = R * 1.6; sc.bottom = -R * 1.6; sc.near = R * 0.05; sc.far = R * 8;
      sc.updateProjectionMatrix();
      L.target.position.set(c[0], c[1], c[2]);
      three.add(L, L.target);
      L.target.updateMatrixWorld();
    }
    // ---- lamps (RC.11 (d)): each pass puts every lamp at a point of its bulb or panel, so their shadows soften too ----
    const lamps = (scene.lights || []).filter((L) => L && L.on !== false && L.lumens > 0).sort((a, b) => b.lumens - a.lumens).slice(0, 64);
    const lampObjs = lamps.map((L, k) => {
      const col = new THREE.Color(L.color || '#ffe7c4'), I = lampCandela(L);
      const shadow = k < SHADOW_LAMPS;
      let o;
      if (L.kind === 'point') o = new THREE.PointLight(col, I, 0, 2);
      else {
        // a spot keeps its cone; an area panel lights its half of the world (a wide, soft cone along its normal)
        const half = L.kind === 'spot' ? (L.angle * Math.PI) / 360 : (85 * Math.PI) / 180;
        o = new THREE.SpotLight(col, I, 0, half, L.kind === 'spot' ? 0.35 : 1, 2);
        three.add(o.target);
      }
      o.castShadow = shadow;
      // a room seen from inside: the faces a lamp lights are often the back faces of a closed solid, which normal bias
      // pushes the wrong way (it follows the face's own normal), so lamps use depth bias only — a few millimetres
      if (shadow) { o.shadow.mapSize.set(1024, 1024); o.shadow.camera.near = 0.02; o.shadow.camera.far = R * 6 + 10; o.shadow.normalBias = 0; o.shadow.bias = -0.004 / (o.shadow.camera.far / 20); }
      three.add(o);
      // the glowing bulb or panel itself (no shadow of its own)
      const glow = col.clone().multiplyScalar(4);
      const em = L.kind === 'area'
        ? new THREE.Mesh(new THREE.PlaneGeometry(L.size[0], L.size[1]), new THREE.MeshBasicMaterial({ color: glow, side: THREE.DoubleSide, fog: false, toneMapped: true }))
        : new THREE.Mesh(new THREE.SphereGeometry(Math.max(0.015, (L.size ? L.size[0] : 0.06) / 2), 16, 12), new THREE.MeshBasicMaterial({ color: glow, fog: false }));
      em.position.set(...L.p);
      if (L.kind === 'area') em.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...L.dir));
      em.castShadow = false; em.receiveShadow = false;
      three.add(em);
      disposables.push(em.geometry, em.material);
      return { L, o };
    });
    const placeLamps = (i) => {
      for (const { L, o } of lampObjs) {
        const q = lampAt(L, i);
        // an area light sits just in front of its panel, so the panel never shades it
        const off = L.kind === 'area' ? 0.01 : 0;
        o.position.set(q[0] + L.dir[0] * off, q[1] + L.dir[1] * off, q[2] + L.dir[2] * off);
        if (o.target) { o.target.position.set(o.position.x + L.dir[0], o.position.y + L.dir[1], o.position.z + L.dir[2]); o.target.updateMatrixWorld(); }
      }
    };

    const { e1, e2 } = basis(up);
    const place = (L, d) => {
      L.position.set(c[0] + d[0] * R * 4, c[1] + d[1] * R * 4, c[2] + d[2] * R * 4);
      // the shadow camera's own "up" must not run along the light (a Y-up scene with the sun overhead)
      const a = Math.abs(d[0] * e1[0] + d[1] * e1[1] + d[2] * e1[2]), b = Math.abs(d[0] * e2[0] + d[1] * e2[1] + d[2] * e2[2]);
      L.shadow.camera.up.set(...(a < b ? e1 : e2));
    };

    // ---- the camera: the app's own framing at this image's aspect (set per frame); far plane out to the horizon ----
    const cam = new THREE.Camera();
    cam.matrixAutoUpdate = false;

    // ---- accumulation: sum the passes, then divide by how many were done ----
    const rtOpts = { type: THREE.HalfFloatType, colorSpace: THREE.LinearSRGBColorSpace, depthBuffer: true };
    const passRT = new THREE.WebGLRenderTarget(w, h, rtOpts), accRT = new THREE.WebGLRenderTarget(w, h, { ...rtOpts, depthBuffer: false });
    disposables.push(passRT, accRT);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    const quadScene = new THREE.Scene();
    quadScene.add(quad);
    const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const addMat = new THREE.ShaderMaterial({
      uniforms: { map: { value: passRT.texture } }, vertexShader: quadVS,
      fragmentShader: 'uniform sampler2D map; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb, 1.0); }',
      blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, toneMapped: false,
    });
    const outMat = new THREE.ShaderMaterial({
      uniforms: { map: { value: accRT.texture }, k: { value: 1 } }, vertexShader: quadVS,
      fragmentShader: 'uniform sampler2D map; uniform float k; varying vec2 vUv; void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb * k, 1.0);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}',
      depthTest: false, depthWrite: false, toneMapped: true,
    });
    disposables.push(quad.geometry, addMat, outMat);
    const show = () => {
      outMat.uniforms.k.value = 1 / Math.max(1, done);
      quad.material = outMat;
      renderer.setRenderTarget(null);
      renderer.render(quadScene, ortho);
    };
    const accumulate = async (camSpec, passes, { signal, previewEvery = 4, onProgress } = {}) => {
      cam.matrix.fromArray(camSpec.world);
      cam.matrixWorld.fromArray(camSpec.world);
      cam.matrixWorldInverse.copy(cam.matrixWorld).invert();
      const P0 = farPlane(camSpec.proj, R * 200);
      done = 0;
      renderer.setRenderTarget(accRT);
      renderer.setClearColor(0x000000, 1);
      renderer.clear();
      for (let i = 0; i < passes; i++) {
        if (signal?.aborted) break;
        const a = halton(i + 1, 2), b = halton(i + 1, 3);
        // camera: under a pixel; rows 0 and 1 of the projection += jitter × row 3 (works for both projections)
        const jx = (a - 0.5) * 2 / w, jy = (b - 0.5) * 2 / h, e = P0.slice();
        for (let k = 0; k < 4; k++) { e[k * 4] += jx * e[k * 4 + 3]; e[k * 4 + 1] += jy * e[k * 4 + 3]; }
        cam.projectionMatrix.fromArray(e);
        cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
        if (sunOn) place(sun, sunDisc(scene.sun, i, 1.5));
        place(skyL, hemisphere(i, up));
        placeLamps(i);
        renderer.setRenderTarget(passRT);
        renderer.render(three, cam);
        quad.material = addMat;
        renderer.setRenderTarget(accRT);
        renderer.autoClear = false;
        renderer.render(quadScene, ortho);
        renderer.autoClear = true;
        done = i + 1;
        if (done % previewEvery === 0 || done === passes) {
          show();
          onProgress?.(done / passes, canvas);
          await new Promise((r) => requestAnimationFrame(() => r()));
        }
      }
      if (done) show();
      return done;
    };
    const setMatrices = (list) => {
      list.forEach((m, k) => { const o = objs[k]; if (m && o) o.matrix.fromArray(m); });
      three.updateMatrixWorld(true);
    };
    return { canvas, accumulate, setMatrices, dispose };
  } catch (e) {
    dispose();
    throw e;
  }
}
