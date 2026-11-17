---
title: Sipërfaqe të lira (NURBS)
summary: Kurba dhe sipërfaqe të lëmuara për guaskat e produkteve, trupat e makinave dhe trupat e anijeve: loft, zvarritje, rrjete kurbash, pllaka me katër skaje, përzierje, pritje, me vazhdimësi G0, G1 dhe G2 të matur mbi sipërfaqet e sakta, solide me bashkim, zbritje dhe kryqëzim, pamje zebër dhe lakueshmërie, faqe të përshtatura me një skanim me gabimin e matur, dhe skedarë STEP ose IGES.
keywords: nurbs, skanim, inxhinieri e kundërt, përshtat, rrjetë në sipërfaqe, re pikash, stl, pritje, vrimë, prerje, solid, solide, boolean, bashkim, zbritje, kryqëzim, ndryshim, qepje, i mbyllur, formë e lirë, sipërfaqe, b-spline, kurbë, spline, loft, zvarritje, shinë, rrjetë, coons, pllakë, përzierje, përputhje, vazhdimësi, g0, g1, g2, tangjente, lakueshmëri, zebër, pika kontrolli, nyje, gradë, step, iges, klasë A
from: 09887405
---

Paneli **Sipërfaqet** bën kurba dhe sipërfaqe të lëmuara të llojit të përdorur për guaskat e produkteve, trupat e makinave dhe trupat e anijeve: NURBS, e njëjta matematikë që përdorin modelues të tjerë sipërfaqesh. Çdo gjë matet mbi sipërfaqet e sakta, kurrë mbi trekëndëshat që shihni. Madhësitë në panel janë në **milimetra**, pavarësisht nga njësia që tregon modeli.

Hap nga paneli në të djathtë: {{ui:Sipërfaqet}} › {{ui:Hap panelin e Sipërfaqeve}}. Një model që ka tashmë sipërfaqe e hap vetë.

## Si funksionon një komandë

1. Shtyp një komandë (për shembull **Loft**). Paneli thotë çfarë i nevojitet ende: pika, kurba, një skaj sipërfaqeje ose një fund kurbe.
2. Zgjidhi ato: kliko mbi to në pamjen 3D, ose shtyp **Zgjidh** (ose butonat e skajit dhe fundit) pranë secilës në listë. Për një skaj, kliko afër atij skaji të sipërfaqes.
3. Kontrollo opsionet (gradë, tolerancë, vazhdimësi, …) dhe shtyp **Bëj**.

Kurbat nga pikat marrin pikat e shkruara një për rresht (`x, y, z` në mm), ose **Zgjidh pika në pamje**: çdo klik përdor të njëjtën kapje si veglat e vizatimit. Shtyp <kbd>Enter</kbd> ose kliko dy herë për të përfunduar, <kbd>Esc</kbd> për të ndalur.

## Kurbat

- **Kurbë nëpër pika** kalon nëpër çdo pikë. **Kurbë me pika kontrolli** ndjek në vend të kësaj një kafaz pikash.
- **Shto nyje**, **Ngri gradën** dhe **Ul gradën** ndryshojnë mënyrën si përshkruhet një kurbë pa e lëvizur (ulja refuzohet kur kurba do të lëvizte më shumë se toleranca). **Ri-ndërto kurbën** i jep një numër të ri pikash kontrolli dhe thotë sa u lëviz.
- **Përputh kurbën** i bën një fundi kurbe të takojë fundin e një tjetre me G0 (prekje), G1 (drejtim i njëjtë) ose G2 (edhe lakueshmëri e njëjtë). **Përzierje kurbe** shton një kurbë të re midis dy fundeve.
- **Bashko kurbat** dhe **Ndaj kurbën**.

## Sipërfaqet

- **Loft** nëpër dy ose më shumë kurba, **Sipërfaqe vijëzore** midis dy, **Shtrirje kurbe**, **Rrotullim kurbe**.
- **Zvarritje përgjatë një shine** mban një profil përgjatë një shtegu pa e përdredhur. **Zvarritje përgjatë dy shinave** mban skajet e profilit në të dyja shinat. Zvarritjet janë të përshtatura: rreshti i statusit thotë sa afër qëndroi me zvarritjen e vërtetë.
- **Sipërfaqe nga një rrjet kurbash** kalon nëpër një rrjet kurbash (zgjedhjet e para janë profilet, pjesa tjetër udhëzuesit). **Pllakë nga katër skaje** mbush katër kurba që takohen në cepat e tyre.
- **Përputh sipërfaqen** i bën një skaji sipërfaqeje të takojë një fqinj me G0, G1 ose G2; **Përzierje sipërfaqe** shton një sipërfaqe midis dy skajeve.
- **Zhvendos sipërfaqen paralelisht**, **Shtrih sipërfaqen** (sipërfaqja vazhdon ashtu si po shkonte), **Ri-ndërto sipërfaqen**, dhe nyjet dhe gradat për sipërfaqet.

## Kontrollimi i cilësisë

Tabela **Skajet e përbashkëta** liston çdo skaj që dy sipërfaqe e ndajnë, me hapësirën (mm), këndin midis tyre (°) dhe kërcimin e lakueshmërisë (1/mm), dhe nëse kjo e bën G0, G1 ose G2. Një skaj më të keq se ç'kërkove është edhe në **Problemet** (butoni ⚠ në shiritin e aplikacionit) me një rregullim **Përputh**.

**Shfaq si** › **Vija zebër** dhe **Lakueshmëria (Gaussian)** vijnë nga sipërfaqja e saktë: vijat që kalojnë të pathyera mbi një skaj tregojnë G1; vijat që mbajnë edhe gjerësinë e tyre tregojnë G2. Lakueshmëria është blu aty ku sipërfaqja është shalë, e kuqe aty ku është kupolë, dhe e bardhë aty ku është e sheshtë. **Pikat e kontrollit** vizaton rrjetat e kontrollit.

G0–G2 maten në 33 pika për skaj. **G3 dhe cilësia "klasë A" nuk maten** dhe nuk pretendohen.

## Prit një sipërfaqe

Grupi **Pritje** pret një sipërfaqe pa ndryshuar formën e saj: sipërfaqja mban të gjitha pikat e saj të kontrollit, dhe shfaqet, numërohet dhe shkruhet vetëm pjesa brenda konturit. **Prit në një drejtkëndësh** dhe **Prit me një rreth** punojnë mbi një pjesë (0 deri 1) të sipërfaqes në çdo drejtim, kështu që nuk kanë nevojë për zgjedhje në pamje. **Prit me një kurbë** merr një kurbë të mbyllur që shtrihet mbi sipërfaqen (projektohet në të, dhe refuzohet me fjalë kur është e hapur ose më shumë se toleranca larg). Vëri shenjë **Pritë një vrimë** për të hequr brendësinë e konturit; lëre të pashënuar për të mbajtur vetëm brendësinë. Një sipërfaqe mund të ketë një kontur të mbajtur dhe çfarëdo numri vrimash; një kontur që kryqëzohet me një tjetër refuzohet. **Hiq pritjen** shfaq përsëri sipërfaqen e tërë. Skajet e prera ndjekin konturin saktësisht; Zhbëj i panelit e kthen pritjen si çdo hap tjetër.

STEP e mban pritjen si kufijtë e faqes, dhe IGES si një sipërfaqe të prerë (entiteti 144); të dy e lexojnë përsëri.

## Solidet dhe Booleanët

Grupi **Solide** i kthen sipërfaqet në trupa të mbyllur dhe i kombinon. Një solid këtu është një grup sipërfaqesh të panelit që së bashku mbyllin një vëllim; faqet e tij mbeten sipërfaqe NURBS të sakta me pritjet e tyre.

- **Kuti solide**, **Cilindër solid** dhe **Sferë solide** krijojnë një nga madhësi të shkruara (në mm): një kuti me gjashtë faqe të sheshta, një cilindër me një anë të rrumbullakët dhe dy skaje të sheshta të prera sipas rrethit, një sferë me një sipërfaqe të vetme të rrotulluar.
- **Solid nga sipërfaqet** grupon sipërfaqet që ke bërë vetë. Zgjidhi ato, ose mos zgjidh asnjërën për të përdorur çdo sipërfaqe të shfaqur që nuk është ende në një solid. Qepen së bashku brenda tolerancës: nëse nuk mbyllen, asgjë nuk ndryshon dhe paneli thotë sa skaje mbeten të hapura dhe sa afër duhet të takohen.
- **Bashkim**, **Zbritje** (solidi i dytë hiqet nga i pari) dhe **Kryqëzim** (vetëm ajo që të dy e ndajnë) marrin dy solide: kliko një faqe të secilit në pamje, ose shtyp **Zgjidh** në listën **Solide**. Vëri shenjë **Mbaj dy solidet** për t'i lënë pranë rezultatit.

Një Boolean mban çdo faqe në sipërfaqen e vet të saktë dhe e pret me kontura të reja pritjeje përgjatë kryqëzimit. Rreshti i rezultatit jep numrat e matur: sa duhej të lëviznin pikat e motorit të solideve për t'u vendosur mbi sipërfaqet e sakta (kurrë më shumë se toleranca), sa afër janë pikat e kryqëzimit me të dyja sipërfaqet (zakonisht disa milionëshe të milimetrit), vëllimi, dhe nëse faqet e reja mbyllen përsëri kur qepen nga e para mbi sipërfaqet e tyre të sakta. Vëllimet maten mbi trekëndësha brenda tolerancës (0,05 mm përveç nëse vendos tjetër), kështu që vëllimi i një sfere ose cilindri lexohet pak më i ulët se ai i saktë: një tolerancë më e vogël afrohet më shumë. Një Boolean që nuk mund të bëhet pastër (solidet nuk kanë asgjë të përbashkët, një kontur do të kryqëzonte veten) refuzohet me fjalë dhe nuk ndryshon asgjë. Një Boolean është një hap i **Zhbëj** të panelit.

Në listën **Solide**, **Çgrupo** i mban faqet si sipërfaqe të thjeshta; **Hiq** e heq solidin dhe faqet e tij.

**Shto te modeli** (në listën **Solide**) vendos një kopje të solidit në model si një grup i vetëm i mbyllur, faqet e tij si trekëndësha brenda 0,05 mm, në një hap të Zhbëj të modelit. Pastaj punon me **Bashkim**, **Zbritje** dhe **Kryqëzim** të vetë modelit, me shtyp/tërhiq dhe me kontrollin e printimit 3D; solidi i saktë mbetet në panel.

## Rrumbullakime dhe trashje

**Rrumbullakim midis faqeve** rrumbullakos skajin ku takohen dy faqe të një solidi: zgjidh dy faqet (në pamje, ose me **Zgjidh** në listë), shkruaj **rrezen** dhe, për një rreze që ndryshon përgjatë skajit, **rrezen në fund** (0 mban një rreze të vetme). Një top me atë rreze rrokullisët përgjatë skajit duke prekur të dyja faqet; rrumbullakimi është harku i saktë rrethor që lë në çdo pikë, i bashkuar në një sipërfaqe, dhe dy faqet priten aty ku topi prek. Një skaj i jashtëm humbet material, një cep i brendshëm fiton. Rreshti i rezultatit jep atë që u mat: sa larg është sipërfaqja e rrumbullakimit nga topi që rrokullisët midis pikave nga të cilave u ndërtua (shtohen pika derisa të jetë brenda një të katërtës së tolerancës), këndi më i madh midis rrumbullakimit dhe secilës faqe përgjatë vijave të prekjes, dhe të njëjtat numra si një Bashkim. Një rreze që nuk përshtatet (topi do të dilte nga një faqe, ose një faqe përkulet më ngushtë se rreza) refuzohet, duke emërtuar faqen, dhe asgjë nuk ndryshon.

**Rrumbullako disa skaje** rrumbullakos shumë skaje në një hap: zgjidh dy faqet e skajit të parë, pastaj dy faqet e tjetrit, e kështu me radhë (një faqe mund të jetë në disa çifte, p.sh. faqja e sipërme e një kutie në katër prej tyre); të gjitha skajet marrin rrezen që shkruan. Çdo rrumbullakim llogaritet mbi solidin siç ishte, pastaj priten njëri pas tjetrit, kështu që rendi nuk ka rëndësi. Aty ku dy skaje të rrumbullakosura takohen në një cep ku skajet e tjera mbeten të mprehta, dy rrumbullakimet hyjnë në njëri-tjetrin përgjatë kurbës së kryqëzimit (një palosje). Aty ku tre skaje të jashtme të rrumbullakosura të tre faqeve të sheshta që formojnë kënde të drejta takohen me një rreze, cepi është një **copë sfere** tangjente me të tre rrumbullakimet (hiq shenjën **Cepat** për ta marrë cepin me palosje në vend të kësaj); një skaj duhet të jetë të paktën dy herë rreze i gjatë aty ku të dy fundet janë cepa të tillë. Rreshti i rezultatit thotë sa skaje u rrumbullakosën dhe si dolën cepat. Skajet e brendshme mund të rrumbullakosen gjithashtu së bashku, por një rezultat që nuk mbyllet përsëri vetëm raportohet (rreshti e thotë), kështu që kontrollo.

**Trashe në solid** i jep një sipërfaqeje trashësi: zgjidhe, shkruaj **trashësinë**, dhe shëno **Ana tjetër** për ta rritur në drejtimin tjetër. Faqja e zhvendosur përshtatet me sipërfaqen dhe matet krahasuar me të (rreshti i rezultatit jep ndryshimin më të madh nga trashësia); muret ndjekin çdo skaj dhe çdo kontur pritjeje. Nëse sipërfaqja përkulet më ngushtë se trashësia nga ajo anë, ose një pjesë tjetër e saj shtrihet më afër se trashësia, refuzohet, duke emërtuar sipërfaqen dhe vendin, dhe asgjë nuk ndryshon.

## Zhbëj, skedari, STEP dhe IGES

Paneli ka **Zhbëj** dhe **Ribëj** të vetin (një hap për komandë). Sipërfaqet ruhen në skedarin `.modelcraft` me modelin; nuk janë pjesë e Zhbëj-it të vetë modelit, si materialet e skedarit.

**STEP…** (AP242) dhe **IGES…** ruajnë kurbat dhe sipërfaqet saktësisht ashtu si janë (kurba dhe sipërfaqe B-spline, asgjë e kthyer në trekëndësha). Çdo sipërfaqe është faqja e vet, me pritjen e saj; një solid shkruhet si një guaskë e mbyllur e vetme, çdo skaj i përbashkët me dy faqet e tij siç presin programet e tjera CAD (rreshti i statusit thotë sa solide dolën kështu). Në IGES i njëjti solid është një B-rep solid i vetëm manifold (entiteti 186 mbi guaskën e mbyllur 514, faqet 510, unazat 508, një listë skajesh 504 dhe një listë kulmesh 502); një solid faqet e të cilit nuk çiftohen skaj për skaj shkruhet si faqe të veçanta, dhe rreshti e thotë këtë. **Importo…** e lexon përsëri një solid të tillë si solid, nga STEP dhe nga IGES. Lexon kurba dhe sipërfaqe të shkruara kështu, dhe grupe copash `.ccnurbs`; solidet STEP të programeve të tjera hapen me Skedar › Importo si rrjeta.

## Sipërfaqe nga një skanim (inxhinieri e kundërt)

Zgjidh rrjetën e skanuar në model (asgjë e zgjedhur do të thotë çdo gjë e shfaqur), hap **Sipërfaqet**, dhe në grupin **Skanimi** zgjidh **Përshtat sipërfaqet me skanimin**. Veglë kërkon **plane**, **cilindra**, **sfera** dhe **kone** (sipërfaqet e sakta nga të cilat është bërë një pjesë e punuar me mjete; çdo rresht tregon rrezen ose gjysmë-këndin që gjeti), gjen **rrumbullakime** (skaje dhe cepa të rrumbullakosur: një cilindër ose sferë e vogël që prek tangjencialisht dy ose më shumë faqe të tjera, e shfaqur me rrezen dhe faqet që lidh), **rrumbullakime rrethore** (një torus: skaji i rrumbullakosur ku një faqe e sheshtë takon një cilindër ose kon, i shfaqur me rrezen e tij dhe rrezen e unazës), dhe **rrumbullakime të ndryshueshme** (një skaj i rrumbullakosur rrezja e të cilit ndryshon përgjatë tij, e shfaqur me rrezen në secilin fund); përshtat **një pllakë të lirë** me një copë të lëmuar dhe pak të lakuar, dhe pret çdo faqe sipas konturit të pjesës së skanimit nga ku erdhi, kështu që vrimat dhe cepat mbeten. Opsionet: **toleranca** (sa larg, në mm, mund të jetë një pikë skanimi nga një plan ose cilindër dhe ende t'i përkasë, dhe synimi për një pllakë të lirë), **copa më e vogël** (një pjesë e sipërfaqes totale) dhe **faqet më të shumta**. I njëjti skanim dhe të njëjtat opsione japin gjithmonë të njëjtat faqe.

Rezultati është një tabelë, një rresht për faqe: lloji i saj, sa trekëndësha erdhi nga, dhe gabimi **i matur nga skanimi në faqe** (rms, më i madhi, dhe pjesa e pikave brenda tolerancës). Pikat e matura janë kulmet e skanimit dhe mesi i çdo trekëndëshi. Gabimi nuk matet në drejtimin tjetër (faqe në skanim), kështu që një faqe që shtrihet përtej skanimit nuk do të shfaqej. Shënimi nën tabelë thotë edhe sa nga sipërfaqja ishte shumë e vogël për t'u përshtatur. Në pamje, pikat e skanimit ngjyrosen sipas **hartës së devijimit**: blu mbi faqe, jeshile në gjysmë rruge drejt tolerancës, e kuqe në tolerancë ose më shumë (çshëno **Shfaq hartën e devijimit** për ta fshehur). Pjesët që palosen mbi vete (një tub i mbyllur i përshtatur me pllaka të lira, për shembull) listohen si të pa përshtatura, dhe nuk detyrohen kurrë në një sipërfaqe të vetme.

**Qep sipërfaqet në solid** qep çdo sipërfaqe të shfaqur që nuk është në solid në një solid të mbyllur të vetëm. Faqet e skanimit takohen vetëm brenda gabimit të vet, kështu që provon distancën më të vogël të bashkimit që mbyllet (kurrë më shumë se **distanca e qepjes** që vendos), dhe refuzon me fjalë kur faqet nuk mbyllen. Nuk mbulon kurrë një hendek. Një kuti me skaje të rrumbullakosura qepet kur rrumbullakimet e saj u gjetën si faqe të veta; distanca e bashkimit që u mbyll jepet në rezultat. Solidi pastaj punon me Bashkim, Zbritje, Kryqëzim dhe **Shto te modeli**.

Çfarë nuk bën: një **rrumbullakim rrethor** (një torus) kërkohet vetëm rreth boshtit të një cilindri ose koni tashmë të gjetur, dhe një **rrumbullakim i ndryshueshëm** vetëm përgjatë një skaji mjaft të drejtë (seksionet e tij priten në kënd të drejtë me një drejtim). Gjetkë dalin si pllaka të lira kur janë mjaft të lëmuara, dhe lihen jashtë përndryshe. Sferat, konet dhe rrumbullakimet gjenden me kampionim të rastësishëm, kështu që një shumë e vogël (disa trekëndësha) mund t'i shpëtojë. Harta e devijimit tregon distancën nga skanimi në faqe, jo anasjelltas. Skanimet shumë të mëdha (mbi 300 000 trekëndësha) refuzohen këtu. Faqet e një cilindri me rreth të plotë priten rreth vrimave, me qepjen vendosur aty ku nuk ka vrimë. Kontrollo çdo faqe kundrejt skanimit tënd para se të mbështetesh në të.

## Ende nuk është ndërtuar

Rrumbullakimi i skajeve që takohen në një cep të sipërfaqeve të lakuara ose me rreze të ndryshme (një përzierje kulmi), një rrumbullakim midis faqesh që nuk takohen, një rrumbullakim i brendshëm që mbaron në një faqe të prirur ose të lakuar, dhe Booleanët dhe rrumbullakimet e llogaritura mbi sipërfaqet pa trekëndësha (këtu motori i solideve punon mbi trekëndësha brenda tolerancës, dhe çdo pikë kthehet më pas mbi sipërfaqet e sakta).
