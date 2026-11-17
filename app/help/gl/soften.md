---
title: Suavizar e alisar bordos
summary: Oculte as arestas entre caras que se atopan nun ángulo pouco pronunciado, para que as formas curvas se lean como unha superficie lisa, en ModelCraft e nos ficheiros exportados.
keywords: suavizar, alisar, bordos suaves, sombreado suave, ocultar arestas, facetas, con facetas, curvo, normais, endurecer, ángulo
from: 52d32453
---

Unha forma curva en ModelCraft está feita de caras planas. Os bordos **suaves** entre esas caras non se debuxan, e as caras que unen sombréanse como unha superficie lisa, así que un cilindro de 24 lados parece redondo.

Ao tirar dun círculo con {{ui:Empurrar/tirar}}, os seus lados suavízanse por vostede. Para outras formas, suavice por ángulo.

## Suavizar por ángulo

1. Seleccione o que quere suavizar: caras e arestas, ou un grupo ou compoñente (todas as súas arestas).
2. En {{ui:Información da entidade}}, escriba un ángulo en {{ui:Suavizar ata}}, como `20`, e faga clic en {{ui:Suavizar}}.

Cada aresta da selección cuxas dúas caras xiran ese ángulo ou menos faise suave; as arestas con un xiro máis brusco quedan duras. As caras laterais dun prisma de 12 lados xiran 30° e as tapas 90°, así que `31` suaviza só as laterais.

{{ui:Endurecer todo}} fai duras de novo todas as arestas da selección. Cada uso é un paso de desfacer.

## Cousas que hai que saber

- Só se suavizan as arestas entre exactamente dúas caras. As arestas soltas quedan como están.
- O sombreado suave funciona só a través dos bordos suaves: unha cara sen bordo suave sombréase plana.
- Os bordos suaves consérvanse no ficheiro de ModelCraft. As exportacións **glTF (.glb)** e **OBJ** levan o sombreado suave (unha normal por esquina), para que outros programas mostren a mesma superficie. Collada e STL exportan caras planas.
- Os bordos suaves ocúltanse en todos os estilos de cara, e tamén en {{ui:Raios X}} e {{ui:Estrutura de arame}}. Para velos, seleccione a forma e faga clic en {{ui:Endurecer todo}}; desfacer devolve a suavización.
