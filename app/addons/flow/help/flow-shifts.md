---
title: Material flow: shifts, breakdowns and live runs
summary: Give stations and sources a weekly shift calendar, let stations and belts break down, and watch a run at the pace of the clock.
section: tasks
order: 30
keywords: shift, calendar, breakdown, mtbf, mttr, availability, live, real time, worker, cancel, progress
---

## Shift calendars

Under {{ui:Shift calendars}} press {{ui:Add a shift calendar}}. A calendar is one week that repeats: windows of "on" time, each on some days from a start to an end time. {{ui:Fill from}} offers common patterns (one, two or three shifts, every day). An end time earlier than the start runs past midnight (22:00 to 06:00 on Monday ends Tuesday 06:00). Time 0 of a run is **Monday 00:00**.

Choose the calendar in a station's or a source's {{ui:Shift calendar}}.

- A **station** starts no new work while its calendar is off. Work in progress finishes. Loads wait in its queue (up to the queue size) and the line backs up behind it.
- A **source** makes nothing while its calendar is off; the first load comes the moment it turns on again.

Results for such a station show how much of the run it was open.

## Breakdowns

On a station, {{ui:Time between breakdowns (0 = never)}} (hours of clock time, drawn from an exponential distribution) and {{ui:Mean repair time}} (minutes, an Erlang-2 distribution) make it break down now and then. While it is broken nothing starts and work in progress pauses, then continues with the time it had left. Long-run availability is the time between breakdowns divided by that plus the repair time. Results show the share of time available and the number of breakdowns. Everything is seeded: the same seed gives the same breakdowns.

Belts (straight, curved and inclined conveyors) have the same two settings. A belt that breaks down stops: every load on it stays where it is, nothing gets on or off, and after the repair it runs on from where it stopped (playback shows it standing still). Gates break down too: a broken gate sticks shut, so loads wait in front of it until the repair. Vehicles have {{ui:Vehicle time between breakdowns (0 = never)}} and {{ui:Vehicle mean repair time}} in the AGV fleet: a vehicle that is due to break down stops where it next stands (the end of the path it is on, or where it waits), keeps the lane it holds, and carries on with its job after the repair; results show each vehicle's availability and breakdowns. Zone conveyors do not break down yet.

## Operator pools and parking

Under {{ui:Operator pools}} press {{ui:Add an operator pool}}, name it and say how many people it has. Give a station that pool in {{ui:Operator pool}}: each load it serves needs one person from the pool for the whole service, so with fewer people than servers some servers stand idle, and stations that share a pool take turns when a person comes free. Results show the pool's use. In the AGV fleet, {{ui:Parking places}} lists AGV paths where idle vehicles with no job wait, one place each, instead of blocking a lane.

## Run, Cancel and Live

{{ui:Run}} simulates in a worker so the page stays usable. A line shows how much of the run is done; {{ui:Cancel}} stops it. Where a browser cannot start a worker, the run happens on the page and the message says so.

{{ui:Live}} runs the model at the pace of the clock: at 1× one model second takes one second (pick a faster speed to speed it up) and loads and vehicles move in the 3D view as it goes. {{ui:Pause}}, {{ui:Resume}} and {{ui:Stop live}} are next to it. When the run reaches its end the results and playback are there as after a Run. The result is the same as a Run with the same seed.
