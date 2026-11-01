---
title: Otvorenie, uloženie, import a export
summary: Súbor ModelCraft, čo môžete priniesť dnu a poslať von, kam súbory idú a čo sa mení offline a medzi prehliadačmi.
keywords: otvoriť, uložiť, import, export, súbor, 3dm, skp, obnoviť, automatické ukladanie, nedávne, počítač, otvoriť v 3d, odovzdanie, stiahnuť, súbor modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formáty, offline, uložiť ako
from: 0b4896d1
---

ModelCraft číta a zapisuje súbory vo Vašom počítači. Nič sa nenahráva: súbor, ktorý otvoríte, sa číta vo Vašom prehliadači a súbor, ktorý uložíte, je stiahnutie. Pozrite [Kam idú Vaše súbory](common:your-files).

## Formáty na prvý pohľad

| Formát | Otvoriť | Import | Export | Na čo slúži |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | áno | nie | {{ui:Uložiť}} | Váš pracovný súbor. Uchová všetko. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | áno | áno | {{ui:Uložiť ako}}, {{ui:Exportovať}} | Programy na vykresľovanie a skladanie scén. Vlastný USD z ModelCraft uchová všetko. Pozrite [Uloženie, otvorenie a export USD](topic:usd). |
| SketchUp (`.skp`) | nie | áno | nie | Prinášanie modelov zo SketchUp. Uchová skupiny, komponenty, farby, textúry na plochách, značky a mäkké hrany. Pozrite [Prinesenie modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nie | áno | áno | Výmena modelov s inými 3D modelármi. Uchová skupiny, komponenty a farby. |
| OBJ (`.obj`) | nie | áno | áno | Programy na vykresľovanie a vizualizáciu. |
| glTF (`.glb`, `.gltf`) | nie | áno | iba `.glb` | Webové prehliadače, herné nástroje, AR. |
| STL (`.stl`) | nie | áno | áno | 3D tlač (v milimetroch). |
| PLY (`.ply`) | nie | áno | áno | Siete s farbami: skeny, farebná tlač. |
| FBX (`.fbx`) | nie | áno | nie | Modely z animačných a herných programov (FBX 2011 a novšie). |
| Alembic (`.abc`) | nie | áno | nie | Vyrovnávacie pamäte geometrie, pri ich prvej vzorke. |
| STEP (`.step`, `.stp`) | nie | áno | nie | Súčiastky z modelárov súčiastok a od dodávateľov, ako uzavreté siete v skutočnej veľkosti. Pozrite [Formáty súborov](topic:formats). |
| `.3dm` | nie | áno | nie | Modely NURBS: viacplošné telesá, siete, krivky, bloky a hladiny, ako siete, hrany, komponenty a značky. Pozrite [Prinesenie modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nie | nie | áno | 3D tlač, s farbami (v milimetroch). Z {{ui:Skontrolovať pre 3D tlač (STL alebo 3MF)…}}: pozrite [Príprava modelu na 3D tlač](topic:print-3d). |
| IFC (`.ifc`) | nie | nie | áno | Programy BIM a BimCraft. |
| DWG (`.dwg`) | nie | áno | áno | Situačný plán alebo pôdorys, na ktorom sa modeluje; odoslanie modelu do programu CAD. |
| DXF (`.dxf`) | nie | áno | áno | To isté pre ľubovoľný program CAD. |

[Formáty súborov podrobne](topic:formats) uvádza presne, čo každý formát uchová a čo vynechá.

## Súbor ModelCraft

Súbor `.modelcraft` uchová celý model: geometriu, skupiny, komponenty, vodiace čiary, scény, jednotky a kameru a štýl, ktoré ste používali pri uložení. História krokov späť sa neuchová.

### Otvorenie modelu

1. Kliknite na {{ui:Otvoriť}} v skupine {{ui:Súbor}} alebo stlačte {{key:Mod+O}}.
2. Ak model na obrazovke obsahuje neuložené zmeny, ModelCraft sa opýta: „Tento model má neuložené zmeny. Uložiť najprv kópiu?“ Vyberte {{ui:Uložiť kópiu}}, {{ui:Zahodiť zmeny}} alebo {{ui:Zrušiť}}.
3. Vyberte súbor `.modelcraft`.

Model sa otvorí v jednotkách, v ktorých bol uložený, s kamerou, s ktorou bol uložený. Súbor `.modelcraft` môžete aj pustiť na 3D pohľad alebo kliknúť na jeden v zozname nedávnych súborov na úvodnej karte (prehliadače, ktoré vedia súbor znova otvoriť, a aplikácia pre počítač).

:::desktop
V aplikácii pre počítač dvojité kliknutie na súbor `.modelcraft` otvorí súbor v ModelCraft, rovnako ako **Otvoriť v programe** na súbore Collada, OBJ, glTF, DWG alebo DXF (naimportuje sa do nového modelu).
:::

### Uloženie modelu

Kliknite na {{ui:Uložiť}} alebo stlačte {{key:Mod+S}}. Prehliadač stiahne `<name>.modelcraft`, kde názov je súbor, ktorý ste otvorili, alebo „Untitled“ pre nový model.

:::desktop
V aplikácii pre počítač {{ui:Uložiť}} zapíše súbor, ktorý ste otvorili, na mieste. Nový model sa opýta, kam ho uložiť.
:::

- {{ui:Uložiť ako}} ({{key:Mod+Shift+S}}) uloží kópiu ako súbor `.modelcraft` alebo ako [USD](topic:usd); kde to prehliadač dokáže, opýta sa na názov a miesto. Inak premenujte stiahnutý súbor: ďalšie uloženie po otvorení premenovaného súboru použije nový názov.
- Každé uloženie je nové stiahnutie. Podľa nastavení prehliadača ide priamo do priečinka so stiahnutými súbormi alebo sa opýta, kam ho uložiť. Ak tam súbor s týmto názvom už je, väčšina prehliadačov pridá číslo, napríklad `Untitled (1).modelcraft`.

:::chromium
Ak chcete priečinok vyberať zakaždým, otvorte nastavenia prehliadača, vyhľadajte „stiahnuté súbory“ a zapnite „Pred stiahnutím sa opýtať, kam sa má každý súbor uložiť“.
:::

:::firefox
Ak chcete priečinok vyberať zakaždým, otvorte **Nastavenia**, potom **Všeobecné** a v časti „Súbory a aplikácie“ vyberte „Vždy sa opýtať, kam sa majú súbory ukladať“.
:::

:::safari
Ak chcete zmeniť, kam idú stiahnuté súbory, otvorte **Safari**, potom **Nastavenia**, potom **Všeobecné** a nastavte „Umiestnenie sťahovaných súborov“.
:::

### Začatie nového modelu

Kliknite na {{ui:Nový}}. Ak sú tam neuložené zmeny, ModelCraft sa najprv opýta. Nový model začína prázdny, v jednotke Vášho jazyka a regiónu (stopy a palce v Spojených štátoch, inde milimetre), bez scén.

### Ak sa prehliadač zavrie pred uložením

ModelCraft uchováva kópiu neuloženej práce vo Vašom prehliadači niekoľko sekúnd po každej zmene. Ak sa karta alebo prehliadač zavrie pred uložením, pri ďalšom otvorení ModelCraft sa opýta „Obnoviť prácu?“. Obnovenie otvorí model tak, ako bol, zatiaľ neuložený do súboru: uložte ho, aby ste ho zachovali. Pozrite [Obnovenie práce](common:recover).

### Z CadCraft: Otvoriť v ModelCraft

V kresliacej aplikácii CadCraft **Zobrazenie**, potom **Viac**, potom **Otvoriť v ModelCraft** odovzdá otvorený výkres do ModelCraft v novej karte ako DWG. Príde tak, ako importovaný DWG: čiary na zemi, v skupine, pripravené na modelovanie. Nič sa nenahráva; súbor prechádza úložiskom Vášho prehliadača.

## Import

Import pridá súbor do otvoreného modelu; nenahrádza ho.

1. Kliknite na {{ui:Import}} v skupine {{ui:Súbor}} alebo pustite súbor na 3D pohľad.
2. Vyberte súbor SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG alebo DXF.

   Súbor príde ako **jedna skupina**, vybraná, a pohľad sa priblíži, aby ju ukázal. Stavový riadok hlási, čo prišlo, a vypíše všetko, čo sa nepodarilo importovať, napríklad „Neimportované: 2 texture“.

3. Ak chcete pracovať priamo s jeho geometriou, dvakrát kliknite na skupinu a upravujte vnútri, alebo kliknite na {{ui:Rozložiť}}.

Čo je dobré vedieť:

- **Veľkosť a smer nahor:** súbory Collada uvádzajú svoju jednotku a ktorá os smeruje nahor a ModelCraft ich prevedie. glTF je vždy v metroch. Súbory OBJ jednotku nenesú: ModelCraft ich číta ako metre, s osou Y nahor. Ak OBJ príde 1000-krát príliš veľký alebo malý, použite [Mierka](topic:rotate-scale) s koeficientom, napríklad `0.001` alebo `1000`.
- **DWG a DXF** prídu ako čiary (hrany) na zemi, nie ako plochy. Ak výkres jednotku neuvádza, dialógové okno s názvom „Jednotky výkresu“ sa opýta, čo je jedna jednotka výkresu. Pozrite [Modelovanie na situačnom pláne](topic:site-plan).
- **Limity:** súbory nad 300 MB sa pri importe odmietnu a nad 200 MB pri otvorení. Súbory s viac ako 2 miliónmi vrcholov alebo plôch sa odmietnu ako príliš veľké.

## Export

1. Kliknite na {{ui:Export}} v skupine {{ui:Súbor}}.
2. Vyberte formát: {{ui:Binárny glTF (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL na tlač (.stl, milimetre)}}, {{ui:PLY s farbami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pre BimCraft (.ifc)}}, {{ui:DWG pre CAD (.dwg, 2004)}} alebo {{ui:DXF pre CAD (.dxf, R12)}}.

Prehliadač stiahne súbor pomenovaný podľa modelu. Exportuje sa celý model, nielen výber. Prázdny model sa neexportuje: „Model je prázdny: najprv niečo nakreslite.“ Pozrite [Export modelu pre iné programy](topic:export-model).

## Online a offline

Všetko v ModelCraft beží vo Vašom počítači, takže modelovanie, otváranie, ukladanie, import a export fungujú bez pripojenia, keď je aplikácia raz načítaná.

Ak chcete ModelCraft otvoriť úplne bez pripojenia, uložte ho na offline použitie, kým ste online:

1. Kliknite na {{ui:Uložiť na offline použitie}} v paneli aplikácie úplne hore.
2. Tlačidlo počíta („Ukladá sa 40 z 212“), kým ukladá. ModelCraft ukladá vlastné súbory (medzi nimi čítačku DWG), tohto pomocníka a 3D knižnicu, takže to môže chvíľu trvať.
3. Keď tlačidlo hlási {{ui:Pripravené offline}}, ModelCraft sa otvorí z tej istej adresy bez pripojenia a funguje aj import DWG offline.

Neskôr kliknite na {{ui:Pripravené offline}} pre {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. Ak tlačidlo hlási {{ui:Nepodarilo sa uložiť}}, niektoré súbory sa nestiahli: skontrolujte pripojenie a kliknutím naň to skúste znova. {{ui:Offline nie je k dispozícii}} znamená, že toto okno prehliadača nemôže uchovať kópiu (súkromné okná a niektoré spravované počítače). Pozrite [Práca offline](common:offline).

Ukladanie do cloudu zatiaľ nie je k dispozícii. Každý model žije tam, kam ho uložíte.

:::offline
Ste offline. Môžete ďalej modelovať a ukladať. Ak panel aplikácie neukazuje {{ui:Pripravené offline}}, túto kartu neobnovujte, kým nebudete znova online.
:::

## Aplikácia pre počítač

:::desktop
Používate ModelCraft v CadCraft Studio, aplikácii pre počítač so všetkými ôsmimi aplikáciami. Súbory sa otvárajú a ukladajú tam, kde si vyberiete.
:::

:::web
ModelCraft beží v prehliadači na Macu, Windows a Linuxe a v CadCraft Studio, aplikácii pre počítač so všetkými ôsmimi aplikáciami v jednej inštalácii, z getcadcraft.com/download.
:::
