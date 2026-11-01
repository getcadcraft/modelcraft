---
title: Scale by factors and shrinkage allowance
summary: Scale a selection by a factor for each axis about a point you choose, or make a pattern bigger by the percent a cast part will shrink.
section: tasks
order: 33
keywords: scale, non-uniform, factor, percent, stretch, shrinkage, shrink, casting, pattern, foundry, allowance, resize
---

The Scale tool ({{key:S}}) scales evenly or drags a grip to stretch one or two directions. **Scale by factors…** (Tools menu, or the Modify group) is the typed form: a number for each of the three axes.

1. Select edges, faces, groups or components.
2. Open {{ui:Scale by factors…}}. Type a factor for red, green and blue. A factor can be `1.015`, `101.5%` or `+1.5%` (and `-2%` for smaller). {{ui:Same on all three axes}} copies the first to the other two.
3. Choose what **stays put**: the middle of the selection, its lowest corner, the middle of its bottom, or the origin.
4. The line under the fields shows the size now and after. {{ui:Scale}} does it in one undo step.

The axes are those of the group you have open (the model's, at the top level). A group or component that is turned comes out sheared if its factors differ; scale the group that holds it instead. The contents of a component are not touched, so its other copies stay as they are.

## Shrinkage allowance

A cast part shrinks as it cools, so its pattern is made bigger. Under **Shrinkage allowance** type the percent for each axis (your foundry or pattern maker gives it for your metal; 1.5 % below is only an example) and press {{ui:Use as the factors}}.

- **The percent itself** makes the factor 1 plus the percent: 1.5 % gives 1.015, what a shrink rule marks.
- **Exactly enough** makes the factor 1 divided by one minus the percent: 1.5 % gives 1.0152, so the casting comes out at the part's size after it shrinks that much.

Your last percents are remembered in this browser.

:::note
The percent is yours to give: ModelCraft knows nothing about your metal, mould or process.
:::
