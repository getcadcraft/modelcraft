---
title: Nodi: costruire un modello collegando
summary: Collegare numeri a punti, punti a curve, curve a superfici. Cambiando un numero, tutto ciò che segue si ricostruisce. Ogni nodo è anche una riga di CraftScript, e il grafo viene salvato nel file.
keywords: nodi, editor dei nodi, scripting visuale, parametrico, grafo, collegamenti, porte, forma libera, freeform, nurbs, loft, estrudi, rivoluzione, cerchio, curva, superficie, serie, intervallo, casuale, elenco, script, craftscript, grasshopper
from: 9c8e254f
---

L'editor **Nodi** costruisce geometria collegando tra loro dei riquadri. Ogni riquadro (un nodo) svolge un piccolo compito: crea un numero, un punto, un cerchio, un loft. Si collega il risultato di uno all'ingresso del successivo, e il modello segue quando si cambia un numero all'inizio.

Aprirlo dal pannello a destra: {{ui:Nodi}} › {{ui:Nodi…}}. Un file che ha già un grafo lo apre da solo. È una finestra sopra la vista 3D: trascinare la sua barra del titolo per spostarla, trascinare il suo angolo per ridimensionarla.

## Collegamenti

1. Scegliere un nodo dall'elenco a sinistra (digitare nella casella di ricerca per restringere; <kbd>Invio</kbd> aggiunge la prima corrispondenza). Il nodo compare al centro della tela.
2. Trascinare dal punto **uscita** rotondo a destra di un nodo al punto **ingresso** rotondo a sinistra di un altro. Il punto diventa verde quando è compatibile e rosso quando non lo è; puntarlo per vedere il motivo.
3. Un ingresso senza collegamenti mostra una casella per un valore digitato. Digitare un numero e premere <kbd>Tab</kbd>: il risultato si ricostruisce.
4. Il piccolo cerchio nella barra del titolo di un nodo è il suo **occhio**. Un nodo con l'occhio acceso viene disegnato nella vista 3D: come linee per le curve, ombreggiato per le superfici, come punti per i punti.

Trascinare un nodo dalla sua barra del titolo. Trascinare lo sfondo per spostare la vista, girare la rotella per lo zoom. <kbd>Delete</kbd> rimuove il nodo selezionato. {{ui:Riordina}} dispone i nodi in colonne, {{ui:Adatta}} li porta tutti in vista, {{ui:Annulla}} e {{ui:Ripristina}} scorrono le modifiche.

## Tipi e unità

Le porte hanno un tipo: numero, sì/no, punto, vettore, curva, superficie, mesh, solido, oppure "geometria" per qualsiasi di questi. Un punto può alimentare un ingresso vettore e viceversa. I numeri hanno un'unità: una **lunghezza** è in millimetri e un **angolo** è in gradi. Una lunghezza non può alimentare un angolo, e una lunghezza per una lunghezza (un'area) viene rifiutata, quindi un collegamento sbagliato viene fermato nel momento in cui lo si crea.

Un quadrato è una **lista**. Quando una lista arriva a un ingresso di valore singolo, il nodo viene eseguito una volta per ogni elemento, e il suo risultato diventa una lista. La lista più corta ripete il suo ultimo elemento. Per esempio, una **Serie** di altezze collegata a **Sposta** crea una pila di copie.

## Solidi e booleane come nodi

Il gruppo **Solidi** crea corpi chiusi dalle stesse superfici esatte del pannello Superfici: **Solido scatola**, **Solido cilindro** e **Solido sfera** (dimensioni in mm), **Unione**, **Sottrai** e **Interseca** (il secondo solido è preso dal primo; la tolleranza è quanto possono distare dalle superfici esatte i triangoli del motore dei solidi), **Raccordo tra facce** (le facce per il loro numero nel solido, 1 per la prima; un raggio e, se maggiore di 0, un raggio alla fine), **Volume del solido** (mm³) e **Solido in mesh** (per vederlo o convertirlo). Un solido ha un tipo di porta proprio: un punto o un numero non possono essere collegati a un ingresso solido, e il punto resta rosso. I nodi booleani e di raccordo usano il motore dei solidi del programma, caricato la prima volta che si apre l'editor.

## Errori

Un nodo che non riesce a svolgere il suo compito lo dice sotto il suo nome, in rosso ("Il raggio deve essere maggiore di zero."), e i nodi successivi attendono. Lo stesso messaggio compare come Problema nel pannello Problemi, da cui è possibile trovarlo.

## Ogni nodo è una riga di script

Premere {{ui:Script}} per vedere il grafo come CraftScript: una riga per nodo, per esempio `n3 = nd_circle(n2, n1, [0 0 1]);`. Modificare il testo e premere {{ui:Crea il grafo da questo script}} per riportarlo a grafo. Le stesse funzioni `nd_` funzionano in uno script CraftScript in PartCraft, quindi un grafo può essere eseguito, ripetuto o testato lì. I numeri casuali richiedono sempre un **seme**, così lo stesso grafo dà lo stesso risultato su ogni computer.

## Salvato con il file

Il grafo viene salvato nel file del modello. I nodi creano curve, superfici e mesh propri: non cambiano le facce del modello finché non lo si chiede.

## Converti in modello

Accendere l'occhio di un nodo che crea una superficie o una mesh, poi premere {{ui:Converti in modello}} nella finestra Nodi. Ogni superficie o mesh mostrata diventa un gruppo di facce nel modello, in metri, che si può modificare come qualsiasi altro. È un solo passo di annullamento. Il grafo resta, ma la copia non lo segue più: per averne una nuova, cambiare un numero e convertire di nuovo. Punti e curve non sono solidi, quindi vengono esclusi, e il messaggio dice quanti.
