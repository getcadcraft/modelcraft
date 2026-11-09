---
title: Novedades en 0.8 y 0.8.1
summary: Una opción de motor de renderizado con archivos para otros programas, superficies de forma libre NURBS con continuidad medida, una escena que describe a su asistente, un material hecho a partir de una foto, una foto de boceto sobre el terreno, habitaciones amuebladas, cortes inclinados para impresión 3D y la verificación de impresión en el panel Problemas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de renderizado, motor, abrir en, usd, gltf, unreal, motor de complemento, nurbs, superficies, solevación, barrido, continuidad, g0, g1, g2, rayas cebra, step, iges, describir la escena, escena, clima, hora del día, estación, asistente, material a partir de una foto, foto, foto de boceto, amueblar, amueblar una habitación, corte inclinado, dividir, verificación de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de barra de herramientas, dwg, en vivo
from: e4989b17
---

Esto es lo que cambió en ModelCraft 0.8 (2026-11-01) y 0.8.1 (2026-11-02), en comparación con la 0.7. El cuadro de diálogo {{ui:Renderizar una imagen…}} ahora puede enviar la escena a otro programa, el panel {{ui:Superficies}} crea superficies suaves de forma libre, y un asistente que usted conecta puede configurar una escena completa con una sola oración.

## Nuevo

### Renderizado

- **Una opción de motor.** {{ui:Renderizar una imagen…}} tiene una lista **Motor** encima de Modo. Nuestros dos motores, Rápido y el Trazador de rutas, son los predeterminados y funcionan en todas partes. Las demás entradas guardan la escena como un paquete (el modelo como archivo USD, más un archivo de configuración con los valores exactos de material, las lámparas encendidas, el sol, el cielo, la exposición y la cámara) para llevarlo a otro programa. Una imagen dibujada por otro programa indica qué programa y qué versión la hizo. Consulte [Elija qué programa dibuja la imagen](topic:render-engines).
- **Abrir en otro programa.** La lista Motor puede guardar la escena como archivo USD, como archivo glTF (`.glb`) o como carpeta de proyecto de Unreal (`.zip`), en el navegador y en CadCraft Studio. En Studio también puede iniciar usdview o el programa del equipo para el archivo. Consulte [Abra la escena en otro programa](topic:render-open-in).
- **Enviar a un motor de videojuegos desde Studio.** Studio escribe la escena en un proyecto de Unreal Engine y la mantiene sincronizada en cada envío, solo en un sentido. Sus propias ediciones viven en una capa que CadCraft nunca escribe. Consulte [Envíe la escena a un motor de videojuegos](topic:render-unreal).
- **Motores de complementos.** Un complemento puede agregar un motor a la lista. Uno escrito en JavaScript dibuja en el navegador y en Studio; uno que ejecuta un programa necesita que usted lo confirme en Studio. Consulte [Dibuje la imagen con otro programa](topic:render-other-program) y [Agregue un motor de renderizado con un complemento](topic:render-engine-addons).
- **Diga la escena.** Dígale a su asistente conectado "anochecer, lluvia ligera, árboles de otoño, personas en la plaza" y ModelCraft la configura en un solo paso: el sol se mueve a la fecha y hora para que las sombras sigan, el cielo cambia, aparecen superficies mojadas, y los árboles y las personas se colocan como objetos reales en etiquetas que puede ocultar, mover o eliminar. La hora del día, la fecha o la estación, y el clima (despejado, nublado, niebla, lluvia ligera, lluvia, tormenta) también funcionan por separado, y una solicitud posterior cambia la misma escena. La niebla se muestra en la imagen de alta calidad en la tarjeta gráfica; los demás motores muestran el cielo, la luz y las superficies mojadas. La lluvia no se dibuja como trazos que caen.

### Materiales

- **Un material a partir de una foto.** Dé a ModelCraft una foto de una superficie (un muro, un piso, piedra) y crea un material en mosaico: la iluminación de la foto se aplana, los bordes se unen y un mapa de color, un mapa de rugosidad y un mapa de normales se calculan a partir de la imagen. Es un procesamiento de imagen sencillo sobre su propia foto, sin modelo entrenado. La rugosidad es una estimación. Una foto plana, cuadrada y de frente da el mejor mosaico; un patrón fuerte, como ladrillos, puede mostrar un halo suave donde se mezcla la unión.

### Superficies

- **Superficies de forma libre.** El panel {{ui:Superficies}} crea curvas y superficies NURBS sin recortar: curvas por puntos, solevación, reglada, extrusión, revolución, barridos a lo largo de uno o dos rieles, superficies a partir de una red de curvas, parches a partir de cuatro aristas, emparejar y mezclar. Cada arista compartida se mide como G0, G1 o G2 (separación, ángulo, salto de curvatura) sobre las superficies exactas, y una arista peor de lo que usted pidió aparece en el panel Problemas con una corrección **Emparejar**. Las rayas cebra y los colores de curvatura se dibujan a partir de las superficies exactas. Los archivos STEP e IGES salen y entran. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

### Terreno y habitaciones

- **Una foto de boceto sobre el terreno.** {{ui:Archivo}} › {{ui:Importar una foto de un boceto…}} convierte una foto con el teléfono de un boceto a mano en aristas sobre el terreno, a la escala que indique: un grupo, con una etiqueta para cada color de bolígrafo. El papel se detecta y se endereza en su equipo, y nada se envía a ningún lado. Consulte [Modelar sobre un plano de sitio](topic:site-plan).
- **Amueblar una habitación.** Seleccione un piso y use {{ui:Organizar}} › {{ui:Amueblar una habitación…}}. El mobiliario de dormitorio, sala, comedor, cocina, baño u oficina se coloca según reglas, contra los muros y sin estorbar puertas ni ventanas, en un grupo que puede retirar en un solo paso. Es una distribución predeterminada para que usted la revise, no un diseño. Consulte [Biblioteca de inicio](topic:starter).

### Impresión 3D

- **Cortes inclinados.** Dividir para impresión puede inclinar sus cortes hasta 60 grados, lo que da a las piezas más área para pegar. Los conectores quedan perpendiculares al corte. Consulte [Divida un modelo para imprimir](topic:print-split).
- **La verificación de impresión en Problemas.** Los hallazgos de la verificación de impresión 3D aparecen en el panel Problemas con marcadores en el modelo, y Reparar los corrige desde ahí. Consulte [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

### En todas las aplicaciones

- **Idiomas.** La ayuda y las aplicaciones están disponibles en 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los haya revisado, y los temas de ayuda pueden seguir en inglés.
- **Dispositivos de entrada.** Un panel táctil, un lápiz, un ratón 3D, un control de videojuegos y los controles MIDI pueden manejar las aplicaciones, para todas o para una sola.
- **Filas de barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de barra de herramientas define Ajustar (como antes), 2 filas o 1 fila. Una barra que no cabe se desplaza hacia los lados en lugar de quitar espacio al dibujo. Ajustar sigue siendo el predeterminado.
- **Cuadrícula de propiedades.** Los campos de lámparas de ModelCraft usan la cuadrícula compartida: categorías plegables, columnas de etiqueta y valor, y densidad Compacta. La aritmética escrita, como `2*450`, sigue funcionando.
- **Problemas.** El panel Problemas (el botón de advertencia en la barra de aplicaciones) es compartido por todas las aplicaciones. En ModelCraft contiene la verificación de impresión y las advertencias de continuidad de superficies.
- **En vivo.** Una sesión de Live TeamWork muestra quién está en dónde. Consulte [Modele juntos con Live TeamWork](topic:work-live).
- **Complementos.** Los complementos pueden agregar motores de renderizado, como se indicó antes.
- **Conecte su IA.** Las pruebas de herramientas y las verificaciones de las ocho aplicaciones se cumplen, con 454 herramientas en total. La conexión con un clic dentro de Studio, un conector alojado para asistentes de navegador, su propia clave dentro de Studio y un paquete publicado todavía no están prometidos. Las aplicaciones no contienen IA propia. Consulte [Use ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto, lo que podía dañar el archivo al importarlo. Ahora se lee correctamente, en ModelCraft y en las demás aplicaciones que leen DWG.
- **Tabletas en vertical.** El alto sobrante de la cuadrícula va al lienzo, y la presentación de hoja comienza con 760 píxeles de ancho o menos. La hoja de estilos de ModelCraft también tiene el cambio.
- **Idioma en Studio.** CadCraft Studio y las ediciones empaquetadas pueden cambiar de idioma mientras se ejecutan; antes solo estaban en inglés. Esto aún no se ha probado en todas las plataformas: díganos si el idioma no cambia.

## Aún no en esta versión

- **Sin firma de código.** Windows puede mostrar SmartScreen: elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En un Mac, haga clic derecho y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa, y la versión para iPad e iPhone no se recompiló para 0.8.1.
- Otro programa dibujando la imagen sin un complemento de motor de renderizado, cámaras panorámicas o estéreo y una imagen de cielo a través de otro programa, y el complemento que abre la escena de Unreal todavía no están disponibles. Los archivos se escriben; el complemento no está publicado y no se ha ejecutado en Unreal.
- Superficies de forma libre: G3 y clase A no se miden ni se garantizan, y el recorte y los sólidos vendrán después.
- Las imágenes de otros programas no son píxel por píxel como las nuestras: solo coinciden la cámara, el sol, las lámparas y la exposición.
- La corrección de la versión 0.8.1 para el cambio de idioma en Studio no está probada en todas las plataformas.

Todo lo demás está en [Aún no construido](topic:not-built-yet). Para la versión anterior, consulte [Novedades en 0.7](topic:whats-new-0-7).
