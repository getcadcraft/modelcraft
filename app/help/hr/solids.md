---
title: Alati za puna tijela: unija, oduzimanje, presjek
summary: Spojite zatvorene grupe i komponente u jednu, izrežite jednu iz druge ili zadržite samo ono što dijele.
keywords: puno tijelo, puna tijela, inspektor punih tijela, nije puno tijelo, popravi puno tijelo, rupa, rubni brid, naopako, unija, spoji, kombiniraj, objedini, oduzmi, razlika, izreži, presjek, boolean, vanjska ljuska
from: f35df1cc
---

Alati za puna tijela spajaju **puna tijela**: grupe i komponente čije plohe zatvaraju volumen, pri čemu svaki brid spaja točno dvije plohe. {{ui:Informacije o entitetu}} kazuje {{ui:Puno tijelo}}: {{ui:Da}} za jedno, i prikazuje njegov volumen.

Nalaze se u izborniku {{ui:Tijela}} u grupi {{ui:Organizacija}}.

## Kad nešto nije puno tijelo

Odaberite grupu ili komponentu. Kad nije puno tijelo, {{ui:Informacije o entitetu}} kazuje zašto, primjerice „Nije puno tijelo: 4 brida graniče s rupom · 1 slobodni brid“:

| Problem | Što znači |
|---|---|
| Bridovi graniče s rupom | Nedostaje ploha |
| Bridovi zajednički trima ili više ploha | Ploha dijeli unutrašnjost ili se dva oblika dodiruju uzduž brida |
| Plohe unutar oblika | Zid je ostavljen unutar volumena |
| Slobodni bridovi | Linije koje ne omeđuju nijednu plohu |
| Plohe okrenute naopako | Njihova prednja strana okrenuta je prema unutra, suprotno od susjeda |

{{ui:Prikaži probleme}} ga otvara s tim bridovima i plohama odabranima, da ih vidite. {{ui:Popravi}} popravlja jednostavne slučajeve u jednom koraku poništavanja: uklanja slobodne bridove i plohe unutar oblika, okreće plohe ispravno prema van i zatvara rupe čiji rub leži ravno. Što ne može sigurno popraviti (rupa koja nije ravna, brid zajednički mnogim plohama) ostavlja vama i kaže što je ostalo.

## Unija

1. Odaberite dva ili više punih tijela (kliknite jedno, {{key:Ctrl}}+klik na ostala).
2. {{ui:Tijela}} › {{ui:Unija}}.

Postaju jedno puno tijelo, u jednoj grupi. Tamo gdje su se preklapala, unutarnje plohe su nestale.

## Oduzimanje

1. {{ui:Tijela}} › {{ui:Oduzmi}}.
2. Kliknite puno tijelo za **oduzimanje** (rezač).
3. Kliknite puno tijelo za **rezanje**.

Ono što ostane od drugog punog tijela ostaje; rezač je potrošen. Primjerice, da napravite rupu kroz blok, nacrtajte stup kroz njega, napravite od stupa grupu, pa oduzmite stup od bloka.

## Presjek

Odaberite dva ili više punih tijela, zatim {{ui:Tijela}} › {{ui:Presjek}}. Zadržava se samo dio koji svi dijele.

## Što treba znati

- Rezultat je nova grupa. Zadržava naziv, boju i oznaku prvog punog tijela (za Oduzimanje: ono koje ste rezali). Boje obojene na njegovim plohama se ne zadržavaju.
- Ravne strane rezultata su pojedinačne plohe. Zaobljene strane izlaze kao ravne facete kojima su nacrtane.
- Ako grupa ili komponenta nije puno tijelo, alat kaže koja je i ništa ne mijenja. Potražite nedostajuću plohu ili slobodnu plohu unutar nje.
- Unutar otvorene grupe alati rade na grupama i komponentama u toj grupi.
- Svaki alat je jedan korak poništavanja.
- Prvi put kad upotrijebite alat za puno tijelo, učitava se njegov motor (manifold-3d), što može potrajati.
