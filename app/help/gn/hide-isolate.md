---
title: Ocultar, aislar y mostrar
summary: Aparte cosas para trabajar entre ellas, o muestre solo lo que está trabajando; lo oculto sigue oculto en el archivo.
keywords: ocultar, mostrar, mostrar todo, aislar, ocultar otros, visible, oculto, vista local, visibilidad, fuera del camino
from: 2c8a3457
---

Ocultar aparta cosas sin borrarlas. Una cara, arista, grupo o componente oculto no se dibuja, y no se puede ajustar, hacer clic en él ni seleccionarlo, así que puede trabajar sobre lo que queda detrás o entre cosas.

## Ocultar

1. Seleccione lo que quiere ocultar: caras, aristas, grupos o componentes.
2. {{ui:Editar}} › {{ui:Más}} › {{ui:Ocultar}}.

Por ejemplo, para trabajar en el hueco estrecho entre dos grupos que están muy juntos, seleccione el de adelante y ocúltelo: los clics y los ajustes ahora llegan a la cara que queda detrás.

## Aislar

Seleccione lo que quiere mantener a la vista, y luego {{ui:Editar}} › {{ui:Más}} › {{ui:Aislar (ocultar el resto)}}. Todo lo demás del modelo se oculta; o, mientras edita dentro de un grupo, todo lo demás de ese grupo. Una cara seleccionada conserva sus aristas.

## Mostrar todo

{{ui:Editar}} › {{ui:Más}} › {{ui:Mostrar todo}} vuelve a mostrar todo, en todos los grupos. {{ui:Información de entidad}} indica cuántas cosas están ocultas cuando no hay nada seleccionado, con un botón {{ui:Mostrar todo}} también ahí.

El {{ui:Esquema}} muestra los grupos y componentes ocultos en cursiva, con un ojo tachado; haga clic en el ojo para mostrar uno otra vez.

:::note
Con las teclas de Modeler, {{key:H}} oculta, {{key:Shift+H}} aísla y {{key:Alt+H}} muestra todo. ({{ui:Configuración}} › {{ui:ModelCraft}} elige el estilo de teclas.)
:::

## Cosas que conviene saber

- Lo oculto se guarda en el archivo de ModelCraft y vuelve oculto cuando lo abre.
- Lo oculto sigue en el modelo: las exportaciones lo incluyen, y también los volúmenes y tamaños de {{ui:Información de entidad}}.
- Cada ocultar, aislar o mostrar es un paso de deshacer.
