---
title: Live-visningen
summary: Et vindu ved siden av modellen som viser den i sanntidsutseendet, med sol og skygger, og som følger hver endring du gjør. Gå gjennom den, og still inn tid på døgnet og måned.
keywords: del, panorama, 360, omvisning, virtuell omvisning, frittstående viser, frakoblet viser, send til kunde, video, gjennomgangsvideo, spre, spredning, gress, eng, skog, steiner, planter, trær, folkemengde, mal planter, live-visning, sanntid, sanntidsgjengivelse, gjennomgang, gå, gå gjennom, førsteperson, presentasjon, kunde, andre skjerm, andre vindu, skjerm, tid på døgnet, sol, årstid, måned, skygger, omgivelsesokklusjon, refleksjoner, indirekte lys, global belysning, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} åpner et panel over appen som viser modellen i sanntidsutseendet: himmelen og solen fra modellens sted og dato, solens skygger, utseendet og materialene du har gitt flatene, lamper og lys som reflekteres fra vegger og gulv. Det følger det du gjør: snur du visningen, snur den også, endrer du modellen, vises endringen et øyeblikk senere. Ingenting lastes opp.

## Åpne den

1. Velg {{ui:Export}} › {{ui:Live view}}. Panelet åpnes nederst til høyre.
2. Dra tittellinjen for å flytte det, og dra hjørnet for å gjøre det større.
3. {{ui:New window}} flytter det til et vindu for seg selv, for en andre skjerm. {{ui:Export}} › {{ui:Live view in a new window}} åpner det der med en gang. Hvis nettleseren blokkerer popup-vinduer, åpnes det som panel.
4. {{ui:Close}} lukker det.

## Kontrollene

| Kontroll | Hva den gjør |
|---|---|
| {{ui:Follow the view}} | På: live-visningen ser dit ModelCraft-visningen ser. Å gå slår det av |
| {{ui:Walk}} | Gå gjennom modellen (nedenfor) |
| {{ui:Gravity}} | Under gange: stå på gulv og gå i trapper. Av: fly |
| {{ui:Time}} | Tid på døgnet, fra 05:00 til 21:00. Solen flytter seg mens du drar |
| {{ui:Month}} | Måneden (den 21. i den), slik at du kan se solen om vinteren og sommeren |
| {{ui:Quality}} | {{ui:For this computer}} (det [maskinen](topic:your-machine) får), eller {{ui:Low}}, {{ui:Medium}} eller {{ui:High}} |

Linjen nederst sier hva som tegner visningen (WebGPU eller WebGL 2), kvaliteten og det indirekte lyset.

## Gå gjennom modellen

1. Snu hovedvisningen dit du vil stå, og velg {{ui:Walk}}. Du står på gulvet under visningens øyepunkt, 1.6 m høy.
2. Klikk i live-visningen, og bruk {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltastene. Hold {{key:Shift}} for å løpe. Dra for å se rundt.
3. Trinn opptil 40 cm klatres (trapper); alt høyere er en vegg. Vegger stopper deg, og du glir langs dem.
4. Med {{ui:Gravity}} av flyr du: {{key:E}} går opp, {{key:Q}} går ned.
5. {{key:Esc}} stopper gåingen.

## Spre planter, steiner og folk

{{ui:Scatter}} i live-visningens linje åpner spredningspanelet ved siden av bildet. Et spredningssett sprer objekter fra entourage-biblioteket (trær, busker, gress, blomster, steiner, folk, biler) over en del av modellen. Objektene tegnes bare i live-visningen: de er ikke geometri i modellen, og hovedvisningen viser dem ikke.

1. **Fyll flater:** velg flater (eller en gruppe, for eksempel et terreng) i ModelCraft, og velg deretter {{ui:Fill selection}}. Settet dekker dem.
2. **Mal:** velg {{ui:Paint}}, og dra over live-visningen. Med flater valgt havner malingen bare på dem; uten valg havner den på alt under penselen, også bakken. {{ui:Brush size}} angir penselen; {{ui:Eraser}} fjerner malte flekker.
3. Kryss av for det som skal spres. Tallet ved siden av hver er vekten: 3 og 1 gir tre av den første for hver av den andre.

| Kontroll | Hva den gjør |
|---|---|
| {{ui:Per m²}} | Hvor mange objekter det er per kvadratmeter |
| {{ui:Keep away (m)}} | Ingen objekter nærmere enn dette til andre objekter, og ingen under et tak eller et bord. 0 slår det av |
| {{ui:Turn (°)}} | Hvor mye hvert objekt dreies tilfeldig om loddlinjen |
| {{ui:Steepest (°)}} | Ingen objekter der overflaten er brattere |
| {{ui:Size}} | Minste og største størrelse, som en faktor av objektets egen størrelse |
| {{ui:Height from, to (m)}} | Bare mellom disse høydene (tomt = hvilken som helst) |
| {{ui:Lean with the surface}} | 0 holder objektene rette; 1 stiller dem vinkelrett på en skråning |
| {{ui:Seed}}, {{ui:Shuffle}} | Samme startverdi gir alltid samme spredning; {{ui:Shuffle}} velger en annen |

Settene lagres i .modelcraft-filen, og de følger flatene de dekker når du endrer dem. Hvor mange objekter live-visningen tegner til sammen, settes av nivået til [maskinen](topic:your-machine): 20 000 for {{ui:Processor only}}, 100 000 for {{ui:Graphics card, basic}}, en million for {{ui:Graphics card, high}}. Panelet viser hvor mange som er plassert, av hvor mange tettheten krever. Færre plasseres når budsjettet er nådd, eller der objekter holder dem unna. Objekter nær kameraet tegnes som seg selv; fjerne tegnes som enkle former i sine farger.

:::note
Spredte objekter finnes i live-visningen (og i dens gange, panoramaer og den frittstående viseren). Render et bilde tegner dem ikke ennå.
:::

## Del: panoramaer, omvisninger, en viser, en video

{{ui:Share}} i live-visningens linje lager filer fra live-visningen. Alt lages på denne datamaskinen; ingenting lastes opp.

| Valg | Resultat |
|---|---|
| {{ui:360° panorama}} | Et 360°-bilde fra der visningen står (eller der det gås), som en ekvirektangulær PNG som panoramavisere og de fleste fotosider åpner |
| {{ui:Add this spot to the tour}}, deretter {{ui:Save the tour}} | Én nettside med et panorama på hvert sted, og piler til stedene hvert panorama kan se (en vegg imellom skjuler pilen) |
| {{ui:Save a viewer}} | Én nettside med modellen i dette sanntidsutseendet: snu den, gå gjennom den, hopp til de lagrede scenene. Den åpnes frakoblet i en nettleser med WebGPU eller WebGL 2, fra en mappe, en USB-pinne eller en e-post, uten installasjon og uten konto, og den laster ingenting fra internett |
| {{ui:Video of the path}} | Kameraveien på tidslinjen (eller de lagrede scenene i rekkefølge) som en video i dette sanntidsutseendet, i live-visningens størrelse: WebM eller MP4 der nettleseren kan lage dem, ellers nummererte bilder i en ZIP |

Panoramaets bredde følger kvaliteten: 1024, 2048 eller 4096 piksler på {{ui:Low}}, {{ui:Medium}} og {{ui:High}}. En viserfil er omtrent 5 MB, pluss modellen.

:::note
Omvisningen og viseren er laget for å vises, ikke for redigering: de beholder modellen slik den er når de lagres.
:::

## Kvalitet

| | Lav | Middels | Høy |
|---|---|---|---|
| Solskygger | ett skyggekart | tre kaskader | fire kaskader |
| Omgivelsesokklusjon (kontaktskygger) | | ✓ | ✓, finere |
| Refleksjoner i metall | | | ✓ |
| Glød (når {{ui:Render a picture…}} setter den) | | ✓ | ✓ |
| Kanter jevnet ut | FXAA | over flere bilder (TAA) | over flere bilder (TAA) |
| Indirekte lys | grovt | finere | finest |

{{ui:For this computer}} velger {{ui:Low}} på en datamaskin uten brukbart grafikkort, {{ui:Medium}} med en innebygd grafikkbrikke og {{ui:High}} med et eget grafikkort. {{ui:Low}} er ment for en bærbar med 8 GB og uten grafikkort.

## Indirekte lys

Lys som reflekteres fra en solbelyst vegg ned på gulvet, og den mørkere delen inne i et rom, beregnes av den samme stisporingsmotoren som lager [gjengitte bilder](topic:render): den gjengir et lite panorama i punkter gjennom modellen, i bakgrunnen på hver prosessorkjerne. Mens den arbeider, sier nederste linje {{ui:Bounce light: 40 %}}; når den er klar, tar visningen den inn. Etter en endring starter den på nytt.

:::note
Dette er en tilnærming for en live-visning, ikke et gjengitt bilde: små detaljer mellom punktene får det indirekte lyset fra punktene nær dem. For et ferdig bilde, bruk [Render et bilde](topic:render).
:::

## Lysstyrke og farger

Live-visningen bruker den samme lysstyrken, hvitbalansen, kontrasten og visningsomformingen (ACES, AgX, filmisk eller standard) som [Render et bilde](topic:render). Still dem der, så følger live-visningen.

:::note
Nettlesere er forskjellige. Der nettleseren har WebGPU (Chrome og Edge på Windows, macOS og ChromeOS, Safari 26), bruker live-visningen den. Ellers (de fleste nettlesere på Linux, eldre Apple-systemer) bruker den WebGL 2 og ser likt ut.
:::
