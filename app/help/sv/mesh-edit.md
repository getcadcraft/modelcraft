---
title: Redigera ett nät i Nät-arbetsytan
summary: Markera ett näts hörn, kanter och ytor, flytta dem och extrudera, infoga, fasa, skära, slå ihop, fylla och brygga dem, med någon av tangentstilarna.
keywords: nät, redigeringsläge, nät-arbetsyta, hörn, kant, kanter, yta, ytor, extrudera, insättning, fasa, slingsnitt, kniv, dela mitt itu, snurra, slå ihop, lös upp, fyll, rutnätsfyllning, brygga, dela, glid, proportionell redigering, avtagning, arbetsyta
from: 92a372dd
---

**Nät-arbetsytan** redigerar ett [nät](topic:meshes) punkt för punkt: dess hörn, kanter och ytor. Tryck/dra-geometri stannar i **Modell**-arbetsytan.

## Öppna den

- Välj {{ui:Nät}} i listan {{ui:Arbetsyta}} till vänster i verktygsraden. Det markerade nätet öppnas för redigering; en markerad grupp eller komponent görs först om till ett nät (ett ångra-steg).
- Eller dubbelklicka på ett nät, eller, med modellerartangenterna, markera det och tryck på {{key:Tab}}.
- Med inget markerat erbjuder panelen nät att lägga till: plan, rutnät, kub, cirkel, cylinder, kon, sfär, ikosfär och torus. Ett nytt sådant hamnar dit vyn tittar och öppnas för redigering.

{{ui:Tillbaka till Modell}} (eller listan, {{key:Tab}} med modellerartangenterna, {{key:Esc}} med inget markerat med tryck/dra-tangenterna) går tillbaka till Modell med nätet markerat. Medan Nät-arbetsytan är öppen tonas resten av modellen bort och Modells ritverktyg är dolda.

## Markera

| Gör | För att |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Markera hörn, kanter eller ytor |
| Klicka | Markera ett; {{key:Shift}}+klick lägger till eller tar bort |
| Dra en ruta | Markera det som ligger inuti och syns; {{key:Shift}} lägger till, {{key:Ctrl}} tar bort |
| {{key:Alt}}+klick på en kant, eller dubbelklicka på den | Dess kantslinga (en ytslinga i ytläget; hela kanten vid en öppen kant) |
| {{key:Ctrl}}+{{key:Alt}}+klick på en kant | Dess kantring |
| Tripelklicka | Allt som är sammanfogat med den |

Gruppen {{ui:Markera}} har också {{ui:Alla}}, {{ui:Hopkopplade}}, {{ui:Slinga}}, {{ui:Ring}}, {{ui:Mer}} och {{ui:Mindre}}.

## Flytta, rotera, skala

{{ui:Flytta}}, {{ui:Rotera}} och {{ui:Skala}} startar från pekaren: flytta den, klicka eller tryck på {{key:Enter}} för att släppa markeringen, eller {{key:Esc}} för att avbryta. {{key:X}}, {{key:Y}} eller {{key:Z}} (eller piltangenterna) låser en axel. Skriv in ett avstånd, en vinkel eller en faktor för ett exakt värde; [beräkningar](topic:value-box#calculations) fungerar också.

**Proportionell redigering** ({{ui:Proportionell}}, eller i panelen): hörn nära markeringen följer en förflyttning, mindre ju längre bort de är, upp till den räckvidd du ställt in, med den avtagning du väljer. Slå på {{ui:Bara längs nätet}} för att mäta längs kanter i stället för rakt.

{{ui:Glid}} flyttar en markerad kantslinga längs kanterna intill den.

## Ändra formen

| Verktyg | Gör |
|---|---|
| {{ui:Extrudera}} | Drar ut de markerade ytorna längs deras normal, med nya sidoytor (eller gör ytor av öppna kanter). Skriv in avståndet |
| {{ui:Insättning}} | Ett band innanför de markerade ytornas kontur; tryck på {{key:I}} igen för varje yta för sig |
| {{ui:Fasa}} | Skär de markerade kanterna (eller, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, hörn) med en bredd; hjulet eller plus- och minustangenterna lägger till segment för en rundad kant |
| {{ui:Slingsnitt}} | Peka på en kant: nya slingor tvärs över ringen av fyrsidiga ytor; hjulet anger hur många snitt; klicka för att skära |
| {{ui:Kniv}} | Klicka på punkter på kanter eller hörn; {{key:Enter}} skär rakt över ytorna mellan dem, som du ser dem |
| {{ui:Dela mitt itu}} | Rita en linje på skärmen: de markerade ytorna (eller alla) skärs längs den |
| {{ui:Snurra}} | Vrider de markerade ytorna eller de öppna kanterna runt den blå axeln i steg (hjulet anger dem); ett helt varv sluter dem |
| {{ui:Dela}} | Skär de markerade kanterna i två; hela ytor blir ett rutnät |
| {{ui:Slå ihop}} | De markerade hörnen blir ett, i deras mitt |
| {{ui:Lös upp}} | Tar bort markeringen men behåller ytan: ytor sammanfogas |
| {{ui:Fyll}} | En yta över en markerad öppen kant (eller mellan två öppna kanter) |
| {{ui:Rutnätsfyllning}} | Fyller en öppen kant med ett jämnt antal kanter med ett rutnät av fyrhörningar |
| {{ui:Brygga}} | Sammanfogar två markerade öppna kantslingor med ytor |
| {{ui:Veck}} | Hur skarpa de markerade kanterna förblir när nätet jämnas ut av en subdivisionsyta: flytta bort från mitten, använd hjulet (steg om 0.1) eller skriv in 0 till 1. Panelen visar de markerade kanternas veck och tar också emot ett inskrivet värde. Veckade kanter ritas i magenta |
| {{ui:Vänd}}, {{ui:Jämna ut}}, {{ui:Ta bort}} | Vänder ytor; jämnar ut hörn mot deras grannar; tar bort enligt markeringsläget |

Varje är ett ångra-steg. Texturkoordinater, färger och vikter följer med till de nya ytorna och hörnen.

## Gör om

{{ui:Gör om nät}} gör om hela nätet som jämna trianglar av en storlek, som du anger när du trycker (mindre är finare och långsammare). Det sluter hål, sammanfogar bitar som överlappar och jämnar ut ett nät som skulptering har sträckt. Skarpa kanter blir något mjukt avrundade. UV, målning och veck börjar om. Ett ångra-steg.

## Retopologi

För att bygga ett nytt, renare nät över ett detaljerat (en skulptur, en skanning), välj det detaljerade under {{ui:Retopologi}} › **Bygg på** i panelen, sedan:

- **Fäst flyttade punkter på det:** punkter du flyttar, och kanter du extruderar, hamnar på dess yta.
- **Placera de markerade punkterna på det** flyttar de markerade punkterna dit nu (ett ångra-steg).
- **Visa det här nätets kanter framför** ritar nätet du bygger över ytan, så att du ser det.

## Justera senaste åtgärden

Efter {{ui:Insättning}}, {{ui:Fasa}}, {{ui:Slingsnitt}}, {{ui:Dela}}, {{ui:Jämna ut}}, {{ui:Rutnätsfyllning}} eller {{ui:Snurra}} visar panelen dess inställningar (bredd, segment, profil, snitt …). Ändrar du en görs åtgärden om från början, fortfarande som ett ångra-steg.

## Tangenter

| | Tryck/dra-tangenter | Modellerare-tangenter |
|---|---|---|
| Flytta, rotera, skala | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} två gånger glider) |
| Extrudera, insättning | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Ta bort | {{key:E}} eller {{key:Delete}} | {{key:X}} eller {{key:Delete}} |
| Veck | {{key:Shift+C}} | {{key:Shift+E}} |
| Markera allt, inget, invertera | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Båda | {{key:Ctrl+B}} fasa, {{key:Ctrl+R}} slingsnitt, {{key:K}} kniv | samma, och {{key:F}} fyll, {{key:M}} slå ihop, {{key:Ctrl+X}} lös upp, {{key:L}} / {{key:Ctrl+L}} hopkopplade, {{key:Alt+N}} vänd, {{key:O}} proportionell, {{key:Shift+V}} hörnglid |

Se även [Nät](topic:meshes), [Modifierare på ett nät](topic:modifiers) och [Finns inte ännu](topic:not-built-yet).
