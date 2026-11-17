---
title: Guardar vistas como cenas
summary: Guarde uma câmara e um estilo como cena, atualize-a e mude-lhe o nome, e avance ou reproduza cenas para apresentar um projeto.
keywords: cena, vista, vista guardada, câmara, apresentação, animação, reproduzir, diapositivos, page up, page down, separadores, percurso
from: 38680d6e
---

Uma **cena** memoriza uma posição de câmara, um estilo e o que está oculto: de onde se olha, perspetiva ou paralela, o estilo das faces, as arestas, as definições do sol, os grupos ocultos, as etiquetas desligadas e o corte. As cenas são guardadas no ficheiro `.modelcraft`.

## Adicionar uma cena

1. Prepare a vista: rode, faça zoom, escolha um estilo, defina o sol.
2. No painel {{ui:Cenas}} à direita, clique em {{ui:Adicionar cena}}.

   A cena aparece na lista, com o nome "Cena 1", "Cena 2" e assim por diante, e como um separador no topo da vista 3D. A barra de estado diz "Cena 1 guardada: esta câmara, estilo e o que está oculto."

## Ir para uma cena

- Clique no seu separador sobre a vista 3D, ou no seu nome na lista {{ui:Cenas}}.
- Ou prima {{key:PageDown}} para a cena seguinte e {{key:PageUp}} para a anterior. {{ui:Seguinte}} e {{ui:Anterior}} por baixo da lista fazem o mesmo.

A câmara desloca-se para a cena em pouco mais de meio segundo. Se o computador estiver configurado para reduzir o movimento, salta diretamente para lá.

## Alterar, mudar o nome ou eliminar uma cena

Cada cena na lista tem três pequenos botões a seguir ao nome:

- **Atualizar** (as setas circulares): guarda a câmara, o estilo e o que está oculto atuais nessa cena. "Cena 2 atualizada."
- **Mudar o nome** (o lápis): abre a caixa "Mudar o nome da cena". Escreva o novo nome e clique em {{ui:Guardar}}.
- **Eliminar** (o caixote do lixo): remove a cena. "Cena 2 eliminada. Ctrl+Z repõe-na."

Adicionar, atualizar, mudar o nome e eliminar cenas são passos de anulação, como as alterações ao modelo.

## Bloquear a câmara de uma cena

Quando renderiza a mesma vista repetidamente à medida que o projeto muda, bloqueie a câmara dessa cena para que a vista nunca se mova por engano.

1. Na lista {{ui:Cenas}}, clique no botão de **bloqueio** (o cadeado aberto) a seguir ao nome da cena. Fecha-se, e o separador da cena sobre a vista 3D mostra um pequeno cadeado. A barra de estado diz "Cena 2: câmara bloqueada."
2. Vá para a cena sempre que quiser renderizar: a câmara volta exatamente à vista guardada, para que as imagens feitas a partir dela fiquem alinhadas com as anteriores.

Enquanto a câmara estiver bloqueada, **Atualizar** ainda guarda o estilo e o que está oculto na cena, mas a câmara mantém-se onde estava, mesmo que tenha rodado para outro lado. Clique de novo no cadeado para desbloquear; Atualizar volta então a guardar a vista atual. Bloquear e desbloquear são passos de anulação, e o bloqueio fica guardado no ficheiro `.modelcraft`.

## Apresentar

1. Adicione duas ou mais cenas.
2. Clique em {{ui:Reproduzir}} por baixo da lista. O ModelCraft passa para a cena seguinte a cada poucos segundos e volta à primeira depois da última.
3. Clique em {{ui:Parar}} (o mesmo botão) ou prima {{key:Esc}} para parar.

Para um estudo de sol, adicione uma cena por hora, alterando apenas a {{ui:Hora}}, e depois reproduza-as. Ver [Estilos e sombras do sol](topic:styles-shadows#a-sun-study).

Para apresentar sem as barras, prima {{key:Ctrl+Shift+F}} duas vezes: ecrã inteiro, e depois ecrã inteiro com as barras ocultas. Os separadores das cenas mantêm-se sobre a vista.

## O que uma cena mostra

Uma cena memoriza o que estava oculto quando a guardou: grupos e componentes que [ocultou](topic:hide-isolate), [etiquetas](topic:tags) que desligou, e qual [plano de corte](topic:sections) está a cortar. Ir para a cena volta a ocultar e a mostrar esses elementos. Assim, uma cena pode mostrar a casa inteira, a seguinte a casa com a etiqueta do telhado desligada, e a seguinte um corte através dela.

As faces e arestas soltas ocultas não fazem parte das cenas. Ir para uma cena não cria um passo de anulação. As cenas guardadas por uma versão anterior do ModelCraft mantêm o que está oculto tal como está; clique em Atualizar para o guardar nelas.

## Exportar uma animação

{{ui:Exportar animação}}, por baixo da lista, reproduz as cenas da primeira à última, movendo a câmara suavemente entre elas, e guarda o filme como um vídeo **WebM** (dois segundos de movimento e uma breve pausa por cena). Regista a vista tal como a vê, com o tamanho que tem no ecrã, em [vista de apresentação](topic:styles-shadows#presentation-view) (sem eixos, guias ou seleção). Prima {{key:Esc}} ou clique de novo no botão para parar sem guardar. O WebM reproduz-se nos navegadores e no VLC, e os editores de vídeo convertem-no.

Para uma visita renderizada (céu, sol, sombras, materiais) com o tamanho que escolher, use {{ui:Renderizar vídeo…}}: sem chaves de animação, usa as cenas, pela ordem, como percurso da câmara. Ver [Animar a câmara e os objetos](topic:animation).

## Coisas a saber

- Alterar o estilo ou mover a câmara depois de ir para uma cena não altera a cena até clicar em Atualizar.
- As cenas não são exportadas para Collada, OBJ, glTF, STL ou IFC.
