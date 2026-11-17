---
title: Girar y escalar
summary: Gire elementos alrededor de un punto haciendo clic o escribiendo grados, y cámbielos de tamaño de manera uniforme por un factor.
keywords: pinzamientos de escala, estirar, no uniforme, por eje, voltear, simetría, copia simétrica, voltear en el eje, girar, ángulo, grados, transportador, escalar, cambiar tamaño, ampliar, reducir, factor, escala uniforme
from: 45cdcb49
---

## Girar

{{ui:Rotate}} ({{key:Q}}) gira la selección alrededor de un punto central. Requiere tres clics: el centro, una dirección inicial y la dirección final.

1. Seleccione lo que quiere girar. Si no hay nada seleccionado, Girar toma lo primero en que haga clic.
2. Pulse {{key:Q}}. Un anillo sigue al puntero y muestra el plano en que va a girar.
3. Haga clic en el centro de giro.
   - En el suelo o en espacio vacío, el anillo queda plano (azul): el giro es alrededor de un eje vertical, como girar un edificio en su terreno.
   - Sobre una cara, el anillo queda en el plano de esa cara: el giro es alrededor de la dirección propia de la cara. Haga clic en un muro para girar algo alrededor de un eje horizontal.
4. Haga clic en un punto que defina dónde empieza el ángulo, por ejemplo a lo largo de una arista de lo que está girando.
5. Mueva el puntero alrededor del centro. El ángulo se muestra en la punta y en el cuadro de valor ({{ui:Angle}}). Se ajusta por pasos de 15° cuando se acerca a uno.
6. Haga clic para terminar, o escriba el ángulo en grados y pulse {{key:Enter}}: `90`, `45`, `-30`.

   Los ángulos positivos giran en sentido antihorario, visto desde el lado al que mira el anillo.

Pulse {{key:Ctrl}} (o {{key:Alt}}) mientras gira para girar una **copia** y dejar el original en su lugar, como con Desplazar; la punta indica si copiar está activo, y pulsar la tecla de nuevo lo desactiva. Escriba `3x` justo después de una copia girada para obtener más copias alrededor del mismo centro.

Igual que en Desplazar, al girar parte de una geometría conectada se retuercen las caras unidas a ella. Agrupe primero las cosas para girarlas completas.

:::note
La punta indica que las teclas de flecha eligen el eje de giro, pero en esta versión primero orbitan la vista antes del primer clic. Para elegir el eje, haga clic en el centro sobre una cara que mire hacia donde quiere. Vea [Aún no disponible](topic:not-built-yet).
:::

## Escalar

{{ui:Scale}} ({{key:S}}) cambia el tamaño de la selección. Seleccione primero lo que quiere cambiar de tamaño, y luego pulse {{key:S}}: aparecen pequeños cuadros (pinzamientos) en las esquinas, las aristas y los puntos medios de los lados de su caja.

### Estirar o escalar con los pinzamientos

- Un pinzamiento de **esquina** escala de manera uniforme en todas las direcciones, alrededor de la esquina opuesta.
- El pinzamiento en el punto medio de un **lado** estira solo en esa dirección, alrededor del lado opuesto: alargue una caja sin hacerla más alta.
- El pinzamiento en el punto medio de una **arista** de la caja estira en las dos direcciones que la cruzan.
- Mantenga {{key:Ctrl}} al hacer clic en un pinzamiento para escalar alrededor del centro de la caja.

Haga clic en un pinzamiento, mueva el puntero y haga clic otra vez; o haga clic en el pinzamiento, escriba un factor (`2` duplica, `0.5` reduce a la mitad) y pulse {{key:Enter}}. Para dar a cada dirección su propio factor, escriba tres, para rojo, verde y azul: `2,1,0.5`. Dentro de un grupo abierto, las direcciones son las del propio grupo.

### Escalar alrededor de cualquier punto

Haga clic en cualquier lugar que no sea un pinzamiento para escalar de manera uniforme alrededor de un punto propio. Requiere tres clics:

1. Seleccione lo que quiere cambiar de tamaño. Si no hay nada seleccionado, Escalar toma lo primero en que haga clic.
2. Pulse {{key:S}}.
3. Haga clic en el punto que se mantiene fijo (no en un pinzamiento), por ejemplo una esquina inferior.
4. Haga clic en un punto de referencia. Su distancia al primer punto cuenta como 1×.
5. Mueva el puntero hacia el primer punto o alejándose de él. El factor se muestra en la punta y en el cuadro de valor ({{ui:Scale}}).
6. Haga clic para terminar, o escriba un factor y pulse {{key:Enter}}: `2` duplica el tamaño, `0.5` lo reduce a la mitad.

### Escalar a un tamaño exacto

Para que algo tenga una longitud exacta, calcule el factor: longitud nueva dividida entre longitud actual. En el modo de tres clics el cuadro de valor hace cálculos, así que escriba `4.2/3.6` para que un muro de 3.6 m mida 4.2 m. El cuadro de valor de un pinzamiento acepta solo números: calcule el factor primero (4.2 entre 3.6 es aproximadamente 1.1667). Seleccione la arista primero para leer su longitud actual en {{ui:Entity info}}.

### Corregir una importación con tamaño incorrecto

Los archivos OBJ no tienen unidad, así que un modelo dibujado en milímetros llega 1000 veces más grande. Seleccione el grupo importado, pulse {{key:S}}, haga clic en un pinzamiento de esquina, escriba `0.001` y pulse {{key:Enter}}. Para un modelo dibujado en pulgadas, escriba `0.0254`.

## Puntos a tener en cuenta

- Escalar alrededor de un punto con los tres clics es uniforme. Para estirar en una sola dirección, use un pinzamiento de lado o de arista (vea arriba).
- Escalar un grupo o componente cambia la copia que escaló; las demás copias de un componente conservan su tamaño.
- Pulse {{key:Esc}} antes del último clic para cancelar.

## Voltear

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} o {{ui:Flip along blue}} refleja la selección en su lugar, a través del centro de su caja: una escalera con giro a la izquierda se vuelve con giro a la derecha. Las caras siguen mirando hacia afuera, y un grupo o componente se refleja completo (su interior no se reescribe).

{{ui:Flipped copy along red}} (y verde, azul) deja el original en su lugar y pone una copia reflejada al lado, al otro lado de la caja de la selección: la otra puerta de un par, el otro ala de un edificio. La geometría suelta que toque ahí se une al original, como siempre ocurre con la geometría tocada; haga primero el original un grupo para mantenerlos separados.

Dentro de un grupo abierto, rojo, verde y azul son los ejes propios del grupo.
