---
title: Jaunumi 0.9 versijā (iepriekš)
summary: Drukas posms ar mūsu pašu griezējprogrammu un sūtīšanu uz USB, Klipper, OctoPrint un PrusaLink, sveķu griešana un failu papildinājumi, materiālu plūsma, digitālā dvīņa un ražotnes cehu papildinājumi, NURBS noapaļojumi, biezināšana un skenējumu pielāgošana, AR uz vietas un desmit loku metodes.
keywords: jaunumi 0.9, iepriekšējais laidiens, jaunumi, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, drukas posms, 3d drukāšana, sūtīt uz 3d printeri, griezējprogramma, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, sveķi, sveķu drukāšana, goo, sl1, ctb, anycubic, ekspozīcijas tests, materiālu plūsma, digitālais dvīnis, ražotnes cehs, plc, konveijers, nurbs, noapaļojums, biezināšana, skenējuma pielāgošana, ar, uz vietas, loku metodes, vienības, jaunumi, izmaiņas, izlaiduma piezīmes, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, renderēšanas dzinējs, dzinējs, atvērt ar, usd, gltf, unreal, papildinājumu dzinējs, nurbs, virsmas, loft, sweep, nepārtrauktība, g0, g1, g2, zebra, step, iges, aprakstīt ainu, aina, laikapstākļi, diennakts laiks, sezona, asistents, materiāls no foto, foto, skices foto, iekārtot, iekārtot telpu, slīps, slīps griezums, sadalīt, drukas pārbaude, problēmas, īpašību tabula, lampas, valodas, ievadierīces, rīkjoslas rindas, dwg, live
from: 2717d1b1
---

Šis ir tas, kas mainījies ModelCraft 0.9 versijā salīdzinājumā ar 0.8.1. ModelCraft tagad sasniedz printeri un ražotnes cehu: priekšmetus var novietot drukas platformā un sūtīt tos bez eksportēšanas, griezt slāņos pavedienam vai sveķiem un izkārtot materiālu apstrādes līniju. Šī ir CadCraft Studio 0.9 un tās astoņas lietotnes; lielākā daļa zemāk minēto jauno funkciju ir papildinājumi.

## Jaunums

### 3D drukāšana

- **Drukas posms.** Noklikšķiniet uz {{ui:Drukas posms}} rīkjoslā. Pievienojiet Bibliotēkas vienumus printera platformai, sakārtojiet tos, apskatiet grieztos slāņus un nospiediet {{ui:Sūtīt uz 3D printeri}} bez STL eksportēšanas. Tas pieder 3D Print papildinājumam, kas ir ieslēgts pēc noklusējuma un to var noņemt kā jebkuru papildinājumu. Skatiet [Novietot priekšmetus drukas platformā un sūtīt tos uz printeri](topic:print-stage).
- **Mūsu pašu pavedienu griezējprogramma.** {{ui:CadCraft basic (iekļauts, ātrākais)}} ir griezējprogramma kartītes **Griezējprogramma** sarakstā: sienas, ādas, aizpildījums, balsti un apmale, darbinieka procesā, lai lapa paliktu lietojama. {{ui:Priekšskatīt slāņus}} ar slīdni **Slānis** parāda slāņus pirms sūtīšanas. Printera profili, piemēram, Ender-3 un Prusa MK4 stili, satur savu sākuma G-code.
- **Sūtīšana.** Pa USB (Chrome vai Edge datorā, ar lapu atvērtu), vai uz Klipper (Moonraker), OctoPrint vai PrusaLink jūsu tīklā. Nekas nepieslēdzas un nenosūta bez klikšķa, un sūtīšana vispirms jautā.
- **Citas griezējprogrammas.** Kiri:Moto, PrusaSlicer un OrcaSlicer ir savi papildinājumi, pēc noklusējuma izslēgti; pievienojiet tos no kartītes vai no {{ui:Iestatījumi}} › {{ui:Papildinājumi}}. PrusaSlicer un OrcaSlicer izmanto jūsu instalēto kopiju no CadCraft Studio. Bambu Lab printeru papildinājums griež ar jūsu OrcaSlicer un tā P2S iestatījumiem un datorā prasa Studio.
- **Sveķu drukāšana.** Sveķu papildinājumi (pēc noklusējuma izslēgti) veido slāņu attēlus printera ekrānam ar dobumu un ventilācijas caurumiem, plostu un balstiem, slāņu priekšskatījumu un laiku, sveķiem un izmaksām. Failu formātu papildinājumi raksta Elegoo GOO, SL1, Chitubox (CBDDLP un CTB 2 līdz 5) un Anycubic (PWMX un PWS). Sveķu ekspozīcijas tests veido piecu ekspozīciju kāpnes. Skatiet [Sagriešana slāņos sveķu printerim](topic:resin-printing).
- **Nav mainījies.** {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}, drukas rīki un Sadalīt drukāšanai darbojas kā 0.8 versijā. Skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d).

### Materiālu plūsma, Digitālais dvīnis un Ražotnes cehs

Šie trīs ir papildinājumi, izslēgti, līdz tos ieslēdzat sadaļā {{ui:Iestatījumi}} › {{ui:Papildinājumi}}, un katram pēc ieslēgšanas ir sava palīdzība.

- **Materiālu plūsma.** Panelis ar nosaukumu Materiālu plūsma izkārto konveijerus, stacijas, buferus un AGV ceļus 3D skatā, palaiž sēklotu simulāciju, atskaņo to un parāda caurlaidspēju, gaidīšanas laikus un rindas, ar rezultātiem, kas saglabāti kā CSV. Pasūtījumus var ievest no CSV faila. Robotu šūnas var pārbaudīt un eksportēt. PLC saiknei ir vieglais režīms un īstais režīms pār Modbus TCP, kas darbojas tikai CadCraft Studio.
- **Digitālais dvīnis.** Nolasa materiālu plūsmas izkārtojumu un uz tā darbina vieglu PLC, ar kļūmēm, ko varat piespiest, krājumu testiem, izkārtojumu salīdzinājumu un materiālu sarakstu.
- **Ražotnes cehs.** Pārvērš stacijas mašīnās un šūnās, nolasa tās tiešraidē vai no simulatora un glabā darbu rindu un vienkāršu OEE. Tas tikai nolasa: šī versija nevar rakstīt mašīnā vai PLC.

### Virsmas, modeļi un rasējums

- **Noapaļojumi, biezināšana un Būla darbības uz NURBS.** Panelī {{ui:Virsmas}} ir {{ui:Noapaļojums starp virsmām}}, {{ui:Noapaļot vairākas malas}}, {{ui:Biezināt līdz cietam ķermenim}} un Savienot, Atņemt un Krustot, katrs ar izmērīto novirzi. Skatiet [Brīvās formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Virsmu pielāgošana skenējumam.** Atlasiet skenētu tīklu un izmantojiet {{ui:Pielāgot virsmas skenējumam}} grupā **Skenēšana**, pēc tam {{ui:Sašūt virsmas cietā ķermenī}}. Tā ir pirmā pielāgošana, nevis pilns atpakaļinženierijas pakotne.
- **Tiešā saite no .3dm modelētāja.** Viena virziena, no Rhino 8 vai Grasshopper, un tai vajag CadCraft Studio tajā pašā datorā. Skatiet [Turēt .3dm modeli tiešraidē](topic:live-3dm-link).
- **Modeļa skatīšana uz vietas.** {{ui:Skats vietā (AR, tālrunis)}} izvēlnē {{ui:Skati}} darbojas Android tālrunī ar Chrome. Skatiet [Skatīt modeli uz vietas ar Android tālruni (AR)](topic:ar-on-site).
- **Loku metodes.** Nolaižamajā sarakstā {{ui:Loka metodes}} ir desmit veidi, kā zīmēt loku, tostarp {{ui:3 punkti}} un {{ui:Sākums, Centrs, Beigas}}.
- **Vairāk vienību.** Svars (kg, lb, t, ton) un temperatūras (grādi C, F, K un R) tiek atpazītas tur, kur ievadāt vērtības ar vienībām.

## Visās lietotnēs

- **Rīka padomi.** Teksts, kas parādās, uzvedot kursoru virs pogām, un apgrieztas etiķetes, ir Bootstrap rīka padoms.
- **Aizverams sākuma padoms.** Padoma kartītei tukšā rasējuma laukumā ir neliela aizvēršanas poga x. Tā paliek aizvērta, un komandu paletē to var parādīt atkal.
- **Ritināmas cilņu joslas.** Paneļa cilņu josla, kas neiederas, ritina, nevis tiek apgriezta.
- **Cilņu nosaukumi.** Ja atvērts dokuments, pārlūka cilnes sākumā ir dokumenta nosaukums, tad ModelCraft un CadCraft. Punkts parādās pirmais, kamēr dokuments nav saglabāts.
- **Izkārtojums.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › Izkārtojums glabā izkārtojumus nolaižamajā sarakstā, ar izvēli izmantot izkārtojumu tikai šai lietotnei un pogu atjaunot izkārtojumu.
- **Valodas.** Valodu saraksts Iestatījumos seko valodu failiem, kas ir iekļauti versijā. Valodas, kas nav angļu, ir mašīntulkojuma melnraksti.
- **Live un Bibliotēka.** Live TeamWork rāda tiešraides kursorus un vārdus, un Bibliotēkas kolekcijas katrai lietotnei dod noklusējuma kolekciju.

## Labots

- {{ui:Atskaņot}} pārvēršas par {{ui:Pauze}}, kamēr atskaņojas animācija, un {{key:Space}} atskaņo un aptur, kamēr ir atvērta laika skala.
- Statiskais renderējums atkāpjas uz WebGL, ja grafikas karte nevar palaist ceļu izsekotāju. Renderēšanas skats tiešraidē joprojām var rādīt kļūdu; tas nav pārbaudīts Windows datorā ar šo draiveri.
- Materiālu plūsmas īstais režīms atkal savienojas pēc tam, kad saite beidzās PLC izņēmumu atbildēs.

## Godīgi ierobežojumi

- Nekas nav izdrukāts īstā printerī: ne pavediens, ne sveķi, ne caur Bambu Connect. Sveķu failus nolasīja tikai CadCraft pašu lasītāji.
- Digitālais dvīnis un Ražotnes cehs tika testēti tikai pret simulatoriem un zināmām atbildēm, bez īsta PLC, līnijas vai protokola. Tie ir pārbaudes palīglīdzekļi, nevis drošības validācija. Fizika aptver tikai kastes, līdz astoņām slodzēm.
- Rhino un Grasshopper saite nekad nav darbojusies īstajās programmās.
- Valodas, kas nav angļu, ir mašīntulkojuma melnraksti.

## Iepriekš: 0.8 un 0.8.1

Šis ir tas, kas mainījies ModelCraft 0.8 versijā (2026-11-01) un 0.8.1 (2026-11-02) salīdzinājumā ar 0.7. {{ui:Renderēt attēlu…}} dialogs tagad var nosūtīt ainu citai programmai, panelis Virsmas veido gludas brīvās formas virsmas, un savienots asistents var iestatīt visu ainu ar vienu teikumu.

### Jaunums

**Renderēšana**

- **Dzinēja izvēle.** {{ui:Renderēt attēlu…}} virs Režīma ir saraksts **Dzinējs**. Mūsu divi paši dzinēji, Fast un Path tracer, ir noklusējums un darbojas visur. Citi ieraksti saglabā ainu kā pakotni (modelis kā USD fails, kā arī iestatījumu fails ar precīzām materiālu vērtībām, ieslēgtajām lampām, sauli, debesīm, ekspozīciju un kameru), lai to ņemtu citā programmā. Citas programmas zīmēts attēls norāda, kura programma un versija to izveidoja. Skatiet [Izvēlieties, kura programma zīmē attēlu](topic:render-engines).
- **Atvērt citā programmā.** Dzinēju saraksts var saglabāt ainu kā USD failu, glTF failu (`.glb`) vai Unreal projekta mapi (`.zip`), pārlūkā un CadCraft Studio. Studio tas var arī palaist usdview vai datora pašu programmu failam. Skatiet [Atvērt ainu citā programmā](topic:render-open-in).
- **Sūtīt uz spēļu dzinēju no Studio.** Studio raksta ainu Unreal Engine projektā un to saskaņo katrā sūtīšanā, tikai vienā virzienā. Jūsu paša labojumi dzīvo slānī, ko CadCraft nekad neraksta. Skatiet [Sūtīt ainu uz spēļu dzinēju](topic:render-unreal).
- **Dzinēji no papildinājumiem.** Papildinājums var pievienot dzinēju sarakstam. Dzinējs, kas rakstīts JavaScript, zīmē pārlūkā un Studio; tas, kas palaiž programmu, Studio prasa jūsu piekrišanu. Skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program) un [Pievienot renderēšanas dzinēju ar papildinājumu](topic:render-engine-addons).
- **Aprakstīt ainu.** Pastāstiet savam savienotajam asistentam "krēslas stunda, viegls lietus, rudens koki, cilvēki laukumā", un ModelCraft to iestata vienā solī: saule pārvietojas uz datumu un laiku, lai ēnas seko, debesis mainās, parādās mitras virsmas, un koki un cilvēki tiek novietoti kā īsti objekti ar birkām, ko varat paslēpt, pārvietot vai dzēst. Diennakts laiks, datums vai sezona un laikapstākļi (skaidrs, apmācies, migla, viegls lietus, lietus, vētra) darbojas arī atsevišķi, un vēlāks pieprasījums maina to pašu ainu. Migla redzama augstas kvalitātes attēlā uz grafikas kartes; citi dzinēji rāda debesis, gaismu un mitras virsmas. Lietus netiek zīmēts kā krītošas svītras.

**Materiāli**

- **Materiāls no vienas foto.** Dodiet ModelCraft virsmas foto (sienu, grīdu, akmeni), un tas izveido flīžu materiālu: apgaismojums pa visu fotoattēlu tiek izlīdzināts, malas tiek savienotas, un krāsu karte, raupjuma karte un normāļu karte tiek aprēķinātas no attēla. Tā ir vienkārša attēlu apstrāde jūsu paša attēlam bez apmācīta modeļa. Raupjums ir aprēķins. Gluda, kvadrāta, taisni uzņemta foto dod labāko flīzi; spēcīgs raksts, piemēram, ķieģeļi, var radīt mīkstu spoku vietā, kur savienojums ir saplūdis.

**Virsmas**

- **Brīvās formas virsmas.** Panelis {{ui:Virsmas}} veido NURBS līknes un neapgrieztas virsmas: līknes caur punktiem, loft, ruled, extrude, revolve, sweep pa vienu vai divām sliedēm, virsmas no līkņu tīkla, lāpas no četrām malām, match un blend. Katra kopīgā mala tiek izmērīta kā G0, G1 vai G2 (sprauga, leņķis, līknuma lēciens) uz precīzām virsmām, un mala, kas ir sliktāka nekā pieprasījāt, parādās panelī Problēmas ar labojumu **Match**. Zebra svītras un līknuma krāsas tiek zīmētas no precīzām virsmām. STEP un IGES faili tiek gan izvesti, gan ievesti. Skatiet [Brīvās formas virsmas (NURBS)](topic:nurbs-surfaces).

**Teritorija un telpas**

- **Skices foto uz zemes.** {{ui:Fails}} › {{ui:Importēt skices foto…}} pārvērš tālruņa foto no rokas skices malās uz zemes norādītajā mērogā: viena grupa ar birkām katrai pildspalvas krāsai. Lapu datorā atrod un iztaisno, un nekas nekur netiek sūtīts. Skatiet [Modelēt uz situācijas plāna](topic:site-plan).
- **Iekārtot telpu.** Atlasiet grīdu un izmantojiet {{ui:Kārtošana}} › {{ui:Iekārtot telpu…}}. Guļamistabas, dzīvojamās istabas, ēdamistabas, virtuves, vannas istabas vai biroja mēbeles tiek novietotas pēc noteikumiem, pie sienām un brīvi no durvīm un logiem, vienā grupā, ko var noņemt vienā solī. Tas ir noklusējuma izkārtojums, ko jūs pārskatāt, nevis dizains. Skatiet [Sākuma bibliotēka](topic:starter).

**3D drukāšana**

- **Slīpi griezumi.** Sadalīt drukāšanai var slīpināt griezumus līdz 60 grādiem, kas dod detaļām lielāku savienošanas laukumu. Savienotāji stāv taisni pret griezumu. Skatiet [Sadalīt modeli drukāšanai](topic:print-split).
- **Drukas pārbaude sadaļā Problēmas.** 3D drukas pārbaudes atradumi tiek rādīti panelī Problēmas ar atzīmēm uz modeļa, un Labot tos novērš no turienes. Skatiet [Balsti, sienu biezums, dobums un labošana](topic:print-tools).

**Visās lietotnēs**

- **Valodas.** Palīdzība un lietotnes pieejamas 54 valodās. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili un uzbeku. Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, kamēr dzimtā valoda tos nav izlasījusi, un palīdzības tēmas var joprojām būt angliski.
- **Ievadierīces.** Skārienpaliktnis, pildspalva, 3D pele, spēļu kontrolieris un MIDI vadība var vadīt lietotnes, visām vai vienai.
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › Rīkjoslas rindas iestata Ietīt (kā agrāk), 2 rindas vai 1 rinda. Josla, kas neiederas, ritina sāniski, nevis atņem vietu no zīmējuma. Ietīt paliek noklusējums.
- **Īpašību tabula.** ModelCraft lampu lauki izmanto kopīgo tabulu: sakļaujamas kategorijas, nosaukumu un vērtību kolonnas un Kompakts blīvums. Ierakstīta aritmētika, piemēram, `2*450`, turpina darboties.
- **Problēmas.** Panelis Problēmas (brīdinājuma poga lietotņu joslā) ir kopīgs visām lietotnēm. ModelCraft tajā ir drukas pārbaude un virsmu nepārtrauktības brīdinājumi.
- **Tiešraide.** Live TeamWork sesija parāda, kas kur atrodas. Skatiet [Modelēt kopā ar Live TeamWork](topic:work-live).
- **Papildinājumi.** Papildinājumi var pievienot renderēšanas dzinējus, kā iepriekš minēts.
- **Savienojiet savu MI.** Rīku līgums un astoņu lietotņu pārbaudes izies cauri, kopā 454 rīki. Vienas pogas savienojums Studio iekšienē, savienotājs mājas lapā pārlūka asistentiem, jūsu pašu atslēga Studio iekšienē un publicēta pakotne vēl nav solīti. Lietotnēs nav pašu MI. Skatiet [Lietot ModelCraft ar MI asistentiem](topic:use-with-ai-assistants).

### Labots 0.8.1 versijā

- **DWG klasu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips, kas varēja sabojāt failu importējot. Tagad tā tiek nolasīta pareizi, ModelCraft un citās lietotnēs, kas lasa DWG.
- **Planšetes portretā.** Brīvais režģa augstums iet uz zīmējuma laukumu, un lapas izkārtojums sākas ar 760 pikseļiem platumā vai mazāk. ModelCraft stilu lapai ir arī šīs izmaiņas.
- **Valoda Studio.** CadCraft Studio un iepakotie izdevumi var pārslēgt valodu darbības laikā; agrāk tie bija tikai angliski. Tas vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.

### Vēl nav šajā versijā

- **Nav koda paraksta.** Windows var rādīt SmartScreen: izvēlieties {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}. Mac datorā noklikšķiniet ar peles labo pogu un izvēlieties {{ui:Atvērt}}. Veikalu versijas ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1 versijai.
- Cita programma, kas zīmē attēlu bez renderēšanas dzinēja papildinājuma, panorāmas vai stereo kameras un debesu attēls caur citu programmu, kā arī spraudnis, kas atver Unreal skatuvi, vēl nav. Faili tiek rakstīti; spraudnis nav izlaists un nav palaists Unreal.
- Brīvās formas virsmas: G3 un klase A nav izmērītas vai apgalvotas, un apgriešana un cietie ķermeņi būs vēlāk.
- Attēli no citām programmām nav pikseļi pa pikselim tādi kā mūsējie: sakrīt tikai kamera, saule, lampas un ekspozīcija.
- 0.8.1 labojums valodas pārslēgšanai Studio nav pārbaudīts visās platformās.

Viss pārējais ir [Vēl nav uzbūvēts](topic:not-built-yet). Iepriekšējam laidienam skatiet [Jaunumi 0.7 versijā](topic:whats-new-0-7).
