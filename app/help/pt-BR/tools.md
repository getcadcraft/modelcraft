---
title: Lista de ferramentas
summary: Cada ferramenta do ModelCraft com sua tecla, o que cada clique faz e o que você pode digitar na caixa de valor enquanto ela funciona.
keywords: ferramentas, barra de ferramentas, comandos, lista, linha, retângulo, círculo, polígono, deslocar, arco, curva, spline, siga-me, varredura, arco de 2 pontos, arco pelo centro, selecionar, empurrar puxar, mover, girar, escala, borracha, fita métrica, cota, órbita, pan, zoom, inserir componente
from: e08a274f
---

A dica da barra de status sempre diz o que a ferramenta atual espera em seguida. {{key:Esc}} cancela o que uma ferramenta está fazendo no momento.

## Ferramentas de desenho

| Ferramenta | Tecla | Cliques | Digite na caixa de valor |
|---|---|---|---|
| {{ui:Linha}} | {{key:L}} | Início, depois cada ponto seguinte. Para quando uma face se fecha, ou com {{key:Esc}} | Um comprimento na direção do ponteiro; `[x,y,z]` um ponto; `<dx,dy,dz>` um deslocamento ({{ui:Comprimento}}) |
| {{ui:Retângulo}} | {{key:R}} | Primeiro canto (chão ou face), canto oposto | Largura e profundidade: `4m,3m` ({{ui:Cotas}}) |
| {{ui:Círculo}} | {{key:C}} | Centro (chão ou face), um ponto na borda | Antes do primeiro clique: lados, `24s` ou `24` ({{ui:Lados}}). Depois: o raio ({{ui:Raio}}) |
| {{ui:Polígono}} | {{key:N}} | Centro, um canto | Igual ao Círculo; começa com 6 lados |
| {{ui:Arco}} | {{key:A}} | Início, fim, depois a flecha | O comprimento da corda após o início ({{ui:Comprimento}}); a flecha após o fim ({{ui:Flecha}}); `12s` para segmentos |
| {{ui:Transferidor}} | — | Centro, ponto de 0°, depois o ângulo | O ângulo em graus ({{ui:Ângulo}}) |
| {{ui:Siga-me}} | — | Selecione um caminho e depois clique na face (ou clique na face e depois em uma aresta do caminho) | — |
| {{ui:Pintar}} | {{key:B}} | Uma face, grupo ou componente | — ({{key:Ctrl}} faces conectadas, {{key:Shift}} toda aquela cor, {{key:Alt}} pegar uma cor) |
| {{ui:Deslocar}} | {{key:F}} | Uma face (ou selecione antes uma face ou arestas), depois o lado e a distância | A distância ({{ui:Distância}}); para dentro da face é para dentro |
| {{ui:Curva}} | — | Pontos pelos quais a curva passa; {{key:Enter}} ou um clique duplo finaliza | Um comprimento na direção do ponteiro, `[x,y,z]` ou `<dx,dy,dz>` para o próximo ponto |
| {{ui:Arco pelo centro}} | — | Centro, início, depois o fim | O raio após o centro; o ângulo em graus após o início; `12s` para segmentos |

## Ferramentas de edição

| Ferramenta | Tecla | Cliques | Digite na caixa de valor |
|---|---|---|---|
| {{ui:Selecionar}} | {{key:Space}} | Clique, clique duplo, triplo clique, arraste uma caixa. Veja [Selecionar coisas](topic:select) | Com uma cota ou aresta selecionada: um novo comprimento, que redimensiona o modelo |
| {{ui:Empurrar/puxar}} | {{key:P}} | A face, depois a distância. Clique duas vezes numa face para repetir a última distância | Uma distância; a negativa vai no sentido contrário ({{ui:Distância}}) |
| {{ui:Mover}} | {{key:M}} | De um ponto até outro ponto. Segure {{key:Ctrl}} ou {{key:Alt}} para copiar | Uma distância na direção do ponteiro, `<dx,dy,dz>` ou `[x,y,z]` ({{ui:Distância}}). Após uma cópia: `3x` ou `/3` |
| {{ui:Girar}} | {{key:Q}} | Centro (numa face, para girar no plano dela), direção inicial, direção final | O ângulo em graus ({{ui:Ângulo}}) |
| {{ui:Escala}} | {{key:S}} | O ponto que permanece, um ponto de referência, o novo tamanho | Um fator: `2`, `0.5` ({{ui:Escala}}) |
| {{ui:Borracha}} | {{key:E}} | Clique ou arraste sobre arestas, grupos, guias e cotas | nada |
| {{ui:Fita métrica}} | {{key:T}} | A partir de uma aresta: uma guia paralela. A partir de um ponto: mede e deixa um ponto-guia | O deslocamento ({{ui:Deslocar}}) ou a distância ({{ui:Comprimento}}) |
| {{ui:Cota}} | {{key:D}} | Dois cantos (ou uma aresta), depois onde fica a linha de cota. Veja [Cota e redimensionar](topic:dimensions) | O deslocamento ({{ui:Deslocar}}). Logo após: um novo comprimento, que redimensiona o modelo |

{{ui:Mover}}, {{ui:Girar}} e {{ui:Escala}} atuam sobre a seleção. Se nada estiver selecionado, elas pegam primeiro o que você clicar (uma face traz suas arestas).

## Ferramentas de câmera

| Ferramenta | Tecla | Arraste para |
|---|---|---|
| {{ui:Órbita}} | {{key:O}} | Girar em torno da parte do modelo sob o ponteiro ({{key:Shift}} faz pan) |
| {{ui:Pan}} | {{key:H}} | Deslizar a vista |
| {{ui:Zoom}} | {{key:Z}} | Dar zoom: para cima aproxima, para baixo afasta |
| {{ui:Extensão}} | {{key:Shift+Z}} | (um botão, não uma ferramenta) Ajustar o modelo inteiro |

Com o mouse, você raramente precisa disso: arrastar com o botão do meio faz a órbita, arrastar com o botão direito faz pan, e a roda dá zoom com qualquer ferramenta. Veja [Órbita, pan e zoom](topic:orbit-pan-zoom).

## Organizar

| Botão | Tecla | Faz |
|---|---|---|
| {{ui:Componente}} | {{key:G}} | Transforma a seleção em um componente |
| {{ui:Grupo}} | {{key:Shift+G}} | Transforma a seleção em um grupo |
| {{ui:Explodir}} | nenhuma | Desfaz os grupos e componentes selecionados, voltando à geometria solta |

## Inserir componente

Não está na barra de ferramentas: clique em {{ui:Inserir}} ao lado de um componente no painel {{ui:Componentes}}. Clique uma vez onde fica a origem do componente; a ferramenta então volta para {{ui:Selecionar}}.
