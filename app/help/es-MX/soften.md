---
title: Suavizar y alisar aristas
summary: Oculte las aristas entre caras que se unen con un ángulo poco pronunciado, para que las formas curvas se vean como una sola superficie lisa, en ModelCraft y en los archivos exportados.
keywords: suavizar, alisar, aristas suaves, sombreado suave, ocultar aristas, facetas, facetado, curvo, normales, endurecer, ángulo
from: 52d32453
---

Una forma curva en ModelCraft está hecha de caras planas. Las aristas **suaves** entre esas caras no se dibujan, y las caras que unen se sombrean como una sola superficie lisa, así que un cilindro de 24 lados se ve redondo.

Al levantar un círculo con {{ui:Empujar/tirar}}, sus lados se suavizan por usted. Para otras formas, suavice por ángulo.

## Suavizar por ángulo

1. Seleccione lo que va a suavizar: caras y aristas, o un grupo o componente (todas sus aristas).
2. En {{ui:Información de entidad}}, escriba un ángulo en {{ui:Suavizar hasta}}, como `20`, y haga clic en {{ui:Suavizar}}.

Toda arista de la selección cuyas dos caras giren ese ángulo o menos se vuelve suave; las aristas con un giro más pronunciado se vuelven duras. Los lados de un prisma de 12 lados giran 30°, y sus bordes 90°, así que `31` suaviza solo los lados.

{{ui:Endurecer todo}} vuelve duras de nuevo todas las aristas de la selección. Cada una es un paso de deshacer.

## Cosas que debe saber

- Solo se suavizan las aristas entre exactamente dos caras. Las aristas sueltas se quedan como están.
- El sombreado suave funciona solo a través de aristas suaves: una cara sin ninguna arista suave se sombrea plana.
- Las aristas suaves se conservan en el archivo de ModelCraft. Las exportaciones **glTF (.glb)** y **OBJ** llevan el sombreado suave (una normal por esquina), así que otros programas muestran la misma superficie. Collada y STL exportan caras planas.
- Las aristas suaves se ocultan en todos los estilos de cara, y también en {{ui:Rayos X}} y {{ui:Estructura alámbrica}}. Para verlas, seleccione la forma y haga clic en {{ui:Endurecer todo}}; deshacer devuelve el suavizado.
