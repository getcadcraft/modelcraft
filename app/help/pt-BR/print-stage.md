---
title: Colocar itens na mesa de impressão e enviá-los a uma impressora
summary: Adicione itens da Biblioteca ou o seu próprio modelo à mesa da impressora, organize-os, veja as camadas fatiadas e envie a impressão por USB ou pela rede, ou salve o G-code, sem exportar um STL antes.
keywords: etapa de impressão, impressão 3D, impressora, mesa, enviar para impressora 3D, fatiador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, organizar, ajustar tudo, visualização de camadas, preenchimento, suportes, filamento, pla, petg, complemento, complemento de impressão 3D
from: abcf5d7e
---

A {{ui:Etapa de impressão}} organiza os itens na mesa da sua impressora, fatia-os e os envia para a impressora. Você não precisa exportar um arquivo antes. Ela pertence ao complemento de Impressão 3D, que vem ativado por padrão.

:::note
Nada foi impresso ainda em uma impressora real com isto. O fatiador é novo: acompanhe as primeiras camadas da sua primeira impressão e use a visualização de camadas antes de enviar.
:::

## O que você vai fazer

Colocar um modelo na mesa, conferir se ele cabe, ver as camadas fatiadas e enviá-lo para uma impressora ou salvar o G-code.

## Passos

1. Clique em {{ui:Etapa de impressão}} na barra de ferramentas. Um cartão abre sobre a vista e um contorno tracejado mostra a sua mesa.
2. Em **Adicionar da Biblioteca**, digite um nome na caixa de pesquisa, pressione {{ui:Pesquisar}} e pressione {{ui:Add}} em um resultado. O item vai para a mesa em tamanho real ou reduzido para caber. Tudo o que você já tenha desenhado ou importado e que esteja visível na vista também fica na mesa.
3. Em **Na mesa**, confira o tamanho de cada item. Um item marcado como **Fora da mesa** precisa ser movido. Mova, gire e escale os itens na vista com as ferramentas habituais.
4. Pressione {{ui:Organizar na mesa}} para espalhar os itens, ou {{ui:Ajustar tudo na mesa}} para reduzi-los até que caibam.
5. Em **Sua impressora**, escolha o tamanho da **Mesa** ou um dos perfis de impressora.
6. Em **Configurações de impressão**, escolha o **Material**, a **Qualidade** e o **Preenchimento %**, e marque **Adicionar suportes em balanços** se a forma precisar deles.
7. Pressione {{ui:Visualizar camadas}} e mova o controle deslizante **Camada** para ver as camadas fatiadas. Se depois você mudar a etapa ou as configurações, pressione {{ui:Visualizar camadas}} de novo.
8. Em **Conexão**, escolha {{ui:Cabo USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ou {{ui:PrusaLink}}. Para USB, pressione {{ui:Conectar}}. Para uma impressora de rede, digite o seu **Endereço** (e a **chave de API**, se ela pedir) e pressione {{ui:Testar a conexão}}.
9. Pressione {{ui:Enviar para impressora 3D}}. O cartão pergunta se a mesa está livre e se o material certo está carregado, e mostra o tempo, o material e as temperaturas. Confirme para enviar.

Você recebe uma mensagem informando que a impressora está iniciando. {{ui:Parar a impressão}} desliga os aquecedores, o ventilador e os motores. Se você quer apenas um arquivo, pressione {{ui:Salvar o G-code em vez disso}}.

## Observações

- USB precisa de Chrome ou Edge em um computador, e a página deve permanecer aberta até o fim da impressão. Fechá-la interrompe o fluxo.
- Uma impressora de rede precisa permitir este site (no Moonraker, adicione-o em `cors_domains`; no OctoPrint, ative o CORS e copie uma chave de API). O navegador pode pedir permissão para acessar dispositivos da sua rede.
- Nada se conecta nem envia sem o seu clique.
- A lista de fatiadores fica em **Fatiador**. {{ui:CadCraft básico (incluído, mais rápido)}} já vem embutido. Kiri:Moto, PrusaSlicer, OrcaSlicer e a Bambu Lab P2S são complementos próprios, que você ativa no cartão ou em {{ui:Configurações}} › {{ui:Complementos}}. PrusaSlicer e OrcaSlicer usam a sua própria cópia e funcionam a partir do CadCraft Studio em um computador.
- Peças que não são sólidos fechados ficam de fora, e o cartão informa quanto da forma isso representa.
- Para impressoras de resina, veja [Fatiar para uma impressora de resina](topic:resin-printing). Para verificar ou reparar um modelo antes, veja [Suportes, espessura de parede, esvaziamento e reparo](topic:print-tools).
