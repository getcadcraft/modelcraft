---
title: Biblioteca inicial
summary: Unos treinta objetos prefabricados para colocar en un modelo: puertas y ventanas, muebles, cocina y baño, columnas y escaleras, árboles, personas y un coche.
keywords: amueblar, amueblar una habitación, distribución de muebles, dormitorio, salón, cocina, baño, oficina, renderizado, biblioteca, inicial, entorno, árboles, personas, coches, plantas, arbustos, seto, componentes, mueble, puerta, ventana, silla, mesa, sofá, cama, inodoro, escalera, columna, árbol, persona, coche, almacén, listo para usar
from: 3c06b69c
---

La {{ui:Biblioteca inicial}} le ofrece cosas cotidianas a tamaños reales, para que un modelo se lea de un vistazo: una puerta que muestra la escala de una habitación, un coche en un camino de entrada, personas y árboles alrededor de un edificio.

## Colocar una

1. En {{ui:Componentes}} a la izquierda, haga clic en {{ui:Biblioteca inicial}}.
2. Elija una cosa, como {{ui:Silla}}.
3. Haga clic donde debe ir.

En un suelo, una mesa o el terreno, se apoya sobre él. Las **puertas y ventanas** están hechas para ir en muros: haga clic en un muro y se colocan en él, mirando hacia fuera. (Se asientan sobre la cara del muro; no abren un hueco. Para hacerlo, dibuje un rectángulo en el muro donde irá la ventana y empújelo para atravesarlo.)

Cada cosa es un **componente**: si elige la misma de nuevo, coloca otra copia, y cada copia cambia si edita una. También aparece en la lista de {{ui:Componentes}}, con {{ui:Colocar}} para añadir más.

## Qué contiene

| Grupo | Cosas |
|---|---|
| Puertas y ventanas | Puerta, puerta doble, ventana, ventana ancha, puerta de garaje |
| Muebles | Mesa de comedor, mesa redonda, silla, taburete de barra, sofá, sillón, cama doble e individual, escritorio, estantería, armario |
| Cocina y baño | Mueble bajo y mueble alto, encimera de cocina, frigorífico, cocina, mueble de fregadero, inodoro, bañera, ducha, lavabo |
| Construcción | Escalera recta (15 peldaños de 18 cm), columna redonda y cuadrada, viga |
| Emplazamiento y personas | Árbol, arbusto, persona (1.75 m), coche |
| Entorno: árboles, personas y coches | Árboles caducifolios (4, 6 y 10 m), una conífera, un árbol columnar, arbustos redondos y pequeños, un seto, una planta en maceta, personas de pie y caminando, un niño, un turismo y un SUV: formas más redondeadas en sus propios colores, para [imágenes renderizadas](topic:render) y planos de emplazamiento |

Son formas sencillas, hechas de sólidos que puede pintar, escalar o [hacer únicos](topic:groups-components) y cambiar. El mueble de pared cuelga a 1.45 m por encima de donde hace clic.

El entorno lo dibuja CadCraft y es libre de usar para cualquier cosa (CC0); los mismos árboles, personas y coches están en la biblioteca de BimCraft y de CadCraft. Los cristales de un coche se pintan con el material {{ui:Vidrio tintado}}, así que se ven transparentes en las imágenes.

## Amueblar una habitación para un renderizado

Seleccione el suelo de una habitación (una cara de nivel que mira hacia arriba, en el modelo o dentro de un grupo) y use **{{ui:Organizar}} › Amueblar una habitación…** (el botón **Amueblar**). Elija qué es la habitación (dormitorio, salón, comedor, cocina, baño u oficina) o deje que lo adivine por el tamaño. Los muebles de la biblioteca se colocan contra los muros, empezando por el muro más largo; nada se solapa, y el giro de cualquier puerta de la biblioteca colocada en los muros de la habitación (y el ancho de sus ventanas, delante de los muebles altos) queda libre. Es una distribución predeterminada según reglas para que la revise, no un diseño: la misma habitación siempre tiene la misma distribución.

Todo entra en **un solo grupo** con la etiqueta **Muebles**, como un paso de deshacer: Deshacer, elimine el grupo u oculte la etiqueta para quitarlo. Un mueble que no cabe se nombra en la línea de estado y se lista en **Problemas** como nota. **Amueblar una habitación** de BimCraft usa las mismas reglas.
