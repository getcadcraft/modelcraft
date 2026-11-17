---
title: Mjerenje i postavljanje vodilica
summary: Čitajte dužine i površine, mjerite između dvije tačke mjernom trakom i postavljajte vodeće linije i tačke za crtanje.
keywords: mjerenje, mjerna traka, uglomjer, ugao, vodilica pod uglom, vodilica, vodeća linija, građevinska linija, rastojanje, kota, dužina, površina, odmak, raspored, tačka vodilice
from: de6d04d9
---

## Čitajte veličine bez mjerenja

Odaberite nešto i pogledajte {{ui:Entity info}}:

- Ivica pokazuje svoju **dužinu**.
- Ploha pokazuje svoju **površinu** i koliko ima rupa.
- Više ploha pokazuje njihovu **ukupnu površinu**.
- Grupa ili komponenta pokazuje svoju **veličinu** (širina × dubina × visina kutije oko nje) i, ako je zatvoreno puno tijelo, njenu **zapreminu**.
- Kad ništa nije odabrano, {{ui:Entity info}} pokazuje veličinu cijelog modela.

Dužine i površine koriste jedinicu iz birača dolje desno. Model u milimetrima pokazuje površine od 0.01 m² naviše u kvadratnim metrima (soba 4 × 3 m glasi "12 m²").

Dok crtate, okvir s vrijednošću prikazuje dužinu, veličinu, poluprečnik ili rastojanje uživo, pa rijetko treba mjeriti poslije.

Da promijenite veličinu nakon crtanja, odaberite ivicu ili grupu i ponovo upišite dužinu ili veličinu u {{ui:Entity info}}. Ili postavite [kotu](topic:dimensions) i upišite novu dužinu u nju.

## Mjerenje između dvije tačke

1. Pritisnite {{key:T}} za mjerni alat {{ui:Tape}}.
2. Kliknite tačku: ugao, sredinu, tačku na plohi ili tlo. (Klik na ivicu radi nešto drugo; vidi dolje.)
3. Pomjerite se do druge tačke. Vrh i okvir s vrijednošću ({{ui:Length}}) pokazuju rastojanje. Hvata se za tačke i za crvene, zelene i plave pravce.
4. Kliknite. Statusna traka kaže "Measured 4' 6"." i **tačka vodilice** ostaje na drugoj tački.

Da tačku vodilice ostavite na tačnom rastojanju, upišite ga nakon prvog klika i pritisnite {{key:Enter}}: ide u smjeru u kojem pokazujete.

## Postavljanje vodeće linije

Vodeća linija je beskonačna isprekidana linija, paralelna s ivicom, na rastojanju koje birate. Koristite vodilice za raspored uvlačenja, visinu etaže ili mjesto gdje prozor počinje.

1. Pritisnite {{key:T}}.
2. Kliknite na **ivicu** (ne na njen kraj). Vrh kaže "On edge".
3. Pomjerite se sa ivice, na stranu na kojoj vodilica treba da bude. Prati je isprekidana linija, paralelna s ivicom, a okvir s vrijednošću ({{ui:Offset}}) pokazuje rastojanje.
4. Kliknite ili upišite odmak i pritisnite {{key:Enter}}: `1.5m`, `5'`.

   Statusna traka kaže "Guide line 1.5 m from the edge."

Počinjanje na postojećoj vodilici pravi još jednu paralelnu s njom, pa možete izvući mrežu iz jedne vodilice.

Ako upišete odmak bez prethodnog pomjeranja sa ivice, ModelCraft ne zna koju stranu mislite: "Move off the edge first to show which side."

## Vodilica pod uglom: uglomjer

1. Kliknite {{ui:Protractor}} u grupi {{ui:Modify}}.
2. Kliknite centar: tačku kroz koju vodilica prolazi. Na plohi uglomjer leži na toj plohi; inače leži ravno. Nakon ovog klika, {{key:Right}}, {{key:Left}} ili {{key:Up}} ga postavljaju okomito na crveni, zeleni ili plavi pravac (pritisnite ponovo da poništite).
3. Kliknite tačku koja postavlja 0°, npr. duž ivice.
4. Pomjerite se do željenog ugla i kliknite: hvata se u koracima od 15°. Ili upišite ugao u stepenima, npr. `22.5`, i pritisnite {{key:Enter}}; vodilica ide na stranu na kojoj je pokazivač.

Vodeća linija prolazi kroz centar pod tim uglom. Crtajte duž nje alatom {{ui:Line}} za nagib krova, skošenje ili kosi zid.

## Crtanje prema vodilicama

Alati za crtanje se hvataju za vodeće linije ("On guide") i tačke vodilica ("Guide point"), te za mjesto gdje vodeća linija siječe pravac ose. Započnite pravougaonik tamo gdje se dvije vodilice sijeku da ga postavite tačno.

## Uklanjanje vodilica

- Jedna vodilica: kliknite je alatom {{ui:Select}} i pritisnite {{key:Delete}}, ili kliknite je {{ui:Eraser}}.
- Sve vodilice: kad ništa nije odabrano, kliknite {{ui:Delete all guides}} u {{ui:Entity info}}.

Vodilice se čuvaju u datoteci `.modelcraft`. Ne izvoze se u druge formate.
