---
title: Renderizar una imagen del modelo
summary: Cree una imagen con apariencia de luz de día: cielo, sol según el lugar y la fecha de su modelo, sombras suaves, apariencias de vidrio y metal, y después guárdela como PNG.
keywords: renderizar, preajuste, preajustes, preajuste de escena, interior, exterior, vista de sección, noche, un clic, render, trazado de rayos, trazado de trayectoria, iluminación global, reflejos, refracción, alta calidad, foto, fotorrealista, realista, imagen, png, fija, cielo, sol, luz de día, sombras, sombras suaves, oclusión ambiental, vidrio, metal, brillante, materiales, exposición, brillo, nublado, atardecer, estudio, presentación, niebla, neblina, bruma, humo, nube, volumen, haces de luz, cáusticas, muestreo adaptativo, ruido
from: 517ba4d3
---

{{ui:Renderizar una imagen…}} crea una imagen de la vista con apariencia de luz de día en lugar de un dibujo: un cielo, el sol donde lo ubican el lugar y la fecha de su modelo, sombras suaves, luz de todo el cielo que oscurece esquinas y huecos, y colores que pueden verse como vidrio, metal o pintura brillante. El modelo no se modifica.

## Renderizar la vista

1. Prepare la vista como quiera la imagen: oriente, haga zoom, elija una [escena](topic:scenes), oculte lo que no debe aparecer. La imagen usa la cámara propia de la vista.
2. Haga clic en {{ui:Exportar}} en el grupo {{ui:Archivo}} y luego en {{ui:Renderizar una imagen…}}.
3. Elija una {{ui:Escena}} si la que está seleccionada no es la que quiere (véase [Preajustes de escena](topic:render#scene-presets-a-good-picture-in-one-click)), elija el {{ui:Tamaño}} y haga clic en {{ui:Renderizar}}.

   La imagen se completa mientras se renderiza y se suaviza con cada pasada. {{ui:Detener}} (o {{key:Esc}}) la termina antes y conserva la imagen hasta ese momento.

4. Haga clic en {{ui:Guardar}} para descargarla (un PNG, salvo que {{ui:Guardar como}} indique otra cosa).

:::tip
Empiece con {{ui:Preliminar}} en {{ui:El tamaño de la vista}} para revisar la cámara y el aspecto; luego renderice con {{ui:Buena}} o {{ui:Mejor}} en un tamaño mayor para la imagen final.
:::

## Preajustes de escena: una buena imagen en un clic

En la parte superior del cuadro hay cuatro botones de {{ui:Escena}}. Cada uno fija el cielo, el brillo, el suelo, las líneas de borde, la calidad y el sol en un clic, así que no hay nada que aprender antes de la primera imagen. Haga clic en uno y luego en {{ui:Renderizar}}.

| Escena | Qué fija | Úselo para |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, el sol propio del modelo, suelo activado | El edificio desde afuera |
| {{ui:Interior}} | Cielo nublado (luz uniforme, sin manchas de sol duras), medio paso más brillante | Una vista desde dentro de un cuarto |
| {{ui:Vista de sección}} | Estudio blanco, sin suelo, líneas de borde en el render rápido | Un modelo cortado por una sección |
| {{ui:Noche}} | El sol bajo el horizonte (medianoche en pleno invierno para el hemisferio del sitio), un paso más brillante | Lámparas que iluminan el modelo. Sin lámparas, la imagen sale oscura |

- {{ui:Elegir para esta vista}} elige por usted: {{ui:Vista de sección}} cuando hay un corte de sección activo, {{ui:Interior}} cuando la cámara está dentro del modelo, y si no, {{ui:Exterior}}. La primera vez que abre el cuadro, empieza así por sí solo.
- Todos los ajustes quedan abajo y pueden cambiarse. Al cambiar uno, los que fija la escena dejan de coincidir, ningún botón queda seleccionado y la línea bajo los botones indica que los ajustes son propios. Haga clic de nuevo en la escena para restaurar sus valores.
- Una escena no toca el motor, el modo, el tamaño, los materiales, la cámara ni las lámparas.

:::note
Las escenas dan los mismos valores en ModelCraft y BimCraft. El aspecto final de la imagen depende de su modelo y de su tarjeta gráfica.
:::

## Ajustes

| Ajuste | Qué hace |
|---|---|
| {{ui:Tamaño}} | El tamaño de la vista, el doble del tamaño de la vista, Full HD, 4K o cuadrado. Los tamaños fijos conservan la cámara de la vista y muestran más o menos a los lados |
| {{ui:Modo}} | {{ui:Rápido}}, o {{ui:Alta calidad (trazado de rayos)}} (abajo) con su {{ui:Límite de tiempo}} |
| {{ui:Calidad}} | Cuántas pasadas (o, en alta calidad, muestras) se promedian: {{ui:Preliminar}} 16, {{ui:Buena}} 64, {{ui:Mejor}} 256. Más pasadas dan sombras y bordes más suaves, y tardan más |
| {{ui:Celeste}} | {{ui:Cielo despejado}}, {{ui:Nublado}} (luz suave, sombras tenues), {{ui:Atardecer}} (luz baja y cálida) o {{ui:Estudio blanco}} (fondo blanco liso) |
| {{ui:Sol}} | El sol sale de la fecha, la hora y el lugar en {{ui:Estilo}} › Sol. Marque {{ui:Usar otra fecha y hora para esta imagen}} para probar otra hora sin cambiar el estilo del modelo |
| {{ui:Brillo}} | Más claro u oscuro, por pasos de exposición |
| {{ui:Suelo bajo el modelo}} | Un suelo que recibe las sombras y se difumina en el horizonte. Desactívelo para un modelo que flota |
| {{ui:Dibujar aristas}} | Dibuja las aristas del modelo en delgado sobre la imagen, para un aspecto de dibujo |

Cuando el sol está bajo el horizonte a la hora elegida, es de noche: el cielo se oscurece y las [lámparas](topic:lights) del modelo lo iluminan. El cuadro lo indica.

Los ajustes se guardan en el archivo `.modelcraft`, así que la siguiente imagen del mismo modelo empieza donde los dejó.

## Hacer que los colores parezcan vidrio o metal

Bajo {{ui:Materiales}}, cada color en pantalla tiene un aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidrio}} o {{ui:Vidrio esmerilado}}. {{ui:Caras sin pintar}} son las caras que no tienen color propio.

Para que las ventanas sean de vidrio, [pinte](topic:paint) los cristales de un solo color y después ponga ese color en {{ui:Vidrio}}. El vidrio deja ver el cielo y lo que hay detrás, teñido por su color, y refleja el cielo.

:::note
En el modo {{ui:Rápido}}, el vidrio y el metal reflejan el cielo, no el resto del modelo, y la luz no se desvía al atravesar el vidrio. El modo {{ui:Alta calidad (trazado de rayos)}} de abajo hace ambas cosas.
:::

## Alta calidad

Elija {{ui:Modo}} › {{ui:Alta calidad (trazado de rayos)}} para una imagen que sigue la luz tal como la ve una cámara:

- la luz rebota entre superficies, así que un cuarto iluminado por una ventana o por una lámpara recibe luz por todos lados, y los colores se contagian a sus vecinos;
- el vidrio es vidrio de verdad: la luz se desvía al atravesarlo y refleja el modelo;
- el metal y las superficies pulidas reflejan el resto del modelo;
- los paneles de luz iluminan como paneles, con sombras suaves.

Es mucho más lento que {{ui:Rápido}}: en cada pasada se vuelve a trazar la luz de cada píxel. La imagen empieza con grano y se aclara a medida que se suman las muestras, así que empiece en pequeño ({{ui:El tamaño de la vista}}, {{ui:Preliminar}}) y elija un {{ui:Límite de tiempo}}: al agotarse, se conserva la imagen hasta ese momento. {{ui:Detener}} también la conserva. La primera pasada espera mientras el navegador prepara el trazador de rayos.

Donde el navegador tiene WebGPU, el trazador de rayos es propio de CadCraft y corre en la tarjeta gráfica; la línea bajo la imagen dice {{ui:Trazado de rayos en la tarjeta gráfica (WebGPU)}}. Tras {{ui:Detener}} o el límite de tiempo, {{ui:Reanudar}} continúa con la misma imagen hasta completar sus muestras; cambiar un ajuste o pulsar {{ui:Renderizar}} de nuevo empieza desde cero. Sin WebGPU, la imagen se traza con WebGL (la línea lo indica) y {{ui:Reanudar}} no aparece.

:::linux
Firefox y la mayoría de las configuraciones de Chrome en Linux todavía no tienen WebGPU, así que la alta calidad usa WebGL allí.
:::

En este modo no se dibujan aristas. Las texturas de la biblioteca muestran su color y su rugosidad, pero no sus relieves (un [material hecho con nodos](topic:shading#in-high-quality-pictures) muestra su normal y sus relieves), y el corte de sección se hace en el modelo antes de empezar la imagen.

{{ui:Quitar ruido (limpia el grano que queda tras las muestras)}} viene activado por defecto: al terminar la imagen, o al detenerla, el grano que queda se limpia con una red neuronal hecha para esto (la red publicada de Intel Open Image Denoise, ejecutada en su propia computadora: en la tarjeta gráfica o, si no, en el procesador). Una imagen con pocas muestras sale limpia. {{ui:Mostrar}} › {{ui:La imagen antes de quitar el ruido}} muestra la imagen tal como se renderizó.

## Renderizar en la vista

El espacio de trabajo {{ui:Renderizar}} ejecuta el trazador de rayos en la propia vista: oriente, edite el modelo o cambie una luz, y vuelve a empezar de inmediato. {{ui:Región}}: arrastre un rectángulo y solo él se renderiza; {{ui:Toda la vista}} vuelve atrás. {{ui:Enfoque}}: haga clic en lo que debe quedar nítido, y la profundidad de campo enfoca allí. {{ui:Detalle}} fija cuántos píxeles de la vista se renderizan (menos es más rápido). {{ui:Pausa}} detiene y continúa. Necesita WebGPU: sin él, el espacio de trabajo lo indica, y {{ui:Exportar}} › {{ui:Renderizar una imagen…}} sigue funcionando.

## Cielos y perfiles de luz en la tarjeta gráfica

Con WebGPU, la alta calidad tiene dos cielos más:

- {{ui:Cielo físico}} calcula la luz del día a partir de la altura del sol: un azul profundo en lo alto, una franja pálida en el horizonte, y un sol que se vuelve más cálido y tenue a medida que baja. {{ui:Bruma}} va de un día muy despejado (2) a uno brumoso (10).
- {{ui:Imagen de cielo (HDRI)}} ilumina el modelo con una imagen panorámica de un lugar real. {{ui:Elegir una imagen…}} toma un archivo `.hdr` o `.exr` equirrectangular; {{ui:Girar}} lo gira alrededor del modelo y {{ui:Brillo de la imagen}} lo aclara u oscurece. La imagen trae su propio sol, así que no se suma el sol del modelo. Solo se conserva mientras la página está abierta: al reabrirla, elíjala de nuevo.

Cada lámpara de la lista {{ui:Lámparas}} puede tomar un perfil de luz del fabricante: {{ui:Perfil IES…}} lee un archivo IES (LM-63), y la lámpara proyecta entonces su luz como lo hace esa luminaria (un downlight estrecho, un bañador de muro). Todas las lámparas con ese nombre lo usan, y cada una conserva su propio brillo. Haga clic en el nombre del perfil para dejar de usarlo.

Las ventanas de vidrio claro ayudan a que la luz del cielo entre en un cuarto, así que las imágenes de interior bajo un cielo se aclaran antes.

Los modos {{ui:Rápido}} y el trazador de rayos WebGL muestran {{ui:Cielo físico}} y {{ui:Imagen de cielo (HDRI)}} como cielo despejado, e ignoran los perfiles de luz.

## La cámara

{{ui:Cámara}} prepara la imagen como una fotografía:

- {{ui:Exposición}}: deje el {{ui:Control de brillo}}, o elija {{ui:Ajustes de cámara}} y fije la {{ui:Apertura (número f)}}, la {{ui:Velocidad de obturación}} y el {{ui:ISO}} como en una cámara. El EV junto a ellos es el valor de exposición habitual. f/16 a 1/100 s e ISO 100 corresponde a un día soleado; una escena más oscura pide una apertura mayor, un obturador más lento o un ISO más alto. Esto funciona en todos los modos.
- {{ui:Profundidad de campo}} desenfoca lo que está más cerca o más lejos de la {{ui:Distancia de enfoque (m)}}, como lo haría un lente de ese número f (déjelo vacío para enfocar lo que está en el centro de la vista). {{ui:Forma de la apertura}} da a los brillos fuera de foco una forma redonda o de aspas.
- {{ui:Perspectiva de dos puntos (las verticales siguen verticales)}} nivela la cámara y desplaza la imagen, como lo hace un lente arquitectónico de tilt-shift, así los muros no se inclinan al mirar hacia arriba o hacia abajo a un edificio.
- {{ui:Balance de blancos}} fija qué color de luz se ve como blanco: más bajo (por ejemplo 3000 K) para luz cálida de lámpara, más alto para sombra y días nublados.
- {{ui:Proyección}}: {{ui:Panorama de 360°}} hace una imagen 2:1 de todo lo que rodea la cámara, para visores de panorama; {{ui:Panorama estéreo de 360°}} apila un panorama para el ojo izquierdo y otro para el derecho, para cascos; {{ui:Mapa de cubo (6 caras)}} hace seis vistas cuadradas en una cuadrícula de 3 × 2. El ancho sale de {{ui:Tamaño}}.

La proyección, la profundidad de campo, la perspectiva de dos puntos y el balance de blancos requieren el trazador de rayos en la tarjeta gráfica (WebGPU), así que solo aparecen en {{ui:Alta calidad}}.

## Terminar la imagen

{{ui:Imagen}} gradúa la imagen de alta calidad como una fotografía, y cada control cambia la imagen terminada al instante, sin renderizar de nuevo:

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES fílmico}} (la imagen como antes), {{ui:AgX}} (más suave, conserva el color en luz muy brillante), {{ui:Fílmico}} (una curva de película suave) o {{ui:Estándar}} (sin más, la luz brillante se recorta a blanco).
- {{ui:Contraste}} y {{ui:Compresión de luces altas}} (recupera detalle en las partes muy brillantes).
- {{ui:Resplandor}} (un brillo suave alrededor de la luz intensa), {{ui:Destello}} con sus {{ui:Rayos del destello}} (rayos en estrella desde los puntos más brillantes) y {{ui:Viñeta}} (esquinas más oscuras).
- {{ui:Tabla de color (.cube)…}} aplica una corrección de color desde un archivo `.cube`, con su {{ui:Intensidad de la tabla de color}}; como una imagen de cielo, solo se conserva mientras la página está abierta.

## Guardar la imagen

{{ui:Guardar como}} junto a {{ui:Guardar}} elige el archivo: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para compartir (JPEG y WebP solo donde el navegador pueda escribirlos). Tras un render de alta calidad en la tarjeta gráfica, también:

- {{ui:PNG, 16 bits}}: la imagen graduada, con pasos más finos entre tonos, para imprimir o seguir editando.
- {{ui:EXR, todas las capas (flotante de 32 bits)}}: la imagen tal como se renderizó (luz lineal, sin corrección), con cada elemento de render y cada grupo de luz como una capa propia, para programas de composición.
- {{ui:Archivo de render (.ccrender, para volver a ajustarlo después)}}: todo lo que el cuadro necesita para mezclar y graduar la imagen de nuevo. {{ui:Abrir un archivo de render…}} la trae de vuelta, con su mezcla y su gradación, sin renderizar.

## Mezclar las luces después del render

Active {{ui:Mezcla de luces (cambia el color y el brillo de cada luz después del render)}} antes de pulsar {{ui:Renderizar}}. Cuando la imagen esté lista (o detenida), {{ui:Mezclar la imagen}} lista sus luces por grupos: el cielo, el sol y las lámparas por nombre (cada lámpara con el mismo nombre es un grupo). Apague un grupo, asígnele un color o hágalo más claro u oscuro, y la imagen cambia al instante, sin renderizar de nuevo. {{ui:Guardar mezcla}} conserva la mezcla con un nombre para elegirla después; {{ui:Como se renderizó}} regresa a la imagen tal como se hizo. {{ui:Guardar}} guarda la imagen mezclada.

{{ui:Elementos de render (albedo, normales, profundidad, difuso, especular, transmisión, emisión, IDs)}} conserva también las partes de la imagen. {{ui:Mostrar}} cambia la vista a una de ellas: los colores de superficie (albedo), las normales, la profundidad, la luz difusa, especular y transmitida (cada una directa e indirecta), lo que brilla y el cielo, y un color por objeto o por material para hacer máscaras.

Ambos guardan capas adicionales en la tarjeta gráfica. En tamaños grandes, una tarjeta puede no tener espacio; el cuadro lo indica, y un tamaño menor funciona.

## La cola de render

Tras preparar una alta calidad, {{ui:Añadir esta imagen a la cola}} bajo {{ui:Cola de render}} conserva la imagen tal como está ahora; {{ui:Añadir esta animación a la cola}} del cuadro de video hace lo mismo para una animación completa, trazada cuadro por cuadro. {{ui:Iniciar la cola}} las renderiza una tras otra en esta computadora, y {{ui:Guardar}} junto a cada una terminada la descarga. Al cerrar la página, la cola se conserva: abra el mismo modelo y continúa donde se detuvo. La cola necesita WebGPU.

## Niebla, humo, ruido y cáusticas

Estos viven en {{ui:Niebla, humo y ruido}} y funcionan en {{ui:Alta calidad}} con la tarjeta gráfica; los demás motores los omiten.

- {{ui:Niebla y bruma}} llena el aire hasta una altura con una neblina que iluminan el sol, el cielo y las lámparas. {{ui:Hasta dónde se ve, en metros}} fija qué tan espesa es (unos 100 m es una bruma ligera, 20 m una niebla densa), {{ui:Altura de la niebla sobre el suelo, en metros}} es donde termina, y {{ui:Haces de luz}} indica cuánto brilla la neblina hacia la luz. La luz del sol sale de la niebla por su parte superior, así que donde el sol entra por una ventana o entre edificios se ve como haces de luz.
- {{ui:Humo o nube}} agrega un volumen de humo o nube iluminado como la niebla. {{ui:Tipo}} es {{ui:Nube}}, {{ui:Columna de humo}} o {{ui:De un archivo de volumen (.ccvol)}}, el formato de cuadrícula propio de CadCraft. {{ui:Detalle}} y {{ui:Variación}} cambian una nube o columna creada; {{ui:Tamaño de su lado más largo, en metros (0 = el tamaño del modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} y {{ui:Girar}} la colocan (empieza en el centro del modelo); {{ui:Grosor}} la hace más densa, {{ui:Brillo hacia adelante}} la hace brillar más hacia la luz, y {{ui:Color}} le da tinte. Un archivo de volumen solo se conserva mientras la página está abierta, igual que una imagen de cielo.
- {{ui:Detenerse antes donde la imagen ya está limpia (muestreo adaptativo)}} no da más muestras a los píxeles que ya se asentaron, así el resto de la imagen termina antes. {{ui:Ruido aceptado}} es cuánto grano queda cuando un píxel se detiene. La línea bajo la imagen dice cuántas muestras recibió un píxel en promedio.
- {{ui:Cáusticas (luz desviada por el vidrio o reflejada por espejos)}} traza la luz de las lámparas y del sol, así la mancha brillante bajo una esfera de vidrio, o la luz de un espejo sobre un muro, sale limpia en lugar de granulosa. Está apagada mientras están activos la niebla, el humo, la mezcla de luces después del render o los elementos de render, y está hecha para imágenes, no para imágenes de 360°, animaciones ni el espacio de trabajo Renderizar.

## Cuánto tarda

La imagen se hace en su propia computadora, con su tarjeta gráfica; nada se sube. El tiempo depende de esa tarjeta. Crece con las pasadas y con los píxeles: {{ui:Mejor}} tiene 16 veces las pasadas de {{ui:Preliminar}}, y una imagen 4K tiene unas cuatro veces los píxeles de Full HD. Una computadora sin tarjeta gráfica también renderiza, pero más despacio.

:::note
Si el cuadro dice que el navegador no puede renderizar imágenes, el navegador no tiene WebGL 2. Actualícelo, o active la aceleración por hardware en sus ajustes.
:::
