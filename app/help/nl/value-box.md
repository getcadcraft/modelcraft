---
title: Exacte maten typen in het waardevak
summary: Alle manieren om lengten, maten, punten, offsets, hoeken, zijden en kopieën te typen, en hoe eenheden en getallen zonder eenheid worden gelezen.
keywords: waardevak, meetvak, vcb, typen, exact, maatvoering, lengte, eenheden, voet, inch, metrisch, millimeter, coördinaten, offset, array, zijden, hoek, decimale komma
from: 0148dc3d
---

Het waardevak staat onderaan in de statusbalk, met een label dat per gereedschap verandert. Terwijl u werkt, toont het de actuele maat; op elk moment kunt u een exacte maat typen.

## Zo typt u

1. Begin de actie met een klik (de eerste hoek, het vlak, het punt om vanaf te verplaatsen).
2. Typ. U hoeft niet in het waardevak te klikken: een cijfer of een van `. , - ' " [ < * /` stuurt uw invoer daarheen.
3. Druk op {{key:Enter}}.

Druk in het waardevak op {{key:Esc}} om het te wissen en terug te gaan naar de weergave. Op een touchscreen tikt u op het waardevak om het toetsenbord te tonen.

Als ModelCraft niet kan lezen wat u typte, zegt de statusbalk: "Typ een lengte zoals 3m, 10'6" of 4m,3m." Als het gereedschap het niet kan gebruiken, staat er "Dat werkte niet: …" met de reden.

## Lengten

| Typ | Betekent |
|---|---|
| `3m` `320cm` `3200mm` | Meter, centimeter, millimeter |
| `10'` `10ft` `10 feet` | Voet |
| `6"` `6in` `6 inches` | Inch |
| `10'6"` `10' 6"` `10'-6 1/2"` | Voet en inch, met een breuk |
| `6 1/2"` `6-1/2"` `3/4"` | Inch met een breuk |
| `1.5ft` `.5m` | Decimalen met een eenheid |
| `120` | Een getal zonder eenheid, in de eenheid van het model |

**Een getal zonder eenheid gebruikt de eenheid van het model**, zoals getoond in de kiezer rechtsonder: inch in een model in voet en inch (dus `120` is 10 voet), millimeter in een millimetermodel, enzovoort. Een getypte eenheid heeft altijd voorrang, ongeacht de eenheid van het model. Krullende aanhalingstekens en primetekens (’ ” ′ ″) worden ook als voet en inch gelezen.

:::warning
Gebruik voor decimalen altijd een **punt**: `2.5m`. Een komma scheidt twee waarden, dus `2,5` betekent 2 en 5 (twee waarden), ongeacht uw taalinstellingen.
:::

## Berekeningen

Elke lengte kan een berekening zijn: tel op met `+`, trek af met `-`, vermenigvuldig met `*`, deel met `/`, en gebruik haakjes. Geen rekenmachine nodig.

| Typ | Betekent |
|---|---|
| `2.5/3` | Een derde van 2.5 (in de eenheid van het model) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" in een model in voet en inch |
| `3m-25cm` | 2.75 m |

Een getal zonder eenheid is in de eenheid van het model wanneer het een lengte is (`2.5/3` in een model in meter is 0.833 m), en een gewone factor wanneer het een lengte vermenigvuldigt of deelt (`2*450mm`). Hoeken en factoren kunnen ook berekeningen zijn: `90/2` is 45°. Twee lengten vermenigvuldigd geven een oppervlakte, geen lengte, dus `2m*3m` wordt geweigerd.

Als ModelCraft het niet kan uitrekenen, zegt de statusbalk wat er mis is en waar, bijvoorbeeld "Deling door nul (teken 4)." Een haakje start ook het waardevak, dus u kunt beginnen met `(`.

Deze behouden hun eigen betekenis: `/3`, `3x` en `*3` na een kopie, `24s` voor zijden, en `/3` met een rand geselecteerd (dan [deelt het de rand](topic:divide)).

## Per gereedschap

| Gereedschap | Label | Typ |
|---|---|---|
| {{ui:Lijn}} | {{ui:Lengte}} | Een lengte (richting de aanwijzer), of een punt of offset (hieronder) |
| {{ui:Rechthoek}} | {{ui:Maatvoeringen}} | Twee lengten: `4m,3m`, `12',10'`. Een puntkomma werkt ook: `4m;3m` |
| {{ui:Cirkel}}, {{ui:Veelhoek}} | {{ui:Zijden}}, dan {{ui:Straal}} | Vóór de eerste klik het aantal zijden: `12s` of `12` (3 tot 999). Daarna de straal |
| {{ui:Duwen/trekken}} | {{ui:Afstand}} | Een lengte. Een negatieve gaat de andere kant op |
| {{ui:Verplaatsen}} | {{ui:Afstand}} | Een lengte (richting de aanwijzer), of een punt of offset. Na een kopie: `3x`, `*3`, `/3` |
| {{ui:Draaien}} | {{ui:Hoek}} | Graden: `90`, `-45`, `22.5` |
| {{ui:Schalen}} | {{ui:Schalen}} | Een factor boven 0: `2`, `0.5`, `1.25` |
| {{ui:Meetlint}} | {{ui:Offset}} of {{ui:Lengte}} | Een lengte |
| {{ui:Verdelen}} | {{ui:Delen}} | Hoeveel gelijke delen: `5`, `5s` of `/5` (2 tot 1000). Zie [Een rand of kromme in gelijke delen verdelen](topic:divide) |
| {{ui:Maatvoering}} | {{ui:Offset}}, dan {{ui:Lengte}} | Waar de maatlijn komt; direct na het plaatsen past een nieuwe lengte het model aan |
| {{ui:Selecteren}} | {{ui:Waarde}} | Met één maatvoering of rand geselecteerd past een nieuwe lengte het model aan. Zie [Maatvoering en aanpassen](topic:dimensions) |

## Punten en offsets

Voor {{ui:Lijn}} en {{ui:Verplaatsen}}, na de eerste klik:

- `[x,y,z]` gaat naar dat exacte punt in het model (in de eigen assen van de groep als u binnen een groep bewerkt). Voorbeeld: `[0,0,3m]` is 3 m recht boven de oorsprong.
- `<dx,dy,dz>` gaat zover vanaf het eerste punt langs rood, groen en blauw. Voorbeeld: `<0,0,10'>` is 10 voet recht omhoog.

Elk van de drie waarden kan een eigen eenheid hebben: `<12',0,6">`.

## Kopieën na een verplaatsing

Direct na een kopie met {{ui:Verplaatsen}}:

| Typ | Maakt |
|---|---|
| `3x` of `*3` | 3 kopieën op een rij met dezelfde tussenruimte |
| `/3` | 3 kopieën gelijkmatig verdeeld van het origineel tot de eerste kopie |

Tot 500 kopieën. Zie [Verplaatsen, kopiëren en arrays maken](topic:move-copy#a-row-of-copies).

## Getypte lengten hebben een richting nodig

Een enkele getypte lengte gaat de richting op waarin de aanwijzer vanaf de eerste klik wijst. Als u direct na klikken typt, voordat u de aanwijzer hebt bewogen, is er nog geen richting en gebeurt er niets. Beweeg de aanwijzer iets in de richting waarin u wilt gaan, en typ dan.

## De eenheid van het model

Wijzig de eenheid in de kiezer rechtsonder: {{ui:ft en in}}, in, ft, yd, mi, mil, µm, mm, cm, m of km, voor zover ze aan staan in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} (de eigen eenheid van het model staat er altijd tussen). Een lengte die met het teken van een eenheid wordt getypt, wordt in die eenheid gelezen. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists). Het verandert hoe lengten worden getoond en hoe getallen zonder eenheid worden gelezen; het model blijft even groot. De eenheid wordt in het bestand opgeslagen.

Zo worden maten getoond:

| Eenheid | Lengten | Oppervlakten | Volumes |
|---|---|---|---|
| ft en in | `10' 6 1/2"` (tot 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² vanaf 0.01 m², anders mm² | m³ vanaf 0.01 m³, anders mm³ |

Een nieuw model begint in voet en inch wanneer de taal van de browser op een Amerikaanse regio staat (en Liberia en Myanmar), en overal anders in millimeter. Een eenheid met een ster in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} wordt in plaats daarvan gebruikt, als ModelCraft die heeft. Of wijzig de kiezer na {{ui:Nieuw}}.
