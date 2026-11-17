---
title: Con que renderiza o seu ordenador
summary: Configuración › Renderizado mostra os gráficos, os núcleos do procesador e a memoria que este navegador permite usar á aplicación, e o nivel que fixa onde comeza o renderizado.
keywords: o seu ordenador, tarxeta gráfica, gpu, webgpu, webgl, procesador, cpu, núcleos, fíos, memoria, ram, memoria compartida, illamento, categoría, nivel, velocidade, lento, velocidade de renderizado, portátil
from: 8a0c21c9
---

Abra {{ui:Configuración}} ({{key:Mod+,}}), manteña a lapela propia desta aplicación e desprácese ata {{ui:Renderizado}}. {{ui:O seu ordenador}} lista o que este navegador permite á aplicación usar para renderizar. Nada do que aparece aquí sae do seu ordenador.

| Fila | Que significa |
|---|---|
| {{ui:Gráficos}} | A tarxeta gráfica que informa o navegador. «WebGPU» significa que pode facer todo o traballo de renderizado; «WebGL 2 only» significa que a [vista en directo](topic:live-view) e {{ui:Renderizar unha imaxe…}} a usan (alta calidade co trazador de camiños WebGL), mentres que o renderizado na vista e a cola de renderizado, que precisan WebGPU, non se ofrecen; un substituto por software significa que todo se executa no procesador |
| {{ui:Procesador}} | Cantos núcleos de procesador informa o navegador |
| {{ui:Memoria}} | Canta memoria aproximada ten o ordenador, cando o navegador o indica. Algúns navegadores non o fan |
| {{ui:Memoria compartida}} | Se a páxina pode compartir memoria entre os seus workers. Activada, cada núcleo pode traballar sobre unha copia dunha escena; desactivada, cada un precisa a súa propia copia, polo que unha escena grande cabe en menos núcleos á vez |
| {{ui:Código de procesador rápido}} | Se o navegador executa o código WebAssembly máis rápido. Sen el úsase unha alternativa máis lenta |
| {{ui:Nivel}} | {{ui:Tarxeta gráfica, alto}}, {{ui:Tarxeta gráfica, básico}} ou {{ui:Só procesador}}, co motivo debaixo |

## O nivel

O nivel fixa onde comeza a [vista en directo](topic:live-view) ({{ui:Para este ordenador}}), cantos elementos dispersos debuxa e cantas caras pode mostrar unha [superficie de subdivisión](topic:modifiers#subdivision-surface) na vista, para que un portátil cunha gráfica integrada ou sen tarxeta gráfica siga respondendo. Un chip gráfico integrado ou de teléfono, ou 4 GB de memoria ou menos, nunca obtén {{ui:Tarxeta gráfica, alto}}.

:::note
Os navegadores difiren. O mesmo ordenador pode mostrar WebGPU nun navegador e «WebGL 2 only» noutro. En Linux a maioría dos navegadores aínda non teñen WebGPU.
:::
