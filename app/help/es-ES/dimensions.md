---
title: Acotar y redimensionar lo dibujado
summary: Coloque cotas entre esquinas, en arcos y círculos, o entre dos aristas; escriba una nueva longitud para redimensionar el modelo. Vuelva a escribir la longitud de una arista o el ancho, la profundidad y la altura de un grupo en Información de entidad.
keywords: cota, cotas, redimensionar, cambiar tamaño, editar tamaño, longitud, ancho, profundidad, altura, estirar, cota controladora, anotar, medir, a posteriori, radio, diámetro, ángulo, angular, arco, círculo, R, Ø
from: a1f815ec
---

Los tamaños en ModelCraft no quedan fijos una vez dibujado algo. Una cota muestra una longitud en el modelo, y escribir una nueva longitud en ella redimensiona el modelo para que coincida. También puede volver a escribir la longitud de una arista, o el ancho, la profundidad y la altura de un grupo, en {{ui:Información de entidad}}.

## Colocar una cota

1. Pulse {{key:D}}, o haga clic en {{ui:Cota}} en la barra de herramientas.
2. Haga clic en una esquina desde la que medir. Se ajusta a esquinas, puntos medios y aristas, como al dibujar.
3. Haga clic en la segunda esquina.

   O haga clic una vez sobre una **arista** (la indicación dice «En arista») para acotar toda esa arista de un clic.
4. Mueva el puntero hasta donde debe ir la línea de cota, y haga clic. También puede escribir el desplazamiento, como `0.5m`, y pulsar {{key:Enter}}.

   La línea de cota se mantiene horizontal en una arista horizontal, salvo que la mire de lado. Para una arista vertical, se mantiene en el plano vertical que mejor le mira.

La barra de estado dice «Cota 4 m.». Las cotas muestran su longitud en la unidad del modelo y se actualizan cuando cambia la unidad en el selector.

## Radio, diámetro y ángulo

La misma herramienta {{ui:Cota}} acota redondeles y ángulos:

- **Un arco:** haga clic en el arco. La indicación dice {{ui:Radio}}. Mueva el puntero hasta donde debe ir el texto y haga clic: la cota dice **R 1.5 m**.
- **Un círculo:** haga clic en el círculo. Obtiene un **diámetro** (**Ø 3 m**) con una línea que atraviesa el círculo por su centro. Los polígonos funcionan igual, con sus esquinas sobre el círculo.
- **El ángulo entre dos aristas:** haga clic en una arista y luego en una segunda arista que se encuentre con ella en una esquina (mientras está sobre ella, la indicación dice {{ui:Ángulo entre las aristas}}). Después mueva el puntero hacia el ángulo que quiere y haga clic. Dentro de la esquina obtiene el ángulo entre las aristas; si se desplaza a un lado, obtiene el ángulo contiguo (por ejemplo, 150° en lugar de 30°). La distancia a la esquina en la que hace clic fija el lugar del arco; o escriba esa distancia.

Para cambiar un radio a diámetro o viceversa, seleccione la cota y elija en {{ui:Mostrar como}} en {{ui:Información de entidad}}.

**Redimensionar con ellas:** escriba un nuevo radio o diámetro justo después de colocar uno, o selecciónelo más tarde y escriba. El arco o el círculo conserva su centro y cambia de tamaño; una cara que delimita (un disco, el extremo de una ranura) cambia con él. Hay dos cosas que solo miden:

- **Una cota de ángulo** nunca cambia el modelo. Para cambiar un ángulo, gire las aristas con {{ui:Girar}}.
- **El círculo al final de un cilindro** (un círculo que estiró con {{ui:Empujar/tirar}}) no puede redimensionarse desde su cota, porque sus lados tendrían que cambiar también. Escale el cilindro en su lugar, alrededor de su eje.

## Redimensionar el modelo con una cota

Justo después de colocar una cota, escriba una nueva longitud y pulse {{key:Enter}}: `6m`, `12'`, `3500` en un modelo en milímetros. El modelo cambia a ese tamaño.

Más tarde, en cualquier momento:

1. Con {{ui:Seleccionar}}, haga clic en el texto o la línea de la cota. {{ui:Información de entidad}} indica **Cota** y muestra su {{ui:Longitud}}.
2. Escriba la nueva longitud y pulse {{key:Enter}}. Puede escribir directamente en el cuadro de valores, o en el cuadro {{ui:Longitud}} de {{ui:Información de entidad}}.

### Qué se mueve

Se mueve la segunda esquina en la que hizo clic, y todo lo que está más allá de ella:

- **Las dos esquinas en una misma pieza** (el ancho de una caja, la altura de un muro): el lado de la esquina móvil se desliza hacia fuera o hacia dentro, y las caras unidas a él se estiran. Una caja sigue siendo un sólido cerrado, y todo lo que esté por completo en ese lado, como un componente de ventana, se mueve con él.
- **Las esquinas en dos piezas separadas** (el hueco entre dos cajas): la pieza de la esquina móvil se mueve entera, y cambia el hueco.
- **La esquina móvil dentro de un grupo o componente** en el que no está la otra esquina: se mueve el grupo entero.
- **Ambas esquinas dentro del mismo grupo o componente**: se estira por dentro. Un componente cambia en todos los lugares en los que está colocado, como siempre que se edita.

Para cambiar qué extremo se mueve, seleccione la cota y elija en {{ui:Se desplaza}} en {{ui:Información de entidad}}:

| Opción | Qué ocurre |
|---|---|
| {{ui:Segundo extremo}} (la predeterminada) | Se mueve el extremo en el que hizo clic en segundo lugar |
| {{ui:Primer extremo}} | Se mueve el extremo en el que hizo clic en primer lugar |
| {{ui:Ambos extremos (centrado)}} | Cada extremo se mueve la mitad del cambio, así que el centro permanece fijo |

### Cuándo se rechaza un redimensionado

ModelCraft no cambia nada e indica el motivo en la barra de estado:

- «una cara se doblaría fuera de su plano»: la cota atraviesa la forma en diagonal. Acote a lo largo de una arista, o a lo largo del rojo, verde o azul.
- «una cara se reduciría a nada o se invertiría»: la nueva longitud es demasiado corta para la forma.
- «el extremo que se mueve no está en una esquina del modelo»: ese extremo se colocó en un espacio vacío o en el punto medio de una arista. Elija el otro extremo en {{ui:Se desplaza}}, o coloque la cota sobre dos esquinas.
- «una longitud debe ser mayor que cero».

Cada redimensionado es un solo paso: {{key:Mod+Z}} lo deshace.

## Volver a escribir un tamaño en Información de entidad

No siempre necesita una cota:

- **Una arista:** selecciónela. Su {{ui:Longitud}} en {{ui:Información de entidad}} es un cuadro en el que puede escribir. Escribir una longitud en el cuadro de valores también funciona. Se mueve el extremo más allá en rojo, luego verde, luego azul, y lo que está unido a él se estira. Por ejemplo, volver a escribir la arista frontal inferior de una caja la hace más ancha hacia la derecha.
- **Un grupo o componente:** selecciónelo. {{ui:Ancho (rojo)}}, {{ui:Profundidad (verde)}} y {{ui:Altura (azul)}} son cuadros. Se mueve su lado más alejado (derecho, posterior, superior). Estos son los ejes propios del grupo, antes de cualquier giro que le haya dado.

Pulse {{key:Enter}} para aplicar, o {{key:Esc}} para devolver el valor anterior.

## Las cotas siguen al modelo

Una cota está unida a las dos esquinas en las que se colocó (un ángulo: a su esquina y a los extremos lejanos de sus dos aristas; un radio o diámetro: a su arco o círculo). Si mueve, empuja/tira o redimensiona la geometría, la cota la sigue y muestra la nueva longitud. Sigue unida cuando convierte la geometría en un grupo o componente.

Si un extremo se colocó en un lugar que no es una esquina (sobre una cara, o en un espacio vacío), o si su esquina se borra, ese extremo se queda donde estaba. La cota sigue midiendo, pero solo puede redimensionarse desde su otro extremo.

## Eliminar cotas

- Una cota: selecciónela y pulse {{key:Delete}}, o haga clic en ella con el {{ui:Borrador}}.
- Todas las cotas: sin nada seleccionado, haga clic en {{ui:Eliminar todas las cotas}} en {{ui:Información de entidad}}.

Las cotas se guardan en el archivo `.modelcraft`. No se exportan a otros formatos, que solo transportan el modelo 3D. Un archivo con cotas se abre también en una versión anterior de ModelCraft, pero sin ellas.
