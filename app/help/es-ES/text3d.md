---
title: Texto 3D
summary: Añada rotulación al modelo en forma de caras, planas o sólidas, apoyada en cualquier cara: un letrero, un número de casa, un nombre en una puerta.
keywords: texto 3d, texto, letras, rotulación, letrero, señalización, número de casa, etiqueta, grabar, tipografía, palabras
from: 923f5d93
---

{{ui:Texto 3D}} en el grupo {{ui:Dibujo}} crea rotulación a partir de caras, que puede pintar, empujar/tirar o recortar en un sólido.

## Añadir texto

1. Haga clic en {{ui:Texto 3D}}.
2. Escriba el texto. Pulse {{key:Enter}} en el cuadro para una segunda línea.
3. Defina la {{ui:Altura de letra}} (la altura de una letra mayúscula, como `30cm` o `1'`) y la {{ui:Profundidad}}:
   - `0` da **letras planas**: caras apoyadas sobre aquello donde las coloque, listas para pintar o para empujar/tirar.
   - Una profundidad como `5cm` da **letras sólidas**, sólidos cerrados que puede usar con las [herramientas de sólidos](topic:solids).
4. Haga clic en {{ui:Colocar}} y después en el punto donde irá el texto.

Sobre una cara, el texto queda apoyado en esa cara y se lee de izquierda a derecha: en un muro se levanta en vertical; en el suelo o sobre una mesa queda tumbado a lo largo del rojo. Si no hay ninguna cara cerca, queda sobre el suelo.

El texto es un **componente** con su mismo nombre, de modo que, si edita uno, cambian todas las copias, y aparece en la lista {{ui:Componentes}} para volver a colocarlo.

## Cosas que conviene saber

- Las letras son la fuente de trazo sencillo propia de ModelCraft, con el trazo engrosado: limpia y legible, pero todavía sin elección de tipo de letra.
- Se dibujan las letras, las cifras y los signos habituales (incluidas las letras acentuadas); un carácter que la fuente no tiene aparece como un pequeño cuadro.
- Para cambiar las palabras, elimine el texto y vuelva a añadirlo.
- Para grabar rotulación en una superficie, cree letras sólidas, colóquelas a mitad de camino dentro de un grupo sólido y [réstelas](topic:solids).
