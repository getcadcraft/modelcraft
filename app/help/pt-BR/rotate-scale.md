---
title: Girar e escalar
summary: Gire coisas em torno de um ponto clicando ou digitando graus, e redimensione-as uniformemente por um fator.
keywords: grips de escala, esticar, não uniforme, por eixo, inverter, espelhar, cópia espelhada, inverter ao longo de, girar, virar, ângulo, graus, transferidor, escala, redimensionar, ampliar, reduzir, fator, escala uniforme
from: 45cdcb49
---

## Girar

{{ui:Girar}} ({{key:Q}}) gira a seleção em torno de um ponto central. São três cliques: o centro, uma direção inicial e a direção final.

1. Selecione o que quer girar. Se nada estiver selecionado, Girar pega a coisa em que você clicar primeiro.
2. Pressione {{key:Q}}. Um anel acompanha o cursor, mostrando o plano em que você vai girar.
3. Clique no centro de rotação.
   - No chão ou em espaço vazio, o anel fica plano (azul): o giro é em torno de um eixo vertical, como girar um prédio no seu terreno.
   - Em uma face, o anel fica no plano dessa face: o giro é em torno da direção própria da face. Clique em uma parede para girar algo em torno de um eixo horizontal.
4. Clique em um ponto que defina onde o ângulo começa, por exemplo ao longo de uma aresta da coisa que você está girando.
5. Mova o cursor em torno do centro. O ângulo aparece na ponta e na caixa de valor ({{ui:Ângulo}}). Ele trava em passos de 15° quando você se aproxima de um deles.
6. Clique para terminar, ou digite o ângulo em graus e pressione {{key:Enter}}: `90`, `45`, `-30`.

   Ângulos positivos giram no sentido anti-horário, visto do lado para onde o anel está voltado.

Pressione {{key:Ctrl}} (ou {{key:Alt}}) enquanto gira para girar uma **cópia** e deixar o original onde está, como em Mover; a dica informa se a cópia está ativa, e pressionar a tecla de novo a desativa. Digite `3x` logo após uma cópia girada para mais cópias em torno do mesmo centro.

Como em Mover, girar parte de uma geometria conectada torce as faces ligadas a ela. Agrupe as coisas antes para girá-las inteiras.

:::note
A dica diz que as teclas de seta escolhem o eixo de rotação, mas nesta versão elas giram a visualização antes do primeiro clique. Para escolher o eixo, clique no centro em uma face voltada para o lado desejado. Veja [Ainda não implementado](topic:not-built-yet).
:::

## Escalar

{{ui:Escala}} ({{key:S}}) redimensiona a seleção. Selecione primeiro o que quer redimensionar e depois pressione {{key:S}}: pequenos quadrados (grips) aparecem nos cantos, nas arestas e no meio dos lados da caixa dele.

### Esticar ou escalar com os grips

- Um grip de **canto** escala uniformemente em todas as direções, em torno do canto oposto.
- O grip no meio de um **lado** estica só nessa direção, em torno do lado oposto: deixa uma caixa mais comprida sem deixá-la mais alta.
- O grip no meio de uma **aresta** da caixa estica nas duas direções que a cruzam.
- Segure {{key:Ctrl}} ao clicar em um grip para escalar em torno do meio da caixa.

Clique em um grip, mova o cursor e clique de novo; ou clique no grip e digite um fator (`2` dobra, `0.5` reduz à metade) e pressione {{key:Enter}}. Para dar um fator próprio a cada direção, digite três, para vermelho, verde e azul: `2,1,0.5`. Dentro de um grupo aberto, as direções são as do próprio grupo.

### Escalar em torno de qualquer ponto

Clique em qualquer lugar que não seja um grip para escalar uniformemente em torno de um ponto seu. São três cliques:

1. Selecione o que quer redimensionar. Se nada estiver selecionado, Escala pega a coisa em que você clicar primeiro.
2. Pressione {{key:S}}.
3. Clique no ponto que permanece no lugar (não em um grip), por exemplo um canto inferior.
4. Clique em um ponto de referência. Sua distância até o primeiro ponto vale 1×.
5. Mova o cursor em direção ao primeiro ponto ou para longe dele. O fator aparece na ponta e na caixa de valor ({{ui:Escala}}).
6. Clique para terminar, ou digite um fator e pressione {{key:Enter}}: `2` dobra o tamanho, `0.5` reduz à metade.

### Escalar para um tamanho exato

Para deixar algo com um comprimento exato, calcule o fator: comprimento novo dividido pelo comprimento atual. No modo de três cliques, a caixa de valor faz contas, então digite `4.2/3.6` para deixar uma parede de 3.6 m com 4.2 m de comprimento. A caixa de valor de um grip aceita apenas números simples: calcule o fator antes (4.2 dividido por 3.6 dá cerca de 1.1667). Selecione a aresta antes para ler o comprimento atual em {{ui:Informações da entidade}}.

### Corrigir uma importação com tamanho errado

Arquivos OBJ não têm unidade, então um modelo desenhado em milímetros entra 1000 vezes maior. Selecione o grupo importado, pressione {{key:S}}, clique em um grip de canto, digite `0.001` e pressione {{key:Enter}}. Para um modelo desenhado em polegadas, digite `0.0254`.

## Coisas para saber

- Escalar em torno de um ponto com os três cliques é uniforme. Para esticar em uma só direção, use um grip de lado ou de aresta (veja acima).
- Escalar um grupo ou componente altera a cópia que você escalou; as outras cópias de um componente mantêm o tamanho.
- Pressione {{key:Esc}} antes do último clique para cancelar.

## Inverter

{{ui:Editar}} › {{ui:Mais}} › {{ui:Espelhar ao longo do vermelho}}, {{ui:Espelhar ao longo do verde}} ou {{ui:Espelhar ao longo do azul}} espelha a seleção no lugar, pelo meio da caixa dela: uma escada com corrimão à esquerda vira uma com corrimão à direita. As faces continuam voltadas para fora, e um grupo ou componente é espelhado como um todo (o interior dele não é reescrito).

{{ui:Cópia espelhada ao longo do vermelho}} (e verde, azul) deixa o original onde está e coloca uma cópia espelhada ao lado, do outro lado da caixa da seleção: a outra porta de um par, a outra ala de um prédio. A geometria solta que tocar ali se une ao original, como geometria encostada sempre faz; torne o original um grupo antes para mantê-los separados.

Dentro de um grupo aberto, vermelho, verde e azul são os eixos do próprio grupo.
