---
title: Tömegmodell küldése a BimCraft alkalmazásnak
summary: A nyomás/húzás eszközzel modellezett tömbök átadása a BimCraft alkalmazásnak tömegváltozatokként, a szintekkel, az alaprajzzal, a bruttó alapterülettel és a térfogattal, amelyeket minden testből kiszámolunk.
keywords: tömeg, tömegmodell, koncepció, változatok, bimcraft, ifc, bim, nyomás/húzás, szintek, emeletek, bruttó alapterület, alaprajz, térfogat, küldés, átadás, épülettömeg, 2. szakasz
from: 73c51f3f
---

## Mit fog csinálni

Alakítsa a nyomás/húzás eszközzel modellezett tömböket olyan tömegváltozatokká, amelyeket a BimCraft ért, hogy a koncepció épületmodellként folytatódhasson.

## Mielőtt elkezdi

Minden tömeget tegyen **csoporttá** vagy **komponenssé**, és nevezze el. Mindegyikből egy változat lesz. A szabad geometria nem kerül elküldésre.

## Küldés

1. Jelölje ki az elküldendő csoportokat. Kijelölés nélkül minden legfelső szintű csoport és komponens elmegy.
2. Válassza az {{ui:Exportálás}} lehetőséget, majd a {{ui:Tömegmodell küldése a BimCraft alkalmazásnak…}} lehetőséget.
3. Írja be a {{ui:A változatkészlet neve}} és a {{ui:Szintmagasság}} értékét.
4. Ellenőrizze a listát: az egyes változatok szintjeit, alaprajzát, bruttó alapterületét és térfogatát.
5. Válassza a **Küldés a BimCraft alkalmazásnak** lehetőséget, hogy egy új lapon megnyíljon a BimCraft a változatokkal, vagy a {{ui:Mentés IFC-ként}} lehetőséget, hogy letöltse a fájlt, és ott maga nyissa meg.

A BimCraftban a változatok a „Tömegváltozatok a modellben” alatt láthatók, ahol az egyik aktuális változatként beállítható, és falakká és padlókká fejleszthető.

## Hogyan lesz a testből tömeg

- **A szintek** a test magassága osztva a szintmagassággal, kerekítve, és legalább egy. A szintek egyenlően osztoznak a test magasságán, így egy 10 m-es tömb 3 m-es szintekkel 3 szint, egyenként 3,33 m magas.
- **Egy szint területe** a test saját vízszintes metszetének területe az adott szint szintjén. Egy visszalépő tömb felső szintjei kisebbek, a bruttó alapterület pedig ezek összege.
- **Az alaprajz** a test alapja feletti metszet körvonala.
- **A térfogat** a test saját térfogata.

Az IFC-fájlban minden változat egy épületelem-helyettesítő (proxy): az alaprajz a test magasságára emelve, szintenként egy térrel, amely hordozza a szint bruttó területét. Minden változat ugyanazon az épületen osztozik, annyi szinttel, mint a legmagasabb változat.

## Egyszerűsített alakzatok

Egy egyszerű, függőleges tömb pontosan úgy megy át, ahogy modellezte. Minden más is elküldésre kerül, és a lista megmondja, miért egyszerűsített az alakja:

- **Nem minden szintje akkora, mint az alapja** (visszalép vagy lejt): a BimCraftban a tömeg az alapkörvonal a teljes magasságra emelve, de a szintek területei és a térfogat a test saját.
- **A test nincs lezárva**: azok a szintek, amelyek metszete nem zárható le, nem mérhetők, és nullának számítanak. Zárja le a testet ({{ui:Entitásinfó}} ezt írja ki: „Test: Igen”), a teljes adatokhoz.
- **Alapjának több körvonala van**: a legnagyobbat használják alaprajzként.

## Jó tudni

- Az {{ui:IFC a BimCrafthoz (.ifc)}} más exportálás: csak alakzatokat és neveket küld, szintek és területek nélkül.
- Semmi nem töltődik fel. A fájl ezen a számítógépen a BimCraft lapnak adódik át.
