---
title: Con qué renderiza su equipo
summary: Configuración › Render muestra los gráficos, los núcleos del procesador y la memoria que este navegador permite usar a la aplicación, y el nivel que define dónde empieza el render.
keywords: tu equipo, tarjeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, hilos, memoria, ram, memoria compartida, aislamiento, nivel, velocidad, lento, velocidad de render, portátil
from: 8a0c21c9
---

Abra {{ui:Settings}} ({{key:Mod+,}}), permanezca en la pestaña propia de esta aplicación y desplácese hasta {{ui:Rendering}}. {{ui:Your machine}} muestra lo que este navegador permite usar a la aplicación para renderizar. Nada de esto sale de su computadora.

| Fila | Qué significa |
|---|---|
| {{ui:Graphics}} | La tarjeta gráfica que informa el navegador. "WebGPU" significa que puede realizar todo el trabajo de render; "solo WebGL 2" significa que la vista en vivo y {{ui:Renderizar una imagen…}} la usan (alta calidad con el trazador de rayos de WebGL), mientras que el render en la vista y la cola de render, que requieren WebGPU, no están disponibles; un sustituto por software significa que todo se ejecuta en el procesador |
| {{ui:Processor}} | Cuántos núcleos del procesador informa el navegador |
| {{ui:Memory}} | Aproximadamente cuánta memoria tiene la computadora, cuando el navegador lo informa. Algunos navegadores no lo hacen |
| {{ui:Shared memory}} | Si la página puede compartir memoria entre sus workers. Si está activada, cada núcleo puede trabajar sobre una sola copia de una escena; si está desactivada, cada uno necesita su propia copia, así que una escena grande cabe en menos núcleos a la vez |
| {{ui:Fast processor code}} | Si el navegador ejecuta el código WebAssembly más rápido. Sin él se usa una alternativa más lenta |
| {{ui:Level}} | {{ui:Tarjeta gráfica, alto}}, {{ui:Tarjeta gráfica, básico}} o {{ui:Solo procesador}}, con el motivo debajo |

## El nivel

El nivel define dónde empieza la [vista en vivo](topic:live-view) ({{ui:Para esta computadora}}), cuántos elementos dispersos dibuja y cuántas caras puede mostrar en la vista una [superficie de subdivisión](topic:modifiers#subdivision-surface), para que una laptop con un chip gráfico integrado o sin tarjeta gráfica siga respondiendo. Un chip gráfico integrado o de teléfono, o 4 GB de memoria o menos, nunca obtiene {{ui:Tarjeta gráfica, alto}}.

:::note
Los navegadores difieren. La misma computadora puede mostrar WebGPU en un navegador y "solo WebGL 2" en otro. En Linux, la mayoría de los navegadores todavía no tienen WebGPU.
:::
