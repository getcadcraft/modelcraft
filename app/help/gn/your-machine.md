---
title: Mba'épa renderiza su equipo
summary: Configuración › Renderizado ohechauka gráficos, núcleos del procesador ha memoria ko navegador omoĩva ko aplicación oipuru, ha nivel ojapova'ekue renderizado oñepyrũ rupi.
keywords: su equipo, tarjeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, hilos, memoria, ram, memoria compartida, aislamiento, nivel, velocidad, lento, velocidad de renderizado, laptop
from: 8a0c21c9
---

Eike {{ui:Configuración}} ({{key:Mod+,}}), emoĩ ko aplicación pestaña-pe ha eguata peve {{ui:Renderizado}} peve. {{ui:Su equipo}} ohechauka mba'épa ko navegador omoĩ va'erã ko aplicación oipuru renderizado-pe. Ndaipóri ko'ẽrõ osẽ ndeComputadora-gui.

| Fila | Mba'épa ohechauka |
|---|---|
| {{ui:Graphics}} | Tarjeta gráfica navegador ohechaukáva. "WebGPU" he'i ombohovái opa renderizado rembiapo; "WebGL 2 only" he'i vista en vivo ha {{ui:Render de una imagen…}} oipuru (calidad alta WebGL path tracer rupive), ha renderizado vista-pe ha cola de renderizado-pe, ojerure WebGPU, ndoúi ofrecérva; software sustituto he'i opa rembiapo procesador-pe |
| {{ui:Processor}} | Mboty procesador núcleo navegador ohechaukáva |
| {{ui:Memory}} | Mboyve memoria ndeComputadora-pe, navegador ohechauka ramo. Navegador ojapo'ỹva ndohechaukái |
| {{ui:Shared memory}} | Ha'e piko página omboja'o memoria ijeheguivé ijoaju-pe. Oñemomarandu, opa núcleo ohupytýta peteĩ kópia escena-gui; ndaipóri, ojeikotevẽ peteĩ kópia ipopeva, upévare escena tuichaitépe oikóta mboty kíre núcleo-pe |
| {{ui:Fast processor code}} | Navegador oipuru piko WebAssembly ligerove. Ndaipóri, oipuru peteĩ fallback lento |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} térã {{ui:Processor only}}, ha'eñónte ohechauka hína |

## Nivel

Nivel ohechauka [vista en vivo](topic:live-view) moõ oñepyrũ ({{ui:For this computer}}), mboty ojeitýva elemento ohechaukáva, ha mboty cara [superficie de subdivisión](topic:modifiers#subdivision-surface) ohechauka vista-pe, upévare laptop ijyvateĩva gráfico integrado térã tarjeta gráfica'ỹva oiko ojapytu'u. Chip gráfico integrado térã teléfono-gui, térã 4 GB memoria térã mboyve, nunca ojehupyty {{ui:Graphics card, high}}.

:::note
Navegador oiporu'y. Peteĩ ndeComputadora-pe WebGPU ohechauka peteĩ navegadorpe ha "WebGL 2 only" ambuépe. Linux-pe navegador tuichakue ndaipóri WebGPU ko'ágã.
:::
