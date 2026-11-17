---
title: Ainas atvēršana citā programmā
summary: Saglabājiet ainu kā USD vai glTF failu jebkurai programmai, kas tos lasa, vai atveriet to no Studio programmā šajā datorā.
keywords: atvērt ar, usd, gltf, glb, eksportēt, renderēšanas programma, archviz, studio, usdview, sūtīt, nodošana, pakotne, unreal mape
from: 812329d5
---

Izvēlieties ierakstu **Atvērt ar** dzinēju sarakstā {{ui:Renderēt attēlu…}}, lai nogādātu ainu citā programmā. Nekas neatgriežas modelī.

## Fails jebkurai programmai

- **USD fails** saglabā ainu kā `.usdc` (vai `.usdz`, ja modelis satur attēlus): tas pats fails kā [Saglabāt kā USD](topic:usd), ar materiāliem, lampām un kamerām. Tas saglabā instancēšanu un precīzas materiālu vērtības. Vairums renderētāju, spēļu dzinēju un skatītāju lasa USD.
- **glTF fails (.glb)** saglabā vieglāku glTF 2.0 failu ar materiāliem, tekstūrām un lampām; skatiet [Modeļa eksportēšana citām programmām](topic:export-model), lai redzētu formātus, ko raksta ModelCraft.
- **Unreal projekta mape (.zip)** saglabā mapi, ko raksta [Nosūtīt ainu spēļu dzinējam](topic:render-unreal), projektam jebkurā datorā.

Visi trīs darbojas pārlūkā un Studio.

## Studio: atvēršana programmā

Studio uzskaita programmas, ko atrod šajā datorā un kas var atvērt ainu: usdview, ja tā ir jūsu meklēšanas ceļā, un datora pašas programmas attiecīgajam failu tipam. Izvēlieties vienu, izvēlieties USD vai glTF, kur tā lasa abus, un noklikšķiniet {{ui:Renderēt}}. Studio raksta pakotni jaunā mapē dokumentos (`CadCraft hand-off`; nekas netiek pārrakstīts, katrai nosūtīšanai ir sava mape) un palaiž programmu ar to, tad parāda, kur atrodas faili.

| Programma | Labāk lasa |
|---|---|
| usdview | USD |
| Datora pašas programma | Ko vien dators ir šim failu tipam |

Studio palaiž tikai programmas no šī fiksētā saraksta; tā nepalaiž neko, ko lapa pieprasa pēc nosaukuma, un nekad nepalaiž programmu ar GNU GPL licenci (skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program#programs-cadcraft-never-runs)). Jebkura programma, kas lasa USD vai glTF, atver failu no **Fails jebkurai programmai** iepriekš.

:::note
Twinmotion, Enscape un citas vizualizācijas programmas nav sarakstā: CadCraft ar tām nav pārbaudīts, un par tām nekas netiek apgalvots. GlTF vai USD fails no šejienes ir ceļš uz tām.
:::
