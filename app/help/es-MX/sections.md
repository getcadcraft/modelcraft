---
title: Planos de sección: corte el modelo
summary: Coloque un plano de sección para ver dentro del modelo, deslícelo, invierta su lado o desactive el corte.
keywords: sección, plano de sección, corte de sección, corte, vista en corte, recorte, interior, planta, rebanada, sección transversal
from: 28c3a645
---

Un plano de sección corta el modelo para que pueda ver y trabajar dentro de él: la planta de una casa, el interior de un mueble. El modelo no se modifica; el corte es solo una vista.

## Colocar uno

1. Haga clic en {{ui:Sección}} en el grupo {{ui:Cámara}}.
2. Haga clic en una cara. El plano se coloca sobre esa cara, con cuatro flechas que apuntan hacia usted.

   Haga clic lejos de cualquier cara para obtener un plano cuadrado a la dirección en la que más mira. Pulse primero una tecla de flecha para ponerlo cuadrado con el rojo ({{key:Right}}), el verde ({{key:Left}}) o el azul ({{key:Up}}).

El lado hacia el que apuntan las flechas es el que se **retira**. Un plano colocado sobre una cara todavía no corta nada: deslícelo hacia el modelo.

## Deslizarlo, invertirlo, desactivarlo

Haga clic en el contorno del plano para seleccionarlo. En {{ui:Información de entidad}}:

- {{ui:En la dirección de sus flechas}} indica dónde está. Escriba una nueva distancia y pulse {{key:Enter}} para deslizarlo a través del modelo; escribir `-1m` en un plano colocado sobre una cara frontal lo mueve 1 m hacia el modelo.
- {{ui:Invertir}} da la vuelta a las flechas, para que el otro lado quede cortado.
- {{ui:Activo (corta el modelo)}}: un plano corta a la vez. Marque la casilla de otro plano, o coloque uno nuevo, y ese corta en su lugar.
- Renómbrelo en {{ui:Nombre}}; bórrelo con {{key:Delete}} o con el {{ui:Borrador}}.

Donde el plano atraviesa un sólido cerrado, el corte se rellena con un color oscuro. La geometría que no está cerrada (una sola cara, una caja abierta) se corta, pero no se rellena.

## Mostrar y ocultar

En {{ui:Vistas}}:

- {{ui:Mostrar planos de sección}} oculta los contornos y las flechas de los planos (el corte se queda).
- {{ui:Mostrar cortes de sección}} desactiva el corte y muestra el modelo completo, sin borrar los planos.

[Vista de presentación](topic:styles-shadows#presentation-view) también oculta los contornos.

## Cosas que debe saber

- Lo que se retira no puede seleccionarse ni ajustarse, así que puede dibujar sobre lo que muestra el corte.
- Los planos de sección, cuál está activo y los dos interruptores se guardan en el archivo de ModelCraft. Cada cambio es un paso de deshacer.
- Las exportaciones siempre contienen el modelo completo: una sección es una vista, no una edición.
