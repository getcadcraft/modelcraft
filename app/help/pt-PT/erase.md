---
title: Apagar e limpar
summary: Apagar arestas, grupos e guias com a borracha ou a tecla Delete, reparar faces divididas e corrigir faces viradas para o lado errado.
keywords: apagar, borracha, eliminar, Delete, remover, reparar, unir faces, limpar, linhas perdidas, inverter face, face traseira, anular
from: 80b92a81
---

## Apagar com a borracha

1. Prima {{key:E}} para a {{ui:Eraser}}.
2. Clique numa aresta, num grupo ou componente, ou numa guia. É apagado.
3. Para apagar vários, prima e arraste sobre eles. Tudo por onde passa fica destacado, e tudo é apagado ao largar.

A borracha não seleciona faces: uma face é apagada quando se apagam as arestas de que precisa. As faces são o que a borracha atravessa para encontrar arestas.

## O que acontece às faces

- **Uma aresta entre duas faces no mesmo plano** (uma linha que desenhou a atravessar um piso, por exemplo) desaparece, e as duas faces **reparam-se** numa só.
- **Uma aresta de que uma face precisa para continuar fechada** (a aresta de uma caixa) leva essa face consigo. Se apagar uma aresta de cima de uma caixa, desaparecem a face de cima e uma face lateral, ficando uma caixa aberta.
- **Pontas soltas** (pontos que já nenhuma aresta usa) são limpas.

Apagar a última cópia de um componente também o remove do painel {{ui:Components}}.

## Apagar com a tecla Delete

1. Selecione o que quer remover com {{ui:Select}}.
2. Prima {{key:Delete}} ou {{key:Backspace}}.

Isto remove também faces. Uma face apagada desta forma deixa para trás as suas arestas, por isso pode apagar a face de cima de uma caixa e manter o seu contorno, e depois desenhar outra coisa nesse lugar.

## Limpar linhas perdidas numa face plana

Se uma parede ou um piso mostrar linhas que não quer (deixadas ao desenhar), apague-as com a {{ui:Eraser}}. As linhas que estão na face reparam-se, e a face mantém-se.

## Uma face virada para o lado errado

Uma face vista por trás é azul-acinzentada. Se uma face mostrar azul-acinzentado no exterior do seu modelo:

1. Selecione a face.
2. Clique em {{ui:Reverse face}} em {{ui:Entity info}}.

A direção das faces importa sobretudo ao exportar: renderizadores, motores de jogo e impressoras 3D podem ocultar ou ler mal faces que apontam para dentro.

## Desfazer um erro

{{key:Mod+Z}} anula um passo de cada vez, {{key:Mod+Y}} (ou {{key:Mod+Shift+Z}}) refaz. Um arrasto com a borracha é um só passo, por muitas coisas que apanhe. A barra de estado indica o que foi anulado: «Anulado: apagar.»
