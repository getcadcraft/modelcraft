---
title: Randen zacht maken en gladstrijken
summary: Verberg de randen tussen vlakken die onder een flauwe hoek samenkomen, zodat gebogen vormen als één glad oppervlak lezen, in ModelCraft en in geëxporteerde bestanden.
keywords: zacht maken, gladmaken, zachte randen, gladde schaduw, randen verbergen, facetten, gefacetteerd, gebogen, normalen, hard maken, hoek
from: 52d32453
---

Een gebogen vorm in ModelCraft is gemaakt van platte vlakken. **Zachte** randen tussen die vlakken worden niet getekend, en de vlakken die ze verbinden worden als één glad oppervlak geschaduwd, zodat een cilinder met 24 zijden rond lijkt.

Wanneer u een cirkel omhoog trekt met {{ui:Duwen/trekken}}, worden de zijden voor u zacht gemaakt. Voor andere vormen maakt u de randen zacht op hoek.

## Zacht maken op hoek

1. Selecteer wat zacht moet worden gemaakt: vlakken en randen, of een groep of component (al zijn randen).
2. Typ in {{ui:Entiteitsinformatie}} een hoek in {{ui:Zacht maken tot}}, zoals `20`, en klik op {{ui:Zacht maken}}.

Elke rand in de selectie waarvan de twee vlakken onder die hoek of minder draaien, wordt zacht; randen met een scherpere draai worden hard. De zijden van een prisma met 12 zijden draaien 30°, en de randen 90°, dus `31` maakt alleen de zijden zacht.

{{ui:Alles hard maken}} maakt elke rand in de selectie weer hard. Elke stap is één keer ongedaan te maken.

## Goed om te weten

- Alleen randen tussen precies twee vlakken worden zacht gemaakt. Losse randen blijven zoals ze zijn.
- Gladde schaduw werkt alleen over zachte randen heen: een vlak zonder zachte rand wordt vlak geschaduwd.
- Zachte randen worden bewaard in het ModelCraft-bestand. **glTF (.glb)**- en **OBJ**-exports bevatten de gladde schaduw (een normaal per hoek), zodat andere programma's hetzelfde oppervlak tonen. Collada- en STL-exports bevatten vlakke vlakken.
- Zachte randen zijn verborgen in elke vlakstijl, ook in {{ui:Röntgen}} en {{ui:Draadmodel}}. Om ze te zien, selecteert u de vorm en klikt u op {{ui:Alles hard maken}}; ongedaan maken brengt het zacht maken terug.
