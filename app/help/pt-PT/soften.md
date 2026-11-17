---
title: Suavizar e alisar arestas
summary: Ocultar as arestas entre faces que se encontram num ângulo pouco acentuado, para que as formas curvas pareçam uma só superfície lisa, no ModelCraft e nos ficheiros exportados.
keywords: suavizar, alisar, arestas suaves, sombreamento suave, ocultar arestas, facetas, facetado, curvo, normais, endurecer, ângulo, soften, smooth
from: 52d32453
---

Uma forma curva no ModelCraft é feita de faces planas. As arestas **suaves** entre essas faces não são desenhadas, e as faces que ligam são sombreadas como uma só superfície lisa, de modo que um cilindro de 24 lados parece redondo.

Quando levanta um círculo com {{ui:Push/pull}}, os seus lados ficam suavizados automaticamente. Para outras formas, suavize pelo ângulo.

## Suavizar pelo ângulo

1. Selecione o que suavizar: faces e arestas, ou um grupo ou componente (todas as suas arestas).
2. Em {{ui:Entity info}}, escreva um ângulo em {{ui:Soften up to}}, como `20`, e clique em {{ui:Soften}}.

Cada aresta da seleção cujas duas faces se viram por esse ângulo ou menos torna-se suave; as arestas com uma viragem mais acentuada tornam-se duras. Um prisma de 12 lados tem os lados a virar 30° e as suas orlas a 90°, por isso `31` suaviza apenas os lados.

{{ui:Harden all}} torna todas as arestas da seleção duras novamente. Cada uma é um passo de anulação.

## Coisas a saber

- Só as arestas entre exatamente duas faces são suavizadas. As arestas soltas mantêm-se como estão.
- O sombreamento suave só funciona através de arestas suaves: uma face sem nenhuma aresta suave é sombreada de forma plana.
- As arestas suaves ficam guardadas no ficheiro do ModelCraft. As exportações **glTF (.glb)** e **OBJ** levam o sombreamento suave (uma normal por canto), para que outros programas mostrem a mesma superfície. As exportações Collada e STL são de faces planas.
- As arestas suaves ficam ocultas em todos os estilos de face, também em {{ui:X-ray}} e {{ui:Wireframe}}. Para as ver, selecione a forma e clique em {{ui:Harden all}}; anular repõe a suavização.
