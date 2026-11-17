---
title: Formatos de archivo en detalle
summary: Qué conserva, convierte y omite exactamente cada formato que ModelCraft abre, importa y exporta.
keywords: formatos, tipos de archivo, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, caché, fbx, 3mf, ifc, dwg, dxf, unidades, ejes, Y hacia arriba, Z hacia arriba, milímetros, límites
from: c47d2d28
---

El modelo de ModelCraft está en metros, con Z (azul) hacia arriba. Cada formato siguiente se convierte desde o hacia ese sistema.

## ModelCraft (.modelcraft)

| Qué | Detalles |
|---|---|
| Abrir | {{ui:Abrir}} ({{key:Mod+O}}) o soltar en la vista. También se aceptan archivos que terminan en `.json` |
| Guardar | {{ui:Guardar}} ({{key:Mod+S}}), como descarga |
| Conserva | Todo: geometría, caras y sus colores, materiales y texturas importadas, lámparas, aristas suaves, grupos, componentes, nombres, guías, escenas, las unidades y la última cámara y estilo |
| Omite | El historial de deshacer |
| Límite | 200 MB |

Un archivo guardado con un ModelCraft más reciente que el suyo se rechaza: "Este modelo se guardó con un ModelCraft más reciente (versión de archivo …). Actualice ModelCraft para abrirlo." Un archivo que no es un modelo de ModelCraft indica "Este archivo no es un modelo de ModelCraft (no es JSON)." o "Este no es un archivo de ModelCraft que podamos abrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar, y {{ui:Guardar como}} o {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un archivo USD que ModelCraft guardó se vuelve a abrir sin pérdidas; los archivos USD de otros programas se abren como mallas, grupos, componentes, lámparas y cámaras. Véase [Guardar, abrir y exportar USD](topic:usd).

## Collada (.dae)

Importar y exportar. Es el mejor formato para intercambiar modelos con otros modeladores 3D.

- **Exportación:** Collada 1.4.1, Z hacia arriba, metros. Una geometría por cada definición de grupo o componente; los componentes se escriben una vez y se colocan por referencia, así que siguen compartidos. Las caras con huecos o contornos cóncavos se dividen en triángulos. Los colores se convierten en materiales. Las aristas sueltas se escriben como líneas. Los nombres no válidos en el formato se ajustan, y el nombre exacto se conserva junto a él.
- **Importación:** los triángulos, polígonos (con huecos), abanicos y tiras de triángulos se convierten en caras; las líneas, en aristas. Se aplican las transformaciones de nodo, el eje vertical del archivo y su unidad. Un nodo colocado en varios sitios, o una geometría usada por varios nodos, entra como componente; los demás nodos entran como grupos. Los colores de material (difuso) se convierten en colores de cara.
- **No importado:** texturas, skins y morphs, cámaras, luces, algunos tipos de transformación (look-at y skew) y referencias a otros archivos. La barra de estado los cuenta.
- **Se pierde al exportar:** qué aristas son suaves. **Al importar,** las superficies trianguladas siguen siendo triángulos, con las diagonales suavizadas para que las zonas planas se lean como una sola superficie.

## OBJ (.obj, .mtl)

Importar y exportar.

- **Importación:** arrastre el `.obj` junto con su `.mtl` y las imágenes de textura (o importe el `.obj` solo: entra sin materiales, y la barra de estado indica el `.mtl` que necesitaba). Se lee en metros con Y hacia arriba. Cada objeto (`o`, o si no `g`) se convierte en una [malla](topic:meshes), con sus caras tal como están (los cuadriláteros siguen siendo cuadriláteros). Se conservan las coordenadas de textura, las normales y los colores por vértice. La imagen de color de un material (`map_Kd`, PNG, JPEG o WebP) entra como textura, con sus opciones de escala y desplazamiento; si no, su color (`Kd`). Las aristas donde las normales del archivo se rompen son duras; sin normales, deciden los grupos de suavizado del archivo. Otros mapas (relieve, normal), puntos, líneas y curvas se cuentan y se omiten. OBJ no tiene unidad, así que un modelo hecho en milímetros o pulgadas llega con el tamaño incorrecto: escálelo tras importarlo (véase [Rotar y escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportación:** metros, Y hacia arriba, coordenadas del mundo. Un objeto por colocación de grupo; los componentes se escriben completos en cada colocación. Las mallas conservan sus propias caras, coordenadas de textura y normales; las caras unidas por [aristas suaves](topic:soften) reciben una normal por esquina. Cuando el modelo tiene colores, se descarga un `.mtl` junto al `.obj`. Cuando tiene texturas importadas, el `.obj`, el `.mtl` y las imágenes se descargan juntos en un solo `.zip`.
- **Límite:** 2 millones de vértices o caras; 64 MB de texto.

## glTF (.glb, .gltf)

Importar y exportar, glTF 2.0.

- **Importación:** un `.glb`, o un `.gltf` junto con sus archivos `.bin` y de texturas: suéltelos todos a la vez en la vista (o elija el `.glb`). Un `.gltf` solo indica qué archivo necesita: "Este archivo .gltf necesita "…": abra la versión .glb, o suelte el .gltf junto con sus archivos."
  - **Las mallas** entran como [mallas](topic:meshes), una por cada malla del archivo, con las normales, coordenadas de textura y colores de vértice del archivo conservados. Las aristas donde las normales del archivo se rompen son duras; el resto son suaves. Una malla usada en varios sitios sigue compartida.
  - **Los nodos** se convierten en grupos, con el nombre que tienen en el archivo. Las mallas instanciadas (EXT_mesh_gpu_instancing) entran como una malla colocada muchas veces.
  - **Materiales:** una textura de color base (PNG, JPEG o WebP) entra como textura, colocada según las coordenadas de textura del archivo (con cualquier transformación de textura), y se conserva al guardar; si no, entra el color base. Metal, rugosidad, mapas de normales, cristal, barniz (clear coat), sheen y las demás extensiones de material se leen, pero aún no se conservan: la barra de estado lo indica.
  - **Luces** (KHR_lights_punctual): las luces puntuales y de foco se convierten en [lámparas](topic:lights). Las luces direccionales se cuentan: el sol ilumina el modelo.
  - **Las cámaras** se convierten en [escenas](topic:scenes).
  - **Los personajes con esqueleto** entran de pie, tal como los deja el archivo; sus huesos, animaciones y morph targets se cuentan y aún no se conservan.
  - **Los archivos comprimidos** (Draco, meshopt) y los datos cuantizados se leen. Los decodificadores se cargan solo para un archivo que los necesite.
  - Los puntos y las líneas se cuentan y se omiten (una malla contiene caras). Las texturas KTX2 se omiten; las caras conservan su color.
- **Exportación** (`.glb`): glTF 2.0 binario, metros, Y hacia arriba. Una malla por definición, así que los componentes siguen compartidos. Las mallas conservan sus normales, coordenadas de textura y colores de vértice; las caras unidas por [aristas suaves](topic:soften) llevan normales suaves. Los colores y materiales se convierten en materiales (un material como su color); las texturas importadas se escriben como texturas. Las lámparas encendidas se convierten en luces puntuales y de foco (las lámparas de área no tienen equivalente en glTF y se omiten); las escenas se convierten en cámaras. Las aristas sueltas se omiten.
- **Límite:** archivos de hasta 300 MB; unos 130 millones de números de geometría.

## STL (.stl)

Importar y exportar.

- **Importación:** binario o ASCII. STL no tiene unidad: se lee en **milímetros**, como lo escriben las impresoras y la propia exportación de ModelCraft. Los vértices en el mismo punto se unen, así que una pieza cerrada entra como una [malla](topic:meshes) cerrada. Los colores del archivo (las convenciones VisCAM / SolidView y Materialise) pintan las caras.
- **Exportación,** para impresión 3D: STL binario, **milímetros**, Z hacia arriba. Solo triángulos: los grupos y las aristas sueltas se omiten. Las caras pintadas llevan su color en la convención VisCAM / SolidView, que otros programas ignoran si no la leen. Exporte sólidos cerrados para una impresión limpia.

## STEP (.step, .stp)

Solo importación. STEP es lo que envían los modeladores de piezas y los proveedores: archivos AP203, AP214 y AP242.

- **Importación:** ModelCraft lee el archivo por sí mismo, en la página, y convierte cada sólido en una [malla](topic:meshes) cerrada de triángulos: las caras planas siguen planas; las caras curvas (cilindros, conos, esferas, toros, superficies B-spline) se convierten en muchas caras planas pequeñas, con las aristas dentro de una cara curva suaves y las aristas entre dos caras, duras. Los archivos STEP indican su unidad; el modelo entra con su tamaño real. Un conjunto entra con cada pieza donde el archivo la coloca, cada pieza como su propia malla dentro de un grupo con el nombre del archivo. No se leen los colores, los nombres de piezas del árbol del conjunto ni las tolerancias (PMI).
- **Mensajes:** lo que se omitió o se dibujó más grueso se añade a la línea de estado ("Notas: …"); un archivo sin sólidos, un archivo dañado o uno que supera los límites lo indica y no añade nada.
- **Límite:** archivos de hasta 300 MB; 400 000 caras y 8 millones de triángulos.

## .3dm

Solo importación. Los archivos `.3dm` contienen modelos NURBS: polisuperficies, superficies, mallas, curvas y bloques.

- **Importación:** ModelCraft lee el archivo por sí mismo, en la página. Las mallas entran tal como son; cada cara de una polisuperficie o extrusión procede de la malla de renderizado guardada con ella en el archivo; si no, ModelCraft la tesela (planos, superficies NURBS, superficies de revolución, curvas extruidas, extrusiones; recortadas por sus aristas, y las polisuperficies cerradas como mallas cerradas). Las curvas se convierten en aristas, los bloques en componentes (los bloques dentro de bloques se conservan), las capas en etiquetas (ocultas si están apagadas), y el color del objeto (el suyo, el de su capa o el de su material) pinta sus caras. El archivo indica su unidad; el modelo entra con su tamaño real. Paso a paso: [Importar un modelo .3dm](topic:import-3dm-files).
- **Mensajes:** la línea de estado indica cuántas caras vinieron de mallas guardadas y cuántas se teselaron, y nombra lo que se omitió: puntos, nubes de puntos, texto, cotas, tramas, luces, objetos SubD, caras de tipos de superficie aún no leídos, bloques enlazados.
- **Límite:** archivos de hasta 300 MB.

## PLY (.ply)

Importar y exportar, para mallas con colores (escaneos, impresión 3D en color, otros modeladores).

- **Importación:** ASCII y binario. Las caras se convierten en una [malla](topic:meshes) con sus normales, coordenadas de textura y colores de vértice conservados; cada cara se pinta con el más cercano de 4,096 colores, para que vea los colores ya. PLY no tiene unidad ni convención de ejes: las coordenadas entran tal cual (metros, Z hacia arriba). Un PLY solo con puntos es una nube de puntos: ábralo en BimCraft o en CivilCraft.
- **Exportación:** PLY binario con posiciones, normales y colores (y coordenadas de textura si el modelo las tiene), en metros, Z hacia arriba.

## FBX (.fbx)

Solo importación. Archivos FBX 7 (desde 2011 en adelante), binarios o ASCII, leídos por el propio lector de ModelCraft.

- Las mallas entran como [mallas](topic:meshes) con sus normales, coordenadas de textura (todos los conjuntos UV) y colores de vértice; una malla que usan varios objetos sigue compartida. Los objetos se convierten en grupos con sus transformaciones (incluidos pivotes, desplazamientos y prerotaciones).
- Materiales: la textura difusa —incrustada en el archivo, o una imagen soltada junto con el `.fbx`— entra como textura (las imágenes TGA se conservan como PNG); si no, el color difuso. Otros ajustes de material esperan al nuevo modelo de materiales.
- El eje vertical y la unidad del archivo se aplican: todo entra con Z hacia arriba, en metros.
- Las luces puntuales y de foco se convierten en [lámparas](topic:lights) (una intensidad FBX de 100 es la lámpara por defecto de ModelCraft, 800 lúmenes: las intensidades FBX no tienen unidad). Las cámaras se convierten en [escenas](topic:scenes).
- Los personajes con esqueleto entran en reposo; los huesos y las animaciones se cuentan y aún no se conservan. Las luces direccionales y de área, y la geometría distinta de las mallas (NURBS, curvas), se cuentan y se omiten.
- Los archivos FBX 6 y anteriores se rechazan: guárdelos de nuevo como FBX 2011 o posterior.

## Alembic (.abc)

Solo importación: cachés de geometría de programas de animación y efectos.

- Las mallas (de polígonos y de subdivisión) entran como [mallas](topic:meshes), con sus coordenadas de textura y normales; las transformaciones se convierten en grupos. Alembic es Y hacia arriba y se gira a Z hacia arriba; metros.
- Una caché con muchas muestras (una animación) entra en su primera muestra; la barra de estado indica cuántas tiene.
- Los puntos, las curvas, las superficies NURBS, las cámaras y las luces se cuentan y se omiten. Los archivos del antiguo diseño HDF5 se rechazan: guárdelos de nuevo como archivo Alembic Ogawa.

{{ui:Revisar para impresión 3D (STL o 3MF)…}} comprueba primero la forma y escribe la selección, o todo lo visible. Véase [Preparar un modelo para impresión 3D](topic:print-3d).

## 3MF (.3mf)

Solo exportación, desde {{ui:Revisar para impresión 3D (STL o 3MF)…}}. 3MF core: una malla en **milímetros**, Z hacia arriba, con sus colores como materiales. La mayoría de los programas de corte la leen, y, a diferencia de STL, indica su unidad. Lo oculto se omite. Véase [Preparar un modelo para impresión 3D](topic:print-3d).

## Exportación DWG y DXF (.dwg, .dxf)

Para programas CAD. El modelo se escribe en su propia unidad: pulgadas para los modelos en pies y pulgadas; si no, milímetros, centímetros o metros (la barra de estado lo indica).

- **Las caras** se convierten en caras 3D (triángulos). Las líneas dentro de una cara y las aristas suaves se escriben invisibles, para que las caras se vean como en ModelCraft.
- **Las aristas sueltas** se convierten en líneas.
- **Grupos y componentes** se convierten en bloques: un componente se escribe una vez y se coloca tantas veces como se use, incluidas las copias giradas y reflejadas. Un grupo que se estiró después de girarlo (y que por eso queda inclinado) se escribe tal cual en su sitio.
- **Colores:** DWG conserva exactamente el color de cada cara; DXF usa el más cercano de los 255 colores CAD estándar.
- **Versiones:** DWG se escribe como AutoCAD 2004 (AC1018), que abren los programas CAD desde 2004 en adelante. DXF es R12 (AC1009), la versión que lee cualquier programa CAD; R12 no tiene campo de unidad, así que indique al programa CAD qué unidad usar.
- **No se escriben:** guías, cotas, escenas ni la cámara.

## IFC (.ifc)

Solo exportación, para BimCraft y otros programas BIM. IFC4 con un proyecto, un emplazamiento, un edificio y sus plantas. Cada grupo o componente de nivel superior se convierte en un proxy de elemento de edificio con su nombre; los cerrados se escriben como formas sólidas (breps facetados), los abiertos como modelos de superficie, y los huecos de las caras se conservan. La geometría suelta de nivel superior se convierte en un solo elemento llamado "Geometría suelta". Sin tipos, propiedades ni materiales.

**Plantas:** {{ui:Exportar}} › {{ui:Niveles IFC…}} las enumera, cada una con un nombre y una cota de altura ({{ui:Añadir nivel}}, o {{ui:Deducir del modelo}}, que crea una planta por cada altura sobre la que se apoyan sus grupos de nivel superior). Al exportar, cada grupo o componente va en la planta situada en su punto más bajo o por debajo de él, y conserva su posición. Sin plantas, todo va en una sola, "Nivel 1", a 0. Las plantas se guardan en el archivo de ModelCraft.

## DWG (.dwg) y DXF (.dxf)

Importar como líneas en el suelo (las tramas y las caras 3D, como caras); exportar como se ha descrito. Véase [Modelar sobre un plano de situación](topic:site-plan).

- **Lectura:** líneas, polilíneas (con arcos), polilíneas 3D, círculos, arcos y referencias a bloques, incluidos los conjuntos, desde el espacio modelo. Los objetos invisibles (como los estados ocultos de un bloque dinámico) se omiten. Las curvas se convierten en 48 trozos rectos por vuelta completa.
- **Lectura desde la versión 0.4:** splines y elipses (como aristas), texto, texto multilínea y valores de atributos (como aristas en una escritura de un solo trazo), tramas (caras con huecos), caras 3D y rellenos sólidos (caras), y cotas (dibujadas a partir de los propios bloques de cota del dibujo).
- **Lectura desde la versión 0.7:** sólidos 3D, regiones y cuerpos (sus datos ACIS, en DWG y DXF de cualquier versión), cada uno como su propio grupo; los cerrados, como sólidos. Las caras de superficies distintas de planos, cilindros, conos, esferas, toros y superficies spline sencillas se omiten y se listan.
- **No se leen:** puntos, tablas, multilíderes, imágenes y todo lo que esté en el espacio papel.
- **Unidades:** se toman del dibujo cuando lo indica. Si no, ModelCraft pregunta.
- **DXF** debe ser ASCII. Los DXF binarios se rechazan.
- **Los archivos DWG** desde AutoCAD R13 hasta el formato actual (AutoCAD 2018 y posteriores; AC1012 a AC1032) los lee el propio lector DWG de ModelCraft, en la página; forma parte de ModelCraft, así que funciona sin conexión siempre que funcione ModelCraft. Las versiones antiguas (R12 y anteriores) y los archivos muy dañados no se pueden leer; guárdelos como DXF.
- **Límites:** se rechazan las coordenadas a más de 10,000 km del origen, o más de 2 millones de trozos de línea.

## Archivos SKP

{{ui:Importar}} (o suelte el archivo en la vista) lee archivos de SketchUp con el propio lector de ModelCraft, en la página: no se sube nada, y funciona sin conexión siempre que funcione ModelCraft. Se probó con archivos de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 y 2026; otras versiones deberían abrirse también, pero aún no se han probado. El modelo entra como un solo grupo con el nombre del archivo. Un {{key:Mod+Z}} lo quita de nuevo. Paso a paso: [Importar un modelo SKP](topic:import-sketchup-files).

- **Se conserva:** las caras con sus huecos, los grupos (como grupos) y los componentes (como componentes, compartidos), sus nombres y colocaciones, los colores, las etiquetas de grupos y componentes, las aristas que no forman parte de una cara, y las aristas suaves y lisas, para que las superficies curvas se mantengan suaves.
- **Colores:** el material propio de una cara da su color. Un material pintado sobre un grupo o componente se convierte en la pintura de esa colocación, así que las caras interiores sin color propio la toman, como en SketchUp; un componente pintado con dos colores sigue siendo un solo componente.
- **Etiquetas:** las de grupos y componentes se convierten en etiquetas de ModelCraft, mostradas u ocultas como estaban. Las etiquetas de caras y aristas sueltas no se conservan (ModelCraft etiqueta solo grupos y componentes); la barra de estado las cuenta.
- **Lo oculto entra oculto** (caras, aristas, grupos, componentes, y caras y aristas en una etiqueta oculta), así que ve lo que mostraba SketchUp; {{ui:Mostrar todo}} lo muestra.
- **Texturas:** una cara pintada con un material con textura conserva su textura, colocada como en el archivo, y el archivo de ModelCraft conserva la imagen. Una textura sobre un grupo o componente entero, una textura que falta en el archivo, o una imagen que los navegadores no pueden mostrar (como un archivo de Photoshop) conservan solo el color del material.
- **Omitido, y contado en la barra de estado:** las imágenes colocadas en el modelo. Texto, cotas, guías, planos de sección, escenas y estilos no se leen.
- **Unidades:** los archivos de SketchUp están en pulgadas en su interior; ModelCraft los convierte, así que los tamaños salen bien en cualquier unidad.
- **Guardar `.skp`** no está implementado. Para llevar un modelo de vuelta a SketchUp, exporte Collada (`.dae`).

## No compatible

ModelCraft no puede abrir archivos 3DS ni IFC, y no puede guardar archivos 3DS, FBX, STEP, `.3dm` ni SketchUp (`.skp`).
