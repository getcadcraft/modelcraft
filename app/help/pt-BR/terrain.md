---
title: Terreno: chão a partir de curvas de nível e como esculpi-lo
summary: Crie o chão a partir de curvas de nível ou como uma grade, depois eleve e rebaixe com um pincel suave.
keywords: terreno, chão, paisagem, topografia, curvas de nível, local, declive, morro, monte, caixa de areia, smoove, esculpir, greide, TIN
from: 407652b3
---

Terreno é chão feito de triângulos, então pode seguir qualquer forma. Ele é um grupo: clique duas vezes nele para editá-lo.

## A partir de curvas de nível

1. Obtenha as curvas de nível em suas alturas: desenhe-as, ou [importe uma planta do local](topic:site-plan) e mova cada curva até o nível dela.
2. Selecione-as (todas as arestas de todas as curvas).
3. {{ui:Editar}} › {{ui:Mais}} › {{ui:Terreno a partir das curvas de nível selecionadas}}.

O ModelCraft une os pontos das curvas com triângulos (um TIN) e suaviza cada aresta interna, para que o chão tenha sombreamento liso. As linhas em si permanecem; apague-as ou oculte-as quando não precisar mais. Curvas muito densas são reduzidas para 8 000 pontos.

## Uma grade para esculpir

{{ui:Editar}} › {{ui:Mais}} › {{ui:Grade de terreno…}} pede uma largura, uma profundidade e um tamanho de célula, depois posiciona uma grade plana de triângulos onde você clicar no canto. Células pequenas permitem esculpir com mais suavidade, mas criam mais faces (no máximo 200 × 200 células).

## Esculpir: elevar e rebaixar o chão

1. Clique duas vezes no terreno para abri-lo.
2. {{ui:Editar}} › {{ui:Mais}} › {{ui:Esculpir terreno}}. Um círculo mostra o pincel sobre o chão sob o ponteiro.
3. Arraste para cima para elevar o chão sob o pincel, ou para baixo para rebaixá-lo. O centro se move mais, e o chão se suaviza até zero na borda do círculo, então montes e depressões saem lisos.

Para fazer um monte com altura exata, clique uma vez, depois digite a altura, como `1.5m` (com sinal de menos ela rebaixa), e pressione {{key:Enter}}. Para mudar o pincel, digite um comprimento antes de clicar: `5m` dá um pincel com 5 m de raio.

Cada escultura é um passo do desfazer.

## Coisas a saber

- Esculpir move apenas faces de triângulos, então todas as faces permanecem planas. Faces desenhadas à mão (retângulos, polígonos) não são terreno: a ferramenta avisa.
- Esculpir move os pontos somente para cima e para baixo; não adiciona pontos. Para mais detalhes, faça uma grade com células menores.
- O terreno é exportado como qualquer outro grupo. Em IFC, é um building element proxy, como tudo o mais.
