---
title: Crear materiais con nodos
summary: Constrúa un material a partir de texturas, imaxes e cálculos no espazo de traballo Sombreado, véxao na vista mentres avanza e pinte caras con el.
keywords: sombreado, hornear, horneado, horneado de texturas, oclusión ambiental, ao, curvatura, horneado de normais, alto polígono, baixo polígono, mapa de luz, calcomanía, calcomanías, adhesivo, logotipo, etiqueta, pintar textura, pincel, material, materiais, materialx, mtlx, openpbr, superficie estándar, biblioteca de materiais, librarycraft, conxunto de texturas, pbr, importar texturas, zip, cc0, arrastrar, nodo, nodos, editor de nodos, shader, textura, procedural, ruído, cadro, voronoi, celas, ondas, ladrillos, azulexos, madeira, mármore, gradiente, sucidade, desgaste de bordos, rampa de cor, mesturar, relevo, mapa normal, rugosidade, metalicidade, opacidade, recorte, emisión, brillo, desprazamento, mapeado por caixa, triplanar, uv, imaxe, nodo de imaxe
from: d7368b21
---

Un material feito no espazo de traballo **Sombreado** pertence ao ficheiro. É un pequeno grafo: **nodos** que fan texturas, imaxes e números, ligados á **Saída de material**, cuxas entradas son o aspecto da superficie — cor base, rugosidade, metalicidade, normal, opacidade, emisión e o resto do modelo OpenPBR. Pinta caras con el como con calquera material da biblioteca, e cada cambio se ve na vista ao momento.

## Abrilo

Escolla {{ui:Sombreado}} na lista de espazos de traballo. A vista 3D mantén a parte superior da pantalla e o **editor de nodos** ocupa a inferior. O panel da dereita lista os materiais propios do ficheiro.

- {{ui:Novo material}} crea un gris que só ten a súa Saída de material.
- **Facer unha copia editable dun material da biblioteca** convirte ladrillo, madeira, azulexo e o resto nun grafo que pode cambiar: a súa textura chega por un nodo de Textura da biblioteca, e os seus relevos por un nodo de Relevo.
- {{ui:Pintar con el}} pinta as caras ou grupos seleccionados, ou escolle o material para a ferramenta Pintar. Os materiais da ferramenta Pintar listan tamén os propios do ficheiro baixo **Neste ficheiro**.
- {{ui:Duplicar}} e {{ui:Eliminar}} actúan sobre o material que está editando. Eliminar non se pode desfacer: as caras pintadas con el mostran a cor predeterminada ata que as pinte de novo.

## Materiais da biblioteca

A **Biblioteca de materiais (Biblioteca)** do panel lista os materiais da biblioteca, cada un cunha vista previa renderizada polo trazador de camiños de CadCraft. Son conxuntos de texturas publicados baixo CC0, atribuídos ás persoas que os fixeron.

- Faga clic nun para traelo ao ficheiro (as súas imaxes veñen con el) e, con caras ou grupos seleccionados, pintalos.
- Arrastre un sobre unha cara ou un grupo da vista para pintar só iso.
- Convértese nun dos materiais do ficheiro: cambie os seus nodos como calquera outro. A súa atribución aparece no panel e queda no ficheiro.

## Importar un conxunto de texturas

{{ui:Imaxes ou un zip…}} ou {{ui:Un cartafol…}} baixo **Importar un conxunto de texturas** fan un material a partir dun conxunto de mapas. Os mapas recoñécense polas palabras dos seus nomes de ficheiro: color, albedo, diffuse ou basecolor; roughness (ou gloss, convertido en rugosidade); metalness ou metallic; normal (OpenGL ou DirectX, a partir de `gl` / `dx` no nome); height ou displacement; ambient occlusion; opacity; emission. Os mapas empaquetados (ARM, ORM) quedan fóra. O azulexo comeza en 1 × 1 m: estableza o seu tamaño real na Saída de material. A altura vai a desprazamento con a súa escala en 0 — suba a escala para usala en mallas.

## MaterialX

MaterialX é o formato aberto que outros programas de 3D e renderizado usan para pasar materiais.

- {{ui:Exportar como MaterialX…}} garda o material que está editando: os seus valores, e cada textura como imaxe PNG ao lado do ficheiro `.mtlx` (nun zip). Escolla o sombreador no que se escribe: **OpenPBR Surface** (MaterialX 1.39, o mesmo modelo que usa ModelCraft) ou **Standard Surface** (MaterialX 1.38, que hoxe lle len máis programas). As texturas sitúanse por coordenadas UV en metros; a colocación por caixa e triplanar escríbese como UV.
- {{ui:Importar MaterialX…}} (ou {{ui:Desde un cartafol…}}) le ficheiros `.mtlx` con sombreadores OpenPBR, Standard Surface, UsdPreviewSurface ou glTF PBR. Déalle tamén as imaxes, ou un zip con todo: unha imaxe atópase polo seu camiño, o seu nome, ou o seu nome con outro tipo de imaxe (un `.exr` que os nomes do ficheiro indican pode vir como un `.jpg` ao lado). As texturas, os mapas normais, as operacións aritméticas, as mesturas e o desprazamento entran como nodos; o resto mantén o seu valor, e a barra de estado indica o que se deixou fóra.

## Calcomanías

Unha calcomanía é unha imaxe colocada sobre unha superficie — un logotipo, un letreiro, unha etiqueta, unha mancha — cun material propio.

- Estableza a **Largura dunha nova calcomanía**, logo {{ui:Colocar unha calcomanía…}} (ou {{ui:Calcomanía}} na barra de ferramentas), escolla unha imaxe PNG, JPEG ou WebP e faga clic nunha cara. A imaxe proxéctase sobre as superficies alí presentes, mantendo as súas proporcións; as partes transparentes dun PNG quedan transparentes.
- Pertence ao grupo ou compoñente onde fixo clic e móvese con el. Cubre as caras dentro da súa caixa que miran cara o mesmo lado, e detense nas arestas do que está enriba.
- Cada calcomanía ten o seu propio material, chamado **Calcomanía: <imaxe>**, na lista do ficheiro: edítea como calquera outra (rugosidade, un relevo, un brillo). {{ui:Material}} xunto á calcomanía ábreo.
- Xunto a cada calcomanía: a súa largura (a altura segue a imaxe), {{ui:Xirar}} (un cuarto de volta) e {{ui:Eliminar}}. As calcomanías gárdanse cos materiais do ficheiro, fóra de Desfacer.
- Aparecen na vista sombreada, nos renderizados rápidos e nas imaxes de alta calidade.

## Pintar sobre a textura

{{ui:Pintar textura}} (ou {{ui:Pintar}} baixo **Pintar sobre a textura**) converte o punteiro nun pincel redondo. Arrastre sobre unha cara que leva un dos materiais do ficheiro: o pincel pinta a imaxe que hai detrás da cor base.

- Nunha malla pinta seguindo as UV da malla (desdóbrea antes no espazo de traballo UV); nas outras caras pinta atravesando a cara, así que a pintura se repite co azulexo do material.
- Un material cuxa cor base é unha cor plana recibe unha imaxe nova de 512 × 512 píxeles desa cor a primeira vez que o pinta. Un material cuxa cor base vén doutros nodos necesita un nodo de Imaxe ligado a Cor base.
- Estableza a cor, o tamaño (en píxeles da imaxe), a intensidade e a dureza do pincel no panel. {{ui:Desfacer trazo}} ou Ctrl+Z (mentres pinta) retira un trazo, ata os últimos 20.
- A imaxe pintada gárdase no ficheiro. Os materiais da biblioteca non se poden pintar: faga antes unha copia editable.

## Hornear texturas

**Hornear texturas** escribe o que a forma e a escena dan a unha superficie en imaxes, seguindo as UV dunha malla.

- Seleccione unha malla que teña UV (desdóbrea no espazo de traballo UV), marque os mapas e prema {{ui:Hornear}}:
  - **Oclusión ambiental** — can abertos están os puntos: as esquinas, as pregas e os lugares baixo outras cousas escurécense. Todo o que se ve no modelo o sombrea, ata a distancia de oclusión.
  - **Curvatura** — brillante ao longo dos bordos exteriores, escuro nas esquinas interiores, gris medio nas partes planas ou suavemente curvas, sobre o ancho de bordo que estableza.
  - **Normais desde o obxecto de alto detalle** — seleccione tamén unha copia detallada: o seu detalle de superficie escríbese como mapa normal para o máis simple (o obxecto con menos triángulos é o que recibe o horneado). A distancia de busca é a separación máxima entre as dúas superficies.
  - **Iluminación** — o sol do lugar e da data do modelo (Estilo) con as súas sombras, e o ceo, como mapa de luz.
- As imaxes únense ao ficheiro e aparecen nos nodos de Imaxe. Se o material que está editando ten un nodo de **Sucidade e desgaste de bordos**, lee ao momento a nova oclusión e curvatura.
- Máis raios por texel dan oclusión e iluminación máis suaves, e tardan máis. O horneado corre nos núcleos do procesador do computador en segundo plano; {{ui:Deter o horneado}} o para.

## Construír un grafo

1. {{ui:Engadir un nodo…}} (ou {{key:Shift+A}} no editor de nodos) engade un nodo no centro do editor.
2. Arrastre desde un punto de saída (á dereita dun nodo) ata un punto de entrada (á esquerda doutro) para ligalos. Unha segunda ligazón a unha entrada substitúe a primeira; arrastre unha entrada ligada para desligala.
3. As entradas sen ligar mostran o seu valor: escriba un número ou escolla unha cor. Os axustes están na parte inferior de cada nodo.

Arrastre un nodo polo seu título para movelo, arrastre o espazo baleiro para desprazar, e use a roda para facer zoom. {{key:Delete}} elimina os nodos ou a ligazón seleccionados, {{key:Mod+Z}} desfai, {{key:Mod+D}} duplica, {{key:F}} mostra todos os nodos. Cada cambio é un paso de desfacer do editor de nodos. Desfacer do modelo non cambia os materiais.

| Nodos | Que fan |
|---|---|
| Coordenadas de textura | Onde está un punto no azulexo: repítao, desprácheo, xírao un cuarto. |
| Valor, Cor | Un número, unha cor. |
| Imaxe | Unha imaxe do ficheiro (unha que viña cun modelo importado, ou unha que engadiu con {{ui:Engadir unha imaxe…}}). Escolla **Cores** para unha foto e **Datos** para un mapa de rugosidade ou normal. |
| Textura da biblioteca | A textura, a rugosidade e a altura dun material da biblioteca. |
| Cadro, Ruído | Cadrados; ruído fractal suave con o seu detalle, rugosidade e semente. |
| Celas Voronoi, Ondas, Gradiente | Celas (distancia ao punto máis próximo, as arestas entre celas, unha cor por cela); bandas en horizontal, vertical ou diagonal, como seno, serra ou triángulo, dobradas por ruído; gradientes lineais, cuadráticos, radiais e esféricos. |
| Ladrillos, Azulexos | Filas de ladrillos con desprazamento alternado, ou unha cuadrícula de azulexos: cores, morteiro ou rexuntado, unha separación e un bisel en metros, unha altura para os relevos, un número aleatorio por peza. |
| Madeira, Mármore | Aneis ao longo da veta con fibras finas; vetas dobradas pola turbulencia. |
| Sucidade e desgaste de bordos | Desgasta os bordos convexos e ensucia os ocos a partir das imaxes de curvatura e oclusión dunha malla ([Hornear texturas](topic:shading#bake-textures) as fai; ou estableza os seus dous axustes de imaxe, na disposición UV da malla: coloque o material por coordenadas UV). Sen elas non cambia nada. |
| Mesturar cores, Rampa de cor, Matiz/saturación/valor, Brillo e contraste, Inverter, Gamma, Separar e combinar RGB | Traballo de cor. |
| Matemáticas, Rango de mapa | Aritmética con números (sumar, multiplicar, potencia, paso suave e outras). |
| Relevo, Mapa normal | Unha normal a partir dunha altura (Relevo) ou dunha imaxe de mapa normal (Mapa normal: escolla a dirección do canal verde). |

## A Saída de material

As súas opcións indican como se dispón a textura sobre as superficies:

- **Ancho do azulexo** e **Alto do azulexo**: cantos metros cobre un azulexo da textura. Todo o que fai un grafo repítese por azulexo sen xuntas.
- **Colocado por**: as **Coordenadas UV** seguen as caras (as caras empurradas/tiradas, ao longo de cada cara; as mallas, polas súas UV, unha unidade UV = un azulexo), a **Caixa** proxecta desde o máis próximo dos tres eixes, o **Triplanar** mestura as tres proxeccións en superficies inclinadas (**Nitidez da mestura**: máis alto, mestura máis dura).
- **Intensidade normal** escala a entrada normal. **Escala de desprazamento** fixa canto move a entrada de desprazamento os vértices dunha malla.
- {{ui:Máis entradas}} mostra o resto das entradas de OpenPBR: capa, pelusa, subsuperficie, película fina, transmisión e as súas cores.

## Nas imaxes de alta calidade

O trazador de camiños lee a cor base, a rugosidade, a metalicidade, a opacidade, a normal e a emisión do grafo tal como varían pola superficie. Calquera outra entrada que ligue (unha capa que varía, por exemplo) úsase no seu valor medio; o panel indica cal é. Un recorte feito cunha textura de opacidade mostra a súa forma, e a súa sombra é uniformemente transparente. Unha textura luminosa ilumina o que mira, sen mostrarse como unha lámpada.

O **Desprazamento** move os vértices só das mallas, así que engada un modificador de Subdivisión para o detalle ([Modificadores](topic:modifiers)). As caras empurradas/tiradas conservan a súa forma e reciben os relevos a partir da normal.

:::tip
Nun computador con WebGPU o grafo calcúlase na tarxeta gráfica; sen ela, no procesador. O resultado é o mesmo.
:::
