---
title: Ještě není hotovo
summary: Co tato verze ModelCraftu zatím neumí a co dnes udělat místo toho.
keywords: chybí, zatím ne, omezení, plán, materiály, textury, text, vrstvy, oříznout, rozdělit, cloud, desktop
from: 179fa5e4
---

ModelCraft je rané sestavení. Tato stránka uvádí, co zatím neumí, abyste to nehledali, a nejbližší způsob, jak úkol dnes zvládnout.

## Kreslicí nástroje

| Zatím ne | Místo toho dnes |
|---|---|
| Volné kreslení | Klikejte na body nástrojem {{ui:Křivka}} |
| Změna počtu segmentů oblouku nebo kružnice po nakreslení | Smažte ji a nakreslete znovu po zadání `24s` |
| Volba písma pro [3D text](topic:text3d) nebo úprava jeho slov po umístění | Smažte ji a přidejte text znovu |
| Změna úhlu zadáním do kóty úhlu, nebo velikosti válce z kóty jeho kružnice | Otočte hrany nástrojem {{ui:Otočit}}; válec zvětšete nebo zmenšete nástrojem {{ui:Měřítko}} |
| Kóty v exportovaných souborech modelu | Kóty se zobrazí v obrázcích, tiscích a PDF pohledu; soubory modelu nesou jen geometrii |
| Ořez, Rozdělení a Vnější skořepina | Uzavřené skupiny [Sjednocení, odečtení a průnik](topic:solids), nebo [průnik ploch](topic:intersect) a smazání toho, co nepotřebujete |
| Volba osy otáčení šipkami | Klikněte na střed {{ui:Otočit}} na plochu, která směřuje tak, jak má osa ukazovat |
| Zámky na více než jednom směru najednou | Zamkněte jeden směr šipkou a pak přichyťte k bodu |
| Změna velikosti podél šikmé čáry nebo z konce kóty, který není v rohu | Umístěte kótu na dva rohy, podél hrany nebo podél červené, zelené či modré |

## Animace

| Zatím ne | Místo toho dnes |
|---|---|
| Animace ploch, hran, denní doby slunce, stylu nebo toho, co je skryté | Pohyblivou část udělejte skupinou nebo komponentou; pro jinou denní dobu vykreslete samostatné video |
| Kamera, která sleduje nakreslenou dráhu nebo se dívá na pohybující se objekt | Nastavte více klíčů kamery po cestě ([Animace](topic:animation)) |
| Zvuk ve videích a kvalitní (path-traced) videa bez WebGPU | Přidejte zvuk ve střihači videa; bez WebGPU vykreslete video rychlým renderérem ([Vykreslení videa](topic:animation#render-the-video)) |
| Animované lampy (jas, rozptyl, barva) ve vykresleném videu, úhel objektivu animovaný bez klíčů kamery ve videu, animace materiálů nebo nastavení vykreslení | Lampy se animují v zobrazení; pro video klíčujte i kameru kvůli přiblížení; pro jiná nastavení lamp vykreslete samostatná videa ([Animace libovolné vlastnosti](topic:animate)) |
| Zrcadlení vah nebo kostí z jedné strany na druhou, viditelné obálky kostí, zobrazení vah stínovaně bod po bodu (zobrazují se po plochách), zobrazení deformované sítě při malování vah | Namalujte obě strany, nebo vytvořte jednu polovinu a před přidáním kostry použijte modifikátor Zrcadlo; přepínejte mezi Malování vah a Póza pro kontrolu |
| Kosti načtené ze souborů glTF, FBX nebo USD jako kostra a zápis kostry do těchto souborů | Kůže se načte v klidové poloze s vahami ze souboru; přidejte kosti v pořadí kloubů souboru a pak {{ui:Použít váhy ze souboru}} ([Animace](topic:animate)) |
| Přesun cíle IK nebo pólu tažením v zobrazení, volba vlastního prostoru omezení (lokální nebo světový), natahování řetězců IK, IK podél křivky | Napište bod cíle, nebo zamiřte na objekt a přesuňte ten; držte řetězce na jejich délkách |
| Látky, tekutiny, měkká tělesa, klouby a závěsy mezi tuhými tělesy, kolize s přesným tvarem objektu (kolem něj jsou jen krabice a koule), živá simulace při přehrávání, počáteční rychlost nebo otáčení (tělesa začínají v klidu) | Zapečte tuhá tělesa a přehrajte klíče; závěs vytvořte klíči; podivný tvar rozdělte na krabice (skupiny) |
| Export animace do glTF nebo jiných souborů modelů | Vykreslete video; soubor `.modelcraft` a [soubor USD](topic:usd), který ModelCraft uložil, zůstávají pro ModelCraft |
| Psaní komentáře nebo názvu u problému ve VR, hlasové poznámky, ruční posun řezné roviny ve VR | Umístěte problém ve VR a pak přidejte jeho text v programu BCF; nastavte řeznou rovinu v zobrazení, než vstoupíte: viz [Prohlídka modelu v VR headsetu](topic:vr-review) |
| Vidění lidí u stolu ve VR (zobrazují se jen lidé ve VR), nahrávání procházky ve VR | Požádejte je, ať se připojí ve VR, nebo vytvořte [animaci](topic:animation) procházky |

## Sítě

| Zatím ne | Místo toho dnes |
|---|---|
| Sochání po úrovních (multiresolution) a Detail odstraňující trojúhelníky, které se staly drobnými | [Sochejte](topic:sculpt) rozdělenou síť; {{ui:Přesíťovat}} pro opětovné vyrovnání |
| Přesíťování na čtyřúhelníkové plochy, které sledují tvar | {{ui:Přesíťovat}} (stejné trojúhelníky), pak ji přestavte pomocí [Retopologie](topic:mesh-edit#retopology) |
| Váhy malované na vrcholy pro modifikátory (Posunutí, Vyhlazení a Smrštění pracují na celé síti) | Použijte modifikátor, pak sochejte nebo upravte části, které to potřebují |
| Kopírování a vkládání vrcholů, hran nebo ploch, řez nožem, který končí uvnitř plochy, drátové hrany bez plochy | Zduplikujte síť v Modelu; řežte nožem z hrany na hranu; [Vytáhněte](topic:mesh-edit#change-the-shape) otevřené hrany do ploch |

## Uspořádání a zobrazení

| Zatím ne | Místo toho dnes |
|---|---|
| Vrstvy situačních plánů z DWG a DXF jako štítky | Situační plán přijde jako jedna skupina: rozložte ji a seskupte části, které chcete označit |
| Více řezů najednou, řezný box nebo obrys řezu exportovaný jako výkres | Jedna [řezná rovina](topic:sections) řeže najednou; exportujte zobrazení jako obrázek |
| Zobrazení měkkých hran čárkovaně, nebo změkčování při tažení posuvníkem | [Změkčení podle úhlu](topic:soften) v Informacích o prvku a krok zpět pro jiný úhel |
| Online knihovna modelů k hledání, nebo komponenty s volbami (barva, styl) | [Startovací knihovna](topic:starter); importujte modely Collada, OBJ nebo glTF; [natáhněte](topic:stretch) kopii na velikost |
| Umisťování rostlin z knihovny rostlin | [Rozmístěte](topic:live-view#scatter-plants-rocks-and-people) rostliny v živém zobrazení, nebo umístěte strom ze startovací knihovny |
| Nezávislé kopie skupiny | Udělejte z ní komponentu a pak {{ui:Vytvořit samostatnou kopii}} (viz [Řešení potíží](topic:troubleshooting#editing-one-group-changed-another)) |

## Vykreslování

| Zatím ne | Místo toho dnes |
|---|---|
| Vykreslování v zobrazení (pracovní prostor {{ui:Vykreslit}}), fronta vykreslování a možnosti kamery, oblohy, mlhy a míchání světel bez WebGPU | {{ui:Vykreslit obrázek…}} ve {{ui:Vysoká kvalita}} tam používá path tracer WebGL bez těchto možností ([Vykreslení obrázku](topic:render#high-quality)) |
| Kreslení obrázku Vykreslení jiným programem bez doplňku renderovacího enginu (CadCraft nikdy nespouští program pod licencí GNU GPL); panoramatické nebo stereo kamery a obloha z obrázku přes jiný program; zásuvný modul pro Unreal Engine (soubory se zapisují, zásuvný modul, který je otevírá, nevychází) | Naše vlastní enginy Fast a Path tracer; engine doplňku ([nakreslit obrázek jiným programem](topic:render-other-program)); soubor složky USD, glTF nebo Unreal z seznamu Enginů pro jakýkoli program |
| Rozptýlené rostliny a kameny v {{ui:Vykreslit obrázek…}} | Jsou vidět v [živém zobrazení](topic:live-view), jeho panoramatech, prohlížeči a videu |

## Materiály a barvy

| Zatím ne | Místo toho dnes |
|---|---|
| Vstupy jiné než základní barva, drsnost, kovovost, průhlednost, normála a emise se po ploše nemění ve vysoce kvalitních obrázcích (používají průměr) | [Vytvořte materiály pomocí uzlů](topic:shading): propojte je i tak, zobrazení je ukáže měnit se |
| Posun na plochách vytažených tlačením a tažením | Pro posun převeďte objekt na síť |
| Sdílení vlastních materiálů do Knihovny z aplikace a zabalené (ARM/ORM) nebo EXR mapy v importované sadě textur | Ponechte je v souboru; importujte samostatné mapy jako PNG nebo JPEG |
| Materiály souboru v relacích Live TeamWork (zůstávají v počítači, který je vytvořil) | Uložte soubor a sdílejte jej |
| Nálepky ohýbající se kolem zakřivených ploch, nálepky v Zpět, nebo malování textur více ploch najednou přes šev | Umisťujte menší nálepky na každou část; malujte každou stranu švu zvlášť |
| Zapékání na plochy tažené tlačením a tahem, zapékání více objektů do jednoho obrázku, klec, kterou tvarujete ručně, nebo zapečené osvětlení z lamp | Převeďte na síť a rozbalte ji; zapékejte každý objekt zvlášť; zvyšte vzdálenost hledání; pro světlo lamp vykreslete obrázek |
| Malování drsnosti, kovovosti nebo výšky, malování obrázky (razítky) a malování textur větších než 512 × 512 | Zde malujte základní barvu; ostatní mapy vytvořte v editoru obrázků a importujte je jako sadu textur |
| Textury v exportech Collada, STL, PLY, 3MF, IFC, DWG a DXF a grafy uzlů vlastních materiálů souboru v exportovaných modelech | Tyto formáty dostanou barvu každého materiálu; glTF a OBJ nesou importované textury; materiál samostatně exportujte jako [MaterialX](topic:shading#materialx); [USD](topic:usd) uchová celý model pro ModelCraft |
| Textury v souborech Collada | Při importu se spočítají a vynechají; textury v souborech `.skp` a `.glb` se načtou |
| Ukládání souborů SketchUp a text a kóty z nich | [Import](topic:import-sketchup-files) zachová plochy, barvy a textury; pro návrat do SketchUpu exportujte Collada (`.dae`) |
| Kóty a vodicí čáry v exportech DWG a DXF | Přidejte je v CAD programu po exportu |
| Body, tabulky a víceúrovňové výnosky z DWG a DXF | Spočítají se a vynechají; text přijde jako jednotažkové písmo, ne jako písmo výkresu |
| Plochy, sítě, tabulky a víceúrovňové výnosky z DWG a DXF; plochy 3D těles na tažených, vyložených nebo jiných volných plochách | Také se spočítají a vynechají (3D tělesa samotná se načtou). Tyto části exportujte z CAD programu jako OBJ nebo Collada a importujte to |
| Typy IFC, vlastnosti nebo materiály | Export IFC obsahuje [podlaží](topic:formats#ifc-ifc) a obecné prvky; zbytek doplňte v BIM programu |
| Přímé odeslání modelu do BimCraftu | Exportujte {{ui:IFC pro BimCraft (.ifc)}} a otevřete jej v BimCraftu |
| Volné hrany v glTF a STL | Pro čárovou kresbu použijte OBJ nebo Collada |
| Materiály glTF a FBX nad rámec základní barvy (kov, drsnost, normálové mapy, sklo, lak, lesk…) | Načtou se a vypíšou; ModelCraft zachovává základní barvu nebo texturu. Vytvořte vzhled znovu v [pracovním prostoru Stínování](topic:shading) |
| Kosti, animace a morph targets v glTF | Kůže se načte stojící v klidové poloze; animujte v [časové ose](topic:animation) |
| Barvy a názvy částí sestavy ze souborů STEP | Díly přijdou jako sítě ve skutečné velikosti; [namalujte](topic:paint) je a pojmenujte je po importu |
| Objekty SubD, text, kóty a světla ze souborů `.3dm` | Viz [co se vynechává](topic:import-3dm-files#what-is-left-out-and-said); převeďte SubD na sítě v programu, který soubor vytvořil |
| Textury KTX2 a varianty materiálů v glTF | Exportujte s texturami PNG nebo JPEG; použije se výchozí varianta |
| Zápis instancování glTF (EXT_mesh_gpu_instancing) | Komponenty se zapisují jednou a umísťují se mnohokrát, což čte každý prohlížeč |
| Animace Alembic (každý vzorek mezipaměti), body a křivky Alembic, zápis Alembic | Načte se první vzorek; animujte v [časové ose](topic:animation); zapisujte glTF, USD nebo OBJ |
| Mapy výškového reliéfu a normál v materiálech OBJ | Načte se jen barevný obrázek (`map_Kd`) |
| Kosti a animace FBX, export FBX, soubory FBX 6 | Kůže se načte v klidu; exportujte glTF; staré soubory uložte jako FBX 2011 nebo novější |
| Kůže, morfy, kamery, světla, transformace look-at a zkosení Collada, externí odkazy | Při importu se vynechají a počet se uvede ve zprávě |
| Záložní soubory | {{ui:Uložit jako}} ({{key:Mod+Shift+S}}) uloží další kopii. Po pádu ModelCraft nabídne vaši neuloženou práci zpět („Obnovit vaši práci?“) |
| Ukládání do cloudu a synchronizace mezi počítači | Zatím nedostupné. Ukládejte soubory do počítače a kopírujte je tam, kde je potřebujete |

## 3D tisk

| Zatím ne | Místo toho dnes |
|---|---|
| Skutečné podpory slicerem (rozhraní, raft, přesný vzor podpor) | [Náhled podpor](topic:print-tools#supports-preview) ukazuje, kde podpory budou a zhruba kolik jich bude; náhled vašeho slicera ukáže ty skutečné |
| Rozplétání dílu, který prochází sám sebou, nebo hran, kde se setkávají tři a více ploch | [Oprava](topic:print-tools#repair) je vypíše i s jejich místem; použijte [průnik ploch](topic:intersect) a smažte, co je uvnitř |
| Výplňové vzory a mřížka uvnitř dutiny | [Dutina](topic:print-tools#hollow) ji nechá prázdnou; váš slicer přidá výplň plnému dílu |
| Detaily příliš malé pro vaši trysku (kromě stěn) | [Tloušťka stěn](topic:print-tools#wall-thickness) najde tenké stěny; náhled vrstev vašeho slicera ukáže zbytek |

## Výkon

Zpět si uchovává kopii modelu pro každý krok ([síť](topic:meshes) si uchovává jen to, co se změnilo), takže velmi velké importy geometrie tažené tlačením a tahem zpomalují každou úpravu. Držte importy štíhlé a pro vyčištění historie uložte a znovu otevřete soubor.

## Aplikace a platformy

- **Desktop:** ModelCraft běží v prohlížeči na Macu, Windows a Linuxu, a v CadCraft Studio, desktopové aplikaci se všemi osmi aplikacemi v jedné instalaci. Na Androidu se CadCraft Studio instaluje z APK na getcadcraft.com/download. Verze pro iPad nebo iPhone zatím neexistuje.
- **Dotyk:** gesta prstem viz [Obíhání, posun a zoom](topic:orbit-pan-zoom). Tlak pera nastavuje štětec v [Sochání](topic:sculpt); jinde se tlak a náklon pera nepoužívají.
- **Listy:** ModelCraft [tiskne jeden pohled na stránku](topic:export-model#print-the-view-or-save-it-as-a-pdf); neexistují listy s více pohledy a razítkem. Pro výkresy v měřítku exportujte do DWG/DXF vhodných pro CadCraft.
