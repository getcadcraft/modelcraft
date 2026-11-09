---
title: What's new in 0.8 and 0.8.1
summary: A render Engine choice with files for other programs, freeform NURBS surfaces with measured continuity, a scene you describe to your assistant, a material made from one photo, a sketch photo onto the ground, furnished rooms, slanted cuts for 3D printing, and the print check in the Problems panel.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, render engine, engine, open in, usd, gltf, unreal, add-on engine, nurbs, surfaces, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, say the scene, scene, weather, time of day, season, assistant, material from a photo, photo, sketch photo, furnish, furnish a room, slant, slanted cut, split, print check, problems, property grid, lamps, languages, input devices, toolbar rows, dwg, live
---

This is what changed in ModelCraft 0.8 (2026-11-01) and 0.8.1 (2026-11-02), compared with 0.7. The {{ui:Render a picture…}} dialog can now send the scene to another program, the Surfaces panel makes smooth freeform surfaces, and an assistant you connect can set a whole scene from one sentence.

## New

### Rendering

- **An Engine choice.** {{ui:Render a picture…}} has an **Engine** list above Mode. Our own two engines, Fast and the Path tracer, are the default and work everywhere. Other entries save the scene as a package (the model as a USD file, plus a settings file with the exact material values, the lamps that are on, the sun, the sky, the exposure and the camera) to take to another program. A picture drawn by another program says which program and version made it. See [Choose which program draws the picture](topic:render-engines).
- **Open in another program.** The Engine list can save the scene as a USD file, a glTF file (`.glb`) or an Unreal project folder (`.zip`), in the browser and in CadCraft Studio. In Studio it can also start usdview or the computer's own program for the file. See [Open the scene in another program](topic:render-open-in).
- **Send to a game engine from Studio.** Studio writes the scene into an Unreal Engine project and keeps it in step on every send, one way only. Your own edits live in a layer CadCraft never writes. See [Send the scene to a game engine](topic:render-unreal).
- **Engines from add-ons.** An add-on can add an engine to the list. One written in JavaScript draws in the browser and in Studio; one that runs a program needs your yes in Studio. See [Draw the picture with another program](topic:render-other-program) and [Add a render engine with an add-on](topic:render-engine-addons).
- **Say the scene.** Tell your connected assistant "dusk, light rain, autumn trees, people on the plaza" and ModelCraft sets it up in one step: the sun moves to the date and time so the shadows follow, the sky changes, wet surfaces appear, and trees and people are placed as real objects on tags you can hide, move or delete. Time of day, date or season, and weather (clear, overcast, fog, light rain, rain, storm) also work on their own, and a later request changes the same scene. Fog shows in the high-quality picture on the graphics card; the other engines show the sky, the light and the wet surfaces. Rain is not drawn as falling streaks.

### Materials

- **A material from one photo.** Give ModelCraft a photo of a surface (a wall, a floor, stone) and it makes a tiling material: the lighting across the photo is flattened, the edges are made to join, and a color map, a roughness map and a normal map are worked out from the picture. It is plain image processing on your own picture, with no trained model. Roughness is an estimate. A plain, square, straight-on photo gives the best tile; a strong pattern such as bricks can show a soft ghost where the join is blended.

### Surfaces

- **Freeform surfaces.** The {{ui:Surfaces}} panel makes NURBS curves and untrimmed surfaces: curves through points, loft, ruled, extrude, revolve, sweeps along one or two rails, surfaces from a curve network, patches from four edges, match and blend. Every shared edge is measured as G0, G1 or G2 (gap, angle, curvature jump) on the exact surfaces, and an edge worse than you asked for appears in the Problems panel with a **Match** fix. Zebra stripes and curvature colors are drawn from the exact surfaces. STEP and IGES files go out and come in. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

### Site and rooms

- **A sketch photo onto the ground.** {{ui:File}} › {{ui:Import a sketch photo…}} turns a phone photo of a hand sketch into edges on the ground at the scale you say: one group, with a tag for each pen color. The paper is found and straightened on your computer and nothing is sent anywhere. See [Model on a site plan](topic:site-plan).
- **Furnish a room.** Select a floor and use {{ui:Organize}} › {{ui:Furnish a room…}}. Bedroom, living room, dining room, kitchen, bathroom or office furniture is placed by rules, against the walls and clear of doors and windows, in one group you can take away in one step. It is a default layout for you to review, not a design. See [Starter library](topic:starter).

### 3D printing

- **Slanted cuts.** Split for printing can slant its cuts by up to 60 degrees, which gives the pieces more gluing area. Connectors stand square to the cut. See [Split a model for printing](topic:print-split).
- **The print check in Problems.** The findings of the 3D print check show in the Problems panel with markers on the model, and Repair fixes them from there. See [Supports, wall thickness, hollowing and repair](topic:print-tools).

### In every app

- **Languages.** Help and apps come in 54 languages. Ten are new: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili and Uzbek. Languages other than English are machine drafts until a native speaker has read them, and help topics may still be in English.
- **Input devices.** A trackpad, a pen, a 3D mouse, a game controller and MIDI controls can drive the apps, for all of them or for one.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › Toolbar rows sets Wrap (as before), 2 rows or 1 row. A bar that does not fit scrolls sideways instead of taking space from the drawing. Wrap stays the default.
- **Property grid.** ModelCraft's lamp fields use the shared grid: collapsible categories, label and value columns, and Compact density. Typed arithmetic such as `2*450` keeps working.
- **Problems.** The Problems panel (the warning button in the app bar) is shared by all the apps. In ModelCraft it holds the print check and the surface continuity warnings.
- **Live.** A Live TeamWork session shows who is where. See [Model together with Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons can add render engines, as above.
- **Connect your AI.** The tool contract and the checks of the eight apps pass, with 454 tools in all. One-click connection inside Studio, a hosted connector for browser assistants, your own key inside Studio and a published package are not promised yet. The apps contain no AI of their own. See [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).

## Fixed in 0.8.1

- **DWG classes section.** A DWG file's classes section was read as the wrong type, which could break the file on import. It is read correctly now, in ModelCraft and in the other apps that read DWG.
- **Tablets in portrait.** Spare grid height goes to the canvas, and the sheet layout starts at 760 pixels wide or less. ModelCraft's style sheet has the change too.
- **Language in Studio.** CadCraft Studio and the packed editions can switch language while running; before, they were English only. This has not been tested on every platform yet: tell us if the language does not change.

## Not in this version yet

- **Not code-signed.** Windows may show SmartScreen: choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, right-click and choose {{ui:Open}}. Store builds are on hold, and the iPad and iPhone build was not rebuilt for 0.8.1.
- Another program drawing the picture without a render-engine add-on, panorama or stereo cameras and a sky picture through another program, and the plug-in that opens the Unreal stage are not there yet. The files are written; the plug-in is not released and has not been run in Unreal.
- Freeform surfaces: G3 and class A are not measured or claimed, and trimming and solids come later.
- Pictures from other programs are not pixel for pixel like ours: only the camera, sun, lamps and exposure match.
- The 0.8.1 fix for the language switch in Studio is not tested on every platform.

Everything else is in [Not built yet](topic:not-built-yet). For the previous release, see [What's new in 0.7](topic:whats-new-0-7).
