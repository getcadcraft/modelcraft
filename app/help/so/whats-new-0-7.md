---
title: Waxa cusub ee 0.7 (hore)
summary: Meshes oo leh modifiers, sculpting, UV-yo iyo curve objects, path tracing kaarka garaafka iyo goobta Rendarka, live view oo wakhti dhab ah oo leh scatter iyo panoramas, node materials, goobta Animate oo leh bones iyo physics, USD, FBX, STEP iyo faylal .3dm, iyo qalabka daabacaadda oo leh style-ka Bilowga.
keywords: waxa cusub 0.7, nooca hore, release notes, changelog, isbeddel, 0.7, nooca, astaamo cusub, mesh, meshes, goobta mesh, beddelayaal, subdivision, crease, uv, unwrap, xagallo, curves, curve objects, nurbs, bezier, sculpt, remesh, retopology, qaybi, xisaab, path tracing, webgpu, goobta rendarka, safka rendarka, mp4, exr, denoise, physical sky, hdri, ies, depth of field, light mixing, fog, caustics, live view, wakhti dhab ah, socod, scatter, panorama, tour, viewer, shading, nodes, node materials, maktabadda agabka, materialx, decals, texture painting, baking, animate, tafatiraha grafka, clips, shape keys, drivers, armature, bones, skinning, ik, constraints, physics, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d solids, supports, ballaca darbiga, dhex-madhan, hagaaji, bilowga, kaaliyayaasha, kombiyuutarkaaga, units, boortaqiis
from: 16d52810
---

Tanu waa waxa isbeddelay ModelCraft 0.7, marka la barbardhigo 0.6. ModelCraft hadda wuxuu moodeelaa meshes sida uu moodeelayo geometry-ga push/pull, wuxuu rendarka ku sameeyaa kaarka garaafka, wuxuuna leeyahay goob shaqo kasta oo shaqo ah: dooro gudaha liiska {{ui:Goobta shaqada}} ee dhinaca bidix ee toolbar-ka.

## Cusub

### Meshes

- **Meshes.** Dooro koox ama komponent oo riix {{ui:U beddel mesh}} gudaha {{ui:Macluumaadka}}: waxay noqonaysaa mesh, oo leh dhinacyo tiro kasta oo geeso ah oo qaadan kara UV-yo tekstuur, normals, midabo iyo weights. {{ui:U beddel joomatari}} ayaa u celinaysa geometry. Ka noqo mesh-ka wuxuu hayaa kaliya waxa talaabo kasta beddeshay. Fayl leh mesh wuxuu u baahan yahay ModelCraft 0.7 si uu u furmo. Eeg [Mesh-yada](topic:meshes).
- **Goobta Mesh.** Laba jeer-guji mesh, ama dooro {{ui:Mesh}} liiska {{ui:Goobta shaqada}}, si aad u tafatirto goobaha, geesaha iyo dhinacyada: xarrago iyo giraanta, tafatirka isbarbar-dhigan, extrude, inset, bevel, loop cut, knife, bisect, spin, merge, dissolve, fill, grid fill, bridge iyo slide, iyo dejinta hawlgalka ugu dambeeya oo panelka laga beddelo. Ka bilow diyaarad, kuub, kubbad, torus iyo wax ka badan. Furayaasha push/pull iyo furayaasha modeler labaduba way shaqeeyaan. Eeg [Tafatirka mesh goobta Mesh](topic:mesh-edit).
- **Modifiers.** Mirror, array, subdivision surface, bevel, solidify, boolean, displace, weld, decimate, smooth, lattice, curve deform iyo shrinkwrap waxay beddelaan waxa mesh-ku muujiyo, iyada oo aan mesh-ka laftiisa beddelin. Ku rari, u demi ama shid mid kasta muuqaalka iyo rendarrada, ka dibna {{ui:Codso}} mid marka aad rabto inuu joogto noqdo. Eeg [Beddelayaasha mesh-ka](topic:modifiers).
- **Subdivision with creases.** {{ui:Crease}} goobta Mesh wuxuu ilaaliyaa geesaha la doortay ee adag subdivision surface hoostiisa. Rendarrada waxay isticmaali karaan heer ka badan muuqaalka, mesh weyn wuxuu muuqaalka u muuqdaa heer hoose wuuna sheegaa. Eeg [Subdivision surface](topic:modifiers#subdivision-surface).
- **Curve objects.** Bézier, NURBS iyo curves xariiq toos ah oo samaysa tuubo, bayaan, taper ama lamaane buuxa, iyo qoraal sida curve. Ka tafatir dhibcahooda goobta {{ui:Qalin}}; {{ui:Mesh-ka}} marka qaabku sax yahay. Eeg [Curve objects](topic:curves).
- **Goobta UV.** Calaamadi xagallada (ama ka reeb ha calaamadiyo geesaha adag), {{ui:Unwrap}} iyo {{ui:Rar}}, ama mudee boks, silindar, kubbad ama aragta. Tafatiraha UV ee aragta 3D ayaa dhaqaajiya, leexiya oo cabbiraya qaybaha, shaxan iyo midabyada ballaadhinta ayaa muujinaya natiijada. Eeg [Habee UV-yada mesh-ka](topic:uv).
- **Sculpting.** Goobta {{ui:Sculpt}} waxay leedahay burushyo rinji, dhoobo, siman, qabo, buufi, xagal, siiq, fidi iyo maaskin, mirror-ka X dhinaca, iyo {{ui:Faahfaahin}} oo ku daraa saddexgeesood meesha aad sculpt-ka sameyso. Cadaadiska qalinka wuxuu dejiyaa cabbirka iyo xoogga burushka. Stroke kasta waa hal tallaabo oo ka noqo. Eeg [Sculpt a mesh](topic:sculpt).
- **Remesh iyo retopology.** {{ui:Remesh}} wuxuu mesh oo dhan mar kale sameeyaa saddexgeesood isku mid ah, isagoo xidhaya godad iyo isku xidhaya qaybo isku kaco. Si aad u dhistid mesh nadiif ah oo ka sarreeya mid faahfaahsan, dooro isagoo ku jira {{ui:Retopology}}: barta aad dhaqaajiso waxay ku degaysaa dusheeda. Eeg [Remesh](topic:mesh-edit#remesh).

### Naqshad

- **Qaybi geesta ama curve.** Qalabka {{ui:Kala qaybi}} wuxuu calaamadiyaa jaraha markaad ka dhaqaajiso geesta, wuxuuna qaybiyaa gujin ama lambar qoran; geesta, bayaanka ama goobada la doortay, qor `/5`; {{ui:Macluumaadka}} › {{ui:Kala qaybi…}} wuxuu weydiiyaa lambarka, tablet-ka. Bayaanka ama goobada waxaa loo qaybiyaa xagal isle'eg oo xagalka sax ah. Eeg [Qaybi geesta ama curve qaybo isle'eg](topic:divide).
- **Xisaabinta sanduuqa qiimaha.** Qor `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ama `2*450mm` dherer kasta, iyo `90/2` xagal. Xisaab aan la samayn karin wuxuu sheegaa waxa khaldan iyo meesha. Eeg [Xisaabinta](topic:value-box#calculations).

### Rendarka

- **Path tracing kaarka garaafka.** {{ui:Rendar sawir…}} › {{ui:Tayo sare (path traced)}} wuxuu socodsiiyaa path tracer-ka CadCraft ee kaarka garaafka halka browser-ku leeyahay WebGPU; sadarka hoose ee sawirka wuxuu sheegaa injineerka soo sameeyay. {{ui:Jooji}} wuxuu hayaa sawirka, {{ui:Sii wad}} wuxuu ka sii socdaa halkaas. Haddii WebGPU aanu jirin, sawirka waxa lagu path trace-gareeyaa WebGL, sida hore. Eeg [Tayo sare](topic:render#high-quality).
- **Rendar aragta.** Goobta rendarka path tracing-ka aragta laftiisa ayaa wuxuu bilaabaa mar kale marka aad wareejiso ama tafatirto: rendar {{ui:Gobol}}, guji si aad u {{ui:Diiradda}}, dejiso {{ui:Faahfaahin}}. Waxay u baahan tahay WebGPU. Eeg [Rendar aragta](topic:render#render-in-the-view).
- **Alaab, iftiin iyo samooyin.** Sawirrada tayo sare ahi waxay hoosaad kasta oo dusha ah ku hoosaadaan qaabka alaabta OpenPBR (dahaarro, fuzz, filimo khafiif ah, muraayad midab leh, iftiin). Halkaas WebGPU, waxaa jira {{ui:Samada jireed}} oo leh {{ui:Ceeryaan}}, {{ui:Sawirka samada (HDRI)}}, iyo profiles-ka iftiinka IES ee soo saaraha. Eeg [Samooyin iyo profiles-ka iftiinka](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Kaamera sida sawir.** Iftiinka ka f-stop, shutter iyo ISO, mode kasta; WebGPU, sidoo kale depth of field, perspective laba-barood, white balance, panorama 360° (sidoo kale stereo) iyo cube maps. Eeg [Kaameraha](topic:render#the-camera).
- **Dhammaystir sawirka ka dib rendarka.** Hagaaji ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} ama {{ui:Caadi}}, contrast, bloom, glare, vignette, miis midab `.cube`), isku dar samada, qorraxda iyo kooxda lambarada, oo eeg render elements mid mid, dhammaantood iyadoo aan mar kale rendarin. Dhaanta hadhay waxaa nadiifiya denoiser kombiyuutarkaaga. Eeg [Dhammaystir sawirka](topic:render#finish-the-picture) iyo [Isku qas iftiinka ka dib rendarka](topic:render#mix-the-lights-after-the-render).
- **Siyaabo dheeraad ah oo lagu kaydiyo rendar.** PNG 16-bit, EXR multi-layer oo leh render element kasta iyo kooxda iftiinka, iyo fayl rendar (`.ccrender`) oo dib u furma isku darkiisa iyo hagaaskiisa. Eeg [Kaydi sawirka](topic:render#save-the-picture).
- **Ceeryaan, qiiq iyo caustics.** Ceeryaan iyo ceeryaan ay iftiimiyaan qorraxda iyo lambaro, leh tiirar iftiin; hal tiir qiiq ama hal daruur; caustics hoosta muraayadaha iyo muraayadaha; adaptive sampling oo joojiya pixels-ka nadiifka ah. Kaarka garaafka oo keliya. Eeg [Ceeryaan, qiiq, dhawaaq iyo caustics](topic:render#fog-smoke-noise-and-caustics).
- **Safka rendarka iyo MP4.** Ku dar sawirro tayo sare ah iyo animations oo dhan {{ui:Safka rendarka}}; mid-mid ayay u rendaraan, safka wuu ku sii jiraa marka bogga la xido. Waxay u baahan tahay WebGPU. Fiidiyowyada waxaa sidoo kale lagu kaydin karaa MP4 meel browser-ku ku qori karo. Eeg [Safka rendarka](topic:render#the-render-queue) iyo [Rendar fiidiyaha](topic:animation#render-the-video).

### Aragta toosa ah iyo bandhigyada

- **Live view.** {{ui:Soo saar}} › {{ui:Muuqaalka tooska ah}} wuxuu muujinayaa moodeelka muuqaal wakhti dhab ah oo ku taal aragta, wuxuu raacaa tafatir kasta iyo kaamerada: hooska qorraxda, agabka, lambaro iyo iftiinka dhabaha. {{ui:Socod}} wuu ku dhex socdaa, jiid {{ui:Waqti}} iyo {{ui:Bil}} si aad u dhaqaajiso qorraxda, ama u geey {{ui:Daaqad cusub}}. Wuxuu isticmaalaa WebGPU meesha browser-ku leeyahay, kaleba WebGL 2. Eeg [Aragta toosa ah](topic:live-view).
- **Scatter.** Ku firdhi cawska, ubaxyada, dhagaxyada, geedaha iyo dadka dusha ama brush-ka, oo laga soo qaato toddobo shay oo cusub iyo maktabadda kale; ururiyada waxa lagu kaydiyaa faylka. Eeg [Scatter dhirta, dhagaxyada iyo dadka](topic:live-view#scatter-plants-rocks-and-people).
- **Wadaagid.** Panorama 360°, tour panorama oo leh fallaaro u dhexeeya meelaha, muuqaal kali ah oo fayl ah (bog hoosaad ah oo furma khad la'aan ah oo aan wax internet ka soo qaadin) iyo fiidyoow jid kaamera, dhammaantood muuqaalka wakhtiga dhabta ah. Eeg [Wadaagid](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR muuqaalka wakhtiga dhabta ah.** {{ui:Dib u eeg VR}} wuxuu muujinayaa moodeelka agabkiisa, samada, hooska qorraxda, lambaro, shayaad firdhsan iyo iftiinka dhabaha. Eeg [Sida ay u muuqato](topic:vr-review#what-it-looks-like).

### Agabka

- **Agab lagu sameeyo nodes.** Goobta {{ui:Hoosaad}} wuxuu dhisaa agabka faylka sida grafiyada nodes: sawiro, noise iyo checker-yo, unugyada Voronoi, mowjado, dhismo, tiilo, qabow, marble, gradients, wasakh iyo cidhifka xidhid, shaqada midabka, xisaab, bump iyo normal maps, ilaa OpenPBR oo dhan. Aragta waxay muujinaysaa isbeddel kasta mar. Eeg [Samee agabka nodes](topic:shading).
- **Maktabadda agabka iyo teksturadaadii.** Panelka Hoosaad wuxuu liistaa agabada Maktabadda: 16 CC0 texture sets, mid kastaa wuu aqoonsanyahay. Riix mid si aad u isticmaasho, ama jiid dusha. {{ui:Sawirro ama zip…}} ama {{ui:Gal…}} wuxuu sameeyaa agab ka maaptaadaada, oo lagu aqoonsado magacyada faylka. Eeg [Agabka maktabadda](topic:shading#materials-from-the-library).
- **MaterialX gelin iyo bixin.** Dhoofi agab sida MaterialX (OpenPBR Surface ama Standard Surface, teksturada PNG), oo soo geli faylalka MaterialX iyo sawirradooda. Eeg [MaterialX](topic:shading#materialx).
- **Decals iyo rinjiga teksturka.** Ku dhig sawir dusha sida decal oo leh agab gaar ah, oo rinji sawirka agabka brush wareegsan. Eeg [Decals](topic:shading#decals) iyo [Rinji teksturka](topic:shading#paint-on-the-texture).
- **Dubbeynta teksturada.** Dubbee ambient occlusion, curvature, iftiinka iyo normals-ka shay faahfaahsan oo sawiro ah oo ku dhex jira UV-yada mesh-ka, oo lagu sameeyo cores-ka processor-ka kombiyuutarka. Eeg [Dubbee teksturada](topic:shading#bake-textures).

### Animation

- **Goobta Animate.** Muuqaal kasta ku dhaji meel, leexasho iyo cabbir, iyo shidnaanta lambar kasta, baaxadda iyo midabka, iyo xagal lens, si toos ah panelka. Timeline-ku wuxuu helayaa aragta {{ui:Qalin}} (Bézier handles, ku celcelin) iyo aragta {{ui:Clips}} oo kaydinta furayaasha sida falal ah oo dib loo dhigo oo isku dar; furayaasha safafka badan waa la dhaqaajin karaa, la fidin karaa, la koobiyeyn karaa, la alabaqsan karaa. Eeg [Animate any property](topic:animate).
- **Shape keys iyo drivers.** Mesh wuxuu hayaa qaabab kale oo isaga ah, oo lagu isku dhejiyo slider-ro la furayo ama lagu dejin karo qiimo ka yimid qiimayaal kale oo expression yar ah. Eeg [Shape keys](topic:animate#shape-keys-morphs) iyo [Drivers](topic:animate#drivers).
- **Armatures.** Ku dhig bones mesh-ka, oo {{ui:Miisaanka toosan}} u wadaag dhibcaha iyaga dhexdooda ama rinji miisaannada, oo ku dhaji oo ku furaysso bones; linear ama dual quaternion skinning. Eeg [Armatures](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK iyo constraints.** Gaadhid (IK) oo leh pole, eeg, koobiyee transforms, xaddidaadyo, child of iyo follow path, bones iyo shayaadka. Eeg [IK iyo constraints](topic:animate#ik-and-constraints).
- **Physics.** Kooxaha iyo komponentada way dhacaan, way isku dhejiyaan oo way isku dhacaan sida sanduuqyo ama kubbado, {{ui:Dubbee fiisigiska}} wuxuu kaydiyaa natiijada sida furayaasha. Eeg [Physics](topic:animate#physics-drop-stack-and-collide).

### Faylalka

- **USD.** {{ui:Kaydi sida}} ({{key:Mod+Shift+S}}) wuxuu kaydiyaa moodeelka sida `.usda`, `.usdc` ama `.usdz`, faylka USD ee ModelCraft kaydiyay wuu dib u furmaa iyada oo waxba lumin. USD ka barnaamijyada kale wuxuu furmaa ama soo geliyaa sida mesh-yo, kooxo, komponentada, lambaro iyo kaamerooyin. {{ui:Kaydi}} wuxuu weli kaydiyaa `.modelcraft`. Eeg [Kaydi, fur iyo dhoofi USD](topic:usd).
- **glTF, oo dhamaystiran.** Faylalka glTF waxay u yimaadaan sida mesh-yo la tafatiri karo, oo leh normals, UVs, midabka geesaha iyo teksturada; nodes sida kooxo, iftiinka sida lambaro, kaamerooyinka sida muuqaalo, Draco iyo meshopt oo ku jira; `.gltf` wuu furmaa marka lagu soo tuuro faylalkiisa la socda. Dhoofintu waxay qorta mesh-yo, teksturo, lambaro iyo kaamerooyin. Eeg [glTF](topic:formats#gltf-glb-gltf).
- **Soo geli FBX, PLY, STL iyo Alembic.** FBX 2011 iyo ka cusub (mesh-yo, UV sets, agabka, teksturo lagu daray, lambaro, kaamerooyin), PLY iyo STL midabkooda, iyo Alembic caches sample-kooda ugu horreeya. OBJ wuxuu yimaadaa `.mtl` iyo sawiradiisa marka lagu soo tuuro wada. Eeg [Qaababka faylalka faahfaahin](topic:formats).
- **Dhoofinta dheeraad ah.** PLY midabka, STL midabka geesaha la rinjiyeeyay, iyo OBJ teksturadiisa hal zip ah. Eeg [Qaababka faylalka faahfaahin](topic:formats).
- **Faylalka STEP.** {{ui:Soo dhoofi}} wuxuu akhrinayaa qaybaha iyo assemblies-ka STEP (AP203, AP214, AP242) sida mesh-yo xidhan oo cabbirkooda sax ah, qayb kasta meesha faylku dhigo. Eeg [STEP](topic:formats#step-step-stp).
- **Faylalka .3dm.** {{ui:Soo dhoofi}} wuxuu akhrinayaa moodeelada `.3dm`: meshes, polysurfaces iyo extrusions (meshes-ka faylka lagu kaydiyay, haddii kale ModelCraft ayaa tessellate-gareeya), curves sida geesood, blocks sida komponentada iyo layers sida tags. Eeg [Soo geli moodeel .3dm](topic:import-3dm-files).
- **Faylalka 3D solids ee DWG iyo DXF.** Marka naqshad la soo geliyo, waxay soo geli 3D solids-ka, gobollada iyo jidhadka kale, mid kastaa kooxdiisa, kuwa xidhan sida solids. Eeg [Ku qor moodeel qorshe goobeed](topic:site-plan#what-comes-in).

### Daabacaadda 3D

- **Qalabka daabacaadda.** {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}} › **Qalabka daabacaadda** wuxuu leeyahay {{ui:Hormarinta taageerooyinka}} (overhangs, tiirar ama taageerooyin geed, qiyaas alaabta), {{ui:Ballaca darbiga}} (darbiyada aad u khafiifka ah ee aan la daabacin, lagu liistay {{ui:Muuji}}), {{ui:Dhex-madhan}} (darbiyo ballaac aad siisay, oo leh godad biyo) iyo {{ui:Hagaaji}} (dhammaan hagaajinta la liistay; qaybaha isku dhacaya waxay isku xidhaan kaliya marka aad weydiisid). Dhex-madhan iyo Hagaaji waxay kuu siinayaan kooxo oo dusha dhinacyadooda caadiga ah ah dhinacyo keliya, ama mesh haddii natiijadu aanay xirmin ama ay leedahay dhinac badan; sadarka hoose wuxuu sheegaa; eeg [Taageerooyinka, ballaca darbiga, dhex-madhanka iyo hagaaska](topic:print-tools).
- **Style-ka Bilowga.** {{ui:Dejinta}} › {{ui:ModelCraft}} › {{ui:Menyuyaasha, furayaasha iyo mouse-ka}} › {{ui:Bilowga}}: badhamo waaweyn oo lagu dhigo qaabab iyo godad, guuri, isku toosin iyo {{ui:Koox}} si godad u jarmaan, ka dibna hubi moodeelka daabacaadda. Eeg [Style-ka Bilowga](topic:beginner).

### Kaaliyayaasha iyo kombiyuutarkaaga

- **Wax dheeraad ah oo AI kaaliyayaasha.** Kaaliyuhu hadda wuu liisan karaa dhinacyada iyo agabka, push/pull, rinji, samee kooxo, ku dar oo muuji muuqaalo, ku dar mesh-yo, tafatir xirmooyinka beddelayaasha, dhoofi USD, rendar sawir oo buuxi safka rendarka. Eeg [Isticmaal ModelCraft kaaliye AI ah](topic:use-with-ai-assistants).
- **Kombiyuutarkaaga.** {{ui:Dejinta}} › {{ui:ModelCraft}} › {{ui:Rendar}} › {{ui:Kumbiyuutarkaaga}} wuxuu muujinayaa graphics-ka, cores-ka processor-ka, xusuusta uu browser-kan u ogolaado app-ka, iyo heerka uu aragta toosa ah ka bilaabo. Eeg [Waxa kombiyuutarkaagu rendarka ku sameeyo](topic:your-machine).

## La hagaajiyay

- {{ui:Jirarka}} › {{ui:Isku geyn}}, {{ui:Jar}} iyo {{ui:Isgoys}} waxay soo celin jireen kooxda aan xidhnayn, ballac kasta. Hadda way xidhan yihiin.
- {{ui:Jirarka}} › {{ui:Jar}} wuxuu ahaa mid midabkiisu dhimman yahay marka waxba la dooran, in kasta oo marka la doorto uu labada qayb si jaad ah u doortaa.
- Gudaha timeline-ka animation-ka, furayaasha la qoro meel ma gelin, {{key:Mod+S}} sidoo kale. {{key:Mod+Z}} iyo {{key:Mod+Y}} halkaas waa ka noqo iyo samee mar kale ee timeline-ka; furayaasha {{key:Mod}} kale waxay gaaraan app-ka.

## Barnaamij kasta

- **Unitada.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Cutubyada}} wuxuu leeyahay liis kasta oo dherer, balac, mug, xagal iyo jiritaan (slope), oo leh cabbirrada saxda ah ee qeexidda unitada (feet-ka US survey waa unit gaar ah). Ka demi unitada aan waligaa isticmaalin, oo ka tirtir liiska; xiddigeey mid si shaqada cusub ay ugu bilowdo. Fayl kasta wuxuu had iyo jeer hayaa unitkiisa. ModelCraft-ka liiska unitada ee ku yaal sanduuqa qiimaha wuxuu raacaa doorashooyinka, unitka moodeelka had iyo jeer wuu ku jiraa, xiddiguna wuxuu dejiyaa unitka moodeel cusub, marka ModelCraft uu unitkaas leeyahay. Eeg [Unitada, qiimaha qoran iyo liisaska unitada](common:unit-lists).
- **Qaabeyn cufan iyo panelo la habeeyo.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Cabbirka qaabeynta}} › {{ui:Kooban}} wuxuu wax badan geliyaa shaashadda (shaashadaha taabashada iyo taleefannada waxay hayaan badhamadooda waaweyn). Panel kasta wuxuu leeyahay cinwaan bar yar: jiid si aad u dhigto ama u dhigto mid sabbeeya, ku daa bar kale si aad u wadaagto frame tabs ahaan, ku xidh si uu u siibto geeska, ama qari oo dib u soo celi geeska. Eeg [Habee panelada](common:arrange-panels#make-the-layout-denser).
- **Dialog-yadu way dhaqaaqaan.** Jiid dialog-ka title bar-kiisa si uu uga baxo sawirka; wuu soo laabanayaa halkii aad ka tagtay. Laba jeer-guji title bar-ka si aad u dhex geliso mar kale. Eeg [Dhaqaajinta dialog-ka](common:arrange-panels#move-a-dialog).
- **Toban codsi oo kaaliye AI ah.** Toban codsi oo dhab ah oo kaaliyahaaga (naqshad nadiifi, qorshe ururin, naqshadaha hubi, moodeel su'aal weydii, takeoff wadar, isku day variant-ka qayb …), mid kastaa leh qalabkiisa iyo ogolaanshaha uu u baahan yahay, mid kastaana waxaa dib u ciyaaray tijaabadayada. Apps-ka ma leh AI. Eeg [Tusaalooyinka kaaliyayaasha AI](common:assistants-recipes).
- **Luuqadaha.** **Português (Portugal)** waa cusub {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Luuqad}}. Iyo **Português (Brasil)**, **Español (México)** iyo **Bahasa Indonesia** hadda waxay leeyihiin ereyada app-ka oo dhan, sida qabyo aan weli barbaro af-hooyo ahi akhrin. Mawduucyada caawinta waxay ku jiraan Ingiriisi.
- **CadCraft Studio** wuxuu sheegaa sababta cusboonaysiinta u guuldaysatay (ma jiro fayl nidaamkaaga weli, ma jiro shabakad, saxiixa khaldan) halkii uu ku odhon lahaa "Dhammaaday", wuxuuna joojiyaa soo celinta kaarka waxa cusub ee aad xirtay ilaa uu jiro nooc cusub.

## Weli kuma jirto nooca

- **0.7 lama saxiixin code.** Saxiixa, iyo xirmada Microsoft Store, waxay u wareegeen 0.8 sababtoo ah ansixinta shahaadada weli ma imaan. Hubi SHA-256 ee fayl kasta oo ku taal getcadcraft.com/download. Windows, haddii SmartScreen joojiyo installer-ka, dooro {{ui:Macluumaad dheeraad ah}}, ka dibna {{ui:Wax kasta sii wad}}. Mac-ka, markii ugu horreysay, midig-guji CadCraft Studio oo dooro {{ui:Fur}}. CadCraft Studio weli ma jiro dukaanka app-yada, iPad ama iPhone dhismo weli ma jiro.
- Liiska xagalka iyo jiritaanka ee {{ui:Cutubyada}} waa la kaydiyaa, laakiin weli ma jiro sanduuq akhrinaya.
- Rendarka kaarka garaafka (WebGPU) waxaa lagu tijaabiyay halkan software stand-in oo keliya, kaarka garaafka dhab ah weli ma lagu tijaabin, sidaas darteed rendar wax yar kombiyuutarkaaga marka hore. Isla arrintaas ayaa ku saabsan aragta toosa, VR-na weli waxaa lagu tijaabiyay emulator madadaal oo keliya.
- Ma jiro WebGPU, ma jiro goobta rendarka iyo safka rendarka; sawirro tayo sare ahi ma leeyihiin depth of field, samada jireed, sawirka samada, ceeryaan, qiiq, caustics ama isku darka iftiinka.
- {{ui:Rendar sawir…}} weli ma rendariyo shayaad firdhsan; way muuqdaan aragta toosa, panoramas-kooda, viewer-kooda iyo fiidyowga.
- Lambaro waa animate-gareeyaan aragta, laakiin fiidyow la rendariyey wuxuu isticmaalaa lambarada sida ay tahay marka uu bilaabo.
- Bones iyo animation lama akhriyo lamana qorin faylalka glTF, FBX ama USD weli (moodeelada skin-ka leh waxay yimaadaan nasasho, miisaankooda leh), glTF iyo FBX agabka ka sii badan midabka saldhigga ama teksturada weli lama hayo.
- Midabka STEP iyo magacyada qaybaha assembly-ga weli lama akhriyo. Soo gelinta `.3dm` waxaa lagu tijaabiyay faylalka uu qoray toolkit-ka qaabka, weli faylalka barnaamijka naqshadaynta laftiisa ma aan tijaabin; SubD objects, qoraal iyo cabbirro way ka maqan yihiin.
- Dhirta maktabadda CivilCraft waa ModelCraft dhexdeeda, laakiin dhigidda dhirta ka soo qaadista weli lama dhisin.
- Rinjiga teksturka dusha push/pull wuxuu ku celcelinayaa tile-ka agabka; si aad dhinac keliya u rinjiso, u beddel mesh oo unwrap.

Waxa kale oo dhan waa ku jira [Weli lama dhisin](topic:not-built-yet).
