---
title: Estilos y sombras del sol
summary: Muestre el modelo sombreado, con líneas ocultas, como estructura alámbrica o transparente, y estudie las sombras que proyecta en cualquier fecha, hora y lugar.
keywords: vista de presentación, vista limpia, ocultar guías, ocultar ejes, estilo, sombreado, líneas ocultas, estructura alámbrica, rayos X, aristas, sombras, sol, estudio solar, solar, fecha, hora, latitud, longitud, zona horaria, norte
from: 09c95329
---

El panel {{ui:Estilo}} de la derecha cambia la forma en que se dibuja el modelo. Nada de lo que contiene cambia el modelo en sí, y no forma parte de deshacer. Cada [escena](topic:scenes) recuerda su propio estilo, y el archivo recuerda el estilo que tenía al guardarlo.

## Caras

Elija uno en la lista {{ui:Caras}}:

| Estilo | Aspecto |
|---|---|
| {{ui:Sombreado}} | Caras sólidas, con iluminación suave. Las caras vistas por detrás son gris azulado. Se muestran los colores importados. |
| {{ui:Líneas ocultas}} | Caras con el color de fondo y aristas en tinta: un dibujo lineal limpio sin líneas ocultas. Blanco sobre {{ui:Papel}}, oscuro sobre {{ui:Modelo}}. |
| {{ui:Estructura alámbrica}} | Solo aristas. Las caras no se dibujan, pero siguen contando al hacer clic y al ajustarse: no puede seleccionar a través de ellas. |
| {{ui:Rayos X}} | Caras transparentes, para ver lo que hay detrás o dentro. Como en la estructura alámbrica, los clics y los ajustes se detienen en la cara más cercana. |

{{ui:Mostrar aristas}} activa o desactiva las aristas en todos los estilos excepto {{ui:Estructura alámbrica}}. Si está desactivado, {{ui:Líneas ocultas}} casi no muestra nada, ya que sus caras coinciden con el fondo. Las aristas suaves, como los lados de un círculo estirado, nunca se dibujan.

## Activar las sombras del sol

1. Marque {{ui:Sombras del sol}}. Los ajustes del sol que aparecen debajo quedan activos, y el modelo proyecta sombras sobre sí mismo y sobre el suelo.
2. Defina el lugar:
   - {{ui:Latitud}}: el norte es positivo y el sur negativo (Nueva York está en torno a 40.7; Sídney, en torno a -33.9).
   - {{ui:Longitud}}: el este es positivo y el oeste negativo (Nueva York está en torno a -74.0).
   - {{ui:Diferencia con UTC}}: la diferencia horaria del lugar respecto a UTC en horas, como `-5` para Nueva York en invierno. ModelCraft no aplica el horario de verano; use `-4` para Nueva York en verano.
3. Defina la {{ui:Fecha}} (mes y día) y arrastre el control deslizante de {{ui:Hora}}. La hora avanza en pasos de 15 minutos y aparece junto al control, como "15:00".

Una línea debajo de los ajustes indica dónde está el sol, por ejemplo "Sol a 52° de altura, 250° desde el norte. El norte es el eje verde." De noche indica "El sol está bajo el horizonte en este momento."

Un modelo nuevo empieza con el sol el 21 de junio a las 15:00, con latitud 40, longitud -105 y diferencia con UTC -7.

## Orientar el modelo al norte

El norte de ModelCraft es siempre el **eje verde**. Para estudiar un lugar real, gire el modelo para que su lado norte mire a lo largo del verde: seleccione todo ({{key:Mod+A}}), pulse {{key:Q}}, haga clic en un centro sobre el suelo y gírelo el ángulo del lugar respecto al norte (vea [Girar y escalar](topic:rotate-scale)).

## Un estudio solar

1. Defina el lugar y la fecha.
2. Añada una escena ({{ui:Añadir escena}} en {{ui:Escenas}}).
3. Mueva el control deslizante de la hora y añada otra escena. Repita para cada hora que quiera.
4. Haga clic en {{ui:Reproducir}} para recorrerlas. Vea [Guardar vistas como escenas](topic:scenes).

## Cosas que conviene saber

- Las sombras pueden verse dentadas en un modelo muy grande, ya que un único mapa de sombras cubre todo el modelo.
- Las sombras no se dibujan en {{ui:Estructura alámbrica}}.
- La posición del sol sigue el cálculo solar de la NOAA y es precisa a una fracción de grado, suficiente para estudios de volúmenes. No se tiene en cuenta la refracción atmosférica, así que los ángulos muy bajos del sol al amanecer y al atardecer pueden ser algo imprecisos.

## Vista de presentación

{{ui:Vistas}} › {{ui:Vista de presentación}} (o {{key:Shift+P}}) muestra solo el modelo: desaparecen los ejes, las líneas y los puntos guía, los contornos de los planos de sección (el corte se mantiene), las marcas de las lámparas, el recuadro de un grupo abierto, las marcas de ajuste y sus indicaciones, y el resaltado de selección. Úsela para ver el modelo con claridad o antes de hacer una captura de pantalla. Las herramientas siguen funcionando y siguen ajustándose; simplemente no se ven las marcas. Pulse {{key:Shift+P}} de nuevo para volver a mostrarlas. Las cotas se mantienen, porque forman parte del dibujo. Mientras edita dentro de un grupo, el resto del modelo ya no se atenúa: se muestra tal cual, con sus texturas.
