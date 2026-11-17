---
title: Importar un modelo SKP
summary: Importe un archivo .skp con sus grupos, componentes, colores, texturas, etiquetas y aristas suaves; vea qué entró y qué no, y siga modelando.
keywords: skp, importar, abrir skp, componentes, grupos, etiquetas, capas, materiales, colores, texturas, oculto, aristas suaves, 3d warehouse, migrar, cambiar
from: 325d3c81
---

ModelCraft lee archivos de SketchUp (`.skp`) con su propio lector, en la página. No se sube nada, y funciona sin conexión siempre que funcione ModelCraft. Se han probado archivos de SketchUp desde la versión 3 hasta 2026.

## Importar el archivo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo `.skp` en la vista 3D).
2. Elija el archivo.

   La barra de estado dice "Leyendo house.skp…" mientras lee, y luego qué entró, por ejemplo "Importado house.skp (SketchUp 25.0.575): 1240 caras, 6 componentes, en un grupo."

El modelo completo llega como un grupo con el nombre del archivo, seleccionado, y la vista hace zoom sobre él. Con {{key:Mod+Z}} se quita todo otra vez, incluidas las etiquetas.

:::tip
Descomponga el grupo importado ({{ui:Información de entidad}} › {{ui:Descomponer}}) cuando quiera su contenido suelto en su modelo en lugar de dentro de un solo grupo.
:::

## Qué entra

- **Caras** con sus huecos, y **aristas** que no forman parte de una cara.
- **Grupos** llegan como grupos, y **componentes** como componentes: cada copia de un componente es una colocación de una misma definición, así que editar una copia cambia todas, como en SketchUp. Los nombres llegan con ellos.
- **Colores.** El material propio de una cara le da su color. Un material pintado sobre un grupo o componente se convierte en la pintura de esa colocación, así que las caras dentro que no tienen color propio lo toman, como en SketchUp. Un componente pintado de rojo en un lugar y de azul en otro sigue siendo un solo componente.
- **Texturas.** Una cara pintada con un material texturizado llega con su textura, colocada sobre la cara como en el archivo, y el estilo {{ui:Sombreado}} la muestra. La imagen se guarda en el archivo de ModelCraft al guardar, y una [imagen renderizada](topic:render) también la muestra. Un material texturizado pintado sobre un grupo o componente completo da a esa copia solo el color del material.
- **Etiquetas.** Un grupo o componente en una etiqueta de SketchUp recibe una etiqueta de ModelCraft con el mismo nombre, listada en {{ui:Etiquetas}}, mostrada u oculta como estaba en SketchUp. Si su modelo ya tiene una etiqueta con ese nombre, se usa esa.
- **Lo oculto llega oculto:** caras, aristas, grupos y componentes, y caras y aristas en una etiqueta oculta. Ve lo que mostraba SketchUp, y nada se pierde: {{ui:Editar}} › {{ui:Más}} › {{ui:Mostrar todo}} los muestra. Vea [Ocultar, aislar y mostrar](topic:hide-isolate).
- **Las aristas suaves y lisas** siguen siendo suaves, así que las superficies curvas siguen viéndose lisas.
- **Los tamaños** salen bien en cualquier unidad: los archivos de SketchUp están en pulgadas por dentro, y ModelCraft los convierte.

## Qué no entra

La barra de estado dice qué se dejó fuera, con cuentas.

- **Algunas texturas** conservan solo el color de su material: una textura que falta en el archivo, una imagen en un formato que los navegadores no pueden mostrar (como un archivo de Photoshop), o una textura sin tamaño. Las caras con una textura proyectada llegan con la textura colocada de forma aproximada.
- **Etiquetas en caras y aristas sueltas.** ModelCraft etiqueta solo grupos y componentes, así que una cara o arista con su propia etiqueta llega sin etiqueta, y la barra de estado las cuenta. Convierta esas caras en un grupo ({{key:Shift+G}}) y etiquete el grupo.
- **Imágenes** colocadas en el modelo, texto, cotas, guías, planos de sección, escenas y estilos.

## Problemas

- "Este no es un archivo de SketchUp." o "Este archivo de SketchUp está dañado: …": el archivo está cortado o es otra cosa con nombre `.skp`. Guárdelo de nuevo desde SketchUp, o pida una copia nueva.
- Un archivo de una versión de SketchUp más nueva que la que conoce ModelCraft se rechaza, y se indica la versión encontrada.
- Un modelo hecho solo de imágenes, texto o cotas indica que no tiene nada que mostrar.

## Llevar el modelo de vuelta

ModelCraft no puede guardar archivos `.skp`. Exporte Collada ({{ui:Exportar}} › `.dae`) e impórtelo en SketchUp: grupos, componentes y colores pasan; las texturas pasan como el color de su material. Vea [Exportar su modelo](topic:export-model).
