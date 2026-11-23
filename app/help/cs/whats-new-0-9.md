---
title: Novinky ve verzi 0.9 (starší)
summary: Fáze tisku s vlastním slicerem a odesíláním přes USB, Klipper, OctoPrint a PrusaLink, rozřezání pro pryskyřici a doplňky souborů, tok materiálu, doplňky digitální dvojče a výrobní hala, zaoblení NURBS, zesilování a přizpůsobení skenu, AR na stavbě a deset metod oblouku.
keywords: novinky 0.9, starší verze, novinky, co je nového, poznámky k vydání, changelog, 0.9, fáze tisku, 3d tisk, odeslání na 3D tiskárnu, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, pryskyřice, tisk pryskyřicí, goo, sl1, ctb, anycubic, test expozice, tok materiálu, digitální dvojče, výrobní hala, plc, dopravník, nurbs, zaoblení, ztloustit, přizpůsobení skenu, ar, na stavbě, metody oblouku, jednotky, novinky, poznámky k vydání, změny, 0.8, 0.8.1, verze, nové funkce, render engine, engine, otevřít v, usd, gltf, unreal, engine doplňků, nurbs, plochy, loft, tažení, spojitost, g0, g1, g2, zebra, step, iges, popis scény, scéna, počasí, denní doba, roční období, asistent, materiál z fotografie, fotografie, fotografie skici, zařídit, zařídit místnost, šikmý řez, rozdělení, kontrola tisku, problémy, mřížka vlastností, svítidla, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg, live
from: 2717d1b1
---

Toto se změnilo v ModelCraft 0.9 oproti 0.8.1. ModelCraft nyní dosáhne na tiskárnu a výrobní halu: můžete umístit věci na tiskovou podložku a odeslat je bez exportu, rozřezat pro filament nebo pryskyřici a navrhnout výrobní linku pro manipulaci s materiálem. Toto je CadCraft Studio 0.9 a jeho osm aplikací; většina nových funkcí níže jsou doplňky.

## Nové

### 3D tisk

- **Fáze tisku.** Klikněte na {{ui:Fáze tisku}} na panelu nástrojů. Přidejte položky knihovny na podložku tiskárny, uspořádejte je, prohlédněte rozřezané vrstvy a stiskněte {{ui:Odeslat na 3D tiskárnu}}, bez exportu STL. Patří k doplňku 3D tisk, který je ve výchozím nastavení zapnutý a dá se odebrat jako každý doplněk. Viz [Umístění věcí na tiskovou podložku a jejich odeslání na tiskárnu](topic:print-stage).
- **Náš vlastní slicer filamentu.** {{ui:CadCraft basic (součást, nejrychlejší)}} je slicer v seznamu **Slicer** na kartě: stěny, pláště, výplň, podpěry a skirt, na pracovním vláknu, aby stránka zůstala použitelná. {{ui:Náhled vrstev}} s posuvníkem **Vrstva** ukáže vrstvy před odesláním. Profily tiskáren, například ve stylu Ender-3 a Prusa MK4, nesou vlastní úvodní G-code.
- **Odesílání.** Přes USB (Chrome nebo Edge na počítači, se stránkou ponechanou otevřenou), nebo do Klipperu (Moonraker), OctoPrintu nebo PrusaLinku ve vaší síti. Nic se nepřipojí ani neodešle bez kliknutí a odeslání se nejdřív zeptá.
- **Další slicery.** Kiri:Moto, PrusaSlicer a OrcaSlicer jsou samostatné doplňky, ve výchozím nastavení vypnuté; přidejte je z karty nebo z {{ui:Nastavení}} › {{ui:Doplňky}}. PrusaSlicer a OrcaSlicer používají vaši vlastní nainstalovanou kopii z CadCraft Studio. Doplněk pro tiskárny Bambu Lab rozřezává pomocí vašeho OrcaSlicer a jeho předvoleb P2S a na počítači potřebuje Studio.
- **Tisk pryskyřicí.** Doplňky pro pryskyřici (ve výchozím nastavení vypnuté) vytvářejí obrázky vrstev pro displej vaší tiskárny, s vydlabáním a odvětrávacími otvory, raftem a podpěrami, náhledem vrstev a údaji o čase, pryskyřici a ceně. Doplňky pro formáty souborů zapisují Elegoo GOO, SL1, Chitubox (CBDDLP a CTB 2 až 5) a Anycubic (PWMX a PWS). Test expozice pryskyřice vytvoří žebřík z pěti expozic. Viz [Rozřezání pro pryskyřicovou tiskárnu](topic:resin-printing).
- **Beze změny.** {{ui:Export}} › {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}, nástroje pro tisk a Rozdělit pro tisk fungují jako ve verzi 0.8. Viz [Příprava modelu pro 3D tisk](topic:print-3d).

### Tok materiálu, digitální dvojče a výrobní hala

Tyto tři jsou doplňky, vypnuté, dokud je nezapnete v {{ui:Nastavení}} › {{ui:Doplňky}}, a každý má vlastní nápovědu, jakmile je zapnutý.

- **Tok materiálu.** Panel s názvem Tok materiálu rozmístí dopravníky, stanice, vyrovnávací zásobníky a dráhy AGV v 3D zobrazení, spustí simulaci s počátečním číslem, přehraje ji a ukáže propustnost, dodací lhůty a fronty; výsledky se ukládají jako CSV. Objednávky mohou přicházet ze souboru CSV. Robotické buňky lze zkontrolovat a exportovat. Propojení PLC má měkký režim a skutečný režim přes Modbus TCP, který funguje jen v CadCraft Studio.
- **Digitální dvojče.** Čte rozvržení Toku materiálu a na něm běží měkké PLC, s poruchami, které můžete vynutit, zkouškami zásob, porovnáním rozvržení a kusovníkem.
- **Výrobní hala.** Převede stanice na stroje a buňky, čte je živě nebo ze simulátoru a vede frontu úloh a jednoduché OEE. Pouze čte: tato verze nemůže zapisovat do stroje ani PLC.

### Plochy, modely a výkresy

- **Zaoblení, ztloustnutí a booleovské operace na NURBS.** Panel {{ui:Plochy}} má {{ui:Zaoblení mezi plochami}}, {{ui:Zaoblení více hran}}, {{ui:Ztloustit na těleso}} a Sjednocení, Odečtení a Průnik, každé s naměřenou odchylkou. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).
- **Přizpůsobení ploch skenu.** Vyberte naskenovanou síť a použijte {{ui:Přizpůsobit povrchy skenu}} ve skupině **Sken**, poté {{ui:Sešít povrchy do tělesa}}. Jde o první přizpůsobení, ne o úplný balík pro zpětné inženýrství.
- **Živé propojení s modeláři .3dm.** Jednosměrné, z Rhino 8 nebo Grasshopperu, a vyžaduje CadCraft Studio na stejném počítači. Viz [Udržet model .3dm živý](topic:live-3dm-link).
- **Zobrazení modelu na stavbě.** {{ui:Zobrazení na stavbě (AR, telefon)}} v nabídce {{ui:Pohledy}} funguje na telefonu s Androidem a Chrome. Viz [Zobrazení modelu na stavbě telefonem s Androidem (AR)](topic:ar-on-site).
- **Metody oblouku.** Rozbalovací nabídka {{ui:Metody oblouku}} nabízí deset způsobů kreslení oblouku, včetně {{ui:3 body}} a {{ui:Počátek, střed, konec}}.
- **Další jednotky.** Hmotnosti (kg, lb, t, ton) a teploty (stupně C, F, K a R) se rozpoznají tam, kde zadáváte hodnoty s jednotkami.

## Ve všech aplikacích

- **Bublinové nápovědy.** Text při najetí myší na tlačítka a useknuté popisky je bublinová nápověda Bootstrap.
- **Zavíratelný úvodní tip.** Karta tipu na prázdné kreslicí ploše má malé zavírací x. Zůstane zavřená a paleta příkazů ji může znovu zobrazit.
- **Posuvné lišty karet.** Lišta karet panelu, která se nevejde, se posouvá místo toho, aby byla useknutá.
- **Názvy karet.** Když je otevřený dokument, karta prohlížeče začíná jménem dokumentu, pak ModelCraft a CadCraft. Tečka je na začátku, dokud je dokument neuložený.
- **Rozvržení.** {{ui:Nastavení}} › {{ui:Obecné}} › Rozvržení drží rozvržení v rozbalovacím seznamu, s volbou použít rozvržení jen pro tuto aplikaci a tlačítkem pro obnovení rozvržení.
- **Jazyky.** Seznam jazyků v Nastavení odpovídá jazykovým souborům, které build obsahuje. Jiné jazyky než angličtina jsou strojové koncepty.
- **Live a Knihovna.** Live TeamWork ukazuje živé kurzory a jména, a Knihovna dává každé aplikaci výchozí kolekci.

## Opraveno

- {{ui:Přehrát}} se při přehrávání animace mění na {{ui:Pozastavit}} a {{key:Space}} přehrává a pozastavuje, když je otevřená časová osa.
- Statický render se vrací k WebGL, když grafická karta nemůže spustit path tracer. Živé zobrazení renderu může stále ukazovat chybu; nebylo ověřeno na počítači s Windows s tímto ovladačem.
- Skutečný režim toku materiálu se znovu připojí poté, co se spojení ukončilo odpověďmi s výjimkou PLC.

## Skutečné limity

- Na skutečné tiskárně zatím nic nebylo vytištěno: ani z filamentu, ani z pryskyřice, ani přes Bambu Connect. Soubory pryskyřice byly načteny pouze vlastními čtečkami CadCraft.
- Digitální dvojče a Výrobní hala byly testovány jen na simulátorech a známých výsledcích, bez skutečného PLC, linky nebo protokolu. Jsou to pomůcky pro kontrolu, ne bezpečnostní ověření. Fyzika pokrývá pouze krabice, až osm zatížení.
- Propojení s Rhino a Grasshopperem nikdy neběželo ve skutečných programech.
- Jazyky jiné než angličtina jsou strojové koncepty.

## Dříve: 0.8 a 0.8.1

Toto se změnilo v ModelCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti 0.7. Dialog {{ui:Vykreslit obrázek…}} může nyní odeslat scénu do jiného programu, panel Plochy vytváří hladké volné plochy a asistent, kterého připojíte, dokáže nastavit celou scénu jednou větou.

### Nové

**Vykreslování**

- **Volba enginu.** {{ui:Vykreslit obrázek…}} má nad režimem seznam **Engine**. Naše vlastní dva enginy, Rychlý a Path tracer, jsou výchozí a fungují všude. Ostatní položky uloží scénu jako balíček (model jako soubor USD, plus soubor nastavení s přesnými hodnotami materiálů, zapnutými svítidly, sluncem, oblohou, expozicí a kamerou), který si odnesete do jiného programu. Obrázek nakreslený jiným programem uvádí, který program a jakou verzi ho vytvořil. Viz [Volba programu, který nakreslí obrázek](topic:render-engines).
- **Otevřít v jiném programu.** Seznam Engine může uložit scénu jako soubor USD, soubor glTF (`.glb`) nebo složku projektu Unreal (`.zip`), v prohlížeči i v CadCraft Studio. Ve Studiu může také spustit usdview nebo vlastní program počítače pro tento soubor. Viz [Otevření scény v jiném programu](topic:render-open-in).
- **Odeslání do herního enginu ze Studia.** Studio zapíše scénu do projektu Unreal Engine a při každém odeslání ji udrží v souladu, pouze jedním směrem. Vaše vlastní úpravy žijí ve vrstvě, kterou CadCraft nikdy nezapisuje. Viz [Odeslání scény do herního enginu](topic:render-unreal).
- **Enginy z doplňků.** Doplněk může přidat engine do seznamu. Engine napsaný v JavaScriptu kreslí v prohlížeči i ve Studiu; engine, který spouští program, potřebuje ve Studiu váš souhlas. Viz [Nakreslení obrázku jiným programem](topic:render-other-program) a [Přidání enginu renderu doplňkem](topic:render-engine-addons).
- **Popis scény.** Řekněte připojenému asistentovi „soumrak, slabý déšť, podzimní stromy, lidé na náměstí“ a ModelCraft scénu nastaví jedním krokem: slunce se přesune na datum a čas, aby stíny odpovídaly, obloha se změní, objeví se mokré povrchy a stromy a lidé se umístí jako skutečné objekty na štítcích, které můžete skrýt, přesunout nebo smazat. Denní doba, datum nebo roční období a počasí (jasno, zataženo, mlha, slabý déšť, déšť, bouře) fungují i samostatně a další požadavek změní tutéž scénu. Mlha se ukáže ve vysoce kvalitním obrázku na grafické kartě; ostatní enginy ukazují oblohu, světlo a mokré povrchy. Déšť se nekreslí jako padající čárky.

**Materiály**

- **Materiál z jedné fotografie.** Dejte ModelCraftu fotografii povrchu (zdi, podlahy, kamene) a vytvoří dlaždicový materiál: osvětlení přes fotografii se vyrovná, hrany se spojí a z obrázku se odvodí mapa barvy, mapa drsnosti a normálová mapa. Je to prosté zpracování obrazu vaší vlastní fotografie, bez natrénovaného modelu. Drsnost je odhad. Jednoduchá, čtvercová, kolmo pořízená fotografie dá nejlepší dlaždici; výrazný vzor, jako cihly, může ukázat měkký duch v místě spoje, kde je přechod smíchán.

**Plochy**

- **Volné plochy.** Panel {{ui:Plochy}} vytváří křivky NURBS a neořezané plochy: křivky procházející body, loft, lineární, vytažení, rotaci, tažení po jedné nebo dvou kolejnicích, plochy ze sítě křivek, záplaty ze čtyř hran, shodu a prolnutí. Každá sdílená hrana se měří jako G0, G1 nebo G2 (mezera, úhel, skok zakřivení) na přesných plochách a hrana horší, než jste požadovali, se objeví v panelu {{ui:Problémy}} s opravou **Shoda**. Zebra pruhy a barvy zakřivení se kreslí z přesných ploch. Soubory STEP a IGES se exportují i importují. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).

**Místo a místnosti**

- **Fotografie skici na terén.** {{ui:Soubor}} › {{ui:Importovat fotografii skici…}} převede fotografii ruční skici z telefonu na hrany na terénu v měřítku, které zadáte: jedna skupina, se štítkem pro každou barvu pera. Papír se najde a narovná na vašem počítači a nic se nikam neodesílá. Viz [Modelování na situačním plánu](topic:site-plan).
- **Zařídit místnost.** Vyberte podlahu a použijte {{ui:Uspořádat}} › {{ui:Zařídit místnost…}}. Nábytek do ložnice, obývacího pokoje, jídelny, kuchyně, koupelny nebo kanceláře se umístí podle pravidel, ke zdem a mimo dveře a okna, v jedné skupině, kterou odeberete jedním krokem. Je to výchozí rozvržení k posouzení, ne návrh. Viz [Startovní knihovna](topic:starter).

**3D tisk**

- **Šikmé řezy.** Rozdělit pro tisk může šikmo řezat až o 60 stupňů, což dílům dá větší plochu pro lepení. Spojky stojí kolmo k řezu. Viz [Rozdělení modelu pro tisk](topic:print-split).
- **Kontrola tisku v Problémech.** Nálezy kontroly 3D tisku se zobrazí v panelu Problémy se značkami na modelu a Opravit je z něj opraví. Viz [Podpěry, tloušťka stěn, vydlabání a oprava](topic:print-tools).

**Ve všech aplikacích**

- **Jazyky.** Nápověda a aplikace jsou ve 54 jazycích. Deset je nových: litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Jazyky jiné než angličtina jsou strojové koncepty, dokud je neprověří rodilý mluvčí, a témata nápovědy mohou být stále v angličtině.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, herní ovladač a ovládací prvky MIDI mohou ovládat aplikace, pro všechny nebo pro jednu.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › Řádky panelu nástrojů nastavuje Zalomit (jako dříve), 2 řádky nebo 1 řádek. Lišta, která se nevejde, se posouvá do strany místo toho, aby brala místo z kresby. Zalomit zůstává výchozí.
- **Mřížka vlastností.** Pole svítidel ModelCraftu používají sdílenou mřížku: sbalitelné kategorie, sloupce popisků a hodnot a Kompaktní hustota. Zadané výpočty jako `2*450` fungují dál.
- **Problémy.** Panel Problémy (tlačítko s varováním v liště aplikace) sdílejí všechny aplikace. V ModelCraftu obsahuje kontrolu tisku a varování o spojitosti ploch.
- **Live.** Relace Live TeamWork ukazuje, kdo je kde. Viz [Modelování spolu s Live TeamWork](topic:work-live).
- **Doplňky.** Doplňky mohou přidávat enginy renderu, jak je uvedeno výše.
- **Připojte svou AI.** Kontrakt nástrojů a kontroly osmi aplikací prošly, celkem 454 nástrojů. Připojení jedním kliknutím ve Studiu, hostovaný konektor pro asistenty v prohlížeči, váš vlastní klíč ve Studiu a publikovaný balíček zatím nejsou slíbeny. Aplikace žádnou vlastní AI neobsahují. Viz [Použití ModelCraftu s AI asistenty](topic:use-with-ai-assistants).

### Opraveno ve verzi 0.8.1

- **Sekce tříd DWG.** Sekce tříd souboru DWG se četla jako špatný typ, což mohlo soubor při importu rozbít. Nyní se čte správně, v ModelCraftu i v ostatních aplikacích, které čtou DWG.
- **Tablety na výšku.** Volná výška mřížky jde na plátno a rozvržení listu začíná při šířce 760 pixelů nebo menší. Styl ModelCraftu má tuto změnu také.
- **Jazyk ve Studiu.** CadCraft Studio a zabalené edice mohou přepnout jazyk za běhu; dříve byly jen v angličtině. Ještě nebylo ověřeno na každé platformě: dejte nám vědět, pokud se jazyk nemění.

### Ještě není v této verzi

- **Bez podpisu kódu.** Windows může zobrazit SmartScreen: zvolte {{ui:Další informace}}, pak {{ui:Spustit přesto}}. Na Macu klikněte pravým tlačítkem a zvolte {{ui:Otevřít}}. Sestavení pro obchody jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu sestaveno.
- Jiný program kreslící obrázek bez doplňku enginu renderu, panoramatické nebo stereo kamery a obrázek oblohy přes jiný program a zásuvný modul, který otevírá scénu Unreal, zatím nejsou. Soubory se zapisují; zásuvný modul není vydán a nebyl spuštěn v Unrealu.
- Volné plochy: G3 a třída A se neměří ani netvrdí, ořezání a tělesa přijdou později.
- Obrázky z jiných programů nejsou pixel po pixelu jako naše: shodují se jen kamera, slunce, svítidla a expozice.
- Oprava přepínání jazyka ve Studiu z 0.8.1 nebyla otestována na každé platformě.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Pro předchozí vydání viz [Novinky ve verzi 0.7](topic:whats-new-0-7).
