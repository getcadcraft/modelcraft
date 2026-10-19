---
title: Animate the camera and objects, and render a video
summary: Set keys for the camera and for groups and components on a timeline, play them in the view, and render the animation to a WebM video with the renderer's sky, sun and materials.
section: tasks
order: 114
keywords: animation, animate, timeline, keyframe, keys, key frame, camera path, fly through, flythrough, walkthrough, walk through, video, movie, film, webm, render video, frames, frame rate, fps, playhead, auto key, ease, smooth, hold, scenes, png sequence, motion
---

The **timeline** moves the camera and any group or component over time. You set **keys** (where something is at a given moment); ModelCraft moves it smoothly from key to key. Play it in the view, then render it to a video with the same sky, sun, materials and lamps as [a rendered picture](topic:render).

## Open the timeline

Click {{ui:Views}} in the {{ui:Camera}} group, then {{ui:Animation timeline}}. The timeline opens under the view: the controls along the top, then a **Camera** row and a row for each group or component that moves. The diamonds are keys; the red line is the **playhead**, the moment shown in the view.

Drag the slider (or click in a row) to move the playhead. {{ui:Play}} plays from the playhead; {{ui:Previous key}} and {{ui:Next key}} jump between keys.

## Move the camera

1. Move the playhead to where the shot starts (0 s), set up the view, and click {{ui:Key camera}}.
2. Move the playhead later (say 4 s), orbit, pan or walk the view to the next position, and click {{ui:Key camera}} again.
3. Add as many keys as you like, then {{ui:Play}}.

The camera passes smoothly through every key and starts and ends at rest.

:::tip
Already have [scenes](topic:scenes)? {{ui:From scenes}} makes the camera's path from them: it holds at each scene, then moves to the next. If the timeline has no keys at all, {{ui:Render video…}} does this by itself, so two scenes or more are enough for a walkthrough video.
:::

## Move a group or component

1. Select the group or component (only whole groups and components move; [make a group](topic:groups-components) first).
2. At 0 s, click {{ui:Key selected}}.
3. Move the playhead later, [move, rotate or scale](topic:move-copy) the group to where it should be, and click {{ui:Key selected}} again.

It slides, turns and grows between its keys. Turns take the short way round.

**Auto key** saves step 3's click: while {{ui:Auto key}} is on, a selected group or component you move, rotate or scale gets a key at the playhead by itself (and, the first time, a key at 0 s where it was).

:::note
Moving an animated group without a key only lasts until the playhead moves: the next time you play or scrub, it goes back where its keys put it. The status bar says so. Press {{ui:Key selected}} to keep it.
:::

## Change keys

- **Choose a key** by clicking its diamond: the playhead goes to it.
- **Move a key** by dragging its diamond along its row, or with {{key:Left}} and {{key:Right}} (one frame; with {{key:Shift}}, ten).
- **Delete** with {{ui:Delete key}} (the chosen key, or every key at the playhead) or {{key:Delete}} on a chosen diamond.
- **How it moves on**, for the chosen key: {{ui:Smooth}} (a curve through the keys around it), {{ui:Steady}} (a straight line at one speed), {{ui:Slow in and out}} (comes to rest at this key) or {{ui:Hold}} (stays put until the next key).
- **Length (s)** sets how long the animation is; a key set after the end makes it longer. To shorten it, move or delete the keys past the new end first.
- The **×** on a group's row stops animating it.

The timeline has its own {{ui:Undo}} and {{ui:Redo}}: the model's undo ({{key:Mod+Z}}) changes the model, not the keys. The animation is saved in the `.modelcraft` file. Closing the timeline puts moving groups back at their first pose.

## Render the video

1. Click {{ui:Render video}} on the timeline (or {{ui:Export}} › {{ui:Render video…}}).
2. Choose the {{ui:Size}}, the {{ui:Frame rate}}, the {{ui:Quality of each frame}} and the {{ui:File}}.
3. Click {{ui:Render video}}. Each frame shows as it is made, with the time left.
4. When it is done, click {{ui:Save video}}.

{{ui:Stop}} (or {{key:Esc}}) ends early; {{ui:Save video}} then keeps the frames already made as a shorter video.

The sky, sun, materials, lamps and brightness are the ones set in {{ui:Render a picture…}}: set them there first, checking a still. Each frame is rendered on this computer; nothing is uploaded.

| Setting | What it does |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, or the view's own shape (up to 1920 pixels wide) |
| {{ui:Frame rate}} | 24, 25, 30 or 60 frames a second. Twice the frames take twice as long |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 passes), {{ui:Draft}} (16) or {{ui:Good}} (64): more passes give smoother shadows and edges |
| {{ui:File}} | {{ui:WebM video}}, or {{ui:PNG pictures, one per frame (ZIP)}} for video editors (and for browsers with no video encoder) |

:::tip
A 10-second video at 30 frames a second is 301 frames. Try {{ui:Quick}} at 480p first to check the motion, then render {{ui:Draft}} or {{ui:Good}} at a bigger size.
:::

WebM plays in browsers and VLC, and video editors convert it. Videos use the fast renderer; the high-quality path-traced mode makes pictures only.

:::firefox safari
Rendering a video needs a browser that encodes video itself (WebCodecs): recent Chrome, Edge, Firefox and Safari 17 do. Without it, choose {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Things to know

- Only whole groups and components move. Faces, edges, the sun's time and the style do not change over time yet.
- {{ui:Export animation}} under [Scenes](topic:scenes) still records the view as it is on screen, in real time; {{ui:Render video}} renders each frame with sky, shadows and materials.
