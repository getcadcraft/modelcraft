---
title: Maatvoering plaatsen en wat u tekende van formaat wijzigen
summary: Plaats maatvoeringen tussen hoeken, op bogen en cirkels, of tussen twee randen; typ een nieuwe lengte om het model van formaat te laten veranderen. Typ de lengte van een rand, of de breedte, diepte en hoogte van een groep, opnieuw in Entiteitsinformatie.
keywords: maatvoering, formaat wijzigen, grootte wijzigen, afmeting bewerken, lengte, breedte, diepte, hoogte, uitrekken, sturende maatvoering, annoteren, meten, achteraf, straal, diameter, hoek, hoekmaat, boog, cirkel, R, Ø
from: a1f815ec
---

Afmetingen in ModelCraft liggen niet vast zodra iets getekend is. Een maatvoering toont een lengte op het model, en als u daar een nieuwe lengte in typt, past het model zich aan. U kunt ook de lengte van een rand opnieuw typen, of de breedte, diepte en hoogte van een groep, in {{ui:Entity info}}.

## Een maatvoering plaatsen

1. Druk op {{key:D}}, of klik op {{ui:Maatvoering}} in de werkbalk.
2. Klik op een hoek om vanaf te meten. Hij snapt naar hoeken, middens en randen, zoals bij tekenen.
3. Klik op de tweede hoek.

   Of klik één keer op een **rand** (de tooltip zegt "Op rand") om die hele rand in één klik te maatvoeren.
4. Beweeg de aanwijzer naar waar de maatlijn moet komen, en klik. U kunt ook de verschuiving typen, zoals `0.5m`, en op {{key:Enter}} drukken.

   De maatlijn blijft waterpas voor een waterpas liggende rand, tenzij u er van de zijkant naar kijkt. Voor een verticale rand blijft hij in het verticale vlak dat het best naar u toe gericht is.

De statusbalk zegt "Maatvoering 4 m." Maatvoeringen tonen hun lengte in de eenheid van het model en worden bijgewerkt wanneer u de eenheid in de kiezer wijzigt.

## Straal, diameter en hoek

Hetzelfde gereedschap {{ui:Maatvoering}} maatvoert ronde dingen en hoeken:

- **Een boog:** klik op de boog. De tooltip zegt {{ui:Straal}}. Beweeg de aanwijzer naar waar de tekst moet komen en klik: de maatvoering leest **R 1.5 m**.
- **Een cirkel:** klik op de cirkel. U krijgt een **diameter** (**Ø 3 m**) met een lijn dwars door de cirkel via zijn middelpunt. Veelhoeken werken hetzelfde, met hun hoeken op de cirkel.
- **De hoek tussen twee randen:** klik op de ene rand, en daarna op een tweede rand die er op een hoek op aansluit (terwijl u erover zweeft, zegt de tooltip {{ui:Hoek tussen de randen}}). Beweeg daarna in de hoek die u wilt, en klik. Binnen de hoek krijgt u de hoek tussen de randen; beweeg naar één kant en u krijgt de hoek ernaast (bijvoorbeeld 150° in plaats van 30°). Hoe ver van de hoek u klikt, bepaalt waar de boog komt; of typ die afstand.

Om een straal naar een diameter om te zetten of terug, selecteert u de maatvoering en kiest u bij {{ui:Tonen als}} in {{ui:Entity info}}.

**Formaat wijzigen ermee:** typ een nieuwe straal of diameter direct na het plaatsen ervan, of selecteer hem later en typ. De boog of cirkel behoudt zijn middelpunt en verandert van grootte; een vlak dat erdoor begrensd wordt (een schijf, het uiteinde van een gleuf) verandert mee. Twee dingen meten alleen:

- **Een hoekmaatvoering** verandert het model nooit. Om een hoek te wijzigen, draait u de randen met {{ui:Draaien}}.
- **De cirkel aan het eind van een cilinder** (een cirkel die u met {{ui:Duwen/trekken}} hebt uitgetrokken) kan niet via zijn maatvoering van formaat veranderen, omdat zijn zijden dan ook zouden moeten veranderen. Schaal de cilinder in plaats daarvan, rond zijn as.

## Het model van formaat laten veranderen met een maatvoering

Direct na het plaatsen van een maatvoering typt u een nieuwe lengte en drukt u op {{key:Enter}}: `6m`, `12'`, `3500` in een model in millimeters. Het model verandert naar dat formaat.

Later, op elk moment:

1. Klik met {{ui:Selecteren}} op de tekst of de lijn van de maatvoering. {{ui:Entity info}} zegt **Maatvoering** en toont de {{ui:Lengte}}.
2. Typ de nieuwe lengte en druk op {{key:Enter}}. U kunt rechtstreeks in het waardevak typen, of in het vak {{ui:Lengte}} in {{ui:Entity info}}.

### Wat beweegt

Het tweede hoekpunt dat u aanklikte beweegt, en alles voorbij het:

- **Beide hoeken op één stuk** (de breedte van een doos, de hoogte van een muur): de zijde bij het bewegende hoekpunt schuift naar buiten of naar binnen, en vlakken die eraan vastzitten rekken uit. Een doos blijft een gesloten vast lichaam, en alles dat volledig aan die zijde zit, zoals een raamcomponent, beweegt mee.
- **De hoeken op twee losse stukken** (de opening tussen twee dozen): het stuk van het bewegende hoekpunt beweegt als geheel, en de opening verandert.
- **Het bewegende hoekpunt binnen een groep of component** waar het andere hoekpunt niet in zit: de hele groep beweegt.
- **Beide hoeken binnen dezelfde groep of component**: die wordt erin uitgerekt. Een component verandert overal waar hij geplaatst is, zoals bij elke bewerking.

Om te wijzigen welk eind beweegt, selecteert u de maatvoering en kiest u bij {{ui:Beweegt}} in {{ui:Entity info}}:

| Keuze | Wat er gebeurt |
|---|---|
| {{ui:Tweede uiteinde}} (de standaard) | Het eind dat u als tweede aanklikte beweegt |
| {{ui:Eerste uiteinde}} | Het eind dat u als eerste aanklikte beweegt |
| {{ui:Beide uiteinden (gecentreerd)}} | Elk eind beweegt de helft van de verandering, zodat het midden blijft staan |

### Wanneer een formaatwijziging geweigerd wordt

ModelCraft verandert niets en zegt in de statusbalk waarom:

- "een vlak zou uit zijn vlak buigen": de maatvoering loopt schuin over de vorm. Maatvoer langs een rand, of langs rood, groen of blauw.
- "een vlak zou tot niets krimpen of binnenstebuiten gaan": de nieuwe lengte is te kort voor de vorm.
- "het eind dat beweegt ligt niet op een hoek van het model": dat eind werd in de lege ruimte of op het midden van een rand geplaatst. Kies het andere eind in {{ui:Beweegt}}, of plaats de maatvoering op twee hoeken.
- "een lengte moet groter zijn dan nul".

Elke formaatwijziging is één stap: {{key:Mod+Z}} maakt hem ongedaan.

## Een maat opnieuw typen in Entity info

U hebt niet altijd een maatvoering nodig:

- **Een rand:** selecteer hem. Zijn {{ui:Lengte}} in {{ui:Entity info}} is een vak waarin u kunt typen. Een lengte in het waardevak typen werkt ook. Het eind dat verder langs rood, dan groen, dan blauw ligt beweegt, en wat eraan vastzit rekt mee. Bijvoorbeeld, de voorste onderste rand van een doos opnieuw typen maakt de doos breder naar rechts.
- **Een groep of component:** selecteer hem. {{ui:Breedte (rood)}}, {{ui:Diepte (groen)}} en {{ui:Hoogte (blauw)}} zijn vakken. Zijn verste zijde (rechts, achter, boven) beweegt. Dit zijn de eigen assen van de groep, vóór elke draaiing die u eraan gaf.

Druk op {{key:Enter}} om toe te passen, of op {{key:Esc}} om de oude waarde terug te zetten.

## Maatvoeringen volgen het model

Een maatvoering hangt aan de twee hoeken waarop hij geplaatst werd (een hoek: aan zijn hoekpunt en de verre eindes van zijn twee randen; een straal of diameter: aan zijn boog of cirkel). Verplaats, duw of trek of wijzig het formaat van de geometrie, en de maatvoering volgt en toont de nieuwe lengte. Hij blijft gekoppeld wanneer u de geometrie in een groep of component maakt.

Als een eind ergens geplaatst werd dat geen hoek is (op een vlak, of in de lege ruimte), of als zijn hoek gewist wordt, blijft dat eind staan waar het stond. De maatvoering meet nog steeds, maar kan alleen van formaat veranderen vanuit zijn andere eind.

## Maatvoeringen verwijderen

- Eén maatvoering: selecteer hem en druk op {{key:Delete}}, of klik erop met de {{ui:Gum}}.
- Alle maatvoeringen: klik, met niets geselecteerd, op {{ui:Alle maatvoeringen verwijderen}} in {{ui:Entity info}}.

Maatvoeringen worden opgeslagen in het `.modelcraft`-bestand. Ze worden niet geëxporteerd naar andere formaten, die alleen het 3D-model dragen. Een bestand met maatvoeringen opent nog steeds in een oudere ModelCraft, zonder die maatvoeringen.
