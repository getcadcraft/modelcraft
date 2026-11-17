---
title: Mover y girar los ejes de dibujo
summary: Gire los ejes rojo, verde y azul para que coincidan con un edificio que no está alineado con ellos, o aliñelos con una cara, para que el dibujo y la escritura lo sigan.
keywords: ejes, ejes de dibujo, origen, alinear ejes, girar ejes, girar ejes, restablecer ejes, edificio inclinado, sesgado, ucs, sistema de coordenadas
from: cab258f7
---

Los ejes rojo, verde y azul guían todo lo que dibuja: los rectángulos se alinean con ellos, las líneas se bloquean en ellos, y el suelo es el plano rojo-verde. Cuando un edificio está inclinado (un plano de emplazamiento que no está alineado con el norte, un ala girada 30°), mueva los ejes hasta él, para que el dibujo siga sus muros. El modelo en sí no se mueve.

Los tres comandos están en {{ui:Edición}} › {{ui:Más}}.

## Colocar ejes

1. {{ui:Edición}} › {{ui:Más}} › {{ui:Colocar ejes}}.
2. Haga clic donde va el origen, como una esquina del edificio.
3. Haga clic en un punto a lo largo del nuevo eje rojo, como más allá en un muro.
4. Haga clic en un punto hacia el nuevo eje verde. El verde se hace perpendicular al rojo, y el azul queda perpendicular a ambos.

Los ejes se dibujan en su nueva posición. Un rectángulo que dibuja ahora en el suelo, o que escribe como `4m,3m`, sigue los ejes rojo y verde girados; las teclas de flecha se bloquean en ellos; y el ajuste al origen está en el nuevo origen.

## Alinear ejes con una cara

Seleccione una cara y luego {{ui:Edición}} › {{ui:Más}} › {{ui:Alinear ejes con la cara}}. El azul apunta entonces hacia fuera de la cara, el rojo sigue su arista más larga, y el origen está en el inicio de esa arista. Úselo para dibujar sobre un tejado inclinado como si fuera el suelo.

## Restablecer ejes

{{ui:Edición}} › {{ui:Más}} › {{ui:Restablecer ejes}} los devuelve a donde empezó el modelo.

## Cosas que conviene saber

- Dentro de un grupo o componente abierto se usan sus propios ejes (giran con él); los ejes del modelo se aplican en el nivel superior.
- Los ejes se guardan en el archivo de ModelCraft, y cada cambio es un paso de deshacer.
- Las exportaciones y las vistas estándar ({{ui:Superior}}, {{ui:Frontal}}…) siguen usando las direcciones propias del modelo.
