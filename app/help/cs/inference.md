---
title: Odvozování a přichycení
summary: Co znamenají barevné značky, který přichycení má přednost a jak zamknout směr šipkami nebo klávesou Shift.
keywords: odvození, přichycení, koncový bod, střed úsečky, střed plochy, střed, na hraně, na ploše, osa, červená osa, zelená osa, modrá osa, rovnoběžně, kolmo, zámek, shift, uchopení
from: e78984e9
---

Zatímco pracuje kreslicí nebo upravovací nástroj, ModelCraft se dívá na to, co je pod kurzorem, a přichytí se k nejužitečnějšímu prvku poblíž. Značka ukazuje, co našel, a hrot vlevo dole to pojmenuje.

## Značky a hroty

| Hrot | Značka | Přichytí se k |
|---|---|---|
| Koncový bod | Zelený kruh | Konci hrany |
| Střed úsečky | Tyrkysový kruh | Středu hrany |
| Střed plochy | Modrý kruh | Středu plochy pod kurzorem |
| Vodicí bod | Šedá | Vodicímu bodu zanechanému měřicím pásmem |
| Počátek | Okrová | Místu, kde se stýkají červená, zelená a modrá osa |
| Na červené ose / Na zelené ose / Na modré ose | Čára v dané barvě | Čáře od počátečního bodu v tomto směru |
| Rovnoběžně s hranou / Kolmo na hranu | Purpurová čára | Čáře od počátečního bodu rovnoběžné nebo kolmé k zapamatované hraně (viz níže) |
| Zamčeno | Purpurová čára | Směru, který jste zamkli šipkou nebo {{key:Shift}} |
| Na hraně | Červený čtverec | Kdekoli podél hrany |
| Na vodítku | Šedá | Kdekoli podél vodicí čáry |
| Na ploše | Modrý kosočtverec | Kdekoli na ploše |
| Na rovině | žádná | Rovině, na které jste začali, je-li kurzor nad prázdným prostorem |
| Na zemi | žádná | Zemi (červeno-zelená rovina), není-li tam nic jiného |

Když osa z počátečního bodu protne hranu nebo vodicí čáru, ModelCraft se přichytí k průsečíku a hrot pojmenuje obojí, například "Na červené ose, na hraně".

## Který přichycení vyhraje

1. **Body** do zhruba 12 pixelů: nejprve koncové body, potom vodicí body, středy úseček, střed plochy pod kurzorem a počátek.
2. **Směry** od počátečního bodu: červená, zelená a modrá osa a rovnoběžně nebo kolmo k zapamatované hraně.
3. **Na hraně** nebo na vodicí čáře.
4. **Na ploše.**
5. **Kreslicí rovina** nebo země.

Věci skryté za plochou se nikdy nepřichytí. Otočte pohled, abyste viděli bod, který chcete.

## Kreslení na plochu z bodu

{{ui:Obdélník}}, {{ui:Kružnice}} nebo {{ui:Mnohoúhelník}} začatý na rohu, středu úsečky, hraně nebo středu plochy se kreslí **v rovině plochy pod kurzorem** a tuto plochu protne. Hrana patří dvěma plochám, takže rozhodne strana hrany, na které je kurzor: chcete-li kreslit na konec dlouhého kvádru, začněte od středu jedné z jeho hran s kurzorem těsně uvnitř koncové plochy.

## Rovnoběžně a kolmo

ModelCraft si pamatuje **poslední hranu, přes kterou kurzor přejel před vaším prvním kliknutím**. Začátek na rohu nebo na hraně se počítá jako přejetí přes tuto hranu. Jakmile nástroj pracuje, další hrany, nad kterými kurzor přejíždí, ji nenahradí.

Chcete-li nakreslit čáru rovnoběžnou s existující hranou:

1. Stiskněte {{key:L}} a najeďte na hranu, kterou chcete napodobit.
2. Přesuňte se k počátečnímu bodu, pokud možno bez přejíždění přes jiné hrany, a klikněte.
3. Přesuňte se ve směru rovnoběžném s touto hranou. Čára se změní na purpurovou a hrot říká "Rovnoběžně s hranou". Kolmo funguje stejně, v rovině, ve které kreslíte.

Byla-li zapamatována špatná hrana, stiskněte {{key:Esc}}, najeďte na správnou hranu a začněte znovu.

## Zamknutí směru

Po prvním kliknutí nástroje můžete držet další bod na jedné přímce:

| Klávesa | Zamkne na |
|---|---|
| {{key:Right}} | Červenou osu |
| {{key:Left}} | Zelenou osu |
| {{key:Up}} | Modrou osu (přímo nahoru) |
| {{key:Down}} | Rovnoběžně se zapamatovanou hranou (viz výše) |

Stejnou šipku stiskněte znovu pro odemčení. Stavový řádek říká "Zamčeno na červenou osu. Stiskněte stejnou šipku pro odemčení."

Je-li zamčeno, bod klouže po přímce směrem k místu, kam ukazuje kurzor, a stále se zarovnává s body, nad nimiž přejíždíte: najeďte na roh jiného kvádru a nakreslete čáru podél červené osy přesně tak daleko, jak je tento roh.

**{{key:Shift}}** zamkne směr, ke kterému se právě přichycujete (osu nebo rovnoběžný směr), dokud jej držíte. Pusťte jej pro odemčení.

Zámky fungují v {{ui:Úsečka}}, {{ui:Obdélník}}, {{ui:Kružnice}}, {{ui:Mnohoúhelník}}, {{ui:Přesunout}}, {{ui:Měřítko}} a {{ui:Pásmo}}. Před prvním kliknutím šipky místo toho obíhají pohled.

## Uvnitř skupiny

Při úpravách uvnitř skupiny nebo komponenty jsou osy vlastní osy skupiny (pohybují se s ní a otáčejí se, byla-li otočena). Přichycení stále najde body a hrany mimo skupinu, takže můžete zarovnat věci se zbytkem modelu.
