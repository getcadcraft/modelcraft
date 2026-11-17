---
title: Rozdělení hrany nebo křivky na stejné části
summary: Rozdělte úsečku na stejné díly nebo dejte oblouku či kružnici nový počet segmentů nástrojem Rozdělit.
keywords: rozdělit, rozdělit hranu, stejné části, stejné segmenty, rozdělit hranu na části, segmenty, dělení hran, segmenty oblouku, segmenty kružnice, body podél úsečky
from: 5c3ce3ed
---

{{ui:Rozdělit}} rozdělí hranu na stejné části, v každém místě řezu vznikne roh. Rohy použijte k přichycení, k začátku úseček nebo k vytlačení a utažení částí plochy.

## Rozdělení hrany

1. Klikněte na {{ui:Rozdělit}} na panelu nástrojů, nebo vyberte hranu a klikněte na {{ui:Rozdělit…}} v {{ui:Informace o prvku}}.
2. Ukažte na hranu. Značky ukazují, kde budou řezy: uprostřed hrany jsou dvě části; posuňte ji ke konci pro více částí.
3. Klikněte, čímž ji rozdělíte na zobrazené části. Nebo zadejte číslo, například `5` (nebo `5s`, nebo `/5`), a stiskněte {{key:Enter}}: rozdělí se hned.

Vzniklé části zůstanou vybrané a jde o jeden krok zpět. Plocha, ke které hrana patří, si zachová svůj tvar a získá nové rohy.

## Rozdělení oblouku nebo kružnice

Ukažte na libovolný segment oblouku nebo kružnice: rozdělí se celý.

- Oblouk nebo kružnice, jejichž rohy nepoužívá nic jiného a leží v rovině své plochy, se **nakreslí znovu s tolika segmenty** na skutečném oblouku. Konce zůstanou na místě a zůstane jednou křivkou, takže ji můžete stále vybrat jedním kliknutím a změnit její poloměr v {{ui:Informace o prvku}}. Kružnice o 24 stranách rozdělená na 8 se změní na osmiúhelník.
- Jakákoli jiná křivka (okraj vytlačeného válce, křivka nakreslená nástrojem {{ui:Křivka}}, oblouk s úsečkami připojenými k rohům) dostane nové rohy ve stejných délkách podél sebe a nic se nepohne.

## S klávesami modeláře

Nástroj je stejný i s klávesami modeláře (Nastavení › ModelCraft › Klávesy, nebo styl nabídky Modeler), kde je v nabídce {{ui:Síť}} jako {{ui:Rozdělit hrany}}.

## Co je dobré vědět

- Zadaná čísla jdou od 2 do 1000; pohyb ukazatele dává až 100.
- Křivka nakreslená nástrojem {{ui:Křivka}} si zachovává své body: po {{ui:Upravit body}} se nakreslí znovu z nich a nové rohy zmizí.

Viz také [Kreslení ploch úsečkami, obdélníky, kružnicemi a oblouky](topic:draw-faces) a [Zadávání přesných velikostí do pole hodnoty](topic:value-box).
