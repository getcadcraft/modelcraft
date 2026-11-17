---
title: Merenje i postavljanje vodilica
summary: Čitajte dužine i površine, merite rastojanje između dve tačke mernom trakom, i postavljajte vodilne linije i tačke za crtanje.
keywords: mera, merenje, merna traka, uglomer, ugao, vodilica pod uglom, vodilica, vodilna linija, konstrukciona linija, rastojanje, kota, dužina, površina, odmak, raspored, tačka vodilice
from: de6d04d9
---

## Čitanje veličina bez merenja

Izaberite nešto i pogledajte {{ui:Podaci o entitetu}}:

- Ivica prikazuje svoju **dužinu**.
- Površ prikazuje svoju **površinu** i koliko ima rupa.
- Više površi prikazuje njihovu **ukupnu površinu**.
- Grupa ili komponenta prikazuje svoju **veličinu** (širina × dubina × visina kutije oko nje) i, ako je zatvoreno čvrsto telo, njenu **zapreminu**.
- Kad ništa nije izabrano, {{ui:Podaci o entitetu}} prikazuje veličinu celog modela.

Dužine i površine koriste jedinicu iz birača u donjem desnom uglu. Model u milimetrima prikazuje površine od 0.01 m² naviše u kvadratnim metrima (soba 4 × 3 m prikazuje „12 m²“).

Dok crtate, polje za vrednost prikazuje dužinu, veličinu, poluprečnik ili rastojanje uživo, pa retko treba naknadno da merite.

Da promenite veličinu posle crtanja, izaberite ivicu ili grupu i ponovo upišite dužinu ili veličinu u {{ui:Podaci o entitetu}}. Ili postavite [kotu](topic:dimensions) i upišite novu dužinu u nju.

## Merenje između dve tačke

1. Pritisnite {{key:T}} za {{ui:Merna traka}}.
2. Kliknite tačku: ugao, središnju tačku, tačku na površi ili tlo. (Klik na ivicu radi nešto drugo; vidi dole.)
3. Pređite na drugu tačku. Vrh i polje za vrednost ({{ui:Dužina}}) prikazuju rastojanje. Hvata se za tačke i za crvene, zelene i plave pravce.
4. Kliknite. Statusna traka kaže „Izmereno 4' 6".“ i na drugoj tački ostaje **tačka vodilice**.

Za tačku vodilice na tačnom rastojanju upišite ga posle prvog klika i pritisnite {{key:Enter}}: ide u smeru u kome pokazujete.

## Postavljanje vodilne linije

Vodilna linija je beskonačna isprekidana linija, paralelna ivici, na rastojanju koje birate. Koristite vodilice za određivanje povlačenja, visine poda ili mesta gde počinje prozor.

1. Pritisnite {{key:T}}.
2. Kliknite na **ivicu** (ne na njen kraj). Vrh kaže „Na ivici“.
3. Pomerite se sa ivice, na stranu na kojoj vodilica treba da bude. Prati je isprekidana linija, paralelna ivici, a polje za vrednost ({{ui:Odmak}}) prikazuje rastojanje.
4. Kliknite, ili upišite odmak i pritisnite {{key:Enter}}: `1.5m`, `5'`.

   Statusna traka kaže „Vodilna linija 1.5 m od ivice.“

Početak na postojećoj vodilnoj liniji pravi drugu vodilicu paralelnu s njom, pa možete da izgradite mrežu korak po korak iz jedne vodilice.

Ako upišete odmak bez pomeranja sa ivice, ModelCraft ne zna koju stranu mislite: „Prvo se pomerite sa ivice da pokažete stranu.“

## Vodilica pod uglom: Uglomer

1. Kliknite {{ui:Uglomer}} u grupi {{ui:Izmena}}.
2. Kliknite centar: tačku kroz koju vodilica prolazi. Na površi uglomer leži na toj površi; inače leži ravno. Posle ovog klika, {{key:Right}}, {{key:Left}} ili {{key:Up}} ga postavljaju normalno na crvenu, zelenu ili plavu osu (ponovo pritisnite da poništite).
3. Kliknite tačku koja određuje 0°, na primer duž ivice.
4. Pređite na željeni ugao i kliknite: hvata se u koracima od 15°. Ili upišite ugao u stepenima, na primer `22.5`, i pritisnite {{key:Enter}}; vodilica ide na stranu na kojoj je pokazivač.

Vodilna linija prolazi kroz centar pod tim uglom. Crtajte duž nje sa {{ui:Linija}} za nagib krova, obaranje ivice ili kosi zid.

## Crtanje u odnosu na vodilice

Alati za crtanje hvataju se za vodilne linije („Na vodilici“) i tačke vodilica („Tačka vodilice“), i za mesto gde vodilna linija seče pravac ose. Započnite pravougaonik tamo gde se dve vodilice seku da biste ga postavili tačno.

## Uklanjanje vodilica

- Jedna vodilica: kliknite je alatom {{ui:Izaberi}} i pritisnite {{key:Delete}}, ili kliknite je {{ui:Gumica}}.
- Sve vodilice: kad ništa nije izabrano, kliknite {{ui:Obriši sve vodilice}} u {{ui:Podaci o entitetu}}.

Vodilice se čuvaju u `.modelcraft` fajlu. Ne izvoze se u druge formate.
