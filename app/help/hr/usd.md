---
title: Spremanje, otvaranje i izvoz USD-a
summary: Spremite cijeli model kao USD (.usda, .usdc ili .usdz) bez gubitka, ponovno ga otvorite i uvezite USD scene iz drugih 3D programa.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, spremi kao, izvoz, uvoz, sastavljanje scene, archviz, openpbr, materialx, paket
from: 73d299f9
---

USD je format scene koji dijeli mnogo 3D, renderskih i archviz programa. ModelCraft ga piše i čita. `.modelcraft` ostaje format koji piše {{ui:Spremi}}; USD je izbor u {{ui:Spremi kao}}.

## Spremanje kao USD

1. Odaberite {{ui:Spremi kao}} u grupi {{ui:Datoteka}} (ili pritisnite {{key:Mod+Shift+S}}).
2. Odaberite format: {{ui:Tekst (.usda)}} (čitljiv, pogodan za kontrolu verzija), {{ui:Binarno (.usdc)}} (najmanji i najbrži) ili {{ui:Paket (.usdz)}} (jedna datoteka s teksturama unutra).
3. Datoteka se preuzima (u aplikaciji za računalo birate gdje se sprema).

Isti izbori nalaze se u {{ui:Izvezi}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Ništa se ne gubi

Otvorite USD datoteku koju je ModelCraft spremio i dobit ćete model točno natrag: plohe s njihovim rupama, meke i skrivene bridove, krivulje, grupe i komponente, oznake, scene, kote, pomoćne linije, ravnine presjeka, svjetiljke, uvezene teksture i pogled. Drugi programi vide isti model kao mreže, grupe, prototipove za komponente, materijale, svjetiljke i kamere.

:::note
Ako drugi program promijeni geometriju grupe ili komponente, ModelCraft otvara taj dio kao mrežu s očuvanom promjenom i navodi koliko je dijelova tako pročitao. Položaj pomaknut ili izbrisan u drugom programu ostaje pomaknut ili izbrisan.
:::

## Otvaranje ili uvoz tuđeg USD-a

- {{ui:Otvori}} datoteku `.usd`, `.usda`, `.usdc` ili `.usdz` da započnete model iz nje.
- {{ui:Uvezi}} jednu da je dodate otvorenom modelu. Spustite datoteke na koje se poziva (drugi slojevi, teksture) zajedno s njom.

Mreže se uvoze s normalama, UV koordinatama i bojama, zajednička geometrija kao komponente, materijali kao boje za bojanje, svjetiljke kao svjetiljke i kamere kao scene, u metrima s Z prema gore, bez obzira na jedinice datoteke i os prema gore.

## Još nije

Animacija, kosturi i MaterialX grafovi čvorova još se ne čitaju niti pišu kao USD. Vlastita animacija i čvorni materijali ModelCraft-a čuvaju se u USD datoteci koju je spremio, da je ModelCraft ponovno otvori, ali ih drugi programi ne vide. Slojevi na koje datoteka upućuje, a koje ModelCraft ne može čitati (na primjer MaterialX dokument), izostavljaju se uz napomenu.
