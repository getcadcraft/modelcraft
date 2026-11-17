---
title: Inferens og fangning
summary: Hvad de farvede markører betyder, hvilken fangning der vinder, og hvordan du låser en retning med piletasterne eller Shift.
keywords: inferens, fangning, endepunkt, midtpunkt, flades centrum, centrum, på kant, på flade, akse, rød akse, grøn akse, blå akse, parallel, vinkelret, lås, shift, objektfang
from: e78984e9
---

Mens et tegne- eller redigeringsværktøj arbejder, kigger ModelCraft på, hvad der er under markøren, og fanger det mest nyttige i nærheden. En markør viser, hvad den fandt, og teksten nederst til venstre navngiver det.

## Markører og tekster

| Tekst | Markør | Fanger |
|---|---|---|
| Endepunkt | Grøn cirkel | Enden af en kant |
| Midtpunkt | Cyan cirkel | Midten af en kant |
| Flades centrum | Blå cirkel | Midten af fladen under markøren |
| Hjælpepunkt | Grå | Et hjælpepunkt efterladt af målebåndet |
| Origo | Okker | Hvor de røde, grønne og blå akser mødes |
| På rød akse / På grøn akse / På blå akse | En linje i den farve | En linje fra dit startpunkt i den retning |
| Parallel med kant / Vinkelret på kant | Magenta linje | En linje fra dit startpunkt, parallel eller vinkelret på den huskede kant (se nedenfor) |
| Låst | Magenta linje | En retning, du har låst med en piletast eller {{key:Shift}} |
| På kant | Rød firkant | Hvor som helst langs en kant |
| På hjælpelinje | Grå | Hvor som helst langs en hjælpelinje |
| På flade | Blå rombe | Hvor som helst på en flade |
| På plan | ingen | Planet, du startede på, når markøren er over tomt rum |
| På jorden | ingen | Jorden (det røde-grønne plan), når intet andet er der |

Når en akselinje fra dit startpunkt krydser en kant eller hjælpelinje, fanger ModelCraft krydsningen, og teksten navngiver begge, f.eks. »På rød akse, på kant«.

## Hvilken fangning vinder

1. **Punkter** inden for cirka 12 pixels: først endepunkter, derefter hjælpepunkter, midtpunkter, flades centrum under markøren og origo.
2. **Retninger** fra startpunktet: de røde, grønne og blå akser og parallel eller vinkelret på den huskede kant.
3. **På en kant** eller en hjælpelinje.
4. **På en flade.**
5. **Tegneplanet** eller jorden.

Ting skjult bag en flade fanges aldrig. Brug {{ui:Orbit}}, så du kan se det punkt, du vil have.

## Tegn på en flade fra et punkt

Et {{ui:Rektangel}}, {{ui:Cirkel}} eller {{ui:Polygon}}, startet på et hjørne, et midtpunkt, en kant eller flademidten, tegnes **i planet for fladen under markøren** og skærer den flade. En kant hører til to flader, så den side af kanten, markøren er på, afgør: for at tegne på enden af en lang kasse, start fra midten af en af dens kanter med markøren lige inden for endefladen.

## Parallel og vinkelret

ModelCraft husker **den sidste kant, markøren passerede, før dit første klik**. At starte på et hjørne eller på en kant tæller som at have passeret den kant. Når værktøjet arbejder, erstatter andre kanter, du svæver over, ikke den.

For at tegne en linje parallel med en eksisterende kant:

1. Tryk {{key:L}} og før markøren hen over den kant, du vil matche.
2. Flyt til startpunktet, uden at krydse andre kanter undervejs, hvis du kan, og klik.
3. Flyt i retningen parallel med den kant. Linjen bliver magenta, og teksten siger »Parallel med kant«. Vinkelret virker på samme måde, inden for det plan, du tegner på.

Hvis den forkerte kant blev husket, tryk {{key:Esc}}, før markøren over den rigtige kant, og start forfra.

## Lås en retning

Efter det første klik med et værktøj kan du holde det næste punkt på én linje:

| Tast | Låser til |
|---|---|
| {{key:Right}} | Den røde akse |
| {{key:Left}} | Den grønne akse |
| {{key:Up}} | Den blå akse (lige op) |
| {{key:Down}} | Parallel med den huskede kant (se ovenfor) |

Tryk den samme piletast igen for at låse op. Statuslinjen siger »Låst til den røde akse. Tryk på samme piletast for at låse op.«

Mens den er låst, glider punktet langs linjen hen mod, hvor markøren er, og flugter stadig med punkter, du svæver over: svæv over hjørnet af en anden boks for at tegne en linje langs rød præcis så langt som det hjørne.

**{{key:Shift}}** låser den retning, du er fanget til lige nu (en akse eller parallel), så længe du holder den nede. Slip for at låse op.

Låsene virker i {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Polygon}}, {{ui:Flyt}}, {{ui:Skalér}} og {{ui:Målebånd}}. Før første klik drejer piletasterne i stedet visningen.

## Inde i en gruppe

Mens du redigerer inde i en gruppe eller komponent, er akserne gruppens egne akser (de flytter sig med den og drejer med den, hvis den var roteret). Fangning finder stadig punkter og kanter uden for gruppen, så du kan flugte ting med resten af modellen.
