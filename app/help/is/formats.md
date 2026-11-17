---
title: Skráarsnið í smáatriðum
summary: Nákvæmlega hvað hvert snið sem ModelCraft opnar, flytur inn og út geymir, breytir og sleppir.
keywords: snið, skráartegundir, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, skyndiminni, fbx, 3mf, ifc, dwg, dxf, einingar, ásar, y upp, z upp, millimetrar, mörk
from: c47d2d28
---

Líkan ModelCraft er í metrum með Z (blá) upp á við. Sérhvert snið hér að neðan er umbreytt í eða úr því.

## ModelCraft (.modelcraft)

| Atriði | Nánar |
|---|---|
| Opna | {{ui:Open}} ({{key:Mod+O}}) eða slepptu skrá á sýnina. Skrár sem enda á `.json` eru líka samþykktar |
| Vista | {{ui:Save}} ({{key:Mod+S}}), sem niðurhal |
| Geymir | Allt: rúmfræði, fletir og litir þeirra, efni og innfluttar áferðir, ljósgjafar, mjúkir jaðrar, hópar, einingar, heiti, hjálparlínur, senur, einingarnar, og síðasta myndavél og stíll |
| Sleppir | Afturköllunarferilinn |
| Mörk | 200 MB |

Skrá sem vistuð var með nýrri ModelCraft en þinni er hafnað: „Þetta líkan var vistað með nýrri ModelCraft-útgáfu (skráarútgáfa …). Uppfærðu ModelCraft til að opna það.“ Skrá sem er ekki ModelCraft-líkan segir „Þessi skrá er ekki ModelCraft-líkan (hún er ekki JSON).“ eða „Þetta er ekki ModelCraft-skrá sem við getum opnað: …“

## USD (.usd, .usda, .usdc, .usdz)

Opna, flytja inn, og {{ui:Save as}} eða {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. USD-skrá sem ModelCraft vistaði opnast aftur án þess að nokkuð tapist; USD-skrár annarra forrita opnast sem möskvar, hópar, einingar, ljósgjafar og myndavélar. Sjá [Vista, opna og flytja út USD](topic:usd).

## Collada (.dae)

Innflutningur og útflutningur. Besta sniðið til að skiptast á líkönum við önnur þrívíddarlíkanaforrit.

- **Útflutningur:** Collada 1.4.1, Z upp, metrar. Ein rúmfræði fyrir hverja skilgreiningu hóps eða einingar; einingar eru skrifaðar einu sinni og settar inn með tilvísun, svo þær haldast sameiginlegar. Fletir með götum eða íhvolfum útlínum eru skiptir í þríhyrninga. Litir verða að efnum. Laus jaðrar eru skrifaðir sem línur. Heiti sem eru ekki gild í sniðinu eru löguð, og nákvæma heitið er geymt við hlið þess.
- **Innflutningur:** þríhyrningar, marghyrningar (með götum), þríhyrningaviftur og -rendur verða að fletum; línur verða að jöðrum. Umbreytingar hnúta, upp-ás skráarinnar og eining hennar eru notuð. Hnútur sem er settur á nokkrum stöðum, eða rúmfræði sem nokkrir hnútar nota, kemur inn sem eining; aðrir hnútar koma inn sem hópar. Efnislitir (diffuse) verða að flatarlitum.
- **Ekki flutt inn:** áferðir, húð og formbreytingar, myndavélar, ljós, sumar gerðir umbreytinga (look-at og skew) og tilvísanir í aðrar skrár. Stöðustikan telur þær.
- **Tapast við útflutning:** hvaða jaðrar eru mjúkir. **Við innflutning** haldast þríhyrndir fletir sem þríhyrningar, og ská þeirra eru mýkt svo flatir kaflar lesist samt sem einn flötur.

## OBJ (.obj, .mtl)

Innflutningur og útflutningur.

- **Innflutningur:** slepptu `.obj`-skránni ásamt `.mtl`-skránni og áferðarmyndunum (eða fluttu inn `.obj`-skrána eina: hún kemur inn án efna, og stöðustikan nefnir `.mtl`-skrána sem hún vildi). Lesin sem metrar með Y upp. Hver hlutur (`o`, annars `g`) verður að [möskva](topic:meshes), með fletum sínum eins og þeir eru (ferhyrningar haldast ferhyrningar). Áferðarhnit, normalvigrar og litir á hverjum punkti haldast. Litarmynd efnis (`map_Kd`, PNG, JPEG eða WebP) kemur inn sem áferð, með mælikvarða- og færsluvalkostum sínum; annars litur þess (`Kd`). Jaðrar þar sem normalvigrar skráarinnar brotna eru harðir; án normalvigra ráða sléttunarhópar skráarinnar. Önnur kort (bump, normal), punktar, línur og ferlar eru talin og sleppt. OBJ hefur enga einingu, svo líkan gert í millimetrum eða tommum kemur í röngri stærð: stærðu það eftir innflutning (sjá [Snúðu og stærðu](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Útflutningur:** metrar, Y upp, heimshnit. Einn hlutur fyrir hverja staðsetningu hóps; einingar eru skrifaðar út í heild á hverri staðsetningu. Möskvar halda eigin fletum, áferðarhnitum og normalvigrum; fletir sem eru tengdir með [mjúkum jöðrum](topic:soften) fá normalvigur á hverju horni. Þegar líkanið hefur liti er `.mtl`-skrá sótt við hlið `.obj`. Þegar það hefur innfluttar áferðir eru `.obj`, `.mtl` og myndirnar sóttar saman sem ein `.zip`-skrá.
- **Mörk:** 2 milljónir hornpunkta eða flata; 64 MB af texta.

## glTF (.glb, .gltf)

Innflutningur og útflutningur, glTF 2.0.

- **Innflutningur:** `.glb`-skrá, eða `.gltf`-skrá ásamt `.bin`- og áferðarskrám hennar: slepptu þeim öllum á sýnina í einu (eða veldu `.glb`). `.gltf`-skrá sem er gefin ein nefnir skrána sem hún þarfnast: „Þessi .gltf-skrá þarfnast „…“: opnaðu .glb-útgáfuna, eða slepptu .gltf-skránni ásamt skrám sínum.“
  - **Möskvar** koma inn sem [möskvar](topic:meshes), einn fyrir hvern möskva í skránni, með normalvigrum, áferðarhnitum og litum á hornpunktum skráarinnar varðveitt á þeim. Jaðrar þar sem normalvigrar skráarinnar brotna eru harðir; hinir eru mjúkir. Möskvi sem er notaður á nokkrum stöðum helst sameiginlegur.
  - **Hnútar** verða að hópum, nefndir eins og í skránni. Ítrekaðir möskvar (EXT_mesh_gpu_instancing) koma inn sem einn möskvi settur margoft.
  - **Efni:** grunnlitaáferð (PNG, JPEG eða WebP) kemur inn sem áferð, sett eftir áferðarhnitum skráarinnar (með hvaða áferðarumbreytingu sem er), og er geymd þegar þú vistar; annars grunnliturinn. Málmur, grófleiki, normalkort, gler, glær húð, glansáferð og aðrar efnisviðbætur eru lesnar en ekki geymdar enn: stöðustikan segir það.
  - **Ljós** (KHR_lights_punctual): punkt- og kastljós verða að [ljósgjöfum](topic:lights). Stefnuljós eru talin: sólin lýsir líkanið.
  - **Myndavélar** verða að [senum](topic:scenes).
  - **Persónur með húð** koma inn standandi eins og skráin hvílir þær; bein þeirra og hreyfimyndir, og formmarkmið, eru talin og ekki geymd enn.
  - **Þjappaðar skrár** (Draco, meshopt) og kvarðuð gögn eru lesin. Afkóðararnir hlaðast aðeins fyrir skrá sem þarfnast þeirra.
  - Punktar og línur eru taldir og sleppt (möskvi geymir fleti). KTX2-áferðum er sleppt; fletirnir halda sínum lit.
- **Útflutningur** (`.glb`): glTF 2.0 tvíundarskrá, metrar, Y upp. Einn möskvi fyrir hverja skilgreiningu, svo einingar haldast sameiginlegar. Möskvar halda normalvigrum sínum, áferðarhnitum og litum á hornpunktum; fletir sem eru tengdir með [mjúkum jöðrum](topic:soften) bera slétta normalvigra. Litir og efni verða að efnum (efni sem litur); innfluttar áferðir eru skrifaðar sem áferðir. Ljósgjafar sem eru kveiktir verða að punkt- og kastljósum (flatarljós hafa ekkert glTF-jafngildi og eru sleppt); senur verða að myndavélum. Lausir jaðrar eru sleppt.
- **Mörk:** skrár allt að 300 MB; um 130 milljónir talna í rúmfræði.

## STL (.stl)

Innflutningur og útflutningur.

- **Innflutningur:** tvíundar eða ASCII. STL hefur enga einingu: hún er lesin sem **millimetrar**, eins og prentarar og útflutningur ModelCraft skrifa hana. Horn á sama punkti eru tengd, svo lokaður hluti kemur inn sem lokaður [möskvi](topic:meshes). Litir í skránni (VisCAM / SolidView og Materialise-venjurnar) mála fletina.
- **Útflutningur** fyrir þrívíddarprentun: tvíundar STL, **millimetrar**, Z upp. Eingöngu þríhyrningar: hópar og lausir jaðrar eru sleppt. Máluðum fletum fylgir litur þeirra samkvæmt VisCAM / SolidView-venjunni, sem önnur forrit hunsa ef þau lesa hana ekki. Fluttu út lokuð föst rúmtök fyrir hreina prentun.

## STEP (.step, .stp)

Aðeins innflutningur. STEP er það sem hlutalíkanarar og birgjar senda: AP203, AP214 og AP242 skrár.

- **Innflutningur:** ModelCraft les skrána sjálf, á síðunni, og breytir hverju föstu rúmtaki í lokaðan [möskva](topic:meshes) úr þríhyrningum: sléttir fletir haldast sléttir, bogadregnir fletir (sívalningar, keilur, kúlur, tórar, B-spline-yfirborð) verða að mörgum litlum flötum, með jöðrunum innan eins bogadregins flatar mjúkum og jöðrunum milli tveggja fleta skörpum. STEP-skrár segja sína einingu; líkanið kemur inn í réttri stærð. Samsetning kemur inn með hverjum hluta þar sem skráin setur hann, hver hluti með sinn eigin möskva í hópi sem heitir eftir skránni. Litir, heiti hluta í samsetningartrénu og vikmörk (PMI) eru ekki lesin.
- **Skilaboð:** það sem var sleppt eða teiknað grófara er bætt við stöðulínuna („Athugasemdir: …“); skrá án fasts rúmtaks, skemmd skrá eða skrá sem fer yfir mörk segir af hverju og bætir engu við.
- **Mörk:** skrár allt að 300 MB; 400 000 fletir og 8 milljónir þríhyrninga.

## .3dm

Aðeins innflutningur. `.3dm`-skrár geyma NURBS-líkön: fjölflatar, fleti, möskva, ferla og blokkir.

- **Innflutningur:** ModelCraft les skrána sjálf, á síðunni. Möskvar koma inn eins og þeir eru; sérhver flötur fjölflatar eða útdráttar kemur úr myndmöskvanum sem vistaður er með honum í skránni, annars flísar ModelCraft hann (sléttir fletir, NURBS-yfirborð, byltingsyfirborð, útdregnir ferlar, útdrættir; klipptir eftir jöðrum sínum, lokaðar fjölflatar sem lokaðir möskvar). Ferlar verða að jöðrum, blokkir verða að einingum (blokkir í blokkum haldast), lög verða að merkjum (falin þegar slökkt er), litur hlutarins (eigin litur, litur lags hans eða efnis hans) málar fletina. Skráin segir sína einingu; líkanið kemur inn í réttri stærð. Skref fyrir skref: [Fluttu inn .3dm-líkan](topic:import-3dm-files).
- **Skilaboð:** stöðulínan segir hversu margir fletir komu úr vistuðum möskvum og hversu margir voru flísaðir, og nefnir hvað var sleppt: punkta, punktaský, texta, málsetningar, skyggingar, ljós, SubD-hluti, fleti á yfirborðsgerðum sem ekki eru lesnar enn, tengdar blokkir.
- **Mörk:** skrár allt að 300 MB.

## PLY (.ply)

Innflutningur og útflutningur, fyrir möskva með litum (skannanir, litaþrívíddarprentun, önnur þrívíddarlíkanaforrit).

- **Innflutningur:** ASCII og tvíundar. Fletir verða að [möskva](topic:meshes) með normalvigrum, áferðarhnitum og litum á hornpunktum varðveittum; hver flötur er málaður í þeim af 4,096 litum sem er næst honum svo þú sjáir litina núna. PLY hefur enga einingu eða ásareglu: hnit koma inn eins og þau eru (metrar, Z upp). PLY með eingöngu punktum er punktaský: opnaðu það í BimCraft eða CivilCraft.
- **Útflutningur:** tvíundar PLY með staðsetningum, normalvigrum og litum (og áferðarhnitum þegar líkanið hefur þau), í metrum, Z upp.

## FBX (.fbx)

Aðeins innflutningur. FBX 7-skrár (frá 2011 og síðar), tvíundar eða ASCII, lesnar af eigin lesara ModelCraft.

- Möskvar koma inn sem [möskvar](topic:meshes) með normalvigrum sínum, áferðarhnitum (sérhvert UV-sett) og litum á hornpunktum; möskvi sem nokkrir hlutir nota helst sameiginlegur. Hlutir verða að hópum með umbreytingum sínum (snúningsmiðjum, frávikum og forsnúningum innifalið).
- Efni: dreifiáferðin — innbyggð í skrána, eða mynd sleppt ásamt `.fbx` — kemur inn sem áferð (TGA-myndir eru geymdar sem PNG); annars dreifilitur. Aðrar efnisstillingar bíða eftir nýja efnislíkaninu.
- Upp-ás og eining skráarinnar eru notuð: allt kemur inn Z upp, í metrum.
- Punkt- og kastljós verða að [ljósgjöfum](topic:lights) (FBX-styrkur 100 er sjálfgefinn ljósgjafi ModelCraft, 800 lúmen: FBX-styrkur hefur enga einingu). Myndavélar verða að [senum](topic:scenes).
- Persónur með húð koma inn í hvíldarstöðu; bein og hreyfimyndir eru talin og ekki geymd enn. Stefnu- og flatarljós, og rúmfræði annað en möskvar (NURBS, ferlar), eru talin og sleppt.
- FBX 6 og eldri skrám er hafnað: vistaðu þær aftur sem FBX 2011 eða nýrri.

## Alembic (.abc)

Aðeins innflutningur: rúmfræðiskyndiminni úr hreyfimynda- og brelluforritum.

- Möskvar (marghyrninga- og undirskiptimöskvar) koma inn sem [möskvar](topic:meshes), með áferðarhnitum sínum og normalvigrum; umbreytingar verða að hópum. Alembic er Y upp og er snúið í Z upp; metrar.
- Skyndiminni með mörgum sýnum (hreyfimynd) kemur inn við fyrsta sýnið; stöðustikan segir hversu mörg þau eru.
- Punktar, ferlar, NURBS-yfirborð, myndavélar og ljós eru talin og sleppt. Skrám í gamla HDF5-uppsetningu er hafnað: vistaðu þær aftur sem Ogawa Alembic-skrár.

{{ui:Check for 3D printing (STL or 3MF)…}} athugar lögunina fyrst og skrifar valið, eða allt sem sýnt er. Sjá [Undirbúðu líkan fyrir þrívíddarprentun](topic:print-3d).

## 3MF (.3mf)

Aðeins útflutningur, úr {{ui:Check for 3D printing (STL or 3MF)…}}. 3MF-kjarni: einn möskvi í **millimetrum**, Z upp, með litum sínum sem efnum. Flestir sneiðarar lesa hann, og ólíkt STL segir hann sína einingu. Falnum hlutum er sleppt. Sjá [Undirbúðu líkan fyrir þrívíddarprentun](topic:print-3d).

## DWG og DXF útflutningur (.dwg, .dxf)

Fyrir CAD-forrit. Líkanið er skrifað í sinni eigin einingu: tommum fyrir líkön í fetum og tommum, annars millimetrum, sentimetrum eða metrum (stöðustikan nefnir hana).

- **Fletir** verða að 3D-flötum (þríhyrningum). Línur innan flatar og mjúkir jaðrar eru skrifaðir ósýnilegir, svo fletirnir líti út eins og í ModelCraft.
- **Lausir jaðrar** verða að línum.
- **Hópar og einingar** verða að blokkum: eining er skrifuð einu sinni og sett eins oft og hún er notuð, þar með talin snúin og spegluð afrit. Hópur sem var teygður eftir að hann var snúinn (þannig að hann er skástæður) er í staðinn skrifaður út á sínum stað.
- **Litir:** DWG heldur lit hvers flatar nákvæmlega; DXF notar þann af 255 stöðluðum CAD-litum sem er næst.
- **Útgáfur:** DWG er skrifað sem AutoCAD 2004 (AC1018), sem CAD-forrit frá 2004 og síðar opna. DXF er R12 (AC1009), útgáfan sem hvert CAD-forrit les; R12 hefur engan einingareit, svo segðu CAD-forritinu hvaða einingu á að nota.
- **Ekki skrifað:** hjálparlínur, málsetningar, senur og myndavélin.

## IFC (.ifc)

Aðeins útflutningur, fyrir BimCraft og önnur BIM-forrit. IFC4 með verkefni, lóð, byggingu og hæðum hennar. Hver efsti hópur eða eining verður að einu byggingarfrumefni með sínu heiti; lokaðir eru skrifaðir sem föst form (fasettuð brep), opnir sem yfirborðslíkön; göt í fletum haldast. Laus rúmfræði á efsta stigi verður að einu frumefni sem heitir „Loose geometry“. Engar gerðir, eiginleikar eða efni.

**Hæðir:** {{ui:Export}} › {{ui:IFC storeys…}} sýnir þær, hver með heiti og hæð ({{ui:Add storey}}, eða {{ui:Guess from the model}}, sem býr til eina hæð fyrir hverja hæð sem efstu hóparnir þínir standa á). Við útflutning fer hver hópur eða eining á hæðina við eða undir lægsta punkti sínum, og heldur sínum stað. Án hæða fer allt á eina hæð, „Level 1“, í 0. Hæðirnar eru vistaðar í ModelCraft-skránni.

## DWG (.dwg) og DXF (.dxf)

Flutt inn sem línur á jörðinni (skyggingar og 3D-fletir sem fletir); flutt út eins og lýst er hér að ofan. Sjá [Líkan á lóðarmynd](topic:site-plan).

- **Lesið:** línur, fjöllínur (með bogum), 3D-fjöllínur, hringir, bogar og blokkatilvísanir þar með talið raðir, úr líkanrými. Ósýnilegir hlutir (eins og falin ástönd kraftmikillar blokkar) eru sleppt. Ferlar verða að 48 beinum bútum á hverjum heilum hring.
- **Lesið frá 0.4:** spline-ferlar og sporbaugar (sem jaðrar), texti, marglínutexti og eigindagildi (sem jaðrar í einlínu-letri), skyggingar (fletir með götum), 3D-fletir og heilar fyllingar (fletir), og málsetningar (teiknaðar úr málsetningarblokkum teikningarinnar sjálfrar).
- **Lesið frá 0.7:** 3D-föst rúmtök, svæði og búkar (ACIS-gögn þeirra, DWG og DXF allra útgáfa), hvert sem sinn hópur, lokuð sem föst rúmtök. Fletir á yfirborðum annarra en sléttra fleta, sívalninga, keilna, kúlna, tóra og einfaldra spline-yfirborða eru sleppt og taldir upp.
- **Ekki lesið:** punktar, töflur, marglínuvísanir, myndir og allt í pappírsrými.
- **Einingar:** teknar úr teikningunni þegar hún segir til um þær. Ef ekki, spyr ModelCraft.
- **DXF** verður að vera ASCII. Tvíundar DXF er hafnað.
- **DWG**-skrár frá AutoCAD R13 og upp í núverandi snið (AutoCAD 2018 og síðar; AC1012 til AC1032) eru lesnar af eigin DWG-lesara ModelCraft, á síðunni; hann er hluti af ModelCraft, svo hann virkar án nettengingar hvenær sem ModelCraft gerir það. Eldri útgáfur (R12 og eldri) og illa skemmdar skrár er ekki hægt að lesa; vistaðu þær sem DXF.
- **Mörk:** hnit meira en 10,000 km frá upphafspunkti, eða fleiri en 2 milljónir línubúta, er hafnað.

## SKP-skrár

{{ui:Import}} (eða slepptu skránni á sýnina) les SketchUp-skrár með eigin lesara ModelCraft, á síðunni: ekkert er sent upp, og það virkar án nettengingar hvenær sem ModelCraft gerir það. Prófað með skrám úr SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 og 2026; aðrar útgáfur ættu líka að opnast, en hafa ekki verið prófaðar enn. Líkanið kemur inn sem einn hópur sem heitir eftir skránni. Eitt {{key:Mod+Z}} tekur það aftur í burtu. Skref fyrir skref: [Fluttu inn SKP-líkan](topic:import-sketchup-files).

- **Haldið:** fletir með götum sínum, hópar (sem hópar) og einingar (sem einingar, sameiginlegar), heiti þeirra og staðsetningar, litir, merki á hópum og einingum, jaðrar sem eru ekki hluti af fleti, og mjúkir og sléttir jaðrar, svo bogadregin yfirborð haldist slétt.
- **Litir:** efni flatar gefur honum lit sinn. Efni sem er málað á hóp eða einingu verður málning þeirrar staðsetningar, svo fletir innan hennar án eigin litar taka hann, eins og í SketchUp; eining sem er máluð í tveimur litum helst ein eining.
- **Merki** á hópum og einingum verða að ModelCraft-merkjum, sýnd eða falin eins og þau voru. Merki á lausum fleti og jöðrum eru ekki geymd (ModelCraft merkir eingöngu hópa og einingar); stöðustikan telur þau.
- **Falnir hlutir koma inn faldir** (fletir, jaðrar, hópar, einingar, og fletir og jaðrar á földu merki), svo þú sérð það sem SketchUp sýndi; {{ui:Unhide all}} sýnir þá.
- **Áferðir:** flötur málaður með áferðarefni heldur áferð sinni, sett eins og í skránni, og ModelCraft-skráin geymir myndina. Áferð á heilum hópi eða einingu, áferð sem vantar í skrána, eða mynd sem vafrar geta ekki sýnt (eins og Photoshop-skrá) heldur aðeins lit efnisins.
- **Sleppt, og talið í stöðustikunni:** myndir settar inn í líkanið. Texti, málsetningar, hjálparlínur, sniðplön, senur og stíll eru ekki lesin.
- **Einingar:** SketchUp-skrár eru í tommum innra með sér; ModelCraft breytir þeim, svo stærðir koma rétt út í hvaða einingu sem er.
- **Vistun `.skp`** er ekki smíðuð. Til að fara með líkan aftur í SketchUp skaltu flytja út Collada (`.dae`).

## Ekki studd

ModelCraft getur ekki opnað 3DS- eða IFC-skrár, og getur ekki vistað 3DS-, FBX-, STEP-, `.3dm`- eða SketchUp-skrár (`.skp`).
