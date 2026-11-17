---
title: Editar uma malha na área de trabalho Malha
summary: Selecione os vértices, arestas e faces de uma malha, mova-os e aplique extrusão, inserção, bisel, corte, fusão, preenchimento e ponte, com qualquer um dos estilos de teclas.
keywords: malha, modo de edição, área de trabalho malha, vértice, vértices, aresta, arestas, face, faces, extrudir, inserir, biselar, corte em laço, faca, bissetar, revolução, fundir, dissolver, preencher, preencher com grelha, ponte, subdividir, deslizar, edição proporcional, atenuação, área de trabalho
from: 92a372dd
---

A área de trabalho **Malha** edita uma [malha](topic:meshes) ponto a ponto: os respetivos vértices, arestas e faces. A geometria de empurrar/puxar fica na área de trabalho **Modelo**.

## Abrir

- Escolha {{ui:Malha}} na lista {{ui:Área de trabalho}} à esquerda da barra de ferramentas. A malha selecionada abre para edição; um grupo ou componente selecionado é convertido numa malha primeiro (um passo de anulação).
- Ou faça duplo clique numa malha ou, com as teclas do modelador, selecione-a e prima {{key:Tab}}.
- Sem nada selecionado, o painel oferece malhas para acrescentar: plano, grelha, cubo, círculo, cilindro, cone, esfera, esfera icosaédrica e toro. Uma nova é colocada para onde a vista está a olhar e abre para edição.

{{ui:Voltar ao Modelo}} (ou a lista, {{key:Tab}} com as teclas do modelador, {{key:Esc}} sem nada selecionado com as teclas de empurrar/puxar) volta ao Modelo com a malha selecionada. Enquanto a área de trabalho Malha estiver aberta, o resto do modelo fica esbatido e as ferramentas de desenho do Modelo ficam recolhidas.

## Selecionar

| Ação | Para |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Selecionar vértices, arestas ou faces |
| Clicar | Selecionar um; {{key:Shift}}+clique acrescenta ou remove |
| Arrastar uma caixa | Selecionar o que está dentro e visível; {{key:Shift}} acrescenta, {{key:Ctrl}} remove |
| {{key:Alt}}+clique numa aresta, ou duplo clique nela | O respetivo laço de arestas (um laço de faces no modo de faces; a borda inteira numa aresta aberta) |
| {{key:Ctrl}}+{{key:Alt}}+clique numa aresta | O respetivo anel de arestas |
| Triplo clique | Tudo o que está ligado a ele |

O grupo {{ui:Selecionar}} tem também {{ui:Todos}}, {{ui:Ligados}}, {{ui:Laço}}, {{ui:Anel}}, {{ui:Mais}} e {{ui:Menos}}.

## Mover, rodar, escalar

{{ui:Mover}}, {{ui:Rodar}} e {{ui:Escala}} começam no ponteiro: mova a seleção, depois clique ou prima {{key:Enter}} para a pousar, ou {{key:Esc}} para cancelar. {{key:X}}, {{key:Y}} ou {{key:Z}} (ou as setas) bloqueiam um eixo. Escreva uma distância, um ângulo ou um fator para um valor exato — os [cálculos](topic:value-box#calculations) também funcionam.

**Edição proporcional** ({{ui:Proporcional}}, ou no painel): os vértices perto da seleção acompanham um movimento, tanto menos quanto mais afastados estiverem, até ao alcance que definir, com a atenuação que escolher. Ative {{ui:Apenas ao longo da malha}} para medir ao longo das arestas em vez de em linha reta.

{{ui:Deslizar}} move um laço de arestas selecionado ao longo das arestas vizinhas.

## Alterar a forma

| Ferramenta | Faz |
|---|---|
| {{ui:Extrudir}} | Puxa as faces selecionadas ao longo da respetiva normal, com novas faces laterais (ou cria faces a partir de arestas abertas da borda). Escreva a distância |
| {{ui:Inserir}} | Uma faixa dentro do contorno das faces selecionadas; prima {{key:I}} de novo para cada face separada |
| {{ui:Bisel}} | Corta as arestas selecionadas (ou, com {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, os vértices) numa largura; a roda ou as teclas de mais e menos acrescentam segmentos para uma aresta arredondada |
| {{ui:Corte em laço}} | Aponte para uma aresta: novos laços atravessam o anel de faces de quatro lados; a roda define quantos; clique para cortar |
| {{ui:Faca}} | Clique em pontos nas arestas ou nos cantos; {{key:Enter}} corta em linha reta através das faces entre eles, tal como as vê |
| {{ui:Bissetar}} | Desenhe uma linha no ecrã: as faces selecionadas (ou todas) são cortadas ao longo dela |
| {{ui:Revolução}} | Roda as faces selecionadas ou as arestas abertas em torno do eixo azul, por passos (a roda define-os); uma volta completa fecha |
| {{ui:Subdividir}} | Corta as arestas selecionadas em duas; faces inteiras transformam-se numa grelha |
| {{ui:Fundir}} | Os vértices selecionados passam a um só, no respetivo centro |
| {{ui:Dissolver}} | Retira a seleção mas mantém a superfície: as faces juntam-se |
| {{ui:Preencher}} | Uma face através de uma borda aberta selecionada (ou entre duas arestas abertas) |
| {{ui:Preencher com grelha}} | Preenche uma borda aberta com um número par de arestas com uma grelha de quadriláteros |
| {{ui:Ponte}} | Une dois laços de arestas abertos selecionados com faces |
| {{ui:Vinco}} | Quão vincadas ficam as arestas selecionadas quando a malha é suavizada por uma superfície de subdivisão: arraste para longe do centro, use a roda (passos de 0.1) ou escreva um valor de 0 a 1. O painel mostra o vinco das arestas selecionadas e também aceita um valor escrito. As arestas com vinco são desenhadas a magenta |
| {{ui:Espelhar}}, {{ui:Suavizar}}, {{ui:Eliminar}} | Inverte faces; suaviza os vértices em direção aos vizinhos; elimina conforme o modo de seleção |

Cada uma é um passo de anulação. As coordenadas de textura, as cores e os pesos passam para as novas faces e vértices.

## Refazer malha

{{ui:Refazer malha}} volta a criar a malha inteira com triângulos regulares de um só tamanho, pedido ao premir o botão (mais pequeno significa mais fino e mais lento). Fecha buracos, une peças que se sobrepõem e uniformiza uma malha que a escultura tenha esticado. As arestas vivas ficam ligeiramente arredondadas. Os UVs, a pintura e os vincos recomeçam do zero. Um passo de anulação.

## Retopologia

Para criar uma malha nova e mais limpa sobre uma detalhada (uma escultura, uma digitalização), escolha a detalhada em {{ui:Retopologia}} › **Construir sobre** no painel e depois:

- **Snap dos pontos movidos sobre ela:** os pontos que move e as arestas que extrude pousam na superfície dela.
- **Colocar os pontos selecionados sobre ela** move-os já para a superfície (um passo de anulação).
- **Mostrar as arestas desta malha à frente** desenha a malha que está a construir sobre a superfície, para a ver.

## Ajustar a última operação

Depois de {{ui:Inserir}}, {{ui:Bisel}}, {{ui:Corte em laço}}, {{ui:Subdividir}}, {{ui:Suavizar}}, {{ui:Preencher com grelha}} ou {{ui:Revolução}}, o painel mostra as respetivas definições (largura, segmentos, perfil, cortes …). Altere uma delas e a operação é refeita desde o início, continuando a ser um só passo de anulação.

## Teclas

| | Teclas de empurrar/puxar | Teclas do modelador |
|---|---|---|
| Mover, rodar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} duas vezes desliza) |
| Extrudir, inserir | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Eliminar | {{key:E}} ou {{key:Delete}} | {{key:X}} ou {{key:Delete}} |
| Vinco | {{key:Shift+C}} | {{key:Shift+E}} |
| Selecionar tudo, limpar seleção, inverter | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambos | {{key:Ctrl+B}} bisel, {{key:Ctrl+R}} corte em laço, {{key:K}} faca | o mesmo, e {{key:F}} preencher, {{key:M}} fundir, {{key:Ctrl+X}} dissolver, {{key:L}} / {{key:Ctrl+L}} ligados, {{key:Alt+N}} espelhar, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Ver também [Malhas](topic:meshes), [Modificadores numa malha](topic:modifiers) e [Ainda não implementado](topic:not-built-yet).
