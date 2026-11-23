---
title: Čo je nové vo verzii 0.7 (staršie)
summary: Siete s modifikátormi, sochanie, UV a objekty krivky, sledovanie lúčov na grafickej karte a pracovný priestor Vykreslenie, živý pohľad v reálnom čase s rozptýlením a panorámami, materiály z uzlov, pracovný priestor Animácia s kosťami a fyzikou, USD, FBX, STEP a súbory .3dm a nástroje na tlač so štýlom Začiatočník.
keywords: čo je nové 0.7, staršia verzia, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, sieť, siete, pracovný priestor sieť, modifikátory, delenie povrchu, ryhy, uv, rozvinúť, švy, krivky, objekty krivky, nurbs, bezier, sochanie, prepočítanie siete, retopológia, rozdelenie, výpočet, sledovanie lúčov, webgpu, pracovný priestor vykreslenie, rad vykresľovania, mp4, exr, odšumenie, fyzikálna obloha, hdri, ies, hĺbka ostrosti, miešanie svetla, hmla, kaustika, živý pohľad, reálny čas, prechádzka, rozptýlenie, panoráma, prehliadka, prehliadač, tieňovanie, uzly, materiály z uzlov, knižnica materiálov, materialx, nálepky, maľovanie textúr, pečenie, animácia, editor kriviek, klipy, tvarové kľúče, ovládače, kostra, kosti, skinning, ik, obmedzenia, fyzika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3D telesá, podpery, hrúbka stien, vydlabanie, oprava, začiatočník, asistenti, váš počítač, jednotky, portugalčina
from: 16d52810
---

Toto sa zmenilo v ModelCraft 0.7 oproti 0.6. ModelCraft teraz modeluje siete rovnako ako geometriu s ťahaním a tlačením, vykresľuje na grafickej karte a má pracovný priestor pre každý druh práce: vyberte ho v zozname {{ui:Pracovný priestor}} vľavo na paneli nástrojov.

## Nové

### Siete

- **Siete.** Vyberte skupinu alebo komponent a kliknite na {{ui:Previesť na sieť}} v {{ui:Informácie o entite}}: stane sa sieťou s plochami s ľubovoľným počtom rohov, ktoré môžu niesť textúrové súradnice, normály, farby a váhy. {{ui:Previesť na geometriu}} ju vráti späť. Krok späť na sieti zachová len to, čo každý krok zmenil. Súbor so sieťou potrebuje na otvorenie ModelCraft 0.7. Pozri [Siete](topic:meshes).
- **Pracovný priestor Sieť.** Dvakrát kliknite na sieť alebo vyberte {{ui:Sieť}} v zozname {{ui:Pracovný priestor}}, aby ste upravili jej vrcholy, hrany a plochy: slučky a prstence, proporcionálna úprava, vytiahnutie, vsadenie, zrazenie, rez slučky, nôž, rozpolenie, otočenie, zlúčenie, rozpustenie, výplň, mriežková výplň, most a posun, a nastavenia poslednej operácie, ktoré sa dajú neskôr zmeniť v paneli. Začnite z roviny, kocky, gule, torusu a ďalších. Fungujú klávesy ťahania/tlačenia aj klávesy modelovania. Pozri [Úprava siete v pracovnom priestore Sieť](topic:mesh-edit).
- **Modifikátory.** Zrkadlenie, pole, delený povrch, zrazenie, zhrubnutie, booleovské operácie, posunutie, zváranie, decimácia, vyhladenie, mriežka, deformácia krivkou a zmršťovací obal menia to, čo sieť zobrazuje, bez toho, aby ju zmenili. Skladajte ich, zapínajte a vypínajte pre pohľad a pre vykreslenie a {{ui:Použiť}} jeden, keď ho chcete natrvalo. Pozri [Modifikátory na sieti](topic:modifiers).
- **Delenie povrchu s ryhami.** {{ui:Ryha}} v pracovnom priestore Sieť drží vybrané hrany ostré pod delením povrchu. Vykreslenia môžu použiť viac úrovní ako pohľad a na veľkej sieti pohľad ukazuje nižšiu úroveň a povie to. Pozri [Delený povrch](topic:modifiers#subdivision-surface).
- **Objekty krivky.** Krivky Bézier, NURBS a rovné segmenty, ktoré tvoria rúru, pás, zúženie alebo vyplnený plech, a text ako krivku. Upravujte ich body v pracovnom priestore {{ui:Krivka}}; keď je tvar správny, použite {{ui:Na sieť}}. Pozri [Objekty krivky](topic:curves).
- **Pracovný priestor UV.** Označte švy (alebo nechajte ModelCraft označiť ich na ostrých hranách), použite {{ui:Rozvinúť}} a {{ui:Zbaliť}}, alebo premietnite kvádrom, valcom, guľou alebo pohľadom. Editor UV vedľa 3D pohľadu presúva, otáča a mení mierku kúskov, a šachovnica a farby natiahnutia ukážu výsledok. Pozri [Rozloženie UV súradníc siete](topic:uv).
- **Sochanie.** Pracovný priestor {{ui:Sochanie}} má štetce na kreslenie, hlinu, vyhladenie, uchopenie, nafúknutie, ryhu, stlačenie, zarovnanie a masku, zrkadlenie cez X a {{ui:Detail}}, ktorý pridá trojuholníky tam, kde sochate. Tlak pera nastavuje veľkosť a silu štetca. Každý ťah je jeden krok späť. Pozri [Sochanie siete](topic:sculpt).
- **Prepočítanie a retopológia.** {{ui:Prepočítať sieť}} vytvorí celú sieť znova ako rovnomerné trojuholníky, uzavrie diery a spojí prekrývajúce sa kúsky. Ak chcete čistú sieť nad podrobnou, vyberte ju pod {{ui:Retopológia}}: body, ktoré posuniete, pristanú na jej povrchu. Pozri [Prepočítanie siete](topic:mesh-edit#remesh).

### Kreslenie

- **Rozdelenie hrany alebo krivky.** Nástroj {{ui:Rozdeliť}} označí rezy, keď sa pohybujete pozdĺž hrany, a rozdelí kliknutím alebo zadaným číslom; pri vybranej hrane, oblúku alebo kružnici napíšte `/5`; {{ui:Informácie o entite}} › {{ui:Rozdeliť…}} pýta číslo, pre tablety. Oblúk alebo kružnica sa delí rovnakými uhlami na skutočnom oblúku. Pozri [Rozdelenie hrany alebo krivky na rovnaké časti](topic:divide).
- **Výpočty v poli hodnoty.** Napíšte `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` alebo `2*450mm` pre ľubovoľnú dĺžku a `90/2` pre uhol. Výpočet, ktorý sa nedá urobiť, povie, čo je zle a kde. Pozri [Výpočty](topic:value-box#calculations).

### Vykresľovanie

- **Sledovanie lúčov na grafickej karte.** {{ui:Vykresliť obrázok…}} › {{ui:Vysoká kvalita (path traced)}} spúšťa vlastný sledovač lúčov CadCraft na grafickej karte, ak prehliadač podporuje WebGPU; riadok pod obrázkom povie, ktorý motor ho vytvoril. {{ui:Zastaviť}} ponechá obrázok a {{ui:Pokračovať}} pokračuje odtiaľ. Bez WebGPU sa obrázok sleduje lúčmi cez WebGL, ako predtým. Pozri [Vysoká kvalita](topic:render#high-quality).
- **Vykresľovanie v pohľade.** Pracovný priestor {{ui:Vykresliť}} sleduje lúče samotného pohľadu a začne znova, keď obiehate alebo upravujete: vykreslite {{ui:Oblasť}}, kliknite na {{ui:Zaostrenie}}, nastavte {{ui:Detail}}. Potrebuje WebGPU. Pozri [Vykresľovanie v pohľade](topic:render#render-in-the-view).
- **Materiály, svetlá a oblohy.** Obrázky vo vysokej kvalite tieňujú každú plochu modelom materiálov OpenPBR (vrstvy, chlpy, tenké vrstvy, farebné sklo, žiara). S WebGPU je k dispozícii aj {{ui:Fyzikálna obloha}} s {{ui:Opar}}, {{ui:Obraz oblohy (HDRI)}} a profily svetla IES od výrobcov pre lampy. Pozri [Oblohy a profily svetla](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotoaparát ako fotografický.** Expozícia z clony, uzávierky a ISO v každom režime; s WebGPU aj hĺbka ostrosti, dvojbodová perspektíva, vyváženie bielej, 360° panorámy (aj stereo) a kubické mapy. Pozri [Kamera](topic:render#the-camera).
- **Dokončenie obrázka po vykreslení.** Stupňujte ho ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} alebo {{ui:Štandardný}}, kontrast, žiara, záblesk, vinetácia, farebná tabuľka `.cube`), miešajte oblohu, slnko a každú skupinu lámp a prezerajte prvky vykreslenia jeden po druhom, a to všetko bez opätovného vykreslenia. Zvyšné zrno odstráni odšumovač na vašom počítači. Pozri [Dokončenie obrázka](topic:render#finish-the-picture) a [Miešanie svetiel po vykreslení](topic:render#mix-the-lights-after-the-render).
- **Viac spôsobov uloženia vykreslenia.** PNG so 16 bitmi, viacvrstvový EXR so všetkými prvkami vykreslenia a skupinami svetiel, a súbor vykreslenia (`.ccrender`), ktorý sa znova otvorí s miešaním a stupňovaním. Pozri [Uloženie obrázka](topic:render#save-the-picture).
- **Hmla, dym a kaustika.** Hmla a opar osvetlené slnkom a lampami, so svetelnými lúčmi; jeden stĺp dymu alebo oblak; kaustika pod sklom a zrkadlami; adaptívne vzorkovanie, ktoré sa zastaví na pixeloch, ktoré sú už čisté. Len na grafickej karte. Pozri [Hmla, dym, šum a kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Rad vykresľovania a MP4.** Pridajte obrázky vo vysokej kvalite a celé animácie do {{ui:Rad vykresľovania}}; vykresľujú sa jeden po druhom a rad prežije zatvorenie stránky. Potrebuje WebGPU. Videá sa dajú uložiť aj ako MP4, kde ich prehliadač vie zapísať. Pozri [Rad vykresľovania](topic:render#the-render-queue) a [Vykreslenie videa](topic:animation#render-the-video).

### Živý pohľad a prezentácie

- **Živý pohľad.** {{ui:Exportovať}} › {{ui:Živý pohľad}} zobrazí model vo vzhľade v reálnom čase vedľa pohľadu a sleduje každú úpravu a kameru: tiene od slnka, materiály, lampy a svetlo odrazené od stien. {{ui:Prechádzka}} po ňom, potiahnite {{ui:Čas}} a {{ui:Mesiac}} na posun slnka, alebo ho presuňte do {{ui:Nové okno}}. Používa WebGPU, ak ho prehliadač má, inak WebGL 2. Pozri [Živý pohľad](topic:live-view).
- **Rozptýlenie.** Rozptýlite trávu, kvety, kamene, stromy a ľudí po plochách alebo štetcom, zo siedmich nových položiek doplnku a zvyšku knižnice; súpravy sa uložia do súboru. Pozri [Rozptýlenie rastlín, kameňov a ľudí](topic:live-view#scatter-plants-rocks-and-people).
- **Zdieľanie.** 360° panoráma, prehliadka panorámami so šípkami medzi bodmi, samostatný prehliadač (jedna webová stránka, ktorá sa otvorí offline a nenačíta nič z internetu) a video cesty kamery, všetko vo vzhľade v reálnom čase. Pozri [Zdieľanie](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR vo vzhľade v reálnom čase.** {{ui:Kontrola vo VR}} zobrazí model s jeho materiálmi, oblohou, tieňom slnka, lampami, rozptýlenými položkami a odrazeným svetlom. Pozri [Ako to vyzerá](topic:vr-review#what-it-looks-like).

### Materiály

- **Materiály vytvorené uzlami.** Pracovný priestor {{ui:Tieňovanie}} vytvára vlastné materiály súboru ako grafy uzlov: obrázky, šum a šachovnice, Voronoiove bunky, vlny, tehly, dlaždice, drevo, mramor, prechody, špinu a opotrebenie hrán, farebné úpravy, matematiku, mapy výčnelkov a normál, až do plného materiálu OpenPBR. Pohľad ukazuje každú zmenu hneď. Pozri [Vytváranie materiálov uzlami](topic:shading).
- **Knižnica materiálov a vaše vlastné sady textúr.** Panel Tieňovanie vypisuje materiály Knižnice: šestnásť sád textúr CC0, každá uvedená ako zdroj. Kliknite na jednu, aby ste ju použili, alebo ju pretiahnite na plochu. {{ui:Obrázky alebo zip…}} alebo {{ui:Priečinok…}} vytvorí materiál z vašich vlastných máp, nájdených podľa názvov súborov. Pozri [Materiály z knižnice](topic:shading#materials-from-the-library).
- **MaterialX dnu aj von.** Exportujte materiál ako MaterialX (OpenPBR Surface alebo Standard Surface, textúry ako PNG) a importujte súbory MaterialX s ich obrázkami. Pozri [MaterialX](topic:shading#materialx).
- **Nálepky a maľovanie textúr.** Umiestnite obrázok na povrch ako nálepku s vlastným materiálom a maľujte na obrázok materiálu okrúhlym štetcom. Pozri [Nálepky](topic:shading#decals) a [Maľovanie na textúre](topic:shading#paint-on-the-texture).
- **Pečenie textúr.** Zapečte okluziu okolia, zakrivenie, osvetlenie a normály podrobného objektu do obrázkov pozdĺž UV siete, na jadrách procesora počítača. Pozri [Pečenie textúr](topic:shading#bake-textures).

### Animácia

- **Pracovný priestor Animácia.** Nastavte miesto, otočenie a veľkosť objektu, jas, rozptyl a farbu každej lampy a uhol objektívu priamo v paneli. Časová os dostane pohľad {{ui:Krivky}} (Bézierove úchyty, opakovania) a pohľad {{ui:Klipy}}, ktorý ukladá kľúče ako akcie na opätovné umiestnenie a miešanie; kľúče na viacerých riadkoch sa dajú presúvať, natiahnuť, kopírovať a vkladať. Pozri [Animovanie ľubovoľnej vlastnosti](topic:animate).
- **Tvarové kľúče a ovládače.** Sieť drží ďalšie svoje tvary, zmiešané posuvníkmi, ktoré možno kľúčovať, alebo nastavené z iných hodnôt malým výrazom. Pozri [Tvarové kľúče](topic:animate#shape-keys-morphs) a [Ovládače](topic:animate#drivers).
- **Kostry.** Vložte kosti do siete, nechajte {{ui:Automatické váhy}} rozdeliť body medzi ne alebo maľujte váhy, a nastavte a kľúčujte kosti; lineárny alebo duálny kvaternión skinning. Pozri [Kostry](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK a obmedzenia.** Dosah (IK) s pólom, pozeranie na, kopírovanie transformácií, limity, potomok a nasledovanie cesty, pre kosti aj objekty. Pozri [IK a obmedzenia](topic:animate#ik-and-constraints).
- **Fyzika.** Skupiny a komponenty padajú, skladajú sa a zrážajú ako kocky alebo gule, a {{ui:Vypočítať fyziku}} ponechá výsledok ako kľúče. Pozri [Fyzika](topic:animate#physics-drop-stack-and-collide).

### Súbory

- **USD.** {{ui:Uložiť ako}} ({{key:Mod+Shift+S}}) uloží model ako `.usda`, `.usdc` alebo `.usdz` a súbor USD, ktorý ModelCraft uložil, sa otvorí znova bez straty. USD z iných programov sa otvorí alebo importuje ako siete, skupiny, komponenty, lampy a kamery. {{ui:Uložiť}} stále zapisuje `.modelcraft`. Pozri [Uloženie, otvorenie a export USD](topic:usd).
- **glTF, úplne.** Súbory glTF prichádzajú ako upraviteľné siete s normálami, UV, farbami vrcholov a textúrami; uzly ako skupiny, svetlá ako lampy a kamery ako scény, vrátane súborov Draco a meshopt; súbor `.gltf` sa otvorí, keď ho pustíte spolu s jeho súbormi. Export zapisuje siete, textúry, lampy a kamery. Pozri [glTF](topic:formats#gltf-glb-gltf).
- **Import FBX, PLY, STL a Alembic.** FBX 2011 a novší (siete, sady UV, materiály, vložené textúry, svetlá, kamery), PLY a STL s ich farbami a cache Alembic v ich prvej vzorke. OBJ sa načíta s `.mtl` a obrázkami, keď ich pustíte spolu. Pozri [Formáty súborov podrobne](topic:formats).
- **Ďalšie exporty.** PLY s farbami, STL s farbami maľovaných plôch a OBJ s textúrami ako jeden zip. Pozri [Formáty súborov podrobne](topic:formats).
- **Súbory STEP.** {{ui:Import}} číta časti a zostavy STEP (AP203, AP214, AP242) ako uzavreté siete v ich skutočnej veľkosti, každú časť tam, kde ju súbor umiestňuje. Pozri [STEP](topic:formats#step-step-stp).
- **Súbory .3dm.** {{ui:Import}} číta modely `.3dm`: siete, polypovrchy a vytiahnutia (zo sietí uložených v súbore, inak ich vytvorí ModelCraft triangulovaním), krivky ako hrany, bloky ako komponenty a vrstvy ako značky. Pozri [Import modelu .3dm](topic:import-3dm-files).
- **3D telesá z DWG a DXF.** Import výkresu teraz prinesie aj jeho 3D telesá, oblasti a telesá, každé ako vlastnú skupinu, uzavreté ako telesá. Pozri [Model na situačnom pláne](topic:site-plan#what-comes-in).

### Tlač na 3D tlačiarni

- **Nástroje tlače.** {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}} › **Nástroje tlače** má {{ui:Náhľad podpier}} (previsy, stĺpy alebo stromové podpery, zhruba koľko materiálu), {{ui:Hrúbka stien}} (steny príliš tenké na tlač, vypísané s {{ui:Zobraziť}}), {{ui:Vydlabať}} (steny zadanej hrúbky, s odtokovými otvormi) a {{ui:Oprava}} (každá oprava vypísaná; prekrývajúce sa časti sa spoja, len keď o to požiadate). Vydlabať a Oprava dajú skupinu, ktorej rovné strany sú jednotlivé plochy, alebo sieť, keď by výsledok nebol uzavretý alebo má príliš veľa plôch; stavový riadok povie, ktorá z možností nastala. Pozri [Podpery, hrúbka stien, vydlabanie a oprava](topic:print-tools).
- **Štýl Začiatočník.** {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Ponuky, klávesy a myš}} › {{ui:Začiatočník}}: veľké tlačidlá na vkladanie tvarov a dier, presúvanie, zarovnanie a {{ui:Skupina}}, aby sa diery vyrezali, potom kontrola modelu na tlač. Pozri [Štýl Začiatočník](topic:beginner).

### Asistenti a váš počítač

- **Viac pre AI asistentov.** Asistent teraz môže vypísať plochy a materiály, tlačiť/ťahať, maľovať, vytvárať skupiny, pridávať a zobrazovať scény, pridávať siete, upravovať zásobníky modifikátorov, exportovať USD, vykresliť obrázok a plniť rad vykresľovania. Pozri [Používanie ModelCraft s AI asistentmi](topic:use-with-ai-assistants).
- **Váš počítač.** {{ui:Nastavenia}} › {{ui:ModelCraft}} › {{ui:Vykresľovanie}} › {{ui:Váš počítač}} ukazuje grafiku, jadrá procesora a pamäť, ktoré môže aplikácia v tomto prehliadači použiť, a úroveň, ktorá určuje, kde sa živý pohľad začína. Pozri [Čím váš počítač vykresľuje](topic:your-machine).

## Opravené

- {{ui:Telesá}} › {{ui:Zjednotenie}}, {{ui:Odčítanie}} a {{ui:Prienik}} mohli vrátiť skupinu, ktorá nebola uzavretá, pri akejkoľvek veľkosti. Teraz sa uzavrie.
- {{ui:Telesá}} › {{ui:Odčítanie}} bolo sivé, keď nič nebolo vybrané, hoci si po výbere volí dva kusy postupne.
- V časovej osi animácie zapísané klávesy nikam nešli, ani {{key:Mod+S}}. {{key:Mod+Z}} a {{key:Mod+Y}} tam sú vlastný krok späť a vpred časovej osi; ostatné klávesy {{key:Mod}} sa dostanú do aplikácie.

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká prieskumná stopa je vlastná jednotka). Vypnite jednotky, ktoré nepoužívate, a zmiznú zo zoznamov jednotiek; označte jednu hviezdičkou a nová práca sa v nej začne. Súbor si vždy ponecháva svoju vlastnú jednotku. V ModelCraft zoznam jednotiek vedľa poľa hodnoty nasleduje prepínače (jednotka modelu v ňom vždy zostáva), hviezdička nastavuje jednotku nového modelu (keď ju ModelCraft má) a dĺžka napísaná so značkou ľubovoľnej jednotky sa číta v tejto jednotke. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú poskladať.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má tenký pruh nadpisu: potiahnite ho na ukotvenie alebo plávanie panela, pustite ho na pruh iného panela, aby zdieľali jeden rám ako karty, pripnite ho, aby sa skĺzol k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógy sa dajú presúvať.** Potiahnite dialóg za jeho pruh nadpisu mimo kresby; vráti sa tam, kde ste ho nechali. Dvojklikom na pruh nadpisu ho znova vycentrujete. Pozri [Presun dialógu](common:arrange-panels#move-a-dialog).
- **Recepty pre AI asistentov.** Desať prepracovaných žiadostí pre vášho asistenta (upratanie výkresu, vykreslenie sady, kontrola výkresov, otázky na model, sčítanie výkazu výmer, skúšanie variantu súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá overená našimi testami. Aplikácie neobsahujú AI. Pozri [Recepty pre AI asistentov](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** teraz majú každé slovo aplikácií, ako koncepty, ktoré ešte neprečítal rodený hovorca. Témy pomocníka sú v angličtine.
- **CadCraft Studio** povie, prečo kontrola aktualizácie zlyhala (chýba súbor pre váš systém, nie je sieť, zlý podpis), namiesto len "Hotovo", a neprivádza späť kartu Čo je nové, ktorú ste zavreli, kým nie je novšie vydanie.

## Ešte nie je v tejto verzii

- **0.7 nie je podpísaný kódom.** Podpisovanie a balík Microsoft Store sa presunuli do 0.8, pretože overenie certifikátu zatiaľ neprišlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Aj tak spustiť}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zatiaľ nie je zostavenie pre iPad ani iPhone.
- Uhlové a sklonové zoznamy v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadny výber nečíta.
- Vykresľovanie na grafickej karte (WebGPU) sa tu testovalo len s náhradným softvérom, zatiaľ nie na skutočných grafických kartách, takže najprv vykreslite niečo malé na vlastnom počítači. To isté platí pre živý pohľad a VR sa zatiaľ skúšalo len s emulátorom okuliarov.
- Bez WebGPU nie je pracovný priestor Vykreslenie ani rad vykresľovania a obrázky vo vysokej kvalite nemajú hĺbku ostrosti, fyzikálnu oblohu, obraz oblohy, hmlu, dym, kaustiku ani miešanie svetiel.
- {{ui:Vykresliť obrázok…}} zatiaľ nekreslí rozptýlené položky; zobrazia sa v živom pohľade, jeho panorámach, prehliadači a videu.
- Lampy sa animujú v pohľade, ale vykreslené video používa lampy tak, ako sú, keď sa spustí.
- Kosti a animácia sa zatiaľ nečítajú ani nezapisujú do súborov glTF, FBX ani USD (modely s kostrou sa načítajú v pokoji, s ich váhami) a materiály glTF a FBX nad základnú farbu alebo textúru zatiaľ nie sú zachované.
- Farby STEP a názvy dielov zostavy sa zatiaľ nečítajú. Import `.3dm` sa testoval so súbormi zapísanými knižnicou formátu, zatiaľ nie so súbormi z samotného modelovacieho programu; objekty SubD, text a kóty sú vynechané.
- Knižnica rastlín z CivilCraft je v ModelCraft, ale umiestňovanie rastlín z nej ešte nie je hotové.
- Maľovanie textúry na plochy ťahania/tlačenia sa opakuje s dlaždicou materiálu; ak chcete maľovať len jednu plochu, previeďte ju na sieť a rozviňte ju.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).
