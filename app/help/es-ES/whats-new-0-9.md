---
title: Novedades de la versión 0.9 (anteriores)
summary: Etapa de impresión con nuestro propio laminador y envío por USB, Klipper, OctoPrint y PrusaLink, laminado para resina y complementos de formato de archivo, flujo de material, complementos de gemelo digital y planta de fábrica, redondeos NURBS, engrosamiento y ajuste a escaneos, RA en obra y diez métodos de arco.
keywords: novedades 0.9, versión anterior, novedades, notas de la versión, registro de cambios, 0.9, etapa de impresión, impresión 3d, enviar a impresora 3d, laminador, cadcraft básico, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, prueba de exposición, flujo de material, gemelo digital, planta de fábrica, plc, transportador, nurbs, redondeo, engrosar, ajuste de escaneo, ar, en obra, métodos de arco, unidades, novedades, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, superficies, loft, barrido, continuidad, g0, g1, g2, zebra, step, iges, decir la escena, escena, clima, hora del día, estación, asistente, material a partir de una foto, foto, foto de croquis, amueblar, amueblar una habitación, inclinado, corte inclinado, dividir, revisión de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg, en vivo
from: 2717d1b1
---

Estos son los cambios de ModelCraft 0.9 respecto de la 0.8.1. ModelCraft ahora llega a la impresora y a la planta de producción: puede colocar objetos en una base de impresión y enviarlos sin exportar, laminar para filamento o resina, y diseñar una línea de manipulación de materiales. Esta es CadCraft Studio 0.9 y sus ocho aplicaciones; la mayoría de las nuevas funciones siguientes son complementos.

## Novedades

### Impresión 3D

- **Etapa de impresión.** Haga clic en {{ui:Etapa de impresión}} en la barra de herramientas. Añada elementos de la Biblioteca a la base de la impresora, ordénelos, revise las capas laminadas y pulse {{ui:Enviar a impresora 3D}}, sin exportar ningún STL. Pertenece al complemento de impresión 3D, que está activado por defecto y puede eliminarse como cualquier otro complemento. Consulte [Colocar objetos en la base de impresión y enviarlos a una impresora](topic:print-stage).
- **Nuestro propio laminador de filamento.** {{ui:CadCraft básico (incluido, el más rápido)}} es el laminador de la lista **Laminador** de la tarjeta: paredes, pieles, relleno, soportes y falda, en un proceso en segundo plano para que la página siga siendo utilizable. {{ui:Vista previa de capas}} con el deslizador **Capa** muestra las capas antes de enviar. Los perfiles de impresora, como los estilos Ender-3 y Prusa MK4, incluyen su propio G-code de inicio.
- **Envío.** Por USB (Chrome o Edge en un ordenador, con la página abierta), o a Klipper (Moonraker), OctoPrint o PrusaLink en su red. Nada se conecta ni se envía sin un clic, y el envío pide confirmación antes.
- **Otros laminadores.** Kiri:Moto, PrusaSlicer y OrcaSlicer son complementos propios, desactivados por defecto; añádalos desde la tarjeta o desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su copia instalada de CadCraft Studio. El complemento de impresoras Bambu Lab lamina con su OrcaSlicer y sus perfiles P2S, y necesita Studio en un ordenador.
- **Impresión en resina.** Los complementos de resina (desactivados por defecto) generan imágenes de capas para la pantalla de su impresora, con vaciado y orificios de ventilación, balsa y soportes, una vista previa de capas, y tiempo, resina y coste. Los complementos de formato de archivo escriben Elegoo GOO, SL1, Chitubox (CBDDLP y CTB 2 a 5) y Anycubic (PWMX y PWS). Una prueba de exposición en resina genera una escalera de cinco exposiciones. Consulte [Laminar para una impresora de resina](topic:resin-printing).
- **Sin cambios.** {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}, las herramientas de impresión y Dividir para impresión funcionan como en la 0.8. Consulte [Preparar un modelo para impresión 3D](topic:print-3d).

### Flujo de material, gemelo digital y planta de fábrica

Estos tres son complementos, desactivados hasta que los active en {{ui:Configuración}} › {{ui:Complementos}}, y cada uno tiene su propia ayuda una vez activado.

- **Flujo de material.** Un panel llamado Flujo de material dispone transportadores, estaciones, búferes y trayectorias de AGV en la vista 3D, ejecuta una simulación con semilla, la reproduce y muestra el rendimiento, los plazos de entrega y las colas, con resultados guardados como CSV. Los pedidos pueden venir de un archivo CSV. Las celdas robotizadas pueden revisarse y exportarse. El enlace con PLC tiene un modo de prueba y un modo real sobre Modbus TCP, que solo funciona en CadCraft Studio.
- **Gemelo digital.** Lee el diseño de Flujo de material y ejecuta un PLC de prueba sobre él, con fallos que puede forzar, pruebas de inventario, una comparación de diseños y una lista de materiales.
- **Planta de fábrica.** Convierte las estaciones en máquinas y celdas, las lee en vivo o desde un simulador, y mantiene una cola de trabajos y un OEE sencillo. Solo lee: esta versión no puede escribir en ninguna máquina ni en ningún PLC.

### Superficies, modelos y dibujo

- **Redondeos, engrosamiento y booleanas en NURBS.** El panel {{ui:Superficies}} tiene {{ui:Redondeo entre caras}}, {{ui:Redondear varias aristas}}, {{ui:Dar espesor para crear un sólido}} y Unión, Restar e Intersecar, cada una con su desviación medida. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superficies a un escaneo.** Seleccione una malla escaneada y use {{ui:Ajustar superficies al escaneo}} en el grupo **Escaneo**, y luego {{ui:Coser las superficies en un sólido}}. Es un primer ajuste, no un paquete completo de ingeniería inversa.
- **Enlace en vivo desde un modelador .3dm.** En un solo sentido, desde Rhino 8 o Grasshopper, y necesita CadCraft Studio en el mismo ordenador. Consulte [Mantener un modelo .3dm en vivo](topic:live-3dm-link).
- **Ver el modelo en obra.** {{ui:Vista en obra (RA, teléfono)}} del menú {{ui:Vistas}} funciona en un teléfono Android con Chrome. Consulte [Ver el modelo en obra con un teléfono Android (RA)](topic:ar-on-site).
- **Métodos de arco.** El desplegable {{ui:Métodos de arco}} ofrece diez formas de dibujar un arco, incluidos {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Más unidades.** Se reconocen pesos (kg, lb, t, ton) y temperaturas (grados C, F, K y R) donde escriba valores con unidades.

## En todas las aplicaciones

- **Sugerencias emergentes.** El texto que aparece al pasar el ratón sobre los botones y las etiquetas cortadas es una sugerencia de Bootstrap.
- **Consejo de inicio cerrable.** La tarjeta de consejo en un área de dibujo vacía tiene una pequeña x para cerrarla. Queda cerrada, y la paleta de comandos puede volver a mostrarla.
- **Pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestaña.** Con un documento abierto, la pestaña del navegador empieza con el nombre del documento, y luego ModelCraft y CadCraft. Un punto va primero mientras el documento no esté guardado.
- **Disposición.** {{ui:Configuración}} › {{ui:General}} › Disposición reúne las disposiciones en un desplegable, con una opción para usar una disposición solo en esta aplicación y un botón para restablecer la disposición.
- **Idiomas.** La lista de idiomas de Configuración sigue los archivos de idioma que contiene la compilación. Los idiomas distintos del inglés son traducciones automáticas provisionales.
- **En vivo y Biblioteca.** Live TeamWork muestra cursores y nombres en vivo, y las colecciones de Biblioteca dan a cada aplicación una colección predeterminada.

## Corregido

- {{ui:Reproducir}} se convierte en {{ui:Pausa}} mientras se reproduce una animación, y {{key:Space}} reproduce y pausa mientras la línea de tiempo está abierta.
- El render fijo recurre a WebGL cuando la tarjeta gráfica no puede iniciar el trazador de caminos. La vista de render en vivo puede seguir mostrando el error; no se comprobó en un equipo Windows con ese controlador.
- El modo real del enlace de flujo de material vuelve a conectarse tras cerrarse un enlace por respuestas de excepción del PLC.

## Limitaciones reconocidas

- Nada se ha impreso en una impresora real: ni filamento, ni resina, ni a través de Bambu Connect. Los archivos de resina solo los han leído los propios lectores de CadCraft.
- El gemelo digital y la planta de fábrica se probaron solo contra simuladores y respuestas conocidas, sin PLC, línea ni protocolo reales. Son ayudas para revisión, no una validación de seguridad. La física cubre solo cajas, hasta ocho cargas.
- El enlace con Rhino y Grasshopper nunca se ha ejecutado en los programas reales.
- Los idiomas distintos del inglés son traducciones automáticas.

## Anterior: 0.8 y 0.8.1

Estos son los cambios de ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), respecto de la 0.7. El diálogo {{ui:Renderizar una imagen…}} ahora puede enviar la escena a otro programa, el panel Superficies crea superficies de forma libre suaves, y un asistente que conecte puede definir una escena completa con una sola frase.

### Novedades

**Renderizado**

- **Una elección de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de **Modo**. Nuestros dos motores propios, Rápido y el Trazador de caminos, son los predeterminados y funcionan en todas partes. Las demás opciones guardan la escena como un paquete (el modelo como archivo USD, más un archivo de ajustes con los valores exactos de los materiales, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y qué versión la hicieron. Consulte [Elija qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como archivo USD, archivo glTF (`.glb`) o carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa propio del equipo para el archivo. Consulte [Abrir la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de juegos desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene sincronizada en cada envío, en un solo sentido. Sus propias ediciones están en una capa que CadCraft nunca escribe. Consulte [Enviar la escena a un motor de juegos](topic:render-unreal).
- **Motores de complementos.** Un complemento puede añadir un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita su confirmación en Studio. Consulte [Dibujar la imagen con otro programa](topic:render-other-program) y [Añadir un motor de render con un complemento](topic:render-engine-addons).
- **Decir la escena.** Diga a su asistente conectado "anochecer, lluvia ligera, árboles de otoño, gente en la plaza" y ModelCraft lo configura en un solo paso: el sol se mueve a la fecha y la hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas, y los árboles y la gente se colocan como objetos reales en etiquetas que puede ocultar, mover o borrar. La hora del día, la fecha o la estación, y el tiempo (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por sí solos, y una petición posterior cambia la misma escena. La niebla se ve en la imagen de alta calidad de la tarjeta gráfica; los demás motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

**Materiales**

- **Un material a partir de una foto.** Dé a ModelCraft una foto de una superficie (una pared, un suelo, piedra) y genera un material en mosaico: la iluminación de la foto se iguala, los bordes se unen, y a partir de la imagen se calculan un mapa de color, un mapa de rugosidad y un mapa de normales. Es un simple procesamiento de imagen de su propia foto, sin ningún modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da el mejor mosaico; un patrón fuerte, como ladrillos, puede mostrar un fantasma difuso donde se mezcla la unión.

**Superficies**

- **Superficies de forma libre.** El panel {{ui:Superficies}} crea curvas y superficies NURBS sin recortar: curvas por puntos, loft, reglada, extrusión, revolución, barridos a lo largo de uno o dos carriles, superficies a partir de una red de curvas, parches a partir de cuatro aristas, igualar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (hueco, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que pidió aparece en el panel Problemas con una corrección **Igualar**. Las rayas de cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Obra y espacios**

- **Un croquis fotografiado sobre el terreno.** {{ui:Archivo}} › {{ui:Importar la foto de un croquis…}} convierte una foto tomada con el teléfono de un croquis a mano en aristas sobre el suelo a la escala que indique: un grupo, con una etiqueta por cada color de bolígrafo. El papel se detecta y se endereza en su ordenador, y no se envía nada a ninguna parte. Consulte [Modelar sobre un plano de implantación](topic:site-plan).
- **Amueblar una habitación.** Seleccione un suelo y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. El mobiliario de dormitorio, salón, comedor, cocina, baño u oficina se coloca según reglas, contra las paredes y sin obstruir puertas ni ventanas, en un grupo que puede retirar de una vez. Es una disposición predeterminada para que la revise, no un diseño final. Consulte [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión puede inclinar sus cortes hasta 60 grados, lo que da a las piezas más superficie de pegado. Los conectores quedan perpendiculares al corte. Consulte [Dividir un modelo para impresión](topic:print-split).
- **La revisión de impresión en Problemas.** Los resultados de la revisión de impresión 3D aparecen en el panel Problemas con marcadores en el modelo, y {{ui:Reparar}} los corrige desde allí. Consulte [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

**En todas las aplicaciones**

- **Idiomas.** La ayuda y las aplicaciones están en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son traducciones automáticas hasta que un hablante nativo los revise, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un panel táctil, un lápiz, un ratón 3D, un mando de juegos y los controles MIDI pueden manejar las aplicaciones, para todas o para una.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de la barra de herramientas define Ajustar (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza lateralmente en lugar de quitar espacio al dibujo. Ajustar sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula compartida: categorías plegables, columnas de etiqueta y valor, y densidad Compacta. Las operaciones aritméticas escritas, como `2*450`, siguen funcionando.
- **Problemas.** El panel Problemas (el botón de aviso de la barra de aplicaciones) es compartido por todas las aplicaciones. En ModelCraft contiene la revisión de impresión y los avisos de continuidad de superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está dónde. Consulte [Modelar juntos con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden añadir motores de render, como se ha indicado.
- **Conecte su IA.** El contrato de herramientas y las comprobaciones de las ocho aplicaciones pasan, con 454 herramientas en total. La conexión de un clic dentro de Studio, un conector alojado para asistentes de navegador, su propia clave dentro de Studio y un paquete publicado todavía no están garantizados. Las aplicaciones no contienen IA propia. Consulte [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Sección de clases DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto, lo que podía romper el archivo al importarlo. Ahora se lee correctamente, en ModelCraft y en las demás aplicaciones que leen DWG.
- **Tabletas en vertical.** El alto de cuadrícula sobrante va al lienzo, y la disposición de hoja empieza a 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también incluye el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Aún no se ha probado en todas las plataformas: indíquenos si el idioma no cambia.

### No incluido todavía en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, haga clic con el botón derecho y elija {{ui:Abrir}}. Las versiones para tiendas están en espera, y la compilación para iPad e iPhone no se recompiló para la 0.8.1.
- Otro programa que dibuje la imagen sin un complemento de motor de render, cámaras panorámicas o estéreo, una imagen de cielo a través de otro programa, y el complemento que abre la escena de Unreal todavía no están disponibles. Los archivos se escriben; el complemento no se ha publicado y no se ha ejecutado en Unreal.
- Superficies de forma libre: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos llegarán más adelante.
- Las imágenes de otros programas no son píxel a píxel como las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de la 0.8.1 para el cambio de idioma en Studio no se ha probado en todas las plataformas.

Todo lo demás está en [Aún no disponible](topic:not-built-yet). Para la versión anterior, consulte [Novedades de la versión 0.7](topic:whats-new-0-7).
