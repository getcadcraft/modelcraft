---
title: Snitvlakke: sny die model oop
summary: Plaas 'n snitvlak om binne die model te sien, skuif dit deur, keer dit om of skakel die snit af.
keywords: snit, snitvlak, snitsnit, snit, sny-weg, knip, binne, grondplan, skyf, dwarssnit
from: 28c3a645
---

'n Snitvlak sny die model oop, sodat jy binne dit kan sien en werk: 'n grondplan van 'n huis, die binnekant van 'n kas. Die model word nie verander nie; die snit is net 'n aansig.

## Plaas een

1. Klik {{ui:Snit}} in die {{ui:Kamera}}-groep.
2. Klik 'n vlak. Die vlak word op daardie vlak geplaas, met vier pyltjies wat na jou wys.

   Klik weg van enige vlak vir 'n vlakvierkant wat reg is op die rigting waarin jy die meeste kyk. Druk eers 'n pyltjiesleutel om dit reg op rooi ({{key:Right}}), groen ({{key:Left}}) of blou ({{key:Up}}) te plaas.

Die kant waarheen die pyltjies wys, is **weggesny**. 'n Vlak wat op 'n vlak geplaas is, sny nog niks nie: skuif dit in die model in.

## Skuif dit, keer dit om, skakel dit af

Klik die vlak se omlyn om dit te kies. In {{ui:Entiteitinligting}}:

- {{ui:Langs sy pyle}} sê waar dit is. Tik 'n nuwe afstand en druk {{key:Enter}} om dit deur die model te skuif; die tik van `-1m` op 'n vlak wat jy op 'n voorvlak geplaas het, beweeg dit 1 m die model in.
- {{ui:Keer om}} draai die pyltjies om, sodat die ander kant weggesny word.
- {{ui:Aktief (sny die model)}}: een vlak sny op 'n slag. Merk die boks van 'n ander vlak, of plaas 'n nuwe een, en dié sny in plaas daarvan.
- Hernoem dit in {{ui:Naam}}; skrap dit met {{key:Delete}} of die {{ui:Uitveër}}.

Waar die vlak deur 'n geslote soliede deel gaan, word die snit in 'n donker kleur gevul. Geometrie wat nie geslote is nie (een vlak, 'n oop boks) word gesny maar nie gevul nie.

## Wys en versteek

In {{ui:Aansigte}}:

- {{ui:Wys snitvlakke}} versteek die vlakke se omlyne en pyltjies (die snit bly).
- {{ui:Wys snitsnitte}} skakel die snit af en wys die hele model, sonder om die vlakke uit te vee.

[Aanbiedingsaansig](topic:styles-shadows#presentation-view) versteek die omlyne ook.

## Dinge om te weet

- Wat weggesny is, kan nie geklik of aan gevang word nie, so jy kan teken op wat die snit wys.
- Snitvlakke, watter een aktief is, en die twee skakelaars word in die ModelCraft-lêer gestoor. Elke verandering is een ontdoenstap.
- Uitvoere bevat altyd die hele model: 'n snit is 'n aansig, nie 'n wysiging nie.
