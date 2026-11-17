---
title: Moure i girar els eixos de dibuix
summary: Gireu els eixos vermell, verd i blau perquè coincideixin amb un edifici que no és quadrat respecte a ells, o alineeu-los amb una cara, perquè el dibuix i l'escriptura els segueixin.
keywords: eixos, eixos de dibuix, origen, alinea eixos, gira eixos, restableix eixos, edifici inclinat, obliqu, sistema de coordenades, ucs
from: cab258f7
---

Els eixos vermell, verd i blau guien tot el que dibuixeu: els rectangles s'alineen amb ells, les línies s'hi bloquegen, i el terra és el pla vermell-verd. Quan un edifici és inclinat (un plànol de situació que no és quadrat respecte al nord, un ala girada 30°), moveu els eixos fins a ell, perquè el dibuix segueixi els seus murs. El model en si no es mou.

Les tres ordres són a {{ui:Edita}} › {{ui:Més}}.

## Col·locar els eixos

1. {{ui:Edita}} › {{ui:Més}} › {{ui:Situa els eixos}}.
2. Feu clic on va l'origen, per exemple una cantonada de l'edifici.
3. Feu clic a un punt al llarg del nou eix vermell, per exemple més enllà d'un mur.
4. Feu clic a un punt en direcció al nou eix verd. El verd es fa perpendicular al vermell, i el blau es posa perpendicular a tots dos.

Els eixos es dibuixen al seu lloc nou. Un rectangle que dibuixeu ara sobre el terra, o que escriviu com `4m,3m`, va al llarg del vermell i verd girats; les tecles de fletxa s'hi bloquegen; i la referència a l'origen és al nou origen.

## Alinear els eixos a una cara

Seleccioneu una cara i després {{ui:Edita}} › {{ui:Més}} › {{ui:Alinea els eixos amb la cara}}. El blau apunta llavors fora de la cara, el vermell va al llarg de la seva aresta més llarga, i l'origen és al principi d'aquesta aresta. Serveix per dibuixar sobre una coberta inclinada com si fos el terra.

## Restablir els eixos

{{ui:Edita}} › {{ui:Més}} › {{ui:Restableix els eixos}} els torna on començava el model.

## Coses que cal saber

- Dins d'un grup o component obert s'usen els seus propis eixos (giren amb ell); els eixos del model s'apliquen al nivell superior.
- Els eixos es desen al fitxer de ModelCraft, i cada canvi és un pas del desfer.
- Les exportacions i les vistes estàndard ({{ui:Superior}}, {{ui:Davant}}…) encara usen les direccions pròpies del model.
