---
title: Digital twin: compare with a measured line
summary: Put a file of measured part times beside the model, with the difference in units and as a percentage.
section: tasks
order: 50
keywords: measured, real line, validation, throughput, queue, ride time, csv, difference, percentage
---

Under {{ui:Compare with a measured line}} press {{ui:Open a measured file}}. The model is run on the same arrivals as the real line and both are read in exactly the same way, so each number can be set beside its twin.

## The file

A CSV with one row for every time a part passed a named point.

| Column | Meaning |
|---|---|
| part, id or part_id | Which part. The same text means the same part. |
| point, station or location | The point it passed: the id of an item in the Material flow layout (the moment it entered that item), or the id followed by .out for the moment it left. |
| time_s, time_min, time_h, time or clock | When. A column named just time uses the unit chosen above the button. clock is a time of day (h:mm:ss) counted from the first row. |

A part may pass a point once. If a row cannot be read, nothing is loaded and the panel shows the first problem with its line number; no row is skipped.

## What is compared

Choose a {{ui:From point}} and a {{ui:To point}}. Time 0 is the first moment any part is seen at the from point. The window ends at the last part seen at the to point; anything the model does after that is left out of both. {{ui:Leave out the first (s)}} drops a warm-up from both lines.

- **Throughput**: parts an hour passing the to point inside the window, and every point's own count.
- **Parts inside the stretch**: how many have passed the from point and not yet the to point, averaged over the window, and the most at once.
- **Ride time**: the time from the from point to the to point of the parts that made it: mean, median, 95th percentile and spread.

Each row shows the measured value, the model's, the model minus the measured value in the same unit, and that difference as a percentage of the measured value. {{ui:Save the comparison}} writes the table as CSV.

When the from point is a source, the model is given the measured arrival times (the orders mode of Material flow), so the difference shows what the model does with the arrivals the line really had. If it is not a source, the model runs on its own random arrivals and the panel says so.

## What this does and does not show

It reports how this model differs from this one measured stretch. It does not adjust the model, and it does not show the model is right for other days, other mixes or other points. How well the model matches a real line has to be judged on real data from that line; the checks run so far used a made-up file with known changes, which test the arithmetic and nothing more. This is not a safety validation.
