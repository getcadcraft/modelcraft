---
title: Ravni preseka: otvorite model presekom
summary: Postavite ravan preseka da vidite unutrašnjost modela, pomerajte je kroz model, obrnite je ili isključite presek.
keywords: presek, ravan preseka, presecanje, rez, izrez, isecanje, unutrašnjost, plan sprata, kosa, presek preko poprečnog preseka
from: 28c3a645
---

Ravan preseka otvara model presekom, pa možete da vidite i radite unutar njega: plan sprata kuće, unutrašnjost ormarića. Model se ne menja; presek je samo prikaz.

## Postavite jednu

1. Kliknite {{ui:Presek}} u grupi {{ui:Kamera}}.
2. Kliknite površ. Ravan se postavlja na tu površ, sa četiri strelice koje gledaju ka vama.

   Kliknite van bilo koje površi da ravan postavite kvadratno na smer u kome najviše gledate. Pritisnite prvo strelicu da je postavite pravo prema crvenoj ({{key:Right}}), zelenoj ({{key:Left}}) ili plavoj ({{key:Up}}).

Strana na koju pokazuju strelice je **odsečena**. Ravan postavljena na površ ništa ne seče dok je ne gurnete u model.

## Pomerajte je, obrnite je, isključite

Kliknite obris ravni da je izaberete. U {{ui:Podaci o entitetu}}:

- {{ui:Duž svojih strelica}} kaže gde se nalazi. Ukucajte novo rastojanje i pritisnite {{key:Enter}} da je gurnete kroz model; ukucavanje `-1m` na ravni koju ste postavili na prednju površ pomera je 1 m u model.
- {{ui:Obrnuto}} okreće strelice, pa se odseca druga strana.
- {{ui:Aktivna (seče model)}}: jedna ravan seče u jednom trenutku. Označite polje druge ravni ili postavite novu, pa ona seče umesto ove.
- Preimenujte je u {{ui:Naziv}}; obrišite je tasterom {{key:Delete}} ili {{ui:Gumica}}.

Tamo gde ravan prolazi kroz zatvoreno telo, presek se popunjava tamnom bojom. Geometrija koja nije zatvorena (jedna površ, otvorena kutija) je presečena ali se ne popunjava.

## Prikazivanje i skrivanje

U {{ui:Pogledi}}:

- {{ui:Prikaži ravni preseka}} skriva obrise i strelice ravni (presek ostaje).
- {{ui:Prikaži preseke}} isključuje presek i prikazuje ceo model, bez brisanja ravni.

[Prikaz za prezentaciju](topic:styles-shadows#presentation-view) takođe skriva obrise.

## Stvari koje treba znati

- Ono što je odsečeno ne može da se klikne niti da se na to snapuje, pa možete crtati na onome što presek prikazuje.
- Ravni preseka, koja je aktivna i dva prekidača se čuvaju u ModelCraft datoteci. Svaka promena je jedan korak poništavanja.
- Izvoz uvek sadrži ceo model: presek je prikaz, a ne izmena.
