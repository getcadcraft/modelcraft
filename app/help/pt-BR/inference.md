---
title: Inferência e encaixe
summary: O que significam os marcadores coloridos, qual encaixe prevalece e como bloquear uma direção com as teclas de seta ou Shift.
keywords: inferência, snap, encaixe, extremidade, ponto médio, centro da face, centro, na aresta, na face, eixo, eixo vermelho, eixo verde, eixo azul, paralelo, perpendicular, bloquear, shift, osnap
from: e78984e9
---

Enquanto uma ferramenta de desenho ou edição está em uso, o ModelCraft observa o que está sob o ponteiro e encaixa no item útil mais próximo. Um marcador mostra o que foi encontrado, e a dica no canto inferior esquerdo o nomeia.

## Marcadores e dicas

| Dica | Marcador | Encaixa em |
|---|---|---|
| Extremidade | Círculo verde | O fim de uma aresta |
| Ponto médio | Círculo ciano | O meio de uma aresta |
| Centro da face | Círculo azul | O meio da face sob o ponteiro |
| Ponto-guia | Cinza | Um ponto-guia deixado pela fita métrica |
| Origem | Ocre | Onde os eixos vermelho, verde e azul se encontram |
| No eixo vermelho / No eixo verde / No eixo azul | Uma linha nessa cor | Uma linha a partir do seu ponto inicial nessa direção |
| Paralelo à aresta / Perpendicular à aresta | Linha magenta | Uma linha a partir do seu ponto inicial, paralela ou perpendicular à aresta lembrada (veja abaixo) |
| Bloqueado | Linha magenta | Uma direção que você bloqueou com uma tecla de seta ou {{key:Shift}} |
| Na aresta | Quadrado vermelho | Em qualquer ponto ao longo de uma aresta |
| Na linha-guia | Cinza | Em qualquer ponto ao longo de uma linha-guia |
| Na face | Losango azul | Em qualquer ponto de uma face |
| No plano | nenhum | O plano onde você começou, quando o ponteiro está sobre um espaço vazio |
| No solo | nenhum | O solo (o plano vermelho-verde), quando não há mais nada ali |

Quando uma linha de eixo a partir do seu ponto inicial cruza uma aresta ou guia, o ModelCraft encaixa no cruzamento, e a dica nomeia os dois, como "No eixo vermelho, na aresta".

## Qual encaixe prevalece

1. **Pontos** a cerca de 12 pixels: primeiro extremidades, depois pontos-guia, pontos médios, o centro da face sob o ponteiro e a origem.
2. **Direções** a partir do ponto inicial: os eixos vermelho, verde e azul, e paralelo ou perpendicular à aresta lembrada.
3. **Em uma aresta** ou em uma linha-guia.
4. **Em uma face.**
5. **O plano de desenho**, ou o solo.

Coisas escondidas atrás de uma face nunca são encaixadas. Orbite a vista para ver o ponto que você quer.

## Desenhar sobre uma face a partir de um ponto

Um {{ui:Retângulo}}, {{ui:Círculo}} ou {{ui:Polígono}} iniciado em um canto, um ponto médio, uma aresta ou o centro de uma face é desenhado **no plano da face sob o ponteiro**, e recorta essa face. Uma aresta pertence a duas faces, então o lado da aresta onde o ponteiro está decide: para desenhar na extremidade de uma caixa longa, comece pelo meio de uma das arestas, com o ponteiro logo dentro da face da extremidade.

## Paralelo e perpendicular

O ModelCraft lembra a **última aresta sobre a qual o ponteiro passou antes do seu primeiro clique**. Começar em um canto ou em uma aresta conta como ter passado por essa aresta. Depois que a ferramenta está funcionando, outras arestas sobre as quais você passa não substituem essa.

Para desenhar uma linha paralela a uma aresta existente:

1. Pressione {{key:L}} e passe o ponteiro sobre a aresta que quer igualar.
2. Mova até o ponto inicial, sem cruzar outras arestas no caminho, se possível, e clique.
3. Mova na direção paralela a essa aresta. A linha fica magenta e a dica diz "Paralelo à aresta". Perpendicular funciona da mesma forma, dentro do plano em que você está desenhando.

Se a aresta errada foi lembrada, pressione {{key:Esc}}, passe o ponteiro sobre a aresta certa e comece de novo.

## Bloquear uma direção

Depois do primeiro clique de uma ferramenta, você pode manter o próximo ponto em uma só linha:

| Tecla | Bloqueia em |
|---|---|
| {{key:Right}} | O eixo vermelho |
| {{key:Left}} | O eixo verde |
| {{key:Up}} | O eixo azul (reto para cima) |
| {{key:Down}} | Paralelo à aresta lembrada (veja acima) |

Pressione a mesma seta de novo para desbloquear. A barra de status diz "Bloqueado no eixo vermelho. Pressione a mesma seta para desbloquear."

Enquanto bloqueado, o ponto desliza ao longo da linha em direção a onde estiver o ponteiro, e ainda se alinha aos pontos sobre os quais você passa: passe o ponteiro sobre o canto de outra caixa para desenhar uma linha ao longo do vermelho exatamente até aquele canto.

**{{key:Shift}}** bloqueia a direção em que você está encaixado neste momento (um eixo, ou paralelo), enquanto você a mantém pressionada. Solte para desbloquear.

Os bloqueios funcionam em {{ui:Linha}}, {{ui:Retângulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Mover}}, {{ui:Escala}} e {{ui:Fita métrica}}. Antes do primeiro clique, as teclas de seta orbitam a vista.

## Dentro de um grupo

Enquanto você edita dentro de um grupo ou componente, os eixos são os próprios eixos do grupo (eles se movem com ele e giram com ele, se ele tiver sido girado). Os encaixes ainda encontram pontos e arestas fora do grupo, então você pode alinhar as coisas com o restante do modelo.
