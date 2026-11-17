---
title: Medir e colocar guias
summary: Leia comprimentos e áreas, meça entre dois pontos com a fita métrica e trace linhas-guia e pontos onde desenhar.
keywords: medir, fita métrica, transferidor, ângulo, guia com ângulo, guia, linha-guia, linha de construção, distância, cota, comprimento, área, offset, layout, ponto-guia
from: de6d04d9
---

## Ler dimensões sem medir

Selecione algo e observe {{ui:Entity info}}:

- Uma aresta mostra o seu **comprimento**.
- Uma face mostra a sua **área** e quantos furos tem.
- Várias faces mostram a **área total**.
- Um grupo ou componente mostra o seu **tamanho** (largura × profundidade × altura da caixa envolvente) e, se for um sólido fechado, o seu **volume**.
- Sem nada selecionado, {{ui:Entity info}} mostra o tamanho do modelo inteiro.

Comprimentos e áreas usam a unidade do seletor no canto inferior direito. Um modelo em milímetros mostra áreas de 0.01 m² ou mais em metros quadrados (uma sala de 4 × 3 m aparece como "12 m²").

Enquanto desenha, a caixa de valor mostra o comprimento, o tamanho, o raio ou a distância em tempo real, por isso raramente precisa de medir depois.

Para alterar uma dimensão depois de desenhar, selecione uma aresta ou um grupo e escreva de novo o comprimento ou o tamanho em {{ui:Entity info}}. Ou coloque uma [cota](topic:dimensions) e escreva lá um novo comprimento.

## Medir entre dois pontos

1. Prima {{key:T}} para a ferramenta {{ui:Tape}}.
2. Clique num ponto: um canto, um ponto médio, um ponto numa face ou no solo. (Clicar numa aresta faz outra coisa; ver abaixo.)
3. Mova para o segundo ponto. A ponta e a caixa de valor ({{ui:Length}}) mostram a distância. Faz snap a pontos e às direções vermelha, verde e azul.
4. Clique. A barra de estado diz "Medido 4' 6"." e fica um **ponto-guia** no segundo ponto.

Para deixar o ponto-guia a uma distância exata, escreva-a depois do primeiro clique e prima {{key:Enter}}: fica na direção para onde está a apontar.

## Colocar uma linha-guia

Uma linha-guia é uma linha tracejada sem fim, paralela a uma aresta, à distância que escolher. Utilize as guias para marcar um recuo, uma altura de piso ou onde começa uma janela.

1. Prima {{key:T}}.
2. Clique numa **aresta** (não na sua extremidade). A ponta diz "Na aresta".
3. Afaste-se da aresta, para o lado onde deve ficar a guia. Segue uma linha tracejada, paralela à aresta, e a caixa de valor ({{ui:Offset}}) mostra a distância.
4. Clique, ou escreva o afastamento e prima {{key:Enter}}: `1.5m`, `5'`.

   A barra de estado diz "Linha-guia a 1.5 m da aresta."

Começar numa linha-guia existente cria outra guia paralela a ela, para afastar uma grelha a partir de uma guia.

Se escrever um afastamento sem se afastar primeiro da aresta, o ModelCraft não consegue saber de que lado quer: "Afaste-se primeiro da aresta para indicar o lado."

## Uma guia num ângulo: Transferidor

1. Clique em {{ui:Protractor}} no grupo {{ui:Modify}}.
2. Clique no centro: o ponto por onde a guia passa. Numa face, o transferidor fica nessa face; noutro sítio fica plano. Depois deste clique, {{key:Right}}, {{key:Left}} ou {{key:Up}} põem-no perpendicular ao vermelho, verde ou azul (prima de novo para anular).
3. Clique num ponto que defina 0°, por exemplo ao longo de uma aresta.
4. Mova até ao ângulo pretendido e clique: faz snap a passos de 15°. Ou escreva o ângulo em graus, como `22.5`, e prima {{key:Enter}}; a guia vai para o lado onde está o cursor.

A linha-guia passa pelo centro nesse ângulo. Desenhe ao longo dela com {{ui:Line}} para uma inclinação de telhado, um chanfre ou uma parede em bisel.

## Desenhar com guias

As ferramentas de desenho fazem snap às linhas-guia ("Na guia") e aos pontos-guia ("Ponto-guia"), e ao sítio onde uma linha-guia cruza uma direção de eixo. Comece um retângulo onde duas guias se cruzam para o colocar com exatidão.

## Remover guias

- Uma guia: clique nela com {{ui:Select}} e prima {{key:Delete}}, ou clique nela com a {{ui:Eraser}}.
- Todas as guias: sem nada selecionado, clique em {{ui:Delete all guides}} em {{ui:Entity info}}.

As guias são guardadas no ficheiro `.modelcraft`. Não são exportadas para outros formatos.
