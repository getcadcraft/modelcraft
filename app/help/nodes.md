---
title: Nodes: build a model by wiring
summary: Wire numbers into points, points into curves, curves into surfaces. Change a number and everything downstream rebuilds. Every node is also a line of CraftScript, and the graph is saved in the file.
section: tasks
order: 107
keywords: nodes, node editor, visual scripting, parametric, graph, wires, ports, free-form, freeform, nurbs, loft, extrude, revolve, circle, curve, surface, series, range, random, list, script, craftscript, grasshopper
---

The **Nodes** editor builds geometry by wiring boxes together. Each box (a node) does one small job: make a number, a point, a circle, a loft. You connect the result of one to the input of the next, and the model follows when you change a number at the start.

Open it from the right-hand panel: {{ui:Nodes}} › {{ui:Nodes…}}. A file that already has a graph opens it by itself. It is a window over the 3D view: drag its title bar to move it, drag its corner to resize it.

## Wiring

1. Pick a node from the list on the left (type in the search box to narrow it, <kbd>Enter</kbd> adds the first match). It appears in the middle of the canvas.
2. Drag from a round **output** dot on the right of one node to a round **input** dot on the left of another. The dot turns green when it fits and red when it does not; point at it for the reason.
3. An input with nothing connected shows a box for a typed value. Type a number and press <kbd>Tab</kbd>: the result rebuilds.
4. The small circle in a node's title bar is its **eye**. A node with the eye on is drawn in the 3D view, as lines for curves, shaded for surfaces, dots for points.

Drag a node by its title bar. Drag the background to pan, turn the wheel to zoom. <kbd>Delete</kbd> removes the selected node. {{ui:Tidy}} arranges the nodes in columns, {{ui:Fit}} brings them all into view, {{ui:Undo}} and {{ui:Redo}} step through your edits.

## Types and units

Ports have a type: number, yes/no, point, vector, curve, surface, mesh, or "geometry" for any of those. A point can feed a vector input and back. Numbers carry a unit: a **length** is in millimetres and an **angle** is in degrees. A length cannot feed an angle, and a length times a length (an area) is refused, so a wrong wire is stopped when you make it.

A square dot is a **list**. When a list reaches a single-value input the node runs once for each item, and its result becomes a list. The shorter list repeats its last item. For example, a **Series** of heights into **Move** makes a stack of copies.

## Errors

A node that cannot do its job says why under its name, in red ("The radius must be above zero."), and the nodes after it wait. The same message is a Problem in the Problems panel, so you can find it from there.

## Every node is a line of script

Press {{ui:Script}} to see the graph as CraftScript: one line per node, such as `n3 = nd_circle(n2, n1, [0 0 1]);`. Edit the text and press {{ui:Make the graph from this script}} to bring it back as a graph. The same `nd_` functions work in a CraftScript in PartCraft, so a graph can be run, looped or tested there. Random numbers always take a **seed**, so the same graph gives the same result on every computer.

## Saved with the file

The graph is saved in the model file. The nodes make curves, surfaces and meshes of their own: they do not change the model's faces until you ask.

## Bake to model

Switch on the eye of a node that makes a surface or a mesh, then press {{ui:Bake to model}} in the Nodes window. Each shown surface or mesh becomes a group of faces in the model, in metres, that you can edit like any other. It is one undo step. The graph stays, but the copy no longer follows it: change a number and bake again for a new one. Points and curves are not solids, so they are left out, and the message says how many.
