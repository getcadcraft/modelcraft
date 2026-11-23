---
title: Digital twin: give a part from a STEP file a job
summary: Make a face of an imported part a conveyor surface, a joint or a sensor. The part is not changed; the job is saved with the file.
section: tasks
order: 60
keywords: step, imported cad, conveyor surface, joint, sensor, behaviour, face, axis, limit, photo-eye
---

An imported part is just shape. Under {{ui:Behaviours on imported parts}} you tell the twin what a face of it does. The part is not edited. The job is saved in the model file and the run reads it.

## Add a job

1. Import a STEP file into ModelCraft.
2. Choose the {{ui:Job}}: {{ui:Conveyor surface}}, {{ui:Joint}} or {{ui:Sensor}}.
3. Press {{ui:Pick a face}} and click a face of the part in the view. Esc stops picking.
4. Fill in the few numbers that job needs and press {{ui:Add this job}}.

| Job | The face | You set |
|---|---|---|
| Conveyor surface | A flat face that points up | Which way it moves loads (along or across its long side, either way) and the speed in metres a second |
| Joint | A flat face (its normal is the axis) or a round face (its axis) | Turning or sliding, the lowest and highest value, where it starts, the rate. Degrees for turning, metres for sliding |
| Sensor | A flat face | How far it looks out, in metres. The beam leaves the face along its normal |

A conveyor surface is treated as the smallest rectangle that holds the face, along the direction you chose. A face that points down is refused, and so is one tilted across the direction (the direction has to run along the slope). The message says which.

## Test a job

{{ui:Test}} runs it with the load size and friction from {{ui:Will the load ride?}}.

- A conveyor surface: a load starts at rest at the near end and is timed to the far end, beside the time the friction formula gives. A load already at belt speed is timed too.
- A joint: moved to its highest value at its rate; it stops at its limit and says so.
- A sensor: a load is put on the first conveyor surface and the beam reports when it breaks and clears.

The solver carries a load about 3 % faster than the belt, so times can come out a little short of the formula.

## When the part changes

If you import an edited version of the part, press {{ui:Check against the part again}}. A job finds its face again when the same plane or axis is in the same place. It says whether the face was found as it was, found under a new number, or found with a different size. If no face fits, or two fit equally well, the job stays in the file, does nothing, and says why. Pick the face again to repair it. Nothing is guessed.

## Let Material flow read the job

Each job in the list has a {{ui:Material flow item}} choice. Pick an item of the Material flow layout and its numbers come from the job:

- A conveyor job gives a belt (or incline) its length, as long as the face is along the belt, and its speed. The items after it move along, so the layout still joins up.
- A joint gives a station or transfer its time: one swing out to the far limit and back, twice the travel divided by the rate.
- A sensor gives a photo-eye its place on the belt it is on, where its beam meets that belt. The belt must be a conveyor job too.

Under the job the panel says what Material flow read, or why it could not (switched off, item missing, wrong kind of item, face not found). The flow layout itself is not changed: the link is kept with the job. Run again after you change a link.

## Joints in the view

When a run is playing, a joint that is linked to a flow item moves while a load is on that item. It leaves its start toward the farther limit at its rate and comes back at its rate after the load has gone. You see a copy of the part in that position; the part in the model stays where it is, so the copy hides again when the joint is home. The joint does not carry other parts.

## What this does not do

A joint does not carry other parts, and the part in the model itself does not move: a copy is drawn. Jobs not linked to a Material flow item only run in the physics check on the part itself. Round faces that were cut into uneven pieces on import read as plain "other" faces and cannot be a joint axis. This is not a safety validation.
