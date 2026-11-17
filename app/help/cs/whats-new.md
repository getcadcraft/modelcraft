---
title: Co je nového ve verzi 0.9
summary: Fáze tisku s vlastním slicerem a odesíláním přes USB, Klipper, OctoPrint a PrusaLink, slicování pryskyřice a doplňky souborů, doplňky toku materiálu, digitálního dvojčete a výrobního podlaží, zaoblení NURBS, ztloustnutí a přizpůsobení skenu, AR na stavbě a deset metod oblouku.
keywords: co je nového, what's new, poznámky k vydání, changelog, 0.9, fáze tisku, 3d tisk, odeslání na 3D tiskárnu, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, pryskyřice, tisk pryskyřicí, goo, sl1, ctb, anycubic, test expozice, tok materiálu, digitální dvojče, výrobní podlaží, plc, dopravník, nurbs, zaoblení, ztloustnutí, přizpůsobení skenu, ar, na stavbě, metody oblouku, jednotky, změny, 0.8, 0.8.1, verze, nové funkce, engine vykreslování, engine, otevřít v, usd, gltf, unreal, engine doplňků, plochy, loft, sweep, spojitost, g0, g1, g2, zebra, step, iges, říct scénu, scéna, počasí, denní doba, roční období, asistent, materiál z fotografie, fotografie, fotografie náčrtu, zařídit, zařídit místnost, šikmý řez, rozdělení, kontrola tisku, problémy, mřížka vlastností, lampy, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg, živě
from: 169048a2
---

Toto se změnilo v ModelCraftu 0.9 oproti 0.8.1. ModelCraft nyní dosáhne na tiskárnu a výrobní podlaží: můžete položit věci na tiskovou podložku a odeslat je bez exportu, slicovat pro filament nebo pryskyřici a navrhnout linku pro manipulaci s materiálem. Toto je CadCraft Studio 0.9 a jeho osm aplikací; většina nových funkcí níže jsou doplňky.

## Nové

### 3D tisk

- **Fáze tisku.** Klikněte na {{ui:Fáze tisku}} na panelu nástrojů. Přidejte položky z knihovny na podložku tiskárny, uspořádejte je, prohlédněte si nařezané vrstvy a stiskněte {{ui:Odeslat na 3D tiskárnu}}, bez nutnosti exportovat STL. Patří do doplňku 3D tisk, který je ve výchozím stavu zapnutý a lze jej odstranit jako každý doplněk. Viz [Položení věcí na tiskovou podložku a jejich odeslání na tiskárnu](topic:print-stage).
- **Náš vlastní slicer filamentu.** {{ui:CadCraft basic (součást, nejrychlejší)}} je slicer v seznamu **Slicer** na kartě: stěny, pláště, výplň, podpěry a obvod, na pomocném vláknu, aby stránka zůstala použitelná. {{ui:Náhled vrstev}} s posuvníkem **Vrstva** ukáže vrstvy před odesláním. Profily tiskáren, například styly Ender-3 a Prusa MK4, nesou vlastní počáteční G-kód.
- **Odesílání.** Přes USB (Chrome nebo Edge na počítači, se stránkou ponechanou otevřenou), nebo na Klipper (Moonraker), OctoPrint nebo PrusaLink ve vaší síti. Nic se nepřipojí ani neodešle bez kliknutí a odeslání se nejprve zeptá.
- **Další slicery.** Kiri:Moto, PrusaSlicer a OrcaSlicer jsou vlastní doplňky, ve výchozím stavu vypnuté; přidejte je z karty nebo z {{ui:Nastavení}} › {{ui:Doplňky}}. PrusaSlicer a OrcaSlicer používají vaši vlastní nainstalovanou kopii z CadCraft Studio. Doplněk tiskáren Bambu Lab slicuje pomocí vašeho OrcaSlicer a jeho předvoleb P2S a vyžaduje Studio na počítači.
- **Tisk pryskyřicí.** Doplňky pro pryskyřici (ve výchozím stavu vypnuté) vytvářejí obrázky vrstev pro displej vaší tiskárny, s vydutím a odvětrávacími otvory, raftem a podpěrami, náhledem vrstev a čas, spotřebu pryskyřice a náklady. Doplňky formátů souborů zapisují Elegoo GOO, SL1, Chitubox (CBDDLP a CTB 2 až 5) a Anycubic (PWMX a PWS). Test expozice pryskyřicí vytvoří žebřík pěti expozic. Viz [Slicování pro tiskárnu pryskyřice](topic:resin-printing).
- **Beze změny.** {{ui:Export}} › {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}, nástroje pro tisk a Rozdělit pro tisk fungují jako ve verzi 0.8. Viz [Příprava modelu pro 3D tisk](topic:print-3d).

### Tok materiálu, digitální dvojče a výrobní podlaží

Tyto tři jsou doplňky, vypnuté, dokud je nezapnete v {{ui:Nastavení}} › {{ui:Doplňky}}, a každý má vlastní nápovědu, jakmile je zapnutý.

- **Tok materiálu.** Panel s názvem Tok materiálu rozmisťuje dopravníky, stanice, vyrovnávací zásobníky a dráhy AGV ve 3D pohledu, spouští simulaci s pevným semenem náhody, přehrává ji a ukazuje propustnost, dodací lhůty a fronty, s výsledky uloženými jako CSV. Objednávky mohou pocházet ze souboru CSV. Robotické buňky lze zkontrolovat a exportovat. Propojení PLC má měkký režim a skutečný režim přes Modbus TCP, který funguje jen v CadCraft Studio.
- **Digitální dvojče.** Čte rozvržení Toku materiálu a spouští na něm měkké PLC s poruchami, které můžete vynutit, testy zásob, porovnáním rozvržení a kusovníkem.
- **Výrobní podlaží.** Přemění stanice na stroje a buňky, čte je živě nebo ze simulátoru a vede frontu úloh a jednoduché OEE. Pouze čte: tato verze nemůže zapisovat do stroje ani do PLC.

### Plochy, modely a výkres

- **Zaoblení, ztloustnutí a booleany na NURBS.** Panel {{ui:Plochy}} má {{ui:Zaoblení mezi plochami}}, {{ui:Zaoblení více hran}}, {{ui:Ztloustit na těleso}} a Sjednotit, Odečíst a Průnik, každý se změřenou odchylkou. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).
- **Přizpůsobení ploch skenu.** Vyberte naskenovanou síť a použijte {{ui:Přizpůsobit povrchy skenu}} ve skupině **Sken**, potom {{ui:Sešít povrchy do tělesa}}. Je to první přizpůsobení, ne úplný balík pro zpětné inženýrství.
- **Živé propojení z modeláře .3dm.** Jednosměrné, z Rhino 8 nebo Grasshopperu, a potřebuje CadCraft Studio na témže počítači. Viz [Udržet model .3dm živý](topic:live-3dm-link).
- **Model na stavbě.** {{ui:Zobrazení na stavbě (AR, telefon)}} v nabídce {{ui:Pohledy}} funguje na telefonu s Androidem a Chromem. Viz [Zobrazení modelu na stavbě s telefonem s Androidem (AR)](topic:ar-on-site).
- **Metody oblouku.** Rozbalovací seznam {{ui:Metody oblouku}} nabízí deset způsobů kreslení oblouku, včetně {{ui:3 body}} a {{ui:Počátek, střed, konec}}.
- **Další jednotky.** Hmotnosti (kg, lb, t, ton) a teploty (stupně C, F, K a R) se rozpoznávají tam, kde zadáváte hodnoty s jednotkami.

## Ve všech aplikacích

- **Bubliny nápovědy.** Text při najetí na tlačítka a useknuté popisky je bublina nápovědy Bootstrap.
- **Zavíratelný tip na úvod.** Karta tipu na prázdné ploše výkresu má malý křížek pro zavření. Zůstane zavřená a paleta příkazů ji může zobrazit znovu.
- **Posouvatelné lišty karet.** Lišta karet panelu, která se nevejde, se posouvá místo toho, aby byla useknuta.
- **Názvy karet.** Když je dokument otevřen, karta prohlížeče začíná názvem dokumentu, potom ModelCraft a CadCraft. Tečka je na začátku, dokud je dokument neuložený.
- **Rozložení.** {{ui:Nastavení}} › {{ui:Obecné}} › Rozložení obsahuje rozložení v rozbalovacím seznamu, s volbou použít rozložení jen pro tuto aplikaci a tlačítkem na obnovení rozložení.
- **Jazyky.** Seznam jazyků v Nastavení sleduje jazykové soubory, které sestavení obsahuje. Jiné jazyky než angličtina jsou strojové koncepty.
- **Živě a knihovna.** Live TeamWork ukazuje živé kurzory a jména a kolekce knihovny dávají každé aplikaci výchozí kolekci.

## Opraveno

- {{ui:Přehrát}} se mění na {{ui:Pozastavit}}, když animace běží, a {{key:Space}} přehrává a pozastavuje, když je časová osa otevřena.
- Obrazové vykreslení přejde na WebGL, když grafická karta nemůže spustit sledování paprsků. Pohled živého vykreslování může chybu stále ukazovat; nebylo to ověřeno na počítači s Windows s tímto ovladačem.
- Skutečný režim Toku materiálu se znovu připojuje poté, co spojení skončilo na výjimkových odpovědích PLC.

## Upřímná omezení

- Na skutečné tiskárně se zatím nic nevytisklo: ani filament, ani pryskyřice, ani přes Bambu Connect. Soubory pryskyřice byly zpětně načteny jen vlastními čtečkami CadCraftu.
- Digitální dvojče a Výrobní podlaží byly testovány jen proti simulátorům a známým odpovědím, bez skutečného PLC, linky nebo protokolu. Jsou pomůckami pro kontrolu, ne bezpečnostním ověřením. Fyzika pokrývá jen krabice, až osm zatížení.
- Propojení Rhino a Grasshopper nikdy neběželo ve skutečných programech.
- Jazyky jiné než angličtina jsou strojové koncepty.

## Dříve: 0.8 a 0.8.1

Toto se změnilo v ModelCraftu 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti 0.7. Dialog {{ui:Vykreslit obrázek…}} může nyní poslat scénu jinému programu, panel Plochy vytváří hladké volné plochy a asistent, kterého připojíte, může nastavit celou scénu jednou větou.

### Nové

**Vykreslování**

- **Volba enginu.** {{ui:Vykreslit obrázek…}} má seznam **Engine** nad Režimem. Naše dva vlastní enginy, Rychlý a Sledování paprsků, jsou výchozí a fungují všude. Ostatní položky uloží scénu jako balíček (model jako soubor USD a navíc soubor nastavení s přesnými hodnotami materiálů, zapnutými lampami, sluncem, oblohou, expozicí a kamerou), který odnesete do jiného programu. Obrázek nakreslený jiným programem uvádí, který program a jakou verzi ho vytvořil. Viz [Volba, který program nakreslí obrázek](topic:render-engines).
- **Otevření v jiném programu.** Seznam Engine může uložit scénu jako soubor USD, soubor glTF (`.glb`) nebo složku projektu Unreal (`.zip`), v prohlížeči i v CadCraft Studio. Ve Studiu může také spustit usdview nebo vlastní program počítače pro daný soubor. Viz [Otevření scény v jiném programu](topic:render-open-in).
- **Odeslání do herního enginu ze Studia.** Studio zapíše scénu do projektu Unreal Engine a při každém odeslání ji udrží v souladu, jen jedním směrem. Vaše vlastní úpravy žijí ve vrstvě, kterou CadCraft nikdy nezapisuje. Viz [Odeslání scény do herního enginu](topic:render-unreal).
- **Enginy z doplňků.** Doplněk může do seznamu přidat engine. Engine napsaný v JavaScriptu kreslí v prohlížeči i ve Studiu; engine, který spouští program, potřebuje váš souhlas ve Studiu. Viz [Nakreslení obrázku jiným programem](topic:render-other-program) a [Přidání enginu vykreslování doplňkem](topic:render-engine-addons).
- **Řekněte scénu.** Řekněte připojenému asistentovi "soumrak, slabý déšť, podzimní stromy, lidé na náměstí" a ModelCraft ji nastaví jedním krokem: slunce se přesune na datum a čas, aby stíny odpovídaly, obloha se změní, objeví se mokré povrchy a stromy a lidé se umístí jako skutečné objekty na štítcích, které můžete skrýt, přesunout nebo smazat. Denní doba, datum nebo roční období a počasí (jasno, zataženo, mlha, slabý déšť, déšť, bouře) fungují také samostatně a pozdější požadavek změní tutéž scénu. Mlha se ukáže ve vysoce kvalitním obrázku na grafické kartě; ostatní enginy ukazují oblohu, světlo a mokré povrchy. Déšť se nekreslí jako padající čárky.

**Materiály**

- **Materiál z jedné fotografie.** Dejte ModelCraftu fotografii povrchu (stěny, podlahy, kamene) a vytvoří dlaždicový materiál: osvětlení přes fotografii se vyrovná, hrany se spojí a z obrázku se odvodí barevná mapa, mapa drsnosti a normálová mapa. Je to běžné zpracování obrazu na vaší vlastní fotografii, bez natrénovaného modelu. Drsnost je odhad. Rovná, čtvercová fotografie kolmo na povrch dá nejlepší dlaždici; silný vzor, jako cihly, může ukázat měkký duch tam, kde se spoj mísí.

**Plochy**

- **Volné plochy.** Panel {{ui:Plochy}} vytváří křivky NURBS a neořezané plochy: křivky procházející body, loft, linkované, vytažení, rotace, tažení podél jedné nebo dvou kolejnic, plochy ze sítě křivek, záplaty ze čtyř hran, přizpůsobení a splynutí. Každá sdílená hrana se měří jako G0, G1 nebo G2 (mezera, úhel, skok křivosti) na přesných plochách a hrana horší, než jste požadovali, se objeví v panelu Problémy s opravou **Shoda**. Zebra pruhy a barvy křivosti se kreslí z přesných ploch. Soubory STEP a IGES se exportují i importují. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).

**Pozemek a místnosti**

- **Fotografie náčrtu na zemi.** {{ui:Soubor}} › {{ui:Importovat fotografii skici…}} změní fotografii náčrtu rukou pořízenou telefonem na hrany na zemi v měřítku, které zadáte: jedna skupina, se štítkem pro každou barvu pera. Papír se najde a narovná na vašem počítači a nic se nikam neodesílá. Viz [Model na situačním plánu](topic:site-plan).
- **Zařídit místnost.** Vyberte podlahu a použijte {{ui:Uspořádat}} › {{ui:Zařídit místnost…}}. Nábytek do ložnice, obývacího pokoje, jídelny, kuchyně, koupelny nebo kanceláře se umístí podle pravidel, ke stěnám a mimo dveře a okna, do jedné skupiny, kterou můžete odstranit jedním krokem. Je to výchozí rozvržení, které máte zkontrolovat, ne návrh. Viz [Výchozí knihovna](topic:starter).

**3D tisk**

- **Šikmé řezy.** Rozdělit pro tisk může naklonit řezy až o 60 stupňů, což dává kusům větší plochu k lepení. Spojky stojí kolmo k řezu. Viz [Rozdělení modelu pro tisk](topic:print-split).
- **Kontrola tisku v Problémech.** Nálezy kontroly 3D tisku se ukazují v panelu Problémy se značkami na modelu a Oprava je odtud opraví. Viz [Podpěry, tloušťka stěn, vydutí a oprava](topic:print-tools).

**Ve všech aplikacích**

- **Jazyky.** Nápověda a aplikace jsou ve 54 jazycích. Deset je nových: litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Jazyky jiné než angličtina jsou strojové koncepty, dokud je neprověří rodilý mluvčí, a témata nápovědy mohou být stále v angličtině.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, herní ovladač a ovládání MIDI mohou ovládat aplikace, pro všechny nebo pro jednu.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › Řádky panelu nástrojů nastavuje Zalamování (jako dřív), 2 řádky nebo 1 řádek. Lišta, která se nevejde, se posouvá do stran místo toho, aby brala místo výkresu. Zalamování zůstává výchozí.
- **Mřížka vlastností.** Pole lamp v ModelCraftu používají sdílenou mřížku: sbalitelné kategorie, sloupce popisků a hodnot a hustotu Kompaktní. Zadané výpočty, jako `2*450`, dál fungují.
- **Problémy.** Panel Problémy (tlačítko varování v horní liště) sdílejí všechny aplikace. V ModelCraftu obsahuje kontrolu tisku a varování o spojitosti ploch.
- **Živě.** Relace Live TeamWork ukazuje, kdo je kde. Viz [Model společně s Live TeamWork](topic:work-live).
- **Doplňky.** Doplňky mohou přidávat vykreslovací enginy, jak je uvedeno výše.
- **Připojte svou AI.** Smlouva o nástrojích a kontroly osmi aplikací prošly, celkem s 454 nástroji. Připojení jedním kliknutím ve Studiu, hostovaný konektor pro asistenty v prohlížeči, váš vlastní klíč ve Studiu a publikovaný balíček zatím nejsou slíbeny. Aplikace nemají vlastní AI. Viz [Používání ModelCraftu s AI asistenty](topic:use-with-ai-assistants).

### Opraveno ve verzi 0.8.1

- **Sekce tříd DWG.** Sekce tříd souboru DWG se četla jako chybný typ, což mohlo při importu poškodit soubor. Nyní se čte správně, v ModelCraftu i v ostatních aplikacích, které čtou DWG.
- **Tablety na výšku.** Volná výška mřížky připadá plátnu a rozložení listu začíná při 760 pixelech na šířku nebo méně. Styl ModelCraftu má tuto změnu také.
- **Jazyk ve Studiu.** CadCraft Studio a zabalené edice mohou přepínat jazyk za běhu; dřív byly jen v angličtině. Zatím nebylo ověřeno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.

### Zatím ve verzi není

- **Nepodepsáno kódem.** Windows může zobrazit SmartScreen: zvolte {{ui:Další informace}}, potom {{ui:Přesto spustit}}. Na Macu klikněte pravým tlačítkem a zvolte {{ui:Otevřít}}. Vydání pro obchody jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu vytvořeno.
- Kreslení obrázku jiným programem bez doplňku vykreslovacího enginu, panoramatické nebo stereo kamery a obrázek oblohy přes jiný program a plugin, který otevírá scénu Unreal, zatím nejsou. Soubory se zapisují; plugin není vydán a v Unreal nebyl spuštěn.
- Volné plochy: G3 a třída A se neměří ani nedeklarují a ořezávání a tělesa přijdou později.
- Obrázky z jiných programů nejsou pixel po pixelu stejné jako naše: shodují se jen kamera, slunce, lampy a expozice.
- Oprava přepínání jazyka ve Studiu z verze 0.8.1 není ověřena na každé platformě.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Pro předchozí vydání viz [Co je nového ve verzi 0.7](topic:whats-new-0-7).
