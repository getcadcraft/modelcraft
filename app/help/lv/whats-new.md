---
title: Jaunumi versijās 0.8 un 0.8.1
summary: Renderēšanas dzinēja izvēle ar failiem citām programmām, brīvas formas NURBS virsmas ar izmērītu nepārtrauktību, aina, ko aprakstāt savam palīgam, materiāls no vienas fotogrāfijas, skices foto uz zemes, iekārtotas telpas, slīpi griezumi 3D drukai un drukas pārbaude panelī Problēmas.
keywords: jaunumi, kas jauns, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, renderēšanas dzinējs, dzinējs, atvērt citā programmā, usd, gltf, unreal, papildinājuma dzinējs, nurbs, virsmas, loft, sweep, nepārtrauktība, g0, g1, g2, zebra, step, iges, aprakstīt ainu, aina, laika apstākļi, diennakts laiks, sezona, palīgs, materiāls no fotogrāfijas, fotogrāfija, skices foto, iekārtot, iekārtot telpu, slīpi, slīpi griezumi, sadalīt, drukas pārbaude, problēmas, īpašību režģis, lampas, valodas, ievadierīces, rīkjoslu rindas, dwg, tiešraide
from: e4989b17
---

Šeit ir apkopots, kas mainījies programmā ModelCraft versijās 0.8 (2026-11-01) un 0.8.1 (2026-11-02), salīdzinot ar 0.7. Dialogs {{ui:Renderēt attēlu…}} tagad var nosūtīt ainu citai programmai, panelis {{ui:Virsmas}} veido gludas brīvas formas virsmas, un pieslēgts palīgs var iestatīt visu ainu ar vienu teikumu.

## Jauns

### Renderēšana

- **Dzinēja izvēle.** {{ui:Renderēt attēlu…}} virs režīma ir saraksts **Dzinējs**. Mūsu pašu divi dzinēji, Fast un Path tracer, ir noklusētie un darbojas visur. Citi ieraksti saglabā ainu kā pakotni (modeli kā USD failu un iestatījumu failu ar precīzām materiālu vērtībām, ieslēgtajām lampām, sauli, debesīm, ekspozīciju un kameru), ko var atvērt citā programmā. Citas programmas zīmēts attēls norāda, kura programma un kura versija to izveidoja. Skatiet [Izvēlieties, kura programma zīmē attēlu](topic:render-engines).
- **Atvēršana citā programmā.** Dzinēja saraksts var saglabāt ainu kā USD failu, glTF failu (`.glb`) vai Unreal projekta mapi (`.zip`) pārlūkprogrammā un programmā CadCraft Studio. Studio tā var arī palaist usdview vai datora noklusēto programmu šim failam. Skatiet [Atvērt ainu citā programmā](topic:render-open-in).
- **Sūtīšana uz spēļu dzinēju no Studio.** Studio ieraksta ainu Unreal Engine projektā un katrā sūtīšanas reizē to atjauno, tikai vienā virzienā. Jūsu pašu labojumi atrodas slānī, ko CadCraft nekad neraksta. Skatiet [Nosūtīt ainu uz spēļu dzinēju](topic:render-unreal).
- **Dzinēji no papildinājumiem.** Papildinājums var pievienot sarakstam dzinēju. Dzinējs, kas rakstīts JavaScript, zīmē pārlūkprogrammā un Studio; tāds, kas palaiž kādu programmu, Studio prasa jūsu apstiprinājumu. Skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program) un [Pievienot renderēšanas dzinēju ar papildinājumu](topic:render-engine-addons).
- **Aprakstiet ainu.** Pastāstiet pieslēgtajam palīgam "krēslas laiks, viegls lietus, rudens koki, cilvēki laukumā", un ModelCraft to iestata vienā solī: saule pārvietojas uz datumu un laiku, lai ēnas seko, mainās debesis, parādās slapjas virsmas, bet koki un cilvēki tiek ievietoti kā īsti objekti ar birkām, ko varat paslēpt, pārvietot vai dzēst. Diennakts laiks, datums vai sezona un laika apstākļi (skaidrs, apmācies, migla, viegls lietus, lietus, vētra) darbojas arī atsevišķi, un vēlāks pieprasījums maina to pašu ainu. Migla redzama augstas kvalitātes attēlā grafikas kartē; citi dzinēji rāda debesis, gaismu un slapjās virsmas. Lietus netiek zīmēts kā krītošas svītras.

### Materiāli

- **Materiāls no vienas fotogrāfijas.** Iedodiet ModelCraft virsmas fotogrāfiju (sienu, grīdu, akmeni), un tas izveido flīžu materiālu: apgaismojums pāri fotogrāfijai tiek izlīdzināts, malas tiek savienotas, un no attēla tiek aprēķināta krāsu karte, raupjuma karte un normāļu karte. Tā ir vienkārša attēlu apstrāde jūsu pašu attēlam, bez apmācīta modeļa. Raupjums ir aptuvens novērtējums. Vienkārša, kvadrātiska, taisni uzņemta fotogrāfija dod labāko flīzi; spilgts raksts, piemēram, ķieģeļi, var radīt vāju spoku vietā, kur savienojums ir sajaukts.

### Virsmas

- **Brīvas formas virsmas.** Panelis {{ui:Virsmas}} veido NURBS līknes un neapgrieztas virsmas: līknes caur punktiem, loft, ruled, extrude, revolve, sweep pa vienu vai divām sliedēm, virsmas no līkņu tīkla, lāpas no četrām malām, match un blend. Katra kopīgā mala tiek izmērīta kā G0, G1 vai G2 (sprauga, leņķis, līkuma lēciens) precīzās virsmās, un mala, kas ir sliktāka nekā pieprasījāt, parādās panelī Problēmas ar labojumu **Match**. Zebra svītras un līkuma krāsas tiek zīmētas no precīzajām virsmām. STEP un IGES failus var izvadīt un ievietot. Skatiet [Brīvas formas virsmas (NURBS)](topic:nurbs-surfaces).

### Teritorija un telpas

- **Skices foto uz zemes.** {{ui:Fails}} › {{ui:Importēt skices foto…}} pārvērš tālruņa fotogrāfiju no rokas skices malās uz zemes ar mērogu, ko norādāt: viena grupa ar birku katrai pildspalvas krāsai. Papīrs datorā tiek atrasts un iztaisnots, un nekas nekur netiek sūtīts. Skatiet [Modelēt uz situācijas plāna](topic:site-plan).
- **Iekārtot telpu.** Atlasiet grīdu un izmantojiet {{ui:Kārtošana}} › {{ui:Iekārtot telpu…}}. Guļamistabas, dzīvojamās istabas, ēdamistabas, virtuves, vannas istabas vai biroja mēbeles tiek novietotas pēc noteikumiem, pie sienām un brīvi no durvīm un logiem, vienā grupā, ko var noņemt vienā solī. Tas ir noklusētais izkārtojums, ko jūs pārskatāt, nevis dizains. Skatiet [Sākuma bibliotēka](topic:starter).

### 3D drukāšana

- **Slīpi griezumi.** Sadalīšana drukai var sasvērt griezumus līdz 60 grādiem, un tas dod detaļām vairāk līmēšanas laukuma. Savienotāji stāv perpendikulāri griezumam. Skatiet [Sadalīt modeli drukai](topic:print-split).
- **Drukas pārbaude panelī Problēmas.** 3D drukas pārbaudes atradumi tiek rādīti panelī Problēmas ar atzīmēm uz modeļa, un no turienes tos var labot ar {{ui:Labot}}. Skatiet [Atbalsti, sienu biezums, iedobums un labošana](topic:print-tools).

### Visās lietotnēs

- **Valodas.** Palīdzība un lietotnes ir pieejamas 54 valodās. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku. Valodas, kas nav angļu, ir mašīntulkotas kopijas, kamēr tās nav izlasījis dzimtās valodas runātājs, un palīdzības tēmas joprojām var būt angļu valodā.
- **Ievadierīces.** Skārienpaliktni, pildspalvu, 3D peli, spēļu kontrolieri un MIDI vadību var izmantot lietotņu vadīšanai, visām vai vienai.
- **Rīkjoslu rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › Rīkjoslu rindas iestata Pārnest (kā iepriekš), 2 rindas vai 1 rinda. Josla, kas neietilpst, ritinās sānis, nevis aizņems vietu no rasējuma. Pārnest paliek noklusētais.
- **Īpašību režģis.** ModelCraft lampu lauki izmanto kopīgo režģi: sakļaujamas kategorijas, nosaukumu un vērtību kolonnas un Kompakts blīvums. Ierakstīta aritmētika, piemēram, `2*450`, joprojām darbojas.
- **Problēmas.** Panelis Problēmas (brīdinājuma poga lietotnes joslā) ir kopīgs visām lietotnēm. ModelCraft tajā ir drukas pārbaude un virsmu nepārtrauktības brīdinājumi.
- **Tiešraide.** Sesija Live TeamWork rāda, kurš kur atrodas. Skatiet [Modelēt kopā ar Live TeamWork](topic:work-live).
- **Papildinājumi.** Papildinājumi var pievienot renderēšanas dzinējus, kā minēts iepriekš.
- **Pieslēdziet savu MI.** Rīku līgums un astoņu lietotņu pārbaudes ir izietas, kopā ir 454 rīki. Savienojums vienā klikšķī programmā Studio, mitināts savienotājs pārlūkprogrammu palīgiem, jūsu pašu atslēga programmā Studio un publicēta pakotne vēl nav solīti. Lietotnēs nav pašu MI. Skatiet [Izmantot ModelCraft ar MI palīgiem](topic:use-with-ai-assistants).

## Labots versijā 0.8.1

- **DWG klašu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips, kas importēšanas laikā varēja bojāt failu. Tagad tā tiek nolasīta pareizi, ModelCraft un citās lietotnēs, kas lasa DWG.
- **Planšetdatori portreta režīmā.** Brīvais režģa augstums tiek atdots zīmēšanas laukumam, un lapas izkārtojums sākas pie 760 pikseļiem platuma vai mazāk. Arī ModelCraft stila lapā ir šīs izmaiņas.
- **Valoda programmā Studio.** CadCraft Studio un iesaiņotie izdevumi var mainīt valodu darbības laikā; iepriekš tie bija tikai angļu valodā. Tas vēl nav pārbaudīts uz katras platformas: pastāstiet mums, ja valoda nemainās.

## Vēl nav šajā versijā

- **Nav parakstīts ar kodu.** Windows var rādīt SmartScreen: izvēlieties {{ui:Papildinformācija}}, pēc tam {{ui:Palaist tomēr}}. Mac datorā noklikšķiniet ar peles labo pogu un izvēlieties {{ui:Atvērt}}. Veikalu versijas ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1.
- Cita programma, kas zīmē attēlu bez renderēšanas dzinēja papildinājuma, panorāmas vai stereo kameras un debesu attēls caur citu programmu, kā arī spraudnis, kas atver Unreal skatuvi, vēl nav pieejami. Faili tiek rakstīti; spraudnis nav izlaists un nav palaists programmā Unreal.
- Brīvas formas virsmas: G3 un A klase netiek mērītas vai apgalvotas, un apgriešana un cietie ķermeņi tiks pievienoti vēlāk.
- Citu programmu attēli nav pikseli pa pikselim kā mūsējie: sakrīt tikai kamera, saule, lampas un ekspozīcija.
- Labojums valodas maiņai programmā Studio versijā 0.8.1 nav pārbaudīts uz katras platformas.

Viss pārējais ir sadaļā [Vēl nav izveidots](topic:not-built-yet). Iepriekšējai versijai skatiet [Jaunumi versijā 0.7](topic:whats-new-0-7).
