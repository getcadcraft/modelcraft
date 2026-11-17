---
title: Nós: construa um modelo conectando
summary: Conecte números a pontos, pontos a curvas e curvas a superfícies. Altere um número e tudo o que vem depois é reconstruído. Cada nó também é uma linha de CraftScript, e o grafo é salvo no arquivo.
keywords: nós, editor de nós, programação visual, paramétrico, grafo, conexões, portas, forma livre, freeform, nurbs, loft, extrudar, revolucionar, círculo, curva, superfície, série, intervalo, aleatório, lista, script, craftscript, grasshopper
from: 9c8e254f
---

O editor **Nós** constrói geometria conectando caixas. Cada caixa (um nó) faz uma pequena tarefa: criar um número, um ponto, um círculo, um loft. Você liga o resultado de um nó à entrada do seguinte, e o modelo acompanha quando você altera um número no início.

Abra-o pelo painel da direita: {{ui:Nodes}} › {{ui:Nodes…}}. Um arquivo que já tenha um grafo o abre sozinho. Ele é uma janela sobre a vista 3D: arraste a barra de título para movê-la e arraste o canto para redimensioná-la.

## Conectar

1. Escolha um nó na lista à esquerda (digite na caixa de pesquisa para filtrar; <kbd>Enter</kbd> adiciona a primeira correspondência). Ele aparece no meio da área de desenho.
2. Arraste de um ponto redondo de **saída**, à direita de um nó, até um ponto redondo de **entrada**, à esquerda de outro. O ponto fica verde quando é compatível e vermelho quando não é; aponte para ele para ver o motivo.
3. Uma entrada sem nada conectado mostra uma caixa para um valor digitado. Digite um número e pressione <kbd>Tab</kbd>: o resultado é reconstruído.
4. O pequeno círculo na barra de título de um nó é o seu **olho**. Um nó com o olho ativado é desenhado na vista 3D: como linhas para curvas, sombreado para superfícies e pontos para pontos.

Arraste um nó pela barra de título. Arraste o fundo para deslocar a vista e role a roda para dar zoom. <kbd>Delete</kbd> remove o nó selecionado. {{ui:Tidy}} organiza os nós em colunas, {{ui:Fit}} traz todos para a vista, e {{ui:Undo}} e {{ui:Redo}} percorrem as suas edições.

## Tipos e unidades

As portas têm um tipo: número, sim/não, ponto, vetor, curva, superfície, malha, sólido, ou "geometria" para qualquer um desses. Um ponto pode alimentar uma entrada de vetor e vice-versa. Números carregam uma unidade: um **comprimento** é em milímetros e um **ângulo** é em graus. Um comprimento não pode alimentar um ângulo, e um comprimento vezes um comprimento (uma área) é recusado, então uma conexão errada é bloqueada assim que você a faz.

Uma porta quadrada é uma **lista**. Quando uma lista chega a uma entrada de valor único, o nó roda uma vez para cada item, e o resultado vira uma lista. A lista mais curta repete o último item. Por exemplo, uma **Série** de alturas ligada a **Mover** cria uma pilha de cópias.

## Sólidos e booleanas como nós

O grupo **Sólidos** cria corpos fechados a partir das mesmas superfícies exatas do painel Superfícies: **Caixa sólida**, **Cilindro sólido** e **Esfera sólida** (tamanhos em mm), **{{ui:Union}}**, **Subtrair** e **{{ui:Intersect with model}}** (o segundo sólido é tirado do primeiro; a tolerância é o quanto os triângulos do motor de sólidos podem se afastar das superfícies exatas), **Concordância entre faces** (as faces pelo número delas no sólido, sendo 1 a primeira; um raio e, acima de 0, um raio no fim), **Volume do sólido** (mm³) e **Sólido para malha** (para ver ou converter). Um sólido tem seu próprio tipo de porta: um ponto ou um número não pode ser ligado a uma entrada de sólido, e o ponto fica vermelho. Os nós de booleana e de concordância usam o próprio motor de sólidos do programa, carregado na primeira vez que o editor é aberto.

## Erros

Um nó que não consegue fazer a sua tarefa diz o motivo sob o nome dele, em vermelho ("O raio precisa ser maior que zero."), e os nós seguintes esperam. A mesma mensagem aparece como um Problema no painel Problemas, para que você possa encontrá-la por lá.

## Todo nó é uma linha de script

Pressione {{ui:Script}} para ver o grafo como CraftScript: uma linha por nó, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e pressione {{ui:Make the graph from this script}} para trazê-lo de volta como grafo. As mesmas funções `nd_` funcionam em um CraftScript no PartCraft, então um grafo pode ser executado, repetido ou testado lá. Números aleatórios sempre recebem uma **semente**, então o mesmo grafo dá o mesmo resultado em qualquer computador.

## Salvo com o arquivo

O grafo é salvo no arquivo do modelo. Os nós criam curvas, superfícies e malhas próprias: eles não alteram as faces do modelo até que você peça.

## Converter em modelo

Ative o olho de um nó que cria uma superfície ou uma malha e pressione {{ui:Bake to model}} na janela Nós. Cada superfície ou malha exibida vira um grupo de faces no modelo, em metros, que você pode editar como qualquer outra. É um único passo de desfazer. O grafo continua, mas a cópia não o acompanha mais: altere um número e converta de novo para obter uma nova. Pontos e curvas não são sólidos, então ficam de fora, e a mensagem informa quantos.
