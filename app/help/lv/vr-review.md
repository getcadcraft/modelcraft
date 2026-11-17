---
title: Modeļa pārskatīšana VR austiņās
summary: Pārvietojieties pa modeli pilnā izmērā VR austiņās, lēkājiet, pagriezieties, mēriet, pārgriezt to, ievietojiet problēmas ar attēlu, skatiet to kā galda modeli un satieciet citus tiešraides sesijas dalībniekus.
keywords: vr, virtuālā realitāte, austiņas, webxr, xr, imersīvs, quest, oculus, vive, index, pico, staigāt, pārstaigāt, teleportēties, dizaina pārskatīšana, pārskatīšana, mērīt, griezums, pārgriezt, problēma, problēmas, bcf, galda modelis, mēroga modelis, klātbūtne, avatari, tiešraide, kopā
from: fa2f591a
---

{{ui:Pārskatīt VR}} ļauj atrasties modeļa iekšpusē VR austiņās, pilnā izmērā. Jūs stāvat tur, kur atrodas skata kamera, uz grīdas zem tās, vērsti uz to pašu pusi. Nekas netiek augšupielādēts: austiņās rāda to, ko pārlūkprogramma zīmē šajā datorā (vai austiņu pašas pārlūkprogrammā).

## Kas nepieciešams

- Austiņas, ko pārlūkprogramma var vadīt (WebXR): autonomu austiņu pašas pārlūkprogramma vai Chrome vai Edge datorā ar pievienotām austiņām.
- ModelCraft atvērts drošā lapā (https), kā tas ir šajā vietnē.

Ja austiņu nav, {{ui:Pārskatīt VR}} ir pelēkots un parāda iemeslu.

## Sākšana

1. Iestatiet skatu, no kura vēlaties sākt: telpā vai ārpusē, skatoties uz ēku.
2. Noklikšķiniet uz {{ui:Skati}} grupā {{ui:Kamera}}, tad uz {{ui:Pārskatīt VR}}.
3. Uzvelciet austiņas.

Izvēlne atrodas uz kreisās rokas muguras. Norādiet uz tās ar labo kontrolieri un nospiediet sprūdu, lai izvēlētos pogu. (Ja ir tikai viena roka, izvēlne peld priekšā, kur sākāt.)

## Kā tas izskatās

Austiņās modelis rādās [tiešraides skata](topic:live-view) izskatā: virsmām piešķirtais izskats un materiāli, debesis un saule no modeļa vietas un datuma ar tās ēnu, lampas, izkaisīti augi un akmeņi, kā arī no sienām un grīdām atstarota gaisma (aprēķināta šajā datorā, kamēr skatāties apkārt, un seko jums, kad pārvietojaties). Spilgtumu un skata transformāciju (ACES vai AgX) nosaka [Renderēt attēlu](topic:render). To, cik daudz tiek zīmēts, nosaka tas, ko austiņu pārlūkprogramma var, kā arī darbvirsmā; apkārtējais aizēnojums (ambient occlusion), atspulgi un spīdums paliek darbvirsmā.

## Pārvietošanās

- **Lēciens:** {{ui:Pārvietot}} režīmā norādiet uz grīdu un nospiediet sprūdu; nolaižaties tur. Vai pabīdiet kociņu uz priekšu, lai tēmētu, un atlaidiet, lai lēktu. Var nolaisties tikai uz grīdām un zemes (virsmām, kas vērstas uz augšu), nekad uz sienas.
- **Pagriešanās:** pabīdiet kociņu pa kreisi vai pa labi: katru reizi pagriežaties par 30°.
- **Iešana:** savā spēļu zonā vienkārši ejiet.

## Mērīšana

Izvēlieties {{ui:Mērīt}}, tad nospiediet sprūdu uz diviem punktiem. Attālums starp tiem rādās modeļa mērvienībās. Punkts netālu no stūra piesaistās stūrim.

## Pārgriešana

Izvēlieties {{ui:Griezums}} un nospiediet sprūdu uz virsmas:

- uz sienas (vai jebkā, kas nav grīda): viss starp jums un šo virsmu tiek nogriezts, lai redzētu iekšā. Tas labāk darbojas no ārpuses vai pāri telpai;
- uz grīdas, no augšas: plāna griezums 1.2 m virs šīs grīdas, lai sienas rādītu savu apakšējo daļu.

{{ui:Notīrīt}} noņem griezumu un mērījumus. Ja griezuma plakne skatā šķeļ modeli, kad sākat, austiņas sākas ar to.

## Problēmas ievietošana

Izvēlieties {{ui:Problēma}} un nospiediet sprūdu tur, kur ir problēma. Numurēta adata to atzīmē, un ModelCraft saglabā problēmu kopā ar attēlu no tā, ko redzējāt, un vietas, kur stāvējāt. Kad atstājat VR, problēmas ir sarakstā {{ui:Problēmas}} pa labi:

- acs poga parāda problēmu no vietas, kur tā tika ievietota;
- {{ui:Saglabāt kā BCF}} lejupielādē visas kā BCF failu, ko atver BIM pārskatīšanas programmas (ieskaitot kameru un attēlu);
- tās tiek saglabātas arī failā `.modelcraft`.

Pievienojiet komentāru problēmai pēc VR atstāšanas BCF programmā: rakstīšana austiņās vēl nav izveidota.

## Skatīšana kā galda modeli

{{ui:Galda virsma}} samazina modeli, lai tas ietilptu galdā jūsu priekšā; ejiet ap to vai pagrieziet ar kociņu. {{ui:Pilnā izmērā}} atgriež jūs tur, kur bijāt.

## Kopā ar citiem tiešraidē

[Tiešraides sesijā](topic:work-live) visi VR austiņās redz pārējos kā galvu un divas rokas savā krāsā, ar savu vārdu, un punktu, kur katrs norāda. Jebkuras izmaiņas, ko veic kāds, sasniedz jūsu austiņas īsā brīdī. Cilvēki pie galda austiņās vēl netiek rādīti.

## Iziešana

Izvēlieties {{ui:Iziet no VR}} (vai noņemiet austiņas un beidziet tur). Skats ekrānā pārvietojas uz vietu, kur atradās jūsu galva.

:::note
Testēts tikai ar austiņu emulatoru, vēl ne ar īstām austiņām. Liels modelis var izraisīt austiņu aizkavēšanos: vispirms paslēpiet to, kas nav vajadzīgs ([paslēpt un izolēt](topic:hide-isolate)).
:::
