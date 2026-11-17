---
title: Abrir, guardar, importar ha exportar
summary: Archivo ModelCraft, mba'e piko ojeike ha ojesend, mba'éichapa oñemboguata archivo-kuéra, ha mba'e oñemoambue sin conexión ha navegador-kuéra apopy.
keywords: abrir, guardar, importar, exportar, archivo, 3dm, skp, recuperar, autoguardado, recientes, escritorio, abrir en 3d, entrega, descargar, archivo modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sin conexión, guardar como
from: 3f09ab72
---

ModelCraft oñemboguata ha omoñe'ẽ archivo-kuéra nde kompiutadórpe. Nada ndojejoaprimi: archivo ereabrí nde navegadórpe ojehecha, ha archivo ereguardá ha'e peteĩ descarga. Ehecha [Mba'épa oho nde archivo-kuéra](common:your-files).

## Formato-kuéra ojehechauka

| Formato | Abrir | Importar | Exportar | Mba'éichapa oiporu |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | he'ẽ | nahániri | {{ui:Guardar}} | Nde trabajo rehegua archivo. Oguereko opa mba'e. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | he'ẽ | he'ẽ | {{ui:Guardar como}}, {{ui:Exportar}} | Renderizado ha escena programa-kuéra. ModelCraft rehegua USD oguereko opa mba'e. Ehecha [Guardar, abrir ha exportar USD](topic:usd). |
| SketchUp (`.skp`) | nahániri | he'ẽ | nahániri | Modelo SketchUp-gui ojeike. Oguereko grupo, componente, colores, textura caras-pe, etiqueta ha borde blando. Ehecha [Importar peteĩ modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | nahániri | he'ẽ | he'ẽ | Modelo ojeambue ótro modelador 3D-kuéra-gui. Oguereko grupo, componente ha colores. |
| OBJ (`.obj`) | nahániri | he'ẽ | he'ẽ | Renderizado ha visualización programa-kuéra. |
| glTF (`.glb`, `.gltf`) | nahániri | he'ẽ | `.glb` anivéva | Visor web-kuéra, motor de juego-kuéra, AR. |
| STL (`.stl`) | nahániri | he'ẽ | he'ẽ | Impresión 3D (milímetro-pe). |
| PLY (`.ply`) | nahániri | he'ẽ | he'ẽ | Malla color-yvate: escaneo, impresión a color. |
| FBX (`.fbx`) | nahániri | he'ẽ | nahániri | Modelo animación ha juego programa-kuéra-gui (FBX 2011 ha upéi). |
| Alembic (`.abc`) | nahániri | he'ẽ | nahániri | Caché de geometría, iñepyrũ muestra-pe. |
| STEP (`.step`, `.stp`) | nahániri | he'ẽ | nahániri | Piezas modelador-kuéra ha proveedor-kuéra-gui, malla cerrada tamaño realpe. Ehecha [Formatos de archivo en detalle](topic:formats). |
| `.3dm` | nahániri | he'ẽ | nahániri | Modelo NURBS: polisuperficie, malla, curva, bloque ha capa, malla, borde, componente ha etiqueta-pe. Ehecha [Importar peteĩ modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | nahániri | nahániri | he'ẽ | Impresión 3D, colores-pe (milímetro-pe). Desde {{ui:Verificar impresión 3D (STL o 3MF)…}}: ehecha [Preparar modelo impresión 3D-pe](topic:print-3d). |
| IFC (`.ifc`) | nahániri | nahániri | he'ẽ | Programa BIM-kuéra ha BimCraft. |
| DWG (`.dwg`) | nahániri | he'ẽ | he'ẽ | Plano de situación térã planta para modelar encima; modelo ou CAD programa-pe omondo. |
| DXF (`.dxf`) | nahániri | he'ẽ | he'ẽ | Mbaʼe rehegua, opa CAD programa-pe. |

[Formatos de archivo en detalle](topic:formats) ohechauka ojuhúva ha oñeha'ãva cada formato-pe.

## Archivo ModelCraft

Archivo `.modelcraft` oguereko modelo entero: geometría, grupo, componente, guía, escena, unidad, ha cámara ha estilo ojeporúva ndereguardákuri. Ndoguerekoi historial de deshacer.

### Abrir modelo

1. Eka {{ui:Abrir}} grupo {{ui:Archivo}}-pe, térã eapretá {{key:Mod+O}}.
2. Modelo ecránpe oguereko cambio ndoguardauiva, ModelCraft ohaʼarã: "Ko modelo oguereko cambio ndoguardauiva. ¿Guardar peteĩ kopia primero?" Ejedi {{ui:Guardar una copia}}, {{ui:Descartar cambios}} térã {{ui:Cancelar}}.
3. Ejedi archivo `.modelcraft`.

Modelo oikéta unidad-kuéra oñemboguáva ha cámara oñemboguáva. Ikatu avei eji archivo `.modelcraft` 3D vista-pe, térã ejedi peteĩ listado de archivo recientes start card-pe (navegadór ikatúvare ojeikeha archivo, ha escritorio app).

:::desktop
Escritorio app-pe, doble clic archivo `.modelcraft`-pe ojeikeha ModelCraft-pe, ha **Abrir con** Collada, OBJ, glTF, DWG térã DXF archivo-pe avei (ojeiké modelo pyahúpe).
:::

### Guardar modelo

Eka {{ui:Guardar}} térã eapretá {{key:Mod+S}}. Navegadór ojedescarga `<nombre>.modelcraft`, nombre ha'e archivo ojeporu ojeabrivaʼekue, térã "Untitled" modelo pyahu-pe.

:::desktop
Escritorio app-pe, {{ui:Guardar}} ojegueraha archivo ojeabrivaʼekue hendápe. Modelo pyahu-pe ojerohory ndive hendápe ojeguardávaʼerã.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) oguardákuri kopia `.modelcraft` archivo-pe térã [USD](topic:usd)-pe; navegadór ikatúvare ohaʼarã nombre ha tenda. Ndaikatúiramo, ejerrenombra ojedescargavaʼekue archivo.
- Cada guardado ha'e peteĩ descarga pyahu. Navegadór-pe mbohapy-kuéra ndojehechái, ojeguata tenda downloads-pe térã ohaʼarã ndehe mo'ãva. Hérava hína ojeguerekóramo archivo ko nombre ndive, navegadór-kuéra oñembohetaʼỹ peteĩ número, mohẽ `Untitled (1).modelcraft`.

:::chromium
Cada vez tenda ejeporavo ramo, eke navegadór ajustes-pe, ehecha "downloads" ha eaktiva "Ask where to save each file before downloading".
:::

:::firefox
Cada vez tenda ejeporavo ramo, eke **Settings**, upéi **General**, ha "Downloads" ryepýpe ejedi "Always ask you where to save files".
:::

:::safari
Descargas oho mo'ãva ajustar ramo, eke **Safari**, upéi **Settings**, upéi **General**, ha ajuste "File download location".
:::

### Modelo pyahu oñemboguata

Eka {{ui:Nuevo}}. Cambio ndoguardauiva oguereko ramo, ModelCraft ohaʼarã mboʼehaópe. Modelo pyahu oñepyrũ vacío, nde idioma unidad-pe (Estados Unidos-pe pulgada ha pie, ambue tenda-pe milímetro), escena'ỹ.

### Navegador oñemboguáramo ndojeguardavaʼekue

ModelCraft oñongatu peteĩ kopia ndojeguardavaʼekue mba'e navegadór-pe segundo mokõi cambio upéi. Kopia oñemoañete mboheraʼỹme, modelo guasu ndoñemoʼãmbaʼekue. Ojeheja tab térã navegadór ojejuhu ndejeguardavaʼéramo, ModelCraft ojehaʼa "¿Recuperar tu trabajo?" ojeikekuévo ModelCraft-pe. Recuperar oikeha modelo oiko haguéicha, ndojeguardavaʼekuri archivo-pe: guardá ha'e ndoguardatáramo. Ehecha [Recuperar tu trabajo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

CadCraft dibujo app-pe, **Vista**, upéi **Más**, upéi **Abrir en ModelCraft** omoĩ dibujo ojeabrivaʼekue ModelCraft-pe tab pyahúpe, DWG-kuéra. Oike DWG importado haguéicha: tierra-pe líneas, grupo-pe, modelo-pe ojeporu porã. Nada ndojejoaprimi; archivo oho navegadór-pe.

## Importar

Importar oñemoĩ archivo modelo ojeabrivaʼekue-pe; ndoñembyai.

1. Eka {{ui:Importar}} grupo {{ui:Archivo}}-pe, térã omoĩ archivo 3D vista-pe.
2. Ejedi SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG térã DXF archivo.

   Archivo oike **peteĩ grupo**, ojeiporavo, ha vista ohechauka. Barra de estado ohechauka mba'épa oike, ha ohechauka mba'e ndoikéiva, mohẽ "No importado: 2 textura".

3. Geometría rehe ojapo porã ramo, eapretá doble clic grupo-pe ndive, térã eka {{ui:Descomponer}}.

Mba'e ohechakuaa:

- **Tamaño ha dirección arriba:** Collada archivo-kuéra ohechauka unidad ha eje arriba, ha ModelCraft oñembopy'ũ. glTF oĩmi metro-pe. OBJ archivo-kuéra ndoguerekói unidad: ModelCraft ohenda metro-pe, Y arriba. OBJ oike 1000 ririvéva térã iñemboriahúva ramo, ejeporá [Escalar](topic:rotate-scale) `0.001` térã `1000` ndive.
- **DWG ha DXF** oike líneas (bordes) tierra-pe, ndaha'éi caras-pe. Dibujo ndoikuaávoi unidad ramo, peteĩ diálogo "Drawing units" ohaʼarã mbaʼépa peteĩ unidad de dibujo. Ehecha [Modelar en plano de situación](topic:site-plan).
- **Límite-kuéra:** 300 MB-gui archivo-kuéra ndoikéi importar, ha 200 MB-gui ndoikéi abrir. Mbohapy millón-gui vértice térã cara ojuhúva ndoikéi tuvichaiterei haguéicha. 64 MB-gui OBJ ndojelee. Texto archivo-kuéra (Collada, OBJ, ASCII STL, USD texto) ojelee peteĩ pedazo-pe, 4 MB-pe, upéicha ndaipóri texto tuichakue peteĩ bloque-pe; 16 MB OBJ ojeporu 0.5 GB memoria peteĩ prueba-pe.

## Exportar

1. Eka {{ui:Exportar}} grupo {{ui:Archivo}}-pe.
2. Eiporu formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con colores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} térã {{ui:DXF para CAD (.dxf, R12)}}.

Navegadór ojedescarga archivo, nombre modelo haguéicha. Modelo entero oexporta, ndaha'éi selección añoite. glTF, Collada ha OBJ archivo-kuéra oñemboguata segundo plano-pe, upéicha ModelCraft ojapo ojeporu modelo guasu exportando; descarga oñepyrũ archivo ojehaʼa ramo. Modelo vacío ndoexportái: "El modelo está vacío: primero dibujá algo." Ehecha [Exportar modelo otro programa-kuéra-pe](topic:export-model).

## Sin conexión y con conexión

Opa mba'e ModelCraft-pe oñemboguata nde kompiutadórpe, upévare modelar, abrir, guardar, importar ha exportar ikatu ojapo conexión'ỹre aplicación oñemboguatava rire.

Conexión'ỹre ModelCraft oñepyrũ ramo, guardá conexiónpe sin conexión uso-pe:

1. Eka {{ui:Guardar para usar sin conexión}} barra superior-pe.
2. Botón ohechauka "Guardando 40 de 212" omboguata. ModelCraft oguarda hembiapokue archivo-kuéra (DWG lector avei), ko ayuda ha biblioteca 3D, upévare ikatu ojeikuaa tiempo.
3. Botón ohechauka {{ui:Listo para usar sin conexión}} ramo, ModelCraft oñepyrũ mismo dirección-pe conexión'ỹre, ha DWG importar avei ikatu sin conexión.

Eka {{ui:Listo para usar sin conexión}} upéi {{ui:Guardar otra vez (obtener la versión más nueva)}} térã {{ui:Quitar la copia sin conexión}}. Botón ohechauka {{ui:No se pudo guardar}}, archivo ndojedescargáiva: ehechakuaa conexión ha eka ojeho'ỹ. {{ui:Uso sin conexión no disponible}} ohechauka navegador ko ventana ndoikéi kopia guardar (ventana privada ha computadora administrada). Ehecha [Trabajar sin conexión](common:offline).

Nde tenda ndoikéiva guardar nube-pe ko'ã rire. Modelo ojeguardavaʼekue oĩ ojeguardavaʼekue tenda-pe.

:::offline
Ndejeupe'ỹ sin conexión. Ikatu nde modelar ha guardar. Barra superior-pe ndojehechái {{ui:Listo para usar sin conexión}} ramo, ndaikatúi ejejeroviaʼỹ ko tab conexiónpe ndejupi peve.
:::

## Escritorio app

:::desktop
Ereiporu ModelCraft CadCraft Studio-pe, escritorio app ohaʼe ocho aplicación-kuéra ndive. Archivo-kuéra ojeabri ha ojeguarda ejeporaváre.
:::

:::web
ModelCraft navegadórpe oñemboguata Mac, Windows ha Linux-pe, ha CadCraft Studio-pe, escritorio app ocho aplicación-kuéra ndive peteĩ instalación-pe, getcadcraft.com/download-gui.
:::
