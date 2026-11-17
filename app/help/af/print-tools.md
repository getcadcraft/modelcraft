---
title: Steunsels, muurdikte, hol maak en herstel
summary: Sien waar 'n druk steunsels nodig het en ongeveer hoeveel, vind mure wat te dun is om te druk, maak 'n deel hol tot 'n muurdikte met dreineergate, en herstel 'n netwerk met elke herstelling gelys.
keywords: 3d-druk, steunsels, steunselvoorskou, oorhang, boomsteunsels, kolomsteunsels, muurdikte, dun mure, te dun, spuitmond, hol maak, dop, dreineergat, hars, herstel, netwerk, non-manifold, omgedraaide vlakke, gate, klein skille, self-snyding, oorvleueling, saamvoeg
from: 286bde26
---

Vier gereedskapstukke om 'n model gereed te maak vir 'n 3D-drukker. Open {{ui:Voer uit}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}; die dialoog se **Drukgereedskap**-reël het {{ui:Voorskou van steunsels}}, {{ui:Muurdikte}}, {{ui:Hol maak}} en {{ui:Herstel}}. Elk open as 'n kaart oor die aansig; {{ui:Maak toe}} (die kruisie) neem dit en sy merkings weg. Een kaart wys op 'n slag.

Elke gereedskapstuk werk op wat gedruk word: die seleksie, of alles wat gewys word as niks gekies is nie. {{ui:Hol maak}} en {{ui:Herstel}} benodig een groep, komponent of netwerk gekies, omdat hulle dit verander.

## Voorskou van steunsels

Die vlakke wat meer as die **oorhanghoek** vanaf regop uitleun, word rooi gekleur, en eenvoudige steunsels word vanaf hulle (oranje) af na die bed geteken, of na die deel van die model onder hulle.

- **Oorhanghoek**: 45° is wat die meeste drukkers sonder steun hanteer. Verhoog dit vir 'n drukker wat goed oorbrug.
- **Kolomme**: 'n reguit kolom elke 3 mm onder elke oorhang. Die beraming tel hulle as 'n steunpatroon van 15%.
- **Boom**: naby punte voeg by een stam onder hul middel; geen tak leun meer as 45° nie. Bome neem gewoonlik minder materiaal en raak die bed op minder plekke aan.

Die kaart sê hoeveel oppervlak steun nodig het, hoeveel steunpunte daar is en ongeveer hoeveel materiaal hulle neem. Steunsels wat op die model staan (nie op die bed nie) word getel: hulle laat merkings daar. Met 'n drukkerbed wat in {{ui:Instellings}} gekies is, word die bed onder die model geteken.

:::note
Dit is 'n voorskou, nie 'n snyprogram nie: jou snyprogram besluit die werklike steunsels. By 'n baie groot oorhang word die steunpunte wyer versprei sodat die voorskou vinnig bly; die kaart sê so.
:::

## Muurdikte

Elke vlak word reguit deur die soliede voorwerp na die ander kant gemeet. Mure onder die **dunste muur wat toegelaat word** is rooi, en mure onder anderhalf keer dit is oranje: hulle druk, maar kan swak uitkom.

Die dun gebiede word gelys, die dunste eerste, met hoe dun en hoe groot elkeen is. {{ui:Wys}} draai die kamera daarheen.

'n Drukker kan nie 'n muur dunner as ongeveer twee breedtes van sy spuitmond maak nie: 0.8 mm vir die algemene 0.4 mm spuitmond (die beginpunt). Harsdrukkers hanteer minder; kyk na jou drukker se gids.

By 'n baie groot model werp slegs sommige vlakke 'n straal, en die ander neem hul bure se dikte; die kaart sê hoeveel gemeet is.

## Hol maak

Hol maak hou die buitekant soos dit is en haal die binnekant uit, en laat mure so dik as wat jy vra. Harsdrukke gebruik minder hars en trek minder aan die bouplaat; filamentdrukke gebruik minder plastiek as wat vulling sou gebruik.

1. Kies die groep, komponent of netwerk, en maak dan {{ui:Hol maak}} oop.
2. Stel die **muur** (2 mm om mee te begin) en hoe wyd die **dreineergate** is.
3. Vir 'n harsdruk, klik {{ui:Plaas 'n dreineergat}}, en klik dan op die model se buitekant waar dit moet gaan: laag af, naby die bouplaat, sodat die vloeibare hars uitloop. Plaas soveel as wat jy nodig het; elk word as 'n blou sirkel gewys en word gelys met {{ui:Verwyder}}.
4. {{ui:Voorskou}} sê hoeveel die hol maak uithaal.
5. {{ui:Maak dit hol}} maak die verandering: een stap wat {{key:Mod+Z}} ontdoen.

Die resultaat is een geslote soliede voorwerp wat die 3D-druktoets aanvaar: ModelCraft kyk eers daarna en verander niks as dit nie sou slaag nie. Waar die model dunner is as twee mure, bly dit soliede. Die resultaat is 'n groep waarvan die plat sye enkel vlakke is, sodat jy dit met {{ui:Stoot/trek}} kan voortgaan modelleer; 'n geboë deel wat op die fyn rooster hol gemaak is, het gewoonlik te veel vlakke daarvoor en word eerder 'n netwerk, en die statuslyn sê watter een.

:::tip
By die meeste vorms is die binnekant die buitekant wat presies met die muur ingeskuif is. Waar hoeke of dun dele dit onmoontlik maak, volg ModelCraft eerder die buitekant op die muur se afstand op 'n fyn rooster; die kaart sê dan hoe na dit is (binne 'n breukdeel van 'n millimeter).
:::

## Herstel

{{ui:Herstel}} kyk na die gekose deel soos 'n drukker se snyprogram sal, herstel wat dit veilig kan herstel, en lys elke herstelling:

| Dit herstel | Wat dit beteken |
|---|---|
| Driehoeke sonder oppervlakte | uitgelaat |
| 'n Driehoek twee keer geteken | een kopie behou; 'n vlak wat rug-aan-rug met homself geteken is (sonder dikte), word verwyder |
| Los stukke onder 0.5 mm | verwyder |
| Driehoeke wat die verkeerde kant toe wys | gedraai om by hul bure te pas |
| Gate, plat of nie | toegemaak met 'n waaier nuwe driehoeke vanaf die middel van elke gat |
| 'n Stuk binnekant uit | na buite gedraai ('n holte binne 'n ander stuk word gelaat soos dit is: dit is bedoel om na binne te wys) |

{{ui:Maak die veilige een reg}} maak almal in een stap wat {{key:Mod+Z}} ontdoen, en die statuslyn lys elke herstelling. Die herstelde deel word 'n groep waarvan die plat sye enkel vlakke is. As dit steeds nie toesluit nie (iets onder **Oorgelaat vir jou** bly), of dit sou te veel vlakke vir 'n groep hê, word dit eerder 'n netwerk: sy vlakke bly driehoeke, en plat sye lyk steeds plat. Die statuslyn sê watter een. {{ui:Voeg oorvleuelende dele saam}} werk op dieselfde manier.

Wat nie veilig herstel kan word nie, word onder **Oorgelaat vir jou** gelys en in pers in die aansig gemerk, met {{ui:Wys}}:

- **Rante waar drie of meer vlakke ontmoet**: besluit watter vlak hoort en vee die ander uit.
- **'n Stuk wat deur homself gaan**: skuif of teken daardie deel weer. Sien [Sny vlakke](topic:intersect).
- **Gate te groot of te verstrengel om toe te maak**: teken vlakke oor hulle.
- **Afsonderlike stukke wat oorvleuel**: snyprogramme voeg hulle tog saam. {{ui:Voeg oorvleuelende dele saam}} maak hulle een geslote liggaam (dit bou die vlakke weer op waar hulle ontmoet, so dit is 'n afsonderlike knoppie, en word nooit vir jou gedoen nie).

Vir stoot/trek-groepe kan jy ook een op 'n slag regmaak in {{ui:Entiteitinligting}} › {{ui:Wys probleme}} / {{ui:Herstel}}, wat die vlakke behou wat jy geteken het. Sien [Soliede gereedskap](topic:solids).

Verwant: [Maak 'n model gereed vir 3D-druk](topic:print-3d) · [Die Beginner-styl](topic:beginner) · [Nog nie gebou nie](topic:not-built-yet#3d-printing)
