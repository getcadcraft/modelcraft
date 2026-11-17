---
title: Ferramentas de sólidos: união, subtração, interseção
summary: Una grupos e componentes fechados em um só, recorte um do outro, ou mantenha apenas o que eles têm em comum.
keywords: sólido, sólidos, inspetor de sólidos, não é sólido, corrigir sólido, furo, aresta solta, invertido, união, unir, combinar, mesclar, subtrair, diferença, recortar, furo, interseção, cruzar, booleana, casca externa
from: f35df1cc
---

As ferramentas de sólidos combinam **sólidos**: grupos e componentes cujas faces fecham um volume, com cada aresta unindo exatamente duas faces. {{ui:Informações da entidade}} diz {{ui:Sólido}}: {{ui:Sim}} para um, e mostra o seu volume.

Elas estão no menu {{ui:Sólidos}} do grupo {{ui:Organizar}}.

## Quando algo não é um sólido

Selecione o grupo ou componente. Quando ele não é um sólido, {{ui:Informações da entidade}} diz por quê, por exemplo "Não é sólido: 4 arestas margeiam um furo · 1 aresta solta":

| Problema | O que significa |
|---|---|
| Arestas margeiam um furo | Falta uma face |
| Arestas compartilhadas por três faces ou mais | Uma face divide o interior, ou duas formas se tocam ao longo de uma aresta |
| Faces dentro da forma | Uma parede deixada dentro do volume |
| Arestas soltas | Linhas que não delimitam nenhuma face |
| Faces invertidas | Suas faces frontais voltadas para dentro, em oposição às vizinhas |

{{ui:Mostrar problemas}} o abre com essas arestas e faces selecionadas, para que você as veja. {{ui:Corrigir}} conserta os casos simples em uma única etapa de desfazer: remove arestas soltas e faces dentro da forma, vira as faces para o lado certo e fecha furos cuja borda é plana. O que não puder ser consertado com segurança (um furo que não é plano, uma aresta compartilhada por muitas faces) fica para você, e a ferramenta diz o que restou.

## União

1. Selecione dois ou mais sólidos (clique em um, {{key:Ctrl}}+clique nos outros).
2. {{ui:Sólidos}} › {{ui:União}}.

Eles se tornam um sólido, em um grupo. Onde se sobrepunham, as faces internas desaparecem.

## Subtração

1. {{ui:Sólidos}} › {{ui:Subtração}}.
2. Clique no sólido a **retirar** (a ferramenta de corte).
3. Clique no sólido a **cortar**.

O que sobra do segundo sólido permanece; a ferramenta de corte é consumida. Por exemplo, para fazer um furo através de um bloco, desenhe um poste que o atravesse, transforme o poste em grupo e depois subtraia o poste do bloco.

## Interseção

Selecione dois ou mais sólidos e depois {{ui:Sólidos}} › {{ui:Interseção}}. Só a parte que todos têm em comum é mantida.

## Coisas a saber

- O resultado é um novo grupo. Ele mantém o nome, a cor e a etiqueta do primeiro sólido (na subtração: o que você cortou). Cores pintadas nas suas faces não são mantidas.
- Os lados planos do resultado são faces únicas. Os lados redondos saem como as facetas planas com que foram desenhados.
- Se um grupo ou componente não for um sólido, a ferramenta diz qual é e não altera nada. Procure uma face faltando ou uma face solta dentro dele.
- Dentro de um grupo aberto, as ferramentas atuam nos grupos e componentes desse grupo.
- Cada ferramenta é uma etapa de desfazer.
- Na primeira vez que você usar uma ferramenta de sólidos, o seu motor (manifold-3d) é carregado, o que pode levar um momento.
