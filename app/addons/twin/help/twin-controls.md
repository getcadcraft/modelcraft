---
title: Digital twin: test the controls
summary: Run a PLC program on the model with no hardware, force signals, inject faults and run repeatable tests.
section: tasks
order: 20
keywords: plc, soft plc, structured text, plcopen, iec 61131-3, force, fault, test, commissioning, modbus, emergency stop
---

## Give the program something to drive

Set a stop gate's mode to `plc` in {{ui:Material flow}}. A gate in that mode stays shut until the program opens it. Photo-eyes become inputs.

## The program

{{ui:Starter program}} writes the declarations for every signal and a first rule for every gate. The address of each signal is in the {{ui:Signals}} list. {{ui:Open a program}} takes a `.st` file or a PLCopen XML file exported from your controller tool. Keep the addresses from the list, as signals connect by address.

## Run it

{{ui:Start}} runs the program in step with the model. Use {{ui:Force}} on a signal to hold it on or off. Use {{ui:Faults}} to stop a belt or a station, stick a gate or a photo-eye, or press the emergency stop, then {{ui:Clear}} it. The status line says when the line has stalled.

## Tests

{{ui:Run the tests}} runs the tests the layout gets by itself: ten minutes without a stall, a belt stopping and restarting, a station going down and coming back, the emergency stop closing every PLC gate, and a stuck photo-eye. It runs in simulated time. The same program and seed repeat to the byte, so a failure can be run again and shown to someone. {{ui:Save the report}} saves the result as CSV.

## A real PLC

{{ui:Material flow}} lists Modbus TCP addresses, and CadCraft Studio serves them while the model runs live. Other PLC protocols are not built yet.
