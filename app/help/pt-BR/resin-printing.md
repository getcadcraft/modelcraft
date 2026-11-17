---
title: Fatiar para uma impressora de resina
summary: Fatie a mesa de impressão para uma impressora de resina, deixe a peça oca e com suportes, observe as camadas, salve o arquivo da impressora e encontre sua exposição com o teste de exposição.
keywords: resina, impressão em resina, sla, msla, dlp, fatiador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, oco, furo de ventilação, base, suportes, teste de exposição, escada de exposição, calibração, camadas, complemento
from: 83c394e1
---

Os complementos de resina fatiam o que está na mesa de impressão em imagens de camadas para a tela da sua impressora, e salvam o arquivo que a impressora lê. São gratuitos, sem nada bloqueado, e ficam desligados até você os ativar.

:::note
Nenhum arquivo ainda foi carregado em uma impressora real. Os arquivos foram lidos novamente apenas pelos leitores próprios do CadCraft, e os suportes são novos. Verifique as camadas e faça sua primeira impressão manualmente.
:::

## O que você vai fazer

Fatiar uma peça para resina, verificar as camadas, salvar o arquivo e copiá-lo para a sua impressora.

## Passos

1. Abra {{ui:Settings}} › {{ui:Add-ons}} e ative o complemento de fatiamento de resina e o complemento do formato de arquivo da sua impressora (Elegoo GOO, SL1, Chitubox ou Anycubic). Você também pode pressionar {{ui:Add resin printing}} no cartão da etapa de impressão.
2. Coloque a sua peça na mesa de impressão, como em [Colocar coisas na mesa de impressão](topic:print-stage), depois escolha **Resina** ao lado de **Impressão com**.
3. Em **Configurações de impressão em resina**, escolha a sua **Impressora** e a sua **Resina**. O cartão mostra o tamanho da tela em pixels. Esses são os tamanhos publicados pelos fabricantes; confira o seu, e você pode editá-los em Personalizado.
4. Defina **Altura da camada (mm)**, **Exposição (s)** e **Exposição da base (s)**. Os números de cada resina são apenas um ponto de partida.
5. Marque **Deixar oca, com um furo de ventilação** se quiser uma peça oca, e defina a **Parede (mm)** e a **Largura do furo (mm)**.
6. Marque **Suportes e base** e escolha a **Densidade dos suportes**: Leve, Média ou Pesada.
7. Escolha o **Formato de arquivo**. Se o cartão disser que nenhum ainda foi adicionado, pressione o botão com "Adicionar" e o nome do formato.
8. Pressione {{ui:Preview layers}} e mova o controle deslizante **Camada**. Peças flutuantes ficam marcadas com um círculo. A linha abaixo dele informa as camadas, o tempo e a resina em mL, gramas e custo.
9. Pressione {{ui:Save the print file}}, confira o resumo e pressione {{ui:Save}}. Copie o arquivo para a sua impressora.

## Encontrar sua exposição

1. Ative o complemento de teste de exposição em {{ui:Settings}} › {{ui:Add-ons}}.
2. Pressione {{ui:Put the test part on the bed}}.
3. Pressione {{ui:Save the exposure ladder}}. Você recebe um arquivo para cada exposição, em um zip.
4. Imprima cada arquivo com a mesma resina e mantenha a exposição em que os pilares finos e os furos abertos saem mais nítidos.

## Notas

- O fatiamento roda em segundo plano, então a página continua disponível mesmo com uma mesa grande.
- Peças que não são sólidos fechados ficam de fora, e o cartão informa isso.
- Se a sua impressora recusar um arquivo, o cartão do formato tem opções para o que o formato deixa em aberto. Altere uma, salve de novo e nos diga qual funcionou.
- As versões 517 e 518 da Anycubic não são gravadas.
