---
title: Escalar por fatores e margem de retração
summary: Escale uma seleção por um fator para cada eixo em torno de um ponto escolhido, ou aumente um modelo pela percentagem que uma peça fundida vai retrair.
keywords: escala, não uniforme, fator, percentagem, esticar, retração, encolhimento, fundição, modelo, margem, redimensionar
from: 37e1bbff
---

A ferramenta Escala ({{key:S}}) escala de forma uniforme ou arrasta uma pega para esticar uma ou duas direções. **Escalar por fatores…** (menu Ferramentas, ou grupo Modificar) é a forma escrita: um número para cada um dos três eixos.

1. Selecione arestas, faces, grupos ou componentes.
2. Abra {{ui:Escalar por fatores…}}. Escreva um fator para vermelho, verde e azul. Um fator pode ser `1.015`, `101.5%` ou `+1.5%` (e `-2%` para reduzir). {{ui:Igual nos três eixos}} copia o primeiro para os outros dois.
3. Escolha o que **fica no mesmo sítio**: o centro da seleção, o seu canto inferior, o centro da sua base ou a origem.
4. A linha sob os campos mostra o tamanho agora e depois. {{ui:Escala}} faz a operação num único passo de anulação.

Os eixos são os do grupo que tem aberto (os do modelo, no nível de topo). Um grupo ou componente que esteja rodado sai inclinado se os fatores forem diferentes; escale antes o grupo que o contém. O conteúdo de um componente não é alterado, pelo que as suas outras cópias ficam como estão.

## Margem de retração

Uma peça fundida encolhe ao arrefecer, por isso o seu modelo de fundição é feito maior. Em **Margem de retração**, escreva a percentagem para cada eixo (a sua fundição ou o seu fabricante de modelos fornece-a para o seu metal; 1.5 % abaixo é apenas um exemplo) e prima {{ui:Usar como fatores}}.

- **A própria percentagem** dá o fator 1 mais a percentagem: 1.5 % dá 1.015, o que marca uma régua de retração.
- **Exatamente o necessário** dá o fator 1 a dividir por um menos a percentagem: 1.5 % dá 1.0152, pelo que a peça fundida sai com o tamanho da peça depois de retrair essa quantidade.

As suas últimas percentagens ficam guardadas neste navegador.

:::note
A percentagem é dada por si: o ModelCraft não conhece o seu metal, o seu molde nem o seu processo.
:::
