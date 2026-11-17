---
title: Abrir, guardar, importar e exportar
summary: O ficheiro ModelCraft, o que pode trazer e enviar, onde os ficheiros ficam e o que muda offline e entre navegadores.
keywords: abrir, guardar, importar, exportar, ficheiro, 3dm, skp, recuperar, gravação automática, recentes, ambiente de trabalho, abrir em 3D, transferência, ficheiro modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, offline, guardar como
from: 3f09ab72
---

O ModelCraft lê e escreve ficheiros no computador. Nada é enviado: um ficheiro que abre é lido dentro do seu navegador, e um ficheiro que guarda é uma transferência. Veja [Para onde vão os ficheiros](common:your-files).

## Formatos em resumo

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sim | não | {{ui:Guardar}} | O seu ficheiro de trabalho. Mantém tudo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sim | sim | {{ui:Guardar como}}, {{ui:Exportar}} | Programas de renderização e de montagem de cenas. O USD do próprio ModelCraft mantém tudo. Veja [Guardar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | não | sim | não | Para importar modelos do SketchUp. Mantém grupos, componentes, cores, texturas nas faces, etiquetas e arestas suaves. Veja [Importar um modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | não | sim | sim | Para trocar modelos com outros modeladores 3D. Mantém grupos, componentes e cores. |
| OBJ (`.obj`) | não | sim | sim | Programas de renderização e de visualização. |
| glTF (`.glb`, `.gltf`) | não | sim | só `.glb` | Visualizadores na web, motores de jogos, realidade aumentada. |
| STL (`.stl`) | não | sim | sim | Impressão 3D (em milímetros). |
| PLY (`.ply`) | não | sim | sim | Malhas com cores: digitalizações, impressão a cores. |
| FBX (`.fbx`) | não | sim | não | Modelos de programas de animação e de jogos (FBX 2011 e posteriores). |
| Alembic (`.abc`) | não | sim | não | Caches de geometria, na primeira amostra. |
| STEP (`.step`, `.stp`) | não | sim | não | Peças de modeladores de peças e de fornecedores, como malhas fechadas à sua escala real. Veja [Formatos de ficheiro](topic:formats). |
| `.3dm` | não | sim | não | Modelos NURBS: polissuperfícies, malhas, curvas, blocos e camadas, como malhas, arestas, componentes e etiquetas. Veja [Importar um modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | não | não | sim | Impressão 3D, com cores (em milímetros). A partir de {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Preparar um modelo para impressão 3D](topic:print-3d). |
| IFC (`.ifc`) | não | não | sim | Programas BIM e o BimCraft. |
| DWG (`.dwg`) | não | sim | sim | Uma planta de implantação ou de piso para modelar; enviar o modelo para um programa CAD. |
| DXF (`.dxf`) | não | sim | sim | O mesmo, para qualquer programa CAD. |

[Formatos de ficheiro em detalhe](topic:formats) lista exatamente o que cada formato mantém e deixa de fora.

## O ficheiro ModelCraft

Um ficheiro `.modelcraft` mantém o modelo inteiro: geometria, grupos, componentes, guias, cenas, as unidades, e a câmara e o estilo que estava a usar ao guardar. Não mantém o histórico de anulações.

### Abrir um modelo

1. Clique em {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Se o modelo no ecrã tiver alterações não guardadas, o ModelCraft pergunta: « Este modelo tem alterações que não foram guardadas. Guardar uma cópia primeiro? » Escolha {{ui:Guardar uma cópia}}, {{ui:Descartar alterações}} ou {{ui:Cancelar}}.
3. Escolha o ficheiro `.modelcraft`.

O modelo abre-se nas unidades em que foi guardado, com a câmara com que foi guardado. Também pode largar um ficheiro `.modelcraft` na vista 3D, ou clicar num na lista de ficheiros recentes no cartão inicial (navegadores que podem reabrir um ficheiro, e a aplicação de ambiente de trabalho).

:::desktop
Na aplicação de ambiente de trabalho, um duplo clique num ficheiro `.modelcraft` abre-o no ModelCraft, e o mesmo acontece com **Abrir com** num ficheiro Collada, OBJ, glTF, DWG ou DXF (é importado para um modelo novo).
:::

### Guardar um modelo

Clique em {{ui:Guardar}} ou prima {{key:Mod+S}}. O navegador transfere `<name>.modelcraft`, onde o nome é o do ficheiro que abriu, ou "Sem título" para um modelo novo.

:::desktop
Na aplicação de ambiente de trabalho, {{ui:Guardar}} guarda o ficheiro aberto no mesmo sítio. Um modelo novo pergunta onde o guardar.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda uma cópia como ficheiro `.modelcraft` ou como [USD](topic:usd); quando o navegador o permitir, pede o nome e o local. Caso contrário, renomeie o ficheiro transferido: a próxima vez que guardar, depois de abrir o ficheiro renomeado, usa o novo nome.
- Cada vez que guarda é uma nova transferência. Consoante as definições do navegador, vai diretamente para a pasta de transferências ou pergunta onde guardar. Se já existir um ficheiro com esse nome, a maioria dos navegadores acrescenta um número, como `Untitled (1).modelcraft`.

:::chromium
Para escolher a pasta sempre, abra as definições do navegador, procure "transferências" e ative "Perguntar onde guardar cada ficheiro antes de transferir".
:::

:::firefox
Para escolher a pasta sempre, abra as **Definições**, depois **Geral**, e em "Transferências" escolha "Perguntar sempre onde guardar os ficheiros".
:::

:::safari
Para mudar o destino das transferências, abra o **Safari**, depois **Definições**, depois **Geral**, e defina "Localização de transferência de ficheiros".
:::

### Iniciar um modelo novo

Clique em {{ui:Novo}}. Se houver alterações não guardadas, o ModelCraft pergunta primeiro. Um modelo novo começa vazio, na unidade da sua região (pés e polegadas nos Estados Unidos, milímetros no resto do mundo), sem cenas.

### Se o navegador fechar antes de guardar

O ModelCraft guarda uma cópia do trabalho não guardado no navegador alguns segundos depois de cada alteração. A cópia é escrita em segundo plano, para que um modelo grande não o faça esperar enquanto é guardada. Se o separador ou o navegador fecharem antes de guardar, na próxima vez que abrir o ModelCraft ele pergunta "Recuperar o seu trabalho?". Recuperar abre o modelo tal como estava, ainda não guardado num ficheiro: guarde-o para não o perder. Veja [Recuperar o seu trabalho](common:recover).

### Do CadCraft: abrir no ModelCraft

Na aplicação de desenho CadCraft, **Ver**, depois **Mais**, depois **Abrir no ModelCraft** envia o desenho aberto para o ModelCraft num novo separador, como DWG. Chega da mesma forma que um DWG importado: linhas no solo, num grupo, prontas para modelar. Nada é enviado; o ficheiro passa pelo armazenamento do próprio navegador.

## Importar

Importar acrescenta um ficheiro ao modelo que tem aberto; não o substitui.

1. Clique em {{ui:Importar}} no grupo {{ui:Ficheiro}}, ou largue o ficheiro na vista 3D.
2. Escolha um ficheiro SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O ficheiro chega como **um grupo**, selecionado, e a vista faz zoom para o mostrar. A barra de estado indica o que entrou e lista o que não pôde ser importado, como "Não importado: 2 texturas".

3. Para trabalhar diretamente na sua geometria, faça duplo clique no grupo para editar dentro dele, ou clique em {{ui:Explodir}}.

Alguns aspetos a ter em conta:

- **Tamanho e sentido para cima:** os ficheiros Collada indicam a sua unidade e qual o eixo vertical, e o ModelCraft converte-os. glTF está sempre em metros. Os ficheiros OBJ não têm unidade: o ModelCraft lê-os em metros, com Y para cima. Se um OBJ entrar 1000 vezes maior ou menor do que o devido, use [Escala](topic:rotate-scale) com um fator como `0.001` ou `1000`.
- **DWG e DXF** entram como linhas (arestas) no solo, e não como faces. Se o desenho não indicar a sua unidade, uma caixa de diálogo intitulada "Unidades do desenho" pergunta o que é uma unidade do desenho. Veja [Modelar sobre uma planta de implantação](topic:site-plan).
- **Limites:** os ficheiros com mais de 300 MB são recusados para importação, e os de mais de 200 MB para abrir. Os ficheiros com mais de 2 milhões de vértices ou faces são recusados por serem demasiado grandes. Um OBJ com mais de 64 MB é recusado antes de ser lido. Os ficheiros de texto (Collada, OBJ, STL ASCII, USD de texto) são lidos por partes, de cerca de 4 MB, por isso nenhum bloco de texto contém o ficheiro inteiro; um OBJ de 16 MB usou cerca de 0.5 GB de memória enquanto abria no nosso teste.

## Exportar

1. Clique em {{ui:Exportar}} no grupo {{ui:Ficheiro}}.
2. Escolha um formato: {{ui:glTF binário (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impressão (.stl, milímetros)}}, {{ui:PLY com cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para o BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador transfere o ficheiro, com o nome do modelo. Exporta-se o modelo inteiro, e não apenas a seleção. Os ficheiros glTF, Collada e OBJ são escritos em segundo plano, por isso o ModelCraft continua a funcionar enquanto um modelo grande é exportado; a transferência começa quando o ficheiro estiver pronto. Um modelo vazio não é exportado: "O modelo está vazio: desenhe algo primeiro." Veja [Exportar um modelo para outros programas](topic:export-model).

## Online e offline

Tudo no ModelCraft corre no computador, por isso modelar, abrir, guardar, importar e exportar funcionam sem ligação, depois de a aplicação estar carregada.

Para abrir o ModelCraft sem qualquer ligação, guarde-o para uso offline enquanto estiver online:

1. Clique em {{ui:Guardar para offline}} na barra de aplicação, no topo.
2. O botão conta ("A guardar 40 de 212") enquanto guarda. O ModelCraft guarda os seus próprios ficheiros (entre eles o leitor de DWG), esta ajuda e a biblioteca 3D, por isso pode demorar algum tempo.
3. Quando o botão mostrar {{ui:Pronto para offline}}, o ModelCraft abre a partir do mesmo endereço sem ligação, e a importação de DWG também funciona offline.

Clique em {{ui:Pronto para offline}} mais tarde para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Se o botão mostrar {{ui:Não foi possível guardar}}, alguns ficheiros não foram transferidos: verifique a ligação e clique nele para tentar de novo. {{ui:Offline indisponível}} significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos). Veja [Trabalhar offline](common:offline).

Guardar na nuvem ainda não está disponível. Cada modelo fica onde o guardar.

:::offline
Está offline. Pode continuar a modelar e a guardar. A menos que a barra de aplicação mostre {{ui:Pronto para offline}}, não recarregue este separador até voltar a estar online.
:::

## Aplicação de ambiente de trabalho

:::desktop
Está a usar o ModelCraft no CadCraft Studio, a aplicação de ambiente de trabalho com as oito aplicações. Os ficheiros abrem-se e guardam-se onde escolher.
:::

:::web
O ModelCraft funciona no navegador em Mac, Windows e Linux, e no CadCraft Studio, a aplicação de ambiente de trabalho com as oito aplicações numa só instalação, em getcadcraft.com/download.
:::
