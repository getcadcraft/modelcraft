---
title: Novedades de la versión 0.9
summary: Etapa de impresión con nuestro propio laminador y envío por USB, Klipper, OctoPrint y PrusaLink, laminado para resina y complementos de formato de archivo, flujo de materiales, complementos de gemelo digital y de planta de fábrica, redondeos NURBS, engrosamiento y ajuste a escaneos, RA en obra y diez métodos de arco.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, etapa de impresión, impresión 3D, enviar a impresora 3D, laminador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, prueba de exposición, flujo de materiales, gemelo digital, planta de fábrica, plc, nurbs, redondeo, engrosar, ajuste a escaneo, ar, en obra, métodos de arco, unidades, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, superficies, loft, barrido, continuidad, g0, g1, g2, cebra, step, iges, describir la escena, escena, clima, hora del día, estación, asistente, material desde una foto, foto, foto de boceto, amueblar, amueblar una habitación, inclinado, corte inclinado, dividir, comprobación de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg, en vivo
from: 169048a2
---

Esto es lo que cambió en ModelCraft 0.9, en comparación con la 0.8.1. ModelCraft ahora llega a la impresora y a la planta de producción: puede colocar piezas en una plataforma de impresión y enviarlas sin exportar, laminarlas para filamento o resina, y diseñar una línea de manejo de materiales. Esto es CadCraft Studio 0.9 y sus ocho aplicaciones; la mayoría de las nuevas funciones siguientes son complementos.

## Novedades

### Impresión 3D

- **Etapa de impresión.** Haga clic en {{ui:Etapa de impresión}} en la barra de herramientas. Añada elementos de la Biblioteca a la plataforma de la impresora, colóquelos, revise las capas laminadas y pulse {{ui:Enviar a impresora 3D}}, sin necesidad de exportar un STL. Pertenece al complemento Impresión 3D, que está activado por defecto y puede eliminarse como cualquier complemento. Véase [Colocar piezas en la plataforma de impresión y enviarlas a una impresora](topic:print-stage).
- **Nuestro propio laminador de filamento.** {{ui:CadCraft basic (incluido, el más rápido)}} es el laminador de la lista **Laminador** de la tarjeta: paredes, pieles, relleno, soportes y falda, en un hilo de trabajo (worker) para que la página siga siendo utilizable. {{ui:Vista previa de capas}} con el deslizador **Capa** muestra las capas antes de enviar. Los perfiles de impresora, como los estilos Ender-3 y Prusa MK4, incluyen su propio G-code de inicio.
- **Envío.** Por USB (Chrome o Edge en un equipo, con la página abierta), o a Klipper (Moonraker), OctoPrint o PrusaLink en su red. Nada se conecta ni envía sin un clic, y el envío pide confirmación antes.
- **Otros laminadores.** Kiri:Moto, PrusaSlicer y OrcaSlicer son complementos propios, desactivados por defecto; añádalos desde la tarjeta o desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su copia instalada desde CadCraft Studio. El complemento de impresoras Bambu Lab lamina con su OrcaSlicer y sus perfiles P2S, y necesita Studio en un equipo.
- **Impresión en resina.** Los complementos de resina (desactivados por defecto) generan imágenes de capas para la pantalla de su impresora, con vaciado y agujeros de ventilación, una balsa y soportes, una vista previa de capas, y tiempo, resina y coste. Los complementos de formato de archivo escriben Elegoo GOO, SL1, Chitubox (CBDDLP y CTB 2 a 5) y Anycubic (PWMX y PWS). Una prueba de exposición de resina crea una escalera de cinco exposiciones. Véase [Laminar para una impresora de resina](topic:resin-printing).
- **Sin cambios.** {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}, las herramientas de impresión y Dividir para imprimir funcionan como en la 0.8. Véase [Preparar un modelo para la impresión 3D](topic:print-3d).

### Flujo de materiales, gemelo digital y planta de fábrica

Estos tres son complementos, desactivados hasta que los active en {{ui:Configuración}} › {{ui:Complementos}}, y cada uno tiene su propia ayuda una vez activado.

- **Flujo de materiales.** Un panel llamado Flujo de materiales dispone transportadores, estaciones, búferes y trayectorias de AGV en la vista 3D, ejecuta una simulación con semilla, la reproduce y muestra el rendimiento, los plazos de entrega y las colas, con resultados guardados como CSV. Los pedidos pueden venir de un archivo CSV. Las celdas robotizadas pueden comprobarse y exportarse. El enlace con PLC tiene un modo simulado y un modo real sobre Modbus TCP, que solo funciona en CadCraft Studio.
- **Gemelo digital.** Lee la disposición de Flujo de materiales y ejecuta sobre ella un PLC simulado, con fallos que puede forzar, pruebas de existencias, una comparación de disposiciones y una lista de materiales.
- **Planta de fábrica.** Convierte las estaciones en máquinas y celdas, las lee en vivo o desde un simulador, y mantiene una cola de trabajos y un OEE sencillo. Solo lee: esta versión no puede escribir en una máquina ni en un PLC.

### Superficies, modelos y dibujo

- **Redondeos, engrosamiento y booleanas en NURBS.** El panel {{ui:Superficies}} tiene {{ui:Redondeo entre caras}}, {{ui:Redondear varias aristas}}, {{ui:Dar espesor para crear un sólido}} y Unión, Restar e Intersecar, cada uno con su desviación medida. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superficies a un escaneo.** Seleccione una malla escaneada y use {{ui:Ajustar superficies al escaneo}} en el grupo **Escaneo**, y después {{ui:Coser las superficies en un sólido}}. Es un primer ajuste, no un paquete completo de ingeniería inversa.
- **Un enlace en vivo desde un modelador .3dm.** En un solo sentido, desde Rhino 8 o Grasshopper, y necesita CadCraft Studio en el mismo equipo. Véase [Mantener un modelo .3dm en vivo](topic:live-3dm-link).
- **Ver el modelo en obra.** {{ui:Vista en obra (RA, teléfono)}} en el menú {{ui:Vistas}} funciona en un teléfono Android con Chrome. Véase [Ver el modelo en obra con un teléfono Android (RA)](topic:ar-on-site).
- **Métodos de arco.** La lista desplegable {{ui:Métodos de arco}} ofrece diez formas de dibujar un arco, entre ellas {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Más unidades.** Se reconocen pesos (kg, lb, t, ton) y temperaturas (grados C, F, K y R) donde escribe valores con unidades.

## En todas las aplicaciones

- **Información emergente.** El texto al pasar el puntero sobre los botones y las etiquetas cortadas es una información emergente de Bootstrap.
- **Consejo de inicio cerrable.** La tarjeta de consejo en un área de dibujo vacía tiene una pequeña x para cerrarla. Permanece cerrada, y la paleta de comandos puede volver a mostrarla.
- **Barras de pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestaña.** Con un documento abierto, la pestaña del navegador empieza con el nombre del documento, y luego ModelCraft y CadCraft. Un punto aparece primero mientras no esté guardado.
- **Disposición.** {{ui:Configuración}} › {{ui:General}} › Disposición guarda las disposiciones en una lista desplegable, con una opción para usar una disposición solo en esta aplicación y un botón para restablecer la disposición.
- **Idiomas.** La lista de idiomas de Configuración sigue a los archivos de idioma que contiene la versión. Los idiomas distintos del inglés son borradores de máquina.
- **En vivo y Biblioteca.** Live TeamWork muestra los cursores y nombres en vivo, y las colecciones de la Biblioteca dan a cada aplicación una colección predeterminada.

## Corregido

- {{ui:Reproducir}} se convierte en {{ui:Pausa}} mientras se reproduce una animación, y {{key:Space}} reproduce y pausa mientras la línea de tiempo está abierta.
- El render de imagen fija vuelve a WebGL cuando la tarjeta gráfica no puede iniciar el trazador de trayectorias. La vista de render en vivo todavía puede mostrar el error; no se comprobó en un equipo Windows con ese controlador.
- El modo real del Flujo de materiales vuelve a conectarse después de que un enlace terminara por respuestas de excepción del PLC.

## Límites reales

- Todavía no se ha impreso nada en una impresora real: ni con filamento, ni con resina, ni a través de Bambu Connect. Los archivos de resina solo se han releído con los lectores propios de CadCraft.
- El gemelo digital y la planta de fábrica se probaron solo con simuladores y respuestas conocidas, sin ningún PLC, línea o protocolo real. Son ayudas para comprobar, no una validación de seguridad. La física cubre solo cajas, hasta ocho cargas.
- El enlace con Rhino y Grasshopper nunca se ha ejecutado en los programas reales.
- Los idiomas distintos del inglés son borradores de máquina.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), en comparación con la 0.7. El cuadro de diálogo {{ui:Renderizar una imagen…}} ya puede enviar la escena a otro programa, el panel Superficies crea superficies de forma libre suaves, y un asistente que conecte puede preparar una escena completa a partir de una sola frase.

### Novedades

**Renderizado**

- **Una elección de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de Modo. Nuestros dos motores propios, Rápido y el Trazador de trayectorias, son los predeterminados y funcionan en cualquier parte. Las demás entradas guardan la escena como un paquete (el modelo como archivo USD, más un archivo de ajustes con los valores exactos de material, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y qué versión la hicieron. Véase [Elegir qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como archivo USD, como archivo glTF (`.glb`) o como carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa propio del equipo para el archivo. Véase [Abrir la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de juego desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene sincronizada en cada envío, en un solo sentido. Sus propias ediciones viven en una capa que CadCraft nunca escribe. Véase [Enviar la escena a un motor de juego](topic:render-unreal).
- **Motores de complementos.** Un complemento puede añadir un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita su autorización en Studio. Véase [Dibujar la imagen con otro programa](topic:render-other-program) y [Añadir un motor de render con un complemento](topic:render-engine-addons).
- **Describir la escena.** Diga a su asistente conectado «atardecer, lluvia ligera, árboles de otoño, personas en la plaza» y ModelCraft lo prepara en un solo paso: el sol se mueve a la fecha y la hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas, y los árboles y las personas se colocan como objetos reales en etiquetas que puede ocultar, mover o borrar. La hora del día, la fecha o la estación, y el tiempo (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por sí solos, y una petición posterior cambia la misma escena. La niebla se ve en la imagen de alta calidad en la tarjeta gráfica; los demás motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

**Materiales**

- **Un material a partir de una foto.** Entregue a ModelCraft una foto de una superficie (un muro, un suelo, piedra) y genera un material repetible: la iluminación de la foto se aplana, los bordes se hacen coincidir, y a partir de la imagen se calculan un mapa de color, un mapa de rugosidad y un mapa de normales. Es un procesamiento de imagen sencillo sobre su propia foto, sin ningún modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da la mejor teselación; un patrón marcado, como ladrillos, puede mostrar un fantasma suave donde se mezcla la unión.

**Superficies**

- **Superficies de forma libre.** El panel {{ui:Superficies}} crea curvas NURBS y superficies sin recortar: curvas por puntos, loft, reglada, extruir, revolución, barridos a lo largo de uno o dos carriles, superficies a partir de una red de curvas, parches de cuatro aristas, igualar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (hueco, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que pidió aparece en el panel Problemas con un arreglo **Igualar**. Las rayas cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Véase [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Obra y habitaciones**

- **Una foto de un boceto sobre el terreno.** {{ui:Archivo}} › {{ui:Importar la foto de un croquis…}} convierte una foto con el teléfono de un boceto a mano en aristas sobre el terreno, a la escala que indique: un grupo, con una etiqueta por cada color de bolígrafo. El papel se localiza y se endereza en su equipo, y no se envía nada a ningún sitio. Véase [Modelar sobre un plano de emplazamiento](topic:site-plan).
- **Amueblar una habitación.** Seleccione un suelo y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. El mobiliario de dormitorio, salón, comedor, cocina, baño u oficina se coloca según reglas, contra los muros y sin obstruir puertas y ventanas, en un grupo que puede quitar de una vez. Es una distribución predeterminada para que la revise, no un diseño. Véase [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para imprimir puede inclinar sus cortes hasta 60 grados, lo que da a las piezas más superficie de pegado. Los conectores quedan perpendiculares al corte. Véase [Dividir un modelo para imprimir](topic:print-split).
- **La comprobación de impresión en Problemas.** Los resultados de la comprobación de impresión 3D aparecen en el panel Problemas con marcadores en el modelo, y Reparar los arregla desde allí. Véase [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

**En todas las aplicaciones**

- **Idiomas.** La ayuda y las aplicaciones llegan en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los haya revisado, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un panel táctil, un lápiz, un ratón 3D, un mando de juego y los controles MIDI pueden manejar las aplicaciones, para todas o para una.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de la barra de herramientas define Ajuste (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza lateralmente en lugar de quitar espacio al dibujo. Ajuste sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula compartida: categorías plegables, columnas de etiqueta y de valor, y densidad compacta. Las operaciones escritas como `2*450` siguen funcionando.
- **Problemas.** El panel Problemas (el botón de aviso de la barra de aplicaciones) es compartido por todas las aplicaciones. En ModelCraft contiene la comprobación de impresión y las advertencias de continuidad de superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está dónde. Véase [Modelar juntos con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden añadir motores de render, como se ha indicado arriba.
- **Conecte su IA.** El contrato de herramientas y las comprobaciones de las ocho aplicaciones pasan, con 454 herramientas en total. La conexión con un solo clic dentro de Studio, un conector alojado para asistentes de navegador, su propia clave dentro de Studio y un paquete publicado todavía no están prometidos. Las aplicaciones no contienen IA propia. Véase [Usar ModelCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Sección de clases DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto, lo que podía romper el archivo al importarlo. Ahora se lee bien, en ModelCraft y en las demás aplicaciones que leen DWG.
- **Tabletas en vertical.** El alto de cuadrícula sobrante va al lienzo, y la disposición de la hoja empieza con 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también incluye el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

### Todavía no está en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, haga clic con el botón derecho y elija {{ui:Abrir}}. Las versiones para tiendas están en espera, y la versión para iPad e iPhone no se recompiló para la 0.8.1.
- Que otro programa dibuje la imagen sin un complemento de motor de render, las cámaras de panorámica o estéreo, una imagen de cielo a través de otro programa, y el complemento que abre la escena de Unreal, todavía no están disponibles. Los archivos se escriben; el complemento no se ha publicado y no se ha ejecutado en Unreal.
- Superficies de forma libre: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos llegarán más adelante.
- Las imágenes de otros programas no son píxel a píxel como las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de la 0.8.1 para el cambio de idioma en Studio no se ha probado en todas las plataformas.

Lo demás está en [Todavía no disponible](topic:not-built-yet). Para la versión anterior, véase [Novedades de la versión 0.7](topic:whats-new-0-7).
