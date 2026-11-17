---
title: Inferência e snap
summary: O que significam os marcadores coloridos, qual snap ganha e como bloquear uma direção com as teclas de seta ou com Shift.
keywords: inferência, snap, snapping, extremidade, ponto médio, centro da face, centro, na aresta, na face, eixo, eixo vermelho, eixo verde, eixo azul, paralelo, perpendicular, bloquear, shift, osnap
from: e78984e9
---

Enquanto uma ferramenta de desenho ou de edição está a trabalhar, o ModelCraft observa o que está sob o cursor e faz snap ao elemento mais útil próximo. Um marcador mostra o que encontrou, e a sugestão no canto inferior esquerdo indica o nome.

## Marcadores e sugestões

| Sugestão | Marcador | Faz snap a |
|---|---|---|
| Extremidade | Círculo verde | A extremidade de uma aresta |
| Ponto médio | Círculo ciano | O meio de uma aresta |
| Centro da face | Círculo azul | O meio da face sob o cursor |
| Ponto-guia | Cinzento | Um ponto-guia deixado pela fita métrica |
| Origem | Ocre | Onde se cruzam os eixos vermelho, verde e azul |
| No eixo vermelho / No eixo verde / No eixo azul | Uma linha dessa cor | Uma linha a partir do ponto inicial nessa direção |
| Paralelo à aresta / Perpendicular à aresta | Linha magenta | Uma linha a partir do ponto inicial, paralela ou perpendicular à aresta memorizada (ver abaixo) |
| Bloqueado | Linha magenta | Uma direção bloqueada com uma tecla de seta ou com {{key:Shift}} |
| Na aresta | Quadrado vermelho | Em qualquer ponto de uma aresta |
| Na guia | Cinzento | Em qualquer ponto de uma linha-guia |
| Na face | Losango azul | Em qualquer ponto de uma face |
| No plano | nenhum | O plano onde começou, quando o cursor está sobre espaço vazio |
| No solo | nenhum | O solo (o plano vermelho-verde), quando não há mais nada |

Quando uma linha de eixo a partir do ponto inicial cruza uma aresta ou uma guia, o ModelCraft faz snap ao cruzamento e a sugestão indica ambos, como "No eixo vermelho, na aresta".

## Qual snap ganha

1. **Pontos** a cerca de 12 pixels: primeiro as extremidades, depois os pontos-guia, os pontos médios, o centro da face sob o cursor e a origem.
2. **Direções** a partir do ponto inicial: os eixos vermelho, verde e azul, e paralelo ou perpendicular à aresta memorizada.
3. **Numa aresta** ou numa linha-guia.
4. **Numa face.**
5. **O plano de desenho**, ou o solo.

As coisas escondidas atrás de uma face nunca fazem snap. Use a {{ui:Orbit}} para ver o ponto que pretende.

## Desenhar numa face a partir de um ponto

Um {{ui:Rectangle}}, {{ui:Circle}} ou {{ui:Polygon}} iniciado num canto, num ponto médio, numa aresta ou no centro de uma face é desenhado **no plano da face sob o cursor**, e corta essa face. Uma aresta pertence a duas faces, por isso o lado da aresta em que está o cursor decide: para desenhar na extremidade de uma caixa comprida, comece no meio de uma das suas arestas com o cursor logo dentro da face da extremidade.

## Paralelo e perpendicular

O ModelCraft memoriza a **última aresta sobre a qual o cursor passou antes do primeiro clique**. Começar num canto ou numa aresta conta como ter passado por essa aresta. Depois de a ferramenta começar a funcionar, outras arestas sobre as quais passe o cursor não substituem essa.

Para desenhar uma linha paralela a uma aresta existente:

1. Prima {{key:L}} e passe o cursor sobre a aresta que quer igualar.
2. Mova até ao ponto inicial, sem atravessar outras arestas pelo caminho, se for possível, e clique.
3. Mova na direção paralela a essa aresta. A linha fica magenta e a sugestão diz "Paralelo à aresta". Perpendicular funciona da mesma forma, dentro do plano onde está a desenhar.

Se a aresta errada foi memorizada, prima {{key:Esc}}, passe o cursor sobre a aresta certa e comece de novo.

## Bloquear uma direção

Depois do primeiro clique de uma ferramenta, pode manter o ponto seguinte sobre uma linha:

| Tecla | Bloqueia em |
|---|---|
| {{key:Right}} | O eixo vermelho |
| {{key:Left}} | O eixo verde |
| {{key:Up}} | O eixo azul (para cima) |
| {{key:Down}} | Paralelo à aresta memorizada (ver acima) |

Prima a mesma seta outra vez para desbloquear. A barra de estado diz "Bloqueado no eixo vermelho. Prima a mesma seta para desbloquear."

Enquanto estiver bloqueado, o ponto desliza ao longo da linha na direção do cursor, e continua alinhado com os pontos sobre os quais passa: passe o cursor sobre o canto de outra caixa para desenhar uma linha ao longo do vermelho exatamente até esse canto.

**{{key:Shift}}** bloqueia a direção a que estiver ativo neste momento (um eixo, ou paralelo), enquanto o mantiver premido. Solte para desbloquear.

Os bloqueios funcionam em {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}}. Antes do primeiro clique, as teclas de seta rodam a vista.

## Dentro de um grupo

Enquanto edita dentro de um grupo ou componente, os eixos são os próprios eixos do grupo (movem-se com ele, e rodam com ele se tiver sido rodado). O snap continua a encontrar pontos e arestas fora do grupo, por isso pode alinhar as coisas com o resto do modelo.
