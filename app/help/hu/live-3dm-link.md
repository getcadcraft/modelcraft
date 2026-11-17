---
title: Egy .3dm modell tartása élő kapcsolatban
summary: Modell módosítása abban a programban, amelyben készült, és a változás megjelenése itt, Rhino 8-ból vagy egy Grasshopper-definícióból, újramentés és újraimportálás nélkül.
keywords: rhino, grasshopper, élő kapcsolat, élő hivatkozás, 3dm, nurbs, parametrikus, hivatkozás, szinkronizálás, szkript, hivatkozási modell, küldés
from: 331b0a7e
---

Továbbra is ott modellezzen, ahol eddig, és az eredményt itt használja: rendereléshez, megvilágításhoz vagy egy jelenet köré építéshez. A másik programban végzett minden módosítás frissíti a ModelCraft egy csoportját.

:::note
A kapcsolathoz a **CadCraft Studio** szükséges ugyanazon a számítógépen. Böngészőlap nem tud kapcsolatot létesíteni. Semmi nem megy át az interneten: a szkript ennek a számítógépnek a saját címén keresztül beszél a Studióval, tokennel.
:::

:::warning
Ezt a kapcsolatot a szkript fájlírójával és a másik program helyettesítőjével teszteltük, még nem magában a Rhino és a Grasshopper programban. Ha ott valami nem működik, írja le, mit jelzett.
:::

## Beállítás

1. A Studióban nyissa meg a ModelCraftot. A {{ui:Beállítások}} › {{ui:ModelCraft}} › {{ui:Asszisztensek}} menüpontban pipálja be a **Mesterséges intelligencia-asszisztensek és szkriptek használhatják a ModelCraftot** opciót, majd kattintson a **Szerkesztés** gombra.
2. A Studióban válassza az {{ui:Asszisztens csatlakoztatása}} lehetőséget. Megmutatja a címet és a tokent, amelyet lentebb be kell illesztenie.
3. Töltse le a szkriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Szkript futtatása a modellezőprogramban

1. Futtassa a `cadcraft_link.py` fájlt a Rhino szkriptszerkesztőjében (Python 3 a Rhino 8-ban).
2. Először adja meg a címet és a tokent. Ezek a `.cadcraft-link.json` fájlban maradnak a saját mappájában, soha nem a modellben. A Studio minden indításkor új tokent készít, ezért a szkript akkor újra kérdez.

Az egész modell egy csoportként érkezik, a dokumentum nevét viselve, például „chair (linked)”. Ezután minden módosítás egy rövid szünet után érkezik meg, és csak a megváltozott objektumok kerülnek elküldésre. A kapcsolat leállításához futtassa újra a szkriptet.

## Szkriptkomponens a vizuális szerkesztőben

Először egyszer futtassa a szkriptet a Rhino programban, hogy a cím és a token mentésre kerüljön.

1. Adjon hozzá egy Script komponenst (Python 3), és illessze bele a `cadcraft_link.py` teljes tartalmát.
2. Adja meg ezeket a bemeneteket: `G` (a geometria, listahozzáféréssel), `N` (egy név, nem kötelező), `On` (logikai kapcsoló) és `Target` (nem kötelező: `model` vagy `part`, ha mindkét alkalmazás nyitva van).
3. Állítsa az `On` értékét igazra.

Minden számítás elküldi a `G`-t, és lecseréli az előző alkalommal küldött tartalmat, így a csúszka húzása frissíti a csoportot itt. A kimenete, az `a`, megmondja, mi történt. Minden komponensnek saját csoportja van.

## Mit lehet a csoporttal csinálni

- **Mozgatás, címkézés, építés köré.** A csoport helye és címkéje minden frissítésnél megmarad, ugyanúgy a mellette lévő minden más is.
- **Ne szerkessze belülről.** Minden frissítés lecseréli a csoport tartalmát. Azokat az objektumokat a másik program birtokolja.
- **Visszavonás.** A két másodpercen belüli frissítések egy visszavonási lépést osztanak meg, így a {{key:Mod+Z}} egy teljes húzást visszavon. A következő frissítés visszaállítja a modellt.
- **Mentés.** A mentett fájl megőrzi a kapcsolatot. A fájl újranyitása után futtassa újra a szkriptet, és ugyanaz a csoport frissül.

## Mi kerül át

Hálók, poliófelületek, felületek és kihúzások a képernyőn látható háló formájában; a SubD a saját hálójaként; a görbék élekként; a blokkok külön objektumokként, ott, ahol állnak (nem komponensként); a rétegek címkékként; valamint a színek és a mértékegységek. Hogy ezek itt hogyan jelennek meg, lásd: [Egy .3dm modell importálása](topic:import-3dm-files).

Kimarad, a másik programban darabszámmal jelezve: a pontok, a szövegek, a méretek, a lámpák és hasonlók.

**Csak egy irányba.** Az itt végzett módosítások nem kerülnek vissza a másik programba.

## Ha valami nem sikerül

- **„Egyetlen ModelCraft- vagy PartCraft-ablak sem engedi”:** végezze el a beállítás 1. lépését.
- **„A Studio elutasította a tokent”:** a Studio újraindult. Másolja be az új tokent, és futtassa újra a szkriptet. Grasshopper esetén előbb a Rhino programban futtassa.
- **„Nem érhető el a CadCraft Studio”:** a Studio nem fut, vagy a cím megváltozott.
