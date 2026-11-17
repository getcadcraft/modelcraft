---
title: O cubo de vista
summary: Clique em uma face, aresta ou canto do cubo no canto da vista para olhar dali, arraste-o para orbitar, gire o anel da bússola, avance em volta de uma vista de frente e volte para o início.
keywords: cubo de vista, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, superior, frontal, direita, iso, canto, aresta, orbitar, girar vista, ícone de eixos, indicador de canto, navegação
from: e1ec1347
---

O cubo de vista fica no canto superior direito da vista 3D. Ele gira junto com a vista, então sempre mostra para que lado você está olhando: {{ui:Superior}} fica para cima, {{ui:Frontal}} fica voltada para o sul (você olha para o norte, ao longo do eixo verde, quando olha para ele), {{ui:Direita}} fica voltada para o leste (eixo vermelho). Ele fica transparente até você apontar para ele.

## Olhe de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A parte sob o ponteiro acende: o meio de uma face, uma aresta (acende nas duas faces que a compartilham) ou um canto (em todas as três faces).
2. Clique nela. A vista gira para olhar dali, mantendo o mesmo meio e o mesmo zoom.

Há 26 lugares para clicar: 6 faces ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista de três quartos; uma aresta fica a meio caminho entre duas faces.

Clicar em {{ui:Frontal}} é o mesmo que {{ui:Vistas}}, {{ui:Frontal}} na barra de ferramentas, sem o ajuste de zoom. {{ui:Vistas}} ainda aplica o zoom para o modelo inteiro.

## Orbite arrastando o cubo

Arraste o cubo para girar a vista, do mesmo modo que orbitar na própria vista. Um arraste nunca é tomado como clique, então você pode pegar o cubo em qualquer parte.

## O anel da bússola

O anel sob o cubo traz N, L, S e O.

- **Arraste o anel** para girar o modelo em torno do eixo vertical, como se estivesse numa plataforma giratória. O anel acompanha o ponteiro.
- **Clique em uma letra** para olhar desse lado, mantendo a inclinação com que você olha para baixo. Numa vista de cima, a letra em que você clicar vai para a parte inferior da tela.

## Vistas de frente: setas

Quando você olha diretamente para uma face, pequenas setas aparecem em volta do cubo:

- Os quatro **triângulos** trazem para a frente a face daquele lado: o triângulo acima do cubo mostra a face que estava em cima, e assim por diante.
- As duas **setas curvas** no canto superior direito giram a imagem em um quarto de volta no sentido horário ou anti-horário, sem mudar a face para a qual você olha. Use-as para girar uma planta de modo que uma parede longa atravesse a tela.

## Início

O botão de casa no canto superior esquerdo do cubo volta para a vista {{ui:Iso}} de três quartos e ajusta o modelo inteiro na tela. {{key:Home}} faz o mesmo enquanto o cubo tiver o foco do teclado.

## Com o teclado

{{key:Tab}} até o cubo, depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe um lado, aresta ou canto ao redor do cubo, em passos de um oitavo de volta (leitores de tela dizem qual) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Superior}} ou até {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir da escolhida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira a vista um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas pressionadas no cubo ficam com o cubo: elas não ativam ferramentas do ModelCraft.

## Ícone de eixos ou nada no lugar

Abra {{ui:Configurações}} ({{key:Mod+,}}), a guia {{ui:ModelCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vista}} (o padrão), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X vermelho, Y verde, Z azul) ou {{ui:Nenhum}}. Este navegador lembra a escolha. Veja [Configurações do ModelCraft](topic:settings#corner-indicator).

:::note
O ModelCraft não tem roll: longe das vistas diretamente de cima e de baixo, o que está para cima na tela é sempre para cima no modelo. O cubo e as setas curvas podem girar uma vista de planta; não conseguem inclinar uma vista lateral para ficar de lado.
:::
