---
title: A tela do ModelCraft
summary: Um passeio pela barra de ferramentas, pelos painéis de cada lado, pela vista 3D e pela barra de status, com os nomes que aparecem na tela.
keywords: tela, layout, barra de ferramentas, painéis, estrutura, informações da entidade, estilo, cenas, barra de status, caixa de valores, unidades, interface, passeio
from: 4a9a4516
---

De cima para baixo: a barra do aplicativo, a barra de ferramentas, as três colunas (painéis à esquerda, vista 3D, painéis à direita) e a barra de status.

## A barra do aplicativo

A barra fina no alto da tela pertence a todos os aplicativos CadCraft. Ela tem o nome e a versão do aplicativo, {{ui:Sobre o ModelCraft}}, o botão de modo de tela e a chave {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Papel}} é o tema claro e {{ui:Modelo}} o escuro. A vista 3D muda as cores para combinar; o seu modelo não muda.
- O botão de modo de tela (no início ele mostra {{ui:Tela cheia}}) e {{key:Ctrl+Shift+F}} alternam entre três modos: normal, tela cheia e tela cheia com as barras ocultas. Com as barras ocultas, aponte para a borda superior da tela (ou toque nela) para trazê-las de volta. {{key:Esc}} sai da tela cheia.

:::note
{{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, inclusive no Mac. No iPhone, onde os navegadores não têm tela cheia, o botão apenas oculta e mostra as barras.
:::

## A barra de ferramentas

A barra de ferramentas é dividida em grupos com rótulo. Passe o ponteiro sobre um botão para ver o nome e a tecla dele.

Na extremidade esquerda, a lista {{ui:Área de trabalho}} troca a finalidade da barra de ferramentas e do painel da direita: {{ui:Modelo}} (modelagem de empurrar/puxar, o passeio abaixo), {{ui:Malha}} ([editar uma malha](topic:mesh-edit)), {{ui:Curva}} ([objetos de curva](topic:curves)), {{ui:UV}} ([organizar UVs](topic:uv)), {{ui:Esculpir}} ([esculpir](topic:sculpt)), {{ui:Sombreamento}} ([materiais feitos com nós](topic:shading)), {{ui:Animar}} ([animar](topic:animate)) e {{ui:Renderizar}} ([renderizar na vista](topic:render#render-in-the-view)).

| Grupo | Botões |
|---|---|
| Arquivo | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Salvar}}, {{ui:Importar}}, {{ui:Exportar}} (um menu de formatos) |
| Desenhar | {{ui:Linha}} ({{key:L}}), {{ui:Retângulo}} ({{key:R}}), {{ui:Círculo}} ({{key:C}}), {{ui:Polígono}} ({{key:N}}) |
| Modificar | {{ui:Selecionar}} ({{key:Space}}), {{ui:Empurrar/puxar}} ({{key:P}}), {{ui:Mover}} ({{key:M}}), {{ui:Girar}} ({{key:Q}}), {{ui:Escala}} ({{key:S}}), {{ui:Borracha}} ({{key:E}}), {{ui:Fita métrica}} ({{key:T}}) |
| Organizar | {{ui:Componente}} ({{key:G}}), {{ui:Grupo}} ({{key:Shift+G}}), {{ui:Explodir}} |
| Editar | {{ui:Desfazer}} ({{key:Mod+Z}}), {{ui:Refazer}} ({{key:Mod+Y}}), {{ui:Copiar}} ({{key:Mod+C}}), {{ui:Colar}} ({{key:Mod+V}}), {{ui:Mais}} (um menu: recortar, copiar, colar, colar no mesmo local {{key:Mod+Shift+V}}, duplicar {{key:Mod+D}}, excluir, selecionar tudo, limpar seleção e o estilo de teclas) |
| Câmera | {{ui:Órbita}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extensão}} ({{key:Shift+Z}}), {{ui:Vistas}} (um menu) |

As teclas mostradas são as de empurrar/puxar; com o estilo Modelagem escolhido em [Configurações do ModelCraft](topic:settings), as dicas mostram aquelas teclas. A ferramenta em uso aparece pressionada. Em uma tela estreita, a barra de ferramentas rola para o lado.

O menu {{ui:Vistas}} tem {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Direita}}, {{ui:Posterior}}, {{ui:Esquerda}} e {{ui:Inferior}}, cada uma ajustada ao modelo, e {{ui:Perspectiva}}, que alterna entre projeção em perspectiva e paralela.

## A vista 3D

O meio da tela. As linhas vermelha, verde e azul são os eixos: o vermelho e o verde ficam no chão, o azul aponta para cima, e **o norte é o eixo verde**. Onde eles se encontram fica a origem.

- Ao começar, um cartão intitulado "Comece a modelar" lista as primeiras teclas. Ele some quando você escolhe uma ferramenta de desenho ou clica na vista.
- Enquanto uma ferramenta trabalha, a vista mostra **marcadores de inferência**: pequenas formas coloridas onde o ponteiro faz snap (um círculo verde em uma extremidade, um ciano em um ponto médio, um quadrado vermelho em uma aresta, um losango azul em uma face). Veja [Inferência e snap](topic:inference).
- O que está selecionado fica azul. Uma face vista por trás é cinza-azulada.
- Ao abrir um grupo para editá-lo, tudo o que está fora dele esmaece, e os eixos passam para os eixos do próprio grupo.
- Quando um modelo tem cenas, uma fileira de guias de cena aparece no alto da vista.
- Solte um arquivo em qualquer lugar da vista para abri-lo ou importá-lo.

## Os painéis da esquerda

**{{ui:Estrutura}}** lista os grupos e componentes do modelo, aninhados como estão aninhados no modelo. Um componente usado mais de uma vez mostra quantas, como "Window (4)".

- Clique em um nome para selecioná-lo. Clique duas vezes para abri-lo para edição.
- **Localizar pelo nome** (mostrado quando há dois ou mais grupos) mantém só as linhas cujo nome corresponde, junto com os grupos em que estão. {{key:Esc}} limpa o filtro.
- O **olho** no fim de uma linha oculta ou mostra aquele grupo ou componente (como {{ui:Editar}} › {{ui:Mais}} › {{ui:Ocultar}}). Um ícone de etiqueta indica que ele está oculto pela sua [etiqueta](topic:tags).
- **Renomear no lugar:** clique em uma linha, pressione {{key:F2}}, digite e pressione {{key:Enter}} ({{key:Esc}} mantém o nome antigo).
- **Arraste uma linha** para o meio da linha de outro grupo para movê-la para dentro desse grupo, para a borda superior ou inferior de uma linha para colocá-la logo antes ou depois dela, ou para o título {{ui:Estrutura}} para levá-la ao nível superior. Ela continua no mesmo lugar do modelo e mantém a cor, a etiqueta e o nome. Um grupo não pode ir para dentro de si mesmo. Cada movimento é uma etapa de desfazer. Veja [Reorganizar na Estrutura](topic:groups-components#rearrange-in-the-outliner).
- Enquanto você edita dentro de um grupo, uma linha mostra "Editando: Modelo › …", e aparece um botão {{ui:Fechar grupo}}. Ele fecha todos os níveis abertos de uma vez.

**{{ui:Componentes}}** lista todas as definições de componente com quantas cópias estão inseridas ("3×") e um botão {{ui:Inserir}} que adiciona outra cópia onde você clicar.

## Os painéis da direita

**{{ui:Informações da entidade}}** descreve o que está selecionado. O título muda para dizer o que é:

| Título | Mostra | Botões |
|---|---|---|
| Modelo (nada selecionado) | Faces, arestas, grupos, componentes e quantos estão inseridos, guias, tamanho total | {{ui:Excluir todas as linhas-guia}} (quando há guias) |
| Face | Área, número de furos | {{ui:Inverter face}} |
| Aresta | Comprimento | nenhum |
| Grupo ou componente | Nome (digite para renomear), quantas vezes está inserido, se é um sólido fechado, o volume, o tamanho | {{ui:Editar}}, {{ui:Explodir}}, {{ui:Tornar único}} (um componente inserido mais de uma vez), {{ui:Criar componente}} (um grupo) |
| Ponto de guia ou linha-guia | nada | {{ui:Excluir}} |
| Várias coisas | Quantas faces, arestas, grupos e guias, a área total das faces | {{ui:Criar componente (G)}}, {{ui:Criar grupo (Shift+G)}} |

**{{ui:Estilo}}** define como o modelo é desenhado: {{ui:Faces}} ({{ui:Sombreado}}, {{ui:Linhas ocultas}}, {{ui:Estrutura de arame}}, {{ui:Raio X}}), {{ui:Mostrar arestas}} e {{ui:Sombras do sol}} com a data, a hora e o local do sol. Veja [Estilos e sombras do sol](topic:styles-shadows).

**{{ui:Cenas}}** salva vistas: {{ui:Adicionar cena}}, a lista de cenas e {{ui:Anterior}}, {{ui:Reproduzir}} e {{ui:Próxima}}. Veja [Salvar vistas como cenas](topic:scenes).

## A barra de status

Ao longo da base, da esquerda para a direita:

1. **A dica**: o que a ferramenta quer em seguida, ou a que o ponteiro está fazendo snap ("Extremidade", "No eixo vermelho").
2. **Mensagens**: o que acabou de acontecer ("Empurrar/puxar desfeito.", "site.dxf importado: 1697 arestas no chão, em um grupo.") ou por que algo não funcionou.
3. **A caixa de valores**: o rótulo muda com a ferramenta ({{ui:Comprimento}}, {{ui:Dimensões}}, {{ui:Raio}}, {{ui:Lados}}, {{ui:Distância}}, {{ui:Ângulo}}, {{ui:Escala}}, {{ui:Deslocamento}}). Ela mostra o tamanho ao vivo enquanto você trabalha e recebe o que você digita. Veja [Digitar tamanhos exatos na caixa de valores](topic:value-box).
4. **O estilo de teclas**: {{ui:Teclas: empurrar/puxar}} ou {{ui:Teclas: modelagem}} troca de uma vez os atalhos de teclado e os botões do mouse (o mesmo que em [Configurações do ModelCraft](topic:settings)).
5. **{{ui:Snap}} e {{ui:Colisão}}**: snap em pontos, arestas e eixos, e sólidos que param onde se tocam. Riscado = desligado. Clique para alternar. Veja [Configurações do ModelCraft](topic:settings).
6. **O seletor de unidades**: a unidade em que os comprimentos são mostrados. Veja [Primeiros passos](topic:getting-started#check-the-units-first).

## Em uma tela estreita

Abaixo de cerca de 760 pixels de largura (um celular ou uma janela estreita), a vista 3D ocupa a tela. A barra de ferramentas vira uma só linha que rola para o lado, e os painéis abrem como folhas a partir da barra na base da tela.
