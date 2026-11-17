---
title: Vad din dator renderar med
summary: Inställningar › Rendering visar grafiken, processorkärnorna och minnet som webbläsaren låter appen använda, och nivån som styr var renderingen börjar.
keywords: din dator, grafikkort, gpu, webgpu, webgl, processor, cpu, kärnor, trådar, minne, ram, delat minne, isolering, klass, nivå, hastighet, långsam, renderingshastighet, bärbar dator
from: 8a0c21c9
---

Öppna {{ui:Inställningar}} ({{key:Mod+,}}), stanna kvar på appens egna flik och bläddra till {{ui:Rendering}}. {{ui:Din dator}} visar vad webbläsaren låter appen använda för rendering. Ingenting där lämnar din dator.

| Rad | Vad det betyder |
|---|---|
| {{ui:Grafik}} | Grafikkortet som webbläsaren rapporterar. ”WebGPU” betyder att det kan göra allt renderingsarbete. ”Endast WebGL 2” betyder att livevyn och {{ui:Rendera en bild…}} använder det (hög kvalitet med WebGL-path tracer), medan rendering i vyn och renderingskön, som kräver WebGPU, inte erbjuds. En programvarubaserad ersättning betyder att allt körs på processorn |
| {{ui:Processor}} | Hur många processorkärnor webbläsaren rapporterar |
| {{ui:Minne}} | Ungefär hur mycket minne datorn har, när webbläsaren anger det. Vissa webbläsare gör inte det |
| {{ui:Delat minne}} | Om sidan får dela minne mellan sina arbetare. På: varje kärna kan arbeta med en kopia av en scen. Av: varje kärna behöver en egen kopia, så en stor scen får plats i färre kärnor samtidigt |
| {{ui:Snabb processorkod}} | Om webbläsaren kör den snabbare WebAssembly-koden. Utan den används en långsammare reservlösning |
| {{ui:Nivå}} | {{ui:Grafikkort, högt}}, {{ui:Grafikkort, grundläggande}} eller {{ui:Bara processor}}, med skälet under det |

## Nivån

Nivån styr var [livevyn](topic:live-view) startar ({{ui:För den här datorn}}), hur många spridda objekt den ritar och hur många ytor en [underdelningsyta](topic:modifiers#subdivision-surface) får visa i vyn, så att en bärbar dator med inbyggt grafikchip eller utan grafikkort ändå känns responsiv. Ett inbyggt grafikchip eller ett grafikchip för mobila enheter, eller 4 GB minne eller mindre, får aldrig {{ui:Grafikkort, högt}}.

:::note
Webbläsare skiljer sig åt. Samma dator kan visa WebGPU i en webbläsare och ”Endast WebGL 2” i en annan. På Linux saknar de flesta webbläsare WebGPU ännu.
:::
