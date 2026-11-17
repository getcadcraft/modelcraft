---
title: Planos de sección: abra el modelo por un corte
summary: Coloque un plano de sección para ver dentro del modelo, deslícelo a través de él, invierta su sentido o desactive el corte.
keywords: sección, plano de sección, corte de sección, corte, vista seccionada, recorte, interior, planta, rebanada, sección transversal
from: 28c3a645
---

Un plano de sección corta el modelo para que pueda ver y trabajar dentro de él: una planta de una casa, el interior de un mueble. El modelo no cambia; el corte es solo una vista.

## Colocar uno

1. Pulse {{ui:Sección}} en el grupo {{ui:Cámara}}.
2. Pulse una cara. El plano se coloca sobre esa cara, con cuatro flechas apuntando hacia usted.

   Pulse lejos de cualquier cara para colocar un plano cuadrado respecto a la dirección en la que más mira. Antes, pulse una tecla de flecha para colocarlo perpendicular al rojo ({{key:Right}}), al verde ({{key:Left}}) o al azul ({{key:Up}}).

El lado al que apuntan las flechas es el que se **corta y se aparta**. Un plano colocado sobre una cara todavía no corta nada: deslícelo hacia el interior del modelo.

## Deslizarlo, invertirlo, desactivarlo

Pulse el contorno del plano para seleccionarlo. En {{ui:Información de entidad}}:

- {{ui:En la dirección de sus flechas}} indica dónde está. Escriba una nueva distancia y pulse {{key:Enter}} para deslizarlo a través del modelo; escribir `-1m` en un plano colocado sobre una cara frontal lo mueve 1 m hacia el interior del modelo.
- {{ui:Invertir}} da la vuelta a las flechas, de modo que se corta el otro lado.
- {{ui:Activo (corta el modelo)}}: un plano corta a la vez. Marque la casilla de otro plano, o coloque uno nuevo, y ese es el que corta.
- Cambie su nombre en {{ui:Nombre}}; bórrelo con {{key:Delete}} o con el {{ui:Borrador}}.

Donde el plano atraviesa un sólido cerrado, el corte se rellena con un color oscuro. La geometría que no es cerrada (una sola cara, una caja abierta) se corta, pero no se rellena.

## Mostrar y ocultar

En {{ui:Vistas}}:

- {{ui:Mostrar planos de sección}} oculta los contornos y las flechas de los planos (el corte se mantiene).
- {{ui:Mostrar cortes de sección}} desactiva el corte y muestra el modelo completo, sin borrar los planos.

[Vista de presentación](topic:styles-shadows#presentation-view) oculta también los contornos.

## Puntos que debe conocer

- Lo que se corta y se aparta no puede pulsarse ni ajustarse, así que puede dibujar sobre lo que muestra el corte.
- Los planos de sección, cuál está activo y los dos interruptores se guardan en el archivo de ModelCraft. Cada cambio es un paso de deshacer.
- Las exportaciones siempre contienen el modelo completo: una sección es una vista, no una edición.
