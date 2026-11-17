---
title: Todavía no disponible
summary: Lo que aún no hace esta versión de ModelCraft y lo que puede hacer hoy en su lugar.
keywords: falta, todavía no, limitaciones, hoja de ruta, materiales, texturas, texto, capas, recortar, dividir, nube, escritorio
from: 179fa5e4
---

ModelCraft es una versión inicial. Esta página enumera lo que todavía no hace, para que no lo busque en vano, y la forma más cercana de realizar la tarea hoy.

## Herramientas de dibujo

| Todavía no | Hoy, en su lugar |
|---|---|
| Dibujo a mano alzada | Haga clic en los puntos con {{ui:Curva}} |
| Cambiar el número de segmentos de un arco o un círculo después de dibujarlo | Bórrelo y vuelva a dibujarlo después de escribir `24s` |
| Elegir un tipo de letra para el [texto 3D](topic:text3d), o editar sus palabras después de colocarlo | Borre el texto y añádalo de nuevo |
| Cambiar un ángulo escribiendo en una cota angular, o el tamaño de un cilindro desde la cota de su círculo | Gire las aristas con {{ui:Girar}}; escale el cilindro con {{ui:Escalar}} |
| Cotas en los archivos de modelo exportados | Las cotas aparecen en imágenes, impresiones y PDF de la vista; los archivos de modelo solo contienen geometría |
| Recortar, Dividir y Cáscara exterior | Agrupe los sólidos cerrados con [Unión, Restar e Intersecar](topic:solids), o [intersecte caras](topic:intersect) y borre lo que no necesite |
| Elegir el eje de giro con las teclas de flecha | Haga clic en el centro de {{ui:Girar}} sobre una cara que mire en la dirección que debe tener el eje |
| Bloqueos en más de una inferencia a la vez | Bloquee una dirección con una tecla de flecha y después ajuste a un punto |
| Redimensionar a lo largo de una inclinación, o desde un extremo de cota que no esté en una esquina | Coloque la cota en dos esquinas, a lo largo de una arista o a lo largo del rojo, verde o azul |

## Animación

| Todavía no | Hoy, en su lugar |
|---|---|
| Animar caras, aristas, la hora del día del sol, el estilo o lo que está oculto | Haga del elemento móvil un grupo o componente; renderice un vídeo aparte para otra hora del día |
| Una cámara que siga una trayectoria dibujada, o que mire a un objeto en movimiento | Añada más fotogramas clave de cámara a lo largo del recorrido ([Animar](topic:animation)) |
| Sonido en los vídeos, y vídeos de alta calidad (trazado de trayectorias) sin WebGPU | Añada el sonido en un editor de vídeo; sin WebGPU, renderice el vídeo con el renderizador rápido ([Renderizar el vídeo](topic:animation#render-the-video)) |
| Lámparas animadas (brillo, dispersión, color) en un vídeo renderizado, un ángulo de objetivo animado sin fotogramas clave de cámara en un vídeo, animar materiales o ajustes de renderizado | Las lámparas se animan en la vista; para un vídeo, añada también la cámara para un zoom; renderice vídeos separados para distintos ajustes de lámpara ([Animar cualquier propiedad](topic:animate)) |
| Reflejar pesos o huesos de un lado a otro, envolventes de huesos visibles, mostrar los pesos sombreados punto a punto (se muestran por cara), ver la malla posada mientras pinta pesos | Pinte ambos lados, o haga una mitad y use un modificador Mirror antes de añadir el armazón; alterne entre Pintar pesos y Posar para comprobarlo |
| Huesos leídos de archivos glTF, FBX o USD como armazón, y armazones escritos en esos archivos | Los modelos con esqueleto se importan en reposo con los pesos del archivo; añada los huesos en el orden de articulaciones del archivo, y después {{ui:Usar los pesos del archivo}} ([Animar](topic:animate)) |
| Mover un objetivo IK o un polo arrastrándolo en la vista, elegir el espacio propio de una restricción (local o mundial), estirar cadenas IK, IK a lo largo de una curva | Escriba el punto del objetivo, o apunte a un objeto y mueva ese; mantenga las cadenas en sus longitudes |
| Tejidos, fluidos, cuerpos blandos, articulaciones y bisagras entre cuerpos rígidos, colisión con la forma exacta de un objeto (solo cajas y esferas a su alrededor), una simulación en vivo mientras reproduce, una velocidad o giro inicial (los cuerpos empiezan en reposo) | Hornee los cuerpos rígidos y reproduzca los fotogramas clave; construya una bisagra con fotogramas clave; divida una forma irregular en cajas (grupos) |
| Exportar la animación a glTF u otros archivos de modelo | Renderice un vídeo; el archivo `.modelcraft` y un [archivo USD](topic:usd) que ModelCraft guardó conservan la animación para ModelCraft |
| Escribir un comentario o un título en una incidencia en RV, notas de voz, mover un plano de sección a mano en RV | Coloque la incidencia en RV y añada sus palabras en un programa BCF; defina un plano de sección en la vista antes de entrar: véase [Revisar el modelo con unas gafas de RV](topic:vr-review) |
| Ver personas en la mesa en RV (solo se muestran las personas en RV), grabar un recorrido en RV | Pídales que se unan en RV, o haga una [animación](topic:animation) del recorrido |

## Mallas

| Todavía no | Hoy, en su lugar |
|---|---|
| Esculpido por niveles (multirresolución), y Detalle que elimina triángulos que se volvieron diminutos | [Esculpa](topic:sculpt) una malla subdividida; {{ui:Rehacer malla}} para igualarla de nuevo |
| Remallado en caras de cuatro lados que siguen la forma | {{ui:Rehacer malla}} (triángulos uniformes), y después reconstrúyala con [Retopología](topic:mesh-edit#retopology) |
| Pesos pintados en vértices para modificadores (Displace, Smooth y Shrinkwrap actúan sobre toda la malla) | Aplique el modificador y después esculpa o edite las partes que lo necesiten |
| Copiar y pegar vértices, aristas o caras, un corte de cuchillo que termina dentro de una cara, aristas de alambre sin cara | Duplique la malla en Modelo; corte con cuchillo de arista a arista; [extruya](topic:mesh-edit#change-the-shape) las aristas abiertas hasta convertirlas en caras |

## Organización y vista

| Todavía no | Hoy, en su lugar |
|---|---|
| Capas de planos de sitio DWG y DXF como etiquetas | El plano de sitio entra como un solo grupo: descomponga y agrupe las piezas que quiera etiquetar |
| Varios cortes de sección a la vez, una caja de sección, o el contorno de una sección exportado como plano | Un [plano de sección](topic:sections) corta a la vez; exporte la vista como imagen |
| Mostrar aristas suaves discontinuas, o suavizar mientras arrastra un control deslizante | [Suavizar por ángulo](topic:soften) en {{ui:Información de entidad}}, y deshaga para probar otro ángulo |
| Una biblioteca en línea de modelos para buscar, o componentes con opciones para elegir (color, estilo) | La [biblioteca de inicio](topic:starter); importe modelos Collada, OBJ o glTF; [estire](topic:stretch) una copia a su tamaño |
| Colocar plantas desde la biblioteca de plantas | [Disperse](topic:live-view#scatter-plants-rocks-and-people) plantas en la vista en vivo, o coloque un árbol de la biblioteca de inicio |
| Copias independientes de un grupo | Hágalo componente y después {{ui:Hacer único}} (véase [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderizado

| Todavía no | Hoy, en su lugar |
|---|---|
| Renderizado en la vista (el espacio de trabajo {{ui:Renderizar}}), la cola de renderizado, y las opciones de cámara, imagen de cielo, niebla y mezcla de luces sin WebGPU | {{ui:Renderizar una imagen…}} en {{ui:Alta calidad}} usa el trazador de trayectorias WebGL de allí, sin esas opciones ([Renderizar una imagen](topic:render#high-quality)) |
| Que otro programa dibuje la imagen de render sin un complemento de motor de render (CadCraft nunca ejecuta un programa con licencia GNU GPL); cámaras panorámicas o estéreo y una imagen de cielo mediante otro programa; el complemento de Unreal Engine (los archivos se escriben, pero el complemento que los abre no se ha publicado) | Nuestros motores propios Rápido y Trazador de trayectorias; el motor de un complemento ([dibujar la imagen con otro programa](topic:render-other-program)); un archivo de carpeta USD, glTF o Unreal de la lista Motor para llevar a cualquier programa |
| Plantas y rocas dispersas en {{ui:Renderizar una imagen…}} | Se muestran en la [vista en vivo](topic:live-view), sus panorámicas, visor y vídeo |

## Materiales y colores

| Todavía no | Hoy, en su lugar |
|---|---|
| Entradas distintas del color base, rugosidad, metalicidad, opacidad, normal y emisión que cambian a lo largo de una superficie en imágenes de alta calidad (usan su promedio) | [Cree materiales con nodos](topic:shading): conéctelos igualmente; la vista los muestra variando |
| Desplazamiento en caras de Empujar/tirar | Convierta el objeto en malla para el desplazamiento |
| Compartir sus propios materiales en la Biblioteca desde la aplicación, y mapas empaquetados (ARM/ORM) o EXR en un conjunto de texturas importado | Guárdelos en el archivo; importe los mapas separados como PNG o JPEG |
| Materiales del archivo en sesiones de Live TeamWork (permanecen en el equipo que los creó) | Guarde el archivo y compártalo |
| Calcomanías que se doblan alrededor de superficies curvas, calcomanías en Deshacer, o pintar texturas de varias caras a la vez a través de una costura | Coloque calcomanías más pequeñas en cada pieza; pinte cada lado de una costura por separado |
| Horneado en caras de Empujar/tirar, horneado de varios objetos en una imagen, una jaula que se da forma a mano, o iluminación horneada de lámparas | Convierta a malla y desenvuélvala; hornee cada objeto; aumente la distancia de búsqueda; renderice una imagen para la luz de la lámpara |
| Pintar rugosidad, metalicidad o altura, pintar con imágenes (sellos) y pintar texturas mayores de 512 × 512 | Pinte aquí el color base; haga los demás mapas en un editor de imágenes e impórtelos como conjunto de texturas |
| Texturas en exportaciones Collada, STL, PLY, 3MF, IFC, DWG y DXF, y los grafos de nodos de los materiales propios del archivo en modelos exportados | Esos formatos reciben el color de cada material; glTF y OBJ conservan las texturas importadas; exporte un material por separado como [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva el modelo completo para ModelCraft |
| Texturas en archivos Collada | Se cuentan y se omiten al importar; sí se importan las texturas de archivos `.skp` y `.glb` |

## Archivos

| Todavía no | Hoy, en su lugar |
|---|---|
| Guardar archivos de SketchUp, y el texto y las cotas de ellos | [Importar](topic:import-sketchup-files) conserva caras, colores y texturas; exporte Collada (`.dae`) para volver a SketchUp |
| Cotas y guías en exportaciones DWG y DXF | Añádalas en el programa CAD después de exportar |
| Puntos, tablas y multilíneas de DWG y DXF | Se cuentan y se omiten; el texto entra como letra de trazo simple, no con la tipografía del dibujo |
| Superficies, mallas, tablas y multilíneas de DWG y DXF; caras de sólidos 3D sobre superficies barridas, de loft u otras superficies libres | También se cuentan y se omiten (los sólidos 3D sí entran). Exporte esas partes desde el programa CAD como OBJ o Collada e importe eso |
| Tipos, propiedades o materiales de IFC | La exportación IFC tiene [plantas](topic:formats#ifc-ifc) y elementos genéricos; añada el resto en un programa BIM |
| Enviar un modelo directamente a BimCraft | Exporte {{ui:IFC para BimCraft (.ifc)}} y ábralo en BimCraft |
| Aristas sueltas en glTF y STL | Use OBJ o Collada para el trabajo de líneas |
| Materiales glTF y FBX más allá del color base (metal, rugosidad, mapas normales, vidrio, barniz, brillo…) | Se leen y se enumeran; ModelCraft conserva el color base o la textura. Reconstruya el aspecto en el [espacio de trabajo Sombreado](topic:shading) |
| Huesos, animaciones y objetivos de morfado de glTF | Los modelos con esqueleto se importan en reposo tal como están; anime en la [línea de tiempo](topic:animation) |
| Colores y nombres de piezas del ensamblaje de archivos STEP | Las piezas entran como mallas con su tamaño real; [pinte](topic:paint) y asígneles nombre tras importar |
| Objetos SubD, texto, cotas y luces de archivos `.3dm` | Vea [qué se omite](topic:import-3dm-files#what-is-left-out-and-said); convierta SubD en mallas en el programa que creó el archivo |
| Texturas KTX2 y variantes de material en glTF | Exporte con texturas PNG o JPEG; se usa la variante predeterminada |
| Escribir instancias glTF (EXT_mesh_gpu_instancing) | Los componentes se escriben una vez y se colocan muchas veces, lo que leen todos los visores |
| Animación Alembic (cada muestra de una caché), puntos y curvas Alembic, escritura en Alembic | Entra la primera muestra; anime en la [línea de tiempo](topic:animation); escriba glTF, USD u OBJ |
| Mapas de relieve y normales en materiales OBJ | Solo entra la imagen de color (`map_Kd`) |
| Huesos y animación FBX, exportación FBX, archivos FBX 6 | Los modelos con esqueleto se importan en reposo; exporte a glTF; guarde los archivos antiguos como FBX 2011 o posterior |
| Skins, morfos, cámaras, luces, transformaciones look-at y skew de Collada, referencias externas | Se omiten al importar y se cuentan en el mensaje |
| Archivos de copia de seguridad | {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda otra copia. Tras un fallo, ModelCraft le ofrece recuperar su trabajo no guardado («¿Recuperar su trabajo?») |
| Guardado en la nube y sincronización entre equipos | Todavía no disponible. Guarde los archivos en su equipo y cópielos donde los necesite |

## Impresión 3D

| Todavía no | Hoy, en su lugar |
|---|---|
| Soportes reales del slicer (interfaces, balsa, el patrón exacto de soporte) | La [vista previa de soportes](topic:print-tools#supports-preview) muestra dónde y aproximadamente cuántos; la vista previa de su slicer muestra los reales |
| Desenredar una pieza que se atraviesa a sí misma, o aristas donde se unen tres o más caras | [Reparar](topic:print-tools#repair) las enumera con su ubicación; use [Intersecar caras](topic:intersect) y borre lo que hay dentro |
| Patrones de relleno y una retícula dentro de un hueco | [Vaciar](topic:print-tools#hollow) lo deja vacío; su slicer añade relleno a una pieza maciza |
| Detalles demasiado pequeños para su boquilla (aparte de las paredes) | [Grosor de pared](topic:print-tools#wall-thickness) detecta paredes finas; la vista previa de capas de su slicer muestra el resto |

## Rendimiento

Deshacer guarda una copia del modelo en cada paso (una [malla](topic:meshes) solo guarda lo que cambió), así que las importaciones muy grandes de geometría de empujar/tirar hacen que cada edición sea más lenta. Mantenga las importaciones ligeras, y guarde y vuelva a abrir para borrar el historial.

## Aplicaciones y plataformas

- **Escritorio:** ModelCraft funciona en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la aplicación de escritorio con las ocho aplicaciones en una sola instalación. En Android, CadCraft Studio se instala desde su APK en getcadcraft.com/download. Todavía no hay versión para iPad ni para iPhone.
- **Táctil:** véase [Órbita, encuadre y zoom](topic:orbit-pan-zoom) para los gestos con los dedos. La presión de un lápiz define el pincel en [Esculpir](topic:sculpt); en lo demás no se usan la presión ni la inclinación del lápiz.
- **Láminas:** ModelCraft [imprime una vista por página](topic:export-model#print-the-view-or-save-it-as-a-pdf); no hay láminas con varias vistas ni cajetín. Exporte a DWG/DXF compatible con CadCraft para planos a escala.
