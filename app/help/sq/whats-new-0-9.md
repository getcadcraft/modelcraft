---
title: Çfarë është e re në 0.9 (më herët)
summary: Faza e printimit me prerësin tonë dhe dërgimi përmes USB, Klipper, OctoPrint dhe PrusaLink, prerja me rrëshirë dhe shtojcat e skedarëve, rrjedha e materialit, shtojcat e binjakut dixhital dhe të dyshemesë së fabrikës, rrumbullakime NURBS, trashje dhe përshtatje me skanimin, AR në vend dhe dhjetë mënyra harku.
keywords: çfarë është e re 0.9, versioni i mëparshëm, çfarë është e re, shënime të versionit, regjistri i ndryshimeve, 0.9, faza e printimit, printim 3D, dërgo te printeri 3D, prerës, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, rrëshirë, printim me rrëshirë, goo, sl1, ctb, anycubic, test ekspozimi, rrjedha e materialit, binjaku dixhital, dyshemeja e fabrikës, plc, transportier, nurbs, rrumbullakim, trashje, përshtatje me skanimin, ar, në vend, mënyrat e harkut, njësitë, ndryshimet, 0.8, 0.8.1, versioni, veçori të reja, motor renderimi, motor, hap në, usd, gltf, unreal, motor shtojce, sipërfaqet, loft, sweep, vazhdimësi, g0, g1, g2, zebra, step, iges, thuaj skenën, skena, moti, ora e ditës, stina, asistent, material nga një foto, foto, foto skice, mobiliko, mobiliko një dhomë, e pjerrët, ndarje, kontroll printimi, problemet, rrjeti i vetive, llamba, gjuhët, pajisjet e hyrjes, rreshtat e shiritit, dwg, live
from: 2717d1b1
---

Ky është ndryshimi në ModelCraft 0.9, krahasuar me 0.8.1. ModelCraft tani arrin te printeri dhe te dyshemeja e fabrikës: mund të vendosësh gjëra në tavolinën e printimit dhe t'i dërgosh pa eksportuar, të bësh prerje për filament ose rrëshirë, dhe të planifikosh një linjë trajtimi materialesh. Ky është CadCraft Studio 0.9 dhe tetë aplikacionet e tij; shumica e veçorive të reja më poshtë janë shtojca.

## Të reja

### Printimi 3D

- **Faza e printimit.** Kliko {{ui:Faza e printimit}} në shiritin e veglave. Shto elementët e Bibliotekës në tavolinën e printimit, rregulloji, shiko shtresat e prera dhe shtyp {{ui:Dërgo te printeri 3D}}, pa STL për të eksportuar. I përket shtojcës 3D Print, e cila është e ndezur si parazgjedhje dhe mund të hiqet si çdo shtojcë. Shiko [Vendos gjërat në tavolinën e printimit dhe dërgoji printerit](topic:print-stage).
- **Prerësi ynë i filamentit.** {{ui:CadCraft basic (i përfshirë, më i shpejti)}} është prerësi në listën **Prerësi** të kartës: mure, lëkura, mbushje, mbajtëse dhe një skirt, në një worker që faqja të mbetet e përdorshme. {{ui:Parashiko shtresat}} me rrëshqitësin **Shtresa** tregon shtresat para dërgimit. Profilet e printerëve si stilet Ender-3 dhe Prusa MK4 mbajnë G-code-in e tyre të nisjes.
- **Dërgimi.** Përmes USB (Chrome ose Edge në kompjuter, me faqen e hapur), ose te Klipper (Moonraker), OctoPrint ose PrusaLink në rrjetin tënd. Asgjë nuk lidhet ose dërgon pa një klik, dhe dërgimi pyet më parë.
- **Prerës të tjerë.** Kiri:Moto, PrusaSlicer dhe OrcaSlicer janë shtojca të veta, të fikura si parazgjedhje; shtoji nga karta ose nga {{ui:Cilësimet}} › {{ui:Shtojcat}}. PrusaSlicer dhe OrcaSlicer përdorin kopjen tënde të instaluar nga CadCraft Studio. Shtojca e printerëve Bambu Lab prer pjesët me OrcaSlicer-in tënd dhe paracaktimet e tij P2S, dhe kërkon Studio në kompjuter.
- **Printimi me rrëshirë.** Shtojcat e rrëshirës (të fikura si parazgjedhje) bëjnë foto shtresash për ekranin e printerit tënd, me zbrazje dhe vrima ajrimi, pllakë dhe mbajtëse, një pamje paraprake të shtresave, dhe kohën, rrëshirën dhe koston. Shtojcat e formatit të skedarit shkruajnë Elegoo GOO, SL1, Chitubox (CBDDLP dhe CTB 2 deri 5) dhe Anycubic (PWMX dhe PWS). Një test ekspozimi me rrëshirë bën një shkallë me pesë ekspozime. Shiko [Prerje për printer me rrëshirë](topic:resin-printing).
- **Pa ndryshim.** {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}, veglat e printimit dhe Ndarja për printim funksionojnë si në 0.8. Shiko [Përgatit një model për printim 3D](topic:print-3d).

### Rrjedha e materialit, Binjaku dixhital dhe Dyshemeja e fabrikës

Këto tre janë shtojca, të fikura derisa t'i ndezësh në {{ui:Cilësimet}} › {{ui:Shtojcat}}, dhe secila ka ndihmën e vet pasi të jetë e ndezur.

- **Rrjedha e materialit.** Një panel me emrin Rrjedha e materialit vendos transportierët, stacionet, buferat dhe rrugët AGV në pamjen 3D, kryen një simulim me farë, e luan përsëri, dhe tregon përshkueshmërinë, kohët e pritjes dhe radhët, me rezultatet e ruajtura si CSV. Porositë mund të vijnë nga një skedar CSV. Qelitë e robotëve mund të kontrollohen dhe eksportohen. Lidhja PLC ka një modalitet të butë dhe një modalitet të vërtetë mbi Modbus TCP, që punon vetëm në CadCraft Studio.
- **Binjaku dixhital.** Lexon planin e Rrjedhës së materialit dhe kryen një PLC të butë mbi të, me defekte që mund t'i detyrosh, teste stoku, krahasim plani dhe një listë materialesh.
- **Dyshemeja e fabrikës.** Kthen stacionet në makina dhe qeliza, i lexon ato drejtpërdrejt ose nga një simulator, dhe mban një radhë punësh dhe një OEE të thjeshtë. Lexon vetëm: kjo version nuk mund të shkruajë në asnjë makinë ose PLC.

### Sipërfaqet, modelet dhe vizatimi

- **Rrumbullakime, trashje dhe operacione booleane në NURBS.** Paneli {{ui:Sipërfaqet}} ka {{ui:Rrumbullakim midis faqesh}}, {{ui:Rrumbullakim i disa brinjëve}}, {{ui:Trashe në solid}} dhe Bashkim, Zbritje dhe Prerje, secili me devijimin e tij të matur. Shiko [Sipërfaqe të lira (NURBS)](topic:nurbs-surfaces).
- **Përshtat sipërfaqet me një skanim.** Zgjidh një rrjetë të skanuar dhe përdor {{ui:Përshtat sipërfaqet me skanimin}} në grupin **Skanimi**, pastaj {{ui:Qep sipërfaqet në një trup}}. Është një përshtatje e parë, jo një paketë e plotë riinxhinierimi.
- **Lidhje e drejtpërdrejtë nga një modelues .3dm.** Një drejtim, nga Rhino 8 ose Grasshopper, dhe kërkon CadCraft Studio në të njëjtin kompjuter. Shiko [Mban një model .3dm të gjallë](topic:live-3dm-link).
- **Shiko modelin në vend.** {{ui:Pamje në vend (AR, telefon)}} në menynë {{ui:Pamjet}} funksionon në një telefon Android me Chrome. Shiko [Shiko modelin në vend me një telefon Android (AR)](topic:ar-on-site).
- **Mënyrat e harkut.** Lista {{ui:Mënyrat e harkut}} ofron dhjetë mënyra për të vizatuar një hark, përfshirë {{ui:3-Point}} dhe {{ui:Fillim, Qendër, Fund}}.
- **Më shumë njësi.** Peshat (kg, lb, t, ton) dhe temperaturat (gradë C, F, K dhe R) kuptohen aty ku shkruan vlera me njësi.

## Në çdo aplikacion

- **Tooltip-et.** Teksti që shfaqet kur kalon mbi butona dhe etiketat e prera është një tooltip Bootstrap.
- **Këshilla e mbyllshme në fillim.** Karta e këshillës në një zonë bosh vizatimi ka një x të vogël mbyllëse. Mbetet e mbyllur, dhe paleta e komandave mund ta shfaqë përsëri.
- **Shiritat e skedave me lëvizje.** Një shirit skedash paneli që nuk përshtatet lëviz anash, në vend që të preret.
- **Titujt e skedave.** Me një dokument të hapur, skeda e shfletuesit fillon me emrin e dokumentit, pastaj ModelCraft dhe CadCraft. Një pikë vjen e para ndërsa nuk është ruajtur.
- **Paraqitja.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › Layout mban paraqitjet në një listë rënëse, me një zgjedhje për të përdorur një paraqitje vetëm për këtë aplikacion dhe një buton për rivendosjen e paraqitjes.
- **Gjuhët.** Lista e gjuhëve në Cilësimet ndjek skedarët e gjuhës që përmban versioni. Gjuhët e tjera nga anglishtja janë përkthime makinerie.
- **Live dhe Biblioteka.** Live TeamWork shfaq kursorët dhe emrat në kohë reale, dhe koleksionet e Bibliotekës i japin çdo aplikacioni një koleksion parazgjedhje.

## Të rregulluara

- {{ui:Luaj}} kthehet në {{ui:Pauzë}} ndërsa luhet një animacion, dhe {{key:Space}} luan dhe pauzon ndërsa kronologjia është e hapur.
- Renderimi i fotos së palëvizur kalon në WebGL kur karta grafike nuk mund të nisë path tracer-in. Pamja e renderimit të drejtpërdrejtë mund ende të shfaqë gabimin; kjo nuk u kontrollua në një kompjuter Windows me atë drejtues.
- Modaliteti real i Rrjedhës së materialit lidhet përsëri pasi një lidhje mbaroi me përgjigje përjashtimi PLC.

## Kufizimet e sinqerta

- Asgjë nuk është printuar në një printer të vërtetë: as filament, as rrëshirë, as përmes Bambu Connect. Skedarët e rrëshirës u lexuan përsëri vetëm nga lexuesit e CadCraft.
- Binjaku dixhital dhe Dyshemeja e fabrikës u testuan vetëm kundër simulatorëve dhe përgjigjeve të njohura, pa PLC, linjë ose protokoll të vërtetë. Janë ndihmës kontrolli, jo një vlerësim sigurie. Fizika mbulon vetëm kuti, deri në tetë ngarkesa.
- Lidhja me Rhino dhe Grasshopper nuk ka punuar kurrë në programet e vërtetë.
- Gjuhët jo angleze janë përkthime makinerie.

## Më herët: 0.8 dhe 0.8.1

Ky është ndryshimi në ModelCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Dialogu {{ui:Rendero një foto…}} tani mund t'ia dërgojë skenën një programi tjetër, paneli Sipërfaqet bën sipërfaqe të lëmuara të lira, dhe një asistent që lidh mund të vendosë një skenë të tërë nga një fjali.

### Të reja

**Renderimi**

- **Një zgjedhje motori.** {{ui:Rendero një foto…}} ka një listë **Motori** mbi Mode. Motorët tanë, Fast dhe Path tracer, janë parazgjedhja dhe punojnë kudo. Hyrjet e tjera ruajnë skenën si një paketë (modeli si skedar USD, plus një skedar cilësimesh me vlerat e sakta të materialeve, llambat e ndezura, diellin, qiellin, ekspozimin dhe kamerën) për ta marrë në një program tjetër. Një foto e vizatuar nga një program tjetër thotë cili program dhe version e bëri. Shiko [Zgjidh cili program vizaton foton](topic:render-engines).
- **Hap në një program tjetër.** Lista e Motorit mund ta ruajë skenën si skedar USD, skedar glTF (`.glb`) ose dosje projekti Unreal (`.zip`), në shfletues dhe në CadCraft Studio. Në Studio mund të nisë edhe usdview ose programin e vetë kompjuterit për skedarin. Shiko [Hap skenën në një program tjetër](topic:render-open-in).
- **Dërgo te një motor lojërash nga Studio.** Studio e shkruan skenën në një projekt Unreal Engine dhe e mban të sinkronizuar në çdo dërgim, vetëm në një drejtim. Redaktimet e tua jetojnë në një shtresë që CadCraft kurrë nuk e shkruan. Shiko [Dërgo skenën te një motor lojërash](topic:render-unreal).
- **Motorë nga shtojcat.** Një shtojcë mund të shtojë një motor në listë. Një i shkruar në JavaScript vizaton në shfletues dhe në Studio; një që nis një program kërkon lejen tënde në Studio. Shiko [Vizato foton me një program tjetër](topic:render-other-program) dhe [Shto një motor renderimi me një shtojcë](topic:render-engine-addons).
- **Thuaj skenën.** Thuaji asistentit tënd të lidhur "muzg, shi i lehtë, pemë vjeshte, njerëz në sheshin" dhe ModelCraft e vendos me një hap: dielli lëviz te data dhe ora, që hijet ta ndjekin, qielli ndryshon, shfaqen sipërfaqe të lagura, dhe pemët dhe njerëzit vendosen si objekte reale në etiketa që mund t'i fshehësh, zhvendosësh ose fshish. Ora e ditës, data ose stina, dhe moti (i pastër, me re, mjegull, shi i lehtë, shi, stuhi) funksionojnë edhe vetë, dhe një kërkesë më vonë ndryshon të njëjtën skenë. Mjegulla shfaqet në foton me cilësi të lartë në kartën grafike; motorët e tjerë shfaqin qiellin, dritën dhe sipërfaqet e lagura. Shiu nuk vizatohet si vija që bien.

**Materialet**

- **Një material nga një foto.** Jep ModelCraft një foto të një sipërfaqeje (mur, dysheme, gur) dhe ai bën një material me pllaka: ndriçimi në të gjithë foton sheshohet, skajet bëhen të bashkohen, dhe një hartë ngjyrash, një hartë ashpërsie dhe një hartë normale nxirren nga figura. Është përpunim i thjeshtë imazhi mbi foton tënde, pa model të trajnuar. Ashpërsia është një vlerësim. Një foto e thjeshtë, katrore, drejt-përpara jep pllakën më të mirë; një model i fortë si tullat mund të tregojë një hije të butë aty ku bashkimi është përzier.

**Sipërfaqet**

- **Sipërfaqe të lira.** Paneli {{ui:Sipërfaqet}} bën kurba NURBS dhe sipërfaqe të pa prerë: kurba përmes pikave, loft, ruled, extrude, revolve, sweep përgjatë një ose dy shinave, sipërfaqe nga një rrjet kurbash, pjesë nga katër skaje, përputhje dhe përzierje. Çdo skaj i përbashkët matet si G0, G1 ose G2 (hapësirë, kënd, kërcim lakueshmërie) mbi sipërfaqet e sakta, dhe një skaj më i keq sesa kërkove shfaqet në panelin Problemet me një rregullim **Përputh**. Vijat zebra dhe ngjyrat e lakueshmërisë vizatohen nga sipërfaqet e sakta. Skedarët STEP dhe IGES dalin dhe hyjnë. Shiko [Sipërfaqe të lira (NURBS)](topic:nurbs-surfaces).

**Vendi dhe dhomat**

- **Një foto skice mbi tokë.** {{ui:Skedar}} › {{ui:Importo një foto skice…}} kthen një foto të telefonit të një skice me dorë në skaje mbi tokë, në shkallën që thua: një grup, me një etiketë për çdo ngjyrë stilolapsi. Fleta gjendet dhe drejtohet në kompjuterin tënd dhe asgjë nuk dërgohet askund. Shiko [Modelo në një plan vendi](topic:site-plan).
- **Mobiliko një dhomë.** Zgjidh një dysheme dhe përdor {{ui:Organizo}} › {{ui:Mobiliko një dhomë…}}. Mobilje dhome gjumi, dhome ndenjeje, sallë ngrënieje, kuzhinë, banjo ose zyre vendosen sipas rregullave, kundër mureve dhe larg dyerve e dritareve, në një grup që mund ta heqësh me një hap. Është një plan parazgjedhur për ta shqyrtuar, jo një projekt. Shiko [Biblioteka fillestare](topic:starter).

**Printimi 3D**

- **Prerje të pjerrëta.** Ndaj për printim mund ta pjerrësojë prerjen deri në 60 gradë, që i jep pjesëve më shumë sipërfaqe ngjitjeje. Lidhësit qëndrojnë drejt me prerjen. Shiko [Ndaj një model për printim](topic:print-split).
- **Kontrolli i printimit te Problemet.** Gjetjet e kontrollit të printimit 3D shfaqen në panelin Problemet me shenja mbi modelin, dhe Riparo i rregullon nga aty. Shiko [Mbajtëse, trashësia e murit, zbrazja dhe riparimi](topic:print-tools).

**Në çdo aplikacion**

- **Gjuhët.** Ndihma dhe aplikacionet vijnë në 54 gjuhë. Dhjetë janë të reja: Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahili dhe Uzbekisht. Gjuhët jo angleze janë përkthime makinerie derisa një folës amtar t'i ketë lexuar, dhe temat e ndihmës mund të mbeten në anglisht.
- **Pajisjet e hyrjes.** Një trackpad, një stilolaps, një miu 3D, një kontrollues lojërash dhe kontrollet MIDI mund t'i drejtojnë aplikacionet, për të gjitha ose për një.
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › Rreshtat e shiritit të veglave vendos Wrap (si më parë), 2 rreshta ose 1 rresht. Një shirit që nuk përshtatet lëviz anash, në vend që të marrë hapësirë nga vizatimi. Wrap mbetet parazgjedhja.
- **Rrjeti i vetive.** Fushat e llambave të ModelCraft përdorin rrjetin e përbashkët: kategori të palosshme, kolona etiketash dhe vlerash, dhe dendësi Compact. Aritmetika e shkruar si `2*450` vazhdon të funksionojë.
- **Problemet.** Paneli Problemet (butoni i paralajmërimit në shiritin e aplikacionit) është i përbashkët për të gjitha aplikacionet. Në ModelCraft mban kontrollin e printimit dhe paralajmërimet e vazhdimësisë së sipërfaqeve.
- **Live.** Një sesion Live TeamWork tregon kush është ku. Shiko [Modelo së bashku me Live TeamWork](topic:work-live).
- **Shtojcat.** Shtojcat mund të shtojnë motorë renderimi, siç u tha më lart.
- **Lidh AI-n tënd.** Kontrata e veglave dhe kontrollet e tetë aplikacioneve kalojnë, me 454 vegla gjithsej. Lidhja me një klik brenda Studio, një lidhës i strehuar për asistentët e shfletuesit, çelësi yt brenda Studio dhe një paketë e botuar nuk janë premtuar ende. Aplikacionet nuk përmbajnë AI të vetat. Shiko [Përdor ModelCraft me asistentë AI](topic:use-with-ai-assistants).

### Të rregulluara në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar, gjë që mund ta prishte skedarin gjatë importit. Tani lexohet saktë, në ModelCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Tabletat në portret.** Lartësia e rezervuar e rrjetës shkon te vizatimi, dhe paraqitja e fletës fillon në 760 piksel gjerësi ose më pak. Fleta e stilit të ModelCraft ka edhe ajo ndryshimin.
- **Gjuha në Studio.** CadCraft Studio dhe versionet e paketuara mund ta ndërrojnë gjuhën gjatë punës; më parë ishin vetëm në anglisht. Kjo nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.

### Ende jo në këtë version

- **Nuk është nënshkruar me kod.** Windows mund të shfaqë SmartScreen: zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, kliko me butonin e djathtë dhe zgjidh {{ui:Hap}}. Versionet e dyqanit janë në pritje, dhe versioni për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- Një program tjetër që vizaton foton pa një shtojcë motori renderimi, kamerat panoramike ose stereo, dhe një foto qielli nga një program tjetër, si dhe shtojca që hap skenën Unreal, nuk janë ende të gatshme. Skedarët shkruhen; shtojca nuk është lëshuar dhe nuk është provuar në Unreal.
- Sipërfaqet e lira: G3 dhe klasa A nuk maten ose nuk pretendohen, dhe prerja dhe solidet vijnë më vonë.
- Foto nga programe të tjera nuk janë pixel për pixel si të yniat: vetëm kamera, dielli, llambat dhe ekspozimi përputhen.
- Rregullimi 0.8.1 për ndërrimin e gjuhës në Studio nuk është testuar në çdo platformë.

Gjithçka tjetër është në [Ende nuk është ndërtuar](topic:not-built-yet). Për versionin e mëparshëm, shiko [Çfarë është e re në 0.7](topic:whats-new-0-7).
