---
title: Pintar com cores e materiais
summary: Dar às faces, grupos e componentes uma cor sólida ou um material, como tijolo, revestimento, telhas ou madeira, e mantê-los ao exportar.
keywords: pintar, cor, cores, material, materiais, textura, texturas, tijolo, revestimento, telhas, cobertura, madeira, pedra, ladrilho, betão, estuque, relva, brita, vidro, metal, balde de tinta, preencher, amostra, conta-gotas, predefinido, glb, obj, mtl, collada
from: b1500523
---

As cores ajudam a distinguir partes de um modelo, e os **materiais** (tijolo, revestimento, cobertura, madeira, pedra, ladrilho, betão, estuque, relva, vidro, metal) fazem-no parecer aquilo de que é construído. Ambos pintam da mesma forma.

## Escolher uma cor

A secção {{ui:Cores}} à direita mostra uma fila de cores sólidas, {{ui:Predefinida}} (a cortada por uma linha: sem cor) e uma amostra {{ui:+}} para qualquer outra cor. Clique numa para a tornar a cor atual. A ferramenta Pintar começa com ela.

## Pintar

1. Prima {{key:B}} ({{ui:Pintar}}), ou, sem nada selecionado, clique numa cor. (Com algo selecionado, clicar numa cor pinta a seleção de imediato.)
2. Clique numa face para a pintar.
3. Clique num grupo ou num componente para pintar essa cópia: as suas faces que não têm cor própria tomam esta cor. As faces que pintou dentro dele mantêm as suas.

Para pintar várias coisas de uma vez, selecione-as primeiro e depois clique numa cor, ou clique em qualquer uma delas com {{ui:Pintar}}. É um só passo de anulação.

| Mantenha premido | E clique numa face | O que é pintado |
|---|---|---|
| — | | Essa face |
| {{key:Ctrl}} | | Cada face ligada a ela que tenha a mesma cor |
| {{key:Shift}} | | Cada face dessa cor no grupo em que está a trabalhar |
| {{key:Alt}} | | Nada: em vez disso, capta essa cor |

Para devolver uma face a nenhuma cor, escolha {{ui:Predefinida}} e clique nela.

## Pintar com um material

A secção {{ui:Materiais}}, por baixo de {{ui:Cores}}, lista a biblioteca de materiais por tipo: tijolo e bloco, revestimentos, coberturas, madeira, pedra, ladrilho, betão, estuque, solo, vidro e metal. Passe o cursor sobre uma amostra para ver o nome. Clique numa e pinte com ela exatamente como com uma cor: {{key:B}}, clique em faces, grupos ou componentes; ou selecione primeiro e clique no material.

- No estilo **Sombreado**, as faces mostram a textura do material. Linha oculta, arame e raio-X mostram a sua cor.
- As texturas seguem **a horizontal de cada face** e **a vertical dela**: as fiadas de tijolo ficam niveladas em cada parede, as telhas descem pelo declive de um telhado, as tábuas de um pavimento seguem o eixo vermelho. Estão à sua escala real (um tijolo tem cerca de 215 mm de comprimento), por isso ficam certas a qualquer distância.
- Numa [imagem renderizada](topic:render), os materiais mantêm a textura, a rugosidade e, para vidro e metal, o brilho.
- Com {{key:Alt}} premido, clique com {{ui:Pintar}} para também captar o material de uma face.

As texturas são desenhadas pelo próprio ModelCraft, por isso funcionam offline e são livres para qualquer uso (CC0).

## Componentes e cores

Uma cor pintada numa face **dentro** de um componente aparece em todas as cópias, porque as cópias partilham uma só definição. Uma cor pintada numa **cópia** a partir de fora (com o componente fechado) pertence apenas a essa cópia, por isso duas cópias de um componente podem ter cores diferentes. {{ui:Informações da entidade}} mostra a cor de uma face, grupo ou componente selecionado.

## Cores nos ficheiros

- O ficheiro ModelCraft mantém cada cor e cada material.
- Os outros formatos recebem a **cor do material** (o seu aspeto à distância) em vez da textura: glTF, Collada, OBJ, DWG e DXF, e a verificação para impressão 3D. No glTF, Collada e OBJ o material mantém o nome, como `Material_brick-red`.
- **glTF (.glb)** e **Collada (.dae)**: cada cor torna-se um material. Um componente mostrado em cores diferentes é escrito uma vez por cor. O glTF também escreve as texturas importadas como texturas.
- **OBJ**: exportar transfere dois ficheiros, o `.obj` e um ficheiro de materiais `.mtl` com as cores. Mantenha-os na mesma pasta. Com texturas importadas, o `.obj`, o `.mtl` e as imagens chegam num só `.zip`.
- **DWG** mantém as cores exatas; **DXF** usa a cor mais próxima das 255 cores padrão do CAD.
- **STL** e **PLY** levam cores: STL na convenção VisCAM / SolidView (os programas que não a leem ignoram-na), PLY como cor em cada ponto. Veja [Formatos de ficheiro em detalhe](topic:formats).

:::tip
Para modelar um ecrã, pinte a moldura de cinzento-carvão e o vidro de azul depois de fazer um [offset](topic:draw-faces) da face da frente.
:::
