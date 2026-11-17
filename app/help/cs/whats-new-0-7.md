---
title: Co je nového ve verzi 0.7 (dřívější)
summary: Sítě s modifikátory, tvarování, UV souřadnice a křivkové objekty, sledování paprsků na grafické kartě a pracovní prostor Vykreslení, živý pohled v reálném čase s rozptylem a panoramaty, uzlové materiály, pracovní prostor Animace s kostrami a fyzikou, soubory USD, FBX, STEP a .3dm a nástroje pro tisk se stylem Začátečník.
keywords: co je nového 0.7, dřívější vydání, poznámky k vydání, changelog, změny, 0.7, verze, nové funkce, síť, sítě, pracovní prostor sítě, modifikátory, rozdělení, rýha, uv, rozbalit, švy, křivky, křivkové objekty, nurbs, bezier, tvarování, přesíťování, retopologie, rozdělit, výpočet, sledování paprsků, webgpu, pracovní prostor vykreslení, fronta vykreslování, mp4, exr, odšumění, fyzikální obloha, hdri, ies, hloubka ostrosti, míchání světel, mlha, kaustiky, živý pohled, reálný čas, procházka, rozptyl, panorama, prohlídka, prohlížeč, stínování, uzly, uzlové materiály, knihovna materiálů, materialx, dekaly, malování textur, zapékání, animace, editor grafu, klipy, klíče tvarů, ovladače, kostra, kosti, navazování kůže, ik, omezení, fyzika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tělesa, podpěry, tloušťka stěn, vyduta, oprava, začátečník, asistenti, váš počítač, jednotky, portugalština
from: fa562a09
---

Toto se změnilo v ModelCraftu 0.7 oproti 0.6. ModelCraft nyní modeluje sítě i geometrii tlač/tah, vykresluje na grafické kartě a má pracovní prostor pro každý druh práce: vyberte jej v seznamu {{ui:Pracovní prostor}} vlevo na panelu nástrojů.

## Nové

### Sítě

- **Sítě.** Vyberte skupinu nebo komponentu a klikněte na {{ui:Převést na síť}} v {{ui:Informace o prvku}}: stane se sítí s plochami libovolného počtu rohů, které mohou nést souřadnice textury, normály, barvy a váhy. {{ui:Převést na geometrii}} ji vrátí zpět. {{ui:Zpět}} u sítě zachová jen to, co každý krok změnil. Soubor, který síť obsahuje, potřebuje k otevření ModelCraft 0.7. Viz [Sítě](topic:meshes).
- **Pracovní prostor pro sítě.** Dvojklikem na síť nebo volbou {{ui:Síť}} v seznamu {{ui:Pracovní prostor}} upravíte její vrcholy, hrany a plochy: smyčky a kruhy, proporcionální úpravy, vytažení, vsazení, zkosení, řez smyčkou, nůž, rozpůlení, otočení, sloučení, rozpuštění, výplň, mřížkovou výplň, most a posun, a nastavení poslední operace, které lze v panelu změnit i později. Začněte z roviny, krychle, koule, toru a dalších. Fungují klávesy tlač/tah i klávesy modelovače. Viz [Úprava sítě v pracovním prostoru pro sítě](topic:mesh-edit).
- **Modifikátory.** Zrcadlení, pole, rozdělený povrch, zkosení, ztuhnutí, boolean, posun, svaření, decimace, vyhlazení, mřížka, deformace křivkou a smrštění obalu mění, co síť zobrazuje, aniž ji mění. Skládejte je, zapínejte a vypínejte každý pro pohled i pro vykreslení a {{ui:Použít}} jeden, až ho budete chtít natrvalo. Viz [Modifikátory sítě](topic:modifiers).
- **Rozdělení s rýhami.** {{ui:Rýha}} v pracovním prostoru pro sítě udrží vybrané hrany ostré pod rozděleným povrchem. Vykreslení může použít více úrovní než pohled a u velké sítě pohled ukáže nižší úroveň a řekne to. Viz [Rozdělený povrch](topic:modifiers#subdivision-surface).
- **Křivkové objekty.** Bézierovy, NURBS a křivky z přímých úseků, z nichž vzniknou trubka, pás, zúžení nebo vyplněná deska, a text jako křivka. Upravte jejich body v pracovním prostoru {{ui:Křivka}}; až bude tvar správný, zvolte {{ui:Na síť}}. Viz [Křivkové objekty](topic:curves).
- **Pracovní prostor UV.** Označte švy (nebo nechte ModelCraft označit je u ostrých hran), {{ui:Rozbalit}} a {{ui:Srovnat}}, nebo promítněte podle krabice, válce, koule nebo pohledu. Editor UV vedle 3D pohledu posouvá, otáčí a zvětšuje kusy; šachovnice a barvy natažení ukazují výsledek. Viz [Rozložení UV souřadnic sítě](topic:uv).
- **Tvarování.** Pracovní prostor {{ui:Tvarování}} má štětce kreslení, hlína, vyhlazení, uchopení, nafouknutí, rýha, stlačení, zploštění a maska, zrcadlení přes osu X a {{ui:Detail}}, který přidává trojúhelníky tam, kde tvarujete. Tlak pera nastavuje velikost a sílu štětce. Každý tah je jeden krok zpět. Viz [Tvarování sítě](topic:sculpt).
- **Přesíťování a retopologie.** {{ui:Přesíťovat}} znovu vytvoří celou síť z rovnoměrných trojúhelníků, uzavře díry a spojí přesahující kusy. Pro čistou síť nad detailní zvolte {{ui:Retopologie}}: body, které posunete, přistanou na jejím povrchu. Viz [Přesíťování](topic:mesh-edit#remesh).

### Kreslení

- **Rozdělení hrany nebo křivky.** Nástroj {{ui:Rozdělit}} značí řezy, jak se pohybujete po hraně, a dělí kliknutím nebo zadaným číslem; při vybrané hraně, oblouku nebo kružnici napište `/5`; {{ui:Informace o prvku}} › {{ui:Rozdělit…}} se zeptá na počet, pro tablety. Oblouk nebo kružnice se dělí stejnými úhly na skutečném oblouku. Viz [Rozdělení hrany nebo křivky na stejné díly](topic:divide).
- **Výpočty v poli hodnoty.** Napište `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` nebo `2*450mm` pro jakoukoli délku a `90/2` pro úhel. Výpočet, který nejde provést, řekne, co je špatně a kde. Viz [Výpočty](topic:value-box#calculations).

### Vykreslování

- **Sledování paprsků na grafické kartě.** {{ui:Vykreslit obrázek…}} › {{ui:Vysoká kvalita (sledování paprsků)}} spustí vlastní sledování paprsků CadCraftu na grafické kartě tam, kde prohlížeč má WebGPU; řádek pod obrázkem říká, který engine ho vytvořil. {{ui:Zastavit}} obrázek ponechá a {{ui:Pokračovat}} naváže odtud. Bez WebGPU se obrázek sleduje paprsky přes WebGL jako dříve. Viz [Vysoká kvalita](topic:render#high-quality).
- **Vykreslení v pohledu.** Pracovní prostor {{ui:Vykreslit}} sleduje paprsky samotného pohledu a začíná znovu, jak obíháte nebo upravujete: vykreslete {{ui:Oblast}}, klikněte pro {{ui:Zaostřit}}, nastavte {{ui:Detail}}. Vyžaduje WebGPU. Viz [Vykreslení v pohledu](topic:render#render-in-the-view).
- **Materiály, světla a oblohy.** Obrázky ve vysoké kvalitě stínují každou plochu materiálovým modelem OpenPBR (povlaky, chlupatost, tenké vrstvy, barevné sklo, záře). S WebGPU je také {{ui:Fyzikální obloha}} se {{ui:Zákal}}, {{ui:Obrázek oblohy (HDRI)}} a výrobcem dodané profily světel IES pro lampy. Viz [Oblohy a profily světel](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoaparát jako ve fotografii.** Expozice z clony, závěrky a ISO v každém režimu; s WebGPU také hloubka ostrosti, dvoubodová perspektiva, vyvážení bílé, panoramata 360° (i ve stereu) a kubické mapy. Viz [Kamera](topic:render#the-camera).
- **Dokončení obrázku po vykreslení.** Upravte barevný tón ({{ui:ACES filmový}}, {{ui:AgX}}, {{ui:Filmový}} nebo {{ui:Standardní}}, kontrast, záře (bloom), oslnění, vinětace, tabulka barev `.cube`), smíchejte oblohu, slunce a každou skupinu lamp a prohlédněte si prvky vykreslení jeden po druhém, vše bez dalšího vykreslování. Zbylé zrnění odstraní odšumovač na vašem počítači. Viz [Dokončení obrázku](topic:render#finish-the-picture) a [Míchání světel po vykreslení](topic:render#mix-the-lights-after-the-render).
- **Další způsoby uložení vykreslení.** PNG s 16 bity, vícevrstvý EXR se všemi prvky vykreslení a skupinami světel a soubor vykreslení (`.ccrender`), který se znovu otevře se svým míchání a barevným tónem. Viz [Uložení obrázku](topic:render#save-the-picture).
- **Mlha, kouř a kaustiky.** Mlha a opar osvětlené sluncem a lampami, se světelnými šachtami; jeden sloup kouře nebo oblak; kaustiky pod sklem a zrcadly; adaptivní vzorkování, které se zastaví na pixelech, jež jsou již čisté. Pouze na grafické kartě. Viz [Mlha, kouř, šum a kaustiky](topic:render#fog-smoke-noise-and-caustics).
- **Fronta vykreslování a MP4.** Přidejte obrázky ve vysoké kvalitě a celé animace do {{ui:Fronta vykreslování}}; vykreslují se jeden po druhém a fronta přežije zavření stránky. Vyžaduje WebGPU. Videa lze také uložit jako MP4 tam, kde je prohlížeč umí zapsat. Viz [Fronta vykreslování](topic:render#the-render-queue) a [Vykreslení videa](topic:animation#render-the-video).

### Živý pohled a prezentace

- **Živý pohled.** {{ui:Export}} › {{ui:Živý pohled}} ukáže model ve vzhledu v reálném čase vedle pohledu, sledující každou úpravu a kameru: stíny slunce, materiály, lampy a světlo odražené od stěn. Projděte jím pomocí {{ui:Procházka}}, přetáhněte {{ui:Čas}} a {{ui:Měsíc}}, abyste pohnuli sluncem, nebo jej přesuňte do {{ui:Nové okno}}. Používá WebGPU, je-li v prohlížeči, jinak WebGL 2. Viz [Živý pohled](topic:live-view).
- **Rozptyl.** Rozmístěte trávu, květiny, kameny, stromy a lidi po plochách nebo štětcem, ze sedmi nových doprovodných položek a zbytku knihovny; sady se ukládají do souboru. Viz [Rozptýlení rostlin, kamenů a lidí](topic:live-view#scatter-plants-rocks-and-people).
- **Sdílení.** Panorama 360°, prohlídka panoramat se šipkami mezi místy, samostatný prohlížeč (jedna webová stránka, která se otevře offline a nic nenačítá z internetu) a video pohybu kamery, vše ve vzhledu v reálném čase. Viz [Sdílení](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR ve vzhledu v reálném čase.** {{ui:Prohlédnout ve VR}} ukáže model s materiály, oblohou, stínem slunce, lampami, rozptýlenými položkami a odraženým světlem. Viz [Jak to vypadá](topic:vr-review#what-it-looks-like).

### Materiály

- **Materiály tvořené uzly.** Pracovní prostor {{ui:Stínování}} sestavuje materiály souboru jako grafy uzlů: obrázky, šum a šachovnice, Voronoiho buňky, vlny, cihly, dlaždice, dřevo, mramor, přechody, špína a opotřebení hran, práce s barvami, matematika, bump a normálové mapy, až do plného materiálu OpenPBR. Pohled ukáže každou změnu hned. Viz [Tvorba materiálů z uzlů](topic:shading).
- **Knihovna materiálů a vlastní sady textur.** Panel Stínování vypisuje materiály z knihovny: šestnáct sad textur CC0, každá s uvedením autora. Klikněte na jednu pro použití, nebo ji přetáhněte na plochu. {{ui:Obrázky nebo zip…}} nebo {{ui:Složka…}} vytvoří materiál z vašich vlastních map, nalezených podle názvů souborů. Viz [Materiály z knihovny](topic:shading#materials-from-the-library).
- **MaterialX dovnitř i ven.** Exportujte materiál jako MaterialX (OpenPBR Surface nebo Standard Surface, textury jako PNG) a importujte soubory MaterialX i s jejich obrázky. Viz [MaterialX](topic:shading#materialx).
- **Dekaly a malování textur.** Umístěte obrázek na plochu jako dekal s vlastním materiálem a malujte na obrázek materiálu kulatým štětcem. Viz [Dekaly](topic:shading#decals) a [Malování na texturu](topic:shading#paint-on-the-texture).
- **Zapékání textur.** Zapečte ambientní okluzi, křivost, osvětlení a normály detailního objektu do obrázků podél UV souřadnic sítě, na jádrech procesoru počítače. Viz [Zapékání textur](topic:shading#bake-textures).

### Animace

- **Pracovní prostor Animace.** Nastavte klíče pro polohu, otočení a velikost objektu, jas, rozptyl a barvu každé lampy a úhel objektivu přímo v panelu. Časová osa dostane pohled {{ui:Křivky}} (Bézierovy úchyty, opakování) a pohled {{ui:Klipy}}, který ukládá klíče jako akce k umístění a míchání; klíče na několika řádcích lze přesouvat, natahovat, kopírovat a vkládat. Viz [Animace libovolné vlastnosti](topic:animate).
- **Klíče tvarů a ovladače.** Síť obsahuje další vlastní tvary, míchané posuvníky, které lze klíčovat, nebo nastavené z jiných hodnot malým výrazem. Viz [Klíče tvarů](topic:animate#shape-keys-morphs) a [Ovladače](topic:animate#drivers).
- **Kostry.** Vložte kosti do sítě, nechte {{ui:Automatické váhy}} rozdělit body mezi ně nebo malujte váhy, a nastavujte pozice a klíčujte kosti; lineární nebo duální kvaternionové navazování kůže. Viz [Kostry: kosti, které ohýbají síť](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK a omezení.** Dosah (IK) s pólem, pohled na, kopírování transformací, limity, potomek a sledování cesty, pro kosti i objekty. Viz [IK a omezení](topic:animate#ik-and-constraints).
- **Fyzika.** Skupiny a komponenty padají, skládají se a srážejí jako krabice nebo koule; {{ui:Zapéct fyziku}} uchová výsledek jako klíče. Viz [Fyzika](topic:animate#physics-drop-stack-and-collide).

### Soubory

- **USD.** {{ui:Uložit jako}} ({{key:Mod+Shift+S}}) uloží model jako `.usda`, `.usdc` nebo `.usdz`, a soubor USD, který ModelCraft uložil, se znovu otevře bez ztráty. USD z jiných programů se otevře nebo importuje jako sítě, skupiny, komponenty, lampy a kamery. {{ui:Uložit}} stále zapisuje `.modelcraft`. Viz [Uložení, otevření a export USD](topic:usd).
- **glTF, úplně.** Soubory glTF se načítají jako upravitelné sítě s normálami, UV souřadnicemi, barvami vrcholů a texturami, uzly jako skupiny, světla jako lampy a kamery jako scény; včetně souborů Draco a meshopt; `.gltf` se otevře, když jej přetáhnete spolu se soubory. Export zapisuje sítě, textury, lampy a kamery. Viz [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL a Alembic.** FBX 2011 a novější (sítě, sady UV, materiály, vložené textury, světla, kamery), PLY a STL s jejich barvami a mezipaměti Alembic v jejich prvním vzorku. OBJ se načte se svým `.mtl` a obrázky, když je přetáhnete společně. Viz [Formáty souborů podrobně](topic:formats).
- **Další exporty.** PLY s barvami, STL s barvami natřených ploch a OBJ s texturami jako jeden zip. Viz [Formáty souborů podrobně](topic:formats).
- **Soubory STEP.** {{ui:Import}} načítá díly a sestavy STEP (AP203, AP214, AP242) jako uzavřené sítě ve skutečné velikosti, každý díl tam, kde jej soubor umisťuje. Viz [STEP](topic:formats#step-step-stp).
- **Soubory .3dm.** {{ui:Import}} načítá modely `.3dm`: sítě, polypovrchy a vytažení (z sítí uložených v souboru, jinak je ModelCraft rozdělí na trojúhelníky), křivky jako hrany, bloky jako komponenty a vrstvy jako značky. Viz [Import modelu .3dm](topic:import-3dm-files).
- **3D tělesa z DWG a DXF.** Import výkresu nyní přinese i jeho 3D tělesa, oblasti a tělesa, každé jako vlastní skupinu, uzavřená jako tělesa. Viz [Model na situačním plánu](topic:site-plan#what-comes-in).

### 3D tisk

- **Nástroje pro tisk.** {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}} › **Nástroje pro tisk** obsahuje {{ui:Náhled podpor}} (převisy, sloupy nebo stromové podpory, přibližně kolik materiálu), {{ui:Tloušťka stěn}} (stěny příliš tenké na tisk, vypsané přes {{ui:Zobrazit}}), {{ui:Vyduta}} (stěny o tloušťce, kterou zadáte, s odtokovými otvory) a {{ui:Oprava}} (každá oprava vypsaná; přesahující části se spojí jen na vaši žádost). Vyduta a oprava dají skupinu, jejíž rovné strany jsou jednotlivé plochy, nebo síť, když výsledek nebude uzavřen nebo má příliš mnoho ploch; stavový řádek říká, která. Viz [Podpěry, tloušťka stěn, vydutí a oprava](topic:print-tools).
- **Styl Začátečník.** {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Nabídky, klávesy a myš}} › {{ui:Začátečník}}: velká tlačítka pro vkládání tvarů a otvorů, přesouvání, zarovnání a {{ui:Skupina}}, aby se otvory vyřízly, potom zkontrolujte model pro tisk. Viz [Styl Začátečník](topic:beginner).

### Asistenti a váš počítač

- **Více pro AI asistenty.** Asistent nyní umí vypsat plochy a materiály, tlač/tah, malovat, vytvářet skupiny, přidávat a zobrazovat scény, přidávat sítě, upravovat zásobníky modifikátorů, exportovat USD, vykreslit obrázek a naplnit frontu vykreslování. Viz [Používání ModelCraftu s AI asistenty](topic:use-with-ai-assistants).
- **Váš počítač.** {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Vykreslování}} › {{ui:Váš počítač}} ukazuje grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci dovolí používat, a úroveň, která určuje, kde začíná živý pohled. Viz [Čím váš počítač vykresluje](topic:your-machine).

## Opraveno

- {{ui:Tělesa}} › {{ui:Sjednotit}}, {{ui:Odečíst}} a {{ui:Průnik}} mohly vrátit skupinu, která nebyla uzavřená, v jakékoli velikosti. Nyní se uzavírají.
- {{ui:Tělesa}} › {{ui:Odečíst}} bylo šedé, když nic nebylo vybráno, ačkoli po vaší volbě vybírá své dva kusy postupně.
- Uvnitř časové osy animace psané klávesy nikam nevedly, ani {{key:Mod+S}}. {{key:Mod+Z}} a {{key:Mod+Y}} tam jsou vlastní zpět a znovu časové osy; ostatní klávesy {{key:Mod}} se dostanou do aplikace.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má zvlášť seznam pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi, které dávají definice jednotek (americká geodetická stopa je vlastní jednotka). Vypněte jednotky, které nikdy nepoužíváte, a vypadnou ze seznamů; označte jednu hvězdičkou a nová práce v ní začne. Soubor si vždy zachová svou vlastní jednotku. V ModelCraftu seznam jednotek vedle pole hodnoty sleduje přepínače (vlastní jednotka modelu v něm vždy zůstává), hvězdička nastaví jednotku nového modelu (když ji ModelCraft má) a délka napsaná se značkou kterékoli jednotky se čte v této jednotce. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se schovají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vejde na obrazovku více (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlý titulní pruh: přetažením jej ukotvíte, nebo jej uvolníte jako plovoucí panel; pustíte-li jej na pruh jiného panelu, sdílí se s ním jeden rám jako karty; připnutím jej necháte sklouznout k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Přetáhněte dialog za titulní pruh mimo cestu výkresu; vrátí se tam, kde jste ho nechali. Dvojklikem na titulní pruh jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro AI asistenty.** Deset propracovaných požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, kontrolovat výkresy, klást modelu otázky, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehrán našimi testy. Aplikace žádnou AI neobsahují. Viz [Recepty pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nově v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Jazyky **Português (Portugal)**, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají každé slovo aplikací, jako koncepty ještě neprověřené rodilým mluvčím. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** řekne, proč kontrola aktualizace selhala (zatím žádný soubor pro váš systém, žádná síť, chybný podpis), místo aby jen napsal "Hotovo", a přestane znovu ukazovat kartu Co je nového, kterou jste zavřeli, dokud nebude novější vydání.

## Zatím ve verzi není

- **0.7 není podepsaná kódem.** Podepisování i balíček Microsoft Store se přesunuly do 0.8, protože ověření certifikátu ještě neprošlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen instalátor zastaví, zvolte {{ui:Další informace}}, potom {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v obchodě s aplikacemi a zatím není sestavení pro iPad ani iPhone.
- Seznamy úhlu a sklonu v {{ui:Jednotky}} se ukládají, ale žádné pole je zatím nečte.
- Vykreslování na grafické kartě (WebGPU) bylo zde zkoušeno jen se softwarovou náhradou, zatím ne na skutečných grafických kartách, takže nejprve vykreslete něco malého na svém počítači. Totéž platí pro živý pohled; VR zatím bylo zkoušeno jen s emulátorem VR brýlí.
- Bez WebGPU nejsou pracovní prostor Vykreslení ani fronta vykreslování a obrázky ve vysoké kvalitě nemají hloubku ostrosti, fyzikální oblohu, obrázek oblohy, mlhu, kouř, kaustiky ani míchání světel.
- {{ui:Vykreslit obrázek…}} zatím nekreslí rozptýlené položky; ukazují se v živém pohledu, jeho panoramatech, prohlížeči a videu.
- Lampy se v pohledu animují, ale vykreslené video používá lampy tak, jak jsou ve chvíli spuštění.
- Kosti a animace se zatím nečtou ani nezapisují do souborů glTF, FBX nebo USD (modely s navázanou kůží se načtou v klidové poloze, se svými váhami) a materiály glTF a FBX nad základní barvu nebo texturu se zatím neuchovávají.
- Barvy STEP a názvy dílů sestavy se zatím nečtou. Import `.3dm` byl zkoušen se soubory, které zapsal nástroj formátu, zatím ne se soubory z modelovacího programu samotného; objekty SubD, text a kóty se vynechávají.
- Knihovna rostlin z CivilCraftu je v ModelCraftu, ale umísťování rostlin z ní ještě není hotovo.
- Malování textury na plochy tlač/tah se opakuje s dlaždicí materiálu; abyste namalovali jen jednu plochu, převeďte ji na síť a rozbalte ji.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet).
