---
title: Começar com o ModelCraft
summary: Para que serve o ModelCraft, como abri-lo e a sua primeira caixa, de um retângulo a um modelo guardado.
keywords: início, primeiro modelo, começar, tutorial, introdução, caixa, volumetria, 3d, empurrar puxar, início rápido, guiado, guia, principiante, novo no 3d
from: d47ad719
---

O ModelCraft é um modelador 3D para o desenho inicial: estudos de volumetria, disposições de compartimentos, formas rápidas de edifícios e as sombras que projetam. Desenha formas planas, puxa-as para cima até serem sólidos e continua a trabalhá-las desenhando nas suas faces. Funciona no navegador e os seus modelos ficam no seu computador.

Se já usou o SketchUp, grande parte do que sabe aplica-se: as mesmas letras das ferramentas, empurrar/puxar, uma caixa de valores para tamanhos exatos, grupos e componentes. [Se vem de outros modeladores](topic:coming-from) lista o que é diferente.

## Abrir o ModelCraft

1. Abra o ModelCraft numa versão atual do Chrome, Edge, Firefox ou Safari. Veja [Navegadores e computadores](common:browsers).
2. Aguarde que a vista 3D apareça: uma área clara (ou escura) ao meio com um cartão intitulado «Começar a modelar».

O ecrã tem uma barra de ferramentas ao longo do topo, a {{ui:Estrutura}} e os {{ui:Componentes}} à esquerda, a vista 3D ao meio, {{ui:Informações da entidade}}, {{ui:Estilo}} e {{ui:Cenas}} à direita, e uma barra de estado ao longo do fundo com a caixa de valores e as unidades. [O ecrã do ModelCraft](topic:workspace) explica cada parte.

:::note
O ModelCraft precisa de WebGL, a funcionalidade de desenho 3D do navegador. Se o meio do ecrã ficar vazio e as ferramentas não fizerem nada, veja [Resolução de problemas](topic:troubleshooting#the-3d-view-is-blank).
:::

## Verifique primeiro as unidades

Olhe para o canto inferior direito. O seletor de unidades mostra em que se medem os comprimentos.

- Um modelo novo começa em **pés e polegadas** quando o navegador está configurado para os Estados Unidos (também Libéria e Mianmar), e em **milímetros** em todos os outros sítios.
- Para mudar, escolha outra unidade no seletor: {{ui:ft e in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ou {{ui:mm}}. O próprio modelo não muda de tamanho; muda só a forma como os comprimentos são mostrados e como os números sem unidade são lidos.

Um número que escreva sem unidade usa a unidade do modelo. Num modelo em pés e polegadas, um número sozinho são **polegadas**, pelo que `120` significa 10 pés.

## Deixe o ModelCraft guiar o seu primeiro modelo

É novo no 3D? No cartão {{ui:Começar a modelar}}, clique em {{ui:Primeiro modelo guiado}} (também está em {{ui:Vistas}}). Um pequeno cartão conduz-o por quatro passos, de um retângulo plano a um modelo pronto para uma impressora 3D:

1. Desenhar um retângulo no chão.
2. Puxá-lo para cima até ser uma caixa.
3. Transformar a caixa num só objeto (um grupo).
4. Verificá-lo para impressão 3D e depois transferir um ficheiro 3MF ou STL.

O cartão observa o modelo, não os botões: avança quando o passo está feito, seja como for que o fez, e recua um passo quando anula. {{ui:Escolher a ferramenta}} escolhe a ferramenta por si. Feche-o a qualquer momento com o {{ui:×}}.

## Desenhar a sua primeira caixa

1. Prima {{key:R}} para a ferramenta {{ui:Retângulo}}, ou clique em {{ui:Retângulo}} no grupo {{ui:Desenhar}} da barra de ferramentas.
2. Clique uma vez no chão, perto do meio da vista. Esse é o primeiro canto.
3. Afaste o ponteiro. Um retângulo acompanha-o e a caixa de valores em baixo (com o rótulo {{ui:Dimensões}}) mostra o seu tamanho.
4. Escreva o tamanho e prima {{key:Enter}}: por exemplo `4m,3m`, ou `16',12'` em pés e polegadas. Não precisa de clicar primeiro na caixa de valores; escrever um número envia-o para lá.

   Obtém um retângulo plano no chão. É uma **face**: uma superfície com arestas à volta.

5. Prima {{key:P}} para {{ui:Empurrar/puxar}}.
6. Clique no retângulo, mova o ponteiro para cima e clique de novo. Ou clique no retângulo e escreva uma altura, como `3m` ou `10'`, e prima {{key:Enter}}.

   O retângulo passa a ser uma caixa com topo, fundo e quatro lados.

7. Prima {{key:Space}} para voltar a {{ui:Selecionar}} e depois clique no topo da caixa. {{ui:Informações da entidade}} à direita mostra a sua área.

:::tip
Também pode arrastar em vez de clicar duas vezes: prima no primeiro canto, arraste e largue no segundo. Os dois modos funcionam em todas as ferramentas de desenho.
:::

## Olhar à volta

- **Orbitar:** arraste com o botão do meio do rato (a roda), ou prima {{key:O}} e arraste com o botão esquerdo.
- **Deslocar:** arraste com o botão direito, ou com o botão do meio enquanto mantém {{key:Shift}} premido.
- **Zoom:** rode a roda. Faz zoom em direção ao que estiver debaixo do ponteiro.
- **Ver tudo:** prima {{key:Shift+Z}}, ou clique em {{ui:Extensão}}.

Num trackpad ou num ecrã tátil os gestos são diferentes. Veja [Orbitar, deslocar e fazer zoom](topic:orbit-pan-zoom).

## Anular

Prima {{key:Mod+Z}} para anular e {{key:Mod+Y}} para refazer, ou use {{ui:Anular}} e {{ui:Refazer}} na barra de ferramentas. O ModelCraft recorda os últimos 200 passos enquanto o modelo está aberto. O histórico não é guardado no ficheiro.

## Guardar o modelo

1. Clique em {{ui:Guardar}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+S}}.
2. O navegador transfere um ficheiro com o nome do modelo, como `Sem título.modelcraft`. A barra de estado diz para onde foi: «Sem título.modelcraft guardado nas suas transferências.»

**Guardar é uma transferência.** Cada gravação cria uma cópia nova na pasta de transferências; não substitui o ficheiro que abriu. Para manter uma pasta de projeto arrumada, mova ou mude o nome do ficheiro lá, por si. [Abrir, guardar, importar e exportar](topic:files) explica porquê e o que mais pode fazer.

:::warning
O ModelCraft não guarda sozinho. Se fechar o separador com alterações por guardar, o navegador pergunta primeiro («Sair do site?»). Escolha ficar e depois guarde.
:::

## Obter ajuda

Prima {{key:F1}} ou clique em {{ui:Ajuda}} na barra da aplicação para abrir esta ajuda ao lado do modelo. Funciona sem ligação. Prima {{key:F1}} de novo, ou {{key:Esc}} dentro da ajuda, para a fechar. Veja [Utilizar esta ajuda](common:help).

## Para onde ir a seguir

- [Desenhar faces com linhas, retângulos e círculos](topic:draw-faces)
- [Empurrar e puxar faces até serem sólidos](topic:push-pull)
- [Escrever tamanhos exatos na caixa de valores](topic:value-box)
- [Todas as teclas e ações do rato](topic:keyboard)
