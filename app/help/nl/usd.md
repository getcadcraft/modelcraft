---
title: USD opslaan, openen en exporteren
summary: Sla het hele model op als USD (.usda, .usdc of .usdz) zonder verlies, open het weer, en importeer USD-scènes uit andere 3D-programma's.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, opslaan als, exporteren, importeren, scène-assemblage, archviz, openpbr, materialx, pakket
from: 73d299f9
---

USD is een scèneformaat dat veel 3D-, render- en archviz-programma's delen. ModelCraft schrijft en leest het. `.modelcraft` blijft het formaat dat {{ui:Opslaan}} schrijft; USD is een keuze bij {{ui:Opslaan als}}.

## Opslaan als USD

1. Kies {{ui:Opslaan als}} in de groep {{ui:Bestand}} (of druk op {{key:Mod+Shift+S}}).
2. Kies het formaat: {{ui:Tekst (.usda)}} (leesbaar, goed voor versiebeheer), {{ui:Binair (.usdc)}} (kleinst en snelst) of {{ui:Pakket (.usdz)}} (één bestand met de texturen erin).
3. Het bestand wordt gedownload (in de desktopapp kiest u waar het wordt opgeslagen).

Dezelfde keuzes staan onder {{ui:Exporteren}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Niets gaat verloren

Open een USD-bestand dat ModelCraft heeft opgeslagen en u krijgt het model precies terug: vlakken met hun gaten, zachte en verborgen randen, krommen, groepen en componenten, labels, scènes, maatvoeringen, hulplijnen, doorsnedevlakken, lampen, geïmporteerde texturen en de weergave. Andere programma's zien hetzelfde model als meshes, groepen, prototypes voor componenten, materialen, lampen en camera's.

:::note
Als een ander programma de geometrie van een groep of component wijzigt, opent ModelCraft dat onderdeel als mesh met de wijziging behouden, en meldt hoeveel onderdelen het zo heeft gelezen. Een plaatsing die in een ander programma is verplaatst of verwijderd, blijft verplaatst of verwijderd.
:::

## Een USD van iemand anders openen of importeren

- {{ui:Openen}} een `.usd`-, `.usda`-, `.usdc`- of `.usdz`-bestand om een model ervan te beginnen.
- {{ui:Importeren}} er een om het aan het geopende model toe te voegen. Zet de bestanden waarnaar het verwijst (andere lagen, texturen) samen ermee neer.

Meshes komen binnen met hun normalen, UV-coördinaten en kleuren, gedeelde geometrie als componenten, materialen als verfkleuren, lampen als lampen en camera's als scènes, in meters met Z omhoog, ongeacht de eenheden en de omhooggerichte as van het bestand.

## Nog niet beschikbaar

Animatie, skeletten en MaterialX-knooppuntgrafieken worden nog niet als USD gelezen of geschreven. De eigen animaties en knooppuntmaterialen van ModelCraft blijven bewaard in een USD-bestand dat het heeft opgeslagen, zodat ModelCraft het weer kan openen, maar andere programma's zien ze niet. Lagen waarnaar een bestand verwijst die ModelCraft niet kan lezen (bijvoorbeeld een MaterialX-document), worden weggelaten met een opmerking.
