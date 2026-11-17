---
title: Mjuka upp och jämna till kanter
summary: Dölj kanterna mellan ytor som möts i en flat vinkel, så att krökta former läses som en jämn yta, i ModelCraft och i exporterade filer.
keywords: mjuka upp, jämna till, mjuka kanter, mjuk skuggning, dölj kanter, facetter, facetterad, krökt, normaler, härda, vinkel
from: 52d32453
---

En krökt form i ModelCraft består av plana ytor. **Mjuka** kanter mellan de ytorna ritas inte, och ytorna de förbinder skuggas som en jämn yta, så en 24-sidig cylinder ser rund ut.

När du drar upp en cirkel med {{ui:Tryck/dra}} mjukas dess sidor upp åt dig. För andra former mjukar du upp efter vinkel.

## Mjuka upp efter vinkel

1. Markera vad som ska mjukas upp: ytor och kanter, eller en grupp eller komponent (alla dess kanter).
2. I {{ui:Entitetsinfo}}, skriv en vinkel i {{ui:Mjuka upp till}}, till exempel `20`, och klicka på {{ui:Mjuka upp}}.

Varje kant i markeringen vars två ytor vrids med den vinkeln eller mindre blir mjuk; kanter med en skarpare vridning blir hårda. Ett 12-sidigt prisma vrids 30° på sina sidor och 90° vid sina kanter, så `31` mjukar bara upp sidorna.

{{ui:Härda alla}} gör varje kant i markeringen hård igen. Varje gång är ett ångra-steg.

## Bra att veta

- Endast kanter mellan exakt två ytor mjukas upp. Lösa kanter förblir som de är.
- Jämn skuggning fungerar bara över mjuka kanter: en yta utan någon mjuk kant skuggas plant.
- Mjuka kanter sparas i ModelCraft-filen. **glTF (.glb)** och **OBJ**-exporter bär den jämna skuggningen (en normal per hörn), så att andra program visar samma yta. Collada och STL exporterar plana ytor.
- Mjuka kanter är gömda i alla ytstilar, även {{ui:Röntgen}} och {{ui:Trådmodell}}. För att se dem, markera formen och klicka på {{ui:Härda alla}}; ångra återställer mjukningen.
