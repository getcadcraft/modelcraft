---
title: Crear materiales con nodos
summary: Armá un material con texturas, imágenes y cálculos en el espacio de trabajo Sombreado, verlo en la vista mientras avanzás, y pintar caras con él.
keywords: sombreado, hornear, horneado, horneado de texturas, oclusión ambiental, ao, curvatura, horneado de normales, alta poligonía, baja poligonía, mapa de luz, calcomanía, calcomanías, sticker, logo, etiqueta, pintura de textura, pintar textura, pincel, material, materiales, materialx, mtlx, openpbr, standard surface, biblioteca de materiales, librarycraft, conjunto de texturas, pbr, importar texturas, zip, cc0, arrastrar, nodo, nodos, editor de nodos, shader, textura, procedural, ruido, damero, voronoi, celdas, ondas, ladrillos, baldosas, madera, mármol, degradado, suciedad, desgaste de borde, rampa de color, mezcla, bump, mapa de normales, rugosidad, metalicidad, opacidad, recorte, emisión, brillo, desplazamiento, mapeo de caja, triplanar, uv, imagen, nodo de imagen, openpbr
from: d7368b21
---

Un material hecho en el espacio de trabajo **Sombreado** pertenece al archivo. Es un gráfico pequeño: **nodos** que crean texturas, imágenes y números, unidos a la **Salida de material**, cuyas entradas son el aspecto de la superficie: color base, rugosidad, metalicidad, normal, opacidad, emisión y el resto del modelo OpenPBR. Pintás caras con él como con cualquier material de biblioteca, y cada cambio se ve en la vista de inmediato.

## Abrirlo

Elegí {{ui:Sombreado}} en la lista de Espacios de trabajo. La vista 3D conserva la parte de arriba de la pantalla y el **editor de nodos** ocupa la parte de abajo. El panel de la derecha lista los materiales propios del archivo.

- {{ui:Material nuevo}} crea uno gris con solo su Salida de material.
- **Hacer una copia editable de un material de biblioteca** convierte ladrillo, madera, baldosa y el resto en un gráfico que podés cambiar: su textura llega por un nodo de Textura de biblioteca, sus relieves por un nodo Bump.
- {{ui:Pintar con él}} pinta las caras o grupos seleccionados, o elige el material para la herramienta Pintar. Los materiales de la herramienta Pintar también listan los del archivo bajo **En este archivo**.
- {{ui:Duplicar}} y {{ui:Eliminar}} actúan sobre el material que estás editando. Eliminar no se puede deshacer: las caras pintadas con él muestran el color predeterminado hasta que las pintes de nuevo.

## Materiales de la biblioteca

La **Biblioteca de materiales (Biblioteca)** del panel lista los materiales de la biblioteca, cada uno con una vista previa renderizada por el trazador de caminos de CadCraft. Son conjuntos de texturas publicados bajo CC0, acreditados a las personas que los hicieron.

- Hacé clic en uno para traerlo al archivo (sus imágenes vienen con él) y, con caras o grupos seleccionados, pintarlos.
- Arrastrá uno sobre una cara o un grupo en la vista para pintar solo eso.
- Pasa a ser uno de los materiales del archivo: cambiá sus nodos como cualquier otro. Su crédito se muestra en el panel y queda en el archivo.

## Importar un conjunto de texturas

{{ui:Imágenes o un zip…}} o {{ui:Una carpeta…}} bajo **Importar un conjunto de texturas** crea un material a partir de un conjunto de mapas. Los mapas se reconocen por las palabras de sus nombres de archivo: color, albedo, difuso o basecolor; rugosidad (o brillo, convertido en rugosidad); metalicidad o metallic; normal (OpenGL o DirectX, según `gl` / `dx` en el nombre); altura o desplazamiento; oclusión ambiental; opacidad; emisión. Los mapas empaquetados (ARM, ORM) se dejan afuera. La baldosa empieza en 1 × 1 m: configurá su tamaño real en la Salida de material. La altura va a desplazamiento con su escala en 0: subí la escala para usarla en mallas.

## MaterialX

MaterialX es el formato abierto que usan otros programas de 3D y de render para pasarse materiales.

- {{ui:Exportar como MaterialX…}} guarda el material que estás editando: sus valores, y cada textura como imagen PNG junto al archivo `.mtlx` (en un zip). Elegí el shader con el que se escribe: **OpenPBR Surface** (MaterialX 1.39, el mismo modelo que usa ModelCraft) o **Standard Surface** (MaterialX 1.38, que hoy leen más programas). Las texturas se ubican por coordenadas UV en metros; la ubicación en caja y triplanar se escriben como UV.
- {{ui:Importar MaterialX…}} (o {{ui:Desde una carpeta…}}) lee archivos `.mtlx` con shaders OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR. Dale también las imágenes, o un zip con todo: una imagen se encuentra por su ruta, su nombre, o su nombre con otro tipo de imagen (un `.exr` que dicen los nombres de archivo puede venir como `.jpg` al lado). Las texturas, mapas de normales, aritmética, mezclas y desplazamiento entran como nodos; lo demás conserva su valor, y la línea de estado dice qué se dejó afuera.

## Calcomanías

Una calcomanía es una imagen aplicada sobre una superficie —un logo, un cartel, una etiqueta, una mancha— con un material propio.

- Configurá **Ancho de una calcomanía nueva**, después {{ui:Colocar una calcomanía…}} (o {{ui:Calcomanía}} en la barra de herramientas), elegí una imagen PNG, JPEG o WebP y hacé clic en una cara. La imagen se proyecta sobre las superficies de ahí, manteniendo sus proporciones; las partes transparentes de un PNG quedan transparentes.
- Pertenece al grupo o componente donde hiciste clic y se mueve con él. Cubre las caras dentro de su caja que miran hacia el mismo lado, y se detiene en los bordes de lo que está encima.
- Cada calcomanía tiene su propio material, llamado **Calcomanía: <picture>**, en la lista del archivo: editala como cualquier otro (rugosidad, un relieve, un brillo). {{ui:Material}} junto a la calcomanía lo abre.
- Junto a cada calcomanía: su ancho (la altura sigue a la imagen), {{ui:Girar}} (un cuarto de vuelta) y {{ui:Eliminar}}. Las calcomanías se guardan con los materiales del archivo, fuera de Deshacer.
- Se muestran en la vista sombreada, en renders rápidos y en imágenes de alta calidad.

## Pintar sobre la textura

{{ui:Pintar textura}} (o {{ui:Pintar}} bajo **Pintar sobre la textura**) convierte el puntero en un pincel redondo. Arrastrá sobre una cara que tenga uno de los materiales de este archivo: el pincel pinta la imagen detrás de su color base.

- En una malla pinta siguiendo las UV de la malla (desenvolvela antes en el espacio de trabajo UV); en otras caras pinta a través de la cara, así que la pintura se repite con la baldosa del material.
- Un material cuyo color base es un color liso recibe una imagen nueva de 512 × 512 píxeles de ese color la primera vez que lo pintás. Un material cuyo color base viene de otros nodos necesita un nodo de Imagen unido al Color base.
- Configurá el color del pincel, el tamaño (en píxeles de la imagen), la intensidad y la dureza en el panel. {{ui:Deshacer trazo}} o Ctrl+Z (mientras pintás) quita un trazo, hasta los últimos 20.
- La imagen pintada se guarda en el archivo. Los materiales de biblioteca no se pueden pintar: hacé primero una copia editable.

## Hornear texturas

**Hornear texturas** escribe en imágenes lo que la forma y la escena dan a una superficie, siguiendo las UV de una malla.

- Seleccioná una malla que tenga UV (desenvolvela en el espacio de trabajo UV), marcá los mapas y presioná {{ui:Hornear}}:
  - **Oclusión ambiental**: qué tan abierto está cada punto; las esquinas, los pliegues y los lugares debajo de otras cosas se oscurecen. Todo lo que se muestra en el modelo lo sombrea, hasta la distancia de oclusión.
  - **Curvatura**: brillante a lo largo de los bordes exteriores, oscuro en las esquinas interiores, gris medio en partes planas o suavemente curvas, según el ancho de borde que configurés.
  - **Normales desde el objeto de alto detalle**: seleccioná también una copia detallada: su detalle de superficie se escribe como mapa de normales para la más simple (se hornea sobre el objeto con menos triángulos). La distancia de búsqueda es cuán separadas pueden estar las dos superficies.
  - **Iluminación**: el sol del lugar y la fecha del modelo (Estilo) con sus sombras, más el cielo, como mapa de luz.
- Las imágenes se unen al archivo y aparecen en los nodos de Imagen. Si el material que estás editando tiene un nodo **Suciedad y desgaste de borde**, lee de inmediato la nueva oclusión y curvatura.
- Más rayos por texel dan oclusión e iluminación más suaves y tardan más. El horneado corre en los núcleos del procesador de la computadora, en segundo plano; {{ui:Detener horneado}} lo frena.

## Armar un gráfico

1. {{ui:Agregar un nodo…}} (o {{key:Shift+A}} en el editor de nodos) agrega un nodo en el medio del editor.
2. Arrastrá desde un punto de salida (a la derecha de un nodo) hasta un punto de entrada (a la izquierda de un nodo) para unirlos. Una segunda unión a una entrada reemplaza la primera; arrastrá una entrada unida hacia afuera para desunirla.
3. Las entradas sin unir muestran su valor: escribí un número o elegí un color. La configuración está abajo de cada nodo.

Arrastrá un nodo por su título para moverlo, arrastrá en espacio vacío para desplazar, y usá la rueda para hacer zoom. {{key:Delete}} elimina los nodos o la unión seleccionados, {{key:Mod+Z}} deshace, {{key:Mod+D}} duplica, {{key:F}} muestra todos los nodos. Cada cambio es un paso de deshacer del editor de nodos. El deshacer propio del modelo no cambia los materiales.

| Nodos | Qué crean |
|---|---|
| Coordenadas de textura | Dónde está un punto en la baldosa: repetirlo, desplazarlo, girarlo un cuarto. |
| Valor, Color | Un número, un color. |
| Imagen | Una imagen del archivo (una que vino con un modelo importado, o una que agregaste con {{ui:Agregar una imagen…}}). Elegí **Colores** para una foto y **Datos** para un mapa de rugosidad o de normales. |
| Textura de biblioteca | La textura, rugosidad y altura de un material de biblioteca. |
| Damero, Ruido | Cuadros; ruido fractal suave con su detalle, rugosidad y semilla. |
| Celdas Voronoi, Ondas, Degradado | Celdas (distancia al punto más cercano, los bordes entre celdas, un color por celda); bandas a lo ancho, a lo alto o en diagonal, como seno, diente de sierra o triángulo, curvadas por ruido; degradados lineal, cuadrático, radial y esférico. |
| Ladrillos, Baldosas | Hileras de ladrillos con desfase alternado, o una cuadrícula de baldosas: colores, mortero o pastina, una separación y un bisel en metros, una altura para los relieves, un número aleatorio por pieza. |
| Madera, Mármol | Anillos siguiendo la veta con fibras finas; vetas curvadas por turbulencia. |
| Suciedad y desgaste de borde | Desgasta los bordes convexos y ensucia las huecas a partir de las imágenes de curvatura y oclusión de una malla ([Hornear texturas](topic:shading#bake-textures) las crea; o configurá sus dos ajustes de imagen, en la disposición UV de la malla: ubicá el material por coordenadas UV). Sin ellas no cambia nada. |
| Mezclar colores, Rampa de color, Tono/saturación/valor, Brillo y contraste, Invertir, Gamma, Separar y Combinar RGB | Trabajo de color. |
| Math, Rango de mapa | Aritmética sobre números (sumar, multiplicar, potencia, paso suave y más). |
| Bump, Mapa de normales | Una normal a partir de una altura (Bump) o de una imagen de mapa de normales (Mapa de normales: elegí la dirección del canal verde). |

## La Salida de material

Sus ajustes dicen cómo se asienta la textura sobre las superficies:

- **Ancho de baldosa** y **Alto de baldosa**: cuántos metros cubre una baldosa de la textura. Todo lo que hace un gráfico se repite a lo largo de la baldosa sin costura.
- **Ubicada por**: **Coordenadas UV** sigue las caras (caras de empujar/tirar: a lo largo de cada cara; mallas: sus UV, una unidad UV = una baldosa), **Caja** proyecta desde el más cercano de los tres ejes, **Triplanar** mezcla las tres proyecciones en superficies inclinadas (**Nitidez de mezcla**: más alto es una mezcla más dura).
- **Intensidad de normal** escala la entrada normal. **Escala de desplazamiento** fija cuánto mueve la entrada de desplazamiento los vértices de una malla.
- {{ui:Más entradas}} muestra el resto de las entradas OpenPBR: capa, pelusa, subsuperficie, película delgada, transmisión y sus colores.

## En imágenes de alta calidad

El trazador de caminos lee el color base, la rugosidad, la metalicidad, la opacidad, la normal y la emisión del gráfico tal como varían sobre la superficie. Cualquier otra entrada que unas (una capa que varía, por ejemplo) se usa en su promedio; el panel dice cuál es. Un recorte por una textura de opacidad muestra su forma, y su sombra es uniformemente transparente. Una textura que brilla ilumina lo que tiene enfrente, sin muestrearse como lámpara.

El **Desplazamiento** mueve los vértices solo de las mallas, así que agregá un modificador de Subdivisión para más detalle ([Modificadores](topic:modifiers)). Las caras de empujar/tirar conservan su forma y reciben los relieves de la normal.

:::tip
En una computadora con WebGPU, el gráfico se calcula en la tarjeta gráfica; sin ella, en el procesador. El resultado es el mismo.
:::
