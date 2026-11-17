---
title: Colocar peças na mesa de impressão e enviá-las para uma impressora
summary: Acrescente itens da Biblioteca ou o seu próprio modelo à mesa da impressora, organize-os, veja as camadas fatiadas e envie a impressão por USB ou pela rede, ou guarde o G-code, sem exportar primeiro um STL.
keywords: fase de impressão, impressão 3d, impressora, mesa, enviar para impressora 3d, fatiador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, organizar, ajustar tudo, pré-visualização de camadas, preenchimento, suportes, filamento, pla, petg, suplemento, suplemento de impressão 3D
from: abcf5d7e
---

A {{ui:Fase de impressão}} dispõe as peças na mesa da sua impressora, fatia-as e envia-as para a impressora. Não é preciso exportar primeiro um ficheiro. Pertence ao suplemento de Impressão 3D, que vem ativado por predefinição.

:::note
Ainda não se imprimiu nada numa impressora real com isto. O fatiador é novo: observe as primeiras camadas da sua primeira impressão e use a pré-visualização de camadas antes de enviar.
:::

## O que vai fazer

Coloque um modelo na mesa, verifique se cabe, veja as camadas fatiadas e envie-o para uma impressora ou guarde o G-code.

## Passos

1. Clique em {{ui:Fase de impressão}} na barra de ferramentas. Abre-se um cartão sobre a vista e um contorno a tracejado mostra a mesa.
2. Em **Adicionar a partir da Biblioteca**, escreva um nome na caixa de pesquisa, prima {{ui:Pesquisar}} e prima {{ui:Acrescentar}} num resultado. O item cai na mesa à escala real, ou reduzido para caber. Tudo o que já desenhou ou importou e que é visível na vista também fica na mesa.
3. Em **Na mesa**, verifique o tamanho de cada item. Um item marcado como **Fora da mesa** precisa de ser movido. Mova, rode e escale as peças na vista com as ferramentas habituais.
4. Prima {{ui:Organizar na mesa}} para espalhar os itens, ou {{ui:Ajustar tudo à mesa}} para os reduzir até caberem.
5. Em **A sua impressora**, escolha o tamanho da **Mesa** ou um dos perfis de impressora.
6. Em **Definições de impressão**, escolha o **Material**, a **Qualidade** e a **% de preenchimento**, e marque **Acrescentar suportes em saliências** se a forma precisar deles.
7. Prima {{ui:Pré-visualizar camadas}} e mova o cursor **Camada** para ver as camadas fatiadas. Se depois alterar a fase ou as definições, prima {{ui:Pré-visualizar camadas}} outra vez.
8. Em **Ligação**, escolha {{ui:Cabo USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ou {{ui:PrusaLink}}. Para USB, prima {{ui:Ligar}}. Para uma impressora em rede, escreva o seu **Endereço** (e a **chave da API**, se a pedir) e prima {{ui:Testar a ligação}}.
9. Prima {{ui:Enviar para impressora 3D}}. O cartão pergunta se a mesa está livre e se o material certo está carregado, e mostra o tempo, o material e as temperaturas. Confirme para enviar.

Recebe uma mensagem a dizer que a impressora está a arrancar. {{ui:Parar a impressão}} desliga os aquecedores, a ventoinha e os motores. Se só quiser um ficheiro, prima {{ui:Guardar o G-code em vez disso}}.

## Notas

- O USB precisa do Chrome ou do Edge num computador, e a página tem de se manter aberta até a impressão terminar. Fechá-la interrompe o fluxo.
- Uma impressora em rede tem de permitir este site (no Moonraker, acrescente-o a `cors_domains`; no OctoPrint, ative o CORS e copie uma chave da API). O seu navegador pode pedir para aceder a dispositivos da sua rede.
- Nada se liga nem envia sem o seu clique.
- A lista de fatiadores está em **Fatiador**. {{ui:CadCraft básico (incluído, o mais rápido)}} vem integrado. O Kiri:Moto, o PrusaSlicer, o OrcaSlicer e a Bambu Lab P2S são suplementos próprios que ativa no cartão ou em {{ui:Definições}} › {{ui:Suplementos}}. O PrusaSlicer e o OrcaSlicer usam a sua própria cópia e funcionam a partir do CadCraft Studio num computador.
- As peças que não são sólidos fechados ficam de fora, e o cartão indica quanto da forma isso representa.
- Para impressoras de resina, veja [Fatiar para uma impressora de resina](topic:resin-printing). Para verificar ou reparar um modelo primeiro, veja [Suportes, espessura da parede, esvaziamento e reparação](topic:print-tools).
