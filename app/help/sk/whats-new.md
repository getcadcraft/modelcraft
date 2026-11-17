---
title: Čo je nové vo verzii 0.9
summary: Tlačová fáza s vlastným slicerom a odosielaním cez USB, Klipper, OctoPrint a PrusaLink, slicing pre živicu a doplnky súborových formátov, tok materiálu, doplnky digitálneho dvojčaťa a výrobnej haly, NURBS zaoblenia, zhrubnutie a prispôsobenie skenu, AR na mieste a desať metód oblúka.
keywords: čo je nové, poznámky k vydaniu, zoznam zmien, 0.9, tlačová fáza, 3d tlač, odoslať na 3D tlačiareň, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, živica, tlač živicou, goo, sl1, ctb, anycubic, test expozície, tok materiálu, digitálne dvojča, výrobná hala, plc, dopravník, nurbs, zaoblenie, zhrubnutie, prispôsobenie skenu, ar, na mieste, metódy oblúka, jednotky, zmeny, 0.8, 0.8.1, verzia, nové funkcie, motor vykresľovania, motor, otvoriť v, usd, gltf, unreal, doplnkový motor, nurbs, plochy, loft, ťah po dráhe, spojitosť, g0, g1, g2, zebra, step, iges, povedz scénu, scéna, počasie, denná doba, ročné obdobie, asistent, materiál z fotografie, fotografia, fotografia náčrtu, zariadiť, zariadiť miestnosť, šikmý, šikmý rez, rozdelenie, kontrola tlače, problémy, mriežka vlastností, lampy, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg, naživo
from: 169048a2
---

Toto sa zmenilo v ModelCraft 0.9 oproti 0.8.1. ModelCraft teraz siaha až k tlačiarni a výrobnej hale: môžete dávať veci na tlačovú plochu a odosielať ich bez exportu, pripraviť na tlač vlákno alebo živicu a navrhnúť linku na manipuláciu s materiálom. Toto je CadCraft Studio 0.9 a jeho osem aplikácií; väčšina nových funkcií nižšie sú doplnky.

## Nové

### 3D tlač

- **Tlačová fáza.** Kliknite na {{ui:Tlačová fáza}} na paneli nástrojov. Pridajte položky knižnice na tlačovú plochu tlačiarne, rozmiestnite ich, pozrite sa na rozrezané vrstvy a stlačte {{ui:Odoslať na 3D tlačiareň}}, bez exportu STL. Patrí k doplnku 3D tlač, ktorý je predvolene zapnutý a dá sa odstrániť ako každý doplnok. Pozri [Umiestnenie vecí na tlačovú plochu a ich odoslanie na tlačiareň](topic:print-stage).
- **Náš vlastný slicer vlákna.** {{ui:CadCraft basic (súčasť, najrýchlejší)}} je slicer v zozname **Slicer** na karte: steny, kože, výplň, podpery a obrubu (skirt), na pozadí, aby stránka zostala použiteľná. {{ui:Náhľad vrstiev}} s posuvníkom **Hladina** ukáže vrstvy pred odoslaním. Profily tlačiarní, ako štýly Ender-3 a Prusa MK4, nesú vlastný úvodný G-kód.
- **Odosielanie.** Cez USB (Chrome alebo Edge na počítači, so stránkou ponechanou otvorenou), alebo na Klipper (Moonraker), OctoPrint či PrusaLink vo vašej sieti. Nič sa nepripája ani neodosiela bez kliknutia a odosielanie najprv pýta potvrdenie.
- **Ďalšie slicery.** Kiri:Moto, PrusaSlicer a OrcaSlicer sú vlastné doplnky, predvolene vypnuté; pridajte ich z karty alebo z {{ui:Nastavenia}} › {{ui:Doplnky}}. PrusaSlicer a OrcaSlicer používajú vašu vlastnú nainštalovanú kópiu z CadCraft Studio. Doplnok tlačiarní Bambu Lab slicuje s vaším OrcaSlicer a jeho predvoľbami P2S a vyžaduje Studio na počítači.
- **Tlač živicou.** Doplnky pre živicu (predvolene vypnuté) vytvárajú obrázky vrstiev pre obrazovku vašej tlačiarne, s dutinami a odvzdušňovacími otvormi, podložkou a podperami, náhľadom vrstiev a časom, živicou a cenou. Doplnky formátov súborov zapisujú Elegoo GOO, SL1, Chitubox (CBDDLP a CTB 2 až 5) a Anycubic (PWMX a PWS). Test expozície živicou vytvorí rebrík z piatich expozícií. Pozri [Slicing pre tlačiareň na živicu](topic:resin-printing).
- **Bez zmeny.** {{ui:Exportovať}} › {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}, nástroje tlače a Rozdelenie na tlač fungujú ako vo verzii 0.8. Pozri [Príprava modelu na 3D tlač](topic:print-3d).

### Tok materiálu, digitálne dvojča a výrobná hala

Tieto tri sú doplnky, vypnuté, kým ich nezapnete v {{ui:Nastavenia}} › {{ui:Doplnky}}, a každý má vlastnú pomoc, keď je zapnutý.

- **Tok materiálu.** Panel s názvom Tok materiálu rozloží dopravníky, stanice, vyrovnávacie zásobníky a dráhy AGV v 3D pohľade, spustí simuláciu so semenom, prehrá ju a zobrazí priepustnosť, časy dodania a rady, s výsledkami uloženými ako CSV. Objednávky môžu prísť zo súboru CSV. Robotické bunky sa dajú skontrolovať a exportovať. Prepojenie PLC má mäkký režim a skutočný režim cez Modbus TCP, ktorý funguje len v CadCraft Studio.
- **Digitálne dvojča.** Číta rozloženie Toku materiálu a spúšťa softvérové PLC na ňom, s chybami, ktoré môžete vynútiť, testami zásob, porovnaním rozložení a kusovníkom.
- **Výrobná hala.** Mení stanice na stroje a bunky, číta ich živo alebo zo simulátora, a vedie radu úloh a jednoduchú OEE. Len číta: táto zostava nedokáže zapisovať do stroja ani PLC.

### Povrchy, modely a výkresy

- **Zaoblenia, zhrubnutie a booleovské operácie na NURBS.** Panel {{ui:Povrchy}} má {{ui:Zaoblenie medzi plochami}}, {{ui:Zaoblenie viacerých hrán}}, {{ui:Zhrubnutie na teleso}} a {{ui:Zjednotenie}}, {{ui:Odčítanie}} a {{ui:Prienik}}, každé s nameranou odchýlkou. Pozri [Voľné tvary povrchov (NURBS)](topic:nurbs-surfaces).
- **Prispôsobenie povrchov skenu.** Vyberte skenovanú sieť a použite {{ui:Prispôsobiť plochy skenu}} v skupine **Sken**, potom {{ui:Zošiť plochy do telesa}}. Je to prvé prispôsobenie, nie úplný balík na spätné inžinierstvo.
- **Živé prepojenie z modelára .3dm.** Jednosmerné, z Rhino 8 alebo Grasshoppera, a potrebuje CadCraft Studio na tom istom počítači. Pozri [Udržanie modelu .3dm živým](topic:live-3dm-link).
- **Pozrite model na mieste.** {{ui:Zobrazenie na mieste (AR, telefón)}} v ponuke {{ui:Pohľady}} funguje na telefóne s Androidom s prehliadačom Chrome. Pozri [Pozrite si model na mieste s telefónom Android (AR)](topic:ar-on-site).
- **Metódy oblúka.** Rozbaľovací zoznam {{ui:Metódy oblúka}} ponúka desať spôsobov kreslenia oblúka vrátane {{ui:3 body}} a {{ui:Začiatok, stred, koniec}}.
- **Viac jednotiek.** Hmotnosti (kg, lb, t, ton) a teploty (stupne C, F, K a R) sa chápu tam, kde zadávate hodnoty s jednotkami.

## V každej aplikácii

- **Popisky.** Text pri prechode myšou na tlačidlách a orezané popisky sú bootstrapový tooltip.
- **Zatvárateľný úvodný tip.** Karta tipu na prázdnej ploche kreslenia má malé zatváracie x. Zostane zatvorená a paleta príkazov ju môže znova ukázať.
- **Posúvateľné pruhy kariet.** Pruh kariet panela, ktorý sa nezmestí, sa posúva namiesto toho, aby bol orezaný.
- **Názvy kariet.** S otvoreným dokumentom začína karta prehliadača názvom dokumentu, potom ModelCraft a CadCraft. Bodka je pred ním, kým je neuložené.
- **Rozloženie.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › Rozloženie drží rozloženia v rozbaľovacom zozname, s voľbou použiť rozloženie len pre túto aplikáciu a tlačidlom na obnovenie rozloženia.
- **Jazyky.** Zoznam jazykov v Nastaveniach nasleduje jazykové súbory, ktoré zostavenie obsahuje. Iné jazyky než angličtina sú strojové koncepty.
- **Naživo a Knižnica.** Live TeamWork ukazuje živé kurzory a mená a kolekcie Knižnice dávajú každej aplikácii predvolenú kolekciu.

## Opravené

- {{ui:Prehrať}} sa zmení na {{ui:Pozastaviť}}, keď sa animácia prehráva, a {{key:Space}} prehráva a pozastavuje, keď je otvorená časová os.
- Vykreslenie obrázka sa vráti na WebGL, keď grafická karta nedokáže spustiť sledovač lúčov. Živý pohľad vykreslenia môže stále ukazovať chybu; neoveroval sa na počítači so Windows s týmto ovládačom.
- Skutočný režim toku materiálu sa znova pripojí po tom, čo spojenie skončilo na odpovediach výnimky PLC.

## Úprimné limity

- Nič sa nevytlačilo na skutočnej tlačiarni: ani vlákno, ani živica, ani cez Bambu Connect. Súbory živice boli načítané späť len vlastnými čítačkami CadCraft.
- Digitálne dvojča a Výrobná hala boli testované len so simulátormi a známymi odpoveďami, bez skutočného PLC, linky alebo protokolu. Sú to pomôcky na kontrolu, nie bezpečnostné overenie. Fyzika pokrýva len kvádre, až osem záťaží.
- Prepojenie Rhino a Grasshopper nikdy nebežalo v skutočných programoch.
- Jazyky iné než angličtina sú strojové koncepty.

## Skôr: 0.8 a 0.8.1

Toto sa zmenilo v ModelCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti 0.7. Dialóg {{ui:Vykresliť obrázok…}} teraz môže poslať scénu do iného programu, panel Povrchy vytvára hladké voľné povrchy a asistent, ktorého pripojíte, dokáže nastaviť celú scénu jednou vetou.

### Nové

**Vykresľovanie**

- **Voľba motora.** Dialóg {{ui:Vykresliť obrázok…}} má zoznam **Motor** nad Režimom. Naše dva vlastné motory, Rýchly a Sledovač lúčov, sú predvolené a fungujú všade. Ďalšie položky uložia scénu ako balík (model ako súbor USD, plus súbor nastavení s presnými hodnotami materiálov, zapnutými lampami, slnkom, oblohou, expozíciou a kamerou), aby ste ho vzali do iného programu. Obrázok nakreslený iným programom hovorí, ktorý program a verziu ho vytvoril. Pozri [Voľba programu, ktorý nakreslí obrázok](topic:render-engines).
- **Otvoriť v inom programe.** Zoznam Motor môže uložiť scénu ako súbor USD, súbor glTF (`.glb`) alebo priečinok projektu Unreal (`.zip`), v prehliadači aj v CadCraft Studio. V Studiu ju môže tiež spustiť usdview alebo vlastný program počítača pre daný súbor. Pozri [Otvorenie scény v inom programe](topic:render-open-in).
- **Odoslanie do herného motora zo Studia.** Studio zapíše scénu do projektu Unreal Engine a pri každom odoslaní ju udrží v súlade, len jedným smerom. Vaše vlastné úpravy žijú vo vrstve, ktorú CadCraft nikdy nezapíše. Pozri [Odoslanie scény do herného motora](topic:render-unreal).
- **Motory z doplnkov.** Doplnok môže pridať motor do zoznamu. Motor napísaný v JavaScripte kreslí v prehliadači aj v Studiu; ten, ktorý spúšťa program, potrebuje váš súhlas v Studiu. Pozri [Kreslenie obrázka iným programom](topic:render-other-program) a [Pridanie motora vykresľovania doplnkom](topic:render-engine-addons).
- **Povedz scénu.** Povedzte svojmu pripojenému asistentovi "súmrak, jemný dážď, jesenné stromy, ľudia na námestí" a ModelCraft ju nastaví jedným krokom: slnko sa presunie na dátum a čas, aby tiene nasledovali, obloha sa zmení, objavia sa mokré plochy a stromy a ľudia sa umiestnia ako skutočné objekty na značkách, ktoré môžete skryť, presunúť alebo zmazať. Denná doba, dátum alebo ročné obdobie a počasie (jasno, zamračené, hmla, jemný dážď, dážď, búrka) fungujú aj samostatne a ďalšia žiadosť mení tú istú scénu. Hmla sa zobrazuje v obrázku vo vysokej kvalite na grafickej karte; ostatné motory ukazujú oblohu, svetlo a mokré plochy. Dážď sa nekreslí ako padajúce čiary.

**Materiály**

- **Materiál z jednej fotografie.** Dajte ModelCraft fotografiu povrchu (stena, podlaha, kameň) a vytvorí dlaždicový materiál: osvetlenie naprieč fotografiou sa vyrovná, hrany sa spoja a mapa farby, mapa drsnosti a mapa normál sa vypočítajú z obrázka. Je to obyčajné spracovanie obrázka vo vašej fotografii, bez natrénovaného modelu. Drsnosť je odhad. Plochá, štvorcová, rovná fotografia dá najlepšiu dlaždicu; silný vzor, ako tehly, môže ukázať mäkký duch tam, kde je spoj zmiešaný.

**Plochy**

- **Voľné tvary povrchov.** Panel {{ui:Povrchy}} vytvára krivky NURBS a neorezané plochy: krivky cez body, loft, lineárne, vytiahnutie, rotačné, ťahy po jednej alebo dvoch koľajniciach, plochy zo siete kriviek, záplaty zo štyroch hrán, zhodu a prechod. Každá spoločná hrana sa meria ako G0, G1 alebo G2 (medzera, uhol, skok zakrivenia) na presných plochách a hrana horšia, ako ste žiadali, sa zobrazí v paneli Problémy s opravou **Zhoda**. Pruhy zebra a farby zakrivenia sa kreslia z presných plôch. Súbory STEP a IGES sa vyvážajú aj dovážajú. Pozri [Voľné tvary povrchov (NURBS)](topic:nurbs-surfaces).

**Lokalita a miestnosti**

- **Náčrt z fotografie na zem.** {{ui:Súbor}} › {{ui:Importovať fotografiu náčrtu…}} premení fotografiu ručného náčrtu z telefónu na hrany na zemi v mierke, ktorú zadáte: jedna skupina, so značkou pre každú farbu pera. Papier sa nájde a narovná na vašom počítači a nič sa nikam neposiela. Pozri [Model na situačnom pláne](topic:site-plan).
- **Zariadenie miestnosti.** Vyberte podlahu a použite {{ui:Usporiadanie}} › {{ui:Zariadiť miestnosť…}}. Spálňa, obývačka, jedáleň, kuchyňa, kúpeľňa alebo kancelársky nábytok sa umiestni podľa pravidiel, pri stenách a mimo dverí a okien, v jednej skupine, ktorú môžete odstrániť jedným krokom. Je to predvolené rozloženie na vašu kontrolu, nie návrh. Pozri [Štartovacia knižnica](topic:starter).

**3D tlač**

- **Šikmé rezy.** Rozdelenie na tlač môže šikmo zrezať až do 60 stupňov, čo dá kúskom viac plochy na lepenie. Konektory stoja kolmo na rez. Pozri [Rozdelenie modelu na tlač](topic:print-split).
- **Kontrola tlače v Problémoch.** Zistenia kontroly 3D tlače sa zobrazujú v paneli Problémy s označeniami na modeli a Oprava ich odtiaľ opraví. Pozri [Podpery, hrúbka stien, vydlabanie a oprava](topic:print-tools).

**V každej aplikácii**

- **Jazyky.** Pomoc a aplikácie prichádzajú v 54 jazykoch. Desať je nových: litovčina, lotyština, bosniančina, maráthí, telugu, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Iné jazyky než angličtina sú strojové koncepty, kým ich neprečíta rodený hovorca, a témy pomocníka môžu byť stále v angličtine.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, herný ovládač a ovládanie MIDI môžu ovládať aplikácie, pre všetky alebo pre jednu.
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › Riadky panela nástrojov nastavuje Zalamovať (ako predtým), 2 riadky alebo 1 riadok. Lišta, ktorá sa nezmestí, sa posúva do strán namiesto toho, aby brala miesto z kresby. Zalamovanie zostáva predvolené.
- **Mriežka vlastností.** Polia lámp v ModelCraft používajú spoločnú mriežku: zbaliteľné kategórie, stĺpce popiskov a hodnôt a hustotu Kompaktná. Zadaná aritmetika ako `2*450` ďalej funguje.
- **Problémy.** Panel Problémy (tlačidlo varovania na paneli aplikácie) zdieľajú všetky aplikácie. V ModelCraft obsahuje kontrolu tlače a varovania o spojitosti plôch.
- **Naživo.** Relácia Live TeamWork ukazuje, kto je kde. Pozri [Spoločný model s Live TeamWork](topic:work-live).
- **Doplnky.** Doplnky môžu pridávať motory vykresľovania, ako vyššie.
- **Pripojte svoju AI.** Zmluva nástrojov a kontroly ôsmich aplikácií prechádzajú, so 454 nástrojmi celkom. Pripojenie jedným kliknutím v Studiu, hostiteľský konektor pre asistentov v prehliadači, váš vlastný kľúč v Studiu a publikovaný balík zatiaľ nie sú sľúbené. Aplikácie nemajú vlastnú AI. Pozri [Používanie ModelCraft s AI asistentmi](topic:use-with-ai-assistants).

### Opravené vo verzii 0.8.1

- **Oddiel tried DWG.** Oddiel tried v súbore DWG sa čítal ako nesprávny typ, čo mohlo pri importe súbor rozbiť. Teraz sa číta správne, v ModelCraft aj v ďalších aplikáciách, ktoré čítajú DWG.
- **Tablety na výšku.** Voľná výška mriežky ide na plátno a rozloženie listu sa začína pri 760 pixeloch šírky alebo menej. Štýl ModelCraft má túto zmenu tiež.
- **Jazyk v Studiu.** CadCraft Studio a zabalené edície môžu prepnúť jazyk počas behu; predtým boli len v angličtine. Ešte to nebolo testované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.

### Ešte nie je v tejto verzii

- **Nie je podpísané kódom.** Windows môže zobraziť SmartScreen: zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Aj tak spustiť}}. Na Macu kliknite pravým tlačidlom a zvoľte {{ui:Otvoriť}}. Zostavenia pre obchody sú pozastavené a zostavenie pre iPad a iPhone nebolo prestavané pre 0.8.1.
- Iný program kresliaci obrázok bez doplnku motora vykresľovania, panoramatické alebo stereo kamery a obraz oblohy cez iný program a plugin, ktorý otvára fázu Unreal, zatiaľ nie sú. Súbory sa zapisujú; plugin nie je vydaný a nebol spustený v Unreal.
- Voľné tvary povrchov: G3 a trieda A sa nemerajú ani neuvádzajú; orezávanie a telesá prídu neskôr.
- Obrázky z iných programov nie sú pixel po pixeli ako naše: zhodujú sa len kamera, slnko, lampy a expozícia.
- Oprava 0.8.1 pre prepnutie jazyka v Studiu nie je testovaná na každej platforme.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet). Pre predchádzajúce vydanie pozri [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
