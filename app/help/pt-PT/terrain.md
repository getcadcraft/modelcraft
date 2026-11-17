---
title: Terreno: solo a partir de curvas de nível e como o esculpir
summary: Crie solo a partir de curvas de nível ou como grelha, e depois eleve-o ou baixe-o com um pincel suave.
keywords: terreno, solo, paisagem, topografia, curvas de nível, linhas de nível, implantação, declive, colina, monte, caixa de areia, smoove, esculpir, modelação, TIN
from: 407652b3
---

O terreno é solo feito de triângulos, por isso pode seguir qualquer forma. É um grupo: faça duplo clique para o editar.

## A partir de curvas de nível

1. Obtenha as curvas de nível nas suas alturas: desenhe-as, ou [importe uma planta de implantação](topic:site-plan) e mova cada curva para o seu nível.
2. Selecione-as (todas as arestas de todas as curvas).
3. {{ui:Editar}} › {{ui:Mais}} › {{ui:Terreno a partir das curvas de nível selecionadas}}.

O ModelCraft une os pontos das curvas com triângulos (um TIN) e suaviza todas as arestas interiores, para que o solo sombreie de forma suave. As próprias linhas mantêm-se; apague-as ou oculte-as quando já não forem necessárias. Curvas de nível muito densas são reduzidas a 8 000 pontos.

## Uma grelha para esculpir

{{ui:Editar}} › {{ui:Mais}} › {{ui:Grelha de terreno…}} pede uma largura, uma profundidade e um tamanho de célula, e depois coloca uma grelha plana de triângulos no canto onde clicar. Células pequenas permitem esculpir com mais suavidade, mas criam mais faces (no máximo 200 × 200 células).

## Esculpir: elevar e baixar o solo

1. Faça duplo clique no terreno para o abrir.
2. {{ui:Editar}} › {{ui:Mais}} › {{ui:Esculpir terreno}}. Um círculo mostra o pincel sobre o solo, sob o ponteiro.
3. Arraste para cima para elevar o solo sob o pincel, ou para baixo para o baixar. O centro é o que mais se move e o solo passa suavemente a zero na margem do círculo, pelo que montes e depressões saem suaves.

Para fazer um monte com uma altura exata, clique uma vez, escreva depois a altura, como `1.5m` (um sinal de menos baixa), e prima {{key:Enter}}. Para mudar o pincel, escreva um comprimento antes de clicar: `5m` dá um pincel com raio de 5 m.

Cada operação de esculpir é um único passo de anular.

## Coisas a saber

- Esculpir move apenas as faces triangulares, pelo que cada face se mantém plana. As faces desenhadas à mão (retângulos, polígonos) não são terreno: a ferramenta avisa.
- Esculpir move os pontos apenas na vertical; não acrescenta pontos. Para mais detalhe, crie uma grelha com células mais pequenas.
- O terreno exporta como qualquer outro grupo. Em IFC é um proxy de elemento de construção, como tudo o resto.
