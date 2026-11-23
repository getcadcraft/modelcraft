---
title: Design a BimCraft element and save it back
summary: An element sent from BimCraft opens as a group with the building around it, grey and read-only. Change it, then save it back so BimCraft can accept the new shape.
section: tasks
order: 91
keywords: bimcraft, bim, element, send, save back, link, building, context, neighbours, support, bracket, ifc, accept, part links
---

## What you'll do

Work on one element of a BimCraft model (a support, a bracket, a railing, a piece of equipment) in its place in the building, and send the new shape home.

## Steps

1. In BimCraft pick the element and choose {{ui:Part links}} › {{ui:Send to ModelCraft}}. ModelCraft opens with the element as one group at the origin. The origin and axes are the element's own, so the shape goes back to where it stood.
2. The elements around it (within 3 m) are drawn grey. They are there to design against. You cannot pick, snap to or change them, and they are not saved in the model.
3. Open the group and change it like any other: push and pull its faces, draw on them, cut openings. A small element comes in as faces you can push. A large one comes in as a mesh.
4. Choose {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. The status bar says which revision you sent. If more than one group came from BimCraft, pick the one to send first.
5. In BimCraft the element shows as {{ui:Changed in ModelCraft}} until the person there accepts it.

## What you should see

- The group keeps its link in the model file. Open the file later and {{ui:Save back to BimCraft}} still works. The grey building comes back while the browser still holds the package it was sent with.
- Saving back again sends revision 2, 3 and so on. BimCraft keeps the newest.

## Good to know

- The shape goes back as you see it against the grey building, in millimetres. If you move the group, the element moves in the building when it is accepted.
- BimCraft keeps the shape as one IFC extrusion when it is a straight prism (a plate, a bar, a bracket profile, with holes through it). Other shapes go back as a mesh.
- {{ui:Save back to BimCraft}} does nothing in a model with no group from BimCraft.
- Both apps must be open in the same browser: nothing is uploaded, the two pages pass the element between them.
