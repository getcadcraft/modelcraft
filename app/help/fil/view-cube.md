---
title: Ang view cube
summary: I-click ang face, edge o sulok ng cube sa sulok ng view para tumingin mula roon, i-drag ito para umikot, paikutin ang compass ring, lumipat sa paligid ng face-on view, at bumalik sa home.
keywords: view cube, viewcube, cube, compass, north, home view, standard views, top, front, right, iso, corner, edge, orbit, rotate view, axis icon, corner indicator, nabigasyon
from: e1ec1347
---

Nasa kanang itaas ng 3D view ang view cube. Umiikot ito kasama ng view, kaya laging ipinapakita nito kung saang direksyon ka tumitingin: ang {{ui:Top}} ay nasa itaas, ang {{ui:Front}} ay nakaharap sa timog (tumitingin ka sa hilaga, sa kahabaan ng berdeng axis, kapag tinitingnan mo ito), ang {{ui:Kanan}} ay nakaharap sa silangan (pulang axis). Nananatili itong transparent hanggang ituro mo ito.

## Tumingin mula sa gilid, edge o sulok

1. Ituro ang cube. Lumiliwanag ang bahaging nasa ilalim ng pointer: ang gitna ng face, isang edge (lumiliwanag ito sa parehong face na nagbabahagi nito) o isang sulok (sa lahat ng tatlong face).
2. I-click ito. Iikot ang view para tumingin mula roon, pinananatili ang parehong gitna at zoom.

May 26 na puwedeng i-click: 6 face ({{ui:Top}}, {{ui:Ibaba}}, {{ui:Front}}, {{ui:Likod}}, {{ui:Kaliwa}}, {{ui:Kanan}}), 12 edge at 8 sulok. Ang sulok ay nagbibigay ng klasikong three-quarter view; ang edge ay tumitingin sa gitna ng dalawang face.

Ang pag-click sa {{ui:Front}} ay katulad ng {{ui:Views}}, {{ui:Front}} sa toolbar, nang walang zoom to fit. Nag-zo-zoom pa rin ang {{ui:Views}} sa buong model.

## I-orbit sa pag-drag ng cube

I-drag ang cube para paikutin ang view, pareho ng pag-orbit sa mismong view. Hindi kailanman itinuturing na click ang drag, kaya maaari mong hawakan ang cube kahit saan.

## Ang compass ring

Nasa ilalim ng cube ang ring na may N, E, S at W.

- **I-drag ang ring** para paikutin ang model sa patayong axis, na parang nakatayo ito sa turntable. Sumusunod ang ring sa pointer.
- **I-click ang isang letra** para tumingin mula sa gilid na iyon, pinananatili kung gaano ka katarik tumingin pababa. Sa view mula diretso sa itaas, ang letrang na-click mo ay mapupunta sa ibaba ng screen.

## Mga face-on view: mga arrow

Kapag diretso kang tumitingin sa isang face, lumilitaw ang maliliit na arrow sa paligid ng cube:

- Ang apat na **triangle** ay ililipat ang face sa gilid na iyon sa harap: ang triangle sa itaas ng cube ay nagpapakita ng face na dating nasa itaas, at iba pa.
- Ang dalawang **curved arrow** sa kanang itaas ay iikot sa larawan ng isang kapat na pagliko pakanan o pakaliwa, nang hindi binabago kung aling face ang tinitingnan mo. Gamitin ang mga ito para paikutin ang plano para tumakbo ang mahabang pader sa screen.

## Home

Ibinabalik ng house button sa kaliwang itaas ng cube ang three-quarter na {{ui:Iso}} view at ikinakasya ang buong model. Ginagawa rin ito ng {{key:Home}} habang nasa cube ang keyboard focus.

## Gamit ang keyboard

Pindutin ang {{key:Tab}} para mapunta sa cube, saka:

| Key | Ginagawa |
|---|---|
| {{key:left}} / {{key:right}} | pumili ng gilid, edge o sulok sa paligid ng cube, sa hakbang na tig-1/8 na pagliko (sinasabi ng screen reader kung alin) |
| {{key:up}} / {{key:down}} | pumili ng mas mataas o mas mababa, hanggang {{ui:Top}} o pababa hanggang {{ui:Ibaba}} |
| {{key:Enter}} o {{key:Space}} | tumingin mula sa napili |
| {{key:Shift+left}} / {{key:Shift+right}} | paikutin ang view nang isang kapat na pagliko sa patayong axis |
| {{key:Home}} | ang home view |
| {{key:Esc}} | umalis sa cube |

Ang mga key na pinindot sa cube ay nananatili sa cube: hindi nila sinisimulan ang mga tool ng ModelCraft.

## Axis icon o wala

Buksan ang {{ui:Mga setting}} ({{key:Mod+,}}), ang tab na {{ui:ModelCraft}}, at itakda ang **Indicator sa sulok** sa {{ui:View cube}} (ang panimula), {{ui:Axis icon}} (maliit na marker na X, Y, Z sa kaliwang ibaba: X pula, Y berde, Z asul) o {{ui:Wala}}. Naaalala ng browser na ito ang pinili. Tingnan ang [Mga setting ng ModelCraft](topic:settings#corner-indicator).

:::note
Walang roll ang ModelCraft: maliban sa view na diretso pababa at diretso pataas, laging pataas sa screen ang pataas sa model. Maaaring paikutin ng cube at ng curved arrow ang plan view; hindi nila maitatagilid ang side view sa gilid nito.
:::
