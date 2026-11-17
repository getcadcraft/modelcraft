---
title: Animar a câmera e os objetos e renderizar um vídeo
summary: Crie chaves para a câmera e para grupos e componentes em uma linha do tempo, reproduza-as na vista e renderize a animação em um vídeo WebM com o céu, o sol e os materiais do renderizador.
keywords: animação, animar, linha do tempo, quadro-chave, chaves, chave de quadro, caminho da câmera, voar sobre, passeio, percurso, caminhar, vídeo, filme, webm, renderizar vídeo, quadros, taxa de quadros, fps, cabeçote de reprodução, chave automática, suavizar, manter, cenas, sequência png, movimento
from: d3a58249
---

A **linha do tempo** move a câmera e qualquer grupo ou componente ao longo do tempo. Você define **chaves** (onde algo está em um dado momento); o ModelCraft o move suavemente de chave em chave. Reproduza na vista e depois renderize em um vídeo com o mesmo céu, sol, materiais e luzes de [uma imagem renderizada](topic:render).

## Abrir a linha do tempo

Clique em {{ui:Vistas}} no grupo {{ui:Câmera}}, depois em {{ui:Linha do tempo da animação}}. A linha do tempo abre sob a vista: os controles no topo, depois uma linha **Câmera** e uma linha para cada grupo ou componente que se move. Os losangos são as chaves; a linha vermelha é o **cabeçote de reprodução**, o momento mostrado na vista.

:::touch
Em um celular, a linha do tempo também abre sob a vista. Seus controles ficam em uma única linha: deslize-a para os lados para ver o restante; o botão que fecha a linha do tempo permanece na extremidade.
:::

Arraste o controle deslizante (ou clique em uma linha) para mover o cabeçote de reprodução. {{ui:Reproduzir}} reproduz a partir do cabeçote de reprodução e vira {{ui:Pausar}} enquanto reproduz; clique de novo para parar no ponto em que está. {{key:Space}} faz o mesmo enquanto a linha do tempo estiver aberta (com a linha do tempo fechada, Space continua sendo {{ui:Selecionar}}). {{ui:Chave anterior}} e {{ui:Próxima chave}} pulam entre as chaves. Um estilo próprio pode atribuir outra tecla a reproduzir e pausar: {{ui:Configurações}}, depois os menus, teclas e mouse, o comando *Reproduzir ou pausar a animação*.

## Mover a câmera

1. Mova o cabeçote de reprodução até onde a tomada começa (0 s), ajuste a vista e clique em {{ui:Chave da câmera}}.
2. Mova o cabeçote de reprodução para depois (digamos, 4 s), oriente, faça pan ou caminhe pela vista até a próxima posição e clique de novo em {{ui:Chave da câmera}}.
3. Adicione quantas chaves quiser e depois clique em {{ui:Reproduzir}}.

A câmera passa suavemente por cada chave e começa e termina em repouso.

:::tip
Já tem [cenas](topic:scenes)? {{ui:A partir das cenas}} cria o caminho da câmera a partir delas: ela para em cada cena e depois segue para a próxima. Se a linha do tempo não tiver chave alguma, {{ui:Renderizar vídeo…}} faz isso sozinho, então duas cenas ou mais bastam para um vídeo de passeio.
:::

## Mover um grupo ou componente

1. Selecione o grupo ou componente (só grupos e componentes inteiros se movem; [crie um grupo](topic:groups-components) antes).
2. Em 0 s, clique em {{ui:Chave da seleção}}.
3. Mova o cabeçote de reprodução para depois, [mova, gire ou escale](topic:move-copy) o grupo até onde ele deve estar e clique de novo em {{ui:Chave da seleção}}.

Ele desliza, gira e cresce entre as chaves. Os giros seguem o caminho mais curto.

**Chave automática** poupa o clique da etapa 3: enquanto {{ui:Chave automática}} estiver ativada, um grupo ou componente selecionado que você move, gira ou escala recebe uma chave no cabeçote de reprodução automaticamente (e, na primeira vez, uma chave em 0 s, onde ele estava).

:::note
Mover um grupo animado sem uma chave dura apenas até o cabeçote de reprodução se mover: na próxima vez que você reproduzir ou arrastar o cabeçote, ele volta para onde as chaves o colocam. A barra de status informa isso. Pressione {{ui:Chave da seleção}} para mantê-lo.
:::

## Alterar chaves

- **Escolha uma chave** clicando no losango dela: o cabeçote de reprodução vai até ela.
- **Mova uma chave** arrastando o losango ao longo da linha, ou com {{key:Left}} e {{key:Right}} (um quadro; com {{key:Shift}}, dez).
- **Exclua** com {{ui:Excluir chave}} (a chave escolhida, ou todas as chaves no cabeçote de reprodução) ou com {{key:Delete}} em um losango escolhido.
- **Como segue adiante**, para a chave escolhida: {{ui:Suavizar}} (uma curva passando pelas chaves ao redor), {{ui:Constante}} (uma linha reta em velocidade fixa), {{ui:Entrada e saída lentas}} (para em repouso nesta chave) ou {{ui:Manter}} (fica parado até a próxima chave).
- **Duração (s)** define o tamanho da animação; uma chave criada após o fim a torna mais longa. Para encurtá-la, primeiro mova ou exclua as chaves além do novo fim.
- O **×** na linha de um grupo interrompe a animação dele.

A linha do tempo tem seus próprios {{ui:Desfazer}} e {{ui:Refazer}}: o desfazer do modelo ({{key:Mod+Z}}) altera o modelo, não as chaves. A animação é salva no arquivo `.modelcraft`. Fechar a linha do tempo devolve os grupos em movimento à primeira pose.

## Renderizar o vídeo

1. Clique em {{ui:Renderizar vídeo}} na linha do tempo (ou em {{ui:Exportar}} › {{ui:Renderizar vídeo…}}).
2. Escolha o {{ui:Tamanho}}, a {{ui:Taxa de quadros}}, a {{ui:Qualidade de cada quadro}} e o {{ui:Arquivo}}.
3. Clique em {{ui:Renderizar vídeo}}. Cada quadro aparece conforme é feito, com o tempo restante.
4. Quando terminar, clique em {{ui:Salvar vídeo}}.

{{ui:Parar}} (ou {{key:Esc}}) encerra antes; {{ui:Salvar vídeo}} então mantém os quadros já feitos como um vídeo mais curto.

O céu, o sol, os materiais, as luzes e o brilho são os definidos em {{ui:Renderizar imagem…}}: defina-os ali primeiro, conferindo uma imagem fixa. Cada quadro é renderizado neste computador; nada é enviado.

| Configuração | O que faz |
|---|---|
| {{ui:Tamanho}} | 480p, 720p HD, 1080p Full HD, ou a própria forma da vista (até 1920 pixels de largura) |
| {{ui:Taxa de quadros}} | 24, 25, 30 ou 60 quadros por segundo. O dobro de quadros leva o dobro do tempo |
| {{ui:Qualidade de cada quadro}} | {{ui:Rápida}} (4 passagens), {{ui:Rascunho}} (16) ou {{ui:Boa}} (64): mais passagens dão sombras e bordas mais suaves |
| {{ui:Arquivo}} | {{ui:Vídeo WebM}}, {{ui:Vídeo MP4 (H.264)}} onde o navegador consegue gerá-lo, ou {{ui:Imagens PNG, uma por quadro (ZIP)}} para editores de vídeo (e para navegadores sem codificador de vídeo) |

:::tip
Um vídeo de 10 segundos a 30 quadros por segundo tem 301 quadros. Teste primeiro {{ui:Rápida}} em 480p para conferir o movimento, depois renderize {{ui:Rascunho}} ou {{ui:Boa}} em um tamanho maior.
:::

O WebM reproduz em navegadores e no VLC, e editores de vídeo o convertem. {{ui:Vídeo MP4 (H.264)}} é oferecido onde o navegador consegue gerá-lo. {{ui:Renderizar vídeo}} usa o renderizador rápido; para fazer path tracing de cada quadro, escolha {{ui:Adicionar esta animação à fila}} na mesma caixa de diálogo: os quadros são renderizados na [fila de renderização](topic:render#the-render-queue), que precisa de WebGPU.

:::firefox safari
Renderizar um vídeo exige um navegador que codifique vídeo sozinho (WebCodecs): Chrome, Edge, Firefox e Safari 17 recentes fazem isso. Sem isso, escolha {{ui:Imagens PNG, uma por quadro (ZIP)}}.
:::

## O que saber

- Só grupos e componentes inteiros se movem. Faces, arestas, a hora do sol e o estilo ainda não mudam com o tempo.
- {{ui:Exportar animação}} em [Cenas](topic:scenes) ainda grava a vista como aparece na tela, em tempo real; {{ui:Renderizar vídeo}} renderiza cada quadro com céu, sombras e materiais.
