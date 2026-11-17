---
title: Vitu vya mkunjo
summary: Chora mikunjo ya Bézier, NURBS na sehemu zilizonyooka, ipe unene, upana au kupungua taratibu, jaza mikunjo bapa, weka maandishi kama mkunjo, na uigeuze kuwa mesh.
keywords: mkunjo, mikunjo, bezier, nurbs, spline, splines, njia, bomba, kebo, kamba, kingo mviringo, bevel, sukuma nje, kupungua, kuinamisha, radius, jaza, wasifu, maandishi, herufi, nembo, mkunjo kuwa mesh
from: 602bf077
---

**Kitu cha mkunjo** ni mkunjo unaounda umbo: bomba linalofuata kando yake (bevel), mkanda (sukuma nje), pembe inayopungua (kupungua taratibu), au — ukiwa bapa na umefungwa — sahani iliyojazwa au herufi. Umbo linafuata mkunjo: sogeza nukta na bomba linasogea nayo. Umbo likiwa sawa, ligeuze kuwa mesh.

## Ongeza mkunjo

Chagua {{ui:Mkunjo}} kwenye orodha ya Nafasi za kazi kisha ubonyeze {{ui:Ongeza}}:

| Aina | Ni nini |
| --- | --- |
| Mkunjo wa Bézier, Duara la Bézier | Unapitia nukta zake; kila nukta ina vipini viwili vinavyoweka mwelekeo wa mkunjo |
| Mkunjo wa NURBS, Duara la NURBS, Njia | Laini, unachorwa kuelekea nukta zake (unaanza na kumaliza kwenye nukta zake za mwisho); kila nukta ina uzito |
| Maandishi | Maandishi yako kama mistari ya herufi bapa, zilizojazwa |

Mkunjo mpya unapata bomba jembamba ili uonekane na uchaguliwe; weka kina chake cha bevel kuwa 0 kwa mkunjo mtupu.

Unaweza pia kuanza kutoka kitu kilichochorwa: chagua upinde, duara, poligoni au mkunjo uliochora kwenye nafasi ya kazi ya Modeli kisha ubonyeze {{ui:Tengeneza kitu cha mkunjo}} kwenye Taarifa ya kitu. Mistari iliyochorwa inabaki.

## Hariri nukta

Bofya mara mbili kitu cha mkunjo (au kichague kisha uchague {{ui:Mkunjo}}) ili uhariri.

- Bofya nukta au kipini (Shift huongeza au kuondoa); buruta ili uisogeze. Buruta kwenye nafasi tupu ili uchague kwa kisanduku.
- {{ui:Refusha}} ({{key:E}}, au {{key:Ctrl}}+bofya) inaongeza nukta baada ya ncha iliyochaguliwa, kwenye kielekezi.
- {{ui:Gawanya}} ({{key:W}}) inaweka nukta kati ya kila jozi ya majirani waliochaguliwa; Bézier inadumisha umbo lake.
- {{ui:Hamisha}}, {{ui:Geuza}}, {{ui:Badilisha ukubwa}} zinasogeza nukta zilizochaguliwa kwa kielekezi (funguo za modeler {{key:G}} {{key:R}} {{key:S}}, funguo za kusukuma/kuvuta {{key:M}} {{key:Q}} {{key:S}}); bofya ili ubakishe, {{key:Esc}} ili kughairi.
- {{ui:Funga}} ({{key:C}}) inafunga spline iliyo wazi au kufungua iliyofungwa; {{ui:Geuza}} ({{key:Shift+R}}) inaiendesha upande mwingine.
- Vipini vya Bézier: {{ui:Lainisha}} ({{key:V}}) vinaviweka kwa mkunjo laini, {{ui:Kona}} ({{key:Shift+V}}) vinaelekeza kwa majirani, {{ui:Huru}} ({{key:Alt+V}}) vinaviacha pale ulipoviweka. Kuburuta kipini kunakifanya huru.
- {{ui:Bézier}}, {{ui:NURBS}} na {{ui:Poly}} zinabadilisha aina ya spline zilizochaguliwa, huku nukta zikibaki.

Kila badiliko ni hatua moja ya kutendua.

## Umbo

Mipangilio iko kwenye paneli (na kwenye Taarifa ya kitu kwenye nafasi ya kazi ya Modeli):

- **Umbo:** mikunjo ya 3D inaenda upande wowote; mkunjo bapa unabaki kwenye ndege yake na unaweza kujazwa.
- **Jaza splines zilizofungwa** (bapa): mistari ya nje inakuwa sahani; mstari ndani ya mwingine ni shimo, hivyo herufi zinabaki na mashimo yake.
- **Sukuma nje:** nusu ya upana wa mkanda (mikunjo iliyo wazi au ya 3D), au nusu ya unene wa sahani (iliyojazwa).
- **Kina cha bevel** na **umviringo:** bomba la mviringo kando ya mkunjo (pamoja na sukuma nje: mkanda wa mviringo); kwenye umbo lililojazwa, ukingo wa mviringo.
- **Funga ncha:** vifuniko kwenye bomba lililo wazi.
- **Kupungua taratibu kando yake:** inabadilisha ukubwa kwa usawa kando ya kila spline, kwa mfano `1, 0.2` kwa pembe, `0, 1, 0` kwa spindle.
- **Ulaini** na, kwa NURBS, **mpangilio**: jinsi inavyochorwa kwa undani, na jinsi ilivyo laini (2 sehemu moja kwa moja … 6 laini zaidi).
- Nukta zikiwa zimechaguliwa: **radius** (unene wa bomba hapo, mara bevel), **kuinamisha** (inazungusha mkanda kuzunguka mkunjo) na, kwa NURBS, **uzito**.

Modifiers zinafanya kazi juu ya kitu cha mkunjo kama kwenye mesh: Safu kando yake, Kioo, uso wa Subdivision. Angalia [Viboreshaji kwenye mesh](topic:modifiers).

## Igeuze kuwa mesh

{{ui:Mesh}} (kwenye nafasi ya kazi ya Mkunjo au kwenye Taarifa ya kitu, {{ui:Mkunjo kuwa mesh}}) inafanya kitu cha mkunjo kuwa mesh inayoonyesha sasa; viboreshaji vyake vinabaki juu yake. Kisha uhariri kwenye nafasi ya kazi ya Mesh. Kutendua kunairudisha nyuma.

Ona pia [Meshi](topic:meshes) na [Hariri mesh](topic:mesh-edit).
