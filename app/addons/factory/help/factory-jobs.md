---
title: Factory floor: the job queue
summary: Queue posted programs per machine, hand them over from PartCraft, check them and send them with CadCraft Studio's Send to a machine.
section: tasks
order: 30
keywords: job queue, g-code, nc program, post, cam, send to machine, partcraft, dnc
---

## Put a job in the queue

- {{ui:Open a program file…}} adds a G-code or NC file (`.nc`, `.ngc`, `.gcode`, `.tap` and the like) as a job.
- From PartCraft: switch on the {{ui:Factory floor}} add-on in PartCraft, post a program in {{ui:Manufacture}}, then choose {{ui:Add to the factory job queue}}. Back in ModelCraft, {{ui:Take jobs from PartCraft}} brings it in. This hand-over works between apps open in the same browser. Elsewhere, use {{ui:Save as a job file}} in PartCraft and {{ui:Open a job file…}} here.

## Check and send

Pick the job's machine. The queue warns when a job was posted for another control than the machine's {{ui:Control (post)}}, when the machine is down or not seen, and refuses a file the machine does not take.

{{ui:Send…}} opens CadCraft Studio's {{ui:Send to a machine}} dialog, where you pick the machine set up in Studio's Machines settings. The file is uploaded to the machine. **Nothing here starts a machine:** start it at the machine. In a web browser there is no Send; you can still queue, check and save jobs.

{{ui:Mark done}} when the part is made. A failed send can be queued again.
