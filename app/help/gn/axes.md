---
title: Mové y girá los ejes de dibujo
summary: Girá los ejes rojo, verde y azul para que coincidan con un edificio que no está a escuadra con ellos, o alineálos con una cara, para que el dibujo y la escritura los sigan.
keywords: ejes, ejes de dibujo, origen, alinear ejes, rotar ejes, girar ejes, restablecer ejes, edificio inclinado, sesgado, ucs, sistema de coordenadas
from: cab258f7
---

Los ejes rojo, verde y azul guían todo lo que dibujás: los rectángulos se alinean con ellos, las líneas se fijan a ellos, y el suelo es el plano rojo-verde. Cuando un edificio está en ángulo (un plano de implantación que no está a escuadra con el norte, un ala girada 30°), mové los ejes hasta él, para que el dibujo siga sus muros. El modelo en sí no se mueve.

Los tres comandos están en {{ui:Editar}} › {{ui:Más}}.

## Colocar ejes

1. {{ui:Editar}} › {{ui:Más}} › {{ui:Colocar ejes}}.
2. Hacé clic donde va el origen, como una esquina del edificio.
3. Hacé clic en un punto sobre el nuevo eje rojo, como más adelante a lo largo de un muro.
4. Hacé clic en un punto hacia el nuevo eje verde. El verde queda a escuadra con el rojo, y el azul queda a escuadra con los dos.

Los ejes se dibujan en su nuevo lugar. Un rectángulo que dibujás ahora en el suelo, o que escribís como `4m,3m`, corre a lo largo del rojo y verde girados; las teclas de flecha se fijan a ellos; y el ajuste al origen queda en el nuevo origen.

## Alinear ejes con una cara

Seleccioná una cara, y después {{ui:Editar}} › {{ui:Más}} › {{ui:Alinear ejes a la cara}}. El azul apunta entonces hacia afuera de la cara, el rojo corre a lo largo de su arista más larga, y el origen queda en el inicio de esa arista. Usalo para dibujar sobre un techo inclinado como si fuera el suelo.

## Restablecer ejes

{{ui:Editar}} › {{ui:Más}} › {{ui:Restablecer ejes}} los devuelve adonde empezó el modelo.

## Cosas que conviene saber

- Dentro de un grupo o componente abierto se usan sus propios ejes (giran con él); los ejes del modelo rigen en el nivel superior.
- Los ejes se guardan en el archivo de ModelCraft, y cada cambio es un paso de deshacer.
- Las exportaciones y las vistas estándar ({{ui:Superior}}, {{ui:Frontal}}…) todavía usan las direcciones propias del modelo.
