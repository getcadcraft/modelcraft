---
title: Material flow: AGVs
summary: Lay out one-way or two-way AGV paths, a pickup and a drop, set the fleet, and read what the vehicles did.
section: tasks
order: 20
keywords: agv, automated guided vehicle, amr, path, pickup, drop, fleet, reservation, deadlock, zone control
---

## Lay out the paths

AGV paths are one-way segments, or two-way lanes when you tick {{ui:Two-way lane}}. Add an {{ui:AGV path}} joined to a pickup or to the end of another path; set its {{ui:Length}} and {{ui:Turn}} so it goes where you want. Segments whose ends touch (within 5 cm) form one network. Press {{ui:Example AGVs}} for a square loop with a pickup, a drop and two vehicles.

An {{ui:AGV pickup}} takes loads from a conveyor; its marker (beyond its front) must sit on a path end. An {{ui:AGV drop}} puts loads onto a conveyor; its marker (behind it) must also sit on a path end. Set the pickup's {{ui:Deliver to}}.

## The fleet

{{ui:AGV fleet}} sets how many vehicles there are, their speed, and how long loading and unloading take. Vehicles start at the ends of segments spread around the network.

## How the vehicles behave

- A load waiting at a pickup calls the nearest free vehicle (by distance along the paths).
- A vehicle drives on a one-way segment only when no other vehicle is on it: it waits at the end of its segment until the next one is clear. Two vehicles are never on one segment.
- A free vehicle in another's way moves on to the next segment.
- A **two-way lane** is one reservation for both directions: only one vehicle at a time drives on it, either way. A vehicle is on the lane only while it drives along it; once it has arrived it stands at the node and the lane is free again (vehicles may pass each other at a node). A vehicle that turns back onto a lane another vehicle is waiting for hands it over first, so none is starved.
- With {{ui:Reserve junctions}} on, where three or more lanes meet only one vehicle at a time may be on the approach to the junction or standing at it, so paths never cross with two vehicles at the junction.
- If vehicles end up waiting for each other in a circle, the run stops and says which vehicles and where. A free vehicle at the end of a lane with nowhere to move aside stops the run too (stuck). Add segments (a loop or a passing place) or use fewer vehicles.

{{ui:Results}} shows, for each vehicle, the loads delivered and how its time was spent: driving loaded, driving empty, waiting and idle.

Charging, vehicle sizes and traffic rules beyond lanes and junctions are not built yet.
