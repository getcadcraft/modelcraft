---
title: Co je nového ve verzi 0.8 a 0.8.1
summary: Volba renderovacího motoru se soubory pro jiné programy, volné NURBS plochy s měřenou spojitostí, scéna popsaná vašemu asistentovi, materiál z jedné fotografie, fotografie skici na terén, zařízené místnosti, šikmé řezy pro 3D tisk a kontrola tisku v panelu Problémy.
keywords: co je nového, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, renderovací motor, motor, otevřít v, usd, gltf, unreal, motor z doplňku, nurbs, plochy, lofting, tažení, spojitost, g0, g1, g2, zebra, step, iges, popište scénu, scéna, počasí, denní doba, roční období, asistent, materiál z fotografie, fotografie, fotografie skici, zařídit, zařídit místnost, šikmý řez, rozdělení, kontrola tisku, problémy, mřížka vlastností, lampy, jazyky, vstupní zařízení, řádky panelu nástrojů, dwg, živě
from: e4989b17
---

Toto se změnilo v ModelCraft 0.8 (2026-11-01) a 0.8.1 (2026-11-02) oproti verzi 0.7. Dialog {{ui:Vykreslit obrázek…}} může nyní odeslat scénu jinému programu, panel Plochy vytváří hladké volné plochy a asistent, kterého připojíte, může nastavit celou scénu jednou větou.

## Novinky

### Vykreslování

- **Volba motoru.** {{ui:Vykreslit obrázek…}} má seznam **Motor** nad položkou **Režim**. Naše dva vlastní motory, Fast a Path tracer, jsou výchozí a fungují všude. Ostatní položky uloží scénu jako balíček (model jako soubor USD a soubor nastavení s přesnými hodnotami materiálů, zapnutými lampami, sluncem, oblohou, expozicí a kamerou) pro použití v jiném programu. Obrázek vykreslený jiným programem uvádí, který program a jaká verze jej vytvořily. Viz [Výběr programu, který vykreslí obrázek](topic:render-engines).
- **Otevřít v jiném programu.** Seznam Motor může uložit scénu jako soubor USD, soubor glTF (`.glb`) nebo složku projektu Unreal (`.zip`), v prohlížeči i v CadCraft Studio. Ve Studiu může také spustit usdview nebo vlastní program počítače pro daný soubor. Viz [Otevření scény v jiném programu](topic:render-open-in).
- **Odeslání do herního enginu ze Studia.** Studio zapíše scénu do projektu Unreal Engine a při každém odeslání ji udržuje aktuální, jen jedním směrem. Vaše vlastní úpravy jsou ve vrstvě, kterou CadCraft nikdy nezapisuje. Viz [Odeslání scény do herního enginu](topic:render-unreal).
- **Motory z doplňků.** Doplněk může přidat motor do seznamu. Motor napsaný v JavaScriptu kreslí v prohlížeči a ve Studiu; motor, který spouští program, vyžaduje ve Studiu váš souhlas. Viz [Vykreslení obrázku jiným programem](topic:render-other-program) a [Přidání renderovacího motoru pomocí doplňku](topic:render-engine-addons).
- **Popište scénu.** Napište připojenému asistentovi "soumrak, slabý déšť, podzimní stromy, lidé na náměstí" a ModelCraft scénu nastaví jedním krokem: slunce se přesune na datum a čas, aby stíny odpovídaly, obloha se změní, objeví se mokré povrchy a stromy a lidé se umístí jako skutečné objekty na štítcích, které můžete skrýt, přesunout nebo smazat. Denní doba, datum nebo roční období a počasí (jasno, zataženo, mlha, slabý déšť, déšť, bouře) fungují také samostatně a další požadavek mění tutéž scénu. Mlha se ukáže ve vysoce kvalitním obrázku na grafické kartě; ostatní motory ukážou oblohu, světlo a mokré povrchy. Déšť se nekreslí jako padající čáry.

### Materiály

- **Materiál z jedné fotografie.** Dejte ModelCraftu fotografii povrchu (stěny, podlahy, kámen) a vytvoří dlaždicový materiál: osvětlení přes fotografii se vyrovná, hrany se spojí a barevná mapa, mapa drsnosti a normálová mapa se odvodí z obrázku. Jde o prosté zpracování obrazu vaší vlastní fotografie bez natrénovaného modelu. Drsnost je odhad. Rovná, čtvercová fotografie kolmo k povrchu dá nejlepší dlaždici; výrazný vzor, například cihly, může ukázat měkký duch tam, kde je spoj prolnutý.

### Plochy

- **Volné plochy.** Panel {{ui:Plochy}} vytváří NURBS křivky a neořezané plochy: křivky procházející body, lofting, lineární plochy, vytažení, rotační tělesa, tažení po dráze po jedné nebo dvou vodicích křivkách, plochy ze sítě křivek, záplaty ze čtyř hran, navázání a prolnutí. Každá sdílená hrana se měří jako G0, G1 nebo G2 (mezera, úhel, skok zakřivení) na přesných plochách a hrana horší, než jste požadovali, se objeví v panelu Problémy s opravou **Navázat**. Pruhy zebra a barvy zakřivení se kreslí z přesných ploch. Soubory STEP a IGES se odesílají i přijímají. Viz [Volné plochy (NURBS)](topic:nurbs-surfaces).

### Terén a místnosti

- **Fotografie skici na terén.** {{ui:Soubor}} › {{ui:Importovat fotografii skici…}} převede fotografii ručně kreslené skici pořízenou telefonem na hrany na terénu v měřítku, které zadáte: jedna skupina, s jedním štítkem pro každou barvu pera. Papír se na vašem počítači najde a narovná a nic se nikam neodesílá. Viz [Model na situačním plánu](topic:site-plan).
- **Zařídit místnost.** Vyberte podlahu a použijte {{ui:Uspořádat}} › {{ui:Zařídit místnost…}}. Nábytek do ložnice, obývacího pokoje, jídelny, kuchyně, koupelny nebo kanceláře se umístí podle pravidel, ke stěnám a mimo dveře a okna, v jedné skupině, kterou můžete odebrat jedním krokem. Je to výchozí rozvržení k posouzení, ne návrh. Viz [Startovní knihovna](topic:starter).

### 3D tisk

- **Šikmé řezy.** Rozdělení pro tisk může zkosit řezy až o 60°, což dílům dá větší plochu pro lepení. Konektory stojí kolmo k řezu. Viz [Rozdělení modelu pro tisk](topic:print-split).
- **Kontrola tisku v panelu Problémy.** Nálezy kontroly 3D tisku se zobrazují v panelu Problémy se značkami na modelu a opravit je lze odtud pomocí **Opravit**. Viz [Podpěry, tloušťka stěn, dutění a oprava](topic:print-tools).

### Ve všech aplikacích

- **Jazyky.** Nápověda a aplikace jsou v 54 jazycích. Deset je nových: litevština, lotyšština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština a uzbečtina. Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí, a témata nápovědy mohou být zatím v angličtině.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, herní ovladač a MIDI ovládání mohou ovládat aplikace, buď všechny, nebo jednu.
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › Řádky panelu nástrojů nastaví Zalamovat (jako dříve), 2 řádky nebo 1 řádek. Panel, který se nevejde, se posune do strany, místo aby zabíral místo z výkresu. Zalamovat zůstává výchozí.
- **Mřížka vlastností.** Pole lamp v ModelCraftu používají sdílenou mřížku: sbalitelné kategorie, sloupce názvů a hodnot a hustotu Kompaktní. Zadané výpočty jako `2*450` fungují dál.
- **Problémy.** Panel Problémy (tlačítko s výstrahou v liště aplikace) je společný pro všechny aplikace. V ModelCraftu obsahuje kontrolu tisku a varování o spojitosti ploch.
- **Živě.** Relace Live TeamWork ukazuje, kdo je kde. Viz [Modelování společně pomocí Live TeamWork](topic:work-live).
- **Doplňky.** Doplňky mohou přidat renderovací motory, jak je uvedeno výše.
- **Připojte svou AI.** Rozhraní nástrojů a kontroly osmi aplikací prošly, celkem s 454 nástroji. Připojení jedním kliknutím ve Studiu, hostovaný konektor pro prohlížečové asistenty, vlastní klíč ve Studiu a publikovaný balíček zatím nejsou slíbeny. Aplikace žádnou vlastní AI neobsahují. Viz [Používání ModelCraftu s AI asistenty](topic:use-with-ai-assistants).

## Opraveno ve verzi 0.8.1

- **Oddíl tříd DWG.** Oddíl tříd souboru DWG byl čten jako špatný typ, což mohlo při importu soubor poškodit. Nyní se čte správně v ModelCraftu i v ostatních aplikacích, které čtou DWG.
- **Tablety na výšku.** Volná výška mřížky připadá plátnu a rozvržení listu začíná od 760 pixelů šířky nebo méně. Totéž platí pro šablonu stylů ModelCraftu.
- **Jazyk ve Studiu.** CadCraft Studio a zabalená vydání mohou přepínat jazyk za běhu; dříve byla pouze v angličtině. Na každé platformě to zatím nebylo otestováno: dejte nám vědět, pokud se jazyk nezmění.

## Zatím není v této verzi

- **Bez podpisu kódu.** Windows může zobrazit SmartScreen: zvolte {{ui:Více informací}}, pak {{ui:Spustit přesto}}. Na Macu klikněte pravým tlačítkem a zvolte {{ui:Otevřít}}. Sestavení pro obchody jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu sestaveno.
- Jiný program kreslí obrázek bez doplňku renderovacího motoru; panoramatické a stereo kamery a obrázek oblohy přes jiný program zatím nejsou. Zásuvný modul, který otevírá scénu v Unreal, také není. Soubory se zapisují; zásuvný modul není vydán a v Unreal nebyl spuštěn.
- Volné plochy: G3 a třída A se neměří ani netvrdí; ořezání a tělesa přijdou později.
- Obrázky z jiných programů nejsou pixel po pixelu stejné jako naše: shodují se pouze kamera, slunce, lampy a expozice.
- Oprava přepínání jazyka ve Studiu z verze 0.8.1 není otestována na každé platformě.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet). Předchozí vydání najdete v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
