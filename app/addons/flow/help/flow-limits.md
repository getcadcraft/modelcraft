---
title: Material flow: limits and what is not built yet
summary: What the Material flow add-on does not do yet, and the limits of this version.
section: trouble
order: 90
keywords: limits, not built, physics, plc, emulation, modbus, opc ua, robot, crane, worker, live
---

## Limits of this version

- **No physics.** Loads are moved by rules; they never tip, collide or fall. A belt moves loads at its speed; acceleration is not modeled.
- **Belts are joined by touching ports.** The layout is saved in the `.modelcraft` file; {{ui:Save…}} and {{ui:Open…}} also keep it as a separate file.
- **AGVs:** one-way segments and two-way lanes with junction reservation; no battery charging or vehicle sizes yet; parking is one place per vehicle on a path you name. Head-on traffic in a single corridor with no way round stops the run and says so.
- **Breakdowns are for stations, belts, gates and vehicles** (a time between breakdowns and a mean repair time); zone conveyors do not break down yet. A vehicle's breakdown takes effect where it next stands, not in the middle of a path. Operator pools serve stations only (one person per service; no skills, breaks or walking time).
- A run goes to a worker, with a progress line and {{ui:Cancel}}; where a browser cannot start a worker it runs on the page and says so. Very long runs stop at an event limit and say so.
- **Live** keeps the first 200 000 load positions of a run for the 3D view; after that, loads stop being drawn (the numbers go on).

## Not built yet

- Connecting a PLC to the model (emulation): sensors as PLC inputs, motors and diverts as PLC outputs. Planned for CadCraft Studio, which can talk to a PLC; the web edition will keep simulating only.
- Robots, cranes, shuttles and lifts; pallet and tote stacks; walking time and skills for operators.
- **Robots:** a robot cell checks reach and cycle time and writes a path list, ROS URDF, a joint trajectory and URScript; no collision checking, and no other maker language yet.
