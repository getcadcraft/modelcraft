---
title: Otevírání, ukládání, import a export
summary: Soubor ModelCraftu, co můžete přinést dovnitř a poslat ven, kam soubory míří a co se mění offline a mezi prohlížeči.
keywords: otevřít, uložit, import, export, soubor, 3dm, skp, obnovit, automatické ukládání, poslední, desktop, otevřít ve 3d, předání, stáhnout, soubor modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formáty, offline, uložit jako
from: 0b4896d1
---

ModelCraft čte a zapisuje soubory ve vašem počítači. Nic se nenahrává: soubor, který otevřete, se čte uvnitř prohlížeče, a soubor, který uložíte, je stažení. Viz [Kam míří vaše soubory](common:your-files).

## Formáty přehledně

| Formát | Otevření | Import | Export | K čemu je |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ano | ne | {{ui:Uložit}} | Váš pracovní soubor. Zachová všechno. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ano | ano | {{ui:Uložit jako}}, {{ui:Export}} | Programy pro vykreslování a skládání scén. Vlastní USD ModelCraftu zachová všechno. Viz [Uložení, otevření a export USD](topic:usd). |
| SketchUp (`.skp`) | ne | ano | ne | Převzetí modelů ze SketchUpu. Zachová skupiny, komponenty, barvy, textury na plochách, značky a měkké hrany. Viz [Převzetí modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | ano | ano | Výměna modelů s jinými 3D modeláři. Zachová skupiny, komponenty a barvy. |
| OBJ (`.obj`) | ne | ano | ano | Programy pro vykreslování a vizualizaci. |
| glTF (`.glb`, `.gltf`) | ne | ano | jen `.glb` | Webové prohlížeče, herní enginy, AR. |
| STL (`.stl`) | ne | ano | ano | 3D tisk (v milimetrech). |
| PLY (`.ply`) | ne | ano | ano | Sítě s barvami: skeny, barevný tisk. |
| FBX (`.fbx`) | ne | ano | ne | Modely z animačních a herních programů (FBX 2011 a novější). |
| Alembic (`.abc`) | ne | ano | ne | Geometrické mezipaměti, v jejich prvním vzorku. |
| STEP (`.step`, `.stp`) | ne | ano | ne | Díly z modelářů dílů a od dodavatelů, jako uzavřené sítě ve skutečné velikosti. Viz [Formáty souborů](topic:formats). |
| `.3dm` | ne | ano | ne | Modely NURBS: polyplochy, sítě, křivky, bloky a vrstvy, jako sítě, hrany, komponenty a značky. Viz [Převzetí modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | ano | 3D tisk s barvami (v milimetrech). Z {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}: viz [Příprava modelu na 3D tisk](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | ano | Programy BIM a BimCraft. |
| DWG (`.dwg`) | ne | ano | ano | Situace nebo půdorys, na kterém modelujete; odeslání modelu do programu CAD. |
| DXF (`.dxf`) | ne | ano | ano | Totéž pro jakýkoli program CAD. |

[Formáty souborů podrobně](topic:formats) uvádí přesně, co který formát zachovává a co vynechává.

## Soubor ModelCraftu

Soubor `.modelcraft` uchovává celý model: geometrii, skupiny, komponenty, vodítka, scény, jednotky a kameru i styl, které jste měli při uložení. Historii kroků zpět neuchovává.

### Otevření modelu

1. Klikněte na {{ui:Otevřít}} ve skupině {{ui:Soubor}} nebo stiskněte {{key:Mod+O}}.
2. Pokud má model na obrazovce neuložené změny, ModelCraft se zeptá: „Tento model obsahuje neuložené změny. Nejdřív uložit kopii?“ Zvolte {{ui:Uložit kopii}}, {{ui:Zahodit změny}} nebo {{ui:Zrušit}}.
3. Vyberte soubor `.modelcraft`.

Model se otevře v jednotkách, v nichž byl uložen, s kamerou, se kterou byl uložen. Soubor `.modelcraft` můžete také pustit na 3D pohled nebo kliknout na jeden ze seznamu posledních souborů na úvodní kartě (v prohlížečích, které umějí soubor znovu otevřít, a v desktopové aplikaci).

:::desktop
V desktopové aplikaci dvojité kliknutí na soubor `.modelcraft` otevře soubor v ModelCraftu a totéž dělá **Otevřít v programu** u souboru Collada, OBJ, glTF, DWG nebo DXF (naimportuje se do nového modelu).
:::

### Uložení modelu

Klikněte na {{ui:Uložit}} nebo stiskněte {{key:Mod+S}}. Prohlížeč stáhne `<název>.modelcraft`, kde název je soubor, který jste otevřeli, nebo „Untitled“ (Bez názvu) u nového modelu.

:::desktop
V desktopové aplikaci {{ui:Uložit}} zapíše soubor, který jste otevřeli, přímo na místě. Nový model se zeptá, kam jej uložit.
:::

- {{ui:Uložit jako}} ({{key:Mod+Shift+S}}) uloží kopii jako soubor `.modelcraft` nebo jako [USD](topic:usd); kde to prohlížeč umí, zeptá se na název a místo. Jinak stažený soubor přejmenujte: další uložení po otevření přejmenovaného souboru použije nový název.
- Každé uložení je nové stažení. Podle nastavení prohlížeče jde rovnou do složky se staženými soubory, nebo se zeptá, kam uložit. Pokud tam soubor s tímto názvem už je, většina prohlížečů přidá číslo, například `Untitled (1).modelcraft`.

:::chromium
Chcete-li složku vybírat pokaždé, otevřete nastavení prohlížeče, vyhledejte „stažené soubory“ a zapněte „Před stažením se zeptat, kam se má soubor uložit“.
:::

:::firefox
Chcete-li složku vybírat pokaždé, otevřete **Nastavení**, pak **Obecné**, a v části „Stažené soubory“ zvolte „Vždy se ptát, kam ukládat soubory“.
:::

:::safari
Chcete-li změnit, kam stažené soubory míří, otevřete **Safari**, pak **Nastavení**, pak **Obecné** a nastavte „Umístění stažených souborů“.
:::

### Založení nového modelu

Klikněte na {{ui:Nový}}. Pokud jsou neuložené změny, ModelCraft se nejdřív zeptá. Nový model začíná prázdný, v jednotce vašeho jazykového nastavení (stopy a palce ve Spojených státech, jinde milimetry), bez scén.

### Pokud se prohlížeč zavře dřív, než uložíte

ModelCraft uchovává kopii neuložené práce ve vašem prohlížeči několik sekund po každé změně. Pokud se karta nebo prohlížeč zavře dřív, než uložíte, při dalším otevření ModelCraftu se zeptá „Obnovit vaši práci?“. Obnovení otevře model, jaký byl, zatím neuložený do souboru: uložte jej, abyste ho zachovali. Viz [Obnovení práce](common:recover).

### Z CadCraftu: Otevřít v ModelCraftu

V kreslicí aplikaci CadCraft vyberte **Pohled**, pak **Více**, pak **Otevřít v ModelCraftu** a otevřený výkres se v nové kartě předá ModelCraftu jako DWG. Dorazí tak, jak se importuje DWG: úsečky na zemi, ve skupině, připravené k modelování. Nic se nenahrává; soubor prochází vlastním úložištěm vašeho prohlížeče.

## Import

Import přidá soubor k modelu, který máte otevřený; nenahradí ho.

1. Klikněte na {{ui:Import}} ve skupině {{ui:Soubor}} nebo pusťte soubor na 3D pohled.
2. Vyberte soubor SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG nebo DXF.

   Soubor dorazí jako **jedna skupina**, vybraná, a pohled se přiblíží, aby ji ukázal. Stavový řádek uvede, co přišlo, a vypíše vše, co se naimportovat nepodařilo, například „Neimportováno: 2 texture“.

3. Chcete-li pracovat přímo s její geometrií, dvojitým kliknutím na skupinu upravujte uvnitř, nebo klikněte na {{ui:Rozložit}}.

Co je dobré vědět:

- **Velikost a směr nahoru:** soubory Collada uvádějí svou jednotku a která osa je nahoře a ModelCraft je převede. glTF je vždy v metrech. Soubory OBJ jednotku nenesou: ModelCraft je čte jako metry, s osou Y nahoru. Pokud OBJ přijde 1000krát větší nebo menší, použijte [Měřítko](topic:rotate-scale) s činitelem, například `0.001` nebo `1000`.
- **DWG a DXF** přicházejí jako úsečky (hrany) na zemi, ne jako plochy. Pokud výkres svou jednotku neuvádí, dialog nazvaný „Jednotky výkresu“ se zeptá, co je jedna jednotka výkresu. Viz [Modelování na situaci](topic:site-plan).
- **Limity:** soubory nad 300 MB se pro import odmítnou a nad 200 MB pro otevření. Soubory s více než 2 miliony vrcholů nebo ploch se odmítnou jako příliš velké.

## Export

1. Klikněte na {{ui:Export}} ve skupině {{ui:Soubor}}.
2. Vyberte formát: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pro tisk (.stl, milimetry)}}, {{ui:PLY s barvami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pro BimCraft (.ifc)}}, {{ui:DWG pro CAD (.dwg, 2004)}} nebo {{ui:DXF pro CAD (.dxf, R12)}}.

Prohlížeč stáhne soubor pojmenovaný jako model. Exportuje se celý model, ne jen výběr. Prázdný model se neexportuje: „Model je prázdný: nejdřív něco nakreslete.“ Viz [Export modelu pro jiné programy](topic:export-model).

## Online a offline

Všechno v ModelCraftu běží ve vašem počítači, takže modelování, otevírání, ukládání, import i export fungují bez připojení, jakmile je aplikace načtená.

Chcete-li ModelCraft otevřít zcela bez připojení, uložte jej pro offline použití, dokud jste online:

1. Klikněte na {{ui:Uložit pro offline}} v liště aplikace nahoře.
2. Tlačítko při ukládání počítá („Ukládání 40 z 212“). ModelCraft ukládá vlastní soubory (včetně čtečky DWG), tuto nápovědu a knihovnu 3D, takže to může chvíli trvat.
3. Když tlačítko zobrazí {{ui:Připraveno offline}}, ModelCraft se otevře ze stejné adresy bez připojení a import DWG funguje také offline.

Později klikněte na {{ui:Připraveno offline}} pro {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. Pokud tlačítko zobrazí {{ui:Nepodařilo se uložit}}, některé soubory se nestáhly: zkontrolujte připojení a kliknutím to zkuste znovu. {{ui:Offline není dostupné}} znamená, že toto okno prohlížeče nemůže kopii uchovat (soukromá okna a některé spravované počítače). Viz [Práce offline](common:offline).

Ukládání do cloudu zatím není k dispozici. Každý model žije tam, kam jej uložíte.

:::offline
Jste offline. Můžete dál modelovat a ukládat. Pokud lišta aplikace nezobrazuje {{ui:Připraveno offline}}, tuto kartu znovu nenačítejte, dokud nebudete zase online.
:::

## Desktopová aplikace

:::desktop
Používáte ModelCraft v CadCraft Studiu, desktopové aplikaci se všemi osmi aplikacemi. Soubory se otevírají a ukládají tam, kam si zvolíte.
:::

:::web
ModelCraft běží v prohlížeči na Macu, ve Windows a na Linuxu a v CadCraft Studiu, desktopové aplikaci se všemi osmi aplikacemi v jedné instalaci, z getcadcraft.com/download.
:::
