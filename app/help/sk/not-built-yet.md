---
title: Ešte nie je hotové
summary: Čo táto verzia ModelCraft ešte nerobí a čo robiť namiesto toho dnes.
keywords: chýba, ešte nie, obmedzenia, plán, materiály, textúry, text, hladiny, orezať, rozdeliť, cloud, počítač
from: 179fa5e4
---

ModelCraft je skorá verzia. Táto stránka uvádza, čo ešte nerobí, aby ste to nehľadali, a najbližší spôsob, ako dnes dosiahnuť danú úlohu.

## Nástroje na kreslenie

| Ešte nie | Namiesto toho dnes |
|---|---|
| Voľné kreslenie | Klikajte na body pomocou {{ui:Krivka}} |
| Zmena počtu segmentov oblúka alebo kružnice po nakreslení | Zmažte ho a nakreslite znova po zadaní `24s` |
| Výber písma pre [3D text](topic:text3d) alebo úprava jeho slov po umiestnení | Zmažte ho a text pridajte znova |
| Zmena uhla zadaním do kóty uhla alebo veľkosti valca z kóty jeho kružnice | Otočte hrany pomocou {{ui:Otočiť}}; zmeňte mierku valca pomocou {{ui:Mierka}} |
| Kóty v exportovaných súboroch modelov | Kóty sa zobrazia na obrázkoch, výtlačkoch a PDF zobrazenia; súbory modelov nesú len geometriu |
| Orezanie, rozdelenie a vonkajšia škrupina | [Zjednotenie, Odčítanie a Prienik](topic:solids) uzavretých skupín alebo [prienik plôch](topic:intersect) a zmazanie toho, čo nepotrebujete |
| Výber osi otáčania šípkami | Kliknite na stred {{ui:Otočiť}} na plochu, ktorá smeruje tak, ako má os ukazovať |
| Zamknutie na viac ako jeden smer naraz | Zamknite jeden smer šípkou a potom sa prichyťte k bodu |
| Zmena veľkosti pozdĺž šikmej čiary alebo z konca kóty, ktorý nie je na rohu | Umiestnite kótu na dva rohy, pozdĺž hrany alebo pozdĺž červenej, zelenej alebo modrej |

## Animácia

| Ešte nie | Namiesto toho dnes |
|---|---|
| Animácia plôch, hrán, dennej doby slnka, štýlu alebo toho, čo je skryté | Vytvorte z pohyblivej časti skupinu alebo komponent; na inú dennú dobu vykreslite samostatné video |
| Kamera, ktorá sleduje nakreslenú dráhu alebo sa pozerá na pohybujúci sa objekt | Nastavte viac kľúčov kamery pozdĺž cesty ([Animácia](topic:animation)) |
| Zvuk vo videách a vysokokvalitné (path-traced) videá bez WebGPU | Pridajte zvuk vo video editore; bez WebGPU vykreslite video rýchlym renderom ([Vykreslenie videa](topic:animation#render-the-video)) |
| Animované svetlá (jas, rozptyl, farba) vo vykreslenom videu, uhol objektívu animovaný bez kľúčov kamery vo videu, animácia materiálov alebo nastavení vykreslenia | Svetlá sa animujú v zobrazení; pre video kľúčujte aj kameru kvôli priblíženiu; pre rôzne nastavenia svetiel vykreslite samostatné videá ([Animovať ľubovoľnú vlastnosť](topic:animate)) |
| Zrkadlenie váh alebo kostí z jednej strany na druhú, viditeľné obálky kostí, zobrazenie váh tieňované bod po bode (zobrazujú sa po plochách), vidieť posunutú sieť pri maľovaní váh | Namaľujte obe strany, alebo vytvorte jednu polovicu a pred pridaním armatúry použite modifikátor Zrkadlo; na kontrolu prepínajte medzi Maľovanie váh a Póza |
| Kosti čítané zo súborov glTF, FBX alebo USD ako armatúra a armatúry zapísané do týchto súborov | Modely so skinom sa načítajú v pokojovej polohe s váhami zo súboru; pridajte kosti v poradí kĺbov súboru a potom zapnite {{ui:Použiť váhy zo súboru}} ([Animácia](topic:animate)) |
| Presun cieľa IK alebo pólu ťahaním v zobrazení, výber priestoru obmedzenia (lokálny alebo svetový), roztiahnutie reťazcov IK, IK pozdĺž krivky | Zadajte bod cieľa alebo namierte na objekt a presuňte ten; udržte reťazce na ich dĺžkach |
| Látky, tekutiny, mäkké telesá, kĺby a závesy medzi tuhými telesami, kolízia s presným tvarom objektu (okolo neho sú len škatule a gule), živá simulácia počas prehrávania, počiatočná rýchlosť alebo otáčanie (telesá začínajú v pokoji) | Zapečte tuhé telesá a prehrajte kľúče; zostavte záves z kľúčov; rozdeľte nepravidelný tvar na škatule (skupiny) |
| Export animácie do glTF alebo iných súborov modelov | Vykreslite video; súbor `.modelcraft` a [USD súbor](topic:usd), ktorý ModelCraft ukladá, sú určené pre ModelCraft |
| Písanie komentára alebo názvu k problému vo VR, hlasové poznámky, ručné posúvanie rezovej roviny vo VR | Umiestnite problém vo VR a potom pridajte jeho texty v programe BCF; rezovú rovinu nastavte v zobrazení skôr, než vstúpite: pozri [Kontrola modelu vo VR okuliaroch](topic:vr-review) |
| Vidieť ľudí pri stole vo VR (zobrazujú sa len ľudia vo VR), nahrávanie VR prechádzky | Požiadajte ich, aby sa pripojili vo VR, alebo vytvorte [animáciu](topic:animation) prechádzky |

## Siete

| Ešte nie | Namiesto toho dnes |
|---|---|
| Sochanie podľa úrovní (multirezolúcia) a odstraňovanie trojuholníkov, ktoré sa stali drobnými, pri Detail | [Sochajte](topic:sculpt) rozdelenú sieť; {{ui:Prepočítať sieť}} ju znova vyrovná |
| Prepočítanie na štvoruholníkové plochy, ktoré kopírujú tvar | {{ui:Prepočítať sieť}} (rovnomerné trojuholníky), potom ju prestavte pomocou [retopológie](topic:mesh-edit#retopology) |
| Váhy namaľované na vrcholy pre modifikátory (Displace, Smooth a Shrinkwrap pracujú na celej sieti) | Použite modifikátor a potom sochajte alebo upravte časti, ktoré to potrebujú |
| Kopírovanie a vkladanie vrcholov, hrán alebo plôch, rez nožom, ktorý končí vnútri plochy, drôtové hrany bez plochy | Duplikujte sieť v karte Model; rez nožom z hrany na hranu; [vytiahnite](topic:mesh-edit#change-the-shape) otvorené hrany na plochy |

## Organizácia a zobrazenie

| Ešte nie | Namiesto toho dnes |
|---|---|
| Vrstvy výkresov situácie v DWG a DXF ako štítky | Situačný plán sa načíta ako jedna skupina: rozložte ju a zoskupte časti, ktoré chcete označiť štítkami |
| Viacero rezov naraz, rezový box alebo obrys rezu exportovaný ako výkres | Jedna [rezová rovina](topic:sections) reže naraz; exportujte zobrazenie ako obrázok |
| Zobrazenie mäkkých hrán prerušovanou čiarou alebo zmäkčovanie počas ťahania posúvačom | [Zmäkčiť podľa uhla](topic:soften) v Informáciách o entite a {{ui:Späť}} na skúšku iného uhla |
| Online knižnica modelov na hľadanie alebo komponenty s voľbami (farba, štýl) | [Štartová knižnica](topic:starter); importujte modely Collada, OBJ alebo glTF; [natiahnite](topic:stretch) kópiu na veľkosť |
| Umiestňovanie rastlín z knižnice rastlín | [Rozmiestnite rastliny](topic:live-view#scatter-plants-rocks-and-people) v živom zobrazení alebo umiestnite strom zo štartovej knižnice |
| Nezávislé kópie skupiny | Vytvorte z nej komponent a potom {{ui:Urobiť jedinečný}} (pozri [Riešenie problémov](topic:troubleshooting#editing-one-group-changed-another)) |

## Vykresľovanie

| Ešte nie | Namiesto toho dnes |
|---|---|
| Vykresľovanie v zobrazení (pracovné prostredie {{ui:Vykresliť}}), fronta vykresľovania a možnosti kamery, obrázka oblohy, hmly a miešania svetla bez WebGPU | {{ui:Vykresliť obrázok…}} vo {{ui:Vysoká kvalita}} používa tam WebGL path tracer bez týchto možností ([Vykresliť obrázok](topic:render#high-quality)) |
| Iný program kreslí obrázok vykreslenia bez doplnku renderovacieho enginu (CadCraft nikdy nespúšťa program pod licenciou GNU GPL); panoramatické alebo stereo kamery a obrázok oblohy cez iný program; plugin Unreal Engine (súbory sa zapisujú, plugin, ktorý ich otvára, nie je vydaný) | Naše vlastné enginy Fast a Path tracer; engine doplnku ([nakreslenie obrázka iným programom](topic:render-other-program)); priečinok USD, glTF alebo Unreal zo zoznamu Engine, ktorý zoberiete do ľubovoľného programu |
| Rozptýlené rastliny a skaly v {{ui:Vykresliť obrázok…}} | Zobrazujú sa v [živom zobrazení](topic:live-view), jeho panorámach, prehliadači a videu |

## Materiály a farby

| Ešte nie | Namiesto toho dnes |
|---|---|
| Vstupy okrem základnej farby, drsnosti, kovovosti, nepriehľadnosti, normály a emisie, ktoré sa menia po ploche vo vysokokvalitných obrázkoch (používajú svoj priemer) | [Vytvorte materiály uzlami](topic:shading): prepojte ich aj tak; zobrazenie ukáže ich premenlivosť |
| Posun na plochách tlač/ťah | Prevediete objekt na sieť pre posun |
| Zdieľanie vlastných materiálov do knižnice z aplikácie a zabalené mapy (ARM/ORM) alebo EXR mapy v importovanej sade textúr | Nechajte ich v súbore; importujte samostatné mapy ako PNG alebo JPEG |
| Materiály súboru v relácii Live TeamWork (zostávajú v počítači, ktorý ich vytvoril) | Uložte súbor a zdieľajte ho |
| Nálepky ohnuté okolo zakrivených plôch, nálepky v {{ui:Späť}} alebo maľovanie textúr niekoľkých plôch naraz cez spoj | Umiestnite menšie nálepky na každú časť; každú stranu spoja maľujte zvlášť |
| Zapekanie na plochy tlač/ťah, zapekanie viacerých objektov do jedného obrázka, klietka, ktorú tvarujete rukou, alebo zapečené osvetlenie zo svetiel | Previesť na sieť a rozbaliť; zapekať každý objekt; zvýšiť vzdialenosť hľadania; pre svetlo zo svetiel vykreslite obrázok |
| Maľovanie drsnosti, kovovosti alebo výšky, maľovanie obrázkami (pečiatky) a maľovanie textúr väčších ako 512 × 512 | Namaľujte tu základnú farbu; ostatné mapy vytvorte v editore obrázkov a importujte ich ako sadu textúr |
| Textúry v exportoch Collada, STL, PLY, 3MF, IFC, DWG a DXF a grafy uzlov vlastných materiálov súboru v exportovaných modeloch | Tieto formáty dostanú farbu každého materiálu; glTF a OBJ obsahujú importované textúry; exportujte materiál samostatne ako [MaterialX](topic:shading#materialx); [USD](topic:usd) uchováva celý model pre ModelCraft |
| Textúry v súboroch Collada | Pri importe sa spočítajú a vynechajú; textúry v súboroch `.skp` a `.glb` sa načítajú |

## Súbory

| Ešte nie | Namiesto toho dnes |
|---|---|
| Ukladanie súborov SketchUp a textu a kót z nich | [Import](topic:import-sketchup-files) zachová plochy, farby a textúry; exportujte Collada (`.dae`), aby ste sa vrátili do SketchUpu |
| Kóty a vodiace čiary v exportoch DWG a DXF | Pridajte ich v CAD programe po exporte |
| Body, tabuľky a viacnásobné vynášacie čiary z DWG a DXF | Sú spočítané a vynechané; text sa načíta ako jednoťahové písmo, nie ako písmo výkresu |
| Plochy, siete, tabuľky a viacnásobné vynášacie čiary z DWG a DXF; plochy 3D telies na ťahaných, lofted alebo iných voľných plochách | Aj tie sa spočítajú a vynechajú (samotné 3D telesá sa načítajú). Exportujte tieto časti z CAD programu ako OBJ alebo Collada a importujte ich |
| Typy, vlastnosti alebo materiály IFC | Export IFC obsahuje [podlažia](topic:formats#ifc-ifc) a všeobecné prvky; doplňte zvyšok v BIM programe |
| Poslanie modelu priamo do BimCraft | Exportujte {{ui:IFC pre BimCraft (.ifc)}} a otvorte ho v BimCraft |
| Voľné hrany v glTF a STL | Na čiarovú kresbu použite OBJ alebo Collada |
| Materiály glTF a FBX okrem základnej farby (kov, drsnosť, normálové mapy, sklo, lak, lesk…) | Sú načítané a vypísané; ModelCraft zachováva základnú farbu alebo textúru. Vytvorte vzhľad znova v [pracovnom prostredí tieňovania](topic:shading) |
| Kosti, animácie a morph targety z glTF | Modely so skinom sa načítajú stojace v pokoji; animujte v [časovej osi](topic:animation) |
| Farby a názvy častí zostavy zo súborov STEP | Časti sa načítajú ako siete v ich skutočnej veľkosti; [namaľujte](topic:paint) ich a pomenujte po importe |
| Objekty SubD, text, kóty a svetlá zo súborov `.3dm` | Pozri [čo sa vynecháva](topic:import-3dm-files#what-is-left-out-and-said); SubD premeňte na siete v programe, ktorý súbor vytvoril |
| Textúry KTX2 a varianty materiálov v glTF | Exportujte s textúrami PNG alebo JPEG; použije sa predvolený variant |
| Zápis inštancovania glTF (EXT_mesh_gpu_instancing) | Komponenty sa zapíšu raz a umiestnia mnohokrát, čo každý prehliadač číta |
| Animácia Alembic (každá vzorka cache), body a krivky Alembic, zápis Alembic | Načíta sa prvá vzorka; animujte v [časovej osi](topic:animation); zapisujte glTF, USD alebo OBJ |
| Bump a normálové mapy v materiáloch OBJ | Načíta sa len farebný obrázok (`map_Kd`) |
| Kosti a animácia FBX, export FBX, súbory FBX 6 | Skinované modely sa načítajú v pokoji; exportujte glTF; staré súbory uložte ako FBX 2011 alebo novší |
| Kĺby Collada, morfy, kamery, svetlá, transformácie look-at a skew, externé odkazy | Pri importe sa vynechajú a spočítajú v správe |
| Záložné súbory | {{ui:Uložiť ako}} ({{key:Mod+Shift+S}}) uloží ďalšiu kópiu. Po páde ModelCraft ponúkne vašu neuloženú prácu späť („Obnoviť prácu?“) |
| Ukladanie v cloude a synchronizácia medzi počítačmi | Zatiaľ nie je k dispozícii. Ukladajte súbory do počítača a kopírujte ich tam, kde ich potrebujete |

## 3D tlač

| Ešte nie | Namiesto toho dnes |
|---|---|
| Skutočná podpora slicera (rozhrania, raft, presný vzor podpory) | [Náhľad podpier](topic:print-tools#supports-preview) ukazuje, kde a približne koľko; náhľad vášho slicera ukáže skutočné |
| Rozplietanie dielu, ktorý prechádza sám sebou, alebo hrán, kde sa stretávajú tri alebo viac plôch | [Oprava](topic:print-tools#repair) ich vypíše aj s miestom; použite [prienik plôch](topic:intersect) a zmažte, čo je vnútri |
| Vzory výplne a mriežka vnútri dutiny | [Vydlabať](topic:print-tools#hollow) ju nechá prázdnu; slicer pridá výplň do pevnej časti |
| Detaily, ktoré sú pre vašu trysku príliš malé (okrem stien) | [Hrúbka stien](topic:print-tools#wall-thickness) nájde tenké steny; náhľad vrstiev vášho slicera ukáže zvyšok |

## Výkon

Späť ukladá kópiu modelu pre každý krok ([sieť](topic:meshes) uchováva len to, čo sa zmenilo), takže veľmi veľké importy geometrie tlač/ťah spomaľujú každú úpravu. Importy udržujte štíhle a uložte a znova otvorte súbor, aby sa história vymazala.

## Aplikácie a platformy

- **Počítač:** ModelCraft beží v prehliadači na Macu, Windowse a Linuxe a v CadCraft Studio, desktopovej aplikácii so všetkými ôsmimi aplikáciami v jednej inštalácii. Na Androide sa CadCraft Studio inštaluje z APK na getcadcraft.com/download. Zatiaľ neexistuje verzia pre iPad ani iPhone.
- **Dotyk:** pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom) pre gestá prstami. Tlak pera nastavuje štetec v [Sochanie](topic:sculpt); inde sa tlak a náklon pera nepoužívajú.
- **Listy:** ModelCraft [tlačí jedno zobrazenie na stranu](topic:export-model#print-the-view-or-save-it-as-a-pdf); neexistujú listy rozloženia s viacerými zobrazeniami ani popisové pole. Exportujte do formátu DWG/DXF vhodného pre CadCraft, ak potrebujete výkresy v mierke.
