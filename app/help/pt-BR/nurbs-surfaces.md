---
title: Superfícies de forma livre (NURBS)
summary: Curvas e superfícies suaves para cascos de produtos, carrocerias e cascos de barcos — loft, varredura, redes de curvas, remendos de quatro arestas, mesclas, recortes — com continuidade G0, G1 e G2 medida nas superfícies exatas, sólidos com união, subtração e interseção, vistas zebra e de curvatura, faces ajustadas a um escaneamento com o erro medido, e arquivos STEP ou IGES.
keywords: nurbs, escaneamento, engenharia reversa, ajustar, malha para superfície, nuvem de pontos, stl, recorte, recortado, furo, corte, sólido, sólidos, booleana, união, subtrair, interseccionar, diferença, costurar, fechado, forma livre, superfície, superfícies, b-spline, bspline, curva, spline, loft, varredura, trilho, rede, coons, remendo, mesclar, igualar, continuidade, g0, g1, g2, tangente, curvatura, zebra, pontos de controle, nós, grau, step, iges, classe A
from: 09887405
---

O painel **Superfícies** cria curvas e superfícies suaves do tipo usado em cascos de produtos, carrocerias e cascos de barcos: NURBS, a mesma matemática que outros modeladores de superfície usam. Tudo é medido nas superfícies exatas, nunca nos triângulos que você vê. Os tamanhos no painel são em **milímetros**, qualquer que seja a unidade que o modelo mostra.

Abra-o pelo painel da direita: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Um modelo que já tenha superfícies o abre sozinho.

## Como funciona um comando

1. Pressione um comando (por exemplo **Loft**). O painel diz o que ainda precisa: pontos, curvas, uma aresta de superfície ou uma extremidade de curva.
2. Escolha-os: clique neles na vista 3D, ou pressione **Escolher** (ou os botões de aresta e extremidade) ao lado de cada um na lista. Para uma aresta, clique perto dessa aresta da superfície.
3. Confira as opções (grau, tolerância, continuidade, …) e pressione **Criar**.

Curvas a partir de pontos aceitam os pontos digitados um por linha (`x, y, z` em mm), ou **Escolher pontos na vista**: cada clique usa o mesmo encaixe das ferramentas de desenho. Pressione <kbd>Enter</kbd> ou clique duas vezes para terminar, e <kbd>Esc</kbd> para parar.

## Curvas

- **Curva por pontos** passa por todos os pontos. **Curva por pontos de controle** segue uma estrutura de pontos.
- **Inserir nó**, **Elevar grau** e **Reduzir grau** mudam como uma curva é descrita sem movê-la (reduzir é recusado quando a curva se moveria mais que a tolerância). **Reconstruir curva** dá a ela um novo número de pontos de controle e informa o quanto ela se moveu.
- **Igualar curva** faz a extremidade de uma curva encontrar a de outra com G0 (tocando), G1 (mesma direção) ou G2 (mesma curvatura também). **Mesclar curva** adiciona uma nova curva entre duas extremidades.
- **Unir curvas** e **Dividir curva**.

## Superfícies

- **Loft** por duas ou mais curvas, **Superfície reglada** entre duas, **Extrudar curva**, **Revolucionar curva**.
- **Varredura ao longo de um trilho** leva um perfil ao longo de um caminho sem torcê-lo; **Varredura ao longo de dois trilhos** mantém as extremidades do perfil nos dois trilhos. As varreduras são ajustadas: a linha de status diz quão perto ela ficou da varredura verdadeira.
- **Superfície a partir de uma rede de curvas** passa por uma grade de curvas (os primeiros cliques são os perfis, e o resto são as guias). **Remendo a partir de quatro arestas** preenche quatro curvas que se encontram nos cantos.
- **Igualar superfície** faz uma aresta de superfície encontrar uma vizinha com G0, G1 ou G2; **Mesclar superfície** adiciona uma superfície entre duas arestas.
- **Deslocar superfície**, **Estender superfície** (a superfície continua como estava indo), **Reconstruir superfície**, e nós e grau para superfícies.

## Verificando a qualidade

A tabela **Arestas compartilhadas** lista cada aresta que duas superfícies compartilham, com a folga (mm), o ângulo entre elas (°) e o salto de curvatura (1/mm), e se isso a torna G0, G1 ou G2. Uma aresta pior do que você pediu também aparece em **Problemas** (o botão ⚠ na barra do aplicativo) com uma correção **Igualar**.

**Mostrar como** › **Listras zebra** e **Curvatura (gaussiana)** vêm da superfície exata: listras que continuam sem quebra através de uma aresta significam G1; listras que também mantêm a largura significam G2. A curvatura é azul onde a superfície é uma sela, vermelha onde é uma cúpula e branca onde é plana. **Pontos de controle** desenha as redes de controle.

G0–G2 são medidos em 33 pontos por aresta. **G3 e a qualidade "classe A" não são medidos** e não são afirmados.

## Recortar uma superfície

O grupo **Recortes** corta uma superfície sem mudar a sua forma: a superfície mantém todos os seus pontos de controle, e só a parte dentro do contorno é mostrada, contada e gravada. **Recortar em um retângulo** e **Recortar com um círculo** trabalham sobre uma fração (0 a 1) da superfície em cada direção, então não precisam de escolha na vista. **Recortar por uma curva** recebe uma curva fechada que fica sobre a superfície (ela é projetada na superfície, e recusada com uma explicação em palavras quando está aberta ou a mais de uma tolerância de distância). Marque **Cortar um furo** para remover o interior do contorno; deixe desmarcado para manter só o interior. Uma superfície pode ter um contorno mantido e qualquer número de furos; um contorno que cruza outro é recusado. **Remover o recorte** mostra a superfície inteira de novo. As arestas cortadas seguem o contorno exatamente; o Desfazer do painel desfaz um recorte como qualquer outro passo.

STEP leva o recorte como os limites da face, e IGES como uma superfície recortada (entidade 144); ambos o leem de volta.

## Sólidos e booleanas

O grupo **Sólidos** transforma superfícies em corpos fechados e as combina. Um sólido aqui é um conjunto das superfícies do próprio painel que, juntas, fecham um volume; suas faces continuam sendo superfícies NURBS exatas, com seus recortes.

- **Caixa sólida**, **Cilindro sólido** e **Esfera sólida** criam um a partir de tamanhos digitados (em mm): uma caixa de seis faces planas, um cilindro de lateral redonda e duas extremidades planas recortadas no círculo, uma esfera de uma superfície de revolução.
- **Sólido a partir de superfícies** agrupa superfícies que você fez. Escolha-as, ou não escolha nenhuma para usar todas as superfícies exibidas que ainda não estão em um sólido. Elas são costuradas dentro da tolerância: se não fecharem, nada muda e o painel diz quantas arestas continuam abertas e quão perto elas precisam se encontrar.
- **União**, **Subtrair** (o segundo sólido é retirado do primeiro) e **Interseccionar** (só o que ambos compartilham) recebem dois sólidos: clique em uma face de cada na vista, ou pressione **Escolher** na lista **Sólidos**. Marque **Manter os dois sólidos** para deixá-los ao lado do resultado.

Uma booleana mantém cada face em sua própria superfície exata e a corta com novos contornos de recorte ao longo da interseção. A linha de resultado dá os números medidos: quanto os pontos do motor de sólidos precisaram se mover para ficar sobre as superfícies exatas (nunca mais que a tolerância), quão perto os pontos de interseção estão das duas superfícies (normalmente alguns milionésimos de milímetro), o volume, e se as novas faces fecham de novo quando costuradas a partir de suas superfícies exatas. Volumes são medidos em triângulos dentro da tolerância (0,05 mm, a menos que você defina outra), então o volume de uma esfera ou de um cilindro sai um pouco abaixo do exato: uma tolerância menor se aproxima. Uma booleana que não pode ser feita de forma limpa (os sólidos não têm nada em comum, um contorno se cruzaria) é recusada em palavras e não muda nada. Uma booleana é um passo do **Desfazer** do painel.

Na lista **Sólidos**, **Desagrupar** mantém as faces como superfícies simples; a lixeira remove o sólido e as suas faces.

**Adicionar ao modelo** (na lista **Sólidos**) coloca uma cópia do sólido no modelo como um grupo fechado, com as faces em triângulos dentro de 0,05 mm, em um passo do Desfazer do modelo. Depois ele funciona com a **União**, **Subtrair** e **Interseccionar** do próprio modelo, com empurrar-puxar e com a verificação para impressão 3D; o sólido exato continua no painel.

## Concordâncias e espessamento

**Concordância entre faces** arredonda a aresta onde duas faces de um mesmo sólido se encontram: escolha as duas faces (na vista, ou com **Escolher** na lista), digite o **raio** e, para um raio que muda ao longo da aresta, o **raio no fim** (0 mantém um único raio). Uma esfera desse raio é rolada ao longo da aresta tocando as duas faces; a concordância é o arco circular exato que ela deixa em cada ponto, unido em uma única superfície, e as duas faces são recortadas onde a esfera as toca. Uma aresta externa perde material, e um canto interno ganha. A linha de resultado informa o que foi medido: quão longe a superfície de concordância está da esfera rolante entre os pontos a partir dos quais foi construída (pontos são adicionados até ficar dentro de um quarto da tolerância), o maior ângulo entre a concordância e cada face ao longo das linhas de toque, e os mesmos números de uma União. Um raio que não cabe (a esfera sairia de uma face, ou uma face curva mais fechada que o raio) é recusado, citando a face, e nada muda.

**Concordar várias arestas** arredonda muitas arestas em um passo: escolha as duas faces da primeira aresta, depois as duas faces da próxima, e assim por diante (uma face pode estar em vários pares, por exemplo a face superior de uma caixa em quatro deles); todas as arestas recebem o raio que você digitar. Cada arredondamento é calculado no sólido como estava, depois são cortados um após o outro, então a ordem não importa. Onde duas arestas arredondadas se encontram em um canto cujas outras arestas continuam vivas, as duas concordâncias se encontram ao longo da curva de interseção (uma dobra). Onde três arestas externas arredondadas de três faces planas em esquadro se encontram com um raio, o canto é um **remendo de esfera** tangente às três concordâncias (desmarque **Cantos** para obter o canto com dobra); uma aresta deve ter pelo menos o dobro do raio de comprimento onde as duas extremidades são esses cantos. A linha de resultado diz quantas arestas foram arredondadas e como saíram os cantos. Arestas internas também podem ser arredondadas juntas, mas um resultado que não fecha de novo é apenas informado (a linha diz isso), então confira.

**Espessar em um sólido** dá a uma superfície uma espessura: escolha-a, digite a **espessura** e marque **Outro lado** para crescê-la para o outro lado. A face deslocada é ajustada à superfície e medida contra ela (a linha de resultado dá a maior diferença em relação à espessura); as paredes seguem cada aresta e cada contorno de recorte. Se a superfície curvar mais fechada que a espessura naquele lado, ou outra parte dela ficar mais perto que a espessura, é recusado, citando a superfície e o lugar, e nada muda.

## Desfazer, o arquivo, STEP e IGES

O painel tem seu próprio **Desfazer** e **Refazer** (um passo por comando). As superfícies são salvas no arquivo `.modelcraft` com o modelo; não fazem parte do desfazer próprio do modelo, como os materiais do arquivo.

**STEP…** (AP242) e **IGES…** salvam as curvas e superfícies exatamente como são (curvas e superfícies B-spline, nada transformado em triângulos). Cada superfície é sua própria face, com seu recorte; um sólido é gravado como uma casca fechada, com cada aresta compartilhada pelas suas duas faces, como outros programas CAD esperam (a linha de status diz quantos sólidos saíram desse modo). Em IGES o mesmo sólido é um único B-rep sólido de variedade (entidade 186 sobre a casca fechada 514, faces 510, laços 508, uma lista de arestas 504 e uma lista de vértices 502); um sólido cujas faces não se pareiam aresta por aresta é gravado como faces separadas, e a linha informa isso. **Importar…** lê um sólido desses de volta como sólido, de STEP e de IGES. Ele lê curvas e superfícies gravadas assim, e conjuntos de remendos `.ccnurbs`; sólidos STEP de outros programas abrem com Arquivo › Importar como malhas.

## Superfícies a partir de um escaneamento (engenharia reversa)

Selecione a malha escaneada no modelo (sem nada selecionado, significa tudo o que está exibido), abra **Superfícies** e, no grupo **Escaneamento**, escolha **Ajustar superfícies ao escaneamento**. A ferramenta procura **planos**, **cilindros**, **esferas** e **cones** (as superfícies exatas de que é feita uma peça usinada; cada linha mostra o raio ou meio-ângulo que encontrou), encontra **concordâncias** (arestas e cantos arredondados: um pequeno cilindro ou esfera que corre tangente a duas ou mais outras faces, mostrado com seu raio e as faces que une), **concordâncias de aro** (um toro: a aresta arredondada onde uma face plana encontra um cilindro ou cone, mostrada com seu raio e o raio do anel) e **concordâncias variáveis** (uma aresta arredondada cujo raio muda ao longo dela, mostrada com o raio em cada extremidade), ajusta **um remendo de forma livre** a uma peça lisa e suavemente curva, e corta cada face até o contorno da parte do escaneamento de onde ela veio, para que furos e cantos sejam mantidos. Opções: a **tolerância** (quão longe, em mm, um ponto do escaneamento pode estar de um plano ou cilindro e ainda pertencer a ele, e o alvo para um remendo de forma livre), a **menor peça** (uma fração da área da superfície) e as **mais faces**. O mesmo escaneamento e as mesmas opções sempre dão as mesmas faces.

O resultado é uma tabela, com uma linha por face: seu tipo, quantos triângulos deram origem a ela e o erro **medido do escaneamento até a face** (rms, o maior, e a parcela de pontos dentro da tolerância). Os pontos medidos são os vértices do escaneamento e o meio de cada triângulo. O erro não é medido no outro sentido (da face até o escaneamento), então uma face que ultrapasse o escaneamento não apareceria. A nota abaixo da tabela também diz quanto da área era pequena demais para ajustar. Na vista, os pontos do escaneamento são coloridos pelo seu **mapa de desvio**: azul na face, verde a meio caminho da tolerância, vermelho na tolerância ou acima (desmarque **Mostrar o mapa de desvio** para ocultá-lo). Pedaços que se dobram sobre si mesmos (um tubo fechado ajustado com remendos de forma livre, por exemplo) são listados como não ajustados, nunca forçados a uma única superfície.

**Costurar as superfícies em um sólido** costura em um único sólido fechado cada superfície exibida que não esteja em um sólido. As faces do escaneamento se encontram apenas dentro do próprio erro do escaneamento, então ele tenta a menor distância de união que fecha (nunca mais que a **distância de costura** que você definir) e recusa em palavras quando as faces não fecham. Ele nunca tapa uma falha. Uma caixa com arestas arredondadas costura quando suas concordâncias foram encontradas como faces próprias; a distância de união que fechou aparece no resultado. O sólido então funciona com União, Subtrair, Interseccionar e **Adicionar ao modelo**.

O que ele não faz: uma **concordância de aro** (um toro) só é procurada em torno do eixo de um cilindro ou cone já encontrado, e uma **concordância variável** só ao longo de uma aresta bastante reta (suas seções são cortadas em esquadro a uma direção); em outros lugares, elas saem como remendos de forma livre quando suficientemente lisas e ficam de fora caso contrário; esferas, cones e concordâncias são encontrados por amostragem aleatória, então um muito pequeno (poucos triângulos) pode passar despercebido; o mapa de desvio mostra a distância do escaneamento até as faces, não o contrário; escaneamentos muito grandes (acima de 300.000 triângulos) são recusados aqui. Faces de um cilindro de volta completa são cortadas em torno de furos, com a costura colocada onde não há furo. Confira cada face contra o seu escaneamento antes de confiar nela.

## Ainda não implementado

Arredondar arestas que se encontram em um canto de faces curvas ou com raios diferentes (uma mistura de vértice), uma concordância entre faces que não se encontram, uma concordância interna que termina em uma face inclinada ou curva, e booleanas e concordâncias calculadas nas superfícies sem triângulos (aqui o motor de sólidos trabalha em triângulos dentro da tolerância, e cada ponto é depois recolocado nas superfícies exatas).
