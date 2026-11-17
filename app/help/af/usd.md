---
title: Stoor, maak oop en voer USD uit
summary: Stoor die hele model as USD (.usda, .usdc of .usdz) sonder enige verlies, maak dit weer oop, en voer USD-tonele uit ander 3D-programme in.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, stoor as, uitvoer, invoer, toneelsamestelling, archviz, openpbr, materialx, pakket
from: 73d299f9
---

USD is 'n tonelformaat wat baie 3D-, weergawe- en argitektuurvisualiseringsprogramme deel. ModelCraft skryf en lees dit. `.modelcraft` bly die formaat wat {{ui:Save}} skryf; USD is 'n keuse in {{ui:Save as}}.

## Stoor as USD

1. Kies {{ui:Save as}} in die {{ui:File}}-groep (of druk {{key:Mod+Shift+S}}).
2. Kies die formaat: {{ui:Text (.usda)}} (leesbaar, goed vir weergawebeheer), {{ui:Binary (.usdc)}} (kleinste en vinnigste) of {{ui:Package (.usdz)}} (een lêer met die teksture binne-in).
3. Die lêer laai af (in die rekenaarprogram kies jy waar dit gaan).

Dieselfde keuses is in {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Niks gaan verlore nie

Maak 'n USD-lêer oop wat ModelCraft gestoor het, en jy kry die model presies terug: vlakke met hul gate, sagte en versteekte rande, kurwes, groepe en komponente, etikette, tonele, afmetings, riglyne, snitvlakke, lampe, ingevoerde teksture en die aansig. Ander programme sien dieselfde model as netwerke, groepe, prototipes vir komponente, materiale, lampe en kameras.

:::note
As 'n ander program die geometrie van 'n groep of komponent verander, maak ModelCraft daardie deel oop as 'n netwerk met die verandering behou, en sê hoeveel dele dit so gelees het. 'n Plasing wat in 'n ander program geskuif of uitgevee is, bly geskuif of uitgevee.
:::

## Maak iemand anders se USD oop, of voer dit in

- {{ui:Open}} 'n `.usd`-, `.usda`-, `.usdc`- of `.usdz`-lêer om 'n model daaruit te begin.
- {{ui:Import}} een om dit by die oop model te voeg. Sit die lêers wat dit verwys (ander lae, teksture) saam met dit neer.

Netwerke kom in met hul normale, UV-koördinate en kleure, gedeelde geometrie as komponente, materiale as verfkleure, lampe as lampe en kameras as tonele, in meter met Z op, ongeag die lêer se eenhede en opwaartse as.

## Nog nie

Animasie, skelette en MaterialX-nodegrafieke word nog nie as USD gelees of geskryf nie. ModelCraft se eie animasie en nodemateriale word in 'n USD-lêer wat dit gestoor het, bewaar sodat ModelCraft dit weer kan oopmaak, maar ander programme sien dit nie. Lae waarna 'n lêer verwys wat ModelCraft nie kan lees nie (byvoorbeeld 'n MaterialX-dokument), word met 'n nota weggelaat.
