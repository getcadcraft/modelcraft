---
title: Com o que o seu computador renderiza
summary: Definições › Renderização mostra os gráficos, os núcleos do processador e a memória que este navegador deixa a aplicação usar, e o nível que define onde a renderização começa.
keywords: o seu computador, placa gráfica, gpu, webgpu, webgl, processador, cpu, núcleos, threads, memória, ram, memória partilhada, isolamento, nível, velocidade, lento, velocidade de renderização, portátil
from: 8a0c21c9
---

Abra {{ui:Definições}} ({{key:Mod+,}}), escolha o separador desta aplicação e desloque a página até {{ui:Renderização}}. {{ui:O seu computador}} mostra o que este navegador deixa a aplicação usar para a renderização. Nada disto sai do seu computador.

| Linha | O que significa |
|---|---|
| {{ui:Gráficos}} | A placa gráfica que o navegador indica. "WebGPU" significa que pode fazer todo o trabalho de renderização; "WebGL 2 only" significa que a vista ao vivo e {{ui:Renderizar uma imagem…}} a usam (alta qualidade com o traçador de caminhos WebGL), mas a renderização na vista e a fila de renderização, que precisam de WebGPU, não são oferecidas; um substituto por software significa que tudo corre no processador |
| {{ui:Processador}} | Quantos núcleos do processador o navegador indica |
| {{ui:Memória}} | Aproximadamente quanta memória tem o computador, quando o navegador o indica. Alguns navegadores não o indicam |
| {{ui:Memória partilhada}} | Se a página pode partilhar memória entre os seus workers. Ligada, cada núcleo pode trabalhar sobre uma só cópia de uma cena; desligada, cada um precisa da sua própria cópia, pelo que uma cena grande cabe em menos núcleos ao mesmo tempo |
| {{ui:Código rápido para o processador}} | Se o navegador executa o código WebAssembly mais rápido. Sem isso, usa-se uma alternativa mais lenta |
| {{ui:Nível}} | {{ui:Placa gráfica, alto}}, {{ui:Placa gráfica, básico}} ou {{ui:Só processador}}, com o motivo indicado por baixo |

## O nível

O nível define onde a [vista ao vivo](topic:live-view) começa ({{ui:Para este computador}}), quantos itens dispersos desenha e quantas faces uma [superfície de subdivisão](topic:modifiers#subdivision-surface) pode mostrar na vista, para que um portátil com um chip gráfico integrado ou sem placa gráfica se mantenha responsivo. Um chip gráfico integrado ou de telemóvel, ou 4 GB de memória ou menos, nunca recebe {{ui:Placa gráfica, alto}}.

:::note
Os navegadores diferem. O mesmo computador pode mostrar WebGPU num navegador e "WebGL 2 only" noutro. Em Linux, a maioria dos navegadores ainda não tem WebGPU.
:::
