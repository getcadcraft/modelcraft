---
title: Belys en model med lamper
summary: Sæt lamper, spots og lyspaneler i en model, så renderede billeder kan vise rum om natten eller belyste interiører, med bløde skygger.
keywords: lys, lamper, lampe, lys, belysning, pære, loftslys, spot, downlight, lyspanel, arealbelysning, lumen, lysstyrke, farvetemperatur, varm, nat, interiør, render
from: c8d72cbc
---

Lamper belyser [renderede billeder](topic:render). De ændrer ikke 3D-visningen, hvor hver lampe vises som et lille mærke i sin egen farve.

## Tilføj en lampe

1. I sektionen {{ui:Lys}} til højre klikker du på {{ui:Lampe}}, {{ui:Spot}} eller {{ui:Lyspanel}}.
2. Klik, hvor den skal stå. Fangning virker, som når du tegner.
   - På et loft eller en væg hænger en **lampe** 25 cm ud fra fladen, på den side du kigger fra. Et **lyspanel** ligger på fladen og lyser væk fra den.
   - En **spot** kræver to klik: først hvor den står, dernæst hvad den peger på.

Den nye lampe er valgt i {{ui:Lys}}, klar til at blive ændret.

## Ændr en lampe

Klik på en lampes navn i {{ui:Lys}}, eller på dens mærke i visningen med {{ui:Vælg}}. Derefter:

| Indstilling | Hvad den gør |
|---|---|
| {{ui:Lysstyrke (lumen)}} | Hvor meget lys den giver. En husstandspære er ca. 800 lumen; et kraftigt loftspanel 3000 |
| {{ui:Farve}} | {{ui:Varm}} (en husholdningspære), {{ui:Neutral}} eller {{ui:Dagslys}}, eller en valgfri farve |
| {{ui:Lysbundt (grader)}} | En spots kegle, fra kant til kant |
| {{ui:Pærestørrelse}}, {{ui:Bredde}}, {{ui:Dybde}} | Større pærer og paneler giver blødere skygger |
| {{ui:Rød (x)}}, {{ui:Grøn (y)}}, {{ui:Højde}} | Hvor den står |

Afkrydsningen ved en lampes navn tænder eller slukker den. {{ui:Slet lyset}} fjerner den. Hver ændring er ét trin: {{key:Ctrl+Z}} fortryder den. Lamper gemmes i `.modelcraft`-filen.

## Billeder om natten

I {{ui:Render et billede…}} sætter du kryds i {{ui:Brug en anden dato og et andet tidspunkt til dette billede}} og vælger en aftentime. Når solen er gået ned, bliver himlen mørk, og kun lamperne lyser modellen. Hæv {{ui:Lysstyrke}} i dialogen, hvis billedet er for mørkt, eller tilføj flere lamper.

:::tip
Til et rum set indefra placerer du kameraet inde i rummet (kredsløb og zoom ind, eller en [scene](topic:scenes)), tilføjer en lampe i loftet og renderer om natten. I tilstanden {{ui:Hurtig}} er hjørner væk fra en lampe mørkere end på et foto. [Tilstanden i høj kvalitet](topic:render#high-quality) lader lyset kaste sig tilbage fra væggene.
:::
