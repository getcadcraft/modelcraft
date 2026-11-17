---
title: Grupos e componentes
summary: Impeça que objetos se unam, edite uma cópia para alterar todas e use os painéis Estrutura e Componentes.
keywords: grupo, componente, criar grupo, criar componente, explodir, tornar único, estrutura, instâncias, cópias, bloco, aninhado, editar grupo, inserir
from: 7cb925f3
---

Geometria solta no ModelCraft gruda: linhas que se tocam se dividem, e faces que compartilham uma aresta se movem juntas. Isso é o que torna possível desenhar sobre faces, mas também significa que uma caixa desenhada encostada em outra se funde com ela. **Grupos** e **componentes** mantêm as coisas separadas.

- Um **grupo** envolve parte da geometria para que ela funcione como um único objeto. Nada fora dele pode grudar nele.
- Um **componente** é um grupo que pode ser inserido várias vezes. Todas as cópias compartilham o mesmo conteúdo: edite uma e todas mudam. Use componentes para tudo o que se repete: janelas, pilares, mesas, árvores.

## Criar um grupo ou um componente

1. Selecione a geometria. Um clique triplo em uma face seleciona o objeto conectado inteiro; um arrasto de janela seleciona tudo dentro da caixa.
2. Pressione {{key:Shift+G}} para um grupo, ou {{key:G}} para um componente. Você também pode clicar em {{ui:Grupo}} ou {{ui:Componente}} no grupo {{ui:Organizar}} da barra de ferramentas, ou em {{ui:Criar grupo (Shift+G)}} ou {{ui:Criar componente (G)}} em {{ui:Informações da entidade}}.

   A barra de status diz "Agrupado como Group#1." ou "Componente criado: Component#1.", o novo objeto fica selecionado e aparece na {{ui:Estrutura}}.

3. Para nomeá-lo, digite um nome no campo {{ui:Nome}} de {{ui:Informações da entidade}} e pressione {{key:Enter}} ou clique fora.

Selecionar uma face traz as suas arestas junto. Se nada estiver selecionado, a barra de status diz "Selecione primeiro alguma geometria (arraste uma janela ou clique três vezes para selecionar tudo o que está conectado)."

Você também pode agrupar grupos: selecione vários grupos e pressione {{key:Shift+G}}. A {{ui:Estrutura}} mostra o aninhamento.

:::note
As letras das teclas seguem os padrões do SketchUp: {{key:G}} cria um componente, {{key:Shift+G}} um grupo.
:::

## Editar dentro de um grupo ou componente

1. Clique duas vezes nele (na vista ou na {{ui:Estrutura}}), ou selecione-o e clique em {{ui:Editar}} em {{ui:Informações da entidade}}.

   O restante do modelo fica esmaecido, os eixos passam para os eixos próprios do grupo, e a {{ui:Estrutura}} mostra "Editando: Modelo › Group#1". A barra de status diz "Editando Group#1. Esc ou clique duas vezes fora fecha o grupo."

2. Desenhe, empurre/puxe, mova e apague normalmente. Tudo o que você fizer fica dentro do grupo.
3. Para fechá-lo: pressione {{key:Esc}} (duas vezes se algo estiver selecionado), clique duas vezes em um espaço vazio, ou clique em {{ui:Fechar grupo}} na {{ui:Estrutura}}.

Enquanto um componente está aberto, cada cópia dele muda conforme você trabalha.

## Inserir mais cópias de um componente

- Copie-o com {{ui:Mover}} e {{key:Ctrl}} (veja [Mover e copiar](topic:move-copy)). Cada cópia é outra inserção do mesmo componente.
- Ou clique em {{ui:Inserir}} ao lado dele no painel {{ui:Componentes}} e clique onde ele deve ir. Sua origem, o canto inferior da caixa em torno do que você selecionou ao criá-lo, cai onde você clicar. Em seguida, a ferramenta volta para {{ui:Selecionar}}.

{{ui:Componentes}} mostra quantas cópias estão inseridas ("4×"), e a {{ui:Estrutura}} mostra a contagem depois do nome.

## Reorganizar na Estrutura

Arraste uma linha na {{ui:Estrutura}} para mudar onde ela pertence. Nada se move na vista: um grupo mantém seu lugar no modelo.

- **Para dentro de um grupo:** solte-o no meio da linha de um grupo (a linha ganha um contorno tracejado). Ele entra por último.
- **Em outra ordem:** solte-o na borda superior ou inferior de uma linha (aparece uma linha indicando o local). Ele fica logo antes ou depois dessa linha, dentro do mesmo grupo dela; assim você também pode colocá-lo em um grupo, em uma posição escolhida.
- **Para o nível superior:** solte-o no cabeçalho da {{ui:Estrutura}}. Ele vai para o fim.

Cada soltura é um passo: {{key:Mod+Z}} o devolve. {{key:Esc}} durante um arrasto não solta nada. Um grupo não pode ir para dentro de si mesmo nem para dentro de um grupo que ele contém. O arrasto fica desativado enquanto {{ui:Localizar pelo nome}} tiver texto.

:::touch
Mantenha o dedo sobre uma linha por um momento e depois arraste-a. Um deslize rápido rola a lista.
:::

## Tornar uma cópia diferente

Selecione a cópia e clique em {{ui:Tornar único}} em {{ui:Informações da entidade}} (exibido quando o componente está inserido mais de uma vez). Essa cópia recebe a própria definição, com o nome do original e um novo número. Edite-a sem alterar as outras.

## Transformar um grupo em componente

Selecione o grupo e clique em {{ui:Criar componente}} em {{ui:Informações da entidade}}. Ele recebe um novo nome, como Component#2, mesmo que você tenha nomeado o grupo; digite o nome novamente em {{ui:Nome}}.

## Explodir

Selecione um grupo ou componente e clique em {{ui:Explodir}} (na barra de ferramentas ou em {{ui:Informações da entidade}}). O conteúdo dele se torna geometria solta no lugar onde estava e passa a grudar no que toca. Grupos dentro dele continuam sendo grupos.

## Sólido e volume

Ao selecionar um grupo ou componente, {{ui:Informações da entidade}} mostra **Sólido: Sim** se suas faces fecham sem lacunas (cada aresta é compartilhada por exatamente duas faces) e não há grupos aninhados dentro dele. Nesse caso, também mostra o **volume**. Uma caixa, uma parede com uma janela recortada e um cilindro puxado são sólidos; uma caixa com a tampa apagada não é.

## Quando a última cópia some

Apagar a última cópia de um componente também o remove do painel {{ui:Componentes}}. {{key:Mod+Z}} o traz de volta.

## Coisas a saber

- Cópias de um **grupo** feitas com Mover compartilham o conteúdo nesta versão, como as cópias de componente: editar uma altera as outras. Para torná-la independente, clique em {{ui:Criar componente}} e depois em {{ui:Tornar único}}. Veja [Solução de problemas](topic:troubleshooting#editing-one-group-changed-another).
- Componentes não fazem aberturas em paredes nem se prendem a faces, e não há biblioteca de componentes prontos. Você cria os seus, ou os importa.
- Arquivos importados chegam como um grupo. Arquivos Collada mantêm dentro deles os próprios grupos e componentes.
