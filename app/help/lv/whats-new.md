---
title: Jaunumi 0.9 versijā
summary: Drukas posms ar mūsu pašu slicer un sūtīšana uz USB, Klipper, OctoPrint un PrusaLink, sveķu slicēšana un failu papildinājumi, materiālu plūsma, digitālais dvīnis un ražotnes grīdas papildinājumi, NURBS noapaļojumi, biezināšana un skenējuma pielāgošana, AR uz vietas un desmit loka metodes.
keywords: jaunumi, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, drukas posms, 3D drukāšana, sūtīt uz 3D printeri, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, sveķi, sveķu drukāšana, goo, sl1, ctb, anycubic, ekspozīcijas tests, materiālu plūsma, digitālais dvīnis, ražotnes grīda, plc, konveijers, nurbs, noapaļojums, biezināšana, skenējuma pielāgošana, uz vietas, loka metodes, vienības, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, renderēšanas dzinējs, dzinējs, atvērt ar, usd, gltf, unreal, papildinājumu dzinējs, virsmas, loft, sweep, nepārtrauktība, g0, g1, g2, zebra, step, iges, ainas apraksts, aina, laika apstākļi, diennakts laiks, sezona, asistents, materiāls no foto, foto, skices foto, iekārtot, iekārtot telpu, slīpums, slīpais griezums, sadalīt, drukas pārbaude, problēmas, īpašību režģis, lampas, valodas, ievades ierīces, rīkjoslas rindas, dwg, tiešraide
from: 169048a2
---

Šeit ir izmaiņas ModelCraft 0.9 versijā salīdzinājumā ar 0.8.1. ModelCraft tagad sasniedz printeri un ražotnes grīdu: jūs varat novietot lietas uz drukas gultnes un nosūtīt tās bez eksportēšanas, sagatavot slicēšanai pavedienam vai sveķiem un izkārtot materiālu apstrādes līniju. Šī ir CadCraft Studio 0.9 un tās astoņas lietotnes; lielākā daļa tālāk aprakstīto jauno funkciju ir papildinājumi.

## Jauns

### 3D drukāšana

- **Drukas posms.** Noklikšķiniet uz {{ui:Drukas posms}} rīkjoslā. Pievienojiet bibliotēkas vienumus printera gultnei, izkārtojiet tos, apskatiet sagrieztos slāņus un nospiediet {{ui:Sūtīt uz 3D printeri}}, bez STL eksportēšanas. Tas pieder 3D drukas papildinājumam, kas pēc noklusējuma ir ieslēgts un to var noņemt kā jebkuru papildinājumu. Skatiet [Novietojiet lietas uz drukas gultnes un nosūtiet tās printerim](topic:print-stage).
- **Mūsu pašu pavedienu slicer.** {{ui:CadCraft basic (iekļauts, ātrākais)}} ir slicer **Slicer** sarakstā: sienas, apvalki, aizpildījums, balsti un apmale, fona procesā, lai lapa paliktu lietojama. {{ui:Priekšskatīt slāņus}} ar slīdni **Layer** rāda slāņus, pirms sūtāt. Printera profili, piemēram, Ender-3 un Prusa MK4 stili, satur savu sākuma G-kodu.
- **Sūtīšana.** Caur USB (Chrome vai Edge datorā, ar atvērtu lapu) vai uz Klipper (Moonraker), OctoPrint vai PrusaLink jūsu tīklā. Nekas nesavienojas un nesūta bez klikšķa, un sūtīšana vispirms jautā.
- **Citi slicer.** Kiri:Moto, PrusaSlicer un OrcaSlicer ir paši savi papildinājumi, pēc noklusējuma izslēgti; pievienojiet tos no kartītes vai no {{ui:Iestatījumi}} › {{ui:Papildinājumi}}. PrusaSlicer un OrcaSlicer izmanto jūsu pašu instalēto kopiju no CadCraft Studio. Papildinājums Bambu Lab printeriem sagriež ar jūsu OrcaSlicer un tā P2S iestatījumiem un prasa Studio datorā.
- **Sveķu drukāšana.** Sveķu papildinājumi (pēc noklusējuma izslēgti) veido slāņu attēlus printera ekrānam, ar iedobumu un ventilācijas caurumiem, plostu un balstiem, slāņu priekšskatījumu, kā arī laiku, sveķu daudzumu un izmaksas. Failu formātu papildinājumi raksta Elegoo GOO, SL1, Chitubox (CBDDLP un CTB 2 līdz 5) un Anycubic (PWMX un PWS). Sveķu ekspozīcijas tests veido piecu ekspozīciju kāpnes. Skatiet [Sagatavot sveķu printerim](topic:resin-printing).
- **Nemainīts.** {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}, drukas rīki un sadalīšana drukāšanai darbojas kā 0.8 versijā. Skatiet [Sagatavot modeli 3D drukāšanai](topic:print-3d).

### Materiālu plūsma, digitālais dvīnis un ražotnes grīda

Šie trīs ir papildinājumi, izslēgti, līdz tos ieslēdzat sadaļā {{ui:Iestatījumi}} › {{ui:Papildinājumi}}, un katram pēc ieslēgšanas ir sava palīdzība.

- **Materiālu plūsma.** Panelis ar nosaukumu Materiālu plūsma izkārto konveierus, stacijas, buferus un AGV ceļus 3D skatā, palaiž simulāciju ar sēklu, atskaņo to un rāda caurlaidspēju, izpildes laikus un rindas, rezultātus saglabājot kā CSV. Pasūtījumi var nākt no CSV faila. Robotu šūnas var pārbaudīt un eksportēt. PLC saitei ir mīkstais režīms un reālais režīms pār Modbus TCP, kas darbojas tikai CadCraft Studio.
- **Digitālais dvīnis.** Nolasa materiālu plūsmas izkārtojumu un uz tā palaiž mīksto PLC, ar kļūmēm, ko varat piespiest, krājumu testiem, izkārtojumu salīdzinājumu un materiālu sarakstu.
- **Ražotnes grīda.** Pārvērš stacijas mašīnās un šūnās, nolasa tās tiešraidē vai no simulatora un uztur darbu rindu un vienkāršu OEE. Tā tikai nolasa: šī versija nevar rakstīt uz mašīnu vai PLC.

### Virsmas, modeļi un zīmēšana

- **Noapaļojumi, biezināšana un Būla operācijas NURBS.** Panelī {{ui:Virsmas}} ir {{ui:Noapaļojums starp virsmām}}, {{ui:Noapaļot vairākas malas}}, {{ui:Biezināt līdz cietam ķermenim}} un Apvienot, Atņemt un Krustot, katrs ar izmērīto novirzi. Skatiet [Brīvas formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Virsmu pielāgošana skenējumam.** Atlasiet skenēto tīklu un izmantojiet {{ui:Pielāgot virsmas skenējumam}} grupā **Skenēšana**, tad {{ui:Sašūt virsmas cietā ķermenī}}. Tā ir pirmā pielāgošana, nevis pilns atpakaļinženierijas pakotne.
- **Tiešraides saite no .3dm modelētāja.** Vienā virzienā, no Rhino 8 vai Grasshopper, un tai vajadzīgs CadCraft Studio tajā pašā datorā. Skatiet [Uzturēt .3dm modeli aktuālu](topic:live-3dm-link).
- **Modeļa apskate uz vietas.** {{ui:Skats vietā (AR, tālrunis)}} izvēlnē {{ui:Skati}} darbojas Android tālrunī ar Chrome. Skatiet [Modeļa apskate uz vietas ar Android tālruni (AR)](topic:ar-on-site).
- **Loka metodes.** Nolaižamais saraksts {{ui:Loka metodes}} piedāvā desmit veidus, kā zīmēt loku, ieskaitot {{ui:3 punkti}} un {{ui:Sākums, Centrs, Beigas}}.
- **Vairāk vienību.** Svars (kg, lb, t, ton) un temperatūras (grādi C, F, K un R) tiek atpazītas tur, kur ievadāt vērtības ar vienībām.

## Katrā lietotnē

- **Rīka padomi.** Pogu un saīsinātu uzrakstu teksts, kad norādāt virsū, ir Bootstrap rīka padoms.
- **Aizverams sākuma padoms.** Padomu kartītei tukšā zīmēšanas laukumā ir neliela aizvēršanas poga (x). Tā paliek aizvērta, un komandu palete to var parādīt atkal.
- **Ritināmas cilņu joslas.** Paneļa cilņu josla, kas neietilpst, ritinās, nevis tiek apgriezta.
- **Cilņu nosaukumi.** Ar atvērtu dokumentu pārlūkprogrammas cilne sākas ar dokumenta nosaukumu, tad ModelCraft un CadCraft. Punkts ir pirmais, kamēr dokuments nav saglabāts.
- **Izkārtojums.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › Izkārtojums glabā izkārtojumus nolaižamā sarakstā, ar izvēli izmantot izkārtojumu tikai šai lietotnei un pogu izkārtojuma atiestatīšanai.
- **Valodas.** Valodu saraksts iestatījumos seko valodu failiem, ko satur būvējums. Citas valodas, nevis angļu, ir mašīntulkoti melnraksti.
- **Tiešraide un bibliotēka.** Live TeamWork rāda tiešraides kursorus un vārdus, un bibliotēkas kolekcijas dod katrai lietotnei noklusējuma kolekciju.

## Labots

- {{ui:Atskaņot}} pārvēršas par {{ui:Pauze}}, kamēr animācija atskaņojas, un {{key:Space}} atskaņo un aptur, kamēr ir atvērta laika līnija.
- Statiskais renderējums atkāpjas uz WebGL, kad grafikas karte nevar palaist ceļa izsekotāju. Tiešraides renderēšanas skats joprojām var rādīt kļūdu; tas nav pārbaudīts Windows datorā ar šo draiveri.
- Materiālu plūsmas reālais režīms atkal savienojas pēc tam, kad saite beidzās ar PLC izņēmumu atbildēm.

## Godīgi ierobežojumi

- Nekas nav izdrukāts uz īsta printera: ne ar pavedienu, ne ar sveķiem, ne caur Bambu Connect. Sveķu failus nolasīja tikai CadCraft paši lasītāji.
- Digitālais dvīnis un Ražotnes grīda testēti tikai ar simulatoriem un zināmām atbildēm, bez īsta PLC, līnijas vai protokola. Tie ir pārbaudes palīglīdzekļi, nevis drošības validācija. Fizika aptver tikai kastes, līdz astoņām slodzēm.
- Rhino un Grasshopper saite nekad nav darbojusies īstajās programmās.
- Valodas, kas nav angļu, ir mašīntulkoti melnraksti.

## Agrāk: 0.8 un 0.8.1

Šeit ir izmaiņas ModelCraft 0.8 (2026-11-01) un 0.8.1 (2026-11-02) versijā salīdzinājumā ar 0.7. Dialogs {{ui:Renderēt attēlu…}} tagad var nosūtīt ainu citai programmai, {{ui:Virsmas}} panelis veido gludas brīvas formas virsmas, un savienots asistents var iestatīt visu ainu ar vienu teikumu.

### Jauns

**Renderēšana**

- **Dzinēja izvēle.** {{ui:Renderēt attēlu…}} virs režīma ir saraksts **Dzinējs**. Mūsu pašu divi dzinēji, Ātrais un Ceļa izsekotājs, ir noklusējums un darbojas visur. Citi ieraksti saglabā ainu kā pakotni (modelis kā USD fails un iestatījumu fails ar precīzām materiālu vērtībām, ieslēgtajām lampām, sauli, debesīm, ekspozīciju un kameru), ko nest uz citu programmu. Citas programmas zīmētam attēlam norādīts, kura programma un versija to izveidoja. Skatiet [Izvēlieties, kura programma zīmē attēlu](topic:render-engines).
- **Atvērt citā programmā.** Dzinēja saraksts var saglabāt ainu kā USD failu, glTF failu (`.glb`) vai Unreal projekta mapi (`.zip`), pārlūkprogrammā un CadCraft Studio. Studio tas var arī palaist usdview vai datora pašu programmu failam. Skatiet [Atvērt ainu citā programmā](topic:render-open-in).
- **Sūtīšana uz spēļu dzinēju no Studio.** Studio raksta ainu Unreal Engine projektā un to uztur sinhronā ar katru sūtīšanu, tikai vienā virzienā. Jūsu pašu izmaiņas dzīvo slānī, ko CadCraft nekad nerakstīs. Skatiet [Sūtīt ainu uz spēļu dzinēju](topic:render-unreal).
- **Dzinēji no papildinājumiem.** Papildinājums var pievienot dzinēju sarakstam. Dzinējs, kas rakstīts JavaScript, zīmē pārlūkprogrammā un Studio; tas, kas palaiž programmu, Studio prasa jūsu apstiprinājumu. Skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program) un [Pievienot renderēšanas dzinēju ar papildinājumu](topic:render-engine-addons).
- **Pasakiet ainu.** Pastāstiet savam savienotajam asistentam "krēslas stunda, viegls lietus, rudens koki, cilvēki laukumā", un ModelCraft to iestata vienā solī: saule pārvietojas uz datumu un laiku, lai ēnas seko, debesis mainās, parādās mitras virsmas, un koki un cilvēki tiek novietoti kā reāli objekti uz birkām, ko varat paslēpt, pārvietot vai dzēst. Diennakts laiks, datums vai sezona, kā arī laika apstākļi (skaidrs, apmācies, migla, viegls lietus, lietus, vētra) darbojas arī atsevišķi, un vēlāks pieprasījums maina to pašu ainu. Migla redzama augstas kvalitātes attēlā grafikas kartē; citi dzinēji rāda debesis, gaismu un mitras virsmas. Lietus nav zīmēts kā krītošas svītras.

**Materiāli**

- **Materiāls no viena foto.** Iedodiet ModelCraft virsmas foto (sienu, grīdu, akmeni), un tā izveido flīžu materiālu: apgaismojums pāri foto tiek izlīdzināts, malas tiek savienotas, un krāsu karte, raupjuma karte un normāļu karte tiek aprēķinātas no attēla. Tā ir vienkārša attēlu apstrāde jūsu pašu attēlam, bez apmācīta modeļa. Raupjums ir aptuvens novērtējums. Vienkārša, kvadrāta, taisna foto dod labāko flīzi; spēcīgs raksts, piemēram, ķieģeļi, var parādīt mīkstu spoku vietā, kur savienojums sajaukts.

**Virsmas**

- **Brīvas formas virsmas.** Panelis {{ui:Virsmas}} veido NURBS līknes un nenogrieztas virsmas: līknes caur punktiem, loft, ruled, extrude, revolve, pārvilkšanu gar vienu vai divām sliedēm, virsmas no līkņu tīkla, lāpus no četrām malām, saskaņošanu un saplūdināšanu. Katra kopīgā mala tiek izmērīta kā G0, G1 vai G2 (sprauga, leņķis, izliekuma lēciens) precīzās virsmās, un mala, kas ir sliktāka nekā prasījāt, parādās panelī Problēmas ar labojumu **Saskaņot**. Zebras svītras un izliekuma krāsas zīmētas no precīzām virsmām. STEP un IGES faili tiek gan izvesti, gan ievesti. Skatiet [Brīvas formas virsmas (NURBS)](topic:nurbs-surfaces).

**Situācija un telpas**

- **Skices foto uz zemes.** {{ui:Fails}} › {{ui:Importēt skices foto…}} pārvērš telefona foto no rokas skices malās uz zemes norādītajā mērogā: viena grupa, ar birku katram pildspalvas krāsai. Papīrs datorā tiek atrasts un iztaisnots, un nekas nekur netiek sūtīts. Skatiet [Modelēt uz situācijas plāna](topic:site-plan).
- **Iekārtot telpu.** Atlasiet grīdu un izmantojiet {{ui:Kārtošana}} › {{ui:Iekārtot telpu…}}. Guļamistabas, dzīvojamās istabas, ēdamistabas, virtuves, vannas istabas vai biroja mēbeles tiek novietotas pēc noteikumiem, pie sienām un nebloķējot durvis un logus, vienā grupā, ko var noņemt vienā solī. Tas ir noklusējuma izkārtojums, ko jūs pārskatāt, nevis dizains. Skatiet [Sākuma bibliotēka](topic:starter).

**3D drukāšana**

- **Slīpi griezumi.** Sadalīšana drukāšanai var slīpināt savus griezumus līdz 60 grādiem, kas dod detaļām vairāk līmēšanas laukuma. Savienotāji stāv taisni pret griezumu. Skatiet [Sadalīt modeli drukāšanai](topic:print-split).
- **Drukas pārbaude panelī Problēmas.** 3D drukas pārbaudes rezultāti rādās panelī Problēmas ar atzīmēm uz modeļa, un no turienes tos labo Labošana. Skatiet [Balsti, sienas biezums, iedobums un labošana](topic:print-tools).

**Katrā lietotnē**

- **Valodas.** Palīdzība un lietotnes ir 54 valodās. Desmit ir jaunas: lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikandu, filipīniešu, svahili un uzbeku. Valodas, kas nav angļu, ir mašīntulkoti melnraksti, līdz dzimtā valodā runātājs tos izlasījis, un palīdzības tēmas joprojām var būt angļu valodā.
- **Ievades ierīces.** Skārienpaliktnis, pildspalva, 3D pele, spēļu kontrolieris un MIDI vadība var vadīt lietotnes, visām vai vienai.
- **Rīkjoslu rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › Rīkjoslu rindas iestata Wrap (kā agrāk), 2 rindas vai 1 rindu. Josla, kas neietilpst, ritina sānus, nevis ņem vietu no zīmējuma. Wrap paliek noklusējums.
- **Īpašību režģis.** ModelCraft lampu lauki izmanto kopīgo režģi: saļaujamas kategorijas, nosaukumu un vērtību kolonnas un kompaktu blīvumu. Ievadītā aritmētika, piemēram, `2*450`, turpina darboties.
- **Problēmas.** Panelis Problēmas (brīdinājuma poga lietotnes joslā) ir kopīgs visām lietotnēm. ModelCraft tajā ir drukas pārbaude un virsmu nepārtrauktības brīdinājumi.
- **Tiešraide.** Live TeamWork sesija rāda, kurš kur atrodas. Skatiet [Modelēšana kopā ar Live TeamWork](topic:work-live).
- **Papildinājumi.** Papildinājumi var pievienot renderēšanas dzinējus, kā iepriekš.
- **Savienojiet savu MI.** Rīku līgums un astoņu lietotņu pārbaudes izpildītas, kopā 454 rīki. Vienas klikšķa savienojums Studio iekšienē, mitināts savienotājs pārlūkprogrammu asistentiem, jūsu pašu atslēga Studio iekšienē un publicēta pakotne vēl nav solītas. Lietotnēs pašās nav MI. Skatiet [ModelCraft lietošana ar MI asistentu](topic:use-with-ai-assistants).

### Labots 0.8.1 versijā

- **DWG klašu sadaļa.** DWG faila klašu sadaļa tika nolasīta kā nepareizs tips, kas importēšanā varēja salauzt failu. Tagad tā tiek nolasīta pareizi ModelCraft un citās lietotnēs, kas lasa DWG.
- **Planšetdatori portreta režīmā.** Brīvais režģa augstums iet uz zīmēšanas laukumu, un lapas izkārtojums sākas pie 760 pikseļiem platuma vai mazāk. ModelCraft stilu lapā arī ir šī izmaiņa.
- **Valoda Studio.** CadCraft Studio un iepakotie izdevumi var mainīt valodu darbības laikā; līdz šim tie bija tikai angliski. Tas vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.

### Šajā versijā vēl nav

- **Nav koda parakstīts.** Windows var rādīt SmartScreen: izvēlieties {{ui:Papildinformācija}}, tad {{ui:Palaist tomēr}}. Mac datorā ar peles labo pogu noklikšķiniet un izvēlieties {{ui:Atvērt}}. Veikalu versijas ir apturētas, un iPad un iPhone versija netika pārbūvēta 0.8.1 versijai.
- Cita programma, kas zīmē attēlu bez renderēšanas dzinēja papildinājuma, panorāmas vai stereo kameras un debesu attēls caur citu programmu, kā arī spraudnis, kas atver Unreal skatuvi, vēl nav. Faili ir rakstīti; spraudnis nav izlaists un nav palaists Unreal.
- Brīvas formas virsmas: G3 un A klase netiek mērīti vai apgalvoti, un apgriešana un cietie ķermeņi nāks vēlāk.
- Attēli no citām programmām nav pikseļu precizitātē kā mūsējie: sakrīt tikai kamera, saule, lampas un ekspozīcija.
- 0.8.1 labojums valodas maiņai Studio nav pārbaudīts visās platformās.

Pārējais ir [Vēl nav izveidots](topic:not-built-yet). Par iepriekšējo izlaidumu skatiet [Jaunumi 0.7 versijā](topic:whats-new-0-7).
