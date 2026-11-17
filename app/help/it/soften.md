---
title: Ammorbidire e lisciare gli spigoli
summary: Nascondere gli spigoli tra facce che si incontrano con un angolo leggero, così che le forme curve appaiano come un'unica superficie liscia, in ModelCraft e nei file esportati.
keywords: ammorbidire, lisciare, spigoli morbidi, ombreggiatura liscia, nascondere spigoli, sfaccettature, sfaccettato, curvo, normali, indurire, angolo
from: 52d32453
---

Una forma curva in ModelCraft è fatta di facce piatte. Gli spigoli **morbidi** tra quelle facce non vengono disegnati, e le facce che collegano vengono ombreggiate come un'unica superficie liscia, così un cilindro a 24 lati appare tondo.

Quando si tira un cerchio con {{ui:Spingi/tira}}, i suoi lati vengono ammorbiditi automaticamente. Per le altre forme, ammorbidire per angolo.

## Ammorbidire per angolo

1. Selezionare ciò da ammorbidire: facce e spigoli, oppure un gruppo o componente (tutti i suoi spigoli).
2. In {{ui:Informazioni sull'entità}}, digitare un angolo in {{ui:Ammorbidisci fino a}}, per esempio `20`, e fare clic su {{ui:Ammorbidisci}}.

Ogni spigolo nella selezione le cui due facce ruotano di quell'angolo o meno diventa morbido; gli spigoli con una svolta più netta restano duri. Un prisma a 12 lati ha i lati che ruotano di 30° e i bordi di 90°, quindi `31` ammorbidisce solo i lati.

{{ui:Indurisci tutto}} rende di nuovo duro ogni spigolo nella selezione. Ciascuna operazione è un solo passaggio di annullamento.

## Da sapere

- Vengono ammorbiditi solo gli spigoli tra esattamente due facce. Gli spigoli liberi restano come sono.
- L'ombreggiatura liscia funziona solo attraverso gli spigoli morbidi: una faccia senza alcuno spigolo morbido viene ombreggiata piatta.
- Gli spigoli morbidi sono conservati nel file ModelCraft. Le esportazioni **glTF (.glb)** e **OBJ** portano l'ombreggiatura liscia (una normale per ogni angolo), così altri programmi mostrano la stessa superficie. Collada e STL esportano facce piatte.
- Gli spigoli morbidi sono nascosti in ogni stile di faccia, anche in {{ui:Raggi X}} e {{ui:Struttura a fili}}. Per vederli, selezionare la forma e fare clic su {{ui:Indurisci tutto}}; annullare riporta l'ammorbidimento.
