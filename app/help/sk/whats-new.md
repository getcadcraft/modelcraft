---
title: Novinky vo verzii 0.7
summary: Siete s modifikátormi, sochanie, UV a objekty kriviek, path tracing na grafickej karte a pracovný priestor Vykresľovanie, živý pohľad v reálnom čase s rozptýlením a panorámami, materiály z uzlov, pracovný priestor Animácia s kosťami a fyzikou, súbory USD, FBX, STEP a .3dm a nástroje na 3D tlač so štýlom Začiatočník.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, sieť, siete, pracovný priestor siete, modifikátory, subdivízia, ryha, uv, rozvinúť, švy, krivky, objekty kriviek, nurbs, bezier, sochanie, prepočítať sieť, retopológia, rozdeliť, výpočty, path tracing, webgpu, pracovný priestor vykresľovania, rad vykresľovania, mp4, exr, odšumenie, fyzikálna obloha, hdri, ies, hĺbka ostrosti, miešanie svetiel, hmla, kaustiky, živý pohľad, reálny čas, prechádzka, rozptýlenie, panoráma, prehliadka, prehliadač, tieňovanie, uzly, materiály z uzlov, knižnica materiálov, materialx, nálepky, maľovanie textúr, pečenie, animácia, editor grafov, klipy, tvarové kľúče, ovládače, kostra, kosti, skinovanie, ik, obmedzenia, fyzika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d telesá, podpery, hrúbka stien, vydlabať, oprava, začiatočník, asistenti, váš počítač, jednotky, portugalčina
from: b9fc43e2
---

Toto je zmenené v ModelCraft 0.7 v porovnaní s verziou 0.6. ModelCraft teraz modeluje siete rovnako ako geometriu typu tlač/ťah, vykresľuje na grafickej karte a má pracovný priestor pre každý druh práce: vyberte ho v zozname {{ui:Pracovný priestor}} vľavo na paneli nástrojov.

## Nové

### Siete

- **Siete.** Vyberte skupinu alebo komponent a kliknite na {{ui:Previesť na sieť}} v {{ui:Informácie o entite}}: stane sa sieťou s plochami s ľubovoľným počtom rohov, ktoré môžu niesť súradnice textúry, normály, farby a váhy. {{ui:Previesť na geometriu}} ju vráti späť. Späť pri sieti zachováva len to, čo každý krok zmenil. Súbor, ktorý obsahuje sieť, na otvorenie potrebuje ModelCraft 0.7. Pozri [Siete](topic:meshes).
- **Pracovný priestor Sieť.** Dvojitým kliknutím na sieť alebo výberom {{ui:Sieť}} v zozname {{ui:Pracovný priestor}} upravte jej vrcholy, hrany a plochy: slučky a prstence, proporcionálne úpravy, vytiahnutie, vsadenie, zaoblenie, rez slučkou, nôž, rozpolenie, otočenie, zlúčenie, rozpustenie, výplň, mriežková výplň, premostenie a posun. Nastavenia poslednej operácie sa dajú zmeniť dodatočne na paneli. Začnite z roviny, kocky, gule, torusu a ďalších. Fungujú klávesy tlače/ťahu aj klávesy modelovania. Pozri [Úprava siete v pracovnom priestore Sieť](topic:mesh-edit).
- **Modifikátory.** Zrkadlenie, pole, povrch subdivízie, zaoblenie, zhrubnutie, booleovská operácia, posunutie, zváranie, zjednodušenie, vyhladenie, mriežka, deformácia krivkou a zmrštenie na obal menia, čo sieť zobrazuje, bez toho, aby ju zmenili. Skladajte ich, zapínajte a vypínajte každý pre zobrazenie a pre vykreslenia a {{ui:Použiť}} jeden, keď ho chcete natrvalo. Pozri [Modifikátory na sieti](topic:modifiers).
- **Subdivízia s ryhami.** {{ui:Ryha}} v pracovnom priestore Sieť ponechá vybrané hrany ostré pod povrchom subdivízie. Vykreslenia môžu použiť viac úrovní ako zobrazenie a pri veľkej sieti zobrazenie ukáže nižšiu úroveň a oznámi to. Pozri [Povrch subdivízie](topic:modifiers#subdivision-surface).
- **Objekty kriviek.** Krivky Bézier, NURBS a krivky s rovnými úsekmi, ktoré tvoria trubicu, pás, zúženie alebo vyplnený plech, a text ako krivka. Upravte ich body v pracovnom priestore {{ui:Krivka}}; keď je tvar správny, použite {{ui:Na sieť}}. Pozri [Objekty kriviek](topic:curves).
- **Pracovný priestor UV.** Označte švy (alebo nechajte ModelCraft označiť ich na ostrých hranách), použite {{ui:Rozvinúť}} a {{ui:Zbaliť}} alebo premietnite kockou, valcom, guľou alebo pohľadom. Editor UV vedľa 3D zobrazenia posúva, otáča a mení mierku kusov, šachovnica a farby ťahu ukážu výsledok. Pozri [Rozloženie UV súradníc siete](topic:uv).
- **Sochanie.** Pracovný priestor {{ui:Sochanie}} má štetce: kresbu, hlinu, vyhladenie, uchopenie, nafúknutie, ryhu, stlačenie, sploštenie a masku, zrkadlenie cez os X a {{ui:Detail}}, ktorý pridáva trojuholníky tam, kde sochate. Tlak pera nastavuje veľkosť a silu štetca. Každý ťah je jeden krok späť. Pozri [Sochanie siete](topic:sculpt).
- **Prepočítanie a retopológia.** {{ui:Prepočítať sieť}} vytvorí celú sieť znova ako rovnomerné trojuholníky, uzatvorí diery a spojí prekrývajúce sa časti. Ak chcete vytvoriť čistú sieť nad podrobnou, vyberte ju v {{ui:Retopológia}}: body, ktoré posuniete, pristanú na jej povrchu. Pozri [Prepočítať sieť](topic:mesh-edit#remesh).

### Kreslenie

- **Rozdelenie hrany alebo krivky.** Nástroj {{ui:Rozdeliť}} označí rezy, keď sa pohybujete pozdĺž hrany, a rozdelí kliknutím alebo zadaným číslom. Pri vybranej hrane, oblúku alebo kružnici napíšte `/5`. {{ui:Informácie o entite}} › {{ui:Rozdeliť…}} pýta číslo pre tablety. Oblúk alebo kružnica sa delia rovnakými uhlami na skutočnom oblúku. Pozri [Rozdelenie hrany alebo krivky na rovnaké časti](topic:divide).
- **Výpočty v poli hodnoty.** Napíšte `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` alebo `2*450mm` pre ľubovoľnú dĺžku a `90/2` pre uhol. Výpočet, ktorý sa nedá vykonať, povie, čo je zlé a kde. Pozri [Výpočty](topic:value-box#calculations).

### Vykresľovanie

- **Path tracing na grafickej karte.** {{ui:Vykresliť obrázok…}} › {{ui:Vysoká kvalita (path tracing)}} spustí vlastný path tracer aplikácie CadCraft na grafickej karte, ak prehliadač podporuje WebGPU. Riadok pod obrázkom povie, ktorý engine ho vytvoril. {{ui:Zastaviť}} ponechá obrázok a {{ui:Pokračovať}} pokračuje odtiaľ. Bez WebGPU sa obrázok robí path tracingom cez WebGL, ako predtým. Pozri [Vysoká kvalita](topic:render#high-quality).
- **Vykresľovanie v zobrazení.** Pracovný priestor {{ui:Vykresliť}} robí path tracing samotného zobrazenia a začína znova pri otáčaní alebo úprave: vykreslite {{ui:Oblasť}}, kliknite na {{ui:Zaostrenie}}, nastavte {{ui:Detail}}. Vyžaduje WebGPU. Pozri [Vykresľovanie v zobrazení](topic:render#render-in-the-view).
- **Materiály, svetlá a oblohy.** Obrázky vo vysokej kvalite tieňujú každý povrch modelom materiálu OpenPBR (náterov, chlpov, tenkých vrstiev, farebného skla, žiary). S WebGPU je k dispozícii aj {{ui:Fyzikálna obloha}} s {{ui:Opar}}, {{ui:Obraz oblohy (HDRI)}} a profily svetiel IES od výrobcov pre svietidlá. Pozri [Oblohy a profily svetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoaparát ako pri fotografii.** Expozícia z clonového čísla f, uzávierky a ISO vo všetkých režimoch. S WebGPU aj hĺbka ostrosti, perspektíva s dvoma bodmi, vyváženie bielej, 360° panorámy (aj stereo) a kubické mapy. Pozri [Kamera](topic:render#the-camera).
- **Dokončenie obrázka po vykreslení.** Upravte jeho tón ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} alebo {{ui:Štandardný}}, kontrast, žiara, odlesk, vinetácia, tabuľka farieb `.cube`), miešajte oblohu, slnko a každú skupinu svietidiel a prezerajte elementy vykreslenia jeden po druhom, to všetko bez nového vykreslenia. Zostávajúce zrnenie odstráni odšumovač vo vašom počítači. Pozri [Dokončenie obrázka](topic:render#finish-the-picture) a [Miešanie svetiel po vykreslení](topic:render#mix-the-lights-after-the-render).
- **Ďalšie spôsoby uloženia vykreslenia.** PNG s 16 bitmi, viacvrstvový EXR so všetkými elementmi vykreslenia a skupinami svetiel a súbor vykreslenia (`.ccrender`), ktorý sa znova otvorí s miešaním a úpravou tónu. Pozri [Uloženie obrázka](topic:render#save-the-picture).
- **Hmla, dym a kaustiky.** Hmla a opar osvetlené slnkom a svietidlami, so svetelnými lúčmi; jeden stĺpec dymu alebo oblak; kaustiky pod sklom a zrkadlami; adaptívne vzorkovanie, ktoré sa zastaví na pixeloch, ktoré sú už čisté. Len na grafickej karte. Pozri [Hmla, dym, šum a kaustiky](topic:render#fog-smoke-noise-and-caustics).
- **Rad vykresľovania a MP4.** Pridajte obrázky vo vysokej kvalite a celé animácie do {{ui:Rad vykresľovania}}. Vykresľujú sa jeden za druhým a rad sa zachová aj po zatvorení stránky. Vyžaduje WebGPU. Videá sa dajú uložiť aj ako MP4, ak ho prehliadač dokáže zapísať. Pozri [Rad vykresľovania](topic:render#the-render-queue) a [Vykreslenie videa](topic:animation#render-the-video).

### Živý pohľad a prezentácie

- **Živý pohľad.** {{ui:Exportovať}} › {{ui:Živý pohľad}} zobrazí model v reálnom čase vedľa zobrazenia a sleduje každú úpravu a kameru: tiene od slnka, materiály, svietidlá a svetlo odrazené od stien. {{ui:Prechádzka}} cez model, potiahnite {{ui:Čas}} a {{ui:Mesiac}} na posun slnka alebo ho presuňte do {{ui:Nové okno}}. Používa WebGPU, ak ho prehliadač má, inak WebGL 2. Pozri [Živý pohľad](topic:live-view).
- **Rozptýlenie.** Rozptýlenie trávy, kvetov, skál, stromov a ľudí po plochách alebo štetcom, zo siedmich nových položiek okolia a z ostatnej knižnice. Sady sa uložia do súboru. Pozri [Rozptýlenie rastlín, skál a ľudí](topic:live-view#scatter-plants-rocks-and-people).
- **Zdieľanie.** 360° panoráma, prehliadka panorámami so šípkami medzi bodmi, samostatný prehliadač (jedna webová stránka, ktorá sa otvorí offline a nič nenačítava z internetu) a video cesty kamery, všetko v reálnom čase. Pozri [Zdieľanie](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR v reálnom čase.** {{ui:Kontrola vo VR}} zobrazí model s jeho materiálmi, oblohou, tieňom slnka, svietidlami, rozptýlenými položkami a odrazeným svetlom. Pozri [Ako to vyzerá](topic:vr-review#what-it-looks-like).

### Materiály

- **Materiály vytvorené z uzlov.** Pracovný priestor {{ui:Tieňovanie}} zostavuje vlastné materiály súboru ako grafy uzlov: obrázky, šum a šachovnice, bunky Voronoi, vlny, tehly, dlaždice, drevo, mramor, prechody, špinu a opotrebenie hrán, farebné úpravy, matematiku, mapy vypuklín a normál, až do úplného materiálu OpenPBR. Zobrazenie ukáže každú zmenu okamžite. Pozri [Vytváranie materiálov z uzlov](topic:shading).
- **Knižnica materiálov a vlastné sady textúr.** Panel Tieňovanie zobrazuje materiály knižnice: šestnásť sád textúr CC0, každá s uvedením autora. Kliknutím na jednu ju použijete alebo ju presuňte na plochu. {{ui:Obrázky alebo zip…}} alebo {{ui:Priečinok…}} vytvoria materiál z vašich vlastných máp, nájdených podľa názvov súborov. Pozri [Materiály z knižnice](topic:shading#materials-from-the-library).
- **MaterialX na import a export.** Exportujte materiál ako MaterialX (OpenPBR Surface alebo Standard Surface, textúry ako PNG) a importujte súbory MaterialX aj s ich obrázkami. Pozri [MaterialX](topic:shading#materialx).
- **Nálepky a maľovanie textúr.** Umiestnite obrázok na povrch ako nálepku s vlastným materiálom a maľujte na obrázok materiálu okrúhlym štetcom. Pozri [Nálepky](topic:shading#decals) a [Maľovanie na textúre](topic:shading#paint-on-the-texture).
- **Pečenie textúr.** Zapečte ambientnú okluziu, zakrivenie, osvetlenie a normály podrobného objektu do obrázkov pozdĺž UV súradníc siete, na jadrách procesora počítača. Pozri [Pečenie textúr](topic:shading#bake-textures).

### Animácia

- **Pracovný priestor Animácia.** Vložte kľúče pre polohu, otočenie a veľkosť objektu, jas, rozptyl a farbu každého svietidla a uhol objektívu priamo na paneli. Časová os dostane zobrazenie {{ui:Krivky}} (úchyty Bézier, opakovania) a zobrazenie {{ui:Klipy}}, ktoré ukladá kľúče ako akcie na opätovné umiestnenie a miešanie. Kľúče v niekoľkých riadkoch sa dajú presúvať, natiahnuť, kopírovať a prilepiť. Pozri [Animácia ľubovoľnej vlastnosti](topic:animate).
- **Tvarové kľúče a ovládače.** Sieť obsahuje ďalšie tvary samej seba, miešané posuvníkmi, ktoré sa dajú kľúčovať, alebo nastavené z iných hodnôt malým výrazom. Pozri [Tvarové kľúče](topic:animate#shape-keys-morphs) a [Ovládače](topic:animate#drivers).
- **Kostry.** Vložte kosti do siete, nechajte {{ui:Automatické váhy}} rozdeliť body medzi nimi alebo namaľujte váhy a nastavte pózu a kľúčujte kosti. Lineárne alebo duálne kvaternionové skinovanie. Pozri [Kostry](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK a obmedzenia.** Dosah (IK) s pólom, pozeranie na, kopírovanie transformácií, limity, potomok a sledovanie dráhy pre kosti a objekty. Pozri [IK a obmedzenia](topic:animate#ik-and-constraints).
- **Fyzika.** Skupiny a komponenty padajú, skladajú sa a zrážajú ako kocky alebo gule a {{ui:Vypočítať fyziku}} uchová výsledok ako kľúče. Pozri [Fyzika](topic:animate#physics-drop-stack-and-collide).

### Súbory

- **USD.** {{ui:Uložiť ako}} ({{key:Mod+Shift+S}}) uloží model ako `.usda`, `.usdc` alebo `.usdz`. Súbor USD, ktorý ModelCraft uložil, sa otvorí znova bez straty. USD z iných programov sa otvorí alebo importuje ako siete, skupiny, komponenty, svietidlá a kamery. {{ui:Uložiť}} stále zapisuje `.modelcraft`. Pozri [Uloženie, otvorenie a export USD](topic:usd).
- **glTF, úplne.** Súbory glTF sa načítajú ako upraviteľné siete s normálami, UV, farbami vrcholov a textúrami, uzly ako skupiny, svetlá ako svietidlá a kamery ako scény, vrátane súborov Draco a meshopt. Súbor `.gltf` sa otvorí, keď ho pustíte spolu so súbormi, ktoré k nemu patria. Export zapisuje siete, textúry, svietidlá a kamery. Pozri [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL a Alembic.** FBX 2011 a novší (siete, sady UV, materiály, vložené textúry, svetlá, kamery), PLY a STL s ich farbami a cache Alembic pri jej prvej vzorke. OBJ sa načíta s `.mtl` a obrázkami, keď ich pustíte spolu. Pozri [Formáty súborov podrobne](topic:formats).
- **Ďalšie exporty.** PLY s farbami, STL s farbami maľovaných plôch a OBJ s textúrami ako jeden zip. Pozri [Formáty súborov podrobne](topic:formats).
- **Súbory STEP.** {{ui:Importovať}} načíta súčiastky a zostavy STEP (AP203, AP214, AP242) ako uzavreté siete v ich skutočnej veľkosti, každú súčiastku tam, kde ju súbor umiestni. Pozri [STEP](topic:formats#step-step-stp).
- **Súbory .3dm.** {{ui:Importovať}} načíta modely `.3dm`: siete, polypovrchy a vytiahnutia (zo sietí uložených v súbore, inak ich ModelCraft prevedie na trojuholníkovú sieť), krivky ako hrany, bloky ako komponenty a vrstvy ako značky. Pozri [Načítanie modelu .3dm](topic:import-3dm-files).
- **3D telesá z DWG a DXF.** Pri importe výkresu sa teraz načítajú aj jeho 3D telesá, oblasti a telesá, každé ako vlastná skupina, uzavreté ako telesá. Pozri [Model na situačnom pláne](topic:site-plan#what-comes-in).

### 3D tlač

- **Nástroje na tlač.** {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}} › **Nástroje na tlač** obsahuje {{ui:Náhľad podpier}} (previsy, stĺpce alebo stromové podpery, približne koľko materiálu), {{ui:Hrúbka stien}} (steny, ktoré sú na tlač príliš tenké, vypísané cez {{ui:Zobrazenie}}), {{ui:Vydlabať}} (steny zadanej hrúbky s odtokovými otvormi) a {{ui:Oprava}} (každá oprava je uvedená; prekrývajúce sa časti sa spoja, len keď o to požiadate). Vydlabať a Oprava vytvoria skupinu, ktorej rovné strany sú jednotlivé plochy, alebo sieť, keď výsledok sa neuzavrie alebo má príliš veľa plôch. Riadok stavu povie, ktorý z týchto prípadov nastal. Pozri [Podpery, hrúbka stien, vydlabávanie a oprava](topic:print-tools).
- **Štýl Začiatočník.** {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Ponuky, klávesy a myš}} › {{ui:Začiatočník}}: veľké tlačidlá na vkladanie tvarov a dier, presúvanie, zarovnanie a {{ui:Skupina}}, aby sa diery vyrezali, potom skontrolujte model na tlač. Pozri [Štýl Začiatočník](topic:beginner).

### Asistenti a váš počítač

- **Viac pre asistentov AI.** Asistent teraz dokáže vypísať plochy a materiály, posúvať a ťahať, maľovať, vytvárať skupiny, pridávať a zobrazovať scény, pridávať siete, upravovať zásobníky modifikátorov, exportovať USD, vykresliť obrázok a napĺňať rad vykresľovania. Pozri [Používanie ModelCraftu s asistentmi AI](topic:use-with-ai-assistants).
- **Váš počítač.** {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Vykresľovanie}} › {{ui:Váš počítač}} zobrazí grafiku, jadrá procesora a pamäť, ktoré môže aplikácia v tomto prehliadači použiť, a úroveň, ktorá určuje, kde sa začína živý pohľad. Pozri [Čím váš počítač vykresľuje](topic:your-machine).

## Opravené

- {{ui:Telesá}} › {{ui:Zjednotenie}}, {{ui:Odčítanie}} a {{ui:Prienik}} mohli vrátiť skupinu, ktorá nebola uzavretá, pri akejkoľvek veľkosti. Teraz sa uzatvárajú.
- {{ui:Telesá}} › {{ui:Odčítanie}} bolo nedostupné, keď nič nebolo vybraté, hoci po jeho zvolení si vyberá svoje dva kusy postupne.
- V časovej osi animácie sa napísané kľúče nikam nedostali, rovnako ako {{key:Mod+S}}. {{key:Mod+Z}} a {{key:Mod+Y}} tam sú vlastné funkcie časovej osi späť a znova; ostatné klávesy {{key:Mod}} sa dostanú do aplikácie.

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami zodpovedajúcimi definíciám jednotiek (US prieskumná stopa je samostatná jednotka). Vypnite jednotky, ktoré nepoužívate, a opustia zoznamy jednotiek. Označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponecháva svoju jednotku. V ModelCraft zoznam jednotiek vedľa poľa hodnoty sleduje prepínače (jednotka modelu v ňom vždy zostane), hviezdička nastaví jednotku nového modelu (ak ju ModelCraft má) a dĺžka napísaná s označením ľubovoľnej jednotky sa načíta v tej jednotke. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa schovajú.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má štíhly pruh nadpisu: potiahnite ho na ukotvenie alebo plávanie panela, pustite ho na pruh iného panela, aby zdieľali jeden rámec ako karty, prišpendlite ho, aby sa vysunul k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógy sa dajú presúvať.** Potiahnite dialóg za pruh nadpisu mimo kresby; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na pruh nadpisu ho znova vycentrujete. Pozri [Presun dialógu](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov AI.** Desať osvedčených požiadaviek pre vášho asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, položiť otázky modelu, sčítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá zopakovaná našimi testami. Aplikácie neobsahujú AI. Pozri [Recepty pre asistentov AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Tento jazyk, rovnako ako **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia**, má teraz všetky slová aplikácií ako koncepty, ktoré ešte neskontroloval rodený hovoriaci. Témy pomocníka sú v angličtine.
- **CadCraft Studio** povie, prečo kontrola aktualizácie zlyhala (zatiaľ žiadny súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len "Hotovo". Neukazuje znova kartu Čo je nové, ktorú ste zavreli, kým nie je novšie vydanie.

## Zatiaľ nie je v tejto verzii

- **0.7 nie je podpísaný kódom.** Podpisovanie a balík Microsoft Store boli presunuté do verzie 0.8, pretože overenie certifikátu ešte neprišlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v žiadnom obchode s aplikáciami a zatiaľ nie je ani zostava pre iPad alebo iPhone.
- Uhlové a sklonové zoznamy v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadne pole nečíta.
- Vykresľovanie na grafickej karte (WebGPU) bolo tu testované len s náhradným softvérom, ešte nie na skutočných grafických kartách, takže najprv vykreslite niečo malé vo svojom počítači. To isté platí pre živý pohľad a VR bolo zatiaľ vyskúšané len s emulátorom náhlavnej súpravy.
- Bez WebGPU nie je pracovný priestor Vykresľovanie ani rad vykresľovania a obrázky vo vysokej kvalite nemajú hĺbku ostrosti, fyzikálnu oblohu, obraz oblohy, hmlu, dym, kaustiky ani miešanie svetiel.
- {{ui:Vykresliť obrázok…}} zatiaľ nekreslí rozptýlené položky; zobrazia sa v živom pohľade, v jeho panorámach, prehliadači a videu.
- Svietidlá sa v zobrazení animujú, ale vykreslené video používa svietidlá tak, ako sú v čase spustenia.
- Kosti a animácia sa zatiaľ nečítajú ani nezapisujú do súborov glTF, FBX alebo USD (modely so skinom sa načítajú v pokoji, s ich váhami) a materiály glTF a FBX presahujúce základnú farbu alebo textúru sa zatiaľ neuchovávajú.
- Farby STEP a názvy častí zostavy sa zatiaľ nečítajú. Import `.3dm` bol testovaný so súbormi zapísanými knižnicou formátu, zatiaľ nie so súbormi z samotného modelovacieho programu. Objekty SubD, text a kóty sú vynechané.
- Knižnica rastlín z aplikácie CivilCraft je v ModelCraft, ale umiestňovanie rastlín z nej ešte nie je hotové.
- Maľovanie textúry na plochy tlače/ťahu sa opakuje s dlaždicou materiálu; ak chcete maľovať len jednu plochu, prevedte ju na sieť a rozviňte ju.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).
