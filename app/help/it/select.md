---
title: Selezionare elementi
summary: Clic, doppio clic e triplo clic, trascinare un riquadro a finestra o a intersezione, aggiungere e rimuovere con i tasti modificatori, ed eliminare.
keywords: seleziona, selezione, finestra, intersezione, aggiungi alla selezione, deseleziona, seleziona tutto, triplo clic, doppio clic, elimina, cancella
from: d56d1f89
---

{{ui:Seleziona}} ({{key:Space}}) è lo strumento con cui ModelCraft si avvia, e quello a cui riporta {{key:Esc}}. Gli elementi selezionati diventano blu, e {{ui:Informazioni sull'entità}} a destra indica di cosa si tratta.

## Clic

| Azione | Seleziona |
|---|---|
| Clic su una faccia o su uno spigolo | Quella faccia o quello spigolo |
| Clic su un gruppo o componente | L'intero gruppo o componente |
| Doppio clic su una faccia | La faccia e i suoi spigoli |
| Doppio clic su uno spigolo | Lo spigolo e le facce ai suoi lati |
| Doppio clic su un gruppo o componente | Lo apre per la modifica (vedi [Gruppi e componenti](topic:groups-components)) |
| Triplo clic su una faccia o su uno spigolo | Tutto ciò che è collegato: l'intero oggetto |
| Clic su uno spazio vuoto | Niente (annulla la selezione) |
| Doppio clic su uno spazio vuoto mentre si modifica un gruppo | Chiude il gruppo |

Gli spigoli sono più facili da colpire delle facce: quando il puntatore si trova a pochi pixel da uno spigolo, il clic prende lo spigolo.

## Trascinare un riquadro

- **Da sinistra a destra** disegna un riquadro pieno: una selezione a **finestra**. Sono selezionati solo gli elementi interamente contenuti.
- **Da destra a sinistra** disegna un riquadro tratteggiato: una selezione a **intersezione**. È selezionato tutto ciò che il riquadro tocca, e una faccia è selezionata quando il riquadro si trova interamente al suo interno.

Un gruppo o componente conta come un solo elemento: una finestra deve contenerlo per intero, un'intersezione deve solo toccarlo.

## Aggiungere e rimuovere

Tenere premuto un tasto mentre si fa clic o si trascina:

| Tasto | Effetto |
|---|---|
| {{key:Shift}} | Alterna: aggiunge ciò che non è selezionato, rimuove ciò che lo è |
| {{key:Mod}} | Aggiunge |
| {{key:Shift}} e {{key:Mod}} insieme | Rimuove |

Per selezionare tutto il modello (o tutto il gruppo in modifica), premere {{key:Mod+A}}.

## Annullare la selezione

Premere {{key:Esc}} (con {{ui:Seleziona}} come strumento), oppure fare clic su uno spazio vuoto.

## Eliminare ciò che è selezionato

Premere {{key:Delete}} o {{key:Backspace}}. Facce, spigoli, gruppi e guide nella selezione vengono rimossi in un solo passaggio; {{key:Mod+Z}} li riporta indietro.

Eliminando uno spigolo si rimuovono le facce che ne hanno bisogno, a meno che lo spigolo separasse solo due facce nello stesso piano: in tal caso le due facce si uniscono in una. Eliminando una faccia restano i suoi spigoli. Vedi [Cancellare e pulire](topic:erase).

## Selezionare dentro un gruppo

Fare clic su un gruppo ne seleziona l'intero contenuto. Per selezionare una faccia al suo interno, fare doppio clic sul gruppo per aprirlo, poi fare clic. Mentre un gruppo è aperto, i clic raggiungono solo ciò che vi è contenuto; il resto appare attenuato. Premere {{key:Esc}} senza nulla selezionato, oppure fare doppio clic su uno spazio vuoto, per chiuderlo.

La {{ui:Struttura}} a sinistra seleziona gruppi e componenti per nome, utile quando sono nascosti dietro altri elementi.
