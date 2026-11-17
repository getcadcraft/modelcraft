---
title: Novedades de la versión 0.9
summary: Etapa de impresión con nuestro propio laminador y envío por USB, Klipper, OctoPrint y PrusaLink, laminado para resina y complementos de archivos, flujo de materiales, complementos de gemelo digital y piso de fábrica, redondeos NURBS, engrosamiento y ajuste a escaneos, AR en sitio y diez métodos de arco.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, etapa de impresión, impresión 3d, enviar a impresora 3d, laminador, cadcraft básico, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión con resina, goo, sl1, ctb, anycubic, prueba de exposición, flujo de materiales, gemelo digital, piso de fábrica, plc, transportador, nurbs, redondeo, engrosar, ajuste a escaneo, ar, en sitio, métodos de arco, unidades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, complemento de motor, nurbs, superficies, loft, barrido, continuidad, g0, g1, g2, cebra, step, iges, decir la escena, escena, clima, hora del día, estación, asistente, material desde una foto, foto, foto de boceto, amueblar, amueblar una habitación, inclinado, corte inclinado, dividir, revisión de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg, en vivo
from: 169048a2
---

Esto es lo que cambió en ModelCraft 0.9, comparado con 0.8.1. ModelCraft ahora llega a la impresora y a la planta: puede colocar cosas en la cama de impresión y enviarlas sin exportar, laminar para filamento o resina, y diseñar una línea de manejo de materiales. Esto es CadCraft Studio 0.9 y sus ocho apps; la mayoría de las funciones nuevas que siguen son complementos.

## Nuevo

### Impresión 3D

- **Etapa de impresión.** Haga clic en {{ui:Etapa de impresión}} en la barra de herramientas. Agregue elementos de la biblioteca a la cama de la impresora, acomódelos, mire las capas laminadas y pulse {{ui:Enviar a impresora 3D}}, sin exportar ningún STL. Pertenece al complemento de Impresión 3D, que viene activado y se puede quitar como cualquier complemento. Vea [Coloque cosas en la cama de impresión y envíelas a una impresora](topic:print-stage).
- **Nuestro propio laminador de filamento.** {{ui:CadCraft básico (incluido, el más rápido)}} es el laminador de la lista **Laminador** de la tarjeta: paredes, pieles, relleno, soportes y un borde de purga, en un worker para que la página siga utilizable. {{ui:Vista previa de capas}} con el control deslizante **Capa** muestra las capas antes de enviar. Los perfiles de impresora, como los estilos Ender-3 y Prusa MK4, incluyen su propio G-code de inicio.
- **Envío.** Por USB (Chrome o Edge en una computadora, con la página abierta), o a Klipper (Moonraker), OctoPrint o PrusaLink en su red. Nada se conecta ni envía sin un clic, y enviar pide confirmación antes.
- **Otros laminadores.** Kiri:Moto, PrusaSlicer y OrcaSlicer son complementos propios, desactivados por defecto; agréguelos desde la tarjeta o desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su copia instalada de CadCraft Studio. El complemento de impresoras Bambu Lab lamina con su OrcaSlicer y sus perfiles P2S, y necesita Studio en una computadora.
- **Impresión con resina.** Los complementos de resina (desactivados por defecto) generan imágenes de capas para la pantalla de su impresora, con hueco y orificios de ventilación, una balsa y soportes, una vista previa de capas, y tiempo, resina y costo. Los complementos de formato de archivo escriben Elegoo GOO, SL1, Chitubox (CBDDLP y CTB 2 a 5) y Anycubic (PWMX y PWS). Una prueba de exposición de resina hace una escalera de cinco exposiciones. Vea [Laminar para una impresora de resina](topic:resin-printing).
- **Sin cambios.** {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}, las herramientas de impresión y Dividir para impresión funcionan igual que en 0.8. Vea [Preparar un modelo para impresión 3D](topic:print-3d).

### Flujo de materiales, Gemelo digital y Piso de fábrica

Estos tres son complementos, desactivados hasta que los active en {{ui:Configuración}} › {{ui:Complementos}}, y cada uno tiene su propia ayuda una vez activado.

- **Flujo de materiales.** Un panel llamado Flujo de materiales dispone transportadores, estaciones, búferes y trayectorias de AGV en la vista 3D, ejecuta una simulación con semilla, la reproduce y muestra el rendimiento, los tiempos de entrega y las colas, con resultados guardados como CSV. Los pedidos pueden venir de un archivo CSV. Las celdas robotizadas se pueden revisar y exportar. El enlace con PLC tiene un modo suave y un modo real sobre Modbus TCP, que funciona solo en CadCraft Studio.
- **Gemelo digital.** Lee el diseño de Flujo de materiales y ejecuta un PLC suave sobre él, con fallas que puede forzar, pruebas de inventario, una comparación de diseños y una lista de materiales.
- **Piso de fábrica.** Convierte las estaciones en máquinas y celdas, las lee en vivo o desde un simulador, y mantiene una cola de trabajos y un OEE sencillo. Solo lee: esta versión no puede escribir en una máquina ni en un PLC.

### Superficies, modelos y dibujo

- **Redondeos, engrosamiento y operaciones booleanas en NURBS.** El panel {{ui:Superficies}} tiene {{ui:Fillet between faces}}, {{ui:Redondear varias aristas}}, {{ui:Engrosar hasta formar un sólido}} y Unión, Restar e Intersecar, cada uno con su desviación medida. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superficies a un escaneo.** Seleccione una malla escaneada y use {{ui:Ajustar superficies al escaneo}} en el grupo **Escaneo**, luego {{ui:Unir las superficies en un sólido}}. Es un primer ajuste, no un paquete completo de ingeniería inversa.
- **Un enlace en vivo desde un modelador .3dm.** En un solo sentido, desde Rhino 8 o Grasshopper, y necesita CadCraft Studio en el mismo equipo. Vea [Mantener vivo un modelo .3dm](topic:live-3dm-link).
- **Ver el modelo en sitio.** {{ui:Ver en sitio (RA, teléfono)}} en el menú {{ui:Vistas}} funciona en un teléfono Android con Chrome. Vea [Ver el modelo en sitio con un teléfono Android (RA)](topic:ar-on-site).
- **Métodos de arco.** La lista desplegable {{ui:Métodos de arco}} ofrece diez formas de dibujar un arco, incluidos {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Más unidades.** Los pesos (kg, lb, t, ton) y las temperaturas (grados C, F, K y R) se entienden donde escribe valores con unidades.

## En todas las apps

- **Información emergente.** El texto al pasar sobre botones y las etiquetas cortadas es una información emergente de Bootstrap.
- **Consejo inicial cerrable.** La tarjeta de consejo en un dibujo vacío tiene una pequeña x para cerrarla. Se queda cerrada, y la paleta de comandos puede volver a mostrarla.
- **Barras de pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestañas.** Con un documento abierto, la pestaña del navegador empieza con el nombre del documento, luego ModelCraft y CadCraft. Un punto va primero mientras haya cambios sin guardar.
- **Diseño.** {{ui:Configuración}} › {{ui:General}} › Diseño reúne los diseños en una lista desplegable, con una opción para usar un diseño solo en esta app y un botón para restablecer el diseño.
- **Idiomas.** La lista de idiomas de Configuración sigue los archivos de idioma que contiene la compilación. Los idiomas distintos del inglés son borradores de máquina.
- **En vivo y Biblioteca.** Live TeamWork muestra los cursores y nombres en vivo, y las colecciones de la Biblioteca dan a cada app una colección predeterminada.

## Corregido

- {{ui:Reproducir}} se convierte en {{ui:Pausa}} mientras se reproduce una animación, y {{key:Space}} reproduce y pausa mientras la línea de tiempo está abierta.
- El render de imagen fija cambia a WebGL cuando la tarjeta gráfica no puede iniciar el trazador de rayos. La vista de render en vivo puede seguir mostrando el error; no se comprobó en una máquina Windows con ese controlador.
- El modo real de Flujo de materiales vuelve a conectarse después de que un enlace terminó por respuestas de excepción del PLC.

## Límites reales

- Todavía no se ha impreso nada en una impresora real: ni con filamento, ni con resina, ni mediante Bambu Connect. Los archivos de resina solo se han leído de vuelta con los lectores propios de CadCraft.
- El gemelo digital y el Piso de fábrica se probaron solo contra simuladores y respuestas conocidas, sin un PLC, línea o protocolo real. Son ayudas para revisar, no una validación de seguridad. La física cubre solo cajas, hasta ocho cargas.
- El enlace con Rhino y Grasshopper nunca se ha ejecutado en los programas reales.
- Los idiomas distintos del inglés son borradores de máquina.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. El diálogo {{ui:Renderizar una imagen…}} ahora puede enviar la escena a otro programa, el panel de Superficies crea superficies de forma libre suaves, y un asistente que usted conecta puede definir una escena completa a partir de una sola frase.

### Nuevo

**Renderizado**

- **Una elección de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de Modo. Nuestros dos motores, Rápido y el Trazador de rayos, son los predeterminados y funcionan en todas partes. Las otras opciones guardan la escena como un paquete (el modelo como archivo USD, más un archivo de ajustes con los valores exactos de los materiales, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y versión la generaron. Vea [Elija qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como archivo USD, como archivo glTF (`.glb`) o como carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa del equipo para el archivo. Vea [Abrir la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de juego desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene al día en cada envío, en un solo sentido. Sus propias ediciones viven en una capa que CadCraft nunca escribe. Vea [Enviar la escena a un motor de juego](topic:render-unreal).
- **Motores desde complementos.** Un complemento puede agregar un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita su confirmación en Studio. Vea [Dibujar la imagen con otro programa](topic:render-other-program) y [Agregar un motor de render con un complemento](topic:render-engine-addons).
- **Describa la escena.** Dígale a su asistente conectado "atardecer, lluvia ligera, árboles de otoño, gente en la plaza" y ModelCraft la arma en un solo paso: el sol se mueve a la fecha y hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas, y los árboles y personas se colocan como objetos reales en etiquetas que puede ocultar, mover o borrar. La hora del día, la fecha o la estación, y el clima (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por separado, y una petición posterior cambia la misma escena. La niebla se ve en la imagen de alta calidad en la tarjeta gráfica; los otros motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

**Materiales**

- **Un material a partir de una foto.** Dele a ModelCraft una foto de una superficie (un muro, un piso, piedra) y crea un material en mosaico: la iluminación de la foto se aplana, los bordes se hacen para unirse, y un mapa de color, un mapa de rugosidad y un mapa de normales se calculan a partir de la imagen. Es procesamiento de imagen sencillo sobre su propia foto, sin ningún modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da el mejor mosaico; un patrón fuerte como el de los ladrillos puede dejar un fantasma suave donde se mezcla la unión.

**Superficies**

- **Superficies de forma libre.** El panel {{ui:Superficies}} crea curvas NURBS y superficies sin recortar: curvas que pasan por puntos, loft, reglada, extruir, revolución, barridos a lo largo de uno o dos rieles, superficies desde una red de curvas, parches desde cuatro aristas, emparejar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (hueco, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que pidió aparece en el panel Problemas con una corrección **Emparejar**. Las rayas de cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Vea [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Sitio y habitaciones**

- **Una foto de boceto sobre el terreno.** {{ui:Archivo}} › {{ui:Importar una foto de un boceto…}} convierte una foto de teléfono de un boceto a mano en aristas sobre el terreno, a la escala que indique: un grupo, con una etiqueta por cada color de pluma. El papel se encuentra y se endereza en su equipo, y nada se envía a ningún lugar. Vea [Modelar sobre un plano de sitio](topic:site-plan).
- **Amueblar una habitación.** Seleccione un piso y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. Muebles de recámara, sala, comedor, cocina, baño u oficina se colocan por reglas, contra los muros y libres de puertas y ventanas, en un grupo que puede quitar de una vez. Es un diseño predeterminado para que usted lo revise, no un diseño final. Vea [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión puede inclinar sus cortes hasta 60 grados, lo que da a las piezas más área de pegado. Los conectores quedan perpendiculares al corte. Vea [Dividir un modelo para impresión](topic:print-split).
- **La revisión de impresión en Problemas.** Los hallazgos de la revisión para impresión 3D aparecen en el panel Problemas con marcadores sobre el modelo, y Reparar los corrige desde ahí. Vea [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools).

**En todas las apps**

- **Idiomas.** La ayuda y las apps están en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los haya leído, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un trackpad, un lápiz digital, un mouse 3D, un control de juego y controles MIDI pueden manejar las apps, para todas o para una sola.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de la barra de herramientas ofrece Ajustar (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza hacia los lados en lugar de quitarle espacio al dibujo. Ajustar sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula compartida: categorías plegables, columnas de etiqueta y valor, y densidad Compacta. La aritmética escrita, como `2*450`, sigue funcionando.
- **Problemas.** El panel Problemas (el botón de advertencia en la barra de aplicación) es compartido por todas las apps. En ModelCraft contiene la revisión para impresión y las advertencias de continuidad de superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está en dónde. Vea [Modelar juntos con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden agregar motores de render, como se indicó arriba.
- **Conecte su IA.** Las pruebas de contrato de herramientas y las comprobaciones de las ocho apps pasan, con 454 herramientas en total. La conexión con un clic dentro de Studio, un conector alojado para asistentes de navegador, su propia clave dentro de Studio y un paquete publicado todavía no están prometidos. Las apps no contienen IA propia. Vea [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto, lo que podía dañar el archivo al importarlo. Ahora se lee bien, en ModelCraft y en las otras apps que leen DWG.
- **Tabletas en vertical.** El espacio sobrante de la cuadrícula va al lienzo, y el diseño de hojas empieza con 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también tiene el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes eran solo en inglés. Esto no se ha probado en todas las plataformas: avísenos si el idioma no cambia.

### Todavía no en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, haga clic derecho y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa, y la versión de iPad e iPhone no se recompiló para 0.8.1.
- Otro programa que dibuje la imagen sin un complemento de motor de render, cámaras panorámicas o estéreo, una imagen de cielo a través de otro programa, y el complemento que abre la escena de Unreal todavía no están disponibles. Los archivos se escriben; el complemento no se ha publicado y no se ha ejecutado en Unreal.
- Superficies de forma libre: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos vendrán después.
- Las imágenes de otros programas no son idénticas píxel por píxel a las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de 0.8.1 para el cambio de idioma en Studio no está probada en todas las plataformas.

Todo lo demás está en [Pendientes](topic:not-built-yet). Para la versión anterior, vea [Novedades de la versión 0.7](topic:whats-new-0-7).
