---
title: Fatiar para uma impressora de resina
summary: Fatie a base de impressão para uma impressora de resina, torne a peça oca e apoie-a, percorra as camadas, guarde o ficheiro da impressora e encontre a sua exposição com o teste de exposição.
keywords: resina, impressão em resina, sla, msla, dlp, fatiador, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, oco, furo de ventilação, raft, suportes, teste de exposição, escada de exposição, calibração, camadas, suplemento
from: 83c394e1
---

Os suplementos de resina fatiam o que está na base de impressão em imagens de camadas para o ecrã da sua impressora, e guardam o ficheiro que a impressora lê. São gratuitos, sem nada bloqueado, e ficam desligados até os ativar.

:::note
Ainda nenhum ficheiro foi carregado numa impressora real. Os ficheiros foram lidos apenas pelos leitores do próprio CadCraft, e os suportes são novos. Verifique as camadas e faça a sua primeira impressão manualmente.
:::

## O que vai fazer

Fatiar uma peça para resina, verificar as camadas, guardar o ficheiro e copiá-lo para a sua impressora.

## Passos

1. Abra {{ui:Definições}} › {{ui:Suplementos}} e ative o suplemento do fatiador de resina e o suplemento do formato de ficheiro da sua impressora (Elegoo GOO, SL1, Chitubox ou Anycubic). Também pode premir **Adicionar impressão em resina** no cartão da fase de impressão.
2. Coloque a peça na base de impressão como em [Colocar objetos na base de impressão](topic:print-stage) e depois escolha **Resina** ao lado de **Impressão com**.
3. Em **Definições de impressão em resina**, escolha a sua **Impressora** e a sua **Resina**. O cartão mostra o tamanho do ecrã em pixels. São os tamanhos publicados pelo fabricante, por isso confirme o do seu; pode editá-los em Personalizado.
4. Defina **Altura de camada (mm)**, **Exposição (s)** e **Exposição inferior (s)**. Os números de cada resina são apenas um ponto de partida.
5. Marque **Ocar, com furo de ventilação** se quiser uma peça oca, e defina a **Parede (mm)** e a **Largura do furo (mm)**.
6. Marque **Suportes e raft** e escolha a **Densidade dos suportes**: Leve, Média ou Forte.
7. Escolha o **Formato do ficheiro**. Se o cartão indicar que ainda não foi adicionado nenhum, prima o botão com Adicionar e o nome do formato.
8. Prima {{ui:Pré-visualizar camadas}} e mova o cursor **Camada**. As peças flutuantes ficam assinaladas com um anel. A linha por baixo indica as camadas, o tempo e a resina em mL, gramas e custo.
9. Prima {{ui:Guardar o ficheiro de impressão}}, verifique o resumo e prima {{ui:Guardar}}. Copie o ficheiro para a sua impressora.

## Encontrar a sua exposição

1. Ative o suplemento de teste de exposição em {{ui:Definições}} › {{ui:Suplementos}}.
2. Prima {{ui:Colocar a peça de teste na base de impressão}}.
3. Prima {{ui:Guardar a escada de exposição}}. Obtém um ficheiro para cada exposição, num zip.
4. Imprima cada ficheiro com a mesma resina, e fique com a exposição em que os pequenos pilares finos e os furos abertos estão mais nítidos.

## Notas

- O fatiamento corre em segundo plano, por isso a página continua utilizável numa placa grande.
- As peças que não são sólidos fechados ficam de fora, e o cartão indica-o.
- Se a sua impressora recusar um ficheiro, o cartão do formato tem opções para aquilo que o formato deixa em aberto. Altere uma, guarde de novo e diga-nos qual funcionou.
- As versões 517 e 518 da Anycubic não são escritas.
