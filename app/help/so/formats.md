---
title: Qaababka faylka si faahfaahsan
summary: Waxa saxda ah ee qaab kasta oo ModelCraft furto, soo dhoofiyo iyo soo saaro ilaaliyo, beddelo, ama ka reebo.
keywords: qaababka, noocyada faylka, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unitiyada, dhidibbada, y sare, z sare, millimitir, xadka
from: c47d2d28
---

Moodelka ModelCraft wuxuu ku jiraa mitir, Z (buluug) ayaa sare. Qaab kasta oo hoos ku qoran waa la beddelaa ama laga beddelaa taas.

## ModelCraft (.modelcraft)

| Waxa | Faahfaahin |
|---|---|
| Fur | {{ui:Fur}} ({{key:Mod+O}}) ama ku deji muuqaalka. Faylasha dhamaadkoodu yahay `.json` ayaa sidoo kale la aqbalaa |
| Kaydi | {{ui:Kaydi}} ({{key:Mod+S}}), sida soo dejinta |
| Ilaalinaya | Wax walba: joomatariga, wajiyada iyo midabkooda, agabka iyo teexturada la soo dhoofiyay, nalalka, geesaha nuugan, kooxaha, qaybaha, magacyada, hagayaasha, muuqaallada, unitiyada, iyo kamarada iyo qaabka ugu dambeeya |
| Ka reebta | Taariikhda ka noqoshada |
| Xadka | 200 MB |

Faylka ay kaydiyeen ModelCraft cusub oo ka cusub kan adiga leedahay waa la diidaa: "Moodelkan waxaa kaydiyay ModelCraft cusub (nooca faylka …). Cusboonaysii ModelCraft si aad u furto." Faylka aan ahayn moodel ModelCraft wuxuu leeyahay "Faylkan maaha moodel ModelCraft (ma aha JSON)." ama "Kani maaha fayl ModelCraft aan furi karno: …".

## USD (.usd, .usda, .usdc, .usdz)

Fur, soo dhoofi, iyo {{ui:Kaydi sida}} ama {{ui:Soo saar}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Fayl USD ah oo ModelCraft kaydiyay mar kale wax lumin ma furmaa; faylasha USD ee barnaamijyada kale waxay u furmaan sida meshes, kooxo, qaybo, nal iyo kamaro. Eeg [Kaydi, fur iyo soo saar USD](topic:usd).

## Collada (.dae)

Soo dhoofi iyo soo saar. Qaabka ugu fiican ee moodel la is-beddelo modeler 3D kale.

- **Soo saar:** Collada 1.4.1, Z sare, mitir. Hal joomatari oo koox kasta ama qayb kasta; qaybaha mar bay la qoraa oo tixraac ayaa lagu dhigaa, sidaas darteed way la wadaagaan. Wajiyada godad ama xuduud gudaha ku leh waxaa loo kala jaraa saddex-geesood. Midabyadu waxay noqdaan agab. Geesaha furan waxaa loo qoraa xariiqyo. Magacyada aan qaabkan ku habboonayn waa la hagaajiyaa, magaca saxda ahna waxaa lagu sii haya dhinaciisa.
- **Soo dhoofi:** saddex-geesood, poligonno (godad leh), dabaaldeg-saddex-geesood iyo xarriijin ayaa noqda wajiyo; xariiqyadu waxay noqdaan geesaha. Beddelka nodes-ka, dhidibka sare ee faylka iyo unitigiisa ayaa la dabaqaa. Node la dhigay meelo dhowr ah, ama joomatari ay isticmaalaan nodes dhowr, waxay imaan doontaa qayb; nodes kale waxay imaan doonaan kooxo. Midabyada agabka (diffuse) waxay noqdaan midabyada wajiga.
- **Lama soo dhoofin:** teexturada, maqaarka iyo morphs, kamaroyada, nalalka, qaabab beddel gaar ah (look-at iyo skew), iyo tixraacyada faylal kale. Bar xaaladdu ayaa tiriya.
- **Waa lumaa marka la soo saarayo:** geesaha nuugan oo ah. **Marka la soo dhoofiyo,** dusha saddex-geesood ah waxay ku sii jiraan saddex-geesood, diagonalkooduna waa la nuugaa si meelaha siman ay u akhriyan hal dusha.

## OBJ (.obj, .mtl)

Soo dhoofi iyo soo saar.

- **Soo dhoofi:** ku deji `.obj` oo ay weheliyaan `.mtl` iyo sawirrada teexturada (ama soo dhoofi `.obj` keliya: wuxuu imanayaa aan agab lahayn, bar xaaladduna wuxuu magacaabaa `.mtl` uu doonayay). Waxaa la akhriyaa mitir iyo Y sare. Shay kasta (`o`, ama `g` haddii kale) waxay noqotaa [mesh](topic:meshes), wajiyadeeda sidooda ayay u ilaaliyaan (afar-geesle waxay ahaanayaan afar-geesle). Isku-xidhka teexturada, normals (jihooyinka wajiga) iyo midabyada barta kasta ayaa la ilaalinayaa. Sawirka midabka agabka (`map_Kd`, PNG, JPEG ama WebP) wuxuu imanayaa sida teexture, oo leh ikhtiyaarrada miisaanka iyo kala-guuritaanka; haddii kale midabkiisa (`Kd`). Geesaha halka jihooyinka faylka kala go'an yihiin waa adag; haddii jihooyin aan jirin, kooxaha nuugista faylka ayaa go'aan qaadanaya. Khariidado kale (bump, normal), barar, xariiqyo iyo qalino waa la tiriyaa oo waa la ka reebay. OBJ ma leh unit, sidaas darteed moodel loo sameeyay millimitir ama inji wuxuu yimaadaa cabbir qaldan: miisaan ka dhig soo dhoofinta ka dib (eeg [Wareeji iyo miisaan](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Soo saar:** mitir, Y sare, isku-xidhka adduunka. Shay kasta oo kooxda ah hal shay; qaybaha si buuxda ayaa loo qoraa meel kasta oo lagu dhigo. Meshes waxay ilaaliyaan wajiyadooda, isku-xidhka teexturada iyo normals; wajiyada ay isku xidheen [geesaha nuugan](topic:soften) waxay helaan normal geesood kasta. Marka moodelku midab leeyahay, `.mtl` ayaa la soo dejiyaa `.obj` ag dhinac. Marka ay teexturo la soo dhoofiyay leedahay, `.obj`, `.mtl` iyo sawirrada waxaa hal `.zip` ah wada la soo dejiyaa.
- **Xadka:** 2 milyan oo bar ama wajig; 64 MB qoraal.

## glTF (.glb, .gltf)

Soo dhoofi iyo soo saar, glTF 2.0.

- **Soo dhoofi:** `.glb`, ama `.gltf` oo ay weheliyaan `.bin` iyo faylasha teexturada: ku deji muuqaalka hal mar (ama dooro `.glb`). `.gltf` keliya la siiyo wuxuu magacaabaa faylka uu u baahan yahay: "Faylkan `.gltf` wuxuu u baahan yahay "…": fur nuqulka `.glb`, ama ku deji `.gltf` oo ay weheliyaan faylasha."
  - **Meshes** waxay imanayaan sida [meshes](topic:meshes), mid kasta oo mesh ah faylka ku jira, iyada oo normals, isku-xidhka teexturada iyo midabyada barta la ilaalinayo. Geesaha halka normals-ka faylka kala go'an yihiin waa adag; kuwa kale waa nuugan. Mesh la isticmaalo meelo dhowr ah wuu wadaagaa.
  - **Nodes** waxay noqdaan kooxo, oo magacooda la siiyaa sida faylka ku jira. Meshes-ka nuqul ahaan loo isticmaalay (EXT_mesh_gpu_instancing) waxay imanayaan hal mesh oo meelo badan lagu dhigay.
  - **Agabka:** teexture midabka aasaasiga ah (PNG, JPEG ama WebP) wuxuu imanayaa sida teexture, oo lagu dhigayaa isku-xidhka teexturada faylka (iyo beddelka teexturada haddii uu jiro), waana la ilaalinayaa markaad kaydinayso; haddii kale midabka aasaasiga. Metal, roughness, khariidadaha normal, muraayadda, clear coat, sheen iyo kordhinta agabka kale waa la akhriyaa laakiin weli ma ilaalinayno: bar xaaladdu way sheegtaa.
  - **Nalalka** (KHR_lights_punctual): nalalka barta iyo nalalka iftiinka gaarka ah waxay noqdaan [nal](topic:lights). Nalalka jihada ah waa la tiriyaa: qorraxdu moodelka ayay iftiinaysaa.
  - **Kamaroyada** waxay noqdaan [muuqaallo](topic:scenes).
  - **Jilayaasha maqaarka ku xidhan** waxay imanayaan iyagoo istaagan sida faylku ku hayo; lafahooda, dhaqdhaqaaqooda iyo morph targets waa la tiriyaa oo weli ma ilaalinayno.
  - **Faylasha la kala-kaxeeyay** (Draco, meshopt) iyo xogta quantized waa la akhriyaa. Fakoodarrada waxay soo gelayaan kaliya faylka u baahan.
  - Barar iyo xariiqyo waa la tiriyaa oo waa la ka reebay (mesh wuxuu haystaa wajiyo). Teexturada KTX2 waa la ka reebay; wajiyadu midabkooda way hayn.
- **Soo saar** (`.glb`): glTF 2.0 binary, mitir, Y sare. Hal mesh qeexid kasta, sidaas darteed qaybaha way la wadaagaan. Meshes waxay ilaaliyaan normals-kooda, isku-xidhka teexturada iyo midabyada barta; wajiyada ay isku xidheen [geesaha nuugan](topic:soften) waxay sidaan jihooyin siman. Midabyada iyo agabyadu waxay noqdaan agab (agab waa midabkiisa); teexturada la soo dhoofiyay waxay noqdaan teexture. Nalalka shidan waxay noqdaan nalal barta iyo kuwa jihada leh (nalalka aagga ma leh isbeddel glTF, waa la ka reebay); muuqaallada waxay noqdaan kamaroyo. Geesaha furan waa la ka reebay.
- **Xadka:** faylal ilaa 300 MB; qiyaas ahaan 130 milyan oo tiro joomatari.

## STL (.stl)

Soo dhoofi iyo soo saar.

- **Soo dhoofi:** binary ama ASCII. STL ma leh unit: waxaa loo akhriyaa **millimitir**, sida daabacayaasha iyo soo saarista ModelCraft qiimaha u qoraan. Geesaha isku meel ku yaal waa la isku xidhaa, sidaas darteed qayb xidhan waxay imanaysaa [mesh](topic:meshes) xidhan. Midabyada faylka (heshiisyada VisCAM / SolidView iyo Materialise) wajiyada ayay rinjiyaan.
- **Soo saar,** daabacaadda 3D ahaan: binary STL, **millimitir**, Z sare. Saddex-geesood keliya: kooxaha iyo geesaha furan waa la ka reebay. Wajiyada rinjiyeysan midabkooda waxay ku qornaa heshiiska VisCAM / SolidView, kaas oo barnaamijyada kale ka indho-tirtiraan haddii aanay akhrin. Soo saar jir xidhan si daabacaaddu u nadiif noqoto.

## STEP (.step, .stp)

Soo dhoofi kaliya. STEP waa waxa modeler-yada qaybaha iyo bixiyayaasha u diraan: faylasha AP203, AP214 iyo AP242.

- **Soo dhoofi:** ModelCraft faylka isagu akhriyaa, bogga gudihiisa, oo jir kasta wuxuu u beddelaa [mesh](topic:meshes) xidhan oo saddex-geesood ah: wajiyada siman ayay siman yihiin, wajiyada cudurran (silinda, koone, sfeer, torus, dusha B-spline) waxay noqdaan kuwo yar oo siman, geesaha gudaha hal wajig cudurran ah waa nuugan, geesaha u dhexeeya laba wajig waa adag. Faylasha STEP waxay sheegaan unitigooda; moodelku wuxuu imanayaa cabbirkiisa runta ah. Isku-dhisme wuxuu imanayaa qayb kasta meeshii faylku ku dhigay, qayb kasta mesh gaar ah oo koox ku magac ah faylka. Midabyada, magacyada qaybaha ee qaab-dhismeedka iyo dulqaadka (PMI) lama akhriyo.
- **Fariimo:** waxa la dhaafay ama la sawiray si ka cidhiidhi yar waxaa lagu daraa xariga xaaladda ("Notes: …"); fayl aan jir lahayn, fayl qaldan ama mid xadka ka dambeeya wuxuu sheegaa sababta wax kuma daro.
- **Xadka:** faylal ilaa 300 MB; 400 000 wajood iyo 8 milyan saddex-geesood.

## .3dm

Soo dhoofi kaliya. Faylasha `.3dm` waxay haystaan moodelada NURBS: polysurfaces, dusha, meshes, qalino iyo bloogyo.

- **Soo dhoofi:** ModelCraft faylka isagu akhriyaa, bogga gudihiisa. Meshes waxay imanayaan sidaas oo kale; wajig kasta oo polysurface ama extrusion ah wuxuu ka imanayaa meshka sawirka ee lagu kaydiyay faylka, haddii kale ModelCraft wuu saddex-geesood ka dhigaa (diyaaradaha, dusha NURBS, dusha wareegga, qalino la jiidey, extrusion; geesahooda ayaa lagu jarayaa, polysurface xidhan waa mesh xidhan). Qalinadu waxay noqdaan geesaha, bloogyadu waxay noqdaan qaybo (bloog gudaha bloog waa la ilaalinayaa), layers-ku waxay noqdaan tags (waa qarsan yihiin marka ay damaan), midabka shayga (kiisa, layer-kiisa ama agabkiisa) wajiyadiisa ayuu rinjiyeeyaa. Faylku wuxuu sheegaa unitigiisa; moodelku wuxuu imanayaa cabbirkiisa runta ah. Tallaabo tallaabo: [Soo geli moodel .3dm](topic:import-3dm-files).
- **Fariimo:** xariga xaaladdu wuxuu sheegaa wajiyo intee ah ka yimid meshes-ka la kaydiyay iyo intee ah saddex-geesood loo beddelay, wuxuuna magacaabaa waxa laga reebay: barar, daruurta barar, qoraal, cabbirro, hatches, nalal, shayada SubD, wajiyada noocyada dusha aan weli la akhriyin, bloogyada lagu xidhay.
- **Xadka:** faylal ilaa 300 MB.

## PLY (.ply)

Soo dhoofi iyo soo saar, meshes midab leh (iska-baadhista, daabacaadda 3D midab leh, modelerada kale).

- **Soo dhoofi:** ASCII iyo binary. Wajiyadu waxay noqdaan [mesh](topic:meshes) oo normals, isku-xidhka teexturada iyo midabyada barta la ilaalinayo; wajig kasta waxaa rinjiyeeya midabka ugu dhow ee 4,096 midab, si aad midabyada hadda u aragto. PLY ma leh unit iyo heshiis dhidib: isku-xidhyadu sidooda ayay imanayaan (mitir, Z sare). PLY oo barar keliya leh waa daruur barar: ku fur BimCraft ama CivilCraft.
- **Soo saar:** binary PLY oo leh booska, normals iyo midabyada (iyo isku-xidhka teexturada marka moodelku leeyahay), mitir, Z sare.

## FBX (.fbx)

Soo dhoofi kaliya. Faylasha FBX 7 (laga bilaabo 2011), binary ama ASCII, oo akhriyaha ModelCraft u akhriyo.

- Meshes waxay imanayaan sida [meshes](topic:meshes) oo normals, isku-xidhka teexturada (UV set kasta) iyo midabyada barta leh; mesh ay shayo dhowr isticmaalaan way wadaagtaa. Shayada waxay noqdaan kooxo beddelkooda (pivots, offsets iyo pre-rotations ku jira).
- Agabka: teexturada diffuse — ee faylka ku jirta, ama sawir lagu dhigay `.fbx` ka dhinac — waxay imanaysaa sida teexture (sawirrada TGA waxaa lagu ilaaliyaa PNG); haddii kale midabka diffuse. Dejinta kale ee agabka waxay sugayaan model agab cusub.
- Dhidibka sare ee faylka iyo unitigiisa ayaa la dabaqaa: wax walba Z sare ayuu imanayaa, mitir.
- Nalalka barta iyo nalalka iftiinka gaarka ah waxay noqdaan [nal](topic:lights) (xoogga FBX ee 100 waa nalka caadiga ah ee ModelCraft, 800 lumens: xoogga FBX ma leh unit). Kamaroyada waxay noqdaan [muuqaallo](topic:scenes).
- Jilayaasha maqaarka ku xidhan waxay imanayaan iyagoo nasasho ku jira; lafaha iyo dhaqdhaqaaqa waa la tiriyaa, weli ma ilaalinayno. Nalalka jihada iyo aagga, iyo joomatari aan ahayn meshes (NURBS, qalino), waa la tiriyaa oo waa la ka reebay.
- Faylasha FBX 6 iyo kuwa ka hore waa la diidaa: mar kale ku kaydi FBX 2011 ama mid ka cusub.

## Alembic (.abc)

Soo dhoofi kaliya: kaydinta joomatariga barnaamijyada dhaqdhaqaaqa iyo saameynta.

- Meshes (polygon iyo subdivision) waxay imanayaan sida [meshes](topic:meshes), oo isku-xidhka teexturada iyo normals; beddelada waxay noqdaan kooxo. Alembic waa Y sare oo waa la rogaa Z sare; mitir.
- Kaydin leh tusaale badan (dhaqdhaqaaq) waxay imanaysaa tusaalaha koowaad; bar xaaladdu wuxuu sheegaa inta ay leedahay.
- Barar, qalino, dusha NURBS, kamaroyo iyo nalal waa la tiriyaa oo waa la ka reebay. Faylasha qaabka HDF5 ee hore waa la diidaa: mar kale ku kaydi faylka Ogawa Alembic.

{{ui:Hubi daabacaadda 3D (STL ama 3MF)…}} wuxuu marka hore hubiyaa qaabka, kadibna wuxuu qoraa xulashada, ama wax kasta oo la muujinayo. Eeg [Diyaari moodelka daabacaadda 3D](topic:print-3d).

## 3MF (.3mf)

Soo saar kaliya, laga bilaabo {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}}. 3MF core: hal mesh **millimitir**, Z sare, midabyadiisa agab ahaan. Inta badan barnaamijyada jeexista way akhriyaan, oo STL ka duwan wuxuu sheegaa unitigiisa. Waxyaabaha qarsan waa la ka reebay. Eeg [Diyaari moodelka daabacaadda 3D](topic:print-3d).

## Soo saarista DWG iyo DXF (.dwg, .dxf)

Barnaamijyada CAD. Moodelka unitigiisa ayaa lagu qoraa: inji moodelada fit iyo inji, haddii kale millimitir, santimitir ama mitir (bar xaaladdu magacaabaa).

- **Wajiyada** waxay noqdaan wajiyo 3D (saddex-geesood). Xariiqyada gudaha wajiga, iyo geesaha nuugan, waa lagu qoraa kuwo aan muuqan, sidaas darteed wajiyadu waxay u egyihiin kuwa ModelCraft.
- **Geesaha furan** waxay noqdaan xariiqyo.
- **Kooxaha iyo qaybaha** waxay noqdaan bloogyo: qayb mar bay la qoraa oo waxay u dhigan tahay inta la isticmaalo, nuqullada la rogay iyo kuwa lagu muraayadeeyay ku jira. Koox la fidiyay ka dib markii la rogay (sidaas darteed way foorarsan tahay) meeshiisii ayaa lagu qoraa.
- **Midabyada:** DWG wuxuu ilaalinayaa midabka wajig kasta si sax ah; DXF wuxuu isticmaalaa midabka ugu dhow ee 255 midab oo CAD-ka caadiga ah.
- **Noocyada:** DWG waxaa lagu qoraa AutoCAD 2004 (AC1018), kaas oo barnaamijyada CAD ee 2004 ka dambeeya furtaan. DXF waa R12 (AC1009), nooca ay akhriyaan barnaamij kasta oo CAD; R12 ma leh goob unit, sidaas darteed u sheeg barnaamijka CAD unitiga uu isticmaali doono.
- **Lama qorin:** hagayaasha, cabbirrada, muuqaallada iyo kamarada.

## IFC (.ifc)

Soo saar kaliya, BimCraft iyo barnaamijyada BIM kale. IFC4 oo leh mashruuc, goob, dhismo iyo dabaqyadiisa. Koox ama qayb kasta oo sare waxay noqotaa hal wakiil qayb dhismeed oo magacyadiisa leh; kuwa xidhan waxaa loo qoraa qaabab jir ah (faceted breps), kuwa furan waxaa loo qoraa moodelo dusha ah; godadka wajiyada waa la ilaalinayaa. Joomatari furan oo sare wuxuu noqdaa hal qayb oo la yiraahdo "Loose geometry". Noocyo, hanti ama agab ma jiro.

**Dabaqyada:** {{ui:Soo saar}} › {{ui:Dabaqyada IFC…}} ayaa liistaa, mid kasta magac iyo sare-u-kaca ({{ui:Ku dar dabaq}}, ama {{ui:Ka saadaal moodelka}}, kaas oo dabaq u sameeya dherer kasta oo kooxaha sare ay taagan yihiin). Soo saarista, koox kasta ama qayb kasta dabaqa hoose ama isku mid ah ee ku dhow dhibcaha ugu hooseeya ayay saaraa, meeshiisana way ilaalisaa. Dabaq la'aan, wax walba waxay ku jiraan hal dabaq, "Level 1", ee 0. Dabaqyada waxaa lagu kaydiyaa faylka ModelCraft.

## DWG (.dwg) iyo DXF (.dxf)

Soo dhoofi sida xariiqyo dhulka (hatches iyo 3D faces sida wajiyo); soo saar sida kor lagu qoray. Eeg [Moodel qorshe goob ah ku dhig](topic:site-plan).

- **Akhri:** xariiqyo, polylines (qaansooyin ku jira), 3D polylines, goobo, qaansooyin, iyo tixraacyo bloog oo ay ku jiraan array-yada, meesha moodelka. Shayada aan muuqan (sida gobolada qarsan ee bloogga firfircoon) waa la ka reebay. Qalinada waxay noqdaan 48 qayb toos ah wareeg kasta.
- **Akhri tan iyo 0.4:** splines iyo ellipses (sida geesaha), qoraal, qoraal dhowr-sadar iyo qiimaha sifooyinka (sida geesaha qoraal hal-jid ah), hatches (wajiyo godad leh), 3D faces iyo buuxinta jirka (wajiyo), iyo cabbirro (laga sawiray bloogyada cabbirka ee sawirka).
- **Akhri tan iyo 0.7:** jirarka 3D, gobolada iyo jidadka (xogta ACIS, DWG iyo DXF nooc kasta), mid kasta koox gaar ah, kuwa xidhan waxay noqdaan jir. Wajiyada dusha aan diyaarad, silinda, koone, sfeer, torus iyo dusha spline fudud ahayn waa la ka reebay oo waa la liistaa.
- **Lama akhriyo:** barar, miisaska, multileaders, sawirrada, iyo wax kasta oo ku jira paper space.
- **Unitiyada:** waxaa laga qaadaa sawirka markuu sheego. Haddii kale, ModelCraft ayaa weydiiya.
- **DXF** waa inuu noqdaa ASCII. DXF binary waa la diidaa.
- **Faylasha DWG** ee AutoCAD R13 ilaa qaabka hadda (AutoCAD 2018 iyo ka dambeeya; AC1012 ilaa AC1032) waxaa akhrinaya akhriyaha DWG ee ModelCraft, bogga gudihiisa; waa qayb ka mid ah ModelCraft, sidaas darteed wuxuu shaqeeyaa marka kasta oo ModelCraft uu offline shaqeeyo. Noocyada hore (R12 iyo ka hor) iyo faylal aad u qaldan ma akhriyi karaan; ku kaydi DXF.
- **Xadka:** kala-koobka ka fog bilowga 10,000 km, ama in ka badan 2 milyan oo qayb xariiq, waa la diidaa.

## Faylasha SKP

{{ui:Soo dhoofi}} (ama ku deji muuqaalka faylka) wuxuu akhriyaa faylasha SketchUp akhriyaha ModelCraft ee gaarka ah, bogga gudihiisa: waxba lama soo raro, oo wuxuu shaqeeyaa marka kasta oo ModelCraft uu offline shaqeeyo. Waxaa lagu tijaabiyay faylasha SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 iyo 2026; noocyada kale way furmi karaan, laakiin wali lama isku dayin. Moodelku wuxuu imanayaa hal koox oo magaceeda faylka ku salaysan. Hal {{key:Mod+Z}} ayaa mar kale ka saaraa. Tallaabo tallaabo: [Soo geli moodel SKP](topic:import-sketchup-files).

- **Ilaalinaya:** wajiyada godadkooda, kooxaha (sida kooxo) iyo qaybaha (sida qaybo, la wadaago), magacyadooda iyo meelaha ay ku dhigan yihiin, midabyada, tags-ka kooxaha iyo qaybaha, geesaha aan qayb ka ahayn wajig, iyo geesaha nuugan iyo siman, si dusha wareegsan ay siman ku sii jirto.
- **Midabyada:** agabka wajig kasta ayaa siinaya midabkiisa. Agab lagu rinjiyeeyay koox ama qayb ayaa noqda rinjiga meeshaas, sidaas darteed wajiyada gudihiisa midab aan lahayn ayaa qaadanaya, sida SketchUp; qayb lagu rinjiyeeyay laba midab ayaa ku sii jirta hal qayb.
- **Tags** ee kooxaha iyo qaybaha waxay noqdaan tags ModelCraft, la muujiyay ama qarsan sida ay ahaayeen. Tags ee wajiyada furan iyo geesaha lama ilaalinayo (ModelCraft wuxuu tag ku dhejiyaa kooxaha iyo qaybaha keliya); bar xaaladdu wuu tiriyaa.
- **Waxyaabaha qarsan waxay imanayaan qarsan** (wajiyo, geesaha, kooxo, qaybo, iyo wajiyo iyo geesaha tag qarsan ku jira), si aad u aragto waxa SketchUp muujiyay; {{ui:Muuji dhammaan}} ayaa muujiya.
- **Teexturada:** wajig lagu rinjiyeeyay agab teexturo leh wuxuu ilaalinayaa teexturadiisa, meeshii faylku ku dhigay, faylka ModelCraft wuxuu ilaalinayaa sawirka. Teexturada koox ama qayb oo dhan, teexturada ka maqan faylka, ama sawir aan browser-ku muujin karin (sida faylka Photoshop) waxay ilaalinaysaa midabka agabkiisa kaliya.
- **Waa la ka reebay, waxaana bar xaaladda lagu tiraa:** sawirrada lagu dhigay moodelka. Qoraalka, cabbirrada, hagayaasha, diyaaradaha qaybta, muuqaallada iyo qaababka lama akhriyo.
- **Unitiyada:** faylasha SketchUp dhexdooda inji ayay ku jiraan; ModelCraft wuu beddelaa, sidaas darteed cabbirku waa sax unit kasta.
- **Kaydinta `.skp`** lama dhisin. Si aad moodel ugu celiso SketchUp, soo saar Collada (`.dae`).

## Lama taageero

ModelCraft ma furi karo faylasha 3DS ama IFC, mana kaydin karo faylasha 3DS, FBX, STEP, `.3dm` ama SketchUp (`.skp`).
