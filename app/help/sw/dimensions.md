---
title: Weka vipimo na ubadilishe ukubwa wa ulichochora
summary: Weka vipimo kati ya kona, kwenye matao na duara, au kati ya kingo mbili; andika urefu mpya ili kubadilisha ukubwa wa modeli. Andika upya urefu wa ukingo au upana, kina na kimo cha kikundi kwenye Taarifa ya kitu.
keywords: kipimo, vipimo, badilisha ukubwa, badilisha saizi, hariri ukubwa, urefu, upana, kina, kimo, nyoosha, kipimo cha kuendesha, eleza, pima, baada ya ukweli, radius, kipenyo, pembe, angular, upinde, duara, R, Ø
from: a1f815ec
---

Ukubwa katika ModelCraft si wa kudumu baada ya kitu kuchorwa. Kipimo kinaonyesha urefu kwenye modeli, na kuandika urefu mpya ndani yake kunabadilisha ukubwa wa modeli ili ulingane. Unaweza pia kuandika upya urefu wa ukingo, au upana, kina na kimo cha kikundi, kwenye {{ui:Taarifa ya kitu}}.

## Weka kipimo

1. Bonyeza {{key:D}}, au bofya {{ui:Kipimo}} kwenye upau wa zana.
2. Bofya kona ya kupimia kutoka. Inanasa kwenye kona, katikati ya pande na kingo, kama inavyofanya wakati wa kuchora.
3. Bofya kona ya pili.

   Au bofya mara moja kwenye **ukingo** (kidokezo kinasema "Kwenye ukingo") ili kupima ukingo wote kwa bofya moja.
4. Sogeza kielekezi hadi mahali mstari wa kipimo unapopaswa kwenda, kisha ubofye. Unaweza pia kuandika umbali wa kukabiliana, kama `0.5m`, kisha ubonyeze {{key:Enter}}.

   Mstari wa kipimo unabaki sawa kwa ukingo ulio sawa, isipokuwa unapouangalia kutoka pembeni. Kwa ukingo wima unabaki kwenye ndege ya wima inayokukabili vizuri zaidi.

Upau wa hali unasema "Kipimo 4 m." Vipimo vinaonyesha urefu katika kitengo cha modeli na vinasasishwa unapobadilisha kitengo kwenye kiteuzi.

## Radius, kipenyo na pembe

Zana ile ile ya {{ui:Kipimo}} inapima mambo ya mviringo na pembe:

- **Upinde:** bofya upinde. Kidokezo kinasema {{ui:Radius}}. Sogeza kielekezi hadi pale maandishi yanapopaswa kuwa, kisha ubofye: kipimo kinasomeka **R 1.5 m**.
- **Duara:** bofya duara. Unapata **kipenyo** (**Ø 3 m**) chenye mstari unaovuka duara kupitia katikati yake. Poligoni zinafanya kazi vivyo hivyo, kwa kona zake kwenye duara.
- **Pembe kati ya kingo mbili:** bofya ukingo mmoja, kisha bofya ukingo wa pili unaokutana nao kwenye kona (ukiwa juu yake, kidokezo kinasema {{ui:Pembe kati ya kingo}}). Kisha sogea ndani ya pembe unayotaka, kisha ubofye. Ndani ya kona unapata pembe kati ya kingo; ukihamia upande mmoja unapata pembe ya pembeni yake (kwa mfano 150° badala ya 30°). Umbali wa kubofya kutoka kona unaweka mahali upinde unapokwenda; au andika umbali huo.

Ili kubadilisha radius kuwa kipenyo au kurudi, chagua kipimo kisha chagua katika {{ui:Onyesha kama}} kwenye {{ui:Taarifa ya kitu}}.

**Kubadilisha ukubwa kwa vipimo hivi:** andika radius au kipenyo kipya mara tu baada ya kuweka kimoja, au chagua baadaye kisha uandike. Upinde au duara unabaki na kituo chake na kubadilika ukubwa; uso unaofungwa nao (diski, mwisho wa nafasi) unabadilika nao. Mambo mawili yanapima tu:

- **Kipimo cha pembe** hakibadilishi modeli kamwe. Ili kubadilisha pembe, zungusha kingo kwa {{ui:Zungusha}}.
- **Duara mwishoni mwa silinda** (duara uliloivuta kwa {{ui:Sukuma/vuta}}) haliwezi kubadilishwa ukubwa kutoka kwenye kipimo chake, kwa sababu pande zake zingepaswa kubadilika pia. Badala yake, badilisha ukubwa wa silinda kwa kiwango, kuzunguka mhimili wake.

## Badilisha ukubwa wa modeli kwa kipimo

Mara tu baada ya kuweka kipimo, andika urefu mpya kisha ubonyeze {{key:Enter}}: `6m`, `12'`, `3500` kwenye modeli ya milimita. Modeli inabadilika hadi ukubwa huo.

Baadaye, wakati wowote:

1. Kwa {{ui:Chagua}}, bofya maandishi au mstari wa kipimo. {{ui:Taarifa ya kitu}} inasema **Kipimo** na kuonyesha {{ui:Urefu}} wake.
2. Andika urefu mpya kisha ubonyeze {{key:Enter}}. Unaweza kuandika moja kwa moja kwenye kisanduku cha thamani, au kwenye kisanduku cha {{ui:Urefu}} kwenye {{ui:Taarifa ya kitu}}.

### Kinachosogea

Kona ya pili uliyobofya inasogea, na kila kitu kilicho zaidi yake pia:

- **Kona zote mbili kwenye kipande kimoja** (upana wa kisanduku, kimo cha ukuta): upande wa kona inayosogea unateleza nje au ndani, na nyuso zilizounganishwa nao zinanyooka. Kisanduku kinabaki kigumu kilichofungwa, na chochote kilicho kabisa upande huo, kama kipengele cha dirisha, kinasogea nao.
- **Kona kwenye vipande viwili tofauti** (pengo kati ya visanduku viwili): kipande cha kona inayosogea kinasogea kizima, na pengo linabadilika.
- **Kona inayosogea ndani ya kikundi au kipengele ambacho kona nyingine haimo ndani yake:** kikundi kizima kinasogea.
- **Kona zote mbili ndani ya kikundi au kipengele kile kile:** kinanyoshwa ndani yake. Kipengele kinabadilika kila mahali kilipowekwa, kama inavyofanya kila mara unapokihariri.

Ili kubadilisha ni ncha ipi inayosogea, chagua kipimo kisha chagua katika {{ui:Husogea}} kwenye {{ui:Taarifa ya kitu}}:

| Chaguo | Kinachotokea |
|---|---|
| {{ui:Ncha ya pili}} (chaguo-msingi) | Ncha uliyobofya ya pili inasogea |
| {{ui:Ncha ya kwanza}} | Ncha uliyobofya ya kwanza inasogea |
| {{ui:Ncha zote mbili (katikati)}} | Kila ncha inasogea nusu ya badiliko, hivyo katikati inabaki pale |

### Ubadilishaji ukikataliwa

ModelCraft haibadilishi chochote na inasema kwa nini kwenye upau wa hali:

- "uso ungepinda nje ya ndege yake": kipimo kinapita kwa mteremko kuvuka umbo. Pima kwenye ukingo, au kwenye nyekundu, kijani au buluu.
- "uso ungepungua hadi kutoweka au kugeuka ndani nje": urefu mpya ni mfupi mno kwa umbo.
- "ncha inayosogea si kwenye kona ya modeli": ncha hiyo iliwekwa kwenye nafasi tupu au katikati ya ukingo. Chagua ncha nyingine katika {{ui:Husogea}}, au weka kipimo kwenye kona mbili.
- "urefu lazima uwe zaidi ya sifuri".

Kila ubadilishaji ni hatua moja: {{key:Mod+Z}} inautendua.

## Andika upya ukubwa kwenye Taarifa ya kitu

Huhitaji kipimo kila wakati:

- **Ukingo:** uchague. {{ui:Urefu}} wake kwenye {{ui:Taarifa ya kitu}} ni kisanduku unachoweza kuandika ndani yake. Kuandika urefu kwenye kisanduku cha thamani nako kunafanya kazi. Ncha iliyo mbali zaidi kwenye nyekundu, kisha kijani, kisha buluu inasogea, na kilichounganishwa nayo kinanyoka. Kwa mfano, kuandika upya ukingo wa chini mbele wa kisanduku kunakifanya kipana zaidi kwenda kulia.
- **Kikundi au kipengele:** chagua. {{ui:Upana (nyekundu)}}, {{ui:Kina (kijani)}} na {{ui:Kimo (buluu)}} ni visanduku. Upande wake wa mbali (kulia, nyuma, juu) unasogea. Hizi ni shoka za kikundi chenyewe, kabla ya mzunguko wowote uliopewa.

Bonyeza {{key:Enter}} ili kutumia, au {{key:Esc}} ili kurudisha thamani ya zamani.

## Vipimo vinafuata modeli

Kipimo kimeambatanishwa na kona mbili kilichowekwa (pembe: na kona yake na ncha za mbali za kingo zake mbili; radius au kipenyo: na upinde au duara lake). Sogeza, sukuma/vuta au badilisha ukubwa wa jiometri, na kipimo kinafuata na kuonyesha urefu mpya. Kinabaki kimeambatanishwa unapofanya jiometri kuwa kikundi au kipengele.

Ikiwa ncha iliwekwa mahali ambapo si kona (kwenye uso, au kwenye nafasi tupu), au kona yake imefutwa, ncha hiyo inabaki pale ilipokuwa. Kipimo bado kinapima, lakini kinaweza kubadilisha ukubwa kutoka ncha yake nyingine tu.

## Ondoa vipimo

- Kipimo kimoja: chagua na ubonyeze {{key:Delete}}, au ukibofye kwa {{ui:Kifutio}}.
- Vipimo vyote: bila kuchagua chochote, bofya {{ui:Futa vipimo vyote}} kwenye {{ui:Taarifa ya kitu}}.

Vipimo vinahifadhiwa kwenye faili ya `.modelcraft`. Havisafirishwi kwenda miundo mingine, ambayo hubeba modeli ya 3D tu. Faili yenye vipimo bado inafunguka kwenye ModelCraft ya zamani, lakini bila hivyo.
