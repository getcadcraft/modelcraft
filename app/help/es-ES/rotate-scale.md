---
title: Girar y escalar
summary: Gire elementos alrededor de un punto haciendo clic o escribiendo grados, y redimensiónelos de forma uniforme por un factor.
keywords: pinzamientos de escala, estirar, no uniforme, por eje, invertir, reflejar, copia reflejada, invertir a lo largo de, girar, rotar, ángulo, grados, transportador, escalar, redimensionar, ampliar, reducir, factor, escala uniforme
from: 45cdcb49
---

## Girar

{{ui:Girar}} ({{key:Q}}) gira la selección alrededor de un punto central. Requiere tres clics: el centro, una dirección inicial y la dirección final.

1. Seleccione lo que quiere girar. Si no hay nada seleccionado, Girar toma lo primero en que haga clic.
2. Pulse {{key:Q}}. Un anillo sigue al cursor y muestra el plano en el que girará.
3. Haga clic en el centro de giro.
   - Sobre el suelo o en el espacio vacío, el anillo queda plano (azul): el giro es alrededor de un eje vertical, como girar un edificio en su solar.
   - Sobre una cara, el anillo queda en el plano de esa cara: el giro es alrededor de la dirección propia de la cara. Haga clic en un muro para girar algo alrededor de un eje horizontal.
4. Haga clic en un punto que fije dónde empieza el ángulo, por ejemplo a lo largo de una arista de lo que gira.
5. Mueva el cursor alrededor del centro. El ángulo se muestra en la punta y en el cuadro de valor ({{ui:Ángulo}}). Se ajusta en pasos de 15° cuando se acerca a uno.
6. Haga clic para terminar, o escriba el ángulo en grados y pulse {{key:Enter}}: `90`, `45`, `-30`.

   Los ángulos positivos giran en sentido antihorario, visto desde el lado al que mira el anillo.

Pulse {{key:Ctrl}} (o {{key:Alt}}) mientras gira para girar una **copia** y dejar el original donde está, como con Mover; la sugerencia indica si la copia está activa, y pulsar la tecla de nuevo la desactiva. Escriba `3x` justo después de una copia girada para obtener más copias alrededor del mismo centro.

Como ocurre con Mover, al girar una parte de una geometría conectada se retuercen las caras unidas a ella. Agrupe primero las cosas para girarlas enteras.

:::note
La sugerencia indica que las teclas de flecha eligen el eje de giro, pero en esta versión primero orbitan la vista antes del primer clic. Para elegir el eje, haga clic en el centro sobre una cara que mire en la dirección que quiera. Consulte [No disponible todavía](topic:not-built-yet).
:::

## Escalar

{{ui:Escalar}} ({{key:S}}) redimensiona la selección. Seleccione primero lo que quiere redimensionar y, después, pulse {{key:S}}: aparecen pequeños cuadrados (pinzamientos) en las esquinas, en las aristas y en los puntos medios de los lados de su caja.

### Estirar o escalar con los pinzamientos

- Un pinzamiento de **esquina** escala de forma uniforme en todas las direcciones, respecto a la esquina opuesta.
- El pinzamiento del punto medio de un **lado** estira solo en esa dirección, respecto al lado opuesto: sirve para alargar una caja sin hacerla más alta.
- El pinzamiento del punto medio de una **arista** de la caja estira en las dos direcciones que la cruzan.
- Mantenga pulsado {{key:Ctrl}} al hacer clic en un pinzamiento para escalar respecto al centro de la caja.

Haga clic en un pinzamiento, mueva el cursor y haga clic de nuevo; o haga clic en el pinzamiento, escriba un factor (`2` duplica, `0.5` reduce a la mitad) y pulse {{key:Enter}}. Para dar a cada dirección su propio factor, escriba tres: para rojo, verde y azul, `2,1,0.5`. Dentro de un grupo abierto, las direcciones son las del propio grupo.

### Escalar respecto a cualquier punto

Haga clic en cualquier lugar distinto de un pinzamiento para escalar de forma uniforme respecto a un punto propio. Requiere tres clics:

1. Seleccione lo que quiere redimensionar. Si no hay nada seleccionado, Escalar toma lo primero en que haga clic.
2. Pulse {{key:S}}.
3. Haga clic en el punto que permanece fijo (no en un pinzamiento), por ejemplo una esquina inferior.
4. Haga clic en un punto de referencia. Su distancia al primer punto cuenta como 1×.
5. Mueva el cursor hacia el primer punto o alejándolo de él. El factor se muestra en la punta y en el cuadro de valor ({{ui:Escalar}}).
6. Haga clic para terminar, o escriba un factor y pulse {{key:Enter}}: `2` duplica el tamaño, `0.5` lo reduce a la mitad.

### Escalar a un tamaño exacto

Para que algo tenga una longitud exacta, calcule el factor: longitud nueva dividida entre longitud actual. En el modo de tres clics, el cuadro de valor hace operaciones, así que escriba `4.2/3.6` para que un muro de 3.6 m mida 4.2 m. El cuadro de valor de un pinzamiento admite solo números: calcule antes el factor (4.2 entre 3.6 es aproximadamente 1.1667). Seleccione primero la arista para leer su longitud actual en {{ui:Información de entidad}}.

### Corregir una importación con un tamaño incorrecto

Los archivos OBJ no tienen unidad, así que un modelo dibujado en milímetros llega 1000 veces más grande. Seleccione el grupo importado, pulse {{key:S}}, haga clic en un pinzamiento de esquina, escriba `0.001` y pulse {{key:Enter}}. Para un modelo dibujado en pulgadas, escriba `0.0254`.

## Cosas que debe saber

- Escalar respecto a un punto con los tres clics es uniforme. Para estirar en una sola dirección, use un pinzamiento de lado o de arista (véase arriba).
- Escalar un grupo o un componente cambia la copia que escaló; las demás copias de un componente mantienen su tamaño.
- Pulse {{key:Esc}} antes del último clic para cancelar.

## Invertir

{{ui:Edición}} › {{ui:Más}} › {{ui:Voltear en el eje rojo}}, {{ui:Voltear en el eje verde}} o {{ui:Voltear en el eje azul}} refleja la selección en su sitio, a través del centro de su caja: una escalera de mano izquierda se convierte en una de mano derecha. Las caras siguen mirando hacia afuera, y un grupo o componente se refleja como un todo (su interior no se reescribe).

{{ui:Copia volteada en el eje rojo}} (y verde, azul) deja el original donde está y coloca una copia reflejada junto a él, al otro lado de la caja de la selección: la otra puerta de un par, el otro ala de un edificio. La geometría suelta que toque allí se une al original, como siempre ocurre con la geometría tocada; convierta antes el original en un grupo para mantenerlos separados.

Dentro de un grupo abierto, rojo, verde y azul son los ejes propios del grupo.
