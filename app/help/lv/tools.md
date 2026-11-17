---
title: Rīku saraksts
summary: Katrs ModelCraft rīks ar taustiņu, ko dara katrs klikšķis un ko var ierakstīt vērtību lodziņā, kamēr rīks darbojas.
keywords: rīki, rīkjosla, komandas, saraksts, līnija, taisnstūris, riņķis, daudzstūris, nobīde, loks, līkne, spline, seko ceļam, slaucīt, 2 punktu loks, loks no centra, atlasīt, stumt vilkt, pārvietot, pagriezt, mērogot, dzēšgumija, mērlente, izmērs, orbīta, panoramēt, tālummaiņa, novietot komponentu
from: e08a274f
---

Statusa joslas padoms vienmēr saka, ko rīks gaida nākamo. {{key:Esc}} atceļ to, ko rīks pašlaik izpilda.

## Zīmēšanas rīki

| Rīks | Taustiņš | Klikšķi | Ierakstiet vērtību lodziņā |
|---|---|---|---|
| {{ui:Līnija}} | {{key:L}} | Sākums, pēc tam katrs nākamais punkts. Apstājas, kad virsma noslēdzas, vai ar {{key:Esc}} | Garums līdz rādītājam; `[x,y,z]` punkts; `<dx,dy,dz>` nobīde ({{ui:Garums}}) |
| {{ui:Taisnstūris}} | {{key:R}} | Pirmais stūris (zeme vai virsma), pretējais stūris | Platums un dziļums: `4m,3m` ({{ui:Izmēri}}) |
| {{ui:Riņķis}} | {{key:C}} | Centrs (zeme vai virsma), punkts uz malas | Pirms pirmā klikšķa: malu skaits, `24s` vai `24` ({{ui:Malu skaits}}). Pēc tam: rādiuss ({{ui:Rādiuss}}) |
| {{ui:Daudzstūris}} | {{key:N}} | Centrs, stūris | Tāpat kā {{ui:Riņķis}}; sākas ar 6 malām |
| {{ui:Loks}} | {{key:A}} | Sākums, beigas, pēc tam izliekums | Akorda garums pēc sākuma ({{ui:Garums}}); izliekums pēc beigām ({{ui:Izliekums}}); `12s` segmentiem |
| {{ui:Leņķmērs}} | — | Centrs, 0° punkts, pēc tam leņķis | Leņķis grādos ({{ui:Leņķis}}) |
| {{ui:Sekot ceļam}} | — | Atlasiet ceļu, pēc tam noklikšķiniet virsmu (vai noklikšķiniet virsmu, pēc tam ceļa malu) | — |
| {{ui:Krāsot}} | {{key:B}} | Virsma, grupa vai komponents | — ({{key:Ctrl}} savienotās, {{key:Shift}} visas šīs krāsas, {{key:Alt}} paņemt krāsu) |
| {{ui:Nobīde}} | {{key:F}} | Virsma (vai vispirms atlasiet virsmu vai malas), pēc tam puse un attālums | Attālums ({{ui:Attālums}}); virsmas iekšpusē nozīmē uz iekšu |
| {{ui:Līkne}} | — | Punkti, caur kuriem iet līkne; {{key:Enter}} vai dubultklikšķis pabeidz | Garums gar rādītāju, `[x,y,z]` vai `<dx,dy,dz>` nākamajam punktam |
| {{ui:Loks no centra}} | — | Centrs, sākums, pēc tam beigas | Rādiuss pēc centra; leņķis grādos pēc sākuma; `12s` segmentiem |

## Rediģēšanas rīki

| Rīks | Taustiņš | Klikšķi | Ierakstiet vērtību lodziņā |
|---|---|---|---|
| {{ui:Atlasīt}} | {{key:Space}} | Klikšķis, dubultklikšķis, trīskāršs klikšķis, velciet kastīti. Skatiet [Objektu atlase](topic:select) | Ar atlasītu vienu izmēru vai malu: jauns garums, kas maina modeļa izmēru |
| {{ui:Stumt/vilkt}} | {{key:P}} | Virsma, pēc tam attālums. Veiciet dubultklikšķi uz virsmas, lai atkārtotu pēdējo attālumu | Attālums; negatīvs iet otrā virzienā ({{ui:Attālums}}) |
| {{ui:Pārvietot}} | {{key:M}} | No punkta uz punktu. Turiet {{key:Ctrl}} vai {{key:Alt}}, lai kopētu | Attālums līdz rādītājam, `<dx,dy,dz>` vai `[x,y,z]` ({{ui:Attālums}}). Pēc kopēšanas: `3x` vai `/3` |
| {{ui:Pagriezt}} | {{key:Q}} | Centrs (uz virsmas, lai pagrieztu tās plaknē), sākuma virziens, beigu virziens | Leņķis grādos ({{ui:Leņķis}}) |
| {{ui:Mērogot}} | {{key:S}} | Punkts, kas paliek, atsauces punkts, jaunais izmērs | Koeficients: `2`, `0.5` ({{ui:Mērogot}}) |
| {{ui:Dzēšgumija}} | {{key:E}} | Noklikšķiniet vai velciet pār malām, grupām, palīglīnijām un izmēriem | nekas |
| {{ui:Mērlente}} | {{key:T}} | No malas: paralēla palīglīnija. No punkta: mēra un atstāj palīgpunktu | Nobīde ({{ui:Nobīde}}) vai attālums ({{ui:Garums}}) |
| {{ui:Izmērs}} | {{key:D}} | Divi stūri (vai viena mala), pēc tam, kur atrodas izmēra līnija. Skatiet [Izmērs un izmēra maiņa](topic:dimensions) | Nobīde ({{ui:Nobīde}}). Tūlīt pēc: jauns garums, kas maina modeļa izmēru |

{{ui:Pārvietot}}, {{ui:Pagriezt}} un {{ui:Mērogot}} darbojas ar atlasi. Ja nekas nav atlasīts, tie vispirms ņem to, uz ko noklikšķināt (virsma paņem līdzi tās malas).

## Kameras rīki

| Rīks | Taustiņš | Velciet, lai |
|---|---|---|
| {{ui:Orbīta}} | {{key:O}} | Pagrieztos ap modeļa daļu zem rādītāja ({{key:Shift}} panoramē) |
| {{ui:Panoramēt}} | {{key:H}} | Pabīdītu skatu |
| {{ui:Tālummaiņa}} | {{key:Z}} | Tālummaiņa: uz augšu ir tuvāk, uz leju tālāk |
| {{ui:Robežas}} | {{key:Shift+Z}} | (poga, nevis rīks) Ietilpināt visu modeli |

Ar peli šie rīki reti vajadzīgi: vidējā poga, velkot, griež, labā poga, velkot, panoramē, un ritenītis tuvina ar jebkuru rīku. Skatiet [Orbīta, panoramēšana un tālummaiņa](topic:orbit-pan-zoom).

## Organizēt

| Poga | Taustiņš | Dara |
|---|---|---|
| {{ui:Komponents}} | {{key:G}} | Padara atlasi par komponentu |
| {{ui:Grupa}} | {{key:Shift+G}} | Padara atlasi par grupu |
| {{ui:Sadalīt}} | nav | Atgriež atlasītās grupas un komponentus brīvā ģeometrijā |

## Ievietot komponentu

Nav rīkjoslā: noklikšķiniet uz {{ui:Ievietot}} blakus komponentam panelī {{ui:Komponenti}}. Noklikšķiniet vienreiz, kur jābūt komponenta sākumpunktam; tad rīks atgriežas pie {{ui:Atlasīt}}.
