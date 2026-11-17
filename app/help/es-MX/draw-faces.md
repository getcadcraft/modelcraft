---
title: Dibujar caras con líneas, rectángulos, círculos y arcos
summary: Cree caras planas sobre el suelo o sobre otras caras, divídalas con líneas, y dibuje círculos y polígonos con el número de lados que desee.
keywords: dibujar, línea, rectángulo, círculo, polígono, desfase, retranqueo, marco, borde, arco, curva, spline, suave, cable, trayectoria, abombamiento, radio, curva, cara, planta, huella, dividir, lados, segmentos, contorno, lápiz
from: b6d7b7dd
---

Todo en ModelCraft empieza como una **cara** plana: una superficie cerrada por aristas. Puede dibujar una cara directamente con {{ui:Rectángulo}}, {{ui:Círculo}} o {{ui:Polígono}}, o trazar el contorno de una arista a la vez con {{ui:Línea}}. Las caras son lo que [Empujar/jalar](topic:push-pull) convierte en sólidos.

## Dibujar un rectángulo

1. Pulse {{key:R}}.
2. Haga clic en la primera esquina: sobre el suelo, o sobre cualquier cara del modelo.
3. Mueva el puntero. El rectángulo se mantiene sobre el suelo (o sobre la cara donde empezó), y el cuadro de valor ({{ui:Cotas}}) muestra su ancho y su fondo. La sugerencia dice "Cuadrado" cuando los lados son iguales.

   Para dibujar en otro plano, señale hacia él: una cara que pasa por la primera esquina coloca el rectángulo sobre esa cara, y forzar el cursor a un punto fuera del plano (un punto final, una arista, el eje azul) levanta el rectángulo de pie a través de ambas esquinas. Vuelva a forzar el cursor a un punto del primer plano y el rectángulo volverá a quedar acostado. Para conservar un plano, pulse una tecla de flecha: {{key:Up}} mantiene el rectángulo nivelado (el plano azul), {{key:Right}} en el plano rojo, {{key:Left}} en el plano verde. Pulse la misma tecla otra vez para desbloquear.
4. Haga clic en la esquina opuesta, o escriba las dos medidas separadas por una coma y pulse {{key:Enter}}: `4m,3m`, `4000,3000` en un modelo en milímetros, o `12',10'6"` en pies y pulgadas.

   Aparece una cara con cuatro aristas alrededor.

Las medidas escritas siguen la dirección hacia donde apuntaba: si el puntero está a la izquierda de la primera esquina al escribir, el rectángulo crece hacia la izquierda.

:::warning
La coma separa las dos medidas, así que no puede ser el separador decimal. Escriba `2.5m,3m`, nunca `2,5m`.
:::

## Dibujar un círculo o un polígono

1. Pulse {{key:C}} para un círculo o {{key:N}} para un polígono.
2. Para cambiar el número de lados, escríbalo antes de hacer clic: `12s` (o solo `12`) y {{key:Enter}}. Un círculo empieza con 24 lados y un polígono con 6. La sugerencia muestra el número actual, y ModelCraft lo recuerda para el siguiente círculo hasta que lo cambie o cambie de herramienta.
3. Haga clic en el centro, sobre el suelo o sobre una cara. Para centrarlo en una cara, señale el centro de la cara ("Centro de la cara") o el punto medio de una de sus aristas ("Punto medio") con el puntero justo dentro de esa cara: el círculo se dibuja sobre esa cara, incluso en el extremo angosto de una caja larga.
4. Haga clic para fijar el radio, o escríbalo ({{ui:Radio}} en el cuadro de valor) y pulse {{key:Enter}}.

Un círculo es un polígono de muchos lados. Cuando jala un círculo hacia arriba con Empujar/jalar, sus lados se suavizan para que el cilindro se lea como una sola superficie lisa.

## Dibujar un arco

1. Pulse {{key:A}} ({{ui:Arco}}).
2. Haga clic donde empieza el arco y luego donde termina (o escriba la longitud entre ambos puntos).
3. Mueva el puntero para abultar el arco hacia afuera, y haga clic. La sugerencia dice "Semicírculo" cuando el abultamiento es la mitad de la distancia entre los extremos. O escriba qué tanto se separa el punto medio: `2` y {{key:Enter}}.

Para dibujar un arco alrededor de un punto, use {{ui:Arco por centro}}: haga clic en el centro, luego donde empieza el arco (o escriba el radio), y después donde termina (o escriba el ángulo en grados, como `90`). Se ajusta en pasos de 15°.

Un arco iniciado en una cara se dibuja sobre esa cara; de lo contrario queda sobre el suelo, o se levanta de pie cuando sus dos extremos están a alturas distintas. Un arco tiene 12 segmentos; escriba `24s` mientras dibuja para más. Los arcos cierran caras igual que las líneas: un arco que cruza la esquina de un rectángulo lo divide.

## Dibujar una curva suave

{{ui:Curva}} dibuja una línea suave que pasa por cada punto en el que haga clic: un cable, la trayectoria de un pasamanos, el borde de un jardín. Puede separarse del suelo: los puntos se ajustan a esquinas, aristas y caras en cualquier lugar, y las teclas de flecha bloquean rojo, verde o azul como con {{ui:Línea}}.

1. Haga clic en {{ui:Curva}} en el grupo {{ui:Dibujo}}.
2. Haga clic en los puntos por donde pasa la curva. Escriba `<0,0,1>` y pulse {{key:Enter}} para un punto 1 arriba del último, `[x,y,z]` para un lugar exacto, o una longitud para un punto a esa distancia hacia el puntero.
3. Pulse {{key:Enter}} o haga doble clic para terminar. Haga clic en el primer punto otra vez para cerrar la curva. {{key:Backspace}} deshace el último punto.

Una curva se selecciona como una sola pieza. Para cambiarla, selecciónela y haga clic en {{ui:Editar puntos}} en {{ui:Información de entidad}}: sus puntos se muestran como cuadrados. Haga clic en uno, luego haga clic donde debe ir (o escriba `<dx,dy,dz>`). {{key:Esc}} devuelve un punto a su posición anterior y termina la edición. Una curva plana cerrada forma una cara; una curva que delimita una cara ya no se puede editar.

## Desfase: un borde dentro o fuera de una cara

{{ui:Desfase}} copia el contorno de una cara a una distancia fija hacia dentro (o hacia fuera), para un marco, un borde, un alféizar o el vidrio de una pantalla.

1. Pulse {{key:F}} y haga clic en la cara, o seleccione primero la cara y luego pulse {{key:F}}.
2. Mueva el puntero hacia dentro de la cara para un contorno interior, o hacia afuera para uno exterior. El nuevo contorno lo sigue, y la sugerencia indica la distancia.
3. Haga clic, o escriba la distancia y pulse {{key:Enter}}.

La cara se divide en dos: la cara interior y un marco alrededor (o un anillo nuevo afuera). Empuje o jale cualquiera de las dos de inmediato: para una pantalla, dibuje la caja, empújela hasta su grosor, aplique desfase a la cara frontal 30 mm hacia adentro y empuje un poco la cara interior para el vidrio. Los huecos de la cara también reciben desfase, y un arco o un círculo sigue siendo una sola curva (más pequeña o más grande).

- **Haga doble clic** en una cara con {{ui:Desfase}} para aplicarle de nuevo la última distancia.
- **Aristas:** seleccione una cadena de aristas conectadas en un mismo plano (por ejemplo, las dos líneas de una L), pulse {{key:F}}, mueva hacia el lado que quiera y escriba la distancia: se dibuja una copia paralela, con esquinas a inglete.
- Cuando la distancia es mayor de lo que permite la cara, ModelCraft lo indica y no dibuja nada.

## Los arcos, círculos y polígonos son curvas

Haga clic en cualquier segmento de un arco, un círculo o un polígono y se selecciona toda la curva. {{ui:Información de entidad}} entonces muestra su radio, sus segmentos, su ángulo (en arcos) y su longitud. Escriba allí un nuevo radio para cambiar su tamaño alrededor de su centro; las caras dibujadas en su plano lo siguen. Cuando la cara de una curva ya se ha empujado o jalado, su radio se mantiene como está.

## Dibujar con líneas

1. Pulse {{key:L}}.
2. Haga clic donde empieza la línea.
3. Haga clic donde termina, o escriba una longitud y pulse {{key:Enter}}. La longitud escrita va en la dirección que indica el puntero.
4. Siga haciendo clic. Cada clic inicia la siguiente línea desde el final de la anterior.
5. Cierre el contorno haciendo clic otra vez en el primer punto. Cuando las líneas cierran un circuito plano, se llena con una cara y la herramienta deja de encadenar. Pulse {{key:Esc}} para detenerse en cualquier momento.

Las líneas siguen las direcciones roja, verde y azul cuando se acerca a ellas; la línea toma ese color y la sugerencia dice "Sobre el eje rojo". Vea [Inferencia y forzado del cursor](topic:inference) para saber cómo bloquear una dirección y forzar el cursor a puntos.

### Hacia dónde va una línea cuando no toca nada

- Una línea que empieza en una cara se queda en el plano de esa cara.
- Una línea que empieza en el suelo, o en el espacio vacío, se mantiene nivelada con su punto de inicio. Si mira el modelo de canto, va en el plano vertical que le está de frente.
- Para dibujar una línea a un lugar exacto, escriba un punto: `[x,y,z]` para un punto del modelo, o `<dx,dy,dz>` para un desplazamiento desde el inicio. Vea [Escribir medidas exactas](topic:value-box).

## Dividir una cara

Dibuje una línea a través de una cara, de una arista a otra (o de arista a arista pasando por otras líneas). La cara se divide en dos caras. Cada una conserva su lado y su color. Lo mismo funciona con un rectángulo o un círculo dibujado sobre una cara: la forma se convierte en su propia cara dentro de la mayor, que ahora tiene un hueco.

Así se trazan los cuartos sobre una losa de piso, una ventana en un muro o un escalón en una escalera: dibuje el contorno sobre la cara y luego empuje o jale la nueva cara.

## Caras que miran en sentido contrario

Cada cara tiene un frente y un reverso. El reverso se ve gris azulado. Las caras dibujadas sobre el suelo miran hacia arriba; las caras dibujadas sobre otra cara miran en el mismo sentido que ella.

Si una cara muestra su reverso donde espera el frente, selecciónela y haga clic en {{ui:Invertir cara}} en {{ui:Información de entidad}}.

## Lo que ve mientras dibuja

- Un marcador de color donde el puntero se fuerza, y su nombre en la sugerencia, abajo a la izquierda.
- Una vista previa de la línea o la forma.
- El tamaño en vivo en el cuadro de valor. Puede escribir encima en cualquier momento.

## Si la forma no está donde esperaba

- En una pantalla táctil, vea [Solución de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Si una línea se forzó a algo lejano detrás, use la órbita para girar un poco la vista: los puntos ocultos detrás de una cara nunca se fuerzan, pero sí los puntos de su borde.
- Pulse {{key:Mod+Z}} para deshacer la última forma; un deshacer quita una línea o una forma.
