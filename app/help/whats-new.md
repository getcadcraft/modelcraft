---
title: What's new in 0.6
summary: An animation timeline, rendered videos and walkthroughs from scenes, review in a VR headset with issues, a guided first model, print prep in the 3D printing check, and scenes with a locked camera.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.6, version, new features, animation, timeline, keyframe, video, render video, webm, walkthrough, scenes, vr, virtual reality, headset, webxr, issues, bcf, guided first model, beginner, 3d printing, print prep, fix, printer bed, lock camera, presentation view, interface size, toolbar, pen, touch, indonesian
---

This is what changed in ModelCraft 0.6, compared with 0.5. Models can move now: animate them, render the result as a video, and walk through them in a headset.

## New

### Animation and video

- **Animation timeline.** {{ui:Views}} › {{ui:Animation timeline}} opens a timeline under the view. Set keys for the camera and for groups and components, and they move smoothly between them (smooth, steady, slowing into a key, or holding). Drag keys along the timeline, play it in the view, or turn on {{ui:Auto key}} to key whatever you move. See [Animate the camera and objects, and render a video](topic:animation).
- **The animation is kept apart from the model.** It is saved in the file but outside the model's undo: the timeline has its own {{ui:Undo}} and {{ui:Redo}}. Closing the timeline puts the model back in its first pose.
- **Render a video.** {{ui:Export}} › {{ui:Render video…}} renders the animation frame by frame with the same sky, sun, materials and lamps as a rendered picture, at 480p, 720p, 1080p or the view's shape, 24 to 60 frames a second. It saves a WebM video, or every frame as a PNG picture. It is made on your own computer; nothing is uploaded. See [Render the video](topic:animation#render-the-video).
- **Walkthrough videos from scenes.** With two scenes or more and no animation of your own, {{ui:Render video…}} moves the camera through the scenes in order, pausing at each. See [Save views as scenes](topic:scenes).

### Review in VR

- **Review in a VR headset.** {{ui:Views}} › {{ui:Review in VR}} puts you inside the model at full size, standing where the view's camera is. Jump to any floor, turn in 30° steps, measure between two points, cut walls open or make a plan cut over a floor, and see the model as a table-top model. Leaving VR puts the view on screen where your head was. It works with a headset the browser drives; nothing is uploaded. See [Review the model in a VR headset](topic:vr-review).
- **Issues.** Place an issue where you point in VR, each with a picture of what you saw. Issues are listed with their pictures, shown from where they were placed, saved in the file and saved as BCF for BIM review programs. See [Place an issue](topic:vr-review#place-an-issue).
- **VR in a live session.** Everyone in VR sees the others' heads, hands and where they point, and edits arrive as they are made. See [With others, live](topic:vr-review#with-others-live).

### Getting started and 3D printing

- **A guided first model.** New to 3D? Click {{ui:Guided first model}} on the Start modeling card, or {{ui:Views}} › {{ui:Guided first model}}: four steps from a rectangle to a box that is ready for a 3D printer. The guide watches the model, so it moves on however you do each step, and {{ui:Undo}} takes it back a step. It never opens by itself. See [Let ModelCraft guide your first model](topic:getting-started#let-modelcraft-guide-your-first-model).
- **Print prep in the 3D printing check.** Each problem now says what is wrong, why it matters and what to do, and the groups with problems are listed with {{ui:Show}}. {{ui:Fix what can be fixed}} closes flat holes, removes inner faces and turns faces the right way in one undo step, then checks again. See [Fix the problems](topic:print-3d#fix-the-problems).
- **Your printer's bed.** Choose your printer's bed in {{ui:Settings}} to be told when a model won't fit. See [Your printer's bed](topic:print-3d#your-printers-bed).

### Scenes

- **Lock a scene's camera.** Click the padlock in the {{ui:Scenes}} list. {{ui:Update}} then keeps the view (the style and what is hidden still update), so renders from that scene stay comparable as the design changes. See [Lock a scene's camera](topic:scenes#lock-a-scenes-camera).

## Fixed

- In the Render dialog, the sun's date and time boxes were hard to read in the model theme while "Use another date and time" was off. They are readable now.
- Presentation view ({{key:Shift+P}}) is clean inside an open group too: the rest of the model no longer fades. See [Presentation view](topic:styles-shadows#presentation-view).

## In every app

- **The toolbar can't get lost.** While full screen hides the bars, a small {{ui:Show bars}} tab stays at the top of the window. {{ui:Settings}} › {{ui:General}} › {{ui:Reset the layout}} puts the toolbar, panels, screen mode and menu style back to how the app starts (your interface size and panel text size stay). In CadCraft Studio, its own {{ui:Settings}} has {{ui:Reset the layout in every app}}. See [Where did my toolbar go?](common:lost-toolbar).
- **A menu on the toolbar.** Right-click the toolbar, or press and hold it, to arrange it, lock it so nothing moves by accident, or reset it. Ribbon menu styles collapse to their tab names: a tab opens its tools for one command; double-click a tab or use the pin to keep the ribbon open. See [The toolbar's own menu](common:lost-toolbar#the-toolbars-own-menu).
- **Interface size.** {{ui:Settings}} › {{ui:General}} › {{ui:Interface size}} makes the bars, toolbars, panels and dialogs 80 % to 140 % of normal, for this app only, so two apps side by side on one monitor both fit. The drawing keeps its own zoom. See [Everything is too big or too small](common:lost-toolbar#everything-is-too-big-or-too-small).
- **Pen and touch.** On a tablet or a touch-screen laptop with a pen, your palm is ignored while you draw, fingers can be left to moving the view, a two-finger tap undoes and a three-finger tap redoes, and the pen's side button and eraser end can undo or redo. {{ui:Settings}} › {{ui:General}} › {{ui:Pen and touch}}. See [Draw with a pen on a tablet](common:pen-and-touch).
- **Live sessions can grow past 20 people.** In CadCraft Studio, when more people knock than the usual 20, Studio tells you what to expect and you choose {{ui:Allow anyway}} for this session or {{ui:Keep it at 20}}. {{ui:Recent edits}} in the Live panel shows who changed what. See [Work together live](common:work-together-live#when-many-people-join).
- **Bahasa Indonesia** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}: a machine-made draft of every word, not yet reviewed by a native speaker. **Spanish (Mexico)** is still a draft too. Help topics are in English.
- **Installers are still not signed** (signing comes next, in 0.7), and CadCraft Studio is not in an app store yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. There is no iPad or iPhone build yet.
- **Fixed:** with the bars hidden, {{ui:Arrange the toolbar…}} in Settings was grayed out, and from the keyboard it lost its place after the first move.

## Not in this version yet

- VR has been tested with a headset emulator only, not yet with a real headset. Inside CadCraft Studio, {{ui:Review in VR}} shows only where the system's web view offers it. Only people in VR show in the headset, and typing in VR isn't built yet.
- Video speed hasn't been measured on a real graphics card, so render a short video on your own computer first. Videos use the fast renderer, not {{ui:High quality}}. Without the browser's own video encoder, the frames are saved as PNG pictures in a ZIP.
- High quality (path traced) pictures on the graphics card.
- 3D printing beyond the check: a supports preview, a beginner toolbar, a wall-thickness check, hollowing and mesh repair aren't built yet.

Everything else is in [What is not built yet](topic:not-built-yet).
