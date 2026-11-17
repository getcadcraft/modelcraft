---
title: Dividir uma aresta ou curva em partes iguais
summary: Divida uma linha em partes iguais, ou dê a um arco ou círculo um novo número de segmentos, com a ferramenta Dividir.
keywords: dividir, dividir aresta, partes iguais, segmentos iguais, dividir aresta, segmentos, subdividir, subdividir arestas, segmentos de arco, segmentos de círculo, pontos ao longo de uma linha
from: 5c3ce3ed
---

{{ui:Dividir}} corta uma aresta em partes iguais, com um canto em cada corte. Use os cantos para fazer snap, para iniciar linhas ou para empurrar e puxar partes de uma face.

## Dividir uma aresta

1. Clique em {{ui:Dividir}} na barra de ferramentas, ou selecione uma aresta e clique em {{ui:Dividir…}} em {{ui:Informações da entidade}}.
2. Aponte para a aresta. As marcas mostram onde os cortes serão feitos: sobre o meio da aresta, ela fica em duas partes; mova em direção a uma extremidade para obter mais.
3. Clique para dividi-la nas partes mostradas. Ou digite um número, como `5` (ou `5s`, ou `/5`), e pressione {{key:Enter}}: ela é dividida de imediato.

As partes ficam selecionadas, e a operação conta como uma única etapa de desfazer. Uma face à qual a aresta pertence mantém sua forma e ganha os novos cantos.

## Dividir um arco ou um círculo

Aponte para qualquer segmento de um arco ou círculo: ele é dividido por inteiro.

- Um arco ou círculo cujos cantos nenhuma outra coisa usa, deitado sobre a sua face, é **desenhado de novo com esse número de segmentos** sobre o arco verdadeiro. Suas extremidades permanecem onde estão, e ele continua sendo uma única curva, então você ainda pode selecioná-lo com um clique e alterar seu raio em {{ui:Informações da entidade}}. Um círculo de 24 lados dividido em 8 se torna um octógono.
- Qualquer outra curva — a borda de um cilindro puxado, uma curva desenhada com {{ui:Curva}}, um arco com linhas unidas aos seus cantos — recebe novos cantos em comprimentos iguais ao longo dela, e nada se move.

## Com as teclas do modelador

A ferramenta é a mesma com as teclas do modelador (Configurações › ModelCraft › Teclas, ou o estilo de menu Modeler), onde ela fica no menu {{ui:Malha}} como {{ui:Subdividir arestas}}.

## Coisas a saber

- Números digitados vão de 2 a 1000; mover o ponteiro dá até 100.
- Uma curva desenhada com {{ui:Curva}} mantém os seus pontos: depois de {{ui:Editar pontos}}, ela é desenhada de novo a partir deles, e os novos cantos desaparecem.

Veja também [Desenhar faces com linhas, retângulos, círculos e arcos](topic:draw-faces) e [Digitar tamanhos exatos na caixa de valores](topic:value-box).
