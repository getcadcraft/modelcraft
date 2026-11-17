---
title: Formatos de ficheiro em detalhe
summary: Exatamente o que cada formato que o ModelCraft abre, importa ou exporta mantém, converte e deixa de fora.
keywords: formatos, tipos de ficheiro, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, unidades, eixos, y para cima, z para cima, milímetros, limites
from: c47d2d28
---

O modelo do ModelCraft está em metros, com Z (azul) para cima. Todos os formatos abaixo são convertidos de ou para esse sistema.

## ModelCraft (.modelcraft)

| O quê | Pormenores |
|---|---|
| Abrir | {{ui:Open}} ({{key:Mod+O}}) ou largue sobre a vista. Os ficheiros que terminam em `.json` também são aceites |
| Guardar | {{ui:Save}} ({{key:Mod+S}}), como transferência |
| Mantém | Tudo: geometria, faces e as suas cores, materiais e texturas importadas, lâmpadas, arestas suaves, grupos, componentes, nomes, guias, cenas, as unidades, e a última câmara e estilo |
| Deixa de fora | O histórico de anulações |
| Limite | 200 MB |

Um ficheiro guardado por um ModelCraft mais recente do que o seu é recusado: «Este modelo foi guardado por um ModelCraft mais recente (versão de ficheiro …). Atualize o ModelCraft para o abrir.» Um ficheiro que não é um modelo do ModelCraft diz «Este ficheiro não é um modelo do ModelCraft (não é JSON).» ou «Este não é um ficheiro do ModelCraft que o ModelCraft possa abrir: …».

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar e {{ui:Save as}} ou {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Um ficheiro USD que o ModelCraft guardou volta a abrir sem perder nada; os ficheiros USD de outros programas abrem como malhas, grupos, componentes, lâmpadas e câmaras. Veja [Guardar, abrir e exportar USD](topic:usd).

## Collada (.dae)

Importar e exportar. É o melhor formato para trocar modelos com outros modeladores 3D.

- **Exportação:** Collada 1.4.1, Z para cima, metros. Uma geometria por definição de grupo ou componente; os componentes são escritos uma vez e colocados por referência, por isso ficam partilhados. As faces com furos ou contornos côncavos são divididas em triângulos. As cores tornam-se materiais. As arestas soltas são escritas como linhas. Os nomes que não são válidos no formato são ajustados, e o nome exato é mantido ao lado.
- **Importação:** triângulos, polígonos (com furos), leques e tiras de triângulos tornam-se faces; as linhas tornam-se arestas. As transformações dos nós, o eixo para cima do ficheiro e a sua unidade são aplicados. Um nó colocado em vários sítios, ou uma geometria usada por vários nós, entra como componente; os outros nós entram como grupos. As cores de material (difusa) tornam-se cores das faces.
- **Não importado:** texturas, skins e morphs, câmaras, luzes, alguns tipos de transformação (look-at e skew) e referências a outros ficheiros. A barra de estado conta-os.
- **Perdido na exportação:** quais as arestas que são suaves. **Na importação,** as superfícies trianguladas mantêm-se triângulos, com as diagonais suavizadas para que as áreas planas continuem a ler-se como uma só superfície.

## OBJ (.obj, .mtl)

Importar e exportar.

- **Importação:** largue o `.obj` juntamente com o seu `.mtl` e as imagens de textura (ou importe só o `.obj`: entra sem materiais, e a barra de estado indica o `.mtl` que queria). Lido em metros, com Y para cima. Cada objeto (`o`, senão `g`) torna-se uma [malha](topic:meshes), mantendo as suas faces como estão (os quadriláteros continuam quadriláteros). As coordenadas de textura, as normais e as cores por vértice são mantidas. A imagem de cor de um material (`map_Kd`, PNG, JPEG ou WebP) entra como textura, com as suas opções de escala e deslocamento; caso contrário, entra a sua cor (`Kd`). As arestas onde as normais do ficheiro se quebram são rígidas; sem normais, decidem os grupos de suavização do ficheiro. Outros mapas (de relevo, de normais), pontos, linhas e curvas são contados e deixados de fora. O OBJ não tem unidade, por isso um modelo feito em milímetros ou polegadas chega com o tamanho errado: escale-o depois da importação (veja [Rodar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportação:** metros, Y para cima, coordenadas do mundo. Um objeto por colocação de grupo; os componentes são escritos por inteiro em cada colocação. As malhas mantêm as suas próprias faces, coordenadas de textura e normais; as faces unidas por [arestas suaves](topic:soften) recebem uma normal em cada canto. Quando o modelo tem cores, é transferido um `.mtl` ao lado do `.obj`. Quando tem texturas importadas, o `.obj`, o `.mtl` e as imagens são transferidos juntos, num só `.zip`.
- **Limite:** 2 milhões de vértices ou faces; 64 MB de texto.

## glTF (.glb, .gltf)

Importar e exportar, glTF 2.0.

- **Importação:** um `.glb`, ou um `.gltf` juntamente com o seu `.bin` e os ficheiros de textura: largue-os todos de uma vez na vista (ou escolha o `.glb`). Um `.gltf` sozinho indica o ficheiro de que precisa: «Este ficheiro .gltf precisa de "…": abra a versão .glb, ou largue o .gltf juntamente com os seus ficheiros.»
  - **As malhas** entram como [malhas](topic:meshes), uma por malha do ficheiro, com as normais, coordenadas de textura e cores de vértice do ficheiro mantidas. As arestas onde as normais do ficheiro se quebram são rígidas; as restantes são suaves. Uma malha usada em vários sítios continua partilhada.
  - **Os nós** tornam-se grupos, com o nome que têm no ficheiro. As malhas instanciadas (EXT_mesh_gpu_instancing) entram como uma só malha colocada muitas vezes.
  - **Materiais:** uma textura de cor base (PNG, JPEG ou WebP) entra como textura, colocada pelas coordenadas de textura do ficheiro (com qualquer transformação de textura), e é mantida ao guardar; caso contrário, entra a cor base. Metal, rugosidade, mapas de normais, vidro, verniz transparente, sheen e as outras extensões de material são lidos, mas ainda não são mantidos: a barra de estado di-lo.
  - **Luzes** (KHR_lights_punctual): as luzes pontuais e de foco tornam-se [lâmpadas](topic:lights). As luzes direcionais são contadas: o sol ilumina o modelo.
  - **As câmaras** tornam-se [cenas](topic:scenes).
  - **As personagens com esqueleto** entram em pé, como o ficheiro as deixa; os seus ossos, animações e morph targets são contados e ainda não são mantidos.
  - **Os ficheiros comprimidos** (Draco, meshopt) e os dados quantizados são lidos. Os descodificadores só são carregados para um ficheiro que os precise.
  - Pontos e linhas são contados e deixados de fora (uma malha contém faces). As texturas KTX2 ficam de fora; as faces mantêm a sua cor.
- **Exportação** (`.glb`): glTF 2.0 binário, metros, Y para cima. Uma malha por definição, por isso os componentes ficam partilhados. As malhas mantêm as suas normais, coordenadas de textura e cores de vértice; as faces unidas por [arestas suaves](topic:soften) têm normais suaves. As cores e os materiais tornam-se materiais (um material como a sua cor); as texturas importadas são escritas como texturas. As lâmpadas que estão ligadas tornam-se luzes pontuais e de foco (as lâmpadas de área não têm equivalente em glTF e ficam de fora); as cenas tornam-se câmaras. As arestas soltas ficam de fora.
- **Limite:** ficheiros até 300 MB; cerca de 130 milhões de números de geometria.

## STL (.stl)

Importar e exportar.

- **Importação:** binário ou ASCII. O STL não tem unidade: é lido em **milímetros**, como as impressoras e a própria exportação do ModelCraft o escrevem. Os cantos no mesmo ponto são unidos, por isso uma peça fechada entra como uma [malha](topic:meshes) fechada. As cores no ficheiro (as convenções VisCAM / SolidView e Materialise) pintam as faces.
- **Exportação,** para impressão 3D: STL binário, **milímetros**, Z para cima. Só triângulos: grupos e arestas soltas ficam de fora. As faces pintadas levam a sua cor na convenção VisCAM / SolidView, que outros programas ignoram se não a lerem. Exporte sólidos fechados para uma impressão limpa.

## STEP (.step, .stp)

Só importação. O STEP é o que os modeladores de peças e os fornecedores enviam: ficheiros AP203, AP214 e AP242.

- **Importação:** o ModelCraft lê o ficheiro por si, na própria página, e transforma cada sólido numa [malha](topic:meshes) fechada de triângulos: as faces planas mantêm-se planas, as faces curvas (cilindros, cones, esferas, toros, superfícies B-spline) tornam-se muitas faces planas pequenas, com as arestas dentro de uma face curva suaves e as arestas entre duas faces vincadas. Os ficheiros STEP indicam a sua unidade; o modelo entra com o seu tamanho real. Um conjunto entra com cada peça onde o ficheiro a coloca, cada peça numa malha própria, dentro de um grupo com o nome do ficheiro. As cores, os nomes das peças da árvore do conjunto e as tolerâncias (PMI) não são lidas.
- **Mensagens:** o que foi saltado ou desenhado mais grosseiramente é acrescentado à linha de estado («Notas: …»); um ficheiro sem sólidos, um ficheiro danificado ou um que ultrapasse os limites diz porquê e não acrescenta nada.
- **Limite:** ficheiros até 300 MB; 400 000 faces e 8 milhões de triângulos.

## .3dm

Só importação. Os ficheiros `.3dm` contêm modelos NURBS: polissuperfícies, superfícies, malhas, curvas e blocos.

- **Importação:** o ModelCraft lê o ficheiro por si, na página. As malhas entram como estão; cada face de uma polissuperfície ou de uma extrusão vem da malha de renderização guardada com ela no ficheiro, senão o ModelCraft a tesselá-la (planos, superfícies NURBS, superfícies de revolução, curvas extrudidas, extrusões; aparadas pelas suas arestas, e polissuperfícies fechadas como malhas fechadas). Os ficheiros indicam a sua unidade; o modelo entra com o seu tamanho real. Passo a passo: [Importar um modelo .3dm](topic:import-3dm-files).
  As curvas tornam-se arestas, os blocos tornam-se componentes (os blocos dentro de blocos são mantidos), as camadas tornam-se etiquetas (ocultas quando desligadas), e a cor do objeto (a sua própria, a da sua camada ou a do seu material) pinta as suas faces.
- **Mensagens:** a linha de estado indica quantas faces vieram de malhas guardadas e quantas foram tesseladas, e diz o que ficou de fora: pontos, nuvens de pontos, texto, cotas, hachuras, luzes, objetos SubD, faces de tipos de superfície ainda não lidos e blocos ligados.
- **Limite:** ficheiros até 300 MB.

## PLY (.ply)

Importar e exportar, para malhas com cores (digitalizações, impressão 3D a cores, outros modeladores).

- **Importação:** ASCII e binário. As faces tornam-se uma [malha](topic:meshes) com as suas normais, coordenadas de textura e cores de vértice mantidas; cada face é pintada com a mais próxima de 4,096 cores, para ver já as cores. O PLY não tem unidade nem convenção de eixos: as coordenadas entram como estão (metros, Z para cima). Um PLY só com pontos é uma nuvem de pontos: abra-o no BimCraft ou no CivilCraft.
- **Exportação:** PLY binário com posições, normais e cores (e coordenadas de textura quando o modelo as tem), em metros, Z para cima.

## FBX (.fbx)

Só importação. Ficheiros FBX 7 (de 2011 em diante), binários ou ASCII, lidos pelo próprio leitor do ModelCraft.

- As malhas entram como [malhas](topic:meshes) com as suas normais, coordenadas de textura (todos os conjuntos UV) e cores de vértice; uma malha que vários objetos usam mantém-se partilhada. Os objetos tornam-se grupos com as suas transformações (pivôs, deslocamentos e pré-rotações incluídos).
- Materiais: a textura difusa — incorporada no ficheiro, ou uma imagem largada juntamente com o `.fbx` — entra como textura (as imagens TGA são mantidas como PNG); caso contrário, entra a cor difusa. As outras definições de material aguardam o novo modelo de materiais.
- O eixo para cima e a unidade do ficheiro são aplicados: tudo entra com Z para cima, em metros.
- As luzes pontuais e de foco tornam-se [lâmpadas](topic:lights) (uma intensidade FBX de 100 é a lâmpada predefinida do ModelCraft, 800 lúmens: as intensidades FBX não têm unidade). As câmaras tornam-se [cenas](topic:scenes).
- As personagens com esqueleto entram em repouso; os ossos e as animações são contados e ainda não são mantidos. As luzes direcionais e de área, e a geometria que não seja malha (NURBS, curvas), são contadas e deixadas de fora.
- Os ficheiros FBX 6 e anteriores são recusados: guarde-os de novo como FBX 2011 ou mais recente.

## Alembic (.abc)

Só importação: caches de geometria de programas de animação e de efeitos.

- As malhas (poligonais e de subdivisão) entram como [malhas](topic:meshes), com as suas coordenadas de textura e normais; as transformações tornam-se grupos. O Alembic tem Y para cima e é rodado para Z para cima; metros.
- Uma cache com muitas amostras (uma animação) entra na sua primeira amostra; a barra de estado indica quantas tem.
- Pontos, curvas, superfícies NURBS, câmaras e luzes são contados e deixados de fora. Os ficheiros no antigo formato HDF5 são recusados: guarde-os de novo como ficheiro Alembic Ogawa.

{{ui:Check for 3D printing (STL or 3MF)…}} verifica primeiro a forma e escreve a seleção, ou tudo o que está visível. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

## 3MF (.3mf)

Só exportação, a partir de {{ui:Check for 3D printing (STL or 3MF)…}}. Núcleo 3MF: uma malha em **milímetros**, Z para cima, com as suas cores como materiais. A maioria dos fatiadores lê-o e, ao contrário do STL, indica a sua unidade. As coisas ocultas ficam de fora. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

## Exportação DWG e DXF (.dwg, .dxf)

Para programas CAD. O modelo é escrito na sua própria unidade: polegadas para modelos em pés e polegadas, senão milímetros, centímetros ou metros (a barra de estado indica qual).

- **As faces** tornam-se faces 3D (triângulos). As linhas dentro de uma face, e as arestas suaves, são escritas como invisíveis, para que as faces se pareçam com as do ModelCraft.
- **As arestas soltas** tornam-se linhas.
- **Grupos e componentes** tornam-se blocos: um componente é escrito uma vez e colocado tantas vezes quantas for usado, incluindo as cópias rodadas e espelhadas. Um grupo que foi esticado depois de rodado (por isso inclinado) é escrito diretamente na sua posição.
- **Cores:** o DWG mantém exatamente a cor de cada face; o DXF usa a mais próxima das 255 cores CAD padrão.
- **Versões:** o DWG é escrito como AutoCAD 2004 (AC1018), que os programas CAD a partir de 2004 abrem. O DXF é R12 (AC1009), a versão que todos os programas CAD leem; o R12 não tem campo de unidade, por isso indique ao programa CAD qual a unidade a usar.
- **Não são escritos:** guias, cotas, cenas e a câmara.

## IFC (.ifc)

Só exportação, para o BimCraft e outros programas BIM. IFC4 com um projeto, um terreno, um edifício e os seus pisos. Cada grupo ou componente de topo torna-se um proxy de elemento de edifício com o seu nome; os fechados são escritos como formas sólidas (breps facetados), os abertos como modelos de superfície; os furos nas faces são mantidos. A geometria solta ao nível de topo torna-se um elemento chamado «Geometria solta». Sem tipos, propriedades nem materiais.

**Pisos:** {{ui:Export}} › {{ui:IFC storeys…}} lista-os, cada um com um nome e uma cota de altura ({{ui:Add storey}}, ou {{ui:Guess from the model}}, que cria um piso para cada altura em que os seus grupos de topo assentam). Na exportação, cada grupo ou componente vai para o piso no nível ou abaixo do seu ponto mais baixo, e mantém o seu lugar. Sem pisos, tudo vai para um só piso, «Nível 1», à cota 0. Os pisos ficam guardados no ficheiro do ModelCraft.

## DWG (.dwg) e DXF (.dxf)

Importar como linhas no chão (hachuras e faces 3D como faces); exportar como descrito acima. Veja [Modelar sobre uma planta de implantação](topic:site-plan).

- **Leitura:** linhas, polilinhas (com arcos), polilinhas 3D, círculos, arcos e referências de blocos, incluindo matrizes, a partir do espaço Modelo. Os objetos invisíveis (como os estados ocultos de um bloco dinâmico) ficam de fora. As curvas tornam-se 48 troços retos por cada volta completa.
- **Lido desde a 0.4:** splines e elipses (como arestas), texto, texto multilinha e valores de atributos (como arestas numa escrita de traço único), hachuras (faces com furos), faces 3D e preenchimentos sólidos (faces), e cotas (desenhadas a partir dos próprios blocos de cota do desenho).
- **Lido desde a 0.7:** sólidos 3D, regiões e corpos (os seus dados ACIS, em DWG e DXF de todas as versões), cada um como o seu próprio grupo, os fechados como sólidos. As faces em superfícies que não sejam planos, cilindros, cones, esferas, toros e superfícies spline simples ficam de fora e são listadas.
- **Não lido:** pontos, tabelas, chamadas múltiplas, imagens e tudo o que esteja no espaço Papel.
- **Unidades:** tiradas do desenho quando este as indica. Se não, o ModelCraft pergunta.
- **DXF** tem de ser ASCII. DXF binário é recusado.
- **DWG** desde AutoCAD R13 até ao formato atual (AutoCAD 2018 e posteriores; AC1012 a AC1032) são lidos pelo próprio leitor de DWG do ModelCraft, na página; faz parte do ModelCraft, por isso funciona offline sempre que o ModelCraft funciona. As versões mais antigas (R12 e anteriores) e os ficheiros muito danificados não podem ser lidos; guarde-os como DXF.
- **Limites:** coordenadas a mais de 10,000 km da origem, ou mais de 2 milhões de peças de linha, são recusadas.

## Ficheiros SKP

{{ui:Import}} (ou largue o ficheiro na vista) lê ficheiros do SketchUp com o próprio leitor do ModelCraft, na página: nada é carregado, e funciona offline sempre que o ModelCraft funciona. Testado com ficheiros do SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 e 2026; as outras versões devem abrir também, mas ainda não foram testadas. O modelo entra como um só grupo com o nome do ficheiro. Um {{key:Mod+Z}} retira-o de novo. Passo a passo: [Importar um modelo SKP](topic:import-sketchup-files).

- **Mantido:** faces com os seus furos, grupos (como grupos) e componentes (como componentes, partilhados), os seus nomes e colocações, cores, etiquetas nos grupos e componentes, arestas que não fazem parte de uma face, e arestas suaves e lisas, para que as superfícies curvas se mantenham lisas.
- **Cores:** o material próprio de uma face dá-lhe a cor. Um material pintado num grupo ou componente torna-se a pintura dessa colocação, por isso as faces lá dentro sem cor própria herdam-na, como no SketchUp; um componente pintado com duas cores continua a ser um só componente.
- **Etiquetas** em grupos e componentes tornam-se etiquetas do ModelCraft, mostradas ou ocultas como estavam. As etiquetas em faces e arestas soltas não são mantidas (o ModelCraft etiqueta apenas grupos e componentes); a barra de estado conta-as.
- **As coisas ocultas entram ocultas** (faces, arestas, grupos, componentes, e faces e arestas numa etiqueta oculta), para que se veja o que o SketchUp mostrava; {{ui:Unhide all}} mostra-as.
- **Texturas:** uma face pintada com um material texturizado mantém a sua textura, colocada como no ficheiro, e o ficheiro do ModelCraft mantém a imagem. Uma textura em todo um grupo ou componente, uma textura em falta no ficheiro, ou uma imagem que os navegadores não mostram (como um ficheiro do Photoshop) mantém apenas a cor do seu material.
- **Deixado de fora, e contado na barra de estado:** imagens colocadas no modelo. Texto, cotas, guias, planos de corte, cenas e estilos não são lidos.
- **Unidades:** os ficheiros do SketchUp estão em polegadas por dentro; o ModelCraft converte-os, por isso os tamanhos saem certos em qualquer unidade.
- **Guardar `.skp`** ainda não está implementado. Para levar um modelo de volta ao SketchUp, exporte Collada (`.dae`).

## Não suportado

O ModelCraft não consegue abrir ficheiros 3DS ou IFC, e não consegue guardar ficheiros 3DS, FBX, STEP, `.3dm` ou SketchUp (`.skp`).
