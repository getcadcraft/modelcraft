---
title: Nodusse: bou 'n model deur te verbind
summary: Verbind getalle met punte, punte met kurwes en kurwes met oppervlaktes. Verander 'n getal en alles stroomaf bou weer op. Elke nodus is ook 'n lyn CraftScript, en die grafiek word in die lêer gestoor.
keywords: nodusse, nodus-redigeerder, visuele skrywe, parametries, grafiek, drade, poorte, vrye vorm, nurbs, loft, ekstrusie, revolusie, sirkel, kurwe, oppervlak, reeks, omvang, ewekansig, lys, skrif, craftscript, grasshopper
from: 9c8e254f
---

Die **Nodusse**-redigeerder bou geometrie deur bokse aan mekaar te verbind. Elke boks (’n nodus) doen een klein werk: maak 'n getal, 'n punt, 'n sirkel, 'n loft. Jy verbind die resultaat van een aan die invoer van die volgende, en die model volg wanneer jy 'n getal aan die begin verander.

Maak dit oop vanaf die regterkantse paneel: {{ui:Nodusse}} › {{ui:Knope…}}. 'n Lêer wat reeds 'n grafiek het, maak dit self oop. Dit is 'n venster oor die 3D-aansig: sleep die titelbalk om dit te skuif, sleep die hoek om die grootte te verander.

## Verbind

1. Kies 'n nodus uit die lys aan die linkerkant (tik in die soekboks om dit te beperk; <kbd>Enter</kbd> voeg die eerste passing by). Dit verskyn in die middel van die doek.
2. Sleep van 'n ronde **uitvoer**-stippie aan die regterkant van een nodus na 'n ronde **invoer**-stippie aan die linkerkant van 'n ander. Die stippie word groen wanneer dit pas en rooi wanneer dit nie pas nie; hou die aanwyser daarop vir die rede.
3. 'n Invoer met niks verbind nie, wys 'n boks vir 'n getal wat jy tik. Tik 'n getal en druk <kbd>Tab</kbd>: die resultaat bou weer op.
4. Die klein sirkel in 'n nodus se titelbalk is sy **oog**. 'n Nodus met die oog aan word in die 3D-aansig geteken: as lyne vir kurwes, geskakeer vir oppervlaktes, en as stippels vir punte.

Sleep 'n nodus aan sy titelbalk. Sleep die agtergrond om te beweeg; draai die wieletjie om te zoem. <kbd>Delete</kbd> verwyder die gekose nodus. {{ui:Orden}} rangskik die nodusse in kolomme, {{ui:Pas in}} bring hulle almal in beeld, en {{ui:Ontdoen}} en {{ui:Herdoen}} loop deur jou wysigings.

## Tipes en eenhede

Poorte het 'n tipe: getal, ja/nee, punt, vektor, kurwe, oppervlak, maas, soliede, of "geometrie" vir enige van daardie. 'n Punt kan 'n vektor-invoer voed en omgekeerd. Getalle dra 'n eenheid: 'n **lengte** is in millimeter en 'n **hoek** is in grade. 'n Lengte kan nie 'n hoek voed nie, en 'n lengte maal 'n lengte (’n oppervlakte) word geweier, so 'n verkeerde draad word gestop wanneer jy dit maak.

'n Vierkantige stippie is 'n **lys**. Wanneer 'n lys 'n enkelwaarde-invoer bereik, loop die nodus een keer vir elke item, en sy resultaat word 'n lys. Die korter lys herhaal sy laaste item. Byvoorbeeld, 'n **Reeks** van hoogtes in **Skuif** maak 'n stapel kopieë.

## Soliede en Booleane as nodusse

Die groep **Soliede** maak geslote liggame uit dieselfde presiese oppervlaktes as die Oppervlaktes-paneel: **Boks-soliede**, **Silinder-soliede** en **Sfeer-soliede** (groottes in mm), **Unie**, **Trek af** en **Snyding** (die tweede soliede word van die eerste geneem; die toleransie is hoe ver die soliede-enjin se driehoeke van die presiese oppervlaktes mag wees), **Afronding tussen vlakke** (die vlakke volgens hul nommer in die soliede, 1 vir die eerste; 'n radius en, bo 0, 'n radius aan die einde), **Soliede volume** (mm³) en **Soliede na maas** (om dit te sien of te bak). 'n Soliede het sy eie poorttipe: 'n punt of getal kan nie in 'n soliede-invoer verbind word nie, en die stippie bly rooi. Die Booleaanse en Afrondingsnodusse gebruik die program se eie soliede-enjin, wat die eerste keer gelaai word wanneer die redigeerder oopmaak.

## Foute

'n Nodus wat nie sy werk kan doen nie, sê onder sy naam, in rooi, waarom ("Die radius moet groter as nul wees."), en die nodusse daarna wag. Dieselfde boodskap is 'n Probleem in die Probleme-paneel, so jy kan dit daarvandaan vind.

## Elke nodus is 'n lyn skrif

Druk {{ui:Skrif}} om die grafiek as CraftScript te sien: een lyn per nodus, soos `n3 = nd_circle(n2, n1, [0 0 1]);`. Wysig die teks en druk {{ui:Maak die grafiek uit hierdie skrif}} om dit weer as 'n grafiek te bring. Dieselfde `nd_`-funksies werk in 'n CraftScript in PartCraft, so 'n grafiek kan daar gedraai, gelus of getoets word. Ewekansige getalle neem altyd 'n **saad**, so dieselfde grafiek gee dieselfde resultaat op elke rekenaar.

## Saam met die lêer gestoor

Die grafiek word in die modellêer gestoor. Die nodusse maak self hul eie kurwes, oppervlaktes en mazes: hulle verander nie die model se vlakke totdat jy dit vra nie.

## Bak na model

Skakel die oog aan van 'n nodus wat 'n oppervlak of maas maak, en druk dan {{ui:Bak na model}} in die Nodusse-venster. Elke getoonde oppervlak of maas word 'n groep vlakke in die model, in meter, wat jy soos enige ander kan wysig. Dit is een ontdoen-stap. Die grafiek bly, maar die kopie volg dit nie meer nie: verander 'n getal en bak weer vir 'n nuwe een. Punte en kurwes is nie soliedes nie, so hulle word weggelaat, en die boodskap sê hoeveel.
