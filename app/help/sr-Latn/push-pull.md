---
title: Guranje i vučenje površina u čvrsta tela
summary: Pretvorite površinu u kutiju, učinite zgradu višom ili nižom, dodajte erker ili udubljenje i ponovite razdaljinu dvostrukim klikom.
keywords: guranje, vučenje, guraj/vuci, izvlačenje, visina, čvrsto telo, kutija, masa, viši, udubljenje, ispupčenje, ponavljanje, dvostruki klik, zapremina, nivo, na površini, zaliven, ista visina
from: dc093c91
---

{{ui:Guraj/vuci}} ({{key:P}}) pomera površinu duž njenog pravca: gore i dole za pod, unutra i spolja za zid. Šta se dešava zavisi od površine.

## Pravljenje čvrstog tela od površine

1. Nacrtajte površinu, na primer pravougaonik na tlu ([Crtanje površina](topic:draw-faces)).
2. Pritisnite {{key:P}}.
3. Pređite pokazivačem preko površine. Ona se osvetli.
4. Kliknite površinu, pa pomerajte pokazivač. Površina se diže (ili tone) i bočne strane rastu iz njenih ivica. Polje za vrednost ({{ui:Razdaljina}}) i savet pokazuju razdaljinu.
5. Kliknite da završite, ili upišite razdaljinu i pritisnite {{key:Enter}}: `3m`, `10'`, `2700` u modelu u milimetrima.

   Sada imate zatvoreno čvrsto telo. Izaberite ga celog i grupišite (pogledajte [Grupe i komponente](topic:groups-components)): {{ui:Podaci o entitetu}} tada prikazuje „Čvrsto telo: Da“ i njegovu zapreminu.

Sama površina može u oba smera: povucite je gore za masu iznad tla, ili gurnite nadole za jamu ili temelj.

:::tip
Umesto dva klika, pritisnite na površinu, prevucite i pustite. Na ekranu osetljivom na dodir to je prirodan način: pritisni, prevuci, podigni.
:::

## Vučenje do visine nečeg drugog

Dok vučete, pređite pokazivačem preko ugla, središnje tačke, ivice ili vodilice drugog dela modela. Površina se hvata za tu visinu i marker pokazuje tačku. Koristite to da dva bloka budu iste visine, ili da stanete na vodilicu koju ste postavili [trakom za merenje](topic:guides-measure).

Takođe možete preći pokazivačem preko površine koja je paralelna onoj koju gurate, kao što je vrh drugog bloka ili vrh kutije na kojoj stoji stub. Savet kaže „Na površini“, a površina koju gurate završava se u istom nivou s njom. Na primer, gurnite unutrašnju površinu cevi nadole dok ne bude u nivou sa kutijom ispod cevi.

Površina pod uglom u odnosu na onu koju gurate ne postavlja nivo. Razdaljina prati pokazivač. Isto važi i za površinu iza one koju gurate.

Kad gurnuta površina ponovo završi zaliven sa okolnim površinama, njene bočne strane nestaju. Ne ostaju bočne strane nulte visine, a kontura koju ste nacrtali ostaje na površini, pa je možete kasnije ponovo gurnuti. Da ponovo bude jedna površina, obrišite ivice konture sa {{ui:Gumica}}: dve površine se spajaju.

## Pravljenje kutije višom ili nižom

Guraj/vuci vrh kutije. Pošto bočne strane već idu ravno gore od njega, vrh se jednostavno pomera: kutija postaje viša ili niža, i ne prave se nove ivice.

- Ako vrh gurnete sve do dna, kutija se uklanja. ModelCraft staje na nultoj visini; nikad ne okreće kutiju naopako.
- Isto važi za svaku površinu čiji se susedi sve pružaju u njenom pravcu, kao kraj zida.

## Dodavanje erkera ili udubljenja

1. Nacrtajte pravougaonik na boku kutije (počnite ga na površini; ostaje u ravni površine).
2. Pritisnite {{key:P}} i izvucite novi pravougaonik **napolje**. Dodaje materijal: erker, dimnjak, nadstrešnicu.
3. Ili ga gurnite **unutra**. Seče udubljenje: trem, nišu, uvučen ulaz.

Kad se bočne strane novog dela poklope sa površinama koje već postoje, spajaju se u jednu površinu, pa nemate rasute linije na ravnom zidu.

## Guranje sve do kraja

Guranje površine u čvrsto telo staje na prvoj površini iza nje. Kad je dostigne, pravi otvor kroz koji prolazi. Tako pravite prozore i vrata u zidu s debljinom. Pogledajte [Probijanje otvora kroz zid](topic:openings).

## Upisivanje razdaljine

Posle klika na površinu, upišite razdaljinu i pritisnite {{key:Enter}}.

- Upisana razdaljina ide u smeru u kojem ste se kretali. Ako se još niste pomerili, ide ka spolja površine (iz čvrstog tela, naviše od tla).
- Upišite negativan broj, kao `-500`, da idete u suprotnom smeru.
- Ako se predomislite pre klika, pritisnite {{key:Esc}}. Površina se vraća.

## Ponavljanje poslednje razdaljine

Posle jednog guranja/vučenja, dvaput kliknite drugu površinu dok je {{ui:Guraj/vuci}} i dalje izabrano. Pomera se za istu razdaljinu. To je brz način da više zidova ili više podova dobije istu debljinu ili visinu.

ModelCraft pamti razdaljinu dok ne pređete na drugi alat.

## Na šta treba paziti

- Guraj/vuci radi nad jednom površinom istovremeno. Ako kliknete nešto što nije površina, statusna traka kaže „Guraj/vuci radi nad površinom. Kliknite površinu.“
- Da guranjem ili vučenjem menjate površinu unutar grupe ili komponente, prvo je otvorite (dvaput kliknite na nju).
- Uz uključeno **Sudar**, guranje ili vučenje koje udari u drugo čvrsto telo staje gde ga dodiruje, a savet kaže šta dodiruje (naziv objekta, ili „labava geometrija u ovoj grupi“) i osvetljava površine koje je dodirnulo. Udubljenje koje gurate u sopstveno čvrsto telo (na primer površina pomaknuta unazad naniže) deo je tog tela i njegovi zidovi ga nikad ne zaustavljaju.
- Dva čvrsta tela gurnuta jedno u drugo se ne seku niti spajaju: njihove površine samo prolaze jedna kroz drugu. Pogledajte [Još nije napravljeno](topic:not-built-yet).
