---
title: Megnyitás, mentés, importálás és exportálás
summary: A ModelCraft-fájl, az, amit behozhat és kiküldhet, hová kerülnek a fájlok, és mi változik offline módban és böngészők között.
keywords: megnyitás, mentés, importálás, exportálás, fájl, 3dm, skp, helyreállítás, automatikus mentés, legutóbbiak, asztali, megnyitás 3D-ben, átadás, letöltés, ModelCraft-fájl, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formátumok, offline, mentés mint
from: 3f09ab72
---

A ModelCraft fájlokat olvas és ír a számítógépén. Semmi sem töltődik fel: a megnyitott fájl a böngészőn belül olvasódik be, a mentett fájl pedig letöltés. Lásd: [Hová kerülnek a fájljai](common:your-files).

## Formátumok áttekintése

| Formátum | Megnyitás | Importálás | Exportálás | Mire való |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | igen | nem | {{ui:Mentés}} | A munkafájl. Mindent megőriz. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | igen | igen | {{ui:Mentés mint}}, {{ui:Exportálás}} | Renderelő és jelenetösszeállító programok. A ModelCraft saját USD-je mindent megőriz. Lásd: [USD mentése, megnyitása és exportálása](topic:usd). |
| SketchUp (`.skp`) | nem | igen | nem | Modellek behozása a SketchUp-ból. Megőrzi a csoportokat, komponenseket, színeket, a lapokon lévő textúrákat, a címkéket és a lágy éleket. Lásd: [SKP-modell behozása](topic:import-sketchup-files). |
| Collada (`.dae`) | nem | igen | igen | Modellek cseréje más 3D-modellezőkkel. Megőrzi a csoportokat, komponenseket és színeket. |
| OBJ (`.obj`) | nem | igen | igen | Renderelő és vizualizációs programok. |
| glTF (`.glb`, `.gltf`) | nem | igen | csak `.glb` | Webes megjelenítők, játékmotorok, AR. |
| STL (`.stl`) | nem | igen | igen | 3D nyomtatás (milliméterben). |
| PLY (`.ply`) | nem | igen | igen | Színes hálók: szkennelések, színes nyomtatás. |
| FBX (`.fbx`) | nem | igen | nem | Animációs és játékprogramok modelljei (FBX 2011-től). |
| Alembic (`.abc`) | nem | igen | nem | Geometriai gyorsítótárak, az első mintavételnél. |
| STEP (`.step`, `.stp`) | nem | igen | nem | Alkatrészmodellezőktől és beszállítóktól származó alkatrészek, zárt hálóként, valódi méretükben. Lásd: [Fájlformátumok](topic:formats). |
| `.3dm` | nem | igen | nem | NURBS-modellek: polifelületek, hálók, görbék, blokkok és rétegek, hálóként, élekként, komponensekként és címkékként. Lásd: [.3dm-modell behozása](topic:import-3dm-files). |
| 3MF (`.3mf`) | nem | nem | igen | 3D nyomtatás, színekkel (milliméterben). A {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} parancsból: lásd [Modell előkészítése 3D nyomtatásra](topic:print-3d). |
| IFC (`.ifc`) | nem | nem | igen | BIM-programok és BimCraft. |
| DWG (`.dwg`) | nem | igen | igen | Helyszínrajz vagy alaprajz, amelyre modellezni lehet; modell küldése CAD-programnak. |
| DXF (`.dxf`) | nem | igen | igen | Ugyanaz, bármely CAD-programhoz. |

[A fájlformátumok részletesen](topic:formats) pontosan felsorolja, hogy az egyes formátumok mit őriznek meg, és mit hagynak ki.

## A ModelCraft-fájl

A `.modelcraft` fájl a teljes modellt megőrzi: a geometriát, a csoportokat, a komponenseket, a vezetősegédeket, a jeleneteket, a mértékegységeket, valamint a kamerát és a stílust, amelyet mentéskor használt. A visszavonási előzményeket nem őrzi meg.

### Modell megnyitása

1. Kattintson a {{ui:Megnyitás}} gombra a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűt.
2. Ha a képernyőn lévő modellnek nem mentett módosításai vannak, a ModelCraft rákérdez: „Ennek a modellnek nem mentett módosításai vannak. Előbb másolatot mentsen?” Válassza a {{ui:Másolat mentése}}, a {{ui:Módosítások elvetése}} vagy a {{ui:Mégse}} lehetőséget.
3. Válassza ki a `.modelcraft` fájlt.

A modell abban a mértékegységben nyílik meg, amelyben el lett mentve, azzal a kamerával, amellyel el lett mentve. A `.modelcraft` fájlt a 3D-nézetre is húzhatja, vagy kattinthat egyre a legutóbbi fájlok listájában az indítókártyán (olyan böngészőkben, amelyek újra tudnak megnyitni egy fájlt, és az asztali alkalmazásban).

:::desktop
Az asztali alkalmazásban a `.modelcraft` fájlra duplán kattintva a ModelCraft megnyitja azt, ugyanígy a Collada, OBJ, glTF, DWG vagy DXF fájlon lévő **Megnyitás ezzel** paranccsal is (a fájl új modellbe importálódik).
:::

### Modell mentése

Kattintson a {{ui:Mentés}} gombra, vagy nyomja meg a {{key:Mod+S}} billentyűt. A böngésző letölti a `<name>.modelcraft` fájlt, ahol a név a megnyitott fájl neve, új modell esetén pedig „Névtelen”.

:::desktop
Az asztali alkalmazásban a {{ui:Mentés}} helyben, a megnyitott fájlba írja a módosításokat. Új modell esetén megkérdezi, hová mentse.
:::

- {{ui:Mentés mint}} ({{key:Mod+Shift+S}}) másolatot ment `.modelcraft` fájlként vagy [USD](topic:usd) formátumban; ahol a böngésző engedi, megkérdezi a nevet és a helyet. Ellenkező esetben nevezze át a letöltött fájlt: a következő mentés, miután az átnevezett fájlt megnyitotta, az új nevet használja.
- Minden mentés új letöltés. A böngésző beállításától függően vagy egyenesen a letöltések mappájába kerül, vagy megkérdezi, hová. Ha ilyen nevű fájl már van ott, a legtöbb böngésző számot ad hozzá, például `Untitled (1).modelcraft`.

:::chromium
Ha minden alkalommal mappát szeretne választani, nyissa meg a böngésző beállításait, keressen rá a „letöltések” kifejezésre, és kapcsolja be a „Kérdezze meg a helyet minden fájl letöltése előtt” lehetőséget.
:::

:::firefox
Ha minden alkalommal mappát szeretne választani, nyissa meg a **Beállítások** részt, majd az **Általános** lapot, és a „Letöltések” alatt válassza a „Mindig kérdezze meg, hová mentse a fájlokat” lehetőséget.
:::

:::safari
A letöltések helyének módosításához nyissa meg a Safari alkalmazást, majd a **Beállítások** menüpontot, azután az **Általános** részt, és állítsa be a „Fájlletöltési hely” értékét.
:::

### Új modell indítása

Kattintson a {{ui:Új}} gombra. Ha vannak nem mentett módosítások, a ModelCraft előbb rákérdez. Az új modell üresen indul, a helyi mértékegységben (az Egyesült Államokban láb és hüvelyk, máshol milliméter), jelenetek nélkül.

### Ha a böngésző a mentés előtt bezárul

A ModelCraft a nem mentett munkáról másolatot tart a böngészőben, néhány másodperccel minden módosítás után. A másolat a háttérben íródik, így egy nagy modell nem tartja fel a munkát. Ha a lap vagy a böngésző a mentés előtt bezárul, a ModelCraft következő megnyitásakor megkérdezi: „Helyreállítja a munkáját?” A helyreállítás úgy nyitja meg a modellt, ahogy volt, de még nincs fájlba mentve: mentse el, hogy megmaradjon. Lásd: [Munka helyreállítása](common:recover).

### A CadCraftból: megnyitás a ModelCraftban

A CadCraft rajzoló alkalmazásban a **Nézet**, majd a **Továbbiak**, majd a **Megnyitás a ModelCraftban** parancs a megnyitott rajzot új lapon átadja a ModelCraftnak, DWG-fájlként. Úgy érkezik, mint egy importált DWG: vonalak a talajon, egy csoportban, készen a modellezésre. Semmi sem töltődik fel; a fájl a böngésző saját tárolóján halad át.

## Importálás

Az importálás fájlt ad a megnyitott modellhez; nem cseréli le azt.

1. Kattintson az {{ui:Importálás}} gombra a {{ui:Fájl}} csoportban, vagy húzza a fájlt a 3D-nézetre.
2. Válasszon ki egy SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG vagy DXF fájlt.

   A fájl **egy csoportként** érkezik, kijelölve, a nézet pedig ráközelít. Az állapotsor megmondja, mi érkezett, és felsorolja azt is, amit nem tudott importálni, például: „Nem importálva: 2 textúra”.

3. Ha közvetlenül a geometriáját szeretné szerkeszteni, kattintson duplán a csoportra a bele szerkesztéshez, vagy kattintson a {{ui:Felbontás}} gombra.

Tudnivalók:

- **Méret és felfelé mutató irány:** A Collada fájlok megmondják a mértékegységüket és azt, hogy melyik tengely mutat felfelé, a ModelCraft pedig átváltja őket. A glTF mindig méterben van. Az OBJ-fájlok nem hordoznak mértékegységet: a ModelCraft méterként olvassa őket, Y-tengely felfelé. Ha egy OBJ 1000-szer nagyobbként vagy kisebbként érkezik, használja a [Léptékezés](topic:rotate-scale) parancsot `0.001` vagy `1000` tényezővel.
- **DWG és DXF** vonalakként (élekként) érkezik a talajra, nem lapokként. Ha a rajz nem mondja meg a mértékegységét, a „Rajzmértékegységek” című párbeszédpanel megkérdezi, mit jelent egy rajzegység. Lásd: [Modellezés helyszínrajzon](topic:site-plan).
- **Korlátok:** importhoz a 300 MB-nál nagyobb fájlokat, megnyitáshoz a 200 MB-nál nagyobbakat utasítja el. A 2 millió csúcsnál vagy lapnál többet tartalmazó fájlokat túl nagyként utasítja el. A 64 MB-nál nagyobb OBJ-fájlt olvasás előtt elutasítja. A szövegfájlokat (Collada, OBJ, ASCII STL, USD szöveg) kb. 4 MB-os darabokban olvassa, így egyetlen szöveges blokk sem tartja az egész fájlt; a tesztelésünkben egy 16 MB-os OBJ megnyitása kb. 0,5 GB memóriát használt.

## Exportálás

1. Kattintson az {{ui:Exportálás}} gombra a {{ui:Fájl}} csoportban.
2. Válasszon formátumot: {{ui:glTF bináris (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL nyomtatáshoz (.stl, milliméter)}}, {{ui:PLY színekkel (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC a BimCrafthoz (.ifc)}}, {{ui:DWG CAD-hez (.dwg, 2004)}} vagy {{ui:DXF CAD-hez (.dxf, R12)}}.

A böngésző letölti a fájlt, a modell nevét viselve. A teljes modell exportálódik, nem csak a kijelölés. A glTF, Collada és OBJ fájlok a háttérben íródnak, így a ModelCraft tovább működik nagy modell exportálása közben; a letöltés akkor indul, amikor a fájl kész. Az üres modell nem exportálódik: „A modell üres: előbb rajzoljon valamit.” Lásd: [Modell exportálása más programoknak](topic:export-model).

## Online és offline

A ModelCraft mindent a számítógépén futtat, így a modellezés, a megnyitás, a mentés, az importálás és az exportálás kapcsolat nélkül is működik, amint az alkalmazás betöltődött.

Ahhoz, hogy a ModelCraftot teljesen kapcsolat nélkül nyissa meg, mentse offline használatra, amíg online van:

1. Kattintson a felső alkalmazássávban lévő {{ui:Mentés offline használatra}} gombra.
2. A gomb a mentés közben számol („Mentés: 40 / 212”). A ModelCraft a saját fájljait menti (köztük a DWG-olvasóját), ezt a súgót és a 3D-könyvtárat, ezért ez eltarthat egy ideig.
3. Amikor a gomb {{ui:Offline használatra kész}} feliratot mutat, a ModelCraft kapcsolat nélkül is megnyílik ugyanazon a címen, és a DWG-importálás is működik offline.

Később a {{ui:Offline használatra kész}} gombra kattintva érhető el a {{ui:Mentés újra (a legújabb verzió beszerzése)}} és az {{ui:Az offline másolat eltávolítása}} lehetőség. Ha a gomb a {{ui:Nem sikerült menteni}} feliratot mutatja, néhány fájl nem töltődött le: ellenőrizze a kapcsolatot, és kattintson rá újra. Az {{ui:Az offline mód nem érhető el}} azt jelenti, hogy ez a böngészőablak nem tud másolatot tartani (ilyen a privát ablak és egyes felügyelt számítógépek). Lásd: [Munka offline](common:offline).

A felhőbe mentés még nem érhető el. Minden modell ott van, ahol elmenti.

:::offline
Offline van. Tovább modellezhet és menthet. Hacsak az alkalmazássáv nem mutatja: {{ui:Offline használatra kész}}, ne töltse újra ezt a lapot, amíg újra online nem lesz.
:::

## Asztali alkalmazás

:::desktop
A ModelCraftot a CadCraft Studio asztali alkalmazásában használja, mind a nyolc alkalmazással együtt. A fájlok ott nyílnak meg és mentődnek, ahol kiválasztja.
:::

:::web
A ModelCraft böngészőben fut Mac, Windows és Linux rendszeren, valamint a CadCraft Studióban, az asztali alkalmazásban, amely mind a nyolc alkalmazást egy telepítésben tartalmazza: getcadcraft.com/download.
:::
