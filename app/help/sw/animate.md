---
title: Ihuishe sifa yoyote, ipange kama mikunjo, na changanya klipu
summary: Nafasi ya kazi ya Uhuishaji huweka funguo za mahali, mzunguko na ukubwa wa kitu, mwangaza, mtawanyiko na rangi ya taa, pembe ya lenzi, na funguo za umbo za mesh; kiunzi huinamisha mesh kwa mifupa na uzito uliopakwa; IK na vizuizi hufanya mifupa na vitu vifikie, vitazame, vinakili, vibaki ndani ya mipaka, vining'inie au vifuate vingine; miili migumu huanguka, hujipanga na kugongana kisha huokwa kuwa funguo; viendeshi huweka thamani kutoka kwa vingine; mwonekano wa Mikunjo wa ratiba hupanga kila badiliko kwa vipini vya Bézier na mizunguko, na mwonekano wa Klipu huhifadhi uhuishaji kama vitendo unavyoweza kuviweka tena na kuvichanganya.
keywords: fizikia, mwili mgumu, miili migumu, uigaji, iga, dondosha, anguka, mvutano, gongana, mgongano, panga rundo, kurukaruka, msuguano, oka, iliyookwa, ik, kinematiki inverse, kizuizi, vizuizi, tazama, fuatilia, lenga, nakili mabadiliko, nakili mahali, nakili mzunguko, kikomo cha mzunguko, mipaka, mtoto wa, mzazi, fuata njia, njia, nguzo, fabrik, mnyororo, kiunzi, viunzi, mifupa, mfupa, mifupa ya mwili, ngozi, kupaka uzito, uchoraji wa uzito, uzito, vikundi vya vertex, uzito wa kiotomatiki, pozi, hali ya pozi, dual quaternion, linear blend, funguo za umbo, ufunguo wa umbo, morph, morphs, malengo ya morph, maumbo mchanganyiko, uso, usemi, kiendeshi, viendeshi, misemo, nafasi ya uhuishaji, uhuishaji, ufunguo wa fremu, funguo, ufunguo, sifa, mabadiliko, mahali, mzunguko, ukubwa, taa, mwangaza, rangi, lenzi, uwanja wa kuona, fov, mhariri wa grafu, mikunjo, mkunjo, bezier, vipini, tanjenti, ukadiriaji, mzunguko, marudio, kitanzi, ping pong, kukabiliana, dope sheet, chagua funguo, kisanduku cha uteuzi, nakili funguo, bandika funguo, nyoosha funguo, pima funguo, klipu, vitendo, nla, changanya, mchanganyiko, ushawishi, hifadhi
from: 16d8e12f
---

[Ratiba ya uhuishaji](topic:animation) husogeza kamera na vikundi vizima na vipengele. Nafasi ya kazi ya {{ui:Uhuishaji}} huweka funguo zaidi ya hapo, na ratiba inapata mionekano miwili zaidi ya kupanga na kutumia tena ulichoweka kwa funguo.

## Ifungue

Chagua {{ui:Uhuishaji}} kwenye orodha ya nafasi za kazi kwenye upau wa zana. Ratiba hufunguka chini ya mwonekano, upau wa zana unaonyesha vikundi vya Uhuishaji ({{ui:Funguo}}, {{ui:Cheza}}, {{ui:Ratiba ya muda}}), na paneli ya kulia inaorodhesha unachoweza kuwekea funguo kwenye kiashiria cha muda.

## Weka ufunguo kwenye sifa

Paneli inaorodhesha, kwenye kiashiria cha muda:

- **Kitu kilichochaguliwa**: {{ui:Mahali}}, {{ui:Mzunguko (°)}} na {{ui:Ukubwa}}, namba tatu kwa kila moja. Andika namba na ubonyeze {{key:Enter}}: inawekwa ufunguo kwenye kiashiria cha muda na kitu kinasogea hapo. Almasi iliyo kando ya safu huweka ufunguo wa thamani ilivyo sasa; almasi iliyojazwa inamaanisha kuna ufunguo tayari kwenye kiashiria cha muda.
- **Taa**: {{ui:Mwangaza (lm)}}, {{ui:Mtawanyiko (°)}} (taa za doa) na {{ui:Rangi}} ya kila taa.
- **Kamera**: {{ui:Pembe ya lenzi (°)}}, kwa kukuza wakati kamera inasogea.

{{ui:Badilisha funguo}} (au {{key:I}}) huweka ufunguo wa mahali, mzunguko na ukubwa wa kila kikundi au kipengele kilichochaguliwa kwa mara moja; {{ui:Ufunguo wa kamera}} (au {{key:K}}) huweka ufunguo wa kamera. {{ui:Ufunguo wa kiotomatiki}} ukiwashwa, kikundi ambacho mahali, mzunguko na ukubwa wake vimewekwa ufunguo kwa njia hii hupata ufunguo mpya kila unapokisogeza.

Mizunguko ni pembe tatu, kuzunguka X, kisha Y, kisha Z. Mzunguko uliowekwa ufunguo zaidi ya 180° unaendelea upande uleule (190° inabaki 190°, si −170°), hivyo gurudumu linaweza kuzunguka mara kadhaa.

:::tip
Kikundi kilichowekwa ufunguo kwa {{ui:Funguo zilizochaguliwa}} kwenye ratiba kina funguo za nafasi nzima. Kitufe cha mkunjo kwenye safu yake kinazigeuza kuwa mikunjo ya mahali, mzunguko na ukubwa (nafasi ile ile kwenye kila ufunguo) ili uziumbe kwenye {{ui:Mikunjo}}.
:::

## Funguo za umbo (morphs)

**Ufunguo wa umbo** ni umbo jingine la [mesh](topic:meshes) ile ile: tabasamu kwenye uso, mlango uliovimba, jani lililopinda. Kitelezi chake huchanganya kutoka mesh ilivyo (0) hadi umbo hilo (1); funguo kadhaa zinajumlishwa.

1. Chagua mesh kwenye nafasi ya kazi ya Uhuishaji: paneli inaonyesha {{ui:Funguo za umbo}} zake.
2. Bofya {{ui:Ongeza funguo ya umbo}}. ModelCraft inaenda kwenye [nafasi ya kazi ya Mesh](topic:mesh-edit) na ufunguo mpya unahaririwa: sogeza nukta, sukuma nje, chonga — badilisha mesh kuwa umbo unalotaka.
3. Rudi kwenye {{ui:Uhuishaji}} na ubofye {{ui:Imekamilika}}. Mesh inarudi ilivyokuwa, na ufunguo unashikilia badiliko lako.

Kisha buruta kitelezi cha ufunguo (au andika thamani) ili kuuchanganya. Almasi inaweka thamani kwenye kiashiria cha muda, hivyo ufunguo unaweza kukua na kufifia kwa muda; ukishakuwa na wimbo, thamani mpya inawekwa ufunguo kwenye kiashiria cha muda. Penseli inahariri umbo la ufunguo tena (mesh inaonyesha kikamilifu hadi {{ui:Imekamilika}}; {{ui:Ghairi}} inaacha ufunguo kama ulivyokuwa), jicho linazima ufunguo, pipa linauondoa.

Nukta unayoongeza ukiwa unahariri ufunguo ni ya mesh yenyewe: inabaki pale ulipoiweka, katika kila umbo.

:::note
Funguo za umbo husogeza mesh kabla ya [viboreshaji](topic:modifiers) vyake: Subdivision modifier hulainisha umbo lililochanganywa. Picha na video zilizotolewa zinaonyesha funguo kwenye kila fremu.
:::

## Kiunzi: mifupa inayoinamisha mesh

**Kiunzi** ni seti ya mifupa ndani ya [mesh](topic:meshes). Weka mifupa katika pozi nayo mesh inafuata, kila nukta kadiri **uzito** wake unavyosema.

1. Chagua mesh kwenye nafasi ya kazi ya Uhuishaji na ubofye {{ui:Ongeza kiunzi}} kwenye paneli (au {{ui:Ongeza mfupa}} kwenye kikundi cha {{ui:Kiunzi}}): mfupa wa kwanza unapita katikati ya mesh kuanzia chini yake.
2. Ukiwa umechagua mfupa, {{ui:Ongeza mfupa mdogo}} huongeza unaofuata kuanzia ncha yake. Weka {{ui:Kichwa}}, {{ui:Ncha}}, {{ui:Kuzungusha (°)}} na {{ui:Inaning'inia kutoka}} kwa mfupa wowote kwenye paneli; mfupa unaoning'inia kutoka mwingine unasogea nao. Ondoa tiki ya {{ui:Husogeza mesh}} kwa mfupa unaoongoza wengine tu.
3. Bofya {{ui:Uzito wa kiotomatiki}}: kila mfupa unashika nukta zilizo karibu nao zaidi, na ushikaji unaenea kwa ulaini kwenye mesh, hivyo nukta zilizo kati ya mifupa miwili zinagawana. {{ui:Mifupa iliyo karibu tu}} ni mgawanyo wa haraka na mkali zaidi.

**Weka mifupa katika pozi** kwa {{ui:Pozi}} ({{key:P}}): bofya mfupa ili uuchague, buruta ili uuzungushe kuzunguka mhimili wa mwonekano, {{key:Shift}}-buruta ili uusogeze. Au andika {{ui:Mahali}}, {{ui:Mzunguko (°)}} na {{ui:Ukubwa}} chini ya {{ui:Pozi}}; mizunguko iko kwenye mhimili wa mfupa wenyewe, kuanzia pale unapopumzika. Almasi na {{ui:Weka ufunguo kwa pozi nzima}} huweka pozi kwenye kiashiria cha muda; mfupa ukishakuwa na funguo, kuuweka katika pozi kunaweka ufunguo pale hapo. {{ui:Weka upya mfupa huu}} na {{ui:Weka upya pozi}} zinarudisha mifupa katika hali ya kupumzika.

**Rangi uzito** ({{key:W}}) kwa mfupa uliochaguliwa: mesh inaonyeshwa ikiwa imepumzika, kila uso umepakwa rangi kulingana na kiasi cha mfupa huo unaoushika — nyekundu yote, buluu hakuna. Paka ili kuongeza ushikaji ({{key:Mod}} unaupunguza, {{key:Shift}} unalainisha); {{ui:Ukubwa (px)}} na {{ui:Nguvu}} zinaweka brashi. Kwa {{ui:Weka jumla ya uzito wa kila nukta kuwa 1}}, kumpa mfupa mmoja zaidi kunachukua kiasi hicho hicho kutoka kwa wengine. Kila mpigo ni hatua moja ya kutendua ya modeli.

{{ui:Ngozi}} huchagua jinsi nukta iliyo kati ya mifupa inavyosogea: {{ui:Mstari (haraka)}} huchanganya miondoko ya mifupa, na hubana kidogo kiungio kilichopinda; {{ui:Dual quaternion (huhifadhi ujazo kwenye viungio)}} badala yake huzungusha nukta kuzunguka kiungio, hivyo kiwiko au goti huhifadhi unene wake (na {{ui:Ukubwa}} wa mfupa haunyooshi ngozi).

:::note
Funguo za umbo zinakuja kwanza, kisha kiunzi, kisha [viboreshaji](topic:modifiers). Mwonekano, picha na video zote zinaonyesha mesh iliyowekwa pozi; uzito wa mesh unahifadhiwa nayo, na mifupa pamoja na pozi yake vinahifadhiwa na uhuishaji.
:::

## IK na vizuizi

**Kizuizi** kinasogeza mfupa au kitu baada ya funguo zake, kwa kanuni fulani. Chagua kitu (au, kwenye kiunzi, mfupa) na uongeze kimoja chini ya {{ui:Vizuizi vya …}}; kadhaa zinaendeshwa kwa mpangilio wa orodha (mishale hubadilisha mpangilio), na kila kimoja kina {{ui:Kiasi gani}} (0 hadi 1, kinachowekwa ufunguo kwa almasi yake kama sifa nyingine yoyote) na swichi ya kuwasha/kuzima.

| Kizuizi | Kwa | Kinachofanya |
|---|---|---|
| {{ui:Kufikia (IK)}} | Mifupa | Mfupa na mifupa unayoning'inia kutoka ({{ui:Mifupa kwenye mnyororo}}) zinainama ili ncha yake ifikie lengo. Kwa mifupa miwili na {{ui:Nguzo (kujikunja kunaelekea kwake)}}, kiwiko au goti kinaelekea nguzo; minyororo mirefu inainama kwa ulaini. Lengo likiwa nje ya kufikiwa, mnyororo unaelekea moja kwa moja kwenye lengo. |
| {{ui:Tazama}} | Zote mbili | Hugeuka ili {{ui:Mhimili unaoelekeza}} uelekee lengo, huku {{ui:Mhimili unaobaki juu}} ukibaki karibu iwezekanavyo na juu. |
| {{ui:Nakili mabadiliko}} | Zote mbili | Huchukua mahali, mzunguko au ukubwa wa lengo — zile zilizowekwa tiki. |
| {{ui:Mipaka}} | Zote mbili | Huweka mahali, mzunguko (digrii) au ukubwa wake kati ya {{ui:kiwango cha chini}} na {{ui:kiwango cha juu}} kwa kila mhimili; acha jozi tupu ili mhimili huo uwe huru. |
| {{ui:Mtoto wa}} | Zote mbili | Husogea na lengo kana kwamba inaning'inia kutoka kwake, kuanzia pale zote mbili zilipokuwa ulipochagua lengo. |
| {{ui:Fuata njia}} | Vitu | Hukaa juu ya [kitu cha mkunjo](topic:curves) kwenye {{ui:Kando ya mkunjo}} (0 mwanzo wake, 1 mwisho wake; iwekee ufunguo ili isafiri), na kwa {{ui:Geuka kufuata mkunjo}} inaelekea kufuata mkunjo. |

Lengo ni kitu kingine kwenye kikundi kilicho wazi, mfupa wa kiunzi kile kile, au {{ui:Nukta moja}} unayoandika (nukta ya kitu iko kwenye viwianishi vya modeli, ya mfupa iko kwenye viwianishi vya mesh yake). Kwa mguu wa IK, weka lengo pale mguu unapopaswa kuwa na uweke ufunguo kwa lengo, au weka ufunguo wa {{ui:Kiasi gani}} ili kukabidhi mguu kati ya funguo kwa IK.

:::tip
Kitu kinachotazama kile kinachofuata njia kinakiona kikiwa kwenye njia: ModelCraft inakokotoa malengo kwanza, bila kujali mpangilio wa vitu.
:::

## Fizikia: dondosha, panga rundo na gongana

Acha vitu vianguke na kugongana, kisha uweke matokeo kama funguo.

1. Chagua kikundi, kipengele au mesh na uweke {{ui:Mwili mgumu}} wake chini ya {{ui:Fizikia}}: {{ui:Huanguka na kugongana}} (husogea) au {{ui:Hubaki pale, huzuia njia}} (meza, ukuta, njia panda). Kwa kinachoanguka, weka {{ui:Umbo}} lake — {{ui:Kisanduku (mipaka yake)}} au {{ui:Mpira (duara kuzunguka mipaka yake)}} — pamoja na {{ui:Wingi (kg)}}, {{ui:Msuguano}} na {{ui:Kurukaruka}} (0 hugonga kimya, 1 hurudi juu kwa urefu uleule).
2. Chini ya {{ui:Modeli nzima}}, weka {{ui:Kutoka (s)}} na {{ui:Hadi (s)}}, {{ui:Mvutano wa dunia (m/s², chini)}}, na kama kuna {{ui:Ardhi ya kutua}} (na urefu wake).
3. Bofya {{ui:Oka fizikia}} (kwenye paneli au kikundi cha {{ui:Fizikia}}). Kila kitu kinachoanguka kinapata ufunguo wa mahali, mzunguko na ukubwa kwenye kila fremu kati ya nyakati hizo mbili; kicheze kama uhuishaji wowote.

Kuoka tena kunabadilisha funguo hizo; {{ui:Ondoa funguo zilizookwa}} inaziondoa. Vitu vinaanza vikiwa vimepumzika, pale funguo, mikunjo na vizuizi vyake vinavyoviweka kwenye {{ui:Kutoka (s)}} (mwendo wa funguo uliotangulia haufuatwi kwenye kuanguka). {{ui:Hatua kwa fremu}} zaidi zinafanya rundo refu liwe imara zaidi; upau wa hali unasema kama kitu bado kinasogea mwishoni.

:::note
Umbo ni kisanduku na mpira kuzunguka mipaka ya kila kitu; kisanduku kinagusa kwa pembe zake, katikati ya kingo na katikati ya nyuso, hivyo masanduku hujipanga na kuinama kama unavyotarajia. Kitambaa, vimiminika, viungio kati ya vitu na maumbo kamili havijajengwa.
:::

## Viendeshi

**Kiendeshi** huweka funguo ya umbo kutoka vitu vingine badala ya kwa mkono: fungua kiendeshi cha ufunguo (kitufe cha kikokotoo), andika **usemi**, kisha upe kila jina ndani yake kile linachosoma ({{ui:Husoma}}): muda kwa sekunde, fremu, mahali, mzunguko au ukubwa wa kitu kwenye X, Y au Z, mwangaza wa taa, au ufunguo mwingine wa umbo. Kwa mfano, kwa `v` inayosoma mzunguko wa mlango kuzunguka Z, `clamp(v / 90, 0, 1)` hufungua umbo mlango unapofunguka.

Misemo hutumia namba, majina, `+ - * / % ^` na mabano, na vitendakazi `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` pamoja na `pi` na `e`. Kosa linaonyeshwa na halibadilishi chochote. Kitelezi cha ufunguo unaoendeshwa kinaonyesha thamani ya kiendeshi; kiendeshi kinashinda wimbo wa ufunguo hadi ukiondoe.

## Chagua na badilisha funguo (mwonekano wa Funguo)

{{ui:Funguo}} inaonyesha safu moja kwa kila wimbo: kamera, kila kikundi kinachosogea, na kila sifa (“Taa 2 · Mwangaza (lm)”; funguo za sifa ni duara).

- Bofya ufunguo ili uuchague; {{key:Shift}}-bofya au {{key:Mod}}-bofya huongeza au kuondoa funguo kwenye uteuzi. {{key:Shift}}-buruta juu ya safu huchora kisanduku kinachoongeza kila ufunguo ndani yake.
- Buruta ufunguo uliochaguliwa ili uzisogeze zote; {{key:Left}} / {{key:Right}} zinazisogeza fremu moja ({{key:Shift}}: kumi).
- {{key:Mod+C}} inanakili funguo zilizochaguliwa, {{key:Mod+V}} inazibandika kutoka kwenye kiashiria cha muda kwenye wimbo ule ule (kichupo kingine cha ModelCraft pia kinaweza kuzibandika).
- {{ui:Nyoosha}} inatawanya funguo zilizochaguliwa kutoka kwenye kiashiria cha muda kwa namba iliyo kando yake (2 = mara mbili ya umbali; 0.5 zinakaribiana).
- Orodha ya ulaini huweka jinsi kila ufunguo uliochaguliwa unavyosogea kwenda unaofuata.

## Umba mikunjo (mwonekano wa Mikunjo)

{{ui:Mikunjo}} ni grafu ya kila namba kwa muda: muda kando, thamani juu. Weka tiki kwenye mikunjo ya kuonyesha kwenye orodha ya kushoto (X, Y na Z ni nyekundu, kijani na buluu).

- Bofya ufunguo (mraba) ili uuchague, {{key:Shift}}-bofya kwa zaidi, au buruta kisanduku. Buruta ufunguo uliochaguliwa ili ubadilishe muda na thamani yake; ukichagua kadhaa, kuburuta kunazisogeza kwa muda.
- Ufunguo uliochaguliwa unaonyesha **vipini** vyake viwili. Buruta kimoja ili uumbe mkunjo upande huo. {{ui:Vipini}} inasema zinavyofanya kazi: {{ui:Kiotomatiki}} (mkunjo laini unaopita kwenye funguo zilizo karibu), {{ui:Vinaelekea kwenye ufunguo unaofuata}}, {{ui:Vimepangwa sawa}} (vyote viwili vinabaki kwenye mstari ulionyooka, hivyo mkunjo hauna kona) au {{ui:Huru}}.
- {{ui:Kutoka kwenye funguo zilizochaguliwa}} huweka jinsi kila ufunguo uliochaguliwa unavyosogea kwenda unaofuata: {{ui:Mkunjo (vipini)}}, {{ui:Lainisha}}, {{ui:Thabiti}}, {{ui:Polepole mwanzoni na mwishoni}} au {{ui:Shikilia}}.
- {{ui:Kabla}} na {{ui:Baada}} huweka mkunjo unafanya nini nje ya funguo zake: {{ui:Shikilia}} (unabaki kwenye thamani ya kwanza au ya mwisho), {{ui:Rudia}}, {{ui:Mbele na nyuma}}, au {{ui:Rudia na endelea}} (kila marudio huanzia pale la mwisho lilipomalizikia: gurudumu linaendelea kuzunguka, mtembezi anaendelea kutembea).
- Gurudumu la kipanya linakuza ({{key:Mod}}: thamani tu; {{key:Shift}}: muda tu); buruta kwa kitufe cha kati au kwa {{key:Alt}} kusogeza; {{ui:Onyesha yote}} au {{key:Home}} inatosheleza mikunjo yote inayoonekana. Bofya nafasi tupu ili usogeze kiashiria cha muda hapo. {{key:Delete}} inafuta funguo zilizochaguliwa.

Vipini vinazuiwa kuvukana kwa muda, hivyo mkunjo hauendi nyuma kamwe.

## Tumia tena uhuishaji (mwonekano wa Klipu)

**Klipu** inacheza uhuishaji uliohifadhiwa (**kitendo**) kwenye ratiba. Klipu zinachanganywa kwa mpangilio, safu za chini zikiwa juu ya zile za juu; nyimbo za ratiba yenyewe ziko juu ya kila klipu.

1. Weka funguo za vikundi na taa kama kawaida, kisha ubofye {{ui:Tengeneza klipu}} kwenye {{ui:Klipu}} na upe kitendo jina. Nyimbo zinakuwa kitendo, na klipu inakicheza pale zilipokuwa (kamera inabaki kwenye ratiba).
2. Ili kukitumia tena, chagua kitendo na ubofye {{ui:Ongeza klipu}}: klipu mpya inaanza kwenye kiashiria cha muda.
3. Buruta klipu kwenye safu yake ili uisogeze; ibofye ili uweke {{ui:Anza (s)}}, {{ui:Kasi}} (2 = mara mbili ya haraka), {{ui:Marudio}}, {{ui:Kiasi gani}} (0 hadi 1), {{ui:Changanya}} ({{ui:Badilisha}}, au {{ui:Ongeza juu}} ya klipu zilizo kabla yake), {{ui:Nje ya klipu}} (hakuna, shikilia mwisho wake, au shikilia ncha zote mbili) na {{ui:Nyamazisha}}. Mishale hubadilisha mpangilio; pipa linaiondoa (kitendo ambacho hakuna klipu inakitumia tena kinaondoka nayo).

Klipu yenye {{ui:Kiasi gani}} chini ya kamili inachanganyika na kilicho chini yake: klipu iliyo kabla yake, au taa au mahali kama zilivyo bila uhuishaji.

## Nini kinacheza wapi

| Nini | Kwenye mwonekano | Kwenye video iliyotolewa |
|---|---|---|
| Funguo za kamera, pembe ya lenzi zenye funguo za kamera | Ndiyo | Ndiyo |
| Mahali, mzunguko na ukubwa (funguo, mikunjo, klipu) | Ndiyo | Ndiyo |
| Mwangaza, mtawanyiko na rangi ya taa | Ndiyo | Bado hapana: video inatumia taa zilivyo zinapoanza (angalia [kisichojengwa bado](topic:not-built-yet)) |
| Pembe ya lenzi bila funguo za kamera | Ndiyo | Bado hapana: weka funguo kwa kamera pia |
| Funguo za umbo na viendeshi | Ndiyo | Ndiyo |
| Viunzi (meshi zilizowekwa pozi) | Ndiyo | Ndiyo |
| IK na vizuizi | Ndiyo | Ndiyo |
| Fizikia iliyookwa (funguo) | Ndiyo | Ndiyo |

Kila kitu kinahifadhiwa kwenye faili ya `.modelcraft` pamoja na uhuishaji wote, na {{ui:Tendua}} na {{ui:Rudia}} za ratiba zinarudisha nyuma chochote kati yake.
