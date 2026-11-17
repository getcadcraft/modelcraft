---
title: Een model verlichten met lampen
summary: Plaats lampen, spotlights en lichtpanelen in een model, zodat gerenderde afbeeldingen kamers 's nachts of verlichte interieurs met zachte schaduwen kunnen tonen.
keywords: licht, lampen, lamp, verlichting, lichtbron, plafondlamp, spotlight, downlight, lichtpaneel, arealicht, lumen, helderheid, kleurtemperatuur, warm, nacht, interieur, renderen
from: c8d72cbc
---

Lampen verlichten [gerenderde afbeeldingen](topic:render). In de 3D-weergave veranderen ze niets; daar toont elke lamp zich als een klein teken in de eigen kleur.

## Een lamp toevoegen

1. Klik in het gedeelte {{ui:Lampen}} rechts op {{ui:Lamp}}, {{ui:Spotlicht}} of {{ui:Lichtpaneel}}.
2. Klik waar hij moet komen. Snap werkt zoals bij het tekenen.
   - Op een plafond of wand hangt een **lamp** 25 cm van het vlak, aan de kant waar u vandaan kijkt; een **lichtpaneel** ligt op het vlak en straalt ervan weg.
   - Een **spotlight** vraagt twee klikken: eerst waar hij staat, dan waar hij naar wijst.

De nieuwe lamp is geselecteerd in {{ui:Lampen}}, klaar om te wijzigen.

## Een lamp wijzigen

Klik op de naam van een lamp in {{ui:Lampen}}, of op het teken in de weergave met {{ui:Selecteren}}. Daarna:

| Instelling | Wat het doet |
|---|---|
| {{ui:Helderheid (lumen)}} | Hoeveel licht hij geeft. Een huishoudlamp is ongeveer 800 lumen; een helder plafondpaneel 3000 |
| {{ui:Kleur}} | {{ui:Warm}} (een gewone huislamp), {{ui:Neutraal}} of {{ui:Daglicht}}, of elke kleur |
| {{ui:Bundel (graden)}} | De kegel van een spotlight, van rand tot rand |
| {{ui:Lampgrootte}}, {{ui:Breedte}}, {{ui:Diepte}} | Grotere lampen en panelen geven zachtere schaduwen |
| {{ui:Rood (x)}}, {{ui:Groen (y)}}, {{ui:Hoogte}} | Waar hij staat |

Het vinkje naast de naam van een lamp zet hem aan of uit. {{ui:De lamp verwijderen}} verwijdert hem. Elke wijziging is één stap: {{key:Ctrl+Z}} maakt haar ongedaan. Lampen worden opgeslagen in het bestand `.modelcraft`.

## Afbeeldingen 's nachts

In {{ui:Een afbeelding renderen…}} vinkt u {{ui:Een andere datum en tijd voor deze afbeelding gebruiken}} aan en kiest u een avonduur. Met de zon onder wordt de lucht donker en verlichten alleen de lampen het model. Verhoog {{ui:Helderheid}} in het dialoogvenster als de afbeelding te donker is, of voeg lampen toe.

:::tip
Voor een kamer die van binnen wordt gezien, zet u de camera in de kamer (draaien en inzoomen, of een [scène](topic:scenes)), voeg een lamp aan het plafond toe en render 's nachts. In de modus {{ui:Snel}} blijven hoeken die van een lamp af liggen donkerder dan op een foto; met de [modus hoge kwaliteit](topic:render#high-quality) kaatst het licht van de muren.
:::
