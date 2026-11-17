---
title: Scolpire una mesh
summary: Modellare una mesh come argilla con i pennelli — disegna, argilla, liscia, afferra, gonfia, piega, pizzica, appiattisci — proteggere parti con una maschera, specchiare su X e aggiungere dettaglio dove si scolpisce.
keywords: scultura, scolpire, pennello, pennelli, argilla, disegna, liscia, afferra, gonfia, piega, pizzica, appiattisci, maschera, simmetria, specchio, dettaglio, topologia dinamica, penna, pressione, tavoletta, stilo
from: 5477801a
---

L'area di lavoro Scultura modella una mesh con i pennelli, come con l'argilla: trascinando sulla superficie questa si alza, si abbassa, si leviga o segue il puntatore sotto un pennello rotondo, più forte al centro e che svanisce fino a zero sul bordo.

## Avvio

Selezionare una mesh e scegliere {{ui:Scultura}} nell'elenco delle aree di lavoro. Un gruppo o un componente diventa prima una mesh, come nell'area di lavoro Mesh. I pennelli lavorano sui vertici della mesh, quindi una mesh con più vertici produce forme più fini: suddividerla prima ({{ui:Suddividi}} dell'area di lavoro Mesh, oppure un modificatore Superficie di suddivisione da applicare), oppure attivare {{ui:Dettaglio}}.

## Pennelli

| Pennello | Tasto | Cosa fa |
| --- | --- | --- |
| {{ui:Disegna}} | {{key:D}} | Alza la superficie sotto il pennello |
| {{ui:Argilla}} | {{key:C}} | Costruisce strati piatti, riempiendo prima gli avvallamenti |
| {{ui:Liscia}} | {{key:S}} | Appiana le protuberanze; tenere premuto {{key:Shift}} per levigare con qualsiasi pennello |
| {{ui:Afferra}} | {{key:G}} | Trascina la superficie insieme al puntatore |
| {{ui:Gonfia}} | {{key:I}} | Gonfia la superficie lungo la sua direzione |
| {{ui:Piega}} | {{key:Shift+C}} | Incide una scanalatura netta |
| {{ui:Pizzica}} | {{key:P}} | Attira la superficie verso il centro del pennello |
| {{ui:Appiattisci}} | {{key:T}} | Spinge la superficie verso il suo piano medio |
| {{ui:Maschera}} | {{key:M}} | Dipinge una maschera che protegge la superficie dagli altri pennelli |

Tenere premuto {{key:Ctrl}} durante il tratto per lavorare al contrario (abbassare invece di alzare, una cresta invece di una scanalatura, rimuovere la maschera), oppure attivare {{ui:Sottrai}}.

## Dimensione e intensità

La dimensione del pennello è in pixel sullo schermo, quindi risulta la stessa a qualsiasi zoom: {{key:[}} e {{key:]}} lo rimpiccioliscono e lo ingrandiscono, {{key:Shift+[}} e {{key:Shift+]}} cambiano l'intensità. Il pannello mostra entrambe.

Con una penna su tavoletta, premere più forte rende il pennello più grande e più intenso; il pannello può disattivare l'una o l'altra cosa.

## Specchio, maschera e dettaglio

- {{ui:Specchio X}} ({{key:X}}) scolpisce entrambi i lati attraverso il rosso contemporaneamente, per volti e figure.
- La maschera appare più scura durante la scultura. {{ui:Cancella maschera}} ({{key:Alt+M}}) la toglie, {{ui:Inverti maschera}} ({{key:Ctrl+I}}) maschera ciò che era libero e libera ciò che era mascherato. La maschera viene conservata con la mesh.
- {{ui:Dettaglio}} aggiunge triangoli dove si scolpisce: gli spigoli più lunghi della dimensione impostata nel pannello (pixel sullo schermo) vengono divisi sotto il pennello. Richiede una mesh di triangoli e chiede di crearne una prima.

Ogni tratto è un passo di annullamento.

:::note
Dettaglio aggiunge soltanto triangoli; non rimuove quelli diventati minuscoli. Un Remesh (area di lavoro Mesh) livella di nuovo l'intera mesh.
:::

Vedi anche [Modificare una mesh](topic:mesh-edit), [Mesh](topic:meshes) e [Modificatori su una mesh](topic:modifiers).
