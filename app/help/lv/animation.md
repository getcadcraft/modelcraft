---
title: Animēt kameru un objektus un renderēt videoklipu
summary: Iestatiet atslēgas kamerai un grupām vai komponentēm laika līnijā, atskaņojiet tās skatā un renderējiet animāciju WebM videoklipā ar renderētāja debesīm, sauli un materiāliem.
keywords: animācija, animēt, laika līnija, atslēgkadrs, atslēgas, atslēgas kadrs, kameras ceļš, lidojums cauri, pārgājiens, pastaiga, video, filma, webm, renderēt video, kadri, kadru biežums, fps, atskaņošanas galva, automātiska atslēga, pāreja, izlīdzināt, turēt, ainas, PNG secība, kustība
from: d3a58249
---

Laika **līnija** pārvieto kameru un jebkuru grupu vai komponenti laika gaitā. Jūs iestatāt **atslēgas** (kur kaut kas atrodas noteiktā brīdī); ModelCraft pārvieto to vienmērīgi no atslēgas uz atslēgu. Atskaņojiet to skatā un pēc tam renderējiet videoklipā ar tādām pašām debesīm, sauli, materiāliem un lampām kā [renderēts attēls](topic:render).

## Laika līnijas atvēršana

Noklikšķiniet {{ui:Skati}} grupā {{ui:Kamera}}, tad {{ui:Animācijas laika līnija}}. Laika līnija atveras zem skata: vadīklas augšā, tad rinda **Kamera** un rinda katrai grupai vai komponentei, kas kustas. Rombi ir atslēgas; sarkanā līnija ir **atskaņošanas galva** — brīdis, kas redzams skatā.

:::touch
Arī tālrunī laika līnija atveras zem skata. Tās vadīklas ir viena rinda: pavelciet to sāņus, lai sasniegtu pārējās; poga, kas aizver laika līniju, paliek tās galā.
:::

Velciet slīdni (vai noklikšķiniet rindā), lai pārvietotu atskaņošanas galvu. {{ui:Atskaņot}} atskaņo no atskaņošanas galvas un pārvēršas par {{ui:Pauze}}, kamēr atskaņo; vēlreiz noklikšķiniet, lai apturētu tur, kur tas ir. {{key:Space}} dara to pašu, kamēr laika līnija ir atvērta (ar aizvērtu laika līniju Space joprojām ir {{ui:Atlasīt}}). {{ui:Iepriekšējais atslēgkadrs}} un {{ui:Nākamais atslēgkadrs}} pārlec starp atslēgām. Savs stils var atskaņošanai un pauzei piešķirt citu taustiņu: {{ui:Iestatījumi}}, tad izvēlnes, taustiņi un pele, komanda *Atskaņot vai pauzēt animāciju*.

## Kameras pārvietošana

1. Pārvietojiet atskaņošanas galvu uz vietu, kur sākas kadrs (0 s), iestatiet skatu un noklikšķiniet {{ui:Atslēgas kamera}}.
2. Pārvietojiet atskaņošanas galvu vēlāk (piemēram, 4 s), orbitējiet, panoramējiet vai pārvietojiet skatu uz nākamo pozīciju un vēlreiz noklikšķiniet {{ui:Atslēgas kamera}}.
3. Pievienojiet tik atslēgu, cik vēlaties, tad {{ui:Atskaņot}}.

Kamera vienmērīgi iet caur katru atslēgu un sāk un beidzas atpūtas stāvoklī.

:::tip
Jau ir [ainas](topic:scenes)? {{ui:No ainām}} izveido kameras ceļu no tām: tā aizkavējas pie katras ainas un tad pāriet uz nākamo. Ja laika līnijai nav nevienas atslēgas, {{ui:Renderēt video…}} to dara pats, tāpēc pastaigas videoklipam pietiek ar divām vai vairāk ainām.
:::

## Grupas vai komponentes pārvietošana

1. Atlasiet grupu vai komponenti (kustas tikai veselas grupas un komponentes; vispirms [izveidojiet grupu](topic:groups-components)).
2. Pie 0 s noklikšķiniet {{ui:Atlasīta atslēga}}.
3. Pārvietojiet atskaņošanas galvu vēlāk, [pārvietojiet, pagrieziet vai mainiet mērogu](topic:move-copy) grupu uz vietu, kur tai jābūt, un vēlreiz noklikšķiniet {{ui:Atlasīta atslēga}}.

Tā starp atslēgām slīd, griežas un palielinās. Pagriezieni ņem īsāko ceļu.

**Automātiska atslēga** ietaupa 3. soļa klikšķi: kamēr {{ui:Automātiska atslēga}} ir ieslēgta, atlasīta grupa vai komponente, ko pārvietojat, pagriežat vai mērogojat, saņem atslēgu atskaņošanas galvā pati (un pirmo reizi atslēgu pie 0 s, kur tā atradās).

:::note
Animētas grupas pārvietošana bez atslēgas ilgst tikai līdz brīdim, kad atskaņošanas galva pārvietojas: nākamreiz, kad atskaņojat vai pārvietojat galvu, tā atgriežas tur, kur to novieto tās atslēgas. Statusa josla to norāda. Nospiediet {{ui:Atlasīta atslēga}}, lai to saglabātu.
:::

## Atslēgu maiņa

- **Izvēlieties atslēgu**, noklikšķinot uz tās romba: atskaņošanas galva pāriet uz to.
- **Pārvietojiet atslēgu**, velkot tās rombu pa rindu, vai ar {{key:Left}} un {{key:Right}} (par vienu kadru; ar {{key:Shift}} — par desmit).
- **Dzēsiet** ar {{ui:Dzēst atslēgu}} (izvēlētā atslēga vai katra atslēga atskaņošanas galvā) vai ar {{key:Delete}} uz izvēlēta romba.
- **Kā tā pāriet tālāk** izvēlētai atslēgai: {{ui:Izlīdzināt}} (līkne caur apkārtējām atslēgām), {{ui:Vienmērīgs ātrums}} (taisna līnija vienā ātrumā), {{ui:Lēni sākot un beidzot}} (apstājas pie šīs atslēgas) vai {{ui:Turēt}} (paliek uz vietas līdz nākamajai atslēgai).
- **Garums (s)** iestata, cik ilga ir animācija; atslēga aiz beigām to padara garāku. Lai to saīsinātu, vispirms pārvietojiet vai dzēsiet atslēgas aiz jaunajām beigām.
- **×** grupas rindā aptur tās animēšanu.

Laika līnijai ir savs {{ui:Atsaukt}} un {{ui:Atkārtot}}: modeļa atsaukšana ({{key:Mod+Z}}) maina modeli, nevis atslēgas. Animācija tiek saglabāta `.modelcraft` failā. Laika līnijas aizvēršana atgriež kustīgās grupas to pirmajā pozā.

## Videoklipa renderēšana

1. Laika līnijā noklikšķiniet {{ui:Renderēt video}} (vai {{ui:Eksportēt}} › {{ui:Renderēt video…}}).
2. Izvēlieties {{ui:Izmērs}}, {{ui:Kadru biežums}}, {{ui:Katra kadra kvalitāte}} un {{ui:Fails}}.
3. Noklikšķiniet {{ui:Renderēt video}}. Katrs kadrs tiek parādīts, kamēr tas tiek veidots, kopā ar atlikušo laiku.
4. Kad tas ir pabeigts, noklikšķiniet {{ui:Saglabāt video}}.

{{ui:Apturēt}} (vai {{key:Esc}}) beidz priekšlaicīgi; {{ui:Saglabāt video}} tad saglabā jau izveidotos kadrus kā īsāku videoklipu.

Debesis, saule, materiāli, lampas un spilgtums ir tie, kas iestatīti {{ui:Renderēt attēlu…}}: iestatiet tos vispirms, pārbaudot vienu statisku attēlu. Katrs kadrs tiek renderēts šajā datorā; nekas netiek augšupielādēts.

| Iestatījums | Ko tas dara |
|---|---|
| {{ui:Izmērs}} | 480p, 720p HD, 1080p Full HD vai skata pašu formu (līdz 1920 pikseļiem platumā) |
| {{ui:Kadru biežums}} | 24, 25, 30 vai 60 kadri sekundē. Divreiz vairāk kadru aizņem divreiz ilgāk |
| {{ui:Katra kadra kvalitāte}} | {{ui:Ātri}} (4 gājieni), {{ui:Melnraksts}} (16) vai {{ui:Labi}} (64): vairāk gājienu dod gludākas ēnas un malas |
| {{ui:Fails}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}}, kur pārlūks to var ierakstīt, vai {{ui:PNG attēli, viens katram kadram (ZIP)}} videoredaktoriem (un pārlūkiem bez video kodētāja) |

:::tip
10 sekunžu videoklips ar 30 kadriem sekundē ir 301 kadrs. Vispirms izmēģiniet {{ui:Ātri}} pie 480p, lai pārbaudītu kustību, tad renderējiet {{ui:Melnraksts}} vai {{ui:Labi}} lielākā izmērā.
:::

WebM atskaņo pārlūkos un VLC, un videoredaktori to konvertē. {{ui:MP4 video (H.264)}} tiek piedāvāts tur, kur pārlūks to var ierakstīt. {{ui:Renderēt video}} izmanto ātro renderētāju; lai izsekotu staru katram kadram, tajā pašā dialogā izvēlieties {{ui:Pievienot šo animāciju rindai}}: kadri tiek renderēti [renderēšanas rindā](topic:render#the-render-queue), kurai nepieciešams WebGPU.

:::firefox safari
Videoklipa renderēšanai vajag pārlūku, kas pats kodē video (WebCodecs): jaunākie Chrome, Edge un Firefox, kā arī Safari 17 to dara. Bez tā izvēlieties {{ui:PNG attēli, viens katram kadram (ZIP)}}.
:::

## Lietas, kas jāzina

- Kustas tikai veselas grupas un komponentes. Virsmas, malas, saules laiks un stils laikā vēl nemainās.
- {{ui:Eksportēt animāciju}} zem [Ainām](topic:scenes) joprojām ieraksta skatu tādu, kāds tas ir ekrānā, reāllaikā; {{ui:Renderēt video}} renderē katru kadru ar debesīm, ēnām un materiāliem.
