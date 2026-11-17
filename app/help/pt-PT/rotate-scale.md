---
title: Rodar e escalar
summary: Girar objetos em torno de um ponto, clicando ou escrevendo graus, e redimensioná-los uniformemente por um fator.
keywords: escala, grips de escala, esticar, não uniforme, por eixo, espelhar, simetria, cópia espelhada, espelhar segundo, rodar, girar, ângulo, graus, transferidor, escalar, redimensionar, ampliar, reduzir, fator, escala uniforme
from: 45cdcb49
---

## Rodar

{{ui:Rodar}} ({{key:Q}}) gira a seleção em torno de um ponto central. São precisos três cliques: o centro, uma direção inicial e a direção final.

1. Selecione o que quer girar. Se nada estiver selecionado, Rodar toma o objeto que clicar primeiro.
2. Prima {{key:Q}}. Um anel segue o cursor, mostrando o plano em que vai rodar.
3. Clique no centro de rotação.
   - No solo ou em espaço vazio, o anel fica deitado (azul): a rotação é em torno de um eixo vertical, como rodar um edifício no seu local.
   - Numa face, o anel fica no plano dessa face: a rotação é em torno da direção própria da face. Clique numa parede para girar algo em torno de um eixo horizontal.
4. Clique num ponto que define onde começa o ângulo, por exemplo ao longo de uma aresta do objeto que está a rodar.
5. Mova o cursor em torno do centro. O ângulo aparece na ponta e na caixa de valor ({{ui:Ângulo}}). Encaixa em passos de 15° quando se aproxima de um.
6. Clique para terminar, ou escreva o ângulo em graus e prima {{key:Enter}}: `90`, `45`, `-30`.

   Os ângulos positivos rodam no sentido anti-horário, visto do lado para onde o anel está virado.

Prima {{key:Ctrl}} (ou {{key:Alt}}) enquanto roda para rodar uma **cópia** e deixar o original no lugar, como com Mover; a ponta indica se a cópia está ativa, e premir a tecla de novo desativa-a. Escreva `3x` logo a seguir a uma cópia rodada para mais cópias em torno do mesmo centro.

Tal como em Mover, rodar parte de uma geometria ligada torce as faces que lhe estão presas. Agrupe primeiro os objetos para os rodar por inteiro.

:::note
A ponta diz que as teclas de setas escolhem o eixo de rotação, mas nesta versão elas orbitam a vista antes do primeiro clique. Para escolher o eixo, clique no centro numa face virada para o lado que pretende. Veja [Ainda não implementado](topic:not-built-yet).
:::

## Escala

{{ui:Escala}} ({{key:S}}) redimensiona a seleção. Selecione primeiro o que quer redimensionar e depois prima {{key:S}}: aparecem pequenos quadrados (grips) nos cantos, nas arestas e nos meios dos lados da sua caixa.

### Esticar ou escalar com os grips

- Um grip de **canto** escala uniformemente em todas as direções, em torno do canto oposto.
- O grip no meio de um **lado** estica apenas nessa direção, em torno do lado oposto: torna uma caixa mais comprida sem a tornar mais alta.
- O grip no meio de uma **aresta** da caixa estica nas duas direções que a atravessam.
- Mantenha {{key:Ctrl}} premido ao clicar num grip para escalar em torno do meio da caixa.

Clique num grip, mova o cursor e clique de novo; ou clique no grip e escreva um fator (`2` duplica, `0.5` reduz a metade) e prima {{key:Enter}}. Para dar a cada direção o seu fator, escreva três, para vermelho, verde e azul: `2,1,0.5`. Dentro de um grupo aberto, as direções são as do próprio grupo.

### Escalar em torno de qualquer ponto

Clique em qualquer sítio que não seja um grip para escalar uniformemente em torno de um ponto à sua escolha. São precisos três cliques:

1. Selecione o que quer redimensionar. Se nada estiver selecionado, Escala toma o objeto que clicar primeiro.
2. Prima {{key:S}}.
3. Clique no ponto que se mantém fixo (não num grip), por exemplo um canto inferior.
4. Clique num ponto de referência. A distância dele ao primeiro ponto conta como 1×.
5. Mova o cursor na direção do primeiro ponto ou afastando-o. O fator aparece na ponta e na caixa de valor ({{ui:Escala}}).
6. Clique para terminar, ou escreva um fator e prima {{key:Enter}}: `2` duplica o tamanho, `0.5` reduz a metade.

### Escalar para um tamanho exato

Para tornar algo com um comprimento exato, calcule o fator: novo comprimento a dividir pelo comprimento atual. No modo de três cliques a caixa de valor faz contas, por isso escreva `4.2/3.6` para tornar uma parede de 3.6 m com 4.2 m de comprimento. A caixa de valor de um grip aceita apenas números simples: calcule o fator primeiro (4.2 a dividir por 3.6 é cerca de 1.1667). Selecione primeiro a aresta para ler o seu comprimento atual em {{ui:Informações da entidade}}.

### Corrigir uma importação com tamanho errado

Os ficheiros OBJ não têm unidade, por isso um modelo desenhado em milímetros entra 1000 vezes maior do que o devido. Selecione o grupo importado, prima {{key:S}}, clique num grip de canto e escreva `0.001` e prima {{key:Enter}}. Para um modelo desenhado em polegadas, escreva `0.0254`.

## Coisas a saber

- Escalar em torno de um ponto com os três cliques é uniforme. Para esticar numa só direção, use um grip de lado ou de aresta (ver acima).
- Escalar um grupo ou componente altera apenas a cópia que escalou; as outras cópias de um componente mantêm o seu tamanho.
- Prima {{key:Esc}} antes do último clique para cancelar.

## Espelhar

{{ui:Editar}} › {{ui:Mais}} › {{ui:Espelhar segundo o vermelho}}, {{ui:Espelhar segundo o verde}} ou {{ui:Espelhar segundo o azul}} espelha a seleção no próprio sítio, através do meio da sua caixa: uma escada com o lanço à esquerda passa a ter o lanço à direita. As faces continuam voltadas para fora, e um grupo ou componente é espelhado no seu todo (o seu interior não é reescrito).

{{ui:Cópia espelhada segundo o vermelho}} (e verde e azul) deixa o original no lugar e coloca uma cópia espelhada ao lado, do outro lado da caixa da seleção: a outra porta de um par, a outra asa de um edifício. A geometria solta que lhe toque junta-se ao original, como a geometria que se toca sempre; torne primeiro o original um grupo para os manter separados.

Dentro de um grupo aberto, vermelho, verde e azul são os eixos do próprio grupo.
