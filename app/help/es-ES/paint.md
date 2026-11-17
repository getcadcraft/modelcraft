---
title: Pintar con colores y materiales
summary: Dé a caras, grupos y componentes un color sólido o un material como ladrillo, revestimiento, tejas o madera, y consérvelos al exportar.
keywords: pintar, color, material, materiales, textura, texturas, ladrillo, revestimiento, tejas, cubiertas, madera, piedra, azulejo, hormigón, estuco, hierba, grava, vidrio, metal, cubo de pintura, relleno, muestra, cuentagotas, predeterminado, glb, obj, mtl, collada
from: b1500523
---

Los colores ayudan a distinguir partes de un modelo, y los **materiales** (ladrillo, revestimiento, cubiertas, madera, piedra, azulejo, hormigón, estuco, hierba, vidrio, metal) hacen que parezca de lo que está construido. Ambos se pintan de la misma forma.

## Elegir un color

La sección {{ui:Colores}} de la derecha muestra una fila de colores sólidos, {{ui:Predeterminado}} (el que está tachado con una línea: sin color) y una muestra {{ui:+}} para cualquier otro color. Haga clic en uno para convertirlo en el color actual. La herramienta Pintar empieza con él.

## Pintar

1. Pulse {{key:B}} ({{ui:Pintar}}), o, sin nada seleccionado, haga clic en un color. (Con algo seleccionado, al hacer clic en un color se pinta la selección de una vez.)
2. Haga clic en una cara para pintarla.
3. Haga clic en un grupo o un componente para pintar esa copia: sus caras que no tienen color propio toman este color. Las caras que pintó dentro de él conservan el suyo.

Para pintar varias cosas a la vez, selecciónelas primero y después haga clic en un color, o haga clic en cualquiera de ellas con {{ui:Pintar}}. Es un solo paso de deshacer.

| Mantenga pulsado | Y haga clic en una cara | Qué se pinta |
|---|---|---|
| — | | Esa cara |
| {{key:Ctrl}} | | Toda cara conectada a ella que tenga el mismo color |
| {{key:Shift}} | | Toda cara de ese color en el grupo en que está trabajando |
| {{key:Alt}} | | Nada: en su lugar, toma ese color |

Para devolver una cara a sin color, elija {{ui:Predeterminado}} y haga clic en ella.

## Pintar con un material

La sección {{ui:Materiales}}, debajo de {{ui:Colores}}, muestra la biblioteca de materiales por tipo: ladrillo y bloque, revestimiento, cubiertas, madera, piedra, azulejo, hormigón, estuco, terreno, vidrio y metal. Sitúe el cursor sobre una muestra para ver su nombre. Haga clic en una y pinte con ella igual que con un color: pulse {{key:B}} y haga clic en caras, grupos o componentes; o seleccione primero y haga clic en el material.

- En el estilo **Sombreado**, las caras muestran la textura del material. Líneas ocultas, alambre y rayos X muestran su color.
- Las texturas se orientan **horizontalmente a lo largo de cada cara** y **en sentido vertical**: las hiladas de ladrillo quedan horizontales en todos los muros, las tejas bajan por la pendiente de un techo, y las tablas de un suelo siguen el eje rojo. Están a su tamaño real (un ladrillo mide unos 215 mm de largo), así que se ven bien a cualquier distancia.
- En una [imagen renderizada](topic:render), los materiales conservan su textura, su rugosidad y, en el caso del vidrio y el metal, su brillo.
- {{key:Alt}}-clic con {{ui:Pintar}} toma también el material de una cara.

Las texturas las dibuja ModelCraft por sí mismo, así que funcionan sin conexión y son libres de usar para cualquier fin (CC0).

## Componentes y colores

Un color pintado en una cara **dentro** de un componente se muestra en todas las copias, porque las copias comparten una sola definición. Un color pintado en una **copia** desde fuera (con el componente cerrado) pertenece solo a esa copia, así que dos copias de un mismo componente pueden tener colores distintos. {{ui:Información de entidad}} muestra el color de una cara, grupo o componente seleccionado.

## Colores en los archivos

- El archivo de ModelCraft conserva todos los colores y todos los materiales.
- Los demás formatos reciben el **color del material** (su aspecto a distancia) en lugar de la textura: glTF, Collada, OBJ, DWG y DXF, y la revisión para impresión 3D. En glTF, Collada y OBJ el material conserva su nombre, como `Material_brick-red`.
- **glTF (.glb)** y **Collada (.dae)**: cada color se convierte en un material. Un componente mostrado en distintos colores se escribe una vez por color. glTF también escribe las texturas importadas como texturas.
- **OBJ**: al exportar se descargan dos archivos, el `.obj` y un archivo de materiales `.mtl` con los colores. Guárdelos en la misma carpeta. Con texturas importadas, el `.obj`, el `.mtl` y las imágenes llegan en un solo `.zip`.
- **DWG** conserva los colores exactos; **DXF** usa el más cercano de los 255 colores estándar de CAD.
- **STL** y **PLY** llevan colores: STL con la convención VisCAM / SolidView (los programas que no la leen la ignoran), y PLY como color en cada punto. Consulte [Formatos de archivo en detalle](topic:formats).

:::tip
Para modelar una pantalla, pinte el marco de carbón y el vidrio de azul después de [desplazar](topic:draw-faces) la cara frontal.
:::
