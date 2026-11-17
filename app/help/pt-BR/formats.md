---
title: Formatos de arquivo em detalhes
summary: Exatamente o que cada formato que o ModelCraft abre, importa e exporta mantém, converte e deixa de fora.
keywords: formatos, tipos de arquivo, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unidades, eixos, y para cima, z para cima, milímetros, limites
from: c47d2d28
---

O modelo do ModelCraft está em metros, com Z (azul) para cima. Cada formato abaixo é convertido de ou para esse sistema.

## ModelCraft (.modelcraft)

| O quê | Detalhes |
|---|---|
| Abrir | {{ui:Abrir}} ({{key:Mod+O}}) ou solte na vista. Arquivos terminados em `.json` também são aceitos |
| Salvar | {{ui:Salvar}} ({{key:Mod+S}}), como um download |
| Mantém | Tudo: geometria, faces e suas cores, materiais e texturas importadas, lâmpadas, arestas suaves, grupos, componentes, nomes, guias, cenas, as unidades e a última câmera e o último estilo |
| Deixa de fora | O histórico de desfazer |
| Limite | 200 MB |

Um arquivo salvo por um ModelCraft mais novo que o seu é recusado: "Este modelo foi salvo por um ModelCraft mais novo (versão de arquivo …). Atualize o ModelCraft para abri-lo." Um arquivo que não é um modelo do ModelCraft diz "Este arquivo não é um modelo do ModelCraft (não é JSON)." ou "Este não é um arquivo do ModelCraft que podemos abrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar, e usar {{ui:Salvar como}} ou {{ui:Exportar}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Um arquivo USD salvo pelo ModelCraft abre de novo sem nada perdido; arquivos USD de outros programas abrem como malhas, grupos, componentes, lâmpadas e câmeras. Veja [Salvar, abrir e exportar USD](topic:usd).

## Collada (.dae)

Importação e exportação. É o melhor formato para trocar modelos com outros modeladores 3D.

- **Exportação:** Collada 1.4.1, Z para cima, metros. Uma geometria por definição de grupo ou componente; componentes são gravados uma vez e posicionados por referência, então permanecem compartilhados. Faces com furos ou contornos côncavos são divididas em triângulos. Cores viram materiais. Arestas soltas são gravadas como linhas. Nomes que não são válidos no formato são ajustados, e o nome exato é mantido junto dele.
- **Importação:** triângulos, polígonos (com furos), leques e tiras de triângulos viram faces; linhas viram arestas. Transformações de nós, o eixo para cima do arquivo e a sua unidade são aplicados. Um nó posicionado em vários lugares, ou uma geometria usada por vários nós, entra como componente; os demais nós entram como grupos. Cores difusas do material viram cores de face.
- **Não importado:** texturas, skins e morphs, câmeras, luzes, alguns tipos de transformação (look-at e skew) e referências a outros arquivos. A barra de status os conta.
- **Perdido na exportação:** quais arestas são suaves. **Na importação,** superfícies trianguladas continuam como triângulos, com as diagonais suavizadas, para que áreas planas ainda sejam lidas como uma única superfície.

## OBJ (.obj, .mtl)

Importação e exportação.

- **Importação:** solte o `.obj` junto com o seu `.mtl` e as imagens de textura (ou importe só o `.obj`: ele entra sem materiais, e a barra de status informa o `.mtl` que ele queria). Lido em metros, com Y para cima. Cada objeto (`o`, senão `g`) vira uma [malha](topic:meshes), com as faces mantidas como estão (quadriláteros continuam quadriláteros). Coordenadas de textura, normais e cores por vértice são mantidas. A imagem de cor de um material (`map_Kd`, PNG, JPEG ou WebP) entra como textura, com as suas opções de escala e deslocamento; senão entra a sua cor (`Kd`). Arestas onde as normais do arquivo quebram são duras; sem normais, os grupos de suavização do arquivo decidem. Outros mapas (bump, normal), pontos, linhas e curvas são contados e deixados de fora. O OBJ não tem unidade, então um modelo feito em milímetros ou polegadas chega no tamanho errado: escale-o depois da importação (veja [Girar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportação:** metros, Y para cima, coordenadas do mundo. Um objeto por posicionamento de grupo; componentes são escritos por completo em cada posicionamento. Malhas mantêm as suas próprias faces, coordenadas de textura e normais; faces unidas por [arestas suaves](topic:soften) recebem uma normal por canto. Quando o modelo tem cores, um `.mtl` é baixado junto do `.obj`. Quando ele tem texturas importadas, o `.obj`, o `.mtl` e as imagens são baixados juntos em um único `.zip`.
- **Limite:** 2 milhões de vértices ou faces; 64 MB de texto.

## glTF (.glb, .gltf)

Importação e exportação, glTF 2.0.

- **Importação:** um `.glb`, ou um `.gltf` junto com os seus arquivos `.bin` e de textura: solte-os na vista todos de uma vez (ou escolha o `.glb`). Um `.gltf` enviado sozinho informa o arquivo de que precisa: "Este arquivo .gltf precisa de "…": abra a versão .glb, ou solte o .gltf junto com os seus arquivos."
  - **Malhas** entram como [malhas](topic:meshes), uma por malha do arquivo, com as normais, coordenadas de textura e cores por vértice do arquivo mantidas. Arestas onde as normais do arquivo quebram são duras; as demais são suaves. Uma malha usada em vários lugares continua compartilhada.
  - **Nós** viram grupos, com os nomes do arquivo. Malhas instanciadas (EXT_mesh_gpu_instancing) entram como uma malha posicionada muitas vezes.
  - **Materiais:** uma textura de cor-base (PNG, JPEG ou WebP) entra como textura, posicionada pelas coordenadas de textura do arquivo (com qualquer transformação de textura), e é mantida ao salvar; senão entra a cor-base. Metal, rugosidade, mapas de normal, vidro, verniz, sheen e as demais extensões de material são lidos, mas ainda não são mantidos: a barra de status informa isso.
  - **Luzes** (KHR_lights_punctual): luzes pontuais e spot viram [lâmpadas](topic:lights). Luzes direcionais são contadas: o sol ilumina o modelo.
  - **Câmeras** viram [cenas](topic:scenes).
  - **Personagens com esqueleto** entram como o arquivo os deixa em repouso; os ossos, as animações e os alvos de morph são contados e ainda não são mantidos.
  - **Arquivos comprimidos** (Draco, meshopt) e dados quantizados são lidos. Os decodificadores só são carregados para um arquivo que precisa deles.
  - Pontos e linhas são contados e deixados de fora (uma malha guarda faces). Texturas KTX2 ficam de fora; as faces mantêm a sua cor.
- **Exportação** (`.glb`): glTF 2.0 binário, metros, Y para cima. Uma malha por definição, então componentes continuam compartilhados. Malhas mantêm as suas normais, coordenadas de textura e cores por vértice; faces unidas por [arestas suaves](topic:soften) recebem normais suaves. Cores e materiais viram materiais (um material como sua cor); texturas importadas são gravadas como texturas. Lâmpadas ligadas viram luzes pontuais e spot (lâmpadas de área não têm equivalente em glTF e ficam de fora); cenas viram câmeras. Arestas soltas ficam de fora.
- **Limite:** arquivos de até 300 MB; cerca de 130 milhões de números de geometria.

## STL (.stl)

Importação e exportação.

- **Importação:** binário ou ASCII. O STL não tem unidade: ele é lido como **milímetros**, do jeito que impressoras e a própria exportação do ModelCraft o gravam. Cantos no mesmo ponto são unidos, então uma peça fechada entra como uma [malha](topic:meshes) fechada. Cores do arquivo (as convenções VisCAM / SolidView e Materialise) pintam as faces.
- **Exportação**, para impressão 3D: STL binário, **milímetros**, Z para cima. Somente triângulos: grupos e arestas soltas ficam de fora. Faces pintadas levam a sua cor na convenção VisCAM / SolidView, que outros programas ignoram se não a lerem. Exporte sólidos fechados para uma impressão limpa.

## STEP (.step, .stp)

Somente importação. STEP é o que modeladores de peças e fornecedores enviam: arquivos AP203, AP214 e AP242.

- **Importação:** o ModelCraft lê o arquivo sozinho, na página, e transforma cada sólido em uma [malha](topic:meshes) fechada de triângulos: faces planas permanecem planas, faces curvas (cilindros, cones, esferas, toros, superfícies B-spline) viram muitas pequenas faces planas, com as arestas dentro de uma mesma face curva suaves e as arestas entre duas faces vivas. Arquivos STEP informam a sua unidade; o modelo entra no tamanho verdadeiro. Uma montagem entra com cada peça onde o arquivo a posiciona, cada peça como sua própria malha, em um grupo com o nome do arquivo. Cores, nomes das peças da árvore da montagem e tolerâncias (PMI) não são lidos.
- **Mensagens:** o que foi ignorado ou desenhado com menos detalhe é adicionado à linha de status ("Observações: …"); um arquivo sem sólido, um arquivo danificado ou um que passa dos limites informa o motivo e não adiciona nada.
- **Limite:** arquivos de até 300 MB; 400 000 faces e 8 milhões de triângulos.

## .3dm

Somente importação. Arquivos `.3dm` guardam modelos NURBS: polissuperfícies, superfícies, malhas, curvas e blocos.

- **Importação:** o ModelCraft lê o arquivo sozinho, na página. Malhas entram como estão; cada face de uma polissuperfície ou extrusão vem da malha de renderização salva com ela no arquivo, senão o ModelCraft a gera por tesselação (planos, superfícies NURBS, superfícies de revolução, curvas extrudadas, extrusões; aparadas pelas suas arestas, e polissuperfícies fechadas como malhas fechadas). Curvas viram arestas, blocos viram componentes (blocos dentro de blocos são mantidos), camadas viram etiquetas (ocultas quando desligadas), e a cor do objeto (a própria, a da camada ou a do material) pinta as faces. O arquivo informa a sua unidade; o modelo entra no tamanho verdadeiro. Passo a passo: [Importar um modelo .3dm](topic:import-3dm-files).
- **Mensagens:** a linha de status informa quantas faces vieram de malhas salvas e quantas foram geradas por tesselação, e diz o que ficou de fora: pontos, nuvens de pontos, textos, cotas, hachuras, luzes, objetos SubD, faces em tipos de superfície ainda não lidos, blocos vinculados.
- **Limite:** arquivos de até 300 MB.

## PLY (.ply)

Importação e exportação, para malhas com cores (escaneamentos, impressão 3D colorida, outros modeladores).

- **Importação:** ASCII e binário. As faces viram uma [malha](topic:meshes), com as suas normais, coordenadas de textura e cores por vértice mantidas; cada face é pintada com a mais próxima entre 4,096 cores, para que você veja as cores agora. O PLY não tem unidade nem convenção de eixo: as coordenadas entram como estão (metros, Z para cima). Um PLY só com pontos é uma nuvem de pontos: abra-o no BimCraft ou no CivilCraft.
- **Exportação:** PLY binário com posições, normais e cores (e coordenadas de textura quando o modelo as tem), em metros, Z para cima.

## FBX (.fbx)

Somente importação. Arquivos FBX 7 (de 2011 em diante), binários ou ASCII, lidos pelo leitor próprio do ModelCraft.

- Malhas entram como [malhas](topic:meshes), com as suas normais, coordenadas de textura (cada conjunto UV) e cores por vértice; uma malha que vários objetos usam continua compartilhada. Objetos viram grupos com as suas transformações (pivôs, deslocamentos e pré-rotações incluídos).
- Materiais: a textura difusa — embutida no arquivo, ou uma imagem solta junto do `.fbx` — entra como textura (imagens TGA são mantidas como PNG); senão, a cor difusa. Outras configurações de material aguardam o novo modelo de material.
- O eixo para cima e a unidade do arquivo são aplicados: tudo entra com Z para cima, em metros.
- Luzes pontuais e spot viram [lâmpadas](topic:lights) (uma intensidade FBX de 100 é a lâmpada padrão do ModelCraft, 800 lúmens: intensidades FBX não têm unidade). Câmeras viram [cenas](topic:scenes).
- Personagens com esqueleto entram em repouso; ossos e animações são contados e ainda não são mantidos. Luzes direcionais e de área, e geometria que não seja malha (NURBS, curvas), são contadas e deixadas de fora.
- Arquivos FBX 6 e mais antigos são recusados: salve-os de novo como FBX 2011 ou mais novo.

## Alembic (.abc)

Somente importação: caches de geometria de programas de animação e efeitos.

- Malhas (de polígonos e de subdivisão) entram como [malhas](topic:meshes), com as suas coordenadas de textura e normais; transformações viram grupos. Alembic usa Y para cima e é girado para Z para cima; metros.
- Um cache com muitas amostras (uma animação) entra na primeira amostra; a barra de status informa quantas ele tem.
- Pontos, curvas, superfícies NURBS, câmeras e luzes são contados e deixados de fora. Arquivos no antigo layout HDF5 são recusados: salve-os de novo como arquivo Ogawa Alembic.

{{ui:Verificar para impressão 3D (STL ou 3MF)…}} verifica a forma primeiro e grava a seleção, ou tudo o que está visível. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

## 3MF (.3mf)

Somente exportação, a partir de {{ui:Verificar para impressão 3D (STL ou 3MF)…}}. 3MF core: uma malha em **milímetros**, Z para cima, com as suas cores como materiais. A maioria dos fatiadores o lê e, diferente do STL, ele informa a sua unidade. Coisas ocultas ficam de fora. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

## Exportação DWG e DXF (.dwg, .dxf)

Para programas CAD. O modelo é gravado na sua própria unidade: polegadas para modelos em pés e polegadas, senão milímetros, centímetros ou metros (a barra de status informa qual).

- **Faces** viram faces 3D (triângulos). Linhas dentro de uma face e arestas suaves são gravadas como invisíveis, então as faces parecem com as do ModelCraft.
- **Arestas soltas** viram linhas.
- **Grupos e componentes** viram blocos: um componente é gravado uma vez e posicionado tantas vezes quanto for usado, incluindo cópias giradas e espelhadas. Um grupo que foi esticado depois de girado (e por isso fica inclinado) é gravado no próprio lugar.
- **Cores:** DWG mantém a cor de cada face exatamente; DXF usa a mais próxima entre as 255 cores padrão de CAD.
- **Versões:** DWG é gravado como AutoCAD 2004 (AC1018), que programas CAD a partir de 2004 abrem. DXF é R12 (AC1009), a versão que todo programa CAD lê; o R12 não tem campo de unidade, então informe ao programa CAD qual unidade usar.
- **Não gravados:** guias, cotas, cenas e a câmera.

## IFC (.ifc)

Somente exportação, para o BimCraft e outros programas BIM. IFC4 com um projeto, um terreno, uma edificação e os seus pavimentos. Cada grupo ou componente de nível superior vira um building element proxy com o seu nome; os fechados são gravados como formas sólidas (breps facetados), os abertos como modelos de superfície; furos em faces são mantidos. Geometria solta no nível superior vira um elemento chamado "Loose geometry". Sem tipos, propriedades ou materiais.

**Pavimentos:** {{ui:Exportar}} › {{ui:Pavimentos IFC…}} lista-os, cada um com um nome e uma elevação ({{ui:Adicionar pavimento}}, ou {{ui:Deduzir a partir do modelo}}, que cria um pavimento para cada altura sobre a qual os seus grupos de nível superior se apoiam). Na exportação, cada grupo ou componente vai para o pavimento na altura do seu ponto mais baixo ou abaixo dela, e mantém o seu lugar. Sem pavimentos, tudo vai para um único pavimento, "Level 1", na altura 0. Os pavimentos são salvos no arquivo do ModelCraft.

## DWG (.dwg) e DXF (.dxf)

Importados como linhas no chão (hachuras e faces 3D como faces); exportação como descrita acima. Veja [Modelar sobre uma planta de implantação](topic:site-plan).

- **Leitura:** linhas, polilinhas (com arcos), polilinhas 3D, círculos, arcos e referências de bloco, incluindo matrizes, a partir do espaço modelo. Objetos invisíveis (como os estados ocultos de um bloco dinâmico) ficam de fora. Curvas viram 48 trechos retos por volta completa.
- **Lido desde a 0.4:** splines e elipses (como arestas), textos, textos de múltiplas linhas e valores de atributos (como arestas, em letras de traço único), hachuras (faces com furos), faces 3D e preenchimentos sólidos (faces), e cotas (desenhadas a partir dos próprios blocos de cota do desenho).
- **Lido desde a 0.7:** sólidos 3D, regiões e corpos (com os seus dados ACIS, em DWG e DXF de todas as versões), cada um como o seu próprio grupo, os fechados como sólidos. Faces em superfícies que não sejam planos, cilindros, cones, esferas, toros e superfícies spline simples ficam de fora e são listadas.
- **Não lidos:** pontos, tabelas, multichamadas, imagens e tudo o que estiver no espaço papel.
- **Unidades:** tiradas do desenho quando ele as informa. Se não, o ModelCraft pergunta.
- **DXF** precisa ser ASCII. DXF binário é recusado.
- **DWG** de AutoCAD R13 até o formato atual (AutoCAD 2018 e posteriores; AC1012 a AC1032) é lido pelo leitor de DWG próprio do ModelCraft, na página; ele faz parte do ModelCraft, então funciona offline sempre que o ModelCraft funciona. Versões antigas (R12 e anteriores) e arquivos muito danificados não podem ser lidos; salve-os como DXF.
- **Limites:** coordenadas a mais de 10.000 km da origem, ou mais de 2 milhões de trechos de linha, são recusadas.

## Arquivos SKP

{{ui:Importar}} (ou solte o arquivo na vista) lê arquivos do SketchUp com o leitor próprio do ModelCraft, na página: nada é enviado, e funciona offline sempre que o ModelCraft funciona. Testado com arquivos do SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 e 2026; outras versões devem abrir também, mas ainda não foram testadas. O modelo entra como um grupo com o nome do arquivo. Um {{key:Mod+Z}} o remove de novo. Passo a passo: [Importar um modelo SKP](topic:import-sketchup-files).

- **Mantidos:** faces com os seus furos, grupos (como grupos) e componentes (como componentes, compartilhados), os seus nomes e posicionamentos, cores, etiquetas em grupos e componentes, arestas que não fazem parte de uma face, e arestas suaves e lisas, para que superfícies curvas continuem lisas.
- **Cores:** o próprio material de uma face dá a sua cor. Um material pintado em um grupo ou componente vira a pintura daquele posicionamento, então as faces internas sem cor própria a recebem, como no SketchUp; um componente pintado com duas cores continua sendo um único componente.
- **Etiquetas** em grupos e componentes viram etiquetas do ModelCraft, mostradas ou ocultas como estavam. Etiquetas em faces e arestas soltas não são mantidas (o ModelCraft etiqueta somente grupos e componentes); a barra de status as conta.
- **Coisas ocultas entram ocultas** (faces, arestas, grupos, componentes, e faces e arestas em uma etiqueta oculta), para que você veja o que o SketchUp mostrava; {{ui:Reexibir tudo}} as mostra.
- **Texturas:** uma face pintada com um material texturizado mantém a sua textura, posicionada como no arquivo, e o arquivo do ModelCraft mantém a imagem. Uma textura em um grupo ou componente inteiro, uma textura ausente do arquivo, ou uma imagem que os navegadores não exibem (como um arquivo do Photoshop) mantêm somente a cor do material.
- **Deixados de fora, e contados na barra de status:** imagens colocadas no modelo. Texto, cotas, guias, planos de corte, cenas e estilos não são lidos.
- **Unidades:** arquivos do SketchUp são em polegadas internamente; o ModelCraft converte, então os tamanhos saem certos em qualquer unidade.
- **Salvar `.skp`** ainda não está implementado. Para levar um modelo de volta ao SketchUp, exporte Collada (`.dae`).

## Não suportado

O ModelCraft não consegue abrir arquivos 3DS ou IFC, e não consegue salvar arquivos 3DS, FBX, STEP, `.3dm` ou SketchUp (`.skp`).
