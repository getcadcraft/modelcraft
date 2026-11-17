---
title: Amafomethi wefayela ngokuningiliziwe
summary: Okugcinwa, okuguqulwa nokushiywa yi-ModelCraft kuyo yonke ifomethi evulayo, engenisayo nethumelayo.
keywords: amafomethi, izinhlobo zamafayela, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, amayunithi, ama-axis, y phezulu, z phezulu, amamillimitha, imikhawulo
from: c47d2d28
---

Imodeli ye-ModelCraft ingamamitha, ne-Z (eluhlaza okwesibhakabhaka) iphezulu. Yonke ifomethi engezansi iguqulwa iye noma ivela kulokho.

## ModelCraft (.modelcraft)

| Okuthi | Imininingwane |
|---|---|
| Vula | {{ui:Vula}} ({{key:Mod+O}}) noma wehlise kokubukwayo. Amafayela aphelelayo nge-`.json` nawo amukelekile |
| Londoloza | {{ui:Londoloza}} ({{key:Mod+S}}), njengokulanda |
| Igcina | Konke: ijiyomethri, ubuso nemibala yabo, impahla yokwakha nezithombe ezingeniswe, amalambu, imiphetho ethambile, amaqembu, izakhi, amagama, imihlahlandlela, imiboniso, amayunithi, nekhamera nesitayela sokugcina |
| Kushiywa | Umlando wokuhlehlisa |
| Umkhawulo | 200 MB |

Ifayela elilondolozwe yi-ModelCraft entsha kunaleyo yakho liyenqatshwa: "Le modeli ilondolozwe yi-ModelCraft entsha kunaleyo (inguqulo yefayela …). Buyekeza i-ModelCraft ukuze uyivule." Ifayela elingesiyo imodeli ye-ModelCraft lithi: "Lolu hlobo lwefayela alusiyo imodeli ye-ModelCraft (alusiyo i-JSON)." noma "Lolu alusiyo ifayela le-ModelCraft esingalivula: …".

## USD (.usd, .usda, .usdc, .usdz)

Vula, ngenisa, bese {{ui:Londoloza njenge}} noma {{ui:Khipha}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Ifayela le-USD eligcinwe yi-ModelCraft livuleka futhi ngaphandle kokulahlekelwa lutho; amafayela e-USD ezinye izinhlelo avulwa njengemisheshi, amaqembu, izakhi, amalambu namakhamera. Bheka [Londoloza, vula futhi khipha i-USD](topic:usd).

## Collada (.dae)

Ukungenisa nokukhipha. Ifomethi engcono kakhulu yokushintshanisa amamodeli nabanye abenzi be-3D.

- **Khipha:** Collada 1.4.1, Z phezulu, amamitha. Ijiyomethri eyodwa ngencazelo yeqembu noma yesakhi ngalinye; izakhi zibhalwa kanye kuphela futhi zibekwa ngesethulo, ngakho zihlala zabelwana. Ubuso enemigodi noma imigqa engaphakathi ihlukaniswa ibe izinxantathu. Imibala iba impahla yokwakha. Imiphetho engaxhunyiwe ibhalwa njengemigqa. Amagama angavumelekile kule fomethi ayalungiswa, futhi igama elingokoqobo ligcinwa eduze kwawo.
- **Ngenisa:** izinxantathu, amapholigoni (anemigodi), amafeni nezintambo zezinxantathu zibe ubuso; imigqa ibe imiphetho. Ukuguqulwa kwe-node, i-axis esaphezulu yefayela neyunithi yayo kuyasetshenziswa. I-node ebekwe ezindaweni eziningi, noma ijiyomethri esetshenziswa ama-node amaningi, iza njengesakhi; ama-node avamile aza njengamaqembu. Imibala yempahla (diffuse) iba yimibala yobuso.
- **Akungeniswa:** izithombe, izikhumba nezinguquko zesimo, amakhamera, amalambu, ezinye izinhlobo zokuguqula (look-at neskew), nezinkomba kwamanye amafayela. Ibha yesimo iyazibala.
- **Kulahlekile lapho kukhishwa:** yimiphi imiphetho ethambile. **Lapho kungeniswa,** izindawo ezinxantathu zihlala zinxantathu, nedayagonali ziyathanjiswa ukuze izindawo ezicaba zibonakale njengobuso obubodwa.

## OBJ (.obj, .mtl)

Ukungenisa nokukhipha.

- **Ngenisa:** phonsa i-`.obj` kanye ne-`.mtl` yayo nezithombe zokuthungwa (noma ngenise i-`.obj` yodwa: ingena ingenampahla yokwakha, futhi ibha yesimo iqamba i-`.mtl` eyayifunwa). Ifundwa njengamamitha nge-Y phezulu. Into ngayinye (`o`, noma `g`) iba [i-mesh](topic:meshes), ubuso bayo bugcinwa njengoba bunjalo (amakhwadrangili ahlala ekhwadrangili). Izixhumanisi zokuthungwa, izinqondo nemibala ngamaphoyinti ziyagcinwa. Isithombe sombala wempahla (`map_Kd`, PNG, JPEG noma WebP) singena njengokuthungwa, nezinketho zaso zesikali nokushintshwa; uma kungenjalo, umbala waso (`Kd`). Imiphetho lapho izinqondo zefayela zephula khona iqinile; uma kungekho zinqondo, amaqembu okubushelezisa efayela ayanquma. Amanye amamephu (bump, normal), amaphoyinti, imigqa namajika ayabalwa futhi ayashiywa. I-OBJ ayinayo iyunithi, ngakho imodeli eyenziwe ngamamillimitha noma amayintshi ifika ngosayizi ongalungile: yilinganise ngemva kokungenisa (bheka [Phendula futhi linganisa](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Khipha:** amamitha, Y phezulu, izixhumanisi zomhlaba. Into eyodwa ngokubekwa kweqembu ngalinye; izakhi zibhalwa ngokugcwele endaweni ngayinye. Ama-mesh agcina ubuso bawo, izixhumanisi zokuthungwa nezinqondo; ubuso oxhunywe ngemiphetho [ethambile](topic:soften) buthola inqondo ngakunye ekhoneni. Uma imodeli inemibala, i-`.mtl` iyalandwa eduze kwe-`.obj`. Uma inezithombe zokuthungwa ezingenisiwe, i-`.obj`, i-`.mtl` nezithombe ziyalandwa ndawonye njenge-`.zip` eyodwa.
- **Umkhawulo:** amaphoyinti noma ubuso obungu-2 million; 64 MB yombhalo.

## glTF (.glb, .gltf)

Ukungenisa nokukhipha, i-glTF 2.0.

- **Ngenisa:** i-`.glb`, noma i-`.gltf` kanye ne-`.bin` namafayela esithombe sokuthungwa: wehlise konke ngesikhathi kokubukwayo (noma khetha i-`.glb`). I-`.gltf` enikezwe yodwa ibiza ifayela eliyidingayo: "Le fayela le-`.gltf` lidinga "…": vula inguqulo ye-`.glb`, noma wehlise i-`.gltf` kanye namafayela ayo."
  - **Ama-mesh** angena njenge-[mesh](topic:meshes), eyodwa ngayinye kufayela, izinqondo, izixhumanisi zokuthungwa nemibala yamaphoyinti kuyagcinwa. Imiphetho lapho izinqondo zephula khona iqinile; eyengcaphuno ithambile. I-mesh esetshenziswa ezindaweni eziningi ihlala ibelwana.
  - **Ama-node** aba ngamaqembu, anesibizo njengasefayeleni. Ama-mesh ayinkomba (EXT_mesh_gpu_instancing) angena njenge-mesh eyodwa ebekwe izikhathi eziningi.
  - **Impahla yokwakha:** ukuthungwa komumbala oyisisekelo (PNG, JPEG noma WebP) kungena njengokuthungwa, kubekwe ngezixhumanisi zokuthungwa zefayela (nanoma yiluphi ukuguqulwa kokuthungwa), futhi kuyagcinwa lapho ulondoloza; kungenjalo, umbala oyisisekelo. I-metal, ukuqina, amamephu ajwayelekile, ingilazi, i-clear coat, i-sheen nezinye izandiso zempahla ziyafundwa kodwa aziqhubeki zigcinwe: ibha yesimo iyasho lokho.
  - **Amalambu** (KHR_lights_punctual): amalambu aphuthumayo nezindawo aba [amalambu](topic:lights). Amalambu aqondile ayabalwa: ilanga likhanyisa imodeli.
  - **Amakhamera** aba [yimiboniso](topic:scenes).
  - **Abalingiswa abanesikhumba** bangena bemi njengoba efayela libeka kanjalo; amathambo abo nama-animation abo, nezinhloso zokuguquka kwesimo, ayabalwa futhi aziqhubeki zigcinwe.
  - **Amafayela acindezelwe** (Draco, meshopt) nedatha equantized ayafundwa. Abadekhoda balayisha kuphela ifayela elidinga bona.
  - Amaphoyinti nemigqa ayabalwa futhi ayashiywa (i-mesh ibamba ubuso). Izithombe ze-KTX2 ziyashiywa; ubuso bugcina umbala wabo.
- **Khipha** (`.glb`): i-glTF 2.0 binary, amamitha, Y phezulu. I-mesh eyodwa ngencazelo ngayinye, ngakho izakhi zihlala zabelwana. Ama-mesh agcina izinqondo, izixhumanisi zokuthungwa nemibala yamaphoyinti; ubuso oxhunywe [ngemiphetho ethambile](topic:soften) bunenqondo ebushelezi. Imibala nempahla kuba yimpahla yokwakha (impahla njengombala wayo); izithombe ezingeniswe zibhalwa njengokuthungwa. Amalambu avulekile aba amalambu aphuthumayo nezindawo (amalambu wendawo awanalingani ku-glTF futhi ashiywa); imiboniso iba amakhamera. Imiphetho engaxhunyiwe iyashiywa.
- **Umkhawulo:** amafayela kuya ku-300 MB; cishe izigidi eziyi-130 zamanani ejiyomethri.

## STL (.stl)

Ukungenisa nokukhipha.

- **Ngenisa:** i-binary noma i-ASCII. I-STL ayinayo iyunithi: ifundwa njengamamillimitha, njengoba abaprinta nokukhishwa kwe-ModelCraft kuyibhala ngayo. Amakhona endawo efanayo ayaxhumana, ngakho ingxenye evaliwe ifika njenge-[mesh](topic:meshes) evaliwe. Imibala efayeleni (izivumelwano ze-VisCAM / SolidView ne-Materialise) ipenda ubuso.
- **Khipha,** ukuprinta nge-3D: i-binary STL, **amamillimitha**, Z phezulu. Izinxantathu kuphela: amaqembu nemiphetho engaxhunyiwe ayashiywa. Ubuso obupeniwe bugcina umbala wabo ngesivumelwano se-VisCAM / SolidView, esinye isofthiwe esingasinaki uma singasifundi. Khipha izinto eziqinile ezivaliwe ukuze uthole ukuprinta okuhlanzekile.

## STEP (.step, .stp)

Ukungenisa kuphela. I-STEP yilokho abenzi bezingxenye nabahlinzeki abakuthumelayo: amafayela e-AP203, AP214 ne-AP242.

- **Ngenisa:** i-ModelCraft ifunda ifayela ngokwayo, ekhasini, futhi iguqule yonke into eqinile ibe [i-mesh](topic:meshes) evaliwe yezinxantathu: ubuso obucaba buhlala bucaba, ubuso ogobile (amasilinda, amakhoni, amabhola, ama-torus, ubuso be-B-spline) buba izinto eziningi ezincane ezicaba, nemiphetho ngaphakathi kobuso obugobile ibushelezi, nemiphetho phakathi kwezinhlangothi ezimbili ibukhali. Amafayela e-STEP asho iyunithi yawo; imodeli ifika ngobukhulu bayo bangempela. Umhlangano ufika nazo zonke izingxenye lapho ifayela zibeka khona, ingxenye ngayinye iyi-mesh yayo eqenjini elibizwa ngegama lefayela. Imibala, amagama ezingxenye zomthi womhlangano nokubekezelela (PMI) akufundwa.
- **Imilayezo:** okuphuthelwe noma okudwetshwe ngokungaphelele kungezelelwa emugqeni wesimo ("Notes: …"); ifayela elingenalutho oluqinile, ifayela elonakele noma elidlule imikhawulo lisho ngani futhi alengezi lutho.
- **Umkhawulo:** amafayela kuya ku-300 MB; ubuso obungu-400 000 nezinxantathu ezingu-8 million.

## .3dm

Ukungenisa kuphela. Amafayela e-`.3dm` agcina amamodeli e-NURBS: ubuso bamapholisurfesi, ubuso, ama-mesh, amajika namabhulokhi.

- **Ngenisa:** i-ModelCraft ifunda ifayela ngokwayo, ekhasini. Ama-mesh angena njengoba enjalo; bonke ubuso bepolisurfesi noma bokwelulwa buvela kusigaxa esigciniwe kanye nefayela, uma kungenjalo i-ModelCraft iyakwakha (amaplanes, ubuso be-NURBS, ubuso bokuguqulwa, amajika akhishiwe, ukukhishwa; kugoqwe ngemiphetho yabo, amapholisurfesi avaliwe njenge-mesh evaliwe). Amajika aba imiphetho, amabhulokhi aba izakhi (amabhulokhi ngaphakathi kwamabhulokhi agcinwa), izendlalelo ziba amathegi (zifihliwe uma zivaliwe), umbala wento (wayo, wesendlalelo sayo noma wempahla yayo) upenda ubuso bayo. Ifayela lisho iyunithi yalo; imodeli ifika ngobukhulu bayo bangempela. Izinyathelo ngazinye: [Ngenisa imodeli ye-.3dm](topic:import-3dm-files).
- **Imilayezo:** ibha yesimo ithi ubuso bangaki obuvela ezinhlelweni ezigciniwe nobangaki obakhiwe, futhi iqamba okushiyiwe: amaphoyinti, amafu amaphoyinti, umbhalo, izilinganiso, ama-hatch, amalambu, izinto ze-SubD, ubuso ezinhlobweni zendawo ezingakafundwa, amabhulokhi axhunyiwe.
- **Umkhawulo:** amafayela kuya ku-300 MB.

## PLY (.ply)

Ukungenisa nokukhipha, ama-mesh anemibala (ukuskena, ukuprinta nge-3D ngemibala, abenzi abanye).

- **Ngenisa:** ASCII ne-binary. Ubuso buba [i-mesh](topic:meshes) izinqondo, izixhumanisi zokuthungwa nemibala yamaphoyinti igcinwa; ubuso ngabunye upenjwa ngombala osondele kakhulu kwemibala engu-4,096 ukuze ubone imibala njengamanje. I-PLY ayinayo iyunithi noma umthetho we-axis: izixhumanisi zingena njengoba zinjalo (amamitha, Z phezulu). I-PLY enamaphoyinti kuphela iyidikhi lamaphoyinti:ivule ku-BimCraft noma ku-CivilCraft.
- **Khipha:** i-binary PLY enezindawo, izinqondo nemibala (nezixhumanisi zokuthungwa uma imodeli inazo), ngamamitha, Z phezulu.

## FBX (.fbx)

Ukungenisa kuphela. Amafayela e-FBX 7 (kusukela ngo-2011), i-binary noma i-ASCII, afundwa yisifundi se-ModelCraft ngokwayo.

- Ama-mesh angena njenge-[mesh](topic:meshes) nezinqondo, izixhumanisi zokuthungwa (wonke amasethi e-UV) nemibala yamaphoyinti; i-mesh esetshenziswa izinto eziningi ihlala ibelwana. Izinto ziba amaqembu nokuguqulwa kwazo (okuphakathi, okuphambukayo nokuphendulwa kwangaphambili kuhlanganisiwe).
- Impahla yokwakha: ukuthungwa komumbala (diffuse) — okufakwe kufayela, noma isithombe esiwiswe ndawonye ne-`.fbx` — kungena njengokuthungwa (izithombe ze-TGA ziyagcinwa njenge-PNG); kungenjalo umbala wokusabalala. Ezinye izilungiselelo zempahla zilinda imodeli entsha yempahla.
- I-axis esaphezulu yefayela neyunithi yalo iyasetshenziswa: konke kungena nge-Z phezulu, ngamamitha.
- Amalambu amaphuthumayo nezendawo aba [amalambu](topic:lights) (ukukhanya kwe-FBX okungu-100 yilamba elijwayelekile le-ModelCraft, ama-lumens angu-800: ukukhanya kwe-FBX akunayuniti). Amakhamera aba [imiboniso](topic:scenes).
- Abalingiswa abanesikhumba bangena besimi; amathambo nama-animation ayabalwa futhi aziqhubeki zigcinwe. Amalambu aqondile nendawo, nejiyomethri engeyona ama-mesh (i-NURBS, amajika), ayabalwa futhi ayashiywa.
- Amafayela e-FBX 6 nakadlule ayenqatshwa: wawagcine kabusha njenge-FBX 2011 noma entsha.

## Alembic (.abc)

Ukungenisa kuphela: ama-cache ejiyomethri avela ezinhlelweni zokwenza ama-animation nemiphumela.

- Ama-mesh (ama-mesh wamapholigoni nokuhlukaniswa) angena njenge-[mesh](topic:meshes), nezixhumanisi zokuthungwa nezinqondo; ukuguqulwa kuba amaqembu. I-Alembic iphezulu nge-Y futhi iguqulwa ibe Z phezulu; amamitha.
- I-cache enezampula eziningi (i-animation) ingena ngesampula yayo yokuqala; ibha yesimo ithi ziningi kangakanani.
- Amaphoyinti, amajika, ubuso be-NURBS, amakhamera namalambu ayabalwa futhi ayashiywa. Amafayela esakhiwo esidala se-HDF5 ayenqatshwa: wawagcine kabusha njengefayela le-Ogawa Alembic.

{{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}} ihlola isimo kuqala bese ibhala ukukhethwa, noma konke okubonisiwe. Bheka [Lungisa imodeli ukuze iprintwe nge-3D](topic:print-3d).

## 3MF (.3mf)

Ukukhipha kuphela, kusuka ku-{{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}}. I-3MF core: i-mesh eyodwa ngamamillimitha, Z phezulu, nemibala yayo njengempahla. Izinhlelo eziningi zokusika ziyayifunda, futhi ngokungafani ne-STL ibiza iyunithi yayo. Izinto ezifihliwe ziyashiywa. Bheka [Lungisa imodeli ukuze iprintwe nge-3D](topic:print-3d).

## Ukukhipha kwe-DWG ne-DXF (.dwg, .dxf)

Ngezinhlelo ze-CAD. Imodeli ibhalwa ngeyunithi yayo: amayintshi kumodeli yamafidi namayintshi, kungenjalo amamillimitha, amasentimitha noma amamitha (ibha yesimo iyiqamba).

- **Ubuso** buba ubuso be-3D (izinxantathu). Imigqa engaphakathi kobuso nemiphetho ethambile ibhalwa ingabonakali, ngakho ubuso bubukeka njengobe-ModelCraft.
- **Imiphetho engaxhunyiwe** iba imigqa.
- **Amaqembu nezakhi** ziba amabhulokhi: isakhi sibhalwa kanye bese sibekwa njengoba sisetshenziswa, kubandakanya nezikhopi ezijikelezwe nezibonakalisiwe. Iqembu elelulwe ngemva kokujikelezwa (ngakho lithambekele) kunalokho libhalwa lapho lisendaweni yalo.
- **Imibala:** i-DWG igcina umbala wobuso ngamunye ngokunembile; i-DXF isebenzisa okusondele kakhulu kwemibala engu-255 ye-CAD evamile.
- **Izinguqulo:** i-DWG ibhalwa njenge-AutoCAD 2004 (AC1018), ezinhlelweni ze-CAD ezisukela ngo-2004 kuya phezulu ziyayivula. I-DXF iyi-R12 (AC1009), inguqulo yonke inhlelo ye-CAD iyifundayo; i-R12 ayinayo insimu yeyunithi, ngakho tshela uhlelo lwe-CAD ukuthi kufanele lusebenzise iyiphi iyunithi.
- **Akubhalwa:** imihlahlandlela, izilinganiso, imiboniso, nekhamera.

## IFC (.ifc)

Ukukhipha kuphela, ku-BimCraft nakwezinye izinhlelo ze-BIM. I-IFC4 enephrojekthi, isayithi, isakhiwo nezitezi zaso. Iqembu noma isakhi ngasinye esiphezulu siba iproksi yento yesakhiwo esinegama layo; ezivaliwe zibhalwa njengezimo eziqinile (ama-faceted breps), ezivulekile njengemodeli yobuso; izimbobo ebusweni ziyagcinwa. Ijiyomethri engaphezulu eshiyekile iba into eyodwa ebizwa ngokuthi "Loose geometry". Akukho zinhlobo, izimpawu noma impahla.

**Izitezi:** {{ui:Khipha}} › {{ui:Izitezi ze-IFC…}} ziyazibala, ngayinye inegama nokuphakama ({{ui:Engeza isitezi}}, noma {{ui:Qagela kusuka kumodeli}}, okwenza isitezi esisodwa ngakunye ukuphakama okuma kukho amaqembu wakho aphezulu). Lapho kukhishwa, iqembu noma isakhi ngasinye siya esitezini esingaphansi noma esilingana nephoyinti lalo eliphansi kakhulu, futhi sigcina indawo yaso. Uma ungekho izitezi, konke kuya esitezini esisodwa, "Level 1", ku-0. Izitezi zilondolozwa kufayela le-ModelCraft.

## DWG (.dwg) ne-DXF (.dxf)

Ngenisa njengemigqa phansi (ama-hatch nobuso be-3D njengobuso); khipha njengoba kuchazwe ngenhla. Bheka [Imodeli kwipulani yesayithi](topic:site-plan).

- **Fundwa:** imigqa, ama-polyline (namanmsalo), ama-polyline e-3D, izindilinga, imimsalo, nezinkomba zamabhulokhi kubandakanya nezinhlu, kusuka endaweni yemodeli. Izinto ezingabonakali (njengezimo ezifihliwe zebhulokhi eliguquguqukayo) ziyashiywa. Amajika aba izingxenye ezingu-48 ezigqamile ngokujikeleza ngakunye okugcwele.
- **Fundwa kusukela ku-0.4:** ama-spline namaellipse (njengemiphetho), umbhalo, umbhalo wemigqa eminingi nezinani zezici (njengemiphetho ngohlobo lombhalo womugqa oyodwa), ama-hatch (ubuso nezimbobo), ubuso be-3D nokugcwaliswa okuqinile (ubuso), nezilinganiso (zidwetshwe kusuka emabhulokhini ezilinganiso omdwebo).
- **Fundwa kusukela ku-0.7:** izinto eziqinile ze-3D, izifunda namabhodi (idatha yabo ye-ACIS, i-DWG ne-DXF zazo zonke izinguqulo), ngayinye njengeqembu layo, ezivaliwe njengezinto eziqinile. Ubuso obuqhamuka kwezinye izindawo ngaphandle kwezindawo ezicaba, amasilinda, amakhoni, amabhola, ama-torus nendawo elula ye-spline ayashiywa futhi ayadwetshwa ohlwini.
- **Akufundwa:** amaphoyinti, amathebula, ama-multileader, izithombe, nanoma yini esikhaleni sephepha.
- **Amayunithi:** athathwa emdwebeni uma eshilo. Uma kungenjalo, i-ModelCraft iyabuza.
- **I-DXF** kumele ibe yi-ASCII. I-DXF ye-binary iyenqatshwa.
- **Amafayela e-DWG** kusukela ku-AutoCAD R13 kuya kufomethi yamanje (AutoCAD 2018 nangaphezulu; AC1012 kuya ku-AC1032) afundwa yisifundi se-DWG se-ModelCraft ngokwayo, ekhasini; siyingxenye ye-ModelCraft, ngakho sisebenza ngaphandle kwe-inthanethi noma nini lapho i-ModelCraft isebenza. Izinguqulo ezidlule (i-R12 nangaphambili) namafayela alimele kakhulu awakwazi ukufundwa; wagcine njenge-DXF.
- **Imikhawulo:** izixhumanisi ezingaphezu kwe-10,000 km kusukela emsukeni, noma izingcezu zemigqa ezingaphezu kwezigidi ezingu-2, ziyenqatshwa.

## Amafayela e-SKP

{{ui:Ngenisa}} (noma wehlise ifayela phezu kokubukwayo) ifunda amafayela e-SketchUp ngesifundi se-ModelCraft ngokwayo, ekhasini: akukho lokho okulayishwayo, futhi kusebenza ngaphandle kwe-inthanethi noma nini lapho i-ModelCraft isebenza. Ihlolwe ngamafayela avela ku-SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 nango-2026; ezinye izinguqulo kufanele zivule futhi, kodwa azikaze zizanywe. Imodeli ifika njengeqembu elilodwa elibizwa ngegama lefayela. Ukucindezela {{key:Mod+Z}} kanye kuyisusa futhi. Izinyathelo ngazinye: [Ngenisa imodeli ye-SKP](topic:import-sketchup-files).

- **Kugcinwe:** ubuso nezimbobo zabo, amaqembu (njengamaqembu) nezakhi (njengezakhi, ezabelwanayo), amagama nezindawo zazo, imibala, amathegi amaqembu nezakhi, imiphetho engeyona ingxenye yobuso, nemiphetho ethambile nebushelezi, ukuze izindawo ezigobile zihlale zibushelezi.
- **Imibala:** impahla yobuso ngabunye inikeza umbala wayo. Impahla epeniwe kuqembu noma kwisakhi iba upende walokho okubekwe, ngakho ubuso obungaphakathi obungenambala wabo bawuthatha, njengakwi-SketchUp; isakhi esipeniwe ngemibala emibili sihlala yisakhi esisodwa.
- **Amathegi** emaqembini nasezakhini aba ngamathegi e-ModelCraft, abonakale noma afihlekile njengoba ayenjalo. Amathegi kubuso nasemiphethweni engaxhunyiwe ayagcinwa (i-ModelCraft ithegisa amaqembu nezakhi kuphela); ibha yesimo iyawabala.
- **Izinto ezifihliwe zingena zifihliwe** (ubuso, imiphetho, amaqembu, izakhi, nobuso nemiphetho kutegi elifihliwe), ukuze ubone lokho i-SketchUp yayikubonisa; {{ui:Veza konke}} iyazibonisa.
- **Izithombe zokuthungwa:** ubuso openiwe ngempahla enokuthungwa ugcina ukuthungwa kwawo, ubekwe njengoba kunjalo efayeleni, nefayela le-ModelCraft ligcina isithombe. Ukuthungwa okusetshenziswa iqembu lonke noma isakhi, ukuthungwa okungekho efayeleni, noma isithombe amasiphequluli angasibonisa (njengefayela le-Photoshop) kugcina umbala wempahla kuphela.
- **Kushiywe, futhi kubalwe ebhayeni yesimo:** izithombe ezibekwe kumodeli. Umbhalo, izilinganiso, imihlahlandlela, izindiza zezigaba, imiboniso nezitayela akufundwa.
- **Amayunithi:** amafayela e-SketchUp angamayintshi ngaphakathi; i-ModelCraft iyawaguqula, ngakho usayizi uphuma kahle kunoma iyiphi iyunithi.
- **Ukulondoloza `.skp`** akukakwakhiwa. Ukuze ubuyisele imodeli ku-SketchUp, khipha i-Collada (`.dae`).

## Akusekelwe

I-ModelCraft ayikwazi ukuvula amafayela e-3DS noma e-IFC, futhi ayikwazi ukulondoloza amafayela e-3DS, e-FBX, e-STEP, e-`.3dm` noma e-SketchUp (`.skp`).
