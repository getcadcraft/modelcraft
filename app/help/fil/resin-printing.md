---
title: I-slice para sa resin printer
summary: I-slice ang bed ng print stage para sa resin printer, gawing guwang at lagyan ng support ang piyesa, tingnan ang mga layer, i-save ang file ng printer, at hanapin ang iyong exposure gamit ang exposure test.
keywords: resin, magmungkahi ng tilt, suction cup, lakas ng pagbalat, pag-brace, resin printing, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, guwang, butas ng bentilasyon, raft, supports, pagsubok ng exposure, hagdan ng exposure, kalibrasyon, mga layer, add-on
from: 8cc12858
---

Hinahati ng mga resin add-on sa mga layer picture para sa screen ng iyong printer ang nasa print bed, at sine-save ang file na binabasa ng iyong printer. Libre ang mga ito, walang naka-lock, at naka-off hanggang i-on mo.

:::note
Wala pang file na nasubukan sa totoong printer. Binasa lamang ang mga file ng sarili nating reader ng CadCraft, at bago pa ang mga support. Suriin ang mga layer, at patakbuhin ang unang print nang manu-mano.
:::

## Ano ang gagawin mo

I-slice ang isang piyesa para sa resin, suriin ang mga layer, i-save ang file, at kopyahin ito sa iyong printer.

## Mga hakbang

1. Buksan ang {{ui:Mga setting}} › {{ui:Mga Add-on}} at i-on ang resin slicer add-on at ang add-on para sa file format ng iyong printer (Elegoo GOO, SL1, Chitubox, o Anycubic). Maaari mo ring pindutin ang {{ui:Add resin printing}} sa card ng Print stage.
2. Ilagay ang iyong piyesa sa bed gaya ng nasa [Ilagay ang mga bagay sa print bed](topic:print-stage), saka piliin ang {{ui:Resin}} sa tabi ng **Pag-print gamit ang**.
3. Sa ilalim ng **Mga setting ng resin print**, piliin ang iyong **Printer** at ang iyong **Resin**. Ipinapakita ng card ang laki ng screen sa pixels. Ito ang nakalathalang sukat ng gumawa, kaya suriin ang sa iyo; maaari mo itong i-edit sa ilalim ng Custom.
4. Itakda ang **Layer height (mm)**, **Exposure (s)** at **Bottom exposure (s)**. Ang mga numero para sa bawat resin ay panimulang punto lamang.
5. Lagyan ng tsek ang **Gawing guwang, na may vent hole** kung gusto mo ng guwang na piyesa, at itakda ang **Kapal ng pader (mm)** at **Lapad ng butas (mm)**.
6. Lagyan ng tsek ang **Supports at raft**, at piliin ang **Density ng support**: Magaan, Katamtaman o Mabigat.
7. Piliin ang **File format**. Kung sinasabi ng card na wala pang naidagdag, pindutin ang button na may nakasulat na Idagdag at ang pangalan ng format.
8. Pindutin ang {{ui:I-preview ang mga layer}} at ilipat ang slider na **Layer**. Nilalagyan ng bilog ang mga nakalutang na piyesa. Ibinibigay ng linya sa ilalim nito ang bilang ng mga layer, oras, at ang resin sa mL, gramo at gastos.
9. Pindutin ang {{ui:I-save ang print file}}, suriin ang summary at pindutin ang {{ui:I-save}}. Kopyahin ang file sa iyong printer.

## Tilt, suction cup, brace at figure ng pagbalat

Ang apat na ito ay tantiya mula sa hugis ng piyesa. Wala pang nasubukan sa totoong printer ang alinman sa mga ito, kaya ituring ang bawat isa bilang pahiwatig at tingnan ang mga layer.

1. Pindutin ang {{ui:Magmungkahi ng tilt}} sa ilalim ng **Tilt (degrees)**. Sinusubukan ng CadCraft ang mga tilt mula 0 hanggang 60 digri at pinipili ang may pinakamaliit na pinakamalaking layer, pinakakaunting nakausling surface, at walang suction cup. Itinatakda nito ang **Tilt (degrees)** at sinasabi kung ano ang nakita nito. Ang mga timbang ng scoring ay atin, hindi ng gumawa ng printer.
2. Pagkatapos ng {{ui:I-preview ang mga layer}}, may babalang nagbabanggit ng mga cavity na bumubukas lamang patungo sa film. Maaaring humawak ng suction ang ganitong cavity kapag nagbalat ang isang layer. I-tilt ang piyesa o magdagdag ng butas. Hindi nakikita ang mga pocket na mas makitid kaysa sa laki ng cell sa babala.
3. Kapag naka-on ang **Supports at raft**, lagyan ng tsek ang **Brace tall supports** para magdagdag ng cross brace sa pagitan ng matataas at manipis na haligi.
4. Ibinibigay ng linya sa ilalim ng preview ang pinakamalaking layer sa cm2. Nagpapakita lamang ito ng puwersa kung maglalagay ka ng **Stress sa pagbalat na sinukat mo** sa ilalim ng **Bottom layers, lift at speeds**. Kung walang sarili mong sinukat na numero, lugar lamang ang ipinapakita nito.

## Hanapin ang iyong exposure

1. I-on ang exposure test add-on sa {{ui:Mga setting}} › {{ui:Mga Add-on}}.
2. Pindutin ang {{ui:Ilagay ang test part sa bed}}.
3. Pindutin ang {{ui:I-save ang exposure ladder}}. Makakakuha ka ng isang file para sa bawat exposure, nasa zip.
4. I-print ang bawat file gamit ang parehong resin, at itago ang exposure na may pinakamatalas na manipis na haligi at bukas na butas.

## Mga tala

- Tumatakbo sa background ang slicing, kaya magagamit pa rin ang page sa malaking plato.
- Hindi isinasama ang mga piyesang hindi saradong solid, at sinasabi ito ng card.
- Kung tumatanggi ang iyong printer sa isang file, may mga opsyon ang format card para sa mga bagay na iniiwan ng format na bukas. Baguhin ang isa, i-save muli, at sabihin sa amin kung alin ang gumana.
- Hindi isinusulat ang mga bersyon ng Anycubic na 517 at 518.
