---
title: Cancellare e pulire
summary: Cancellare spigoli, gruppi e guide con la gomma o il tasto Delete, ricucire le facce divise e correggere le facce rivolte nel verso sbagliato.
keywords: cancella, gomma, elimina, rimuovi, ricuci, unisci facce, pulisci, linee vaganti, inverti faccia, faccia posteriore, annulla
from: 80b92a81
---

## Cancellare con la gomma

1. Premere {{key:E}} per la {{ui:Gomma}}.
2. Fare clic su uno spigolo, un gruppo o un componente, o una guida. Viene cancellato.
3. Per cancellarne diversi, premere e trascinare sopra di essi. Tutto ciò che si sorvola viene evidenziato, e tutto va via al rilascio.

La gomma non seleziona le facce: una faccia sparisce quando si cancellano gli spigoli di cui ha bisogno. Le facce sono ciò che la gomma attraversa per trovare gli spigoli.

## Cosa succede alle facce

- **Uno spigolo tra due facce nello stesso piano** (una linea disegnata attraverso un pavimento, per esempio) scompare e le due facce si **ricuciono** in una sola.
- **Uno spigolo di cui una faccia ha bisogno per restare chiusa** (lo spigolo di una scatola) porta via quella faccia con sé. Cancellare uno spigolo superiore di una scatola elimina il coperchio e un lato, lasciando una scatola aperta.
- **I capi sciolti** (punti che nessuno spigolo usa più) vengono ripuliti.

Cancellare l'ultima copia di un componente rimuove anche il componente dal pannello {{ui:Componenti}}.

## Cancellare con il tasto Delete

1. Selezionare ciò che si vuole rimuovere con {{ui:Seleziona}}.
2. Premere {{key:Delete}} o {{key:Backspace}}.

Anche questo rimuove le facce. Una faccia cancellata così lascia dietro di sé i suoi spigoli, quindi si può cancellare la parte superiore di una scatola mantenendone il contorno, e disegnare qualcos'altro lì.

## Pulire le linee vaganti su una faccia piana

Se un muro o un pavimento mostra linee indesiderate (rimaste dal disegno), cancellarle con la {{ui:Gomma}}. Le linee che giacciono nella faccia si ricuciono e spariscono; la faccia resta.

## Una faccia rivolta nel verso sbagliato

Una faccia vista da dietro è grigio-bluastra. Se una faccia mostra il grigio-bluastro sull'esterno del modello:

1. Selezionare la faccia.
2. Fare clic su {{ui:Inverti faccia}} in {{ui:Informazioni sull'entità}}.

La direzione delle facce conta soprattutto all'esportazione: motori di rendering, motori di gioco e stampanti 3D possono nascondere o interpretare male le facce che puntano verso l'interno.

## Annullare un errore

{{key:Mod+Z}} annulla un passo alla volta, {{key:Mod+Y}} (o {{key:Mod+Shift+Z}}) ripristina. Un trascinamento con la gomma è un solo passo, qualunque sia il numero di cose coinvolte. La barra di stato indica cosa è stato annullato: "Annullata cancellazione."
