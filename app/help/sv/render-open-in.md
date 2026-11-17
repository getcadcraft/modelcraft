---
title: Öppna scenen i ett annat program
summary: Spara scenen som en USD-fil eller en glTF-fil för vilket program som helst som läser dem, eller öppna den från Studio i ett program på den här datorn.
keywords: öppna i, usd, gltf, glb, exportera, renderingsprogram, archviz, studio, usdview, skicka, överlämning, paket, unreal-mapp
from: 812329d5
---

Välj ett **Öppna i**-val i listan Motor i {{ui:Rendera en bild…}} för att ta scenen till ett annat program. Inget kommer tillbaka till modellen.

## En fil för valfritt program

- **USD-fil** sparar scenen som `.usdc` (eller `.usdz` när modellen har bilder): [samma fil som Spara som USD](topic:usd), med material, lampor och kameror. Den behåller instansiering och de exakta materialvärdena. De flesta renderare, spelmotorer och visare läser USD.
- **glTF-fil (.glb)** sparar den lättare glTF 2.0-filen med material, texturer och lampor; se [Exportera en modell för andra program](topic:export-model) för de format ModelCraft skriver.
- **Unreal-projektmapp (.zip)** sparar mappen som [Skicka scenen till en spelmotor](topic:render-unreal) skriver, för ett projekt på valfri dator.

Alla tre fungerar i webbläsaren och i Studio.

## I Studio: öppna den i ett program

Studio listar de program den hittar på den här datorn som kan öppna scenen: usdview om det finns på din sökväg, och datorns egna program för filtypen. Välj ett, välj USD eller glTF där det läser båda, och klicka på {{ui:Render}}. Studio skriver paketet i en ny mapp under Dokument (`CadCraft hand-off`; inget skrivs över, varje skickning får sin egen mapp) och startar programmet på den, och säger sedan var filerna finns.

| Program | Läser bäst |
|---|---|
| usdview | USD |
| Datorns egna program | Vad datorn har för filtypen |

Studio startar bara program från den här fasta listan; den kör inte något som sidan begär med namn, och startar aldrig ett program under GNU GPL-licensen (se [Rita bilden med ett annat program](topic:render-other-program#programs-cadcraft-never-runs)). Alla program som läser USD eller glTF öppnar filen från **En fil för valfritt program** ovan.

:::note
Twinmotion, Enscape och andra visualiseringsprogram finns inte i listan: CadCraft har inte kontrollerats med dem och gör inga påståenden om dem. En glTF- eller USD-fil härifrån är vägen in.
:::
