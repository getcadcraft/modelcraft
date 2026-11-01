---
title: Material flow: lay out a system
summary: Add items from the catalog, place and move them with the mouse, join them port to port, and set their parameters.
section: tasks
order: 10
keywords: layout, catalog, port, snap, conveyor, curve, incline, merge, divert, gate, photo-eye, station, buffer, source, sink, agv path
---

## Ports

Every item has ports: an input where loads come in and one or more outputs where they leave, each with a direction. Two items are joined when an output and an input touch and point the same way. Joints are never stored: they are worked out from where things are, so moving an item and snapping it back keeps the flow right. Free ports show as small red markers in the 3D view.

## Add items

1. Under {{ui:Add from the catalog}}, choose the {{ui:Item}}.
2. In {{ui:Join to}}, choose the free output it should follow (the selected item's output is chosen for you). The new item is placed with its input on that output, facing the same way.
3. Press {{ui:Add}}. It is selected, and its parameters show below.

## Place and move with the mouse

Press {{ui:Place with mouse}} and click in the 3D view: the chosen item lands on the ground point you clicked and, when a free port is within 0.6 m, joins it. Keep clicking to place more; press Esc (or {{ui:Stop placing}}) to stop.

Drag any item to move it: it slides over the ground at its own height and snaps onto a free port within 0.6 m when you let go. **Hold Shift** to drag it together with everything joined to it (belts, ports, AGV paths and the photo-eyes on them), so a whole line moves as one. Untick {{ui:Move and place with the mouse}} to leave the 3D view to ModelCraft's own tools. {{ui:Undo}} and {{ui:Redo}} step back through the changes you made here (the last 60).

The layout is saved in the `.modelcraft` file with the model, and opens with it. Where the add-on is off, or not installed, the file still keeps the layout untouched.

Choose {{ui:Nothing (place it free)}} to place an item on its own; then set its {{ui:X}}, {{ui:Y}}, {{ui:Height}} and {{ui:Turn}} and press {{ui:Snap}}: it jumps onto the nearest free port within 0.6 m.

## The catalog

| Item | What it does |
|---|---|
| Conveyor, curve, incline | A belt. Loads move at its speed and keep the gap you set. With {{ui:Accumulate}} on, loads queue up nose to tail when the end is blocked; off, the whole belt stops. A curve turns left for a positive angle. |
| Zone conveyor | An accumulating belt in zones of equal length: one load a zone. |
| Merge | Two or three inputs, one output. {{ui:Priority}} lets input 1 go first; {{ui:First come}} the load that has waited longest; {{ui:Take turns}} alternates. |
| Divert | One input, two or three outputs (straight on, left, right). {{ui:Round-robin}}, {{ui:First free}} (an output that can take the load now, in order), {{ui:By load type}} (`A 1, B 2`), {{ui:By share}} (`1 3` sends a quarter to output 1) or {{ui:By photo-eye}} (a lane whose photo-eye has a load standing on it counts as full). |
| Transfer | Hands a load across in a set time, one at a time. |
| Stop gate | Holds loads: open, closed, or open and closed in turn. |
| Station | Works on loads: servers, a queue in front, and the time each load takes. A load that is done but cannot leave keeps its server (blocked). |
| Buffer | Holds a number of loads, first in, first out. |
| Source | Makes loads: a time between loads, or {{ui:Always one waiting}} to find the most a layout can carry. {{ui:Load types}} is a list of type, share and length (`A 3 0.4, B 1 0.6`). |
| Sink | Where loads leave and are counted. |
| Photo-eye | Sits on a conveyor at a distance along it. It counts loads and tells a divert when a load stands on it. |
| AGV path, pickup, drop | See "Material flow: AGVs". |

## Times

A time can be fixed or follow a distribution: uniform (least and most), exponential (mean: random arrivals), normal (mean and standard deviation, never below zero), triangular (least, most likely, most) or Erlang (mean and phases). All times are in seconds, lengths in meters.
