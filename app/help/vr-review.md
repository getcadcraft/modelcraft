---
title: Review the model in a VR headset
summary: Walk the model at full size in a VR headset: jump around, turn, measure, cut it open, place issues with a picture, see it as a table-top model, and meet the others of a live session.
section: tasks
order: 116
keywords: vr, virtual reality, headset, webxr, xr, immersive, quest, oculus, vive, index, pico, walk through, walkthrough, teleport, design review, review, measure, section, cut, issue, issues, bcf, table top, scale model, presence, avatars, live, together
---

{{ui:Review in VR}} puts you inside the model with a VR headset, at full size. You stand where the view's camera is, on the floor below it, facing the same way. Nothing is uploaded: the headset shows what the browser draws on this computer (or in the headset's own browser).

## What you need

- A headset the browser can drive (WebXR): a standalone headset's own browser, or Chrome or Edge on a PC with a headset connected.
- ModelCraft open on a secure page (https), as it is on this site.

When there is no headset, {{ui:Review in VR}} is greyed out and says why.

## Start

1. Set up the view where you want to start: in a room, or outside looking at the building.
2. Click {{ui:Views}} in the {{ui:Camera}} group, then {{ui:Review in VR}}.
3. Put on the headset.

The menu is on the back of your left hand. Point at it with the right controller and pull the trigger to pick a button. (With one hand only, the menu floats in front of where you started.)

## Move around

- **Jump:** in {{ui:Move}}, point at a floor and pull the trigger; you land there. Or push the stick forward to aim, and let go to jump. You can only land on floors and ground (surfaces facing up), never on a wall.
- **Turn:** push the stick left or right: you turn 30° each time.
- **Walk:** in your play area, simply walk.

## Measure

Pick {{ui:Measure}}, then pull the trigger on two points. The distance shows between them, in the model's units. A point near a corner snaps to the corner.

## Cut it open

Pick {{ui:Section}} and pull the trigger on a surface:

- on a wall (or anything not a floor): everything between you and that surface is cut away, so you see in. This works best from outside, or across a room;
- on a floor, from above: a plan cut 1.2 m over that floor, so the walls show their lower part.

{{ui:Clear}} takes the cut and the measurements away. If a section plane cuts the model in the view when you start, the headset starts with it.

## Place an issue

Pick {{ui:Issue}} and pull the trigger where the problem is. A numbered pin marks it, and ModelCraft keeps the issue with a picture of what you saw and where you stood. When you leave VR, the issues are in the {{ui:Issues}} list on the right:

- the eye button shows the issue from where it was placed;
- {{ui:Save as BCF}} downloads them all as a BCF file, which BIM review programs open (camera and picture included);
- they are saved in the `.modelcraft` file too.

Add a comment to an issue after you leave VR, in a BCF program: typing in the headset is not built yet.

## See it as a table-top model

{{ui:Table top}} shrinks the model to fit a table in front of you; walk round it, or turn it with the stick. {{ui:Full size}} puts you back where you were.

## With others, live

In a [live session](topic:work-live), everyone in VR sees the others as a head and two hands in their own color, with their name, and a dot where each one points. Edits anyone makes reach your headset within a moment. People at the desk are not shown in the headset yet.

## Leave

Pick {{ui:Leave VR}} (or take the headset off and end it there). The view on the screen moves to where your head was.

:::note
Tested with a headset emulator, not yet on every headset. A large model can make the headset stutter: hide what you don't need first ([hide and isolate](topic:hide-isolate)).
:::
