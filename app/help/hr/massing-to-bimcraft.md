---
title: Pošaljite volumen u BimCraft
summary: Predajte volumene modelirane guranjem i povlačenjem programu BimCraft kao opcije volumena, s etažama, tlocrtom, bruto površinom etaža i obujmom izračunatim iz svakog tijela.
keywords: volumen, masa, koncept, opcije, bimcraft, ifc, bim, guranje i povlačenje, etaže, katovi, bruto površina etaža, tlocrt, obujam, slanje, predaja, masa zgrade, faza 2
from: 73c51f3f
---

## Što ćete raditi

Pretvorite blokove koje ste modelirali guranjem i povlačenjem u opcije volumena koje BimCraft razumije, tako da koncept nastavlja kao model zgrade.

## Prije početka

Svaku masu napravite kao **grupu** ili **komponentu** i imenujte je. Svaka postaje jedna opcija. Slobodna geometrija se ne šalje.

## Slanje

1. Odaberite grupe za slanje. Ako ništa nije odabrano, idu sve grupe i komponente najviše razine.
2. Odaberite {{ui:Izvezi}}, zatim {{ui:Volumen za BimCraft…}}.
3. Upišite {{ui:Naziv skupa opcija}} i {{ui:Visina etaže}}.
4. Provjerite popis: etaže, tlocrt, bruto površinu etaža i obujam svake opcije.
5. Odaberite **Pošalji u BimCraft** da otvorite BimCraft u novoj kartici s opcijama, ili {{ui:Spremi kao IFC}} da preuzmete datoteku i sami je otvorite tamo.

U BimCraftu su opcije navedene pod „Opcije volumena u modelu“, gdje se jedna može postaviti kao trenutna opcija i razraditi u zidove i ploče.

## Kako tijelo postaje masa

- **Etaže** su visina tijela podijeljena s visinom etaže, zaokružene, i najmanje jedna. Etaže zatim dijele visinu tijela jednako, pa blok od 10 m uz etaže od 3 m ima 3 etaže od 3.33 m.
- **Površina etaže** je površina vlastitog vodoravnog presjeka tijela na razini te etaže. Blok koji se uvlači ima manje gornje etaže, a bruto površina etaža je njihov zbroj.
- **Tlocrt** je obris presjeka tik iznad baze tijela.
- **Obujam** je obujam samog tijela.

U IFC datoteci svaka opcija je zamjenski element zgrade (tlocrt podignut na visinu tijela) s jednim prostorom po etaži koji nosi bruto površinu te etaže. Sve opcije dijele jednu zgradu, s onoliko etaža koliko ima najviša opcija.

## Pojednostavljeni oblici

Obični uspravni blok šalje se točno kako je modeliran. Sve drugo se i dalje šalje, a popis kaže zašto je oblik pojednostavljen:

- **Etaže nisu sve veličine baze** (uvlači se ili nagiba): masa u BimCraftu je obris baze podignut na punu visinu, ali površine etaža i obujam su vlastiti tijela.
- **Tijelo nije zatvoreno**: etaže čiji se presjek ne može zatvoriti se ne mjere i broje se kao nula. Zatvorite tijelo ({{ui:Informacije o entitetu}} kaže „Puno tijelo: Da“) za potpune podatke.
- **Baza ima više od jednog obrisa**: za tlocrt se uzima najveći.

## Dobro je znati

- {{ui:IFC za BimCraft (.ifc)}} je drugi izvoz: šalje samo oblike i nazive, bez etaža i površina.
- Ništa se ne učitava. Datoteka se predaje kartici BimCraft na ovom računalu.
