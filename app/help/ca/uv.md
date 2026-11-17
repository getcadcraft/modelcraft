---
title: Disposa les UV d'una malla
summary: Marqueu les costures, desplegueu, projecteu i empaqueteu les coordenades de textura d'una malla a l'espai de treball UV, i comproveu-les amb un escaquejat i els colors d'estirament.
keywords: uv, uvs, desplegar, desplega, costura, costures, textura, coordenades de textura, atles, empaquetar, empaqueta, illa, illes, escaquejat, estirament, distorsió, projecció de caixa, projecció de cilindre, projecció d'esfera, conforme, basat en angles, lscm, abf
from: 00028f20
---

Una textura és una imatge plana; una malla no és plana. Les seves **UV** indiquen on és cada cantonada de cada cara dins la imatge. L'espai de treball UV les crea: obriu la malla al llarg de les **costures**, estengueu les peces planes (**desplegueu**) i les ajusteu dins del quadrat (**empaqueteu**).

## Obriu-lo

Seleccioneu una malla i trieu {{ui:UV}} a la llista {{ui:Espai de treball}}. Un grup o un component primer es converteix en malla, com a l'espai de treball Malla. La vista 3D es mou a la meitat esquerra; l'**editor UV** a la dreta mostra les cares de la malla disposades sobre el quadrat de textura. La selecció funciona com a l'espai de treball Malla, i el que seleccioneu en una vista queda seleccionat a l'altra.

## Marqueu les costures

Les costures són els llocs on la malla es pot obrir; es mostren en vermell a les dues vistes.

- Seleccioneu arestes ({{ui:Aresta}}, o {{key:2}}) i premeu {{ui:Marca la costura}} ({{key:Ctrl+E}}). {{ui:Neteja la costura}} ({{key:Ctrl+Shift+E}}) les lleva.
- {{ui:Costures a les vores vives}} marca cada vora viva i cada aresta on les cares es troben a més de 60°: una caixa es divideix en els seus sis costats.
- {{ui:Costures des de les UV}} marca les costures on les UV ja es trenquen, per exemple després d'una projecció.

Una peça tancada necessita costures per poder estendre's planament: una pilota necessita almenys un tall, i un tub, un tall al llarg de la seva longitud.

## Desplega

Seleccioneu les cares que voleu disposar (o cap, per a tota la malla) i premeu {{ui:Desplega}} ({{key:U}}). Cada peça entre costures s'estén plana, mantenint els angles tan fidels com pot (aplanament basat en angles), i després les peces s'empaqueten dins del quadrat. {{ui:Conforme}} desplega mitjançant mapes conformes de mínims quadrats: més ràpid, però una mica menys fidel en peces molt corbades. Una forma que es pot fer a partir d'una planxa plana, com el costat d'un cilindre tallat una vegada, es desplega sense cap estirament.

## Projecta

Per a formes senzilles, sovint n'hi ha prou amb una projecció:

| Projecció | Què fa |
| --- | --- |
| {{ui:Caixa}} | Cada cara sobre el costat de la caixa al qual mira més |
| {{ui:Cilindre}} | Al voltant de l'eix blau: horitzontalment és l'angle al voltant, verticalment és l'alçada |
| {{ui:Esfera}} | Des del centre: horitzontalment és l'angle al voltant, verticalment és la latitud |
| {{ui:Des de la vista}} | Tal com es veuen les cares ara a la vista 3D |

Una cara que travessa la unió del cilindre o de l'esfera es manté en una sola peça, de manera que les seves UV poden sobrepassar una mica la vora dreta del quadrat; les textures es repeteixen allà.

## Organitza

- {{ui:Empaqueta}} ajusta les peces (illes) dins del quadrat a una mida de texel, cadascuna girada per ocupar el mínim espai. El tauler defineix l'espai que queda entre elles.
- {{ui:Gira 90°}} i {{ui:Simetria}} giren o reflecteixen les UV de les cares seleccionades.
- A l'editor UV, arrossegueu una cara seleccionada per moure les UV de la selecció, o situeu el punter sobre l'editor i premeu {{key:R}} o {{key:S}} i després mogueu per girar-les o escalar-les (un clic ho manté, {{key:Esc}} ho cancel·la). {{key:G}} mou sense arrossegar. Feu doble clic sobre una cara (o {{key:L}}) per seleccionar tota la seva illa. La roda fa zoom; arrossegueu amb el botó del mig o el dret per desplaçar; {{key:F}} torna a ajustar el quadrat.

Cada canvi és un pas de desfer.

## Comproveu-les

- {{ui:Escaquejat}} mostra un escaquejat etiquetat sobre la malla segons les seves UV: quadres uniformes i quadrats volen dir que la textura s'estén de manera uniforme; les etiquetes indiquen en quina direcció va.
- {{ui:Estirament}} acoloreix cada cara segons quant l'estiren les seves UV: blau sense estirament, passant pel verd, fins al vermell quan és molt. El tauler tria si això mesura **angles doblegats** o **mida canviada**, i mostra la mitjana.

Vegeu també [Edita una malla](topic:mesh-edit), [Malles](topic:meshes) i [Modificadors en una malla](topic:modifiers).
