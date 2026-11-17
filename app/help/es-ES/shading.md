---
title: Crear materiales con nodos
summary: Cree un material a partir de texturas, imágenes y cálculos en el espacio de trabajo Sombreado, véalo en la vista a medida que avanza y pinte caras con él.
keywords: sombreado, hornear, horneado, horneado de texturas, oclusión ambiental, ao, curvatura, horneado de normales, alta poligonización, baja poligonización, mapa de luz, calcomanía, calcomanías, pegatina, logotipo, etiqueta, pintura de texturas, pintar textura, pincel, material, materiales, materialx, mtlx, openpbr, standard surface, biblioteca de materiales, librarycraft, conjunto de texturas, pbr, importar texturas, zip, cc0, arrastrar, nodo, nodos, editor de nodos, shader, textura, procedural, ruido, damero, voronoi, celdas, ondas, ladrillos, baldosas, madera, mármol, gradiente, suciedad, desgaste de bordes, rampa de color, mezcla, relieve, mapa de normales, rugosidad, metalicidad, opacidad, recorte, emisión, brillo, desplazamiento, mapeado de caja, triplanar, uv, imagen, textura de imagen, openpbr
from: d7368b21
---

Un material creado en el espacio de trabajo **Sombreado** pertenece al archivo. Es un pequeño grafo: **nodos** que crean texturas, imágenes y números, enlazados con la **Salida de material**, cuyas entradas son el aspecto de la superficie (color base, rugosidad, metalicidad, normal, opacidad, emisión y el resto del modelo OpenPBR). Pinte caras con él como con cualquier material de la biblioteca, y cada cambio se ve en la vista al instante.

## Abrirlo

Elija {{ui:Sombreado}} en la lista de espacios de trabajo. La vista 3D conserva la parte superior de la pantalla y el **editor de nodos** ocupa la inferior. El panel de la derecha enumera los materiales propios del archivo.

- {{ui:Material nuevo}} crea uno gris con solo su Salida de material.
- **Hacer una copia editable de un material de la biblioteca** convierte ladrillo, madera, baldosa y el resto en un grafo que puede cambiar: su textura llega a través de un nodo Textura de biblioteca, y sus relieves a través de un nodo Relieve.
- {{ui:Pintar con él}} pinta las caras o grupos seleccionados, o elige el material para la herramienta Pintar. Los materiales de la herramienta Pintar también listan los del archivo bajo **En este archivo**.
- {{ui:Duplicar}} y {{ui:Eliminar}} actúan sobre el material que edita. Eliminar no se puede deshacer: las caras pintadas con él muestran el color predeterminado hasta que las vuelva a pintar.

## Materiales de la biblioteca

La **Biblioteca de materiales (Biblioteca)** del panel lista los materiales de la biblioteca, cada uno con una vista previa renderizada por el trazador de trayectorias de CadCraft. Son conjuntos de texturas publicados bajo CC0, atribuidos a quienes los hicieron.

- Haga clic en uno para traerlo al archivo (sus imágenes vienen con él) y, con caras o grupos seleccionados, píntelos.
- Arrastre uno sobre una cara o un grupo de la vista para pintar solo eso.
- Pasa a ser uno de los materiales del archivo: cambie sus nodos como con cualquier otro. Su atribución se muestra en el panel y se conserva en el archivo.

## Importar un conjunto de texturas

{{ui:Imágenes o un zip…}} o {{ui:Una carpeta…}} bajo **Importar un conjunto de texturas** crea un material a partir de un conjunto de mapas. Los mapas se reconocen por las palabras de sus nombres de archivo: color, albedo, diffuse o basecolor; rugosidad (o gloss, convertido en rugosidad); metalicidad o metallic; normal (OpenGL o DirectX, por `gl` / `dx` en el nombre); altura o desplazamiento; oclusión ambiental; opacidad; emisión. Los mapas empaquetados (ARM, ORM) se omiten. La baldosa empieza en 1 × 1 m: ajuste su tamaño real en la Salida de material. La altura va a desplazamiento con su escala en 0: súbala para usarla en mallas.

## MaterialX

MaterialX es el formato abierto que otros programas de 3D y de renderizado usan para intercambiar materiales.

- {{ui:Exportar como MaterialX…}} guarda el material que edita: sus valores, y cada textura como imagen PNG junto al archivo `.mtlx` (en un zip). Elija el shader con el que se escribe: **OpenPBR Surface** (MaterialX 1.39, el mismo modelo que usa ModelCraft) o **Standard Surface** (MaterialX 1.38, que más programas leen hoy). Las texturas se colocan por coordenadas UV en metros; el mapeado de caja y el triplanar se escriben como UV.
- {{ui:Importar MaterialX…}} (o {{ui:Desde una carpeta…}}) lee archivos `.mtlx` con shaders OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR. Déle también las imágenes, o un zip con todo: una imagen se encuentra por su ruta, su nombre o su nombre con otro tipo de imagen (un `.exr` que los archivos nombran como `.jpg` puede venir junto a él). Las texturas, mapas de normales, aritmética, mezclas y desplazamiento entran como nodos; lo demás conserva su valor, y la línea de estado indica qué se dejó.

## Calcomanías

Una calcomanía es una imagen colocada sobre una superficie (un logotipo, un cartel, una etiqueta, una mancha) con un material propio.

- Ajuste **Anchura de una calcomanía nueva**, luego {{ui:Colocar una calcomanía…}} (o {{ui:Calcomanía}} en la barra de herramientas), elija una imagen PNG, JPEG o WebP y haga clic en una cara. La imagen se proyecta sobre las superficies de allí, manteniendo sus proporciones; las partes transparentes de un PNG siguen siendo transparentes.
- Pertenece al grupo o componente en el que hizo clic y se mueve con él. Cubre las caras dentro de su recuadro que miran en la misma dirección, y se detiene en los bordes de aquello sobre lo que está.
- Cada calcomanía tiene su propio material, llamado **Calcomanía: <imagen>**, en la lista del archivo: edítelo como cualquier otro (rugosidad, un relieve, un brillo). {{ui:Material}} junto a la calcomanía lo abre.
- Junto a cada calcomanía están su anchura (la altura sigue a la imagen), {{ui:Girar}} (un cuarto de vuelta) y {{ui:Eliminar}}. Las calcomanías se guardan con los materiales del archivo, fuera de Deshacer.
- Se ven en la vista sombreada, en renderizados rápidos y en imágenes de alta calidad.

## Pintar sobre la textura

{{ui:Pintar textura}} (o {{ui:Pintar}} bajo **Pintar sobre la textura**) convierte el cursor en un pincel redondo. Arrastre sobre una cara que lleve uno de los materiales de este archivo: el pincel pinta la imagen que hay tras su color base.

- En una malla pinta siguiendo las UV de la malla (desplíéguelas antes en el espacio de trabajo UV); en otras caras pinta a través de la cara, de modo que la pintura se repite con la baldosa del material.
- Un material cuyo color base es un color liso recibe una imagen nueva de 512 × 512 píxeles de ese color la primera vez que lo pinta. Un material cuyo color base viene de otros nodos necesita un nodo Imagen enlazado a Color base.
- Ajuste el color, el tamaño (en píxeles de la imagen), la intensidad y la dureza del pincel en el panel. {{ui:Deshacer trazo}} o Ctrl+Z (mientras pinta) deshace un trazo, hasta los últimos 20.
- La imagen pintada se guarda en el archivo. Los materiales de la biblioteca no se pueden pintar: haga antes una copia editable.

## Hornear texturas

**Hornear texturas** escribe en imágenes lo que la forma y la escena dan a una superficie, siguiendo las UV de una malla.

- Seleccione una malla que tenga UV (desplíéguela en el espacio de trabajo UV), marque los mapas y pulse {{ui:Hornear}}:
  - **Oclusión ambiental**: lo abierto que es cada punto; las esquinas, pliegues y lugares bajo otras cosas se oscurecen. Todo lo que se muestra en el modelo lo sombrea, hasta la distancia de oclusión.
  - **Curvatura**: brillante en los bordes exteriores, oscuro en las esquinas interiores, gris medio en las partes planas o suavemente curvas, sobre la anchura de borde que defina.
  - **Normales desde el objeto de alto detalle**: seleccione también una copia detallada: su detalle superficial se escribe como mapa de normales para la más simple (el objeto con menos triángulos es sobre el que se hornea). La distancia de búsqueda es lo separadas que pueden estar las dos superficies.
  - **Iluminación**: el sol del lugar y la fecha del modelo (Estilo) con sus sombras, más el cielo, como mapa de luz.
- Las imágenes se unen al archivo y aparecen en los nodos Imagen. Si el material que edita tiene un nodo **Suciedad y desgaste de bordes**, lee al instante la nueva oclusión y curvatura.
- Más rayos por texel dan una oclusión e iluminación más suaves, y tardan más. El horneado se ejecuta en segundo plano, en los núcleos del procesador del equipo; {{ui:Detener el horneado}} lo detiene.

## Construir un grafo

1. {{ui:Añadir un nodo…}} (o {{key:Shift+A}} en el editor de nodos) añade un nodo en el centro del editor.
2. Arrastre desde un punto de salida (a la derecha de un nodo) hasta un punto de entrada (a la izquierda de un nodo) para enlazarlos. Un segundo enlace a una entrada sustituye al primero; arrastre una entrada enlazada hacia fuera para desenlazarla.
3. Las entradas sin enlazar muestran su valor: escriba un número o elija un color. Los ajustes están en la parte inferior de cada nodo.

Arrastre un nodo por su título para moverlo, arrastre el espacio vacío para encuadrar, y use la rueda para hacer zoom. {{key:Delete}} elimina los nodos o el enlace seleccionados, {{key:Mod+Z}} deshace, {{key:Mod+D}} duplica y {{key:F}} muestra todos los nodos. Cada cambio es un paso de deshacer del editor de nodos. Deshacer del modelo no cambia los materiales.

| Nodos | Lo que crean |
|---|---|
| Coordenadas de textura | Dónde está un punto sobre la baldosa: repetirlo, desplazarlo, girarlo un cuarto. |
| Valor, Color | Un número, un color. |
| Imagen | Una imagen del archivo (una que vino con un modelo importado, o una que añadió con {{ui:Añadir una imagen…}}). Elija **Colores** para una foto y **Datos** para un mapa de rugosidad o de normales. |
| Textura de biblioteca | La textura, la rugosidad y la altura de un material de la biblioteca. |
| Damero, Ruido | Cuadrados; ruido fractal suave con su detalle, rugosidad y semilla. |
| Celdas Voronoi, Ondas, Degradado | Celdas (distancia al punto más cercano, los bordes entre celdas, un color por celda); bandas transversales, verticales o diagonales, como seno, diente de sierra o triángulo, dobladas por ruido; degradados lineal, cuadrático, radial y esférico. |
| Ladrillos, Baldosas | Hileras de ladrillos con desfase alterno, o una cuadrícula de baldosas: colores, mortero o rejuntado, separación y bisel en metros, altura para relieves, un número aleatorio por pieza. |
| Madera, Mármol | Anillos a lo largo de la veta con fibras finas; vetas dobladas por turbulencia. |
| Suciedad y desgaste de bordes | Desgasta los bordes convexos y ensucia los huecos a partir de las imágenes de curvatura y oclusión de una malla ([Hornear texturas](topic:shading#bake-textures) las crea; o ajuste sus dos opciones de imagen, en la disposición UV de la malla: coloque el material por coordenadas UV). Sin ellas no cambia nada. |
| Mezclar colores, Rampa de color, Tono/saturación/valor, Brillo y contraste, Invertir, Gamma, Separar y Combinar RGB | Trabajo de color. |
| Matemáticas, Rango de mapa | Aritmética con números (sumar, multiplicar, potencia, paso suave y más). |
| Relieve, Mapa de normales | Una normal a partir de una altura (Relieve) o de una imagen de mapa de normales (Mapa de normales: elija la dirección del canal verde). |

## La Salida de material

Sus ajustes indican cómo se extiende la textura sobre las superficies:

- **Anchura de baldosa** y **Altura de baldosa**: cuántos metros cubre una baldosa de la textura. Todo lo que genera un grafo se repite por la baldosa sin costuras.
- **Colocado por**: **Coordenadas UV** sigue las caras (caras de empujar/tirar: a lo largo de cada cara; mallas: sus UV, una unidad UV = una baldosa), **Caja** proyecta desde el más cercano de los tres ejes, **Triplanar** mezcla las tres proyecciones en superficies inclinadas (**Nitidez de mezcla**: más alta, mezcla más dura).
- **Intensidad de normal** escala la entrada de normal. **Escala de desplazamiento** fija cuánto mueve la entrada de desplazamiento los vértices de una malla.
- {{ui:Más entradas}} muestra el resto de entradas OpenPBR: capa, pelusa, subsuperficie, película fina, transmisión y sus colores.

## En imágenes de alta calidad

El trazador de trayectorias lee del grafo el color base, la rugosidad, la metalicidad, la opacidad, la normal y la emisión tal como cambian a lo largo de la superficie. Cualquier otra entrada que enlace (una capa que varía, por ejemplo) se usa en su media; el panel indica cuál. Un recorte procedente de una textura de opacidad muestra su forma, y su sombra es uniformemente transparente. Una textura luminosa ilumina lo que tiene enfrente, sin muestrearse como una lámpara.

**Desplazamiento** mueve los vértices solo de las mallas, así que añada un modificador de subdivisión para más detalle ([Modificadores](topic:modifiers)). Las caras de empujar/tirar conservan su forma y reciben los relieves de la normal.

:::tip
En un equipo con WebGPU el grafo se calcula en la tarjeta gráfica; sin él, en el procesador. El resultado es el mismo.
:::
