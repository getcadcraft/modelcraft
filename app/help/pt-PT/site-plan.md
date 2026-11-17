---
title: Modelar sobre uma planta de implantação a partir de DWG ou DXF
summary: Traga uma planta CAD de implantação ou de piso como linhas no chão, responda à pergunta sobre unidades, e desenhe por cima dela faces e massas.
keywords: planta de implantação, dwg, dxf, cad, importar, esboço, esboço fotografado, esboço à mão, esboço em guardanapo, fotografia, papel, cores de caneta, blocos dinâmicos, estados de visibilidade, texto, trama, spline, elipse, face 3D, traçar, planta de piso, lote, linha de propriedade, unidades, base, contexto
from: 3415dc96
---

O ModelCraft pode trazer as linhas de um desenho CAD 2D, uma planta de implantação ou uma planta de piso, e colocá-las no chão para que possa modelar por cima delas.

## Importar o desenho

1. Clique em {{ui:Import}} no grupo {{ui:File}} (ou largue o ficheiro na vista 3D).
2. Escolha um ficheiro `.dwg` ou `.dxf`.

   Um DWG grande demora um momento: a barra de estado diz «A ler plan.dwg…» até ficar carregado.

3. Se o desenho não indicar as suas unidades, uma caixa de diálogo intitulada «Unidades do desenho» pergunta: «Qual é a unidade de desenho?» Escolha {{ui:Inches}}, {{ui:Feet}}, {{ui:Millimeters}} ou {{ui:Meters}}. A maioria das plantas de implantação norte-americanas está desenhada em pés, as plantas de arquitetura em polegadas, e as plantas métricas em milímetros.

   O desenho chega como um grupo de arestas no chão, selecionado, e a vista faz zoom para ele. A barra de estado indica quantas arestas entraram, por exemplo «Importado site.dwg: 1697 arestas no chão, num grupo. Explodir-o para desenhar diretamente sobre ele.»

## O que entra

- Linhas, polilinhas (incluindo os seus arcos), círculos e arcos, e blocos com tudo o que têm, apenas do **espaço modelo**. As curvas tornam-se pequenos segmentos retos.
- Linhas, polilinhas, arcos, círculos, elipses e splines ficam planos no chão, como arestas.
- **Tramas** tornam-se faces no chão, com as suas ilhas como furos, para poder empurrar ou puxar uma área com trama de imediato.
- **Faces 3D** e preenchimentos de sólidos tornam-se faces; as faces 3D mantêm as suas alturas.
- **Texto** (texto de uma linha, texto de várias linhas e valores de atributos) é desenhado como arestas numa escrita simples de traço único, à altura, ângulo e alinhamento do próprio texto. O tipo de letra não é o do desenho, por isso as palavras podem ficar um pouco mais longas ou mais curtas. Os caracteres para os quais a escrita não tem forma são desenhados como pequenas caixas e contados.
- **Cotas** são desenhadas como o desenho as mostra (as suas linhas, setas e texto, como arestas e faces).
- **Blocos dinâmicos** entram como o desenho os mostra: cada bloco colocado no estado de visibilidade em que foi guardado, e apenas as linhas desse estado. A barra de estado lista-os com os estados mostrados e os outros estados que cada um tem, por exemplo «Receptacle mostrado como Duplex ×38, GFI ×7 (estados: Duplex, GFI)». O ModelCraft não muda de estado.
- **Sólidos 3D, regiões e corpos** (os dados ACIS do desenho) entram como os seus próprios grupos: um sólido fechado como sólido, uma região ou corpo aberto como faces. As faces planas entram inteiras; as faces curvas (cilindros, cones, esferas, toros, superfícies simples de splines) como pequenos triângulos com arestas suaves entre eles, de modo que só se veem as arestas do próprio sólido. Uma face sobre outro tipo de superfície fica de fora e é listada: «Ainda não desenhado (sólidos 3D): …».
- Não são importados: pontos, tabelas, chamadas múltiplas, imagens e outros tipos de objetos. A barra de estado lista-os por tipo, como «Não importado: 12 POINT.» Tudo o que esteja num layout (espaço de papel) também fica de fora, sem ser listado.
- As camadas não são mantidas: todas as linhas entram da mesma forma.

Se o desenho estiver longe da sua origem (coordenadas de state plane, por exemplo), ainda é importado, mas pode cair longe da origem do ModelCraft. Desenhos que chegam a mais de 10,000 km da origem são recusados: mova primeiro o desenho para mais perto de 0,0 no programa CAD.

## Traçar em faces

As linhas importadas raramente se fecham em faces por si próprias. Duas formas de trabalhar:

**Manter a planta como base (recomendado)**

1. Deixe a planta no seu próprio grupo.
2. Desenhe o seu edifício por cima com {{ui:Rectangle}} e {{ui:Line}}, fazendo snap aos cantos da planta («Extremidade») e às arestas («Na aresta»).
3. Levante as faces com empurrar/puxar. A planta fica intacta por baixo, e pode apagar todo o grupo mais tarde com um clique.

O snap funciona entre grupos: pode fazer snap aos cantos da planta sem a abrir.

**Desenhar sobre as linhas da própria planta**

1. Selecione o grupo da planta e clique em {{ui:Explode}}. As suas linhas tornam-se arestas soltas.
2. Onde um contorno fechado deve ser uma face, desenhe uma linha sobre qualquer uma das suas arestas com {{ui:Line}}, de canto a canto. Quando o contorno está fechado e é plano, a face costuma preencher-se. Se não se preencher, procure uma falha ou uma sobreposição no contorno e desenhe sobre ela.
3. Levante-a com empurrar/puxar.

Isto funciona melhor numa planta limpa. Num levantamento muito carregado, desenhar por cima é mais rápido.

## Problemas

- «Este é um DXF binário. Guarde-o como DXF ASCII e tente novamente.» Volte a guardar o DXF a partir do programa CAD, como ASCII (texto).
- «… não tem linhas, arcos ou círculos no espaço modelo para importar.» O desenho provavelmente está todo em layouts, ou só tem texto e tramas.
- «Não foi possível ler este desenho (…). Pode estar danificado, ou guardado numa versão DWG que o leitor não suporta…» Os parênteses dizem porquê, por exemplo «A versão DWG AC1009 não é suportada». Guarde-o como DXF, ou como DWG do AutoCAD 2000 a 2018, a partir do programa CAD.
- A planta tem o tamanho errado: escolheu a unidade errada. Anule ({{key:Mod+Z}}) e importe de novo, ou [escale](topic:rotate-scale) o grupo pelo fator certo (12 entre pés e polegadas, 25.4 entre polegadas e milímetros).

Para transformar curvas de nível em terreno que possa moldar, veja [Terreno](topic:terrain).

## A partir de uma fotografia de um esboço à mão

**Ficheiro › Importar uma fotografia de esboço…** recebe uma fotografia de um esboço em papel (JPEG, PNG ou TIFF; uma foto tirada diretamente do telemóvel serve) e cria o mesmo tipo de arestas no chão. Indique qual é o papel (ou deixe-o encontrar a folha, tomada como A4) e a escala do esboço, por exemplo 1 : 100. A margem do papel é encontrada e a fotografia endireitada, a tinta é traçada em linhas e arcos, e cada cor de caneta (preto, vermelho, azul, verde) torna-se um grupo próprio com uma etiqueta (**Esboço preto**, **Esboço vermelho**, …), tudo dentro de um grupo com o nome da fotografia. É um só passo de anulação, e tudo acontece neste computador: nada é enviado para lado nenhum.

Quando não se encontra a margem do papel, toda a fotografia é tomada como a folha, e a barra de estado indica isso: meça algo que conheça e escale o grupo se estiver errado. Desenhe as linhas em faces, como acima.
