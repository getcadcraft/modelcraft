---
title: Factory floor: reading real machines
summary: Read a machine through MTConnect, or through OPC UA, MQTT, Modbus or BACnet in CadCraft Studio, and what the states mean.
section: tasks
order: 20
keywords: mtconnect, agent, probe, current, sample, opc ua, mqtt, modbus, bacnet, machine state, part count
---

## MTConnect

Pick a machine and set {{ui:Read by}} to {{ui:MTConnect}}. Type the {{ui:Agent address}} (for example `http://192.168.1.20:5000`) and choose {{ui:List the agent's devices}}, then pick the device.

The add-on reads the agent's public documents: the device list (`probe`), then `current` once, then `sample` from the next sequence number on every read, so no change between two reads is missed. Each change is recorded at the time the agent gives it. If the agent restarts or its buffer no longer holds what came in between, it reads `current` again.

**Where it can read from.** A web page can only read an agent over https that allows this site. Most shop-floor agents are plain http on your own network: read them in CadCraft Studio. An address that is not on a private network needs {{ui:I approve this host}}.

## OPC UA, MQTT, Modbus TCP, BACnet/IP

These need CadCraft Studio: a web page cannot open a plant network connection. Type the host and port, then the tags: {{ui:State tag}} (a word such as `ACTIVE`, `READY`, `STOPPED`, `FAULT`, or a number: 0 not seen, 1 idle, 2 running, 3 stopped, 4 down, 5 setup), {{ui:Part count tag}}, {{ui:Good parts tag}}, {{ui:Bad parts tag}} and {{ui:Alarm tag}}. Without Studio the machine says {{ui:Needs CadCraft Studio.}} and nothing is sent.

## States

| State | When |
|---|---|
| Running | the program is running (MTConnect execution ACTIVE) |
| Idle | ready, waiting, or the program finished |
| Stopped | stopped, feed hold, interrupted, optional stop |
| Setup | in manual, manual data input or edit mode and not running |
| Down | a fault condition or an emergency stop |
| Not seen | the machine or its agent did not answer, or says it is unavailable |
| Planned stop | you marked it with {{ui:Planned stop}} |

## Values, limits and alarms

Numeric values (spindle speed, load and the like) are kept with a trend. Open {{ui:Limits on n values}} in a machine's settings to give a value a low or high limit: going past it shows an alarm in the {{ui:Live}} table and on the operator screen. A machine's own fault and warning conditions are alarms too, with their text and code.

## Writing

{{ui:Allow writing to this device}} is off for every device. Switching it on asks first, and every write asks again. This build has no channel that writes to a machine or PLC, so even then the write is refused and says so.
