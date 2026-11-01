---
title: Kipya katika 0.7
summary: Matundu yenye virekebishaji, uchongaji, UV na vitu vya mikunjo, uchoraji wa njia kwenye kadi ya picha na eneo la Tengeneza picha, mwonekano hai wa wakati halisi wenye kutawanya na panorama, nodi za vifaa, eneo la Uhuishaji lenye mifupa na fizikia, faili za USD, FBX, STEP na .3dm, na zana za uchapishaji zenye mtindo wa Mwanzilishi.
keywords: kipya, nini kipya, maelezo ya toleo, mabadiliko, 0.7, toleo, vipengele vipya, matundu, eneo la matundu, virekebishaji, mgawanyo, kunyoosha, uv, kufunua, mishono, mikunjo, vitu vya mikunjo, nurbs, bezier, uchongaji, kupanga upya matundu, upangaji upya wa topolojia, hesabu, uchoraji wa njia, webgpu, eneo la utengenezaji wa picha, foleni ya picha, mp4, exr, kupunguza kelele, anga halisi, hdri, ies, kina cha uwanja, kuchanganya mwanga, ukungu, caustics, mwonekano hai, wakati halisi, tembea, kutawanya, panorama, ziara, mtazamaji, ushadi, nodi, vifaa, materialx, stika, uchoraji wa umbile, kuoka, uhuishaji, klipu, funguo za umbo, viendeshi, armatures, mifupa, ik, vizuizi, fizikia, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, miili imara, misaada, unene wa ukuta, kufanya tupu, kurekebisha, mwanzilishi, wasaidizi, kompyuta yako, vipimo, kireno
from: b9fc43e2
---

Hiki ndicho kilichobadilika katika ModelCraft 0.7, ikilinganishwa na 0.6. ModelCraft sasa inaunda matundu pamoja na jiometri ya sukuma/vuta, inatengeneza picha kwenye kadi ya picha, na ina eneo kwa kila aina ya kazi: chagua kwenye orodha ya {{ui:Eneo kazi}} upande wa kushoto wa upau wa zana.

## Mpya

### Matundu

- **Matundu.** Chagua kikundi au kipengele kisha bofya {{ui:Geuza kuwa matundu}} kwenye {{ui:Taarifa ya kitu}}: kinakuwa matundu, yenye nyuso za kona za idadi yoyote zinazoweza kubeba viwianishi vya umbile, mistari ya kawaida, rangi na uzito. {{ui:Geuza kuwa jiometri}} kinairudisha. Kutendua kwenye matundu kunaweka tu kile kila hatua ilichobadilisha. Faili linalobeba matundu linahitaji ModelCraft 0.7 kufunguka. Tazama [Matundu](topic:meshes).
- **Eneo la Matundu.** Bofya mara mbili matundu, au chagua {{ui:Matundu}} kwenye orodha ya {{ui:Eneo kazi}}, ili uhariri vipeo, kingo na nyuso: vitanzi na pete, uhariri wa uwiano, kutoa, kuingiza, kunoa, kukata kitanzi, kisu, kugawanya nusu, kuzungusha, kuunganisha, kuyeyusha, kujaza, kujaza gridi, daraja na kuteleza. Mpangilio wa operesheni ya mwisho unabadilishwa baadaye kwenye paneli. Anza kutoka ndege, mchemraba, tufe, torasi na zaidi. Funguo za sukuma/vuta na funguo za mhariri zote zinafanya kazi. Tazama [Hariri matundu kwenye eneo la Matundu](topic:mesh-edit).
- **Virekebishaji.** Kioo, mpangilio wa nakala, uso wa mgawanyo, kunoa, Boolean, kuhamisha, kuunganisha, kupunguza, kulainisha, kimiani, kuinamisha mkunjo na kubana kwa kifuniko. Vinabadilisha kile tundu linavyoonyesha bila kulibadilisha. Zipange kwa mpangilio, washe au zima kila moja kwa mwonekano na kwa picha, na {{ui:Tumia}} moja unapoitaka kabisa. Tazama [Virekebishaji kwenye matundu](topic:modifiers).
- **Mgawanyo wenye mikunjo.** {{ui:Mkunjo}} kwenye eneo la Matundu inaweka kingo zilizochaguliwa kuwa kali chini ya uso wa mgawanyo. Picha zinaweza kutumia ngazi zaidi kuliko mwonekano, na kwenye matundu makubwa mwonekano unaonyesha ngazi ya chini na unasema hivyo. Tazama [Uso wa mgawanyo](topic:modifiers#subdivision-surface).
- **Vitu vya mikunjo.** Mikunjo ya Bézier, NURBS na ya sehemu za moja kwa moja, inayotengeneza bomba, bendi, kupungua au bamba lililojazwa, pamoja na maandishi kama mkunjo. Hariri pointi zake kwenye eneo la {{ui:Mkunjo}}; {{ui:Kuwa wavu}} wakati umbo liko sawa. Tazama [Vitu vya mikunjo](topic:curves).
- **Eneo la UV.** Weka alama za mishono (au acha ModelCraft iziweke kwenye kingo kali), {{ui:Fungua UV}} na {{ui:Panga}}, au ukadirie kwa kisanduku, silinda, tufe au mwonekano. Kihariri cha UV kando ya mwonekano wa 3D kinasogeza, kugeuza na kupima vipande, na ubao wa kukagua na rangi za kunyoosha zinaonyesha matokeo. Tazama [Panga UV za matundu](topic:uv).
- **Uchongaji.** Eneo la {{ui:Chonga}} lina brashi za kuchora, udongo, kulainisha, kushika, kuvimbisha, kunoa, kubana, kusawazisha na kinyago, kioo kwenye mhimili X, na {{ui:Maelezo}} inayoongeza pembetatu pale unapochonga. Shinikizo la kalamu linaweka ukubwa na nguvu ya brashi. Kila mpigo ni hatua moja ya kutendua. Tazama [Chonga matundu](topic:sculpt).
- **Kuunda upya na upangaji upya wa topolojia.** {{ui:Unda upya wavu}} hutengeneza tundu zima upya kama pembetatu sawa, kufunga mashimo na kuunganisha vipande vinavyopishana. Ili kujenga matundu safi juu ya lenye maelezo, chagua hilo chini ya {{ui:Upangaji upya wa topolojia}}: pointi unazosogeza zinatua kwenye uso wake. Tazama [Unda upya wavu](topic:mesh-edit#remesh).

### Kuchora

- **Gawanya kingo au mkunjo.** Zana ya {{ui:Gawanya}} inaweka alama za kukata unaposogea kwenye kingo na kugawanya kwa kubofya au kwa namba uliyoandika; kwa kingo, upinde au duara ukiwa umechaguliwa, andika `/5`. {{ui:Taarifa ya kitu}} › {{ui:Gawanya…}} inauliza namba, kwa kompyuta kibao. Upinde au duara linagawanywa kwa pembe sawa kwenye upinde halisi. Tazama [Gawanya kingo au mkunjo katika sehemu sawa](topic:divide).
- **Hesabu kwenye kisanduku cha thamani.** Andika `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` au `2*450mm` kwa urefu wowote, na `90/2` kwa pembe. Hesabu isiyoweza kufanyika inaonyesha kilicho kibaya na mahali kilipo. Tazama [Hesabu](topic:value-box#calculations).

### Utengenezaji wa picha

- **Uchoraji wa njia kwenye kadi ya picha.** {{ui:Tengeneza picha…}} › {{ui:Ubora wa juu (ufuatiliaji wa njia)}} inaendesha kichoraji cha njia cha CadCraft chenyewe kwenye kadi ya picha pale kivinjari kina WebGPU; mstari chini ya picha unasema ni injini ipi iliyoitengeneza. {{ui:Simamisha}} inahifadhi picha na {{ui:Endelea}} inaendelea kutoka hapo. Bila WebGPU picha inachorwa kwa WebGL, kama hapo awali. Tazama [Ubora wa juu](topic:render#high-quality).
- **Tengeneza ndani ya mwonekano.** Eneo la {{ui:Tengeneza picha}} linachora mwonekano wenyewe kwa njia, na linaanza upya unapozunguka au kuhariri: tengeneza {{ui:Eneo}}, bofya {{ui:Lenga}}, weka {{ui:Maelezo}}. Linahitaji WebGPU. Tazama [Tengeneza ndani ya mwonekano](topic:render#render-in-the-view).
- **Vifaa, taa na anga.** Picha za ubora wa juu zinaweka kivuli kila uso kwa modeli ya vifaa ya OpenPBR (makoti, mfuko laini, filamu nyembamba, kioo cha rangi, mwanga wa ndani). Kwa WebGPU pia kuna {{ui:Anga halisi}} lenye {{ui:Ukungu}}, {{ui:Picha ya anga (HDRI)}}, na wasifu wa taa wa IES wa watengenezaji kwa taa. Tazama [Anga na wasifu wa taa](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kamera kama ya picha.** Mfiduo kutoka f-stop, shutter na ISO katika kila hali; kwa WebGPU pia kina cha uwanja, mtazamo wa pointi mbili, usawa wa nyeupe, panorama za 360° (pia kwa stereo) na ramani za cube. Tazama [Kamera](topic:render#the-camera).
- **Maliza picha baada ya kutengenezwa.** Itie daraja ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} au {{ui:Kawaida}}, tofauti, mwako, mng'ao, kivuli cha kingo, jedwali la rangi la `.cube`), changanya anga, jua na kila kikundi cha taa, na uangalie vipengele vya picha kimoja kimoja, vyote bila kutengeneza tena. Chembe zilizobaki zinaondolewa na kipunguza kelele kwenye kompyuta yako mwenyewe. Tazama [Maliza picha](topic:render#finish-the-picture) na [Changanya taa baada ya picha](topic:render#mix-the-lights-after-the-render).
- **Njia zaidi za kuhifadhi picha.** PNG ya biti 16, EXR ya tabaka nyingi yenye kila kipengele cha picha na kila kikundi cha taa, na faili la picha (`.ccrender`) linalofunguka tena na mchanganyiko wake na daraja lake. Tazama [Hifadhi picha](topic:render#save-the-picture).
- **Ukungu, moshi na caustics.** Ukungu na mvuke unaowashwa na jua na taa, pamoja na miale ya mwanga; safu moja ya moshi au wingu; caustics chini ya kioo na vioo; sampuli inayobadilika inayoacha kwenye pikseli ambazo tayari ni safi. Kwenye kadi ya picha pekee. Tazama [Ukungu, moshi, kelele na caustics](topic:render#fog-smoke-noise-and-caustics).
- **Foleni ya picha na MP4.** Ongeza picha za ubora wa juu na uhuishaji mzima kwenye {{ui:Foleni ya picha}}; zinatengenezwa moja baada ya nyingine, na foleni inadumu hata ukifunga ukurasa. Inahitaji WebGPU. Video pia zinaweza kuhifadhiwa kama MP4 pale kivinjari kinapoweza kuiandika. Tazama [Foleni ya picha](topic:render#the-render-queue) na [Tengeneza video](topic:animation#render-the-video).

### Mwonekano hai na mawasilisho

- **Mwonekano hai.** {{ui:Safirisha}} › {{ui:Mwonekano wa moja kwa moja}} unaonyesha modeli kwa mwonekano wa wakati halisi kando ya mwonekano, ukifuatilia kila hariri na kamera: vivuli vya jua, vifaa, taa na mwanga unaorudi kutoka kuta. {{ui:Tembea}} ndani yake, buruta {{ui:Muda}} na {{ui:Mwezi}} kuhamisha jua, au usogeze kwenye {{ui:Dirisha jipya}}. Inatumia WebGPU pale kivinjari kinapoitoa, vinginevyo WebGL 2. Tazama [Mwonekano hai](topic:live-view).
- **Kutawanya.** Tawanya nyasi, maua, miamba, miti na watu juu ya nyuso au kwa brashi, kutoka vipengee saba vipya vya mazingira na maktaba iliyobaki; seti zinahifadhiwa kwenye faili. Tazama [Tawanya mimea, miamba na watu](topic:live-view#scatter-plants-rocks-and-people).
- **Shiriki.** Panorama ya 360°, ziara ya panorama yenye mishale kati ya sehemu, kitazamaji cha kusimama peke yake (ukurasa mmoja wa wavuti unaofunguka nje ya mtandao na usioto chochote kutoka intaneti), na video ya njia ya kamera, zote kwa mwonekano wa wakati halisi. Tazama [Shiriki](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR kwa mwonekano wa wakati halisi.** {{ui:Kagua kwa VR}} inaonyesha modeli pamoja na vifaa vyake, anga, kivuli cha jua, taa, vitu vilivyotawanywa na mwanga unaorudi. Tazama [Inavyoonekana](topic:vr-review#what-it-looks-like).

### Vifaa

- **Vifaa vilivyotengenezwa kwa nodi.** Eneo la {{ui:Ushadi}} linajenga vifaa vya faili lenyewe kama grafu za nodi: picha, kelele na ubao wa kukagua, seli za Voronoi, mawimbi, matofali, vigae, mbao, marumaru, mpito wa rangi, uchafu na uchakavu wa kingo, kazi za rangi, hesabu, ramani za bump na normal, kuwa nyenzo kamili ya OpenPBR. Mwonekano unaonyesha kila mabadiliko mara moja. Tazama [Tengeneza vifaa kwa nodi](topic:shading).
- **Maktaba ya vifaa na seti zako za umbile.** Paneli ya Ushadi inaorodhesha vifaa vya Maktaba: seti kumi na sita za umbile za CC0, kila moja ikiwa na sifa yake. Bofya moja kulitumia, au buruta kwenye uso. {{ui:Picha au zip…}} au {{ui:Folda…}} inatengeneza kifaa kutoka ramani zako mwenyewe, kwa kutambua majina ya faili. Tazama [Vifaa kutoka maktaba](topic:shading#materials-from-the-library).
- **MaterialX ndani na nje.** Safirisha kifaa kama MaterialX (OpenPBR Surface au Standard Surface, umbile kama PNG), na ingiza faili za MaterialX pamoja na picha zao. Tazama [MaterialX](topic:shading#materialx).
- **Stika na uchoraji wa umbile.** Weka picha kwenye uso kama stika yenye kifaa chake, na upake picha ya kifaa kwa brashi ya duara. Tazama [Stika](topic:shading#decals) na [Paka kwenye umbile](topic:shading#paint-on-the-texture).
- **Kuoka umbile.** Oka ufichaji wa mazingira, mkunjo, mwanga na mistari ya kawaida ya kitu chenye maelezo kuwa picha kando ya UV za matundu, kwenye core za kichakataji cha kompyuta. Tazama [Oka umbile](topic:shading#bake-textures).

### Uhuishaji

- **Eneo la Uhuishaji.** Weka funguo za nafasi, mzunguko na ukubwa wa kitu, mwangaza, kueneza na rangi ya kila taa, na pembe ya lenzi, ndani ya paneli. Ratiba ya muda inapata mwonekano wa {{ui:Mikunjo}} (vishikio vya Bézier, marudio) na mwonekano wa {{ui:Klipu}} unaohifadhi funguo kama vitendo vya kuweka tena na kuchanganya; funguo kwenye safu kadhaa zinaweza kuhamishwa, kunyooshwa, kunakiliwa na kubandikwa. Tazama [Huisha sifa yoyote](topic:animate).
- **Funguo za umbo na viendeshi.** Matundu yanaweza kubeba maumbo mengine ya yenyewe, yanayochanganywa kwa vitelezi vinavyoweza kupewa funguo, au kuwekwa kutoka thamani nyingine kwa usemi mdogo. Tazama [Funguo za umbo](topic:animate#shape-keys-morphs) na [Viendeshi](topic:animate#drivers).
- **Armatures (mifupa).** Weka mifupa kwenye matundu, acha {{ui:Uzito wa kiotomatiki}} igawe pointi miongoni mwao au paka uzito wenyewe, na weka mkao na funguo kwa mifupa; kufunga ngozi kwa mstari au kwa dual quaternion. Tazama [Armatures](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK na vizuizi.** Kufikia (IK) kwa nguzo, kutazama, kunakili mabadiliko, mipaka, mtoto wa, na kufuata njia, kwa mifupa na vitu. Tazama [IK na vizuizi](topic:animate#ik-and-constraints).
- **Fizikia.** Vikundi na vipengele vinaanguka, vinarundikana na kugongana kama visanduku au mipira, na {{ui:Oka fizikia}} inahifadhi matokeo kama funguo. Tazama [Fizikia](topic:animate#physics-drop-stack-and-collide).

### Faili

- **USD.** {{ui:Hifadhi kama}} ({{key:Mod+Shift+S}}) inahifadhi modeli kama `.usda`, `.usdc` au `.usdz`, na faili la USD lililohifadhiwa na ModelCraft linafunguka tena bila kupoteza chochote. USD kutoka programu nyingine inafunguka au kuletwa kama matundu, vikundi, vipengele, taa na kamera. {{ui:Hifadhi}} bado inaandika `.modelcraft`. Tazama [Hifadhi, fungua na safirisha USD](topic:usd).
- **glTF, kamili.** Faili za glTF zinaletwa kama matundu yanayoharirika yenye mistari ya kawaida, UV, rangi za pointi na umbile; nodi kama vikundi, taa kama taa na kamera kama matukio; faili za Draco na meshopt pia. `.gltf` inafunguka ikidondoshwa pamoja na faili zake. Usafirishaji unaandika matundu, umbile, taa na kamera. Tazama [glTF](topic:formats#gltf-glb-gltf).
- **Uletaji wa FBX, PLY, STL na Alembic.** FBX 2011 na mpya zaidi (matundu, seti za UV, vifaa, umbile lililopachikwa, taa, kamera), PLY na STL pamoja na rangi zao, na akiba za Alembic katika sampuli yake ya kwanza. OBJ inakuja na faili yake ya `.mtl` na picha zake ukizidondosha pamoja. Tazama [Miundo ya faili kwa undani](topic:formats).
- **Usafirishaji zaidi.** PLY yenye rangi, STL yenye rangi za nyuso zilizopakwa, na OBJ yenye umbile lake kama zip moja. Tazama [Miundo ya faili kwa undani](topic:formats).
- **Faili za STEP.** {{ui:Leta}} inasoma sehemu na makusanyiko ya STEP (AP203, AP214, AP242) kama matundu yaliyofungwa kwa ukubwa wake halisi, kila sehemu mahali faili linapoiweka. Tazama [STEP](topic:formats#step-step-stp).
- **Faili za .3dm.** {{ui:Leta}} inasoma modeli za `.3dm`: matundu, poliuso na upanuzi (kutoka matundu yaliyohifadhiwa kwenye faili, la sivyo ModelCraft inaigawanya), mikunjo kama kingo, bloku kama vipengele na tabaka kama lebo. Tazama [Leta modeli ya .3dm](topic:import-3dm-files).
- **Miili imara ya 3D kutoka DWG na DXF.** Kuleta mchoro sasa kunaleta pia miili yake ya 3D, maeneo na miili, kila moja kama kikundi chake; zilizofungwa zinakuwa miili imara. Tazama [Modeli kwenye mpango wa tovuti](topic:site-plan#what-comes-in).

### Uchapishaji wa 3D

- **Zana za uchapishaji.** {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}} › **Zana za uchapishaji** ina {{ui:Hakiki ya misaada}} (sehemu zinazoning'inia, nguzo au misaada ya miti, takriban kiasi cha nyenzo), {{ui:Unene wa ukuta}} (kuta nyembamba mno kuchapishwa, zikiorodheshwa kwa {{ui:Onyesha}}), {{ui:Fanya tupu}} (kuta za unene uliotoa, zenye mashimo ya kutolea maji) na {{ui:Rekebisha}} (kila marekebisho yameorodheshwa; sehemu zinazopishana zinaunganishwa tu ukiomba). Fanya tupu na Rekebisha vinatoa kikundi ambacho pande zake bapa ni nyuso moja, au matundu pale matokeo yasipofunga au yana nyuso nyingi mno; mstari wa hali unasema lipi. Tazama [Misaada, unene wa ukuta, kufanya tupu na kurekebisha](topic:print-tools).
- **Mtindo wa Mwanzilishi.** {{ui:Mipangilio}} › {{ui:ModelCraft}} › {{ui:Menyu, vitufe na panya}} › {{ui:Mwanzilishi}}: vitufe vikubwa vya kuweka maumbo na mashimo, kuhamisha, kupanga na {{ui:Kikundi}} ili mashimo yakatwe, kisha kagua modeli kwa uchapishaji. Tazama [Mtindo wa Mwanzilishi](topic:beginner).

### Wasaidizi na kompyuta yako

- **Zaidi kwa wasaidizi wa AI.** Msaidizi sasa anaweza kuorodhesha nyuso na vifaa, kusukuma/kuvuta, kupaka rangi, kutengeneza vikundi, kuongeza na kuonyesha matukio, kuongeza matundu, kuhariri mistari ya virekebishaji, kusafirisha USD, kutengeneza picha na kujaza foleni ya picha. Tazama [Tumia ModelCraft na wasaidizi wa AI](topic:use-with-ai-assistants).
- **Kompyuta yako.** {{ui:Mipangilio}} › {{ui:ModelCraft}} › {{ui:Utengenezaji wa picha}} › {{ui:Kompyuta yako}} inaonyesha picha, core za kichakataji na kumbukumbu ambazo kivinjari hiki kinaruhusu programu itumie, pamoja na kiwango kinachoweka mahali mwonekano hai unapoanzia. Tazama [Mashine yako inatengeneza picha kwa nini](topic:your-machine).

## Imerekebishwa

- {{ui:Vigumu}} › {{ui:Unganisha}}, {{ui:Ondoa}} na {{ui:Sehemu ya pamoja}} vingeweza kurudisha kikundi ambacho hakikufungwa, kwa ukubwa wowote. Sasa vinafunga.
- {{ui:Vigumu}} › {{ui:Ondoa}} ilikuwa imefifia bila chochote kilichochaguliwa, ingawa huchagua vipande vyake viwili kwa zamu baada ya kuchagua.
- Ndani ya ratiba ya muda ya uhuishaji, funguo ulizoandika hazikwenda popote, na {{key:Mod+S}} pia. {{key:Mod+Z}} na {{key:Mod+Y}} hapo ni kutendua na kurudia vya ratiba yenyewe; funguo nyingine za {{key:Mod}} zinafika kwenye programu.

## Katika kila programu

- **Vipimo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vipimo}} ina orodha moja kwa kila urefu, eneo, ujazo, pembe na mteremko, zenye ukubwa halisi unaotolewa na ufafanuzi wa vipimo (futi ya upimaji ya Marekani ni kipimo chake). Zima vipimo usivyotumia kamwe, nao hutoka kwenye orodha; weka nyota kwenye moja na kazi mpya inaanza nalo. Faili daima linabaki na kipimo chake. Kwenye ModelCraft, orodha ya vipimo kando ya kisanduku cha thamani inafuata swichi (kipimo cha modeli kinabaki kila wakati), nyota huweka kipimo cha modeli mpya (pale ModelCraft inapokuwa na kipimo hicho), na urefu uliouandika kwa alama yoyote ya kipimo unasomwa kwa kipimo hicho. Tazama [Vipimo, thamani zilizoandikwa na orodha za vipimo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojificha.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} inatosha zaidi kwenye skrini (skrini za kugusa na simu huhifadhi vitufe vyake vikubwa). Kila paneli ya kando ina upau mwembamba wa kichwa: buruta kuiweka mahali au kuielea, iangushe kwenye upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ibandike ili iteleze hadi pembeni, au ifiche na kuirudisha kutoka pembeni. Tazama [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Visanduku vya mazungumzo vinahamishika.** Buruta kisanduku kwa upau wake wa kichwa kukiondoa kwenye njia ya mchoro; kinarudi mahali ulipokiacha. Bofya mara mbili upau wa kichwa ili kukiweka katikati tena. Tazama [Hamisha kisanduku](common:arrange-panels#move-a-dialog).
- **Mapendekezo kwa wasaidizi wa AI.** Maombi kumi yaliyofanyika kwa msaidizi wako mwenyewe (kupanga mchoro, kuchapisha seti, kukagua michoro, kuuliza modeli maswali, kujumlisha ukadiriaji wa kiasi, kujaribu toleo la sehemu…), kila moja ikiwa na zana inazoita na ruhusa inazohitaji, na kila moja ikichezwa tena na majaribio yetu. Programu hazina AI. Tazama [Mapendekezo kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya kwenye {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Yenyewe, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzawa. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inasema kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili la mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya "Imekamilika" tu, na inaacha kurudisha kadi ya Kipya ulichoifunga hadi itolewe toleo jipya zaidi.

## Bado haipo katika toleo hili

- **0.7 haijasainiwa kwa msimbo.** Kusaini, na kifurushi cha Microsoft Store, kumehamia 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Kagua SHA-256 karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio kisha uchague {{ui:Fungua}}. CadCraft Studio bado haipo kwenye maduka ya programu, na hakuna toleo la iPad au iPhone bado.
- Orodha za pembe na mteremko katika {{ui:Vipimo}} zinahifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- Uonyeshaji kwenye kadi ya picha (WebGPU) umejaribiwa hapa kwa kiigizaji cha programu pekee, si kwenye kadi halisi za picha bado, kwa hivyo tengeneza kitu kidogo kwenye kompyuta yako kwanza. Hivyo hivyo kwa mwonekano hai, na VR imejaribiwa kwa kiigizaji cha kifaa cha kichwa pekee.
- Bila WebGPU hakuna eneo la Tengeneza picha wala foleni ya picha, na picha za ubora wa juu hazina kina cha uwanja, anga halisi, picha ya anga, ukungu, moshi, caustics au kuchanganya taa.
- {{ui:Tengeneza picha…}} bado haichori vitu vilivyotawanywa; vinaonekana kwenye mwonekano hai, panorama zake, kitazamaji na video.
- Taa zinahuishwa kwenye mwonekano, lakini video iliyotengenezwa inatumia taa kama zilivyo wakati inaanza.
- Mifupa na uhuishaji havisomwi wala kuandikwa kwenye faili za glTF, FBX au USD bado (modeli zenye ngozi zinaingia zikiwa tuli, pamoja na uzito wake), na vifaa vya glTF na FBX zaidi ya rangi ya msingi au umbile havihifadhiwi bado.
- Rangi za STEP na majina ya sehemu za mkusanyiko hazisomwi bado. Kuleta `.3dm` kumejaribiwa kwa faili zilizoandikwa na zana ya muundo huo, si bado kwa faili kutoka programu ya uundaji yenyewe; nyuso za SubD, maandishi na vipimo vimeachwa.
- Maktaba ya mimea kutoka CivilCraft iko kwenye ModelCraft, lakini kuweka mimea kutoka humo bado hakujajengwa.
- Kupaka umbile kwenye nyuso za sukuma/vuta kunarudia kwa kigae cha kifaa; ili kupaka uso mmoja tu, ugeuze kuwa matundu kisha uufungue.

Kila kitu kingine kiko kwenye [Bado haijajengwa](topic:not-built-yet).
