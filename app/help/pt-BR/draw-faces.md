---
title: Desenhar faces com linhas, retângulos, círculos e arcos
summary: Crie faces planas no chão ou sobre outras faces, divida-as com linhas e desenhe círculos e polígonos com o número de lados que você quiser.
keywords: desenhar, linha, retângulo, círculo, polígono, deslocar, recuar, moldura, borda, arco, curva, spline, suave, cabo, caminho, abaulamento, raio, curva, face, planta baixa, pegada, dividir, lados, segmentos, contorno, lápis
from: b6d7b7dd
---

Tudo no ModelCraft começa como uma **face** plana: uma superfície fechada por arestas. Você pode desenhar uma face diretamente com {{ui:Retângulo}}, {{ui:Círculo}} ou {{ui:Polígono}}, ou contornar uma aresta de cada vez com {{ui:Linha}}. As faces são o que [Empurrar/puxar](topic:push-pull) transforma em sólidos.

## Desenhar um retângulo

1. Pressione {{key:R}}.
2. Clique no primeiro canto: no chão, ou em qualquer face do modelo.
3. Mova o ponteiro. O retângulo permanece no chão (ou na face em que você começou), e a caixa de valores ({{ui:Cotas}}) mostra a largura e a profundidade. A dica diz "Quadrado" quando os lados são iguais.

   Para desenhar em outro plano, aponte para ele: uma face que passa pelo primeiro canto coloca o retângulo sobre essa face, e fazer snap em um ponto fora do plano (uma extremidade, uma aresta, o eixo azul) põe o retângulo em pé, passando pelos dois cantos. Faça snap de volta em um ponto do primeiro plano e ele volta a ficar deitado. Para manter um plano, pressione uma tecla de seta: {{key:Up}} mantém o retângulo nivelado (o plano azul), {{key:Right}} no plano vermelho, {{key:Left}} no plano verde. Pressione a mesma tecla de novo para desbloquear.
4. Clique no canto oposto, ou digite as duas medidas separadas por vírgula e pressione {{key:Enter}}: `4m,3m`, `4000,3000` em um modelo em milímetros, ou `12',10'6"` em pés e polegadas.

   Uma face aparece com quatro arestas em volta dela.

As medidas digitadas seguem a direção para onde você apontava: se o ponteiro estiver à esquerda do primeiro canto quando você digitar, o retângulo cresce para a esquerda.

:::warning
A vírgula separa as duas medidas, então ela não pode ser o separador decimal. Digite `2.5m,3m`, nunca `2,5m`.
:::

## Desenhar um círculo ou um polígono

1. Pressione {{key:C}} para um círculo ou {{key:N}} para um polígono.
2. Para mudar o número de lados, digite-o antes de clicar: `12s` (ou apenas `12`) e {{key:Enter}}. Um círculo começa com 24 lados, e um polígono com 6. A dica mostra o número atual, e o ModelCraft o mantém para o próximo círculo até que você o altere ou troque de ferramenta.
3. Clique no centro, no chão ou em uma face. Para centralizar em uma face, aponte para o meio da face ("Centro da face") ou para o meio de uma das suas arestas ("Ponto médio"), com o ponteiro logo dentro daquela face: o círculo é desenhado sobre essa face, mesmo na extremidade estreita de uma caixa longa.
4. Clique para definir o raio, ou digite-o ({{ui:Raio}} na caixa de valores) e pressione {{key:Enter}}.

Um círculo é um polígono com muitos lados. Quando você puxa um círculo para cima com Empurrar/puxar, seus lados são suavizados, para que o cilindro seja lido como uma única superfície lisa.

## Desenhar um arco

1. Pressione {{key:A}} ({{ui:Arco}}).
2. Clique onde o arco começa e depois onde ele termina (ou digite o comprimento entre eles).
3. Mova o ponteiro para abaular o arco para fora e clique. A dica diz "Semicírculo" quando o abaulamento é metade da distância entre as extremidades. Ou digite quanto o meio se afasta: `2` e {{key:Enter}}.

Para desenhar um arco em torno de um ponto, use {{ui:Arco pelo centro}}: clique no centro, depois onde o arco começa (ou digite o raio), depois onde ele termina (ou digite o ângulo em graus, como `90`). Ele faz snap em passos de 15°.

Um arco iniciado em uma face é desenhado sobre essa face; caso contrário, fica no chão, ou fica em pé quando as suas duas extremidades estão em alturas diferentes. Um arco tem 12 segmentos; digite `24s` enquanto desenha para ter mais. Arcos fecham faces assim como as linhas: um arco que atravessa o canto de um retângulo o divide.

## Desenhar uma curva suave

{{ui:Curva}} desenha uma linha suave que passa por todos os pontos em que você clica: um cabo, o trajeto de um corrimão, a borda de um jardim. Ela pode sair do chão: os pontos fazem snap em cantos, arestas e faces em qualquer lugar, e as teclas de seta travam vermelho, verde ou azul, como em {{ui:Linha}}.

1. Clique em {{ui:Curva}} no grupo {{ui:Desenhar}}.
2. Clique nos pontos por onde a curva passa. Digite `<0,0,1>` e {{key:Enter}} para um ponto 1 acima do último, `[x,y,z]` para um lugar exato, ou um comprimento para um ponto a essa distância em direção ao ponteiro.
3. Pressione {{key:Enter}} ou dê um duplo clique para terminar. Clique no primeiro ponto de novo para fechar a curva. {{key:Backspace}} desfaz o último ponto.

Uma curva é selecionada como uma peça única. Para alterá-la, selecione-a e clique em {{ui:Editar pontos}} em {{ui:Informações da entidade}}: os pontos aparecem como quadrados. Clique em um deles e depois clique onde ele deve ir (ou digite `<dx,dy,dz>`). {{key:Esc}} devolve um ponto à posição anterior e encerra a edição. Uma curva plana fechada forma uma face; uma curva que contorna uma face não pode mais ser editada.

## Deslocar: uma borda dentro ou fora de uma face

{{ui:Deslocar}} copia o contorno de uma face a uma distância definida para dentro dela (ou para fora), para uma moldura, uma borda, um peitoril ou o vidro de uma tela.

1. Pressione {{key:F}} e clique na face, ou selecione a face primeiro e depois pressione {{key:F}}.
2. Mova o ponteiro para dentro da face, para um contorno interno, ou para fora dela, para um externo. O novo contorno acompanha, e a dica mostra a distância.
3. Clique, ou digite a distância e pressione {{key:Enter}}.

A face se divide em duas: a face interna e uma moldura em volta dela (ou um novo anel do lado de fora). Empurre ou puxe qualquer uma das duas imediatamente: para uma tela, desenhe a caixa, puxe-a até a espessura, desloque a face frontal 30 mm para dentro e empurre um pouco a face interna para o vidro. Furos na face também são deslocados, e um arco ou círculo continua sendo uma única curva (menor ou maior).

- **Clique duplo** em uma face com {{ui:Deslocar}} para deslocá-la de novo pela última distância.
- **Arestas:** selecione uma cadeia de arestas conectadas em um mesmo plano (por exemplo, as duas linhas de um L), pressione {{key:F}}, mova para o lado desejado e digite a distância: é desenhada uma cópia paralela, com cantos em meia-esquadria.
- Quando a distância é maior do que a face permite, o ModelCraft informa isso e não desenha nada.

## Arcos, círculos e polígonos são curvas

Clique em qualquer segmento de um arco, de um círculo ou de um polígono e a curva inteira é selecionada. {{ui:Informações da entidade}} então mostra seu raio, seus segmentos, seu ângulo (arcos) e seu comprimento. Digite um novo raio ali para redimensioná-la em torno do centro; as faces desenhadas no seu plano acompanham. Depois que a face de uma curva é empurrada ou puxada, o raio permanece como está.

## Desenhar com linhas

1. Pressione {{key:L}}.
2. Clique onde a linha começa.
3. Clique onde ela termina, ou digite um comprimento e pressione {{key:Enter}}. O comprimento digitado segue a direção que o ponteiro indica.
4. Continue clicando. Cada clique inicia a próxima linha a partir do fim da anterior.
5. Feche o contorno clicando no primeiro ponto de novo. Quando as linhas fecham um laço plano, ele se preenche com uma face e a ferramenta deixa de encadear. Pressione {{key:Esc}} para parar a qualquer momento.

As linhas seguem as direções vermelha, verde e azul quando você se aproxima delas; a linha assume essa cor, e a dica diz "No eixo vermelho". Veja [Inferência e snap](topic:inference) para saber como travar uma direção e fazer snap em pontos.

### Para onde vai uma linha quando não toca em nada

- Uma linha que começa em uma face permanece no plano dessa face.
- Uma linha que começa no chão, ou no espaço vazio, permanece nivelada com o seu ponto inicial. Se você olhar o modelo de lado, ela vai para o plano vertical voltado para você.
- Para desenhar uma linha até um lugar exato, digite um ponto: `[x,y,z]` para um ponto no modelo, ou `<dx,dy,dz>` para um deslocamento a partir do início. Veja [Digitar tamanhos exatos](topic:value-box).

## Dividir uma face

Desenhe uma linha atravessando uma face, de uma aresta a outra (ou de aresta a aresta, passando por outras linhas). A face se divide em duas faces. Cada uma mantém o seu lado e a sua cor. O mesmo vale para um retângulo ou círculo desenhado sobre uma face: a forma se torna uma face própria dentro da maior, que agora tem um furo.

É assim que você planeja os cômodos em uma laje de piso, uma janela em uma parede ou um degrau em uma escada: desenhe o contorno na face e depois empurre ou puxe a nova face.

## Faces voltadas para o lado errado

Toda face tem uma frente e um verso. O verso aparece em cinza-azulado. Faces desenhadas no chão ficam voltadas para cima; faces desenhadas sobre outra face ficam voltadas para o mesmo lado que ela.

Se uma face mostra o verso onde você espera a frente, selecione-a e clique em {{ui:Inverter face}} em {{ui:Informações da entidade}}.

## O que você vê ao desenhar

- Um marcador colorido onde o ponteiro faz snap, e o nome dele na dica no canto inferior esquerdo.
- Uma prévia da linha ou da forma.
- O tamanho ao vivo na caixa de valores. Você pode digitar sobre ele a qualquer momento.

## Se a forma não estiver onde você esperava

- Em uma tela sensível ao toque, veja [Solução de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Se uma linha fizer snap em algo distante, atrás, gire um pouco a vista: pontos escondidos atrás de uma face nunca fazem snap, mas os pontos na sua borda, sim.
- Pressione {{key:Mod+Z}} para desfazer a última forma; cada desfazer remove uma linha ou uma forma.
