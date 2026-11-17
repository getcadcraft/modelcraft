---
title: Formáty súborov podrobne
summary: Presne to, čo každý formát, ktorý ModelCraft otvára, importuje a exportuje, zachová, prevedie alebo vynechá.
keywords: formáty, typy súborov, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, jednotky, osi, y nahor, z nahor, milimetre, limity
from: c47d2d28
---

Model v ModelCraft je v metroch s osou Z (modrá) smerujúcou nahor. Každý formát uvedený nižšie sa prevádza do tohto systému alebo z neho.

## ModelCraft (.modelcraft)

| Čo | Podrobnosti |
|---|---|
| Otvoriť | {{ui:Otvoriť}} ({{key:Mod+O}}) alebo pretiahnutie do pohľadu. Súbory s príponou `.json` sa prijímajú tiež |
| Uložiť | {{ui:Uložiť}} ({{key:Mod+S}}) ako stiahnutie |
| Zachová | Všetko: geometriu, plochy a ich farby, materiály a importované textúry, lampy, mäkké hrany, skupiny, komponenty, názvy, pomocné čiary, scény, jednotky a naposledy použitú kameru a štýl |
| Vynechá | História krokov späť |
| Limit | 200 MB |

Súbor uložený novším ModelCraft, ako je váš, sa odmietne: "Tento model bol uložený novšou verziou ModelCraft (verzia súboru …). Aktualizujte ModelCraft, aby ho bolo možné otvoriť." Súbor, ktorý nie je modelom ModelCraft, hlási: "Tento súbor nie je modelom ModelCraft (nie je vo formáte JSON)." alebo "Toto nie je súbor ModelCraft, ktorý môžeme otvoriť: …".

## USD (.usd, .usda, .usdc, .usdz)

Otvorenie, import a {{ui:Uložiť ako}} alebo {{ui:Exportovať}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Súbor USD, ktorý uložil ModelCraft, sa znova otvorí bez straty; súbory USD iných programov sa otvoria ako siete, skupiny, komponenty, lampy a kamery. Pozrite [Uloženie, otvorenie a export USD](topic:usd).

## Collada (.dae)

Import a export. Najlepší formát na výmenu modelov s inými 3D modelovačmi.

- **Export:** Collada 1.4.1, Z nahor, metre. Jedna geometria na každú definíciu skupiny alebo komponentu; komponenty sa zapíšu raz a umiestnia odkazom, takže zostanú zdieľané. Plochy s dierami alebo konkávnymi obrysmi sa rozdelia na trojuholníky. Farby sa stanú materiálmi. Voľné hrany sa zapíšu ako čiary. Názvy, ktoré nie sú v tomto formáte platné, sa upravia a presný názov sa zachová vedľa nich.
- **Import:** trojuholníky, mnohouholníky (s dierami), vejáre a pásy trojuholníkov sa stanú plochami; čiary sa stanú hranami. Použijú sa transformácie uzlov, os nahor v súbore a jeho jednotka. Uzol umiestnený na viacerých miestach alebo geometria použitá viacerými uzlami sa importuje ako komponent; ostatné uzly sa importujú ako skupiny. Farby materiálov (difúzne) sa stanú farbami plôch.
- **Neimportuje sa:** textúry, skiny a morfy, kamery, svetlá, niektoré typy transformácií (look-at a skew) a odkazy na iné súbory. Stavový riadok ich spočíta.
- **Pri exporte sa stratí:** ktoré hrany sú mäkké. **Pri importe** zostanú povrchy rozdelené na trojuholníky trojuholníkmi, ich uhlopriečky sa zmäkčia, aby rovné plochy stále pôsobili ako jeden povrch.

## OBJ (.obj, .mtl)

Import a export.

- **Import:** pretiahnite `.obj` spolu s jeho `.mtl` a obrázkami textúr (alebo importujte iba `.obj`: prídu bez materiálov a stavový riadok uvedie `.mtl`, ktorý chcel). Načítava sa ako metre s osou Y nahor. Každý objekt (`o`, inak `g`) sa stane [sieťou](topic:meshes), jeho plochy sa zachovajú tak, ako sú (štvoruholníky zostanú štvoruholníkmi). Súradnice textúr, normály a farby na vrchole sa zachovajú. Obrázok farby materiálu (`map_Kd`, PNG, JPEG alebo WebP) sa importuje ako textúra s jej možnosťami mierky a posunu; inak jeho farba (`Kd`). Hrany, kde sa normály súboru zlomia, sú tvrdé; bez normál rozhodujú skupiny vyhladenia súboru. Ostatné mapy (bump, normal), body, čiary a krivky sa počítajú a vynechajú. OBJ nemá jednotku, takže model vytvorený v milimetroch alebo palcoch sa dostane do zlej veľkosti: po importe zmeňte mierku (pozrite [Otočenie a mierka](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** metre, Y nahor, svetové súradnice. Jeden objekt na každé umiestnenie skupiny; komponenty sa zapíšu celé pri každom umiestnení. Siete si zachovajú svoje plochy, súradnice textúr a normály; plochy spojené [mäkkými hranami](topic:soften) dostanú normálu na každom rohu. Ak má model farby, vedľa `.obj` sa stiahne `.mtl`. Ak má importované textúry, `.obj`, `.mtl` a obrázky sa stiahnu spolu ako jeden `.zip`.
- **Limit:** 2 milióny vrcholov alebo plôch; 64 MB textu.

## glTF (.glb, .gltf)

Import a export, glTF 2.0.

- **Import:** `.glb`, alebo `.gltf` spolu so súbormi `.bin` a textúr: pretiahnite ich do pohľadu naraz (alebo vyberte `.glb`). `.gltf` zadaný samostatne uvedie súbor, ktorý potrebuje: "Tento súbor .gltf potrebuje "…": otvorte verziu .glb alebo pretiahnite .gltf spolu s jeho súbormi."
  - **Siete** sa importujú ako [siete](topic:meshes), jedna za každú sieť v súbore, so zachovanými normálami súboru, súradnicami textúr a farbami vrcholov. Hrany, kde sa normály súboru zlomia, sú tvrdé; ostatné sú mäkké. Sieť použitá na viacerých miestach zostane zdieľaná.
  - **Uzly** sa stanú skupinami s názvami podľa súboru. Inštancované siete (EXT_mesh_gpu_instancing) sa importujú ako jedna sieť umiestnená viackrát.
  - **Materiály:** textúra základnej farby (PNG, JPEG alebo WebP) sa importuje ako textúra, umiestnená podľa súradníc textúr súboru (s prípadnou transformáciou textúry), a zachová sa pri uložení; inak základná farba. Kov, drsnosť, normálové mapy, sklo, čírny lak, sheen a ostatné rozšírenia materiálov sa načítajú, ale zatiaľ sa nezachovajú: stavový riadok to uvedie.
  - **Svetlá** (KHR_lights_punctual): bodové a reflektorové svetlá sa stanú [lampami](topic:lights). Smerové svetlá sa počítajú: slnko osvetľuje model.
  - **Kamery** sa stanú [scénami](topic:scenes).
  - **Postavy so skinom** sa importujú v pokojovej polohe tak, ako ich súbor drží; ich kosti, animácie a morfovacie ciele sa počítajú a zatiaľ sa nezachovajú.
  - **Komprimované súbory** (Draco, meshopt) a kvantizované dáta sa načítavajú. Dekodéry sa načítajú len pre súbor, ktorý ich potrebuje.
  - Body a čiary sa počítajú a vynechajú (sieť obsahuje plochy). Textúry KTX2 sa vynechajú; plochy si zachovajú farbu.
- **Export** (`.glb`): glTF 2.0 binárny, metre, Y nahor. Jedna sieť na každú definíciu, takže komponenty zostanú zdieľané. Siete si zachovajú svoje normály, súradnice textúr a farby vrcholov; plochy spojené [mäkkými hranami](topic:soften) nesú hladké normály. Farby a materiály sa stanú materiálmi (materiál ako svoja farba); importované textúry sa zapíšu ako textúry. Zapnuté lampy sa stanú bodovými a reflektorovými svetlami (plošné lampy nemajú ekvivalent v glTF a vynechajú sa); scény sa stanú kamerami. Voľné hrany sa vynechajú.
- **Limit:** súbory do 300 MB; asi 130 miliónov čísel geometrie.

## STL (.stl)

Import a export.

- **Import:** binárny alebo ASCII. STL nemá jednotku: načíta sa ako **milimetre**, rovnako ako ho zapisujú tlačiarne a vlastný export ModelCraft. Rohy v tom istom bode sa spoja, takže uzavretá časť sa importuje ako uzavretá [sieť](topic:meshes). Farby v súbore (konvencie VisCAM / SolidView a Materialise) farbia plochy.
- **Export,** pre 3D tlač: binárny STL, **milimetre**, Z nahor. Iba trojuholníky: skupiny a voľné hrany sa vynechajú. Natreté plochy nesú farbu podľa konvencie VisCAM / SolidView, ktorú ostatné programy ignorujú, ak ju nečítajú. Na čistú tlač exportujte uzavreté telesá.

## STEP (.step, .stp)

Iba import. STEP je formát, ktorý posielajú modelári súčiastok a dodávatelia: súbory AP203, AP214 a AP242.

- **Import:** ModelCraft číta súbor sám, na stránke, a každé teleso premení na uzavretú [sieť](topic:meshes) trojuholníkov: ploché plochy zostanú ploché, zakrivené plochy (valce, kužele, gule, tori, plochy B-spline) sa zmenia na mnoho malých plochých, pričom hrany vnútri jednej zakrivenej plochy sú mäkké a hrany medzi dvoma plochami ostré. Súbory STEP uvádzajú svoju jednotku; model sa importuje v skutočnej veľkosti. Zostava sa importuje so všetkými časťami tam, kde ich súbor umiestňuje; každá časť je vlastná sieť v skupine pomenovanej podľa súboru. Farby, názvy častí stromu zostavy a tolerancie (PMI) sa nečítajú.
- **Správy:** čo sa preskočilo alebo nakreslilo hrubšie, sa pridá do stavového riadka ("Poznámky: …"); súbor bez telesa, poškodený súbor alebo súbor nad limitmi uvedie dôvod a nič nepridá.
- **Limit:** súbory do 300 MB; 400 000 plôch a 8 miliónov trojuholníkov.

## .3dm

Iba import. Súbory `.3dm` obsahujú modely NURBS: polyplochy, plochy, siete, krivky a bloky.

- **Import:** ModelCraft číta súbor sám, na stránke. Siete sa importujú tak, ako sú; každá plocha polyplochy alebo extrúzie pochádza z renderovacej siete uloženej v súbore, inak ju ModelCraft prevedie na trojuholníky (roviny, plochy NURBS, plochy rotácie, vytiahnuté krivky, extrúzie; orezané svojimi hranami, uzavreté polyplochy ako uzavreté siete). Krivky sa stanú hranami, bloky sa stanú komponentmi (zachované bloky v blokoch), vrstvy sa stanú značkami (skryté, keď sú vypnuté), farba objektu (jeho vlastná, farba jeho vrstvy alebo jeho materiálu) farbí jeho plochy. Súbor uvádza svoju jednotku; model sa importuje v skutočnej veľkosti. Postup krok za krokom: [Import modelu .3dm](topic:import-3dm-files).
- **Správy:** stavový riadok uvedie, koľko plôch pochádza z uložených sietí a koľko bolo prevedených na trojuholníky, a pomenuje, čo sa vynechalo: body, oblaky bodov, text, kóty, šrafovanie, svetlá, objekty SubD, plochy na druhoch povrchov, ktoré sa ešte nečítajú, prepojené bloky.
- **Limit:** súbory do 300 MB.

## PLY (.ply)

Import a export pre siete s farbami (skeny, farebná 3D tlač, iní modelári).

- **Import:** ASCII aj binárny. Plochy sa stanú [sieťou](topic:meshes) so zachovanými normálami, súradnicami textúr a farbami vrcholov; každá plocha sa natrie najbližšou z 4,096 farieb, takže farby vidíte hneď. PLY nemá jednotku ani konvenciu osí: súradnice sa načítajú tak, ako sú (metre, Z nahor). PLY iba s bodmi je oblak bodov: otvorte ho v BimCraft alebo CivilCraft.
- **Export:** binárny PLY s polohami, normálami a farbami (a súradnicami textúr, ak ich model má), v metroch, Z nahor.

## FBX (.fbx)

Iba import. Súbory FBX 7 (od roku 2011), binárne alebo ASCII, číta vlastný čítač ModelCraft.

- Siete sa importujú ako [siete](topic:meshes) so svojimi normálami, súradnicami textúr (každá sada UV) a farbami vrcholov; sieť, ktorú používa viac objektov, zostane zdieľaná. Objekty sa stanú skupinami s ich transformáciami (vrátane pivotov, posunov a predrotácií).
- Materiály: difúzna textúra – vložená v súbore, alebo obrázok pretiahnutý spolu s `.fbx` – sa importuje ako textúra (obrázky TGA sa zachovajú ako PNG); inak difúzna farba. Ostatné nastavenia materiálu čakajú na nový model materiálov.
- Použije sa os nahor a jednotka súboru: všetko sa importuje so Z nahor, v metroch.
- Bodové a reflektorové svetlá sa stanú [lampami](topic:lights) (intenzita FBX 100 je predvolená lampa ModelCraft, 800 lumenov: intenzity FBX nemajú jednotku). Kamery sa stanú [scénami](topic:scenes).
- Postavy so skinom sa importujú v pokoji; kosti a animácie sa počítajú a zatiaľ sa nezachovajú. Smerové a plošné svetlá a geometria iná než siete (NURBS, krivky) sa počítajú a vynechajú.
- Súbory FBX 6 a staršie sa odmietajú: uložte ich znova ako FBX 2011 alebo novší.

## Alembic (.abc)

Iba import: cache geometrie z programov na animáciu a efekty.

- Siete (polygónové a subdivízne siete) sa importujú ako [siete](topic:meshes) so súradnicami textúr a normálami; transformácie sa stanú skupinami. Alembic má os Y nahor a prevedie sa na Z nahor; metre.
- Cache s mnohými vzorkami (animácia) sa importuje v prvej vzorke; stavový riadok uvedie, koľko ich má.
- Body, krivky, plochy NURBS, kamery a svetlá sa počítajú a vynechajú. Súbory so starým rozložením HDF5 sa odmietajú: uložte ich znova ako súbor Ogawa Alembic.

{{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}} najprv skontroluje tvar a zapíše výber alebo všetko zobrazené. Pozrite [Príprava modelu na 3D tlač](topic:print-3d).

## 3MF (.3mf)

Iba export z {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}. Jadro 3MF: jedna sieť v **milimetroch**, Z nahor, s farbami ako materiálmi. Väčšina slicerov ho číta a na rozdiel od STL uvádza svoju jednotku. Skryté veci sa vynechajú. Pozrite [Príprava modelu na 3D tlač](topic:print-3d).

## Export DWG a DXF (.dwg, .dxf)

Pre programy CAD. Model sa zapíše vo svojej jednotke: palce pre modely v stopách a palcoch, inak milimetre, centimetre alebo metre (stavový riadok ju pomenuje).

- **Plochy** sa stanú 3D plochami (trojuholníkmi). Čiary vnútri plochy a mäkké hrany sa zapíšu ako neviditeľné, takže plochy vyzerajú ako v ModelCraft.
- **Voľné hrany** sa stanú čiarami.
- **Skupiny a komponenty** sa stanú blokmi: komponent sa zapíše raz a umiestni sa toľkokrát, koľkokrát sa používa, vrátane otočených a zrkadlených kópií. Skupina, ktorá bola natiahnutá po otočení (takže je šikmá), sa namiesto toho zapíše na mieste.
- **Farby:** DWG zachová farbu každej plochy presne; DXF použije najbližšiu z 255 štandardných farieb CAD.
- **Verzie:** DWG sa zapisuje ako AutoCAD 2004 (AC1018), ktorý otvoria programy CAD od roku 2004. DXF je R12 (AC1009), verzia, ktorú číta každý program CAD; R12 nemá pole jednotky, takže programu CAD povedzte, akú jednotku má použiť.
- **Nezapisuje sa:** pomocné čiary, kóty, scény a kamera.

## IFC (.ifc)

Iba export, pre BimCraft a iné BIM programy. IFC4 s projektom, pozemkom, budovou a jej podlažiami. Každá skupina alebo komponent najvyššej úrovne sa stane jedným zástupným prvkom stavby s názvom; uzavreté sa zapíšu ako telesá (faceted brep), otvorené ako plošné modely; diery v plochách sa zachovajú. Voľná geometria na najvyššej úrovni sa stane jedným prvkom s názvom "Loose geometry". Bez typov, vlastností a materiálov.

**Podlažia:** {{ui:Exportovať}} › {{ui:Podlažia IFC…}} ich vypíše, každé s názvom a výškou ({{ui:Pridať podlažie}}, alebo {{ui:Odhadnúť z modelu}}, ktoré vytvorí jedno podlažie pre každú výšku, na ktorej stoja vaše skupiny najvyššej úrovne). Pri exporte sa každá skupina alebo komponent umiestni na podlažie na jeho úrovni alebo pod jeho najnižším bodom a zachová si svoje miesto. Bez podlaží sa všetko umiestni na jedno podlažie "Level 1" na výške 0. Podlažia sa uložia do súboru ModelCraft.

## DWG (.dwg) a DXF (.dxf)

Import ako čiary na zemi (šrafy a 3D plochy ako plochy); export je popísaný vyššie. Pozrite [Model na situačnom pláne](topic:site-plan).

- **Čítanie:** úsečky, lomené čiary (s oblúkmi), 3D lomené čiary, kružnice, oblúky a odkazy na bloky vrátane polí, z priestoru modelu. Neviditeľné objekty (napríklad skryté stavy dynamického bloku) sa vynechajú. Krivky sa zmenia na 48 rovných častí na jedno celé otočenie.
- **Načítané od verzie 0.4:** spline a elipsy (ako hrany), text, viacriadkový text a hodnoty atribútov (ako hrany v jednočiarovom písme), šrafy (plochy s dierami), 3D plochy a plné výplne (plochy) a kóty (vykreslené z vlastných blokov kót výkresu).
- **Načítané od verzie 0.7:** 3D telesá, oblasti a telesá (ich dáta ACIS, DWG a DXF každej verzie), každé ako vlastná skupina, uzavreté ako telesá. Plochy na iných povrchoch než rovinách, valcoch, kuželoch, guliach, torusoch a jednoduchých splajnových plochách sa vynechajú a uvedú sa v zozname.
- **Nenačítava sa:** body, tabuľky, viacnásobné vynášacie čiary, obrázky a všetko v priestore papiera.
- **Jednotky:** prevezmú sa z výkresu, ak ju uvádza. Ak nie, ModelCraft sa spýta.
- **DXF** musí byť ASCII. Binárny DXF sa odmietne.
- **Súbory DWG** od AutoCAD R13 až po aktuálny formát (AutoCAD 2018 a novší; AC1012 až AC1032) číta vlastný čítač DWG v ModelCraft, na stránke; je súčasťou ModelCraft, takže funguje offline vždy, keď funguje ModelCraft. Staršie verzie (R12 a staršie) a silno poškodené súbory sa nedajú načítať; uložte ich ako DXF.
- **Limity:** súradnice viac ako 10,000 km od počiatku alebo viac ako 2 milióny častí čiar sa odmietnu.

## Súbory SKP

{{ui:Importovať}} (alebo pretiahnutie súboru do pohľadu) načíta súbory SketchUp vlastným čítačom ModelCraft, na stránke: nič sa nenahráva a funguje offline vždy, keď funguje ModelCraft. Otestované so súbormi SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 a 2026; ostatné verzie by sa mali otvoriť tiež, ale zatiaľ sa nevyskúšali. Model sa importuje ako jedna skupina pomenovaná podľa súboru. Jedným {{key:Mod+Z}} sa znova odstráni. Postup krok za krokom: [Import modelu SKP](topic:import-sketchup-files).

- **Zachováva sa:** plochy s ich dierami, skupiny (ako skupiny) a komponenty (ako komponenty, zdieľané), ich názvy a umiestnenia, farby, značky na skupinách a komponentoch, hrany, ktoré nie sú súčasťou plochy, a mäkké a hladké hrany, takže zakrivené povrchy zostanú hladké.
- **Farby:** vlastný materiál plochy určuje jej farbu. Materiál natretý na skupinu alebo komponent sa stane náterom tohto umiestnenia, takže plochy vnútri bez vlastnej farby ho prevezmú, ako v SketchUp; komponent natretý dvoma farbami zostane jedným komponentom.
- **Značky** na skupinách a komponentoch sa stanú značkami ModelCraft, zobrazené alebo skryté tak, ako boli. Značky na voľných plochách a hranách sa nezachovajú (ModelCraft označuje iba skupiny a komponenty); stavový riadok ich spočíta.
- **Skryté veci sa importujú ako skryté** (plochy, hrany, skupiny, komponenty a plochy a hrany na skrytej značke), takže vidíte to, čo zobrazil SketchUp; {{ui:Zobraziť všetko}} ich zobrazí.
- **Textúry:** plocha natretá materiálom s textúrou si zachová svoju textúru, umiestnenú ako v súbore, a súbor ModelCraft si zachová obrázok. Textúra na celej skupine alebo komponente, textúra chýbajúca v súbore alebo obrázok, ktorý prehliadače nedokážu zobraziť (napríklad súbor Photoshop), si zachová iba farbu svojho materiálu.
- **Vynechané a spočítané v stavovom riadku:** obrázky umiestnené v modeli. Text, kóty, pomocné čiary, rezové roviny, scény a štýly sa nenačítajú.
- **Jednotky:** súbory SketchUp majú vnútri palce; ModelCraft ich prevedie, takže veľkosti sú správne v akejkoľvek jednotke.
- **Ukladanie `.skp`** ešte nie je hotové. Ak chcete model vrátiť do SketchUp, exportujte Collada (`.dae`).

## Nepodporované

ModelCraft nemôže otvoriť súbory 3DS alebo IFC a nemôže uložiť súbory 3DS, FBX, STEP, `.3dm` ani SketchUp (`.skp`).
