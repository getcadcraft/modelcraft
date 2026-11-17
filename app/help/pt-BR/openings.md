---
title: Fazer uma abertura em uma parede
summary: Desenhe uma janela ou porta em uma parede com espessura e empurre-a através dela, para que a parede ganhe um furo real.
keywords: janela, porta, abertura, furo, parede, cortar, empurrar através, vazio, espessura, fachada
from: 6b22f32c
---

Uma abertura precisa de uma parede com dois lados: uma caixa, ou uma parede que você fez puxando um retângulo longo e fino para cima. Uma única face de pé sozinha não tem para onde empurrar.

## Faça uma parede para praticar

1. Pressione {{key:R}}, clique em um canto no chão e digite `6m,0.3m` (ou `20',12"`), depois {{key:Enter}}.
2. Pressione {{key:P}}, clique no retângulo e digite `3m` (ou `10'`), depois {{key:Enter}}.

Você tem uma parede com 300 mm (12 in) de espessura.

## Desenhe a abertura

1. Use a órbita para ver o lado longo da parede.
2. Pressione {{key:R}}.
3. Passe o cursor sobre a face da parede, depois clique onde vai o canto inferior da janela. A dica diz "Na face".
4. Digite a largura e a altura da janela, como `1.2m,1.5m` (ou `4',5'`), e pressione {{key:Enter}}.

   A janela é uma face própria dentro da face da parede, que agora tem um furo ao redor dela.

Para posicioná-la a uma distância exata do canto e do piso, use primeiro [guias](topic:guides-measure): com {{ui:Tape}}, arraste linhas-guia para fora das bordas inferior e final da parede, depois comece o retângulo onde duas guias se cruzam (a dica diz "Na guia").

## Empurre-a através

1. Pressione {{key:P}}.
2. Clique na face da janela e empurre-a para dentro da parede.
3. Mova até parar na face de trás, depois clique. Ou digite a espessura da parede, `300` (ou `12`), e pressione {{key:Enter}}.

   O ModelCraft para na face de trás e a abre: a parede agora tem um furo reto, com quatro faces laterais (ombreiras, verga e peitoril) revestindo-o. {{ui:Entity info}} ainda chama a parede de sólido fechado quando ela está agrupada.

Se você empurrar menos que a espessura inteira, obtém um rebaixo em vez de um furo.

## Uma porta

Desenhe o retângulo começando na aresta inferior da face da parede (a dica diz "Na aresta" ou "Extremidade"), para que a abertura chegue ao piso. Empurre-o do mesmo jeito.

## Muitas janelas do mesmo tamanho

1. Faça a primeira abertura.
2. Para as próximas, desenhe os retângulos e depois clique duas vezes em cada um com {{ui:Push/pull}}: um clique duplo repete a última distância. Veja [Empurrar e puxar](topic:push-pull#repeat-the-last-distance).

## Se não cortou através

- O retângulo deve ser desenhado **sobre** a face da parede. Se foi desenhado no ar, na frente dela, é uma face separada: desfaça e desenhe de novo, começando na face.
- O empurrão para na primeira face atrás da abertura. Se algo mais estiver no caminho dentro da parede (uma face interna deixada de desenhos anteriores), ele para ali; apague as arestas dessa face e tente de novo.
- Geometria em um grupo separado não é cortada. Abra o grupo que contém a parede e desenhe a abertura dentro dele.
