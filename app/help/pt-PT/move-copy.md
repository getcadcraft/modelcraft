---
title: Mover, copiar e criar matrizes
summary: Mova objetos ao clicar ou a uma distância exata, copie-os com uma tecla modificadora e crie uma fila de cópias com espaçamento regular.
keywords: mover, copiar, duplicar, matriz, fila, espaçamento, dividir, offset, esticar, colunas, repetir, cópia múltipla
from: 280245fc
---

{{ui:Move}} ({{key:M}}) move o que estiver selecionado de um ponto para outro. Com uma tecla modificadora premida, o comando passa a criar uma cópia, e depois de copiar pode escrever quantas cópias adicionais pretende.

## Mover algo

1. Selecione o que pretende mover (veja [Selecionar objetos](topic:select)). Se não houver nada selecionado, o {{ui:Move}} usa o objeto em que clicar.
2. Prima {{key:M}}.
3. Clique num ponto de origem. Escolha algo com significado, como um canto: esse ponto ficará exatamente onde clicar a seguir.
4. Mova o ponteiro. A seleção acompanha-o. Ajusta-se a pontos, arestas e às direções vermelha, verde e azul, como acontece numa linha.
5. Clique onde o ponto deve ficar, ou escreva uma distância e prima {{key:Enter}}.

   A sugestão da barra de estado volta a "Clique num ponto de origem…" para o movimento seguinte.

Uma distância escrita segue a direção para onde está a apontar. Também pode escrever um deslocamento exato, `<2m,0,0>` (2 m ao longo do vermelho), ou um destino exato para o ponto escolhido, `[0,0,0]` (a origem). Veja [Escrever medidas exatas](topic:value-box).

Para mover apenas ao longo de um eixo, prima uma tecla de seta depois do primeiro clique: {{key:Right}} bloqueia no vermelho, {{key:Left}} no verde, {{key:Up}} no azul. Prima a mesma seta outra vez para desbloquear.

## Mover parte de uma forma estica-a

A geometria que não está agrupada está ligada. Se selecionar uma face ou algumas arestas e as mover, as faces ligadas a elas esticam para as acompanhar. Mova a face de cima de uma caixa para o lado e a caixa inclina-se; mova uma aresta do telhado e o telhado muda de inclinação. As faces que já não podem manter-se planas dobram-se em triângulos.

Para mover um objeto inteiro sem o esticar, selecione-o todo primeiro (triplo clique), ou, melhor ainda, transforme-o num grupo ou componente (veja [Grupos e componentes](topic:groups-components)).

## Copiar algo

1. Selecione o que pretende copiar.
2. Prima {{key:M}}.
3. Mantenha {{key:Ctrl}} (ou {{key:Alt}}) premida e clique no ponto de origem. Num Mac, {{key:Mod}} ou {{key:Alt}} faz o mesmo. A sugestão diz "Ctrl move em vez disso", o que significa que está a copiar.

   Também pode premir e soltar {{key:Ctrl}} ou {{key:Alt}} depois do primeiro clique para alternar entre mover e copiar.

4. Clique onde a cópia deve ficar, ou escreva uma distância e prima {{key:Enter}}.

   O original fica onde estava, e a cópia fica selecionada.

## Copiar, cortar, colar e duplicar

- {{key:Mod+C}} copia a seleção, {{key:Mod+X}} corta-a (copia e depois apaga), {{ui:Copy}} e {{ui:Paste}} são também botões do grupo {{ui:Edit}} da barra de ferramentas, e {{ui:More}} ao lado tem cortar, colar no mesmo sítio e duplicar.
- {{key:Mod+V}} cola: um contorno da cópia segue o ponteiro, ajustando-se a pontos como qualquer ferramenta, e um clique coloca-a com o canto mais baixo nesse ponto. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} cola no mesmo sítio, exatamente de onde veio a cópia. É útil para mover algo para dentro de um grupo que tenha aberto.
- {{key:Mod+D}} ({{key:Shift+D}} no estilo Modeler) duplica: é criada uma cópia que se move com o ponteiro imediatamente; clique para a colocar, escreva uma distância, ou prima {{key:Esc}} para a largar. Logo a seguir, escreva `3x` para mais cópias seguidas.

Um grupo colado torna-se um novo grupo. Um componente colado é outra colocação do mesmo componente, pelo que editar um deles continua a alterar todos. As cópias também podem ser coladas noutro separador do ModelCraft neste navegador (entram aí como novas definições).

## Uma fila de cópias

Logo após uma cópia, enquanto {{ui:Move}} continuar a ser a ferramenta:

- Escreva `3x` (ou `*3`) e prima {{key:Enter}} para três cópias seguidas, cada uma com o mesmo espaçamento da primeira cópia. Obtém três cópias novas além do original.
- Escreva `/3` e prima {{key:Enter}} para dividir: três cópias distribuídas uniformemente desde o original até onde colocou a primeira cópia, a última nesse ponto. Use isto para preencher um intervalo: coloque uma cópia na extremidade distante e depois divida.

Pode escrever logo a seguir outro número: `5x` substitui a fila de `3x`. A sugestão lembra: "Copiado. Escreva 3x para mais cópias seguidas, ou /3 para dividir a distância."

### Exemplo: colunas a cada 6 metros

1. Crie uma coluna e transforme-a num componente ({{key:G}}), para que todas as cópias mudem em conjunto mais tarde.
2. Prima {{key:M}}, mantenha {{key:Ctrl}} premida e clique no canto da base da coluna.
3. Mova ao longo do eixo vermelho e escreva `6m`, depois {{key:Enter}}.
4. Escreva `4x` e {{key:Enter}}. Ficam cinco colunas, a 6 m de distância umas das outras.

## Outras coisas a saber

- Prima {{key:Esc}} antes do segundo clique para cancelar; tudo volta ao sítio onde estava.
- O {{ui:Move}} funciona dentro do grupo que estiver a editar. Para mover um grupo inteiro, feche-o primeiro e selecione-o a partir do exterior.
- Com a {{ui:Collide}} ativada (em baixo, à direita, e nas [definições do ModelCraft](topic:settings#solids-stop-where-they-touch)), um movimento para quando a seleção toca noutro sólido, em vez de o atravessar. Clique em {{ui:Collide}} para a desligar num movimento que deva atravessar.
- Para pôr uma cópia dentro de outro grupo: copie-a, abra o outro grupo e cole ({{key:Mod+Shift+V}} mantém-na no mesmo sítio).
