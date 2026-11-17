---
title: O cubo de vistas
summary: Clique numa face, aresta ou canto do cubo, no canto da vista, para olhar a partir desse lado; arraste-o para orbitar, rode o anel da bússola, passe pelas vistas de frente e volte à vista inicial.
keywords: cubo de vistas, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, topo, frente, direita, iso, canto, aresta, orbitar, rodar a vista, ícone de eixos, indicador de canto, navegação
from: e1ec1347
---

O cubo de vistas fica no canto superior direito da vista 3D. Roda com a vista, pelo que mostra sempre para onde se está a olhar: {{ui:Topo}} fica em cima, {{ui:Frente}} está virada para sul (quando se olha para ele, olha-se para norte, ao longo do eixo verde), e {{ui:Direita}} está virada para este (eixo vermelho). Fica transparente até apontar para ele.

## Olhar de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A parte sob o cursor acende-se: o centro de uma face, uma aresta (acende-se nas duas faces que a partilham) ou um canto (nas três faces).
2. Clique. A vista roda para olhar a partir daí, mantendo o mesmo centro e o mesmo zoom.

Há 26 sítios onde clicar: 6 faces ({{ui:Topo}}, {{ui:Baixo}}, {{ui:Frente}}, {{ui:Trás}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista a três quartos; uma aresta fica a meio caminho entre duas faces.

Clicar em {{ui:Frente}} é o mesmo que {{ui:Vistas}}, {{ui:Frente}} na barra de ferramentas, sem ajustar o zoom. {{ui:Vistas}} continua a fazer zoom para o modelo inteiro.

## Orbitar arrastando o cubo

Arraste o cubo para rodar a vista, tal como orbitar na própria vista. Um arrastamento nunca é tomado como clique, por isso pode agarrar o cubo em qualquer ponto.

## O anel da bússola

O anel por baixo do cubo tem N, E, S e O.

- **Arraste o anel** para rodar o modelo em torno do eixo vertical, como se estivesse numa plataforma giratória. O anel segue o cursor.
- **Clique numa letra** para olhar desse lado, mantendo a inclinação com que se olha para baixo. Numa vista de cima a direito, a letra em que clicou vai para a parte inferior do ecrã.

## Vistas de frente: setas

Quando se olha diretamente para uma face, aparecem pequenas setas à volta do cubo:

- Os quatro **triângulos** trazem a face desse lado para a frente: o triângulo acima do cubo indica a face que estava no topo, e assim por diante.
- As duas **setas curvas** no canto superior direito rodam a imagem um quarto de volta no sentido horário ou anti-horário, sem mudar a face para que se olha. Use-as para rodar uma planta de modo que uma parede comprida atravesse o ecrã.

## Vista inicial

O botão de casa, no canto superior esquerdo do cubo, volta à vista a três quartos {{ui:Iso}} e ajusta o modelo inteiro. {{key:Home}} faz o mesmo enquanto o cubo tem o foco do teclado.

## Com o teclado

Prima {{key:Tab}} até ao cubo e depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe um lado, aresta ou canto à volta do cubo, em passos de um oitavo de volta (os leitores de ecrã dizem qual) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Topo}} ou até {{ui:Baixo}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir do escolhido |
| {{key:Shift+left}} / {{key:Shift+right}} | roda a vista um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas premidas no cubo ficam com o cubo: não iniciam ferramentas do ModelCraft.

## Ícone de eixos ou nada

Abra {{ui:Definições}} ({{key:Mod+,}}), o separador {{ui:ModelCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vistas}} (o predefinido), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X a vermelho, Y a verde, Z a azul) ou {{ui:Nenhum}}. Este navegador memoriza a escolha. Ver [Definições do ModelCraft](topic:settings#corner-indicator).

:::note
O ModelCraft não tem rotação lateral: fora das vistas diretamente de cima e diretamente de baixo, o topo do ecrã é sempre o topo do modelo. O cubo e as setas curvas podem rodar uma vista em planta; não conseguem inclinar uma vista lateral para ficar sobre uma aresta.
:::
