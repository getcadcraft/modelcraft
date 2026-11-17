---
title: Configurações da ModelCraft
summary: Escolha o estilo de teclas que você conhece, faça a órbita e o pan em um trackpad sem os botões da câmera e ative ou desative o snap e as colisões de sólidos.
keywords: configurações, preferências, controles, estilo de teclas, mapa de teclas, atalhos, blender, trackpad, touchpad, rolagem, órbita, pinça, snap, colisão, sobreposição, interseção, atravessar
from: caf77d5b
---

Abra {{ui:Configurações}} com a engrenagem na barra do aplicativo ou com {{key:Mod+,}}. A primeira guia, {{ui:ModelCraft}}, reúne as configurações que pertencem a este aplicativo; {{ui:Geral}} reúne as que todos os aplicativos do CadCraft compartilham (tema, barra de ferramentas, painéis). As configurações da ModelCraft existem apenas neste aplicativo: você as altera aqui, e este navegador as guarda.

## Controles: quais teclas e botões do mouse

Dois estilos de teclas. Troque entre eles aqui, com {{ui:Teclas: empurrar/puxar}} / {{ui:Teclas: modelagem}} no canto inferior direito da vista, ou no fim do menu {{ui:Mais}} da barra de ferramentas:

- **Estilo empurrar/puxar** (o inicial; as letras dos modeladores de empurrar/puxar, como o SketchUp): uma letra escolhe uma ferramenta — {{key:L}} linha, {{key:R}} retângulo, {{key:P}} empurrar/puxar, {{key:M}} mover, {{key:Q}} girar, {{key:S}} escala, {{key:G}} criar componente. Veja [Teclas e ações do mouse](topic:keyboard).
- **Estilo modelagem** (as teclas dos modeladores de malha, como o Blender): selecione primeiro e depois aja sobre a seleção imediatamente. {{key:G}} move, {{key:R}} gira e {{key:S}} escala a partir de onde está o ponteiro — sem primeiro clique. Enquanto move, {{key:X}}, {{key:Y}} ou {{key:Z}} trava o eixo vermelho, verde ou azul, um número digitado define a distância (ou os graus, ou o fator), e um clique ou {{key:Enter}} assenta o item; {{key:Esc}} ou um clique com o botão direito o devolve à posição original. Depois, você volta para {{ui:Selecionar}}.

O estilo de teclas é a mesma escolha do estilo de menu: o estilo de modelagem é o estilo de menu {{ui:Modelagem}}, e escolher um escolhe o outro. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse). A lista completa do estilo de modelagem está em [Teclas e ações do mouse](topic:keyboard#modeler-keys). As dicas das ferramentas na barra de ferramentas e no cartão inicial seguem o estilo que você escolher.

## Rolagem: roda do mouse ou trackpad

- **Detectar automaticamente** (o inicial): a ModelCraft observa a rolagem. A rolagem lateral ou de precisão, como a que o trackpad envia, faz órbita; os cliques inteiros da roda dão zoom.
- **Roda do mouse**: a rolagem sempre dá zoom em direção ao ponteiro.
- **Trackpad**: deslize com dois dedos para orbitar, segure {{key:Shift}} e deslize para fazer pan, e use pinça para dar zoom. Você nunca precisa dos botões {{ui:Orbit}}, {{ui:Pan}} ou {{ui:Zoom}}.

A pinça dá zoom em qualquer opção. Se "Detectar automaticamente" errar para o seu mouse ou trackpad, escolha o que você tem.

:::tip
No estilo modelagem você também pode orbitar segurando {{key:Alt}} e arrastando, e fazer pan com {{key:Alt+Shift}} e um arrasto — útil em um notebook sem botão do meio.
:::

## Snap

**Snap a pontos, arestas e eixos** (ativado no início) puxa o ponteiro para extremidades, pontos médios, arestas, guias e os eixos vermelho, verde e azul — veja [Inferência](topic:inference). Desative quando quiser posicionar algo livremente perto de outra geometria sem que ele pule. Faces, o chão e as travas de eixo continuam funcionando com o snap desativado.

O botão {{ui:Snap}} no canto inferior direito da vista faz o mesmo para o trabalho desta sessão (ele também é salvo). No estilo modelagem, {{key:Shift+Tab}} o alterna.

## Sólidos param onde se tocam

**Parar sólidos onde se tocam** (ativado no início) impede que uma parede seja arrastada através de outra. Com {{ui:Mover}} (e {{key:G}}, e duplicar e mover com {{key:Mod+D}}), a seleção desliza até o outro sólido e para ao tocá-lo; com {{ui:Empurrar/puxar}}, uma face para onde encontra outro sólido. Apoiar-se em algo e deslizar sobre ele é permitido — só a passagem para o interior é impedida. Itens que já se sobrepõem quando você começa ainda podem ser separados.

Para atravessar algo de propósito, clique em {{ui:Colisão}} no canto inferior direito (ou desmarque a configuração), faça o movimento e clique de novo.

:::note
As colisões são verificadas nos movimentos e no empurrar/puxar. {{ui:Girar}} e {{ui:Escala}} ainda não as verificam, e geometria solta que se toca continua se unindo, como sempre: mantenha coisas separadas em [grupos](topic:groups-components) para que permaneçam separadas.
:::

## Mesa da impressora 3D

O tamanho da mesa da sua impressora: {{ui:Não definida}} (o inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ou 300 × 300 × 400 mm. Escolha o tamanho mais próximo do volume de impressão da sua impressora. [Verificar para impressão 3D](topic:print-3d) então informa quando um modelo é maior que a mesa; com {{ui:Não definida}}, o tamanho não é verificado.

## Órbita e pan

**Orbitar em torno do que está sob o cursor** (ativado no início): a órbita gira em torno da parte do modelo que está sob o ponteiro, e o pan mantém esse ponto sob o ponteiro; sobre espaço vazio, ambos usam o centro da vista. Desative para orbitar sempre em torno do centro da vista. **Velocidade da órbita** e **Velocidade do pan** variam de 0.25× a 3× (1× é o inicial) e se aplicam ao mouse, ao trackpad, ao toque e às teclas de seta. Veja [Órbita, pan e zoom](topic:orbit-pan-zoom).

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vista** (o inicial; canto superior direito — clique em uma face, aresta ou canto para olhar a partir dali, arraste para orbitar, arraste o anel da bússola para girar o modelo), **Ícone de eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo que gira com a vista: X vermelho, Y verde, Z azul) ou **Nenhum**. Veja [O cubo de vista](topic:view-cube).
