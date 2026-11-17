---
title: Superfícies de forma livre (NURBS)
summary: Curvas e superfícies suaves para cascos de produtos, carroçarias e cascos de barcos — loft, varrimento, redes de curvas, remendos de quatro arestas, transições, recortes — com continuidade G0, G1 e G2 medida nas superfícies exatas, sólidos com união, subtrair e interseção, vistas zebra e de curvatura, faces ajustadas a uma digitalização com o erro medido, e ficheiros STEP ou IGES.
keywords: nurbs, digitalização, engenharia inversa, ajustar, malha para superfície, nuvem de pontos, stl, recortar, recortada, furo, cortar, sólido, sólidos, booleana, união, subtrair, interseção, diferença, coser, fechado, forma livre, freeform, superfície, superfícies, b-spline, bspline, curva, spline, loft, varrimento, trilho, rede, coons, remendo, transição, correspondência, continuidade, g0, g1, g2, tangente, curvatura, zebra, pontos de controlo, nós, grau, step, iges, classe A
from: 09887405
---

O painel **Superfícies** cria curvas e superfícies suaves do tipo usado em cascos de produtos, carroçarias e cascos de barcos: NURBS, a mesma matemática que outros modeladores de superfícies usam. Tudo é medido nas superfícies exatas, nunca nos triângulos que vê. As dimensões no painel estão em **milímetros**, seja qual for a unidade que o modelo mostra.

Abra-o a partir do painel da direita: {{ui:Surfaces}} › {{ui:Open the Surfaces panel}}. Um modelo que já tenha superfícies abre-o automaticamente.

## Como funciona um comando

1. Prima um comando (por exemplo, **Loft**). O painel indica o que ainda precisa: pontos, curvas, uma aresta de superfície ou uma extremidade de curva.
2. Escolha-os: clique neles na vista 3D, ou prima **Escolher** (ou os botões de aresta e extremidade) ao lado de cada um na lista. Para uma aresta, clique perto dessa aresta da superfície.
3. Verifique as opções (grau, tolerância, continuidade, …) e prima **Criar**.

As curvas a partir de pontos recebem os pontos escritos um por linha (`x, y, z` em mm), ou **Escolher pontos na vista**: cada clique usa o mesmo snap das ferramentas de desenho; prima <kbd>Enter</kbd> ou faça duplo clique para terminar, e <kbd>Esc</kbd> para parar.

## Curvas

- **Curva por pontos** passa por cada ponto. **Curva por pontos de controlo** segue antes uma gaiola de pontos.
- **Inserir nó**, **Elevar grau** e **Baixar grau** mudam a forma como a curva é descrita sem a mover (baixar o grau é recusado quando a curva se moveria mais do que a tolerância). **Reconstruir curva** atribui-lhe um novo número de pontos de controlo e indica quanto se moveu.
- **Corresponder curva** faz a extremidade de uma curva encontrar a de outra com G0 (a tocar), G1 (mesma direção) ou G2 (mesma curvatura também). **Transição de curva** acrescenta uma nova curva entre duas extremidades.
- **Unir curvas** e **Dividir curva**.

## Superfícies

- **Loft** através de duas ou mais curvas, **Superfície reglada** entre duas, **Extrudir curva**, **Revolução de curva**.
- **Varrimento ao longo de um trilho** leva um perfil ao longo de um caminho sem o torcer; **Varrimento ao longo de dois trilhos** mantém as extremidades do perfil nos dois trilhos. Os varrimentos são ajustados: a linha de estado indica quão perto ficou do varrimento real.
- **Superfície a partir de uma rede de curvas** passa por uma grelha de curvas (as primeiras escolhas são os perfis, as restantes as guias). **Remendo a partir de quatro arestas** preenche quatro curvas que se encontram nos seus cantos.
- **Corresponder superfície** faz uma aresta da superfície encontrar a vizinha com G0, G1 ou G2; **Transição de superfície** acrescenta uma superfície entre duas arestas.
- **Offset de superfície**, **Estender superfície** (a superfície prolonga-se como ia), **Reconstruir superfície**, e nós e grau para superfícies.

## Verificar a qualidade

A tabela **Arestas partilhadas** lista cada aresta que duas superfícies partilham, com a folga (mm), o ângulo entre elas (°) e o salto de curvatura (1/mm), e se isso a torna G0, G1 ou G2. Uma aresta pior do que pediu também aparece em **Problemas** (o botão ⚠ na barra da aplicação) com uma correção **Corresponder**.

**Mostrar como** › **Riscas zebra** e **Curvatura (gaussiana)** vêm da superfície exata: riscas que continuam sem interrupção através de uma aresta significam G1; riscas que também mantêm a largura significam G2. A curvatura é azul onde a superfície é uma sela, vermelha onde é uma cúpula e branca onde é plana. **Pontos de controlo** desenha as redes de controlo.

G0–G2 são medidas em 33 pontos por aresta. **G3 e a qualidade «classe A» não são medidas** e não se afirmam.

## Recortar uma superfície

O grupo **Recorte** corta uma superfície sem mudar a sua forma: a superfície mantém todos os seus pontos de controlo, e só a parte dentro do contorno é mostrada, contada e escrita. **Recortar num retângulo** e **Recortar com um círculo** trabalham numa fração (0 a 1) da superfície em cada direção, por isso não precisam de escolher na vista; **Recortar por uma curva** recebe uma curva fechada que está sobre a superfície (é projetada na superfície, e recusada por escrito quando está aberta ou a mais da tolerância). Marque **Cortar um furo** para remover o interior do contorno; deixe desmarcado para manter só o interior. Uma superfície pode ter um contorno mantido e qualquer número de furos; um contorno que cruza outro é recusado. **Remover o recorte** volta a mostrar a superfície inteira. As arestas cortadas seguem o contorno exatamente; o Anular do painel desfaz um recorte como qualquer outro passo.

O STEP leva o recorte como limites da face e o IGES como superfície recortada (entidade 144); ambos o leem de volta.

## Sólidos e booleanas

O grupo **Sólidos** transforma superfícies em corpos fechados e combina-os. Aqui, um sólido é um conjunto das superfícies do próprio painel que, em conjunto, fecham um volume; as suas faces continuam a ser superfícies NURBS exatas com os respetivos recortes.

- **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** criam um a partir de dimensões escritas (em mm): uma caixa de seis faces planas, um cilindro com uma face lateral redonda e duas extremidades planas recortadas ao círculo, uma esfera de uma só superfície de revolução.
- **Sólido a partir de superfícies** agrupa superfícies que criou. Escolha-as, ou não escolha nenhuma para usar todas as superfícies visíveis que ainda não estão num sólido. São cosidas dentro da tolerância: se não fecharem, nada muda e o painel indica quantas arestas ficam abertas e quão perto têm de estar.
- **União**, **Subtrair** (o segundo sólido é retirado ao primeiro) e **Interseccionar** (apenas o que ambos partilham) recebem dois sólidos: clique numa face de cada um na vista, ou prima **Escolher** na lista **Sólidos**. Marque **Manter os dois sólidos** para os deixar ao lado do resultado.

Uma booleana mantém cada face na sua superfície exata e corta-a com novos contornos de recorte ao longo da interseção. A linha de resultado dá os números medidos: quanto tiveram de se mover os pontos do motor de sólidos para ficarem sobre as superfícies exatas (nunca mais do que a tolerância), quão perto estão os pontos de interseção de ambas as superfícies (normalmente alguns milionésimos de milímetro), o volume, e se as novas faces voltam a fechar quando são cosidas de novo a partir das suas superfícies exatas. Os volumes são medidos em triângulos dentro da tolerância (0.05 mm, salvo se definir outra), por isso o volume de uma esfera ou de um cilindro sai ligeiramente abaixo do exato: uma tolerância menor aproxima-se mais. Uma booleana que não possa ser feita de forma limpa (os sólidos não partilham nada, um contorno cruzaria a si próprio) é recusada por escrito e não altera nada. Uma booleana é um passo do **Anular** do painel.

Na lista **Sólidos**, **Desagrupar** mantém as faces como superfícies simples; o ícone do lixo remove o sólido e as suas faces.

**Adicionar ao modelo** (na lista **Sólidos**) coloca uma cópia do sólido no modelo como um só grupo fechado, com as faces como triângulos dentro de 0.05 mm, num passo do Anular do modelo. Depois funciona com a **União**, **Subtrair** e **Interseccionar** do próprio modelo, com empurrar/puxar e com a verificação de impressão 3D; o sólido exato fica no painel.

## Boleados e espessamento

**Boleado entre faces** arredonda a aresta onde se encontram duas faces de um sólido: escolha as duas faces (na vista, ou com **Escolher** na lista), escreva o **raio** e, para um raio que muda ao longo da aresta, o **raio no fim** (0 mantém um raio). Uma esfera desse raio é rolada ao longo da aresta, tocando nas duas faces; o boleado é o arco circular exato que deixa em cada ponto, unido numa só superfície, e as duas faces são recortadas onde a esfera as toca. Uma aresta exterior perde material, um canto interior ganha-o. A linha de resultado indica o que foi medido: a distância da superfície do boleado à esfera rolante entre os pontos a partir dos quais foi construída (acrescentam-se pontos até ficar dentro de um quarto da tolerância), o maior ângulo entre o boleado e cada face ao longo das linhas de contacto, e os mesmos números de uma União. Um raio que não encaixa (a esfera sairia de uma face, ou uma face curva-se mais apertada do que o raio) é recusado, indicando a face, e nada muda.

**Boleado de várias arestas** arredonda muitas arestas num só passo: escolha as duas faces da primeira aresta, depois as duas faces da seguinte, e assim por diante (uma face pode estar em vários pares, por exemplo a face de cima de uma caixa em quatro deles); todas as arestas recebem o raio que escrever. Cada arredondamento é calculado sobre o sólido tal como estava, e depois são cortados um a seguir ao outro, por isso a ordem não importa. Onde duas arestas arredondadas se encontram num canto cujas outras arestas se mantêm vivas, os dois boleados encontram-se ao longo da sua curva de interseção (uma prega). Onde três arestas exteriores arredondadas de três faces planas perpendiculares entre si se encontram com um só raio, o canto é um **remendo de esfera** tangente aos três boleados (desmarque **Cantos** para obter em vez disso o canto com prega); uma aresta tem de ter pelo menos o dobro do raio de comprimento quando ambas as extremidades são esses cantos. A linha de resultado indica quantas arestas foram arredondadas e como saíram os cantos. Arestas interiores também podem ser arredondadas em conjunto, mas um resultado que não volte a fechar é apenas assinalado (a linha assinala-o), por isso verifique-o.

**Espessar num sólido** dá a uma superfície uma espessura: escolha-a, escreva a **espessura**, e marque **Outro lado** para a crescer para o outro lado. A face deslocada é ajustada à superfície e medida contra ela (a linha de resultado indica a maior diferença em relação à espessura); as paredes seguem cada aresta e cada contorno de recorte. Se a superfície se curvar mais apertada do que a espessura nesse lado, ou se outra parte dela ficar mais perto do que a espessura, é recusado, indicando a superfície e o local, e nada muda.

## Anular, o ficheiro, STEP e IGES

O painel tem o seu próprio **Anular** e **Refazer** (um passo por comando). As superfícies ficam guardadas no ficheiro `.modelcraft` com o modelo; não fazem parte do Anular do próprio modelo, tal como os materiais do ficheiro.

**STEP…** (AP242) e **IGES…** guardam as curvas e superfícies exatamente como estão (curvas e superfícies B-spline, nada convertido em triângulos). Cada superfície é a sua própria face, com o respetivo recorte; um sólido é escrito como uma casca fechada, cada aresta partilhada pelas duas faces, como esperam os outros programas CAD (a linha de estado indica quantos sólidos saíram assim). No IGES, o mesmo sólido é um sólido B-rep manifold (entidade 186 sobre a casca fechada 514, faces 510, laços 508, uma lista de arestas 504 e uma lista de vértices 502); um sólido cujas faces não se emparelham aresta a aresta é escrito como faces separadas, e a linha assinala-o. **Importar…** lê de volta um sólido desses como sólido, a partir de STEP e de IGES. Lê curvas e superfícies escritas desta forma, e conjuntos de remendos `.ccnurbs`; os sólidos STEP de outros programas abrem com Ficheiro › Importar como malhas.

## Superfícies a partir de uma digitalização (engenharia inversa)

Selecione a malha digitalizada no modelo (sem nada selecionado, considera-se tudo o que está visível), abra **Superfícies** e, no grupo **Digitalização**, escolha **Ajustar superfícies à digitalização**. A ferramenta procura **planos**, **cilindros**, **esferas** e **cones** (as superfícies exatas de que é feita uma peça maquinada; cada linha mostra o raio ou meio-ângulo que encontrou), encontra **boleados** (arestas e cantos arredondados: um pequeno cilindro ou esfera que se liga tangencialmente a duas ou mais outras faces, mostrado com o seu raio e as faces que une), **boleados de aro** (um toro: a aresta arredondada onde uma face plana encontra um cilindro ou cone, mostrado com o seu raio e o raio do anel) e **boleados variáveis** (uma aresta arredondada cujo raio muda ao longo dela, mostrado com o raio em cada extremidade), ajusta **um remendo de forma livre** a uma peça suave e levemente curvada, e corta cada face ao contorno da parte da digitalização de onde veio, para que furos e cantos se mantenham. Opções: a **tolerância** (a que distância, em mm, um ponto da digitalização pode estar de um plano ou cilindro e ainda lhe pertencer, e o alvo para um remendo de forma livre), a **peça mais pequena** (uma fração da área da superfície) e o número máximo de faces. A mesma digitalização e as mesmas opções dão sempre as mesmas faces.

O resultado é uma tabela, uma linha por face: o seu tipo, quantos triângulos deu origem, e o erro **medido da digitalização para a face** (rms, o maior, e a proporção de pontos dentro da tolerância). Os pontos medidos são os vértices da digitalização e o centro de cada triângulo. O erro não é medido no sentido inverso (face para digitalização), por isso uma face que ultrapasse a digitalização não apareceria. A nota por baixo da tabela indica também quanta área era pequena demais para ajustar. Na vista, os pontos da digitalização são coloridos pelo seu **mapa de desvios**: azul na face, verde a meio caminho da tolerância, vermelho na tolerância ou acima (desmarque **Mostrar o mapa de desvios** para o ocultar). Peças que se dobram sobre si próprias (um tubo fechado ajustado com remendos de forma livre, por exemplo) são listadas como não ajustadas, nunca forçadas a uma só superfície.

**Coser as superfícies a um sólido** cose cada superfície visível que não esteja num sólido num só sólido fechado. As faces da digitalização só se encontram dentro do erro próprio da digitalização, por isso tenta a menor distância de junção que feche (nunca mais do que a **distância de costura** que definir) e recusa por escrito quando as faces não fecham. Nunca tapa uma falha. Uma caixa com arestas arredondadas cose-se quando os seus boleados foram encontrados como faces próprias; a distância de junção que fechou está no resultado. O sólido funciona depois com União, Subtrair, Interseccionar e **Adicionar ao modelo**.

O que não faz: um **boleado de aro** (um toro) só é procurado em volta do eixo de um cilindro ou cone já encontrado, e um **boleado variável** só ao longo de uma aresta bastante reta (as suas secções são cortadas perpendicularmente a uma direção); noutros casos saem como remendos de forma livre quando são suficientemente suaves, e ficam de fora caso contrário; esferas, cones e boleados são encontrados por amostragem aleatória, por isso um muito pequeno (poucos triângulos) pode passar despercebido; o mapa de desvios mostra a distância da digitalização às faces, e não o inverso; digitalizações muito grandes (mais de 300,000 triângulos) são recusadas aqui. As faces de um cilindro de volta completa são cortadas à volta de furos, com a costura colocada onde não há furo. Verifique cada face contra a sua digitalização antes de confiar nela.

## Ainda não implementado

Arredondar arestas que se encontram num canto de faces curvas ou com raios diferentes (uma transição de vértice), um boleado entre faces que não se tocam, um boleado interior que termina numa face inclinada ou curva, e booleanas e boleados calculados nas superfícies sem triângulos (aqui o motor de sólidos trabalha com triângulos dentro da tolerância, e depois todos os pontos são repostos nas superfícies exatas).
