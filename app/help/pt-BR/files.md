---
title: Abrir, salvar, importar e exportar
summary: O arquivo do ModelCraft, o que você pode trazer e enviar, para onde os arquivos vão e o que muda offline e entre navegadores.
keywords: abrir, salvar, importar, exportar, arquivo, 3dm, skp, recuperar, salvamento automático, recentes, desktop, abrir em 3d, transferência, download, arquivo modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, offline, salvar como
from: 0b4896d1
---

O ModelCraft lê e grava arquivos no seu computador. Nada é enviado: um arquivo que você abre é lido dentro do navegador, e um arquivo que você salva é um download. Veja [Para onde vão os seus arquivos](common:your-files).

## Formatos de relance

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sim | não | {{ui:Salvar}} | O seu arquivo de trabalho. Guarda tudo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sim | sim | {{ui:Salvar como}}, {{ui:Exportar}} | Programas de renderização e de montagem de cenas. O USD do próprio ModelCraft guarda tudo. Veja [Salvar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | não | sim | não | Trazer modelos do SketchUp. Mantém grupos, componentes, cores, texturas nas faces, etiquetas e arestas suavizadas. Veja [Trazer um modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | não | sim | sim | Trocar modelos com outros modeladores 3D. Mantém grupos, componentes e cores. |
| OBJ (`.obj`) | não | sim | sim | Programas de renderização e de visualização. |
| glTF (`.glb`, `.gltf`) | não | sim | somente `.glb` | Visualizadores web, motores de jogos, RA. |
| STL (`.stl`) | não | sim | sim | Impressão 3D (em milímetros). |
| PLY (`.ply`) | não | sim | sim | Malhas com cores: escaneamentos, impressão colorida. |
| FBX (`.fbx`) | não | sim | não | Modelos de programas de animação e de jogos (FBX 2011 e mais recentes). |
| Alembic (`.abc`) | não | sim | não | Caches de geometria, no primeiro quadro amostrado. |
| STEP (`.step`, `.stp`) | não | sim | não | Peças de modeladores de peças e de fornecedores, como malhas fechadas no tamanho real. Veja [Formatos de arquivo](topic:formats). |
| `.3dm` | não | sim | não | Modelos NURBS: polissuperfícies, malhas, curvas, blocos e camadas, como malhas, arestas, componentes e etiquetas. Veja [Trazer um modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | não | não | sim | Impressão 3D, com cores (em milímetros). A partir de {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Preparar um modelo para impressão 3D](topic:print-3d). |
| IFC (`.ifc`) | não | não | sim | Programas BIM e o BimCraft. |
| DWG (`.dwg`) | não | sim | sim | Uma planta de implantação ou uma planta baixa para modelar sobre ela; enviar o modelo a um programa CAD. |
| DXF (`.dxf`) | não | sim | sim | O mesmo, para qualquer programa CAD. |

[Formatos de arquivo em detalhe](topic:formats) lista exatamente o que cada formato mantém e o que deixa de fora.

## O arquivo do ModelCraft

Um arquivo `.modelcraft` guarda o modelo inteiro: geometria, grupos, componentes, guias, cenas, as unidades e a câmera e o estilo que você usava ao salvar. Ele não guarda o histórico de desfazer.

### Abrir um modelo

1. Clique em {{ui:Abrir}} no grupo {{ui:Arquivo}}, ou pressione {{key:Mod+O}}.
2. Se o modelo na tela tiver alterações não salvas, o ModelCraft pergunta: "Este modelo tem alterações que não foram salvas. Salvar uma cópia primeiro?" Escolha {{ui:Salvar uma cópia}}, {{ui:Descartar alterações}} ou {{ui:Cancelar}}.
3. Escolha o arquivo `.modelcraft`.

O modelo abre nas unidades em que foi salvo, com a câmera com que foi salvo. Você também pode soltar um arquivo `.modelcraft` sobre a vista 3D, ou clicar em um da lista de arquivos recentes no cartão inicial (navegadores que conseguem reabrir um arquivo, e o aplicativo desktop).

:::desktop
No aplicativo desktop, clicar duas vezes em um arquivo `.modelcraft` o abre no ModelCraft, e o mesmo vale para **Abrir com** em um arquivo Collada, OBJ, glTF, DWG ou DXF (ele é importado para um novo modelo).
:::

### Salvar um modelo

Clique em {{ui:Salvar}} ou pressione {{key:Mod+S}}. O navegador baixa `<nome>.modelcraft`, em que o nome é o do arquivo que você abriu, ou "Untitled" em um modelo novo.

:::desktop
No aplicativo desktop, {{ui:Salvar}} grava no próprio arquivo que você abriu. Um modelo novo pergunta onde salvar.
:::

- {{ui:Salvar como}} ({{key:Mod+Shift+S}}) salva uma cópia como arquivo `.modelcraft` ou como [USD](topic:usd); quando o navegador permite, ele pergunta o nome e o local. Caso contrário, renomeie o arquivo baixado: o próximo salvamento depois de abrir o arquivo renomeado usa o novo nome.
- Cada salvamento é um novo download. Dependendo das configurações do navegador, ele vai direto para a pasta de downloads ou pergunta onde salvar. Se já houver ali um arquivo com esse nome, a maioria dos navegadores acrescenta um número, como `Untitled (1).modelcraft`.

:::chromium
Para escolher a pasta toda vez, abra as configurações do navegador, procure por "downloads" e ative "Perguntar onde salvar cada arquivo antes de fazer download".
:::

:::firefox
Para escolher a pasta toda vez, abra **Configurações**, depois **Geral**, e em "Downloads" escolha "Sempre perguntar onde salvar os arquivos".
:::

:::safari
Para mudar para onde vão os downloads, abra o **Safari**, depois **Configurações**, depois **Geral**, e defina "Local de download de arquivos".
:::

### Começar um novo modelo

Clique em {{ui:Novo}}. Se houver alterações não salvas, o ModelCraft pergunta antes. Um modelo novo começa vazio, na unidade do seu idioma e região (pés e polegadas nos Estados Unidos, milímetros em outros lugares), sem cenas.

### Se o navegador fechar antes de você salvar

O ModelCraft guarda no navegador uma cópia do trabalho não salvo, alguns segundos depois de cada alteração. Se a guia ou o navegador fechar antes de você salvar, na próxima vez que abrir o ModelCraft ele pergunta "Recuperar seu trabalho?". Ao recuperar, o modelo abre como estava, ainda não salvo em um arquivo: salve-o para mantê-lo. Veja [Recuperar o seu trabalho](common:recover).

### Do CadCraft: Abrir no ModelCraft

No aplicativo de desenho CadCraft, **Vista**, depois **Mais**, depois **Abrir no ModelCraft** entrega o desenho aberto ao ModelCraft em uma nova guia, como um DWG. Ele chega como um DWG importado: linhas no chão, em um grupo, prontas para modelar sobre elas. Nada é enviado; o arquivo passa pelo armazenamento do próprio navegador.

## Importar

Importar adiciona um arquivo ao modelo que você tem aberto; não o substitui.

1. Clique em {{ui:Importar}} no grupo {{ui:Arquivo}}, ou solte o arquivo sobre a vista 3D.
2. Escolha um arquivo SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O arquivo chega como **um só grupo**, selecionado, e a vista dá zoom para mostrá-lo. A barra de status diz o que entrou e lista o que não pôde ser importado, como "Não importado: 2 texture".

3. Para trabalhar direto na geometria dele, clique duas vezes no grupo para editar dentro dele, ou clique em {{ui:Explodir}}.

Algumas coisas a saber:

- **Tamanho e direção para cima:** os arquivos Collada informam a unidade e qual eixo aponta para cima, e o ModelCraft os converte. O glTF está sempre em metros. Os arquivos OBJ não trazem unidade: o ModelCraft os lê como metros, com Y para cima. Se um OBJ chegar 1000 vezes maior ou menor, use [Escala](topic:rotate-scale) com um fator como `0.001` ou `1000`.
- **DWG e DXF** chegam como linhas (arestas) no chão, não como faces. Se o desenho não informar a unidade, uma caixa de diálogo intitulada "Unidades do desenho" pergunta quanto vale uma unidade do desenho. Veja [Modelar sobre uma planta de implantação](topic:site-plan).
- **Limites:** arquivos acima de 300 MB são recusados na importação, e acima de 200 MB na abertura. Arquivos com mais de 2 milhões de vértices ou faces são recusados por serem grandes demais.

## Exportar

1. Clique em {{ui:Exportar}} no grupo {{ui:Arquivo}}.
2. Escolha um formato: {{ui:glTF binário (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impressão (.stl, milímetros)}}, {{ui:PLY com cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para o BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador baixa o arquivo, com o nome do modelo. O modelo inteiro é exportado, não só a seleção. Um modelo vazio não é exportado: "O modelo está vazio: desenhe algo primeiro." Veja [Exportar um modelo para outros programas](topic:export-model).

## Online e offline

Tudo no ModelCraft roda no seu computador, então modelar, abrir, salvar, importar e exportar funcionam sem conexão depois que o aplicativo é carregado.

Para abrir o ModelCraft sem nenhuma conexão, salve-o para uso offline enquanto estiver online:

1. Clique em {{ui:Salvar para uso offline}} na barra do aplicativo, no alto.
2. O botão faz a contagem ("Salvando 40 de 212") enquanto salva. O ModelCraft salva os próprios arquivos (entre eles o leitor de DWG), esta ajuda e a biblioteca 3D, então pode levar um tempo.
3. Quando o botão mostrar {{ui:Pronto para uso offline}}, o ModelCraft abre do mesmo endereço sem conexão, e a importação de DWG também funciona offline.

Mais tarde, clique em {{ui:Pronto para uso offline}} para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Se o botão mostrar {{ui:Não foi possível salvar}}, alguns arquivos não foram baixados: verifique a conexão e clique nele para tentar de novo. {{ui:Offline indisponível}} significa que esta janela do navegador não consegue guardar uma cópia (janelas privadas e alguns computadores gerenciados). Veja [Trabalhar offline](common:offline).

O salvamento na nuvem ainda não está disponível. Cada modelo fica onde você o salva.

:::offline
Você está offline. Pode continuar modelando e salvando. A menos que a barra do aplicativo mostre {{ui:Pronto para uso offline}}, não recarregue esta guia até voltar a ficar online.
:::

## Aplicativo desktop

:::desktop
Você está usando o ModelCraft no CadCraft Studio, o aplicativo desktop com todos os oito aplicativos. Os arquivos abrem e salvam onde você escolher.
:::

:::web
O ModelCraft roda no navegador no Mac, no Windows e no Linux, e no CadCraft Studio, o aplicativo desktop com os oito aplicativos em uma só instalação, em getcadcraft.com/download.
:::
