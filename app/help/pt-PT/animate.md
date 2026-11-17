---
title: Animar qualquer propriedade, dar-lhe forma com curvas e misturar clips
summary: O espaço de trabalho Animar marca a posição, a rotação e o tamanho de um objeto, o brilho, a abertura e a cor de um candeeiro, a lente e as chaves de forma de uma malha; os esqueletos dobram uma malha com ossos e pesos pintados; a cinemática inversa e as restrições fazem os ossos e os objetos alcançar, olhar, copiar, ficar dentro de limites, pender ou seguir outros; os corpos rígidos caem, empilham-se e colidem e são calculados em chaves; os controladores definem um valor a partir de outros; a vista Curvas da linha de tempo dá forma a cada alteração com pegas de Bézier e ciclos, e a vista Clips guarda as animações como ações que volta a colocar e a misturar.
keywords: física, corpo rígido, corpos rígidos, simulação, simular, cair, gravidade, colidir, colisão, empilhar, ressalto, atrito, calcular, ik, cinemática inversa, restrição, restrições, olhar para, apontar, copiar transformações, copiar posição, copiar rotação, limitar rotação, limites, filho de, pai, seguir trajetória, trajetória, polo, fabrik, cadeia, esqueleto, esqueletos, rig, rigging, ossos, osso, pele, skinning, pesos, pintura de pesos, grupos de vértices, pesos automáticos, pose, modo de pose, quaterniões duplos, interpolação linear, chaves de forma, chave de forma, morph, morphs, alvos de morph, formas de mistura, faciais, expressão, controlador, controladores, expressões, espaço de trabalho animar, animar, animação, quadro-chave, chave, chaves, propriedade, propriedades, transformação, posição, rotação, escala, candeeiro, luz, brilho, cor, lente, campo de visão, fov, editor de gráficos, curvas, curva, bezier, pegas, tangente, interpolação, ciclo, ciclos, repetir, laço, ping pong, deslocamento, folha de chaves, selecionar chaves, seleção por caixa, copiar chaves, colar chaves, esticar chaves, escalar chaves, clips, ações, nla, misturar, mistura, influência, armazenar
from: 16d8e12f
---

A [linha de tempo](topic:animation) move a câmara e os grupos e componentes inteiros. O espaço de trabalho **Animar** marca mais do que isso, e a linha de tempo ganha duas vistas extra para dar forma e reutilizar o que marcou.

## Abrir

Escolha {{ui:Animar}} na lista de espaços de trabalho da barra de ferramentas. A linha de tempo abre por baixo da vista, a barra de ferramentas mostra os grupos de Animar ({{ui:Chaves}}, {{ui:Reproduzir}}, {{ui:Linha de tempo}}) e o painel à direita lista o que pode marcar no cursor de reprodução.

## Criar uma chave para uma propriedade

O painel lista, no cursor de reprodução:

- **Objeto escolhido**: a sua {{ui:Colocar}}, {{ui:Rotação (°)}} e {{ui:Tamanho}}, três números cada. Escreva um número e prima {{key:Enter}}: fica marcado no cursor de reprodução e o objeto move-se para lá. O losango ao lado de uma linha marca o valor tal como está agora; um losango preenchido significa que já existe uma chave no cursor de reprodução.
- **Candeeiros**: o {{ui:Brilho (lm)}}, a {{ui:Abertura (°)}} (candeeiros de foco) e a {{ui:Cor}} de cada um.
- **Câmara**: o {{ui:Ângulo da objetiva (°)}}, para um zoom enquanto a câmara se move.

{{ui:Chave de transformação}} (ou {{key:I}}) marca a posição, a rotação e o tamanho de todos os grupos ou componentes escolhidos de uma vez; {{ui:Chave de câmara}} (ou {{key:K}}) marca a câmara. Com {{ui:Chave automática}} ativa, um grupo cuja posição, rotação e tamanho são marcados assim recebe uma nova chave sempre que o move.

As rotações são três ângulos, em torno de X, depois Y, depois Z. Uma rotação marcada para além de 180° continua no mesmo sentido (190° fica 190°, não −170°), para que uma roda possa dar várias voltas.

:::tip
Um grupo marcado com {{ui:Chave da seleção}} na linha de tempo tem chaves de posicionamento completo. O botão de curva na sua linha transforma-as em curvas de posição, rotação e tamanho (a mesma posição em cada chave), para as poder moldar em {{ui:Curvas}}.
:::

## Chaves de forma (morphs)

Uma **chave de forma** é outra forma da mesma [malha](topic:meshes): um sorriso num rosto, a saliência de uma porta, uma folha dobrada. O seu cursor vai da malha tal como está (0) até essa forma (1); várias chaves somam-se.

1. Escolha uma malha no espaço de trabalho Animar: o painel mostra as suas {{ui:Chaves de forma}}.
2. Clique em {{ui:Acrescentar chave de forma}}. O ModelCraft vai para a [área de trabalho da malha](topic:mesh-edit) com a nova chave em edição: mova pontos, extrudir, esculpir — transforme a malha na forma pretendida.
3. Volte a {{ui:Animar}} e clique em {{ui:Concluir}}. A malha volta a ser como era, e a chave guarda a sua alteração.

Depois arraste o cursor da chave (ou escreva um valor) para a misturar. O losango marca o valor no cursor de reprodução, por isso uma chave pode crescer e desaparecer ao longo do tempo; quando já tem uma faixa, um novo valor é marcado no cursor de reprodução. O lápis volta a editar a forma da chave (a malha mostra-a por completo até {{ui:Concluir}}; {{ui:Cancelar}} deixa a chave como estava), o olho desliga a chave, o balde remove-a.

Um vértice que acrescenta enquanto edita uma chave pertence à própria malha: fica onde o pôs, em todas as formas.

:::note
As chaves de forma movem a malha antes dos seus [modificadores](topic:modifiers): um modificador de Subdivisão suaviza a forma misturada. As imagens e os vídeos renderizados mostram as chaves em cada fotograma.
:::

## Esqueletos: ossos que dobram uma malha

Um **esqueleto** é um conjunto de ossos dentro de uma [malha](topic:meshes). Posicione os ossos e a malha segue-os, cada ponto na medida em que os seus **pesos** indicam.

1. Escolha a malha no espaço de trabalho Animar e clique em {{ui:Acrescentar um esqueleto}} no painel (ou em {{ui:Acrescentar osso}} no grupo {{ui:Rig}}): o primeiro osso atravessa o meio da malha a partir do seu pé.
2. Com um osso escolhido, {{ui:Acrescentar um osso filho}} acrescenta o seguinte a partir da sua ponta. Defina no painel a {{ui:Cabeça}}, a {{ui:Ponta}}, o {{ui:Rolamento (°)}} e de que {{ui:Pendurado em}} cada osso; um osso que pende de outro move-se com ele. Desmarque {{ui:Move a malha}} para um osso que apenas orienta outros.
3. Clique em {{ui:Pesos automáticos}}: cada osso agarra os pontos mais próximos dele, e a influência espalha-se suavemente pela malha, para que os pontos entre dois ossos os partilhem. {{ui:Só os ossos mais próximos}} é uma divisão mais rápida e mais dura.

**Posicione** os ossos com {{ui:Pose}} ({{key:P}}): clique num osso para o escolher, arraste para o rodar em torno do eixo da vista, {{key:Shift}}-arraste para o mover. Ou escreva a sua {{ui:Colocar}}, {{ui:Rotação (°)}} e {{ui:Tamanho}} em {{ui:Pose}}; as rotações são nos eixos próprios do osso, a partir de onde repousa. Os losangos e {{ui:Criar chave para toda a pose}} marcam a pose no cursor de reprodução; depois de um osso ter chaves, posicioná-lo marca-o aí. {{ui:Repor este osso}} e {{ui:Repor a pose}} devolvem os ossos ao repouso.

**Pintar pesos** ({{key:W}}) para o osso escolhido: a malha mostra-se em repouso, cada face colorida pela quantidade que esse osso lhe atribui — vermelho tudo, azul nada. Pinte para acrescentar influência ({{key:Mod}} retira-a, {{key:Shift}} suaviza); {{ui:Tamanho (px)}} e {{ui:Intensidade}} definem o pincel. Com {{ui:Manter a soma dos pesos de cada ponto igual a 1}} ativo, dar mais peso a um osso retira o mesmo aos outros. Cada traço é um passo de anular do modelo.

{{ui:Pele}} define como se move um ponto entre ossos: {{ui:Linear (rápido)}} mistura os movimentos dos ossos e aperta um pouco uma articulação dobrada; {{ui:Quaternião duplo (mantém o volume nas articulações)}} roda o ponto em torno da articulação, para que um cotovelo ou um joelho mantenha a espessura (o {{ui:Tamanho}} de um osso então não estica a pele).

:::note
As chaves de forma vêm primeiro, depois o esqueleto, depois os [modificadores](topic:modifiers). A vista, as imagens e os vídeos mostram todos a malha posicionada; os pesos de uma malha são guardados com ela, e os ossos e a sua pose com a animação.
:::

## Cinemática inversa e restrições

Uma **restrição** move um osso ou um objeto depois das suas chaves, segundo uma regra. Escolha o objeto (ou, num esqueleto, o osso) e acrescente uma em {{ui:Restrições de …}}; várias executam-se pela ordem listada (as setas mudam-na), e cada uma tem {{ui:Quanto}} (0 a 1, marcado com o seu losango como qualquer propriedade) e um interruptor de ligar e desligar.

| Restrição | Para | O que faz |
|---|---|---|
| {{ui:Alcançar (IK)}} | Ossos | O osso e os ossos de que pende ({{ui:Ossos na cadeia}}) dobram-se para que a sua ponta alcance o alvo. Com dois ossos e um {{ui:Polo (a dobra aponta para ele)}}, o cotovelo ou o joelho aponta para o polo; cadeias mais longas dobram-se suavemente. Fora de alcance, a cadeia aponta diretamente para o alvo. |
| {{ui:Olhar para}} | Ambos | Roda para que o {{ui:Eixo que aponta}} fique virado para o alvo, mantendo o {{ui:Eixo mantido para cima}} o mais próximo possível do alto. |
| {{ui:Copiar transformações}} | Ambos | Toma a posição, a rotação ou o tamanho do alvo — os que estiverem assinalados. |
| {{ui:Limites}} | Ambos | Mantém a sua própria posição, rotação (graus) ou tamanho entre um {{ui:mín.}} e um {{ui:máx.}} por eixo; deixe um par vazio para deixar esse eixo livre. |
| {{ui:Filho de}} | Ambos | Move-se com o alvo como se pendesse dele, a partir de onde ambos estavam quando escolheu o alvo. |
| {{ui:Seguir trajetória}} | Objetos | Assenta numa [curva](topic:curves) em {{ui:Ao longo da curva}} (0 é o início, 1 o fim; marque-o para percorrer), e com {{ui:Rodar ao longo da curva}} fica virado ao longo dela. |

Um alvo é outro objeto no grupo aberto, um osso do mesmo esqueleto, ou {{ui:Um ponto}} que escreve (o ponto de um objeto está nas coordenadas do modelo, o de um osso nas da sua malha). Para uma perna IK, coloque o alvo onde deve estar o pé e marque o alvo, ou marque {{ui:Quanto}} para passar a perna entre as chaves e a IK.

:::tip
Um objeto que olha para outro que segue uma trajetória vê-o na trajetória: o ModelCraft calcula primeiro os alvos, seja qual for a ordem dos objetos.
:::

## Física: cair, empilhar e colidir

Deixe os objetos cair e bater uns nos outros, e depois guarde o resultado como chaves.

1. Escolha um grupo, componente ou malha e defina o seu {{ui:Corpo rígido}} em {{ui:Física}}: {{ui:Cai e colide}} (move-se) ou {{ui:Fica parado, é um obstáculo}} (uma mesa, uma parede, uma rampa). Dê a um objeto que cai a sua {{ui:Forma}} — {{ui:Caixa (os seus limites)}} ou {{ui:Bola (à volta dos seus limites)}} —, a sua {{ui:Massa (kg)}}, o {{ui:Atrito}} e o {{ui:Ressalto}} (0 bate sem saltar, 1 volta a subir até à mesma altura).
2. Em {{ui:O modelo inteiro}}, defina {{ui:De (s)}} e {{ui:Até (s)}}, a {{ui:Gravidade (m/s², para baixo)}} e se existe {{ui:Um chão onde aterrar}} (e a sua altura).
3. Clique em {{ui:Calcular física}} (no painel ou no grupo {{ui:Física}}). Cada objeto que cai recebe uma chave de posição, rotação e tamanho em cada fotograma entre os dois tempos; reproduza-a como qualquer animação.

Voltar a calcular substitui essas chaves; {{ui:Remover chaves calculadas}} retira-as. Os objetos começam em repouso, onde as suas chaves, curvas e restrições os põem em {{ui:De (s)}} (um movimento marcado antes disso não continua na queda). Mais {{ui:Passos por imagem}} mantém as pilhas altas mais estáveis; a barra de estado indica quando algo ainda se move no fim.

:::note
As formas são caixas e bolas à volta dos limites de cada objeto; uma caixa toca com os seus cantos, pontos médios de arestas e centros de faces, por isso as caixas empilham-se e tombam como seria de esperar. Tecido, fluidos, articulações entre objetos e formas exatas ainda não estão implementados.
:::

## Controladores

Um **controlador** define uma chave de forma a partir de outras coisas, em vez de à mão: abra o controlador de uma chave (o botão da calculadora), escreva uma **expressão** e indique a cada nome nela o que lê ({{ui:Lê}}): o tempo em segundos, o fotograma, a posição, a rotação ou o tamanho de um posicionamento ao longo de X, Y ou Z, o brilho de um candeeiro, ou outra chave de forma. Por exemplo, com `v` a ler a rotação de uma porta em torno de Z, `clamp(v / 90, 0, 1)` abre uma forma à medida que a porta se abre.

As expressões usam números, os nomes, `+ - * / % ^` e parênteses, e as funções `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg`, com `pi` e `e`. Um erro é assinalado e não altera nada. O cursor de uma chave controlada mostra o valor do controlador; o controlador prevalece sobre a faixa da chave até o remover.

## Escolher e alterar chaves (vista Chaves)

{{ui:Chaves}} mostra uma linha por faixa: a câmara, cada grupo em movimento e cada propriedade ("Candeeiro 2 · Brilho (lm)"; as chaves de propriedades são redondas).

- Clique numa chave para a escolher; {{key:Shift}}-clique ou {{key:Mod}}-clique acrescenta ou retira chaves da escolha. {{key:Shift}}-arraste sobre as linhas desenha uma caixa que acrescenta todas as chaves nela.
- Arraste uma chave escolhida para mover todas; {{key:Left}} / {{key:Right}} movem-nas um fotograma ({{key:Shift}}: dez).
- {{key:Mod+C}} copia as chaves escolhidas, {{key:Mod+V}} cola-as a partir do cursor de reprodução nas mesmas faixas (outro separador do ModelCraft também as pode colar).
- {{ui:Estiramento}} espalha as chaves escolhidas a partir do cursor pelo número ao lado (2 = o dobro da distância; 0.5 aproxima-as).
- A lista de transição define como cada chave escolhida avança.

## Moldar as curvas (vista Curvas)

{{ui:Curvas}} é um gráfico de cada número ao longo do tempo: tempo na horizontal, valor na vertical. Assinale as curvas a mostrar na lista à esquerda (X, Y e Z são vermelho, verde e azul).

- Clique numa chave (um quadrado) para a escolher, {{key:Shift}}-clique para mais, ou arraste uma caixa. Arraste uma chave escolhida para alterar o seu tempo e valor; com várias escolhidas, arrastar move-as no tempo.
- Uma chave escolhida mostra as suas duas **pegas**. Arraste uma para moldar a curva desse lado. {{ui:Pegas}} indica como se comportam: {{ui:Automáticas}} (uma curva suave pelas chaves à volta), {{ui:Apontadas para a chave seguinte}}, {{ui:Alinhadas}} (as duas ficam numa reta, por isso a curva não tem canto) ou {{ui:Livre}}.
- {{ui:A partir das chaves escolhidas}} define como cada chave escolhida avança para a seguinte: {{ui:Curva (pegas)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Entrada e saída lentas}} ou {{ui:Manter}}.
- {{ui:Antes}} e {{ui:Depois}} definem o que a curva faz fora das suas chaves: {{ui:Manter}} (fica no primeiro ou no último valor), {{ui:Repetir}}, {{ui:Para trás e para a frente}} ou {{ui:Repetir e continuar}} (cada repetição começa onde a anterior acabou: uma roda continua a rolar, um andarilho continua a andar).
- A roda faz zoom ({{key:Mod}}: só valores; {{key:Shift}}: só tempo); arraste com o botão do meio ou com {{key:Alt}} para deslocar a vista; {{ui:Mostrar tudo}} ou {{key:Home}} ajusta todas as curvas visíveis. Clique num espaço vazio para mover o cursor de reprodução para lá. {{key:Delete}} elimina as chaves escolhidas.

As pegas não se deixam cruzar no tempo, por isso uma curva nunca retrocede.

## Reutilizar animações (vista Clips)

Um **clip** reproduz uma animação guardada (uma **ação**) na linha de tempo. Os clips misturam-se por ordem, as linhas de baixo sobre as de cima; as faixas da própria linha de tempo ficam por cima de todos os clips.

1. Marque as chaves dos grupos e candeeiros como habitualmente, depois clique em {{ui:Criar um clip}} em {{ui:Clips}} e dê um nome à ação. As faixas passam a ser a ação, e um clip reproduz-na onde estavam (a câmara fica na linha de tempo).
2. Para a usar outra vez, escolha a ação e clique em {{ui:Acrescentar clip}}: um novo clip começa no cursor de reprodução.
3. Arraste um clip ao longo da sua linha para o mover; clique nele para definir {{ui:Início (s)}}, {{ui:Velocidade}} (2 = o dobro da rapidez), {{ui:Repetições}}, {{ui:Quanto}} (0 a 1), {{ui:Mistura}} ({{ui:Substituir}}, ou {{ui:Somar por cima}} dos clips anteriores), {{ui:Fora do clip}} (nada, manter o fim, ou manter os dois extremos) e {{ui:Silenciar}}. As setas mudam a ordem; o balde remove-o (uma ação que nenhum clip usa deixa de existir com ele).

Um clip com menos do que o {{ui:Quanto}} total mistura-se com o que está por baixo: o clip anterior, ou o candeeiro ou o posicionamento tal como estão sem a animação.

## O que reproduz onde

| O quê | Na vista | Num vídeo renderizado |
|---|---|---|
| Chaves da câmara, ângulo da lente com chaves da câmara | Sim | Sim |
| Posição, rotação e tamanho (chaves, curvas, clips) | Sim | Sim |
| Brilho, abertura e cor dos candeeiros | Sim | Ainda não: o vídeo usa os candeeiros tal como estão quando começa (ver [o que ainda não está implementado](topic:not-built-yet)) |
| Ângulo da lente sem chaves da câmara | Sim | Ainda não: marque também a câmara |
| Chaves de forma e controladores | Sim | Sim |
| Esqueletos (malhas posicionadas) | Sim | Sim |
| Cinemática inversa e restrições | Sim | Sim |
| Física calculada (chaves) | Sim | Sim |

Tudo é guardado no ficheiro `.modelcraft` com o resto da animação, e {{ui:Anular}} e {{ui:Refazer}} da linha de tempo desfazem qualquer uma destas alterações.
