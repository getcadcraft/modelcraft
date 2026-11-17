---
title: Suavizar e alisar arestas
summary: Oculte as arestas entre faces que se encontram em um ângulo raso, para que formas curvas sejam lidas como uma superfície lisa, na ModelCraft e nos arquivos exportados.
keywords: suavizar, alisar, arestas suaves, sombreamento suave, ocultar arestas, facetas, facetado, curvo, normais, endurecer, ângulo
from: 52d32453
---

Uma forma curva na ModelCraft é feita de faces planas. As arestas **suaves** entre essas faces não são desenhadas, e as faces que elas unem são sombreadas como uma única superfície lisa, de modo que um cilindro de 24 lados parece redondo.

Quando você puxa um círculo com {{ui:Empurrar/puxar}}, os lados dele são suavizados para você. Para outras formas, suavize pelo ângulo.

## Suavizar pelo ângulo

1. Selecione o que suavizar: faces e arestas, ou um grupo ou componente (todas as suas arestas).
2. Em {{ui:Informações da entidade}}, digite um ângulo em {{ui:Suavizar até}}, como `20`, e clique em {{ui:Suavizar}}.

Cada aresta da seleção cujas duas faces giram por esse ângulo ou menos fica suave; arestas com uma curva mais acentuada ficam duras. Um prisma de 12 lados tem os seus lados girando 30° e as suas bordas 90°, então `31` suaviza apenas os lados.

{{ui:Endurecer tudo}} torna todas as arestas da seleção duras de novo. Cada uma é uma etapa de desfazer.

## Coisas a saber

- Só são suavizadas arestas entre exatamente duas faces. Arestas soltas permanecem como estão.
- O sombreamento suave funciona apenas através de arestas suaves: uma face sem aresta suave é sombreada de forma plana.
- Arestas suaves são mantidas no arquivo da ModelCraft. As exportações **glTF (.glb)** e **OBJ** levam o sombreamento suave (uma normal por canto), para que outros programas mostrem a mesma superfície. Collada e STL exportam faces planas.
- Arestas suaves ficam ocultas em todos os estilos de face, inclusive em {{ui:Raio X}} e {{ui:Estrutura de arame}}. Para vê-las, selecione a forma e clique em {{ui:Endurecer tudo}}; desfazer devolve a suavização.
