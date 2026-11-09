---
title: Kilicho kipya katika 0.8 na 0.8.1
summary: Chaguo la injini ya kutoa picha pamoja na faili za programu nyingine, nyuso huru zenye mwendelezo uliopimwa, eneo unalolieleza kwa msaidizi wako, nyenzo iliyotengenezwa kutoka picha moja, picha ya mchoro wa awali kuwekwa ardhini, vyumba vilivyowekwa samani, mikato ya mteremko kwa uchapishaji wa 3D, na ukaguzi wa uchapishaji kwenye paneli ya Matatizo.
keywords: kilicho kipya, nini kipya, vidokezo vya toleo, orodha ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, injini ya kutoa picha, injini, fungua katika, usd, gltf, unreal, injini ya nyongeza, nurbs, nyuso, loft, sweep, mwendelezo, g0, g1, g2, zebra, step, iges, eleza eneo, eneo, hali ya hewa, wakati wa siku, msimu, msaidizi, nyenzo kutoka picha, picha, picha ya mchoro wa awali, samani, weka samani chumbani, mkato wa mteremko, gawanya, ukaguzi wa uchapishaji, matatizo, gridi ya sifa, taa, lugha, vifaa vya kuingiza, safu za upau wa zana, dwg, moja kwa moja
from: e4989b17
---

Hiki ndicho kilichobadilika katika ModelCraft 0.8 (2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. Kisanduku cha mazungumzo cha {{ui:Tengeneza picha…}} sasa kinaweza kutuma eneo kwa programu nyingine, paneli ya {{ui:Nyuso}} inatengeneza nyuso laini huru, na msaidizi wako aliyeunganishwa anaweza kuweka eneo zima kwa sentensi moja.

## Mpya

### Kutoa picha

- **Chaguo la injini.** {{ui:Tengeneza picha…}} ina orodha ya **Injini** juu ya **Hali**. Injini zetu mbili, Haraka na Path tracer, ndizo chaguo-msingi na zinafanya kazi kila mahali. Chaguo nyingine huhifadhi eneo kama kifurushi (modeli kama faili ya USD, pamoja na faili ya mipangilio yenye thamani kamili za nyenzo, taa zilizowashwa, jua, anga, mwangaza na kamera) ili upeleke kwa programu nyingine. Picha iliyochorwa na programu nyingine inaonyesha ni programu gani na toleo gani lilioitengeneza. Tazama [Chagua programu inayochora picha](topic:render-engines).
- **Fungua katika programu nyingine.** Orodha ya Injini inaweza kuhifadhi eneo kama faili ya USD, faili ya glTF (`.glb`) au folda ya mradi wa Unreal (`.zip`), kwenye kivinjari na kwenye CadCraft Studio. Kwenye Studio pia inaweza kuanzisha usdview au programu ya kompyuta kwa faili hiyo. Tazama [Fungua eneo kwenye programu nyingine](topic:render-open-in).
- **Tuma kwa injini ya mchezo kutoka Studio.** Studio huandika eneo kwenye mradi wa Unreal Engine na kuulinganisha kila unapotuma, kwa njia moja tu. Mabadiliko yako yanaishi kwenye tabaka ambalo CadCraft haliandiki kamwe. Tazama [Tuma eneo kwa injini ya mchezo](topic:render-unreal).
- **Injini kutoka kwa nyongeza.** Nyongeza inaweza kuongeza injini kwenye orodha. Iliyoandikwa kwa JavaScript huchora kwenye kivinjari na kwenye Studio; ile inayoendesha programu inahitaji idhini yako kwenye Studio. Tazama [Chora picha kwa programu nyingine](topic:render-other-program) na [Ongeza injini ya kutoa picha kwa nyongeza](topic:render-engine-addons).
- **Eleza eneo.** Mwambie msaidizi wako aliyeunganishwa "machweo, mvua nyepesi, miti ya vuli, watu kwenye uwanja" na ModelCraft italiweka sawa kwa hatua moja: jua linahamia tarehe na saa ili vivuli vifuate, anga linabadilika, nyuso zenye unyevu zinaonekana, na miti na watu huwekwa kama vitu halisi vyenye lebo unazoweza kuficha, kuhamisha au kufuta. Wakati wa siku, tarehe au msimu, na hali ya hewa (angavu, mawingu mazito, ukungu, mvua nyepesi, mvua, dhoruba) pia vinafanya kazi peke yake, na ombi la baadaye linabadilisha eneo lile lile. Ukungu unaonekana kwenye picha ya ubora wa juu inayotumia kadi ya michoro; injini nyingine zinaonyesha anga, mwanga na nyuso zenye unyevu. Mvua haichorwi kama michirizi inayoanguka.

### Nyenzo

- **Nyenzo kutoka picha moja.** Mpe ModelCraft picha ya uso (ukuta, sakafu, jiwe) nayo itatengeneza nyenzo ya kuweka vigae: mwanga kwenye picha unanyooshwa, kingo zinafanywa kuungana, na ramani ya rangi, ramani ya ukali na ramani ya kawaida zinakokotolewa kutoka kwenye picha. Ni usindikaji wa kawaida wa picha yako mwenyewe, bila modeli iliyofunzwa. Ukali ni makadirio. Picha tambarare, ya mraba, iliyonyooka mbele hutoa kigae bora; mchoro mzito kama matofali unaweza kuonyesha kivuli hafifu pale ambapo mshono umechanganywa.

### Nyuso

- **Nyuso huru.** Paneli ya {{ui:Nyuso}} inatengeneza mikunjo ya NURBS na nyuso zisizokatwa: mikunjo inayopita kwenye nukta, loft, ruled, extrude, revolve, sweep kwenye reli moja au mbili, nyuso kutoka mtandao wa mikunjo, viraka kutoka kingo nne, match na blend. Kila kingo inayoshirikiwa inapimwa kama G0, G1 au G2 (pengo, pembe, mruko wa mkunjo) kwenye nyuso halisi, na kingo mbovu kuliko ulivyoomba inaonekana kwenye paneli ya Matatizo ikiwa na marekebisho ya **Match**. Mistari ya zebra na rangi za mkunjo zinachorwa kutoka kwenye nyuso halisi. Faili za STEP na IGES zinatoka na kuingia. Tazama [Nyuso huru (NURBS)](topic:nurbs-surfaces).

### Eneo na vyumba

- **Picha ya mchoro wa awali kwenye ardhi.** {{ui:Faili}} › {{ui:Leta picha ya mchoro wa awali…}} hugeuza picha ya simu ya mchoro wa mkono kuwa mistari ardhini kwa kipimo unachotaja: kundi moja, lenye lebo kwa kila rangi ya kalamu. Karatasi inatambuliwa na kunyooshwa kwenye kompyuta yako, na hakuna kitu kinachotumwa popote. Tazama [Modeli kwenye mpango wa eneo](topic:site-plan).
- **Weka samani chumbani.** Chagua sakafu kisha tumia {{ui:Panga}} › {{ui:Weka samani chumbani…}}. Samani ya chumba cha kulala, sebule, chumba cha kulia, jikoni, bafuni au ofisini inawekwa kwa kanuni, dhidi ya kuta na mbali na milango na madirisha, kwenye kundi moja unaloweza kuliondoa kwa hatua moja. Ni mpangilio wa kawaida wa kupitia, si usanifu. Tazama [Maktaba ya kuanzia](topic:starter).

### Uchapishaji wa 3D

- **Mikato ya mteremko.** Gawanya kwa uchapishaji inaweza kuteremsha mikato yake hadi digrii 60, jambo linalozipa vipande eneo kubwa zaidi la kubandika. Viunganishi vinasimama wima kwenye mkato. Tazama [Gawanya modeli kwa uchapishaji](topic:print-split).
- **Ukaguzi wa uchapishaji kwenye Matatizo.** Matokeo ya ukaguzi wa uchapishaji wa 3D yanaonekana kwenye paneli ya Matatizo pamoja na alama kwenye modeli, na Rekebisha inayarekebisha kutoka hapo. Tazama [Vitegemezi, unene wa ukuta, kuchimba ndani na kurekebisha](topic:print-tools).

### Katika kila programu

- **Lugha.** Msaada na programu zinapatikana kwa lugha 54. Kumi ni mpya: Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki. Lugha zisizo za Kiingereza ni rasimu za mashine hadi mzawa azisome, na mada za msaada zinaweza kubaki kwa Kiingereza.
- **Vifaa vya kuingiza.** Padi ya kugusa, kalamu, kipanya cha 3D, kidhibiti cha mchezo na vidhibiti vya MIDI vinaweza kuendesha programu, zote au moja.
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › Safu za upau wa zana huweka Kukunja (kama awali), safu 2 au safu 1. Upau usiotoshea unasogea kando badala ya kuchukua nafasi kutoka kwenye mchoro. Kukunja kunabaki kuwa chaguo-msingi.
- **Gridi ya sifa.** Sehemu za taa za ModelCraft zinatumia gridi ya pamoja: vikundi vinavyoweza kukunjwa, safu za lebo na thamani, na msongamano mdogo (Compact). Hesabu iliyoandikwa kama `2*450` inaendelea kufanya kazi.
- **Matatizo.** Paneli ya Matatizo (kitufe cha onyo kwenye upau wa programu) inashirikiwa na programu zote. Katika ModelCraft inashikilia ukaguzi wa uchapishaji na maonyo ya mwendelezo wa nyuso.
- **Live.** Kikao cha Live TeamWork kinaonyesha nani yuko wapi. Tazama [Modeli pamoja kwa Live TeamWork](topic:work-live).
- **Nyongeza.** Nyongeza zinaweza kuongeza injini za kutoa picha, kama ilivyoelezwa hapo juu.
- **Unganisha AI yako.** Mkataba wa zana na ukaguzi wa programu nane umepita, zana 454 kwa jumla. Muunganisho wa kubofya mara moja ndani ya Studio, kiunganishi kinachohudumiwa kwa visaidizi vya kivinjari, ufunguo wako mwenyewe ndani ya Studio na kifurushi kilichochapishwa bado havijaahidiwa. Programu hazina AI yao wenyewe. Tazama [Tumia ModelCraft pamoja na visaidizi vya AI](topic:use-with-ai-assistants).

## Imerekebishwa katika 0.8.1

- **Sehemu ya madarasa ya DWG.** Sehemu ya madarasa ya faili ya DWG ilisomwa kama aina isiyo sahihi, jambo lililoweza kuharibu faili wakati wa kuleta. Sasa inasomwa kwa usahihi, katika ModelCraft na katika programu nyingine zinazosoma DWG.
- **Tablet zikiwa wima.** Nafasi ya gridi iliyobaki inaenda kwenye turubai, na mpangilio wa karatasi unaanza kwa upana wa pikseli 760 au chini. Laha ya mitindo ya ModelCraft pia ina mabadiliko haya.
- **Lugha kwenye Studio.** CadCraft Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yanapoendeshwa; awali yalikuwa Kiingereza pekee. Hili bado halijajaribiwa kwenye kila jukwaa: tuambie kama lugha haibadiliki.

## Bado katika toleo hili

- **Haijasainiwa kwa msimbo.** Windows inaweza kuonyesha SmartScreen: chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, bofya kulia na uchague {{ui:Fungua}}. Matoleo ya Store yamesimamishwa, na toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- Programu nyingine kuchora picha bila nyongeza ya injini ya kutoa picha, kamera za panorama au stereo, na picha ya anga kupitia programu nyingine, pamoja na programu-jalizi inayofungua hatua ya Unreal, bado havipo. Faili zinaandikwa; programu-jalizi haijatolewa na haijaendeshwa kwenye Unreal.
- Nyuso huru: G3 na daraja A havipimwi wala kudaiwa, na kukata kingo pamoja na miili imara vitakuja baadaye.
- Picha kutoka programu nyingine hazifanani pikseli kwa pikseli na zetu: kamera, jua, taa na mwangaza pekee ndivyo vinavyolingana.
- Marekebisho ya 0.8.1 ya kubadilisha lugha kwenye Studio hayajajaribiwa kwenye kila jukwaa.

Kila kitu kingine kiko katika [Bado hakijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, tazama [Kilicho kipya katika 0.7](topic:whats-new-0-7).
