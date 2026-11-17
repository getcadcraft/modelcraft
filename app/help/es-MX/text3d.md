---
title: Texto 3D
summary: Agregue rotulado a un modelo como caras, planas o sólidas, apoyado sobre cualquier cara: un letrero, un número de casa, un nombre en una puerta.
keywords: texto 3D, texto, letras, rotulado, letrero, señalización, número de casa, etiqueta, grabar, fuente, palabras
from: 923f5d93
---

{{ui:Texto 3D}} en el grupo {{ui:Dibujo}} crea rotulado a partir de caras, que puede pintar, empujar/tirar o cortar en un sólido.

## Agregar texto

1. Haga clic en {{ui:Texto 3D}}.
2. Escriba el texto. Pulse {{key:Enter}} en el cuadro para una segunda línea.
3. Defina la {{ui:Altura de letra}} (la altura de una letra mayúscula, como `30cm` o `1'`) y la {{ui:Profundidad}}:
   - `0` da **letras planas**: caras apoyadas sobre lo que las coloque, listas para pintar o para empujar/tirar.
   - Una profundidad como `5cm` da **letras sólidas**: sólidos cerrados que puede usar con las [herramientas de sólidos](topic:solids).
4. Haga clic en {{ui:Colocar}} y luego en el punto donde irá el texto.

Sobre una cara, el texto se apoya en esa cara y se lee de izquierda a derecha: en un muro queda de pie; en el suelo o en una mesa queda plano a lo largo del rojo. Si no está sobre ninguna cara, queda en el suelo.

El texto es un **componente** con su mismo nombre, así que todas las copias cambian si edita una, y aparece en la lista {{ui:Componentes}} para volver a colocarlo.

## Puntos a tener en cuenta

- Las letras son la fuente propia de trazo simple de ModelCraft, engrosada: limpia y legible, sin elección de tipografía por ahora.
- Se dibujan letras, dígitos y signos comunes (incluidas las letras con acento); un carácter que la fuente no tiene se muestra como una pequeña caja.
- Para cambiar las palabras, borre el texto y agréguelo de nuevo.
- Para grabar un rotulado en una superficie, cree letras sólidas, colóquelas a medio camino dentro de un grupo sólido y [réstelas](topic:solids).
