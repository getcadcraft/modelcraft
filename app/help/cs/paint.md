---
title: Malování barvami a materiály
summary: Dejte plochám, skupinám a komponentám plnou barvu nebo materiál, například cihlu, obklad, šindel nebo dřevo, a zachovejte je při exportu.
keywords: malovat, barva, materiál, materiály, textura, textury, cihla, obklad, šindel, krytina, dřevo, kámen, dlaždice, beton, štuk, tráva, štěrk, sklo, kov, malířské vědro, výplň, vzorek, kapátko, výchozí, glb, obj, mtl, collada
from: b1500523
---

Barvy pomáhají rozlišit části modelu a **materiály** (cihla, obklad, krytina, dřevo, kámen, dlaždice, beton, štuk, tráva, sklo, kov) dodají modelu vzhled toho, z čeho je postaven. Obojí se maluje stejně.

## Výběr barvy

Sekce {{ui:Barvy}} vpravo ukazuje řadu plných barev, {{ui:Výchozí}} (ta přeškrtnutá čárou: bez barvy) a vzorek {{ui:+}} pro jakoukoli jinou barvu. Klikněte na jednu, aby se stala aktuální barvou. Nástroj Malovat s ní začíná.

## Malování

1. Stiskněte {{key:B}} ({{ui:Malovat}}), nebo, když nic není vybráno, klikněte na barvu. (Když něco vybráno je, kliknutí na barvu hned vymaluje výběr.)
2. Klikněte na plochu, abyste ji vymalovali.
3. Klikněte na skupinu nebo komponentu, abyste vymalovali tu kopii: její plochy, které nemají vlastní barvu, převezmou tuto barvu. Plochy, které jste uvnitř ní vymalovali, si svou barvu ponechají.

Chcete-li vymalovat více věcí najednou, vyberte je nejdřív a pak klikněte na barvu, nebo klikněte na kteroukoli z nich s {{ui:Malovat}}. Je to jeden krok zpět.

| Podržte | A klikněte na plochu | Co se vymaluje |
|---|---|---|
| — | | Tu plochu |
| {{key:Ctrl}} | | Každou plochu spojenou s ní, která má stejnou barvu |
| {{key:Shift}} | | Každou plochu dané barvy ve skupině, ve které pracujete |
| {{key:Alt}} | | Nic: místo toho převezmete tu barvu |

Chcete-li plochu vrátit bez barvy, zvolte {{ui:Výchozí}} a klikněte na ni.

## Malování materiálem

Sekce {{ui:Materiály}} pod {{ui:Barvy}} vypisuje knihovnu materiálů podle druhu: cihly a tvárnice, obklady, krytiny, dřevo, kámen, dlaždice, beton, štuk, terén, sklo a kov. Najeďte na vzorek pro jeho název. Klikněte na jeden a malujte jím stejně jako barvou: {{key:B}}, klikněte na plochy, skupiny nebo komponenty; nebo vyberte nejdřív a klikněte na materiál.

- V stylu **Stínovaný** plochy ukazují texturu materiálu. Skrytá čára, drátový a rentgen ukazují jeho barvu.
- Textury běží **vodorovně po každé ploše** a **nahoru po ní**: řady cihel zůstávají vodorovné na každé stěně, šindele běží po spádu střechy dolů, prkna na podlaze sledují červenou osu. Mají skutečnou velikost (cihla je asi 215 mm dlouhá), takže vypadají správně z jakékoli vzdálenosti.
- V [vykresleném obrázku](topic:render) materiály zachovávají svou texturu, drsnost a u skla a kovu i lesk.
- Kliknutí s {{key:Alt}} pomocí {{ui:Malovat}} převezme i materiál plochy.

Textury kreslí přímo ModelCraft, takže fungují offline a jsou volně použitelné k čemukoli (CC0).

## Komponenty a barvy

Barva namalovaná na plochu **uvnitř** komponenty se zobrazí na každé kopii, protože kopie sdílejí jednu definici. Barva namalovaná na **kopii** zvenku (když je komponenta zavřená) patří jen této kopii, takže dvě kopie téže komponenty mohou mít různé barvy. {{ui:Informace o prvku}} ukazuje barvu vybrané plochy, skupiny nebo komponenty.

## Barvy v souborech

- Soubor ModelCraft uchovává každou barvu a každý materiál.
- Jiné formáty dostanou **barvu materiálu** (jeho vzhled zdaleka) místo textury: glTF, Collada, OBJ, DWG a DXF a kontrola pro 3D tisk. V glTF, Collada a OBJ si materiál ponechá své jméno, například `Material_brick-red`.
- **glTF (.glb)** a **Collada (.dae)**: každá barva se stane materiálem. Komponenta zobrazená v různých barvách se zapíše jednou na každou barvu. glTF také zapisuje importované textury jako textury.
- **OBJ**: export stáhne dva soubory, `.obj` a `.mtl`, soubor materiálů s barvami. Držte je ve stejné složce. S importovanými texturami přijdou `.obj`, `.mtl` a obrázky jako jeden `.zip`.
- **DWG** zachovává přesné barvy; **DXF** používá nejbližší z 255 standardních CAD barev.
- **STL** a **PLY** nesou barvy: STL podle konvence VisCAM / SolidView (programy, které ji nečtou, ji ignorují), PLY jako barvu na každém bodu. Viz [Formáty souborů podrobně](topic:formats).

:::tip
Chcete-li namodelovat obrazovku, vymalujte rám uhlově šedě a sklo modře poté, co [odsadíte](topic:draw-faces) přední plochu.
:::
