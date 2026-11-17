---
title: Modificadores em uma malha, um grupo ou um componente
summary: Escale, espelhe, faça matrizes, suavize, chanfre, corte e dobre uma malha sem alterá-la; repita ou escale um grupo ou componente com a mesma pilha; torne-o permanente quando estiver pronto.
keywords: modificador, modificadores, pilha, grupo, componente, escala, calcular, editar origem, não destrutivo, espelhar, matriz, matriz radial, subdivisão, superfície de subdivisão, suavizar, chanfrar, solidificar, espessura, booleana, cortar, deslocar, ruído, soldar, decimar, simplificar, treliça, gaiola, deformação por curva, dobrar, shrinkwrap, aplicar
from: dd5ec1cb
---

Um **modificador** muda o que uma malha mostra sem alterar a própria malha. Espelhe uma metade de uma peça e modele apenas essa metade; arredonde uma caixa com uma superfície de subdivisão e continue editando a caixa. Os modificadores ficam em uma **pilha** e funcionam em ordem, de cima para baixo. O que você vê, exporta, imprime e renderiza é a malha com todos os modificadores que estão ligados.

## Adicionar um modificador

1. Selecione uma malha. Na área de trabalho Modelo, sua seção **Modificadores** fica em {{ui:Entity info}}; na área de trabalho Malha, fica no painel à direita.
2. Escolha um em {{ui:Add a modifier…}}. Ele vai para a base da pilha.
3. Altere as configurações abaixo do nome dele. Comprimentos aceitam os mesmos valores do campo Valor, então `600mm`, `2'6"` e `(6m)/4` funcionam.

Cada alteração é uma etapa de desfazer: {{key:Mod+Z}} a desfaz.

## Os botões de cada modificador

- A caixa de seleção liga ou desliga o modificador.
- O botão de tela mostra ou oculta o modificador na vista (ele permanece na pilha).
- O botão de câmera mostra ou oculta o modificador em imagens e vídeos renderizados, então um modificador pode ser só para renderizações (ou só para a vista).
- As setas o movem para cima ou para baixo na pilha. A ordem importa: espelhar e depois subdividir dá uma costura suave; subdividir e depois espelhar não dá.
- {{ui:Apply}} torna a forma parte da malha: os modificadores acima dele e este são aplicados à própria malha e saem da pilha. É uma etapa de desfazer.
- O botão X remove o modificador.

## Os modificadores

| Modificador | O que faz |
| --- | --- |
| Escala | Escala em torno da origem do objeto, com um fator para vermelho, verde e azul. Também funciona em grupo ou componente. |
| Espelhar | Adiciona uma cópia espelhada através de vermelho, verde ou azul pela origem da malha, e une as metades onde se encontram. |
| Matriz | Copia em linha (um passo do seu próprio tamanho vezes os números que você informa, mais um passo fixo), em torno de um eixo, ou ao longo de uma curva no modelo. Um grupo ou componente segue a linha. |
| Superfície de subdivisão | Suaviza a malha pela subdivisão de Catmull-Clark. Arestas vivas permanecem com vinco. As renderizações podem usar mais níveis do que a vista. |
| Chanfro | Arredonda cada aresta mais aguda que o ângulo informado. |
| Solidificar | Dá a uma superfície uma espessura e fecha a borda. |
| Booleana | Recorta, une ou mantém a sobreposição com outro objeto do modelo. Ambos precisam ser sólidos fechados. |
| Deslocar | Move a superfície para dentro ou para fora por ruído suave. A mesma semente dá as mesmas protuberâncias sempre. |
| Soldar | Une vértices mais próximos que uma distância. |
| Decimar | Mantém uma parte dos triângulos, removendo os que menos alteram a forma. |
| Suavizar | Relaxa os vértices em direção aos vizinhos. |
| Treliça | Dobra a malha com uma gaiola: mova os pontos da gaiola e a malha acompanha. |
| Deformação por curva | Dobra a malha ao longo de uma curva no modelo, ao longo de vermelho, verde ou azul. |
| Shrinkwrap | Move cada vértice para o ponto mais próximo de outro objeto. |

## Em um grupo ou componente

Um grupo ou componente também pode manter uma receita, então a cúpula de uma lâmpada pode ser uma **Escala** e uma **Matriz** de uma cúpula, e alterar um número muda a lâmpada.

1. Selecione um grupo ou componente. Em {{ui:Entity info}}, sua seção **Modificadores** lista a pilha (vazia no início).
2. Escolha {{ui:Scale}} ou {{ui:Array}} em {{ui:Add a modifier…}}. O grupo se torna um componente que é **o original, posicionado pela pilha**. O original é mantido: edite-o e cada cópia acompanha de imediato.
3. Escala aceita um fator para vermelho, verde e azul (`1, 1, 2` dobra a altura). Matriz aceita o número de cópias, um passo como fração do tamanho do resultado até então e um passo extra em comprimentos.

A pilha roda de cima para baixo nos eixos próprios do original, em torno da sua origem, então a ordem importa: uma Matriz de três cópias a 3 m de distância, depois Escala 2 em vermelho, coloca as cópias a 6 m de distância; Escala primeiro e depois a Matriz as mantém a 3 m. A caixa de seleção, as setas e o botão X funcionam como em uma malha; os botões de vista e de câmera e Aplicar em um modificador não, porque uma pilha em um grupo forma um único conjunto.

- {{ui:Edit source}} abre o original no lugar. As alterações aparecem em todas as cópias; ao fechar, você volta ao ponto de onde saiu.
- {{ui:Bake modifiers}} transforma o resultado em arestas e faces simples e remove a pilha, em uma só etapa de desfazer. Cópias que se sobrepõem permanecem como geometrias separadas: calcular não é uma união.
- Cópias do componente compartilham a receita; {{ui:Make unique}} a separa (o original continua compartilhado).
- A pilha é salva no arquivo, levada pelos copiar e colar e pelo desfazer, e Purgar itens não usados mantém o original. Um programa que não conhece modificadores ainda mostra as cópias.
- Até o cálculo, o resultado não pode ser editado, explodido, redimensionado nem esticado: ele seria reconstruído na próxima alteração. Cada uma dessas ações informa isso.
- Os limites são 32 modificadores e 1,000 cópias. Um componente feito para esticar (Stretch) e uma pilha ainda não podem compartilhar uma definição.

## Superfície de subdivisão

A subdivisão suaviza uma malha pela Catmull-Clark: cada face se torna faces de quatro lados, e cada nível produz quatro vezes mais faces. Uma caixa com dois ou três níveis já aparenta uma forma arredondada, e você continua editando a caixa.

- **Níveis na vista** define o quão suave ela é.
- **Níveis nas renderizações** define o quão suaves são as imagens e vídeos renderizados; renderizações podem usar mais níveis do que a vista.
- **Renderizações na superfície suave verdadeira** coloca os pontos de uma malha renderizada sobre a superfície-limite para a qual os níveis tendem, então até dois níveis renderizam tão suaves quanto muitos.
- **Vincos** mantêm arestas vivas: na área de trabalho Malha, selecione arestas e use {{ui:Crease}} (1 permanece viva, 0.5 arredonda um pouco, 0 é suave). Veja [Editar uma malha](topic:mesh-edit).
- **Reduza o nível da vista em uma malha grande:** quando os níveis pedidos dariam mais faces do que a vista deste computador lida bem, a vista mostra um nível menor e informa qual. {{ui:Apply}} sempre usa todos os níveis. Quantas faces são permitidas é definido pela classe da sua máquina em {{ui:Settings}} › Renderização › Sua máquina.
- Bordas abertas mantêm seus cantos e permanecem na linha de suas arestas.

## Dobrar com uma gaiola de treliça

1. Adicione um modificador {{ui:Lattice}} e pressione {{ui:Add a lattice cage round the mesh}}. Uma gaiola de 3 × 3 × 3 pontos aparece em torno da malha, desenhada em fios.
2. Abra a gaiola na área de trabalho Malha (clique duas vezes nela) e mova seus pontos. A malha acompanha suavemente.

:::tip
Uma gaiola é uma malha como qualquer outra: oculte-a com a sua etiqueta quando terminar.
:::

## Malhas grandes

Pilhas pequenas são calculadas de imediato. Uma grande é calculada em segundo plano, em todos os núcleos do seu computador: a vista continua mostrando o último resultado até que o novo esteja pronto. Booleanas carregam o modelador de sólidos na primeira vez; a vista informa isso por um momento.

## O que os modificadores ainda não fazem

- Pesos por vértice (uma queda pintada na malha) para Deslocar, Suavizar e Shrinkwrap.
- Modificadores diferentes de Escala e da Matriz linear em geometria de push/pull (grupos e componentes): transforme em malha primeiro ({{ui:Convert to mesh}}). Espelhar, uma Matriz radial ou por curva, Dobrar e Afunilar em grupos ficam para depois.
