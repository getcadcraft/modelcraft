---
title: Komponente, ki se raztegujejo
summary: Naredite eno kopijo komponente širše, globlje ali višje, medtem ko njeni deli ohranijo svoje velikosti: daljšo mizo z enakimi nogami, višjo knjižno polico z razmaknjenimi policami, ograjo, katere stebrički se ponavljajo.
keywords: dinamična komponenta, raztezanje, spreminjanje velikosti komponente, parametrično, poimenovane velikosti, ponovitev, razpostavitev, noge, police, ograja, pravila, spremenljivke
from: b4c40f43
---

Spreminjanje merila komponente poveča vse v njej, tudi noge in letve. **Raztegni to kopijo** spremeni širino, globino ali višino komponente, medtem ko vsak del upošteva pravilo: mizna plošča se poveča, njene noge pa ohranijo debelino in ostanejo na koncih.

Deluje pri komponentah, sestavljenih iz delov, to so skupine ali komponente znotraj komponente, kot so vsi predmeti v [začetni knjižnici](topic:starter).

## Raztegni kopijo

1. Izberite komponento.
2. V {{ui:Podatki o entiteti}} kliknite {{ui:Raztegni to kopijo…}}.
3. Vnesite novo {{ui:Širina (rdeča)}}, {{ui:Globina (zelena)}} in {{ui:Višina (modra)}} ter kliknite {{ui:Raztezek}}.

Spremeni se samo ta kopija: postane lastna komponenta, ki si zapomni izvirnik, iz katerega je nastala. Raztegnite jo kadarkoli znova; izračuna se iz izvirnika, zato se nič ne odmakne. Druge kopije izvirnika ostanejo take, kot so bile.

## Pravila

Odprite komponento (dvokliknite jo) in izberite enega od njenih delov. {{ui:Podatki o entiteti}} prikaže {{ui:Ko se komponenta razteguje}}, s pravilom vzdolž rdeče, zelene in modre:

| Pravilo | Kaj naredi del | Primer |
|---|---|---|
| {{ui:Raztezek}} | Raste skupaj s komponento; razdalji do obeh strani ostaneta enaki | Mizna plošča |
| {{ui:Ostane na začetku}} / {{ui:Ostane na koncu}} | Ohrani svojo velikost in razdaljo do te strani | Noge |
| {{ui:Premakne se sorazmerno}} | Ohrani velikost; njegova sredina se premakne sorazmerno | Police, ročaj vrat |
| {{ui:Merilo se spremeni sorazmerno}} | Sorazmerno se spremenita njegov položaj in velikost | Stopnice stopnišča |
| {{ui:Ponovitev}} | Kopije njega, vsakih ({{ui:Vsakih}}), od mesta začetka do nasprotne strani | Stebrički ograje |

{{ui:Samodejno}} (privzeto) izračuna pravilo in pokaže, katero: {{ui:Raztezek}}, če del sega čez celo komponento; {{ui:Premakne se sorazmerno}}, če je približno na sredini; sicer ostane na strani, ki je bližje.

## Dobro vedeti

- Oblike delov so skupne, zato je raztegnjena kopija lahka. Urejanje dela spremeni ta del v vseh kopijah.
- Raztegnjena kopija ne sledi poznejšim spremembam pravil ali razporeditve izvirnika: raztegnite jo znova, da jih prevzame.
- Ploskve, narisane prosto v komponenti (ne v delu), ohranijo svojo velikost; če želite, da jim sledijo, jih naredite za del.
- Pravila in to, iz česa je bila vsaka kopija raztegnjena, se shranijo v datoteko ModelCraft.
