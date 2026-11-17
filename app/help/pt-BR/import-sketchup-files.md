---
title: Importar um modelo SKP
summary: Importe um arquivo .skp com seus grupos, componentes, cores, texturas, etiquetas e arestas suaves, veja o que entrou e o que não entrou, e continue modelando.
keywords: skp, importar, abrir skp, componentes, grupos, etiquetas, camadas, materiais, cores, texturas, oculto, arestas suaves, 3d warehouse, migrar, trocar
from: 325d3c81
---

O ModelCraft lê arquivos do SketchUp (`.skp`) com o próprio leitor, na página. Nada é enviado, e funciona offline sempre que o ModelCraft funciona. Arquivos do SketchUp 3 até 2026 foram testados.

## Importar o arquivo

1. Clique em {{ui:Importar}} no grupo {{ui:Arquivo}} (ou solte o arquivo `.skp` na vista 3D).
2. Escolha o arquivo.

   A barra de status diz "Lendo house.skp…" enquanto lê, e depois o que entrou, por exemplo "Importado house.skp (SketchUp 25.0.575): 1240 faces, 6 componentes, em um grupo."

O modelo inteiro chega como um grupo com o nome do arquivo, selecionado, e a vista dá zoom nele. Um {{key:Mod+Z}} remove tudo de novo, inclusive as etiquetas.

:::tip
Explodir o grupo importado ({{ui:Informações da entidade}} › {{ui:Explodir}}) quando quiser o conteúdo solto no seu modelo, em vez de dentro de um único grupo.
:::

## O que entra

- **Faces** com seus furos, e **arestas** que não fazem parte de uma face.
- **Grupos** entram como grupos, e **componentes** como componentes: cada cópia de um componente é uma inserção de uma única definição, então editar uma cópia altera todas, como no SketchUp. Os nomes vêm junto.
- **Cores.** O próprio material de uma face dá a ela sua cor. Um material pintado em um grupo ou componente se torna a pintura dessa inserção, então as faces dentro dele que não têm cor própria a recebem, como no SketchUp. Um componente pintado de vermelho em um lugar e de azul em outro continua sendo um único componente.
- **Texturas.** Uma face pintada com um material texturizado entra com sua textura, aplicada sobre a face como no arquivo, e o estilo {{ui:Sombreado}} a mostra. A imagem é mantida no arquivo do ModelCraft quando você salva, e uma [imagem renderizada](topic:render) também a mostra. Um material texturizado pintado em um grupo ou componente inteiro dá a essa cópia apenas a cor do material.
- **Etiquetas.** Um grupo ou componente em uma etiqueta do SketchUp ganha uma etiqueta do ModelCraft com o mesmo nome, listada em {{ui:Etiquetas}}, mostrada ou oculta como estava no SketchUp. Se o seu modelo já tiver uma etiqueta com esse nome, essa etiqueta é usada.
- **Coisas ocultas chegam ocultas:** faces, arestas, grupos e componentes, e faces e arestas em uma etiqueta oculta. Você vê o que o SketchUp mostrava, e nada se perde: {{ui:Editar}} › {{ui:Mais}} › {{ui:Reexibir tudo}} as mostra. Veja [Ocultar, isolar e reexibir](topic:hide-isolate).
- **Arestas suaves e lisas** continuam suaves, então superfícies curvas ainda parecem lisas.
- **Tamanhos** saem corretos em qualquer unidade: arquivos do SketchUp são em polegadas internamente, e o ModelCraft faz a conversão.

## O que não entra

A barra de status diz o que ficou de fora, com as contagens.

- **Algumas texturas** mantêm apenas a cor do material: uma textura ausente do arquivo, uma imagem em um formato que os navegadores não exibem (como um arquivo do Photoshop), ou uma textura sem tamanho. Faces com textura projetada entram com a textura posicionada de forma aproximada.
- **Etiquetas em faces e arestas soltas.** O ModelCraft etiqueta apenas grupos e componentes, então uma face ou aresta com etiqueta própria entra sem etiqueta, e a barra de status as conta. Transforme essas faces em um grupo ({{key:Shift+G}}) e etiquete o grupo.
- **Imagens** colocadas no modelo, textos, cotas, guias, planos de seção, cenas e estilos.

## Problemas

- "Este não é um arquivo do SketchUp." ou "Este arquivo do SketchUp está danificado: …": o arquivo está cortado ou é outra coisa com a extensão `.skp`. Salve-o de novo no SketchUp, ou peça uma cópia nova.
- Um arquivo de uma versão do SketchUp mais nova do que o ModelCraft conhece é recusado, com a versão que encontrou.
- Um modelo feito só de imagens, textos ou cotas informa que não tem nada a mostrar.

## Levar o modelo de volta

O ModelCraft não consegue salvar arquivos `.skp`. Exporte Collada ({{ui:Exportar}} › `.dae`) e importe esse arquivo no SketchUp: grupos, componentes e cores passam; as texturas passam como a cor do material. Veja [Exportar seu modelo](topic:export-model).
