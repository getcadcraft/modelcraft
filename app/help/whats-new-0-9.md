---
title: What's new in 0.9 (earlier)
summary: Print stage with our own slicer and sending to USB, Klipper, OctoPrint and PrusaLink, resin slicing and file add-ons, material flow, digital twin and factory floor add-ons, NURBS fillets, thickening and scan fitting, AR on site and ten arc methods.
section: start
order: 6
keywords: whats new 0.9, earlier release, whats new, what's new, release notes, changelog, 0.9, print stage, 3d print, send to 3d printer, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resin, resin printing, goo, sl1, ctb, anycubic, exposure test, material flow, digital twin, factory floor, plc, conveyor, nurbs, fillet, thicken, scan fit, ar, on site, arc methods, units, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, render engine, engine, open in, usd, gltf, unreal, add-on engine, nurbs, surfaces, loft, sweep, continuity, g0, g1, g2, zebra, step, iges, say the scene, scene, weather, time of day, season, assistant, material from a photo, photo, sketch photo, furnish, furnish a room, slant, slanted cut, split, print check, problems, property grid, lamps, languages, input devices, toolbar rows, dwg, live
---

This is what changed in ModelCraft 0.9, compared with 0.8.1. ModelCraft now reaches the printer and the plant floor: you can put things on a print bed and send them without exporting, slice for filament or resin, and lay out a material-handling line. This is CadCraft Studio 0.9 and its eight apps; most of the new features below are add-ons.

## New

### 3D printing

- **Print stage.** Click {{ui:Print stage}} in the toolbar. Add Library items to the printer's bed, arrange them, look through the sliced layers and press {{ui:Send to 3D printer}}, with no STL to export. It belongs to the 3D Print add-on, which is on by default and can be removed like any add-on. See [Put things on the print bed and send them to a printer](topic:print-stage).
- **Our own filament slicer.** {{ui:CadCraft basic (included, fastest)}} is the slicer in the card's **Slicer** list: walls, skins, infill, supports and a skirt, on a worker so the page stays usable. {{ui:Preview layers}} with the **Layer** slider shows the layers before you send. Printer profiles such as the Ender-3 and Prusa MK4 styles carry their own start G-code.
- **Sending.** Over USB (Chrome or Edge on a computer, with the page kept open), or to Klipper (Moonraker), OctoPrint or PrusaLink on your network. Nothing connects or sends without a click, and sending asks first.
- **Other slicers.** Kiri:Moto, PrusaSlicer and OrcaSlicer are add-ons of their own, off by default; add them from the card or from {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer and OrcaSlicer use your own installed copy from CadCraft Studio. The Bambu Lab printers add-on slices with your OrcaSlicer and its P2S presets and needs Studio on a computer.
- **Resin printing.** The resin add-ons (off by default) make layer pictures for your printer's screen, with hollowing and vent holes, a raft and supports, a layer preview, and time, resin and cost. File-format add-ons write Elegoo GOO, SL1, Chitubox (CBDDLP and CTB 2 to 5) and Anycubic (PWMX and PWS). A resin exposure test makes a ladder of five exposures. See [Slice for a resin printer](topic:resin-printing).
- **Unchanged.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, the print tools and Split for printing work as in 0.8. See [Get a model ready for 3D printing](topic:print-3d).

### Material flow, Digital twin and Factory floor

These three are add-ons, off until you switch them on in {{ui:Settings}} › {{ui:Add-ons}}, and each has its own help once it is on.

- **Material flow.** A panel named Material flow lays out conveyors, stations, buffers and AGV paths in the 3D view, runs a seeded simulation, plays it back, and shows throughput, lead times and queues, with results saved as CSV. Orders can come from a CSV file. Robot cells can be checked and exported. The PLC link has a soft mode and a real mode over Modbus TCP, which works only in CadCraft Studio.
- **Digital twin.** Reads the Material flow layout and runs a soft PLC on it, with faults you can force, stock tests, a layout comparison and a bill of materials.
- **Factory floor.** Turns the stations into machines and cells, reads them live or from a simulator, and keeps a job queue and a simple OEE. It reads only: this build cannot write to a machine or PLC.

### Surfaces, models and drawing

- **Fillets, thickening and booleans on NURBS.** The {{ui:Surfaces}} panel has {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} and Union, Subtract and Intersect, each with its measured deviation. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Fit surfaces to a scan.** Select a scanned mesh and use {{ui:Fit surfaces to the scan}} in the **Scan** group, then {{ui:Stitch the surfaces to a solid}}. It is a first fit, not a full reverse-engineering package.
- **A live link from a .3dm modeller.** One way, from Rhino 8 or Grasshopper, and it needs CadCraft Studio on the same computer. See [Keep a .3dm model live](topic:live-3dm-link).
- **See the model on site.** {{ui:View on site (AR, phone)}} in the {{ui:Views}} menu works on an Android phone with Chrome. See [See the model on site with an Android phone (AR)](topic:ar-on-site).
- **Arc methods.** The {{ui:Arc methods}} drop-down offers ten ways to draw an arc, including {{ui:3-Point}} and {{ui:Start, Center, End}}.
- **More units.** Weights (kg, lb, t, ton) and temperatures (degrees C, F, K and R) are understood where you type values with units.

## In every app

- **Tooltips.** Hover text on buttons and cut-off labels is a Bootstrap tooltip.
- **Closable start tip.** The tip card on an empty drawing area has a small close x. It stays closed, and the command palette can show it again.
- **Scrolling tab strips.** A panel's tab strip that does not fit scrolls instead of being cut off.
- **Tab titles.** With a document open, the browser tab starts with the document's name, then ModelCraft and CadCraft. A dot comes first while it is unsaved.
- **Layout.** {{ui:Settings}} › {{ui:General}} › Layout holds the layouts in a drop-down, with a choice to use a layout for this app alone and a button to reset the layout.
- **Languages.** The language list in Settings follows the language files the build contains. Other languages than English are machine drafts.
- **Live and Library.** Live TeamWork shows live cursors and names, and Library collections give each app a default collection.

## Fixed

- {{ui:Play}} turns into {{ui:Pause}} while an animation plays, and {{key:Space}} plays and pauses while the timeline is open.
- The still render falls back to WebGL when the graphics card cannot start the path tracer. The live render view may still show the error; this was not checked on a Windows machine with that driver.
- Material flow real mode connects again after a link ended on PLC exception answers.

## Honest limits

- Nothing has been printed on a real printer: not filament, not resin, not through Bambu Connect. Resin files were read back by CadCraft's own readers only.
- The digital twin and Factory floor were tested against simulators and known answers only, with no real PLC, line or protocol. They are checking aids, not a safety validation. Physics covers boxes only, up to eight loads.
- The Rhino and Grasshopper link has never run in the real programs.
- Non-English languages are machine drafts.

## Earlier: 0.8 and 0.8.1

This is what changed in ModelCraft 0.8 (2026-11-01) and 0.8.1 (2026-11-02), compared with 0.7. The {{ui:Render a picture…}} dialog can now send the scene to another program, the Surfaces panel makes smooth freeform surfaces, and an assistant you connect can set a whole scene from one sentence.

### New

**Rendering**

- **An Engine choice.** {{ui:Render a picture…}} has an **Engine** list above Mode. Our own two engines, Fast and the Path tracer, are the default and work everywhere. Other entries save the scene as a package (the model as a USD file, plus a settings file with the exact material values, the lamps that are on, the sun, the sky, the exposure and the camera) to take to another program. A picture drawn by another program says which program and version made it. See [Choose which program draws the picture](topic:render-engines).
- **Open in another program.** The Engine list can save the scene as a USD file, a glTF file (`.glb`) or an Unreal project folder (`.zip`), in the browser and in CadCraft Studio. In Studio it can also start usdview or the computer's own program for the file. See [Open the scene in another program](topic:render-open-in).
- **Send to a game engine from Studio.** Studio writes the scene into an Unreal Engine project and keeps it in step on every send, one way only. Your own edits live in a layer CadCraft never writes. See [Send the scene to a game engine](topic:render-unreal).
- **Engines from add-ons.** An add-on can add an engine to the list. One written in JavaScript draws in the browser and in Studio; one that runs a program needs your yes in Studio. See [Draw the picture with another program](topic:render-other-program) and [Add a render engine with an add-on](topic:render-engine-addons).
- **Say the scene.** Tell your connected assistant "dusk, light rain, autumn trees, people on the plaza" and ModelCraft sets it up in one step: the sun moves to the date and time so the shadows follow, the sky changes, wet surfaces appear, and trees and people are placed as real objects on tags you can hide, move or delete. Time of day, date or season, and weather (clear, overcast, fog, light rain, rain, storm) also work on their own, and a later request changes the same scene. Fog shows in the high-quality picture on the graphics card; the other engines show the sky, the light and the wet surfaces. Rain is not drawn as falling streaks.

**Materials**

- **A material from one photo.** Give ModelCraft a photo of a surface (a wall, a floor, stone) and it makes a tiling material: the lighting across the photo is flattened, the edges are made to join, and a color map, a roughness map and a normal map are worked out from the picture. It is plain image processing on your own picture, with no trained model. Roughness is an estimate. A plain, square, straight-on photo gives the best tile; a strong pattern such as bricks can show a soft ghost where the join is blended.

**Surfaces**

- **Freeform surfaces.** The {{ui:Surfaces}} panel makes NURBS curves and untrimmed surfaces: curves through points, loft, ruled, extrude, revolve, sweeps along one or two rails, surfaces from a curve network, patches from four edges, match and blend. Every shared edge is measured as G0, G1 or G2 (gap, angle, curvature jump) on the exact surfaces, and an edge worse than you asked for appears in the Problems panel with a **Match** fix. Zebra stripes and curvature colors are drawn from the exact surfaces. STEP and IGES files go out and come in. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

**Site and rooms**

- **A sketch photo onto the ground.** {{ui:File}} › {{ui:Import a sketch photo…}} turns a phone photo of a hand sketch into edges on the ground at the scale you say: one group, with a tag for each pen color. The paper is found and straightened on your computer and nothing is sent anywhere. See [Model on a site plan](topic:site-plan).
- **Furnish a room.** Select a floor and use {{ui:Organize}} › {{ui:Furnish a room…}}. Bedroom, living room, dining room, kitchen, bathroom or office furniture is placed by rules, against the walls and clear of doors and windows, in one group you can take away in one step. It is a default layout for you to review, not a design. See [Starter library](topic:starter).

**3D printing**

- **Slanted cuts.** Split for printing can slant its cuts by up to 60 degrees, which gives the pieces more gluing area. Connectors stand square to the cut. See [Split a model for printing](topic:print-split).
- **The print check in Problems.** The findings of the 3D print check show in the Problems panel with markers on the model, and Repair fixes them from there. See [Supports, wall thickness, hollowing and repair](topic:print-tools).

**In every app**

- **Languages.** Help and apps come in 54 languages. Ten are new: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili and Uzbek. Languages other than English are machine drafts until a native speaker has read them, and help topics may still be in English.
- **Input devices.** A trackpad, a pen, a 3D mouse, a game controller and MIDI controls can drive the apps, for all of them or for one.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › Toolbar rows sets Wrap (as before), 2 rows or 1 row. A bar that does not fit scrolls sideways instead of taking space from the drawing. Wrap stays the default.
- **Property grid.** ModelCraft's lamp fields use the shared grid: collapsible categories, label and value columns, and Compact density. Typed arithmetic such as `2*450` keeps working.
- **Problems.** The Problems panel (the warning button in the app bar) is shared by all the apps. In ModelCraft it holds the print check and the surface continuity warnings.
- **Live.** A Live TeamWork session shows who is where. See [Model together with Live TeamWork](topic:work-live).
- **Add-ons.** Add-ons can add render engines, as above.
- **Connect your AI.** The tool contract and the checks of the eight apps pass, with 454 tools in all. One-click connection inside Studio, a hosted connector for browser assistants, your own key inside Studio and a published package are not promised yet. The apps contain no AI of their own. See [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).

### Fixed in 0.8.1

- **DWG classes section.** A DWG file's classes section was read as the wrong type, which could break the file on import. It is read correctly now, in ModelCraft and in the other apps that read DWG.
- **Tablets in portrait.** Spare grid height goes to the canvas, and the sheet layout starts at 760 pixels wide or less. ModelCraft's style sheet has the change too.
- **Language in Studio.** CadCraft Studio and the packed editions can switch language while running; before, they were English only. This has not been tested on every platform yet: tell us if the language does not change.

### Not in this version yet

- **Not code-signed.** Windows may show SmartScreen: choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, right-click and choose {{ui:Open}}. Store builds are on hold, and the iPad and iPhone build was not rebuilt for 0.8.1.
- Another program drawing the picture without a render-engine add-on, panorama or stereo cameras and a sky picture through another program, and the plug-in that opens the Unreal stage are not there yet. The files are written; the plug-in is not released and has not been run in Unreal.
- Freeform surfaces: G3 and class A are not measured or claimed, and trimming and solids come later.
- Pictures from other programs are not pixel for pixel like ours: only the camera, sun, lamps and exposure match.
- The 0.8.1 fix for the language switch in Studio is not tested on every platform.

Everything else is in [Not built yet](topic:not-built-yet). For the previous release, see [What's new in 0.7](topic:whats-new-0-7).
