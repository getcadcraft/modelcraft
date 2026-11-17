---
title: Chora nyuso kwa mistari, mstatili, duara na matao
summary: Tengeneza nyuso bapa ardhini au juu ya nyuso nyingine, zigawanye kwa mistari, na chora duara na poligoni zenye idadi ya pande unayotaka.
keywords: chora, mstari, mstatili, duara, poligoni, sogeza kingo, ndani, fremu, mpaka, tao, mkunjo, spline, laini, kebo, njia, uvimbe, radius, uso, mpango wa sakafu, alama ya msingi, gawanya, pande, sehemu, muhtasari, penseli
from: b6d7b7dd
---

Kila kitu katika ModelCraft huanza kama **uso** bapa: uso uliofungwa na kingo. Unaweza kuchora uso moja kwa moja kwa {{ui:Mstatili}}, {{ui:Duara}} au {{ui:Poligoni}}, au kuainisha uso kwa kingo moja kwa wakati kwa {{ui:Mstari}}. Nyuso ndizo ambazo [Sukuma/vuta](topic:push-pull) hugeuza kuwa vitu vigumu.

## Chora mstatili

1. Bonyeza {{key:R}}.
2. Bofya kona ya kwanza: ardhini, au kwenye uso wowote wa modeli.
3. Sogeza kielekezi. Mstatili unabaki ardhini (au kwenye uso uliouanzia), na {{ui:Vipimo}} (kisanduku cha thamani) kinaonyesha upana na kina chake. Kidokezo kinasema "Mraba" pande zinapokuwa sawa.

   Ili kuchora kwenye ndege nyingine, elekeza kwake: uso unaopita kona ya kwanza unaweka mstatili kwenye uso huo, na kunasa kwenye nukta iliyo nje ya ndege (ncha, kingo, au mhimili wa bluu) husimamisha mstatili kupitia kona zote mbili. Rudi kwenye nukta ya ndege ya kwanza na utalala tena. Ili kushikilia ndege moja, bonyeza kitufe cha mshale: {{key:Up}} huweka mstatili sawa (ndege ya bluu), {{key:Right}} kwenye ndege nyekundu, {{key:Left}} kwenye ndege ya kijani. Bonyeza kitufe kile kile tena ili kufungua.
4. Bofya kona ya kinyume, au andika ukubwa wa pande mbili ukitenganishwa kwa koma kisha bonyeza {{key:Enter}}: `4m,3m`, `4000,3000` katika modeli ya milimita, au `12',10'6"` kwa futi na inchi.

   Uso unaonekana wenye kingo nne kuuzunguka.

Ukubwa uliondikwa unakwenda upande ambao ulikuwa unaelekeza: kama kielekezi kiko kushoto kwa kona ya kwanza wakati unaandika, mstatili unakua kushoto.

:::warning
Koma inatenganisha vipimo viwili, kwa hiyo haiwezi kuwa alama ya desimali. Andika `2.5m,3m`, kamwe `2,5m`.
:::

## Chora duara au poligoni

1. Bonyeza {{key:C}} kwa duara au {{key:N}} kwa poligoni.
2. Kubadilisha idadi ya pande, andika kabla ya kubofya: `12s` (au `12` tu) kisha {{key:Enter}}. Duara huanza na pande 24 na poligoni na 6. Kidokezo kinaonyesha idadi ya sasa, na ModelCraft inaihifadhi kwa duara lijalo hadi ubadilishe au ubadili zana.
3. Bofya katikati, ardhini au kwenye uso. Ili kulipangilia katikati ya uso, elekeza kwenye katikati ya uso ("Katikati ya uso") au kwenye katikati ya moja ya kingo zake ("Nukta ya kati") ukiwa kielekezi kiko ndani kidogo ya uso huo: duara linachorwa kwenye uso huo, hata kwenye ncha nyembamba ya kisanduku kirefu.
4. Bofya ili kuweka radius, au andika ({{ui:Radius}} kwenye kisanduku cha thamani) kisha bonyeza {{key:Enter}}.

Duara ni poligoni yenye pande nyingi. Unapovuta duara juu kwa Sukuma/vuta, pande zake zinalainishwa ili silinda isomeke kama uso mmoja laini.

## Chora tao

1. Bonyeza {{key:A}} ({{ui:Tao}}).
2. Bofya mahali tao linapoanzia, kisha mahali linapoishia (au andika urefu kati yao).
3. Sogeza kielekezi ili kuvimbisha tao nje, kisha bofya. Kidokezo kinasema "Nusu duara" uvimbe unapokuwa nusu ya umbali kati ya ncha. Au andika umbali ambao katikati ya tao unasimama mbali: `2` kisha {{key:Enter}}.

Ili kuchora tao kuzunguka nukta, tumia {{ui:Tao kutoka katikati}}: bofya katikati, kisha mahali tao linapoanzia (au andika radius), kisha mahali linapoishia (au andika pembe kwa digrii, kama `90`). Linanasa kwenye hatua za 15°.

Tao lililoanzia kwenye uso linachorwa kwenye uso huo; vinginevyo linalala ardhini, au linasimama wima ikiwa ncha zake mbili ziko kwenye urefu tofauti. Tao lina sehemu 12; andika `24s` wakati wa kuchora kwa zaidi. Matao yanafunga nyuso kama mistari inavyofanya: tao linalovuka kona ya mstatili unaugawanya.

## Chora mkunjo laini

{{ui:Mkunjo}} huchora mstari laini unaopita kila nukta unayobofya: kebo, njia ya mkono wa reli, ukingo wa bustani. Unaweza kuondoka ardhini: nukta zinanasa kwenye kona, kingo na nyuso popote, na funguo za mshale zinafunga nyekundu, kijani au bluu kama kwenye {{ui:Mstari}}.

1. Bofya {{ui:Mkunjo}} katika kundi la {{ui:Chora}}.
2. Bofya nukta ambazo mkunjo unapita. Andika `<0,0,1>` kisha {{key:Enter}} kwa nukta 1 juu ya ya mwisho, `[x,y,z]` kwa mahali kamili, au urefu kwa nukta iliyo umbali huo kuelekea kielekezi.
3. Bonyeza {{key:Enter}} au bofya mara mbili ili kumaliza. Bofya nukta ya kwanza tena ili kufunga mkunjo. {{key:Backspace}} inachukua nukta ya mwisho kurudi nyuma.

Mkunjo unachaguliwa kama kipande kimoja. Ili kuubadilisha, uchague kisha bofya {{ui:Hariri nukta}} katika {{ui:Taarifa ya kitu}}: nukta zake zinaonekana kama mraba. Bofya moja, kisha bofya inapoenda (au andika `<dx,dy,dz>`). {{key:Esc}} inarudisha nukta, na inamaliza kuhariri. Mkunjo bapa uliofungwa unatengeneza uso; mkunjo unaoelezea uso hauwezi tena kuhaririwa.

## Sogeza kingo: mpaka ndani au nje ya uso

{{ui:Sogeza kingo}} inanakili muhtasari wa uso umbali uliowekwa ndani yake (au nje yake), kwa fremu, mpaka, kizingiti cha dirisha au kioo cha skrini.

1. Bonyeza {{key:F}} kisha bofya uso, au chagua uso kwanza kisha bonyeza {{key:F}}.
2. Sogeza kielekezi ndani ya uso kwa muhtasari wa ndani, au nje yake kwa wa nje. Muhtasari mpya unafuata, na kidokezo kinasema umbali.
3. Bofya, au andika umbali kisha bonyeza {{key:Enter}}.

Uso unagawanyika mara mbili: uso wa ndani na fremu inayouzunguka (au pete mpya nje). Sukuma/vuta yoyote kati yao mara moja: kwa skrini, chora kisanduku, kisukume hadi unene wake, sogeza uso wa mbele milimita 30 ndani, kisha usukume uso wa ndani kidogo kwa ajili ya kioo. Matundu kwenye uso nayo yanasogezwa, na tao au duara linabaki kuwa mkunjo mmoja (mdogo au mkubwa zaidi).

- **Bofya mara mbili** uso kwa {{ui:Sogeza kingo}} ili usogezwe tena kwa umbali wa mwisho.
- **Kingo:** chagua mnyororo wa kingo zilizounganishwa katika ndege moja (kwa mfano mistari miwili ya herufi L), bonyeza {{key:F}}, sogea upande unaotaka na andika umbali: nakala sambamba inachorwa, na kona zikikatwa kwa pembe.
- Umbali ukizidi kile uso unaoruhusu, ModelCraft inasema hivyo na haichori chochote.

## Matao, duara na poligoni ni mikunjo

Bofya sehemu yoyote ya tao, duara au poligoni, na mkunjo wote unachaguliwa. {{ui:Taarifa ya kitu}} kisha inaonyesha radius yake, sehemu zake, pembe yake (kwa matao) na urefu wake. Andika radius mpya hapo ili kubadilisha ukubwa wake kuzunguka katikati; nyuso zilizochorwa katika ndege yake zinafuata. Mara uso wa mkunjo unapokuwa umesukumwa au kuvutwa, radius yake inabaki kama ilivyo.

## Chora kwa mistari

1. Bonyeza {{key:L}}.
2. Bofya mahali mstari unapoanzia.
3. Bofya mahali unapoishia, au andika urefu kisha bonyeza {{key:Enter}}. Urefu uliondikwa unakwenda upande ambao kielekezi kinaonyesha.
4. Endelea kubofya. Kila bofya linaanzisha mstari unaofuata kutoka mwisho wa wa mwisho.
5. Funga muhtasari kwa kubofya nukta ya kwanza tena. Mistari ikifunga kitanzi bapa, kinajazwa na uso na zana inaacha kuunganisha. Bonyeza {{key:Esc}} ili kusimama wakati wowote.

Mistari inafuata mielekeo nyekundu, kijani na bluu unapokaribia; mstari unageuka rangi hiyo na kidokezo kinasema "Kwenye mhimili mwekundu". Tazama [Kuelekeza na kunasa](topic:inference) kwa jinsi ya kufunga mwelekeo na kunasa kwenye nukta.

### Mstari unakwenda wapi usipogusa chochote

- Mstari unaoanzia kwenye uso unabaki kwenye ndege ya uso huo.
- Mstari unaoanzia ardhini, au angani tupu, unabaki sawa na nukta yake ya kuanzia. Ukiangalia modeli kwa ukingo, unaenda kwenye ndege wima inayokutazama badala yake.
- Ili kuchora mstari hadi mahali kamili, andika nukta: `[x,y,z]` kwa nukta ndani ya modeli, au `<dx,dy,dz>` kwa mkengeuko kutoka mwanzo. Tazama [Andika ukubwa kamili](topic:value-box).

## Gawanya uso

Chora mstari kuvuka uso, kutoka kingo moja hadi nyingine (au kutoka kingo hadi kingo kupitia mistari mingine). Uso unagawanyika mara mbili. Kila kipande kinabaki na upande wake na rangi yake. Hali hiyo hiyo inatumika kwa mstatili au duara lililochorwa juu ya uso: umbo linakuwa uso wake ndani ya ule mkubwa, ambao sasa una tundu.

Hivi ndivyo unavyopanga vyumba kwenye bamba la sakafu, dirisha kwenye ukuta, au hatua kwenye ngazi: chora muhtasari kwenye uso, kisha sukuma au vuta uso mpya.

## Nyuso zinazotazama upande mbaya

Kila uso una mbele na nyuma. Nyuma inaonekana kijivu-bluu. Nyuso zilizochorwa ardhini zinatazama juu; nyuso zilizochorwa juu ya uso mwingine zinatazama upande ule ule ambao uso huo unatazama.

Ikiwa uso unaonyesha nyuma mahali unapotarajia mbele, uchague kisha bofya {{ui:Geuza uso}} katika {{ui:Taarifa ya kitu}}.

## Unachokiona unapochora

- Alama yenye rangi mahali kielekezi kinanasa, na jina lake kwenye kidokezo chini kushoto.
- Onyesho la kukagua la mstari au umbo.
- Ukubwa wa moja kwa moja katika kisanduku cha thamani. Unaweza kuandika juu yake wakati wowote.

## Ikiwa umbo haliko pale ulipotarajia

- Kwenye skrini ya kugusa, tazama [Utatuzi](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Ikiwa mstari umenasa kwenye kitu cha mbali nyuma, zungusha kidogo: nukta zilizofichwa nyuma ya uso hazinasi kamwe, lakini nukta zilizo kwenye kingo yake zinanasa.
- Bonyeza {{key:Mod+Z}} kutendua umbo la mwisho; kutendua moja kunaondoa mstari mmoja au umbo moja.
