---
title: Mpya katika 0.9 (ya awali)
summary: Hatua ya uchapishaji yenye kikata chetu na kutuma kupitia USB, Klipper, OctoPrint na PrusaLink, ukataji wa resini na programu-jalizi za muundo wa faili, mtiririko wa nyenzo, programu-jalizi za pacha dijitali na sakafu ya kiwanda, kingo za NURBS, kunenepesha na kutoshea skani, AR kwenye eneo na mbinu kumi za tao.
keywords: mpya katika 0.9, toleo la awali, mpya katika, dokezo la toleo, kumbukumbu ya mabadiliko, 0.9, hatua ya uchapishaji, uchapishaji wa 3d, tuma kwa printa ya 3d, kikata, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resini, uchapishaji wa resini, goo, sl1, ctb, anycubic, jaribio la mwangaza, mtiririko wa nyenzo, pacha dijitali, sakafu ya kiwanda, plc, mkanda wa kusafirisha, nurbs, kingo, kunenepesha, kutoshea skani, ar, eneoni, mbinu za tao, vipimo, mpya katika, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, injini ya uonyeshaji, injini, fungua kwa, usd, gltf, unreal, injini ya programu-jalizi, nurbs, nyuso, loft, sweep, mwendelezo, g0, g1, g2, zebra, step, iges, sema eneo, eneo, hali ya hewa, wakati wa siku, msimu, msaidizi, nyenzo kutoka picha, picha, picha ya mchoro wa awali, samani, pamba chumba, mteremko, kata kwa mteremko, gawanya, ukaguzi wa uchapishaji, matatizo, gridi ya sifa, taa, lugha, vifaa vya kuingiza, safu za upau wa zana, dwg, moja kwa moja
from: 2717d1b1
---

Hii ndiyo iliyobadilika katika ModelCraft 0.9, ikilinganishwa na 0.8.1. ModelCraft sasa inafika kwenye printa na sakafu ya kiwanda: unaweza kuweka vitu kwenye kitanda cha uchapishaji na kuvituma bila kuvisafirisha, kukata kwa filamenti au resini, na kupanga mstari wa kushughulikia vifaa. Hii ni CadCraft Studio 0.9 na programu zake nane; vipengele vingi vipya hapa chini ni programu-jalizi.

## Mpya

### Uchapishaji wa 3D

- **Hatua ya uchapishaji.** Bonyeza {{ui:Hatua ya uchapishaji}} kwenye upau wa zana. Ongeza vipengee vya Maktaba kwenye kitanda cha printa, vipange, angalia tabaka zilizokatwa kisha bonyeza {{ui:Tuma kwa printa ya 3D}}, bila STL ya kusafirisha. Ni ya programu-jalizi ya Uchapishaji wa 3D, ambayo imewashwa kwa chaguo-msingi na inaweza kuondolewa kama programu-jalizi nyingine yoyote. Angalia [Weka vitu kwenye kitanda cha uchapishaji na uvitume kwa printa](topic:print-stage).
- **Kikata chetu cha filamenti.** {{ui:CadCraft basic (imejumuishwa, ndiyo ya haraka zaidi)}} ndicho kikata kilichoko kwenye orodha ya **Kikata** ya kadi: kuta, ngozi, kujaza, misaada na skirt, kwenye mfanyakazi ili ukurasa ubaki kutumika. {{ui:Hakiki tabaka}} na kitelezi cha **Tabaka** inaonyesha tabaka kabla ya kutuma. Profaili za printa kama mitindo ya Ender-3 na Prusa MK4 zinabeba G-code yao ya kuanza.
- **Kutuma.** Kupitia USB (Chrome au Edge kwenye kompyuta, huku ukurasa ukiwa wazi), au kwa Klipper (Moonraker), OctoPrint au PrusaLink kwenye mtandao wako. Hakuna kinachounganishwa au kutumwa bila kubonyeza, na kutuma kunauliza kwanza.
- **Vikata vingine.** Kiri:Moto, PrusaSlicer na OrcaSlicer ni programu-jalizi zao, zimezimwa kwa chaguo-msingi;ziongeze kutoka kwenye kadi au kutoka {{ui:Mipangilio}} › {{ui:Programu-jalizi}}. PrusaSlicer na OrcaSlicer zinatumia nakala yako iliyosakinishwa ya CadCraft Studio. Programu-jalizi ya printa za Bambu Lab inakata kwa OrcaSlicer yako na mipangilio yake ya P2S, na inahitaji Studio kwenye kompyuta.
- **Uchapishaji wa resini.** Programu-jalizi za resini (zimezimwa kwa chaguo-msingi) zinatengeneza picha za tabaka kwa skrini ya printa yako, zikiwa na kutoboa na matundu ya hewa, raft na misaada, hakiki ya tabaka, na muda, resini na gharama. Programu-jalizi za muundo wa faili zinaandika Elegoo GOO, SL1, Chitubox (CBDDLP na CTB 2 hadi 5) na Anycubic (PWMX na PWS). Jaribio la mwangaza wa resini linatengeneza ngazi ya mwangaza tano. Angalia [Kata kwa printa ya resini](topic:resin-printing).
- **Bila mabadiliko.** {{ui:Safirisha}} › {{ui:Angalia uchapishaji wa 3D (STL au 3MF)…}}, zana za uchapishaji na Gawanya kwa uchapishaji zinafanya kazi kama katika 0.8. Angalia [Andaa modeli kwa uchapishaji wa 3D](topic:print-3d).

### Mtiririko wa nyenzo, Pacha dijitali na Sakafu ya kiwanda

Hizi tatu ni programu-jalizi, zimezimwa hadi uziwashe kwenye {{ui:Mipangilio}} › {{ui:Programu-jalizi}}, na kila moja ina msaada wake mwenyewe ukishawashwa.

- **Mtiririko wa nyenzo.** Paneli iitwayo Mtiririko wa nyenzo inapanga mikanda ya kusafirisha, vituo, bafa na njia za AGV kwenye mwonekano wa 3D, inaendesha uigaji wa mbegu, kuucheza tena, na kuonyesha kiwango cha uzalishaji, muda wa kuongoza na foleni, na matokeo yanahifadhiwa kama CSV. Maagizo yanaweza kutoka kwenye faili ya CSV. Seli za roboti zinaweza kukaguliwa na kusafirishwa. Kiungo cha PLC kina hali laini na hali halisi juu ya Modbus TCP, ambayo inafanya kazi tu katika CadCraft Studio.
- **Pacha dijitali.** Inasoma mpangilio wa Mtiririko wa nyenzo na kuendesha PLC laini juu yake, ikiwa na hitilafu unazoweza kulazimisha, majaribio ya hisa, ulinganisho wa mpangilio na orodha ya vifaa.
- **Sakafu ya kiwanda.** Inageuza vituo kuwa mashine na seli, inavisoma moja kwa moja au kutoka kwa kiigaji, na inaweka foleni ya kazi na OEE rahisi. Inasoma tu: toleo hili haliwezi kuandika kwa mashine au PLC yoyote.

### Nyuso, modeli na michoro

- **Kingo, kunenepesha na shughuli za boolean kwenye NURBS.** Paneli ya {{ui:Nyuso}} ina {{ui:Kingo kati ya nyuso}}, {{ui:Kingo kingo kadhaa}}, {{ui:Fanya unene kuwa kigumu}} na Muungano, Ondoa na Makutano, kila moja ikiwa na mkengeuko wake uliopimwa. Angalia [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Toshea nyuso kwenye skani.** Chagua mesh iliyoskaniwa kisha tumia {{ui:Toshea nyuso kwenye skani}} kwenye kikundi cha **Skani**, kisha {{ui:Shona nyuso kuwa solidi}}. Ni toshea ya kwanza, si kifurushi kamili cha urejeshaji wa uhandisi.
- **Kiungo cha moja kwa moja kutoka kwa mbunifu wa .3dm.** Njia moja, kutoka Rhino 8 au Grasshopper, na inahitaji CadCraft Studio kwenye kompyuta moja. Angalia [Weka modeli ya .3dm moja kwa moja](topic:live-3dm-link).
- **Ona modeli eneoni.** {{ui:Mwonekano eneoni (AR, simu)}} kwenye menyu ya {{ui:Mionekano}} inafanya kazi kwenye simu ya Android yenye Chrome. Angalia [Ona modeli eneoni kwa simu ya Android (AR)](topic:ar-on-site).
- **Mbinu za tao.** Orodha kunjuzi ya {{ui:Mbinu za tao}} inatoa njia kumi za kuchora tao, zikiwemo {{ui:Pointi 3}} na {{ui:Mwanzo, Katikati, Mwisho}}.
- **Vipimo zaidi.** Uzito (kg, lb, t, ton) na halijoto (digrii C, F, K na R) vinaeleweka mahali unapoandika thamani zenye vipimo.

## Katika kila programu

- **Vidokezo vya kuelea.** Maandishi yanayoonekana unapoweka kipanya juu ya vitufe na lebo zilizokatwa ni kidokezo cha Bootstrap.
- **Kadi ya kidokezo cha kuanza kinachofungika.** Kadi ya kidokezo kwenye eneo tupu la mchoro ina alama ndogo ya kufunga. Inabaki imefungwa, na palette ya amri inaweza kuionyesha tena.
- **Vichupo vinavyosogea.** Safu ya vichupo ya paneli isiyotoshea inasogea badala ya kukatwa.
- **Vichwa vya vichupo.** Hati ikiwa wazi, kichupo cha kivinjari kinaanza na jina la hati, kisha ModelCraft na CadCraft. Nukta huja kwanza ikiwa haijahifadhiwa.
- **Mpangilio.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › Mpangilio unashikilia mipangilio kwenye orodha kunjuzi, ikiwa na chaguo la kutumia mpangilio kwa programu hii pekee na kitufe cha kuweka upya mpangilio.
- **Lugha.** Orodha ya lugha kwenye Mipangilio inafuata faili za lugha zilizomo kwenye toleo. Lugha nyingine zaidi ya Kiingereza ni rasimu za mashine.
- **Moja kwa moja na Maktaba.** TeamWork ya Moja kwa moja inaonyesha vielekezi hai na majina, na mikusanyiko ya Maktaba inatoa mkusanyiko chaguo-msingi kwa kila programu.

## Imerekebishwa

- {{ui:Cheza}} inageuka kuwa {{ui:Simamisha}} wakati uhuishaji unacheza, na {{key:Space}} inacheza na kusimamisha wakati ratiba iko wazi.
- Uonyeshaji tulivu unarudi kwenye WebGL kadi ya michoro isipoweza kuanzisha kifuatiliaji cha njia. Mwonekano wa uonyeshaji hai bado unaweza kuonyesha hitilafu; hili halikukaguliwa kwenye kompyuta ya Windows yenye dereva huyo.
- Hali halisi ya Mtiririko wa nyenzo inaunganika tena baada ya kiungo kumalizika kwa majibu ya kipekee ya PLC.

## Mipaka halisi

- Hakuna kilichochapishwa kwenye printa halisi: si filamenti, si resini, wala kupitia Bambu Connect. Faili za resini zilisomwa tena na visomaji vya CadCraft pekee.
- Pacha dijitali na Sakafu ya kiwanda zilijaribiwa dhidi ya viigaji na majibu yanayojulikana pekee, bila PLC, mstari au itifaki halisi. Ni misaada ya kukagua, si uthibitisho wa usalama. Fizikia inahusu masanduku pekee, hadi mizigo minane.
- Kiungo cha Rhino na Grasshopper hakijawahi kufanya kazi kwenye programu halisi.
- Lugha zisizo za Kiingereza ni rasimu za mashine.

## Ya awali: 0.8 na 0.8.1

Hii ndiyo iliyobadilika katika ModelCraft 0.8 (2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. Kidirisha cha {{ui:Tengeneza picha…}} sasa kinaweza kutuma eneo kwa programu nyingine, paneli ya Nyuso inatengeneza nyuso laini huru, na msaidizi wa AI unayemuunganisha anaweza kuweka eneo zima kwa sentensi moja.

### Mpya

**Uonyeshaji**

- **Chaguo la Injini.** {{ui:Tengeneza picha…}} ina orodha ya **Injini** juu ya Hali. Injini zetu mbili, Haraka na Kifuatiliaji cha njia, ndizo chaguo-msingi na zinafanya kazi kila mahali. Chaguzi nyingine zinahifadhi eneo kama kifurushi (modeli kama faili ya USD, pamoja na faili ya mipangilio yenye thamani kamili za nyenzo, taa zilizowashwa, jua, anga, mwangaza na kamera) kukipeleka kwenye programu nyingine. Picha iliyochorwa na programu nyingine inasema ni programu gani na toleo gani lilitengeneza. Angalia [Chagua programu inayochora picha](topic:render-engines).
- **Fungua kwenye programu nyingine.** Orodha ya Injini inaweza kuhifadhi eneo kama faili ya USD, faili ya glTF (`.glb`) au folda ya mradi wa Unreal (`.zip`), kwenye kivinjari na katika CadCraft Studio. Katika Studio pia inaweza kuanzisha usdview au programu ya kompyuta kwa faili hiyo. Angalia [Fungua eneo kwenye programu nyingine](topic:render-open-in).
- **Tuma kwa injini ya mchezo kutoka Studio.** Studio inaandika eneo ndani ya mradi wa Unreal Engine na kuliweka sawa kila mara inapotuma, upande mmoja tu. Mabadiliko yako yanaishi kwenye tabaka ambalo CadCraft haiandiki kamwe. Angalia [Tuma eneo kwa injini ya mchezo](topic:render-unreal).
- **Injini kutoka kwa programu-jalizi.** Programu-jalizi inaweza kuongeza injini kwenye orodha. Ile iliyoandikwa kwa JavaScript inachora kwenye kivinjari na Studio; ile inayoendesha programu inahitaji ruhusa yako kwenye Studio. Angalia [Chora picha kwa programu nyingine](topic:render-other-program) na [Ongeza injini ya uonyeshaji kwa programu-jalizi](topic:render-engine-addons).
- **Sema eneo.** Mwambie msaidizi wako aliyeunganishwa "jioni, mvua nyepesi, miti ya vuli, watu kwenye uwanja" na ModelCraft inaliweka kwa hatua moja: jua linahamia kwenye tarehe na saa ili vivuli vifuate, anga inabadilika, nyuso zenye unyevu zinaonekana, na miti na watu wanawekwa kama vitu halisi kwenye lebo unazoweza kuficha, kuhamisha au kufuta. Wakati wa siku, tarehe au msimu, na hali ya hewa (wazi, mawingu mazito, ukungu, mvua nyepesi, mvua, dhoruba) pia vinafanya kazi peke yake, na ombi la baadaye linabadilisha eneo hilo hilo. Ukungu unaonekana kwenye picha ya ubora wa juu kwenye kadi ya michoro; injini nyingine zinaonyesha anga, mwanga na nyuso zenye unyevu. Mvua haichorwi kama mistari inayoanguka.

**Nyenzo**

- **Nyenzo kutoka picha moja.** Mpe ModelCraft picha ya uso (ukuta, sakafu, jiwe) nayo inatengeneza nyenzo ya vigae: mwanga kwenye picha unanyooshwa, kingo zinafanywa kujiunga, na ramani ya rangi, ramani ya ukali na ramani ya kawaida zinakokotolewa kutoka kwenye picha. Ni usindikaji wa kawaida wa picha yako mwenyewe, bila modeli iliyofunzwa. Ukali ni makadirio. Picha tambarare, ya mraba, iliyopigwa moja kwa moja inatoa kigae bora zaidi; mchoro mkali kama matofali unaweza kuonyesha kivuli laini mahali pa kujiunga kulipochanganywa.

**Nyuso**

- **Nyuso huru.** Paneli ya {{ui:Nyuso}} inatengeneza mikunjo ya NURBS na nyuso zisizokatwa: mikunjo inayopitia pointi, loft, zilizonyooka, extrude, revolve, sweep kwenye reli moja au mbili, nyuso kutoka mtandao wa mikunjo, viraka kutoka kingo nne, mechi na kuchanganya. Kila kingo inayoshirikiwa inapimwa kama G0, G1 au G2 (pengo, pembe, mruko wa mkunjo) kwenye nyuso halisi, na kingo mbaya kuliko ulivyoomba inaonekana kwenye paneli ya Matatizo ikiwa na marekebisho ya **Mechi**. Mistari ya Zebra na rangi za mkunjo zinachorwa kutoka kwenye nyuso halisi. Faili za STEP na IGES zinatoka na kuingia. Angalia [Nyuso huru (NURBS)](topic:nurbs-surfaces).

**Eneo na vyumba**

- **Picha ya mchoro wa awali kwenye ardhi.** {{ui:Faili}} › {{ui:Leta picha ya mchoro wa awali…}} inageuza picha ya simu ya mchoro wa mkono kuwa kingo ardhini kwa kipimo unachosema: kundi moja, na lebo kwa kila rangi ya kalamu. Karatasi inatambuliwa na kunyooshwa kwenye kompyuta yako, na hakuna kitu kinachotumwa popote. Angalia [Modeli kwenye mpango wa eneo](topic:site-plan).
- **Pamba chumba.** Chagua sakafu kisha tumia {{ui:Panga}} › {{ui:Weka samani chumbani…}}. Samani za chumba cha kulala, sebule, chumba cha kulia, jikoni, bafuni au ofisini zinawekwa kwa kanuni, dhidi ya kuta na mbali na milango na madirisha, kwenye kundi moja unaloweza kuliondoa kwa hatua moja. Ni mpangilio chaguo-msingi wa kukagua, si muundo. Angalia [Maktaba ya mwanzo](topic:starter).

**Uchapishaji wa 3D**

- **Mikato ya mteremko.** Gawanya kwa uchapishaji inaweza kuteremsha mikato yake hadi digrii 60, jambo linalozipa vipande eneo kubwa zaidi la kuunganisha. Viunganishi vinasimama mraba kwa mkato. Angalia [Gawanya modeli kwa uchapishaji](topic:print-split).
- **Ukaguzi wa uchapishaji kwenye Matatizo.** Matokeo ya ukaguzi wa uchapishaji wa 3D yanaonekana kwenye paneli ya Matatizo ikiwa na alama kwenye modeli, na Rekebisha inayarekebisha hapo. Angalia [Misaada, unene wa ukuta, kutoboa na urekebishaji](topic:print-tools).

**Katika kila programu**

- **Lugha.** Msaada na programu zinakuja kwa lugha 54. Kumi ni mpya: Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili na Kiuzbeki. Lugha zisizo za Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili asome, na mada za msaada zinaweza kubaki kwa Kiingereza.
- **Vifaa vya kuingiza.** Padi ya kugusa, kalamu, kipanya cha 3D, kidhibiti cha mchezo na vidhibiti vya MIDI vinaweza kuendesha programu, kwa zote au kwa moja.
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › Safu za upau wa zana inaweka Funga (kama awali), safu 2 au safu 1. Upau usiotoshea unasogea pembeni badala ya kuchukua nafasi ya mchoro. Funga inabaki chaguo-msingi.
- **Gridi ya sifa.** Sehemu za taa za ModelCraft zinatumia gridi ya pamoja: vikundi vinavyokunjika, safu za lebo na thamani, na msongamano wa Kompakt. Hesabu iliyoandikwa kama `2*450` inaendelea kufanya kazi.
- **Matatizo.** Paneli ya Matatizo (kitufe cha onyo kwenye upau wa programu) inashirikiwa na programu zote. Katika ModelCraft inashikilia ukaguzi wa uchapishaji na onyo za mwendelezo wa nyuso.
- **Moja kwa moja.** Kipindi cha TeamWork ya Moja kwa moja kinaonyesha nani yuko wapi. Angalia [Modeli pamoja kwa TeamWork ya Moja kwa moja](topic:work-live).
- **Ongeza AI yako.** Mkataba wa zana na ukaguzi wa programu nane zinapita, zikiwa na zana 454 kwa jumla. Muunganisho wa bofya-moja ndani ya Studio, kiunganishi kilichopangishwa kwa visaidizi vya kivinjari, ufunguo wako mwenyewe ndani ya Studio na kifurushi kilichochapishwa bado havijaahidiwa. Programu hazina AI yao wenyewe. Angalia [Tumia ModelCraft pamoja na visaidizi vya AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Sehemu ya madarasa ya DWG.** Sehemu ya madarasa ya faili ya DWG ilisomwa kama aina isiyo sahihi, jambo lililoweza kuvunja faili wakati wa kuleta. Sasa inasomwa kwa usahihi, katika ModelCraft na katika programu nyingine zinazosoma DWG.
- **Vidonge wima.** Urefu wa gridi uliobaki unakwenda kwenye turubai, na mpangilio wa karatasi unaanza kwa pikseli 760 au chini. Laha ya mitindo ya ModelCraft pia ina badiliko hili.
- **Lugha katika Studio.** CadCraft Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yakiwa yanaendesha; kabla ya hapo yalikuwa Kiingereza pekee. Hili bado halijajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.

### Bado haipo katika toleo hili

- **Haijasainiwa kwa msimbo.** Windows inaweza kuonyesha SmartScreen: chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, bofya kulia na uchague {{ui:Fungua}}. Matoleo ya duka yako kusimamishwa, na toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- Programu nyingine kuchora picha bila programu-jalizi ya injini ya uonyeshaji, kamera za paneli au za stereo, na picha ya anga kupitia programu nyingine, pamoja na programu-jalizi inayofungua hatua ya Unreal, bado hazipo. Faili zinaandikwa; programu-jalizi haijatolewa na haijaendeshwa katika Unreal.
- Nyuso huru: G3 na daraja A havipimwi wala kudaiwa, na kukata na miili imara vitakuja baadaye.
- Picha kutoka programu nyingine hazifanani pikseli kwa pikseli na zetu: kamera, jua, taa na mwangaza pekee ndivyo vinavyolingana.
- Marekebisho ya 0.8.1 ya kubadilisha lugha katika Studio hayajajaribiwa kwenye kila jukwaa.

Kila kitu kingine kiko katika [Bado haijajengwa](topic:not-built-yet). Kwa toleo lililotangulia, angalia [Mpya katika 0.7](topic:whats-new-0-7).
