---
title: Įveskite tikslius dydžius reikšmių laukelyje
summary: Visi būdai įvesti ilgius, dydžius, taškus, poslinkius, kampus, kraštines ir kopijas bei kaip skaitomi vienetai ir grynieji skaičiai.
keywords: reikšmių laukelis, matavimų laukelis, vcb, įvestis, tikslus, matmuo, ilgis, vienetai, pėdos, coliai, metrinė, milimetrai, koordinatės, poslinkis, masyvas, kraštinės, kampas, dešimtainis kablelis
from: 0148dc3d
---

Reikšmių laukelis yra apatinėje būsenos juostoje, su žyma, kuri keičiasi priklausomai nuo įrankio. Dirbdami jis rodo tiesioginį dydį; bet kuriuo metu galite įvesti tikslų.

## Kaip įvesti

1. Pradėkite veiksmą spustelėdami (pirmą kampą, paviršių, tašką, iš kurio perkelti).
2. Rašykite. Reikšmių laukelio spustelėti nereikia: skaitmuo arba vienas iš ženklų `. , - ' " [ < * /` nukreipia jūsų įvestį ten.
3. Paspauskite {{key:Enter}}.

Reikšmių laukelyje paspauskite {{key:Esc}}, kad jį išvalytumėte ir grįžtumėte į vaizdą. Jutiklinio ekrano įrenginyje palieskite reikšmių laukelį, kad atsirastų klaviatūra.

Jei ModelCraft neperskaito to, ką įvedėte, būsenos juostoje rašoma „Įveskite ilgį, pavyzdžiui, 3m, 10'6" arba 4m,3m.“ Jei įrankis to negali naudoti, rašoma „Nepavyko: …“ ir priežastis.

## Ilgiai

| Įvedimas | Reiškia |
|---|---|
| `3m` `320cm` `3200mm` | Metrai, centimetrai, milimetrai |
| `10'` `10ft` `10 feet` | Pėdos |
| `6"` `6in` `6 inches` | Coliai |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pėdos ir coliai, su trupmena |
| `6 1/2"` `6-1/2"` `3/4"` | Coliai su trupmena |
| `1.5ft` `.5m` | Dešimtainiai skaičiai su vienetu |
| `120` | Grynasis skaičius modelio vienetais |

**Grynasis skaičius naudoja modelio vienetą**, kaip rodoma pasirinkimo juostoje apačioje dešinėje: coliai pėdų ir colių modelyje (todėl `120` yra 10 pėdų), milimetrai milimetrų modelyje ir t. t. Įvedus vienetą, jis visada lemia, kad ir koks būtų modelio vienetas. Lenktinės kabutės ir prime ženklai (’ ” ′ ″) taip pat skaitomi kaip pėdos ir coliai.

:::warning
Dešimtainiams skaičiams visada naudokite **tašką**: `2.5m`. Kablelis atskiria dvi reikšmes, todėl `2,5` reiškia 2 ir 5 (dvi reikšmes), nepriklausomai nuo jūsų kalbos nustatymų.
:::

## Skaičiavimai

Bet koks ilgis gali būti skaičiavimas: sudėkite `+`, atimkite `-`, dauginkite `*`, dalinkite `/` ir naudokite skliaustus. Skaičiuotuvo nereikia.

| Įvedimas | Reiškia |
|---|---|
| `2.5/3` | Trečdalis iš 2.5 (modelio vienetais) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" pėdų ir colių modelyje |
| `3m-25cm` | 2.75 m |

Grynasis skaičius yra modelio vienetais, kai tai ilgis (`2.5/3` metrų modelyje yra 0.833 m), o paprastas daugiklis, kai jis daugina ar dalina ilgį (`2*450mm`). Kampams ir daugikliams taip pat galima skaičiavimai: `90/2` yra 45°. Du ilgiai, sudauginti, sudaro plotą, o ne ilgį, todėl `2m*3m` atmetama.

Jei ModelCraft negali to apskaičiuoti, būsenos juostoje rašoma, kas negerai ir kur, pavyzdžiui, „Dalyba iš nulio (simbolis 4).“ Skliaustas taip pat pradeda reikšmių laukelį, todėl galite pradėti nuo `(`.

Šie ženklai išlaiko savo prasmę: `/3`, `3x` ir `*3` po kopijavimo, `24s` kraštinėms ir `/3`, kai pasirinkta kraštinė (ji [padalija kraštinę](topic:divide)).

## Pagal įrankį

| Įrankis | Žyma | Įvedimas |
|---|---|---|
| {{ui:Linija}} | {{ui:Ilgis}} | Ilgis (žymeklio kryptimi), arba taškas ar poslinkis (žemiau) |
| {{ui:Stačiakampis}} | {{ui:Matmenys}} | Du ilgiai: `4m,3m`, `12',10'`. Taip pat tinka kabliataškis: `4m;3m` |
| {{ui:Apskritimas}}, {{ui:Daugiakampis}} | {{ui:Kraštinės}}, tada {{ui:Spindulys}} | Prieš pirmą spustelėjimą – kraštinių skaičius: `12s` arba `12` (nuo 3 iki 999). Po jo – spindulys |
| {{ui:Stumti/traukti}} | {{ui:Atstumas}} | Ilgis. Neigiamas ilgis eina priešinga kryptimi |
| {{ui:Perkelti}} | {{ui:Atstumas}} | Ilgis (žymeklio kryptimi), arba taškas ar poslinkis. Po kopijavimo: `3x`, `*3`, `/3` |
| {{ui:Sukti}} | {{ui:Kampas}} | Laipsniai: `90`, `-45`, `22.5` |
| {{ui:Mastelis}} | {{ui:Mastelis}} | Daugiklis didesnis už 0: `2`, `0.5`, `1.25` |
| {{ui:Matavimo juosta}} | {{ui:Poslinkis}} arba {{ui:Ilgis}} | Ilgis |
| {{ui:Padalyti}} | {{ui:Dalys}} | Kiek lygių dalių: `5`, `5s` arba `/5` (nuo 2 iki 1000). Žr. [Padalyti kraštinę ar kreivę į lygias dalis](topic:divide) |
| {{ui:Matmuo}} | {{ui:Poslinkis}}, tada {{ui:Ilgis}} | Kur eina matmenų linija; iš karto po padėjimo naujas ilgis pakeičia modelio dydį |
| {{ui:Pasirinkti}} | {{ui:Reikšmė}} | Pasirinkus vieną matmenį ar kraštinę, naujas ilgis pakeičia modelio dydį. Žr. [Matmuo ir keitimas dydžiu](topic:dimensions) |

## Taškai ir poslinkiai

Įrankiams {{ui:Linija}} ir {{ui:Perkelti}}, po pirmo spustelėjimo:

- `[x,y,z]` eina į tą tikslų tašką modelyje (grupės savo ašimis, kai redaguojate grupės viduje). Pavyzdys: `[0,0,3m]` yra 3 m tiesiai virš pradžios taško.
- `<dx,dy,dz>` eina tiek nuo pirmo taško išilgai raudonos, žalios ir mėlynos ašių. Pavyzdys: `<0,0,10'>` yra 10 pėdų tiesiai aukštyn.

Kiekviena iš trijų reikšmių gali turėti savo vienetą: `<12',0,6">`.

## Kopijos po perkėlimo

Iškart po kopijavimo su {{ui:Perkelti}}:

| Įvedimas | Sukuria |
|---|---|
| `3x` arba `*3` | 3 kopijos iš eilės tokiu pačiu tarpu |
| `/3` | 3 kopijos, tolygiai išdėstytos nuo originalo iki pirmosios kopijos |

Iki 500 kopijų. Žr. [Perkelti, kopijuoti ir kurti masyvus](topic:move-copy#a-row-of-copies).

## Įvesti ilgiai reikalauja krypties

Vienas įvestas ilgis eina ta kryptimi, į kurią žymeklis nukreiptas nuo pirmo spustelėjimo. Jei įvedate iš karto po spustelėjimo, dar neperkėlę žymeklio, krypties dar nėra ir nieko neatsitinka. Šiek tiek pajudinkite žymeklį ten, kur norite eiti, tada įveskite.

## Modelio vienetas

Pakeiskite vienetą pasirinkimo juostoje apačioje dešinėje: {{ui:ft ir in}}, in, ft, yd, mi, mil, µm, mm, cm, m arba km, kiek jie įjungti {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} (paties modelio vienetas visada lieka). Ilgis, įvestas su bet kurio vieneto ženklu, skaitomas tuo vienetu. Žr. [Vienetai, įvestos reikšmės ir vienetų sąrašai](common:unit-lists). Tai keičia, kaip rodomi ilgiai ir kaip skaitomi grynieji skaičiai; modelio dydis nesikeičia. Vienetas išsaugomas faile.

Kaip rodomi dydžiai:

| Vienetas | Ilgiai | Plotai | Tūriai |
|---|---|---|---|
| ft ir in | `10' 6 1/2"` (iki 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² nuo 0.01 m², kitaip mm² | m³ nuo 0.01 m³, kitaip mm³ |

Naujas modelis pradedamas pėdomis ir coliais, kai naršyklės kalba nustatyta JAV regionui (taip pat Liberijai ir Mianmarui), o visur kitur – milimetrais. Vietoj to naudojamas vienetas, pažymėtas žvaigždute {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}}, jei ModelCraft jį turi. Arba pakeiskite pasirinkimo juostą po {{ui:Naujas}}.
