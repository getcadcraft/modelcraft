---
title: Novedades en 0.8 y 0.8.1
summary: Una elección de motor de render con archivos para otros programas, superficies libres NURBS con continuidad medida, una escena que describe a su asistente, un material hecho a partir de una foto, una foto de croquis sobre el terreno, habitaciones amuebladas, cortes inclinados para impresión 3D y la comprobación de impresión en el panel Problemas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor de complemento, nurbs, superficies, loft, barrido, continuidad, g0, g1, g2, cebra, step, iges, describir la escena, escena, clima, hora del día, estación, asistente, material a partir de una foto, foto, foto de croquis, amueblar, amueblar una habitación, inclinado, corte inclinado, dividir, comprobación de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg, en vivo
from: e4989b17
---

Estos son los cambios de ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), respecto a la 0.7. El cuadro {{ui:Renderizar una imagen…}} ahora puede enviar la escena a otro programa, el panel {{ui:Superficies}} crea superficies libres suaves, y un asistente que usted conecte puede definir una escena completa con una sola frase.

## Novedades

### Renderizado

- **Una elección de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de Modo. Nuestros dos motores propios, Fast y Path tracer, son los predeterminados y funcionan en todas partes. Las demás entradas guardan la escena como un paquete (el modelo como archivo USD, más un archivo de ajustes con los valores exactos de los materiales, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y qué versión la hicieron. Consulte [Elija qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como archivo USD, como archivo glTF (`.glb`) o como carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa propio del equipo para el archivo. Consulte [Abra la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de juegos desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene al día en cada envío, en un solo sentido. Sus propias modificaciones están en una capa que CadCraft nunca escribe. Consulte [Envíe la escena a un motor de juegos](topic:render-unreal).
- **Motores de los complementos.** Un complemento puede añadir un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita su confirmación en Studio. Consulte [Dibuje la imagen con otro programa](topic:render-other-program) y [Añada un motor de render con un complemento](topic:render-engine-addons).
- **Describir la escena.** Diga a su asistente conectado «atardecer, lluvia ligera, árboles de otoño, personas en la plaza» y ModelCraft la prepara en un solo paso: el sol se mueve a la fecha y la hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas y los árboles y las personas se colocan como objetos reales con etiquetas que puede ocultar, mover o borrar. La hora del día, la fecha o la estación, y el clima (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por separado, y una petición posterior cambia la misma escena. La niebla se ve en la imagen de alta calidad en la tarjeta gráfica; los demás motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

### Materiales

- **Un material a partir de una foto.** Dé a ModelCraft una foto de una superficie (una pared, un suelo, piedra) y la convierte en un material de azulejo: la iluminación de la foto se iguala, los bordes se hacen coincidir y un mapa de color, un mapa de rugosidad y un mapa de normales se calculan a partir de la imagen. Es un simple tratamiento de imagen de su propia foto, sin modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da el mejor azulejo; un patrón fuerte, como los ladrillos, puede mostrar un fantasma suave donde se mezcla la unión.

### Superficies

- **Superficies libres.** El panel {{ui:Superficies}} crea curvas y superficies NURBS sin recortar: curvas que pasan por puntos, loft, reglada, extrusión, revolución, barridos a lo largo de uno o dos rieles, superficies a partir de una red de curvas, parches a partir de cuatro aristas, igualar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (hueco, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que pidió aparece en el panel Problemas con una corrección **Igualar**. Las rayas de cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Consulte [Superficies libres (NURBS)](topic:nurbs-surfaces).

### Terreno y habitaciones

- **Una foto de croquis sobre el terreno.** {{ui:Archivo}} › {{ui:Importar la foto de un croquis…}} convierte una foto con el teléfono de un croquis a mano en aristas sobre el terreno a la escala que indique: un solo grupo, con una etiqueta para cada color de bolígrafo. El papel se detecta y se endereza en su equipo, y no se envía nada a ningún sitio. Consulte [Modele sobre un plano de emplazamiento](topic:site-plan).
- **Amueblar una habitación.** Seleccione una planta y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. El mobiliario de dormitorio, salón, comedor, cocina, baño u oficina se coloca según reglas, contra las paredes y sin tapar puertas ni ventanas, en un grupo que puede retirar de una vez. Es una disposición predeterminada para que la revise, no un diseño. Consulte [Biblioteca inicial](topic:starter).

### Impresión 3D

- **Cortes inclinados.** Dividir para imprimir puede inclinar sus cortes hasta 60 grados, lo que da a las piezas más superficie para encolar. Los conectores quedan perpendiculares al corte. Consulte [Divida un modelo para imprimir](topic:print-split).
- **La comprobación de impresión en Problemas.** Los resultados de la comprobación de impresión 3D aparecen en el panel Problemas con marcadores sobre el modelo, y Reparar los corrige desde allí. Consulte [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

### En todas las aplicaciones

- **Idiomas.** La ayuda y las aplicaciones están en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son borradores automáticos hasta que los haya leído un hablante nativo, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un panel táctil, un lápiz, un ratón 3D, un mando de juego y los controles MIDI pueden manejar las aplicaciones, para todas o solo para una.
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de la barra de herramientas establece Ajustar (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza hacia los lados en lugar de quitar espacio al dibujo. Ajustar sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula común: categorías plegables, columnas de etiqueta y valor, y Densidad compacta. Las operaciones escritas como `2*450` siguen funcionando.
- **Problemas.** El panel Problemas (el botón de advertencia de la barra de aplicación) es común a todas las aplicaciones. En ModelCraft contiene la comprobación de impresión y las advertencias de continuidad de las superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está en cada lugar. Consulte [Modele juntos con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden añadir motores de render, como se ha indicado antes.
- **Conecte su IA.** La especificación de herramientas y las comprobaciones de las ocho aplicaciones pasan, con 454 herramientas en total. La conexión con un clic dentro de Studio, un conector alojado para asistentes de navegador, su propia clave dentro de Studio y un paquete publicado todavía no están previstos. Las aplicaciones no contienen ninguna IA propia. Consulte [Use ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía con un tipo incorrecto, lo que podía estropear el archivo al importarlo. Ahora se lee correctamente, en ModelCraft y en las demás aplicaciones que leen DWG.
- **Tabletas en vertical.** La altura sobrante de la cuadrícula va al lienzo, y el diseño de la hoja empieza a 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también incluye el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Esto todavía no se ha probado en todas las plataformas: indíquenos si el idioma no cambia.

## Todavía no incluido en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, haga clic con el botón derecho y elija {{ui:Abrir}}. Las versiones para tienda están en pausa, y la versión para iPad e iPhone no se recompiló para 0.8.1.
- Que otro programa dibuje la imagen sin un complemento de motor de render, las cámaras panorámicas o estéreo, y un cielo en imagen mediante otro programa, así como el complemento que abre la escena en Unreal, todavía no están disponibles. Los archivos se escriben; el complemento no se ha publicado y no se ha ejecutado en Unreal.
- Superficies libres: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos llegarán más adelante.
- Las imágenes de otros programas no son píxel a píxel iguales a las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de la versión 0.8.1 para el cambio de idioma en Studio no está probada en todas las plataformas.

Lo demás está en [Aún no construido](topic:not-built-yet). Para la versión anterior, consulte [Novedades en 0.7](topic:whats-new-0-7).
