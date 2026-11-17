---
title: Izrežite otvor kroz zid
summary: Nacrtajte prozor ili vrata na zidu s debljinom i gurnite ih kroz zid, tako da zid dobije pravu rupu.
keywords: prozor, vrata, otvor, rupa, zid, izrezivanje, gurni kroz, šupljina, debljina, pročelje
from: 6b22f32c
---

Otvor treba zid s dvije strane: kutiju ili zid koji ste izradili povlačenjem duge tanke pravokutne plohe prema gore. Pojedinačna ploha koja stoji sama nema ništa kroz što bi se mogla gurnuti.

## Izradite zid za vježbu

1. Pritisnite {{key:R}}, kliknite kut na tlu i upišite `6m,0.3m` (ili `20',12"`), zatim {{key:Enter}}.
2. Pritisnite {{key:P}}, kliknite pravokutnik i upišite `3m` (ili `10'`), zatim {{key:Enter}}.

Imate zid debljine 300 mm (12 in).

## Nacrtajte otvor

1. Zakrenite pogled tako da vidite dugu stranu zida.
2. Pritisnite {{key:R}}.
3. Prijeđite pokazivačem preko plohe zida, zatim kliknite gdje ide donji kut prozora. Savjet kaže „Na plohi“.
4. Upišite širinu i visinu prozora, na primjer `1.2m,1.5m` (ili `4',5'`), i pritisnite {{key:Enter}}.

   Prozor je zasebna ploha unutar plohe zida, koja sada ima rupu oko sebe.

Da biste ga postavili na točnu udaljenost od kuta i poda, prvo upotrijebite [vodilice](topic:guides-measure): s {{ui:Mjerna vrpca}} povucite vodilice s donjeg i krajnjeg brida zida, zatim započnite pravokutnik tamo gdje se dvije vodilice sijeku (savjet kaže „Na vodilici“).

## Gurnite kroz

1. Pritisnite {{key:P}}.
2. Kliknite plohu prozora i gurnite je u zid.
3. Pomaknite dok se ne zaustavi na stražnjoj plohi, zatim kliknite. Ili upišite debljinu zida, `300` (ili `12`), i pritisnite {{key:Enter}}.

   ModelCraft se zaustavlja na plohi iza i otvara je: zid sada ima rupu kroz cijelu debljinu, s četiri bočne plohe (bočnice, nadvratnik i prag) koje je oblažu. {{ui:Informacije o entitetu}} i dalje zove zid zatvorenim tijelom kad je grupiran.

Ako gurnete manje od pune debljine, dobijete udubljenje umjesto rupe.

## Vrata

Nacrtajte pravokutnik počevši od donjeg brida plohe zida (savjet kaže „Na bridu“ ili „Krajnja točka“), tako da otvor doseže pod. Gurnite ga na isti način.

## Više prozora iste veličine

1. Izradite prvi otvor.
2. Za sljedeće nacrtajte pravokutnike, zatim dvaput kliknite svaki s {{ui:Potisni/povuci}}: dvostruki klik ponavlja zadnju udaljenost. Vidi [Potiskivanje i povlačenje](topic:push-pull#repeat-the-last-distance).

## Ako nije prošlo kroz

- Pravokutnik mora biti nacrtan **na** plohi zida. Ako je nacrtan u zraku ispred nje, to je zasebna ploha: poništite i nacrtajte ponovno, počevši s plohe.
- Guranje staje na prvoj plohi iza otvora. Ako nešto drugo stoji na putu unutar zida (unutarnja ploha ostala od ranijeg crtanja), zaustavit će se tamo; izbrišite bridove te plohe i pokušajte ponovno.
- Geometrija u zasebnoj grupi se ne reže. Otvorite grupu koja sadrži zid i nacrtajte otvor unutar nje.
