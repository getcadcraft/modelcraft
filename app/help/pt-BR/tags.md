---
title: Etiquetas: mostrar e ocultar conjuntos de itens
summary: Dê a grupos e componentes uma etiqueta, como Mobiliário ou Paredes, e oculte ou mostre tudo com essa etiqueta de uma só vez.
keywords: etiquetas, etiqueta, camadas, camada, mostrar, ocultar, visibilidade, organizar, mobiliário, paredes, sem etiqueta, renomear etiqueta, excluir etiqueta
from: c1a95a05
---

Uma etiqueta é um nome que você dá a grupos e componentes, como **Mobiliário**, **Paredes** ou **Local da obra**, para ocultar ou mostrar tudo com essa etiqueta de uma só vez. As etiquetas são o que os programas CAD chamam de camadas. Para ocultar um item por vez, veja [Ocultar, isolar e mostrar novamente](topic:hide-isolate).

## Criar uma etiqueta

1. Em {{ui:Etiquetas}}, à direita, clique em {{ui:Adicionar etiqueta}}.
2. Digite o nome e pressione {{key:Enter}}.

Para renomear uma etiqueta, clique no nome dela em {{ui:Etiquetas}}, digite o novo nome e pressione {{key:Enter}}. Duas etiquetas não podem ter o mesmo nome.

## Etiquetar grupos e componentes

1. Selecione um ou mais grupos ou componentes.
2. Em {{ui:Informações da entidade}}, escolha a etiqueta em {{ui:Etiqueta}}. {{ui:Nova etiqueta…}} cria uma nova e etiqueta a seleção com ela.

{{ui:Sem etiqueta}} remove a etiqueta. O número ao lado de cada etiqueta em {{ui:Etiquetas}} indica quantos grupos e componentes a possuem.

Etiquete grupos e componentes, não faces e arestas soltas: desenhe antes como grupos os itens que quer etiquetar (selecione-os e pressione {{key:Shift+G}}).

## Ocultar e mostrar

Clique no olho ao lado de uma etiqueta. Tudo com essa etiqueta sai da vista, onde quer que esteja no modelo (inclusive dentro de outros grupos), e cliques e snaps passam por cima. Clique no olho de novo para mostrar. Os itens {{ui:Sem etiqueta}} são sempre mostrados.

Se você estiver editando dentro de um grupo cuja etiqueta foi ocultada, o grupo é fechado.

## Excluir uma etiqueta

Clique na lixeira ao lado dela. O que tinha a etiqueta passa a {{ui:Sem etiqueta}} e aparece.

## Coisas a saber

- As etiquetas, seus nomes e quais estão ocultas são salvos no arquivo do ModelCraft. Copiar um grupo etiquetado para outro modelo leva a etiqueta junto.
- Ocultar e mostrar uma etiqueta, e qualquer outra alteração nas etiquetas, é um único passo do desfazer.
- As exportações incluem tudo, inclusive as etiquetas ocultas, como acontece com os itens ocultos.
- As camadas de plantas de local em DWG e DXF ainda não entram como etiquetas: o desenho inteiro entra como um único grupo.
