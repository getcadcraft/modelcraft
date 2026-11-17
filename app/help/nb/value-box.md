---
title: Skriv inn nøyaktige størrelser i verdiboksen
summary: Alle måter å skrive inn lengder, størrelser, punkter, forskyvninger, vinkler, sider og kopier på, og hvordan enheter og bare tall leses.
keywords: verdiboks, målboks, vcb, skriv, nøyaktig, måltilsetting, lengde, enheter, fot, tommer, metrisk, millimeter, koordinater, forskyvning, matrise, sider, vinkel, desimalkomma
from: 0148dc3d
---

Verdiboksen sitter i statuslinjen nederst, med en etikett som endrer seg med verktøyet. Mens du arbeider, viser den den aktuelle størrelsen; når som helst kan du skrive inn en nøyaktig størrelse.

## Slik skriver du

1. Start handlingen med et klikk (første hjørne, flaten, punktet å flytte fra).
2. Skriv. Du trenger ikke klikke i verdiboksen: et siffer eller ett av tegnene `. , - ' " [ < * /` sender det du skriver dit.
3. Trykk {{key:Enter}}.

Trykk {{key:Esc}} i verdiboksen for å tømme den og gå tilbake til visningen. På en berøringsskjerm trykker du på verdiboksen for å få frem tastaturet.

Hvis ModelCraft ikke kan lese det du skrev, sier statuslinjen «Skriv inn en lengde, for eksempel 3m, 10'6" eller 4m,3m.» Hvis verktøyet ikke kan bruke det, står det «Det virket ikke: …» med årsaken.

## Lengder

| Skriv | Betyr |
|---|---|
| `3m` `320cm` `3200mm` | Meter, centimeter, millimeter |
| `10'` `10ft` `10 feet` | Fot |
| `6"` `6in` `6 inches` | Tommer |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fot og tommer, med brøk |
| `6 1/2"` `6-1/2"` `3/4"` | Tommer med brøk |
| `1.5ft` `.5m` | Desimaler med enhet |
| `120` | Et bart tall, i modellens enhet |

**Et bart tall bruker modellens enhet**, slik den vises i velgeren nederst til høyre: tommer i en modell i fot og tommer (så `120` er 10 fot), millimeter i en millimetermodell, og så videre. Å skrive en enhet vinner alltid, uansett modellens enhet. Buede anførselstegn og primtegn (’ ” ′ ″) leses også som fot og tommer.

:::warning
Bruk alltid et **punktum** for desimaler: `2.5m`. Et komma skiller to verdier, så `2,5` betyr 2 og 5 (to verdier), uansett språkinnstillinger.
:::

## Beregninger

Enhver lengde kan være en beregning: legg til `+`, trekk fra `-`, multipliser `*`, del `/`, og bruk parenteser. Ingen kalkulator trengs.

| Skriv | Betyr |
|---|---|
| `2.5/3` | En tredjedel av 2.5 (i modellens enhet) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" i en modell i fot og tommer |
| `3m-25cm` | 2.75 m |

Et bart tall er i modellens enhet når det er en lengde (`2.5/3` i en metermodell er 0.833 m), og en ren faktor når det multipliserer eller deler en lengde (`2*450mm`). Vinkler og faktorer kan også være beregninger: `90/2` er 45°. To lengder multiplisert gir et areal, ikke en lengde, så `2m*3m` avvises.

Hvis ModelCraft ikke kan regne det ut, sier statuslinjen hva som er galt og hvor, for eksempel «Divisjon med null (tegn 4).» En parentes starter også verdiboksen, så du kan begynne med `(`.

Disse beholder sin egen betydning: `/3`, `3x` og `*3` etter en kopi, `24s` for sider, og `/3` med en kant valgt (den [deler kanten](topic:divide)).

## Per verktøy

| Verktøy | Etikett | Skriv |
|---|---|---|
| {{ui:Linje}} | {{ui:Lengde}} | En lengde (mot pekeren), eller et punkt eller en forskyvning (under) |
| {{ui:Rektangel}} | {{ui:Måltilsettinger}} | To lengder: `4m,3m`, `12',10'`. Et semikolon fungerer også: `4m;3m` |
| {{ui:Sirkel}}, {{ui:Mangekant}} | {{ui:Sider}}, deretter {{ui:Radius}} | Før det første klikket, antall sider: `12s` eller `12` (3 til 999). Etter det: radius |
| {{ui:Trykk/trekk}} | {{ui:Avstand}} | En lengde. En negativ går den andre veien |
| {{ui:Flytt}} | {{ui:Avstand}} | En lengde (mot pekeren), eller et punkt eller en forskyvning. Etter en kopi: `3x`, `*3`, `/3` |
| {{ui:Roter}} | {{ui:Vinkel}} | Grader: `90`, `-45`, `22.5` |
| {{ui:Skaler}} | {{ui:Skaler}} | En faktor over 0: `2`, `0.5`, `1.25` |
| {{ui:Målebånd}} | {{ui:Forskyv}} eller {{ui:Lengde}} | En lengde |
| {{ui:Del}} | {{ui:Deler}} | Hvor mange like deler: `5`, `5s` eller `/5` (2 til 1000). Se [Del en kant eller kurve i like deler](topic:divide) |
| {{ui:Mål}} | {{ui:Forskyv}}, deretter {{ui:Lengde}} | Hvor måltilsettingslinjen går; rett etter plassering, en ny lengde endrer størrelsen på modellen |
| {{ui:Velg}} | {{ui:Verdi}} | Med ett mål eller en kant valgt, endrer en ny lengde størrelsen på modellen. Se [Måltilsetting og endre størrelse](topic:dimensions) |

## Punkter og forskyvninger

For {{ui:Linje}} og {{ui:Flytt}}, etter første klikk:

- `[x,y,z]` går til det nøyaktige punktet i modellen (i gruppens egne akser når du redigerer inne i en gruppe). Eksempel: `[0,0,3m]` er 3 m rett over origo.
- `<dx,dy,dz>` går så langt fra første punkt langs rød, grønn og blå akse. Eksempel: `<0,0,10'>` er 10 fot rett opp.

Hver av de tre verdiene kan ha sin egen enhet: `<12',0,6">`.

## Kopier etter en flytting

Rett etter en kopi med {{ui:Flytt}}:

| Skriv | Lager |
|---|---|
| `3x` eller `*3` | 3 kopier på rad med samme avstand |
| `/3` | 3 kopier jevnt fordelt fra originalen til den første kopien |

Opptil 500 kopier. Se [Flytt, kopier og lag matriser](topic:move-copy#a-row-of-copies).

## Skrevne lengder trenger en retning

En enkelt skrevet lengde går den veien pekeren peker fra første klikk. Hvis du skriver rett etter et klikk, før du har beveget deg i det hele tatt, finnes det ingen retning ennå, og ingenting skjer. Beveg pekeren litt mot dit du vil, og skriv så.

## Modellens enhet

Endre enheten i velgeren nederst til høyre: {{ui:ft og in}}, in, ft, yd, mi, mil, µm, mm, cm, m eller km, så langt de er slått på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} (modellens egen enhet er alltid der). En lengde skrevet med merket til en enhet, leses i den enheten. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists). Det endrer hvordan lengder vises og hvordan bare tall leses; modellen forblir like stor. Enheten lagres i filen.

Slik vises størrelser:

| Enhet | Lengder | Arealer | Volumer |
|---|---|---|---|
| ft og in | `10' 6 1/2"` (til 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² fra 0.01 m², ellers mm² | m³ fra 0.01 m³, ellers mm³ |

En ny modell starter i fot og tommer når nettleserens språk er satt til en amerikansk region (og Liberia og Myanmar), og i millimeter ellers. En enhet som er stjernemerket i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}}, brukes i stedet, når ModelCraft har den. Eller endre velgeren etter {{ui:Ny}}.
