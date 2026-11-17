---
title: Plaas dinge op die drukbed en stuur hulle na 'n drukker
summary: Voeg Biblioteek-items of jou eie model by jou drukker se bed, rangskik hulle, kyk deur die gesnyde lae, en stuur die druk oor USB of die netwerk, of stoor die G-code, sonder om eers 'n STL uit te voer.
keywords: druk-fase, 3d-druk, drukker, bed, stuur na 3d-drukker, snyprogram, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteek, rangskik, pas alles, laagvoorskou, vulling, steunsels, filament, pla, petg, byvoeging, 3d-druk-byvoeging
from: abcf5d7e
---

Die {{ui:Druk-fase}} lê dinge op jou drukker se bed uit, sny hulle en stuur hulle na die drukker. Jy voer nie eers 'n lêer uit nie. Dit behoort aan die 3D-druk-byvoeging, wat standaard aan is.

:::note
Niks is nog met hierdie op 'n werklike drukker gedruk nie. Die snyprogram is nuut: hou die eerste lae van jou eerste druk dop, en gebruik die laagvoorskou voordat jy stuur.
:::

## Wat jy sal doen

Plaas 'n model op die bed, kontroleer dat dit pas, kyk na die gesnyde lae, en stuur dit na 'n drukker of stoor die G-code.

## Stappe

1. Klik {{ui:Druk-fase}} op die nutsbalk. 'n Kaart maak oor die aansig oop en 'n gestreepte buitelyn wys jou bed.
2. Onder **Voeg by uit die Biblioteek**, tik 'n naam in die soekkassie, druk {{ui:Soek}} en druk {{ui:Voeg by}} op 'n resultaat. Die item beland op die bed op volle grootte, of afgeskaal om te pas. Alles wat jy reeds geteken of ingevoer het en in die aansig kan sien, is ook op die bed.
3. Onder **Op die bed**, kontroleer die grootte van elke item. 'n Item wat as **Buite die bed** gemerk is, moet geskuif word. Skuif, draai en skaal dinge in die aansig met die gewone gereedskap.
4. Druk {{ui:Rangskik op die bed}} om die items uit te sprei, of {{ui:Pas alles op die bed}} om hulle af te skaal totdat hulle pas.
5. Onder **Jou drukker**, kies die **Bed**-grootte of een van die drukkerprofiele.
6. Onder **Druk-instellings**, kies die **Materiaal**, die **Gehalte** en die **Vulling %**, en merk **Voeg steunsels onder oorhange by** as die vorm dit nodig het.
7. Druk {{ui:Voorskou lae}} en skuif die **Laag**-skuifbalk om deur die gesnyde lae te kyk. As jy die fase of die instellings daarna verander, druk {{ui:Voorskou lae}} weer.
8. Onder **Verbinding**, kies {{ui:USB-kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} of {{ui:PrusaLink}}. Vir USB druk {{ui:Koppel}}. Vir 'n netwerkdrukker tik sy **Adres** (en die **API-sleutel** as dit vra), en druk dan {{ui:Toets die verbinding}}.
9. Druk {{ui:Stuur na 3D-drukker}}. Die kaart vra of die bed skoon is en die regte materiaal gelaai is, en wys die tyd, die materiaal en die temperature. Bevestig om te stuur.

Jy kry 'n boodskap dat die drukker begin. {{ui:Stop die druk}} skakel die verwarmers, waaier en motors af. As jy net 'n lêer wil hê, druk {{ui:Stoor eerder die G-code}}.

## Aantekeninge

- USB benodig Chrome of Edge op 'n rekenaar, en die bladsy moet oop bly totdat die druk klaar is. Om dit toe te maak, stop die stroom.
- 'n Netwerkdrukker moet hierdie werf toelaat (in Moonraker voeg dit by `cors_domains`; in OctoPrint skakel CORS aan en kopieer 'n API-sleutel). Jou blaaier mag vra om toestelle op jou netwerk te bereik.
- Niks koppel of stuur sonder jou klik nie.
- Die lys van snyprogramme is onder **Snyprogram**. {{ui:CadCraft basies (ingesluit, vinnigste)}} is ingebou. Kiri:Moto, PrusaSlicer, OrcaSlicer en die Bambu Lab P2S is elk hul eie byvoegings wat jy op die kaart of onder {{ui:Instellings}} › {{ui:Byvoegings}} aanskakel. PrusaSlicer en OrcaSlicer gebruik jou eie kopie en werk vanaf CadCraft Studio op 'n rekenaar.
- Stukke wat nie geslote soliede voorwerpe is nie, word uitgelaat, en die kaart sê vir jou hoeveel van die vorm dit is.
- Vir harsdrukkers, sien [Sny vir 'n harsdrukker](topic:resin-printing). Om 'n model eers na te gaan of te herstel, sien [Steunsels, muurdikte, hol maak en herstel](topic:print-tools).
