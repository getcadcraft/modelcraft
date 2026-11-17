---
title: Desenhar a imagem com outro programa
summary: O nosso próprio Path tracer desenha a imagem de Renderizar; outro programa só pode desenhá-la por meio de um complemento de motor de renderização no CadCraft Studio. O que é transportado e por que alguns programas nunca são oferecidos.
keywords: renderizar, motor, programa externo, motor de complemento, studio, segundo plano, fila, usd, gltf, desenhado por, blender, gpl
from: 150f94f1
---

A imagem em {{ui:Renderizar imagem…}} é desenhada pelos **nossos próprios motores**: Rápido e o Path tracer, no navegador e no CadCraft Studio. Outro programa só pode desenhá-la quando um **complemento de motor de renderização** a traz: veja [Adicionar um motor de renderização com um complemento](topic:render-engine-addons). Para levar a cena a outro programa e continuar trabalhando lá, use [Abrir a cena em outro programa](topic:render-open-in) ou [Enviar a cena para um motor de jogo](topic:render-unreal).

## Desenhar uma imagem com o motor de um complemento

1. Ative o complemento em Configurações › Complementos. O motor dele aparece na lista Motor de {{ui:Renderizar imagem…}}.
2. Escolha-o. As configurações próprias dele aparecem abaixo da lista Motor.
3. Clique em {{ui:Renderizar}}. No Studio, na primeira vez que um complemento executa um programa, o Studio pergunta em uma caixa de diálogo própria. O andamento aparece enquanto ele desenha; {{ui:Parar}} o encerra. A imagem aparece marcada com o motor que a desenhou.

Um motor escrito em JavaScript também funciona no navegador. Um motor que executa um programa neste computador funciona apenas no Studio; no navegador aparece como um arquivo a salvar.

## O que é transportado

O motor recebe um **pacote**: o modelo como um arquivo USD (e um arquivo glTF quando ele o pede) e um arquivo de configurações com os valores exatos dos materiais, o sol e o céu, cada lâmpada ligada com a sua potência e o seu perfil de luz, a câmera e a exposição. Cada programa ilumina, ajusta tons e amostra à sua maneira, então as imagens são parecidas em câmera, sol, lâmpadas e exposição, mas não pixel a pixel.

## Programas que o CadCraft nunca executa

O CadCraft nunca inicia um programa sob a licença GNU GPL, e nunca o lista como motor ou como destino de Abrir em. O Blender é um deles, por isso não está na lista Motor. Um arquivo USD ou glTF salvo a partir de {{ui:Renderizar imagem…}} ainda abre nele, como em qualquer programa que leia esses arquivos.

:::note
Câmeras panorâmicas e estereoscópicas e uma imagem de céu (as cores do céu são usadas no lugar) não são transportadas para outro programa. Nada feito em outro programa volta para o modelo.
:::
