---
title: Skriv præcise størrelser i værdifeltet
summary: Alle måder at skrive længder, størrelser, punkter, forskydninger, vinkler, sider og kopier på, og hvordan enheder og nøgne tal læses.
keywords: værdifelt, målefelt, vcb, skriv, præcis, mål, længde, enheder, fod, tommer, metrisk, millimeter, koordinater, forskydning, array, sider, vinkel, decimalkomma
from: 0148dc3d
---

Værdifeltet sidder i statuslinjen nederst, med en etiket, der skifter med værktøjet. Mens du arbejder, viser det den aktuelle størrelse. Når som helst kan du skrive en præcis størrelse.

## Sådan skriver du

1. Start handlingen med et klik (det første hjørne, fladen, punktet der skal flyttes fra).
2. Skriv. Du behøver ikke klikke i værdifeltet: et ciffer eller et af tegnene `. , - ' " [ < * /` sender din skrivning dertil.
3. Tryk {{key:Enter}}.

Tryk {{key:Esc}} i værdifeltet for at rydde det og gå tilbage til visningen. På en touchskærm trykker du på værdifeltet for at få tastaturet frem.

Hvis ModelCraft ikke kan læse det, du skrev, siger statuslinjen »Skriv en længde, for eksempel 3m, 10'6" eller 4m,3m.« Hvis værktøjet ikke kan bruge det, siger den »Det virkede ikke: …« med årsagen.

## Længder

| Skriv | Betyder |
|---|---|
| `3m` `320cm` `3200mm` | Meter, centimeter, millimeter |
| `10'` `10ft` `10 feet` | Fod |
| `6"` `6in` `6 inches` | Tommer |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fod og tommer, med en brøk |
| `6 1/2"` `6-1/2"` `3/4"` | Tommer med en brøk |
| `1.5ft` `.5m` | Decimaltal med en enhed |
| `120` | Et nøgent tal, i modellens enhed |

**Et nøgent tal bruger modellens enhed**, som vist i vælgeren nederst til højre: tommer i en model i fod og tommer (så `120` er 10 fod), millimeter i en millimetermodel og så videre. Når du skriver en enhed, vinder den altid, uanset modellens enhed. Buede anførselstegn og primtegn (’ ” ′ ″) læses også som fod og tommer.

:::warning
Brug altid et **punktum** som decimaltegn: `2.5m`. Et komma adskiller to værdier, så `2,5` betyder 2 og 5 (to værdier), uanset dine sprogindstillinger.
:::

## Beregninger

Enhver længde kan være en beregning: læg til med `+`, træk fra med `-`, gang med `*`, divider med `/`, og brug parenteser. Ingen lommeregner er nødvendig.

| Skriv | Betyder |
|---|---|
| `2.5/3` | En tredjedel af 2.5 (i modellens enhed) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" i en model i fod og tommer |
| `3m-25cm` | 2.75 m |

Et nøgent tal er i modellens enhed, når det er en længde (`2.5/3` i en metermodel er 0.833 m). Det er en ren faktor, når det ganger eller dividerer en længde (`2*450mm`). Vinkler og faktorer kan også beregnes: `90/2` er 45°. To længder ganget giver et areal, ikke en længde, så `2m*3m` afvises.

Hvis ModelCraft ikke kan regne det ud, siger statuslinjen, hvad der er galt, og hvor. For eksempel »Division med nul (tegn 4).« En parentes starter også værdifeltet, så du kan begynde med `(`.

Disse beholder deres egen betydning: `/3`, `3x` og `*3` efter en kopi, `24s` for sider, og `/3`, når en kant er valgt (den [deler kanten](topic:divide)).

## Pr. værktøj

| Værktøj | Etiket | Skriv |
|---|---|---|
| {{ui:Linje}} | {{ui:Længde}} | En længde (mod markøren), eller et punkt eller en forskydning (nedenfor) |
| {{ui:Rektangel}} | {{ui:Mål}} | To længder: `4m,3m`, `12',10'`. Et semikolon virker også: `4m;3m` |
| {{ui:Cirkel}}, {{ui:Polygon}} | {{ui:Sider}}, derefter {{ui:Radius}} | Før det første klik antallet af sider: `12s` eller `12` (3 til 999). Efter det radius |
| {{ui:Skub/træk}} | {{ui:Afstand}} | En længde. En negativ går den anden vej |
| {{ui:Flyt}} | {{ui:Afstand}} | En længde (mod markøren), eller et punkt eller en forskydning. Efter en kopi: `3x`, `*3`, `/3` |
| {{ui:Roter}} | {{ui:Vinkel}} | Grader: `90`, `-45`, `22.5` |
| {{ui:Skalér}} | {{ui:Skalér}} | En faktor over 0: `2`, `0.5`, `1.25` |
| {{ui:Målebånd}} | {{ui:Forskyd}} eller {{ui:Længde}} | En længde |
| {{ui:Del}} | {{ui:Dele}} | Hvor mange lige dele: `5`, `5s` eller `/5` (2 til 1000). Se [Del en kant eller kurve i lige dele](topic:divide) |
| {{ui:Mål}} | {{ui:Forskyd}}, derefter {{ui:Længde}} | Hvor målelinjen går. Lige efter placering ændrer en ny længde modellens størrelse |
| {{ui:Vælg}} | {{ui:Værdi}} | Med ét mål eller én kant valgt ændrer en ny længde modellens størrelse. Se [Mål og ændring af størrelse](topic:dimensions) |

## Punkter og forskydninger

For {{ui:Linje}} og {{ui:Flyt}}, efter det første klik:

- `[x,y,z]` går til det præcise punkt i modellen (i gruppens egne akser, når du redigerer inde i en gruppe). Eksempel: `[0,0,3m]` er 3 m lige over origo.
- `<dx,dy,dz>` går så langt fra det første punkt langs rød, grøn og blå. Eksempel: `<0,0,10'>` er 10 fod lige op.

Hver af de tre værdier kan have sin egen enhed: `<12',0,6">`.

## Kopier efter en flytning

Lige efter en kopi med {{ui:Flyt}}:

| Skriv | Laver |
|---|---|
| `3x` eller `*3` | 3 kopier i række med samme afstand |
| `/3` | 3 kopier fordelt jævnt fra originalen til den første kopi |

Op til 500 kopier. Se [Flyt, kopiér og lav arrays](topic:move-copy#a-row-of-copies).

## Skrevne længder kræver en retning

En enkelt skrevet længde går den vej, markøren peger fra det første klik. Hvis du skriver lige efter at have klikket, før du har flyttet overhovedet, er der endnu ingen retning, og intet sker. Flyt markøren lidt hen mod, hvor du vil hen, og skriv så.

## Modellens enhed

Skift enheden i vælgeren nederst til højre: {{ui:ft og in}}, in, ft, yd, mi, mil, µm, mm, cm, m eller km. Det gælder for så vidt, de er slået til i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} (modellens egen enhed er altid med). En længde, der skrives med en enheds mærke, læses i den enhed. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists). Enheden ændrer, hvordan længder vises, og hvordan nøgne tal læses. Modellen bliver ved med at have samme størrelse. Enheden gemmes i filen.

Sådan vises størrelser:

| Enhed | Længder | Arealer | Rumfang |
|---|---|---|---|
| ft og in | `10' 6 1/2"` (til 1/16") | kvadratfod | kubikfod |
| in | `126 1/2"` | kvadrattommer | kubiktommer |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² fra 0.01 m², ellers mm² | m³ fra 0.01 m³, ellers mm³ |

En ny model starter i fod og tommer, når browserens sprog er sat til en amerikansk region (og Liberia og Myanmar). Ellers starter den i millimeter. En enhed med stjerne i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} bruges i stedet, når ModelCraft har den. Du kan også skifte vælgeren efter {{ui:Ny}}.
