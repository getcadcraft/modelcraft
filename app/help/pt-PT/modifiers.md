---
title: Modificadores numa malha, num grupo ou num componente
summary: Escale, espelhe, faça matrizes, suavize, bisele, corte e dobre uma malha sem a alterar; repita ou escale um grupo ou componente com a mesma pilha; torne-o permanente quando estiver pronto.
keywords: modificador, modificadores, pilha, grupo, componente, escala, aplicar, editar origem, não destrutivo, espelho, matriz, matriz radial, subdivisão, superfície de subdivisão, suavizar, bisel, solidificar, espessura, booleano, cortar, deslocar, ruído, soldar, decimar, simplificar, treliça, gaiola, deformação por curva, dobrar, shrinkwrap, aplicar
from: dd5ec1cb
---

Um **modificador** altera o que uma malha mostra sem alterar a própria malha. Espelhe uma metade de uma peça e modele apenas essa metade; arredonde uma caixa com uma superfície de subdivisão e continue a editar a caixa. Os modificadores ficam numa **pilha** e atuam por ordem, de cima para baixo. O que vê, exporta, imprime e renderiza é a malha com todos os modificadores que estejam ativos.

## Acrescentar um modificador

1. Selecione uma malha. Na área de trabalho Modelo, a secção **Modificadores** fica em {{ui:Informações da entidade}}; na área de trabalho Malha fica no painel à direita.
2. Escolha um em {{ui:Acrescentar um modificador…}}. Fica no fundo da pilha.
3. Altere as definições abaixo do nome. As distâncias aceitam os mesmos valores da caixa de valor; assim, `600mm`, `2'6"` e `(6m)/4` funcionam todos.

Cada alteração é um passo de anulação: {{key:Mod+Z}} anula-a.

## Os botões de cada modificador

- A marca liga ou desliga o modificador.
- O botão do ecrã mostra ou oculta-o na vista (continua na pilha).
- O botão da câmara mostra ou oculta-o nas imagens renderizadas e nos vídeos, para que um modificador possa ser só para renderizações (ou só para a vista).
- As setas movem-no para cima ou para baixo na pilha. A ordem importa: espelhar e depois subdividir dá uma junta suave; subdividir e depois espelhar não.
- {{ui:Aplicar}} torna a forma parte da malha: os modificadores acima dele e este são aplicados à própria malha e saem da pilha. É um só passo de anulação.
- A cruz remove-o.

## Os modificadores

| Modificador | O que faz |
| --- | --- |
| Escala | Escala em torno da origem do objeto, com um fator para vermelho, verde e azul. Também num grupo ou componente. |
| Espelho | Acrescenta uma cópia espelhada segundo o vermelho, o verde ou o azul, através da origem da malha, e une as metades onde se encontram. |
| Matriz | Copia em linha (um passo do próprio tamanho vezes os números que indicar, mais um passo fixo), em torno de um eixo ou ao longo de uma curva do modelo. Um grupo ou componente segue a mesma linha. |
| Superfície de subdivisão | Suaviza a malha por subdivisão de Catmull-Clark. As arestas vivas mantêm-se vincadas. As renderizações podem usar mais níveis do que a vista. |
| Bisel | Arredonda todas as arestas mais acentuadas do que o ângulo indicado. |
| Solidificar | Dá uma espessura a uma superfície e fecha o rebordo. |
| Booleano | Corta, une ou mantém a sobreposição com outro objeto do modelo. Ambos têm de ser sólidos fechados. |
| Deslocar | Desloca a superfície para dentro ou para fora por um ruído suave. A mesma semente dá sempre as mesmas irregularidades. |
| Soldar | Une os vértices mais próximos do que uma distância. |
| Decimar | Mantém uma parte dos triângulos, removendo os que menos alteram a forma. |
| Suavizar | Relaxa os vértices em direção aos vizinhos. |
| Treliça | Dobra a malha com uma gaiola: mova os pontos da gaiola e a malha segue-os. |
| Deformação por curva | Dobra a malha ao longo de uma curva do modelo, segundo o vermelho, o verde ou o azul. |
| Shrinkwrap | Move cada vértice para o ponto mais próximo de outro objeto. |

## Num grupo ou num componente

Um grupo ou componente também pode guardar uma receita, por isso o abat-jour de uma lâmpada pode ser uma **Escala** e uma **Matriz** de um só abat-jour, e alterar um número altera a lâmpada.

1. Selecione um grupo ou componente. Em {{ui:Informações da entidade}}, a respetiva secção **Modificadores** lista a pilha (vazia ao início).
2. Escolha {{ui:Escala}} ou {{ui:Matriz}} em {{ui:Acrescentar um modificador…}}. O grupo passa a ser um componente que é **o original, colocado pela pilha**. O original mantém-se: edite-o e todas as cópias o seguem de imediato.
3. A escala aceita um fator para o vermelho, o verde e o azul (`1, 1, 2` duplica a altura). A matriz recebe o número de cópias, um passo como fração do tamanho do resultado até ao momento, e um passo extra em distâncias.

A pilha corre de cima para baixo, sobre os eixos do próprio original e em torno da respetiva origem, por isso a ordem importa: uma matriz de três cópias a 3 m umas das outras, seguida de Escala 2 no vermelho, põe as cópias a 6 m; primeiro a Escala e depois a Matriz mantém-nas a 3 m. A marca, as setas e a cruz funcionam como numa malha; os botões de vista e câmara e Aplicar num modificador não, porque uma pilha num grupo é uma só coisa.

- {{ui:Editar origem}} abre o original no próprio sítio. As alterações aparecem em todas as cópias; ao fechá-lo, volta ao ponto onde estava.
- {{ui:Aplicar modificadores}} torna o resultado em arestas e faces simples e retira a pilha, num só passo de anulação. As cópias que se sobrepõem mantêm-se como geometria separada: Aplicar modificadores não é uma união.
- As cópias do componente partilham a receita; {{ui:Tornar único}} separa-a (o original continua partilhado).
- A pilha é guardada no ficheiro, transportada por copiar e colar e pela anulação, e Purge unused mantém o original. Um programa que não conheça modificadores continua a mostrar as cópias.
- Até {{ui:Aplicar modificadores}}, o resultado não pode ser aberto para edição, explodido, redimensionado nem esticado: seria reconstruído na alteração seguinte. Cada uma destas ações indica-o.
- Os limites são 32 modificadores e 1,000 cópias. Um componente criado para esticar (Stretch) e uma pilha ainda não podem partilhar uma definição.

## Superfície de subdivisão

A subdivisão suaviza uma malha por Catmull-Clark: cada face passa a faces de quatro lados, e cada nível cria quatro vezes mais. Uma caixa com dois ou três níveis já parece uma forma arredondada, e continua a editar a caixa.

- **Níveis na vista** define o grau de suavidade.
- **Níveis nas renderizações** define a suavidade das imagens e dos vídeos renderizados; as renderizações podem usar mais níveis do que a vista.
- **Renderizar na verdadeira superfície suave** põe os pontos de uma malha renderizada na superfície-limite para onde tendem os níveis, por isso até dois níveis renderizam tão suaves como muitos.
- **Vincos** mantêm as arestas vivas: na área de trabalho Malha, selecione arestas e use {{ui:Vinco}} (1 mantém-se vivo, 0.5 arredonda um pouco, 0 é suave). Veja [Editar uma malha](topic:mesh-edit).
- **Reduza o nível na vista numa malha grande:** quando os níveis pedidos dariam mais faces do que a vista deste computador consegue tratar bem, a vista mostra um nível inferior e indica qual. {{ui:Aplicar}} usa sempre todos os níveis. O número de faces é definido pela classe da máquina em {{ui:Definições}} › Renderização › A máquina.
- As bordas abertas mantêm os cantos e ficam na linha das respetivas arestas.

## Dobrar com uma gaiola de treliça

1. Acrescente um modificador {{ui:Treliça}} e prima {{ui:Acrescentar uma gaiola de treliça à volta da malha}}. Aparece uma gaiola de 3 × 3 × 3 pontos à volta da malha, desenhada em linhas.
2. Abra a gaiola na área de trabalho Malha (faça duplo clique nela) e mova os respetivos pontos. A malha segue-os de forma suave.

:::tip
Uma gaiola é uma malha como as outras: oculte-a com a respetiva etiqueta quando terminar.
:::

## Malhas grandes

As pilhas pequenas são calculadas de imediato. Uma grande é calculada em segundo plano em cada núcleo do computador: a vista continua a mostrar o último resultado até o novo estar pronto. Os Booleanos carregam o modelador de sólidos na primeira vez; a vista indica-o durante um momento.

## O que os modificadores ainda não fazem

- Pesos por vértice (uma atenuação pintada na malha) para Deslocar, Suavizar e Shrinkwrap.
- Modificadores além de Escala e da matriz linear na geometria de empurrar/puxar (grupos e componentes): primeiro converta-o numa malha ({{ui:Converter em malha}}). Espelho, matriz circular ou em curva, Dobrar e Afunilar em grupos ficam para mais tarde.
