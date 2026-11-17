---
title: Put things on the print bed and send them to a printer
summary: Add Library items or your own model to your printer's bed, arrange them, look through the sliced layers, and send the print over USB or the network, or save the G-code, without exporting an STL first.
section: tasks
order: 105
keywords: print stage, 3d print, printer, bed, send to 3d printer, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, library, arrange, fit all, layer preview, infill, supports, filament, pla, petg, add-on, 3d print add-on
---

The {{ui:Print stage}} lays things out on your printer's bed, slices them and sends them to the printer. You do not export a file first. It belongs to the 3D Print add-on, which is on by default.

:::note
Nothing has been printed on a real printer with this yet. The slicer is new: watch the first layers of your first print, and use the layer preview before you send.
:::

## What you'll do

Put a model on the bed, check that it fits, look at the sliced layers, and send it to a printer or save the G-code.

## Steps

1. Click {{ui:Print stage}} in the toolbar. A card opens over the view and a dashed outline shows your bed.
2. Under **Add from the Library**, type a name in the search box, press {{ui:Search}} and press {{ui:Add}} on a result. The item lands on the bed at full size, or scaled down to fit. Anything you have already drawn or imported and can see in the view is on the bed too.
3. Under **On the bed**, check the size of each item. An item marked **Off the bed** needs to be moved. Move, rotate and scale things in the view with the usual tools.
4. Press {{ui:Arrange on the bed}} to spread the items out, or {{ui:Fit all on the bed}} to scale them down until they fit.
5. Under **Your printer**, pick the **Bed** size or one of the printer profiles.
6. Under **Print settings**, pick the **Material**, the **Quality** and the **Infill %**, and tick **Add supports under overhangs** if the shape needs them.
7. Press {{ui:Preview layers}} and move the **Layer** slider to look through the sliced layers. If you change the stage or the settings afterwards, press {{ui:Preview layers}} again.
8. Under **Connection**, pick {{ui:USB cable}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} or {{ui:PrusaLink}}. For USB press {{ui:Connect}}. For a network printer type its **Address** (and the **API key** if it asks), then press {{ui:Test the connection}}.
9. Press {{ui:Send to 3D printer}}. The card asks whether the bed is clear and the right material is loaded, and shows the time, the material and the temperatures. Confirm to send.

You get a message that the printer is starting. {{ui:Stop the print}} turns the heaters, fan and motors off. If you only want a file, press {{ui:Save the G-code instead}}.

## Notes

- USB needs Chrome or Edge on a computer, and the page must stay open until the print ends. Closing it stops the stream.
- A network printer has to allow this site (in Moonraker add it to `cors_domains`; in OctoPrint turn on CORS and copy an API key). Your browser may ask to reach devices on your network.
- Nothing connects or sends without your click.
- The slicer list is under **Slicer**. {{ui:CadCraft basic (included, fastest)}} is built in. Kiri:Moto, PrusaSlicer, OrcaSlicer and the Bambu Lab P2S are add-ons of their own that you switch on from the card or under {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer and OrcaSlicer use your own copy and work from CadCraft Studio on a computer.
- Pieces that are not closed solids are left out, and the card tells you how much of the shape that is.
- For resin printers, see [Slice for a resin printer](topic:resin-printing). To check or repair a model first, see [Supports, wall thickness, hollowing and repair](topic:print-tools).
