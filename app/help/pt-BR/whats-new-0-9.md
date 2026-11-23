---
title: Novidades na versão 0.9 (anteriores)
summary: Etapa de impressão com fatiador próprio e envio por USB, Klipper, OctoPrint e PrusaLink, fatiamento para resina e complementos de formato de arquivo, fluxo de material, complementos de gêmeo digital e chão de fábrica, concordâncias NURBS, espessamento e ajuste a escaneamentos, AR no local e dez métodos de arco.
keywords: novidades 0.9, versão anterior, novidades, o que há de novo, notas de lançamento, changelog, 0.9, etapa de impressão, impressão 3d, enviar para impressora 3d, fatiador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressão em resina, goo, sl1, ctb, anycubic, teste de exposição, fluxo de material, gêmeo digital, chão de fábrica, plc, esteira, nurbs, concordância, espessar, ajuste de escaneamento, ar, no local, métodos de arco, unidades, novidades, changelog, alterações, 0.8, 0.8.1, versão, novos recursos, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de complementos, nurbs, superfícies, loft, varredura, continuidade, g0, g1, g2, zebra, step, iges, dizer a cena, cena, clima, hora do dia, estação, assistente, material a partir de uma foto, foto, foto de esboço, mobiliar, mobiliar um ambiente, corte inclinado, dividir, verificação de impressão, problemas, grade de propriedades, luminárias, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, live
from: 2717d1b1
---

Esta é a lista do que mudou no ModelCraft 0.9, em comparação com o 0.8.1. O ModelCraft agora chega até a impressora e ao chão de fábrica: você pode colocar objetos na mesa de impressão e enviá-los sem exportar, fatiar para filamento ou resina e montar uma linha de movimentação de materiais. Esta é a versão 0.9 do CadCraft Studio e de seus oito aplicativos; a maioria dos novos recursos abaixo são complementos.

## Novidades

### Impressão 3D

- **Etapa de impressão.** Clique em {{ui:Print stage}} na barra de ferramentas. Adicione itens da Biblioteca à mesa da impressora, organize-os, examine as camadas fatiadas e pressione {{ui:Send to 3D printer}}, sem precisar exportar um STL. Ela pertence ao complemento de Impressão 3D, que vem ativado por padrão e pode ser removido como qualquer complemento. Veja [Colocar objetos na mesa de impressão e enviá-los a uma impressora](topic:print-stage).
- **Nosso próprio fatiador de filamento.** {{ui:CadCraft basic (included, fastest)}} é o fatiador na lista **Fatiador** do cartão: paredes, cascas, preenchimento, suportes e uma saia, em um processo em segundo plano para que a página continue utilizável. {{ui:Preview layers}} com o controle deslizante **Camada** mostra as camadas antes do envio. Perfis de impressora, como os estilos Ender-3 e Prusa MK4, trazem o seu próprio código G de início.
- **Envio.** Por USB (Chrome ou Edge em um computador, com a página aberta), ou para Klipper (Moonraker), OctoPrint ou PrusaLink na sua rede. Nada se conecta nem envia sem um clique, e o envio sempre pede confirmação.
- **Outros fatiadores.** Kiri:Moto, PrusaSlicer e OrcaSlicer são complementos próprios, desligados por padrão; adicione-os pelo cartão ou por {{ui:Settings}} › {{ui:Add-ons}}. PrusaSlicer e OrcaSlicer usam a cópia instalada no seu computador a partir do CadCraft Studio. O complemento das impressoras Bambu Lab fatia com o seu OrcaSlicer e os seus predefinidos P2S e precisa do Studio em um computador.
- **Impressão em resina.** Os complementos de resina (desligados por padrão) geram imagens de camadas para a tela da sua impressora, com oco e furos de ventilação, base e suportes, uma prévia das camadas e tempo, resina e custo. Os complementos de formato de arquivo geram Elegoo GOO, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Um teste de exposição de resina gera uma escada de cinco exposições. Veja [Fatiar para uma impressora de resina](topic:resin-printing).
- **Sem alterações.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, as ferramentas de impressão e Dividir para impressão funcionam como na versão 0.8. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

### Fluxo de material, Gêmeo digital e Chão de fábrica

Estes três são complementos, desligados até você ativá-los em {{ui:Settings}} › {{ui:Add-ons}}, e cada um tem sua própria ajuda depois de ativado.

- **Fluxo de material.** Um painel chamado Fluxo de material dispõe esteiras, estações, buffers e trajetos de AGV na vista 3D, executa uma simulação com semente, reproduz e mostra a vazão, os prazos de entrega e as filas, com os resultados salvos como CSV. Os pedidos podem vir de um arquivo CSV. Células robotizadas podem ser verificadas e exportadas. A ligação com o PLC tem um modo simulado e um modo real por Modbus TCP, que funciona apenas no CadCraft Studio.
- **Gêmeo digital.** Lê o layout do Fluxo de material e executa um PLC simulado sobre ele, com falhas que você pode forçar, testes de estoque, uma comparação de layouts e uma lista de materiais.
- **Chão de fábrica.** Transforma as estações em máquinas e células, lê-as em tempo real ou a partir de um simulador, e mantém uma fila de trabalhos e um OEE simples. Ele apenas lê: esta versão não consegue escrever em uma máquina ou PLC.

### Superfícies, modelos e desenho

- **Concordâncias, espessamento e booleanas em NURBS.** O painel {{ui:Surfaces}} tem {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} e União, Subtração e Interseção, cada uma com seu desvio medido. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superfícies a um escaneamento.** Selecione uma malha escaneada e use {{ui:Fit surfaces to the scan}} no grupo **Escaneamento**, depois {{ui:Stitch the surfaces to a solid}}. É um primeiro ajuste, não um pacote completo de engenharia reversa.
- **Um vínculo ao vivo com um modelador .3dm.** Em uma direção, a partir do Rhino 8 ou do Grasshopper, e precisa do CadCraft Studio no mesmo computador. Veja [Manter um modelo .3dm ao vivo](topic:live-3dm-link).
- **Veja o modelo no local.** {{ui:View on site (AR, phone)}} no menu {{ui:Views}} funciona em um celular Android com Chrome. Veja [Veja o modelo no local com um celular Android (AR)](topic:ar-on-site).
- **Métodos de arco.** A lista {{ui:Arc methods}} oferece dez maneiras de desenhar um arco, incluindo {{ui:3-Point}} e {{ui:Start, Center, End}}.
- **Mais unidades.** Pesos (kg, lb, t, ton) e temperaturas (graus C, F, K e R) são reconhecidos onde você digita valores com unidades.

## Em todos os aplicativos

- **Dicas ao passar o mouse.** O texto que aparece ao passar o mouse sobre botões e rótulos cortados é uma dica do Bootstrap.
- **Cartão de dica inicial fechável.** O cartão de dica em uma área de desenho vazia tem um pequeno x de fechar. Ele continua fechado, e a paleta de comandos pode mostrá-lo novamente.
- **Barras de abas com rolagem.** A barra de abas de um painel que não cabe rola em vez de ser cortada.
- **Títulos das abas.** Com um documento aberto, a aba do navegador começa com o nome do documento, depois ModelCraft e CadCraft. Um ponto aparece antes enquanto houver alterações não salvas.
- **Layout.** {{ui:Settings}} › {{ui:General}} › Layout mantém os layouts em uma lista suspensa, com uma opção para usar um layout só neste aplicativo e um botão para redefinir o layout.
- **Idiomas.** A lista de idiomas em Configurações segue os arquivos de idioma que a versão contém. Os idiomas diferentes do inglês são rascunhos de máquina.
- **Live e Biblioteca.** O Live TeamWork mostra cursores e nomes em tempo real, e as coleções da Biblioteca dão a cada aplicativo uma coleção padrão.

## Corrigido

- {{ui:Play}} vira {{ui:Pause}} enquanto uma animação está em execução, e {{key:Space}} reproduz e pausa enquanto a linha do tempo estiver aberta.
- A renderização de imagem fixa recorre ao WebGL quando a placa de vídeo não consegue iniciar o traçador de caminhos. A vista de renderização ao vivo ainda pode mostrar o erro; isso não foi verificado em um computador Windows com esse driver.
- O modo real do Fluxo de material volta a se conectar depois que um vínculo terminou com respostas de exceção do PLC.

## Limites reconhecidos

- Nada foi impresso em uma impressora real: nem filamento, nem resina, nem pelo Bambu Connect. Os arquivos de resina foram lidos apenas pelos leitores próprios do CadCraft.
- O gêmeo digital e o Chão de fábrica foram testados apenas com simuladores e respostas conhecidas, sem um PLC, linha ou protocolo reais. Eles são auxílios de verificação, não uma validação de segurança. A física cobre apenas caixas, com até oito cargas.
- O vínculo com Rhino e Grasshopper nunca foi executado nos programas reais.
- Os idiomas diferentes do inglês são rascunhos de máquina.

## Anteriores: 0.8 e 0.8.1

Esta é a lista do que mudou no ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa de diálogo {{ui:Render a picture…}} agora pode enviar a cena para outro programa, o painel Superfícies cria superfícies de forma livre suaves, e um assistente que você conecta pode definir uma cena inteira a partir de uma frase.

### Novidades

**Renderização**

- **Uma escolha de motor.** {{ui:Render a picture…}} tem uma lista **Motor** acima de Modo. Nossos dois motores próprios, Rápido e o Traçador de caminhos, são o padrão e funcionam em todos os lugares. As outras opções salvam a cena como um pacote (o modelo como arquivo USD, mais um arquivo de configurações com os valores exatos dos materiais, as luminárias ligadas, o sol, o céu, a exposição e a câmera) para levar a outro programa. Uma imagem feita por outro programa informa qual programa e qual versão a criaram. Veja [Escolher qual programa desenha a imagem](topic:render-engines).
- **Abrir em outro programa.** A lista Motor pode salvar a cena como um arquivo USD, um arquivo glTF (`.glb`) ou uma pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio, também pode iniciar o usdview ou o programa do próprio computador para o arquivo. Veja [Abrir a cena em outro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio grava a cena em um projeto do Unreal Engine e a mantém em sincronia a cada envio, em uma única direção. Suas próprias edições ficam em uma camada que o CadCraft nunca grava. Veja [Enviar a cena para um motor de jogo](topic:render-unreal).
- **Motores de complementos.** Um complemento pode adicionar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua confirmação no Studio. Veja [Desenhar a imagem com outro programa](topic:render-other-program) e [Adicionar um motor de renderização com um complemento](topic:render-engine-addons).
- **Dizer a cena.** Diga ao seu assistente conectado "crepúsculo, chuva leve, árvores de outono, pessoas na praça" e o ModelCraft configura tudo em uma etapa: o sol se move para a data e a hora, para que as sombras acompanhem, o céu muda, superfícies molhadas aparecem, e árvores e pessoas são colocadas como objetos reais em etiquetas que você pode ocultar, mover ou excluir. Hora do dia, data ou estação, e clima (limpo, nublado, neblina, chuva leve, chuva, tempestade) também funcionam sozinhos, e um pedido posterior altera a mesma cena. A neblina aparece na imagem de alta qualidade na placa de vídeo; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como linhas caindo.

**Materiais**

- **Um material a partir de uma foto.** Dê ao ModelCraft a foto de uma superfície (uma parede, um piso, pedra) e ele cria um material de repetição: a iluminação ao longo da foto é nivelada, as bordas são feitas para se unir, e um mapa de cor, um mapa de rugosidade e um mapa de normais são calculados a partir da imagem. É um processamento de imagem comum sobre a sua própria foto, sem nenhum modelo treinado. A rugosidade é uma estimativa. Uma foto simples, quadrada e de frente gera o melhor padrão; um padrão forte, como tijolos, pode mostrar um fantasma suave onde a junção é misturada.

**Superfícies**

- **Superfícies de forma livre.** O painel {{ui:Surfaces}} cria curvas e superfícies NURBS sem recorte: curvas por pontos, loft, regradas, extrusão, revolução, varreduras ao longo de um ou dois trilhos, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, ajuste e mesclagem. Cada aresta compartilhada é medida como G0, G1 ou G2 (folga, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que você pediu aparece no painel Problemas com uma correção **Match**. As listras zebra e as cores de curvatura são desenhadas a partir das superfícies exatas. Arquivos STEP e IGES são exportados e importados. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

**Terreno e ambientes**

- **Uma foto de esboço sobre o terreno.** {{ui:File}} › {{ui:Import a sketch photo…}} transforma uma foto de celular de um esboço à mão em arestas sobre o terreno, na escala que você informar: um grupo, com uma etiqueta para cada cor de caneta. O papel é encontrado e endireitado no seu computador, e nada é enviado a lugar nenhum. Veja [Modelar sobre uma planta de implantação](topic:site-plan).
- **Mobiliar um ambiente.** Selecione um piso e use {{ui:Organize}} › {{ui:Furnish a room…}}. Móveis de quarto, sala de estar, sala de jantar, cozinha, banheiro ou escritório são posicionados por regras, encostados nas paredes e sem atrapalhar portas e janelas, em um único grupo que você pode remover em uma etapa. É um layout padrão para você revisar, não um projeto. Veja [Biblioteca inicial](topic:starter).

**Impressão 3D**

- **Cortes inclinados.** Dividir para impressão pode inclinar os cortes em até 60 graus, o que dá às peças mais área para colagem. Os conectores ficam perpendiculares ao corte. Veja [Dividir um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os resultados da verificação de impressão 3D aparecem no painel Problemas com marcadores no modelo, e Reparar os corrige a partir dali. Veja [Suportes, espessura de parede, peças ocas e reparo](topic:print-tools).

**Em todos os aplicativos**

- **Idiomas.** A ajuda e os aplicativos chegam em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque. Os idiomas diferentes do inglês são rascunhos de máquina até que um falante nativo os tenha revisado, e os tópicos de ajuda ainda podem estar em inglês.
- **Dispositivos de entrada.** Um trackpad, uma caneta, um mouse 3D, um controle de jogo e controles MIDI podem controlar os aplicativos, para todos eles ou para um só.
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › Linhas da barra de ferramentas define Quebrar (como antes), 2 linhas ou 1 linha. Uma barra que não cabe rola para os lados em vez de tirar espaço do desenho. Quebrar continua sendo o padrão.
- **Grade de propriedades.** Os campos de luminárias do ModelCraft usam a grade compartilhada: categorias recolhíveis, colunas de rótulo e valor, e densidade Compacta. Cálculos digitados como `2*450` continuam funcionando.
- **Problemas.** O painel Problemas (o botão de aviso na barra do aplicativo) é compartilhado por todos os aplicativos. No ModelCraft, ele contém a verificação de impressão e os avisos de continuidade de superfície.
- **Live.** Uma sessão do Live TeamWork mostra quem está em que lugar. Veja [Modelar em conjunto com o Live TeamWork](topic:work-live).
- **Complementos.** Complementos podem adicionar motores de renderização, como acima.
- **Conecte sua IA.** O contrato de ferramentas e as verificações dos oito aplicativos passam, com 454 ferramentas no total. Conexão com um clique dentro do Studio, um conector hospedado para assistentes de navegador, sua própria chave dentro do Studio e um pacote publicado ainda não estão prometidos. Os aplicativos não contêm nenhuma IA própria. Veja [Usar o ModelCraft com assistentes de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Seção de classes do DWG.** A seção de classes de um arquivo DWG era lida com o tipo errado, o que podia quebrar o arquivo na importação. Agora ela é lida corretamente, no ModelCraft e nos outros aplicativos que leem DWG.
- **Tablets na vertical.** A altura de grade sobrando vai para a tela de desenho, e o layout da folha começa em 760 pixels de largura ou menos. A folha de estilos do ModelCraft também tem a alteração.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem trocar de idioma enquanto estão em execução; antes, eram apenas em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.

### Ainda não implementado nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:More info}}, depois {{ui:Run anyway}}. Em um Mac, clique com o botão direito e escolha {{ui:Open}}. As versões para loja estão suspensas, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- Outro programa desenhando a imagem sem um complemento de motor de renderização, câmeras panorâmicas ou estéreo e uma imagem de céu por meio de outro programa, e o plug-in que abre o palco do Unreal ainda não estão disponíveis. Os arquivos são gravados; o plug-in não foi lançado e não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e recortes e sólidos virão depois.
- As imagens de outros programas não são idênticas pixel a pixel às nossas: apenas a câmera, o sol, as luminárias e a exposição coincidem.
- A correção de 0.8.1 para a troca de idioma no Studio não foi testada em todas as plataformas.

Todo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na versão 0.7](topic:whats-new-0-7).
