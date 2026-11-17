---
title: Vytvorenie materiálov pomocou uzlov
summary: Vytvorte materiál z textúr, obrázkov a výpočtov v pracovnom priestore Tieňovanie, sledujte ho v zobrazení počas práce a maľujte ním plochy.
keywords: tieňovanie, spiecť, pečenie, pečenie textúry, ambientná okluzia, ao, zakrivenie, pečenie normál, vysoký počet polygónov, nízky počet polygónov, svetelná mapa, nálepka, nálepky, samolepka, logo, štítok, maľovanie textúry, maľovať textúru, štetec, materiál, materiály, materialx, mtlx, openpbr, standard surface, knižnica materiálov, librarycraft, sada textúr, pbr, import textúr, zip, cc0, potiahnutie, uzol, uzly, editor uzlov, shader, textúra, procedurálny, šum, šachovnica, voronoi, bunky, vlny, tehly, dlaždice, drevo, mramor, prechod, špina, opotrebovanie hrán, farebná rampa, zmiešať, reliéf, normálová mapa, drsnosť, kovovosť, nepriehľadnosť, výrez, emisia, žiara, posunutie, mapovanie krabice, triplanárne, uv, obrázok, textúra z obrázka, openpbr
from: d7368b21
---

Materiál vytvorený v pracovnom priestore **Tieňovanie** patrí k súboru. Je to malý graf: **uzly**, ktoré vytvárajú textúry, obrázky a čísla, prepojené do **Výstup materiálu**, ktorého vstupy určujú vzhľad povrchu — základná farba, drsnosť, kovovosť, normála, nepriehľadnosť, emisia a ostatný model OpenPBR. Plochy ním maľujete ako ktorýkoľvek materiál z knižnice a každá zmena sa hneď zobrazí v zobrazení.

## Otvorenie

Vyberte {{ui:Tieňovanie}} v zozname pracovných priestorov. 3D zobrazenie si ponecháva hornú časť obrazovky a **editor uzlov** zaberie spodnú časť. Panel vpravo vypisuje vlastné materiály súboru.

- {{ui:Nový materiál}} vytvorí sivý materiál iba s výstupom materiálu.
- **Vytvorte upraviteľnú kópiu materiálu z knižnice** premení tehlu, drevo, dlaždicu a ostatné na graf, ktorý môžete meniť: jeho textúra prichádza cez uzol Textúra z knižnice, jeho reliéf cez uzol Reliéf.
- {{ui:Maľovať ním}} natrie vybrané plochy alebo skupiny, alebo vyberie materiál pre nástroj {{ui:Farba}}. Materiály nástroja Farba tiež vypisujú vlastné materiály súboru pod **V tomto súbore**.
- {{ui:Duplikovať}} a {{ui:Zmazať}} pracujú s materiálom, ktorý upravujete. Zmazanie sa nedá vrátiť späť: plochy natreté týmto materiálom zobrazujú predvolenú farbu, kým ich znova nenatriete.

## Materiály z knižnice

Panel **Knižnica materiálov** vypisuje materiály knižnice, každý s ukážkou vykreslenou sledovaním ciest (path tracer) od CadCraftu. Sú to sady textúr vydané pod CC0, s uvedením autorov, ktorí ich vytvorili.

- Kliknite na jeden z nich, aby sa dostal do súboru (jeho obrázky prídu s ním), a ak sú vybrané plochy alebo skupiny, natrite ich.
- Potiahnite jeden z nich na plochu alebo skupinu v zobrazení a natrite iba ju.
- Stane sa jedným z materiálov súboru: jeho uzly meňte rovnako ako ostatné. Jeho uvedenie autora sa zobrazí v paneli a zostane v súbore.

## Import sady textúr

{{ui:Obrázky alebo zip…}} alebo {{ui:Priečinok…}} v časti **Import sady textúr** vytvorí materiál zo sady máp. Mapy sa nájdu podľa slov v ich názvoch súborov: color, albedo, diffuse alebo basecolor; roughness (alebo gloss, prevedené na drsnosť); metalness alebo metallic; normal (OpenGL alebo DirectX, podľa `gl` / `dx` v názve); height alebo displacement; ambient occlusion; opacity; emission. Zbalené mapy (ARM, ORM) sa vynechávajú. Dlaždica začína s rozmermi 1 × 1 m: skutočnú veľkosť nastavte na Výstup materiálu. Výška ide do posunutia s mierkou 0 — zvýšte mierku, aby sa použila na sieťach.

## MaterialX

MaterialX je otvorený formát, ktorý iné 3D a renderovacie programy používajú na odovzdávanie materiálov.

- {{ui:Exportovať ako MaterialX…}} uloží materiál, ktorý upravujete: jeho hodnoty a každú textúru ako obrázok PNG vedľa súboru `.mtlx` (v zip). Vyberte shader, ako sa zapíše: **OpenPBR Surface** (MaterialX 1.39, rovnaký model, aký používa ModelCraft) alebo **Standard Surface** (MaterialX 1.38, ktorý dnes čítajú viaceré programy). Textúry sú umiestnené podľa súradníc UV v metroch; umiestnenie krabice a triplanárne sa zapisuje ako UV.
- {{ui:Importovať MaterialX…}} (alebo {{ui:Z priečinka…}}) číta súbory `.mtlx` so shadermi OpenPBR, Standard Surface, UsdPreviewSurface alebo glTF PBR. Pridajte aj obrázky, alebo zip so všetkým: obrázok sa nájde podľa cesty, názvu alebo názvu s iným typom obrázka (názov súboru `.exr` môže byť v súbore uvedený ako `.jpg` vedľa neho). Textúry, normálové mapy, aritmetika, zmiešavanie a posunutie prichádzajú ako uzly; všetko ostatné si ponechá svoju hodnotu a stavový riadok hovorí, čo sa vynechalo.

## Nálepky

Nálepka je obrázok nanesený na povrch — logo, značka, štítok, škvrna — s vlastným materiálom.

- Nastavte **Šírku novej nálepky**, potom {{ui:Umiestniť nálepku…}} (alebo {{ui:Nálepka}} na paneli nástrojov), vyberte obrázok PNG, JPEG alebo WebP a kliknite na plochu. Obrázok sa premietne na povrchy na tom mieste so zachovaním pomerov; priehľadné časti PNG zostanú priehľadné.
- Patrí do skupiny alebo komponentu, na ktorý ste klikli, a pohybuje sa s ním. Pokrýva plochy vnútri svojho rámčeka, ktoré smerujú rovnakým smerom, a zastaví sa na hranách toho, na čom leží.
- Každá nálepka dostane vlastný materiál s názvom **Nálepka: <picture>** v zozname súboru: upravte ho ako ostatné (drsnosť, reliéf, žiara). {{ui:Materiál}} vedľa nálepky ho otvorí.
- Pri každej nálepke: jej šírka (výška nasleduje obrázok), {{ui:Otočiť}} (štvrtina otáčky) a {{ui:Zmazať}}. Nálepky sa uchovávajú s materiálmi súboru, mimo funkcie Späť.
- Zobrazujú sa v tieňovanom zobrazení, v rýchlych renderoch a vo vysokokvalitných obrázkoch.

## Maľovanie na textúre

{{ui:Maľovať textúru}} (alebo {{ui:Farba}} v časti **Maľovanie na textúre**) premení ukazovateľ na okrúhly štetec. Potiahnite po ploche, ktorá má jeden z materiálov tohto súboru: štetec maľuje obrázok za jeho základnou farbou.

- Na sieti maľuje podľa jej UV (najprv ju rozbaľte v pracovnom priestore UV); na ostatných plochách maľuje cez plochu, takže sa maľba opakuje s dlaždicou materiálu.
- Materiál, ktorého základná farba je jednofarebná, dostane pri prvom natretí nový obrázok 512 × 512 v tejto farbe. Materiál, ktorého základná farba pochádza z iných uzlov, potrebuje uzol Obrázok prepojený so Základnou farbou.
- Farbu štetca, veľkosť (v pixeloch obrázka), silu a tvrdosť nastavte v paneli. {{ui:Vrátiť ťah}} alebo Ctrl+Z (počas maľovania) vráti ťah, až do posledných 20.
- Namaľovaný obrázok sa uloží do súboru. Materiály z knižnice sa nedajú maľovať: najprv vytvorte upraviteľnú kópiu.

## Pečenie textúr

**Pečenie textúr** zapíše do obrázkov, čo tvar a scéna dávajú povrchu, pozdĺž UV siete.

- Vyberte sieť, ktorá má UV (rozbaľte ju v pracovnom priestore UV), označte mapy a stlačte {{ui:Spiecť}}:
  - **Ambientná okluzia** — ako otvorený je každý bod: rohy, záhyby a miesta pod inými vecami sú tmavšie. Všetko zobrazené v modeli ju tieni až po vzdialenosť okluzie.
  - **Zakrivenie** — svetlé pozdĺž vonkajších hrán, tmavé vo vnútorných rohoch, stredne sivé na rovných a jemne zakrivených častiach, v šírke hrany, ktorú nastavíte.
  - **Normály z detailného objektu** — vyberte aj detailnú kópiu: jej detail povrchu sa zapíše ako normálová mapa pre jednoduchší objekt (objekt s menším počtom trojuholníkov sa na ňu spiecť). Vzdialenosť hľadania je, ako ďaleko od seba môžu byť oba povrchy.
  - **Osvetlenie** — slnko na mieste a v dátume modelu (Štýl) s jeho tieňmi, plus obloha, ako svetelná mapa.
- Obrázky sa pridajú do súboru a objavia sa v uzloch Obrázok. Ak materiál, ktorý upravujete, má uzol **Špina a opotrebovanie hrán**, hneď načíta novú okluziu a zakrivenie.
- Viac lúčov na texel urobí okluziu a osvetlenie hladšie a trvá to dlhšie. Pečenie beží na jadrách procesora počítača na pozadí; {{ui:Zastaviť pečenie}} ho zastaví.

## Vytvorenie grafu

1. {{ui:Pridať uzol…}} (alebo {{key:Shift+A}} v editore uzlov) pridá uzol do stredu editora.
2. Potiahnite z výstupnej bodky (na pravej strane uzla) na vstupnú bodku (na ľavej strane uzla), aby ste ich prepojili. Druhé prepojenie do vstupu nahradí prvé; prepojený vstup odtiahnite, aby ste ho odpojili.
3. Vstupy, ktoré nie sú prepojené, zobrazujú svoju hodnotu: zadajte číslo alebo vyberte farbu. Nastavenia sú v spodnej časti každého uzla.

Uzol presuňte potiahnutím za jeho názov, prázdny priestor potiahnite na posun a na zväčšenie použite koliesko. {{key:Delete}} odstráni vybrané uzly alebo prepojenie, {{key:Mod+Z}} vráti späť, {{key:Mod+D}} duplikuje, {{key:F}} zobrazí všetky uzly. Každá zmena je jeden krok späť v editore uzlov. Vlastné vrátenie modelu nemení materiály.

| Uzly | Čo vytvárajú |
|---|---|
| Súradnice textúry | Kde na dlaždici sa bod nachádza: zopakovať, posunúť, otočiť o štvrtinu. |
| Hodnota, Farba | Číslo, farba. |
| Obrázok | Obrázok zo súboru (taký, ktorý prišiel s importovaným modelom, alebo taký, ktorý ste pridali pomocou {{ui:Pridať obrázok…}}). Pre fotografiu vyberte **Farby** a pre mapu drsnosti alebo normálovú mapu **Dáta**. |
| Textúra z knižnice | Textúra, drsnosť a výška materiálu z knižnice. |
| Šachovnica, Šum | Štvorce; hladký fraktálny šum s detailom, drsnosťou a semenom. |
| Voronoi bunky, Vlny, Prechod | Bunky (vzdialenosť k najbližšiemu bodu, hrany medzi bunkami, farba na každú bunku); pásy napriečne, nahor alebo šikmo, ako sínus, píla alebo trojuholník, ohnuté šumom; lineárne, kvadratické, radiálne a sférické prechody. |
| Tehly, Dlaždice | Rady tehál s posunutým spojením alebo mriežka dlaždíc: farby, malta alebo škárovacia hmota, medzera a skosenie v metroch, výška pre reliéfy, náhodné číslo pre každý kus. |
| Drevo, Mramor | Letokruhy pozdĺž vlákna s jemnými vláknami; žilky ohnuté turbulenciou. |
| Špina a opotrebovanie hrán | Opotrebúva vypuklé hrany a zašpiňuje duté miesta z obrázkov zakrivenia a okluzie siete ([Pečenie textúr](topic:shading#bake-textures) ich vytvorí; alebo nastavte jej dve nastavenia obrázkov v rozložení UV siete: umiestnite materiál podľa súradníc UV). Bez nich nič nemení. |
| Zmiešať farby, Farebná rampa, Odtieň/sýtosť/hodnota, Jas a kontrast, Invertovať, Gama, Rozdeliť a spojiť RGB | Práca s farbami. |
| Matematika, Rozsah mapy | Aritmetika s číslami (sčítanie, násobenie, mocnina, plynulý krok a ďalšie). |
| Reliéf, Normálová mapa | Normála z výšky (Reliéf) alebo z obrázka normálovej mapy (Normálová mapa: vyberte smer zeleného kanála). |

## Výstup materiálu

Jeho nastavenia určujú, ako textúra leží na povrchoch:

- **Šírka dlaždice** a **Výška dlaždice**: koľko metrov pokrýva jedna dlaždica textúry. Všetko, čo graf vytvára, sa opakuje cez dlaždicu bez švu.
- **Umiestnenie podľa**: **Súradnice UV** nasledujú plochy (plochy z Tlač/ťah: pozdĺž každej plochy; siete: ich UV, jedna jednotka UV = jedna dlaždica), **Krabica** premieta z najbližšej z troch osí, **Triplanárne** zmieša tri premietania na naklonených povrchoch (**Ostrosť prechodu**: vyššia znamená tvrdší prechod).
- **Sila normály** mení mierku vstupu normály. **Mierka posunutia** nastavuje, ako ďaleko vstup posunutia posúva vrcholy siete.
- {{ui:Viac vstupov}} zobrazí ostatné vstupy OpenPBR: vrstvu (coat), chlpovitosť (fuzz), podpovrchový rozptyl, tenký film, priepustnosť (transmission) a ich farby.

## Vo vysokokvalitných obrázkoch

Sledovač ciest číta základnú farbu, drsnosť, kovovosť, nepriehľadnosť, normálu a emisiu z grafu, ako sa menia po povrchu. Každý iný vstup, ktorý prepojíte (napríklad vrstva, ktorá sa mení), sa použije v priemere; panel hovorí, ktorý. Výrez z textúry nepriehľadnosti ukazuje svoj tvar a jeho tieň je rovnomerne priehľadný. Žiariaca textúra osvetľuje to, čím je obrátená, bez toho, aby bola vzorkovaná ako lampa.

**Posunutie** posúva vrcholy iba sietí, preto pre detail pridajte modifikátor Rozdelenie ([Modifikátory](topic:modifiers)). Plochy z Tlač/ťah si zachovajú tvar a reliéfy dostávajú z normály.

:::tip
Na počítači s WebGPU sa graf počíta na grafickej karte; bez nej na procesore. Výsledok je rovnaký.
:::
