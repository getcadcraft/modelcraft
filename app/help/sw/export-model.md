---
title: Safirisha modeli kwa programu nyingine
summary: Chagua usafirishaji sahihi kwa uonyeshaji, wavuti, uchapishaji wa 3D, BIM na BimCraft, na uangalie kile kila mmoja unachohifadhi.
keywords: chapisha, 3mf, pdf, karatasi, picha, png, picha, picha ya skrini, onyesha, hifadhi mwonekano, safirisha, shiriki, render, uonyeshaji, gltf, glb, collada, dae, obj, stl, chapisha 3d, ifc, bim, bimcraft, tuma, programu nyingine
from: 9e13e80d
---

Kusafirisha kunatengeneza nakala ya modeli katika muundo mwingine. Hifadhi pia faili yako ya `.modelcraft`: ndiyo pekee inayohifadhi kila kitu, na ndiyo pekee ambayo ModelCraft inaifungua moja kwa moja.

## Safirisha

1. Hifadhi kwanza ({{key:Mod+S}}), ili faili yako ya kazi iwe salama.
2. Bofya {{ui:Safirisha}} katika kundi la {{ui:Faili}}.
3. Chagua muundo. Kivinjari kinapakua faili, ikitajwa kama modeli.

Modeli yote inasafirishwa. Ili kusafirisha sehemu moja, hifadhi, futa zilizobaki, safirisha, kisha tendua au fungua upya.

## Muundo gani

| Unachotaka | Chagua | Maelezo |
|---|---|---|
| Kuifungua kwenye kifaa kingine cha uundaji wa 3D | {{ui:Collada (.dae)}} | Huhifadhi vikundi, vikundi ndani ya vikundi, vipengele (vinavyoshirikiwa, si kunakiliwa), majina na rangi. Z juu, mita. |
| Kuonyesha, au kutumia katika programu ya taswira | {{ui:OBJ (.obj)}} au {{ui:glTF binary (.glb)}} | OBJ ndiyo inayosomwa zaidi; inaandika kila mpangilio wa kikundi kama kitu tofauti, lakini haina rangi wala vipengele vinavyoshirikiwa. glTF inahifadhi vipengele na rangi. |
| Kuweka kwenye wavuti, injini ya michezo au AR | {{ui:glTF binary (.glb)}} | Faili moja yenye kila kitu ndani yake. |
| Kuichapisha kwa 3D | {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}} | Inakagua kwamba modeli imefungwa na nyuso zinaelekea sahihi, kisha inaandika STL au 3MF kwa milimita. Tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d). {{ui:STL kwa uchapishaji (.stl, milimita)}} inaandika modeli yote bila ukaguzi. |
| Kuifungua kwenye BimCraft au programu nyingine ya BIM | {{ui:IFC kwa BimCraft (.ifc)}} | Kila kikundi au kipengele cha ngazi ya juu kinakuwa kipengele kimoja cha jengo. |

Upau wa hali unathibitisha kila usafirishaji, kwa mfano "Imesafirishwa House.stl (milimita)." au "Imesafirishwa House.dae (Collada 1.4.1, Z juu, mita; vipengele vinabaki vinashirikiwa)."

## Kabla ya kusafirisha

- **Panga vitu vyako katika vikundi.** Collada, glTF na IFC zinahifadhi vikundi na vipengele kama vitu tofauti. Jiometri iliyolegea inatoka kama kipande kimoja; katika IFC inakuwa kipengele kimoja kinachoitwa "Loose geometry".
- **Vipe majina.** Majina ya vikundi na vipengele yanaingia kwenye Collada na IFC, hivyo ukuta uliotajwa "North wall" unafika kama "North wall".
- **Angalia mwelekeo wa nyuso.** Nyuso zinazoonyesha kijivu-bluu nje zitaelekea ndani kwenye usafirishaji. Zirekebishe kwa {{ui:Geuza uso}} (tazama [Futa na usafishe](topic:erase#a-face-facing-the-wrong-way)).
- **Kwa uchapishaji,** fanya sehemu ziwe vigumu vilivyofungwa: chagua kila kikundi na uangalie kwamba {{ui:Taarifa ya kitu}} inasema "Kigumu: Ndiyo". Kisha kuza modeli kwa ukubwa wa kuchapishwa, au kuza katika programu ya printa.

## Tuma modeli kwa BimCraft

1. Fanya kila sehemu ya jengo kuwa kikundi au kipengele na uipe jina.
2. Chagua {{ui:Safirisha}}, kisha {{ui:IFC kwa BimCraft (.ifc)}}.
3. Fungua faili ya `.ifc` iliyopakuliwa katika BimCraft.

Kwa dhana ya ujazo wa jengo, tumia {{ui:Safirisha}} › {{ui:Massing kwenda BimCraft…}} badala yake: kila kikundi kinaenda kama chaguo la massing lenye sakafu, maeneo ya sakafu na ujazo. Tazama [Tuma massing kwa BimCraft](topic:massing-to-bimcraft).

Usafirishaji wa kawaida wa IFC hauna kiungo cha moja kwa moja kati ya programu hizi mbili. IFC ina ghorofa moja, na kila kipengele ni kiwakilishi cha jumla cha kipengele cha jengo, bila aina wala sifa: kina umbo na jina tu. Vikundi vilivyofungwa vinakuwa maumbo magumu; vilivyo wazi vinakuwa nyuso.

## Mistari bila nyuso

Kingo zisizo sehemu ya uso wowote (mistari kama miongozo, au mpango wa tovuti uliongizwa) zinaingia OBJ na Collada kama mistari. glTF na STL hazina nafasi kwa hizo, hivyo zinaziacha. Miongozo na matukio hayasafirishwi kwenye muundo wowote.

## Hifadhi mwonekano kama picha

{{ui:Safirisha}} › {{ui:Picha ya mwonekano (.png)}} inahifadhi hasa kile mwonekano wa 3D unaonyesha, kwa ukubwa wake kwenye skrini. {{ui:Picha mara mbili ya ukubwa (.png)}} inahifadhi mara mbili ya upana na mara mbili ya urefu (kwa uchapishaji au slaidi kali), na vipimo na alama zinachorwa upya kwa ukubwa huo badala ya kunyooshwa.

Kwa picha inayofanana na mwanga wa mchana (anga, jua, vivuli laini, kioo), tumia {{ui:Safirisha}} › {{ui:Tengeneza picha…}} badala yake: tazama [Tengeneza picha](topic:render).

Kwa picha safi, washa [mwonekano wa uwasilishaji](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) kwanza: shoka, miongozo, mistari ya sehemu za kukata na uteuzi vinaachwa nje. Weka kamera, mtindo na vivuli unavyotaka, au nenda kwenye [tukio](topic:scenes); ili kuhifadhi filamu inayosogea ya matukio yako, tumia {{ui:Hamisha uhuishaji}} katika paneli ya {{ui:Matukio}}.

## Chapisha mwonekano, au uhifadhi kama PDF

- {{ui:Safirisha}} › {{ui:PDF ya mwonekano (.pdf)}} inahifadhi PDF ya ukurasa mmoja: mwonekano kwa mara mbili ya ukubwa wake kwenye skrini, pamoja na vipimo vyake, kwenye ukurasa wa A4 (Letter modeli ikiwa katika futi na inchi), mlalo, na mstari chini yake unaotaja jina la faili, tarehe na kipimo.
- {{ui:Safirisha}} › {{ui:Chapisha mwonekano…}} inaweka ukurasa huo huo mbele ya dirisha la uchapishaji la kivinjari chako. Chagua printa, au "Hifadhi kama PDF".

Ukurasa unaonyesha mwonekano jinsi ulivyo: hakuna kipimo kwenye mwonekano wa kina. Kwa mchoro wenye kipimo, zima {{ui:Mtazamo wa kina}} na uangalie kutoka {{ui:Juu}} au {{ui:Mbele}}, na ongeza [vipimo](topic:dimensions) kwa ukubwa unaohusika. [Mwonekano wa uwasilishaji](topic:styles-shadows#presentation-view) unaacha shoka, miongozo na uteuzi; vipimo vinabaki.
