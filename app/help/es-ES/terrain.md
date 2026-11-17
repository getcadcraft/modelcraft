---
title: Terreno: suelo a partir de curvas de nivel y su modelado
summary: Cree el suelo a partir de curvas de nivel o como una cuadrícula, y después súbalo o bájelo con un pincel suave.
keywords: terreno, suelo, paisaje, topografía, curvas de nivel, líneas de nivel, emplazamiento, pendiente, colina, montículo, caja de arena, smoove, esculpir, nivelar, TIN
from: 407652b3
---

El terreno es un suelo formado por triángulos, así que puede seguir cualquier forma. Es un grupo: haga doble clic para editarlo.

## A partir de curvas de nivel

1. Obtenga las curvas de nivel a sus alturas: dibújelas, o [importe un plano de emplazamiento](topic:site-plan) y mueva cada curva a su nivel.
2. Selecciónelas (todas las aristas de todas las curvas).
3. {{ui:Edición}} › {{ui:Más}} › {{ui:Terreno desde las curvas de nivel seleccionadas}}.

ModelCraft une los puntos de las curvas con triángulos (una TIN) y suaviza todas las aristas interiores para que el suelo se sombree de forma continua. Las líneas se mantienen; bórrelas u ocúltelas cuando ya no las necesite. Las curvas muy densas se reducen a 8 000 puntos.

## Una cuadrícula para modelar

{{ui:Edición}} › {{ui:Más}} › {{ui:Cuadrícula de terreno…}} pide un ancho, una profundidad y un tamaño de celda, y luego coloca una cuadrícula plana de triángulos donde haga clic en su esquina. Las celdas pequeñas permiten un modelado más suave, pero generan más caras (como máximo 200 × 200 celdas).

## Modelar: subir y bajar el suelo

1. Haga doble clic en el terreno para abrirlo.
2. {{ui:Edición}} › {{ui:Más}} › {{ui:Esculpir terreno}}. Un círculo muestra el pincel sobre el suelo bajo el puntero.
3. Arrastre hacia arriba para subir el suelo bajo el pincel, o hacia abajo para bajarlo. El centro es lo que más se mueve y el suelo se atenúa hasta cero en el borde del círculo, de modo que los montículos y las depresiones salen suaves.

Para que un montículo tenga una altura exacta, haga clic una vez, escriba la altura, como `1.5m` (un signo menos la baja), y pulse {{key:Enter}}. Para cambiar el pincel, escriba una longitud antes de hacer clic: `5m` da un pincel de 5 m de radio.

Cada modelado es un paso de deshacer.

## Cosas que conviene saber

- El modelado solo mueve caras triangulares, así que cada cara sigue siendo plana. Las caras dibujadas a mano (rectángulos, polígonos) no son terreno: la herramienta lo indica.
- El modelado mueve los puntos solo en vertical; no añade puntos. Para más detalle, cree una cuadrícula con celdas más pequeñas.
- El terreno se exporta como cualquier otro grupo. En IFC es un elemento de edificación genérico, como todo lo demás.
