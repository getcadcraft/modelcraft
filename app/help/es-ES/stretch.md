---
title: Componentes que se estiran
summary: Haga una copia de un componente más ancha, más profunda o más alta mientras sus piezas mantienen su tamaño: una mesa más larga con las mismas patas, una estantería más alta con los estantes separados, una barandilla cuyos postes se repiten.
keywords: componente dinámico, estirar, cambiar tamaño de componente, paramétrico, tamaños con nombre, repetir, matriz, patas, estantes, barandilla, reglas, variables
from: b4c40f43
---

Escalar un componente hace más grande todo lo que contiene, incluidas las patas y los travesaños. **Estirar esta copia** cambia el ancho, la profundidad o la altura de un componente mientras cada pieza sigue una regla: el tablero de una mesa crece, y sus patas mantienen su grosor y se quedan en los extremos.

Funciona con componentes formados por piezas, es decir, grupos o componentes dentro del componente, como lo son todos los elementos de la [biblioteca inicial](topic:starter).

## Estirar una copia

1. Seleccione el componente.
2. En {{ui:Información de entidad}}, haga clic en {{ui:Estirar esta copia…}}.
3. Escriba el nuevo {{ui:Ancho (rojo)}}, {{ui:Profundidad (verde)}} y {{ui:Altura (azul)}}, y haga clic en {{ui:Estiramiento}}.

Solo cambia esa copia: pasa a ser un componente propio, que recuerda el original del que procede. Puede volver a estirarla en cualquier momento y se recalcula a partir del original, así que no se desvía. Las demás copias del original no cambian.

## Las reglas

Abra el componente (haga doble clic) y seleccione una de sus piezas. {{ui:Información de entidad}} muestra {{ui:Cuando el componente se estira}}, con una regla para rojo, verde y azul:

| Regla | Qué hace la pieza | Por ejemplo |
|---|---|---|
| {{ui:Estiramiento}} | Crece con el componente; sus distancias a ambos lados se mantienen | El tablero de una mesa |
| {{ui:Quedarse al inicio}} / {{ui:Quedarse al final}} | Mantiene su tamaño y su distancia a ese lado | Patas |
| {{ui:Desplazar en proporción}} | Mantiene su tamaño; su centro se desplaza en proporción | Estantes, un tirador de puerta |
| {{ui:Escalar en proporción}} | Su posición y su tamaño cambian en proporción | Los peldaños de una escalera |
| {{ui:Repeticiones}} | Copias de ella, cada {{ui:Cada}} cierta distancia, desde donde empieza hasta el lado opuesto | Los postes de una barandilla |

{{ui:Automático}} (el valor inicial) calcula la regla y muestra cuál es: {{ui:Estiramiento}} cuando la pieza abarca el componente, {{ui:Desplazar en proporción}} cuando está más o menos en el centro; en los demás casos, se queda en el lado más cercano.

## Cosas que conviene saber

- Las formas propias de las piezas se comparten, por eso una copia estirada pesa poco. Si edita una pieza, cambia en todas las copias.
- Una copia estirada no sigue los cambios posteriores en las reglas o en la disposición del original: vuelva a estirarla para incorporarlos.
- Las caras dibujadas sueltas en el componente (no dentro de una pieza) mantienen su tamaño; conviértalas en una pieza para que las sigan.
- Las reglas y el original de cada copia se guardan en el archivo de ModelCraft.
