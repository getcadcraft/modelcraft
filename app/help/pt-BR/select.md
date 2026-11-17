---
title: Selecionar objetos
summary: Clique, clique duplo e clique triplo, arraste uma janela ou uma caixa de cruzamento, adicione e remova com teclas modificadoras e exclua.
keywords: selecionar, seleção, janela, cruzamento, adicionar à seleção, desmarcar, selecionar tudo, clique triplo, clique duplo, excluir, apagar
from: d56d1f89
---

{{ui:Selecionar}} ({{key:Space}}) é a ferramenta com que a ModelCraft começa e para a qual {{key:Esc}} leva você de volta. Os itens selecionados ficam azuis, e {{ui:Informações da entidade}} à direita diz o que eles são.

## Clique

| Faça isto | Seleciona |
|---|---|
| Clique em uma face ou aresta | Essa face ou aresta |
| Clique em um grupo ou componente | O grupo ou componente inteiro |
| Clique duplo em uma face | A face e as suas arestas |
| Clique duplo em uma aresta | A aresta e as faces de cada lado |
| Clique duplo em um grupo ou componente | Abre para edição (veja [Grupos e componentes](topic:groups-components)) |
| Clique triplo em uma face ou aresta | Tudo o que está conectado a ela: o objeto inteiro |
| Clique em espaço vazio | Nada (limpa a seleção) |
| Clique duplo em espaço vazio enquanto edita um grupo | Fecha o grupo |

Arestas são mais fáceis de acertar do que faces: quando o ponteiro está a poucos pixels de uma aresta, o clique pega a aresta.

## Arrastar uma caixa

- **Da esquerda para a direita** desenha uma caixa sólida: uma seleção por **janela**. Só são selecionados os itens que estão totalmente dentro dela.
- **Da direita para a esquerda** desenha uma caixa tracejada: uma seleção por **cruzamento**. Tudo o que a caixa toca é selecionado, e uma face é selecionada quando a caixa fica inteiramente dentro dela.

Um grupo ou componente conta como um item só: uma janela precisa conter tudo, e um cruzamento só precisa tocá-lo.

## Adicionar e remover

Segure uma tecla enquanto clica ou arrasta:

| Tecla | Efeito |
|---|---|
| {{key:Shift}} | Alterna: adiciona o que não está selecionado, remove o que está |
| {{key:Mod}} | Adiciona |
| {{key:Shift}} e {{key:Mod}} juntos | Remove |

Para selecionar tudo no modelo (ou tudo no grupo que você está editando), pressione {{key:Mod+A}}.

## Limpar a seleção

Pressione {{key:Esc}} (com {{ui:Selecionar}} como ferramenta), ou clique em espaço vazio.

## Excluir o que está selecionado

Pressione {{key:Delete}} ou {{key:Backspace}}. Faces, arestas, grupos e guias na seleção são removidos de uma só vez; {{key:Mod+Z}} os traz de volta.

Excluir uma aresta remove as faces que dependem dela, a menos que a aresta apenas separasse duas faces no mesmo plano: nesse caso, as duas faces se unem em uma só. Excluir uma face mantém as suas arestas. Veja [Apagar e limpar](topic:erase).

## Selecionar dentro de um grupo

Clicar em um grupo seleciona o grupo inteiro. Para selecionar uma face dentro dele, clique duas vezes no grupo para abri-lo e depois clique. Enquanto um grupo está aberto, os cliques só alcançam o que está dentro dele; o resto fica esmaecido. Pressione {{key:Esc}} sem nada selecionado, ou clique duplo em espaço vazio, para fechá-lo.

A {{ui:Estrutura}} à esquerda seleciona grupos e componentes pelo nome, o que ajuda quando eles estão escondidos atrás de outras coisas.
