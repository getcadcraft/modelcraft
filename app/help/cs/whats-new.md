---
title: Co je nového ve verzi 0.7
summary: Sítě s modifikátory, tvarování, UV a objekty křivek, sledování paprsků na grafické kartě a pracovní prostor Vykreslit, živý pohled v reálném čase s rozptýlenými prvky a panorama, materiály z uzlů, pracovní prostor Animace s kostmi a fyzikou, soubory USD, FBX, STEP a .3dm a nástroje pro tisk se stylem Začátečník.
keywords: co je nového, novinky, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, síť, sítě, pracovní prostor sítě, modifikátory, rozdělení povrchu, rýha, uv, rozbalení, švy, křivky, objekty křivek, nurbs, bezier, tvarování, přesíťování, retopologie, rozdělení, výpočty, sledování paprsků, webgpu, pracovní prostor vykreslit, fronta vykreslování, mp4, exr, odšumění, fyzikální obloha, hdri, ies, hloubka ostrosti, míchání světel, mlha, kaustika, živý pohled, reálný čas, procházka, rozptýlení, panorama, prohlídka, prohlížeč, stínování, uzly, materiály z uzlů, knihovna materiálů, materialx, nálepky, malování textur, pečení, animace, editor grafů, klipy, tvarové klíče, drivery, kostra, skinning, ik, omezení, fyzika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D tělesa, podpory, tloušťka stěn, vyduta, oprava, začátečník, asistenti, váš počítač, jednotky, portugalština
from: b9fc43e2
---

Toto se změnilo v ModelCraft 0.7 oproti verzi 0.6. ModelCraft nyní modeluje sítě stejně jako geometrii tlač/tah, vykresluje na grafické kartě a má pracovní prostor pro každý druh práce: vyberte jej v seznamu {{ui:Pracovní prostor}} vlevo na panelu nástrojů.

## Novinky

### Sítě

- **Sítě.** Vyberte skupinu nebo komponentu a klikněte na {{ui:Převést na síť}} v {{ui:Informace o prvku}}: stane se sítí s plochami libovolného počtu rohů, které mohou nést souřadnice textur, normály, barvy a váhy. {{ui:Převést na geometrii}} ji vrátí zpět. Zpět u sítě zachová jen to, co každý krok změnil. Soubor se sítí potřebuje k otevření ModelCraft 0.7. Viz [Sítě](topic:meshes).
- **Pracovní prostor Síť.** Dvakrát klikněte na síť nebo vyberte {{ui:Síť}} v seznamu {{ui:Pracovní prostor}} a upravujte její vrcholy, hrany a plochy: smyčky a kruhy, proporcionální úpravy, tlač/tah, vysunutí, vsazení, zkosení, řez smyčkou, nůž, bisekce, otočení, sloučení, rozpuštění, výplň, mřížkovou výplň, přemostění a posun. Nastavení poslední operace lze změnit dodatečně v panelu. Začněte z roviny, krychle, koule, torusu a dalších. Klávesy tlač/tah i klávesy modeláře fungují. Viz [Úprava sítě v pracovním prostoru Síť](topic:mesh-edit).
- **Modifikátory.** Zrcadlo, pole, rozdělený povrch (subdivision), zkosení, zpevnění, booleovská operace, posun, svaření, decimace, vyhlazení, mřížka, deformace křivkou a smrštění na obal mění, co síť ukazuje, aniž by ji samy změnily. Skládejte je, zapínejte a vypínejte pro náhled i pro vykreslení a {{ui:Použít}} jeden z nich, až ho chcete mít natrvalo. Viz [Modifikátory na síti](topic:modifiers).
- **Rozdělení s hranami.** {{ui:Rýha}} v pracovním prostoru Síť udrží vybrané hrany ostré pod rozděleným povrchem. Vykreslení může použít více úrovní než náhled a u velké sítě náhled ukáže nižší úroveň a řekne to. Viz [Rozdělený povrch](topic:modifiers#subdivision-surface).
- **Objekty křivek.** Bézierovy, NURBS a úsečkové křivky, z nichž vzniká trubka, pás, zúžení nebo vyplněná deska, a text jako křivka. Upravte jejich body v pracovním prostoru {{ui:Křivka}}; až bude tvar správný, použijte {{ui:Na síť}}. Viz [Objekty křivek](topic:curves).
- **Pracovní prostor UV.** Označte švy (nebo nechte ModelCraft označit švy u ostrých hran), použijte {{ui:Rozbalit}} a {{ui:Srovnat}}, nebo promítněte krabicí, válcem, koulí nebo pohledem. Editor UV vedle 3D pohledu posouvá, otáčí a měří kusy a šachovnice a barvy protažení ukazují výsledek. Viz [Rozložení UV sítě](topic:uv).
- **Tvarování.** Pracovní prostor {{ui:Tvarování}} má štětce kreslení, hlínu, vyhlazení, uchopení, nafouknutí, rýhu, stlačení, zploštění a masku, zrcadlení přes osu X a {{ui:Detail}}, který přidává trojúhelníky tam, kde tvarujete. Tlak pera nastavuje velikost a sílu štětce. Každý tah je jeden krok zpět. Viz [Tvarování sítě](topic:sculpt).
- **Přesíťování a retopologie.** {{ui:Přesíťovat}} znovu vytvoří celou síť z rovnoměrných trojúhelníků, zaplní díry a spojí překrývající se části. Chcete-li vytvořit čistou síť nad podrobnou, vyberte ji pod {{ui:Retopologie}}: body, které posunete, přistanou na jejím povrchu. Viz [Přesíťování](topic:mesh-edit#remesh).

### Kreslení

- **Rozdělení hrany nebo křivky.** Nástroj {{ui:Rozdělit}} označí řezy při pohybu podél hrany a rozdělí kliknutím nebo zadaným číslem. U vybrané hrany, oblouku nebo kružnice napište `/5`. {{ui:Informace o prvku}} › {{ui:Rozdělit…}} se zeptá na počet, pro tablety. Oblouk nebo kružnice se dělí stejnými úhly na skutečném oblouku. Viz [Rozdělení hrany nebo křivky na stejné díly](topic:divide).
- **Výpočty v poli hodnoty.** Napište `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` nebo `2*450mm` pro libovolnou délku a `90/2` pro úhel. Výpočet, který nelze provést, řekne, co je špatně a kde. Viz [Výpočty](topic:value-box#calculations).

### Vykreslování

- **Sledování paprsků na grafické kartě.** {{ui:Vykreslit obrázek…}} › {{ui:Vysoká kvalita (sledování paprsků)}} spouští vlastní sledovač paprsků CadCraft na grafické kartě tam, kde prohlížeč podporuje WebGPU. Řádek pod obrázkem říká, který engine ho vytvořil. {{ui:Zastavit}} obrázek ponechá a {{ui:Pokračovat}} pokračuje odtud. Bez WebGPU se obrázek sleduje paprsky přes WebGL jako dříve. Viz [Vysoká kvalita](topic:render#high-quality).
- **Vykreslení v pohledu.** Pracovní prostor {{ui:Vykreslit}} sleduje paprsky přímo v pohledu a začíná znovu, jakmile otáčíte nebo upravujete: vykreslete {{ui:Oblast}}, klikněte na {{ui:Zaostřit}} a nastavte {{ui:Detail}}. Vyžaduje WebGPU. Viz [Vykreslení v pohledu](topic:render#render-in-the-view).
- **Materiály, světla a oblohy.** Obrázky ve vysoké kvalitě stínují každý povrch materiálovým modelem OpenPBR (vrstvy, chlupy, tenké vrstvy, barevné sklo, záře). S WebGPU je k dispozici také {{ui:Fyzikální obloha}} se {{ui:Zákal}}, {{ui:Obrázek oblohy (HDRI)}} a profily světel IES od výrobců pro svítidla. Viz [Oblohy a profily světel](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoaparát jako ten fotografický.** Expozice z clony, závěrky a ISO v každém režimu; s WebGPU také hloubka ostrosti, dvoubodová perspektiva, vyvážení bílé, panoramata 360° (i ve stereu) a kubické mapy. Viz [Kamera](topic:render#the-camera).
- **Dokončení obrázku po vykreslení.** Upravte barevné tóny ({{ui:ACES filmový}}, {{ui:AgX}}, {{ui:Filmový}} nebo {{ui:Standardní}}, kontrast, záři, odlesk, vinětaci, tabulku barev `.cube`), smíchejte oblohu, slunce a každou skupinu svítidel a prohlédněte si prvky vykreslení jeden po druhém, to vše bez nového vykreslování. Zbylé zrnění odstraní odšumovač na vašem počítači. Viz [Dokončení obrázku](topic:render#finish-the-picture) a [Smíchání světel po vykreslení](topic:render#mix-the-lights-after-the-render).
- **Další způsoby uložení vykreslení.** PNG v 16 bitech, vícevrstvý EXR se všemi prvky vykreslení a skupinami světel a soubor vykreslení (`.ccrender`), který se znovu otevře se svým smícháním a úpravou barev. Viz [Uložení obrázku](topic:render#save-the-picture).
- **Mlha, kouř a kaustika.** Mlha a opar osvětlené sluncem a svítidly, se světelnými paprsky; jeden sloupec kouře nebo mrak; kaustika pod sklem a zrcadly; adaptivní vzorkování, které se zastaví na pixelech, jež jsou již čisté. Pouze na grafické kartě. Viz [Mlha, kouř, šum a kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Fronta vykreslování a MP4.** Přidejte obrázky ve vysoké kvalitě a celé animace do {{ui:Fronta vykreslování}}; vykreslují se jeden za druhým a fronta přežije zavření stránky. Vyžaduje WebGPU. Videa lze uložit také jako MP4, pokud je prohlížeč umí zapsat. Viz [Fronta vykreslování](topic:render#the-render-queue) a [Vykreslení videa](topic:animation#render-the-video).

### Živý pohled a prezentace

- **Živý pohled.** {{ui:Export}} › {{ui:Živý pohled}} zobrazí model ve vzhledu v reálném čase vedle pohledu a sleduje každou úpravu a kameru: stíny od slunce, materiály, svítidla a světlo odražené od stěn. {{ui:Procházka}} tímto pohledem, přetáhněte {{ui:Čas}} a {{ui:Měsíc}} pro pohyb slunce, nebo jej přesuňte do {{ui:Nové okno}}. Používá WebGPU, je-li k dispozici, jinak WebGL 2. Viz [Živý pohled](topic:live-view).
- **Rozptýlení.** Rozmístěte trávu, květiny, kameny, stromy a lidi po plochách nebo štětcem, ze sedmi nových doprovodných prvků a ze zbytku knihovny; sady se ukládají do souboru. Viz [Rozmístění rostlin, kamenů a lidí](topic:live-view#scatter-plants-rocks-and-people).
- **Sdílení.** Panorama 360°, prohlídka panoramat se šipkami mezi body, samostatný prohlížeč (jedna webová stránka, která se otevře offline a nenačítá nic z internetu) a video pohybu kamery, to vše ve vzhledu v reálném čase. Viz [Sdílení](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR ve vzhledu v reálném čase.** {{ui:Prohlédnout ve VR}} zobrazí model s materiály, oblohou, stínem slunce, svítidly, rozptýlenými prvky a odraženým světlem. Viz [Jak to vypadá](topic:vr-review#what-it-looks-like).

### Materiály

- **Materiály vytvořené z uzlů.** Pracovní prostor {{ui:Stínování}} sestaví vlastní materiály souboru jako grafy uzlů: obrázky, šum a šachovnice, buňky Voronoi, vlny, cihly, dlaždice, dřevo, mramor, přechody, špínu a opotřebení hran, práci s barvami, matematiku, mapy vyboulení a normál, až do plného materiálu OpenPBR. Pohled ukáže každou změnu okamžitě. Viz [Tvorba materiálů z uzlů](topic:shading).
- **Knihovna materiálů a vlastní sady textur.** Panel Stínování vypisuje materiály z knihovny: šestnáct sad textur CC0, každá s uvedením autora. Klikněte na jednu pro použití nebo ji přetáhněte na plochu. {{ui:Obrázky nebo zip…}} nebo {{ui:Složka…}} vytvoří materiál z vlastních map, nalezených podle názvů souborů. Viz [Materiály z knihovny](topic:shading#materials-from-the-library).
- **MaterialX dovnitř i ven.** Exportujte materiál jako MaterialX (OpenPBR Surface nebo Standard Surface, textury jako PNG) a importujte soubory MaterialX se svými obrázky. Viz [MaterialX](topic:shading#materialx).
- **Nálepky a malování textur.** Umístěte obrázek na plochu jako nálepku s vlastním materiálem a malujte na obrázek materiálu kulatým štětcem. Viz [Nálepky](topic:shading#decals) a [Malování na textuře](topic:shading#paint-on-the-texture).
- **Pečení textur.** Upečte okluzi okolí, zakřivení, osvětlení a normály podrobného objektu do obrázků podél UV sítě, na jádrech procesoru počítače. Viz [Pečení textur](topic:shading#bake-textures).

### Animace

- **Pracovní prostor Animace.** Klíčujte polohu, otočení a velikost objektu, jas, rozptyl a barvu každého svítidla a úhel objektivu přímo v panelu. Časová osa dostane pohled {{ui:Křivky}} (úchyty Bézier, opakování) a pohled {{ui:Klipy}}, který ukládá klíče jako akce k opětovnému umístění a smíchání. Klíče na více řádcích lze přesouvat, natahovat, kopírovat a vkládat. Viz [Animace libovolné vlastnosti](topic:animate).
- **Tvarové klíče a drivery.** Síť obsahuje další tvary sebe sama, mísené posuvníky, které lze klíčovat, nebo nastavené z jiných hodnot malým výrazem. Viz [Tvarové klíče](topic:animate#shape-keys-morphs) a [Drivery](topic:animate#drivers).
- **Kostry.** Vložte kosti do sítě, nechte {{ui:Automatické váhy}} rozdělit body mezi ně nebo váhy namalujte, a pozicujte a klíčujte kosti; lineární nebo dual quaternion skinning. Viz [Kostry](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK a omezení.** Dosah (IK) s pólem, pohled na, kopírování transformací, limity, dítě z a sledování dráhy, pro kosti i objekty. Viz [IK a omezení](topic:animate#ik-and-constraints).
- **Fyzika.** Skupiny a komponenty padají, skládají se a srážejí jako krabice nebo koule a {{ui:Zapéct fyziku}} uchová výsledek jako klíče. Viz [Fyzika](topic:animate#physics-drop-stack-and-collide).

### Soubory

- **USD.** {{ui:Uložit jako}} ({{key:Mod+Shift+S}}) uloží model jako `.usda`, `.usdc` nebo `.usdz` a soubor USD, který ModelCraft uložil, se znovu otevře bez ztráty. USD z jiných programů se otevře nebo importuje jako sítě, skupiny, komponenty, svítidla a kamery. {{ui:Uložit}} stále zapisuje `.modelcraft`. Viz [Uložení, otevření a export USD](topic:usd).
- **glTF kompletně.** Soubory glTF přicházejí jako upravitelné sítě s normálami, UV, barvami vrcholů a texturami, uzly jako skupiny, světla jako svítidla a kamery jako scény. Soubory Draco a meshopt jsou zahrnuty; soubor `.gltf` se otevře, je-li přetažen spolu se svými soubory. Export zapisuje sítě, textury, svítidla a kamery. Viz [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL a Alembic.** FBX 2011 a novější (sítě, sady UV, materiály, vložené textury, světla, kamery), PLY a STL s barvami a mezipaměti Alembic v prvním vzorku. OBJ přichází se svým `.mtl` a obrázky, když je přetáhnete společně. Viz [Formáty souborů podrobně](topic:formats).
- **Další exporty.** PLY s barvami, STL s barvami malovaných ploch a OBJ s texturami jako jeden zip. Viz [Formáty souborů podrobně](topic:formats).
- **Soubory STEP.** {{ui:Import}} načte díly a sestavy STEP (AP203, AP214, AP242) jako uzavřené sítě ve skutečné velikosti, každý díl tam, kde jej soubor umisťuje. Viz [STEP](topic:formats#step-step-stp).
- **Soubory .3dm.** {{ui:Import}} načte modely `.3dm`: sítě, polyplochy a vytažení (ze sítí uložených v souboru, jinak je ModelCraft tesseluje), křivky jako hrany, bloky jako komponenty a vrstvy jako značky. Viz [Import modelu .3dm](topic:import-3dm-files).
- **3D tělesa z DWG a DXF.** Import výkresu nyní přinese i jeho 3D tělesa, oblasti a tělesa, každé jako vlastní skupinu, uzavřená jako tělesa. Viz [Model na situačním plánu](topic:site-plan#what-comes-in).

### 3D tisk

- **Nástroje pro tisk.** {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}} › **Nástroje pro tisk** má {{ui:Náhled podpor}} (převisy, sloupové nebo stromové podpory, přibližně kolik materiálu), {{ui:Tloušťka stěn}} (stěny příliš tenké na tisk, vypsané přes {{ui:Zobrazit}}), {{ui:Vyduta}} (stěny zadané tloušťky s odtokovými otvory) a {{ui:Oprava}} (každá oprava vypsána; překrývající se části se spojí jen na vaši žádost). Vyduta a oprava dají skupinu, jejíž ploché strany jsou jednotlivé plochy, nebo síť, když by výsledek nebyl uzavřený nebo má příliš mnoho ploch; stavový řádek říká, které. Viz [Podpory, tloušťka stěn, vydutí a oprava](topic:print-tools).
- **Styl Začátečník.** {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Nabídky, klávesy a myš}} › {{ui:Začátečník}}: velká tlačítka pro vkládání tvarů a otvorů, přesun, zarovnání a {{ui:Skupina}}, aby se otvory vyřízly, pak zkontrolujte model pro tisk. Viz [Styl Začátečník](topic:beginner).

### Asistenti a váš počítač

- **Více pro AI asistenty.** Asistent nyní může vypsat plochy a materiály, tlač/tah, malovat, vytvářet skupiny, přidávat a zobrazovat scény, přidávat sítě, upravovat zásobníky modifikátorů, exportovat USD, vykreslit obrázek a naplnit frontu vykreslování. Viz [Použití ModelCraft s AI asistenty](topic:use-with-ai-assistants).
- **Váš počítač.** {{ui:Nastavení}} › {{ui:ModelCraft}} › {{ui:Vykreslování}} › {{ui:Váš počítač}} ukazuje grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci dovoluje použít, a úroveň, od které začíná živý pohled. Viz [Čím váš počítač vykresluje](topic:your-machine).

## Opraveno

- {{ui:Tělesa}} › {{ui:Sjednotit}}, {{ui:Odečíst}} a {{ui:Průnik}} mohly vrátit skupinu, která nebyla uzavřená, v jakékoli velikosti. Nyní se uzavírají.
- {{ui:Tělesa}} › {{ui:Odečíst}} bylo šedé, když nic nebylo vybráno, ačkoli si po výběru bere své dva kusy postupně.
- Uvnitř časové osy animace se psané klávesy nikam nedostaly, včetně {{key:Mod+S}}. {{key:Mod+Z}} a {{key:Mod+Y}} tam jsou vlastní zpět a znovu časové osy; ostatní klávesy {{key:Mod}} se dostanou do aplikace.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má pro délku, plochu, objem, úhel a sklon vždy jeden seznam s přesnými velikostmi podle definic jednotek (americká průzkumná stopa je vlastní jednotka). Vypnutí nepoužívaných jednotek je odebere ze seznamů; označená hvězdičkou se použije u nové práce. Soubor si vždy ponechá vlastní jednotku. V ModelCraftu seznam jednotek vedle pole hodnoty sleduje přepínače (jednotka modelu v něm vždy zůstává), hvězdička nastavuje jednotku nového modelu (pokud ji ModelCraft má) a délka zadaná s libovolnou značkou jednotky se čte v této jednotce. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se uklízejí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vejde na obrazovku více (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má tenký pruh názvu: přetažením jej ukotvíte nebo uvolníte, pustíte jej na pruh jiného panelu, aby oba sdílely rámec jako karty, připnete jej, aby se odsunul k okraji, nebo jej skryjete a vyvoláte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Přetáhněte dialog za pruh názvu z cesty kresbě; vrátí se tam, kde jste skončili. Dvojklikem na pruh názvu jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro AI asistenty.** Deset zpracovaných požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, položit modelu otázky, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý ověřený našimi testy. Aplikace neobsahují žádnou AI. Viz [Recepty pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. On, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají každé slovo aplikací, jako koncepty, které ještě neprošly kontrolou rodilým mluvčím. Nápovědní témata jsou v angličtině.
- **CadCraft Studio** říká, proč kontrola aktualizace selhala (zatím žádný soubor pro váš systém, žádná síť, špatný podpis), místo jen „Hotovo“, a přestane znovu zobrazovat kartu Co je nového, kterou jste zavřeli, dokud nebude novější vydání.

## Ještě není v této verzi

- **0.7 nemá podpis kódu.** Podepisování a balíček Microsoft Store přešly do 0.8, protože ověření certifikátu ještě neprošlo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen zastaví instalátor, zvolte {{ui:Další informace}}, pak {{ui:Spustit přesto}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje sestavení pro iPad ani iPhone.
- Úhly a sklony v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- Vykreslování na grafické kartě (WebGPU) bylo zde testováno jen s náhradním softwarovým řešením, ne ještě na skutečných grafických kartách, takže nejdřív vykreslete něco malého na svém počítači. Totéž platí pro živý pohled a VR bylo zatím zkoušeno jen s emulátorem headsetu.
- Bez WebGPU nejsou k dispozici pracovní prostor Vykreslit ani fronta vykreslování a obrázky ve vysoké kvalitě nemají hloubku ostrosti, fyzikální oblohu, obrázek oblohy, mlhu, kouř, kaustiku ani míchání světel.
- {{ui:Vykreslit obrázek…}} zatím nekreslí rozptýlené prvky; zobrazují se v živém pohledu, jeho panoramatech, prohlížeči a videu.
- Svítidla se animují v pohledu, ale vykreslené video používá svítidla tak, jak jsou v okamžiku spuštění.
- Kosti a animace se zatím nečtou ani nezapisují do souborů glTF, FBX ani USD (kostěné modely se načtou v klidové pozici se svými vahami) a materiály glTF a FBX nad základní barvu nebo texturu se zatím neuchovávají.
- Barvy STEP a názvy dílů sestavy se zatím nečtou. Import `.3dm` byl testován se soubory zapsanými nástrojem formátu, ne zatím se soubory z modelovacího programu samotného; objekty SubD, text a kóty jsou vynechány.
- Knihovna rostlin z CivilCraftu je v ModelCraftu, ale umísťování rostlin z ní zatím není hotovo.
- Malování textury na plochy tlač/tah se opakuje s dlaždicí materiálu; pro malování jen na jednu plochu ji převeďte na síť a rozbalte.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet).
