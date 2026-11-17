---
title: Alati za čvrsta tela: spoj, oduzimanje, presek
summary: Spoji zatvorene grupe i komponente u jednu, izreži jednu iz druge ili zadrži samo ono što dele.
keywords: čvrsto telo, čvrsta tela, inspektor čvrstih tela, nije čvrsto telo, popravi čvrsto telo, rupa, slobodna ivica, naopako, spoj, pridruži, kombinuj, spoji, oduzmi, razlika, izreži, rupa, presek, bulova, spoljna ljuska
from: f35df1cc
---

Alati za čvrsta tela spajaju **čvrsta tela**: grupe i komponente čije površine zatvaraju zapreminu, pri čemu svaka ivica spaja tačno dve površine. {{ui:Podaci o entitetu}} kaže {{ui:Puno telo}}: {{ui:Da}} za jedno, i prikazuje njegovu zapreminu.

Nalaze se u meniju {{ui:Čvrsta tela}} u grupi {{ui:Organizacija}}.

## Kad nešto nije čvrsto telo

Izaberi grupu ili komponentu. Kad nije čvrsto telo, {{ui:Podaci o entitetu}} kaže zašto, na primer „Nije čvrsto telo: 4 ivice graniče sa rupom · 1 slobodna ivica“:

| Problem | Šta znači |
|---|---|
| Ivice graniče sa rupom | Površina nedostaje |
| Ivice koje dele tri površine ili više | Površina deli unutrašnjost, ili se dva oblika dodiruju duž ivice |
| Površine unutar oblika | Zid ostavljen unutar zapremine |
| Slobodne ivice | Linije koje ne ograničavaju nijednu površinu |
| Površine okrenute naopako | Njihove prednje strane okrenute unutra, nasuprot susedima |

{{ui:Prikaži probleme}} ga otvara sa tim ivicama i površinama izabranim, da ih vidiš. {{ui:Popravi}} popravlja jednostavne slučajeve u jednom koraku opozivanja: uklanja slobodne ivice i površine unutar oblika, okreće površine na pravu stranu i zatvara rupe čiji je obod ravan. Sve što ne može bezbedno da popravi (rupa koja nije ravna, ivica koju deli mnogo površina) ostavlja tebi i kaže šta je ostalo.

## Spoj

1. Izaberi dva ili više tela (klikni jedno, {{key:Ctrl}}+klik na ostala).
2. {{ui:Čvrsta tela}} › {{ui:Spoj}}.

Postaju jedno telo, u jednoj grupi. Tamo gde su se preklapala, površine unutra nestaju.

## Oduzimanje

1. {{ui:Čvrsta tela}} › {{ui:Oduzmi}}.
2. Klikni telo koje se **oduzima** (alat za rezanje).
3. Klikni telo koje se **reže**.

Ono što ostane od drugog tela ostaje; alat za rezanje se troši. Na primer, da napraviš rupu kroz blok, nacrtaj stub kroz njega, napravi stub grupom, pa oduzmi stub od bloka.

## Presek

Izaberi dva ili više tela, pa {{ui:Čvrsta tela}} › {{ui:Presek}}. Zadržava se samo deo koji svi dele.

## Važno znati

- Rezultat je nova grupa. Zadržava ime, boju i oznaku prvog tela (kod oduzimanja: onoga koji si isekao). Boje nanete na njegove površine se ne čuvaju.
- Ravne strane rezultata su pojedinačne površine. Zaobljene strane dolaze kao ravne fasete kojima su nacrtane.
- Ako grupa ili komponenta nije čvrsto telo, alat kaže koja je i ništa ne menja. Traži nedostajuću površinu ili površinu koja strši unutra.
- Unutar otvorene grupe alati rade na grupama i komponentama u njoj.
- Svaki alat je jedan korak opozivanja.
- Prvi put kad koristiš alat za čvrsta tela, učitava se njegov mehanizam (manifold-3d), što može da potraje.
