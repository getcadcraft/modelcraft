---
title: Novidades na versão 0.9
summary: Área de impressão com o nosso próprio fatiador e envio por USB, Klipper, OctoPrint e PrusaLink, fatiamento para resina e suplementos de formatos de ficheiro, fluxo de materiais, gémeo digital e chão de fábrica, boleados, espessamento e ajuste de superfícies a digitalizações em NURBS, AR no local e dez métodos de arco.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, 0.9, área de impressão, impressão 3D, enviar para impressora, fatiador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressão em resina, goo, sl1, ctb, anycubic, teste de exposição, fluxo de materiais, gémeo digital, chão de fábrica, plc, transportador, nurbs, boleado, espessar, ajuste a digitalização, ar, no local, métodos de arco, unidades, 0.8, 0.8.1, versão, novas funcionalidades, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de suplementos, superfícies, loft, varrimento, continuidade, g0, g1, g2, zebra, step, iges, dizer a cena, cena, meteorologia, hora do dia, estação, assistente, material a partir de uma fotografia, fotografia, fotografia de esboço, mobilar, mobilar um compartimento, inclinado, corte inclinado, dividir, verificação de impressão, problemas, grelha de propriedades, candeeiros, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, em direto
from: 169048a2
---

Estas são as alterações do ModelCraft 0.9, em comparação com a 0.8.1. O ModelCraft passa a chegar à impressora e ao chão de fábrica: pode colocar peças na mesa de impressão e enviá-las sem exportar, fatiar para filamento ou resina, e dispor uma linha de movimentação de materiais. Isto é o CadCraft Studio 0.9 e as suas oito aplicações; a maioria das novas funcionalidades abaixo são suplementos.

## Novidades

### Impressão 3D

- **Área de impressão.** Clique em {{ui:Área de impressão}} na barra de ferramentas. Acrescente itens da Biblioteca à mesa da impressora, disponha-os, veja as camadas fatiadas e prima {{ui:Enviar para impressora 3D}}, sem exportar nenhum STL. Pertence ao suplemento de Impressão 3D, que vem ativado por predefinição e pode ser removido como qualquer suplemento. Ver [Colocar peças na mesa de impressão e enviá-las para uma impressora](topic:print-stage).
- **O nosso próprio fatiador de filamento.** {{ui:CadCraft basic (incluído, o mais rápido)}} é o fatiador da lista **Fatiador** do cartão: paredes, peles, preenchimento, suportes e uma saia, num processo em segundo plano para que a página continue utilizável. {{ui:Pré-visualizar camadas}} com o cursor **Camada** mostra as camadas antes de enviar. Os perfis de impressora, como os estilos Ender-3 e Prusa MK4, trazem o seu próprio G-code inicial.
- **Envio.** Por USB (Chrome ou Edge num computador, com a página aberta), ou para Klipper (Moonraker), OctoPrint ou PrusaLink na sua rede. Nada se liga nem envia sem um clique, e o envio pede confirmação primeiro.
- **Outros fatiadores.** O Kiri:Moto, o PrusaSlicer e o OrcaSlicer são suplementos próprios, desativados por predefinição; acrescente-os a partir do cartão ou de {{ui:Definições}} › {{ui:Suplementos}}. O PrusaSlicer e o OrcaSlicer usam a cópia instalada no computador, a partir do CadCraft Studio. O suplemento de impressoras Bambu Lab fatia com o seu OrcaSlicer e os respetivos perfis P2S, e precisa do Studio num computador.
- **Impressão em resina.** Os suplementos de resina (desativados por predefinição) fazem imagens de camadas para o ecrã da impressora, com esvaziamento e furos de ventilação, uma base (raft) e suportes, uma pré-visualização de camadas, e tempo, resina e custo. Os suplementos de formatos de ficheiro escrevem GOO da Elegoo, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Um teste de exposição de resina faz uma escada de cinco exposições. Ver [Fatiar para uma impressora de resina](topic:resin-printing).
- **Sem alterações.** {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}, as ferramentas de impressão e Dividir para impressão funcionam como na 0.8. Ver [Preparar um modelo para impressão 3D](topic:print-3d).

### Fluxo de materiais, Gémeo digital e Chão de fábrica

Estes três são suplementos, desativados até os ativar em {{ui:Definições}} › {{ui:Suplementos}}, e cada um tem a sua própria ajuda depois de ativado.

- **Fluxo de materiais.** Um painel chamado Fluxo de materiais dispõe transportadores, estações, buffers e trajetos de AGV na vista 3D, executa uma simulação com semente, reproduz-a, e mostra o débito, os prazos de entrega e as filas, com os resultados guardados em CSV. As encomendas podem vir de um ficheiro CSV. As células robotizadas podem ser verificadas e exportadas. A ligação PLC tem um modo suave e um modo real sobre Modbus TCP, que só funciona no CadCraft Studio.
- **Gémeo digital.** Lê a disposição do Fluxo de materiais e executa um PLC suave sobre ela, com avarias que pode forçar, testes de stock, uma comparação de disposições e uma lista de materiais.
- **Chão de fábrica.** Transforma as estações em máquinas e células, lê-as em direto ou a partir de um simulador, e mantém uma fila de trabalhos e um OEE simples. Só lê: esta versão não consegue escrever numa máquina ou num PLC.

### Superfícies, modelos e desenho

- **Boleados, espessamento e booleanas em NURBS.** O painel {{ui:Superfícies}} tem {{ui:Boleado entre faces}}, {{ui:Boleado de várias arestas}}, {{ui:Espessar até obter um sólido}} e União, Subtração e Interseção, cada um com o seu desvio medido. Ver [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superfícies a uma digitalização.** Selecione uma malha digitalizada e use {{ui:Ajustar superfícies à digitalização}} no grupo **Digitalização**, depois {{ui:Coser as superfícies num sólido}}. É um primeiro ajuste, e não um pacote completo de engenharia inversa.
- **Uma ligação em direto a partir de um modelador .3dm.** Num só sentido, a partir do Rhino 8 ou do Grasshopper, e precisa do CadCraft Studio no mesmo computador. Ver [Manter um modelo .3dm em direto](topic:live-3dm-link).
- **Ver o modelo no local.** {{ui:Ver no local (AR, telemóvel)}} no menu {{ui:Vistas}} funciona num telemóvel Android com Chrome. Ver [Ver o modelo no local com um telemóvel Android (AR)](topic:ar-on-site).
- **Métodos de arco.** A lista pendente {{ui:Métodos de arco}} oferece dez formas de desenhar um arco, incluindo {{ui:3 pontos}} e {{ui:Início, Centro, Fim}}.
- **Mais unidades.** Pesos (kg, lb, t, ton) e temperaturas (graus C, F, K e R) são reconhecidos onde escreve valores com unidades.

## Em todas as aplicações

- **Dicas de ferramenta.** O texto que aparece ao passar sobre botões e rótulos cortados é uma dica de ferramenta Bootstrap.
- **Dica inicial fechável.** O cartão de dica numa área de desenho vazia tem um pequeno x para fechar. Fica fechado, e a paleta de comandos pode voltar a mostrá-lo.
- **Barras de separadores com deslocamento.** A barra de separadores de um painel que não cabe desloca-se em vez de ser cortada.
- **Títulos dos separadores.** Com um documento aberto, o separador do navegador começa com o nome do documento, depois ModelCraft e CadCraft. Enquanto não estiver guardado, aparece primeiro um ponto.
- **Esquema.** {{ui:Definições}} › {{ui:Geral}} › Esquema reúne os esquemas numa lista pendente, com uma opção para usar um esquema só nesta aplicação e um botão para repor o esquema.
- **Idiomas.** A lista de idiomas em Definições segue os ficheiros de idioma que esta versão contém. Os idiomas além do inglês são rascunhos de máquina.
- **Em direto e Biblioteca.** O Live TeamWork mostra cursores e nomes em direto, e as coleções da Biblioteca dão a cada aplicação uma coleção predefinida.

## Corrigido

- {{ui:Reproduzir}} transforma-se em {{ui:Pausa}} enquanto uma animação está a tocar, e {{key:Space}} reproduz e pausa enquanto a linha temporal está aberta.
- A renderização de imagem recua para WebGL quando a placa gráfica não consegue iniciar o path tracer. A vista de renderização em direto pode ainda mostrar o erro; isto não foi verificado num computador Windows com esse controlador.
- O modo real do Fluxo de materiais volta a ligar-se depois de uma ligação terminar com respostas de exceção do PLC.

## Limites reais

- Nada foi impresso numa impressora real: nem em filamento, nem em resina, nem através do Bambu Connect. Os ficheiros de resina só foram lidos de volta pelos leitores do próprio CadCraft.
- O gémeo digital e o Chão de fábrica foram testados apenas com simuladores e respostas conhecidas, sem PLC, linha ou protocolo reais. São auxiliares de verificação, e não uma validação de segurança. A física cobre apenas caixas, até oito cargas.
- A ligação ao Rhino e ao Grasshopper nunca foi executada nos programas reais.
- Os idiomas que não o inglês são rascunhos de máquina.

## Anteriores: 0.8 e 0.8.1

Estas são as alterações do ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa de diálogo {{ui:Renderizar uma imagem…}} pode agora enviar a cena para outro programa, o painel Superfícies cria superfícies de forma livre suaves, e um assistente ligado pode definir uma cena inteira a partir de uma só frase.

### Novidades

**Renderização**

- **Escolha de motor.** {{ui:Renderizar uma imagem…}} tem uma lista **Motor** acima de Modo. Os nossos dois motores, Rápido e o Path tracer, são os predefinidos e funcionam em todo o lado. As outras entradas guardam a cena como um pacote (o modelo como ficheiro USD, mais um ficheiro de definições com os valores exatos dos materiais, as lâmpadas ligadas, o sol, o céu, a exposição e a câmara) para levar a outro programa. Uma imagem desenhada por outro programa indica qual o programa e a versão que a fizeram. Ver [Escolher qual o programa que desenha a imagem](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode guardar a cena como ficheiro USD, ficheiro glTF (`.glb`) ou pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio pode também iniciar o usdview ou o programa do próprio computador para o ficheiro. Ver [Abrir a cena noutro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio escreve a cena num projeto do Unreal Engine e mantém-no em sintonia a cada envio, num só sentido. As suas próprias edições ficam numa camada que o CadCraft nunca escreve. Ver [Enviar a cena para um motor de jogo](topic:render-unreal).
- **Motores vindos de suplementos.** Um suplemento pode acrescentar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua aprovação no Studio. Ver [Desenhar a imagem com outro programa](topic:render-other-program) e [Acrescentar um motor de renderização com um suplemento](topic:render-engine-addons).
- **Dizer a cena.** Diga ao assistente ligado «entardecer, chuva fina, árvores de outono, pessoas na praça» e o ModelCraft prepara a cena num único passo: o sol move-se para a data e a hora, para que as sombras sigam, o céu muda, aparecem superfícies molhadas, e as árvores e as pessoas são colocadas como objetos reais em etiquetas que se podem ocultar, mover ou apagar. A hora do dia, a data ou a estação, e o tempo (céu limpo, nublado, nevoeiro, chuva fina, chuva, tempestade) também funcionam por si, e um pedido posterior altera a mesma cena. O nevoeiro aparece na imagem de alta qualidade na placa gráfica; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como riscos a cair.

**Materiais**

- **Um material a partir de uma fotografia.** Dê ao ModelCraft uma fotografia de uma superfície (uma parede, um piso, pedra) e ele cria um material de repetição: a iluminação ao longo da fotografia é uniformizada, as arestas são feitas para se unirem, e um mapa de cor, um mapa de rugosidade e um mapa normal são calculados a partir da imagem. É um processamento de imagem simples sobre a própria fotografia, sem modelo treinado. A rugosidade é uma estimativa. Uma fotografia plana, quadrada e de frente dá a melhor repetição; um padrão forte, como tijolos, pode mostrar um fantasma suave onde a união é suavizada.

**Superfícies**

- **Superfícies de forma livre.** O painel {{ui:Superfícies}} cria curvas NURBS e superfícies sem recorte: curvas por pontos, loft, reguladas, extrusão, revolução, varridas ao longo de um ou dois trilhos, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, correspondência e mistura. Cada aresta partilhada é medida como G0, G1 ou G2 (folga, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que o pedido aparece no painel Problemas com uma correção **Corresponder**. As riscas zebra e as cores de curvatura são desenhadas a partir das superfícies exatas. Os ficheiros STEP e IGES saem e entram. Ver [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

**Local e compartimentos**

- **Uma fotografia de esboço para o terreno.** {{ui:Ficheiro}} › {{ui:Importar uma fotografia de esboço…}} transforma uma fotografia de telemóvel de um esboço à mão em arestas no terreno, à escala que indicar: um grupo, com uma etiqueta para cada cor de caneta. O papel é encontrado e endireitado no seu computador, e nada é enviado para lado nenhum. Ver [Modelar sobre uma planta de implantação](topic:site-plan).
- **Mobilar um compartimento.** Selecione um piso e use {{ui:Organizar}} › {{ui:Mobilar um compartimento…}}. Mobiliário de quarto, sala, sala de jantar, cozinha, casa de banho ou escritório é colocado por regras, encostado às paredes e livre de portas e janelas, num grupo que pode retirar de uma só vez. É uma disposição predefinida para rever, e não um projeto. Ver [Biblioteca inicial](topic:starter).

**Impressão 3D**

- **Cortes inclinados.** Dividir para impressão pode inclinar os cortes até 60 graus, o que dá às peças mais área de colagem. Os conectores ficam perpendiculares ao corte. Ver [Dividir um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os resultados da verificação de impressão 3D aparecem no painel Problemas com marcadores no modelo, e {{ui:Reparar}} corrige-os a partir daí. Ver [Suportes, espessura das paredes, esvaziamento e reparação](topic:print-tools).

**Em todas as aplicações**

- **Idiomas.** A ajuda e as aplicações chegam em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíle e uzbeque. Os idiomas além do inglês são rascunhos de máquina até que um falante nativo os tenha lido, e os tópicos de ajuda podem continuar em inglês.
- **Dispositivos de entrada.** Um trackpad, uma caneta, um rato 3D, um comando de jogo e controlos MIDI podem controlar as aplicações, para todas ou para uma só.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › Linhas da barra de ferramentas define Quebrar (como antes), 2 linhas ou 1 linha. Uma barra que não cabe desloca-se lateralmente em vez de tirar espaço ao desenho. Quebrar continua a ser a predefinição.
- **Grelha de propriedades.** Os campos de lâmpadas do ModelCraft usam a grelha partilhada: categorias recolhíveis, colunas de rótulo e valor, e densidade compacta. A aritmética escrita, como `2*450`, continua a funcionar.
- **Problemas.** O painel Problemas (o botão de aviso na barra da aplicação) é partilhado por todas as aplicações. No ModelCraft contém a verificação de impressão e os avisos de continuidade das superfícies.
- **Em direto.** Uma sessão Live TeamWork mostra quem está onde. Ver [Modelar em conjunto com o Live TeamWork](topic:work-live).
- **Suplementos.** Os suplementos podem acrescentar motores de renderização, como acima.
- **Ligar a sua IA.** O contrato de ferramentas e as verificações das oito aplicações passam, com 454 ferramentas no total. A ligação com um clique dentro do Studio, um conector alojado para assistentes de navegador, a sua própria chave dentro do Studio e um pacote publicado ainda não estão prometidos. As aplicações não contêm IA própria. Ver [Utilizar o ModelCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Secção de classes DWG.** A secção de classes de um ficheiro DWG era lida com o tipo errado, o que podia estragar o ficheiro na importação. Agora é lida corretamente, no ModelCraft e nas outras aplicações que leem DWG.
- **Tablets na vertical.** O espaço de grelha que sobra vai para a área de desenho, e o esquema da folha começa a 760 píxeis de largura ou menos. A folha de estilos do ModelCraft também tem a alteração.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem mudar de idioma durante a execução; antes, só tinham inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito e escolha {{ui:Abrir}}. As versões para lojas estão em pausa, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- Outro programa a desenhar a imagem sem um suplemento de motor de renderização, câmaras panorâmicas ou estéreo, e uma imagem de céu através de outro programa, e o plug-in que abre a fase Unreal ainda não estão disponíveis. Os ficheiros são escritos; o plug-in não foi lançado e ainda não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e o recorte e os sólidos virão mais tarde.
- As imagens de outros programas não são pixel a pixel iguais às nossas: só a câmara, o sol, as lâmpadas e a exposição coincidem.
- A correção da 0.8.1 para a mudança de idioma no Studio não foi testada em todas as plataformas.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, ver [Novidades na versão 0.7](topic:whats-new-0-7).
