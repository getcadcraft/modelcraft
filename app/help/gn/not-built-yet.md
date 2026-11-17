---
title: Todavía no está hecho
summary: Lo que esta versión de ModelCraft todavía no hace, y qué hacer en cambio hoy.
keywords: falta, todavía no, limitaciones, hoja de ruta, materiales, texturas, texto, capas, recortar, dividir, nube, escritorio
from: 179fa5e4
---

ModelCraft es una versión temprana. Esta página enumera lo que todavía no hace, para que no lo busques en vano, y la forma más cercana de hacer el trabajo hoy.

## Herramientas de dibujo

| Todavía no | En cambio, hoy |
|---|---|
| Dibujo a mano alzada | Clickeá los puntos con {{ui:Curva}} |
| Cambiar la cantidad de segmentos de un arco o un círculo después de dibujarlo | Borralo y dibujalo otra vez después de escribir `24s` |
| Elegir una tipografía para el [texto 3D](topic:text3d), o editar sus palabras después de colocarlo | Borralo y agregá el texto otra vez |
| Cambiar un ángulo escribiendo en una cota angular, o el tamaño de un cilindro desde la cota de su círculo | Rotá los bordes con {{ui:Rotar}}; escalá el cilindro con {{ui:Escalar}} |
| Cotas en archivos de modelo exportados | Las cotas se ven en imágenes, impresiones y PDF de la vista; los archivos de modelo llevan solo geometría |
| Recortar, Dividir y Cáscara exterior | Grupos cerrados con [Unión, Restar e Intersecar](topic:solids), o [intersecar caras](topic:intersect) y borrar lo que no necesitás |
| Elegir el eje de rotación con las teclas de flecha | Clickeá el centro de {{ui:Rotar}} sobre una cara que mire en la dirección que debe tener el eje |
| Bloqueos en más de una inferencia a la vez | Bloqueá una dirección con una tecla de flecha, y después ajustate a un punto |
| Redimensionar en diagonal, o desde un extremo de cota que no está en una esquina | Colocá la cota entre dos esquinas, a lo largo de un borde o a lo largo del rojo, verde o azul |

## Animación

| Todavía no | En cambio, hoy |
|---|---|
| Animar caras, bordes, la hora del día del sol, el estilo o lo que está oculto | Hacé la parte que se mueve un grupo o componente; renderizá un video aparte para otra hora del día |
| Una cámara que sigue un camino dibujado, o que mira un objeto en movimiento | Poné más fotogramas clave de cámara en el camino ([Animar](topic:animation)) |
| Sonido en videos, y videos de alta calidad (trazado de rayos) sin WebGPU | Agregá el sonido en un editor de video; sin WebGPU, renderizá el video con el renderizador rápido ([Renderizar el video](topic:animation#render-the-video)) |
| Lámparas animadas (brillo, dispersión, color) en un video renderizado, un ángulo de lente animado sin fotogramas de cámara en un video, animar materiales o ajustes de render | Las lámparas se animan en la vista; para un video, poné también la cámara con fotogramas para un zoom; renderizá videos separados para distintos ajustes de lámpara ([Animar cualquier propiedad](topic:animate)) |
| Reflejar pesos o huesos de un lado al otro, envolventes de huesos que se vean, mostrar pesos sombreados punto por punto (se muestran por cara), ver la malla en pose mientras pintás pesos | Pintá los dos lados, o hacé una mitad y usá un modificador Espejo antes de agregar el armazón; cambiá entre Pintar pesos y Pose para verificar |
| Huesos leídos de archivos glTF, FBX o USD como armazón, y armazones escritos en esos archivos | Los modelos con piel entran en reposo con los pesos del archivo; agregá los huesos en el orden de articulaciones del archivo, y después {{ui:Usar los pesos del archivo}} ([Animar](topic:animate)) |
| Mover un objetivo IK o un polo arrastrándolo en la vista, elegir el espacio propio de una restricción (local o mundial), estirar cadenas IK, IK a lo largo de una curva | Escribí el punto del objetivo, o apuntá a un objeto y movelo; mantené las cadenas en sus longitudes |
| Telas, fluidos, cuerpos blandos, articulaciones y bisagras entre cuerpos rígidos, colisión con la forma exacta de un objeto (solo cajas y esferas a su alrededor), una simulación en vivo mientras reproducís, una velocidad o giro inicial (los cuerpos empiezan en reposo) | Horneá los cuerpos rígidos y reproducí los fotogramas clave; armá una bisagra con fotogramas; partí una forma rara en cajas (grupos) |
| Exportar la animación a glTF u otros archivos de modelo | Renderizá un video; el archivo `.modelcraft`, y un [archivo USD](topic:usd) que ModelCraft guardó, quédense para ModelCraft |
| Escribir un comentario o un título en un problema en VR, notas de voz, mover un plano de sección a mano en VR | Colocá el problema en VR, y después agregá sus palabras en un programa BCF; poné un plano de sección en la vista antes de entrar: ver [Revisar el modelo con un casco de VR](topic:vr-review) |
| Ver personas sentadas en el escritorio en VR (solo se ven las personas en VR), grabar un recorrido en VR | Pedíles que se unan en VR, o hacé una [animación](topic:animation) del recorrido |

## Mallas

| Todavía no | En cambio, hoy |
|---|---|
| Esculpir por niveles (multirresolución), y que Detalle quite triángulos que quedaron diminutos | [Esculpir](topic:sculpt) una malla subdividida; {{ui:Remallar}} para emparejarla otra vez |
| Remallar en caras de cuatro lados que siguen la forma | {{ui:Remallar}} (triángulos parejos), y después reconstruirla con [Retopología](topic:mesh-edit#retopology) |
| Pesos pintados en vértices para modificadores (Desplazar, Suavizar y Envolver actúan sobre toda la malla) | Aplicá el modificador, y después esculpí o editá las partes que lo necesitan |
| Copiar y pegar vértices, bordes o caras, un corte de cuchillo que termina dentro de una cara, bordes sueltos sin cara | Duplicá la malla en Modelo; cortá con cuchillo de borde a borde; [Extruir](topic:mesh-edit#change-the-shape) los bordes abiertos en caras |

## Organizar y ver

| Todavía no | En cambio, hoy |
|---|---|
| Capas de planos de sitio DWG y DXF como etiquetas | El plano de sitio entra como un grupo: desglosalo y agrupá las partes que querés etiquetar |
| Varios cortes de sección a la vez, una caja de sección, o el contorno de una sección exportado como plano | Un [plano de sección](topic:sections) corta a la vez; exportá la vista como imagen |
| Mostrar bordes suaves punteados, o suavizar mientras arrastrás un deslizador | [Suavizar por ángulo](topic:soften) en Información de entidad, y deshacé para probar otro ángulo |
| Una biblioteca en línea de modelos para buscar, o componentes con opciones para elegir (color, estilo) | La [biblioteca inicial](topic:starter); importá modelos Collada, OBJ o glTF; [estirá](topic:stretch) una copia al tamaño |
| Colocar plantas desde la biblioteca de plantas | [Esparcir](topic:live-view#scatter-plants-rocks-and-people) plantas en la vista en vivo, o colocá un árbol de la biblioteca inicial |
| Copias independientes de un grupo | Hacelo un componente, y después {{ui:Hacer único}} (ver [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderizado

| Todavía no | En cambio, hoy |
|---|---|
| Renderizar en la vista (el espacio de trabajo {{ui:Render}}), la cola de renderizado, y las opciones de cámara, imagen de cielo, niebla y mezcla de luces sin WebGPU | {{ui:Render de una imagen…}} en {{ui:Alta calidad}} usa allí el trazador de rayos WebGL, sin esas opciones ([Renderizar una imagen](topic:render#high-quality)) |
| Que otro programa dibuje la imagen de Render sin un complemento de motor de render (CadCraft nunca ejecuta un programa bajo la licencia GNU GPL); cámaras panorámicas o estéreo, y una imagen de cielo a través de otro programa; el complemento de Unreal Engine (los archivos se escriben, pero el complemento que los abre no se publicó) | Nuestros propios motores Rápido y Trazador de rayos; el motor de un complemento ([dibujar la imagen con otro programa](topic:render-other-program)); una carpeta de archivo USD, glTF o Unreal desde la lista de Motores para llevar a cualquier programa |
| Plantas y rocas esparcidas en {{ui:Render de una imagen…}} | Se ven en la [vista en vivo](topic:live-view), sus panorámicas, el visor y el video |

## Materiales y colores

| Todavía no | En cambio, hoy |
|---|---|
| Entradas que no sean color base, rugosidad, metalicidad, opacidad, normal y emisión que cambien a lo largo de una superficie en imágenes de alta calidad (usan su promedio) | [Crear materiales con nodos](topic:shading): conectalos igual, la vista los muestra variando |
| Desplazamiento en caras de empujar/tirar | Convertí el objeto en malla para el desplazamiento |
| Compartir tus propios materiales con la Biblioteca desde la app, y mapas empaquetados (ARM/ORM) o EXR en un conjunto de texturas importado | Guardalos en el archivo; importá los mapas separados como PNG o JPEG |
| Materiales del archivo en sesiones de Trabajo en equipo en vivo (se quedan en la computadora que los hizo) | Guardá el archivo y compartilo |
| Calcas que se doblan alrededor de superficies curvas, calcas en Deshacer, o pintar las texturas de varias caras a la vez a lo largo de una costura | Poné calcas más chicas en cada parte; pintá cada lado de una costura por separado |
| Hornear en caras de empujar/tirar, hornear varios objetos en una sola imagen, una jaula que moldeás a mano, o luz horneada de lámparas | Convertí a malla y desplegala; horneá cada objeto; aumentá la distancia de búsqueda; renderizá una imagen para la luz de lámpara |
| Pintar rugosidad, metalicidad o altura, pintar con imágenes (sellos) y pintar texturas más grandes que 512 × 512 | Pintá el color base aquí; hacé los otros mapas en un editor de imágenes e impórtalos como conjunto de texturas |
| Texturas en exportaciones Collada, STL, PLY, 3MF, IFC, DWG y DXF, y los grafos de nodos de los materiales propios del archivo en modelos exportados | Esos formatos reciben el color de cada material; glTF y OBJ llevan las texturas importadas; exportá un material por separado como [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva el modelo entero para ModelCraft |
| Texturas en archivos Collada | Se cuentan y se dejan afuera al importar; las texturas de archivos `.skp` y `.glb` sí entran |

## Archivos

| Todavía no | En cambio, hoy |
|---|---|
| Guardar archivos de SketchUp, y el texto y las cotas de ellos | [Importar](topic:import-sketchup-files) conserva caras, colores y texturas; exportá Collada (`.dae`) para volver a SketchUp |
| Cotas y guías en exportaciones DWG y DXF | Agregalas en el programa CAD después de exportar |
| Puntos, tablas y multilíneas de DWG y DXF | Se cuentan y se dejan afuera; el texto entra como letra de un solo trazo, no con la tipografía del plano |
| Superficies, mallas, tablas y multilíneas de DWG y DXF; caras de sólidos 3D en superficies barridas, lofteadas u otras superficies libres | También se cuentan y se dejan afuera (los sólidos 3D sí entran). Exportá esas partes desde el programa CAD como OBJ o Collada e importá eso |
| Tipos, propiedades o materiales de IFC | La exportación IFC tiene [pisos](topic:formats#ifc-ifc) y elementos genéricos; agregá lo demás en un programa BIM |
| Enviar un modelo directamente a BimCraft | Exportá {{ui:IFC para BimCraft (.ifc)}} y abrilo en BimCraft |
| Bordes sueltos en glTF y STL | Usá OBJ o Collada para el trabajo en líneas |
| Materiales glTF y FBX más allá del color base (metal, rugosidad, mapas normales, vidrio, barniz, brillo…) | Se leen y se listan; ModelCraft conserva el color base o la textura. Rearmá el aspecto en el [espacio de trabajo de Sombreado](topic:shading) |
| Huesos, animaciones y objetivos de morfado de glTF | Los modelos con piel entran de pie como están en reposo; animá en la [línea de tiempo](topic:animation) |
| Colores y nombres de partes del ensamblaje de archivos STEP | Las partes entran como mallas a su tamaño real; [pintá](topic:paint) y nombralas después de importar |
| Objetos SubD, texto, cotas y luces de archivos `.3dm` | Ver [qué se deja afuera](topic:import-3dm-files#what-is-left-out-and-said); convertí SubD en mallas en el programa que hizo el archivo |
| Texturas KTX2 y variantes de material en glTF | Exportá con texturas PNG o JPEG; se usa la variante predeterminada |
| Escribir instancias glTF (EXT_mesh_gpu_instancing) | Los componentes se escriben una vez y se colocan muchas veces, que todo visor lee |
| Animación Alembic (cada muestra de una caché), puntos y curvas Alembic, escribir Alembic | Entra la primera muestra; animá en la [línea de tiempo](topic:animation); escribí glTF, USD u OBJ |
| Mapas de relieve y normales en materiales OBJ | Solo entra la imagen de color (`map_Kd`) |
| Huesos y animación FBX, exportación FBX, archivos FBX 6 | Los modelos con piel entran en reposo; exportá glTF; guardá los archivos viejos como FBX 2011 o posterior |
| Pieles, morfados, cámaras, luces, transformaciones look-at y sesgo de Collada, referencias externas | Se dejan afuera al importar y se cuentan en el mensaje |
| Archivos de copia de seguridad | {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda otra copia. Después de un cierre inesperado, ModelCraft te ofrece el trabajo no guardado ("¿Recuperar tu trabajo?") |
| Guardado en la nube y sincronización entre computadoras | Todavía no está disponible. Guardá los archivos en tu computadora y copialos donde los necesités |

## Impresión 3D

| Todavía no | En cambio, hoy |
|---|---|
| Soportes reales de un laminador (interfaces, balsa, el patrón exacto de soporte) | La [vista previa de soportes](topic:print-tools#supports-preview) muestra dónde y cuántos; la vista previa de tu laminador muestra los reales |
| Desenredar una parte que se atraviesa a sí misma, o bordes donde se juntan tres o más caras | [Reparar](topic:print-tools#repair) las lista con su ubicación; usá [Intersecar caras](topic:intersect) y borrá lo que está adentro |
| Patrones de relleno y una red dentro de un hueco | [Ahuecar](topic:print-tools#hollow) lo deja vacío; tu laminador agrega relleno a una parte sólida |
| Detalles demasiado chicos para tu boquilla (que no sean paredes) | [Grosor de pared](topic:print-tools#wall-thickness) encuentra paredes finas; la vista de capas de tu laminador muestra el resto |

## Rendimiento

Deshacer guarda una copia del modelo por cada paso (una [malla](topic:meshes) guarda solo lo que cambió), así que las importaciones muy grandes de geometría de empujar/tirar hacen más lenta cada edición. Mantené las importaciones livianas, y guardá y volvé a abrir para limpiar el historial.

## Aplicaciones y plataformas

- **Escritorio:** ModelCraft funciona en el navegador en Mac, Windows y Linux, y en CadCraft Studio, la app de escritorio con las ocho aplicaciones en una sola instalación. En Android, CadCraft Studio se instala desde su APK en getcadcraft.com/download. Todavía no hay versión para iPad ni iPhone.
- **Táctil:** ver [Órbita, desplazamiento y zoom](topic:orbit-pan-zoom) para los gestos con los dedos. La presión del lápiz define el pincel en [Esculpir](topic:sculpt); en lo demás no se usan la presión ni la inclinación del lápiz.
- **Hojas:** ModelCraft [imprime una vista por página](topic:export-model#print-the-view-or-save-it-as-a-pdf); no hay diseños de hoja con varias vistas ni cajetín. Exportá a DWG/DXF compatibles con CadCraft para planos a escala.
