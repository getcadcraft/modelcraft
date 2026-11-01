---
title: Split a big model for printing
summary: Cut a model too big for your printer into pieces that fit the bed, with pegs, keys, dovetails, dowel or magnet holes and the joint's number on both faces, and download every piece and an assembly sheet in one zip.
section: tasks
order: 104
keywords: 3d print, split, slant, slanted cut, angled cut, oblique, splitter, cut, too big, bed size, build volume, pieces, parts, connectors, pegs, keys, dovetail, dowel, magnet, clearance, tolerance, part numbers, assembly, exploded view, zip, stl, 3mf, licence, license, usb key, dongle
---

When a model is bigger than your printer's bed, **Split for printing** cuts it into pieces that fit, adds connectors so the pieces line up when you put them together, and engraves the same number on both faces of every joint. Open {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; the dialog's **Print tools** line has {{ui:Split for printing}}. It opens as a card over the view.

It works on what prints: the selection, or everything shown when nothing is selected. What prints must be a closed solid; if the check finds holes, use [Repair](topic:print-tools#repair) first.

It runs in ModelCraft, on your computer: no licence server, no USB key, nothing uploaded.

## How to cut

- **Fit the bed, fewest pieces**: give the bed's width, depth and height (they start from {{ui:Settings}} › ModelCraft › 3D printer). The card says how many pieces it takes and how big each is; it cuts the model into equal pieces, as few as fit. A piece may lie on its side in the files if that is what makes it fit. The connectors that stand out of a piece count toward its size.
- **At places I give**: pick the axis to cut across and type where, in millimetres from the low end of the model, with commas between (`100, 200` makes three pieces).
  **Slant** turns the cuts by up to 60° about one of the two other axes (a cut across Z slanted about X, for example): each slanting cut runs through the model's middle line at its place, gives the pieces more gluing area and hides the joint better on a sloping surface. Connectors stand square to the cut.

The cut planes are drawn round the model as dashed lines while the card is open.

## Connectors

Each place where two pieces touch gets connectors, placed by themselves where there is the most room: at least the **least wall** plus the **clearance** plus their own size away from the outside, and far enough from every other cut that two holes never meet. On a long face two connectors are spread along it, so the pieces can't turn.

- **Round pegs**: a peg on one piece (chamfered at the tip), a hole on the other.
- **Square keys**: the same, square, so a piece can only go on one way round.
- **Dovetails**: a tongue that slides into a slot from the side. Where one end of the slot would meet another cut, the dovetail stops short and slides in from the open end. Dovetails suit cuts in one direction (a row of slices); in a grid, use pegs or dowels.
- **Dowel holes**: a hole on each side; the pins are printed too (in the zip).
- **Magnet pockets**: a pocket on each side for a round magnet of the diameter and thickness you give. Check the poles before gluing them in.
- **None (glue)**.

The **clearance** is the gap on each side between a peg and its hole (0.2 mm to start). It is true to the number you give: round holes are made a little larger so their flat sides, not their corners, keep that gap. Raise it if your printer's parts come out tight.

When a joint has no room for a connector (a thin wall, a small touching area), the card says so: glue that one.

## Part numbers

With **Engrave the joint numbers on both faces** on, each joint gets the number of its two pieces, such as `3-4`, engraved 0.6 mm deep on both faces, reading the right way round on each. The numbers start 5 mm high and get smaller to fit, down to 2.5 mm; a joint with no room for its number is listed. Pieces are numbered from the bottom layer up.

## Preview, download, split the model

1. {{ui:Preview}} cuts the model and says how many pieces, joints and connectors there are, whether every piece passes the 3D-print check and fits the bed, and lists each piece's size. A ring marks each connector and number in the view.
2. {{ui:Download the pieces (.zip)}} saves one zip: a file per piece (STL or 3MF, as you choose under **Files**), each standing on the bed; the dowel pins; and the **assembly sheet** — a picture of the pieces pulled apart with their numbers (`assembly.svg` and `assembly.png`) and a list of the pieces and joints (`assembly.txt`).
3. {{ui:Split the model}} puts the pieces in the model in place of the selected groups or components, named as on the assembly sheet, in one step: {{ui:Undo}} puts the original back. It needs the groups or components to split selected; the download works on whatever prints.

## Move the connectors yourself

After a preview, **Connectors by hand** lets you correct where the connectors go:

- {{ui:Move one}}: click a red ring in the view (it turns green), then click where it should go on the cut.
- {{ui:Add one}}: click in the view where a connector should go. It goes on the cut plane your click reaches, between the two pieces there.
- {{ui:Remove one}}: click a red ring to take that connector away.

Each change is checked again like the automatic ones: a spot too near the outline, another cut or another connector is not made, and the card says so. {{ui:Automatic again}} forgets your places. They are kept while the model, the selection and the cuts stay as they are.

A preview stays until the model, the selection or a setting changes; then the card asks you to preview again.

:::note
Every piece is checked as the 3D-print check would check it before you download. Your slicer still decides how each piece prints: look at each one there, and print one joint first to see how your printer handles the clearance.
:::
