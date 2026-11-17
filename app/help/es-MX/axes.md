---
title: Mover y girar los ejes de dibujo
summary: Gire los ejes rojo, verde y azul para que coincidan con un edificio que no está a escuadra con ellos, o alinéelos con una cara, de modo que el dibujo y la escritura los sigan.
keywords: ejes, ejes de dibujo, origen, alinear ejes, girar ejes, rotar ejes, restablecer ejes, edificio en ángulo, oblicuo, ucs, sistema de coordenadas
from: cab258f7
---

Los ejes rojo, verde y azul guían todo lo que dibuja: los rectángulos se alinean con ellos, las líneas se bloquean a ellos, y el suelo es el plano rojo–verde. Cuando un edificio está en ángulo (un plano de sitio que no está a escuadra con el norte, un ala girada 30°), mueva los ejes hacia él para que el dibujo siga sus muros. El modelo en sí no se mueve.

Los tres comandos están en {{ui:Edición}} › {{ui:Más}}.

## Colocar ejes

1. {{ui:Edición}} › {{ui:Más}} › {{ui:Colocar ejes}}.
2. Haga clic donde va el origen, por ejemplo en una esquina del edificio.
3. Haga clic en un punto sobre el nuevo eje rojo, por ejemplo más adelante a lo largo de un muro.
4. Haga clic en un punto hacia el nuevo eje verde. El verde se pone a escuadra con el rojo, y el azul queda a escuadra con ambos.

Los ejes se dibujan en su nueva posición. Un rectángulo que ahora dibuje en el suelo, o que escriba como `4m,3m`, sigue el rojo y el verde girados; las teclas de flecha se bloquean a ellos; y la referencia al origen queda en el nuevo origen.

## Alinear ejes con la cara

Seleccione una cara y luego {{ui:Edición}} › {{ui:Más}} › {{ui:Alinear ejes con la cara}}. El azul apunta entonces hacia fuera de la cara, el rojo corre a lo largo de su arista más larga, y el origen queda en el inicio de esa arista. Úselo para dibujar sobre un techo inclinado como si fuera el suelo.

## Restablecer ejes

{{ui:Edición}} › {{ui:Más}} › {{ui:Restablecer ejes}} los devuelve a donde empezó el modelo.

## Cosas que conviene saber

- Dentro de un grupo o componente abierto se usan sus propios ejes (giran con él); los ejes del modelo se aplican al nivel superior.
- Los ejes se guardan en el archivo de ModelCraft, y cada cambio es un paso de deshacer.
- Las exportaciones y las vistas estándar ({{ui:Superior}}, {{ui:Frontal}}…) siguen usando las direcciones propias del modelo.
