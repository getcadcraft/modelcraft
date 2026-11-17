---
title: Componentes que se estiran
summary: Haga una copia de un componente más ancha, más profunda o más alta mientras sus partes conservan su tamaño: una mesa más larga con las mismas patas, una estantería más alta con sus repisas separadas, una barandilla cuyos postes se repiten.
keywords: componente dinámico, estirar, cambiar tamaño de componente, paramétrico, tamaños con nombre, repetir, matriz, patas, repisas, barandilla, reglas, variables
from: b4c40f43
---

Escalar un componente hace más grande todo lo que contiene, incluidas las patas y los largueros. **Estirar esta copia** cambia el ancho, la profundidad o la altura de un componente, y cada parte sigue una regla: la cubierta de una mesa crece, mientras sus patas conservan su grosor y se mantienen en los extremos.

Funciona con componentes formados por partes, es decir, grupos o componentes dentro del componente, como ocurre con todo elemento de la [biblioteca inicial](topic:starter).

## Estirar una copia

1. Seleccione el componente.
2. En {{ui:Información de entidad}}, haga clic en {{ui:Estirar esta copia…}}.
3. Escriba el nuevo {{ui:Ancho (rojo)}}, {{ui:Profundidad (verde)}} y {{ui:Altura (azul)}}, y haga clic en {{ui:Estiramiento}}.

Solo cambia esa copia: pasa a ser un componente propio, que recuerda el original del que proviene. Vuelva a estirarla cuando quiera; se calcula de nuevo a partir del original, así que nada se desajusta. Las demás copias del original no cambian.

## Las reglas

Abra el componente (haga doble clic en él) y seleccione una de sus partes. {{ui:Información de entidad}} muestra {{ui:Cuando el componente se estira}}, con una regla para el rojo, el verde y el azul:

| Regla | Qué hace la parte | Por ejemplo |
|---|---|---|
| {{ui:Estiramiento}} | Crece con el componente; sus distancias a ambos lados se mantienen | La cubierta de una mesa |
| {{ui:Quedarse al inicio}} / {{ui:Quedarse al final}} | Conserva su tamaño y su distancia a ese lado | Patas |
| {{ui:Desplazar en proporción}} | Conserva su tamaño; su parte central se desplaza en proporción | Repisas, la manija de una puerta |
| {{ui:Escalar en proporción}} | Su posición y su tamaño cambian en proporción | Los peldaños de una escalera |
| {{ui:Repeticiones}} | Copias de ella, cada {{ui:Cada}} cierta distancia, desde donde empieza hasta el lado opuesto | Los postes de una barandilla |

{{ui:Automáticos}} (el valor predeterminado) calcula una regla y muestra cuál: {{ui:Estiramiento}} cuando la parte abarca el componente, {{ui:Desplazar en proporción}} cuando está más o menos en el centro; de lo contrario, se queda del lado al que está más cerca.

## Puntos a tener en cuenta

- Las formas propias de las partes se comparten, así que una copia estirada pesa poco. Al editar una parte, cambia en todas las copias.
- Una copia estirada no sigue los cambios posteriores en las reglas o en la disposición del original: vuelva a estirarla para incorporarlos.
- Las caras dibujadas sueltas en el componente (no dentro de una parte) conservan su tamaño; conviértalas en una parte para que las sigan.
- Las reglas y el original de cada copia se guardan en el archivo de ModelCraft.
