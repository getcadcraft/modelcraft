---
title: Nós: construir um modelo por ligações
summary: Ligue números a pontos, pontos a curvas e curvas a superfícies. Altere um número e tudo o que depende dele é reconstruído. Cada nó é também uma linha de CraftScript, e o grafo fica guardado no ficheiro.
keywords: nós, editor de nós, programação visual, paramétrico, grafo, fios, portas, forma livre, freeform, nurbs, loft, extrudir, revolução, círculo, curva, superfície, série, intervalo, aleatório, lista, script, craftscript, grasshopper
from: 9c8e254f
---

O editor **Nós** cria geometria ligando caixas entre si. Cada caixa (um nó) faz uma tarefa pequena: criar um número, um ponto, um círculo, um loft. Ligue o resultado de um à entrada do seguinte, e o modelo acompanha quando altera um número no início.

Abra-o a partir do painel da direita: {{ui:Nodes}} › {{ui:Nodes…}}. Um ficheiro que já tenha um grafo abre-o automaticamente. É uma janela sobre a vista 3D: arraste a barra de título para a mover e o canto para a redimensionar.

## Ligações

1. Escolha um nó na lista da esquerda (escreva na caixa de pesquisa para a restringir; <kbd>Enter</kbd> adiciona a primeira correspondência). Ele aparece no meio da área de desenho.
2. Arraste a partir de um ponto de **saída** redondo, à direita de um nó, até um ponto de **entrada** redondo, à esquerda de outro. O ponto fica verde quando encaixa e vermelho quando não encaixa; passe o ponteiro por cima dele para ver o motivo.
3. Uma entrada sem ligação mostra uma caixa para um valor escrito. Escreva um número e prima <kbd>Tab</kbd>: o resultado é reconstruído.
4. O pequeno círculo na barra de título de um nó é o seu **olho**. Um nó com o olho ativo é desenhado na vista 3D: como linhas para curvas, sombreado para superfícies, pontos para pontos.

Arraste um nó pela barra de título. Arraste o fundo para deslocar a vista, e use a roda do rato para fazer zoom. <kbd>Delete</kbd> remove o nó selecionado. {{ui:Tidy}} dispõe os nós em colunas, {{ui:Fit}} traz todos para a vista, e {{ui:Undo}} e {{ui:Redo}} percorrem as suas edições.

## Tipos e unidades

As portas têm um tipo: número, sim/não, ponto, vetor, curva, superfície, malha, sólido, ou «geometria» para qualquer um destes. Um ponto pode alimentar uma entrada de vetor e vice-versa. Os números têm uma unidade: um **comprimento** está em milímetros e um **ângulo** em graus. Um comprimento não pode alimentar um ângulo, e um comprimento vezes um comprimento (uma área) é recusado, pelo que uma ligação errada é travada ao ser feita.

Um ponto quadrado é uma **lista**. Quando uma lista chega a uma entrada de valor único, o nó executa-se uma vez por cada item, e o seu resultado passa a ser uma lista. A lista mais curta repete o último item. Por exemplo, uma **Série** de alturas ligada ao **Mover** cria uma pilha de cópias.

## Sólidos e booleanas como nós

O grupo **Sólidos** cria corpos fechados a partir das mesmas superfícies exatas do painel Superfícies: **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** (dimensões em mm), **União**, **Subtrair** e **Interseccionar** (o segundo sólido é retirado do primeiro; a tolerância é a distância máxima a que os triângulos do motor de sólidos podem estar das superfícies exatas), **Boleado entre faces** (as faces pelo seu número no sólido, 1 para a primeira; um raio e, acima de 0, um raio no fim), **Volume do sólido** (mm³) e **Sólido para malha** (para o ver ou fixar). Um sólido tem o seu próprio tipo de porta: um ponto ou um número não podem ser ligados a uma entrada de sólido, e o ponto fica vermelho. Os nós Booleana e Boleado usam o motor de sólidos do próprio programa, carregado na primeira vez que o editor abre.

## Erros

Um nó que não consegue fazer o seu trabalho indica o motivo por baixo do nome, a vermelho («O raio tem de ser superior a zero.»), e os nós a seguir ficam à espera. A mesma mensagem aparece como um Problema no painel Problemas, para a encontrar daí.

## Tudo é uma linha de script

Prima {{ui:Script}} para ver o grafo como CraftScript: uma linha por nó, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite o texto e prima {{ui:Make the graph from this script}} para o trazer de volta como grafo. As mesmas funções `nd_` funcionam num CraftScript no PartCraft, pelo que um grafo pode ser executado, repetido em ciclo ou testado aí. Os números aleatórios levam sempre uma **semente**, pelo que o mesmo grafo dá o mesmo resultado em qualquer computador.

## Guardado com o ficheiro

O grafo fica guardado no ficheiro do modelo. Os nós criam curvas, superfícies e malhas próprias: não alteram as faces do modelo até que o peça.

## Fixar no modelo

Ative o olho de um nó que cria uma superfície ou uma malha e, em seguida, prima {{ui:Bake to model}} na janela Nós. Cada superfície ou malha visível torna-se um grupo de faces no modelo, em metros, que pode editar como qualquer outro. Conta como um único passo de anulação. O grafo mantém-se, mas a cópia deixa de o acompanhar: altere um número e volte a fixar para obter uma nova. Pontos e curvas não são sólidos, por isso ficam de fora, e a mensagem indica quantos.
