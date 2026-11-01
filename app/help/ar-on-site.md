---
title: See the model on site with an Android phone (AR)
summary: Hold up an Android phone with Chrome and see the model at full size over the camera, lined up on the building by two points you stand at, with an x-ray lens and a quick re-check on the next visit. For looking, not for setting out.
section: tasks
order: 117
keywords: ar, augmented reality, phone, android, chrome, webxr, on site, site, camera, full size, x-ray, align, line up, re-check, arcore
---

{{ui:View on site (AR, phone)}} in the {{ui:Views}} menu shows the model at its real size over the phone's camera. It works on an **Android phone with Chrome**, on a secure (https) page, where the phone supports AR. On an iPhone or iPad, a computer, or an Android app that only shows a web page, the item says why it cannot start; use the 3D view there, or open this page in Chrome on the phone.

**A phone is for looking.** Do not measure, set out, or cut anything from what the screen shows: the phone drifts as you walk, and the pointing error grows with distance from the two points you lined up on (a few centimetres near them, more far away). Nothing here is survey grade.

## Line the model up

1. Open the model on the phone and choose {{ui:View on site (AR, phone)}}. Allow the camera.
2. The panel at the bottom names the first point (a ground corner of the model). Stand there on site, aim the green ring at the ground, and tap {{ui:Place point}}.
3. Walk to the second point, at least half a metre away (the further apart, the better the fit), and do the same.
4. The model appears at full size, turned and moved to fit the two places. The panel gives how well the two points agree.

{{ui:Start over}} clears the points. The alignment is kept in the model file, so the next time you open the model on site it starts lined up.

## X-ray lens

{{ui:X-ray lens}} shows the whole model inside a box in front of the phone (about a metre and a half wide and three metres deep) and only a faint ghost of it elsewhere, so you can look at what is behind a wall without losing the real wall.

## The next visit

Stand at the first point and tap {{ui:Re-check}}, then {{ui:Place point}}. Under 5 centimetres off, the lining up is kept. Up to half a metre off, the model moves by the difference. More than that, the panel asks you to point at the two places again.

## Leave

{{ui:Leave AR}} ends the session. The camera picture stays in the browser: nothing is uploaded.
