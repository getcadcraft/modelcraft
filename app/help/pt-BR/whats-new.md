---
title: Novidades na versão 0.8 e 0.8.1
summary: Uma escolha de motor de renderização com arquivos para outros programas, superfícies de forma livre NURBS com continuidade medida, uma cena descrita ao seu assistente, um material feito a partir de uma foto, uma foto de esboço sobre o terreno, ambientes mobiliados, cortes inclinados para impressão 3D e a verificação de impressão no painel Problemas.
keywords: novidades, notas de versão, changelog, mudanças, 0.8, 0.8.1, versão, novos recursos, motor de renderização, motor, abrir em, usd, gltf, unreal, motor de complemento, nurbs, superfícies, loft, varredura, continuidade, g0, g1, g2, zebra, step, iges, descrever a cena, cena, clima, hora do dia, estação, assistente, material a partir de uma foto, foto, foto de esboço, mobiliar, mobiliar um ambiente, cortes inclinados, inclinado, dividir, verificação de impressão, problemas, grade de propriedades, luminárias, idiomas, dispositivos de entrada, linhas da barra de ferramentas, dwg, live
from: e4989b17
---

Estas são as mudanças do ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), em comparação com a 0.7. A caixa de diálogo {{ui:Renderizar imagem…}} agora pode enviar a cena para outro programa, o painel {{ui:Superfícies}} cria superfícies de forma livre suaves, e um assistente que você conecta pode definir uma cena inteira com uma única frase.

## Novidades

### Renderização

- **Uma escolha de motor.** {{ui:Renderizar imagem…}} tem uma lista **Motor** acima de Modo. Nossos dois motores, Fast e Path tracer, são o padrão e funcionam em qualquer lugar. As outras opções salvam a cena como um pacote (o modelo como arquivo USD, mais um arquivo de configurações com os valores exatos dos materiais, as luminárias ligadas, o sol, o céu, a exposição e a câmera) para levar a outro programa. Uma imagem feita por outro programa informa qual programa e qual versão a criou. Veja [Escolha qual programa desenha a imagem](topic:render-engines).
- **Abrir em outro programa.** A lista Motor pode salvar a cena como um arquivo USD, um arquivo glTF (`.glb`) ou uma pasta de projeto Unreal (`.zip`), no navegador e no CadCraft Studio. No Studio, ela também pode iniciar o usdview ou o programa padrão do computador para o arquivo. Veja [Abra a cena em outro programa](topic:render-open-in).
- **Enviar para um motor de jogo a partir do Studio.** O Studio grava a cena em um projeto do Unreal Engine e a mantém sincronizada a cada envio, apenas em um sentido. Suas próprias edições ficam em uma camada que o CadCraft nunca grava. Veja [Envie a cena para um motor de jogo](topic:render-unreal).
- **Motores de complementos.** Um complemento pode adicionar um motor à lista. Um escrito em JavaScript desenha no navegador e no Studio; um que executa um programa precisa da sua permissão no Studio. Veja [Desenhe a imagem com outro programa](topic:render-other-program) e [Adicione um motor de renderização com um complemento](topic:render-engine-addons).
- **Descreva a cena.** Diga ao seu assistente conectado "anoitecer, chuva leve, árvores de outono, pessoas na praça" e o ModelCraft monta tudo em uma etapa: o sol se move para a data e a hora, para que as sombras acompanhem, o céu muda, superfícies molhadas aparecem, e árvores e pessoas são colocadas como objetos reais em etiquetas que você pode ocultar, mover ou excluir. Hora do dia, data ou estação, e clima (limpo, nublado, neblina, chuva leve, chuva, tempestade) também funcionam sozinhos, e um pedido posterior altera a mesma cena. A neblina aparece na imagem de alta qualidade feita pela placa de vídeo; os outros motores mostram o céu, a luz e as superfícies molhadas. A chuva não é desenhada como riscos caindo.

### Materiais

- **Um material a partir de uma foto.** Dê ao ModelCraft uma foto de uma superfície (uma parede, um piso, pedra) e ele cria um material de repetição: a iluminação da foto é nivelada, as bordas são ajustadas para se unir, e um mapa de cor, um mapa de rugosidade e um mapa normal são calculados a partir da imagem. É apenas processamento de imagem na sua própria foto, sem nenhum modelo treinado. A rugosidade é uma estimativa. Uma foto simples, quadrada e de frente gera o melhor ladrilho; um padrão forte, como tijolos, pode mostrar um leve fantasma onde a união é suavizada.

### Superfícies

- **Superfícies de forma livre.** O painel {{ui:Superfícies}} cria curvas e superfícies NURBS sem recorte: curvas por pontos, loft, regradas, extrusão, revolução, varreduras ao longo de um ou dois trilhos, superfícies a partir de uma rede de curvas, remendos a partir de quatro arestas, casar e mesclar. Cada aresta compartilhada é medida como G0, G1 ou G2 (lacuna, ângulo, salto de curvatura) nas superfícies exatas, e uma aresta pior do que você pediu aparece no painel {{ui:Problemas}} com uma correção **Match**. Listras zebra e cores de curvatura são desenhadas a partir das superfícies exatas. Arquivos STEP e IGES são exportados e importados. Veja [Superfícies de forma livre (NURBS)](topic:nurbs-surfaces).

### Terreno e ambientes

- **Uma foto de esboço sobre o terreno.** {{ui:Arquivo}} › {{ui:Importar foto de um esboço…}} transforma uma foto de celular de um esboço à mão em arestas sobre o terreno, na escala que você informar: um grupo, com uma etiqueta para cada cor de caneta. O papel é localizado e endireitado no seu computador, e nada é enviado para lugar nenhum. Veja [Modele sobre uma planta de implantação](topic:site-plan).
- **Mobiliar um ambiente.** Selecione um piso e use {{ui:Organizar}} › {{ui:Mobiliar um ambiente…}}. Mobiliário de quarto, sala de estar, sala de jantar, cozinha, banheiro ou escritório é posicionado por regras, junto às paredes e sem obstruir portas e janelas, em um grupo que você pode remover em uma única etapa. É um layout padrão para você revisar, não um projeto. Veja [Biblioteca inicial](topic:starter).

### Impressão 3D

- **Cortes inclinados.** Dividir para impressão pode inclinar os cortes em até 60 graus, o que dá mais área de colagem às peças. Os conectores ficam perpendiculares ao corte. Veja [Divida um modelo para impressão](topic:print-split).
- **A verificação de impressão em Problemas.** Os resultados da verificação de impressão 3D aparecem no painel {{ui:Problemas}} com marcadores no modelo, e Reparar corrige os itens a partir dali. Veja [Suportes, espessura de parede, ocos e reparo](topic:print-tools).

### Em todos os aplicativos

- **Idiomas.** A ajuda e os aplicativos estão disponíveis em 54 idiomas. Dez são novos: lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíle e uzbeque. Os idiomas diferentes do inglês são rascunhos de tradução automática até que um falante nativo os revise, e os tópicos de ajuda podem ainda estar em inglês.
- **Dispositivos de entrada.** Um trackpad, uma caneta, um mouse 3D, um controle de videogame e controles MIDI podem operar os aplicativos, para todos eles ou para um só.
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › Linhas da barra de ferramentas define Quebrar (como antes), 2 linhas ou 1 linha. Uma barra que não cabe rola para o lado em vez de tirar espaço do desenho. Quebrar continua sendo o padrão.
- **Grade de propriedades.** Os campos de luminárias do ModelCraft usam a grade compartilhada: categorias recolhíveis, colunas de rótulo e valor, e densidade Compacta. Cálculos digitados, como `2*450`, continuam funcionando.
- **Problemas.** O painel Problemas (o botão de aviso na barra do aplicativo) é compartilhado por todos os aplicativos. No ModelCraft, ele contém a verificação de impressão e os avisos de continuidade de superfície.
- **Live.** Uma sessão do Live TeamWork mostra quem está onde. Veja [Modele em conjunto com o Live TeamWork](topic:work-live).
- **Complementos.** Os complementos podem adicionar motores de renderização, como descrito acima.
- **Conecte sua IA.** O contrato de ferramentas e as verificações dos oito aplicativos passam, com 454 ferramentas no total. A conexão com um clique dentro do Studio, um conector hospedado para assistentes de navegador, sua própria chave dentro do Studio e um pacote publicado ainda não estão prometidos. Os aplicativos não contêm IA própria. Veja [Use o ModelCraft com assistentes de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Seção de classes do DWG.** A seção de classes de um arquivo DWG era lida como o tipo errado, o que podia danificar o arquivo na importação. Agora ela é lida corretamente, no ModelCraft e nos outros aplicativos que leem DWG.
- **Tablets na vertical.** A altura de grade que sobra vai para a área de desenho, e o layout da folha começa em 760 pixels de largura ou menos. A folha de estilos do ModelCraft também tem a mudança.
- **Idioma no Studio.** O CadCraft Studio e as edições empacotadas podem trocar de idioma enquanto estão em execução; antes, eram apenas em inglês. Isso ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.

## Ainda não nesta versão

- **Sem assinatura de código.** O Windows pode mostrar o SmartScreen: escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}. No Mac, clique com o botão direito e escolha {{ui:Abrir}}. As versões para loja estão suspensas, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- Outro programa desenhando a imagem sem um complemento de motor de renderização, câmeras panorâmicas ou estéreo, e uma imagem de céu feita por outro programa, além do plug-in que abre o palco do Unreal, ainda não existem. Os arquivos são gravados; o plug-in não foi lançado e não foi executado no Unreal.
- Superfícies de forma livre: G3 e classe A não são medidas nem garantidas, e recorte e sólidos virão depois.
- Imagens de outros programas não são idênticas pixel a pixel às nossas: apenas a câmera, o sol, as luminárias e a exposição coincidem.
- A correção da troca de idioma no Studio na 0.8.1 não foi testada em todas as plataformas.

Todo o resto está em [Ainda não implementado](topic:not-built-yet). Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).
