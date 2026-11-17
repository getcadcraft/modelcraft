---
title: Wissen en opruimen
summary: Wis randen, groepen en hulplijnen met de gum of de Delete-toets, herstel gesplitste vlakken en repareer vlakken die de verkeerde kant op wijzen.
keywords: wissen, gum, delete, verwijderen, weghalen, herstellen, vlakken samenvoegen, opruimen, losse lijnen, wissen, vlak omkeren, achtervlak, ongedaan maken
from: 80b92a81
---

## Wissen met de gum

1. Druk op {{key:E}} voor de {{ui:Gum}}.
2. Klik op een rand, een groep of component, of een hulplijn. Die wordt gewist.
3. Om er meerdere te wissen, sleept u erover heen terwijl u de muisknop ingedrukt houdt. Alles waar u overheen gaat wordt gemarkeerd, en alles verdwijnt wanneer u loslaat.

De gum selecteert geen vlakken: een vlak verdwijnt wanneer u de randen wist die het nodig heeft. Vlakken zijn wat de gum doorzoekt om randen te vinden.

## Wat er met de vlakken gebeurt

- **Een rand tussen twee vlakken in hetzelfde vlak** (bijvoorbeeld een lijn die u over een vloer hebt getekend) verdwijnt, en de twee vlakken **herstellen zich** tot één.
- **Een rand die een vlak nodig heeft om gesloten te blijven** (de rand van een doos) neemt dat vlak mee. Wist u één bovenrand van een doos, dan verdwijnen de bovenkant en één zijde, en blijft een open doos over.
- **Losse uiteinden** (punten die geen rand meer gebruikt) worden opgeruimd.

Het wissen van de laatste kopie van een component verwijdert ook de component uit het paneel {{ui:Componenten}}.

## Wissen met de Delete-toets

1. Selecteer wat u wilt verwijderen met {{ui:Selecteren}}.
2. Druk op {{key:Delete}} of {{key:Backspace}}.

Hiermee worden ook vlakken verwijderd. Een vlak dat zo wordt verwijderd, laat zijn randen achter, zodat u de bovenkant van een doos kunt verwijderen en de omtrek behouden, en daar iets anders kunt tekenen.

## Losse lijnen op een vlak opruimen

Als een wand of vloer lijnen toont die u niet wilt (overblijfselen van het tekenen), wis ze dan met de {{ui:Gum}}. Lijnen die in het vlak liggen, herstellen zich weg; het vlak blijft.

## Een vlak dat de verkeerde kant op wijst

Een vlak dat van achteren wordt gezien is blauwgrijs. Als een vlak blauwgrijs toont aan de buitenkant van uw model:

1. Selecteer het vlak.
2. Klik op {{ui:Vlak omkeren}} in {{ui:Entiteitsinformatie}}.

De richting van vlakken is het belangrijkst bij exporteren: renderers, game-engines en 3D-printers kunnen vlakken die naar binnen wijzen verbergen of verkeerd lezen.

## Een fout ongedaan maken

{{key:Mod+Z}} maakt één stap per keer ongedaan, {{key:Mod+Y}} (of {{key:Mod+Shift+Z}}) herhaalt. Een sleep met de gum is één stap, ongeacht hoeveel er gewist werd. De statusbalk noemt wat ongedaan is gemaakt: "Wissen ongedaan gemaakt."
