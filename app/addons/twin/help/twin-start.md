---
title: Digital twin: getting started
summary: Turn a Material flow layout into a working plant you can watch, test and compare.
section: start
order: 10
keywords: digital twin, emulation, simulation, virtual commissioning, plc, conveyor, throughput, factory
---

## What it is

{{ui:Digital twin}} is an add-on for ModelCraft that sits beside {{ui:Material flow}}. It reads the same layout. Nothing has to be remodelled.

## First five minutes

1. Open {{ui:Settings}}, then {{ui:Add-ons}}, and switch on {{ui:Digital twin}} and {{ui:Material flow}}.
2. In the {{ui:Digital twin}} panel, choose a cell under {{ui:Start from a cell}} and press {{ui:Use this cell}}.
3. Under {{ui:See it run}}, press {{ui:Run}}, then {{ui:Play}}.
4. Choose what each station is: a machine, a robot, a robot with a pallet, or a person at a bench.

## What each part does

- {{ui:See it run}} draws the equipment, plays the run, and gets it out as video, for the path tracer, or as animated USD.
- {{ui:Test the controls}} runs your PLC program on the model with faults and repeatable tests.
- {{ui:Will the load ride?}} rides a load along a line with physics and checks each belt against the formulas.
- {{ui:Compare layouts}} runs versions of the layout side by side and ranks what is limiting the line.
- {{ui:Bill of materials}} lists quantities from the layout.

## Not a safety validation

An emergency stop here is a test input. No result here proves a safety function.
