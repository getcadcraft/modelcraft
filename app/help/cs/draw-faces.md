---
title: Kreslení ploch úsečkami, obdélníky, kružnicemi a oblouky
summary: Vytvořte rovné plochy na zemi nebo na jiných plochách, rozdělte je úsečkami a kreslete kružnice a mnohoúhelníky s počtem stran, jaký chcete.
keywords: kreslit, úsečka, obdélník, kružnice, mnohoúhelník, odsazení, vnitřní odsazení, rám, ohraničení, oblouk, křivka, splajn, hladký, kabel, cesta, vyboulení, poloměr, plocha, půdorys, obrys, rozdělit plochu, strany, segmenty, obrys, tužka
from: b6d7b7dd
---

Vše v ModelCraftu začíná jako rovná **plocha**: uzavřený povrch ohraničený hranami. Plochu můžete nakreslit přímo nástroji {{ui:Obdélník}}, {{ui:Kružnice}} nebo {{ui:Mnohoúhelník}}, nebo obrys vytvořit po jedné hraně nástrojem {{ui:Úsečka}}. Plochy jsou to, z čeho [Tlač/tah](topic:push-pull) vytváří tělesa.

## Kreslení obdélníku

1. Stiskněte {{key:R}}.
2. Klikněte na první roh: na zemi nebo na libovolnou plochu modelu.
3. Pohybujte ukazatelem. Obdélník zůstane na zemi (nebo na ploše, na které jste začali) a pole hodnoty ({{ui:Kóty}}) ukazuje jeho šířku a hloubku. Tip říká "Čtverec", když jsou strany stejné.

   Chcete-li kreslit na jiné rovině, ukažte na ni: plocha procházející prvním rohem umístí obdélník na tuto plochu a přichycení k bodu mimo rovinu (koncový bod, hrana, modrá osa) postaví obdélník svisle skrz oba rohy. Přichycení zpět k bodu na první rovině jej opět položí. Chcete-li zachovat jednu rovinu, stiskněte šipkovou klávesu: {{key:Up}} udrží obdélník vodorovně (modrá rovina), {{key:Right}} na červené rovině, {{key:Left}} na zelené rovině. Stisknutím stejné klávesy znovu odemknete.
4. Klikněte na protilehlý roh, nebo napište obě velikosti oddělené čárkou a stiskněte {{key:Enter}}: `4m,3m`, `4000,3000` v modelu v milimetrech, nebo `12',10'6"` ve stopách a palcích.

   Vznikne plocha se čtyřmi hranami kolem.

Zadané velikosti jdou ve směru, kam ukazujete: pokud je ukazatel při zadávání vlevo od prvního rohu, obdélník roste doleva.

:::warning
Čárka odděluje dvě velikosti, takže nemůže být desetinnou čárkou. Napište `2.5m,3m`, nikdy `2,5m`.
:::

## Kreslení kružnice nebo mnohoúhelníku

1. Stiskněte {{key:C}} pro kružnici nebo {{key:N}} pro mnohoúhelník.
2. Chcete-li změnit počet stran, zadejte jej před kliknutím: `12s` (nebo jen `12`) a {{key:Enter}}. Kružnice začíná s 24 stranami a mnohoúhelník se 6. Tip ukazuje aktuální počet a ModelCraft jej drží pro další kružnici, dokud jej nezměníte nebo nepřepnete nástroj.
3. Klikněte na střed, na zemi nebo na plochu. Chcete-li ji vycentrovat na plochu, ukažte na střed plochy ("Střed plochy") nebo na střed jedné z jejích hran ("Střed úsečky") s ukazatelem těsně uvnitř té plochy: kružnice se nakreslí na tuto plochu, i na úzkém konci dlouhé krabice.
4. Klikněte pro nastavení poloměru, nebo jej zadejte ({{ui:Poloměr}} v poli hodnoty) a stiskněte {{key:Enter}}.

Kružnice je mnohoúhelník s mnoha stranami. Když kružnici vytáhnete nahoru nástrojem Tlač/tah, její strany se zjemní, takže válec působí jako jediná hladká plocha.

## Kreslení oblouku

1. Stiskněte {{key:A}} ({{ui:Oblouk}}).
2. Klikněte, kde oblouk začíná, pak kde končí (nebo zadejte délku mezi nimi).
3. Pohybujte ukazatelem, aby oblouk vyboulil, a klikněte. Tip říká "Půlkruh", když je vyboulení poloviční vzdáleností mezi konci. Nebo zadejte, jak daleko se střed vyklenuje: `2` a {{key:Enter}}.

Chcete-li místo toho nakreslit oblouk kolem bodu, použijte {{ui:Oblouk od středu}}: klikněte na střed, pak kde oblouk začíná (nebo zadejte poloměr), pak kde končí (nebo zadejte úhel ve stupních, například `90`). Přichytí se po krocích 15°.

Oblouk začatý na ploše se nakreslí na této ploše; jinak leží na zemi, nebo stojí svisle, pokud jsou jeho dva konce v různých výškách. Oblouk má 12 segmentů; pro více napište při kreslení `24s`. Oblouky uzavírají plochy stejně jako úsečky: oblouk přes roh obdélníku jej rozdělí.

## Kreslení hladké křivky

{{ui:Křivka}} nakreslí hladkou čáru, která prochází každým bodem, na který kliknete: kabel, trasu madla, okraj zahrady. Může se odlepit od země: body se přichytávají k rohům, hranám a plochám kdekoli a šipkové klávesy zamykají červenou, zelenou nebo modrou stejně jako u {{ui:Úsečka}}.

1. Klikněte na {{ui:Křivka}} ve skupině {{ui:Kreslení}}.
2. Klikněte na body, kterými křivka prochází. Napište `<0,0,1>` a {{key:Enter}} pro bod 1 nad posledním, `[x,y,z]` pro přesné místo, nebo délku pro bod tak daleko směrem k ukazateli.
3. Stiskněte {{key:Enter}} nebo dvojklikem dokončete. Klikněte znovu na první bod, čímž křivku uzavřete. {{key:Backspace}} vezme poslední bod zpět.

Křivka se vybírá jako jeden kus. Pro změnu ji vyberte a klikněte na {{ui:Upravit body}} v {{ui:Informace o prvku}}: její body se zobrazí jako čtverce. Klikněte na jeden a pak klikněte, kam má jít (nebo napište `<dx,dy,dz>`). {{key:Esc}} vrátí bod zpět a ukončí úpravy. Uzavřená rovinná křivka vytvoří plochu; křivka, která ohraničuje plochu, už se upravit nedá.

## Odsazení: ohraničení uvnitř nebo vně plochy

{{ui:Odsazení}} zkopíruje obrys plochy o nastavenou vzdálenost dovnitř (nebo ven), například pro rám, lem, parapet nebo sklo obrazovky.

1. Stiskněte {{key:F}} a klikněte na plochu, nebo vyberte plochu nejdřív a pak stiskněte {{key:F}}.
2. Pohybujte ukazatelem dovnitř plochy pro vnitřní obrys, nebo ven pro vnější. Nový obrys půjde za ukazatelem a tip ukáže vzdálenost.
3. Klikněte, nebo zadejte vzdálenost a stiskněte {{key:Enter}}.

Plocha se rozdělí na dvě: vnitřní plochu a rám kolem ní (nebo nový prstenec vně). Obě můžete hned vytlačit nebo vytáhnout: u obrazovky nakreslete krabici, vytlačte ji na tloušťku, odsaďte přední plochu o 30 mm dovnitř a vnitřní plochu mírně vtlačte pro sklo. Díry v ploše se odsazují také a oblouk nebo kružnice zůstává jednou (menší nebo větší) křivkou.

- **Dvojklik** plochy s {{ui:Odsazení}} ji odsadí znovu o poslední vzdálenost.
- **Hrany:** vyberte řetěz spojených hran v jedné rovině (například dvě čáry tvaru L), stiskněte {{key:F}}, přesuňte se na stranu, kterou chcete, a zadejte vzdálenost: nakreslí se rovnoběžná kopie se zkosenými rohy.
- Je-li vzdálenost větší, než plocha dovolí, ModelCraft to řekne a nic nenakreslí.

## Oblouky, kružnice a mnohoúhelníky jsou křivky

Klikněte na libovolný segment oblouku, kružnice nebo mnohoúhelníku a vybere se celá křivka. {{ui:Informace o prvku}} pak ukáže její poloměr, segmenty, úhel (u oblouků) a délku. Napište tam nový poloměr a změní se velikost kolem jejího středu; plochy nakreslené v její rovině ji budou následovat. Jakmile byla plocha křivky vytlačena nebo vytažena, její poloměr zůstane beze změny.

## Kreslení úsečkami

1. Stiskněte {{key:L}}.
2. Klikněte, kde úsečka začíná.
3. Klikněte, kde končí, nebo zadejte délku a stiskněte {{key:Enter}}. Zadaná délka jde ve směru, který ukazuje ukazatel.
4. Pokračujte klikáním. Každé kliknutí začne další úsečku od konce poslední.
5. Uzavřete obrys kliknutím na první bod znovu. Když úsečky uzavřou rovinnou smyčku, vyplní se plochou a nástroj přestane navazovat. {{key:Esc}} zastaví kdykoli.

Úsečky se řídí směry červené, zelené a modré, když se k nim přiblížíte; úsečka se obarví touto barvou a tip říká "Na červené ose". Jak zamknout směr a přichytit body, viz [Odvození a přichycení](topic:inference).

### Kam jde úsečka, když se ničeho nedotýká

- Úsečka začínající na ploše zůstane v rovině této plochy.
- Úsečka začínající na zemi nebo v prázdném prostoru zůstane ve výšce svého počátečního bodu. Díváte-li se na model z boku, půjde místo toho ve svislé rovině, která je k vám obrácena.
- Chcete-li nakreslit úsečku na přesné místo, zadejte bod: `[x,y,z]` pro bod v modelu, nebo `<dx,dy,dz>` pro posun od začátku. Viz [Zadávání přesných velikostí do pole hodnoty](topic:value-box).

## Rozdělení plochy

Nakreslete čáru přes plochu, od jedné hrany k druhé (nebo od hrany k hraně přes jiné čáry). Plocha se rozdělí na dvě plochy. Každá si ponechá svou stranu a barvu. Totéž platí pro obdélník nebo kružnici nakreslenou na ploše: tvar se stane vlastní plochou uvnitř větší, která pak má díru.

Takto rozvrhnete místnosti na podlahové desce, okno na zdi nebo schod na schodišti: nakreslete obrys na ploše a pak vytlačte nebo vytáhněte novou plochu.

## Plochy obrácené špatným směrem

Každá plocha má přední a zadní stranu. Zadní strana je modrošedá. Plochy nakreslené na zemi směřují nahoru; plochy nakreslené na jiné ploše směřují stejně jako ona.

Pokud plocha ukazuje zadní stranu tam, kde čekáte přední, vyberte ji a klikněte na {{ui:Obrátit plochu}} v {{ui:Informace o prvku}}.

## Co vidíte při kreslení

- Barevná značka tam, kde se ukazatel přichytil, a její název v tipu vlevo dole.
- Náhled úsečky nebo tvaru.
- Živá velikost v poli hodnoty. Můžete ji kdykoli přepsat.

## Pokud tvar není tam, kde jste čekali

- Na dotykové obrazovce viz [Řešení problémů](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Pokud se úsečka přichytila k něčemu daleko za modelem, mírně model otočte: body skryté za plochou se nikdy nepřichytí, ale body na její hraně ano.
- Stiskněte {{key:Mod+Z}} pro vrácení posledního tvaru; jeden krok zpět odstraní jednu úsečku nebo jeden tvar.
