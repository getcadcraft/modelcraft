---
title: Podrobnosti o formátech souborů
summary: Přesně to, co si každý formát, který ModelCraft otevírá, importuje a exportuje, zachová, převede a vynechá.
keywords: formáty, typy souborů, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, jednotky, osy, osa Y nahoru, osa Z nahoru, milimetry, limity
from: c47d2d28
---

Model ModelCraftu je v metrech s osou Z (modrou) nahoru. Každý formát níže se z této soustavy převádí, nebo do ní.

## ModelCraft (.modelcraft)

| Co | Podrobnosti |
|---|---|
| Otevřít | {{ui:Otevřít}} ({{key:Mod+O}}) nebo přetažení do pohledu. Soubory končící na `.json` jsou přijaty také |
| Uložit | {{ui:Uložit}} ({{key:Mod+S}}), jako stažení |
| Zachová | Vše: geometrii, plochy a jejich barvy, materiály a importované textury, lampy, měkké hrany, skupiny, komponenty, názvy, vodítka, scény, jednotky a poslední kameru a styl |
| Vynechává | Historii zpět |
| Limit | 200 MB |

Soubor uložený novějším ModelCraftem, než je ten váš, je odmítnut: "Tento model byl uložen novějším ModelCraftem (verze souboru …). Aktualizujte ModelCraft, abyste jej mohli otevřít." Soubor, který není modelem ModelCraftu, hlásí: "Tento soubor není modelem ModelCraftu (není to JSON)." nebo "Toto není soubor ModelCraftu, který umíme otevřít: …".

## USD (.usd, .usda, .usdc, .usdz)

Otevření, import a {{ui:Uložit jako}} nebo {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Soubor USD, který ModelCraft uložil, se znovu otevře beze ztráty; USD soubory jiných programů se otevřou jako sítě, skupiny, komponenty, lampy a kamery. Viz [Uložení, otevření a export USD](topic:usd).

## Collada (.dae)

Import i export. Nejlepší formát pro výměnu modelů s jinými 3D modeláři.

- **Export:** Collada 1.4.1, Z nahoru, metry. Jedna geometrie na skupinu nebo definici komponenty; komponenty se zapíší jednou a umístí odkazem, takže zůstávají sdílené. Plochy s dírami nebo nekonvexními obrysy se rozdělí na trojúhelníky. Barvy se stanou materiály. Volné hrany se zapíší jako čáry. Názvy, které formát nepřijímá, se upraví a přesný název se uchová vedle něj.
- **Import:** trojúhelníky, mnohoúhelníky (s dírami), trojúhelníkové vějíře a pásy se stanou plochami; čáry se stanou hranami. Použijí se transformace uzlů, osa nahoru souboru a jeho jednotka. Uzel umístěný na několika místech nebo geometrie použitá několika uzly přijde jako komponenta; ostatní uzly přijdou jako skupiny. Difuzní barvy materiálů se stanou barvami ploch.
- **Nezpracovává se:** textury, kůže a morfy, kamery, světla, některé typy transformací (look-at a zkosení) a odkazy na jiné soubory. Stavový řádek je počítá.
- **Ztraceno při exportu:** které hrany jsou měkké. **Při importu** trojúhelníkové plochy zůstávají trojúhelníky, s změkčenými úhlopříčkami, takže rovné oblasti působí jako jedna plocha.

## OBJ (.obj, .mtl)

Import i export.

- **Import:** přetáhněte `.obj` spolu s jeho `.mtl` a obrázky textur (nebo importujte samotný `.obj`: přijde bez materiálů a stavový řádek pojmenuje `.mtl`, který chtěl). Čte se v metrech s osou Y nahoru. Každý objekt (`o`, jinak `g`) se stane [sítí](topic:meshes), jeho plochy zůstanou, jak jsou (čtyřúhelníky zůstanou čtyřúhelníky). Souřadnice textur, normály a barvy po vrcholech se zachovají. Barevný obrázek materiálu (`map_Kd`, PNG, JPEG nebo WebP) přijde jako textura s jejími volbami měřítka a posunu; jinak jeho barva (`Kd`). Hrany, kde normály souboru lomí, jsou tvrdé; bez normál rozhodují skupiny vyhlazení souboru. Ostatní mapy (bump, normála), body, čáry a křivky se počítají a vynechají. OBJ nemá jednotku, takže model v milimetrech nebo palcích přijde ve špatné velikosti: po importu jej zvětšete nebo zmenšete (viz [Otočení a měřítko](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** metry, osa Y nahoru, světové souřadnice. Jeden objekt na umístění skupiny; komponenty se zapíší celé na každém umístění. Sítě si zachovají své plochy, souřadnice textur a normály; plochy spojené [měkkými hranami](topic:soften) dostanou normálu na každém rohu. Má-li model barvy, vedle `.obj` se stáhne `.mtl`. Má-li importované textury, `.obj`, `.mtl` a obrázky se stáhnou společně jako jeden `.zip`.
- **Limit:** 2 miliony vrcholů nebo ploch; 64 MB textu.

## glTF (.glb, .gltf)

Import i export, glTF 2.0.

- **Import:** `.glb`, nebo `.gltf` spolu s jeho `.bin` a soubory textur: přetáhněte je všechny najednou do pohledu (nebo vyberte `.glb`). Samotný `.gltf` uvede, který soubor potřebuje: "Tento soubor .gltf potřebuje „…“: otevřete verzi .glb, nebo přetáhněte .gltf spolu s jeho soubory."
  - **Sítě** přijdou jako [sítě](topic:meshes), jedna na každou síť v souboru, se zachovanými normálami, souřadnicemi textur a barvami vrcholů. Hrany, kde normály souboru lomí, jsou tvrdé; ostatní jsou měkké. Síť použitá na více místech zůstane sdílená.
  - **Uzly** se stanou skupinami, pojmenovanými jako v souboru. Instancované sítě (EXT_mesh_gpu_instancing) přijdou jako jedna síť umístěná mnohokrát.
  - **Materiály:** textura základní barvy (PNG, JPEG nebo WebP) přijde jako textura, umístěná podle souřadnic textur souboru (včetně případné transformace textury), a zachová se při uložení; jinak základní barva. Kov, drsnost, normálové mapy, sklo, lak, lesk a další rozšíření materiálů se čtou, ale zatím se nezachovávají: stavový řádek to říká.
  - **Světla** (KHR_lights_punctual): bodová a reflektorová světla se stanou [lampami](topic:lights). Směrová světla se počítají: slunce osvětluje model.
  - **Kamery** se stanou [scénami](topic:scenes).
  - **Animované postavy** přijdou stojící v klidové pozici; jejich kosti, animace a morfy se počítají a zatím se nezachovávají.
  - **Komprimované soubory** (Draco, meshopt) a kvantizovaná data se čtou. Dekodéry se načtou jen pro soubor, který je potřebuje.
  - Body a čáry se počítají a vynechají (síť drží plochy). Textury KTX2 se vynechají; plochy si zachovají barvu.
- **Export** (`.glb`): glTF 2.0 binární, metry, osa Y nahoru. Jedna síť na definici, takže komponenty zůstanou sdílené. Sítě si zachovají normály, souřadnice textur a barvy vrcholů; plochy spojené [měkkými hranami](topic:soften) nesou hladké normály. Barvy a materiály se stanou materiály (materiál jako barva); importované textury se zapíší jako textury. Zapnutá světla se stanou bodovými a reflektorovými světly (plošné lampy nemají ekvivalent v glTF a vynechají se); scény se stanou kamerami. Volné hrany se vynechají.
- **Limit:** soubory do 300 MB; zhruba 130 milionů čísel geometrie.

## STL (.stl)

Import i export.

- **Import:** binární nebo ASCII. STL nemá jednotku: čte se jako **milimetry**, jak je zapisují tiskárny a vlastní export ModelCraftu. Rohy ve stejném bodě se spojí, takže uzavřená část přijde jako uzavřená [síť](topic:meshes). Barvy v souboru (konvence VisCAM / SolidView a Materialise) obarví plochy.
- **Export** pro 3D tisk: binární STL, **milimetry**, osa Z nahoru. Pouze trojúhelníky: skupiny a volné hrany se vynechají. Obarvené plochy nesou svou barvu v konvenci VisCAM / SolidView, kterou ostatní programy ignorují, pokud ji nečtou. Pro čistý tisk exportujte uzavřená tělesa.

## STEP (.step, .stp)

Pouze import. STEP je formát, který posílají modeláři dílů a dodavatelé: soubory AP203, AP214 a AP242.

- **Import:** ModelCraft soubor čte sám, na stránce, a každé těleso promění v uzavřenou [síť](topic:meshes) trojúhelníků: rovné plochy zůstanou rovné, zakřivené plochy (válce, kužely, koule, tori, plochy B-spline) se promění v mnoho malých rovných; hrany uvnitř jedné zakřivené plochy jsou měkké a hrany mezi dvěma plochami ostré. Soubory STEP uvádějí svou jednotku; model přijde ve své skutečné velikosti. Sestava přijde s každým dílem tam, kam jej soubor umisťuje; každý díl je vlastní síť ve skupině pojmenované podle souboru. Barvy, názvy dílů ze stromu sestavy a tolerance (PMI) se nečtou.
- **Zprávy:** co bylo přeskočeno nebo nakresleno hruběji, se přidá na stavový řádek ("Poznámky: …"); soubor bez tělesa, poškozený soubor nebo soubor přesahující limity to řekne a nic nepřidá.
- **Limit:** soubory do 300 MB; 400 000 ploch a 8 milionů trojúhelníků.

## .3dm

Pouze import. Soubory `.3dm` obsahují modely NURBS: polyplochy, plochy, sítě, křivky a bloky.

- **Import:** ModelCraft soubor čte sám, na stránce. Sítě přijdou tak, jak jsou; každá plocha polyplochy nebo extruze pochází ze zobrazovací sítě uložené v souboru, jinak ji ModelCraft tesseluje (roviny, plochy NURBS, plochy rotace, extrudované křivky, extruze; oříznuté svými hranami, uzavřené polyplochy jako uzavřené sítě). Křivky se stanou hranami, bloky se stanou komponentami (zachovají se bloky v blocích), vrstvy se stanou značkami (skryté, když jsou vypnuté) a barva objektu (vlastní, jeho vrstvy nebo jeho materiálu) obarví jeho plochy. Soubor uvádí svou jednotku; model přijde ve své skutečné velikosti. Krok za krokem: [Import modelu .3dm](topic:import-3dm-files).
- **Zprávy:** stavový řádek říká, kolik ploch pochází z uložených sítí a kolik bylo tesselováno, a pojmenuje, co bylo vynecháno: body, mračna bodů, text, kóty, šrafy, světla, objekty SubD, plochy na druzích povrchů, které ještě nejsou čteny, propojené bloky.
- **Limit:** soubory do 300 MB.

## PLY (.ply)

Import i export, pro sítě s barvami (skeny, barevný 3D tisk, jiní modeláři).

- **Import:** ASCII i binární. Plochy se stanou [sítí](topic:meshes) se zachovanými normálami, souřadnicemi textur a barvami vrcholů; každá plocha se obarví nejbližší z 4 096 barev, takže barvy vidíte hned. PLY nemá jednotku ani konvenci os: souřadnice přijdou, jak jsou (metry, Z nahoru). PLY pouze s body je mračno bodů: otevřete jej v BimCraftu nebo CivilCraftu.
- **Export:** binární PLY s pozicemi, normálami a barvami (a souřadnicemi textur, pokud je model má), v metrech, Z nahoru.

## FBX (.fbx)

Pouze import. Soubory FBX 7 (od roku 2011), binární nebo ASCII, čte vlastní čtečka ModelCraftu.

- Sítě přijdou jako [sítě](topic:meshes) se svými normálami, souřadnicemi textur (každá sada UV) a barvami vrcholů; síť, kterou používá několik objektů, zůstane sdílená. Objekty se stanou skupinami s jejich transformacemi (včetně pivotů, posunů a předrotací).
- Materiály: difuzní textura (vložená v souboru, nebo obrázek přetažený spolu s `.fbx`) přijde jako textura (obrázky TGA se zachovají jako PNG); jinak difuzní barva. Ostatní nastavení materiálu čekají na nový model materiálů.
- Osa nahoru a jednotka souboru se použijí: vše přijde s Z nahoru, v metrech.
- Bodová a reflektorová světla se stanou [lampami](topic:lights) (intenzita FBX 100 je výchozí lampa ModelCraftu, 800 lumenů: intenzity FBX nemají jednotku). Kamery se stanou [scénami](topic:scenes).
- Animované postavy přijdou v klidu; kosti a animace se počítají a zatím se nezachovávají. Směrová a plošná světla a geometrie jiná než sítě (NURBS, křivky) se počítají a vynechají.
- Soubory FBX 6 a starší jsou odmítnuty: uložte je znovu jako FBX 2011 nebo novější.

## Alembic (.abc)

Pouze import: geometrické cache z animačních a efektových programů.

- Sítě (polygonové a subdivizní) přijdou jako [sítě](topic:meshes) se souřadnicemi textur a normálami; transformace se stanou skupinami. Alembic má osu Y nahoru a převádí se na Z nahoru; metry.
- Cache s mnoha vzorky (animace) přijde v prvním vzorku; stavový řádek říká, kolik jich má.
- Body, křivky, plochy NURBS, kamery a světla se počítají a vynechají. Soubory ve staré vrstvě HDF5 jsou odmítnuty: uložte je znovu jako soubor Ogawa Alembic.

{{ui:Check for 3D printing (STL or 3MF)…}} nejdřív zkontroluje tvar a zapíše výběr, nebo vše, co je zobrazeno. Viz [Příprava modelu pro 3D tisk](topic:print-3d).

## 3MF (.3mf)

Pouze export, z {{ui:Check for 3D printing (STL or 3MF)…}}. Jádro 3MF: jedna síť v **milimetrech**, Z nahoru, s barvami jako materiály. Většina slicerů jej čte a na rozdíl od STL udává svou jednotku. Skryté věci se vynechají. Viz [Příprava modelu pro 3D tisk](topic:print-3d).

## Export DWG a DXF (.dwg, .dxf)

Pro CAD programy. Model se zapíše ve své vlastní jednotce: palce u modelů ve stopách a palcích, jinak milimetry, centimetry nebo metry (stavový řádek ji pojmenuje).

- **Plochy** se stanou 3D plochami (trojúhelníky). Čáry uvnitř plochy a měkké hrany se zapíší jako neviditelné, takže plochy vypadají jako v ModelCraftu.
- **Volné hrany** se stanou čárami.
- **Skupiny a komponenty** se stanou bloky: komponenta se zapíše jednou a umístí se tolikrát, kolikrát se použije, včetně otočených a zrcadlených kopií. Skupina, která byla natažena poté, co byla otočena (takže je šikmá), se místo toho zapíše na místě.
- **Barvy:** DWG zachovává barvu každé plochy přesně; DXF používá nejbližší z 255 standardních CAD barev.
- **Verze:** DWG se zapisuje jako AutoCAD 2004 (AC1018), který otevírají CAD programy od roku 2004. DXF je R12 (AC1009), verze, kterou čte každý CAD program; R12 nemá pole jednotky, takže řekněte CAD programu, jakou jednotku má použít.
- **Nezapisuje se:** vodítka, kóty, scény a kamera.

## IFC (.ifc)

Pouze export, pro BimCraft a jiné BIM programy. IFC4 s projektem, lokalitou, budovou a jejími podlažími. Každá skupina nebo komponenta nejvyšší úrovně se stane jedním prvkem stavby (proxy) se svým názvem; uzavřené se zapíší jako plné tvary (faceted breps), otevřené jako modely povrchů; díry v plochách se zachovají. Volná geometrie na nejvyšší úrovni se stane jedním prvkem nazvaným "Loose geometry". Bez typů, vlastností a materiálů.

**Podlaží:** {{ui:Export}} › {{ui:IFC storeys…}} je vypíše, každé s názvem a výškou ({{ui:Add storey}}, nebo {{ui:Guess from the model}}, které vytvoří jedno podlaží pro každou výšku, na které stojí vaše skupiny nejvyšší úrovně). Při exportu jde každá skupina nebo komponenta na podlaží na úrovni nebo pod svým nejnižším bodem a zachová své místo. Bez podlaží je vše na jednom podlaží, "Level 1", na 0. Podlaží se uloží do souboru ModelCraftu.

## DWG (.dwg) a DXF (.dxf)

Import jako čáry na zemi (šrafy a 3D plochy jako plochy); export jak je popsáno výše. Viz [Model na situačním plánu](topic:site-plan).

- **Čtení:** čáry, polylinie (s oblouky), 3D polylinie, kružnice, oblouky a odkazy na bloky včetně polí, z prostoru modelu. Neviditelné objekty (například skryté stavy dynamického bloku) se vynechají. Křivky se promění v 48 rovných kusů na celou otáčku.
- **Čteno od verze 0.4:** splajny a elipsy (jako hrany), text, víceřádkový text a hodnoty atributů (jako hrany v jednotahovém písmu), šrafy (plochy s dírami), 3D plochy a plné výplně (plochy) a kóty (kreslené z vlastních bloků kót výkresu).
- **Čteno od verze 0.7:** 3D tělesa, oblasti a tělesa (jejich data ACIS, DWG i DXF každé verze), každé jako vlastní skupina, uzavřená jako tělesa. Plochy na površích jiných než rovinách, válcích, kuželech, koulích, torech a jednoduchých splajnových površích se vynechají a vypíšou se.
- **Nečteno:** body, tabulky, víceúrovňové výnosky, obrázky a cokoli v prostoru výkresu.
- **Jednotky:** převezmou se z výkresu, pokud je uvádí. Pokud ne, ModelCraft se zeptá.
- **DXF** musí být ASCII. Binární DXF je odmítnut.
- **DWG** soubory od AutoCAD R13 po aktuální formát (AutoCAD 2018 a novější; AC1012 až AC1032) čte vlastní čtečka DWG ModelCraftu, na stránce; je součástí ModelCraftu, takže funguje offline, kdykoli funguje ModelCraft. Starší verze (R12 a starší) a silně poškozené soubory nejde číst; uložte je jako DXF.
- **Limity:** souřadnice více než 10 000 km od počátku nebo více než 2 miliony kusů čar jsou odmítnuty.

## Soubory SKP

{{ui:Import}} (nebo přetažení souboru do pohledu) čte soubory SketchUp vlastní čtečkou ModelCraftu, na stránce: nic se nenahrává a funguje offline, kdykoli funguje ModelCraft. Testováno se soubory z verzí SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 a 2026; ostatní verze by se měly otevřít, ale zatím nebyly vyzkoušeny. Model přijde jako jedna skupina pojmenovaná podle souboru. Jedno {{key:Mod+Z}} ji odstraní. Krok za krokem: [Import modelu SKP](topic:import-sketchup-files).

- **Zachováno:** plochy s dírami, skupiny (jako skupiny) a komponenty (jako komponenty, sdílené), jejich názvy a umístění, barvy, značky na skupinách a komponentách, hrany, které nejsou součástí plochy, a měkké a hladké hrany, takže zakřivené plochy zůstanou hladké.
- **Barvy:** vlastní materiál plochy dává její barvu. Materiál namalovaný na skupinu nebo komponentu se stane nátěrem tohoto umístění, takže plochy uvnitř bez vlastní barvy jej převezmou, jako v SketchUpu; komponenta namalovaná dvěma barvami zůstane jednou komponentou.
- **Značky** na skupinách a komponentách se stanou značkami ModelCraftu, zobrazené nebo skryté tak, jak byly. Značky na volných plochách a hranách se nezachovají (ModelCraft značkuje pouze skupiny a komponenty); stavový řádek je počítá.
- **Skryté věci přijdou skryté** (plochy, hrany, skupiny, komponenty a plochy a hrany na skryté značce), takže vidíte, co ukazoval SketchUp; {{ui:Unhide all}} je zobrazí.
- **Textury:** plocha namalovaná texturovaným materiálem si zachová texturu, umístěnou jako v souboru, a soubor ModelCraftu zachová obrázek. Textura na celé skupině nebo komponentě, textura chybějící v souboru nebo obrázek, který prohlížeče nezobrazí (například soubor Photoshopu), zachová jen barvu materiálu.
- **Vynecháno a počítáno na stavovém řádku:** obrázky umístěné v modelu. Text, kóty, vodítka, řezové roviny, scény a styly se nečtou.
- **Jednotky:** soubory SketchUp jsou uvnitř v palcích; ModelCraft je převádí, takže velikosti vyjdou správně v jakékoli jednotce.
- **Uložení `.skp`** není hotovo. Chcete-li vrátit model do SketchUpu, exportujte Collada (`.dae`).

## Nepodporováno

ModelCraft nemůže otevřít soubory 3DS ani IFC a nemůže uložit soubory 3DS, FBX, STEP, `.3dm` ani SketchUp (`.skp`).
