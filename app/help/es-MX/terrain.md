---
title: Terreno: suelo a partir de curvas de nivel y cómo esculpirlo
summary: Cree el suelo a partir de curvas de nivel o como una cuadrícula, y luego súbalo o bájelo con un pincel suave.
keywords: terreno, suelo, paisaje, topografía, curvas de nivel, líneas de nivel, sitio, pendiente, colina, montículo, arenero, smoove, esculpir, nivelar, TIN
from: 407652b3
---

El terreno es un suelo formado por triángulos, así que puede seguir cualquier forma. Es un grupo: haga doble clic en él para editarlo.

## A partir de curvas de nivel

1. Obtenga las curvas de nivel a sus alturas: dibújelas, o [importe un plano de sitio](topic:site-plan) y suba cada curva a su nivel.
2. Selecciónelas (todas las aristas de todas las curvas).
3. {{ui:Edición}} › {{ui:Más}} › {{ui:Terreno desde las curvas de nivel seleccionadas}}.

ModelCraft une los puntos de las curvas con triángulos (un TIN) y suaviza cada arista interior para que el suelo se sombree de forma continua. Las líneas en sí se mantienen; bórrelas u oculte cuando ya no las necesite. Las curvas muy densas se reducen a 8 000 puntos.

## Una cuadrícula para esculpir

{{ui:Edición}} › {{ui:Más}} › {{ui:Cuadrícula de terreno…}} pide un ancho, una profundidad y un tamaño de celda, y luego coloca una cuadrícula plana de triángulos donde haga clic en su esquina. Las celdas pequeñas permiten esculpir con más suavidad, pero generan más caras (como máximo 200 × 200 celdas).

## Esculpir: subir y bajar el suelo

1. Haga doble clic en el terreno para abrirlo.
2. {{ui:Edición}} › {{ui:Más}} › {{ui:Esculpir terreno}}. Un círculo muestra el pincel sobre el suelo bajo el puntero.
3. Arrastre hacia arriba para subir el suelo bajo el pincel, o hacia abajo para bajarlo. El centro se mueve más y el suelo se reduce hasta cero en el borde del círculo, así los montículos y las depresiones quedan suaves.

Para hacer un montículo de altura exacta, haga clic una vez, luego escriba la altura, por ejemplo `1.5m` (un signo menos la baja), y pulse {{key:Enter}}. Para cambiar el pincel, escriba una longitud antes de hacer clic: `5m` da un pincel con un radio de 5 m.

Cada esculpido es un paso de deshacer.

## Puntos a tener en cuenta

- Esculpir solo mueve las caras triangulares, así que cada cara sigue plana. Las caras dibujadas a mano (rectángulos, polígonos) no son terreno: la herramienta lo indica.
- Esculpir mueve los puntos solo hacia arriba y hacia abajo; no agrega puntos. Para más detalle, haga una cuadrícula con celdas más pequeñas.
- El terreno se exporta como cualquier otro grupo. En IFC es un proxy de elemento de construcción, como todo lo demás.
