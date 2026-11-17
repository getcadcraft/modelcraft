---
title: Slice for a resin printer
summary: Slice the print stage's bed for a resin printer, hollow and support the part, look through the layers, save the printer's file, and find your exposure with the exposure test.
section: tasks
order: 108
keywords: resin, resin printing, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, hollow, vent hole, raft, supports, exposure test, exposure ladder, calibration, layers, add-on
---

The resin add-ons slice what is on the print bed into layer pictures for your printer's screen, and save the file your printer reads. They are free, with nothing locked, and are off until you switch them on.

:::note
No file has been loaded on a real printer yet. The files were read back by CadCraft's own readers only, and the supports are new. Check the layers, and run your first print by hand.
:::

## What you'll do

Slice a part for resin, check the layers, save the file and copy it to your printer.

## Steps

1. Open {{ui:Settings}} › {{ui:Add-ons}} and switch on the resin slicer add-on and the add-on for your printer's file format (Elegoo GOO, SL1, Chitubox, or Anycubic). You can also press {{ui:Add resin printing}} on the Print stage card.
2. Put your part on the bed as in [Put things on the print bed](topic:print-stage), then pick {{ui:Resin}} next to **Printing with**.
3. Under **Resin print settings**, pick your **Printer** and your **Resin**. The card shows the screen size in pixels. These are the maker's published sizes, so check yours; you can edit them under Custom.
4. Set **Layer height (mm)**, **Exposure (s)** and **Bottom exposure (s)**. The numbers for each resin are only a starting point.
5. Tick **Hollow it, with a vent hole** if you want a hollow part, and set the **Wall (mm)** and **Hole width (mm)**.
6. Tick **Supports and a raft**, and pick the **Support density**: Light, Medium or Heavy.
7. Pick the **File format**. If the card says none is added yet, press the button that reads Add and the format's name.
8. Press {{ui:Preview layers}} and move the **Layer** slider. Floating pieces are ringed. The line under it gives the layers, time and the resin in mL, grams and cost.
9. Press {{ui:Save the print file}}, check the summary and press {{ui:Save}}. Copy the file to your printer.

## Find your exposure

1. Switch on the exposure test add-on in {{ui:Settings}} › {{ui:Add-ons}}.
2. Press {{ui:Put the test part on the bed}}.
3. Press {{ui:Save the exposure ladder}}. You get one file for each exposure, in a zip.
4. Print each file with the same resin, and keep the exposure with the sharpest thin pillars and open holes.

## Notes

- Slicing runs in the background, so the page stays usable on a big plate.
- Pieces that are not closed solids are left out, and the card says so.
- If your printer refuses a file, the format card has options for what the format leaves open. Change one, save again, and tell us which worked.
- Anycubic versions 517 and 518 are not written.
