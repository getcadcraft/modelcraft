---
title: Interseca cares
summary: Dibuixa les línies on les cares es travessen, perquè puguis empènyer, esborrar o pintar les peces.
keywords: interseca, interseca cares, interseca amb el model, interseca amb la selecció, talla, obertura, forat, uneix, línies on es creuen les cares, booleà
from: 6bc58526
---

Quan una forma travessa una altra, ModelCraft no dibuixa la línia on es troben les seves cares: només se superposen. **Interseca** dibuixa aquestes línies, com a arestes, perquè les cares es partisquin allà. Després pots fer Prem/Estira, esborrar o pintar les peces.

Totes dues ordres són a {{ui:Edita}} › {{ui:Més}}.

## Interseca amb el model

Talla la selecció contra **totes les cares de la pantalla**.

Per exemple, una biga (un grup) travessa un mur (un altre grup), i vols una obertura al mur:

1. Fes doble clic al mur per obrir-lo, i selecciona totes les seves cares ({{key:Ctrl+A}}).
2. {{ui:Edita}} › {{ui:Més}} › {{ui:Interseca amb el model}}.

El contorn de la biga es dibuixa a les dues cares del mur, com a dues cares noves. Empeny-ne una a través del mur per fer l'obertura, i després tanca el mur.

## Interseca amb la selecció

Talla les cares, grups i components seleccionats **només els uns contra els altres**. Selecciona'n almenys dos.

## On van les línies

Les línies sempre es dibuixen en el **context obert**: al model quan no hi ha cap grup obert, o al grup que estàs editant. Els grups i components que no estan oberts no es canvien. Per tant, per tallar les cares d'un grup, obre'l primer, com a l'exemple anterior.

## Coses a tenir en compte

- Les cares que es troben en el mateix pla no s'intersequen.
- Les línies que tanquen un bucle en una cara fan una cara nova, com les línies dibuixades.
- Cada intersecció és un pas per desfer. Si no hi ha res que es creuï, no canvia res.
- Per a formes tancades, les [eines de sòlids](topic:solids) (Unió, Resta) fan tota la feina en un sol pas.
