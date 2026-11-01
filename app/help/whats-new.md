---
title: What's new in 0.7
summary: Meshes with modifiers, sculpting, UVs and curve objects, path tracing on the graphics card and a Render workspace, a real-time live view with scatter and panoramas, node materials, an Animate workspace with bones and physics, USD, FBX, STEP and .3dm files, and print tools with a Beginner style.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, mesh, meshes, mesh workspace, modifiers, subdivision, crease, uv, unwrap, seams, curves, curve objects, nurbs, bezier, sculpt, remesh, retopology, divide, calculation, path tracing, webgpu, render workspace, render queue, mp4, exr, denoise, physical sky, hdri, ies, depth of field, light mixing, fog, caustics, live view, real time, walk, scatter, panorama, tour, viewer, shading, nodes, node materials, material library, materialx, decals, texture painting, baking, animate, graph editor, clips, shape keys, drivers, armature, bones, skinning, ik, constraints, physics, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d solids, supports, wall thickness, hollow, repair, beginner, assistants, your machine, units, portuguese
---

This is what changed in ModelCraft 0.7, compared with 0.6. ModelCraft now models meshes as well as push/pull geometry, renders on the graphics card, and has a workspace for each kind of work: pick it in the {{ui:Workspace}} list at the left of the toolbar.

## New

### Meshes

- **Meshes.** Select a group or component and click {{ui:Convert to mesh}} in {{ui:Entity info}}: it becomes a mesh, with faces of any number of corners that can carry texture coordinates, normals, colors and weights. {{ui:Convert to geometry}} turns it back. Undo on a mesh keeps only what each step changed. A file that holds a mesh needs ModelCraft 0.7 to open. See [Meshes](topic:meshes).
- **The Mesh workspace.** Double-click a mesh, or pick {{ui:Mesh}} in the {{ui:Workspace}} list, to edit its vertices, edges and faces: loops and rings, proportional editing, extrude, inset, bevel, loop cut, knife, bisect, spin, merge, dissolve, fill, grid fill, bridge and slide, and the last operation's settings changed afterwards in the panel. Start from a plane, cube, sphere, torus and more. Push/pull keys and modeler keys both work. See [Edit a mesh in the Mesh workspace](topic:mesh-edit).
- **Modifiers.** Mirror, array, subdivision surface, bevel, solidify, boolean, displace, weld, decimate, smooth, lattice, curve deform and shrinkwrap change what a mesh shows without changing it. Stack them, turn each on or off for the view and for renders, and {{ui:Apply}} one when you want it for good. See [Modifiers on a mesh](topic:modifiers).
- **Subdivision with creases.** {{ui:Crease}} in the Mesh workspace keeps chosen edges sharp under a subdivision surface. Renders can use more levels than the view, and on a big mesh the view shows a lower level and says so. See [Subdivision surface](topic:modifiers#subdivision-surface).
- **Curve objects.** Bézier, NURBS and straight-segment curves that make a tube, a band, a taper or a filled plate, and text as a curve. Edit their points in the {{ui:Curve}} workspace; {{ui:To mesh}} when the shape is right. See [Curve objects](topic:curves).
- **The UV workspace.** Mark seams (or let ModelCraft mark them at sharp edges), {{ui:Unwrap}} and {{ui:Pack}}, or project by box, cylinder, sphere or the view. A UV editor beside the 3D view moves, turns and scales the pieces, and a checker and stretch colors show the result. See [Lay out a mesh's UVs](topic:uv).
- **Sculpting.** The {{ui:Sculpt}} workspace has draw, clay, smooth, grab, inflate, crease, pinch, flatten and mask brushes, mirroring across X, and {{ui:Detail}} that adds triangles where you sculpt. A pen's pressure sets the brush's size and strength. Each stroke is one undo step. See [Sculpt a mesh](topic:sculpt).
- **Remesh and retopology.** {{ui:Remesh}} makes a whole mesh again as even triangles, closing holes and joining overlapping pieces. To build a clean mesh over a detailed one, choose it under {{ui:Retopology}}: points you move land on its surface. See [Remesh](topic:mesh-edit#remesh).

### Drawing

- **Divide an edge or curve.** The {{ui:Divide}} tool marks the cuts as you move along an edge and divides with a click or a typed number; with an edge, arc or circle selected, type `/5`; {{ui:Entity info}} › {{ui:Divide…}} asks for the number, for tablets. An arc or circle is divided by equal angles on the true arc. See [Divide an edge or curve into equal parts](topic:divide).
- **Calculations in the value box.** Type `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` or `2*450mm` for any length, and `90/2` for an angle. A calculation that can't be done says what is wrong and where. See [Calculations](topic:value-box#calculations).

### Rendering

- **Path tracing on the graphics card.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} runs CadCraft's own path tracer on the graphics card where the browser has WebGPU; the line under the picture says which engine made it. {{ui:Stop}} keeps the picture and {{ui:Resume}} carries on from there. Without WebGPU the picture is path traced with WebGL, as before. See [High quality](topic:render#high-quality).
- **Render in the view.** The {{ui:Render}} workspace path traces the view itself and starts again as you orbit or edit: render a {{ui:Region}}, click to {{ui:Focus}}, set the {{ui:Detail}}. It needs WebGPU. See [Render in the view](topic:render#render-in-the-view).
- **Materials, lights and skies.** High-quality pictures shade every surface with the OpenPBR material model (coats, fuzz, thin films, colored glass, glow). With WebGPU there is also a {{ui:Physical sky}} with {{ui:Haze}}, a {{ui:Sky picture (HDRI)}}, and maker's IES light profiles for lamps. See [Skies and light profiles](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **A camera like a photograph's.** Exposure from f-stop, shutter and ISO in every mode; with WebGPU also depth of field, two-point perspective, white balance, 360° panoramas (also in stereo) and cube maps. See [The camera](topic:render#the-camera).
- **Finish the picture after rendering.** Grade it ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} or {{ui:Standard}}, contrast, bloom, glare, vignette, a `.cube` color table), mix the sky, the sun and each lamp group, and look at render elements one by one, all without rendering again. The remaining grain is cleared by a denoiser on your own computer. See [Finish the picture](topic:render#finish-the-picture) and [Mix the lights after the render](topic:render#mix-the-lights-after-the-render).
- **More ways to save a render.** 16-bit PNG, a multi-layer EXR with every render element and light group, and a render file (`.ccrender`) that opens again with its mix and grade. See [Save the picture](topic:render#save-the-picture).
- **Fog, smoke and caustics.** Fog and haze lit by the sun and lamps, with light shafts; one smoke column or cloud; caustics under glass and mirrors; adaptive sampling that stops on pixels that are already clean. On the graphics card only. See [Fog, smoke, noise and caustics](topic:render#fog-smoke-noise-and-caustics).
- **A render queue and MP4.** Add high-quality pictures and whole animations to the {{ui:Render queue}}; they render one after another and the queue survives closing the page. It needs WebGPU. Videos can also be saved as MP4 where the browser can write it. See [The render queue](topic:render#the-render-queue) and [Render the video](topic:animation#render-the-video).

### Live view and presentations

- **Live view.** {{ui:Export}} › {{ui:Live view}} shows the model in a real-time look beside the view, following every edit and the camera: sun shadows, materials, lamps and light bounced off walls. {{ui:Walk}} through it, drag {{ui:Time}} and {{ui:Month}} to move the sun, or move it to a {{ui:New window}}. It uses WebGPU where the browser has it, else WebGL 2. See [The live view](topic:live-view).
- **Scatter.** Spread grass, flowers, rocks, trees and people over faces or with a brush, from seven new entourage items and the rest of the library; the sets are saved in the file. See [Scatter plants, rocks and people](topic:live-view#scatter-plants-rocks-and-people).
- **Share.** A 360° panorama, a panorama tour with arrows between spots, a standalone viewer (one web page that opens offline and loads nothing from the internet) and a video of the camera path, all in the real-time look. See [Share](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR in the real-time look.** {{ui:Review in VR}} shows the model with its materials, sky, sun shadow, lamps, scattered items and bounce light. See [What it looks like](topic:vr-review#what-it-looks-like).

### Materials

- **Materials made with nodes.** The {{ui:Shading}} workspace builds the file's own materials as node graphs: pictures, noise and checkers, Voronoi cells, waves, bricks, tiles, wood, marble, gradients, dirt and edge wear, color work, math, bump and normal maps, into the full OpenPBR material. The view shows each change at once. See [Make materials with nodes](topic:shading).
- **A material library and your own texture sets.** The Shading panel lists Library's materials: sixteen CC0 texture sets, each credited. Click one to use it, or drag it onto a face. {{ui:Pictures or a zip…}} or {{ui:A folder…}} makes a material from your own maps, found by their file names. See [Materials from the library](topic:shading#materials-from-the-library).
- **MaterialX in and out.** Export a material as MaterialX (OpenPBR Surface or Standard Surface, textures as PNG), and import MaterialX files with their pictures. See [MaterialX](topic:shading#materialx).
- **Decals and texture painting.** Place a picture on a surface as a decal with a material of its own, and paint on a material's picture with a round brush. See [Decals](topic:shading#decals) and [Paint on the texture](topic:shading#paint-on-the-texture).
- **Texture baking.** Bake ambient occlusion, curvature, lighting and a detailed object's normals into pictures along a mesh's UVs, on the computer's processor cores. See [Bake textures](topic:shading#bake-textures).

### Animation

- **The Animate workspace.** Key an object's place, turn and size, each lamp's brightness, spread and color, and the lens angle, right in the panel. The timeline gets a {{ui:Curves}} view (Bézier handles, repeats) and a {{ui:Clips}} view that saves keys as actions to place again and mix; keys on several rows can be moved, stretched, copied and pasted. See [Animate any property](topic:animate).
- **Shape keys and drivers.** A mesh holds other shapes of itself, blended by sliders that can be keyed, or set from other values by a small expression. See [Shape keys](topic:animate#shape-keys-morphs) and [Drivers](topic:animate#drivers).
- **Armatures.** Put bones in a mesh, let {{ui:Automatic weights}} share the points among them or paint the weights, and pose and key the bones; linear or dual quaternion skinning. See [Armatures](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK and constraints.** Reach (IK) with a pole, look at, copy transforms, limits, child of and follow path, for bones and objects. See [IK and constraints](topic:animate#ik-and-constraints).
- **Physics.** Groups and components fall, stack and collide as boxes or balls, and {{ui:Bake physics}} keeps the result as keys. See [Physics](topic:animate#physics-drop-stack-and-collide).

### Files

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) saves the model as `.usda`, `.usdc` or `.usdz`, and a USD file ModelCraft saved opens again with nothing lost. USD from other programs opens or imports as meshes, groups, components, lamps and cameras. {{ui:Save}} still writes `.modelcraft`. See [Save, open and export USD](topic:usd).
- **glTF, complete.** glTF files come in as editable meshes with their normals, UVs, vertex colors and textures, nodes as groups, lights as lamps and cameras as scenes, Draco and meshopt files included; a `.gltf` opens when dropped together with its files. Export writes meshes, textures, lamps and cameras. See [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL and Alembic imports.** FBX 2011 and newer (meshes, UV sets, materials, embedded textures, lights, cameras), PLY and STL with their colors, and Alembic caches at their first sample. OBJ comes in with its `.mtl` and pictures when you drop them together. See [File formats in detail](topic:formats).
- **More exports.** PLY with colors, STL with the colors of painted faces, and OBJ with its textures as one zip. See [File formats in detail](topic:formats).
- **STEP files.** {{ui:Import}} reads STEP (AP203, AP214, AP242) parts and assemblies as closed meshes at their true size, every part where the file places it. See [STEP](topic:formats#step-step-stp).
- **.3dm files.** {{ui:Import}} reads `.3dm` models: meshes, polysurfaces and extrusions (from the meshes saved in the file, else tessellated by ModelCraft), curves as edges, blocks as components and layers as tags. See [Bring in a .3dm model](topic:import-3dm-files).
- **3D solids from DWG and DXF.** Importing a drawing now brings its 3D solids, regions and bodies too, each as its own group, closed ones as solids. See [Model on a site plan](topic:site-plan#what-comes-in).

### 3D printing

- **Print tools.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Print tools** has a {{ui:Supports preview}} (overhangs, columns or tree supports, about how much material), {{ui:Wall thickness}} (walls too thin to print, listed with {{ui:Show}}), {{ui:Hollow}} (walls of the thickness you give, with drain holes) and {{ui:Repair}} (every fix listed; overlapping parts join only when you ask). Hollow and Repair give a group whose flat sides are single faces, or a mesh when the result would not close or has too many faces; the status line says which. See [Supports, wall thickness, hollowing and repair](topic:print-tools).
- **The Beginner style.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}} › {{ui:Beginner}}: big buttons to drop shapes and holes, move, align and {{ui:Group}} so the holes cut, then check the model for printing. See [The Beginner style](topic:beginner).

### Assistants and your machine

- **More for AI assistants.** An assistant can now list faces and materials, push/pull, paint, make groups, add and show scenes, add meshes, edit modifier stacks, export USD, render a picture and fill the render queue. See [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).
- **Your machine.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Your machine}} shows the graphics, processor cores and memory this browser lets the app use, and the level that sets where the live view starts. See [What your machine renders with](topic:your-machine).

## Fixed

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}} and {{ui:Intersect}} could return a group that was not closed, at any size. They close now.
- {{ui:Solids}} › {{ui:Subtract}} was greyed out with nothing selected, although it picks its two pieces in turn after you choose it.
- Inside the animation timeline, typed keys went nowhere, {{key:Mod+S}} too. {{key:Mod+Z}} and {{key:Mod+Y}} there are the timeline's own undo and redo; other {{key:Mod}} keys reach the app.

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. In ModelCraft the units list beside the value box follows the switches (the model's own unit always stays in it), the star sets the unit of a new model (when ModelCraft has that unit), and a length typed with any unit's mark is read in that unit. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- Rendering on the graphics card (WebGPU) has been tested here with a software stand-in only, not yet on real graphics cards, so render something small on your own computer first. The same goes for the live view, and VR has still been tried with a headset emulator only.
- Without WebGPU there is no Render workspace or render queue, and high-quality pictures have no depth of field, physical sky, sky picture, fog, smoke, caustics or light mixing.
- {{ui:Render a picture…}} does not draw scattered items yet; they show in the live view, its panoramas, viewer and video.
- Lamps animate in the view, but a rendered video uses the lamps as they are when it starts.
- Bones and animation are not read from or written to glTF, FBX or USD files yet (skinned models come in at rest, with their weights), and glTF and FBX materials beyond the base color or texture are not kept yet.
- STEP colors and the assembly's part names are not read yet. `.3dm` import has been tested with files written by the format's toolkit, not yet with files from the modeling program itself; SubD objects, text and dimensions are left out.
- The plant library from CivilCraft is in ModelCraft, but placing plants from it is not built yet.
- Painting a texture on push/pull faces repeats with the material's tile; to paint one face only, convert it to a mesh and unwrap it.

Everything else is in [Not built yet](topic:not-built-yet).
