---
title: Animar qualquer propriedade, moldá-la em curvas e misturar clipes
summary: A área de trabalho Animar cria chaves para a posição, o giro e o tamanho de um objeto, o brilho, a abertura e a cor de uma luz, a lente e as chaves de forma de uma malha; armaduras dobram uma malha com ossos e pesos pintados; IK e restrições fazem ossos e objetos alcançar, olhar, copiar, ficar dentro de limites, pendurar-se ou seguir outros; corpos rígidos caem, empilham-se e colidem e são gerados como chaves; acionadores definem um valor a partir de outros; a exibição Curvas da linha do tempo molda cada alteração com alças de Bézier e ciclos, e a exibição Clipes salva animações como ações que você posiciona de novo e mistura.
keywords: física, corpo rígido, corpos rígidos, simulação, simular, cair, queda, gravidade, colidir, colisão, empilhar, quicar, atrito, gerar, gerado, ik, cinemática inversa, restrição, restrições, olhar para, rastrear, mirar, copiar transformações, copiar posição, copiar rotação, limitar rotação, limites, filho de, pai, seguir caminho, caminho, polo, fabrik, cadeia, armadura, armaduras, rig, rigging, ossos, osso, esqueleto, pele, skinning, pesos, pintura de pesos, grupos de vértices, pesos automáticos, pose, modo pose, quatérnio duplo, mistura linear, chaves de forma, chave de forma, morfe, morfes, alvos de morfe, formas de mistura, facial, expressão, acionador, acionadores, expressões, área de trabalho animar, animar, animação, quadro-chave, chave, chaves, propriedade, propriedades, transformação, posição, rotação, escala, luz, brilho, cor, lente, campo de visão, fov, editor de gráfico, curvas, curva, bézier, alças, tangente, interpolação, ciclo, ciclos, repetir, laço, vai e volta, deslocamento, planilha de quadros, selecionar chaves, seleção por caixa, copiar chaves, colar chaves, esticar chaves, escalar chaves, clipes, ações, nla, mixagem, mistura, influência, stash
from: 16d8e12f
---

A [linha do tempo](topic:animation) move a câmera e grupos e componentes inteiros. A área de trabalho **Animar** cria chaves para mais do que isso, e a linha do tempo ganha duas outras exibições para moldar e reutilizar o que você criou com chaves.

## Abrir

Escolha {{ui:Animar}} na lista de áreas de trabalho da barra de ferramentas. A linha do tempo abre sob a vista, a barra de ferramentas mostra os grupos de Animar ({{ui:Chaves}}, {{ui:Reproduzir}}, {{ui:Linha do tempo}}) e o painel à direita lista o que você pode criar com chave no cabeçote de reprodução.

## Criar chave para uma propriedade

O painel lista, no cabeçote de reprodução:

- **Objeto escolhido**: sua {{ui:Inserir}}, {{ui:Giro (°)}} e {{ui:Tamanho}}, três números cada. Digite um número e pressione {{key:Enter}}: ele recebe uma chave no cabeçote de reprodução e o objeto se move até lá. O losango ao lado de uma linha cria uma chave com o valor atual; um losango preenchido indica que já existe uma chave no cabeçote de reprodução.
- **Luzes**: o {{ui:Brilho (lm)}}, a {{ui:Abertura (°)}} (luzes de spot) e a {{ui:Cor}} de cada luz.
- **Câmera**: o {{ui:Ângulo da lente (°)}}, para um zoom enquanto a câmera se move.

{{ui:Chave de transformação}} (ou {{key:I}}) cria chave para a posição, o giro e o tamanho de todos os grupos ou componentes escolhidos de uma vez; {{ui:Chave da câmera}} (ou {{key:K}}) cria chave para a câmera. Com {{ui:Chave automática}} ativada, um grupo cuja posição, giro e tamanho recebem chave dessa forma ganha uma nova chave sempre que você o move.

Os giros são três ângulos, em torno de X, depois Y, depois Z. Um giro com chave acima de 180° continua no mesmo sentido (190° continua 190°, não −170°), então uma roda pode girar várias vezes.

:::tip
Um grupo com chave criada por {{ui:Chave da seleção}} na linha do tempo tem chaves de posicionamento inteiro. O botão de curva na linha dele as transforma em curvas de posição, giro e tamanho (o mesmo posicionamento em cada chave), para você moldá-las em {{ui:Curvas}}.
:::

## Chaves de forma (morfes)

Uma **chave de forma** é outra forma da mesma [malha](topic:meshes): um sorriso em um rosto, a curvatura de uma porta, uma folha dobrada. Seu controle deslizante mistura da malha como está (0) até essa forma (1); várias chaves se somam.

1. Escolha uma malha na área de trabalho Animar: o painel mostra suas {{ui:Chaves de forma}}.
2. Clique em {{ui:Adicionar chave de forma}}. O ModelCraft vai para a [área de trabalho Malha](topic:mesh-edit) com a nova chave em edição: mova pontos, extrudar, esculpir — transforme a malha na forma desejada.
3. Volte para {{ui:Animar}} e clique em {{ui:Concluir}}. A malha volta ao que era, e a chave guarda sua alteração.

Depois, arraste o controle deslizante da chave (ou digite um valor) para misturá-la. O losango cria chave para o valor no cabeçote de reprodução, então uma chave pode crescer e desaparecer com o tempo; quando ela já tem uma trilha, um novo valor recebe chave no cabeçote de reprodução. O lápis edita de novo a forma da chave (a malha a mostra por completo até {{ui:Concluir}}; {{ui:Cancelar}} deixa a chave como estava), o olho desliga a chave, a lixeira a remove.

Um vértice que você adiciona ao editar uma chave pertence à própria malha: ele fica onde você o colocou, em todas as formas.

:::note
As chaves de forma movem a malha antes de seus [modificadores](topic:modifiers): um modificador de Subdivisão suaviza a forma misturada. Imagens e vídeos renderizados mostram as chaves em cada quadro.
:::

## Armaduras: ossos que dobram uma malha

Uma **armadura** é um conjunto de ossos dentro de uma [malha](topic:meshes). Posicione os ossos e a malha os acompanha, cada ponto na medida que seus **pesos** indicam.

1. Escolha a malha na área de trabalho Animar e clique em {{ui:Adicionar armadura}} no painel (ou em {{ui:Adicionar osso}} no grupo {{ui:Rig}}): o primeiro osso sobe pelo meio da malha a partir da base.
2. Com um osso escolhido, {{ui:Adicionar osso filho}} adiciona o próximo a partir da ponta dele. Defina a {{ui:Cabeça}}, a {{ui:Ponta}}, a {{ui:Rolagem (°)}} de qualquer osso e a que ele {{ui:Pendurado em}} no painel; um osso pendurado em outro se move com ele. Desmarque {{ui:Move a malha}} para um osso que apenas guia outros.
3. Clique em {{ui:Pesos automáticos}}: cada osso assume os pontos mais próximos dele, e essa influência se espalha suavemente pela malha, então os pontos entre dois ossos a dividem. {{ui:Só os ossos mais próximos}} é uma divisão mais rápida e mais rígida.

**Posicione** os ossos com {{ui:Pose}} ({{key:P}}): clique em um osso para escolhê-lo, arraste para girá-lo em torno do eixo da vista, {{key:Shift}}-arraste para movê-lo. Ou digite sua {{ui:Inserir}}, {{ui:Giro (°)}} e {{ui:Tamanho}} em {{ui:Pose}}; os giros são nos eixos próprios do osso, a partir de onde ele está em repouso. Os losangos e {{ui:Criar chave da pose inteira}} criam chave para a pose no cabeçote de reprodução; quando um osso já tem chaves, posicioná-lo cria chave ali. {{ui:Redefinir este osso}} e {{ui:Redefinir a pose}} devolvem os ossos ao repouso.

**Pintar pesos** ({{key:W}}) para o osso escolhido: a malha aparece em repouso, cada face colorida conforme a influência daquele osso — vermelho total, azul nenhuma. Pinte para adicionar influência ({{key:Mod}} a retira, {{key:Shift}} suaviza); {{ui:Tamanho (px)}} e {{ui:Intensidade}} definem o pincel. Com {{ui:Manter a soma dos pesos de cada ponto igual a 1}} ativado, dar mais peso a um osso tira a mesma quantia dos outros. Cada traço é uma etapa do desfazer do modelo.

{{ui:Pele}} escolhe como um ponto entre ossos se move: {{ui:Linear (rápida)}} mistura os movimentos dos ossos e aperta um pouco uma articulação dobrada; {{ui:Quatérnio duplo (mantém o volume nas articulações)}} gira o ponto em torno da articulação, então um cotovelo ou um joelho mantém a espessura (o {{ui:Tamanho}} de um osso então não estica a pele).

:::note
As chaves de forma vêm primeiro, depois a armadura, depois os [modificadores](topic:modifiers). A vista, as imagens e os vídeos mostram a malha posicionada; os pesos de uma malha são salvos com ela, e os ossos e a pose com a animação.
:::

## IK e restrições

Uma **restrição** move um osso ou um objeto depois de suas chaves, segundo uma regra. Escolha o objeto (ou, em uma armadura, o osso) e adicione uma em {{ui:Restrições de …}}; várias são executadas na ordem listada (as setas mudam a ordem), e cada uma tem {{ui:Quanto}} (0 a 1, com chave pelo losango como qualquer propriedade) e uma chave liga/desliga.

| Restrição | Para | O que faz |
|---|---|---|
| {{ui:Alcançar (IK)}} | Ossos | O osso e os ossos em que ele está pendurado ({{ui:Ossos na cadeia}}) se dobram para que sua ponta alcance o alvo. Com dois ossos e um {{ui:Polo (a dobra aponta para ele)}}, o cotovelo ou o joelho aponta para o polo; cadeias mais longas se dobram suavemente. Fora do alcance, a cadeia aponta reta para o alvo. |
| {{ui:Olhar para}} | Ambos | Gira para que o {{ui:Eixo que aponta}} fique voltado para o alvo, mantendo o {{ui:Eixo mantido para cima}} o mais próximo possível do alto. |
| {{ui:Copiar transformações}} | Ambos | Assume a posição, o giro ou o tamanho do alvo — os marcados. |
| {{ui:Limites}} | Ambos | Mantém a própria posição, giro (graus) ou tamanho entre um {{ui:mín.}} e um {{ui:máx.}} por eixo; deixe um par vazio para deixar aquele eixo livre. |
| {{ui:Filho de}} | Ambos | Move-se com o alvo como se estivesse pendurado nele, a partir de onde os dois estavam quando você escolheu o alvo. |
| {{ui:Seguir caminho}} | Objetos | Fica sobre um [objeto de curva](topic:curves) em {{ui:Ao longo da curva}} (0 o início, 1 o fim; crie chave para que ele percorra) e, com {{ui:Girar ao longo da curva}}, fica voltado ao longo dela. |

Um alvo é outro objeto do grupo aberto, um osso da mesma armadura ou {{ui:Um ponto}} que você digita (o ponto de um objeto está nas coordenadas do modelo; o de um osso, nas da sua malha). Para uma perna IK, coloque o alvo onde o pé deve ficar e crie chave para o alvo, ou crie chave para {{ui:Quanto}} para passar a perna entre as chaves e o IK.

:::tip
Um objeto que olha para outro que segue um caminho o vê sobre o caminho: o ModelCraft calcula os alvos primeiro, qualquer que seja a ordem dos objetos.
:::

## Física: cair, empilhar e colidir

Deixe objetos caírem e baterem uns nos outros, depois mantenha o resultado como chaves.

1. Escolha um grupo, componente ou malha e defina seu {{ui:Corpo rígido}} em {{ui:Física}}: {{ui:Cai e colide}} (ele se move) ou {{ui:Fica parado, atrapalha}} (uma mesa, uma parede, uma rampa). Dê a um objeto que cai sua {{ui:Forma}} — {{ui:Caixa (seus limites)}} ou {{ui:Bola (em torno dos seus limites)}} —, sua {{ui:Massa (kg)}}, {{ui:Atrito}} e {{ui:Quique}} (0 faz um baque surdo, 1 quica de volta até a mesma altura).
2. Em {{ui:O modelo inteiro}}, defina {{ui:De (s)}} e {{ui:Até (s)}}, a {{ui:Gravidade (m/s², para baixo)}} e se há {{ui:Um chão para pousar}} (e sua altura).
3. Clique em {{ui:Gerar física}} (no painel ou no grupo {{ui:Física}}). Cada objeto que cai recebe uma chave de posição, giro e tamanho em cada quadro entre os dois tempos; reproduza como qualquer animação.

Gerar de novo substitui essas chaves; {{ui:Remover chaves geradas}} as retira. Os objetos começam em repouso, onde suas chaves, curvas e restrições os colocam em {{ui:De (s)}} (um movimento com chave antes disso não continua na queda). Mais {{ui:Passos por quadro}} deixa pilhas altas mais estáveis; a barra de status informa quando algo ainda está se movendo no fim.

:::note
As formas são caixas e bolas em torno dos limites de cada objeto; uma caixa toca com seus cantos, pontos médios das arestas e pontos médios das faces, então caixas empilham e tombam como você esperaria. Tecido, fluidos, juntas entre objetos e formas exatas ainda não estão implementados.
:::

## Acionadores

Um **acionador** define uma chave de forma a partir de outras coisas, em vez de à mão: abra o acionador de uma chave (o botão da calculadora), escreva uma **expressão** e dê a cada nome nela o que ele lê ({{ui:Lê}}): o tempo em segundos, o quadro, a posição, o giro ou o tamanho de um posicionamento ao longo de X, Y ou Z, o brilho de uma luz ou outra chave de forma. Por exemplo, com `v` lendo o giro de uma porta em torno de Z, `clamp(v / 90, 0, 1)` abre uma forma conforme a porta abre.

As expressões usam números, os nomes, `+ - * / % ^` e parênteses, e as funções `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` com `pi` e `e`. Um erro é apontado e não altera nada. O controle deslizante de uma chave acionada mostra o valor do acionador; o acionador prevalece sobre a trilha da chave até você removê-lo.

## Escolher e alterar chaves (exibição Chaves)

{{ui:Chaves}} mostra uma linha por trilha: a câmera, cada grupo que se move e cada propriedade ("Luz 2 · Brilho (lm)"; as chaves de propriedade são redondas).

- Clique em uma chave para escolhê-la; {{key:Shift}}-clique ou {{key:Mod}}-clique adiciona ou remove chaves da escolha. {{key:Shift}}-arraste sobre as linhas desenha uma caixa que adiciona todas as chaves nela.
- Arraste uma chave escolhida para mover todas; {{key:Left}} / {{key:Right}} as movem um quadro ({{key:Shift}}: dez).
- {{key:Mod+C}} copia as chaves escolhidas; {{key:Mod+V}} as cola a partir do cabeçote de reprodução nas mesmas trilhas (outra aba do ModelCraft também pode colá-las).
- {{ui:Esticamento}} espalha as chaves escolhidas a partir do cabeçote de reprodução pelo número ao lado (2 = o dobro de distância; 0.5 as aproxima).
- A lista de suavização define como cada chave escolhida segue adiante.

## Moldar as curvas (exibição Curvas)

{{ui:Curvas}} é um gráfico de cada número ao longo do tempo: tempo na horizontal, valor na vertical. Marque as curvas a mostrar na lista à esquerda (X, Y e Z são vermelho, verde e azul).

- Clique em uma chave (um quadrado) para escolhê-la, {{key:Shift}}-clique para escolher mais, ou arraste uma caixa. Arraste uma chave escolhida para alterar seu tempo e valor; com várias escolhidas, arrastar as move no tempo.
- Uma chave escolhida mostra suas duas **alças**. Arraste uma para moldar a curva naquele lado. {{ui:Alças}} define como elas se comportam: {{ui:Automáticas}} (uma curva suave passando pelas chaves ao redor), {{ui:Apontando para a próxima chave}}, {{ui:Alinhadas}} (as duas ficam em linha reta, então a curva não tem quina) ou {{ui:Livre}}.
- {{ui:A partir das chaves escolhidas}} define como cada chave escolhida segue até a próxima: {{ui:Curva (alças)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Entrada e saída lentas}} ou {{ui:Manter}}.
- {{ui:Antes}} e {{ui:Depois}} definem o que a curva faz fora de suas chaves: {{ui:Manter}} (fica no primeiro ou último valor), {{ui:Repetir}}, {{ui:Vai e volta}} ou {{ui:Repetir e continuar}} (cada repetição começa onde a anterior terminou: uma roda continua rolando, um andarilho continua andando).
- A roda dá zoom ({{key:Mod}}: só valores; {{key:Shift}}: só tempo); arraste com o botão do meio ou com {{key:Alt}} para fazer pan; {{ui:Mostrar tudo}} ou {{key:Home}} ajusta todas as curvas mostradas. Clique em um espaço vazio para mover o cabeçote de reprodução até lá. {{key:Delete}} exclui as chaves escolhidas.

As alças não podem cruzar uma com a outra no tempo, então uma curva nunca volta atrás.

## Reutilizar animações (exibição Clipes)

Um **clipe** reproduz uma animação salva (uma **ação**) na linha do tempo. Os clipes são misturados em ordem, as linhas de baixo sobre as de cima; as trilhas da própria linha do tempo ficam acima de todos os clipes.

1. Crie chaves para os grupos e luzes como de costume, depois clique em {{ui:Criar clipe}} em {{ui:Clipes}} e dê um nome à ação. As trilhas se tornam a ação, e um clipe a reproduz onde elas estavam (a câmera permanece na linha do tempo).
2. Para usá-la de novo, escolha a ação e clique em {{ui:Adicionar clipe}}: um novo clipe começa no cabeçote de reprodução.
3. Arraste um clipe ao longo da linha para movê-lo; clique nele para definir {{ui:Início (s)}}, {{ui:Velocidade}} (2 = o dobro da velocidade), {{ui:Repetições}}, {{ui:Quanto}} (0 a 1), {{ui:Mixagem}} ({{ui:Substituir}}, ou {{ui:Somar por cima}} dos clipes anteriores), {{ui:Fora do clipe}} (nada, manter o fim, ou manter os dois extremos) e {{ui:Silenciar}}. As setas mudam a ordem; a lixeira o remove (uma ação que nenhum clipe usa mais sai junto).

Um clipe com {{ui:Quanto}} abaixo de 100% se mistura com o que está embaixo dele: o clipe anterior, ou a luz ou o posicionamento como estão sem a animação.

## O que reproduz onde

| O quê | Na vista | Em um vídeo renderizado |
|---|---|---|
| Chaves da câmera, ângulo da lente com chaves da câmera | Sim | Sim |
| Posição, giro e tamanho (chaves, curvas, clipes) | Sim | Sim |
| Brilho, abertura e cor da luz | Sim | Ainda não: o vídeo usa as luzes como estão no início (veja [o que ainda não está implementado](topic:not-built-yet)) |
| Ângulo da lente sem chaves da câmera | Sim | Ainda não: crie chave para a câmera também |
| Chaves de forma e acionadores | Sim | Sim |
| Armaduras (malhas posicionadas) | Sim | Sim |
| IK e restrições | Sim | Sim |
| Física gerada (chaves) | Sim | Sim |

Tudo é salvo no arquivo `.modelcraft` junto com o restante da animação, e {{ui:Desfazer}} e {{ui:Refazer}} da linha do tempo revertem qualquer parte dele.
