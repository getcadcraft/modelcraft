---
title: Skær en åbning gennem en væg
summary: Tegn et vindue eller en dør på en væg med tykkelse, og skub den igennem, så væggen får et rigtigt hul.
keywords: vindue, dør, åbning, hul, væg, skær, skub igennem, tomrum, tykkelse, facade
from: 6b22f32c
---

En åbning kræver en væg med to sider: en kasse eller en væg, du har lavet ved at trække et langt, tyndt rektangel op. En enkelt flade, der står alene, har intet at skubbe igennem til.

## Lav en væg at øve på

1. Tryk {{key:R}}, klik på et hjørne på jorden og skriv `6m,0.3m` (eller `20',12"`), og tryk derefter {{key:Enter}}.
2. Tryk {{key:P}}, klik på rektanglet og skriv `3m` (eller `10'`), og tryk derefter {{key:Enter}}.

Du har en væg 300 mm (12 in) tyk.

## Tegn åbningen

1. Drej visningen, så du kan se den lange side af væggen.
2. Tryk {{key:R}}.
3. Hold markøren over væggens flade, og klik derefter, hvor vinduets nederste hjørne skal være. Tipset siger "På flade".
4. Skriv vinduets bredde og højde, fx `1.2m,1.5m` (eller `4',5'`), og tryk {{key:Enter}}.

   Vinduet er en flade for sig inde i væggens flade, som nu har et hul rundt om sig.

For at placere det i en præcis afstand fra hjørnet og gulvet, brug først [hjælpelinjer](topic:guides-measure): med {{ui:Målebånd}} trækker du hjælpelinjer af væggens nederste og ende-kanter, og starter derefter rektanglet, hvor to hjælpelinjer krydser hinanden (tipset siger "På hjælpelinje").

## Skub den igennem

1. Tryk {{key:P}}.
2. Klik på vinduesfladen, og skub den ind i væggen.
3. Flyt, indtil den stopper ved bagfladen, og klik derefter. Eller skriv væggens tykkelse, `300` (eller `12`), og tryk {{key:Enter}}.

   ModelCraft stopper ved fladen bagved og åbner den: væggen har nu et hul lige igennem, med fire sidefalder (karmsider, overkarm og vindueskarm), der beklæder det. {{ui:Objektinfo}} kalder stadig væggen et lukket legeme, når den er grupperet.

Skubber du mindre end hele tykkelsen, får du en fordybning i stedet for et hul.

## En dør

Tegn rektanglet startende på væggens nederste kant (tipset siger "På kant" eller "Endepunkt"), så åbningen når gulvet. Skub den igennem på samme måde.

## Mange vinduer af samme størrelse

1. Lav den første åbning.
2. Til de næste tegner du rektanglerne og dobbeltklikker derefter på hver med {{ui:Skub/træk}}: et dobbeltklik gentager den sidste afstand. Se [Skub og træk](topic:push-pull#repeat-the-last-distance).

## Hvis det ikke skar igennem

- Rektanglet skal tegnes **på** væggens flade. Hvis det blev tegnet i luften foran den, er det en separat flade: fortryd og tegn den igen, startende på fladen.
- Skubbet stopper ved den første flade bag åbningen. Hvis noget andet står i vejen inde i væggen (en indre flade, der er blevet efterladt fra tidligere tegning), stopper det der; slet den flades kanter, og prøv igen.
- Geometri i en separat gruppe skæres ikke. Åbn gruppen, der holder væggen, og tegn åbningen inde i den.
