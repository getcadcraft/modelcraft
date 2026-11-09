---
title: Novidades na 0.8 e na 0.8.1
summary: Uma escolha de motor de renderização com ficheiros para outros programas, superfícies de forma livre NURBS com continuidade medida, uma cena que descreve ao seu assistente, um material feito a partir de uma fotografia, uma fotografia de esboço sobre o terreno, divisões mobiladas, cortes inclinados para impressão 3D e a verificação de impressão no painel Problemas.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de suplemento, nurbs, superfícies, loft, varrimento, continuidade, g0, g1, g2, zebra, step, iges, dizer a cena, cena, meteorologia, hora do dia, estação, assistente, material a partir de uma fotografia, fotografia, fotografia de esboço, mobilar, mobilar um compartimento, inclinar, corte inclinado, dividir, verificação de impressão, problemas, grelha de propriedades, candeeiros, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, live
from: e4989b17
---

Eis o que mudou no ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa de diálogo {{ui:Renderizar uma imagem…}} já pode enviar a cena para outro programa, o painel {{ui:Superfícies}} cria superfícies de forma livre suaves, e um assistente ligado pode definir uma cena inteira a partir de uma só frase.

## Novo

### Renderização

- **Uma escolha de motor.** {{ui:Renderizar uma imagem…}} tem uma lista **Motor** acima de Modo. Os dois motores próprios, Fast e Path tracer, são os predefinidos e funcionam em todo o lado. As outras entradas guardam a cena como um pacote (o modelo como ficheiro USD, mais um ficheiro de definições com os valores exatos dos materiais, os candeeiros que estão ligados, o sol, o céu, a exposição e a câmara) para levar a outro programa. Uma imagem desenhada por outro programa indica qual o programa e a versão que a fizeram. Ver [Escolher o programa que desenha a imagem](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode guardar a cena como ficheiro USD, ficheiro glTF (`.glb`) ou pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio pode também iniciar o usdview ou o programa do computador para o ficheiro. Ver [Abrir a cena noutro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio escreve a cena num projeto do Unreal Engine e mantém-na em sintonia a cada envio, apenas num sentido. As suas próprias edições ficam numa camada que o CadCraft nunca escreve. Ver [Enviar a cena para um motor de jogo](topic:render-unreal).
- **Motores de suplementos.** Um suplemento pode acrescentar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua aprovação no Studio. Ver [Desenhar a imagem com outro programa](topic:render-other-program) e [Acrescentar um motor de renderização com um suplemento](topic:render-engine-addons).
- **Dizer a cena.** Diga ao seu assistente ligado "crepúsculo, chuva ligeira, árvores de outono, pessoas na praça" e o ModelCraft configura tudo num só passo: o sol move-se para a data e a hora, para que as sombras acompanhem, o céu muda, surgem superfícies molhadas, e as árvores e as pessoas são colocadas como objetos reais em etiquetas que pode ocultar, mover ou eliminar. A hora do dia, a data ou a estação, e a meteorologia (limpo, nublado, nevoeiro, chuva ligeira, chuva, tempestade) também funcionam sozinhos, e um pedido posterior altera a mesma cena. O nevoeiro aparece na imagem de alta qualidade na placa gráfica; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como riscas a cair.

### Materiais

- **Um material a partir de uma fotografia.** Dê ao ModelCraft uma fotografia de uma superfície (uma parede, um pavimento, pedra) e ele cria um material de padrão repetível: a iluminação da fotografia é uniformizada, as margens são ajustadas para se unirem, e um mapa de cor, um mapa de rugosidade e um mapa de normais são calculados a partir da imagem. É apenas processamento de imagem sobre a sua própria fotografia, sem modelo treinado. A rugosidade é uma estimativa. Uma fotografia simples, quadrada e de frente dá o melhor padrão; um padrão forte, como tijolos, pode mostrar um fantasma suave onde a junção fica esbatida.

### Superfícies

- **Superfícies de forma livre.** O painel {{ui:Superfícies}} cria curvas e superfícies NURBS sem recorte: curvas por pontos, loft, regradas, extrudidas, de revolução, varrimentos ao longo de uma ou duas guias, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, correspondência e fusão. Cada aresta partilhada é medida como G0, G1 ou G2 (folga, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que pediu aparece no painel Problemas com uma correção **Corresponder**. As riscas zebra e as cores de curvatura são desenhadas a partir das superfícies exatas. Os ficheiros STEP e IGES são exportados e importados. Ver [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

### Terreno e compartimentos

- **Uma fotografia de esboço sobre o terreno.** {{ui:Ficheiro}} › {{ui:Importar uma fotografia de esboço…}} transforma uma fotografia, feita com o telemóvel, de um esboço à mão em arestas sobre o terreno, à escala que indicar: um grupo, com uma etiqueta para cada cor de caneta. O papel é detetado e endireitado no seu computador, e nada é enviado para lado nenhum. Ver [Modelar sobre uma planta de implantação](topic:site-plan).
- **Mobilar um compartimento.** Selecione um pavimento e use {{ui:Organizar}} › {{ui:Mobilar um compartimento…}}. Mobiliário de quarto, sala de estar, sala de jantar, cozinha, casa de banho ou escritório é colocado por regras, junto às paredes e livre de portas e janelas, num grupo que pode remover de uma só vez. É uma disposição predefinida para rever, não um projeto. Ver [Biblioteca inicial](topic:starter).

### Impressão 3D

- **Cortes inclinados.** Dividir para impressão pode inclinar os cortes até 60 graus, o que dá às peças mais área de colagem. Os conectores ficam perpendiculares ao corte. Ver [Dividir um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os resultados da verificação de impressão 3D aparecem no painel Problemas com marcadores no modelo, e a partir daí {{ui:Reparar}} corrige-os. Ver [Suportes, espessura de parede, esvaziamento e reparação](topic:print-tools).

### Em todas as aplicações

- **Idiomas.** A ajuda e as aplicações chegam em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíli e usbeque. Os idiomas diferentes do inglês são traduções automáticas em rascunho até um falante nativo as ter revisto, e os tópicos de ajuda podem ainda estar em inglês.
- **Dispositivos de entrada.** Um touchpad, uma caneta, um rato 3D, um comando de jogo e controlos MIDI podem comandar as aplicações, para todas ou só para uma.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › Linhas da barra de ferramentas define Quebra automática (como antes), 2 linhas ou 1 linha. Uma barra que não cabe desloca-se lateralmente em vez de tirar espaço ao desenho. A quebra automática continua a ser a predefinição.
- **Grelha de propriedades.** Os campos dos candeeiros do ModelCraft usam a grelha partilhada: categorias recolhíveis, colunas de rótulo e de valor, e densidade Compacta. A aritmética escrita, como `2*450`, continua a funcionar.
- **Problemas.** O painel Problemas (o botão de aviso na barra da aplicação) é partilhado por todas as aplicações. No ModelCraft contém a verificação de impressão e os avisos de continuidade das superfícies.
- **Live.** Uma sessão Live TeamWork mostra quem está onde. Ver [Modelar em conjunto com o Live TeamWork](topic:work-live).
- **Suplementos.** Os suplementos podem acrescentar motores de renderização, como acima.
- **Ligar a sua IA.** O contrato de ferramentas e as verificações das oito aplicações passam, com 454 ferramentas no total. A ligação com um clique dentro do Studio, um conector alojado para assistentes de navegador, a sua própria chave dentro do Studio e um pacote publicado ainda não estão garantidos. As aplicações não incluem IA própria. Ver [Utilizar o ModelCraft com assistentes de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Secção de classes do DWG.** A secção de classes de um ficheiro DWG era lida com o tipo errado, o que podia estragar o ficheiro na importação. Agora é lida corretamente, no ModelCraft e nas outras aplicações que leem DWG.
- **Tablets em retrato.** A altura livre da grelha passa para a área de desenho, e a disposição da folha começa aos 760 píxeis de largura ou menos. A folha de estilos do ModelCraft também tem a alteração.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem mudar de idioma enquanto estão em execução; antes, só estavam em inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.

## Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito e escolha {{ui:Abrir}}. As versões para a loja estão em pausa, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- Outro programa a desenhar a imagem sem um suplemento de motor de renderização, câmaras panorâmicas ou estéreo, e uma imagem de céu através de outro programa, além do plug-in que abre o palco do Unreal, ainda não existem. Os ficheiros são escritos; o plug-in não foi lançado e não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e o recorte e os sólidos ficam para mais tarde.
- As imagens de outros programas não são pixel a pixel iguais às nossas: só a câmara, o sol, os candeeiros e a exposição coincidem.
- A correção de 0.8.1 para a mudança de idioma no Studio não está testada em todas as plataformas.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, consulte [Novidades na 0.7](topic:whats-new-0-7).
