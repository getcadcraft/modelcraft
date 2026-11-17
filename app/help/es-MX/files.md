---
title: Abrir, guardar, importar y exportar
summary: El archivo de ModelCraft, lo que puede traer y enviar, dónde van los archivos y qué cambia sin conexión y entre navegadores.
keywords: abrir, guardar, importar, exportar, archivo, 3dm, skp, recuperar, autoguardado, recientes, escritorio, abrir en 3D, traspaso, descargar, archivo de ModelCraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sin conexión, guardar como
from: 3f09ab72
---

ModelCraft lee y escribe archivos en su computadora. No se sube nada: un archivo que abre se lee dentro de su navegador, y un archivo que guarda es una descarga. Vea [Dónde van sus archivos](common:your-files).

## Formatos de un vistazo

| Formato | Abrir | Importar | Exportar | Para qué sirve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Save}} | Su archivo de trabajo. Conserva todo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Save as}}, {{ui:Export}} | Programas de renderizado y ensamblaje de escenas. El USD propio de ModelCraft conserva todo. Vea [Guardar, abrir y exportar USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Para traer modelos de SketchUp. Conserva grupos, componentes, colores, texturas en las caras, etiquetas y aristas suaves. Vea [Traer un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Intercambiar modelos con otros modeladores 3D. Conserva grupos, componentes y colores. |
| OBJ (`.obj`) | no | sí | sí | Programas de renderizado y visualización. |
| glTF (`.glb`, `.gltf`) | no | sí | solo `.glb` | Visores web, motores de juegos, RA. |
| STL (`.stl`) | no | sí | sí | Impresión 3D (en milímetros). |
| PLY (`.ply`) | no | sí | sí | Mallas con colores: escaneos, impresión a color. |
| FBX (`.fbx`) | no | sí | no | Modelos de programas de animación y juegos (FBX 2011 y más recientes). |
| Alembic (`.abc`) | no | sí | no | Cachés de geometría, en su primera muestra. |
| STEP (`.step`, `.stp`) | no | sí | no | Piezas de modeladores de piezas y proveedores, como mallas cerradas a su tamaño real. Vea [Formatos de archivo](topic:formats). |
| `.3dm` | no | sí | no | Modelos NURBS: polisuperficies, mallas, curvas, bloques y capas, como mallas, aristas, componentes y etiquetas. Vea [Traer un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impresión 3D, con colores (en milímetros). Desde {{ui:Revisar para impresión 3D (STL o 3MF)…}}: vea [Preparar un modelo para impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programas BIM, y BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Un plano de sitio o de planta sobre el cual modelar; enviar el modelo a un programa CAD. |
| DXF (`.dxf`) | no | sí | sí | Lo mismo, para cualquier programa CAD. |

[Formatos de archivo en detalle](topic:formats) enumera exactamente lo que conserva y lo que deja fuera cada formato.

## El archivo de ModelCraft

Un archivo `.modelcraft` conserva todo el modelo: geometría, grupos, componentes, guías, escenas, las unidades, y la cámara y el estilo que usaba al guardar. No conserva el historial de deshacer.

### Abrir un modelo

1. Haga clic en {{ui:Open}} en el grupo {{ui:File}}, o pulse {{key:Mod+O}}.
2. Si el modelo en pantalla tiene cambios sin guardar, ModelCraft pregunta: "Este modelo tiene cambios que no se han guardado. ¿Guardar una copia primero?" Elija {{ui:Save a copy}}, {{ui:Discard changes}} o {{ui:Cancel}}.
3. Elija el archivo `.modelcraft`.

El modelo se abre en las unidades en que se guardó, con la cámara con que se guardó. También puede soltar un archivo `.modelcraft` sobre la vista 3D, o hacer clic en uno de la lista de archivos recientes de la tarjeta de inicio (en los navegadores que pueden reabrir un archivo, y en la aplicación de escritorio).

:::desktop
En la aplicación de escritorio, al hacer doble clic en un archivo `.modelcraft` se abre en ModelCraft, y lo mismo hace **Abrir con** en un archivo Collada, OBJ, glTF, DWG o DXF (se importa a un modelo nuevo).
:::

### Guardar un modelo

Haga clic en {{ui:Save}} o pulse {{key:Mod+S}}. El navegador descarga `<name>.modelcraft`, donde el nombre es el del archivo que abrió, o "Sin título" para un modelo nuevo.

:::desktop
En la aplicación de escritorio, {{ui:Save}} escribe el archivo que abrió en su mismo lugar. Un modelo nuevo pregunta dónde guardarlo.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) guarda una copia como archivo `.modelcraft` o como [USD](topic:usd); donde el navegador lo permite, pide el nombre y el lugar. De lo contrario, cambie el nombre del archivo descargado: el siguiente guardado, después de abrir el archivo renombrado, usa el nombre nuevo.
- Cada guardado es una descarga nueva. Según la configuración del navegador, va directo a su carpeta de descargas o pregunta dónde guardarlo. Si ya existe un archivo con ese nombre, la mayoría de los navegadores agregan un número, como `Untitled (1).modelcraft`.

:::chromium
Para elegir la carpeta cada vez, abra la configuración del navegador, busque "descargas" y active "Preguntar dónde guardar cada archivo antes de descargarlo".
:::

:::firefox
Para elegir la carpeta cada vez, abra **Configuración**, luego **General**, y en "Descargas" elija "Preguntar siempre dónde guardar los archivos".
:::

:::safari
Para cambiar el destino de las descargas, abra **Safari**, luego **Configuración**, luego **General**, y ajuste "Ubicación de descarga de archivos".
:::

### Crear un modelo nuevo

Haga clic en {{ui:New}}. Si hay cambios sin guardar, ModelCraft pregunta primero. Un modelo nuevo empieza vacío, en la unidad de su región (pies y pulgadas en Estados Unidos, milímetros en los demás países), sin escenas.

### Si el navegador se cierra antes de guardar

ModelCraft guarda una copia del trabajo sin guardar en su navegador unos segundos después de cada cambio. La copia se escribe en segundo plano, así que un modelo grande no lo detiene mientras se guarda. Si la pestaña o el navegador se cierran antes de guardar, la próxima vez que abra ModelCraft preguntará "¿Recuperar su trabajo?". Al recuperar, el modelo se abre como estaba, pero todavía no guardado en un archivo: guárdelo para conservarlo. Vea [Recuperar su trabajo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

En la aplicación de dibujo CadCraft, **Vista**, luego **Más**, luego **Abrir en ModelCraft** pasa el dibujo abierto a ModelCraft en una pestaña nueva, como DWG. Llega igual que un DWG importado: líneas sobre el suelo, en un grupo, listo para modelar sobre él. No se sube nada; el archivo pasa por el almacenamiento propio de su navegador.

## Importar

Importar agrega un archivo al modelo que tiene abierto; no lo reemplaza.

1. Haga clic en {{ui:Import}} en el grupo {{ui:File}}, o suelte el archivo sobre la vista 3D.
2. Elija un archivo SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   El archivo llega como **un solo grupo**, seleccionado, y la vista hace zoom para mostrarlo. La barra de estado indica qué entró y enumera lo que no pudo importar, como "No importado: 2 texturas".

3. Para trabajar directamente con su geometría, haga doble clic en el grupo para editar dentro de él, o haga clic en {{ui:Explode}}.

Algunos puntos a tener en cuenta:

- **Tamaño y dirección hacia arriba:** los archivos Collada indican su unidad y cuál eje es el vertical, y ModelCraft los convierte. glTF siempre está en metros. Los archivos OBJ no tienen unidad: ModelCraft los lee como metros, con Y hacia arriba. Si un OBJ llega 1000 veces más grande o más pequeño, use [Escalar](topic:rotate-scale) con un factor como `0.001` o `1000`.
- **DWG y DXF** llegan como líneas (aristas) sobre el suelo, no como caras. Si el dibujo no indica su unidad, un cuadro de diálogo titulado "Unidades del dibujo" pregunta cuánto mide una unidad del dibujo. Vea [Modelar sobre un plano de sitio](topic:site-plan).
- **Límites:** los archivos de más de 300 MB se rechazan para importar, y los de más de 200 MB para abrir. Los archivos con más de 2 millones de vértices o caras se rechazan por ser demasiado grandes. Un OBJ de más de 64 MB se rechaza antes de leerlo. Los archivos de texto (Collada, OBJ, STL ASCII, USD de texto) se leen por partes, de unos 4 MB, así que ningún bloque de texto contiene el archivo completo; en nuestra prueba, un OBJ de 16 MB usó unos 0.5 GB de memoria mientras se abría.

## Exportar

1. Haga clic en {{ui:Export}} en el grupo {{ui:File}}.
2. Elija un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con colores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} o {{ui:DXF para CAD (.dxf, R12)}}.

El navegador descarga el archivo, con el nombre del modelo. Se exporta el modelo completo, no solo la selección. Los archivos glTF, Collada y OBJ se escriben en segundo plano, así que ModelCraft sigue funcionando mientras se exporta un modelo grande; la descarga inicia cuando el archivo está listo. Un modelo vacío no se exporta: "El modelo está vacío: dibuje algo primero." Vea [Exportar un modelo para otros programas](topic:export-model).

## En línea y sin conexión

Todo en ModelCraft se ejecuta en su computadora, así que modelar, abrir, guardar, importar y exportar funcionan sin conexión una vez cargada la aplicación.

Para abrir ModelCraft sin ninguna conexión, guárdelo para uso sin conexión mientras esté en línea:

1. Haga clic en {{ui:Save for offline}} en la barra de la aplicación, arriba.
2. El botón cuenta ("Guardando 40 de 212") mientras guarda. ModelCraft guarda sus propios archivos (entre ellos su lector de DWG), esta ayuda y la biblioteca 3D, así que puede tardar un poco.
3. Cuando el botón diga {{ui:Offline ready}}, ModelCraft se abre desde la misma dirección sin conexión, y la importación de DWG también funciona sin conexión.

Haga clic en {{ui:Offline ready}} más tarde para {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. Si el botón dice {{ui:Could not save}}, algunos archivos no se descargaron: revise la conexión y haga clic para intentarlo de nuevo. {{ui:Offline not available}} significa que esta ventana del navegador no puede guardar una copia (ventanas privadas y algunas computadoras administradas). Vea [Trabajar sin conexión](common:offline).

El guardado en la nube todavía no está disponible. Cada modelo queda donde lo guarde.

:::offline
Está sin conexión. Puede seguir modelando y guardando. A menos que la barra de la aplicación muestre {{ui:Offline ready}}, no recargue esta pestaña hasta volver a estar en línea.
:::

## Aplicación de escritorio

:::desktop
Está usando ModelCraft en CadCraft Studio, la aplicación de escritorio con las ocho apps. Los archivos se abren y se guardan donde usted elija.
:::

:::web
ModelCraft funciona en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la aplicación de escritorio con las ocho apps en una sola instalación, desde getcadcraft.com/download.
:::
