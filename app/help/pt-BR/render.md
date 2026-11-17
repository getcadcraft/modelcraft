---
title: Renderizar uma imagem do modelo
summary: Crie uma imagem com aparência de luz do dia: céu, sol na posição e na data do seu modelo, sombras suaves, aparência de vidro e metal, e depois salve como PNG.
keywords: renderizar, predefinição, predefinições, predefinição de cena, interior, exterior, vista de corte, noite, um clique, renderização, path tracing, ray tracing, iluminação global, reflexos, refração, alta qualidade, foto, fotorrealista, realista, imagem, png, estática, céu, sol, luz do dia, sombras, sombras suaves, oclusão ambiente, vidro, metal, brilhante, materiais, exposição, brilho, nublado, entardecer, estúdio, apresentação, névoa, bruma, fumaça, nuvem, volume, feixes de luz, raios de luz, cáusticas, amostragem adaptativa, ruído
from: 517ba4d3
---

{{ui:Render a picture…}} faz uma imagem da vista com aparência de luz do dia, e não de desenho: um céu, o sol na posição que a localização e a data do modelo determinam, sombras suaves, luz vinda do céu inteiro que escurece cantos e frestas, e cores que podem parecer vidro, metal ou tinta brilhante. O modelo não é alterado.

## Renderizar a vista

1. Ajuste a vista como quiser para a imagem: oriente, dê zoom, escolha uma [cena](topic:scenes), oculte o que não deve aparecer. A imagem usa a câmera da própria vista.
2. Clique em {{ui:Export}} no grupo {{ui:File}}, depois em {{ui:Render a picture…}}.
3. Escolha uma {{ui:Scene}} se a que está pressionada não for a que você quer (veja [Predefinições de cena](topic:render#scene-presets-a-good-picture-in-one-click)), escolha o {{ui:Size}} e clique em {{ui:Render}}.

   A imagem vai se formando durante a renderização e fica mais suave a cada passada. {{ui:Stop}} (ou {{key:Esc}}) encerra antes e mantém a imagem até ali.

4. Clique em {{ui:Save}} para baixá-la (um PNG, a menos que {{ui:Save as}} indique outra coisa).

:::tip
Comece com {{ui:Draft}} em {{ui:The view's size}} para conferir a câmera e a aparência; depois renderize com {{ui:Good}} ou {{ui:Best}} em um tamanho maior para a imagem final.
:::

## Predefinições de cena: uma boa imagem com um clique

O topo da caixa de diálogo tem quatro botões de {{ui:Scene}}. Cada um define o céu, o brilho, o chão, as linhas de borda, a qualidade e o sol com um único clique, então não há nada para aprender antes da primeira imagem. Clique em um deles e depois em {{ui:Render}}.

| Cena | O que define | Use para |
|---|---|---|
| {{ui:Exterior}} | Céu limpo, o sol próprio do modelo, chão ativado | O edifício visto de fora |
| {{ui:Interior}} | Céu nublado (luz uniforme, sem manchas fortes de sol), meio ponto mais claro | Uma vista de dentro de um ambiente |
| {{ui:Section view}} | Estúdio branco, sem chão, linhas de borda na renderização rápida | Um modelo cortado por um corte |
| {{ui:Night}} | O sol abaixo do horizonte (meia-noite no inverno, para o hemisfério do local), um ponto mais claro | Lâmpadas iluminando o modelo. Sem lâmpadas, a imagem fica escura |

- {{ui:Pick for this view}} escolhe por você: {{ui:Section view}} quando um corte estiver ativo, {{ui:Interior}} quando a câmera estiver dentro do modelo, e {{ui:Exterior}} nos demais casos. Na primeira vez que você abrir a caixa de diálogo, ela começa assim automaticamente.
- Todas as configurações ficam abaixo e podem ser alteradas. Quando você altera uma, a cena deixa de estar pressionada, e a linha sob os botões informa que as configurações são suas. Clique na cena de novo para restaurar os valores dela.
- Uma cena não altera o motor, o modo, o tamanho, os materiais, a câmera nem as lâmpadas.

:::note
As cenas dão os mesmos valores no ModelCraft e no BimCraft. O resultado final depende do seu modelo e da sua placa gráfica.
:::

## Configurações

| Configuração | O que faz |
|---|---|
| {{ui:Size}} | O tamanho da vista, o dobro do tamanho da vista, Full HD, 4K ou quadrado. Tamanhos fixos mantêm a câmera da vista e mostram um pouco mais ou menos nas laterais |
| {{ui:Mode}} | {{ui:Fast}}, ou {{ui:High quality (path traced)}} (abaixo) com seu {{ui:Time limit}} |
| {{ui:Quality}} | Quantas passadas (ou, na alta qualidade, amostras) são calculadas em média: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Mais passadas deixam as sombras e as bordas mais suaves, e levam mais tempo |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}} (luz suave, sombras fracas), {{ui:Dusk}} (luz baixa e quente) ou {{ui:White studio}} (um fundo branco liso) |
| {{ui:Sun}} | O sol vem da data, da hora e do local em {{ui:Style}} › Sol. Marque {{ui:Use another date and time for this picture}} para testar outro horário sem alterar o estilo do modelo |
| {{ui:Brightness}} | Mais claro ou mais escuro, em passos (stops) |
| {{ui:Ground under the model}} | Um chão que recebe as sombras e se funde com o horizonte. Desligue para um modelo que flutua |
| {{ui:Draw edges}} | Desenha as bordas do modelo, finas, sobre a imagem, para um aspecto de desenho |

Quando o sol está abaixo do horizonte no horário escolhido, é noite: o céu escurece e as [lâmpadas](topic:lights) do modelo o iluminam. A caixa de diálogo informa isso.

As configurações são salvas no arquivo `.modelcraft`, então a próxima imagem do mesmo modelo começa de onde você parou.

## Fazer as cores parecerem vidro ou metal

Em {{ui:Materials}}, cada cor na tela tem uma aparência: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ou {{ui:Frosted glass}}. {{ui:Unpainted faces}} são as faces sem cor própria.

Para fazer janelas de vidro, [pinte](topic:paint) os painéis das janelas com uma cor e depois defina essa cor como {{ui:Glass}}. O vidro deixa ver o céu e o que está atrás, tingido pela sua cor, e reflete o céu.

:::note
No modo {{ui:Fast}}, vidro e metal refletem o céu, e não o restante do modelo, e a luz não atravessa o vidro. O modo {{ui:High quality (path traced)}}, abaixo, faz as duas coisas.
:::

## Alta qualidade

Escolha {{ui:Mode}} › {{ui:High quality (path traced)}} para uma imagem que segue a luz do jeito que uma câmera a vê:

- a luz ricocheteia entre as superfícies, então um ambiente iluminado por uma janela ou por uma lâmpada fica iluminado por todos os lados, e as cores se espalham para os vizinhos;
- o vidro é vidro de verdade: a luz o atravessa e ele reflete o modelo;
- metal e superfícies polidas refletem o restante do modelo;
- painéis de luz iluminam como painéis, com sombras suaves.

É bem mais lento que {{ui:Fast}}: cada passada recalcula a luz de cada pixel. A imagem começa granulada e se limpa conforme as amostras se acumulam, então comece pequeno ({{ui:The view's size}}, {{ui:Draft}}) e escolha um {{ui:Time limit}}: quando ele acabar, a imagem até ali é mantida. {{ui:Stop}} também a mantém. A primeira passada espera enquanto o navegador prepara o path tracer.

Quando o navegador tem WebGPU, o path tracer é do próprio CadCraft e roda na placa gráfica; a linha abaixo da imagem diz {{ui:Path traced on the graphics card (WebGPU)}}. Depois de {{ui:Stop}} ou do limite de tempo, {{ui:Resume}} continua a mesma imagem até que ela tenha todas as amostras; mudar uma configuração ou pressionar {{ui:Render}} de novo começa do zero. Sem WebGPU, a imagem é calculada com WebGL (a linha informa isso) e {{ui:Resume}} não é oferecido.

:::linux
O Firefox e a maioria das configurações do Chrome no Linux ainda não têm WebGPU, então a alta qualidade usa WebGL nesses casos.
:::

Neste modo, as bordas não são desenhadas, as texturas da biblioteca mostram sua cor e rugosidade, mas não suas saliências (um [material feito com nós](topic:shading#in-high-quality-pictures) mostra sua normal e suas saliências), e um corte é feito no modelo antes de a imagem começar.

{{ui:Denoise (clears the grain left after the samples)}} vem ativado por padrão: quando a imagem termina, ou é interrompida, o granulado que sobra é removido por uma rede neural feita para isso (a rede publicada pela Intel, Open Image Denoise, executada no seu computador: na placa gráfica, senão no processador). Uma imagem com poucas amostras sai limpa; {{ui:Show}} › {{ui:The picture before denoising}} mostra como ela ficou antes dessa redução.

## Renderizar na vista

A área de trabalho {{ui:Render}} roda o path tracer na própria vista: orbite, edite o modelo ou altere uma luz, e ela recomeça imediatamente. {{ui:Region}}: arraste um retângulo e somente ele é renderizado; {{ui:Whole view}} volta ao normal. {{ui:Focus}}: clique no que deve ficar nítido, e a profundidade de campo focalizará ali. {{ui:Detail}} define quantos pixels da vista são renderizados (menos é mais rápido). {{ui:Pause}} para e continua. Precisa de WebGPU: sem ele, a área de trabalho avisa isso, e {{ui:Export}} › {{ui:Render a picture…}} continua funcionando.

## Céus e perfis de luz na placa gráfica

Com WebGPU, a alta qualidade tem mais dois céus:

- {{ui:Physical sky}} calcula a luz do dia pela altura do sol: um azul profundo no alto, uma faixa pálida no horizonte e um sol que fica mais quente e mais fraco quando está baixo. {{ui:Haze}} vai de um dia muito limpo (2) a um dia enevoado (10).
- {{ui:Sky picture (HDRI)}} ilumina o modelo com uma imagem panorâmica de um lugar real. {{ui:Choose a picture…}} recebe um arquivo `.hdr` ou `.exr` equirretangular; {{ui:Turn}} gira a imagem em torno do modelo, e {{ui:Picture brightness}} a torna mais clara ou mais escura. A imagem traz o próprio sol, então o sol do modelo não é somado. Ela só fica guardada enquanto a página está aberta: ao reabrir, escolha-a de novo.

Cada lâmpada na lista {{ui:Lamps}} pode receber o perfil de luz de um fabricante: {{ui:IES profile…}} lê um arquivo IES (LM-63), e a lâmpada passa a projetar a luz como a luminária faz (um downlight estreito, um iluminador de parede). Toda lâmpada com esse nome usa o perfil, e cada uma mantém o próprio brilho. Clique no nome do perfil para deixar de usá-lo.

Janelas de vidro transparente ajudam a luz do céu a entrar em um ambiente, então imagens internas sob um céu ficam prontas mais cedo.

Os modos {{ui:Fast}} e o path tracer WebGL mostram {{ui:Physical sky}} e {{ui:Sky picture (HDRI)}} como céu limpo, e ignoram os perfis de luz.

## A câmera

{{ui:Camera}} monta a imagem como uma fotografia:

- {{ui:Exposure}}: mantenha o {{ui:Brightness slider}}, ou escolha {{ui:Camera settings}} e defina a {{ui:Aperture (f-stop)}}, a {{ui:Shutter speed}} e o {{ui:ISO}} como em uma câmera; o EV ao lado deles é o valor de exposição usual. f/16, 1/100 s e ISO 100 correspondem a um dia de sol; uma cena mais escura pede uma abertura maior, um obturador mais lento ou um ISO mais alto. Isso funciona em todos os modos.
- {{ui:Depth of field}} desfoca o que está mais perto ou mais longe que a {{ui:Focus distance (m)}}, como faria uma lente desse f-stop (deixe vazio para focar no que está no meio da vista); {{ui:Aperture shape}} dá aos realces fora de foco um formato redondo ou de lâminas.
- {{ui:Two-point perspective (vertical lines stay vertical)}} nivela a câmera e desloca a imagem, como faz uma lente arquitetônica tilt-shift, para que as paredes não se inclinem quando você olha para cima ou para baixo em um edifício.
- {{ui:White balance}} define qual luz aparece como branca: mais baixo (por exemplo, 3000 K) para a luz quente de lâmpadas, mais alto para sombra e dias nublados.
- {{ui:Projection}}: {{ui:360° panorama}} gera uma imagem 2:1 de tudo ao redor da câmera, para visualizadores de panorama; {{ui:360° stereo panorama}} empilha um panorama para o olho esquerdo e outro para o direito, para óculos de realidade virtual; {{ui:Cube map (6 faces)}} gera seis vistas quadradas em uma grade 3 × 2. A largura vem de {{ui:Size}}.

Projeção, profundidade de campo, perspectiva de dois pontos e balanço de branco precisam do path tracer na placa gráfica (WebGPU), então aparecem somente em {{ui:Alta qualidade}}.

## Finalizar a imagem

{{ui:Picture}} aplica uma correção à imagem de alta qualidade, como numa fotografia, e cada controle altera a imagem final de imediato, sem renderizar de novo:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (a imagem como antes), {{ui:AgX}} (mais suave, mantém a cor em luz muito forte), {{ui:Filmic}} (uma curva suave de filme) ou {{ui:Standard}} (simples; a luz forte estoura para o branco).
- {{ui:Contrast}} e {{ui:Highlight compression}} (recupera detalhes nas partes muito claras).
- {{ui:Bloom}} (um brilho suave em volta de luzes fortes), {{ui:Glare}} com seus {{ui:Glare streaks}} (raios em estrela a partir dos pontos mais brilhantes) e {{ui:Vignette}} (cantos mais escuros).
- {{ui:Colour table (.cube)…}} aplica uma correção de cor a partir de um arquivo `.cube`, com a sua {{ui:Colour table strength}}; como uma imagem de céu, ela só fica guardada enquanto a página está aberta.

## Salvar a imagem

{{ui:Save as}} ao lado de {{ui:Save}} escolhe o arquivo: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para compartilhar (JPEG e WebP somente onde o navegador consegue gravá-los). Depois de uma renderização de alta qualidade na placa gráfica, também:

- {{ui:PNG, 16 bits}}: a imagem com correção, com passos mais finos entre os tons, para impressão ou edição posterior.
- {{ui:EXR, every layer (32-bit float)}}: a imagem como renderizada (luz linear, sem correção), com cada elemento de renderização e cada grupo de luz como uma camada própria, para programas de composição.
- {{ui:Render file (.ccrender, to grade again later)}}: tudo o que a caixa de diálogo precisa para misturar e corrigir a imagem de novo. {{ui:Open a render file…}} a traz de volta, com sua mistura e sua correção, sem renderizar.

## Misturar as luzes depois da renderização

Ative {{ui:Light mixing (change each light's colour and brightness after the render)}} antes de pressionar {{ui:Render}}. Quando a imagem termina (ou é interrompida), {{ui:Mix the picture}} lista as luzes em grupos: o céu, o sol e as lâmpadas pelo nome (cada lâmpada com o mesmo nome forma um grupo). Desligue um grupo, dê a ele uma cor ou torne-o mais claro ou mais escuro, e a imagem muda de imediato, sem renderizar de novo. {{ui:Save mix}} guarda a mistura com um nome para escolher depois; {{ui:As rendered}} volta à imagem como foi feita. {{ui:Save}} salva a imagem misturada.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} mantém também as partes da imagem. {{ui:Show}} alterna a vista para uma delas: as cores das superfícies (albedo), as normais, a profundidade, a luz difusa, especular e transmitida (cada uma direta e indireta), o que brilha e o céu, e uma cor por objeto ou por material, para fazer máscaras.

Os dois mantêm camadas extras na placa gráfica. Em tamanhos grandes, a placa pode não ter espaço; a caixa de diálogo avisa, e um tamanho menor resolve.

## A fila de renderização

Depois de uma configuração de alta qualidade, {{ui:Add this picture to the queue}} em {{ui:Render queue}} mantém a imagem como está configurada agora; a caixa de diálogo de vídeo, com {{ui:Add this animation to the queue}}, faz o mesmo com uma animação inteira, com path tracing quadro a quadro. {{ui:Start the queue}} renderiza uma após a outra neste computador, e {{ui:Save}} ao lado de cada uma concluída a baixa. Ao fechar a página, a fila é mantida: abra o mesmo modelo e ela continua de onde parou. A fila precisa de WebGPU.

## Névoa, fumaça, ruído e cáusticas

Estes ficam em {{ui:Fog, smoke and noise}} e funcionam em {{ui:High quality}} na placa gráfica; os outros motores os deixam de fora.

- {{ui:Fog and haze}} enche o ar até uma altura com uma névoa que o sol, o céu e as lâmpadas iluminam. {{ui:How far you can see, in meters}} define a espessura (cerca de 100 m é uma bruma leve, 20 m uma névoa densa), {{ui:Fog height above the ground, in meters}} é onde ela termina, e {{ui:Light shafts}} é o quanto a névoa brilha em direção à luz. A luz do sol deixa a névoa pelo topo, então, onde o sol entra por uma janela ou entre prédios, você a vê como feixes de luz.
- {{ui:Smoke or cloud}} adiciona um volume de fumaça ou nuvem iluminado como a névoa. {{ui:Kind}} escolhe entre {{ui:Cloud}}, {{ui:Smoke column}} ou {{ui:From a volume file (.ccvol)}}, o formato de grade próprio do CadCraft. {{ui:Detail}} e {{ui:Variation}} alteram uma nuvem ou coluna já criada; {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} e {{ui:Turn}} o posicionam (ele começa no meio do modelo); {{ui:Thickness}} o deixa mais denso, {{ui:Forward glow}} o deixa mais brilhante em direção à luz, e {{ui:Color}} o tinge. Um arquivo de volume só fica guardado enquanto a página está aberta, como uma imagem de céu.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} não dá mais amostras aos pixels que já se estabilizaram, então o resto da imagem termina antes. {{ui:Noise to accept}} é quanto granulado resta quando um pixel para. A linha abaixo da imagem diz quantas amostras um pixel recebeu, em média.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} traça a luz das lâmpadas e do sol, então a mancha clara sob uma bola de vidro, ou a luz de um espelho em uma parede, sai limpa e não granulada. Ela fica desligada enquanto névoa, fumaça, {{ui:Mix the lights after the render}} ou elementos de renderização estiverem ativos, e é feita para imagens, não para imagens de 360°, animações ou a área de trabalho {{ui:Render}}.

## Quanto tempo leva

A imagem é feita no seu computador, pela placa gráfica; nada é enviado. O tempo depende dessa placa. Ele cresce com as passadas e os pixels: {{ui:Best}} tem 16 vezes as passadas de {{ui:Draft}}, e uma imagem 4K tem cerca de quatro vezes os pixels de Full HD. Um computador sem placa gráfica ainda renderiza, mas mais devagar.

:::note
Se a caixa de diálogo disser que o navegador não consegue renderizar imagens, ele não tem WebGL 2. Atualize-o ou ative a aceleração por hardware nas configurações dele.
:::
