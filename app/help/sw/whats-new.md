---
title: Kipya katika 0.9
summary: Hatua ya uchapishaji yenye kikata-vipande chetu na kutuma kwa USB, Klipper, OctoPrint na PrusaLink, ukataji wa resini na programu-jalizi za faili, mtiririko wa nyenzo, programu-jalizi za pacha dijitali na sakafu ya kiwanda, kingo za NURBS, kufanya unene na kulinganisha skani, AR eneoni na mbinu kumi za tao.
keywords: kipya, nini kipya, maelezo ya toleo, orodha ya mabadiliko, 0.9, hatua ya uchapishaji, uchapishaji wa 3d, tuma kwa printa ya 3d, kikata-vipande, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resini, uchapishaji wa resini, goo, sl1, ctb, anycubic, jaribio la mwangaza, mtiririko wa nyenzo, pacha dijitali, sakafu ya kiwanda, plc, mkanda wa kusafirisha, nurbs, kingo, kufanya unene, kulinganisha skani, ar, eneoni, mbinu za tao, vitengo, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, injini ya render, injini, fungua katika, usd, gltf, unreal, injini ya programu-jalizi, nyuso, loft, sweep, mwendelezo, g0, g1, g2, zebra, step, iges, eneo la tukio, eneo, hali ya hewa, wakati wa siku, msimu, msaidizi, nyenzo kutoka picha, picha, picha ya mchoro wa awali, samani, samani chumbani, mteremko, kata iliyoinama, gawanya, ukaguzi wa uchapishaji, matatizo, gridi ya sifa, taa, lugha, vifaa vya kuingiza, safu za upau wa zana, dwg, moja kwa moja
from: 169048a2
---

Hii ndiyo mabadiliko yaliyofanywa katika ModelCraft 0.9, ikilinganishwa na 0.8.1. ModelCraft sasa inafika kwenye printa na sakafu ya kiwanda: unaweza kuweka vitu kwenye kitanda cha uchapishaji na kuvituma bila kuvisafirisha, kukata kwa filamenti au resini, na kupanga mstari wa kushughulikia nyenzo. Hii ni CadCraft Studio 0.9 na programu zake nane; vipengele vingi vipya hapa chini ni programu-jalizi.

## Mpya

### Uchapishaji wa 3D

- **Hatua ya uchapishaji.** Bofya {{ui:Hatua ya uchapishaji}} kwenye upau wa zana. Ongeza vipengee vya Maktaba kwenye kitanda cha printa, vipange, angalia tabaka zilizokatwa kisha bonyeza {{ui:Tuma kwa printa ya 3D}}, bila STL ya kusafirisha. Ni sehemu ya programu-jalizi ya 3D Print, ambayo imewashwa kwa chaguo-msingi na inaweza kuondolewa kama programu-jalizi nyingine yoyote. Tazama [Weka vitu kwenye kitanda cha uchapishaji na uvitume kwa printa](topic:print-stage).
- **Kikata-vipande chetu cha filamenti.** {{ui:CadCraft basic (included, fastest)}} ndicho kikata-vipande kwenye orodha ya **Slicer** ya kadi: kuta, ngozi, kujaza, misaada na skirt, kikifanya kazi kwenye kichakataji cha pembeni ili ukurasa uendelee kutumika. {{ui:Preview layers}} pamoja na kitelezi cha **Layer** huonyesha tabaka kabla ya kutuma. Wasifu wa printa kama mitindo ya Ender-3 na Prusa MK4 hubeba G-code yao ya kuanzia.
- **Kutuma.** Kupitia USB (Chrome au Edge kwenye kompyuta, huku ukurasa ukiwa wazi), au kwa Klipper (Moonraker), OctoPrint au PrusaLink kwenye mtandao wako. Hakuna kinachounganishwa wala kutumwa bila kubofya, na kutuma huuliza kwanza.
- **Vikata-vipande vingine.** Kiri:Moto, PrusaSlicer na OrcaSlicer ni programu-jalizi zao wenyewe, zimezimwa kwa chaguo-msingi; ziongeze kutoka kwenye kadi au kutoka {{ui:Mipangilio}} › {{ui:Programu-jalizi}}. PrusaSlicer na OrcaSlicer hutumia nakala yako iliyosakinishwa ya CadCraft Studio. Programu-jalizi ya printa za Bambu Lab hukata kwa OrcaSlicer yako pamoja na presets zake za P2S, na inahitaji Studio kwenye kompyuta.
- **Uchapishaji wa resini.** Programu-jalizi za resini (zimezimwa kwa chaguo-msingi) hutengeneza picha za tabaka kwa skrini ya printa yako, zikiwa na uchimbaji ndani na mashimo ya hewa, raft na misaada, onyesho la kukagua tabaka, pamoja na muda, resini na gharama. Programu-jalizi za miundo ya faili huandika Elegoo GOO, SL1, Chitubox (CBDDLP na CTB 2 hadi 5) na Anycubic (PWMX na PWS). Jaribio la mwangaza wa resini hutengeneza ngazi ya mionekano mitano. Tazama [Kata kwa printa ya resini](topic:resin-printing).
- **Bila mabadiliko.** {{ui:Safirisha}} › {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}}, zana za uchapishaji na Gawanya kwa uchapishaji zinafanya kazi kama ilivyokuwa kwenye 0.8. Tazama [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d).

### Mtiririko wa nyenzo, Pacha dijitali na Sakafu ya kiwanda

Hizi tatu ni programu-jalizi, zimezimwa hadi uziwashe kwenye {{ui:Mipangilio}} › {{ui:Programu-jalizi}}, na kila moja ina msaada wake yenyewe ikishawashwa.

- **Mtiririko wa nyenzo.** Paneli inayoitwa Mtiririko wa nyenzo hupanga mikanda ya kusafirisha, vituo, bafa na njia za AGV kwenye mwonekano wa 3D, huendesha uigaji wenye mbegu, huuchezesha tena, na kuonyesha uzalishaji, muda wa kusubiri na foleni, huku matokeo yakihifadhiwa kama CSV. Oda zinaweza kutoka kwenye faili la CSV. Seli za roboti zinaweza kukaguliwa na kusafirishwa. Kiungo cha PLC kina hali laini na hali halisi juu ya Modbus TCP, ambayo inafanya kazi tu katika CadCraft Studio.
- **Pacha dijitali.** Husoma mpangilio wa Mtiririko wa nyenzo na kuendesha PLC laini juu yake, pamoja na hitilafu unazoweza kulazimisha, majaribio ya hifadhi, ulinganisho wa mipangilio na orodha ya vifaa.
- **Sakafu ya kiwanda.** Hugeuza vituo kuwa mashine na seli, huvisoma moja kwa moja au kutoka kwa kiigaji, na huweka foleni ya kazi pamoja na OEE rahisi. Inasoma tu: toleo hili haliwezi kuandika kwenye mashine au PLC.

### Nyuso, modeli na michoro

- **Kingo, kufanya unene na shughuli za Boolean kwenye NURBS.** Paneli ya {{ui:Nyuso}} ina {{ui:Kingo kati ya nyuso}}, {{ui:Kingo kingo kadhaa}}, {{ui:Fanya unene kuwa kigumu}} na Muungano, Ondoa na Makutano, kila moja ikiwa na mkengeuko wake uliopimwa. Tazama [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Kulinganisha nyuso na skani.** Chagua mesh iliyoskaniwa kisha tumia {{ui:Toshea nyuso kwenye skani}} kwenye kundi la **Scan**, kisha {{ui:Shona nyuso kuwa solidi}}. Ni ulinganisho wa kwanza tu, si kifurushi kamili cha urejeshaji wa uhandisi.
- **Kiungo cha moja kwa moja kutoka kwa mbunifu wa .3dm.** Ni njia moja, kutoka Rhino 8 au Grasshopper, na inahitaji CadCraft Studio kwenye kompyuta hiyo hiyo. Tazama [Weka modeli ya .3dm hai](topic:live-3dm-link).
- **Ona modeli eneoni.** {{ui:Mwonekano eneoni (AR, simu)}} kwenye menyu ya {{ui:Mionekano}} hufanya kazi kwenye simu ya Android yenye Chrome. Tazama [Ona modeli eneoni kwa simu ya Android (AR)](topic:ar-on-site).
- **Mbinu za tao.** Orodha kunjuzi ya {{ui:Mbinu za tao}} inatoa njia kumi za kuchora tao, ikiwemo {{ui:Pointi 3}} na {{ui:Mwanzo, Katikati, Mwisho}}.
- **Vitengo zaidi.** Uzito (kg, lb, t, ton) na halijoto (digrii C, F, K na R) vinatambuliwa pale unapoandika thamani zenye vitengo.

## Katika kila programu

- **Vidokezo vya kuelea.** Maandishi yanayoonekana unapoweka kiashiria juu ya vitufe na lebo zilizokatwa ni Bootstrap tooltip.
- **Kidokezo cha kuanza kinachoweza kufungwa.** Kadi ya kidokezo kwenye eneo tupu la mchoro ina kitufe kidogo cha kufunga x. Inabaki imefungwa, na palette ya amri inaweza kukionyesha tena.
- **Safu za vichupo vinavyosogea.** Safu ya vichupo vya paneli isipoweza kutoshea hujisogeza badala ya kukatwa.
- **Majina ya vichupo.** Hati ikiwa wazi, kichupo cha kivinjari huanza na jina la hati, kisha ModelCraft na CadCraft. Nukta huja kwanza wakati hati haijahifadhiwa.
- **Mpangilio.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › Mpangilio una mipangilio kwenye orodha kunjuzi, yenye chaguo la kutumia mpangilio kwa programu hii pekee na kitufe cha kuweka upya mpangilio.
- **Lugha.** Orodha ya lugha katika Mipangilio inafuata faili za lugha zilizomo kwenye toleo. Lugha nyingine zaidi ya Kiingereza ni rasimu za mashine.
- **Moja kwa moja na Maktaba.** Live TeamWork inaonyesha vishale vya moja kwa moja na majina, na mikusanyiko ya Maktaba inatoa kila programu mkusanyiko wa chaguo-msingi.

## Imerekebishwa

- {{ui:Cheza}} hugeuka kuwa {{ui:Simamisha}} wakati uhuishaji unacheza, na {{key:Space}} hucheza na kusimamisha wakati ratiba iko wazi.
- Picha tuli ya render hurudi kwenye WebGL kadi ya michoro isipoweza kuanzisha path tracer. Mwonekano wa render ya moja kwa moja unaweza bado kuonyesha hitilafu; hili halikukaguliwa kwenye kompyuta ya Windows yenye dereva huyo.
- Hali halisi ya Mtiririko wa nyenzo inaunganishwa tena baada ya kiungo kuisha kwa majibu ya hitilafu za PLC.

## Mipaka ya ukweli

- Hakuna kitu kilichochapishwa kwenye printa halisi: si filamenti, si resini, wala kupitia Bambu Connect. Faili za resini zilisomwa tena na visomaji vya CadCraft pekee.
- Pacha dijitali na Sakafu ya kiwanda zilijaribiwa dhidi ya viigaji na majibu yanayojulikana pekee, bila PLC halisi, mstari wala itifaki halisi. Ni visaidizi vya ukaguzi, si uthibitisho wa usalama. Fizikia inahusu masanduku pekee, hadi mizigo minane.
- Kiungo cha Rhino na Grasshopper hakijawahi kuendeshwa kwenye programu halisi.
- Lugha zisizo za Kiingereza ni rasimu za mashine.

## Kabla: 0.8 na 0.8.1

Hii ndiyo mabadiliko yaliyofanywa katika ModelCraft 0.8 (2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. Mazungumzo ya {{ui:Tengeneza picha…}} sasa yanaweza kutuma eneo kwa programu nyingine, paneli ya Nyuso hutengeneza nyuso huru laini, na msaidizi wa AI unaounganisha anaweza kuweka eneo zima kutoka sentensi moja.

### Mpya

**Render**

- **Chaguo la Injini.** {{ui:Tengeneza picha…}} ina orodha ya **Injini** juu ya Hali. Injini zetu mbili, Fast na Path tracer, ndizo chaguo-msingi na zinafanya kazi kila mahali. Chaguo nyingine huhifadhi eneo kama kifurushi (modeli kama faili la USD, pamoja na faili la mipangilio lenye thamani kamili za nyenzo, taa zilizowashwa, jua, anga, mwangaza na kamera) ili kulipeleka kwenye programu nyingine. Picha iliyochorwa na programu nyingine inaonyesha programu na toleo lililoitengeneza. Tazama [Chagua programu inayochora picha](topic:render-engines).
- **Fungua katika programu nyingine.** Orodha ya Injini inaweza kuhifadhi eneo kama faili la USD, faili la glTF (`.glb`) au folda ya mradi wa Unreal (`.zip`), kwenye kivinjari na katika CadCraft Studio. Katika Studio pia inaweza kuanzisha usdview au programu ya kompyuta kwa faili hilo. Tazama [Fungua eneo kwenye programu nyingine](topic:render-open-in).
- **Tuma kwa injini ya mchezo kutoka Studio.** Studio huandika eneo kwenye mradi wa Unreal Engine na kulisawazisha kila mara inapotuma, kwa njia moja tu. Mabadiliko yako yanaishi kwenye tabaka ambalo CadCraft haliandiki kamwe. Tazama [Tuma eneo kwa injini ya mchezo](topic:render-unreal).
- **Injini kutoka kwa programu-jalizi.** Programu-jalizi inaweza kuongeza injini kwenye orodha. Ile iliyoandikwa kwa JavaScript huchora kwenye kivinjari na Studio; ile inayoendesha programu inahitaji ruhusa yako kwenye Studio. Tazama [Chora picha kwa programu nyingine](topic:render-other-program) na [Ongeza injini ya render kwa programu-jalizi](topic:render-engine-addons).
- **Eleza eneo.** Mwambie msaidizi wako aliyeunganishwa "machweo, mvua nyepesi, miti ya vuli, watu kwenye uwanja" na ModelCraft italiweka katika hatua moja: jua linahamia tarehe na saa ili vivuli vifuate, anga linabadilika, nyuso zenye unyevu zinaonekana, na miti na watu wanawekwa kama vitu halisi kwenye lebo unazoweza kuficha, kuhamisha au kufuta. Wakati wa siku, tarehe au msimu, na hali ya hewa (safi, mawingu mazito, ukungu, mvua nyepesi, mvua, dhoruba) pia hufanya kazi peke yake, na ombi la baadaye hubadilisha eneo lile lile. Ukungu unaonekana kwenye picha ya ubora wa juu kwenye kadi ya michoro; injini nyingine zinaonyesha anga, mwanga na nyuso zenye unyevu. Mvua haichorwi kama mistari inayoanguka.

**Nyenzo**

- **Nyenzo kutoka picha moja.** Mpe ModelCraft picha ya uso (ukuta, sakafu, jiwe) nayo itatengeneza nyenzo ya vigae: mwanga kwenye picha unasawazishwa, kingo zinafanywa kujiunga, na ramani ya rangi, ramani ya ukali na ramani ya kawaida zinakokotolewa kutoka kwenye picha. Ni usindikaji wa kawaida wa picha yako mwenyewe, bila modeli iliyofunzwa. Ukali ni makadirio. Picha rahisi, ya mraba na iliyonyooka mbele hutoa kigae bora zaidi; mchoro mzito kama matofali unaweza kuonyesha kivuli laini mahali ambapo kiungo kimechanganywa.

**Nyuso**

- **Nyuso huru.** Paneli ya {{ui:Nyuso}} hutengeneza mikunjo ya NURBS na nyuso zisizokatwa: mikunjo inayopita kwenye nukta, loft, ruled, extrude, revolve, sweeps kwenye reli moja au mbili, nyuso kutoka mtandao wa mikunjo, viraka kutoka kingo nne, match na blend. Kila kingo inayoshirikiwa hupimwa kama G0, G1 au G2 (pengo, pembe, mruko wa mkunjo) kwenye nyuso halisi, na kingo mbaya kuliko ulivyoomba huonekana kwenye paneli ya Matatizo pamoja na marekebisho ya **Match**. Mistari ya zebra na rangi za mkunjo zinachorwa kutoka kwenye nyuso halisi. Faili za STEP na IGES hutoka na kuingia. Tazama [Nyuso huru (NURBS)](topic:nurbs-surfaces).

**Eneo na vyumba**

- **Picha ya mchoro wa awali kwenye ardhi.** {{ui:Faili}} › {{ui:Leta picha ya mchoro wa awali…}} hugeuza picha ya simu ya mchoro wa mkono kuwa kingo ardhini kwa kipimo unachotaja: kikundi kimoja, chenye lebo kwa kila rangi ya kalamu. Karatasi inatambuliwa na kunyooshwa kwenye kompyuta yako, na hakuna kitu kinachotumwa popote. Tazama [Modeli kwenye ramani ya eneo](topic:site-plan).
- **Samani chumbani.** Chagua sakafu kisha tumia {{ui:Panga}} › {{ui:Weka samani chumbani…}}. Samani za chumba cha kulala, sebule, chumba cha kulia, jiko, bafu au ofisi huwekwa kwa kanuni, dhidi ya kuta na mbali na milango na madirisha, kwenye kikundi kimoja unachoweza kukiondoa kwa hatua moja. Ni mpangilio wa kawaida wa kukagua, si muundo. Tazama [Maktaba ya kuanzia](topic:starter).

**Uchapishaji wa 3D**

- **Vikato vilivyoinama.** Gawanya kwa uchapishaji inaweza kuinamisha vikato vyake kwa hadi digrii 60, jambo linalopa vipande eneo kubwa zaidi la kuunganisha. Viunganishi husimama mraba kwa kata. Tazama [Gawanya modeli kwa uchapishaji](topic:print-split).
- **Ukaguzi wa uchapishaji katika Matatizo.** Matokeo ya ukaguzi wa uchapishaji wa 3D yanaonekana kwenye paneli ya Matatizo na alama kwenye modeli, na Rekebisha inayarekebisha kutoka hapo. Tazama [Misaada, unene wa kuta, uchimbaji ndani na urekebishaji](topic:print-tools).

**Katika kila programu**

- **Lugha.** Msaada na programu zinapatikana kwa lugha 54. Kumi ni mpya: Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki. Lugha zisizo Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili asome, na mada za msaada zinaweza kubaki kwa Kiingereza.
- **Vifaa vya kuingiza.** Padi ya kugusa, kalamu, kipanya cha 3D, kidhibiti cha mchezo na vidhibiti vya MIDI vinaweza kuendesha programu, kwa zote au kwa moja.
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › Safu za upau wa zana huweka Kufunga (kama awali), safu 2 au safu 1. Upau usioweza kutoshea husogea pembeni badala ya kuchukua nafasi ya mchoro. Kufunga hubaki chaguo-msingi.
- **Gridi ya sifa.** Sehemu za taa za ModelCraft zinatumia gridi ya pamoja: makundi yanayokunjika, safu za lebo na thamani, na msongamano wa Compact. Hesabu iliyoandikwa kama `2*450` inaendelea kufanya kazi.
- **Matatizo.** Paneli ya Matatizo (kitufe cha onyo kwenye upau wa programu) inashirikiwa na programu zote. Katika ModelCraft inashikilia ukaguzi wa uchapishaji na maonyo ya mwendelezo wa nyuso.
- **Moja kwa moja.** Kikao cha Live TeamWork kinaonyesha nani yuko wapi. Tazama [Fanya kazi pamoja kwa Live TeamWork](topic:work-live).
- **Programu-jalizi.** Programu-jalizi zinaweza kuongeza injini za render, kama ilivyoelezwa hapo juu.
- **Unganisha AI yako.** Mkataba wa zana na ukaguzi wa programu nane zimepita, zikiwa na zana 454 kwa jumla. Muunganisho wa kubofya mara moja ndani ya Studio, kiunganishi kilichohifadhiwa kwa visaidizi vya kivinjari, ufunguo wako mwenyewe ndani ya Studio na kifurushi kilichochapishwa bado hayajaahidiwa. Programu hazina AI yao wenyewe. Tazama [Tumia ModelCraft pamoja na visaidizi vya AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Sehemu ya madarasa ya DWG.** Sehemu ya madarasa ya faili la DWG ilisomwa kama aina isiyo sahihi, jambo lililoweza kuharibu faili wakati wa kuleta. Sasa inasomwa vizuri, katika ModelCraft na katika programu nyingine zinazosoma DWG.
- **Tablet kwa wima.** Nafasi ya ziada ya gridi inaenda kwenye turubai, na mpangilio wa karatasi huanza pale upana ni pikseli 760 au chini. Laha ya mitindo ya ModelCraft pia ina mabadiliko haya.
- **Lugha katika Studio.** CadCraft Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yakiwa yanaendesha; hapo awali yalikuwa Kiingereza pekee. Hili halijajaribiwa kwenye kila jukwaa bado: tuambie kama lugha haibadiliki.

### Bado katika toleo hili

- **Haijasainiwa kwa msimbo.** Windows inaweza kuonyesha SmartScreen: chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, bofya kulia na uchague {{ui:Fungua}}. Matoleo ya duka yamesimamishwa, na muundo wa iPad na iPhone haukujengwa upya kwa 0.8.1.
- Programu nyingine kuchora picha bila programu-jalizi ya injini ya render, kamera za panorama au stereo, na picha ya anga kupitia programu nyingine, pamoja na plugin inayofungua jukwaa la Unreal bado hazipo. Faili zinaandikwa; plugin haijatolewa na haijaendeshwa kwenye Unreal.
- Nyuso huru: G3 na class A hazipimwi wala kudaiwa, na kukata na miili imara vitakuja baadaye.
- Picha kutoka programu nyingine hazifanani pixel kwa pixel na zetu: kamera, jua, taa na mwangaza pekee vinafanana.
- Marekebisho ya 0.8.1 ya kubadilisha lugha katika Studio hayajajaribiwa kwenye kila jukwaa.

Kila kitu kingine kiko katika [Bado hakijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, tazama [Kipya katika 0.7](topic:whats-new-0-7).
