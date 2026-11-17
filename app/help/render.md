---
title: Render a picture of the model
summary: Make a picture that looks like daylight: sky, sun from your model's place and date, soft shadows, glass and metal looks, then save it as a PNG.
section: tasks
order: 112
keywords: render, preset, presets, scene preset, interior, exterior, section view, night, one click, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, high quality, photo, photoreal, realistic, picture, image, png, still, sky, sun, daylight, shadows, soft shadows, ambient occlusion, glass, metal, glossy, materials, exposure, brightness, overcast, dusk, studio, presentation, fog, haze, mist, smoke, cloud, volume, light shafts, god rays, caustics, adaptive sampling, noise
---

{{ui:Render a picture…}} makes a picture of the view that looks like daylight rather than a drawing: a sky, the sun where your model's place and date put it, soft shadows, light from the whole sky that darkens corners and gaps, and colors that can look like glass, metal or gloss paint. The model is not changed.

## Render the view

1. Set up the view the way you want the picture: orbit, zoom, pick a [scene](topic:scenes), hide what should not show. The picture uses the view's own camera.
2. Click {{ui:Export}} in the {{ui:File}} group, then {{ui:Render a picture…}}.
3. Pick a {{ui:Scene}} if the one pressed is not what you want (see [Scene presets](topic:render#scene-presets-a-good-picture-in-one-click)), choose the {{ui:Size}}, then click {{ui:Render}}.

   The picture fills in as it renders and gets smoother with each pass. {{ui:Stop}} (or {{key:Esc}}) ends it early and keeps the picture so far.

4. Click {{ui:Save}} to download it (a PNG unless {{ui:Save as}} says otherwise).

:::tip
Start with {{ui:Draft}} at {{ui:The view's size}} to check the camera and the look, then render {{ui:Good}} or {{ui:Best}} at a bigger size for the final picture.
:::

## Scene presets: a good picture in one click

The top of the dialog has four {{ui:Scene}} buttons. Each sets the sky, the brightness, the ground, the edge lines, the quality and the sun in one click, so there is nothing to learn before the first picture. Click one, then {{ui:Render}}.

| Scene | What it sets | Use it for |
|---|---|---|
| {{ui:Exterior}} | Clear sky, the model's own sun, ground on | The building from outside |
| {{ui:Interior}} | Overcast sky (even light, no hard sun patches), half a stop brighter | A view from inside a room |
| {{ui:Section view}} | White studio, no ground, edge lines in the fast render | A model cut by a section |
| {{ui:Night}} | The sun down (midnight in midwinter for the site's half of the world), one stop brighter | Lamps lighting the model. With no lamps the picture is dark |

- {{ui:Pick for this view}} chooses for you: {{ui:Section view}} when a section cut is on, {{ui:Interior}} when the camera is inside the model, otherwise {{ui:Exterior}}. The first time you open the dialog it starts this way by itself.
- Every setting stays below and can be changed. Once you change one the scene sets, no button is pressed and the line under the buttons says the settings are your own. Click the scene again to put its values back.
- A scene does not touch the engine, the mode, the size, the materials, the camera or the lamps.

:::note
The scenes give the same values in ModelCraft and BimCraft. How the finished picture looks depends on your model and your graphics card.
:::

## Settings

| Setting | What it does |
|---|---|
| {{ui:Size}} | The view's size, twice the view's size, Full HD, 4K or a square. Fixed sizes keep the view's camera and show more or less at the sides |
| {{ui:Mode}} | {{ui:Fast}}, or {{ui:High quality (path traced)}} (below) with its {{ui:Time limit}} |
| {{ui:Quality}} | How many passes (or, in high quality, samples) are averaged: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. More passes give smoother shadows and edges and take longer |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (soft light, faint shadows), {{ui:Dusk}} (low, warm light) or {{ui:White studio}} (a plain white background) |
| {{ui:Sun}} | The sun comes from the date, time and place in {{ui:Style}} › sun. Tick {{ui:Use another date and time for this picture}} to try another time without changing the model's style |
| {{ui:Brightness}} | Lighter or darker, in steps (stops) |
| {{ui:Ground under the model}} | A ground that takes the shadows and fades into the horizon. Turn it off for a model that floats |
| {{ui:Draw edges}} | Draws the model's edges thinly over the picture, for a drawn look |

When the sun is below the horizon at the chosen time it is night: the sky goes dark and the model's [lamps](topic:lights) light it. The dialog says so.

The settings are saved in the `.modelcraft` file, so the next picture of the same model starts where you left off.

## Make colors look like glass or metal

Under {{ui:Materials}}, every color on screen has a look: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} or {{ui:Frosted glass}}. {{ui:Unpainted faces}} are the faces with no color of their own.

To make windows glass, [paint](topic:paint) the window panes one color, then set that color to {{ui:Glass}}. Glass lets the sky and what is behind it show through, tinted by its color, and reflects the sky.

:::note
In the {{ui:Fast}} mode, glass and metal reflect the sky, not the rest of the model, and light does not bend through glass. The {{ui:High quality (path traced)}} mode below does both.
:::

## High quality

Choose {{ui:Mode}} › {{ui:High quality (path traced)}} for a picture that follows light the way a camera sees it:

- light bounces between surfaces, so a room lit through a window, or by a lamp, is lit all round and colors bleed onto their neighbors;
- glass is real glass: light bends through it and it reflects the model;
- metal and polished surfaces reflect the rest of the model;
- light panels light as panels, with soft shadows.

It is much slower than {{ui:Fast}}: each pass traces every pixel's light again. The picture starts grainy and clears as samples add up, so start small ({{ui:The view's size}}, {{ui:Draft}}) and choose a {{ui:Time limit}}: when it runs out, the picture so far is kept. {{ui:Stop}} keeps it too. The first pass waits while the browser prepares the path tracer.

Where the browser has WebGPU, the path tracer is CadCraft's own and runs on the graphics card; the line under the picture says {{ui:Path traced on the graphics card (WebGPU)}}. After {{ui:Stop}} or the time limit, {{ui:Resume}} carries on with the same picture until it has all its samples; changing a setting or pressing {{ui:Render}} again starts afresh. Without WebGPU the picture is path traced with WebGL instead (the line says so) and {{ui:Resume}} is not offered.

:::linux
Firefox and most Chrome setups on Linux have no WebGPU yet, so high quality uses WebGL there.
:::

In this mode edges are not drawn, library textures show their color and roughness but not their bumps (a [material made with nodes](topic:shading#in-high-quality-pictures) shows its normal and bumps), and a section cut is made on the model before the picture starts.

{{ui:Denoise (clears the grain left after the samples)}} is on by default: when the picture is done, or stopped, the grain that is left is cleared by a neural network made for this (Intel Open Image Denoise's published network, run on your own computer: on the graphics card, else on the processor). A picture with few samples comes out clean; {{ui:Show}} › {{ui:The picture before denoising}} shows it as rendered.

## Render in the view

The {{ui:Render}} workspace runs the path tracer in the view itself: orbit, edit the model or change a light and it starts again at once. {{ui:Region}}: drag a rectangle and only it renders; {{ui:Whole view}} goes back. {{ui:Focus}}: click what should be sharp, and depth of field focuses there. {{ui:Detail}} sets how many of the view's pixels it renders (fewer is faster). {{ui:Pause}} stops and goes on. It needs WebGPU: without it the workspace says so, and {{ui:Export}} › {{ui:Render a picture…}} still works.

## Skies and light profiles on the graphics card

With WebGPU, high quality has two more skies:

- {{ui:Physical sky}} works the daylight out from the sun's height: a deep blue overhead, a pale band at the horizon, and a sun that turns warmer and dimmer as it gets low. {{ui:Haze}} goes from a very clear day (2) to a hazy one (10).
- {{ui:Sky picture (HDRI)}} lights the model with a panorama picture of a real place. {{ui:Choose a picture…}} takes an equirectangular `.hdr` or `.exr` file; {{ui:Turn}} turns it round the model and {{ui:Picture brightness}} makes it brighter or darker. The picture carries its own sun, so the model's sun is not added. It is kept only while the page is open: after reopening, choose it again.

Each lamp in the {{ui:Lamps}} list can take a maker's light profile: {{ui:IES profile…}} reads an IES (LM-63) file and the lamp then throws its light the way that fitting does (a narrow downlight, a wall washer). Every lamp with that name uses it, and the lamp keeps its own brightness. Click the profile's name to stop using it.

Windows of clear glass help the sky's light find its way into a room, so indoor pictures under a sky clear sooner.

The {{ui:Fast}} mode and the WebGL path tracer show the {{ui:Physical sky}} and {{ui:Sky picture (HDRI)}} as a clear sky and ignore light profiles.

## The camera

{{ui:Camera}} sets the picture up like a photograph:

- {{ui:Exposure}}: keep the {{ui:Brightness slider}}, or choose {{ui:Camera settings}} and set the {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} and {{ui:ISO}} as on a camera; the EV next to them is the usual exposure value. f/16 at 1/100 s and ISO 100 matches a sunny day; a darker scene wants a wider aperture, a slower shutter or a higher ISO. This works in every mode.
- {{ui:Depth of field}} blurs what is nearer or farther than the {{ui:Focus distance (m)}} as a lens of that f-stop would (leave it empty to focus on what is in the middle of the view); {{ui:Aperture shape}} gives out-of-focus highlights a round or bladed shape.
- {{ui:Two-point perspective (vertical lines stay vertical)}} levels the camera and shifts the picture, as an architectural tilt-shift lens does, so walls do not lean when you look up or down at a building.
- {{ui:White balance}} sets which light colour shows as white: lower (for example 3000 K) for warm lamp light, higher for shade and overcast days.
- {{ui:Projection}}: {{ui:360° panorama}} makes a 2:1 picture of everything round the camera for panorama viewers; {{ui:360° stereo panorama}} stacks a left-eye and a right-eye panorama for headsets; {{ui:Cube map (6 faces)}} makes six square views in a 3 × 2 grid. The width comes from {{ui:Size}}.

Projection, depth of field, two-point perspective and white balance need the path tracer on the graphics card (WebGPU), so they show only in {{ui:High quality}}.

## Finish the picture

{{ui:Picture}} grades the high-quality picture like a photograph, and every control changes the finished picture at once, without rendering again:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (the picture as before), {{ui:AgX}} (softer, keeps colour in very bright light), {{ui:Filmic}} (a gentle film curve) or {{ui:Standard}} (plain, bright light clips to white).
- {{ui:Contrast}} and {{ui:Highlight compression}} (brings back detail in very bright parts).
- {{ui:Bloom}} (a soft glow round bright light), {{ui:Glare}} with its {{ui:Glare streaks}} (star rays from the brightest points) and {{ui:Vignette}} (darker corners).
- {{ui:Colour table (.cube)…}} applies a colour grade from a `.cube` file, with its {{ui:Colour table strength}}; like a sky picture it is kept only while the page is open.

## Save the picture

{{ui:Save as}} next to {{ui:Save}} chooses the file: {{ui:PNG}}, {{ui:JPEG}} or {{ui:WebP}} for sharing (JPEG and WebP only where the browser can write them), and after a high-quality render on the graphics card also:

- {{ui:PNG, 16 bits}}: the graded picture with finer steps between shades, for printing or further editing.
- {{ui:EXR, every layer (32-bit float)}}: the picture as rendered (linear light, no grade) with every render element and light group as its own layer, for compositing programs.
- {{ui:Render file (.ccrender, to grade again later)}}: everything the dialog needs to mix and grade the picture again. {{ui:Open a render file…}} brings it back, with its mix and its grade, without rendering.

## Mix the lights after the render

Turn on {{ui:Light mixing (change each light's colour and brightness after the render)}} before you press {{ui:Render}}. When the picture is done (or stopped), {{ui:Mix the picture}} lists its lights in groups: the sky, the sun, and the lamps by name (every lamp with the same name is one group). Switch a group off, give it a colour, or make it brighter or darker, and the picture changes at once, without rendering again. {{ui:Save mix}} keeps the mix under a name to choose again later; {{ui:As rendered}} goes back to the picture as it was made. {{ui:Save}} saves the mixed picture.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} keeps the picture's parts as well. {{ui:Show}} switches the view to one of them: the surface colours (albedo), the normals, the depth, the diffuse, specular and transmitted light (each direct and indirect), what glows and the sky, and a colour per object or per material for making masks.

Both keep extra layers on the graphics card. At large sizes a graphics card may not have room; the dialog says so and a smaller size works.

## The render queue

After a high-quality setup, {{ui:Add this picture to the queue}} under {{ui:Render queue}} keeps the picture as it is set now; the video dialog's {{ui:Add this animation to the queue}} does the same for a whole animation, path traced frame by frame. {{ui:Start the queue}} renders them one after another on this computer, and {{ui:Save}} beside each finished one downloads it. Closing the page keeps the queue: open the same model and it goes on where it stopped. The queue needs WebGPU.

## Fog, smoke, noise and caustics

These live in {{ui:Fog, smoke and noise}} and work in {{ui:High quality}} on the graphics card; the other engines leave them out.

- {{ui:Fog and haze}} fills the air up to a height with a mist that the sun, the sky and lamps light. {{ui:How far you can see, in meters}} sets how thick it is (about 100 m is a light haze, 20 m a thick fog), {{ui:Fog height above the ground, in meters}} is where it ends, and {{ui:Light shafts}} is how much the mist glows toward the light. Sunlight leaves the fog at its top, so where sun comes through a window or between buildings you see it as shafts of light.
- {{ui:Smoke or cloud}} adds one volume of smoke or cloud lit like the fog. {{ui:Kind}} is a {{ui:Cloud}}, a {{ui:Smoke column}} or {{ui:From a volume file (.ccvol)}}, CadCraft's own grid format. {{ui:Detail}} and {{ui:Variation}} change a made cloud or column, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} and {{ui:Turn}} place it (it starts in the middle of the model), {{ui:Thickness}} makes it denser, {{ui:Forward glow}} makes it brighter toward the light, and {{ui:Color}} tints it. A volume file is kept only while the page is open, like a sky picture.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} gives no more samples to pixels that have settled, so the rest of the picture finishes sooner. {{ui:Noise to accept}} is how much grain is left when a pixel stops. The line under the picture says how many samples a pixel got on average.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} traces light from the lamps and the sun, so the bright patch under a glass ball or a mirror's light on a wall comes out clean instead of grainy. It is off while fog, smoke, {{ui:Mix the lights after the render}} or render elements are on, and it is made for pictures, not for 360° pictures, animations or the Render workspace.

## How long it takes

The picture is made on your own computer, by its graphics card; nothing is uploaded. How long it takes depends on that card. Time grows with the passes and the pixels: {{ui:Best}} has 16 times the passes of {{ui:Draft}}, and a 4K picture has about four times the pixels of Full HD. A computer without a graphics card still renders, more slowly.

:::note
If the dialog says the browser can't render pictures, the browser has no WebGL 2. Update it, or turn on hardware acceleration in its settings.
:::
