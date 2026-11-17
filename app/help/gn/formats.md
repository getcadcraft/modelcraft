---
title: Formatos de archivo en detalle
summary: Qué conserva, convierte y deja afuera cada formato que ModelCraft abre, importa y exporta.
keywords: formatos, tipos de archivo, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, caché, fbx, 3mf, ifc, dwg, dxf, unidades, ejes, y arriba, z arriba, milímetros, límites
from: c47d2d28
---

El modelo de ModelCraft está en metros con Z (azul) hacia arriba. Cada formato de abajo se convierte hacia o desde ese sistema.

## ModelCraft (.modelcraft)

| Qué | Detalles |
|---|---|
| Abrir | {{ui:Abrir}} ({{key:Mod+O}}) o soltar en la vista. Los archivos que terminan en `.json` también se aceptan |
| Guardar | {{ui:Guardar}} ({{key:Mod+S}}), como descarga |
| Conserva | Todo: geometría, caras y sus colores, materiales y texturas importadas, lámparas, bordes suaves, grupos, componentes, nombres, guías, escenas, las unidades, y la última cámara y estilo |
| Deja afuera | El historial de deshacer |
| Límite | 200 MB |

Un archivo guardado por un ModelCraft más nuevo que el tuyo se rechaza: "Este modelo fue guardado por un ModelCraft más nuevo (versión de archivo …). Actualizá ModelCraft para abrirlo." Un archivo que no es un modelo de ModelCraft dice "Este archivo no es un modelo de ModelCraft (no es JSON)." o "Este no es un archivo de ModelCraft que podamos abrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar, y {{ui:Guardar como}} o {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un archivo USD que guardó ModelCraft se vuelve a abrir sin perder nada; los archivos USD de otros programas se abren como mallas, grupos, componentes, lámparas y cámaras. Mirá [Guardar, abrir y exportar USD](topic:usd).

## Collada (.dae)

Importar y exportar. El mejor formato para intercambiar modelos con otros modeladores 3D.

- **Exportar:** Collada 1.4.1, Z arriba, metros. Una geometría por grupo o definición de componente; los componentes se escriben una vez y se colocan por referencia, así que siguen compartidos. Las caras con agujeros o contornos cóncavos se dividen en triángulos. Los colores pasan a ser materiales. Los bordes sueltos se escriben como líneas. Los nombres que no son válidos en el formato se ajustan, y el nombre exacto se conserva al lado.
- **Importar:** triángulos, polígonos (con agujeros), abanicos y tiras de triángulos pasan a ser caras; las líneas pasan a ser bordes. Se aplican las transformaciones de nodo, el eje vertical del archivo y su unidad. Un nodo colocado en varios lugares, o una geometría usada por varios nodos, entra como componente; los demás nodos entran como grupos. Los colores de material (difuso) pasan a ser colores de cara.
- **No se importa:** texturas, skins y morphs, cámaras, luces, algunos tipos de transformación (look-at y skew), y referencias a otros archivos. La barra de estado los cuenta.
- **Se pierde al exportar:** cuáles bordes son suaves. **Al importar,** las superficies trianguladas siguen siendo triángulos, con las diagonales suavizadas para que las áreas planas se vean como una sola superficie.

## OBJ (.obj, .mtl)

Importar y exportar.

- **Importar:** soltá el `.obj` junto con su `.mtl` y sus imágenes de textura (o importá solo el `.obj`: entra sin materiales, y la barra de estado indica qué `.mtl` necesitaba). Se lee en metros con Y arriba. Cada objeto (`o`, si no `g`) pasa a ser una [malla](topic:meshes), y sus caras se conservan tal como son (los cuadriláteros siguen siendo cuadriláteros). Las coordenadas de textura, normales y colores por vértice se conservan. La imagen de color de un material (`map_Kd`, PNG, JPEG o WebP) entra como textura, con sus opciones de escala y desplazamiento; si no, su color (`Kd`). Los bordes donde las normales del archivo se cortan son duros; sin normales, mandan los grupos de suavizado del archivo. Otros mapas (relieve, normal), puntos, líneas y curvas se cuentan y se dejan afuera. OBJ no tiene unidad, así que un modelo hecho en milímetros o pulgadas llega con el tamaño equivocado: escalalo después de importar (mirá [Rotar y escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportar:** metros, Y arriba, coordenadas del mundo. Un objeto por colocación de grupo; los componentes se escriben completos en cada colocación. Las mallas conservan sus propias caras, coordenadas de textura y normales; las caras unidas por [bordes suaves](topic:soften) reciben una normal por esquina. Cuando el modelo tiene colores, se descarga un `.mtl` junto al `.obj`. Cuando tiene texturas importadas, el `.obj`, el `.mtl` y las imágenes se descargan juntos en un solo `.zip`.
- **Límite:** 2 millones de vértices o caras; 64 MB de texto.

## glTF (.glb, .gltf)

Importar y exportar, glTF 2.0.

- **Importar:** un `.glb`, o un `.gltf` junto con su `.bin` y sus archivos de textura: soltalos todos juntos en la vista (o elegí el `.glb`). Un `.gltf` dado solo indica el archivo que necesita: "Este archivo .gltf necesita "…": abrí la versión .glb, o soltá el .gltf junto con sus archivos."
  - **Las mallas** entran como [mallas](topic:meshes), una por malla del archivo, con las normales, coordenadas de textura y colores por vértice del archivo conservados. Los bordes donde las normales del archivo se cortan son duros; el resto son suaves. Una malla usada en varios lugares sigue compartida.
  - **Los nodos** pasan a ser grupos, con el nombre que tienen en el archivo. Las mallas instanciadas (EXT_mesh_gpu_instancing) entran como una sola malla colocada muchas veces.
  - **Materiales:** una textura de color base (PNG, JPEG o WebP) entra como textura, colocada según las coordenadas de textura del archivo (con cualquier transformación de textura), y se conserva al guardar; si no, el color base. Metal, rugosidad, mapas de normal, vidrio, capa clara, brillo y las demás extensiones de material se leen pero aún no se conservan: la barra de estado lo indica.
  - **Luces** (KHR_lights_punctual): las luces puntuales y de foco pasan a ser [lámparas](topic:lights). Las luces direccionales se cuentan: el sol ilumina el modelo.
  - **Las cámaras** pasan a ser [escenas](topic:scenes).
  - **Los personajes con esqueleto** entran de pie, como los deja el archivo; sus huesos, animaciones y morph targets se cuentan y todavía no se conservan.
  - **Los archivos comprimidos** (Draco, meshopt) y los datos cuantizados se leen. Los decodificadores se cargan solo para un archivo que los necesita.
  - Los puntos y las líneas se cuentan y se dejan afuera (una malla contiene caras). Las texturas KTX2 se dejan afuera; las caras conservan su color.
- **Exportar** (`.glb`): glTF 2.0 binario, metros, Y arriba. Una malla por definición, así que los componentes siguen compartidos. Las mallas conservan sus normales, coordenadas de textura y colores por vértice; las caras unidas por [bordes suaves](topic:soften) llevan normales suaves. Los colores y materiales pasan a ser materiales (un material como su color); las texturas importadas se escriben como texturas. Las lámparas encendidas pasan a ser luces puntuales y de foco (las lámparas de área no tienen equivalente en glTF y se dejan afuera); las escenas pasan a ser cámaras. Los bordes sueltos se dejan afuera.
- **Límite:** archivos de hasta 300 MB; unos 130 millones de números de geometría.

## STL (.stl)

Importar y exportar.

- **Importar:** binario o ASCII. STL no tiene unidad: se lee en **milímetros**, como lo escriben las impresoras y la exportación propia de ModelCraft. Las esquinas en el mismo punto se unen, así que una pieza cerrada entra como una [malla](topic:meshes) cerrada. Los colores del archivo (las convenciones VisCAM / SolidView y Materialise) pintan las caras.
- **Exportar,** para impresión 3D: STL binario, **milímetros**, Z arriba. Solo triángulos: los grupos y los bordes sueltos se dejan afuera. Las caras pintadas llevan su color en la convención VisCAM / SolidView, que otros programas ignoran si no la leen. Exportá sólidos cerrados para una impresión limpia.

## STEP (.step, .stp)

Solo importar. STEP es lo que mandan los modeladores de piezas y los proveedores: archivos AP203, AP214 y AP242.

- **Importar:** ModelCraft lee el archivo por sí mismo, en la página, y convierte cada sólido en una [malla](topic:meshes) cerrada de triángulos: las caras planas quedan planas, las caras curvas (cilindros, conos, esferas, toros, superficies B-spline) pasan a ser muchas caras planas pequeñas, con los bordes dentro de una misma cara curva suaves y los bordes entre dos caras vivos. Los archivos STEP dicen su unidad; el modelo entra con su tamaño real. Un conjunto entra con cada pieza donde el archivo la coloca, cada pieza como su propia malla dentro de un grupo que lleva el nombre del archivo. Los colores, los nombres de piezas del árbol del conjunto y las tolerancias (PMI) no se leen.
- **Mensajes:** lo que se omitió o se dibujó más grueso se agrega a la línea de estado ("Notas: …"); un archivo sin sólidos, un archivo dañado o uno que supera los límites lo dice y no agrega nada.
- **Límite:** archivos de hasta 300 MB; 400 000 caras y 8 millones de triángulos.

## .3dm

Solo importar. Los archivos `.3dm` guardan modelos NURBS: polisuperficies, superficies, mallas, curvas y bloques.

- **Importar:** ModelCraft lee el archivo por sí mismo, en la página. Las mallas entran tal como son; cada cara de una polisuperficie o extrusión sale de la malla de render guardada con ella en el archivo, si no, ModelCraft la teselas (planos, superficies NURBS, superficies de revolución, curvas extruidas, extrusiones; recortadas por sus bordes, y las polisuperficies cerradas como mallas cerradas). Las curvas pasan a ser bordes, los bloques pasan a ser componentes (los bloques dentro de bloques se conservan), las capas pasan a ser etiquetas (ocultas cuando están apagadas), y el color del objeto (el suyo, el de su capa o el de su material) pinta sus caras. El archivo dice su unidad; el modelo entra con su tamaño real. Paso a paso: [Traer un modelo .3dm](topic:import-3dm-files).
- **Mensajes:** la línea de estado dice cuántas caras vinieron de mallas guardadas y cuántas se teselaron, y nombra lo que se dejó afuera: puntos, nubes de puntos, texto, cotas, sombreados, luces, objetos SubD, caras de tipos de superficie que todavía no se leen, bloques vinculados.
- **Límite:** archivos de hasta 300 MB.

## PLY (.ply)

Importar y exportar, para mallas con colores (escaneos, impresión 3D a color, otros modeladores).

- **Importar:** ASCII y binario. Las caras pasan a ser una [malla](topic:meshes) con sus normales, coordenadas de textura y colores por vértice conservados; cada cara se pinta con el más cercano de 4096 colores para que veas los colores ahora. PLY no tiene unidad ni convención de ejes: las coordenadas entran tal como son (metros, Z arriba). Un PLY solo con puntos es una nube de puntos: abrilo en BimCraft o CivilCraft.
- **Exportar:** PLY binario con posiciones, normales y colores (y coordenadas de textura cuando el modelo las tiene), en metros, Z arriba.

## FBX (.fbx)

Solo importar. Archivos FBX 7 (desde 2011 en adelante), binarios o ASCII, leídos por el lector propio de ModelCraft.

- Las mallas entran como [mallas](topic:meshes) con sus normales, coordenadas de textura (cada conjunto UV) y colores por vértice; una malla que usan varios objetos sigue compartida. Los objetos pasan a ser grupos con sus transformaciones (pivotes, desplazamientos y prerrotaciones incluidos).
- Materiales: la textura difusa —incrustada en el archivo, o una imagen soltada junto con el `.fbx`— entra como textura (las imágenes TGA se conservan como PNG); si no, el color difuso. Los demás ajustes de material esperan al nuevo modelo de materiales.
- El eje vertical y la unidad del archivo se aplican: todo entra con Z arriba, en metros.
- Las luces puntuales y de foco pasan a ser [lámparas](topic:lights) (una intensidad FBX de 100 es la lámpara por defecto de ModelCraft, 800 lúmenes: las intensidades FBX no tienen unidad). Las cámaras pasan a ser [escenas](topic:scenes).
- Los personajes con esqueleto entran en reposo; los huesos y las animaciones se cuentan y todavía no se conservan. Las luces direccionales y de área, y la geometría que no es malla (NURBS, curvas), se cuentan y se dejan afuera.
- Los archivos FBX 6 y anteriores se rechazan: guardalos de nuevo como FBX 2011 o más nuevo.

## Alembic (.abc)

Solo importar: cachés de geometría de programas de animación y efectos.

- Las mallas (de polígonos y de subdivisión) entran como [mallas](topic:meshes), con sus coordenadas de textura y normales; las transformaciones pasan a ser grupos. Alembic tiene Y arriba y se gira a Z arriba; metros.
- Una caché con muchas muestras (una animación) entra en su primera muestra; la barra de estado indica cuántas tiene.
- Los puntos, curvas, superficies NURBS, cámaras y luces se cuentan y se dejan afuera. Los archivos con el antiguo diseño HDF5 se rechazan: guardalos de nuevo como archivo Alembic Ogawa.

{{ui:Verificar impresión 3D (STL o 3MF)…}} verifica primero la forma y escribe la selección, o todo lo visible. Mirá [Preparar un modelo para impresión 3D](topic:print-3d).

## 3MF (.3mf)

Solo exportar, desde {{ui:Verificar impresión 3D (STL o 3MF)…}}. Núcleo 3MF: una malla en **milímetros**, Z arriba, con sus colores como materiales. La mayoría de los slicers lo leen, y a diferencia de STL dice su unidad. Las cosas ocultas se dejan afuera. Mirá [Preparar un modelo para impresión 3D](topic:print-3d).

## Exportación DWG y DXF (.dwg, .dxf)

Para programas CAD. El modelo se escribe en su propia unidad: pulgadas para modelos en pies y pulgadas, si no milímetros, centímetros o metros (la barra de estado lo indica).

- **Las caras** pasan a ser caras 3D (triángulos). Las líneas dentro de una cara, y los bordes suaves, se escriben invisibles, así que las caras se ven como en ModelCraft.
- **Los bordes sueltos** pasan a ser líneas.
- **Grupos y componentes** pasan a ser bloques: un componente se escribe una vez y se coloca tantas veces como se usa, incluidas las copias giradas y espejadas. Un grupo que se estiró después de girarlo (quedando inclinado) se escribe en su lugar.
- **Colores:** DWG conserva exactamente el color de cada cara; DXF usa el más cercano de los 255 colores estándar de CAD.
- **Versiones:** DWG se escribe como AutoCAD 2004 (AC1018), que abren los programas CAD desde 2004 en adelante. DXF es R12 (AC1009), la versión que lee cualquier programa CAD; R12 no tiene campo de unidad, así que indicale al programa CAD qué unidad usar.
- **No se escriben:** guías, cotas, escenas y la cámara.

## IFC (.ifc)

Solo exportar, para BimCraft y otros programas BIM. IFC4 con un proyecto, un sitio, un edificio y sus pisos. Cada grupo o componente de nivel superior pasa a ser un proxy de elemento de construcción con su nombre; los cerrados se escriben como formas sólidas (breps facetados), los abiertos como modelos de superficie; los agujeros de las caras se conservan. La geometría suelta de nivel superior pasa a ser un elemento llamado "Geometría suelta". Sin tipos, propiedades ni materiales.

**Pisos:** {{ui:Exportar}} › {{ui:Pisos IFC…}} los lista, cada uno con un nombre y una elevación ({{ui:Agregar piso}}, o {{ui:Estimar desde el modelo}}, que hace un piso por cada altura en la que se apoyan tus grupos de nivel superior). Al exportar, cada grupo o componente va al piso que está en su punto más bajo o por debajo de él, y conserva su lugar. Sin pisos, todo va a un solo piso, "Nivel 1", en 0. Los pisos se guardan en el archivo de ModelCraft.

## DWG (.dwg) y DXF (.dxf)

Importar como líneas en el suelo (los sombreados y las caras 3D como caras); exportar como se describió antes. Mirá [Modelar sobre un plano de sitio](topic:site-plan).

- **Lectura:** líneas, polilíneas (con arcos), polilíneas 3D, círculos, arcos, y referencias de bloque incluidos los arreglos, desde el espacio modelo. Los objetos invisibles (como los estados ocultos de un bloque dinámico) se dejan afuera. Las curvas se convierten en 48 trozos rectos por vuelta completa.
- **Lectura desde la 0.4:** splines y elipses (como bordes), texto, texto multilínea y valores de atributos (como bordes en letra de trazo simple), sombreados (caras con agujeros), caras 3D y rellenos sólidos (caras), y cotas (dibujadas desde los bloques de cota del propio dibujo).
- **Lectura desde la 0.7:** sólidos 3D, regiones y cuerpos (sus datos ACIS, DWG y DXF de cada versión), cada uno como su propio grupo, los cerrados como sólidos. Las caras sobre superficies que no son planos, cilindros, conos, esferas, toros y superficies spline simples se dejan afuera y se listan.
- **No se leen:** puntos, tablas, multiconductores, imágenes, y cualquier cosa del espacio papel.
- **Unidades:** se toman del dibujo cuando lo indica. Si no, ModelCraft pregunta.
- **DXF** tiene que ser ASCII. Un DXF binario se rechaza.
- **Los archivos DWG** desde AutoCAD R13 hasta el formato actual (AutoCAD 2018 y posteriores; AC1012 a AC1032) los lee el lector DWG propio de ModelCraft, en la página; es parte de ModelCraft, así que funciona sin conexión cuando ModelCraft también funciona. Las versiones anteriores (R12 y anteriores) y los archivos muy dañados no se pueden leer; guardalos como DXF.
- **Límites:** las coordenadas a más de 10 000 km del origen, o más de 2 millones de trozos de línea, se rechazan.

## Archivos SKP

{{ui:Importar}} (o soltar el archivo en la vista) lee archivos de SketchUp con el lector propio de ModelCraft, en la página: no se sube nada, y funciona sin conexión cuando ModelCraft también funciona. Probado con archivos de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 y 2026; otras versiones deberían abrirse también, pero todavía no se probaron. El modelo entra como un grupo que lleva el nombre del archivo. Un {{key:Mod+Z}} lo quita de nuevo. Paso a paso: [Traer un modelo SKP](topic:import-sketchup-files).

- **Se conserva:** caras con sus agujeros, grupos (como grupos) y componentes (como componentes, compartidos), sus nombres y colocaciones, colores, etiquetas de grupos y componentes, bordes que no forman parte de una cara, y bordes suaves y lisos, para que las superficies curvas queden lisas.
- **Colores:** el material propio de una cara da su color. Un material pintado sobre un grupo o componente pasa a ser la pintura de esa colocación, así que las caras de adentro sin color propio lo toman, como en SketchUp; un componente pintado de dos colores sigue siendo un solo componente.
- **Las etiquetas** de grupos y componentes pasan a ser etiquetas de ModelCraft, mostradas u ocultas como estaban. Las etiquetas de caras y bordes sueltos no se conservan (ModelCraft etiqueta solo grupos y componentes); la barra de estado las cuenta.
- **Lo oculto entra oculto** (caras, bordes, grupos, componentes, y caras y bordes en una etiqueta oculta), así ves lo que mostraba SketchUp; {{ui:Mostrar todo}} lo muestra.
- **Texturas:** una cara pintada con un material texturado conserva su textura, colocada como en el archivo, y el archivo de ModelCraft conserva la imagen. Una textura sobre un grupo o componente completo, una textura que falta en el archivo, o una imagen que los navegadores no pueden mostrar (como un archivo de Photoshop) conserva solo el color de su material.
- **Se dejan afuera, y se cuentan en la barra de estado:** imágenes colocadas en el modelo. No se leen texto, cotas, guías, planos de corte, escenas y estilos.
- **Unidades:** los archivos de SketchUp están en pulgadas por dentro; ModelCraft los convierte, así que los tamaños salen bien en cualquier unidad.
- **Guardar `.skp`** no está hecho. Para llevar un modelo de vuelta a SketchUp, exportá Collada (`.dae`).

## No compatible

ModelCraft no puede abrir archivos 3DS ni IFC, y no puede guardar archivos 3DS, FBX, STEP, `.3dm` ni SketchUp (`.skp`).
