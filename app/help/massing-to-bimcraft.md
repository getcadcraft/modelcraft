---
title: Send massing to BimCraft
summary: Hand push/pull massing to BimCraft as massing options, with floors, footprint, gross floor area and volume worked out from each solid.
section: tasks
order: 131
keywords: massing, mass, concept, options, bimcraft, ifc, bim, push pull, floors, storeys, gross floor area, footprint, volume, send, hand over, building mass, stage 2
---

## What you'll do

Turn the blocks you modelled with push/pull into massing options BimCraft understands, so the concept carries on as a building model.

## Before you start

Make each mass a **group** or **component** and name it. Each one becomes one option. Loose geometry is not sent.

## Send it

1. Select the groups to send. With nothing selected, every top-level group and component goes.
2. Choose {{ui:Export}}, then {{ui:Massing to BimCraft…}}.
3. Type the {{ui:Name of the option set}} and the {{ui:Floor height}}.
4. Check the list: each option's floors, footprint, gross floor area and volume.
5. Choose **Send to BimCraft** to open BimCraft in a new tab with the options, or {{ui:Save as IFC}} to download the file and open it there yourself.

In BimCraft the options are listed under "Massing options in the model", where one can be made the current option and developed into walls and floors.

## How a solid becomes a mass

- **Floors** are the solid's height divided by the floor height, rounded, and at least one. The floors then share the solid's height equally, so a 10 m block at 3 m floors has 3 floors of 3.33 m.
- **A floor's area** is the area of the solid's own horizontal section at that floor's level. A block that steps back has smaller upper floors, and the gross floor area is their sum.
- **The footprint** is the outline of the section just above the solid's base.
- **The volume** is the solid's own.

In the IFC file each option is a building element proxy (the footprint raised to the solid's height) with one space per floor carrying the floor's gross area. All options share one building, with as many storeys as the tallest option.

## Simplified shapes

A plain upright block goes over exactly as modelled. Anything else is still sent, and the list says why its shape is simplified:

- **Its floors are not all the size of its base** (it steps back or slopes): the mass in BimCraft is the base outline raised to the full height, but the floor areas and the volume are the solid's own.
- **The solid is not closed**: floors whose section cannot be closed are not measured and count as nothing. Close the solid ({{ui:Entity info}} says "Solid: Yes") for full figures.
- **Its base has more than one outline**: the largest is used as the footprint.

## Good to know

- {{ui:IFC for BimCraft (.ifc)}} is a different export: it sends shapes and names only, with no floors or areas.
- Nothing is uploaded. The file is handed to the BimCraft tab on this computer.
