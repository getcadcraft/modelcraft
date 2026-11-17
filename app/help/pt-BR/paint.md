---
title: Pintar com cores e materiais
summary: Dê às faces, grupos e componentes uma cor sólida ou um material como tijolo, revestimento, telhas ou madeira, e mantenha-os ao exportar.
keywords: pintar, cor, cores, material, materiais, textura, texturas, tijolo, revestimento, telhas, cobertura, madeira, pedra, azulejo, concreto, reboco, grama, cascalho, vidro, metal, balde de tinta, preencher, amostra, conta-gotas, padrão, glb, obj, mtl, collada
from: b1500523
---

Cores ajudam a distinguir as partes de um modelo, e **materiais** (tijolo, revestimento, cobertura, madeira, pedra, azulejo, concreto, reboco, grama, vidro, metal) fazem o modelo parecer com aquilo de que é feito. Os dois são aplicados do mesmo jeito.

## Escolher uma cor

A seção {{ui:Cores}} à direita mostra uma fileira de cores sólidas, {{ui:Padrão}} (a cor cortada por uma linha: sem cor) e uma amostra {{ui:+}} para qualquer outra cor. Clique em uma para torná-la a cor atual. A ferramenta Pintar começa com ela.

## Pintar

1. Pressione {{key:B}} ({{ui:Pintar}}) ou, com nada selecionado, clique em uma cor. (Com algo selecionado, clicar em uma cor pinta a seleção na hora.)
2. Clique em uma face para pintá-la.
3. Clique em um grupo ou componente para pintar aquela cópia: as faces dele que não têm cor própria recebem esta cor. As faces que você pintou dentro dele mantêm a cor delas.

Para pintar várias coisas de uma vez, selecione-as primeiro e depois clique em uma cor, ou clique em qualquer uma delas com {{ui:Pintar}}. É um único passo de desfazer.

| Segure | E clique em uma face | O que é pintado |
|---|---|---|
| — | | Essa face |
| {{key:Ctrl}} | | Toda face conectada a ela que tenha a mesma cor |
| {{key:Shift}} | | Toda face dessa cor no grupo em que você está trabalhando |
| {{key:Alt}} | | Nada: você pega essa cor |

Para devolver uma face a nenhuma cor, escolha {{ui:Padrão}} e clique nela.

## Pintar com um material

A seção {{ui:Materiais}}, abaixo de {{ui:Cores}}, lista a biblioteca de materiais por tipo: tijolo e bloco, revestimento, cobertura, madeira, pedra, azulejo, concreto, reboco, solo, vidro e metal. Passe o cursor sobre uma amostra para ver o nome. Clique em uma e pinte exatamente como com uma cor: {{key:B}}, clique em faces, grupos ou componentes; ou selecione antes e clique no material.

- No estilo **Sombreado**, as faces mostram a textura do material. Linha oculta, arame e raio-X mostram a cor dele.
- As texturas são desenhadas **niveladas em cada face** e **para cima nela**: as fiadas de tijolo ficam niveladas em todas as paredes, as telhas descem a inclinação de um telhado, as tábuas de um piso seguem o eixo vermelho. Elas estão no tamanho real (um tijolo tem cerca de 215 mm de comprimento), então ficam certas a qualquer distância.
- Em uma [imagem renderizada](topic:render), os materiais mantêm a textura, a rugosidade e, para vidro e metal, o brilho.
- {{key:Alt}}-clique com {{ui:Pintar}} também pega o material de uma face.

As texturas são desenhadas pelo próprio ModelCraft, então funcionam offline e são livres para qualquer uso (CC0).

## Componentes e cores

Uma cor pintada em uma face **dentro** de um componente aparece em todas as cópias, porque as cópias compartilham uma única definição. Uma cor pintada em uma **cópia** a partir de fora (com o componente fechado) pertence só àquela cópia, então duas cópias de um mesmo componente podem ter cores diferentes. {{ui:Informações da entidade}} mostra a cor de uma face, grupo ou componente selecionado.

## Cores nos arquivos

- O arquivo do ModelCraft mantém todas as cores e todos os materiais.
- Os outros formatos recebem a **cor do material** (a aparência de longe) no lugar da textura: glTF, Collada, OBJ, DWG e DXF, e a verificação para impressão 3D. Em glTF, Collada e OBJ, o material mantém o nome, como `Material_brick-red`.
- **glTF (.glb)** e **Collada (.dae)**: cada cor vira um material. Um componente mostrado em cores diferentes é escrito uma vez por cor. O glTF também grava as texturas importadas como texturas.
- **OBJ**: exportar baixa dois arquivos, o `.obj` e um arquivo de materiais `.mtl` com as cores. Mantenha-os na mesma pasta. Com texturas importadas, o `.obj`, o `.mtl` e as imagens vêm juntos em um `.zip`.
- **DWG** mantém as cores exatas; **DXF** usa a mais próxima das 255 cores-padrão do CAD.
- **STL** e **PLY** levam cores: STL na convenção VisCAM / SolidView (programas que não a leem a ignoram), PLY como uma cor em cada ponto. Veja [Formatos de arquivo em detalhe](topic:formats).

:::tip
Para modelar uma tela, pinte a moldura de cinza-carvão e o vidro de azul depois de [deslocar](topic:draw-faces) a face da frente.
:::
