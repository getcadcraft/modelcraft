---
title: Renderizar uma imagem do modelo
summary: Crie uma imagem com aspeto de luz do dia: céu, sol na localização e na data do modelo, sombras suaves, aspeto de vidro e de metal, e depois guarde-a como PNG.
keywords: renderizar, predefinição, predefinições, predefinição de cena, interior, exterior, vista de corte, noite, um clique, renderização, path tracing, traçado de caminhos, ray tracing, iluminação global, reflexos, refração, alta qualidade, foto, fotorrealista, realista, imagem, png, fotografia, céu, sol, luz do dia, sombras, sombras suaves, oclusão ambiente, vidro, metal, brilhante, materiais, exposição, luminosidade, encoberto, crepúsculo, estúdio, apresentação, nevoeiro, neblina, bruma, fumo, nuvem, volume, feixes de luz, raios de luz, cáusticas, amostragem adaptativa, ruído
from: 517ba4d3
---

{{ui:Renderizar uma imagem…}} faz uma imagem da vista com aspeto de luz do dia, e não de desenho: um céu, o sol na localização e na data do modelo, sombras suaves, luz vinda de todo o céu que escurece cantos e frestas, e cores que podem parecer vidro, metal ou tinta brilhante. O modelo não é alterado.

## Renderizar a vista

1. Prepare a vista como pretende que fique a imagem: rode, faça zoom, escolha uma [cena](topic:scenes), oculte o que não deve aparecer. A imagem usa a câmara da própria vista.
2. Clique em {{ui:Exportar}} no grupo {{ui:Ficheiro}} e depois em {{ui:Renderizar uma imagem…}}.
3. Escolha uma {{ui:Cena}} se a que estiver premida não for a pretendida (ver [Predefinições de cena](topic:render#scene-presets-a-good-picture-in-one-click)), escolha o {{ui:Tamanho}} e clique em {{ui:Renderizar}}.

   A imagem vai-se preenchendo à medida que é renderizada e fica mais suave a cada passagem. {{ui:Parar}} (ou {{key:Esc}}) termina mais cedo e mantém a imagem obtida até lá.

4. Clique em {{ui:Guardar}} para a transferir (um PNG, a não ser que {{ui:Guardar como}} indique outro formato).

:::tip
Comece com {{ui:Rascunho}} em {{ui:Tamanho da vista}} para verificar a câmara e o aspeto, e depois renderize em {{ui:Bom}} ou {{ui:Melhor}} num tamanho maior para a imagem final.
:::

## Predefinições de cena: uma boa imagem com um clique

No topo da caixa de diálogo há quatro botões de {{ui:Cena}}. Cada um define o céu, a luminosidade, o terreno, as linhas de contorno, a qualidade e o sol com um só clique, por isso não há nada a aprender antes da primeira imagem. Clique num e depois em {{ui:Renderizar}}.

| Cena | O que define | Para que serve |
|---|---|---|
| {{ui:Exterior}} | Céu limpo, o sol do próprio modelo, terreno ativado | O edifício visto do exterior |
| {{ui:Interior}} | Céu encoberto (luz uniforme, sem manchas de sol fortes), meio ponto mais luminoso | Uma vista do interior de uma divisão |
| {{ui:Vista de corte}} | Estúdio branco, sem terreno, linhas de contorno na renderização rápida | Um modelo cortado por um corte |
| {{ui:Noite}} | O sol posto (meia-noite no inverno, para o hemisfério do local), um ponto mais luminoso | Lâmpadas a iluminar o modelo. Sem lâmpadas, a imagem fica escura |

- {{ui:Escolher para esta vista}} escolhe por si: {{ui:Vista de corte}} quando um corte está ativo, {{ui:Interior}} quando a câmara está dentro do modelo, e {{ui:Exterior}} nos restantes casos. Na primeira vez que abrir a caixa de diálogo, começa assim automaticamente.
- Todas as definições ficam abaixo e podem ser alteradas. Quando altera uma, a cena deixa de estar premida, não há nenhum botão ativo e a linha sob os botões indica que as definições são suas. Clique de novo na cena para repor os seus valores.
- Uma cena não altera o motor, o modo, o tamanho, os materiais, a câmara nem as lâmpadas.

:::note
As cenas dão os mesmos valores no ModelCraft e no BimCraft. O aspeto final da imagem depende do modelo e da placa gráfica.
:::

## Definições

| Definição | O que faz |
|---|---|
| {{ui:Tamanho}} | O tamanho da vista, o dobro do tamanho da vista, Full HD, 4K ou quadrado. Os tamanhos fixos mantêm a câmara da vista e mostram mais ou menos nas laterais |
| {{ui:Modo}} | {{ui:Rápido}}, ou {{ui:Alta qualidade (path tracing)}} (abaixo), com o seu {{ui:Limite de tempo}} |
| {{ui:Qualidade}} | Quantas passagens (ou, em alta qualidade, amostras) são calculadas em média: {{ui:Rascunho}} 16, {{ui:Bom}} 64, {{ui:Melhor}} 256. Mais passagens dão sombras e arestas mais suaves, mas demoram mais |
| {{ui:Céu}} | {{ui:Céu limpo}}, {{ui:Encoberto}} (luz suave, sombras ténues), {{ui:Crepúsculo}} (luz baixa e quente) ou {{ui:Estúdio branco}} (fundo branco simples) |
| {{ui:Sol}} | O sol vem da data, da hora e do local definidos em {{ui:Estilo}} › sol. Marque {{ui:Usar outra data e hora para esta imagem}} para experimentar outra hora sem alterar o estilo do modelo |
| {{ui:Luminosidade}} | Mais claro ou mais escuro, em passos (stops) |
| {{ui:Terreno sob o modelo}} | Um terreno que recebe as sombras e se dilui no horizonte. Desligue-o para um modelo que flutua |
| {{ui:Desenhar arestas}} | Desenha as arestas do modelo, finas, sobre a imagem, para um aspeto de desenho |

Quando o sol está abaixo do horizonte na hora escolhida, é noite: o céu escurece e as [lâmpadas](topic:lights) do modelo iluminam-no. A caixa de diálogo indica-o.

As definições ficam guardadas no ficheiro `.modelcraft`, por isso a imagem seguinte do mesmo modelo começa onde ficou.

## Fazer com que as cores pareçam vidro ou metal

Em {{ui:Materiais}}, cada cor no ecrã tem um aspeto: {{ui:Mate}}, {{ui:Acetinado}}, {{ui:Brilhante}}, {{ui:Metal}}, {{ui:Metal polido}}, {{ui:Vidro}} ou {{ui:Vidro fosco}}. As {{ui:Faces sem pintura}} são as faces que não têm cor própria.

Para que as janelas sejam de vidro, [pinte](topic:paint) os painéis da janela com uma cor e defina essa cor como {{ui:Vidro}}. O vidro deixa ver o céu e o que está por trás, tingido pela sua cor, e reflete o céu.

:::note
No modo {{ui:Rápido}}, o vidro e o metal refletem o céu, não o resto do modelo, e a luz não se curva ao atravessar o vidro. O modo {{ui:Alta qualidade (path tracing)}} abaixo faz ambas as coisas.
:::

## Alta qualidade

Escolha {{ui:Modo}} › {{ui:Alta qualidade (path tracing)}} para uma imagem que segue a luz da forma como uma câmara a vê:

- a luz ressalta entre as superfícies, por isso uma divisão iluminada por uma janela ou por uma lâmpada fica iluminada em toda a volta, e as cores passam para as superfícies vizinhas;
- o vidro é vidro real: a luz curva-se ao atravessá-lo e ele reflete o modelo;
- o metal e as superfícies polidas refletem o resto do modelo;
- os painéis de luz iluminam como painéis, com sombras suaves.

É muito mais lento do que {{ui:Rápido}}: cada passagem calcula de novo a luz de cada pixel. A imagem começa granulada e clareia à medida que as amostras se somam, por isso comece pequeno ({{ui:Tamanho da vista}}, {{ui:Rascunho}}) e escolha um {{ui:Limite de tempo}}: quando acaba, a imagem obtida até lá é mantida. {{ui:Parar}} também a mantém. A primeira passagem espera enquanto o navegador prepara o path tracer.

Quando o navegador tem WebGPU, o path tracer é o próprio do CadCraft e corre na placa gráfica; a linha sob a imagem diz {{ui:Traçado de caminhos na placa gráfica (WebGPU)}}. Depois de {{ui:Parar}} ou do limite de tempo, {{ui:Retomar}} continua a mesma imagem até obter todas as amostras; alterar uma definição ou premir {{ui:Renderizar}} de novo começa do zero. Sem WebGPU, a imagem é calculada com WebGL (a linha indica-o) e {{ui:Retomar}} não é oferecido.

:::linux
No Firefox e na maioria das configurações do Chrome em Linux ainda não há WebGPU, por isso a alta qualidade usa WebGL nesses casos.
:::

Neste modo, as arestas não são desenhadas, as texturas da biblioteca mostram a sua cor e rugosidade mas não as suas irregularidades (um [material feito com nós](topic:shading#in-high-quality-pictures) mostra a sua normal e as irregularidades), e um corte é feito no modelo antes de a imagem começar.

{{ui:Remover ruído (limpa o grão que fica após as amostras)}} está ativo por defeito: quando a imagem fica pronta, ou é parada, o grão que resta é limpo por uma rede neuronal criada para o efeito (a rede publicada pela Intel Open Image Denoise, executada no seu computador: na placa gráfica, ou, se não houver, no processador). Uma imagem com poucas amostras sai limpa; {{ui:Mostrar}} › {{ui:A imagem antes da remoção de ruído}} mostra-a como foi renderizada.

## Renderizar na vista

O espaço de trabalho {{ui:Renderizar}} corre o path tracer na própria vista: rode, edite o modelo ou altere uma luz e a imagem recomeça de imediato. {{ui:Região}}: arraste um retângulo e só ele é renderizado; {{ui:Vista inteira}} volta ao normal. {{ui:Focagem}}: clique no que deve ficar nítido, e a profundidade de campo foca aí. {{ui:Detalhe}} define quantos pixels da vista são renderizados (menos é mais rápido). {{ui:Pausa}} para e continua. Precisa de WebGPU: sem ele, o espaço de trabalho indica-o, e {{ui:Exportar}} › {{ui:Renderizar uma imagem…}} continua a funcionar.

## Céus e perfis de luz na placa gráfica

Com WebGPU, a alta qualidade tem mais dois céus:

- {{ui:Céu físico}} calcula a luz do dia a partir da altura do sol: um azul profundo no zénite, uma faixa pálida no horizonte e um sol que fica mais quente e mais ténue à medida que desce. {{ui:Neblina}} vai de um dia muito limpo (2) a um dia enevoado (10).
- {{ui:Imagem de céu (HDRI)}} ilumina o modelo com uma imagem panorâmica de um local real. {{ui:Escolher uma imagem…}} aceita um ficheiro `.hdr` ou `.exr` equirretangular; {{ui:Rodar}} roda-o em torno do modelo e {{ui:Luminosidade da imagem}} torna-o mais claro ou mais escuro. A imagem tem o seu próprio sol, por isso o sol do modelo não é somado. Só fica disponível enquanto a página estiver aberta: ao reabrir, escolha-a de novo.

Cada lâmpada da lista {{ui:Lâmpadas}} pode receber um perfil de luz do fabricante: {{ui:Perfil IES…}} lê um ficheiro IES (LM-63) e a lâmpada passa a emitir luz da forma como essa luminária o faz (um foco estreito, um lavador de parede). Todas as lâmpadas com esse nome usam-no, e cada uma mantém a sua própria luminosidade. Clique no nome do perfil para deixar de o usar.

Janelas de vidro transparente ajudam a luz do céu a entrar numa divisão, por isso as imagens interiores com um céu ficam prontas mais depressa.

O modo {{ui:Rápido}} e o path tracer em WebGL mostram o {{ui:Céu físico}} e a {{ui:Imagem de céu (HDRI)}} como um céu limpo, e ignoram os perfis de luz.

## A câmara

{{ui:Câmara}} prepara a imagem como uma fotografia:

- {{ui:Exposição}}: mantenha o {{ui:Controlo de luminosidade}}, ou escolha {{ui:Definições da câmara}} e defina a {{ui:Abertura (f-stop)}}, a {{ui:Velocidade do obturador}} e o {{ui:ISO}} como numa câmara; o EV ao lado é o valor de exposição habitual. f/16 a 1/100 s e ISO 100 corresponde a um dia de sol; uma cena mais escura pede uma abertura maior, um obturador mais lento ou um ISO mais alto. Isto funciona em todos os modos.
- {{ui:Profundidade de campo}} desfoca o que está mais perto ou mais longe da {{ui:Distância de focagem (m)}}, como faria uma lente com esse f-stop (deixe-a vazia para focar o que está no meio da vista); a {{ui:Forma do diafragma}} dá aos realces fora de foco um formato redondo ou com lâminas.
- {{ui:Perspetiva de dois pontos (as linhas verticais ficam verticais)}} endireita a câmara e desloca a imagem, como faz uma objetiva de deslocamento arquitetónica, para que as paredes não se inclinem ao olhar para cima ou para baixo para um edifício.
- {{ui:Equilíbrio de brancos}} define que cor de luz aparece como branca: mais baixo (por exemplo 3000 K) para a luz quente das lâmpadas, mais alto para a sombra e os dias encobertos.
- {{ui:Projeção}}: {{ui:Panorama de 360°}} faz uma imagem 2:1 de tudo o que está em volta da câmara, para visualizadores de panoramas; {{ui:Panorama estereoscópico de 360°}} empilha um panorama para o olho esquerdo e outro para o olho direito, para auscultadores; {{ui:Mapa cúbico (6 faces)}} faz seis vistas quadradas numa grelha de 3 × 2. A largura vem de {{ui:Tamanho}}.

A projeção, a profundidade de campo, a perspetiva de dois pontos e o equilíbrio de brancos precisam do path tracer na placa gráfica (WebGPU), por isso só aparecem em {{ui:Alta qualidade}}.

## Acabar a imagem

{{ui:Imagem}} gradua a imagem de alta qualidade como uma fotografia, e cada controlo altera a imagem final de imediato, sem renderizar de novo:

- {{ui:Aspeto (transformação de vista)}}: {{ui:ACES filmic}} (a imagem como antes), {{ui:AgX}} (mais suave, mantém a cor em luz muito intensa), {{ui:Filmic}} (uma curva de filme suave) ou {{ui:Padrão}} (simples; a luz muito forte fica cortada a branco).
- {{ui:Contraste}} e {{ui:Compressão das altas luzes}} (recupera detalhe nas zonas muito claras).
- {{ui:Bloom}} (um brilho suave em torno de uma luz forte), {{ui:Encandeamento}} com os seus {{ui:Raios de encandeamento}} (raios em forma de estrela a partir dos pontos mais claros) e {{ui:Vinheta}} (cantos mais escuros).
- {{ui:Tabela de cores (.cube)…}} aplica uma gradação de cor a partir de um ficheiro `.cube`, com a sua {{ui:Intensidade da tabela de cores}}; como uma imagem de céu, só fica disponível enquanto a página estiver aberta.

## Guardar a imagem

{{ui:Guardar como}} ao lado de {{ui:Guardar}} escolhe o ficheiro: {{ui:PNG}}, {{ui:JPEG}} ou {{ui:WebP}} para partilhar (JPEG e WebP apenas onde o navegador os consegue escrever), e, depois de uma renderização de alta qualidade na placa gráfica, também:

- {{ui:PNG, 16 bits}}: a imagem graduada, com passos mais finos entre os tons, para impressão ou edição posterior.
- {{ui:EXR, todas as camadas (vírgula flutuante de 32 bits)}}: a imagem como foi renderizada (luz linear, sem gradação), com cada elemento de renderização e cada grupo de luzes como camada própria, para programas de composição.
- {{ui:Ficheiro de renderização (.ccrender, para voltar a ajustar mais tarde)}}: tudo o que a caixa de diálogo precisa para misturar e graduar a imagem de novo. {{ui:Abrir um ficheiro de renderização…}} traz tudo de volta, com a sua mistura e a sua gradação, sem renderizar.

## Misturar as luzes depois da renderização

Ative {{ui:Mistura de luzes (alterar a cor e a intensidade de cada luz depois da renderização)}} antes de premir {{ui:Renderizar}}. Quando a imagem fica pronta (ou é parada), {{ui:Misturar a imagem}} lista as suas luzes em grupos: o céu, o sol e as lâmpadas pelo nome (cada lâmpada com o mesmo nome forma um grupo). Desligue um grupo, dê-lhe uma cor ou torne-o mais claro ou mais escuro, e a imagem muda de imediato, sem renderizar de novo. {{ui:Guardar mistura}} guarda a mistura com um nome para escolher mais tarde; {{ui:Como renderizado}} volta à imagem tal como foi feita. {{ui:Guardar}} guarda a imagem misturada.

{{ui:Elementos de renderização (albedo, normais, profundidade, difusa, especular, transmissão, emissão, IDs)}} guarda também as partes da imagem. {{ui:Mostrar}} muda a vista para uma delas: as cores das superfícies (albedo), as normais, a profundidade, a luz difusa, especular e transmitida (cada uma direta e indireta), o que brilha e o céu, e uma cor por objeto ou por material para criar máscaras.

Ambos mantêm camadas extra na placa gráfica. Em tamanhos grandes, uma placa gráfica pode não ter espaço; a caixa de diálogo indica-o e um tamanho menor resolve.

## A fila de renderização

Depois de uma configuração de alta qualidade, {{ui:Adicionar esta imagem à fila}} em {{ui:Fila de renderização}} mantém a imagem tal como está definida agora; a caixa de diálogo de vídeo, com {{ui:Adicionar esta animação à fila}}, faz o mesmo para uma animação inteira, calculada fotograma a fotograma com path tracing. {{ui:Iniciar a fila}} renderiza-as uma a uma neste computador, e {{ui:Guardar}} ao lado de cada uma concluída transfere-a. Ao fechar a página, a fila mantém-se: abra o mesmo modelo e ela continua onde parou. A fila precisa de WebGPU.

## Nevoeiro, fumo, ruído e cáusticas

Estas opções estão em {{ui:Nevoeiro, fumo e ruído}} e funcionam em {{ui:Alta qualidade}} na placa gráfica; os outros motores não as incluem.

- {{ui:Nevoeiro e neblina}} enche o ar até uma altura com uma bruma que o sol, o céu e as lâmpadas iluminam. {{ui:Distância de visibilidade, em metros}} define a espessura (cerca de 100 m é uma neblina ligeira, 20 m é um nevoeiro denso), {{ui:Altura do nevoeiro acima do terreno, em metros}} é onde termina, e {{ui:Feixes de luz}} define quanto a bruma brilha em direção à luz. A luz do sol sai do nevoeiro pelo topo, por isso, onde o sol entra por uma janela ou entre edifícios, vê-o como feixes de luz.
- {{ui:Fumo ou nuvem}} acrescenta um volume de fumo ou de nuvem iluminado como o nevoeiro. {{ui:Tipo}} é uma {{ui:Nuvem}}, uma {{ui:Coluna de fumo}} ou {{ui:De um ficheiro de volume (.ccvol)}}, o formato de grelha próprio do CadCraft. {{ui:Detalhe}} e {{ui:Variação}} alteram uma nuvem ou coluna criada; {{ui:Tamanho do lado maior, em metros (0 = o tamanho do modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} e {{ui:Rodar}} posicionam-na (começa no centro do modelo); {{ui:Espessura}} torna-a mais densa, {{ui:Brilho para a frente}} torna-a mais clara em direção à luz, e {{ui:Cor}} a tinge. Um ficheiro de volume só fica disponível enquanto a página estiver aberta, como uma imagem de céu.
- {{ui:Parar mais cedo onde a imagem está limpa (amostragem adaptativa)}} não dá mais amostras aos pixels que já estabilizaram, por isso o resto da imagem acaba mais cedo. {{ui:Ruído a aceitar}} é a quantidade de grão que fica quando um pixel para. A linha sob a imagem indica quantas amostras, em média, teve cada pixel.
- {{ui:Cáusticas (luz desviada pelo vidro ou refletida por espelhos)}} traça a luz das lâmpadas e do sol, para que a mancha clara sob uma esfera de vidro ou a luz de um espelho numa parede saiam limpas e não granuladas. Fica desligada enquanto o nevoeiro, o fumo, {{ui:Misturar as luzes depois da renderização}} ou os elementos de renderização estiverem ativos; foi feita para imagens e não para imagens de 360°, animações ou o espaço de trabalho Renderizar.

## Quanto tempo demora

A imagem é feita no seu computador, pela sua placa gráfica; nada é enviado. O tempo depende dessa placa. O tempo cresce com as passagens e com os pixels: {{ui:Melhor}} tem 16 vezes as passagens de {{ui:Rascunho}}, e uma imagem 4K tem cerca de quatro vezes os pixels de Full HD. Um computador sem placa gráfica também renderiza, mas mais devagar.

:::note
Se a caixa de diálogo disser que o navegador não consegue renderizar imagens, o navegador não tem WebGL 2. Atualize-o, ou ative a aceleração por hardware nas suas definições.
:::
