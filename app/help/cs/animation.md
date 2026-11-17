---
title: Animace kamery a objektů a vykreslení videa
summary: Nastavte klíče pro kameru a pro skupiny a komponenty na časové ose, přehrajte je v pohledu a vykreslete animaci do videa WebM se stejnou oblohou, sluncem a materiály jako u vykreslení.
keywords: animace, animovat, časová osa, klíčový snímek, klíče, snímek klíče, dráha kamery, prolet, procházka, procházet, video, film, webm, vykreslit video, snímky, snímková frekvence, fps, přehrávací hlava, automatický klíč, zmírnění, vyhladit, podržet, scény, sekvence PNG, pohyb
from: d3a58249
---

**Časová osa** posouvá kameru a libovolnou skupinu nebo komponentu v čase. Nastavujete **klíče** (kde něco je v daném okamžiku); ModelCraft to mezi klíči plynule posouvá. Přehrajte to v pohledu a pak to vykreslete do videa se stejnou oblohou, sluncem, materiály a lampami jako [vykreslený obrázek](topic:render).

## Otevření časové osy

Klikněte na {{ui:Views}} ve skupině {{ui:Camera}}, pak na {{ui:Animation timeline}}. Časová osa se otevře pod pohledem: ovládací prvky nahoře, pak řádek **Kamera** a řádek pro každou skupinu nebo komponentu, která se pohybuje. Kosočtverce jsou klíče; červená čára je **přehrávací hlava**, okamžik, který je vidět v pohledu.

:::touch
Na telefonu se časová osa také otevře pod pohledem. Její ovládací prvky jsou na jednom řádku: posunutím do strany se dostanete k ostatním; tlačítko pro zavření časové osy zůstává na jejím konci.
:::

Přetáhněte posuvník (nebo klikněte do řádku), abyste přesunuli přehrávací hlavu. {{ui:Play}} přehrává od přehrávací hlavy a při přehrávání se změní na {{ui:Pause}}; dalším kliknutím zastavíte tam, kde je. {{key:Space}} dělá totéž, když je časová osa otevřená (když je zavřená, Space je pořád Vybrat). {{ui:Previous key}} a {{ui:Next key}} přeskakují mezi klíči. Vlastní styl může přehrávání a pauzu přiřadit jiné klávese: {{ui:Settings}}, pak nabídky, klávesy a myš, příkaz *Play or pause the animation*.

## Posun kamery

1. Přesuňte přehrávací hlavu tam, kde záběr začíná (0 s), nastavte pohled a klikněte na {{ui:Key camera}}.
2. Přesuňte přehrávací hlavu později (třeba na 4 s), otočte, posuňte nebo projděte pohled do další polohy a znovu klikněte na {{ui:Key camera}}.
3. Přidejte, kolik klíčů chcete, a pak {{ui:Play}}.

Kamera plynule prochází každým klíčem a začíná i končí v klidu.

:::tip
Už máte [scény](topic:scenes)? {{ui:From scenes}} z nich vytvoří dráhu kamery: u každé scény zastaví a pak se přesune k další. Pokud časová osa nemá vůbec žádné klíče, {{ui:Render video…}} to udělá samo, takže pro procházkové video stačí dvě scény nebo více.
:::

## Posun skupiny nebo komponenty

1. Vyberte skupinu nebo komponentu (pohybují se jen celé skupiny a komponenty; nejdřív [vytvořte skupinu](topic:groups-components)).
2. Na 0 s klikněte na {{ui:Key selected}}.
3. Přesuňte přehrávací hlavu později, [přesuňte, otočte nebo změňte měřítko](topic:move-copy) skupinu tam, kam má patřit, a znovu klikněte na {{ui:Key selected}}.

Mezi svými klíči se posouvá, otáčí a zvětšuje. Natočení jdou nejkratší cestou.

**Automatický klíč** ušetří kliknutí z kroku 3: když je {{ui:Auto key}} zapnuté, vybraná skupina nebo komponenta, kterou přesunete, otočíte nebo změníte měřítko, dostane klíč v přehrávací hlavě sama (a poprvé také klíč na 0 s tam, kde byla).

:::note
Pohyb animované skupiny bez klíče vydrží jen do té doby, než přehrávací hlava pohne: až příště přehrajete nebo přetáčíte, vrátí se tam, kam ji postavily její klíče. Stavový řádek to říká. Stiskněte {{ui:Key selected}}, abyste to zachovali.
:::

## Změna klíčů

- **Vyberte klíč** kliknutím na jeho kosočtverec: přehrávací hlava přejde na něj.
- **Přesuňte klíč** přetažením jeho kosočtverce po řádku, nebo klávesami {{key:Left}} a {{key:Right}} (o jeden snímek; s {{key:Shift}} o deset).
- **Smažte** pomocí {{ui:Delete key}} (vybraný klíč nebo každý klíč v přehrávací hlavě) nebo {{key:Delete}} na vybraném kosočtverci.
- **Jak se přesouvá dál**, u vybraného klíče: {{ui:Smooth}} (křivka procházející okolními klíči), {{ui:Steady}} (přímka stálou rychlostí), {{ui:Slow in and out}} (v tomto klíči se zastaví) nebo {{ui:Hold}} (zůstane na místě, dokud nepřijde další klíč).
- **Length (s)** nastavuje délku animace; klíč nastavený za koncem ji prodlouží. Chcete-li ji zkrátit, nejdřív přesuňte nebo smažte klíče za novým koncem.
- **×** na řádku skupiny zastaví její animování.

Časová osa má vlastní {{ui:Undo}} a {{ui:Redo}}: zpět ({{key:Mod+Z}}) modelu mění model, ne klíče. Animace se ukládá do souboru `.modelcraft`. Zavřením časové osy se pohybující se skupiny vrátí do své první pozice.

## Vykreslení videa

1. Klikněte na časové ose na {{ui:Render video}} (nebo na {{ui:Export}} › {{ui:Render video…}}).
2. Zvolte {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} a {{ui:File}}.
3. Klikněte na {{ui:Render video}}. Každý snímek se ukáže, jakmile vznikne, se zbývajícím časem.
4. Až bude hotovo, klikněte na {{ui:Save video}}.

{{ui:Stop}} (nebo {{key:Esc}}) skončí dřív; {{ui:Save video}} pak ponechá hotové snímky jako kratší video.

Oblohu, slunce, materiály, lampy a jas nastavujete v {{ui:Render a picture…}}: nastavte je tam předem a zkontrolujte jeden nehybný obrázek. Každý snímek se vykresluje na tomto počítači; nic se nenahrává.

| Nastavení | Co dělá |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, nebo vlastní tvar pohledu (až 1920 pixelů na šířku) |
| {{ui:Frame rate}} | 24, 25, 30 nebo 60 snímků za sekundu. Dvojnásobek snímků trvá dvojnásobně dlouho |
| {{ui:Quality of each frame}} | {{ui:Quick}} (4 průchody), {{ui:Draft}} (16) nebo {{ui:Good}} (64): více průchodů dává hladší stíny a hrany |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} tam, kde jej prohlížeč umí zapsat, nebo {{ui:PNG pictures, one per frame (ZIP)}} pro video editory (a pro prohlížeče bez kodéru videa) |

:::tip
10sekundové video při 30 snímcích za sekundu má 301 snímků. Nejdřív zkuste {{ui:Quick}} v 480p, abyste zkontrolovali pohyb, a pak vykreslete {{ui:Draft}} nebo {{ui:Good}} ve větší velikosti.
:::

WebM se přehraje v prohlížečích a ve VLC; video editory ho umí převést. {{ui:MP4 video (H.264)}} je nabízen tam, kde ho prohlížeč umí zapsat. {{ui:Render video}} používá rychlý renderer; chcete-li každý snímek vykreslit path tracingem, zvolte {{ui:Add this animation to the queue}} ve stejném dialogu: snímky se vykreslí ve [frontě vykreslování](topic:render#the-render-queue), která potřebuje WebGPU.

:::firefox safari
Vykreslení videa potřebuje prohlížeč, který video kóduje sám (WebCodecs): novější Chrome, Edge, Firefox a Safari 17 to umí. Bez toho zvolte {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Na co dát pozor

- Pohybují se jen celé skupiny a komponenty. Plochy, hrany, čas slunce ani styl se zatím v čase nemění.
- {{ui:Export animation}} v [Scénách](topic:scenes) pořád zaznamenává pohled tak, jak je na obrazovce, v reálném čase; {{ui:Render video}} vykresluje každý snímek s oblohou, stíny a materiály.
