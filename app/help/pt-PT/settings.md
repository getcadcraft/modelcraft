---
title: Definições do ModelCraft
summary: Escolha o estilo de teclas que conhece, faça a órbita e o deslocamento com um trackpad sem os botões Órbita, Deslocar e Zoom, e ative ou desative o snap e as colisões de sólidos.
keywords: definições, preferências, controlos, estilo de teclas, mapa de teclas, atalhos, blender, trackpad, touchpad, roda, órbita, pinça, snap, snapping, colisão, sobreposição, interseção, atravessar
from: caf77d5b
---

Abra as {{ui:Settings}} com a engrenagem na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:ModelCraft}}, contém as definições desta aplicação; {{ui:General}} contém as que todas as aplicações do CadCraft partilham (tema, barra de ferramentas, painéis). As definições do ModelCraft existem apenas na aplicação: altera-as aqui, e este navegador memoriza-as.

## Controlos: que teclas e botões do rato

Dois estilos de teclas. Mude-os aqui, com {{ui:Keys: Push-pull}} / {{ui:Keys: Modeler}} no canto inferior direito da vista, ou no fim do menu {{ui:More}} da barra de ferramentas:

- **Estilo empurrar/puxar** (o inicial; as letras dos modeladores de empurrar/puxar, como o SketchUp): uma letra escolhe uma ferramenta — {{key:L}} linha, {{key:R}} retângulo, {{key:P}} empurrar/puxar, {{key:M}} mover, {{key:Q}} rodar, {{key:S}} escala, {{key:G}} criar componente. Ver [Teclas e ações do rato](topic:keyboard).
- **Estilo modelador** (as teclas dos modeladores de malhas, como o Blender): selecione primeiro e depois atue sobre a seleção de imediato. {{key:G}} move-a, {{key:R}} roda-a e {{key:S}} escala-a a partir de onde está o ponteiro — sem primeiro clique. Enquanto move, {{key:X}}, {{key:Y}} ou {{key:Z}} bloqueia o eixo vermelho, verde ou azul, um número escrito define a distância (ou os graus, ou o fator), e um clique ou {{key:Enter}} assenta-a; {{key:Esc}} ou um clique com o botão direito repõe-na na posição inicial. Depois, volta a {{ui:Select}}.

O estilo de teclas e o estilo do menu são a mesma escolha: o estilo modelador é o menu {{ui:Modeler}}, e escolher um escolhe o outro. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse). A lista completa do estilo modelador está em [Teclas e ações do rato](topic:keyboard#modeler-keys). As dicas nos botões da barra de ferramentas e no cartão inicial seguem o estilo escolhido.

## Deslocamento: roda do rato ou trackpad

- **Deduzir automaticamente** (o inicial): o ModelCraft observa o deslocamento. O deslocamento lateral ou de grão fino, como o que um trackpad envia, faz órbita; os passos inteiros da roda fazem zoom.
- **Roda do rato**: o deslocamento faz sempre zoom na direção do ponteiro.
- **Trackpad**: deslize com dois dedos para orbitar, mantenha {{key:Shift}} e deslize para deslocar, faça pinça para dar zoom. Não é necessário usar os botões {{ui:Orbit}}, {{ui:Pan}} ou {{ui:Zoom}}.

A pinça dá zoom em todas as opções. Se « Deduzir automaticamente » adivinhar mal para o seu rato ou trackpad, escolha o que tem.

:::tip
No estilo modelador também pode orbitar mantendo {{key:Alt}} e arrastando, e deslocar com {{key:Alt+Shift}} e um arrasto — útil num portátil sem botão do meio.
:::

## Snap

**Snap a pontos, arestas e eixos** (ativo no início) puxa o ponteiro para extremidades, pontos médios, arestas, guias e os eixos vermelho, verde e azul — ver [Inferência](topic:inference). Desative-o quando quiser posicionar algo livremente perto de outra geometria sem que salte. Faces, o chão e os bloqueios de eixo continuam a funcionar com o snap desativado.

O botão {{ui:Snap}} no canto inferior direito da vista faz o mesmo para o trabalho desta sessão (também fica guardado). No estilo modelador, {{key:Shift+Tab}} alterna-o.

## Sólidos param onde tocam

**Parar os sólidos onde tocam** (ativo no início) impede que uma parede seja arrastada através de outra. Com {{ui:Move}} (e {{key:G}}, e duplicar e mover com {{key:Mod+D}}), a seleção desliza até ao outro sólido e para ao tocá-lo; com {{ui:Push/pull}}, uma face para onde encontra outro sólido. Apoiar-se em algo e deslizar ao longo dele está bem — só se trava a entrada no interior. Coisas que já se sobrepõem ao começar ainda podem ser afastadas.

Para empurrar algo através de outro de propósito, clique em {{ui:Collide}} no canto inferior direito (ou desative a definição), faça o movimento e clique novamente.

:::note
As colisões são verificadas para movimentos e para empurrar/puxar. {{ui:Rotate}} e {{ui:Scale}} ainda não as verificam, e a geometria solta que toca continua a unir-se, como sempre aconteceu: mantenha as coisas separadas em [grupos](topic:groups-components) para que se mantenham separadas.
:::

## Base da impressora 3D

O tamanho da base da sua impressora: {{ui:Not set}} (o inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 ou 300 × 300 × 400 mm. Escolha o tamanho mais próximo do volume de impressão da sua impressora. [Verificar impressão 3D](topic:print-3d) indica quando um modelo é maior do que a base; com {{ui:Not set}}, o tamanho não é verificado.

## Órbita e deslocamento

**Orbitar em torno do que está sob o cursor** (ativo no início): a órbita gira em torno da parte do modelo sob o ponteiro, e o deslocamento mantém esse ponto sob o ponteiro; sobre um espaço vazio, ambos usam o centro da vista. Desative-o para orbitar sempre em torno do centro da vista. **Velocidade de órbita** e **Velocidade de deslocamento** vão de 0.25× a 3× (1× é o inicial) e aplicam-se ao rato, ao trackpad, ao toque e às teclas de setas. Ver [Órbita, deslocamento e zoom](topic:orbit-pan-zoom).

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vistas** (o inicial; canto superior direito — clique numa face, aresta ou canto para olhar a partir daí, arraste-o para orbitar, arraste o anel da bússola para rodar o modelo), **Ícone dos eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo que roda com a vista: X vermelho, Y verde, Z azul) ou **Nenhum**. Ver [O cubo de vistas](topic:view-cube).
