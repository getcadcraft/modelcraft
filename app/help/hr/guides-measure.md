---
title: Mjerenje i postavljanje pomoćnih linija
summary: Čitajte duljine i površine, mjerite između dviju točaka vrpcom te postavljajte pomoćne linije i točke za crtanje.
keywords: mjerenje, mjerna vrpca, kutomjer, kut, kutna pomoćna linija, pomoćna linija, vodilica, pomoćna točka, konstrukcijska linija, udaljenost, kota, duljina, površina, odmak, raspored
from: de6d04d9
---

## Čitajte veličine bez mjerenja

Odaberite nešto i pogledajte {{ui:Informacije o entitetu}}:

- Brid pokazuje svoju **duljinu**.
- Ploha pokazuje svoju **površinu** i koliko ima provrta.
- Nekoliko ploha pokazuje njihovu **ukupnu površinu**.
- Grupa ili komponenta pokazuje svoju **veličinu** (širina × dubina × visina kutije oko nje) i, ako je zatvoreno puno tijelo, njezin **volumen**.
- Kad ništa nije odabrano, {{ui:Informacije o entitetu}} prikazuje veličinu cijelog modela.

Duljine i površine koriste jedinicu iz izbornika u donjem desnom kutu. Model u milimetrima prikazuje površine od 0.01 m² naviše u kvadratnim metrima (soba 4 × 3 m prikazuje "12 m²").

Dok crtate, polje vrijednosti pokazuje duljinu, veličinu, polumjer ili udaljenost uživo, pa rijetko trebate mjeriti naknadno.

Za promjenu veličine nakon crtanja odaberite brid ili grupu i upišite novu duljinu ili veličinu u {{ui:Informacije o entitetu}}. Ili postavite [kotu](topic:dimensions) i upišite novu duljinu u nju.

## Mjerenje između dviju točaka

1. Pritisnite {{key:T}} za {{ui:Mjerna vrpca}} mjerenje.
2. Kliknite točku: kut, polovište, točku na plohi ili na tlu. (Klik na brid radi nešto drugo; vidi niže.)
3. Pomaknite se do druge točke. Vrh i polje vrijednosti ({{ui:Duljina}}) prikazuju udaljenost. Hvata se za točke i za crveni, zeleni i plavi smjer.
4. Kliknite. Statusna traka kaže "Izmjereno: 4' 6"." i **pomoćna točka** ostaje na drugoj točki.

Za pomoćnu točku na točnoj udaljenosti upišite udaljenost nakon prvog klika i pritisnite {{key:Enter}}: ona ide u smjeru u kojem pokazujete.

## Postavite pomoćnu liniju

Pomoćna linija je beskonačna isprekidana linija, paralelna s bridom, na udaljenosti koju odaberete. Koristite pomoćne linije za raspored uvlačenja, visinu etaže ili mjesto početka prozora.

1. Pritisnite {{key:T}}.
2. Kliknite na **brid** (ne na njegov kraj). Vrh kaže "Na bridu".
3. Pomaknite se od brida na stranu na kojoj treba biti pomoćna linija. Isprekidana linija prati, paralelna s bridom, a polje vrijednosti ({{ui:Odmakni}}) prikazuje udaljenost.
4. Kliknite ili upišite odmak i pritisnite {{key:Enter}}: `1.5m`, `5'`.

   Statusna traka kaže "Pomoćna linija 1.5 m od brida."

Početak na postojećoj pomoćnoj liniji stvara još jednu, paralelnu s njom, pa možete izraditi mrežu iz jedne pomoćne linije.

Ako upišete odmak bez prethodnog odmicanja od brida, ModelCraft ne može znati koju stranu mislite: "Najprije se odmaknite od brida da pokažete stranu."

## Pomoćna linija pod kutom: Kutomjer

1. Kliknite {{ui:Kutomjer}} u grupi {{ui:Izmjena}}.
2. Kliknite središte: točku kroz koju pomoćna linija prolazi. Na plohi kutomjer leži na toj plohi; inače leži ravno. Nakon tog klika, {{key:Right}}, {{key:Left}} ili {{key:Up}} ga postavljaju okomito na crveno, zeleno ili plavo (pritisnite ponovo za poništavanje).
3. Kliknite točku koja postavlja 0°, npr. duž brida.
4. Pomaknite se do željenog kuta i kliknite: hvata se u koracima od 15°. Ili upišite kut u stupnjevima, npr. `22.5`, i pritisnite {{key:Enter}}; pomoćna linija ide na stranu na kojoj je pokazivač.

Pomoćna linija prolazi kroz središte pod tim kutom. Crtajte duž nje s {{ui:Linija}} za nagib krova, skošenje ili kosi zid.

## Crtanje uz pomoćne linije

Alati za crtanje hvataju se za pomoćne linije ("Na pomoćnoj liniji") i pomoćne točke ("Pomoćna točka"), te za mjesto gdje pomoćna linija siječe smjer osi. Započnite pravokutnik tamo gdje se sijeku dvije pomoćne linije da ga postavite točno.

## Uklanjanje pomoćnih linija

- Jedna pomoćna linija: kliknite je s {{ui:Odaberi}} i pritisnite {{key:Delete}}, ili je kliknite {{ui:Gumica}}.
- Sve pomoćne linije: kad ništa nije odabrano, kliknite {{ui:Izbriši sve pomoćne linije}} u {{ui:Informacije o entitetu}}.

Pomoćne linije spremaju se u datoteku `.modelcraft`. Ne izvoze se u druge formate.
