---
title: Dividir uma aresta ou curva em partes iguais
summary: Partir uma linha em partes iguais, ou dar a um arco ou círculo um novo número de segmentos, com a ferramenta Dividir.
keywords: dividir, dividir aresta, partes iguais, segmentos iguais, partir aresta, segmentos, subdividir, subdividir arestas, segmentos de arco, segmentos de círculo, pontos ao longo de uma linha
from: 5c3ce3ed
---

{{ui:Divide}} corta uma aresta em partes iguais, com um canto em cada corte. Use os cantos para fazer snap, para começar linhas a partir deles ou para empurrar e puxar partes de uma face.

## Dividir uma aresta

1. Clique em {{ui:Divide}} na barra de ferramentas, ou selecione uma aresta e clique em {{ui:Divide…}} em {{ui:Entity info}}.
2. Aponte para a aresta. As marcas mostram onde vão ficar os cortes: sobre o meio da aresta são duas partes; mova na direção de uma extremidade para obter mais.
3. Clique para dividir nas partes indicadas. Ou escreva um número, como `5` (ou `5s`, ou `/5`), e prima {{key:Enter}}: divide de imediato.

As peças ficam selecionadas, e é um só passo de anulação. Uma face a que a aresta pertence mantém a sua forma e ganha os novos cantos.

## Dividir um arco ou um círculo

Aponte para qualquer segmento de um arco ou círculo: divide-se como um todo.

- Um arco ou círculo cujos cantos mais nenhum elemento usa, deitado sobre a sua face, é **desenhado de novo com esse número de segmentos** sobre o arco verdadeiro. Os extremos ficam onde estavam, e continua a ser uma só curva, por isso ainda pode selecioná-lo com um clique e alterar o seu raio em {{ui:Entity info}}. Um círculo de 24 lados dividido em 8 passa a ser um octógono.
- Qualquer outra curva — a orla de um cilindro puxado, uma curva desenhada com {{ui:Curve}}, um arco com linhas unidas aos seus cantos — recebe novos cantos a comprimentos iguais ao longo dela, e nada se move.

## Com as teclas de modelador

A ferramenta é a mesma com as teclas de modelador (Definições › ModelCraft › Teclas, ou o estilo de menu Modeler), onde está no menu {{ui:Mesh}} como {{ui:Subdivide edges}}.

## Pontos a ter em conta

- Os números escritos vão de 2 a 1000; ao mover o cursor, o valor vai até 100.
- Uma curva desenhada com {{ui:Curve}} mantém os seus pontos: depois de {{ui:Edit points}}, é desenhada de novo a partir deles e os novos cantos desaparecem.

Ver também [Desenhar faces com linhas, retângulos, círculos e arcos](topic:draw-faces) e [Escrever medidas exatas na caixa de valor](topic:value-box).
