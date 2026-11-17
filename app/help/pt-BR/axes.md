---
title: Mover e girar os eixos de desenho
summary: Gire os eixos vermelho, verde e azul para acompanhar um edifício que não esteja alinhado a eles, ou alinhe-os a uma face, para que o desenho e a digitação sigam essa orientação.
keywords: eixos, eixos de desenho, origem, alinhar eixos, girar eixos, redefinir eixos, edifício inclinado, oblíquo, ucs, sistema de coordenadas
from: cab258f7
---

Os eixos vermelho, verde e azul guiam tudo o que você desenha: retângulos se alinham a eles, linhas se travam neles, e o chão é o plano vermelho–verde. Quando um edifício está inclinado (uma planta de situação não alinhada ao norte, uma asa girada 30°), mova os eixos para cima dele, para que o desenho siga suas paredes. O modelo em si não se move.

Os três comandos estão em {{ui:Editar}} › {{ui:Mais}}.

## Posicionar eixos

1. {{ui:Editar}} › {{ui:Mais}} › {{ui:Posicionar eixos}}.
2. Clique onde fica a origem, como um canto do edifício.
3. Clique em um ponto ao longo do novo eixo vermelho, como mais adiante em uma parede.
4. Clique em um ponto na direção do novo eixo verde. O verde fica perpendicular ao vermelho, e o azul fica perpendicular aos dois.

Os eixos são desenhados em sua nova posição. Um retângulo que você agora desenha no chão, ou digita como `4m,3m`, segue o vermelho e o verde girados; as teclas de seta travam neles; e o snap de origem fica na nova origem.

## Alinhar eixos a uma face

Selecione uma face e depois {{ui:Editar}} › {{ui:Mais}} › {{ui:Alinhar eixos à face}}. O azul então aponta para fora da face, o vermelho segue sua aresta mais longa, e a origem fica no início dessa aresta. Use para desenhar em um telhado inclinado como se fosse o chão.

## Redefinir eixos

{{ui:Editar}} › {{ui:Mais}} › {{ui:Redefinir eixos}} os devolve à posição original do modelo.

## O que saber

- Dentro de um grupo ou componente aberto, são usados os eixos próprios dele (eles giram com ele); os eixos do modelo valem no nível superior.
- Os eixos são salvos no arquivo do ModelCraft, e cada alteração é uma etapa de desfazer.
- As exportações e as vistas padrão ({{ui:Superior}}, {{ui:Frontal}}…) continuam usando as direções do próprio modelo.
