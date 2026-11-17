---
title: Lagre, åpne og eksporter USD
summary: Lagre hele modellen som USD (.usda, .usdc eller .usdz) uten at noe går tapt, åpne den igjen, og importer USD-scener fra andre 3D-programmer.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, lagre som, eksporter, importer, scenesammenstilling, archviz, openpbr, materialx, pakke
from: 73d299f9
---

USD er et scenformat som mange 3D-, renderings- og archviz-programmer deler. ModelCraft skriver og leser det. `.modelcraft` er formatet {{ui:Lagre}} skriver; USD er et valg i {{ui:Lagre som}}.

## Lagre som USD

1. Velg {{ui:Lagre som}} i gruppen {{ui:Fil}} (eller trykk {{key:Mod+Shift+S}}).
2. Velg formatet: {{ui:Tekst (.usda)}} (lesbart, godt for versjonskontroll), {{ui:Binær (.usdc)}} (minst og raskest) eller {{ui:Pakke (.usdz)}} (én fil med teksturene inni).
3. Filen lastes ned (i skrivebordsappen velges hvor den lagres).

De samme valgene finnes i {{ui:Eksporter}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Ingenting går tapt

Åpnes en USD-fil som ModelCraft har lagret, kommer modellen tilbake nøyaktig: flater med hullene sine, myke og skjulte kanter, kurver, grupper og komponenter, etiketter, scener, måltilsettinger, hjelpelinjer, snittplan, lamper, importerte teksturer og visningen. Andre programmer ser den samme modellen som nett, grupper, prototyper for komponenter, materialer, lamper og kameraer.

:::note
Endrer et annet program geometrien til en gruppe eller komponent, åpner ModelCraft den delen som et nett med endringen beholdt, og sier hvor mange deler som ble lest på den måten. En plassering som er flyttet eller slettet i et annet program, forblir flyttet eller slettet.
:::

## Åpne eller importer andres USD

- {{ui:Åpne}} en `.usd`-, `.usda`-, `.usdc`- eller `.usdz`-fil for å starte en modell fra den.
- {{ui:Importer}} en for å legge den til i den åpne modellen. Dra filene den refererer til (andre lag, teksturer) sammen med den.

Nett importeres med normaler, UV-koordinater og farger; delt geometri som komponenter; materialer som malingsfarger; lamper som lamper og kameraer som scener. Alt er i meter med Z opp, uansett filens enheter og opp-akse.

## Ikke ennå

Animasjon, skjeletter og MaterialX-nodegrafer leses ikke eller skrives ikke som USD ennå. ModelCrafts egen animasjon og nodematerialer beholdes i en USD-fil den har lagret, slik at ModelCraft kan åpne den igjen, men andre programmer ser dem ikke. Lag som en fil refererer til, og som ModelCraft ikke kan lese (for eksempel et MaterialX-dokument), utelates med en merknad.
