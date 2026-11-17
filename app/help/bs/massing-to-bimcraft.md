---
title: Pošalji masu u BimCraft
summary: Predaj push/pull mase u BimCraft kao opcije mase, sa izračunatim spratovima, tlocrtom, bruto površinom i zapreminom iz svakog tijela.
keywords: masa, mase, koncept, opcije, bimcraft, ifc, bim, guraj-povuci, spratovi, bruto površina, tlocrt, zapremina, pošalji, predaj, masa zgrade, faza 2
from: 73c51f3f
---

## Šta ćeš uraditi

Pretvori blokove koje si modelirao push/pull-om u opcije mase koje BimCraft razumije, da koncept nastavi kao model zgrade.

## Prije nego počneš

Napravi svaku masu **grupom** ili **komponentom** i daj joj naziv. Svaka postaje jedna opcija. Labava geometrija se ne šalje.

## Pošalji

1. Izaberi grupe za slanje. Bez odabira, idu sve grupe i komponente najvišeg nivoa.
2. Izaberi {{ui:Izvezi}}, pa {{ui:Masa u BimCraft…}}.
3. Upiši {{ui:Naziv skupa varijanti}} i {{ui:Visina sprata}}.
4. Provjeri spisak: spratove, tlocrt, bruto površinu i zapreminu svake opcije.
5. Izaberi **Pošalji u BimCraft** da otvoriš BimCraft u novoj kartici sa opcijama, ili {{ui:Spasi kao IFC}} da preuzmeš datoteku i sam je otvoriš tamo.

U BimCraftu su opcije navedene pod "Opcije mase u modelu", gdje se jedna može postaviti kao tekuća opcija i razraditi u zidove i spratove.

## Kako se tijelo pretvara u masu

- **Spratovi** su visina tijela podijeljena visinom sprata, zaokružena, i najmanje jedan. Spratovi zatim dijele visinu tijela podjednako, pa blok od 10 m sa spratovima od 3 m ima 3 sprata od 3.33 m.
- **Površina sprata** je površina horizontalnog presjeka tijela na nivou tog sprata. Blok koji se uvlači ima manje gornje spratove, a bruto površina je njihov zbir.
- **Tlocrt** je obris presjeka odmah iznad baze tijela.
- **Zapremina** je zapremina samog tijela.

U IFC datoteci je svaka opcija building element proxy (tlocrt podignut na visinu tijela) sa jednim prostorom po spratu koji nosi bruto površinu tog sprata. Sve opcije dijele jednu zgradu, sa onoliko spratova koliko ima najviša opcija.

## Pojednostavljeni oblici

Običan uspravni blok ide tačno kako je modeliran. Sve ostalo se i dalje šalje, a spisak kaže zašto je oblik pojednostavljen:

- **Spratovi nisu svi veličine baze** (blok se uvlači ili je nakošen): masa u BimCraftu je obris baze podignut do pune visine, ali površine spratova i zapremina su tijela same.
- **Tijelo nije zatvoreno**: spratovi čiji presjek ne može da se zatvori se ne mjere i broje se kao ništa. Zatvori tijelo ({{ui:Podaci o entitetu}} kaže "Tijelo: Da") za potpune podatke.
- **Baza ima više obrisa**: za tlocrt se koristi najveći.

## Dobro je znati

- {{ui:IFC za BimCraft (.ifc)}} je drugi izvoz: šalje samo oblike i nazive, bez spratova i površina.
- Ništa se ne šalje na internet. Datoteka se predaje kartici BimCraft na ovom računaru.
