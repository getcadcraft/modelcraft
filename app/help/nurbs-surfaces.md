---
title: Freeform surfaces (NURBS)
summary: Smooth curves and surfaces for product shells, car bodies and boat hulls — loft, sweep, curve networks, four-edge patches, blends, trims — with G0, G1 and G2 continuity measured on the exact surfaces, solids with union, subtract and intersect, zebra and curvature views, faces fitted to a scan with the error measured, and STEP or IGES files.
section: tasks
order: 106
keywords: nurbs, scan, reverse engineering, fit, mesh to surface, point cloud, stl, trim, trimmed, hole, cut, solid, solids, boolean, union, subtract, intersect, difference, sew, closed, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a
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

STEP carries the trim as the face's bounds and IGES as a trimmed surface (entity 144); both read it back.

## Solids and Booleans

The **Solids** group turns surfaces into closed bodies and combines them. A solid here is a set of the panel's own surfaces that together close a volume; its faces stay exact NURBS surfaces with their trims.

- **Box solid**, **Cylinder solid** and **Sphere solid** make one from typed sizes (in mm): a box of six flat faces, a cylinder of a round side and two flat ends trimmed to the circle, a sphere of one revolved surface.
- **Solid from surfaces** groups surfaces you made yourself. Pick them, or pick none to use every shown surface that is not in a solid yet. They are sewn together within the tolerance: if they do not close, nothing changes and the panel says how many edges stay open and how close they must meet.
- **Union**, **Subtract** (the second solid is taken away from the first) and **Intersect** (only what both share) take two solids: click a face of each in the view, or press **Pick** in the **Solids** list. Tick **Keep the two solids** to leave them beside the result.

A Boolean keeps every face on its own exact surface and cuts it with new trim outlines along the intersection. The result line gives the measured numbers: how far the solid engine's points had to move to sit on the exact surfaces (never more than the tolerance), how close the intersection points are to both surfaces (usually a few millionths of a millimetre), the volume, and whether the new faces close again when they are sewn afresh from their exact surfaces. Volumes are measured on triangles within the tolerance (0.05 mm unless you set another), so a sphere's or cylinder's volume reads slightly under the exact one: a smaller tolerance comes closer. A Boolean that cannot be done cleanly (the solids share nothing, an outline would cross itself) is refused in words and changes nothing. One Boolean is one step of the panel's **Undo**.

In the **Solids** list, **Ungroup** keeps the faces as plain surfaces; the bin removes the solid and its faces.

**Add to the model** (in the **Solids** list) puts a copy of the solid into the model as one closed group, its faces as triangles within 0.05 mm, in one step of the model's Undo. It then works with the model's own **Union**, **Subtract** and **Intersect**, push-pull and the 3D-print check; the exact solid stays in the panel.

## Fillets and thickening

**Fillet between faces** rounds the edge where two faces of one solid meet: pick the two faces (in the view, or with **Pick** in the list), type the **radius** and, for a radius that changes along the edge, the **radius at the end** (0 keeps one radius). A ball of that radius is rolled along the edge touching both faces; the fillet is the exact circular arc it leaves at each point, joined into one surface, and the two faces are trimmed where the ball touches them. An outside edge loses material, an inside corner gains it. The result line gives what was measured: how far the fillet surface is from the rolling ball between the points it was built from (points are added until it is within a quarter of the tolerance), the largest angle between the fillet and each face along the touch lines, and the same numbers as a Union. A radius that does not fit (the ball would leave a face, or a face curves tighter than the radius) is refused, naming the face, and nothing changes.

**Fillet several edges** rounds many edges in one step: pick the two faces of the first edge, then the two faces of the next, and so on (a face may be in several pairs, for example the top face of a box in four of them); all edges get the radius you type. Each rounding is worked out on the solid as it was, then they are cut one after the other, so the order does not matter. Where two rounded edges meet at a corner whose other edges stay sharp, the two fillets run into each other along their intersection curve (a crease). Where three rounded outside edges of three flat faces square to each other meet with one radius, the corner is one **sphere patch** tangent to all three fillets (untick **Corners** to get the creased corner instead); an edge must be at least twice the radius long where both its ends are such corners. The result line says how many edges were rounded and how the corners came out. Inside edges can be rounded together as well, but a result that does not close again is only reported (the line says it), so check it.

**Thicken into a solid** gives a surface a thickness: pick it, type the **thickness**, and tick **Other side** to grow it the other way. The offset face is fitted to the surface and measured against it (the result line gives the largest difference from the thickness); walls follow every edge and every trim outline. If the surface curves tighter than the thickness on that side, or another part of it lies closer than the thickness, it is refused, naming the surface and the place, and nothing changes.

## Undo, the file, STEP and IGES

The panel has its own **Undo** and **Redo** (one step per command). The surfaces are saved in the `.modelcraft` file with the model; they are not part of the model's own undo, like the file's materials.

**STEP…** (AP242) and **IGES…** save the curves and surfaces exactly as they are (B-spline curves and surfaces, nothing turned into triangles). Each surface is its own face, with its trim; a solid is written as one closed shell, each edge shared by its two faces as other CAD programs expect (the status line says how many solids went out that way). In IGES the same solid is one manifold solid B-rep (entity 186 over closed shell 514, faces 510, loops 508, one edge list 504 and one vertex list 502); a solid whose faces do not pair up edge for edge is written as separate faces, and the line says so. **Import…** reads such a solid back as a solid, from STEP and from IGES. It reads curves and surfaces written this way, and `.ccnurbs` patch sets; other programs' STEP solids open with File › Import as meshes.

## Surfaces from a scan (reverse engineering)

Select the scanned mesh in the model (nothing selected means everything shown), open **Surfaces**, and in the **Scan** group choose **Fit surfaces to the scan**. The tool looks for **planes**, **cylinders**, **spheres** and **cones** (the exact surfaces a machined part is made of; each row shows the radius or half-angle it found), finds **fillets** (rounded edges and corners: a small cylinder or sphere that runs tangent into two or more other faces, shown with its radius and the faces it joins), **rim fillets** (a torus: the rounded edge where a flat face meets a cylinder or cone, shown with its radius and its ring radius) and **variable fillets** (a rounded edge whose radius changes along it, shown with the radius at each end), fits **one free-form patch** to a smooth, gently curved piece, and cuts every face to the outline of the part of the scan it came from, so holes and corners stay. Options: the **tolerance** (how far, in mm, a scan point may be from a plane or cylinder and still belong to it, and the target for a free-form patch), the **smallest piece** (a share of the surface area) and the **most faces**. The same scan and options always give the same faces.

The result is a table, one row per face: its kind, how many triangles it came from, and the error **measured from the scan to the face** (rms, the largest, and the share of points within the tolerance). The points measured are the scan's vertices and the middle of each triangle. The error is not measured the other way (face to scan), so a face that reaches beyond the scan would not show. The note under the table also says how much of the area was too small to fit. In the view, the scan points are coloured by their **deviation map**: blue on the face, green halfway to the tolerance, red at the tolerance or more (untick **Show the deviation map** to hide it). Pieces that fold back on themselves (a closed tube fitted with free-form patches, for example) are listed as not fitted, never forced into one surface.

**Stitch the surfaces to a solid** sews every shown surface that is not in a solid into one closed solid. Scan faces meet only to within the scan's own error, so it tries the smallest join distance that closes (never more than the **stitch distance** you set) and refuses in words when the faces do not close. It never patches over a gap. A box with rounded edges stitches when its fillets were found as faces of their own; the join distance that closed is in the result. The solid then works with Union, Subtract, Intersect and **Add to the model**.

What it does not do: a **rim fillet** (a torus) is looked for only around the axis of a cylinder or cone already found, and a **variable fillet** only along a fairly straight edge (its sections are cut square to one direction); elsewhere they come out as free-form patches when smooth enough and are left out otherwise; spheres, cones and fillets are found by random sampling, so a very small one (a few triangles) can be missed; the deviation map shows the distance from the scan to the faces, not the other way; very large scans (over 300,000 triangles) are refused here. Faces of a full-turn cylinder are cut around holes, with the seam put where no hole is. Check every face against your scan before relying on it.

## Not built yet

Rounding edges that meet in a corner of curved faces or with different radii (a vertex blend), a fillet between faces that do not meet, an inside fillet that ends on a slanted or curved face, and Booleans and fillets computed on the surfaces without triangles (here the solid engine works on triangles within the tolerance, and every point is then put back on the exact surfaces).
