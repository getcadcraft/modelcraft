---
title: Belys en modell med lamper
summary: Sett lamper, spotlys og lyspaneler inn i en modell, slik at gjengitte bilder kan vise rom om natten eller opplyste interiører, med myke skygger.
keywords: lys, lamper, lampe, belysning, pære, takbelysning, spotlys, nedlys, lyspanel, arealbelysning, lumen, lysstyrke, fargetemperatur, varm, natt, interiør, render
from: c8d72cbc
---

Lamper lyser opp [gjengitte bilder](topic:render). De endrer ikke 3D-visningen, der hver lampe vises som et lite merke i sin egen farge.

## Legg til en lampe

1. I seksjonen {{ui:Lights}} til høyre, klikk {{ui:Lamp}}, {{ui:Spotlight}} eller {{ui:Light panel}}.
2. Klikk der lampen skal stå. Fangen virker som ved tegning.
   - På et tak eller en vegg henger en **lampe** 25 cm utenfor flaten, på den siden der betrakteren står. Et **lyspanel** ligger på flaten og lyser bort fra den.
   - En **spotlys** krever to klikk: først hvor den står, deretter hva den peker på.

Den nye lampen er valgt i {{ui:Lights}}, klar til å endres.

## Endre en lampe

Klikk navnet til en lampe i {{ui:Lights}}, eller merket i visningen, med {{ui:Select}}. Deretter:

| Innstilling | Hva den gjør |
|---|---|
| {{ui:Brightness (lumens)}} | Hvor mye lys den gir. En vanlig husholdningspære er omtrent 800 lumen; et kraftig takpanel 3000 |
| {{ui:Color}} | {{ui:Warm}} (en vanlig husholdningspære), {{ui:Neutral}} eller {{ui:Daylight}}, eller en valgfri farge |
| {{ui:Beam (degrees)}} | Spotlysets kjegle, fra kant til kant |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Større pærer og paneler gir mykere skygger |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Hvor den står |

Avkrysningsboksen ved navnet til en lampe slår den av eller på. {{ui:Delete the light}} fjerner den. Hver endring er ett steg: {{key:Ctrl+Z}} angrer den. Lampene lagres i `.modelcraft`-filen.

## Bilder om natten

I {{ui:Render a picture…}} kryss av for {{ui:Use another date and time for this picture}}, og velg en kveldstime. Når solen er nede, blir himmelen mørk, og bare lampene lyser opp modellen. Øk {{ui:Brightness}} i dialogboksen hvis bildet er for mørkt, eller legg til lamper.

:::tip
For et rom sett innenfra: plasser kameraet inne i rommet (roter og zoom inn, eller bruk en [scene](topic:scenes)), legg til en lampe i taket og gjengi bildet om natten. I {{ui:Fast}}-modus er hjørner langt fra en lampe mørkere enn på et fotografi; [modusen med høy kvalitet](topic:render#high-quality) lar lyset reflekteres fra veggene.
:::
