---
title: Rediger et nett i Nett-arbeidsområdet
summary: Velg hjørnepunkter, kanter og flater i et nett, flytt dem, og ekstruder, innfelle, skråkante, kutt, slå sammen, fyll og bygg bro mellom dem, med begge tastestiler.
keywords: nett, redigeringsmodus, nett-arbeidsområde, hjørnepunkt, hjørnepunkter, kant, kanter, flate, flater, ekstruder, innfelling, fas, sløyfesnitt, kniv, del i to, spinn, slå sammen, løs opp, fyll, rutenettfyll, bro, del opp, gli, proporsjonal redigering, avtagning, arbeidsområde
from: 92a372dd
---

**Nett**-arbeidsområdet redigerer et [nett](topic:meshes) punkt for punkt: hjørnepunktene, kantene og flatene. Geometri med trykk/trekk blir værende i **Modell**-arbeidsområdet.

## Åpne den

- Velg {{ui:Mesh}} i listen {{ui:Workspace}} til venstre på verktøylinjen. Det valgte nettet åpnes for redigering. En valgt gruppe eller komponent gjøres først om til et nett (ett angrestrinn).
- Eller dobbeltklikk et nett, eller, med modellererterastene, velg det og trykk {{key:Tab}}.
- Uten valg tilbyr panelet nett som kan legges til: plan, rutenett, kube, sirkel, sylinder, kjegle, kule, ikosfære og torus. Et nytt legges der visningen ser, og åpnes for redigering.

{{ui:Back to Model}} (eller listen, {{key:Tab}} med modellererterastene, {{key:Esc}} uten valg med trykk/trekk-tastene) går tilbake til Modell med nettet valgt. Mens Nett-arbeidsområdet er åpent, blekes resten av modellen, og Modells tegneverktøy legges bort.

## Velg

| Gjør | For å |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Velg hjørnepunkter, kanter eller flater |
| Klikk | Velg ett; {{key:Shift}}+klikk legger til eller fjerner |
| Dra en boks | Velg det som er inni og synlig; {{key:Shift}} legger til, {{key:Ctrl}} fjerner |
| {{key:Alt}}+klikk på en kant, eller dobbeltklikk den | Kantsløyfen (en flatesløyfe i flatemodus; hele kanten på en åpen kant) |
| {{key:Ctrl}}+{{key:Alt}}+klikk på en kant | Kantringen |
| Tredobbeltklikk | Alt som er sammenkoblet med det |

Gruppen {{ui:Select}} har også {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} og {{ui:Less}}.

## Flytt, roter, skaler

{{ui:Move}}, {{ui:Rotate}} og {{ui:Scale}} starter fra pekeren: flytt den, og klikk eller trykk {{key:Enter}} for å sette utvalget ned, eller {{key:Esc}} for å avbryte. {{key:X}}, {{key:Y}} eller {{key:Z}} (eller piltastene) låser en akse. Skriv inn en avstand, en vinkel eller en faktor for en nøyaktig verdi; [utregninger](topic:value-box#calculations) fungerer også.

**Proporsjonal redigering** ({{ui:Proportional}}, eller i panelet): hjørnepunkter nær utvalget følger en flytting, mindre jo lenger unna de er, opp til den rekkevidden du angir, med den avtagningen du velger. Slå på {{ui:Only along the mesh}} for å måle langs kanter i stedet for rett.

{{ui:Slide}} flytter en valgt kantsløyfe langs kantene ved siden av den.

## Endre formen

| Verktøy | Gjør |
|---|---|
| {{ui:Extrude}} | Trekker de valgte flatene ut langs normalen, med nye sideflater (eller lager flater fra åpne randkanter). Skriv inn avstanden |
| {{ui:Inset}} | Et bånd innenfor de valgte flatenes kontur; trykk {{key:I}} igjen for hver flate for seg |
| {{ui:Bevel}} | Kutter de valgte kantene (eller, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, hjørnepunkter) i en bredde. Hjulet eller plus- og minustastene legger til segmenter for en avrundet kant |
| {{ui:Loop cut}} | Pek på en kant: nye sløyfer tvers over ringen av firkantede flater. Hjulet angir hvor mange kutt; klikk for å kutte |
| {{ui:Knife}} | Klikk punkter på kanter eller hjørner; {{key:Enter}} kutter rett over flatene mellom dem, slik de vises |
| {{ui:Bisect}} | Tegn en linje på skjermen: de valgte flatene (eller alle) kuttes langs den |
| {{ui:Spin}} | Dreier de valgte flatene eller åpne kantene rundt den blå aksen i trinn (hjulet angir dem). En full omdreining lukker |
| {{ui:Subdivide}} | Deler de valgte kantene i to; hele flater blir et rutenett |
| {{ui:Merge}} | De valgte hjørnepunktene blir ett, i deres midtpunkt |
| {{ui:Dissolve}} | Fjerner utvalget, men beholder overflaten: flatene slås sammen |
| {{ui:Fill}} | En flate over en valgt åpen kant (eller mellom to åpne kanter) |
| {{ui:Grid fill}} | Fyller en åpen kant med et partall av kanter med et rutenett av firkanter |
| {{ui:Bridge}} | Kobler to valgte åpne kantsløyfer med flater |
| {{ui:Crease}} | Hvor skarpe de valgte kantene forblir når nettet glattes av en Subdivision-overflate: flytt bort fra midten, bruk hjulet (trinn på 0.1), eller skriv 0 til 1. Panelet viser de valgte kantenes brett og tar også imot en skrevet verdi. Brettede kanter tegnes i magenta |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Vender flater; jevner hjørnepunkter mot naboene; sletter etter velgemodusen |

Hvert av disse er ett angrestrinn. Teksturkoordinater, farger og vekter følger med over til de nye flatene og hjørnepunktene.

## Remesh

{{ui:Remesh}} lager hele nettet på nytt som jevne trekanter av én størrelse, som bestemmes når den trykkes (jo mindre, desto finere og tregere). Den lukker hull, slår sammen deler som overlapper, og jevner ut et nett som skulpturering har strukket. Skarpe kanter blir svakt avrundet. UV-er, maling og brett starter på nytt. Ett angrestrinn.

## Retopologi

For å bygge et nytt, renere nett over et detaljert ett (en skulptur, en skanning), velg det detaljerte under {{ui:Retopology}} › **Bygg på** i panelet, og deretter:

- **Fest flyttede punkter til overflaten:** punkter som flyttes, og kanter som ekstruderes, havner på overflaten.
- **Plasser de valgte punktene på den** flytter de valgte punktene dit nå (ett angrestrinn).
- **Vis dette nettets kanter foran** tegner nettet du bygger over overflaten, slik at den kan ses.

## Juster siste operasjon

Etter {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} eller {{ui:Spin}} viser panelet innstillingene (bredde, segmenter, profil, kutt …). Endres en, utføres operasjonen på nytt fra der den startet, fortsatt som ett angrestrinn.

## Taster

| | Trykk/trekk-taster | Modellerer-taster |
|---|---|---|
| Flytt, roter, skaler | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} to ganger glir) |
| Ekstruder, innfelling | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Slett | {{key:E}} eller {{key:Delete}} | {{key:X}} eller {{key:Delete}} |
| Brett | {{key:Shift+C}} | {{key:Shift+E}} |
| Velg alle, ingen, inverter | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Begge | {{key:Ctrl+B}} fas, {{key:Ctrl+R}} sløyfesnitt, {{key:K}} kniv | det samme, og {{key:F}} fyll, {{key:M}} slå sammen, {{key:Ctrl+X}} løs opp, {{key:L}} / {{key:Ctrl+L}} tilknyttet, {{key:Alt+N}} speil, {{key:O}} proporsjonal, {{key:Shift+V}} hjørnepunktglidning |

Se også [Nett](topic:meshes), [Modifikatorer på et nett](topic:modifiers) og [Ikke bygget ennå](topic:not-built-yet).
