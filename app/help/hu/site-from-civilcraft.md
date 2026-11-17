---
title: Helyszín átvétele a CivilCraftból
summary: Nyissa meg a CivilCraft által készített cím–helyszín fájlt, és adja hozzá a körülötte lévő épületeket és a telket tömegként és helyszínvonalként, csak azokat, amelyeket bejelöl.
keywords: helyszín, civilcraft, cím, telek, szomszédos épületek, tömegek, környezet, ccsite, nyílt adatok, openstreetmap
from: f28e4a3b
---

A CivilCraft meg tud keresni egy címet, és elmenteni, amit a nyílt adatforrások tudnak róla: a szomszédos épületeket, a telket, valamint az árvíz-, övezeti és talajkörvonalakat. A ModelCraft ezt a fájlt javaslatként kezeli. Semmi nem kerül hozzáadásra, amíg nem mondja ki.

## Fájl betöltése

1. A CivilCraftban küldje el a helyszínt a ModelCraftnak, vagy mentse a fájlt (a neve `.ccsite.json` végződésű).
2. A ModelCraftban nyissa meg vagy húzza rá a fájlt. Megjelenik egy lista, minden épülethez és a telekhez egy jelölőnégyzettel.
3. Írjon be magasságot azoknak az épületeknek, amelyeknek a forrás nem adott meg. Mindegyik mellett egy sor mondja meg, honnan származik a magasság: a szintszáma szintenként 3 m-rel, vagy a beírt magasság.
4. Nyomja meg a {{ui:A bejelöltek hozzáadása}} gombot.

A bejelölt épületek extrudált tömegekké válnak egy komponensben, a telek pedig vonallá a helyszín körül. Minden egyetlen visszavonási lépés. A címpont az origóban van; a koordináták tőle kelet és észak felé, méterben értendők.

Az árvíz-, övezeti és talajkörvonalak csak tájékoztatásként jelennek meg; nem rajzolódnak ki.

Az adatok nyílt forrásokból származnak, a forrásmegjelölésük a lista alján látható. A meg nem adott magasságok feltételezések, ezért ellenőrizze őket, mielőtt rájuk támaszkodik.
