---
title: I-slice para sa resin printer
summary: I-slice ang print bed ng print stage para sa resin printer, gawing hollow at lagyan ng support ang piyesa, tingnan ang mga layer, i-save ang file ng printer, at hanapin ang exposure gamit ang exposure test.
keywords: resin, resin printing, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, hollow, butas ng bentilasyon, raft, supports, exposure test, exposure ladder, calibration, layers, add-on
from: 83c394e1
---

Ang mga resin add-on ang nag-i-slice ng nasa print bed sa mga layer na larawan para sa screen ng printer mo, at ise-save ang file na binabasa ng printer mo. Libre ang mga ito, walang naka-lock, at naka-off hanggang i-on mo.

:::note
Wala pang file na naipasok sa totoong printer. Binasa lang ang mga file ng sariling reader ng CadCraft, at bago pa ang mga support. Tingnan ang mga layer, at patakbuhin nang manu-mano ang unang print mo.
:::

## Ang gagawin mo

I-slice ang piyesa para sa resin, tingnan ang mga layer, i-save ang file at kopyahin ito sa printer mo.

## Mga hakbang

1. Buksan ang {{ui:Mga setting}} › {{ui:Mga Add-on}} at i-on ang resin slicer add-on at ang add-on para sa file format ng printer mo (Elegoo GOO, SL1, Chitubox, o Anycubic). Maaari mo ring pindutin ang {{ui:Idagdag ang resin printing}} sa Print stage card.
2. Ilagay ang piyesa mo sa bed gaya ng sa [Paglalagay ng mga bagay sa print bed](topic:print-stage), pagkatapos piliin ang {{ui:Resin}} sa tabi ng **Pag-print gamit ang**.
3. Sa ilalim ng **Mga setting ng resin print**, piliin ang iyong **Printer** at ang iyong **Resin**. Ipinapakita ng card ang laki ng screen sa pixel. Ito ang nailathalang laki ng gumawa, kaya tingnan ang sa iyo; maaari mo itong i-edit sa ilalim ng Custom.
4. Itakda ang **Taas ng layer (mm)**, **Exposure (s)** at **Bottom exposure (s)**. Panimulang punto lang ang mga numero para sa bawat resin.
5. Lagyan ng tsek ang **Gawing hollow, may butas ng bentilasyon** kung gusto mo ng hollow na piyesa, at itakda ang **Pader (mm)** at **Lapad ng butas (mm)**.
6. Lagyan ng tsek ang **Supports at raft**, at piliin ang **Density ng support**: Magaan, Katamtaman o Mabigat.
7. Piliin ang **File format**. Kung sinasabi ng card na wala pang naidadagdag, pindutin ang button na may nakasulat na Idagdag at ang pangalan ng format.
8. Pindutin ang {{ui:I-preview ang mga layer}} at ilipat ang **Layer** slider. Nilalagyan ng singsing ang mga lumulutang na piraso. Ibinibigay ng linya sa ilalim nito ang mga layer, oras, at ang resin sa mL, gramo, at gastos.
9. Pindutin ang {{ui:I-save ang print file}}, tingnan ang buod, at pindutin ang {{ui:I-save}}. Kopyahin ang file sa printer mo.

## Hanapin ang exposure mo

1. I-on ang exposure test add-on sa {{ui:Mga setting}} › {{ui:Mga Add-on}}.
2. Pindutin ang {{ui:Ilagay ang test part sa bed}}.
3. Pindutin ang {{ui:I-save ang exposure ladder}}. Makakakuha ka ng isang file para sa bawat exposure, sa isang zip.
4. I-print ang bawat file gamit ang parehong resin, at panatilihin ang exposure na may pinakamatalas na manipis na haligi at bukas na butas.

## Mga tala

- Tumatakbo sa background ang slicing, kaya magagamit pa rin ang page sa malaking plate.
- Hindi isinasama ang mga piraso na hindi saradong solid, at sinasabi ito ng card.
- Kung tumanggi ang printer mo sa isang file, may mga opsyon ang format card para sa mga bagay na hindi tinukoy ng format. Baguhin ang isa, i-save muli, at sabihin sa amin kung alin ang gumana.
- Hindi isinusulat ang Anycubic na bersyon 517 at 518.
