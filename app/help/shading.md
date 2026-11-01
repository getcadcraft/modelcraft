---
title: Make materials with nodes
summary: Build a material from textures, pictures and maths in the Shading workspace, see it in the view as you go, and paint faces with it.
section: tasks
order: 62
keywords: shading, bake, baking, texture baking, ambient occlusion, ao, curvature, normal bake, high poly, low poly, light map, decal, decals, sticker, logo, label, texture painting, paint texture, brush, material, materials, materialx, mtlx, openpbr, standard surface, material library, librarycraft, texture set, pbr, import textures, zip, cc0, drag, node, nodes, node editor, shader, texture, procedural, noise, checker, voronoi, cells, waves, bricks, tiles, wood, marble, gradient, dirt, edge wear, color ramp, mix, bump, normal map, roughness, metalness, opacity, cut-out, emission, glow, displacement, box mapping, triplanar, uv, picture, image texture, openpbr
---

A material made in the **Shading** workspace belongs to the file. It is a small graph: **nodes** that make textures, pictures and numbers, linked into the **Material output**, whose inputs are the surface's look — base color, roughness, metalness, normal, opacity, emission and the rest of the OpenPBR model. You paint faces with it like any library material, and every change shows in the view at once.

## Open it

Pick {{ui:Shading}} in the Workspace list. The 3D view keeps the top of the screen and the **node editor** takes the bottom. The panel on the right lists the file's own materials.

- {{ui:New material}} makes a grey one with only its Material output.
- **Make an editable copy of a library material** turns brick, wood, tile and the rest into a graph you can change: its texture comes through a Library texture node, its bumps through a Bump node.
- {{ui:Paint with it}} paints the selected faces or groups, or picks the material for the Paint tool. The Paint tool's materials also list the file's own under **In this file**.
- {{ui:Duplicate}} and {{ui:Delete}} work on the material you are editing. Deleting cannot be undone: faces painted with it show the default color until you paint them again.

## Materials from the library

The panel's **Material library (Library)** lists the library's materials, each with a preview rendered by CadCraft's path tracer. They are texture sets released under CC0, credited to the people who made them.

- Click one to bring it into the file (its pictures come with it) and, with faces or groups selected, paint them.
- Drag one onto a face or a group in the view to paint just that.
- It becomes one of the file's materials: change its nodes like any other. Its credit shows in the panel and stays in the file.

## Import a texture set

{{ui:Pictures or a zip…}} or {{ui:A folder…}} under **Import a texture set** makes a material from a set of maps. The maps are found by the words in their file names: color, albedo, diffuse or basecolor; roughness (or gloss, turned into roughness); metalness or metallic; normal (OpenGL or DirectX, from `gl` / `dx` in the name); height or displacement; ambient occlusion; opacity; emission. Packed maps (ARM, ORM) are left out. The tile starts at 1 × 1 m: set its real size on the Material output. Height goes to displacement with its scale at 0 — raise the scale to use it on meshes.

## MaterialX

MaterialX is the open format other 3D and rendering programs use to pass materials along.

- {{ui:Export as MaterialX…}} saves the material you are editing: its values, and every texture as a PNG picture beside the `.mtlx` file (in a zip). Choose the shader it is written as: **OpenPBR Surface** (MaterialX 1.39, the same model ModelCraft uses) or **Standard Surface** (MaterialX 1.38, which more programs read today). The textures are placed by UV coordinates in metres; box and triplanar placement are written as UV.
- {{ui:Import MaterialX…}} (or {{ui:From a folder…}}) reads `.mtlx` files with OpenPBR, Standard Surface, UsdPreviewSurface or glTF PBR shaders. Give it the pictures as well, or a zip of everything: a picture is found by its path, its name, or its name with another picture type (a `.exr` the file names can come as a `.jpg` beside it). Textures, normal maps, arithmetic, mixes and displacement come in as nodes; anything else keeps its value, and the status line says what was left out.

## Decals

A decal is a picture laid onto a surface — a logo, a sign, a label, a stain — with a material of its own.

- Set **Width of a new decal**, then {{ui:Place a decal…}} (or {{ui:Decal}} on the toolbar), choose a PNG, JPEG or WebP picture and click a face. The picture is projected onto the surfaces there, keeping its proportions; transparent parts of a PNG stay see-through.
- It belongs to the group or component you clicked in and moves with it. It covers the faces inside its box that face the same way, and stops at the edges of what it lies on.
- Each decal gets its own material, named **Decal: <picture>**, in the file's list: edit it like any other (roughness, a bump, a glow). {{ui:Material}} beside the decal opens it.
- Beside each decal: its width (the height follows the picture), {{ui:Turn}} (a quarter turn) and {{ui:Delete}}. Decals are kept with the file's materials, outside Undo.
- They show in the shaded view, in fast renders and in high-quality pictures.

## Paint on the texture

{{ui:Paint texture}} (or {{ui:Paint}} under **Paint on the texture**) turns the pointer into a round brush. Drag on a face that wears one of this file's materials: the brush paints the picture behind its base color.

- On a mesh it paints along the mesh's UVs (unwrap it in the UV workspace first); on other faces it paints across the face, so the painting repeats with the material's tile.
- A material whose base color is a plain color gets a new 512 × 512 picture of that color the first time you paint it. A material whose base color comes from other nodes needs a Picture node linked to Base color.
- Set the brush color, size (in picture pixels), strength and hardness in the panel. {{ui:Undo stroke}} or Ctrl+Z (while painting) takes back a stroke, up to the last 20.
- The painted picture is saved in the file. Library materials can't be painted: make an editable copy first.

## Bake textures

**Bake textures** writes what the shape and the scene give a surface into pictures along a mesh's UVs.

- Select a mesh that has UVs (unwrap it in the UV workspace), tick the maps and press {{ui:Bake}}:
  - **Ambient occlusion** — how open each point is: corners, creases and places under other things get darker. Everything shown in the model shades it, up to the occlusion distance.
  - **Curvature** — bright along outside edges, dark in inside corners, mid grey on flat and gently curved parts, over the edge width you set.
  - **Normals from the high-detail object** — select a detailed copy too: its surface detail is written as a normal map for the simpler one (the object with fewer triangles is baked onto). The search distance is how far apart the two surfaces may be.
  - **Lighting** — the sun of the model's place and date (Style) with its shadows, plus the sky, as a light map.
- The pictures join the file and appear in Picture nodes. If the material you are editing has a **Dirt and edge wear** node, it reads the new occlusion and curvature at once.
- More rays per texel make smoother occlusion and lighting and take longer. Baking runs on the computer's processor cores in the background; {{ui:Stop baking}} stops it.

## Build a graph

1. {{ui:Add a node…}} (or {{key:Shift+A}} in the node editor) adds a node in the middle of the editor.
2. Drag from an output dot (on a node's right) to an input dot (on a node's left) to link them. A second link into an input replaces the first; drag a linked input away to unlink it.
3. Inputs that are not linked show their value: type a number or pick a color. Settings sit at the bottom of each node.

Drag a node by its title to move it, drag empty space to pan, and use the wheel to zoom. {{key:Delete}} removes the selected nodes or link, {{key:Mod+Z}} undoes, {{key:Mod+D}} duplicates, {{key:F}} shows every node. Every change is one undo step of the node editor. The model's own undo does not change materials.

| Nodes | What they make |
|---|---|
| Texture coordinates | Where on the tile a point is: repeat it, offset it, turn it a quarter. |
| Value, Color | A number, a color. |
| Picture | A picture of the file (one that came with an imported model, or one you added with {{ui:Add a picture…}}). Choose **Colors** for a photo and **Data** for a roughness or normal map. |
| Library texture | A library material's texture, roughness and height. |
| Checker, Noise | Squares; smooth fractal noise with its detail, roughness and seed. |
| Voronoi cells, Waves, Gradient | Cells (distance to the nearest point, the edges between cells, a color per cell); bands across, up or diagonal, as sine, saw or triangle, bent by noise; linear, quadratic, radial and spherical gradients. |
| Bricks, Tiles | Rows of bricks with a running offset, or a grid of tiles: colors, mortar or grout, a gap and a bevel in metres, a height for bumps, a random number per piece. |
| Wood, Marble | Rings along the grain with fine fibres; veins bent by turbulence. |
| Dirt and edge wear | Wears convex edges and dirties hollows from a mesh's curvature and occlusion pictures ([Bake textures](topic:shading#bake-textures) makes them; or set its two picture settings, in the mesh's UV layout: place the material by UV coordinates). Without them it changes nothing. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Color work. |
| Math, Map range | Arithmetic on numbers (add, multiply, power, smooth step and more). |
| Bump, Normal map | A normal from a height (Bump) or from a normal-map picture (Normal map: pick the green channel's direction). |

## The Material output

Its settings say how the texture lies on surfaces:

- **Tile width** and **Tile height**: how many metres one tile of the texture covers. Everything a graph makes repeats across the tile with no seam.
- **Placed by**: **UV coordinates** follow faces (push/pull faces: along each face; meshes: their UVs, one UV unit = one tile), **Box** projects from the nearest of the three axes, **Triplanar** blends the three projections on surfaces that lean (**Blend sharpness**: higher is a harder blend).
- **Normal strength** scales the normal input. **Displacement scale** sets how far the displacement input moves a mesh's vertices.
- {{ui:More inputs}} shows the rest of the OpenPBR inputs: coat, fuzz, subsurface, thin film, transmission and their colors.

## In high-quality pictures

The path tracer reads the base color, roughness, metalness, opacity, normal and emission from the graph as they change across the surface. Any other input you link (a coat that varies, for example) is used at its average; the panel says which. A cut-out from an opacity texture shows its shape, and its shadow is evenly see-through. A glowing texture lights what it faces, without being sampled as a lamp.

**Displacement** moves the vertices of meshes only, so add a Subdivision modifier for detail ([Modifiers](topic:modifiers)). Push/pull faces keep their shape and get the bumps from the normal.

:::tip
On a computer with WebGPU the graph is worked out on the graphics card; without it, on the processor. The result is the same.
:::
