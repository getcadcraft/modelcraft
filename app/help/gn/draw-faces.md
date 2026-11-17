---
title: Ojapo caras con líneas, rectángulos, círculos y arcos
summary: Ojapo caras planas en el suelo o en otras caras, dividilas con líneas, y ojapo círculos y polígonos con la cantidad de lados que quieras.
keywords: dibujar, línea, rectángulo, círculo, polígono, desfase, inset, marco, borde, arco, curva, spline, suave, cable, trayecto, abultar, radio, curva, cara, planta, huella, dividir, lados, segmentos, contorno, lápiz
from: b6d7b7dd
---

Todo en ModelCraft empieza como una **cara** plana: superficie cerrada por bordes. Podés dibujar una cara directamente con {{ui:Rectángulo}}, {{ui:Círculo}} o {{ui:Polígono}}, o trazar un borde por vez con {{ui:Línea}}. Las caras son lo que [Empujar/tirar](topic:push-pull) convierte en sólidos.

## Dibujar un rectángulo

1. Presioná {{key:R}}.
2. Ojapo clic en la primera esquina: en el suelo, o en cualquier cara del modelo.
3. Mové el puntero. El rectángulo queda en el suelo (o en la cara donde empezaste), y la caja de valores ({{ui:Cotas}}) muestra su ancho y fondo. El consejo dice "Cuadrado" cuando los lados son iguales.

   Para dibujar en otro plano, señalá ese plano: una cara que pasa por la primera esquina pone el rectángulo en esa cara, y ajustar a un punto fuera del plano (un extremo, un borde, el eje azul) levanta el rectángulo pasando por las dos esquinas. Si volvés a ajustar a un punto del primer plano, se acuesta otra vez. Para mantener un plano, presioná una flecha: {{key:Up}} mantiene el rectángulo nivelado (plano azul), {{key:Right}} en el plano rojo, {{key:Left}} en el plano verde. Presioná la misma tecla otra vez para desbloquear.
4. Ojapo clic en la esquina opuesta, térã escribí los dos tamaños separados por coma y presioná {{key:Enter}}: `4m,3m`, `4000,3000` en un modelo en milímetros, o `12',10'6"` en pies y pulgadas.

   Aparece una cara con cuatro bordes alrededor.

Los tamaños escritos van en la dirección que señalabas: si el puntero está a la izquierda de la primera esquina cuando escribís, el rectángulo crece hacia la izquierda.

:::warning
La coma separa los dos tamaños, así que no puede ser separador decimal. Escribí `2.5m,3m`, nunca `2,5m`.
:::

## Dibujar un círculo o un polígono

1. Presioná {{key:C}} para un círculo o {{key:N}} para un polígono.
2. Para cambiar la cantidad de lados, escribila antes de hacer clic: `12s` (o solo `12`) y {{key:Enter}}. El círculo empieza con 24 lados y el polígono con 6. El consejo muestra el número actual, y ModelCraft lo mantiene para el próximo círculo hasta que lo cambies o cambies de herramienta.
3. Ojapo clic en el centro, en el suelo o en una cara. Para centrarlo en una cara, señalá el medio de la cara ("Centro de cara") o el medio de uno de sus bordes ("Punto medio") con el puntero justo dentro de esa cara: el círculo se dibuja en esa cara, incluso en el extremo angosto de una caja larga.
4. Ojapo clic para fijar el radio, térã escribilo ({{ui:Radio}} en la caja de valores) y presioná {{key:Enter}}.

Un círculo es un polígono de muchos lados. Cuando levantás un círculo con Empujar/tirar, sus lados se suavizan para que el cilindro se vea como una sola superficie lisa.

## Dibujar un arco

1. Presioná {{key:A}} ({{ui:Arco}}).
2. Ojapo clic donde empieza el arco, después donde termina (o escribí la longitud entre ellos).
3. Mové el puntero para abultar el arco hacia afuera, y ojapo clic. El consejo dice "Medio círculo" cuando el abultamiento es la mitad de la distancia entre los extremos. O escribí cuánto se separa el medio: `2` y {{key:Enter}}.

Para dibujar un arco alrededor de un punto, usá {{ui:Arco desde el centro}}: ojapo clic en el centro, después donde empieza el arco (o escribí el radio), después donde termina (o escribí el ángulo en grados, ejemplo `90`). Ajusta en pasos de 15°.

Un arco empezado en una cara se dibuja en esa cara; si no, queda en el suelo, o se levanta cuando sus dos extremos están a alturas distintas. El arco tiene 12 segmentos; escribí `24s` mientras dibujás para más. Los arcos cierran caras igual que las líneas: un arco que cruza la esquina de un rectángulo lo divide.

## Dibujar una curva suave

{{ui:Curva}} dibuja una línea suave que pasa por cada punto que señalás: un cable, el trayecto de un pasamanos, un borde de jardín. Puede salir del suelo: los puntos ajustan a esquinas, bordes y caras en cualquier lugar, y las flechas bloquean rojo, verde o azul igual que con {{ui:Línea}}.

1. Ojapo clic en {{ui:Curva}} en el grupo {{ui:Dibujar}}.
2. Ojapo clic en los puntos por donde pasa la curva. Escribí `<0,0,1>` y {{key:Enter}} para un punto 1 arriba del último, `[x,y,z]` para un lugar exacto, o una longitud para un punto a esa distancia hacia el puntero.
3. Presioná {{key:Enter}} o hacé doble clic para terminar. Ojapo clic otra vez en el primer punto para cerrar la curva. {{key:Backspace}} quita el último punto.

Una curva se selecciona como una sola pieza. Para cambiarla, seleccionala y ojapo clic en {{ui:Editar puntos}} en {{ui:Información de entidad}}: sus puntos aparecen como cuadrados. Ojapo clic en uno, después donde va (o escribí `<dx,dy,dz>`). {{key:Esc}} devuelve un punto a su lugar y termina la edición. Una curva plana cerrada hace una cara; una curva que contornea una cara ya no se puede editar.

## Desfase: un borde dentro o fuera de una cara

{{ui:Desfase}} copia el contorno de una cara a una distancia fijada hacia adentro (o hacia afuera), para un marco, un borde, un alféizar o el vidrio de una pantalla.

1. Presioná {{key:F}} y ojapo clic en la cara, o seleccioná primero la cara y después presioná {{key:F}}.
2. Mové el puntero hacia adentro de la cara para un contorno interior, o hacia afuera para uno exterior. El nuevo contorno sigue el puntero, y el consejo dice cuánto es.
3. Ojapo clic, o escribí la distancia y presioná {{key:Enter}}.

La cara se divide en dos: la cara interior y un marco alrededor (o un anillo nuevo afuera). Empujá/tirá cualquiera de las dos enseguida: para una pantalla, dibujá la caja, empujala a su espesor, desfasá la cara frontal 30 mm hacia adentro y empujá un poco la cara interior para el vidrio. Los agujeros de la cara también se desfasan, y un arco o círculo sigue siendo una sola curva (más chica o más grande).

- **Doble clic** en una cara con {{ui:Desfase}} para desfasarla otra vez con la última distancia.
- **Bordes:** seleccioná una cadena de bordes conectados en un mismo plano (por ejemplo las dos líneas de una L), presioná {{key:F}}, mové hacia el lado que querés y escribí la distancia: se dibuja una copia paralela, con esquinas en inglete.
- Cuando la distancia es mayor que lo que permite la cara, ModelCraft lo dice y no dibuja nada.

## Arcos, círculos y polígonos son curvas

Ojapo clic en cualquier segmento de un arco, un círculo o un polígono y se selecciona toda la curva. {{ui:Información de entidad}} muestra entonces su radio, sus segmentos, su ángulo (arcos) y su longitud. Escribí un radio nuevo ahí para cambiar su tamaño desde el centro; las caras dibujadas en su plano lo siguen. Una vez que la cara de una curva fue empujada o tirada, su radio queda como está.

## Dibujar con líneas

1. Presioná {{key:L}}.
2. Ojapo clic donde empieza la línea.
3. Ojapo clic donde termina, o escribí una longitud y presioná {{key:Enter}}. La longitud escrita va en la dirección que muestra el puntero.
4. Seguí haciendo clic. Cada clic empieza la siguiente línea desde el final de la anterior.
5. Cerrá el contorno haciendo clic otra vez en el primer punto. Cuando las líneas cierran un bucle plano, se llena con una cara y la herramienta deja de encadenar. Presioná {{key:Esc}} para parar en cualquier momento.

Las líneas siguen las direcciones roja, verde y azul cuando te acercás a ellas; la línea toma ese color y el consejo dice "En eje rojo". Mirá [Inferencia y ajuste](topic:inference) para saber cómo bloquear una dirección y ajustar a puntos.

### Adónde va una línea cuando no toca nada

- Una línea que empieza en una cara se queda en el plano de esa cara.
- Una línea que empieza en el suelo, o en el espacio vacío, se queda nivelada con su punto de inicio. Si mirás el modelo de canto, va en el plano vertical que te mira.
- Para dibujar una línea a un lugar exacto, escribí un punto: `[x,y,z]` para un punto del modelo, o `<dx,dy,dz>` para un desplazamiento desde el inicio. Mirá [Escribir tamaños exactos](topic:value-box).

## Dividir una cara

Dibujá una línea sobre una cara, de un borde a otro (o de borde a borde pasando por otras líneas). La cara se divide en dos caras. Cada una conserva su lado y su color. Lo mismo pasa con un rectángulo o círculo dibujado sobre una cara: la forma pasa a ser su propia cara dentro de la más grande, que ahora tiene un agujero.

Así se distribuyen ambientes sobre una losa de piso, una ventana en un muro, o un escalón en una escalera: dibujá el contorno sobre la cara y después empujá o tirá la cara nueva.

## Caras que miran al revés

Cada cara tiene un frente y un dorso. El dorso se ve gris azulado. Las caras dibujadas en el suelo miran hacia arriba; las dibujadas sobre otra cara miran igual que ella.

Si una cara muestra su dorso donde esperabas el frente, seleccionala y ojapo clic en {{ui:Cara ojejapova'ekue}} en {{ui:Información de entidad}}.

## Lo que ves mientras dibujás

- Una marca de color donde el puntero ajusta, y su nombre en el consejo abajo a la izquierda.
- Una vista previa de la línea o forma.
- El tamaño en vivo en la caja de valores. Podés escribir encima en cualquier momento.

## Si la forma no está donde esperabas

- En una pantalla táctil, mirá [Solución de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Si una línea ajustó a algo muy atrás, girá un poco la vista: los puntos ocultos detrás de una cara nunca ajustan, pero sí los de su borde.
- Presioná {{key:Mod+Z}} para deshacer la última forma; un deshacer quita una línea o una forma.
