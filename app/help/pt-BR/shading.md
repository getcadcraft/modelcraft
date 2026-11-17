---
title: Criar materiais com nós
summary: Monte um material a partir de texturas, imagens e cálculos no espaço de trabalho Sombreamento, veja o resultado na vista enquanto avança e pinte faces com ele.
keywords: sombreamento, gerar, geração, geração de texturas, oclusão ambiental, oa, curvatura, geração de normais, alta contagem de polígonos, baixa contagem de polígonos, mapa de luz, decalque, decalques, adesivo, logotipo, rótulo, pintura de textura, pincel, material, materiais, materialx, mtlx, openpbr, standard surface, biblioteca de materiais, librarycraft, conjunto de texturas, pbr, importar texturas, zip, cc0, arrastar, nó, nós, editor de nós, shader, textura, procedural, ruído, xadrez, voronoi, células, ondas, tijolos, azulejos, madeira, mármore, gradiente, sujeira, desgaste de aresta, rampa de cor, mistura, relevo, mapa de normais, rugosidade, metalicidade, opacidade, recorte, emissão, brilho luminoso, deslocamento, mapeamento em caixa, triplanar, uv, imagem, textura de imagem, openpbr
from: d7368b21
---

Um material criado no espaço de trabalho **Sombreamento** pertence ao arquivo. É um grafo pequeno: **nós** que criam texturas, imagens e números, ligados à **Saída do material**, cujas entradas definem a aparência da superfície — cor base, rugosidade, metalicidade, normal, opacidade, emissão e o restante do modelo OpenPBR. Você pinta faces com ele como com qualquer material da biblioteca, e cada alteração aparece na vista de imediato.

## Abrir

Escolha {{ui:Sombreamento}} na lista de espaços de trabalho. A vista 3D mantém a parte de cima da tela, e o **editor de nós** ocupa a parte de baixo. O painel à direita lista os materiais próprios do arquivo.

- {{ui:Novo material}} cria um material cinza com apenas a sua Saída do material.
- **Criar uma cópia editável de um material da biblioteca** transforma tijolo, madeira, azulejo e os demais em um grafo que você pode alterar: a textura passa por um nó Textura da biblioteca, e o relevo, por um nó Relevo.
- {{ui:Pintar com ele}} pinta as faces ou os grupos selecionados, ou escolhe o material para a ferramenta Pintar. Os materiais da ferramenta Pintar também listam os do arquivo em **Neste arquivo**.
- {{ui:Duplicar}} e {{ui:Excluir}} atuam sobre o material que você está editando. Excluir não pode ser desfeito: as faces pintadas com ele mostram a cor padrão até você pintá-las de novo.

## Materiais da biblioteca

A **Biblioteca de materiais (Biblioteca)** no painel lista os materiais da biblioteca, cada um com uma visualização renderizada pelo traçador de caminhos do CadCraft. São conjuntos de texturas liberados sob CC0, creditados às pessoas que os criaram.

- Clique em um para trazê-lo ao arquivo (as suas imagens vêm junto) e, com faces ou grupos selecionados, pintá-los.
- Arraste um material sobre uma face ou um grupo na vista para pintar apenas essa parte.
- Ele se torna um dos materiais do arquivo: altere os seus nós como qualquer outro. O crédito aparece no painel e permanece no arquivo.

## Importar um conjunto de texturas

{{ui:Imagens ou um zip…}} ou {{ui:Uma pasta…}} em **Importar um conjunto de texturas** cria um material a partir de um conjunto de mapas. Os mapas são reconhecidos pelas palavras em seus nomes de arquivo: color, albedo, diffuse ou basecolor; roughness (ou gloss, convertido em rugosidade); metalness ou metallic; normal (OpenGL ou DirectX, pelos `gl` / `dx` no nome); height ou displacement; ambient occlusion; opacity; emission. Mapas empacotados (ARM, ORM) ficam de fora. O azulejo começa com 1 × 1 m: defina o tamanho real na Saída do material. A altura vai para o deslocamento com a escala em 0 — aumente a escala para usá-la em malhas.

## MaterialX

MaterialX é o formato aberto que outros programas de 3D e renderização usam para trocar materiais.

- {{ui:Exportar como MaterialX…}} salva o material que você está editando: seus valores e cada textura como uma imagem PNG ao lado do arquivo `.mtlx` (em um zip). Escolha o shader em que ele será escrito: **OpenPBR Surface** (MaterialX 1.39, o mesmo modelo que a ModelCraft usa) ou **Standard Surface** (MaterialX 1.38, que mais programas leem hoje). As texturas são posicionadas pelas coordenadas UV em metros; o posicionamento em caixa e o triplanar são escritos como UV.
- {{ui:Importar MaterialX…}} (ou {{ui:De uma pasta…}}) lê arquivos `.mtlx` com shaders OpenPBR, Standard Surface, UsdPreviewSurface ou glTF PBR. Forneça também as imagens, ou um zip com tudo: uma imagem é encontrada pelo caminho, pelo nome ou pelo nome com outro tipo de imagem (um `.exr` que o arquivo indica pode vir como um `.jpg` ao lado dele). Texturas, mapas de normais, aritmética, misturas e deslocamento entram como nós; o que for outro mantém o seu valor, e a linha de status informa o que ficou de fora.

## Decalques

Um decalque é uma imagem aplicada sobre uma superfície — um logotipo, uma placa, um rótulo, uma mancha — com um material próprio.

- Defina **Largura de um novo decalque** e depois {{ui:Colocar um decalque…}} (ou {{ui:Decalque}} na barra de ferramentas), escolha uma imagem PNG, JPEG ou WebP e clique em uma face. A imagem é projetada sobre as superfícies ali, mantendo as suas proporções; as partes transparentes de um PNG continuam transparentes.
- Ele pertence ao grupo ou componente em que você clicou e se move com ele. Cobre as faces dentro da sua caixa que estão voltadas para o mesmo lado, e para nas arestas do que está sob ele.
- Cada decalque recebe o seu próprio material, chamado **Decalque: <imagem>**, na lista do arquivo: edite-o como qualquer outro (rugosidade, relevo, brilho luminoso). {{ui:Material}} ao lado do decalque o abre.
- Ao lado de cada decalque: a sua largura (a altura acompanha a imagem), {{ui:Girar}} (um quarto de volta) e {{ui:Excluir}}. Os decalques ficam guardados com os materiais do arquivo, fora do {{ui:Desfazer}}.
- Eles aparecem na vista sombreada, em renderizações rápidas e em imagens de alta qualidade.

## Pintar na textura

{{ui:Pintar textura}} (ou {{ui:Pintar}} em **Pintar na textura**) transforma o ponteiro em um pincel redondo. Arraste sobre uma face que tenha um dos materiais deste arquivo: o pincel pinta a imagem por trás da sua cor base.

- Em uma malha, ele pinta seguindo os UVs da malha (desdobre-a antes no espaço de trabalho UV); nas demais faces, pinta atravessando a face, de modo que a pintura se repete com o azulejo do material.
- Um material cuja cor base é uma cor simples ganha uma nova imagem de 512 × 512 pixels dessa cor na primeira vez que você pinta. Um material cuja cor base vem de outros nós precisa de um nó Imagem ligado à Cor base.
- Defina a cor, o tamanho (em pixels da imagem), a intensidade e a dureza do pincel no painel. {{ui:Desfazer pincelada}} ou {{key:Ctrl+Z}} (durante a pintura) desfaz uma pincelada, até as últimas 20.
- A imagem pintada é salva no arquivo. Materiais da biblioteca não podem ser pintados: crie uma cópia editável primeiro.

## Gerar texturas

**Gerar texturas** grava, em imagens ao longo dos UVs de uma malha, o que a forma e a cena dão a uma superfície.

- Selecione uma malha que tenha UVs (desdobre-a no espaço de trabalho UV), marque os mapas e pressione {{ui:Gerar}}:
  - **Oclusão ambiental** — quão aberto está cada ponto: cantos, vincos e lugares sob outros objetos ficam mais escuros. Tudo o que aparece no modelo sombreia isso, até a distância de oclusão.
  - **Curvatura** — claro nas bordas externas, escuro nos cantos internos, cinza médio em partes planas ou suavemente curvas, sobre a largura de borda que você definiu.
  - **Normais a partir do objeto de alto detalhe** — selecione também uma cópia detalhada: o seu detalhe de superfície é gravado como um mapa de normais para o objeto mais simples (o objeto com menos triângulos recebe a geração). A distância de busca é a distância máxima entre as duas superfícies.
  - **Iluminação** — o sol do lugar e da data do modelo (Estilo) com as suas sombras, além do céu, como um mapa de luz.
- As imagens entram no arquivo e aparecem nos nós Imagem. Se o material que você está editando tiver um nó **Sujeira e desgaste de aresta**, ele lê de imediato a nova oclusão e a nova curvatura.
- Mais raios por texel geram oclusão e iluminação mais suaves, mas levam mais tempo. A geração roda nos núcleos do processador, em segundo plano; {{ui:Parar a geração}} a interrompe.

## Montar um grafo

1. {{ui:Adicionar nó…}} (ou {{key:Shift+A}} no editor de nós) adiciona um nó no meio do editor.
2. Arraste de um ponto de saída (à direita de um nó) até um ponto de entrada (à esquerda de um nó) para ligá-los. Uma segunda ligação em uma entrada substitui a primeira; arraste uma entrada ligada para longe para desligá-la.
3. Entradas sem ligação mostram o seu valor: digite um número ou escolha uma cor. As configurações ficam na parte inferior de cada nó.

Arraste um nó pelo título para movê-lo, arraste o espaço vazio para fazer pan, e use a roda para dar zoom. {{key:Delete}} remove os nós ou a ligação selecionados, {{key:Mod+Z}} desfaz, {{key:Mod+D}} duplica, {{key:F}} mostra todos os nós. Cada alteração é uma etapa de desfazer do editor de nós. O desfazer do modelo não altera os materiais.

| Nós | O que criam |
|---|---|
| Coordenadas de textura | Onde um ponto está no azulejo: repetir, deslocar, girar um quarto de volta. |
| Valor, Cor | Um número, uma cor. |
| Imagem | Uma imagem do arquivo (uma que veio com um modelo importado, ou uma que você adicionou com {{ui:Adicionar imagem…}}). Escolha **Cores** para uma foto e **Dados** para um mapa de rugosidade ou de normais. |
| Textura da biblioteca | A textura, a rugosidade e a altura de um material da biblioteca. |
| Xadrez, Ruído | Quadrados; ruído fractal suave com seu detalhe, rugosidade e semente. |
| Células Voronoi, Ondas, Gradiente | Células (distância ao ponto mais próximo, as arestas entre células, uma cor por célula); faixas transversais, verticais ou diagonais, como senoide, dente de serra ou triângulo, curvadas por ruído; gradientes linear, quadrático, radial e esférico. |
| Tijolos, Azulejos | Fileiras de tijolos com deslocamento alternado, ou uma grade de azulejos: cores, argamassa ou rejunte, uma folga e um chanfro em metros, uma altura para os relevos, um número aleatório por peça. |
| Madeira, Mármore | Anéis ao longo do veio, com fibras finas; veios curvados pela turbulência. |
| Sujeira e desgaste de aresta | Desgasta as arestas convexas e suja as cavidades a partir das imagens de curvatura e oclusão de uma malha ([Gerar texturas](topic:shading#bake-textures) as cria; ou defina suas duas configurações de imagem, no layout UV da malha: posicione o material pelas coordenadas UV). Sem elas, não muda nada. |
| Misturar cores, Rampa de cor, Matiz/saturação/valor, Brilho e contraste, Inverter, Gama, Separar e Combinar RGB | Trabalho com cores. |
| Matemática, Intervalo de mapa | Aritmética sobre números (somar, multiplicar, potência, passo suave e mais). |
| Relevo, Mapa de normais | Uma normal a partir de uma altura (Relevo) ou de uma imagem de mapa de normais (Mapa de normais: escolha a direção do canal verde). |

## A saída do material

Suas configurações definem como a textura se assenta nas superfícies:

- **Largura do azulejo** e **Altura do azulejo**: quantos metros um azulejo da textura cobre. Tudo o que um grafo cria se repete pelo azulejo sem emenda.
- **Posicionado por**: **Coordenadas UV** segue as faces (faces de empurrar/puxar: ao longo de cada face; malhas: os seus UVs, uma unidade UV = um azulejo), **Caixa** projeta a partir do mais próximo dos três eixos, **Triplanar** mistura as três projeções em superfícies inclinadas (**Nitidez da mistura**: quanto maior, mais dura a mistura).
- **Intensidade da normal** escala a entrada de normal. **Escala de deslocamento** define quanto a entrada de deslocamento move os vértices de uma malha.
- {{ui:Mais entradas}} mostra as demais entradas do OpenPBR: verniz, felpa, subsuperfície, película fina, transmissão e as suas cores.

## Em imagens de alta qualidade

O traçador de caminhos lê a cor base, a rugosidade, a metalicidade, a opacidade, a normal e a emissão do grafo conforme elas variam pela superfície. Qualquer outra entrada que você ligue (um verniz que varia, por exemplo) é usada pela sua média; o painel indica quais são. Um recorte feito por uma textura de opacidade mostra a sua forma, e a sombra dele é uniformemente transparente. Uma textura luminosa ilumina o que está voltado para ela, sem ser amostrada como uma lâmpada.

**Deslocamento** move os vértices apenas de malhas, então adicione um modificador de Subdivisão para obter detalhe ([Modificadores](topic:modifiers)). Faces de empurrar/puxar mantêm a forma e recebem os relevos da normal.

:::tip
Em um computador com WebGPU, o grafo é calculado na placa de vídeo; sem ele, no processador. O resultado é o mesmo.
:::
