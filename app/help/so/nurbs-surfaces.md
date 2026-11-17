---
title: Dusha bilaa qaab (NURBS)
summary: Khadad iyo dusha jilicsan oo loogu talagalay qolofyada alaabta, jidhka baabuurka iyo qolofyada doonta — loft, sweep, shabakadaha khadadka, daboolka afar-geesood, isku-darka, jarka — iyo G0, G1 iyo G2 oo lagu cabbiray dusha saxda ah, jidhad leh isgeyn, ka jar iyo isgoys, aragga zebra iyo curvature, wajiyo lagu habeeyay scan iyo khaladkiisa la cabbiray, iyo faylalka STEP ama IGES.
keywords: nurbs, scan, reverse engineering, fit, mesh to surface, point cloud, stl, trim, trimmed, hole, cut, solid, solids, boolean, union, subtract, intersect, difference, sew, closed, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a
from: 09887405
---

**Dusha** panel-ka wuxuu sameeyaa khadad iyo dusha jilicsan oo nooca loo isticmaalo qolofyada alaabta, jidhka baabuurka iyo qolofyada doonta: NURBS, isla xisaabta ay isticmaalaan dhismeyaasha dusha kale. Wax walba waxaa lagu cabbiraa dusha saxda ah, weligeed ma aha saddex-geesaha aad aragto. Cabbirrada panel-ka waa **millimitir**, ayay muujisaa moodeelku unug kasta.

Ka fur bar-ka midig: {{ui:Dusha}} › {{ui:Fur guddiga Dusha}}. Moodeel horey u leh dusha ayaa isla gaarkiisa furmaya.

## Sida amarku u shaqeeyo

1. Riix amar (tusaale ahaan **Loft**). Panel-ku wuxuu sheegayaa waxa uu wali u baahan yahay: dhibic, khad, geesta dusha ama geesta khadka.
2. Dooro: guji iyaga muuqaalka 3D, ama riix **Dooro** (ama badhamada geesta iyo dhamaadka) ee ku xigta mid kasta liiska. Geesta, guji meel u dhow geesta dusha.
3. Hubi ikhtiyaarrada (darajada, cidhibta, isku-xidhka, …) kadibna riix **Samee**.

Khadadka laga sameeyo dhibcaha waxaa la siiyaa dhibcaha hal sadar oo kasta (`x, y, z` mm), ama **Dooro dhibcaha muuqaalka**: guji kasta wuxuu isticmaalaa isla isku-xidhka qalabka sawirka; riix <kbd>Enter</kbd> ama laba-jibbaar si aad u dhammaysato, <kbd>Esc</kbd> si aad u joogsato.

## Khadad

- **Khad dhibcaha ku dhex mara** wuxuu mar kasta dhibic walba ku dhex mara. **Khad iyo xadhig-xadhig** waxay raacaa qaab dhibcaha xadhigga ah.
- **Geli koorka**, **Kor u qaad darajada** iyo **Hoos u dhig darajada** waxay beddelaan sida khadka loo qeexo iyada oo aan la dhaqaajin (hoos u dhigidda waa diidaa haddii khadku uu ka dhaqaaqi lahaa cidhibta). **Dib u dhis khadka** wuxuu siiyaa tiro cusub oo xadhigyo ah wuxuuna sheegaa inta uu dhaqaaqay.
- **Isku-dheel khadka** wuxuu ka dhigaa geesta khad mid taabta geesta kale oo G0 (taabasho), G1 (isku jiho) ama G2 (sidoo kale isku qalloocan). **Samee khad isku xidh** wuxuu u dhexeeyaa laba geesood.
- **Isku-dar khadadka** iyo **Kala qaybi khadka**.

## Dusha

- **Loft** laba ama ka badan oo khad ah ku dhex mara, **Dusha toosan** labo dhexdooda, **Dusha khadka lagu fidiyo**, **Dusha khadka lagu wareejiyo**.
- **Sweep hal rail ku dhex** wuxuu qaab ku qaadaa jid iyadoo aan la lalaabin, **Sweep laba rail ku dhex** wuxuu ilaaliyaa geesaha qaabka labada rail-ka dhexdood. Sweep-yada waa la habeeyay: khadka xaaladda wuxuu sheegayaa inta ay ku dhowaatay sweep-ka runta ah.
- **Dusha shabakad khadadka ka** wuxuu ku dhex mara shabakad khadadka (dooradda koowaad waa qaabka, kuwa kale waa hagayaasha). **Daboolka afar geesood** wuxuu buuxiyaa afar khadad oo isku dhacaya geesahooda.
- **Isku-dheel dusha** wuxuu ka dhigaa geesta dusha inay taabato deriska G0, G1 ama G2; **Samee dusha isku xidh** wuxuu u dhexeeyaa laba geesood dusha.
- **Dusha ka-dheelo**, **Fidi dusha** (dusha way sii socotaa sida ay socotay), **Dib u dhis dusha**, iyo koorka iyo darajada dusha.

## Hubinta tayada

Miiska **Geesaha wadaagga ah** wuxuu liistaa geesaha laba dusha wadaagaan, iyadoo leh furitaanka (mm), xagasha u dhexaysa (°) iyo kor-u-kacida qalloocanka (1/mm), iyo haddii taasi ka dhigayso G0, G1 ama G2. Geesta ka xun intaad codsatay waxaa sidoo kale ku jira **Dhibaatooyinka** (badhanka ⚠ app bar-ka) oo leh hagaajin **Isku-dheel**.

**Muuji sida** › **Xariiqyada zebra** iyo **Curvature (Gaussian)** waxay ka yimaadaan dusha saxda ah: xariiqyadu si aan jajab lahayn ugu dhex maraan geesta waxay ka dhigan yihiin G1; xariiqyada kuwaas oo ballaadhintooda ilaalinaya waxay ka dhigan yihiin G2. Curvature waa buluug meesha dusha ay tahay saddle, casaan meesha ay tahay qubbad, cad meesha ay siman tahay. **Barta xakamaynta** wuxuu sawiraa shabakadaha xakamaynta.

G0–G2 waxaa lagu cabbiraa 33 dhibcood geesta kasta. **G3 iyo tayada "class A" lama cabbiro** mana sheegno.

## Jarka dusha

Kooxda **Jarka** wuxuu jaraa dusha isaga oo aan beddelin qaabkiisa: dusha wuxuu haya dhammaan xakamaynta dhibcaha, waxaana kaliya lagu muujiyaa, lagu tiriyaa, lagu qorayaa qaybta ku jirta geesta. **Jar gudaha laydh** iyo **Jar goobo** waxay shaqeeyaan wadaagga (0 ilaa 1) ee dusha jihada kasta, sidaas darteed ma u baahna dooro muuqaalka; **Jar khad** wuxuu qaadaa khad xidhan oo ku jira dusha (waa la mashruuciyaa dusha gudaheeda, waana la diidaa haddii ay furan tahay ama ka fog tahay cidhibta). Calaamadee **Jar hal godad** si aad u tirtirto gudaha geesta; ka tag madhan si aad u hayso gudaha keliya. Dusha wuxuu haysan karaa hal geesood oo la hayo iyo godad badan; geesood ku dhex jaranaya mid kale waa la diidaa. **Ka saar jarka** wuxuu mar kale muujiyaa dusha oo dhan. Geesaha jarka ah waxay raacaan geesta si saxda ah; Ka noqo ee panel-ka waxaa lagu qaadaa jarka sida tallaabo kasta.

STEP wuxuu qaadaa jarka sida xadka wejiga, IGES na sida dusha la jaray (entity 144); labadaba way akhriyaan.

## Jidhadka iyo Boolean

Kooxda **Jidhka** waxay dusha u beddeshaa jidh xidhan oo isku darta. Jidh halkan waa set dusha panel-ka oo gaar ah oo wada xidha mugga; wejiyadiisu waxay ahaanayaan dusha NURBS oo saxda ah oo leh jarkooda.

- **Sanduuqa jidhka**, **Silinda jidhka** iyo **Kuraha jidhka** waxay sameeyaan mid cabbirro la qoray (mm): sanduuq oo lix wajiyo siman, silinda oo dhinac wareegsan iyo labo dhamaad siman oo lagu jaray goobada, kuraha dusha wareeg hal mar lagu rogay.
- **Jidh dusha ka** wuxuu kooxeeyaa dusha aad adigu sameysay. Dooro, ama ha dooran si aad u isticmaasho dhammaan dusha muuqda oo aan weli jidh ku jirin. Waa la isku xidhaa cidhibta: haddii aysan xidhmin, waxba ma beddelmo, panel-kuna wuxuu sheegayaa inta geesood ay furan yihiin iyo sida ay u dhow yihiin ay isku xidhmaan.
- **Isku geyn**, **Ka jar** (jidhka labaad waa laga qaadaa kan koowaad) iyo **Isgoys** (kaliya waxa labaduba wadaagaan) waxay qaadaan laba jidh: guji wejiga mid kasta muuqaalka, ama riix **Dooro** liiska **Jidhka**. Calaamadee **Hay labada jidh** si aad uga tagto dhinac natiijada.

Boolean wuxuu wejiga kasta ku hayaa dusha saxda ah ee u gaar ah, wuxuuna jaraa jarka cusub oo ku salaysan isgoysiga. Khadka natiijadu wuxuu siiyaa tirooyinka la cabbiray: intee in le'eg ayay dhibcaha injineriyada jidhka u baahdeen inay ku dhex-dhacaan dusha saxda ah (weligeed ma ka badan cidhibta), intee le'eg ayay dhibcaha isgoysiga u dhow yihiin labada dusha (badanaa dhowr boqolkiiba oo millimitir), mugga, iyo haddii wejiyada cusub mar kale isku xidhmaan markii dib loo xidho dusha saxda ah. Mugga waxaa lagu cabbiraa saddex-geesood cidhibta dhexdeeda (0.05 mm haddii aadan dooran kale), sidaas darteed mugga kubbad ama silinda wuxuu ka akhrisanayaa kan saxda ah wax yar: cidhib yar ayaa dhow. Boolean aan si nadiif ah loo samayn karin (jidhadku waxba ma wadaagaan, jarku wuu isgoysan lahaa) waa la diidaa oo waa la sheegaa, waxna ma beddelo. Boolean hal ayaa tallaabo ka mid ah panel-ka **Ka noqo**.

Liiska **Jidhka** dhexdiisa, **Ka furi** wuxuu wejiyada ka dhigaa dusha fudud; mashiinka qashinka wuxuu jidhka iyo wejiyadiisa tirtiraa.

**Ku dar moodeelka** (liiska **Jidhka**) wuxuu koobi ka dhigaa jidhka moodeelka sida koox xidhan oo keliya, wejiyadiisu waa saddex-geesood cidhibta 0.05 mm dhexdeeda, hal tallaabo oo Ka noqo moodeelka. Kadibna wuxuu la shaqeeyaa **Isku geyn**, **Ka jar** iyo **Isgoys** ee moodeelka, riix-jiid iyo hubinta daabacaadda 3D; jidhka saxda ah wuxuu ku sii jiraa panel-ka.

## Jilicsanaynta iyo qaro-yeelka

**Gees-ku-xidhka ka dhexeeya wajiyada** wuxuu wareejiyaa geesta ay laba wejiyo jidh kulmaan: dooro laba wejiga (muuqaalka, ama **Dooro** liiska), geli **radius** iyo, haddii radiusku isbedelo geesta dhexdeeda, **radius dhamaadka** (0 wuxuu ilaalinayaa hal radius). Kubbad radiuskaas ah ayaa loo rogaa geesta isla markaana taabta labada wejiba; gees-ku-xidhku waa qaansada goobeed ee saxda ah ee ay ka dhigto nuqad kasta, ee la isku xidho hal dusha, labada wejina waa la jaraa meesha kubbadu taabato. Geesta dibadda waxay lumisaa walxo, geesta gudaha ee xagasha ayaa helaysa. Natiijada khadku wuxuu sheegayaa waxa la cabbiray: intee ka fog ayuu gees-ku-xidhku ka yahay kubbadii la rogayay inta u dhaxeysa dhibcaha laga dhisay (dhibcaha waa lagu daraa ilaa ay ku jirto rubuc cidhibta), xagasha ugu weyn ee u dhaxaysa gees-ku-xidhka iyo wejiga kasta khadka taabashada, iyo tirooyinka isku mar ah sida Isku geyn. Radius aan ku habboonayn (kubbadu ka bixi lahayd wejiga, ama wejiga uu ka qalloocan yahay radiuska) waa la diidaa, magaca wejiga la sheegayo, waxna ma beddelo.

**Gees-ku-xidh geesaha badan** wuxuu wareejiyaa geesaha badan hal tallaabo: dooro laba wejiga geesta koowaad, kadibna laba wejiga geesta xigta, iyo kuwa kale (wejiga wuxuu ku jiri karaa lammaano dhowr ah, tusaale ahaan wejiga sare ee sanduuqa afar ka mid ah); dhammaan geesaha waxay helaan radiuska aad qortay. Wareejinta kastaa waxa lagu soo saaraa jidhka sida uu ahaa, kadibna waa la jaraa mid mid, sidaas darteed amarka ma muhiimka. Meelaha laba geesood oo wareegsan ay isku kulmaan geesaha kale ee adag, gees-ku-xidhka ayaa isku dhaca khadka isgoysiga (laga yaabo inuu isu soo dhowaado). Meelaha saddex geesood oo wareegsan oo saddex wejiyo siman isku kulmaan oo radius isku mid ah leh, geesta waxay noqotaa hal **sphere patch** taabta saddexdaas gees-ku-xidh; ka saar **Geeska** si aad u hesho geesta adag ee dillaacday (geesta waa in ay ahaataa ugu yaraan laba jibbaar radiuska dhererkeeda meelaha labada dhamaadka geeskaas. Natiijada khadku wuxuu sheegayaa inta geesood ee la wareejiyay iyo sida geeskuna u soo baxay. Geesaha gudaha ayaa sidoo kale la wareejin karaa wadaag, laakiin natiijada aan mar kale xidhmin waxaa kaliya la sheegaa (khadku wuu sheegayaa), sidaas darteed hubi.

**Ku dhex-dhig jidh** wuxuu dusha siiyaa qaro: dooro, geli **qaro** kadibna calaamadee **Dhinaca kale** si aad u kordhiso dhinac kale. Wejiga kor u kacay waa la qaabeeyay oo waa la cabbiray dusha ka dhan (khadka natiijadu wuxuu siiyaa farqiga ugu weyn ee qaroo); darbiyadu waxay raacaan geesta kasta iyo jarka kasta. Haddii dusha uu ka qalloocan yahay qaroo ee dhinacaas, ama qayb kale oo ka mid ah uu ku dhow yahay qaroo, waa la diidaa, magaca dusha iyo goobta la sheegayaa, waxna ma beddelo.

## Ka noqo, faylka, STEP iyo IGES

Panel-ka wuxuu leeyahay **Ka noqo** iyo **Samee mar kale** gaar ah (hal tallaabo amar kasta). Dusha waxaa lagu kaydiyaa faylka `.modelcraft` iyada oo moodeelka la socda; ma ahan qayb ka mid ah ka-noqoshada moodeelka, sida agabka faylka.

**STEP…** (AP242) iyo **IGES…** waxay kaydiyaan khadadka iyo dusha sida ay yihiin (xadhigyada B-spline iyo dusha, waxba looma beddelin saddex-geesood). Dusha kasta waa wejigeeda, leh jarkeeda; jidhka waxaa loo qoraa hal shell xidhan, geesta kasta oo labada wejiyo wadaagaan, sida ay u rabaan barnaamijyada CAD ee kale (qoraalka xaaladdu wuxuu sheegayaa jidhadka inta la dhoofiyay sidaas). IGES-ka jidhka isku mid waa hal B-rep jidh manifold ah (entity 186 oo ku xidhan shell xidhan 514, wejiyo 510, loops 508, hal liis geesood 504 iyo liis dhibcood 502); jidh aan wejiyadiisu si geesood ahaan u isku dhicin waa la qoraa wejiyo gooni ah, khadku wuu sheegaa. **Soo dhoofi…** wuxuu akhriyaa jidh sida jidh, STEP-ka iyo IGES-ka labadaba. Wuxuu akhriyaa khadad iyo dusha oo sidaas loo qoray, iyo kooxyada `.ccnurbs`; jidhadka STEP ee barnaamijyada kale waxay ku furmaan File › Import sida meshes.

## Dusha ka scan-ka (reverse engineering)

Dooro mesh-ka la scan-gareeyay moodeelka (haddii waxba la doorto, waa wax kasta oo la muujiyay), fur **Dusha**, kadibna kooxda **Scan** dooro **Ku habee dusha scan-ka**. Qalabku wuxuu raadiyaa **diyaaradaha**, **silinderrada**, **kubbadaha** iyo **konsyada** (dusha saxda ah ee qaybta shaqaysan ka samaysan tahay; safka kastaa wuxuu muujiyaa radiuska ama nus-xagasha uu helay), wuxuu helaa **gees-ku-xidhyada** (geesaha iyo geesaha wareegsan: silinder yar ama kubbad yar oo taabta laba ama in ka badan wejiyo kale, lagu muujiyay radiuskeeda iyo wejiyada ay isku xidhayaan), **gees-ku-xidhyada geesha** (torus: geesta wareegsan ee wejiga siman uu kulmo silinder ama koon, lagu muujiyay radiuskeeda iyo radiuska giraanta) iyo **gees-ku-xidhyo doorsoon** (geesta wareegsan ee radiuskeeda uu isbedelo geesta dhexdeeda, lagu muujiyay radiuska dhamaan labada dhamaadka), wuxuu ku habeeyaa **hal qayb dusha bilaa qaab** qayb jilicsan oo khafiif ah, wuxuuna jaraa wejiga kasta jihada qayb scan-ka uu ka yimid, sidaas darteed godadka iyo geesaha way ilaalisaa. Ikhtiyaarrada: **cidhibta** (intee le'eg mm ayuu dhibic scan-ka ka fogaan karaa diyaaradda ama silinderka oo wali uu ka mid yahay, iyo bartilmaameedka qaybta bilaa qaab), **qaybta ugu yar** (qayb ka mid ah dusha dhulka) iyo **wejiyada ugu badan**. Scan-ka iyo ikhtiyaarradaas isku mar had iyo jeer waxay soo saaraan wejiyo isku mid ah.

Natiijadu waa miis, hal safka wejigiiba: nooceeda, inta saddex-geesood ay ka timid, iyo khaladka **laga cabbiray scan-ka wejiga** (rms, kan ugu weyn, iyo qaybta dhibcaha ku jira cidhibta). Dhibcaha la cabbiray waa dhibcaha scan-ka iyo dhexda saddex-geesood kasta. Khaladka lama cabbiro dhinaca kale (wejiga ilaa scan-ka), sidaas darteed dusha ka fog scan-ka ma muuqan doono. Qoraalka hoose miiska ayaa sidoo kale sheegaa inta dhulka ay ahayd mid yar oo aan lagu habayn karin. Muuqaalka, dhibcaha scan-ka waxaa midabeeyay **khariidadda kala-duwanaanshaha**: buluug wejiga dushiisa, cagaar nus-jid cidhibta, casaan cidhibta ama ka badan (ka saar **Muuji khariidadda kala-duwanaanshaha** si aad u qariso). Qaybaha isu-soo-noqda (tiyuub la xidhay oo lagu habeeyay dusha bilaa qaab, tusaale ahaan) waxaa lagu liistaa inaan la habeyn, weligeed looma qasbo dusha mid.

**Dusha ku-xidh jidh** wuxuu isku dhejiyaa dusha kasta oo la muujiyay oo aan jidh ku jirin jidh xidhan oo keliya. Waxay isku xidhaan cidhibta: dusha scan-ka wuxuu isku taabtaa oo keliya khaladka scan-ka laftiisa, sidaas darteed wuxuu isku dayaa masaafada isku xidhka ugu yar ee xidha (weligeed kan ugu badan ee aad dejiso **masaafada ku xidhka**) wuxuuna diidaa qoraal ahaan marka wejiyadu aan xidhmin. Ma sameeyo godad; ka dibna jidhka waxaa lagu shaqeeyaa Isku geyn, Ka jar, Isgoys iyo **Ku dar moodeelka**.

Waxa aan sameyn: **rim fillet** (torus) waxaa loo raadiyaa oo keliya wareegga silinder ama koon horey loo helay, iyo **variable fillet** oo keliya geesta toos u ah (qaybaha ayaa laga jaraa hal jihada si toos ah); meelaha kale waxay ku soo baxaan sida daboolyo dusha bilaa qaab markii ay siman yihiin, waxaana laga reebaa markii kale; kubbadaha, konsyada iyo gees-ku-xidhyada waxaa la helaa iyada oo la isticmaalayo tusaale aan kala-saarnayn, sidaas darteed kuwa aad u yar (dhowr saddex-geesood) way lumi karaan; khariidadda kala-duwanaanshaha waxay muujisaa masaafada ka scan-ka ilaa wejiyada, ma aha dhinaca kale; scan-ka aad u weyn (ka badan 300,000 saddex-geesood) waa la diidaa halkan. Wejiyada silinder wareeg buuxa ah waxaa lagu jaraa godadka ku wareegsan, ilkaha waxaa la dhigaa meel aan godad ku jirin. Hubi wejiga kasta scan-kaaga ka hor intaadan ku tiirsanaan.

## Weli lama dhisin

Geesaha isku dhaca geesaha dusha wareegsan ama leh radiuska kala duwan (isku-xidhka dhibcaha), gees-ku-xidh laba wejiyo aan isku taabanin, gees-ku-xidh gudaha oo ku dhammaysa wejiga xagasha ama wareegsan, iyo Boolean-ka iyo gees-ku-xidhyada lagu xisaabiyo dusha aan saddex-geesood lahayn (halkan injineriyada jidhka wuxuu ka shaqeeyaa saddex-geesood cidhibta dhexdeeda, dhibic walbana ayaa markaas dib loogu celiyaa dusha saxda ah).
