---
title: Otevřít, uložit, importovat a exportovat
summary: Soubor ModelCraft, co lze importovat a odeslat ven, kam soubory putují a co se mění offline a mezi prohlížeči.
keywords: otevřít, uložit, import, export, soubor, 3dm, skp, obnovit, automatické ukládání, poslední, desktop, otevřít ve 3D, předání, stáhnout, soubor modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formáty, offline, uložit jako
from: 3f09ab72
---

ModelCraft čte a zapisuje soubory na Vašem počítači. Nic se nenahrává: soubor, který otevřete, se čte uvnitř Vašeho prohlížeče a soubor, který uložíte, je stažení. Viz [Kam putují Vaše soubory](common:your-files).

## Přehled formátů

| Formát | Otevřít | Import | Export | K čemu slouží |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | ano | ne | {{ui:Uložit}} | Váš pracovní soubor. Uchovává vše. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | ano | ano | {{ui:Uložit jako}}, {{ui:Export}} | Programy pro vykreslování a sestavování scén. Vlastní USD ModelCraftu uchovává vše. Viz [Uložení, otevření a export USD](topic:usd). |
| SketchUp (`.skp`) | ne | ano | ne | Import modelů ze SketchUpu. Zachovává skupiny, komponenty, barvy, textury na plochách, značky a měkké hrany. Viz [Import modelu SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | ne | ano | ano | Výměna modelů s jinými 3D modelovacími programy. Zachovává skupiny, komponenty a barvy. |
| OBJ (`.obj`) | ne | ano | ano | Programy pro vykreslování a vizualizaci. |
| glTF (`.glb`, `.gltf`) | ne | ano | jen `.glb` | Webové prohlížeče 3D modelů, herní enginy, AR. |
| STL (`.stl`) | ne | ano | ano | 3D tisk (v milimetrech). |
| PLY (`.ply`) | ne | ano | ano | Sítě s barvami: skeny, barevný tisk. |
| FBX (`.fbx`) | ne | ano | ne | Modely z animačních programů a programů pro hry (FBX 2011 a novější). |
| Alembic (`.abc`) | ne | ano | ne | Cache geometrie, v jejím prvním vzorku. |
| STEP (`.step`, `.stp`) | ne | ano | ne | Díly z programů pro modelování dílů a od dodavatelů, jako uzavřené sítě ve skutečné velikosti. Viz [Formáty souborů](topic:formats). |
| `.3dm` | ne | ano | ne | Modely NURBS: polyplochy, sítě, křivky, bloky a vrstvy, jako sítě, hrany, komponenty a značky. Viz [Import modelu .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | ne | ne | ano | 3D tisk, s barvami (v milimetrech). Z {{ui:Zkontrolovat pro 3D tisk (STL nebo 3MF)…}}: viz [Příprava modelu na 3D tisk](topic:print-3d). |
| IFC (`.ifc`) | ne | ne | ano | Programy BIM a BimCraft. |
| DWG (`.dwg`) | ne | ano | ano | Situační nebo půdorysný plán k modelování; odeslání modelu do CAD programu. |
| DXF (`.dxf`) | ne | ano | ano | Totéž pro libovolný CAD program. |

[Formáty souborů podrobně](topic:formats) přesně uvádí, co každý formát zachovává a co vynechává.

## Soubor ModelCraft

Soubor `.modelcraft` uchovává celý model: geometrii, skupiny, komponenty, vodítka, scény, jednotky a kameru a styl, které jste používali při uložení. Historii zpět neukládá.

### Otevření modelu

1. Klikněte na {{ui:Otevřít}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+O}}.
2. Pokud model na obrazovce obsahuje neuložené změny, ModelCraft se zeptá: "Tento model obsahuje neuložené změny. Nejdříve uložit kopii?" Zvolte {{ui:Uložit kopii}}, {{ui:Zahodit změny}} nebo {{ui:Zrušit}}.
3. Vyberte soubor `.modelcraft`.

Model se otevře v jednotkách, ve kterých byl uložen, s kamerou, se kterou byl uložen. Soubor `.modelcraft` můžete také přetáhnout do 3D pohledu nebo kliknout na něj v seznamu posledních souborů na úvodní kartě (prohlížeče, které umějí znovu otevřít soubor, a desktopová aplikace).

:::desktop
V desktopové aplikaci se soubor `.modelcraft` otevře v ModelCraftu dvojklikem a stejně tak příkazem **Otevřít pomocí** u souboru Collada, OBJ, glTF, DWG nebo DXF (soubor se importuje do nového modelu).
:::

### Uložení modelu

Klikněte na {{ui:Uložit}} nebo stiskněte {{key:Mod+S}}. Prohlížeč stáhne soubor `<name>.modelcraft`, kde název je jméno otevřeného souboru, nebo "Untitled" u nového modelu.

:::desktop
V desktopové aplikaci {{ui:Uložit}} zapíše soubor, který jste otevřeli, na jeho místo. Nový model se zeptá, kam ho uložit.
:::

- {{ui:Uložit jako}} ({{key:Mod+Shift+S}}) uloží kopii jako soubor `.modelcraft` nebo jako [USD](topic:usd); kde to prohlížeč umožňuje, zeptá se na název a místo. Jinak soubor stažený přejmenujte: další uložení po otevření přejmenovaného souboru použije nový název.
- Každé uložení je nové stažení. Podle nastavení prohlížeče jde buď rovnou do složky Stažené, nebo se zeptá, kam soubor uložit. Pokud tam soubor se stejným názvem už je, většina prohlížečů přidá číslo, například `Untitled (1).modelcraft`.

:::chromium
Chcete-li vybírat složku pokaždé, otevřete nastavení prohlížeče, vyhledejte "stahování" a zapněte "Zeptat se, kam uložit každý soubor před stažením".
:::

:::firefox
Chcete-li vybírat složku pokaždé, otevřete **Nastavení**, pak **Obecné**, a v části "Stahování" zvolte "Vždy se zeptat, kam uložit soubory".
:::

:::safari
Chcete-li změnit, kam jdou stažené soubory, otevřete **Safari**, pak **Nastavení**, pak **Obecné**, a nastavte "Umístění stahovaných souborů".
:::

### Nový model

Klikněte na {{ui:Nový}}. Pokud jsou neuložené změny, ModelCraft se nejdřív zeptá. Nový model začíná prázdný, v jednotkách Vaší jazykové verze (stopy a palce ve Spojených státech, milimetry jinde), bez scén.

### Pokud se prohlížeč zavře před uložením

ModelCraft si několik sekund po každé změně uchovává kopii neuložené práce ve Vašem prohlížeči. Kopie se zapisuje na pozadí, takže velký model Vás nezdrží. Pokud se karta nebo prohlížeč zavře před uložením, při příštím otevření ModelCraftu se zeptá "Obnovit Vaši práci?". Obnovení otevře model tak, jak byl, ještě neuložený do souboru: uložte ho, abyste si ho ponechali. Viz [Obnovení práce](common:recover).

### Z CadCraftu: Otevřít v ModelCraftu

V aplikaci pro kreslení CadCraft: **Zobrazení**, pak **Další**, pak **Otevřít v ModelCraftu** předá otevřený výkres ModelCraftu na nové kartě jako DWG. Dorazí stejně jako importovaný DWG: čáry na zemi, ve skupině, připravené k modelování. Nic se nenahrává; soubor prochází úložištěm Vašeho prohlížeče.

## Import

Import přidá soubor do otevřeného modelu; nenahradí ho.

1. Klikněte na {{ui:Import}} ve skupině {{ui:Soubor}}, nebo přetáhněte soubor do 3D pohledu.
2. Vyberte soubor SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG nebo DXF.

   Soubor se objeví jako **jedna skupina**, označená, a pohled se přiblíží, aby ji ukázal. Stavový řádek uvádí, co se importovalo, a vypisuje, co se importovat nepodařilo, například "Neimportováno: 2 textury".

3. Chcete-li pracovat přímo s její geometrií, dvakrát klikněte na skupinu a upravujte uvnitř ní, nebo klikněte na {{ui:Rozložit}}.

Několik věcí, které je dobré vědět:

- **Velikost a směr nahoru:** soubory Collada uvádějí svou jednotku a osu, která směřuje nahoru, a ModelCraft je převádí. glTF je vždy v metrech. Soubory OBJ jednotku nenesou: ModelCraft je čte jako metry s osou Y nahoru. Pokud OBJ přijde 1000krát příliš velký nebo malý, použijte [Měřítko](topic:rotate-scale) s činitelem jako `0.001` nebo `1000`.
- **DWG a DXF** přicházejí jako čáry (hrany) na zemi, ne jako plochy. Pokud výkres neuvádí svou jednotku, zeptá se dialog nazvaný "Jednotky výkresu", co je jedna jednotka výkresu. Viz [Model na situačním plánu](topic:site-plan).
- **Limity:** soubory nad 300 MB se pro import odmítnou, pro otevření nad 200 MB. Soubory s více než 2 miliony vrcholů nebo ploch se odmítnou jako příliš velké. OBJ nad 64 MB se odmítne dřív, než se přečte. Textové soubory (Collada, OBJ, ASCII STL, textové USD) se čtou po kouscích, asi 4 MB, takže žádný jednotlivý blok textu nedrží celý soubor; OBJ o velikosti 16 MB spotřeboval při otevření v našem testu asi 0.5 GB paměti.

## Export

1. Klikněte na {{ui:Export}} ve skupině {{ui:Soubor}}.
2. Vyberte formát: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL pro tisk (.stl, milimetry)}}, {{ui:PLY s barvami (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC pro BimCraft (.ifc)}}, {{ui:DWG pro CAD (.dwg, 2004)}} nebo {{ui:DXF pro CAD (.dxf, R12)}}.

Prohlížeč stáhne soubor pojmenovaný podle modelu. Exportuje se celý model, ne jen výběr. Soubory glTF, Collada a OBJ se zapisují na pozadí, takže ModelCraft pracuje dál, zatímco se velký model exportuje; stahování začne, až bude soubor hotový. Prázdný model se neexportuje: "Model je prázdný: nejprve něco nakreslete." Viz [Export modelu pro jiné programy](topic:export-model).

## Online a offline

Vše v ModelCraftu běží na Vašem počítači, takže modelování, otevírání, ukládání, import i export fungují bez připojení, jakmile je aplikace načtená.

Chcete-li otevřít ModelCraft bez jakéhokoli připojení, uložte ho pro offline použití, dokud jste online:

1. Klikněte na {{ui:Uložit pro offline}} v horní liště aplikace.
2. Tlačítko během ukládání počítá nahoru ("Ukládání 40 z 212"). ModelCraft ukládá své vlastní soubory (mezi nimi i čtečku DWG), tuto nápovědu a knihovnu 3D, takže to může chvíli trvat.
3. Když tlačítko ukazuje {{ui:Připraveno offline}}, ModelCraft se otevře z téže adresy bez připojení a import DWG funguje offline také.

Klikněte později na {{ui:Připraveno offline}} pro {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. Pokud tlačítko ukazuje {{ui:Nepodařilo se uložit}}, některé soubory se nestáhly: zkontrolujte připojení a klikněte na něj, aby to zkusil znovu. {{ui:Offline není dostupné}} znamená, že toto okno prohlížeče nemůže udržet kopii (soukromá okna a některé spravované počítače). Viz [Práce offline](common:offline).

Ukládání do cloudu zatím není k dispozici. Každý model je tam, kde ho uložíte.

:::offline
Jste offline. Můžete dál modelovat a ukládat. Pokud horní lišta neukazuje {{ui:Připraveno offline}}, tuto kartu znovu nenačítejte, dokud nebudete zase online.
:::

## Desktopová aplikace

:::desktop
Používáte ModelCraft v CadCraft Studiu, desktopové aplikaci se všemi osmi aplikacemi. Soubory se otevírají a ukládají tam, kde zvolíte.
:::

:::web
ModelCraft běží v prohlížeči na Macu, Windows a Linuxu a v CadCraft Studiu, desktopové aplikaci se všemi osmi aplikacemi v jedné instalaci, z getcadcraft.com/download.
:::
