---
title: Elenco degli strumenti
summary: Ogni strumento di ModelCraft con il suo tasto, cosa fa ogni clic e cosa si può digitare nella casella del valore mentre lavora.
keywords: strumenti, barra degli strumenti, comandi, elenco, linea, rettangolo, cerchio, poligono, offset, arco, curva, spline, segui percorso, sweep, arco a 2 punti, arco dal centro, seleziona, spingi tira, sposta, ruota, scala, gomma, metro, quota, orbita, pan, zoom, posiziona componente
from: e08a274f
---

La punta nella barra di stato indica sempre cosa vuole lo strumento in corso. {{key:Esc}} annulla ciò che lo strumento sta facendo.

## Strumenti di disegno

| Strumento | Tasto | Clic | Digitare nella casella del valore |
|---|---|---|---|
| {{ui:Linea}} | {{key:L}} | Inizio, poi ogni punto successivo. Si ferma quando una faccia si chiude, o con {{key:Esc}} | Una lunghezza verso il puntatore; `[x,y,z]` un punto; `<dx,dy,dz>` uno scostamento ({{ui:Lunghezza}}) |
| {{ui:Rettangolo}} | {{key:R}} | Primo angolo (terreno o faccia), angolo opposto | Larghezza e profondità: `4m,3m` ({{ui:Quote}}) |
| {{ui:Cerchio}} | {{key:C}} | Centro (terreno o faccia), un punto sul bordo | Prima del primo clic: lati, `24s` o `24` ({{ui:Lati}}). Dopo: il raggio ({{ui:Raggio}}) |
| {{ui:Poligono}} | {{key:N}} | Centro, un angolo | Come Cerchio; parte da 6 lati |
| {{ui:Arco}} | {{key:A}} | Inizio, fine, poi la freccia | La lunghezza della corda dopo l'inizio ({{ui:Lunghezza}}); la freccia dopo la fine ({{ui:Freccia}}); `12s` per i segmenti |
| {{ui:Goniometro}} | — | Centro, punto 0°, poi l'angolo | L'angolo in gradi ({{ui:Angolo}}) |
| {{ui:Segui percorso}} | — | Selezionare un percorso, poi fare clic sulla faccia (oppure fare clic sulla faccia, poi su uno spigolo del percorso) | — |
| {{ui:Colora}} | {{key:B}} | Una faccia, gruppo o componente | — ({{key:Ctrl}} connessi, {{key:Shift}} tutti di quel colore, {{key:Alt}} prende un colore) |
| {{ui:Offset}} | {{key:F}} | Una faccia (oppure selezionare prima una faccia o degli spigoli), poi il lato e la distanza | La distanza ({{ui:Distanza}}); verso la faccia significa verso l'interno |
| {{ui:Curva}} | — | Punti che la curva attraversa; {{key:Enter}} o doppio clic termina | Una lunghezza lungo il puntatore, `[x,y,z]` o `<dx,dy,dz>` per il punto successivo |
| {{ui:Arco dal centro}} | — | Centro, inizio, poi la fine | Il raggio dopo il centro; l'angolo in gradi dopo l'inizio; `12s` per i segmenti |

## Strumenti di modifica

| Strumento | Tasto | Clic | Digitare nella casella del valore |
|---|---|---|---|
| {{ui:Seleziona}} | {{key:Space}} | Clic, doppio clic, triplo clic, trascinare un riquadro. Vedi [Selezionare elementi](topic:select) | Con una quota o uno spigolo selezionato: una nuova lunghezza, che ridimensiona il modello |
| {{ui:Spingi/tira}} | {{key:P}} | La faccia, poi la distanza. Doppio clic su una faccia per ripetere l'ultima distanza | Una distanza; un valore negativo va nell'altro senso ({{ui:Distanza}}) |
| {{ui:Sposta}} | {{key:M}} | Da un punto, a un punto. Tenere premuto {{key:Ctrl}} o {{key:Alt}} per copiare | Una distanza verso il puntatore, `<dx,dy,dz>` o `[x,y,z]` ({{ui:Distanza}}). Dopo una copia: `3x` o `/3` |
| {{ui:Ruota}} | {{key:Q}} | Centro (su una faccia per ruotare nel suo piano), direzione di inizio, direzione di fine | L'angolo in gradi ({{ui:Angolo}}) |
| {{ui:Scala}} | {{key:S}} | Il punto che resta fermo, un punto di riferimento, la nuova dimensione | Un fattore: `2`, `0.5` ({{ui:Scala}}) |
| {{ui:Gomma}} | {{key:E}} | Clic o trascinamento su spigoli, gruppi, guide e quote | nulla |
| {{ui:Metro}} | {{key:T}} | Da uno spigolo: una linea guida parallela. Da un punto: misura e lascia un punto guida | Lo scostamento ({{ui:Offset}}) o la distanza ({{ui:Lunghezza}}) |
| {{ui:Quota}} | {{key:D}} | Due angoli (o uno spigolo), poi dove va la linea di quota. Vedi [Quotatura e ridimensionamento](topic:dimensions) | Lo scostamento ({{ui:Offset}}). Subito dopo: una nuova lunghezza, che ridimensiona il modello |

{{ui:Sposta}}, {{ui:Ruota}} e {{ui:Scala}} agiscono sulla selezione. Se non c'è nulla di selezionato, prendono prima ciò su cui si fa clic (una faccia porta con sé i suoi spigoli).

## Strumenti di visualizzazione

| Strumento | Tasto | Trascinare per |
|---|---|---|
| {{ui:Orbita}} | {{key:O}} | Ruotare attorno alla parte del modello sotto il puntatore ({{key:Shift}} fa il pan) |
| {{ui:Pan}} | {{key:H}} | Spostare la vista |
| {{ui:Zoom}} | {{key:Z}} | Zoom: verso l'alto è avvicinare, verso il basso allontanare |
| {{ui:Estensione}} | {{key:Shift+Z}} | (un pulsante, non uno strumento) Adatta l'intero modello |

Con il mouse raramente servono questi: il trascinamento con il pulsante centrale ruota, il trascinamento con il pulsante destro fa il pan e la rotellina fa zoom con qualsiasi strumento. Vedi [Orbita, pan e zoom](topic:orbit-pan-zoom).

## Organizzare

| Pulsante | Tasto | Funzione |
|---|---|---|
| {{ui:Componente}} | {{key:G}} | Trasforma la selezione in un componente |
| {{ui:Gruppo}} | {{key:Shift+G}} | Trasforma la selezione in un gruppo |
| {{ui:Esplodi}} | nessuno | Riporta i gruppi e i componenti selezionati a geometria libera |

## Posiziona componente

Non è nella barra degli strumenti: fare clic su {{ui:Posiziona}} accanto a un componente nel pannello {{ui:Componenti}}. Fare clic una volta dove va l'origine del componente; lo strumento torna poi a {{ui:Seleziona}}.
