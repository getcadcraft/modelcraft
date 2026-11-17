---
title: Přesunout, kopírovat a vytvořit pole
summary: Přesouvejte objekty kliknutím nebo o přesnou vzdálenost, kopírujte je pomocnou klávesou a vytvořte řadu rovnoměrně rozmístěných kopií.
keywords: přesun, kopírování, duplikovat, pole, řada, rozestup, rozdělit, odsazení, natáhnout, sloupce, opakovat, více kopií
from: 280245fc
---

{{ui:Přesunout}} ({{key:M}}) přesune vybrané objekty z jednoho bodu do druhého. Podržením pomocné klávesy se z přesunu stane kopírování a po kopii můžete napsat, kolik dalších kopií chcete.

## Přesunutí objektu

1. Vyberte, co chcete přesunout (viz [Výběr objektů](topic:select)). Pokud nic není vybráno, přesun vezme objekt, na který kliknete.
2. Stiskněte {{key:M}}.
3. Klikněte na bod, ze kterého chcete přesouvat. Vyberte něco významného, například roh: tento bod přistane přesně tam, kam kliknete příště.
4. Pohybujte ukazatelem. Výběr se pohybuje s ním. Přichytává se k bodům, hranám a ke směrům červené, zelené a modré, stejně jako čára.
5. Klikněte, kam má bod přijít, nebo zadejte vzdálenost a stiskněte {{key:Enter}}.

   Nápověda na stavovém řádku se vrátí na „Klikněte na bod, ze kterého chcete přesouvat…“ pro další přesun.

Zadaná vzdálenost jde ve směru, kterým ukazujete. Můžete také zadat přesné posunutí, `<2m,0,0>` (2 m po červené), nebo přesný cílový bod pro zvolený bod, `[0,0,0]` (počátek). Viz [Zadání přesných velikostí](topic:value-box).

Pro pohyb jen po jedné ose stiskněte po prvním kliknutí šipku: {{key:Right}} zamkne pohyb na červenou, {{key:Left}} na zelenou, {{key:Up}} na modrou. Stisknutím stejné šipky zámek zrušíte.

## Přesun části tvaru ho natáhne

Geometrie, která není seskupena, je propojena. Pokud vyberete jednu plochu nebo několik hran a přesunete je, připojené plochy se natáhnou, aby je následovaly. Přesunete-li horní plochu krabice do strany, krabice se nakloní; přesunete-li jednu hranu střechy, změní se sklon střechy. Plochy, které už nemohou zůstat rovné, se rozloží na trojúhelníky.

Chcete-li přesunout celý objekt bez natahování, nejprve ho celý vyberte (trojklikem), nebo ještě lépe z něj vytvořte skupinu nebo komponentu (viz [Skupiny a komponenty](topic:groups-components)).

## Kopírování objektu

1. Vyberte, co chcete kopírovat.
2. Stiskněte {{key:M}}.
3. Podržte {{key:Ctrl}} (nebo {{key:Alt}}) a klikněte na bod, ze kterého přesouváte. Na Macu totéž dělá {{key:Mod}} nebo {{key:Alt}}. Nápověda říká „Ctrl místo toho přesouvá“, což znamená, že kopírujete.

   Po prvním kliknutí můžete také stisknout a pustit {{key:Ctrl}} nebo {{key:Alt}} a přepínat mezi přesunem a kopírováním.

4. Klikněte, kam má kopie přijít, nebo zadejte vzdálenost a stiskněte {{key:Enter}}.

   Originál zůstane na místě a kopie je vybrána.

## Kopírovat, vyjmout, vložit a duplikovat

- {{key:Mod+C}} zkopíruje výběr, {{key:Mod+X}} ho vyjme (zkopíruje a pak smaže). {{ui:Kopírovat}} a {{ui:Vložit}} jsou také tlačítka ve skupině {{ui:Úpravy}} na panelu nástrojů a {{ui:Další}} vedle nich nabízí vyjmout, vložit na stejné místo a duplikovat.
- {{key:Mod+V}} vloží: obrys kopie se pohybuje za ukazatelem a přichytává se jako u každého nástroje; kliknutím ji položíte tak, že její nejnižší roh bude v místě kliknutí. {{key:Esc}} zruší.
- {{key:Mod+Shift+V}} vloží na stejné místo, přesně tam, odkud kopie pochází. Hodí se pro přesun do skupiny, kterou máte otevřenou.
- {{key:Mod+D}} ({{key:Shift+D}} ve stylu Modeler) duplikuje: kopie se hned vytvoří a pohybuje se s ukazatelem. Kliknutím ji položte, zadejte vzdálenost, nebo stiskněte {{key:Esc}} a zahoďte ji. Hned poté napište `3x` pro další kopie za sebou.

Vložená skupina se stane novou skupinou. Vložená komponenta je dalším umístěním téže komponenty, takže úprava jedné změní všechny. Kopie se vloží i do jiné karty ModelCraft v tomto prohlížeči (tam přijdou jako nové definice).

## Řada kopií

Hned po kopírování, dokud je nástrojem stále {{ui:Přesunout}}:

- Napište `3x` (nebo `*3`) a stiskněte {{key:Enter}} pro tři kopie za sebou, každou se stejným rozestupem jako první kopie. Dostanete tři nové kopie kromě originálu.
- Napište `/3` a stiskněte {{key:Enter}} pro rozdělení: tři kopie rovnoměrně rozložené od originálu až k místu, kam jste položili první kopii; poslední je přesně na tom místě. Použijte to k vyplnění úseku: položte jednu kopii na vzdálený konec a pak rozdělte.

Hned potom můžete napsat jiné číslo: `5x` nahradí řadu `3x`. Nápověda připomíná: „Zkopírováno. Napište 3x pro další kopie za sebou, nebo /3 pro rozdělení vzdálenosti.“

### Příklad: sloupce po 6 metrech

1. Vytvořte sloupec a udělejte z něj komponentu ({{key:G}}), aby se všechny kopie později změnily společně.
2. Stiskněte {{key:M}}, podržte {{key:Ctrl}} a klikněte na spodní roh sloupce.
3. Pohybujte se po červené ose, napište `6m` a stiskněte {{key:Enter}}.
4. Napište `4x` a stiskněte {{key:Enter}}. Máte pět sloupců, každý 6 m od toho dalšího.

## Na co si dát pozor

- Před druhým kliknutím stiskněte {{key:Esc}} pro zrušení; vše se vrátí na původní místo.
- Přesun funguje uvnitř skupiny, kterou upravujete. Chcete-li přesunout celou skupinu, nejprve ji zavřete a vyberte zvenku.
- Je-li zapnuta {{ui:Kolize}} (vpravo dole a v [nastavení ModelCraft](topic:settings#solids-stop-where-they-touch)), přesun se zastaví tam, kde se výběr dotkne jiného tělesa, místo aby jím prošel. Kliknutím na {{ui:Kolize}} ji vypnete pro přesun, který má projít.
- Chcete-li vložit kopii do jiné skupiny, zkopírujte ji, otevřete druhou skupinu a vložte. {{key:Mod+Shift+V}} ji nechá na stejném místě.
