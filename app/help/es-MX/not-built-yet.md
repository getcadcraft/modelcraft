---
title: Todavía no disponible
summary: Lo que esta versión de ModelCraft todavía no hace, y qué hacer en su lugar hoy.
keywords: faltante, todavía no, limitaciones, hoja de ruta, materiales, texturas, texto, capas, recortar, dividir, nube, escritorio
from: 179fa5e4
---

ModelCraft es una versión temprana. Esta página indica lo que todavía no hace, para que no lo busque, y la forma más cercana de hacer el trabajo hoy.

## Herramientas de dibujo

| Todavía no | En su lugar, hoy |
|---|---|
| Dibujo a mano alzada | Haga clic en los puntos con {{ui:Curve}} |
| Cambiar el número de segmentos de un arco o círculo después de dibujarlo | Bórrelo y vuelva a dibujarlo después de escribir `24s` |
| Elegir una tipografía para [texto 3D](topic:text3d), o editar sus palabras después de colocarlo | Bórrelo y agregue el texto de nuevo |
| Cambiar un ángulo escribiendo en una cota angular, o el tamaño de un cilindro desde la cota de su círculo | Gire las aristas con {{ui:Rotate}}; escale el cilindro con {{ui:Scale}} |
| Cotas en archivos de modelo exportados | Las cotas aparecen en imágenes, impresiones y PDF de la vista; los archivos de modelo solo llevan geometría |
| Recortar, Dividir y Cáscara exterior | Agrupe sólidos cerrados con [Unión, Restar e Intersecar](topic:solids), o [intersecar caras](topic:intersect) y borre lo que no necesita |
| Elegir el eje de rotación con las teclas de flecha | Haga clic en el centro de {{ui:Rotate}} sobre una cara que mire hacia donde debe apuntar el eje |
| Bloqueos en más de una inferencia a la vez | Bloquee una dirección con una tecla de flecha y luego ajuste a un punto |
| Redimensionar a lo largo de una pendiente, o desde un extremo de cota que no está en una esquina | Coloque la cota sobre dos esquinas, a lo largo de una arista o a lo largo del rojo, el verde o el azul |

## Animación

| Todavía no | En su lugar, hoy |
|---|---|
| Animar caras, aristas, la hora del día del sol, el estilo o lo que está oculto | Haga de la parte móvil un grupo o componente; renderice un video aparte para otra hora del día |
| Una cámara que siga una trayectoria dibujada, o que mire a un objeto en movimiento | Ponga más claves de cámara a lo largo del recorrido ([Animar](topic:animation)) |
| Sonido en videos, y videos de alta calidad (con trazado de rayos) sin WebGPU | Agregue sonido en un editor de video; sin WebGPU, renderice el video con el renderizador rápido ([Renderizar el video](topic:animation#render-the-video)) |
| Lámparas animadas (brillo, dispersión, color) en un video renderizado, un ángulo de lente animado sin claves de cámara en un video, animar materiales o la configuración de render | Las lámparas se animan en la vista; para un video, ponga también claves de cámara para un zoom; renderice videos separados para distintas configuraciones de lámpara ([Animar cualquier propiedad](topic:animate)) |
| Reflejar pesos o huesos de un lado a otro, envolventes de huesos visibles, mostrar pesos sombreados punto por punto (se muestran por cara), ver la malla posada mientras pinta pesos | Pinte ambos lados, o haga una mitad y use un modificador Mirror antes de agregar el esqueleto; alterne entre Paint weights y Pose para verificar |
| Huesos leídos de archivos glTF, FBX o USD como esqueleto, y esqueletos escritos en esos archivos | Los modelos con esqueleto entran en reposo con los pesos del archivo; agregue los huesos en el orden de articulaciones del archivo y luego pulse {{ui:Use the file's weights}} ([Animar](topic:animate)) |
| Mover un objetivo de IK o un polo arrastrándolo en la vista, elegir el espacio propio de una restricción (local o mundo), estirar cadenas IK, IK a lo largo de una curva | Escriba el punto del objetivo, o apunte a un objeto y mueva ese; mantenga las cadenas en sus longitudes |
| Telas, fluidos, cuerpos blandos, articulaciones y bisagras entre cuerpos rígidos, colisión con la forma exacta de un objeto (solo cajas y esferas lo envuelven), una simulación en vivo mientras reproduce, una velocidad o giro inicial (los cuerpos empiezan en reposo) | Hornee los cuerpos rígidos y reproduzca las claves; construya una bisagra con claves; divida una forma irregular en cajas (grupos) |
| Exportar la animación a glTF u otros archivos de modelo | Renderice un video; el archivo `.modelcraft` y un [archivo USD](topic:usd) que ModelCraft guardó, consérvelos para ModelCraft |
| Escribir un comentario o un título en un problema en VR, notas de voz, mover un plano de sección a mano en VR | Coloque el problema en VR y luego agregue sus palabras en un programa BCF; defina un plano de sección en la vista antes de entrar: vea [Revisar el modelo con un casco de VR](topic:vr-review) |
| Ver personas en el escritorio en VR (solo se muestran personas en VR), grabar un recorrido en VR | Pídales que se unan en VR, o haga una [animación](topic:animation) del recorrido |

## Mallas

| Todavía no | En su lugar, hoy |
|---|---|
| Esculpir por niveles (multirresolución), y que Detalle quite triángulos que quedaron muy pequeños | [Esculpir](topic:sculpt) una malla subdividida; {{ui:Remesh}} para emparejarlos de nuevo |
| Un remallado en caras de cuatro lados que sigan la forma | {{ui:Remesh}} (triángulos parejos), luego reconstruya con [Retopología](topic:mesh-edit#retopology) |
| Pesos pintados en vértices para modificadores (Displace, Smooth y Shrinkwrap actúan sobre toda la malla) | Aplique el modificador y luego esculpa o edite las partes que lo necesiten |
| Copiar y pegar vértices, aristas o caras, un corte de cuchillo que termina dentro de una cara, aristas sueltas sin cara | Duplique la malla en Modelo; corte con cuchillo de arista a arista; [extruya](topic:mesh-edit#change-the-shape) las aristas abiertas hasta convertirlas en caras |

## Organizar y ver

| Todavía no | En su lugar, hoy |
|---|---|
| Capas de planos de sitio DWG y DXF como etiquetas | El plano de sitio entra como un solo grupo: descomponga el grupo y agrupe las partes que quiera etiquetar |
| Varios cortes de sección a la vez, una caja de sección, o el contorno de una sección exportado como plano | Un [plano de sección](topic:sections) corta a la vez; exporte la vista como imagen |
| Mostrar aristas suaves con trazos discontinuos, o suavizar mientras arrastra un control deslizante | [Suavizar por ángulo](topic:soften) en {{ui:Entity info}}, y deshaga para probar otro ángulo |
| Una biblioteca en línea de modelos para buscar, o componentes con opciones para elegir (color, estilo) | La [biblioteca inicial](topic:starter); importe modelos Collada, OBJ o glTF; [estire](topic:stretch) una copia a su tamaño |
| Colocar plantas desde la biblioteca de plantas | [Esparcir](topic:live-view#scatter-plants-rocks-and-people) plantas en la vista en vivo, o coloque un árbol de la biblioteca inicial |
| Copias independientes de un grupo | Conviértalo en componente y luego pulse {{ui:Make unique}} (vea [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderizado

| Todavía no | En su lugar, hoy |
|---|---|
| Renderizar en la vista (el espacio de trabajo {{ui:Render}}), la cola de renderizado, y las opciones de cámara, imagen de cielo, niebla y mezcla de luces sin WebGPU | {{ui:Render a picture…}} en Alta calidad usa el trazador de rayos WebGL de allí, sin esas opciones ([Renderizar una imagen](topic:render#high-quality)) |
| Que otro programa dibuje la imagen de Renderizar sin un complemento de motor de render (CadCraft nunca ejecuta un programa bajo la licencia GNU GPL); cámaras de panorama o estéreo, e imagen de cielo a través de otro programa; el complemento de Unreal Engine (los archivos se escriben, pero el complemento que los abre no se publicó) | Nuestros motores propios Fast y Path tracer; el motor de un complemento ([dibujar la imagen con otro programa](topic:render-other-program)); un archivo de carpeta USD, glTF o Unreal de la lista Motor para llevarlo a cualquier programa |
| Plantas y rocas esparcidas en {{ui:Render a picture…}} | Se muestran en la [vista en vivo](topic:live-view), sus panorámicas, el visor y el video |

## Materiales y colores

| Todavía no | En su lugar, hoy |
|---|---|
| Entradas distintas del color base, rugosidad, metalicidad, opacidad, normal y emisión que cambian a lo largo de una superficie en imágenes de alta calidad (usan su promedio) | [Cree materiales con nodos](topic:shading): conéctelos de todos modos; la vista los muestra variando |
| Desplazamiento en caras de {{ui:Push/pull}} | Convierta el objeto en malla para el desplazamiento |
| Compartir sus propios materiales con la biblioteca desde la aplicación, y mapas empacados (ARM/ORM) o EXR en un conjunto de texturas importado | Consérvelos en el archivo; importe los mapas por separado como PNG o JPEG |
| Materiales del archivo en sesiones de Live TeamWork (se quedan en la computadora que los creó) | Guarde el archivo y compártalo |
| Calcomanías que se doblan alrededor de superficies curvas, calcomanías en {{ui:Undo}}, o pintar texturas de varias caras a la vez a través de una costura | Coloque calcomanías más pequeñas en cada parte; pinte cada lado de una costura por separado |
| Hornear sobre caras de {{ui:Push/pull}}, hornear varios objetos en una imagen, una jaula que moldea a mano, o iluminación horneada de lámparas | Convierta a malla y desenvuélvala; hornee cada objeto; aumente la distancia de búsqueda; renderice una imagen para la luz de las lámparas |
| Pintar rugosidad, metalicidad o altura, pintar con imágenes (sellos), y pintar texturas mayores de 512 × 512 | Pinte el color base aquí; haga los otros mapas en un editor de imágenes e impórtelos como conjunto de texturas |
| Texturas en exportaciones Collada, STL, PLY, 3MF, IFC, DWG y DXF, y los grafos de nodos de los materiales propios del archivo en modelos exportados | Esos formatos reciben el color de cada material; glTF y OBJ conservan las texturas importadas; exporte un material por separado como [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva el modelo completo para ModelCraft |
| Texturas en archivos Collada | Se cuentan y se omiten al importar; las texturas en archivos `.skp` y `.glb` sí entran |

## Archivos

| Todavía no | En su lugar, hoy |
|---|---|
| Guardar archivos de SketchUp, y el texto y las cotas de ellos | [Importar](topic:import-sketchup-files) conserva caras, colores y texturas; exporte Collada (`.dae`) para volver a SketchUp |
| Cotas y guías en exportaciones DWG y DXF | Agréguelas en el programa CAD después de exportar |
| Puntos, tablas y multilíderes de DWG y DXF | Se cuentan y se omiten; el texto entra como letra de trazo sencillo, no con la fuente del dibujo |
| Superficies, mallas, tablas y multilíderes de DWG y DXF; caras de sólidos 3D en superficies barridas, solevadas u otras de forma libre | También se cuentan y se omiten (los sólidos 3D sí entran). Exporte esas partes desde el programa CAD como OBJ o Collada e impórtelas |
| Tipos, propiedades o materiales de IFC | La exportación IFC tiene [niveles](topic:formats#ifc-ifc) y elementos genéricos; agregue el resto en un programa BIM |
| Enviar un modelo directo a BimCraft | Exporte {{ui:IFC for BimCraft (.ifc)}} y ábralo en BimCraft |
| Aristas sueltas en glTF y STL | Use OBJ o Collada para el trabajo de líneas |
| Materiales de glTF y FBX más allá del color base (metal, rugosidad, mapas normales, vidrio, barniz, brillo…) | Se leen y se listan; ModelCraft conserva el color base o la textura. Reconstruya el aspecto en el [espacio de trabajo Sombreado](topic:shading) |
| Huesos, animaciones y morph targets de glTF | Los modelos con esqueleto entran en reposo; anime en la [línea de tiempo](topic:animation) |
| Colores y nombres de partes del ensamblaje de archivos STEP | Las partes entran como mallas a su tamaño real; [pinte](topic:paint) y nómbrelas después de importar |
| Objetos SubD, texto, cotas y luces de archivos `.3dm` | Vea [qué se omite](topic:import-3dm-files#what-is-left-out-and-said); convierta SubD en mallas en el programa que creó el archivo |
| Texturas KTX2 y variantes de material en glTF | Exporte con texturas PNG o JPEG; se usa la variante predeterminada |
| Escribir instancing de glTF (EXT_mesh_gpu_instancing) | Los componentes se escriben una vez y se colocan muchas veces, lo que leen todos los visores |
| Animación Alembic (cada muestra de una caché), puntos y curvas Alembic, escribir Alembic | Entra la primera muestra; anime en la [línea de tiempo](topic:animation); escriba glTF, USD u OBJ |
| Mapas de relieve y normales en materiales OBJ | Solo entra la imagen de color (`map_Kd`) |
| Huesos y animación FBX, exportar FBX, archivos FBX 6 | Los modelos con esqueleto entran en reposo; exporte glTF; guarde los archivos viejos como FBX 2011 o más reciente |
| Skins, morphs, cámaras, luces, transformaciones look-at y skew de Collada, referencias externas | Se omiten al importar y se cuentan en el mensaje |
| Archivos de respaldo | {{ui:Save as}} ({{key:Mod+Shift+S}}) guarda otra copia. Tras un fallo, ModelCraft le ofrece su trabajo sin guardar ("¿Recuperar su trabajo?") |
| Guardado en la nube y sincronización entre computadoras | Todavía no disponible. Guarde los archivos en su computadora y cópielos donde los necesite |

## Impresión 3D

| Todavía no | En su lugar, hoy |
|---|---|
| Soportes reales del programa de corte (interfaces, balsa, el patrón exacto de soporte) | La [vista previa de soportes](topic:print-tools#supports-preview) muestra dónde van y cuánto aproximadamente; la vista previa de su programa de corte muestra los reales |
| Desenredar una pieza que se atraviesa a sí misma, o aristas donde se juntan tres o más caras | [Reparar](topic:print-tools#repair) las lista con su ubicación; use [Intersecar caras](topic:intersect) y borre lo que está dentro |
| Patrones de relleno y una retícula dentro de un hueco | [Ahuecar](topic:print-tools#hollow) lo deja vacío; su programa de corte agrega relleno a una pieza sólida |
| Detalles demasiado pequeños para su boquilla (distintos de las paredes) | [Grosor de pared](topic:print-tools#wall-thickness) encuentra paredes delgadas; la vista previa de capas de su programa de corte muestra el resto |

## Rendimiento

{{ui:Undo}} guarda una copia del modelo por cada paso (una [malla](topic:meshes) solo guarda lo que cambió), así que las importaciones muy grandes de geometría de empujar y tirar hacen más lenta cada edición. Mantenga ligeras las importaciones, y guarde y vuelva a abrir el archivo para borrar el historial.

## Aplicaciones y plataformas

- **Escritorio:** ModelCraft funciona en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones en una sola instalación. En Android, CadCraft Studio se instala desde su APK en getcadcraft.com/download. Todavía no hay versión para iPad ni iPhone.
- **Táctil:** vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom) para los gestos con los dedos. La presión del lápiz define el pincel en [Esculpir](topic:sculpt); en lo demás no se usan la presión ni la inclinación del lápiz.
- **Hojas:** ModelCraft [imprime una vista por página](topic:export-model#print-the-view-or-save-it-as-a-pdf); no hay hojas de presentación con varias vistas ni cajetín. Exporte a DWG/DXF compatibles con CadCraft para planos a escala.
