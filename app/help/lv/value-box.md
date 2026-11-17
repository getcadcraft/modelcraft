---
title: Precīzu izmēru ievadīšana vērtību lodziņā
summary: Visi veidi, kā ievadīt garumus, izmērus, punktus, nobīdes, leņķus, malu skaitu un kopijas, un kā tiek nolasītas mērvienības un kaili skaitļi.
keywords: vērtību lodziņš, mērījumu lodziņš, vcb, ievadīt, precīzs, izmērs, garums, mērvienības, pēdas, collas, metriskā sistēma, milimetri, koordinātes, nobīde, masīvs, malas, leņķis, decimālkomats
from: 0148dc3d
---

Vērtību lodziņš atrodas apakšējā statusa joslā, un tā uzraksts mainās atkarībā no rīka. Darbojoties, tajā rādās tiešais izmērs; jebkurā brīdī varat ievadīt precīzu.

## Kā ievadīt

1. Sāciet darbību ar klikšķi (pirmais stūris, virsma, punkts, no kura pārvietot).
2. Rakstiet. Vērtību lodziņā klikšķināt nav vajadzīgs: cipars vai kāds no `. , - ' " [ < * /` nosūta jūsu ievadi tur.
3. Nospiediet {{key:Enter}}.

Nospiediet {{key:Esc}} vērtību lodziņā, lai to notīrītu un atgrieztos skatā. Skārienekrānā pieskarieties vērtību lodziņam, lai parādītu tastatūru.

Ja ModelCraft nevar nolasīt ievadīto, statusa joslā rakstīts: "Ievadiet garumu, piemēram, 3m, 10'6" vai 4m,3m." Ja rīks to nevar izmantot, rādās "Tas nedarbojās: …" un iemesls.

## Garumi

| Ievade | Nozīmē |
|---|---|
| `3m` `320cm` `3200mm` | Metri, centimetri, milimetri |
| `10'` `10ft` `10 feet` | Pēdas |
| `6"` `6in` `6 inches` | Collas |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pēdas un collas, ar daļskaitli |
| `6 1/2"` `6-1/2"` `3/4"` | Collas ar daļskaitli |
| `1.5ft` `.5m` | Decimāldaļas ar mērvienību |
| `120` | Kails skaitlis modeļa mērvienībā |

**Kails skaitlis izmanto modeļa mērvienību**, kā rādīts izvēlnē apakšā pa labi: collas modelī pēdās un collās (tātad `120` ir 10 pēdas), milimetri milimetru modelī un tā tālāk. Ierakstot mērvienību, tā vienmēr ir noteicošā neatkarīgi no modeļa mērvienības. Līkās pēdiņas un prīma zīmes (’ ” ′ ″) arī tiek nolasītas kā pēdas un collas.

:::warning
Decimāldaļām vienmēr izmantojiet **punktu**: `2.5m`. Komats atdala divas vērtības, tāpēc `2,5` nozīmē 2 un 5 (divas vērtības), neatkarīgi no jūsu valodas iestatījumiem.
:::

## Aprēķini

Jebkurš garums var būt aprēķins: saskaitiet `+`, atņemiet `-`, reiziniet `*`, dalieties `/` un izmantojiet iekavas. Kalkulators nav vajadzīgs.

| Ievade | Nozīmē |
|---|---|
| `2.5/3` | Trešdaļa no 2.5 (modeļa mērvienībā) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" pēdu un collu modelī |
| `3m-25cm` | 2.75 m |

Kails skaitlis ir modeļa mērvienībā, ja tas ir garums (`2.5/3` metru modelī ir 0.833 m), un vienkāršs koeficients, ja tas reizina vai dala garumu (`2*450mm`). Arī leņķiem un koeficientiem var izmantot aprēķinus: `90/2` ir 45°. Divi garumi, kas reizināti, veido laukumu, nevis garumu, tāpēc `2m*3m` tiek noraidīts.

Ja ModelCraft to nevar aprēķināt, statusa joslā rādās, kas nav kārtībā un kur, piemēram, "Dalīšana ar nulli (rakstzīme 4)." Iekava arī atver vērtību lodziņu, tāpēc varat sākt ar `(`.

Šiem ir sava nozīme: `/3`, `3x` un `*3` pēc kopēšanas, `24s` malu skaitam un `/3` ar atlasītu malu (tā [dala malu](topic:divide)).

## Pēc rīka

| Rīks | Uzraksts | Ievade |
|---|---|---|
| {{ui:Līnija}} | {{ui:Garums}} | Garums (virzienā uz rādītāju) vai punkts vai nobīde (zemāk) |
| {{ui:Taisnstūris}} | {{ui:Izmēri}} | Divi garumi: `4m,3m`, `12',10'`. Darbojas arī semikols: `4m;3m` |
| {{ui:Riņķis}}, {{ui:Daudzstūris}} | {{ui:Malu skaits}}, pēc tam {{ui:Rādiuss}} | Pirms pirmā klikšķa: malu skaits, `12s` vai `12` (no 3 līdz 999). Pēc tā: rādiuss |
| {{ui:Stumt/vilkt}} | {{ui:Attālums}} | Garums. Negatīvs garums iet pretējā virzienā |
| {{ui:Pārvietot}} | {{ui:Attālums}} | Garums (virzienā uz rādītāju) vai punkts vai nobīde. Pēc kopēšanas: `3x`, `*3`, `/3` |
| {{ui:Pagriezt}} | {{ui:Leņķis}} | Grādi: `90`, `-45`, `22.5` |
| {{ui:Mērogot}} | {{ui:Mērogot}} | Koeficients virs 0: `2`, `0.5`, `1.25` |
| {{ui:Mērlente}} | {{ui:Nobīde}} vai {{ui:Garums}} | Garums |
| {{ui:Dalīt}} | {{ui:Daļas}} | Cik vienādu daļu: `5`, `5s` vai `/5` (no 2 līdz 1000). Skatiet [Sadalīt malu vai līkni vienādās daļās](topic:divide) |
| {{ui:Izmērs}} | {{ui:Nobīde}}, pēc tam {{ui:Garums}} | Kur iet izmēru līnija; tūlīt pēc novietošanas jauns garums maina modeļa izmēru |
| {{ui:Atlasīt}} | {{ui:Vērtība}} | Ar atlasītu vienu izmēru vai malu jauns garums maina modeļa izmēru. Skatiet [Izmērs un izmēra maiņa](topic:dimensions) |

## Punkti un nobīdes

Rīkiem {{ui:Līnija}} un {{ui:Pārvietot}} pēc pirmā klikšķa:

- `[x,y,z]` ved uz šo precīzo punktu modelī (grupas pašu asīs, kad rediģējat grupas iekšpusē). Piemērs: `[0,0,3m]` ir 3 m taisni virs sākumpunkta.
- `<dx,dy,dz>` ved tik tālu no pirmā punkta pa sarkano, zaļo un zilo asi. Piemērs: `<0,0,10'>` ir 10 pēdas taisni augšup.

Katrai no trim vērtībām var būt sava mērvienība: `<12',0,6">`.

## Kopijas pēc pārvietošanas

Tūlīt pēc kopēšanas ar {{ui:Pārvietot}}:

| Ievade | Izveido |
|---|---|
| `3x` vai `*3` | 3 kopijas rindā ar tādu pašu attālumu |
| `/3` | 3 kopijas, vienmērīgi izvietotas no oriģināla līdz pirmajai kopijai |

Līdz 500 kopijām. Skatiet [Pārvietot, kopēt un veidot masīvus](topic:move-copy#a-row-of-copies).

## Ievadītiem garumiem vajadzīgs virziens

Viens ievadīts garums iet tajā virzienā, kurā rādītājs norāda no pirmā klikšķa. Ja ievadāt tūlīt pēc klikšķa, pirms vispār pārvietojat rādītāju, virziena vēl nav un nekas nenotiek. Pavirziet rādītāju nedaudz uz vietu, kur vēlaties doties, un tad ievadiet.

## Modeļa mērvienība

Mainiet mērvienību izvēlnē apakšā pa labi: {{ui:ft un in}}, in, ft, yd, mi, mil, µm, mm, cm, m vai km, ciktāl tās ir ieslēgtas {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} (modeļa pašas mērvienība vienmēr ir tur). Garums, kas ievadīts ar jebkuras mērvienības apzīmējumu, tiek nolasīts šajā mērvienībā. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists). Tā maina, kā garumi tiek rādīti un kā tiek nolasīti kaili skaitļi; modelis paliek tāds pats izmērā. Mērvienība tiek saglabāta failā.

Kā tiek rādīti izmēri:

| Mērvienība | Garumi | Laukumi | Tilpumi |
|---|---|---|---|
| ft un in | `10' 6 1/2"` (līdz 1/16") | kv. ft | kub. ft |
| in | `126 1/2"` | kv. in | kub. in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² no 0.01 m², citādi mm² | m³ no 0.01 m³, citādi mm³ |

Jauns modelis sākas pēdās un collās, kad pārlūkprogrammas valoda iestatīta uz ASV reģionu (kā arī Libērijā un Mjanmā), un visur citur milimetros. Mērvienība, kas atzīmēta ar zvaigznīti sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}}, tiek izmantota tās vietā, ja ModelCraft to ir. Vai arī mainiet izvēlni pēc {{ui:Jauns}}.
