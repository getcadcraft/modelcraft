---
title: Maak 'n model gereed vir 3D-druk
summary: Kontroleer dat 'n model geslote is en die regte kant na buite wys, sien sy grootte, basis en oorhange, herstel wat verkeerd is, en laai dit af as STL of 3MF vir jou snyprogram.
keywords: 3d-druk, drukker, druk, snyprogram, stl, 3mf, waterdig, geslote, manifold, soliede, gate, binnste buite, oorhang, steunsels, basis, bed, millimeter, uitvoer, herstel, reparasie, hol, bedgrootte, beginner, muurdikte, druk-gereedskap
from: 948e19af
---

'n 3D-drukker se snyprogram het 'n geslote vorm nodig: geen gate nie, elke vlak wys na buite, en niks gaan deur homself nie. {{ui:Voer uit}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}} soek presies daarna voordat jy die lêer aflaai.

## Kontroleer en laai af

1. Kies wat jy wil druk: een of meer groepe of komponente, of 'n paar vlakke. Met niks gekies nie, druk alles wat getoon word.
2. Klik {{ui:Voer uit}} in die {{ui:Lêer}}-groep, dan {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}.

   Die dialoog begin met een reël: "Gereed om te druk", hoeveel dinge om te herstel voor druk, of hoeveel om eers na te kyk. Elke probleem het drie dele: wat verkeerd is, waarom dit saak maak, en wat om te doen. Dan volg die grootte in millimeter, die volume, die aantal driehoeke en jou drukkerbed.

3. As die dialoog dinge lys om te herstel, klik {{ui:Herstel wat herstel kan word}} (sien hieronder). Die kontrole loop weer vanself.
4. Klik {{ui:Laai 3MF af}} of {{ui:Laai STL af}}.

Wat druk, is wat jy sien: versteekte vlakke, versteekte groepe en komponente, en alles op 'n versteekte etiket word weggelaat. Groottes is altyd in millimeter, die eenheid wat snyprogramme verwag, wat ook al die eenheid is wat die model wys.

:::tip
Verkies 3MF as jou snyprogram dit lees: dit hou die kleure en die eenhede. STL het geen van die twee nie, en snyprogramme neem millimeter aan.
:::

## Wat die kontrole soek

Hierdie stop 'n druk of bederf dit, en laat die dialoog "Nie gereed om te druk nie" sê:

| Probleem | Wat dit beteken | Wat om te doen |
|---|---|---|
| 'n Vlak aan net een kant | 'n Gat: 'n rand het 'n vlak aan die een kant en niks aan die ander nie | Teken die ontbrekende vlak (’n lyn oor die gaping sluit dit dikwels), of gebruik {{ui:Herstel}} (hieronder) |
| Gedeel deur drie of meer vlakke | Vlakke ontmoet in 'n vin of 'n muur binne 'n soliede | Vee die binnevlak uit |
| Vlakke wys in teenoorgestelde rigtings | Sommige vlakke wys in, sommige uit | Kies die vlakke wat in wys en klik {{ui:Keer vlak om}} in {{ui:Entiteitinligting}} |
| Binnste buite | 'n Hele geslote deel wys na binne | Kies sy vlakke en keer hulle om |
| Gaan deur homself | Een deel vou deur homself | {{ui:Redigeer}} › {{ui:Meer}} › {{ui:Snyding met model}}, dan vee uit wat binne is. Sien [Snyding van vlakke](topic:intersect) |

Dit is waarskuwings: die model druk, maar kyk eers.

- **Afsonderlike dele oorvleuel**, of **ontmoet vlak-na-vlak**: snyprogramme voeg hulle gewoonlik in een saam. Vir 'n skoner lêer, voeg hulle saam met {{ui:Soliede}} › {{ui:Unie}}. Sien [Soliede-gereedskap](topic:solids).
- **Niks lê plat aan die onderkant nie**: draai die model sodat 'n vlak op die bed rus, anders voeg die snyprogram steunsels of 'n vlot by.
- **Hang meer as 45° uit die regte stand**: daardie vlakke benodig steun. Die dialoog sê hoeveel van die oppervlak dit is.
- **Onder 1 mm breed**: waarskynlik in die verkeerde eenheid gemodelleer. Kontroleer die eenheid in die statusbalk.

'n Hol deel (’n geslote dop binne 'n ander) is goed: sy vlakke wys in die holte, en sy volume word weggeneem.

## Herstel die probleme

Onder **Waar die probleme is** noem die dialoog elke groep of komponent wat iets verkeerd het (los vlakke wat nie in 'n groep is nie, word gelys as "Vlakke nie in 'n groep nie"), met wat daarin verkeerd is. 'n Komponent wat verskeie kere geplaas is, word een keer gelys: om dit te herstel, herstel elke afskrif.

- {{ui:Wys}} maak daardie groep oop en kies die rande en vlakke wat verkeerd is, sodat hulle uitgelig wys.
- {{ui:Herstel wat herstel kan word}} herstel almal op een slag: dit sluit gate waarvan die rande plat lê, verwyder vlakke binne die vorm en los rande, en draai vlakke die regte kant uit. Dit is een stap: {{key:Mod+Z}} ontdoen dit. Die kontrole loop dan weer en wys wat oorbly.

Wat dit nie kan herstel nie (’n gat waarvan die rande nie plat lê nie, 'n deel wat deur homself gaan), bly in die lys met wat om met die hand te doen. {{ui:Herstel}} onder **Druk-gereedskap** gaan verder: dit sluit gate wat nie plat is nie, verwyder los stukke en dubbele vlakke, en lys elke herstel. Sien [Steunsels, muurdikte, hol maak en herstel](topic:print-tools#repair). Jy kan ook een groep op 'n slag herstel: kies dit, gebruik dan {{ui:Wys probleme}} en {{ui:Herstel}} in {{ui:Entiteitinligting}}. Sien [Soliede-gereedskap](topic:solids).

## 'n Holle deel

{{ui:Hol maak}} onder **Druk-gereedskap** maak 'n deel hol tot die muurdikte wat jy gee, met dreinerings waar jy klik. Sien [Hol maak](topic:print-tools#hollow).

Jy kan ook die holte self teken: 'n geslote groep binne die deel, wat dit nie raak nie, met al sy vlakke omgekeer sodat hulle in die holte wys. Die kontrole tel dit as 'n holte en neem sy volume weg; dit word nie as iets om te herstel gelys nie.

## Jou drukker se bed

Kies jou drukker se bedgrootte in {{ui:Instellings}} › {{ui:ModelCraft}} › {{ui:3D-drukker se bed}}. Die kontrole waarsku dan wanneer die model groter as die bed is, na enige kant gedraai. Sien [Instellings](topic:settings#3d-printer-bed).

## Druk-gereedskap

Onder die dialoog se bevindinge open **Druk-gereedskap** {{ui:Steunsels-voorskou}} (waar steunsels heen gaan en ongeveer hoeveel), {{ui:Muurdikte}} (mure wat te dun is om te druk), {{ui:Hol maak}} en {{ui:Herstel}}. Sien [Steunsels, muurdikte, hol maak en herstel](topic:print-tools). {{ui:Verdeel vir druk}} sny 'n model wat te groot is vir die bed in stukke met verbindings en genommerde verbindings: sien [Verdeel 'n groot model vir druk](topic:print-split).

## Nie gekontroleer nie

Die kontrole sny nie: klein besonderhede wat jou spuitmond nie kan teken nie, en die werklike steunsels, is jou snyprogram s'n. Sien [Nog nie gebou nie](topic:not-built-yet#3d-printing).
