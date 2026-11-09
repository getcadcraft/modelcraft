---
title: Factory floor: getting started
summary: Turn the Material flow layout into a list of machines and cells, read them live or from the simulator, and see them over the layout.
section: start
order: 10
keywords: factory, shop floor, machines, cells, monitoring, scada, operator screen, mtconnect, oee
---

## What it is

{{ui:Factory floor}} is an add-on for ModelCraft that sits beside {{ui:Material flow}}. Each station in the flow layout becomes a machine. You group machines into cells, choose how each one is read, watch them live, keep a queue of programs for them, and get a history with simple OEE.

**It reads first.** Nothing in this add-on writes to a machine or a PLC unless you switch writing on for that one device and say yes to each write. This build has no way to write at all, so a write is refused and says so.

**Not a safety system.** It is never part of a safety chain. The machines' own guards, interlocks and emergency stops are the only safety functions.

## Switch it on

Open {{ui:Settings}}, then {{ui:Add-ons}}, and switch on {{ui:Factory floor}} (and {{ui:Material flow}} if you want the machines to come from a layout). The {{ui:Factory floor}} section appears in the right panel.

## A first run with the simulator

1. In {{ui:Material flow}}, choose {{ui:Example line}}. Its stations show up under {{ui:Machines and cells}}.
2. Choose {{ui:Simulate every machine}}. Each machine is now a seeded simulated machine: it makes parts, waits now and then, breaks down at random and is repaired.
3. Choose {{ui:Start reading}}. The {{ui:Live}} table shows each machine's state, its parts (bad parts in brackets), its OEE and a trend of its spindle speed.
4. Tick {{ui:Show the operator screen over the layout}}. A label floats over each station in the 3D view with its state, parts, OEE, values and any alarm.
5. Set {{ui:Simulator speed}} to 60× to see an hour in a minute. The speed is offered only while every machine is simulated.

The same seed gives the same history, so a run can be repeated.

## Cells

{{ui:Add a cell}} makes a new cell; rename it in its box. Pick a machine (its button under the cell) to open its settings, and choose its {{ui:Cell}} there.
