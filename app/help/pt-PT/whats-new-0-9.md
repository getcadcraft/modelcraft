---
title: Novidades na versão 0.9 (anteriores)
summary: Fase de impressão com o nosso próprio fatiador e envio por USB, Klipper, OctoPrint e PrusaLink, fatiamento de resina e suplementos de ficheiros, fluxo de materiais, suplementos de gémeo digital e chão de fábrica, boleados NURBS, espessamento e ajuste à digitalização, AR no local e dez métodos de arco.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, notas de lançamento, registo de alterações, 0.9, fase de impressão, impressão 3D, enviar para impressora 3D, fatiador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressão em resina, goo, sl1, ctb, anycubic, teste de exposição, fluxo de materiais, gémeo digital, chão de fábrica, plc, transportador, nurbs, boleado, espessar, ajuste à digitalização, ar, no local, métodos de arco, unidades, o que há de novo, notas de lançamento, alterações, 0.8, 0.8.1, versão, novas funcionalidades, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de suplemento, nurbs, superfícies, loft, varrimento, continuidade, g0, g1, g2, zebra, step, iges, dizer a cena, cena, meteorologia, hora do dia, estação, assistente, material a partir de uma fotografia, fotografia, fotografia de esboço, mobilar, mobilar um compartimento, inclinado, corte inclinado, dividir, verificação de impressão, problemas, grelha de propriedades, candeeiros, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, live
from: 2717d1b1
---

Esta é a lista do que mudou no ModelCraft 0.9, em comparação com a 0.8.1. O ModelCraft chega agora à impressora e ao chão de fábrica: pode colocar coisas na base de impressão e enviá-las sem exportar, fatiar para filamento ou resina, e desenhar uma linha de movimentação de materiais. Esta é a versão 0.9 do CadCraft Studio e das suas oito aplicações; a maioria das novas funcionalidades abaixo são suplementos.

## Novo

### Impressão 3D

- **Fase de impressão.** Clique em {{ui:Fase de impressão}} na barra de ferramentas. Adicione itens da biblioteca à base de impressão, disponha-os, percorra as camadas fatiadas e prima {{ui:Enviar para impressora 3D}}, sem precisar de exportar um STL. Pertence ao suplemento de Impressão 3D, que vem ligado por predefinição e pode ser removido como qualquer suplemento. Consulte [Coloque coisas na base de impressão e envie-as para uma impressora](topic:print-stage).
- **O nosso próprio fatiador de filamento.** {{ui:CadCraft basic (incluído, o mais rápido)}} é o fatiador da lista **Fatiador** do cartão: paredes, revestimentos, enchimento, suportes e uma saia, num processo em segundo plano para que a página continue utilizável. {{ui:Pré-visualizar camadas}} com o cursor **Camada** mostra as camadas antes de enviar. Os perfis de impressora, como os estilos Ender-3 e Prusa MK4, trazem o seu próprio G-code de início.
- **Envio.** Por USB (Chrome ou Edge num computador, com a página aberta), ou para Klipper (Moonraker), OctoPrint ou PrusaLink na sua rede. Nada se liga nem envia sem um clique, e o envio pede confirmação antes.
- **Outros fatiadores.** Kiri:Moto, PrusaSlicer e OrcaSlicer são suplementos próprios, desligados por predefinição; adicione-os a partir do cartão ou de {{ui:Definições}} › {{ui:Suplementos}}. O PrusaSlicer e o OrcaSlicer usam a cópia instalada do CadCraft Studio. O suplemento de impressoras Bambu Lab fatia com o seu OrcaSlicer e as predefinições P2S, e precisa do Studio num computador.
- **Impressão em resina.** Os suplementos de resina (desligados por predefinição) criam imagens de camadas para o ecrã da impressora, com esvaziamento e furos de ventilação, um raft e suportes, uma pré-visualização das camadas, e o tempo, a resina e o custo. Os suplementos de formato de ficheiro escrevem Elegoo GOO, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Um teste de exposição de resina cria uma escada de cinco exposições. Consulte [Fatiar para uma impressora de resina](topic:resin-printing).
- **Sem alterações.** {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}, as ferramentas de impressão e Dividir para impressão funcionam como na 0.8. Consulte [Prepare um modelo para impressão 3D](topic:print-3d).

### Fluxo de materiais, Gémeo digital e Chão de fábrica

Estes três são suplementos, desligados até os ligar em {{ui:Definições}} › {{ui:Suplementos}}, e cada um tem a sua própria ajuda depois de ligado.

- **Fluxo de materiais.** Um painel chamado Fluxo de materiais dispõe transportadores, estações, buffers e percursos de AGV na vista 3D, executa uma simulação com semente, reproduz-a, e mostra o débito, os prazos e as filas, com os resultados guardados em CSV. As encomendas podem vir de um ficheiro CSV. As células robóticas podem ser verificadas e exportadas. A ligação PLC tem um modo simulado e um modo real sobre Modbus TCP, que só funciona no CadCraft Studio.
- **Gémeo digital.** Lê o layout do Fluxo de materiais e executa um PLC simulado sobre ele, com avarias que pode forçar, testes de stock, uma comparação de layouts e uma lista de materiais.
- **Chão de fábrica.** Transforma as estações em máquinas e células, lê-as em tempo real ou a partir de um simulador, e mantém uma fila de trabalhos e um OEE simples. Só lê: esta versão não consegue escrever numa máquina ou num PLC.

### Superfícies, modelos e desenho

- **Boleados, espessamento e operações booleanas em NURBS.** O painel {{ui:Superfícies}} tem {{ui:Boleado entre faces}}, {{ui:Boleado de várias arestas}}, {{ui:Espessar até obter um sólido}} e União, Subtração e Interseção, cada uma com o seu desvio medido. Consulte [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superfícies a uma digitalização.** Selecione uma malha digitalizada e use {{ui:Ajustar superfícies à digitalização}} no grupo **Digitalização**, depois {{ui:Coser as superfícies num sólido}}. É um primeiro ajuste, não um pacote completo de engenharia inversa.
- **Uma ligação em direto a partir de um modelador .3dm.** Numa só direção, a partir do Rhino 8 ou do Grasshopper, e precisa do CadCraft Studio no mesmo computador. Consulte [Mantenha um modelo .3dm em direto](topic:live-3dm-link).
- **Veja o modelo no local.** {{ui:Ver no local (AR, telemóvel)}} no menu {{ui:Vistas}} funciona num telemóvel Android com Chrome. Consulte [Veja o modelo no local com um telemóvel Android (AR)](topic:ar-on-site).
- **Métodos de arco.** A lista {{ui:Métodos de arco}} oferece dez formas de desenhar um arco, incluindo {{ui:3 pontos}} e {{ui:Início, Centro, Fim}}.
- **Mais unidades.** Pesos (kg, lb, t, ton) e temperaturas (graus C, F, K e R) são reconhecidos onde escreve valores com unidades.

## Em todas as aplicações

- **Dicas.** O texto que aparece ao passar o rato nos botões e nas etiquetas cortadas é uma dica de ferramenta do Bootstrap.
- **Cartão de dica inicial fechável.** O cartão de dica na área de desenho vazia tem um pequeno x para fechar. Fica fechado, e a paleta de comandos pode voltar a mostrá-lo.
- **Faixas de separadores com deslocamento.** A faixa de separadores de um painel que não cabe desloca-se em vez de ficar cortada.
- **Títulos dos separadores.** Com um documento aberto, o separador do navegador começa com o nome do documento, depois ModelCraft e CadCraft. Enquanto não estiver guardado, um ponto vem primeiro.
- **Layout.** {{ui:Definições}} › {{ui:Geral}} › Layout mantém os layouts numa lista pendente, com uma opção para usar um layout apenas nesta aplicação e um botão para repor o layout.
- **Idiomas.** A lista de idiomas nas Definições segue os ficheiros de idioma que a versão contém. Os idiomas diferentes do inglês são traduções automáticas em rascunho.
- **Live e Biblioteca.** Live TeamWork mostra cursores e nomes em direto, e as coleções da Biblioteca dão a cada aplicação uma coleção predefinida.

## Corrigido

- {{ui:Reproduzir}} passa a {{ui:Pausa}} enquanto uma animação decorre, e {{key:Space}} reproduz e pausa enquanto a linha temporal estiver aberta.
- A renderização de imagem fixa volta a WebGL quando a placa gráfica não consegue iniciar o traçador de caminhos. A vista de renderização em direto pode ainda mostrar o erro; isto não foi verificado num computador Windows com esse controlador.
- O modo real do Fluxo de materiais volta a ligar depois de uma ligação terminar em respostas de exceção do PLC.

## Limitações assumidas

- Nada foi impresso numa impressora real: nem filamento, nem resina, nem através do Bambu Connect. Os ficheiros de resina foram lidos apenas pelos leitores do próprio CadCraft.
- O gémeo digital e o chão de fábrica foram testados apenas com simuladores e respostas conhecidas, sem PLC, linha ou protocolo reais. São auxiliares de verificação, não uma validação de segurança. A física cobre apenas caixas, até oito cargas.
- A ligação com o Rhino e o Grasshopper nunca correu nos programas reais.
- As línguas diferentes do inglês são traduções automáticas em rascunho.

## Anteriores: 0.8 e 0.8.1

Esta é a lista do que mudou no ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa de diálogo {{ui:Renderizar uma imagem…}} pode agora enviar a cena para outro programa, o painel {{ui:Superfícies}} cria superfícies de forma livre suaves, e um assistente que liga pode definir uma cena inteira com uma frase.

### Novo

**Renderização**

- **Um motor à escolha.** A caixa {{ui:Renderizar uma imagem…}} tem uma lista **Motor** acima de **Modo**. Os nossos dois motores, Rápido e o Traçador de caminhos, são o predefinido e funcionam em todo o lado. As outras entradas guardam a cena como um pacote (o modelo como ficheiro USD, mais um ficheiro de definições com os valores exatos dos materiais, os candeeiros ligados, o sol, o céu, a exposição e a câmara) para levar a outro programa. Uma imagem desenhada por outro programa indica qual o programa e a versão que a fizeram. Consulte [Escolha qual o programa que desenha a imagem](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode guardar a cena como um ficheiro USD, um ficheiro glTF (`.glb`) ou uma pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio pode também iniciar o usdview ou o programa próprio do computador para o ficheiro. Consulte [Abra a cena noutro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio escreve a cena num projeto Unreal Engine e mantém-na em sintonia a cada envio, num só sentido. As suas próprias edições ficam numa camada que o CadCraft nunca escreve. Consulte [Envie a cena para um motor de jogo](topic:render-unreal).
- **Motores de suplementos.** Um suplemento pode acrescentar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua aprovação no Studio. Consulte [Desenhe a imagem com outro programa](topic:render-other-program) e [Acrescente um motor de renderização com um suplemento](topic:render-engine-addons).
- **Diga a cena.** Diga ao assistente ligado "crepúsculo, chuva fraca, árvores de outono, pessoas na praça" e o ModelCraft prepara tudo num só passo: o sol move-se para a data e a hora, para que as sombras acompanhem, o céu muda, aparecem superfícies molhadas, e as árvores e as pessoas são colocadas como objetos reais em etiquetas que pode ocultar, mover ou apagar. A hora do dia, a data ou a estação, e o estado do tempo (céu limpo, nublado, nevoeiro, chuva fraca, chuva, tempestade) também funcionam sozinhos, e um pedido posterior altera a mesma cena. O nevoeiro aparece na imagem de alta qualidade na placa gráfica; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como riscos a cair.

**Materiais**

- **Um material a partir de uma fotografia.** Dê ao ModelCraft uma fotografia de uma superfície (uma parede, um piso, pedra) e ele cria um material em mosaico: a iluminação na fotografia é nivelada, as arestas são feitas para se unirem, e um mapa de cor, um mapa de rugosidade e um mapa de normais são calculados a partir da imagem. É processamento de imagem simples sobre a sua própria fotografia, sem modelo treinado. A rugosidade é uma estimativa. Uma fotografia plana, quadrada e de frente dá o melhor mosaico; um padrão forte, como tijolos, pode mostrar um fantasma suave onde a junção é misturada.

**Superfícies**

- **Superfícies de forma livre.** O painel {{ui:Superfícies}} cria curvas e superfícies NURBS sem recortes: curvas por pontos, loft, regradas, extrusão, revolução, varrimentos ao longo de um ou dois trilhos, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, correspondência e mistura. Cada aresta partilhada é medida como G0, G1 ou G2 (folga, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que pediu aparece no painel Problemas com uma correção **Corresponder**. As listras zebra e as cores de curvatura são desenhadas a partir das superfícies exatas. Os ficheiros STEP e IGES saem e entram. Consulte [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

**Local e compartimentos**

- **Um esboço fotografado para o chão.** {{ui:Ficheiro}} › {{ui:Importar uma fotografia de esboço…}} transforma uma fotografia de telemóvel de um esboço à mão em arestas no chão, à escala que indicar: um grupo, com uma etiqueta para cada cor de caneta. O papel é encontrado e endireitado no seu computador, e nada é enviado para lado nenhum. Consulte [Modelar numa planta de implantação](topic:site-plan).
- **Mobilar um compartimento.** Selecione um piso e use {{ui:Organizar}} › {{ui:Mobilar um compartimento…}}. Mobiliário de quarto, sala de estar, sala de jantar, cozinha, casa de banho ou escritório é colocado por regras, encostado às paredes e livre de portas e janelas, num só grupo que pode retirar num só passo. É uma disposição predefinida para rever, não um projeto. Consulte [Biblioteca inicial](topic:starter).

**Impressão 3D**

- **Cortes inclinados.** Dividir para impressão pode inclinar os seus cortes até 60 graus, o que dá às peças mais área de colagem. Os conectores ficam perpendiculares ao corte. Consulte [Dividir um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os resultados da verificação de impressão 3D aparecem no painel Problemas, com marcadores no modelo, e **Reparar** corrige-os a partir daí. Consulte [Suportes, espessura de parede, esvaziamento e reparação](topic:print-tools).

**Em todas as aplicações**

- **Idiomas.** A ajuda e as aplicações chegam em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíli e usbeque. Os idiomas diferentes do inglês são traduções automáticas em rascunho até um falante nativo os ter lido, e os tópicos de ajuda podem ainda estar em inglês.
- **Dispositivos de entrada.** Um trackpad, uma caneta, um rato 3D, um comando de jogos e controlos MIDI podem comandar as aplicações, em todas ou só numa.
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › Linhas da barra de ferramentas define Quebrar (como antes), 2 linhas ou 1 linha. Uma barra que não cabe desloca-se lateralmente em vez de tirar espaço ao desenho. Quebrar continua a ser o predefinido.
- **Grelha de propriedades.** Os campos dos candeeiros do ModelCraft usam a grelha partilhada: categorias recolhíveis, colunas de rótulo e valor, e densidade Compacta. Operações aritméticas digitadas, como `2*450`, continuam a funcionar.
- **Problemas.** O painel Problemas (o botão de aviso na barra da aplicação) é partilhado por todas as aplicações. No ModelCraft contém a verificação de impressão e os avisos de continuidade das superfícies.
- **Live.** Uma sessão Live TeamWork mostra quem está onde. Consulte [Modele em conjunto com o Live TeamWork](topic:work-live).
- **Suplementos.** Os suplementos podem acrescentar motores de renderização, como acima.
- **Ligue a sua IA.** O contrato de ferramentas e as verificações das oito aplicações passam, com 454 ferramentas no total. A ligação com um clique dentro do Studio, um conector alojado para assistentes de navegador, a sua própria chave dentro do Studio e um pacote publicado ainda não estão prometidos. As aplicações não contêm nenhuma IA própria. Consulte [Use o ModelCraft com assistentes de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Secção de classes DWG.** A secção de classes de um ficheiro DWG era lida com o tipo errado, o que podia danificar o ficheiro na importação. Agora é lida corretamente, no ModelCraft e nas outras aplicações que leem DWG.
- **Tablets em retrato.** O espaço de grelha em excesso vai para a área de desenho, e o layout da folha começa nos 760 pixels de largura ou menos. A folha de estilos do ModelCraft também tem a alteração.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem mudar de idioma enquanto estão em execução; antes eram só em inglês. Isto ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. Num Mac, clique com o botão direito e escolha {{ui:Abrir}}. As versões para loja estão em suspenso, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- Outro programa a desenhar a imagem sem um suplemento de motor de renderização, câmaras panorâmicas ou estereoscópicas, e uma imagem de céu através de outro programa, e o plug-in que abre a cena Unreal ainda não existem. Os ficheiros são escritos; o plug-in não foi lançado e não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e os recortes e os sólidos vêm mais tarde.
- Imagens de outros programas não são pixel a pixel iguais às nossas: só a câmara, o sol, os candeeiros e a exposição coincidem.
- A correção 0.8.1 da troca de idioma no Studio não foi testada em todas as plataformas.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, consulte [Novidades na versão 0.7](topic:whats-new-0-7).
