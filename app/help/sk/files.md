---
title: Otvoriť, uložiť, importovať a exportovať
summary: Súbor ModelCraft, čo môžete priniesť a odoslať, kam súbory smerujú a čo sa mení offline a medzi prehliadačmi.
keywords: otvoriť, uložiť, importovať, exportovať, súbor, 3dm, skp, obnoviť, automatické ukladanie, nedávne, desktop, otvoriť v 3D, odovzdanie, stiahnuť, súbor modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formáty, offline, uložiť ako
from: 3f09ab72
---

ModelCraft číta a zapisuje súbory na vašom počítači. Nič sa nenahráva: súbor, ktorý otvoríte, sa číta vo vašom prehliadači a súbor, ktorý uložíte, je stiahnutie. Pozri [Kam smerujú vaše súbory](common:your-files).

## Formáty na prvý pohľad

| Formát | Otvoriť | Importovať | Exportovať | Na čo slúži |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | áno | nie | {{ui:Uložiť}} | Váš pracovný súbor. Uchováva všetko. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | áno | áno | {{ui:Uložiť ako}}, {{ui:Exportovať}} | Programy na vykresľovanie a skladanie scén. Vlastný formát USD v ModelCraft uchováva všetko. Pozri [Uloženie, otvorenie a export USD](topic:usd). |
| SketchUp (`.skp`) | nie | áno | nie | Priniesť modely zo SketchUpu. Uchováva skupiny, komponenty, farby, textúry na plochách, značky a mäkké hrany. Pozri [Import modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nie | áno | áno | Výmena modelov s inými 3D modelármi. Uchováva skupiny, komponenty a farby. |
| OBJ (`.obj`) | nie | áno | áno | Programy na vykresľovanie a vizualizáciu. |
| glTF (`.glb`, `.gltf`) | nie | áno | len `.glb` | Webové prehliadače modelov, herné enginy, AR. |
| STL (`.stl`) | nie | áno | áno | 3D tlač (v milimetroch). |
| PLY (`.ply`) | nie | áno | áno | Siete s farbami: skeny, farebná tlač. |
| FBX (`.fbx`) | nie | áno | nie | Modely z animačných a herných programov (FBX 2011 a novší). |
| Alembic (`.abc`) | nie | áno | nie | Vyrovnávacia pamäť geometrie, na jej prvej vzorke. |
| STEP (`.step`, `.stp`) | nie | áno | nie | Súčiastky z modelárov súčiastok a dodávateľov ako uzavreté siete v ich skutočnej veľkosti. Pozri [Formáty súborov](topic:formats). |
| `.3dm` | nie | áno | nie | Modely NURBS: polyplochy, siete, krivky, bloky a hladiny, ako siete, hrany, komponenty a značky. Pozri [Import modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nie | nie | áno | 3D tlač s farbami (v milimetroch). Z {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}: pozri [Príprava modelu na 3D tlač](topic:print-3d). |
| IFC (`.ifc`) | nie | nie | áno | BIM programy a BimCraft. |
| DWG (`.dwg`) | nie | áno | áno | Situačný plán alebo pôdorys na modelovanie; odoslanie modelu do CAD programu. |
| DXF (`.dxf`) | nie | áno | áno | To isté pre ľubovoľný CAD program. |

[Formáty súborov podrobne](topic:formats) uvádza presne, čo každý formát uchováva a čo vynecháva.

## Súbor ModelCraft

Súbor `.modelcraft` uchováva celý model: geometriu, skupiny, komponenty, vodítka, scény, jednotky a kameru a štýl, ktoré ste používali pri uložení. Nezachováva históriu späť.

### Otvorenie modelu

1. Kliknite na {{ui:Otvoriť}} v skupine {{ui:Súbor}} alebo stlačte {{key:Mod+O}}.
2. Ak model na obrazovke obsahuje neuložené zmeny, ModelCraft sa spýta: "Tento model obsahuje zmeny, ktoré nie sú uložené. Najprv uložiť kópiu?" Vyberte {{ui:Uložiť kópiu}}, {{ui:Zahodiť zmeny}} alebo {{ui:Zrušiť}}.
3. Vyberte súbor `.modelcraft`.

Model sa otvorí v jednotkách, v ktorých bol uložený, s kamerou, s ktorou bol uložený. Súbor `.modelcraft` môžete aj pretiahnuť do 3D zobrazenia alebo kliknúť naň v zozname nedávnych súborov na štartovacej karte (prehliadače, ktoré dokážu znova otvoriť súbor, a desktopová aplikácia).

:::desktop
V desktopovej aplikácii dvojitým kliknutím na súbor `.modelcraft` sa otvorí v ModelCraft. Rovnako to urobí **Otvoriť pomocou** pri súbore Collada, OBJ, glTF, DWG alebo DXF; ten sa importuje do nového modelu.
:::

### Uloženie modelu

Kliknite na {{ui:Uložiť}} alebo stlačte {{key:Mod+S}}. Prehliadač stiahne `<name>.modelcraft`, kde názvom je súbor, ktorý ste otvorili, alebo "Untitled" pri novom modeli.

:::desktop
V desktopovej aplikácii {{ui:Uložiť}} zapíše otvorený súbor na jeho mieste. Nový model sa spýta, kam ho uložiť.
:::

- {{ui:Uložiť ako}} ({{key:Mod+Shift+S}}) uloží kópiu ako súbor `.modelcraft` alebo ako [USD](topic:usd); ak to prehliadač dovolí, spýta sa na názov a miesto. Inak premenujte stiahnutý súbor: ďalšie uloženie po otvorení premenovaného súboru použije nový názov.
- Každé uloženie je nové stiahnutie. Podľa nastavení prehliadača ide priamo do priečinka sťahovania alebo sa spýta, kam ho uložiť. Ak tam už súbor s týmto názvom je, väčšina prehliadačov pridá číslo, napríklad `Untitled (1).modelcraft`.

:::chromium
Ak chcete zakaždým vybrať priečinok, otvorte nastavenia prehliadača, vyhľadajte "downloads" a zapnite "Ask where to save each file before downloading".
:::

:::firefox
Ak chcete zakaždým vybrať priečinok, otvorte **Nastavenia**, potom **Všeobecné** a v časti "Downloads" zvoľte "Always ask you where to save files".
:::

:::safari
Ak chcete zmeniť, kam smerujú sťahované súbory, otvorte **Safari**, potom **Nastavenia**, potom **Všeobecné** a nastavte "File download location".
:::

### Nový model

Kliknite na {{ui:Nový}}. Ak existujú neuložené zmeny, ModelCraft sa najprv spýta. Nový model začína prázdny, v jednotke vášho regiónu (stopy a palce v Spojených štátoch, milimetre inde), bez scén.

### Ak sa prehliadač zavrie pred uložením

ModelCraft ukladá kópiu neuložených prác vo vašom prehliadači pár sekúnd po každej zmene. Kópia sa zapisuje na pozadí, takže veľký model vás nezdrží. Ak sa karta alebo prehliadač zavrú pred uložením, pri ďalšom otvorení ModelCraft sa spýta "Obnoviť vašu prácu?". Obnovenie otvorí model tak, ako bol, zatiaľ neuložený do súboru: uložte ho, aby ste ho zachovali. Pozri [Obnovenie vašej práce](common:recover).

### Z CadCraft: Otvoriť v ModelCraft

V kresliacej aplikácii CadCraft: **Zobraziť**, potom **Viac**, potom **Otvoriť v ModelCraft** odovzdá otvorený výkres ModelCraft na novej karte ako DWG. Príde tak, ako príde importovaný DWG: čiary na zemi, v skupine, pripravené na modelovanie. Nič sa nenahráva; súbor prechádza cez vlastné úložisko vášho prehliadača.

## Import

Import pridá súbor do otvoreného modelu; nenahrádza ho.

1. Kliknite na {{ui:Importovať}} v skupine {{ui:Súbor}} alebo pretiahnite súbor do 3D zobrazenia.
2. Vyberte súbor SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG alebo DXF.

   Súbor sa objaví ako **jedna skupina**, označená, a zobrazenie sa priblíži, aby ju ukázalo. Stavový riadok hovorí, čo prišlo, a uvádza, čo sa nepodarilo importovať, napríklad "Neimportované: 2 textúry".

3. Ak chcete pracovať priamo s jej geometriou, dvojitým kliknutím na skupinu ju upravujte zvnútra alebo kliknite na {{ui:Rozložiť}}.

Niektoré veci, ktoré treba vedieť:

- **Veľkosť a smer nahor:** Súbory Collada uvádzajú svoju jednotku a to, ktorá os je nahor; ModelCraft ich prevedie. glTF je vždy v metroch. Súbory OBJ nenesú jednotku: ModelCraft ich číta ako metre, s osou Y nahor. Ak OBJ príde 1000-krát väčší alebo menší, použite [Mierku](topic:rotate-scale) s faktorom ako `0.001` alebo `1000`.
- **DWG a DXF** prichádzajú ako čiary (hrany) na zemi, nie ako plochy. Ak výkres neuvádza svoju jednotku, dialógové okno s názvom "Jednotky výkresu" sa spýta, čo je jedna jednotka výkresu. Pozri [Modelovanie na situačnom pláne](topic:site-plan).
- **Limity:** súbory väčšie ako 300 MB sa na import odmietnu a nad 200 MB na otvorenie. Súbory s viac ako 2 miliónmi vrcholov alebo plôch sa odmietnu ako príliš veľké. OBJ väčší ako 64 MB sa odmietne skôr, než sa načíta. Textové súbory (Collada, OBJ, ASCII STL, textový USD) sa čítajú po kúskoch, asi po 4 MB, takže žiadny blok textu nedrží celý súbor; 16 MB OBJ používal pri otváraní v našom teste asi 0.5 GB pamäte.

## Export

1. Kliknite na {{ui:Exportovať}} v skupine {{ui:Súbor}}.
2. Vyberte formát: {{ui:Binárny glTF (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL na tlač (.stl, milimetre)}}, {{ui:PLY s farbami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pre BimCraft (.ifc)}}, {{ui:DWG pre CAD (.dwg, 2004)}} alebo {{ui:DXF pre CAD (.dxf, R12)}}.

Prehliadač stiahne súbor pomenovaný podľa modelu. Exportuje sa celý model, nie len výber. Súbory glTF, Collada a OBJ sa zapisujú na pozadí, takže ModelCraft pracuje ďalej, kým sa veľký model exportuje; stiahnutie začne, keď je súbor pripravený. Prázdny model sa neexportuje: "Model je prázdny: najprv niečo nakreslite." Pozri [Export modelu pre iné programy](topic:export-model).

## Online a offline

Všetko v ModelCraft beží na vašom počítači, takže modelovanie, otváranie, ukladanie, import a export fungujú aj bez pripojenia, keď je aplikácia načítaná.

Ak chcete ModelCraft otvoriť úplne bez pripojenia, uložte ho na offline použitie, kým ste online:

1. Kliknite na {{ui:Uložiť na offline použitie}} v hornom paneli aplikácie.
2. Tlačidlo počíta ("Ukladá sa 40 z 212"), kým ukladá. ModelCraft ukladá svoje vlastné súbory (medzi nimi aj čítačku DWG), túto nápovedu a knižnicu 3D, takže to môže chvíľu trvať.
3. Keď tlačidlo ukazuje {{ui:Pripravené offline}}, ModelCraft sa otvorí z tej istej adresy bez pripojenia a import DWG funguje aj offline.

Kliknutím na {{ui:Pripravené offline}} neskôr získate {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. Ak tlačidlo ukazuje {{ui:Nepodarilo sa uložiť}}, niektoré súbory sa nestiahli: skontrolujte pripojenie a kliknutím to skúste znova. {{ui:Offline nie je k dispozícii}} znamená, že toto okno prehliadača nedokáže uchovať kópiu (súkromné okná a niektoré spravované počítače). Pozri [Práca offline](common:offline).

Ukladanie do cloudu zatiaľ nie je k dispozícii. Každý model je tam, kam ho uložíte.

:::offline
Ste offline. Môžete ďalej modelovať a ukladať. Pokiaľ horný panel neukazuje {{ui:Pripravené offline}}, neobnovujte túto kartu, kým nebudete znova online.
:::

## Desktopová aplikácia

:::desktop
Používate ModelCraft v CadCraft Studio, desktopovej aplikácii so všetkými ôsmimi aplikáciami. Súbory sa otvárajú a ukladajú tam, kde si vyberiete.
:::

:::web
ModelCraft beží v prehliadači na Macu, Windowse a Linuxe a v CadCraft Studio, desktopovej aplikácii so všetkými ôsmimi aplikáciami v jednej inštalácii, z getcadcraft.com/download.
:::
