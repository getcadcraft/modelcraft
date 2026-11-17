---
title: Pomakni, kopiraj i izradi nizove
summary: Pomičite objekte klikom ili za točnu udaljenost, kopirajte ih uz pomoćnu tipku i izradite red jednako razmaknutih kopija.
keywords: pomakni, kopiraj, dupliciraj, niz, red, razmak, podijeli, odmak, rastegni, stupci, ponavljanje, višestruko kopiranje
from: 280245fc
---

{{ui:Pomakni}} ({{key:M}}) pomiče sve što je odabrano s jedne točke na drugu. Držanjem pomoćne tipke stvara se kopija, a nakon kopiranja možete upisati koliko još želite.

## Pomicanje objekta

1. Odaberite što želite pomaknuti (vidi [Odabir objekata](topic:select)). Ako ništa nije odabrano, alat {{ui:Pomakni}} uzima ono na što kliknete.
2. Pritisnite {{key:M}}.
3. Kliknite točku s koje se pomiče. Odaberite nešto značajno, primjerice kut: ta će točka završiti točno tamo gdje sljedeći put kliknete.
4. Pomaknite pokazivač. Odabir slijedi pokazivač. Hvata se za točke, rubove i smjerove crvene, zelene i plave boje kao što to radi linija.
5. Kliknite gdje točka treba doći ili upišite udaljenost i pritisnite {{key:Enter}}.

   Savjet u statusnoj traci vraća se na „Kliknite točku s koje želite pomaknuti…“ za sljedeće pomicanje.

Upisana udaljenost ide u smjeru u kojem pokazujete. Možete upisati i točan pomak, `<2m,0,0>` (2 m duž crvene osi), ili točno odredište za odabranu točku, `[0,0,0]` (ishodište). Vidi [Upisivanje točnih veličina](topic:value-box).

Za pomicanje samo duž jedne osi, nakon prvog klika pritisnite tipku sa strelicom: {{key:Right}} zaključava na crvenu, {{key:Left}} na zelenu, {{key:Up}} na plavu. Ponovno pritisnite istu strelicu za otključavanje.

## Pomicanje dijela oblika ga rasteže

Geometrija koja nije grupirana je povezana. Ako odaberete jednu plohu ili nekoliko bridova i pomaknete ih, plohe vezane za njih se rastežu i prate ih. Pomaknete li gornju plohu kutije u stranu, kutija se nagne; pomaknete li jedan brid krova, mijenja se nagib krova. Plohe koje više ne mogu ostati ravne savijaju se u trokute.

Za pomicanje cijelog objekta bez rastezanja prvo ga odaberite u cijelosti (trostruki klik na njega) ili, još bolje, napravite od njega grupu ili komponentu (vidi [Grupe i komponente](topic:groups-components)).

## Kopiranje objekta

1. Odaberite što želite kopirati.
2. Pritisnite {{key:M}}.
3. Držite {{key:Ctrl}} (ili {{key:Alt}}) i kliknite točku s koje se pomiče. Na Macu isto čini {{key:Mod}} ili {{key:Alt}}. Savjet glasi „Ctrl umjesto toga pomiče“, što znači da kopirate.

   Također možete pritisnuti i otpustiti {{key:Ctrl}} ili {{key:Alt}} nakon prvog klika da biste se prebacivali između pomicanja i kopiranja.

4. Kliknite gdje kopija treba ići ili upišite udaljenost i pritisnite {{key:Enter}}.

   Izvorni objekt ostaje na mjestu, a odabrana je kopija.

## Kopiraj, izreži, zalijepi i dupliciraj

- {{key:Mod+C}} kopira odabir, {{key:Mod+X}} ga izrezuje (kopira, pa briše). {{ui:Kopiraj}} i {{ui:Zalijepi}} su također gumbi u grupi {{ui:Uređivanje}} na alatnoj traci, a {{ui:Više}} pored njih ima izrezivanje, lijepljenje na isto mjesto i dupliciranje.
- {{key:Mod+V}} lijepi: obris kopije prati pokazivač, hvata se kao i svaki alat, a klik je spušta tako da joj najniži kut bude tamo. {{key:Esc}} odustaje.
- {{key:Mod+Shift+V}} lijepi na isto mjesto, točno tamo odakle je kopija došla. Korisno je za premještanje nečega u grupu koju ste otvorili.
- {{key:Mod+D}} ({{key:Shift+D}} u stilu Modeler) dupliciranje: kopija se odmah izrađuje i kreće s pokazivačem. Kliknite da je spustite, upišite udaljenost ili pritisnite {{key:Esc}} da je odbacite. Odmah nakon toga upišite `3x` za još kopija zaredom.

Zalijepljena grupa postaje nova grupa. Zalijepljena komponenta je još jedan smještaj iste komponente, pa uređivanje jedne mijenja sve. Kopije se lijepe i u drugu karticu ModelCraft u ovom pregledniku (tamo ulaze kao nove definicije).

## Red kopija

Odmah nakon kopiranja, dok je alat {{ui:Pomakni}} još aktivan:

- Upišite `3x` (ili `*3`) i pritisnite {{key:Enter}} za tri kopije zaredom, svaku na istom razmaku kao prva kopija. Dobit ćete tri nove kopije uz original.
- Upišite `/3` i pritisnite {{key:Enter}} za podjelu: tri kopije ravnomjerno raspoređene od originala do mjesta gdje ste stavili prvu kopiju, s posljednjom na tom mjestu. Koristite to za ispunjavanje raspona: postavite jednu kopiju na daleki kraj, pa podijelite.

Odmah možete upisati drugi broj: `5x` zamjenjuje red `3x`. Savjet vas podsjeća: „Kopirano. Upišite 3x za još kopija zaredom ili /3 za podjelu udaljenosti.“

### Primjer: stupci na svakih 6 metara

1. Napravite stup i pretvorite ga u komponentu ({{key:G}}), kako bi se sve kopije kasnije mijenjale zajedno.
2. Pritisnite {{key:M}}, držite {{key:Ctrl}} i kliknite donji kut stupa.
3. Pomaknite se duž crvene osi i upišite `6m`, zatim {{key:Enter}}.
4. Upišite `4x` i {{key:Enter}}. Imate pet stupova, razmaknutih 6 m.

## Što treba znati

- Pritisnite {{key:Esc}} prije drugog klika za odustajanje; sve se vraća na prijašnje mjesto.
- Pomicanje radi unutar grupe koju uređujete. Za pomicanje cijele grupe prvo je zatvorite i odaberite je izvana.
- Kad je uključen **Sudar** (dolje desno i u [postavkama ModelCraft](topic:settings#solids-stop-where-they-touch)), pomicanje staje tamo gdje odabir dotakne drugo tijelo, umjesto da prolazi kroz njega. Kliknite {{ui:Sudar}} da ga isključite za pomicanje koje treba proći kroz.
- Da biste kopiju stavili unutar druge grupe: kopirajte je, otvorite drugu grupu i zalijepite ({{key:Mod+Shift+V}} je zadržava na istom mjestu).
