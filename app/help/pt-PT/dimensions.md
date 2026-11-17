---
title: Cotar e redimensionar o que desenhou
summary: Coloque cotas entre cantos, em arcos e círculos, ou entre duas arestas; escreva um novo comprimento para redimensionar o modelo. Escreva de novo o comprimento de uma aresta, ou a largura, profundidade e altura de um grupo, em Informações da entidade.
keywords: cota, cotas, redimensionar, alterar tamanho, editar tamanho, comprimento, largura, profundidade, altura, esticar, cota de controlo, anotar, medir, depois do facto, raio, diâmetro, ângulo, angular, arco, círculo, R, Ø
from: a1f815ec
---

Os tamanhos no ModelCraft não ficam fixos depois de algo ser desenhado. Uma cota mostra um comprimento no modelo, e escrever um novo comprimento nela redimensiona o modelo para corresponder. Também pode escrever de novo o comprimento de uma aresta, ou a largura, profundidade e altura de um grupo, em {{ui:Informações da entidade}}.

## Colocar uma cota

1. Prima {{key:D}}, ou clique em {{ui:Cota}} na barra de ferramentas.
2. Clique num canto de onde medir. Encaixa em cantos, pontos médios e arestas, como acontece no desenho.
3. Clique no segundo canto.

   Ou clique uma vez numa **aresta** (a sugestão diz "Na aresta") para cotar essa aresta inteira com um clique.
4. Mova o cursor até onde deve ficar a linha de cota, e clique. Também pode escrever o afastamento, como `0.5m`, e premir {{key:Enter}}.

   A linha de cota fica nivelada para uma aresta horizontal, a não ser que se olhe para ela de lado. Para uma aresta vertical, fica no plano vertical que melhor a enfrenta.

A barra de estado diz "Cota 4 m." As cotas mostram o comprimento na unidade do modelo e atualizam-se quando muda a unidade no seletor.

## Raio, diâmetro e ângulo

A mesma ferramenta {{ui:Cota}} cota também arredondamentos e ângulos:

- **Um arco:** clique no arco. A sugestão diz {{ui:Raio}}. Mova o cursor até onde deve ficar o texto e clique: a cota lê **R 1.5 m**.
- **Um círculo:** clique no círculo. Obtém um **diâmetro** (**Ø 3 m**) com uma linha que atravessa o círculo pelo centro. Os polígonos funcionam da mesma forma, com os seus cantos no círculo.
- **O ângulo entre duas arestas:** clique numa aresta, depois clique numa segunda aresta que se encontre com ela num canto (enquanto estiver sobre ela, a sugestão diz {{ui:Ângulo entre as arestas}}). Depois mova para dentro do ângulo que pretende, e clique. Dentro do canto obtém o ângulo entre as arestas; se mover para um lado, obtém o ângulo adjacente (por exemplo 150° em vez de 30°). A distância ao canto a que clica define onde fica o arco; ou escreva essa distância.

Para passar um raio a diâmetro ou vice-versa, selecione a cota e escolha em {{ui:Mostrar como}} em {{ui:Informações da entidade}}.

**Redimensionar com eles:** escreva um novo raio ou diâmetro logo depois de colocar um, ou selecione-o mais tarde e escreva. O arco ou círculo mantém o seu centro e muda de tamanho; uma face que limita (um disco, a extremidade de uma ranhura) muda com ele. Duas coisas só medem:

- **Uma cota de ângulo** nunca altera o modelo. Para mudar um ângulo, rode as arestas com {{ui:Rodar}}.
- **O círculo na extremidade de um cilindro** (um círculo que puxou com {{ui:Empurrar/puxar}}) não pode ser redimensionado a partir da sua cota, porque as suas laterais também teriam de mudar. Escale o cilindro em vez disso, em torno do seu eixo.

## Redimensionar o modelo com uma cota

Logo depois de colocar uma cota, escreva um novo comprimento e prima {{key:Enter}}: `6m`, `12'`, `3500` num modelo em milímetros. O modelo muda para esse tamanho.

Mais tarde, a qualquer momento:

1. Com {{ui:Selecionar}}, clique no texto ou na linha da cota. {{ui:Informações da entidade}} diz **Cota** e mostra o seu {{ui:Comprimento}}.
2. Escreva o novo comprimento e prima {{key:Enter}}. Pode escrever diretamente na caixa de valores, ou na caixa {{ui:Comprimento}} em {{ui:Informações da entidade}}.

### O que se move

O segundo canto que clicou move-se, e também tudo o que está para além dele:

- **Ambos os cantos numa só peça** (a largura de uma caixa, a altura de uma parede): o lado do canto móvel desliza para fora ou para dentro, e as faces ligadas a ele esticam-se. Uma caixa mantém-se como sólido fechado, e tudo o que esteja inteiramente desse lado, como um componente de janela, move-se com ela.
- **Os cantos em duas peças separadas** (o espaço entre duas caixas): a peça do canto móvel move-se inteira, e o espaço muda.
- **O canto móvel dentro de um grupo ou componente em que o outro canto não está**: move-se o grupo inteiro.
- **Ambos os cantos dentro do mesmo grupo ou componente**: estica-se por dentro. Um componente muda em todos os sítios onde está colocado, como acontece sempre que o edita.

Para mudar a extremidade que se move, selecione a cota e escolha em {{ui:Move-se}} em {{ui:Informações da entidade}}:

| Escolha | O que acontece |
|---|---|
| {{ui:Segunda extremidade}} (a predefinida) | Move-se a extremidade que clicou em segundo lugar |
| {{ui:Primeira extremidade}} | Move-se a extremidade que clicou em primeiro lugar |
| {{ui:As duas extremidades (ao centro)}} | Cada extremidade move metade da alteração, para que o meio fique parado |

### Quando um redimensionamento é recusado

O ModelCraft não altera nada e diz porquê na barra de estado:

- "a face would bend out of its plane" (uma face se dobraria para fora do seu plano): a cota corre inclinada através da forma. Cote ao longo de uma aresta, ou ao longo do vermelho, do verde ou do azul.
- "a face would shrink to nothing or turn inside out" (uma face se reduziria a nada ou ficaria do avesso): o novo comprimento é curto demais para a forma.
- "the end that moves is not on a corner of the model" (a extremidade que se move não está num canto do modelo): essa extremidade foi colocada em espaço vazio ou no meio de uma aresta. Escolha a outra extremidade em {{ui:Move-se}}, ou coloque a cota em dois cantos.
- "a length must be above zero" (um comprimento tem de ser superior a zero).

Cada redimensionamento é um passo: {{key:Mod+Z}} anula-o.

## Escrever de novo um tamanho em Informações da entidade

Nem sempre precisa de uma cota:

- **Uma aresta:** selecione-a. O seu {{ui:Comprimento}} em {{ui:Informações da entidade}} é uma caixa onde pode escrever. Escrever um comprimento na caixa de valores também funciona. Move-se a extremidade mais adiante no vermelho, depois no verde, depois no azul, e o que está ligado a ela estica-se. Por exemplo, escrever de novo a aresta inferior frontal de uma caixa torna a caixa mais larga para a direita.
- **Um grupo ou componente:** selecione-o. {{ui:Largura (vermelho)}}, {{ui:Profundidade (verde)}} e {{ui:Altura (azul)}} são caixas. O seu lado mais afastado (direita, trás, topo) move-se. Estes são os eixos próprios do grupo, antes de qualquer rotação que lhe tenha dado.

Prima {{key:Enter}} para aplicar, ou {{key:Esc}} para repor o valor antigo.

## As cotas seguem o modelo

Uma cota fica presa aos dois cantos onde foi colocada (um ângulo: ao seu canto e às extremidades distantes das suas duas arestas; um raio ou diâmetro: ao seu arco ou círculo). Mova, use Empurrar/puxar ou redimensione a geometria, e a cota segue e mostra o novo comprimento. Continua presa quando transforma a geometria num grupo ou componente.

Se uma extremidade foi colocada noutro sítio que não um canto (numa face, ou em espaço vazio), ou se o seu canto for apagado, essa extremidade fica onde estava. A cota continua a medir, mas só pode redimensionar a partir da sua outra extremidade.

## Remover cotas

- Uma cota: selecione-a e prima {{key:Delete}}, ou clique nela com a {{ui:Borracha}}.
- Todas as cotas: sem nada selecionado, clique em {{ui:Eliminar todas as cotas}} em {{ui:Informações da entidade}}.

As cotas são guardadas no ficheiro `.modelcraft`. Não são exportadas para outros formatos, que levam apenas o modelo 3D. Um ficheiro com cotas continua a abrir num ModelCraft mais antigo, sem elas.
