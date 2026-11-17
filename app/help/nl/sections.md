---
title: Snijvlakken: het model openknippen
summary: Plaats een snijvlak om in het model te kijken, schuif het erdoorheen, keer het om of schakel de snede uit.
keywords: doorsnede, snijvlak, snede, snijden, uitsnede, klem, binnenkant, plattegrond, plak, dwarsdoorsnede
from: 28c3a645
---

Een snijvlak snijdt het model open, zodat u erin kunt kijken en werken: een plattegrond van een huis, het binnenste van een kast. Het model wordt niet gewijzigd; de snede is alleen een weergave.

## Een snijvlak plaatsen

1. Klik op {{ui:Doorsnede}} in de groep {{ui:Camera}}.
2. Klik op een vlak. Het snijvlak wordt op dat vlak geplaatst, met vier pijlen die naar u toe wijzen.

   Klik ergens weg van een vlak voor een vierkant vlak loodrecht op de richting waarin u het meest kijkt. Druk eerst op een pijltoets om het loodrecht op rood ({{key:Right}}), groen ({{key:Left}}) of blauw ({{key:Up}}) te zetten.

De kant waar de pijlen naartoe wijzen, is **weggesneden**. Een vlak dat op een vlak is geplaatst, snijdt nog niets: schuif het het model in.

## Verschuiven, omkeren, uitschakelen

Klik op de omtrek van het vlak om het te selecteren. In {{ui:Entiteitsinformatie}}:

- {{ui:Langs zijn pijlen}} geeft aan waar het zit. Typ een nieuwe afstand en druk op {{key:Enter}} om het door het model te schuiven; typen van `-1m` op een vlak dat u op een voorvlak hebt geplaatst, verschuift het 1 m het model in.
- {{ui:Omkeren}} keert de pijlen om, zodat de andere kant wordt weggesneden.
- {{ui:Actief (snijdt het model)}}: één vlak snijdt tegelijk. Vink het vakje van een ander vlak aan, of plaats een nieuw vlak, en dat snijdt in plaats daarvan.
- Hernoem het in {{ui:Naam}}; verwijder het met {{key:Delete}} of de {{ui:Gum}}.

Waar het vlak door een gesloten volume gaat, wordt de snede met een donkere kleur opgevuld. Geometrie die niet gesloten is (een los vlak, een open doos) wordt wel doorgesneden maar niet opgevuld.

## Tonen en verbergen

In {{ui:Weergaven}}:

- {{ui:Snijvlakken tonen}} verbergt de omtrekken en pijlen van de vlakken (de snede blijft).
- {{ui:Doorsneden tonen}} schakelt de snede uit en toont het hele model, zonder de vlakken te verwijderen.

[Presentatieweergave](topic:styles-shadows#presentation-view) verbergt de omtrekken ook.

## Aandachtspunten

- Wat weggesneden is, kan niet worden aangeklikt of erop vastgeklikt, zodat u kunt tekenen op wat de snede toont.
- Snijvlakken, welk vlak actief is en de twee schakelaars worden opgeslagen in het ModelCraft-bestand. Elke wijziging is één stap in ongedaan maken.
- Exporten bevatten altijd het hele model: een doorsnede is een weergave, geen bewerking.
