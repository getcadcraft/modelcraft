---
title: Con qué renderiza su equipo
summary: Configuración › Renderizado muestra los gráficos, los núcleos del procesador y la memoria que este navegador permite usar a la aplicación, y el nivel que determina dónde empieza el renderizado.
keywords: su equipo, tarjeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, hilos, memoria, ram, memoria compartida, aislamiento, nivel, categoría, velocidad, lento, velocidad de renderizado, portátil
from: 8a0c21c9
---

Abra {{ui:Configuración}} ({{key:Mod+,}}), permanezca en la pestaña propia de esta aplicación y desplácese hasta {{ui:Renderizado}}. {{ui:Su equipo}} muestra lo que este navegador permite usar a la aplicación para el renderizado. Nada de ello sale de su equipo.

| Fila | Qué significa |
|---|---|
| {{ui:Gráficos}} | La tarjeta gráfica que informa el navegador. «WebGPU» significa que puede realizar todo el trabajo de renderizado; «WebGL 2 only» significa que la [vista en directo](topic:live-view) y {{ui:Renderizar una imagen…}} la usan (alta calidad con el trazador de rutas de WebGL), mientras que el renderizado en la vista y la cola de renderizado, que necesitan WebGPU, no se ofrecen; un sustituto por software significa que todo se ejecuta en el procesador |
| {{ui:Procesador}} | Cuántos núcleos del procesador informa el navegador |
| {{ui:Memoria}} | Aproximadamente cuánta memoria tiene el equipo, cuando el navegador lo indica. Algunos navegadores no lo indican |
| {{ui:Memoria compartida}} | Si la página puede compartir memoria entre sus workers. Si está activada, cada núcleo puede trabajar sobre una única copia de una escena; si está desactivada, cada uno necesita su propia copia, así que una escena grande cabe en menos núcleos a la vez |
| {{ui:Código rápido para el procesador}} | Si el navegador ejecuta el código WebAssembly más rápido. Sin él se usa una alternativa más lenta |
| {{ui:Nivel}} | {{ui:Tarjeta gráfica, alto}}, {{ui:Tarjeta gráfica, básico}} o {{ui:Solo procesador}}, con el motivo debajo |

## El nivel

El nivel determina dónde empieza la [vista en directo](topic:live-view) ({{ui:Para este ordenador}}), cuántos elementos dispersos dibuja y cuántas caras puede mostrar una [superficie de subdivisión](topic:modifiers#subdivision-surface) en la vista, para que un portátil con un chip gráfico integrado o sin tarjeta gráfica siga respondiendo. Un chip gráfico integrado o de móvil, o 4 GB de memoria o menos, nunca obtiene {{ui:Tarjeta gráfica, alto}}.

:::note
Los navegadores difieren. El mismo equipo puede mostrar WebGPU en un navegador y «WebGL 2 only» en otro. En Linux, la mayoría de los navegadores todavía no tienen WebGPU.
:::
