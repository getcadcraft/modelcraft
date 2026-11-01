---
title: O ecrã do ModelCraft
summary: Uma visita à barra de ferramentas, aos painéis de cada lado, à vista 3D e à barra de estado, pelos nomes que têm no ecrã.
keywords: ecrã, esquema, barra de ferramentas, painéis, estrutura, informações da entidade, estilo, cenas, barra de estado, caixa de valores, unidades, interface, visita
from: 4a9a4516
---

De cima para baixo: a barra da aplicação, a barra de ferramentas, as três colunas (painéis da esquerda, vista 3D, painéis da direita) e a barra de estado.

## A barra da aplicação

A barra fina no topo pertence a todas as aplicações CadCraft. Tem o nome e a versão da aplicação, {{ui:Sobre o ModelCraft}}, o botão do modo de ecrã e o interruptor {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Papel}} é o tema claro e {{ui:Modelo}} o escuro. A vista 3D muda as suas cores para acompanhar; o modelo não muda.
- O botão do modo de ecrã (ao início diz {{ui:Ecrã inteiro}}) e {{key:Ctrl+Shift+F}} percorrem três modos: normal, ecrã inteiro e ecrã inteiro com as barras ocultas. Com as barras ocultas, aponte para a margem superior do ecrã (ou toque nela) para as trazer de volta. {{key:Esc}} sai do ecrã inteiro.

:::note
{{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, também num Mac. No iPhone, onde os navegadores não têm ecrã inteiro, o botão só oculta e mostra as barras.
:::

## A barra de ferramentas

A barra de ferramentas está dividida em grupos com rótulo. Pare o ponteiro sobre um botão para ver o seu nome e a sua tecla.

À esquerda, a lista {{ui:Área de trabalho}} muda para que servem a barra de ferramentas e o painel da direita: {{ui:Modelo}} (modelação por empurrar/puxar, a visita abaixo), {{ui:Malha}} ([editar uma malha](topic:mesh-edit)), {{ui:Curva}} ([objetos de curva](topic:curves)), {{ui:UV}} ([dispor as UV](topic:uv)), {{ui:Esculpir}} ([esculpir](topic:sculpt)), {{ui:Sombreamento}} ([materiais feitos com nós](topic:shading)), {{ui:Animar}} ([animar](topic:animate)) e {{ui:Renderizar}} ([renderizar na vista](topic:render#render-in-the-view)).

| Grupo | Botões |
|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Importar}}, {{ui:Exportar}} (um menu de formatos) |
| Desenhar | {{ui:Linha}} ({{key:L}}), {{ui:Retângulo}} ({{key:R}}), {{ui:Círculo}} ({{key:C}}), {{ui:Polígono}} ({{key:N}}) |
| Modificar | {{ui:Selecionar}} ({{key:Space}}), {{ui:Empurrar/puxar}} ({{key:P}}), {{ui:Mover}} ({{key:M}}), {{ui:Rodar}} ({{key:Q}}), {{ui:Escalar}} ({{key:S}}), {{ui:Borracha}} ({{key:E}}), {{ui:Fita métrica}} ({{key:T}}) |
| Organizar | {{ui:Componente}} ({{key:G}}), {{ui:Grupo}} ({{key:Shift+G}}), {{ui:Explodir}} |
| Editar | {{ui:Anular}} ({{key:Mod+Z}}), {{ui:Refazer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Colar}} ({{key:Mod+V}}), {{ui:Mais}} (um menu: cortar, copiar, colar, colar no mesmo sítio {{key:Mod+Shift+V}}, duplicar {{key:Mod+D}}, eliminar, selecionar tudo, limpar seleção e o estilo de teclas) |
| Câmara | {{ui:Orbitar}} ({{key:O}}), {{ui:Deslocar}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensão}} ({{key:Shift+Z}}), {{ui:Vistas}} (um menu) |

As teclas mostradas são as de empurrar/puxar; com o estilo Modelador escolhido nas [definições do ModelCraft](topic:settings), as sugestões mostram essas teclas. A ferramenta que está a usar aparece premida. Num ecrã estreito a barra de ferramentas desloca-se para o lado.

O menu {{ui:Vistas}} tem {{ui:Iso}}, {{ui:Topo}}, {{ui:Frente}}, {{ui:Direita}}, {{ui:Trás}}, {{ui:Esquerda}} e {{ui:Baixo}}, cada uma ajustada ao modelo, e {{ui:Perspetiva}}, que alterna entre projeção em perspetiva e paralela.

## A vista 3D

O meio do ecrã. As linhas vermelha, verde e azul são os eixos: o vermelho e o verde assentam no chão, o azul aponta para cima, e **o norte é o eixo verde**. Onde se encontram é a origem.

- Quando começa, um cartão intitulado «Começar a modelar» lista as primeiras teclas. Desaparece quando escolhe uma ferramenta de desenho ou clica na vista.
- Enquanto uma ferramenta trabalha, a vista mostra **marcadores de inferência**: pequenas formas coloridas onde o ponteiro faz snap (um círculo verde numa extremidade, um ciano num ponto médio, um quadrado vermelho numa aresta, um losango azul numa face). Veja [Inferência e snap](topic:inference).
- As coisas selecionadas ficam azuis. Uma face vista por trás é cinzento-azulada.
- Quando abre um grupo para o editar, tudo o que está fora dele esbate-se, e os eixos passam para os eixos do próprio grupo.
- Quando um modelo tem cenas, aparece no topo da vista uma fila de separadores de cena.
- Largue um ficheiro em qualquer ponto da vista para o abrir ou importar.

## Os painéis da esquerda

A **{{ui:Estrutura}}** lista os grupos e componentes do modelo, aninhados da forma como estão aninhados no modelo. Um componente usado mais de uma vez mostra quantas, como «Janela (4)».

- Clique num nome para o selecionar. Faça duplo clique para o abrir para edição.
- **Procurar por nome** (mostrado quando há dois ou mais grupos) mantém só as linhas cujo nome corresponde, com os grupos em que estão. {{key:Esc}} limpa-o.
- O **olho** no fim de uma linha oculta ou mostra esse grupo ou componente (como {{ui:Editar}} › {{ui:Mais}} › {{ui:Ocultar}}). Um ícone de etiqueta significa que está oculto pela sua [etiqueta](topic:tags).
- **Mudar o nome no próprio sítio:** clique numa linha, prima {{key:F2}}, escreva e prima {{key:Enter}} ({{key:Esc}} mantém o nome antigo).
- **Arraste uma linha** para o meio da linha de outro grupo para a mover para dentro desse grupo, para a margem superior ou inferior de uma linha para a pôr mesmo antes ou depois dessa linha, ou para o título {{ui:Estrutura}} para a mover para o nível superior. Fica onde está no modelo e conserva a cor, a etiqueta e o nome. Um grupo não pode ir para dentro de si próprio. Cada movimento é um passo de anulação. Veja [Reorganizar na Estrutura](topic:groups-components#rearrange-in-the-outliner).
- Enquanto edita dentro de um grupo, uma linha diz «A editar: Modelo › …» e aparece um botão {{ui:Fechar grupo}}. Fecha todos os níveis abertos de uma vez.

Os **{{ui:Componentes}}** listam todas as definições de componente com quantas cópias estão colocadas («3×») e um botão {{ui:Colocar}} que acrescenta outra cópia onde clicar.

## Os painéis da direita

**{{ui:Informações da entidade}}** descreve o que está selecionado. O seu título muda para dizer o que é:

| Título | Mostra | Botões |
|---|---|---|
| Modelo (nada selecionado) | Faces, arestas, grupos, componentes e quantos estão colocados, linhas-guia, tamanho global | {{ui:Eliminar todas as linhas-guia}} (quando há linhas-guia) |
| Face | Área, número de furos | {{ui:Inverter face}} |
| Aresta | Comprimento | nenhum |
| Grupo ou Componente | Nome (escreva para mudar), quantas vezes está colocado, se é um sólido fechado, o seu volume, o seu tamanho | {{ui:Editar}}, {{ui:Explodir}}, {{ui:Tornar único}} (um componente colocado mais de uma vez), {{ui:Criar componente}} (um grupo) |
| Ponto-guia ou linha-guia | nada | {{ui:Eliminar}} |
| Várias coisas | Quantas faces, arestas, grupos e linhas-guia, a área total das faces | {{ui:Criar componente (G)}}, {{ui:Criar grupo (Shift+G)}} |

**{{ui:Estilo}}** define como o modelo é desenhado: {{ui:Faces}} ({{ui:Sombreado}}, {{ui:Linhas ocultas}}, {{ui:Arames}}, {{ui:Raio X}}), {{ui:Mostrar arestas}} e {{ui:Sombras do sol}} com a data, a hora e o local do sol. Veja [Estilos e sombras do sol](topic:styles-shadows).

**{{ui:Cenas}}** guarda vistas: {{ui:Adicionar cena}}, a lista de cenas e {{ui:Anterior}}, {{ui:Reproduzir}} e {{ui:Seguinte}}. Veja [Guardar vistas como cenas](topic:scenes).

## A barra de estado

Ao longo do fundo, da esquerda para a direita:

1. **A sugestão**: o que a ferramenta quer a seguir, ou a que o ponteiro está a fazer snap («Extremidade», «No eixo vermelho»).
2. **As mensagens**: o que acabou de acontecer («Empurrar/puxar anulado.», «Site.dxf importado: 1697 arestas no chão, num grupo.») ou porque é que algo não funcionou.
3. **A caixa de valores**: o seu rótulo muda com a ferramenta ({{ui:Comprimento}}, {{ui:Dimensões}}, {{ui:Raio}}, {{ui:Lados}}, {{ui:Distância}}, {{ui:Ângulo}}, {{ui:Escala}}, {{ui:Offset}}). Mostra o tamanho em direto enquanto trabalha e aceita o que escrever. Veja [Escrever tamanhos exatos na caixa de valores](topic:value-box).
4. **O estilo de teclas**: {{ui:Teclas: empurrar/puxar}} ou {{ui:Teclas: modelador}} muda de uma só vez os atalhos de teclado e os botões do rato (o mesmo que nas [definições do ModelCraft](topic:settings)).
5. **{{ui:Snap}} e {{ui:Colisão}}**: fazer snap a pontos, arestas e eixos, e os sólidos pararem onde se tocam. Riscado = desligado. Clique para alternar. Veja [Definições do ModelCraft](topic:settings).
6. **O seletor de unidades**: a unidade em que os comprimentos são mostrados. Veja [Começar](topic:getting-started#check-the-units-first).

## Num ecrã estreito

Abaixo de cerca de 760 píxeis de largura (um telemóvel, ou uma janela estreita), a vista 3D fica com o ecrã. A barra de ferramentas é uma só linha que se desloca para o lado, e os painéis abrem-se como folhas a partir da barra no fundo do ecrã.
