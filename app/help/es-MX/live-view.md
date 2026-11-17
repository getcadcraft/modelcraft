---
title: La vista en vivo
summary: Una ventana junto al modelo que lo muestra con el aspecto en tiempo real, con sol y sombras, y que sigue cada cambio que usted haga; recórrala y ajuste la hora del día y el mes.
keywords: compartir, panorámica, 360, recorrido, recorrido virtual, visor independiente, visor sin conexión, enviar a un cliente, video, video de recorrido, dispersar, dispersión, pasto, pradera, bosque, rocas, plantas, árboles, multitud, pintar plantas, vista en vivo, tiempo real, render en tiempo real, recorrido, caminar, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, estación, mes, sombras, oclusión ambiental, reflejos, luz rebotada, iluminación global, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} abre un panel sobre la app que muestra el modelo con el aspecto en tiempo real: el cielo y el sol según el lugar y la fecha de su modelo, las sombras del sol, los aspectos y materiales que dio a las caras, las lámparas y la luz que rebota en paredes y pisos. Sigue lo que usted hace: si gira la vista, el panel también gira; si cambia el modelo, muestra el cambio poco después. No se sube nada.

## Abrirla

1. Elija {{ui:Export}} › {{ui:Live view}}. El panel se abre en la esquina inferior derecha.
2. Arrastre su barra de título para moverlo; arrastre su esquina para hacerlo más grande.
3. {{ui:New window}} lo pasa a una ventana propia, para una segunda pantalla. {{ui:Export}} › {{ui:Live view in a new window}} lo abre allí de inmediato. Si su navegador bloquea las ventanas emergentes, se abre como panel.
4. {{ui:Close}} lo cierra.

## Los controles

| Control | Qué hace |
|---|---|
| {{ui:Follow the view}} | Activado: la vista en vivo mira hacia donde mira la vista de ModelCraft. Al caminar se desactiva |
| {{ui:Walk}} | Recorre el modelo (abajo) |
| {{ui:Gravity}} | Al caminar: se mantiene sobre los pisos y sube escaleras. Desactivado: vuela |
| {{ui:Time}} | La hora del día, de 05:00 a 21:00. El sol se mueve al arrastrar |
| {{ui:Month}} | El mes (el día 21), para ver el sol en invierno y en verano |
| {{ui:Quality}} | {{ui:For this computer}} (lo que obtiene [su equipo](topic:your-machine)), o {{ui:Low}}, {{ui:Medium}} o {{ui:High}} |

La línea inferior indica qué dibuja la vista (WebGPU o WebGL 2), la calidad y la luz rebotada.

## Recorrer el modelo

1. Oriente la vista principal hacia donde quiera estar y elija {{ui:Walk}}. Usted queda de pie sobre el piso, bajo el punto de vista, con 1.6 m de altura.
2. Haga clic en la vista en vivo y luego use {{key:W}} {{key:A}} {{key:S}} {{key:D}} o las teclas de flecha. Mantenga {{key:Shift}} para correr. Arrastre para mirar alrededor.
3. Se suben escalones de hasta 40 cm (escaleras); todo lo que sea más alto es una pared. Las paredes lo detienen y usted se desliza a lo largo de ellas.
4. Con {{ui:Gravity}} desactivado vuela: {{key:E}} sube, {{key:Q}} baja.
5. {{key:Esc}} detiene el recorrido.

## Dispersar plantas, rocas y personas

{{ui:Scatter}} en la barra de la vista en vivo abre el panel de dispersión junto a la imagen. Un conjunto de dispersión reparte elementos de la biblioteca de elementos de entorno (árboles, arbustos, pasto, flores, rocas, personas, autos) sobre parte del modelo. Los elementos se dibujan solo en la vista en vivo: no son geometría del modelo, y la vista principal no los muestra.

1. **Rellenar caras:** designe caras (o un grupo, como un terreno) en ModelCraft y luego elija {{ui:Fill selection}}. El conjunto las cubre.
2. **Pintar:** elija {{ui:Paint}} y arrastre sobre la vista en vivo. Si hay caras designadas, la pintura cae solo sobre ellas; si no hay nada designado, cae sobre lo que esté bajo el pincel, incluido el terreno. {{ui:Brush size}} define el pincel; {{ui:Eraser}} quita las manchas pintadas.
3. Marque lo que desea dispersar. El número junto a cada uno es su peso: 3 y 1 generan tres del primero por cada uno del segundo.

| Control | Qué hace |
|---|---|
| {{ui:Per m²}} | Cuántos elementos hay en cada metro cuadrado |
| {{ui:Keep away (m)}} | Ningún elemento más cerca que esto de otros objetos, ni bajo un techo o una mesa. 0 lo desactiva |
| {{ui:Turn (°)}} | Cuánto gira cada elemento al azar alrededor de la vertical |
| {{ui:Steepest (°)}} | Ningún elemento donde la superficie sea más inclinada |
| {{ui:Size}} | El tamaño mínimo y máximo, como factor del tamaño propio del elemento |
| {{ui:Height from, to (m)}} | Solo entre estas alturas (en blanco = cualquiera) |
| {{ui:Lean with the surface}} | 0 mantiene los elementos derechos; 1 los coloca perpendiculares a la pendiente |
| {{ui:Seed}}, {{ui:Shuffle}} | La misma semilla siempre da la misma dispersión; Barajar elige otra |

Los conjuntos se guardan en el archivo .modelcraft y siguen a las caras que cubren cuando las cambia. La cantidad máxima de elementos que dibuja la vista en vivo depende del nivel de [su equipo](topic:your-machine): 20 000 para {{ui:Processor only}}, 100 000 para {{ui:Graphics card, basic}}, un millón para {{ui:Graphics card, high}}. El panel indica cuántos se colocan de cuántos pide la densidad: se colocan menos cuando se alcanza el límite, o donde otros objetos los impiden. Los elementos cercanos a la cámara se dibujan como son; los lejanos, como formas simples con sus colores.

:::note
Los elementos dispersos aparecen en la vista en vivo (y en su recorrido, en las panorámicas y en el visor independiente). Renderizar una imagen todavía no los dibuja.
:::

## Compartir: panorámicas, recorridos, un visor, un video

{{ui:Share}} en la barra de la vista en vivo genera archivos a partir de ella. Todo se genera en esta computadora; no se sube nada.

| Opción | Qué obtiene |
|---|---|
| {{ui:360° panorama}} | Una imagen de 360° desde donde esté la vista (o donde esté usted al caminar), como PNG equirectangular que abren los visores de panorámicas y la mayoría de los sitios de fotos |
| {{ui:Add this spot to the tour}}, luego {{ui:Save the tour}} | Una página web con una panorámica en cada punto y flechas hacia los puntos que cada uno puede ver (una pared en medio oculta la flecha) |
| {{ui:Save a viewer}} | Una página web con el modelo en este aspecto en tiempo real: gírelo, recórralo y salte a sus escenas guardadas. Se abre sin conexión en un navegador con WebGPU o WebGL 2, desde una carpeta, una memoria USB o un correo, sin instalar nada ni necesitar cuenta, y no carga nada de internet |
| {{ui:Video of the path}} | La ruta de cámara de la línea de tiempo (o las escenas guardadas, en orden) como video con este aspecto en tiempo real, al tamaño de la vista en vivo: WebM o MP4 donde el navegador pueda generarlos; si no, imágenes numeradas en un ZIP |

El ancho de la panorámica sigue la calidad: 1024, 2048 o 4096 píxeles en Baja, Media y Alta. Un archivo de visor pesa unos 5 MB más el modelo.

:::note
El recorrido y el visor están hechos para mostrar, no para editar: conservan el modelo tal como está cuando los guarda.
:::

## Calidad

| | Baja | Media | Alta |
|---|---|---|---|
| Sombras del sol | un mapa de sombras | tres cascadas | cuatro cascadas |
| Oclusión ambiental (sombras de contacto) | | ✓ | ✓, más fina |
| Reflejos en metal | | | ✓ |
| Resplandor (cuando Renderizar una imagen lo activa) | | ✓ | ✓ |
| Bordes suavizados | FXAA | sobre varios cuadros (TAA) | sobre varios cuadros (TAA) |
| Luz rebotada | gruesa | más fina | la más fina |

{{ui:For this computer}} elige Baja en una computadora sin tarjeta gráfica utilizable, Media con un chip gráfico integrado, y Alta con una tarjeta gráfica separada. Baja está pensada para una laptop de 8 GB sin tarjeta gráfica.

## Luz rebotada

La luz que rebota desde una pared iluminada por el sol hacia el piso, y el interior más oscuro de una habitación, se calcula con el mismo trazador de trayectorias que genera las [imágenes renderizadas](topic:render): renderiza una pequeña panorámica en puntos a través del modelo, en segundo plano y en cada núcleo del procesador. Mientras trabaja, la línea inferior dice {{ui:Bounce light: 40 %}}; cuando está lista, la vista la incorpora. Después de un cambio, vuelve a empezar.

:::note
Esta es una aproximación para una vista en vivo, no una imagen renderizada: los detalles pequeños entre los puntos reciben la luz rebotada de los puntos cercanos. Para una imagen final use [Renderizar una imagen](topic:render).
:::

## Brillo y colores

La vista en vivo usa el mismo brillo, balance de blancos, contraste y transformación de vista (ACES, AgX, filmic o estándar) que [Renderizar una imagen](topic:render): ajústelos ahí y la vista en vivo los sigue.

:::note
Los navegadores difieren. Donde el navegador tiene WebGPU (Chrome y Edge en Windows, macOS y ChromeOS, Safari 26), la vista en vivo lo usa; en los demás (la mayoría de navegadores en Linux, sistemas Apple antiguos) usa WebGL 2 y se ve igual.
:::
