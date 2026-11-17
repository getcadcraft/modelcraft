---
title: Wysigers op 'n maas, 'n groep of 'n komponent
summary: Skaal, spieël, skikking, gladmaak, skuins, sny en buig 'n maas sonder om dit te verander, en herhaal of skaal 'n groep of komponent met dieselfde stapel; maak dit permanent wanneer jy gereed is.
keywords: wysiger, wysigers, stapel, groep, komponent, skaal, bak, wysig bron, nie-destruktief, spieël, skikking, radiale skikking, onderverdeling, onderverdelingsoppervlak, gladmaak, skuins, verdik, dikte, boolean, sny, verplaas, geraas, sweislas, dunmaak, vereenvoudig, latwerk, kooi, kurwe-vervorming, buig, krimpom, pas toe
from: dd5ec1cb
---

'n **Wysiger** verander wat 'n maas wys, sonder om die maas self te verander. Spieël een helfte van 'n onderdeel en modelleer net daardie helfte; rond 'n boks af met 'n onderverdelingsoppervlak en hou aan om die boks te wysig. Wysigers sit in 'n **stapel** en werk in volgorde, van bo na onder. Wat jy sien, uitvoer, druk en weergee, is die maas met elke wysiger wat aan is.

## Voeg 'n wysiger by

1. Kies 'n maas. In die Model-werkruimte is sy **Wysigers**-afdeling in {{ui:Entiteitinligting}}; in die Maas-werkruimte is dit in die paneel aan die regterkant.
2. Kies een uit {{ui:Voeg 'n wysiger by…}}. Dit gaan na onder die stapel.
3. Verander sy instellings onder sy naam. Lengtes neem dieselfde waardes as die Waardeblokkie, so `600mm`, `2'6"` en `(6m)/4` werk almal.

Elke verandering is een ontdoen-stap: {{key:Mod+Z}} neem dit terug.

## Die knoppies op elke wysiger

- Die blokkie skakel dit aan of af.
- Die skermknoppie wys of verberg dit in die aansig (dit bly in die stapel).
- Die kameraknoppie wys of verberg dit in weergegee prente en video's, sodat 'n wysiger net vir weergawes (of net vir die aansig) kan wees.
- Die pyltjies skuif dit op of af in die stapel. Volgorde maak saak: spieël en dan onderverdeel gee 'n gladde naat, onderverdeel en dan spieël doen dit nie.
- {{ui:Pas toe}} maak die vorm deel van die maas: die wysigers bo hierdie een en hierdie een word op die maas self gedoen en verlaat die stapel. Dit is een ontdoen-stap.
- Die kruis verwyder dit.

## Die wysigers

| Wysiger | Wat dit doen |
| --- | --- |
| Skaal | Skaal om die voorwerp se oorsprong, 'n faktor vir rooi, groen en blou. Ook op 'n groep of komponent. |
| Spieël | Voeg 'n gespieëlde kopie by oor rooi, groen of blou deur die maas se oorsprong, en voeg die helftes saam waar hulle ontmoet. |
| Skikking | Kopieer in 'n lyn ('n stap van sy eie grootte maal die getalle wat jy gee, plus 'n vaste stap), rond 'n as, of langs 'n kurwe in die model. 'n Groep of komponent neem die lyn. |
| Onderverdelingsoppervlak | Gladmaak die maas deur Catmull-Clark-onderverdeling. Skerp rande bly geviou. Weergegee prente kan meer vlakke gebruik as die aansig. |
| Skuins | Rond elke rand af wat skerper is as die hoek wat jy gee. |
| Verdik | Gee 'n oppervlak 'n dikte en sluit die rand. |
| Boolean | Sny weg, voeg saam of hou die oorvleueling met 'n ander voorwerp in die model. Albei moet geslote soliede liggame wees. |
| Verplaas | Beweeg die oppervlak in of uit deur gladde geraas. Dieselfde saad gee elke keer dieselfde bulte. |
| Sweislas | Voeg hoekpunte saam wat nader as 'n afstand is. |
| Dunmaak | Hou 'n aandeel van die driehoeke, en verwyder die wat die vorm die minste verander. |
| Gladmaak | Ontspan die hoekpunte na hulle bure toe. |
| Latwerk | Buig die maas met 'n kooi: beweeg die kooi se punte en die maas volg. |
| Kurwe-vervorming | Buig die maas langs 'n kurwe in die model, langs rooi, groen of blou. |
| Krimpom | Beweeg elke hoekpunt na die naaste punt van 'n ander voorwerp. |

## Op 'n groep of 'n komponent

'n Groep of komponent kan ook 'n resep hou, so 'n lamp se kap kan 'n **Skaal** en 'n **Skikking** van een kap wees, en 'n verandering van 'n getal verander die lamp.

1. Kies 'n groep of komponent. In {{ui:Entiteitinligting}} lys sy **Wysigers**-afdeling die stapel (leeg aan die begin).
2. Kies {{ui:Skaal}} of {{ui:Skikking}} uit {{ui:Voeg 'n wysiger by…}}. Die groep word 'n komponent wat **die oorspronklike is, geplaas deur die stapel**. Die oorspronklike word bewaar: wysig dit en elke kopie volg dadelik.
3. Skaal neem 'n faktor vir rooi, groen en blou (`1, 1, 2` verdubbel die hoogte). Skikking neem die aantal kopieë, 'n stap as 'n deel van die resultaat se huidige grootte, en 'n ekstra stap in lengtes.

Die stapel loop van bo na onder op die oorspronklike se eie asse om sy oorsprong, so volgorde maak saak: 'n Skikking van drie kopieë 3 m uitmekaar, en dan Skaal 2 op rooi, sit die kopieë 6 m uitmekaar; Skaal eerste en dan die Skikking hou hulle 3 m uitmekaar. Die blokkie, die pyltjies en die kruis werk soos op 'n maas; die aansig- en kameraknoppies en Pas toe op een wysiger werk nie, omdat 'n stapel op 'n groep een ding is.

- {{ui:Wysig bron}} maak die oorspronklike op sy plek oop. Veranderinge wys in elke kopie; sluit dit en jy keer terug na waar jy was.
- {{ui:Bak wysigers}} maak die resultaat gewone rande en vlakke en haal die stapel weg, in een ontdoen-stap. Kopieë wat oorvleuel bly as aparte meetkunde: bak is nie 'n vereniging nie.
- Kopieë van die komponent deel die resep; {{ui:Maak uniek}} skei dit (die oorspronklike bly gedeel).
- Die stapel word in die lêer gestoor, saam gedra deur kopieer en plak en deur ontdoen, en Suiwer ongebruikte hou die oorspronklike. 'n Program wat nie wysigers ken nie, wys steeds die kopieë.
- Tot Bak kan die resultaat nie ingegaan, ontbind, herskaal of gerek word nie: dit sou by die volgende verandering herbou word. Elkeen sê dit.
- Die limiete is 32 wysigers en 1,000 kopieë. 'n Komponent wat gemaak is om te rek (Rek) en 'n stapel kan nog nie 'n definisie deel nie.

## Onderverdelingsoppervlak

Onderverdeling gladmaak 'n maas deur Catmull-Clark: elke vlak word vierhoekige vlakke, en elke vlak maak vier keer soveel. 'n Boks met twee of drie vlakke lyk alreeds soos 'n geronde vorm, en jy hou aan om die boks te wysig.

- **Vlakke in die aansig** stel hoe glad dit is.
- **Vlakke in weergegee prente** stel hoe glad weergegee prente en video's is; weergegee prente kan meer vlakke gebruik as die aansig.
- **Weergegee prente op die ware gladde oppervlak** plaas 'n weergegee maas se punte op die limietoppervlak waarna die vlakke neig, so selfs twee vlakke weergee so glad soos baie.
- **Vou** hou rande skerp: in die Maas-werkruimte kies rande en gebruik {{ui:Vou}} (1 bly skerp, 0.5 rond 'n bietjie af, 0 is glad). Sien [Wysig 'n maas](topic:mesh-edit).
- **Verlaag die vlak in die aansig op 'n groot maas:** wanneer die vlakke wat jy vra meer vlakke sou gee as wat hierdie rekenaar se aansig goed hanteer, wys die aansig 'n laer vlak en sê watter. {{ui:Pas toe}} gebruik altyd elke vlak. Hoeveel vlakke is in jou masjien se klas in {{ui:Instellings}} › Weergee › Jou masjien.
- Oop rande hou hulle hoeke en bly op hulle rande se lyn.

## Buig met 'n latwerk-kooi

1. Voeg 'n {{ui:Latwerk}}-wysiger by en druk {{ui:Voeg 'n latwerk-kooi om die mesh by}}. 'n Kooi van 3 × 3 × 3 punte verskyn om die maas, geteken as drade.
2. Maak die kooi oop in die Maas-werkruimte (dubbelklik dit) en skuif sy punte. Die maas volg gelyk.

:::tip
'n Kooi is 'n maas soos enige ander: verberg dit met sy merker wanneer jy klaar is.
:::

## Groot maasse

Klein stapels word dadelik bereken. 'n Groot een word op die agtergrond op elke kern van jou rekenaar bereken: die aansig wys aanhou die laaste resultaat totdat die nuwe een gereed is. Booleans laai die soliede modeleerder die eerste keer; die aansig sê so vir 'n oomblik.

## Wat wysigers nog nie doen nie

- Gewigte per hoekpunt ('n afval wat op die maas geverf is) vir Verplaas, Gladmaak en Krimpom.
- Wysigers anders as Skaal en die lineêre Skikking op stoot/trek-meetkunde (groepe en komponente): skakel dit eers om na 'n maas ({{ui:Skakel om na maas}}). Spieël, 'n ronde of kurwe-Skikking, Buig en Taps op groepe kom later.
