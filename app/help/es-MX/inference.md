---
title: Inferencia y referencias a objetos
summary: Qué significan los marcadores de colores, qué referencia gana y cómo bloquear una dirección con las teclas de flecha o Shift.
keywords: inferencia, referencia, referencias a objetos, punto final, punto medio, centro de cara, centro, sobre arista, sobre cara, eje, eje rojo, eje verde, eje azul, paralela, perpendicular, bloquear, shift, osnap
from: e78984e9
---

Mientras una herramienta de dibujo o edición trabaja, ModelCraft mira lo que está bajo el puntero y se ajusta a lo más útil que haya cerca. Un marcador muestra lo que encontró, y la punta en la parte inferior izquierda lo nombra.

## Marcadores y puntas

| Punta | Marcador | Se ajusta a |
|---|---|---|
| Punto final | Círculo verde | El extremo de una arista |
| Punto medio | Círculo cian | El centro de una arista |
| Centro de cara | Círculo azul | El centro de la cara bajo el puntero |
| Punto guía | Gris | Un punto guía dejado por la cinta de medir |
| Origen | Ocre | Donde se cruzan los ejes rojo, verde y azul |
| Sobre eje rojo / Sobre eje verde / Sobre eje azul | Una línea de ese color | Una línea desde su punto de inicio en esa dirección |
| Paralela a arista / Perpendicular a arista | Línea magenta | Una línea desde su punto de inicio, paralela o perpendicular a la arista recordada (vea abajo) |
| Bloqueado | Línea magenta | Una dirección que bloqueó con una tecla de flecha o {{key:Shift}} |
| Sobre arista | Cuadrado rojo | En cualquier punto a lo largo de una arista |
| Sobre guía | Gris | En cualquier punto a lo largo de una línea guía |
| Sobre cara | Rombo azul | En cualquier punto de una cara |
| Sobre plano | ninguno | El plano en el que empezó, cuando el puntero está sobre espacio vacío |
| Sobre el suelo | ninguno | El suelo (el plano rojo-verde), cuando no hay nada más |

Cuando una línea de eje desde su punto de inicio cruza una arista o una guía, ModelCraft se ajusta al cruce y la punta nombra ambos, como "Sobre eje rojo, sobre arista".

## Qué referencia gana

1. **Puntos** a unos 12 píxeles: primero puntos finales, luego puntos guía, puntos medios, el centro de la cara bajo el puntero y el origen.
2. **Direcciones** desde el punto de inicio: los ejes rojo, verde y azul, y paralela o perpendicular a la arista recordada.
3. **Sobre una arista** o una línea guía.
4. **Sobre una cara.**
5. **El plano de dibujo**, o el suelo.

Lo que está oculto detrás de una cara nunca se ajusta. Gire la vista para ver el punto que quiere.

## Dibujar sobre una cara desde un punto

Un {{ui:Rectángulo}}, {{ui:Círculo}} o {{ui:Polígono}} iniciado en una esquina, un punto medio, una arista o el centro de una cara se dibuja **en el plano de la cara bajo el puntero**, y corta esa cara. Una arista pertenece a dos caras, así que decide el lado de la arista en que está el puntero: para dibujar en el extremo de una caja larga, empiece desde el punto medio de una de sus aristas, con el puntero justo dentro de la cara del extremo.

## Paralela y perpendicular

ModelCraft recuerda la **última arista que el puntero pasó antes de su primer clic**. Empezar en una esquina o en una arista cuenta como haber pasado por esa arista. Una vez que la herramienta funciona, otras aristas sobre las que pase no reemplazan a esa.

Para dibujar una línea paralela a una arista existente:

1. Pulse {{key:L}} y pase el puntero sobre la arista que quiere igualar.
2. Mueva hasta el punto de inicio, sin cruzar otras aristas por el camino si puede, y haga clic.
3. Mueva en la dirección paralela a esa arista. La línea se vuelve magenta y la punta dice "Paralela a arista". Perpendicular funciona igual, dentro del plano en que dibuja.

Si se recordó la arista equivocada, pulse {{key:Esc}}, pase el puntero sobre la arista correcta y empiece de nuevo.

## Bloquear una dirección

Después del primer clic de una herramienta, puede mantener el siguiente punto sobre una línea:

| Tecla | Bloquea a |
|---|---|
| {{key:Right}} | El eje rojo |
| {{key:Left}} | El eje verde |
| {{key:Up}} | El eje azul (hacia arriba) |
| {{key:Down}} | Paralela a la arista recordada (vea arriba) |

Pulse la misma flecha de nuevo para desbloquear. La barra de estado dice "Bloqueado al eje rojo. Pulse la misma flecha para desbloquear."

Mientras está bloqueado, el punto se desliza a lo largo de la línea hacia donde esté el puntero, y aun así se alinea con los puntos sobre los que pase: pase sobre la esquina de otra caja para dibujar una línea a lo largo del rojo exactamente hasta esa esquina.

**{{key:Shift}}** bloquea la dirección a la que está ajustado en este momento (un eje, o paralela), mientras lo mantenga pulsado. Suéltelo para desbloquear.

Los bloqueos funcionan en {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Desplazar}}, {{ui:Escalar}} y {{ui:Cinta}}. Antes del primer clic, las teclas de flecha giran la vista.

## Dentro de un grupo

Mientras edita dentro de un grupo o componente, los ejes son los propios del grupo (se mueven con él, y giran con él si se rotó). Las referencias siguen encontrando puntos y aristas fuera del grupo, así que puede alinear cosas con el resto del modelo.
