---
title: Abrir, salvar, importar e exportar
summary: O arquivo do ModelCraft, o que você pode trazer e enviar, para onde vão os arquivos e o que muda offline e entre navegadores.
keywords: abrir, salvar, importar, exportar, arquivo, 3dm, skp, recuperar, salvamento automático, recentes, desktop, abrir em 3D, transferência, baixar, arquivo do modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, offline, salvar como
from: 3f09ab72
---

O ModelCraft lê e salva arquivos no seu computador. Nada é enviado: um arquivo que você abre é lido dentro do seu navegador, e um arquivo que você salva é um download. Veja [Onde seus arquivos ficam](common:your-files).

## Formatos em resumo

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sim | não | {{ui:Salvar}} | Seu arquivo de trabalho. Mantém tudo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sim | sim | {{ui:Salvar como}}, {{ui:Exportar}} | Programas de renderização e montagem de cenas. O USD do próprio ModelCraft mantém tudo. Veja [Salvar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | não | sim | não | Para trazer modelos do SketchUp. Mantém grupos, componentes, cores, texturas nas faces, etiquetas e arestas suaves. Veja [Trazer um modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | não | sim | sim | Troca de modelos com outros programas de modelagem 3D. Mantém grupos, componentes e cores. |
| OBJ (`.obj`) | não | sim | sim | Programas de renderização e visualização. |
| glTF (`.glb`, `.gltf`) | não | sim | somente `.glb` | Visualizadores web, motores de jogos, RA. |
| STL (`.stl`) | não | sim | sim | Impressão 3D (em milímetros). |
| PLY (`.ply`) | não | sim | sim | Malhas com cores: digitalizações, impressão colorida. |
| FBX (`.fbx`) | não | sim | não | Modelos de programas de animação e jogos (FBX 2011 e mais novos). |
| Alembic (`.abc`) | não | sim | não | Caches de geometria, na primeira amostra. |
| STEP (`.step`, `.stp`) | não | sim | não | Peças de programas de modelagem de peças e de fornecedores, como malhas fechadas no tamanho real. Veja [Formatos de arquivo](topic:formats). |
| `.3dm` | não | sim | não | Modelos NURBS: polissuperfícies, malhas, curvas, blocos e camadas, como malhas, arestas, componentes e etiquetas. Veja [Trazer um modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | não | não | sim | Impressão 3D, com cores (em milímetros). Em {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Deixar um modelo pronto para impressão 3D](topic:print-3d). |
| IFC (`.ifc`) | não | não | sim | Programas BIM e o BimCraft. |
| DWG (`.dwg`) | não | sim | sim | Uma planta de implantação ou de pavimento para modelar sobre; enviar o modelo a um programa CAD. |
| DXF (`.dxf`) | não | sim | sim | O mesmo, para qualquer programa CAD. |

[Formatos de arquivo em detalhe](topic:formats) lista exatamente o que cada formato mantém e o que deixa de fora.

## O arquivo do ModelCraft

Um arquivo `.modelcraft` mantém o modelo inteiro: geometria, grupos, componentes, guias, cenas, as unidades, e a câmera e o estilo que você usava ao salvar. Ele não mantém o histórico de desfazer.

### Abrir um modelo

1. Clique em {{ui:Abrir}} no grupo {{ui:Arquivo}}, ou pressione {{key:Mod+O}}.
2. Se o modelo na tela tiver alterações não salvas, o ModelCraft pergunta: "Este modelo tem alterações não salvas. Salvar uma cópia primeiro?" Escolha {{ui:Salvar uma cópia}}, {{ui:Descartar alterações}} ou {{ui:Cancelar}}.
3. Escolha o arquivo `.modelcraft`.

O modelo abre nas unidades em que foi salvo, com a câmera em que foi salvo. Você também pode arrastar um arquivo `.modelcraft` para a visualização 3D, ou clicar em um arquivo da lista de recentes no cartão inicial (em navegadores que conseguem reabrir um arquivo, e no aplicativo de desktop).

:::desktop
No aplicativo de desktop, clicar duas vezes em um arquivo `.modelcraft` o abre no ModelCraft, e o mesmo acontece com **Abrir com** em um arquivo Collada, OBJ, glTF, DWG ou DXF (ele é importado para um modelo novo).
:::

### Salvar um modelo

Clique em {{ui:Salvar}} ou pressione {{key:Mod+S}}. O navegador baixa `<name>.modelcraft`, em que o nome é o do arquivo que você abriu, ou "Untitled" para um modelo novo.

:::desktop
No aplicativo de desktop, {{ui:Salvar}} grava o arquivo que você abriu no mesmo lugar. Um modelo novo pergunta onde salvar.
:::

- {{ui:Salvar como}} ({{key:Mod+Shift+S}}) salva uma cópia como arquivo `.modelcraft` ou como [USD](topic:usd); onde o navegador permitir, ele pede o nome e o local. Caso contrário, renomeie o arquivo baixado: o próximo salvamento, depois que você abrir o arquivo renomeado, usa o novo nome.
- Cada salvamento é um novo download. Dependendo das configurações do navegador, ele vai direto para a pasta de downloads ou pergunta onde salvar. Se já houver um arquivo com esse nome, a maioria dos navegadores acrescenta um número, como `Untitled (1).modelcraft`.

:::chromium
Para escolher a pasta toda vez, abra as configurações do navegador, pesquise por "downloads" e ative "Perguntar onde salvar cada arquivo antes de fazer o download".
:::

:::firefox
Para escolher a pasta toda vez, abra **Configurações**, depois **Geral**, e em "Downloads" escolha "Sempre perguntar onde salvar arquivos".
:::

:::safari
Para mudar o local dos downloads, abra o **Safari**, depois **Ajustes**, depois **Geral**, e defina "Local de download de arquivos".
:::

### Começar um modelo novo

Clique em {{ui:Novo}}. Se houver alterações não salvas, o ModelCraft pergunta antes. Um modelo novo começa vazio, na unidade da sua configuração regional (pés e polegadas nos Estados Unidos, milímetros nos demais países), sem cenas.

### Se o navegador fechar antes de você salvar

O ModelCraft mantém uma cópia do trabalho não salvo no seu navegador alguns segundos após cada alteração. A cópia é feita em segundo plano, para que um modelo grande não atrapalhe você. Se a aba ou o navegador fechar antes de você salvar, na próxima vez que abrir o ModelCraft ele pergunta "Recuperar seu trabalho?". Recuperar abre o modelo como estava, ainda não salvo em um arquivo: salve-o para mantê-lo. Veja [Recuperar seu trabalho](common:recover).

### Do CadCraft: Abrir no ModelCraft

No aplicativo de desenho CadCraft, **Exibir**, depois **Mais**, depois **Abrir no ModelCraft** envia o desenho aberto para o ModelCraft em uma nova aba, como DWG. Ele chega como um DWG importado: linhas no chão, em um grupo, prontas para modelar sobre elas. Nada é enviado; o arquivo passa pelo armazenamento do próprio navegador.

## Importar

Importar adiciona um arquivo ao modelo que você tem aberto; não substitui o modelo.

1. Clique em {{ui:Importar}} no grupo {{ui:Arquivo}}, ou arraste o arquivo para a visualização 3D.
2. Escolha um arquivo SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O arquivo chega como **um grupo**, selecionado, e a visualização dá zoom para mostrá-lo. A barra de status diz o que entrou e lista o que não pôde ser importado, como "Não importado: 2 textura".

3. Para trabalhar diretamente na geometria, clique duas vezes no grupo para editar dentro dele, ou clique em {{ui:Explodir}}.

Algumas coisas para saber:

- **Tamanho e direção para cima:** arquivos Collada informam a unidade e qual eixo é o para cima, e o ModelCraft os converte. glTF está sempre em metros. Arquivos OBJ não trazem unidade: o ModelCraft os lê como metros, com Y para cima. Se um OBJ entrar 1000 vezes maior ou menor, use [Escala](topic:rotate-scale) com um fator como `0.001` ou `1000`.
- **DWG e DXF** entram como linhas (arestas) no chão, não como faces. Se o desenho não informar a unidade, uma caixa de diálogo intitulada "Unidades do desenho" pergunta o que é uma unidade do desenho. Veja [Modelar sobre uma planta de implantação](topic:site-plan).
- **Limites:** arquivos com mais de 300 MB são recusados para importação, e com mais de 200 MB para abrir. Arquivos com mais de 2 milhões de vértices ou faces são recusados por serem grandes demais. Um OBJ com mais de 64 MB é recusado antes de ser lido. Arquivos de texto (Collada, OBJ, STL ASCII, USD em texto) são lidos em partes de cerca de 4 MB, então nenhum bloco de texto contém o arquivo inteiro; um OBJ de 16 MB usou cerca de 0.5 GB de memória ao abrir em nosso teste.

## Exportar

1. Clique em {{ui:Exportar}} no grupo {{ui:Arquivo}}.
2. Escolha um formato: {{ui:glTF binário (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impressão (.stl, milímetros)}}, {{ui:PLY com cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para o BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador baixa o arquivo, com o nome do modelo. Todo o modelo é exportado, não só a seleção. Arquivos glTF, Collada e OBJ são gerados em segundo plano, então o ModelCraft continua funcionando enquanto um modelo grande é exportado; o download começa quando o arquivo estiver pronto. Um modelo vazio não é exportado: "O modelo está vazio: desenhe algo primeiro." Veja [Exportar um modelo para outros programas](topic:export-model).

## Online e offline

Tudo no ModelCraft roda no seu computador, então modelar, abrir, salvar, importar e exportar funcionam sem conexão depois que o aplicativo é carregado.

Para abrir o ModelCraft sem nenhuma conexão, salve-o para uso offline enquanto estiver online:

1. Clique em {{ui:Salvar para uso offline}} na barra de aplicativo, no topo.
2. O botão mostra a contagem ("Salvando 40 de 212") enquanto salva. O ModelCraft salva os próprios arquivos (entre eles o leitor de DWG), esta ajuda e a biblioteca 3D, então pode levar algum tempo.
3. Quando o botão mostrar {{ui:Pronto para uso offline}}, o ModelCraft abre pelo mesmo endereço sem conexão, e a importação de DWG também funciona offline.

Clique em {{ui:Pronto para uso offline}} depois para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Se o botão mostrar {{ui:Não foi possível salvar}}, alguns arquivos não foram baixados: verifique a conexão e clique nele para tentar de novo. {{ui:Offline indisponível}} significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores gerenciados). Veja [Trabalhar offline](common:offline).

O salvamento na nuvem ainda não está disponível. Cada modelo fica onde você o salvou.

:::offline
Você está offline. Pode continuar modelando e salvando. A menos que a barra de aplicativo mostre {{ui:Pronto para uso offline}}, não recarregue esta aba até voltar a ficar online.
:::

## Aplicativo de desktop

:::desktop
Você está usando o ModelCraft no CadCraft Studio, o aplicativo de desktop com todos os oito aplicativos. Os arquivos são abertos e salvos onde você escolher.
:::

:::web
O ModelCraft roda no navegador em Mac, Windows e Linux, e no CadCraft Studio, o aplicativo de desktop com todos os oito aplicativos em uma só instalação, em getcadcraft.com/download.
:::
