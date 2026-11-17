---
title: Riešenie problémov
summary: Príznaky, príčiny a riešenia od prázdneho 3D zobrazenia po importy v zlej veľkosti, so správami, ktoré ModelCraft zobrazuje.
keywords: problém, porucha, chyba, nefunguje, prázdne, webgl, grafika, pomalé, správa, import zlyhal, zlá veľkosť, nedá sa vybrať, dotyk, klávesy nefungujú, stratená práca
from: 6e7394be
---

## 3D zobrazenie je prázdne

**Príznak:** stred obrazovky zostáva prázdny alebo zobrazuje iba farbu pozadia a kliknutie na nástroje nič nerobí.

**Príčina:** ModelCraft kreslí pomocou WebGL 2, 3D grafiky prehliadača. Chýba, keď je prehliadač starý, keď je vypnuté hardvérové zrýchlenie alebo keď grafický ovládač blokuje.

**Riešenie:**

:::chromium
1. Otvorte nastavenia prehliadača a vyhľadajte „hardvérová akcelerácia“.
2. Zapnite „Používať hardvérovú akceleráciu, ak je k dispozícii“ a prehliadač znova spustite.
3. Ak je už zapnuté, zadajte do adresného riadka `chrome://gpu` (v Edge `edge://gpu`) a v zozname nájdite „WebGL2“. Ak je uvedené, že je zakázané, aktualizujte grafický ovládač.
:::

:::firefox
1. Otvorte **Nastavenia**, potom **Všeobecné** a posuňte sa na „Výkon“.
2. Zrušte začiarknutie „Použiť odporúčané nastavenia výkonu“ a potom začiarknite „Použiť hardvérovú akceleráciu, ak je k dispozícii“. Reštartujte Firefox.
3. Ak to stále nefunguje, zadajte do adresného riadka `about:support` a v sekcii „Grafika“ pozrite WebGL 2.
:::

:::safari
Aktualizujte macOS a Safari. Novšie verzie Safari majú WebGL 2 vždy zapnuté. Ak ste experimentálne funkcie zmenili v **Safari**, potom **Nastavenia**, potom **Rozšírené** (alebo **Príznaky funkcií**), obnovte ich.
:::

Na pracovnom počítači, vzdialenej ploche alebo virtuálnom počítači môže byť 3D grafika zablokovaná pravidlami. Skúste iný počítač. Pozri [Prehliadače a počítače](common:browsers).

## Klávesy nefungujú alebo píšu do poľa

**Príčina:** klávesnicový fokus je v poli panela: zoznam {{ui:Plochy}} v {{ui:Štýl}}, nastavenie slnka, pole {{ui:Názov}} v {{ui:Informácie o entite}} alebo výber jednotiek. Písmená a šípky potom idú do tohto poľa.

**Riešenie:** kliknite do 3D zobrazenia a potom klávesu stlačte znova. Klávesy nefungujú ani vtedy, keď je otvorené dialógové okno.

## Zadanie čísla nič nerobí

- **Zatiaľ nie je smer.** Zadaná dĺžka ide tým smerom, ktorým ukazuje ukazovateľ od prvého kliknutia. Pohnite ukazovateľom trochu požadovaným smerom a potom zadajte hodnotu.
- **Zlý okamih.** Väčšina nástrojov prijme zadanú hodnotu až po prvom kliknutí: najprv kliknite na prvý roh, plochu alebo bod, z ktorého sa má presúvať. {{ui:Kružnica}} a {{ui:Mnohouholník}} prijmú počet strán pred prvým kliknutím.
- **„Zadajte dĺžku, napríklad 3m, 10'6" alebo 4m,3m.“** ModelCraft ju nedokázal prečítať. Skontrolujte desatinnú čiarku (`2,5`): použite bodku.

## Tvar začína na inom mieste na dotykovej obrazovke

**Príznak:** s prstom je prvý obdĺžnik v poriadku, ale ďalší obdĺžnik, kružnica alebo úsečka začína tam, kde skončil predchádzajúci dotyk, a nie tam, kde ste sa dotkli.

**Príčina:** chyba v tejto verzii: na dotykovej obrazovke si nástroj pamätá posledný bod prichytenia z predchádzajúceho gesta.

**Riešenie:** pred každým novým tvarom znova klepnite na tlačidlo nástroja na paneli nástrojov. Nástroj sa tak spustí odznova a prvý bod sa umiestni tam, kde sa dotknete.

## Úprava jednej skupiny zmenila inú

**Príznak:** skupinu ste skopírovali pomocou {{ui:Presunúť}} a {{key:Ctrl}}, otvorili ste jednu kópiu a upravili ju, a druhá kópia sa tiež zmenila. {{ui:Strom}} zobrazuje obe s rovnakým názvom.

**Príčina:** v tejto verzii kopírovanie skupiny vytvorí druhé umiestnenie tej istej skupiny, ako pri komponente. Tlačidlo {{ui:Urobiť jedinečný}} ModelCraft ponúka iba pre komponenty.

**Riešenie:** vyberte kópiu, ktorú chcete zmeniť, kliknite na {{ui:Vytvoriť komponent}} v {{ui:Informácie o entite}}, potom na {{ui:Urobiť jedinečný}}. Táto kópia má teraz vlastný obsah. Alebo ju {{ui:Rozložiť}}.

## Tlač/ťah nerobí to, čo som čakal

- **"Tlač/ťah pracuje s plochou. Kliknite na plochu."** Kliknuli ste na hranu alebo prázdny priestor. Podržte ukazovateľ nad plochou, kým sa zvýrazní, a potom kliknite.
- **Plocha je vnútri skupiny.** Najprv dvojitým kliknutím otvorte skupinu.
- **Okno neprerezalo stenu.** Obdĺžnik musí byť nakreslený na ploche steny, nie pred ňou, a stena musí mať zadnú plochu. Pozri [Vyrezanie otvoru v stene](topic:openings#if-it-did-not-cut-through).
- **Dva kvádre sa prekrývajú bez spojenia.** Telesá zatlačené do seba sa v tejto verzii navzájom nevyrezávajú ani nespájajú.

## Úsečka alebo tvar nevytvoril plochu

Plocha sa vyplní, iba keď hrany uzavrú rovinnú slučku. Skontrolujte, či sa posledný bod prichytil k prvému („Koncový bod“) a či všetky hrany ležia v jednej rovine. Slučka, ktorá je mierne mimo roviny, zostane ako čiary. Nakreslite jednu jej hranu znova, prichytením k rohom.

## Nedá sa vybrať ani zmazať plochu

- Pri {{ui:Vybrať}} kliknutie blízko hrany vyberie hranu. Kliknite bližšie k stredu plochy.
- {{ui:Guma}} neoznačuje plochy. Vyberte plochu a stlačte {{key:Delete}}, alebo zmažte jednu z jej hrán.
- Ak patrí do skupiny alebo komponentu, kliknutie vyberie celok. Dvojitým kliknutím ho otvorte.

## "Najprv vyberte niečo na presun, alebo naň kliknite."

{{ui:Presunúť}}, {{ui:Otočiť}} a {{ui:Mierka}} potrebujú objekt, s ktorým pracujú: najprv ho vyberte alebo spustite nástroj kliknutím priamo na vec (nie na prázdny priestor alebo vodiacu čiaru).

## "Najprv vyberte geometriu (ťahajte rámček alebo trojitým kliknutím vyberte všetko súvisiace)."

{{key:G}} a {{key:Shift+G}} potrebujú výber. Vodiace čiary nemožno zoskupiť.

## Šípky otáčajú namiesto uzamknutia

Uzamknutia fungujú iba po prvom kliknutí kresliaceho alebo upravovacieho nástroja. {{ui:Tlač/ťah}} nemá uzamknutia a v {{ui:Otočiť}} nemenia uhol otočenia. Inak šípky otáčajú zobrazenie.

## Esc na celej obrazovke

Na celej obrazovke môže prehliadač použiť prvé {{key:Esc}} na ukončenie celej obrazovky. Na zrušenie nástroja stlačte {{key:Esc}} znova.

## Bez prostredného tlačidla

Stlačte {{key:O}} pre {{ui:Otáčanie}} a ťahajte, alebo použite šípky. Pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom#without-a-middle-button).

## Importy

| Správa | Čo urobiť |
|---|---|
| "ModelCraft importuje SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG a DXF. … nie je ani jeden z týchto formátov." | Exportujte model z druhého programu v jednom z týchto formátov |
| "Tento súbor má viac ako 300 MB." | Zjednodušte alebo rozdeľte model v druhom programe |
| "…príliš veľký na prácu tu (viac ako 2 milióny vrcholov)." | Rovnako |
| "Tento súbor .gltf potrebuje "…"…" | Presuňte `.gltf` spolu so súbormi `.bin` a textúrami, alebo otvorte verziu `.glb` |
| "Tento súbor glTF potrebuje rozšírenie …, ktoré ModelCraft zatiaľ nečíta." | Exportujte znova z druhého programu bez tohto rozšírenia (napríklad textúry KTX2) |
| OBJ sa importuje bez farieb alebo textúr | Presuňte `.obj` spolu so súborom `.mtl` a obrázkami |
| "Tento súbor Alembic používa starý formát HDF5…" | Uložte ho znova z druhého programu ako súbor Ogawa Alembic |
| FBX sa importuje bez textúr | Presuňte `.fbx` spolu s obrázkami textúr alebo pri exporte vložte médiá |
| "Tento súbor FBX je verzie …, ktorú ModelCraft nečíta" | Exportujte znova ako FBX 2011 alebo novší |
| STL alebo PLY sa importuje 1,000-krát príliš veľký alebo príliš malý | STL sa číta v milimetroch a PLY v metroch: zmeňte mierku (pozri [Otočenie a mierka](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Toto nie je súbor Collada (.dae)…" alebo "…nie je správne utvorený XML…" | Súbor je poškodený alebo nie je Collada. Exportujte ho znova |
| "Tento súbor Collada neobsahuje geometriu, ktorú ModelCraft môže importovať." | Obsahuje iba kamery, svetlá alebo odkazy na iné súbory |
| "Toto je binárny DXF. Uložte ho ako ASCII DXF a skúste to znova." | Uložte ho znova z CAD programu ako ASCII |
| "Toto nie je výkres DWG…" | Súbor nie je DWG alebo je poškodený |
| "Výkres sa nepodarilo prečítať (…). Môže byť poškodený alebo uložený vo verzii DWG, ktorú čítač nepodporuje…" | Zátvorky uvádzajú dôvod. Uložte ho z CAD programu ako DXF alebo ako DWG z AutoCADu 2000 až 2018 |
| "Výkres siaha viac ako 10,000 km od svojho počiatku…" | Presuňte výkres blízko 0,0 v CAD programe |

### Import má zlú veľkosť alebo leží na boku

- **OBJ:** OBJ nemá jednotku; ModelCraft ho číta v metroch. Model v milimetroch sa importuje 1000-krát väčší: [zmeňte mu mierku](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) koeficientom `0.001`; model v palcoch koeficientom `0.0254`.
- **OBJ na boku:** ModelCraft očakáva súbory OBJ s osou Y nahor. Súbor zapísaný s osou Z nahor sa importuje ležiaci. Otočte ho o 90° okolo červenej osi: kliknite na stred {{ui:Otočiť}} na plochu, ktorá smeruje pozdĺž červenej, alebo otvorte súbor v jeho programe a exportujte s osou Y nahor.
- **DWG alebo DXF:** v dialógovom okne „Jednotky výkresu“ ste zvolili zlú jednotku. Vráťte späť a importujte znova.

## Otváranie súborov

| Správa | Čo urobiť |
|---|---|
| "Tento súbor nie je model ModelCraft (nie je to JSON)." | Na iné formáty použite {{ui:Importovať}} |
| "Toto nie je súbor ModelCraft, ktorý môžeme otvoriť: …" | Súbor je poškodený alebo bol upravený ručne |
| "Tento model bol uložený novším ModelCraft…" | Otvorte ho v novšej verzii |
| "Tento súbor má viac ako 200 MB." | Model je tu príliš veľký na otvorenie |

## Stratil som prácu

ModelCraft sa sám do súboru neukladá. Keď zavriete alebo znova načítate kartu s neuloženými zmenami, prehliadač sa najprv opýta („Opustiť stránku?“ alebo „Znova načítať stránku?“); zvoľte zostať a uložiť. Nový a Otvoriť sa tiež opýtajú („Neuložené zmeny“). Ak prehliadač alebo počítač spadol, otvorte ModelCraft znova v tom istom prehliadači: ponúkne vrátiť neuloženú prácu („Obnoviť prácu?“; pozri [Obnovenie práce](common:recover)). Ukladajte často pomocou {{key:Mod+S}}.

## Priečinok so sťahovanými súbormi sa plní kópiami

Každé uloženie je nové stiahnutie s názvom `Untitled (1).modelcraft`, `Untitled (2).modelcraft` a tak ďalej. Staré súbory zmažte alebo nastavte prehliadač, aby sa pri každom súbore pýtal, kam ho uložiť, a starý súbor prepísal ručne. Pozri [Otvorenie, uloženie, import a export](topic:files#save-a-model).

## Je to pomalé

- Každý krok späť uchováva kópiu modelu ([sieť](topic:meshes) uchováva iba to, čo sa zmenilo), takže pri veľmi veľkom importe geometrie tlač/ťah trvá každá úprava dlhšie. Rozložte alebo zmažte to, čo nepotrebujete, uložte a znova otvorte: pri opätovnom otvorení sa vymaže aj história krokov späť.
- Tiene od slnka sú najnáročnejšie. Pri modelovaní zrušte začiarknutie {{ui:Tiene od slnka}}.

## Žiadne tiene

{{ui:Tiene od slnka}} je vypnuté, slnko je v čase, ktorý ste zvolili, pod obzorom („Slnko je v tomto čase pod obzorom.“) alebo je štýl {{ui:Drôtený}}, ktorý tiene nekreslí.

## "Tento prehliadač nepovolil celú obrazovku."

Niektoré prehliadače a niektoré vložené zobrazenia celú obrazovku odmietnu. Použite namiesto toho celú obrazovku prehliadača ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft sa bez pripojenia neotvorí

ModelCraft sa dá otvoriť offline, iba ak bol uložený na offline použitie v tomto prehliadači: tlačidlo na paneli aplikácie musí zobrazovať {{ui:Pripravené offline}}. Otvorte ho online a kliknite na {{ui:Uložiť na offline použitie}}. Ak tlačidlo zobrazuje {{ui:Nepodarilo sa uložiť}}, kliknite naň znova pri lepšom pripojení; {{ui:Offline nie je k dispozícii}} znamená, že toto okno (súkromné okno alebo spravovaný počítač) nemôže uchovať kópiu. Pozri [Práca offline](common:offline).
