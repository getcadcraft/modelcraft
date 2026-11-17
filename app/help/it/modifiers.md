---
title: Modificatori su una mesh, un gruppo o un componente
summary: Scalare, specchiare, creare serie, levigare, smussare, tagliare e piegare una mesh senza modificarla, e ripetere o scalare un gruppo o un componente con la stessa pila; renderla definitiva quando si è pronti.
keywords: modificatore, modificatori, pila, gruppo, componente, scala, bake, modifica sorgente, non distruttivo, specchio, serie, serie radiale, suddivisione, superficie di suddivisione, levigatura, smusso, solidifica, spessore, booleana, taglio, sposta, rumore, salda, decima, semplifica, reticolo, gabbia, deformazione curva, piega, avvolgi, applica
from: dd5ec1cb
---

Un **modificatore** cambia ciò che una mesh mostra senza cambiare la mesh stessa. Specchiare una metà di un pezzo e modellare solo quella metà; arrotondare un cubo con una superficie di suddivisione e continuare a modificare il cubo. I modificatori stanno in una **pila** e lavorano in ordine, dall'alto in basso. Ciò che si vede, esporta, stampa e renderizza è la mesh con ogni modificatore attivo.

## Aggiungere un modificatore

1. Selezionare una mesh. Nell'area di lavoro Modello la sua sezione **Modificatori** si trova in {{ui:Informazioni sull'entità}}; nell'area di lavoro Mesh si trova nel pannello a destra.
2. Scegliere un modificatore da {{ui:Aggiungi un modificatore…}}. Viene messo in fondo alla pila.
3. Modificare le sue impostazioni sotto il nome. Le lunghezze accettano gli stessi valori della casella del valore, quindi `600mm`, `2'6"` e `(6m)/4` funzionano tutti.

Ogni modifica è un solo passaggio di annullamento: {{key:Mod+Z}} la annulla.

## I pulsanti di ogni modificatore

- La casella di spunta lo attiva o disattiva.
- Il pulsante dello schermo lo mostra o lo nasconde nella vista (resta nella pila).
- Il pulsante della camera lo mostra o lo nasconde nelle immagini renderizzate e nei video, così un modificatore può valere solo per i render (o solo per la vista).
- Le frecce lo spostano su o giù nella pila. L'ordine conta: specchiare e poi suddividere dà una giunzione liscia, suddividere e poi specchiare no.
- {{ui:Applica}} rende la forma parte della mesh: i modificatori sopra di esso e questo vengono eseguiti sulla mesh stessa e lasciano la pila. È un solo passaggio di annullamento.
- La croce lo rimuove.

## I modificatori

| Modificatore | Funzione |
| --- | --- |
| Scala | Scala rispetto all'origine dell'oggetto, con un fattore per rosso, verde e blu. Vale anche per un gruppo o un componente. |
| Specchio | Aggiunge una copia speculare attraverso rosso, verde o blu passando per l'origine della mesh, e unisce le metà dove si incontrano. |
| Serie | Copia in linea (un passo pari alla propria dimensione moltiplicata per i numeri indicati, più un passo fisso), attorno a un asse, o lungo una curva nel modello. Un gruppo o un componente segue la linea. |
| Superficie di suddivisione | Leviga la mesh con la suddivisione Catmull-Clark. Gli spigoli netti restano piegati. I render possono usare più livelli della vista. |
| Smusso | Arrotonda ogni spigolo più acuto dell'angolo indicato. |
| Solidifica | Dà a una superficie uno spessore e chiude il bordo. |
| Booleana | Taglia via, unisce o mantiene la parte in comune con un altro oggetto del modello. Entrambi devono essere solidi chiusi. |
| Spostamento | Sposta la superficie verso l'interno o l'esterno con un rumore liscio. Lo stesso seme dà sempre le stesse protuberanze. |
| Salda | Unisce i vertici più vicini di una certa distanza. |
| Decima | Mantiene una quota dei triangoli, eliminando quelli che modificano meno la forma. |
| Leviga | Distende i vertici verso i vicini. |
| Reticolo | Piega la mesh con una gabbia: spostare i punti della gabbia e la mesh segue. |
| Deformazione curva | Piega la mesh lungo una curva del modello, lungo rosso, verde o blu. |
| Avvolgi | Sposta ogni vertice sul punto più vicino di un altro oggetto. |

## Su un gruppo o un componente

Anche un gruppo o un componente può conservare una ricetta, così il paralume di una lampada può essere una **Scala** e una **Serie** di un solo paralume, e cambiando un numero cambia la lampada.

1. Selezionare un gruppo o un componente. In {{ui:Informazioni sull'entità}} la sua sezione **Modificatori** elenca la pila (inizialmente vuota).
2. Scegliere {{ui:Scala}} o {{ui:Serie}} da {{ui:Aggiungi un modificatore…}}. Il gruppo diventa un componente che è **l'originale, collocato dalla pila**. L'originale viene conservato: modificandolo, ogni copia lo segue subito.
3. Scala accetta un fattore per rosso, verde e blu (`1, 1, 2` raddoppia l'altezza). Serie accetta il numero di copie, un passo come quota della dimensione del risultato finora, e un passo extra in lunghezze.

La pila va dall'alto in basso sugli assi propri dell'originale attorno alla sua origine, quindi l'ordine conta: una Serie di tre copie distanti 3 m, poi Scala 2 su rosso, mette le copie a 6 m di distanza; prima Scala e poi la Serie le mantiene a 3 m. La casella di spunta, le frecce e la croce funzionano come su una mesh; i pulsanti vista e camera e Applica su un singolo modificatore no, perché una pila su un gruppo è un'unica cosa.

- {{ui:Modifica sorgente}} apre l'originale sul posto. Le modifiche appaiono in ogni copia; chiudendolo si torna dove si era.
- {{ui:Bake dei modificatori}} rende il risultato semplici spigoli e facce e toglie la pila, in un solo passaggio di annullamento. Le copie che si sovrappongono restano geometrie separate: il bake non è un'unione.
- Le copie del componente condividono la ricetta; {{ui:Rendi unico}} la separa (l'originale resta condiviso).
- La pila viene salvata nel file, passa con copia e incolla e con annulla, e Elimina elementi inutilizzati conserva l'originale. Un programma che non conosce i modificatori mostra comunque le copie.
- Fino al bake, il risultato non può essere aperto, esploso, ridimensionato o allungato: verrebbe ricostruito alla modifica successiva. Ogni azione lo segnala.
- I limiti sono 32 modificatori e 1,000 copie. Un componente predisposto per lo stiramento (Stira) e una pila non possono ancora condividere una definizione.

## Superficie di suddivisione

La suddivisione leviga una mesh con Catmull-Clark: ogni faccia diventa facce a quattro lati, e ogni livello ne produce quattro volte tante. Un cubo con due o tre livelli appare già come una forma arrotondata, e si continua a modificare il cubo.

- **Livelli nella vista** imposta quanto è liscia.
- **Livelli nei render** imposta quanto sono lisce le immagini renderizzate e i video; i render possono usare più livelli della vista.
- **Render sulla vera superficie liscia** porta i punti di una mesh renderizzata sulla superficie limite verso cui tendono i livelli, così anche due livelli vengono renderizzati lisci come molti.
- **Pieghe** mantengono vivi gli spigoli: nell'area di lavoro Mesh selezionare gli spigoli e usare {{ui:Piega}} (1 resta netto, 0.5 arrotonda un poco, 0 è liscio). Vedere [Modificare una mesh](topic:mesh-edit).
- **Abbassare il livello della vista su una mesh grande:** quando i livelli richiesti produrrebbero più facce di quante la vista di questo computer gestisca bene, la vista mostra un livello inferiore e lo indica. {{ui:Applica}} usa sempre tutti i livelli. Il numero di facce dipende dalla classe del computer impostata in {{ui:Impostazioni}} › Rendering › Il proprio computer.
- I bordi aperti mantengono i propri angoli e restano sulla linea dei loro spigoli.

## Piegare con una gabbia reticolare

1. Aggiungere un modificatore {{ui:Reticolo}} e premere {{ui:Aggiungi una gabbia reticolare attorno alla mesh}}. Attorno alla mesh compare una gabbia di 3 × 3 × 3 punti, disegnata a fili.
2. Aprire la gabbia nell'area di lavoro Mesh (doppio clic) e spostare i suoi punti. La mesh segue in modo morbido.

:::tip
Una gabbia è una mesh come le altre: quando si è finito, nasconderla con il suo tag.
:::

## Mesh grandi

Le pile piccole vengono calcolate subito. Una grande viene calcolata in background su ogni core del computer: la vista continua a mostrare l'ultimo risultato finché quello nuovo non è pronto. Le booleane caricano il modellatore di solidi alla prima volta; la vista lo segnala per un momento.

## Che cosa i modificatori non fanno ancora

- Pesi per vertice (un decadimento dipinto sulla mesh) per Spostamento, Leviga e Avvolgi.
- Modificatori diversi da Scala e dalla Serie lineare sulla geometria push/pull (gruppi e componenti): prima convertirla in mesh ({{ui:Converti in mesh}}). Specchio, una Serie circolare o su curva, Piega e Rastrema sui gruppi arriveranno più avanti.
