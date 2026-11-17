---
title: Mga section plane: hiwain nang bukas ang model
summary: Maglagay ng section plane para makita ang loob ng model, i-slide ito, baligtarin, o i-off ang cut.
keywords: section, section plane, section cut, cut, cutaway, clip, loob, floor plan, slice, cross section
from: 28c3a645
---

Hinihiwa ng section plane ang model nang bukas, para makita at makapagtrabaho ka sa loob nito: isang floor plan ng bahay, ang loob ng cabinet. Hindi binabago ang model; view lang ang cut.

## Maglagay ng isa

1. I-click ang {{ui:Section}} sa {{ui:Camera}} group.
2. I-click ang isang face. Nakalagay ang plane sa face na iyon, na may apat na arrow na nakaharap sa iyo.

   I-click sa labas ng anumang face para sa plane na parisukat sa direksyong pinakamadalas mong tinitingnan. Pindutin muna ang arrow key para itayo ito nang parisukat sa pula ({{key:Right}}), berde ({{key:Left}}) o asul ({{key:Up}}) sa halip.

Ang panig na tinututukan ng mga arrow ay **tinatanggal**. Hindi pa pumuputol ang plane na nakalagay sa isang face: i-slide ito papasok sa model.

## I-slide, baligtarin, i-off

I-click ang outline ng plane para piliin ito. Sa {{ui:Impormasyon ng entity}}:

- {{ui:Sa kahabaan ng mga arrow nito}} ang nagsasabi kung nasaan ito. I-type ang bagong distansya at pindutin ang {{key:Enter}} para i-slide ito sa model; ang pag-type ng `-1m` sa plane na inilagay mo sa harap na face ay inililipat ito ng 1 m papasok sa model.
- Ang {{ui:Baligtarin}} ay pinapaikot ang mga arrow, kaya ang kabilang panig ang natatanggal.
- {{ui:Aktibo (pumuputol sa model)}}: isang plane lang ang pumuputol sa bawat pagkakataon. Lagyan ng tsek ang kahon ng ibang plane, o maglagay ng bago, at iyon ang puputol sa halip.
- Palitan ang pangalan nito sa {{ui:Pangalan}}; burahin ito gamit ang {{key:Delete}} o ang {{ui:Eraser}}.

Kung saan dumaraan ang plane sa saradong solid, pinupuno ng madilim na kulay ang cut. Ang geometry na hindi sarado (isang face, isang bukas na kahon) ay napuputol pero hindi napupuno.

## Ipakita at itago

Sa {{ui:Views}}:

- Itinatago ng {{ui:Ipakita ang section planes}} ang outline at arrow ng mga plane (nananatili ang cut).
- Ina-off ng {{ui:Ipakita ang section cuts}} ang cut at ipinapakita ang buong model, nang hindi binubura ang mga plane.

Itinatago rin ng [presentation view](topic:styles-shadows#presentation-view) ang mga outline.

## Mga dapat malaman

- Hindi maki-click o ma-snap ang tinanggal sa paghiwa, kaya maaari kang gumuhit sa ipinapakita ng cut.
- Naka-save sa ModelCraft file ang mga section plane, kung alin ang aktibo, at ang dalawang switch. Ang bawat pagbabago ay isang undo step.
- Laging kasama sa mga export ang buong model: ang section ay view, hindi edit.
