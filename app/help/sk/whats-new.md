---
title: Novinky vo verzii 0.8 a 0.8.1
summary: Výber renderovacieho enginu so súbormi pre iné programy, voľné NURBS plochy s meranou spojitosťou, scéna, ktorú opíšete svojmu asistentovi, materiál z jednej fotografie, fotografia náčrtu na zemi, zariadené miestnosti, šikmé rezy pre 3D tlač a kontrola tlače v paneli Problémy.
keywords: čo je nové, novinky, poznámky k vydaniu, changelog, zmeny, 0.8, 0.8.1, verzia, nové funkcie, render engine, engine, otvoriť v, usd, gltf, unreal, engine z doplnku, nurbs, plochy, loft, ťahanie, spojitosť, g0, g1, g2, zebra, step, iges, opíšte scénu, scéna, počasie, denná doba, ročné obdobie, asistent, materiál z fotografie, fotografia, fotografia náčrtu, zariadiť, zariadiť miestnosť, šikmý rez, rozdeliť, kontrola tlače, problémy, mriežka vlastností, lampy, jazyky, vstupné zariadenia, riadky panela nástrojov, dwg, naživo
from: e4989b17
---

Toto sa zmenilo vo verziách ModelCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02), v porovnaní s verziou 0.7. Dialóg {{ui:Vykresliť obrázok…}} teraz môže poslať scénu inému programu, panel Povrchy vytvára hladké voľné plochy a asistent, ktorého pripojíte, môže nastaviť celú scénu jednou vetou.

## Nové

### Vykresľovanie

- **Výber enginu.** {{ui:Vykresliť obrázok…}} má zoznam Engine nad položkou Režim. Naše vlastné dva enginy, Rýchly a Path tracer, sú predvolené a fungujú všade. Ostatné položky uložia scénu ako balík (model ako súbor USD, plus nastavenia s presnými hodnotami materiálov, zapnuté lampy, slnko, oblohu, expozíciu a kameru), ktorý môžete vziať do iného programu. Obrázok nakreslený iným programom uvádza, ktorý program a ktorú verziu ho vytvoril. Pozri [Výber programu, ktorý nakreslí obrázok](topic:render-engines).
- **Otvorenie v inom programe.** Zoznam Engine môže uložiť scénu ako súbor USD, súbor glTF (`.glb`) alebo priečinok projektu Unreal (`.zip`), v prehliadači aj v CadCraft Studio. V Studio ju môže tiež spustiť usdview alebo vlastný program počítača pre tento súbor. Pozri [Otvorenie scény v inom programe](topic:render-open-in).
- **Odoslanie do herného enginu zo Studio.** Studio zapíše scénu do projektu Unreal Engine a pri každom odoslaní ju aktualizuje, iba jedným smerom. Vaše vlastné úpravy sú vo vrstve, do ktorej CadCraft nikdy nezapisuje. Pozri [Odoslanie scény do herného enginu](topic:render-unreal).
- **Enginy z doplnkov.** Doplnok môže pridať engine do zoznamu. Ten napísaný v JavaScripte kreslí v prehliadači aj v Studio; ten, ktorý spúšťa program, potrebuje váš súhlas v Studio. Pozri [Kreslenie obrázka iným programom](topic:render-other-program) a [Pridanie renderovacieho enginu doplnkom](topic:render-engine-addons).
- **Opíšte scénu.** Povedzte svojmu pripojenému asistentovi "súmrak, jemný dážď, jesenné stromy, ľudia na námestí" a ModelCraft ju nastaví v jednom kroku: slnko sa presunie na dátum a čas, aby tiene sledovali, obloha sa zmení, objavia sa mokré plochy a stromy a ľudia sa umiestnia ako skutočné objekty na značkách, ktoré môžete skryť, presunúť alebo zmazať. Denná doba, dátum alebo ročné obdobie a počasie (jasno, zamračené, hmla, jemný dážď, dážď, búrka) fungujú aj samostatne a ďalšia požiadavka zmení tú istú scénu. Hmla sa zobrazí vo vysokokvalitnom obrázku na grafickej karte; ostatné enginy zobrazia oblohu, svetlo a mokré plochy. Dážď sa nekreslí ako padajúce pruhy.

### Materiály

- **Materiál z jednej fotografie.** Dajte ModelCraft fotografiu povrchu (steny, podlahy, kameňa) a vytvorí dlaždicový materiál: osvetlenie naprieč fotografiou sa vyrovná, okraje sa spoja a mapa farieb, mapa drsnosti a normálová mapa sa vypočítajú z obrázka. Je to bežné spracovanie obrázka vášho vlastného snímku, bez natrénovaného modelu. Drsnosť je odhad. Jednoduchá, štvorcová, rovná fotografia dá najlepšiu dlaždicu; výrazný vzor, napríklad tehly, môže ukázať jemný prízrak na mieste spoja, kde je spoj zmiešaný.

### Povrchy

- **Voľné plochy.** Panel {{ui:Povrchy}} vytvára NURBS krivky a neorezané plochy: krivky cez body, loft, priamkové plochy, vytiahnutie, rotačné teleso, ťahanie po jednej alebo dvoch dráhach, plochy zo siete kriviek, záplaty zo štyroch hrán, zhodu a prechod. Každá spoločná hrana sa meria ako G0, G1 alebo G2 (medzera, uhol, skok zakrivenia) na presných plochách a hrana horšia, než ste žiadali, sa zobrazí v paneli Problémy s opravou **Zarovnať**. Zebrové pruhy a farby zakrivenia sa kreslia z presných plôch. Súbory STEP a IGES sa exportujú aj importujú. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).

### Pozemok a miestnosti

- **Fotografia náčrtu na zemi.** {{ui:Súbor}} › {{ui:Importovať fotografiu náčrtu…}} premení fotografiu ručného náčrtu z telefónu na hrany na zemi v mierke, ktorú zadáte: jedna skupina, so značkou pre každú farbu pera. Papier sa na vašom počítači nájde a narovná a nič sa nikam neodosiela. Pozri [Model na situačnom pláne](topic:site-plan).
- **Zariadiť miestnosť.** Vyberte podlahu a použite {{ui:Usporiadanie}} › {{ui:Zariadiť miestnosť…}}. Nábytok do spálne, obývačky, jedálne, kuchyne, kúpeľne alebo kancelárie sa umiestni podľa pravidiel, pri stenách a mimo dverí a okien, do jednej skupiny, ktorú môžete odstrániť jedným krokom. Je to predvolené rozloženie na váš posúdenie, nie návrh. Pozri [Štartovacia knižnica](topic:starter).

### 3D tlač

- **Šikmé rezy.** Rozdelenie na tlač môže nakloniť rezy až o 60 stupňov, čo dá dielom väčšiu plochu na lepenie. Spojky stoja kolmo na rez. Pozri [Rozdelenie modelu na tlač](topic:print-split).
- **Kontrola tlače v paneli Problémy.** Zistenia kontroly 3D tlače sa zobrazia v paneli Problémy so značkami na modeli a opraviť ich možno priamo odtiaľ. Pozri [Podpery, hrúbka steny, dutinovanie a oprava](topic:print-tools).

### Vo všetkých aplikáciách

- **Jazyky.** Pomocník a aplikácie sú k dispozícii v 54 jazykoch. Desať je nových: litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Jazyky iné než angličtina sú strojové koncepty, kým ich nepreskúma rodený hovoriaci, a témy pomocníka môžu byť stále v angličtine.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, herný ovládač a ovládanie MIDI môžu ovládať aplikácie, pre všetky alebo pre jednu.
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › Riadky panela nástrojov nastavuje Zalamovanie (ako doteraz), 2 riadky alebo 1 riadok. Panel, ktorý sa nezmestí, sa posúva do strán namiesto toho, aby zoberal miesto z výkresu. Zalamovanie zostáva predvolené.
- **Mriežka vlastností.** Polia lámp v ModelCraft používajú spoločnú mriežku: zbaliteľné kategórie, stĺpce názvu a hodnoty a hustotu Kompaktná. Zadávané aritmetické výrazy ako `2*450` naďalej fungujú.
- **Problémy.** Panel Problémy (tlačidlo upozornenia v lište aplikácie) je spoločný pre všetky aplikácie. V ModelCraft obsahuje kontrolu tlače a upozornenia na spojitosť plôch.
- **Naživo.** Relácia Live TeamWork ukazuje, kto je kde. Pozri [Modelovanie spolu s Live TeamWork](topic:work-live).
- **Doplnky.** Doplnky môžu pridávať renderovacie enginy, ako je uvedené vyššie.
- **Pripojte svoju AI.** Zmluva o nástrojoch a kontroly ôsmich aplikácií prešli, spolu 454 nástrojov. Jednokliknutie pripojenie v Studio, hostované pripojenie pre asistentov v prehliadači, váš vlastný kľúč v Studio a publikovaný balík zatiaľ nie sú sľúbené. Aplikácie neobsahujú vlastnú AI. Pozri [Použitie ModelCraft s AI asistentmi](topic:use-with-ai-assistants).

## Opravené vo verzii 0.8.1

- **Sekcia tried DWG.** Sekcia tried súboru DWG bola načítaná ako nesprávny typ, čo mohlo pri importe poškodiť súbor. Teraz sa načíta správne, v ModelCraft aj v ostatných aplikáciách, ktoré čítajú DWG.
- **Tablety na výšku.** Voľná výška mriežky sa pridá k plátnu a rozloženie listu začína pri 760 pixeloch na šírku alebo menej. Štýl ModelCraft má túto zmenu tiež.
- **Jazyk v Studio.** CadCraft Studio a zabalené vydania môžu počas behu prepínať jazyk; predtým boli iba v angličtine. Toto ešte nebolo otestované na všetkých platformách; dajte nám vedieť, ak sa jazyk nezmení.

## Ešte nie je v tejto verzii

- **Nie je podpísané kódom.** Windows môže zobraziť SmartScreen: vyberte {{ui:Viac informácií}}, potom {{ui:Spustiť aj tak}}. Na Macu kliknite pravým tlačidlom a vyberte {{ui:Otvoriť}}. Verzie pre obchody sú pozastavené a zostavenie pre iPad a iPhone sa pre 0.8.1 neprebudovalo.
- Kreslenie obrázka iným programom bez doplnku renderovacieho enginu, panoramatické alebo stereo kamery a obrázok oblohy cez iný program a plugin, ktorý otvára Unreal scénu, zatiaľ nie sú k dispozícii. Súbory sa zapisujú; plugin nie je vydaný a nebol spustený v Unreal.
- Voľné plochy: G3 a trieda A sa nemerajú ani neuvádzajú; orezávanie a telesá prídu neskôr.
- Obrázky z iných programov nie sú pixel po pixeli ako naše: zhodné sú iba kamera, slnko, lampy a expozícia.
- Oprava prepínania jazyka v Studio vo verzii 0.8.1 nebola otestovaná na všetkých platformách.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet). Pre predchádzajúcu verziu pozri [Novinky vo verzii 0.7](topic:whats-new-0-7).
