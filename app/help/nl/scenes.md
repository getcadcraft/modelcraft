---
title: Weergaven opslaan als scènes
summary: Sla een camera en stijl op als scène, werk een scène bij en hernoem die, en blader door scènes of speel ze af om een ontwerp te presenteren.
keywords: scène, weergave, opgeslagen weergave, camera, presentatie, animatie, afspelen, diavoorstelling, page up, page down, tabbladen, rondloop
from: 38680d6e
---

Een **scène** onthoudt een camerapositie, een stijl en wat verborgen is: vanwaar u kijkt, perspectief of parallel, de vlakstijl, de randen, de zon-instellingen, verborgen groepen, uitgeschakelde tags en de doorsnede. Scènes worden opgeslagen in het `.modelcraft`-bestand.

## Een scène toevoegen

1. Stel de weergave in: draai eromheen, zoom, kies een stijl, stel de zon in.
2. Klik in het paneel {{ui:Scènes}} rechts op {{ui:Scène toevoegen}}.

   De scène verschijnt in de lijst, benoemd "Scène 1", "Scène 2" enzovoort, en als tabblad bovenaan de 3D-weergave. De statusbalk zegt "Scène 1 opgeslagen: deze camera, stijl en wat verborgen is."

## Naar een scène gaan

- Klik op het tabblad boven de 3D-weergave, of op de naam in de lijst {{ui:Scènes}}.
- Of druk op {{key:PageDown}} voor de volgende scène en {{key:PageUp}} voor de vorige. {{ui:Volgende}} en {{ui:Vorige}} onder de lijst doen hetzelfde.

De camera glijdt naar de scène in iets meer dan een halve seconde. Als uw computer is ingesteld om beweging te verminderen, springt hij er direct heen.

## Een scène wijzigen, hernoemen of verwijderen

Elke scène in de lijst heeft drie kleine knoppen na de naam:

- **Bijwerken** (de cirkelpijlen): slaat de huidige camera, stijl en wat verborgen is op in die scène. "Scène 2 bijgewerkt."
- **Hernoemen** (het potlood): opent een dialoogvenster "Scène hernoemen". Typ de nieuwe naam en klik op {{ui:Opslaan}}.
- **Verwijderen** (de prullenbak): verwijdert de scène. "Scène 2 verwijderd. Ctrl+Z haalt hem terug."

Scènes toevoegen, bijwerken, hernoemen en verwijderen zijn stappen in ongedaan maken, net als wijzigingen aan het model.

## De camera van een scène vergrendelen

Wanneer u dezelfde weergave steeds opnieuw rendert terwijl het ontwerp verandert, vergrendel dan de camera van die scène, zodat de weergave nooit per ongeluk verschuift.

1. Klik in de lijst {{ui:Scènes}} op de **vergrendelknop** (het open hangslotje) na de naam van de scène. Het sluit, en het tabblad van de scène boven de 3D-weergave toont een klein hangslotje. De statusbalk zegt "Scène 2: camera vergrendeld."
2. Ga naar de scène wanneer u wilt renderen: de camera keert precies terug naar de opgeslagen weergave, zodat afbeeldingen die ervan gemaakt zijn, aansluiten op de eerdere.

Terwijl de camera vergrendeld is, slaat **Bijwerken** nog steeds de stijl en wat verborgen is op in de scène, maar de camera blijft waar hij was, ook als u bent weggedraaid. Klik nogmaals op het hangslotje om het te ontgrendelen; Bijwerken slaat dan de huidige weergave opnieuw op. Vergrendelen en ontgrendelen zijn stappen in ongedaan maken, en de vergrendeling wordt opgeslagen in het `.modelcraft`-bestand.

## Presenteren

1. Voeg twee of meer scènes toe.
2. Klik op {{ui:Afspelen}} onder de lijst. ModelCraft gaat elke paar seconden naar de volgende scène en keert na de laatste terug naar de eerste.
3. Klik op {{ui:Stoppen}} (dezelfde knop) of druk op {{key:Esc}} om te stoppen.

Voor een zonstudie voegt u per uur één scène toe waarin alleen de {{ui:Tijd}} is gewijzigd, en speelt u ze daarna af. Zie [Stijlen en zonneschaduwen](topic:styles-shadows#a-sun-study).

Om te presenteren zonder de balken, drukt u twee keer op {{key:Ctrl+Shift+F}}: eerst volledig scherm, dan volledig scherm met verborgen balken. De scènetabbladen blijven boven de weergave staan.

## Wat een scène toont

Een scène onthoudt wat verborgen was toen u hem opsloeg: groepen en componenten die u [verborg](topic:hide-isolate), [tags](topic:tags) die u uitschakelde, en welke [snijvlakken](topic:sections) snijden. Naar de scène gaan verbergt en toont ze opnieuw. Zo kan de ene scène het hele huis tonen, de volgende het huis met de tag van het dak uit, en de volgende een doorsnede erdoor.

Verborgen losse vlakken en randen maken geen deel uit van scènes. Naar een scène gaan maakt geen stap in ongedaan maken. Scènes die door een eerdere versie van ModelCraft zijn opgeslagen, laten wat verborgen is zoals het is; klik op Bijwerken om het erin op te slaan.

## Een animatie exporteren

{{ui:Animatie exporteren}}, onder de lijst, speelt de scènes af van de eerste tot de laatste, waarbij de camera er soepel tussen beweegt, en slaat de film op als een **WebM**-video (twee seconden beweging en een korte pauze per scène). Die legt de weergave vast zoals u die ziet, op zijn formaat op het scherm, in de [presentatieweergave](topic:styles-shadows#presentation-view) (zonder assen, hulplijnen of selectie). Druk op {{key:Esc}} of klik nogmaals op de knop om te stoppen zonder op te slaan. WebM speelt af in browsers en VLC, en videobewerkers zetten het om.

Voor een gerenderde rondloop (lucht, zon, schaduwen, materialen) op een formaat dat u kiest, gebruikt u in plaats daarvan {{ui:Video renderen…}}: zonder animatiesleutels neemt die de scènes in volgorde als pad van de camera. Zie [Camera en objecten animeren](topic:animation).

## Aandachtspunten

- Het wijzigen van de stijl of het verplaatsen van de camera na naar een scène te zijn gegaan, wijzigt de scène niet totdat u op Bijwerken klikt.
- Scènes worden niet geëxporteerd naar Collada, OBJ, glTF, STL of IFC.
