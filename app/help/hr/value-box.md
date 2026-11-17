---
title: Upisivanje točnih veličina u polje vrijednosti
summary: Svi načini upisivanja duljina, veličina, točaka, odmaka, kutova, stranica i kopija te kako se čitaju jedinice i goli brojevi.
keywords: polje vrijednosti, polje mjera, vcb, upis, točno, kota, duljina, jedinice, stope, palci, metrički, milimetri, koordinate, odmak, niz, stranice, kut, decimalni zarez
from: 0148dc3d
---

Polje vrijednosti nalazi se u statusnoj traci na dnu, s oznakom koja se mijenja s alatom. Dok radite, prikazuje trenutačnu veličinu; u bilo kojem trenutku možete upisati točnu.

## Kako upisati

1. Započnite radnju klikom (prvi kut, ploha, točka s koje se pomiče).
2. Upisujte. Ne morate kliknuti polje vrijednosti: znamenka ili jedan od znakova `. , - ' " [ < * /` šalje upis tamo.
3. Pritisnite {{key:Enter}}.

U polju vrijednosti pritisnite {{key:Esc}} da ga očistite i vratite se na prikaz. Na zaslonu osjetljivom na dodir dodirnite polje vrijednosti da se pojavi tipkovnica.

Ako ModelCraft ne može pročitati što ste upisali, statusna traka kaže „Upišite duljinu, na primjer 3m, 10'6" ili 4m,3m.“ Ako alat to ne može upotrijebiti, kaže „To nije uspjelo: …“ s razlogom.

## Duljine

| Upis | Znači |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Stope |
| `6"` `6in` `6 inches` | Palci |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stope i palci, s razlomkom |
| `6 1/2"` `6-1/2"` `3/4"` | Palci s razlomkom |
| `1.5ft` `.5m` | Decimalni brojevi s jedinicom |
| `120` | Goli broj, u jedinici modela |

**Goli broj koristi jedinicu modela**, kako pokazuje birač u donjem desnom kutu: palci u modelu u stopama i palcima (pa je `120` 10 stopa), milimetri u modelu u milimetrima, i tako dalje. Upisana jedinica uvijek ima prednost, bez obzira na jedinicu modela. Zakrivljeni navodnici i oznake prim (’ ” ′ ″) također se čitaju kao stope i palci.

:::warning
Za decimale uvijek upotrebljavajte **točku**: `2.5m`. Zarez odvaja dvije vrijednosti, pa `2,5` znači 2 i 5 (dvije vrijednosti), bez obzira na jezične postavke.
:::

## Računanje

Svaka duljina može biti izračun: zbrajanje `+`, oduzimanje `-`, množenje `*`, dijeljenje `/` i zagrade. Kalkulator nije potreban.

| Upis | Znači |
|---|---|
| `2.5/3` | Trećina od 2.5 (u jedinici modela) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" u modelu u stopama i palcima |
| `3m-25cm` | 2.75 m |

Goli broj je u jedinici modela kad je duljina (`2.5/3` u modelu u metrima iznosi 0.833 m), a obični faktor kad množi ili dijeli duljinu (`2*450mm`). Kutovi i faktori također primaju izračune: `90/2` iznosi 45°. Dvije pomnožene duljine daju površinu, a ne duljinu, pa se `2m*3m` odbija.

Ako ModelCraft ne može izračunati, statusna traka kaže što nije u redu i gdje, na primjer „Dijeljenje nulom (znak 4).“ Zagrada također pokreće polje vrijednosti, pa možete početi s `(`.

Ovi zadržavaju vlastito značenje: `/3`, `3x` i `*3` nakon kopiranja, `24s` za stranice i `/3` s odabranim bridom (ona [dijeli brid](topic:divide)).

## Po alatu

| Alat | Oznaka | Upis |
|---|---|---|
| {{ui:Linija}} | {{ui:Duljina}} | Duljina (prema pokazivaču), ili točka ili odmak (dolje) |
| {{ui:Pravokutnik}} | {{ui:Kote}} | Dvije duljine: `4m,3m`, `12',10'`. Radi i točka-zarez: `4m;3m` |
| {{ui:Kružnica}}, {{ui:Poligon}} | {{ui:Stranice}}, zatim {{ui:Radijus}} | Prije prvog klika broj stranica: `12s` ili `12` (3 do 999). Poslije toga radijus |
| {{ui:Potisni/povuci}} | {{ui:Udaljenost}} | Duljina. Negativna ide u suprotnom smjeru |
| {{ui:Pomakni}} | {{ui:Udaljenost}} | Duljina (prema pokazivaču), ili točka ili odmak. Nakon kopiranja: `3x`, `*3`, `/3` |
| {{ui:Zakreni}} | {{ui:Kut}} | Stupnjevi: `90`, `-45`, `22.5` |
| {{ui:Skaliraj}} | {{ui:Skaliraj}} | Faktor veći od 0: `2`, `0.5`, `1.25` |
| {{ui:Mjerna vrpca}} | {{ui:Odmakni}} ili {{ui:Duljina}} | Duljina |
| {{ui:Podijeli}} | {{ui:Dijelovi}} | Koliko jednakih dijelova: `5`, `5s` ili `/5` (2 do 1000). Vidi [Podijelite brid ili krivulju na jednake dijelove](topic:divide) |
| {{ui:Kota}} | {{ui:Odmakni}}, zatim {{ui:Duljina}} | Gdje ide mjerna crta; odmah nakon postavljanja nova duljina mijenja veličinu modela |
| {{ui:Odaberi}} | {{ui:Vrijednost}} | Kad je odabrana jedna kota ili brid, nova duljina mijenja veličinu modela. Vidi [Kotiranje i promjena veličine](topic:dimensions) |

## Točke i odmaci

Za {{ui:Linija}} i {{ui:Pomakni}}, nakon prvog klika:

- `[x,y,z]` ide na tu točnu točku u modelu (u vlastitim osima grupe kad uređujete unutar grupe). Primjer: `[0,0,3m]` je 3 m ravno iznad ishodišta.
- `<dx,dy,dz>` ide tu daleko od prve točke duž crvene, zelene i plave osi. Primjer: `<0,0,10'>` je 10 stopa ravno gore.

Svaka od tri vrijednosti može imati vlastitu jedinicu: `<12',0,6">`.

## Kopije nakon pomicanja

Odmah nakon kopiranja s {{ui:Pomakni}}:

| Upis | Izrađuje |
|---|---|
| `3x` ili `*3` | 3 kopije u nizu na istom razmaku |
| `/3` | 3 kopije ravnomjerno raspoređene od izvornika do prve kopije |

Do 500 kopija. Vidi [Pomicanje, kopiranje i izrada nizova](topic:move-copy#a-row-of-copies).

## Upisana duljina treba smjer

Jedna upisana duljina ide u smjeru u kojem pokazivač pokazuje od prvog klika. Ako upisujete odmah nakon klika, prije ikakvog pomicanja, još nema smjera i ništa se ne događa. Pomaknite pokazivač malo prema mjestu kamo želite ići, zatim upišite.

## Jedinica modela

Promijenite jedinicu u biraču u donjem desnom kutu: {{ui:ft i in}}, in, ft, yd, mi, mil, µm, mm, cm, m ili km, ako su uključene u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} (vlastita jedinica modela uvijek je tu). Duljina upisana oznakom bilo koje jedinice čita se u toj jedinici. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists). Mijenja se način prikaza duljina i čitanje golih brojeva; model ostaje iste veličine. Jedinica se sprema u datoteku.

Kako se veličine prikazuju:

| Jedinica | Duljine | Površine | Volumeni |
|---|---|---|---|
| ft i in | `10' 6 1/2"` (do 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², inače mm² | m³ od 0.01 m³, inače mm³ |

Novi model počinje u stopama i palcima kad je jezik preglednika postavljen na regiju SAD-a (te Liberiju i Mjanmar), a inače u milimetrima. Umjesto toga koristi se jedinica označena zvjezdicom u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}}, ako je ModelCraft ima. Ili promijenite birač nakon {{ui:New}}.
