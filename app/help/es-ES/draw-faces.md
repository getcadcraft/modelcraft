---
title: Dibujar caras con líneas, rectángulos, círculos y arcos
summary: Cree caras planas sobre el suelo o sobre otras caras, divídalas con líneas, y dibuje círculos y polígonos con el número de lados que desee.
keywords: dibujar, línea, rectángulo, círculo, polígono, desfase, interior, marco, borde, arco, curva, spline, suavizar, cable, trayectoria, abultamiento, radio, curva, cara, planta, huella, dividir, lados, segmentos, contorno, lápiz
from: b6d7b7dd
---

Todo en ModelCraft empieza como una **cara** plana: una superficie cerrada por aristas. Puede dibujar una cara directamente con {{ui:Rectángulo}}, {{ui:Círculo}} o {{ui:Polígono}}, o trazar su contorno arista a arista con {{ui:Línea}}. Las caras son lo que [Empujar/tirar](topic:push-pull) convierte en sólidos.

## Dibujar un rectángulo

1. Pulse {{key:R}}.
2. Haga clic en la primera esquina: en el suelo, o en cualquier cara del modelo.
3. Mueva el puntero. El rectángulo se mantiene en el suelo (o en la cara en la que empezó), y el cuadro de valores ({{ui:Cotas}}) muestra su anchura y su profundidad. La sugerencia dice "Cuadrado" cuando los lados son iguales.

   Para dibujar en otro plano, sitúe el puntero sobre él: una cara que pasa por la primera esquina coloca el rectángulo en esa cara, y ajustarse a un punto fuera del plano (un extremo, una arista, el eje azul) levanta el rectángulo y lo hace pasar por las dos esquinas. Vuelva a ajustarse a un punto del primer plano y volverá a quedar tendido. Para mantener un plano, pulse una tecla de flecha: {{key:Up}} mantiene el rectángulo horizontal (el plano azul), {{key:Right}} en el plano rojo, {{key:Left}} en el plano verde. Pulse la misma tecla de nuevo para desbloquear.
4. Haga clic en la esquina opuesta, o escriba las dos medidas separadas por una coma y pulse {{key:Enter}}: `4m,3m`, `4000,3000` en un modelo en milímetros, o `12',10'6"` en pies y pulgadas.

   Aparece una cara con cuatro aristas alrededor.

Las medidas escritas van en la dirección hacia la que apuntaba el puntero: si el puntero está a la izquierda de la primera esquina cuando escribe, el rectángulo crece hacia la izquierda.

:::warning
La coma separa las dos medidas, así que no puede ser el separador decimal. Escriba `2.5m,3m`, nunca `2,5m`.
:::

## Dibujar un círculo o un polígono

1. Pulse {{key:C}} para un círculo o {{key:N}} para un polígono.
2. Para cambiar el número de lados, escríbalo antes de hacer clic: `12s` (o solo `12`) y {{key:Enter}}. Un círculo empieza con 24 lados y un polígono con 6. La sugerencia muestra el número actual, y ModelCraft lo conserva para el siguiente círculo hasta que lo cambie o cambie de herramienta.
3. Haga clic en el centro, en el suelo o en una cara. Para centrarlo en una cara, sitúe el puntero en el centro de la cara ("Centro de cara") o en el punto medio de una de sus aristas ("Punto medio"), con el puntero justo dentro de esa cara: el círculo se dibuja en esa cara, incluso en el extremo estrecho de una caja larga.
4. Haga clic para fijar el radio, o escríbalo ({{ui:Radio}} en el cuadro de valores) y pulse {{key:Enter}}.

Un círculo es un polígono con muchos lados. Cuando tira de un círculo hacia arriba con Empujar/tirar, sus lados se suavizan para que el cilindro se vea como una sola superficie continua.

## Dibujar un arco

1. Pulse {{key:A}} ({{ui:Arco}}).
2. Haga clic donde empieza el arco y después donde termina (o escriba la longitud entre ellos).
3. Mueva el puntero para abombar el arco y haga clic. La sugerencia dice "Semicírculo" cuando el abombamiento es la mitad de la distancia entre los extremos. O escriba cuánto se separa el centro: `2` y {{key:Enter}}.

Para dibujar un arco alrededor de un punto, use {{ui:Arco por centro}}: haga clic en el centro, después donde empieza el arco (o escriba el radio), y luego donde termina (o escriba el ángulo en grados, como `90`). Se ajusta en pasos de 15°.

Un arco iniciado sobre una cara se dibuja en esa cara; si no, queda en el suelo, o se levanta en vertical cuando sus dos extremos están a alturas distintas. Un arco tiene 12 segmentos; escriba `24s` mientras dibuja para obtener más. Los arcos cierran caras igual que las líneas: un arco que cruza la esquina de un rectángulo lo divide.

## Dibujar una curva suave

{{ui:Curva}} dibuja una línea suave que pasa por cada punto en el que hace clic: un cable, el trazado de un pasamanos, el borde de un jardín. Puede salirse del suelo: los puntos se ajustan a esquinas, aristas y caras en cualquier lugar, y las teclas de flecha bloquean el rojo, el verde o el azul, como con {{ui:Línea}}.

1. Haga clic en {{ui:Curva}} en el grupo {{ui:Dibujo}}.
2. Haga clic en los puntos por los que pasa la curva. Escriba `<0,0,1>` y pulse {{key:Enter}} para un punto 1 por encima del último, `[x,y,z]` para un lugar exacto, o una longitud para un punto a esa distancia hacia el puntero.
3. Pulse {{key:Enter}} o haga doble clic para terminar. Haga clic de nuevo en el primer punto para cerrar la curva. {{key:Backspace}} elimina el último punto.

Una curva se selecciona como una sola pieza. Para cambiarla, selecciónela y haga clic en {{ui:Editar puntos}} en {{ui:Información de entidad}}: sus puntos aparecen como cuadrados. Haga clic en uno y después en el lugar al que va (o escriba `<dx,dy,dz>`). {{key:Esc}} devuelve un punto a su posición anterior y termina la edición. Una curva plana cerrada forma una cara; una curva que delimita una cara ya no se puede editar.

## Desfase: un borde dentro o fuera de una cara

{{ui:Desfase}} copia el contorno de una cara a una distancia fijada hacia dentro (o hacia fuera), para un marco, un borde, un alféizar o el cristal de una pantalla.

1. Pulse {{key:F}} y haga clic en la cara, o seleccione primero la cara y después pulse {{key:F}}.
2. Mueva el puntero hacia dentro de la cara para un contorno interior, o hacia fuera para uno exterior. El nuevo contorno lo sigue, y la sugerencia indica la distancia.
3. Haga clic, o escriba la distancia y pulse {{key:Enter}}.

La cara se divide en dos: la cara interior y un marco alrededor (o un nuevo anillo exterior). Empuje o tire de cualquiera de las dos de inmediato: para una pantalla, dibuje la caja, empújela hasta su grosor, desplace la cara frontal 30 mm hacia dentro y empuje un poco la cara interior para el cristal. Los huecos de la cara también se desplazan, y un arco o un círculo sigue siendo una sola curva (más pequeña o más grande).

- **Haga doble clic** en una cara con {{ui:Desfase}} para desplazarla de nuevo la última distancia.
- **Aristas:** seleccione una cadena de aristas conectadas en un mismo plano (por ejemplo, las dos líneas de una L), pulse {{key:F}}, mueva el puntero hacia el lado que quiera y escriba la distancia: se dibuja una copia paralela, con esquinas a inglete.
- Cuando la distancia es mayor de lo que permite la cara, ModelCraft lo indica y no dibuja nada.

## Los arcos, círculos y polígonos son curvas

Haga clic en cualquier segmento de un arco, un círculo o un polígono y se selecciona la curva entera. {{ui:Información de entidad}} muestra entonces su radio, sus segmentos, su ángulo (en arcos) y su longitud. Escriba un nuevo radio ahí para cambiar su tamaño respecto a su centro; las caras dibujadas en su plano lo siguen. Una vez que se ha empujado o tirado de la cara de una curva, su radio se mantiene como está.

## Dibujar con líneas

1. Pulse {{key:L}}.
2. Haga clic donde empieza la línea.
3. Haga clic donde termina, o escriba una longitud y pulse {{key:Enter}}. La longitud escrita va en la dirección que indica el puntero.
4. Siga haciendo clic. Cada clic empieza la siguiente línea desde el final de la anterior.
5. Cierre el contorno haciendo clic de nuevo en el primer punto. Cuando las líneas cierran un bucle plano, se rellena con una cara y la herramienta deja de encadenar. Pulse {{key:Esc}} para parar en cualquier momento.

Las líneas siguen las direcciones rojo, verde y azul cuando se acerca a ellas; la línea toma ese color y la sugerencia dice "En eje rojo". Véase [Inferencia y ajuste](topic:inference) para bloquear una dirección y ajustarse a puntos.

### Adónde va una línea cuando no toca nada

- Una línea que empieza en una cara se mantiene en el plano de esa cara.
- Una línea que empieza en el suelo, o en el espacio vacío, se mantiene a nivel con su punto inicial. Si mira el modelo de canto, va en el plano vertical que le da frente.
- Para dibujar una línea hasta un lugar exacto, escriba un punto: `[x,y,z]` para un punto del modelo, o `<dx,dy,dz>` para un desplazamiento desde el inicio. Véase [Introducir medidas exactas](topic:value-box).

## Dividir una cara

Dibuje una línea que atraviese una cara, de una arista a otra (o de arista a arista pasando por otras líneas). La cara se divide en dos caras. Cada una conserva su lado y su color. Lo mismo ocurre con un rectángulo o un círculo dibujado sobre una cara: la forma se convierte en su propia cara dentro de la mayor, que ahora tiene un hueco.

Así se distribuyen las habitaciones sobre una losa, una ventana en un muro o un escalón en una escalera: dibuje el contorno sobre la cara y, después, empuje o tire de la nueva cara.

## Caras orientadas al revés

Cada cara tiene una parte frontal y una trasera. La trasera se muestra en gris azulado. Las caras dibujadas en el suelo miran hacia arriba; las dibujadas sobre otra cara miran igual que ella.

Si una cara muestra su parte trasera donde espera la frontal, selecciónela y haga clic en {{ui:Invertir cara}} en {{ui:Información de entidad}}.

## Lo que ve mientras dibuja

- Un marcador de color donde se ajusta el puntero, y su nombre en la sugerencia de la parte inferior izquierda.
- Una vista previa de la línea o de la forma.
- La medida en directo en el cuadro de valores. Puede escribir encima en cualquier momento.

## Si la forma no está donde esperaba

- En una pantalla táctil, véase [Solución de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Si una línea se ha ajustado a algo muy alejado detrás, gire un poco la vista: los puntos ocultos tras una cara nunca se ajustan, pero los de su borde sí.
- Pulse {{key:Mod+Z}} para deshacer la última forma; un paso de deshacer elimina una línea o una forma.
