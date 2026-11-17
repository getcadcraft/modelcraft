---
title: Abrir un hueco en un muro
summary: Dibuje una ventana o una puerta en un muro con grosor y empújela a través, para que el muro tenga un orificio real.
keywords: ventana, puerta, hueco, agujero, muro, cortar, empujar a través, vacío, grosor, fachada
from: 6b22f32c
---

Un hueco necesita un muro con dos caras: una caja, o un muro que creó tirando hacia arriba de un rectángulo largo y delgado. Una cara aislada no tiene nada detrás a lo que atravesar.

## Cree un muro para practicar

1. Pulse {{key:R}}, haga clic en una esquina del suelo y escriba `6m,0.3m` (o `20',12"`), y después pulse {{key:Enter}}.
2. Pulse {{key:P}}, haga clic en el rectángulo y escriba `3m` (o `10'`), y después pulse {{key:Enter}}.

Tiene un muro de 300 mm (12 in) de grosor.

## Dibuje el hueco

1. Oriente la vista para ver el lado largo del muro.
2. Pulse {{key:R}}.
3. Sitúe el puntero sobre la cara del muro y haga clic donde va la esquina inferior de la ventana. El consejo dice «En cara».
4. Escriba el ancho y la altura de la ventana, como `1.2m,1.5m` (o `4',5'`), y pulse {{key:Enter}}.

   La ventana es una cara propia dentro de la cara del muro, que ahora tiene un agujero alrededor.

Para colocarla a una distancia exacta de la esquina y del suelo, use primero las [guías](topic:guides-measure): con {{ui:Cinta}}, arrastre líneas guía desde los bordes inferior y final del muro, y después empiece el rectángulo donde se cruzan dos guías (el consejo dice «En guía»).

## Empújela a través

1. Pulse {{key:P}}.
2. Haga clic en la cara de la ventana y empújela hacia el muro.
3. Mueva hasta que se detenga en la cara posterior, y haga clic. O escriba el grosor del muro, `300` (o `12`), y pulse {{key:Enter}}.

   ModelCraft se detiene en la cara de atrás y la abre: el muro tiene ahora un agujero de lado a lado, con cuatro caras laterales (jambas, dintel y alféizar) que lo recubren. {{ui:Información de entidad}} todavía llama al muro un sólido cerrado cuando está agrupado.

Si empuja menos que el grosor completo, obtiene un rebaje en lugar de un agujero.

## Una puerta

Dibuje el rectángulo empezando en el borde inferior de la cara del muro (el consejo dice «En arista» o «Extremo»), de modo que el hueco llegue al suelo. Empújelo a través de la misma forma.

## Muchas ventanas del mismo tamaño

1. Haga la primera abertura.
2. Para las siguientes, dibuje los rectángulos y después haga doble clic en cada uno con {{ui:Empujar/tirar}}: un doble clic repite la última distancia. Véase [Empujar y tirar](topic:push-pull#repeat-the-last-distance).

## Si no atravesó

- El rectángulo debe dibujarse **sobre** la cara del muro. Si se dibujó en el aire delante de ella, es una cara separada: deshaga y vuelva a dibujarla, empezando sobre la cara.
- El empuje se detiene en la primera cara detrás del hueco. Si algo más se interpone dentro del muro (una cara interior que quedó de dibujos anteriores), se detendrá allí; borre las aristas de esa cara e inténtelo de nuevo.
- La geometría en un grupo separado no se corta. Abra el grupo que contiene el muro y dibuje el hueco dentro de él.
