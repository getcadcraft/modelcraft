---
title: Een SKP-model importeren
summary: Importeer een .skp-bestand met zijn groepen, componenten, kleuren, texturen, labels en zachte randen, zie wat is binnengekomen en wat niet, en ga door met modelleren.
keywords: skp, skp openen, importeren, componenten, groepen, labels, lagen, materialen, kleuren, texturen, verborgen, zachte randen, 3d warehouse, migreren, overschakelen
from: 325d3c81
---

ModelCraft leest SketchUp-bestanden (`.skp`) met zijn eigen lezer, in de pagina. Er wordt niets geüpload, en het werkt offline wanneer ModelCraft dat ook doet. Bestanden van SketchUp 3 tot en met 2026 zijn getest.

## Het bestand importeren

1. Klik op {{ui:Importeren}} in de groep {{ui:Bestand}} (of zet het `.skp`-bestand op de 3D-weergave).
2. Kies het bestand.

   De statusbalk meldt "house.skp wordt gelezen…" terwijl het leest, en daarna wat er binnenkwam, bijvoorbeeld "house.skp geïmporteerd (SketchUp 25.0.575): 1240 vlakken, 6 componenten, in een groep."

Het hele model komt binnen als één groep met de naam van het bestand, geselecteerd, en het beeld zoomt erop in. Eén keer {{key:Mod+Z}} haalt alles weer weg, inclusief de labels.

:::tip
Ontbind de importgroep ({{ui:Entiteitsinformatie}} › {{ui:Ontbinden}}) wanneer u de inhoud los in uw model wilt hebben in plaats van in één groep.
:::

## Wat er binnenkomt

- **Vlakken** met hun gaten, en **randen** die geen deel van een vlak zijn.
- **Groepen** komen binnen als groepen, en **componenten** als componenten: elke kopie van een component is een plaatsing van één definitie, dus het bewerken van één kopie wijzigt ze allemaal, zoals in SketchUp. Namen komen mee.
- **Kleuren.** Het eigen materiaal van een vlak geeft het zijn kleur. Een materiaal dat op een groep of component is geschilderd, wordt de verf van die plaatsing, zodat vlakken erin zonder eigen kleur die overnemen, zoals in SketchUp. Een component die op één plek rood en op een andere blauw is geschilderd, blijft één component.
- **Texturen.** Een vlak met een getextureerd materiaal komt binnen met zijn textuur, op het vlak gelegd zoals in het bestand, en de stijl {{ui:Gearceerd}} toont die. De afbeelding wordt bewaard in het ModelCraft-bestand wanneer u opslaat, en een [gerenderde afbeelding](topic:render) toont die ook. Een getextureerd materiaal dat op een hele groep of component is geschilderd, geeft die kopie alleen de kleur van het materiaal.
- **Labels.** Een groep of component op een SketchUp-label krijgt een ModelCraft-label met dezelfde naam, vermeld in {{ui:Labels}}, getoond of verborgen zoals in SketchUp. Als uw model al een label met die naam heeft, wordt dat label gebruikt.
- **Verborgen dingen komen verborgen binnen:** vlakken, randen, groepen en componenten, en vlakken en randen op een verborgen label. U ziet wat SketchUp toonde, en er gaat niets verloren: {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Alles weer tonen}} toont ze. Zie [Verbergen, isoleren en weer tonen](topic:hide-isolate).
- **Zachte en gladde randen** blijven zacht, zodat gebogen oppervlakken glad blijven lijken.
- **Maten** komen goed uit in elke eenheid: SketchUp-bestanden zijn van binnen in inches, en ModelCraft zet ze om.

## Wat er niet binnenkomt

De statusbalk zegt wat is weggelaten, met aantallen.

- **Sommige texturen** behouden alleen de kleur van hun materiaal: een textuur die ontbreekt in het bestand, een afbeelding in een formaat dat browsers niet kunnen tonen (zoals een Photoshop-bestand), of een textuur zonder formaat. Vlakken met een geprojecteerde textuur komen binnen met de textuur ongeveer geplaatst.
- **Labels op losse vlakken en randen.** ModelCraft labelt alleen groepen en componenten, dus een vlak of rand met een eigen label komt zonder label binnen, en de statusbalk telt ze. Maak zulke vlakken tot een groep ({{key:Shift+G}}) en label de groep.
- **Afbeeldingen** die in het model zijn geplaatst, tekst, maatvoering, hulplijnen, doorsnedevlakken, scènes en stijlen.

## Problemen

- "Dit is geen SketchUp-bestand." of "Dit SketchUp-bestand is beschadigd: …": het bestand is afgekapt of is iets anders met een `.skp`-naam. Sla het opnieuw op vanuit SketchUp, of vraag een nieuwe kopie aan.
- Een bestand van een SketchUp-versie die nieuwer is dan ModelCraft kent, wordt geweigerd, met de versie die het vond.
- Een model dat alleen uit afbeeldingen, tekst of maatvoering bestaat, meldt dat het niets te tonen heeft.

## Het model terugnemen

ModelCraft kan geen `.skp`-bestanden opslaan. Exporteer Collada ({{ui:Exporteren}} › `.dae`) en importeer dat in SketchUp: groepen, componenten en kleuren gaan mee; texturen gaan mee als de kleur van hun materiaal. Zie [Uw model exporteren](topic:export-model).
