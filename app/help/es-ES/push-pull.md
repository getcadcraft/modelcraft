---
title: Empujar y tirar de caras para crear sólidos
summary: Convierta una cara en un bloque, haga un edificio más alto o más bajo, añada un saliente o un hueco y repita una distancia con un doble clic.
keywords: empujar tirar, extruir, altura, sólido, bloque, masa, más alto, hueco, saliente, repetir, doble clic, volumen, nivel, sobre cara, al ras, misma altura
from: dc093c91
---

{{ui:Empujar/tirar}} ({{key:P}}) mueve una cara a lo largo de su propia dirección: arriba y abajo para un suelo, dentro y fuera para una pared. Lo que ocurre depende de la cara.

## Crear un sólido a partir de una cara

1. Dibuje una cara, por ejemplo un rectángulo en el suelo ([Dibujar caras](topic:draw-faces)).
2. Pulse {{key:P}}.
3. Sitúe el puntero sobre la cara. Se resalta.
4. Haga clic en la cara y mueva el puntero. La cara sube (o baja) y de sus aristas crecen los lados. El cuadro de valor ({{ui:Distancia}}) y la sugerencia muestran la distancia.
5. Haga clic para terminar, o escriba una distancia y pulse {{key:Enter}}: `3m`, `10'`, `2700` en un modelo en milímetros.

   Ahora tiene un sólido cerrado. Selecciónelo todo y agrúpelo (consulte [Grupos y componentes](topic:groups-components)): {{ui:Información de entidad}} muestra entonces «Sólido: sí» y su volumen.

Una cara sola puede ir en cualquier sentido: tírela hacia arriba para una masa sobre el suelo, o empújela hacia abajo para un foso o una cimentación.

:::tip
En lugar de hacer clic dos veces, pulse sobre la cara, arrastre y suelte. En una pantalla táctil es la forma natural: pulse, arrastre, levante.
:::

## Tirar hasta la altura de otra cosa

Mientras tira, sitúe el puntero sobre una esquina, un punto medio, una arista o una guía de otra parte del modelo. La cara se ajusta a esa altura y un marcador muestra el punto. Úselo para que dos bloques tengan la misma altura, o para detenerse en una línea guía que colocó con la [cinta métrica](topic:guides-measure).

También puede situar el puntero sobre una cara paralela a la que está empujando, como la parte superior de otro bloque o la parte superior de la caja sobre la que se apoya un poste. La sugerencia dice «En la cara», y la cara que empuja termina al ras con ella. Por ejemplo, empuje la cara interior de un tubo hacia abajo hasta que quede al ras con la caja bajo el tubo.

Una cara en ángulo respecto a la que está empujando no fija un nivel. La distancia sigue al puntero. Lo mismo ocurre con una cara situada detrás de la que empuja.

Cuando una cara empujada vuelve a quedar al ras con las caras que la rodean, sus lados desaparecen. No quedan lados de altura cero, y el contorno que dibujó permanece en la cara, así que puede volver a empujarla más tarde. Para convertirla de nuevo en una sola cara, borre las aristas del contorno con el {{ui:Borrador}}: las dos caras se unen.

## Hacer una caja más alta o más baja

Empuje o tire de la parte superior de una caja con {{ui:Empujar/tirar}}. Como los lados ya suben rectos desde ella, la parte superior simplemente se mueve: la caja se hace más alta o más baja, y no se crean aristas nuevas.

- Empujar la parte superior hasta el fondo elimina la caja. ModelCraft se detiene en altura cero; nunca da la vuelta a la caja del revés.
- Lo mismo ocurre con cualquier cara cuyos vecinos sigan todos su dirección, como el extremo de una pared.

## Añadir un cuerpo saliente o un hueco

1. Dibuje un rectángulo en el lateral de una caja (empiece sobre la cara; se mantiene en el plano de la cara).
2. Pulse {{key:P}} y tire del nuevo rectángulo **hacia fuera**. Añade material: un cuerpo saliente, una chimenea, una marquesina.
3. O empújelo **hacia dentro**. Corta un hueco: un porche, una hornacina, una entrada retranqueada.

Cuando los lados de la nueva parte se alinean con caras ya existentes, se funden en una sola cara, así que no aparecen líneas sueltas en una pared plana.

## Empujar hasta atravesar

Al empujar una cara hacia un sólido, se detiene en la primera cara que haya detrás. Cuando llega a esa cara, corta una abertura a su través. Así se hacen ventanas y puertas en una pared con grosor. Consulte [Cortar una abertura en una pared](topic:openings).

## Escribir una distancia

Tras hacer clic en la cara, escriba la distancia y pulse {{key:Enter}}.

- La distancia escrita va en el sentido en que se movía. Si aún no se ha movido, va hacia el frente de la cara (fuera de un sólido, hacia arriba desde el suelo).
- Escriba un número negativo, como `-500`, para ir en sentido contrario.
- Si cambia de opinión antes de hacer clic, pulse {{key:Esc}}. La cara vuelve a su sitio.

## Repetir la última distancia

Tras una operación de empujar/tirar, haga doble clic en otra cara con {{ui:Empujar/tirar}} todavía activa. Se mueve la misma distancia. Es la forma rápida de dar a varias paredes o varios suelos el mismo grosor o altura.

ModelCraft recuerda la distancia hasta que cambie a otra herramienta.

## Cosas que conviene saber

- Empujar/tirar funciona con una cara a la vez. Si hace clic en algo que no es una cara, la barra de estado dice «Empujar/tirar funciona sobre una cara. Haga clic en una cara.»
- Para empujar/tirar una cara dentro de un grupo o componente, ábralo antes (haga doble clic en él).
- Con **Colisión** activada, un empuje o una tracción que choca con otro sólido se detiene donde toca, y la sugerencia indica con qué toca (el nombre del objeto o «geometría suelta en este grupo») y resalta las caras con las que se encontró. Un hueco que empuja dentro de su propio sólido (por ejemplo, una cara desplazada que se empuja de nuevo hacia abajo) forma parte de ese sólido y sus paredes nunca lo detienen.
- Dos sólidos empujados uno contra otro no se cortan ni se unen: sus caras simplemente se atraviesan. Consulte [Todavía no disponible](topic:not-built-yet).
