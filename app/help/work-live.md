---
title: Model together with Live TeamWork
summary: What changes in ModelCraft while you are in a Live TeamWork session from CadCraft Studio: everyone's groups and components in one model, who can reshape what at once, your own undo, and joining from a browser on the same network.
section: tasks
order: 135
keywords: live, live teamwork, studio live, together, collaborate, session, share live, join, group, component, push pull, cursor, pointer, see each other, names, color, selection, undo, host
---

## What you will learn

What happens to a model while several people work on it at the same time. CadCraft Studio starts and joins the Live TeamWork session (Share, Join); this page is about the model itself.

## Work in your own group

Everyone edits the same model, and your own edits show at once. How changes merge depends on what you change:

- **Moving, naming, colouring or hiding placed groups and components** merges: two people moving two groups both keep their moves.
- **The geometry inside one group** (its edges and faces: drawing, push/pull, erasing) is one piece. When two people reshape the same group at the same moment, the second change is taken back and the status bar says so. Different groups never get in each other's way.
- **Loose geometry** (not in any group) is the model's own group: only one person can reshape it at a time.

So agree who works in which group, or make a group for each person's part before you start. Guides, dimensions and section planes merge one by one; scenes, tags, storeys and the drawing axes go to whoever changed them last.

## See each other

Everyone in the session has a color of their own. You see each person's pointer as an arrow in their color with their name beside it, at the depth of the view you are looking at, and a dashed box in their color round what they have selected.

Pointers, names and selections are only for the session: they are never saved in the file and never go into anyone's undo. They glide to where each person is, so they stay smooth on a slow connection too.

## Undo undoes your own work

{{key:Mod+Z}} undoes your own last step and leaves everyone else's alone. When someone changed the same thing since, nothing is undone and the status bar says who.

## Join from a browser

A teammate without Studio can scan the picture under the host's code with a phone, tablet or computer on the same network. ModelCraft opens in the browser and fills with the host's model once the host lets you in. An invite link lets someone join from another network: the host needs a Team Cloud Plan seat for the app, everyone else joins free, and the link works only while the host's session is open.

## When the session ends

Only the host saves the model. Everyone else keeps an unsaved copy: save it if you want to keep it.
