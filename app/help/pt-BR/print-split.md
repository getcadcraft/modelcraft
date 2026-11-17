---
title: Dividir um modelo grande para impressão
summary: Corte um modelo grande demais para a mesa da sua impressora em peças que caibam nela, com pinos, chaves, rabos de andorinha, furos para cavilha ou ímã e o número da junta nas duas faces, e baixe todas as peças e uma folha de montagem em um único zip.
keywords: impressão 3D, dividir, inclinado, corte inclinado, corte angular, oblíquo, divisor, cortar, grande demais, tamanho da mesa, volume de impressão, peças, partes, conectores, pinos, chaves, rabo de andorinha, cavilha, ímã, folga, tolerância, números das peças, montagem, vista explodida, zip, stl, 3mf, licença, licenciamento, chave USB, dongle
from: ee96ba77
---

Quando um modelo é maior que a mesa da sua impressora, **Dividir para impressão** corta o modelo em peças que cabem, adiciona conectores para que as peças se alinhem ao serem montadas e grava o mesmo número nas duas faces de cada junta. Abra {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; na linha **Ferramentas de impressão** da caixa de diálogo há {{ui:Split for printing}}. Ela abre como um cartão sobre a vista.

Ela trabalha sobre o que será impresso: a seleção ou tudo o que está visível quando nada está selecionado. O que for impresso precisa ser um sólido fechado; se a verificação encontrar furos, use primeiro [Reparar](topic:print-tools#repair).

Funciona no ModelCraft, no seu computador: sem servidor de licenças, sem chave USB e sem envio de nada.

## Como cortar

- **Caber na mesa, menor número de peças**: informe a largura, a profundidade e a altura da mesa (elas começam em {{ui:Settings}} › ModelCraft › Impressora 3D). O cartão informa quantas peças são necessárias e o tamanho de cada uma; ele corta o modelo em peças iguais, na menor quantidade que caiba. Uma peça pode ficar deitada nos arquivos se isso for o que a faz caber. Os conectores que saem de uma peça contam para o tamanho dela.
- **Em posições informadas**: escolha o eixo em que cortar e digite onde, em milímetros a partir da extremidade inferior do modelo, separando com vírgulas (`100, 200` faz três peças).
  **Inclinado** gira os cortes em até 60° em torno de um dos outros dois eixos (um corte no eixo Z inclinado em torno de X, por exemplo): cada corte inclinado passa pela linha média do modelo na sua posição, dá às peças mais área de colagem e oculta melhor a junta em uma superfície inclinada. Os conectores ficam perpendiculares ao corte.

Enquanto o cartão está aberto, os planos de corte aparecem ao redor do modelo como linhas tracejadas.

## Conectores

Cada ponto em que duas peças se tocam recebe conectores, posicionados automaticamente onde há mais espaço: pelo menos a **parede mínima** mais a **folga** mais o próprio tamanho afastados da parte externa, e longe o bastante de qualquer outro corte para que dois furos nunca se encontrem. Em uma face longa, dois conectores são distribuídos ao longo dela, para que as peças não possam girar.

- **Pinos redondos**: um pino em uma peça (com a ponta chanfrada) e um furo na outra.
- **Chaves quadradas**: igual, mas com seção quadrada, para que a peça só possa encaixar de um jeito.
- **Rabos de andorinha**: uma lingueta que desliza para dentro de um rasgo pela lateral. Quando uma extremidade do rasgo encontraria outro corte, o rabo de andorinha para antes e desliza pela extremidade aberta. Rabos de andorinha servem para cortes em uma só direção (uma fileira de fatias); em uma grade, use pinos ou cavilhas.
- **Furos para cavilha**: um furo em cada lado; os pinos também são impressos (no zip).
- **Alojamentos para ímã**: um alojamento em cada lado para um ímã redondo do diâmetro e da espessura que você informar. Confira os polos antes de colar.
- **Nenhum (cola)**.

A **folga** é o vão em cada lado entre um pino e o seu furo (0.2 mm para começar). Ela corresponde ao valor que você informa: os furos redondos são feitos um pouco maiores para que sejam as laterais planas, e não os cantos, que mantêm essa folga. Aumente-a se as peças da sua impressora saírem apertadas.

Quando uma junta não tem espaço para um conector (uma parede fina, uma área de contato pequena), o cartão avisa: cole essa junta.

## Números das peças

Com **Gravar os números das juntas nas duas faces** ativado, cada junta recebe o número das suas duas peças, como `3-4`, gravado com 0.6 mm de profundidade nas duas faces, legível no sentido correto em cada uma. Os números começam com 5 mm de altura e diminuem para caber, até 2.5 mm; uma junta sem espaço para o seu número aparece na lista. As peças são numeradas da camada inferior para cima.

## Visualizar, baixar, dividir o modelo

1. {{ui:Preview}} corta o modelo e informa quantas peças, juntas e conectores existem, se cada peça passa na verificação de impressão 3D e cabe na mesa, e lista o tamanho de cada peça. Um anel marca cada conector e cada número na vista.
2. {{ui:Download the pieces (.zip)}} salva um zip: um arquivo por peça (STL ou 3MF, conforme você escolher em **Arquivos**), cada uma apoiada na mesa; os pinos das cavilhas; e a **folha de montagem** — uma imagem das peças separadas com os seus números (`assembly.svg` e `assembly.png`) e uma lista das peças e juntas (`assembly.txt`).
3. {{ui:Split the model}} coloca as peças no modelo no lugar dos grupos ou componentes selecionados, com os nomes da folha de montagem, em uma única etapa: {{ui:Undo}} restaura o original. É preciso ter selecionados os grupos ou componentes a dividir; o download funciona com tudo o que pode ser impresso.

## Mover os conectores manualmente

Depois de uma visualização, **Conectores manuais** permite corrigir onde os conectores ficam:

- {{ui:Move one}}: clique em um anel vermelho na vista (ele fica verde) e depois clique onde ele deve ficar no corte.
- {{ui:Add one}}: clique na vista onde um conector deve ficar. Ele vai para o plano de corte que o seu clique alcança, entre as duas peças ali.
- {{ui:Remove one}}: clique em um anel vermelho para remover esse conector.

Cada alteração é verificada novamente como as automáticas: um ponto muito próximo do contorno, outro corte ou outro conector não é criado, e o cartão informa isso. {{ui:Automatic again}} esquece as suas posições. Elas são mantidas enquanto o modelo, a seleção e os cortes permanecerem como estão.

Uma visualização permanece até que o modelo, a seleção ou uma configuração mude; depois disso, o cartão pede que você visualize novamente.

:::note
Cada peça é verificada da mesma forma que a verificação de impressão 3D a verificaria antes do download. O seu fatiador ainda decide como cada peça é impressa: confira cada uma nele e imprima primeiro uma junta, para ver como a sua impressora lida com a folga.
:::
