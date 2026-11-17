---
title: Ferramentas de sólidos: união, subtração, interseção
summary: Juntar grupos e componentes fechados num só, recortar um do outro, ou manter apenas o que partilham.
keywords: sólido, sólidos, inspetor de sólidos, não é sólido, corrigir sólido, furo, aresta solta, do avesso, união, juntar, combinar, fundir, subtrair, diferença, recortar, interseção, booleana, casca exterior
from: f35df1cc
---

As ferramentas de sólidos combinam **sólidos**: grupos e componentes cujas faces fecham um volume, com cada aresta a unir exatamente duas faces. {{ui:Entity info}} indica {{ui:Solid}}: {{ui:Yes}} quando for um, e mostra o seu volume.

Estão no menu {{ui:Solids}}, no grupo {{ui:Organize}}.

## Quando algo não é um sólido

Selecione o grupo ou componente. Quando não é um sólido, {{ui:Entity info}} diz porquê, por exemplo «Não é um sólido: 4 arestas limitam um furo · 1 aresta solta»:

| Problema | O que significa |
|---|---|
| Arestas limitam um furo | Falta uma face |
| Arestas partilhadas por três ou mais faces | Uma face divide o interior, ou duas formas tocam-se ao longo de uma aresta |
| Faces dentro da forma | Uma parede deixada dentro do volume |
| Arestas soltas | Linhas que não delimitam nenhuma face |
| Faces viradas do avesso | As suas faces da frente viradas para dentro, contra as vizinhas |

{{ui:Show problems}} abre-o com essas arestas e faces selecionadas, para as poder ver. {{ui:Fix}} corrige os casos simples num só passo de anulação: remove arestas soltas e faces dentro da forma, vira as faces para o lado certo, e fecha os furos cujo bordo está plano. O que não pode corrigir com segurança (um furo que não é plano, uma aresta partilhada por muitas faces) deixa-o para si, e indica o que resta.

## União

1. Selecione dois ou mais sólidos (clique num e {{key:Ctrl}}+clique nos outros).
2. {{ui:Solids}} › {{ui:Union}}.

Passam a ser um só sólido, num só grupo. Onde se sobrepunham, as faces interiores desaparecem.

## Subtração

1. {{ui:Solids}} › {{ui:Subtract}}.
2. Clique no sólido a **retirar** (o cortador).
3. Clique no sólido a **cortar**.

O que resta do segundo sólido fica; o cortador é consumido. Por exemplo, para fazer um furo através de um bloco, desenhe um poste que o atravesse, torne o poste um grupo, e depois subtraia o poste ao bloco.

## Interseção

Selecione dois ou mais sólidos e depois {{ui:Solids}} › {{ui:Intersect}}. Só se mantém a parte que todos partilham.

## Coisas a saber

- O resultado é um grupo novo. Mantém o nome, a cor e a etiqueta do primeiro sólido (na subtração: aquele que cortou). As cores pintadas nas suas faces não são mantidas.
- Os lados planos do resultado são faces únicas. Os lados redondos ficam com as pequenas faces planas com que foram desenhados.
- Se um grupo ou componente não for um sólido, a ferramenta indica qual e não altera nada. Procure uma face em falta ou uma face solta dentro dele.
- Dentro de um grupo aberto, as ferramentas atuam sobre os grupos e componentes desse grupo.
- Cada ferramenta é um passo de anulação.
- Na primeira vez que usa uma ferramenta de sólidos, o seu motor (manifold-3d) carrega, o que pode demorar um momento.
