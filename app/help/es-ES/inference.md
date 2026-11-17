---
title: Inferencia y ajuste
summary: Qué significan los marcadores de colores, qué ajuste prevalece y cómo bloquear una dirección con las teclas de flecha o Shift.
keywords: inferencia, ajuste, ajustar, extremo, punto medio, centro de cara, centro, en arista, en cara, eje, eje rojo, eje verde, eje azul, paralelo, perpendicular, bloqueo, shift, osnap
from: e78984e9
---

Mientras una herramienta de dibujo o edición está en curso, ModelCraft mira lo que hay bajo el puntero y se ajusta a lo más útil de alrededor. Un marcador muestra lo que ha encontrado, y la sugerencia de la esquina inferior izquierda lo nombra.

## Marcadores y sugerencias

| Sugerencia | Marcador | Se ajusta a |
|---|---|---|
| Extremo | Círculo verde | El extremo de una arista |
| Punto medio | Círculo cian | El punto medio de una arista |
| Centro de cara | Círculo azul | El centro de la cara bajo el puntero |
| Punto de guía | Gris | Un punto de guía dejado por la cinta |
| Origen | Ocre | Donde se cruzan los ejes rojo, verde y azul |
| En eje rojo / En eje verde / En eje azul | Una línea de ese color | Una línea desde el punto inicial en esa dirección |
| Paralelo a la arista / Perpendicular a la arista | Línea magenta | Una línea desde el punto inicial paralela o perpendicular a la arista recordada (véase abajo) |
| Bloqueado | Línea magenta | Una dirección bloqueada con una tecla de flecha o {{key:Shift}} |
| En arista | Cuadrado rojo | En cualquier punto de una arista |
| En guía | Gris | En cualquier punto de una línea guía |
| En cara | Rombo azul | En cualquier punto de una cara |
| En plano | ninguno | El plano en el que empezó, cuando el puntero está sobre espacio vacío |
| En el suelo | ninguno | El suelo (el plano rojo-verde), cuando no hay nada más |

Cuando una línea de eje desde su punto inicial cruza una arista o una guía, ModelCraft se ajusta al cruce y la sugerencia nombra ambos, como "En eje rojo, en arista".

## Qué ajuste prevalece

1. **Puntos** a unos 12 píxeles: primero los extremos, luego los puntos de guía, los puntos medios, el centro de la cara bajo el puntero y el origen.
2. **Direcciones** desde el punto inicial: los ejes rojo, verde y azul, y paralela o perpendicular a la arista recordada.
3. **En una arista** o en una línea guía.
4. **En una cara.**
5. **El plano de dibujo**, o el suelo.

Lo oculto tras una cara nunca se ajusta. Oriente la vista con la órbita para ver el punto que quiere.

## Dibujar sobre una cara desde un punto

Un {{ui:Rectángulo}}, {{ui:Círculo}} o {{ui:Polígono}} iniciado en una esquina, un punto medio, una arista o el centro de una cara se dibuja **en el plano de la cara bajo el puntero**, y corta esa cara. Una arista pertenece a dos caras, así que decide el lado de la arista en el que está el puntero: para dibujar en el extremo de una caja alargada, empiece desde el punto medio de una de sus aristas con el puntero justo dentro de la cara del extremo.

## Paralela y perpendicular

ModelCraft recuerda la **última arista sobre la que pasó el puntero antes de su primer clic**. Empezar en una esquina o en una arista cuenta como haber pasado por esa arista. Una vez en marcha la herramienta, las demás aristas sobre las que pase no la sustituyen.

Para dibujar una línea paralela a una arista existente:

1. Pulse {{key:L}} y pase el puntero sobre la arista que quiere igualar.
2. Desplácese hasta el punto inicial, sin cruzar otras aristas por el camino si puede, y haga clic.
3. Desplácese en la dirección paralela a esa arista. La línea se vuelve magenta y la sugerencia dice "Paralelo a la arista". La perpendicular funciona igual, dentro del plano en el que dibuja.

Si se recordó la arista equivocada, pulse {{key:Esc}}, pase el puntero sobre la arista correcta y empiece de nuevo.

## Bloquear una dirección

Tras el primer clic de una herramienta, puede mantener el siguiente punto sobre una línea:

| Tecla | Bloquea en |
|---|---|
| {{key:Right}} | El eje rojo |
| {{key:Left}} | El eje verde |
| {{key:Up}} | El eje azul (hacia arriba) |
| {{key:Down}} | Paralelo a la arista recordada (véase arriba) |

Vuelva a pulsar la misma flecha para desbloquear. La barra de estado dice "Bloqueado en el eje rojo. Pulse la misma flecha para desbloquear."

Mientras está bloqueado, el punto se desliza por la línea hacia donde esté el puntero, y sigue alineándose con los puntos sobre los que pase: pase el puntero sobre la esquina de otra caja para dibujar una línea sobre el rojo exactamente hasta esa esquina.

**{{key:Shift}}** bloquea la dirección a la que se está ajustando en ese momento (un eje, o paralela), mientras la mantenga pulsada. Suéltela para desbloquear.

Los bloqueos funcionan en {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Desplazar}}, {{ui:Escalar}} y {{ui:Cinta}}. Antes del primer clic, las teclas de flecha orientan la vista en su lugar.

## Dentro de un grupo

Mientras edita dentro de un grupo o componente, los ejes son los propios del grupo (se mueven con él, y giran con él si estaba girado). Los ajustes siguen encontrando puntos y aristas fuera del grupo, así que puede alinear las cosas con el resto del modelo.
