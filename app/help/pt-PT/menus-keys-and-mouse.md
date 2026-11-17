---
title: Menus, teclas e rato
summary: Escolha um estilo de menus que corresponda ao modelador que já conhece, atribua a qualquer comando uma tecla própria, mova comandos entre menus e defina o que a roda e os botões central e direito do rato fazem.
keywords: estilo de menus, menus, barra de menus, barra de ferramentas, atalhos de teclado, teclas de atalho, teclas, estilo de teclas, mapa de teclas, personalizar, reatribuir, rato, roda, inverter, sentido do zoom, botão central, botão direito, orbitar, deslocar a vista, exportar, importar, alternar, familiar, empurrar/puxar, modelador
from: e56fce3d
---

As ferramentas do ModelCraft são as mesmas, seja qual for a forma de as alcançar. Um **estilo de menus** define onde ficam no ecrã, como se chamam e que teclas as executam. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador guarda-a.

## Os estilos

| Estilo | O que obtém |
|---|---|
| {{ui:ModelCraft}} | A barra de ferramentas própria do ModelCraft (Ficheiro, Desenhar, Modificar, Organizar, Editar, Câmara) e as teclas de uma só letra: {{key:L}} linha, {{key:R}} retângulo, {{key:P}} empurrar/puxar, {{key:M}} mover, {{key:Q}} rodar, {{key:S}} escala, {{key:E}} borracha, {{key:O}} orbitar. O estilo inicial. |
| {{ui:Empurrar/puxar}} | Uma barra de menus (Ficheiro, Editar, Ver, Câmara, Desenhar, Ferramentas, Janela) sobre uma fila das ferramentas principais, com as mesmas teclas de uma letra. |
| {{ui:Modelador}} | Uma barra de menus no cabeçalho (Ficheiro, Editar, Ver, Selecionar, Adicionar, Objeto, Malha) e as teclas dos modeladores de malhas: {{key:W}} selecionar, {{key:G}} agarrar, {{key:R}} rodar e {{key:S}} escalar a seleção de uma só vez ({{key:X}}, {{key:Y}} ou {{key:Z}} bloqueia um eixo enquanto se move), {{key:E}} empurrar/puxar, {{key:B}} retângulo, {{key:X}} eliminar, {{key:A}} selecionar tudo, {{key:Alt+A}} limpar seleção, {{key:Shift+D}} duplicar, {{key:Mod+G}} grupo, {{key:H}} ocultar. O botão central orbita; {{key:Shift}} e o botão central deslocam a vista, {{key:Mod}} e o botão central fazem zoom; o botão direito cancela o que uma ferramenta estiver a fazer. |
| {{ui:Principiante}} | Um friso cujo separador {{ui:Criar}} tem poucos botões grandes: formas a colocar, furos, mover, rodar e dimensionar, alinhar, {{ui:Grupo}} (furos cortados nas formas) e a verificação para impressão 3D; todas as outras ferramentas estão no separador {{ui:Mais ferramentas}}. O botão direito orbita, o botão central desloca a vista. Veja [O estilo Principiante](topic:beginner). |

O estilo de teclas que pode conhecer de {{ui:Chaves}}, no canto inferior direito da vista, e de {{ui:Editar}} › {{ui:Mais}} é a mesma escolha: escolher aí as teclas do modelador seleciona o estilo {{ui:Modelador}}, e escolher as teclas de empurrar/puxar deixa-o para o estilo {{ui:ModelCraft}}. Se tiver escolhido as teclas do modelador numa versão anterior, o ModelCraft abre uma vez no estilo {{ui:Modelador}}, por iniciativa própria.

:::tip
Uma tecla das teclas de empurrar/puxar que o estilo atual atribui a outro comando não faz nada, e a linha de estado indica para onde foi o comando ("No Modelador, Empurrar/puxar é E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o significado; os números vão sempre para a caixa de valor; e, enquanto uma ferramenta estiver a mover algo, as teclas dessa ferramenta têm prioridade.
:::

## Personalizar

1. Escolha o estilo mais próximo do que pretende e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). Clique em {{ui:Adicionar uma tecla}} e prima a tecla. Clique numa tecla para a retirar.
3. Com uma barra de menus, {{ui:Onde fica}} move o comando para outro menu ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda e a ação dos botões na vista 3D.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria uma cópia própria («My Modeler»); o incorporado nunca muda. A cópia lê as teclas como o estilo de origem: uma criada a partir de {{ui:Modelador}} mantém as teclas de agarrar, rodar e escalar a funcionar ao mesmo tempo.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o inicial) ou {{ui:Rodar para cima afasta}}, e a velocidade. O gesto de pinça no trackpad faz sempre zoom no sentido em que os dedos se movem.
- **Arrastar na vista 3D**: {{ui:Próprio de cada vista}} mantém os botões do ModelCraft (o botão central orbita, o botão direito ou {{key:Shift}} e o botão central deslocam a vista). Ou defina os botões central e direito para orbitar, deslocar a vista, fazer zoom ou nada; {{key:Shift}} com o botão troca orbitar e deslocar. O botão esquerdo pertence sempre à ferramenta em uso.
- **Trackpads**: {{ui:Definições}} › {{ui:ModelCraft}} › {{ui:Deslocamento}} continua a decidir se dois dedos orbitam (trackpad) ou fazem zoom (rato). Veja [Orbitar, deslocar e fazer zoom](topic:orbit-pan-zoom).

## Levar o estilo para outros computadores

{{ui:Exportar}} guarda o estilo em uso num pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, vindo de outro computador ou de um colega. Um ficheiro importado só pode apontar para os comandos do próprio ModelCraft: o resto é deixado de fora e contado na linha de estado. {{ui:Eliminar este estilo}} remove um dos estilos que criou.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}}, sob os cartões de estilo, faz com que todas as aplicações abram no estilo correspondente: {{ui:Empurrar/puxar}} corresponde aos estilos de barra de menus das outras aplicações. {{ui:Modelador}} não tem equivalente nas outras aplicações, por isso continua a ser uma escolha do ModelCraft.
:::

Relacionados: [Teclas e ações do rato](topic:keyboard) · [Definições do ModelCraft](topic:settings) · [Vindo de outros modeladores](topic:coming-from)
