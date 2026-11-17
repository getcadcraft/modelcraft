---
title: Ferramentas de sólidos: unir, restar, intersecar
summary: Una grupos e compoñentes pechados nun só, recorte un nun outro, ou conserve só o que comparten.
keywords: sólido, sólidos, inspector de sólidos, non é sólido, arranxar sólido, burato, aresta solta, do revés, unir, xuntar, combinar, fusionar, restar, diferenza, cortar, burato, intersecar, intersección, booleana, casca exterior
from: f35df1cc
---

As ferramentas de sólidos combinan **sólidos**: grupos e compoñentes cuxas caras pechan un volume, con cada aresta unindo exactamente dúas caras. {{ui:Información da entidade}} indica {{ui:Sólido}}: {{ui:Si}} para un, e mostra o seu volume.

Están no menú {{ui:Sólidos}} do grupo {{ui:Organizar}}.

## Cando algo non é un sólido

Seleccione o grupo ou compoñente. Se non é un sólido, {{ui:Información da entidade}} indica por que, por exemplo "Non é un sólido: 4 arestas bordean un burato · 1 aresta solta":

| Problema | Que significa |
|---|---|
| Arestas que bordean un burato | Falta unha cara |
| Arestas compartidas por tres caras ou máis | Unha cara divide o interior, ou dúas formas tocan ao longo dunha aresta |
| Caras dentro da forma | Un muro deixado dentro do volume |
| Arestas soltas | Liñas que non limitan ningunha cara |
| Caras volteadas do revés | As súas caras frontais miran cara a dentro, contra as veciñas |

{{ui:Mostrar problemas}} ábreo coas arestas e caras seleccionadas, para velas. {{ui:Corrixir}} arranxa os casos sinxelos nun só paso de desfacer: elimina as arestas soltas e as caras dentro da forma, volta as caras do dereito para fóra, e pecha os buratos cuxo bordo queda plano. O que non pode arranxar con seguridade (un burato que non é plano, unha aresta compartida por moitas caras) déixao para vostede, e indica o que queda.

## Unir

1. Seleccione dous ou máis sólidos (faga clic nun, e {{key:Ctrl}}+clic nos outros).
2. {{ui:Sólidos}} › {{ui:Unir}}.

Convértense nun só sólido, nun só grupo. Onde se solapaban, desaparecen as caras interiores.

## Restar

1. {{ui:Sólidos}} › {{ui:Restar}}.
2. Faga clic no sólido a **quitar** (a ferramenta de corte).
3. Faga clic no sólido a **cortar**.

O que queda do segundo sólido consérvase; a ferramenta de corte gástase. Por exemplo, para facer un burato nun bloque, debuxe un poste que o atravese, faga do poste un grupo, e logo reste o poste do bloque.

## Intersecar

Seleccione dous ou máis sólidos, e logo {{ui:Sólidos}} › {{ui:Intersecar}}. Consérvase só a parte que todos comparten.

## Cousas que hai que saber

- O resultado é un grupo novo. Conserva o nome, a cor e a etiqueta do primeiro sólido (en Restar: o que cortou). As cores pintadas nas súas caras non se conservan.
- As caras planas do resultado son caras simples. As caras redondas saen como as facetas planas coas que se debuxaron.
- Se un grupo ou compoñente non é un sólido, a ferramenta indica cal é e non cambia nada. Busque unha cara que falte ou unha cara solta dentro del.
- Dentro dun grupo aberto, as ferramentas traballan sobre os grupos e compoñentes dese grupo.
- Cada ferramenta é un paso de desfacer.
- A primeira vez que usa unha ferramenta de sólidos, cárgase o seu motor (manifold-3d), o que pode levar un momento.
