---
title: Salvar vistas como cenas
summary: Salve uma câmera e um estilo como cena, atualize e renomeie-a, e avance ou reproduza cenas para apresentar um projeto.
keywords: cena, vista, vista salva, câmera, apresentação, animação, reproduzir, apresentação de slides, page up, page down, guias, percurso
from: 38680d6e
---

Uma **cena** guarda uma posição de câmera, um estilo e o que está oculto: de onde você olha, perspectiva ou paralela, o estilo das faces, as arestas, as configurações do sol, os grupos ocultos, as etiquetas desativadas e o corte de seção. As cenas são salvas no arquivo `.modelcraft`.

## Adicionar uma cena

1. Ajuste a vista: oriente, dê zoom, escolha um estilo, defina o sol.
2. No painel {{ui:Scenes}} à direita, clique em {{ui:Add scene}}.

   A cena aparece na lista, nomeada "Cena 1", "Cena 2" e assim por diante, e como uma guia no topo da vista 3D. A barra de status diz "Cena 1 salva: esta câmera, estilo e o que está oculto."

## Ir para uma cena

- Clique na guia dela sobre a vista 3D, ou no nome dela na lista {{ui:Scenes}}.
- Ou pressione {{key:PageDown}} para a próxima cena e {{key:PageUp}} para a anterior. {{ui:Next}} e {{ui:Previous}} sob a lista fazem o mesmo.

A câmera desliza até a cena em pouco mais de meio segundo. Se o seu computador estiver configurado para reduzir movimento, ela salta até lá.

## Alterar, renomear ou excluir uma cena

Cada cena na lista tem três pequenos botões depois do nome:

- **Atualizar** (as setas circulares): salva a câmera, o estilo e o que está oculto atuais nessa cena. "Cena 2 atualizada."
- **Renomear** (o lápis): abre a caixa "Renomear cena". Digite o novo nome e clique em {{ui:Save}}.
- **Excluir** (a lixeira): remove a cena. "Cena 2 excluída. Ctrl+Z a traz de volta."

Adicionar, atualizar, renomear e excluir cenas são etapas de desfazer, como as alterações no modelo.

## Travar a câmera de uma cena

Quando você renderiza a mesma vista várias vezes à medida que o projeto muda, trave a câmera dessa cena para que a vista nunca se mova por acidente.

1. Na lista {{ui:Scenes}}, clique no botão de **cadeado** (o cadeado aberto) depois do nome da cena. Ele fecha, e a guia da cena sobre a vista 3D mostra um pequeno cadeado. A barra de status diz "Cena 2: câmera bloqueada."
2. Vá para a cena sempre que quiser renderizar: a câmera volta exatamente à vista salva, para que as imagens feitas a partir dela fiquem alinhadas com as anteriores.

Enquanto a câmera estiver travada, **Atualizar** ainda salva o estilo e o que está oculto na cena, mas a câmera permanece onde estava, mesmo que você tenha orbitado para longe. Clique no cadeado de novo para destravar; então Atualizar salva a vista atual outra vez. Travar e destravar são etapas de desfazer, e o bloqueio é salvo no arquivo `.modelcraft`.

## Apresentar

1. Adicione duas ou mais cenas.
2. Clique em {{ui:Play}} sob a lista. O ModelCraft passa para a próxima cena a cada poucos segundos e volta à primeira depois da última.
3. Clique em {{ui:Stop}} (o mesmo botão) ou pressione {{key:Esc}} para parar.

Para um estudo de sol, adicione uma cena por hora, alterando somente a {{ui:Time}}, e depois reproduza-as. Veja [Estilos e sombras do sol](topic:styles-shadows#a-sun-study).

Para apresentar sem as barras, pressione {{key:Ctrl+Shift+F}} duas vezes: tela cheia, depois tela cheia com as barras ocultas. As guias de cena continuam sobre a vista.

## O que uma cena mostra

Uma cena guarda o que estava oculto quando você a salvou: grupos e componentes que você [ocultou](topic:hide-isolate), [etiquetas](topic:tags) que desativou e quais [planos de corte](topic:sections) cortam. Ir para a cena oculta e mostra esses itens de novo. Assim, uma cena pode mostrar a casa inteira, a seguinte a casa sem a etiqueta do telhado, e a próxima um corte através dela.

Faces e arestas soltas ocultas não fazem parte das cenas. Ir para uma cena não cria uma etapa de desfazer. Cenas salvas por uma versão anterior do ModelCraft mantêm o que está oculto como está; clique em Atualizar para salvar isso nelas.

## Exportar uma animação

{{ui:Export animation}}, sob a lista, reproduz as cenas da primeira até a última, movendo a câmera suavemente entre elas, e salva o filme como um vídeo **WebM** (dois segundos de movimento e uma breve pausa por cena). Ele grava a vista como você a vê, no tamanho dela na tela, em [visualização de apresentação](topic:styles-shadows#presentation-view) (sem eixos, guias ou seleção). Pressione {{key:Esc}} ou clique no botão de novo para parar sem salvar. O WebM reproduz em navegadores e no VLC, e editores de vídeo o convertem.

Para uma caminhada renderizada (céu, sol, sombras, materiais) em um tamanho que você escolhe, use {{ui:Render video…}} em vez disso: sem chaves de animação, ele usa as cenas, em ordem, como o caminho da câmera. Veja [Animar a câmera e os objetos](topic:animation).

## Coisas a saber

- Alterar o estilo ou mover a câmera depois de ir para uma cena não altera a cena até você clicar em Atualizar.
- As cenas não são exportadas para Collada, OBJ, glTF, STL ou IFC.
