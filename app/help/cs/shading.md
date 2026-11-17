---
title: Tvorba materiálů pomocí uzlů
summary: Sestavte materiál z textur, obrázků a výpočtů v pracovním prostoru Stínování, průběžně ho vidíte v pohledu a malujte jím plochy.
keywords: stínování, zapéct, zapékání textur, ambientní okluze, ao, zakřivení, zapečení normál, vysoký poly, nízký poly, světelná mapa, obtisk, obtisky, nálepka, logo, štítek, malování textur, malovat texturu, štětec, materiál, materiály, materialx, mtlx, openpbr, standard surface, knihovna materiálů, librarycraft, sada textur, pbr, import textur, zip, cc0, přetažení, uzel, uzly, editor uzlů, shader, textura, procedurální, šum, šachovnice, voronoi, buňky, vlny, cihly, dlaždice, dřevo, mramor, přechod, špína, opotřebení hran, barevný přechod, míchání, reliéf, mapa normál, drsnost, kovovost, průhlednost, výřez, emise, záře, posunutí, box mapping, triplanar, uv, obrázek, obrazová textura
from: d7368b21
---

Materiál vytvořený v pracovním prostoru **Stínování** patří k souboru. Je to malý graf: **uzly**, které vytvářejí textury, obrázky a čísla, propojené do **Výstupu materiálu**, jehož vstupy určují vzhled povrchu — barvu, drsnost, kovovost, normálu, průhlednost, emisi a zbytek modelu OpenPBR. Plochy jím malujete jako jakýmkoli materiálem z knihovny a každá změna se hned ukáže v pohledu.

## Otevření

V seznamu pracovních prostorů vyberte {{ui:Stínování}}. 3D pohled zůstane v horní části obrazovky a **editor uzlů** zabere spodní část. Panel vpravo vypisuje vlastní materiály souboru.

- {{ui:Nový materiál}} vytvoří šedý materiál pouze s jeho výstupem materiálu.
- **Vytvořte upravitelnou kopii materiálu z knihovny**: cihlu, dřevo, dlaždici a ostatní přemění na graf, který můžete měnit: jeho textura přichází přes uzel Textura z knihovny, jeho reliéf přes uzel Reliéf.
- {{ui:Malovat jím}} natře vybrané plochy nebo skupiny, nebo vybere materiál pro nástroj Malovat. Materiály nástroje Malovat také uvádějí vlastní materiály souboru pod **V tomto souboru**.
- {{ui:Duplikovat}} a {{ui:Smazat}} pracují s materiálem, který upravujete. Smazání nelze vrátit zpět: plochy s ním natřené ukazují výchozí barvu, dokud je znovu nenamalujete.

## Materiály z knihovny

**Knihovna materiálů (Library)** v panelu vypisuje materiály knihovny, každý s náhledem vykresleným path tracerem CadCraft. Jsou to sady textur uvolněné pod licencí CC0, s uvedením lidí, kteří je vytvořili.

- Klikněte na jeden z nich, čímž se dostane do souboru (i se svými obrázky), a při vybraných plochách nebo skupinách je jím natřete.
- Přetáhněte jeden na plochu nebo skupinu v pohledu a natřete jen ji.
- Stane se jedním z materiálů souboru: jeho uzly měňte stejně jako u jiných. Jeho uvedení autora se zobrazuje v panelu a zůstává v souboru.

## Import sady textur

{{ui:Obrázky nebo zip…}} nebo {{ui:Složka…}} pod **Import sady textur** vytvoří materiál ze sady map. Mapy se poznají podle slov v názvech souborů: color, albedo, diffuse nebo basecolor; roughness (nebo gloss, převedený na drsnost); metalness nebo metallic; normal (OpenGL nebo DirectX, podle `gl` / `dx` v názvu); height nebo displacement; ambient occlusion; opacity; emission. Zabalené mapy (ARM, ORM) se vynechají. Dlaždice textury začíná na 1 × 1 m: skutečnou velikost nastavte na výstupu materiálu. Výška jde do posunutí s měřítkem 0 — zvyšte měřítko, abyste ji použili na sítích.

## MaterialX

MaterialX je otevřený formát, který jiné 3D a renderovací programy používají k předávání materiálů.

- {{ui:Exportovat jako MaterialX…}} uloží materiál, který upravujete: jeho hodnoty a každou texturu jako obrázek PNG vedle souboru `.mtlx` (v zipu). Vyberte shader, ve kterém se zapíše: **OpenPBR Surface** (MaterialX 1.39, stejný model, jaký používá ModelCraft) nebo **Standard Surface** (MaterialX 1.38, který dnes čte více programů). Textury jsou umístěny souřadnicemi UV v metrech; umístění box a triplanar se zapisuje jako UV.
- {{ui:Importovat MaterialX…}} (nebo {{ui:Ze složky…}}) čte soubory `.mtlx` se shadery OpenPBR, Standard Surface, UsdPreviewSurface nebo glTF PBR. Přidejte k nim i obrázky, nebo zip se vším: obrázek se najde podle své cesty, názvu nebo názvu s jiným typem obrázku (soubor `.exr` uvedený v souboru může být přítomen jako `.jpg` vedle něj). Textury, normálové mapy, aritmetika, míchání a posunutí přijdou jako uzly; cokoli jiného si zachová svou hodnotu a stavový řádek říká, co bylo vynecháno.

## Obtisky

Obtisk je obrázek položený na povrch — logo, cedule, štítek, skvrna — s vlastním materiálem.

- Nastavte **Šířku nového obtisku**, pak {{ui:Umístit obtisk…}} (nebo {{ui:Obtisk}} na panelu nástrojů), vyberte obrázek PNG, JPEG nebo WebP a klikněte na plochu. Obrázek se promítne na povrchy v místě, se zachováním svých proporcí; průhledné části PNG zůstanou průhledné.
- Patří do skupiny nebo komponenty, na kterou jste klikli, a pohybuje se s ní. Pokrývá plochy uvnitř svého rámečku, které směřují stejným směrem, a zastaví se na hranách toho, na čem leží.
- Každý obtisk dostane vlastní materiál pojmenovaný **Obtisk: <obrázek>** v seznamu souboru: upravte ho jako kterýkoli jiný (drsnost, reliéf, záři). {{ui:Materiál}} vedle obtisku ho otevře.
- Vedle každého obtisku: jeho šířka (výška se řídí obrázkem), {{ui:Otočit}} (o čtvrt otáčky) a {{ui:Smazat}}. Obtisky se uchovávají s materiály souboru, mimo zpět.
- Zobrazují se ve stínovaném pohledu, v rychlých vykresleních a v kvalitních obrázcích.

## Malování na texturu

{{ui:Malovat texturu}} (nebo {{ui:Malovat}} pod **Malování na texturu**) promění kurzor v kulatý štětec. Táhněte po ploše, která nese jeden z materiálů tohoto souboru: štětec maluje obrázek za její základní barvou.

- Na síti maluje podle UV souřadnic sítě (nejprve ji rozbalte v pracovním prostoru UV); na ostatních plochách maluje přes plochu, takže se malba opakuje s dlaždicí materiálu.
- Materiál, jehož základní barva je jednoduchá, dostane poprvé při malování nový obrázek 512 × 512 v této barvě. Materiál, jehož základní barva přichází z jiných uzlů, potřebuje uzel Obrázek propojený se Základní barvou.
- Barvu štětce, velikost (v pixelech obrázku), sílu a tvrdost nastavte v panelu. {{ui:Vrátit tah}} nebo Ctrl+Z (během malování) vrátí tah, až do posledních 20.
- Namalovaný obrázek se uloží do souboru. Materiály z knihovny nelze malovat: nejprve vytvořte upravitelnou kopii.

## Zapékání textur

**Zapéct textury** zapíše do obrázků podél UV sítě to, co tvar a scéna dávají povrchu.

- Vyberte síť, která má UV (rozbalte ji v pracovním prostoru UV), zaškrtněte mapy a stiskněte {{ui:Zapéct}}:
  - **Ambientní okluze** — jak otevřený je každý bod: rohy, záhyby a místa pod jinými věcmi ztmavnou. Vše zobrazené v modelu ji stíní až do vzdálenosti okluze.
  - **Zakřivení** — světlé podél vnějších hran, tmavé ve vnitřních rozích, středně šedé na rovných a mírně zakřivených částech, v šířce hrany, kterou nastavíte.
  - **Normály z objektu s vysokým detailem** — vyberte i podrobnou kopii: její detail povrchu se zapíše jako normálová mapa pro jednodušší (zapéká se na objekt s menším počtem trojúhelníků). Vzdálenost hledání je, jak daleko od sebe mohou být oba povrchy.
  - **Osvětlení** — slunce z místa a data modelu (Styl) se stíny, plus obloha, jako světelná mapa.
- Obrázky se připojí k souboru a objeví se v uzlech Obrázek. Má-li upravovaný materiál uzel **Špína a opotřebení hran**, hned načte novou okluzi a zakřivení.
- Více paprsků na texel dává hladší okluzi a osvětlení, ale trvá to déle. Zapékání běží na jádrech procesoru počítače na pozadí; {{ui:Zastavit zapékání}} ho zastaví.

## Sestavení grafu

1. {{ui:Přidat uzel…}} (nebo {{key:Shift+A}} v editoru uzlů) přidá uzel doprostřed editoru.
2. Táhněte z výstupní tečky (vpravo na uzlu) na vstupní tečku (vlevo na uzlu), čímž je propojíte. Druhé propojení do vstupu nahradí první; propojený vstup odtáhněte pryč, čímž ho odpojíte.
3. Nepropojené vstupy ukazují svou hodnotu: napište číslo nebo vyberte barvu. Nastavení je dole na každém uzlu.

Uzel přesunete tažením za jeho název, prázdný prostor táhněte pro posun a kolečkem přibližujte. {{key:Delete}} odstraní vybrané uzly nebo propojení, {{key:Mod+Z}} vrací zpět, {{key:Mod+D}} duplikuje, {{key:F}} zobrazí všechny uzly. Každá změna je jeden krok zpět v editoru uzlů. Zpět v modelu materiály nemění.

| Uzly | Co vytvářejí |
|---|---|
| Souřadnice textury | Kde na dlaždici bod leží: opakovat, posunout, otočit o čtvrt. |
| Hodnota, Barva | Číslo, barvu. |
| Obrázek | Obrázek souboru (takový, který přišel s importovaným modelem, nebo který jste přidali přes {{ui:Přidat obrázek…}}). Pro fotografii zvolte **Barvy** a pro drsnostní nebo normálovou mapu **Data**. |
| Textura z knihovny | Textura, drsnost a výška materiálu z knihovny. |
| Šachovnice, Šum | Čtverce; hladký fraktální šum s detailem, drsností a semenem. |
| Voronoiho buňky, Vlny, Přechod | Buňky (vzdálenost k nejbližšímu bodu, hrany mezi buňkami, barva na buňku); pásy napříč, nahoru nebo šikmo, jako sinus, pila nebo trojúhelník, ohnuté šumem; lineární, kvadratický, radiální a sférický přechod. |
| Cihly, Dlaždice | Řady cihel s posunutím, nebo mřížka dlaždic: barvy, malta nebo spárovací hmota, spára a zkosení v metrech, výška pro reliéf, náhodné číslo na každý kus. |
| Dřevo, Mramor | Letokruhy podél vlákna s jemnými vlákny; žíly ohnuté turbulencí. |
| Špína a opotřebení hran | Opotřebuje vypouklé hrany a zašpiní prohlubně podle obrázků zakřivení a okluze sítě ([Zapékání textur](topic:shading#bake-textures) je vytvoří; nebo nastavte jeho dvě nastavení obrázků v rozložení UV sítě: umístěte materiál podle UV souřadnic). Bez nich nic nemění. |
| Míchání barev, Barevný přechod, Odstín/sytost/hodnota, Jas a kontrast, Invertovat, Gama, Rozdělit a sloučit RGB | Práce s barvami. |
| Matematika, Rozsah mapování | Aritmetika s čísly (sčítání, násobení, mocnina, hladký krok a další). |
| Reliéf, Mapa normál | Normála z výšky (Reliéf) nebo z obrázku normálové mapy (Mapa normál: zvolte směr zeleného kanálu). |

## Výstup materiálu

Jeho nastavení říkají, jak textura leží na površích:

- **Šířka dlaždice** a **Výška dlaždice**: kolik metrů pokrývá jedna dlaždice textury. Vše, co graf vytváří, se opakuje přes dlaždici bez švu.
- **Umístěno podle**: **Souřadnice UV** sledují plochy (plochy tlač/tahu: podél každé plochy; sítě: jejich UV, jedna jednotka UV = jedna dlaždice), **Box** promítá z nejbližší ze tří os, **Triplanar** mísí tři projekce na šikmých površích (**Ostrost míchání**: vyšší je tvrdší míchání).
- **Síla normály** zvětšuje nebo zmenšuje vstup normály. **Měřítko posunutí** nastavuje, jak daleko vstup posunutí posune vrcholy sítě.
- {{ui:Více vstupů}} zobrazí zbývající vstupy OpenPBR: lak, chlupatost, podpovrchový rozptyl, tenký film, propustnost a jejich barvy.

## V kvalitních obrázcích

Path tracer čte ze grafu základní barvu, drsnost, kovovost, průhlednost, normálu a emisi tak, jak se mění po povrchu. Každý jiný vstup, který propojíte (například lak, který se mění), se použije v průměru; panel říká, který. Vyříznutí z průhlednostní textury ukazuje svůj tvar a jeho stín je rovnoměrně průhledný. Zářící textura osvětluje to, čemu čelí, aniž by byla vzorkována jako lampa.

**Posunutí** posouvá vrcholy pouze sítí, proto pro detail přidejte modifikátor Subdivision ([Modifikátory](topic:modifiers)). Plochy tlač/tahu si zachovají tvar a reliéf získají z normály.

:::tip
Na počítači s WebGPU se graf počítá na grafické kartě; bez něj na procesoru. Výsledek je stejný.
:::
