---
title: Sledovat cestu: tažení plochy po dráze
summary: Vytvořte potrubí, kabely, madla, lišty a kroužky tažením plochy po hranách, obloucích nebo křivce.
keywords: sledovat cestu, tažení, dráha, potrubí, kabel, trubka, madlo, lišta, okap, kroužek, torus, soustružení, vytáhnout podél
from: ec7b3839
---

{{ui:Sledovat cestu}} posune plochu po dráze a vytvoří těleso, kterým projde. Plocha si zachová svůj tvar a zůstane kolmá k dráze; v každém rohu dráhy se kusy setkají na čistém pokosu.

## Vytvoření kabelu

1. Nakreslete dráhu: {{ui:Křivka}} procházející body, kterými kabel vede (může stoupat a klesat), nebo {{ui:Úsečka}} a {{ui:Oblouk}} spojené konec na konec.
2. Na začátku dráhy nakreslete průřez kabelu: malou {{ui:Kružnice}} přes dráhu. Začněte kružnici v koncovém bodě dráhy a otočte ji, aby směřovala podél dráhy; nebo ji nakreslete na ploše, která tam dráhu protíná.
3. Vyberte dráhu (jedno kliknutí vybere celou křivku nebo oblouk; {{key:Ctrl}}+kliknutí přidá další hrany).
4. Klikněte na {{ui:Sledovat cestu}} ve skupině {{ui:Upravit}}, pak klikněte na kružnici.

Trubka je uzavřené těleso s hladkými (měkkými) stranami.

## Bez výběru dráhy předem

Klikněte na {{ui:Sledovat cestu}}, klikněte na plochu a pak na libovolnou hranu dráhy. Dráha je řetěz hran procházející touto hranou až k místu, kde se setkají tři nebo více hran.

## Co je dobré vědět

- **Uzavřené dráhy** (kružnice, uzavřená křivka, obrys obdélníku) vytvoří kroužek: plocha se spotřebuje a kroužek se uzavře sám do sebe. Nakreslete kružnici na zemi jako dráhu a malou kružnici stojící přes ni pro donut.
- **Mimo dráhu:** plocha se nemusí dotýkat dráhy. Profil nakreslený vedle dráhy se po ní protáhne vedle ní, jako lišta podél horní hrany zdi.
- **Dráha se nesmí větvit** a musí být jeden souvislý řetěz. ModelCraft to oznámí, když tomu tak není.
- **Plocha ležící podél dráhy** (ve stejné rovině jako první hrana dráhy) nejde protáhnout: otočte ji tak, aby protínala dráhu.
- Je to jeden krok zpět.
