---
title: Abrir a cena noutro programa
summary: Guarde a cena como um ficheiro USD ou glTF para qualquer programa que os leia, ou abra-a a partir do Studio num programa deste computador.
keywords: abrir em, usd, gltf, glb, exportar, programa de renderização, archviz, studio, usdview, enviar, entrega, pacote, pasta do unreal
from: 812329d5
---

Escolha uma entrada **Abrir em** na lista Motor de {{ui:Renderizar uma imagem…}} para levar a cena a outro programa. Nada volta para o modelo.

## Um ficheiro para qualquer programa

- O **ficheiro USD** guarda a cena como `.usdc` (ou `.usdz` quando o modelo tem imagens): o [mesmo ficheiro que Guardar como USD](topic:usd), com materiais, lâmpadas e câmaras. Mantém as instâncias e os valores exatos dos materiais. A maioria dos renderizadores, motores de jogos e visualizadores lê USD.
- O **ficheiro glTF (.glb)** guarda o ficheiro glTF 2.0, mais leve, com materiais, texturas e lâmpadas; veja [Exportar um modelo para outros programas](topic:export-model) para os formatos que o ModelCraft escreve.
- A **pasta de projeto do Unreal (.zip)** guarda a pasta que [Enviar a cena para um motor de jogo](topic:render-unreal) escreve, para um projeto em qualquer computador.

Todas as três funcionam no navegador e no Studio.

## No Studio: abri-la num programa

O Studio lista os programas que encontra neste computador e que podem abrir a cena: o usdview, se estiver no seu caminho de pesquisa, e o programa do próprio computador para o tipo de ficheiro. Escolha um, escolha USD ou glTF onde lê ambos, e clique em {{ui:Renderizar}}. O Studio escreve o pacote numa pasta nova em Documentos (`CadCraft hand-off`; nada é substituído, cada envio tem a sua pasta) e inicia o programa nela, depois indica onde estão os ficheiros.

| Programa | Lê melhor |
|---|---|
| usdview | USD |
| O programa do próprio computador | O que o computador tiver para esse tipo de ficheiro |

O Studio só inicia programas desta lista fixa; não executa nada que a página peça pelo nome, e nunca inicia um programa sob a licença GNU GPL (veja [Desenhar a imagem com outro programa](topic:render-other-program#programs-cadcraft-never-runs)). Qualquer programa que leia USD ou glTF abre o ficheiro de **Um ficheiro para qualquer programa**, acima.

:::note
O Twinmotion, o Enscape e outros programas de visualização não estão na lista: o CadCraft não foi verificado com eles e não faz qualquer afirmação sobre eles. Um ficheiro glTF ou USD daqui é o caminho de entrada.
:::
