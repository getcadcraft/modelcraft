---
title: Digital twin: pictures, video and other programs
summary: Three ways to get a run out, from a quick video to a path-traced clip or animated USD.
section: tasks
order: 30
keywords: video, render, path tracer, usd, unreal, blender, animation, proposal
---

## Three levels of picture

1. **The live view.** {{ui:Draw as equipment}} shows frames, rollers, legs, machines, robots and cartons, and {{ui:Save a video of this view}} records it. Fast, shaded drawing. The shapes are generic, for the picture.
2. **The path tracer.** {{ui:Put the run in the model}} adds the equipment as real geometry and the loads on the animation timeline. Open {{ui:Render}} for path-traced stills and video. This is real quality, but not real time. Robot arms do not move in this version of the clip.
3. **Another program.** {{ui:Save animated USD}} writes a `.usda` file with the equipment, materials and every load's movement. It is checked against OpenUSD. Programs that read USD can open it, including Unreal's USD Stage and Blender, and any render engine you already own can take over from there. We have not yet opened it in Unreal or Blender ourselves.

{{ui:Start at}} and {{ui:Seconds}} set which stretch of the run goes out. Up to 150 loads go in the model or the USD file; the message says if any were left out.

## What this does not do

Real-time rendering at the quality of a game engine is not available in the app. For that, use the USD file in your own copy of a game engine.
