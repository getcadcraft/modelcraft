---
title: Unesi tačne veličine u polje za vrijednosti
summary: Svi načini unosa dužina, veličina, tačaka, odmaka, uglova, stranica i kopija, i kako se čitaju jedinice i goli brojevi.
keywords: polje za vrijednosti, polje mjera, vcb, unos, tačno, kota, dužina, jedinice, stope, inči, metrički, milimetri, koordinate, odmak, niz, stranice, ugao, decimalni zarez
from: 0148dc3d
---

Polje za vrijednosti nalazi se u statusnoj traci pri dnu, s oznakom koja se mijenja s alatom. Dok radiš, prikazuje živu veličinu; u bilo kom trenutku možeš upisati tačnu.

## Kako unijeti

1. Počni radnju klikom (prvi ugao, površina, tačka od koje se pomjera).
2. Upisuj. Ne moraš kliknuti na polje za vrijednosti: cifra ili jedan od znakova `. , - ' " [ < * /` šalje tvoj unos tamo.
3. Pritisni {{key:Enter}}.

U polju za vrijednosti pritisni {{key:Esc}} da ga očistiš i vratiš se na prikaz. Na ekranu osjetljivom na dodir dodirni polje za vrijednosti da otvoriš tastaturu.

Ako ModelCraft ne može pročitati unos, statusna traka kaže: „Upiši dužinu, na primjer 3m, 10'6" ili 4m,3m.“ Ako alat ne može da ga koristi, piše „Nije uspjelo: …“ s razlogom.

## Dužine

| Unos | Znači |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Stope |
| `6"` `6in` `6 inches` | Inči |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stope i inči, s razlomkom |
| `6 1/2"` `6-1/2"` `3/4"` | Inči s razlomkom |
| `1.5ft` `.5m` | Decimale s jedinicom |
| `120` | Goli broj, u jedinici modela |

**Goli broj koristi jedinicu modela**, kako je prikazano u biraču dolje desno: inči u modelu u stopama i inčima (pa je `120` 10 stopa), milimetri u modelu u milimetrima, i tako dalje. Upisana jedinica uvijek pobjeđuje, bez obzira na jedinicu modela. Kose navodnike i oznake prvog i drugog reda (’ ” ′ ″) također čitaju kao stope i inče.

:::warning
Za decimale uvijek koristi **tačku**: `2.5m`. Zarez razdvaja dvije vrijednosti, pa `2,5` znači 2 i 5 (dvije vrijednosti), bez obzira na jezičke postavke.
:::

## Računanje

Svaka dužina može biti račun: sabiranje `+`, oduzimanje `-`, množenje `*`, dijeljenje `/`, i zagrade. Kalkulator nije potreban.

| Unos | Znači |
|---|---|
| `2.5/3` | Trećina od 2.5 (u jedinici modela) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" u modelu u stopama i inčima |
| `3m-25cm` | 2.75 m |

Goli broj je u jedinici modela kada je dužina (`2.5/3` u modelu u metrima je 0.833 m), a običan faktor kada množi ili dijeli dužinu (`2*450mm`). I uglovi i faktori mogu biti računi: `90/2` je 45°. Dvije pomnožene dužine daju površinu, a ne dužinu, pa se `2m*3m` odbija.

Ako ModelCraft ne može da izračuna, statusna traka kaže šta nije u redu i gdje, na primjer „Dijeljenje nulom (znak 4).“ Zagrada također pokreće polje za vrijednosti, pa možeš početi s `(`.

Ovi zadržavaju svoje značenje: `/3`, `3x` i `*3` nakon kopije, `24s` za stranice, i `/3` kad je odabrana ivica (ona [dijeli ivicu](topic:divide)).

## Po alatu

| Alat | Oznaka | Unos |
|---|---|---|
| {{ui:Linija}} | {{ui:Dužina}} | Dužina (prema pokazivaču), ili tačka ili odmak (dolje) |
| {{ui:Pravougaonik}} | {{ui:Kote}} | Dvije dužine: `4m,3m`, `12',10'`. Radi i tačka-zarez: `4m;3m` |
| {{ui:Krug}}, {{ui:Poligon}} | {{ui:Stranice}}, zatim {{ui:Poluprečnik}} | Prije prvog klika, broj stranica: `12s` ili `12` (3 do 999). Poslije toga, poluprečnik |
| {{ui:Gurni/povuci}} | {{ui:Udaljenost}} | Dužina. Negativna ide u suprotnom smjeru |
| {{ui:Pomjeri}} | {{ui:Udaljenost}} | Dužina (prema pokazivaču), ili tačka ili odmak. Nakon kopije: `3x`, `*3`, `/3` |
| {{ui:Rotiraj}} | {{ui:Ugao}} | Stepeni: `90`, `-45`, `22.5` |
| {{ui:Skaliraj}} | {{ui:Skaliraj}} | Faktor veći od 0: `2`, `0.5`, `1.25` |
| {{ui:Mjerna traka}} | {{ui:Odmak}} ili {{ui:Dužina}} | Dužina |
| {{ui:Podijeli}} | {{ui:Dijelovi}} | Koliko jednakih dijelova: `5`, `5s` ili `/5` (2 do 1000). Vidi [Podijeli ivicu ili krivu na jednake dijelove](topic:divide) |
| {{ui:Kota}} | {{ui:Odmak}}, zatim {{ui:Dužina}} | Gdje ide linija kote; odmah nakon postavljanja, nova dužina mijenja veličinu modela |
| {{ui:Odaberi}} | {{ui:Vrijednost}} | Kada je odabrana jedna kota ili ivica, nova dužina mijenja veličinu modela. Vidi [Kota i promjena veličine](topic:dimensions) |

## Tačke i odmaci

Za alate {{ui:Linija}} i {{ui:Pomjeri}}, nakon prvog klika:

- `[x,y,z]` ide na tu tačno određenu tačku u modelu (u vlastitim osama grupe kada uređuješ unutar grupe). Primjer: `[0,0,3m]` je 3 m ravno iznad ishodišta.
- `<dx,dy,dz>` ide toliko daleko od prve tačke duž crvene, zelene i plave. Primjer: `<0,0,10'>` je 10 stopa ravno gore.

Svaka od tri vrijednosti može imati svoju jedinicu: `<12',0,6">`.

## Kopije nakon pomjeranja

Odmah nakon kopiranja alatom {{ui:Pomjeri}}:

| Unos | Pravi |
|---|---|
| `3x` ili `*3` | 3 kopije u nizu na istom razmaku |
| `/3` | 3 kopije ravnomjerno raspoređene od originala do prve kopije |

Do 500 kopija. Vidi [Pomjeranje, kopiranje i pravljenje nizova](topic:move-copy#a-row-of-copies).

## Unesene dužine trebaju smjer

Jedna upisana dužina ide u smjeru u kojem pokazivač pokazuje od prvog klika. Ako upisuješ odmah nakon klika, prije ikakvog pomjeranja, smjer još ne postoji i ništa se ne dešava. Pomjeri pokazivač malo prema mjestu kamo želiš da ideš, pa upiši.

## Jedinica modela

Promijeni jedinicu u birau dolje desno: {{ui:ft i in}}, in, ft, yd, mi, mil, µm, mm, cm, m ili km, koliko god su uključene u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} (jedinica samog modela uvijek je tu). Dužina upisana bilo kojom oznakom jedinice čita se u toj jedinici. Vidi [Jedinice, upisane vrijednosti i liste jedinica](common:unit-lists). Mijenja kako se dužine prikazuju i kako se čitaju goli brojevi; model ostaje iste veličine. Jedinica se čuva u datoteci.

Kako se veličine prikazuju:

| Jedinica | Dužine | Površine | Zapremine |
|---|---|---|---|
| {{ui:ft i in}} | `10' 6 1/2"` (do 1/16") | kv. ft | kub. ft |
| in | `126 1/2"` | kv. in | kub. in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², inače mm² | m³ od 0.01 m³, inače mm³ |

Novi model počinje u stopama i inčima kada je jezik preglednika postavljen na regiju SAD-a (i Liberija i Mjanmar), a inače u milimetrima. Umjesto toga koristi se jedinica označena zvjezdicom u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}}, kada je ModelCraft ima. Ili promijeni birač nakon {{ui:Novo}}.
