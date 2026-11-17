---
title: Hvað er nýtt í 0.7 (eldra)
summary: Möskvar með breytingum, móta, UV- og ferilhlutir, geislarakning á skjákorti og myndgerðarvinnusvæði, rauntímasýn með dreifingu og víðmyndum, hnútaefni, hreyfivinnusvæði með beinum og eðlisfræði, USD-, FBX-, STEP- og .3dm-skrár, og prentverkfæri með byrjendastíl.
keywords: hvað er nýtt 0.7, eldri útgáfa, útgáfuskýringar, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, möskvi, möskvar, möskvavinnusvæði, breytingar, undirskipting, fald, uv, afvefja, saumar, ferlar, ferilhlutir, nurbs, bezier, móta, endurmöskva, endurtopólógía, skipta, reikningur, geislarakning, webgpu, myndgerðarvinnusvæði, myndgerðarröð, mp4, exr, afhávaðun, eðlisfræðilegur himinn, hdri, ies, dýptarskerpa, ljósablöndun, þoka, caustics, lifandi sýn, rauntími, ganga, dreifing, víðmynd, sýnari, skygging, hnútar, hnútaefni, efnasafn, materialx, límmiðar, áferðarmálun, bökun, hreyfing, ferilritill, bútar, lykilsnið, drif, beinagrind, bein, skinning, ik, þvinganir, eðlisfræði, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, föst form, stoðir, veggþykkt, holað, lagfæring, byrjandi, aðstoðarmenn, þín tölva, einingar, portúgalska
from: fa562a09
---

Þetta er það sem breyttist í ModelCraft 0.7, borið saman við 0.6. ModelCraft líkir nú eftir möskvum sem og rúmfræði með ýtingu og togi, myndgerir á skjákortinu og hefur vinnusvæði fyrir hverja tegund vinnu: veldu það í listanum {{ui:Vinnusvæði}} vinstra megin á tækjastikunni.

## Nýtt

### Möskvar

- **Möskvar.** Veldu hóp eða íhlut og smelltu á {{ui:Breyta í möskva}} í {{ui:Upplýsingar um eind}}: hann verður að möskva, með flötum með hvaða fjölda horna sem er, sem geta borið áferðarhnit, normöl, liti og vigtir. {{ui:Breyta í rúmfræði}} breytir honum til baka. Afturköllun á möskva geymir aðeins það sem hvert skref breytti. Skrá sem geymir möskva þarf ModelCraft 0.7 til að opnast. Sjá [Möskva](topic:meshes).
- **Möskvavinnusvæðið.** Tvísmelltu á möskva, eða veldu {{ui:Möskvi}} í listanum {{ui:Vinnusvæði}}, til að breyta hnitapunktum, jöðrum og flötum: lykkjum og hringjum, hlutfallslegri breytingu, útdrætti, innskotum, skáskurði, lykkjuskurði, hnífi, tvískiptingu, snúningi, sameiningu, uppleysingu, fyllingu, ristfyllingu, brú og rennsli, og stillingar síðustu aðgerðar er hægt að breyta síðar í spjaldinu. Byrjaðu á sléttu, teningi, kúlu, torus og fleiru. Ýta/toga-takkar og mótunartakkar virka báðir. Sjá [Breyta möskva í möskvavinnusvæðinu](topic:mesh-edit).
- **Breytingar.** Spegill, fylki, undirskiptur flötur, skáskurður, útþensla, bool, útskot, suðu, minnkun, mýking, grind, sveigja ferils og krympuvefja breyta því hvað möskvi sýnir án þess að breyta honum. Stafla þeim, kveiktu eða slökktu á hverri fyrir sýnina og fyrir myndgerðir, og {{ui:Beita}} einni þegar þú vilt hana til frambúðar. Sjá [Breytingar á möskva](topic:modifiers).
- **Undirskipting með földum.** {{ui:Fald}} í Möskvavinnusvæðinu heldur völdum jöðrum skörpum undir undirskiptum fleti. Myndgerðir geta notað fleiri stig en sýnin, og á stórum möskva sýnir sýnin lægra stig og segir frá því. Sjá [Undirskiptur flötur](topic:modifiers#subdivision-surface).
- **Ferilhlutir.** Bezier-, NURBS- og beinir ferlar sem mynda rör, bönd, mjókkanir eða fyllta plötu, og texti sem ferill. Breyttu punktum þeirra í {{ui:Ferill}}-vinnusvæðinu; {{ui:Í möskva}} þegar lögunin er rétt. Sjá [Ferilhlutir](topic:curves).
- **UV-vinnusvæðið.** Merktu sauma (eða láttu ModelCraft merkja þá við skarpar brúnir), {{ui:Afvefja}} og {{ui:Raða}}, eða varpaðu með kassa, strokki, kúlu eða sýninni. UV-ritill við hlið þrívíddarsýnarinnar færir, snýr og skalar stykkin, og skákborð og teygjulitir sýna útkomuna. Sjá [Leggja út UV-hnit möskva](topic:uv).
- **Mótun.** {{ui:Móta}}-vinnusvæðið hefur teikni-, leir-, mýkingar-, grip-, uppblásturs-, fald-, klípu-, sléttunar- og grímubursta, speglun yfir X, og {{ui:Smáatriði}} sem bætir þríhyrningum þar sem þú mótar. Þrýstingur pennans stillir stærð og styrk burstans. Hvert strok er eitt skref í afturköllun. Sjá [Móta möskva](topic:sculpt).
- **Endurmöskva og endurtopólógía.** {{ui:Endurmöskva}} býr til aftur heilan möskva úr jöfnum þríhyrningum, lokar götum og sameinar skarandi stykki. Til að byggja hreinan möskva yfir ítarlegum skaltu velja hann undir {{ui:Endurtopólógía}}: punktar sem þú færir lenda á yfirborði hans. Sjá [Endurmöskva](topic:mesh-edit#remesh).

### Teikning

- **Skipta jaðri eða ferli.** Verkfærið {{ui:Skipta}} merkir skurðina þegar þú ferð eftir jaðri og skiptir með smelli eða slegnu tölu; með jaðri, boga eða hring valinn skaltu slá inn `/5`; {{ui:Upplýsingar um eind}} › {{ui:Skipta…}} biður um töluna, fyrir spjaldtölvur. Bogi eða hringur er skiptur í jöfn horn á réttum boga. Sjá [Skipta jaðri eða ferli í jafna hluta](topic:divide).
- **Reikningur í gildisreitnum.** Sláðu inn `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` eða `2*450mm` fyrir hvaða lengd sem er, og `90/2` fyrir horn. Reikningur sem ekki er hægt að framkvæma segir hvað er að og hvar. Sjá [Reikningur](topic:value-box#calculations).

### Myndgerð

- **Geislarakning á skjákortinu.** {{ui:Myndgera mynd…}} › {{ui:Hágæði (geislarakning)}} keyrir eigin geislarakningu CadCraft á skjákortinu þar sem vafrinn hefur WebGPU; línan undir myndinni segir hvaða vél myndaði hana. {{ui:Stöðva}} heldur myndinni og {{ui:Halda áfram}} heldur áfram þaðan. Án WebGPU er myndin geislarakin með WebGL, eins og áður. Sjá [Hágæði](topic:render#high-quality).
- **Myndgera í sýninni.** {{ui:Myndgera}}-vinnusvæðið geislarakar sýnina sjálfa og byrjar aftur þegar þú sveigir eða breytir: myndgerðu {{ui:Svæði}}, smelltu til að {{ui:Fókus}}, stilltu {{ui:Smáatriði}}. Það þarfnast WebGPU. Sjá [Myndgera í sýninni](topic:render#render-in-the-view).
- **Efni, ljós og himnar.** Hágæðamyndir skyggja hvern flöt með OpenPBR-efnislíkaninu (húðum, lói, þunnum filmum, lituðu gleri, ljóma). Með WebGPU er líka {{ui:Eðlisfræðilegur himinn}} með {{ui:Móða}}, {{ui:Himinmynd (HDRI)}}, og IES-ljósasnið framleiðanda fyrir lampa. Sjá [Himnar og ljósasnið](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Myndavél eins og ljósmyndavél.** Lýsing eftir ljósopi, lokunarhraða og ISO í öllum stillingum; með WebGPU einnig dýptarskerpa, tvípunkta fjarvídd, hvítjöfnun, 360° víðmyndir (einnig í þrívídd) og kortalíkön. Sjá [Myndavélin](topic:render#the-camera).
- **Ljúktu myndinni eftir myndgerð.** Gráðu hana ({{ui:ACES filmískt}}, {{ui:AgX}}, {{ui:Filmískt}} eða {{ui:Staðlað}}, birtuskil, ljómi, glampi, skuggaður jaðar, `.cube`-litatafla), blandaðu himninum, sólinni og hverjum lampahópi, og skoðaðu myndgerðarþætti einn í einu, allt án þess að myndgera aftur. Það sem eftir er af kornun er fjarlægt með afhávaðun á þinni eigin tölvu. Sjá [Ljúka myndinni](topic:render#finish-the-picture) og [Blanda ljósunum eftir myndgerð](topic:render#mix-the-lights-after-the-render).
- **Fleiri leiðir til að vista myndgerð.** 16 bita PNG, fjöllaga EXR með öllum myndgerðarþáttum og ljóshópum, og myndgerðarskrá (`.ccrender`) sem opnast aftur með blöndun sinni og gráðun. Sjá [Vista myndina](topic:render#save-the-picture).
- **Þoka, reykur og caustics.** Þoka og móða lýst af sólinni og lömpum, með ljósgeislum; ein reykssúla eða ský; caustics undir gleri og speglum; aðlögunarsýnataka sem hættir á pixlum sem eru þegar hreinir. Aðeins á skjákortinu. Sjá [Þoka, reykur, hávaði og caustics](topic:render#fog-smoke-noise-and-caustics).
- **Myndgerðarröð og MP4.** Bættu hágæðamyndum og heilum hreyfimyndum í {{ui:Myndgerðarröð}}; þær myndast hver á eftir annarri og röðin lifir af að loka síðunni. Það þarfnast WebGPU. Myndskeið má einnig vista sem MP4 þar sem vafrinn getur skrifað það. Sjá [Myndgerðarröðin](topic:render#the-render-queue) og [Myndgera myndskeiðið](topic:animation#render-the-video).

### Lifandi sýn og kynningar

- **Lifandi sýn.** {{ui:Flytja út}} › {{ui:Lifandi sýn}} sýnir líkanið í rauntímaútliti við hliðina á sýninni, og fylgir hverri breytingu og myndavélinni: sólarskuggar, efni, lampar og ljós sem kastast af veggjum. {{ui:Ganga}} um það, dragðu {{ui:Tími}} og {{ui:Mánuður}} til að færa sólina, eða færðu það í {{ui:Nýr gluggi}}. Það notar WebGPU þar sem vafrinn hefur það, annars WebGL 2. Sjá [Lifandi sýnin](topic:live-view).
- **Dreifing.** Dreifðu grasi, blómum, steinum, trjám og fólki yfir fleti eða með bursta, úr sjö nýjum hlutum og restinni af safninu; settin eru vistuð í skránni. Sjá [Dreifðu plöntum, steinum og fólki](topic:live-view#scatter-plants-rocks-and-people).
- **Deiling.** 360° víðmynd, víðmyndarferð með örvum á milli staða, sjálfstæður sýnari (ein vefsíða sem opnast án nettengingar og sækir ekkert af netinu) og myndskeið af myndavélarferlinum, allt í rauntímaútlitinu. Sjá [Deiling](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR í rauntímaútlitinu.** {{ui:Yfirfara í VR}} sýnir líkanið með efnum sínum, himni, sólarskugga, lömpum, dreifðum hlutum og ljósi sem kastast. Sjá [Hvernig það lítur út](topic:vr-review#what-it-looks-like).

### Efni

- **Efni búin til með hnútum.** {{ui:Skyggnun}}-vinnusvæðið byggir efni skrárinnar sem hnútanet: myndir, hávaða og skákborð, Voronoi-frumur, bylgjur, múrsteina, flísar, við, marmara, stigul, óhreinindi og slit á jöðrum, litavinnu, reikning, bump- og normal-kort, í fullt OpenPBR-efni. Sýnin sýnir hverja breytingu strax. Sjá [Búa til efni með hnútum](topic:shading).
- **Efnasafn og þín eigin áferðarsett.** Skyggnunarspjaldið listar efni úr safninu: sextán CC0 áferðarsett, hvert með heimild. Smelltu á eitt til að nota það, eða dragðu það á flöt. {{ui:Myndir eða zip…}} eða {{ui:Mappa…}} býr til efni úr þínum eigin kortum, fundnum eftir skráarnöfnum þeirra. Sjá [Efni úr safninu](topic:shading#materials-from-the-library).
- **MaterialX inn og út.** Fluttu efni út sem MaterialX (OpenPBR Surface eða Standard Surface, áferðir sem PNG), og fluttu inn MaterialX-skrár með myndum sínum. Sjá [MaterialX](topic:shading#materialx).
- **Límmiðar og áferðarmálun.** Settu mynd á yfirborð sem límmiða með efni af sínu eigin, og málaðu á mynd efnis með kringlóttum bursta. Sjá [Límmiðar](topic:shading#decals) og [Mála á áferðina](topic:shading#paint-on-the-texture).
- **Bökun áferða.** Bakaðu umhverfisskugga, sveigju, lýsingu og normöl ítarlegs hlutar í myndir eftir UV-hnitum möskva, á örgjörvakjörnum tölvunnar. Sjá [Baka áferðir](topic:shading#bake-textures).

### Hreyfing

- **Hreyfivinnusvæðið.** Settu lykil á stöðu, snúning og stærð hlutar, birtu hvers lampa, dreifingu og lit, og linsuhorn, beint í spjaldinu. Tímalínan fær {{ui:Ferlar}}-sýn (Bezier-handföng, endurtekningar) og {{ui:Bútar}}-sýn sem vistar lykla sem aðgerðir til að staðsetja og blanda aftur; lyklar á mörgum röðum er hægt að færa, teygja, afrita og líma. Sjá [Hreyfðu hvaða eiginleika sem er](topic:animate).
- **Lykilsnið og drif.** Möskvi geymir aðrar myndir af sjálfum sér, blandaðar með rennum sem hægt er að setja lykla á, eða stilltar eftir öðrum gildum með litlum segðum. Sjá [Lykilsnið](topic:animate#shape-keys-morphs) og [Drif](topic:animate#drivers).
- **Beinagrindur.** Settu bein í möskva, láttu {{ui:Sjálfvirk vægi}} deila punktunum á milli þeirra eða málaðu vigtirnar, og stilltu og settu lykla á beinin; línulegt eða tvöfalt kvaternjón-hnútanet. Sjá [Beinagrindur](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK og þvinganir.** Ná (IK) með póli, horfa á, afrita umbreytingar, takmarkanir, barn af og fylgja ferli, fyrir bein og hluti. Sjá [IK og þvinganir](topic:animate#ik-and-constraints).
- **Eðlisfræði.** Hópar og íhlutir falla, hlaðast og rekast saman sem kassar eða kúlur, og {{ui:Reikna eðlisfræði}} geymir niðurstöðuna sem lykla. Sjá [Eðlisfræði](topic:animate#physics-drop-stack-and-collide).

### Skrár

- **USD.** {{ui:Vista sem}} ({{key:Mod+Shift+S}}) vistar líkanið sem `.usda`, `.usdc` eða `.usdz`, og USD-skrá sem ModelCraft vistaði opnast aftur án þess að neitt tapist. USD frá öðrum forritum opnast eða flytjast inn sem möskvar, hópar, íhlutir, lampar og myndavélar. {{ui:Vista}} vistar áfram `.modelcraft`. Sjá [Vista, opna og flytja út USD](topic:usd).
- **glTF, heilt.** glTF-skrár koma inn sem breytanlegir möskvar með normölum, UV-hnitum, hnútalitum og áferðum, hnútar sem hópar, ljós sem lampar og myndavélar sem senur; Draco- og meshopt-skrár innifaldar; `.gltf` opnast þegar hún er dregin inn með skrám sínum. Útflutningur skrifar möskva, áferðir, lampa og myndavélar. Sjá [glTF](topic:formats#gltf-glb-gltf).
- **FBX-, PLY-, STL- og Alembic-innflutningur.** FBX 2011 og nýrri (möskvar, UV-sett, efni, innbyggðar áferðir, ljós, myndavélar), PLY og STL með litum sínum, og Alembic-skyndimyndir við fyrsta sýnið. OBJ kemur inn með sinni `.mtl`-skrá og myndum þegar þær eru dregnar inn saman. Sjá [Skráasnið nánar](topic:formats).
- **Fleiri útflutningar.** PLY með litum, STL með litum málaðra fleta, og OBJ með áferðum sínum sem einn zip-pakki. Sjá [Skráasnið nánar](topic:formats).
- **STEP-skrár.** {{ui:Flytja inn}} les STEP (AP203, AP214, AP242) hluta og samsetningar sem lokaða möskva í réttri stærð, hvern hluta þar sem skráin setur hann. Sjá [STEP](topic:formats#step-step-stp).
- **.3dm-skrár.** {{ui:Flytja inn}} les `.3dm`-líkön: möskva, fjölyfirborð og útdrætti (úr möskvunum sem eru vistaðir í skránni, annars sléttaða af ModelCraft), ferla sem jaðra, blokkir sem íhluti og lög sem merki. Sjá [Flytja inn .3dm-líkan](topic:import-3dm-files).
- **Föst form úr DWG og DXF.** Þegar teikning er flutt inn koma þrívíddarföst form, svæði og rúmtök hennar líka, hvert sem sinn hóp, lokuð sem föst form. Sjá [Líkan á lóðarteikningu](topic:site-plan#what-comes-in).

### Þrívíddarprentun

- **Prentverkfæri.** {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}} › **Prentverkfæri** hefur {{ui:Forskoðun stuðninga}} (yfirhengi, súlur eða trjástuðningar, u.þ.b. hversu mikið efni), {{ui:Veggþykkt}} (veggir of þunnir til að prenta, skráðir með {{ui:Sýna}}), {{ui:Holað}} (veggir af þeirri þykkt sem þú gefur, með frárennslisgötum) og {{ui:Lagfæra}} (sérhver lagfæring skráð; skarandi hlutar sameinast aðeins þegar þú biður um það). Holað og Lagfæra skila hópi þar sem flatar hliðar eru stakir fletir, eða möskva þegar útkoman myndi ekki lokast eða hefur of marga fleti; stöðulínan segir hvort er. Sjá [Stuðningar, veggþykkt, holun og lagfæring](topic:print-tools).
- **Byrjendastíllinn.** {{ui:Stillingar}} › {{ui:ModelCraft}} › {{ui:Valmyndir, takkar og mús}} › {{ui:Byrjandi}}: stórir hnappar til að setja inn form og göt, færa, jafna og {{ui:Hópur}} svo göt skerast, og athuga síðan líkanið fyrir prentun. Sjá [Byrjendastíllinn](topic:beginner).

### Aðstoðarmenn og þín tölva

- **Meira fyrir gervigreindaraðstoðarmenn.** Aðstoðarmaður getur nú skráð fleti og efni, ýtt/togað, málað, búið til hópa, bætt við og sýnt senur, bætt við möskvum, breytt breytingastöflum, flutt út USD, myndgert mynd og fyllt myndgerðarröðina. Sjá [Nota ModelCraft með gervigreindaraðstoðarmönnum](topic:use-with-ai-assistants).
- **Þín tölva.** {{ui:Stillingar}} › {{ui:ModelCraft}} › {{ui:Myndgerð}} › {{ui:Þín tölva}} sýnir skjákortið, örgjörvakjarna og minnið sem þessi vafri leyfir forritinu að nota, og stigið sem ákvarðar hvar lifandi sýnin byrjar. Sjá [Hvað tölvan þín myndgerir með](topic:your-machine).

## Lagað

- {{ui:Föst form}} › {{ui:Sameina}}, {{ui:Draga frá}} og {{ui:Skera saman}} gátu skilað hópi sem var ekki lokaður, í hvaða stærð sem var. Þeir loka nú.
- {{ui:Föst form}} › {{ui:Draga frá}} var grátt út án þess að neitt væri valið, þótt það velji tvo hluta sína í röð eftir að þú hefur valið það.
- Inni í hreyfitímalínunni fóru innslegnir takkar hvergi, {{key:Mod+S}} líka. {{key:Mod+Z}} og {{key:Mod+Y}} þar eru afturköllun og endurgerð tímalínunnar sjálfrar; aðrir {{key:Mod}}-takkar ná til forritsins.

## Í öllum forritum

- **Einingar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Mælieiningar}} hefur einn lista hvert fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmu stærðunum sem skilgreiningar eininganna gefa (bandaríski landmælingafótur er sín eigin eining). Slökktu á einingum sem þú notar aldrei og þær fara af einingalistunum; stjörnumerktu eina og nýtt verk byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Í ModelCraft fylgir einingalistinn við gildisreitinn kveikjunum (eining líkansins helst alltaf á honum), stjarnan stillir einingu nýs líkans (þegar ModelCraft hefur þá einingu), og lengd sem slegin er inn með merki einhverrar einingar er lesin í þeirri einingu. Sjá [Einingar, innslegin gildi og einingalistar](common:unit-lists).
- **Þéttara skipulag og spjöld sem fela sig.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Þéttleiki skipulags}} › {{ui:Þétt}} passar meira á skjáinn (snertiskjáir og símar halda stóru hnöppunum sínum). Hvert hliðarspjald er með mjóa titilstiku: dragðu hana til að festa eða fljóta spjaldinu, slepptu henni á titilstiku annars spjalds til að deila einum ramma sem flipar, festu það til að renna út að jaðri, eða feldu það og sæktu það aftur af jaðrinum. Sjá [Raðaðu spjöldunum](common:arrange-panels#make-the-layout-denser).
- **Gluggar hreyfast.** Dragðu glugga á titilstikunni úr vegi teikningarinnar; hann kemur aftur þangað sem þú skildir við hann. Tvísmelltu á titilstikuna til að miðja hann aftur. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir gervigreindaraðstoðarmenn.** Tíu unnar beiðnir fyrir þinn eigin aðstoðarmann (taka til teikningu, teikna sett, athuga teikningar, spyrja líkan spurninga, taka saman magntöku, prófa afbrigði hluta …), hver með þeim verkfærum sem hún kallar á og heimildunum sem hún þarfnast, og hver endurspiluð af prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Tungumál}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem móðurmálsmaður hefur ekki yfirfarið enn. Hjálparefnið er á ensku.
- **CadCraft Studio** segir af hverju uppfærsluathugun mistókst (engin skrá fyrir stýrikerfið þitt enn, ekkert net, röng undirskrift) í stað þess að segja bara „Lokið“, og hættir að sækja aftur spjald um það sem er nýtt sem þú lokaðir þar til nýrri útgáfa kemur.

## Ekki í þessari útgáfu enn

- **0.7 er ekki kóðaundirrituð.** Undirritun og Microsoft Store-pakkinn færðust yfir í 0.8 því vottunin á skilríkinu hefur ekki borist enn. Athugaðu SHA-256-gildið við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetninguna, veldu {{ui:Frekari upplýsingar}}, og síðan {{ui:Keyra samt}}. Á Mac skaltu fyrsta skiptið hægrismella á CadCraft Studio og velja {{ui:Opna}}. CadCraft Studio er ekki í forritaverslun enn, og það er engin iPad- eða iPhone-útgáfa enn.
- Horna- og hallalistarnir í {{ui:Mælieiningar}} eru vistaðir, en enginn reitur les þá enn.
- Myndgerð á skjákortinu (WebGPU) hefur aðeins verið prófuð hér með hugbúnaðarstaðgengli, ekki enn á raunverulegum skjákortum, svo myndgerðu eitthvað lítið á eigin tölvu fyrst. Hið sama gildir um lifandi sýnina, og VR hefur enn aðeins verið prófað með heyrnartólshermi.
- Án WebGPU er engin {{ui:Myndgera}}-vinnusvæði og engin myndgerðarröð, og hágæðamyndir hafa enga dýptarskerpu, eðlisfræðilegan himin, himinmynd, þoku, reyk, caustics eða ljósablöndun.
- {{ui:Myndgera mynd…}} teiknar ekki dreifða hluti enn; þeir sjást í lifandi sýninni, víðmyndum hennar, sýnaranum og myndskeiðinu.
- Lampar hreyfast í sýninni, en myndgert myndskeið notar lampana eins og þeir eru þegar það byrjar.
- Beinagrindur og hreyfing eru hvorki lesin né skrifuð í glTF-, FBX- eða USD-skrár enn (beinagrindarlíkön koma inn í hvíldarstöðu, með vigtum sínum), og glTF- og FBX-efni umfram grunnlit eða áferð eru ekki geymd enn.
- STEP-litir og heiti hluta samsetningar eru ekki lesin enn. `.3dm`-innflutningur hefur verið prófaður með skrám sem skrifaðar voru af verkfærasafni sniðsins, ekki enn með skrám úr líkanaforritinu sjálfu; SubD-hlutir, texti og málsetningar eru skildir eftir.
- Plöntusafnið frá CivilCraft er í ModelCraft, en að setja plöntur úr því er ekki smíðað enn.
- Að mála áferð á ýtt/togaða fleti endurtekur sig með flísinni í efninu; til að mála aðeins einn flöt, breyttu honum í möskva og afvefðu hann.

Allt annað er í [Ekki smíðað enn](topic:not-built-yet).
