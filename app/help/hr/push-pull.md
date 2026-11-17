---
title: Potiskivanje i povlačenje ploha u tijela
summary: Pretvorite plohu u kutiju, učinite zgradu višom ili nižom, dodajte istak ili udubljenje i ponovite udaljenost dvostrukim klikom.
keywords: potisni povuci, istisni, visina, tijelo, kutija, masa, viši, udubljenje, ponovi, dvostruki klik, volumen, razina, na plohi, poravnato, ista visina
from: dc093c91
---

{{ui:Potisni/povuci}} ({{key:P}}) pomiče plohu duž njezina vlastitog smjera: gore i dolje za pod, unutra i van za zid. Što se događa ovisi o plohi.

## Napravite tijelo od plohe

1. Nacrtajte plohu, na primjer pravokutnik na tlu ([Crtanje ploha](topic:draw-faces)).
2. Pritisnite {{key:P}}.
3. Pređite mišem preko plohe. Ona se označava.
4. Kliknite plohu, zatim pomaknite pokazivač. Ploha se diže (ili tone), a bočne plohe rastu od njezinih rubova. Okvir za vrijednost ({{ui:Udaljenost}}) i savjet prikazuju udaljenost.
5. Kliknite za završetak ili upišite udaljenost i pritisnite {{key:Enter}}: `3m`, `10'`, `2700` u modelu u milimetrima.

   Sad imate zatvoreno tijelo. Odaberite ga i grupirajte (vidi [Grupe i komponente](topic:groups-components)): {{ui:Informacije o entitetu}} tada prikazuje "Puno tijelo: Da" i njegov volumen.

Usamljenu plohu možete povući u oba smjera: gore za masu iznad tla, ili dolje za jamu ili temelj.

:::tip
Umjesto dvaput klikanja, pritisnite na plohu, povucite i pustite. Na zaslonu osjetljivom na dodir to je prirodan način: pritisnite, povucite, podignite.
:::

## Povucite na visinu nečega drugog

Dok povlačite, pređite preko vrha, sredine, ruba ili vodilice drugog dijela modela. Ploha se poravna na tu visinu, a oznaka pokazuje točku. Koristite to da napravite dva bloka iste visine ili da stanete na vodilicu koju ste postavili [mjernom trakom](topic:guides-measure).

Također možete preći preko plohe paralelne onoj koju gurate, poput vrha drugog bloka ili vrha kutije na kojoj stoji stup. Savjet kaže "Na plohi", a ploha koju gurate završava poravnato s njom. Primjerice, gurnite unutarnju plohu cijevi dolje dok ne bude u razini s kutijom ispod cijevi.

Plohu koja je pod kutom prema onoj koju gurate ne postavlja razinu. Udaljenost prati pokazivač. Tako je i s plohom iza one koju gurate.

Kad gurnuta ploha ponovno završi poravnato s okolnim plohama, njezine bočne plohe nestaju. Ne ostaju nikakve bočne plohe nulte visine, a obris koji ste nacrtali ostaje na plohi, pa ga kasnije možete ponovno gurnuti. Da bi opet bila jedna ploha, izbrišite bridove obrisa s {{ui:Gumica}}: dvije se plohe spoje.

## Napravite kutiju višom ili nižom

Potisnite/povucite vrh kutije. Budući da bočne plohe već idu ravno gore od njega, vrh se jednostavno pomiče: kutija postaje viša ili niža, i ne nastaju novi bridovi.

- Ako gurnete vrh sve do dna, kutija se uklanja. ModelCraft staje na nultoj visini; nikad ne okreće kutiju naopako.
- Isto vrijedi za svaku plohu čiji su susjedi svi duž njezina smjera, poput kraja zida.

## Dodajte istak ili udubljenje

1. Nacrtajte pravokutnik na boku kutije (počnite ga na plohi; ostaje u ravnini plohe).
2. Pritisnite {{key:P}} i povucite novi pravokutnik **van**. Dodaje materijal: istak, dimnjak, nadstrešnicu.
3. Ili ga gurnite **unutra**. Reže udubljenje: trijem, nišu, uvučeni ulaz.

Kad se bočne plohe novog dijela poklope s plohama koje već postoje, spajaju se u jednu plohu, pa ne dobivate lažne linije na ravnom zidu.

## Gurnite sve do kraja

Gurnete li plohu u tijelo, zaustavlja se na prvoj plohi iza nje. Kad dođe do te plohe, probija otvor. Tako pravite prozore i vrata u zidu s debljinom. Vidi [Probijanje otvora kroz zid](topic:openings).

## Upišite udaljenost

Nakon što kliknete plohu, upišite udaljenost i pritisnite {{key:Enter}}.

- Upisana udaljenost ide smjerom u kojem ste se pomicali. Ako se još niste pomaknuli, ide prema naprijed plohe (iz tijela van, od tla gore).
- Upišite negativan broj, poput `-500`, da idete u suprotnom smjeru.
- Ako se predomislite prije klika, pritisnite {{key:Esc}}. Ploha se vraća.

## Ponovite zadnju udaljenost

Nakon jednog potiskivanja/povlačenja, dvaput kliknite drugu plohu dok je {{ui:Potisni/povuci}} još odabran. Ona se pomakne za istu udaljenost. Ovo je brz način da više zidova ili više podova dobije istu debljinu ili visinu.

ModelCraft pamti udaljenost dok ne prijeđete na drugi alat.

## Što treba znati

- Potisni/povuci radi s jednom plohom odjednom. Ako kliknete nešto što nije ploha, statusna traka kaže "Potisni/povuci radi s plohom. Kliknite plohu."
- Za potiskivanje/povlačenje plohe unutar grupe ili komponente, prvo je otvorite (dvaput kliknite na nju).
- Uz uključeno **Sudar**, potiskivanje ili povlačenje koje udari u drugo tijelo staje tamo gdje dotakne, a savjet kaže čime dotiče (naziv objekta ili "labava geometrija u ovoj grupi") i označava plohe na koje je naišlo. Udubljenje koje gurnete u vlastito tijelo (primjerice ploha s pomakom gurnuta natrag dolje) dio je tog tijela i nikad ga ne zaustavljaju njegovi zidovi.
- Dva tijela gurnuta jedno u drugo ne režu se niti spajaju: njihove plohe samo prolaze jedna kroz drugu. Vidi [Još nije izrađeno](topic:not-built-yet).
