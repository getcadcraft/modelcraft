---
title: Megnyitás, mentés, importálás és exportálás
summary: A ModelCraft-fájl, amit behozhat és kiküldhet, hová kerülnek a fájlok, és mi változik offline és a böngészők között.
keywords: megnyitás, mentés, importálás, exportálás, fájl, 3dm, skp, helyreállítás, automatikus mentés, legutóbbiak, asztali, megnyitás 3d-ben, átadás, letöltés, modelcraft-fájl, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formátumok, offline, mentés másként
from: 0b4896d1
---

A ModelCraft a saját számítógépén lévő fájlokat olvassa és írja. Semmi sem töltődik fel: a megnyitott fájlt a böngészőn belül olvassa be, a mentett fájl pedig letöltés. Lásd [Hová kerülnek a fájljai](common:your-files).

## Formátumok egy pillantásra

| Formátum | Megnyitás | Importálás | Exportálás | Mire való |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | igen | nem | {{ui:Mentés}} | A munkafájlja. Mindent megőriz. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | igen | igen | {{ui:Mentés másként}}, {{ui:Exportálás}} | Renderelő és jelenetösszeállító programok. A ModelCraft saját USD-je mindent megőriz. Lásd [USD mentése, megnyitása és exportálása](topic:usd). |
| SketchUp (`.skp`) | nem | igen | nem | SketchUp-modellek behozatala. Megőrzi a csoportokat, komponenseket, színeket, a lapokon lévő textúrákat, a címkéket és a puha éleket. Lásd [SKP-modell behozatala](topic:import-sketchup-files). |
| Collada (`.dae`) | nem | igen | igen | Modellcsere más 3D modellezőkkel. Megőrzi a csoportokat, komponenseket és színeket. |
| OBJ (`.obj`) | nem | igen | igen | Renderelő és vizualizációs programok. |
| glTF (`.glb`, `.gltf`) | nem | igen | csak `.glb` | Webes megjelenítők, játékmotorok, AR. |
| STL (`.stl`) | nem | igen | igen | 3D nyomtatás (milliméterben). |
| PLY (`.ply`) | nem | igen | igen | Színes hálók: szkennelések, színes nyomtatás. |
| FBX (`.fbx`) | nem | igen | nem | Animációs és játékprogramok modelljei (FBX 2011 és újabb). |
| Alembic (`.abc`) | nem | igen | nem | Geometriagyorsítótárak, az első mintájuknál. |
| STEP (`.step`, `.stp`) | nem | igen | nem | Alkatrészmodellezők és beszállítók alkatrészei, zárt hálókként, valódi méretben. Lásd [Fájlformátumok](topic:formats). |
| `.3dm` | nem | igen | nem | NURBS-modellek: poliszelületek, hálók, görbék, blokkok és rétegek, hálókként, élekként, komponensekként és címkékként. Lásd [.3dm modell behozatala](topic:import-3dm-files). |
| 3MF (`.3mf`) | nem | nem | igen | 3D nyomtatás színekkel (milliméterben). A {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} parancsból: lásd [Modell előkészítése 3D nyomtatáshoz](topic:print-3d). |
| IFC (`.ifc`) | nem | nem | igen | BIM-programok és a BimCraft. |
| DWG (`.dwg`) | nem | igen | igen | Helyszínrajz vagy alaprajz, amelyre modellezni lehet; a modell elküldése CAD-programnak. |
| DXF (`.dxf`) | nem | igen | igen | Ugyanez, bármely CAD-programhoz. |

A [Fájlformátumok részletesen](topic:formats) pontosan felsorolja, mit őriz meg és mit hagy ki az egyes formátum.

## A ModelCraft-fájl

A `.modelcraft` fájl az egész modellt megőrzi: a geometriát, a csoportokat, a komponenseket, a segédvonalakat, a jeleneteket, a mértékegységeket, valamint a mentéskor használt kamerát és stílust. A visszavonási előzményeket nem őrzi meg.

### Modell megnyitása

1. Kattintson a {{ui:Megnyitás}} gombra a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűt.
2. Ha a képernyőn lévő modellnek nem mentett módosításai vannak, a ModelCraft rákérdez: „Ennek a modellnek nem mentett módosításai vannak. Mentsen előbb egy másolatot?” Válassza a {{ui:Másolat mentése}}, a {{ui:Módosítások elvetése}} vagy a {{ui:Mégse}} lehetőséget.
3. Válassza ki a `.modelcraft` fájlt.

A modell abban a mértékegységben nyílik meg, amelyben mentették, és azzal a kamerával, amellyel mentették. Egy `.modelcraft` fájlt a 3D nézetre is húzhat, vagy rákattinthat a kezdőkártyán a legutóbbi fájlok listájában (a fájlt újra megnyitni tudó böngészőkben és az asztali alkalmazásban).

:::desktop
Az asztali alkalmazásban egy `.modelcraft` fájlra duplán kattintva megnyílik a ModelCraftban, és ugyanígy a **Megnyitás ezzel** egy Collada-, OBJ-, glTF-, DWG- vagy DXF-fájlon (új modellbe importálódik).
:::

### Modell mentése

Kattintson a {{ui:Mentés}} gombra, vagy nyomja meg a {{key:Mod+S}} billentyűt. A böngésző letölti a `<name>.modelcraft` fájlt, ahol a név a megnyitott fájl neve, új modellnél pedig „Untitled”.

:::desktop
Az asztali alkalmazásban a {{ui:Mentés}} helyben írja a megnyitott fájlt. Új modellnél rákérdez, hová mentse.
:::

- A {{ui:Mentés másként}} ({{key:Mod+Shift+S}}) másolatot ment `.modelcraft` fájlként vagy [USD](topic:usd)-ként; ahol a böngésző tudja, rákérdez a névre és a helyre. Máskülönben nevezze át a letöltött fájlt: az átnevezett fájl megnyitása utáni következő mentés az új nevet használja.
- Minden mentés új letöltés. A böngésző beállításaitól függően egyenesen a letöltések mappába kerül, vagy rákérdez a helyre. Ha már van ott ilyen nevű fájl, a legtöbb böngésző számot ad hozzá, például `Untitled (1).modelcraft`.

:::chromium
Hogy minden alkalommal mappát választhasson, nyissa meg a böngésző beállításait, keressen rá a „letöltések” szóra, és kapcsolja be a „Letöltés előtt kérdezze meg, hová mentse az egyes fájlokat” beállítást.
:::

:::firefox
Hogy minden alkalommal mappát választhasson, nyissa meg a **Beállítások**, majd az **Általános** részt, és a „Letöltések” alatt válassza a „Mindig kérdezzen rá, hová mentse a fájlokat” lehetőséget.
:::

:::safari
A letöltések helyének módosításához nyissa meg a **Safari**, majd a **Beállítások**, majd az **Általános** részt, és állítsa be a „Fájlletöltések helye” mezőt.
:::

### Új modell indítása

Kattintson az {{ui:Új}} gombra. Ha vannak nem mentett módosítások, a ModelCraft előbb rákérdez. Az új modell üresen indul, a területi beállításnak megfelelő mértékegységben (az Egyesült Államokban láb és hüvelyk, máshol milliméter), jelenetek nélkül.

### Ha a böngésző bezárul mentés előtt

A ModelCraft minden módosítás után néhány másodperccel másolatot tart a nem mentett munkáról a böngészőben. Ha a lap vagy a böngésző mentés előtt bezárul, a ModelCraft következő megnyitásakor rákérdez: „Helyreállítja a munkáját?” A helyreállítás úgy nyitja meg a modellt, ahogy volt, még nem fájlba mentve: mentse el, hogy megmaradjon. Lásd [Munka helyreállítása](common:recover).

### A CadCraftból: Megnyitás a ModelCraftban

A CadCraft rajzoló alkalmazásban a **Nézet**, majd a **Továbbiak**, majd a **Megnyitás a ModelCraftban** a megnyitott rajzot DWG-ként átadja a ModelCraftnak egy új lapon. Úgy érkezik, mint egy importált DWG: vonalak a talajon, csoportban, készen arra, hogy rá lehessen modellezni. Semmi sem töltődik fel; a fájl a böngésző saját tárhelyén keresztül jut át.

## Importálás

Az importálás hozzáad egy fájlt a megnyitott modellhez; nem váltja le.

1. Kattintson az {{ui:Importálás}} gombra a {{ui:Fájl}} csoportban, vagy húzza a fájlt a 3D nézetre.
2. Válasszon egy SketchUp-, Collada-, OBJ-, glTF-, FBX-, PLY-, STL-, Alembic-, STEP-, `.3dm`-, USD-, DWG- vagy DXF-fájlt.

   A fájl **egy csoportként** érkezik, kijelölve, és a nézet ráközelít. Az állapotsor megmondja, mi érkezett, és felsorolja, amit nem tudott importálni, például: „Nem importálva: 2 textúra”.

3. Ha közvetlenül a geometriáján szeretne dolgozni, kattintson duplán a csoportra a belső szerkesztéshez, vagy kattintson a {{ui:Felbontás}} gombra.

Néhány tudnivaló:

- **Méret és felfelé irány:** a Collada-fájlok megadják a mértékegységüket és hogy melyik tengely néz felfelé, és a ModelCraft átváltja őket. A glTF mindig méterben van. Az OBJ-fájlok nem hordoznak mértékegységet: a ModelCraft méternek olvassa őket, Y felfelé. Ha egy OBJ ezerszer túl nagy vagy túl kicsi méretben érkezik, használja a [Léptékezést](topic:rotate-scale) `0.001` vagy `1000` tényezővel.
- A **DWG és a DXF** vonalakként (élekként) érkezik a talajra, nem lapokként. Ha a rajz nem adja meg a mértékegységét, egy „Rajzegységek” című párbeszédpanel megkérdezi, mekkora egy rajzegység. Lásd [Modellezés helyszínrajzon](topic:site-plan).
- **Korlátok:** a 300 MB-nál nagyobb fájlok importálását megtagadja a program, a 200 MB-nál nagyobbak megnyitását is. A 2 milliónál több csúcsot vagy lapot tartalmazó fájlokat túl nagyként utasítja el.

## Exportálás

1. Kattintson az {{ui:Exportálás}} gombra a {{ui:Fájl}} csoportban.
2. Válasszon formátumot: {{ui:glTF bináris (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL nyomtatáshoz (.stl, milliméter)}}, {{ui:PLY színekkel (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC a BimCrafthoz (.ifc)}}, {{ui:DWG CAD-hez (.dwg, 2004)}} vagy {{ui:DXF CAD-hez (.dxf, R12)}}.

A böngésző letölti a fájlt a modell nevével. Az egész modell exportálódik, nem csak a kijelölés. Üres modellt nem exportál: „A modell üres: előbb rajzoljon valamit.” Lásd [Modell exportálása más programoknak](topic:export-model).

## Online és offline

A ModelCraftban minden a saját számítógépén fut, így a modellezés, a megnyitás, a mentés, az importálás és az exportálás is kapcsolat nélkül működik, ha az alkalmazás egyszer betöltődött.

Hogy a ModelCraft egyáltalán kapcsolat nélkül is megnyíljon, mentse el offline használatra, amíg online van:

1. Kattintson a {{ui:Mentés offline használatra}} gombra a felső alkalmazássávban.
2. A gomb számol mentés közben („Mentés: 40 / 212”). A ModelCraft a saját fájljait menti (köztük a DWG-olvasóját), ezt a súgót és a 3D könyvtárat, így eltarthat egy ideig.
3. Amikor a gomb azt írja: {{ui:Offline használatra kész}}, a ModelCraft ugyanarról a címről kapcsolat nélkül is megnyílik, és a DWG-importálás is működik offline.

Később kattintson az {{ui:Offline használatra kész}} gombra a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőségért. Ha a gomb azt írja: {{ui:Nem sikerült menteni}}, egyes fájlok nem töltődtek le: ellenőrizze a kapcsolatot, és kattintson rá az újrapróbáláshoz. Az {{ui:Az offline mód nem érhető el}} azt jelenti, hogy ez a böngészőablak nem tud másolatot tartani (privát ablakok és egyes felügyelt számítógépek). Lásd [Offline munka](common:offline).

A felhőbe mentés még nem érhető el. Minden modell ott van, ahová elmenti.

:::offline
Offline van. Folytathatja a modellezést és a mentést. Amíg az alkalmazássáv nem az {{ui:Offline használatra kész}} feliratot mutatja, ne töltse újra ezt a lapot, amíg nem kapcsolódik újra.
:::

## Asztali alkalmazás

:::desktop
A ModelCraftot a CadCraft Studióban használja, abban az asztali alkalmazásban, amelyben mind a nyolc alkalmazás megvan. A fájlok ott nyílnak meg és mentődnek, ahol Ön választja.
:::

:::web
A ModelCraft a böngészőben fut Macen, Windowson és Linuxon, valamint a CadCraft Studióban, abban az asztali alkalmazásban, amelyben mind a nyolc alkalmazás egyetlen telepítésben van; a getcadcraft.com/download oldalról.
:::
