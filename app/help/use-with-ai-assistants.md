---
title: Use ModelCraft with an AI assistant
summary: Let your own AI assistant or script look at the model and build simple solids: permissions, connecting through CadCraft Studio, and the activity log.
section: tasks
order: 125
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, modeling, box, cylinder, render, render queue, permissions, disconnect, activity
---

## What you will learn

How to let an AI assistant (or a script you wrote) work with ModelCraft, and how to decide what it is allowed to touch.

ModelCraft has **no AI of its own** and sends nothing anywhere. You bring the assistant: any program that speaks the Model Context Protocol (MCP). ModelCraft only gives it tools, and you choose which.

## Turn it on

1. Open {{ui:Settings}} (the gear in the app bar, or {{key:Mod+,}}) and go to the {{ui:ModelCraft}} tab.
2. Under {{ui:Assistants}}, tick **Let AI assistants and scripts use ModelCraft**. It is off until you do.
3. Choose what it may do: **Read** is ticked to start with; tick **Edit**, **Save** or **Export** only when you need them.

Tools outside the permissions you ticked are not offered to the assistant, and if it asks for one anyway, ModelCraft refuses and writes it in the activity log. Turning the switch off ends every connection at once; {{ui:Reset ModelCraft settings}} turns it off too.

## Connect your assistant

Assistants connect through **CadCraft Studio** on your computer: Studio runs a small server only this computer can reach, protected by a token it makes each time it starts. In Studio, choose {{ui:Connect an assistant}} and copy the address and the token into your assistant (Studio shows the exact settings to paste). Never share the token.

:::note
A browser tab can't open a connection for an assistant: in the browser apps the switch has no effect until you use CadCraft Studio on your computer.
:::

## You stay in charge

- **Every change is one undo step**, labelled with the assistant's name for it (for example "Assistant: box"). {{key:Mod+Z}} takes back the assistant's last change as a whole.
- **You know when one is connected.** A button in the app bar names the assistant while it is connected; click it to see what it may do, or to **Disconnect** it.
- **Activity.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Assistants}} › {{ui:Activity}} lists every call: when, which tool, done or refused. {{ui:Save the log}} keeps a copy.

## What an assistant can ask for

| Tool | Permission | What it does |
|---|---|---|
| `app_info`, `model_describe` | Read | The model's unit, size, and every group and component with where it is, whether it is a closed solid and its volume |
| `view_screenshot` | Read | A picture of the 3D view as shown |
| `box_add`, `cylinder_add` | Edit | A box or a cylinder as a new group, at a place and size you or it give ("3m", "10'" or a number in the model's unit) |
| `instance_move`, `instances_erase` | Edit | Moves or erases groups and components |
| `faces_list`, `materials_list` | Read | The faces of a group or of the loose geometry (each one's direction, area and centre); the materials and colours it can paint with |
| `push_pull` | Edit | Pushes or pulls a face, as {{ui:Push/Pull}} does |
| `paint` | Edit | Paints faces or a whole group with a colour or a material |
| `group_make` | Edit | Makes a group or a component of loose faces and groups |
| `scene_add`, `scene_show` | Edit | Saves the view as a scene; goes to a saved scene |
| `mesh_add` | Edit | A mesh object to start from (cube, sphere, cylinder …), as the Mesh workspace adds it |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Read / Edit | A mesh's modifier stack: mirror, array, subdivision, bevel and the rest; nothing is applied for good |
| `usd_export` | Export | The model as OpenUSD (.usda, .usdc or .usdz), as saving the model as USD writes it ([USD](topic:usd)); to a folder you allowed in Studio, else a download |
| `render_still` | Export | A rendered picture of the view or of a saved scene, as the {{ui:Render}} dialog's {{ui:Render}} button makes it, with your Render settings unless it asks for others (fast or high quality, size, samples, sky); a PNG it can look at, or a PNG, EXR or render file in a folder you allowed in Studio ([Render a picture](topic:render)) |
| `render_queue` | Export | Adds high-quality pictures to the Render dialog's queue (the view, or saved scenes) and runs the queue; the finished pictures go to a folder you allowed, or stay in the Render dialog's {{ui:Render queue}} for you. Needs WebGPU |
| `link_push` | Edit | Updates a model linked from another program (see [Keep a .3dm model live](topic:live-3dm-link)) |
| `link_status` | Read | Says whether a linked model is still here and when it last updated |
| `undo` | Edit | Takes back its own steps |

Solids an assistant makes come in as groups, so they never merge with what you drew. There is no tool that saves the model: saving stays with you, and exporting or rendering needs **Export** ticked. A render changes nothing in the model; rendering a saved scene moves the view to it, as {{ui:Scenes}} does.

## If something doesn't work

- **The assistant sees no ModelCraft tools:** check that the switch is on in this window, and that the window is open in Studio.
- **"needs the edit permission":** tick **Edit** under {{ui:Assistants}}, then ask again.
- **"401" or "token" errors:** the token changed (Studio restarted, or {{ui:New token}}). Copy the new one into the assistant's settings.

## See also

- [Recipes for AI assistants](common:assistants-recipes): worked examples, each with the tools it calls.
