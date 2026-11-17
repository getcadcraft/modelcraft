---
title: Mesh
summary: Trasformare un gruppo o un componente in una mesh, il tipo di oggetto con cui modellano gli strumenti di contenuti 3D, e riportarlo a geometria push/pull.
keywords: mesh, meshes, poligono, poligoni, n-gon, quad, quadrilateri, vertici, half-edge, uv, uvs, converti, converti in mesh, converti in geometria, suddivisione, scultura, modellazione, contenuti 3d
from: e32363e8
---

ModelCraft ha due tipi di geometria. La **geometria push/pull** è quella che si disegna: facce piane che si attaccano tra loro, si tagliano a vicenda e si richiudono. Una **mesh** è il tipo di oggetto con cui modellano gli strumenti per contenuti 3D: facce con un numero qualsiasi di angoli, ciascun angolo può portare le proprie coordinate di texture (UV), normali e colori, e ogni vertice valori come i pesi. Una mesh si colloca come un gruppo o un componente, e sta accanto alla geometria push/pull nello stesso modello.

## Trasformare un gruppo o un componente in mesh

1. Selezionare un gruppo o un componente.
2. In {{ui:Informazioni sull'entità}}, fare clic su {{ui:Converti in mesh}}.

Le sue facce diventano le facce della mesh (una faccia con fori entra come triangoli), gli spigoli netti restano vivi, gli spigoli morbidi sono ombreggiati in modo liscio, e pittura, materiali e texture importate restano sulle loro facce. I gruppi e i componenti al suo interno vengono uniti in un'unica mesh. Gli spigoli liberi sono esclusi: una mesh mantiene le facce. Ogni collocazione di un componente mostra la mesh. È un solo passaggio di annullamento.

## Che cosa mostra Informazioni sull'entità

Selezionare una mesh per vederne facce, vertici e spigoli, se è un solido chiuso (e il suo volume), e la sua dimensione come collocata. Una mesh con spigoli aperti indica quanti.

## Riportare una mesh a geometria push/pull

Selezionare la mesh e fare clic su {{ui:Converti in geometria}}. Le facce piane tornano come erano; una faccia i cui angoli non sono su un unico piano torna come triangoli. Gli spigoli netti restano vivi, gli altri morbidi. {{ui:Esplodi}} mette le facce di una mesh direttamente nel gruppo che la contiene.

## Da sapere

- Fare doppio clic su una mesh per [modificarne vertici, spigoli e facce](topic:mesh-edit) nell'area di lavoro Mesh. Convertirla in geometria per modificarla con push/pull; spostarla, ruotarla, scalarla, copiarla, dipingerla, nasconderla e applicarle un tag come un gruppo qualsiasi.
- Esportazioni, stampa 3D, render e VR vedono una mesh come insieme delle sue facce.
- Un file che contiene una mesh viene salvato come versione più recente del file `.modelcraft`, quindi ModelCraft 0.6 e precedenti non possono aprirlo; i file senza mesh si aprono anche in esse come prima. Convertire prima le mesh in geometria per condividere un file con chi usa una versione precedente.
- L'annullamento su una mesh conserva solo ciò che ogni passaggio ha modificato, quindi anche una mesh molto grande si annulla rapidamente.

Vedere anche [Gruppi e componenti](topic:groups-components) e [Non ancora implementato](topic:not-built-yet).
