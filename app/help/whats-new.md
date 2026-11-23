---
title: What's new in 0.10
summary: Undo and glTF export on big models no longer freeze the window, render presets give a picture with no settings to learn, and massing options at concept stage come with an option comparison for client packs.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, big models, large model, freeze, undo, gltf, glb, export, render, render presets, scene, exterior, interior, massing, massing options, concept stage, survey points, ground surface, boundary, building lines, option comparison, client pack, four views, pro layouts, trackpad, swipe, tour
---

This is what changed in ModelCraft 0.10, compared with 0.9. It is a small release for this app: big models stay responsive, and render presets and massing options are new.

## New

### Big models stay responsive

- On a 500,000-face model, undo and glTF export now run off the page, so the window no longer freezes (the longest pause was 2.3 s and 1.5 s before, none after). See [Export a model for other programs](topic:export-model).

### Pictures

- **Render presets.** Pick a scene (Exterior, Interior and more) and get a picture with no settings to learn. See [Scene presets](topic:render#scene-presets-a-good-picture-in-one-click).

### Concept stage

- **Massing options** from survey points, a ground surface, the boundary and building lines, with an option comparison table (area and cost) for client packs. See [Send massing to BimCraft](topic:massing-to-bimcraft).

## Fixed

- The four-views command was in no menu.
- Undo of an edit that made an id-keyed list left the key behind.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the view. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** in the 2D views.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- The picture quality of the render presets has not been checked on a real graphics card (our test server renders in software).
- A stepped massing solid arrives as its base outline at full height, marked simplified. ModelCraft has no presentation pack of its own.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
