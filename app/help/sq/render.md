---
title: Rendero një imazh të modelit
summary: Bëj një imazh që duket si dritë dite: qiell, diell sipas vendit dhe datës së modelit, hije të buta, pamje xhami dhe metali, pastaj ruaje si PNG.
keywords: rendero, paracaktim, paracaktime, paracaktim skene, brenda, jashtë, pamje prerjeje, natë, një klik, renderim, gjurmim shtegu, gjurmuar shtegu, gjurmim rrezesh, ndriçim global, reflektime, refraksion, cilësi e lartë, foto, fotorealist, realist, imazh, png, fotografi e palëvizshme, qiell, diell, dritë dite, hije, hije të buta, oklusion ambient, xhami, metal, me shkëlqim, materiale, ekspozim, ndriçim, me re, muzg, studio, prezantim, mjegull, hemi, tym, re, vëllim, rreze drite, mostrim adaptiv, zhurmë
from: 517ba4d3
---

{{ui:Render a picture…}} bën një imazh të pamjes që duket si dritë dite, jo si vizatim: një qiell, dielli në vendin dhe datën e modelit tënd, hije të buta, dritë nga i gjithë qielli që errëson qoshet dhe hapësirat, dhe ngjyra që mund të duken si xhami, metal ose bojë me shkëlqim. Modeli nuk ndryshohet.

## Renderoni pamjen

1. Vendos pamjen siç e do imazhin: rrotullo rreth modelit, zmadho, zgjidh një [skenë](topic:scenes), fshih ato që nuk duhet të duken. Imazhi përdor kamerën e vetë pamjes.
2. Kliko {{ui:Export}} te grupi {{ui:File}}, pastaj {{ui:Render a picture…}}.
3. Zgjidh një {{ui:Scene}} nëse ajo e shtypur nuk është ajo që do (shih [Paracaktimet e skenës](topic:render#scene-presets-a-good-picture-in-one-click)), zgjidh {{ui:Size}}, pastaj kliko {{ui:Render}}.

   Imazhi plotësohet gjatë renderimit dhe bëhet më i lëmuar me çdo kalim. {{ui:Stop}} (ose {{key:Esc}}) e ndalon përpara kohe dhe e mban imazhin deri atëherë.

4. Kliko {{ui:Save}} për ta shkarkuar (një PNG, përveç nëse {{ui:Save as}} thotë ndryshe).

:::tip
Fillo me {{ui:Draft}} te {{ui:The view's size}} për të kontrolluar kamerën dhe pamjen, pastaj rendero {{ui:Mirë}} ose {{ui:Më e mirë}} në një madhësi më të madhe për imazhin përfundimtar.
:::

## Paracaktimet e skenës: një imazh i mirë me një klik

Lart te dialogu ka katër butona {{ui:Scene}}. Secili cakton qiellin, ndriçimin, tokën, vijat e skajeve, cilësinë dhe diellin me një klik, kështu që nuk ka çfarë të mësosh para imazhit të parë. Kliko një, pastaj {{ui:Render}}.

| Skena | Çfarë cakton | Përdoreni për |
|---|---|---|
| {{ui:Exterior}} | Qiell i pastër, dielli i modelit, toka e ndezur | Ndërtesën nga jashtë |
| {{ui:Interior}} | Qiell me re (dritë e barabartë, pa pika dielli të forta), një gjysmë ndalese më i ndritshëm | Një pamje nga brenda një dhome |
| {{ui:Section view}} | Studio e bardhë, pa tokë, vijat e skajeve në renderimin e shpejtë | Një model i prerë nga një prerje |
| {{ui:Night}} | Dielli ulet (mesnatë në mes të dimrit për gjysmën e botës së vendit), një ndalesë më i ndritshëm | Dritat që ndriçojnë modelin. Pa llamba imazhi është i errët |

- {{ui:Pick for this view}} zgjedh për ty: {{ui:Section view}} kur është aktive një prerje, {{ui:Interior}} kur kamera është brenda modelit, përndryshe {{ui:Exterior}}. Herën e parë që hap dialogun, fillon kështu vetvetiu.
- Çdo cilësim mbetet më poshtë dhe mund të ndryshohet. Sapo ndryshon një që skena cakton, asnjë buton nuk është i shtypur dhe rreshti nën butona thotë se cilësimet janë të tuaja. Kliko përsëri skenën për t'i kthyer vlerat e saj.
- Një skenë nuk prek motorin, mënyrën, madhësinë, materialet, kamerën apo llambat.

:::note
Skenat japin të njëjtat vlera në ModelCraft dhe BimCraft. Si duket imazhi përfundimtar varet nga modeli yt dhe nga karta jote grafike.
:::

## Cilësimet

| Cilësimi | Çfarë bën |
|---|---|
| {{ui:Size}} | Madhësia e pamjes, dyfishi i madhësisë së pamjes, Full HD, 4K ose një katror. Madhësitë fikse e mbajnë kamerën e pamjes dhe shfaqin pak më shumë ose më pak në anët |
| {{ui:Mode}} | {{ui:Fast}}, ose {{ui:High quality (path traced)}} (më poshtë) me {{ui:Time limit}} të tij |
| {{ui:Quality}} | Sa kalime (ose, në cilësi të lartë, mostra) mesatarizohen: {{ui:Draft}} 16, {{ui:Mirë}} 64, {{ui:Më e mirë}} 256. Më shumë kalime japin hije dhe skaje më të lëmuara, por zgjasin më shumë |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (dritë e butë, hije të lehta), {{ui:Dusk}} (dritë e ulët, e ngrohtë) ose {{ui:White studio}} (sfond i bardhë i thjeshtë) |
| {{ui:Sun}} | Dielli vjen nga data, ora dhe vendi te {{ui:Style}} › dielli. Shëno {{ui:Use another date and time for this picture}} për të provuar një orë tjetër pa ndryshuar stilin e modelit |
| {{ui:Brightness}} | Më i ndritshëm ose më i errët, me ndalesa |
| {{ui:Ground under the model}} | Një tokë që merr hijet dhe shuhet në horizont. Fikeni për një model që noton |
| {{ui:Draw edges}} | Vizaton skajet e modelit hollë mbi imazh, për një pamje të vizatuar |

Kur dielli është nën horizont në orën e zgjedhur, është natë: qielli errësohet dhe [llambat](topic:lights) e modelit e ndriçojnë. Dialogu e thotë këtë.

Cilësimet ruhen në skedarin `.modelcraft`, kështu që imazhi tjetër i të njëjtit model fillon aty ku e ke lënë.

## Bëje ngjyrën të duket si xhami ose metal

Te {{ui:Materials}}, çdo ngjyrë në ekran ka një pamje: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ose {{ui:Frosted glass}}. {{ui:Unpainted faces}} janë sipërfaqet që nuk kanë ngjyrë të vetën.

Për ta bërë dritaret xhami, [lyeje](topic:paint) xhamat me një ngjyrë, pastaj vendos atë ngjyrë te {{ui:Glass}}. Xhami lë qiellin dhe atë që është pas tij të duken, të nuancuar nga ngjyra e tij, dhe reflekton qiellin.

:::note
Te mënyra {{ui:Fast}}, xhami dhe metali reflektojnë qiellin, jo pjesën tjetër të modelit, dhe drita nuk thyhet nëpër xhami. Mënyra {{ui:High quality (path traced)}} më poshtë i bën të dyja.
:::

## Cilësi e lartë

Zgjidh {{ui:Mode}} › {{ui:High quality (path traced)}} për një imazh që ndjek dritën ashtu si e sheh një kamerë:

- drita kthehet mes sipërfaqeve, kështu që një dhomë e ndriçuar nga një dritare ose nga një llambë, ndriçohet në të gjitha anët, dhe ngjyrat i japin ngjyrë fqinjëve;
- xhami është xhami i vërtetë: drita thyhet nëpër të dhe ai reflekton modelin;
- metali dhe sipërfaqet e lustruara reflektojnë pjesën tjetër të modelit;
- panelet e dritës ndriçojnë si panele, me hije të buta.

Është shumë më i ngadaltë se {{ui:Fast}}: çdo kalim e gjurmon dritën e çdo pikseli përsëri. Imazhi fillon me kokrriza dhe pastrohet ndërsa mostrat shtohen, prandaj fillo i vogël ({{ui:The view's size}}, {{ui:Draft}}) dhe zgjidh një {{ui:Time limit}}: kur mbaron koha, mbahet imazhi që ka. {{ui:Stop}} e mban gjithashtu. Kalimi i parë pret ndërsa shfletuesi përgatit gjurmuesin e shtegut.

Ku shfletuesi ka WebGPU, gjurmuesi i shtegut është i vetë CadCraft-it dhe punon në kartën grafike; rreshti nën imazh thotë {{ui:Gjurmuar shtegu në kartën grafike (WebGPU)}}. Pas {{ui:Stop}} ose kufirit kohor, {{ui:Vazhdo}} vazhdon me të njëjtin imazh deri sa të ketë të gjitha mostrat; ndryshimi i një cilësimi ose shtypja e {{ui:Render}} përsëri nis nga e para. Pa WebGPU, imazhi gjurmohet me WebGL (rreshti e thotë këtë) dhe {{ui:Vazhdo}} nuk ofrohet.

:::linux
Firefox dhe shumica e konfigurimeve të Chrome në Linux nuk kanë ende WebGPU, prandaj cilësia e lartë përdor WebGL atje.
:::

Në këtë mënyrë skajet nuk vizatohen, teksturat e bibliotekës tregojnë ngjyrën dhe ashpërsinë e tyre por jo gungat, (një [material i bërë me nyje](topic:shading#in-high-quality-pictures) tregon normalen dhe gungat e tij), dhe një prerje bëhet mbi model para se të nisë imazhi.

{{ui:Pastrim zhurmash (heq kokrrizat e mbetura pas mostrave)}} është aktiv si parazgjedhje: kur imazhi mbaron, ose ndalohet, kokrrizat që mbeten pastrohen nga një rrjet nervor i bërë për këtë (rrjeti i publikuar i Intel Open Image Denoise, i ekzekutuar në kompjuterin tënd: në kartën grafike, përndryshe në procesor). Një imazh me pak mostra del i pastër; {{ui:Show}} › {{ui:Imazhi para pastrimit të zhurmës}} e shfaq ashtu si u renderua.

## Renderoni në pamje

Hapësira e punës {{ui:Render}} e ekzekuton gjurmuesin e shtegut në vetë pamjen: rrotullo, ndrysho modelin ose një dritë dhe ai nis përsëri menjëherë. {{ui:Region}}: tërhiq një drejtkëndësh dhe vetëm ai renderohet; {{ui:Whole view}} e kthen. {{ui:Focus}}: kliko atë që duhet të jetë e mprehtë, dhe thellësia e fushës fokusohet atje. {{ui:Detail}} cakton sa piksel të pamjes renderohen (më pak është më shpejt). {{ui:Pause}} ndalon dhe vazhdon. Kërkon WebGPU: pa të, hapësira e punës e thotë këtë, dhe {{ui:Export}} › {{ui:Render a picture…}} funksionon edhe kështu.

## Qiej dhe profile drite në kartën grafike

Me WebGPU, cilësia e lartë ka dy qiej të tjerë:

- {{ui:Physical sky}} e nxjerr dritën e ditës nga lartësia e diellit: blu i thellë lart, një brez i zbehtë te horizonti, dhe një diell që bëhet më i ngrohtë dhe më i zbehtë ndërsa ulet. {{ui:Haze}} shkon nga një ditë shumë e pastër (2) te një ditë me mjegull (10).
- {{ui:Sky picture (HDRI)}} e ndriçon modelin me një panoramë të një vendi të vërtetë. {{ui:Choose a picture…}} merr një skedar `.hdr` ose `.exr` equirectangular; {{ui:Turn}} e rrotullon rreth modelit, dhe {{ui:Picture brightness}} e bën më të ndritshëm ose më të errët. Imazhi mban diellin e vet, prandaj dielli i modelit nuk shtohet. Mbahet vetëm ndërsa faqja është e hapur: pas rihapjes, zgjidhe përsëri.

Çdo llambë te lista {{ui:Lamps}} mund të marrë një profil drite të prodhuesit: {{ui:IES profile…}} lexon një skedar IES (LM-63), dhe llamba pastaj e hedh dritën ashtu si e bën ai aparat (një spot i ngushtë, një ndriçues muri). Çdo llambë me atë emër e përdor, dhe llamba mban ndriçimin e vet. Kliko emrin e profilit për të ndaluar përdorimin e tij.

Dritaret me xhami të pastër ndihmojnë dritën e qiellit të gjejë rrugën në një dhomë, kështu që imazhet e brendshme nën një qiell sqarohen më shpejt.

Mënyra {{ui:Fast}} dhe gjurmuesi WebGL e shfaqin {{ui:Physical sky}} dhe {{ui:Sky picture (HDRI)}} si një qiell të pastër dhe injorojnë profilet e dritës.

## Kamera

{{ui:Camera}} e cakton imazhin si një fotografi:

- {{ui:Exposure}}: mbaj {{ui:Brightness slider}}, ose zgjidh {{ui:Camera settings}} dhe cakto {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} dhe {{ui:ISO}} si te një aparat; EV pranë tyre është vlera e zakonshme e ekspozimit. f/16 me 1/100 s dhe ISO 100 përputhet me një ditë me diell; një skenë më e errët kërkon një diafragmë më të gjerë, një shutër më të ngadaltë ose një ISO më të lartë. Kjo funksionon në çdo mënyrë.
- {{ui:Depth of field}} i turbullon ato që janë më afër ose më larg se {{ui:Focus distance (m)}}, ashtu si do ta bënte një lente me atë f-stop (lëre bosh për të fokusuar në atë që është në mes të pamjes); {{ui:Aperture shape}} i jep dritave jashtë fokusit një formë rrethore ose me lamelë.
- {{ui:Two-point perspective (vertical lines stay vertical)}} e nivelon kamerën dhe e zhvendos imazhin, si bën një lente arkitekturore tilt-shift, kështu që muret nuk prirën kur shikon lart ose poshtë ndaj një ndërtese.
- {{ui:White balance}} cakton cilin ngjyrë drite duket e bardhë: më e ulët (p.sh. 3000 K) për dritë të ngrohtë llambash, më e lartë për hijen dhe ditët me re.
- {{ui:Projection}}: {{ui:360° panorama}} bën një imazh 2:1 të gjithçkaje rreth kamerës për shfaqësit e panoramave; {{ui:360° stereo panorama}} vendos një panoramë për syrin e majtë dhe një për syrin e djathtë për syze; {{ui:Cube map (6 faces)}} bën gjashtë pamje katrore në një rrjetë 3 × 2. Gjerësia vjen nga {{ui:Size}}.

Projeksioni, thellësia e fushës, perspektiva me dy pika dhe balanca e bardhës kërkojnë gjurmuesin e shtegut në kartën grafike (WebGPU), prandaj shfaqen vetëm te {{ui:Cilësi e lartë}}.

## Përfundo imazhin

{{ui:Picture}} e gradon imazhin me cilësi të lartë si një fotografi, dhe çdo kontroll e ndryshon imazhin përfundimtar menjëherë, pa rirenderuar:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (imazhi si më parë), {{ui:AgX}} (më i butë, ruan ngjyrën në dritë shumë të ndritshme), {{ui:Filmic}} (një kurbë e butë filmi) ose {{ui:Standard}} (i thjeshtë, drita shumë e fortë shkon në të bardhë).
- {{ui:Contrast}} dhe {{ui:Highlight compression}} (kthen detajet në pjesët shumë të ndritshme).
- {{ui:Bloom}} (një shkëlqim i butë rreth dritës së fortë), {{ui:Glare}} me {{ui:Glare streaks}} (rreze yjesh nga pikat më të ndritshme) dhe {{ui:Vignette}} (qoshe më të errëta).
- {{ui:Colour table (.cube)…}} aplikon një gradim ngjyrash nga një skedar `.cube`, me {{ui:Colour table strength}} të tij; si imazhi i qiellit, mbahet vetëm ndërsa faqja është e hapur.

## Ruaj imazhin

{{ui:Save as}} pranë {{ui:Save}} zgjedh skedarin: {{ui:PNG}}, {{ui:JPEG}} ose {{ui:WebP}} për ndarje (JPEG dhe WebP vetëm aty ku shfletuesi mund t'i shkruajë), dhe pas një renderimi me cilësi të lartë në kartën grafike edhe:

- {{ui:PNG, 16 bits}}: imazhi i graduar me hapa më të hollë midis nuancave, për printim ose përpunim të mëtejshëm.
- {{ui:EXR, every layer (32-bit float)}}: imazhi siç u renderua (dritë lineare, pa gradim) me çdo element renderimi dhe grup drite si shtresë të veçantë, për programet e kompozitimit.
- {{ui:Render file (.ccrender, to grade again later)}}: gjithçka që dialogu i duhet për të përzier dhe gradaluar përsëri imazhin. {{ui:Open a render file…}} e kthen, me përzierjen dhe gradimin e tij, pa renderuar.

## Përzieni dritat pas renderimit

Ndiz {{ui:Light mixing (change each light's colour and brightness after the render)}} para se të shtypësh {{ui:Render}}. Kur imazhi mbaron (ose ndalohet), {{ui:Mix the picture}} i liston dritat e tij në grupe: qiellin, diellin dhe llambat sipas emrit (çdo llambë me të njëjtin emër është një grup). Fik një grup, jepi një ngjyrë, ose bëje më të ndritshëm ose më të errët, dhe imazhi ndryshon menjëherë, pa rirenderuar. {{ui:Save mix}} e mban përzierjen me një emër për ta zgjedhur më vonë; {{ui:As rendered}} kthehet te imazhi siç u bë. {{ui:Save}} ruan imazhin e përzier.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} mban edhe pjesët e imazhit. {{ui:Show}} e kalon pamjen te një prej tyre: ngjyrat e sipërfaqes (albedo), normalet, thellësinë, dritën difuze, spekulare dhe të transmetuar (secila direkte dhe indirekte), çfarë shkëlqen dhe qiellin, dhe një ngjyrë për objekt ose për material, për të bërë maska.

Të dyja mbajnë shtresa shtesë në kartën grafike. Në madhësi të mëdha kartës grafike mund t'i mungojë vend; dialogu e thotë këtë dhe një madhësi më e vogël funksionon.

## Radha e renderimit

Pas një konfigurimi me cilësi të lartë, {{ui:Shtoje këtë imazh në radhë}} nën {{ui:Radha e renderimit}} mban imazhin siç është caktuar tani; {{ui:Shtoje këtë animacion në radhë}} e dialogut të videos e bën të njëjtën gjë për një animacion të tërë, të gjurmuar kuadër pas kuadri. {{ui:Nis radhën}} i renderon një pas tjetrit në këtë kompjuter, dhe {{ui:Save}} pranë çdo njëshi të përfunduar e shkarkon. Mbyllja e faqes e mban radhën: hap të njëjtin model dhe vazhdon aty ku u ndal. Radha kërkon WebGPU.

## Mjegull, tym, zhurmë dhe kaustikë

Këto ndodhen te {{ui:Fog, smoke and noise}} dhe punojnë te {{ui:Cilësi e lartë}} në kartën grafike; motorët e tjerë i lënë jashtë.

- {{ui:Fog and haze}} mbush ajrin deri në një lartësi me një mjegull që e ndriçojnë dielli, qielli dhe llambat. {{ui:How far you can see, in meters}} cakton sa e dendur është (rreth 100 m është një mjegull e lehtë, 20 m një mjegull e dendur), {{ui:Fog height above the ground, in meters}} është aty ku mbaron, dhe {{ui:Light shafts}} është sa shkëlqen mjegulla drejt dritës. Drita e diellit del nga mjegulla në krye, prandaj aty ku dielli hyn nga një dritare ose midis ndërtesave, e sheh si rreze drite.
- {{ui:Smoke or cloud}} shton një vëllim tymi ose reje të ndriçuar si mjegulla. {{ui:Kind}} është një {{ui:Re}}, një {{ui:Shtyllë tymi}} ose {{ui:Nga një skedar vëllimi (.ccvol)}}, formati i rrjetës së vet të CadCraft-it. {{ui:Detail}} dhe {{ui:Variation}} ndryshojnë një re ose shtyllë të krijuar, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} dhe {{ui:Turn}} e vendosin (fillon në mes të modelit), {{ui:Thickness}} e bën më të dendur, {{ui:Forward glow}} e bën më të ndritshëm drejt dritës, dhe {{ui:Color}} e ngjyros. Një skedar vëllimi mbahet vetëm ndërsa faqja është e hapur, si një imazh qielli.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} nuk jep më mostra pikselëve që janë stabilizuar, kështu që pjesa tjetër e imazhit mbaron më shpejt. {{ui:Noise to accept}} është sa kokrrizë mbetet kur një piksel ndalet. Rreshti nën imazh thotë mesatarisht sa mostra mori një piksel.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} gjurmon dritën nga llambat dhe dielli, kështu që njolla e ndritshme nën një top xhami, ose drita e një pasqyre mbi një mur, del e pastër në vend që të jetë me kokrriza. Është e fikur ndërsa janë të ndezura mjegulla, tymi, {{ui:Përzieni dritat pas renderimit}} ose elementët e renderimit, dhe është bërë për imazhe, jo për imazhe 360°, animacione ose hapësirën e punës {{ui:Render}}.

## Sa zgjat

Imazhi bëhet në kompjuterin tënd, nga karta jote grafike; asgjë nuk ngarkohet. Sa zgjat varet nga ajo kartë. Koha rritet me kalimet dhe pikselët: {{ui:Më e mirë}} ka 16 herë kalimet e {{ui:Draft}}, dhe një imazh 4K ka rreth katër herë pikselët e Full HD. Një kompjuter pa kartë grafike ende renderon, por më ngadalë.

:::note
Nëse dialogu thotë se shfletuesi nuk mund të renderojë imazhe, shfletuesi nuk ka WebGL 2. Përditësoje, ose aktivizo përshpejtimin me harduer te cilësimet e tij.
:::
