---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que corresponda ao modelador que você já conhece, dê a qualquer comando sua própria tecla, mova comandos entre menus e defina o que a roda e os botões central e direito do mouse fazem.
keywords: estilo de menu, menus, barra de menus, barra de ferramentas, atalhos de teclado, teclas de atalho, teclas, estilo de teclas, mapa de teclas, personalizar, remapear, redefinir atalho, mouse, roda, inverter, direção do zoom, botão central, botão direito, orbitar, pan, exportar, importar, alternar, familiar, push-pull, modelador
from: e56fce3d
---

As ferramentas do ModelCraft são as mesmas, qualquer que seja o caminho para chegar a elas. Um **estilo de menu** decide onde elas ficam na tela, como são chamadas ali e quais teclas as acionam. Escolha um em {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; a mudança é imediata, e este navegador a lembra.

## Os estilos

| Estilo | O que você obtém |
|---|---|
| {{ui:ModelCraft}} | A barra de ferramentas própria do ModelCraft (Arquivo, Desenhar, Modificar, Organizar, Editar, Câmera) e suas teclas de uma letra: {{key:L}} linha, {{key:R}} retângulo, {{key:P}} push/pull, {{key:M}} mover, {{key:Q}} girar, {{key:S}} escala, {{key:E}} borracha, {{key:O}} orbitar. O início. |
| {{ui:Push-pull}} | Uma barra de menus (Arquivo, Editar, Exibir, Câmera, Desenhar, Ferramentas, Janela) sobre uma linha com as ferramentas principais, com as mesmas teclas de uma letra. |
| {{ui:Modeler}} | Uma barra de menus no cabeçalho (Arquivo, Editar, Exibir, Selecionar, Adicionar, Objeto, Malha) e as teclas dos modeladores de malhas: {{key:W}} selecionar, {{key:G}} mover, {{key:R}} girar e {{key:S}} escalar a seleção de uma vez ({{key:X}}, {{key:Y}} ou {{key:Z}} trava um eixo enquanto ela se move), {{key:E}} push/pull, {{key:B}} retângulo, {{key:X}} excluir, {{key:A}} selecionar tudo, {{key:Alt+A}} nenhuma, {{key:Shift+D}} duplicar, {{key:Mod+G}} grupo, {{key:H}} ocultar. O botão central orbita; {{key:Shift}} e o botão central fazem pan, {{key:Mod}} e o botão central dão zoom; o botão direito cancela o que uma ferramenta estiver fazendo. |
| {{ui:Beginner}} | Uma faixa de opções cuja guia {{ui:Criar}} tem poucos botões grandes: formas para soltar, furos, mover, girar e dimensionar, alinhar, {{ui:Group}} (furos recortados nas formas) e a verificação para impressão 3D; todas as outras ferramentas ficam na guia {{ui:More tools}}. O botão direito orbita, o botão central faz pan. Veja [O estilo Iniciante](topic:beginner). |

O estilo de teclas que você pode conhecer por {{ui:Keys}} no canto inferior direito da vista e por {{ui:Edit}} › {{ui:More}} é a mesma escolha: escolher as teclas do modelador ali escolhe o estilo {{ui:Modeler}}, e escolher as teclas de push-pull o deixa para o estilo {{ui:ModelCraft}}. Se você tiver escolhido as teclas do modelador em uma versão anterior, o ModelCraft abre no estilo {{ui:Modeler}} uma vez, por conta própria.

:::tip
Uma tecla que pertence às teclas de push-pull, mas que o seu estilo atribui a outro comando, não faz nada, e a linha de status informa para onde foi o comando ("Em Modelagem, Empurrar/puxar é E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm o seu significado, os números sempre vão para a caixa de valor, e enquanto uma ferramenta move algo, as teclas próprias dela prevalecem.
:::

## Faça do seu jeito

1. Escolha o estilo mais próximo do que você quer e clique em {{ui:Customize…}}.
2. Em {{ui:Keys and menus}}, encontre um comando (a caixa de busca ajuda). Clique em {{ui:Add a key}} e pressione a tecla. Clique em uma tecla para removê-la.
3. Com uma barra de menus, {{ui:Where it sits}} move o comando para outro menu, ou para {{ui:Keys only}}.
4. Em {{ui:Mouse}}, defina a roda e o que os botões fazem na vista 3D.
5. Dê um nome e clique em {{ui:Save}}.

Salvar um estilo embutido cria a sua própria cópia ("Meu estilo"); o embutido nunca muda. Sua cópia lê as teclas do jeito que o estilo do qual partiu as lê: uma feita a partir de {{ui:Modeler}} mantém as teclas de mover, girar e escalar funcionando ao mesmo tempo.

## Mouse

- **Roda do mouse**: {{ui:Scroll up zooms in}} (o início) ou {{ui:Scroll up zooms out}}, e a velocidade. Um pinçamento no trackpad sempre dá zoom no sentido em que os dedos se movem.
- **Arrastar na vista 3D**: {{ui:Each view's own}} mantém os botões do ModelCraft (o botão central orbita; o botão direito, ou {{key:Shift}} com o botão central, faz pan). Ou defina os botões central e direito para orbitar, fazer pan, dar zoom ou nada; {{key:Shift}} com o botão troca orbitar e pan. O botão esquerdo sempre pertence à ferramenta em uso.
- **Trackpads**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} ainda decide se dois dedos orbitam (trackpad) ou dão zoom (mouse). Veja [Orbitar, fazer pan e dar zoom](topic:orbit-pan-zoom).

## Leve com você

{{ui:Export}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Import…}} adiciona um, vindo de outro computador ou de um colega. Um arquivo importado só pode apontar para os comandos do próprio ModelCraft: o que houver de outro tipo nele é deixado de fora e contado na linha de status. {{ui:Delete this style}} remove um dos seus.

:::note
Estas configurações ficam neste navegador. {{ui:Use this style in every app}}, sob os cartões de estilo, faz todos os aplicativos abrirem no estilo correspondente: {{ui:Push-pull}} corresponde aos estilos de barra de menus dos outros aplicativos. {{ui:Modeler}} não tem equivalente nos outros aplicativos, então continua sendo uma escolha do ModelCraft.
:::

Relacionados: [Ações de teclas e mouse](topic:keyboard) · [Configurações do ModelCraft](topic:settings) · [Vindo de outros modeladores](topic:coming-from)
