---
title: Lista e veglave
summary: Çdo vegël e ModelCraft me tastin e vet, çfarë bën çdo klikim, dhe çfarë mund të shkruash në kutinë e vlerës kur vegla punon.
keywords: vegla, shirit veglash, komanda, listë, vijë, drejtkëndësh, rreth, shumëkëndësh, ofset, hark, kurbë, spline, ndiq mua, sweep, hark me 2 pika, hark nga qendra, përzgjidh, shtyj tërhiq, zhvendos, rrotullo, shkallë, gomë, shirit mase, përmasë, orbito, lëviz, zmadho, vendos komponent
from: e08a274f
---

Tip-i i shiritit të gjendjes thotë gjithmonë çfarë kërkon vegla tani. {{key:Esc}} anulon atë që vegla është duke bërë.

## Vegla vizatimi

| Vegla | Taste | Klikime | Shkruaj në kutinë e vlerës |
|---|---|---|---|
| {{ui:Vijë}} | {{key:L}} | Fillimi, pastaj çdo pikë tjetër. Ndalon kur mbyllet një sipërfaqe, ose me {{key:Esc}} | Një gjatësi drejt treguesit; `[x,y,z]` një pikë; `<dx,dy,dz>` një zhvendosje ({{ui:Gjatësia}}) |
| {{ui:Drejtkëndësh}} | {{key:R}} | Cepi i parë (tokë ose sipërfaqe), cepi i kundërt | Gjerësia dhe thellësia: `4m,3m` ({{ui:Përmasat}}) |
| {{ui:Rreth}} | {{key:C}} | Qendra (tokë ose sipërfaqe), një pikë në skaj | Para klikimit të parë: anët, `24s` ose `24` ({{ui:Anë}}). Pas: rrezja ({{ui:Rreze}}) |
| {{ui:Shumëkëndësh}} | {{key:N}} | Qendra, një cep | Njëlloj si te Rreth; fillon me 6 anë |
| {{ui:Hark}} | {{key:A}} | Fillimi, fundi, pastaj përkulja | Gjatësia e kordës pas fillimit ({{ui:Gjatësia}}); përkulja pas fundit ({{ui:Përkulje}}); `12s` për segmente |
| {{ui:Transportir}} | — | Qendra, pika 0°, pastaj këndi | Këndi në gradë ({{ui:Këndi}}) |
| {{ui:Ndiq mua}} | — | Përzgjidh një shteg, pastaj kliko sipërfaqen (ose kliko sipërfaqen, pastaj një skaj të shtegut) | — |
| {{ui:Lyej}} | {{key:B}} | Një sipërfaqe, grup ose komponent | — ({{key:Ctrl}} të lidhura, {{key:Shift}} i gjithë asaj ngjyre, {{key:Alt}} merr një ngjyrë) |
| {{ui:Ofset}} | {{key:F}} | Një sipërfaqe (ose përzgjidh fillimisht sipërfaqen ose skajet), pastaj ana dhe distanca | Distanca ({{ui:Distanca}}); brenda sipërfaqes është brenda |
| {{ui:Kurbë}} | — | Pikat nëpër të cilat kalon kurba; {{key:Enter}} ose një klikim i dyfishtë e mbyll | Një gjatësi përgjatë treguesit, `[x,y,z]` ose `<dx,dy,dz>` për pikën e radhës |
| {{ui:Hark me qendër}} | — | Qendra, fillimi, pastaj fundi | Rrezja pas qendrës; këndi në gradë pas fillimit; `12s` për segmente |

## Vegla redaktimi

| Vegla | Taste | Klikime | Shkruaj në kutinë e vlerës |
|---|---|---|---|
| {{ui:Përzgjidh}} | {{key:Space}} | Klikim, klikim i dyfishtë, klikim i trefishtë, tërhiq një kuti. Shih [Përzgjidh gjëra](topic:select) | Me një përmasë ose skaj të zgjedhur: një gjatësi e re, që e ndryshon madhësinë e modelit |
| {{ui:Shtyj/tërhiq}} | {{key:P}} | Sipërfaqja, pastaj distanca. Klikimi i dyfishtë mbi një sipërfaqe përsërit distancën e fundit | Një distancë; negativi shkon në drejtimin tjetër ({{ui:Distanca}}) |
| {{ui:Zhvendos}} | {{key:M}} | Nga një pikë, te një pikë. Mbaj {{key:Ctrl}} ose {{key:Alt}} për të kopjuar | Një distancë drejt treguesit, `<dx,dy,dz>` ose `[x,y,z]` ({{ui:Distanca}}). Pas një kopjimi: `3x` ose `/3` |
| {{ui:Rrotullo}} | {{key:Q}} | Qendra (mbi një sipërfaqe për ta rrotulluar në planin e saj), drejtimi i fillimit, drejtimi i fundit | Këndi në gradë ({{ui:Këndi}}) |
| {{ui:Shkallë}} | {{key:S}} | Pika që qëndron, një pikë reference, madhësia e re | Një faktor: `2`, `0.5` ({{ui:Shkallë}}) |
| {{ui:Gomë}} | {{key:E}} | Klikim ose tërheqje mbi skaje, grupe, udhëzues dhe përmasa | asgjë |
| {{ui:Shirit mase}} | {{key:T}} | Nga një skaj: një vijë udhëzuese paralele. Nga një pikë: mat dhe lë një pikë udhëzuese | Ofseti ({{ui:Ofset}}) ose distanca ({{ui:Gjatësia}}) |
| {{ui:Përmasë}} | {{key:D}} | Dy cepa (ose një skaj), pastaj ku shkon vija e përmasës. Shih [Përmasa dhe ndryshimi i madhësisë](topic:dimensions) | Ofseti ({{ui:Ofset}}). Menjëherë pas: një gjatësi e re, që e ndryshon madhësinë e modelit |

{{ui:Zhvendos}}, {{ui:Rrotullo}} dhe {{ui:Shkallë}} punojnë mbi përzgjedhjen. Nëse nuk është përzgjedhur asgjë, marrin atë që klikon së pari (një sipërfaqe sjell skajet e saj).

## Vegla kamerës

| Vegla | Taste | Tërhiq për |
|---|---|---|
| {{ui:Orbito}} | {{key:O}} | Rrotullohu rreth pjesës së modelit nën kursor ({{key:Shift}} lëviz) |
| {{ui:Lëviz pamjen}} | {{key:H}} | Rrëshqit pamjen |
| {{ui:Zmadhim}} | {{key:Z}} | Zmadho: lart është brenda, poshtë jashtë |
| {{ui:Shtrirja}} | {{key:Shift+Z}} | (një buton, jo vegël) Përshtat gjithë modelin |

Me miun shumë rrallë të duhen këto: tërhiqja me butonin e mesit rrotullon, tërheqja me të djathtën lëviz pamjen, dhe rrota zmadhon me çdo vegël. Shih [Orbito, lëviz dhe zmadho](topic:orbit-pan-zoom).

## Organizo

| Buton | Taste | Bën |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | E bën përzgjedhjen komponent |
| {{ui:Grup}} | {{key:Shift+G}} | E bën përzgjedhjen grup |
| {{ui:Çmonto}} | asnjë | Kthen grupet dhe komponentët e përzgjedhur në gjeometri të lirë |

## Vendos komponentin

Jo në shiritin e veglave: kliko {{ui:Vendos}} pranë një komponenti në panelin {{ui:Komponentët}}. Kliko një herë aty ku shkon origjina e komponentit; vegla kthehet më pas te {{ui:Përzgjidh}}.
