---
title: Etiquetas: mostrar e ocultar conjuntos de elementos
summary: Atribua uma etiqueta a grupos e componentes, como Mobiliário ou Paredes, e oculte ou mostre tudo o que tem essa etiqueta de uma só vez.
keywords: etiquetas, etiqueta, camadas, camada, mostrar, ocultar, visibilidade, organizar, mobiliário, paredes, sem etiqueta, renomear etiqueta, eliminar etiqueta
from: c1a95a05
---

Uma etiqueta é um nome que atribui a grupos e componentes, como **Mobiliário**, **Paredes** ou **Implantação**, para ocultar ou mostrar tudo o que tem essa etiqueta de uma só vez. As etiquetas são o que os programas CAD chamam camadas. Para ocultar um elemento de cada vez, veja [Ocultar, isolar e voltar a mostrar](topic:hide-isolate).

## Criar uma etiqueta

1. Em {{ui:Etiquetas}}, à direita, clique em {{ui:Acrescentar etiqueta}}.
2. Escreva o nome e prima {{key:Enter}}.

Para mudar o nome de uma etiqueta, clique no nome em {{ui:Etiquetas}}, escreva o novo e prima {{key:Enter}}. Duas etiquetas não podem partilhar um nome.

## Etiquetar grupos e componentes

1. Selecione um ou mais grupos ou componentes.
2. Em {{ui:Informações da entidade}}, escolha a etiqueta em {{ui:Etiqueta}}. {{ui:Nova etiqueta…}} cria uma nova e etiqueta a seleção com ela.

{{ui:Sem etiqueta}} retira a etiqueta. O número ao lado de cada etiqueta em {{ui:Etiquetas}} indica quantos grupos e componentes a têm.

Etiquete grupos e componentes, não faces e arestas soltas: desenhe primeiro como grupos os elementos que quer etiquetar (selecione-os e prima {{key:Shift+G}}).

## Ocultar e mostrar

Clique no olho ao lado de uma etiqueta. Tudo o que tem essa etiqueta sai de vista, onde quer que esteja no modelo (também dentro de outros grupos), e os cliques e os snaps passam ao lado. Clique de novo no olho para o mostrar. Os elementos {{ui:Sem etiqueta}} são sempre mostrados.

Se estiver a editar dentro de um grupo cuja etiqueta ocultou, o grupo fecha-se.

## Eliminar uma etiqueta

Clique no ícone do lixo ao lado dela. Os elementos que tinham a etiqueta passam a {{ui:Sem etiqueta}} e ficam visíveis.

## Coisas a saber

- As etiquetas, os seus nomes e as que estão ocultas são guardados no ficheiro ModelCraft. Copiar um grupo etiquetado para outro modelo leva a etiqueta consigo.
- Ocultar e mostrar uma etiqueta, e todas as outras alterações às etiquetas, é um único passo de anular.
- As exportações incluem tudo, também as etiquetas ocultas, tal como acontece com os elementos ocultos.
- As camadas em plantas de implantação DWG e DXF ainda não entram como etiquetas: o desenho inteiro entra como um só grupo.
