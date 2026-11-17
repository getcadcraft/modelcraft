---
title: Novidades da versão 0.9
summary: Etapa de impressão com nosso próprio fatiador e envio por USB, Klipper, OctoPrint e PrusaLink, fatiamento para resina e complementos de arquivo, fluxo de materiais, complementos de gêmeo digital e chão de fábrica, arredondamentos NURBS, espessamento e ajuste a escaneamentos, RA no local e dez métodos de arco.
keywords: novidades, o que há de novo, notas de versão, registro de alterações, 0.9, etapa de impressão, impressão 3d, enviar para impressora 3d, fatiador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impressão em resina, goo, sl1, ctb, anycubic, teste de exposição, fluxo de materiais, gêmeo digital, chão de fábrica, plc, esteira, nurbs, arredondamento, espessar, ajuste ao escaneamento, ar, no local, métodos de arco, unidades, novidades, registro de alterações, 0.8, 0.8.1, versão, novos recursos, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de complementos, nurbs, superfícies, loft, varredura, continuidade, g0, g1, g2, zebra, step, iges, dizer a cena, cena, clima, hora do dia, estação, assistente, material a partir de uma foto, foto, foto de esboço, mobiliar, mobiliar um ambiente, inclinado, corte inclinado, dividir, verificação de impressão, problemas, grade de propriedades, luminárias, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, ao vivo
from: 169048a2
---

Esta é a lista do que mudou no ModelCraft 0.9, em comparação com a 0.8.1. O ModelCraft agora chega à impressora e ao chão de fábrica: você pode colocar peças na mesa de impressão e enviá-las sem exportar, fatiar para filamento ou resina, e montar uma linha de movimentação de materiais. Esta é a versão 0.9 do CadCraft Studio e de seus oito aplicativos; a maioria dos novos recursos abaixo são complementos.

## Novo

### Impressão 3D

- **Etapa de impressão.** Clique em {{ui:Etapa de impressão}} na barra de ferramentas. Adicione itens da Biblioteca à mesa da impressora, organize-os, veja as camadas fatiadas e pressione {{ui:Enviar para impressora 3D}}, sem precisar exportar um STL. Ela pertence ao complemento Impressão 3D, que vem ativado por padrão e pode ser removido como qualquer complemento. Veja [Coloque peças na mesa de impressão e envie-as para uma impressora](topic:print-stage).
- **Nosso próprio fatiador de filamento.** {{ui:CadCraft basic (incluído, mais rápido)}} é o fatiador na lista **Fatiador** do cartão: paredes, cascas, preenchimento, suportes e uma saia, em um processo em segundo plano para que a página continue utilizável. {{ui:Visualizar camadas}} com o controle deslizante **Camada** mostra as camadas antes de você enviar. Perfis de impressora, como os estilos Ender-3 e Prusa MK4, trazem o seu próprio G-code inicial.
- **Envio.** Por USB (Chrome ou Edge em um computador, com a página aberta), ou para Klipper (Moonraker), OctoPrint ou PrusaLink na sua rede. Nada se conecta nem envia sem um clique, e o envio pede confirmação antes.
- **Outros fatiadores.** Kiri:Moto, PrusaSlicer e OrcaSlicer são complementos próprios, desativados por padrão; adicione-os pelo cartão ou em {{ui:Configurações}} › {{ui:Complementos}}. PrusaSlicer e OrcaSlicer usam a sua própria cópia instalada, a partir do CadCraft Studio. O complemento de impressoras Bambu Lab fatia com o seu OrcaSlicer e os seus perfis P2S, e precisa do Studio em um computador.
- **Impressão em resina.** Os complementos de resina (desativados por padrão) geram imagens de camadas para a tela da sua impressora, com esvaziamento e furos de ventilação, uma base de sustentação e suportes, uma prévia das camadas, e tempo, resina e custo. Os complementos de formato de arquivo gravam Elegoo GOO, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Um teste de exposição de resina faz uma escada de cinco exposições. Veja [Fatiar para uma impressora de resina](topic:resin-printing).
- **Sem alterações.** {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}, as ferramentas de impressão e Dividir para impressão funcionam como na 0.8. Veja [Preparar um modelo para impressão 3D](topic:print-3d).

### Fluxo de materiais, Gêmeo digital e Chão de fábrica

Estes três são complementos, desligados até você ativá-los em {{ui:Configurações}} › {{ui:Complementos}}, e cada um tem a sua própria ajuda quando está ativo.

- **Fluxo de materiais.** Um painel chamado Fluxo de materiais monta esteiras, estações, buffers e trajetos de AGV na vista 3D, executa uma simulação com semente, reproduz o resultado e mostra a vazão, os prazos de entrega e as filas, com os resultados salvos como CSV. Os pedidos podem vir de um arquivo CSV. Células robotizadas podem ser verificadas e exportadas. O vínculo com o PLC tem um modo simulado e um modo real por Modbus TCP, que funciona somente no CadCraft Studio.
- **Gêmeo digital.** Lê a montagem do Fluxo de materiais e executa um PLC simulado sobre ela, com falhas que você pode forçar, testes de estoque, uma comparação de montagens e uma lista de materiais.
- **Chão de fábrica.** Transforma as estações em máquinas e células, lê-as ao vivo ou a partir de um simulador, e mantém uma fila de trabalhos e um OEE simples. Ele apenas lê: esta versão não consegue escrever em uma máquina ou PLC.

### Superfícies, modelos e desenho

- **Arredondamentos, espessamento e operações booleanas em NURBS.** O painel {{ui:Superfícies}} tem {{ui:Concordância entre faces}}, {{ui:Concordância de várias arestas}}, {{ui:Dar espessura para formar um sólido}} e União, Subtração e Interseção, cada um com o seu desvio medido. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).
- **Ajustar superfícies a um escaneamento.** Selecione uma malha escaneada e use {{ui:Ajustar superfícies ao escaneamento}} no grupo **Escaneamento**, depois {{ui:Costurar as superfícies em um sólido}}. É um primeiro ajuste, não um pacote completo de engenharia reversa.
- **Um vínculo ao vivo a partir de um modelador .3dm.** Em um sentido, a partir do Rhino 8 ou Grasshopper, e precisa do CadCraft Studio no mesmo computador. Veja [Manter um modelo .3dm ao vivo](topic:live-3dm-link).
- **Veja o modelo no local.** {{ui:Ver no local (RA, celular)}} no menu {{ui:Vistas}} funciona em um celular Android com o Chrome. Veja [Ver o modelo no local com um celular Android (RA)](topic:ar-on-site).
- **Métodos de arco.** A lista {{ui:Métodos de arco}} oferece dez maneiras de desenhar um arco, incluindo {{ui:3 pontos}} e {{ui:Início, Centro, Fim}}.
- **Mais unidades.** Massas (kg, lb, t, ton) e temperaturas (graus C, F, K e R) são entendidas onde você digita valores com unidades.

## Em todos os aplicativos

- **Dicas de ferramenta.** O texto que aparece ao passar o ponteiro sobre botões e rótulos cortados é uma dica do Bootstrap.
- **Dica inicial que pode ser fechada.** O cartão de dica na área de desenho vazia tem um pequeno x de fechar. Ele continua fechado, e a paleta de comandos pode mostrá-lo novamente.
- **Barras de guias com rolagem.** A barra de guias de um painel que não cabe ganha rolagem, em vez de ser cortada.
- **Títulos das guias.** Com um documento aberto, a guia do navegador começa com o nome do documento, depois ModelCraft e CadCraft. Um ponto aparece primeiro enquanto houver alterações não salvas.
- **Layout.** {{ui:Configurações}} › {{ui:Geral}} › Layout reúne os layouts em uma lista suspensa, com a opção de usar um layout só para este aplicativo e um botão para redefinir o layout.
- **Idiomas.** A lista de idiomas em Configurações segue os arquivos de idioma que a versão contém. Os idiomas diferentes do inglês são rascunhos de máquina.
- **Ao vivo e Biblioteca.** O TeamWork ao vivo mostra os cursores e os nomes ao vivo, e as coleções da Biblioteca dão a cada aplicativo uma coleção padrão.

## Corrigido

- {{ui:Reproduzir}} vira {{ui:Pausar}} enquanto uma animação toca, e {{key:Space}} reproduz e pausa enquanto a linha do tempo estiver aberta.
- A renderização de imagem volta ao WebGL quando a placa de vídeo não consegue iniciar o traçador de caminhos. A vista de renderização ao vivo ainda pode mostrar o erro; isso não foi verificado em uma máquina Windows com esse driver.
- O modo real do Fluxo de materiais volta a se conectar depois que uma ligação terminou em respostas de exceção do PLC.

## Limites reais

- Nada foi impresso em uma impressora real: nem filamento, nem resina, nem pelo Bambu Connect. Os arquivos de resina foram lidos de volta apenas pelos leitores próprios do CadCraft.
- O gêmeo digital e o Chão de fábrica foram testados apenas com simuladores e respostas conhecidas, sem PLC, linha ou protocolo reais. São auxílios de verificação, não uma validação de segurança. A física cobre apenas caixas, até oito cargas.
- O vínculo com o Rhino e o Grasshopper nunca foi executado nos programas reais.
- Os idiomas que não são o inglês são rascunhos de máquina.

## Anteriores: 0.8 e 0.8.1

Esta é a lista do que mudou no ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa {{ui:Renderizar imagem…}} agora pode enviar a cena para outro programa, o painel de Superfícies cria superfícies suaves de forma livre, e um assistente que você conecta pode montar uma cena inteira a partir de uma frase.

### Novo

**Renderização**

- **Uma escolha de Motor.** A caixa {{ui:Renderizar imagem…}} tem uma lista **Motor** acima do Modo. Nossos dois motores, Rápido e o Traçador de caminhos, são o padrão e funcionam em qualquer lugar. Outras entradas salvam a cena como um pacote (o modelo como arquivo USD, mais um arquivo de configurações com os valores exatos dos materiais, as luminárias ligadas, o sol, o céu, a exposição e a câmera) para levar a outro programa. Uma imagem gerada por outro programa informa qual programa e qual versão a fizeram. Veja [Escolher qual programa desenha a imagem](topic:render-engines).
- **Abrir em outro programa.** A lista Motor pode salvar a cena como um arquivo USD, um arquivo glTF (`.glb`) ou uma pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio também pode iniciar o usdview ou o programa do próprio computador para o arquivo. Veja [Abrir a cena em outro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio grava a cena em um projeto do Unreal Engine e a mantém em dia a cada envio, em um só sentido. Suas próprias edições ficam em uma camada que o CadCraft nunca grava. Veja [Enviar a cena para um motor de jogo](topic:render-unreal).
- **Motores a partir de complementos.** Um complemento pode adicionar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua confirmação no Studio. Veja [Desenhar a imagem com outro programa](topic:render-other-program) e [Adicionar um motor de renderização com um complemento](topic:render-engine-addons).
- **Dizer a cena.** Diga ao seu assistente conectado "crepúsculo, chuva leve, árvores de outono, pessoas na praça" e o ModelCraft monta tudo em um passo: o sol se move para a data e a hora para que as sombras acompanhem, o céu muda, aparecem superfícies molhadas, e árvores e pessoas são colocadas como objetos reais em etiquetas que você pode ocultar, mover ou excluir. Hora do dia, data ou estação, e clima (limpo, nublado, neblina, chuva leve, chuva, tempestade) também funcionam sozinhos, e um pedido posterior altera a mesma cena. A neblina aparece na imagem em alta qualidade na placa de vídeo; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como riscos caindo.

**Materiais**

- **Um material a partir de uma foto.** Dê ao ModelCraft uma foto de uma superfície (uma parede, um piso, pedra) e ele cria um material de ladrilho: a iluminação sobre a foto é achatada, as bordas são feitas para se unir, e um mapa de cor, um mapa de rugosidade e um mapa de normais são calculados a partir da imagem. É um processamento de imagem simples da sua própria foto, sem nenhum modelo treinado. A rugosidade é uma estimativa. Uma foto simples, quadrada e de frente produz o melhor ladrilho; um padrão forte, como tijolos, pode mostrar um fantasma suave onde a junção é mesclada.

**Superfícies**

- **Superfícies de forma livre.** O painel {{ui:Superfícies}} cria curvas e superfícies NURBS sem recortes: curvas que passam por pontos, loft, reglada, extrusão, revolução, varreduras ao longo de um ou dois trilhos, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, correspondência e mesclagem. Cada aresta compartilhada é medida como G0, G1 ou G2 (vão, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que você pediu aparece no painel Problemas com uma correção **Corresponder**. As listras de zebra e as cores de curvatura são desenhadas a partir das superfícies exatas. Arquivos STEP e IGES saem e entram. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

**Terreno e cômodos**

- **Um esboço fotografado no chão.** {{ui:Arquivo}} › {{ui:Importar foto de um esboço…}} transforma uma foto de celular de um esboço feito à mão em arestas no chão, na escala que você informar: um grupo, com uma etiqueta para cada cor de caneta. O papel é encontrado e endireitado no seu computador, e nada é enviado para lugar nenhum. Veja [Modelar em uma planta de implantação](topic:site-plan).
- **Mobiliar um cômodo.** Selecione um piso e use {{ui:Organizar}} › {{ui:Mobiliar um ambiente…}}. Móveis de quarto, sala de estar, sala de jantar, cozinha, banheiro ou escritório são posicionados por regras, contra as paredes e longe de portas e janelas, em um grupo que você pode remover de uma vez. É um layout padrão para você revisar, não um projeto. Veja [Biblioteca inicial](topic:starter).

**Impressão 3D**

- **Cortes inclinados.** Dividir para impressão pode inclinar os seus cortes em até 60 graus, o que dá às peças mais área de colagem. Os conectores ficam perpendiculares ao corte. Veja [Dividir um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os achados da verificação de impressão 3D aparecem no painel Problemas com marcadores no modelo, e Reparar os corrige a partir dali. Veja [Suportes, espessura de parede, esvaziamento e reparo](topic:print-tools).

**Em todos os aplicativos**

- **Idiomas.** A ajuda e os aplicativos vêm em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque. Os idiomas que não são o inglês são rascunhos de máquina até que um falante nativo os revise, e os tópicos de ajuda podem continuar em inglês.
- **Dispositivos de entrada.** Um trackpad, uma caneta, um mouse 3D, um controle de jogo e controles MIDI podem operar os aplicativos, para todos eles ou para um só.
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › Linhas da barra de ferramentas define Quebrar (como antes), 2 linhas ou 1 linha. Uma barra que não cabe ganha rolagem lateral, em vez de tirar espaço do desenho. Quebrar continua sendo o padrão.
- **Grade de propriedades.** Os campos de luminárias do ModelCraft usam a grade compartilhada: categorias recolhíveis, colunas de rótulo e valor, e densidade Compacta. Aritmética digitada, como `2*450`, continua funcionando.
- **Problemas.** O painel Problemas (o botão de aviso na barra do aplicativo) é compartilhado por todos os aplicativos. No ModelCraft ele reúne a verificação de impressão e os avisos de continuidade das superfícies.
- **Ao vivo.** Uma sessão do TeamWork ao vivo mostra quem está em cada lugar. Veja [Modelar junto com o TeamWork ao vivo](topic:work-live).
- **Complementos.** Complementos podem adicionar motores de renderização, como acima.
- **Conecte sua IA.** O contrato de ferramentas e as verificações dos oito aplicativos passam, com 454 ferramentas no total. A conexão com um clique dentro do Studio, um conector hospedado para assistentes no navegador, sua própria chave dentro do Studio e um pacote publicado não são prometidos ainda. Os aplicativos não têm IA própria. Veja [Usar o ModelCraft com assistentes de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Seção de classes do DWG.** A seção de classes de um arquivo DWG era lida como o tipo errado, o que podia quebrar o arquivo na importação. Agora ela é lida corretamente, no ModelCraft e nos outros aplicativos que leem DWG.
- **Tablets na vertical.** O espaço de altura que sobra vai para a área de desenho, e o layout da folha começa em 760 pixels de largura ou menos. A folha de estilos do ModelCraft também tem a mudança.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem trocar de idioma enquanto estão em execução; antes, eram somente em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.

### Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. Em um Mac, clique com o botão direito e escolha {{ui:Abrir}}. As versões das lojas estão em espera, e a versão para iPad e iPhone não foi refeita para a 0.8.1.
- Outro programa desenhando a imagem sem um complemento de motor de renderização, câmeras panorâmicas ou estéreo e uma imagem de céu através de outro programa, e o plug-in que abre o palco do Unreal ainda não estão. Os arquivos são gravados; o plug-in não foi lançado e não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e recortes e sólidos ficam para depois.
- Imagens de outros programas não são idênticas pixel a pixel às nossas: apenas a câmera, o sol, as luminárias e a exposição coincidem.
- A correção da troca de idioma no Studio, da 0.8.1, não foi testada em todas as plataformas.

O restante está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades da versão 0.7](topic:whats-new-0-7).
