---
title: Estilos y sombras del sol
summary: Muestre el modelo sombreado, como líneas ocultas, como estructura alámbrica o transparente, y estudie las sombras que proyecta en cualquier fecha, hora y lugar.
keywords: vista de presentación, vista limpia, ocultar guías, ocultar ejes, estilo, sombreado, líneas ocultas, estructura alámbrica, rayos X, aristas, sombras, sol, estudio solar, solar, fecha, hora, latitud, longitud, zona horaria, norte
from: 09c95329
---

El panel {{ui:Estilo}} de la derecha cambia la forma en que se dibuja el modelo. Nada de ahí cambia el modelo en sí, y no forma parte de deshacer. Cada [escena](topic:scenes) recuerda su propio estilo, y el archivo recuerda el estilo que tenía al guardarlo.

## Caras

Elija uno en la lista {{ui:Caras}}:

| Estilo | Aspecto |
|---|---|
| {{ui:Sombreado}} | Caras sólidas, con iluminación suave. Las caras vistas desde atrás son gris azulado. Se muestran los colores importados. |
| {{ui:Líneas ocultas}} | Caras en el color de fondo con aristas en tinta: un dibujo lineal limpio, sin líneas ocultas. Blancas en {{ui:Papel}}, oscuras en {{ui:Modelo}}. |
| {{ui:Estructura alámbrica}} | Solo aristas. Las caras no se dibujan, pero siguen contando al hacer clic y al referenciar: no se puede seleccionar a través de ellas. |
| {{ui:Rayos X}} | Caras transparentes, para ver lo que hay detrás o dentro. Como en la estructura alámbrica, los clics y las referencias siguen deteniéndose en la cara más cercana. |

{{ui:Mostrar aristas}} activa o desactiva las aristas en todos los estilos excepto {{ui:Estructura alámbrica}}. Desactivada, {{ui:Líneas ocultas}} muestra casi nada, ya que sus caras coinciden con el fondo. Las aristas suaves, como los lados de un círculo empujado/tirado, nunca se dibujan.

## Activar las sombras del sol

1. Marque {{ui:Sombras del sol}}. Los ajustes del sol que aparecen debajo se activan, y el modelo proyecta sombras sobre sí mismo y sobre el suelo.
2. Defina el lugar:
   - {{ui:Latitud}}: el norte es positivo, el sur negativo (Nueva York está en alrededor de 40.7; Sídney, en alrededor de -33.9).
   - {{ui:Longitud}}: el este es positivo, el oeste negativo (Nueva York está en alrededor de -74.0).
   - {{ui:Diferencia con UTC}}: la diferencia horaria del sitio respecto a UTC, en horas, como `-5` para Nueva York en invierno. ModelCraft no aplica el horario de verano; use `-4` para Nueva York en verano.
3. Defina la {{ui:Fecha}} (mes y día) y arrastre el control deslizante de {{ui:Hora}}. La hora avanza en pasos de 15 minutos y se muestra junto al control, por ejemplo "3:00 pm".

Una línea debajo de los ajustes indica dónde está el sol, por ejemplo "Sol a 52° sobre el horizonte, 250° desde el norte. El norte es el eje verde." De noche dice "El sol está bajo el horizonte a esta hora."

Un modelo nuevo empieza con el sol el 21 de junio a las 3:00 pm, en latitud 40, longitud -105 y diferencia UTC -7.

## Oriente el modelo hacia el norte

El norte de ModelCraft es siempre el **eje verde**. Para estudiar un sitio real, gire el modelo para que su lado norte mire a lo largo del verde: seleccione todo ({{key:Mod+A}}), pulse {{key:Q}}, haga clic en un centro sobre el suelo y gírelo el ángulo del sitio respecto al norte (vea [Girar y escalar](topic:rotate-scale)).

## Un estudio solar

1. Defina el lugar y la fecha.
2. Agregue una escena ({{ui:Agregar escena}} en {{ui:Escenas}}).
3. Mueva el control de hora y luego agregue otra escena. Repita para cada hora que quiera estudiar.
4. Haga clic en {{ui:Reproducir}} para recorrerlas. Vea [Guardar vistas como escenas](topic:scenes).

## Puntos a tener en cuenta

- Las sombras pueden verse dentadas en un modelo muy grande, ya que un único mapa de sombras cubre todo el modelo.
- No se dibujan sombras en {{ui:Estructura alámbrica}}.
- La posición del sol sigue el cálculo solar de NOAA y tiene una precisión de una fracción de grado, suficiente para estudios de volumetría. Se ignora la refracción atmosférica, así que los ángulos muy bajos del sol cerca del amanecer y el atardecer pueden estar ligeramente desviados.

## Vista de presentación

{{ui:Vistas}} › {{ui:Vista de presentación}} (o {{key:Shift+P}}) muestra solo el modelo: se ocultan los ejes, las líneas y los puntos guía, los contornos de los planos de sección (el corte se mantiene), las marcas de las lámparas, la caja de un grupo abierto, las marcas y sugerencias de referencia a objetos, y el resaltado de selección. Úsela para ver el modelo con claridad o antes de una captura de pantalla. Las herramientas siguen funcionando y siguen usando la referencia a objetos; simplemente no se ven las marcas. Pulse {{key:Shift+P}} de nuevo para mostrarlas. Las cotas se mantienen, ya que forman parte del dibujo. Mientras edita dentro de un grupo, el resto del modelo ya no se atenúa: se muestra tal como es, incluidas las texturas.
