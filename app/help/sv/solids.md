---
title: Solidverktyg: union, subtrahera, snitt
summary: Slå ihop slutna grupper och komponenter till en, skär ut en ur en annan, eller behåll bara det de har gemensamt.
keywords: solid, solider, solidgranskare, inte solid, åtgärda solid, hål, lös kant, ut och in, union, slå ihop, kombinera, sammanfoga, subtrahera, differens, skär, snitt, skärning, boolesk, yttre skal
from: f35df1cc
---

Solidverktygen kombinerar **solider**: grupper och komponenter vars ytor sluter en volym, med varje kant som förbinder exakt två ytor. {{ui:Entitetsinfo}} säger {{ui:Solid}}: {{ui:Ja}} för en, och visar dess volym.

De finns i menyn {{ui:Solider}} i gruppen {{ui:Organisera}}.

## När något inte är en solid

Markera gruppen eller komponenten. När den inte är en solid säger {{ui:Entitetsinfo}} varför, till exempel ”Inte en solid: 4 kanter gränsar till ett hål · 1 lös kant”:

| Problem | Vad det betyder |
|---|---|
| Kanter gränsar till ett hål | En yta saknas |
| Kanter delade av tre ytor eller fler | En yta delar insidan, eller två former tar i varandra längs en kant |
| Ytor inuti formen | En vägg kvar inne i volymen |
| Lösa kanter | Linjer som inte avgränsar någon yta |
| Ytor vända ut och in | Deras framsidor vetter in, mot grannarna |

{{ui:Visa problem}} öppnar den med de kanterna och ytorna markerade, så att du kan se dem. {{ui:Åtgärda}} lagar de enkla fallen i ett ångra-steg: den tar bort lösa kanter och ytor inuti formen, vänder ytor åt rätt håll, och stänger hål vars kant ligger plant. Allt den inte säkert kan laga (ett hål som inte är plant, en kant delad av många ytor) lämnar den åt dig, och säger vad som återstår.

## Union

1. Markera två eller fler solider (klicka på en, {{key:Ctrl}}+klicka på de andra).
2. {{ui:Solider}} › {{ui:Union}}.

De blir en solid, i en grupp. Där de överlappade är de ytor som låg inuti borta.

## Subtrahera

1. {{ui:Solider}} › {{ui:Subtrahera}}.
2. Klicka på soliden som ska **tas bort** (skäraren).
3. Klicka på soliden som ska **skäras**.

Det som återstår av den andra soliden blir kvar; skäraren förbrukas. Till exempel: för att göra ett hål genom ett block, rita en stolpe genom det, gör stolpen till en grupp och subtrahera sedan stolpen från blocket.

## Snitt

Markera två eller fler solider, och sedan {{ui:Solider}} › {{ui:Snitt}}. Endast den del de alla delar behålls.

## Bra att veta

- Resultatet är en ny grupp. Den behåller namnet, färgen och taggen från den första soliden (för Subtrahera: den du skar). Färger målade på dess ytor behålls inte.
- Plana sidor på resultatet är enskilda ytor. Runda sidor blir de plana facetter de ritades med.
- Om en grupp eller komponent inte är en solid säger verktyget vilken, och ändrar ingenting. Leta efter en saknad yta eller en lös yta inuti den.
- Inuti en öppen grupp arbetar verktygen på grupperna och komponenterna i den gruppen.
- Varje verktyg är ett ångra-steg.
- Första gången du använder ett solidverktyg laddas dess motor (manifold-3d), vilket kan ta en stund.
