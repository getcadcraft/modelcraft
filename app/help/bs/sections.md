---
title: Ravni presjeka: presijeci model
summary: Postavi ravan presjeka da vidiš unutrašnjost modela, pomjeri je kroz model, okreni je ili isključi presjek.
keywords: presjek, ravan presjeka, rez presjeka, rez, odsječeni prikaz, odsijecanje, unutrašnjost, tlocrt, sječenje, poprečni presjek
from: 28c3a645
---

Ravan presjeka otvara model presjekom, pa možeš vidjeti i raditi unutra: tlocrt kuće, unutrašnjost ormarića. Model se ne mijenja; presjek je samo pogled.

## Postavi jednu

1. Klikni {{ui:Presjek}} u grupi {{ui:Kamera}}.
2. Klikni površinu. Ravan se postavlja na tu površinu, sa četiri strelice koje pokazuju ka tebi.

   Klikni van bilo koje površine da ravan bude okomita na smjer u kojem najviše gledaš. Prvo pritisni tipku sa strelicom da je postaviš okomito na crvenu ({{key:Right}}), zelenu ({{key:Left}}) ili plavu ({{key:Up}}).

Strana na koju strelice pokazuju je **odsječena**. Ravan postavljena na površinu još ništa ne siječe: pomjeri je u model.

## Pomjeri je, okreni je, isključi

Klikni obris ravni da je odabereš. U {{ui:Podaci o entitetu}}:

- {{ui:Duž njegovih strelica}} kaže gdje stoji. Upiši novu udaljenost i pritisni {{key:Enter}} da je pomjeriš kroz model; upisivanje `-1m` na ravni koju si postavio na prednju površinu pomjera je 1 m u model.
- {{ui:Obrtanje}} okreće strelice, pa se druga strana odsijeca.
- {{ui:Aktivna (presijeca model)}}: jedna ravan presijeca u jednom trenutku. Označi okvir druge ravni, ili postavi novu, pa ona presijeca umjesto nje.
- Preimenuj je u {{ui:Naziv}}; izbriši je tipkom {{key:Delete}} ili {{ui:Gumicom}}.

Gdje ravan prolazi kroz zatvoreno tijelo, presjek je ispunjen tamnom bojom. Geometrija koja nije zatvorena (jedna površina, otvorena kutija) se siječe, ali ne ispunjava.

## Prikaži i sakrij

U {{ui:Pogledi}}:

- {{ui:Prikaži ravni presjeka}} sakriva obrise i strelice ravni (presjek ostaje).
- {{ui:Prikaži presjeke}} isključuje presjek i prikazuje cijeli model, bez brisanja ravni.

[Prikaz prezentacije](topic:styles-shadows#presentation-view) također sakriva obrise.

## Stvari koje treba znati

- Ono što je odsječeno ne može se kliknuti niti privući, pa možeš crtati na onome što presjek prikazuje.
- Ravni presjeka, koja je aktivna i dva prekidača spašavaju se u datoteci ModelCraft. Svaka promjena je jedan korak poništavanja.
- Izvozi uvijek sadrže cijeli model: presjek je pogled, a ne izmjena.
