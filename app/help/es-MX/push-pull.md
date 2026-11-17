---
title: Empujar y tirar caras para convertirlas en sólidos
summary: Convierta una cara en una caja, haga que un edificio sea más alto o más bajo, agregue un saliente o un hueco, y repita una distancia con un doble clic.
keywords: empujar tirar, extruir, altura, sólido, caja, masa, más alto, rebaje, saliente, repetir, doble clic, volumen, nivel, sobre cara, a ras, misma altura
from: dc093c91
---

{{ui:Empujar/tirar}} ({{key:P}}) mueve una cara a lo largo de su propia dirección: arriba y abajo para un piso, hacia adentro y hacia afuera para una pared. Lo que pasa depende de la cara.

## Hacer un sólido a partir de una cara

1. Dibuje una cara, por ejemplo un rectángulo en el suelo ([Dibujar caras](topic:draw-faces)).
2. Pulse {{key:P}}.
3. Pase el puntero sobre la cara. Se resalta.
4. Haga clic en la cara y luego mueva el puntero. La cara sube (o baja) y se forman caras laterales desde sus aristas. El cuadro de valor ({{ui:Distancia}}) y la indicación muestran la distancia.
5. Haga clic para terminar, o escriba una distancia y pulse {{key:Enter}}: `3m`, `10'`, `2700` en un modelo en milímetros.

   Ahora tiene un sólido cerrado. Selecciónelo todo y agrúpelo (vea [Grupos y componentes](topic:groups-components)): {{ui:Información de entidad}} muestra entonces "Sólido: Sí" y su volumen.

Una cara sola puede ir en cualquiera de los dos sentidos: jálela hacia arriba para una masa sobre el suelo, o empújela hacia abajo para un pozo o una cimentación.

:::tip
En lugar de hacer dos clics, presione sobre la cara, arrastre y suelte. En una pantalla táctil es la forma natural: presione, arrastre, levante.
:::

## Tirar hasta la altura de otra cosa

Mientras tira, pase el puntero sobre una esquina, un punto medio, una arista o una guía de otra parte del modelo. La cara se ajusta a esa altura y un marcador muestra el punto. Úselo para hacer dos bloques de la misma altura, o para detenerse en una línea guía que colocó con la [cinta métrica](topic:guides-measure).

También puede pasar el puntero sobre una cara paralela a la que empuja, como la parte superior de otro bloque o la parte superior de la caja sobre la que se apoya un poste. La indicación dice "Sobre cara", y la cara que empuja termina a ras de ella. Por ejemplo, empuje la cara interior de un tubo hacia abajo hasta que quede a ras de la caja bajo el tubo.

Una cara en ángulo respecto de la que empuja no define un nivel: la distancia sigue al puntero. Lo mismo ocurre con una cara detrás de la que empuja.

Cuando una cara empujada termina a ras de las caras que la rodean, sus lados desaparecen. No quedan lados de altura cero, y el contorno que dibujó permanece sobre la cara, así que puede volver a empujarla después. Para convertirla otra vez en una sola cara, borre las aristas del contorno con el {{ui:Borrador}}: las dos caras se unen.

## Hacer una caja más alta o más baja

Empuje o tire de la parte superior de una caja. Como los lados ya suben rectos desde ella, la parte superior simplemente se mueve: la caja se hace más alta o más baja, y no se crean aristas nuevas.

- Si empuja la parte superior hasta el fondo, la caja se elimina. ModelCraft se detiene en altura cero; nunca voltea la caja hacia adentro.
- Lo mismo vale para cualquier cara cuyos vecinos corran todos en su dirección, como el extremo de una pared.

## Agregar un saliente o un hueco

1. Dibuje un rectángulo en el lado de una caja (empiécelo sobre la cara; queda en el plano de la cara).
2. Pulse {{key:P}} y tire del nuevo rectángulo **hacia afuera**. Agrega material: un saliente, una chimenea, un alero.
3. O empújelo **hacia adentro**. Hace un hueco: un pórtico, un nicho, una entrada retranqueada.

Cuando los lados de la nueva parte se alinean con caras que ya existen, se fusionan en una sola cara, así que no quedan líneas sueltas en una pared plana.

## Empujar hasta atravesar

Empujar una cara hacia un sólido se detiene en la primera cara que hay detrás. Al llegar a esa cara, abre una abertura que la atraviesa. Así se hacen ventanas y puertas en una pared con grosor. Vea [Cortar una abertura en una pared](topic:openings).

## Escribir una distancia

Después de hacer clic en la cara, escriba la distancia y pulse {{key:Enter}}.

- La distancia escrita va en el sentido en que se movía. Si todavía no se ha movido, va hacia el frente de la cara (fuera de un sólido, hacia arriba desde el suelo).
- Escriba un número negativo, como `-500`, para ir en el otro sentido.
- Si cambia de opinión antes de hacer clic, pulse {{key:Esc}}. La cara vuelve a su lugar.

## Repetir la última distancia

Después de un empujar/tirar, haga doble clic en otra cara con {{ui:Empujar/tirar}} todavía seleccionado. Se mueve la misma distancia. Es la forma rápida de dar el mismo grosor o altura a varios muros o varios pisos.

ModelCraft recuerda la distancia hasta que cambie a otra herramienta.

## Cosas que debe saber

- Empujar/tirar trabaja con una cara a la vez. Si hace clic en algo que no es una cara, la barra de estado dice "Empujar/tirar trabaja con una cara. Haga clic en una cara."
- Para empujar/tirar una cara dentro de un grupo o componente, ábralo primero (haga doble clic en él).
- Con **Colisión** activada, un empujar o tirar que choca con otro sólido se detiene donde toca, y la indicación dice con qué toca (el nombre del objeto, o "geometría suelta en este grupo") y resalta las caras con las que se encontró. Un bolsillo que empuja dentro de su propio sólido (por ejemplo, una cara desplazada que vuelve a empujar hacia abajo) forma parte de ese sólido y nunca lo detienen sus paredes.
- Dos sólidos empujados uno contra otro no se cortan ni se unen: sus caras simplemente se atraviesan. Vea [Aún no disponible](topic:not-built-yet).
