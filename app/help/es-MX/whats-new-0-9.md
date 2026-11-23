---
title: Novedades de la versión 0.9 (anteriores)
summary: Etapa de impresión con nuestro propio laminador y envío por USB, Klipper, OctoPrint y PrusaLink, laminado en resina y complementos de formatos de archivo, flujo de material, complementos de gemelo digital y piso de fábrica, redondeos NURBS, engrosamiento y ajuste a escaneos, AR en sitio y diez métodos de arco.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, etapa de impresión, impresión 3D, enviar a impresora 3D, laminador, cadcraft básico, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, prueba de exposición, flujo de material, gemelo digital, piso de fábrica, plc, transportador, nurbs, redondeo, engrosar, ajuste de escaneo, ar, en sitio, métodos de arco, unidades, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, nurbs, superficies, solevación, barrido, continuidad, g0, g1, g2, rayas cebra, step, iges, describir la escena, escena, clima, hora del día, estación, asistente, material desde una foto, foto, foto de boceto, amueblar, amueblar una habitación, corte inclinado, dividir, revisión de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg, en vivo
from: 2717d1b1
---

Esto es lo que cambió en ModelCraft 0.9, en comparación con 0.8.1. ModelCraft ahora llega a la impresora y a la planta: puede colocar piezas en una plataforma de impresión y enviarlas sin exportar, laminar para filamento o resina, y diseñar una línea de manejo de materiales. Esto es CadCraft Studio 0.9 y sus ocho aplicaciones; la mayoría de las funciones nuevas que siguen son complementos.

## Novedades

### Impresión 3D

- **Etapa de impresión.** Haga clic en {{ui:Etapa de impresión}} en la barra de herramientas. Agregue elementos de la biblioteca a la plataforma de la impresora, acomódelos, revise las capas laminadas y pulse {{ui:Enviar a impresora 3D}}, sin exportar ningún STL. Pertenece al complemento de impresión 3D, que está activado por defecto y se puede quitar como cualquier otro complemento. Consulte [Coloque piezas en la plataforma de impresión y envíelas a una impresora](topic:print-stage).
- **Nuestro propio laminador para filamento.** {{ui:CadCraft básico (incluido, el más rápido)}} es el laminador en la lista **Laminador** de la tarjeta: paredes, pieles, relleno, soportes y un borde, en un trabajador para que la página siga disponible. {{ui:Vista previa de capas}} con el control deslizante **Capa** muestra las capas antes de enviar. Los perfiles de impresora, como los estilos Ender-3 y Prusa MK4, tienen su propio código G de inicio.
- **Envío.** Por USB (Chrome o Edge en una computadora, con la página abierta), o a Klipper (Moonraker), OctoPrint o PrusaLink en su red. Nada se conecta ni se envía sin un clic, y el envío pregunta antes.
- **Otros laminadores.** Kiri:Moto, PrusaSlicer y OrcaSlicer son complementos propios, desactivados por defecto; añádalos desde la tarjeta o desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su propia copia instalada de CadCraft Studio. El complemento de impresoras Bambu Lab lamina con su OrcaSlicer y sus perfiles P2S, y necesita Studio en una computadora.
- **Impresión en resina.** Los complementos de resina (desactivados por defecto) crean imágenes de capas para la pantalla de su impresora, con vaciado y orificios de ventilación, una balsa y soportes, una vista previa de capas, y tiempo, resina y costo. Los complementos de formato de archivo escriben Elegoo GOO, SL1, Chitubox (CBDDLP y CTB 2 a 5) y Anycubic (PWMX y PWS). Una prueba de exposición de resina genera una escalera de cinco exposiciones. Consulte [Laminar para una impresora de resina](topic:resin-printing).
- **Sin cambios.** {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}, las herramientas de impresión y Dividir para impresión funcionan como en 0.8. Consulte [Prepare un modelo para impresión 3D](topic:print-3d).

### Flujo de material, gemelo digital y piso de fábrica

Estos tres son complementos, desactivados hasta que los active en {{ui:Configuración}} › {{ui:Complementos}}, y cada uno tiene su propia ayuda una vez activado.

- **Flujo de material.** Un panel llamado Flujo de material diseña transportadores, estaciones, búferes y rutas de AGV en la vista 3D, ejecuta una simulación con semilla, la reproduce, y muestra el rendimiento, los tiempos de entrega y las colas, con resultados guardados como CSV. Los pedidos pueden venir de un archivo CSV. Las celdas robotizadas se pueden revisar y exportar. El enlace con PLC tiene un modo simulado y un modo real sobre Modbus TCP, que solo funciona en CadCraft Studio.
- **Gemelo digital.** Lee el diseño de Flujo de material y ejecuta un PLC simulado sobre él, con fallas que puede forzar, pruebas de inventario, una comparación de diseños y una lista de materiales.
- **Piso de fábrica.** Convierte las estaciones en máquinas y celdas, las lee en vivo o desde un simulador, y mantiene una cola de trabajos y un OEE simple. Solo lee: esta versión no puede escribir en una máquina ni en un PLC.

### Superficies, modelos y dibujo

- **Redondeos, engrosamiento y booleanas en NURBS.** El panel {{ui:Superficies}} tiene {{ui:Fillet between faces}}, {{ui:Redondear varias aristas}}, {{ui:Engrosar hasta formar un sólido}} y Unir, Restar e Intersecar, cada uno con su desviación medida. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Ajuste de superficies a un escaneo.** Seleccione una malla escaneada y use {{ui:Ajustar superficies al escaneo}} en el grupo **Escaneo**, luego {{ui:Unir las superficies en un sólido}}. Es un primer ajuste, no un paquete completo de ingeniería inversa.
- **Un enlace en vivo desde un modelador .3dm.** En un solo sentido, desde Rhino 8 o Grasshopper, y necesita CadCraft Studio en la misma computadora. Consulte [Mantenga un modelo .3dm en vivo](topic:live-3dm-link).
- **Vea el modelo en sitio.** {{ui:Ver en sitio (RA, teléfono)}} en el menú {{ui:Vistas}} funciona en un teléfono Android con Chrome. Consulte [Vea el modelo en sitio con un teléfono Android (AR)](topic:ar-on-site).
- **Métodos de arco.** La lista desplegable {{ui:Métodos de arco}} ofrece diez maneras de dibujar un arco, incluidas {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Más unidades.** Se reconocen pesos (kg, lb, t, ton) y temperaturas (grados C, F, K y R) donde escribe valores con unidades.

## En todas las aplicaciones

- **Textos emergentes.** El texto al pasar el cursor sobre botones y las etiquetas cortadas es un texto emergente de Bootstrap.
- **Consejo de inicio cerrable.** La tarjeta de consejo en un área de dibujo vacía tiene una pequeña x para cerrarla. Queda cerrada, y la paleta de comandos puede volver a mostrarla.
- **Pestañas con desplazamiento.** La franja de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestaña.** Con un documento abierto, la pestaña del navegador empieza con el nombre del documento, luego ModelCraft y CadCraft. Un punto aparece primero mientras hay cambios sin guardar.
- **Distribución.** {{ui:Configuración}} › {{ui:General}} › Distribución reúne las distribuciones en una lista desplegable, con una opción para usar una distribución solo en esta aplicación y un botón para restablecerla.
- **Idiomas.** La lista de idiomas en Configuración sigue los archivos de idioma que contiene la versión. Los idiomas distintos del inglés son borradores de máquina.
- **En vivo y biblioteca.** Live TeamWork muestra cursores y nombres en vivo, y las colecciones de la Biblioteca dan a cada aplicación una colección predeterminada.

## Corregido

- {{ui:Reproducir}} cambia a {{ui:Pausa}} mientras se reproduce una animación, y {{key:Space}} reproduce y pausa mientras la línea de tiempo está abierta.
- El render fijo recurre a WebGL cuando la tarjeta gráfica no puede iniciar el trazador de rutas. La vista de render en vivo puede seguir mostrando el error; esto no se comprobó en una computadora Windows con ese controlador.
- El modo real de Flujo de material vuelve a conectarse después de que un enlace terminara con respuestas de excepción del PLC.

## Límites honestos

- Nada se ha impreso en una impresora real: ni filamento, ni resina, ni a través de Bambu Connect. Los archivos de resina solo fueron leídos por los lectores propios de CadCraft.
- El gemelo digital y el piso de fábrica se probaron solo con simuladores y respuestas conocidas, sin un PLC, línea o protocolo real. Son ayudas de revisión, no una validación de seguridad. La física cubre solo cajas, hasta ocho cargas.
- El enlace con Rhino y Grasshopper nunca se ha ejecutado en los programas reales.
- Los idiomas distintos del inglés son borradores de máquina.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), en comparación con 0.7. El cuadro de diálogo {{ui:Renderizar una imagen…}} ahora puede enviar la escena a otro programa, el panel Superficies crea superficies de forma libre suaves, y un asistente que usted conecta puede definir una escena completa con una sola oración.

### Nuevo

**Renderizado**

- **Una opción de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de Modo. Nuestros dos motores propios, Rápido y el Trazador de rutas, son los predeterminados y funcionan en todas partes. Otras entradas guardan la escena como un paquete (el modelo como archivo USD, más un archivo de configuración con los valores exactos de los materiales, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y qué versión la hicieron. Consulte [Elija qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como un archivo USD, un archivo glTF (`.glb`) o una carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa de la computadora para el archivo. Consulte [Abra la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de juegos desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene al día en cada envío, en un solo sentido. Sus propias ediciones viven en una capa que CadCraft nunca escribe. Consulte [Envíe la escena a un motor de juegos](topic:render-unreal).
- **Motores de complementos.** Un complemento puede agregar un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita su confirmación en Studio. Consulte [Dibuje la imagen con otro programa](topic:render-other-program) y [Agregue un motor de render con un complemento](topic:render-engine-addons).
- **Describir la escena.** Diga a su asistente conectado "atardecer, lluvia ligera, árboles de otoño, gente en la plaza" y ModelCraft lo configura en un paso: el sol se mueve a la fecha y la hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas, y los árboles y la gente se colocan como objetos reales en etiquetas que puede ocultar, mover o borrar. La hora del día, la fecha o la estación, y el clima (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por separado, y una solicitud posterior cambia la misma escena. La niebla se muestra en la imagen de alta calidad en la tarjeta gráfica; los otros motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

**Materiales**

- **Un material a partir de una foto.** Dé a ModelCraft una foto de una superficie (una pared, un piso, piedra) y crea un material en mosaico: la iluminación de la foto se aplana, los bordes se unen, y un mapa de color, un mapa de rugosidad y un mapa normal se calculan a partir de la imagen. Es procesamiento de imágenes simple sobre su propia imagen, sin un modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da el mejor mosaico; un patrón fuerte, como los ladrillos, puede mostrar un fantasma suave donde se mezcla la unión.

**Superficies**

- **Superficies de forma libre.** El panel {{ui:Superficies}} crea curvas y superficies NURBS sin recortar: curvas por puntos, solevación, reglada, extrusión, revolución, barridos a lo largo de uno o dos rieles, superficies a partir de una red de curvas, parches a partir de cuatro aristas, igualar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (hueco, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que pidió aparece en el panel Problemas con una corrección **Igualar**. Las rayas cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Sitio y habitaciones**

- **Un boceto en fotografía sobre el terreno.** {{ui:Archivo}} › {{ui:Importar una foto de un boceto…}} convierte una foto con el teléfono de un boceto a mano en aristas sobre el terreno, a la escala que indique: un grupo, con una etiqueta por cada color de lápiz. El papel se detecta y se endereza en su computadora, y no se envía nada a ningún lugar. Consulte [Modelar sobre un plano de sitio](topic:site-plan).
- **Amueblar una habitación.** Seleccione un piso y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. Muebles de recámara, sala, comedor, cocina, baño u oficina se colocan según reglas, contra las paredes y sin obstruir puertas ni ventanas, en un grupo que puede quitar de una vez. Es un diseño predeterminado para que usted lo revise, no un diseño final. Consulte [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión puede inclinar sus cortes hasta 60 grados, lo que da más área de pegado a las piezas. Los conectores quedan perpendiculares al corte. Consulte [Divida un modelo para impresión](topic:print-split).
- **La revisión de impresión en Problemas.** Los hallazgos de la revisión de impresión 3D aparecen en el panel Problemas con marcadores en el modelo, y Reparar los corrige desde ahí. Consulte [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

**En todas las aplicaciones**

- **Idiomas.** La ayuda y las aplicaciones están en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los haya leído, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un trackpad, un lápiz, un ratón 3D, un control de videojuegos y controles MIDI pueden manejar las aplicaciones, para todas o para una sola.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de la barra de herramientas define Ajustar (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza de lado en lugar de quitar espacio al dibujo. Ajustar sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula compartida: categorías plegables, columnas de etiqueta y valor, y densidad Compacta. La aritmética escrita, como `2*450`, sigue funcionando.
- **Problemas.** El panel Problemas (el botón de advertencia en la barra de la aplicación) lo comparten todas las aplicaciones. En ModelCraft contiene la revisión de impresión y las advertencias de continuidad de superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está en qué parte. Consulte [Modele en conjunto con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden agregar motores de render, como se indicó arriba.
- **Conecte su IA.** El contrato de herramientas y las pruebas de las ocho aplicaciones pasan, con 454 herramientas en total. La conexión con un clic dentro de Studio, un conector alojado para asistentes en el navegador, su propia clave dentro de Studio y un paquete publicado no están prometidos todavía. Las aplicaciones no contienen ninguna IA propia. Consulte [Use ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Sección de clases DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto, lo que podía dañar el archivo al importarlo. Ahora se lee correctamente, en ModelCraft y en las demás aplicaciones que leen DWG.
- **Tabletas en vertical.** El espacio sobrante de la cuadrícula va al lienzo, y la distribución de la hoja empieza en 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también tiene el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes eran solo en inglés. Esto todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

### Aún no en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}}, luego {{ui:Ejecutar de todas formas}}. En un Mac, haga clic derecho y elija {{ui:Abrir}}. Las versiones de tienda están en pausa, y la versión para iPad e iPhone no se recompiló para 0.8.1.
- Otro programa que dibuja la imagen sin un complemento de motor de render, cámaras panorámicas o estereoscópicas, y una imagen de cielo a través de otro programa, y el complemento que abre la escena de Unreal, todavía no están. Los archivos se escriben; el complemento no se ha publicado y no se ha ejecutado en Unreal.
- Superficies de forma libre: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos llegarán después.
- Las imágenes de otros programas no son idénticas píxel por píxel a las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de la versión 0.8.1 para el cambio de idioma en Studio no está probada en todas las plataformas.

Todo lo demás está en [Aún no construido](topic:not-built-yet). Para la versión anterior, consulte [Novedades de la versión 0.7](topic:whats-new-0-7).
