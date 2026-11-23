---
title: Fatiar para uma impressora de resina
summary: Fatie a mesa de impressão da etapa de impressão para uma impressora de resina, deixe a peça oca e com suportes, examine as camadas, salve o arquivo da impressora e descubra sua exposição com o teste de exposição.
keywords: resina, sugerir inclinação, ventosa, força de descolamento, escoramento, impressão em resina, sla, msla, dlp, fatiador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, oco, furo de ventilação, base, suportes, teste de exposição, escada de exposição, calibração, camadas, complemento
from: 8cc12858
---

Os complementos de resina fatiam o que está na mesa de impressão em imagens de camadas para a tela da sua impressora e salvam o arquivo que a impressora lê. Eles são gratuitos, sem nada bloqueado, e ficam desligados até você ativá-los.

:::note
Nenhum arquivo foi carregado ainda em uma impressora real. Os arquivos foram lidos apenas pelos leitores próprios do CadCraft, e os suportes são novos. Verifique as camadas e faça a sua primeira impressão manualmente.
:::

## O que você vai fazer

Fatiar uma peça para resina, verificar as camadas, salvar o arquivo e copiá-lo para a sua impressora.

## Passos

1. Abra {{ui:Settings}} › {{ui:Add-ons}} e ative o complemento de fatiamento para resina e o complemento do formato de arquivo da sua impressora (Elegoo GOO, SL1, Chitubox ou Anycubic). Você também pode pressionar {{ui:Add resin printing}} no cartão da etapa de impressão.
2. Coloque a sua peça na mesa de impressão, como em [Colocar objetos na mesa de impressão](topic:print-stage), e depois escolha {{ui:Resin}} ao lado de **Imprimindo com**.
3. Em **Configurações de impressão em resina**, escolha a sua **Impressora** e a sua **Resina**. O cartão mostra o tamanho da tela em pixels. Esses são os tamanhos publicados pelo fabricante, então confira o da sua; você pode editá-los em Personalizado.
4. Defina **Altura da camada (mm)**, **Exposição (s)** e **Exposição da base (s)**. Os números de cada resina são apenas um ponto de partida.
5. Marque **Ocar a peça, com furo de ventilação** se quiser uma peça oca, e defina **Parede (mm)** e **Largura do furo (mm)**.
6. Marque **Suportes e uma base** e escolha a **Densidade dos suportes**: Leve, Média ou Alta.
7. Escolha o **Formato de arquivo**. Se o cartão disser que nenhum foi adicionado ainda, pressione o botão que diz Adicionar e o nome do formato.
8. Pressione {{ui:Preview layers}} e mova o controle deslizante **Camada**. Peças flutuantes são destacadas com um anel. A linha abaixo dele mostra as camadas, o tempo e a resina em mL, gramas e o custo.
9. Pressione {{ui:Save the print file}}, confira o resumo e pressione {{ui:Save}}. Copie o arquivo para a sua impressora.

## Inclinação, ventosas, reforços e a figura de descolamento

Estes quatro itens são estimativas a partir da forma da peça. Nenhum deles foi testado em uma impressora real, então trate cada um como uma dica e examine as camadas.

1. Pressione {{ui:Suggest a tilt}} em **Inclinação (graus)**. O CadCraft testa inclinações de 0 a 60 graus e escolhe a que tem a menor camada maior, a menor superfície em balanço e nenhuma ventosa. Ele define **Inclinação (graus)** e informa o que encontrou. Os pesos da pontuação são nossos, não de um fabricante de impressoras.
2. Depois de {{ui:Preview layers}}, um aviso indica cavidades que se abrem apenas em direção ao filme. Uma cavidade assim pode segurar sucção quando uma camada descola. Incline a peça ou adicione um furo. Bolsões mais estreitos que o tamanho da célula indicado no aviso não são detectados.
3. Com **Suportes e uma base** ativado, marque **Reforçar suportes altos** para adicionar travessas entre pilares altos e finos.
4. A linha abaixo da visualização mostra a maior camada em cm². Ela só mostra uma força se você informar uma **Tensão de descolamento medida** em **Camadas da base, elevação e velocidades**. Sem um número medido por você, ela mostra apenas a área.

## Encontre a sua exposição

1. Ative o complemento de teste de exposição em {{ui:Settings}} › {{ui:Add-ons}}.
2. Pressione {{ui:Put the test part on the bed}}.
3. Pressione {{ui:Save the exposure ladder}}. Você recebe um arquivo para cada exposição, em um zip.
4. Imprima cada arquivo com a mesma resina e guarde a exposição com os pilares finos mais nítidos e os furos abertos.

## Notas

- O fatiamento roda em segundo plano, então a página continua utilizável com uma mesa grande.
- Peças que não são sólidos fechados ficam de fora, e o cartão informa isso.
- Se a sua impressora recusar um arquivo, o cartão do formato tem opções para o que o formato deixa em aberto. Altere uma delas, salve de novo e nos diga qual funcionou.
- As versões 517 e 518 da Anycubic não são geradas.
