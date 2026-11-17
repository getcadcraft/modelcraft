---
title: Cortar uma abertura numa parede
summary: Desenhe uma janela ou porta numa parede com espessura e empurre-a através dela, para que a parede fique com um furo real.
keywords: janela, porta, abertura, furo, parede, cortar, empurrar através, vazio, espessura, fachada
from: 6b22f32c
---

Uma abertura precisa de uma parede com dois lados: uma caixa, ou uma parede que criou puxando para cima um retângulo longo e fino. Uma face isolada não tem para onde empurrar.

## Fazer uma parede para praticar

1. Prima {{key:R}}, clique num canto no chão e escreva `6m,0.3m` (ou `20',12"`), depois {{key:Enter}}.
2. Prima {{key:P}}, clique no retângulo e escreva `3m` (ou `10'`), depois {{key:Enter}}.

Fica com uma parede com 300 mm (12 in) de espessura.

## Desenhar a abertura

1. Oriente a vista de modo a ver o lado comprido da parede.
2. Prima {{key:R}}.
3. Passe o ponteiro sobre a face da parede, depois clique onde vai o canto inferior da janela. A sugestão diz «Na face».
4. Escreva a largura e a altura da janela, como `1.2m,1.5m` (ou `4',5'`), e prima {{key:Enter}}.

   A janela é uma face própria dentro da face da parede, que agora tem um furo à sua volta.

Para a colocar a uma distância exata do canto e do chão, use primeiro [guias](topic:guides-measure): com a {{ui:Tape}}, arraste linhas-guia a partir das arestas inferior e final da parede, depois comece o retângulo onde se cruzam duas guias (a sugestão diz «Na guia»).

## Empurrar através da parede

1. Prima {{key:P}}.
2. Clique na face da janela e empurre-a para dentro da parede.
3. Mova até parar na face de trás, depois clique. Ou escreva a espessura da parede, `300` (ou `12`), e prima {{key:Enter}}.

   O ModelCraft para na face de trás e abre-a: a parede fica com um furo que a atravessa, com quatro faces laterais (ombreiras, verga e peitoril) a forrá-lo. Quando está agrupada, as {{ui:Entity info}} continuam a indicar a parede como sólido fechado.

Se empurrar menos do que a espessura total, obtém um rebaixo em vez de um furo.

## Uma porta

Desenhe o retângulo começando na aresta inferior da face da parede (a sugestão diz «Na aresta» ou «Extremidade»), para que a abertura chegue ao chão. Empurre-o através da mesma forma.

## Muitas janelas do mesmo tamanho

1. Faça a primeira abertura.
2. Para as seguintes, desenhe os retângulos e depois faça duplo clique em cada um com {{ui:Push/pull}}: um duplo clique repete a última distância. Veja [Empurrar e puxar](topic:push-pull#repeat-the-last-distance).

## Se não cortou através

- O retângulo tem de ser desenhado **sobre** a face da parede. Se foi desenhado no ar à frente dela, é uma face separada: anule e desenhe-o de novo, começando na face.
- O empurrão para na primeira face atrás da abertura. Se houver algo no caminho dentro da parede (uma face interna deixada de desenhos anteriores), para aí; apague as arestas dessa face e tente de novo.
- A geometria num grupo separado não é cortada. Abra o grupo que contém a parede e desenhe a abertura dentro dele.
