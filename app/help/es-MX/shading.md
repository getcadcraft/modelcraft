---
title: Crear materiales con nodos
summary: Construya un material con texturas, imágenes y operaciones matemáticas en el espacio de trabajo Sombreado, véalo en la vista mientras avanza y pinte caras con él.
keywords: sombreado, hornear, horneado de texturas, oclusión ambiental, ao, curvatura, horneado de normales, alta poli, baja poli, mapa de luz, calcomanía, calcomanías, etiqueta, logo, pintura de texturas, pincel, material, materiales, materialx, mtlx, openpbr, standard surface, biblioteca de materiales, librarycraft, conjunto de texturas, pbr, importar texturas, zip, cc0, arrastrar, nodo, nodos, editor de nodos, shader, textura, procedural, ruido, damero, voronoi, celdas, ondas, ladrillos, baldosas, madera, mármol, degradado, suciedad, desgaste de aristas, rampa de color, mezcla, relieve, mapa de normales, rugosidad, metalicidad, opacidad, recorte, emisión, brillo, desplazamiento, mapeo de caja, triplanar, uv, imagen, nodo de imagen
from: d7368b21
---

Un material hecho en el espacio de trabajo **Sombreado** pertenece al archivo. Es un pequeño grafo: **nodos** que crean texturas, imágenes y números, enlazados a la **salida de material**, cuyas entradas definen el aspecto de la superficie: color base, rugosidad, metalicidad, normal, opacidad, emisión y el resto del modelo OpenPBR. Pinte caras con él como con cualquier material de la biblioteca, y cada cambio se muestra en la vista de inmediato.

## Abrirlo

Elija {{ui:Sombreado}} en la lista de espacios de trabajo. La vista 3D conserva la parte superior de la pantalla y el **editor de nodos** ocupa la parte inferior. El panel de la derecha enumera los materiales propios del archivo.

- {{ui:Material nuevo}} crea uno gris con solo su salida de material.
- **Crear una copia editable de un material de la biblioteca** convierte ladrillo, madera, baldosa y los demás en un grafo que puede cambiar: su textura llega por un nodo de textura de biblioteca, y su relieve, por un nodo de Relieve.
- {{ui:Pintar con él}} pinta las caras o grupos seleccionados, o toma el material para la herramienta Pintar. Los materiales de la herramienta Pintar también listan los del archivo en **En este archivo**.
- {{ui:Duplicar}} y {{ui:Eliminar}} actúan sobre el material que edita. Eliminar no se puede deshacer: las caras pintadas con él muestran el color predeterminado hasta que las vuelva a pintar.

## Materiales de la biblioteca

En el panel, **Biblioteca de materiales (Library)** enumera los materiales de la biblioteca, cada uno con una vista previa renderizada por el trazador de trayectorias de CadCraft. Son conjuntos de texturas publicados bajo CC0, con crédito a quienes los hicieron.

- Haga clic en uno para traerlo al archivo (sus imágenes vienen con él) y, con caras o grupos seleccionados, píntelos.
- Arrástrelo sobre una cara o un grupo en la vista para pintar solo eso.
- Pasa a ser uno de los materiales del archivo: cambie sus nodos como cualquier otro. Su crédito se muestra en el panel y se conserva en el archivo.

## Importar un conjunto de texturas

{{ui:Imágenes o un zip…}} o {{ui:Una carpeta…}} bajo **Importar un conjunto de texturas** crea un material a partir de un conjunto de mapas. Los mapas se identifican por las palabras de sus nombres de archivo: color, albedo, diffuse o basecolor; rugosidad (o gloss, convertido en rugosidad); metalness o metallic; normal (OpenGL o DirectX, según `gl` / `dx` en el nombre); altura o displacement; oclusión ambiental; opacidad; emisión. Los mapas empaquetados (ARM, ORM) se omiten. La baldosa empieza en 1 × 1 m: ajuste su tamaño real en la salida de material. La altura va al desplazamiento con su escala en 0; suba la escala para usarla en mallas.

## MaterialX

MaterialX es el formato abierto que otros programas de 3D y de render usan para intercambiar materiales.

- {{ui:Exportar como MaterialX…}} guarda el material que edita: sus valores, y cada textura como imagen PNG junto al archivo `.mtlx` (en un zip). Elija el shader con el que se escribe: **OpenPBR Surface** (MaterialX 1.39, el mismo modelo que usa ModelCraft) o **Standard Surface** (MaterialX 1.38, que más programas leen hoy). Las texturas se colocan por coordenadas UV en metros; la colocación de caja y triplanar se escriben como UV.
- {{ui:Importar MaterialX…}} (o {{ui:Desde una carpeta…}}) lee archivos `.mtlx` con shaders OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR. Entréguele también las imágenes, o un zip con todo: una imagen se encuentra por su ruta, su nombre o su nombre con otro tipo de imagen (un `.exr` que el archivo nombra puede llegar como un `.jpg` junto a él). Las texturas, los mapas normales, la aritmética, las mezclas y el desplazamiento llegan como nodos; lo demás conserva su valor, y la línea de estado indica qué se omitió.

## Calcomanías

Una calcomanía es una imagen colocada sobre una superficie —un logo, un letrero, una etiqueta, una mancha— con un material propio.

- Defina **Ancho de una nueva calcomanía**, luego {{ui:Colocar una calcomanía…}} (o {{ui:Calcomanía}} en la barra de herramientas), elija una imagen PNG, JPEG o WebP y haga clic en una cara. La imagen se proyecta sobre las superficies de ahí, manteniendo sus proporciones; las partes transparentes de un PNG siguen siendo transparentes.
- Pertenece al grupo o componente en el que hizo clic y se mueve con él. Cubre las caras dentro de su caja que miran hacia el mismo lado, y se detiene en los bordes de lo que está encima.
- Cada calcomanía tiene su propio material, llamado **Calcomanía: <imagen>**, en la lista del archivo: edítelo como cualquier otro (rugosidad, relieve, brillo). {{ui:Material}} junto a la calcomanía lo abre.
- Junto a cada calcomanía están su ancho (la altura sigue a la imagen), {{ui:Girar}} (un cuarto de vuelta) y {{ui:Eliminar}}. Las calcomanías se guardan con los materiales del archivo, fuera de Deshacer.
- Se muestran en la vista sombreada, en renders rápidos y en imágenes de alta calidad.

## Pintar sobre la textura

{{ui:Pintar textura}} (o {{ui:Pintar}} bajo **Pintar sobre la textura**) convierte el puntero en un pincel redondo. Arrastre sobre una cara que tenga uno de los materiales de este archivo: el pincel pinta la imagen detrás de su color base.

- En una malla pinta siguiendo las UV de la malla (desdóblela antes en el espacio de trabajo UV); en otras caras pinta a través de la cara, así que la pintura se repite con la baldosa del material.
- Un material cuyo color base es un color plano recibe una nueva imagen de 512 × 512 píxeles de ese color la primera vez que lo pinta. Un material cuyo color base viene de otros nodos necesita un nodo de imagen enlazado al color base.
- Ajuste el color, el tamaño (en píxeles de la imagen), la intensidad y la dureza del pincel en el panel. {{ui:Deshacer trazo}} o Ctrl+Z (mientras pinta) deshace un trazo, hasta los últimos 20.
- La imagen pintada se guarda en el archivo. Los materiales de la biblioteca no se pueden pintar: primero cree una copia editable.

## Hornear texturas

**Hornear texturas** escribe en imágenes lo que la forma y la escena dan a una superficie, siguiendo las UV de una malla.

- Seleccione una malla que tenga UV (desdóblela en el espacio de trabajo UV), marque los mapas y pulse {{ui:Hornear}}:
  - **Oclusión ambiental**: qué tan abierto está cada punto. Las esquinas, los pliegues y los lugares bajo otras cosas se oscurecen. Todo lo que se muestra en el modelo lo sombrea, hasta la distancia de oclusión.
  - **Curvatura**: brillante en los bordes exteriores, oscura en las esquinas interiores, gris medio en partes planas o suavemente curvas, según el ancho de borde que defina.
  - **Normales del objeto de alto detalle**: seleccione también una copia detallada. Su detalle superficial se escribe como mapa normal para la versión más simple (el objeto con menos triángulos es el que recibe el horneado). La distancia de búsqueda es cuánto pueden estar separadas las dos superficies.
  - **Iluminación**: el sol del lugar y la fecha del modelo (Estilo) con sus sombras, más el cielo, como mapa de luz.
- Las imágenes se unen al archivo y aparecen en los nodos de imagen. Si el material que edita tiene un nodo **Suciedad y desgaste de aristas**, lee de inmediato la nueva oclusión y curvatura.
- Más rayos por texel dan una oclusión e iluminación más suaves, pero tardan más. El horneado se ejecuta en segundo plano, en los núcleos del procesador de la computadora; {{ui:Detener el horneado}} lo detiene.

## Crear un grafo

1. {{ui:Agregar un nodo…}} (o {{key:Shift+A}} en el editor de nodos) agrega un nodo en el centro del editor.
2. Arrastre desde un punto de salida (a la derecha de un nodo) hasta un punto de entrada (a la izquierda de un nodo) para enlazarlos. Un segundo enlace a una entrada reemplaza al primero; arrastre una entrada enlazada para desenlazarla.
3. Las entradas sin enlazar muestran su valor: escriba un número o elija un color. La configuración está abajo de cada nodo.

Arrastre un nodo por su título para moverlo, arrastre el espacio vacío para encuadrar y use la rueda para hacer zoom. {{key:Delete}} elimina los nodos o el enlace seleccionados, {{key:Mod+Z}} deshace, {{key:Mod+D}} duplica y {{key:F}} muestra todos los nodos. Cada cambio es un paso de deshacer del editor de nodos. La propia deshacer del modelo no cambia los materiales.

| Nodos | Lo que crean |
|---|---|
| Coordenadas de textura | Dónde está un punto en la baldosa: repetirlo, desplazarlo o girarlo un cuarto. |
| Valor, Color | Un número, un color. |
| Imagen | Una imagen del archivo (una que llegó con un modelo importado, o una que agregó con {{ui:Agregar una imagen…}}). Elija **Colores** para una foto y **Datos** para un mapa de rugosidad o normal. |
| Textura de biblioteca | La textura, la rugosidad y la altura de un material de la biblioteca. |
| Damero, Ruido | Cuadros; ruido fractal suave con su detalle, rugosidad y semilla. |
| Celdas Voronoi, Ondas, Degradado | Celdas (distancia al punto más cercano, los bordes entre celdas, un color por celda); bandas transversales, verticales o diagonales, como seno, diente de sierra o triángulo, dobladas por ruido; degradados lineal, cuadrático, radial y esférico. |
| Ladrillos, Baldosas | Hileras de ladrillos con desfase, o una cuadrícula de baldosas: colores, mortero o junta, separación y bisel en metros, una altura para los relieves, un número aleatorio por pieza. |
| Madera, Mármol | Anillos a lo largo de la veta con fibras finas; vetas dobladas por turbulencia. |
| Suciedad y desgaste de aristas | Desgasta las aristas convexas y ensucia los huecos a partir de las imágenes de curvatura y oclusión de una malla ([Hornear texturas](topic:shading#bake-textures) las genera; o defina sus dos opciones de imagen, en el diseño UV de la malla: coloque el material por coordenadas UV). Sin ellas no cambia nada. |
| Mezclar colores, Rampa de color, Tono/saturación/valor, Brillo y contraste, Invertir, Gamma, Separar y Combinar RGB | Trabajo con colores. |
| Matemáticas, Mapear rango | Aritmética con números (sumar, multiplicar, potencia, paso suave y más). |
| Relieve, Mapa normal | Una normal a partir de una altura (Relieve) o de una imagen de mapa normal (Mapa normal: elija la dirección del canal verde). |

## La salida de material

Sus opciones dicen cómo se acomoda la textura sobre las superficies:

- **Ancho de baldosa** y **Alto de baldosa**: cuántos metros cubre una baldosa de la textura. Todo lo que hace un grafo se repite a lo largo de la baldosa sin costura.
- **Colocado por**: **Coordenadas UV** sigue las caras (caras de empujar/tirar: a lo largo de cada cara; mallas: sus UV, una unidad UV = una baldosa), **Caja** proyecta desde el más cercano de los tres ejes, y **Triplanar** mezcla las tres proyecciones en superficies inclinadas (**Nitidez de mezcla**: más alto, una mezcla más dura).
- **Intensidad normal** escala la entrada de normal. **Escala de desplazamiento** fija cuánto mueve la entrada de desplazamiento los vértices de una malla.
- {{ui:Más entradas}} muestra el resto de las entradas de OpenPBR: recubrimiento, pelusa, subsuperficie, película delgada, transmisión y sus colores.

## En imágenes de alta calidad

El trazador de trayectorias lee del grafo el color base, la rugosidad, la metalicidad, la opacidad, la normal y la emisión conforme cambian sobre la superficie. Cualquier otra entrada que enlace (un recubrimiento que varía, por ejemplo) se usa en su promedio; el panel lo indica. Un recorte a partir de una textura de opacidad muestra su forma, y su sombra es uniformemente translúcida. Una textura que brilla ilumina lo que enfrenta, sin muestrearse como lámpara.

El **Desplazamiento** mueve los vértices solo de las mallas, así que agregue un modificador de subdivisión para más detalle ([Modificadores](topic:modifiers)). Las caras de empujar/tirar conservan su forma y reciben los relieves desde la normal.

:::tip
En una computadora con WebGPU, el grafo se calcula en la tarjeta gráfica; sin ella, en el procesador. El resultado es el mismo.
:::
