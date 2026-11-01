---
title: Freeform surfaces (NURBS)
summary: Smooth curves and surfaces for product shells, car bodies and boat hulls — loft, sweep, curve networks, four-edge patches, blends — with G0, G1 and G2 continuity measured on the exact surfaces, zebra and curvature views, and STEP or IGES files.
section: tasks
order: 106
keywords: nurbs, trim, trimmed, hole, cut, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a
---

The **Surfaces** panel makes smooth curves and surfaces of the kind used for product shells, car bodies and boat hulls: NURBS, the same maths other surface modellers use. Everything is measured on the exact surfaces, never on the triangles you see. Sizes in the panel are in **millimetres**, whatever unit the model shows.

Open it from the right-hand panel: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. A model that already has surfaces opens it by itself.

## How a command works

1. Press a command (for example **Loft**). The panel says what it still needs: points, curves, a surface edge or a curve end.
2. Pick them: click them in the 3D view, or press **Pick** (or the edge and end buttons) beside each one in the list. For an edge, click near that edge of the surface.
3. Check the options (degree, tolerance, continuity, …) and press **Make**.

Curves from points take the points typed one per line (`x, y, z` in mm), or **Pick points in the view**: each click uses the same snapping as the drawing tools; press <kbd>Enter</kbd> or double-click to finish, <kbd>Esc</kbd> to stop.

## Curves

- **Curve through points** passes through every point. **Curve by control points** follows a cage of points instead.
- **Insert knot**, **Raise degree** and **Lower degree** change how a curve is described without moving it (lowering refuses when the curve would move more than the tolerance). **Rebuild curve** gives it a new number of control points and says how far it moved.
- **Match curve** makes one curve's end meet another's with G0 (touching), G1 (same direction) or G2 (same curvature too). **Blend curve** adds a new curve between two ends.
- **Join curves** and **Split curve**.

## Surfaces

- **Loft** through two or more curves, **Ruled surface** between two, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** carries a profile along a path without twisting it; **Sweep along two rails** keeps the profile's ends on both rails. Sweeps are fitted: the status line says how close it stayed to the true sweep.
- **Surface from a curve network** passes through a grid of curves (the first picks are the profiles, the rest the guides). **Patch from four edges** fills four curves that meet at their corners.
- **Match surface** makes a surface edge meet a neighbour with G0, G1 or G2; **Blend surface** adds a surface between two edges.
- **Offset surface**, **Extend surface** (the surface carries on as it was going), **Rebuild surface**, and knots and degree for surfaces.

## Checking the quality

The **Shared edges** table lists every edge two surfaces share, with the gap (mm), the angle between them (°) and the curvature jump (1/mm), and whether that makes it G0, G1 or G2. An edge worse than you asked for is also in **Problems** (the ⚠ button in the app bar) with a **Match** fix.

**Show as** › **Zebra stripes** and **Curvature (Gaussian)** come from the exact surface: stripes that run on unbroken across an edge mean G1; stripes that also keep their width mean G2. Curvature is blue where the surface is a saddle, red where it is a dome and white where it is flat. **Control points** draws the control nets.

G0–G2 are measured at 33 points per edge. **G3 and "class A" quality are not measured** and are not claimed.

## Trim a surface

The **Trim** group cuts a surface without changing its shape: the surface keeps all its control points, and only the part inside the outline is shown, counted and written. **Trim to a rectangle** and **Trim with a circle** work on a share (0 to 1) of the surface in each direction, so they need no picking in the view; **Trim by a curve** takes a closed curve that lies on the surface (it is projected into the surface, and refused in words when it is open or more than the tolerance away). Tick **Cut a hole** to remove the inside of the outline; leave it off to keep only the inside. A surface can have one kept outline and any number of holes; an outline that crosses another is refused. **Remove the trim** shows the whole surface again. The cut edges follow the outline exactly; the panel's Undo takes a trim back like any other step.

STEP carries the trim as the face's bounds and reads it back. IGES in this panel holds the whole patches only: it says so when you save trimmed surfaces. Solid Booleans (joining trimmed surfaces into a solid) are not built yet.

## Undo, the file, STEP and IGES

The panel has its own **Undo** and **Redo** (one step per command). The surfaces are saved in the `.modelcraft` file with the model; they are not part of the model's own undo, like the file's materials.

**STEP…** (AP242) and **IGES…** save the curves and surfaces exactly as they are (B-spline curves and surfaces, nothing turned into triangles). Each surface is its own face (with its trim, if it has one): surfaces are not stitched into solids yet. **Import…** reads STEP and IGES curves and surfaces written this way, and `.ccnurbs` patch sets; other programs' STEP solids open with File › Import as meshes.
