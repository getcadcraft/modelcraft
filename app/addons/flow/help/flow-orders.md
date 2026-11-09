---
title: Material flow: orders from a file
summary: Bring arrivals in from a CSV file instead of random times, so the same file always gives the same run.
section: tasks
order: 35
keywords: orders, arrivals, csv, file, warehouse, schedule, time base, qty, repeatable
---

Use this when you know when loads arrive (an order list, a delivery schedule, a day taken from a log) and do not want random times. Under {{ui:Orders from a file}} press {{ui:Open an orders file}}, then set a source's {{ui:Mode}} to {{ui:Orders from a file}} and pick the table in {{ui:Orders table}}. {{ui:Use the sample orders}} loads a small made-up file so you can see how it works.

## The file

A CSV file (commas, semicolons or tabs). The first row names the columns; the names are not case sensitive. Lines that are empty or start with # are not rows.

| Column | Meaning | Needed |
|---|---|---|
| time_s, time_min, time_h or time | When the order arrives, counted from the start of the run, in seconds, minutes or hours. A column named just time uses the unit chosen under the file buttons (seconds at first). | one of these |
| clock | A time of day (h:mm or h:mm:ss). The run starts at the first row's time of day, so 06:00:30 then 06:01:00 are 0 and 30 seconds. | or this instead |
| type | The load's type name (letters, digits, _ and -). Empty means the source's first type. | no |
| length_m, length_mm or length | The load's length (length is metres). Empty means the length the source gives that type, else 0.4 m. | no |
| qty | How many loads arrive together, 1 to 1000. Empty means 1. | no |
| source | The id of the source that takes the row. Empty means every source set to this table takes it. | no |
| order, id or note | A label for you. Kept, not used by the run. | no |

Other columns are ignored.

## What is the same every time

Rows are put in time order; rows at the same time keep their order in the file. A source in this mode draws no random numbers, so the same file gives the same run whatever the seed. Stations and breakdowns elsewhere in the layout still use the seed as before.

## A bad row is never skipped

If any row cannot be read, nothing is loaded and the panel shows the first problem: the line number, the column and what the cell said. Fix that row and open the file again. Times may not be negative. A file may have up to 50,000 rows and a layout up to ten tables.

## What to know

- Orders that come after the end of the run are not reached. The source's results list how many orders the table held.
- A source's {{ui:Shift calendar}} and {{ui:Stop after (0 = never)}} do not apply to orders: the file is the schedule.
- A load longer than the belt it must ride is reported as a problem before the run.
- The tables are saved in the ModelCraft file with the layout. {{ui:Save as CSV}} writes a table back out in the columns above (time in seconds).
- This is a way to feed the model what you already know. It does not read any warehouse system's own format.
