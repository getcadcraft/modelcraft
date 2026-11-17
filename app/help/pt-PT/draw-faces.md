---
title: Desenhar faces com linhas, retângulos, círculos e arcos
summary: Criar faces planas no chão ou sobre outras faces, dividi-las com linhas, e desenhar círculos e polígonos com o número de lados que quiser.
keywords: desenhar, linha, retângulo, círculo, polígono, offset, recuo, moldura, contorno, arco, curva, spline, suave, cabo, percurso, abaulamento, raio, curva, face, planta, pegada, dividir, lados, segmentos, contorno, lápis
from: b6d7b7dd
---

Tudo no ModelCraft começa como uma **face** plana: uma superfície fechada por arestas. Pode desenhar uma face diretamente com {{ui:Rectangle}}, {{ui:Circle}} ou {{ui:Polygon}}, ou traçar o contorno de uma aresta de cada vez com {{ui:Line}}. As faces são o que o [Empurrar/puxar](topic:push-pull) transforma em sólidos.

## Desenhar um retângulo

1. Prima {{key:R}}.
2. Clique no primeiro canto: no chão, ou em qualquer face do modelo.
3. Mova o cursor. O retângulo fica no chão (ou na face onde começou), e a caixa de valor ({{ui:Dimensions}}) mostra a largura e a profundidade. A sugestão diz «Quadrado» quando os lados são iguais.

   Para desenhar noutro plano, aponte para ele: uma face que passa pelo primeiro canto coloca o retângulo nessa face, e fazer snap a um ponto fora do plano (uma extremidade, uma aresta, o eixo azul) põe o retângulo de pé através dos dois cantos. Volte a fazer snap a um ponto do primeiro plano e ele deita-se de novo. Para manter um plano, prima uma tecla de seta: {{key:Up}} mantém o retângulo nivelado (o plano azul), {{key:Right}} no plano vermelho, {{key:Left}} no plano verde. Volte a premir a mesma tecla para desbloquear.
4. Clique no canto oposto, ou escreva as duas medidas separadas por uma vírgula e prima {{key:Enter}}: `4m,3m`, `4000,3000` num modelo em milímetros, ou `12',10'6"` em pés e polegadas.

   Aparece uma face com quatro arestas à volta.

As medidas escritas seguem a direção para onde o cursor estava a apontar: se o cursor estiver à esquerda do primeiro canto quando escrever, o retângulo cresce para a esquerda.

:::warning
A vírgula separa as duas medidas, por isso não pode ser o separador decimal. Escreva `2.5m,3m`, nunca `2,5m`.
:::

## Desenhar um círculo ou um polígono

1. Prima {{key:C}} para um círculo ou {{key:N}} para um polígono.
2. Para alterar o número de lados, escreva-o antes de clicar: `12s` (ou apenas `12`) e prima {{key:Enter}}. Um círculo começa com 24 lados e um polígono com 6. A sugestão mostra o número atual, e o ModelCraft mantém-no para o círculo seguinte até o alterar ou mudar de ferramenta.
3. Clique no centro, no chão ou numa face. Para o centrar numa face, aponte para o meio da face («Centro da face») ou para o meio de uma das suas arestas («Ponto médio») com o cursor logo dentro dessa face: o círculo é desenhado nessa face, mesmo na extremidade estreita de uma caixa comprida.
4. Clique para definir o raio, ou escreva-o ({{ui:Radius}} na caixa de valor) e prima {{key:Enter}}.

Um círculo é um polígono com muitos lados. Ao puxar um círculo para cima com Empurrar/puxar, os seus lados são suavizados para que o cilindro se leia como uma só superfície lisa.

## Desenhar um arco

1. Prima {{key:A}} ({{ui:Arc}}).
2. Clique onde o arco começa e depois onde termina (ou escreva o comprimento entre eles).
3. Mova o cursor para afastar o arco, e clique. A sugestão diz «Meio círculo» quando a curvatura é metade da distância entre os extremos. Ou escreva a distância a que o meio se afasta: `2` e prima {{key:Enter}}.

Para desenhar um arco à volta de um ponto, use {{ui:Arc center}}: clique no centro, depois onde o arco começa (ou escreva o raio), e depois onde termina (ou escreva o ângulo em graus, como `90`). Encaixa-se em passos de 15°.

Um arco iniciado numa face é desenhado nessa face; caso contrário fica no chão, ou fica de pé quando os seus dois extremos estão a alturas diferentes. Um arco tem 12 segmentos; escreva `24s` enquanto desenha para mais. Os arcos fecham faces da mesma forma que as linhas: um arco que atravessa o canto de um retângulo divide-o.

## Desenhar uma curva suave

{{ui:Curve}} desenha uma linha suave que passa por cada ponto em que clicar: um cabo, o percurso de um corrimão, a orla de um jardim. Pode sair do chão: os pontos fazem snap a cantos, arestas e faces em qualquer lugar, e as teclas de seta bloqueiam o vermelho, o verde ou o azul, como com {{ui:Line}}.

1. Clique em {{ui:Curve}} no grupo {{ui:Draw}}.
2. Clique nos pontos por onde a curva passa. Escreva `<0,0,1>` e prima {{key:Enter}} para um ponto 1 acima do último, `[x,y,z]` para um lugar exato, ou um comprimento para um ponto a essa distância na direção do cursor.
3. Prima {{key:Enter}} ou faça duplo clique para terminar. Clique de novo no primeiro ponto para fechar a curva. {{key:Backspace}} retira o último ponto.

Uma curva seleciona-se como uma só peça. Para a alterar, selecione-a e clique em {{ui:Edit points}} em {{ui:Entity info}}: os seus pontos mostram-se como quadrados. Clique num, depois clique onde deve ir (ou escreva `<dx,dy,dz>`). {{key:Esc}} repõe o ponto, e termina a edição. Uma curva plana fechada faz uma face; uma curva que contorna uma face já não pode ser editada.

## Offset: uma moldura dentro ou fora de uma face

{{ui:Offset}} copia o contorno de uma face para dentro (ou para fora) a uma distância definida, para uma moldura, um peitoril ou o vidro de um ecrã.

1. Prima {{key:F}} e clique na face, ou selecione primeiro a face e depois prima {{key:F}}.
2. Mova o cursor para dentro da face para um contorno interior, ou para fora dela para um exterior. O novo contorno acompanha, e a sugestão diz a distância.
3. Clique, ou escreva a distância e prima {{key:Enter}}.

A face divide-se em duas: a face interior e uma moldura à volta dela (ou um novo anel no exterior). Empurre ou puxe qualquer uma das duas imediatamente: para um ecrã, desenhe a caixa, puxe-a até à espessura pretendida, faça um offset da face da frente em 30 mm para dentro e empurre ligeiramente a face interior para dentro, para o vidro. Os furos na face também sofrem offset, e um arco ou um círculo continua a ser uma só curva (menor ou maior).

- **Duplo clique** numa face com {{ui:Offset}} para fazer o offset à última distância de novo.
- **Arestas:** selecione uma cadeia de arestas ligadas num mesmo plano (por exemplo, as duas linhas de um L), prima {{key:F}}, mova para o lado pretendido e escreva a distância: é desenhada uma cópia paralela, com cantos em meia-esquadria.
- Quando a distância é maior do que a face permite, o ModelCraft indica-o e não desenha nada.

## Arcos, círculos e polígonos são curvas

Clique em qualquer segmento de um arco, de um círculo ou de um polígono e a curva inteira fica selecionada. {{ui:Entity info}} mostra então o seu raio, os seus segmentos, o seu ângulo (arcos) e o seu comprimento. Escreva ali um novo raio para o redimensionar a partir do centro; as faces desenhadas no seu plano acompanham. Depois de a face de uma curva ter sido empurrada ou puxada, o seu raio mantém-se como está.

## Desenhar com linhas

1. Prima {{key:L}}.
2. Clique onde a linha começa.
3. Clique onde termina, ou escreva um comprimento e prima {{key:Enter}}. O comprimento escrito segue a direção que o cursor mostra.
4. Continue a clicar. Cada clique começa a linha seguinte a partir do fim da anterior.
5. Feche o contorno clicando de novo no primeiro ponto. Quando as linhas fecham um circuito plano, este enche-se com uma face e a ferramenta deixa de encadear. Prima {{key:Esc}} para parar a qualquer momento.

As linhas seguem as direções vermelha, verde e azul quando se aproxima delas; a linha fica dessa cor e a sugestão diz «No eixo vermelho». Veja [Inferência e snap](topic:inference) para saber como bloquear uma direção e fazer snap a pontos.

### Para onde vai uma linha quando não toca em nada

- Uma linha que começa numa face fica no plano dessa face.
- Uma linha que começa no chão, ou no espaço vazio, fica nivelada com o seu ponto de início. Se olhar para o modelo de perfil, passa a seguir o plano vertical virado para si.
- Para desenhar uma linha até um lugar exato, escreva um ponto: `[x,y,z]` para um ponto no modelo, ou `<dx,dy,dz>` para um deslocamento a partir do início. Veja [Escrever medidas exatas](topic:value-box).

## Dividir uma face

Desenhe uma linha a atravessar uma face, de uma aresta a outra (ou de aresta a aresta passando por outras linhas). A face divide-se em duas faces. Cada uma mantém o seu lado e a sua cor. O mesmo acontece com um retângulo ou um círculo desenhado sobre uma face: a forma torna-se a sua própria face dentro da maior, que passa a ter um furo.

É assim que se marcam os compartimentos numa laje de piso, uma janela numa parede ou um degrau numa escada: desenhe o contorno na face e depois empurre ou puxe a nova face.

## Faces viradas para o lado errado

Cada face tem uma frente e um verso. O verso aparece em azul-acinzentado. As faces desenhadas no chão ficam voltadas para cima; as faces desenhadas sobre outra face ficam voltadas do mesmo lado que ela.

Se uma face mostrar o verso onde espera a frente, selecione-a e clique em {{ui:Reverse face}} em {{ui:Entity info}}.

## O que vê ao desenhar

- Um marcador colorido onde o cursor faz snap, e o seu nome na sugestão, no canto inferior esquerdo.
- Uma pré-visualização da linha ou da forma.
- O tamanho ao vivo na caixa de valor. Pode escrever por cima dele a qualquer momento.

## Se a forma não estiver onde esperava

- Num ecrã tátil, veja [Resolução de problemas](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Se uma linha fizer snap a algo muito atrás, rode um pouco a vista: os pontos escondidos atrás de uma face nunca fazem snap, mas os pontos na sua aresta fazem.
- Prima {{key:Mod+Z}} para anular a última forma; uma anulação remove uma linha ou uma forma.
