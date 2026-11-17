---
title: Pošalji masu u BimCraft
summary: Predaj masovne modele guraj-povuci BimCraft-u kao opcije mase, sa spratovima, osnovom, bruto površinom poda i zapreminom izračunatim iz svakog tela.
keywords: masa, mase, koncept, opcije, bimcraft, ifc, bim, guraj povuci, spratovi, etaže, bruto površina poda, osnova, zapremina, slanje, predaja, masa zgrade, faza 2
from: 73c51f3f
---

## Šta ćete uraditi

Pretvorite blokove koje ste modelirali guraj-povuci u opcije mase koje BimCraft razume, pa koncept nastavlja kao model zgrade.

## Pre početka

Svaka masa treba da bude **grupa** ili **komponenta**, i treba da ima ime. Svaka postaje jedna opcija. Slobodna geometrija se ne šalje.

## Slanje

1. Izaberite grupe za slanje. Bez izbora, idu sve grupe i komponente najvišeg nivoa.
2. Izaberite {{ui:Izvezi}}, zatim {{ui:Masa u BimCraft…}}.
3. Ukucajte {{ui:Naziv skupa opcija}} i {{ui:Visina sprata}}.
4. Proverite spisak: spratove, osnovu, bruto površinu poda i zapreminu svake opcije.
5. Izaberite **Pošalji u BimCraft** da otvorite BimCraft u novoj kartici sa opcijama, ili {{ui:Sačuvaj kao IFC}} da preuzmete datoteku i sami je otvorite tamo.

U BimCraft-u su opcije navedene pod „Opcije mase u modelu“, gde se jedna može postaviti kao tekuća opcija i razraditi u zidove i podove.

## Kako telo postaje masa

- **Spratovi** su visina tela podeljena visinom sprata, zaokružena, i najmanje jedan. Spratovi zatim dele visinu tela jednako, pa blok od 10 m sa spratovima od 3 m ima 3 sprata od 3.33 m.
- **Površina sprata** je površina sopstvenog horizontalnog preseka tela na nivou tog sprata. Blok koji se uvlači ima manje gornje spratove, a bruto površina poda je njihov zbir.
- **Osnova** je obrub preseka tik iznad baze tela.
- **Zapremina** je sopstvena zapremina tela.

U IFC datoteci je svaka opcija element zgrade tipa proxy (osnova podignuta do visine tela) sa jednim prostorom po spratu koji nosi bruto površinu sprata. Sve opcije dele jednu zgradu, sa onoliko spratova koliko ima najviša opcija.

## Pojednostavljeni oblici

Običan uspravan blok ide tačno kako je modeliran. Sve ostalo se i dalje šalje, a spisak kaže zašto je oblik pojednostavljen:

- **Spratovi nisu svi iste veličine kao osnova** (telo se uvlači ili je nagnuto): masa u BimCraft-u je obrub osnove podignut na punu visinu, ali površine spratova i zapremina su sopstvene vrednosti tela.
- **Telo nije zatvoreno**: spratovi čiji presek ne može da se zatvori se ne mere i računaju se kao nula. Zatvorite telo ({{ui:Podaci o entitetu}} kaže „Puno telo: Da“) za pune podatke.
- **Osnova ima više od jednog obruba**: koristi se najveći kao osnova.

## Dobro je znati

- {{ui:IFC za BimCraft (.ifc)}} je drugačiji izvoz: šalje samo oblike i imena, bez spratova i površina.
- Ništa se ne otprema. Datoteka se predaje kartici BimCraft-a na ovom računaru.
