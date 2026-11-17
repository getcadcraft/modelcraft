---
title: Otevření scény v jiném programu
summary: Uložte scénu jako soubor USD nebo glTF pro libovolný program, který je čte, nebo ji otevřete ze Studia v programu na tomto počítači.
keywords: otevřít v, usd, gltf, glb, export, program pro vykreslování, archviz, studio, usdview, odeslat, předání, balíček, složka unreal
from: 812329d5
---

Vyberte položku **Otevřít v** v seznamu Engine v {{ui:Vykreslit obrázek…}}, abyste scénu odnesli do jiného programu. Do modelu se nic nevrací.

## Soubor pro libovolný program

- **Soubor USD** uloží scénu jako `.usdc` (nebo `.usdz`, pokud model obsahuje obrázky). Je to [stejný soubor jako Uložit jako USD](topic:usd), s materiály, lampami a kamerami. Zachovává instancování a přesné hodnoty materiálů. Většina rendererů, herních enginů a prohlížečů čte USD.
- **Soubor glTF (.glb)** uloží odlehčený soubor glTF 2.0 s materiály, texturami a lampami. Formáty, které ModelCraft zapisuje, viz [Export modelu pro jiné programy](topic:export-model).
- **Složka projektu Unreal (.zip)** uloží složku, kterou zapisuje [Odeslání scény do herního enginu](topic:render-unreal), pro projekt na libovolném počítači.

Všechny tři fungují v prohlížeči i ve Studiu.

## Ve Studiu: otevřít v programu

Studio vypíše programy, které najde na tomto počítači a které mohou scénu otevřít: usdview, pokud je ve vaší cestě pro hledání, a výchozí program počítače pro daný typ souboru. Vyberte jeden, vyberte USD nebo glTF tam, kde čte obojí, a klikněte na {{ui:Vykreslit}}. Studio zapíše balíček do nové složky v Dokumentech (`CadCraft hand-off`; nic se nepřepíše, každé odeslání dostane vlastní složku) a spustí na ní program. Pak řekne, kde jsou soubory.

| Program | Čte nejlépe |
|---|---|
| usdview | USD |
| Výchozí program počítače | Cokoli, co počítač má pro daný typ souboru |

Studio spouští jen programy z tohoto pevného seznamu. Nespustí nic, co si stránka vyžádá jménem, a nikdy nespustí program pod licencí GNU GPL (viz [Nakreslení obrázku jiným programem](topic:render-other-program#programs-cadcraft-never-runs)). Jakýkoli program, který čte USD nebo glTF, otevře soubor z oddílu **Soubor pro libovolný program** výše.

:::note
Twinmotion, Enscape a další vizualizační programy nejsou v seznamu. CadCraft s nimi nebyl ověřen a o nich netvrdí nic. Soubor glTF nebo USD odsud je cesta dovnitř.
:::
