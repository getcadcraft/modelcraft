---
title: Quota e ridimensiona ciò che è disegnato
summary: Posiziona quote tra angoli, su archi e cerchi, o tra due spigoli; digita una nuova lunghezza per ridimensionare il modello. Digita di nuovo la lunghezza di uno spigolo o la larghezza, profondità e altezza di un gruppo in Informazioni sull'entità.
keywords: quota, quote, ridimensiona, cambia dimensione, modifica dimensione, lunghezza, larghezza, profondità, altezza, allunga, quota guida, annota, misura, a posteriori, raggio, diametro, angolo, angolare, arco, cerchio, R, Ø
from: a1f815ec
---

Le dimensioni in ModelCraft non sono fisse una volta che qualcosa è disegnato. Una quota mostra una lunghezza sul modello, e digitare una nuova lunghezza in essa ridimensiona il modello di conseguenza. Si può anche digitare di nuovo la lunghezza di uno spigolo, o la larghezza, profondità e altezza di un gruppo, in {{ui:Informazioni sull'entità}}.

## Posizionare una quota

1. Premere {{key:D}}, oppure fare clic su {{ui:Quota}} nella barra degli strumenti.
2. Fare clic su un angolo da cui misurare. Si aggancia ad angoli, punti medi e spigoli, come nel disegno.
3. Fare clic sul secondo angolo.

   Oppure fare clic una volta su uno **spigolo** (il suggerimento dice "Sullo spigolo") per quotare tutto lo spigolo con un solo clic.
4. Spostare il puntatore dove deve andare la linea di quota e fare clic. Si può anche digitare lo scostamento, come `0.5m`, e premere {{key:Enter}}.

   La linea di quota resta orizzontale per uno spigolo orizzontale, a meno che si guardi di lato. Per uno spigolo verticale resta nel piano verticale più rivolto verso chi guarda.

La barra di stato indica "Quota 4 m." Le quote mostrano la lunghezza nell'unità del modello e si aggiornano quando si cambia unità nel selettore.

## Raggio, diametro e angolo

Lo stesso strumento {{ui:Quota}} quota anche tondi e angoli:

- **Un arco:** fare clic sull'arco. Il suggerimento dice {{ui:Raggio}}. Spostare il puntatore dove deve andare il testo e fare clic: la quota legge **R 1.5 m**.
- **Un cerchio:** fare clic sul cerchio. Si ottiene un **diametro** (**Ø 3 m**) con una linea che attraversa il cerchio passando per il centro. I poligoni funzionano allo stesso modo, con i loro angoli sul cerchio.
- **L'angolo tra due spigoli:** fare clic su uno spigolo, poi su un secondo spigolo che lo incontra in un angolo (mentre si è sopra, il suggerimento dice {{ui:Angolo tra gli spigoli}}). Poi spostarsi nell'angolo voluto e fare clic. Dentro l'angolo si ottiene l'angolo tra gli spigoli; spostandosi da un lato si ottiene l'angolo adiacente (per esempio 150° invece di 30°). La distanza dal vertice a cui si fa clic stabilisce dove va l'arco; oppure digitare quella distanza.

Per passare un raggio a diametro o viceversa, selezionare la quota e scegliere in {{ui:Mostra come}} in {{ui:Informazioni sull'entità}}.

**Ridimensionare con queste:** digitare un nuovo raggio o diametro subito dopo averne posizionato uno, oppure selezionarlo più tardi e digitare. L'arco o il cerchio mantiene il proprio centro e cambia dimensione; una faccia che delimita (un disco, la fine di una fessura) cambia con esso. Due cose si limitano a misurare:

- **Una quota di angolo** non cambia mai il modello. Per cambiare un angolo, ruotare gli spigoli con {{ui:Ruota}}.
- **Il cerchio alla fine di un cilindro** (un cerchio tirato con {{ui:Spingi/tira}}) non si può ridimensionare dalla sua quota, perché anche i suoi lati dovrebbero cambiare. Scalare invece il cilindro, attorno al suo asse.

## Ridimensionare il modello con una quota

Subito dopo aver posizionato una quota, digitare una nuova lunghezza e premere {{key:Enter}}: `6m`, `12'`, `3500` in un modello in millimetri. Il modello cambia a quella dimensione.

Più tardi, in qualsiasi momento:

1. Con {{ui:Seleziona}}, fare clic sul testo o sulla linea della quota. {{ui:Informazioni sull'entità}} indica **Quota** e mostra la sua {{ui:Lunghezza}}.
2. Digitare la nuova lunghezza e premere {{key:Enter}}. Si può digitare direttamente nella casella del valore, oppure nella casella {{ui:Lunghezza}} in {{ui:Informazioni sull'entità}}.

### Cosa si sposta

Si sposta il secondo angolo su cui si è fatto clic, e con esso tutto ciò che sta oltre:

- **Entrambi gli angoli su un unico pezzo** (la larghezza di un box, l'altezza di un muro): il lato dell'angolo mobile scorre dentro o fuori, e le facce ad esso unite si allungano. Un box resta un solido chiuso, e tutto ciò che sta interamente da quel lato, come un componente finestra, si muove con esso.
- **Gli angoli su due pezzi separati** (lo spazio tra due box): il pezzo dell'angolo mobile si sposta intero, e lo spazio cambia.
- **L'angolo mobile dentro un gruppo o componente in cui non c'è l'altro angolo**: si sposta l'intero gruppo.
- **Entrambi gli angoli dentro lo stesso gruppo o componente**: viene allungato al suo interno. Un componente cambia in ogni punto in cui è collocato, come sempre quando lo si modifica.

Per cambiare quale estremità si muove, selezionare la quota e scegliere in {{ui:Si sposta}} in {{ui:Informazioni sull'entità}}:

| Scelta | Cosa succede |
|---|---|
| {{ui:Seconda estremità}} (predefinita) | Si sposta l'estremità su cui si è fatto clic per seconda |
| {{ui:Prima estremità}} | Si sposta l'estremità su cui si è fatto clic per prima |
| {{ui:Entrambe le estremità (centrato)}} | Ogni estremità si sposta di metà della variazione, così il centro resta fermo |

### Quando un ridimensionamento è rifiutato

ModelCraft non cambia nulla e spiega il motivo nella barra di stato:

- "una faccia uscirebbe dal suo piano": la quota attraversa obliquamente la forma. Quotare lungo uno spigolo, oppure lungo rosso, verde o blu.
- "una faccia si ridurrebbe a niente o si rovescerebbe all'interno": la nuova lunghezza è troppo corta per la forma.
- "l'estremità che si sposta non è su un angolo del modello": quella estremità è stata posta nello spazio vuoto o sul punto medio di uno spigolo. Scegliere l'altra estremità in {{ui:Si sposta}}, oppure posizionare la quota su due angoli.
- "una lunghezza deve essere superiore a zero".

Ogni ridimensionamento è un passo solo: {{key:Mod+Z}} lo annulla.

## Digitare di nuovo una dimensione in Informazioni sull'entità

Non sempre serve una quota:

- **Uno spigolo:** selezionarlo. La sua {{ui:Lunghezza}} in {{ui:Informazioni sull'entità}} è una casella in cui digitare. Digitare una lunghezza nella casella del valore funziona allo stesso modo. Si muove l'estremità più avanti lungo rosso, poi verde, poi blu, e ciò che è unito ad essa si allunga. Per esempio, digitare di nuovo lo spigolo anteriore inferiore di un box lo rende più largo verso destra.
- **Un gruppo o un componente:** selezionarlo. {{ui:Larghezza (rosso)}}, {{ui:Profondità (verde)}} e {{ui:Altezza (blu)}} sono caselle. Si muove il lato più lontano (destra, retro, alto). Sono gli assi propri del gruppo, prima di qualsiasi rotazione data.

Premere {{key:Enter}} per applicare, oppure {{key:Esc}} per rimettere il valore precedente.

## Le quote seguono il modello

Una quota è agganciata ai due angoli su cui è stata posizionata (un angolo: al suo vertice e alle estremità lontane dei suoi due spigoli; un raggio o un diametro: al suo arco o cerchio). Spostare, spingere/tirare o ridimensionare la geometria, e la quota segue e mostra la nuova lunghezza. Resta agganciata anche quando la geometria diventa un gruppo o un componente.

Se un'estremità è stata posizionata in un punto che non è un angolo (su una faccia o nello spazio vuoto), o il suo angolo è stato cancellato, quell'estremità resta dov'era. La quota misura comunque, ma può ridimensionare solo dall'altra estremità.

## Rimuovere le quote

- Una quota: selezionarla e premere {{key:Delete}}, oppure cliccarla con la {{ui:Gomma}}.
- Tutte le quote: senza nulla selezionato, fare clic su {{ui:Elimina tutte le quote}} in {{ui:Informazioni sull'entità}}.

Le quote sono salvate nel file `.modelcraft`. Non vengono esportate in altri formati, che portano solo il modello 3D. Un file con quote si apre comunque in una versione più vecchia di ModelCraft, senza di esse.
