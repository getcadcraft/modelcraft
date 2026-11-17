---
title: Suavizar y alisar bordes
summary: Ocultá los bordes entre caras que se encuentran en un ángulo leve, para que las formas curvas se vean como una sola superficie suave, en ModelCraft y en los archivos exportados.
keywords: suavizar, alisar, bordes suaves, sombreado suave, ocultar bordes, facetas, facetado, curvo, normales, endurecer, ángulo
from: 52d32453
---

Una forma curva en ModelCraft está hecha de caras planas. Los bordes **suaves** entre esas caras no se dibujan, y las caras que unen se sombrean como una sola superficie suave, así que un cilindro de 24 lados se ve redondo.

Cuando levantás un círculo con {{ui:Empujar/tirar}}, sus lados se suavizan por ti. Para otras formas, suavizá por ángulo.

## Suavizar por ángulo

1. Seleccioná lo que vas a suavizar: caras y bordes, o un grupo o componente (todos sus bordes).
2. En {{ui:Información de entidad}}, escribí un ángulo en {{ui:Suavizar hasta}}, como `20`, y hacé clic en {{ui:Suavizar}}.

Todo borde de la selección cuyas dos caras giren ese ángulo o menos se vuelve suave; los bordes con un giro más brusco se vuelven duros. Un prisma de 12 lados gira sus lados 30° y sus bordes 90°, así que `31` suaviza solo los lados.

{{ui:Endurecer todo}} vuelve duro cada borde de la selección otra vez. Cada uno es un paso de deshacer.

## Cosas para saber

- Solo se suavizan los bordes entre exactamente dos caras. Los bordes sueltos quedan como están.
- El sombreado suave funciona solo a través de bordes suaves: una cara sin bordes suaves se sombrea plana.
- Los bordes suaves se guardan en el archivo de ModelCraft. Las exportaciones **glTF (.glb)** y **OBJ** llevan el sombreado suave (una normal por esquina), para que otros programas muestren la misma superficie. Collada y STL exportan caras planas.
- Los bordes suaves están ocultos en todos los estilos de cara, y también en {{ui:Rayos X}} y {{ui:Alambre}}. Para verlos, seleccioná la forma y hacé clic en {{ui:Endurecer todo}}; deshacer devuelve el suavizado.
