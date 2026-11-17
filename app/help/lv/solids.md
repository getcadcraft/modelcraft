---
title: Cieto ķermeņu rīki: apvienot, atņemt, krustot
summary: Savienojiet slēgtas grupas un komponentus vienā, izgrieziet vienu no otra vai paturiet tikai to, ko tie kopīgi.
keywords: ciets ķermenis, cietie ķermeņi, cieto ķermeņu inspektors, nav ciets, labot cietu ķermeni, caurums, nepiederīga mala, otrādi, apvienot, savienot, kombinēt, sapludināt, atņemt, atdalīt, izgriezt, krustot, krustojums, Būla, ārējais apvalks
from: f35df1cc
---

Cieto ķermeņu rīki apvieno **cietos ķermeņus**: grupas un komponentus, kuru virsmas noslēdz tilpumu, un katra mala savieno tieši divas virsmas. {{ui:Objekta informācija}} parāda {{ui:Ciets ķermenis}}: {{ui:Jā}} vienam, un parāda tā tilpumu.

Tie atrodas izvēlnē {{ui:Cietie ķermeņi}} grupā {{ui:Kārtošana}}.

## Kad kaut kas nav ciets ķermenis

Atlasiet grupu vai komponentu. Ja tas nav ciets ķermenis, {{ui:Objekta informācija}} norāda, kāpēc, piemēram: "Nav ciets ķermenis: 4 malas robežojas ar caurumu · 1 nepiederīga mala".

| Problēma | Ko tas nozīmē |
|---|---|
| Malas robežojas ar caurumu | Trūkst virsmas |
| Malas, ko kopīgi lieto trīs vai vairāk virsmas | Virsma sadala iekšpusi, vai divas formas saskaras pa malu |
| Virsmas formas iekšpusē | Siena, kas palikusi tilpuma iekšpusē |
| Nepiederīgas malas | Līnijas, kas neierobežo nevienu virsmu |
| Virsmas pagrieztas otrādi | To priekšpuses vērstas uz iekšu, pretēji kaimiņiem |

{{ui:Rādīt problēmas}} atver to ar šīm malām un virsmām atlasītām, lai tās varētu redzēt. {{ui:Labot}} salabo vienkāršos gadījumus vienā atsaukšanas solī: noņem nepiederīgās malas un virsmas formas iekšpusē, pagriež virsmas pareizajā virzienā un aizver caurumus, kuru mala ir plakana. Ko tas nevar droši salabot (caurums, kas nav plakans, mala, ko kopīgi lieto daudzas virsmas), to atstāj jums, un tiek pateikts, kas palicis.

## Apvienošana

1. Atlasiet divus vai vairākus cietus ķermeņus (noklikšķiniet uz viena, {{key:Ctrl}}+klikšķis uz pārējiem).
2. {{ui:Cietie ķermeņi}} › {{ui:Apvienot}}.

Tie kļūst par vienu cietu ķermeni vienā grupā. Vietās, kur tie pārklājās, iekšējās virsmas ir pazudušas.

## Atņemšana

1. {{ui:Cietie ķermeņi}} › {{ui:Atņemt}}.
2. Noklikšķiniet uz cietā ķermeņa, ko **atņemt** (griezējs).
3. Noklikšķiniet uz cietā ķermeņa, ko **griezt**.

Otrā ķermeņa atlikusī daļa paliek; griezējs tiek izmantots. Piemēram, lai izveidotu caurumu caur bloku, zīmējiet stabiņu caur to, padariet stabiņu par grupu un tad atņemiet stabiņu no bloka.

## Krustošana

Atlasiet divus vai vairākus cietos ķermeņus, tad {{ui:Cietie ķermeņi}} › {{ui:Krustot}}. Tiek paturēta tikai daļa, ko tie visi kopīgi.

## Jāzina

- Rezultāts ir jauna grupa. Tā paturē pirmā cietā ķermeņa nosaukumu, krāsu un birku (atņemšanai — to, kuru griezāt). Krāsas, kas uzkrāsotas uz tās virsmām, netiek paturētas.
- Rezultāta plakanās sānu virsmas ir vienas virsmas. Apaļās sānu virsmas parādās kā plakanās šķautnes, ar kurām tās tika zīmētas.
- Ja grupa vai komponents nav ciets ķermenis, rīks norāda, kurš tas ir, un neko nemaina. Meklējiet trūkstošu virsmu vai nepiederīgu virsmu tā iekšpusē.
- Atvērtā grupā rīki darbojas ar grupām un komponentiem šajā grupā.
- Katrs rīks ir viens atsaukšanas solis.
- Pirmajā reizē, kad izmantojat cieto ķermeņu rīku, tā dzinējs (manifold-3d) tiek ielādēts, kas var aizņemt brīdi.
