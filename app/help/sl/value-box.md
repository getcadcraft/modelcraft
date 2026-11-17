---
title: Vnos natančnih mer v polje vrednosti
summary: Vsi načini vnosa dolžin, velikosti, točk, odmikov, kotov, stranic in kopij ter kako se berejo enote in goli števili.
keywords: polje vrednosti, polje mer, vcb, vnos, natančno, kota, dolžina, enote, čevlji, palci, metrično, milimetri, koordinate, odmik, matrika, stranice, kot, decimalna vejica
from: 0148dc3d
---

Polje vrednosti je v vrstici stanja na dnu, njegova oznaka pa se spreminja glede na orodje. Med delom prikazuje velikost v živo; kadar koli lahko vnesete natančno.

## Kako vnesti

1. Dejanje začnite s klikom (prvo oglišče, ploskev, točka, od koder se premika).
2. Vnesite. Polja vrednosti ni treba klikniti: številka ali eden od znakov `. , - ' " [ < * /` pošlje vnos tja.
3. Pritisnite {{key:Enter}}.

Pritisnite {{key:Esc}} v polju vrednosti, da ga počistite in se vrnete v pogled. Na zaslonu na dotik se dotaknite polja vrednosti, da prikažete tipkovnico.

Če ModelCraft ne more prebrati vnosa, vrstica stanja izpiše „Vnesite dolžino, na primer 3m, 10'6" ali 4m,3m.“ Če orodje vnosa ne more uporabiti, izpiše „Ni uspelo: …“ z razlogom.

## Dolžine

| Vnos | Pomeni |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Čevlji |
| `6"` `6in` `6 inches` | Palci |
| `10'6"` `10' 6"` `10'-6 1/2"` | Čevlji in palci, z ulomkom |
| `6 1/2"` `6-1/2"` `3/4"` | Palci z ulomkom |
| `1.5ft` `.5m` | Decimalna števila z enoto |
| `120` | Golo število, v enoti modela |

**Golo število uporabi enoto modela**, kakor je prikazana v izbirniku spodaj desno: palci v modelu v čevljih in palcih (tako je `120` 10 čevljev), milimetri v modelu v milimetrih in tako naprej. Vpis enote vedno prevlada, ne glede na enoto modela. Ukrivljeni narekovaji in oznake za minute (’ ” ′ ″) se prav tako berejo kot čevlji in palci.

:::warning
Za decimalna števila vedno uporabite **piko**: `2.5m`. Vejica loči dve vrednosti, zato `2,5` pomeni 2 in 5 (dve vrednosti), ne glede na jezikovne nastavitve.
:::

## Računanje

Vsaka dolžina je lahko izračun: dodajte `+`, odštejte `-`, množite `*`, delite `/` in uporabite oklepaje. Računalo ni potrebno.

| Vnos | Pomeni |
|---|---|
| `2.5/3` | Tretjina 2.5 (v enoti modela) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" v modelu v čevljih in palcih |
| `3m-25cm` | 2.75 m |

Golo število je v enoti modela, kadar je dolžina (`2.5/3` v modelu v metrih je 0.833 m), in čisti faktor, kadar množi ali deli eno dolžino (`2*450mm`). Koti in faktorji prav tako sprejmejo izračune: `90/2` je 45°. Dve dolžini, zmnoženi med seboj, dasta ploščino, ne dolžine, zato je `2m*3m` zavrnjeno.

Če ModelCraft izračuna ne more opraviti, vrstica stanja pove, kaj in kje je narobe, na primer „Deljenje z nič (znak 4).“ Oklepaj tudi zažene polje vrednosti, zato lahko začnete z `(`.

Ti ohranijo svoj pomen: `/3`, `3x` in `*3` po kopiji, `24s` za stranice ter `/3` z izbranim robom (tedaj [razdeli rob](topic:divide)).

## Po orodju

| Orodje | Oznaka | Vnos |
|---|---|---|
| {{ui:Črta (L)}} | {{ui:Dolžina}} | Dolžina (v smeri kazalca) ali točka ali odmik (spodaj) |
| {{ui:Pravokotnik (R)}} | {{ui:Kote}} | Dve dolžini: `4m,3m`, `12',10'`. Deluje tudi podpičje: `4m;3m` |
| {{ui:Krožnica (C)}}, {{ui:Mnogokotnik (N)}} | {{ui:Stranice}}, nato {{ui:Polmer}} | Pred prvim klikom število stranic: `12s` ali `12` (3 do 999). Po njem polmer |
| {{ui:Potisni/povleci}} | {{ui:Razdalja}} | Dolžina. Negativna gre v nasprotno smer |
| {{ui:Premakni (M)}} | {{ui:Razdalja}} | Dolžina (v smeri kazalca) ali točka ali odmik. Po kopiji: `3x`, `*3`, `/3` |
| {{ui:Zasukaj (Q)}} | {{ui:Kot}} | Stopinje: `90`, `-45`, `22.5` |
| {{ui:Merilo (S)}} | {{ui:Merilo (S)}} | Faktor nad 0: `2`, `0.5`, `1.25` |
| {{ui:Merilni trak (T)}} | {{ui:Odmik}} ali {{ui:Dolžina}} | Dolžina |
| {{ui:Razdeli}} | {{ui:Deli}} | Koliko enakih delov: `5`, `5s` ali `/5` (2 do 1000). Glejte [Razdelitev roba ali krivulje na enake dele](topic:divide) |
| {{ui:Kota (D)}} | {{ui:Odmik}}, nato {{ui:Dolžina}} | Kam gre merilna črta; takoj po postavitvi nova dolžina spremeni velikost modela |
| {{ui:Izberi}} | {{ui:Vrednost}} | Z izbrano eno koto ali robom nova dolžina spremeni velikost modela. Glejte [Kota in sprememba velikosti](topic:dimensions) |

## Točke in odmiki

Za {{ui:Črta (L)}} in {{ui:Premakni (M)}} po prvem kliku:

- `[x,y,z]` gre na to natančno točko v modelu (v lastnih oseh skupine, kadar urejate znotraj skupine). Primer: `[0,0,3m]` je 3 m naravnost nad izhodiščem.
- `<dx,dy,dz>` gre tako daleč od prve točke vzdolž rdeče, zelene in modre. Primer: `<0,0,10'>` je 10 čevljev naravnost navzgor.

Vsaka od treh vrednosti ima lahko svojo enoto: `<12',0,6">`.

## Kopije po premiku

Takoj po kopiji s {{ui:Premakni (M)}}:

| Vnos | Naredi |
|---|---|
| `3x` ali `*3` | 3 kopije v vrsti na isti razdalji |
| `/3` | 3 kopije enakomerno razporejene od izvirnika do prve kopije |

Do 500 kopij. Glejte [Premikanje, kopiranje in ustvarjanje matrik](topic:move-copy#a-row-of-copies).

## Vnesene dolžine potrebujejo smer

Ena sama vnesena dolžina gre v smeri, v katero kaže kazalec od prvega klika. Če vnesete takoj po kliku, preden ste se sploh premaknili, smer še ni določena in nič se ne zgodi. Premaknite kazalec malo proti cilju, nato vnesite.

## Enota modela

Enoto spremenite v izbirniku spodaj desno: {{ui:ft in in}}, in, ft, yd, mi, mil, µm, mm, cm, m ali km, če so vklopljene v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} (enota modela je vedno na voljo). Dolžina, vpisana z oznako katerekoli enote, se prebere v tej enoti. Glejte [Enote, vneseni podatki in seznami enot](common:unit-lists). Enota spremeni način prikaza dolžin in branje golih števil; model ostane enako velik. Enota se shrani v datoteko.

Način prikaza velikosti:

| Enota | Dolžine | Ploščine | Prostornine |
|---|---|---|---|
| ft in in | `10' 6 1/2"` (na 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², sicer mm² | m³ od 0.01 m³, sicer mm³ |

Nov model se začne v čevljih in palcih, kadar je jezik brskalnika nastavljen na regijo ZDA (in na Liberijo in Mjanmar), sicer v milimetrih. Enota, označena z zvezdico v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}}, se uporabi namesto tega, kadar ModelCraft jo ima. Ali pa spremenite izbirnik po {{ui:Novo}}.
