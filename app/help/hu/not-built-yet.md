---
title: Még nincs elkészítve
summary: Mit nem tud még a ModelCraft ezen verziója, és mit tegyen helyette ma.
keywords: hiányzó, még nincs, korlátozások, útiterv, anyagok, textúrák, szöveg, rétegek, vágás, felosztás, felhő, asztali
from: 179fa5e4
---

A ModelCraft egy korai verzió. Ez az oldal felsorolja, mit nem tud még, hogy ne keresse hiába, és megmondja a legközelebbi megoldást ma.

## Rajzolóeszközök

| Még nincs | Helyette ma |
|---|---|
| Szabadkézi rajzolás | Pontokat kattintással adjon meg a {{ui:Görbe}} eszközzel |
| Egy ív vagy kör szegmensszámának módosítása a megrajzolás után | Törölje, majd rajzolja meg újra a `24s` beírása után |
| Betűtípus választása [3D szöveghez](topic:text3d), vagy a szavak szerkesztése az elhelyezés után | Törölje, és adja hozzá újra a szöveget |
| Szög módosítása szögmérethez írva, vagy henger méretének módosítása a kör méretéből | Az éleket a {{ui:Forgatás}} eszközzel forgassa el; a hengert a {{ui:Léptékezés}} eszközzel méretezze át |
| Méretek az exportált modellfájlokban | A méretek a nézet képein, nyomataiban és PDF-jeiben látszanak; a modellfájlok csak geometriát tartalmaznak |
| Vágás, felosztás és külső héjazás | [Egyesítés, Kivonás és Metszés](topic:solids) zárt csoportokkal, vagy [lapok metszése](topic:intersect), majd a nem kellő rész törlése |
| A forgatási tengely kiválasztása a nyílbillentyűkkel | Kattintson a {{ui:Forgatás}} középpontjára egy olyan lapon, amely abba az irányba néz, amerre a tengelynek mutatnia kell |
| Több mint egy következtetés egyidejű zárolása | Egy irányt nyílbillentyűvel zároljon, majd fogjon egy pontra |
| Átméretezés ferde irányban, vagy olyan méretvég mentén, amely nem sarokban van | Helyezze a méretet két sarokra, egy élre, vagy a piros, zöld vagy kék irány mentén |

## Animáció

| Még nincs | Helyette ma |
|---|---|
| Lapok, élek, a nap napszaka, a stílus vagy a rejtett elemek animálása | A mozgó részt csoportként vagy komponensként készítse el; másik napszakhoz külön videót rendereljen |
| Rajzolt útvonalat követő kamera, vagy mozgó tárgyat néző kamera | Állítson be több kamerakulcsot az út mentén ([Animáció](topic:animation)) |
| Hang videókban, és nagy minőségű (útkövető) videók WebGPU nélkül | Hangot egy videószerkesztőben adjon hozzá; WebGPU nélkül a videót a gyors renderelővel renderelje ([Videó renderelése](topic:animation#render-the-video)) |
| Animált lámpák (fényerő, szórás, szín) renderelt videóban; objektívszög animálása kamerakulcs nélkül videóban; anyagok vagy renderbeállítások animálása | A lámpák a nézetben animálódnak; zoomhoz videóhoz kulcsolja a kamerát is; különböző lámpabeállításokhoz külön videókat rendereljen ([Bármely tulajdonság animálása](topic:animate)) |
| Csontok súlyainak tükrözése egyik oldalról a másikra, látható csontburkok, súlyok pontonkénti árnyékolása (a súlyok lapokként jelennek meg), a deformált háló látása súlyfestéskor | Mindkét oldalt festse ki, vagy készítsen el az egyik felét, és az armatúra hozzáadása előtt használjon Tükör módosítót; ellenőrzéshez váltson a Súlyfestés és a Pózolás között |
| Csontok glTF, FBX vagy USD fájlokból armatúraként, és armatúrák írása ezekbe a fájlokba | Csontozott modellek nyugalmi állapotban jönnek be a fájl súlyaival; adja hozzá a csontokat a fájl csuklósorrendjében, majd használja az {{ui:A fájl súlyainak használata}} lehetőséget ([Animáció](topic:animate)) |
| IK-cél vagy pólus húzása a nézetben; egy kényszer saját terének (helyi vagy világ) kiválasztása; IK-láncok nyújtása; IK görbén | Írja be a cél pontját, vagy célozzon egy objektumra, és mozgassa azt; a láncokat tartsa a hosszukon |
| Szövet, folyadékok, lágy testek, csuklók és zsanérok merev testek között, egy objektum pontos alakjával való ütközés (csak dobozok és gömbök veszik körül), élő szimuláció lejátszás közben, kezdősebesség vagy forgás (a testek nyugalomból indulnak) | Merev testeket rögzítsen, és a kulcsokat játssza le; zsanért kulcsokból építsen; különös alakot dobozokra (csoportokra) bontson |
| Az animáció exportálása glTF vagy más modellfájlokba | Videót rendereljen; a `.modelcraft` fájl és a ModelCraft által mentett [USD-fájl](topic:usd) csak a ModelCraftban használható |
| Megjegyzés vagy cím írása egy problémához VR-ben, hangjegyzetek, metszősík kézi mozgatása VR-ben | Helyezze el a problémát VR-ben, majd a szövegét egy BCF-programban adja hozzá; metszősíkot a nézetben állítson be, mielőtt belép: lásd [Modell áttekintése VR-szemüvegben](topic:vr-review) |
| Emberek látása az asztalnál VR-ben (csak a VR-ben lévők jelennek meg), VR-séta rögzítése | Kérje meg őket, hogy csatlakozzanak VR-ben, vagy készítsen [animációt](topic:animation) a sétáról |

## Hálók

| Még nincs | Helyette ma |
|---|---|
| Szobrászkodás szintek szerint (multiresolution), és a Részletesség eltávolítja az apróvá vált háromszögeket | [Szobrászkodjon](topic:sculpt) felosztott hálón; a {{ui:Újrahálózás}} gombbal újra egyenletessé teheti |
| Újrahálózás négyszög lapokra, amelyek követik az alakot | {{ui:Újrahálózás}} (egyenletes háromszögek), majd építse újra a [Retopológia](topic:mesh-edit#retopology) segítségével |
| Csúcsokra festett súlyok módosítókhoz (az Elmozdítás, a Simítás és a Zsugorítás a teljes hálón működik) | Alkalmazza a módosítót, majd szobrászkodjon vagy szerkessze a szükséges részeket |
| Csúcsok, élek vagy lapok másolása és beillesztése, késes vágás, amely egy lapon belül végződik, drótszerű élek lap nélkül | Kettőzze a hálót a Modell lapon; vágjon késsel élről élre; [kihúzással](topic:mesh-edit#change-the-shape) alakítsa a nyitott éleket lapokká |

## Szervezés és nézet

| Még nincs | Helyette ma |
|---|---|
| Rétegek a DWG- és DXF-telekrajzokban, mint címkék | A telekrajz csoportként érkezik: bontsa fel, és csoportosítsa azokat a részeket, amelyeket címkézni szeretne |
| Több metszési vágás egyszerre, metszeti doboz, vagy egy metszet körvonalának exportálása rajzként | Egyszerre egy [metszősík](topic:sections) vág; a nézetet képként exportálja |
| Lágy élek szaggatott megjelenítése, vagy lágyítás húzócsúszka közben | [Lágyítás szög szerint](topic:soften) az Entitásinfóban, és visszavonással próbáljon másik szöget |
| Online modellkönyvtár kereséshez, vagy választható (szín, stílus) komponensek | A [kezdő könyvtár](topic:starter); Collada, OBJ vagy glTF modellek importálása; másolatot [nyújtson](topic:stretch) a méretre |
| Növények elhelyezése a növénykönyvtárból | [Szórjon](topic:live-view#scatter-plants-rocks-and-people) növényeket a Live nézetbe, vagy helyezzen el egy kezdő könyvtári fát |
| Csoport független másolatai | Készítsen komponenst, majd {{ui:Egyedivé tétel}} (lásd [Hibaelhárítás](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderelés

| Még nincs | Helyette ma |
|---|---|
| Renderelés a nézetben ({{ui:Renderelés}} munkaterület), a rendersor, és a kamera, égboltkép, köd és fénykeverési beállítások WebGPU nélkül | A {{ui:Kép renderelése…}} a {{ui:Nagy minőség}} módban a WebGL útkövetőt használja, e beállítások nélkül ([Kép renderelése](topic:render#high-quality)) |
| Másik program készíti el a renderelt képet renderelő-motor bővítmény nélkül (a CadCraft soha nem futtat GNU GPL licencű programot); panorámás vagy sztereó kamerák, és égboltkép egy másik programon keresztül; az Unreal Engine bővítmény (a fájlok íródnak, a megnyitó bővítmény nincs kiadva) | Saját Gyors és Útkövető motorjaink; egy bővítmény motorja ([rajzolja meg a képet más programmal](topic:render-other-program)); egy USD-, glTF- vagy Unreal-mappafájl a Motor listából, amelyet bármely programba vihet |
| Szórt növények és sziklák a {{ui:Kép renderelése…}} képen | Az [élő nézetben](topic:live-view), annak panorámáiban, megtekintőjében és videójában jelennek meg |

## Anyagok és színek

| Még nincs | Helyette ma |
|---|---|
| Az alapszínen, érdességen, fémességen, átlátszóságon, normálon és kibocsátáson kívüli bemenetek, amelyek egy felületen belül változnak nagy minőségű képeken (átlagot használnak) | [Anyagokat készítsen csomópontokkal](topic:shading): mindenképp kösse össze őket, a nézet megmutatja a változást |
| Elmozdítás push/pull lapokon | Alakítsa a tárgyat hálóvá az elmozdításhoz |
| Saját anyagok megosztása a Könyvtárba az alkalmazásból, és csomagolt (ARM/ORM) vagy EXR térképek importált textúrakészletben | Tartsa meg őket a fájlban; a külön térképeket PNG vagy JPEG formátumban importálja |
| A fájl anyagai élő TeamWork-munkamenetekben (az azokat készítő számítógépen maradnak) | Mentse el a fájlt, és ossza meg |
| Matricák görbe felületek köré hajlása, matricák a visszavonásban, vagy több lap textúráinak festése egyszerre egy varraton át | Helyezzen kisebb matricákat minden részre; a varrat mindkét oldalát külön-külön festse meg |
| Sütés push/pull lapokra, több tárgy sütése egy képbe, kézzel formázott burok, vagy lámpákból származó sült megvilágítás | Alakítsa hálóvá és fejtse ki; minden tárgyat külön süssön; emelje a keresési távolságot; lámpafényhez rendereljen képet |
| Érdesség, fémesség vagy magasság festése, képekkel való festés (bélyegzők), és 512 × 512-nél nagyobb textúrafestés | Az alapszínt itt festse; a többi térképet képszerkesztőben készítse el, és textúrakészletként importálja |
| Textúrák Collada, STL, PLY, 3MF, IFC, DWG és DXF exportban, és a fájl saját anyagainak csomópontgráfjai exportált modellekben | Ezek a formátumok minden anyag színét kapják; a glTF és az OBJ viszi az importált textúrákat; anyagot külön is exportálhat [MaterialX](topic:shading#materialx)-ként; az [USD](topic:usd) megtartja a teljes modellt a ModelCraft számára |
| Textúrák Collada fájlokban | Importáláskor megszámlálódnak és kimaradnak; a `.skp` és `.glb` fájlok textúrái bejönnek |

## Fájlok

| Még nincs | Helyette ma |
|---|---|
| SketchUp-fájlok mentése, és ezek szövege és méretei | Az [importálás](topic:import-sketchup-files) megtartja a lapokat, színeket és textúrákat; Collada (`.dae`) exportálással térhet vissza a SketchUp-ba |
| Méretek és vezetők DWG- és DXF-exportban | Exportálás után adja hozzá a CAD-programban |
| Pontok, táblázatok és többszörös vezetővonalak DWG-ből és DXF-ből | Megszámlálódnak és kimaradnak; a szöveg egyvonalas feliratként jön be, nem a rajz betűtípusával |
| Felületek, hálók, táblázatok és többszörös vezetővonalak DWG-ből és DXF-ből; 3D testek lapjai szabad formájú, végigvezetett vagy más szabad felületeken | Ezek is megszámlálódnak és kimaradnak (maguk a 3D testek bejönnek). Exportálja ezeket a részeket a CAD-programból OBJ vagy Collada formátumban, és importálja azt |
| IFC-típusok, tulajdonságok vagy anyagok | Az IFC-export tartalmaz [szinteket](topic:formats#ifc-ifc) és általános elemeket; a többit egy BIM-programban adja hozzá |
| Modell közvetlen küldése a BimCraftba | Exportálja az {{ui:IFC a BimCrafthoz (.ifc)}} fájlt, és nyissa meg a BimCraftban |
| Laza élek glTF- és STL-fájlokban | Vonalas munkához OBJ vagy Collada formátumot használjon |
| glTF- és FBX-anyagok az alapszínen túl (fém, érdesség, normáltérképek, üveg, lakkréteg, bársonyfény…) | Ezek olvasásra és listázásra kerülnek; a ModelCraft az alapszínt vagy textúrát tartja meg. Az [Árnyalási munkaterületen](topic:shading) építse újra a megjelenést |
| glTF-csontok, animációk és morph-célok | Csontozott modellek nyugalmi állapotban jönnek be; animálja az [idővonalon](topic:animation) |
| Színek és az összeállítás alkatrészneveit STEP-fájlokból | Az alkatrészek valódi méretükben, hálóként jönnek be; importálás után [festse](topic:paint) meg és nevezze el őket |
| SubD-objektumok, szöveg, méretek és fények `.3dm` fájlokból | Lásd [mi marad ki](topic:import-3dm-files#what-is-left-out-and-said); a SubD-t hálóvá a fájlt létrehozó programban alakítsa |
| KTX2-textúrák és anyagváltozatok glTF-ben | PNG vagy JPEG textúrával exportáljon; az alapértelmezett változat használatos |
| glTF-példányosítás írása (EXT_mesh_gpu_instancing) | A komponensek egyszer íródnak, és többször helyezik el, amit minden megtekintő olvas |
| Alembic-animáció (gyorsítótár minden mintája), Alembic-pontok és -görbék, Alembic-írás | Az első minta jön be; animáljon az [idővonalon](topic:animation); írjon glTF, USD vagy OBJ formátumot |
| Dombor- és normáltérképek OBJ-anyagokban | Csak a színkép (`map_Kd`) jön be |
| FBX-csontok és -animáció, FBX-export, FBX 6 fájlok | Csontozott modellek nyugalmi állapotban jönnek be; exportáljon glTF-et; a régi fájlokat FBX 2011 vagy újabb formátumban mentse |
| Collada-csontozás, morfok, kamerák, fények, look-at és ferde transzformációk, külső hivatkozások | Importáláskor kimaradnak, és az üzenetben megszámlálódnak |
| Biztonsági mentések | A {{ui:Mentés mint}} ({{key:Mod+Shift+S}}) egy másik példányt ment. Összeomlás után a ModelCraft felajánlja a nem mentett munkáját („Munka helyreállítása?”) |
| Felhőalapú mentés és szinkronizálás számítógépek között | Még nem érhető el. Mentse a fájlokat a számítógépére, és másolja oda, ahol szüksége van rájuk |

## 3D-nyomtatás

| Még nincs | Helyette ma |
|---|---|
| Valódi szeletelő-támaszok (interfészek, alap, pontos támasztási minta) | A [támaszok előnézete](topic:print-tools#supports-preview) megmutatja, hol és körülbelül mennyi van; a szeletelő előnézete mutatja a valódiakat |
| Olyan alkatrész kibogozása, amely önmagán áthalad, vagy három vagy több lapot érintő élek | A [Javítás](topic:print-tools#repair) felsorolja őket a helyükkel együtt; használja a [lapok metszését](topic:intersect), és törölje a belsejüket |
| Kitöltési minták és rács egy üregben | A [Kiüregelés](topic:print-tools#hollow) üresen hagyja; a szeletelő tölti ki a tömör alkatrészt |
| Részletek, amelyek kisebbek a fúvókánál (a falakon kívül) | A [Falvastagság](topic:print-tools#wall-thickness) vékony falakat keres; a szeletelő rétegelőnézete mutatja a többit |

## Teljesítmény

A visszavonás minden lépéshez tárol egy másolatot a modellről (a [háló](topic:meshes) csak a megváltozottat tárolja), így a nyomás/húzás geometriájának nagyon nagy importjai minden szerkesztést lassítanak. Tartsa karcsúan az importokat, és mentse el, majd nyissa meg újra a fájlt, hogy törölje az előzményeket.

## Alkalmazások és platformok

- **Asztali:** a ModelCraft böngészőben fut Macen, Windowson és Linuxon, valamint a CadCraft Studio asztali alkalmazásban, amely mind a nyolc alkalmazást egy telepítésben tartalmazza. Androidon a CadCraft Studio a getcadcraft.com/download oldalon található APK-ból telepíthető. iPadre és iPhone-ra még nincs verzió.
- **Érintés:** az ujjas mozdulatokhoz lásd: [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom). A toll nyomása a [Szobrászkodás](topic:sculpt) ecsetét állítja; máshol a nyomás és a toll dőlése nincs használva.
- **Rajzlapok:** a ModelCraft [oldalanként egy nézetet nyomtat](topic:export-model#print-the-view-or-save-it-as-a-pdf); nincsenek több nézetet és rajzfejet tartalmazó rajzlap-elrendezések. Méretarányos rajzokhoz exportáljon CadCraft-barát DWG/DXF formátumba.
