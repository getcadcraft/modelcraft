---
title: Animar a câmara e os objetos, e renderizar um vídeo
summary: Marcar chaves para a câmara e para grupos e componentes numa linha de tempo, reproduzi-las na vista e renderizar a animação num vídeo WebM com o céu, o sol e os materiais do renderizador.
keywords: animação, animar, linha de tempo, quadro-chave, chaves, chave de fotograma, trajeto da câmara, percorrer, passeio, atravessar, vídeo, filme, webm, renderizar vídeo, fotogramas, taxa de fotogramas, fps, cursor de reprodução, chave automática, suavizar, manter, cenas, sequência png, movimento
from: d3a58249
---

A **linha de tempo** move a câmara e qualquer grupo ou componente ao longo do tempo. Definem-se **chaves** (onde está algo num dado momento); o ModelCraft move-o suavemente de chave para chave. Reproduza na vista e depois renderize num vídeo com o mesmo céu, sol, materiais e candeeiros que [uma imagem renderizada](topic:render).

## Abrir a linha de tempo

Clique em {{ui:Vistas}} no grupo {{ui:Câmara}}, depois em {{ui:Linha de tempo da animação}}. A linha de tempo abre por baixo da vista: os controlos no topo, depois uma linha **Câmara** e uma linha para cada grupo ou componente que se move. Os losangos são chaves; a linha vermelha é o **cursor de reprodução**, o momento mostrado na vista.

:::touch
Num telemóvel, a linha de tempo também abre por baixo da vista. Os seus controlos são uma só linha: deslize-a para o lado para chegar ao resto; o botão que fecha a linha de tempo fica no fim dela.
:::

Arraste o cursor (ou clique numa linha) para mover o cursor de reprodução. {{ui:Reproduzir}} reproduz a partir do cursor e transforma-se em {{ui:Pausa}} enquanto reproduz; clique de novo para parar onde está. {{key:Space}} faz o mesmo com a linha de tempo aberta (com a linha fechada, Space continua a ser {{ui:Selecionar}}). {{ui:Chave anterior}} e {{ui:Chave seguinte}} saltam entre chaves. Um estilo próprio pode dar a reproduzir e pausar outra tecla: {{ui:Definições}}, depois os menus, teclas e rato, o comando *Reproduzir ou pausar a animação*.

## Mover a câmara

1. Mova o cursor de reprodução para onde o plano começa (0 s), prepare a vista e clique em {{ui:Chave de câmara}}.
2. Mova o cursor mais tarde (por exemplo 4 s), oriente, desloque ou percorra a vista até à posição seguinte, e clique de novo em {{ui:Chave de câmara}}.
3. Acrescente quantas chaves quiser e depois {{ui:Reproduzir}}.

A câmara passa suavemente por cada chave e começa e termina em repouso.

:::tip
Já tem [cenas](topic:scenes)? {{ui:A partir das cenas}} cria o trajeto da câmara a partir delas: fica parada em cada cena e depois move-se para a seguinte. Se a linha de tempo não tiver chaves, {{ui:Renderizar vídeo…}} faz isto sozinho, por isso duas cenas ou mais bastam para um vídeo de passeio.
:::

## Mover um grupo ou componente

1. Selecione o grupo ou componente (só os grupos e componentes inteiros se movem; [crie primeiro um grupo](topic:groups-components)).
2. Em 0 s, clique em {{ui:Chave da seleção}}.
3. Mova o cursor mais tarde, [mova, rode ou escale](topic:move-copy) o grupo até onde deve estar, e clique de novo em {{ui:Chave da seleção}}.

Desliza, roda e cresce entre as suas chaves. As rotações seguem o caminho mais curto.

{{ui:Chave automática}} poupa o clique do passo 3: enquanto estiver ativa, um grupo ou componente selecionado que move, roda ou escala recebe sozinho uma chave no cursor de reprodução (e, na primeira vez, uma chave em 0 s onde estava).

:::note
Mover um grupo animado sem uma chave só dura até o cursor de reprodução se mover: na próxima vez que reproduzir ou arrastar o cursor, ele volta para onde as suas chaves o põem. A barra de estado indica-o. Prima {{ui:Chave da seleção}} para o manter.
:::

## Alterar chaves

- **Escolha uma chave** clicando no seu losango: o cursor de reprodução vai para lá.
- **Mova uma chave** arrastando o seu losango ao longo da linha, ou com {{key:Left}} e {{key:Right}} (um fotograma; com {{key:Shift}}, dez).
- **Elimine** com {{ui:Eliminar chave}} (a chave escolhida, ou todas as chaves no cursor de reprodução) ou com {{key:Delete}} num losango escolhido.
- **Como avança**, para a chave escolhida: {{ui:Suavizar}} (uma curva pelas chaves à volta), {{ui:Constante}} (uma reta a uma só velocidade), {{ui:Entrada e saída lentas}} (chega a repouso nesta chave) ou {{ui:Manter}} (fica parado até à chave seguinte).
- **{{ui:Comprimento (s)}}** define a duração da animação; uma chave definida depois do fim torna-a mais longa. Para a encurtar, mova ou elimine primeiro as chaves para além do novo fim.
- O **×** na linha de um grupo deixa de o animar.

A linha de tempo tem o seu próprio {{ui:Anular}} e {{ui:Refazer}}: o anular do modelo ({{key:Mod+Z}}) altera o modelo, não as chaves. A animação é guardada no ficheiro `.modelcraft`. Fechar a linha de tempo devolve os grupos em movimento à sua primeira pose.

## Renderizar o vídeo

1. Clique em {{ui:Renderizar vídeo}} na linha de tempo (ou em {{ui:Exportar}} › {{ui:Renderizar vídeo…}}).
2. Escolha o {{ui:Tamanho}}, as {{ui:Fotogramas por segundo}}, a {{ui:Qualidade de cada fotograma}} e o {{ui:Ficheiro}}.
3. Clique em {{ui:Renderizar vídeo}}. Cada fotograma aparece à medida que é feito, com o tempo restante.
4. Quando terminar, clique em {{ui:Guardar vídeo}}.

{{ui:Parar}} (ou {{key:Esc}}) termina antes do tempo; {{ui:Guardar vídeo}} guarda então os fotogramas já feitos como um vídeo mais curto.

O céu, o sol, os materiais, os candeeiros e o brilho são os definidos em {{ui:Renderizar uma imagem…}}: defina-os lá primeiro, verificando uma imagem fixa. Cada fotograma é renderizado neste computador; nada é enviado.

| Definição | O que faz |
|---|---|
| {{ui:Tamanho}} | 480p, 720p HD, 1080p Full HD, ou a forma própria da vista (até 1920 píxeis de largura) |
| {{ui:Fotogramas por segundo}} | 24, 25, 30 ou 60 fotogramas por segundo. O dobro dos fotogramas demora o dobro do tempo |
| {{ui:Qualidade de cada fotograma}} | {{ui:Rápida}} (4 passagens), {{ui:Rascunho}} (16) ou {{ui:Boa}} (64): mais passagens dão sombras e arestas mais suaves |
| {{ui:Ficheiro}} | {{ui:Vídeo WebM}}, {{ui:Vídeo MP4 (H.264)}} onde o navegador o puder escrever, ou {{ui:Imagens PNG, uma por fotograma (ZIP)}} para editores de vídeo (e para navegadores sem codificador de vídeo) |

:::tip
Um vídeo de 10 segundos a 30 fotogramas por segundo tem 301 fotogramas. Experimente primeiro {{ui:Rápida}} a 480p para verificar o movimento, e depois renderize em {{ui:Rascunho}} ou {{ui:Boa}} num tamanho maior.
:::

WebM reproduz-se em navegadores e no VLC, e os editores de vídeo convertem-no. {{ui:Vídeo MP4 (H.264)}} é oferecido onde o navegador o puder escrever. {{ui:Renderizar vídeo}} usa o renderizador rápido; para fazer traçado de caminhos (path tracing) de cada fotograma, escolha {{ui:Adicionar esta animação à fila}} no mesmo diálogo: os fotogramas são renderizados na [fila de renderização](topic:render#the-render-queue), que precisa de WebGPU.

:::firefox safari
Renderizar um vídeo precisa de um navegador que codifique vídeo por si (WebCodecs): as versões recentes do Chrome, Edge, Firefox e Safari 17 fazem-no. Sem isso, escolha {{ui:Imagens PNG, uma por fotograma (ZIP)}}.
:::

## Outras coisas a saber

- Só os grupos e componentes inteiros se movem. Faces, arestas, a hora do sol e o estilo ainda não mudam ao longo do tempo.
- {{ui:Exportar animação}} em [Cenas](topic:scenes) continua a registar a vista tal como está no ecrã, em tempo real; {{ui:Renderizar vídeo}} renderiza cada fotograma com céu, sombras e materiais.
