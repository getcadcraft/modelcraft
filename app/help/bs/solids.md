---
title: Alati za tijela: spajanje, oduzimanje, presjek
summary: Spojite zatvorene grupe i komponente u jednu, izrežite jednu iz druge ili zadržite samo ono što dijele.
keywords: tijelo, tijela, inspektor tijela, nije tijelo, popravi tijelo, rupa, slobodna ivica, naopako, spajanje, unija, spoji, stopi, oduzmi, razlika, izrezi, presjeci, presjek, bulova, vanjska ljuska
from: f35df1cc
---

Alati za tijela spajaju **tijela**: grupe i komponente čije površine zatvaraju zapreminu, pri čemu svaka ivica spaja tačno dvije površine. {{ui:Podaci o entitetu}} kaže {{ui:Čvrsto tijelo}}: {{ui:Da}} za jedno, i pokazuje njegovu zapreminu.

Nalaze se u meniju {{ui:Tijela}} u grupi {{ui:Organizuj}}.

## Kad nešto nije tijelo

Odaberite grupu ili komponentu. Kad nije tijelo, {{ui:Podaci o entitetu}} kaže zašto, na primjer "Nije tijelo: 4 ivice graniče s rupom · 1 slobodna ivica":

| Problem | Šta znači |
|---|---|
| Ivice graniče s rupom | Nedostaje površina |
| Ivice dijele tri ili više površina | Površina dijeli unutrašnjost, ili se dva oblika dodiruju duž ivice |
| Površine unutar oblika | Zid ostavljen unutar zapremine |
| Slobodne ivice | Linije koje ne ograničavaju nijednu površinu |
| Površine okrenute naopako | Njihove prednje strane okrenute unutra, nasuprot susjedima |

{{ui:Prikaži probleme}} ga otvara s tim ivicama i površinama odabranim, da ih vidite. {{ui:Popravi}} krpi jednostavne slučajeve u jednom koraku poništavanja: uklanja slobodne ivice i površine unutar oblika, okreće površine ispravno prema van i zatvara rupe čiji je obod ravan. Sve što ne može bezbjedno popraviti (rupa koja nije ravna, ivica koju dijeli mnogo površina) ostavlja vama i kaže šta je ostalo.

## Spoji

1. Odaberite dva ili više tijela (kliknite jedno, pa {{key:Ctrl}}+klik na ostala).
2. {{ui:Tijela}} › {{ui:Spoji}}.

Postaju jedno tijelo, u jednoj grupi. Tamo gdje su se preklapala, površine unutra nestaju.

## Oduzmi

1. {{ui:Tijela}} › {{ui:Oduzmi}}.
2. Kliknite tijelo koje treba **oduzeti** (alat za rezanje).
3. Kliknite tijelo za **rezanje**.

Ono što ostane od drugog tijela ostaje; alat za rezanje se potroši. Na primjer, da napravite rupu kroz blok, nacrtajte stub kroz njega, napravite stub grupom, pa oduzmite stub od bloka.

## Presjek

Odaberite dva ili više tijela, pa {{ui:Tijela}} › {{ui:Presijeci}}. Zadržava se samo dio koji svi dijele.

## Važno

- Rezultat je nova grupa. Zadržava ime, boju i oznaku prvog tijela (za Oduzmi: onog koji ste izrezali). Boje obojene na njegovim površinama se ne čuvaju.
- Ravne strane rezultata su pojedinačne površine. Zaobljene strane ispadaju kao ravne fasete kojima su nacrtane.
- Ako grupa ili komponenta nije tijelo, alat kaže koja je i ne mijenja ništa. Potražite nedostajuću površinu ili slobodnu površinu unutra.
- Unutar otvorene grupe alati rade nad grupama i komponentama u toj grupi.
- Svaki alat je jedan korak poništavanja.
- Prvi put kad koristite alat za tijela, njegov motor (manifold-3d) se učitava, što može potrajati.
