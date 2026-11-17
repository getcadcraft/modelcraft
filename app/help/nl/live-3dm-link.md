---
title: Een .3dm-model live houden
summary: Wijzig een model in het programma waarin het gemaakt is en zie de wijziging hier, vanuit Rhino 8 of een Grasshopper-definitie, zonder opnieuw op te slaan en te importeren.
keywords: rhino, grasshopper, live-koppeling, live-verbinding, 3dm, nurbs, parametrisch, koppeling, synchroniseren, script, referentiemodel, versturen
from: 331b0a7e
---

Blijf modelleren waar u modelleert, en gebruik het resultaat hier: om het te renderen, te verlichten of er een scène omheen op te bouwen. Elke wijziging in het andere programma werkt één groep in ModelCraft bij.

:::note
De koppeling heeft **CadCraft Studio** nodig op dezelfde computer. Een browsertabblad kan de verbinding niet overnemen. Er gaat niets via internet: het script praat met Studio op het eigen adres van deze computer, met een token.
:::

:::warning
Deze koppeling is getest met de bestandsschrijver van het script en met een vervanging voor het andere programma, nog niet binnen Rhino of Grasshopper zelf. Als er daar iets misgaat, laat ons dan weten wat er stond.
:::

## Instellen

1. In Studio opent u ModelCraft. Onder {{ui:Instellingen}} › {{ui:ModelCraft}} › {{ui:Assistenten}} vinkt u **Laat AI-assistenten en scripts ModelCraft gebruiken** aan, en klikt u daarna op **Bewerken**.
2. In Studio kiest u {{ui:Assistent verbinden}}. Het toont het adres en de token die u hieronder plakt.
3. Download het script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Vanuit Rhino

1. Voer `cadcraft_link.py` uit in de scripteditor van Rhino (Python 3 in Rhino 8).
2. De eerste keer plakt u het adres en de token. Ze worden bewaard in `.cadcraft-link.json` in uw thuismap, nooit in het model. Studio maakt bij elke start een nieuwe token, dus dan vraagt het script opnieuw om het adres en de token.

Het hele model komt over als één groep met de naam van het document, bijvoorbeeld "chair (linked)". Daarna komt elke wijziging over zodra u even pauzeert, en worden alleen de gewijzigde objecten verstuurd. Voer het script opnieuw uit om te stoppen.

## Vanuit Grasshopper

Voer het script eerst één keer in Rhino uit, zodat het adres en de token worden opgeslagen.

1. Voeg een Script-component toe (Python 3) en plak daarin de volledige tekst van `cadcraft_link.py`.
2. Geef het deze invoer: `G` (de geometrie, met lijsttoegang), `N` (een naam, optioneel), `On` (een booleaanse schakelaar) en `Target` (optioneel: `model` of `part`, als beide apps open zijn).
3. Zet `On` op true.

Elke berekening stuurt `G` en vervangt wat de component de vorige keer stuurde, zodat het verschuiven van een schuifregelaar de groep hier bijwerkt. De uitvoer `a` zegt wat er gebeurd is. Elke component heeft zijn eigen groep.

## Wat u met de groep kunt doen

- **Verplaats hem, geef hem een tag, bouw eromheen.** Waar u de groep en zijn tag plaatst, blijft bij elke update staan, en ook alles ernaast.
- **Bewerk er niet in.** Elke update vervangt wat erin zit. Die objecten horen bij het andere programma.
- **Ongedaan maken.** Updates binnen twee seconden van elkaar delen één stap ongedaan maken, dus {{key:Mod+Z}} neemt een hele sleep terug. De volgende update brengt het model weer in overeenstemming.
- **Opslaan.** Het opgeslagen bestand bewaart de koppeling. Voer het script opnieuw uit nadat u het opent, dan wordt dezelfde groep bijgewerkt.

## Wat er overkomt

Meshes, polysurfaces, surfaces en extrusies als de mesh die u op het scherm ziet, SubD als zijn mesh, krommen als randen, blokken als afzonderlijke objecten waar ze staan (niet als componenten), lagen als tags, kleuren en eenheden. Zie [Een .3dm-model importeren](topic:import-3dm-files) voor hoe die hier verschijnen.

Weggelaten, met een aantal in het andere programma: punten, tekst, maatvoeringen, lampen en dergelijke.

**Eén richting alleen.** Wijzigingen hier gaan niet terug naar het andere programma.

## Als er iets misgaat

- **"Geen ModelCraft- of PartCraft-venster staat dit toe":** doe stap 1 van de installatie.
- **"Studio heeft de token geweigerd":** Studio is herstart. Kopieer de nieuwe token en voer het script opnieuw uit. Voor Grasshopper voert u het eerst in Rhino uit.
- **"Geen verbinding met CadCraft Studio":** Studio draait niet, of het adres is veranderd.
