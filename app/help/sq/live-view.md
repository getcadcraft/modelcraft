---
title: Pamja e drejtpërdrejtë
summary: Një dritare pranë modelit që e shfaq atë në pamjen në kohë reale, me diell dhe hije, dhe ndjek çdo ndryshim që bën; ecë nëpër të, dhe cakto orën e ditës dhe muajin.
keywords: ndaj, panoramë, 360, tur, tur virtual, shfaqës i pavarur, shfaqës jashtë linje, dërgo te klienti, video, video shëtitjeje, shpërndaj, shpërndarje, bar, livadh, pyll, shkëmbinj, bimë, pemë, turmë, lyej bimët, pamja e drejtpërdrejtë, kohë reale, renderim në kohë reale, shëtitje, ec, ec nëpër, pamje e parë, prezantim, klient, ekran i dytë, dritare e dytë, monitor, ora e ditës, diell, stinë, muaj, hije, okluzion ambiental, reflektime, dritë e reflektuar, ndriçim global, webgpu, webgl
from: fca3b0d6
---

{{ui:Eksporto}} › {{ui:Pamja e drejtpërdrejtë}} hap një panel mbi aplikacionin që shfaq modelin në pamjen në kohë reale: qiellin dhe diellin sipas vendit dhe datës së modelit, hijet e diellit, pamjet dhe materialet që i ke dhënë faqeve, llambat, dhe dritën e reflektuar nga muret dhe dyshemetë. Ndjek atë që bën: rrotullo pamjen dhe ajo rrotullohet gjithashtu; ndrysho modelin dhe e shfaq ndryshimin pas një çasti. Asgjë nuk ngarkohet.

## Hape

1. Zgjidh {{ui:Eksporto}} › {{ui:Pamja e drejtpërdrejtë}}. Paneli hapet në qoshen e poshtme djathtas.
2. Tërhiq shiritin e titullit për ta lëvizur; tërhiq qoshen për ta zmadhuar.
3. {{ui:Dritare e re}} e zhvendos në një dritare të vetën, për një ekran të dytë. {{ui:Eksporto}} › {{ui:Pamja e drejtpërdrejtë në dritare të re}} e hap menjëherë atje. Nëse shfletuesi bllokon dritaret pop-up, hapet si panel.
4. {{ui:Mbyll}} e mbyll.

## Kontrollet

| Kontrolli | Çfarë bën |
|---|---|
| {{ui:Ndiq pamjen}} | Me të ndezur: pamja e drejtpërdrejtë shikon ku shikon pamja e ModelCraft. Ecja e fik |
| {{ui:Ec}} | Ec nëpër model (më poshtë) |
| {{ui:Gravitet}} | Gjatë ecjes: qëndron mbi dyshemetë dhe ngjitet shkallët. Të fikur: fluturon |
| {{ui:Ora}} | Ora e ditës, nga 05:00 deri 21:00. Dielli lëviz ndërsa tërheq |
| {{ui:Muaji}} | Muaji (data 21 e tij), që të shohësh diellin në dimër dhe verë |
| {{ui:Cilësia}} | {{ui:Për këtë kompjuter}} (çfarë merr [kompjuteri yt](topic:your-machine)), ose {{ui:E ulët}}, {{ui:Mesatare}} ose {{ui:E lartë}} |

Rreshti në fund tregon çfarë vizaton pamjen (WebGPU ose WebGL 2), cilësinë dhe dritën e reflektuar.

## Ec nëpër model

1. Rrotullo pamjen kryesore drejt vendit ku dëshiron të qëndrosh dhe zgjidh {{ui:Ec}}. Qëndron mbi dyshemenë poshtë pikës së syrit të pamjes, 1.6 m i lartë.
2. Kliko pamjen e drejtpërdrejtë, pastaj përdor {{key:W}} {{key:A}} {{key:S}} {{key:D}} ose tastet me shigjeta. Mbaj {{key:Shift}} për të vrapuar. Tërhiq për të parë përreth.
3. Shkallët deri 40 cm kapërcehen (shkallë); çdo gjë më e lartë është mur. Muret të ndalojnë dhe rrëshqet përgjatë tyre.
4. Me {{ui:Gravitet}} të fikur fluturon: {{key:E}} lart, {{key:Q}} poshtë.
5. {{key:Esc}} ndalon ecjen.

## Shpërndaj bimë, shkëmbinj dhe njerëz

{{ui:Shpërndaj}} te shiriti i pamjes së drejtpërdrejtë hap panelin e shpërndarjes pranë figurës. Një grup shpërndarjeje përhap sende nga biblioteka e rrethinës (pemë, shkurre, bar, lule, shkëmbinj, njerëz, makina) mbi një pjesë të modelit. Sendet vizatohen vetëm në pamjen e drejtpërdrejtë: nuk janë gjeometri në model, dhe pamja kryesore nuk i shfaq.

1. **Mbush sipërfaqet:** përzgjidh sipërfaqet (ose një grup, si një terren) në ModelCraft, pastaj zgjidh {{ui:Mbush zgjedhjen}}. Grupi i mbulon ato.
2. **Lyej:** zgjidh {{ui:Lyej}}, pastaj tërhiq mbi pamjen e drejtpërdrejtë. Me sipërfaqe të përzgjedhura, lyerja bie vetëm mbi to; pa asgjë të përzgjedhur bie mbi çdo gjë nën furçë, përfshirë tokën. {{ui:Madhësia e furçës}} cakton furçën; {{ui:Gomë}} heq pikat e lyera.
3. Shëno çfarë të shpërndahet. Numri pranë secilit është pesha e tij: 3 dhe 1 bëjnë tre të parit për çdo një të dytit.

| Kontrolli | Çfarë bën |
|---|---|
| {{ui:Për m²}} | Sa sende në çdo metër katror |
| {{ui:Mbaj larg (m)}} | Asnjë send më afër se kaq objekteve të tjera, dhe asnjë nën një çati ose tavolinë. 0 e fik |
| {{ui:Rrotullimi (°)}} | Sa rrotullohet çdo send rastësisht rreth vertikales |
| {{ui:Më i thepisur (°)}} | Asnjë send aty ku sipërfaqja është më e pjerrët |
| {{ui:Madhësia}} | Madhësia më e vogël dhe më e madhe, si faktor i madhësisë së vetë sendit |
| {{ui:Lartësia nga, deri (m)}} | Vetëm mes këtyre lartësive (bosh = çfarëdo) |
| {{ui:Prirje me sipërfaqen}} | 0 i mban sendet vertikalë; 1 i vendos normalë me pjerrësinë |
| {{ui:Farë}}, {{ui:Përzie}} | I njëjti seed jep gjithmonë të njëjtën shpërndarje; Përzie zgjedh një tjetër |

Grupet ruhen në skedarin .modelcraft dhe ndjekin sipërfaqet që mbulojnë kur i ndryshon. Sa sende vizaton më së shumti pamja e drejtpërdrejtë caktohet nga niveli i [kompjuterit tënd](topic:your-machine): 20 000 për {{ui:Vetëm procesor}}, 100 000 për {{ui:Kartë grafike, bazë}}, një milion për {{ui:Kartë grafike, e lartë}}. Paneli tregon sa janë vendosur nga sa kërkon dendësia: vendosen më pak kur arrihet buxheti, ose aty ku objektet i mbajnë jashtë. Sendet afër kamerës vizatohen si vetvetja; ato të largëta si forma të thjeshta me ngjyrat e tyre.

:::note
Sendet e shpërndara janë në pamjen e drejtpërdrejtë (dhe në shëtitjen, panoramat dhe shfaqësin e pavarur). Renderimi i një fotoje nuk i vizaton ende.
:::

## Ndaj: panorama, tura, një shfaqës, një video

{{ui:Ndaj}} te shiriti i pamjes së drejtpërdrejtë krijon skedarë nga ajo pamje. Gjithçka bëhet në këtë kompjuter; asgjë nuk ngarkohet.

| Zgjedhja | Çfarë merr |
|---|---|
| {{ui:Panoramë 360°}} | Një foto 360° nga vendi ku qëndron pamja (ose ku ecën), si PNG ekuirektangular që hapen shfaqësit e panoramave dhe shumica e faqeve të fotove |
| {{ui:Shto këtë pikë në turne}}, pastaj {{ui:Ruaj turin}} | Një faqe e vetme web me një panoramë në çdo vend dhe shigjeta drejt vendeve që mund ta shohë secili (një mur ndërmjet e fsheh shigjetën) |
| {{ui:Ruaj një shfaqës}} | Një faqe e vetme web me modelin në këtë pamje në kohë reale: ktheje, ec nëpër të, shko te skenat e ruajtura. Hapet jashtë linje në një shfletues me WebGPU ose WebGL 2, nga një dosje, një memorie USB ose një email, pa instalim dhe pa llogari, dhe nuk ngarkon asgjë nga interneti |
| {{ui:Video e rrugës}} | Rruga e kamerës së linjës kohore (ose skenat e ruajtura radhazi) si video në këtë pamje në kohë reale, në madhësinë e pamjes së drejtpërdrejtë: WebM ose MP4 aty ku shfletuesi i krijon, përndryshe foto të numëruara në një ZIP |

Madhësia e panoramës ndjek cilësinë: 1024, 2048 ose 4096 piksel të gjerë në {{ui:E ulët}}, {{ui:Mesatare}} dhe {{ui:E lartë}}. Një skedar shfaqësi është rreth 5 MB plus modeli.

:::note
Turi dhe shfaqësi janë bërë për t'u shfaqur, jo për t'u redaktuar: ato e mbajnë modelin siç është kur i ruan.
:::

## Cilësia

| | {{ui:E ulët}} | {{ui:Mesatare}} | {{ui:E lartë}} |
|---|---|---|---|
| Hijet e diellit | një hartë hijesh | tre kaskada | katër kaskada |
| Okluzion ambiental (hijet e kontaktit) | | ✓ | ✓, më e imët |
| Reflektime në metal | | | ✓ |
| Bloom (kur Rendero një foto e cakton) | | ✓ | ✓ |
| Skajet e zbutura | FXAA | gjatë disa kornizave (TAA) | gjatë disa kornizave (TAA) |
| Dritë e reflektuar | e trashë | më e imët | më e imta |

{{ui:Për këtë kompjuter}} zgjedh {{ui:E ulët}} në një kompjuter pa kartë grafike të përdorshme, {{ui:Mesatare}} me një çip grafik të integruar, {{ui:E lartë}} me një kartë grafike të veçantë. E ulët është për një laptop 8 GB pa kartë grafike.

## Dritë e reflektuar

Drita që reflektohet nga një mur me diell mbi dysheme, dhe brendësia më e errët e një dhome, llogariten nga i njëjti ndjekës i rrugës që bën [pamjet e renderuara](topic:render): ai renderon një panoramë të vogël në pika nëpër model, në sfond në çdo bërthamë të procesorit. Ndërsa punon, rreshti i fundit thotë {{ui:Dritë e reflektuar: 40 %}}; kur është gati, pamja e merr. Pas një ndryshimi fillon sërish.

:::note
Kjo është një përafrim për një pamje të drejtpërdrejtë, jo një foto e renderuar: detajet e vogla ndërmjet pikave marrin dritën e reflektuar të pikave pranë tyre. Për një foto të përfunduar përdor [Rendero një foto](topic:render).
:::

## Ndriçimi dhe ngjyrat

Pamja e drejtpërdrejtë përdor të njëjtin {{ui:Ndriçimi}}, balancën e bardhës, kontrastin dhe transformimin e pamjes (ACES, AgX, filmic ose standard) si [Rendero një foto](topic:render): cakto atje dhe pamja e drejtpërdrejtë ndjek.

:::note
Shfletuesit ndryshojnë. Aty ku shfletuesi ka WebGPU (Chrome dhe Edge në Windows, macOS dhe ChromeOS, Safari 26) pamja e drejtpërdrejtë e përdor; gjetiu (shumica e shfletuesve në Linux, sistemet e vjetra Apple) përdor WebGL 2 dhe duket njësoj.
:::
