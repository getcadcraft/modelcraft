---
title: Muundo wa faili kwa kina
summary: Kile hasa kila muundo ambao ModelCraft inafungua, inaleta, na inasafirisha unahifadhi, unabadilisha na unaacha nje.
keywords: formats, aina za faili, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, vitengo, shoka, y juu, z juu, milimita, mipaka
from: c47d2d28
---

Modeli ya ModelCraft iko katika mita, na Z (bluu) juu. Kila muundo hapa chini hubadilishwa kuelekea au kutoka hapo.

## ModelCraft (.modelcraft)

| Kipengele | Maelezo |
|---|---|
| Fungua | {{ui:Fungua}} ({{key:Mod+O}}) au dondosha kwenye mwonekano. Faili zinazoishia na `.json` pia zinakubaliwa |
| Hifadhi | {{ui:Hifadhi}} ({{key:Mod+S}}), kama upakuaji |
| Huhifadhi | Kila kitu: jiometri, nyuso na rangi zake, vifaa na maumbo yaliyoingizwa, taa, kingo laini, vikundi, vipengele, majina, miongozo, matukio, vitengo, na kamera na mtindo wa mwisho |
| Huacha nje | Historia ya kutendua |
| Kikomo | MB 200 |

Faili iliyohifadhiwa na ModelCraft mpya zaidi kuliko yako inakataliwa: "Modeli hii imehifadhiwa na ModelCraft mpya zaidi (toleo la faili …). Sasisha ModelCraft ili kuifungua." Faili ambayo si modeli ya ModelCraft inasema "Faili hii si modeli ya ModelCraft (si JSON)." au "Hii si faili ya ModelCraft tunayoweza kufungua: …".

## USD (.usd, .usda, .usdc, .usdz)

Fungua, leta, na {{ui:Hifadhi kama}} au {{ui:Safirisha}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Faili ya USD ambayo ModelCraft imehifadhi inafunguka tena bila kupoteza chochote; faili za USD za programu nyingine zinafunguka kama matundu, vikundi, vipengele, taa na kamera. Tazama [Hifadhi, fungua na safirisha USD](topic:usd).

## Collada (.dae)

Leta na safirisha. Ndiyo muundo bora zaidi wa kubadilishana modeli na wabunifu wengine wa 3D.

- **Kusafirisha:** Collada 1.4.1, Z juu, mita. Jiometri moja kwa kila ufafanuzi wa kikundi au kipengele; vipengele vinaandikwa mara moja na kuwekwa kwa marejeo, hivyo vinabaki vinashirikiwa. Nyuso zenye matundu au kingo zilizopinda ndani zinagawanywa kuwa pembetatu. Rangi zinakuwa vifaa. Kingo zilizolegea zinaandikwa kama mistari. Majina yasiyokubalika katika muundo yanarekebishwa, na jina halisi linahifadhiwa pamoja nayo.
- **Kuleta:** pembetatu, poligoni (zenye matundu), feni na mikanda ya pembetatu zinakuwa nyuso; mistari inakuwa kingo. Mabadiliko ya nodi, mhimili wa juu wa faili na kitengo chake vinatumika. Nodi iliyowekwa mahali kadhaa, au jiometri inayotumiwa na nodi kadhaa, inaingia kama kipengele; nodi nyingine zinaingia kama vikundi. Rangi za kueneza za vifaa zinakuwa rangi za nyuso.
- **Hazijaletwa:** maumbo, ngozi na mabadiliko ya umbo, kamera, taa, aina fulani za mabadiliko (look-at na skew), na marejeo ya faili nyingine. Upau wa hali unahesabu vilivyoachwa.
- **Vinavyopotea wakati wa kusafirisha:** kingo zipi ni laini. **Wakati wa kuleta,** nyuso zilizogawanywa kuwa pembetatu zinabaki pembetatu, zenye mistari ya ndani ikilainishwa ili maeneo bapa bado yasomeke kama uso mmoja.

## OBJ (.obj, .mtl)

Leta na safirisha.

- **Kuleta:** dondosha `.obj` pamoja na `.mtl` yake na picha za maumbo (au leta `.obj` peke yake: inaingia bila vifaa, na upau wa hali unataja `.mtl` iliyotakiwa). Inasomwa kama mita, Y juu. Kila kitu (`o`, au `g` ikikosekana) kinakuwa [matundu](topic:meshes), nyuso zake zikibaki kama zilivyo (miraba inabaki miraba). Viwianishi vya umbile, mistari ya kawaida na rangi kwa kila kona vinahifadhiwa. Picha ya rangi ya nyenzo (`map_Kd`, PNG, JPEG au WebP) inaingia kama umbile, pamoja na chaguo zake za kipimo na mpangilio; vinginevyo rangi yake (`Kd`). Kingo ambapo mistari ya kawaida ya faili inavunjika ni ngumu; bila mistari hiyo, vikundi vya ulainishaji vya faili ndivyo vinavyoamua. Ramani nyingine (bump, normal), nukta, mistari na mikunjo zinahesabiwa na kuachwa. OBJ haina kitengo, hivyo modeli iliyotengenezwa kwa milimita au inchi inafika kwa ukubwa usio sahihi: ipime upya baada ya kuleta (tazama [Zungusha na kupima](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Kusafirisha:** mita, Y juu, viwianishi vya dunia. Kitu kimoja kwa kila mpangilio wa kikundi; vipengele vinaandikwa kikamilifu kwenye kila mpangilio. Matundu yanahifadhi nyuso zake, viwianishi vya umbile na mistari ya kawaida; nyuso zilizounganishwa kupitia [kingo laini](topic:soften) zinapata mstari wa kawaida kwa kila kona. Modeli ikiwa na rangi, `.mtl` inapakuliwa pamoja na `.obj`. Ikiwa ina maumbo yaliyoingizwa, `.obj`, `.mtl` na picha zinapakuliwa pamoja kama `.zip` moja.
- **Kikomo:** vertices au nyuso milioni 2; MB 64 za maandishi.

## glTF (.glb, .gltf)

Leta na safirisha, glTF 2.0.

- **Kuleta:** `.glb`, au `.gltf` pamoja na faili zake za `.bin` na umbile: dondosha zote kwa pamoja kwenye mwonekano (au chagua `.glb`). `.gltf` pekee inataja faili inayohitaji: "Faili hii ya .gltf inahitaji "…": fungua toleo la .glb, au dondosha .gltf pamoja na faili zake."
  - **Matundu** yanaingia kama [matundu](topic:meshes), moja kwa kila mesh katika faili, yakiwa na mistari ya kawaida, viwianishi vya umbile na rangi za kona za faili. Kingo ambapo mistari ya kawaida ya faili inavunjika ni ngumu; zilizobaki ni laini. Mesh inayotumika mahali kadhaa inabaki ikishirikiwa.
  - **Nodi** zinakuwa vikundi, zikitajwa kama zilivyo kwenye faili. Matundu yaliyorudiwa (EXT_mesh_gpu_instancing) yanaingia kama mesh moja iliyowekwa mara nyingi.
  - **Vifaa:** umbile la rangi ya msingi (PNG, JPEG au WebP) linaingia kama umbile, likiwekwa kwa viwianishi vya umbile vya faili (pamoja na mabadiliko yoyote ya umbile), na linahifadhiwa unapohifadhi; vinginevyo rangi ya msingi. Chuma, ukali, ramani za kawaida, kioo, koti safi, sheen na viendelezi vingine vya vifaa vinasomwa lakini bado havihifadhiwi: upau wa hali unasema hivyo.
  - **Taa** (KHR_lights_punctual): taa za nukta na za doa zinakuwa [taa](topic:lights). Taa za mwelekeo zinahesabiwa: jua linamulika modeli.
  - **Kamera** zinakuwa [matukio](topic:scenes).
  - **Wahusika wenye mifupa** wanaingia wamesimama kama faili inavyowaweka; mifupa na uhuishaji wao, pamoja na malengo ya umbo (morph), vinahesabiwa na havihifadhiwi bado.
  - **Faili zilizobanwa** (Draco, meshopt) na data iliyopimwa upya zinasomwa. Vipakiaji vinapakia tu kwa faili inayovihitaji.
  - Nukta na mistari zinahesabiwa na kuachwa (matundu yana nyuso). Umbile za KTX2 zinaachwa; nyuso zinabaki na rangi yake.
- **Kusafirisha** (`.glb`): glTF 2.0 ya binary, mita, Y juu. Mesh moja kwa kila ufafanuzi, hivyo vipengele vinabaki vinashirikiwa. Matundu yanahifadhi mistari yake ya kawaida, viwianishi vya umbile na rangi za kona; nyuso zilizounganishwa kupitia [kingo laini](topic:soften) zinabeba mistari laini. Rangi na vifaa vinakuwa vifaa (kifaa kama rangi yake); umbile zilizoingizwa zinaandikwa kama umbile. Taa zilizowashwa zinakuwa taa za nukta na za doa (taa za eneo hazina sawa katika glTF na zinaachwa); matukio yanakuwa kamera. Kingo zilizolegea zinaachwa.
- **Kikomo:** faili hadi MB 300; takriban namba milioni 130 za jiometri.

## STL (.stl)

Leta na safirisha.

- **Kuleta:** binary au ASCII. STL haina kitengo: inasomwa kama **milimita**, kama printa na usafirishaji wa ModelCraft wenyewe unavyoiandika. Kona zilizo kwenye nukta moja zinaunganishwa, hivyo sehemu iliyofungwa inaingia kama [matundu](topic:meshes) yaliyofungwa. Rangi zilizo kwenye faili (mikataba ya VisCAM / SolidView na Materialise) zinapaka nyuso.
- **Kusafirisha,** kwa uchapishaji wa 3D: STL ya binary, **milimita**, Z juu. Pembetatu tu: vikundi na kingo zilizolegea vinaachwa. Nyuso zilizopakwa zinabeba rangi yao kwa mkataba wa VisCAM / SolidView, ambao programu nyingine zisizouelewa zinauacha. Safirisha vigumu vilivyofungwa kwa uchapishaji safi.

## STEP (.step, .stp)

Kuleta tu. STEP ndiyo wanayotuma wabunifu wa sehemu na wasambazaji: faili za AP203, AP214 na AP242.

- **Kuleta:** ModelCraft inasoma faili yenyewe, kwenye ukurasa, na kugeuza kila kigumu kuwa [matundu](topic:meshes) yaliyofungwa ya pembetatu: nyuso bapa zinabaki bapa, nyuso zilizopinda (silinda, koni, duara, torasi, nyuso za B-spline) zinakuwa nyuso ndogo nyingi bapa, huku kingo ndani ya uso mmoja uliopinda zikiwa laini na kingo kati ya nyuso mbili zikiwa kali. Faili za STEP zinataja kitengo chake; modeli inaingia kwa ukubwa wake halisi. Mkusanyiko unaingia na kila sehemu mahali faili inapoiweka, kila sehemu ikiwa matundu yake kwenye kikundi kinachotajwa kwa jina la faili. Rangi, majina ya sehemu katika mti wa mkusanyiko, na uvumilivu (PMI) hazisomwi.
- **Ujumbe:** kilichoruka au kilichochorwa kwa ukali zaidi kinaongezwa kwenye mstari wa hali ("Vidokezo: …"); faili isiyo na kigumu, faili iliyoharibika au iliyopita mipaka inasema sababu na haiongezi chochote.
- **Kikomo:** faili hadi MB 300; nyuso 400 000 na pembetatu milioni 8.

## .3dm

Kuleta tu. Faili za `.3dm` zinashikilia modeli za NURBS: polysurfaces, nyuso, matundu, mikunjo na vizuizi.

- **Kuleta:** ModelCraft inasoma faili yenyewe, kwenye ukurasa. Matundu yanaingia kama yalivyo; kila uso wa polysurface au extrusion unatoka kwenye matundu ya uonyeshaji yaliyohifadhiwa nayo kwenye faili, la sivyo ModelCraft inaigawanya (ndege, nyuso za NURBS, nyuso za mzunguko, mikunjo iliyopanuliwa, extrusions; zinakatwa kwa kingo zake, polysurfaces zilizofungwa zinakuwa matundu yaliyofungwa). Mikunjo inakuwa kingo, vizuizi vinakuwa vipengele (vizuizi ndani ya vizuizi vinabaki), tabaka zinakuwa lebo (zinafichwa zikizimwa), na rangi ya kitu (yake, ya tabaka lake au ya nyenzo yake) inapaka nyuso zake. Faili inataja kitengo chake; modeli inaingia kwa ukubwa wake halisi. Hatua kwa hatua: [Leta modeli ya .3dm](topic:import-3dm-files).
- **Ujumbe:** mstari wa hali unasema nyuso ngapi zilitoka kwenye matundu yaliyohifadhiwa na ngapi ziligawanywa, na kutaja vilivyoachwa: nukta, wingu la nukta, maandishi, vipimo, hatch, taa, vitu vya SubD, nyuso za aina ambazo bado hazijasomwa, na vizuizi vilivyounganishwa.
- **Kikomo:** faili hadi MB 300.

## PLY (.ply)

Leta na safirisha, kwa matundu yenye rangi (uchanganuzi, uchapishaji wa 3D wa rangi, wabunifu wengine).

- **Kuleta:** ASCII na binary. Nyuso zinakuwa [matundu](topic:meshes) yakiwa na mistari yao ya kawaida, viwianishi vya umbile na rangi za kona; kila uso unapakwa rangi iliyo karibu zaidi kati ya 4,096 ili uone rangi sasa. PLY haina kitengo wala mkataba wa mhimili: viwianishi vinaingia kama vilivyo (mita, Z juu). PLY yenye nukta tu ni wingu la nukta: ifungue katika BimCraft au CivilCraft.
- **Kusafirisha:** PLY ya binary yenye nafasi, mistari ya kawaida na rangi (na viwianishi vya umbile modeli ikivyo navyo), kwa mita, Z juu.

## FBX (.fbx)

Kuleta tu. Faili za FBX 7 (kuanzia 2011 na kuendelea), binary au ASCII, zinasomwa na msomaji wa ModelCraft wenyewe.

- Matundu yanaingia kama [matundu](topic:meshes) yakiwa na mistari yao ya kawaida, viwianishi vya umbile (kila seti ya UV) na rangi za kona; matundu yanayotumiwa na vitu kadhaa yanabaki yakishirikiwa. Vitu vinakuwa vikundi vyenye mabadiliko yao (pamoja na egemeo, mikabala na mizunguko ya awali).
- Vifaa: umbile ya kueneza — iliyo ndani ya faili, au picha iliyodondoshwa pamoja na `.fbx` — inaingia kama umbile (picha za TGA zinahifadhiwa kama PNG); vinginevyo rangi ya kueneza. Mipangilio mingine ya vifaa inasubiri modeli mpya ya vifaa.
- Mhimili wa juu wa faili na kitengo chake vinatumika: kila kitu kinaingia Z juu, kwa mita.
- Taa za nukta na za doa zinakuwa [taa](topic:lights) (nguvu ya FBX ya 100 ndiyo taa ya kawaida ya ModelCraft, lumeni 800: nguvu za FBX hazina kitengo). Kamera zinakuwa [matukio](topic:scenes).
- Wahusika wenye mifupa wanaingia wakiwa wamepumzika; mifupa na uhuishaji vinahesabiwa na havihifadhiwi bado. Taa za mwelekeo na za eneo, pamoja na jiometri isiyo matundu (NURBS, mikunjo), zinahesabiwa na kuachwa.
- Faili za FBX 6 na za zamani zinakataliwa: zihifadhi tena kama FBX 2011 au mpya zaidi.

## Alembic (.abc)

Kuleta tu: akiba za jiometri kutoka programu za uhuishaji na athari.

- Matundu (ya poligoni na ya mgawanyo) yanaingia kama [matundu](topic:meshes), pamoja na viwianishi vya umbile na mistari ya kawaida; mabadiliko yanakuwa vikundi. Alembic ni Y juu na inageuzwa kuwa Z juu; mita.
- Akiba yenye sampuli nyingi (uhuishaji) inaingia kwenye sampuli yake ya kwanza; upau wa hali unasema ina ngapi.
- Nukta, mikunjo, nyuso za NURBS, kamera na taa zinahesabiwa na kuachwa. Faili za muundo wa zamani wa HDF5 zinakataliwa: zihifadhi tena kama faili ya Ogawa Alembic.

{{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}} inakagua umbo kwanza na kuandika uteuzi, au kila kinachoonekana. Tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d).

## 3MF (.3mf)

Kusafirisha tu, kutoka {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}}. 3MF ya msingi: matundu moja kwa **milimita**, Z juu, na rangi zake kama vifaa. Programu nyingi za kukata (slicer) zinaisoma, na tofauti na STL inataja kitengo chake. Vitu vilivyofichwa vinaachwa. Tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d).

## Usafirishaji wa DWG na DXF (.dwg, .dxf)

Kwa programu za CAD. Modeli inaandikwa kwa kitengo chake yenyewe: inchi kwa modeli za futi na inchi, vinginevyo milimita, sentimita au mita (upau wa hali unakitaja).

- **Nyuso** zinakuwa nyuso za 3D (pembetatu). Mistari ndani ya uso, na kingo laini, zinaandikwa zisizoonekana, hivyo nyuso zinaonekana kama za ModelCraft.
- **Kingo zilizolegea** zinakuwa mistari.
- **Vikundi na vipengele** vinakuwa vizuizi: kipengele kinaandikwa mara moja na kuwekwa mara nyingi kinavyotumika, pamoja na nakala zilizozungushwa na kuakisiwa. Kikundi kilichonyooshwa baada ya kuzungushwa (hivyo kimeinama) kinaandikwa mahali pake badala yake.
- **Rangi:** DWG inahifadhi rangi ya kila uso kwa usahihi; DXF inatumia rangi iliyo karibu zaidi kati ya rangi 255 za kawaida za CAD.
- **Matoleo:** DWG inaandikwa kama AutoCAD 2004 (AC1018), ambayo programu za CAD kuanzia 2004 zinaifungua. DXF ni R12 (AC1009), toleo ambalo kila programu ya CAD inalisoma; R12 haina sehemu ya kitengo, hivyo mwambie programu ya CAD kitengo cha kutumia.
- **Visivyoandikwa:** miongozo, vipimo, matukio na kamera.

## IFC (.ifc)

Kusafirisha tu, kwa BimCraft na programu nyingine za BIM. IFC4 yenye mradi, tovuti, jengo na ghorofa zake. Kila kikundi au kipengele cha ngazi ya juu kinakuwa kiwakilishi cha jumla cha kipengele cha jengo chenye jina lake; vilivyofungwa vinaandikwa kama maumbo magumu (faceted breps), vilivyo wazi kama modeli za nyuso; matundu kwenye nyuso yanabaki. Jiometri iliyolegea ya ngazi ya juu inakuwa kipengele kimoja kinachoitwa "Loose geometry". Hakuna aina, sifa au vifaa.

**Ghorofa:** {{ui:Safirisha}} › {{ui:Ghorofa za IFC…}} inaziorodhesha, kila moja ikiwa na jina na mwinuko ({{ui:Ongeza ghorofa}}, au {{ui:Kisia kutoka kwenye modeli}}, ambayo inatengeneza ghorofa moja kwa kila urefu ambao vikundi vyako vya ngazi ya juu vinasimama juu yake). Wakati wa kusafirisha, kila kikundi au kipengele kinaenda kwenye ghorofa iliyo chini ya au sawa na sehemu yake ya chini kabisa, na kubaki mahali pake. Bila ghorofa, kila kitu kinaenda kwenye ghorofa moja, "Level 1", kwenye 0. Ghorofa zinahifadhiwa kwenye faili ya ModelCraft.

## DWG (.dwg) na DXF (.dxf)

Inaletwa kama mistari ardhini (hatch na nyuso za 3D kama nyuso); inasafirishwa kama ilivyoelezwa hapo juu. Tazama [Modeli kwenye ramani ya tovuti](topic:site-plan).

- **Kusoma:** mistari, polilaini (zenye matao), polilaini za 3D, duara, matao, na marejeo ya vizuizi pamoja na safu, kutoka nafasi ya modeli. Vitu visivyoonekana (kama hali zilizofichwa za kizuizi chenye nguvu) vinaachwa. Mikunjo inakuwa vipande 48 vilivyonyooka kwa mzunguko mzima.
- **Kusoma tangu 0.4:** splines na duaradufu (kama kingo), maandishi, maandishi ya mistari mingi na thamani za sifa (kama kingo katika maandishi ya mstari mmoja), hatch (nyuso zenye matundu), nyuso za 3D na kujaza kwa vigumu (nyuso), na vipimo (vinavyochorwa kutoka vizuizi vya vipimo vya mchoro wenyewe).
- **Kusoma tangu 0.7:** vigumu vya 3D, maeneo na miili (data yao ya ACIS, DWG na DXF ya kila toleo), kila kimoja kama kikundi chake, vilivyofungwa kama vigumu. Nyuso zilizo kwenye sehemu zisizo ndege, silinda, koni, duara, torasi na nyuso rahisi za spline zinaachwa na kuorodheshwa.
- **Visivyosomwa:** nukta, jedwali, multileaders, picha, na chochote kilicho kwenye nafasi ya karatasi.
- **Vitengo:** vinachukuliwa kutoka kwenye mchoro unapoviweka. La sivyo, ModelCraft inauliza.
- **DXF** lazima iwe ASCII. DXF ya binary inakataliwa.
- **DWG** kutoka AutoCAD R13 hadi muundo wa sasa (AutoCAD 2018 na baadaye; AC1012 hadi AC1032) inasomwa na msomaji wa DWG wa ModelCraft yenyewe, kwenye ukurasa; ni sehemu ya ModelCraft, hivyo inafanya kazi bila mtandao wakati wowote ModelCraft inapofanya kazi. Matoleo ya zamani (R12 na kabla yake) na faili zilizoharibika vibaya haziwezi kusomwa; zihifadhi kama DXF.
- **Mipaka:** viwianishi zaidi ya kilomita 10,000 kutoka asili, au vipande vya mistari zaidi ya milioni 2, vinakataliwa.

## Faili za SKP

{{ui:Leta}} (au dondosha faili kwenye mwonekano) inasoma faili za SketchUp kwa msomaji wa ModelCraft wenyewe, kwenye ukurasa: hakuna kinachopakiwa, na inafanya kazi bila mtandao wakati wowote ModelCraft inapofanya kazi. Imejaribiwa kwa faili kutoka SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 na 2026; matoleo mengine yanapaswa kufunguka pia, lakini bado hayajajaribiwa. Modeli inaingia kama kikundi kimoja kinachotajwa kwa jina la faili. {{key:Mod+Z}} moja inaiondoa tena. Hatua kwa hatua: [Leta modeli ya SKP](topic:import-sketchup-files).

- **Inahifadhiwa:** nyuso zenye matundu yake, vikundi (kama vikundi) na vipengele (kama vipengele, vinavyoshirikiwa), majina na nafasi zao, rangi, lebo za vikundi na vipengele, kingo zisizo sehemu ya uso, na kingo laini na nyororo, ili nyuso zilizopinda zibaki laini.
- **Rangi:** nyenzo ya uso yenyewe inatoa rangi yake. Nyenzo iliyopakwa kwenye kikundi au kipengele inakuwa rangi ya nafasi hiyo, hivyo nyuso zilizo ndani zisizo na rangi yake zinaichukua, kama kwenye SketchUp; kipengele kilichopakwa rangi mbili kinabaki kipengele kimoja.
- **Lebo** za vikundi na vipengele zinakuwa lebo za ModelCraft, zikionyeshwa au kufichwa kama zilivyokuwa. Lebo kwenye nyuso na kingo zilizolegea hazihifadhiwi (ModelCraft inaweka lebo kwa vikundi na vipengele tu); upau wa hali unazihesabu.
- **Vilivyofichwa vinaingia vikiwa vimefichwa** (nyuso, kingo, vikundi, vipengele, na nyuso na kingo kwenye lebo iliyofichwa), ili uone kile SketchUp ilichoonyesha; {{ui:Onyesha zote}} zinaviweka wazi.
- **Umbile:** uso uliopakwa nyenzo yenye umbile unahifadhi umbile lake, uliowekwa kama kwenye faili, na faili ya ModelCraft inahifadhi picha hiyo. Umbile kwenye kikundi au kipengele kizima, umbile lisilo kwenye faili, au picha ambayo vivinjari havionyeshi (kama faili ya Photoshop) inahifadhi rangi ya nyenzo tu.
- **Zilizoachwa, na kuhesabiwa kwenye upau wa hali:** picha zilizowekwa kwenye modeli. Maandishi, vipimo, miongozo, ndege za sehemu, matukio na mitindo hazisomwi.
- **Vitengo:** faili za SketchUp ziko kwa inchi ndani; ModelCraft inazigeuza, hivyo vipimo vinatoka sahihi katika kitengo chochote.
- **Kuhifadhi `.skp`** bado haijatengenezwa. Ili kurudisha modeli kwenye SketchUp, safirisha Collada (`.dae`).

## Visivyoungwa mkono

ModelCraft haiwezi kufungua faili za 3DS au IFC, na haiwezi kuhifadhi faili za 3DS, FBX, STEP, `.3dm` au SketchUp (`.skp`).
