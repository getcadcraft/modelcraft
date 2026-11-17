---
title: Ocultar, isolar e reexibir
summary: Tire coisas do caminho para trabalhar entre elas, ou mostre apenas o que você está editando; o que está oculto continua oculto no arquivo.
keywords: ocultar, reexibir, reexibir tudo, isolar, ocultar outros, mostrar, oculto, vista local, visibilidade, fora do caminho
from: 2c8a3457
---

Ocultar tira coisas do caminho sem apagá-las. Uma face, aresta, grupo ou componente oculto não é desenhado, e você não pode encaixar, clicar nem selecioná-lo, então pode trabalhar no que está atrás ou entre outras coisas.

## Ocultar

1. Selecione o que ocultar: faces, arestas, grupos ou componentes.
2. {{ui:Editar}} › {{ui:Mais}} › {{ui:Ocultar}}.

Por exemplo, para trabalhar no vão estreito entre dois grupos próximos, selecione o da frente e oculte-o: cliques e encaixes agora alcançam a face atrás dele.

## Isolar

Selecione o que você quer manter à vista e depois {{ui:Editar}} › {{ui:Mais}} › {{ui:Isolar (ocultar o resto)}}. Todo o restante do modelo se oculta — ou, enquanto você edita dentro de um grupo, todo o restante desse grupo. Uma face selecionada mantém suas arestas.

## Reexibir tudo

{{ui:Editar}} › {{ui:Mais}} › {{ui:Reexibir tudo}} mostra tudo de novo, em todos os grupos. {{ui:Informações da entidade}} informa quantas coisas estão ocultas quando nada está selecionado, com um botão {{ui:Reexibir tudo}} ali também.

A {{ui:Estrutura}} mostra grupos e componentes ocultos em itálico, com um olho riscado; clique no olho para mostrar um novamente.

:::note
Com as teclas Modeler, {{key:H}} oculta, {{key:Shift+H}} isola e {{key:Alt+H}} reexibe tudo. ({{ui:Configurações}} › {{ui:ModelCraft}} escolhe o estilo de teclas.)
:::

## Coisas a saber

- O que está oculto é salvo no arquivo do ModelCraft e volta oculto quando você o abre.
- Coisas ocultas continuam no modelo: exportações as incluem, e volumes e tamanhos em {{ui:Informações da entidade}} também.
- Cada ocultar, isolar ou reexibir é um passo de desfazer.
