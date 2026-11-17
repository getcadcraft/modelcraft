---
title: Mga mesh
summary: Gawing mesh ang group o component (ang uri ng bagay na minomodelo ng mga 3D content tool) at ibalik ito sa push/pull geometry.
keywords: mesh, mga mesh, polygon, polygons, n-gon, quad, quads, vertices, half-edge, uv, uvs, i-convert, i-convert sa mesh, i-convert sa geometry, subdivision, sculpt, pagmomodelo, 3d content
from: e32363e8
---

May dalawang uri ng geometry ang ModelCraft. Ang **push/pull geometry** ang iginuguhit mo: mga patag na face na nagdidikit, nagpuputol sa isa't isa at naghihilom. Ang **mesh** ay ang uri ng bagay na minomodelo ng mga 3D content tool: mga face na may anumang bilang ng sulok, na ang bawat sulok ay maaaring magdala ng sarili nitong texture coordinate (UV), normal at kulay, at ang bawat vertex ay may mga halaga tulad ng weight. Inilalagay ang mesh gaya ng group o component, at nasa tabi ito ng push/pull geometry sa iisang model.

## Gawing mesh ang group o component

1. Pumili ng group o component.
2. Sa {{ui:Entity info}}, i-click ang {{ui:Convert to mesh}}.

Nagiging face ng mesh ang mga face nito (ang face na may butas ay papasok bilang mga triangle), nananatiling matalas ang matatalas na edge, pinapakinis ng malalambot na edge ang shading, at nananatili sa kanilang face ang pintura, materyal at na-import na texture. Ang mga group at component sa loob nito ay pinagsasama sa iisang mesh. Iniiwan ang maluwag na edge: pinapanatili ng mesh ang mga face. Ipinapakita ng bawat placement ng component ang mesh. Isang undo step ito.

## Ano ang ipinapakita ng Entity info

Pumili ng mesh para makita ang mga face, vertex at edge nito, kung ito ay saradong solid (at ang volume nito), at ang laki nito kapag nailagay. Sinasabi ng mesh na may bukas na edge kung ilan ang mga iyon.

## Gawing push/pull geometry muli ang mesh

Piliin ang mesh at i-click ang {{ui:Convert to geometry}}. Bumabalik ang mga patag na face gaya ng dati; ang face na hindi nasa iisang eroplano ang mga sulok ay bumabalik bilang triangle. Matalas ang matatalas na edge, malambot ang iba. Inilalagay ng {{ui:Explode}} ang mga face ng mesh nang diretso sa group sa paligid nito.

## Mga dapat malaman

- I-double-click ang mesh para [i-edit ang mga vertex, edge at face nito](topic:mesh-edit) sa Mesh workspace. I-convert ito sa geometry para i-edit gamit ang push/pull; i-move, i-rotate, i-scale, kopyahin, pinturahan, itago at lagyan ng tag ito gaya ng ibang group.
- Nakikita ng mga export, 3D printing, render at VR ang mesh bilang mga face nito.
- Ang file na may mesh ay sine-save bilang mas bagong bersyon ng `.modelcraft` file, kaya hindi ito mabubuksan ng ModelCraft 0.6 at mas luma; bumubukas sa kanila ang mga file na walang mesh gaya ng dati. I-convert muna sa geometry ang mga mesh para maibahagi ang file sa taong nasa mas lumang bersyon.
- Ang undo sa mesh ay nagtatago lamang ng binago ng bawat hakbang, kaya kahit napakalaking mesh ay mabilis mag-undo.

Tingnan din ang [Mga group at component](topic:groups-components) at [Hindi pa nagagawa](topic:not-built-yet).
