---
title: Mba'épa pyahu 0.7 (anterior)
summary: Mallas modificadores rupi, sculpting, UVs ha objetos curva, path tracing tarjeta gráfica-pe ha Render workspace, vista en vivo tiempo real ha scatter ha panorámica, materiales nodo rupi, Animate workspace huesos ha física rupi, USD, FBX, STEP ha .3dm archivo, ha impresión herramienta Principiante estilo ndive.
keywords: pyahu 0.7, versión anterior, notas de versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, malla, mallas, mesh workspace, modificadores, subdivisión, pliegue, uv, desenvolver, costuras, curvas, objetos curva, nurbs, bezier, sculpt, remesh, retopología, dividir, cálculo, path tracing, webgpu, render workspace, cola de renderizado, mp4, exr, denoise, cielo físico, hdri, ies, profundidad de campo, mezcla de luces, niebla, caústicas, vista en vivo, tiempo real, recorrer, scatter, panorámica, tour, visor, sombreado, nodos, materiales de nodo, biblioteca de materiales, materialx, decals, pintura de textura, horneado, animar, editor de gráficos, clips, shape keys, drivers, armadura, huesos, skinning, ik, restricciones, física, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, sólidos 3D, soportes, grosor de pared, ahuecar, reparar, principiante, asistentes, tu máquina, unidades, portugués
from: fa562a09
---

Ko'ã ojeporavo ModelCraft 0.7, 0.6 rehe. ModelCraft ko'ágã malla ha empuje/tirón geometría ojapo, tarjeta gráfica-pe renderiza, ha peteĩ workspace opa mba'e ndive: ejeporavo {{ui:Workspace}} lista pe izquierda toolbar-pe.

## Pyahu

### Mallas

- **Mallas.** Eheka grupo térã componente ha eheka {{ui:Convert to mesh}} {{ui:Entity info}}-pe: malla oúta, cara ndive cualquier cantidad esquina, textura coordenadas, normales, colores ha pesos. {{ui:Convert to geometry}} omboguejy. Malla-pe deshacer opa paso ojapo mbaʼerepa. Malla oiko archivo ModelCraft 0.7 oikotevẽ. Ehecha [Meshes](topic:meshes).
- **Mesh workspace.** Malla-pe mokõi jey eheka, térã {{ui:Mesh}} {{ui:Workspace}} lista-pe, ejapo vértices, bordes ha caras: bucles y anillos, edición proporcional, extrusión, inset, bisel, corte bucle, cuchillo, bisección, girar, fusionar, disolver, rellenar, relleno cuadrícula, puente y deslizar, ha últimas operación configuración panel-pe ojapo ambue. Plano, cubo, esfera, toro ha ambue ojepyrũ. Empuje/tirón llave ha modelo llave ojapo. Ehecha [Edit a mesh in the Mesh workspace](topic:mesh-edit).
- **Modificadores.** Espejo, array, subdivisión, bisel, sólido, boolean, desplazamiento, soldadura, decimar, suavizar, celosía, curva deformar ha shrinkwrap ojapo malla ohechauka, pero malla ndojapóiva. Pila ojapo, cada peteĩ vista ha render-pe ojeʼe, ha {{ui:Apply}} ojapo tapiaite. Ehecha [Modifiers on a mesh](topic:modifiers).
- **Subdivisión con pliegues.** Mesh workspace-pe {{ui:Crease}} oñemoĩ bordes afilados subdivisión rehe. Render-pe niveles ojehecha vista rubi, malla tuichaite-pe vista nivel mbytepe ohechauka. Ehecha [Subdivision surface](topic:modifiers#subdivision-surface).
- **Objetos curva.** Bézier, NURBS ha recta segmento curvas, tubo, banda, afilado ha lleno placa ojapo, ha texto curva rupi. Puntos Curve workspace-pe ojeporavo; forma iporã rire {{ui:To mesh}}. Ehecha [Curve objects](topic:curves).
- **UV workspace.** Costuras ojapo (térã ModelCraft afilado bordes-pe ojapo), {{ui:Unwrap}} ha {{ui:Pack}}, térã caja, cilindro, esfera térã vista ojeʼe. UV editor 3D vista lado ojeʼe, pedazo ojeʼe, ojerotaa ha ojeʼe, checker ha estiramiento color resultado ohechauka. Ehecha [Lay out a mesh's UVs](topic:uv).
- **Sculpting.** {{ui:Sculpt}} workspace-pe draw, arcilla, suavizar, agarrar, inflar, pliegue, pellizcar, aplanar ha máscara pincel, X eje rehe espejo, ha {{ui:Detail}} triángulo ojapo sculpt-pe. Lápiz presión pincel tamaño ha fuerza omoĩ. Cada trazo peteĩ paso deshacer. Ehecha [Sculpt a mesh](topic:sculpt).
- **Remesh ha retopología.** {{ui:Remesh}} opa malla triángulo parejo ojapo jey, agujero cerrado ha superposición pedaso joined. Detalla malla ári limpio malla ojapo hag̃ua, {{ui:Retopology}} ojeporavo: punto ojeʼe ojeʼe superficie ári. Ehecha [Remesh](topic:mesh-edit#remesh).

### Dibujo

- **Dividir borde o curva.** {{ui:Divide}} herramienta corte marca borde ári ojeʼe ha clic térã número emoĩ rehe ojapo; borde, arco térã círculo selección-pe, `/5` emoĩ; {{ui:Entity info}} › {{ui:Divide…}} número ohupyty, tablet-pe. Arco térã círculo ángulo iguál arco verdadero rehe ojapo. Ehecha [Divide an edge or curve into equal parts](topic:divide).
- **Cálculos valor caja-pe.** Emoĩ `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` térã `2*450mm` opa longitud, `90/2` ángulo rehe. Ojapo'ỹva mba'épa ha mba'épa ojehai. Ehecha [Calculations](topic:value-box#calculations).

### Render

- **Path tracing tarjeta gráfica-pe.** {{ui:Render a picture…}} › {{ui:High quality (path traced)}} CadCraft propio path tracer tarjeta gráfica-pe ojapo, WebGPU nevegadór-pe; imagen rehe línea omombe'u mba'e motor ojapo. {{ui:Stop}} imagen omanduʼa ha {{ui:Resume}} hasy. WebGPU ndaipóri jave WebGL rupi path traced, ojeporavo rire. Ehecha [High quality](topic:render#high-quality).
- **Render vista-pe.** {{ui:Render}} workspace path trace vista ha omoñepyrũ jey oʼeʼe térã ojapo jave: {{ui:Region}} render, {{ui:Focus}} clic, {{ui:Detail}} emoĩ. WebGPU oikotevẽ. Ehecha [Render in the view](topic:render#render-in-the-view).
- **Materiales, luces ha cielos.** Alta calidad imagen opa superficie OpenPBR material modelo ndive (capas, pelusa, películas finas, vidrio color, brillo). WebGPU-pe avei {{ui:Physical sky}} {{ui:Haze}} ndive, {{ui:Sky picture (HDRI)}}, ha lámpara IES perfil. Ehecha [Skies and light profiles](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Fotografía cámara.** Exposición f-stop, obturador ha ISO opa modo-pe; WebGPU ndive avei profundidad de campo, perspectiva de dos puntos, balance de blanco, panorámicas 360° (estéreo avei) ha mapas cubo. Ehecha [The camera](topic:render#the-camera).
- **Imagen terminación render rupi.** Calificar ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} térã {{ui:Standard}}, contraste, bloom, resplandor, viñeta, `.cube` color tabla), cielo, sol ha cada lámpara grupo mezcla, render elementos peteĩ-peteĩ ehecha, opa render oñemoʼẽvaʼekue. Grano ojepe'a kompyutadór-pe denoiser rupi. Ehecha [Finish the picture](topic:render#finish-the-picture) ha [Mix the lights after the render](topic:render#mix-the-lights-after-the-render).
- **Imagen saveha ambue rupi.** PNG 16 bit, EXR capas opa render elemento ha luz grupo ndive, ha render archivo (`.ccrender`) mezcla ha calificación ndive ojehasa jey. Ehecha [Save the picture](topic:render#save-the-picture).
- **Niebla, humo ha cáusticas.** Sol ha lámpara ojekuaa niebla ha bruma, luz rayos ndive; humo columna térã nube; cristal ha espejo rehe cáusticas; pixel limpio ndojapóvo adaptive muestreo. Tarjeta gráfica rehe nomás. Ehecha [Fog, smoke, noise and caustics](topic:render#fog-smoke-noise-and-caustics).
- **Render cola ha MP4.** Alta calidad imagen ha animación entero {{ui:Render queue}}-pe ojapo; peteĩ-peteĩ oñemboʼe, cola ojeʼe nevegadór ndoipe'áramo. WebGPU oikotevẽ. Video MP4-pe avei oñeñongatu nevegadór ojeʼévo. Ehecha [The render queue](topic:render#the-render-queue) ha [Render the video](topic:animation#render-the-video).

### Vista en vivo ha presentaciones

- **Vista en vivo.** {{ui:Export}} › {{ui:Live view}} modelo tiempo real-pe vista ojehecha, opa edición ha cámara ojeʼe: sol sombra, material, lámpara ha pared luz. {{ui:Walk}} ojeʼe, {{ui:Time}} ha {{ui:Month}} ojapo sol ojeʼe, térã {{ui:New window}}-pe ojeʼe. WebGPU nevegadór-pe, ndaipóri WebGL 2. Ehecha [The live view](topic:live-view).
- **Scatter.** Pasto, flor, piedra, árbol ha persona opa cara ári térã pincel ndive; siete ítem ndive ha biblioteca ambue; conjunto archivo-pe ñongatu. Ehecha [Scatter plants, rocks and people](topic:live-view#scatter-plants-rocks-and-people).
- **Compartir.** 360° panorámica, flecha ndive panorámica tour, peteĩ visor (peteĩ web página offline-pe ojehasa ha internet ndojeʼéi) ha cámara ruta video, opa tiempo real ojehecha. Ehecha [Share](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **Casco VR tiempo real.** {{ui:Review in VR}} modelo material, cielo, sol sombra, lámpara, scatter ha rebote luz ndive ohechauka. Ehecha [What it looks like](topic:vr-review#what-it-looks-like).

### Materiales

- **Nodo materiales.** {{ui:Shading}} workspace archivo materiales nodo gráfico ojapo: imagen, ruido ha tablero, Voronoi, onda, ladrillo, teja, madera, mármol, degradado, suciedad ha desgaste, color, matemática, bump ha normal mapas, OpenPBR material. Vista cambio opa ohechauka. Ehecha [Make materials with nodes](topic:shading).
- **Biblioteca material ha textura ñongatu.** Shading panel Library material lista: dieciséis CC0 textura, opa acreditado. Peteĩ eheka ojeporavo, térã cara ári ejeho. {{ui:Pictures or a zip…}} térã {{ui:A folder…}} nde mapa ndive material, archivo nombre rupi. Ehecha [Materials from the library](topic:shading#materials-from-the-library).
- **MaterialX.** Material MaterialX-pe exporta (OpenPBR Surface térã Standard Surface, textura PNG), MaterialX archivo imagen ndive importa. Ehecha [MaterialX](topic:shading#materialx).
- **Decals ha textura pintura.** Imagen superficie ári decal material ndive, material imagen pincel redondo ndive pinta. Ehecha [Decals](topic:shading#decals) ha [Paint on the texture](topic:shading#paint-on-the-texture).
- **Textura horneado.** Ambiente oclusión, curvatura, luz ha detallado objeto normales imagen-pe UVs ári, kompyutadór procesador núcleo rupi. Ehecha [Bake textures](topic:shading#bake-textures).

### Animación

- **Animate workspace.** Objeto lugar, giro ha tamaño, lámpara brillo, extensión ha color, lente ángulo, panel-pe llave ojapo. Línea de tiempo-pe {{ui:Curves}} vista (Bézier manija, repeticiones) ha {{ui:Clips}} vista llave acción-pe ñongatu ha mezcla; varias fila llave mover, estirar, copiar ha pegar. Ehecha [Animate any property](topic:animate).
- **Shape keys ha drivers.** Malla ambue forma deslizador rupi mezcla, llave ojapo térã ambue valor ndive expresión rupi. Ehecha [Shape keys](topic:animate#shape-keys-morphs) ha [Drivers](topic:animate#drivers).
- **Armaduras.** Malla-pe huesos emoĩ, {{ui:Automatic weights}} puntos compartir térã pesos pintar, huesos pose ha llave. Lineal térã dual quaternion skinning. Ehecha [Armatures](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK ha restricciones.** Alcance (IK) polo ndive, mirar, transformación copiar, límites, hijo ha seguir ruta, huesos ha objetos rehe. Ehecha [IK and constraints](topic:animate#ik-and-constraints).
- **Física.** Grupo ha componente caen, apilan ha chocan caja térã pelota, {{ui:Bake physics}} resultado llave-pe ñongatu. Ehecha [Physics](topic:animate#physics-drop-stack-and-collide).

### Archivos

- **USD.** {{ui:Save as}} ({{key:Mod+Shift+S}}) modelo `.usda`, `.usdc` térã `.usdz`-pe ñongatu, ha ModelCraft ñongatu USD archivo ojehasa ndaipórirõ mba'eve ojepe'a. Ambue programa USD ModelCraft-pe malla, grupo, componente, lámpara ha cámara-pe ojeporavo. {{ui:Save}} `.modelcraft` oñongatu. Ehecha [Save, open and export USD](topic:usd).
- **glTF, opa.** glTF archivo editable malla-pe ojeʼe normales, UVs, color vértice ha textura ndive; nodo grupo-pe, luz lámpara-pe ha cámara escena-pe; Draco ha meshopt archivo avei. `.gltf` ojeʼe mbohapy archivo ndive jeʼe. Exportación malla, textura, lámpara ha cámara oñongatu. Ehecha [glTF](topic:formats#gltf-glb-gltf).
- **FBX, PLY, STL ha Alembic importa.** FBX 2011 pyʼaguápe (malla, UV set, material, textura, luz, cámara), PLY ha STL color ndive, ha Alembic caché primer muestra-pe. OBJ `.mtl` ha imagen ndive, ojeʼe jeyva. Ehecha [File formats in detail](topic:formats).
- **Ambue exportación.** PLY color ndive, STL pintado cara color ndive, ha OBJ textura ndive zip-pe. Ehecha [File formats in detail](topic:formats).
- **STEP archivo.** {{ui:Import}} STEP (AP203, AP214, AP242) pieza ha conjunto cerrado malla-pe tamaño verdadero-pe, archivo ojeʼe lugar-pe ojeʼe. Ehecha [STEP](topic:formats#step-step-stp).
- **.3dm archivo.** {{ui:Import}} `.3dm` modelo: malla, polisuperficie ha extrusión (archivo malla rupi, térã ModelCraft rupi triangulado), curva borde-pe, bloque componente-pe ha capas etiqueta-pe. Ehecha [Bring in a .3dm model](topic:import-3dm-files).
- **3D sólido DWG ha DXF rupi.** Dibujo importa 3D sólido, región ha cuerpo avei, peteĩ-peteĩ grupo-pe, cerrado sólido-pe. Ehecha [Model on a site plan](topic:site-plan#what-comes-in).

### Impresión 3D

- **Herramientas de impresión.** {{ui:Check for 3D printing (STL or 3MF)…}} › **Print tools** {{ui:Supports preview}} (voladizo, columna térã árbol soporte, material cantidad), {{ui:Wall thickness}} (impresión muy finas paredes, {{ui:Show}} rupi ohechauka), {{ui:Hollow}} (emoĩ espesor paredes, drenaje agujero ndive) ha {{ui:Repair}} (opa arreglo ohechauka; superpuesto pedazo joined ndojapóiva nde ejerure peve). Hollow ha Repair grupo oúta cara plana peteĩ-peteĩ, térã malla resultado ndaikatúi cerrado térã cara heta; estado línea omombe'u. Ehecha [Supports, wall thickness, hollowing and repair](topic:print-tools).
- **Principiante estilo.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}} › {{ui:Beginner}}: botón tuichaite forma ha agujero jejoko, mover, alinear ha {{ui:Group}} agujero cortado, upéi impresión verificar. Ehecha [The Beginner style](topic:beginner).

### Asistentes ha tu máquina

- **Asistentes ambue.** Asistente ojapo caras ha materiales lista, empuje/tirón, pintar, grupo, escena añadir ha ohechauka, malla añadir, modificador pila, USD exportar, imagen render ha render cola llenar. Ehecha [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).
- **Tu máquina.** {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Rendering}} › {{ui:Your machine}} nevegadór ohechauka gráfico, procesador núcleo ha memoria ojeporavo, ha vista en vivo nivel. Ehecha [What your machine renders with](topic:your-machine).

## Arreglado

- {{ui:Solids}} › {{ui:Union}}, {{ui:Subtract}} ha {{ui:Intersect}} grupo cerrado ndojapóiva; ahora cierran.
- {{ui:Solids}} › {{ui:Subtract}} selección ndojapóvo ojeʼe gris, aunque eheka jave dos pieza ojeporavo.
- Animación línea de tiempo-pe, teclas escritas ndoikói; {{key:Mod+S}} avei. {{key:Mod+Z}} ha {{key:Mod+Y}} hína línea de tiempo deshacer ha rehacer; ambue {{key:Mod}} llave app-pe oikói.

## Opa app-pe

- **Unidades.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} longitud, área, volumen, ángulo ha pendiente lista; unidad definición tamaño. Ndoikotevẽvo unidad apagá, lista-pe ndoikói; estrella oñemoĩ, trabajo pyahu unidad-pe oñepyrũ. Archivo oñeñongatu unidad. ModelCraft-pe valor caja-pe unidad lista switch rehe; estrella modelo nuevo unidad mbytépe; unidad marca ojeporavo. Ehecha [Units, typed values and the unit lists](common:unit-lists).
- **Denso diseño ha paneles ocultos.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} pantalla-pe más ohechauka (touch pantalla ha teléfono botón grande ojeporavo). Lado panel barra fina ha; arrastrá flota térã ancla, otro barra-pe suelta pestaña, térã oculta ha lado-gui ojeʼe. Ehecha [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Diálogo ojeʼe.** Diálogo título barra arrastrá dibujo ndive ndojeʼéi; ojeporavo hasy. Título barra mokõi jey eheka centro-pe. Ehecha [Move a dialog](common:arrange-panels#move-a-dialog).
- **Asistente recetas.** Diez pedido ejemplo asistente-pe (dibujo ordenar, plano, planilla, modelo pregunta, cómputo, parte variante…), cada una tembipuru ha permiso, prueba ndive. App-pe ndaipóri IA. Ehecha [Recipes for AI assistants](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** pyahu {{ui:Settings}} › {{ui:General}} › {{ui:Language}}-pe. Ko, **Português (Brasil)**, **Español (México)** ha **Bahasa Indonesia** opa app palabra oĩ, native ndojehechái borrador-pe. Ayuda tema inglés-pe.

## Ndaipóri ko versión-pe

- **0.7 ndaipóri código firma.** Firma ha Microsoft Store paquete 0.8-pe ojeʼe; certificado validación ndojejuʼỹi. SHA-256 getcadcraft.com/download-pe eheka. Windows-pe SmartScreen instalador ohoʼo, {{ui:More info}} eheka, upéi {{ui:Run anyway}}. Mac-pe, mbeʼe, CadCraft Studio derecha clic ha {{ui:Open}}. CadCraft Studio app tienda-pe ndaipóri, iPad térã iPhone versión ndaipóri.
- {{ui:Units}} ángulo ha pendiente lista ojesalva, ha caja ndojeporavóri.
- Tarjeta gráfica (WebGPU) render software ndive rehe ojehai; tarjeta real-pe ndojehai. Upévare pequeño imagen nde kompyutadór-pe primero eheka. Vista en vivo ha VR casco emulador rehe ojehai.
- WebGPU ndaipóri jave ndaipóri Render workspace ni render cola, ha alta calidad imagen ndaipóri profundidad de campo, cielo físico, cielo imagen, niebla, humo, cáusticas ni luz mezcla.
- {{ui:Render a picture…}} ndojeʼeáĩ scatter ítem; vista en vivo, panorámica, visor ha video-pe oĩ.
- Luz vista-pe animación, pero video render oñemboʼe lámpara oĩva oñemboʼe.
- Huesos ha animación ndojeheka glTF, FBX ni USD archivo-gui; skin modelo reposo-pe ojeʼe pesos ndive, glTF ha FBX material ndaipóri ambue base color térã textura.
- STEP color ha conjunto parte nombre ndojehechái. `.3dm` importa archivo toolkit-pe probado, modelado programa archivo-pe ndaipóri; SubD objeto, texto ha cota omoĩ hasy.
- CivilCraft planta biblioteca ModelCraft-pe oĩ, planta ojapo ndaipóri.
- Textura pintura push/pull cara-pe repetí material mosaico rehe; peteĩ cara nomás pintá hag̃ua, malla ojapo ha desenvolver.

Opa ambue [Not built yet](topic:not-built-yet) rehe.
