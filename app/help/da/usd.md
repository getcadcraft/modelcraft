---
title: Gem, åbn og eksportér USD
summary: Gem hele modellen som USD (.usda, .usdc eller .usdz) uden tab, åbn den igen, og importér USD-scener fra andre 3D-programmer.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, gem som, eksport, import, scenesamling, archviz, openpbr, materialx, pakke
from: 73d299f9
---

USD er et scene-format, som mange 3D-, renderings- og archviz-programmer deler. ModelCraft skriver og læser det. `.modelcraft` er stadig formatet, {{ui:Gem}} skriver; USD er et valg i {{ui:Gem som}}.

## Gem som USD

1. Vælg {{ui:Gem som}} i gruppen {{ui:Fil}} (eller tryk på {{key:Mod+Shift+S}}).
2. Vælg formatet: {{ui:Tekst (.usda)}} (læsbart, godt til versionskontrol), {{ui:Binær (.usdc)}} (mindst og hurtigst) eller {{ui:Pakke (.usdz)}} (én fil med teksturerne indeni).
3. Filen downloades (i desktop-appen vælger du, hvor den går hen).

De samme valg findes under {{ui:Eksportér}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Intet går tabt

Åbn en USD-fil, som ModelCraft gemte, og du får modellen tilbage nøjagtigt: flader med deres huller, bløde og skjulte kanter, kurver, grupper og komponenter, tags, scener, mål, hjælpelinjer, sektionsplaner, lamper, importerede teksturer og visningen. Andre programmer ser den samme model som meshes, grupper, prototyper for komponenter, materialer, lamper og kameraer.

:::note
Hvis et andet program ændrer geometrien i en gruppe eller komponent, åbner ModelCraft den del som et mesh med ændringen bevaret og siger, hvor mange dele den læste sådan. En placering, der er flyttet eller slettet i et andet program, forbliver flyttet eller slettet.
:::

## Åbn eller importér andres USD

- {{ui:Åbn}} en `.usd`-, `.usda`-, `.usdc`- eller `.usdz`-fil for at starte en model ud fra den.
- {{ui:Importér}} en for at tilføje den til den åbne model. Træk de filer, den henviser til (andre lag, teksturer), sammen med den.

Meshes kommer ind med deres normaler, UV-koordinater og farver, delt geometri som komponenter, materialer som malingsfarver, lamper som lamper og kameraer som scener, i meter med Z opad, uanset filens enheder og op-akse.

## Ikke endnu

Animation, skeletter og MaterialX-nodegrafer læses eller skrives ikke som USD endnu. ModelCraft's egen animation og nodematerialer bevares i en USD-fil, den har gemt, så ModelCraft kan åbne den igen, men andre programmer ser dem ikke. Lag, en fil henviser til, som ModelCraft ikke kan læse (fx et MaterialX-dokument), udelades med en note.
