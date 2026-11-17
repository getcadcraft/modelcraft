---
title: Vormvrye oppervlaktes (NURBS)
summary: Gladde kurwes en oppervlaktes vir produkskille, motorliggame en bootrompe — loft, sweep, kurwenetwerke, vier-rand-lappe, oorgange, snoeiings — met G0-, G1- en G2-kontinuïteit gemeet op die presiese oppervlaktes, soliede met unie, aftrek en snyding, zebra- en krommingsaansigte, vlakke wat by 'n skandering pas met die fout gemeet, en STEP- of IGES-lêers.
keywords: nurbs, skandering, omgekeerde ingenieurswese, pas, maas na oppervlak, puntwolk, stl, snoei, gesnoei, gat, sny, soliede, booleaans, unie, aftrek, snyding, verskil, naat, geslote, vrye vorm, oppervlak, oppervlaktes, b-spline, bspline, kurwe, spline, loft, sweep, rail, netwerk, coons, lap, oorgang, passing, kontinuïteit, g0, g1, g2, raaklyn, krommng, zebra, beheerpunte, knope, graad, step, iges, klas a
from: 09887405
---

Die **Oppervlaktes**-paneel maak gladde kurwes en oppervlaktes van die soort wat gebruik word vir produkskille, motorliggame en bootrompe: NURBS, dieselfde wiskunde wat ander oppervlakmodelleerders gebruik. Alles word gemeet op die presiese oppervlaktes, nooit op die driehoeke wat jy sien nie. Groottes in die paneel is in **millimeter**, wat ook al die eenheid is wat die model wys.

Maak dit oop vanaf die regterkantse paneel: {{ui:Oppervlaktes}} › {{ui:Maak die Oppervlaktes-paneel oop}}. 'n Model wat reeds oppervlaktes het, maak dit self oop.

## Hoe 'n opdrag werk

1. Druk 'n opdrag (byvoorbeeld **Loft**). Die paneel sê wat dit nog nodig het: punte, kurwes, 'n oppervlakrand of 'n kurweeinde.
2. Kies hulle: klik op hulle in die 3D-aansig, of druk **Kies** (of die rand- en eindknoppies) langs elkeen in die lys. Vir 'n rand, klik naby daardie rand van die oppervlak.
3. Kontroleer die opsies (graad, toleransie, kontinuïteit, …) en druk **Maak**.

Kurwes uit punte neem die punte wat per reël getik word (`x, y, z` in mm), of **Kies punte in die aansig**: elke klik gebruik dieselfde vasklik as die tekengereedskap; druk <kbd>Enter</kbd> of dubbelklik om klaar te maak, <kbd>Esc</kbd> om te stop.

## Kurwes

- **Kurwe deur punte** gaan deur elke punt. **Kurwe deur beheerpunte** volg 'n kooi van punte in plaas daarvan.
- **Voeg knoop in**, **Verhoog graad** en **Verlaag graad** verander hoe 'n kurwe beskryf word sonder om dit te skuif (verlaag weier as die kurwe meer as die toleransie sou skuif). **Herbou kurwe** gee dit 'n nuwe aantal beheerpunte en sê hoe ver dit geskuif het.
- **Pas kurwe** maak een kurwe se einde ontmoet 'n ander s'n met G0 (raak), G1 (dieselfde rigting) of G2 (dieselfde kromming ook). **Oorgang-kurwe** voeg 'n nuwe kurwe tussen twee punte by.
- **Voeg kurwes saam** en **Verdeel kurwe**.

## Oppervlaktes

- **Loft** deur twee of meer kurwes, **Reguitlynoppervlak** tussen twee, **Trek kurwe uit**, **Draai kurwe**.
- **Sweep langs een spoor** dra 'n profiel langs 'n pad sonder om dit te draai; **Sweep langs twee spore** hou die profiel se punte op albei spore. Sweeps word gepas: die statuslyn sê hoe na dit by die ware sweep gebly het.
- **Oppervlak uit 'n kurwenetwerk** gaan deur 'n rooster kurwes (die eerste keuses is die profiele, die res die gidse). **Lap uit vier rande** vul vier kurwes wat by hul hoeke ontmoet.
- **Pas oppervlak** laat 'n oppervlakrand 'n buurman ontmoet met G0, G1 of G2; **Oorgang-oppervlak** voeg 'n oppervlak tussen twee rande by.
- **Verskuif oppervlak**, **Verleng oppervlak** (die oppervlak gaan voort soos dit was), **Herbou oppervlak**, en knope en graad vir oppervlaktes.

## Kwaliteit nagaan

Die tabel **Gedeelde rande** lys elke rand wat twee oppervlaktes deel, met die opening (mm), die hoek tussen hulle (°) en die krommingsprong (1/mm), en of dit G0, G1 of G2 maak. 'n Rand wat slegter is as wat jy gevra het, is ook in **Probleme** (die ⚠-knoppie in die appbalk) met 'n **Pas**-herstel.

**Wys as** › **Zebrastrepe** en **Krommming (Gauss)** kom uit die presiese oppervlak: strepe wat ononderbroke oor 'n rand loop, beteken G1; strepe wat ook hul breedte behou, beteken G2. Kromming is blou waar die oppervlak 'n saalboog is, rooi waar dit 'n koepel is en wit waar dit plat is. **Beheerpunte** teken die beheernette.

G0–G2 word by 33 punte per rand gemeet. **G3 en "klas A"-kwaliteit word nie gemeet nie** en word nie beweer nie.

## Snoei 'n oppervlak

Die groep **Snoei** sny 'n oppervlak sonder om sy vorm te verander: die oppervlak hou al sy beheerpunte, en slegs die deel binne die buitelyn word gewys, getel en geskryf. **Snoei tot 'n reghoek** en **Snoei met 'n sirkel** werk op 'n deel (0 tot 1) van die oppervlak in elke rigting, so hulle het geen kies in die aansig nodig nie; **Snoei deur 'n kurwe** neem 'n geslote kurwe wat op die oppervlak lê (dit word in die oppervlak geprojekteer, en in woorde geweier as dit oop is of meer as die toleransie weg is). Merk **Sny 'n gat** om die binnekant van die buitelyn te verwyder; laat dit af om slegs die binnekant te hou. 'n Oppervlak kan een gehoue buitelyn en enige aantal gate hê; 'n buitelyn wat 'n ander kruis, word geweier. **Verwyder die snoeiing** wys die hele oppervlak weer. Die gesnyde rande volg die buitelyn presies; die paneel se Ontdoen neem 'n snoeiing terug soos enige ander stap.

STEP dra die snoeiing as die vlak se grense en IGES as 'n gesnoeide oppervlak (entiteit 144); albei lees dit terug.

## Soliede en Booleane

Die groep **Soliede** maak oppervlaktes tot geslote liggame en kombineer hulle. 'n Soliede hier is 'n stel van die paneel se eie oppervlaktes wat tesame 'n volume sluit; sy vlakke bly presiese NURBS-oppervlaktes met hul snoeiings.

- **Boks-soliede**, **Silinder-soliede** en **Sfeer-soliede** maak een uit getikte groottes (in mm): 'n boks van ses plat vlakke, 'n silinder van 'n ronde sy en twee plat eindes gesnoei tot die sirkel, 'n sfeer van een omwentelde oppervlak.
- **Soliede uit oppervlaktes** groepeer oppervlaktes wat jy self gemaak het. Kies hulle, of kies niks om elke getoonde oppervlak wat nog nie in 'n soliede is nie, te gebruik. Hulle word binne die toleransie aanmekaar genaai: as hulle nie sluit nie, verander niks nie en die paneel sê hoeveel rande oop bly en hoe na hulle mekaar moet raak.
- **Unie**, **Trek af** (die tweede soliede word van die eerste weggeneem) en **Snyding** (slegs wat beide deel) neem twee soliedes: klik 'n vlak van elkeen in die aansig, of druk **Kies** in die **Soliede**-lys. Merk **Hou die twee soliede** om hulle langs die resultaat te laat.

'n Boolean hou elke vlak op sy eie presiese oppervlak en sny dit met nuwe snoeibuitelyne langs die snypunt. Die resultaatlyn gee die gemete getalle: hoe ver die soliede-enjin se punte moes skuif om op die presiese oppervlaktes te sit (nooit meer as die toleransie nie), hoe na die snypunte aan albei oppervlaktes is (gewoonlik 'n paar miljoenstes van 'n millimeter), die volume, en of die nuwe vlakke weer sluit wanneer hulle weer uit hul presiese oppervlaktes genaai word. Volumes word op driehoeke binne die toleransie gemeet (0,05 mm tensy jy 'n ander stel), so 'n sfeer se of silinder se volume lees effens onder die presiese een: 'n kleiner toleransie kom nader. 'n Boolean wat nie netjies gedoen kan word nie (die soliedes deel niks, 'n buitelyn sou homself kruis), word in woorde geweier en verander niks. Een Boolean is een stap van die paneel se **Ontdoen**.

In die **Soliede**-lys, **Ontgroepeer** hou die vlakke as gewone oppervlaktes; die bak verwyder die soliede en sy vlakke.

**Voeg by die model** (in die **Soliede**-lys) plaas 'n afskrif van die soliede in die model as een geslote groep, met sy vlakke as driehoeke binne 0,05 mm, in een stap van die model se Ontdoen. Dit werk dan met die model se eie **Unie**, **Trek af** en **Snyding**, druk-en-trek en die 3D-druktoets; die presiese soliede bly in die paneel.

## Afrondings en verdikking

**Afronding tussen vlakke** rond die rand af waar twee vlakke van een soliede ontmoet: kies die twee vlakke (in die aansig, of met **Kies** in die lys), tik die **radius** en, vir 'n radius wat langs die rand verander, die **radius aan die einde** (0 hou een radius). 'n Bal van daardie radius word langs die rand gerol en raak albei vlakke; die afronding is die presiese sirkelboog wat dit op elke punt laat, aaneengevoeg in een oppervlak, en die twee vlakke word gesnoei waar die bal hulle raak. 'n Buitenste rand verloor materiaal, 'n binnehoek kry dit. Die resultaatlyn gee wat gemeet is: hoe ver die afrondingsoppervlak van die rollende bal is tussen die punte waaruit dit gebou is (punte word bygevoeg totdat dit binne 'n kwart van die toleransie is), die grootste hoek tussen die afronding en elke vlak langs die raaklyne, en dieselfde getalle as 'n Unie. 'n Radius wat nie pas nie (die bal sou 'n vlak verlaat, of 'n vlak buig skerper as die radius), word geweier en die vlak word genoem; niks verander nie.

**Rond verskeie rande af** rond baie rande in een stap af: kies die twee vlakke van die eerste rand, dan die twee vlakke van die volgende, en so voort (een vlak kan in verskeie pare wees, byvoorbeeld die boonste vlak van 'n boks in vier van hulle); alle rande kry die radius wat jy tik. Elke afronding word op die soliede soos dit was uitgewerk, dan word hulle een na die ander gesny, so die volgorde maak nie saak nie. Waar twee afgeronde rande by 'n hoek ontmoet waarvan die ander rande skerp bly, loop die twee afrondings in mekaar langs hul snykurwe (’n vou). Waar drie afgeronde buitenste rande van drie plat vlakke wat aan mekaar reghoekig is, met een radius ontmoet, is die hoek een **sfeerlap** wat aan al drie afrondings raak (ontmerk **Hoeke** om die hoek met die vou te kry); 'n rand moet minstens twee keer die radius lank wees waar albei punte sulke hoeke is. Die resultaatlyn sê hoeveel rande afgerond is en hoe die hoeke uitgekom het. Binnerande kan ook saam afgerond word, maar 'n resultaat wat nie weer sluit nie, word net gerapporteer (die lyn sê so), so kontroleer dit.

**Verdik tot 'n soliede** gee 'n oppervlak 'n dikte: kies dit, tik die **dikte**, en merk **Ander kant** om dit die ander rigting in te laat groei. Die verskuifde vlak word by die oppervlak gepas en daarteen gemeet (die resultaatlyn gee die grootste verskil van die dikte); mure volg elke rand en elke snoeibuitelyn. As die oppervlak skerper as die dikte aan daardie kant buig, of 'n ander deel daarvan nader as die dikte lê, word dit geweier, met die oppervlak en die plek genoem; niks verander nie.

## Ontdoen, die lêer, STEP en IGES

Die paneel het sy eie **Ontdoen** en **Herdoen** (een stap per opdrag). Die oppervlaktes word saam met die model in die `.modelcraft`-lêer gestoor; hulle is nie deel van die model se eie ontdoen nie, soos die lêer se materiale.

**STEP…** (AP242) en **IGES…** stoor die kurwes en oppervlaktes presies soos hulle is (B-spline-kurwes en -oppervlaktes, niks in driehoeke omgeskakel nie). Elke oppervlak is sy eie vlak, met sy snoeiing; 'n soliede word as een geslote dop geskryf, elke rand gedeel deur sy twee vlakke soos ander CAD-programme verwag (die statuslyn sê hoeveel soliedes so uitgegaan het). In IGES is dieselfde soliede een manifold soliede B-rep (entiteit 186 oor geslote dop 514, vlakke 510, lusse 508, een randlys 504 en een hoeklys 502); 'n soliede waarvan die vlakke nie rand vir rand pas nie, word as afsonderlike vlakke geskryf, en die lyn sê so. **Invoer…** lees so 'n soliede terug as 'n soliede, uit STEP en uit IGES. Dit lees kurwes en oppervlaktes wat so geskryf is, en `.ccnurbs`-lappestelle; ander programme se STEP-soliedes open met Lêer › Invoer as maas.

## Oppervlaktes uit 'n skandering (omgekeerde ingenieurswese)

Kies die geskandeerde maas in die model (niks gekies beteken alles wat getoon word), maak **Oppervlaktes** oop, en kies in die groep **Skandering** **Pas oppervlaktes by die skandering**. Die gereedskap soek na **vlakke**, **silinders**, **sfere** en **keëls** (die presiese oppervlaktes waaruit 'n gemasjineerde deel bestaan; elke ry wys die radius of halwe hoek wat dit gevind het), vind **afrondings** (afgeronde rande en hoeke: 'n klein silinder of sfeer wat raak in twee of meer ander vlakke, gewys met sy radius en die vlakke wat dit verbind), **randafrondings** (’n torus: die afgeronde rand waar 'n plat vlak 'n silinder of keël ontmoet, gewys met sy radius en sy ringradius) en **veranderlike afrondings** (’n afgeronde rand waarvan die radius langs dit verander, gewys met die radius aan elke einde), pas **een vrye-vorm-lap** op 'n gladde, sag gebuigde stuk, en snoei elke vlak tot die buitelyn van die deel van die skandering waaruit dit kom, sodat gate en hoeke bly. Opsies: die **toleransie** (hoe ver, in mm, 'n skanderpunt van 'n vlak of silinder mag wees en nog daartoe behoort, en die teiken vir 'n vrye-vorm-lap), die **kleinste stuk** ('n aandeel van die oppervlakte) en die **meeste vlakke**. Dieselfde skandering en opsies gee altyd dieselfde vlakke.

Die resultaat is 'n tabel, een ry per vlak: sy soort, hoeveel driehoeke dit van kom, en die fout **gemeet van die skandering na die vlak** (rms, die grootste, en die aandeel punte binne die toleransie). Die gemete punte is die skandering se hoekpunte en die middel van elke driehoek. Die fout word nie andersom gemeet nie (vlak na skandering), so 'n vlak wat verder as die skandering reik, sou nie wys nie. Die nota onder die tabel sê ook hoeveel van die oppervlakte te klein was om te pas. In die aansig word die skanderpunte gekleur volgens hul **afwykingskaart**: blou op die vlak, groen halfpad na die toleransie, rooi by die toleransie of meer (ontmerk **Wys die afwykingskaart** om dit te versteek). Stukke wat op hulself terugvou (’n geslote buis met vrye-vorm-lappe, byvoorbeeld) word as nie gepas gelys, en nooit in een oppervlak gedwing nie.

**Stik die oppervlaktes tot 'n soliede** naai elke getoonde oppervlak wat nog nie in 'n soliede is nie, in een geslote soliede. Skandervlakke raak mekaar slegs binne die skandering se eie fout, so dit probeer die kleinste verbindingsafstand wat sluit (nooit meer as die **stikafstand** wat jy stel nie) en weier in woorde as die vlakke nie sluit nie. Dit vul nooit 'n gaping met 'n lap nie. 'n Boks met afgeronde rande stik as sy afrondings as eie vlakke gevind is; die verbindingsafstand wat gesluit het, is in die resultaat. Die soliede werk dan met Unie, Trek af, Snyding en **Voeg by die model**.

Wat dit nie doen nie: 'n **randafronding** (’n torus) word slegs rondom die as van 'n reeds gevonde silinder of keël gesoek, en 'n **veranderlike afronding** slegs langs 'n redelik reguit rand (sy snitte word vierkant na een rigting gesny); elders kom hulle uit as vrye-vorm-lappe wanneer dit glad genoeg is, en word andersins weggelaat; sfere, keëls en afrondings word deur lukrake steekproewe gevind, so 'n baie klein een (’n paar driehoeke) kan gemis word; die afwykingskaart wys die afstand van die skandering na die vlakke, nie andersom nie; baie groot skanderings (meer as 300 000 driehoeke) word hier geweier. Vlakke van 'n volle-draai-silinder word rondom gate gesny, met die naat waar geen gat is nie. Kontroleer elke vlak teen jou skandering voordat jy daarop staatmaak.

## Nog nie gebou nie

Rande afrond wat in 'n hoek van geboë vlakke of met verskillende radiusse ontmoet (’n hoekoorgang), 'n afronding tussen vlakke wat nie ontmoet nie, 'n binnenafronding wat op 'n skuins of geboë vlak eindig, en Booleane en afrondings wat op die oppervlaktes sonder driehoeke bereken word (hier werk die soliede-enjin op driehoeke binne die toleransie, en elke punt word dan terug op die presiese oppervlaktes gesit).
