---
title: Čuvanje, otvaranje i izvoz USD-a
summary: Sačuvaj ceo model kao USD (.usda, .usdc ili .usdz) bez gubitaka, otvori ga ponovo i uvezi USD scene iz drugih 3D programa.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, sačuvaj kao, izvoz, uvoz, sastavljanje scene, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD je format scene koji mnogi 3D, programi za renderovanje i archviz dele. ModelCraft ga piše i čita. `.modelcraft` ostaje format koji piše {{ui:Sačuvaj}}; USD je izbor u {{ui:Sačuvaj kao}}.

## Sačuvaj kao USD

1. Izaberi {{ui:Sačuvaj kao}} u grupi {{ui:Datoteka}} (ili pritisni {{key:Mod+Shift+S}}).
2. Izaberi format: {{ui:Tekst (.usda)}} (čitljiv, dobar za kontrolu verzija), {{ui:Binarno (.usdc)}} (najmanji i najbrži) ili {{ui:Paket (.usdz)}} (jedna datoteka sa teksturama unutra).
3. Datoteka se preuzima (u desktop aplikaciji biraš gde ide).

Isti izbori su u {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Ništa se ne gubi

Otvori USD datoteku koju je ModelCraft sačuvao i dobijaš model nazad tačno: površi sa njihovim rupama, meke i skrivene ivice, krive, grupe i komponente, oznake, scene, kote, vodilice, ravni preseka, svetiljke, uvezene teksture i pogled. Drugi programi vide isti model kao mreže, grupe, prototipove za komponente, materijale, svetiljke i kamere.

:::note
Ako neki drugi program promeni geometriju grupe ili komponente, ModelCraft otvara taj deo kao mrežu sa sačuvanom promenom i kaže koliko je delova tako pročitao. Postavljanje pomereno ili obrisano u drugom programu ostaje pomereno ili obrisano.
:::

## Otvori ili uvezi tuđi USD

- {{ui:Otvori}} `.usd`, `.usda`, `.usdc` ili `.usdz` datoteku da započneš model iz nje.
- {{ui:Uvezi}} jednu da je dodaš u otvoreni model. Prevuci datoteke na koje se ona poziva (druge slojeve, teksture) zajedno sa njom.

Mreže se uvoze sa normalama, UV koordinatama i bojama, deljena geometrija kao komponente, materijali kao boje za bojenje, svetiljke kao svetiljke, a kamere kao scene, u metrima i sa Z osom nagore, bez obzira na jedinice i osu nagore u datoteci.

## Još nije

Animacija, skeleti i MaterialX čvorovi još se ne čitaju niti pišu kao USD. ModelCraft-ove sopstvene animacije i čvorni materijali čuvaju se u USD datoteci koju je sačuvao, da bi ih ModelCraft ponovo otvorio, ali ih drugi programi ne vide. Slojevi na koje datoteka upućuje, a koje ModelCraft ne može da čita (na primer MaterialX dokument), izostavljaju se uz napomenu.
