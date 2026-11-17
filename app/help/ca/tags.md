---
title: Etiquetes: mostra i amaga conjunts d'elements
summary: Doneu a grups i components una etiqueta, com ara Mobiliari o Murs, i amagueu o mostreu de cop tot el que té aquella etiqueta.
keywords: etiquetes, etiqueta, capes, capa, mostra, amaga, visibilitat, organitza, mobiliari, murs, sense etiqueta, canvia el nom de l'etiqueta, elimina l'etiqueta
from: c1a95a05
---

Una etiqueta és un nom que doneu a grups i components, com ara **Mobiliari**, **Murs** o **Lloc**, de manera que podeu amagar o mostrar de cop tot el que té aquella etiqueta. Les etiquetes són el que els programes CAD anomenen capes. Per amagar una sola cosa cada vegada, vegeu [Amaga, aïlla i mostra](topic:hide-isolate).

## Crea una etiqueta

1. A {{ui:Etiquetes}}, a la dreta, feu clic a {{ui:Afegeix etiqueta}}.
2. Escriviu-ne el nom i premeu {{key:Enter}}.

Per canviar el nom d'una etiqueta, feu clic al seu nom a {{ui:Etiquetes}}, escriviu el nou i premeu {{key:Enter}}. Dues etiquetes no poden tenir el mateix nom.

## Etiqueta grups i components

1. Seleccioneu un o més grups o components.
2. A {{ui:Informació de l'entitat}}, trieu l'etiqueta a {{ui:Etiqueta}}. {{ui:Nova etiqueta…}} en crea una de nova i etiqueta la selecció amb ella.

{{ui:Sense etiqueta}} n'elimina l'etiqueta. El número que hi ha al costat de cada etiqueta a {{ui:Etiquetes}} indica quants grups i components la tenen.

Etiqueteu grups i components, no cares i arestes soltes: dibuixeu primer com a grups les coses que voleu etiquetar (seleccioneu-les i premeu {{key:Shift+G}}).

## Amaga i mostra

Feu clic a l'ull que hi ha al costat d'una etiqueta. Tot el que té aquella etiqueta desapareix de la vista, on sigui dins del model (també dins d'altres grups), i els clics i els ajustos passen per sobre. Torneu a fer clic a l'ull per tornar-ho a mostrar. Les coses {{ui:Sense etiqueta}} sempre es mostren.

Si esteu editant dins d'un grup l'etiqueta del qual amagueu, el grup es tanca.

## Elimina una etiqueta

Feu clic a la paperera que hi ha al costat. Tot el que tenia l'etiqueta passa a ser {{ui:Sense etiqueta}}, i es mostra.

## Coses a tenir en compte

- Les etiquetes, els seus noms i quines estan amagades es desen al fitxer de ModelCraft. Copiar un grup etiquetat a un altre model també hi porta l'etiqueta.
- Amagar i mostrar una etiqueta, i qualsevol altre canvi a les etiquetes, és un sol pas de desfer.
- Les exportacions inclouen tot, també les etiquetes amagades, igual que passa amb les coses amagades.
- Les capes dels plànols de situació en DWG i DXF encara no s'importen com a etiquetes: tot el dibuix s'importa com un sol grup.
