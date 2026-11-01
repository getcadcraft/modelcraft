---
title: Obrazovka ModelCraftu
summary: Prohlídka panelu nástrojů, panelů po stranách, 3D pohledu a stavového řádku, s názvy, jaké jsou na obrazovce.
keywords: obrazovka, rozložení, panel nástrojů, panely, strom, informace o prvku, styl, scény, stavový řádek, pole hodnoty, jednotky, rozhraní, prohlídka
from: 4a9a4516
---

Shora dolů: lišta aplikace, panel nástrojů, tři sloupce (levé panely, 3D pohled, pravé panely) a stavový řádek.

## Lišta aplikace

Štíhlá lišta úplně nahoře patří každé aplikaci CadCraft. Má název a verzi aplikace, {{ui:O aplikaci ModelCraft}}, tlačítko režimu obrazovky a přepínač {{ui:Papír}} / {{ui:Model}}.

- {{ui:Papír}} je světlý motiv a {{ui:Model}} tmavý. 3D pohled změní barvy tak, aby odpovídaly; váš model se nemění.
- Tlačítko režimu obrazovky (zpočátku zní {{ui:Celá obrazovka}}) a {{key:Ctrl+Shift+F}} procházejí třemi režimy: normální, celá obrazovka a celá obrazovka se skrytými lištami. Při skrytých lištách ukažte na horní okraj obrazovky (nebo na něj klepněte) a lišty se vrátí. {{key:Esc}} opustí celou obrazovku.

:::note
{{key:Ctrl+Shift+F}} používá klávesu Control na všech počítačích, i na Macu. Na iPhonu, kde prohlížeče celou obrazovku nemají, tlačítko jen skrývá a zobrazuje lišty.
:::

## Panel nástrojů

Panel nástrojů je rozdělen do označených skupin. Podržením ukazatele nad tlačítkem uvidíte jeho název a klávesu.

Vlevo seznam {{ui:Pracovní prostor}} přepíná, k čemu slouží panel nástrojů a pravý panel: {{ui:Model}} (modelování tlač/tah, prohlídka níže), {{ui:Síť}} ([úprava sítě](topic:mesh-edit)), {{ui:Křivka}} ([objekty křivek](topic:curves)), {{ui:UV}} ([rozvržení UV](topic:uv)), {{ui:Tvarování}} ([sochání](topic:sculpt)), {{ui:Stínování}} ([materiály z uzlů](topic:shading)), {{ui:Animovat}} ([animace](topic:animate)) a {{ui:Vykreslení}} ([vykreslování v pohledu](topic:render#render-in-the-view)).

| Skupina | Tlačítka |
|---|---|
| Soubor | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Uložit}}, {{ui:Import}}, {{ui:Export}} (nabídka formátů) |
| Kreslení | {{ui:Úsečka}} ({{key:L}}), {{ui:Obdélník}} ({{key:R}}), {{ui:Kružnice}} ({{key:C}}), {{ui:Mnohoúhelník}} ({{key:N}}) |
| Upravit | {{ui:Vybrat}} ({{key:Space}}), {{ui:Tlač/tah}} ({{key:P}}), {{ui:Přesunout}} ({{key:M}}), {{ui:Otočit}} ({{key:Q}}), {{ui:Měřítko}} ({{key:S}}), {{ui:Guma}} ({{key:E}}), {{ui:Pásmo}} ({{key:T}}) |
| Uspořádat | {{ui:Komponenta}} ({{key:G}}), {{ui:Skupina}} ({{key:Shift+G}}), {{ui:Rozložit}} |
| Úpravy | {{ui:Zpět}} ({{key:Mod+Z}}), {{ui:Znovu}} ({{key:Mod+Y}}), {{ui:Kopírovat}} ({{key:Mod+C}}), {{ui:Vložit}} ({{key:Mod+V}}), {{ui:Další}} (nabídka: vyjmout, kopírovat, vložit, vložit na stejné místo {{key:Mod+Shift+V}}, duplikovat {{key:Mod+D}}, smazat, vybrat vše, zrušit výběr a styl kláves) |
| Kamera | {{ui:Obíhat}} ({{key:O}}), {{ui:Posun}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Rozsah}} ({{key:Shift+Z}}), {{ui:Pohledy}} (nabídka) |

Zobrazené klávesy jsou klávesy stylu tlač/tah; když v [nastavení ModelCraftu](topic:settings) zvolíte styl Modeler, bubliny nápovědy ukazují místo nich jeho klávesy. Nástroj, který používáte, je zobrazen stisknutě. Na úzké obrazovce se panel nástrojů posouvá do stran.

Nabídka {{ui:Pohledy}} obsahuje {{ui:Izometrie}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Zprava}}, {{ui:Zezadu}}, {{ui:Zleva}} a {{ui:Zdola}}, každý přizpůsobený modelu, a {{ui:Perspektiva}}, která přepíná mezi perspektivní a rovnoběžnou projekcí.

## 3D pohled

Střed obrazovky. Červené, zelené a modré čáry jsou osy: červená a zelená leží na zemi, modrá míří nahoru a **sever je zelená osa**. Kde se setkávají, je počátek.

- Na začátku karta nazvaná „Začínáme s modelováním“ uvádí prvních pár kláves. Zmizí, když vyberete kreslicí nástroj nebo kliknete do pohledu.
- Když nástroj pracuje, pohled ukazuje **značky odvozování**: malé barevné tvary tam, kde se ukazatel přichytává (zelený kruh na koncovém bodě, azurový ve středu, červený čtverec na hraně, modrý kosočtverec na ploše). Viz [Odvozování a přichytávání](topic:inference).
- Vybrané věci zmodrají. Plocha viděná zezadu je modrošedá.
- Když otevřete skupinu k úpravám, vše mimo ni zeslábne a osy se přesunou na vlastní osy skupiny.
- Když má model scény, přes horní část pohledu se objeví řada karet scén.
- Pusťte soubor kamkoli na pohled a otevře se nebo naimportuje.

## Levé panely

**{{ui:Strom}}** uvádí skupiny a komponenty v modelu, vnořené tak, jak jsou vnořené v modelu. Komponenta použitá víckrát ukazuje kolikrát, například „Window (4)“.

- Kliknutím na název jej vyberete. Dvojitým kliknutím jej otevřete k úpravám.
- **Najít podle názvu** (zobrazí se, jakmile jsou dvě nebo více skupin) ponechá jen řádky, jejichž název odpovídá, spolu se skupinami, ve kterých jsou. {{key:Esc}} to zruší.
- **Oko** na konci řádku skryje nebo zobrazí tu skupinu či komponentu (stejně jako {{ui:Úpravy}} › {{ui:Další}} › {{ui:Skrýt}}). Ikona štítku znamená, že je skrytá svou [značkou](topic:tags).
- **Přejmenování na místě:** klikněte na řádek, stiskněte {{key:F2}}, napište název a stiskněte {{key:Enter}} ({{key:Esc}} ponechá starý název).
- **Přetažení řádku** na střed řádku jiné skupiny jej přesune dovnitř této skupiny, na horní nebo dolní okraj řádku jej umístí těsně před nebo za tento řádek a na nadpis {{ui:Strom}} jej přesune na nejvyšší úroveň. V modelu zůstává tam, kde je, a zachová si barvu, značku i název. Skupina nemůže jít sama do sebe. Každý přesun je jeden krok zpět. Viz [Přeuspořádání ve Stromu](topic:groups-components#rearrange-in-the-outliner).
- Když upravujete uvnitř skupiny, řádek hlásí „Úprava: Model › …“ a objeví se tlačítko {{ui:Zavřít skupinu}}. Zavře všechny otevřené úrovně najednou.

**{{ui:Komponenty}}** uvádí každou definici komponenty s počtem umístěných kopií („3×“) a tlačítkem {{ui:Umístit}}, které přidá další kopii tam, kam kliknete.

## Pravé panely

**{{ui:Informace o prvku}}** popisuje, co je vybráno. Jeho nadpis se mění podle toho, co to je:

| Nadpis | Zobrazuje | Tlačítka |
|---|---|---|
| Model (nic není vybráno) | Plochy, hrany, skupiny, komponenty a kolik jich je umístěno, vodítka, celkovou velikost | {{ui:Smazat všechna vodítka}} (když jsou vodítka) |
| Plocha | Obsah, počet otvorů | {{ui:Obrátit plochu}} |
| Hrana | Délka | žádná |
| Skupina nebo komponenta | Název (psaním přejmenujete), kolikrát je umístěna, zda je to uzavřené těleso, její objem, její velikost | {{ui:Upravit}}, {{ui:Rozložit}}, {{ui:Vytvořit samostatnou kopii}} (komponenta umístěná víckrát), {{ui:Vytvořit komponentu}} (skupina) |
| Bod vodítka nebo úsečka vodítka | nic | {{ui:Smazat}} |
| Několik věcí | Kolik ploch, hran, skupin a vodítek, celkový obsah ploch | {{ui:Vytvořit komponentu (G)}}, {{ui:Vytvořit skupinu (Shift+G)}} |

**{{ui:Styl}}** nastavuje, jak se model kreslí: {{ui:Plochy}} ({{ui:Stínovaný}}, {{ui:Skrytá čára}}, {{ui:Drátový}}, {{ui:Rentgen}}), {{ui:Zobrazit hrany}} a {{ui:Slunční stíny}} s datem, časem a místem slunce. Viz [Styly a slunční stíny](topic:styles-shadows).

**{{ui:Scény}}** ukládá pohledy: {{ui:Přidat scénu}}, seznam scén a {{ui:Předchozí}}, {{ui:Přehrát}} a {{ui:Další}}. Viz [Ukládání pohledů jako scén](topic:scenes).

## Stavový řádek

Dole, zleva doprava:

1. **Tip**: co nástroj chce dál, nebo k čemu se ukazatel přichytává („Koncový bod“, „Na červené ose“).
2. **Zprávy**: co se právě stalo („Krok tlač/tah byl vrácen.“, „Importován site.dxf: 1697 hran na zemi, ve skupině.“) nebo proč něco nefungovalo.
3. **Pole hodnoty**: jeho popisek se mění podle nástroje ({{ui:Délka}}, {{ui:Rozměry}}, {{ui:Poloměr}}, {{ui:Strany}}, {{ui:Vzdálenost}}, {{ui:Úhel}}, {{ui:Měřítko}}, {{ui:Odsazení}}). Během práce ukazuje živou velikost a přijímá to, co napíšete. Viz [Zadávání přesných rozměrů v poli hodnoty](topic:value-box).
4. **Styl kláves**: {{ui:Klávesy: tlač/tah}} nebo {{ui:Klávesy: Modeler}} přepíná klávesové zkratky a tlačítka myši najednou (stejně jako v [nastavení ModelCraftu](topic:settings)).
5. **{{ui:Přichytávání}} a {{ui:Kolize}}**: přichytávání k bodům, hranám a osám a zastavování těles tam, kde se dotýkají. Přeškrtnuté = vypnuto. Kliknutím přepnete. Viz [Nastavení ModelCraftu](topic:settings).
6. **Výběr jednotek**: jednotka, ve které se zobrazují délky. Viz [Začínáme](topic:getting-started#check-the-units-first).

## Na úzké obrazovce

Pod šířkou asi 760 pixelů (telefon nebo úzké okno) si 3D pohled ponechá obrazovku. Panel nástrojů je jeden řádek, který se posouvá do stran, a panely se otevírají jako listy z lišty dole na obrazovce.
