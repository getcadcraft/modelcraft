---
title: Çfarë është e re në 0.7
summary: Rrjeta me modifikues, skulptim, UV dhe objekte kurbash, gjurmim shtegu në kartën grafike dhe një hapësirë Renderimi, pamje e drejtpërdrejtë me shpërndarje dhe panorama, materiale me nyje, një hapësirë Animo me kocka dhe fizikë, skedarë USD, FBX, STEP dhe .3dm, dhe mjete printimi me stilin Fillestar.
keywords: çfarë është e re, shënime versioni, regjistër ndryshimesh, ndryshime, 0.7, version, veçori të reja, rrjetë, rrjeta, hapësira e rrjetës, modifikues, nënndarje, brazdë, uv, shpalosje, cepa, kurba, objekte kurbash, nurbs, bezier, skulptim, ri-mesh, ri-topologji, ndarje, llogaritje, gjurmim shtegu, webgpu, hapësira e renderimit, radha e renderimit, mp4, exr, pastrim zhurme, qiell fizik, hdri, ies, thellësi fushe, përzierje drite, mjegull, kaustika, pamja e drejtpërdrejtë, në kohë reale, ec, shpërndarje, panoramë, tur, shfaqës, hijëzim, nyje, materiale me nyje, bibliotekë materialesh, materialx, decals, pikturim teksture, pjekje, animo, redaktuesi i grafikut, klipet, çelësat e formës, drejtues, skelet, kocka, skinning, ik, kufizime, fizikë, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, solide 3d, mbështetëse, trashësia e murit, zbrazje, riparim, fillestar, asistentë, kompjuteri juaj, njësi, portugalisht
from: b9fc43e2
---

Ky është ndryshimi i ModelCraft 0.7, krahasuar me 0.6. ModelCraft tani modelon rrjeta si dhe gjeometri me shtyj/tërhiq, renderon në kartën grafike dhe ka një hapësirë pune për çdo lloj pune: zgjidhe nga lista {{ui:Hapësirë pune}} në të majtë të shiritit të veglave.

## Të reja

### Rrjetat

- **Rrjeta.** Zgjidh një grup ose komponent dhe kliko {{ui:Shndërro në rrjetë}} te {{ui:Informacioni i entitetit}}: bëhet rrjetë, me faqe me çfarëdo numri qoshesh që mund të mbajnë koordinata teksture, normale, ngjyra dhe pesha. {{ui:Shndërro në gjeometri}} e kthen përsëri. Zhbërja në një rrjetë mban vetëm atë që ndryshoi çdo hap. Një skedar që mban një rrjetë ka nevojë për ModelCraft 0.7 për t'u hapur. Shih [Rrjetat](topic:meshes).
- **Hapësira Rrjetë.** Kliko dy herë një rrjetë, ose zgjidh {{ui:Rrjetë}} te lista {{ui:Hapësirë pune}}, për të redaktuar kulmet, skajet dhe faqet: unaza dhe rrathë, redaktim proporcional, nxjerrje, shtrirje (inset), skajim, prerje unaze, thikë, ndarje (bisect), rrotullim, bashkim, shpërbërje, mbushje, mbushje rrjete, urë dhe rrëshqitje, dhe cilësimet e operacionit të fundit të ndryshuara më pas në panel. Nis nga një plan, kub, sferë, torus e të tjera. Tastet shtyj/tërhiq dhe tastet e modelimit funksionojnë të dyja. Shih [Redakto një rrjetë në hapësirën Rrjetë](topic:mesh-edit).
- **Modifikues.** Pasqyrë, grup përsëritjeje, sipërfaqe nënndarjeje, skajim, ngurtësim (solidify), boolean, zhvendosje (displace), bashkim (weld), zvogëlim (decimate), zbutje, rrjetë rrjetëzore (lattice), deformim kurbe dhe mbështjellje (shrinkwrap) ndryshojnë atë që shfaq një rrjetë pa e ndryshuar vetë. Vendosi në stivë, ndiz ose fik secilin për pamjen dhe për renderimet, dhe kliko {{ui:Zbato}} për një kur ta duash përgjithmonë. Shih [Modifikuesit në një rrjetë](topic:modifiers).
- **Nënndarje me brazda.** {{ui:Brazdë}} në hapësirën Rrjetë mban skajet e zgjedhura të mprehta nën një sipërfaqe nënndarjeje. Renderimet mund të përdorin më shumë nivele sesa pamja, dhe në një rrjetë të madhe pamja shfaq një nivel më të ulët dhe e thotë këtë. Shih [Sipërfaqja e nënndarjes](topic:modifiers#subdivision-surface).
- **Objekte kurbash.** Kurba Bézier, NURBS dhe me segmente drejt, që bëjnë një tub, një brez, një kon ose një pllakë të mbushur, dhe tekst si kurbë. Redakto pikat e tyre në hapësirën {{ui:Kurbë}}; {{ui:Në mesh}} kur forma është e saktë. Shih [Objektet kurbash](topic:curves).
- **Hapësira UV.** Shëno shpalosjet (ose lëre ModelCraft t'i shënojë te skajet e mprehta), {{ui:Shpalos}} dhe {{ui:Mblidh}}, ose projekto sipas kutisë, cilindrit, sferës ose pamjes. Një redaktues UV pranë pamjes 3D lëviz, kthen dhe shkallëzon copat, dhe një model shahu dhe ngjyrat e shtrirjes tregojnë rezultatin. Shih [Vendos UV-të e një rrjete](topic:uv).
- **Skulptimi.** Hapësira {{ui:Skulpto}} ka furça vizatimi, argjile, zbutjeje, kapjeje, fryrjeje, brazde, shtrëngimi, sheshimi dhe maske, pasqyrim përgjatë X, dhe {{ui:Detaj}} që shton trekëndësha ku skulpton. Presioni i një stilolapsi cakton madhësinë dhe fuqinë e furçës. Çdo goditje është një hap zhbërjeje. Shih [Skulpto një rrjetë](topic:sculpt).
- **Ri-mesh dhe ri-topologji.** {{ui:Ri-mesh}} e bën përsëri një rrjetë të tërë si trekëndësha të barabartë, duke mbyllur vrimat dhe duke bashkuar copat që mbivendosen. Për të ndërtuar një rrjetë të pastër mbi një të detajuar, zgjidhe te {{ui:Ri-topologji}}: pikat që zhvendos ulen mbi sipërfaqen e saj. Shih [Ri-mesh](topic:mesh-edit#remesh).

### Vizatimi

- **Ndaj një skaj ose kurbë.** Veglës {{ui:Ndaj}} i shënon pritat ndërsa lëviz përgjatë një skaji, dhe ndan me një klikim ose një numër të shkruar; me një skaj, hark ose rreth të përzgjedhur, shkruaj `/5`; {{ui:Informacioni i entitetit}} › {{ui:Ndaj…}} pyet për numrin, për tabletët. Një hark ose rreth ndahet me kënde të barabarta mbi harkun e vërtetë. Shih [Ndaj një skaj ose kurbë në pjesë të barabarta](topic:divide).
- **Llogaritje në kutinë e vlerave.** Shkruaj `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ose `2*450mm` për çfarëdo gjatësie, dhe `90/2` për një kënd. Një llogaritje që nuk mund të bëhet thotë çfarë është e gabuar dhe ku. Shih [Llogaritjet](topic:value-box#calculations).

### Renderimi

- **Gjurmim shtegu në kartën grafike.** {{ui:Rendero një foto…}} › {{ui:Cilësi e lartë (gjurmim shtegu)}} e nxjerr me gjurmuesin e shtegut të CadCraft në kartën grafike aty ku shfletuesi ka WebGPU; rreshti nën foto thotë cili motor e bëri. {{ui:Ndalo}} e mban foton dhe {{ui:Vazhdo}} vazhdon nga aty. Pa WebGPU, foto gjurmohet me WebGL, si më parë. Shih [Cilësi e lartë](topic:render#high-quality).
- **Renderim në pamje.** Hapësira {{ui:Rendero}} gjurmon vetë pamjen dhe nis përsëri ndërsa orbiton ose redakton: rendero një {{ui:Zona}}, kliko për të {{ui:Fokusi}}, cakto {{ui:Detaj}}. Ka nevojë për WebGPU. Shih [Renderim në pamje](topic:render#render-in-the-view).
- **Materiale, drita dhe qiej.** Fotot me cilësi të lartë hijëzojnë çdo sipërfaqe me modelin e materialit OpenPBR (shtresa, push, filma të hollë, qelq me ngjyrë, shkëlqim). Me WebGPU ka edhe {{ui:Qiell fizik}} me {{ui:Mjegull}}, një {{ui:Imazh qielli (HDRI)}}, dhe profile drite IES të prodhuesit për llamba. Shih [Qiejt dhe profilet e dritës](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamerë si ajo e një fotografie.** Ekspozimi nga f-stop, shpejtësia e obturatorit dhe ISO në çdo mënyrë; me WebGPU edhe thellësi fushe, perspektivë me dy pika, balancë të bardhës, panorama 360° (edhe stereo) dhe harta kubike. Shih [Kamera](topic:render#the-camera).
- **Përfundimi i fotos pas renderimit.** Gradoje ({{ui:ACES filmik}}, {{ui:AgX}}, {{ui:Filmik}} ose {{ui:Standard}}, kontrast, shkëlqim, qelqëzim, vinjetë, një tabelë ngjyrash `.cube`), përziej qiellin, diellin dhe çdo grup llambash, dhe shiko elementët e renderimit një nga një, gjithçka pa rirenderuar. Kokrrizat që mbeten pastrohen nga një pastrues zhurme në kompjuterin tënd. Shih [Përfundimi i fotos](topic:render#finish-the-picture) dhe [Përzierja e dritave pas renderimit](topic:render#mix-the-lights-after-the-render).
- **Më shumë mënyra për ruajtjen e renderimit.** PNG 16-bit, një EXR me shumë shtresa me çdo element renderimi dhe grup drite, dhe një skedar renderimi (`.ccrender`) që hapet përsëri me përzierjen dhe gradimin e tij. Shih [Ruaj foton](topic:render#save-the-picture).
- **Mjegull, tym dhe kaustikë.** Mjegull dhe opacitet të ndriçuara nga dielli dhe llambat, me rreze drite; një kolonë tymi ose një re; kaustikë nën qelq dhe pasqyra; mostrim adaptiv që ndalon te pikselët që janë tashmë të pastër. Vetëm në kartën grafike. Shih [Mjegulla, tymi, zhurma dhe kaustika](topic:render#fog-smoke-noise-and-caustics).
- **Radha e renderimit dhe MP4.** Shto foto me cilësi të lartë dhe animacione të tëra te {{ui:Radha e renderimit}}; renderohen njëra pas tjetrës dhe radha mbijeton mbylljen e faqes. Ka nevojë për WebGPU. Videot mund të ruhen edhe si MP4 aty ku shfletuesi mund ta shkruajë. Shih [Radha e renderimit](topic:render#the-render-queue) dhe [Rendero videon](topic:animation#render-the-video).

### Pamja e drejtpërdrejtë dhe prezantimet

- **Pamja e drejtpërdrejtë.** {{ui:Eksporto}} › {{ui:Pamja e drejtpërdrejtë}} shfaq modelin në një pamje në kohë reale pranë pamjes, duke ndjekur çdo redaktim dhe kamerën: hije dielli, materiale, llamba dhe dritë e reflektuar nga muret. {{ui:Ec}} nëpër të, tërhiq {{ui:Ora}} dhe {{ui:Muaji}} për të lëvizur diellin, ose zhvendose te një {{ui:Dritare e re}}. Përdor WebGPU aty ku shfletuesi e ka, përndryshe WebGL 2. Shih [Pamja e drejtpërdrejtë](topic:live-view).
- **Shpërndarje.** Shpërndaj bar, lule, shkëmbinj, pemë dhe njerëz mbi sipërfaqe ose me furçë, nga shtatë artikuj të rinj shoqërues dhe pjesa tjetër e bibliotekës; grupet ruhen në skedar. Shih [Shpërndaj bimë, shkëmbinj dhe njerëz](topic:live-view#scatter-plants-rocks-and-people).
- **Ndarja.** Një panoramë 360°, një tur panoramik me shigjeta midis pikave, një shfaqës i pavarur (një faqe uebi që hapet jashtë linje dhe nuk ngarkon asgjë nga interneti) dhe një video e rrugës së kamerës, të gjitha në pamjen në kohë reale. Shih [Ndarja](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR në pamjen në kohë reale.** {{ui:Rishiko në VR}} shfaq modelin me materialet, qiellin, hijen e diellit, llambat, artikujt e shpërndarë dhe dritën e reflektuar. Shih [Si duket](topic:vr-review#what-it-looks-like).

### Materialet

- **Materiale të bëra me nyje.** Hapësira {{ui:Hijëzim}} ndërton materialet e vetë skedarit si grafe nyjesh: foto, zhurmë dhe shahe, diagrame Voronoi, valë, tulla, pllaka, dru, mermer, gradientë, papastërti dhe konsumim i skajeve, punë me ngjyra, matematikë, harta bump dhe normale, në materialin e plotë OpenPBR. Pamja tregon çdo ndryshim menjëherë. Shih [Bëj materiale me nyje](topic:shading).
- **Bibliotekë materialesh dhe grupet e teksturave të tua.** Paneli i Hijëzimit liston materialet e {{ui:Bibliotekës}}: gjashtëmbëdhjetë grupe teksturash CC0, secila me kredit. Kliko një për ta përdorur, ose tërhiqe mbi një faqe. {{ui:Imazhe ose një zip…}} ose {{ui:Një dosje…}} bën një material nga hartat e tua, të gjetura sipas emrave të skedarëve. Shih [Materialet nga biblioteka](topic:shading#materials-from-the-library).
- **MaterialX hyn dhe del.** Eksporto një material si MaterialX (OpenPBR Surface ose Standard Surface, tekstura si PNG), dhe importo skedarë MaterialX me imazhet e tyre. Shih [MaterialX](topic:shading#materialx).
- **Decals dhe pikturim teksture.** Vendos një foto mbi një sipërfaqe si decal me material të vetin, dhe pikturo mbi foton e një materiali me furçë të rrumbullët. Shih [Decals](topic:shading#decals) dhe [Piktuo mbi teksturën](topic:shading#paint-on-the-texture).
- **Pjekja e teksturave.** Pjek okluzionin e ambientit, lakueshmërinë, dritën dhe normalet e një objekti të detajuar në foto përgjatë UV-ve të një rrjete, në bërthamat e procesorit të kompjuterit. Shih [Pjek tekstura](topic:shading#bake-textures).

### Animacioni

- **Hapësira Animo.** Vendos çelësa për vendin, rrotullimin dhe madhësinë e një objekti, ndriçimin, shpërndarjen dhe ngjyrën e çdo llambe, dhe këndin e lenteve, drejtpërdrejt në panel. Vijës kohore i shtohet një pamje {{ui:Kurba}} (dorëza Bézier, përsëritje) dhe një pamje {{ui:Klipet}} që i ruan çelësat si veprime për t'i vendosur përsëri dhe për t'i përzier; çelësat në disa rreshta mund të zhvendosen, zgjaten, kopjohen dhe ngjiten. Shih [Anima çdo veti](topic:animate).
- **Çelësat e formës dhe drejtuesit.** Një rrjetë mban forma të tjera të vetes, të përziera nga rrëshqitës që mund të vendosen si çelës, ose të caktuara nga vlera të tjera me një shprehje të vogël. Shih [Çelësat e formës](topic:animate#shape-keys-morphs) dhe [Drejtuesit](topic:animate#drivers).
- **Skelete.** Vendos kocka në një rrjetë, lëre {{ui:Peshat automatikë}} t'i ndajnë pikat mes tyre ose pikturoji peshat, dhe pozicionoji dhe vendosi kockat si çelës; skinning linear ose me kuaternion dual. Shih [Skeletet](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK dhe kufizime.** Arritja (IK) me një pol, shikimi drejt, kopjimi i transformimeve, kufijtë, fëmija i dhe ndjekja e rrugës, për kocka dhe objekte. Shih [IK dhe kufizimet](topic:animate#ik-and-constraints).
- **Fizika.** Grupet dhe komponentët bien, grumbullohen dhe përplasen si kuti ose topa, dhe {{ui:Fikso fizikën}} e mban rezultatin si çelësa. Shih [Fizika](topic:animate#physics-drop-stack-and-collide).

### Skedarët

- **USD.** {{ui:Ruaj si}} ({{key:Mod+Shift+S}}) ruan modelin si `.usda`, `.usdc` ose `.usdz`, dhe një skedar USD që ModelCraft e ruajti hapet përsëri pa humbje. USD nga programe të tjera hapet ose importohet si rrjeta, grupe, komponentë, llamba dhe kamera. {{ui:Ruaj}} ende shkruan `.modelcraft`. Shih [Ruaj, hap dhe eksporto USD](topic:usd).
- **glTF i plotë.** Skedarët glTF hyjnë si rrjeta të redaktueshme me normalet, UV-të, ngjyrat e kulmeve dhe teksturat e tyre, nyjet si grupe, dritat si llamba dhe kamerat si skena; skedarët Draco dhe meshopt përfshihen; një `.gltf` hapet kur lëshohet bashkë me skedarët e tij. Eksporti shkruan rrjeta, tekstura, llamba dhe kamera. Shih [glTF](topic:formats#gltf-glb-gltf).
- **Importet FBX, PLY, STL dhe Alembic.** FBX 2011 e më të rejat (rrjeta, grupe UV, materiale, tekstura të integruara, dritë, kamera), PLY dhe STL me ngjyrat e tyre, dhe memorie Alembic në kornizën e parë. OBJ hyn me skedarin `.mtl` dhe imazhet e tij kur i lëshon bashkë. Shih [Formatet e skedarëve në detaje](topic:formats).
- **Më shumë eksporte.** PLY me ngjyra, STL me ngjyrat e sipërfaqeve të lyera, dhe OBJ me teksturat e tij si një zip. Shih [Formatet e skedarëve në detaje](topic:formats).
- **Skedarët STEP.** {{ui:Importo}} lexon pjesë dhe montime STEP (AP203, AP214, AP242) si rrjeta të mbyllura në madhësinë e tyre reale, çdo pjesë aty ku skedari e vendos. Shih [STEP](topic:formats#step-step-stp).
- **Skedarët .3dm.** {{ui:Importo}} lexon modele `.3dm`: rrjeta, poliseciona dhe zgjatime (nga rrjetat e ruajtura në skedar, përndryshe të përafruara nga ModelCraft), kurba si skaje, blloqe si komponentë dhe shtresa si etiketa. Shih [Sill një model .3dm](topic:import-3dm-files).
- **Lëndë të ngurta 3D nga DWG dhe DXF.** Importimi i një vizatimi tani sjell edhe lëndët e tij 3D, zonat dhe trupat, secila si grup i vetë, ato të mbyllura si solide. Shih [Modelo mbi një plan lokacioni](topic:site-plan#what-comes-in).

### Printimi 3D

- **Mjetet e printimit.** {{ui:Kontrollo për printim 3D (STL ose 3MF)…}} › **Mjetet e printimit** ka një {{ui:Shfaq paraprakisht mbështetëset}} (konsumi i përafërt i materialit, me mbivendosje, kolona ose mbështetëse peme), {{ui:Trashësia e murit}} (muret shumë të hollë për t'u printuar, të listuara me {{ui:Shfaq}}), {{ui:Zbrazje}} (mure me trashësinë që jep ti, me vrima kullimi) dhe {{ui:Riparo}} (çdo riparim i listuar; pjesët që mbivendosen bashkohen vetëm kur e kërkon ti). Zbrazja dhe riparimi japin një grup ku sipërfaqet e sheshta janë faqe të vetme, ose një rrjetë kur rezultati nuk mbyllet ose ka shumë faqe; rreshti i statusit thotë cila. Shih [Mbështetëset, trashësia e murit, zbrazja dhe riparimi](topic:print-tools).
- **Stili Fillestar.** {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Menutë, tastet dhe miu}} › {{ui:Fillestar}}: butona të mëdhenj për të hedhur forma dhe vrima, për të zhvendosur, radhitur dhe {{ui:Grup}} që vrimat të presin, pastaj kontrollo modelin për printim. Shih [Stili Fillestar](topic:beginner).

### Asistentët dhe kompjuteri yt

- **Më shumë për asistentët AI.** Një asistent tani mund të listojë faqet dhe materialet, të shtyjë/tërheqë, të pikturojë, të bëjë grupe, të shtojë dhe shfaqë skena, të shtojë rrjeta, të redaktojë stivat e modifikuesve, të eksportojë USD, të renderojë një foto dhe të mbushë radhën e renderimit. Shih [Përdor ModelCraft me asistentë AI](topic:use-with-ai-assistants).
- **Kompjuteri yt.** {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Renderimi}} › {{ui:Kompjuteri juaj}} shfaq grafikën, bërthamat e procesorit dhe memorien që shfletuesi lejon aplikacionin t'i përdorë, dhe nivelin që cakton ku nis pamja e drejtpërdrejtë. Shih [Me çfarë renderon kompjuteri yt](topic:your-machine).

## Të rregulluara

- {{ui:Solide}} › {{ui:Bashkim}}, {{ui:Zbritje}} dhe {{ui:Kryqëzim}} mund të kthenin një grup që nuk ishte i mbyllur, në çfarëdo madhësie. Tani mbyllen.
- {{ui:Solide}} › {{ui:Zbritje}} ishte e çaktivizuar pa asgjë të përzgjedhur, megjithëse zgjedh dy pjesët e saj me radhë pasi e zgjedh.
- Brenda rrjedhës kohore të animacionit, tastet e shkruara nuk shkonin askund, edhe {{key:Mod+S}}. {{key:Mod+Z}} dhe {{key:Mod+Y}} aty janë zhbërja dhe ribërja e vetë rrjedhës kohore; tastet e tjera {{key:Mod}} arrijnë te aplikacioni.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka nga një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e US survey është njësi e vet). Fik njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vëri yll një dhe puna e re nis në të. Një skedar gjithmonë mban njësinë e vet. Në ModelCraft lista e njësive pranë kutisë së vlerave ndjek ndërprerësit (njësia e vetë modelit mbetet gjithmonë në listë), ylli cakton njësinë e një modeli të ri (kur ModelCraft e ka atë njësi), dhe një gjatësi e shkruar me shenjën e çfarëdo njësie lexohet në atë njësi. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Paraqitje më e dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} vendos më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta lidhur ose lëvizur panelin, lësho mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, ngjite për ta lënë të rrëshqasë te skaji, ose fshihe dhe sille përsëri nga skaji. Shih [Radhit panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit për ta larguar nga vizatimi; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Lëviz një dialog](common:arrange-panels#move-a-dialog).
- **Asistentët AI: receta.** Dhjetë kërkesa të punuara për asistentin tënd (rregullo një vizatim, shtyp një grup, kontrollo vizatime, bëj pyetje modelit, mblidh një listë sasish, provo një variant pjese…), secila me veglat që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft të pashqyrtuar ende nga një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse një kontroll përditësimi dështoi (nuk ka skedar për sistemin tënd ende, nuk ka rrjet, nënshkrim i gabuar) në vend të vetëm "Done", dhe ndalon kthimin e një kartele Çfarë është e re që ke mbyllur, derisa të ketë një version më të ri.

## Jo ende në këtë version

- **0.7 nuk është e nënshkruar me kod.** Nënshkrimi dhe paketa e Microsoft Store kaluan në 0.8, sepse certifikata nuk ka mbërritur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me butonin e djathtë te CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe pjerrësisë te {{ui:Njësitë}} ruhen, por asnjë kuti nuk i lexon ende.
- Renderimi në kartën grafike (WebGPU) është testuar këtu vetëm me një zëvendësues softuerik, jo ende në karta grafike të vërteta, prandaj renderoni diçka të vogël në kompjuterin tënd fillimisht. E njëjta gjë vlen për pamjen e drejtpërdrejtë, dhe VR është provuar ende vetëm me një emulator kufjesh.
- Pa WebGPU nuk ka hapësirë Renderimi as radhë renderimi, dhe fotot me cilësi të lartë nuk kanë thellësi fushe, qiell fizik, foto qiellore, mjegull, tym, kaustikë ose përzierje drite.
- {{ui:Rendero një foto…}} nuk vizaton ende artikuj të shpërndarë; ata shfaqen në pamjen e drejtpërdrejtë, panoramat, shfaqësin dhe videon e saj.
- Llambat animohen në pamje, por një video e renderuar përdor llambat ashtu siç janë kur fillon.
- Kockat dhe animacioni nuk lexohen ose shkruhen ende në skedarë glTF, FBX ose USD (modelet me skelet hyjnë në pozicionin e pushimit, me peshat e tyre), dhe materialet glTF dhe FBX përtej ngjyrës bazë ose teksturës nuk ruhen ende.
- Ngjyrat STEP dhe emrat e pjesëve të montimit nuk lexohen ende. Importimi `.3dm` është testuar me skedarë të shkruar nga veglat e formatit, jo ende me skedarë nga vetë programi i modelimit; objektet SubD, teksti dhe kotat lihen jashtë.
- Biblioteka e bimëve nga CivilCraft është në ModelCraft, por vendosja e bimëve prej saj nuk është ndërtuar ende.
- Vizatimi i një teksture mbi faqet shtyj/tërhiq përsëritet me pllakën e materialit; për të pikturuar vetëm një faqe, konverto atë në rrjetë dhe shpalose.

Gjithçka tjetër është në [Ende nuk është ndërtuar](topic:not-built-yet).
