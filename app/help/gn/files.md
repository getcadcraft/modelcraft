---
title: Abrir, guardar, importar y exportar
summary: Archivo ModelCraft, mba'e ikatúva oike ha oguenohẽ, mba'éichapa oguardavá archivo, ha mba'e ojecambia offline ha nevegadór-kuéra apytépe.
keywords: abrir, guardar, importar, exportar, archivo, 3dm, skp, recuperar, autoguardado, reciente, escritorio, abrir en 3D, traspaso, descargar, archivo modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sin conexión, guardar como
from: 0b4896d1
---

ModelCraft ojeporta ha ojekuaa archivo nde computadora-pe. Ndaipóri oñemoĩ internet-pe: peteĩ archivo ndejeporu nevegadór-pe ojeléva, ha peteĩ archivo ndeguardá ojejapo descarga. Ehecha [Dónde van tus archivos](common:your-files).

## Formatos peteĩ vistazo-pe

| Formato | Abrir | Importar | Exportar | Mba'ére oĩ |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Guardar}} | Nde tembiapo archivo. Omanténe opa. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Guardar como}}, {{ui:Exportar}} | Programa renderizado ha escena armado-pe. ModelCraft-ipe USD omanténe opa. Ehecha [Guardar, abrir y exportar USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Modelo SketchUp-gui oike haguã. Omanténe grupos, componentes, colores, texturas caraháme, tags ha bordes blandos. Ehecha [Traer un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Modelo mbohasa 3D modelador ambuékuéra-pe. Omanténe grupos, componentes ha colores. |
| OBJ (`.obj`) | no | sí | sí | Programa renderizado ha visualización-pe. |
| glTF (`.glb`, `.gltf`) | no | sí | solo `.glb` | Visualizador web, motor de juego, AR-pe. |
| STL (`.stl`) | no | sí | sí | Impresión 3D-pe (milímetros). |
| PLY (`.ply`) | no | sí | sí | Mallas colores-pe: escaneos, impresión a color. |
| FBX (`.fbx`) | no | sí | no | Modelos animación ha juego programakuérare (FBX 2011 ha ipyahúva). |
| Alembic (`.abc`) | no | sí | no | Caché geometría-pe, ijyvykuéra muestra-pe. |
| STEP (`.step`, `.stp`) | no | sí | no | Piezas programa modelador ha proveedores-gui, malla cerrada ramo tamaño verdadero-pe. Ehecha [Formatos de archivo](topic:formats). |
| `.3dm` | no | sí | no | Modelos NURBS: polisuperficies, mallas, curvas, bloques ha capas, malla, borde, componente ha tag ramo. Ehecha [Traer un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impresión 3D, colores-pe (milímetros). Desde {{ui:Verificar impresión 3D (STL o 3MF)…}}: ehecha [Preparar un modelo para impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programa BIM-pe, ha BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Plano de sitio wala planta baja modelo haguã; modelo oguenohẽ CAD programa-pe. |
| DXF (`.dxf`) | no | sí | sí | Upe mbojoja, cualquier programa CAD-pe. |

[Formatos de archivo en detalle](topic:formats) ohechauka mba'épa oguarda ha mba'épa ndoguardái cada formato-pe.

## Archivo ModelCraft

Archivo `.modelcraft` omanténe modelo opa: geometría, grupos, componentes, guías, escenas, unidades, ha cámara ha estilo ndeporu jave ndeguardákiri. Ndoguardái historia de deshacer.

### Abrir modelo

1. Clic-ejapo {{ui:Abrir}} grupo {{ui:Archivo}}-pe, wala ejeprensa {{key:Mod+O}}.
2. Tesäi modelo pantalla-pe ndoguardavái cambios, ModelCraft ohenói: "¿Este modelo tiene cambios sin guardar? ¿Guardar una copia primero?" Eligi {{ui:Guardar una copia}}, {{ui:Descartar cambios}} wala {{ui:Cancelar}}.
3. Eligi archivo `.modelcraft`.

Modelo oikuaa upe unidades ojeguardavahágui, cámara ojeguardavahágui. Avei ndeipe'a peteĩ archivo `.modelcraft` 3D vista-pe, wala clic-ejapo lista reciente archivo-gui tarjeta de inicio-pe (nevegadór ojeikuaa haguã jey archivo ha escritorio app).

:::desktop
Escritorio app-pe, doble clic `.modelcraft` archivo-pe oikeséva ModelCraft-pe, ha {{ui:Abrir con}} Collada, OBJ, glTF, DWG wala DXF archivo-pe avei oike (peteĩ modelo pyahúpe oike).
:::

### Guardar modelo

Clic-ejapo {{ui:Guardar}} wala ejeprensa {{key:Mod+S}}. Nevegadór ojedescargáta `<nombre>.modelcraft`, upe nombre ha'e archivo ojeporúva, wala "Untitled" peteĩ modelo pyahúpe.

:::desktop
Escritorio app-pe, {{ui:Guardar}} oguardáta archivo ojeporúva upe mbyte-pe. Modelo pyahu oporandu mba'épa oguardáta.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) oguardáta peteĩ copia `.modelcraft` archivo-pe wala [USD](topic:usd)-pe; nevegadór oikóramo, oporandu sú ha tenda. Si nó, emoĩ jey descargado archivo-pe: oguardava jey upe archivo ojeporúva rire, oikuaáta nombre pyahu.
- Cada guardado ha'e peteĩ descarga pyahu. Nevegadór ajuste-kuéra rehe, oho downloads carpeta-pe térã oporandu mba'épa oguardáta. Si upe nombre ojeikuaa ko'ápe, nevegadór oñemoĩ peteĩ número, por ejemplo `Untitled (1).modelcraft`.

:::chromium
Oiporavo haguã cada vez carpeta, eho nevegadór ajuste-pe, eheka "descargas" ha ejapo "Preguntar dónde guardar cada archivo antes de descargar".
:::

:::firefox
Oiporavo haguã carpeta cada vez, eho **Ajustes**, upéi **General**, ha "Descargas" rupi eligi "Preguntar siempre dónde guardar archivos".
:::

:::safari
Oipakuaa haguã dónde oho descargas, eho **Safari**, upéi **Ajustes**, upéi **General**, ha omoĩ "Ubicación de descargas de archivos".
:::

### Empezar modelo pyahu

Clic-ejapo {{ui:Nuevo}}. Ndeguardái cambios rehe, ModelCraft ohenói jepe. Modelo pyahu oñepyrũ vacío, nde nevegadór ojeguerekóva unidad-pe (Estados Unidos-pe pie ha pulgada; ambue tenda-pe milímetro), escena nderekóiva.

### Nevegadór oñemboty mboyve guardá ndejapóvo

ModelCraft oguardáta copia ndeguardavái-va nevegadór-pe segundo mokõi rire cada cambio. Nevegadór térã pestaña omboty mboyve guardá ndejapóvo, ojehupytýva ModelCraft oikérõ jey, oporandu "¿Recuperar tu trabajo?". Recuperar oikeséta modelo oĩva upe ohasáva, ndoguardavái archivo-pe: guardá jey ojeikuaa haguã. Ehecha [Recuperar tu trabajo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

CadCraft dibujo app-pe, **Vista**, upéi **Más**, upéi **Abrir en ModelCraft** ome'ẽ dibujo pe hasýva ModelCraft-pe pestaña pyahúpe, DWG ramo. Oike ojeikuaa DWG importado ramo: tierra-pe líneas, grupo-pe, ojapo haguã prepara. Ndoguenohẽi nada; archivo oiko nevegadór almacenamiento-pe.

## Importar

Importar oinkluí archivo modelo ojeporúvape; ndoipejoapy.

1. Clic-ejapo {{ui:Importar}} grupo {{ui:Archivo}}-pe, wala omboty archivo 3D vista-pe.
2. Eligi SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG wala DXF archivo.

   Archivo oike **peteĩ grupo**, eligíva, ha vista oiko jehecha haguã. Barra de estado ohechauka mba'épa oike ha ohechauka mba'e ndoikéi, por ejemplo "No importado: 2 textura".

3. Ojapo haguã geometría-pe tuichave, clic-ejapo doble grupo-pe ojapo haguã adentro, wala clic-ejapo {{ui:Descomponer}}.

Mba'e ikuaávo:

- **Tamaño ha dirección arriba:** Collada archivo-kuéra ohechauka unidad ha mboka arriba, ModelCraft ombohasa. glTF oĩ siempre metro-pe. OBJ archivo-kuéra ndoguerekói unidad: ModelCraft ohupyty metro-pe, Y arriba-pe. Si OBJ oike 1000 jey tuichave térã michĩve, ejeporu [Escalar](topic:rotate-scale) factor `0.001` térã `1000` ndive.
- **DWG ha DXF** oike líneas (bordes) tierra-pe, caras ndaipóri. Si dibujo noñeʼẽi unidad, diálogo "Unidades del dibujo" oporandu mba'e ha'e peteĩ unidad de dibujo. Ehecha [Modelar sobre un plano de sitio](topic:site-plan).
- **Límites:** archivo 300 MB ryguasúva ndoikéi importar, 200 MB ryguasúva ndoikéi abrir. Archivo 2 millón vértice térã cara ryguasúva ndoikéi, ojeikuaa tuichave.

## Exportar

1. Clic-ejapo {{ui:Exportar}} grupo {{ui:Archivo}}-pe.
2. Eligi formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con colores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} wala {{ui:DXF para CAD (.dxf, R12)}}.

Nevegadór ojedescargáta archivo, nombre modelo ndive. Modelo opa oexportáta, ndaha'éi solo upe ojeporúva. Modelo vacío ndoexportái: "El modelo está vacío: dibujá algo primero." Ehecha [Exportar un modelo para otros programas](topic:export-model).

## En línea y sin conexión

ModelCraft oiko nde computadora-pe, upévare modelado, abrir, guardar, importar ha exportar oiko sin conexión app oñemoñepyrũmi.

Ndaipóriva conexión, guardá sin conexión uso haguã mbo'e internet-pe:

1. Clic-ejapo {{ui:Guardar para usar sin conexión}} barra superior-pe.
2. Botón ohechauka "Guardando 40 de 212" guardándo jave. ModelCraft oguardáta sína archivo (DWG leéva avei), ko ayuda ha biblioteca 3D, upévare oguereko tiempo.
3. Botón oñemoĩ {{ui:Listo para usar sin conexión}} jave, ModelCraft oikeséta upe mismo dirección-gui sin conexión, ha DWG importación avei oiko sin conexión.

Upe botón rire clic-ejapo {{ui:Listo para usar sin conexión}} ojeporu haguã {{ui:Guardar otra vez (obtener la versión más nueva)}} wala {{ui:Quitar la copia sin conexión}}. Botón oñe'ẽ {{ui:No se pudo guardar}} jave, archivo ndoikóiva descarga: chequeá conexión ha clic-ejapo jey. {{ui:Uso sin conexión no disponible}} ohechauka upe nevegadór ventana ndoikéi guardá copia (ventana privada ha computadora managed). Ehecha [Trabajar sin conexión](common:offline).

Nube-pe guardar ndaikatúi jepe. Opa modelo oĩ upe guardaʼỹva-pe.

:::offline
Ndaipóri conexión. Ikatu nde modelá ha guardá. Barra superior ndohechaukái {{ui:Listo para usar sin conexión}}, ani rejapyrũ jey pestaña conexión rire.
:::

## Escritorio app

:::desktop
Ejeporu ModelCraft CadCraft Studio-pe, escritorio app ohupytýva ocho app. Archivo ojeporta ha oguardáta eligi-va mbytépe.
:::

:::web
ModelCraft oñemoĩ nevegadór-pe Mac, Windows ha Linux-pe, ha CadCraft Studio-pe, escritorio app ocho app-nde peteĩ instalación-pe, getcadcraft.com/download-gui.
:::
