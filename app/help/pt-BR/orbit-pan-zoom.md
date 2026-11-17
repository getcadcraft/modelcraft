---
title: Órbita, pan e zoom
summary: Mova a câmera ao redor do modelo com mouse, trackpad, tela sensível ao toque ou teclado, e vá para as vistas padrão.
keywords: órbita, pan, zoom, pressão longa, três dedos, dois dedos, toque, navegar, câmera, vista, girar vista, trackpad, pinça, botão do meio, zoom extensão, perspectiva, paralela, vista superior, iso
from: 10d4d33a
---

Você pode mover a câmera a qualquer momento, mesmo no meio de desenhar uma linha ou empurrar uma face: a ferramenta espera onde estava.

## Com um mouse de três botões

| Para | Faça isto |
|---|---|
| Orbitar | Arraste com o botão do meio (pressione a roda) |
| Pan | Arraste com o botão direito, ou mantenha {{key:Shift}} pressionada e arraste com o botão do meio. Pressionar ou soltar {{key:Shift}} durante um arrasto alterna entre órbita e pan |
| Zoom | Gire a roda. Ele aproxima em direção à face sob o ponteiro, ou em direção ao ponto sob ele na profundidade do centro da vista |
| Ver o modelo inteiro | {{key:Shift+Z}} ou {{ui:Extents}} |

A órbita gira a vista em torno da parte do modelo sob o ponteiro, então esse ponto permanece onde está enquanto tudo gira em volta dele. Sobre um espaço vazio, ela gira em torno do centro da vista. O pan mantém o ponto que você agarrou sob o ponteiro.

Para orbitar sempre em torno do centro da vista, ou para tornar a órbita e o pan mais rápidos ou mais lentos, abra {{ui:Settings}} ({{key:Mod+,}}), guia {{ui:ModelCraft}}, **Órbita e pan**. As velocidades valem para o mouse, o trackpad, o toque e as teclas de seta.

Um clique com o botão direito sem arrastar não faz nada; o ModelCraft não tem menu de clique com o botão direito.

## Sem botão do meio

Use as ferramentas de câmera na barra de ferramentas, ou o teclado:

1. Pressione {{key:O}} (ou clique em {{ui:Orbit}}) e arraste com o botão esquerdo para orbitar. Mantenha {{key:Shift}} pressionada durante o arrasto para fazer pan.
2. Pressione {{key:H}} (ou clique em {{ui:Pan}}) e arraste para fazer pan.
3. Pressione {{key:Z}} (ou clique em {{ui:Zoom}}) e arraste para cima para aproximar, ou para baixo para afastar.
4. Pressione {{key:Space}} para voltar para {{ui:Select}}, ou pressione a tecla da ferramenta que deseja em seguida.

As ferramentas de câmera substituem a ferramenta que você estava usando. Para olhar ao redor no meio de uma operação sem perdê-la, use o teclado:

- As teclas de seta orbitam.
- {{key:Shift}} com as teclas de seta faz pan.

Enquanto uma ferramenta de desenho está no meio de uma operação (depois do primeiro clique), as teclas de seta travam direções em vez de orbitar. Veja [Inferência e encaixe](topic:inference#lock-a-direction).

## No trackpad

O jeito mais fácil: abra {{ui:Settings}} ({{key:Mod+,}}), guia {{ui:ModelCraft}}, e defina Rolagem como **Trackpad** (ou deixe em "Descobrir automaticamente"). Então deslize com dois dedos para orbitar, mantenha {{key:Shift}} pressionada e deslize para fazer pan, e faça pinça para dar zoom, sem botões de câmera. Veja [Configurações do ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Com Rolagem definida como **Roda do mouse**:

:::mac
- **Zoom:** role com dois dedos, ou faça pinça. Ambos aproximam em direção ao ponteiro.
- **Pan:** pressione com dois dedos (um clique secundário) e mantenha os dedos pressionados enquanto arrasta. Ative "Clique secundário" em **Ajustes do Sistema**, depois em **Trackpad**, se o clique com dois dedos não fizer nada.
- **Órbita:** pressione {{key:O}} e arraste com um dedo, ou use as teclas de seta.
- Manter {{key:Ctrl}} pressionada ao clicar pode não contar como clique com o botão direito no ModelCraft, dependendo do navegador: ela pode funcionar como um clique com {{key:Ctrl}} mantida. Use a pressão com dois dedos para fazer pan.
:::

:::windows linux
- **Zoom:** role com dois dedos. A pinça também dá zoom onde o driver do touchpad a envia como rolagem com {{key:Ctrl}}.
- **Pan:** arraste com o botão direito (em muitos touchpads, pressione o canto inferior direito e arraste), ou pressione {{key:H}} e arraste.
- **Órbita:** pressione {{key:O}} e arraste, ou use as teclas de seta.
:::

Com Roda do mouse, a rolagem com dois dedos dá zoom; ela não faz pan. Isso é o oposto de muitas páginas da web, e é como a roda do mouse se comporta na maioria dos modeladores 3D.

:::tip
{{key:Space}} escolhe a ferramenta {{ui:Select}} no ModelCraft. Manter {{key:Space}} pressionada e arrastar não faz pan, como acontece em alguns outros aplicativos.
:::

## Em uma tela sensível ao toque

:::touch
- **Um dedo** usa a ferramenta atual: **toque** para clicar, **pressione e arraste** para desenhar ou arrastar.
- Enquanto o dedo de uma ferramenta de desenho está pressionado, uma **lupa** acima dele mostra o que está sob o dedo, para que você veja o ponto final, o ponto médio ou a aresta em que ele se encaixa antes de soltar.
- **Fique parado** por meio segundo para terminar o que a ferramenta está fazendo, como faz {{key:Enter}}: uma curva, uma cadeia de linhas. Sem nada acontecendo, ficar parado e depois arrastar o mesmo dedo **orbita** até você soltá-lo.
- **Dois dedos** arrastados juntos fazem **pan**; **pinça** dá zoom. Os dois funcionam em um mesmo gesto.
- **Três dedos** arrastados juntos **orbitam**.
- Para trocá-los (dois dedos orbitam, três fazem pan), abra {{ui:Settings}}, guia {{ui:ModelCraft}}, Tela sensível ao toque.
- Colocar um segundo dedo **cancela** o que o primeiro começou (um retângulo meio desenhado, um empurrar/puxar em andamento). Solte os dedos e comece de novo.
- Uma pequena barra na parte inferior da vista tem **Concluir** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) e **Desfazer**, para quando não há teclado.
- O encaixe e a seleção alcançam um pouco mais longe do que com o mouse, e os botões são maiores, para que um dedo consiga tocá-los.
:::

:::mouse
Em uma tela sensível ao toque, um dedo usa a ferramenta atual (toque para clicar, fique parado para terminar, ou fique parado e arraste para orbitar), dois dedos fazem pan e pinça para zoom, três dedos orbitam, e uma pequena barra oferece Concluir, Cancelar e Desfazer.
:::

## Vistas padrão

1. Clique em {{ui:Views}} no lado direito da barra de ferramentas.
2. Escolha {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} ou {{ui:Bottom}}.

A vista gira para essa direção e ajusta o modelo inteiro. {{ui:Front}} olha para o norte, ao longo do eixo verde; {{ui:Top}} olha diretamente para baixo, com o norte para cima.

O cubo de vista no canto superior direito da vista faz o mesmo em um clique, além de arestas e cantos, um anel de bússola para girar o modelo e um botão de início. Veja [O cubo de vista](topic:view-cube).

## Projeção em perspectiva e paralela

Escolha {{ui:Views}}, depois {{ui:Perspective}}. Uma marca de seleção indica que a perspectiva está ativa. Com ela desligada, a vista é uma projeção paralela (ortogonal): linhas paralelas no modelo continuam paralelas na tela, o que é desejável para elevações a partir de {{ui:Front}} ou {{ui:Right}}. A barra de status diz "Perspectiva." ou "Projeção paralela."

Cada cena lembra se estava em perspectiva. Veja [Salvar vistas como cenas](topic:scenes).
