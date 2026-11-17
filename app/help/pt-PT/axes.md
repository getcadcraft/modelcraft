---
title: Mover e rodar os eixos de desenho
summary: Rode os eixos vermelho, verde e azul para os alinhar com um edifício que não está quadrado com eles, ou alinhe-os a uma face, para que o desenho e a escrita os sigam.
keywords: eixos, eixos de desenho, origem, alinhar eixos, rodar eixos, girar eixos, repor eixos, edifício inclinado, enviesado, ucs, sistema de coordenadas
from: cab258f7
---

Os eixos vermelho, verde e azul guiam tudo o que desenha: os retângulos alinham-se com eles, as linhas ficam presas a eles, e o chão é o plano vermelho-verde. Quando um edifício está inclinado (uma planta de implantação que não está quadrada com o norte, uma asa rodada 30°), mova os eixos para cima dele, para que o desenho siga as suas paredes. O modelo em si não se move.

Os três comandos estão em {{ui:Editar}} › {{ui:Mais}}.

## Colocar eixos

1. {{ui:Editar}} › {{ui:Mais}} › {{ui:Colocar eixos}}.
2. Clique onde fica a origem, como um canto do edifício.
3. Clique num ponto ao longo do novo eixo vermelho, como mais adiante numa parede.
4. Clique num ponto na direção do novo eixo verde. O verde fica em ângulo reto com o vermelho, e o azul fica em ângulo reto com ambos.

Os eixos são desenhados no novo lugar. Um retângulo que desenha agora no chão, ou escreve como `4m,3m`, segue o vermelho e o verde rodados; as teclas de seta bloqueiam-se a eles; e o snap à origem fica na nova origem.

## Alinhar os eixos a uma face

Selecione uma face e depois {{ui:Editar}} › {{ui:Mais}} › {{ui:Alinhar eixos à face}}. O azul passa então a apontar para fora da face, o vermelho segue a sua aresta mais longa, e a origem fica no início dessa aresta. Use-o para desenhar num telhado inclinado como se fosse o chão.

## Repor os eixos

{{ui:Editar}} › {{ui:Mais}} › {{ui:Repor eixos}} devolve-os ao sítio onde o modelo começou.

## Outras coisas a saber

- Dentro de um grupo ou componente aberto, usam-se os seus próprios eixos (rodam com ele); os eixos do modelo aplicam-se ao nível superior.
- Os eixos são guardados no ficheiro do ModelCraft, e cada alteração é um passo de anular.
- As exportações e as vistas padrão ({{ui:Topo}}, {{ui:Frente}}…) continuam a usar as direções do próprio modelo.
