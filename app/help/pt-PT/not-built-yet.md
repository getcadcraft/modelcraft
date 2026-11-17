---
title: Ainda não implementado
summary: O que esta versão do ModelCraft ainda não faz, e o que fazer em alternativa hoje.
keywords: em falta, ainda não, limitações, roteiro, materiais, texturas, texto, camadas, aparar, dividir, nuvem, ambiente de trabalho
from: 179fa5e4
---

O ModelCraft é uma versão inicial. Esta página indica o que ainda não faz, para não andar à procura disso, e a forma mais próxima de concluir a tarefa hoje.

## Ferramentas de desenho

| Ainda não | Em alternativa, hoje |
|---|---|
| Desenho à mão livre | Clique nos pontos com a ferramenta {{ui:Curve}} |
| Alterar o número de segmentos de um arco ou círculo depois de o desenhar | Apague-o e desenhe-o outra vez depois de escrever `24s` |
| Escolher um tipo de letra para o [texto 3D](topic:text3d), ou editar o seu conteúdo depois de o colocar | Elimine-o e adicione o texto de novo |
| Alterar um ângulo escrevendo numa cota angular, ou o tamanho de um cilindro a partir da cota do seu círculo | Rode as arestas com {{ui:Rotate}}; escale o cilindro com {{ui:Scale}} |
| Cotas nos ficheiros de modelo exportados | As cotas aparecem em imagens, impressões e PDF da vista; os ficheiros de modelo guardam só a geometria |
| Aparar, Dividir e Casca exterior | Grupos fechados com [União, Subtrair e Interseccionar](topic:solids), ou [interseccionar faces](topic:intersect) e apagar o que não é necessário |
| Escolher o eixo de rotação com as teclas de seta | Clique no centro de {{ui:Rotate}} numa face virada no sentido em que o eixo deve apontar |
| Bloqueios em mais de uma inferência de cada vez | Bloqueie uma direção com uma tecla de seta e depois faça snap a um ponto |
| Redimensionar ao longo de uma inclinação, ou a partir de um extremo de cota que não está num canto | Coloque a cota em dois cantos, ao longo de uma aresta ou ao longo do vermelho, verde ou azul |

## Animação

| Ainda não | Em alternativa, hoje |
|---|---|
| Animar faces, arestas, a hora do dia do sol, o estilo ou o que está oculto | Torne a parte móvel num grupo ou componente; renderize um vídeo separado para outra hora do dia |
| Uma câmara que segue um caminho desenhado, ou que olha para um objeto em movimento | Defina mais chaves da câmara ao longo do percurso ([Animar](topic:animation)) |
| Som em vídeos, e vídeos de alta qualidade (com traçado de caminho) sem WebGPU | Adicione som num editor de vídeo; sem WebGPU, renderize o vídeo com o renderizador rápido ([Renderizar o vídeo](topic:animation#render-the-video)) |
| Candeeiros animados (brilho, dispersão, cor) num vídeo renderizado, um ângulo de objetiva animado sem chaves de câmara num vídeo, animar materiais ou definições de renderização | Os candeeiros animam-se na vista; para um vídeo, anime também a câmara para um zoom; renderize vídeos separados para definições diferentes de candeeiros ([Animar qualquer propriedade](topic:animate)) |
| Espelhar pesos ou ossos de um lado para o outro, envolventes de ossos visíveis, mostrar pesos sombreados ponto a ponto (são mostrados por face), ver a malha na pose enquanto se pintam pesos | Pinte os dois lados, ou faça um lado e use um modificador Espelho antes de adicionar o esqueleto; alterne entre Pintar pesos e Pose para verificar |
| Ossos lidos de ficheiros glTF, FBX ou USD como esqueleto, e esqueletos escritos nesses ficheiros | Os modelos com skin entram em repouso com os pesos do ficheiro; adicione os ossos pela ordem das articulações do ficheiro e depois {{ui:Use the file's weights}} ([Animar](topic:animate)) |
| Mover um alvo de IK ou um polo ao arrastá-lo na vista, escolher o espaço próprio de uma restrição (local ou global), esticar cadeias de IK, IK ao longo de uma curva | Escreva o ponto do alvo, ou aponte para um objeto e mova esse; mantenha as cadeias nos seus comprimentos |
| Tecidos, fluidos, corpos moles, juntas e dobradiças entre corpos rígidos, colisão com a forma exata de um objeto (só caixas e esferas à sua volta), uma simulação em tempo real enquanto reproduz, uma velocidade ou rotação inicial (os corpos começam em repouso) | Fixe os corpos rígidos e reproduza as chaves; construa uma dobradiça a partir de chaves; divida uma forma irregular em caixas (grupos) |
| Exportar a animação para glTF ou outros ficheiros de modelo | Renderize um vídeo; o ficheiro `.modelcraft` e um [ficheiro USD](topic:usd) que o ModelCraft guardou ficam reservados ao ModelCraft |
| Escrever um comentário ou um título num problema em RV, notas de voz, mover um plano de corte à mão em RV | Coloque o problema em RV, depois acrescente o texto num programa BCF; defina um plano de corte na vista antes de entrar: veja [Rever o modelo com um visor de RV](topic:vr-review) |
| Ver pessoas à secretária em RV (só aparecem pessoas em RV), gravar um passeio em RV | Peça-lhes que se juntem em RV, ou faça uma [animação](topic:animation) do percurso |

## Malhas

| Ainda não | Em alternativa, hoje |
|---|---|
| Esculpir por níveis (multirresolução), e o Detalhe a retirar triângulos que ficaram minúsculos | Esculpa uma malha subdividida com [Esculpir](topic:sculpt); {{ui:Remesh}} para uniformizar de novo |
| Refazer a malha em faces de quatro lados que seguem a forma | {{ui:Remesh}} (triângulos uniformes), depois reconstrua-a com [Retopologia](topic:mesh-edit#retopology) |
| Pesos pintados em vértices para modificadores (Deslocar, Suavizar e Encolher para o invólucro funcionam em toda a malha) | Aplique o modificador e depois esculpa ou edite as partes que precisam dele |
| Copiar e colar vértices, arestas ou faces, um corte com faca que termina dentro de uma face, arestas soltas sem face | Duplique a malha no modo Modelo; corte com faca de aresta a aresta; [extrudir](topic:mesh-edit#change-the-shape) as arestas abertas em faces |

## Organização e visualização

| Ainda não | Em alternativa, hoje |
|---|---|
| Camadas de plantas de implantação em DWG e DXF como etiquetas | A planta de implantação entra como um só grupo: decomponha-a e agrupe as partes que quer etiquetar |
| Vários cortes em simultâneo, uma caixa de corte, ou o contorno de um corte exportado como desenho | Um [plano de corte](topic:sections) corta de cada vez; exporte a vista como imagem |
| Mostrar arestas suaves a tracejado, ou suavizar enquanto arrasta uma barra deslizante | [Suavizar por ângulo](topic:soften) em Informações da entidade, e anule para experimentar outro ângulo |
| Uma biblioteca online de modelos para pesquisar, ou componentes com opções para escolher (cor, estilo) | A [biblioteca inicial](topic:starter); importe modelos Collada, OBJ ou glTF; [estique](topic:stretch) uma cópia para o tamanho |
| Colocar plantas a partir da biblioteca de plantas | [Espalhe](topic:live-view#scatter-plants-rocks-and-people) plantas na vista ao vivo, ou coloque uma árvore da biblioteca inicial |
| Cópias independentes de um grupo | Transforme-o num componente e depois {{ui:Make unique}} (veja [Resolução de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderização

| Ainda não | Em alternativa, hoje |
|---|---|
| Renderização na vista (o espaço de trabalho {{ui:Render}}), a fila de renderização, e as opções de câmara, imagem do céu, nevoeiro e mistura de luzes sem WebGPU | {{ui:Render a picture…}} em {{ui:High quality}} usa ali o traçador de caminhos WebGL, sem essas opções ([Renderizar uma imagem](topic:render#high-quality)) |
| Outro programa a desenhar a imagem renderizada sem um suplemento de motor de renderização (o CadCraft nunca executa um programa sob a licença GNU GPL); câmaras panorâmicas ou estéreo e uma imagem do céu através de outro programa; o plug-in do Unreal Engine (os ficheiros são escritos, mas o plug-in que os abre não é publicado) | Os nossos motores Fast e Path tracer; o motor de um suplemento ([desenhar a imagem com outro programa](topic:render-other-program)); um ficheiro de pasta USD, glTF ou Unreal, da lista de motores, para levar a qualquer programa |
| Plantas e rochas espalhadas em {{ui:Render a picture…}} | Aparecem na [vista ao vivo](topic:live-view), nas suas panorâmicas, no visualizador e no vídeo |

## Materiais e cores

| Ainda não | Em alternativa, hoje |
|---|---|
| Entradas além de cor base, rugosidade, metalicidade, opacidade, normal e emissão que variem ao longo de uma superfície em imagens de alta qualidade (usam a sua média) | [Crie materiais com nós](topic:shading): ligue-os mesmo assim; a vista mostra-os a variar |
| Deslocamento em faces de empurrar/puxar | Converta o objeto em malha para ter deslocamento |
| Partilhar os seus próprios materiais para a Biblioteca a partir da aplicação, e mapas compactados (ARM/ORM) ou EXR num conjunto de texturas importado | Guarde-os no ficheiro; importe os mapas separados como PNG ou JPEG |
| Materiais do ficheiro em sessões Live TeamWork (ficam no computador que os criou) | Guarde o ficheiro e partilhe-o |
| Decalques a dobrar em torno de superfícies curvas, decalques ao anular, ou pintar texturas de várias faces de uma vez através de uma costura | Coloque decalques mais pequenos em cada peça; pinte cada lado de uma costura separadamente |
| Fixar em faces de empurrar/puxar, fixar vários objetos numa só imagem, uma gaiola que molda à mão, ou iluminação fixada de candeeiros | Converta em malha e desdobre-a; fixe cada objeto; aumente a distância de pesquisa; renderize uma imagem para a luz dos candeeiros |
| Pintar rugosidade, metalicidade ou altura, pintar com imagens (carimbos) e pintar texturas maiores do que 512 × 512 | Pinte aqui a cor base; crie os outros mapas num editor de imagens e importe-os como conjunto de texturas |
| Texturas nas exportações Collada, STL, PLY, 3MF, IFC, DWG e DXF, e os grafos de nós dos materiais próprios do ficheiro nos modelos exportados | Esses formatos recebem a cor de cada material; glTF e OBJ levam as texturas importadas; exporte um material sozinho como [MaterialX](topic:shading#materialx); [USD](topic:usd) mantém o modelo inteiro para o ModelCraft |
| Texturas em ficheiros Collada | São contadas e deixadas de fora na importação; entram as texturas dos ficheiros `.skp` e `.glb` |

## Ficheiros

| Ainda não | Em alternativa, hoje |
|---|---|
| Guardar ficheiros SketchUp, e o texto e as cotas deles | [Importar](topic:import-sketchup-files) mantém faces, cores e texturas; exporte Collada (`.dae`) para voltar ao SketchUp |
| Cotas e guias em exportações DWG e DXF | Acrescente-as no programa CAD depois de exportar |
| Pontos, tabelas e chamadas múltiplas de DWG e DXF | São contados e deixados de fora; o texto entra como letra de traço simples, não com o tipo de letra do desenho |
| Superfícies, malhas, tabelas e chamadas múltiplas de DWG e DXF; faces de sólidos 3D em superfícies varridas, loft ou outras de forma livre | São também contadas e deixadas de fora (os próprios sólidos 3D entram). Exporte essas partes do programa CAD como OBJ ou Collada e importe isso |
| Tipos, propriedades ou materiais IFC | A exportação IFC tem [pisos](topic:formats#ifc-ifc) e elementos genéricos; acrescente o resto num programa BIM |
| Enviar um modelo diretamente para o BimCraft | Exporte {{ui:IFC for BimCraft (.ifc)}} e abra-o no BimCraft |
| Arestas soltas em glTF e STL | Use OBJ ou Collada para linhas soltas |
| Materiais glTF e FBX além da cor base (metal, rugosidade, mapas normais, vidro, verniz transparente, brilho…) | São lidos e listados; o ModelCraft mantém a cor base ou a textura. Refaça o aspeto no [espaço de trabalho Sombreamento](topic:shading) |
| Ossos, animações e alvos de morph em glTF | Modelos com skin entram na posição de repouso; anime-os na [linha temporal](topic:animation) |
| Cores e nomes das peças da montagem em ficheiros STEP | As peças entram como malhas no seu tamanho real; [pinte](topic:paint) e dê-lhes nome depois de importar |
| Objetos SubD, texto, cotas e luzes de ficheiros `.3dm` | Veja [o que fica de fora](topic:import-3dm-files#what-is-left-out-and-said); converta SubD em malhas no programa que criou o ficheiro |
| Texturas KTX2 e variantes de materiais em glTF | Exporte com texturas PNG ou JPEG; usa-se a variante predefinida |
| Escrever instanciação glTF (EXT_mesh_gpu_instancing) | Os componentes são escritos uma vez e colocados várias vezes, o que todos os visualizadores leem |
| Animação Alembic (todas as amostras de uma cache), pontos e curvas Alembic, escrita em Alembic | Entra a primeira amostra; anime na [linha temporal](topic:animation); exporte glTF, USD ou OBJ |
| Mapas de relevo e normais em materiais OBJ | Só entra a imagem de cor (`map_Kd`) |
| Ossos e animação FBX, exportação FBX, ficheiros FBX 6 | Modelos com skin entram em repouso; exporte glTF; guarde os ficheiros antigos como FBX 2011 ou mais recente |
| Skins, morphs, câmaras, luzes, transformações look-at e skew e referências externas em Collada | Ficam de fora na importação e são contados na mensagem |
| Ficheiros de cópia de segurança | {{ui:Save as}} ({{key:Mod+Shift+S}}) guarda outra cópia. Depois de uma falha, o ModelCraft oferece de volta o trabalho não guardado («Recuperar o seu trabalho?») |
| Guardar na nuvem e sincronização entre computadores | Ainda não disponível. Guarde os ficheiros no computador e copie-os para onde forem necessários |

## Impressão 3D

| Ainda não | Em alternativa, hoje |
|---|---|
| Suportes reais do fatiador (interfaces, jangada, o padrão exato de suporte) | A [Pré-visualização dos suportes](topic:print-tools#supports-preview) mostra onde e quanto; a pré-visualização do fatiador mostra os reais |
| Desembaraçar uma peça que atravessa a si própria, ou arestas onde se encontram três ou mais faces | [Reparar](topic:print-tools#repair) lista-as com a localização de cada uma; use [Interseccionar faces](topic:intersect) e apague o que está dentro |
| Padrões de preenchimento e uma treliça dentro de um oco | [Esvaziar](topic:print-tools#hollow) deixa-o vazio; o fatiador acrescenta preenchimento a uma peça sólida |
| Detalhes demasiado pequenos para o bico (exceto paredes) | [Espessura das paredes](topic:print-tools#wall-thickness) encontra paredes finas; a pré-visualização de camadas do fatiador mostra o resto |

## Desempenho

Anular guarda uma cópia do modelo em cada passo (uma [malha](topic:meshes) guarda só o que mudou), por isso importações muito grandes de geometria de empurrar/puxar tornam cada edição mais lenta. Mantenha as importações leves, e guarde e reabra o ficheiro para limpar o histórico.

## Aplicações e plataformas

- **Ambiente de trabalho:** o ModelCraft funciona no navegador em Mac, Windows e Linux, e no CadCraft Studio, a aplicação de ambiente de trabalho com as oito aplicações numa só instalação. No Android, o CadCraft Studio instala-se a partir do APK em getcadcraft.com/download. Ainda não existe versão para iPad ou iPhone.
- **Toque:** veja [Orbitar, deslocar e zoom](topic:orbit-pan-zoom) para os gestos com os dedos. A pressão de uma caneta define o pincel no [Esculpir](topic:sculpt); noutros locais, a pressão e a inclinação da caneta não são usadas.
- **Folhas:** o ModelCraft [imprime uma vista por página](topic:export-model#print-the-view-or-save-it-as-a-pdf); não há layouts com várias vistas nem legenda. Exporte para DWG/DXF compatíveis com o CadCraft para desenhos à escala.
