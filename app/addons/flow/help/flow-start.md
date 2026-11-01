---
title: Material flow: getting started
summary: What the Material flow add-on does in ModelCraft, how to switch it on, and a first run with the example line.
section: start
order: 1
keywords: material flow, material handling, conveyor, simulation, throughput, warehouse, distribution center, agv, add-on
---

## What it is

Material flow is an add-on for ModelCraft that comes with it and is free. You lay out a material-handling system in the 3D view — conveyors, curves, inclines, zone conveyors, merges, diverts, stop gates, photo-eyes, stations, buffers and AGV paths — and run a simulation of it: loads arrive, travel, queue, get worked on and leave, and the add-on tells you the throughput, how long loads take, how busy each station is and where queues build up. You can play the run back in the 3D view.

It is off until you switch it on: {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Material flow}}. Its tools are in the {{ui:Material flow}} section of the right panel.

## A first run

1. Press {{ui:Example line}}. A source, a conveyor, a divert, two lanes with a station each, a merge and a sink appear in the 3D view, and the view zooms to them.
2. Press {{ui:Run}}. Eight hours are simulated; {{ui:Results}} shows loads finished, loads per hour and lead times.
3. Press {{ui:Play}} and choose a speed (60× shows a minute every second). Loads move along the belts, wait in front of the stations and take turns at the merge.
4. Open a station under {{ui:Results}} to see its utilization and queue. Press {{ui:Save results as CSV}} for a spreadsheet.

Change something — a station's time, a belt's speed, the divert's rule — and press {{ui:Run}} again to compare.

## Where the layout is kept

The layout is kept in this browser. {{ui:Save…}} writes it to a `.ccflow.json` file and {{ui:Open…}} reads one back; share that file to share a layout. It is not saved inside the `.modelcraft` file yet.

## What it is not

Loads are moved by rules, not by physics: they never tip, slide or fall, and they keep their place on a belt. The simulation is a planning tool: it shows what a layout can carry and where it backs up. Connecting a real PLC to the model is planned for CadCraft Studio later; the web edition simulates only.
