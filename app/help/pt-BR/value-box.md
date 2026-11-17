---
title: Digitar tamanhos exatos na caixa de valores
summary: Todas as formas de digitar comprimentos, tamanhos, pontos, deslocamentos, ângulos, lados e cópias, e como as unidades e os números sem unidade são lidos.
keywords: caixa de valores, caixa de medidas, vcb, digitar, exato, cota, comprimento, unidades, pés, polegadas, métrico, milímetros, coordenadas, deslocamento, matriz, lados, ângulo, vírgula decimal
from: 0148dc3d
---

A caixa de valores fica na barra de status, na parte inferior, com um rótulo que muda conforme a ferramenta. Enquanto você trabalha, ela mostra o tamanho ao vivo; a qualquer momento você pode digitar um exato.

## Como digitar

1. Comece a ação com um clique (o primeiro canto, a face, o ponto a partir do qual mover).
2. Digite. Não é preciso clicar na caixa de valores: um dígito ou um dos caracteres `. , - ' " [ < * /` envia o que você digita para lá.
3. Pressione {{key:Enter}}.

Pressione {{key:Esc}} na caixa de valores para limpá-la e voltar à vista. Em uma tela sensível ao toque, toque na caixa de valores para abrir o teclado.

Se o ModelCraft não conseguir ler o que você digitou, a barra de status diz "Digite um comprimento como 3m, 10'6" ou 4m,3m." Se a ferramenta não puder usá-lo, ela diz "Não funcionou: …" com o motivo.

## Comprimentos

| Digite | Significa |
|---|---|
| `3m` `320cm` `3200mm` | Metros, centímetros, milímetros |
| `10'` `10ft` `10 feet` | Pés |
| `6"` `6in` `6 inches` | Polegadas |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pés e polegadas, com fração |
| `6 1/2"` `6-1/2"` `3/4"` | Polegadas com fração |
| `1.5ft` `.5m` | Decimais com unidade |
| `120` | Um número sem unidade, na unidade do modelo |

**Um número sem unidade usa a unidade do modelo**, como mostrado no seletor no canto inferior direito: polegadas em um modelo de pés e polegadas (então `120` são 10 pés), milímetros em um modelo em milímetros, e assim por diante. Digitar uma unidade sempre prevalece, seja qual for a unidade do modelo. Aspas curvas e marcas de pé e polegada (’ ” ′ ″) também são lidas como pés e polegadas.

:::warning
Use sempre o **ponto** para decimais: `2.5m`. A vírgula separa dois valores, então `2,5` significa 2 e 5 (dois valores), independentemente das configurações de idioma do seu sistema.
:::

## Cálculos

Qualquer comprimento pode ser um cálculo: some com `+`, subtraia com `-`, multiplique com `*`, divida com `/`, e use parênteses. Não é preciso calculadora.

| Digite | Significa |
|---|---|
| `2.5/3` | Um terço de 2.5 (na unidade do modelo) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" em um modelo de pés e polegadas |
| `3m-25cm` | 2.75 m |

Um número sem unidade fica na unidade do modelo quando é um comprimento (`2.5/3` em um modelo em metros é 0.833 m), e é um fator simples quando multiplica ou divide um comprimento (`2*450mm`). Ângulos e fatores também aceitam cálculos: `90/2` é 45°. Dois comprimentos multiplicados formam uma área, não um comprimento, então `2m*3m` é recusado.

Se o ModelCraft não conseguir resolver, a barra de status diz o que está errado e onde, por exemplo "Divisão por zero (caractere 4)." Um parêntese também inicia a caixa de valores, então você pode começar com `(`.

Estes mantêm o seu próprio significado: `/3`, `3x` e `*3` depois de uma cópia, `24s` para lados, e `/3` com uma aresta selecionada (que [divide a aresta](topic:divide)).

## Por ferramenta

| Ferramenta | Rótulo | Digite |
|---|---|---|
| {{ui:Linha}} | {{ui:Comprimento}} | Um comprimento (na direção do ponteiro), ou um ponto ou deslocamento (abaixo) |
| {{ui:Retângulo}} | {{ui:Cotas}} | Dois comprimentos: `4m,3m`, `12',10'`. Ponto e vírgula também funciona: `4m;3m` |
| {{ui:Círculo}}, {{ui:Polígono}} | {{ui:Lados}}, depois {{ui:Raio}} | Antes do primeiro clique, o número de lados: `12s` ou `12` (3 a 999). Depois dele, o raio |
| {{ui:Empurrar/puxar}} | {{ui:Distância}} | Um comprimento. Um negativo vai no sentido contrário |
| {{ui:Mover}} | {{ui:Distância}} | Um comprimento (na direção do ponteiro), ou um ponto ou deslocamento. Depois de uma cópia: `3x`, `*3`, `/3` |
| {{ui:Girar}} | {{ui:Ângulo}} | Graus: `90`, `-45`, `22.5` |
| {{ui:Escala}} | {{ui:Escala}} | Um fator acima de 0: `2`, `0.5`, `1.25` |
| {{ui:Fita métrica}} | {{ui:Deslocar}} ou {{ui:Comprimento}} | Um comprimento |
| {{ui:Dividir}} | {{ui:Partes}} | Quantas partes iguais: `5`, `5s` ou `/5` (2 a 1000). Veja [Dividir uma aresta ou curva em partes iguais](topic:divide) |
| {{ui:Cota}} | {{ui:Deslocar}}, depois {{ui:Comprimento}} | Onde passa a linha da cota; logo após posicioná-la, um novo comprimento redimensiona o modelo |
| {{ui:Selecionar}} | {{ui:Valor}} | Com uma cota ou aresta selecionada, um novo comprimento redimensiona o modelo. Veja [Cota e redimensionamento](topic:dimensions) |

## Pontos e deslocamentos

Para {{ui:Linha}} e {{ui:Mover}}, depois do primeiro clique:

- `[x,y,z]` vai para aquele ponto exato no modelo (nos eixos próprios do grupo, quando você está editando dentro de um grupo). Exemplo: `[0,0,3m]` fica 3 m acima da origem, em linha reta.
- `<dx,dy,dz>` vai essa distância a partir do primeiro ponto ao longo dos eixos vermelho, verde e azul. Exemplo: `<0,0,10'>` fica 10 pés diretamente acima.

Cada um dos três valores pode ter a sua própria unidade: `<12',0,6">`.

## Cópias depois de mover

Logo depois de uma cópia com {{ui:Mover}}:

| Digite | Cria |
|---|---|
| `3x` ou `*3` | 3 cópias em sequência, com o mesmo espaçamento |
| `/3` | 3 cópias distribuídas igualmente entre o original e a primeira cópia |

Até 500 cópias. Veja [Mover, copiar e criar matrizes](topic:move-copy#a-row-of-copies).

## Comprimentos digitados precisam de uma direção

Um único comprimento digitado segue a direção para onde o ponteiro aponta a partir do primeiro clique. Se você digitar logo depois de clicar, antes de mover qualquer coisa, ainda não há direção e nada acontece. Mova o ponteiro um pouco na direção desejada e depois digite.

## A unidade do modelo

Altere a unidade no seletor no canto inferior direito: {{ui:ft e in}}, in, ft, yd, mi, mil, µm, mm, cm, m ou km, desde que estejam ativadas em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} (a própria unidade do modelo sempre está lá). Um comprimento digitado com a marca de qualquer unidade é lido nessa unidade. Veja [Unidades, valores digitados e listas de unidades](common:unit-lists). Ela muda como os comprimentos são mostrados e como os números sem unidade são lidos; o modelo continua do mesmo tamanho. A unidade é salva no arquivo.

Como os tamanhos são mostrados:

| Unidade | Comprimentos | Áreas | Volumes |
|---|---|---|---|
| ft e in | `10' 6 1/2"` (até 1/16") | ft² | ft³ |
| in | `126 1/2"` | in² | in³ |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² a partir de 0.01 m², senão mm² | m³ a partir de 0.01 m³, senão mm³ |

Um modelo novo começa em pés e polegadas quando o idioma do navegador está em uma região dos EUA (e Libéria e Myanmar), e em milímetros no resto do mundo. Uma unidade marcada com estrela em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} é usada no lugar, quando o ModelCraft a tem. Ou altere o seletor depois de {{ui:Novo}}.
