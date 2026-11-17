---
title: Trekk og skyv flater til volumlegemer
summary: Gjør en flate om til en boks, gjør en bygning høyere eller lavere, legg til et erker eller en fordypning, og gjenta en avstand med et dobbeltklikk.
keywords: trykk trekk, ekstruder, høyde, volumlegeme, boks, masse, høyere, fordypning, utbuling, gjenta, dobbeltklikk, volum, nivå, på flate, i flukt, samme høyde
from: dc093c91
---

{{ui:Trykk/trekk}} ({{key:P}}) flytter en flate langs sin egen retning: opp og ned for et gulv, inn og ut for en vegg. Hva som skjer avhenger av flaten.

## Lag et volumlegeme av en flate

1. Tegn en flate, for eksempel et rektangel på bakken ([Tegn flater](topic:draw-faces)).
2. Trykk {{key:P}}.
3. Hold pekeren over flaten. Den lyser opp.
4. Klikk på flaten, og flytt pekeren. Flaten stiger (eller synker), og sider vokser fra kantene. Verdiboksen ({{ui:Avstand}}) og tipset viser avstanden.
5. Klikk for å fullføre, eller skriv inn en avstand og trykk {{key:Enter}}: `3m`, `10'`, `2700` i en modell i millimeter.

   Du har nå et lukket volumlegeme. Velg alt og grupper det (se [Grupper og komponenter](topic:groups-components)): {{ui:Elementinfo}} viser da «Volumlegeme: Ja» og volumet.

En enkelt flate kan gå begge veier: trekk den opp for en masse over bakken, skyv den ned for en grop eller et fundament.

:::tip
I stedet for å klikke to ganger, trykk på flaten, dra og slipp. På en berøringsskjerm er det den naturlige måten: trykk, dra, løft.
:::

## Trekk til høyden til noe annet

Mens du trekker, holder du pekeren over et hjørne, et midtpunkt, en kant eller en hjelpelinje i en annen del av modellen. Flaten fester seg til den høyden, og en markør viser punktet. Bruk det til å lage to blokker like høye, eller for å stoppe ved en hjelpelinje du har plassert med [målebåndet](topic:guides-measure).

Du kan også holde pekeren over en flate som er parallell med den du skyver, for eksempel toppen av en annen blokk eller toppen av boksen en stolpe står på. Tipset sier «På flate», og flaten du skyver ender i flukt med den. For eksempel: skyv den indre flaten på et rør ned til den er i flukt med boksen under røret.

En flate i en vinkel til den du skyver setter ikke noe nivå. Avstanden følger pekeren. Det samme gjelder en flate bak den du skyver.

Når en skjøvet flate ender i flukt med flatene rundt den igjen, forsvinner sidene. Det blir ingen sider med null høyde igjen, og konturen du tegnet blir på flaten, slik at du kan skyve den igjen senere. For å gjøre den til én flate igjen, slett konturens kanter med {{ui:Viskelær}}: de to flatene slås sammen.

## Gjør en boks høyere eller lavere

Trekk eller skyv toppen av en boks med {{ui:Trykk/trekk}}. Siden sidene allerede går rett opp fra den, flytter toppen seg bare: boksen blir høyere eller lavere, og det lages ingen nye kanter.

- Skyver du toppen helt ned til bunnen, fjernes boksen. ModelCraft stopper ved null høyde; den snur aldri boksen innenfra og ut.
- Det samme gjelder enhver flate der alle naboene går langs dens retning, for eksempel enden av en vegg.

## Legg til et erker eller en fordypning

1. Tegn et rektangel på siden av en boks (start det på flaten; det blir i flatens plan).
2. Trykk {{key:P}} og trekk det nye rektangelet **ut**. Det legger til materiale: et erker, en skorstein, et skyggetak.
3. Eller skyv det **inn**. Det lager en fordypning: en veranda, en nisje, en tilbaketrukket inngang.

Når sidene på den nye delen flukter med flater som allerede finnes, slås de sammen til én flate, slik at du ikke får løse linjer på en flat vegg.

## Skyv helt gjennom

Når du skyver en flate inn i et volumlegeme, stopper den ved den første flaten bak. Når den når den flaten, skjærer den en åpning gjennom. Slik lager du vinduer og dører i en vegg med tykkelse. Se [Lag en åpning gjennom en vegg](topic:openings).

## Skriv inn en avstand

Etter at du har klikket på flaten, skriver du inn avstanden og trykker {{key:Enter}}.

- Den innskrevne avstanden går i den retningen du beveget deg. Har du ikke beveget deg ennå, går den mot forsiden av flaten (ut av et volumlegeme, opp fra bakken).
- Skriv et negativt tall, for eksempel `-500`, for å gå den andre veien.
- Hvis du ombestemmer deg før du klikker, trykker du {{key:Esc}}. Flaten går tilbake.

## Gjenta den siste avstanden

Etter ett trekk eller skyv dobbeltklikker du en annen flate med {{ui:Trykk/trekk}} fortsatt valgt. Den flyttes med samme avstand. Dette er den raske måten å gi flere vegger eller flere gulv samme tykkelse eller høyde.

ModelCraft husker avstanden til du bytter til et annet verktøy.

## Ting å vite

- Trykk/trekk virker på én flate om gangen. Klikker du på noe som ikke er en flate, sier statuslinjen: «Trykk/trekk virker på en flate. Klikk på en flate.»
- For å trekke eller skyve en flate inne i en gruppe eller komponent, åpner du den først (dobbeltklikk på den).
- Med **Kollisjon** på stopper et trekk eller skyv som går inn i et annet volumlegeme der det berører, og tipset sier hva det berører (objektets navn, eller «løs geometri i denne gruppen») og markerer flatene det møtte. En lomme du skyver inn i sitt eget volumlegeme (for eksempel en forskjøvet flate som skyves tilbake ned) er en del av det volumlegemet, og stoppes aldri av veggene sine.
- To volumlegemer skjøvet inn i hverandre kutter eller slår ikke hverandre sammen: flatene deres går bare gjennom hverandre. Se [Ikke bygget ennå](topic:not-built-yet).
