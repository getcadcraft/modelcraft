---
title: Modifiers on a mesh, a group or a component
summary: Scale, mirror, array, smooth, bevel, cut and bend a mesh without changing it, and repeat or scale a group or component with the same stack; make it permanent when you are ready.
section: tasks
order: 60
keywords: modifier, modifiers, stack, group, component, scale, bake, edit source, non-destructive, mirror, array, radial array, subdivision, subdivision surface, smooth, bevel, solidify, thickness, boolean, cut, displace, noise, weld, decimate, simplify, lattice, cage, curve deform, bend, shrinkwrap, apply
---

A **modifier** changes what a mesh shows without changing the mesh itself. Mirror one half of a part and model only that half; round a box with a subdivision surface and keep editing the box. Modifiers sit in a **stack** and work in order, top to bottom. What you see, export, print and render is the mesh with every modifier that is on.

## Add a modifier

1. Select a mesh. In the Model workspace its **Modifiers** section is in {{ui:Entity info}}; in the Mesh workspace it is in the panel on the right.
2. Pick one from {{ui:Add a modifier…}}. It goes to the bottom of the stack.
3. Change its settings below its name. Lengths take the same values as the Value box, so `600mm`, `2'6"` and `(6m)/4` all work.

Every change is one undo step: {{key:Mod+Z}} takes it back.

## The buttons on each modifier

- The checkbox turns it on or off.
- The screen button shows or hides it in the view (it stays in the stack).
- The camera button shows or hides it in rendered pictures and videos, so a modifier can be for renders only (or for the view only).
- The arrows move it up or down the stack. Order matters: mirror then subdivide gives a smooth seam, subdivide then mirror does not.
- {{ui:Apply}} makes the shape part of the mesh: the modifiers above it and this one are done to the mesh itself and leave the stack. It is one undo step.
- The cross removes it.

## The modifiers

| Modifier | What it does |
| --- | --- |
| Scale | Scales about the object's origin, a factor for red, green and blue. On a group or component too. |
| Mirror | Adds a mirrored copy across red, green or blue through the mesh's origin, and joins the halves where they meet. |
| Array | Copies in a line (a step of its own size times the numbers you give, plus a fixed step), round an axis, or along a curve in the model. A group or component takes the line. |
| Subdivision surface | Smooths the mesh by Catmull-Clark subdivision. Sharp edges stay creased. Renders can use more levels than the view. |
| Bevel | Rounds every edge sharper than the angle you give. |
| Solidify | Gives a surface a thickness and closes the rim. |
| Boolean | Cuts away, joins or keeps the overlap with another object in the model. Both need to be closed solids. |
| Displace | Moves the surface in or out by smooth noise. The same seed gives the same bumps every time. |
| Weld | Joins vertices closer than a distance. |
| Decimate | Keeps a share of the triangles, removing the ones that change the shape least. |
| Smooth | Relaxes the vertices toward their neighbours. |
| Lattice | Bends the mesh with a cage: move the cage's points and the mesh follows. |
| Curve deform | Bends the mesh along a curve in the model, along red, green or blue. |
| Shrinkwrap | Moves every vertex onto the nearest point of another object. |

## On a group or a component

A group or component can keep a recipe too, so a lamp's shade can be a **Scale** and an **Array** of one shade, and changing a number changes the lamp.

1. Select a group or component. In {{ui:Entity info}} its **Modifiers** section lists the stack (empty at first).
2. Pick {{ui:Scale}} or {{ui:Array}} from {{ui:Add a modifier…}}. The group becomes a component that is **the original, placed by the stack**. The original is kept: edit it and every copy follows at once.
3. Scale takes a factor for red, green and blue (`1, 1, 2` doubles the height). Array takes the number of copies, a step as a share of the result's size so far, and an extra step in lengths.

The stack runs top to bottom on the original's own axes about its origin, so order matters: an Array of three copies 3 m apart, then Scale 2 on red, puts the copies 6 m apart; Scale first and then the Array keeps them 3 m apart. The checkbox, the arrows and the cross work as on a mesh; the view and camera buttons and Apply on one modifier do not, because a stack on a group is one thing.

- {{ui:Edit source}} opens the original in place. Changes show in every copy; closing it returns to where you were.
- {{ui:Bake modifiers}} makes the result plain edges and faces and takes the stack away, in one undo step. Copies that overlap stay as separate geometry: Bake is not a union.
- Copies of the component share the recipe; {{ui:Make unique}} separates it (the original stays shared).
- The stack is saved in the file, carried by copy and paste and by undo, and Purge unused keeps the original. A program that does not know modifiers still shows the copies.
- Until Bake, the result cannot be entered, exploded, resized or stretched: it would be rebuilt on the next change. Each says so.
- The limits are 32 modifiers and 1,000 copies. A component made to stretch (Stretch) and a stack cannot share a definition yet.

## Subdivision surface

Subdivision smooths a mesh by Catmull-Clark: every face becomes four-sided faces, and each level makes four times as many. A box with two or three levels already reads as a rounded shape, and you keep editing the box.

- **Levels in the view** sets how smooth it is.
- **Levels in renders** sets how smooth rendered pictures and videos are; renders can use more levels than the view.
- **Renders on the true smooth surface** puts a rendered mesh's points on the limit surface the levels tend to, so even two levels render as smooth as many.
- **Creases** keep edges sharp: in the Mesh workspace select edges and use {{ui:Crease}} (1 stays sharp, 0.5 rounds a little, 0 is smooth). See [Edit a mesh](topic:mesh-edit).
- **Lower the view level on a big mesh:** when the levels you ask for would give more faces than this computer's view handles well, the view shows a lower level and says which. {{ui:Apply}} always uses every level. How many faces is set by your machine's class in {{ui:Settings}} › Rendering › Your machine.
- Open borders keep their corners and stay on their edges' line.

## Bend with a lattice cage

1. Add a {{ui:Lattice}} modifier and press {{ui:Add a lattice cage round the mesh}}. A cage of 3 × 3 × 3 points appears round the mesh, drawn as wires.
2. Open the cage in the Mesh workspace (double-click it) and move its points. The mesh follows smoothly.

:::tip
A cage is a mesh like any other: hide it with its tag when you are done.
:::

## Big meshes

Small stacks are worked out at once. A big one is worked out in the background on every core of your computer: the view keeps showing the last result until the new one is ready. Booleans load the solid modeler the first time; the view says so for a moment.

## What modifiers do not do yet

- Weights per vertex (a falloff painted on the mesh) for Displace, Smooth and Shrinkwrap.
- Modifiers other than Scale and the linear Array on push/pull geometry (groups and components): turn it into a mesh first ({{ui:Convert to mesh}}). Mirror, a round or curve Array, Bend and Taper on groups come later.
