---
title: Text 3D
summary: Afegiu lletres a un model com a cares, planes o sòlides, sobre qualsevol cara: un rètol, un número de casa, un nom en una porta.
keywords: text 3d, text, lletres, retolació, rètol, senyalització, número de casa, etiqueta, gravar, tipus de lletra, paraules
from: 923f5d93
---

{{ui:Text 3D}} al grup {{ui:Dibuix}} fa lletres fetes de cares, que podeu pintar, prémer/estirar o retallar en un sòlid.

## Afegeix text

1. Feu clic a {{ui:Text 3D}}.
2. Escriviu el text. Premeu {{key:Enter}} a la caixa per fer una segona línia.
3. Definiu {{ui:Alçada de la lletra}} (l'alçada d'una lletra majúscula, com ara `30cm` o `1'`) i {{ui:Profunditat}}:
   - `0` dona **lletres planes**: cares estirades sobre allò on les situeu, a punt per pintar o per prémer/estirar.
   - Una profunditat com `5cm` dona **lletres sòlides**: sòlids tancats que podeu usar amb les [eines de sòlids](topic:solids).
4. Feu clic a {{ui:Col·loca}}, i després feu clic on ha d'anar el text.

Sobre una cara, el text es estén sobre aquella cara, llegint-se d'esquerra a dreta: en un mur queda dret; sobre el terra o una taula queda pla al llarg del vermell. Lluny de qualsevol cara, queda sobre el terra.

El text és un **component** que porta el seu nom, de manera que cada còpia canvia si n'editeu una, i apareix a la llista {{ui:Components}} per tornar-lo a col·locar.

## Coses a tenir en compte

- Les lletres són el tipus de lletra d'una sola línia de ModelCraft, engreixit: net i llegible, sense cap elecció de tipografia encara.
- Es dibuixen les lletres, els dígits i els signes habituals (inclosos els caràcters accentuats); un caràcter que el tipus de lletra no té es mostra com una petita caixa.
- Per canviar les paraules, esborreu el text i torneu-lo a afegir.
- Per tallar un rètol en una superfície, feu lletres sòlides, col·loqueu-les a mig camí dins d'un grup sòlid, i [resteu-les](topic:solids).
