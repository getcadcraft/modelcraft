---
title: Modelar sobre uma planta de implantação de DWG ou DXF
summary: Traga uma planta CAD de implantação ou planta baixa como linhas no chão, responda à pergunta sobre as unidades e contorne-a em faces e massas.
keywords: planta de implantação, dwg, dxf, cad, importar, esboço, foto de esboço, esboço à mão, esboço em guardanapo, foto, papel, cores de caneta, blocos dinâmicos, estados de visibilidade, texto, hachura, spline, elipse, face 3D, contorno, planta baixa, lote, divisa, unidades, base, contexto
from: 3415dc96
---

A ModelCraft pode importar as linhas de um desenho CAD 2D, de uma planta de implantação ou de uma planta baixa, e posicioná-las no chão para que você modele sobre elas.

## Importar o desenho

1. Clique em {{ui:Importar}} no grupo {{ui:Arquivo}} (ou solte o arquivo na vista 3D).
2. Escolha um arquivo `.dwg` ou `.dxf`.

   Um DWG grande leva um momento: a barra de status diz "Lendo plan.dwg…" até que ele esteja carregado.

3. Se o desenho não disser quais são as suas unidades, uma caixa de diálogo intitulada "Unidades do desenho" pergunta: "Qual é uma unidade do desenho?" Escolha {{ui:Polegadas}}, {{ui:Pés}}, {{ui:Milímetros}} ou {{ui:Metros}}. A maioria das plantas de implantação dos EUA é desenhada em pés, as arquitetônicas em polegadas e as métricas em milímetros.

   O desenho chega como um grupo de arestas no chão, selecionado, e a vista dá zoom nele. A barra de status diz quantas arestas entraram, por exemplo "Importado site.dwg: 1697 arestas no chão, em um grupo. Explode-o para desenhar diretamente sobre ele."

## O que entra

- Linhas, polilinhas (incluindo os seus arcos), círculos e arcos, e blocos com tudo o que há neles, **somente do espaço modelo**. Curvas viram pequenos trechos retos.
- Linhas, polilinhas, arcos, círculos, elipses e splines ficam planos no chão, como arestas.
- **Hachuras** viram faces no chão, com as suas ilhas como furos, para que você possa empurrar/puxar uma área hachurada imediatamente.
- **Faces 3D** e preenchimentos de sólidos viram faces; as faces 3D mantêm as suas alturas.
- **Textos** (texto de linha única, texto de múltiplas linhas e valores de atributos) são desenhados como arestas em uma escrita simples de traço único, na altura, no ângulo e no alinhamento do próprio texto. A fonte não é a do desenho, então as palavras podem ficar um pouco mais longas ou mais curtas. Caracteres sem forma nessa escrita são desenhados como pequenas caixas e contados.
- **Cotas** são desenhadas como o desenho as mostra (suas linhas, setas e textos, como arestas e faces).
- **Blocos dinâmicos** entram como o desenho os mostra: cada bloco inserido no estado de visibilidade em que foi salvo, e apenas as linhas desse estado. A barra de status os lista com os estados mostrados e os demais estados que cada um tem, por exemplo "Tomada mostrada como Duplex ×38, GFI ×7 (estados: Duplex, GFI)". A ModelCraft não troca estados.
- **Sólidos 3D, regiões e corpos** (os dados ACIS do desenho) entram como os seus próprios grupos: um sólido fechado como sólido, uma região ou corpo aberto como faces. Faces planas entram inteiras; faces curvas (cilindros, cones, esferas, toros, superfícies spline simples) como pequenos triângulos com arestas suaves entre eles, de modo que só as arestas próprias do sólido aparecem. Uma face sobre outro tipo de superfície fica de fora e é listada: "Ainda não desenhado (sólidos 3D): …".
- Não importados: pontos, tabelas, multichamadas, imagens e outros tipos de objeto. A barra de status os lista por tipo, como "Não importado: 12 POINT." Qualquer coisa em um layout (espaço papel) também fica de fora, sem ser listada.
- As camadas não são mantidas: todas as linhas entram iguais.

Se o desenho estiver longe da sua origem (coordenadas de plano estadual, por exemplo), ele ainda é importado, mas pode cair longe da origem da ModelCraft. Desenhos a mais de 10,000 km da origem são recusados: mova o desenho para mais perto de 0,0 no programa CAD antes.

## Contornar em faces

As linhas importadas raramente se fecham em faces sozinhas. Duas formas de trabalhar:

**Mantenha a planta como base (recomendado)**

1. Deixe a planta como seu próprio grupo.
2. Desenhe o seu prédio por cima com {{ui:Retângulo}} e {{ui:Linha}}, encaixando nos cantos da planta ("Extremidade") e nas arestas ("Sobre aresta").
3. Empurre/puxe as suas faces para cima. A planta permanece intacta por baixo, e você pode apagar o grupo inteiro depois com um clique.

O encaixe funciona entre grupos: você pode encaixar nos cantos da planta sem abri-la.

**Desenhe sobre as linhas da própria planta**

1. Selecione o grupo da planta e clique em {{ui:Explodir}}. As suas linhas viram arestas soltas.
2. Onde um contorno fechado deveria ser uma face, desenhe uma linha sobre qualquer uma das arestas dele com {{ui:Linha}}, de canto a canto. Quando o contorno está fechado e plano, a face geralmente se preenche. Se não, procure uma falha ou uma sobreposição no contorno e desenhe por cima dela.
3. Empurre/puxe.

Isto funciona melhor em uma planta limpa. Em um levantamento carregado, contornar por cima é mais rápido.

## Problemas

- "Este é um DXF binário. Salve-o como DXF ASCII e tente novamente." Salve o DXF de novo no programa CAD, como ASCII (texto).
- "…não tem linhas, arcos ou círculos no espaço modelo para importar." O desenho provavelmente está todo em layouts, ou só tem texto e hachuras.
- "Este desenho não pôde ser lido (…). Ele pode estar danificado, ou salvo em uma versão de DWG que o leitor não suporta…" Os parênteses dizem o motivo, por exemplo "a versão DWG AC1009 não é suportada". Salve como DXF, ou como DWG do AutoCAD 2000 a 2018, no programa CAD.
- A planta está com o tamanho errado: você escolheu a unidade errada. Desfaça ({{key:Mod+Z}}) e importe de novo, ou [escalar](topic:rotate-scale) o grupo pelo fator certo (12 entre pés e polegadas, 25.4 entre polegadas e milímetros).

Para transformar curvas de nível em terreno que você possa esculpir, veja [Terreno](topic:terrain).

## A partir de uma foto de um esboço à mão

**Arquivo › Importar uma foto de esboço…** recebe uma foto de um esboço no papel (JPEG, PNG ou TIFF; uma foto tirada direto do celular serve) e cria o mesmo tipo de arestas no chão. Diga qual papel é (ou deixe que ele encontre a folha, considerada A4) e a escala do esboço, por exemplo 1 : 100. A borda do papel é encontrada e a foto é endireitada, a tinta é contornada em linhas e arcos, e cada cor de caneta (preto, vermelho, azul, verde) vira um grupo próprio com uma etiqueta (**Esboço preto**, **Esboço vermelho**, …), tudo dentro de um grupo com o nome da foto. É uma única etapa de desfazer, e tudo acontece neste computador: nada é enviado a lugar nenhum.

Quando não se encontra borda de papel, a foto inteira é tomada como folha e a linha de status informa isso: meça algo que você conhece e escale o grupo se estiver errado. Contorne as linhas em faces como acima.
