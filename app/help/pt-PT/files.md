---
title: Abrir, guardar, importar e exportar
summary: O ficheiro ModelCraft, o que pode trazer para dentro e enviar para fora, para onde vão os ficheiros, e o que muda offline e entre navegadores.
keywords: abrir, guardar, importar, exportar, ficheiro, 3dm, skp, recuperar, gravação automática, recentes, computador, abrir em 3d, transferência, transferir, ficheiro modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, offline, guardar como
from: 0b4896d1
---

O ModelCraft lê e escreve ficheiros no seu computador. Nada é carregado para um servidor: um ficheiro que abre é lido dentro do navegador, e um ficheiro que guarda é uma transferência. Veja [Para onde vão os seus ficheiros](common:your-files).

## Formatos num relance

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sim | não | {{ui:Guardar}} | O seu ficheiro de trabalho. Guarda tudo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sim | sim | {{ui:Guardar como}}, {{ui:Exportar}} | Programas de renderização e de montagem de cenas. O USD do próprio ModelCraft guarda tudo. Veja [Guardar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | não | sim | não | Trazer modelos do SketchUp. Conserva grupos, componentes, cores, texturas nas faces, etiquetas e arestas suavizadas. Veja [Trazer um modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | não | sim | sim | Trocar modelos com outros modeladores 3D. Conserva grupos, componentes e cores. |
| OBJ (`.obj`) | não | sim | sim | Programas de renderização e de visualização. |
| glTF (`.glb`, `.gltf`) | não | sim | só `.glb` | Visualizadores web, motores de jogos, AR. |
| STL (`.stl`) | não | sim | sim | Impressão 3D (em milímetros). |
| PLY (`.ply`) | não | sim | sim | Malhas com cores: digitalizações, impressão a cores. |
| FBX (`.fbx`) | não | sim | não | Modelos de programas de animação e de jogos (FBX 2011 e mais recentes). |
| Alembic (`.abc`) | não | sim | não | Caches de geometria, na sua primeira amostra. |
| STEP (`.step`, `.stp`) | não | sim | não | Peças de modeladores de peças e de fornecedores, como malhas fechadas no tamanho real. Veja [Formatos de ficheiro](topic:formats). |
| `.3dm` | não | sim | não | Modelos NURBS: polissuperfícies, malhas, curvas, blocos e camadas, como malhas, arestas, componentes e etiquetas. Veja [Trazer um modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | não | não | sim | Impressão 3D, com cores (em milímetros). A partir de {{ui:Verificar para impressão 3D (STL ou 3MF)…}}: veja [Preparar um modelo para impressão 3D](topic:print-3d). |
| IFC (`.ifc`) | não | não | sim | Programas BIM e o BimCraft. |
| DWG (`.dwg`) | não | sim | sim | Uma planta de implantação ou de um piso para modelar sobre ela; enviar o modelo para um programa de CAD. |
| DXF (`.dxf`) | não | sim | sim | O mesmo, para qualquer programa de CAD. |

[Formatos de ficheiro em pormenor](topic:formats) lista exatamente o que cada formato conserva e o que deixa de fora.

## O ficheiro ModelCraft

Um ficheiro `.modelcraft` conserva o modelo todo: geometria, grupos, componentes, linhas-guia, cenas, as unidades, e a câmara e o estilo que estava a usar quando guardou. Não conserva o histórico de anulações.

### Abrir um modelo

1. Clique em {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Se o modelo no ecrã tiver alterações por guardar, o ModelCraft pergunta: «Este modelo tem alterações que não foram guardadas. Guardar primeiro uma cópia?» Escolha {{ui:Guardar uma cópia}}, {{ui:Descartar alterações}} ou {{ui:Cancelar}}.
3. Escolha o ficheiro `.modelcraft`.

O modelo abre-se nas unidades em que foi guardado, com a câmara com que foi guardado. Também pode largar um ficheiro `.modelcraft` na vista 3D, ou clicar num da lista de ficheiros recentes do cartão inicial (navegadores que conseguem reabrir um ficheiro, e a aplicação para computador).

:::desktop
Na aplicação para computador, fazer duplo clique num ficheiro `.modelcraft` abre-o no ModelCraft, e o mesmo faz **Abrir com** num ficheiro Collada, OBJ, glTF, DWG ou DXF (é importado para um modelo novo).
:::

### Guardar um modelo

Clique em {{ui:Guardar}} ou prima {{key:Mod+S}}. O navegador transfere `<name>.modelcraft`, onde o nome é o do ficheiro que abriu, ou «Sem título» para um modelo novo.

:::desktop
Na aplicação para computador, {{ui:Guardar}} escreve por cima do ficheiro que abriu. Um modelo novo pergunta onde guardar.
:::

- {{ui:Guardar como}} ({{key:Mod+Shift+S}}) guarda uma cópia como ficheiro `.modelcraft` ou como [USD](topic:usd); quando o navegador consegue, pergunta o nome e o local. Caso contrário, mude o nome do ficheiro transferido: a gravação seguinte, depois de abrir o ficheiro renomeado, usa o novo nome.
- Cada gravação é uma transferência nova. Consoante as definições do navegador, vai diretamente para a sua pasta de transferências ou pergunta onde guardar. Se já lá existir um ficheiro com esse nome, a maioria dos navegadores acrescenta um número, como `Sem título (1).modelcraft`.

:::chromium
Para escolher a pasta de cada vez, abra as definições do navegador, procure «transferências» e ative «Perguntar onde guardar cada ficheiro antes de transferir».
:::

:::firefox
Para escolher a pasta de cada vez, abra as **Definições**, depois **Geral**, e em «Transferências» escolha «Perguntar sempre onde guardar os ficheiros».
:::

:::safari
Para mudar para onde vão as transferências, abra o **Safari**, depois **Definições**, depois **Geral**, e defina «Localização da transferência de ficheiros».
:::

### Começar um modelo novo

Clique em {{ui:Novo}}. Se houver alterações por guardar, o ModelCraft pergunta primeiro. Um modelo novo começa vazio, na unidade do seu idioma e região (pés e polegadas nos Estados Unidos, milímetros nos outros sítios), sem cenas.

### Se o navegador fechar antes de guardar

O ModelCraft guarda no navegador uma cópia do trabalho por guardar, alguns segundos depois de cada alteração. Se o separador ou o navegador fechar antes de guardar, da próxima vez que abrir o ModelCraft ele pergunta «Recuperar o seu trabalho?». Recuperar abre o modelo como estava, ainda não guardado num ficheiro: guarde-o para o conservar. Veja [Recuperar o seu trabalho](common:recover).

### A partir do CadCraft: Abrir no ModelCraft

Na aplicação de desenho CadCraft, **Ver**, depois **Mais**, depois **Abrir no ModelCraft** entrega o desenho aberto ao ModelCraft num separador novo, como DWG. Chega como chega um DWG importado: linhas no chão, num grupo, prontas para modelar sobre elas. Nada é carregado; o ficheiro passa pelo armazenamento do próprio navegador.

## Importar

Importar acrescenta um ficheiro ao modelo que tem aberto; não o substitui.

1. Clique em {{ui:Importar}} no grupo {{ui:Ficheiro}}, ou largue o ficheiro na vista 3D.
2. Escolha um ficheiro SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O ficheiro chega como **um só grupo**, selecionado, e a vista aproxima-se para o mostrar. A barra de estado diz o que entrou e lista o que não foi possível importar, por exemplo «Não importado: 2 texturas».

3. Para trabalhar diretamente na sua geometria, faça duplo clique no grupo para editar lá dentro, ou clique em {{ui:Explodir}}.

Algumas coisas a saber:

- **Tamanho e direção para cima:** os ficheiros Collada indicam a sua unidade e qual o eixo que aponta para cima, e o ModelCraft converte-os. O glTF está sempre em metros. Os ficheiros OBJ não trazem unidade: o ModelCraft lê-os como metros, com Y para cima. Se um OBJ entrar 1000 vezes demasiado grande ou demasiado pequeno, use [Escala](topic:rotate-scale) com um fator como `0.001` ou `1000`.
- **DWG e DXF** entram como linhas (arestas) no chão, não como faces. Se o desenho não indicar a sua unidade, uma caixa de diálogo intitulada «Unidades do desenho» pergunta o que é uma unidade do desenho. Veja [Modelar sobre uma planta de implantação](topic:site-plan).
- **Limites:** os ficheiros com mais de 300 MB são recusados para importação, e com mais de 200 MB para abertura. Os ficheiros com mais de 2 milhões de vértices ou faces são recusados por serem grandes demais.

## Exportar

1. Clique em {{ui:Exportar}} no grupo {{ui:Ficheiro}}.
2. Escolha um formato: {{ui:glTF binário (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impressão (.stl, milímetros)}}, {{ui:PLY com cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para o BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador transfere o ficheiro, com o nome do modelo. O modelo inteiro é exportado, não só a seleção. Um modelo vazio não é exportado: «O modelo está vazio: desenhe primeiro algo.» Veja [Exportar um modelo para outros programas](topic:export-model).

## Online e offline

Tudo no ModelCraft corre no seu computador, pelo que modelar, abrir, guardar, importar e exportar funcionam sem ligação depois de a aplicação estar carregada.

Para abrir o ModelCraft sem qualquer ligação, guarde-o para utilização offline enquanto estiver online:

1. Clique em {{ui:Guardar para offline}} na barra da aplicação no topo.
2. O botão conta («A guardar 40 de 212») enquanto guarda. O ModelCraft guarda os seus próprios ficheiros (o leitor de DWG entre eles), esta ajuda e a biblioteca 3D, pelo que pode demorar um pouco.
3. Quando o botão disser {{ui:Pronto para offline}}, o ModelCraft abre-se a partir do mesmo endereço sem ligação, e a importação de DWG também funciona offline.

Clique mais tarde em {{ui:Pronto para offline}} para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Se o botão disser {{ui:Não foi possível guardar}}, alguns ficheiros não foram transferidos: verifique a ligação e clique nele para tentar de novo. {{ui:Offline indisponível}} significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos). Veja [Trabalhar offline](common:offline).

Guardar na nuvem ainda não está disponível. Cada modelo fica onde o guardar.

:::offline
Está offline. Pode continuar a modelar e a guardar. A menos que a barra da aplicação mostre {{ui:Pronto para offline}}, não recarregue este separador até voltar a estar online.
:::

## Aplicação para computador

:::desktop
Está a usar o ModelCraft no CadCraft Studio, a aplicação para computador com as oito aplicações. Os ficheiros abrem-se e guardam-se onde escolher.
:::

:::web
O ModelCraft corre no navegador em Mac, Windows e Linux, e no CadCraft Studio, a aplicação para computador com as oito aplicações numa só instalação, em getcadcraft.com/download.
:::
