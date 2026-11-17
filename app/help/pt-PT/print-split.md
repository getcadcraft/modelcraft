---
title: Dividir um modelo grande para impressão
summary: Corte um modelo demasiado grande para a sua impressora em peças que caibam na mesa, com pinos, chavetas, caudas de andorinha, furos para cavilhas ou ímanes e o número da junta nas duas faces, e transfira todas as peças e uma folha de montagem num único zip.
keywords: impressão 3d, dividir, inclinado, corte inclinado, corte angular, oblíquo, divisor, cortar, demasiado grande, tamanho da mesa, volume de impressão, peças, partes, conectores, pinos, chavetas, cauda de andorinha, cavilha, íman, folga, tolerância, números de peça, montagem, vista explodida, zip, stl, 3mf, licença, chave USB, dongle
from: ee96ba77
---

Quando um modelo é maior do que a mesa da sua impressora, **Dividir para impressão** corta-o em peças que cabem, acrescenta conectores para que as peças se alinhem quando as juntar e grava o mesmo número nas duas faces de cada junta. Abra {{ui:Exportar}} › {{ui:Verificar para impressão 3D (STL ou 3MF)…}}; a linha **Ferramentas de impressão** da caixa tem {{ui:Dividir para impressão}}. Abre-se como um cartão sobre a vista.

Trabalha sobre o que é impresso: a seleção ou tudo o que está visível quando não há nada selecionado. O que se imprime tem de ser um sólido fechado; se a verificação encontrar furos, use primeiro [Reparar](topic:print-tools#repair).

Funciona no ModelCraft, no próprio computador: sem servidor de licenças, sem chave USB e sem que nada seja enviado.

## Como cortar

- **Caber na mesa, com o menor número de peças**: indique a largura, a profundidade e a altura da mesa (partem de {{ui:Definições}} › ModelCraft › Impressora 3D). O cartão indica quantas peças são necessárias e o tamanho de cada uma; corta o modelo em peças iguais, as menos possíveis que caibam. Uma peça pode ficar deitada nos ficheiros se for isso que a faz caber. Os conectores que sobressaem de uma peça contam para o seu tamanho.
- **Nos locais que indicar**: escolha o eixo a cortar e escreva onde, em milímetros desde a extremidade inferior do modelo, separados por vírgulas (`100, 200` faz três peças). **Inclinado** roda os cortes até 60° em torno de um dos outros dois eixos (por exemplo, um corte em Z inclinado em torno de X): cada corte inclinado passa pela linha média do modelo no seu local, dá às peças mais área de colagem e esconde melhor a junta numa superfície inclinada. Os conectores ficam perpendiculares ao corte.

Enquanto o cartão estiver aberto, os planos de corte são desenhados à volta do modelo como linhas tracejadas.

## Conectores

Cada local onde duas peças se tocam recebe conectores, colocados sozinhos onde há mais espaço: pelo menos a **espessura mínima da parede** mais a **folga** mais o seu próprio tamanho afastados do exterior, e suficientemente longe de qualquer outro corte para que dois furos nunca se encontrem. Numa face comprida, dois conectores são espaçados ao longo dela, para que as peças não possam rodar.

- **Pinos redondos**: um pino numa peça (com chanfro na ponta), um furo na outra.
- **Chavetas quadradas**: o mesmo, quadrado, para que uma peça só possa encaixar de uma forma.
- **Caudas de andorinha**: uma lingueta que desliza para dentro de uma ranhura pelo lado. Quando uma extremidade da ranhura encontraria outro corte, a cauda de andorinha fica mais curta e desliza a partir da extremidade aberta. As caudas de andorinha convêm a cortes numa só direção (uma fila de fatias); numa grelha, use pinos ou cavilhas.
- **Furos para cavilhas**: um furo em cada lado; os pinos também são impressos (no zip).
- **Cavidades para ímanes**: uma cavidade em cada lado para um íman redondo do diâmetro e da espessura que indicar. Verifique os polos antes de os colar.
- **Nenhum (cola)**.

A **folga** é a distância em cada lado entre um pino e o seu furo (0.2 mm para começar). É exata ao número que indicar: os furos redondos são feitos um pouco maiores para que as partes planas, e não os cantos, mantenham essa folga. Aumente-a se as peças da sua impressora saírem apertadas.

Quando uma junta não tem espaço para um conector (uma parede fina, uma área de contacto pequena), o cartão indica-o: cole essa junta.

## Números das peças

Com **Gravar os números das juntas nas duas faces** ativo, cada junta recebe o número das suas duas peças, como `3-4`, gravado 0.6 mm de profundidade nas duas faces, legível no sentido correto em cada uma. Os números começam com 5 mm de altura e diminuem para caber, até 2.5 mm; uma junta sem espaço para o seu número fica listada. As peças são numeradas de baixo para cima, a partir da camada inferior.

## Pré-visualizar, transferir, dividir o modelo

1. {{ui:Pré-visualizar}} corta o modelo e indica quantas peças, juntas e conectores existem, se cada peça passa a verificação para impressão 3D e cabe na mesa, e lista o tamanho de cada peça. Um anel assinala cada conector e número na vista.
2. {{ui:Transferir as peças (.zip)}} guarda um zip: um ficheiro por peça (STL ou 3MF, conforme escolher em **Ficheiros**), cada uma assente na mesa; os pinos das cavilhas; e a **folha de montagem**, uma imagem das peças separadas com os seus números (`assembly.svg` e `assembly.png`) e uma lista das peças e das juntas (`assembly.txt`).
3. {{ui:Dividir o modelo}} coloca as peças no modelo, no lugar dos grupos ou componentes selecionados, com os nomes da folha de montagem, num só passo: {{ui:Anular}} repõe o original. É preciso que estejam selecionados os grupos ou componentes a dividir; a transferência funciona com tudo o que pode ser impresso.

## Mover os conectores manualmente

Depois de uma pré-visualização, **Conectores manualmente** permite corrigir onde ficam os conectores:

- {{ui:Mover um}}: clique num anel vermelho na vista (fica verde) e depois clique onde deve ficar, no corte.
- {{ui:Adicionar um}}: clique na vista onde deve ficar um conector. Fica no plano de corte que o seu clique alcança, entre as duas peças aí.
- {{ui:Remover um}}: clique num anel vermelho para retirar esse conector.

Cada alteração é verificada de novo como as automáticas: um ponto demasiado perto do contorno, outro corte ou outro conector não é criado, e o cartão indica-o. {{ui:Automático outra vez}} esquece os pontos escolhidos. Mantêm-se enquanto o modelo, a seleção e os cortes se mantiverem como estão.

A pré-visualização mantém-se até que o modelo, a seleção ou uma definição mude; depois, o cartão pede que pré-visualize de novo.

:::note
Cada peça é verificada como a verificação para impressão 3D a verificaria antes de a transferir. O seu fatiador continua a decidir como cada peça é impressa: veja cada uma aí, e imprima primeiro uma junta para ver como a sua impressora lida com a folga.
:::
