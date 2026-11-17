---
title: Medir e posicionar linhas-guia
summary: Leia comprimentos e áreas, meça a distância entre dois pontos com a fita métrica e posicione linhas-guia e pontos para desenhar sobre eles.
keywords: medir, fita métrica, transferidor, ângulo, linha-guia angular, guia, linha-guia, linha de construção, distância, cota, comprimento, área, deslocamento, layout, ponto-guia
from: de6d04d9
---

## Ler dimensões sem medir

Selecione algo e observe {{ui:Informações da entidade}}:

- Uma aresta mostra seu **comprimento**.
- Uma face mostra sua **área** e quantos furos ela tem.
- Várias faces mostram sua **área total**.
- Um grupo ou componente mostra seu **tamanho** (largura × profundidade × altura da caixa ao seu redor) e, se for um sólido fechado, seu **volume**.
- Com nada selecionado, {{ui:Informações da entidade}} mostra o tamanho do modelo inteiro.

Comprimentos e áreas usam a unidade do seletor no canto inferior direito. Um modelo em milímetros mostra áreas a partir de 0.01 m² em metros quadrados (um cômodo de 4 × 3 m aparece como "12 m²").

Enquanto você desenha, a caixa de valor mostra o comprimento, o tamanho, o raio ou a distância em tempo real, então raramente é preciso medir depois.

Para alterar um tamanho depois de desenhar, selecione uma aresta ou um grupo e digite novamente o comprimento ou o tamanho em {{ui:Informações da entidade}}. Ou posicione uma [cota](topic:dimensions) e digite nela um novo comprimento.

## Medir entre dois pontos

1. Pressione {{key:T}} para a medição com a {{ui:Fita métrica}}.
2. Clique em um ponto: um canto, um ponto médio, um ponto sobre uma face ou o solo. (Clicar em uma aresta faz outra coisa; veja abaixo.)
3. Mova até o segundo ponto. A ponta e a caixa de valor ({{ui:Comprimento}}) mostram a distância. Ela encaixa em pontos e nas direções vermelha, verde e azul.
4. Clique. A barra de status diz "Medido 4' 6"." e um **ponto-guia** fica no segundo ponto.

Para deixar o ponto-guia a uma distância exata, digite-a depois do primeiro clique e pressione {{key:Enter}}: ele vai na direção para onde você está apontando.

## Posicionar uma linha-guia

Uma linha-guia é uma linha tracejada sem fim, paralela a uma aresta, a uma distância que você escolhe. Use linhas-guia para marcar um recuo, uma altura de piso ou onde uma janela começa.

1. Pressione {{key:T}}.
2. Clique em uma **aresta** (não na extremidade). A ponta diz "Na aresta".
3. Afaste-se da aresta, para o lado em que a linha-guia deve ficar. Uma linha tracejada acompanha, paralela à aresta, e a caixa de valor ({{ui:Deslocar}}) mostra a distância.
4. Clique, ou digite o deslocamento e pressione {{key:Enter}}: `1.5m`, `5'`.

   A barra de status diz "Linha-guia a 1.5 m da aresta."

Começar em uma linha-guia existente cria outra guia paralela a ela, para que você possa expandir uma grade a partir de uma guia.

Se você digitar um deslocamento sem antes afastar o ponteiro da aresta, o ModelCraft não consegue saber de que lado você quer: "Afaste o ponteiro da aresta primeiro para indicar o lado."

## Uma guia em ângulo: Transferidor

1. Clique em {{ui:Transferidor}} no grupo {{ui:Modificar}}.
2. Clique no centro: o ponto pelo qual a guia passa. Sobre uma face, o transferidor fica deitado sobre ela; em outros lugares, fica plano. Depois deste clique, {{key:Right}}, {{key:Left}} ou {{key:Up}} o deixam em pé, alinhado ao vermelho, verde ou azul (pressione de novo para desfazer).
3. Clique em um ponto que define 0°, por exemplo ao longo de uma aresta.
4. Mova até o ângulo desejado e clique: ele encaixa em passos de 15°. Ou digite o ângulo em graus, como `22.5`, e pressione {{key:Enter}}; a guia vai para o lado onde está o ponteiro.

A linha-guia passa pelo centro nesse ângulo. Desenhe ao longo dela com {{ui:Linha}} para uma inclinação de telhado, um chanfro ou uma parede inclinada.

## Desenhar sobre guias

As ferramentas de desenho encaixam em linhas-guia ("Na linha-guia") e em pontos-guia ("Ponto-guia"), e também onde uma linha-guia cruza uma direção de eixo. Comece um retângulo onde duas guias se cruzam para posicioná-lo exatamente.

## Remover guias

- Uma guia: clique nela com {{ui:Selecionar}} e pressione {{key:Delete}}, ou clique nela com a {{ui:Borracha}}.
- Todas as guias: com nada selecionado, clique em {{ui:Excluir todas as linhas-guia}} em {{ui:Informações da entidade}}.

As guias são salvas no arquivo `.modelcraft`. Elas não são exportadas para outros formatos.
