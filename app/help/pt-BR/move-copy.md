---
title: Mover, copiar e criar matrizes
summary: Mova objetos clicando ou por uma distância exata, copie-os com uma tecla modificadora e crie uma fileira de cópias igualmente espaçadas.
keywords: mover, copiar, duplicar, matriz, fileira, espaçamento, dividir, deslocar, esticar, colunas, repetir, cópia múltipla
from: 280245fc
---

{{ui:Move}} ({{key:M}}) move o que estiver selecionado de um ponto a outro. Mantendo uma tecla modificadora pressionada, ele vira uma cópia, e depois de copiar você pode digitar quantas outras quiser.

## Mover algo

1. Selecione o que deseja mover (veja [Selecionar objetos](topic:select)). Se nada estiver selecionado, {{ui:Move}} pega o objeto em que você clicar.
2. Pressione {{key:M}}.
3. Clique em um ponto de origem. Escolha algo significativo, como um canto: esse ponto ficará exatamente onde você clicar em seguida.
4. Mova o ponteiro. A seleção acompanha o movimento. Ela se encaixa em pontos, arestas e nas direções vermelha, verde e azul, como uma linha faz.
5. Clique onde o ponto deve ir, ou digite uma distância e pressione {{key:Enter}}.

   A dica da barra de status volta para "Clique em um ponto de origem…" para o próximo movimento.

Uma distância digitada segue a direção para onde você aponta. Você também pode digitar um deslocamento exato, `<2m,0,0>` (2 m ao longo do vermelho), ou um destino exato para o ponto escolhido, `[0,0,0]` (a origem). Veja [Digitar medidas exatas](topic:value-box).

Para mover ao longo de um único eixo, pressione uma tecla de seta depois do primeiro clique: {{key:Right}} trava no vermelho, {{key:Left}} no verde, {{key:Up}} no azul. Pressione a mesma seta de novo para destravar.

## Mover parte de uma forma a estica

Geometria que não está agrupada fica conectada. Se você selecionar uma face ou algumas arestas e movê-las, as faces presas a elas se esticam para acompanhar. Mova a face superior de uma caixa para o lado e a caixa se inclina; mova uma aresta do telhado e o telhado muda de inclinação. Faces que não podem mais permanecer planas se dobram em triângulos.

Para mover um objeto inteiro sem esticá-lo, selecione todo ele primeiro (clique três vezes), ou, melhor ainda, transforme-o em grupo ou componente (veja [Grupos e componentes](topic:groups-components)).

## Copiar algo

1. Selecione o que deseja copiar.
2. Pressione {{key:M}}.
3. Mantenha {{key:Ctrl}} pressionada (ou {{key:Alt}}) e clique no ponto de origem. No Mac, {{key:Mod}} ou {{key:Alt}} faz o mesmo. A dica diz "Ctrl move em vez disso", o que significa que você está copiando.

   Você também pode pressionar e soltar {{key:Ctrl}} ou {{key:Alt}} depois do primeiro clique para alternar entre mover e copiar.

4. Clique onde a cópia deve ir, ou digite uma distância e pressione {{key:Enter}}.

   O original permanece onde estava, e a cópia fica selecionada.

## Copiar, recortar, colar e duplicar

- {{key:Mod+C}} copia a seleção, {{key:Mod+X}} recorta (copia e depois apaga), {{ui:Copy}} e {{ui:Paste}} também são botões no grupo {{ui:Edit}} da barra de ferramentas, e {{ui:More}} ao lado deles tem recortar, colar no mesmo local e duplicar.
- {{key:Mod+V}} cola: um contorno da cópia acompanha o ponteiro, encaixando-se como qualquer ferramenta, e um clique a posiciona com o canto mais baixo naquele ponto. {{key:Esc}} cancela.
- {{key:Mod+Shift+V}} cola no mesmo local, exatamente de onde a cópia veio. É útil para mover algo para um grupo que você tenha aberto.
- {{key:Mod+D}} ({{key:Shift+D}} no estilo Modeler) duplica: uma cópia é criada e acompanha o ponteiro de imediato. Clique para posicioná-la, digite uma distância, ou pressione {{key:Esc}} para soltá-la. Logo em seguida, digite `3x` para mais cópias em sequência.

Um grupo colado se torna um novo grupo. Um componente colado é outra colocação do mesmo componente, então editar um deles ainda altera todos. As cópias também podem ser coladas em outra guia do ModelCraft neste navegador (entram ali como novas definições).

## Uma fileira de cópias

Logo após uma cópia, enquanto {{ui:Move}} ainda é a ferramenta:

- Digite `3x` (ou `*3`) e pressione {{key:Enter}} para três cópias em sequência, cada uma com o mesmo espaçamento da primeira cópia. Você ganha três novas cópias além do original.
- Digite `/3` e pressione {{key:Enter}} para dividir: três cópias espalhadas igualmente desde o original até onde você posicionou a primeira cópia, com a última exatamente naquele ponto. Use isso para preencher um vão: posicione uma cópia na extremidade distante e depois divida.

Você pode digitar outro número logo em seguida: `5x` substitui a fileira `3x`. A dica lembra: "Copiado. Digite 3x para mais cópias em sequência, ou /3 para dividir a distância."

### Exemplo: colunas a cada 6 metros

1. Crie uma coluna e transforme-a em componente ({{key:G}}), para que todas as cópias mudem juntas depois.
2. Pressione {{key:M}}, mantenha {{key:Ctrl}} pressionada e clique no canto da base da coluna.
3. Mova ao longo do eixo vermelho e digite `6m`, depois {{key:Enter}}.
4. Digite `4x` e {{key:Enter}}. Você terá cinco colunas, com 6 m de distância entre elas.

## Coisas a saber

- Pressione {{key:Esc}} antes do segundo clique para cancelar; tudo volta ao lugar original.
- {{ui:Move}} funciona dentro do grupo que você está editando. Para mover um grupo inteiro, feche-o primeiro e selecione-o de fora.
- Com **Colisão** ativada (canto inferior direito, e nas [configurações do ModelCraft](topic:settings#solids-stop-where-they-touch)), um movimento para onde a seleção toca outro sólido, em vez de atravessá-lo. Clique em {{ui:Collide}} para desativá-la em um movimento que deve atravessar.
- Para colocar uma cópia dentro de outro grupo: copie-a, abra o outro grupo e cole ({{key:Mod+Shift+V}} mantém no mesmo lugar).
