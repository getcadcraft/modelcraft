---
title: Selecionar objetos
summary: Clicar, duplo clique e triplo clique, arrastar uma caixa de janela ou de cruzamento, adicionar e remover com teclas modificadoras, e eliminar.
keywords: selecionar, seleção, janela, cruzamento, adicionar à seleção, remover da seleção, selecionar tudo, triplo clique, duplo clique, eliminar, apagar
from: d56d1f89
---

{{ui:Select}} ({{key:Space}}) é a ferramenta com que o ModelCraft começa, e aquela para a qual {{key:Esc}} o leva de volta. Os elementos selecionados ficam a azul, e {{ui:Entity info}} à direita indica o que são.

## Clicar

| Fazer isto | Seleciona |
|---|---|
| Clicar numa face ou numa aresta | Essa face ou aresta |
| Clicar num grupo ou componente | O grupo ou componente inteiro |
| Duplo clique numa face | A face e as suas arestas |
| Duplo clique numa aresta | A aresta e as faces de cada lado |
| Duplo clique num grupo ou componente | Abre-o para edição (ver [Grupos e componentes](topic:groups-components)) |
| Triplo clique numa face ou aresta | Tudo o que está ligado a ela: o objeto inteiro |
| Clicar num espaço vazio | Nada (limpa a seleção) |
| Duplo clique num espaço vazio enquanto edita um grupo | Fecha o grupo |

As arestas são mais fáceis de apanhar do que as faces: quando o ponteiro está a poucos píxeis de uma aresta, o clique escolhe a aresta.

## Arrastar uma caixa

- **Da esquerda para a direita** desenha uma caixa cheia: uma seleção de **janela**. Só ficam selecionados os elementos totalmente dentro dela.
- **Da direita para a esquerda** desenha uma caixa tracejada: uma seleção de **cruzamento**. Fica selecionado tudo o que a caixa toca, e uma face fica selecionada quando a caixa está totalmente dentro dela.

Um grupo ou componente conta como um só elemento: uma janela tem de o conter por completo; um cruzamento só precisa de lhe tocar.

## Adicionar e remover

Mantenha uma tecla premida enquanto clica ou arrasta:

| Tecla | Efeito |
|---|---|
| {{key:Shift}} | Alterna: adiciona o que não está selecionado e remove o que está |
| {{key:Mod}} | Adiciona |
| {{key:Shift}} e {{key:Mod}} em conjunto | Remove |

Para selecionar tudo no modelo (ou tudo no grupo que está a editar), prima {{key:Mod+A}}.

## Limpar a seleção

Prima {{key:Esc}} (com {{ui:Select}} como ferramenta), ou clique num espaço vazio.

## Eliminar o que está selecionado

Prima {{key:Delete}} ou {{key:Backspace}}. As faces, arestas, grupos e guias da seleção são removidos de uma só vez; {{key:Mod+Z}} os traz de volta.

Eliminar uma aresta remove as faces que dependem dela, a menos que a aresta apenas separasse duas faces no mesmo plano: nesse caso, as duas faces juntam-se numa só. Eliminar uma face deixa as suas arestas. Ver [Apagar e limpar](topic:erase).

## Selecionar dentro de um grupo

Clicar num grupo seleciona o grupo inteiro. Para selecionar uma face dentro dele, faça duplo clique no grupo para o abrir e clique depois. Enquanto um grupo está aberto, os cliques só chegam ao que está dentro dele; tudo o resto fica esbatido. Prima {{key:Esc}} sem nada selecionado, ou faça duplo clique num espaço vazio, para o fechar.

O {{ui:Outliner}} à esquerda seleciona grupos e componentes pelo nome, o que ajuda quando estão escondidos atrás de outros elementos.
