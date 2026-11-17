---
title: Stijlen en zonneschaduwen
summary: Toon het model gearceerd, als verborgen lijnen, als draadmodel of doorzichtig, en bestudeer de schaduwen die het werpt op elke datum, tijd en plaats.
keywords: presentatieweergave, schone weergave, hulplijnen verbergen, assen verbergen, stijl, gearceerd, verborgen lijnen, draadmodel, röntgen, randen, schaduwen, zon, zonnestudie, zonnestand, datum, tijd, breedtegraad, lengtegraad, tijdzone, noord
from: 09c95329
---

Het paneel {{ui:Stijl}} rechts bepaalt hoe het model wordt getekend. Niets daarin verandert het model zelf, en het valt niet onder ongedaan maken. Elke [scène](topic:scenes) onthoudt zijn eigen stijl, en het bestand onthoudt de stijl die u had toen u opsloeg.

## Vlakken

Kies er een in de lijst {{ui:Vlakken}}:

| Stijl | Ziet eruit als |
|---|---|
| {{ui:Gearceerd}} | Massieve vlakken, zacht belicht. Vlakken die van achteren worden bekeken zijn blauwgrijs. Geïmporteerde kleuren worden getoond. |
| {{ui:Verborgen lijnen}} | Vlakken in de achtergrondkleur, met randen in inkt: een schone lijntekening waarin verborgen lijnen zijn verwijderd. Wit op {{ui:Papier}}, donker op {{ui:Model}}. |
| {{ui:Draadmodel}} | Alleen randen. Vlakken worden niet getekend, maar tellen wel mee bij klikken en snappen: u kunt er niet doorheen kiezen. |
| {{ui:Röntgen}} | Doorzichtige vlakken, om te zien wat erachter of erin zit. Net als bij het draadmodel stoppen klikken en snappen bij het dichtstbijzijnde vlak. |

{{ui:Randen tonen}} zet de randen aan of uit in elke stijl behalve {{ui:Draadmodel}}. Staat het uit, dan toont {{ui:Verborgen lijnen}} vrijwel niets, omdat de vlakken dan met de achtergrond samenvallen. Zachte randen, zoals de zijkanten van een uitgetrokken cirkel, worden nooit getekend.

## Zonneschaduwen aanzetten

1. Vink {{ui:Zonneschaduwen}} aan. De zonne-instellingen eronder worden actief, en het model werpt schaduwen op zichzelf en op de grond.
2. Stel de plaats in:
   - {{ui:Breedtegraad}}: noord is positief, zuid negatief (New York is ongeveer 40.7, Sydney ongeveer -33.9).
   - {{ui:Lengtegraad}}: oost is positief, west negatief (New York is ongeveer -74.0).
   - {{ui:UTC-verschil}}: het verschil van de locatie met UTC in uren, zoals `-5` voor New York in de winter. ModelCraft past geen zomertijd toe; gebruik `-4` voor New York in de zomer.
3. Stel de {{ui:Datum}} in (maand en dag) en sleep de schuif {{ui:Tijd}}. De tijd beweegt in stappen van 15 minuten en staat naast de schuif, zoals "3:00 pm".

Een regel onder de instellingen zegt waar de zon staat, zoals "Zon 52° omhoog, 250° vanaf noord. Noord is de groene as." 's Nachts staat er "De zon is op dit moment onder."

Een nieuw model start met de zon op 21 juni om 3:00 pm, op breedtegraad 40, lengtegraad -105, UTC-verschil -7.

## Het model naar het noorden richten

Het noorden van ModelCraft is altijd de **groene as**. Om een echte locatie te bestuderen, draait u het model zodat de noordzijde langs groen wijst: selecteer alles ({{key:Mod+A}}), druk op {{key:Q}}, klik een middelpunt op de grond en draai het over de hoek van de locatie ten opzichte van het noorden (zie [Roteren en schalen](topic:rotate-scale)).

## Een zonnestudie

1. Stel de plaats en de datum in.
2. Voeg een scène toe ({{ui:Scène toevoegen}} in {{ui:Scènes}}).
3. Verschuif de tijdschuif en voeg daarna een andere scène toe. Herhaal dit voor elk uur dat u wilt.
4. Klik op {{ui:Afspelen}} om ze na elkaar te bekijken. Zie [Weergaven opslaan als scènes](topic:scenes).

## Let op

- Schaduwen kunnen gekarteld lijken bij een zeer groot model, omdat één schaduwkaart het hele model bestrijkt.
- Schaduwen worden niet getekend in {{ui:Draadmodel}}.
- De zonnestand volgt de NOAA-zonneberekening en is nauwkeurig tot een fractie van een graad, ruim voldoende voor volumestudies. Atmosferische breking wordt genegeerd, daardoor kunnen zeer lage zonnehoeken bij zonsopkomst en zonsondergang iets afwijken.

## Presentatieweergave

{{ui:Weergaven}} › {{ui:Presentatieweergave}} (of {{key:Shift+P}}) toont alleen het model: de assen, hulplijnen en hulppunten, de omtrekken van doorsnedevlakken (de snede blijft), de markeringen van lampen, de kader van een open groep, de snapmarkeringen en tips, en de selectiemarkering verdwijnen allemaal. Gebruik dit om het model duidelijk te bekijken, of vóór een schermafbeelding. Gereedschappen werken nog en snappen nog; u ziet alleen de markeringen niet. Druk opnieuw op {{key:Shift+P}} om ze terug te zetten. Maten blijven staan, omdat ze deel uitmaken van de tekening. Terwijl u binnen een groep bewerkt, vervaagt de rest van het model niet meer: het toont zoals het is, inclusief texturen.
