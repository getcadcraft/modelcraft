---
title: Acotá y redimensioná lo que dibujaste
summary: Poné cotas entre esquinas, en arcos y círculos, o entre dos aristas; escribí una longitud nueva para redimensionar el modelo. Reescribí la longitud de una arista o el ancho, profundidad y altura de un grupo en Información de entidad.
keywords: cota, cotas, redimensionar, cambiar tamaño, editar tamaño, longitud, ancho, profundidad, altura, estirar, cota conductora, anotar, medir, después del hecho, radio, diámetro, ángulo, angular, arco, círculo, R, Ø
from: a1f815ec
---

Los tamaños en ModelCraft no están fijos una vez que algo está dibujado. Una cota muestra una longitud en el modelo, y escribir una longitud nueva en ella redimensiona el modelo para que coincida. También podés reescribir la longitud de una arista, o el ancho, la profundidad y la altura de un grupo, en {{ui:Información de entidad}}.

## Poner una cota

1. Apretá {{key:D}}, o hacé clic en {{ui:Cota}} en la barra de herramientas.
2. Hacé clic en una esquina desde donde medir. Se ajusta a esquinas, puntos medios y aristas, como al dibujar.
3. Hacé clic en la segunda esquina.

   O hacé clic una vez en una **arista** (la pista dice "En arista") para acotar toda esa arista en un clic.
4. Mové el puntero hasta donde debe ir la línea de cota, y hacé clic. También podés escribir el desplazamiento, como `0.5m`, y apretar {{key:Enter}}.

   La línea de cota queda nivelada para una arista horizontal, salvo que mires desde el costado. Para una arista vertical queda en el plano vertical que mejor te mira.

La barra de estado dice "Cota 4 m." Las cotas muestran su longitud en la unidad del modelo y se actualizan cuando cambiás la unidad en el selector.

## Radio, diámetro y ángulo

La misma herramienta {{ui:Cota}} acota redondeles y ángulos:

- **Un arco:** hacé clic en el arco. La pista dice {{ui:Radio}}. Mové el puntero hasta donde debe ir el texto y hacé clic: la cota dice **R 1.5 m**.
- **Un círculo:** hacé clic en el círculo. Obtenés un **diámetro** (**Ø 3 m**) con una línea que cruza el círculo por su centro. Los polígonos funcionan igual, con sus esquinas sobre el círculo.
- **El ángulo entre dos aristas:** hacé clic en una arista, y después en una segunda arista que se une con ella en una esquina (mientras estás sobre ella, la pista dice {{ui:Ángulo entre bordes}}). Después movete dentro del ángulo que querés, y hacé clic. Adentro de la esquina obtenés el ángulo entre las aristas; movete a un lado y obtenés el ángulo al lado (por ejemplo 150° en vez de 30°). Qué tan lejos de la esquina hacés clic define dónde va el arco; o escribí esa distancia.

Para cambiar un radio a diámetro o al revés, seleccioná la cota y elegí en {{ui:Mostrar como}} en {{ui:Información de entidad}}.

**Redimensionar con ellas:** escribí un radio o diámetro nuevo justo después de ponerlo, o seleccionalo más tarde y escribí. El arco o círculo mantiene su centro y cambia de tamaño; una cara que delimita (un disco, el extremo de una ranura) cambia con él. Dos cosas solo miden:

- **Una cota de ángulo** nunca cambia el modelo. Para cambiar un ángulo, girá las aristas con {{ui:Rotar}}.
- **El círculo al final de un cilindro** (un círculo que estiraste con {{ui:Empujar/tirar}}) no puede redimensionarse desde su cota, porque sus lados tendrían que cambiar también. Escalá el cilindro en su lugar, alrededor de su eje.

## Redimensionar el modelo con una cota

Justo después de poner una cota, escribí una longitud nueva y apretá {{key:Enter}}: `6m`, `12'`, `3500` en un modelo en milímetros. El modelo cambia a ese tamaño.

Más tarde, en cualquier momento:

1. Con {{ui:Seleccionar}}, hacé clic en el texto o la línea de la cota. {{ui:Información de entidad}} dice **Cota** y muestra su {{ui:Longitud}}.
2. Escribí la longitud nueva y apretá {{key:Enter}}. Podés escribir directamente en la caja de valores, o en la caja {{ui:Longitud}} de {{ui:Información de entidad}}.

### Qué se mueve

La segunda esquina que hiciste clic se mueve, y con ella todo lo que está más allá:

- **Las dos esquinas en una misma pieza** (el ancho de una caja, la altura de un muro): el lado de la esquina móvil se desliza hacia afuera o hacia adentro, y las caras unidas a él se estiran. Una caja queda como sólido cerrado, y todo lo que esté completamente de ese lado, como un componente de ventana, se mueve con ella.
- **Las esquinas en dos piezas separadas** (el hueco entre dos cajas): la pieza de la esquina móvil se mueve entera, y el hueco cambia.
- **La esquina móvil dentro de un grupo o componente** que no contiene la otra esquina: se mueve el grupo entero.
- **Las dos esquinas dentro del mismo grupo o componente**: se estira por dentro. Un componente cambia en todos los lugares donde está colocado, como siempre que lo editás.

Para cambiar qué extremo se mueve, seleccioná la cota y elegí en {{ui:Mueve}} en {{ui:Información de entidad}}:

| Opción | Qué pasa |
|---|---|
| {{ui:Segundo extremo}} (la predeterminada) | Se mueve el extremo que hiciste clic segundo |
| {{ui:Primer extremo}} | Se mueve el extremo que hiciste clic primero |
| {{ui:Ambos extremos (centrado)}} | Cada extremo se mueve la mitad del cambio, así el medio queda quieto |

### Cuando un redimensionado se rechaza

ModelCraft no cambia nada y dice por qué en la barra de estado:

- "una cara se doblaría fuera de su plano": la cota corre inclinada a través de la forma. Acotá a lo largo de una arista, o de rojo, verde o azul.
- "una cara se achicaría a nada o se daría vuelta hacia adentro": la longitud nueva es demasiado corta para la forma.
- "el extremo que se mueve no está en una esquina del modelo": ese extremo se puso en un espacio vacío o en el medio de una arista. Elegí el otro extremo en {{ui:Mueve}}, o poné la cota sobre dos esquinas.
- "una longitud tiene que ser mayor que cero".

Cada redimensionado es un solo paso: {{key:Mod+Z}} lo deshace.

## Reescribir un tamaño en Información de entidad

No siempre necesitás una cota:

- **Una arista:** seleccionala. Su {{ui:Longitud}} en {{ui:Información de entidad}} es una caja donde podés escribir. Escribir una longitud en la caja de valores también sirve. Se mueve el extremo más adelante en rojo, después verde, después azul, y lo que está unido a él se estira. Por ejemplo, reescribir la arista inferior delantera de una caja la hace más ancha hacia la derecha.
- **Un grupo o componente:** seleccionalo. {{ui:Ancho (pytũ)}}, {{ui:Profundidad (hovy)}} y {{ui:Altura (hovymi)}} son cajas. Se mueve su lado lejano (derecha, atrás, arriba). Estos son los ejes propios del grupo, antes de cualquier rotación que le hayas dado.

Apretá {{key:Enter}} para aplicar, o {{key:Esc}} para devolver el valor anterior.

## Las cotas siguen al modelo

Una cota está unida a las dos esquinas donde se puso (un ángulo: a su esquina y a los extremos lejanos de sus dos aristas; un radio o diámetro: a su arco o círculo). Movés, empujás/tirás o redimensionás la geometría, y la cota la sigue y muestra la nueva longitud. Se mantiene unida cuando convertís la geometría en un grupo o componente.

Si un extremo se puso en un lugar que no es una esquina (sobre una cara, o en espacio vacío), o si su esquina se borra, ese extremo se queda donde estaba. La cota igual mide, pero solo puede redimensionar desde su otro extremo.

## Quitar cotas

- Una cota: seleccionala y apretá {{key:Delete}}, o hacé clic en ella con la {{ui:Goma}}.
- Todas las cotas: sin nada seleccionado, hacé clic en {{ui:Eliminar cota opa}} en {{ui:Información de entidad}}.

Las cotas se guardan en el archivo `.modelcraft`. No se exportan a otros formatos, que llevan solo el modelo 3D. Un archivo con cotas se abre igual en una versión anterior de ModelCraft, sin ellas.
