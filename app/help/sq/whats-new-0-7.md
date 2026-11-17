---
title: Çfarë ka të re në 0.7 (më herët)
summary: Rrjeta me modifikues, skulptim, UV-të dhe objekte kurbë, gjurmim shtegu në kartën grafike dhe një punëtori renderimi, pamje live në kohë reale me shpërndarje dhe panorama, materiale me nyje, një punëtori animacioni me kocka dhe fizikë, skedarë USD, FBX, STEP dhe .3dm, dhe mjete printimi me një stil Fillestar.
keywords: çfarë ka të re 0.7, version më i hershëm, shënime lëshimi, ndryshime, 0.7, version, veçori të reja, rrjetë, rrjeta, punëtoria e rrjetës, modifikues, nënndarje, mprehje, uv, shpalos, qepje, qepje, kurba, objekte kurbë, nurbs, bezier, skulpto, ri-mesh, ri-topologji, ndaj, llogaritje, gjurmim shtegu, webgpu, punëtoria e renderimit, radha e renderimit, mp4, exr, pastrim zhurmash, qiell fizik, hdri, ies, thellësi fushe, përzierje drite, mjegull, kaustikë, pamja live, kohë reale, ec, shpërndarje, panoramë, tur, shfaqës, hijëzim, nyje, materiale nyjesh, bibliotekë materialesh, materialx, dekale, pikturim teksture, pjekje, animo, redaktori i grafikut, klipe, çelësa formash, drejtues, skelet, kocka, skinning, ik, kufizime, fizikë, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, trupa 3D, mbështetëse, trashësi muri, zbrazje, riparim, fillestar, asistentë, kompjuteri juaj, njësi, portugalisht
from: fa562a09
---

Kjo është ajo që ndryshoi në ModelCraft 0.7, krahasuar me 0.6. ModelCraft tani modelon edhe rrjeta përveç gjeometrisë shtyj/tërhiq, renderon në kartën grafike, dhe ka një punëtori për çdo lloj pune: zgjidhe në listën {{ui:Hapësirë pune}} në të majtë të shiritit të veglave.

## E re

### Rrjetat

- **Rrjetat.** Zgjidh një grup ose komponent dhe kliko {{ui:Shndërro në rrjetë}} te {{ui:Informacioni i entitetit}}: bëhet rrjetë, me sipërfaqe me çfarëdo numri cepash që mund të mbajnë koordinata teksture, normale, ngjyra dhe pesha. {{ui:Shndërro në gjeometri}} e kthen mbrapsht. Zhbërja në një rrjetë mban vetëm atë që ndryshoi çdo hap. Një skedar që mban një rrjetë ka nevojë për ModelCraft 0.7 për t'u hapur. Shih [Rrjetat](topic:meshes).
- **Punëtoria e rrjetës.** Kliko dy herë një rrjetë, ose zgjidh {{ui:Rrjetë}} në listën {{ui:Hapësirë pune}}, për të redaktuar kulmet, skajet dhe sipërfaqet e saj: unaza dhe rrathë, cilësime proporcionale, nxjerrje, futje (inset), pjerrësi, prerje me unazë, thikë, përgjysmim, rrotullim, bashkim, shpërbërje, mbushje, mbushje rrjete, urë dhe rrëshqitje, dhe cilësimet e operacionit të fundit, të ndryshueshme më pas në panel. Nis nga një plan, kub, sferë, torus dhe më shumë. Tastet shtyj/tërhiq dhe tastet e modelimit funksionojnë të dyja. Shih [Redakto një rrjetë në punëtorinë e rrjetës](topic:mesh-edit).
- **Modifikuesit.** Pasqyrë, varg, sipërfaqe nënndarjeje, pjerrësi, ngurtësim, bool, zhvendosje, bashkim pikash (weld), zvogëlim (decimate), zbutje, rrjetë (lattice), deformim me kurbë dhe shrinkwrap ndryshojnë atë që shfaq një rrjetë pa e ndryshuar. Vendosi në stivë, ndiz ose fik secilin për pamjen dhe për renderimet, dhe {{ui:Zbato}} një kur e do përgjithmonë. Shih [Modifikuesit në një rrjetë](topic:modifiers).
- **Nënndarja me mprehje.** {{ui:Brazdë}} në punëtorinë e rrjetës mban skajet e zgjedhura të mprehta nën një sipërfaqe nënndarjeje. Renderimet mund të përdorin më shumë nivele se pamja, dhe në një rrjetë të madhe pamja tregon një nivel më të ulët dhe e thotë këtë. Shih [Sipërfaqja e nënndarjes](topic:modifiers#subdivision-surface).
- **Objekte kurbë.** Kurba Bézier, NURBS dhe me segmente të drejta që krijojnë një tub, një shirit, një konicitet ose një pllakë të mbushur, dhe tekst si kurbë. Redakto pikat e tyre në punëtorinë {{ui:Kurbë}}; {{ui:Në mesh}} kur forma është e saktë. Shih [Objektet kurbë](topic:curves).
- **Punëtoria UV.** Shëno qepjet (ose lëri ModelCraft t'i shënojë te skajet e mprehta), {{ui:Shpalos}} dhe {{ui:Mblidh}}, ose projekto me kuti, cilindër, sferë ose me pamjen. Një redaktor UV pranë pamjes 3D lëviz, kthen dhe zmadhon copat, dhe një shabllon kuadratesh dhe ngjyra shtrirjeje tregojnë rezultatin. Shih [Vendos UV-të e një rrjete](topic:uv).
- **Skulptimi.** Punëtoria {{ui:Skulpto}} ka furça vizatimi, balte, zbutjeje, kapjeje, fryrjeje, {{ui:Brazdë}}, shtypjeje, sheshimi dhe maske, pasqyrim përgjatë X, dhe {{ui:Detaj}} që shton trekëndësha aty ku skulpton. Presioni i një stilolapsi cakton madhësinë dhe fuqinë e furçës. Çdo goditje është një hap zhbërjeje. Shih [Skulpto një rrjetë](topic:sculpt).
- **Ri-mesh dhe ri-topologji.** {{ui:Ri-mesh}} e bën përsëri një rrjetë të tërë me trekëndësha të barabartë, duke mbyllur vrimat dhe duke bashkuar copat që mbivendosen. Për të ndërtuar një rrjetë të pastër mbi një rrjetë të detajuar, zgjidhe nën {{ui:Ri-topologji}}: pikat që zhvendos ulen mbi sipërfaqen e saj. Shih [Ri-mesh](topic:mesh-edit#remesh).

### Vizatimi

- **Ndaj një skaj ose kurbë.** Vegla {{ui:Ndaj}} shënon pritjet ndërsa lëviz përgjatë një skaji dhe ndan me një klikim ose një numër të shkruar; me një skaj, hark ose rreth të përzgjedhur, shkruaj `/5`; {{ui:Informacioni i entitetit}} › {{ui:Ndaj…}} kërkon numrin, për tablet. Një hark ose rreth ndahet me kënde të barabarta në harkun e vërtetë. Shih [Ndaj një skaj ose kurbë në pjesë të barabarta](topic:divide).
- **Llogaritjet në kutinë e vlerës.** Shkruaj `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ose `2*450mm` për çdo gjatësi, dhe `90/2` për një kënd. Një llogaritje që nuk mund të bëhet thotë çfarë nuk shkon dhe ku. Shih [Llogaritjet](topic:value-box#calculations).

### Renderimi

- **Gjurmim shtegu në kartën grafike.** {{ui:Rendero një foto…}} › {{ui:Cilësi e lartë (gjurmim shtegu)}} e ekzekuton gjurmuesin e vet të shtegut të CadCraft-it në kartën grafike ku shfletuesi ka WebGPU; vija nën foto thotë cili motor e bëri. {{ui:Ndalo}} mban foton dhe {{ui:Vazhdo}} vazhdon nga aty. Pa WebGPU, foto gjurmohet me WebGL, si më parë. Shih [Cilësi e lartë](topic:render#high-quality).
- **Renderimi në pamje.** Punëtoria {{ui:Rendero}} e gjurmon vetë pamjen dhe nis përsëri ndërsa rrotullon ose redakton: rendero një {{ui:Zonë}}, kliko për {{ui:Fokusi}}, cakto {{ui:Detaj}}. Ka nevojë për WebGPU. Shih [Renderimi në pamje](topic:render#render-in-the-view).
- **Materiale, drita dhe qiejt.** Renderimet me cilësi të lartë hijëzojnë çdo sipërfaqe me modelin e materialeve OpenPBR (shtresa, leshtë, filma të hollë, xham me ngjyrë, shkëlqim). Me WebGPU ka edhe një {{ui:Qiell fizik}} me {{ui:Mjegull}}, një {{ui:Imazh qielli (HDRI)}}, dhe profile drite IES të prodhuesit për llamba. Shih [Qiejt dhe profilet e dritës](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera si e një fotografie.** Ekspozimi nga f-stop, shuter dhe ISO në çdo mënyrë; me WebGPU edhe thellësi fushe, perspektivë me dy pika, balancë të bardhës, panorama 360° (edhe stereo) dhe harta kubike. Shih [Kamera](topic:render#the-camera).
- **Përfundo foton pas renderimit.** Gradoje ({{ui:ACES filmik}}, {{ui:AgX}}, {{ui:Filmik}} ose {{ui:Standard}}, kontrast, bloom, shkëlqim, vinjetë, një tabelë ngjyrash `.cube`), përziej qiellin, diellin dhe çdo grup llambash, dhe shiko elementët e renderimit një nga një, të gjitha pa renderuar përsëri. Kokrrizat që mbeten pastrohen nga një zhurmëheqës në kompjuterin tënd. Shih [Përfundo foton](topic:render#finish-the-picture) dhe [Përzieni dritat pas renderimit](topic:render#mix-the-lights-after-the-render).
- **Më shumë mënyra për të ruajtur një render.** PNG 16-bit, një EXR me shumë shtresa me çdo element renderimi dhe grup drite, dhe një skedar renderimi (`.ccrender`) që hapet përsëri me përzierjen dhe gradimin e tij. Shih [Ruaj foton](topic:render#save-the-picture).
- **Mjegull, tym dhe kaustikë.** Mjegull dhe e lehtë e ndriçuar nga dielli dhe llambat, me rreze drite; një kolonë tymi ose një re; kaustikë nën xham dhe pasqyra; mostrim adaptiv që ndalon te pikselët që janë tashmë të pastër. Vetëm në kartën grafike. Shih [Mjegulla, zhurma dhe kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Radha e renderimit dhe MP4.** Shto foto me cilësi të lartë dhe animacione të tëra te {{ui:Radha e renderimit}}; ato renderohen njëra pas tjetrës dhe radha mbijeton mbylljen e faqes. Ka nevojë për WebGPU. Videot mund të ruhen edhe si MP4 aty ku shfletuesi mund ta shkruajë. Shih [Radha e renderimit](topic:render#the-render-queue) dhe [Renderoni videon](topic:animation#render-the-video).

### Pamja live dhe prezantimet

- **Pamja live.** {{ui:Eksporto}} › {{ui:Pamja e drejtpërdrejtë}} shfaq modelin në një pamje në kohë reale pranë pamjes, duke ndjekur çdo redaktim dhe kamerën: hijet e diellit, materialet, llambat dhe drita e reflektuar nga muret. {{ui:Ec}} nëpër të, tërhiq {{ui:Ora}} dhe {{ui:Muaji}} për të lëvizur diellin, ose zhvendose te një {{ui:Dritare e re}}. Përdor WebGPU aty ku shfletuesi e ka, përndryshe WebGL 2. Shih [Pamja live](topic:live-view).
- **Shpërndarja.** Shpërndaj bar, lule, gurë, pemë dhe njerëz mbi sipërfaqe ose me një furçë, nga shtatë artikuj të rinj ambienti dhe pjesa tjetër e bibliotekës; grupet ruhen në skedar. Shih [Shpërndaj bimë, gurë dhe njerëz](topic:live-view#scatter-plants-rocks-and-people).
- **Ndaj.** Një panoramë 360°, një tur panorame me shigjeta midis pikave, një shfaqës i pavarur (një faqe interneti që hapet pa lidhje dhe nuk ngarkon asgjë nga interneti), dhe një video e rrugës së kamerës, të gjitha në pamjen në kohë reale. Shih [Ndaj](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR me pamjen në kohë reale.** {{ui:Rishiko në VR}} shfaq modelin me materialet, qiellin, hijen e diellit, llambat, artikujt e shpërndarë dhe dritën e reflektuar. Shih [Si duket](topic:vr-review#what-it-looks-like).

### Materialet

- **Materiale të bëra me nyje.** Punëtoria {{ui:Hijëzim}} ndërton materialet e vetë skedarit si grafe nyjesh: foto, zhurmë dhe shabllone kuadratesh, qeliza Voronoi, valë, tulla, pllaka, dru, mermer, gradientë, papastërti dhe konsumim skaji, punë me ngjyra, matematikë, harta bump dhe normal, në materialin e plotë OpenPBR. Pamja tregon çdo ndryshim menjëherë. Shih [Bëj materiale me nyje](topic:shading).
- **Një bibliotekë materialesh dhe grupet e tua të teksturave.** Paneli {{ui:Hijëzim}} liston materialet e Bibliotekës: gjashtëmbëdhjetë grupe teksturash CC0, secila me kredi. Kliko një për ta përdorur, ose tërhiqe mbi një sipërfaqe. {{ui:Imazhe ose një zip…}} ose {{ui:Një dosje…}} krijon një material nga hartat e tua, të gjetura sipas emrave të skedarëve. Shih [Materiale nga biblioteka](topic:shading#materials-from-the-library).
- **MaterialX hyrës dhe dalës.** Eksporto një material si MaterialX (OpenPBR Surface ose Standard Surface, teksturat si PNG), dhe importo skedarë MaterialX me fotot e tyre. Shih [MaterialX](topic:shading#materialx).
- **Dekale dhe pikturim teksture.** Vendos një foto mbi një sipërfaqe si dekal me një material të vetin, dhe pikturo mbi foton e një materiali me një furçë të rrumbullakët. Shih [Dekalet](topic:shading#decals) dhe [Pikturo mbi teksturë](topic:shading#paint-on-the-texture).
- **Pjekja e teksturave.** Pjek okluzion ambiental, kurbaturë, dritë dhe normalet e një objekti të detajuar në foto përgjatë UV-ve të një rrjete, në bërthamat e procesorit të kompjuterit. Shih [Pjek tekstura](topic:shading#bake-textures).

### Animacioni

- **Punëtoria Animo.** Vendos çelësa për vendin, rrotullimin dhe madhësinë e një objekti, ndriçimin, shpërndarjen dhe ngjyrën e çdo llambe, dhe këndin e lenteve, direkt në panel. Shtrati kohor merr një pamje {{ui:Kurba}} (dorezat Bézier, përsëritje) dhe një pamje {{ui:Klipet}} që ruan çelësat si veprime për t'i vendosur përsëri dhe për t'i përzier; çelësat në disa rreshta mund të zhvendosen, zgjaten, kopjohen dhe ngjiten. Shih [Animo çdo veti](topic:animate).
- **Çelësat e formave dhe drejtuesit.** Një rrjetë mban forma të tjera të vetes, të përziera nga rrëshqitës që mund të ruhen me çelësa, ose të vendosura nga vlera të tjera me një shprehje të vogël. Shih [Çelësat e formave](topic:animate#shape-keys-morphs) dhe [Drejtuesit](topic:animate#drivers).
- **Skeletet.** Vendos kocka në një rrjetë, lëre {{ui:Peshat automatikë}} t'i ndajnë pikat midis tyre ose pikturo peshat, dhe pozo dhe çelëso kockat; skinning linear ose dual quaternion. Shih [Skeletet](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK dhe kufizime.** Arritje (IK) me një pol, shiko, kopjo transformimet, kufij, fëmijë i dhe ndiq shtegun, për kocka dhe objekte. Shih [IK dhe kufizimet](topic:animate#ik-and-constraints).
- **Fizika.** Grupet dhe komponentët bien, grumbullohen dhe përplasen si kuti ose topa, dhe {{ui:Fikso fizikën}} e mban rezultatin si çelësa. Shih [Fizika](topic:animate#physics-drop-stack-and-collide).

### Skedarët

- **USD.** {{ui:Ruaj si}} ({{key:Mod+Shift+S}}) ruan modelin si `.usda`, `.usdc` ose `.usdz`, dhe një skedar USD që ModelCraft e ruajti hapet përsëri pa humbur asgjë. USD nga programe të tjera hapet ose importohet si rrjeta, grupe, komponentë, llamba dhe kamera. {{ui:Ruaj}} ende shkruan `.modelcraft`. Shih [Ruaj, hap dhe eksporto USD](topic:usd).
- **glTF, i plotë.** Skedarët glTF hyjnë si rrjeta të redaktueshme me normalet, UV-të, ngjyrat e kulmeve dhe teksturat e tyre, nyjet si grupe, dritat si llamba dhe kamerat si skena, duke përfshirë skedarët Draco dhe meshopt; një `.gltf` hapet kur lëshohet bashkë me skedarët e tij. Eksporti shkruan rrjeta, tekstura, llamba dhe kamera. Shih [glTF](topic:formats#gltf-glb-gltf).
- **Importet FBX, PLY, STL dhe Alembic.** FBX 2011 e më i ri (rrjeta, grupe UV, materiale, tekstura të integruara, drita, kamera), PLY dhe STL me ngjyrat e tyre, dhe cache Alembic në mostrën e parë. OBJ hyn me `.mtl` dhe fotot e tij kur i lëshon bashkë. Shih [Formatet e skedarëve në detaje](topic:formats).
- **Eksporte të tjera.** PLY me ngjyra, STL me ngjyrat e sipërfaqeve të lyera, dhe OBJ me teksturat e tij si një zip. Shih [Formatet e skedarëve në detaje](topic:formats).
- **Skedarë STEP.** {{ui:Importo}} lexon pjesët dhe montimet STEP (AP203, AP214, AP242) si rrjeta të mbyllura në madhësinë e tyre të vërtetë, çdo pjesë aty ku skedari e vendos. Shih [STEP](topic:formats#step-step-stp).
- **Skedarë .3dm.** {{ui:Importo}} lexon modelet `.3dm`: rrjeta, polisipërfaqe dhe nxjerrje (nga rrjetat e ruajtura në skedar, përndryshe të ndara në trekëndësha nga ModelCraft), kurba si skaje, blloqe si komponentë dhe shtresa si etiketa. Shih [Importo një model .3dm](topic:import-3dm-files).
- **Trupa 3D nga DWG dhe DXF.** Importimi i një vizatimi tani sjell edhe trupat, rajonet dhe trupat 3D të tij, secili si grup i veçantë, dhe ato të mbyllura si trupa. Shih [Modelo në një plan vendi](topic:site-plan#what-comes-in).

### Printimi 3D

- **Mjete printimi.** {{ui:Kontrollo për printim 3D (STL ose 3MF)…}} › **Mjete printimi** ka një {{ui:Shfaq paraprakisht mbështetëset}} (konsumi, kolona ose mbështetëse peme, sa material përafërsisht), {{ui:Trashësia e murit}} (muret shumë të holla për t'u printuar, të listuara me {{ui:Shfaq}}), {{ui:Zbrazje}} (muret me trashësinë që jep, me vrima kulloje) dhe {{ui:Riparo}} (çdo rregullim i listuar; pjesët që mbivendosen bashkohen vetëm kur kërkon ti). Zbrazja dhe Riparimi japin një grup ku sipërfaqet e sheshta janë sipërfaqe të vetme, ose një rrjetë kur rezultati nuk mbyllet ose ka shumë sipërfaqe; rreshti i statusit thotë cilën. Shih [Mbështetëse, trashësi muri, zbrazje dhe riparim](topic:print-tools).
- **Stili Fillestar.** {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Menutë, tastet dhe miu}} › {{ui:Fillestar}}: butona të mëdhenj për të hedhur forma dhe vrima, zhvendos, rreshto dhe {{ui:Grup}} që vrimat të presin, pastaj kontrollo modelin për printim. Shih [Stili Fillestar](topic:beginner).

### Asistentët dhe kompjuteri juaj

- **Më shumë për asistentët AI.** Një asistent tani mund të listojë sipërfaqe dhe materiale, shtyj/tërhiq, lyej, bëj grupe, shton dhe shfaq skena, shton rrjeta, redakton stiva modifikuesish, eksporton USD, renderon një foto dhe mbush radhën e renderimit. Shih [Përdor ModelCraft me një asistent AI](topic:use-with-ai-assistants).
- **Kompjuteri juaj.** {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Renderimi}} › {{ui:Kompjuteri juaj}} shfaq grafikën, bërthamat e procesorit dhe memorien që ky shfletues lejon aplikacionin t'i përdorë, dhe nivelin që cakton ku nis pamja live. Shih [Me çfarë renderon kompjuteri yt](topic:your-machine).

## E rregulluar

- {{ui:Solide}} › {{ui:Bashkim}}, {{ui:Zbritje}} dhe {{ui:Kryqëzim}} mund të kthenin një grup që nuk ishte i mbyllur, në çdo madhësi. Tani mbyllen.
- {{ui:Solide}} › {{ui:Zbritje}} ishte e zbehur kur s'kishte asgjë të përzgjedhur, edhe pse zgjedh dy pjesët e tij njëra pas tjetrës pasi e zgjedh.
- Brenda shtratit kohor të animacionit, tastet e shkruara nuk shkonin askund, as {{key:Mod+S}}. {{key:Mod+Z}} dhe {{key:Mod+Y}} aty janë {{ui:Zhbëj}} dhe {{ui:Ribëj}} të vetë shtratit; tastet e tjera {{key:Mod}} arrijnë te aplikacioni.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketës amerikane është njësi e vetë). Çaktivizo njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vendos yll një dhe puna e re nis me të. Një skedar gjithmonë mban njësinë e vet. Në ModelCraft lista e njësive pranë kutisë së vlerës ndjek ndërrimet (njësia e vetë modelit mbetet gjithmonë aty), ylli cakton njësinë e një modeli të ri (kur ModelCraft e ka atë njësi), dhe një gjatësi e shkruar me shenjën e çdo njësie lexohet në atë njësi. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një shtresë më e dendur dhe paneli që zhduken.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} vendos më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta vendosur ose lirë, lësho mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fikse për ta rrëshqitur drejt skajit, ose fshih dhe kthe nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogjet lëvizin.** Tërhiqe një dialog nga shiriti i titullit jashtë rrugës së vizatimit; kthehet atje ku e le. Kliko dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Lëviz një dialog](common:arrange-panels#move-a-dialog).
- **Recetat për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (pastro një vizatim, plano një grup, kontrollo vizatime, bëj pyetje modeli, mblidh një llogaritje sasish, provo një variant pjese…), secila me mjetet që thërret dhe lejet që kërkon, dhe secila e rifutur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Recetat për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si drafte që nuk i ka lexuar ende një folës amtar. Tekstet e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse një kontroll përditësimi dështoi (nuk ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "U krye", dhe ndalon kartën "Çfarë ka të re" që ke mbyllur të kthehet derisa të ketë një version më të ri.

## Jo ende në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store u zhvendosën në 0.8, sepse validimi i certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari te getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në një Mac, herën e parë, kliko me të djathtën mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Këndi dhe pjerrësia në listat e {{ui:Njësitë}} ruhen, por asnjë kuti nuk i lexon ende.
- Renderimi në kartën grafike (WebGPU) është testuar këtu vetëm me një zëvendësues softuerik, jo ende në karta grafike reale, kështu që rendero diçka të vogël në kompjuterin tënd më parë. E njëjta gjë vlen për pamjen live, dhe VR është provuar vetëm me një emulator kufjeje.
- Pa WebGPU nuk ka punëtori renderimi as radhë renderimi, dhe fotot me cilësi të lartë nuk kanë thellësi fushe, qiell fizik, imazh qielli, mjegull, tym, kaustikë ose përzierje drite.
- {{ui:Rendero një foto…}} nuk vizaton ende artikujt e shpërndarë; ata shfaqen në pamjen live, panoramat, shfaqësin dhe videon e saj.
- Llambat animohen në pamje, por një video e renderuar përdor llambat ashtu si janë kur nis.
- Kockat dhe animacioni nuk lexohen ose shkruhen ende në skedarët glTF, FBX ose USD (modelet me skelet hyjnë në pozicionin e pushimit, me peshat e tyre), dhe materialet glTF dhe FBX përtej ngjyrës bazë ose teksturës nuk ruhen ende.
- Ngjyrat e STEP dhe emrat e pjesëve të montimit nuk lexohen ende. Importimi `.3dm` është testuar me skedarë të shkruar nga veglat e formatit, jo ende me skedarë nga vetë programi i modelimit; objektet SubD, teksti dhe përmasat lihen jashtë.
- Biblioteka e bimëve nga CivilCraft është në ModelCraft, por vendosja e bimëve prej saj nuk është ndërtuar ende.
- Pikturimi i një teksture mbi sipërfaqet shtyj/tërhiq përsëritet me pllakën e materialit; për të pikturuar vetëm një sipërfaqe, kthe atë në rrjetë dhe shpalose.

Gjithçka tjetër është te [Jo ende e ndërtuar](topic:not-built-yet).
