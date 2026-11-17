---
title: Ruotare e scalare
summary: Ruotare intorno a un punto facendo clic o digitando i gradi, e ridimensionare in modo uniforme per un fattore.
keywords: grip di scala, stira, non uniforme, per asse, ribalta, specchio, copia speculare, ribalta lungo, ruota, gira, angolo, gradi, goniometro, scala, ridimensiona, ingrandisci, riduci, fattore, scala uniforme
from: 45cdcb49
---

## Ruota

{{ui:Ruota}} ({{key:Q}}) fa ruotare la selezione intorno a un punto centrale. Servono tre clic: il centro, una direzione di partenza e la direzione finale.

1. Selezionare ciò che si vuole ruotare. Se non c'è nulla di selezionato, Ruota prende la cosa su cui si fa clic per prima.
2. Premere {{key:Q}}. Un anello segue il puntatore, mostrando il piano in cui si ruoterà.
3. Fare clic sul centro di rotazione.
   - Sul terreno o nello spazio vuoto, l'anello giace piatto (blu): la rotazione avviene intorno a un asse verticale, come ruotare un edificio sul suo sito.
   - Su una faccia, l'anello giace nel piano di quella faccia: la rotazione avviene intorno alla direzione propria della faccia. Fare clic su un muro per ruotare qualcosa intorno a un asse orizzontale.
4. Fare clic su un punto che stabilisce da dove inizia l'angolo, per esempio lungo uno spigolo della cosa che si sta ruotando.
5. Muovere il puntatore intorno al centro. L'angolo appare nella punta e nella casella del valore ({{ui:Angolo}}). Scatta a passi di 15° quando ci si avvicina a uno di essi.
6. Fare clic per terminare, oppure digitare l'angolo in gradi e premere {{key:Enter}}: `90`, `45`, `-30`.

   Gli angoli positivi ruotano in senso antiorario, visti dal lato verso cui è rivolto l'anello.

Premere {{key:Ctrl}} (o {{key:Alt}}) durante la rotazione per ruotare una **copia** lasciando l'originale dov'è, come con Sposta; il suggerimento indica se la copia è attiva, e premendo di nuovo il tasto la si disattiva. Digitare `3x` subito dopo una copia ruotata per ottenere altre copie intorno allo stesso centro.

Come Sposta, ruotare una parte della geometria collegata torce le facce ad essa attaccate. Raggruppare prima le cose per ruotarle intere.

:::note
Il suggerimento dice che i tasti freccia scelgono l'asse di rotazione, ma in questa versione, prima del primo clic, fanno orbitare la vista. Per scegliere l'asse, fare clic sul centro su una faccia orientata nel modo desiderato. Vedi [Non ancora implementato](topic:not-built-yet).
:::

## Scala

{{ui:Scala}} ({{key:S}}) ridimensiona la selezione. Selezionare prima ciò che si vuole ridimensionare, poi premere {{key:S}}: appaiono piccoli quadratini (grip) sugli angoli, sugli spigoli e a metà dei lati del suo riquadro.

### Stirare o scalare con i grip

- Un grip d'**angolo** scala in modo uniforme in ogni direzione, intorno all'angolo opposto.
- Il grip a metà di un **lato** stira lungo quella sola direzione, intorno al lato opposto: allunga un riquadro senza renderlo più alto.
- Il grip a metà di uno **spigolo** del riquadro stira nelle due direzioni che lo attraversano.
- Tenere premuto {{key:Ctrl}} quando si fa clic su un grip per scalare invece intorno al centro del riquadro.

Fare clic su un grip, muovere il puntatore e fare clic di nuovo; oppure fare clic sul grip e digitare un fattore (`2` raddoppia, `0.5` dimezza) e premere {{key:Enter}}. Per dare a ogni direzione un proprio fattore, digitarne tre, per rosso, verde e blu: `2,1,0.5`. All'interno di un gruppo aperto, le direzioni sono quelle del gruppo.

### Scalare intorno a un punto qualsiasi

Fare clic in un punto diverso da un grip per scalare in modo uniforme intorno a un punto a scelta. Servono tre clic:

1. Selezionare ciò che si vuole ridimensionare. Se non c'è nulla di selezionato, Scala prende la cosa su cui si fa clic per prima.
2. Premere {{key:S}}.
3. Fare clic sul punto che resta fermo (non su un grip), per esempio uno spigolo in basso.
4. Fare clic su un punto di riferimento. La sua distanza dal primo punto vale 1×.
5. Muovere il puntatore verso o lontano dal primo punto. Il fattore appare nella punta e nella casella del valore ({{ui:Scala}}).
6. Fare clic per terminare, oppure digitare un fattore e premere {{key:Enter}}: `2` raddoppia la dimensione, `0.5` la dimezza.

### Scalare a una dimensione esatta

Per rendere qualcosa di una lunghezza precisa, calcolare il fattore: nuova lunghezza divisa per lunghezza attuale. Nella modalità a tre clic la casella del valore esegue calcoli, quindi digitare `4.2/3.6` per rendere lungo 4.2 m un muro di 3.6 m. La casella del valore di un grip accetta solo numeri semplici: calcolare prima il fattore (4.2 diviso 3.6 fa circa 1.1667). Selezionare prima lo spigolo per leggerne la lunghezza attuale in {{ui:Informazioni sull'entità}}.

### Correggere un'importazione con dimensione sbagliata

I file OBJ non hanno unità, quindi un modello disegnato in millimetri arriva 1000 volte più grande. Selezionare il gruppo importato, premere {{key:S}}, fare clic su un grip d'angolo, digitare `0.001` e premere {{key:Enter}}. Per un modello disegnato in pollici, digitare `0.0254`.

## Da sapere

- Scalare intorno a un punto con i tre clic è uniforme. Per stirare in una sola direzione, usare un grip di lato o di spigolo (vedi sopra).
- Scalare un gruppo o un componente modifica la copia scalata; le altre copie di un componente mantengono la loro dimensione.
- Premere {{key:Esc}} prima dell'ultimo clic per annullare.

## Ribalta

{{ui:Modifica}} › {{ui:Altro}} › {{ui:Ribalta lungo il rosso}}, {{ui:Ribalta lungo il verde}} o {{ui:Ribalta lungo il blu}} specchia la selezione sul posto, attraverso il centro del suo riquadro: una scala con rampa a sinistra diventa una con rampa a destra. Le facce restano rivolte verso l'esterno, e un gruppo o componente viene specchiato nel suo insieme (il suo interno non viene riscritto).

{{ui:Copia ribaltata lungo il rosso}} (e verde, blu) lascia l'originale dov'è e mette una copia speculare accanto, dall'altro lato del riquadro della selezione: l'altra anta di una coppia di porte, l'altra ala di un edificio. La geometria sciolta che tocca lì si unisce all'originale, come fa sempre la geometria a contatto; per tenerle separate, rendere prima gruppo l'originale.

All'interno di un gruppo aperto, rosso, verde e blu sono gli assi propri del gruppo.
