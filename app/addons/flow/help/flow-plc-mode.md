---
title: Material flow: PLC mode, Soft or Real
summary: Run a soft PLC on the model with no hardware, or connect a real PLC over Modbus TCP through Studio, and map the model's tags to its addresses.
section: tasks
order: 40
keywords: plc, soft plc, real plc, modbus, modbus tcp, emulation, controls, address map, registers, coils, structured text, ladder, openplc, modpoll
---

**Simulation only.** Never drive real machinery from this emulation unattended, and never rely on it for safety. An emergency stop here is a test input. You are responsible for what a connected PLC does.

## Choose the mode

Open the {{ui:PLC mode}} section beside {{ui:Material flow}} and pick {{ui:Soft (no hardware)}} or {{ui:Real (a PLC over Modbus TCP)}}. The choice is saved with the model. Both modes use the same tags: every photo-eye gives `<eye>_covered` and `<eye>_standing`, every stop gate in PLC mode gives `<gate>_is_open` (to the PLC) and `<gate>_open` (the PLC's command), and the model gives `estop_ok`, `loads_done` and `loads_inside`.

## Soft: a soft PLC on the model

The same soft PLC the Digital twin add-on uses runs your program on the model, in this window or in Studio. Write Structured Text (IEC 61131-3) or paste PLCopen XML. {{ui:Starter program}} writes a first rule for every gate. {{ui:Run 10 minutes (fast)}} runs the model faster than real time and shows loads done, loads an hour and the scans; the same program and seed give the same result every time. {{ui:Attach to the live run}} makes the soft PLC drive the gates of a Live run, scanning with the model's clock.

Soft mode works in a browser tab and in Studio. It needs the Digital twin files that ship with ModelCraft; the add-on itself does not have to be switched on.

## Real: a PLC over Modbus TCP

The model plays the plant and a real PLC plays the controller. Each cycle the model's sensors are written to the PLC (coils and holding registers) and the PLC's output coils are read back and applied to the gates. Studio opens the connection, so Real mode is only available in CadCraft Studio. In a browser tab it is switched off and says why: a browser cannot open a raw TCP connection. A Studio older than 0.9 has no PLC client and says so.

1. Set the {{ui:PLC address (IPv4)}} and port. Studio accepts numeric addresses on this computer or a private network (10.x, 172.16 to 31.x, 192.168.x, 169.254.x), nothing else. The address stays on this computer and is never saved in the model file. Modbus TCP has no password.
2. Check the {{ui:Address map}}: one row per tag with its type, table (coil, discrete input, holding register, input register), address and scale. Tags are written to coils or holding registers; PLC outputs can be read from any table. A scale multiplies the model's value on the way out and divides on the way in. Neighbouring addresses are sent as one request. The defaults put the bits on coils 0 upward, the counters on holding registers 0 and 1, and the gate commands on coils 100 upward. Edit them to match your PLC program.
3. Start a Live run, tick the box that you understand the safety line, and press {{ui:Connect to the PLC}}.

If the PLC stops answering, or five exchanges in a row fail, the link is closed and every gate is closed. Only function codes 1 to 6, 15 and 16 are sent. The model is kinematic, so a PLC cannot make a belt run faster.

## Checking it with an external Modbus server

The suite tests Real mode against a small Modbus TCP server written for the tests. To try it yourself without a PLC, run any Modbus TCP server on your own computer (for example OpenPLC or a simulator) and read and write it with a tool such as modpoll. These are separate programs you run yourself; CadCraft does not include or link them. Nothing here has been run against real PLC hardware yet.

## The other direction

If your PLC is the Modbus client and polls the model, use the {{ui:PLC (Modbus TCP)}} section above instead: Studio listens on this computer and the page answers with the fixed address list.
