---
title: Formatos de archivo en detalle
summary: Qué conserva, convierte y deja fuera exactamente cada formato que ModelCraft abre, importa y exporta.
keywords: formatos, tipos de archivo, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, caché, fbx, 3mf, ifc, dwg, dxf, unidades, ejes, eje Y arriba, eje Z arriba, milímetros, límites
from: c47d2d28
---

El modelo de ModelCraft está en metros, con Z (azul) hacia arriba. Cada formato siguiente se convierte desde o hacia ese sistema.

## ModelCraft (.modelcraft)

| Qué | Detalles |
|---|---|
| Abrir | {{ui:Abrir}} ({{key:Mod+O}}) o suéltelo sobre la vista. También se aceptan archivos que terminan en `.json` |
| Guardar | {{ui:Guardar}} ({{key:Mod+S}}), como descarga |
| Conserva | Todo: geometría, caras y sus colores, materiales y texturas importadas, lámparas, aristas suaves, grupos, componentes, nombres, guías, escenas, las unidades, y la última cámara y el último estilo |
| Deja fuera | El historial de deshacer |
| Límite | 200 MB |

Un archivo guardado con un ModelCraft más reciente que el suyo se rechaza: "Este modelo se guardó con un ModelCraft más reciente (versión de archivo …). Actualice ModelCraft para abrirlo." Un archivo que no es un modelo de ModelCraft indica "Este archivo no es un modelo de ModelCraft (no es JSON)." o "Este no es un archivo de ModelCraft que podamos abrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar, y {{ui:Guardar como}} o {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un archivo USD que ModelCraft guardó se vuelve a abrir sin pérdidas; los archivos USD de otros programas se abren como mallas, grupos, componentes, lámparas y cámaras. Vea [Guardar, abrir y exportar USD](topic:usd).

## Collada (.dae)

Importar y exportar. Es el mejor formato para intercambiar modelos con otros modeladores 3D.

- **Exportar:** Collada 1.4.1, Z hacia arriba, metros. Una geometría por definición de grupo o componente; los componentes se escriben una vez y se colocan por referencia, así que siguen compartidos. Las caras con huecos o contornos cóncavos se dividen en triángulos. Los colores se convierten en materiales. Las aristas sueltas se escriben como líneas. Los nombres que no son válidos en el formato se ajustan, y el nombre exacto se conserva junto a él.
- **Importar:** triángulos, polígonos (con huecos), abanicos y tiras de triángulos se convierten en caras; las líneas, en aristas. Se aplican las transformaciones de los nodos, el eje vertical del archivo y su unidad. Un nodo colocado en varios lugares, o una geometría usada por varios nodos, entra como componente; los demás nodos entran como grupos. Los colores de material (difuso) se convierten en colores de cara.
- **No se importan:** texturas, pieles y morfos, cámaras, luces, algunos tipos de transformación (orientación hacia un punto y sesgo), y referencias a otros archivos. La barra de estado los cuenta.
- **Se pierde al exportar:** cuáles aristas son suaves. **Al importar,** las superficies trianguladas siguen siendo triángulos, con las diagonales suavizadas para que las zonas planas se lean como una sola superficie.

## OBJ (.obj, .mtl)

Importar y exportar.

- **Importar:** suelte el `.obj` junto con su `.mtl` y sus imágenes de textura (o importe solo el `.obj`: entra sin materiales, y la barra de estado indica el `.mtl` que necesitaba). Se lee en metros con Y hacia arriba. Cada objeto (`o`, o si no `g`) se convierte en una [malla](topic:meshes), con sus caras tal como están (los cuadriláteros siguen siendo cuadriláteros). Las coordenadas de textura, las normales y los colores por vértice se conservan. La imagen de color de un material (`map_Kd`, PNG, JPEG o WebP) entra como textura, con sus opciones de escala y desplazamiento; si no, entra su color (`Kd`). Las aristas donde se rompen las normales del archivo son duras; sin normales, deciden los grupos de suavizado del archivo. Otros mapas (relieve, normal), puntos, líneas y curvas se cuentan y se dejan fuera. OBJ no tiene unidad, así que un modelo hecho en milímetros o pulgadas llega con el tamaño incorrecto: escálelo después de importar (vea [Rotar y escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportar:** metros, Y hacia arriba, coordenadas del mundo. Un objeto por colocación de grupo; los componentes se escriben completos en cada colocación. Las mallas conservan sus propias caras, coordenadas de textura y normales; las caras unidas por [aristas suaves](topic:soften) reciben una normal por esquina. Si el modelo tiene colores, se descarga un `.mtl` junto al `.obj`. Si tiene texturas importadas, el `.obj`, el `.mtl` y las imágenes se descargan juntos en un `.zip`.
- **Límite:** 2 millones de vértices o caras; 64 MB de texto.

## glTF (.glb, .gltf)

Importar y exportar, glTF 2.0.

- **Importar:** un `.glb`, o un `.gltf` junto con su `.bin` y sus archivos de textura: suéltelos todos juntos sobre la vista (o elija el `.glb`). Un `.gltf` dado solo indica el archivo que necesita: "Este archivo .gltf necesita "…": abra la versión .glb, o suelte el .gltf junto con sus archivos."
  - **Las mallas** entran como [mallas](topic:meshes), una por malla del archivo, con las normales, coordenadas de textura y colores de vértice del archivo conservados. Las aristas donde se rompen las normales del archivo son duras; el resto son suaves. Una malla usada en varios lugares sigue compartida.
  - **Los nodos** se convierten en grupos, con el nombre que tienen en el archivo. Las mallas instanciadas (EXT_mesh_gpu_instancing) entran como una malla colocada muchas veces.
  - **Materiales:** una textura de color base (PNG, JPEG o WebP) entra como textura, colocada según las coordenadas de textura del archivo (con cualquier transformación de textura), y se conserva al guardar; si no, entra el color base. Metal, rugosidad, mapas de normales, vidrio, capa de barniz, brillo de tela y las demás extensiones de material se leen pero aún no se conservan: la barra de estado lo indica.
  - **Luces** (KHR_lights_punctual): las luces puntuales y de foco se convierten en [lámparas](topic:lights). Las luces direccionales se cuentan: el sol ilumina el modelo.
  - **Las cámaras** se convierten en [escenas](topic:scenes).
  - **Los personajes con esqueleto** entran de pie, tal como el archivo los deja; sus huesos, animaciones y morfos se cuentan y aún no se conservan.
  - **Los archivos comprimidos** (Draco, meshopt) y los datos cuantizados se leen. Los decodificadores se cargan solo para un archivo que los necesita.
  - Los puntos y las líneas se cuentan y se dejan fuera (una malla contiene caras). Las texturas KTX2 se dejan fuera; las caras conservan su color.
- **Exportar** (`.glb`): glTF 2.0 binario, metros, Y hacia arriba. Una malla por definición, así que los componentes siguen compartidos. Las mallas conservan sus normales, coordenadas de textura y colores de vértice; las caras unidas por [aristas suaves](topic:soften) llevan normales suaves. Los colores y materiales se convierten en materiales (un material como su color); las texturas importadas se escriben como texturas. Las lámparas encendidas se convierten en luces puntuales y de foco (las lámparas de área no tienen equivalente en glTF y se dejan fuera); las escenas se convierten en cámaras. Las aristas sueltas se dejan fuera.
- **Límite:** archivos de hasta 300 MB; unos 130 millones de números de geometría.

## STL (.stl)

Importar y exportar.

- **Importar:** binario o ASCII. STL no tiene unidad: se lee en **milímetros**, como lo escriben las impresoras y la exportación propia de ModelCraft. Los vértices en el mismo punto se unen, así que una pieza cerrada entra como una [malla](topic:meshes) cerrada. Los colores del archivo (las convenciones de VisCAM / SolidView y de Materialise) pintan las caras.
- **Exportar,** para impresión 3D: STL binario, **milímetros**, Z hacia arriba. Solo triángulos: los grupos y las aristas sueltas se dejan fuera. Las caras pintadas conservan su color en la convención VisCAM / SolidView, que otros programas ignoran si no la leen. Exporte sólidos cerrados para una impresión limpia.

## STEP (.step, .stp)

Solo importación. STEP es lo que envían los modeladores de piezas y los proveedores: archivos AP203, AP214 y AP242.

- **Importar:** ModelCraft lee el archivo por sí mismo, en la página, y convierte cada sólido en una [malla](topic:meshes) cerrada de triángulos: las caras planas siguen planas, y las caras curvas (cilindros, conos, esferas, toros, superficies B-spline) se convierten en muchas caras pequeñas planas, con las aristas dentro de una misma cara curva suaves y las aristas entre dos caras, duras. Los archivos STEP indican su unidad; el modelo entra a su tamaño real. Un ensamblaje entra con cada pieza donde el archivo la coloca, cada pieza como su propia malla dentro de un grupo con el nombre del archivo. No se leen los colores, los nombres de piezas del árbol de ensamblaje ni las tolerancias (PMI).
- **Mensajes:** lo que se omitió o se dibujó más grueso se agrega a la línea de estado ("Notas: …"); un archivo sin sólidos, un archivo dañado o uno que supera los límites lo indica y no agrega nada.
- **Límite:** archivos de hasta 300 MB; 400 000 caras y 8 millones de triángulos.

## .3dm

Solo importación. Los archivos `.3dm` contienen modelos NURBS: polisuperficies, superficies, mallas, curvas y bloques.

- **Importar:** ModelCraft lee el archivo por sí mismo, en la página. Las mallas entran tal como están; cada cara de una polisuperficie o extrusión se toma de la malla de render guardada con el archivo, o si no, ModelCraft la tesela (planos, superficies NURBS, superficies de revolución, curvas extruidas, extrusiones; recortadas por sus aristas, y las polisuperficies cerradas como mallas cerradas). Las curvas se convierten en aristas, los bloques en componentes (se conservan los bloques dentro de bloques), las capas en etiquetas (ocultas cuando están apagadas), y el color del objeto (el suyo, el de su capa o el de su material) pinta sus caras. El archivo indica su unidad; el modelo entra a su tamaño real. Paso a paso: [Traer un modelo .3dm](topic:import-3dm-files).
- **Mensajes:** la línea de estado indica cuántas caras vinieron de mallas guardadas y cuántas se teselaron, y nombra lo que se dejó fuera: puntos, nubes de puntos, texto, cotas, sombreados, luces, objetos SubD, caras en tipos de superficie que aún no se leen, y bloques vinculados.
- **Límite:** archivos de hasta 300 MB.

## PLY (.ply)

Importar y exportar, para mallas con colores (escaneos, impresión 3D a color, otros modeladores).

- **Importar:** ASCII y binario. Las caras se convierten en una [malla](topic:meshes) con sus normales, coordenadas de textura y colores de vértice conservados; cada cara se pinta con el más cercano de 4,096 colores para que vea los colores de inmediato. PLY no tiene unidad ni convención de ejes: las coordenadas entran tal como son (metros, Z hacia arriba). Un PLY con solo puntos es una nube de puntos: ábralo en BimCraft o CivilCraft.
- **Exportar:** PLY binario con posiciones, normales y colores (y coordenadas de textura si el modelo las tiene), en metros, Z hacia arriba.

## FBX (.fbx)

Solo importación. Archivos FBX 7 (desde 2011 en adelante), binarios o ASCII, leídos por el lector propio de ModelCraft.

- Las mallas entran como [mallas](topic:meshes) con sus normales, coordenadas de textura (cada conjunto UV) y colores de vértice; una malla que varios objetos usan sigue compartida. Los objetos se convierten en grupos con sus transformaciones (incluidos pivotes, desplazamientos y prerrotaciones).
- Materiales: la textura difusa (incrustada en el archivo, o una imagen soltada junto con el `.fbx`) entra como textura (las imágenes TGA se conservan como PNG); si no, entra el color difuso. Otros ajustes de material esperan al nuevo modelo de material.
- El eje vertical y la unidad del archivo se aplican: todo entra con Z hacia arriba, en metros.
- Las luces puntuales y de foco se convierten en [lámparas](topic:lights) (una intensidad FBX de 100 es la lámpara predeterminada de ModelCraft, 800 lúmenes: las intensidades FBX no tienen unidad). Las cámaras se convierten en [escenas](topic:scenes).
- Los personajes con esqueleto entran en reposo; los huesos y las animaciones se cuentan y aún no se conservan. Las luces direccionales y de área, y la geometría que no es malla (NURBS, curvas), se cuentan y se dejan fuera.
- Los archivos FBX 6 y anteriores se rechazan: guárdelos de nuevo como FBX 2011 o posterior.

## Alembic (.abc)

Solo importación: cachés de geometría de programas de animación y efectos.

- Las mallas (de polígonos y de subdivisión) entran como [mallas](topic:meshes), con sus coordenadas de textura y normales; las transformaciones se convierten en grupos. Alembic es Y hacia arriba y se gira a Z hacia arriba; metros.
- Un caché con muchas muestras (una animación) entra en su primera muestra; la barra de estado indica cuántas tiene.
- Los puntos, las curvas, las superficies NURBS, las cámaras y las luces se cuentan y se dejan fuera. Los archivos en el formato HDF5 antiguo se rechazan: guárdelos de nuevo como archivo Alembic Ogawa.

{{ui:Revisar para impresión 3D (STL o 3MF)…}} revisa la forma primero y escribe la selección, o todo lo visible. Vea [Preparar un modelo para impresión 3D](topic:print-3d).

## 3MF (.3mf)

Solo exportación, desde {{ui:Revisar para impresión 3D (STL o 3MF)…}}. 3MF núcleo: una malla en **milímetros**, Z hacia arriba, con sus colores como materiales. La mayoría de los laminadores lo leen, y a diferencia de STL indica su unidad. Las cosas ocultas se dejan fuera. Vea [Preparar un modelo para impresión 3D](topic:print-3d).

## Exportación DWG y DXF (.dwg, .dxf)

Para programas CAD. El modelo se escribe en su propia unidad: pulgadas para modelos en pies y pulgadas; de lo contrario, milímetros, centímetros o metros (la barra de estado lo indica).

- **Las caras** se convierten en caras 3D (triángulos). Las líneas dentro de una cara y las aristas suaves se escriben invisibles, así que las caras se ven como las de ModelCraft.
- **Las aristas sueltas** se convierten en líneas.
- **Grupos y componentes** se convierten en bloques: un componente se escribe una vez y se coloca tantas veces como se use, incluidas las copias giradas y reflejadas. Un grupo que se estiró después de girarlo (quedando inclinado) se escribe en su lugar.
- **Colores:** DWG conserva el color de cada cara exactamente; DXF usa el más cercano de los 255 colores CAD estándar.
- **Versiones:** DWG se escribe como AutoCAD 2004 (AC1018), que abren los programas CAD desde 2004 en adelante. DXF es R12 (AC1009), la versión que lee cualquier programa CAD; R12 no tiene campo de unidad, así que indique al programa CAD qué unidad usar.
- **No se escriben:** guías, cotas, escenas ni la cámara.

## IFC (.ifc)

Solo exportación, para BimCraft y otros programas BIM. IFC4 con un proyecto, un sitio, un edificio y sus niveles. Cada grupo o componente de nivel superior se convierte en un proxy de elemento de construcción con su nombre; los cerrados se escriben como formas sólidas (breps facetados), y los abiertos como modelos de superficie; se conservan los huecos en las caras. La geometría suelta de nivel superior se convierte en un elemento llamado "Loose geometry". Sin tipos, propiedades ni materiales.

**Niveles:** {{ui:Exportar}} › {{ui:Niveles IFC…}} los enumera, cada uno con un nombre y una elevación ({{ui:Agregar nivel}}, o {{ui:Deducir del modelo}}, que crea un nivel por cada altura sobre la que están sus grupos de nivel superior). Al exportar, cada grupo o componente va en el nivel que está en o debajo de su punto más bajo, y conserva su lugar. Sin niveles, todo va en un nivel, "Level 1", en 0. Los niveles se guardan en el archivo de ModelCraft.

## DWG (.dwg) y DXF (.dxf)

Se importan como líneas sobre el suelo (los sombreados y las caras 3D como caras); la exportación se describe arriba. Vea [Modelar sobre un plano de sitio](topic:site-plan).

- **Lectura:** líneas, polilíneas (con arcos), polilíneas 3D, círculos, arcos y referencias a bloques, incluidos los arreglos, desde el espacio modelo. Los objetos invisibles (como los estados ocultos de un bloque dinámico) se dejan fuera. Las curvas se convierten en 48 trozos rectos por vuelta completa.
- **Lectura desde la versión 0.4:** splines y elipses (como aristas), texto, texto de líneas múltiples y valores de atributo (como aristas en una tipografía de trazo simple), sombreados (caras con huecos), caras 3D y rellenos sólidos (caras), y cotas (dibujadas a partir de los bloques de cota del propio dibujo).
- **Lectura desde la versión 0.7:** sólidos 3D, regiones y cuerpos (sus datos ACIS, en DWG y DXF de cualquier versión), cada uno como su propio grupo; los cerrados como sólidos. Las caras en superficies distintas de planos, cilindros, conos, esferas, toros y superficies spline simples se dejan fuera y se listan.
- **No se leen:** puntos, tablas, multidirectrices, imágenes, y todo lo que esté en el espacio papel.
- **Unidades:** se toman del dibujo cuando lo indica. Si no, ModelCraft pregunta.
- **DXF** debe ser ASCII. Un DXF binario se rechaza.
- **Los archivos DWG** desde AutoCAD R13 hasta el formato actual (AutoCAD 2018 y posteriores; AC1012 a AC1032) los lee el lector DWG propio de ModelCraft, en la página; forma parte de ModelCraft, así que funciona sin conexión siempre que ModelCraft funcione. Las versiones anteriores (R12 y anteriores) y los archivos muy dañados no se pueden leer; guárdelos como DXF.
- **Límites:** se rechazan las coordenadas a más de 10,000 km del origen, o más de 2 millones de trozos de línea.

## Archivos SKP

{{ui:Importar}} (o suelte el archivo sobre la vista) lee archivos de SketchUp con el lector propio de ModelCraft, en la página: no se sube nada, y funciona sin conexión siempre que ModelCraft funcione. Probado con archivos de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 y 2026; otras versiones deberían abrirse también, pero aún no se han probado. El modelo entra como un solo grupo con el nombre del archivo. Un {{key:Mod+Z}} lo quita de nuevo. Paso a paso: [Importar un modelo de SketchUp](topic:import-sketchup-files).

- **Se conserva:** las caras con sus huecos, los grupos (como grupos) y los componentes (como componentes, compartidos), sus nombres y colocaciones, colores, etiquetas de grupos y componentes, las aristas que no forman parte de una cara, y las aristas suaves y lisas, para que las superficies curvas sigan lisas.
- **Colores:** el material propio de una cara da su color. Un material pintado sobre un grupo o componente se convierte en la pintura de esa colocación, así que las caras interiores sin color propio la toman, como en SketchUp; un componente pintado en dos colores sigue siendo un solo componente.
- **Las etiquetas** de grupos y componentes se convierten en etiquetas de ModelCraft, mostradas u ocultas como estaban. Las etiquetas de caras y aristas sueltas no se conservan (ModelCraft etiqueta solo grupos y componentes); la barra de estado las cuenta.
- **Las cosas ocultas entran ocultas** (caras, aristas, grupos, componentes, y caras y aristas en una etiqueta oculta), así ve lo que mostraba SketchUp; {{ui:Mostrar todo}} las muestra.
- **Texturas:** una cara pintada con un material texturizado conserva su textura, colocada como en el archivo, y el archivo de ModelCraft conserva la imagen. Una textura sobre un grupo o componente completo, una textura que falta en el archivo, o una imagen que los navegadores no pueden mostrar (como un archivo de Photoshop) conservan solo el color de su material.
- **Se dejan fuera, y se cuentan en la barra de estado:** las imágenes colocadas en el modelo. El texto, las cotas, las guías, los planos de sección, las escenas y los estilos no se leen.
- **Unidades:** los archivos de SketchUp están en pulgadas por dentro; ModelCraft los convierte, así que los tamaños salen bien en cualquier unidad.
- **Guardar `.skp`** no está implementado. Para llevar un modelo de vuelta a SketchUp, exporte Collada (`.dae`).

## No compatible

ModelCraft no puede abrir archivos 3DS ni IFC, y no puede guardar archivos 3DS, FBX, STEP, `.3dm` ni SketchUp (`.skp`).
