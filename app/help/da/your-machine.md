---
title: Hvad din maskine renderer med
summary: Indstillinger › Rendering viser grafikken, processorkernerne og hukommelsen, som denne browser lader appen bruge, samt det niveau, der bestemmer, hvor rendering starter.
keywords: din maskine, grafikkort, gpu, webgpu, webgl, processor, cpu, kerner, tråde, hukommelse, ram, delt hukommelse, isolering, niveau, hastighed, langsom, renderingshastighed, bærbar
from: 8a0c21c9
---

Åbn {{ui:Settings}} ({{key:Mod+,}}), bliv på denne apps egen fane, og rul ned til {{ui:Rendering}}. {{ui:Your machine}} viser, hvad denne browser lader appen bruge til rendering. Intet i den forlader din computer.

| Række | Hvad det betyder |
|---|---|
| {{ui:Graphics}} | Grafikkortet, som browseren rapporterer. "WebGPU" betyder, at det kan udføre al renderingsarbejdet; "WebGL 2 only" betyder, at live-visningen og {{ui:Render a picture…}} bruger det (høj kvalitet med WebGL-path tracer), mens rendering i visningen og renderingskøen, som kræver WebGPU, ikke tilbydes; en softwareerstatning betyder, at alt kører på processoren |
| {{ui:Processor}} | Hvor mange processorkerner browseren rapporterer |
| {{ui:Memory}} | Cirka hvor meget hukommelse computeren har, når browseren oplyser det. Nogle browsere gør ikke |
| {{ui:Shared memory}} | Om siden må dele hukommelse mellem sine workers. Til betyder, at hver kerne kan arbejde på én kopi af en scene; fra betyder, at hver skal have sin egen kopi, så en stor scene kan få plads på færre kerner ad gangen |
| {{ui:Fast processor code}} | Om browseren kører den hurtigere WebAssembly-kode. Uden den bruges en langsommere reserveløsning |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} eller {{ui:Processor only}}, med begrundelsen under |

## Niveauet

Niveauet bestemmer, hvor [live-visningen](topic:live-view) starter ({{ui:For this computer}}), hvor mange spredte elementer den tegner, og hvor mange flader en [underopdelingsoverflade](topic:modifiers#subdivision-surface) må vise i visningen, så en bærbar med en indbygget grafikchip eller uden grafikkort overhovedet forbliver responsiv. En indbygget grafikchip eller en telefons grafikchip, eller 4 GB hukommelse eller mindre, får aldrig {{ui:Graphics card, high}}.

:::note
Browsere er forskellige. Den samme computer kan vise WebGPU i én browser og "WebGL 2 only" i en anden. På Linux har de fleste browsere endnu ikke WebGPU.
:::
