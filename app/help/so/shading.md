---
title: Samee agabyo nuqadood
summary: Ka dhis agab textures, sawirro iyo xisaab meel shaqada Hoosaad, ku arag muuqaalka markaad socoto, oo dhinacyada ku rinji.
keywords: hoosaad, shading, dubid, bake, dubidda texture-ka, ambient occlusion, ao, curvature, dubidda normal, high poly, low poly, light map, decal, nalkiyo, sticker, logo, label, rinjiga texture-ka, paint texture, brush, agab, material, materials, materialx, mtlx, openpbr, standard surface, maktabadda agabka, librarycraft, texture set, pbr, soo dhoofi textures, zip, cc0, jiid, nuqad, nuqadaha, tafatiraha nuqadaha, node editor, shader, texture, procedural, noise, checker, voronoi, cells, waves, bricks, tiles, wood, marble, gradient, dirt, edge wear, color ramp, mix, bump, normal map, roughness, metalness, opacity, cut-out, emission, glow, displacement, box mapping, triplanar, uv, sawir, image texture, openpbr
from: d7368b21
---

Agab la sameeyay meel shaqada **Hoosaad** wuxuu ku jiraa faylka. Waa grafik yar oo ah **nuqado** samaynaya textures, sawirro iyo lambarro, oo isku xidhan **Soo saarka agabka**, kaas oo galinta uu yeelo muuqaalka dusha — base color, roughness, metalness, normal, opacity, emission iyo inta kale ee moodelka OpenPBR. Dhinacyada waxaad ku rinjiysaa sida agab kasta oo maktabada ka yimid, isbeddel kasta wuxuu isla markiiba ku muuqdaa muuqaalka.

## Furo

Dooro {{ui:Hoosaad}} liiska meelaha shaqada. Muuqaalka 3D wuxuu haysta sare-ta shaashadda, **tafatiraha nuqadaha** wuxuu qaataa hoose. Dhinaca midig ee liiska wuxuu soo bandhigayaa agabyada faylka.

- {{ui:Agab cusub}} wuxuu sameeyaa mid cawl ah oo keliya Soo saarka agabka.
- **Samee koobiyo la tafatiri karo oo agab maktabad ah** wuxuu u beddelaa brick, wood, tile iyo kuwa kale graph aad bedeli karto: texture-kiisa wuxuu ka imanayaa nuqad Library texture, bump-kiisana nuqad Bump.
- {{ui:Ku rinji}} wuxuu rinjiyaa dhinacyada ama kooxaha la doortay, ama wuxuu doortaa agabka qalabka rinjiga. Agabyada qalabka rinjiga waxay sidoo kale liistaan agabyada faylka hoos **Faylkan dhexdiisa**.
- {{ui:Koobiyee}} iyo {{ui:Tirtir}} waxay ku shaqeeyaan agabka aad tafatirayso. Tirtirida lama soo celin karo: dhinacyada lagu rinjiyay wuxuu muujinayaa midabka caadiga ah ilaa aad mar kale rinjiyayso.

## Agabyada maktabadda

**Maktabadda agabka (Library)** ee liiska ayaa soo bandhigaysa agabyada maktabadda, mid kastaa leh muuqaal la sameeyay raadiyaha (path tracer) ee CadCraft. Waa texture sets la sii daayay CC0, oo lagu xusay dadkii sameeyay.

- Guji mid si aad faylka ugu keento (sawirradiisa ayaa la socda) iyo, markii dhinacyo ama kooxo la doortay, rinji.
- Jiid mid dhinac ama kooxo muuqaalka ku jira si aad kaliya taas rinjiso.
- Wuxuu noqonayaa mid ka mid ah agabyada faylka: beddel nuqadihiisa sida kuwa kale. Tixraaciisa wuxuu ka muuqdaa liiska, wuuna ku sii jiraa faylka.

## Soo dhoofi texture set

{{ui:Sawirro ama zip…}} ama {{ui:Gal…}} hoos **Soo dhoofi texture set** wuxuu sameeyaa agab ka yimid kooxda khariidadaha. Khariidadaha waxaa la helaa erayada magacyada faylalkooda: color, albedo, diffuse ama basecolor; roughness (ama gloss, oo loo beddelay roughness); metalness ama metallic; normal (OpenGL ama DirectX, oo laga helo `gl` / `dx` magaca ku jira); height ama displacement; ambient occlusion; opacity; emission. Khariidadaha la isku duubay (ARM, ORM) waa la fogeeyay. Tile-ku wuxuu bilaabmaa 1 × 1 m: cabirkiisa dhabta ah deji Soo saarka agabka. Height wuxuu u gudbaa displacement oo miisaankiisu yahay 0 — kor u qaad miisaanka si aad ugu isticmaasho meshes.

## MaterialX

MaterialX waa qaab furan oo barnaamijyada kale ee 3D iyo muuqaalka ay ku wada wareegaan agabka.

- {{ui:U dhoofi sida MaterialX…}} wuxuu kaydiyaa agabka aad tafatirayso: qiyamkiisa, iyo texture kasta oo PNG sawir ah oo ku taal faylka `.mtlx` (zip gudihiisa). Dooro shader-ka lagu qoro: **OpenPBR Surface** (MaterialX 1.39, isla moodelka ModelCraft isticmaalo) ama **Standard Surface** (MaterialX 1.38, oo barnaamijyo badan maanta akhrin karaan). Texture-yada waxaa lagu meeleeyaa UV coordinates oo ku qoran mitir; box iyo triplanar waxaa loo qoraa sida UV.
- {{ui:Soo geli MaterialX…}} (ama {{ui:Gal…}}) wuxuu akhrinayaa faylasha `.mtlx` oo leh shader-yada OpenPBR, Standard Surface, UsdPreviewSurface ama glTF PBR. Sawirrada ku dar, ama zip oo wax walba ku jira: sawir waxaa laga helaa jidkiisa, magacyada, ama magaca oo nooca kale ee sawirka ah (faylka `.exr` ee magaca ku jira waxaa laga soo qaadi karaa `.jpg` oo ag taal). Texture-yada, khariidadaha caadiga ah, xisaabaha iyo isku-darka waxay u soo galaan nuqado; wax kasta oo kale wuxuu hayaa qiyamkiisa, sadarka xaaladda ayaa sheegaya wixii la ka reebay.

## Decal-yada

Decal waa sawir lagu dhejiyo dusha — logo, calaamad, label, ama wasakh — oo leh agab u gaar ah.

- Deji **Ballaca decal cusub**, kadibna {{ui:Decal dhig…}} (ama {{ui:Decal}} qalabka ku jira), dooro sawir PNG, JPEG ama WebP oo guji dhinac. Sawirka waxaa lagu saadaa dusha halkaas, isagoo ilaalinaya saamiyadiisa; qaybaha hufan ee PNG waxay ahaadaan hufan.
- Waxay ka tirsan tahay kooxda ama qaybta aad gujisay oo waxay la dhaqaaqdaa. Waxay daboolaysaa dhinacyada gudaha sanduuqeeda ee u wajahan isla jiho, waxayna istaagaa geesaha wax kasta oo ay saaran tahay.
- Decal kasta wuxuu leeyahay agab u gaar ah, oo loo magacaabay **Decal: <sawir>**, liiska faylka: tafatiri sida kuwa kale (roughness, bump, iw). {{ui:Agab}} oo decal-ka ku xiga ayaa furta.
- Dhinaca decal kasta: ballaadhkiisa (dhererka wuu raacaa sawirka), {{ui:Rogi}} (wareeg rubuc) iyo {{ui:Tirtir}}. Decal-yada waxaa lagu kaydiyaa agabyada faylka, dibadda Ka noqo.
- Waxay muuqdaan muuqaalka hooseeyay, muuqaalka degdegga ah iyo sawirrada tayada sare.

## Rinji texture-ka

{{ui:Rinji texture}} (ama {{ui:Rinji}} hoos **Rinji texture-ka**) wuxuu tilmaameyaa mouse-ka brush wareega. Jiid dhinac ku xidhan mid ka mid ah agabyada faylkan: brush-ka wuxuu rinjiyaa sawirka ka dambeeya base color-ka.

- Mesh dushiisa wuxuu rinjiyaa iyadoo raacaysa UVs-ka mesh-ka (marka hore u fur meeshiisa UV workspace-ka); dhinacyada kale wuxuu ku rinjiyaa dhinaca oo dhan, sidaas darteed rinjiyeyntu waxay ku celisaa tile-ka agabka.
- Agab base color-keedu yahay midab fudud ayaa sawir cusub oo 512 × 512 ah oo midabkaas ah helaa markii ugu horreysay ee la rinjiyo. Agab base color-keedu ka yimid nuqado kale wuxuu u baahan yahay nuqad Picture oo lagu xidho Base color.
- Dooro midabka brush-ka, cabbirka (pixels-ka sawirka), xoogga iyo adkaanta panel-ka. {{ui:Ka noqo jiidista}} ama Ctrl+Z (intii aad rinjiyeyso) ayaa dib u qaada jiid, ilaa 20-ka ugu dambeeya.
- Sawirka la rinjiyay waa lagu kaydiyaa faylka. Agabyada maktabadda ma rinjiyeyn karaan: marka hore samee koobiyo la tafatiri karo.

## Dub texture-yada

[Dub texture-yada](topic:shading#bake-textures) wuxuu qoraa waxa qaabka iyo muuqaalka siiyaan dusha sawirro, iyagoo raacaya UVs-ka mesh-ka.

- Dooro mesh leh UVs (u fur UV workspace-ka), calaamadi khariidadaha oo riix {{ui:Dubi}}:
  - **Ambient occlusion** — sida uu u furan yahay nuqad kasta: xagasha, jaalaha iyo meelaha ka hoosaysa waxyaabo kale way mugdi noqdaan. Wax kasta oo muuqda moodelka ayaa hoos u dhigaya, ilaa masaafada occlusion-ka.
  - **Curvature** — iftiin ku yahay geesaha dibadda, mugdi ku ah xagasha gudaha, boor dhexdhexaad ah meelaha siman iyo kuwa kor u fiican, iyadoo ka dhaqaaqaysa ballaca geesta aad dejisay.
  - **Normals from the high-detail object** — dooro sidoo kale nuqul faahfaahsan: faahfaahinta dusheeda waxaa loo qoraa khariidada normal mesh-ka fudud (shayga leh saddex-geesood yar ayaa lagu dubayaa). Masaafada raadinta waa intee le'eg ayay labada dusheba kala fogaan karaan.
  - **Lighting** — qorraxda meesha moodelka iyo taariikhdiisa (Style) iyo hooseedyadeeda, iyo cirka, sida khariidada iftiinka.
- Sawirada waxay ku biiraan faylka oo ka muuqdaan nuqadaha Picture. Haddii agabka aad tafatirayso leedahay nuqad **Dirt and edge wear**, waxay isla markiiba akhrinaysaa occlusion-ka iyo curvature-ka cusub.
- Dhibco-yar kasta oo texel ah oo dheeraad ah wuxuu samaynayaa occlusion iyo iftiin siman, laakiin waa uu dheeraadaa. Dubidda waxay ku shaqeysaa core-yada processor-ka kombiyuutarka dhexdhexaadka ah; {{ui:Jooji dubista}} ayaa joojisa.

## Samee graph

1. {{ui:Ku dar nuqad…}} (ama {{key:Shift+A}} tafatiraha nuqadaha) wuxuu ku daraa nuqad dhexda tafatiraha.
2. Jiid dhibicda wax soo saarka (midig nuqadda) ilaa dhibicda gelinta (bidix nuqadda) si aad isugu xidho. Xidhid labaad oo ku dhex jirta gelinta mid hore ayuu beddelaa; jiid gelinta xidhan si aad uga furto.
3. Gelinta aan xidhnayn waxay muujinaysaa qiimaheeda: qor lambar ama dooro midab. Dejinta waxay ku taalla hoosta nuqad kasta.

Jiid nuqad adigoo riixaya magaceeda si aad u dhaqaajiso, jiid meel banaan si aad u guurto, oo isticmaal wheel-ka si aad u weynaysiiso. {{key:Delete}} wuxuu tirtiraa nuqadaha ama xidhiidhka la doortay, {{key:Mod+Z}} wuu dib u qaadaa, {{key:Mod+D}} wuu koobiyeeyaa, {{key:F}} wuxuu muujinayaa nuqad walba. Isbeddel kasta waa hal tallaabo oo dib-u-qaad ah oo tafatiraha nuqadaha ah. Dib-u-qaadka moodelka ma beddelo agabyada.

| Nuqadaha | Waxay soo saaraan |
|---|---|
| Texture coordinates | Halka barta ku taalla tile-ka: ku celi, u wareeji, rogo rubuc. |
| Value, Color | Lambar, midab. |
| Picture | Sawir faylka ka mid ah (mid ka yimid moodel la soo dhoofiyay, ama mid aad ku dartay {{ui:Ku dar sawir…}}). Dooro **Colors** sawir sawir ah, **Data** khariidada roughness ama normal. |
| Library texture | Texture-ka, roughness-ka iyo height-ka agabka maktabadda. |
| Checker, Noise | Labajibbaaran; noise fractal oo siman oo leh faahfaahin, roughness iyo seed. |
| Voronoi cells, Waves, Gradient | Unugyo (masaafada ilaa barta ugu dhow, geesaha u dhexeeya unugyada, midab unug kasta); xariiqyo dhex-dhexaad, kor ama dhexdhexaad ah, sine, saw ama triangle, oo ay noise-ku foorarsado; gradient-yo toosan, quadratic, radial iyo spherical. |
| Bricks, Tiles | Safafka block-yada oo leh kala-sarayn socota, ama shabakad tile-yo ah: midabyo, maad ama grout, farqi iyo bevel mitir ahaan, height bump-yada, lambar random ah oo qayb kasta. |
| Wood, Marble | Wareegyo ku jira hadhaanta iyo cadaadis fiber-yo yar; xarigaleyaasha la foorarsaday turbulence. |
| Dirt and edge wear | Wuxuu xoqaa geesaha qaloocan wuxuuna wasakheeyaa godadka ka soo baxa sawirrada curvature iyo occlusion ee mesh-ka ([Dub texture-yada](topic:shading#bake-textures) ayaa sameeya; ama deji labada dejin ee sawirka, UV layout-ka mesh-ka: meel dheh agabka UV coordinates ahaan). Aan iyaga lahayn wax ma beddelo. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Shaqada midabka. |
| Math, Map range | Xisaabta lambarada (ku dar, ku dhufo, awood, smooth step iyo kuwa kale). |
| Bump, Normal map | Normal ka yimid height (Bump) ama sawir normal-map (Normal map: dooro jihada kanaalka cagaaran). |

## Soo saarka agabka

Dejintiisu waxay sheegtaa sida texture-ku u dhigmo dusha:

- **Ballaca tile-ka** iyo **Dherer tile-ka**: intee mitir ah ayuu hal tile oo texture ah daboolayaa. Wax kasta oo graph-ku sameeyo wuu ku celiyaa tile-ka iyada oo aan xarig lahayn.
- **Lagu meeleeyay**: **UV coordinates** wuxuu raacaa dhinacyada (riix/jiid dhinacyada: dhinac kasta gudihiisa; meshes: UVs-kooda, hal UV unit = hal tile), **Box** wuxuu ka saadaa saddexda dhidib ee ugu dhow, **Triplanar** wuxuu isku daraa saddexda saadaal dusha janjeeraysan (**Blend sharpness**: kor u ah, isku-darka waa adkaanayaa).
- **Normal strength** wuxuu miisaameeyaa gelinta normal-ka. **Displacement scale** wuxuu dejiyaa intee le'eg gelinta displacement-ku u dhaqaajiso mesh-ka vertices-keeda.
- {{ui:Gelin dheeraad ah}} wuxuu muujinayaa galinta kale ee OpenPBR: coat, fuzz, subsurface, thin film, transmission iyo midabkooda.

## Sawirada tayada sare leh

Raadiyaha (path tracer) wuxuu akhrinayaa base color, roughness, metalness, opacity, normal iyo emission graph-ka sida ay u beddelmayaan dusha oo dhan. Gelin kasta oo kale aad xidhayso (tusaale ahaan coat oo beddelmaya) waxaa loo isticmaalaa celceliskeeda; panel-ku wuxuu sheegaa kaas. Cut-out ka opacity texture wuxuu muujinayaa qaabkiisa, hoosaadkiisuna si siman buu u hufan yahay. Texture iftiinka leh wuxuu iftiimiyaa wixii uu u jeeda, iyada oo aan loo qaadan sida nalka.

**Displacement** wuxuu dhaqaajiyaa vertices-ka meshes oo keliya, sidaas darteed ku dar Subdivision modifier faahfaahin ahaan ([Modifiers](topic:modifiers)). Riix/jiid dhinacyada qaabkooda way hayaan oo bumps-ka normal-ka ayay ka helaan.

:::tip
Kombiyuutar leh WebGPU graph-ka waxaa lagu xisaabiyaa kaarka garaafka; aan lahayn, processor-ka. Natiijadu waa isku mid.
:::
