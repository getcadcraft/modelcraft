---
title: Pintar con colores y materiales
summary: Dé a caras, grupos y componentes un color sólido o un material como ladrillo, revestimiento, techado o madera, y conserve el color al exportar.
keywords: pintar, color, material, materiales, textura, texturas, ladrillo, revestimiento, tejas, techado, madera, piedra, loseta, concreto, estuco, pasto, grava, vidrio, metal, cubeta de pintura, relleno, muestra, cuentagotas, predeterminado, glb, obj, mtl, collada
from: b1500523
---

Los colores le ayudan a distinguir partes de un modelo, y los **materiales** (ladrillo, revestimiento, techado, madera, piedra, loseta, concreto, estuco, pasto, vidrio, metal) hacen que se vea como aquello con lo que está construido. Ambos se pintan igual.

## Elegir un color

La sección {{ui:Colors}} a la derecha muestra una fila de colores sólidos, {{ui:Default}} (el que tiene una línea cruzada: sin color) y una muestra {{ui:+}} para cualquier otro color. Haga clic en uno para hacerlo el color actual. La herramienta Pintar empieza con él.

## Pintar

1. Pulse {{key:B}} ({{ui:Paint}}), o, sin nada seleccionado, haga clic en un color. (Con algo seleccionado, al hacer clic en un color se pinta la selección de inmediato.)
2. Haga clic en una cara para pintarla.
3. Haga clic en un grupo o en un componente para pintar esa copia: sus caras que no tienen color propio toman este color. Las caras que pintó dentro de él conservan el suyo.

Para pintar varias cosas a la vez, selecciónelas primero y luego haga clic en un color, o haga clic en cualquiera de ellas con {{ui:Paint}}. Es un solo paso de deshacer.

| Mantenga presionado | Y haga clic en una cara | Qué se pinta |
|---|---|---|
| — | | Esa cara |
| {{key:Ctrl}} | | Toda cara conectada a ella que tenga el mismo color |
| {{key:Shift}} | | Toda cara de ese color en el grupo en que trabaja |
| {{key:Alt}} | | Nada: en su lugar toma ese color |

Para devolver una cara a sin color, elija {{ui:Default}} y haga clic en ella.

## Pintar con un material

La sección {{ui:Materials}}, debajo de {{ui:Colors}}, enumera la biblioteca de materiales por tipo: ladrillo y bloque, revestimiento, techado, madera, piedra, loseta, concreto, estuco, terreno, vidrio y metal. Coloque el puntero sobre una muestra para ver su nombre. Haga clic en una y luego pinte exactamente como con un color: {{key:B}}, y haga clic en caras, grupos o componentes; o seleccione primero y haga clic en el material.

- En el estilo **Sombreado** las caras muestran la textura del material. Línea oculta, alámbrico y rayos X muestran su color.
- Las texturas corren **horizontales a lo largo de cada cara** y **hacia arriba** en ella: las hiladas de ladrillo quedan horizontales en cada muro, las tejas bajan por la pendiente de un techo, las tablas de un piso siguen el eje rojo. Tienen su tamaño real (un ladrillo mide unos 215 mm de largo), así que se ven bien a cualquier distancia.
- En una [imagen renderizada](topic:render) los materiales conservan su textura, su rugosidad y, en el caso del vidrio y el metal, su brillo.
- Hacer clic con {{key:Alt}} usando {{ui:Paint}} también toma el material de una cara.

Las texturas las dibuja el propio ModelCraft, así que funcionan sin conexión y son libres para cualquier uso (CC0).

## Componentes y colores

Un color pintado en una cara **dentro** de un componente se muestra en cada copia, porque las copias comparten una sola definición. Un color pintado en una **copia** desde afuera (con el componente cerrado) pertenece solo a esa copia, así que dos copias de un mismo componente pueden tener colores distintos. {{ui:Entity info}} muestra el color de una cara, grupo o componente seleccionado.

## Colores en los archivos

- El archivo de ModelCraft conserva cada color y cada material.
- Los demás formatos reciben el **color del material** (su aspecto a distancia) en lugar de la textura: glTF, Collada, OBJ, DWG y DXF, y la revisión para impresión 3D. En glTF, Collada y OBJ el material conserva su nombre, como `Material_brick-red`.
- **glTF (.glb)** y **Collada (.dae)**: cada color se convierte en un material. Un componente que se muestra en distintos colores se escribe una vez por color. glTF además escribe las texturas importadas como texturas.
- **OBJ**: al exportar se descargan dos archivos, el `.obj` y un archivo de materiales `.mtl` con los colores. Guárdelos en la misma carpeta. Con texturas importadas, el `.obj`, el `.mtl` y las imágenes llegan en un solo `.zip`.
- **DWG** conserva los colores exactos; **DXF** usa el más cercano de los 255 colores estándar de CAD.
- **STL** y **PLY** llevan colores: STL en la convención de VisCAM / SolidView (los programas que no la leen la ignoran), y PLY como un color en cada punto. Vea [Formatos de archivo en detalle](topic:formats).

:::tip
Para modelar una pantalla, pinte el marco de carbón y el vidrio de azul después de [desfasar](topic:draw-faces) la cara frontal.
:::
