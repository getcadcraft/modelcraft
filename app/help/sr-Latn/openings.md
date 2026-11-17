---
title: Pravljenje otvora kroz zid
summary: Nacrtajte prozor ili vrata na zidu s debljinom i gurnite ih kroz njega, tako da zid dobije pravu rupu.
keywords: prozor, vrata, otvor, rupa, zid, sečenje, gurni kroz, šupljina, debljina, fasada
from: 6b22f32c
---

Otvoru je potreban zid sa dve strane: kutija, ili zid koji ste napravili izvlačenjem dugačkog tankog pravougaonika na gore. Jedna samostojeća površ nema ništa kroz šta bi se gurnula.

## Napravite zid za vežbu

1. Pritisnite {{key:R}}, kliknite ugao na podu i upišite `6m,0.3m` (ili `20',12"`), pa {{key:Enter}}.
2. Pritisnite {{key:P}}, kliknite pravougaonik i upišite `3m` (ili `10'`), pa {{key:Enter}}.

Imate zid debljine 300 mm (12 in).

## Nacrtajte otvor

1. Orbitirajte tako da vidite dugu stranu zida.
2. Pritisnite {{key:R}}.
3. Prevucite pokazivač preko površi zida, pa kliknite gde ide donji ugao prozora. Savet kaže „Na površi”.
4. Upišite širinu i visinu prozora, na primer `1.2m,1.5m` (ili `4',5'`), i pritisnite {{key:Enter}}.

   Prozor je sopstvena površ unutar površi zida, a zid sada ima rupu oko njega.

Da ga postavite na tačno rastojanje od ugla i poda, najpre koristite [vodilice](topic:guides-measure): alatom {{ui:Merna traka}} izvucite vodilice s donje i krajnje ivice zida, pa počnite pravougaonik tamo gde se dve vodilice seku (savet kaže „Na vodilici”).

## Gurnite ga kroz zid

1. Pritisnite {{key:P}}.
2. Kliknite površ prozora i gurnite ga u zid.
3. Pomerajte dok se ne zaustavi na zadnjoj površi, pa kliknite. Ili upišite debljinu zida, `300` (ili `12`), i pritisnite {{key:Enter}}.

   ModelCraft se zaustavlja na površi iza i otvara je: zid sada ima rupu pravo kroz sebe, sa četiri bočne površi (štokovi, nadvratnik i prag) koje je oblažu. {{ui:Podaci o entitetu}} i dalje zovu zid zatvorenim telom kad je grupisan.

Ako gurnete manje od pune debljine, dobijate udubljenje umesto rupe.

## Vrata

Nacrtajte pravougaonik počevši od donje ivice površi zida (savet kaže „Na ivici” ili „Krajnja tačka”), tako da otvor dopre do poda. Gurnite ga na isti način.

## Mnogo prozora iste veličine

1. Napravite prvi otvor.
2. Za sledeće, nacrtajte pravougaonike, pa dvaput kliknite svaki {{ui:Guraj/vuci}}: dvostruki klik ponavlja poslednje rastojanje. Vidi [Guranje i vučenje](topic:push-pull#repeat-the-last-distance).

## Ako nije prošlo kroz zid

- Pravougaonik mora biti nacrtan **na** površi zida. Ako je nacrtan u vazduhu ispred nje, on je zasebna površ: opozovite i nacrtajte ga ponovo, počevši od površi.
- Guranje staje na prvoj površi iza otvora. Ako je nešto drugo na putu unutar zida (unutrašnja površ ostala od ranijeg crtanja), zaustaviće se tu; obrišite ivice te površi i pokušajte ponovo.
- Geometrija u zasebnoj grupi se ne seče. Otvorite grupu koja sadrži zid i nacrtajte otvor unutar nje.
