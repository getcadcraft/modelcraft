---
title: Nyuso huru (NURBS)
summary: Mikunjo na nyuso laini kwa maganda ya bidhaa, miili ya magari na maganda ya boti: loft, sweep, mitandao ya mikunjo, viraka vya kingo nne, mchanganyiko na kupunguza, kwa mwendelezo wa G0, G1 na G2 unaopimwa kwenye nyuso sahihi, vigumu vyenye muungano, kutoa na sehemu ya pamoja, mionekano ya zebra na mpindo, na nyuso zilizofaa kwenye skani zenye hitilafu iliyopimwa, pamoja na faili za STEP au IGES.
keywords: nurbs, skani, uhandisi nyuma, kufaa, wavu hadi uso, wingu la nukta, stl, kupunguza, kilichopunguzwa, shimo, kata, kigumu, vigumu, boolean, muungano, toa, sehemu ya pamoja, tofauti, shona, kilichofungwa, umbo huru, uso, nyuso, b-spline, bspline, mkunjo, spline, loft, sweep, reli, mtandao, coons, kiraka, mchanganyiko, linganisha, mwendelezo, g0, g1, g2, tanjenti, mpindo, zebra, nukta za udhibiti, mafundo, daraja, step, iges, class A
from: 09887405
---

Paneli ya **Nyuso** inatengeneza mikunjo na nyuso laini za aina inayotumika kwa maganda ya bidhaa, miili ya magari na maganda ya boti: NURBS, hesabu ile ile ambayo wachoraji wengine wa nyuso wanaitumia. Kila kitu kinapimwa kwenye nyuso sahihi, kamwe kwenye pembetatu unazoziona. Vipimo kwenye paneli viko kwa **milimita**, bila kujali kipimo ambacho modeli inaonyesha.

Ifungue kutoka paneli ya kulia: {{ui:Nyuso}} › {{ui:Fungua paneli ya Nyuso}}. Modeli yenye nyuso tayari inaifungua yenyewe.

## Jinsi amri inavyofanya kazi

1. Bonyeza amri (kwa mfano **Loft**). Paneli inasema inachohitaji bado: nukta, mikunjo, kingo ya uso au ncha ya mkunjo.
2. Vichague: bofya kwenye mwonekano wa 3D, au bonyeza **Chagua** (au vitufe vya kingo na ncha) kando ya kila kimoja kwenye orodha. Kwa kingo, bofya karibu na kingo hiyo ya uso.
3. Kagua chaguo (daraja, uvumilivu, mwendelezo, …) kisha ubonyeze **Tengeneza**.

Mikunjo kutoka nukta inachukua nukta zilizoandikwa moja kwa kila mstari (`x, y, z` kwa mm), au **Chagua nukta kwenye mwonekano**: kila bofya inatumia kunasa sawa na zana za kuchora; bonyeza <kbd>Enter</kbd> au bofya mara mbili kumaliza, <kbd>Esc</kbd> kusimamisha.

## Mikunjo

- **Mkunjo kupitia nukta** unapita kwenye kila nukta. **Mkunjo kwa nukta za udhibiti** unafuata ngome ya nukta badala yake.
- **Ingiza fundo**, **Ongeza daraja** na **Punguza daraja** zinabadilisha jinsi mkunjo unavyoelezwa bila kuusogeza (kupunguza kunakataa pale mkunjo ungesogea zaidi ya uvumilivu). **Jenga upya mkunjo** unaupa idadi mpya ya nukta za udhibiti na kusema umesogea kiasi gani.
- **Linganisha mkunjo** unafanya ncha ya mkunjo mmoja ikutane na nyingine kwa G0 (kugusa), G1 (mwelekeo sawa) au G2 (pia mpindo sawa). **Mchanganyiko wa mkunjo** unaongeza mkunjo mpya kati ya ncha mbili.
- **Unganisha mikunjo** na **Gawanya mkunjo**.

## Nyuso

- **Loft** kupitia mikunjo miwili au zaidi, **Uso wa mstari** kati ya miwili, **Extrude curve**, **Revolve curve**.
- **Sweep kwenye reli moja** inabeba wasifu kando ya njia bila kuupinda, na **Sweep kwenye reli mbili** inaweka ncha za wasifu kwenye reli zote mbili. Sweep zinawekwa vizuri: mstari wa hali unasema ilibaki karibu kiasi gani na sweep halisi.
- **Uso kutoka mtandao wa mikunjo** unapita kwenye gridi ya mikunjo (chaguo za kwanza ni wasifu, zilizobaki ni miongozo). **Kiraka kutoka kingo nne** kinajaza mikunjo minne inayokutana kwenye pembe zake.
- **Linganisha uso** unafanya kingo ya uso ikutane na jirani kwa G0, G1 au G2; **Mchanganyiko wa uso** unaongeza uso kati ya kingo mbili.
- **Hamisha uso** (Offset surface), **Ongeza uso** (uso unaendelea jinsi ulivyokuwa unaenda), **Jenga upya uso**, na mafundo na daraja kwa nyuso.

## Kukagua ubora

Jedwali la **Kingo zilizoshirikiwa** linaorodhesha kila kingo ambayo nyuso mbili zinashiriki, pamoja na pengo (mm), pembe kati yake (°) na mruko wa mpindo (1/mm), na kama hiyo inaifanya G0, G1 au G2. Kingo mbaya kuliko ulivyoomba pia iko kwenye **Matatizo** (kitufe cha ⚠ kwenye upau wa programu) pamoja na urekebisho wa **Linganisha**.

**Onyesha kama** › **Mistari ya zebra** na **Mpindo (Gaussian)** zinatoka kwenye uso halisi: mistari inayoendelea bila kukatika kuvuka kingo inamaanisha G1; mistari inayohifadhi upana wake pia inamaanisha G2. Mpindo ni buluu pale uso unapokuwa kama tandiko, nyekundu pale unapokuwa kama kuba, na mweupe pale unapokuwa bapa. **Nukta za udhibiti** zinachora nyavu za udhibiti.

G0–G2 zinapimwa kwenye nukta 33 kwa kila kingo. **G3 na ubora wa "class A" hazipimwi** na hazidaiwi.

## Kupunguza uso

Kikundi cha **Kupunguza** kinakata uso bila kubadilisha umbo lake: uso unabaki na nukta zake zote za udhibiti, na sehemu iliyo ndani ya muhtasari tu ndiyo inayoonyeshwa, kuhesabiwa na kuandikwa. **Punguza kwa mstatili** na **Punguza kwa duara** zinafanya kazi kwa sehemu (0 hadi 1) ya uso kila upande, kwa hiyo hazihitaji kuchaguliwa kwenye mwonekano; **Punguza kwa mkunjo** inachukua mkunjo uliofungwa unaolala kwenye uso (unakadiriwa ndani ya uso, na unakataliwa kwa maneno ukiwa wazi au zaidi ya uvumilivu mbali). Weka alama **Kata shimo** kuondoa ndani ya muhtasari; iache bila alama kubakiza ndani tu. Uso unaweza kuwa na muhtasari mmoja unaobakizwa na mashimo yoyote; muhtasari unaovuka mwingine unakataliwa. **Ondoa kupunguza** inaonyesha uso mzima tena. Kingo zilizokatwa zinafuata muhtasari haswa; Tendua ya paneli inarudisha kupunguza kama hatua nyingine yoyote.

STEP inabeba kupunguza kama mipaka ya uso na IGES kama uso uliopunguzwa (huluki 144); zote mbili zinakisoma tena.

## Vigumu na Boolean

Kikundi cha **Vigumu** kinageuza nyuso kuwa miili iliyofungwa na kuziunganisha. Kigumu hapa ni seti ya nyuso za paneli yenyewe zinazofunga pamoja ujazo; nyuso zake zinabaki NURBS sahihi zenye kupunguzwa kwao.

- **Kigumu cha boksi**, **Kigumu cha silinda** na **Kigumu cha duara** vinatengeneza kimoja kutoka vipimo vilivyoandikwa (kwa mm): boksi la nyuso sita bapa, silinda yenye upande wa mviringo na ncha mbili bapa zilizopunguzwa kwa duara, na duara la uso mmoja uliozungushwa.
- **Kigumu kutoka nyuso** kinaunganisha nyuso ulizotengeneza mwenyewe. Zichague, au usichague chochote ili kutumia kila uso unaoonyeshwa ambao bado hauko kwenye kigumu. Zinashonwa pamoja ndani ya uvumilivu: zisipofunga, hakuna kinachobadilika na paneli inasema kingo ngapi bado ziko wazi na zinapaswa kukutana karibu kiasi gani.
- **Unganisha**, **Ondoa** (kigumu cha pili kinaondolewa kutoka cha kwanza) na **Sehemu ya pamoja** (ni kile tu ambacho vyote viwili vinashiriki) vinachukua vigumu viwili: bofya uso wa kila kimoja kwenye mwonekano, au bonyeza **Chagua** kwenye orodha ya **Vigumu**. Weka alama **Weka vigumu viwili** ili kuviacha kando ya matokeo.

Boolean inabakiza kila uso kwenye uso wake sahihi na kuukata kwa muhtasari mpya wa kupunguza kando ya mpito. Mstari wa matokeo unatoa namba zilizopimwa: pointi za injini ya vigumu zilipaswa kusogea kiasi gani ili zikae kwenye nyuso sahihi (kamwe zaidi ya uvumilivu), pointi za mpito ziko karibu kiasi gani na nyuso zote mbili (kwa kawaida milionisehemu chache za milimita), ujazo, na kama nyuso mpya zinafunga tena zikishonwa upya kutoka nyuso zao sahihi. Ujazo unapimwa kwenye pembetatu ndani ya uvumilivu (0.05 mm isipokuwa uweke nyingine), kwa hiyo ujazo wa duara au silinda unasomeka kidogo chini ya ule halisi: uvumilivu mdogo unakaribia zaidi. Boolean isiyoweza kufanywa vizuri (vigumu havishiriki chochote, au muhtasari ungevuka wenyewe) inakataliwa kwa maneno na haibadilishi chochote. Boolean moja ni hatua moja ya **Tendua** ya paneli.

Kwenye orodha ya **Vigumu**, **Ondoa kwenye kikundi** inaweka nyuso kama nyuso za kawaida; **Pipa** inaondoa kigumu na nyuso zake.

**Ongeza kwenye modeli** (kwenye orodha ya **Vigumu**) inaweka nakala ya kigumu kwenye modeli kama kikundi kimoja kilichofungwa, nyuso zake kama pembetatu ndani ya 0.05 mm, kwa hatua moja ya Tendua ya modeli. Kisha kinafanya kazi na **Unganisha**, **Ondoa** na **Sehemu ya pamoja** za modeli yenyewe, kusukuma-kuvuta na ukaguzi wa uchapishaji wa 3D; kigumu halisi kinabaki kwenye paneli.

## Mviringo na unene

**Mviringo kati ya nyuso** unazungusha kingo ambapo nyuso mbili za kigumu kimoja zinakutana: chagua nyuso mbili (kwenye mwonekano, au kwa **Chagua** kwenye orodha), andika **radius** na, kwa radius inayobadilika kando ya kingo, **radius mwishoni** (0 inabakiza radius moja). Mpira wa radius hiyo unasongezwa kando ya kingo ukigusa nyuso zote mbili; mviringo ni mkunjo halisi wa duara unaouacha kwenye kila nukta, ukishonwa kuwa uso mmoja, na nyuso zote mbili zinapunguzwa pale mpira unapogusa. Kingo ya nje inapoteza nyenzo, pembe ya ndani inapata. Mstari wa matokeo unatoa kilichopimwa: uso wa mviringo uko mbali kiasi gani na mpira unaozunguka kati ya nukta ulizojengea (nukta zinaongezwa hadi iwe ndani ya robo ya uvumilivu), pembe kubwa zaidi kati ya mviringo na kila uso kwenye mistari ya kugusa, na namba zile zile kama Unganisha. Radius isiyofaa (mpira ungeacha uso, au uso unapinda kwa kubana kuliko radius) inakataliwa, ikitaja uso, na hakuna kinachobadilika.

**Zungusha kingo nyingi** inazungusha kingo nyingi kwa hatua moja: chagua nyuso mbili za kingo ya kwanza, kisha nyuso mbili za inayofuata, na kadhalika (uso unaweza kuwa katika jozi kadhaa, kwa mfano uso wa juu wa boksi katika nne kati yake); kingo zote zinapata radius uliyoandika. Kila mzunguko unahesabiwa kwenye kigumu kama kilivyokuwa, kisha zinakatwa moja baada ya nyingine, kwa hiyo mpangilio haujali. Pale kingo mbili zilizozungushwa zinapokutana kwenye pembe ambapo kingo nyingine zinabaki kali, mviringo hizo mbili zinaingia ndani ya nyingine kando ya mkunjo wao wa makutano (mpasuko). Pale kingo tatu za nje zilizozungushwa za nyuso tatu bapa zinazokaribiana kwa pembe za kulia zinapokutana kwa radius moja, pembe ni **kiraka kimoja cha duara** kinachogusa mviringo wote watatu (ondoa alama **Pembe** upate pembe iliyokunjwa badala yake); kingo lazima iwe angalau mara mbili ya radius urefu pale ncha zake zote mbili ni pembe kama hizo. Mstari wa matokeo unasema kingo ngapi zimezungushwa na pembe zilivyotoka. Kingo za ndani pia zinaweza kuzungushwa pamoja, lakini matokeo yasiyofunga tena yanaripotiwa tu (mstari unasema hivyo), kwa hiyo yakague.

**Nenepesha kuwa kigumu** inatoa unene kwa uso: chagua, andika **unene**, na weka alama **Upande mwingine** kuukuza upande mwingine. Uso uliohamishwa unakadiriwa kwa uso asilia na kupimwa dhidi yake (mstari wa matokeo unatoa tofauti kubwa zaidi kutoka unene); kuta zinafuata kila kingo na kila muhtasari wa kupunguza. Ikiwa uso unapinda kwa kubana kuliko unene upande huo, au sehemu nyingine yake iko karibu kuliko unene, inakataliwa, ikitaja uso na mahali, na hakuna kinachobadilika.

## Tendua, faili, STEP na IGES

Paneli ina **Tendua** na **Rudia** yake (hatua moja kwa kila amri). Nyuso zinahifadhiwa kwenye faili la `.modelcraft` pamoja na modeli; hazimo kwenye tendua ya modeli yenyewe, kama nyenzo za faili.

**STEP…** (AP242) na **IGES…** zinahifadhi mikunjo na nyuso kama zilivyo (mikunjo na nyuso za B-spline, bila kugeuzwa pembetatu). Kila uso ni uso wake, pamoja na kupunguza kwake; kigumu kinaandikwa kama ganda moja lililofungwa, kila kingo ikishirikiwa na nyuso zake mbili kama programu nyingine za CAD zinavyotarajia (mstari wa hali unasema vigumu ngapi vilitoka hivyo). Kwenye IGES kigumu hicho hicho ni B-rep moja ya kigumu cha manifold (huluki 186 juu ya ganda lililofungwa 514, nyuso 510, vitanzi 508, orodha moja ya kingo 504 na orodha moja ya vipeo 502); kigumu ambacho nyuso zake hazioani kingo kwa kingo kinaandikwa kama nyuso tofauti, na mstari unasema hivyo. **Ingiza…** inasoma kigumu kama hicho tena kama kigumu, kutoka STEP na kutoka IGES. Inasoma mikunjo na nyuso zilizoandikwa hivi, na seti za viraka vya `.ccnurbs`; vigumu vya STEP vya programu nyingine vinafunguka kwa Faili › Ingiza kama wavu.

## Nyuso kutoka skani (uhandisi nyuma)

Chagua wavu uliochanganuliwa kwenye modeli (kisichochaguliwa kinamaanisha kila kinachoonyeshwa), fungua **Nyuso**, kisha kwenye kikundi cha **Skani** chagua **Weka nyuso kwenye skani**. Zana inatafuta **ndege**, **silinda**, **duara** na **koni** (nyuso halisi ambazo sehemu iliyochongwa imeundwa nazo; kila safu inaonyesha radius au nusu ya pembe iliyoipata), **mviringo** (kingo na pembe zilizozungushwa: silinda au duara dogo linaloguswa na nyuso mbili au zaidi nyingine, likionyeshwa kwa radius yake na nyuso inazounganisha), **mviringo wa pete** (torus: kingo iliyozungushwa pale uso bapa unapokutana na silinda au koni, ikionyeshwa kwa radius yake na radius ya pete yake) na **mviringo unaobadilika** (kingo iliyozungushwa ambayo radius yake inabadilika kando yake, ikionyeshwa kwa radius kila ncha). Inafaa **kiraka kimoja cha umbo huru** kwenye kipande laini kilichopinda kwa upole, na inakata kila uso kwenye muhtasari wa sehemu ya skani ulikotoka, kwa hiyo mashimo na pembe zinabaki. Chaguo ni **uvumilivu** (kwa mm: umbali ambao nukta ya skani inaweza kuwa kutoka ndege au silinda na bado kuwa yake; pia lengo la kiraka cha umbo huru), **kipande kidogo zaidi** (sehemu ya eneo la uso) na **nyuso nyingi zaidi**. Skani na chaguo zile zile daima zinatoa nyuso zile zile.

Matokeo ni jedwali, safu moja kwa kila uso: aina yake, pembetatu ngapi zilitoka, na hitilafu **iliyopimwa kutoka skani hadi uso** (rms, kubwa zaidi, na sehemu ya nukta ndani ya uvumilivu). Nukta zinazopimwa ni vipeo vya skani na katikati ya kila pembetatu. Hitilafu haipimwi upande mwingine (uso hadi skani), kwa hiyo uso unaofika zaidi ya skani hautaonyesha hilo. Dokezo chini ya jedwali pia linasema eneo lipi kiasi lilikuwa dogo mno kufaa. Kwenye mwonekano, nukta za skani zinapakwa rangi kwa **ramani ya mkengeuko** yao: buluu kwenye uso, kijani nusu ya uvumilivu, nyekundu kwenye uvumilivu au zaidi (ondoa alama **Onyesha ramani ya mkengeuko** kuificha). Vipande vinavyokunjwa vyenyewe (bomba lililofungwa lililofaa kwa viraka vya umbo huru, kwa mfano) vinaorodheshwa kama visivyofaa, havilazimishwi kuwa uso mmoja.

**Shona nyuso kuwa kigumu** inashona kila uso unaoonyeshwa usio kwenye kigumu kuwa kigumu kimoja kilichofungwa. Nyuso za skani zinakutana tu ndani ya hitilafu ya skani yenyewe, kwa hiyo inajaribu umbali mdogo kabisa wa kuunganisha unaofunga (kamwe zaidi ya **umbali wa kushona** uliouweka) na inakataa kwa maneno pale nyuso zisipofunga. Haziziba pengo kamwe. Boksi lenye kingo zilizozungushwa linashonwa pale mviringo wake ulipopatikana kama nyuso zao wenyewe; umbali wa kuunganisha uliofunga unaonekana kwenye matokeo. Kigumu kinafanya kazi kisha na Unganisha, Ondoa, Sehemu ya pamoja na **Ongeza kwenye modeli**.

Hayafanyi: **mviringo wa pete** (torus) unatafutwa tu kuzunguka mhimili wa silinda au koni iliyopatikana tayari, na **mviringo unaobadilika** tu kando ya kingo iliyonyooka kiasi (sehemu zake zinakatwa mraba kwa mwelekeo mmoja); mahali pengine zinatoka kama viraka vya umbo huru pale zinapokuwa laini vya kutosha, na zinaachwa vinginevyo; ndege, koni na mviringo vinatafutwa kwa sampuli nasibu, kwa hiyo kimoja kidogo sana (pembetatu chache) kinaweza kukosekana; ramani ya mkengeuko inaonyesha umbali kutoka skani hadi nyuso, si kinyume chake; skani kubwa mno (zaidi ya pembetatu 300,000) zinakataliwa hapa. Nyuso za silinda kamili zinakatwa kuzunguka mashimo, na mshono unawekwa pale ambapo hakuna shimo. Kagua kila uso dhidi ya skani yako kabla ya kutegemea.

## Bado hakijajengwa

Kuzungusha kingo zinazokutana kwenye pembe ya nyuso zilizopinda au zenye radius tofauti (mchanganyiko wa vertex), mviringo kati ya nyuso zisizokutana, mviringo wa ndani unaoishia kwenye uso ulioinama au uliopinda, na Boolean na mviringo zinazohesabiwa kwenye nyuso zisizo na pembetatu (hapa injini ya vigumu inafanya kazi kwenye pembetatu ndani ya uvumilivu, na kila pointi kisha inarudishwa kwenye nyuso sahihi).
