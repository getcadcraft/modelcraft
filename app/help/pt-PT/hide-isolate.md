---
title: Ocultar, isolar e mostrar
summary: Afaste as coisas para trabalhar entre elas, ou mostre só o que está a trabalhar; as coisas ocultas continuam ocultas no ficheiro.
keywords: ocultar, mostrar, mostrar tudo, isolar, ocultar os restantes, exibir, oculto, vista local, visibilidade, fora do caminho
from: 2c8a3457
---

Ocultar tira as coisas do caminho sem as apagar. Uma face, aresta, grupo ou componente oculto não é desenhado, e não se pode fazer snap a ele, clicar nele ou selecioná-lo, por isso pode trabalhar no que está atrás ou entre as coisas.

## Ocultar

1. Selecione o que quer ocultar: faces, arestas, grupos ou componentes.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Hide}}.

Por exemplo, para trabalhar no espaço estreito entre dois grupos juntos, selecione o da frente e oculte-o: os cliques e os snaps passam a chegar à face de trás.

## Isolar

Selecione o que quer manter à vista e depois {{ui:Edit}} › {{ui:More}} › {{ui:Isolate (hide the rest)}}. Tudo o resto do modelo fica oculto — ou, enquanto estiver a editar dentro de um grupo, tudo o resto desse grupo. Uma face selecionada mantém as suas arestas.

## Mostrar tudo

{{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} volta a mostrar tudo, em todos os grupos. {{ui:Entity info}} indica quantas coisas estão ocultas quando nada está selecionado, com um botão {{ui:Unhide all}} também ali.

A {{ui:Outliner}} mostra os grupos e componentes ocultos em itálico, com um olho riscado; clique no olho para voltar a mostrar um.

:::note
Com as teclas do Modeler, {{key:H}} oculta, {{key:Shift+H}} isola e {{key:Alt+H}} mostra tudo. ({{ui:Settings}} › {{ui:ModelCraft}} escolhe o estilo de teclas.)
:::

## Coisas a saber

- O que está oculto é guardado no ficheiro do ModelCraft e volta oculto quando o abre.
- As coisas ocultas continuam no modelo: as exportações incluem-nas, e também os volumes e os tamanhos em {{ui:Entity info}}.
- Cada ação de ocultar, isolar ou mostrar é um único passo de anulação.
