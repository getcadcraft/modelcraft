---
title: Con cosa esegue il rendering il tuo computer
summary: Impostazioni › Rendering mostra la grafica, i core del processore e la memoria che questo browser consente all'app di usare, e il livello che stabilisce da dove parte il rendering.
keywords: il tuo computer, scheda grafica, gpu, webgpu, webgl, processore, cpu, core, thread, memoria, ram, memoria condivisa, isolamento, livello, velocità, lento, velocità di rendering, portatile
from: 8a0c21c9
---

Aprire {{ui:Impostazioni}} ({{key:Mod+,}}), restare sulla scheda di questa app e scorrere fino a {{ui:Rendering}}. {{ui:Il tuo computer}} elenca ciò che questo browser consente all'app di usare per il rendering. Nulla di questo lascia il computer.

| Riga | Cosa significa |
|---|---|
| {{ui:Grafica}} | La scheda grafica riportata dal browser. "WebGPU" indica che può svolgere tutto il lavoro di rendering; "WebGL 2 only" indica che la vista live e {{ui:Render di un'immagine…}} la usano (alta qualità con il path tracer WebGL), mentre il rendering nella vista e la coda di rendering, che richiedono WebGPU, non sono disponibili; un sostituto software significa che tutto viene eseguito sul processore |
| {{ui:Processore}} | Quanti core del processore riporta il browser |
| {{ui:Memoria}} | Circa quanta memoria ha il computer, quando il browser lo indica. Alcuni browser non lo fanno |
| {{ui:Memoria condivisa}} | Se la pagina può condividere la memoria tra i suoi worker. Attiva, ogni core può lavorare su un'unica copia di una scena; disattiva, ognuno ne richiede una propria, quindi una scena grande entra in meno core contemporaneamente |
| {{ui:Codice del processore veloce}} | Se il browser esegue il codice WebAssembly più veloce. Senza, viene usato un ripiego più lento |
| {{ui:Livello}} | {{ui:Scheda grafica, alta}}, {{ui:Scheda grafica, base}} o {{ui:Solo processore}}, con il motivo sotto |

## Il livello

Il livello stabilisce da dove parte la [vista live](topic:live-view) ({{ui:Per questo computer}}), quanti elementi sparsi disegna e quante facce una [superficie di suddivisione](topic:modifiers#subdivision-surface) può mostrare nella vista, così che un portatile con un chip grafico integrato o senza alcuna scheda grafica resti reattivo. Un chip grafico integrato o di telefono, oppure 4 GB di memoria o meno, non ottiene mai {{ui:Scheda grafica, alta}}.

:::note
I browser differiscono. Lo stesso computer può mostrare WebGPU in un browser e "WebGL 2 only" in un altro. Su Linux la maggior parte dei browser non ha ancora WebGPU.
:::
