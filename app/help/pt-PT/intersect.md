---
title: Interseccionar faces
summary: Desenhe as linhas onde as faces se cortam umas às outras, para poder empurrar/puxar, apagar ou pintar as peças.
keywords: interseccionar, interseccionar faces, interseccionar com o modelo, interseccionar com a seleção, cortar, abertura, furo, unir, linhas onde as faces se cruzam, booleana
from: 6bc58526
---

Quando uma forma atravessa outra, o ModelCraft não desenha a linha onde as suas faces se encontram: elas apenas se sobrepõem. **Interseccionar** desenha essas linhas, como arestas, para que as faces se dividam ali. Depois pode empurrar/puxar, apagar ou pintar as peças.

Os dois comandos estão em {{ui:Edit}} › {{ui:More}}.

## Interseccionar com o modelo

Corta o que selecionar contra **todas as faces no ecrã**.

Por exemplo, uma viga (um grupo) atravessa uma parede (outro grupo), e quer uma abertura na parede:

1. Faça duplo clique na parede para a abrir e selecione todas as suas faces ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

O contorno da viga é desenhado nas duas faces da parede, como duas faces novas. Empurre uma delas através da parede para fazer a abertura, e depois feche a parede.

## Interseccionar com a seleção

Corta as faces, grupos e componentes selecionados **apenas uns contra os outros**. Selecione pelo menos dois.

## Onde ficam as linhas

As linhas são sempre desenhadas no **contexto aberto**: no modelo quando nenhum grupo está aberto, ou no grupo que está a editar. Os grupos e componentes que não estão abertos não são alterados. Por isso, para cortar as faces de um grupo, abra-o primeiro, como no exemplo acima.

## Coisas a saber

- As faces que estão no mesmo plano não são interseccionadas.
- As linhas que fecham um ciclo numa face fazem uma face nova, como acontece com as linhas desenhadas.
- Cada interseção é um único passo de anulação. Se nada cruzar, nada muda.
- Para formas fechadas, as [ferramentas de sólidos](topic:solids) (Unir, Subtrair) fazem todo o trabalho num único passo.
