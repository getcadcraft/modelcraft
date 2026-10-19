---
title: Get a model ready for 3D printing
summary: Check that a model is closed and faces the right way, see its size, base and overhangs, fix what is wrong, and download it as STL or 3MF for your slicer.
section: tasks
order: 102
keywords: 3d print, 3d printing, printer, print, slicer, stl, 3mf, watertight, closed, manifold, solid, holes, inside out, overhang, supports, base, bed, millimeters, export, fix, repair, hollow, bed size, beginner
---

A 3D printer's slicer needs a closed shape: no holes, every face pointing out, nothing passing through itself. {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} looks for exactly that before you download the file.

## Check and download

1. Select what you want to print: one or more groups or components, or some faces. With nothing selected, everything shown prints.
2. Click {{ui:Export}} in the {{ui:File}} group, then {{ui:Check for 3D printing (STL or 3MF)…}}.

   The dialog starts with one line: "Ready to print", how many things to fix before printing, or how many to look at first. Each problem has three parts: what is wrong, why it matters, and what to do. Then come the size in millimeters, the volume, the number of triangles and your printer bed.

3. If the dialog lists things to fix, click {{ui:Fix what can be fixed}} (see below). The check runs again by itself.
4. Click {{ui:Download 3MF}} or {{ui:Download STL}}.

What prints is what you see: hidden faces, hidden groups and components, and anything on a hidden tag are left out. Sizes are always in millimeters, the unit slicers expect, whatever unit the model shows.

:::tip
Prefer 3MF when your slicer reads it: it keeps the colors and the units. STL has neither, and slicers assume millimeters.
:::

## What the check looks for

These stop a print or spoil it, and make the dialog say "Not ready to print":

| Problem | What it means | What to do |
|---|---|---|
| A face on one side only | A hole: an edge has a face on one side and nothing on the other | Draw the missing face (a line across the gap often closes it), or use {{ui:Fix}} (below) |
| Shared by three or more faces | Faces meet in a fin or a wall inside a solid | Erase the inner face |
| Faces facing opposite ways | Some faces point in, some out | Select the faces that face in and click {{ui:Reverse face}} in {{ui:Entity info}} |
| Inside out | A whole closed part points inward | Select its faces and reverse them |
| Passes through itself | One part folds through itself | {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}, then erase what is inside. See [Intersect faces](topic:intersect) |

These are warnings: the model prints, but have a look first.

- **Separate parts overlap**, or **meet face to face**: slicers usually merge them into one. For a cleaner file, join them with {{ui:Solids}} › {{ui:Union}}. See [Solid tools](topic:solids).
- **Nothing lies flat at the bottom**: turn the model so a face rests on the bed, or the slicer will add supports or a raft.
- **Leans out more than 45° from upright**: those faces need support. The dialog says how much of the surface does.
- **Under 1 mm across**: probably modeled in the wrong unit. Check the unit in the status bar.

A hollow part (a closed shell inside another) is fine: its faces point into the hollow, and its volume is taken away.

## Fix the problems

Under **Where the problems are**, the dialog names each group or component that has something wrong (loose faces not in a group are listed as "Faces not in a group"), with what is wrong in it. A component placed several times is listed once: fixing it fixes every copy.

- {{ui:Show}} opens that group and selects the edges and faces that are wrong, so they show highlighted.
- {{ui:Fix what can be fixed}} fixes all of them at once: it closes holes whose edges lie flat, removes faces inside the shape and stray edges, and turns faces the right way out. It is one step: {{key:Mod+Z}} undoes it. The check then runs again and shows what is left.

What it can't fix (a hole whose edges don't lie flat, a part passing through itself) stays in the list with what to do by hand. You can also fix one group at a time: select it, then use {{ui:Show problems}} and {{ui:Fix}} in {{ui:Entity info}}. See [Solid tools](topic:solids).

## A hollow part

To make a part hollow, draw the hollow as a closed group inside the part, not touching it, and reverse all its faces so they face into the hollow. The check counts it as a hollow and takes its volume away; it is not listed as something to fix.

## Your printer's bed

Choose your printer's bed size in {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:3D printer bed}}. The check then warns when the model is larger than the bed, turned either way on it. See [Settings](topic:settings#3d-printer-bed).

## Not checked

The check does not look at wall thickness or tiny details your nozzle cannot draw, and it does not show where supports go. Your slicer's preview shows those. See [Not built yet](topic:not-built-yet#3d-printing).
