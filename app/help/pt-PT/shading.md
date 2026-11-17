---
title: Criar materiais com nós
summary: Construa um material a partir de texturas, imagens e cálculos no espaço de trabalho Sombreamento, veja-o na vista à medida que avança, e pinte faces com ele.
keywords: sombreamento, shading, bake, baking, fazer bake, oclusão ambiente, ao, curvatura, bake de normais, alto polígono, baixo polígono, mapa de luz, decalque, decalques, autocolante, logótipo, rótulo, pintura de textura, pintar textura, pincel, material, materiais, materialx, mtlx, openpbr, standard surface, biblioteca de materiais, librarycraft, conjunto de texturas, pbr, importar texturas, zip, cc0, arrastar, nó, nós, editor de nós, shader, textura, procedural, ruído, xadrez, voronoi, células, ondas, tijolos, ladrilhos, madeira, mármore, gradiente, sujidade, desgaste de arestas, rampa de cores, mistura, relevo, mapa de normais, rugosidade, metalicidade, opacidade, recorte, emissão, brilho, deslocamento, mapeamento de caixa, triplanar, uv, imagem, textura de imagem, openpbr
from: d7368b21
---

Um material criado no espaço de trabalho **Sombreamento** pertence ao ficheiro. É um pequeno grafo: **nós** que criam texturas, imagens e números, ligados à **Saída de material**, cujas entradas são o aspeto da superfície — cor base, rugosidade, metalicidade, normal, opacidade, emissão e o restante modelo OpenPBR. Pinta-se faces com ele como com qualquer material da biblioteca, e cada alteração aparece na vista de imediato.

## Abrir

Escolha {{ui:Shading}} na lista de espaços de trabalho. A vista 3D mantém a parte de cima do ecrã e o **editor de nós** ocupa a parte de baixo. O painel à direita lista os materiais do próprio ficheiro.

- {{ui:New material}} cria um material cinzento só com a sua Saída de material.
- **Criar uma cópia editável de um material da biblioteca** transforma tijolo, madeira, ladrilho e os restantes numa grafo que pode alterar: a textura chega por um nó de Textura da biblioteca, e os relevos por um nó Relevo.
- {{ui:Paint with it}} pinta as faces ou grupos selecionados, ou escolhe o material para a ferramenta Pintar. Os materiais da ferramenta Pintar também listam os do ficheiro em **Neste ficheiro**.
- {{ui:Duplicate}} e {{ui:Delete}} atuam sobre o material que está a editar. Eliminar não pode ser anulado: as faces pintadas com ele mostram a cor predefinida até as pintar de novo.

## Materiais da biblioteca

O **Biblioteca de materiais (Library)** do painel lista os materiais da biblioteca, cada um com uma pré-visualização renderizada pelo traçador de caminhos do CadCraft. São conjuntos de texturas publicados sob CC0, com crédito para as pessoas que os fizeram.

- Clique num para o trazer para o ficheiro (as suas imagens vêm com ele) e, com faces ou grupos selecionados, pintá-los.
- Arraste um para uma face ou um grupo na vista para pintar apenas essa.
- Passa a ser um dos materiais do ficheiro: altere os seus nós como qualquer outro. O crédito aparece no painel e fica guardado no ficheiro.

## Importar um conjunto de texturas

{{ui:Pictures or a zip…}} ou {{ui:A folder…}} em **Importar um conjunto de texturas** cria um material a partir de um conjunto de mapas. Os mapas são encontrados pelas palavras dos nomes dos ficheiros: color, albedo, diffuse ou basecolor; roughness (ou gloss, convertido em rugosidade); metalness ou metallic; normal (OpenGL ou DirectX, a partir de `gl` / `dx` no nome); height ou displacement; ambient occlusion; opacity; emission. Os mapas combinados (ARM, ORM) ficam de fora. O ladrilho começa com 1 × 1 m: defina o seu tamanho real na Saída de material. A altura vai para o deslocamento com a escala a 0 — aumente a escala para a usar em malhas.

## MaterialX

MaterialX é o formato aberto que outros programas 3D e de renderização usam para trocar materiais.

- {{ui:Export as MaterialX…}} guarda o material que está a editar: os seus valores e cada textura como imagem PNG junto ao ficheiro `.mtlx` (num zip). Escolha o shader em que é escrito: **OpenPBR Surface** (MaterialX 1.39, o mesmo modelo que o ModelCraft usa) ou **Standard Surface** (MaterialX 1.38, que mais programas leem atualmente). As texturas são posicionadas por coordenadas UV em metros; as posições em caixa e triplanar são escritas como UV.
- {{ui:Import MaterialX…}} (ou {{ui:From a folder…}}) lê ficheiros `.mtlx` com shaders OpenPBR, Standard Surface, UsdPreviewSurface ou glTF PBR. Dê-lhe também as imagens, ou um zip com tudo: uma imagem é encontrada pelo seu caminho, pelo seu nome, ou pelo seu nome com outro tipo de imagem (um `.exr` que o ficheiro indica pode vir como `.jpg` ao lado). As texturas, os mapas de normais, operações aritméticas, misturas e deslocamentos entram como nós; tudo o resto mantém o seu valor, e a barra de estado indica o que ficou de fora.

## Decalques

Um decalque é uma imagem aplicada sobre uma superfície — um logótipo, um sinal, um rótulo, uma mancha — com um material próprio.

- Defina a **Largura de um novo decalque**, depois {{ui:Place a decal…}} (ou {{ui:Decal}} na barra de ferramentas), escolha uma imagem PNG, JPEG ou WebP e clique numa face. A imagem é projetada sobre as superfícies aí, mantendo as proporções; as partes transparentes de um PNG continuam transparentes.
- Pertence ao grupo ou componente em que clicou e move-se com ele. Cobre as faces dentro da sua caixa que estão voltadas para o mesmo lado, e para nas arestas da superfície onde assenta.
- Cada decalque tem o seu próprio material, com o nome **Decalque: <imagem>**, na lista do ficheiro: edite-o como qualquer outro (rugosidade, um relevo, um brilho). {{ui:Material}} ao lado do decalque abre-o.
- Ao lado de cada decalque: a sua largura (a altura segue a imagem), {{ui:Turn}} (um quarto de volta) e {{ui:Delete}}. Os decalques ficam guardados com os materiais do ficheiro, fora do Anular.
- Aparecem na vista sombreada, nas renderizações rápidas e nas imagens de alta qualidade.

## Pintar na textura

{{ui:Paint texture}} (ou {{ui:Paint}} em **Pintar na textura**) transforma o ponteiro num pincel redondo. Arraste sobre uma face que use um dos materiais deste ficheiro: o pincel pinta a imagem por trás da sua cor base.

- Numa malha pinta ao longo das UV da malha (desdobre-a primeiro no espaço de trabalho UV); nas outras faces pinta através da face, por isso a pintura se repete com o ladrilho do material.
- Um material cuja cor base é uma cor lisa recebe uma nova imagem de 512 × 512 píxeis dessa cor na primeira vez que é pintado. Um material cuja cor base vem de outros nós precisa de um nó de Imagem ligado à Cor base.
- Defina no painel a cor, o tamanho do pincel (em píxeis da imagem), a força e a dureza. {{ui:Undo stroke}} ou Ctrl+Z (durante a pintura) anula um traço, até aos últimos 20.
- A imagem pintada é guardada no ficheiro. Os materiais da biblioteca não podem ser pintados: crie primeiro uma cópia editável.

## Fazer bake de texturas

**Fazer bake de texturas** escreve o que a forma e a cena dão a uma superfície em imagens ao longo das UV de uma malha.

- Selecione uma malha com UV (desdobre-a no espaço de trabalho UV), marque os mapas e prima o botão {{ui:Bake}}:
  - **Oclusão ambiente** — o quão aberto está cada ponto: cantos, vincos e lugares sob outros objetos ficam mais escuros. Tudo o que é mostrado no modelo o sombreia, até à distância de oclusão.
  - **Curvatura** — claro ao longo das arestas exteriores, escuro nos cantos interiores, cinzento médio nas partes planas ou suavemente curvas, na largura de aresta que definir.
  - **Normais a partir do objeto de alto detalhe** — selecione também uma cópia detalhada: o seu detalhe de superfície é escrito como um mapa de normais para o mais simples (o objeto com menos triângulos recebe o bake). A distância de pesquisa é a distância máxima a que as duas superfícies podem estar.
  - **Iluminação** — o sol do local e da data do modelo (Estilo) com as suas sombras, mais o céu, como mapa de luz.
- As imagens juntam-se ao ficheiro e aparecem nos nós de Imagem. Se o material que está a editar tiver um nó **Sujidade e desgaste das arestas**, lê de imediato as novas imagens de oclusão e curvatura.
- Mais raios por texel dão oclusão e iluminação mais suaves, mas demoram mais. O bake corre em segundo plano nos núcleos do processador do computador; {{ui:Stop baking}} interrompe-o.

## Criar um grafo

1. {{ui:Add a node…}} (ou {{key:Shift+A}} no editor de nós) adiciona um nó no meio do editor.
2. Arraste de um ponto de saída (à direita de um nó) para um ponto de entrada (à esquerda de um nó) para os ligar. Uma segunda ligação a uma entrada substitui a primeira; arraste uma entrada ligada para fora para a desligar.
3. As entradas não ligadas mostram o seu valor: escreva um número ou escolha uma cor. As definições ficam na parte inferior de cada nó.

Arraste um nó pelo título para o mover, arraste um espaço vazio para deslocar, e use a roda para dar zoom. {{key:Delete}} remove os nós ou a ligação selecionados, {{key:Mod+Z}} anula, {{key:Mod+D}} duplica, {{key:F}} mostra todos os nós. Cada alteração é um passo de anulação do editor de nós. A anulação do próprio modelo não altera os materiais.

| Nós | O que criam |
|---|---|
| Coordenadas de textura | Onde está um ponto no ladrilho: repete-o, desloca-o, roda-o um quarto de volta. |
| Valor, Cor | Um número, uma cor. |
| Imagem | Uma imagem do ficheiro (uma que veio com um modelo importado, ou uma que adicionou com {{ui:Add a picture…}}). Escolha **Cores** para uma fotografia e **Dados** para um mapa de rugosidade ou de normais. |
| Textura da biblioteca | A textura, a rugosidade e a altura de um material da biblioteca. |
| Xadrez, Ruído | Quadrados; ruído fractal suave com o seu detalhe, rugosidade e semente. |
| Células de Voronoi, Ondas, Gradiente | Células (distância ao ponto mais próximo, as arestas entre células, uma cor por célula); faixas transversais, verticais ou diagonais, como seno, dente de serra ou triângulo, curvadas pelo ruído; gradientes linear, quadrático, radial e esférico. |
| Tijolos, Ladrilhos | Fiadas de tijolos com um deslocamento alternado, ou uma grelha de ladrilhos: cores, argamassa ou rejunte, um espaço e um chanfro em metros, uma altura para os relevos, um número aleatório por peça. |
| Madeira, Mármore | Anéis ao longo do veio com fibras finas; veios curvados por turbulência. |
| Sujidade e desgaste das arestas | Desgasta as arestas convexas e suja as cavidades a partir das imagens de curvatura e oclusão de uma malha ([Fazer bake de texturas](topic:shading#bake-textures) cria-as; ou defina as suas duas definições de imagem, na disposição UV da malha: posicione o material por coordenadas UV). Sem elas, não altera nada. |
| Misturar cores, Rampa de cores, Matiz/saturação/valor, Brilho e contraste, Inverter, Gama, Separar e Combinar RGB | Trabalho de cor. |
| Matemática, Intervalo de mapeamento | Operações aritméticas sobre números (somar, multiplicar, potência, passo suave e mais). |
| Relevo, Mapa de normais | Uma normal a partir de uma altura (Relevo) ou de uma imagem de mapa de normais (Mapa de normais: escolha a direção do canal verde). |

## A Saída de material

As suas definições indicam como a textura assenta nas superfícies:

- **Largura do ladrilho** e **Altura do ladrilho**: quantos metros cobre um ladrilho da textura. Tudo o que um grafo cria se repete pelo ladrilho, sem costura.
- **Posicionado por**: **Coordenadas UV** segue as faces (faces de empurrar/puxar: ao longo de cada face; malhas: as suas UV, uma unidade UV = um ladrilho), **Caixa** projeta a partir do mais próximo dos três eixos, **Triplanar** mistura as três projeções nas superfícies inclinadas (**Nitidez da mistura**: maior é uma mistura mais dura).
- **Força da normal** escala a entrada de normal. **Escala de deslocamento** define a distância que a entrada de deslocamento move os vértices de uma malha.
- {{ui:More inputs}} mostra as restantes entradas OpenPBR: revestimento, felpo, subsuperfície, película fina, transmissão e as respetivas cores.

## Em imagens de alta qualidade

O traçador de caminhos lê a cor base, a rugosidade, a metalicidade, a opacidade, a normal e a emissão do grafo à medida que mudam ao longo da superfície. Qualquer outra entrada que ligue (um revestimento que varia, por exemplo) é usada pela sua média; o painel indica quais. Um recorte feito a partir de uma textura de opacidade mostra a sua forma, e a sua sombra é uniformemente translúcida. Uma textura luminosa ilumina o que está virado para ela, sem ser amostrada como uma lâmpada.

O **deslocamento** move apenas os vértices das malhas; por isso, acrescente um modificador de subdivisão para obter detalhe ([Modificadores](topic:modifiers)). As faces de empurrar/puxar mantêm a sua forma e recebem os relevos a partir da normal.

:::tip
Num computador com WebGPU, o grafo é calculado na placa gráfica; sem ele, no processador. O resultado é o mesmo.
:::
