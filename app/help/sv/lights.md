---
title: Belys en modell med lampor
summary: Placera lampor, spotlights och ljuspaneler i en modell så att renderade bilder kan visa rum på natten eller upplysta interiörer, med mjuka skuggor.
keywords: ljus, lampa, lampor, belysning, glödlampa, takljus, spotlight, downlight, ljuspanel, ytljus, lumen, ljusstyrka, färgtemperatur, varmt, natt, interiör, render
from: c8d72cbc
---

Lampor belyser [renderade bilder](topic:render). De ändrar inte 3D-vyn, där varje lampa visas som en liten markering i sin egen färg.

## Lägg till en lampa

1. Klicka på {{ui:Lamp}}, {{ui:Spotlight}} eller {{ui:Light panel}} i avsnittet {{ui:Ljus}} till höger.
2. Klicka där den ska vara. Fångst fungerar som vid ritning.
   - På ett tak eller en vägg hänger en **lampa** 25 cm utanför ytan, på den sida du tittar från. En **ljuspanel** ligger mot ytan och lyser bort från den.
   - En **spotlight** kräver två klick: först var den är, sedan vad den riktar sig mot.

Den nya lampan markeras i {{ui:Ljus}}, redo att ändras.

## Ändra en lampa

Klicka på en lampas namn i {{ui:Ljus}}, eller på dess markering i vyn med {{ui:Markera}}. Sedan:

| Inställning | Vad den gör |
|---|---|
| {{ui:Ljusstyrka (lumen)}} | Hur mycket ljus den ger. En vanlig hushållslampa är cirka 800 lumen; en stark takpanel 3000 |
| {{ui:Färg}} | {{ui:Varmt}} (en vanlig hemlampa), {{ui:Neutralt}} eller {{ui:Dagsljus}}, eller valfri färg |
| {{ui:Ljuskägla (grader)}} | En spotlights kägla, från kant till kant |
| {{ui:Lampstorlek}}, {{ui:Bredd}}, {{ui:Djup}} | Större lampor och paneler ger mjukare skuggor |
| {{ui:Röd (x)}}, {{ui:Grön (y)}}, {{ui:Höjd}} | Var den är |

Kryssrutan bredvid en lampas namn slår av eller på den. {{ui:Ta bort ljuset}} tar bort den. Varje ändring är ett steg: {{key:Ctrl+Z}} ångrar den. Lampor sparas i filen `.modelcraft`.

## Bilder på natten

I {{ui:Rendera en bild…}}, markera {{ui:Använd ett annat datum och en annan tid för den här bilden}} och välj en kvällstimme. När solen har gått ner blir himlen mörk och bara lamporna lyser upp modellen. Höj {{ui:Ljusstyrka}} i dialogrutan om bilden är för mörk, eller lägg till lampor.

:::tip
För ett rum sett inifrån, placera kameran inne i rummet (kretsa och zooma in, eller en [scen](topic:scenes)), lägg till en lampa i taket och rendera på natten. I läget {{ui:Snabbt}} blir hörn som ligger långt från en lampa mörkare än på ett foto; [läget för hög kvalitet](topic:render#high-quality) låter ljuset studsa mot väggarna.
:::
