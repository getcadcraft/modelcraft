---
title: "Burahin at linisin"
summary: "Burahin ang mga edge, grupo at guide gamit ang eraser o ang Delete key, ayusin ang mga hati-hating face, at ayusin ang mga face na nakaharap sa maling direksyon."
keywords: "burahin, eraser, delete, alisin, ayusin, pagsamahin ang face, linisin, ligaw na linya, baligtarin ang face, likod na face, undo"
from: 80b92a81
---

## Burahin gamit ang eraser

1. Pindutin ang {{key:E}} para sa {{ui:Eraser}}.
2. I-click ang isang edge, isang grupo o component, o guide. Mabubura ito.
3. Para burahin ang ilan, pindutin at i-drag sa ibabaw ng mga ito. Mamamarkahan ang lahat ng madaanan mo, at mabubura ang lahat ng ito kapag binitawan mo.

Hindi pumipili ng face ang eraser: nabubura ang face kapag binura mo ang mga edge na kailangan nito. Ang mga face ang dinadaanan ng eraser para mahanap ang mga edge.

## Ano ang nangyayari sa mga face

- **Ang edge sa pagitan ng dalawang face sa iisang eroplano** (halimbawa, linyang iginuhit mo sa ibabaw ng sahig) ay nawawala at ang dalawang face ay **nagsasama** bilang isa.
- **Ang edge na kailangan ng face para manatiling sarado** (ang gilid ng box) ay kasama ring nabubura ang face na iyon. Burahin ang isang itaas na edge ng box at mawawala ang itaas at isang gilid, na iiwan ang bukas na box.
- **Mga maluwag na dulo** (mga punto na hindi na ginagamit ng anumang edge) ay nililinis.

Ang pagbura sa huling kopya ng isang component ay nag-aalis din ng component sa panel na {{ui:Mga component}}.

## Burahin gamit ang Delete key

1. Piliin ang gusto mong alisin gamit ang {{ui:Piliin}}.
2. Pindutin ang {{key:Delete}} o {{key:Backspace}}.

Inaalis din nito ang mga face. Ang face na nabura sa ganitong paraan ay nag-iiwan ng mga edge nito, kaya maaari mong burahin ang itaas ng box at panatilihin ang balangkas nito, pagkatapos ay gumuhit ng iba roon.

## Linisin ang ligaw na linya sa patag na face

Kung may linyang ayaw mo sa pader o sahig (naiwan mula sa pagguhit), burahin ang mga ito gamit ang {{ui:Eraser}}. Nawawala ang mga linyang nasa face at nananatili ang face.

## Face na nakaharap sa maling direksyon

Blue-grey ang face na tinitingnan mula sa likod. Kung nagpapakita ng blue-grey sa labas ng model mo ang isang face:

1. Piliin ang face.
2. I-click ang {{ui:Baligtarin ang face}} sa {{ui:Impormasyon ng entity}}.

Pinakamahalaga ang direksyon ng face kapag nag-e-export: maaaring itago o mabasa nang mali ng mga renderer, game engine at 3D printer ang mga face na nakaharap papasok.

## I-undo ang pagkakamali

Isang hakbang kada beses ang ina-undo ng {{key:Mod+Z}}, at ang {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) ang nagre-redo. Isang hakbang ang pag-drag gamit ang eraser, gaano man karami ang nabura. Ipinapangalan ng status bar kung ano ang na-undo: "Na-undo ang erase."
