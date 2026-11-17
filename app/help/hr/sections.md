---
title: Ravnine presjeka: presijecite model
summary: Postavite ravninu presjeka da vidite unutrašnjost modela, pomaknite je kroz model, obrnite je ili isključite rez.
keywords: presjek, ravnina presjeka, rez presjeka, rez, izrez, odsijecanje, unutra, tlocrt, isječak, poprečni presjek
from: 28c3a645
---

Ravnina presjeka presijeca model da vidite i radite unutar njega: tlocrt kuće, unutrašnjost ormarića. Model se ne mijenja; rez je samo prikaz.

## Postavljanje ravnine

1. Kliknite {{ui:Presjek}} u grupi {{ui:Kamera}}.
2. Kliknite plohu. Ravnina se postavlja na tu plohu, sa četiri strelice koje pokazuju prema vama.

   Kliknite pored bilo koje plohe da dobijete kvadratnu ravninu okomitu na smjer u kojem najviše gledate. Pritisnite prvo tipku sa strelicom da je postavite okomito na crvenu ({{key:Right}}), zelenu ({{key:Left}}) ili plavu ({{key:Up}}).

Strana na koju pokazuju strelice je **odrezana**. Ravnina postavljena na plohu još ništa ne reže: gurnite je u model.

## Pomicanje, obrtanje, isključivanje

Kliknite obris ravnine da je odaberete. U {{ui:Informacije o entitetu}}:

- {{ui:Duž strelica}} kaže gdje se nalazi. Upišite novu udaljenost i pritisnite {{key:Enter}} da je gurnete kroz model; upis `-1m` na ravnini koju ste postavili na prednju plohu pomiče je 1 m u model.
- {{ui:Obrni}} okreće strelice, pa se druga strana odrezuje.
- {{ui:Aktivno (reže model)}}: jedna ravnina reže u isto vrijeme. Označite okvir druge ravnine ili postavite novu, pa ona reže umjesto nje.
- Preimenujte je u {{ui:Naziv}}; izbrišite je tipkom {{key:Delete}} ili {{ui:Gumica}}.

Gdje ravnina prolazi kroz zatvoreno puno tijelo, rez se popunjava tamnom bojom. Geometrija koja nije zatvorena (jedna ploha, otvoreni kvadar) se reže, ali se ne popunjava.

## Prikaz i skrivanje

U {{ui:Pogledi}}:

- {{ui:Prikaži ravnine presjeka}} skriva obrise i strelice ravnina (rez ostaje).
- {{ui:Prikaži presjeke}} isključuje rez i prikazuje cijeli model, bez brisanja ravnina.

[Prezentacijski prikaz](topic:styles-shadows#presentation-view) također skriva obrise.

## Što treba znati

- Ono što je odrezano ne može se kliknuti ni hvatati, pa možete crtati po onome što rez prikazuje.
- Ravnine presjeka, koja je aktivna i obje sklopke spremaju se u datoteku ModelCrafta. Svaka promjena je jedan korak poništavanja.
- Izvozi uvijek sadrže cijeli model: presjek je prikaz, a ne uređivanje.
