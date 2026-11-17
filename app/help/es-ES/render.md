---
title: Renderizar una imagen del modelo
summary: Haga una imagen que parezca luz de día: cielo, sol según el lugar y la fecha de su modelo, sombras suaves, aspectos de vidrio y metal, y después guárdela como PNG.
keywords: render, renderizar, preajuste, preajustes, preajuste de escena, interior, exterior, vista de sección, noche, un clic, renderizado, trazado de trayectorias, trazado de rayos, iluminación global, reflexiones, refracción, alta calidad, foto, fotorrealista, realista, imagen, png, fija, cielo, sol, luz de día, sombras, sombras suaves, oclusión ambiental, vidrio, metal, brillante, materiales, exposición, brillo, nublado, atardecer, estudio, presentación, niebla, neblina, bruma, humo, nube, volumen, haces de luz, rayos de sol, cáusticas, muestreo adaptativo, ruido
from: 517ba4d3
---

{{ui:Renderizar una imagen…}} hace una imagen de la vista que parece luz de día y no un dibujo: un cielo, el sol donde lo sitúan el lugar y la fecha de su modelo, sombras suaves, luz de todo el cielo que oscurece esquinas y huecos, y colores que pueden parecer vidrio, metal o pintura brillante. El modelo no se modifica.

## Renderizar la vista

1. Prepare la vista como quiera que salga la imagen: oriente, acerque, elija una [escena](topic:scenes), oculte lo que no debe verse. La imagen usa la cámara propia de la vista.
2. Pulse {{ui:Exportar}} en el grupo {{ui:Archivo}}, y luego {{ui:Renderizar una imagen…}}.
3. Elija una {{ui:Escena}} si la pulsada no es la que quiere (vea [Escenas predefinidas](topic:render#scene-presets-a-good-picture-in-one-click)), elija el {{ui:Tamaño}} y pulse {{ui:Renderizar}}.

   La imagen se va completando mientras se renderiza y se suaviza con cada pasada. {{ui:Detener}} (o {{key:Esc}}) la termina antes y conserva la imagen obtenida hasta ese momento.

4. Pulse {{ui:Guardar}} para descargarla (un PNG, salvo que {{ui:Guardar como}} indique otra cosa).

:::tip
Empiece con {{ui:Preliminar}} en {{ui:El tamaño de la vista}} para comprobar la cámara y el aspecto, y después renderice con {{ui:Buena}} o {{ui:Mejor}} a un tamaño mayor para la imagen final.
:::

## Escenas predefinidas: una buena imagen en un clic

En la parte superior del cuadro hay cuatro botones de {{ui:Escena}}. Cada uno ajusta de una vez el cielo, el brillo, el suelo, las líneas de borde, la calidad y el sol, así que no hay nada que aprender antes de la primera imagen. Pulse uno y después {{ui:Renderizar}}.

| Escena | Qué ajusta | Para qué sirve |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, el sol propio del modelo, suelo activado | El edificio desde fuera |
| {{ui:Interior}} | Cielo nublado (luz uniforme, sin manchas de sol duras), medio paso más brillante | Una vista desde dentro de una habitación |
| {{ui:Vista de sección}} | Estudio blanco, sin suelo, líneas de borde en el render rápido | Un modelo cortado por una sección |
| {{ui:Noche}} | El sol bajo el horizonte (medianoche en pleno invierno para el hemisferio del lugar), un paso más brillante | Lámparas que iluminan el modelo. Sin lámparas, la imagen sale oscura |

- {{ui:Elegir para esta vista}} elige por usted: {{ui:Vista de sección}} cuando hay un corte de sección activo, {{ui:Interior}} cuando la cámara está dentro del modelo, y {{ui:Exterior}} en los demás casos. La primera vez que abre el cuadro empieza así por sí solo.
- Todos los ajustes siguen debajo y se pueden cambiar. Cuando cambia uno que la escena fija, ningún botón queda pulsado y la línea bajo los botones indica que los ajustes son suyos. Pulse la escena de nuevo para devolverle sus valores.
- Una escena no toca el motor, el modo, el tamaño, los materiales, la cámara ni las lámparas.

:::note
Las escenas dan los mismos valores en ModelCraft y en BimCraft. El aspecto final de la imagen depende de su modelo y de su tarjeta gráfica.
:::

## Ajustes

| Ajuste | Qué hace |
|---|---|
| {{ui:Tamaño}} | El tamaño de la vista, el doble del tamaño de la vista, Full HD, 4K o cuadrado. Los tamaños fijos mantienen la cámara de la vista y muestran más o menos a los lados |
| {{ui:Modo}} | {{ui:Rápido}}, o {{ui:Alta calidad (trazado de trayectorias)}} (abajo) con su {{ui:Límite de tiempo}} |
| {{ui:Calidad}} | Cuántas pasadas (o, en alta calidad, muestras) se promedian: {{ui:Preliminar}} 16, {{ui:Buena}} 64, {{ui:Mejor}} 256. Más pasadas dan sombras y bordes más suaves, y tardan más |
| {{ui:Celeste}} | {{ui:Cielo despejado}}, {{ui:Nublado}} (luz suave, sombras tenues), {{ui:Atardecer}} (luz baja y cálida) o {{ui:Estudio blanco}} (fondo blanco liso) |
| {{ui:Sol}} | El sol sale de la fecha, la hora y el lugar en {{ui:Estilo}} › sol. Marque {{ui:Usar otra fecha y hora para esta imagen}} para probar otra hora sin cambiar el estilo del modelo |
| {{ui:Brillo}} | Más claro u oscuro, en pasos (stops) |
| {{ui:Suelo bajo el modelo}} | Un suelo que recibe las sombras y se difumina en el horizonte. Desactívelo para un modelo que flota |
| {{ui:Dibujar aristas}} | Dibuja las aristas del modelo finas sobre la imagen, para un aspecto de dibujo |

Cuando el sol está bajo el horizonte a la hora elegida, es de noche: el cielo se oscurece y las [lámparas](topic:lights) del modelo lo iluminan. El cuadro lo indica.

Los ajustes se guardan en el archivo `.modelcraft`, así que la siguiente imagen del mismo modelo empieza donde lo dejó.

## Hacer que los colores parezcan vidrio o metal

En {{ui:Materiales}}, cada color en pantalla tiene un aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidrio}} o {{ui:Vidrio esmerilado}}. {{ui:Caras sin pintar}} son las caras que no tienen color propio.

Para que las ventanas sean de vidrio, [pinte](topic:paint) los cristales con un color y ajuste ese color a {{ui:Vidrio}}. El vidrio deja ver el cielo y lo que hay detrás, tintado por su color, y refleja el cielo.

:::note
En el modo {{ui:Rápido}}, el vidrio y el metal reflejan el cielo, no el resto del modelo, y la luz no se curva al atravesar el vidrio. El modo {{ui:Alta calidad (trazado de trayectorias)}} de más abajo hace ambas cosas.
:::

## Alta calidad

Elija {{ui:Modo}} › {{ui:Alta calidad (trazado de trayectorias)}} para una imagen que sigue la luz tal como la ve una cámara:

- la luz rebota entre superficies, así que una habitación iluminada por una ventana o por una lámpara queda iluminada por todos lados, y los colores se transmiten a sus vecinos;
- el vidrio es vidrio real: la luz se curva al atravesarlo y refleja el modelo;
- los metales y las superficies pulidas reflejan el resto del modelo;
- los paneles de luz iluminan como paneles, con sombras suaves.

Es mucho más lento que {{ui:Rápido}}: cada pasada vuelve a trazar la luz de cada píxel. La imagen empieza con grano y se aclara a medida que se suman las muestras, así que empiece en pequeño ({{ui:El tamaño de la vista}}, {{ui:Preliminar}}) y elija un {{ui:Límite de tiempo}}: cuando se agote, se conserva la imagen obtenida hasta ese momento. {{ui:Detener}} también la conserva. La primera pasada espera mientras el navegador prepara el trazador de trayectorias.

Donde el navegador tiene WebGPU, el trazador de trayectorias es propio de CadCraft y se ejecuta en la tarjeta gráfica; la línea bajo la imagen dice {{ui:Trazado de trayectorias en la tarjeta gráfica (WebGPU)}}. Tras {{ui:Detener}} o el límite de tiempo, {{ui:Reanudar}} continúa con la misma imagen hasta completar sus muestras; cambiar un ajuste o pulsar {{ui:Renderizar}} de nuevo empieza de cero. Sin WebGPU, la imagen se traza con WebGL (la línea lo indica) y {{ui:Reanudar}} no se ofrece.

:::linux
Firefox y la mayoría de configuraciones de Chrome en Linux todavía no tienen WebGPU, así que la alta calidad usa WebGL allí.
:::

En este modo no se dibujan aristas, las texturas de la biblioteca muestran su color y su rugosidad pero no sus relieves (un [material hecho con nodos](topic:shading#in-high-quality-pictures) muestra su normal y sus relieves), y el corte de sección se hace sobre el modelo antes de empezar la imagen.

{{ui:Reducir ruido (elimina el grano que queda tras las muestras)}} está activado por defecto: cuando la imagen termina, o se detiene, el grano que queda se elimina con una red neuronal creada para ello (la red publicada de Intel Open Image Denoise, ejecutada en su propio equipo: en la tarjeta gráfica o, si no, en el procesador). Una imagen con pocas muestras sale limpia; {{ui:Mostrar}} › {{ui:La imagen antes de reducir el ruido}} la muestra tal como se renderizó.

## Renderizar en la vista

El espacio de trabajo {{ui:Renderizar}} ejecuta el trazador de trayectorias en la propia vista: oriente, edite el modelo o cambie una luz, y empieza de nuevo al momento. {{ui:Región}}: arrastre un rectángulo y solo él se renderiza; {{ui:Vista completa}} vuelve atrás. {{ui:Enfoque}}: pulse lo que debe quedar nítido, y la profundidad de campo enfoca allí. {{ui:Detalle}} fija cuántos píxeles de la vista se renderizan (menos es más rápido). {{ui:Pausa}} detiene y continúa. Necesita WebGPU: sin él, el espacio de trabajo lo indica, y {{ui:Exportar}} › {{ui:Renderizar una imagen…}} sigue funcionando.

## Cielos y perfiles de luz en la tarjeta gráfica

Con WebGPU, la alta calidad tiene dos cielos más:

- {{ui:Cielo físico}} calcula la luz del día a partir de la altura del sol: un azul intenso en el cénit, una franja pálida en el horizonte y un sol que se vuelve más cálido y más tenue a medida que baja. {{ui:Turbiedad}} va de un día muy despejado (2) a uno brumoso (10).
- {{ui:Imagen de cielo (HDRI)}} ilumina el modelo con una panorámica de un lugar real. {{ui:Elegir una imagen…}} toma un archivo `.hdr` o `.exr` equirectangular; {{ui:Girar}} lo gira alrededor del modelo, y {{ui:Brillo de la imagen}} lo hace más claro u oscuro. La imagen trae su propio sol, así que no se suma el sol del modelo. Solo se conserva mientras la página está abierta: al reabrirla, vuelva a elegirla.

Cada lámpara de la lista {{ui:Lámparas}} puede tomar un perfil de luz del fabricante: {{ui:Perfil IES…}} lee un archivo IES (LM-63), y la lámpara proyecta su luz como lo hace esa luminaria (un downlight estrecho, un bañador de pared). Todas las lámparas con ese nombre lo usan, y cada una conserva su propio brillo. Pulse el nombre del perfil para dejar de usarlo.

Las ventanas de vidrio transparente ayudan a que la luz del cielo llegue a una habitación, así que las imágenes de interior bajo un cielo se aclaran antes.

Los modos {{ui:Rápido}} y el trazador de trayectorias con WebGL muestran {{ui:Cielo físico}} y {{ui:Imagen de cielo (HDRI)}} como un cielo despejado, e ignoran los perfiles de luz.

## La cámara

{{ui:Cámara}} prepara la imagen como una fotografía:

- {{ui:Exposición}}: mantenga el {{ui:Control deslizante de brillo}}, o elija {{ui:Ajustes de cámara}} y fije la {{ui:Apertura (número f)}}, la {{ui:Velocidad de obturación}} y el {{ui:ISO}} como en una cámara; el EV junto a ellos es el valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; una escena más oscura pide una apertura más abierta, un obturador más lento o un ISO más alto. Esto funciona en todos los modos.
- {{ui:Profundidad de campo}} desenfoca lo que está más cerca o más lejos de la {{ui:Distancia de enfoque (m)}}, como lo haría un objetivo con ese número f (déjelo vacío para enfocar lo que está en el centro de la vista); {{ui:Forma del diafragma}} da a los brillos desenfocados una forma redonda o de láminas.
- {{ui:Perspectiva de dos puntos (las líneas verticales siguen verticales)}} nivela la cámara y desplaza la imagen, como lo hace un objetivo de desplazamiento arquitectónico, de modo que las paredes no se inclinen al mirar hacia arriba o hacia abajo a un edificio.
- {{ui:Balance de blancos}} fija qué color de luz se ve como blanco: más bajo (por ejemplo 3000 K) para la luz cálida de las lámparas, más alto para la sombra y los días nublados.
- {{ui:Proyección}}: {{ui:Panorámica de 360°}} crea una imagen 2:1 de todo lo que rodea la cámara, para visores de panorámicas; {{ui:Panorámica estereoscópica de 360°}} apila una panorámica para el ojo izquierdo y otra para el derecho, para cascos; {{ui:Mapa cúbico (6 caras)}} crea seis vistas cuadradas en una cuadrícula de 3 × 2. La anchura viene de {{ui:Tamaño}}.

La proyección, la profundidad de campo, la perspectiva de dos puntos y el balance de blancos necesitan el trazador de trayectorias en la tarjeta gráfica (WebGPU), así que solo aparecen en {{ui:Alta calidad}}.

## Terminar la imagen

{{ui:Imagen}} aplica a la imagen de alta calidad un tratamiento como el de una fotografía, y cada control cambia la imagen terminada al momento, sin renderizar de nuevo:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES filmic}} (la imagen como antes), {{ui:AgX}} (más suave, conserva el color en luz muy brillante), {{ui:Filmic}} (una curva de película suave) o {{ui:Estándar}} (simple: la luz muy brillante se recorta a blanco).
- {{ui:Contraste}} y {{ui:Compresión de altas luces}} (recupera detalle en las partes muy brillantes).
- {{ui:Resplandor}} (un brillo suave alrededor de la luz intensa), {{ui:Deslumbramiento}} con sus {{ui:Destellos de deslumbramiento}} (rayos en forma de estrella desde los puntos más brillantes) y {{ui:Viñeteado}} (esquinas más oscuras).
- {{ui:Tabla de color (.cube)…}} aplica una gradación de color desde un archivo `.cube`, con su {{ui:Intensidad de la tabla de color}}; como una imagen de cielo, solo se conserva mientras la página está abierta.

## Guardar la imagen

{{ui:Guardar como}} junto a {{ui:Guardar}} elige el archivo: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para compartir (JPEG y WebP solo donde el navegador puede escribirlos), y después de un render de alta calidad en la tarjeta gráfica también:

- {{ui:PNG, 16 bits}}: la imagen graduada, con pasos más finos entre tonos, para imprimir o seguir editando.
- {{ui:EXR, todas las capas (coma flotante de 32 bits)}}: la imagen tal como se renderizó (luz lineal, sin gradación), con cada elemento de render y cada grupo de luces como una capa propia, para programas de composición.
- {{ui:Archivo de render (.ccrender, para corregir más tarde)}}: todo lo que el cuadro necesita para volver a mezclar y graduar la imagen. {{ui:Abrir un archivo de render…}} lo recupera con su mezcla y su gradación, sin renderizar.

## Mezclar las luces después del render

Active {{ui:Mezcla de luces (cambie el color y el brillo de cada luz después del render)}} antes de pulsar {{ui:Renderizar}}. Cuando la imagen termina (o se detiene), {{ui:Mezclar la imagen}} enumera sus luces en grupos: el cielo, el sol y las lámparas por nombre (todas las lámparas con el mismo nombre forman un grupo). Desactive un grupo, dele un color o hágalo más claro u oscuro, y la imagen cambia al momento, sin renderizar de nuevo. {{ui:Guardar mezcla}} guarda la mezcla con un nombre para elegirla más tarde; {{ui:Como se renderizó}} vuelve a la imagen tal como se hizo. {{ui:Guardar}} guarda la imagen mezclada.

{{ui:Elementos de render (albedo, normales, profundidad, difuso, especular, transmisión, emisión, IDs)}} conserva también las partes de la imagen. {{ui:Mostrar}} cambia la vista a una de ellas: los colores de superficie (albedo), las normales, la profundidad, la luz difusa, especular y transmitida (cada una directa e indirecta), lo que brilla y el cielo, y un color por objeto o por material para crear máscaras.

Ambas opciones guardan capas adicionales en la tarjeta gráfica. En tamaños grandes, la tarjeta puede no tener espacio: el cuadro lo indica, y un tamaño menor funciona.

## La cola de render

Tras una configuración de alta calidad, {{ui:Añadir esta imagen a la cola}} dentro de {{ui:Cola de render}} guarda la imagen tal como está configurada ahora; el {{ui:Añadir esta animación a la cola}} del cuadro de video hace lo mismo con una animación completa, trazada fotograma a fotograma. {{ui:Iniciar la cola}} los renderiza uno tras otro en este equipo, y {{ui:Guardar}} junto a cada uno terminado lo descarga. Al cerrar la página, la cola se conserva: abra el mismo modelo y continúa donde se detuvo. La cola necesita WebGPU.

## Niebla, humo, ruido y cáusticas

Estos se encuentran en {{ui:Niebla, humo y ruido}} y funcionan en {{ui:Alta calidad}} en la tarjeta gráfica; los demás motores no los incluyen.

- {{ui:Niebla y bruma}} llena el aire hasta una altura con una neblina que iluminan el sol, el cielo y las lámparas. {{ui:Hasta dónde se ve, en metros}} fija lo espesa que es (unos 100 m es una bruma ligera, 20 m una niebla densa), {{ui:Altura de la niebla sobre el suelo, en metros}} es donde termina, y {{ui:Haces de luz}} indica cuánto brilla la neblina hacia la luz. La luz del sol sale de la niebla por su parte superior, así que donde el sol entra por una ventana o entre edificios se ve en forma de haces de luz.
- {{ui:Humo o nube}} añade un volumen de humo o nube iluminado como la niebla. {{ui:Tipo}} es una {{ui:Nube}}, una {{ui:Columna de humo}} o {{ui:Desde un archivo de volumen (.ccvol)}}, el formato de cuadrícula propio de CadCraft. {{ui:Detalle}} y {{ui:Variación}} modifican una nube o columna creada; {{ui:Tamaño de su lado más largo, en metros (0 = el tamaño del modelo)}}, {{ui:Desplazar X (m)}}, {{ui:Desplazar Y (m)}}, {{ui:Desplazar Z (m)}} y {{ui:Girar}} la colocan (empieza en el centro del modelo); {{ui:Grosor}} la hace más densa, {{ui:Brillo hacia delante}} la hace más brillante hacia la luz, y {{ui:Color}} la tiñe. Un archivo de volumen solo se conserva mientras la página está abierta, como una imagen de cielo.
- {{ui:Parar antes donde la imagen ya está limpia (muestreo adaptativo)}} no da más muestras a los píxeles que ya se han asentado, así que el resto de la imagen termina antes. {{ui:Ruido aceptable}} es cuánto grano queda cuando un píxel se detiene. La línea bajo la imagen indica cuántas muestras recibió un píxel de media.
- {{ui:Cáusticas (luz desviada por el vidrio o reflejada por espejos)}} traza la luz de las lámparas y del sol, así que la mancha brillante bajo una bola de vidrio, o la luz de un espejo sobre una pared, sale limpia en lugar de granulada. Está desactivada mientras la niebla, el humo, {{ui:Mezclar las luces después del render}} o los elementos de render están activos, y está pensada para imágenes, no para panorámicas de 360°, animaciones ni el espacio de trabajo Renderizar.

## Cuánto tarda

La imagen se hace en su propio equipo, con su tarjeta gráfica; no se sube nada. Cuánto tarda depende de esa tarjeta. El tiempo crece con las pasadas y los píxeles: {{ui:Mejor}} tiene 16 veces las pasadas de {{ui:Preliminar}}, y una imagen 4K tiene unas cuatro veces los píxeles de Full HD. Un equipo sin tarjeta gráfica también renderiza, pero más despacio.

:::note
Si el cuadro dice que el navegador no puede renderizar imágenes, el navegador no tiene WebGL 2. Actualícelo, o active la aceleración por hardware en sus ajustes.
:::
