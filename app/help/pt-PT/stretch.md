---
title: Componentes que esticam
summary: Torne uma cópia de um componente mais larga, mais funda ou mais alta, enquanto as suas peças mantêm as dimensões: uma mesa mais comprida com as mesmas pernas, uma estante mais alta com as prateleiras mais afastadas, um corrimão cujos postes se repetem.
keywords: componente dinâmico, esticar, redimensionar componente, paramétrico, tamanhos com nome, repetir, matriz, pernas, prateleiras, corrimão, regras, variáveis
from: b4c40f43
---

Escalar um componente torna maior tudo o que nele existe, incluindo as pernas e as travessas. **Esticar esta cópia** altera a largura, a profundidade ou a altura de um componente, e cada peça segue uma regra: o tampo de uma mesa cresce, as pernas mantêm a espessura e continuam nas extremidades.

Funciona com componentes feitos de peças, ou seja, grupos ou componentes dentro do componente, como acontece com tudo o que está na [biblioteca inicial](topic:starter).

## Esticar uma cópia

1. Selecione o componente.
2. Em {{ui:Informações da entidade}}, clique em {{ui:Esticar esta cópia…}}.
3. Escreva a nova {{ui:Largura (vermelho)}}, {{ui:Profundidade (verde)}} e {{ui:Altura (azul)}} e clique em {{ui:Estiramento}}.

Só essa cópia muda: passa a ser um componente próprio, que se recorda do original de onde veio. Pode voltar a esticá-la em qualquer altura, e é recalculada a partir do original, pelo que nada se desvia. As outras cópias do original mantêm-se como estavam.

## As regras

Abra o componente (faça duplo clique) e selecione uma das suas peças. {{ui:Informações da entidade}} mostra {{ui:Quando o componente estica}}, com uma regra ao longo do vermelho, do verde e do azul:

| Regra | O que a peça faz | Por exemplo |
|---|---|---|
| {{ui:Estiramento}} | Cresce com o componente; as distâncias aos dois lados mantêm-se | O tampo de uma mesa |
| {{ui:Ficar no início}} / {{ui:Ficar no fim}} | Mantém o tamanho e a distância a esse lado | Pernas |
| {{ui:Mover em proporção}} | Mantém o tamanho; o meio move-se em proporção | Prateleiras, um puxador de porta |
| {{ui:Mudar a escala em proporção}} | A posição e o tamanho variam em proporção | Os degraus de uma escada |
| {{ui:Repetir}} | Cópias dela, a intervalos de {{ui:A cada}}, desde onde começa até ao lado oposto | Os postes de um corrimão |

{{ui:Automáticas}} (o valor inicial) calcula qual destas regras usar e mostra qual: {{ui:Estiramento}} quando a peça atravessa o componente, {{ui:Mover em proporção}} quando está mais ou menos no meio, caso contrário fica do lado a que está mais próxima.

## Coisas a saber

- As formas próprias das peças são partilhadas, pelo que uma cópia esticada é leve. Editar uma peça altera-a em todas as cópias.
- Uma cópia esticada não acompanha alterações posteriores às regras ou à disposição do original: volte a esticá-la para as incorporar.
- As faces desenhadas soltas no componente (e não numa peça) mantêm o tamanho; torne-as numa peça para que acompanhem.
- As regras e o original de que cada cópia foi esticada ficam guardados no ficheiro ModelCraft.
