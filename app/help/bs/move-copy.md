---
title: Pomjeranje, kopiranje i pravljenje nizova
summary: Pomjeraj stvari klikom ili za tačno zadanu udaljenost, kopiraj ih uz tipku za promjenu i napravi red jednako razmaknutih kopija.
keywords: pomjeri, kopiraj, duplikat, niz, red, razmak, podijeli, pomak, rastegni, kolone, ponavljaj, višestruko kopiranje
from: 280245fc
---

{{ui:Move}} ({{key:M}}) pomjera sve što je odabrano s jedne tačke na drugu. Držanje tipke za promjenu pravi kopiju, a nakon kopiranja možeš upisati koliko još kopija želiš.

## Pomjeranje nečega

1. Odaberi ono što želiš pomjeriti (vidi [Odabir stvari](topic:select)). Ako ništa nije odabrano, {{ui:Move}} uzima ono na što klikneš.
2. Pritisni {{key:M}}.
3. Klikni tačku s koje pomjeraš. Odaberi nešto značajno, kao što je ugao: ta tačka će se tačno naći tamo gdje klikneš sljedeći put.
4. Pomjeraj pokazivač. Odabrano prati pokazivač. Hvata se za tačke, ivice i crvene, zelene i plave smjerove, kao što to radi linija.
5. Klikni mjesto na koje tačka treba doći ili upiši udaljenost i pritisni {{key:Enter}}.

   Traka sa savjetom u statusnoj traci vraća se na „Klikni tačku s koje pomjeraš…” za sljedeće pomjeranje.

Upisana udaljenost ide u smjeru u kojem pokazuješ. Možeš upisati i tačan pomak, `<2m,0,0>` (2 m duž crvene), ili tačno odredište za odabranu tačku, `[0,0,0]` (ishodište). Vidi [Unos tačnih veličina](topic:value-box).

Da pomjeraš samo duž jedne ose, nakon prvog klika pritisni tipku sa strelicom: {{key:Right}} zaključava na crvenu, {{key:Left}} na zelenu, {{key:Up}} na plavu. Ponovno pritisni istu strelicu za otključavanje.

## Pomjeranje dijela oblika ga rasteže

Geometrija koja nije grupisana je povezana. Ako odabereš jednu plohu ili nekoliko ivica i pomjeriš ih, plohe vezane za njih će se rastegnuti da ih prate. Pomjeri gornju plohu kutije u stranu, pa će se kutija nagnuti; pomjeri jednu ivicu krova, pa će se nagib krova promijeniti. Plohe koje više ne mogu ostati ravne savijaju se u trouglove.

Da pomjeriš cijeli objekt bez rastezanja, prvo ga odaberi u cijelosti (trostruki klik na njega) ili, još bolje, napravi od njega grupu ili komponentu (vidi [Grupe i komponente](topic:groups-components)).

## Kopiranje nečega

1. Odaberi ono što želiš kopirati.
2. Pritisni {{key:M}}.
3. Drži {{key:Ctrl}} (ili {{key:Alt}}) i klikni tačku s koje pomjeraš. Na Mac-u isto rade {{key:Mod}} ili {{key:Alt}}. Savjet kaže „Ctrl umjesto toga pomjera”, što znači da kopiraš.

   Nakon prvog klika možeš i pritisnuti i otpustiti {{key:Ctrl}} ili {{key:Alt}} za prebacivanje između pomjeranja i kopiranja.

4. Klikni mjesto na koje kopija ide ili upiši udaljenost i pritisni {{key:Enter}}.

   Original ostaje gdje je bio, a kopija je odabrana.

## Kopiraj, izreži, zalijepi i duplikuj

- {{key:Mod+C}} kopira odabrano, {{key:Mod+X}} izrezuje (kopira pa briše), a {{ui:Copy}} i {{ui:Paste}} su takođe dugmad u grupi {{ui:Edit}} na traci s alatima, dok {{ui:More}} pored njih nudi izrezivanje, lijepljenje na istom mjestu i dupliciranje.
- {{key:Mod+V}} lijepi: obris kopije prati pokazivač, hvata se kao i svaki alat, a klik je spušta tako da njen najniži ugao bude na tom mjestu. {{key:Esc}} otkazuje.
- {{key:Mod+Shift+V}} lijepi na istom mjestu, tačno tamo odakle je kopija došla, što je korisno za premještanje nečega u grupu koju si otvorio.
- {{key:Mod+D}} ({{key:Shift+D}} u stilu Modeler) duplicira: kopija se pravi i odmah prati pokazivač; klikni da je spustiš, upiši udaljenost ili pritisni {{key:Esc}} da je ostaviš. Odmah nakon toga upiši `3x` za još kopija u nizu.

Zalijepljena grupa postaje nova grupa. Zalijepljena komponenta je još jedan primjerak iste komponente, pa izmjena jedne mijenja sve. Kopije se lijepe i u drugi karticu ModelCraft-a u ovom pregledaču (tamo dolaze kao nove definicije).

## Red kopija

Odmah nakon kopiranja, dok je {{ui:Move}} još alat:

- Upiši `3x` (ili `*3`) i pritisni {{key:Enter}} za tri kopije u nizu, svaka na istom razmaku kao prva kopija. Dobijaš tri nove kopije pored originala.
- Upiši `/3` i pritisni {{key:Enter}} za dijeljenje: tri kopije ravnomjerno raspoređene od originala do mjesta gdje si postavio prvu kopiju, pri čemu je posljednja na tom mjestu. Ovo koristi za popunjavanje raspona: postavi jednu kopiju na daleki kraj, pa podijeli.

Možeš odmah upisati drugi broj: `5x` zamjenjuje red `3x`. Savjet te podsjeća: „Kopirano. Upiši 3x za više kopija u nizu ili /3 za dijeljenje udaljenosti.”

### Primjer: kolone na svakih 6 metara

1. Napravi kolonu i pretvori je u komponentu ({{key:G}}), tako da se sve kopije kasnije mijenjaju zajedno.
2. Pritisni {{key:M}}, drži {{key:Ctrl}} i klikni ugao baze kolone.
3. Pomjeraj duž crvene ose i upiši `6m`, pa {{key:Enter}}.
4. Upiši `4x` i {{key:Enter}}. Sada imaš pet kolona, na razmaku od 6 m.

## Stvari koje treba znati

- Pritisni {{key:Esc}} prije drugog klika za otkazivanje; sve se vraća na svoje mjesto.
- {{ui:Move}} radi unutar grupe koju uređuješ. Da pomjeriš cijelu grupu, prvo je zatvori i odaberi je spolja.
- Kada je uključeno {{ui:Collide}} (dolje desno i u [postavkama ModelCraft-a](topic:settings#solids-stop-where-they-touch)), pomjeranje staje tamo gdje odabrano dodiruje drugo tijelo, umjesto da prolazi kroz njega. Klikni {{ui:Collide}} da ga isključiš za pomjeranje koje treba proći kroz.
- Da staviš kopiju unutar druge grupe: kopiraj je, otvori drugu grupu i zalijepi ({{key:Mod+Shift+V}} je zadržava na istom mjestu).
