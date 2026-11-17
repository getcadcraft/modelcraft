---
title: Ihuishe kamera na vitu, na utoe video
summary: Weka funguo za kamera na za vikundi na vipengele kwenye ratiba, zicheze kwenye mwonekano, na utoe uhuishaji kuwa video ya WebM ukitumia anga, jua na nyenzo za kitoa picha.
keywords: uhuishaji, ihuishe, ratiba, ufunguo wa fremu, funguo, ufunguo, njia ya kamera, pitia, kutembea, matembezi, video, filamu, sinema, webm, toa video, fremu, kasi ya fremu, fps, kiashiria cha muda, ufunguo wa kiotomatiki, ulaini, shikilia, matukio, mfuatano wa png, mwendo
from: d3a58249
---

**Ratiba** inasogeza kamera na kikundi chochote au kipengele kwa muda. Unaweka **funguo** (mahali kitu kilipo kwa wakati fulani); ModelCraft inakisogeza kwa ulaini kutoka ufunguo mmoja hadi mwingine. Kicheze kwenye mwonekano, kisha kitoe kuwa video kwa anga, jua, nyenzo na taa zilezile kama [picha iliyotolewa](topic:render).

## Fungua ratiba

Bofya {{ui:Mionekano}} kwenye kikundi cha {{ui:Kamera}}, kisha {{ui:Ratiba ya uhuishaji}}. Ratiba inafunguka chini ya mwonekano: vidhibiti juu, kisha safu ya **Kamera** na safu kwa kila kikundi au kipengele kinachosogea. Almasi ni funguo; mstari mwekundu ni **kiashiria cha muda**, wakati unaoonyeshwa kwenye mwonekano.

:::touch
Kwenye simu, ratiba pia inafunguka chini ya mwonekano. Vidhibiti vyake ni safu moja: telezesha kando ili ufikie vingine; kitufe cha kufunga ratiba kinabaki mwishoni mwake.
:::

Buruta kitelezi (au bofya kwenye safu) ili usogeze kiashiria cha muda. {{ui:Cheza}} inacheza kuanzia kiashiria cha muda na inageuka {{ui:Simamisha}} wakati inacheza; bofya tena ili usimamishe pale ilipo. {{key:Space}} inafanya vivyo hivyo ratiba ikiwa wazi (ratiba ikiwa imefungwa, Space bado ni {{ui:Chagua}}). {{ui:Ufunguo uliotangulia}} na {{ui:Ufunguo unaofuata}} zinaruka kati ya funguo. Mtindo wako mwenyewe unaweza kumpa cheza na simamisha ufunguo mwingine: {{ui:Mipangilio}}, kisha menyu, funguo na kipanya, amri *Cheza au simamisha uhuishaji*.

## Sogeza kamera

1. Sogeza kiashiria cha muda hadi mahali picha inapoanzia (0 s), weka mwonekano, kisha ubofye {{ui:Ufunguo wa kamera}}.
2. Sogeza kiashiria cha muda baadaye (kwa mfano 4 s), zungusha, sogeza au tembea kwenye mwonekano hadi nafasi inayofuata, kisha ubofye {{ui:Ufunguo wa kamera}} tena.
3. Ongeza funguo nyingi unavyotaka, kisha {{ui:Cheza}}.

Kamera inapita kwa ulaini kwenye kila ufunguo na inaanza na kumaliza ikiwa imepumzika.

:::tip
Tayari una [matukio](topic:scenes)? {{ui:Kutoka kwenye matukio}} inatengeneza njia ya kamera kutoka kwayo: inasimama kwenye kila tukio, kisha inaenda kwenye lifuatalo. Ikiwa ratiba haina funguo kabisa, {{ui:Toa video…}} inafanya hivyo yenyewe, hivyo matukio mawili au zaidi yanatosha kwa video ya kutembea.
:::

## Sogeza kikundi au kipengele

1. Chagua kikundi au kipengele (vikundi na vipengele vizima tu ndivyo vinavyosogea; [tengeneza kikundi](topic:groups-components) kwanza).
2. Kwa 0 s, bofya {{ui:Funguo zilizochaguliwa}}.
3. Sogeza kiashiria cha muda baadaye, [sogeza, zungusha au badilisha ukubwa](topic:move-copy) wa kikundi hadi pale kinapopaswa kuwa, kisha ubofye {{ui:Funguo zilizochaguliwa}} tena.

Kinateleza, kinageuka na kukua kati ya funguo zake. Mizunguko huchukua njia fupi.

**Ufunguo wa kiotomatiki** unaondoa hatua ya tatu ya kubofya: ukiwa umewasha {{ui:Ufunguo wa kiotomatiki}}, kikundi au kipengele kilichochaguliwa ukikisogeza, kukizungusha au kukibadilisha ukubwa kinapata ufunguo kwenye kiashiria cha muda chenyewe (na, mara ya kwanza, ufunguo kwa 0 s pale kilipokuwa).

:::note
Kusogeza kikundi kilichohuishwa bila ufunguo kunadumu tu hadi kiashiria cha muda kisogee: wakati mwingine ukicheza au ukisogeza, kinarudi pale funguo zake zinapokiweka. Upau wa hali unasema hivyo. Bonyeza {{ui:Funguo zilizochaguliwa}} ili kukiweka.
:::

## Badilisha funguo

- **Chagua ufunguo** kwa kubofya almasi yake: kiashiria cha muda kinaenda kwake.
- **Sogeza ufunguo** kwa kuburuta almasi yake kwenye safu yake, au kwa {{key:Left}} na {{key:Right}} (fremu moja; kwa {{key:Shift}}, kumi).
- **Futa** kwa {{ui:Futa ufunguo}} (ufunguo uliochaguliwa, au kila ufunguo kwenye kiashiria cha muda) au {{key:Delete}} kwenye almasi iliyochaguliwa.
- **Inavyosogea kwenda mbele**, kwa ufunguo uliochaguliwa: {{ui:Lainisha}} (mkunjo unaopita kwenye funguo zilizo karibu), {{ui:Thabiti}} (mstari ulionyooka kwa mwendo mmoja), {{ui:Polepole mwanzoni na mwishoni}} (inasimama kwenye ufunguo huu) au {{ui:Shikilia}} (inabaki hadi ufunguo unaofuata).
- **{{ui:Urefu (s)}}** huweka muda wa uhuishaji; ufunguo uliowekwa baada ya mwisho unaufanya urefu zaidi. Ili kuufupisha, sogeza au futa kwanza funguo zilizo nje ya mwisho mpya.
- **×** kwenye safu ya kikundi inakomesha kukihuisha.

Ratiba ina {{ui:Tendua}} na {{ui:Rudia}} zake: {{ui:Tendua}} ya modeli ({{key:Mod+Z}}) inabadilisha modeli, si funguo. Uhuishaji unahifadhiwa kwenye faili ya `.modelcraft`. Kufunga ratiba kunarudisha vikundi vinavyosogea kwenye pozi yao ya kwanza.

## Toa video

1. Bofya {{ui:Toa video}} kwenye ratiba (au {{ui:Hamisha}} › {{ui:Toa video…}}).
2. Chagua {{ui:Ukubwa}}, {{ui:Kasi ya fremu}}, {{ui:Ubora wa kila fremu}} na {{ui:Faili}}.
3. Bofya {{ui:Toa video}}. Kila fremu inaonekana inapotengenezwa, pamoja na muda uliobaki.
4. Ikikamilika, bofya {{ui:Hifadhi video}}.

{{ui:Simamisha}} (au {{key:Esc}}) inakomesha mapema; {{ui:Hifadhi video}} kisha inaweka fremu zilizotengenezwa kama video fupi zaidi.

Anga, jua, nyenzo, taa na mwangaza ni vile vilivyowekwa kwenye {{ui:Toa picha…}}: viweke hapo kwanza, ukikagua picha moja. Kila fremu inatolewa kwenye kompyuta hii; hakuna kinachopakiwa.

| Mpangilio | Kinachofanya |
|---|---|
| {{ui:Ukubwa}} | 480p, 720p HD, 1080p Full HD, au umbo la mwonekano wenyewe (upana hadi pikseli 1920) |
| {{ui:Kasi ya fremu}} | fremu 24, 25, 30 au 60 kwa sekunde. Fremu mara mbili zinachukua muda mara mbili |
| {{ui:Ubora wa kila fremu}} | {{ui:Haraka}} (pasi 4), {{ui:Rasimu}} (16) au {{ui:Nzuri}} (64): pasi nyingi zinatoa vivuli na kingo laini zaidi |
| {{ui:Faili}} | {{ui:Video ya WebM}}, {{ui:Video ya MP4 (H.264)}} pale kivinjari kinapoweza kuiandika, au {{ui:Picha za PNG, moja kwa kila fremu (ZIP)}} kwa wahariri wa video (na kwa vivinjari visivyo na kisimbaji cha video) |

:::tip
Video ya sekunde 10 kwa fremu 30 kwa sekunde ina fremu 301. Jaribu {{ui:Haraka}} kwanza kwa 480p ili kukagua mwendo, kisha utoe {{ui:Rasimu}} au {{ui:Nzuri}} kwa ukubwa mkubwa zaidi.
:::

WebM inacheza kwenye vivinjari na VLC, na wahariri wa video wanaweza kuibadilisha. {{ui:Video ya MP4 (H.264)}} inatolewa pale kivinjari kinapoweza kuiandika. {{ui:Toa video}} inatumia kitoa picha cha haraka; ili kufuatilia njia kwa kila fremu, chagua {{ui:Ongeza uhuishaji huu kwenye foleni}} kwenye kisanduku kile kile: fremu zinatolewa kwenye [foleni ya kutoa](topic:render#the-render-queue), ambayo inahitaji WebGPU.

:::firefox safari
Kutoa video kunahitaji kivinjari kinachosimba video chenyewe (WebCodecs): Chrome ya hivi karibuni, Edge, Firefox na Safari 17 zinafanya hivyo. Bila hicho, chagua {{ui:Picha za PNG, moja kwa kila fremu (ZIP)}}.
:::

## Mambo ya kujua

- Vikundi na vipengele vizima tu ndivyo vinavyosogea. Nyuso, kingo, muda wa jua na mtindo bado havibadiliki kwa muda.
- {{ui:Hamisha uhuishaji}} chini ya [Matukio](topic:scenes) bado inarekodi mwonekano kama unavyoonekana skrinini, kwa wakati halisi; {{ui:Toa video}} inatoa kila fremu pamoja na anga, vivuli na nyenzo.
