---
title: Unošenje tačnih veličina u polje za vrednost
summary: Svi načini unosa dužina, veličina, tačaka, pomeraja, uglova, stranica i kopija, i kako se čitaju jedinice i goli brojevi.
keywords: polje za vrednost, polje za mere, vcb, unos, tačno, dimenzija, dužina, jedinice, stope, inči, metrički, milimetri, koordinate, pomeraj, niz, stranice, ugao, decimalni zarez
from: 0148dc3d
---

Polje za vrednost nalazi se u statusnoj traci pri dnu, sa natpisom koji se menja sa alatom. Dok radite, pokazuje veličinu uživo; u bilo kom trenutku možete da ukucate tačnu.

## Kako se unosi

1. Započnite radnju klikom (prvi ugao, površ, tačka iz koje se pomera).
2. Ukucajte. Ne morate da kliknete polje za vrednost: cifra ili jedan od znakova `. , - ' " [ < * /` šalje vaš unos tamo.
3. Pritisnite {{key:Enter}}.

Pritisnite {{key:Esc}} u polju za vrednost da ga očistite i vratite se na prikaz. Na ekranu osetljivom na dodir dodirnite polje za vrednost da se pojavi tastatura.

Ako ModelCraft ne može da pročita šta ste ukucali, statusna traka kaže: „Ukucajte dužinu, na primer 3m, 10'6" ili 4m,3m.” Ako alat to ne može da koristi, kaže „Nije uspelo: …” sa razlogom.

## Dužine

| Tip | Znači |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Stope |
| `6"` `6in` `6 inches` | Inči |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stope i inči, sa razlomkom |
| `6 1/2"` `6-1/2"` `3/4"` | Inči sa razlomkom |
| `1.5ft` `.5m` | Decimale sa jedinicom |
| `120` | Goli broj, u jedinici modela |

**Goli broj koristi jedinicu modela**, kako je prikazano u biraču na dnu desno: inči u modelu u stopama i inčima (pa je `120` 10 stopa), milimetri u modelu u milimetrima, i tako dalje. Upisivanje jedinice uvek pobeđuje, bez obzira na jedinicu modela. Kosi navodnici i oznake prim (’ ” ′ ″) čitaju se takođe kao stope i inči.

:::warning
Uvek koristite **tačku** za decimale: `2.5m`. Zarez razdvaja dve vrednosti, pa `2,5` znači 2 i 5 (dve vrednosti), bez obzira na jezička podešavanja.
:::

## Računice

Svaka dužina može biti računica: dodajte `+`, oduzmite `-`, množite `*`, delite `/`, i koristite zagrade. Kalkulator nije potreban.

| Tip | Znači |
|---|---|
| `2.5/3` | Trećina broja 2.5 (u jedinici modela) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" u modelu u stopama i inčima |
| `3m-25cm` | 2.75 m |

Goli broj je u jedinici modela kad je dužina (`2.5/3` u modelu u metrima je 0.833 m), a prost faktor kad množi ili deli dužinu (`2*450mm`). Uglovi i faktori takođe primaju računice: `90/2` je 45°. Dve dužine pomnožene daju površinu, ne dužinu, pa se `2m*3m` odbija.

Ako ModelCraft ne može da izračuna, statusna traka kaže šta nije u redu i gde, na primer „Deljenje nulom (znak 4).” Zagrada takođe pokreće polje za vrednost, pa možete da počnete sa `(`.

Ovi zadržavaju svoje značenje: `/3`, `3x` i `*3` posle kopije, `24s` za stranice, i `/3` kad je izabrana ivica (tada [deli ivicu](topic:divide)).

## Po alatu

| Alat | Oznaka | Unos |
|---|---|---|
| {{ui:Linija}} | {{ui:Dužina}} | Dužina (ka pokazivaču), ili tačka ili pomeraj (ispod) |
| {{ui:Pravougaonik}} | {{ui:Kote}} | Dve dužine: `4m,3m`, `12',10'`. Radi i tačka-zarez: `4m;3m` |
| {{ui:Krug}}, {{ui:Poligon}} | {{ui:Stranice}}, pa {{ui:Poluprečnik}} | Pre prvog klika, broj stranica: `12s` ili `12` (3 do 999). Posle toga, poluprečnik |
| {{ui:Guraj/vuci}} | {{ui:Razdaljina}} | Dužina. Negativna ide u suprotnom smeru |
| {{ui:Premesti}} | {{ui:Razdaljina}} | Dužina (ka pokazivaču), ili tačka ili pomeraj. Posle kopije: `3x`, `*3`, `/3` |
| {{ui:Rotiraj}} | {{ui:Ugao}} | Stepeni: `90`, `-45`, `22.5` |
| {{ui:Skaliraj}} | {{ui:Skaliraj}} | Faktor veći od 0: `2`, `0.5`, `1.25` |
| {{ui:Merna traka}} | {{ui:Odmak}} ili {{ui:Dužina}} | Dužina |
| {{ui:Podeli}} | {{ui:Delova}} | Koliko jednakih delova: `5`, `5s` ili `/5` (2 do 1000). Vidi [Podela ivice ili krive na jednake delove](topic:divide) |
| {{ui:Kota}} | {{ui:Odmak}}, pa {{ui:Dužina}} | Gde ide linija kote; odmah posle postavljanja, nova dužina menja veličinu modela |
| {{ui:Izaberi}} | {{ui:Vrednost}} | Sa jednom izabranom kotom ili ivicom, nova dužina menja veličinu modela. Vidi [Kota i promena veličine](topic:dimensions) |

## Tačke i pomeraji

Za {{ui:Linija}} i {{ui:Premesti}}, posle prvog klika:

- `[x,y,z]` ide u tu tačnu tačku modela (u sopstvenim osama grupe kad uređujete unutar grupe). Primer: `[0,0,3m]` je 3 m pravo iznad početka.
- `<dx,dy,dz>` ide tu daljinu od prve tačke duž crvene, zelene i plave ose. Primer: `<0,0,10'>` je 10 stopa pravo gore.

Svaka od tri vrednosti može imati svoju jedinicu: `<12',0,6">`.

## Kopije posle pomeranja

Odmah posle kopiranja alatom {{ui:Premesti}}:

| Tip | Pravi |
|---|---|
| `3x` ili `*3` | 3 kopije u nizu, na istom razmaku |
| `/3` | 3 kopije ravnomerno raspoređene od originala do prve kopije |

Do 500 kopija. Vidi [Premesti, kopiraj i pravi nizove](topic:move-copy#a-row-of-copies).

## Unete dužine treba smer

Jedna uneta dužina ide u smeru u kom pokazivač gleda od prvog klika. Ako kucate odmah posle klika, pre pomeranja, nema smera pa se ništa ne dešava. Pomerite pokazivač malo ka mestu kuda hoćete, pa ukucajte.

## Jedinica modela

Promenite jedinicu u biraču na dnu desno: {{ui:ft i in}}, in, ft, yd, mi, mil, µm, mm, cm, m ili km, ukoliko su uključene u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} (sopstvena jedinica modela je uvek tu). Dužina ukucana sa oznakom bilo koje jedinice čita se u toj jedinici. Vidi [Jedinice, uneте vrednosti i liste jedinica](common:unit-lists). Menja kako se dužine prikazuju i kako se čitaju goli brojevi; model ostaje iste veličine. Jedinica se čuva u datoteci.

Kako se veličine prikazuju:

| Jedinica | Dužine | Površine | Zapremine |
|---|---|---|---|
| ft i in | `10' 6 1/2"` (do 1/16") | kv. ft | kub. ft |
| in | `126 1/2"` | kv. in | kub. in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², inače mm² | m³ od 0.01 m³, inače mm³ |

Novi model počinje u stopama i inčima kad je jezik pregledača podešen na američku regiju (i Liberiju i Mjanmar), a inače u milimetrima. Jedinica označena zvezdicom u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} koristi se umesto toga, kad ModelCraft je ima. Ili promenite birač posle {{ui:Novo}}.
