---
title: Importar um modelo SKP
summary: Importe um ficheiro .skp com os seus grupos, componentes, cores, texturas, etiquetas e arestas suaves, veja o que entrou e o que não entrou, e continue a modelar.
keywords: skp, importar, abrir skp, componentes, grupos, etiquetas, camadas, materiais, cores, texturas, oculto, arestas suaves, 3d warehouse, migrar, mudar
from: 325d3c81
---

O ModelCraft lê ficheiros do SketchUp (`.skp`) com o seu próprio leitor, na própria página. Nada é enviado, e funciona sem ligação sempre que o ModelCraft funcione. Foram testados ficheiros do SketchUp desde a versão 3 até à de 2026.

## Importar o ficheiro

1. Clique em {{ui:Import}} no grupo {{ui:File}} (ou arraste o ficheiro `.skp` para a vista 3D).
2. Escolha o ficheiro.

   A barra de estado diz "A ler house.skp…" enquanto lê, e depois o que entrou, por exemplo "Importado house.skp (SketchUp 25.0.575): 1240 faces, 6 componentes, num grupo."

O modelo inteiro chega como um único grupo com o nome do ficheiro, selecionado, e a vista faz zoom para ele. Um {{key:Mod+Z}} tira tudo outra vez, incluindo as etiquetas.

:::tip
Explodir o grupo importado ({{ui:Entity info}} › {{ui:Explode}}) quando quiser que o conteúdo fique solto no modelo em vez de num só grupo.
:::

## O que entra

- **Faces** com os seus furos, e **arestas** que não fazem parte de uma face.
- **Grupos** entram como grupos, e **componentes** como componentes: cada cópia de um componente é uma colocação de uma só definição, por isso editar uma cópia altera todas, como no SketchUp. Os nomes vêm com eles.
- **Cores.** O material próprio de uma face dá-lhe a cor. Um material pintado num grupo ou componente torna-se a pintura dessa colocação, por isso as faces dentro dele sem cor própria herdam-na, como no SketchUp. Um componente pintado de vermelho num sítio e de azul noutro continua a ser um só componente.
- **Texturas.** Uma face pintada com um material com textura entra com a sua textura, aplicada à face como no ficheiro, e o estilo {{ui:Shaded}} mostra-a. A imagem fica guardada no ficheiro do ModelCraft ao guardar, e uma [imagem renderizada](topic:render) também a mostra. Um material com textura pintado num grupo ou componente inteiro dá a essa cópia apenas a cor do material.
- **Etiquetas.** Um grupo ou componente numa etiqueta do SketchUp recebe uma etiqueta do ModelCraft com o mesmo nome, listada em {{ui:Tags}}, mostrada ou oculta como estava no SketchUp. Se o modelo já tiver uma etiqueta com esse nome, usa-se essa.
- **Coisas ocultas entram ocultas:** faces, arestas, grupos e componentes, e faces e arestas numa etiqueta oculta. Vê-se o que o SketchUp mostrava, e nada se perde: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} mostra-as. Veja [Ocultar, isolar e mostrar](topic:hide-isolate).
- **Arestas suaves e lisas** mantêm-se suaves, por isso as superfícies curvas continuam a parecer lisas.
- **Os tamanhos** saem corretos em qualquer unidade: os ficheiros do SketchUp usam polegadas internamente, e o ModelCraft converte-os.

## O que não entra

A barra de estado indica o que ficou de fora, com contagens.

- **Algumas texturas** mantêm apenas a cor do material: uma textura em falta no ficheiro, uma imagem num formato que os navegadores não conseguem mostrar (como um ficheiro do Photoshop), ou uma textura sem tamanho. As faces com uma textura projetada entram com a textura colocada de forma aproximada.
- **Etiquetas em faces e arestas soltas.** O ModelCraft só etiqueta grupos e componentes, por isso uma face ou aresta com etiqueta própria entra sem etiqueta, e a barra de estado conta-as. Transforme essas faces num grupo ({{key:Shift+G}}) e etiquete o grupo.
- **Imagens** colocadas no modelo, texto, cotas, guias, planos de corte, cenas e estilos.

## Problemas

- "Este não é um ficheiro do SketchUp." ou "Este ficheiro do SketchUp está danificado: …": o ficheiro está cortado ou é outra coisa com a extensão `.skp`. Guarde-o de novo a partir do SketchUp, ou peça uma cópia nova.
- Um ficheiro de uma versão do SketchUp mais recente do que o ModelCraft conhece é recusado, e indica a versão que encontrou.
- Um modelo composto só por imagens, texto ou cotas indica que não tem nada para mostrar.

## Levar o modelo de volta

O ModelCraft não consegue guardar ficheiros `.skp`. Exporte em Collada ({{ui:Export}} › `.dae`) e importe-o no SketchUp: grupos, componentes e cores passam; as texturas passam como a cor do material. Veja [Exportar o seu modelo](topic:export-model).
