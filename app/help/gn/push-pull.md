---
title: Empujar y tirar caras para hacer sólidos
summary: Convertí una cara en caja, hacé un edificio más alto o más bajo, agregá un saliente o un hueco, y repetí una distancia con doble clic.
keywords: empujar tirar, extruir, altura, sólido, caja, masa, más alto, hueco, saliente, repetir, doble clic, volumen, nivel, sobre cara, a ras, misma altura
from: dc093c91
---

{{ui:Empujar/tirar}} ({{key:P}}) mueve una cara según su propia dirección: arriba y abajo para un piso, adentro y afuera para un muro. Lo que pasa depende de la cara.

## Hacer un sólido desde una cara

1. Dibujá una cara, por ejemplo un rectángulo en el suelo ([Dibujar caras](topic:draw-faces)).
2. Oprimí {{key:P}}.
3. Pasá el puntero sobre la cara. Se resalta.
4. Hacé clic en la cara y moví el puntero. La cara sube (o baja) y se forman lados desde sus bordes. El cuadro de valor ({{ui:Distancia}}) y la punta muestran la distancia.
5. Hacé clic para terminar, o escribí una distancia y oprimí {{key:Enter}}: `3m`, `10'`, `2700` en un modelo en milímetros.

   Ahora tenés un sólido cerrado. Seleccionalo todo y agrupalo (ver [Grupos y componentes](topic:groups-components)): {{ui:Información de entidad}} entonces muestra "Sólido: Sí" y su volumen.

Una cara sola puede ir para cualquier lado: tirala hacia arriba para una masa sobre el suelo, empujala hacia abajo para un pozo o un cimiento.

:::tip
En lugar de hacer clic dos veces, apretá sobre la cara, arrastrá y soltá. En pantalla táctil esa es la forma natural: apretar, arrastrar, levantar.
:::

## Tirar hasta la altura de otra cosa

Mientras tirás, pasá el puntero sobre una esquina, un punto medio, un borde o una guía de otra parte del modelo. La cara se ajusta a esa altura y aparece un marcador. Sirve para hacer dos bloques de la misma altura, o para detenerte en una línea guía que pusiste con la [cinta métrica](topic:guides-measure).

También podés pasar el puntero sobre una cara paralela a la que empujás, como la parte de arriba de otro bloque o la parte de arriba de la caja donde se apoya un poste. La punta dice "Sobre cara", y la cara que empujás termina a ras con ella. Por ejemplo, empujá la cara interior de un caño hacia abajo hasta que quede a nivel de la caja debajo del caño.

Una cara en ángulo con la que empujás no fija un nivel. La distancia sigue al puntero. Lo mismo pasa con una cara detrás de la que empujás.

Cuando una cara empujada termina a ras con las caras alrededor, sus lados desaparecen. No quedan lados de altura cero, y el contorno que dibujaste queda sobre la cara, así que podés empujarla otra vez después. Para volverla una sola cara, borrá los bordes del contorno con la {{ui:Goma}}: las dos caras se unen.

## Hacer una caja más alta o más baja

Empujá/tirá la parte de arriba de una caja. Como los lados ya suben derecho desde ahí, la parte de arriba simplemente se mueve: la caja se hace más alta o más baja, y no se crean bordes nuevos.

- Empujar la parte de arriba hasta el fondo elimina la caja. ModelCraft se detiene en altura cero; nunca da vuelta la caja hacia adentro.
- Lo mismo vale para cualquier cara cuyos vecinos vayan todos en su dirección, como el extremo de un muro.

## Agregar un saliente o un hueco

1. Dibujá un rectángulo en el costado de una caja (empezalo sobre la cara; queda en el plano de la cara).
2. Oprimí {{key:P}} y tirá el nuevo rectángulo **hacia afuera**. Agrega material: un saliente, una chimenea, un alero.
3. O empujalo **hacia adentro**. Corta un hueco: un pórtico, un nicho, una entrada retirada.

Cuando los lados de la nueva parte se alinean con caras que ya están, se unen en una sola cara, así no quedan líneas sueltas en un muro plano.

## Empujar hasta atravesar

Empujar una cara hacia dentro de un sólido se detiene en la primera cara que hay detrás. Al llegar a esa cara, corta una abertura que atraviesa. Así se hacen ventanas y puertas en un muro con espesor. Ver [Cortar una abertura en un muro](topic:openings).

## Escribir una distancia

Después de hacer clic en la cara, escribí la distancia y oprimí {{key:Enter}}.

- La distancia escrita va en la dirección en la que te movías. Si todavía no te moviste, va hacia el frente de la cara (hacia afuera de un sólido, hacia arriba desde el suelo).
- Escribí un número negativo, como `-500`, para ir en el otro sentido.
- Si cambiás de idea antes de hacer clic, oprimí {{key:Esc}}. La cara vuelve a su lugar.

## Repetir la última distancia

Después de un empuje/tirón, hacé doble clic en otra cara con {{ui:Empujar/tirar}} todavía seleccionado. Se mueve la misma distancia. Es la forma rápida de dar el mismo espesor o la misma altura a varios muros o varios pisos.

ModelCraft recuerda la distancia hasta que cambies de herramienta.

## Cosas para saber

- Empujar/tirar funciona con una cara a la vez. Si hacés clic en algo que no es una cara, la barra de estado dice "Empujar/tirar funciona en una cara. Haga clic en una cara."
- Para empujar/tirar una cara dentro de un grupo o componente, abrilo primero (hacé doble clic).
- Con **Colisión** activada, un empuje o tirón que choca con otro sólido se detiene donde toca, y la punta dice con qué toca (el nombre del objeto, o "geometría suelta en este grupo") y resalta las caras con las que se encontró. Un bolsillo que empujás dentro de su propio sólido (por ejemplo, una cara desplazada que empujás otra vez hacia abajo) forma parte de ese sólido y nunca lo detienen sus paredes.
- Dos sólidos empujados uno contra otro no se cortan ni se unen: sus caras simplemente pasan una a través de la otra. Ver [Aún no disponible](topic:not-built-yet).
