---
title: Com o que seu computador renderiza
summary: Configurações › Renderização mostra a placa de vídeo, os núcleos do processador e a memória que este navegador permite ao aplicativo usar, e o nível que define onde a renderização começa.
keywords: seu computador, placa de vídeo, gpu, webgpu, webgl, processador, cpu, núcleos, threads, memória, ram, memória compartilhada, isolamento, categoria, nível, velocidade, lento, velocidade de renderização, notebook
from: 8a0c21c9
---

Abra {{ui:Settings}} ({{key:Mod+,}}), fique na guia deste próprio aplicativo e role até {{ui:Rendering}}. {{ui:Your machine}} lista o que este navegador permite ao aplicativo usar para renderização. Nada disso sai do seu computador.

| Linha | O que significa |
|---|---|
| {{ui:Graphics}} | A placa de vídeo que o navegador informa. "WebGPU" significa que ela pode fazer todo o trabalho de renderização; "WebGL 2 only" significa que a visualização ao vivo e {{ui:Renderizar imagem…}} a usam (alta qualidade com o traçador de caminhos WebGL), mas a renderização na visualização e a fila de renderização, que precisam de WebGPU, não são oferecidas; um substituto por software significa que tudo roda no processador |
| {{ui:Processor}} | Quantos núcleos de processador o navegador informa |
| {{ui:Memory}} | Aproximadamente quanta memória o computador tem, quando o navegador informa. Alguns navegadores não informam |
| {{ui:Shared memory}} | Se a página pode compartilhar memória entre seus workers. Quando ligada, cada núcleo pode trabalhar em uma única cópia de uma cena; quando desligada, cada um precisa da sua própria cópia, então uma cena grande cabe em menos núcleos ao mesmo tempo |
| {{ui:Fast processor code}} | Se o navegador executa o código WebAssembly mais rápido. Sem ele, um substituto mais lento é usado |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} ou {{ui:Processor only}}, com o motivo abaixo |

## O nível

O nível define onde a [visualização ao vivo](topic:live-view) começa ({{ui:For this computer}}), quantos itens dispersos ela desenha e quantas faces uma [superfície de subdivisão](topic:modifiers#subdivision-surface) pode mostrar na visualização, para que um notebook com chip gráfico integrado ou sem placa de vídeo continue responsivo. Um chip gráfico integrado ou de celular, ou 4 GB de memória ou menos, nunca recebe {{ui:Graphics card, high}}.

:::note
Os navegadores são diferentes. O mesmo computador pode mostrar WebGPU em um navegador e "WebGL 2 only" em outro. No Linux, a maioria dos navegadores ainda não tem WebGPU.
:::
