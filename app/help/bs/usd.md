---
title: Spasi, otvori i izvezi USD
summary: Spasi cijeli model kao USD (.usda, .usdc ili .usdz) bez gubitaka, ponovo ga otvori i uvezi USD scene iz drugih 3D programa.
keywords: usd, usda, usdc, usdz, openusd, univerzalni opis scene, spasi kao, izvoz, uvoz, sastavljanje scene, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD je format scene koji dijele mnogi 3D, renderovanje i archviz programi. ModelCraft ga piše i čita. `.modelcraft` ostaje format koji piše {{ui:Spasi}}; USD je izbor u {{ui:Spasi kao}}.

## Spasi kao USD

1. Izaberi {{ui:Spasi kao}} u grupi {{ui:Datoteka}} (ili pritisni {{key:Mod+Shift+S}}).
2. Odaberi format: {{ui:Tekst (.usda)}} (čitljiv, dobar za kontrolu verzija), {{ui:Binarni (.usdc)}} (najmanji i najbrži) ili {{ui:Paket (.usdz)}} (jedna datoteka sa teksturama unutra).
3. Datoteka se preuzima (u desktop aplikaciji biraš gdje ide).

Isti izbori su u {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Ništa se ne gubi

Otvori USD datoteku koju je ModelCraft spasio i dobijaš model tačno nazad: površine sa svojim rupama, meke i skrivene ivice, krive, grupe i komponente, oznake, scene, kote, vodilice, ravni presjeka, svjetla, uvezene teksture i prikaz. Drugi programi vide isti model kao mreže, grupe, prototipove za komponente, materijale, svjetla i kamere.

:::note
Ako drugi program promijeni geometriju grupe ili komponente, ModelCraft otvara taj dio kao mrežu sa sačuvanom promjenom i kaže koliko je dijelova tako pročitao. Smještaj pomjeren ili izbrisan u drugom programu ostaje pomjeren ili izbrisan.
:::

## Otvori ili uvezi tuđi USD

- {{ui:Otvori}} `.usd`, `.usda`, `.usdc` ili `.usdz` datoteku da počneš model iz nje.
- {{ui:Uvezi}} jednu da je dodaš u otvoreni model. Prevuci datoteke na koje se ona poziva (ostale slojeve, teksture) zajedno s njom.

Mreže se uvoze sa svojim normalama, UV koordinatama i bojama, zajednička geometrija kao komponente, materijali kao boje, svjetla kao svjetla i kamere kao scene, u metrima s Z prema gore, bez obzira na jedinice datoteke i osu gore.

## Još nije podržano

Animacija, skeleti i MaterialX grafovi čvorova se još ne čitaju niti pišu kao USD. ModelCraftova vlastita animacija i materijali čvorova čuvaju se u USD datoteci koju je spasio, da je ModelCraft ponovo otvori, ali ih drugi programi ne vide. Slojevi na koje datoteka upućuje, a koje ModelCraft ne može čitati (na primjer MaterialX dokument), izostavljaju se uz napomenu.
