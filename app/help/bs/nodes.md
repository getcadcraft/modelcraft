---
title: Čvorovi: pravljenje modela povezivanjem
summary: Povezuj brojeve u tačke, tačke u krive, krive u površi. Promijeni broj i sve nizvodno se ponovo gradi. Svaki čvor je ujedno i red CraftScript-a, a graf se čuva u datoteci.
keywords: čvorovi, uređivač čvorova, vizuelno skriptiranje, parametarski, graf, žice, portovi, slobodna forma, freeform, nurbs, loft, ekstrudiraj, rotiraj, krug, kriva, površ, niz, raspon, slučajno, lista, skripta, craftscript, grasshopper
from: 9c8e254f
---

Uređivač **Čvorovi** gradi geometriju povezivanjem kutija. Svaka kutija (čvor) obavlja mali posao: pravi broj, tačku, krug, loft. Rezultat jednog povezuješ s ulazom sljedećeg, a model prati kada promijeniš broj na početku.

Otvori ga iz desnog panela: {{ui:Nodes}} › {{ui:Nodes…}}. Datoteka koja već ima graf otvara ga sama. To je prozor iznad 3D pogleda: povuci njegovu naslovnu traku da ga pomjeriš, a ugao da mu promijeniš veličinu.

## Povezivanje

1. Odaberi čvor s liste lijevo (ukucaj u polje za pretragu da suziš izbor; {{key:Enter}} dodaje prvi pogodak). Pojavljuje se na sredini platna.
2. Prevuci s okrugle tačke **izlaza** s desne strane jednog čvora na okruglu tačku **ulaza** s lijeve strane drugog. Tačka postaje zelena kada se uklapa, a crvena kada se ne uklapa; zadrži pokazivač na njoj da vidiš razlog.
3. Ulaz bez povezivanja prikazuje polje za upisanu vrijednost. Upiši broj i pritisni <kbd>Tab</kbd>: rezultat se ponovo gradi.
4. Mali krug u naslovnoj traci čvora je njegovo **oko**. Čvor s uključenim okom crta se u 3D pogledu: kao linije za krive, zasjenjeno za površi, kao tačke za tačke.

Prevuci čvor za naslovnu traku. Prevuci pozadinu da pomjeriš pogled, a točkić miša za zumiranje. <kbd>Delete</kbd> briše odabrani čvor. {{ui:Tidy}} raspoređuje čvorove u kolone, {{ui:Fit}} ih sve dovodi u vidno polje, a {{ui:Undo}} i {{ui:Redo}} kreću se kroz izmjene.

## Tipovi i jedinice

Portovi imaju tip: broj, da/ne, tačka, vektor, kriva, površ, mreža, tijelo ili „geometrija” za bilo koji od tih. Tačka može napajati vektorski ulaz i obrnuto. Brojevi nose jedinicu: **dužina** je u milimetrima, a **ugao** u stepenima. Dužina ne može napajati ugao, a dužina pomnožena dužinom (površina) se odbija, pa se pogrešna veza zaustavi u trenutku kada je praviš.

Kvadratna tačka je **lista**. Kada lista dođe do ulaza s jednom vrijednošću, čvor se izvršava jednom za svaku stavku, a rezultat postaje lista. Kraća lista ponavlja svoju posljednju stavku. Na primjer, **Serija** visina povezana na **Pomjeri** pravi slog kopija.

## Tijela i Bulove operacije kao čvorovi

Grupa **Tijela** pravi zatvorena tijela od istih tačnih površi kao panel Površine: **Tijelo kvadra**, **Tijelo valjka** i **Tijelo kugle** (veličine u mm), **Spoji**, **Oduzmi** i **Presijeci** (drugo tijelo se uzima iz prvog; tolerancija je koliko trouglovi tijelo-motora smiju odstupati od tačnih površi), **Zaobljenje između ploha** (plohe po njihovom broju u tijelu, 1 za prvu; poluprečnik i, iznad 0, poluprečnik na kraju), **Zapremina tijela** (mm³) i **Tijelo u mrežu** (da se vidi ili pretvori u model). Tijelo ima svoj tip porta: tačka ili broj ne mogu se povezati na ulaz tijela, a tačka ostaje crvena. Čvorovi za Bulove operacije i zaobljenje koriste sopstveni motor tijela programa, koji se učitava prvi put kada se uređivač otvori.

## Greške

Čvor koji ne može obaviti svoj posao kaže zašto, ispod svog naziva, crveno („Poluprečnik mora biti veći od nule.”), a čvorovi nakon njega čekaju. Ista poruka je Problem u panelu Problemi, tako da je odatle možeš naći.

## Svaki čvor je red skripte

Pritisni {{ui:Script}} da vidiš graf kao CraftScript: jedan red po čvoru, na primjer `n3 = nd_circle(n2, n1, [0 0 1]);`. Izmijeni tekst i pritisni {{ui:Make the graph from this script}} da ga vratiš kao graf. Iste `nd_` funkcije rade i u CraftScript-u u PartCraft-u, pa se graf tamo može pokrenuti, ponavljati ili testirati. Slučajni brojevi uvijek primaju **seme**, tako da isti graf daje isti rezultat na svakom računaru.

## Sačuvano uz datoteku

Graf se čuva u datoteci modela. Čvorovi prave sopstvene krive, površi i mreže: ne mijenjaju plohe modela dok to ne zatražiš.

## Pretvori u model

Uključi oko čvora koji pravi površ ili mrežu, pa pritisni {{ui:Bake to model}} u prozoru Čvorovi. Svaka prikazana površ ili mreža postaje grupa ploha u modelu, u metrima, i može se uređivati kao i svaki drugi dio. To je jedan korak poništavanja. Graf ostaje, ali kopija ga više ne prati: promijeni broj i ponovo pretvori za novu. Tačke i krive nisu tijela, pa se izostavljaju, a poruka kaže koliko ih je.
