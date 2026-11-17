---
title: La vista en vivo
summary: Una ventana junto al modelo que lo muestra con el aspecto en tiempo real, con sol y sombras, y que sigue cada cambio que haga; recórrala y ajuste la hora del día y el mes.
keywords: compartir, panorámica, 360, recorrido, recorrido virtual, visor independiente, visor sin conexión, enviar a un cliente, vídeo, vídeo del recorrido, dispersar, dispersión, hierba, prado, bosque, rocas, plantas, árboles, multitud, pintar plantas, vista en vivo, tiempo real, renderizado en tiempo real, recorrido, caminar, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, estación, mes, sombras, oclusión ambiental, reflejos, luz rebotada, iluminación global, webgpu, webgl
from: fca3b0d6
---

{{ui:Exportar}} › {{ui:Vista en vivo}} abre un panel sobre la aplicación que muestra el modelo con el aspecto en tiempo real: el cielo y el sol según el lugar y la fecha de su modelo, las sombras del sol, los aspectos y materiales que asignó a las caras, las lámparas y la luz que rebota en paredes y suelos. Sigue lo que hace: si gira la vista, también gira, y si cambia el modelo, lo muestra un momento después. No se sube nada.

## Abrirlo

1. Elija {{ui:Exportar}} › {{ui:Vista en vivo}}. El panel se abre en la esquina inferior derecha.
2. Arrastre su barra de título para moverlo, y tire de su esquina para hacerlo más grande.
3. {{ui:Ventana nueva}} lo traslada a una ventana propia, para una segunda pantalla. {{ui:Exportar}} › {{ui:Vista en vivo en una ventana nueva}} lo abre allí directamente. Si el navegador bloquea las ventanas emergentes, se abrirá como panel.
4. {{ui:Cerrar}} lo cierra.

## Los controles

| Control | Qué hace |
| --- | --- |
| {{ui:Seguir la vista}} | Activado: la vista en vivo mira hacia donde mira la vista de ModelCraft. Al caminar se desactiva |
| {{ui:Caminar}} | Recorre el modelo (abajo) |
| {{ui:Gravedad}} | Al caminar: se mantiene sobre los suelos y sube escaleras. Desactivada: vuela |
| {{ui:Hora}} | La hora del día, de 05:00 a 21:00. El sol se mueve al arrastrar |
| {{ui:Mes}} | El mes (el día 21 de él), para ver el sol en invierno y en verano |
| {{ui:Calidad}} | {{ui:Para este ordenador}} (lo que obtiene [su equipo](topic:your-machine)), o {{ui:Baja}}, {{ui:Media}} o {{ui:Alta}} |

La línea inferior indica qué dibuja la vista (WebGPU o WebGL 2), la calidad y la luz rebotada.

## Recorrer el modelo

1. Gire la vista principal hacia donde quiera situarse y elija {{ui:Caminar}}. Quedará de pie sobre el suelo, bajo el punto de vista, a 1.6 m de altura.
2. Haga clic en la vista en vivo y use {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las teclas de flecha. Mantenga pulsado {{key:Shift}} para correr. Arrastre para mirar alrededor.
3. Los escalones de hasta 40 cm se suben (escaleras); lo que sea más alto es un muro. Los muros lo detienen y usted se desliza a lo largo de ellos.
4. Con {{ui:Gravedad}} desactivada vuela: {{key:E}} sube, {{key:Q}} baja.
5. {{key:Esc}} detiene el recorrido.

## Dispersar plantas, rocas y personas

{{ui:Dispersar}} en la barra de la vista en vivo abre el panel de dispersión junto a la imagen. Un conjunto de dispersión reparte elementos de la biblioteca de entorno (árboles, arbustos, hierba, flores, rocas, personas, coches) sobre parte del modelo. Los elementos se dibujan solo en la vista en vivo: no son geometría del modelo, y la vista principal no los muestra.

1. **Rellenar caras:** seleccione caras (o un grupo, como un terreno) en ModelCraft y elija {{ui:Rellenar selección}}. El conjunto las cubre.
2. **Pintar:** elija {{ui:Pintar}} y arrastre sobre la vista en vivo. Si hay caras seleccionadas, la pintura solo cae sobre ellas; sin selección, cae sobre cualquier cosa bajo el pincel, incluido el suelo. {{ui:Tamaño del pincel}} define el pincel; {{ui:Borrador}} quita las zonas pintadas.
3. Marque lo que quiere dispersar. El número junto a cada elemento es su peso: 3 y 1 hacen tres del primero por cada uno del segundo.

| Control | Qué hace |
| --- | --- |
| {{ui:Por m²}} | Cuántos elementos hay por cada metro cuadrado |
| {{ui:Mantener distancia (m)}} | Ningún elemento más cerca de esta distancia de otros objetos, ni bajo un techo o una mesa. 0 lo desactiva |
| {{ui:Giro (°)}} | Cuánto gira cada elemento al azar alrededor de la vertical |
| {{ui:Máxima pendiente (°)}} | Ningún elemento donde la superficie sea más inclinada |
| {{ui:Tamaño}} | El tamaño mínimo y máximo, como factor del tamaño propio del elemento |
| {{ui:Altura de, a (m)}} | Solo entre estas alturas (en blanco = cualquiera) |
| {{ui:Inclinar con la superficie}} | 0 mantiene los elementos verticales; 1 los coloca perpendiculares a la pendiente |
| {{ui:Semilla}}, {{ui:Mezclar}} | La misma semilla da siempre la misma dispersión; Mezclar elige otra |

Los conjuntos se guardan en el archivo .modelcraft y siguen a las caras que cubren cuando las cambia. El número máximo de elementos que dibuja la vista en vivo depende del nivel de [su equipo](topic:your-machine): 20 000 para {{ui:Solo procesador}}, 100 000 para {{ui:Tarjeta gráfica, básico}}, un millón para {{ui:Tarjeta gráfica, alto}}. El panel indica cuántos se colocan de cuántos pide la densidad: se colocan menos cuando se alcanza el límite, o cuando los objetos los apartan. Los elementos cercanos a la cámara se dibujan como son; los lejanos, como formas sencillas en sus colores.

:::note
Los elementos dispersados están en la vista en vivo (y en su recorrido, en las panorámicas y en el visor independiente). Renderizar una imagen todavía no los dibuja.
:::

## Compartir: panorámicas, recorridos, un visor, un vídeo

{{ui:Compartir}} en la barra de la vista en vivo crea archivos a partir de ella. Todo se genera en este equipo; no se sube nada.

| Opción | Qué obtiene |
| --- | --- |
| {{ui:Panorámica de 360°}} | Una imagen de 360° desde donde está la vista (o desde donde camine), como PNG equirectangular que abren los visores de panorámicas y la mayoría de sitios de fotos |
| {{ui:Añadir este punto al recorrido}}, luego {{ui:Guardar el recorrido}} | Una página web con una panorámica en cada punto y flechas hacia los puntos que cada uno puede ver (un muro entre medias oculta la flecha) |
| {{ui:Guardar un visor}} | Una página web con el modelo con este aspecto en tiempo real: gírelo, recórralo, salte a sus escenas guardadas. Se abre sin conexión en un navegador con WebGPU o WebGL 2, desde una carpeta, una memoria USB o un correo, sin instalar nada ni tener cuenta, y no carga nada de internet |
| {{ui:Vídeo del recorrido}} | La ruta de la cámara de la línea de tiempo (o las escenas guardadas, en orden) como vídeo con este aspecto en tiempo real, al tamaño de la vista en vivo: WebM o MP4 donde el navegador pueda crearlos; si no, imágenes numeradas en un ZIP |

El ancho de la panorámica depende de la calidad: 1024, 2048 o 4096 píxeles en Baja, Media y Alta. Un archivo de visor ocupa unos 5 MB más el modelo.

:::note
El recorrido y el visor están hechos para mostrar, no para editar: conservan el modelo tal como está cuando los guarda.
:::

## Calidad

| | Baja | Media | Alta |
| --- | --- | --- | --- |
| Sombras del sol | un mapa de sombras | tres cascadas | cuatro cascadas |
| Oclusión ambiental (sombras de contacto) | | ✓ | ✓, más fina |
| Reflejos en metal | | | ✓ |
| Bloom (cuando lo activa {{ui:Renderizar una imagen…}}) | | ✓ | ✓ |
| Bordes suavizados | FXAA | sobre varios fotogramas (TAA) | sobre varios fotogramas (TAA) |
| Luz rebotada | gruesa | más fina | la más fina |

{{ui:Para este ordenador}} elige Baja en un equipo sin una tarjeta gráfica utilizable, Media con un chip gráfico integrado, y Alta con una tarjeta gráfica independiente. Baja está pensada para un portátil de 8 GB sin tarjeta gráfica.

## Luz rebotada

La luz que rebota desde una pared iluminada por el sol hacia el suelo, y el interior más oscuro de una habitación, se calculan con el mismo trazador de rutas que genera las [imágenes renderizadas](topic:render): renderiza una pequeña panorámica en puntos del modelo, en segundo plano y en cada núcleo del procesador. Mientras trabaja, la línea inferior muestra {{ui:Luz rebotada: 40 %}}; cuando está lista, la vista la incorpora. Tras un cambio, vuelve a empezar.

:::note
Es una aproximación para una vista en vivo, no una imagen renderizada: los detalles pequeños entre puntos reciben la luz rebotada de los puntos cercanos. Para una imagen acabada use [Renderizar una imagen](topic:render).
:::

## Brillo y colores

La vista en vivo usa el mismo brillo, balance de blancos, contraste y transformación de vista (ACES, AgX, filmic o estándar) que [Renderizar una imagen](topic:render): ajústelos allí y la vista en vivo los seguirá.

:::note
Los navegadores difieren. Donde el navegador tiene WebGPU (Chrome y Edge en Windows, macOS y ChromeOS, Safari 26), la vista en vivo lo usa; en otros casos (la mayoría de navegadores en Linux, sistemas Apple antiguos) usa WebGL 2 y se ve igual.
:::
