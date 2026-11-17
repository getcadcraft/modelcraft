---
title: Premesti, kopiraj i napravi nizove
summary: Premestite stvari klikom ili za tačno rastojanje, kopirajte ih uz taster za izmenu i napravite red kopija s jednakim razmakom.
keywords: premesti, kopiraj, dupliraj, niz, red, razmak, podeli, ofset, istegni, kolone, ponovi, više kopija
from: 280245fc
---

{{ui:Premesti}} ({{key:M}}) premešta sve što je izabrano s jedne tačke na drugu. Ako držite taster za izmenu, dobija se kopija, a posle kopiranja možete upisati koliko još kopija želite.

## Premesti nešto

1. Izaberite ono što želite da premestite (vidi [Izaberi stvari](topic:select)). Ako ništa nije izabrano, Premesti uzima ono na šta kliknete.
2. Pritisnite {{key:M}}.
3. Kliknite tačku s koje se premešta. Izaberite nešto značajno, na primer ugao: ta tačka će se tačno naći tamo gde kliknete sledeći put.
4. Pomerajte pokazivač. Izbor prati pokazivač. Hvata se za tačke, ivice i crvene, zelene i plave pravce, kao što to radi linija.
5. Kliknite mesto na koje tačka ide ili upišite rastojanje i pritisnite {{key:Enter}}.

   Savet u statusnoj traci se vraća na „Kliknite tačku s koje se premešta…” za sledeće premeštanje.

Upisano rastojanje ide u smeru u koji pokazujete. Možete upisati i tačan pomeraj, `<2m,0,0>` (2 m po crvenoj), ili tačno odredište za izabranu tačku, `[0,0,0]` (koordinatni početak). Vidi [Unos tačnih veličina](topic:value-box).

Da biste pomerali samo po jednoj osi, pritisnite strelicu posle prvog klika: {{key:Right}} zaključava na crvenu, {{key:Left}} na zelenu, {{key:Up}} na plavu. Pritisnite istu strelicu ponovo da otključate.

## Pomeranje dela oblika ga rasteže

Geometrija koja nije grupisana je povezana. Ako izaberete jednu površ ili nekoliko ivica i pomerite ih, površi vezane za njih se istežu da bi ih pratile. Pomerite gornju površ kutije u stranu i kutija se nagne; pomerite jednu ivicu krova i nagib krova se menja. Površi koje više ne mogu ostati ravne savijaju se u trouglove.

Da biste pomerili ceo objekat bez istezanja, prvo ga izaberite u celosti (trostruki klik na njega) ili, još bolje, napravite od njega grupu ili komponentu (vidi [Grupe i komponente](topic:groups-components)).

## Kopiranje nečega

1. Izaberite ono što želite da kopirate.
2. Pritisnite {{key:M}}.
3. Držite {{key:Ctrl}} (ili {{key:Alt}}) i kliknite tačku s koje se premešta. Na Mac-u isto radi {{key:Mod}} ili {{key:Alt}}. Savet kaže „Ctrl umesto toga premešta”, što znači da kopirate.

   Možete i da pritisnete i otpustite {{key:Ctrl}} ili {{key:Alt}} posle prvog klika da biste prelazili između premeštanja i kopiranja.

4. Kliknite mesto na koje ide kopija ili upišite rastojanje i pritisnite {{key:Enter}}.

   Original ostaje gde je bio, a kopija je izabrana.

## Kopiraj, iseci, nalepi i dupliraj

- {{key:Mod+C}} kopira izbor, {{key:Mod+X}} ga seče (kopira, pa briše), a {{ui:Kopiraj}} i {{ui:Nalepi}} su takođe dugmad na traci grupe {{ui:Uređivanje}}, a {{ui:Više}} pored njih ima seci, nalepi na istom mestu i dupliraj.
- {{key:Mod+V}} lepi: obris kopije prati pokazivač, hvata se kao i svaki alat, a klik je spušta tako da njen najniži ugao bude tu. {{key:Esc}} otkazuje.
- {{key:Mod+Shift+V}} lepi na istom mestu, tačno tamo odakle je kopija došla, što je korisno za premeštanje nečega u grupu koju ste otvorili.
- {{key:Mod+D}} ({{key:Shift+D}} u stilu Modeler) dupliraj: pravi se kopija i odmah prati pokazivač; kliknite da je spustite, upišite rastojanje ili pritisnite {{key:Esc}} da je odbacite. Odmah posle toga upišite `3x` za još kopija u nizu.

Nalepljena grupa postaje nova grupa. Nalepljena komponenta je još jedno mesto iste komponente, pa izmena jedne menja sve. Kopije se lepe i u drugi ModelCraft jezičak u ovom pregledaču (tamo ulaze kao nove definicije).

## Red kopija

Odmah posle kopiranja, dok je {{ui:Premesti}} i dalje alat:

- Upišite `3x` (ili `*3`) i pritisnite {{key:Enter}} za tri kopije u nizu, svaka na istom razmaku kao prva kopija. Dobijate tri nove kopije pored originala.
- Upišite `/3` i pritisnite {{key:Enter}} za deljenje: tri kopije se ravnomerno raspoređuju od originala do mesta gde ste postavili prvu kopiju, a poslednja je tačno na tom mestu. Koristite to za popunjavanje raspona: postavite jednu kopiju na krajnji kraj, pa podelite.

Možete odmah upisati drugi broj: `5x` zamenjuje red `3x`. Savet vas podseća: „Kopirano. Upišite 3x za još kopija u nizu ili /3 za deljenje rastojanja.”

### Primer: kolone na svakih 6 metara

1. Napravite kolonu i pretvorite je u komponentu ({{key:G}}), da se sve kopije kasnije menjaju zajedno.
2. Pritisnite {{key:M}}, držite {{key:Ctrl}} i kliknite donji ugao kolone.
3. Pomerajte se po crvenoj osi i upišite `6m`, pa {{key:Enter}}.
4. Upišite `4x` i {{key:Enter}}. Imate pet kolona, na razmaku od 6 m.

## Stvari koje treba znati

- Pritisnite {{key:Esc}} pre drugog klika da otkažete; sve se vraća na mesto gde je bilo.
- {{ui:Premesti}} radi unutar grupe koju uređujete. Da biste pomerili celu grupu, prvo je zatvorite i izaberite je spolja.
- Kada je uključeno {{ui:Sudaranje}} (dole desno i u [podešavanjima ModelCraft-a](topic:settings#solids-stop-where-they-touch)), premeštanje se zaustavlja tamo gde izbor dodirne drugo čvrsto telo, umesto da prolazi kroz njega. Kliknite {{ui:Sudaranje}} da ga isključite za premeštanje koje treba da prođe kroz.
- Da stavite kopiju u drugu grupu: kopirajte je, otvorite drugu grupu i nalepite ({{key:Mod+Shift+V}} zadržava isto mesto).
