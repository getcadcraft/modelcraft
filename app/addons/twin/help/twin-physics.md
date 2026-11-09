---
title: Digital twin: will the load ride, compare layouts
summary: Physics on a load along a line, formulas per belt, and layouts compared with repeat runs.
section: tasks
order: 40
keywords: physics, friction, tip, slip, incline, curve, throughput, bottleneck, what-if, confidence interval, bill of materials
---

## Will the load ride?

Enter the load's size, mass and friction on the belt, then press {{ui:Ride it}}. One to eight loads ride the line from a source with rigid-body physics, following the first output of each divert. It says whether they ride the line, tip, fall off, stop moving, or slip back. The table checks every belt with the formulas: slip on a slope at tan θ = μ, tip at tan θ = L/H, and slide on a curve at v²/r = μg.

Boxes only. The rest of the plant stays on rules, as physics over a whole shift would take too long.

## Compare layouts

Write one version a line, as `name: item.setting=value`, for example `Faster: station-1.servers=2, conveyor-1.speed=0.8`. Item names are those in {{ui:Material flow}}. {{ui:Compare}} runs each version on the same random numbers. A difference counts only when its 95 % interval leaves out zero; otherwise it says {{ui:No clear difference}}. More runs narrow the interval.

{{ui:Most likely limiting}} ranks stations by busy share minus time blocked by what follows. It is a place to look first, not a proof. {{ui:Add as a version}} adds the obvious change for you to compare.

## Bill of materials

Quantities from the layout. Prices and suppliers are left for you to fill in.
