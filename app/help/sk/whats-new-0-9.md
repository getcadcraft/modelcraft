---
title: Novinky vo verzii 0.9 (staršie)
summary: Fáza tlače s vlastným slicerom a odosielaním cez USB, Klipper, OctoPrint a PrusaLink, rezanie pre živicu a doplnky formátov súborov, tok materiálu, doplnky digitálneho dvojčaťa a výrobnej haly, zaoblenia NURBS, zhrubnutie a prispôsobenie skenu, AR na mieste a desať metód oblúka.
keywords: novinky 0.9, staršie vydanie, novinky, čo je nové, poznámky k vydaniu, changelog, 0.9, fáza tlače, 3d tlač, odoslať na 3D tlačiareň, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, živica, tlač živicou, resin, goo, sl1, ctb, anycubic, test expozície, tok materiálu, digitálne dvojča, výrobná hala, plc, dopravník, nurbs, zaoblenie, zhrubnutie, prispôsobenie skenu, ar, na mieste, metódy oblúka, jednotky, zmeny, 0.8, 0.8.1, verzia, nové funkcie, vykresľovací engine, engine, otvoriť v, usd, gltf, unreal, engine z doplnkov, plochy, loft, sweep, spojitosť, g0, g1, g2, zebra, step, iges, povedz scénu, scéna, počasie, denná doba, ročné obdobie, asistent, materiál z fotografie, fotografia, fotografia náčrtu, zariadiť, zariadiť miestnosť, šikmý rez, rozdelenie, kontrola tlače, problémy, mriežka vlastností, svetlá, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg, naživo
from: 2717d1b1
---

Toto sa zmenilo v ModelCraft 0.9 v porovnaní s verziou 0.8.1. ModelCraft teraz komunikuje s tlačiarňou a výrobnou halou: môžete umiestniť veci na tlačovú plochu a odoslať ich bez exportu, rezať pre filament alebo živicu a navrhnúť linku manipulácie s materiálom. Toto je CadCraft Studio 0.9 a jeho osem aplikácií; väčšina nových funkcií nižšie sú doplnky.

## Novinky

### 3D tlač

- **Fáza tlače.** Kliknite na {{ui:Fáza tlače}} na paneli nástrojov. Pridajte položky knižnice na tlačovú plochu tlačiarne, usporiadajte ich, prezrite si rezané vrstvy a stlačte {{ui:Odoslať na 3D tlačiareň}}, bez exportu STL. Patrí k doplnku 3D tlač, ktorý je predvolene zapnutý a dá sa odstrániť ako každý iný doplnok. Pozrite [Umiestnenie vecí na tlačovú plochu a ich odoslanie na tlačiareň](topic:print-stage).
- **Vlastný slicer filamentu.** {{ui:CadCraft basic (súčasť, najrýchlejšie)}} je slicer v zozname **Slicer** na karte: steny, povrchy, výplň, podpery a obrubu, na pracovnom procese, aby stránka zostala použiteľná. {{ui:Zobraziť náhľad vrstiev}} s posúvačom **Vrstva** zobrazí vrstvy pred odoslaním. Profily tlačiarní, napríklad štýly Ender-3 a Prusa MK4, nesú vlastný úvodný G-kód.
- **Odosielanie.** Cez USB (Chrome alebo Edge na počítači, so stránkou otvorenou) alebo na Klipper (Moonraker), OctoPrint či PrusaLink vo vašej sieti. Nič sa nepripája ani neodosiela bez kliknutia a odosielanie najprv vyžiada potvrdenie.
- **Ďalšie slicery.** Kiri:Moto, PrusaSlicer a OrcaSlicer sú vlastné doplnky, predvolene vypnuté; pridajte ich z karty alebo z {{ui:Nastavenia}} › {{ui:Doplnky}}. PrusaSlicer a OrcaSlicer používajú vašu vlastnú nainštalovanú kópiu z CadCraft Studio. Doplnok pre tlačiarne Bambu Lab rezanie vykonáva pomocou vášho OrcaSlicer a jeho predvolieb P2S a vyžaduje Studio na počítači.
- **Tlač živicou.** Doplnky pre živicu (predvolene vypnuté) vytvárajú obrázky vrstiev pre obrazovku vašej tlačiarne, s vydutím a odvetrávacími otvormi, podložkou a podperami, náhľadom vrstiev a časom, živicou a cenou. Doplnky formátov súborov zapisujú Elegoo GOO, SL1, Chitubox (CBDDLP a CTB 2 až 5) a Anycubic (PWMX a PWS). Test expozície živice vytvorí rebríček piatich expozícií. Pozrite [Rezanie pre živicovú tlačiareň](topic:resin-printing).
- **Bez zmeny.** {{ui:Exportovať}} › {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}, nástroje tlače a Rozdelenie na tlač fungujú ako vo verzii 0.8. Pozrite [Príprava modelu na 3D tlač](topic:print-3d).

### Tok materiálu, digitálne dvojča a výrobná hala

Tieto tri sú doplnky, vypnuté, kým ich nezapnete v {{ui:Nastavenia}} › {{ui:Doplnky}}, a každý má vlastnú pomoc, akonáhle je zapnutý.

- **Tok materiálu.** Panel s názvom Tok materiálu rozloží dopravníky, stanice, medziskladovacie zásobníky a dráhy AGV v 3D zobrazení, spustí simuláciu so semenom, prehrá ju a zobrazí priepustnosť, časy dodania a fronty, pričom výsledky sa ukladajú ako CSV. Objednávky môžu pochádzať zo súboru CSV. Robotické bunky sa dajú skontrolovať a exportovať. Prepojenie PLC má mäkký režim a skutočný režim cez Modbus TCP, ktorý funguje len v CadCraft Studio.
- **Digitálne dvojča.** Načíta rozloženie Toku materiálu a spustí na ňom softvérové PLC, s chybami, ktoré môžete vynútiť, testami zásob, porovnaním rozložení a kusovníkom.
- **Výrobná hala.** Premení stanice na stroje a bunky, číta ich naživo alebo zo simulátora a vedie frontu úloh a jednoduchý OEE. Iba číta: táto zostava nemôže zapisovať do stroja ani PLC.

### Plochy, modely a výkresy

- **Zaoblenia, zhrubnutie a booleovské operácie na NURBS.** Panel {{ui:Povrchy}} obsahuje {{ui:Zaoblenie medzi plochami}}, {{ui:Zaoblenie viacerých hrán}}, {{ui:Zhrúbnutie na teleso}} a Zjednotenie, Odčítanie a Prienik, každé s nameranou odchýlkou. Pozrite [Voľné plochy (NURBS)](topic:nurbs-surfaces).
- **Prispôsobenie plôch skenu.** Vyberte naskenovanú sieť a použite {{ui:Prispôsobiť plochy skenu}} v skupine **Sken**, potom {{ui:Zošiť plochy do telesa}}. Je to prvé prispôsobenie, nie úplný balík na reverzné inžinierstvo.
- **Živé prepojenie z modelára .3dm.** Jednosmerné, z Rhino 8 alebo Grasshopper, a vyžaduje CadCraft Studio na tom istom počítači. Pozrite [Udržiavanie modelu .3dm živého](topic:live-3dm-link).
- **Model na mieste.** {{ui:Zobrazenie na mieste (AR, telefón)}} v ponuke {{ui:Pohľady}} funguje na telefóne s Androidom a Chrome. Pozrite [Model na mieste s telefónom s Androidom (AR)](topic:ar-on-site).
- **Metódy oblúka.** Rozbaľovací zoznam {{ui:Metódy oblúka}} ponúka desať spôsobov kreslenia oblúka, vrátane {{ui:3 body}} a {{ui:Začiatok, stred, koniec}}.
- **Ďalšie jednotky.** Hmotnosti (kg, lb, t, ton) a teploty (stupne C, F, K a R) sa rozpoznajú tam, kde zadávate hodnoty s jednotkami.

## Vo všetkých aplikáciách

- **Bublinové nápovedy.** Text pri prechode myšou nad tlačidlami a skrátenými popiskami je bublinová nápoveda Bootstrap.
- **Zatvárateľný úvodný tip.** Karta tipu na prázdnej ploche výkresu má malý krížik na zatvorenie. Zostane zatvorená a paleta príkazov ju môže zobraziť znova.
- **Posuvné pásy kariet.** Pás kariet panela, ktorý sa nezmestí, sa posúva namiesto toho, aby bol orezaný.
- **Názvy kariet.** Keď je otvorený dokument, karta prehliadača začína názvom dokumentu, potom ModelCraft a CadCraft. Pri neuložených zmenách je pred názvom bodka.
- **Rozloženie.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › Rozloženie drží rozloženia v rozbaľovacom zozname, s voľbou použiť rozloženie len pre túto aplikáciu a tlačidlom na obnovenie rozloženia.
- **Jazyky.** Zoznam jazykov v nastaveniach zodpovedá jazykovým súborom, ktoré obsahuje zostava. Jazyky iné než angličtina sú strojové koncepty.
- **Živé a Knižnica.** Živá spolupráca TeamWork zobrazuje živé kurzory a mená a zbierky knižnice dávajú každej aplikácii predvolenú zbierku.

## Opravy

- {{ui:Prehrať}} sa zmení na {{ui:Pozastaviť}}, keď beží animácia, a {{key:Space}} prehráva a pozastavuje, keď je otvorená časová os.
- Statické vykreslenie sa vráti na WebGL, keď grafická karta nedokáže spustiť path tracer. Živé zobrazenie vykreslenia môže stále ukazovať chybu; toto nebolo overené na počítači s Windows s týmto ovládačom.
- Skutočný režim toku materiálu sa znova pripojí po tom, čo spojenie skončilo na odpovediach o výnimke PLC.

## Úprimné obmedzenia

- Na skutočnej tlačiarni nebolo nič vytlačené: ani filament, ani živica, ani cez Bambu Connect. Súbory živice boli spätne načítané len vlastnými čítačkami programu CadCraft.
- Digitálne dvojča a Výrobná hala boli testované len na simulátoroch a známych výsledkoch, bez skutočného PLC, linky alebo protokolu. Sú to pomôcky na kontrolu, nie bezpečnostné overenie. Fyzika pokrýva len škatule, najviac osem zaťažení.
- Prepojenie Rhino a Grasshopper nikdy nebežalo v skutočných programoch.
- Jazyky iné než angličtina sú strojové koncepty.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo v ModelCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) v porovnaní s verziou 0.7. Dialóg {{ui:Vykresliť obrázok…}} môže teraz poslať scénu do iného programu, panel Povrchy vytvára hladké voľné plochy a pripojený asistent môže nastaviť celú scénu jednou vetou.

### Novinky

**Vykresľovanie**

- **Voľba Engine.** {{ui:Vykresliť obrázok…}} má zoznam **Engine** nad Režimom. Naše dva vlastné enginy, Rýchly a Path tracer, sú predvolené a fungujú všade. Ostatné položky uložia scénu ako balík (model ako súbor USD, plus súbor nastavení s presnými hodnotami materiálov, zapnutými svetlami, slnkom, oblohou, expozíciou a kamerou), ktorý môžete zobrať do iného programu. Obrázok nakreslený iným programom uvádza, ktorý program a verziu ho vytvoril. Pozrite [Výber programu, ktorý nakreslí obrázok](topic:render-engines).
- **Otvoriť v inom programe.** Zoznam Engine môže uložiť scénu ako súbor USD, súbor glTF (`.glb`) alebo priečinok projektu Unreal (`.zip`), v prehliadači aj v CadCraft Studio. V Studio môže tiež spustiť usdview alebo vlastný program počítača pre tento súbor. Pozrite [Otvorenie scény v inom programe](topic:render-open-in).
- **Odoslanie do herného enginu zo Studio.** Studio zapíše scénu do projektu Unreal Engine a pri každom odoslaní ju udržiava v súlade, len jedným smerom. Vaše vlastné úpravy žijú vo vrstve, ktorú CadCraft nikdy nezapisuje. Pozrite [Odoslanie scény do herného enginu](topic:render-unreal).
- **Enginy z doplnkov.** Doplnok môže do zoznamu pridať engine. Engine napísaný v JavaScript kreslí v prehliadači aj v Studio; ten, ktorý spúšťa program, potrebuje váš súhlas v Studio. Pozrite [Kreslenie obrázka iným programom](topic:render-other-program) a [Pridanie render enginu doplnkom](topic:render-engine-addons).
- **Povedz scénu.** Povedzte svojmu pripojenému asistentovi „súmrak, slabý dážď, jesenné stromy, ľudia na námestí“ a ModelCraft ju nastaví v jednom kroku: slnko sa presunie na dátum a čas, aby tiene nasledovali, obloha sa zmení, objavia sa mokré povrchy a stromy a ľudia sa umiestnia ako skutočné objekty na štítkoch, ktoré môžete skryť, presunúť alebo zmazať. Denná doba, dátum alebo ročné obdobie a počasie (jasno, zamračené, hmla, slabý dážď, dážď, búrka) fungujú aj samostatne a ďalšia požiadavka mení tú istú scénu. Hmla sa zobrazí v kvalitnom obrázku na grafickej karte; ostatné enginy ukazujú oblohu, svetlo a mokré povrchy. Dážď sa nekreslí ako padajúce čiary.

**Materiály**

- **Materiál z jednej fotografie.** Dajte ModelCraft fotografiu povrchu (stena, podlaha, kameň) a vytvorí dlaždicový materiál: osvetlenie naprieč fotografiou sa vyrovná, hrany sa spoja a mapa farieb, mapa drsnosti a normálová mapa sa vypočítajú z obrázka. Je to bežné spracovanie obrazu vášho vlastného obrázka, bez trénovaného modelu. Drsnosť je odhad. Rovná, štvorcová fotografia zrobená naproti povrchu dá najlepšiu dlaždicu; výrazný vzor, ako tehly, môže ukázať mäkký duch tam, kde je spoj zmiešaný.

**Plochy**

- **Voľné plochy.** Panel {{ui:Povrchy}} vytvára krivky a neorezané plochy NURBS: krivky cez body, loft, lineárne, vytiahnutie, rotáciu, ťahanie po jednej alebo dvoch koľajniciach, plochy zo siete kriviek, záplaty zo štyroch hrán, zhodu a prechod. Každá spoločná hrana sa meria ako G0, G1 alebo G2 (medzera, uhol, skok zakrivenia) na presných plochách a hrana horšia, než ste požadovali, sa zobrazí v paneli Problémy s opravou **Zhoda**. Pruhy zebry a farby zakrivenia sa kreslia z presných plôch. Súbory STEP a IGES sa exportujú a importujú. Pozrite [Voľné plochy (NURBS)](topic:nurbs-surfaces).

**Pozemok a miestnosti**

- **Fotografia náčrtu na zem.** {{ui:Súbor}} › {{ui:Importovať fotografiu náčrtu…}} premení fotografiu ručného náčrtu z telefónu na hrany na zemi v mierke, ktorú zadáte: jedna skupina, so štítkom pre každú farbu pera. Papier sa nájde a narovná na vašom počítači a nič sa nikam neposiela. Pozrite [Model na situačnom pláne](topic:site-plan).
- **Zariadiť miestnosť.** Vyberte podlahu a použite {{ui:Usporiadanie}} › {{ui:Zariadiť miestnosť…}}. Nábytok do spálne, obývačky, jedálne, kuchyne, kúpeľne alebo kancelárie sa umiestni podľa pravidiel, pri stenách a bez dverí a okien, v jednej skupine, ktorú môžete odstrániť jedným krokom. Je to predvolené rozloženie na preverenie, nie návrh. Pozrite [Štartovacia knižnica](topic:starter).

**3D tlač**

- **Šikmé rezy.** Rozdelenie na tlač môže nakloniť rezy až o 60 stupňov, čo dáva dielom väčšiu plochu na lepenie. Spojky stoja kolmo na rez. Pozrite [Rozdelenie modelu na tlač](topic:print-split).
- **Kontrola tlače v Problémoch.** Zistenia kontroly 3D tlače sa zobrazujú v paneli Problémy so značkami na modeli a Oprava ich odtiaľ opraví. Pozrite [Podpery, hrúbka stien, vydutie a oprava](topic:print-tools).

**Vo všetkých aplikáciách**

- **Jazyky.** Pomoc a aplikácie sú v 54 jazykoch. Desať je nových: litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Jazyky iné než angličtina sú strojové koncepty, kým ich nečíta rodený hovorca, a témy pomoci môžu byť stále v angličtine.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, herný ovládač a ovládanie MIDI môžu ovládať aplikácie, pre všetky alebo pre jednu.
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › Riadky panela nástrojov nastavuje Zalomiť (ako predtým), 2 riadky alebo 1 riadok. Panel, ktorý sa nezmestí, sa posúva do strán namiesto toho, aby zoberal miesto z výkresu. Zalomiť zostáva predvolené.
- **Mriežka vlastností.** Polia svetiel v ModelCraft používajú spoločnú mriežku: zbaliteľné kategórie, stĺpce názvov a hodnôt a hustota Kompaktná. Zadávanie výpočtov, napríklad `2*450`, funguje ďalej.
- **Problémy.** Panel Problémy (tlačidlo upozornenia na lište aplikácie) je spoločný pre všetky aplikácie. V ModelCraft obsahuje kontrolu tlače a upozornenia na spojitosť plôch.
- **Naživo.** Relácia Live TeamWork ukazuje, kto kde je. Pozrite [Modelovanie spoločne s Live TeamWork](topic:work-live).
- **Doplnky.** Doplnky môžu pridávať render enginy, ako je uvedené vyššie.
- **Pripojte svojho AI asistenta.** Kontrakt nástrojov a kontroly ôsmich aplikácií prešli, spolu 454 nástrojov. Pripojenie jedným kliknutím v Studio, hostiteľský konektor pre asistentov v prehliadači, váš vlastný kľúč v Studio a publikovaný balík zatiaľ nie sú sľúbené. Aplikácie neobsahujú vlastnú AI. Pozrite [Použitie ModelCraft s AI asistentmi](topic:use-with-ai-assistants).

### Opravy vo verzii 0.8.1

- **Sekcia tried DWG.** Sekcia tried súboru DWG sa čítala ako nesprávny typ, čo mohlo pri importe poškodiť súbor. Teraz sa číta správne, v ModelCraft aj v ostatných aplikáciách, ktoré čítajú DWG.
- **Tablety na výšku.** Voľná výška mriežky ide na plátno a rozloženie listu začína pri 760 pixeloch šírky alebo menej. Štýlový hárok ModelCraft má túto zmenu tiež.
- **Jazyk v Studio.** CadCraft Studio a zabalené edície môžu prepínať jazyk počas behu; predtým boli len v angličtine. Toto nebolo otestované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.

### Zatiaľ nie je v tejto verzii

- **Nie je podpísané kódom.** Windows môže zobraziť SmartScreen: vyberte {{ui:Ďalšie informácie}}, potom {{ui:Napriek tomu spustiť}}. Na Macu kliknite pravým tlačidlom a vyberte {{ui:Otvoriť}}. Verzie pre obchody sú pozastavené a zostava pre iPad a iPhone nebola pre 0.8.1 znovu zostavená.
- Iný program kreslí obrázok bez doplnku render enginu, panoramatické alebo stereo kamery a obrázok oblohy cez iný program a plugin, ktorý otvára scénu Unreal, ešte nie sú k dispozícii. Súbory sa zapisujú; plugin nie je vydaný a nebol spustený v Unreal.
- Voľné plochy: G3 a trieda A sa nemerajú ani neuvádzajú, orezanie a telesá prídu neskôr.
- Obrázky z iných programov nie sú pixel po pixeli ako naše: zhodujú sa len kamera, slnko, svetlá a expozícia.
- Oprava prepínania jazyka v Studio vo verzii 0.8.1 nie je otestovaná na každej platforme.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet). Pre predchádzajúce vydanie pozrite [Novinky vo verzii 0.7](topic:whats-new-0-7).
