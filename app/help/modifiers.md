---
title: Modifier stacks
summary: Keep an editable Scale and linear Array recipe while preserving the source geometry.
section: tasks
order: 42
keywords: modifiers, stack, scale, array, repeat, bake, source, non-destructive
---

A modifier stack keeps the original geometry and an ordered recipe. Changing the recipe changes the result; editing the source changes every generated copy immediately.

## Start a stack

1. Select a group or component containing ordinary edges and faces, without nested groups or a stretch recipe.
2. In {{ui:Entity info}}, find {{ui:Modifier stack}} and choose {{ui:Add Scale}} or {{ui:Add linear Array}}.
3. For Scale, enter positive red, green and blue scale factors. A factor of 2 doubles that direction.
4. For Array, enter {{ui:Copies (including original)}} and the red, green and blue spacing between copies. Spacing accepts the model's units or explicit units such as `30cm`; negative spacing works too.

The result becomes a component. Ordinary move, rotate and scale tools still position the whole result.

## Order matters

Operations run from top to bottom in the source's local axes, about its origin. Array with three copies spaced 3m apart, followed by red Scale of 2, places the copies 6m apart. Scale followed by that Array keeps the spacing at 3m.

Use {{ui:Move earlier}}, {{ui:Move later}}, {{ui:Enabled}} or {{ui:Remove modifier}} beside each operation. Removing every operation shows the unchanged source. Each parameter or stack change is one undo step.

## Edit source or bake

- {{ui:Edit source}} opens the original through the first generated copy, in place. Changes show in every copy. Closing it returns to the enclosing model, skipping the generated level.
- {{ui:Bake modifiers}} replaces the result with independent edges and faces and removes the recipe, in one undo step. You can then open and edit the result normally. Bake does not perform a solid union: overlapping copies remain overlapping geometry. Hidden content remains hidden; a hidden tag inside the source becomes hidden geometry when baked.
- Copies share the same recipe. Use {{ui:Make unique}} before changing or baking only one copy. A unique recipe still refers to the same source.

## Saving and limits

The recipe, source and evaluated placements are saved together. Purge unused keeps sources that a stack needs. Readers that ignore recipe metadata can still display the ordinary placements; saving with such a reader may lose the recipe.

The first version supports positive Scale factors and linear Arrays, with at most 32 operations and 1,000 resulting copies. Very small or large combined transforms are refused to keep the result within the model's numeric limits. Modifier stacks and component stretching cannot be combined. Bend, taper and topology-changing modifiers are not included.
