---
title: Pinta amb colors i materials
summary: Assigna a cares, grups i components un color sòlid o un material com maó, revestiment, teula o fusta, i es conserva en exportar.
keywords: pinta, color, colors, material, materials, textura, textures, maó, revestiment, teula, cobertes, fusta, pedra, rajola, formigó, estuc, herba, graba, vidre, metall, galleda de pintura, ompli, mostra, comptagotes, per defecte, glb, obj, mtl, collada
from: b1500523
---

Els colors ajuden a distingir parts d'un model, i els **materials** (maó, revestiment, cobertes, fusta, pedra, rajola, formigó, estuc, herba, vidre, metall) fan que es vegi com el que està construït. Tots dos es pinten de la mateixa manera.

## Tria un color

La secció {{ui:Colors}} de la dreta mostra una fila de colors sòlids, {{ui:Default}} (el que està creuat per una línia: sense color) i una mostra {{ui:+}} per a qualsevol altre color. Feu clic en un per fer-lo el color actual. L'eina Pinta comença amb aquest color.

## Pinta

1. Premeu {{key:B}} ({{ui:Paint}}), o, sense res seleccionat, feu clic en un color. (Amb alguna cosa seleccionada, fer clic en un color pinta la selecció a l'instant.)
2. Feu clic en una cara per pintar-la.
3. Feu clic en un grup o un component per pintar aquella còpia: les seves cares que no tenen color propi prenen aquest color. Les cares que hi heu pintat conserven el seu.

Per pintar diverses coses alhora, seleccioneu-les primer i després feu clic en un color, o feu clic en qualsevol d'elles amb {{ui:Paint}}. És un únic pas de desfer.

| Mantingueu premut | Feu clic en una cara | Què es pinta |
|---|---|---|
| — | | Aquella cara |
| {{key:Ctrl}} | | Cada cara connectada a ella que tingui el mateix color |
| {{key:Shift}} | | Cada cara d'aquell color del grup en què esteu treballant |
| {{key:Alt}} | | Res: en canvi, recolliu aquell color |

Per treure una cara del color, trieu {{ui:Default}} i feu clic a sobre.

## Pinta amb un material

La secció {{ui:Materials}}, sota {{ui:Colors}}, enumera la biblioteca de materials per tipus: maó i bloc, revestiment, cobertes, fusta, pedra, rajola, formigó, estuc, terreny, vidre i metall. Mantingueu el punter sobre una mostra per veure'n el nom. Feu clic en una, i després pinteu amb ella exactament com amb un color: {{key:B}}, i feu clic a cares, grups o components; o seleccioneu primer i feu clic al material.

- A l'estil **Ombrejat**, les cares mostren la textura del material. Línia oculta, filferro i raigs X mostren el seu color.
- Les textures es dibuixen **horitzontals al llarg de cada cara** i **amunt per ella**: les filades de maó es mantenen horitzontals a cada paret, les teules segueixen la pendent d'una coberta, i les taules d'un terra segueixen l'eix vermell. Tenen la mida real (un maó fa uns 215 mm de llarg), de manera que es veuen bé a qualsevol distància.
- En una [imatge renderitzada](topic:render) els materials mantenen la seva textura, rugositat i, per al vidre i el metall, la seva brillantor.
- Fer {{key:Alt}}-clic amb {{ui:Paint}} també recull el material d'una cara.

Les textures les dibuixa el mateix ModelCraft, de manera que funcionen sense connexió i són lliures d'usar per a qualsevol cosa (CC0).

## Components i colors

Un color pintat en una cara **dins** d'un component es veu a cada còpia, perquè les còpies comparteixen una sola definició. Un color pintat en una **còpia** des de fora (amb el component tancat) pertany només a aquella còpia, de manera que dues còpies d'un mateix component poden tenir colors diferents. {{ui:Entity info}} mostra el color d'una cara, grup o component seleccionat.

## Colors en els fitxers

- El fitxer de ModelCraft conserva tots els colors i tots els materials.
- Els altres formats reben el **color del material** (el seu aspecte de lluny) en lloc de la textura: glTF, Collada, OBJ, DWG i DXF, i la comprovació d'impressió 3D. En glTF, Collada i OBJ el material conserva el seu nom, com `Material_brick-red`.
- **glTF (.glb)** i **Collada (.dae)**: cada color esdevé un material. Un component mostrat en colors diferents s'escriu un cop per color. glTF també escriu les textures importades com a textures.
- **OBJ**: exportar baixa dos fitxers, el `.obj` i un fitxer de materials `.mtl` amb els colors. Guardeu-los a la mateixa carpeta. Amb textures importades, el `.obj`, el `.mtl` i les imatges arriben en un sol `.zip`.
- **DWG** conserva els colors exactes; **DXF** usa el més proper dels 255 colors CAD estàndard.
- **STL** i **PLY** porten colors: STL segons la convenció de VisCAM / SolidView (els programes que no la llegeixen l'ignoren), i PLY com un color a cada punt. Vegeu [Formats de fitxer en detall](topic:formats).

:::tip
Per modelar una pantalla, pinteu el marc de color carbó i el vidre de blau després de fer-ne un [desfasament](topic:draw-faces) de la cara frontal.
:::
