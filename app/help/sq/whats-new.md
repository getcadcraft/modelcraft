---
title: Çfarë ka të re në 0.9
summary: Faza e printimit me prerësin tonë dhe dërgimin përmes USB, Klipper, OctoPrint dhe PrusaLink, prerja për rrëshirë dhe shtojcat e skedarëve, rrjedha e materialeve, shtojcat e binjakut dixhital dhe të dyshemesë së fabrikës, skajet NURBS, trashja dhe përshtatja me skanim, AR në vend dhe dhjetë mënyra harku.
keywords: çfarë ka të re, shënime lëshimi, ndryshime, 0.9, faza e printimit, printim 3d, dërgo te printeri 3d, prerës, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rrëshirë, printim me rrëshirë, goo, sl1, ctb, anycubic, test ekspozimi, rrjedha e materialeve, binjak dixhital, dysheme fabrike, plc, transportier, nurbs, rrumbullakim, trashje, përshtatje me skanim, ar, në vend, metoda harku, njësi, 0.8, 0.8.1, version, veçori të reja, motor renderimi, motor, hap në, usd, gltf, unreal, motor shtojce, sipërfaqe, loft, sweep, vazhdimësi, g0, g1, g2, zebra, step, iges, thuaj skenën, skenë, moti, koha e ditës, stina, asistent, material nga një foto, foto, foto skice, mobilo, prerje e pjerrët, ndarje, kontroll printimi, probleme, rrjeti i vetive, llamba, gjuhët, pajisjet hyrëse, rreshtat e veglave, dwg, i drejtpërdrejtë
from: 169048a2
---

Kjo është ajo që ndryshoi në ModelCraft 0.9, krahasuar me 0.8.1. ModelCraft tani arrin te printeri dhe dyshemeja e fabrikës: mund të vendosësh gjëra në një shtrat printimi dhe t'i dërgosh pa i eksportuar, të prehesh për filament ose rrëshirë, dhe të hartosh një linjë për trajtimin e materialeve. Ky është CadCraft Studio 0.9 dhe tetë aplikacionet e tij; shumica e veçorive të reja më poshtë janë shtojca.

## E re

### Printimi 3D

- **Faza e printimit.** Kliko {{ui:Faza e printimit}} në shiritin e veglave. Shto artikuj të Bibliotekës në shtratin e printerit, rregullo-i, shiko shtresat e prera dhe shtyp {{ui:Dërgo te printeri 3D}}, pa asnjë STL për të eksportuar. I përket shtojcës 3D Print, që është e ndezur si parazgjedhje dhe mund të hiqet si çdo shtojcë. Shih [Vendos gjërat në shtratin e printimit dhe dërgoji printerit](topic:print-stage).
- **Prerësi ynë i filamentit.** {{ui:CadCraft basic (i përfshirë, më i shpejti)}} është prerësi në listën **Prerës** të kartës: mure, lëkura, mbushje, mbështetëse dhe një skirt, në një punëtor që e mban faqen të përdorshme. {{ui:Shiko shtresat}} me rrëshqitësin **Shtresa** i tregon shtresat përpara se të dërgosh. Profilet e printerëve, si stilet Ender-3 dhe Prusa MK4, mbajnë G-code-in e tyre të nisjes.
- **Dërgimi.** Përmes USB (Chrome ose Edge në kompjuter, me faqen e hapur), ose te Klipper (Moonraker), OctoPrint ose PrusaLink në rrjetin tënd. Asgjë nuk lidhet ose nuk dërgohet pa një klikim, dhe dërgimi pyet së pari.
- **Prerës të tjerë.** Kiri:Moto, PrusaSlicer dhe OrcaSlicer janë shtojca të veta, të fikura si parazgjedhje; shtoji nga karta ose nga {{ui:Cilësimet}} › {{ui:Shtojcat}}. PrusaSlicer dhe OrcaSlicer përdorin kopjen tënde të instaluar nga CadCraft Studio. Shtojca e printerëve Bambu Lab prerë me OrcaSlicer tënd dhe presetet e tij P2S, dhe kërkon Studio në kompjuter.
- **Printimi me rrëshirë.** Shtojcat e rrëshirës (të fikura si parazgjedhje) bëjnë foto shtresash për ekranin e printerit tënd, me zbrazje dhe vrima ajrimi, një raft dhe mbështetëse, një pamje paraprake të shtresave, dhe kohën, rrëshirën dhe koston. Shtojcat e formateve të skedarëve shkruajnë Elegoo GOO, SL1, Chitubox (CBDDLP dhe CTB 2 deri 5) dhe Anycubic (PWMX dhe PWS). Një test ekspozimi me rrëshirë bën një shkallë me pesë ekspozime. Shih [Prit për një printer me rrëshirë](topic:resin-printing).
- **Pa ndryshim.** {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}, mjetet e printimit dhe Ndaj për printim funksionojnë si në 0.8. Shih [Përgatit një model për printim 3D](topic:print-3d).

### Rrjedha e materialeve, Binjaku dixhital dhe Dyshemeja e fabrikës

Këto tre janë shtojca, të fikura derisa t'i ndezësh te {{ui:Cilësimet}} › {{ui:Shtojcat}}, dhe secila ka ndihmën e vet pasi të jetë e ndezur.

- **Rrjedha e materialeve.** Një panel me emrin Rrjedha e materialeve hartos transportues, stacione, buffera dhe shtigje AGV në pamjen 3D, nis një simulim me farë, e luan përsëri, dhe shfaq përshkueshmërinë, kohët e pritjes dhe radhët, me rezultatet e ruajtura si CSV. Porositë mund të vijnë nga një skedar CSV. Qelizat e robotëve mund të kontrollohen dhe eksportohen. Lidhja PLC ka një mënyrë të butë dhe një mënyrë reale mbi Modbus TCP, që funksionon vetëm në CadCraft Studio.
- **Binjaku dixhital.** Lexon hartimin e Rrjedhës së materialeve dhe nis një PLC të butë mbi të, me gabime që mund t'i detyrosh, teste stoku, krahasim hartimesh dhe një listë materialesh.
- **Dyshemeja e fabrikës.** Kthen stacionet në makina dhe qeliza, i lexon ato drejtpërdrejt ose nga një simulator, dhe mban një radhë punësh dhe një OEE të thjeshtë. Ajo vetëm lexon: kjo version nuk mund të shkruajë te një makinë ose PLC.

### Sipërfaqet, modelet dhe vizatimi

- **Rrumbullakime, trashje dhe boolean në NURBS.** Paneli {{ui:Sipërfaqet}} ka {{ui:Rrumbullakim midis faqesh}}, {{ui:Rrumbullakim i disa brinjëve}}, {{ui:Trashe në solid}} dhe Bashkim, Zbritje dhe Kryqëzim, secili me devijimin e matur. Shih [Sipërfaqe të lira (NURBS)](topic:nurbs-surfaces).
- **Përshtat sipërfaqet me një skanim.** Zgjidh një rrjetë të skanuar dhe përdor {{ui:Përshtat sipërfaqet me skanimin}} në grupin **Skanim**, pastaj {{ui:Qep sipërfaqet në një trup}}. Është një përshtatje e parë, jo një paketë e plotë rimodelimi.
- **Një lidhje e drejtpërdrejtë nga një modelues .3dm.** Një drejtim, nga Rhino 8 ose Grasshopper, dhe kërkon CadCraft Studio në të njëjtin kompjuter. Shih [Mbaj një model .3dm të gjallë](topic:live-3dm-link).
- **Shiko modelin në vend.** {{ui:Shiko në vend (AR, telefon)}} te menuja {{ui:Pamjet}} funksionon në një telefon Android me Chrome. Shih [Shiko modelin në vend me një telefon Android (AR)](topic:ar-on-site).
- **Metoda harku.** Menuja {{ui:Mënyrat e harkut}} ofron dhjetë mënyra për të vizatuar një hark, përfshirë {{ui:3-Point}} dhe {{ui:Fillim, Qendër, Fund}}.
- **Më shumë njësi.** Peshat (kg, lb, t, ton) dhe temperaturat (gradë C, F, K dhe R) kuptohen aty ku shkruan vlera me njësi.

## Në çdo aplikacion

- **Majat e veglave.** Teksti i ndihmës mbi butonat dhe etiketat e prera është një majë Bootstrap.
- **Kartë fillimi që mbyllet.** Kartela e këshillës në një zonë bosh vizatimi ka një x të vogël mbylljeje. Mbetet e mbyllur, dhe paleta e komandave mund ta shfaqë sërish.
- **Shirita skedash që lëvizin.** Shiriti i skedave të një paneli që nuk të përshtatet lëviz, në vend që të priset.
- **Titujt e skedave.** Me një dokument të hapur, skeda e shfletuesit fillon me emrin e dokumentit, pastaj ModelCraft dhe CadCraft. Një pikë vjen e para ndërsa nuk është ruajtur.
- **Pamja.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › Pamja mban pamjet në një listë, me një zgjedhje për të përdorur një pamje vetëm për këtë aplikacion dhe një buton për ta rivendosur.
- **Gjuhët.** Lista e gjuhëve në Cilësime ndjek skedarët e gjuhës që përmban versioni. Gjuhët e tjera nga anglishtja janë drafte makine.
- **Të drejtpërdrejtat dhe Biblioteka.** Live TeamWork shfaq kursorët dhe emrat në kohë reale, dhe koleksionet e Bibliotekës i japin çdo aplikacioni një koleksion parazgjedhje.

## Të rregulluara

- {{ui:Luaj}} kthehet në {{ui:Pauzë}} ndërsa një animacion luhet, dhe {{key:Space}} luan dhe pauzon ndërsa shtrati kohor është i hapur.
- Renderimi i fotos fallon në WebGL kur karta grafike nuk mund ta nisë gjurmuesin e shtegut. Paneli live i renderimit mund ende ta shfaqë gabimin; kjo nuk u kontrollua në një kompjuter Windows me atë drejtues.
- Modaliteti real i Rrjedhës së materialeve lidhet sërish pasi një lidhje u mbyll me përgjigje përjashtimi PLC.

## Kufizimet reale

- Asgjë nuk është printuar në një printer real: as me filament, as me rrëshirë, as përmes Bambu Connect. Skedarët e rrëshirës u lexuan përsëri vetëm nga lexuesit e vetë CadCraft.
- Binjaku dixhital dhe Dyshemeja e fabrikës u testuan vetëm me simulatorë dhe rezultate të njohura, pa PLC, linjë ose protokoll real. Janë ndihmës kontrolli, jo një validim sigurie. Fizika mbulon vetëm kuti, deri në tetë ngarkesa.
- Lidhja Rhino dhe Grasshopper nuk ka ekzekutuar kurrë në programet reale.
- Gjuhët jo angleze janë drafte makine.

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në ModelCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Dialogu {{ui:Rendero një foto…}} mund tani ta dërgojë skenën te një program tjetër, paneli Sipërfaqet bën sipërfaqe të lira të lëmuara, dhe një asistent i lidhur mund ta vendosë një skenë të tërë nga një fjali.

### E re

**Renderimi**

- **Një zgjedhje motori.** {{ui:Rendero një foto…}} ka një listë **Motori** mbi Mënyrën. Dy motorët tanë, I shpejti dhe Gjurmuesi i shtegut, janë parazgjedhja dhe funksionojnë kudo. Hyrjet e tjera e ruajnë skenën si paketë (modeli si skedar USD, plus një skedar cilësimesh me vlerat e saktë të materialeve, llambat që janë ndezur, dielli, qielli, ekspozimi dhe kamera) për ta marrë në një program tjetër. Një foto e vizatuar nga një program tjetër thotë cili program dhe cilën version e bëri. Shih [Zgjidh cili program e vizaton foton](topic:render-engines).
- **Hap në një program tjetër.** Lista e motorëve mund ta ruajë skenën si skedar USD, skedar glTF (`.glb`) ose dosje projekti Unreal (`.zip`), në shfletues dhe në CadCraft Studio. Në Studio mund të nisë edhe usdview ose programin e vetë kompjuterit për skedarin. Shih [Hap skenën në një program tjetër](topic:render-open-in).
- **Dërgo te një motor lojërash nga Studio.** Studio e shkruan skenën në një projekt Unreal Engine dhe e mban në hap me të çdo dërgim, vetëm në një drejtim. Redaktimet e tua jetojnë në një shtresë që CadCraft nuk e shkruan kurrë. Shih [Dërgo skenën te një motor lojërash](topic:render-unreal).
- **Motorë nga shtojcat.** Një shtojcë mund t'i shtojë një motor listës. Një i shkruar në JavaScript vizaton në shfletues dhe në Studio; një që nis një program kërkon lejen tënde të thënë në Studio. Shih [Vizato foton me një program tjetër](topic:render-other-program) dhe [Shto një motor renderimi me një shtojcë](topic:render-engine-addons).
- **Thuaj skenën.** Thuaji asistentit tënd të lidhur "muzg, shi i lehtë, pemë vjeshte, njerëz në sheshin" dhe ModelCraft e vendos me një hap: dielli lëviz te data dhe ora që hijet ta ndjekin, qielli ndryshon, shfaqen sipërfaqe të lagura, dhe pemët dhe njerëzit vendosen si objekte reale mbi etiketa që mund t'i fshehësh, zhvendosësh ose fshish. Koha e ditës, data ose stina, dhe moti (i kthjellët, i mbuluar, mjegull, shi i lehtë, shi, stuhi) funksionojnë edhe vetë, dhe një kërkesë më e vonshme e ndryshon të njëjtën skenë. Mjegulla shfaqet në foton me cilësi të lartë në kartën grafike; motorët e tjerë shfaqin qiellin, dritën dhe sipërfaqet e lagura. Shiu nuk vizatohet si vija që bien.

**Materialet**

- **Një material nga një foto.** Jepi ModelCraft një foto të një sipërfaqeje (një mur, një dysheme, gur) dhe ai bën një material që mbulon: drita përgjatë fotos sheshohet, skajet bëhen të bashkohen, dhe një hartë ngjyrash, një hartë trashësie dhe një hartë normale nxirren nga foto. Është përpunim i thjeshtë imazhi mbi foton tënde, pa model të trajnuar. Trashësia është një vlerësim. Një foto e sheshtë, katrore dhe e drejtpërdrejtë jep pllakën më të mirë; një model i fortë si tullat mund të tregojë një fantazmë të butë aty ku bashkimi është përzier.

**Sipërfaqet**

- **Sipërfaqe të lira.** Paneli {{ui:Sipërfaqet}} bën kurba NURBS dhe sipërfaqe pa prerje: kurba që kalojnë nëpër pika, loft, rregullore, nxjerrje, rrotullim, sweep përgjatë një ose dy shinave, sipërfaqe nga një rrjet kurbash, arna nga katër skaje, përputhje dhe përzierje. Çdo skaj i përbashkët matet si G0, G1 ose G2 (hapësirë, kënd, kërcim kurbaturë) mbi sipërfaqet e sakta, dhe një skaj më i keq se ç'kërkove shfaqet në panelin {{ui:Problemet}} me një rregullim **Përputh**. Vijat zebër dhe ngjyrat e kurbaturës vizatohen nga sipërfaqet e sakta. Skedarët STEP dhe IGES dalin dhe hyjnë. Shih [Sipërfaqe të lira (NURBS)](topic:nurbs-surfaces).

**Vendi dhe dhomat**

- **Një foto skice në tokë.** {{ui:Skedar}} › {{ui:Importo një foto skice…}} e kthen një foto telefoni të një skice dore në skaje në tokë, me shkallën që thua: një grup, me një etiketë për çdo ngjyrë stilolapsi. Fleta gjendet dhe drejtohet në kompjuterin tënd dhe asgjë nuk dërgohet askund. Shih [Modelo në një plan vendi](topic:site-plan).
- **Mobilo një dhomë.** Përzgjidh një dysheme dhe përdor {{ui:Organizo}} › {{ui:Mobilo një dhomë…}}. Mobiljet e dhomës së gjumit, të dhomës së ndenjes, të ngrënies, kuzhinës, banjës ose zyrës vendosen sipas rregullave, pranë mureve dhe pa prekur dyert dhe dritaret, në një grup që mund ta heqësh me një hap. Është një plan parazgjedhje për ta rishikuar, jo një projekt. Shih [Bibliotekë fillestare](topic:starter).

**Printimi 3D**

- **Prerje të pjerrëta.** Ndaj për printim mund t'i pjerrësojë prerjet deri në 60 gradë, që copat të kenë më shumë sipërfaqe ngjitjeje. Lidhësit qëndrojnë drejt me prerjen. Shih [Ndaj një model për printim](topic:print-split).
- **Kontrolli i printimit te Problemet.** Gjetjet e kontrollit të printimit 3D shfaqen në panelin Problemet me shenja mbi model, dhe Riparo i rregullon nga aty. Shih [Mbështetëse, trashësi muri, zbrazje dhe riparim](topic:print-tools).

**Në çdo aplikacion**

- **Gjuhët.** Ndihma dhe aplikacionet vijnë në 54 gjuhë. Dhjetë janë të reja: lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahilisht dhe uzbekisht. Gjuhët jo angleze janë drafte makine derisa t'i lexojë një folës amtar, dhe tekstet e ndihmës mund të jenë ende në anglisht.
- **Pajisjet hyrëse.** Një trackpad, një stilolaps, një maus 3D, një kontrollues lojërash dhe kontrollet MIDI mund të drejtojnë aplikacionet, për të gjitha ose për një.
- **Rreshtat e veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › Rreshtat e veglave vendos Mbështjellje (si më parë), 2 rreshta ose 1 rresht. Një shirit që nuk të përshtatet lëviz anash, në vend që t'i marrë hapësirë vizatimit. Mbështjellja mbetet parazgjedhja.
- **Rrjeti i vetive.** Fushat e llambave të ModelCraft përdorin rrjetin e përbashkët: kategori që palosen, kolona etiketash dhe vlerash, dhe dendësi Kompakte. Aritmetika e shkruar si `2*450` vazhdon të funksionojë.
- **Probleme.** Paneli Problemet (butoni i paralajmërimit në shiritin e aplikacionit) është i përbashkët për të gjitha aplikacionet. Në ModelCraft mban kontrollin e printimit dhe paralajmërimet e vazhdimësisë së sipërfaqeve.
- **Live.** Një sesion Live TeamWork tregon kush është ku. Shih [Modelo bashkë me Live TeamWork](topic:work-live).
- **Shtojcat.** Shtojcat mund të shtojnë motorë renderimi, siç u tha më lart.
- **Lidh AI-n tënd.** Kontrata e mjeteve dhe kontrollet e tetë aplikacioneve kalojnë, me 454 mjete gjithsej. Lidhja me një klik brenda Studio, një lidhës i strehuar për asistentët e shfletuesit, çelësi yt brenda Studio dhe një paketë e botuar nuk premtohen ende. Aplikacionet nuk kanë AI të vetin. Shih [Përdor ModelCraft me një asistent AI](topic:use-with-ai-assistants).

### Të rregulluara në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar, që mund ta prishte skedarin gjatë importit. Tani lexohet saktë, në ModelCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Tabletët në portret.** Hapësira e lirë e rrjetës shkon te kanavacja, dhe paraqitja e fletës fillon kur gjerësia është 760 piksele ose më pak. Fleta e stilit të ModelCraft ka edhe ajo ndryshimin.
- **Gjuha në Studio.** CadCraft Studio dhe edicionet e paketuara mund ta ndërrojnë gjuhën ndërsa punojnë; më parë ishin vetëm në anglisht. Kjo nuk është testuar ende në çdo platformë: thuaj nëse gjuha nuk ndryshon.

### Jo ende në këtë version

- **Pa nënshkrim kodi.** Windows mund të shfaqë SmartScreen: zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në një Mac, kliko me të djathtën dhe zgjidh {{ui:Hap}}. Versionet për dyqane janë në pritje, dhe versioni për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- Një program tjetër që vizaton foton pa një shtojcë motori renderimi, panorama ose kamera stereo, dhe një imazh qielli nga një program tjetër nuk janë ende aty; plugin-i që hap skenën Unreal nuk është ende. Skedarët shkruhen; plugin-i nuk është lëshuar dhe nuk është ekzekutuar në Unreal.
- Sipërfaqet e lira: G3 dhe klasa A nuk maten dhe nuk pretendohen; prerja dhe trupat vijnë më vonë.
- Fotot nga programe të tjera nuk janë pikë për pikë si të tonat: vetëm kamera, dielli, llambat dhe ekspozimi përputhen.
- Ndreqja e 0.8.1 për ndërrimin e gjuhës në Studio nuk është testuar në çdo platformë.

Gjithçka tjetër është te [Jo ende e ndërtuar](topic:not-built-yet). Për versionin e mëparshëm, shih [Çfarë ka të re në 0.7](topic:whats-new-0-7).
