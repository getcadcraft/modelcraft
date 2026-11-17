---
title: Componentes que esticam
summary: Torne uma cópia de um componente mais larga, mais profunda ou mais alta enquanto suas partes mantêm seus tamanhos: uma mesa mais comprida com os mesmos pés, uma estante mais alta com as prateleiras mais espaçadas, um guarda-corpo cujos montantes se repetem.
keywords: componente dinâmico, esticar, redimensionar componente, paramétrico, tamanhos nomeados, repetir, matriz, pés, prateleiras, guarda-corpo, regras, variáveis
from: b4c40f43
---

Escalar um componente aumenta tudo o que há nele, inclusive pés e travessas. **Esticar esta cópia** altera a largura, a profundidade ou a altura de um componente, e cada parte segue uma regra: o tampo de uma mesa cresce, e seus pés mantêm a espessura e continuam nas extremidades.

Funciona em componentes formados por partes, ou seja, grupos ou componentes dentro do componente, como todo item da [biblioteca inicial](topic:starter).

## Esticar uma cópia

1. Selecione o componente.
2. Em {{ui:Informações da entidade}}, clique em {{ui:Esticar esta cópia…}}.
3. Digite a nova {{ui:Largura (vermelho)}}, {{ui:Profundidade (verde)}} e {{ui:Altura (azul)}}, e clique em {{ui:Esticamento}}.

Só essa cópia muda: ela se torna um componente próprio, que guarda o original de onde veio. Estique-a de novo quando quiser, e ela é recalculada a partir do original, então nada se desalinha. As outras cópias do original permanecem como estavam.

## As regras

Abra o componente (clique duas vezes nele) e selecione uma de suas partes. {{ui:Informações da entidade}} mostra {{ui:Quando o componente é esticado}}, com uma regra ao longo do vermelho, do verde e do azul:

| Regra | O que a parte faz | Por exemplo |
|---|---|---|
| {{ui:Esticamento}} | Cresce com o componente; suas distâncias até os dois lados se mantêm | O tampo de uma mesa |
| {{ui:Ficar no início}} / {{ui:Ficar no fim}} | Mantém seu tamanho e sua distância até aquele lado | Pés |
| {{ui:Mover proporcionalmente}} | Mantém seu tamanho; seu meio se move na proporção | Prateleiras, maçaneta de porta |
| {{ui:Mudar a escala proporcionalmente}} | Posição e tamanho acompanham a proporção | Os degraus de uma escada |
| {{ui:Repetir}} | Cópias dela, a cada {{ui:A cada}}, desde onde começa até o lado oposto | Os montantes de um guarda-corpo |

{{ui:Automáticas}} (o valor inicial) calcula a regra e mostra qual é: {{ui:Esticamento}} quando a parte atravessa o componente, {{ui:Mover proporcionalmente}} quando ela fica mais ou menos no meio, e, caso contrário, permanece do lado mais próximo.

## Coisas a saber

- As formas das partes são compartilhadas, então uma cópia esticada é leve. Editar uma parte altera-a em todas as cópias.
- Uma cópia esticada não acompanha mudanças posteriores nas regras ou na disposição do original: estique-a de novo para incorporá-las.
- Faces desenhadas soltas no componente (não em uma parte) mantêm seu tamanho; transforme-as em uma parte para que acompanhem.
- As regras e o original de cada cópia esticada são salvos no arquivo do ModelCraft.
