---
title: Izindawo ezikhululekile (NURBS)
summary: Amajika nezindawo ezibushelelezi zamashelu omkhiqizo, izimoto nezingaphansi kwemikhumbi — loft, sweep, amanethiwekhi amajika, amaphedi ezinhlangothi ezine, ama-blend, ama-trim — nokuqhubeka kwe-G0, G1 ne-G2 kulinganiswa ezindaweni ezinembile, ama-solid anokuhlanganisa, ukusika nokuhlukanisa, imibono ye-zebra nokugoba, izindawo ezilingana nesikeni nephutha lazo elilinganisiwe, kanye namafayela e-STEP noma e-IGES.
keywords: nurbs, scan, reverse engineering, fit, mesh to surface, point cloud, stl, trim, trimmed, hole, cut, solid, solids, boolean, union, subtract, intersect, difference, sew, closed, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, ikhwalithi A
from: 09887405
---

Ipaneli ye-**Surfaces** yenza amajika nezindawo ezibushelelezi zohlobo olusetshenziswa ekwakheni amashelu omkhiqizo, izimoto nezingaphansi kwemikhumbi: NURBS, izibalo ezifanayo nalezo ezisetshenziswa abanye abenza amamodeli ezindawo. Konke kulinganiswa ezindaweni ezinembile, hhayi ezinxantathwini ozibonayo. Usayizi kule paneli uku-**millimetres**, nanoma iyiphi iyunithi imodeli ibonisa.

Yivule kusuka ephaneleni lesokudla: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Imodeli esinezindawo ivula kuyo lodwa.

## Indlela umyalo osebenza ngayo

1. Cindezela umyalo (isibonelo **Loft**). Ipaneli ikutshela okudingayo: amaphoyinti, amajika, umphetho wendawo noma isiphetho sejika.
2. Yikhethe: chofoza kuzo ku-3D view, noma cindezela **Pick** (noma izinkinobho zomphetho nesiphetho) eduze kwengxenye ngayinye kuhlu. Ukuze uthole umphetho, chofoza eduze kwalowo mphetho wendawo.
3. Hlola izinketho (degree, tolerance, continuity, …) bese ucindezela **Make**.

Amajika avela kumaphoyinti athathwa njengamaphoyinti athayiphwe eyodwa emugqeni ngamunye (`x, y, z` ngo-mm), noma **Pick points in the view**: ukuchofoza ngakunye kusebenzisa ukubamba okufanayo njengamathuluzi okudweba; cindezela <kbd>Enter</kbd> noma chofoza kabili ukuqeda, <kbd>Esc</kbd> ukuyeka.

## Amajika

- **Curve through points** idlula kuwo wonke amaphoyinti. **Curve by control points** ilandela ikheji lamaphoyinti kunalokho.
- **Insert knot**, **Raise degree** no **Lower degree** zishintsha indlela ijika elichazwa ngayo ngaphandle kokulinyanisa (ukwehlisa kuyenqaba uma ijika lingahamba ngaphezu kwe-tolerance). **Rebuild curve** iliphatha inani elisha lamaphoyinti okulawula bese isho ukuthi lihambe kangakanani.
- **Match curve** yenza isiphetho sijika sihlangane nesesinye nge-G0 (ukuthintana), G1 (indlela efanayo) noma G2 (nokugoba okufanayo). **Blend curve** yengeza ijika elisha phakathi kweziphetho ezimbili.
- **Join curves** no **Split curve**.

## Izindawo

- **Loft** phakathi kwamajika amabili noma ngaphezulu, **Ruled surface** phakathi kwamabili, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** ihambisa iphrofayili ngomzila ingayikhotheli, **Sweep along two rails** igcina iziphetho zephrofayili kuzo zombili izindikwa. Ama-sweep ayalinganiswa: umugqa wesimo utshela ukuthi uhambe kanjani eduze nesweep yangempela.
- **Surface from a curve network** idlula kukhiye wamajika (okokuqala okukhethiwe yiziphrofayili, okunye yimiyalelo). **Patch from four edges** igcwalisa amajika amane ahlangana ezikhoneni zawo.
- **Match surface** yenza umphetho wendawo uhlangane nomakhelwane nge-G0, G1 noma G2; **Blend surface** yengeza indawo phakathi kwemiphetho emibili.
- **Offset surface**, **Extend surface** (indawo iqhubeka njengoba yayihamba), **Rebuild surface**, kanye nama-knot nama-degree wezindawo.

## Ukuhlola ikhwalithi

Ithebula **Shared edges** lidweba yonke imiphetho okwabelana ngayo izindawo ezimbili, ngesikhala (mm), i-engeli phakathi kwazo (°), ukuqhuma kokugoba (1/mm), kanye nokuthi lokho kuyenza i-G0, G1 noma G2. Umphetho ongaphansi kwalokho ocelile uphinde ube ku-**Problems** (inkinobho ye-⚠ kubha yohlelo) ne-fix ethi **Match**.

**Show as** › **Zebra stripes** no **Curvature (Gaussian)** zivela endaweni eyiyo: izinkanyezi ezigijima zingaphuli uma uwela umphetho zisho G1; izinkanyezi ezigcina nobubanzi bazo zisho G2. Ukugoba kuluhlaza okwesibhakabhaka lapho indawo iyisixhobo se-saddle, kuluhlaza lapho iyisigaxa, kumhlophe lapho iyisicaba. **Control points** idweba amanethiwekhi okulawula.

Ama-G0–G2 alinganiswa emaphointini angu-33 ngomphetho ngamunye. **G3 nekhwalithi "class A" azilinganiswa** futhi aziphakanyiswa.

## Sika indawo

Iqembu le-**Trim** lisika indawo ingashintshi ukwakheka kwayo: indawo igcina zonke amaphoyinti ayo okulawula, futhi kubonakala, kubalwe futhi kubhalwe kuphela ingxenye ngaphakathi kwesimo. **Trim to a rectangle** no **Trim with a circle** zisebenza ngesabelo (0 kuya ku-1) sendawo ngayinye ngayinye, ngakho azidingi ukukhethwa embonweni; **Trim by a curve** ithatha ijika elivaliwe elisendaweni (liprojectwa ngaphakathi kwendawo, futhi limelwa ngamagama uma livuliwe noma likude ngaphezu kwe-tolerance). Ukhethe **Cut a hole** ukuze ususe ingaphakathi kwesimo; uyishiye ingakhethwanga ukuze ugcine ingaphakathi kuphela. Indawo ingaba nesimo esisodwa esigcinwayo nanoma yiziphi izimbobo; isimo esidlula esinye singenqatshwa. **Remove the trim** ibonisa indawo yonke futhi. Imiphetho esikiwe ilandela isimo ngokunembile; i-Undo yepaneli ibuyisela i-trim njengesinye isinyathelo.

I-STEP ithwala i-trim njengemingcele yobuso be-IGES njengendawo esikiwe (entity 144); bobabili bayayifunda.

## Ama-solid nama-Boolean

Iqembu le-**Solids** lishintsha izindawo zibe imizimba evaliwe futhi liyihlanganise. I-solid lapha yisethi yezindawo zephaneli ezivala ivolumu ndawonye; ubuso bayo bugcina kuyi-NURBS enembile ngama-trim abo.

- **Box solid**, **Cylinder solid** ne-**Sphere solid** zenza eyodwa kusuka kusayizi obhalwe (ngo-mm): ibhokisi lobuso obucaba eziyisithupha, isilinda sohlangothi oluzungezile kanye nezinhlangothi ezimbili ezicaba ezisikwe isiyingi, insimbi eyodwa evuselelwe.
- **Solid from surfaces** ihlanganisa izindawo owezenzele wena. Zikhethe, noma ungakhethi lutho ukusebenzisa zonke izindawo ezibonisiwe ezingekho ku-solid. Zishelelwa ndawonye ngaphakathi kwe-tolerance: uma zingavaleki, akukho okushintsha futhi iphaneli ithi imiphetho emingaki ivulekile nokuthi kufanele zihlangane kanjani eduze.
- **Union**, **Subtract** (i-solid yesibili ithathwa ku-solid yokuqala) ne-**Intersect** (kuphela okwabelwana ngakho kokubili) zithatha ama-solid amabili: chofoza ubuso ngabunye embonweni, noma cindezela **Pick** kuhlu lwe-**Solids**. Khetha **Keep the two solids** ukuze uwagcine eceleni komphumela.

I-Boolean igcina zonke izinhlangothi endaweni yazo enembile futhi iyisike ngemiphetho emisha ye-trim endaweni yokuhlangana. Umugqa womphumela unikeza izibalo ezilinganisiwe: ukuthi amaphoyinti e-solid engine adinge ukuhamba kangakanani ukuze ahlale ezindaweni ezinembile (akulokhu ngaphezu kwe-tolerance), ukuthi amaphoyinti okuhlangana aseduze kangakanani nazo zombili izindawo (ngokuvamile amamicron ambalwa), ivolumu, nokuthi izinhlangothi ezintsha ziyavala yini uma zihlanganiswa kabusha ngezindawo zazo ezinembile. Ivolumu ilinganiswa ezinxantathwini ngaphakathi kwe-tolerance (0.05 mm uma ungasethi enye), ngakho ivolumu ye-sphere noma isilinda ifunda kancane kunaleyo enembile: i-tolerance encane isondela kakhulu. I-Boolean engenzeki ngokucacile (ama-solid awanalutho ahlanganyelwe, umugqa wesimo uzozibhoka) iyenqatshwa ngamagama futhi ayishintshi lutho. I-Boolean eyodwa ingumyalo owodwa we-**Undo** yepaneli.

Ohlwini lwe-**Solids**, **Ungroup** igcina izinhlangothi njengezindawo ezijwayelekile; i-bin isusa i-solid nezinhlangothi zayo.

**Add to the model** (ohlwini lwe-**Solids**) ifaka ikhophi ye-solid emodelini njengeqembu elilodwa elivaliwe, izinhlangothi zalo zibe amanxantathu ngaphakathi kwe-0.05 mm, ngesinyathelo esisodwa se-Undo yemodeli. Khona-ke isebenza no-**Union**, **Subtract** ne-**Intersect** zemodeli, nokusunduzwa/ukuhudulwa, nokuhlola kokuprinta nge-3D; i-solid enembile ihlala kuphaneli.

## Ama-fillet nokujiya

**Fillet between faces** igoqa umphetho lapho izinhlangothi ezimbili zesolid eyodwa zihlangana: khetha izinhlangothi ezimbili (embonweni, noma nge-**Pick** ohlwini), uthayipha **radius** nokuthi, uma irediyasi ishintsha ngomphetho, **radius at the end** (0 igcina irediyasi eyodwa). Ibhola lale rediyasi liqhutshwa ngomphetho lithinta zombili izinhlangothi; i-fillet iyi-arc yesekethe enembile etholakala kuyo yonke indawo, ihlanganiswe ibe indawo eyodwa, futhi izinhlangothi zombili zisikwa lapho ibhola lithinta khona. Umphetho wangaphandle ulahlekelwa izinto, ikhona langaphakathi liyazuza. Umugqa womphumela unikeza okulinganisiwe: ukuthi indawo ye-fillet ikude kangakanani nebhola eligingqayo phakathi kwamaphoyinti ayakhelwe kuwo (amaphoyinti engezwa kuze kube ngaphakathi kwekota ye-tolerance), i-engeli enkulu phakathi kwe-fillet nakuyo yonke inhlangothi ngomugqa wokuthinta, nezinombolo ezifanayo nezeUnion. Irediyasi engalingani (ibhola lingashiya inhlangothi, noma inhlangothi igoba ngokuqinile kunerediyasi) iyenqatshwa, ikhomba inhlangothi, futhi akukho okushintsha.

**Fillet several edges** igoqa imiphetho eminingi ngesinyathelo esisodwa: khetha izinhlangothi ezimbili zomphetho wokuqala, bese ezimbili zomphetho olandelayo, njalo njalo (inhlangothi ingaba kwamaphayiri amaningi, isibonelo uhlangothi oluphezulu bhokisi kwamane kuwo); yonke imiphetho ithola irediyasi oyithayipha. Ukugoqwa ngakunye kusebenza ku-solid njengoba ibisekhona, bese ziyasikwa ngolandelana, ngakho i-oda aliphazamisi. Lapho imiphetho emibili egotshiwe ihlangana ekhoneni elinemiphetho ehlala ibukhali, ama-fillet amabili ayahlangana ngejika lokuhlangana (i-crease). Lapho imiphetho yangaphandle emithathu egotshiwe yezinhlangothi ezintathu ezicaba ihlangana ngerediyasi eyodwa, ikhona liyiyo i-**sphere patch** ethinta zonke ezintathu i-fillet (khipha **Corners** ukuze uthole ikhona elinecreasi); umphetho kumele ube muhle kabili kunerediyasi uma ekugcineni kwawo kokubili kuyiziKhoni ezinjalo. Umugqa womphumela ulandisa ukuthi imiphetho emingaki igotshiwe nokuthi amakhona aphumelele kanjani. Imiphetho yangaphakathi nayo ingagotshwa ndawonye, kodwa umphumela ongavali kabusha uyabikwa kuphela (umugqa uyasho), ngakho hlola.

**Thicken into a solid** inikeza indawo ukuqina: yikhethe, uthayipha i-**thickness**, bese ukhetha **Other side** ukuze ukhulise ngolunye uhlangothi. Ubuso obusukiwe bulingana nendawo futhi bulinganiswa kuyo (umugqa womphumela unikeza umehluko omkhulu kakhulu ngobukhulu); izindonga zilandela yonke imiphetho nemigqa yesimo. Uma indawo igoba ngokuqinile kunobukhulu ngalolo hlangothi, noma enye ingxenye yayo ilele iseduze kunobukhulu, iyenqatshwa, ibize indawo nendawo, futhi akukho okushintsha.

## Undo, ifayela, STEP ne-IGES

Iphaneli inayo **Undo** neyayo **Redo** (isinyathelo esisodwa ngomyalo ngamunye). Izindawo zigcinwa kufayela le-`.modelcraft` kanye nemodeli; azisiyo ingxenye ye-undo yemodeli, njengezinto zokwakha zefayela.

**STEP…** (AP242) ne-**IGES…** zigcina amajika nezindawo ngendlela ezinjalo ngokunembile (amajika nezindawo ze-B-spline, akukho okuguqulwe kube amanxantathu). Ngayinye indawo iyiyo ubuso bayo, nesikhala sayo; i-solid ibhalwa njengegobolondo elilodwa elivaliwe, umphetho ngamunye wabelwa izinhlangothi zawo ezimbili njengoba ezinye izinhlelo ze-CAD zilindele (umugqa wesimo utshela ukuthi ma-solid angaki aphumile ngalendlela). Ku-IGES i-solid efanayo ibe yi-manifold solid B-rep eyodwa (entity 186 ngegobolondo elivaliwe 514, izinhlangothi 510, amaloop 508, uhlu lwemiphetho 504 kanye nohlu lwamaphoyinti 502); i-solid enezinhlangothi ezingaxhumani emphethweni ngomphetho ngamunye ibhalwa njengezinhlangothi ezihlukene, nomugqa uyasho lokho. I-**Import…** ifunda i-solid efana nalena ibuyele njengesolid, kusuka ku-STEP nasku-IGES. Ifunda amajika nezindawo ezibhalwe ngale ndlela, namasethi amaphathi `.ccnurbs`; ama-solid e-STEP avela ezinhlelweni zabanye avulwa nge-File › Import njengama-mesh.

## Izindawo ezivela kuscan (reverse engineering)

Khetha i-mesh eskenwe emodelini (akukho okukhethiwe kusho ukuthi konke okubonisiwe), vula **Surfaces**, bese ku-**Scan** ukhetha **Fit surfaces to the scan**. Lo thuluzi lifuna **amapuleni**, **amasilinda**, **amasphere** nama-**cone** (izindawo ezingangempela ezakhiwe ngazo ingxenye eyenziwe ngomshini; umugqa ngamunye ukhombisa irediyasi noma i-half-angle eyitholile), lithola **ama-fillet** (imiphetho nezikhona ezigotshiwe: isilinda esincane noma i-sphere ehamba ithinte izinhlangothi ezimbili noma ngaphezulu, ibonisa irediyasi yayo nezinhlangothi ezihlangana nazo), **rim fillets** (i-torus: umphetho ogotshiwe lapho inhlangothi ecaba ihlangana nesilinda noma ne-cone, ibonisa irediyasi yayo nerediyasi yesiyingi), kanye ne-**variable fillets** (umphetho ogotshiwe onerediyasi eshintsha ngawo, ibonisa irediyasi kuwo wonke omabili), ifake **indawo eyodwa ekhululekile** kuyo ibushelelezi, ihlakazekile kancane, bese isika yonke inhlangothi ibe umphetho wengxenye yesikeni okuvela kuyo, ngakho izimbobo nezikhona ziyahlala. Izinketho: i-**tolerance** (kude kangakanani, ngo-mm, isikeni ingaba kuyo ipuleni noma kusilinda futhi isaba yalo, nenjongo yendawo ekhululekile), **smallest piece** (isabelo sendawo) kanye ne-**most faces**. Ikeni efanayo nezinketho ezifanayo zinikeza izinhlangothi ezifanayo nsukuzonke.

Umphumela uyithebula, umugqa owodwa ngensizakalo: uhlobo lwayo, inani lamanxantathu ayivela kuwo, nephutha **elilinganiswe kusuka esikeni kuya kuhlangothi** (i-rms, enkulu kakhulu, nesabelo samaphoyinti angaphakathi kwe-tolerance). Amaphoyinti alinganiswayo ngamaphoyinti esikeni nasemaphakathi ngamanxantathu ngamanye. Iphutha alilinganiswa ngendlela enye (kusuka kuhlangothi kuya kuskeni), ngakho indawo engaphuma ngaphaya kwesikeni ngeke ibonakale. Inothi ngaphansi kwethebula liphinda litshele ukuthi yingakanani indawo engafakeki ngoba incane kakhulu. Embonweni, amaphoyinti eskeni ayakhethwa ngombala ngemapu yawo wokuphambuka: luhlaza okwesibhakabhaka endaweni, luhlaza phakathi kuya ku-tolerance, bomvu ku-tolerance noma ngaphezulu (khipha **Show the deviation map** ukuyifihla). Izingcezu ezigoqeka ziyazibheka (njengethyubhu evaliwe efakwe ngezindawo ezikhululekile, isibonelo) ziyadwetshwa njengezingafakiwe, ngaphandle kokuphoqwa zibe indawo eyodwa.

**Stitch the surfaces to a solid** ihlanganisa zonke izindawo ezibonisiwe ezingekho ku-solid zibe i-solid eyodwa evaliwe. Izinhlangothi zeskeni zihlangana kuphela ngaphakathi kephutha lesikeni ngokwalo, ngakho ilinga ibanga elincane kakhulu lokuhlangana elivalayo (lingaphezu kwe-**stitch distance** oyisethayo) futhi inqaba ngamagama uma izinhlangothi zingavali. Ayikaze ilungise igebe. Ibhokisi elinemiphetho egotshiwe liyahlanganiswa uma ama-fillet alo atholakala njengezinhlangothi zalo, futhi ibanga lokuhlangana eliyivale liku-umphumela. I-solid bese isebenza no-Union, Subtract, Intersect nakwi-**Add to the model**.

Okungayenzi: i-**rim fillet** (i-torus) ifunwa kuphela ezungeze i-axis yesilinda noma i-cone esele itholakele, ne-**variable fillet** kuphela ngomphetho ocaba kancane (imigqa yawo isikwa isikwele kuyinye indlela); kwezinye izindawo ziphuma njengama-patch ekhululekile uma ebushelelezi ngokwanele futhi zishiywe uma kungenjalo; izindawo ezinhle, ama-cone nama-fillet atholakala ngokukhetha ngokungahleliwe, ngakho ezincane kakhulu (ezimbalwa zamanxantathu) zingaphuthelwa; imephu yokuphambuka ibonisa ibanga kusuka eskeni kuya ezindaweni, hhayi kwelinye uhlangothi; amaskeni amakhulu kakhulu (ngaphezu kwamanxantathu angu-300,000) enqatshwa lapha. Izinhlangothi zesilinda esigcwele ukugoqa zisikwa ngokuzungeze izimbobo, nomshini wokuhlanganisa ubekwe lapho kungekho mbobo. Hlola yonke inhlangothi ngeskeni lakho ngaphambi kokuthembela kuyo.

## Akukakwakhiwe

Ukugoqa imiphetho ehlangana ekhoneni lezindawo ezigobile noma ngamarediyasi ahlukene (i-vertex blend), i-fillet phakathi kwezinhlangothi ezingahlanganiyo, i-fillet yangaphakathi ephela esicabeni esithambekile noma esigobile, nama-Boolean kanye nama-fillet ebalwa ezindaweni ngaphandle kwamanxantathu (lapha injini ye-solid isebenza ngamanxantathu angaphakathi kwe-tolerance, bese kulandela ukubuyiselwa kwamaphoyinti ezindaweni ezinembile).
