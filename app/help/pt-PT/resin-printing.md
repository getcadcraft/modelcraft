---
title: Fatiar para uma impressora de resina
summary: Fatie a base de impressão da fase de impressão para uma impressora de resina, esvazie e apoie a peça, percorra as camadas, guarde o ficheiro da impressora e encontre a sua exposição com o teste de exposição.
keywords: resina, sugerir uma inclinação, ventosa, força de descolamento, escoramento, impressão em resina, sla, msla, dlp, fatiador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, oco, furo de ventilação, raft, suportes, teste de exposição, escada de exposição, calibração, camadas, suplemento
from: 8cc12858
---

Os suplementos de resina fatiam o que está na base de impressão em imagens de camadas para o ecrã da sua impressora, e guardam o ficheiro que a impressora lê. São gratuitos, sem nada bloqueado, e ficam desligados até os ligar.

:::note
Ainda nenhum ficheiro foi usado numa impressora real. Os ficheiros foram lidos apenas pelos leitores do próprio CadCraft, e os suportes são novos. Verifique as camadas e faça a primeira impressão manualmente.
:::

## O que vai fazer

Fatie uma peça para resina, verifique as camadas, guarde o ficheiro e copie-o para a sua impressora.

## Passos

1. Abra {{ui:Definições}} › {{ui:Suplementos}} e ligue o suplemento de fatiador de resina e o suplemento do formato de ficheiro da sua impressora (Elegoo GOO, SL1, Chitubox ou Anycubic). Também pode premir {{ui:Adicionar impressão em resina}} no cartão da fase de impressão.
2. Coloque a peça na base de impressão, como em [Colocar coisas na base de impressão](topic:print-stage), e escolha {{ui:Resina}} ao lado de **Impressão com**.
3. Em **Definições de impressão em resina**, escolha a sua **Impressora** e a sua **Resina**. O cartão mostra o tamanho do ecrã em pixels. São os tamanhos publicados pelo fabricante, por isso confirme o seu; pode editá-los em Personalizado.
4. Defina **Altura da camada (mm)**, **Exposição (s)** e **Exposição da base (s)**. Os números de cada resina são apenas um ponto de partida.
5. Marque **Tornar oca, com furo de ventilação** se quiser uma peça oca, e defina **Parede (mm)** e **Largura do furo (mm)**.
6. Marque **Suportes e raft** e escolha a **Densidade dos suportes**: Leve, Média ou Pesada.
7. Escolha o **Formato de ficheiro**. Se o cartão indicar que ainda não foi adicionado nenhum, prima o botão com a indicação Adicionar e o nome do formato.
8. Prima {{ui:Pré-visualizar camadas}} e mova o cursor **Camada**. As peças soltas são assinaladas com um anel. A linha por baixo indica as camadas, o tempo e a resina em mL, em gramas e o custo.
9. Prima {{ui:Guardar o ficheiro de impressão}}, verifique o resumo e prima {{ui:Guardar}}. Copie o ficheiro para a sua impressora.

## Inclinação, ventosas, escoras e o valor de descolamento

Estes quatro são estimativas a partir da forma da peça. Nenhum foi testado numa impressora real, por isso trate cada um como uma sugestão e veja as camadas.

1. Prima {{ui:Sugerir uma inclinação}} em **Inclinação (graus)**. O CadCraft testa inclinações de 0 a 60 graus e escolhe a que tem a menor camada máxima, a menor superfície em balanço e nenhuma ventosa. Define **Inclinação (graus)** e indica o que encontrou. Os pesos da pontuação são nossos, não de um fabricante de impressoras.
2. Depois de {{ui:Pré-visualizar camadas}}, um aviso indica as cavidades que só se abrem para a película. Uma cavidade assim pode reter sucção quando uma camada se descola. Incline a peça ou acrescente um furo. As bolsas mais estreitas do que o tamanho de célula indicado no aviso não são detetadas.
3. Com **Suportes e raft** ligado, marque **Reforçar os suportes altos** para acrescentar travessas entre pilares altos e finos.
4. A linha por baixo da pré-visualização indica a maior camada em cm2. Só mostra uma força se introduzir uma **Tensão de descolamento medida** em **Camadas da base, elevação e velocidades**. Sem um número medido por si, mostra apenas a área.

## Encontre a sua exposição

1. Ligue o suplemento de teste de exposição em {{ui:Definições}} › {{ui:Suplementos}}.
2. Prima {{ui:Colocar a peça de teste na base de impressão}}.
3. Prima {{ui:Guardar a escada de exposição}}. Obtém-se um ficheiro por cada exposição, num zip.
4. Imprima cada ficheiro com a mesma resina e escolha a exposição com os pilares finos e os furos abertos mais nítidos.

## Notas

- O fatiamento corre em segundo plano, por isso a página continua utilizável numa placa grande.
- As peças que não são sólidos fechados ficam de fora, e o cartão indica-o.
- Se a impressora recusar um ficheiro, o cartão do formato tem opções para o que o formato deixa em aberto. Altere uma, guarde de novo e diga-nos qual funcionou.
- As versões 517 e 518 da Anycubic não são escritas.
