---
title: Abrir, guardar, importar y exportar
summary: El archivo de ModelCraft, lo que puede traer y enviar, adónde van los archivos y qué cambia sin conexión y entre navegadores.
keywords: abrir, guardar, importar, exportar, archivo, 3dm, skp, recuperar, autoguardado, recientes, escritorio, abrir en 3d, traspaso, descargar, archivo modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sin conexión, guardar como
from: 0b4896d1
---

ModelCraft lee y escribe archivos en su ordenador. No se sube nada: un archivo que abre se lee dentro de su navegador y un archivo que guarda es una descarga. Consulte [Adónde van sus archivos](common:your-files).

## Formatos de un vistazo

| Formato | Abrir | Importar | Exportar | Para qué sirve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Guardar}} | Su archivo de trabajo. Lo conserva todo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Guardar como}}, {{ui:Exportar}} | Programas de renderizado y de ensamblaje de escenas. El USD propio de ModelCraft lo conserva todo. Consulte [Guardar, abrir y exportar USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Traer modelos de SketchUp. Conserva grupos, componentes, colores, texturas en las caras, etiquetas y aristas suavizadas. Consulte [Traiga un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Intercambiar modelos con otros modeladores 3D. Conserva grupos, componentes y colores. |
| OBJ (`.obj`) | no | sí | sí | Programas de renderizado y visualización. |
| glTF (`.glb`, `.gltf`) | no | sí | solo `.glb` | Visores web, motores de juegos, RA. |
| STL (`.stl`) | no | sí | sí | Impresión 3D (en milímetros). |
| PLY (`.ply`) | no | sí | sí | Mallas con colores: escaneos, impresión en color. |
| FBX (`.fbx`) | no | sí | no | Modelos de programas de animación y de juegos (FBX 2011 y posteriores). |
| Alembic (`.abc`) | no | sí | no | Cachés de geometría, en su primera muestra. |
| STEP (`.step`, `.stp`) | no | sí | no | Piezas de modeladores de piezas y de proveedores, como mallas cerradas a su tamaño real. Consulte [Formatos de archivo](topic:formats). |
| `.3dm` | no | sí | no | Modelos NURBS: polisuperficies, mallas, curvas, bloques y capas, como mallas, aristas, componentes y etiquetas. Consulte [Traiga un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impresión 3D, con colores (en milímetros). Desde {{ui:Revisar para impresión 3D (STL o 3MF)…}}: consulte [Prepare un modelo para la impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programas BIM, y BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Un plano de situación o de planta sobre el que modelar; enviar el modelo a un programa CAD. |
| DXF (`.dxf`) | no | sí | sí | Lo mismo, para cualquier programa CAD. |

[Los formatos de archivo en detalle](topic:formats) enumera exactamente lo que conserva y lo que omite cada formato.

## El archivo de ModelCraft

Un archivo `.modelcraft` conserva todo el modelo: la geometría, los grupos, los componentes, las guías, las escenas, las unidades, y la cámara y el estilo que usaba al guardar. No conserva el historial de deshacer.

### Abrir un modelo

1. Pulse {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Si el modelo en pantalla tiene cambios sin guardar, ModelCraft pregunta: "Este modelo tiene cambios sin guardar. ¿Guardar una copia primero?" Elija {{ui:Guardar una copia}}, {{ui:Descartar cambios}} o {{ui:Cancelar}}.
3. Elija el archivo `.modelcraft`.

El modelo se abre en las unidades en que se guardó, con la cámara con la que se guardó. También puede soltar un archivo `.modelcraft` sobre la vista 3D, o pulsar uno en la lista de archivos recientes de la tarjeta de inicio (navegadores que pueden volver a abrir un archivo, y la aplicación de escritorio).

:::desktop
En la aplicación de escritorio, al hacer doble clic en un archivo `.modelcraft` se abre en ModelCraft, y lo mismo ocurre con **Abrir con** en un archivo Collada, OBJ, glTF, DWG o DXF (se importa en un modelo nuevo).
:::

### Guardar un modelo

Pulse {{ui:Guardar}} o pulse {{key:Mod+S}}. El navegador descarga `<nombre>.modelcraft`, donde el nombre es el del archivo que abrió, o "Untitled" para un modelo nuevo.

:::desktop
En la aplicación de escritorio, {{ui:Guardar}} escribe el archivo que abrió en su sitio. Un modelo nuevo pregunta dónde guardarlo.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda una copia como archivo `.modelcraft` o como [USD](topic:usd); cuando el navegador puede, pide el nombre y el lugar. Si no, cambie el nombre del archivo descargado: el siguiente guardado tras abrir el archivo renombrado usa el nombre nuevo.
- Cada guardado es una descarga nueva. Según los ajustes del navegador, va directamente a su carpeta de descargas o pregunta dónde guardar. Si ya hay allí un archivo con ese nombre, la mayoría de los navegadores añaden un número, como `Untitled (1).modelcraft`.

:::chromium
Para elegir la carpeta cada vez, abra los ajustes del navegador, busque "descargas" y active "Preguntar dónde guardar cada archivo antes de descargarlo".
:::

:::firefox
Para elegir la carpeta cada vez, abra **Ajustes**, después **General**, y en "Descargas" elija "Preguntarle siempre dónde guardar los archivos".
:::

:::safari
Para cambiar adónde van las descargas, abra **Safari**, después **Ajustes**, después **General**, y fije "Ubicación de descarga de archivos".
:::

### Empezar un modelo nuevo

Pulse {{ui:Nuevo}}. Si hay cambios sin guardar, ModelCraft pregunta antes. Un modelo nuevo empieza vacío, en la unidad de su configuración regional (pies y pulgadas en Estados Unidos, milímetros en el resto), sin escenas.

### Si el navegador se cierra antes de guardar

ModelCraft conserva en su navegador una copia del trabajo sin guardar un par de segundos después de cada cambio. Si la pestaña o el navegador se cierran antes de que guarde, la próxima vez que abra ModelCraft pregunta "¿Recuperar su trabajo?". Al recuperar, el modelo se abre tal como estaba, aún sin guardar en un archivo: guárdelo para conservarlo. Consulte [Recupere su trabajo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

En la aplicación de dibujo CadCraft, **Vista**, después **Más**, después **Abrir en ModelCraft** entrega el dibujo abierto a ModelCraft en una pestaña nueva, como DWG. Llega como llega un DWG importado: líneas en el suelo, en un grupo, listas para modelar sobre ellas. No se sube nada; el archivo pasa por el propio almacenamiento de su navegador.

## Importar

Importar añade un archivo al modelo que tiene abierto; no lo sustituye.

1. Pulse {{ui:Importar}} en el grupo {{ui:Archivo}}, o suelte el archivo sobre la vista 3D.
2. Elija un archivo de SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   El archivo llega como **un solo grupo**, seleccionado, y la vista se ajusta para mostrarlo. La barra de estado indica lo que entró y enumera lo que no se pudo importar, como "No importado: 2 texturas".

3. Para trabajar directamente en su geometría, haga doble clic en el grupo para editar dentro de él, o pulse {{ui:Descomponer}}.

Algunas cosas que conviene saber:

- **Tamaño y dirección hacia arriba:** los archivos Collada indican su unidad y qué eje es el vertical, y ModelCraft los convierte. glTF siempre está en metros. Los archivos OBJ no llevan unidad: ModelCraft los lee en metros, con Y hacia arriba. Si un OBJ llega 1000 veces demasiado grande o demasiado pequeño, use [Escalar](topic:rotate-scale) con un factor como `0.001` o `1000`.
- **DWG y DXF** llegan como líneas (aristas) en el suelo, no como caras. Si el dibujo no indica su unidad, un cuadro de diálogo titulado "Unidades del dibujo" pregunta qué es una unidad de dibujo. Consulte [Modele sobre un plano de situación](topic:site-plan).
- **Límites:** se rechazan para importar los archivos de más de 300 MB, y para abrir los de más de 200 MB. Se rechazan por demasiado grandes los archivos con más de 2 millones de vértices o de caras.

## Exportar

1. Pulse {{ui:Exportar}} en el grupo {{ui:Archivo}}.
2. Elija un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con colores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} o {{ui:DXF para CAD (.dxf, R12)}}.

El navegador descarga el archivo, con el nombre del modelo. Se exporta todo el modelo, no solo la selección. Un modelo vacío no se exporta: "El modelo está vacío: dibuje algo primero." Consulte [Exporte un modelo para otros programas](topic:export-model).

## Con y sin conexión

Todo en ModelCraft se ejecuta en su ordenador, de modo que modelar, abrir, guardar, importar y exportar funcionan sin conexión una vez cargada la aplicación.

Para abrir ModelCraft sin ninguna conexión, guárdelo para uso sin conexión mientras tiene conexión:

1. Pulse {{ui:Guardar para uso sin conexión}} en la barra de la aplicación, arriba.
2. El botón cuenta hacia arriba ("Guardando 40 de 212") mientras guarda. ModelCraft guarda sus propios archivos (entre ellos su lector de DWG), esta ayuda y la biblioteca 3D, así que puede tardar un rato.
3. Cuando el botón dice {{ui:Listo sin conexión}}, ModelCraft se abre desde la misma dirección sin conexión, y la importación de DWG también funciona sin conexión.

Más adelante, pulse {{ui:Listo sin conexión}} para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. Si el botón dice {{ui:No se pudo guardar}}, algunos archivos no se descargaron: compruebe la conexión y púlselo para volver a intentarlo. {{ui:Sin conexión no disponible}} significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunos ordenadores gestionados). Consulte [Trabajar sin conexión](common:offline).

El guardado en la nube aún no está disponible. Cada modelo vive donde usted lo guarda.

:::offline
Está sin conexión. Puede seguir modelando y guardando. A menos que la barra de la aplicación muestre {{ui:Listo sin conexión}}, no recargue esta pestaña hasta que vuelva a tener conexión.
:::

## Aplicación de escritorio

:::desktop
Está usando ModelCraft en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones. Los archivos se abren y se guardan donde usted elija.
:::

:::web
ModelCraft se ejecuta en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones en una sola instalación, desde getcadcraft.com/download.
:::
