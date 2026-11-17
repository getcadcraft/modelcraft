---
title: Misurare e posizionare le guide
summary: Leggi lunghezze e aree, misura tra due punti con il metro e traccia linee guida e punti guida a cui agganciare il disegno.
keywords: misura, metro, goniometro, angolo, guida angolata, guida, linea guida, linea di costruzione, distanza, quota, lunghezza, area, offset, layout, punto guida
from: de6d04d9
---

## Leggere le dimensioni senza misurare

Seleziona qualcosa e osserva {{ui:Entity info}}:

- Uno spigolo mostra la sua **lunghezza**.
- Una faccia mostra la sua **area** e quanti fori ha.
- Più facce mostrano la loro **area totale**.
- Un gruppo o un componente mostra la sua **dimensione** (larghezza × profondità × altezza del box che lo contiene) e, se è un solido chiuso, il suo **volume**.
- Con nulla di selezionato, {{ui:Entity info}} mostra la dimensione dell'intero modello.

Lunghezze e aree usano l'unità scelta nel selettore in basso a destra. Un modello in millimetri mostra le aree da 0.01 m² in su in metri quadrati (una stanza di 4 × 3 m risulta "12 m²").

Mentre disegni, la casella del valore mostra in tempo reale la lunghezza, la dimensione, il raggio o la distanza, quindi raramente serve misurare dopo.

Per cambiare una dimensione dopo aver disegnato, seleziona uno spigolo o un gruppo e riscrivi la sua lunghezza o dimensione in {{ui:Entity info}}. Oppure inserisci una [quota](topic:dimensions) e digita una nuova lunghezza.

## Misurare tra due punti

1. Premi {{key:T}} per la misura con {{ui:Tape}}.
2. Fai clic su un punto: un angolo, un punto medio, un punto su una faccia o il terreno. (Fare clic su uno spigolo fa un'altra cosa; vedi sotto.)
3. Spostati sul secondo punto. La punta e la casella del valore ({{ui:Length}}) mostrano la distanza. Si aggancia a punti e alle direzioni rossa, verde e blu.
4. Fai clic. La barra di stato indica "Misurato 4' 6"." e nel secondo punto resta un **punto guida**.

Per lasciare invece il punto guida a una distanza esatta, digitala dopo il primo clic e premi {{key:Enter}}: va nella direzione verso cui stai puntando.

## Posizionare una linea guida

Una linea guida è una linea tratteggiata infinita, parallela a uno spigolo, a una distanza che scegli. Usa le guide per tracciare un arretramento, un'altezza di piano o il punto in cui inizia una finestra.

1. Premi {{key:T}}.
2. Fai clic su uno **spigolo** (non sulla sua estremità). La punta indica "Su spigolo".
3. Spostati lontano dallo spigolo, dal lato in cui deve andare la guida. Segue una linea tratteggiata parallela allo spigolo, e la casella del valore ({{ui:Offset}}) mostra la distanza.
4. Fai clic, oppure digita l'offset e premi {{key:Enter}}: `1.5m`, `5'`.

   La barra di stato indica "Linea guida a 1.5 m dallo spigolo."

Iniziare da una linea guida esistente crea un'altra guida parallela ad essa, così puoi distanziare una griglia partendo da una guida.

Se digiti un offset senza prima allontanarti dallo spigolo, ModelCraft non può capire quale lato intendi: "Allontanarsi prima dallo spigolo per indicare il lato."

## Una guida angolata: Goniometro

1. Fai clic su {{ui:Protractor}} nel gruppo {{ui:Modify}}.
2. Fai clic sul centro: il punto per cui passa la guida. Su una faccia, il goniometro giace su quella faccia; altrove giace piatto. Dopo questo clic, {{key:Right}}, {{key:Left}} o {{key:Up}} lo drizzano perpendicolarmente al rosso, al verde o al blu (premi di nuovo per annullare).
3. Fai clic su un punto che imposti 0°, ad esempio lungo uno spigolo.
4. Spostati sull'angolo desiderato e fai clic: aggancia a passi di 15°. Oppure digita l'angolo in gradi, ad esempio `22.5`, e premi {{key:Enter}}; la guida va dal lato in cui si trova il puntatore.

La linea guida passa per il centro con quell'angolo. Disegna lungo di essa con {{ui:Line}} per una pendenza di tetto, uno smusso o un muro svasato.

## Disegnare rispetto alle guide

Gli strumenti di disegno si agganciano alle linee guida ("Su guida") e ai punti guida ("Punto guida"), e al punto in cui una linea guida incrocia una direzione d'asse. Inizia un rettangolo dove si incrociano due guide per posizionarlo esattamente.

## Rimuovere le guide

- Una guida: fai clic su di essa con {{ui:Select}} e premi {{key:Delete}}, oppure fai clic su di essa con la {{ui:Eraser}}.
- Tutte le guide: con nulla di selezionato, fai clic su {{ui:Delete all guides}} in {{ui:Entity info}}.

Le guide sono salvate nel file `.modelcraft`. Non vengono esportate in altri formati.
