---
title: Stili e ombre del sole
summary: Mostra il modello ombreggiato, come linee nascoste, come struttura a fili o trasparente, e studia le ombre che proietta in qualsiasi data, ora e luogo.
keywords: vista di presentazione, vista pulita, nascondi guide, nascondi assi, stile, ombreggiato, linea nascosta, struttura a fili, raggi X, spigoli, ombre, sole, studio solare, solare, data, ora, latitudine, longitudine, fuso orario, nord
from: 09c95329
---

Il pannello {{ui:Stile}} a destra modifica il modo in cui il modello viene disegnato. Nulla al suo interno cambia il modello stesso, e non fa parte dell'annullamento. Ogni [scena](topic:scenes) ricorda il proprio stile, e il file ricorda lo stile in uso al momento del salvataggio.

## Facce

Scegliere uno stile nell'elenco {{ui:Facce}}:

| Stile | Aspetto |
|---|---|
| {{ui:Ombreggiato}} | Facce piene, illuminate in modo morbido. Le facce viste da dietro sono grigio-blu. I colori importati vengono mostrati. |
| {{ui:Linee nascoste}} | Facce nel colore dello sfondo con spigoli in inchiostro: un disegno a linee pulito, senza linee nascoste. Bianco su {{ui:Carta}}, scuro su {{ui:Modello}}. |
| {{ui:Struttura a fili}} | Solo spigoli. Le facce non vengono disegnate, ma contano comunque quando si fa clic e si aggancia: non è possibile selezionare attraverso di esse. |
| {{ui:Raggi X}} | Facce trasparenti, per vedere cosa c'è dietro o dentro. Come nella struttura a fili, clic e snap si fermano alla faccia più vicina. |

{{ui:Mostra gli spigoli}} attiva o disattiva gli spigoli in tutti gli stili tranne {{ui:Struttura a fili}}. Con l'opzione disattivata, {{ui:Linee nascoste}} mostra quasi nulla, perché le sue facce coincidono con lo sfondo. Gli spigoli morbidi, come i lati di un cerchio spinto con {{ui:Spingi/tira}}, non vengono mai disegnati.

## Attivare le ombre del sole

1. Spuntare {{ui:Ombre del sole}}. Diventano attive le impostazioni del sole sotto di essa, e il modello proietta ombre su sé stesso e sul terreno.
2. Impostare il luogo:
   - {{ui:Latitudine}}: il nord è positivo, il sud negativo (New York circa 40.7, Sydney circa -33.9).
   - {{ui:Longitudine}}: l'est è positivo, l'ovest negativo (New York circa -74.0).
   - {{ui:Scarto UTC}}: lo scarto del luogo rispetto a UTC in ore, per esempio `-5` per New York in inverno. ModelCraft non applica l'ora legale; usare `-4` per New York in estate.
3. Impostare la {{ui:Data}} (mese e giorno) e trascinare il cursore di {{ui:Ora}}. L'ora si sposta a passi di 15 minuti e compare accanto al cursore, per esempio "3:00 pm".

Una riga sotto le impostazioni indica dov'è il sole, per esempio "Sun 52° up, 250° from north. North is the green axis." Di notte compare "The sun is down at this time."

Un nuovo modello parte con il sole il 21 giugno alle 3:00 pm, a latitudine 40, longitudine -105, scarto UTC -7.

## Orientare il modello a nord

Il nord di ModelCraft è sempre l'**asse verde**. Per studiare un sito reale, ruotare il modello in modo che il suo lato nord sia rivolto lungo il verde: selezionare tutto ({{key:Mod+A}}), premere {{key:Q}}, fare clic su un centro sul terreno e ruotarlo dell'angolo del sito rispetto al nord (vedi [Ruota e scala](topic:rotate-scale)).

## Uno studio solare

1. Impostare il luogo e la data.
2. Aggiungere una scena ({{ui:Aggiungi scena}} in {{ui:Scene}}).
3. Spostare il cursore dell'ora, poi aggiungere un'altra scena. Ripetere per ogni ora desiderata.
4. Fare clic su {{ui:Riproduci}} per scorrerle. Vedi [Salvare viste come scene](topic:scenes).

## Da sapere

- Le ombre possono apparire seghettate su un modello molto grande, perché una sola mappa d'ombra copre tutto il modello.
- Le ombre non vengono disegnate in {{ui:Struttura a fili}}.
- La posizione del sole segue il calcolo solare NOAA ed è precisa a una frazione di grado, più che sufficiente per gli studi di volumetria. La rifrazione atmosferica non viene considerata, quindi angoli del sole molto bassi vicino all'alba e al tramonto possono essere leggermente imprecisi.

## Vista di presentazione

{{ui:Viste}} › {{ui:Vista di presentazione}} (oppure {{key:Shift+P}}) mostra solo il modello: spariscono gli assi, le linee e i punti guida, i contorni dei piani di sezione (il taglio resta), i segni delle lampade, il riquadro di un gruppo aperto, i segni e i suggerimenti di snap e l'evidenziazione della selezione. Usarla per osservare il modello con chiarezza o prima di una schermata. Gli strumenti funzionano ancora e agganciano ancora; semplicemente non si vedono i segni. Premere di nuovo {{key:Shift+P}} per ripristinarli. Le quote restano, perché fanno parte del disegno. Mentre si modifica all'interno di un gruppo, il resto del modello non sbiadisce più: appare com'è, texture comprese.
