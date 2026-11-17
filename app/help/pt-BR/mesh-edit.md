---
title: Editar uma malha na área de trabalho Malha
summary: Selecione vértices, arestas e faces de uma malha, mova-os e extrude, recue, chanfre, corte, mescle, preencha e faça pontes entre eles, com qualquer um dos estilos de teclas.
keywords: malha, modo de edição, área de trabalho malha, vértice, vértices, aresta, arestas, face, faces, extrudar, recuar, chanfrar, cortar laço, faca, bissetar, rodar, mesclar, dissolver, preencher, preenchimento em grade, ponte, subdividir, deslizar, edição proporcional, queda, área de trabalho
from: 92a372dd
---

A **área de trabalho Malha** edita uma [malha](topic:meshes) ponto a ponto: seus vértices, arestas e faces. A geometria de push/pull continua na área de trabalho **Modelo**.

## Abrir

- Escolha {{ui:Malha}} na lista {{ui:Área de trabalho}} à esquerda da barra de ferramentas. A malha selecionada abre para edição; um grupo ou componente selecionado é convertido em malha primeiro (uma etapa de desfazer).
- Ou clique duas vezes em uma malha, ou, com as teclas do modelador, selecione-a e pressione {{key:Tab}}.
- Sem nada selecionado, o painel oferece malhas para adicionar: plano, grade, cubo, círculo, cilindro, cone, esfera, esfera ico e toro. Uma nova vai para onde a vista está olhando e abre para edição.

{{ui:Back to Model}} (ou a lista, {{key:Tab}} com as teclas do modelador, {{key:Esc}} sem nada selecionado com as teclas de push/pull) volta ao Modelo com a malha selecionada. Enquanto a área de trabalho Malha está aberta, o restante do modelo fica esmaecido e as ferramentas de desenho do Modelo são recolhidas.

## Selecionar

| Faça | Para |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Selecionar vértices, arestas ou faces |
| Clique | Selecionar um; {{key:Shift}}+clique adiciona ou remove |
| Arraste uma caixa | Selecionar o que está dentro e visível; {{key:Shift}} adiciona, {{key:Ctrl}} remove |
| {{key:Alt}}+clique em uma aresta, ou clique duas vezes nela | Seu laço de arestas (um laço de faces no modo de faces; toda a borda, numa aresta aberta) |
| {{key:Ctrl}}+{{key:Alt}}+clique em uma aresta | Seu anel de arestas |
| Triplo clique | Tudo o que está ligado a ele |

O grupo {{ui:Select}} também tem {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} e {{ui:Less}}.

## Mover, girar, escalar

{{ui:Move}}, {{ui:Rotate}} e {{ui:Scale}} começam a partir do ponteiro: mova-o e depois clique ou pressione {{key:Enter}} para assentar a seleção, ou {{key:Esc}} para cancelar. {{key:X}}, {{key:Y}} ou {{key:Z}} (ou as setas) travam um eixo. Digite uma distância, um ângulo ou um fator para um valor exato — [cálculos](topic:value-box#calculations) também funcionam.

**Edição proporcional** ({{ui:Proportional}}, ou o painel): os vértices perto da seleção acompanham um movimento, cada vez menos quanto mais distantes estiverem, até o alcance que você definir, com a queda que escolher. Ative {{ui:Somente ao longo da malha}} para medir ao longo das arestas, e não em linha reta.

{{ui:Slide}} move um laço de arestas selecionado ao longo das arestas vizinhas.

## Alterar a forma

| Ferramenta | Faz |
|---|---|
| {{ui:Extrude}} | Puxa as faces selecionadas para fora ao longo da sua normal, com novas faces laterais (ou cria faces a partir de arestas de borda abertas). Digite a distância |
| {{ui:Inset}} | Uma faixa dentro do contorno das faces selecionadas; pressione {{key:I}} de novo para cada face separadamente |
| {{ui:Bevel}} | Corta as arestas selecionadas (ou, com {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, os vértices) com uma largura; a roda ou as teclas de mais e menos adicionam segmentos para uma aresta arredondada |
| {{ui:Loop cut}} | Aponte para uma aresta: novos laços atravessam o anel de faces de quatro lados; a roda define quantos; clique para cortar |
| {{ui:Knife}} | Clique em pontos sobre arestas ou cantos; {{key:Enter}} corta em linha reta as faces entre eles, como você as vê |
| {{ui:Bisect}} | Desenhe uma linha na tela: as faces selecionadas (ou todas) são cortadas ao longo dela |
| {{ui:Spin}} | Gira as faces selecionadas ou as arestas abertas em torno do eixo azul, em passos (a roda os define); uma volta completa fecha |
| {{ui:Subdivide}} | Corta as arestas selecionadas ao meio; faces inteiras viram uma grade |
| {{ui:Merge}} | Os vértices selecionados viram um só, no centro deles |
| {{ui:Dissolve}} | Retira a seleção, mas mantém a superfície: as faces se unem |
| {{ui:Fill}} | Uma face através de uma borda aberta selecionada (ou entre duas arestas abertas) |
| {{ui:Grid fill}} | Preenche uma borda aberta com um número par de arestas com uma grade de quadriláteros |
| {{ui:Bridge}} | Une dois laços de arestas abertos selecionados com faces |
| {{ui:Crease}} | Quão nítidas permanecem as arestas selecionadas quando a malha é suavizada por uma superfície de subdivisão: afaste-se do centro, use a roda (passos de 0.1) ou digite um valor de 0 a 1. O painel mostra o vinco das arestas selecionadas e também aceita um valor digitado. As arestas com vinco são desenhadas em magenta |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Viram faces; suavizam vértices em direção aos vizinhos; excluem conforme o modo de seleção |

Cada uma é uma etapa de desfazer. Coordenadas de textura, cores e pesos seguem para as novas faces e vértices.

## Refazer malha

{{ui:Remesh}} refaz a malha inteira como triângulos uniformes de um só tamanho, pedidos quando você pressiona (menor é mais fino e mais lento). Ele fecha furos, une partes que se sobrepõem e uniformiza uma malha que a escultura esticou. Arestas vivas ficam levemente arredondadas. UVs, pintura e vincos recomeçam. Uma etapa de desfazer.

## Retopologia

Para construir uma malha nova e mais limpa sobre uma detalhada (uma escultura, um escaneamento), escolha a detalhada em {{ui:Retopology}} › **Construir sobre** no painel, depois:

- **Encaixar os pontos movidos sobre ela:** os pontos que você move, e as arestas que você extrude, caem sobre a superfície dela.
- **Colocar os pontos selecionados sobre ela** move agora os pontos selecionados para cima dela (uma etapa de desfazer).
- **Mostrar as arestas desta malha na frente** desenha a malha que você está construindo sobre a superfície, para que você a veja.

## Ajustar a última operação

Depois de {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} ou {{ui:Spin}}, o painel mostra suas configurações (largura, segmentos, perfil, cortes…). Altere uma delas e a operação é refeita desde o início, ainda como uma etapa de desfazer.

## Teclas

| | Teclas de push/pull | Teclas do modelador |
|---|---|---|
| Mover, girar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} duas vezes desliza) |
| Extrudar, recuar | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Excluir | {{key:E}} ou {{key:Delete}} | {{key:X}} ou {{key:Delete}} |
| Vinco | {{key:Shift+C}} | {{key:Shift+E}} |
| Selecionar tudo, nada, inverter | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambos | {{key:Ctrl+B}} chanfro, {{key:Ctrl+R}} corte de laço, {{key:K}} faca | o mesmo, e {{key:F}} preencher, {{key:M}} mesclar, {{key:Ctrl+X}} dissolver, {{key:L}} / {{key:Ctrl+L}} conectados, {{key:Alt+N}} espelhar, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Veja também [Malhas](topic:meshes), [Modificadores em uma malha](topic:modifiers) e [Ainda não implementado](topic:not-built-yet).
