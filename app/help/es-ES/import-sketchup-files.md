---
title: Importar un modelo SKP
summary: Importe un archivo .skp con sus grupos, componentes, colores, texturas, etiquetas y aristas suaves; vea qué ha entrado y qué no, y siga modelando.
keywords: skp, importar, abrir skp, componentes, grupos, etiquetas, capas, materiales, colores, texturas, oculto, aristas suaves, 3d warehouse, migrar, cambio de programa
from: 325d3c81
---

ModelCraft lee los archivos de SketchUp (`.skp`) con su propio lector, en la propia página. No se sube nada, y funciona sin conexión siempre que funcione ModelCraft. Se han probado archivos desde SketchUp 3 hasta 2026.

## Importar el archivo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo `.skp` en la vista 3D).
2. Elija el archivo.

   Mientras lee, la barra de estado dice "Leyendo house.skp…", y después lo que ha entrado, por ejemplo "Importado house.skp (SketchUp 25.0.575): 1240 caras, 6 componentes, en un grupo."

Todo el modelo llega como un solo grupo con el nombre del archivo, seleccionado, y la vista hace zoom sobre él. Con un {{key:Mod+Z}} se quita todo de nuevo, incluidas las etiquetas.

:::tip
Descomponga el grupo importado ({{ui:Información de entidad}} › {{ui:Descomponer}}) cuando quiera que su contenido quede suelto en el modelo en lugar de dentro de un grupo.
:::

## Qué entra

- **Caras** con sus huecos, y **aristas** que no forman parte de una cara.
- Los **grupos** entran como grupos, y los **componentes** como componentes: cada copia de un componente es una colocación de una sola definición, así que editar una copia cambia todas, como en SketchUp. Los nombres vienen con ellos.
- **Colores.** El material propio de una cara le da su color. Un material pintado sobre un grupo o componente se convierte en la pintura de esa colocación, así que las caras que contiene sin color propio lo toman, como en SketchUp. Un componente pintado de rojo en un lugar y de azul en otro sigue siendo un solo componente.
- **Texturas.** Una cara pintada con un material con textura entra con su textura, colocada sobre la cara tal como está en el archivo, y el estilo {{ui:Sombreado}} la muestra. La imagen se conserva en el archivo de ModelCraft al guardar, y una [imagen renderizada](topic:render) también la muestra. Un material con textura pintado sobre un grupo o componente completo da a esa copia solo el color del material.
- **Etiquetas.** Un grupo o componente en una etiqueta de SketchUp recibe una etiqueta de ModelCraft con el mismo nombre, listada en {{ui:Etiquetas}}, visible u oculta como lo estaba en SketchUp. Si su modelo ya tiene una etiqueta con ese nombre, se usa esa.
- **Lo oculto entra oculto:** caras, aristas, grupos y componentes, y caras y aristas de una etiqueta oculta. Ve lo que mostraba SketchUp, y no se pierde nada: {{ui:Edición}} › {{ui:Más}} › {{ui:Mostrar todo}} los muestra. Véase [Ocultar, aislar y mostrar](topic:hide-isolate).
- Las **aristas suaves y lisas** siguen siendo suaves, así que las superficies curvas siguen viéndose lisas.
- Los **tamaños** salen bien en cualquier unidad: los archivos de SketchUp son en pulgadas por dentro, y ModelCraft los convierte.

## Qué no entra

La barra de estado indica lo que se ha dejado fuera, con recuentos.

- **Algunas texturas** conservan solo el color de su material: una textura que falta en el archivo, una imagen en un formato que los navegadores no pueden mostrar (como un archivo de Photoshop), o una textura sin tamaño. Las caras con textura proyectada entran con la textura colocada de forma aproximada.
- **Etiquetas en caras y aristas sueltas.** ModelCraft solo etiqueta grupos y componentes, así que una cara o arista con etiqueta propia entra sin etiqueta, y la barra de estado las cuenta. Convierta esas caras en un grupo ({{key:Shift+G}}) y etiquete el grupo.
- **Imágenes** colocadas en el modelo, texto, cotas, guías, planos de sección, escenas y estilos.

## Problemas

- "Este no es un archivo de SketchUp." o "Este archivo de SketchUp está dañado: …": el archivo está cortado o es otra cosa con extensión `.skp`. Guárdelo de nuevo desde SketchUp o pida una copia nueva.
- Un archivo de una versión de SketchUp más reciente de la que conoce ModelCraft se rechaza, indicando la versión que encontró.
- Un modelo formado solo por imágenes, texto o cotas indica que no hay nada que mostrar.

## Llevar el modelo de vuelta

ModelCraft no puede guardar archivos `.skp`. Exporte Collada ({{ui:Exportar}} › `.dae`) e impórtelo en SketchUp: los grupos, componentes y colores pasan; las texturas pasan como el color de su material. Véase [Exportar su modelo](topic:export-model).
