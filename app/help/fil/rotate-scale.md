---
title: I-rotate at i-scale
summary: Paikutin ang mga bagay sa paligid ng isang punto sa pamamagitan ng pag-click o pag-type ng degrees, at baguhin ang laki nila nang pantay ayon sa factor.
keywords: scale grips, stretch, hindi pantay, bawat axis, flip, mirror, mirrored copy, flip along, rotate, turn, anggulo, degrees, protractor, scale, baguhin ang laki, palakihin, paliitin, factor, pantay na scale
from: 45cdcb49
---

## I-rotate

{{ui:I-rotate}} ({{key:Q}}) ay nagpapaikot sa napili sa paligid ng center point. Tatlong click ito: ang center, ang panimulang direksyon, at ang dulong direksyon.

1. Piliin ang gusto mong paikutin. Kung walang napili, kukunin ng Rotate ang bagay na i-click mo muna.
2. Pindutin ang {{key:Q}}. May singsing na sumusunod sa pointer, na nagpapakita ng eroplanong paikutan mo.
3. I-click ang center ng rotation.
   - Sa lupa o sa walang lamang espasyo, nakahiga nang pahalang ang singsing (asul): ang pag-ikot ay sa paligid ng vertical axis, gaya ng pag-ikot ng gusali sa lote nito.
   - Sa isang face, nasa eroplano ng face na iyon ang singsing: ang pag-ikot ay sa sariling direksyon ng face. I-click ang pader para paikutin ang isang bagay sa paligid ng horizontal axis.
4. I-click ang isang punto na nagtatakda kung saan magsisimula ang anggulo, halimbawa sa isang gilid ng bagay na iniikot.
5. Igalaw ang pointer sa paligid ng center. Lumalabas ang anggulo sa tip at sa value box ({{ui:Anggulo}}). Nagka-click ito sa mga hakbang na 15° kapag malapit ka sa isa.
6. I-click para tapusin, o i-type ang anggulo sa degrees at pindutin ang {{key:Enter}}: `90`, `45`, `-30`.

   Ang positibong anggulo ay umiikot pakaliwa (counterclockwise), tingnan mula sa gilid na nakaharap ang singsing.

Pindutin ang {{key:Ctrl}} (o {{key:Alt}}) habang nagro-rotate para paikutin ang **kopya** at iwan ang orihinal sa dati nitong lugar, gaya ng sa Ilipat; sinasabi ng tip kung naka-on ang copy, at ang muling pagpindot sa key ay pinapatay ito. I-type ang `3x` pagkatapos ng naka-rotate na kopya para sa mas maraming kopya sa paligid ng parehong center.

Gaya ng Ilipat, ang pag-ikot ng bahagi ng magkakadikit na geometry ay nagpapaikot din sa mga face na nakakabit dito. I-group muna ang mga bagay para paikutin silang buo.

:::note
Sinasabi ng tip na pumipili ng rotation axis ang mga arrow key, pero sa build na ito ay pinapaikot nila ang view bago ang unang click. Para pumili ng axis, i-click ang center sa face na nakaharap sa direksyong gusto mo. Tingnan ang [Hindi pa tapos](topic:not-built-yet).
:::

## Scale

{{ui:Scale}} ({{key:S}}) ay binabago ang laki ng napili. Piliin muna ang gusto mong baguhin ang laki, saka pindutin ang {{key:S}}: lumilitaw ang maliliit na parisukat (grip) sa mga sulok, sa mga gitna ng gilid, at sa mga gitna ng mga gilid ng box nito.

### I-stretch o i-scale gamit ang mga grip

- Ang grip sa **sulok** ay nagsa-scale nang pantay sa lahat ng direksyon, tungkol sa kabilang sulok.
- Ang grip sa gitna ng isang **gilid** ay nag-i-stretch sa direksyong iyon lang, tungkol sa kabilang gilid: pahabain ang box nang hindi ito ginagawang mas mataas.
- Ang grip sa gitna ng isang **gilid ng box** ay nag-i-stretch sa dalawang direksyong nasa magkabilang panig nito.
- Pindutin ang {{key:Ctrl}} kapag nag-click ka ng grip para mag-scale tungkol sa gitna ng box.

I-click ang grip, igalaw ang pointer, at i-click muli; o i-click ang grip at i-type ang factor (`2` para doble, `0.5` para kalahati) at pindutin ang {{key:Enter}}. Para bigyan ang bawat direksyon ng sariling factor, i-type ang tatlo, para sa pula, berde at asul: `2,1,0.5`. Sa loob ng bukas na group, ang mga direksyon ay sa group mismo.

### I-scale tungkol sa anumang punto

I-click kahit saan maliban sa grip para mag-scale nang pantay tungkol sa punto ng sarili mong pagpili. Tatlong click ito:

1. Piliin ang gusto mong baguhin ang laki. Kung walang napili, kukunin ng Scale ang bagay na i-click mo muna.
2. Pindutin ang {{key:S}}.
3. I-click ang punto na mananatili (hindi sa grip), halimbawa ang ilalim na sulok.
4. I-click ang reference point. Ang distansya nito mula sa unang punto ay binibilang bilang 1×.
5. Igalaw ang pointer palapit o palayo sa unang punto. Lumalabas ang factor sa tip at sa value box ({{ui:Scale}}).
6. I-click para tapusin, o i-type ang factor at pindutin ang {{key:Enter}}: ang `2` ay nagdodoble ng laki, ang `0.5` ay naghahati nito sa kalahati.

### I-scale sa eksaktong laki

Para gawing eksaktong haba ang isang bagay, kalkulahin ang factor: bagong haba hati sa kasalukuyang haba. Sa three-click mode, nagagawa ng value box ang aritmetika, kaya i-type ang `4.2/3.6` para gawing 4.2 m ang 3.6 m na pader. Ang value box ng grip ay tumatanggap lamang ng plain na numero: kalkulahin muna ang factor (ang 4.2 hati sa 3.6 ay mga 1.1667). Piliin muna ang gilid para mabasa ang kasalukuyang haba nito sa {{ui:Impormasyon ng entity}}.

### Ayusin ang import na maling laki

Walang unit ang OBJ file, kaya ang model na iginuhit sa millimeters ay pumapasok nang 1000 beses na mas malaki. Piliin ang na-import na group, pindutin ang {{key:S}}, i-click ang corner grip, at i-type ang `0.001` at pindutin ang {{key:Enter}}. Para sa model na iginuhit sa inches, i-type ang `0.0254`.

## Mga dapat malaman

- Ang pag-scale tungkol sa punto gamit ang tatlong click ay pantay. Para mag-stretch sa isang direksyon lang, gamitin ang grip sa gilid o sa edge (tingnan sa itaas).
- Ang pag-scale ng group o component ay nagbabago sa kopyang na-scale mo; nananatili ang laki ng ibang kopya ng component.
- Pindutin ang {{key:Esc}} bago ang huling click para kanselahin.

## I-flip

{{ui:Edit}} › {{ui:Iba pa}} › {{ui:I-flip sa kahabaan ng pula}}, {{ui:I-flip sa kahabaan ng berde}} o {{ui:I-flip sa kahabaan ng asul}} ay sinasalamin ang napili sa lugar nito, sa gitna ng box nito: ang hagdang pakaliwa ay nagiging pakanan. Nakaharap pa rin palabas ang mga face, at ang group o component ay sinasalamin nang buo (hindi isinusulat muli ang loob nito).

{{ui:Naka-flip na kopya sa kahabaan ng pula}} (at berde, asul) ay iniiwan ang orihinal sa dati nitong lugar at naglalagay ng nasalaming kopya sa tabi nito, sa kabilang gilid ng box ng napili: ang kabilang pinto ng isang pares, ang kabilang pakpak ng gusali. Ang maluwag na geometry na dumadampi roon ay sumasali sa orihinal, gaya ng laging ginagawa ng nakadikit na geometry; gawing group muna ang orihinal para manatili silang hiwalay.

Sa loob ng bukas na group, ang pula, berde at asul ay sariling axis ng group.
