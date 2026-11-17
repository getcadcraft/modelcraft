---
title: Hacer una abertura en un muro
summary: Dibuje una ventana o puerta sobre un muro con espesor y empújela a través, de modo que el muro tenga un agujero real.
keywords: ventana, puerta, abertura, agujero, muro, cortar, empujar a través, vacío, espesor, fachada
from: 6b22f32c
---

Una abertura necesita un muro con dos caras: una caja, o un muro que hizo al jalar hacia arriba un rectángulo largo y delgado. Una cara sola, de pie, no tiene nada a través de lo cual empujar.

## Haga un muro para practicar

1. Pulse {{key:R}}, haga clic en una esquina del suelo, escriba `6m,0.3m` (o `20',12"`) y pulse {{key:Enter}}.
2. Pulse {{key:P}}, haga clic en el rectángulo, escriba `3m` (o `10'`) y pulse {{key:Enter}}.

Tiene un muro de 300 mm (12 in) de espesor.

## Dibujar la abertura

1. Gire la vista para ver el lado largo del muro.
2. Pulse {{key:R}}.
3. Pase el puntero sobre la cara del muro y luego haga clic donde va la esquina inferior de la ventana. La sugerencia dice "En cara".
4. Escriba el ancho y la altura de la ventana, como `1.2m,1.5m` (o `4',5'`), y pulse {{key:Enter}}.

   La ventana es una cara propia dentro de la cara del muro, que ahora tiene un hueco alrededor.

Para colocarla a una distancia exacta de la esquina y del piso, use primero [guías](topic:guides-measure): con {{ui:Tape}}, arrastre líneas guía desde la arista inferior y la arista final del muro, y luego empiece el rectángulo donde se cruzan dos guías (la sugerencia dice "En guía").

## Empujarla a través

1. Pulse {{key:P}}.
2. Haga clic en la cara de la ventana y empújela hacia dentro del muro.
3. Muévala hasta que se detenga en la cara trasera, y luego haga clic. O escriba el espesor del muro, `300` (o `12`), y pulse {{key:Enter}}.

   ModelCraft se detiene en la cara de atrás y la abre: el muro ahora tiene un agujero de lado a lado, con cuatro caras laterales (jambas, dintel y alféizar) que lo recubren. {{ui:Entity info}} sigue llamando sólido cerrado al muro cuando está agrupado.

Si empuja menos que el espesor completo, obtiene un rebaje en lugar de un agujero.

## Una puerta

Dibuje el rectángulo empezando en la arista inferior de la cara del muro (la sugerencia dice "En arista" o "Punto final"), de modo que la abertura llegue al suelo. Empújelo a través de la misma manera.

## Muchas ventanas del mismo tamaño

1. Haga la primera abertura.
2. Para las siguientes, dibuje los rectángulos y luego haga doble clic en cada uno con {{ui:Push/pull}}: un doble clic repite la última distancia. Vea [Empujar y tirar](topic:push-pull#repeat-the-last-distance).

## Si no atravesó

- El rectángulo debe dibujarse **sobre** la cara del muro. Si se dibujó en el aire frente a ella, es una cara separada: deshaga y vuelva a dibujarlo, empezando sobre la cara.
- El empuje se detiene en la primera cara detrás de la abertura. Si algo más estorba dentro del muro (una cara interior que quedó de un dibujo anterior), se detiene ahí; borre las aristas de esa cara y vuelva a intentarlo.
- La geometría en un grupo aparte no se corta. Abra el grupo que contiene el muro y dibuje la abertura dentro de él.
