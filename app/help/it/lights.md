---
title: Illuminare un modello con lampade
summary: Inserire lampade, faretti e pannelli luminosi in un modello perché i render mostrino stanze di notte o interni illuminati, con ombre morbide.
keywords: luce, luci, lampada, lampade, illuminazione, lampadina, luce da soffitto, faretto, downlight, pannello luminoso, luce d'area, lumen, luminosità, temperatura colore, calda, notte, interno, render
from: c8d72cbc
---

Le lampade illuminano le [immagini renderizzate](topic:render). Non modificano la vista 3D, dove ogni lampada appare come un piccolo segno nel proprio colore.

## Aggiungere una lampada

1. Nella sezione {{ui:Luci}} a destra, fare clic su {{ui:Lampada}}, {{ui:Faretto}} o {{ui:Pannello luminoso}}.
2. Fare clic dove va collocata. Lo snap funziona come durante il disegno.
   - Su un soffitto o una parete una **lampada** è sospesa a 25 cm dalla faccia, dal lato da cui si guarda; un **pannello luminoso** giace sulla faccia e illumina in direzione opposta.
   - Un **faretto** richiede due clic: dove si trova, poi che cosa illumina.

La nuova lampada è selezionata in {{ui:Luci}}, pronta per essere modificata.

## Modificare una lampada

Fare clic sul nome di una lampada in {{ui:Luci}}, oppure sul suo segno nella vista con {{ui:Seleziona}}. Poi:

| Impostazione | Funzione |
|---|---|
| {{ui:Luminosità (lumen)}} | Quanta luce emette. Una lampadina domestica emette circa 800 lumen; un pannello luminoso da soffitto 3000 |
| {{ui:Colore}} | {{ui:Calda}} (una lampadina domestica), {{ui:Neutra}} o {{ui:Luce diurna}}, oppure un colore qualsiasi |
| {{ui:Fascio (gradi)}} | Il cono di un faretto, da bordo a bordo |
| {{ui:Dimensione della lampadina}}, {{ui:Larghezza}}, {{ui:Profondità}} | Lampadine e pannelli più grandi danno ombre più morbide |
| {{ui:Rosso (x)}}, {{ui:Verde (y)}}, {{ui:Altezza}} | Dove si trova |

La spunta accanto al nome di una lampada la accende o la spegne. {{ui:Elimina la luce}} la rimuove. Ogni modifica è un solo passaggio: {{key:Ctrl+Z}} la annulla. Le lampade sono salvate nel file `.modelcraft`.

## Immagini di notte

In {{ui:Render di un'immagine…}}, spuntare {{ui:Usa un'altra data e ora per questa immagine}} e scegliere un'ora serale. Con il sole tramontato il cielo diventa buio e solo le lampade illuminano il modello. Aumentare {{ui:Luminosità}} nella finestra di dialogo se l'immagine è troppo scura, oppure aggiungere lampade.

:::tip
Per una stanza vista dall'interno, posizionare la camera dentro la stanza (ruotare e ingrandire, oppure usare una [scena](topic:scenes)), aggiungere una lampada sul soffitto e fare il render di notte. In modalità {{ui:Veloce}} gli angoli lontani da una lampada restano più scuri che in una foto; la [modalità alta qualità](topic:render#high-quality) fa rimbalzare la luce sulle pareti.
:::
