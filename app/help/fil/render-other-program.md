---
title: Iguhit ang larawan gamit ang ibang program
summary: Ang sarili nating path tracer ang gumuguhit ng Render na larawan; ang ibang program ay maaaring gumuhit lamang sa pamamagitan ng render-engine add-on sa CadCraft Studio. Ano ang nadadala, at bakit may ilang program na hindi kailanman iniaalok.
keywords: render, engine, ibang program, add-on engine, studio, background, queue, usd, gltf, iginuhit ng, blender, gpl
from: 150f94f1
---

Ang larawan sa {{ui:I-render ang larawan…}} ay iginuguhit ng **sarili nating mga engine**: ang Fast at ang Path tracer, sa browser at sa CadCraft Studio. Maaaring gumuhit ng larawan ang ibang program lamang kapag dinala ito ng isang **render-engine add-on**: tingnan ang [Magdagdag ng render engine gamit ang add-on](topic:render-engine-addons). Para dalhin ang eksena sa ibang program at magpatuloy doon, gamitin ang [Buksan ang eksena sa ibang program](topic:render-open-in) o [Ipadala ang eksena sa game engine](topic:render-unreal).

## Gumuhit ng larawan gamit ang engine ng add-on

1. I-on ang add-on sa Mga setting › Mga Add-on. Lalabas ang engine nito sa listahan ng Engine ng {{ui:I-render ang larawan…}}.
2. Piliin ito. Lalabas ang sarili nitong mga setting sa ilalim ng listahan ng Engine.
3. I-click ang {{ui:I-render}}. Sa Studio, sa unang pagpapatakbo ng add-on ng isang program, nagtatanong ang Studio sa sarili nitong dialog. Nakikita ang progreso habang gumuguhit; tinatapos ito ng {{ui:Itigil}}. Lalabas ang larawan na may markang engine na gumuhit dito.

Tumatakbo rin sa browser ang engine na nakasulat sa JavaScript. Ang engine na nagpapatakbo ng program sa computer na ito ay tumatakbo lamang sa Studio; sa browser, lumalabas ito bilang file na ise-save.

## Ano ang nadadala

Tumatanggap ang engine ng **package**: ang model bilang USD file (at glTF file kapag hinihingi nito), at isang settings file na may eksaktong halaga ng materyal, ang araw at langit, bawat lamp na naka-on kasama ang lakas at light profile nito, ang camera at ang exposure. Nagliliwanag, nagtatono at nagsa-sample ang bawat program sa sarili nitong paraan, kaya magkakatulad sa camera, araw, lamp at exposure ang mga larawan, pero hindi pixel sa pixel.

## Mga program na hindi kailanman pinapatakbo ng CadCraft

Hindi kailanman nagsisimula ang CadCraft ng program sa ilalim ng GNU GPL na lisensya, at hindi kailanman inililista ito bilang engine o bilang target ng Buksan sa. Isa ang Blender sa mga ito, kaya wala ito sa listahan ng Engine. Ang USD o glTF file na sine-save mula sa {{ui:I-render ang larawan…}} ay mabubuksan pa rin dito gaya ng sa anumang program na nagbabasa ng mga file na iyon.

:::note
Hindi naipapadala sa ibang program ang panorama at stereo camera at ang larawan ng langit (ginagamit ang mga kulay ng langit sa halip). Walang bumabalik sa model ng anumang ginawa sa ibang program.
:::
