---
title: Fer una obertura a través d'un mur
summary: Dibuixar una finestra o una porta en un mur amb gruix i empènyer-la a través, de manera que el mur tingui un forat real.
keywords: finestra, porta, obertura, forat, mur, retalla, empènyer a través, buit, gruix, façana
from: 6b22f32c
---

Una obertura necessita un mur amb dues cares: una caixa, o un mur que heu fet estirant amunt un rectangle llarg i prim. Una cara sola i aïllada no té res a través del qual empènyer.

## Fer un mur per practicar

1. Premeu {{key:R}}, feu clic en una cantonada al terra i escriviu `6m,0.3m` (o `20',12"`), i després premeu {{key:Enter}}.
2. Premeu {{key:P}}, feu clic al rectangle i escriviu `3m` (o `10'`), i després premeu {{key:Enter}}.

Teniu un mur de 300 mm (12 in) de gruix.

## Dibuixar l'obertura

1. Gireu la vista perquè es vegi el costat llarg del mur.
2. Premeu {{key:R}}.
3. Passeu el punter per sobre de la cara del mur, i després feu clic on va la cantonada inferior de la finestra. El consell diu "A la cara".
4. Escriviu l'amplada i l'alçada de la finestra, com `1.2m,1.5m` (o `4',5'`), i premeu {{key:Enter}}.

   La finestra és una cara pròpia dins de la cara del mur, que ara té un forat al voltant.

Per col·locar-la a una distància exacta de la cantonada i del terra, useu primer [guies](topic:guides-measure): amb {{ui:Cinta}}, arrossegueu línies guia des de les vores inferior i final del mur, i després comenceu el rectangle on es creuen dues guies (el consell diu "A la guia").

## Empenyre-la a través

1. Premeu {{key:P}}.
2. Feu clic a la cara de la finestra i empenyeu-la cap al mur.
3. Mogueu-la fins que s'aturi a la cara de darrere, i després feu clic. O escriviu el gruix del mur, `300` (o `12`), i premeu {{key:Enter}}.

   ModelCraft s'atura a la cara de darrere i l'obre: el mur ara té un forat dret, amb quatre cares laterals (muntants, llinda i ampit) que el folren. {{ui:Informació de l'entitat}} encara anomena el mur un sòlid tancat quan està agrupat.

Si empenyeu menys que el gruix total, obteniu un rebaix en lloc d'un forat.

## Una porta

Dibuixeu el rectangle començant a la vora inferior de la cara del mur (el consell diu "A la vora" o "Punt final"), de manera que l'obertura arribi al terra. Empenyeu-la a través de la mateixa manera.

## Moltes finestres de la mateixa mida

1. Feu la primera obertura.
2. Per a les següents, dibuixeu els rectangles i després feu doble clic a cadascun amb {{ui:Prem/Estira}}: un doble clic repeteix l'última distància. Vegeu [Prem i estira](topic:push-pull#repeat-the-last-distance).

## Si no ha travessat

- El rectangle s'ha de dibuixar **sobre** la cara del mur. Si s'ha dibuixat a l'aire davant seu, és una cara separada: desfeu-ho i dibuixeu-lo de nou, començant sobre la cara.
- L'empenta s'atura a la primera cara darrere de l'obertura. Si hi ha alguna cosa més al mig del mur (una cara interior que va quedar d'un dibuix anterior), s'atura allà; esborreu les arestes d'aquella cara i torneu-ho a provar.
- La geometria en un grup separat no es talla. Obriu el grup que conté el mur i dibuixeu-hi l'obertura.
