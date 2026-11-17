---
title: Izrezivanje otvora kroz zid
summary: Nacrtaj prozor ili vrata na zidu s debljinom i gurni ih kroz zid, tako da zid dobije pravu rupu.
keywords: prozor, vrata, otvor, rupa, zid, rez, gurni kroz, šupljina, debljina, fasada
from: 6b22f32c
---

Otvor treba zid s dvije strane: kutiju ili zid koji si napravio povlačenjem dugog tankog pravougaonika uvis. Sama jedna ploha koja stoji sama nema ništa kroz šta bi se gurnula.

## Napravi zid za vježbu

1. Pritisni {{key:R}}, klikni ugao na podu i upiši `6m,0.3m` (ili `20',12"`), pa {{key:Enter}}.
2. Pritisni {{key:P}}, klikni pravougaonik i upiši `3m` (ili `10'`), pa {{key:Enter}}.

Imaš zid debeo 300 mm (12 in).

## Nacrtaj otvor

1. Okreni pogled tako da vidiš dugu stranu zida.
2. Pritisni {{key:R}}.
3. Prebaci pokazivač preko plohe zida, pa klikni mjesto gdje ide donji ugao prozora. Savjet kaže „Na plohi”.
4. Upiši širinu i visinu prozora, na primjer `1.2m,1.5m` (ili `4',5'`), i pritisni {{key:Enter}}.

   Prozor je zasebna ploha unutar plohe zida, koja sada ima rupu oko sebe.

Da ga postaviš na tačnu udaljenost od ugla i poda, prvo koristi [vodilice](topic:guides-measure): alatom {{ui:Tape}} povuci vodilice s donje i krajnje ivice zida, pa počni pravougaonik tamo gdje se dvije vodilice sijeku (savjet kaže „Na vodilici”).

## Gurni ga kroz zid

1. Pritisni {{key:P}}.
2. Klikni plohu prozora i gurni je u zid.
3. Pomjeraj dok ne stane na zadnjoj plohi, pa klikni. Ili upiši debljinu zida, `300` (ili `12`), i pritisni {{key:Enter}}.

   ModelCraft staje na plohi iza i otvara je: zid sada ima rupu koja prolazi kroz njega, s četiri bočne plohe (bočnice, nadvratnik i prag) koje je oblažu. {{ui:Entity info}} i dalje zove zid zatvorenim tijelom kada je grupisan.

Ako gurneš manje od pune debljine, dobijaš udubljenje umjesto rupe.

## Vrata

Nacrtaj pravougaonik počevši od donje ivice plohe zida (savjet kaže „Na ivici” ili „Krajnja tačka”), tako da otvor dopire do poda. Gurni ga kroz isto kao i obično.

## Mnogo prozora iste veličine

1. Napravi prvi otvor.
2. Za sljedeće, nacrtaj pravougaonike, pa dvaput klikni svaki s {{ui:Push/pull}}: dvostruki klik ponavlja posljednju udaljenost. Vidi [Gurni i povuci](topic:push-pull#repeat-the-last-distance).

## Ako nije prošao kroz

- Pravougaonik mora biti nacrtan **na** plohi zida. Ako je nacrtan u zraku ispred nje, on je zasebna ploha: poništi i nacrtaj ponovo, počevši na plohi.
- Guranje staje na prvoj plohi iza otvora. Ako nešto drugo stoji na putu unutar zida (unutrašnja ploha ostavljena od ranijeg crtanja), staje tu; obriši ivice te plohe i pokušaj ponovo.
- Geometrija u zasebnoj grupi se ne siječe. Otvori grupu koja sadrži zid i nacrtaj otvor unutar nje.
