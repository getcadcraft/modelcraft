---
title: Skub og træk flader til massive legemer
summary: Gør en flade til en kasse, gør en bygning højere eller lavere, tilføj en fløj eller en fordybning, og gentag en afstand med et dobbeltklik.
keywords: skub træk, ekstruder, højde, massivt legeme, kasse, masse, højere, fordybning, udbulning, gentag, dobbeltklik, volumen, niveau, på flade, flugtende, samme højde
from: dc093c91
---

{{ui:Skub/træk}} ({{key:P}}) flytter en flade langs sin egen retning: op og ned for et gulv, ind og ud for en væg. Hvad der sker, afhænger af fladen.

## Lav et massivt legeme af en flade

1. Tegn en flade, for eksempel et rektangel på jorden ([Tegn flader](topic:draw-faces)).
2. Tryk {{key:P}}.
3. Hold markøren over fladen. Den fremhæves.
4. Klik på fladen, og flyt derefter markøren. Fladen hæver sig (eller synker), og sider vokser ud fra dens kanter. Værdiboksen ({{ui:Afstand}}) og tippet viser afstanden.
5. Klik for at afslutte, eller skriv en afstand og tryk {{key:Enter}}: `3m`, `10'`, `2700` i en model i millimeter.

   Du har nu et lukket massivt legeme. Markér det hele og gruppér det (se [Grupper og komponenter](topic:groups-components)). {{ui:Objektinfo}} viser derefter »Solid: Ja« og dets volumen.

En enkelt flade kan gå begge veje: træk den op for en masse over jorden, skub den ned for en grube eller et fundament.

:::tip
I stedet for at klikke to gange, tryk på fladen, træk, og slip. På en berøringsskærm er det den naturlige måde: tryk, træk, løft.
:::

## Træk til højden af noget andet

Mens du trækker, hold markøren over et hjørne, et midtpunkt, en kant eller en hjælpelinje på en anden del af modellen. Fladen fanger den højde, og en markør viser punktet. Brug det til at lave to blokke lige høje, eller til at standse ved en hjælpelinje, du har placeret med [målebåndet](topic:guides-measure).

Du kan også holde markøren over en flade, der er parallel med den, du skubber, for eksempel toppen af en anden blok eller toppen af kassen, en stolpe står på. Tippet siger »På flade«, og fladen, du skubber, ender i niveau med den. Skub for eksempel rørets indre flade ned, til den er i niveau med kassen under røret.

En flade i en vinkel i forhold til den, du skubber, sætter ikke et niveau. Afstanden følger markøren. Det samme gælder en flade bag den, du skubber.

Når en skubbet flade igen ender flugtende med fladerne omkring den, forsvinder dens sider. Der bliver ingen sider med nulhøjde tilbage, og konturen, du tegnede, bliver på fladen, så du kan skubbe den igen senere. For at gøre den til én flade igen, slet konturens kanter med {{ui:Viskelæder}}: de to flader forenes.

## Gør en kasse højere eller lavere

Skub/træk toppen af en kasse. Fordi siderne allerede løber lige op fra den, flytter toppen sig blot: kassen bliver højere eller lavere, og der laves ingen nye kanter.

- Skubber du toppen hele vejen ned til bunden, fjernes kassen. ModelCraft stopper ved nulhøjde; den vender aldrig kassen pelsen udad.
- Det samme gælder enhver flade, hvis naboer alle løber langs dens retning, for eksempel enden af en væg.

## Tilføj en fløj eller en fordybning

1. Tegn et rektangel på siden af en kasse (start det på fladen; det bliver i fladens plan).
2. Tryk {{key:P}} og træk det nye rektangel **ud**. Det tilføjer materiale: en fløj, en skorsten, et overdække.
3. Eller skub det **ind**. Det skærer en fordybning: en veranda, en niche, en tilbagetrukket indgang.

Når siderne af den nye del flugter med flader, der allerede er der, smelter de sammen til én flade, så du ikke får løse linjer på en flad væg.

## Skub helt igennem

Når du skubber en flade ind i et massivt legeme, stopper det ved den første flade bag den. Når den når den flade, skærer den en åbning igennem. Sådan laver du vinduer og døre i en væg med tykkelse. Se [Skær en åbning i en væg](topic:openings).

## Skriv en afstand

Efter at have klikket på fladen, skriv afstanden og tryk {{key:Enter}}.

- Den skrevne afstand går den vej, du bevægede dig. Hvis du endnu ikke har flyttet dig, går den mod fladens forside (ud af et massivt legeme, op fra jorden).
- Skriv et negativt tal, for eksempel `-500`, for at gå den anden vej.
- Hvis du ombestemmer dig før du klikker, tryk {{key:Esc}}. Fladen går tilbage.

## Gentag den sidste afstand

Efter ét skub/træk, dobbeltklik på en anden flade, mens {{ui:Skub/træk}} stadig er valgt. Den flytter sig med samme afstand. Det er den hurtige måde at give flere vægge eller flere gulve den samme tykkelse eller højde.

ModelCraft husker afstanden, indtil du skifter til et andet værktøj.

## Ting at vide

- Skub/træk virker på én flade ad gangen. Klikker du på noget, der ikke er en flade, siger statuslinjen »Skub/træk virker på en flade. Klik på en flade.«
- For at skubbe/trække en flade inde i en gruppe eller komponent, åbn den først (dobbeltklik på den).
- Med **Kollision** slået til stopper et skub eller træk, der løber ind i et andet massivt legeme, hvor det rører. Tippet siger, hvad det rører (objektets navn, eller »løs geometri i denne gruppe«), og fremhæver de flader, det mødte. En lomme, du skubber ind i sit eget massive legeme (for eksempel en forskudt flade skubbet tilbage ned), er en del af det legeme og stoppes aldrig af dets vægge.
- To massive legemer skubbet ind i hinanden skærer ikke og forbinder ikke hinanden: deres flader går bare igennem hinanden. Se [Endnu ikke bygget](topic:not-built-yet).
