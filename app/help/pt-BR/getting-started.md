---
title: Primeiros passos no ModelCraft
summary: Para que serve o ModelCraft, como abri-lo e a sua primeira caixa, de um retângulo até um modelo salvo.
keywords: início, primeiro modelo, começar, tutorial, introdução, caixa, volumetria, 3d, empurrar puxar, início rápido, guiado, guia, iniciante, novo no 3d
from: d47ad719
---

O ModelCraft é um modelador 3D para as fases iniciais do projeto: estudos de volumetria, disposição de ambientes, formas rápidas de edificações e as sombras que elas projetam. Você desenha formas planas, puxa-as para formar sólidos e continua trabalhando nelas desenhando sobre as suas faces. Ele roda no navegador, e os seus modelos ficam no seu computador.

Se você já usou o SketchUp, quase tudo o que sabe continua valendo: as mesmas letras de ferramenta, empurrar/puxar, uma caixa de valores para tamanhos exatos, grupos e componentes. [Vindo de outros modeladores](topic:coming-from) lista o que é diferente.

## Abrir o ModelCraft

1. Abra o ModelCraft em uma versão atual do Chrome, Edge, Firefox ou Safari. Veja [Navegadores e computadores](common:browsers).
2. Aguarde a vista 3D aparecer: uma área clara (ou escura) no meio, com um cartão intitulado "Comece a modelar".

A tela tem uma barra de ferramentas no alto, {{ui:Estrutura}} e {{ui:Componentes}} à esquerda, a vista 3D no meio, {{ui:Informações da entidade}}, {{ui:Estilo}} e {{ui:Cenas}} à direita e uma barra de status na base, com a caixa de valores e as unidades. [A tela do ModelCraft](topic:workspace) explica cada parte.

:::note
O ModelCraft precisa de WebGL, o recurso de desenho 3D do navegador. Se o meio da tela continuar vazio e as ferramentas não responderem, veja [Solução de problemas](topic:troubleshooting#the-3d-view-is-blank).
:::

## Verifique as unidades primeiro

Olhe o canto inferior direito. O seletor de unidades mostra em que os comprimentos são medidos.

- Um modelo novo começa em **pés e polegadas** quando o navegador está configurado para os Estados Unidos (também Libéria e Mianmar), e em **milímetros** em qualquer outro lugar.
- Para mudar, escolha outra unidade no seletor: {{ui:ft e in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} ou {{ui:mm}}. O modelo em si não muda de tamanho; muda só a forma de mostrar os comprimentos e de ler os números sem unidade.

Um número digitado sem unidade usa a unidade do modelo. Em um modelo em pés e polegadas, um número sem unidade são **polegadas**, então `120` significa 10 pés.

## Deixe o ModelCraft guiar o seu primeiro modelo

Novo no 3D? No cartão {{ui:Comece a modelar}}, clique em {{ui:Primeiro modelo guiado}} (ele também está em {{ui:Vistas}}). Um cartão pequeno conduz você por quatro etapas, de um retângulo plano até um modelo pronto para uma impressora 3D:

1. Desenhe um retângulo no chão.
2. Puxe-o para formar uma caixa.
3. Transforme a caixa em um único objeto (um grupo).
4. Verifique-o para impressão 3D e baixe um arquivo 3MF ou STL.

O cartão observa o modelo, não os botões: ele avança quando a etapa é concluída, qualquer que seja o jeito que você usou, e volta uma etapa quando você desfaz. {{ui:Escolher a ferramenta}} escolhe a ferramenta para você. Feche-o a qualquer momento com o {{ui:×}}.

## Desenhar a primeira caixa

1. Pressione {{key:R}} para a ferramenta {{ui:Retângulo}}, ou clique em {{ui:Retângulo}} no grupo {{ui:Desenhar}} da barra de ferramentas.
2. Clique uma vez no chão, perto do meio da vista. Esse é o primeiro canto.
3. Afaste o ponteiro. Um retângulo o acompanha, e a caixa de valores na base (com o rótulo {{ui:Dimensões}}) mostra o tamanho dele.
4. Digite o tamanho e pressione {{key:Enter}}: por exemplo `4m,3m`, ou `16',12'` em pés e polegadas. Não é preciso clicar antes na caixa de valores; ao digitar um número, ele vai para lá.

   Você obtém um retângulo plano no chão. Ele é uma **face**: uma superfície com arestas ao redor.

5. Pressione {{key:P}} para {{ui:Empurrar/puxar}}.
6. Clique no retângulo, mova o ponteiro para cima e clique de novo. Ou clique no retângulo e digite uma altura, como `3m` ou `10'`, e pressione {{key:Enter}}.

   O retângulo vira uma caixa com topo, base e quatro lados.

7. Pressione {{key:Space}} para voltar a {{ui:Selecionar}} e clique no topo da caixa. {{ui:Informações da entidade}}, à direita, mostra a área dele.

:::tip
Em vez de clicar duas vezes, você também pode arrastar: pressione no primeiro canto, arraste e solte no segundo. Os dois jeitos funcionam em todas as ferramentas de desenho.
:::

## Olhar ao redor

- **Órbita:** arraste com o botão do meio do mouse (a roda), ou pressione {{key:O}} e arraste com o botão esquerdo.
- **Pan:** arraste com o botão direito, ou com o botão do meio enquanto mantém {{key:Shift}} pressionada.
- **Zoom:** gire a roda. O zoom vai em direção ao que estiver sob o ponteiro.
- **Ver tudo:** pressione {{key:Shift+Z}}, ou clique em {{ui:Extensão}}.

Em um trackpad ou em uma tela de toque, os gestos são outros. Veja [Órbita, pan e zoom](topic:orbit-pan-zoom).

## Desfazer

Pressione {{key:Mod+Z}} para desfazer e {{key:Mod+Y}} para refazer, ou use {{ui:Desfazer}} e {{ui:Refazer}} na barra de ferramentas. O ModelCraft lembra as últimas 200 etapas enquanto o modelo está aberto. O histórico não é salvo no arquivo.

## Salvar o modelo

1. Clique em {{ui:Salvar}} no grupo {{ui:Arquivo}}, ou pressione {{key:Mod+S}}.
2. O navegador baixa um arquivo com o nome do seu modelo, como `Untitled.modelcraft`. A barra de status diz para onde ele foi: "Untitled.modelcraft salvo em seus downloads."

**Salvar é um download.** Cada salvamento cria uma nova cópia na pasta de downloads; ele não sobrescreve o arquivo que você abriu. Para manter a pasta do projeto organizada, mova ou renomeie o arquivo você mesmo. [Abrir, salvar, importar e exportar](topic:files) explica o motivo e o que mais você pode fazer.

:::warning
O ModelCraft não salva sozinho. Se você fechar a guia com alterações não salvas, o navegador pergunta antes ("Sair do site?"). Escolha ficar e depois salve.
:::

## Obter ajuda

Pressione {{key:F1}} ou clique em {{ui:Ajuda}} na barra do aplicativo para abrir esta ajuda ao lado do modelo. Ela funciona sem conexão. Pressione {{key:F1}} de novo, ou {{key:Esc}} dentro da ajuda, para fechá-la. Veja [Como usar esta ajuda](common:help).

## Para onde ir em seguida

- [Desenhar faces com linhas, retângulos e círculos](topic:draw-faces)
- [Empurrar e puxar faces para formar sólidos](topic:push-pull)
- [Digitar tamanhos exatos na caixa de valores](topic:value-box)
- [Todas as teclas e ações do mouse](topic:keyboard)
