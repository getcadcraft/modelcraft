---
title: Plans de secció: tallar el model
summary: Col·loqueu un pla de secció per veure dins del model, feu-lo lliscar a través seu, invertiu-lo o desactiveu el tall.
keywords: secció, pla de secció, tall de secció, tall, tall en perspectiva, retall, interior, planta, llesca, secció transversal
from: 28c3a645
---

Un pla de secció talla el model per obrir-lo, de manera que podeu veure'n l'interior i treballar-hi: una planta d'una casa, l'interior d'un armari. El model no es modifica; el tall és només una vista.

## Col·loqueu-ne un

1. Feu clic a {{ui:Secció}} al grup {{ui:Càmera}}.
2. Feu clic a una cara. El pla es col·loca sobre aquesta cara, amb quatre fletxes que apunten cap a vosaltres.

   Feu clic lluny de qualsevol cara per col·locar un quadrat de pla perpendicular a la direcció en què mireu més. Premeu primer una tecla de fletxa per posar-lo perpendicular al vermell ({{key:Right}}), al verd ({{key:Left}}) o al blau ({{key:Up}}) en lloc d'això.

El costat cap on apunten les fletxes és el que queda **retallat**. Un pla col·locat sobre una cara encara no talla res: feu-lo lliscar cap dins del model.

## Feu-lo lliscar, invertiu-lo, desactiveu-lo

Feu clic al contorn del pla per seleccionar-lo. A {{ui:Informació de l'entitat}}:

- {{ui:Al llarg de les seves fletxes}} indica on és. Escriviu una distància nova i premeu {{key:Enter}} per fer-lo lliscar a través del model; escriure `-1m` en un pla col·locat sobre una cara frontal el mou 1 m cap dins del model.
- {{ui:Inverteix}} gira les fletxes, de manera que l'altre costat queda retallat.
- {{ui:Activa (talla el model)}}: només un pla talla alhora. Marqueu la casella d'un altre pla, o col·loqueu-ne un de nou, i aquest és el que talla.
- Canvieu-li el nom a {{ui:Nom}}; suprimiu-lo amb {{key:Delete}} o amb l'{{ui:Esborrador}}.

Quan el pla travessa un sòlid tancat, el tall s'omple amb un color fosc. La geometria que no és tancada (una cara única, una caixa oberta) es talla però no s'omple.

## Mostra i amaga

A {{ui:Vistes}}:

- {{ui:Mostra els plans de secció}} amaga els contorns i les fletxes dels plans (el tall es manté).
- {{ui:Mostra les seccions de tall}} desactiva el tall i mostra el model sencer, sense esborrar els plans.

La [vista de presentació](topic:styles-shadows#presentation-view) també amaga els contorns.

## Coses a saber

- Allò que queda retallat no es pot clicar ni enganxar, de manera que podeu dibuixar sobre el que mostra el tall.
- Els plans de secció, quin és l'actiu i els dos interruptors es desen al fitxer de ModelCraft. Cada canvi és un pas de desfer.
- Les exportacions sempre contenen el model sencer: una secció és una vista, no una edició.
