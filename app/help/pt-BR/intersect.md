---
title: Interseccionar faces
summary: Desenhe as linhas onde as faces se cortam, para empurrar, apagar ou pintar as peças.
keywords: interseccionar, interseccionar faces, interseccionar com o modelo, interseccionar com a seleção, cortar, abertura, furo, unir, linhas onde faces se cruzam, booleano
from: 6bc58526
---

Quando uma forma atravessa outra, o ModelCraft não desenha a linha onde as faces se encontram: elas apenas se sobrepõem. **Interseccionar** desenha essas linhas, como arestas, para que as faces se dividam ali. Depois você pode empurrar/puxar, apagar ou pintar as peças.

Ambos os comandos estão em {{ui:Editar}} › {{ui:Mais}}.

## Interseccionar com o modelo

Corta o que você seleciona contra **todas as faces na tela**.

Por exemplo, uma viga (um grupo) atravessa uma parede (outro grupo), e você quer uma abertura na parede:

1. Clique duas vezes na parede para abri-la, e selecione todas as suas faces ({{key:Ctrl+A}}).
2. {{ui:Editar}} › {{ui:Mais}} › {{ui:Interseccionar com o modelo}}.

O contorno da viga é desenhado nas duas faces da parede, como duas novas faces. Empurre uma delas através da parede para criar a abertura, depois feche a parede.

## Interseccionar com a seleção

Corta as faces, grupos e componentes selecionados **somente uns contra os outros**. Selecione pelo menos dois.

## Para onde vão as linhas

As linhas são sempre desenhadas no **contexto aberto**: no modelo quando nenhum grupo está aberto, ou no grupo que você está editando. Grupos e componentes que não estão abertos não são alterados. Então, para cortar as faces de um grupo, abra-o primeiro, como no exemplo acima.

## Coisas a saber

- Faces que estão no mesmo plano não são interseccionadas.
- Linhas que fecham um laço em uma face criam uma nova face, como fazem as linhas desenhadas.
- Cada interseção é um passo de desfazer. Se nada se cruza, nada muda.
- Para formas fechadas, as [ferramentas de sólidos](topic:solids) (Unir, Subtrair) fazem o trabalho inteiro em um só passo.
