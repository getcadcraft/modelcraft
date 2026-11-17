---
title: Fájlformátumok részletesen
summary: Pontosan mit őriz meg, konvertál és hagy ki a ModelCraft minden olyan formátuma, amelyet megnyit, importál vagy exportál.
keywords: formátumok, fájltípusok, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, gyorsítótár, fbx, 3mf, ifc, dwg, dxf, mértékegységek, tengelyek, Y felfelé, Z felfelé, milliméter, korlátok
from: c47d2d28
---

A ModelCraft modellje méterben készül, a Z (kék) tengely felfelé mutat. Az alábbi formátumok mindegyikét erre konvertálja, illetve innen konvertálja.

## ModelCraft (.modelcraft)

| Mi | Részletek |
|---|---|
| Megnyitás | {{ui:Megnyitás}} ({{key:Mod+O}}), vagy húzza a nézetre. A `.json` végződésű fájlok is elfogadottak |
| Mentés | {{ui:Mentés}} ({{key:Mod+S}}), letöltésként |
| Megőrzi | Mindent: geometriát, lapokat és azok színeit, anyagokat és az importált textúrákat, lámpákat, lágy éleket, csoportokat, komponenseket, neveket, segédvonalakat, jeleneteket, a mértékegységeket, valamint az utolsó kamerát és stílust |
| Kihagyja | A visszavonási előzményeket |
| Korlát | 200 MB |

Az újabb ModelCraft verzióval mentett fájl nem nyitható meg: „Ezt a modellt újabb ModelCraft mentette (fájlverzió …). A megnyitásához frissítse a ModelCraftot.” A nem ModelCraft-modell fájl ezt jelzi: „Ez a fájl nem ModelCraft-modell (nem JSON).” vagy „Ez nem olyan ModelCraft-fájl, amelyet meg tudunk nyitni: …”.

## USD (.usd, .usda, .usdc, .usdz)

Megnyitható, importálható, illetve {{ui:Mentés mint}} vagy {{ui:Exportálás}} › {{ui:USD (.usda, .usdc, .usdz)…}} formátumban menthető vagy exportálható. A ModelCraft által mentett USD-fájl veszteség nélkül nyílik meg újra; más programok USD-fájljai hálóként, csoportokként, komponensekként, lámpákként és kamerákként nyílnak meg. Lásd: [USD mentése, megnyitása és exportálása](topic:usd).

## Collada (.dae)

Importálás és exportálás. A legjobb formátum modellek cseréjéhez más 3D-modellezőkkel.

- **Export:** Collada 1.4.1, Z felfelé, méter. Csoportonként vagy komponensdefiníciónként egy geometria; a komponensek egyszer íródnak ki, és hivatkozással kerülnek elhelyezésre, így megosztva maradnak. A lyukas vagy konkáv körvonalú lapok háromszögekre bomlanak. A színek anyagokká válnak. A szabad élek vonalként íródnak ki. A formátumban érvénytelen nevek módosulnak, a pontos név pedig mellette megmarad.
- **Import:** a háromszögek, a (lyukas) sokszögek, a háromszög-legyezők és -csíkok lapokká válnak; a vonalak élekké. Az csomópontok transzformációi, a fájl felfelé mutató tengelye és mértékegysége érvényesül. Több helyre elhelyezett csomópont vagy több csomópont által használt geometria komponensként érkezik; a többi csomópont csoportként. Az anyagszínek (diffúz) lapszínekké válnak.
- **Nem importálódik:** textúrák, vázkötések és morfok, kamerák, fények, egyes transzformációtípusok (look-at és skew), valamint más fájlokra mutató hivatkozások. Az állapotsor megszámolja őket.
- **Exportáláskor elvész:** mely élek lágyak. **Importáláskor** a háromszögelt felületek háromszögek maradnak, átlóik lágyítva, így a sík területek továbbra is egyetlen felületként látszanak.

## OBJ (.obj, .mtl)

Importálás és exportálás.

- **Import:** húzza be a `.obj` fájlt a hozzá tartozó `.mtl` és textúraképek együttes, vagy csak a `.obj` fájlt importálja: anyagok nélkül érkezik, és az állapotsor megnevezi a kívánt `.mtl` fájlt. Méterként, Y felfelé értelmezve olvassa. Minden objektum (`o`, különben `g`) egy [hálóvá](topic:meshes) válik, lapjai megtartva (a négyszögek négyszögek maradnak). A textúrakoordináták, normálvektorok és csúcsonkénti színek megmaradnak. Egy anyag színképe (`map_Kd`, PNG, JPEG vagy WebP) textúraként érkezik, a méretezési és eltolási beállításokkal; különben a színe (`Kd`). Azok az élek, ahol a fájl normálvektorai törnek, élesek; normálvektorok nélkül a fájl simítási csoportjai döntenek. A többi térkép (bump, normal), a pontok, vonalak és görbék megszámolódnak és kimaradnak. Az OBJ-nak nincs mértékegysége, ezért a milliméterben vagy hüvelykben készült modell rossz méretben érkezik: importálás után léptékezze (lásd: [Forgatás és léptékezés](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** méter, Y felfelé, világkoordináták. Csoportelhelyezésenként egy objektum; a komponensek minden elhelyezésnél teljes egészükben íródnak ki. A hálók megtartják saját lapjaikat, textúrakoordinátáikat és normálvektoraikat; a [lágy élekkel](topic:soften) összekapcsolt lapok csúcsonként kapnak normálvektort. Ha a modellnek vannak színei, a `.mtl` a `.obj` mellé töltődik le. Ha importált textúrái vannak, a `.obj`, a `.mtl` és a képek egyetlen `.zip`-ként töltődnek le együtt.
- **Korlát:** 2 millió csúcs vagy lap; 64 MB szöveg.

## glTF (.glb, .gltf)

Importálás és exportálás, glTF 2.0.

- **Import:** egy `.glb`, vagy egy `.gltf` a hozzá tartozó `.bin` és textúrafájlokkal: húzza mindet egyszerre a nézetre (vagy válassza a `.glb` fájlt). Önmagában megadott `.gltf` megnevezi a szükséges fájlt: „Ez a .gltf fájl szükséges: "…": nyissa meg a .glb változatot, vagy húzza a .gltf-et a fájljaival együtt.”
  - **A hálók** [hálóként](topic:meshes) érkeznek, fájlonként egy-egy hálóként, a fájl normálvektorait, textúrakoordinátáit és csúcsszíneit megtartva. Ahol a fájl normálvektorai megtörnek, élesek; a többi lágy. Több helyen használt háló megosztva marad.
  - **A csomópontok** csoportokká válnak, a fájlban szereplő nevükkel. A példányosított hálók (EXT_mesh_gpu_instancing) egy hálóként érkeznek, amely többször is el van helyezve.
  - **Anyagok:** az alapszín-textúra (PNG, JPEG vagy WebP) textúraként érkezik, a fájl textúrakoordinátái szerint elhelyezve (bármely textúra-transzformációval együtt), és mentéskor megmarad; egyébként az alapszín. A fém, érdesség, normáltérképek, üveg, lakkréteg (clear coat), sheen és a többi anyagkiterjesztés beolvasásra kerül, de még nem marad meg: az állapotsor ezt jelzi.
  - **Fények** (KHR_lights_punctual): a pontfények és a reflektorok [lámpákká](topic:lights) válnak. Az irányfényeket megszámolja: a nap világítja meg a modellt.
  - **A kamerák** [jelenetekké](topic:scenes) válnak.
  - **A csontozott (skinned) karakterek** a fájl nyugalmi állapotában érkeznek; csontjaik, animációik és morph-céljaik megszámolódnak, de még nem maradnak meg.
  - **A tömörített fájlok** (Draco, meshopt) és a kvantált adatok beolvasásra kerülnek. A dekódolók csak arra a fájlra töltődnek be, amelyiknek szüksége van rájuk.
  - A pontok és vonalak megszámolódnak és kimaradnak (a háló lapokat tartalmaz). A KTX2 textúrák kimaradnak; a lapok megőrzik színüket.
- **Export** (`.glb`): glTF 2.0 bináris, méter, Y felfelé. Definíciónként egy háló, így a komponensek megosztva maradnak. A hálók megtartják normálvektoraikat, textúrakoordinátáikat és csúcsszíneiket; a [lágy élekkel](topic:soften) összekapcsolt lapok sima normálvektorokat hordoznak. A színek és anyagok anyagokká válnak (az anyag a színével); az importált textúrák textúraként íródnak. A bekapcsolt lámpák pont- és reflektorfényekké válnak (a területi lámpáknak nincs glTF megfelelőjük, ezek kimaradnak); a jelenetek kamerákká. A szabad élek kimaradnak.
- **Korlát:** legfeljebb 300 MB-os fájlok; körülbelül 130 millió geometriai szám.

## STL (.stl)

Importálás és exportálás.

- **Import:** bináris vagy ASCII. Az STL-nek nincs mértékegysége: **milliméterként** olvassa be, ahogyan a nyomtatók és a ModelCraft saját exportja írja. Az azonos ponton lévő sarkok összekapcsolódnak, így egy zárt alkatrész zárt [hálóként](topic:meshes) érkezik. A fájlban lévő színek (a VisCAM / SolidView és a Materialise konvenciók) festik be a lapokat.
- **Export,** 3D nyomtatáshoz: bináris STL, **milliméter**, Z felfelé. Csak háromszögek: a csoportok és a szabad élek kimaradnak. A festett lapok színüket a VisCAM / SolidView konvenció szerint hordozzák, amelyet a más programok figyelmen kívül hagynak, ha nem olvassák. Tiszta nyomtatáshoz zárt testeket exportáljon.

## STEP (.step, .stp)

Csak importálás. A STEP az, amelyet alkatrész-modellezők és beszállítók küldenek: AP203, AP214 és AP242 fájlok.

- **Import:** a ModelCraft maga olvassa be a fájlt, a böngészőben, és minden testet zárt, háromszögekből álló [hálóvá](topic:meshes) alakít: a sík lapok síkok maradnak, a görbe lapok (hengerek, kúpok, gömbök, tórusz, B-spline felületek) sok kis, sík lappá válnak; egy görbe lapon belüli élek lágyak, két lap közti élek élesek. A STEP-fájlok megadják mértékegységüket; a modell valódi méretében érkezik. Az összeállítás minden alkatrészével együtt érkezik, ott, ahol a fájl elhelyezi; minden alkatrész a fájl nevéről elnevezett csoporton belül saját hálóval rendelkezik. A színek, az összeállítási fa alkatrésznevei és a tűrések (PMI) nem olvasódnak be.
- **Üzenetek:** ami kimaradt vagy durvábban rajzolódott, az állapotsorba kerül („Megjegyzések: …”); a test nélküli fájl, a sérült fájl vagy a korlátokon túli fájl megnevezi az okát, és semmit nem ad hozzá.
- **Korlát:** legfeljebb 300 MB-os fájlok; 400 000 lap és 8 millió háromszög.

## .3dm

Csak importálás. A `.3dm` fájlok NURBS-modelleket tartalmaznak: többfelületeket (polysurface), felületeket, hálókat, görbéket és blokkokat.

- **Import:** a ModelCraft maga olvassa be a fájlt a böngészőben. A hálók úgy érkeznek, ahogy vannak; a többfelület vagy kihúzás minden lapja a fájlban mentett renderelő hálóból jön, különben a ModelCraft háromszögekre bontja (síkok, NURBS-felületek, forgásfelületek, kihúzott görbék, kihúzások; élei szerint levágva, a zárt többfelületek zárt hálókként). A görbék élekké, a blokkok komponensekké válnak (a blokkon belüli blokkok megmaradnak), a rétegek címkékké (kikapcsoláskor elrejtve), az objektum színe (saját, rétegének vagy anyagának színe) festi be a lapjait. A fájl megadja mértékegységét; a modell valódi méretében érkezik. Lépésenként: [.3dm-modell importálása](topic:import-3dm-files).
- **Üzenetek:** az állapotsor megmondja, hány lap származott mentett hálóból és hányat bontottak háromszögekre, és megnevezi, mi maradt ki: pontok, ponthalmazok, szöveg, méretek, sraffozások, fények, SubD-objektumok, még nem olvasott felülettípusú lapok, összekapcsolt blokkok.
- **Korlát:** legfeljebb 300 MB-os fájlok.

## PLY (.ply)

Importálás és exportálás, színes hálókhoz (szkennelések, színes 3D nyomtatás, más modellezők).

- **Import:** ASCII és bináris. A lapok [hálóvá](topic:meshes) válnak, normálvektoraikat, textúrakoordinátáikat és csúcsszíneiket megtartva; minden lap a 4 096 szín közül a legközelebbi színnel festődik, így most látja a színeket. A PLY-nek nincs mértékegysége vagy tengelykonvenciója: a koordináták olyanok, amilyenek (méter, Z felfelé). Csak pontokat tartalmazó PLY ponthalmaz: nyissa meg a BimCraftban vagy a CivilCraftban.
- **Export:** bináris PLY pozíciókkal, normálvektorokkal és színekkel (és textúrakoordinátákkal, ha a modellnek vannak), méterben, Z felfelé.

## FBX (.fbx)

Csak importálás. FBX 7 fájlok (2011-től), binárisak vagy ASCII-k, a ModelCraft saját olvasójával beolvasva.

- A hálók [hálóként](topic:meshes) érkeznek normálvektoraikkal, textúrakoordinátáikkal (minden UV-készlet) és csúcsszíneikkel; több objektum által használt háló megosztva marad. Az objektumok transzformációikkal együtt csoportokká válnak (beleértve a forgáspontokat, eltolásokat és előforgatásokat).
- Anyagok: a diffúz textúra – a fájlba ágyazva, vagy a `.fbx`-szel együtt húzott képként – textúraként érkezik (a TGA-képek PNG-ként maradnak meg); egyébként a diffúz szín. Más anyagbeállítások az új anyagmodellre várnak.
- A fájl felfelé mutató tengelye és mértékegysége érvényesül: minden Z felfelé, méterben érkezik.
- A pont- és reflektorfények [lámpákká](topic:lights) válnak (az FBX 100-as intenzitása a ModelCraft alapértelmezett lámpája, 800 lumen: az FBX-intenzitásoknak nincs mértékegységük). A kamerák [jelenetekké](topic:scenes) válnak.
- A csontozott karakterek nyugalmi állapotban érkeznek; csontjaik és animációik megszámolódnak, de még nem maradnak meg. Az irány- és területi fények, valamint a hálókon kívüli geometria (NURBS, görbék) megszámolódnak és kimaradnak.
- Az FBX 6 és régebbi fájlok nem nyithatók meg: mentse őket újra FBX 2011 vagy újabb formátumban.

## Alembic (.abc)

Csak importálás: animációs és effektprogramok geometriai gyorsítótárai.

- A hálók (poligon- és felosztásos hálók) [hálóként](topic:meshes) érkeznek, textúrakoordinátáikkal és normálvektoraikkal; a transzformációk csoportokká válnak. Az Alembic Y felfelé mutat, és Z felfelé fordítódik; méterben.
- A sok mintát tartalmazó gyorsítótár (animáció) az első mintájával érkezik; az állapotsor megmondja, hány van belőle.
- A pontok, görbék, NURBS-felületek, kamerák és fények megszámolódnak és kimaradnak. A régi HDF5-elrendezésű fájlok nem nyithatók meg: mentse őket újra Ogawa Alembic fájlként.

A {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} először ellenőrzi az alakot, majd a kijelölést vagy minden látható elemet ír ki. Lásd: [Modell előkészítése 3D nyomtatáshoz](topic:print-3d).

## 3MF (.3mf)

Csak exportálás, a {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} lehetőségből. 3MF alap: egy háló **milliméterben**, Z felfelé, színeivel anyagként. A legtöbb szeletelő olvassa, és az STL-lel ellentétben megadja a mértékegységét. A rejtett elemek kimaradnak. Lásd: [Modell előkészítése 3D nyomtatáshoz](topic:print-3d).

## DWG- és DXF-export (.dwg, .dxf)

CAD-programokhoz. A modell a saját mértékegységében íródik: láb és hüvelyk modelleknél hüvelykben, egyébként milliméterben, centiméterben vagy méterben (az állapotsor megnevezi).

- **A lapok** 3D-s lapokká (háromszögekké) válnak. A lapon belüli vonalak és a lágy élek láthatatlanul íródnak, így a lapok úgy néznek ki, mint a ModelCraftban.
- **A szabad élek** vonalakká válnak.
- **A csoportok és komponensek** blokkokká válnak: a komponens egyszer íródik ki, és annyiszor helyeződik el, ahányszor használják, elforgatott és tükrözött másolatokat is beleértve. Az a csoport, amelyet az elforgatása után nyújtottak (így ferde), helyette a helyén íródik ki.
- **Színek:** a DWG minden lap színét pontosan megőrzi; a DXF a 255 szabványos CAD-szín közül a legközelebbit használja.
- **Verziók:** a DWG AutoCAD 2004 (AC1018) formátumban íródik, amelyet a 2004-től kezdődő CAD-programok megnyitnak. A DXF R12 (AC1009), amelyet minden CAD-program olvas; az R12-ben nincs mértékegység-mező, ezért mondja meg a CAD-programnak, melyik mértékegységet használja.
- **Nem íródik ki:** segédvonalak, méretek, jelenetek és a kamera.

## IFC (.ifc)

Csak exportálás, a BimCrafthoz és más BIM-programokhoz. IFC4, projekttel, telekkel, épülettel és annak szintjeivel. Minden legfelső szintű csoport vagy komponens egy IfcBuildingElementProxy elemmé válik, a nevével; a zártak szilárd alakzatként (faceted brep), a nyitottak felületmodellként íródnak; a lapok lyukai megmaradnak. A legfelső szinten lévő szabad geometria egy „Loose geometry” nevű elemmé válik. Nincsenek típusok, tulajdonságok vagy anyagok.

**Szintek:** Az {{ui:Exportálás}} › {{ui:IFC-szintek…}} listázza őket, mindegyiket névvel és magassággal ({{ui:Szint hozzáadása}}, vagy {{ui:Becslés a modellből}}, amely minden olyan magasságra egy szintet hoz létre, amelyen a legfelső szintű csoportok állnak). Exportáláskor minden csoport vagy komponens arra a szintre kerül, amely a legalacsonyabb pontjánál van vagy az alatt, és megtartja a helyét. Szintek nélkül minden egy szintre, a „Level 1”-re kerül, 0 magasságban. A szintek a ModelCraft-fájlban mentődnek.

## DWG (.dwg) és DXF (.dxf)

Importálás vonalakként a talajra (a sraffozások és 3D-lapok lapként); exportálás a fentiek szerint. Lásd: [Modell telekterven](topic:site-plan).

- **Olvasás:** vonalak, polivonalak (ívekkel), 3D-polivonalak, körök, ívek, valamint blokkhivatkozások, a tömbökkel együtt, a modelltérből. A láthatatlan objektumok (például egy dinamikus blokk rejtett állapotai) kimaradnak. A görbék teljes fordulatonként 48 egyenes szakaszra bomlanak.
- **Olvasás a 0.4-es verziótól:** spline-ok és ellipszisek (élekként), szöveg, többsoros szöveg és attribútumértékek (élekként, egyvonalas betűkészletben), sraffozások (lyukas lapok), 3D-lapok és tömör kitöltések (lapok), valamint méretek (a rajz saját méretblokkjaiból rajzolva).
- **Olvasás a 0.7-es verziótól:** 3D-testek, régiók és testek (ACIS-adatukkal; minden verzió DWG és DXF formátumában), mindegyik saját csoportként, a zártak testekként. A síkoktól, hengerektől, kúpoktól, gömböktől, tóruszoktól és egyszerű spline-felületektől eltérő felületeken lévő lapok kimaradnak és fel lesznek sorolva.
- **Nem olvasott:** pontok, táblázatok, többszörös vezetővonalak, képek és minden papírtérbeli elem.
- **Mértékegységek:** a rajzból veszi át, ha megadja. Ha nem, a ModelCraft rákérdez.
- **A DXF-nek** ASCII-nak kell lennie. A bináris DXF nem nyitható meg.
- **A DWG-fájlok** az AutoCAD R13-tól a jelenlegi formátumig (AutoCAD 2018 és újabb; AC1012–AC1032) a ModelCraft saját DWG-olvasójával kerülnek beolvasásra, a böngészőben; a ModelCraft része, így offline is működik, amikor a ModelCraft működik. A régebbi verziók (R12 és korábbiak) és súlyosan sérült fájlok nem olvashatók; mentse őket DXF formátumban.
- **Korlátok:** a 10 000 km-nél távolabbi koordinátákat, illetve a 2 millió vonaldarabnál többet a ModelCraft nem fogadja el.

## SKP-fájlok

Az {{ui:Importálás}} (vagy húzza a fájlt a nézetre) a SketchUp-fájlokat a ModelCraft saját olvasójával, a böngészőben olvassa be: semmi nem töltődik fel, és offline is működik, amikor a ModelCraft működik. A SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 és 2026 verziójú fájlokkal tesztelték; más verziók is megnyithatók lehetnek, de még nem próbálták ki. A modell egy, a fájl nevéről elnevezett csoportként érkezik. Egy {{key:Mod+Z}} újra eltávolítja. Lépésenként: [SKP-modell importálása](topic:import-sketchup-files).

- **Megőrzi:** a lapokat a lyukaikkal, a csoportokat (csoportként) és komponenseket (komponensként, megosztva), azok neveit és elhelyezéseit, színeket, a csoportokon és komponenseken lévő címkéket, a lapokhoz nem tartozó éleket, valamint a lágy és sima éleket, így a görbe felületek simák maradnak.
- **Színek:** a lap saját anyaga adja a színét. Csoporton vagy komponensen festett anyag az adott elhelyezés festékévé válik, így a benne lévő, saját színnel nem rendelkező lapok átveszik, ahogyan a SketchUp-ban; a két színnel festett komponens egy komponens marad.
- **A címkék** a csoportokon és komponenseken a ModelCraft-címkékké válnak, látható vagy rejtett állapotukban. A szabad lapokon és élen lévő címkék nem maradnak meg (a ModelCraft csak csoportokat és komponenseket címkéz); az állapotsor megszámolja őket.
- **A rejtett elemek rejtve érkeznek** (lapok, élek, csoportok, komponensek, valamint a rejtett címkén lévő lapok és élek), így azt látja, amit a SketchUp mutatott; a {{ui:Összes megjelenítése}} megjeleníti őket.
- **Textúrák:** a textúrás anyaggal festett lap megtartja a textúráját, a fájlban megadott módon elhelyezve, és a ModelCraft-fájl megőrzi a képet. Egy egész csoporton vagy komponensen lévő textúra, a fájlból hiányzó textúra, vagy olyan kép, amelyet a böngészők nem tudnak megjeleníteni (például Photoshop-fájl), csak az anyaga színét tartja meg.
- **Kimarad, és az állapotsorban megszámolódik:** a modellbe helyezett képek. A szöveg, méretek, segédvonalak, metszősíkok, jelenetek és stílusok nem olvasódnak be.
- **Mértékegységek:** a SketchUp-fájlok belsőleg hüvelykben vannak; a ModelCraft átváltja őket, így a méretek bármelyik mértékegységben helyesek lesznek.
- **A `.skp` mentése** még nincs elkészítve. Ha vissza szeretne vinni egy modellt a SketchUp-ba, exportálja Collada (`.dae`) formátumban.

## Nem támogatott

A ModelCraft nem tud 3DS vagy IFC fájlokat megnyitni, és nem tud 3DS, FBX, STEP, `.3dm` vagy SketchUp (`.skp`) fájlokat menteni.
