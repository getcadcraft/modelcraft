---
title: De scène openen in een ander programma
summary: Sla de scène op als USD-bestand of glTF-bestand voor elk programma dat ze leest, of open haar vanuit Studio in een programma op deze computer.
keywords: openen in, usd, gltf, glb, exporteren, renderprogramma, archviz, studio, usdview, verzenden, overdracht, pakket, unreal-map
from: 812329d5
---

Kies een item **Openen in** in de lijst Engine van {{ui:Een afbeelding renderen…}} om de scène naar een ander programma te brengen. Er komt niets terug in het model.

## Een bestand voor elk programma

- **USD-bestand** slaat de scène op als `.usdc` (of `.usdz` wanneer het model afbeeldingen bevat): hetzelfde bestand als [Opslaan als USD](topic:usd), met materialen, lampen en camera's. Het behoudt instancing en de exacte materiaalwaarden. De meeste renderers, game-engines en viewers lezen USD.
- **glTF-bestand (.glb)** slaat het lichtere glTF 2.0-bestand op met materialen, texturen en lampen; zie [Een model exporteren voor andere programma's](topic:export-model) voor de formaten die ModelCraft schrijft.

- **Unreal-projectmap (.zip)** slaat de map op die [De scène naar een game-engine sturen](topic:render-unreal) schrijft, voor een project op elke computer.

Alle drie werken in de browser en in Studio.

## In Studio: openen in een programma

Studio geeft een lijst van de programma's die het op deze computer vindt en die de scène kunnen openen: usdview als het in uw zoekpad staat, en het eigen programma van de computer voor het bestandstype. Kies er één, kies USD of glTF waar het beide leest, en klik op {{ui:Renderen}}. Studio schrijft het pakket in een nieuwe map onder Documenten (`CadCraft hand-off`; niets wordt overschreven, elke verzending krijgt een eigen map) en start het programma erop, en meldt daarna waar de bestanden staan.

| Programma | Leest het best |
|---|---|
| usdview | USD |
| Het eigen programma van de computer | Wat de computer voor het bestandstype heeft |

Studio start alleen programma's uit deze vaste lijst; het voert niets uit wat de pagina bij naam vraagt, en het start nooit een programma onder de GNU GPL-licentie (zie [De afbeelding tekenen met een ander programma](topic:render-other-program#programs-cadcraft-never-runs)). Elk programma dat USD of glTF leest, opent het bestand uit **Een bestand voor elk programma** hierboven.

:::note
Twinmotion, Enscape en andere visualisatieprogramma's staan niet in de lijst: CadCraft is er niet mee getest en doet er geen uitspraken over. Een glTF- of USD-bestand van hier is de route naar binnen.
:::
