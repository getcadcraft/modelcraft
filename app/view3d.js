/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view3d.js — draws a ModelCraft model with three.js, plus a 2D overlay canvas for what the tools
 * show while you work (inference markers, previews, the selection window, tips).
 *
 * The camera is ours (camera.js): its matrices go straight into a bare THREE.Camera, so picking
 * (infer.js) and drawing always agree. One mesh + one edge set per definition, shared by every
 * instance (a THREE.Group with the instance's matrix). Renders on demand.
 *
 *   const v = new View3D(glCanvas, overCanvas, {model, cam, ui});
 *   v.style = {mode: 'shaded'|'hidden'|'wire'|'xray', edges, shadows, sun: {…}};  v.invalidate();
 *   v.textures = {material(key) → THREE.Material | null, uv(p, n) → [u, v]}   textures in the shaded style (0.5 RC.7 /
 *                RC.11 (b); ModelCraft sets it): key 'mat:<id>' a library material (UVs from uv()), 'img:<id>' an imported
 *                image (UVs from the face's own placement in its paint); without the hook they show their colour
 *   v.drawExtra = (g, project(p) → [x, y, depth] | null, colours) => …   the app's own marks on the overlay (lamps)
 * `ui()` returns {path, sel, overlay, guidesOn, dimsOn, present} at draw time. present (0.4 M28, presentation view): no axes,
 * guides, guide points, open-group box, inference marks, hover or selection highlight — only the model (and its dimensions);
 * nothing fades outside an open group (0.6 DC.21).
 * Colours come from the page tokens (paper/model themes).
 */
import * as THREE from 'three';
import { add, sub, mul, dot, norm, apply, invert, dist, bboxAdd, IDENT } from './vec.js';
import { faceTris, faceNormal, edgeFaces, smoothNormals, paintHex, isMaterialPaint, isImagePaint, imageId, imageUV } from './model.js';
import { sunPosition } from './sun.js';
import { dimLayout, dimTextBox, dimText, sectionLayout } from './infer.js';
import { formatLength } from './units.js';
import { viewImage } from './viewimage.js';

const KIND_COLOR = {
  end: '--layer-green', mid: '--layer-cyan', center: '--layer-blue', edge: '--layer-red', face: '--layer-blue', guide: '--ink-2', guidept: '--ink-2',
  origin: '--layer-ochre', 'axis-x': '--layer-red', 'axis-y': '--layer-green', 'axis-z': '--layer-blue', parallel: '--layer-magenta',
  perp: '--layer-magenta', lock: '--layer-magenta', axis: '--ink-2', plane: '--ink-2', ground: '--ink-2', none: '--ink-2',
};

export class View3D {
  constructor(gl, over, { model, cam, ui }) {
    this.gl = gl; this.over = over; this.model = model; this.cam = cam; this.ui = ui;
    this.style = { mode: 'shaded', edges: true, shadows: false, sun: { month: 6, day: 21, hour: 15, lat: 40, lon: -105, tz: -7 } };
    // stencil: filled section cuts (0.4 M7, BimCraft's method); clipping is per material, all sharing this.clip
    this.renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, preserveDrawingBuffer: true, stencil: true });
    this.renderer.localClippingEnabled = true;
    this.clip = [];
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.tcam = new THREE.Camera();
    this.tcam.matrixAutoUpdate = false;
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x8a8f96, 1.9);
    this.scene.add(this.hemi);
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.02;
    this.scene.add(this.sunLight, this.sunLight.target);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.extras = new THREE.Group();     // axes, guides, selection fill
    this.scene.add(this.extras);
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({ opacity: 0.28 }));
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);
    this.cache = new Map();
    this.builtFor = null;
    this.w = 1; this.h = 1;
    this.applyTheme();
    new MutationObserver(() => { this.applyTheme(); this.dropCache(); this.builtFor = null; this.invalidate(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(gl.parentElement);
    this.resize();
  }

  applyTheme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => cs.getPropertyValue(n).trim() || d;
    const dark = (document.documentElement.dataset.space || '') === 'model' || (t('--sheet', '#fff').toLowerCase() === '#1d232b');
    this.tok = t;
    this.c = {
      bg: t('--sheet', '#f3f6f8'), ink: t('--ink', '#17202b'), ink2: t('--ink-2', '#34404e'), sel: t('--layer-blue', '#1e48c8'),
      red: t('--layer-red', '#b3122e'), green: t('--layer-green', '#17703a'), blue: t('--layer-blue', '#1e48c8'), grid: t('--grid', '#d5dde5'),
      front: dark ? '#c9c3b5' : '#f2efe7', back: dark ? '#5d7186' : '#a9bacb',
      cap: dark ? '#8d96a0' : '#4b5866', section: t('--layer-ochre', '#a8641a'),
    };
    this.scene.background = new THREE.Color(this.c.bg);
  }
  color(kind) { return this.tok(KIND_COLOR[kind] || '--ink-2', '#555'); }

  resize() {
    const host = this.gl.parentElement;
    this.w = Math.max(1, host.clientWidth); this.h = Math.max(1, host.clientHeight);
    this.renderer.setSize(this.w, this.h, false);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.over.width = Math.round(this.w * dpr); this.over.height = Math.round(this.h * dpr);
    this.dpr = dpr;
    this.cam.setSize(this.w, this.h);
    this.invalidate();
  }
  invalidate() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; this.draw(); });
  }

  // ---- building the three.js scene from the model ----
  /** One geometry per definition and placement colour (M8: a painted group fills its faces that have none). */
  geometryOf(def, dflt = null) {
    const key = def.id + '|' + (dflt || '');
    let g = this.cache.get(key);
    // still right while it is the same definition object and it has not been edited in place since (model.kept)
    if (g && g.def === def && (this.model.kept ? this.model.kept(def, g) : g.v === this.model.version)) return g;
    if (g) { g.faces?.dispose(); g.edges?.dispose(); for (const x of g.mats || []) x.geometry.dispose(); }
    const plain = [];   // [fid, normal, colour, triangles] of the faces drawn in colour
    let ni = 0;
    const front = new THREE.Color(paintHex(dflt) || this.c.front);
    const tex = this.textures, byMat = new Map();   // 0.5 RC.7: faces painted with a library material, one mesh per material
    const smooth = smoothNormals(def);   // 0.4 M18: faces joined by soft edges shade as one surface
    for (const [fid, f] of def.faces) {
      if (f.hidden) continue;   // 0.4 M17
      const n = faceNormal(def, f);
      const c = f.color ? new THREE.Color(paintHex(f.color)) : front;
      const paint = f.color || dflt;
      const tkey = isMaterialPaint(paint) ? paint : isImagePaint(paint) ? 'img:' + imageId(paint) : null;
      if (tex && tkey && tex.material(tkey)) {
        let b = byMat.get(tkey);
        if (!b) { b = { pos: [], nor: [], col: [], uv: [] }; byMat.set(tkey, b); }
        const img = tkey.startsWith('img:');
        for (const t of faceTris(def, f)) for (const v of t) {
          const p = def.verts.get(v), q = smooth.get(fid + '|' + v) || n, w = img ? imageUV(paint, p) : tex.uv(p, n);
          b.pos.push(p[0], p[1], p[2]); b.nor.push(q[0], q[1], q[2]); b.col.push(c.r, c.g, c.b); b.uv.push(w[0], w[1]);
        }
        continue;
      }
      const tris = faceTris(def, f);
      plain.push([fid, n, c, tris]);
      ni += tris.length * 3;
    }
    // indexed: a face's corners are shared by its triangles (same normal and colour), so each is shaded once
    const pos = new Float32Array(ni * 3), nor = new Float32Array(ni * 3), col = new Float32Array(ni * 3);
    const index = ni < 65536 ? new Uint16Array(ni) : new Uint32Array(ni);
    let nv = 0, k = 0;
    for (const [fid, n, c, tris] of plain) {
      const at = new Map();
      for (const t of tris) for (const v of t) {
        let j = at.get(v);
        if (j === undefined) {
          j = nv++; at.set(v, j);
          const p = def.verts.get(v), q = smooth.get(fid + '|' + v) || n, o = j * 3;
          pos[o] = p[0]; pos[o + 1] = p[1]; pos[o + 2] = p[2];
          nor[o] = q[0]; nor[o + 1] = q[1]; nor[o + 2] = q[2];
          col[o] = c.r; col[o + 1] = c.g; col[o + 2] = c.b;
        }
        index[k++] = j;
      }
    }
    const faces = new THREE.BufferGeometry();
    faces.setAttribute('position', new THREE.BufferAttribute(pos.slice(0, nv * 3), 3));
    faces.setAttribute('normal', new THREE.BufferAttribute(nor.slice(0, nv * 3), 3));
    faces.setAttribute('color', new THREE.BufferAttribute(col.slice(0, nv * 3), 3));
    faces.setIndex(new THREE.BufferAttribute(index, 1));
    let ne = 0;
    for (const e of def.edges.values()) if (!e.soft && !e.hidden) ne++;
    const ep = new Float32Array(ne * 6);
    k = 0;
    for (const e of def.edges.values()) {
      if (e.soft || e.hidden) continue;
      const a = def.verts.get(e.a), b = def.verts.get(e.b);
      ep[k++] = a[0]; ep[k++] = a[1]; ep[k++] = a[2]; ep[k++] = b[0]; ep[k++] = b[1]; ep[k++] = b[2];
    }
    const edges = new THREE.BufferGeometry();
    edges.setAttribute('position', new THREE.BufferAttribute(ep, 3));
    const mats = [...byMat].map(([paint, b]) => {
      const mg = new THREE.BufferGeometry();
      mg.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
      mg.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
      mg.setAttribute('color', new THREE.Float32BufferAttribute(b.col, 3));
      mg.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
      return { id: paint, geometry: mg };   // 'mat:<id>' | 'img:<id>'
    });
    g = { def, ...(this.model.stamp ? this.model.stamp(def) : { v: this.model.version }), faces, edges, mats, hasFaces: ni > 0 || mats.length > 0 };
    this.cache.set(key, g);
    return g;
  }

  /** Free one definition's geometry (or all). */
  dropCache(id = null) {
    for (const k of id === null ? [...this.cache.keys()] : [id]) {
      const g = this.cache.get(k);
      if (!g) continue;
      g.faces.dispose(); g.edges.dispose(); for (const x of g.mats || []) x.geometry.dispose();
      this.cache.delete(k);
    }
  }

  materials(faded) {
    const st = this.style, op = faded ? 0.22 : 1;
    const xr = st.mode === 'xray';
    const common = { polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, transparent: faded || xr, opacity: xr ? 0.45 * op : op, depthWrite: !(faded || xr), clippingPlanes: this.clip, clipShadows: true };
    let front, back, texBack = null;
    if (st.mode === 'hidden') {
      front = new THREE.MeshBasicMaterial({ color: this.c.bg, side: THREE.DoubleSide, ...common });
      back = null;
    } else {
      // one pass for both sides (half the triangles to draw): the back of a face takes the back colour in the shader
      front = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, shadowSide: THREE.BackSide, ...common });
      const backColor = new THREE.Color(this.c.back);
      front.onBeforeCompile = (sh) => {
        sh.uniforms.backColor = { value: backColor };
        sh.fragmentShader = 'uniform vec3 backColor;\n' + sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n\tif (!gl_FrontFacing) diffuseColor.rgb = backColor;');
      };
      front.customProgramCacheKey = () => 'mc-two-sided';
      back = null;
      texBack = new THREE.MeshLambertMaterial({ color: this.c.back, side: THREE.BackSide, ...common });   // behind textured faces (their material is one-sided)
    }
    const edge = new THREE.LineBasicMaterial({ color: this.c.ink, transparent: faded, opacity: faded ? 0.3 : 1, clippingPlanes: this.clip });
    return { front, back, texBack, edge };
  }

  /**
   * The model's box in world space as drawn (shown placements), from each definition's own box under each placement's
   * matrix, kept with its geometry: a moved placement costs its own vertices, the rest nothing.
   */
  placedBox(def, g, wm) {
    const key = wm.join(',');
    g.boxes ||= new Map();
    let bb = g.boxes.get(key);
    if (bb === undefined) {
      bb = null;
      for (const p of def.verts.values()) bb = bboxAdd(bb, apply(wm, p));
      if (g.boxes.size > 4096) g.boxes.clear();
      g.boxes.set(key, bb);
    }
    return bb;
  }

  build() {
    for (const o of [...this.root.children]) { if (o.userData.cap) o.geometry.dispose(); this.root.remove(o); }
    const u = this.ui();
    // materials are kept while the style and colours stay the same (a new material is a new shader program to compile)
    const mkey = this.style.mode + '|' + this.c.bg + '|' + this.c.back + '|' + this.c.ink;
    if (this._matKey !== mkey) {
      for (const m of this._mats || []) m?.dispose();
      this._matSet = { on: this.materials(false), off: this.materials(true) };
      this._mats = [...Object.values(this._matSet.on), ...Object.values(this._matSet.off)];
      this._matKey = mkey;
    }
    const mats = this._matSet;
    let box = null;
    const st = this.style;
    const live = new Set();
    // the active section cut (0.4 M7): three.js keeps what is in front of a plane, so the plane faces away from n
    const cut = this.model.activeCut ? this.model.activeCut() : null;
    this.clip.length = 0;
    if (cut) this.clip.push(new THREE.Plane(new THREE.Vector3(-cut.n[0], -cut.n[1], -cut.n[2]), dot(cut.n, cut.p)));
    const solids = [];   // closed geometry the cut passes through gets a filled cap
    const offTags = this.model.hiddenTags ? this.model.hiddenTags() : new Set();   // 0.4 M6: placements with a hidden tag
    const addDef = (def, parent, path, depth, dflt = null, wm = IDENT) => {
      if (depth > 32) return;
      live.add(def.id + '|' + (dflt || ''));
      const g = this.geometryOf(def, dflt);
      const pb = this.placedBox(def, g, wm);
      if (pb) { box = bboxAdd(box, pb.min); box = bboxAdd(box, pb.max); }
      // presentation view (0.6 DC.21): the whole model as it is, so nothing fades outside an open group
      const active = u.present || (path.length >= u.path.length && u.path.every((x, i) => path[i] === x));
      const m = active ? mats.on : mats.off;
      if (g.hasFaces && st.mode !== 'wire') {
        const f = new THREE.Mesh(g.faces, m.front);
        f.castShadow = st.shadows; f.receiveShadow = st.shadows;
        parent.add(f);
        if (cut && st.mode !== 'xray' && this.closedDef(def, g)) solids.push(f);
        if (m.back) { const b = new THREE.Mesh(g.faces, m.back); b.castShadow = false; b.receiveShadow = st.shadows; parent.add(b); }
        // library materials (0.5 RC.7): textured in the shaded style of the open context; elsewhere drawn like other faces
        const closed = cut && st.mode !== 'xray' && this.closedDef(def, g);
        for (const x of g.mats || []) {
          const textured = active && st.mode === 'shaded' ? this.textures?.material(x.id) : null;
          const tm = new THREE.Mesh(x.geometry, textured || m.front);
          tm.castShadow = st.shadows; tm.receiveShadow = st.shadows;
          parent.add(tm);
          if (closed) solids.push(tm);
          const bm = textured ? m.texBack : m.back;
          if (bm) { const b = new THREE.Mesh(x.geometry, bm); b.castShadow = false; b.receiveShadow = st.shadows; parent.add(b); }
        }
      }
      if (st.edges || st.mode === 'wire') parent.add(new THREE.LineSegments(g.edges, m.edge));
      for (const [iid, inst] of def.insts) {
        const d = this.model.def(inst.def);
        if (!d || inst.hidden || (inst.tag && offTags.has(inst.tag))) continue;
        const grp = new THREE.Group();
        grp.matrixAutoUpdate = false;
        grp.matrix.fromArray(inst.m);
        parent.add(grp);
        addDef(d, grp, [...path, iid], depth + 1, inst.color || dflt, mmul4(wm, inst.m));
      }
    };
    addDef(this.model.root, this.root, [], 0);
    this.bb = box;
    if (cut && solids.length) this.addCaps(solids, cut);
    // geometry not drawn now is kept while its definition is still in the model (hidden, or another colour of it): showing
    // it again is then immediate. What was deleted or replaced goes.
    for (const [id, g] of [...this.cache]) if (!live.has(id) && this.model.def(g.def.id) !== g.def) this.dropCache(id);
    this.root.updateMatrixWorld(true);
    this.buildExtras(u);
    this.updateLights();
  }

  /** Is a definition's own geometry closed (every edge between two faces)? Kept with its geometry until it changes. */
  closedDef(def, g) {
    if (g.closed === undefined) {
      const ef = edgeFaces(def);
      g.closed = def.faces.size > 0 && [...ef.values()].every((l) => l.length === 2) && [...def.faces.values()].every((f) => !f.hidden);
    }
    return g.closed;
  }
  /**
   * Filled section cuts (0.4 M7), BimCraft's stencil method (three.js webgl_clipping_stencil): each closed mesh is
   * drawn into the stencil only, back faces adding 1 and front faces taking 1 away, clipped by the cut; then a quad on
   * the plane paints the cap colour where the stencil is not 0 — where the plane passes through a solid.
   */
  addCaps(solids, cut) {
    const stencil = (side, op) => new THREE.MeshBasicMaterial({ side, clippingPlanes: this.clip, depthWrite: false, depthTest: false, colorWrite: false,
      stencilWrite: true, stencilFunc: THREE.AlwaysStencilFunc, stencilFail: op, stencilZFail: op, stencilZPass: op });
    const back = this.xmat('capback', () => stencil(THREE.BackSide, THREE.IncrementWrapStencilOp)), front = this.xmat('capfront', () => stencil(THREE.FrontSide, THREE.DecrementWrapStencilOp));
    for (const m of solids) for (const mat of [back, front]) {
      const sm = new THREE.Mesh(m.geometry, mat);
      sm.renderOrder = 20;
      sm.frustumCulled = false;
      m.parent.add(sm);
    }
    const bb = this.bb;
    const size = bb ? dist(bb.min, bb.max) * 2 + 1 : 100;
    const capMat = this.xmat('cap', () => new THREE.MeshBasicMaterial({ side: THREE.DoubleSide,
      stencilWrite: true, stencilRef: 0, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.ReplaceStencilOp, stencilZFail: THREE.ReplaceStencilOp, stencilZPass: THREE.ReplaceStencilOp,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
    capMat.color.set(this.c.cap);
    const cap = new THREE.Mesh(new THREE.PlaneGeometry(size, size), capMat);
    const c = bb ? mul(add(bb.min, bb.max), 0.5) : cut.p;
    const at = sub(c, mul(cut.n, dot(sub(c, cut.p), cut.n)));
    cap.position.set(at[0], at[1], at[2]);
    cap.lookAt(at[0] + cut.n[0], at[1] + cut.n[1], at[2] + cut.n[2]);
    cap.renderOrder = 21;
    cap.onAfterRender = (r) => r.clearStencil();
    cap.userData.cap = true;
    this.root.add(cap);
  }

  /** A material for the extras, kept from build to build (a new one would mean compiling its shader again): one per key. */
  xmat(key, make) {
    this._xmats ||= new Map();
    let m = this._xmats.get(key);
    if (!m) { m = make(); this._xmats.set(key, m); }
    return m;
  }

  buildExtras(u) {
    for (const o of [...this.extras.children]) { this.extras.remove(o); o.geometry?.dispose(); }
    const bb = this.bb;
    const R = bb ? Math.max(dist(bb.min, bb.max), 10) : 30;
    this.radius = R;
    // axes of the open context: solid on the positive side, dashed on the negative
    const ctx = this.model.context(u.path) || this.model.context([]);
    const am = this.model.axesFrame ? this.model.axesFrame(u.path) : ctx.m;   // the drawing axes (0.4 M20)
    const L = R * 4;
    const axis = (dir, color) => {
      const o = apply(am, [0, 0, 0]), p = apply(am, mul(dir, L)), n = apply(am, mul(dir, -L));
      const pos = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...o), new THREE.Vector3(...p)]);
      this.extras.add(new THREE.Line(pos, this.xmat('axis+' + color, () => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 }))));
      const dm = this.xmat('axis-' + color, () => new THREE.LineDashedMaterial({ color, transparent: true, opacity: 0.6 }));
      dm.dashSize = dm.gapSize = R / 60;
      const neg = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...o), new THREE.Vector3(...n)]), dm);
      neg.computeLineDistances();
      this.extras.add(neg);
    };
    if (!u.present) { axis([1, 0, 0], this.c.red); axis([0, 1, 0], this.c.green); axis([0, 0, 1], this.c.blue); }
    // guide lines
    const gm = this.xmat('guide', () => new THREE.LineDashedMaterial({ color: this.c.ink2, transparent: true, opacity: 0.75 }));
    gm.color.set(this.c.ink2); gm.dashSize = R / 120; gm.gapSize = R / 160;
    if (u.guidesOn !== false && !u.present) for (const g of this.model.guides.values()) {
      if (g.kind !== 'line') continue;
      const a = add(g.p, mul(g.d, -L)), b = add(g.p, mul(g.d, L));
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a), new THREE.Vector3(...b)]), gm);
      line.computeLineDistances();
      this.extras.add(line);
    }
    // selected faces: a tinted fill
    const pos = [];
    for (const s of u.present ? [] : u.sel) {
      if (s.t !== 'f') continue;
      const def = ctx.def, f = def.faces.get(s.id);
      if (!f) continue;
      for (const t of faceTris(def, f)) for (const v of t) { const p = apply(ctx.m, def.verts.get(v)); pos.push(p[0], p[1], p[2]); }
    }
    if (pos.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      const sm = this.xmat('selfill', () => new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 }));
      sm.color.set(this.c.sel);
      const mesh = new THREE.Mesh(geo, sm);
      mesh.renderOrder = 5;
      this.extras.add(mesh);
    }
  }

  updateLights() {
    const st = this.style, bb = this.bb;
    const c = bb ? mul(add(bb.min, bb.max), 0.5) : [0, 0, 0];
    const R = bb ? Math.max(dist(bb.min, bb.max) / 2, 2) : 10;
    let dir;
    if (st.shadows) {
      const s = sunPosition(st.sun);
      this.sunInfo = s;
      dir = s.up ? s.dir : [0, 0, 1];
      this.sunLight.intensity = s.up ? 1.9 : 0;
      this.hemi.intensity = s.up ? 1.5 : 1.2;
    } else {
      dir = norm([0.45, -0.75, 1]);
      this.sunLight.intensity = 1.4;
      this.hemi.intensity = 1.9;
    }
    this.sunLight.position.set(c[0] + dir[0] * R * 3, c[1] + dir[1] * R * 3, c[2] + dir[2] * R * 3);
    this.sunLight.target.position.set(c[0], c[1], c[2]);
    this.sunLight.target.updateMatrixWorld();
    this.sunLight.castShadow = st.shadows;
    const sc = this.sunLight.shadow.camera;
    sc.left = -R * 2; sc.right = R * 2; sc.top = R * 2; sc.bottom = -R * 2; sc.near = R * 0.1; sc.far = R * 7;
    sc.updateProjectionMatrix();
    this.ground.visible = st.shadows && st.mode !== 'wire';
    this.ground.position.set(c[0], c[1], bb ? bb.min[2] - 1e-3 : 0);
    this.ground.scale.set(R * 10, R * 10, 1);
  }

  draw() {
    const u = this.ui();
    const key = this.model.version + '|' + u.path.join('/') + '|' + JSON.stringify(this.style) + '|' + u.sel.map((s) => s.t + s.id).join(',') + '|' + this.c.bg + '|' + !!u.present;
    if (key !== this.builtFor) { this.build(); this.builtFor = key; }
    this.cam.clip(this.radius || 20);
    const tc = this.tcam;
    tc.matrix.fromArray(invert(this.cam.view()));
    tc.matrixWorldNeedsUpdate = true;
    tc.updateMatrixWorld(true);
    tc.projectionMatrix.fromArray(this.cam.proj());
    tc.projectionMatrixInverse.copy(tc.projectionMatrix).invert();
    this.renderer.render(this.scene, tc);
    this.drawOverlay(u);
  }

  /**
   * The view as a PNG (0.4 1.7): `scale` 1 = its size on screen, 2 = twice it; the marks (dimensions, and in normal view
   * guides, the selection…) are drawn again at the new size, so they stay sharp. → Promise<Blob>.
   */
  png(scale = 1, type = 'image/png', quality = undefined) {   // i18n-ignore: a media type
    this.draw();
    const u = this.ui();
    return viewImage({
      renderer: this.renderer, scale, type, quality,
      render: () => this.renderer.render(this.scene, this.tcam),
      drawOverlay: (g, pr) => {
        const over = this.over, dpr = this.dpr, tmp = document.createElement('canvas');
        tmp.width = g.canvas.width; tmp.height = g.canvas.height;
        this.over = tmp; this.dpr = pr;
        try { this.drawOverlay(u); } finally { this.over = over; this.dpr = dpr; }
        g.drawImage(tmp, 0, 0);
      },
    });
  }

  /** model.bbox(def, m) for the overlay, kept until the model changes (it is drawn on every frame of a camera move). */
  boxOf(def, m = null) {
    const key = this.model.version + '|' + def.id + '|' + (m ? m.join(',') : '');
    this._boxes ||= new Map();
    if (!this._boxes.has(key)) { if (this._boxes.size > 64) this._boxes.clear(); this._boxes.set(key, m ? this.model.bbox(def, m) : this.model.bbox(def)); }
    return this._boxes.get(key);
  }

  // ---- the 2D overlay ----
  seg(a, b, vp) {
    // clip to the near plane before projecting, so lines through the eye still draw
    if (this.cam.persp) {
      const z = this.cam.axes().z, e = this.cam.eye, nearD = this.cam.near * 1.01;
      const da = -dot(sub(a, e), z), db = -dot(sub(b, e), z);
      if (da < nearD && db < nearD) return null;
      if (da < nearD) a = add(a, mul(sub(b, a), (nearD - da) / (db - da)));
      else if (db < nearD) b = add(b, mul(sub(a, b), (nearD - db) / (da - db)));
    }
    const A = this.cam.project(a, vp), B = this.cam.project(b, vp);
    return A && B ? [A, B] : null;
  }
  drawOverlay(u) {
    const g = this.over.getContext('2d');
    // clear the whole canvas in its own pixels first, whatever transform or size was left from before
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, this.over.width, this.over.height);
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const vp = this.cam.viewProj();
    const ctx = this.model.context(u.path) || this.model.context([]);
    const line = (a, b, color, width = 1.5, dash = null) => {
      const s = this.seg(a, b, vp);
      if (!s) return;
      g.strokeStyle = color; g.lineWidth = width; g.setLineDash(dash || []);
      g.beginPath(); g.moveTo(s[0][0], s[0][1]); g.lineTo(s[1][0], s[1][1]); g.stroke();
    };
    // the open group's box
    if (u.path.length && !u.present) {
      const bb = this.boxOf(ctx.def, ctx.m);
      if (bb) this.box(bb, (a, b) => line(a, b, this.c.ink2, 1, [4, 4]));
    }
    // guide points
    if (u.guidesOn !== false && !u.present) for (const gp of this.model.guides.values()) if (gp.kind === 'point') this.cross(g, this.cam.project(gp.p, vp), this.c.ink2);
    // dimensions (on top of everything: they are notes about the model)
    if (u.dimsOn !== false) for (const dm of this.model.dims?.values() || []) this.drawDim(g, dimLayout(this.model, dm, this.cam, vp), this.c.ink, 1.25);
    // section planes (0.4 M7): an outline with arrows toward the side cut away; not in presentation view
    if (!u.present && this.model.sectionView?.planes !== false) for (const [id, s] of this.model.sections || []) this.drawSection(g, sectionLayout(this.model, s), id === this.model.activeSection ? this.c.section : this.c.ink2, id === this.model.activeSection ? 1.75 : 1.25, vp);
    // the app's own marks (0.5 RC.11 (d): ModelCraft's lamps), not in presentation view: drawExtra(g, project, colours)
    if (!u.present && this.drawExtra) this.drawExtra(g, (p) => this.cam.project(p, vp), this.c);
    // selection
    if (!u.present) this.drawSel(g, u.sel, ctx, line, this.c.sel, 2.5);
    // presentation view: a tool's own preview still draws (so drawing works), its inference marks and tips do not
    const o = u.present && u.overlay ? { ...u.overlay, marker: null, tip: null, hover: null } : u.overlay;
    if (!o) return;
    // a tool's preview: ends are plain world points ({kind: 'ang', o, a, b, off}, {kind: 'rad'|'dia', c: {p, r, n}, off}, or {a, b, off})
    if (o.section) this.drawSection(g, sectionLayout(this.model, o.section), this.c.sel, 1.5, vp, true);
    for (const d of o.dims || []) this.drawDim(g, dimLayout({ dimEnds: (x) => (x.kind === 'ang' ? [x.o, x.a, x.b] : [x.a, x.b]) }, d, this.cam, vp), this.c.sel, 1.5);
    if (o.hover) this.drawSel(g, [o.hover], ctx, line, this.c.sel, 1.5, true);
    if (o.many) this.drawSel(g, o.many, ctx, line, this.c.red, 2.5);
    if (o.faces) {
      g.fillStyle = this.c.sel; g.globalAlpha = 0.22; g.setLineDash([]);
      for (const [a, b, c] of o.faces) {
        const A = this.cam.project(a, vp), B = this.cam.project(b, vp), C = this.cam.project(c, vp);
        if (!A || !B || !C) continue;
        g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.lineTo(C[0], C[1]); g.closePath(); g.fill();
      }
      g.globalAlpha = 1;
    }
    if (o.poly) for (let i = 0; i < o.poly.length; i++) line(o.poly[i], o.poly[(i + 1) % o.poly.length], o.polyKind ? this.color(o.polyKind) : this.c.ink, 1.5);
    for (const l of o.lines || []) line(l.a, l.b, this.color(l.kind), l.dash ? 1.25 : 2, l.dash ? [6, 4] : null);
    for (const p of o.points || []) this.cross(g, this.cam.project(p, vp), this.c.ink2);
    // a curve's points while it is edited (M27): squares, the one under the pointer filled
    (o.grips || []).forEach((p, i) => {
      const s = this.cam.project(p, vp);
      if (!s) return;
      g.setLineDash([]); g.lineWidth = 1.5; g.strokeStyle = this.c.sel; g.fillStyle = i === o.hotGrip ? this.c.sel : this.c.bg;
      g.fillRect(s[0] - 4.5, s[1] - 4.5, 9, 9); g.strokeRect(s[0] - 4.5, s[1] - 4.5, 9, 9);
    });
    if (o.rect) {
      const r = o.rect;
      g.strokeStyle = this.c.ink; g.lineWidth = 1; g.setLineDash(r.crossing ? [6, 4] : []);
      g.fillStyle = this.c.sel; g.globalAlpha = 0.08;
      g.fillRect(Math.min(r.x0, r.x1), Math.min(r.y0, r.y1), Math.abs(r.x1 - r.x0), Math.abs(r.y1 - r.y0));
      g.globalAlpha = 1;
      g.strokeRect(Math.min(r.x0, r.x1) + 0.5, Math.min(r.y0, r.y1) + 0.5, Math.abs(r.x1 - r.x0), Math.abs(r.y1 - r.y0));
    }
    if (o.marker) {
      const s = this.cam.project(o.marker.p, vp);
      if (s) this.markerAt(g, s, o.marker.kind);
    }
    if (o.tip && u.mouse) {
      g.setLineDash([]);
      g.font = '600 12px Archivo, system-ui, sans-serif';
      const w = g.measureText(o.tip).width + 10;
      let x = u.mouse.x + 16, y = u.mouse.y + 18;
      if (x + w > this.w - 4) x = u.mouse.x - w - 12;
      if (y + 20 > this.h - 4) y = u.mouse.y - 28;
      g.fillStyle = this.c.bg; g.strokeStyle = this.c.ink; g.lineWidth = 1;
      g.fillRect(x, y, w, 19); g.strokeRect(x + 0.5, y + 0.5, w - 1, 18);
      g.fillStyle = this.c.ink; g.fillText(o.tip, x + 5, y + 13.5);
    }
  }
  /** A dimension: extension lines, the dimension line with ticks at its ends, and its length in a box. */
  drawDim(g, l, color, width) {
    const vp = this.cam.viewProj();
    g.setLineDash([]); g.strokeStyle = color; g.lineWidth = width;
    if (l.kind === 'rad' || l.kind === 'dia' || l.kind === 'ang') { this.drawDimRound(g, l, color, width, vp); return; }
    for (const [p, q] of [[l.pa, l.qa], [l.pb, l.qb]]) {
      const s = this.seg(p, q, vp);
      if (!s) continue;
      // a small gap at the measured point, and a short run past the dimension line
      const dx = s[1][0] - s[0][0], dy = s[1][1] - s[0][1], n = Math.hypot(dx, dy);
      if (n < 1) continue;
      const ux = dx / n, uy = dy / n, gap = Math.min(4, n / 3);
      g.beginPath(); g.moveTo(s[0][0] + ux * gap, s[0][1] + uy * gap); g.lineTo(s[1][0] + ux * 5, s[1][1] + uy * 5); g.stroke();
    }
    if (!l.A || !l.B) return;
    const s = this.seg(l.qa, l.qb, vp);
    if (!s) return;
    g.beginPath(); g.moveTo(s[0][0], s[0][1]); g.lineTo(s[1][0], s[1][1]); g.stroke();
    // architectural ticks: short slashes at 45° across each end
    const dx = s[1][0] - s[0][0], dy = s[1][1] - s[0][1], n = Math.hypot(dx, dy) || 1;
    const tx = (dx - dy) / n * 4.5, ty = (dy + dx) / n * 4.5;
    g.lineWidth = width + 0.75;
    for (const e of s) { g.beginPath(); g.moveTo(e[0] - tx, e[1] - ty); g.lineTo(e[0] + tx, e[1] + ty); g.stroke(); }
    const text = formatLength(l.L, this.model.units), b = dimTextBox(l.M, text);
    g.font = '600 12px Archivo, system-ui, sans-serif';
    g.fillStyle = this.c.bg; g.fillRect(b.x, b.y, b.w, b.h);
    g.lineWidth = 1; g.strokeRect(b.x + 0.5, b.y + 0.5, b.w - 1, b.h - 1);
    g.fillStyle = color; g.textAlign = 'center'; g.fillText(text, l.M[0], b.y + 14); g.textAlign = 'start';
  }
  /** A section plane's outline, its four arrows (toward the side it cuts away) and a light fill. */
  drawSection(g, l, color, width, vp, dashed = false) {
    const S = l.corners.map((p) => this.cam.project(p, vp));
    if (S.some((x) => !x)) return;
    g.setLineDash(dashed ? [6, 4] : []); g.strokeStyle = color; g.lineWidth = width;
    g.beginPath(); S.forEach((s, i) => (i ? g.lineTo(s[0], s[1]) : g.moveTo(s[0], s[1]))); g.closePath();
    g.globalAlpha = 0.06; g.fillStyle = color; g.fill(); g.globalAlpha = 1; g.stroke();
    g.setLineDash([]);
    for (const [a, b] of l.arrows) {
      const A = this.cam.project(a, vp), B = this.cam.project(b, vp);
      if (!A || !B) continue;
      g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(B[0], B[1]); g.stroke();
      const dx = A[0] - B[0], dy = A[1] - B[1], n = Math.hypot(dx, dy);
      if (n < 4) continue;
      const ux = dx / n, uy = dy / n;
      g.fillStyle = color;
      g.beginPath(); g.moveTo(B[0], B[1]); g.lineTo(B[0] + ux * 8 - uy * 3.5, B[1] + uy * 8 + ux * 3.5); g.lineTo(B[0] + ux * 8 + uy * 3.5, B[1] + uy * 8 - ux * 3.5); g.closePath(); g.fill();
    }
  }
  /** A radius, diameter or angle dimension (0.4 M5): its lines and arc, filled arrowheads, and its text in a box. */
  drawDimRound(g, l, color, width, vp) {
    const P = (p) => this.cam.project(p, vp);
    const path = (pts) => { const s = pts.map(P); if (s.some((x) => !x)) return; g.beginPath(); g.moveTo(s[0][0], s[0][1]); for (const q of s.slice(1)) g.lineTo(q[0], q[1]); g.stroke(); };
    g.lineWidth = Math.max(1, width - 0.5);
    for (const [a, b] of l.lines) path([a, b]);
    g.lineWidth = width;
    if (l.arc?.length) path(l.arc);
    g.fillStyle = color;
    for (const [tip, from] of l.arrows) {
      const A = P(tip), B = P(from);
      if (!A || !B) continue;
      const dx = B[0] - A[0], dy = B[1] - A[1], n = Math.hypot(dx, dy);
      if (n < 1) continue;
      const ux = dx / n, uy = dy / n, k = 9, h = 3.2;
      g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(A[0] + ux * k - uy * h, A[1] + uy * k + ux * h); g.lineTo(A[0] + ux * k + uy * h, A[1] + uy * k - ux * h); g.closePath(); g.fill();
    }
    if (!l.M) return;
    const text = dimText(l, (m) => formatLength(m, this.model.units)), b = dimTextBox(l.M, text);
    g.font = '600 12px Archivo, system-ui, sans-serif';
    g.fillStyle = this.c.bg; g.fillRect(b.x, b.y, b.w, b.h);
    g.lineWidth = 1; g.strokeRect(b.x + 0.5, b.y + 0.5, b.w - 1, b.h - 1);
    g.fillStyle = color; g.textAlign = 'center'; g.fillText(text, l.M[0], b.y + 14); g.textAlign = 'start';
  }
  markerAt(g, s, kind) {
    const col = this.color(kind);
    g.setLineDash([]); g.lineWidth = 2; g.strokeStyle = col; g.fillStyle = col;
    const [x, y] = s;
    g.beginPath();
    if (kind === 'end' || kind === 'mid' || kind === 'center' || kind === 'origin' || kind === 'guidept') { g.arc(x, y, 5.5, 0, Math.PI * 2); g.globalAlpha = 0.35; g.fill(); g.globalAlpha = 1; g.stroke(); }
    else if (kind === 'edge' || kind === 'guide') { g.rect(x - 4.5, y - 4.5, 9, 9); g.stroke(); }
    else if (kind === 'face') { g.moveTo(x, y - 6); g.lineTo(x + 6, y); g.lineTo(x, y + 6); g.lineTo(x - 6, y); g.closePath(); g.stroke(); }
    else { g.arc(x, y, 3.5, 0, Math.PI * 2); g.fill(); }
  }
  cross(g, s, color) {
    if (!s) return;
    g.setLineDash([]); g.strokeStyle = color; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(s[0] - 5, s[1] - 5); g.lineTo(s[0] + 5, s[1] + 5); g.moveTo(s[0] + 5, s[1] - 5); g.lineTo(s[0] - 5, s[1] + 5); g.stroke();
  }
  box(bb, ln) {
    const c = (i) => [i & 1 ? bb.max[0] : bb.min[0], i & 2 ? bb.max[1] : bb.min[1], i & 4 ? bb.max[2] : bb.min[2]];
    for (const [a, b] of [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]]) ln(c(a), c(b));
  }
  drawSel(g, sel, ctx, line, color, width, dashed = false) {
    const def = ctx.def;
    for (const s of sel) {
      if (!s) continue;
      if (s.t === 'e') {
        const e = def.edges.get(s.id);
        if (e) line(apply(ctx.m, def.verts.get(e.a)), apply(ctx.m, def.verts.get(e.b)), color, width, dashed ? [5, 3] : null);
      } else if (s.t === 'f' && dashed) {
        const f = def.faces.get(s.id);
        if (f) for (const l of f.loops) for (let i = 0; i < l.length; i++) line(apply(ctx.m, def.verts.get(l[i])), apply(ctx.m, def.verts.get(l[(i + 1) % l.length])), color, width, [5, 3]);
      } else if (s.t === 'i') {
        const inst = def.insts.get(s.id);
        if (!inst) continue;
        const d = this.model.def(inst.def);
        const m = mmul4(ctx.m, inst.m);
        const bbLocal = this.boxOf(d);
        if (!bbLocal) continue;
        // the instance's own box, transformed (so a rotated group shows a rotated box)
        const c = (i) => apply(m, [i & 1 ? bbLocal.max[0] : bbLocal.min[0], i & 2 ? bbLocal.max[1] : bbLocal.min[1], i & 4 ? bbLocal.max[2] : bbLocal.min[2]]);
        for (const [a, b] of [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]]) line(c(a), c(b), color, dashed ? 1.25 : 2, dashed ? [5, 3] : null);
      } else if (s.t === 's') {
        const sp = this.model.sections?.get(s.id);
        if (sp) this.drawSection(g, sectionLayout(this.model, sp), color, dashed ? 1.5 : 2.5, this.cam.viewProj(), dashed);
      } else if (s.t === 'd') {
        const dm = this.model.dims?.get(s.id);
        if (dm) this.drawDim(g, dimLayout(this.model, dm, this.cam), color, dashed ? 1.5 : 2);
      } else if (s.t === 'g') {
        const gd = this.model.guides.get(s.id);
        if (!gd) continue;
        if (gd.kind === 'point') this.cross(g, this.cam.project(gd.p), color);
        else { const L = (this.radius || 30) * 4; line(add(gd.p, mul(gd.d, -L)), add(gd.p, mul(gd.d, L)), color, width, [8, 4]); }
      }
    }
  }
  snapshot() { this.draw(); return this.gl.toDataURL('image/png'); }
}

function mmul4(a, b) {
  const r = new Array(16);
  for (let c = 0; c < 4; c++) for (let rr = 0; rr < 4; rr++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + rr] * b[c * 4 + k]; r[c * 4 + rr] = s; }
  return r;
}
export { bboxAdd };
