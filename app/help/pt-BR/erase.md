---
title: Apagar e limpar
summary: Apague arestas, grupos e guias com a borracha ou a tecla Delete, repare faces divididas e corrija faces voltadas para o lado errado.
keywords: apagar, borracha, excluir, remover, reparar, mesclar faces, limpar, linhas soltas, inverter face, face de trás, desfazer
from: 80b92a81
---

## Apagar com a borracha

1. Pressione {{key:E}} para a {{ui:Borracha}}.
2. Clique em uma aresta, em um grupo ou componente, ou em uma guia. Ela é apagada.
3. Para apagar várias, pressione e arraste sobre elas. Tudo por onde você passa fica destacado, e tudo é apagado quando você solta.

A borracha não seleciona faces: uma face desaparece quando você apaga as arestas de que ela precisa. As faces são o que a borracha examina para encontrar arestas.

## O que acontece com as faces

- **Uma aresta entre duas faces no mesmo plano** (uma linha que você desenhou atravessando um piso, por exemplo) desaparece, e as duas faces **se reparam** em uma só.
- **Uma aresta de que uma face precisa para permanecer fechada** (a aresta de uma caixa) leva essa face junto. Apague uma aresta superior de uma caixa e a face superior e uma lateral somem, deixando uma caixa aberta.
- **Pontas soltas** (pontos que nenhuma aresta usa mais) são limpas.

Apagar a última cópia de um componente também remove o componente do painel {{ui:Componentes}}.

## Apagar com a tecla Delete

1. Selecione o que deseja remover com {{ui:Selecionar}}.
2. Pressione {{key:Delete}} ou {{key:Backspace}}.

Isso remove faces também. Uma face excluída dessa forma deixa suas arestas para trás, então você pode excluir a parte superior de uma caixa, manter o contorno dela e desenhar outra coisa ali.

## Limpar linhas soltas em uma face plana

Se uma parede ou um piso mostra linhas que você não quer (sobras do desenho), apague-as com a {{ui:Borracha}}. Linhas que estão na face se reparam sozinhas; a face permanece.

## Uma face voltada para o lado errado

Uma face vista por trás aparece em cinza-azulado. Se uma face mostra cinza-azulado do lado de fora do seu modelo:

1. Selecione a face.
2. Clique em {{ui:Inverter face}} em {{ui:Informações da entidade}}.

A direção das faces importa mais na exportação: renderizadores, motores de jogos e impressoras 3D podem ocultar ou interpretar mal faces que apontam para dentro.

## Desfazer um erro

{{key:Mod+Z}} desfaz uma etapa por vez, e {{key:Mod+Y}} (ou {{key:Mod+Shift+Z}}) refaz. Um arrasto com a borracha é uma etapa, não importa quantas coisas ele tenha pegado. A barra de status informa o que foi desfeito: "Desfeito: apagar."
