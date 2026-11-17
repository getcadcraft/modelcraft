---
title: Ainda não implementado
summary: O que esta versão do ModelCraft ainda não faz e o que fazer hoje no lugar.
keywords: ausente, ainda não, limitações, roteiro, materiais, texturas, texto, camadas, aparar, dividir, nuvem, desktop
from: 179fa5e4
---

O ModelCraft é uma versão inicial. Esta página lista o que ele ainda não faz, para que você não perca tempo procurando, e a forma mais próxima de concluir o trabalho hoje.

## Ferramentas de desenho

| Ainda não | Alternativa hoje |
|---|---|
| Desenho à mão livre | Clique nos pontos com {{ui:Curve}} |
| Mudar o número de segmentos de um arco ou círculo depois de desenhá-lo | Apague e desenhe de novo depois de digitar `24s` |
| Escolher uma fonte para o [texto 3D](topic:text3d), ou editar as palavras depois de posicioná-lo | Apague e adicione o texto de novo |
| Mudar um ângulo digitando em uma cota angular, ou o tamanho de um cilindro pela cota do seu círculo | Gire as arestas com {{ui:Rotate}}; redimensione o cilindro com {{ui:Scale}} |
| Cotas em arquivos de modelo exportados | As cotas aparecem em imagens, impressões e PDFs da vista; os arquivos de modelo carregam apenas geometria |
| Aparar, Dividir e Casca externa | Grupos fechados de [União, Subtrair e Interseccionar](topic:solids), ou [interseccionar faces](topic:intersect) e apagar o que não for necessário |
| Escolher o eixo de rotação com as teclas de seta | Clique no centro de {{ui:Rotate}} em uma face voltada para o sentido que o eixo deve apontar |
| Travas em mais de uma inferência ao mesmo tempo | Trave uma direção com uma tecla de seta e depois encaixe em um ponto |
| Redimensionar ao longo de uma inclinação, ou a partir de uma extremidade de cota que não está em um canto | Posicione a cota em dois cantos, ao longo de uma aresta ou ao longo do vermelho, verde ou azul |

## Animação

| Ainda não | Alternativa hoje |
|---|---|
| Animar faces, arestas, a hora do dia do sol, o estilo ou o que está oculto | Transforme a parte móvel em grupo ou componente; renderize um vídeo separado para outra hora do dia |
| Uma câmera que segue um caminho desenhado, ou que olha para um objeto em movimento | Defina mais quadros-chave de câmera ao longo do caminho ([Animar](topic:animation)) |
| Som em vídeos, e vídeos de alta qualidade (traçado de caminhos) sem WebGPU | Adicione o som em um editor de vídeo; sem WebGPU, renderize o vídeo com o renderizador rápido ([Renderizar o vídeo](topic:animation#render-the-video)) |
| Luminárias animadas (brilho, dispersão, cor) em um vídeo renderizado, um ângulo de lente animado em um vídeo sem quadros-chave de câmera, animação de materiais ou de configurações de renderização | As luminárias animam na vista; para um vídeo, anime também a câmera para um zoom; renderize vídeos separados para configurações de luz diferentes ([Animar qualquer propriedade](topic:animate)) |
| Espelhar pesos ou ossos de um lado para o outro, envelopes de ossos visíveis, mostrar pesos sombreados ponto a ponto (são mostrados por face), ver a malha posada enquanto pinta pesos | Pinte os dois lados, ou faça uma metade e use um modificador Espelho antes de adicionar o esqueleto; alterne entre Pintar pesos e Pose para verificar |
| Ossos lidos de arquivos glTF, FBX ou USD como um esqueleto, e esqueletos gravados nesses arquivos | Modelos com pele entram em repouso com os pesos do arquivo; adicione os ossos na ordem de articulação do arquivo e depois {{ui:Use the file's weights}} ([Animar](topic:animate)) |
| Mover um alvo IK ou um polo arrastando-o na vista, escolher o espaço próprio de uma restrição (local ou mundial), esticar cadeias IK, IK ao longo de uma curva | Digite o ponto do alvo, ou aponte para um objeto e mova-o; mantenha as cadeias em seus comprimentos |
| Tecidos, fluidos, corpos moles, juntas e dobradiças entre corpos rígidos, colisão com a forma exata de um objeto (só caixas e esferas o envolvem), uma simulação ao vivo enquanto você reproduz, uma velocidade ou giro inicial (os corpos começam em repouso) | Assar os corpos rígidos e reproduzir os quadros-chave; construir uma dobradiça com quadros-chave; dividir uma forma irregular em caixas (grupos) |
| Exportar a animação para glTF ou outros arquivos de modelo | Renderize um vídeo; o arquivo `.modelcraft` e um [arquivo USD](topic:usd) que o ModelCraft salvou ficam reservados para o ModelCraft |
| Digitar um comentário ou título em um problema no VR, notas de voz, mover um plano de corte à mão no VR | Posicione o problema no VR e depois adicione o texto em um programa BCF; defina um plano de corte na vista antes de entrar: veja [Revisar o modelo com um headset de VR](topic:vr-review) |
| Ver pessoas à mesa no VR (só aparecem pessoas em VR), gravar um percurso em VR | Peça que entrem no VR, ou faça uma [animação](topic:animation) do percurso |

## Malhas

| Ainda não | Alternativa hoje |
|---|---|
| Esculpir por níveis (multirresolução), e o Detalhe removendo triângulos que ficaram minúsculos | [Esculpir](topic:sculpt) uma malha subdividida; {{ui:Remesh}} para uniformizá-la de novo |
| Uma remalhagem em faces de quatro lados que seguem a forma | {{ui:Remesh}} (triângulos uniformes), depois reconstrua com [Retopologia](topic:mesh-edit#retopology) |
| Pesos pintados em vértices para modificadores (Deslocar, Suavizar e Envolver funcionam na malha inteira) | Aplique o modificador, depois esculpa ou edite as partes que precisam |
| Copiar e colar de vértices, arestas ou faces, um corte de faca que termina dentro de uma face, arestas de arame sem face | Duplique a malha em Modelo; use faca de aresta a aresta; [extrude](topic:mesh-edit#change-the-shape) arestas abertas em faces |

## Organização e visualização

| Ainda não | Alternativa hoje |
|---|---|
| Camadas de plantas de situação em DWG e DXF como etiquetas | A planta entra como um único grupo: exploda-a e agrupe as partes que deseja etiquetar |
| Vários cortes de seção ao mesmo tempo, uma caixa de seção, ou o contorno de uma seção exportado como desenho | Um [plano de corte](topic:sections) corta por vez; exporte a vista como imagem |
| Mostrar arestas suaves tracejadas, ou suavizar ao arrastar um controle deslizante | [Suavizar por ângulo](topic:soften) em Informações da entidade, e desfaça para tentar outro ângulo |
| Uma biblioteca on-line de modelos para pesquisar, ou componentes com opções para escolher (cor, estilo) | A [biblioteca inicial](topic:starter); importe modelos Collada, OBJ ou glTF; [estique](topic:stretch) uma cópia até o tamanho |
| Colocar plantas da biblioteca de plantas | [Espalhe](topic:live-view#scatter-plants-rocks-and-people) plantas na visualização ao vivo, ou coloque uma árvore da biblioteca inicial |
| Cópias independentes de um grupo | Transforme-o em componente e depois {{ui:Make unique}} (veja [Solução de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderização

| Ainda não | Alternativa hoje |
|---|---|
| Renderização na vista (espaço de trabalho {{ui:Render}}), a fila de renderização, e as opções de câmera, imagem de céu, névoa e mistura de luz sem WebGPU | {{ui:Render a picture…}} em Alta qualidade usa o traçador de caminhos WebGL, sem essas opções ([Renderizar uma imagem](topic:render#high-quality)) |
| Outro programa desenhando a imagem renderizada sem um complemento de motor de renderização (o CadCraft nunca executa um programa sob a licença GNU GPL); câmeras panorâmicas ou estéreo e uma imagem de céu por meio de outro programa; o plug-in do Unreal Engine (os arquivos são gravados, mas o plug-in que os abre não foi lançado) | Nossos próprios motores Rápido e Traçador de caminhos; o motor de um complemento ([desenhe a imagem com outro programa](topic:render-other-program)); uma pasta de arquivo USD, glTF ou Unreal da lista de Motor para levar a qualquer programa |
| Plantas e rochas espalhadas em {{ui:Render a picture…}} | Elas aparecem na [visualização ao vivo](topic:live-view), em seus panoramas, no visualizador e no vídeo |

## Materiais e cores

| Ainda não | Alternativa hoje |
|---|---|
| Entradas além de cor base, rugosidade, metalicidade, opacidade, normal e emissão variando ao longo de uma superfície em imagens de alta qualidade (usam a média) | [Crie materiais com nós](topic:shading): conecte-os mesmo assim; a vista os mostra variando |
| Deslocamento em faces de empurrar/puxar | Converta o objeto em malha para o deslocamento |
| Compartilhar seus próprios materiais com a Biblioteca a partir do aplicativo, e mapas empacotados (ARM/ORM) ou EXR em um conjunto de texturas importado | Mantenha-os no arquivo; importe os mapas separados como PNG ou JPEG |
| Materiais do arquivo em sessões Live TeamWork (eles ficam no computador que os criou) | Salve o arquivo e compartilhe |
| Decalques que dobram em superfícies curvas, decalques no Desfazer, ou pintar texturas de várias faces de uma vez através de uma costura | Coloque decalques menores em cada parte; pinte cada lado de uma costura separadamente |
| Assar em faces de empurrar/puxar, assar vários objetos em uma imagem, uma gaiola que você molda à mão, ou iluminação assada de luminárias | Converta em malha e desdobre; asse cada objeto; aumente a distância de busca; renderize uma imagem para a luz das luminárias |
| Pintar rugosidade, metalicidade ou altura, pintar com imagens (carimbos) e pintura de textura maior que 512 × 512 | Pinte a cor base aqui; crie os outros mapas em um editor de imagens e importe-os como um conjunto de texturas |
| Texturas em exportações Collada, STL, PLY, 3MF, IFC, DWG e DXF, e os grafos de nós dos materiais do próprio arquivo em modelos exportados | Esses formatos recebem a cor de cada material; glTF e OBJ levam as texturas importadas; exporte um material sozinho como [MaterialX](topic:shading#materialx); [USD](topic:usd) mantém o modelo inteiro para o ModelCraft |
| Texturas em arquivos Collada | São contadas e deixadas de fora na importação; texturas em arquivos `.skp` e `.glb` entram |

## Arquivos

| Ainda não | Alternativa hoje |
|---|---|
| Salvar arquivos do SketchUp, e o texto e as cotas deles | [Importe](topic:import-sketchup-files) mantém faces, cores e texturas; exporte Collada (`.dae`) para voltar ao SketchUp |
| Cotas e guias em exportações DWG e DXF | Adicione-as no programa CAD depois de exportar |
| Pontos, tabelas e multichamadas de DWG e DXF | São contados e deixados de fora; o texto entra como letra de traço único, não com a fonte do desenho |
| Superfícies, malhas, tabelas e multichamadas de DWG e DXF; faces de sólidos 3D em superfícies varridas, lofts ou outras superfícies de forma livre | Também são contados e deixados de fora (os próprios sólidos 3D entram). Exporte essas partes do programa CAD como OBJ ou Collada e importe isso |
| Tipos, propriedades ou materiais IFC | A exportação IFC tem [pavimentos](topic:formats#ifc-ifc) e elementos genéricos; adicione o resto em um programa BIM |
| Enviar um modelo direto ao BimCraft | Exporte {{ui:IFC for BimCraft (.ifc)}} e abra no BimCraft |
| Arestas soltas em glTF e STL | Use OBJ ou Collada para desenho de linhas |
| Materiais glTF e FBX além da cor base (metal, rugosidade, mapas normais, vidro, verniz, brilho…) | São lidos e listados; o ModelCraft mantém a cor base ou a textura. Refaça o visual no [espaço de trabalho de sombreamento](topic:shading) |
| Ossos, animações e alvos de morfose em glTF | Modelos com pele entram em repouso como estão; anime na [linha do tempo](topic:animation) |
| Cores e nomes das peças da montagem a partir de arquivos STEP | As peças entram como malhas no tamanho real; [pinte](topic:paint) e nomeie-as depois da importação |
| Objetos SubD, texto, cotas e luzes de arquivos `.3dm` | Veja [o que fica de fora](topic:import-3dm-files#what-is-left-out-and-said); converta SubD em malhas no programa que criou o arquivo |
| Texturas KTX2 e variantes de material em glTF | Exporte com texturas PNG ou JPEG; a variante padrão é usada |
| Gravação de instanciamento glTF (EXT_mesh_gpu_instancing) | Componentes são gravados uma vez e posicionados muitas vezes, o que todo visualizador lê |
| Animação Alembic (cada amostra de um cache), pontos e curvas Alembic, gravação em Alembic | A primeira amostra entra; anime na [linha do tempo](topic:animation); grave em glTF, USD ou OBJ |
| Mapas de relevo e normais em materiais OBJ | Só a imagem de cor (`map_Kd`) entra |
| Ossos e animação FBX, exportação FBX, arquivos FBX 6 | Modelos com pele entram em repouso; exporte glTF; salve arquivos antigos como FBX 2011 ou mais recente |
| Skins, morfos, câmeras, luzes, transformações look-at e skew de Collada, referências externas | São deixados de fora na importação e contados na mensagem |
| Arquivos de backup | {{ui:Save as}} ({{key:Mod+Shift+S}}) salva outra cópia. Após uma falha, o ModelCraft oferece seu trabalho não salvo de volta ("Recuperar seu trabalho?") |
| Salvamento na nuvem e sincronização entre computadores | Ainda não disponível. Salve os arquivos no seu computador e copie-os para onde precisar |

## Impressão 3D

| Ainda não | Alternativa hoje |
|---|---|
| Suportes reais do fatiador (interfaces, base de sustentação, o padrão exato de suporte) | A [prévia de suportes](topic:print-tools#supports-preview) mostra onde e quanto; a prévia do seu fatiador mostra os reais |
| Desembaraçar uma peça que passa por si mesma, ou arestas onde três ou mais faces se encontram | [Reparar](topic:print-tools#repair) lista-as com a posição; use [Interseccionar faces](topic:intersect) e apague o que está dentro |
| Padrões de preenchimento e uma treliça dentro de um oco | [Esvaziar](topic:print-tools#hollow) deixa vazio; seu fatiador adiciona preenchimento a uma peça sólida |
| Detalhes pequenos demais para o seu bico (que não sejam paredes) | [Espessura de parede](topic:print-tools#wall-thickness) encontra paredes finas; a prévia de camadas do seu fatiador mostra o resto |

## Desempenho

O desfazer guarda uma cópia do modelo para cada passo (uma [malha](topic:meshes) guarda só o que mudou), então importações muito grandes de geometria de empurrar/puxar deixam cada edição mais lenta. Mantenha as importações enxutas e salve e reabra para limpar o histórico.

## Aplicativos e plataformas

- **Desktop:** o ModelCraft roda no navegador em Mac, Windows e Linux, e no CadCraft Studio, o aplicativo de desktop com os oito aplicativos em uma só instalação. No Android, o CadCraft Studio é instalado pelo APK em getcadcraft.com/download. Ainda não há versão para iPad ou iPhone.
- **Toque:** veja [Órbita, pan e zoom](topic:orbit-pan-zoom) para os gestos com os dedos. A pressão de uma caneta define o pincel em [Esculpir](topic:sculpt); no resto, a pressão e a inclinação da caneta não são usadas.
- **Folhas:** o ModelCraft [imprime uma vista por página](topic:export-model#print-the-view-or-save-it-as-a-pdf); não há layouts de folha com várias vistas ou com uma legenda. Exporte para DWG/DXF compatíveis com o CadCraft para desenhos em escala.
