---
title: Abrir, guardar, importar y exportar
summary: El archivo de ModelCraft, qué puede traer y enviar, dónde van los archivos, y qué cambia sin conexión y entre navegadores.
keywords: abrir, guardar, importar, exportar, archivo, 3dm, skp, recuperar, autoguardado, recientes, escritorio, abrir en 3D, traspaso, descargar, archivo modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sin conexión, guardar como
from: 3f09ab72
---

ModelCraft lee y escribe archivos en su ordenador. Nada se sube: un archivo que abre se lee dentro de su navegador, y un archivo que guarda es una descarga. Consulte [Dónde van sus archivos](common:your-files).

## Formatos de un vistazo

| Formato | Abrir | Importar | Exportar | Para qué sirve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Guardar}} | Su archivo de trabajo. Lo conserva todo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Guardar como}}, {{ui:Exportar}} | Programas de renderizado y de montaje de escenas. El USD propio de ModelCraft lo conserva todo. Consulte [Guardar, abrir y exportar USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Para traer modelos de SketchUp. Conserva grupos, componentes, colores, texturas en las caras, etiquetas y aristas suaves. Consulte [Traer un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Intercambio de modelos con otros modeladores 3D. Conserva grupos, componentes y colores. |
| OBJ (`.obj`) | no | sí | sí | Programas de renderizado y visualización. |
| glTF (`.glb`, `.gltf`) | no | sí | solo `.glb` | Visores web, motores de juegos, RA. |
| STL (`.stl`) | no | sí | sí | Impresión 3D (en milímetros). |
| PLY (`.ply`) | no | sí | sí | Mallas con colores: escaneados, impresión en color. |
| FBX (`.fbx`) | no | sí | no | Modelos de programas de animación y de juegos (FBX 2011 y posteriores). |
| Alembic (`.abc`) | no | sí | no | Cachés de geometría, en su primera muestra. |
| STEP (`.step`, `.stp`) | no | sí | no | Piezas de modeladores de piezas y proveedores, como mallas cerradas a su tamaño real. Consulte [Formatos de archivo](topic:formats). |
| `.3dm` | no | sí | no | Modelos NURBS: polisuperficies, mallas, curvas, bloques y capas, como mallas, aristas, componentes y etiquetas. Consulte [Traer un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impresión 3D, con colores (en milímetros). Desde {{ui:Revisar para impresión 3D (STL o 3MF)…}}: consulte [Preparar un modelo para impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programas BIM, y BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Un plano de situación o de planta sobre el que modelar; enviar el modelo a un programa CAD. |
| DXF (`.dxf`) | no | sí | sí | Lo mismo, para cualquier programa CAD. |

[Formatos de archivo en detalle](topic:formats) indica exactamente lo que conserva cada formato y lo que deja fuera.

## El archivo de ModelCraft

Un archivo `.modelcraft` conserva el modelo completo: geometría, grupos, componentes, guías, escenas, las unidades, y la cámara y el estilo que usaba al guardar. No conserva el historial de deshacer.

### Abrir un modelo

1. Haga clic en {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Si el modelo en pantalla tiene cambios sin guardar, ModelCraft pregunta: "Este modelo tiene cambios que no se han guardado. ¿Guardar una copia primero?" Elija {{ui:Guardar una copia}}, {{ui:Descartar cambios}} o {{ui:Cancelar}}.
3. Seleccione el archivo `.modelcraft`.

El modelo se abre en las unidades en que se guardó, con la cámara con que se guardó. También puede soltar un archivo `.modelcraft` sobre la vista 3D, o hacer clic en uno de la lista de archivos recientes de la tarjeta de inicio (en los navegadores que pueden reabrir un archivo, y en la aplicación de escritorio).

:::desktop
En la aplicación de escritorio, al hacer doble clic en un archivo `.modelcraft` se abre en ModelCraft, y lo mismo hace **Abrir con** sobre un archivo Collada, OBJ, glTF, DWG o DXF (se importa en un modelo nuevo).
:::

### Guardar un modelo

Haga clic en {{ui:Guardar}} o pulse {{key:Mod+S}}. El navegador descarga `<name>.modelcraft`, donde el nombre es el del archivo que abrió, o "Untitled" para un modelo nuevo.

:::desktop
En la aplicación de escritorio, {{ui:Guardar}} escribe el archivo que abrió en el mismo lugar. Un modelo nuevo pregunta dónde guardarlo.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda una copia como archivo `.modelcraft` o como [USD](topic:usd); cuando el navegador lo permite, pide el nombre y el lugar. Si no, cambie el nombre del archivo descargado: el siguiente guardado, tras abrir el archivo renombrado, usa el nombre nuevo.
- Cada guardado es una descarga nueva. Según la configuración del navegador, va directamente a su carpeta de descargas o pregunta dónde guardarlo. Si ya hay un archivo con ese nombre, la mayoría de navegadores añaden un número, como `Untitled (1).modelcraft`.

:::chromium
Para elegir la carpeta cada vez, abra la configuración del navegador, busque "descargas" y active "Preguntar dónde guardar cada archivo antes de descargarlo".
:::

:::firefox
Para elegir la carpeta cada vez, abra **Ajustes**, luego **General**, y en "Descargas" elija "Preguntar siempre dónde guardar los archivos".
:::

:::safari
Para cambiar dónde van las descargas, abra **Safari**, luego **Ajustes**, luego **General**, y configure "Ubicación de descarga de archivos".
:::

### Empezar un modelo nuevo

Haga clic en {{ui:Nuevo}}. Si hay cambios sin guardar, ModelCraft pregunta antes. Un modelo nuevo empieza vacío, en la unidad de su configuración regional (pies y pulgadas en Estados Unidos, milímetros en el resto), sin escenas.

### Si el navegador se cierra antes de guardar

ModelCraft guarda una copia del trabajo sin guardar en su navegador unos segundos después de cada cambio. La copia se escribe en segundo plano, de modo que un modelo grande no le retrasa mientras se guarda. Si la pestaña o el navegador se cierran antes de guardar, la próxima vez que abra ModelCraft preguntará "¿Recuperar su trabajo?". Al recuperar, el modelo se abre tal como estaba, aún no guardado en un archivo: guárdelo para conservarlo. Consulte [Recuperar su trabajo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

En la aplicación de dibujo CadCraft, **Vista**, luego **Más**, luego **Abrir en ModelCraft** pasa el dibujo abierto a ModelCraft en una pestaña nueva, como DWG. Llega igual que un DWG importado: líneas sobre el suelo, en un grupo, listas para modelar sobre ellas. Nada se sube; el archivo pasa por el almacenamiento propio del navegador.

## Importar

Importar añade un archivo al modelo que tiene abierto; no reemplaza el modelo.

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}}, o suelte el archivo sobre la vista 3D.
2. Seleccione un archivo SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   El archivo llega como **un solo grupo**, seleccionado, y la vista hace zoom para mostrarlo. La barra de estado indica qué entró y enumera lo que no pudo importar, como "No importado: 2 texturas".

3. Para trabajar directamente sobre su geometría, haga doble clic en el grupo para editar dentro de él, o haga clic en {{ui:Descomponer}}.

Algunas cosas que debe saber:

- **Tamaño y dirección hacia arriba:** los archivos Collada indican su unidad y qué eje es el vertical, y ModelCraft los convierte. glTF siempre está en metros. Los archivos OBJ no llevan unidad: ModelCraft los lee como metros, con Y hacia arriba. Si un OBJ llega 1000 veces más grande o más pequeño, use [Escalar](topic:rotate-scale) con un factor como `0.001` o `1000`.
- **DWG y DXF** llegan como líneas (aristas) sobre el suelo, no como caras. Si el dibujo no indica su unidad, un cuadro de diálogo titulado "Unidades del dibujo" pregunta cuánto mide una unidad del dibujo. Consulte [Modelar sobre un plano de situación](topic:site-plan).
- **Límites:** se rechazan para importar los archivos de más de 300 MB, y para abrir los de más de 200 MB. Se rechazan por demasiado grandes los archivos con más de 2 millones de vértices o caras. Un OBJ de más de 64 MB se rechaza antes de leerse. Los archivos de texto (Collada, OBJ, STL ASCII, USD en texto) se leen por partes, de unos 4 MB, así que ningún bloque de texto contiene el archivo completo; en nuestra prueba, un OBJ de 16 MB usó unos 0.5 GB de memoria mientras se abría.

## Exportar

1. Haga clic en {{ui:Exportar}} en el grupo {{ui:Archivo}}.
2. Elija un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con colores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} o {{ui:DXF para CAD (.dxf, R12)}}.

El navegador descarga el archivo, con el nombre del modelo. Se exporta el modelo completo, no solo la selección. Los archivos glTF, Collada y OBJ se escriben en segundo plano, así que ModelCraft sigue funcionando mientras exporta un modelo grande; la descarga empieza cuando el archivo está listo. Un modelo vacío no se exporta: "El modelo está vacío: dibuje algo primero." Consulte [Exportar un modelo para otros programas](topic:export-model).

## En línea y sin conexión

Todo en ModelCraft funciona en su ordenador, así que modelar, abrir, guardar, importar y exportar funcionan sin conexión una vez cargada la aplicación.

Para abrir ModelCraft sin ninguna conexión, guárdelo para uso sin conexión mientras esté en línea:

1. Haga clic en {{ui:Guardar para uso sin conexión}} en la barra de aplicación superior.
2. El botón cuenta ("Guardando 40 de 212") mientras guarda. ModelCraft guarda sus propios archivos (entre ellos su lector de DWG), esta ayuda y la biblioteca 3D, así que puede tardar.
3. Cuando el botón diga {{ui:Listo sin conexión}}, ModelCraft se abre desde la misma dirección sin conexión, y la importación de DWG también funciona sin conexión.

Haga clic en {{ui:Listo sin conexión}} más tarde para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. Si el botón dice {{ui:No se pudo guardar}}, algunos archivos no se descargaron: compruebe la conexión y haga clic para volver a intentarlo. {{ui:Sin conexión no disponible}} significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunos equipos gestionados). Consulte [Trabajar sin conexión](common:offline).

Guardar en la nube todavía no está disponible. Cada modelo se guarda donde usted lo guarde.

:::offline
Está sin conexión. Puede seguir modelando y guardando. Salvo que la barra de aplicación muestre {{ui:Listo sin conexión}}, no recargue esta pestaña hasta que vuelva a estar en línea.
:::

## Aplicación de escritorio

:::desktop
Está usando ModelCraft en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones. Los archivos se abren y se guardan donde usted elija.
:::

:::web
ModelCraft funciona en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones en una sola instalación, desde getcadcraft.com/download.
:::
