---
title: Not built yet
summary: What this build of ModelCraft does not do yet, and what to do instead today.
section: trouble
order: 20
keywords: missing, not yet, limitations, roadmap, materials, textures, text, layers, trim, split, cloud, desktop
---

ModelCraft is an early build. This page lists what it does not do yet, so you don't go looking for it, and the nearest way to get the job done today.

## Drawing tools

| Not yet | Instead, today |
|---|---|
| Freehand drawing | Click the points with {{ui:Curve}} |
| Changing an arc's or circle's number of segments after drawing it | Erase it and draw it again after typing `24s` |
| Choosing a typeface for [3D text](topic:text3d), or editing its words after placing it | Delete it and add the text again |
| Changing an angle by typing into an angle dimension, or a cylinder's size from its circle's dimension | Rotate the edges with {{ui:Rotate}}; scale the cylinder with {{ui:Scale}} |
| Dimensions in exported model files | Dimensions show in images, prints and PDFs of the view; model files carry geometry only |
| Trim, Split and Outer shell | [Union, Subtract and Intersect](topic:solids) closed groups, or [intersect faces](topic:intersect) and erase what you do not need |
| Choosing the rotation axis with the arrow keys | Click the {{ui:Rotate}} center on a face that faces the way the axis should point |
| Locks on more than one inference at a time | Lock one direction with an arrow key, then snap to a point |
| Resizing along a slant, or from a dimension end that is not on a corner | Place the dimension on two corners, along an edge or along red, green or blue |

## Animation

| Not yet | Instead, today |
|---|---|
| Animating faces, edges, the sun's time of day, the style or what is hidden | Make the moving part a group or component; render a separate video for another time of day |
| A camera that follows a drawn path, or looks at a moving object | Set more camera keys along the way ([Animate](topic:animation)) |
| Sound in videos, and high-quality (path-traced) videos without WebGPU | Add sound in a video editor; without WebGPU, render the video with the fast renderer ([Render the video](topic:animation#render-the-video)) |
| Animated lamps (brightness, spread, colour) in a rendered video, a lens angle animated without camera keys in a video, animating materials or render settings | Lamps animate in the view; for a video, key the camera too for a zoom; render separate videos for different lamp settings ([Animate any property](topic:animate)) |
| Mirroring weights or bones from one side to the other, bone envelopes you can see, showing weights shaded point by point (they show per face), seeing the posed mesh while painting weights | Paint both sides, or make one half and use a Mirror modifier before the armature is added; switch between Paint weights and Pose to check |
| Bones read from glTF, FBX or USD files as an armature, and armatures written to those files | Skinned models come in at rest with the file's weights; add the bones in the file's joint order, then {{ui:Use the file's weights}} ([Animate](topic:animate)) |
| Moving an IK target or a pole by dragging it in the view, a constraint's own space (local or world) to choose, stretching IK chains, IK along a curve | Type the target's point, or aim at an object and move that; keep chains to their lengths |
| Cloth, fluids, soft bodies, joints and hinges between rigid bodies, collision with an object's exact shape (only boxes and balls round it), a live simulation while you play, a starting speed or spin (bodies start at rest) | Bake rigid bodies and play the keys; build a hinge from keys; split an odd shape into boxes (groups) |
| Exporting the animation to glTF or other model files | Render a video; the `.modelcraft` file, and a [USD file](topic:usd) ModelCraft saved, keep it for ModelCraft |
| Typing a comment or a title on an issue in VR, voice notes, moving a section plane by hand in VR | Place the issue in VR, then add its words in a BCF program; set a section plane in the view before you go in: see [Review the model in a VR headset](topic:vr-review) |
| Seeing people at the desk in VR (only people in VR show), recording a VR walk | Ask them to join in VR, or make an [animation](topic:animation) of the walk |

## Meshes

| Not yet | Instead, today |
|---|---|
| Sculpting by levels (multiresolution), and Detail taking away triangles that became tiny | [Sculpt](topic:sculpt) a subdivided mesh; {{ui:Remesh}} to even it out again |
| A remesh into four-sided faces that follow the shape | {{ui:Remesh}} (even triangles), then rebuild it with [Retopology](topic:mesh-edit#retopology) |
| Weights painted on vertices for modifiers (Displace, Smooth and Shrinkwrap work on the whole mesh) | Apply the modifier, then sculpt or edit the parts that need it |
| Copy and paste of vertices, edges or faces, a knife cut that ends inside a face, wire edges with no face | Duplicate the mesh in Model; knife from edge to edge; [Extrude](topic:mesh-edit#change-the-shape) open edges into faces |

## Organizing and viewing

| Not yet | Instead, today |
|---|---|
| Layers of DWG and DXF site plans as tags | The site plan comes in as one group: explode it and group the parts you want to tag |
| Several section cuts at once, a section box, or a section's outline exported as a drawing | One [section plane](topic:sections) cuts at a time; export the view as an image |
| Showing soft edges dashed, or softening while you drag a slider | [Soften by angle](topic:soften) in Entity info, and undo to try another angle |
| An online library of models to search, or components with options to pick (colour, style) | The [starter library](topic:starter); import Collada, OBJ or glTF models; [stretch](topic:stretch) a copy to size |
| Placing plants from the plant library | [Scatter](topic:live-view#scatter-plants-rocks-and-people) plants in the live view, or place a starter-library tree |
| Independent copies of a group | Make it a component, then {{ui:Make unique}} (see [Troubleshooting](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendering

| Not yet | Instead, today |
|---|---|
| Rendering in the view (the {{ui:Render}} workspace), the render queue, and the camera, sky-picture, fog and light-mixing options without WebGPU | {{ui:Render a picture…}} in {{ui:High quality}} uses the WebGL path tracer there, without those options ([Render a picture](topic:render#high-quality)) |
| Another program drawing the Render picture without a render-engine add-on (CadCraft never runs a program under the GNU GPL licence); panorama or stereo cameras and a sky picture through another program; the Unreal Engine plug-in (the files are written, the plug-in that opens them is not released) | Our own Fast and Path tracer engines; an add-on's engine ([draw the picture with another program](topic:render-other-program)); a USD, glTF or Unreal folder file from the Engine list to take to any program |
| Scattered plants and rocks in {{ui:Render a picture…}} | They show in the [live view](topic:live-view), its panoramas, viewer and video |

## Materials and colors

| Not yet | Instead, today |
|---|---|
| Inputs other than base color, roughness, metalness, opacity, normal and emission changing across a surface in high-quality pictures (they use their average) | [Make materials with nodes](topic:shading): link them anyway, the view shows them varying |
| Displacement on push/pull faces | Convert the object to a mesh for displacement |
| Sharing your own materials to the Library from the app, and packed (ARM/ORM) or EXR maps in an imported texture set | Keep them in the file; import the separate maps as PNG or JPEG |
| Materials of the file in Live TeamWork sessions (they stay on the computer that made them) | Save the file and share it |
| Decals bending around curved surfaces, decals in Undo, or painting several faces' textures at once across a seam | Place smaller decals on each part; paint each side of a seam on its own |
| Baking onto push/pull faces, baking several objects into one picture, a cage you shape by hand, or baked lighting from lamps | Convert to a mesh and unwrap it; bake each object; raise the search distance; render a picture for lamp light |
| Painting roughness, metalness or height, painting with pictures (stamps) and texture painting larger than 512 × 512 | Paint the base color here; make other maps in a picture editor and import them as a texture set |
| Textures in Collada, STL, PLY, 3MF, IFC, DWG and DXF exports, and the node graphs of the file's own materials in exported models | Those formats get each material's color; glTF and OBJ carry imported textures; export a material on its own as [MaterialX](topic:shading#materialx); [USD](topic:usd) keeps the whole model for ModelCraft |
| Textures in Collada files | They are counted and left out on import; textures in `.skp` and `.glb` files come in |

## Files

| Not yet | Instead, today |
|---|---|
| Saving SketchUp files, and text and dimensions from them | [Import](topic:import-sketchup-files) keeps faces, colors and textures; export Collada (`.dae`) to go back to SketchUp |
| Dimensions and guides in DWG and DXF exports | Add them in the CAD program after exporting |
| Points, tables and multileaders from DWG and DXF | They are counted and left out; text comes in as single-stroke lettering, not the drawing's font |
| Surfaces, meshes, tables and multileaders from DWG and DXF; faces of 3D solids on swept, lofted or other freeform surfaces | They are counted and left out too (3D solids themselves come in). Export those parts from the CAD program as OBJ or Collada and import that |
| IFC types, properties or materials | The IFC export has [storeys](topic:formats#ifc-ifc) and generic elements; add the rest in a BIM program |
| Sending a model straight to BimCraft | Export {{ui:IFC for BimCraft (.ifc)}} and open it in BimCraft |
| Loose edges in glTF and STL | Use OBJ or Collada for line work |
| glTF and FBX materials beyond the base color (metal, roughness, normal maps, glass, clear coat, sheen…) | They are read and listed; ModelCraft keeps the base color or texture. Rebuild the look in the [Shading workspace](topic:shading) |
| glTF bones, animations and morph targets | Skinned models come in standing as they rest; animate in the [timeline](topic:animation) |
| Colors and the assembly's part names from STEP files | Parts come in as meshes at their true size; [paint](topic:paint) and name them after import |
| SubD objects, text, dimensions and lights from `.3dm` files | See [what is left out](topic:import-3dm-files#what-is-left-out-and-said); turn SubD into meshes in the program that made the file |
| KTX2 textures and material variants in glTF | Export with PNG or JPEG textures; the default variant is used |
| Writing glTF instancing (EXT_mesh_gpu_instancing) | Components are written once and placed many times, which every viewer reads |
| Alembic animation (every sample of a cache), Alembic points and curves, writing Alembic | The first sample comes in; animate in the [timeline](topic:animation); write glTF, USD or OBJ |
| Bump and normal maps in OBJ materials | Only the color picture (`map_Kd`) comes in |
| FBX bones and animation, FBX export, FBX 6 files | Skinned models come in at rest; export glTF; save old files as FBX 2011 or newer |
| Collada skins, morphs, cameras, lights, look-at and skew transforms, external references | Left out on import and counted in the message |
| Backup files | {{ui:Save as}} ({{key:Mod+Shift+S}}) saves another copy. After a crash, ModelCraft offers your unsaved work back ("Recover your work?") |
| Cloud saving and sync between computers | Not available yet. Save files to your computer, and copy them where you need them |

## 3D printing

| Not yet | Instead, today |
|---|---|
| Real slicer supports (interfaces, raft, the exact support pattern) | The [supports preview](topic:print-tools#supports-preview) shows where and about how much; your slicer's preview shows the real ones |
| Untangling a part that passes through itself, or edges where three or more faces meet | [Repair](topic:print-tools#repair) lists them with where they are; use [Intersect faces](topic:intersect) and erase what is inside |
| Infill patterns and a lattice inside a hollow | [Hollow](topic:print-tools#hollow) leaves it empty; your slicer adds infill to a solid part |
| Details too small for your nozzle (other than walls) | [Wall thickness](topic:print-tools#wall-thickness) finds thin walls; your slicer's layer preview shows the rest |

## Performance

Undo keeps a copy of the model for each step (a [mesh](topic:meshes) keeps only what changed), so very large imports of push/pull geometry make every edit slower. Keep imports lean, and save and reopen to clear the history.

## Apps and platforms

- **Desktop:** ModelCraft runs in the browser on Mac, Windows and Linux, and in CadCraft Studio, the desktop app with all eight apps in one install. On Android, CadCraft Studio installs from its APK on getcadcraft.com/download. There is no iPad or iPhone build yet.
- **Touch:** see [Orbit, pan and zoom](topic:orbit-pan-zoom) for the finger gestures. A pen's pressure sets the brush in [Sculpt](topic:sculpt); elsewhere pressure and pen tilt are not used.
- **Sheets:** ModelCraft [prints one view per page](topic:export-model#print-the-view-or-save-it-as-a-pdf); there are no sheet layouts with several views or a title block. Export to CadCraft-friendly DWG/DXF for drawings to scale.
