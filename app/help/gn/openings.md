---
title: Cortar una abertura en un muro
summary: Dibujá una ventana o puerta sobre un muro con espesor y empujala a través, para que el muro tenga un agujero real.
keywords: ventana, puerta, abertura, agujero, muro, cortar, empujar a través, vacío, espesor, fachada
from: 6b22f32c
---

Una abertura necesita un muro con dos lados: una caja, o un muro que hiciste estirando hacia arriba un rectángulo largo y fino. Una sola cara parada sola no tiene nada hacia dónde empujar a través.

## Hacer un muro para practicar

1. Apretá {{key:R}}, clickeá una esquina en el suelo y escribí `6m,0.3m` (o `20',12"`), después {{key:Enter}}.
2. Apretá {{key:P}}, clickeá el rectángulo y escribí `3m` (o `10'`), después {{key:Enter}}.

Tenés un muro de 300 mm (12 in) de espesor.

## Dibujar la abertura

1. Orbitá hasta ver el lado largo del muro.
2. Apretá {{key:R}}.
3. Pasá el puntero sobre la cara del muro, después clickeá donde va la esquina inferior de la ventana. La pista dice "En cara".
4. Escribí el ancho y el alto de la ventana, como `1.2m,1.5m` (o `4',5'`), y apretá {{key:Enter}}.

   La ventana es una cara propia dentro de la cara del muro, que ahora tiene un agujero alrededor.

Para colocarla a una distancia exacta de la esquina y del piso, usá primero [guías](topic:guides-measure): con {{ui:Cinta}}, arrastrá líneas guía desde el borde inferior y el borde final del muro, después empezá el rectángulo donde se cruzan dos guías (la pista dice "En guía").

## Empujarla a través

1. Apretá {{key:P}}.
2. Clickeá la cara de la ventana y empujala hacia el muro.
3. Movelo hasta que se detenga en la cara de atrás, después clickeá. O escribí el espesor del muro, `300` (o `12`), y apretá {{key:Enter}}.

   ModelCraft se detiene en la cara de detrás y la abre: el muro ahora tiene un agujero de lado a lado, con cuatro caras laterales (jambas, dintel y alféizar) que lo revisten. {{ui:Información de entidad}} sigue llamando sólido cerrado al muro cuando está agrupado.

Si empujás menos que el espesor completo, obtenés un hueco en vez de un agujero.

## Una puerta

Dibujá el rectángulo empezando en el borde inferior de la cara del muro (la pista dice "En borde" o "Punto final"), para que la abertura llegue al piso. Empujala a través de la misma forma.

## Muchas ventanas del mismo tamaño

1. Hacé la primera abertura.
2. Para las siguientes, dibujá los rectángulos, después hacé doble clic en cada uno con {{ui:Empujar/tirar}}: un doble clic repite la última distancia. Ver [Empujar y tirar](topic:push-pull#repeat-the-last-distance).

## Si no cortó a través

- El rectángulo debe dibujarse **sobre** la cara del muro. Si se dibujó en el aire delante de ella, es una cara separada: deshacé y dibujala otra vez, empezando sobre la cara.
- El empuje se detiene en la primera cara detrás de la abertura. Si hay algo más en el camino dentro del muro (una cara interior que quedó de dibujos anteriores), se detiene ahí; borrá los bordes de esa cara e intentá otra vez.
- La geometría en un grupo separado no se corta. Abrí el grupo que contiene el muro y dibujá la abertura dentro de él.
