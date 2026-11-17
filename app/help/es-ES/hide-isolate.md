---
title: Ocultar, aislar y mostrar
summary: Aparte los objetos para trabajar entre ellos, o muestre solo lo que está editando; los objetos ocultos siguen ocultos en el archivo.
keywords: ocultar, mostrar, mostrar todo, aislar, ocultar los demás, visible, oculto, vista local, visibilidad, apartar
from: 2c8a3457
---

Ocultar aparta objetos sin borrarlos. Una cara, arista, grupo o componente oculto no se dibuja, y no puede ajustarse a él, hacer clic en él ni seleccionarlo, así que puede trabajar sobre lo que queda detrás o entre objetos.

## Ocultar

1. Seleccione lo que quiera ocultar: caras, aristas, grupos o componentes.
2. {{ui:Edición}} › {{ui:Más}} › {{ui:Ocultar}}.

Por ejemplo, para trabajar en el estrecho hueco entre dos grupos muy juntos, seleccione el de delante y ocúltelo: los clics y los ajustes llegan ahora a la cara que hay detrás.

## Aislar

Seleccione lo que quiera mantener a la vista y, después, {{ui:Edición}} › {{ui:Más}} › {{ui:Aislar (ocultar el resto)}}. Todo lo demás del modelo se oculta; o, si está editando dentro de un grupo, todo lo demás de ese grupo. Una cara seleccionada conserva sus aristas.

## Mostrar todo

{{ui:Edición}} › {{ui:Más}} › {{ui:Mostrar todo}} vuelve a mostrar todo, en todos los grupos. {{ui:Información de entidad}} indica cuántos objetos están ocultos cuando no hay nada seleccionado, con un botón {{ui:Mostrar todo}} también allí.

El {{ui:Esquema}} muestra los grupos y componentes ocultos en cursiva, con un ojo tachado; haga clic en el ojo para volver a mostrar uno.

:::note
Con las teclas de Modeler, {{key:H}} oculta, {{key:Shift+H}} aísla y {{key:Alt+H}} muestra todo. ({{ui:Configuración}} › {{ui:ModelCraft}} elige el estilo de teclas.)
:::

## Cosas que conviene saber

- Lo oculto se guarda en el archivo de ModelCraft y vuelve a aparecer oculto al abrirlo.
- Los objetos ocultos siguen en el modelo: las exportaciones los incluyen, y también los volúmenes y tamaños de {{ui:Información de entidad}}.
- Cada ocultar, aislar o mostrar es un paso de deshacer.
