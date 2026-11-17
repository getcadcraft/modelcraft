---
title: Shranjevanje, odpiranje in izvoz USD
summary: Shranite cel model kot USD (.usda, .usdc ali .usdz) brez izgube, ga znova odprite in uvozite USD prizore iz drugih 3D programov.
keywords: usd, usda, usdc, usdz, openusd, univerzalni opis prizorov, shrani kot, izvoz, uvoz, sestavljanje prizorov, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD je format prizorov, ki ga mnogi 3D, upodabljalni in archviz programi delijo. ModelCraft ga zapisuje in bere. `.modelcraft` ostane format, ki ga zapiše {{ui:Shrani}}; USD je izbira v {{ui:Shrani kot}}.

## Shranjevanje kot USD

1. Izberite {{ui:Shrani kot}} v skupini {{ui:Datoteka}} (ali pritisnite {{key:Mod+Shift+S}}).
2. Izberite format: {{ui:Besedilo (.usda)}} (berljivo, primerno za nadzor različic), {{ui:Binarno (.usdc)}} (najmanjše in najhitrejše) ali {{ui:Paket (.usdz)}} (ena datoteka s teksturami v njej).
3. Datoteka se prenese (v namizni aplikaciji izberete, kam gre).

Enake izbire so v {{ui:Izvozi}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nič se ne izgubi

Odprete datoteko USD, ki jo je shranil ModelCraft, in dobite model natanko nazaj: ploskve z luknjami, mehke in skrite robove, krivulje, skupine in komponente, oznake, prizore, kote, vodila, prerezne ravnine, svetilke, uvožene teksture in pogled. Drugi programi vidijo isti model kot mreže, skupine, prototipe za komponente, materiale, svetilke in kamere.

:::note
Če drug program spremeni geometrijo skupine ali komponente, ModelCraft ta del odpre kot mrežo s spremembo in pove, koliko delov je tako prebral. Postavitev, ki jo je drug program premaknil ali izbrisal, ostane premaknjena ali izbrisana.
:::

## Odprite ali uvozite tuj USD

- {{ui:Odpri}} datoteko `.usd`, `.usda`, `.usdc` ali `.usdz`, da začnete model iz nje.
- {{ui:Uvozi}} jo, da jo dodate odprtemu modelu. Povlecite tudi datoteke, na katere se sklicuje (druge sloje, teksture), skupaj z njo.

Mreže pridejo z normalami, koordinatami UV in barvami; skupna geometrija kot komponente, materiali kot barve za barvanje, svetilke kot svetilke in kamere kot prizori, v metrih z osjo Z navzgor ne glede na enote in os navzgor v datoteki.

## Še ne

Animacije, skeleti in vozliščni grafi MaterialX še niso prebrani ali zapisani kot USD. Lastne animacije in vozliščni materiali ModelCraft se ohranijo v datoteki USD, ki jo je shranil, da jo ModelCraft znova odpre, vendar jih drugi programi ne vidijo. Sloji, na katere se datoteka sklicuje, ki jih ModelCraft ne more prebrati (na primer dokument MaterialX), so izpuščeni z opombo.
