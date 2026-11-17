---
title: Lista de ferramentas
summary: Todas as ferramentas do ModelCraft com a sua tecla, o que faz cada clique e o que pode escrever na caixa de valor enquanto a ferramenta trabalha.
keywords: ferramentas, barra de ferramentas, comandos, lista, linha, retângulo, círculo, polígono, offset, arco, curva, spline, siga-me, varrimento, arco de 2 pontos, arco a partir do centro, selecionar, empurrar puxar, mover, rodar, escala, borracha, fita métrica, cota, órbita, deslocar, zoom, colocar componente
from: e08a274f
---

A dica da barra de estado indica sempre o que a ferramenta atual espera a seguir. {{key:Esc}} cancela o que uma ferramenta está a meio de fazer.

## Ferramentas de desenho

| Ferramenta | Tecla | Cliques | Escreva na caixa de valor |
|---|---|---|---|
| {{ui:Linha}} | {{key:L}} | Início, depois cada ponto seguinte. Para quando uma face se fecha, ou com {{key:Esc}} | Um comprimento na direção do ponteiro; `[x,y,z]` um ponto; `<dx,dy,dz>` um deslocamento ({{ui:Comprimento}}) |
| {{ui:Retângulo}} | {{key:R}} | Primeiro canto (chão ou face), canto oposto | Largura e profundidade: `4m,3m` ({{ui:Dimensões}}) |
| {{ui:Círculo}} | {{key:C}} | Centro (chão ou face), um ponto na margem | Antes do primeiro clique: lados, `24s` ou `24` ({{ui:Lados}}). Depois: o raio ({{ui:Raio}}) |
| {{ui:Polígono}} | {{key:N}} | Centro, um canto | Igual ao Círculo; começa com 6 lados |
| {{ui:Arco}} | {{key:A}} | Início, fim, depois a flecha | O comprimento da corda depois do início ({{ui:Comprimento}}); a flecha depois do fim ({{ui:Flecha}}); `12s` para segmentos |
| {{ui:Transferidor}} | — | Centro, ponto de 0°, depois o ângulo | O ângulo em graus ({{ui:Ângulo}}) |
| {{ui:Siga-me}} | — | Selecione um caminho e depois clique na face (ou clique na face e depois numa aresta do caminho) | — |
| {{ui:Pintar}} | {{key:B}} | Uma face, grupo ou componente | — ({{key:Ctrl}} faces ligadas, {{key:Shift}} todas as faces dessa cor, {{key:Alt}} conta-gotas) |
| {{ui:Offset}} | {{key:F}} | Uma face (ou selecione antes faces ou arestas), depois o lado e a distância | A distância ({{ui:Distância}}); para dentro da face é para o interior |
| {{ui:Curva}} | — | Pontos por onde a curva passa; {{key:Enter}} ou duplo clique termina | Um comprimento na direção do ponteiro, `[x,y,z]` ou `<dx,dy,dz>` para o ponto seguinte |
| {{ui:Arco pelo centro}} | — | Centro, início, depois o fim | O raio depois do centro; o ângulo em graus depois do início; `12s` para segmentos |

## Ferramentas de edição

| Ferramenta | Tecla | Cliques | Escreva na caixa de valor |
|---|---|---|---|
| {{ui:Selecionar}} | {{key:Space}} | Clique, duplo clique, triplo clique, arraste uma caixa. Ver [Selecionar elementos](topic:select) | Com uma cota ou aresta selecionada: um novo comprimento, que redimensiona o modelo |
| {{ui:Empurrar/puxar}} | {{key:P}} | A face, depois a distância. Duplo clique numa face repete a última distância | Uma distância; um valor negativo vai no sentido contrário ({{ui:Distância}}) |
| {{ui:Mover}} | {{key:M}} | De um ponto, até outro ponto. Mantenha {{key:Ctrl}} ou {{key:Alt}} premido para copiar | Uma distância na direção do ponteiro, `<dx,dy,dz>` ou `[x,y,z]` ({{ui:Distância}}). Depois de uma cópia: `3x` ou `/3` |
| {{ui:Rodar}} | {{key:Q}} | Centro (numa face, para rodar no seu plano), direção inicial, direção final | O ângulo em graus ({{ui:Ângulo}}) |
| {{ui:Escala}} | {{key:S}} | O ponto que se mantém, um ponto de referência, o novo tamanho | Um fator: `2`, `0.5` ({{ui:Escala}}) |
| {{ui:Borracha}} | {{key:E}} | Clique ou arraste sobre arestas, grupos, guias e cotas | nada |
| {{ui:Fita métrica}} | {{key:T}} | De uma aresta: uma linha-guia paralela. De um ponto: mede e deixa um ponto-guia | O deslocamento ({{ui:Offset}}) ou a distância ({{ui:Comprimento}}) |
| {{ui:Cota}} | {{key:D}} | Dois cantos (ou uma aresta), depois onde fica a linha de cota. Ver [Cotar e redimensionar](topic:dimensions) | O deslocamento ({{ui:Offset}}). Logo a seguir: um novo comprimento, que redimensiona o modelo |

{{ui:Mover}}, {{ui:Rodar}} e {{ui:Escala}} atuam sobre a seleção. Se nada estiver selecionado, usam primeiro o que clicar (uma face traz as suas arestas).

## Ferramentas de câmara

| Ferramenta | Tecla | Arraste para |
|---|---|---|
| {{ui:Órbita}} | {{key:O}} | Girar em volta da parte do modelo debaixo do ponteiro ({{key:Shift}} desloca) |
| {{ui:Deslocar}} | {{key:H}} | Deslizar a vista |
| {{ui:Zoom}} | {{key:Z}} | Fazer zoom: para cima aproxima, para baixo afasta |
| {{ui:Extensão}} | {{key:Shift+Z}} | (um botão, não uma ferramenta) Ajustar todo o modelo |

Com rato, raramente são necessárias estas ferramentas: arrastar com o botão do meio faz órbita, arrastar com o botão direito desloca e a roda faz zoom com qualquer ferramenta. Ver [Órbita, deslocar e zoom](topic:orbit-pan-zoom).

## Organizar

| Botão | Tecla | Faz |
|---|---|---|
| {{ui:Componente}} | {{key:G}} | Transforma a seleção num componente |
| {{ui:Grupo}} | {{key:Shift+G}} | Transforma a seleção num grupo |
| {{ui:Explodir}} | nenhuma | Devolve os grupos e componentes selecionados a geometria solta |

## Colocar componente

Não está na barra de ferramentas: clique em {{ui:Colocar}} ao lado de um componente no painel {{ui:Componentes}}. Clique uma vez onde deve ir a origem do componente; a ferramenta volta depois a {{ui:Selecionar}}.
