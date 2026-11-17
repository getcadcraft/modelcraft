---
title: Orbitar, deslocar e fazer zoom
summary: Mova a câmara à volta do modelo com um rato, um touchpad, um ecrã tátil ou o teclado, e salte para as vistas padrão.
keywords: orbitar, deslocar, zoom, toque prolongado, três dedos, dois dedos, toque, navegar, câmara, vista, rodar vista, touchpad, beliscar, botão do meio, zoom extensão, perspetiva, paralela, vista de topo, iso
from: 10d4d33a
---

Pode mover a câmara em qualquer altura, mesmo a meio de desenhar uma linha ou de empurrar uma face: a ferramenta espera onde estava.

## Com um rato de três botões

| Para | Faça isto |
|---|---|
| Orbitar | Arraste com o botão do meio (prima a roda) |
| Deslocar | Arraste com o botão direito, ou mantenha {{key:Shift}} premida e arraste com o botão do meio. Premir ou soltar {{key:Shift}} durante um arrasto alterna entre orbitar e deslocar |
| Zoom | Rode a roda. Faz zoom para a face sob o ponteiro, ou para o ponto por baixo dele à profundidade do centro da vista |
| Ver o modelo inteiro | {{key:Shift+Z}} ou {{ui:Extents}} |

Orbitar faz a vista girar em torno da parte do modelo sob o ponteiro, de modo que esse ponto se mantém no sítio enquanto tudo gira à sua volta. Sobre espaço vazio, gira em torno do centro da vista. Deslocar mantém sob o ponteiro o ponto que agarrou.

Para orbitar sempre em torno do centro da vista, ou para tornar a órbita e o deslocamento mais rápidos ou mais lentos, abra {{ui:Settings}} ({{key:Mod+,}}), separador {{ui:ModelCraft}}, **Órbita e deslocamento**. As velocidades aplicam-se ao rato, ao touchpad, ao toque e às teclas de seta.

Um clique com o botão direito sem arrastar não faz nada; o ModelCraft não tem menu de clique com o botão direito.

## Sem botão do meio

Use as ferramentas de câmara na barra de ferramentas, ou o teclado:

1. Prima {{key:O}} (ou clique em {{ui:Orbit}}) e arraste com o botão esquerdo para orbitar. Mantenha {{key:Shift}} premida durante o arrasto para deslocar.
2. Prima {{key:H}} (ou clique em {{ui:Pan}}) e arraste para deslocar.
3. Prima {{key:Z}} (ou clique em {{ui:Zoom}}) e arraste para cima para aproximar, ou para baixo para afastar.
4. Prima {{key:Space}} para voltar a {{ui:Select}}, ou prima a tecla da ferramenta que quer a seguir.

As ferramentas de câmara substituem a ferramenta que estava a usar. Para olhar à volta a meio de uma operação sem a perder, use antes o teclado:

- As teclas de seta orbitam.
- {{key:Shift}} com as teclas de seta desloca.

Enquanto uma ferramenta de desenho está a meio de uma operação (depois do primeiro clique), as teclas de seta bloqueiam direções em vez de orbitar. Veja [Inferência e snap](topic:inference#lock-a-direction).

## Num touchpad

A forma mais simples: abra {{ui:Settings}} ({{key:Mod+,}}), separador {{ui:ModelCraft}}, e defina a Deslocação para **Touchpad** (ou deixe em «Detetar automaticamente»). Depois, deslize com dois dedos para orbitar, mantenha {{key:Shift}} premida e deslize para deslocar, e belisque para fazer zoom — sem botões de câmara. Veja [Definições do ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Com a Deslocação definida para **Roda do rato**:

:::mac
- **Zoom:** desloque com dois dedos, ou belisque. Ambos fazem zoom na direção do ponteiro.
- **Deslocar:** prima com dois dedos (um clique secundário) e mantenha os dedos pousados enquanto arrasta. Ative o «Clique secundário» em **Definições do Sistema** e depois em **Trackpad**, se o clique com dois dedos não fizer nada.
- **Orbitar:** prima {{key:O}} e arraste com um dedo, ou use as teclas de seta.
- Manter {{key:Ctrl}} premida ao clicar pode não contar como clique com o botão direito no ModelCraft, consoante o navegador: pode funcionar como um clique com {{key:Ctrl}} premida. Use a pressão com dois dedos para deslocar.
:::

:::windows linux
- **Zoom:** desloque com dois dedos. O beliscar também faz zoom onde o controlador do touchpad o envia como deslocação com {{key:Ctrl}}.
- **Deslocar:** arraste com o botão direito (em muitos touchpads, prima o canto inferior direito e arraste), ou prima {{key:H}} e arraste.
- **Orbitar:** prima {{key:O}} e arraste, ou use as teclas de seta.
:::

Com a Roda do rato, deslizar com dois dedos faz zoom; não desloca. É o contrário de muitas páginas web, e é assim que a roda do rato se comporta na maioria dos modeladores 3D.

:::tip
{{key:Space}} escolhe a ferramenta {{ui:Select}} no ModelCraft. Manter {{key:Space}} premida e arrastar não desloca a vista, ao contrário de outras aplicações.
:::

## Num ecrã tátil

:::touch
- **Um dedo** usa a ferramenta atual: **toque** para clicar, **prima e arraste** para desenhar ou arrastar.
- Enquanto o dedo de uma ferramenta de desenho está pousado, uma **lupa** por cima dele mostra o que está debaixo do dedo, para ver o extremo, o ponto médio ou a aresta a que faz snap antes de levantar.
- **Mantenha o dedo parado** durante meio segundo para concluir o que a ferramenta está a fazer, tal como {{key:Enter}}: uma curva, uma cadeia de linhas. Sem nada em curso, se mantiver o dedo parado e depois o arrastar, **orbita** até o levantar.
- **Dois dedos** arrastados em conjunto **deslocam**; **beliscar** para fazer zoom. Ambos funcionam num só gesto.
- **Três dedos** arrastados em conjunto **orbitam**.
- Para os trocar (dois dedos orbitam, três deslocam), abra {{ui:Settings}}, separador {{ui:ModelCraft}}, Ecrã tátil.
- Pousar um segundo dedo **cancela** o que o primeiro começou (um retângulo meio desenhado, um empurrar/puxar em curso). Levante os dedos e comece de novo.
- Uma pequena barra na parte inferior da vista tem **Concluir** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) e **Anular**, para quando não há teclado.
- O snap e a escolha alcançam um pouco mais longe do que com um rato, e os botões são maiores, para que um dedo os consiga atingir.
:::

:::mouse
Num ecrã tátil, um dedo usa a ferramenta atual (toque para clicar, mantenha parado para concluir, ou mantenha parado e arraste para orbitar), dois dedos deslocam e beliscam para fazer zoom, três dedos orbitam, e uma pequena barra oferece Concluir, Cancelar e Anular.
:::

## Vistas padrão

1. Clique em {{ui:Views}} na extremidade direita da barra de ferramentas.
2. Escolha {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} ou {{ui:Bottom}}.

A vista roda para essa direção e ajusta-se ao modelo inteiro. {{ui:Front}} olha para norte, ao longo do eixo verde; {{ui:Top}} olha diretamente para baixo, com o norte para cima.

O cubo de vistas no canto superior direito da vista faz o mesmo com um clique, além das arestas e cantos, de um anel de bússola para rodar o modelo e de um botão de início. Veja [O cubo de vistas](topic:view-cube).

## Projeção em perspetiva e paralela

Escolha {{ui:Views}}, depois {{ui:Perspective}}. Uma marca de verificação significa que a perspetiva está ativa. Com ela desativada, a vista é uma projeção paralela (ortográfica): as linhas paralelas no modelo mantêm-se paralelas no ecrã, o que é o pretendido para alçados a partir de {{ui:Front}} ou {{ui:Right}}. A barra de estado indica «Perspetiva.» ou «Projeção paralela.»

Cada cena memoriza se estava em perspetiva. Veja [Guardar vistas como cenas](topic:scenes).
