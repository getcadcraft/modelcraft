---
title: Obrazovka ModelCraft
summary: Prehliadka panela nástrojov, panelov na každej strane, 3D pohľadu a stavového riadka, pod názvami, ktoré sú na obrazovke.
keywords: obrazovka, rozloženie, panel nástrojov, panely, strom, informácie o entite, štýl, scény, stavový riadok, pole hodnôt, jednotky, rozhranie, prehliadka
from: 4a9a4516
---

Zhora nadol: panel aplikácie, panel nástrojov, tri stĺpce (ľavé panely, 3D pohľad, pravé panely) a stavový riadok.

## Panel aplikácie

Úzky panel úplne hore patrí každej aplikácii CadCraft. Obsahuje názov aplikácie a verziu, {{ui:O aplikácii ModelCraft}}, tlačidlo režimu obrazovky a prepínač {{ui:Papier}} / {{ui:Model}}.

- {{ui:Papier}} je svetlý motív a {{ui:Model}} tmavý. 3D pohľad prispôsobí svoje farby; Váš model sa nemení.
- Tlačidlo režimu obrazovky (spočiatku hlási {{ui:Celá obrazovka}}) a {{key:Ctrl+Shift+F}} prepínajú tri režimy: normálny, celá obrazovka a celá obrazovka so skrytými panelmi. So skrytými panelmi ukážte na horný okraj obrazovky (alebo naň ťuknite) a vrátia sa. {{key:Esc}} opustí celú obrazovku.

:::note
{{key:Ctrl+Shift+F}} používa kláves Ctrl na všetkých počítačoch, aj na Macu. Na iPhone, kde prehliadače nemajú celú obrazovku, tlačidlo iba skrýva a zobrazuje panely.
:::

## Panel nástrojov

Panel nástrojov je rozdelený do označených skupín. Podržte ukazovateľ nad tlačidlom a uvidíte jeho názov a kláves.

Vľavo zoznam {{ui:Pracovný priestor}} prepína, na čo slúži panel nástrojov a pravý panel: {{ui:Model}} (modelovanie tlač/ťah, prehliadka nižšie), {{ui:Sieť}} ([úprava siete](topic:mesh-edit)), {{ui:Krivka}} ([objekty krivky](topic:curves)), {{ui:UV}} ([rozloženie UV](topic:uv)), {{ui:Sochanie}} ([sochanie](topic:sculpt)), {{ui:Tieňovanie}} ([materiály z uzlov](topic:shading)), {{ui:Animácia}} ([animácia](topic:animate)) a {{ui:Vykreslenie}} ([vykresľovanie v pohľade](topic:render#render-in-the-view)).

| Skupina | Tlačidlá |
|---|---|
| Súbor | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Uložiť}}, {{ui:Import}}, {{ui:Export}} (ponuka formátov) |
| Kreslenie | {{ui:Úsečka}} ({{key:L}}), {{ui:Obdĺžnik}} ({{key:R}}), {{ui:Kružnica}} ({{key:C}}), {{ui:Mnohouholník}} ({{key:N}}) |
| Úpravy | {{ui:Vybrať}} ({{key:Space}}), {{ui:Tlač/ťah}} ({{key:P}}), {{ui:Presunúť}} ({{key:M}}), {{ui:Otočiť}} ({{key:Q}}), {{ui:Mierka}} ({{key:S}}), {{ui:Guma}} ({{key:E}}), {{ui:Pásmo}} ({{key:T}}) |
| Usporiadanie | {{ui:Komponent}} ({{key:G}}), {{ui:Skupina}} ({{key:Shift+G}}), {{ui:Rozložiť}} |
| Úpravy (druhá skupina) | {{ui:Späť}} ({{key:Mod+Z}}), {{ui:Znova}} ({{key:Mod+Y}}), {{ui:Kopírovať}} ({{key:Mod+C}}), {{ui:Prilepiť}} ({{key:Mod+V}}), {{ui:Viac}} (ponuka: vystrihnúť, kopírovať, prilepiť, prilepiť na rovnaké miesto {{key:Mod+Shift+V}}, duplikovať {{key:Mod+D}}, zmazať, vybrať všetko, zrušiť výber a štýl klávesov) |
| Kamera | {{ui:Orbit}} ({{key:O}}), {{ui:Posun}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Rozsah}} ({{key:Shift+Z}}), {{ui:Pohľady}} (ponuka) |

Zobrazené klávesy sú klávesy štýlu tlač/ťah; ak v [Nastaveniach ModelCraft](topic:settings) vyberiete štýl Modelár, popisy nástrojov ukazujú namiesto nich tie klávesy. Nástroj, ktorý používate, je zobrazený stlačený. Na úzkej obrazovke sa panel nástrojov posúva do strán.

Ponuka {{ui:Pohľady}} obsahuje {{ui:Izo}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Sprava}}, {{ui:Zozadu}}, {{ui:Zľava}} a {{ui:Zdola}}, každý prispôsobený modelu, a {{ui:Perspektíva}}, ktorá prepína medzi perspektívnym a rovnobežným premietaním.

## 3D pohľad

Stred obrazovky. Červená, zelená a modrá čiara sú osi: červená a zelená ležia na zemi, modrá smeruje nahor a **sever je zelená os**. Kde sa stretávajú, je počiatok.

- Na začiatku karta s názvom „Začnite modelovať“ uvádza prvých pár klávesov. Zmizne, keď vyberiete kresliaci nástroj alebo kliknete do pohľadu.
- Pri práci nástroja ukazuje pohľad **značky odvodzovania**: malé farebné tvary tam, kde sa ukazovateľ prichytáva (zelený kruh na koncovom bode, azúrový na strede, červený štvorec na hrane, modrý kosoštvorec na ploche). Pozrite [Odvodzovanie a prichytávanie](topic:inference).
- Vybrané veci sa sfarbia na modro. Plocha videná zozadu je modrosivá.
- Keď otvoríte skupinu na úpravu, všetko mimo nej zoslabne a osi sa presunú na vlastné osi skupiny.
- Keď má model scény, cez vrch pohľadu sa objaví rad kariet scén.
- Súbor pustený kamkoľvek na pohľad sa otvorí alebo naimportuje.

## Ľavé panely

**{{ui:Strom}}** vypisuje skupiny a komponenty v modeli, vnorené tak, ako sú vnorené v modeli. Komponent použitý viackrát ukazuje, koľkokrát, napríklad „Window (4)“.

- Kliknutím na názov ho vyberiete. Dvojitým kliknutím ho otvoríte na úpravu.
- **Hľadať podľa názvu** (zobrazí sa, keď sú dve alebo viac skupín) ponechá len riadky, ktorých názov sa zhoduje, spolu so skupinami, v ktorých sú. {{key:Esc}} to vymaže.
- **Oko** na konci riadka skryje alebo zobrazí danú skupinu alebo komponent (ako {{ui:Upraviť}} › {{ui:Viac}} › {{ui:Skryť}}). Ikona značky znamená, že je skrytý svojou [značkou](topic:tags).
- **Premenovanie na mieste:** kliknite na riadok, stlačte {{key:F2}}, píšte a stlačte {{key:Enter}} ({{key:Esc}} ponechá starý názov).
- **Pretiahnutie riadka** na stred riadka inej skupiny ho presunie dovnútra tejto skupiny, na horný alebo dolný okraj riadka ho vloží tesne pred alebo za tento riadok a na nadpis {{ui:Strom}} ho presunie na najvyššiu úroveň. V modeli zostáva na mieste a ponecháva si farbu, značku a názov. Skupina nemôže ísť sama do seba. Každý presun je jeden krok späť. Pozrite [Preusporiadanie v strome](topic:groups-components#rearrange-in-the-outliner).
- Pri úprave vnútri skupiny riadok hlási „Úpravy: Model › …“ a objaví sa tlačidlo {{ui:Zavrieť skupinu}}. Zavrie všetky otvorené úrovne naraz.

**{{ui:Komponenty}}** vypisuje každú definíciu komponentu s počtom umiestnených kópií („3×“) a tlačidlom {{ui:Umiestniť}}, ktoré pridá ďalšiu kópiu tam, kam kliknete.

## Pravé panely

**{{ui:Informácie o entite}}** opisujú, čo je vybrané. Jeho nadpis sa mení podľa toho, čo to je:

| Nadpis | Ukazuje | Tlačidlá |
|---|---|---|
| Model (nič nie je vybrané) | Plochy, hrany, skupiny, komponenty a koľko je umiestnených, vodiace čiary, celková veľkosť | {{ui:Zmazať všetky vodiace čiary}} (keď sú vodiace čiary) |
| Plocha | Obsah, počet otvorov | {{ui:Obrátiť plochu}} |
| Hrana | Dĺžka | žiadne |
| Skupina alebo komponent | Názov (písaním premenujete), koľkokrát je umiestnený, či je uzavretým telesom, jeho objem, jeho veľkosť | {{ui:Upraviť}}, {{ui:Rozložiť}}, {{ui:Urobiť jedinečný}} (komponent umiestnený viackrát), {{ui:Vytvoriť komponent}} (skupina) |
| Vodiaci bod alebo vodiaca čiara | nič | {{ui:Zmazať}} |
| Viac vecí | Koľko plôch, hrán, skupín a vodiacich čiar, celkový obsah plôch | {{ui:Vytvoriť komponent (G)}}, {{ui:Vytvoriť skupinu (Shift+G)}} |

**{{ui:Štýl}}** nastavuje, ako sa model kreslí: {{ui:Plochy}} ({{ui:Tieňovaný}}, {{ui:Skrytá čiara}}, {{ui:Drôtený}}, {{ui:Röntgen}}), {{ui:Zobraziť hrany}} a {{ui:Tiene od slnka}} s dátumom, časom a polohou slnka. Pozrite [Štýly a tiene od slnka](topic:styles-shadows).

**{{ui:Scény}}** ukladajú pohľady: {{ui:Pridať scénu}}, zoznam scén a {{ui:Predchádzajúca}}, {{ui:Prehrať}} a {{ui:Nasledujúca}}. Pozrite [Ukladanie pohľadov ako scén](topic:scenes).

## Stavový riadok

Dole, zľava doprava:

1. **Tip**: čo nástroj chce ako ďalšie, alebo k čomu sa ukazovateľ prichytáva („Koncový bod“, „Na červenej osi“).
2. **Hlásenia**: čo sa práve stalo („Krok tlač/ťah bol vrátený.“, „Súbor site.dxf bol importovaný: 1697 hrán na zemi, v skupine.“) alebo prečo niečo nefungovalo.
3. **Pole hodnôt**: jeho označenie sa mení podľa nástroja ({{ui:Dĺžka}}, {{ui:Rozmery}}, {{ui:Polomer}}, {{ui:Strany}}, {{ui:Vzdialenosť}}, {{ui:Uhol}}, {{ui:Mierka}}, {{ui:Odsadenie}}). Pri práci ukazuje aktuálnu veľkosť a preberá, čo napíšete. Pozrite [Zadávanie presných veľkostí v poli hodnôt](topic:value-box).
4. **Štýl klávesov**: {{ui:Klávesy: Tlač/ťah}} alebo {{ui:Klávesy: Modelár}} naraz prepína klávesové skratky a tlačidlá myši (rovnako ako v [Nastaveniach ModelCraft](topic:settings)).
5. **{{ui:Prichytávanie}} a {{ui:Kolízia}}**: prichytávanie k bodom, hranám a osiam a telesá, ktoré sa zastavia, keď sa dotknú. Prečiarknuté = vypnuté. Kliknutím prepnete. Pozrite [Nastavenia ModelCraft](topic:settings).
6. **Výber jednotiek**: jednotka, v ktorej sa dĺžky zobrazujú. Pozrite [Začíname](topic:getting-started#check-the-units-first).

## Na úzkej obrazovke

Pod šírku približne 760 pixelov (telefón alebo úzke okno) si 3D pohľad ponecháva obrazovku. Panel nástrojov je jeden riadok, ktorý sa posúva do strán, a panely sa otvárajú ako listy z panela dole na obrazovke.
