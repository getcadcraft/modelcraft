---
title: Gurni i povuci površine u tijela
summary: Pretvori površinu u kutiju, učini zgradu višom ili nižom, dodaj erker ili udubljenje i ponovi rastojanje dvostrukim klikom.
keywords: gurni povuci, ekstrudiraj, visina, tijelo, kutija, masa, viši, udubljenje, ispupčenje, ponovi, dvostruki klik, zapremina, nivo, na površini, zajedno, ista visina
from: dc093c91
---

{{ui:Gurni/povuci}} ({{key:P}}) pomjera površinu duž njenog smjera: gore i dolje za pod, unutra i van za zid. Šta se dešava zavisi od površine.

## Napravi tijelo od površine

1. Nacrtaj površinu, npr. pravougaonik na tlu ([Crtanje površina](topic:draw-faces)).
2. Pritisni {{key:P}}.
3. Prijeđi pokazivačem preko površine. Ona se označava.
4. Klikni površinu, zatim pomjeri pokazivač. Površina se diže (ili tone) i iz njenih ivica rastu strane. Polje za vrijednost ({{ui:Udaljenost}}) i savjet pokazuju rastojanje.
5. Klikni da završiš, ili upiši rastojanje i pritisni {{key:Enter}}: `3m`, `10'`, `2700` u modelu u milimetrima.

   Sada imaš zatvoreno tijelo. Označi sve i grupiši ga (vidi [Grupe i komponente](topic:groups-components)): {{ui:Podaci o entitetu}} tada pokazuju "Tijelo: Da" i njegovu zapreminu.

Usamljena površina može ići na bilo koju stranu: povuci je gore za masu iznad tla, ili gurni dolje za jamu ili temelj.

:::tip
Umjesto dva klika, pritisni na površinu, prevuci i pusti. Na ekranu osjetljivom na dodir to je prirodan način: pritisni, prevuci, podigni.
:::

## Povuci do visine nečeg drugog

Dok vučeš, prijeđi preko ugla, sredine, ivice ili vodilice drugog dijela modela. Površina se pozicionira na tu visinu i marker pokazuje tačku. Koristi to da napraviš dva bloka iste visine, ili da staneš na vodilicu koju si postavio [mjernom trakom](topic:guides-measure).

Možeš i prijeći preko površine koja je paralelna onoj koju guraš, kao vrh drugog bloka ili vrh kutije na kojoj stoji stub. Savjet kaže "Na površini", a površina koju guraš završava na istom nivou. Npr. gurni unutrašnju površinu cijevi dolje dok ne bude na nivou kutije ispod cijevi.

Površina pod uglom u odnosu na onu koju guraš ne postavlja nivo. Rastojanje prati pokazivač. Isto važi i za površinu iza one koju guraš.

Kada se guranjem površina poklopi sa okolnim površinama, njene strane nestaju. Ne ostaju nulte strane, a obris koji si nacrtao ostaje na površini, pa je kasnije možeš ponovo gurnuti. Da bi opet bila jedna površina, obriši ivice obrisa sa {{ui:Gumica}}: dvije površine se spajaju.

## Napravi kutiju višom ili nižom

Gurni/povuci vrh kutije. Pošto strane već idu ravno gore od njega, vrh se jednostavno pomjera: kutija postaje viša ili niža, i nijedna nova ivica se ne pravi.

- Ako gurneš vrh sve do dna, kutija se uklanja. ModelCraft staje na nultoj visini; nikad ne okreće kutiju naopako.
- Isto važi za svaku površinu čiji svi susjedi idu duž njenog smjera, kao kraj zida.

## Dodaj erker ili udubljenje

1. Nacrtaj pravougaonik na strani kutije (počni ga na površini; ostaje u ravni površine).
2. Pritisni {{key:P}} i povuci novi pravougaonik **van**. Dodaje materijal: erker, dimnjak, nadstrešnicu.
3. Ili gurni ga **unutra**. Pravi udubljenje: trijem, nišu, ulaz uvučen unazad.

Kada se strane novog dijela poklope sa površinama koje već postoje, spajaju se u jednu površinu, pa na ravnom zidu nemaš slučajne linije.

## Gurni sve do kraja

Guranje površine u tijelo staje na prvoj površini iza nje. Kada je dostigne, pravi otvor kroz. Tako praviš prozore i vrata u zidu koji ima debljinu. Vidi [Probijanje otvora kroz zid](topic:openings).

## Upiši rastojanje

Nakon klika na površinu, upiši rastojanje i pritisni {{key:Enter}}.

- Upisano rastojanje ide u smjeru u kojem si se pomjerao. Ako se još nisi pomjerio, ide prema naprijed od površine (iz tijela van, sa tla gore).
- Upiši negativan broj, kao `-500`, da ide suprotno.
- Ako se predomisliš prije klika, pritisni {{key:Esc}}. Površina se vraća.

## Ponovi posljednje rastojanje

Nakon jednog guranja/povlačenja, dvaput klikni drugu površinu dok je {{ui:Gurni/povuci}} još odabran. Ona se pomjera za isto rastojanje. Ovo je brz način da više zidova ili više podova dobije istu debljinu ili visinu.

ModelCraft pamti rastojanje dok ne pređeš na drugi alat.

## Stvari koje treba znati

- Gurni/povuci radi sa jednom površinom odjednom. Ako klikneš nešto što nije površina, statusna traka kaže "Gurni/povuci radi sa površinom. Klikni površinu."
- Da guraš ili povučeš površinu unutar grupe ili komponente, prvo je otvori (dvaput klikni).
- Sa uključenim **Sudar**, guranje ili povlačenje koje naiđe na drugo tijelo staje tamo gdje dodiruje, a savjet kaže šta dodiruje (ime objekta, ili "labava geometrija u ovoj grupi") i označava površine na koje je naišao. Udubljenje koje guraš u vlastito tijelo (npr. površina pomaknuta unazad i gurnuta dolje) je dio tog tijela i nikad ga ne zaustavljaju njegovi zidovi.
- Dva tijela gurnuta jedno u drugo se ne sijeku niti spajaju: njihove površine samo prolaze jedna kroz drugu. Vidi [Još nije napravljeno](topic:not-built-yet).
