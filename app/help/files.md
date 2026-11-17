---
title: Open, save, import and export
summary: The ModelCraft file, what you can bring in and send out, where files go, and what changes offline and between browsers.
section: start
order: 30
keywords: open, save, import, export, file, 3dm, skp, recover, autosave, recent, desktop, open in 3d, handoff, download, modelcraft file, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, offline, save as
---

ModelCraft reads and writes files on your computer. Nothing is uploaded: a file you open is read inside your browser, and a file you save is a download. See [Where your files go](common:your-files).

## Formats at a glance

| Format | Open | Import | Export | What it is for |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | yes | no | {{ui:Save}} | Your working file. Keeps everything. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | yes | yes | {{ui:Save as}}, {{ui:Export}} | Rendering and scene-assembly programs. ModelCraft's own USD keeps everything. See [Save, open and export USD](topic:usd). |
| SketchUp (`.skp`) | no | yes | no | Bringing in models from SketchUp. Keeps groups, components, colors, textures on faces, tags and soft edges. See [Bring in an SKP model](topic:import-sketchup-files). |
| Collada (`.dae`) | no | yes | yes | Trading models with other 3D modelers. Keeps groups, components and colors. |
| OBJ (`.obj`) | no | yes | yes | Rendering and visualization programs. |
| glTF (`.glb`, `.gltf`) | no | yes | `.glb` only | Web viewers, game engines, AR. |
| STL (`.stl`) | no | yes | yes | 3D printing (in millimeters). |
| PLY (`.ply`) | no | yes | yes | Meshes with colors: scans, color printing. |
| FBX (`.fbx`) | no | yes | no | Models from animation and game programs (FBX 2011 and newer). |
| Alembic (`.abc`) | no | yes | no | Geometry caches, at their first sample. |
| STEP (`.step`, `.stp`) | no | yes | no | Parts from part modelers and suppliers, as closed meshes at their true size. See [File formats](topic:formats). |
| `.3dm` | no | yes | no | NURBS models: polysurfaces, meshes, curves, blocks and layers, as meshes, edges, components and tags. See [Bring in a .3dm model](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | yes | 3D printing, with colors (in millimeters). From {{ui:Check for 3D printing (STL or 3MF)…}}: see [Get a model ready for 3D printing](topic:print-3d). |
| IFC (`.ifc`) | no | no | yes | BIM programs, and BimCraft. |
| DWG (`.dwg`) | no | yes | yes | A site plan or floor plan to model on; sending the model to a CAD program. |
| DXF (`.dxf`) | no | yes | yes | The same, for any CAD program. |

[File formats in detail](topic:formats) lists exactly what each format keeps and leaves out.

## The ModelCraft file

A `.modelcraft` file keeps the whole model: geometry, groups, components, guides, scenes, the units, and the camera and style you were using when you saved. It does not keep the undo history.

### Open a model

1. Click {{ui:Open}} in the {{ui:File}} group, or press {{key:Mod+O}}.
2. If the model on screen has unsaved changes, ModelCraft asks: "This model has changes that are not saved. Save a copy first?" Choose {{ui:Save a copy}}, {{ui:Discard changes}} or {{ui:Cancel}}.
3. Pick the `.modelcraft` file.

The model opens in the units it was saved in, with the camera it was saved with. You can also drop a `.modelcraft` file onto the 3D view, or click one in the list of recent files on the start card (browsers that can reopen a file, and the desktop app).

:::desktop
In the desktop app, double-clicking a `.modelcraft` file opens it in ModelCraft, and so does **Open with** on a Collada, OBJ, glTF, DWG or DXF file (it is imported into a new model).
:::

### Save a model

Click {{ui:Save}} or press {{key:Mod+S}}. The browser downloads `<name>.modelcraft`, where the name is the file you opened, or "Untitled" for a new model.

:::desktop
In the desktop app, {{ui:Save}} writes the file you opened in place. A new model asks where to save it.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) saves a copy as a `.modelcraft` file or as [USD](topic:usd); where the browser can, it asks for the name and the place. Otherwise rename the downloaded file: the next save after you open the renamed file uses the new name.
- Each save is a new download. Depending on the browser's settings, it goes straight to your downloads folder or asks where to save. If a file with that name is already there, most browsers add a number, such as `Untitled (1).modelcraft`.

:::chromium
To choose the folder every time, open the browser's settings, search for "downloads" and turn on "Ask where to save each file before downloading".
:::

:::firefox
To choose the folder every time, open **Settings**, then **General**, and under "Downloads" choose "Always ask you where to save files".
:::

:::safari
To change where downloads go, open **Safari**, then **Settings**, then **General**, and set "File download location".
:::

### Start a new model

Click {{ui:New}}. If there are unsaved changes, ModelCraft asks first. A new model starts empty, in your locale's unit (feet and inches in the United States, millimeters elsewhere), with no scenes.

### If the browser closes before you save

ModelCraft keeps a copy of unsaved work in your browser a couple of seconds after each change. The copy is written in the background, so a big model does not hold you up while it is kept. If the tab or the browser closes before you save, the next time you open ModelCraft it asks "Recover your work?". Recovering opens the model as it was, not yet saved to a file: save it to keep it. See [Recover your work](common:recover).

### From CadCraft: Open in ModelCraft

In the CadCraft drafting app, **View**, then **More**, then **Open in ModelCraft** hands the open drawing to ModelCraft in a new tab, as a DWG. It arrives the way an imported DWG does: lines on the ground, in a group, ready to model on. Nothing is uploaded; the file passes through your browser's own storage.

## Import

Importing adds a file to the model you have open; it does not replace it.

1. Click {{ui:Import}} in the {{ui:File}} group, or drop the file on the 3D view.
2. Pick a SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG or DXF file.

   The file arrives as **one group**, selected, and the view zooms to show it. The status bar says what came in, and lists anything it could not import, such as "Not imported: 2 texture".

3. To work on its geometry directly, double-click the group to edit inside it, or click {{ui:Explode}}.

Some things to know:

- **Size and up direction:** Collada files say their unit and which axis is up, and ModelCraft converts them. glTF is always in meters. OBJ files carry no unit: ModelCraft reads them as meters, with Y up. If an OBJ comes in 1000 times too big or too small, use [Scale](topic:rotate-scale) with a factor such as `0.001` or `1000`.
- **DWG and DXF** come in as lines (edges) on the ground, not as faces. If the drawing does not say its unit, a dialog titled "Drawing units" asks what one drawing unit is. See [Model on a site plan](topic:site-plan).
- **Limits:** files over 300 MB are refused for import, and over 200 MB for opening. Files with more than 2 million vertices or faces are refused as too big. An OBJ over 64 MB is refused before it is read. Text files (Collada, OBJ, ASCII STL, USD text) are read a piece at a time, about 4 MB, so no single block of text holds a whole file; a 16 MB OBJ used about 0.5 GB of memory while it opened in our test.

## Export

1. Click {{ui:Export}} in the {{ui:File}} group.
2. Choose a format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} or {{ui:DXF for CAD (.dxf, R12)}}.

The browser downloads the file, named like the model. The whole model is exported, not just the selection. glTF, Collada and OBJ files are written in the background, so ModelCraft keeps working while a big model exports; the download starts when the file is ready. An empty model is not exported: "The model is empty: draw something first." See [Export a model for other programs](topic:export-model).

## Online and offline

Everything in ModelCraft runs on your computer, so modeling, opening, saving, importing and exporting all work without a connection once the app is loaded.

To open ModelCraft with no connection at all, save it for offline use while you are online:

1. Click {{ui:Save for offline}} in the app bar at the top.
2. The button counts up ("Saving 40 of 212") while it saves. ModelCraft saves its own files (its DWG reader among them), this help and the 3D library, so it can take a while.
3. When the button reads {{ui:Offline ready}}, ModelCraft opens from the same address with no connection, and DWG import works offline too.

Click {{ui:Offline ready}} later for {{ui:Save again (get the newest version)}} or {{ui:Remove the offline copy}}. If the button reads {{ui:Could not save}}, some files did not download: check the connection and click it to try again. {{ui:Offline not available}} means this browser window cannot keep a copy (private windows and some managed computers). See [Working offline](common:offline).

Cloud saving is not available yet. Every model lives where you save it.

:::offline
You are offline. You can keep modeling and saving. Unless the app bar shows {{ui:Offline ready}}, don't reload this tab until you are online again.
:::

## Desktop app

:::desktop
You are using ModelCraft in CadCraft Studio, the desktop app with all eight apps. Files open and save where you choose.
:::

:::web
ModelCraft runs in the browser on Mac, Windows and Linux, and in CadCraft Studio, the desktop app with all eight apps in one install, from getcadcraft.com/download.
:::
