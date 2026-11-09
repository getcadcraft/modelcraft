---
title: Keep a .3dm model live
summary: Change a model in the program that made it and see it change here, from Rhino 8 or a Grasshopper definition, without saving and importing again.
section: tasks
order: 103
keywords: rhino, grasshopper, live link, live connection, 3dm, nurbs, parametric, link, sync, script, reference model, push
---

Keep modeling where you model, and use the result here: to render it, light it, or lay out a scene around it. Each change in the other program updates one group in ModelCraft.

:::note
The link needs **CadCraft Studio** on the same computer. A browser tab can't take the connection. Nothing goes over the internet: the script talks to Studio at this computer's own address, with a token.
:::

:::warning
This link has been tested with the script's file writer and a stand-in for the other program, not yet inside Rhino or Grasshopper themselves. If something fails there, tell us what it said.
:::

## Set it up

1. In Studio, open ModelCraft. In {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}}, tick **Let AI assistants and scripts use ModelCraft**, then **Edit**.
2. In Studio, choose {{ui:Connect an assistant}}. It shows the address and the token you will paste below.
3. Download the script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## From Rhino

1. Run `cadcraft_link.py` in Rhino's script editor (Python 3 in Rhino 8).
2. The first time, paste the address and the token. They are kept in `.cadcraft-link.json` in your home folder, never in the model. Studio makes a new token each time it starts, so the script asks again then.

The whole model comes over as one group named after the document, for example "chair (linked)". After that, each change comes over when you pause for a moment, and only the objects that changed are sent. Run the script again to stop.

## From Grasshopper

Run the script once in Rhino first, so the address and token are saved.

1. Add a Script component (Python 3) and paste the whole of `cadcraft_link.py` into it.
2. Give it these inputs: `G` (the geometry, with list access), `N` (a name, optional), `On` (a boolean toggle), and `Target` (optional: `model` or `part`, if both apps are open).
3. Turn `On` to true.

Every solve sends `G` over and replaces what the component sent last time, so dragging a slider updates the group here. Its output `a` says what happened. Each component has its own group.

## What you can do with the group

- **Move it, tag it, build around it.** Where you put the group and its tag stay through every update, and so does everything beside it.
- **Don't edit inside it.** Each update replaces what is inside the group. The other program owns those objects.
- **Undo.** Updates within two seconds of each other share one undo step, so {{key:Mod+Z}} takes back a whole drag. The next update brings the model back to match.
- **Save.** The saved file keeps the link. Run the script again after you reopen it, and the same group updates.

## What comes over

Meshes, polysurfaces, surfaces and extrusions as the mesh you see on screen, SubD as its mesh, curves as edges, blocks as separate objects where they stand (not as components), layers as tags, colors and units. See [Bring in a .3dm model](topic:import-3dm-files) for how those appear here.

Left out, with a count in the other program: points, text, dimensions, lights and the like.

**One way only.** Changes here don't go back to the other program.

## If something goes wrong

- **"No ModelCraft or PartCraft window allows it":** do step 1 of the setup.
- **"Studio refused the token":** Studio has restarted. Copy the new token and run the script again. For Grasshopper, run it in Rhino first.
- **"Cannot reach CadCraft Studio":** Studio isn't running, or the address has changed.
