---
title: Material flow: results and how the simulation works
summary: What each result means, how warm-up and the random seed work, the CSV, and the known answers the simulation is tested against.
section: reference
order: 30
keywords: results, statistics, throughput, lead time, utilization, queue, warm-up, seed, csv, discrete event, queueing theory
---

## Results

| Result | Means |
|---|---|
| Loads finished, per hour | Loads that reached a sink after the warm-up. |
| Lead time | From a load being made at its source to leaving at a sink: mean, 95th percentile (95 in 100 took less) and the longest. |
| In the system at the end | Loads still on belts, in queues or on vehicles when the run ends. |
| Utilization | The share of time a station's servers were working. {{ui:Blocked}}: done, but the way on was full. |
| Queue, wait in queue | Loads waiting in front of a station, averaged over time, and how long each waited. |
| Loads on it, end blocked | For a belt: how many loads were on it, and the share of time its end was held. |

## Warm-up and the seed

A run starts empty. {{ui:Warm-up}} minutes are simulated but not counted, so the results describe the system once it is full. Random times use the {{ui:Random seed}}: the same layout and seed give exactly the same results on every computer; another seed gives another, equally likely day. Run a few seeds before trusting a small difference.

Each item draws its own random numbers, so adding an item elsewhere does not change what the others draw.

## Playback

The first two hours of a run are kept for playback; the results cover the whole run. On a belt a load is drawn where the simulation put it; in a queue, in a row before the station.

## CSV

{{ui:Save results as CSV}} writes one row per element and measure, with full precision: the run (seed, hours, totals, lead times), each load type, each element and each vehicle.

## Tested against known answers

The simulation is checked against queueing theory and simple cases worked out by hand, among them: a station with random arrivals and a fixed time at 80 % load (mean wait 16 s for an 8 s job, within 4 %), the same with random times on one and two servers, a belt's travel time and capacity (a 10 m belt with 0.4 m loads 0.1 m apart holds 20), loads leaving a released queue one spacing apart, merge priority, and every divert rule. Shifts and breakdowns are checked the same way: a station open one hour of two completes exactly the loads that fit in that hour, and a saturated station that breaks down follows availability = time between breakdowns ÷ (that + repair time) within 3 %.
