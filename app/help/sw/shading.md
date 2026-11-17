---
title: Tengeneza nyenzo kwa nodi
summary: Jenga nyenzo kutoka kwa umbile, picha na hesabu katika nafasi ya kazi ya Ushadi, ione kwenye mwonekano unapoendelea, na upake nyuso nayo.
keywords: ushadi, nyenzo, oka, kuoka umbile, ambient occlusion, ao, curvature, oka kawaida, poly ya juu, poly ya chini, ramani ya mwanga, dekali, kibandiko, nembo, lebo, upakaji wa umbile, paka umbile, brashi, materialx, mtlx, openpbr, standard surface, maktaba ya nyenzo, librarycraft, seti ya umbile, pbr, leta umbile, zip, cc0, buruta, nodi, mhariri wa nodi, shader, umbile, procedural, kelele, checker, voronoi, seli, mawimbi, matofali, vigae, mbao, marumaru, gradient, uchafu, uchakavu wa kingo, color ramp, mchanganyiko, bump, ramani ya kawaida, roughness, metalness, opacity, kukata, emission, mwangaza, displacement, box mapping, triplanar, uv, picha, umbile la picha, openpbr
from: d7368b21
---

Nyenzo iliyotengenezwa katika nafasi ya kazi ya **Ushadi** ni ya faili. Ni grafu ndogo: **nodi** zinazotengeneza umbile, picha na namba, zilizounganishwa na **Matokeo ya Nyenzo**, ambayo ingizo zake ni mwonekano wa uso — rangi ya msingi, ukali, metali, kawaida, uwazi, mwangaza na mengine ya modeli ya OpenPBR. Unapaka nyuso nayo kama nyenzo yoyote ya maktaba, na kila mabadiliko yanaonekana kwenye mwonekano mara moja.

## Ifungue

Chagua {{ui:Ushadi}} kwenye orodha ya Nafasi ya kazi. Mwonekano wa 3D unabaki juu ya skrini na **mhariri wa nodi** unachukua sehemu ya chini. Paneli ya kulia inaorodhesha nyenzo za faili.

- {{ui:Nyenzo mpya}} inatengeneza ya kijivu yenye Matokeo ya Nyenzo pekee.
- **Tengeneza nakala inayoweza kuhaririwa ya nyenzo ya maktaba** inageuza matofali, mbao, vigae na nyingine kuwa grafu unayoweza kubadilisha: umbile lake linakuja kupitia nodi ya Library texture, na mikunjo yake kupitia nodi ya Bump.
- {{ui:Paka nayo}} inapaka nyuso au vikundi vilivyochaguliwa, au inachagua nyenzo kwa zana ya Upakaji. Nyenzo za zana ya Upakaji pia zinaorodhesha za faili chini ya **Katika faili hii**.
- {{ui:Nakili}} na {{ui:Futa}} zinafanya kazi kwenye nyenzo unayohariri. Kufuta hakuwezi kutenduliwa: nyuso zilizopakwa nayo zinaonyesha rangi ya msingi hadi uzipake tena.

## Nyenzo kutoka maktaba

Paneli ya **Maktaba ya nyenzo (Library)** inaorodhesha nyenzo za maktaba, kila moja ikiwa na onyesho lililotolewa na kifuatiliaji cha njia cha CadCraft. Ni seti za umbile zilizotolewa chini ya CC0, zikihusishwa na watu waliozitengeneza.

- Bofya moja ili kuiingiza kwenye faili (picha zake zinakuja nayo) na, ukiwa na nyuso au vikundi vilivyochaguliwa, zipake.
- Buruta moja kwenye uso au kikundi kwenye mwonekano ili kupaka hicho pekee.
- Inakuwa mojawapo ya nyenzo za faili: badilisha nodi zake kama nyingine yoyote. Sifa yake inaonekana kwenye paneli na inabaki kwenye faili.

## Leta seti ya umbile

{{ui:Picha au zip…}} au {{ui:Folda…}} chini ya **Leta seti ya umbile** inatengeneza nyenzo kutoka seti ya ramani. Ramani zinatambuliwa kwa maneno yaliyo kwenye majina ya faili zao: color, albedo, diffuse au basecolor; roughness (au gloss, inayogeuzwa kuwa roughness); metalness au metallic; normal (OpenGL au DirectX, kutoka `gl` / `dx` kwenye jina); height au displacement; ambient occlusion; opacity; emission. Ramani zilizofungwa (ARM, ORM) zinaachwa. Kigae kinaanza kwa 1 × 1 m: weka ukubwa wake halisi kwenye Matokeo ya Nyenzo. Height inaenda kwenye displacement ikiwa kipimo chake kiko 0 — ongeza kipimo ili kuitumia kwenye mesh.

## MaterialX

MaterialX ni muundo huria ambao programu nyingine za 3D na uonyeshaji hutumia kupitishia nyenzo.

- {{ui:Hamisha kama MaterialX…}} inahifadhi nyenzo unayohariri: thamani zake, na kila umbile kama picha ya PNG pembeni ya faili la `.mtlx` (kwenye zip). Chagua kivuli kinachoandikwa: **OpenPBR Surface** (MaterialX 1.39, modeli ile ile ya ModelCraft) au **Standard Surface** (MaterialX 1.38, ambayo programu nyingi zinaisoma leo). Umbile linawekwa kwa kuratibu za UV kwa mita; uwekaji wa kisanduku na triplanar unaandikwa kama UV.
- {{ui:Ingiza MaterialX…}} (au {{ui:Kutoka kwenye folda…}}) inasoma faili za `.mtlx` zenye vivuli vya OpenPBR, Standard Surface, UsdPreviewSurface au glTF PBR. Toa picha pia, au zip ya kila kitu: picha inapatikana kwa njia yake, jina lake, au jina lake likiwa na aina nyingine ya picha (faili la `.exr` linaloorodheshwa linaweza kuja kama `.jpg` karibu nalo). Umbile, ramani za kawaida, hesabu, mchanganyiko na displacement vinakuja kama nodi; kingine chochote kinabaki na thamani yake, na mstari wa hali unasema kilichoachwa.

## Dekali

Dekali ni picha inayowekwa juu ya uso — nembo, bango, lebo, doa — ikiwa na nyenzo yake yenyewe.

- Weka **Upana wa dekali mpya**, kisha {{ui:Weka dekali…}} (au {{ui:Dekali}} kwenye upau wa zana), chagua picha ya PNG, JPEG au WebP na ubofye uso. Picha inapangwa kwenye nyuso zilizo pale, ikihifadhi uwiano wake; sehemu zisizo wazi za PNG zinabaki wazi.
- Ni ya kikundi au kipengele ulichobofya ndani yake, na inasogea nacho. Inafunika nyuso zilizo ndani ya kisanduku chake zinazotazama upande mmoja, na inasimama kwenye kingo za kile inachokaa juu yake.
- Kila dekali inapata nyenzo yake, yenye jina **Dekali: <picha>**, kwenye orodha ya faili: ihariri kama nyingine yoyote (ukali, mkunjo, mwangaza). {{ui:Material}} karibu na dekali inaifungua.
- Karibu na kila dekali: upana wake (urefu unafuata picha), {{ui:Geuza}} (robo zamu) na {{ui:Futa}}. Dekali zinabaki pamoja na nyenzo za faili, nje ya Tendua.
- Zinaonekana kwenye mwonekano wenye vivuli, kwenye uonyeshaji wa haraka na kwenye picha za ubora wa juu.

## Paka umbile

{{ui:Paka umbile}} (au {{ui:Paka}} chini ya **Paka kwenye umbile**) inageuza kielekezi kuwa brashi ya duara. Buruta juu ya uso uliovaa mojawapo ya nyenzo za faili hii: brashi inapaka picha iliyo nyuma ya rangi yake ya msingi.

- Kwenye mesh inapaka kufuata UV za mesh (zifungue kwanza kwenye nafasi ya kazi ya UV); kwenye nyuso nyingine inapaka kote kwenye uso, hivyo upakaji unajirudia pamoja na kigae cha nyenzo.
- Nyenzo yenye rangi ya msingi ya rangi tupu inapata picha mpya ya 512 × 512 ya rangi hiyo mara ya kwanza unapoipaka. Nyenzo ambayo rangi yake ya msingi inatoka kwenye nodi nyingine inahitaji nodi ya Picha iliyounganishwa na Base color.
- Weka rangi ya brashi, ukubwa (kwa pikseli za picha), nguvu na ugumu kwenye paneli. {{ui:Tendua mpigo}} au Ctrl+Z (wakati wa kupaka) inarudisha mpigo mmoja, hadi wa mwisho 20.
- Picha iliyopakwa inahifadhiwa kwenye faili. Nyenzo za maktaba haziwezi kupakwa: tengeneza nakala inayoweza kuhaririwa kwanza.

## Oka umbile

**Oka umbile** inaandika kile umbo na tukio vinachotoa kwenye uso kuwa picha kando ya UV za mesh.

- Chagua mesh yenye UV (izifungue kwenye nafasi ya kazi ya UV), tia alama ramani unazotaka na bonyeza {{ui:Oka}}:
  - **Ambient occlusion** — jinsi kila nukta ilivyo wazi: pembe, mikunjo na sehemu zilizo chini ya vitu vingine zinakuwa nyeusi zaidi. Kila kinachoonekana kwenye modeli kinaleta kivuli, hadi umbali wa occlusion.
  - **Curvature** — angavu kando ya kingo za nje, giza kwenye pembe za ndani, kijivu cha kati kwenye sehemu bapa na zilizopinda kidogo, juu ya upana wa kingo ulioweka.
  - **Kawaida kutoka kitu chenye maelezo mengi** — chagua pia nakala yenye maelezo mengi: maelezo ya uso wake yanaandikwa kama ramani ya kawaida kwa kitu rahisi zaidi (kitu chenye pembetatu chache ndicho kinachookwa juu yake). Umbali wa utafutaji ni jinsi nyuso mbili zinavyoweza kuwa mbali.
  - **Mwanga** — jua la mahali pa modeli na tarehe yake (Style) pamoja na vivuli vyake, na anga, kama ramani ya mwanga.
- Picha zinaungana na faili na zinaonekana kwenye nodi za Picha. Ikiwa nyenzo unayohariri ina nodi ya **Dirt and edge wear**, inasoma occlusion na curvature mpya mara moja.
- Miale zaidi kwa texel inafanya occlusion na mwanga kuwa laini zaidi lakini inachukua muda zaidi. Kuoka kunaendeshwa kwenye core za processor ya kompyuta chinichini; {{ui:Acha kuoka}} inakisimamisha.

## Jenga grafu

1. {{ui:Ongeza nodi…}} (au {{key:Shift+A}} kwenye mhariri wa nodi) inaongeza nodi katikati ya mhariri.
2. Buruta kutoka nukta ya kutoa (upande wa kulia wa nodi) hadi nukta ya ingizo (upande wa kushoto wa nodi) ili kuziunganisha. Kiungo cha pili kwenye ingizo kinachukua nafasi ya cha kwanza; buruta ingizo lililounganishwa mbali ili kulitenganisha.
3. Ingizo ambazo hazijaunganishwa zinaonyesha thamani yao: andika namba au chagua rangi. Mipangilio iko chini ya kila nodi.

Buruta nodi kwa kichwa chake ili kuisogeza, buruta nafasi tupu ili kusogeza, na tumia gurudumu kukuza. {{key:Delete}} inaondoa nodi zilizochaguliwa au kiungo, {{key:Mod+Z}} inatendua, {{key:Mod+D}} inanakili, {{key:F}} inaonyesha nodi zote. Kila mabadiliko ni hatua moja ya kutendua ya mhariri wa nodi. Kutendua kwa modeli yenyewe hakubadilishi nyenzo.

| Nodi | Inatengeneza nini |
|---|---|
| Texture coordinates | Mahali nukta ilipo kwenye kigae: irudie, ihamishe, izungushe robo. |
| Value, Color | Namba, rangi. |
| Picture | Picha ya faili (iliyokuja na modeli iliyoingizwa, au uliyoongeza kwa {{ui:Ongeza picha…}}). Chagua **Colors** kwa picha ya kawaida na **Data** kwa ramani ya ukali au ya kawaida. |
| Library texture | Umbile, ukali na urefu wa nyenzo ya maktaba. |
| Checker, Noise | Mraba; kelele laini ya fractal yenye maelezo, ukali na mbegu yake. |
| Voronoi cells, Waves, Gradient | Seli (umbali hadi nukta ya karibu, kingo kati ya seli, rangi kwa kila seli); bendi za kuvuka, juu au mlalo, kama sine, msumeno au pembetatu, zilizopindwa na kelele; migawanyiko ya mstari, quadratic, radial na spherical. |
| Bricks, Tiles | Safu za matofali zenye mwendo wa kukabiliana, au gridi ya vigae: rangi, chokaa au grout, pengo na bevel kwa mita, urefu kwa bump, namba ya nasibu kwa kila kipande. |
| Wood, Marble | Pete kando ya nafaka pamoja na nyuzi laini; mishipa iliyopindwa na turbulence. |
| Dirt and edge wear | Inachakaza kingo zinazojitokeza na kuchafua mashimo kutoka kwenye mikunjo ya mesh na picha za occlusion ([Oka umbile](topic:shading#bake-textures) zinazitengeneza; au weka mipangilio yake miwili ya picha, katika mpangilio wa UV wa mesh: weka nyenzo kwa kuratibu za UV). Bila hizo haibadilishi chochote. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Kazi za rangi. |
| Math, Map range | Hesabu kwenye namba (kuongeza, kuzidisha, nguvu, smooth step na zaidi). |
| Bump, Normal map | Kawaida kutoka urefu (Bump) au kutoka picha ya ramani ya kawaida (Normal map: chagua mwelekeo wa chaneli ya kijani). |

## Matokeo ya Nyenzo

Mipangilio yake inasema umbile linavyolala kwenye nyuso:

- **Upana wa kigae** na **Urefu wa kigae**: mita ngapi kigae kimoja cha umbile kinafunika. Kila kinachotengenezwa na grafu kinajirudia kwenye kigae bila mshono.
- **Placed by**: **UV coordinates** hufuata nyuso (sukuma/vuta nyuso: kando ya kila uso; mesh: UV zao, kitengo kimoja cha UV = kigae kimoja), **Box** inapanga kutoka mhimili wa karibu zaidi kati ya mitatu, **Triplanar** inachanganya makadirio matatu kwenye nyuso zilizoinama (**Blend sharpness**: juu zaidi ni mchanganyiko mgumu zaidi).
- **Normal strength** inapima ingizo la kawaida. **Displacement scale** inaweka umbali ingizo la displacement linaposogeza wima za mesh.
- {{ui:Ingizo zaidi}} inaonyesha ingizo nyingine za OpenPBR: coat, fuzz, subsurface, thin film, transmission na rangi zao.

## Katika picha za ubora wa juu

Kifuatiliaji cha njia kinasoma rangi ya msingi, ukali, metali, uwazi, kawaida na mwangaza kutoka kwenye grafu jinsi zinavyobadilika kwenye uso. Ingizo lingine lolote unaloliunganisha (kwa mfano coat inayobadilika) linatumika kwa wastani wake; paneli inasema lipi. Kata kutoka ramani ya uwazi inaonyesha umbo lake, na kivuli chake ni wazi sawasawa. Umbile linalong'aa linaangazia kile linachoelekea, bila kusomwa kama taa.

**Displacement** inasogeza wima za mesh pekee, kwa hiyo ongeza kirekebishi cha Subdivision kwa maelezo zaidi ([Virekebishi](topic:modifiers)). Nyuso za sukuma/vuta zinabaki na umbo lake na kupata matuta kutoka kwenye kawaida.

:::tip
Kwenye kompyuta yenye WebGPU grafu inahesabiwa kwenye kadi ya picha; bila hiyo, kwenye processor. Matokeo ni yale yale.
:::
