---
title: Buksan ang eksena sa ibang program
summary: I-save ang eksena bilang USD file o glTF file para sa anumang program na nagbabasa nito, o buksan ito mula sa Studio sa isang program sa computer na ito.
keywords: buksan sa, open in, usd, gltf, glb, export, rendering program, archviz, studio, usdview, ipadala, hand-off, package, unreal folder
from: 812329d5
---

Pumili ng entry na **Buksan sa** sa listahan ng Engine ng {{ui:I-render ang larawan…}} para dalhin ang eksena sa ibang program. Walang bumabalik sa model.

## Isang file para sa anumang program

- **USD file** ay nagse-save ng eksena bilang `.usdc` (o `.usdz` kapag may kasamang larawan ang model): ang [kaparehong file ng Save as USD](topic:usd), kasama ang mga materyal, lamp at camera. Pinananatili nito ang instancing at ang eksaktong halaga ng materyal. Karamihan ng renderer, game engine at viewer ay nagbabasa ng USD.
- **glTF file (.glb)** ay nagse-save ng mas magaan na glTF 2.0 file na may materyal, texture at lamp; tingnan ang [I-export ang model para sa ibang program](topic:export-model) para sa mga format na isinusulat ng ModelCraft.

- **Unreal project folder (.zip)** ay nagse-save ng folder na isinusulat ng [Ipadala ang eksena sa game engine](topic:render-unreal), para sa project sa anumang computer.

Gumagana ang tatlong ito sa browser at sa Studio.

## Sa Studio: buksan ito sa isang program

Inililista ng Studio ang mga program na nakikita nito sa computer na ito at kayang magbukas ng eksena: ang usdview kung nasa search path mo ito, at ang sariling program ng computer para sa file type. Pumili ng isa, piliin ang USD o glTF kung parehong binabasa nito, at i-click ang {{ui:Render}}. Isinusulat ng Studio ang package sa bagong folder sa ilalim ng Documents (`CadCraft hand-off`; walang na-o-overwrite, bawat pagpapadala ay may sariling folder) at sinisimulan ang program dito, pagkatapos ay sinasabi kung nasaan ang mga file.

| Program | Pinakamahusay na nababasa |
|---|---|
| usdview | USD |
| Sariling program ng computer | Kung ano ang mayroon ang computer para sa file type |

Ang Studio ay nagsisimula lamang ng mga program mula sa nakapirming listahang ito; hindi nito pinapatakbo ang anumang hinihingi ng pahina sa pangalan, at hindi ito kailanman nagsisimula ng program sa ilalim ng GNU GPL na lisensya (tingnan ang [Iguhit ang larawan gamit ang ibang program](topic:render-other-program#programs-cadcraft-never-runs)). Anumang program na nagbabasa ng USD o glTF ay magbubukas ng file mula sa **Isang file para sa anumang program** sa itaas.

:::note
Wala sa listahan ang Twinmotion, Enscape at iba pang visualization program: hindi pa nasusuri ang CadCraft sa mga ito at wala kaming sinasabi tungkol sa mga ito. Ang glTF o USD file mula rito ang daan papasok.
:::
