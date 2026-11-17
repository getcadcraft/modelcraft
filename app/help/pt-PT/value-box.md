---
title: Escrever medidas exatas na caixa de valores
summary: Todas as formas de escrever comprimentos, tamanhos, pontos, deslocamentos, ângulos, lados e cópias, e a forma como as unidades e os números sem unidade são lidos.
keywords: caixa de valores, vcb, escrever, exato, cota, comprimento, unidades, pés, polegadas, métrico, milímetros, coordenadas, deslocamento, matriz, lados, ângulo, vírgula decimal
from: 0148dc3d
---

A caixa de valores fica na barra de estado, em baixo, com um rótulo que muda com a ferramenta. Enquanto trabalha, mostra o tamanho em tempo real; a qualquer momento pode escrever um tamanho exato.

## Como escrever

1. Inicie a ação com um clique (o primeiro canto, a face, o ponto de onde se move).
2. Escreva. Não é preciso clicar na caixa de valores: um algarismo ou um dos caracteres `. , - ' " [ < * /` envia a escrita para lá.
3. Prima {{key:Enter}}.

Prima {{key:Esc}} na caixa de valores para a limpar e voltar à vista. Num ecrã tátil, toque na caixa de valores para mostrar o teclado.

Se o ModelCraft não conseguir ler o que escreveu, a barra de estado indica «Escreva um comprimento, como 3m, 10'6" ou 4m,3m.» Se a ferramenta não o puder usar, indica «Não funcionou: …» com o motivo.

## Comprimentos

| Escrever | Significa |
|---|---|
| `3m` `320cm` `3200mm` | Metros, centímetros, milímetros |
| `10'` `10ft` `10 feet` | Pés |
| `6"` `6in` `6 inches` | Polegadas |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pés e polegadas, com fração |
| `6 1/2"` `6-1/2"` `3/4"` | Polegadas com fração |
| `1.5ft` `.5m` | Decimais com unidade |
| `120` | Um número sem unidade, na unidade do modelo |

**Um número sem unidade usa a unidade do modelo**, tal como indicado no seletor, em baixo à direita: polegadas num modelo em pés e polegadas (assim `120` são 10 pés), milímetros num modelo em milímetros, e assim por diante. Escrever uma unidade prevalece sempre, seja qual for a unidade do modelo. Aspas curvas e marcas de primo (’ ” ′ ″) são lidas também como pés e polegadas.

:::warning
Use sempre um **ponto** para as casas decimais: `2.5m`. Uma vírgula separa dois valores, por isso `2,5` significa 2 e 5 (dois valores), seja qual for a definição de idioma.
:::

## Cálculos

Qualquer comprimento pode ser um cálculo: adicione com `+`, subtraia com `-`, multiplique com `*`, divida com `/`, e use parênteses. Não é preciso calculadora.

| Escrever | Significa |
|---|---|
| `2.5/3` | Um terço de 2.5 (na unidade do modelo) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" num modelo em pés e polegadas |
| `3m-25cm` | 2.75 m |

Um número sem unidade fica na unidade do modelo quando é um comprimento (`2.5/3` num modelo em metros é 0.833 m), e é um fator simples quando multiplica ou divide um comprimento (`2*450mm`). Ângulos e fatores também aceitam cálculos: `90/2` é 45°. Dois comprimentos multiplicados dão uma área, e não um comprimento; por isso `2m*3m` é recusado.

Se o ModelCraft não conseguir calcular, a barra de estado indica o que está errado e onde, por exemplo «Divisão por zero (carácter 4).» Um parêntese também abre a caixa de valores, por isso pode começar com `(`.

Estes mantêm o seu próprio significado: `/3`, `3x` e `*3` depois de uma cópia, `24s` para lados, e `/3` com uma aresta selecionada (que [divide a aresta](topic:divide)).

## Por ferramenta

| Ferramenta | Rótulo | Escrever |
|---|---|---|
| {{ui:Linha}} | {{ui:Comprimento}} | Um comprimento (na direção do cursor), ou um ponto ou deslocamento (abaixo) |
| {{ui:Retângulo}} | {{ui:Cotas}} | Dois comprimentos: `4m,3m`, `12',10'`. Um ponto e vírgula também funciona: `4m;3m` |
| {{ui:Círculo}}, {{ui:Polígono}} | {{ui:Lados}}, depois {{ui:Raio}} | Antes do primeiro clique, o número de lados: `12s` ou `12` (3 a 999). Depois dele, o raio |
| {{ui:Empurrar/puxar}} | {{ui:Distância}} | Um comprimento. Um negativo vai no sentido contrário |
| {{ui:Mover}} | {{ui:Distância}} | Um comprimento (na direção do cursor), ou um ponto ou deslocamento. Depois de uma cópia: `3x`, `*3`, `/3` |
| {{ui:Rodar}} | {{ui:Ângulo}} | Graus: `90`, `-45`, `22.5` |
| {{ui:Escala}} | {{ui:Escala}} | Um fator superior a 0: `2`, `0.5`, `1.25` |
| {{ui:Fita métrica}} | {{ui:Offset}} ou {{ui:Comprimento}} | Um comprimento |
| {{ui:Dividir}} | {{ui:Partes}} | Quantas partes iguais: `5`, `5s` ou `/5` (2 a 1000). Ver [Dividir uma aresta ou curva em partes iguais](topic:divide) |
| {{ui:Cota}} | {{ui:Offset}}, depois {{ui:Comprimento}} | Onde fica a linha de cota; logo após a colocação, um novo comprimento redimensiona o modelo |
| {{ui:Selecionar}} | {{ui:Valor}} | Com uma cota ou aresta selecionada, um novo comprimento redimensiona o modelo. Ver [Cotar e redimensionar](topic:dimensions) |

## Pontos e deslocamentos

Para {{ui:Linha}} e {{ui:Mover}}, depois do primeiro clique:

- `[x,y,z]` vai para esse ponto exato do modelo (nos eixos próprios do grupo, quando está a editar dentro de um grupo). Exemplo: `[0,0,3m]` fica 3 m exatamente acima da origem.
- `<dx,dy,dz>` vai essa distância a partir do primeiro ponto, ao longo do vermelho, do verde e do azul. Exemplo: `<0,0,10'>` são 10 pés diretamente para cima.

Cada um dos três valores pode ter a sua própria unidade: `<12',0,6">`.

## Cópias depois de mover

Logo a seguir a uma cópia com {{ui:Mover}}:

| Escrever | Cria |
|---|---|
| `3x` ou `*3` | 3 cópias seguidas, com o mesmo espaçamento |
| `/3` | 3 cópias distribuídas uniformemente desde o original até à primeira cópia |

Até 500 cópias. Ver [Mover, copiar e criar matrizes](topic:move-copy#a-row-of-copies).

## Comprimentos escritos precisam de uma direção

Um único comprimento escrito segue a direção em que o cursor aponta a partir do primeiro clique. Se escrever logo após clicar, antes de mover, ainda não há direção e nada acontece. Mova o cursor um pouco na direção para onde quer ir e só depois escreva.

## A unidade do modelo

Mude a unidade no seletor, em baixo à direita: {{ui:ft e in}}, in, ft, yd, mi, mil, µm, mm, cm, m ou km, desde que estejam ativadas em {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} (a unidade própria do modelo está sempre disponível). Um comprimento escrito com a marca de qualquer unidade é lido nessa unidade. Ver [Unidades, valores escritos e listas de unidades](common:unit-lists). A unidade muda a forma como os comprimentos são mostrados e como os números sem unidade são lidos; o modelo mantém o mesmo tamanho. A unidade fica guardada no ficheiro.

Como os tamanhos são mostrados:

| Unidade | Comprimentos | Áreas | Volumes |
|---|---|---|---|
| ft e in | `10' 6 1/2"` (até 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² a partir de 0.01 m², senão mm² | m³ a partir de 0.01 m³, senão mm³ |

Um modelo novo começa em pés e polegadas quando o idioma do navegador está definido para uma região dos EUA (e a Libéria e o Myanmar), e em milímetros em todos os outros casos. Em vez disso, é usada a unidade assinalada com estrela em {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}}, quando o ModelCraft a tem. Ou altere o seletor depois de {{ui:Novo}}.
