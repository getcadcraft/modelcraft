---
title: Factory floor: history and OEE
summary: How the add-on records states, parts and alarms, how simple OEE is worked out, and what is not supported.
section: reference
order: 40
keywords: oee, availability, performance, quality, history, historian, csv, downtime
---

## What is recorded

While reading, each machine's state is kept as time spans, with its part counts and its alarms as they come and go. The history stays in this browser; the machine settings and the job queue are saved in the model file with the layout.

## OEE

- **Availability** = running time ÷ planned time. Planned time is the period less planned stops and less time the machine was not seen (nobody knows what it did then).
- **Performance** = ideal cycle time × parts made ÷ running time. The ideal cycle time comes from the flow station's mean process time, or what you type. Above 100 % means the ideal time is too long; the OEE then uses 100 %.
- **Quality** = good parts ÷ parts made.
- **OEE** = availability × performance × quality.

A machine's counters are read as running totals. A counter that goes down was reset at the machine, and counting starts again from zero.

{{ui:Save OEE (CSV)}} and {{ui:Save state history (CSV)}} write files; {{ui:Clear history}} starts again.

## Limits

- Not a safety system and never part of a safety chain.
- No writing to machines or PLCs in this build. No starting of programs from here.
- Real machines were not tried: MTConnect was tested against our own simulator, served over HTTP on the test computer; OPC UA, MQTT, Modbus and BACnet need CadCraft Studio's device bridge, which is not built yet.
- No connection to a plant historian, no shift calendars in OEE (use {{ui:Planned stop}}), no reports by shift or by product, no MTConnect assets (tools, programs).
