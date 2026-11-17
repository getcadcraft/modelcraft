---
title: Tīkla rediģēšana Tīkla darba vidē
summary: Atlasiet tīkla virsotnes, malas un virsmas, pārvietojiet tās un izvelciet, ievelciet, nošķeliet, griezt, apvienojiet, aizpildiet un savienojiet tās, izmantojot jebkuru taustiņu stilu.
keywords: tīkls, rediģēšanas režīms, tīkla darba vide, virsotne, virsotnes, mala, malas, virsma, virsmas, izvilkt, ievilkt, nošķelt, cilpas griezums, nazis, pārgriezt, vērpt, apvienot, izšķīdināt, aizpildīt, režģa aizpildījums, tilts, sadalīt, slīdēt, proporcionālā rediģēšana, darba vide
from: 92a372dd
---

**Tīkla** darba vide rediģē [tīklu](topic:meshes) punktu pa punktam: tā virsotnes, malas un virsmas. Bīdīšanas/vilkšanas ģeometrija paliek **Modeļa** darba vidē.

## Atvēršana

- Rīkjoslas kreisajā pusē sarakstā {{ui:Darba vide}} izvēlieties {{ui:Tīkls}}. Atlasītais tīkls atveras rediģēšanai; atlasīta grupa vai komponente vispirms tiek pārvērsta par tīklu (viens atsaukšanas solis).
- Vai veiciet dubultklikšķi uz tīkla, vai, izmantojot modelētāja taustiņus, atlasiet to un nospiediet {{key:Tab}}.
- Ja nekas nav atlasīts, panelis piedāvā tīklus, ko pievienot: plakne, režģis, kubs, riņķis, cilindrs, konuss, sfēra, ikosfēra un tors. Jaunais novietojas, kur skats skatās, un atveras rediģēšanai.

{{ui:Atpakaļ uz Modeli}} (vai saraksts, {{key:Tab}} ar modelētāja taustiņiem, {{key:Esc}}, kad nekas nav atlasīts, ar bīdīšanas/vilkšanas taustiņiem) atgriež uz Modeli ar atlasītu tīklu. Kamēr atvērta Tīkla darba vide, pārējais modelis ir izbalināts, un Modeļa zīmēšanas rīki ir paslēpti.

## Atlase

| Darbība | Ko dara |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Atlasa virsotnes, malas vai virsmas |
| Klikšķis | Atlasa vienu; {{key:Shift}}+klikšķis pievieno vai noņem |
| Velciet rāmi | Atlasa to, kas atrodas iekšpusē un ir redzams; {{key:Shift}} pievieno, {{key:Ctrl}} noņem |
| {{key:Alt}}+klikšķis uz malas vai dubultklikšķis uz tās | Tās malu cilpa (virsmu cilpa virsmu režīmā; visa mala atvērtai malai) |
| {{key:Ctrl}}+{{key:Alt}}+klikšķis uz malas | Tās malu gredzens |
| Trīskāršs klikšķis | Viss, kas ar to savienots |

Grupai {{ui:Atlasīt}} ir arī {{ui:Visi}}, {{ui:Saistītie}}, {{ui:Cilpa}}, {{ui:Gredzens}}, {{ui:Vairāk}} un {{ui:Mazāk}}.

## Pārvietot, pagriezt, mērogot

{{ui:Pārvietot}}, {{ui:Pagriezt}} un {{ui:Mērogot}} sākas no rādītāja: pārvietojiet to, pēc tam noklikšķiniet vai nospiediet {{key:Enter}}, lai atlasi nolaistu, vai {{key:Esc}}, lai atceltu. {{key:X}}, {{key:Y}} vai {{key:Z}} (vai bultiņu taustiņi) bloķē asi. Precīzai vērtībai ierakstiet attālumu, leņķi vai koeficientu — darbojas arī [aprēķini](topic:value-box#calculations).

**Proporcionālā rediģēšana** ({{ui:Proporcionāli}} vai panelis): virsotnes tuvu atlasei seko pārvietošanai, jo tālāk tās atrodas, jo mazāk, līdz iestatītajam rādiusam, ar izvēlēto pakāpenisko samazinājumu. Ieslēdziet {{ui:Tikai pa tīklu}}, lai mērītu pa malām, nevis taisni.

{{ui:Slīdēt}} pārvieto atlasīto malu cilpu pa blakus esošajām malām.

## Formas maiņa

| Rīks | Ko dara |
|---|---|
| {{ui:Izvilkt}} | Izvelk atlasītās virsmas pa to normāli, ar jaunām sānu virsmām (vai veido virsmas no atvērtajām malu robežām). Ierakstiet attālumu |
| {{ui:Ievilkt}} | Josla atlasīto virsmu kontūras iekšpusē; katrai virsmai atsevišķi nospiediet {{key:I}} vēlreiz |
| {{ui:Nošķelt}} | Nošķeļ atlasītās malas (vai, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, virsotnes) noteiktā platumā; ritenītis vai plusa un mīnusa taustiņi pievieno segmentus noapaļotai malai |
| {{ui:Cilpas griezums}} | Norādiet uz malu: jaunas cilpas pāri četrstūru virsmu gredzenam; ritenītis iestata, cik; noklikšķiniet, lai griezt |
| {{ui:Nazis}} | Klikšķis uz punktiem malās vai stūros; {{key:Enter}} griež taisni pāri virsmām starp tiem, kā tās redzat |
| {{ui:Pārgriezt}} | Uzzīmējiet līniju ekrānā: atlasītās virsmas (vai visas) tiek sagrieztas pa to |
| {{ui:Vērpt}} | Pagriež atlasītās virsmas vai atvērtās malas ap zilo asi soļos (ritenītis tos iestata); pilns apgrieziens aizver |
| {{ui:Sadalīt}} | Sadala atlasītās malas divās; veselas virsmas kļūst par režģi |
| {{ui:Apvienot}} | Atlasītās virsotnes kļūst par vienu, savā centrā |
| {{ui:Izšķīdināt}} | Izņem atlasi, bet saglabā virsmu: virsmas savienojas |
| {{ui:Aizpildīt}} | Virsma pāri atlasītai atvērtai robežai (vai starp divām atvērtām malām) |
| {{ui:Režģa aizpildījums}} | Aizpilda atvērtu robežu ar pāra skaitu malu ar četrstūru režģi |
| {{ui:Tilts}} | Savieno divas atlasītas atvērtu malu cilpas ar virsmām |
| {{ui:Šķautne}} | Cik asas paliek atlasītās malas, kad tīklu izlīdzina ar dalījuma virsmu: virzieties prom no centra, izmantojiet ritenīti (0.1 soļos) vai ierakstiet vērtību no 0 līdz 1. Panelī rādīta atlasīto malu šķautnes vērtība, un to var ierakstīt arī. Šķautnes malas tiek zīmētas magentā krāsā |
| {{ui:Apgriezt}}, {{ui:Izlīdzināt}}, {{ui:Dzēst}} | Apgriež virsmas; izlīdzina virsotnes uz to kaimiņiem; dzēš pēc atlasīšanas režīma |

Katrs ir viens atsaukšanas solis. Tekstūru koordinātes, krāsas un svari seko uz jaunajām virsmām un virsotnēm.

## Pārveidot tīklu

{{ui:Pārveidot tīklu}} veido visu tīklu no jauna kā vienāda izmēra vienlīdzīgus trīsstūrus, kāda izmēra prasīts, to nospiežot (mazāks ir smalkāks un lēnāks). Tas aizver caurumus, savieno pārklājošās daļas un izlīdzina tīklu, ko skulptēšana ir izstiepusi. Asās malas kļūst ļoti nedaudz noapaļotas. UV, krāsojums un šķautnes sākas no jauna. Viens atsaukšanas solis.

## Retopoloģija

Lai veidotu jaunu, tīrāku tīklu pāri detalizētam (skulptūra, skenējums), panelī {{ui:Retopoloģija}} › **Veidot uz** izvēlieties detalizēto, tad:

- **Piesaistīt pārvietotos punktus tam:** punkti, ko pārvietojat, un malas, ko izvelkat, nonāk uz tā virsmas.
- **Novietot atlasītos punktus uz tā** pārvieto atlasītos punktus uz tā šobrīd (viens atsaukšanas solis).
- **Rādīt šā tīkla malas priekšplānā** zīmē tīklu, ko veidojat, pāri virsmai, lai to varētu redzēt.

## Pielāgot pēdējo darbību

Pēc {{ui:Ievilkt}}, {{ui:Nošķelt}}, {{ui:Cilpas griezums}}, {{ui:Sadalīt}}, {{ui:Izlīdzināt}}, {{ui:Režģa aizpildījums}} vai {{ui:Vērpt}} panelī redzami tā iestatījumi (platums, segmenti, profils, griezumi …). Mainot kādu, darbība tiek veikta no jauna no sākuma, joprojām kā viens atsaukšanas solis.

## Taustiņi

| | Bīdīšanas/vilkšanas taustiņi | Modelētāja taustiņi |
|---|---|---|
| Pārvietot, pagriezt, mērogot | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} divreiz — slīdēt) |
| Izvilkt, ievilkt | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Dzēst | {{key:E}} vai {{key:Delete}} | {{key:X}} vai {{key:Delete}} |
| Šķautne | {{key:Shift+C}} | {{key:Shift+E}} |
| Atlasīt visu, neko, apgriezt atlasi | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Abi | {{key:Ctrl+B}} nošķelt, {{key:Ctrl+R}} cilpas griezums, {{key:K}} nazis | tas pats, un {{key:F}} aizpildīt, {{key:M}} apvienot, {{key:Ctrl+X}} izšķīdināt, {{key:L}} / {{key:Ctrl+L}} saistītie, {{key:Alt+N}} apgriezt, {{key:O}} proporcionāli, {{key:Shift+V}} virsotņu slīdēšana |

Skatiet arī [Tīkli](topic:meshes), [Modifikatori uz tīkla](topic:modifiers) un [Vēl nav izstrādāts](topic:not-built-yet).
