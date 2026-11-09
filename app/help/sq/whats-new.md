---
title: Çfarë është e re në 0.8 dhe 0.8.1
summary: Zgjedhje motori renderimi me skedarë për programe të tjera, sipërfaqe NURBS me formë të lirë me vazhdimësi të matur, një skenë që ia përshkruan asistentit tënd, një material nga një foto, një foto skice mbi terren, dhoma të mobiluara, prerje të pjerrëta për printim 3D dhe kontrolli i printimit në panelin Problemet.
keywords: çfarë është e re, çfarë ka ndryshuar, shënime lëshimi, regjistri i ndryshimeve, ndryshime, 0.8, 0.8.1, versioni, veçori të reja, motor renderimi, motor, hap në, usd, gltf, unreal, motor shtojcë, nurbs, sipërfaqe, loft, sweep, vazhdimësi, g0, g1, g2, zebra, step, iges, përshkruaj skenën, skenë, moti, koha e ditës, stina, asistent, material nga një foto, foto, foto skice, mobilo, mobilim dhome, pjerrët, prerje e pjerrët, ndarje, kontroll printimi, probleme, rrjeti i vetive, dritat, gjuhët, pajisje hyrëse, rreshta të veglave, dwg, live
from: e4989b17
---

Kjo është ajo që ndryshoi në ModelCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Dialogu {{ui:Rendero një foto…}} mund tani t'ia dërgojë skenën një programi tjetër, paneli {{ui:Sipërfaqet}} krijon sipërfaqe të lëmuara me formë të lirë, dhe një asistent që lidh mund të vendosë një skenë të tërë me një fjali.

## Të reja

### Renderimi

- **Një zgjedhje motori.** {{ui:Rendero një foto…}} ka një listë **Motor** mbi **Mënyrë**. Dy motorët tanë, Fast dhe Path tracer, janë parazgjedhja dhe funksionojnë kudo. Hyrjet e tjera e ruajnë skenën si paketë (modelin si skedar USD, plus një skedar cilësimesh me vlerat e sakta të materialeve, dritat që janë të ndezura, diellin, qiellin, ekspozimin dhe kamerën) për ta marrë në një program tjetër. Një foto e vizatuar nga një program tjetër thotë cili program dhe cila version e krijoi. Shiko [Zgjidh cili program vizaton foton](topic:render-engines).
- **Hap në një program tjetër.** Lista Motor mund ta ruajë skenën si skedar USD, skedar glTF (`.glb`) ose dosje projekti Unreal (`.zip`), në shfletues dhe në CadCraft Studio. Në Studio mund të nisë edhe usdview ose programin e kompjuterit për skedarin. Shiko [Hap skenën në një program tjetër](topic:render-open-in).
- **Dërgo te një motor lojërash nga Studio.** Studio e shkruan skenën në një projekt Unreal Engine dhe e mban të përditësuar në çdo dërgim, vetëm në një drejtim. Ndryshimet e tua jetojnë në një shtresë që CadCraft kurrë nuk e shkruan. Shiko [Dërgo skenën te një motor lojërash](topic:render-unreal).
- **Motorë nga shtojcat.** Një shtojcë mund të shtojë një motor te lista. Ai i shkruar në JavaScript vizaton në shfletues dhe në Studio; ai që ekzekuton një program kërkon lejen tënde në Studio. Shiko [Vizato foton me një program tjetër](topic:render-other-program) dhe [Shto një motor renderimi me një shtojcë](topic:render-engine-addons).
- **Përshkruaj skenën.** Thuaji asistentit tënd të lidhur "muzg, shi i lehtë, pemë vjeshte, njerëz në sheshin" dhe ModelCraft e vendos në një hap: dielli lëviz sipas datës dhe orës që hijet ta ndjekin, qielli ndryshon, shfaqen sipërfaqe të lagura, dhe pemët e njerëzit vendosen si objekte reale, në etiketa që mund t'i fshehësh, zhvendosësh ose fshish. Koha e ditës, data ose stina, dhe moti (i kthjellët, i mbuluar, mjegull, shi i lehtë, shi, stuhi) funksionojnë edhe vetë, dhe një kërkesë e mëvonshme e ndryshon të njëjtën skenë. Mjegulla shfaqet në foton me cilësi të lartë te karta grafike; motorët e tjerë tregojnë qiellin, dritën dhe sipërfaqet e lagura. Shiu nuk vizatohet si vija që bien.

### Materialet

- **Një material nga një foto.** Jepi ModelCraft një foto të një sipërfaqeje (mur, dysheme, gur) dhe ai bën një material pllakëzues: ndriçimi në të gjithë foton sheshohet, skajet bëhen të bashkohen, dhe një hartë ngjyrash, një hartë ashpërsie dhe një hartë normale nxirren nga figura. Është përpunim i thjeshtë imazhi i fotos sate, pa model të trajnuar. Ashpërsia është një vlerësim. Një foto e thjeshtë, katrore dhe e drejtpërdrejtë jep pllakën më të mirë; një model i fortë, si tullat, mund të tregojë një hije të butë aty ku bashkimi është përzier.

### Sipërfaqet

- **Sipërfaqe me formë të lirë.** Paneli {{ui:Sipërfaqet}} bën kurba NURBS dhe sipërfaqe pa prerje: kurba që kalojnë nëpër pika, loft, të rregullta, nxjerrje, rrotullim, sweep përgjatë një ose dy shinave, sipërfaqe nga një rrjet kurbash, pjesë sipërfaqeje nga katër skaje, përputhje dhe përzierje. Çdo skaj i përbashkët matet si G0, G1 ose G2 (hapësirë, kënd, kërcim lakimi) mbi sipërfaqet e sakta, dhe një skaj më i keq se sa kërkove shfaqet në panelin Problemet me një rregullim **Përputh**. Vijat zebra dhe ngjyrat e lakimit vizatohen nga sipërfaqet e sakta. Skedarët STEP dhe IGES dalin dhe hyjnë. Shiko [Sipërfaqe me formë të lirë (NURBS)](topic:nurbs-surfaces).

### Terreni dhe dhomat

- **Një foto skice mbi terren.** {{ui:File}} › {{ui:Importo një foto skice…}} e kthen një foto me telefon të një skice dore në vija mbi terren, në shkallën që thua: një grup, me një etiketë për çdo ngjyrë lapsi. Fleta gjendet dhe drejtohet në kompjuterin tënd, dhe asgjë nuk dërgohet askund. Shiko [Modelo mbi planimetri terreni](topic:site-plan).
- **Mobilo një dhomë.** Zgjidh një dysheme dhe përdor {{ui:Organize}} › {{ui:Mobiliko një dhomë…}}. Mobilje dhome, dhome ndenjeje, sallë ngrënieje, kuzhinë, banjo ose zyre vendoset sipas rregullave, pranë mureve dhe larg dyerve e dritareve, në një grup që mund ta heqësh në një hap. Është një plan parazgjedhur për ta shqyrtuar, jo një projekt. Shiko [Biblioteka fillestare](topic:starter).

### Printimi 3D

- **Prerje të pjerrëta.** Ndarja për printim mund t'i pjerrëtojë prerjet deri në 60 gradë, gjë që u jep pjesëve më shumë sipërfaqe ngjitjeje. Lidhësit qëndrojnë drejt me prerjen. Shiko [Ndaj një model për printim](topic:print-split).
- **Kontrolli i printimit te Problemet.** Gjetjet e kontrollit të printimit 3D shfaqen në panelin Problemet, me shenja mbi model, dhe **Riparo** i rregullon nga aty. Shiko [Mbështetëse, trashësia e murit, zbrazja dhe riparimi](topic:print-tools).

### Në çdo aplikacion

- **Gjuhët.** Ndihma dhe aplikacionet vijnë në 54 gjuhë. Dhjetë janë të reja: lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahili dhe uzbekisht. Gjuhët e tjera nga anglishtja janë përkthime makine deri sa t'i lexojë një folës amtar, dhe temat e ndihmës mund të jenë ende në anglisht.
- **Pajisjet hyrëse.** Një trackpad, një stilolaps, një miu 3D, një kontrollues lojërash dhe kontrollet MIDI mund t'i drejtojnë aplikacionet, për të gjitha ose për një.
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › Rreshtat e shiritit të veglave vendos **Mbështjellje** (si më parë), 2 rreshta ose 1 rresht. Një shirit që nuk të përshtatet lëviz anash, në vend që të zërë hapësirë nga vizatimi. Mbështjellja mbetet parazgjedhja.
- **Rrjeti i vetive.** Fushat e dritave të ModelCraft përdorin rrjetin e përbashkët: kategori që palosen, kolona etiketash dhe vlerash, dhe dendësi Kompakte. Llogaritjet e shkruara si `2*450` vazhdojnë të funksionojnë.
- **Problemet.** Paneli Problemet (butoni paralajmërues në shiritin e aplikacionit) është i përbashkët për të gjitha aplikacionet. Në ModelCraft mban kontrollin e printimit dhe paralajmërimet e vazhdimësisë së sipërfaqeve.
- **Live.** Një seancë Live TeamWork tregon kush është ku. Shiko [Modelo bashkë me Live TeamWork](topic:work-live).
- **Shtojcat.** Shtojcat mund të shtojnë motorë renderimi, siç u tha më lart.
- **Lidh AI-në tënde.** Kontrata e veglave dhe kontrollet e tetë aplikacioneve kalojnë, me 454 vegla gjithsej. Lidhja me një klik brenda Studio, një lidhës i strehuar për asistentët e shfletuesit, çelësi yt brenda Studio dhe një paketë e botuar nuk janë premtuar ende. Aplikacionet nuk kanë AI të tyre. Shiko [Përdor ModelCraft me asistentë AI](topic:use-with-ai-assistants).

## Të rregulluara në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar, gjë që mund ta prishte skedarin gjatë importit. Tani lexohet saktë, në ModelCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Tabletat në portret.** Lartësia e rrjetës së lirë shkon te canvas, dhe paraqitja e fletës fillon në 760 piksel gjerësi ose më pak. Fleta e stilit të ModelCraft ka edhe ajo ndryshimin.
- **Gjuha në Studio.** CadCraft Studio dhe edicionet e paketuara mund ta ndërrojnë gjuhën gjatë punës; më parë ishin vetëm në anglisht. Kjo nuk është testuar ende në çdo platformë: na thuaj nëse gjuha nuk ndryshon.

## Nuk është në këtë version ende

- **Nuk është e nënshkruar me kod.** Windows mund të shfaqë SmartScreen: zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, kliko djathtas dhe zgjidh {{ui:Hap}}. Versionet për dyqane janë në pritje, dhe versioni për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- Një program tjetër që vizaton foton pa një shtojcë motori renderimi, kamerat panoramike ose stereo dhe një foto qielli nëpërmjet një programi tjetër, si dhe shtojca që hap skenën Unreal, nuk janë ende aty. Skedarët shkruhen; shtojca nuk është publikuar dhe nuk është ekzekutuar në Unreal.
- Sipërfaqet me formë të lirë: G3 dhe klasa A nuk matin dhe nuk pretendohen; prerja dhe trupat e ngurtë do të vijnë më vonë.
- Fotot nga programe të tjera nuk janë pikël për pikël si të tonat: vetëm kamera, dielli, dritat dhe ekspozimi përputhen.
- Rregullimi 0.8.1 për ndërrimin e gjuhës në Studio nuk është testuar në çdo platformë.

Çdo gjë tjetër është te [Nuk është ndërtuar ende](topic:not-built-yet). Për versionin e mëparshëm, shiko [Çfarë është e re në 0.7](topic:whats-new-0-7).
