---
title: Cotar e redimensionar o que você desenhou
summary: Posicione cotas entre cantos, em arcos e círculos, ou entre duas arestas; digite um novo comprimento para redimensionar o modelo. Digite de novo o comprimento de uma aresta, ou a largura, a profundidade e a altura de um grupo, em Informações da entidade.
keywords: cota, cotas, redimensionar, alterar tamanho, editar tamanho, comprimento, largura, profundidade, altura, esticar, cota de acionamento, anotar, medir, depois do fato, raio, diâmetro, ângulo, angular, arco, círculo, R, Ø
from: a1f815ec
---

Os tamanhos no ModelCraft não ficam fixos depois que algo é desenhado. Uma cota mostra um comprimento no modelo, e digitar um novo comprimento nela redimensiona o modelo para corresponder. Você também pode digitar de novo o comprimento de uma aresta, ou a largura, a profundidade e a altura de um grupo, em {{ui:Informações da entidade}}.

## Posicionar uma cota

1. Pressione {{key:D}}, ou clique em {{ui:Cota}} na barra de ferramentas.
2. Clique em um canto de onde medir. Ele faz snap em cantos, pontos médios e arestas, como no desenho.
3. Clique no segundo canto.

   Ou clique uma vez em uma **aresta** (a dica diz "Na aresta") para cotar a aresta inteira com um clique.
4. Mova o cursor até onde a linha de cota deve ficar e clique. Você também pode digitar o deslocamento, como `0.5m`, e pressionar {{key:Enter}}.

   A linha de cota fica nivelada para uma aresta nivelada, a menos que você esteja olhando de lado. Para uma aresta vertical, ela fica no plano vertical que melhor fica de frente para você.

A barra de status diz "Cota 4 m." As cotas mostram o comprimento na unidade do modelo e são atualizadas quando você muda a unidade no seletor.

## Raio, diâmetro e ângulo

A mesma ferramenta {{ui:Cota}} cota coisas redondas e ângulos:

- **Um arco:** clique no arco. A dica diz {{ui:Raio}}. Mova o cursor até onde o texto deve ficar e clique: a cota lê **R 1.5 m**.
- **Um círculo:** clique no círculo. Você obtém um **diâmetro** (**Ø 3 m**) com uma linha atravessando o círculo pelo centro. Polígonos funcionam da mesma forma, com seus cantos sobre o círculo.
- **O ângulo entre duas arestas:** clique em uma aresta e depois em uma segunda aresta que encontra a primeira em um canto (enquanto estiver sobre ela, a dica diz {{ui:Ângulo entre as arestas}}). Depois mova para dentro do ângulo desejado e clique. Dentro do canto você obtém o ângulo entre as arestas; mova para um dos lados e obtém o ângulo ao lado (por exemplo 150° em vez de 30°). A distância do canto onde você clica define onde fica o arco; ou digite essa distância.

Para trocar um raio por um diâmetro ou vice-versa, selecione a cota e escolha em {{ui:Mostrar como}} em {{ui:Informações da entidade}}.

**Redimensionar com elas:** digite um novo raio ou diâmetro logo após posicionar um, ou selecione-o depois e digite. O arco ou círculo mantém seu centro e muda de tamanho; uma face que ele delimita (um disco, a ponta de um rasgo) muda junto. Duas coisas apenas medem:

- **Uma cota de ângulo** nunca altera o modelo. Para mudar um ângulo, gire as arestas com {{ui:Girar}}.
- **O círculo na extremidade de um cilindro** (um círculo que você puxou com {{ui:Empurrar/puxar}}) não pode ser redimensionado pela sua cota, porque suas laterais também teriam de mudar. Escale o cilindro, em torno do seu eixo, no lugar.

## Redimensionar o modelo com uma cota

Logo após posicionar uma cota, digite um novo comprimento e pressione {{key:Enter}}: `6m`, `12'`, `3500` em um modelo em milímetros. O modelo muda para esse tamanho.

Depois, a qualquer momento:

1. Com {{ui:Selecionar}}, clique no texto ou na linha da cota. {{ui:Informações da entidade}} diz **Cota** e mostra seu {{ui:Comprimento}}.
2. Digite o novo comprimento e pressione {{key:Enter}}. Você pode digitar direto na caixa de valor, ou na caixa {{ui:Comprimento}} em {{ui:Informações da entidade}}.

### O que se move

O segundo canto em que você clicou se move, e tudo além dele também:

- **Os dois cantos em uma mesma peça** (a largura de uma caixa, a altura de uma parede): o lado no canto que se move desliza para fora ou para dentro, e as faces unidas a ele se esticam. Uma caixa continua sendo um sólido fechado, e qualquer coisa inteiramente apoiada nesse lado, como um componente de janela, se move com ela.
- **Os cantos em duas peças separadas** (a folga entre duas caixas): a peça do canto que se move se desloca inteira, e a folga muda.
- **O canto que se move dentro de um grupo ou componente** que não contém o outro canto: o grupo inteiro se move.
- **Os dois cantos dentro do mesmo grupo ou componente**: ele é esticado por dentro. Um componente muda em todos os lugares onde está posicionado, como sempre acontece ao editá-lo.

Para mudar qual extremidade se move, selecione a cota e escolha em {{ui:Move}} em {{ui:Informações da entidade}}:

| Opção | O que acontece |
|---|---|
| {{ui:Segunda extremidade}} (o padrão) | A extremidade em que você clicou por segundo se move |
| {{ui:Primeira extremidade}} | A extremidade em que você clicou primeiro se move |
| {{ui:Ambas as extremidades (centralizado)}} | Cada extremidade se move metade da mudança, então o meio permanece parado |

### Quando um redimensionamento é recusado

O ModelCraft não altera nada e informa o motivo na barra de status:

- "uma face se curvaria para fora do seu plano": a cota corre inclinada através da forma. Cote ao longo de uma aresta, ou ao longo do vermelho, do verde ou do azul.
- "uma face encolheria a nada ou viraria do avesso": o novo comprimento é curto demais para a forma.
- "a extremidade que se move não está em um canto do modelo": essa extremidade foi posicionada em espaço vazio ou no meio de uma aresta. Escolha a outra extremidade em {{ui:Move}}, ou posicione a cota em dois cantos.
- "um comprimento precisa ser maior que zero".

Cada redimensionamento é uma etapa: {{key:Mod+Z}} o desfaz.

## Digitar um tamanho de novo em Informações da entidade

Você nem sempre precisa de uma cota:

- **Uma aresta:** selecione-a. Seu {{ui:Comprimento}} em {{ui:Informações da entidade}} é uma caixa onde você pode digitar. Digitar um comprimento na caixa de valor também funciona. A extremidade mais adiante no sentido do vermelho, depois do verde, depois do azul se move, e o que está unido a ela se estica. Por exemplo, digitar de novo a aresta inferior frontal de uma caixa a torna mais larga para a direita.
- **Um grupo ou componente:** selecione-o. {{ui:Largura (vermelho)}}, {{ui:Profundidade (verde)}} e {{ui:Altura (azul)}} são caixas. O lado distante dele (direita, trás, topo) se move. Esses são os eixos próprios do grupo, antes de qualquer rotação que você tenha aplicado.

Pressione {{key:Enter}} para aplicar, ou {{key:Esc}} para devolver o valor anterior.

## As cotas acompanham o modelo

Uma cota fica presa aos dois cantos em que foi posicionada (um ângulo: ao seu canto e às extremidades distantes de suas duas arestas; um raio ou diâmetro: ao seu arco ou círculo). Mova, empurre/puxe ou redimensione a geometria, e a cota acompanha e mostra o novo comprimento. Ela continua presa quando você transforma a geometria em um grupo ou componente.

Se uma extremidade foi posicionada em um lugar que não é canto (em uma face ou em espaço vazio), ou se o canto dela foi apagado, essa extremidade permanece onde estava. A cota continua medindo, mas só pode redimensionar a partir da outra extremidade.

## Remover cotas

- Uma cota: selecione-a e pressione {{key:Delete}}, ou clique nela com a {{ui:Borracha}}.
- Todas as cotas: sem nada selecionado, clique em {{ui:Excluir todas as cotas}} em {{ui:Informações da entidade}}.

As cotas são salvas no arquivo `.modelcraft`. Elas não são exportadas para outros formatos, que levam apenas o modelo 3D. Um arquivo com cotas ainda abre em um ModelCraft mais antigo, sem elas.
