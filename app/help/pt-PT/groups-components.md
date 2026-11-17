---
title: Grupos e componentes
summary: Evite que os objetos fiquem colados entre si, edite uma cópia para alterar todas e use os painéis Estrutura e Componentes.
keywords: grupo, componente, criar grupo, criar componente, explodir, tornar único, estrutura, instâncias, cópias, bloco, aninhado, editar grupo, colocar
from: 7cb925f3
---

A geometria solta no ModelCraft fica colada: linhas que se tocam dividem-se mutuamente, e faces que partilham uma aresta movem-se em conjunto. Isso é o que torna possível desenhar sobre faces, mas também significa que uma caixa desenhada encostada a outra se funde com ela. **Grupos** e **componentes** mantêm as coisas separadas.

- Um **grupo** envolve alguma geometria para que funcione como um único objeto. Nada do exterior se pode colar a ele.
- Um **componente** é um grupo que pode ser colocado muitas vezes. Todas as cópias partilham o mesmo conteúdo: edite uma e todas mudam. Utilize componentes para tudo o que se repete: janelas, colunas, secretárias, árvores.

## Criar um grupo ou um componente

1. Selecione a geometria. Um clique triplo numa face seleciona o objeto ligado inteiro; um arrastamento de janela seleciona tudo o que está dentro da caixa.
2. Prima {{key:Shift+G}} para um grupo, ou {{key:G}} para um componente. Também pode clicar em {{ui:Group}} ou {{ui:Component}} no grupo {{ui:Organize}} da barra de ferramentas, ou em {{ui:Make group (Shift+G)}} ou {{ui:Make component (G)}} em {{ui:Entity info}}.

   A barra de estado diz "Agrupado como Group#1." ou "Componente Component#1 criado.", o novo objeto fica selecionado e aparece na {{ui:Outliner}}.

3. Para lhe atribuir um nome, escreva-o no campo {{ui:Name}} de {{ui:Entity info}} e prima {{key:Enter}} ou clique fora.

Selecionar uma face traz as suas arestas consigo. Se nada estiver selecionado, a barra de estado diz: "Selecione primeiro alguma geometria (arraste uma janela ou faça um clique triplo para selecionar tudo o que estiver ligado)."

Também pode agrupar grupos: selecione vários grupos e prima {{key:Shift+G}}. A {{ui:Outliner}} mostra o aninhamento.

:::note
As teclas correspondem às predefinições do SketchUp: {{key:G}} cria um componente, {{key:Shift+G}} um grupo.
:::

## Editar dentro de um grupo ou componente

1. Faça duplo clique nele (na vista ou na {{ui:Outliner}}), ou selecione-o e clique em {{ui:Edit}} em {{ui:Entity info}}.

   O resto do modelo fica esbatido, os eixos passam para os eixos próprios do grupo, e a {{ui:Outliner}} indica "A editar: Model › Group#1". A barra de estado diz "A editar Group#1. Prima Esc ou faça duplo clique fora para o fechar."

2. Desenhe, empurre/puxe, mova e apague como habitualmente. Tudo o que fizer fica dentro do grupo.
3. Para fechar: prima {{key:Esc}} (duas vezes se houver algo selecionado), faça duplo clique num espaço vazio, ou clique em {{ui:Close group}} na {{ui:Outliner}}.

Enquanto um componente está aberto, todas as cópias dele mudam à medida que trabalha.

## Colocar mais cópias de um componente

- Copie-o com {{ui:Move}} e {{key:Ctrl}} (ver [Mover e copiar](topic:move-copy)). Cada cópia é outra colocação do mesmo componente.
- Ou clique em {{ui:Place}} junto a ele no painel {{ui:Components}}, e depois clique onde deve ficar. A sua origem, o canto inferior da caixa à volta do que selecionou quando o criou, fica no ponto onde clicar. A ferramenta volta depois a {{ui:Select}}.

{{ui:Components}} mostra quantas cópias estão colocadas ("4×"), e a {{ui:Outliner}} mostra a contagem depois do nome.

## Reorganizar na Estrutura

Arraste uma linha da {{ui:Outliner}} para mudar o sítio a que pertence. Nada se move na vista: um grupo mantém o seu lugar no modelo.

- **Para dentro de um grupo:** solte-a no meio da linha de um grupo (a linha fica com um contorno tracejado). Fica lá dentro, no fim.
- **Noutra ordem:** solte-a na borda superior ou inferior de uma linha (aparece uma linha a indicá-lo). Fica logo antes ou depois dessa linha, dentro do mesmo grupo que essa linha, por isso isto também a coloca num grupo, no sítio escolhido.
- **Para o nível superior:** solte-a no cabeçalho da {{ui:Outliner}}. Fica no fim.

Cada arrastamento é um único passo: {{key:Mod+Z}} repõe-no. {{key:Esc}} durante um arrastamento não solta nada. Um grupo não pode ficar dentro de si próprio nem dentro de um grupo que contenha. Arrastar fica desativado enquanto {{ui:Find by name}} tiver texto.

:::touch
Mantenha o dedo numa linha durante um momento e depois arraste-a. Um deslize rápido desloca a lista em vez disso.
:::

## Tornar uma cópia diferente

Selecione a cópia e clique em {{ui:Make unique}} em {{ui:Entity info}} (visível quando o componente está colocado mais do que uma vez). Essa cópia recebe a sua própria definição, com o nome do original e um número novo. Edite-a sem tocar nas outras.

## Transformar um grupo num componente

Selecione o grupo e clique em {{ui:Make component}} em {{ui:Entity info}}. Recebe um nome novo, como Component#2, mesmo que tenha dado um nome ao grupo; escreva-o de novo no campo {{ui:Name}}.

## Explodir

Selecione um grupo ou componente e clique em {{ui:Explode}} (na barra de ferramentas ou em {{ui:Entity info}}). O conteúdo passa a ser geometria solta no mesmo lugar, e cola-se ao que toca. Os grupos dentro dele mantêm-se grupos.

## Sólido e volume

Ao selecionar um grupo ou componente, {{ui:Entity info}} mostra **Sólido: Sim** se as suas faces fecharem sem falhas (cada aresta é partilhada por exatamente duas faces) e não houver grupos aninhados dentro dele. Nesse caso mostra também o **volume**. Uma caixa, uma parede com uma janela recortada e um cilindro puxado são sólidos; uma caixa cujo topo foi apagado não é.

## Quando se apaga a última cópia

Apagar a última cópia de um componente remove-o também do painel {{ui:Components}}. {{key:Mod+Z}} repõe-no.

## Coisas a saber

- As cópias de um **grupo** feitas com {{ui:Move}} partilham o conteúdo nesta versão, tal como as cópias de componentes: editar uma altera as outras. Para tornar uma independente, clique em {{ui:Make component}} e depois em {{ui:Make unique}}. Veja [Resolução de problemas](topic:troubleshooting#editing-one-group-changed-another).
- Os componentes não recortam vãos em paredes nem se colam a faces, e não existe uma biblioteca de componentes prontos. Crie os seus próprios ou importe-os.
- Os ficheiros importados chegam como um grupo. Os ficheiros Collada mantêm dentro deles os seus próprios grupos e componentes.
