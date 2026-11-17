---
title: Terreny: terra a partir de corbes de nivell, i com modelar-lo
summary: Feu terra a partir de corbes de nivell o com una quadrícula, i després alceu-lo i abaixeu-lo amb un pinzell suau.
keywords: terreny, terra, paisatge, topografia, corbes de nivell, línies de nivell, lloc, pendent, turó, pujol, caixa de sorra, smoove, modelar, nivellar, TIN
from: 407652b3
---

El terreny és terra fet de triangles, de manera que pot seguir qualsevol forma. És un grup: feu-hi doble clic per editar-lo.

## A partir de corbes de nivell

1. Obteniu les corbes de nivell a la seva altura: dibuixeu-les, o [importeu un plànol de situació](topic:site-plan) i moveu cada corba fins al seu nivell.
2. Seleccioneu-les (totes les arestes de totes les corbes).
3. {{ui:Edita}} › {{ui:Més}} › {{ui:Terreny a partir de les corbes seleccionades}}.

ModelCraft uneix els punts de les corbes amb triangles (un TIN), i suavitza totes les arestes interiors perquè el terra s'ombregi de manera suau. Les línies en si es mantenen; esborreu-les o amagueu-les quan ja no les necessiteu. Les corbes molt denses es redueixen a 8 000 punts.

## Una quadrícula per modelar

{{ui:Edita}} › {{ui:Més}} › {{ui:Quadrícula de terreny…}} demana una amplada, una profunditat i una mida de cel·la, i després col·loca una quadrícula plana de triangles on feu clic a la seva cantonada. Les cel·les petites es modelen més suaument però generen més cares (com a màxim 200 × 200 cel·les).

## Modelar: alça i abaixa el terra

1. Feu doble clic al terreny per obrir-lo.
2. {{ui:Edita}} › {{ui:Més}} › {{ui:Esculpeix el terreny}}. Cap cercle mostra el pinzell sobre el terra sota el punter.
3. Arrossegueu cap amunt per alçar el terra sota el pinzell, o cap avall per abaixar-lo. El centre es mou més, i el terra es redueix a zero a la vora del cercle, de manera que els pujols i les depressions surten suaus.

Per fer un pujol d'una altura exacta, feu clic una vegada, després escriviu l'altura, com ara `1.5m` (un signe menys l'abaixa), i premeu {{key:Enter}}. Per canviar el pinzell, escriviu una longitud abans de fer clic: `5m` dona un pinzell de 5 m de radi.

Cada modelatge és un sol pas de desfer.

## Coses a tenir en compte

- Modelar només mou cares triangulars, de manera que totes les cares es mantenen planes. Les cares dibuixades a mà (rectangles, polígons) no són terreny: l'eina ho indica.
- Modelar mou els punts només cap amunt i cap avall; no n'afegeix. Per a més detall, feu una quadrícula amb cel·les més petites.
- El terreny s'exporta com qualsevol altre grup. En IFC és un element de construcció intermedi, com tots els altres.
