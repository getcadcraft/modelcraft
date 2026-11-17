---
title: Lupa: lupa mula sa mga contour, at pag-sculpt dito
summary: Gumawa ng lupa mula sa mga contour line o bilang grid, saka itaas at ibaba ito gamit ang malambot na brush.
keywords: terrain, lupa, ground, landscape, topography, contour, contour line, site, slope, burol, tambak, sandbox, smoove, sculpt, grade, TIN
from: 407652b3
---

Ang lupa (terrain) ay gawa sa mga triangle, kaya nasusundan nito ang kahit anong hugis. Isa itong group: i-double-click ito para i-edit.

## Mula sa mga contour line

1. Kunin ang mga contour line sa tamang taas: iguhit ang mga ito, o [i-import ang site plan](topic:site-plan) at ilipat ang bawat contour sa antas nito.
2. Piliin ang mga ito (lahat ng edge ng lahat ng contour).
3. {{ui:Edit}} › {{ui:More}} › {{ui:Terrain from selected contours}}.

Pinagdudugtong ng ModelCraft ang mga contour point gamit ang mga triangle (isang TIN), at pinapalambot ang bawat edge sa loob para maging makinis ang lilim ng lupa. Nananatili ang mga linya mismo; burahin o itago ang mga ito kapag hindi mo na kailangan. Ang napakasiksik na contour ay pinapanipis sa 8 000 point.

## Grid na i-sculpt

{{ui:Edit}} › {{ui:More}} › {{ui:Grid ng terrain…}} ay humihingi ng lapad, lalim at laki ng cell, saka naglalagay ng patag na grid ng mga triangle kung saan mo i-click ang sulok nito. Mas makinis i-sculpt ang maliliit na cell, pero mas maraming face ang nagagawa (hanggang 200 × 200 cell).

## Sculpt: itaas at ibaba ang lupa

1. I-double-click ang terrain para buksan ito.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Sculpt terrain}}. Ipinapakita ng bilog ang brush sa lupa sa ilalim ng pointer.
3. I-drag pataas para itaas ang lupa sa ilalim ng brush, o pababa para ibaba ito. Pinakamalaki ang galaw sa gitna at unti-unting nawawala ang epekto sa gilid ng bilog, kaya lumalabas nang makinis ang mga tambak at lubak.

Para gawing eksaktong taas ang isang tambak, i-click nang isang beses, saka i-type ang taas, gaya ng `1.5m` (ang minus ay nagbababa), at pindutin ang {{key:Enter}}. Para baguhin ang brush, mag-type ng haba bago mag-click: ang `5m` ay nagbibigay ng brush na may radius na 5 m.

Bawat sculpt ay isang undo step.

## Mga dapat tandaan

- Gumagalaw lang ang sculpt sa mga triangle face, kaya nananatiling patag ang bawat face. Ang mga face na iginuhit ng kamay (rectangle, polygon) ay hindi terrain: sinasabi ito ng tool.
- Ang sculpting ay gumagalaw ng mga point nang diretso pataas at pababa; hindi ito nagdaragdag ng point. Para sa mas pinong detalye, gumawa ng grid na may mas maliliit na cell.
- Nag-e-export ang terrain gaya ng ibang group. Sa IFC, ito ay building element proxy, gaya ng lahat ng iba pa.
