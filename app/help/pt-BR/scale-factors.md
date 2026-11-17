---
title: Escalar por fatores e compensação de contração
summary: Escale uma seleção por um fator para cada eixo em torno de um ponto escolhido, ou aumente um modelo pela porcentagem que uma peça fundida vai encolher.
keywords: escala, não uniforme, fator, porcentagem, esticar, contração, encolhimento, fundição, modelo, compensação, redimensionar
from: 37e1bbff
---

A ferramenta Escala ({{key:S}}) escala uniformemente ou arrasta um grip para esticar uma ou duas direções. **Escalar por fatores…** (menu Ferramentas, ou o grupo Modificar) é a forma digitada: um número para cada um dos três eixos.

1. Selecione arestas, faces, grupos ou componentes.
2. Abra {{ui:Scale by factors…}}. Digite um fator para vermelho, verde e azul. Um fator pode ser `1.015`, `101.5%` ou `+1.5%` (e `-2%` para reduzir). {{ui:Same on all three axes}} copia o primeiro para os outros dois.
3. Escolha o que **permanece fixo**: o meio da seleção, o canto mais baixo, o meio da base dela ou a origem.
4. A linha abaixo dos campos mostra o tamanho agora e depois. {{ui:Scale}} faz isso em uma única etapa de desfazer.

Os eixos são os do grupo que você tem aberto (os do modelo, no nível superior). Um grupo ou componente girado sai cisalhado se os fatores forem diferentes; escale o grupo que o contém. O conteúdo de um componente não é alterado, então as outras cópias dele permanecem como estão.

## Compensação de contração

Uma peça fundida encolhe ao esfriar, então o seu modelo de fundição é feito maior. Em **Compensação de contração**, digite a porcentagem para cada eixo (seu fundidor ou fabricante de modelos informa o valor para o seu metal; 1.5 % abaixo é apenas um exemplo) e pressione {{ui:Use as the factors}}.

- **A própria porcentagem** faz o fator ser 1 mais a porcentagem: 1.5 % dá 1.015, o que uma régua de contração marca.
- **Exatamente o suficiente** faz o fator ser 1 dividido por um menos a porcentagem: 1.5 % dá 1.0152, de modo que a fundição sai no tamanho da peça depois que ela encolhe essa quantidade.

Suas últimas porcentagens ficam guardadas neste navegador.

:::note
A porcentagem é de sua responsabilidade: o ModelCraft não conhece o seu metal, o molde nem o processo.
:::
