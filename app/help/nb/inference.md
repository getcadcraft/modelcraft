---
title: Innretting og fangst
summary: Hva de fargede markørene betyr, hvilken fangst som vinner, og hvordan du låser en retning med piltastene eller Shift.
keywords: innretting, fangst, fang, endepunkt, midtpunkt, flatesenter, senter, på kant, på flate, akse, rød akse, grønn akse, blå akse, parallell, vinkelrett, lås, shift, objektfang
from: e78984e9
---

Mens et tegne- eller redigeringsverktøy arbeider, ser ModelCraft på hva som er under pekeren og fanger til det mest nyttige i nærheten. En markør viser hva den fant, og spissen nederst til venstre navngir det.

## Markører og spisser

| Spiss | Markør | Fanger til |
|---|---|---|
| Endepunkt | Grønn sirkel | Enden av en kant |
| Midtpunkt | Cyan sirkel | Midten av en kant |
| Flatesenter | Blå sirkel | Midten av flaten under pekeren |
| Hjelpepunkt | Grå | Et hjelpepunkt igjen av målebåndet |
| Origo | Okker | Der de røde, grønne og blå aksene møtes |
| På rød akse / På grønn akse / På blå akse | En linje i den fargen | En linje fra startpunktet ditt i den retningen |
| Parallell med kant / Vinkelrett på kant | Magenta linje | En linje fra startpunktet ditt parallelt eller vinkelrett på den huskede kanten (se under) |
| Låst | Magenta linje | En retning du låste med en piltast eller {{key:Shift}} |
| På kant | Rød firkant | Hvor som helst langs en kant |
| På hjelpelinje | Grå | Hvor som helst langs en hjelpelinje |
| På flate | Blå diamant | Hvor som helst på en flate |
| På plan | ingen | Planet du startet på, når pekeren er over tomt rom |
| På bakken | ingen | Bakken (det røde-grønne planet), når ingenting annet er der |

Når en aksellinje fra startpunktet ditt krysser en kant eller hjelpelinje, fanger ModelCraft til krysningen, og spissen nevner begge, for eksempel "På rød akse, på kant".

## Hvilken fangst som vinner

1. **Punkter** innen omtrent 12 piksler: endepunkter først, deretter hjelpepunkter, midtpunkter, flatesenteret under pekeren og origo.
2. **Retninger** fra startpunktet: de røde, grønne og blå aksene, og parallelt eller vinkelrett på den huskede kanten.
3. **På en kant** eller en hjelpelinje.
4. **På en flate.**
5. **Tegneplanet**, eller bakken.

Ting skjult bak en flate fanges aldri. Roter visningen slik at du ser punktet du vil ha.

## Tegn på en flate fra et punkt

Et {{ui:Rektangel}}, {{ui:Sirkel}} eller {{ui:Mangekant}} startet på et hjørne, et midtpunkt, en kant eller flatesenteret tegnes **i planet til flaten under pekeren**, og skjærer den flaten. En kant tilhører to flater, så siden av kanten pekeren er på avgjør: for å tegne på enden av en lang boks, start fra midten av en av kantene hennes med pekeren rett innenfor endeflaten.

## Parallell og vinkelrett

ModelCraft husker den **siste kanten pekeren passerte over før ditt første klikk**. Å starte på et hjørne eller på en kant regnes som å ha passert over den kanten. Når verktøyet arbeider, erstatter andre kanter du holder over det ikke.

For å tegne en linje parallelt med en eksisterende kant:

1. Trykk {{key:L}} og hold pekeren over kanten du vil etterligne.
2. Flytt til startpunktet, uten å krysse andre kanter underveis hvis du kan, og klikk.
3. Flytt i retningen parallelt med den kanten. Linjen blir magenta, og spissen sier "Parallell med kant". Vinkelrett virker på samme måte, innenfor planet du tegner på.

Hvis feil kant ble husket, trykk {{key:Esc}}, hold pekeren over riktig kant, og start på nytt.

## Lås en retning

Etter første klikk på et verktøy kan du holde neste punkt på én linje:

| Tast | Låser til |
|---|---|
| {{key:Right}} | Den røde aksen |
| {{key:Left}} | Den grønne aksen |
| {{key:Up}} | Den blå aksen (rett opp) |
| {{key:Down}} | Parallelt med den huskede kanten (se over) |

Trykk samme piltast igjen for å låse opp. Statuslinjen sier "Låst til den røde aksen. Trykk samme piltast for å låse opp."

Mens den er låst, glir punktet langs linjen mot der pekeren er, og står fortsatt på linje med punkter du holder over: hold over hjørnet av en annen boks for å tegne en linje langs rød akkurat så langt som til det hjørnet.

**{{key:Shift}}** låser retningen du er fanget til akkurat nå (en akse, eller parallell), så lenge du holder den inne. Slipp for å låse opp.

Låsing fungerer i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Sirkel}}, {{ui:Mangekant}}, {{ui:Flytt}}, {{ui:Skaler}} og {{ui:Målebånd}}. Før første klikk roterer piltastene visningen i stedet.

## Inne i en gruppe

Mens du redigerer inne i en gruppe eller komponent, er aksene gruppens egne akser (de beveger seg med den, og dreier med den hvis den var rotert). Fangst finner fortsatt punkter og kanter utenfor gruppen, slik at du kan justere ting mot resten av modellen.
