---
title: Lo schermo di ModelCraft
summary: Un giro della barra degli strumenti, dei pannelli sui due lati, della vista 3D e della barra di stato, con i nomi mostrati a schermo.
keywords: schermo, disposizione, barra degli strumenti, pannelli, struttura, informazioni sull'entità, stile, scene, barra di stato, casella dei valori, unità, interfaccia, giro
from: 4a9a4516
---

Dall'alto verso il basso: la barra dell'app, la barra degli strumenti, le tre colonne (pannelli a sinistra, vista 3D, pannelli a destra) e la barra di stato.

## La barra dell'app

La barra sottile in cima appartiene a ogni app CadCraft. Contiene il nome e la versione dell'app, {{ui:About ModelCraft}}, il pulsante della modalità schermo e il selettore {{ui:Carta}} / {{ui:Modello}}.

- {{ui:Carta}} è il tema chiaro e {{ui:Modello}} quello scuro. La vista 3D cambia i colori di conseguenza; il modello non cambia.
- Il pulsante della modalità schermo (all'inizio riporta {{ui:Schermo intero}}) e {{key:Ctrl+Shift+F}} scorrono tre modalità: normale, schermo intero e schermo intero con le barre nascoste. Con le barre nascoste, portare il puntatore sul bordo superiore dello schermo (o toccarlo) per farle riapparire. {{key:Esc}} esce dallo schermo intero.

:::note
{{key:Ctrl+Shift+F}} usa il tasto Control su ogni computer, anche su Mac. Su iPhone, dove i browser non hanno lo schermo intero, il pulsante si limita a nascondere e mostrare le barre.
:::

## La barra degli strumenti

La barra degli strumenti è divisa in gruppi con etichetta. Passare il puntatore su un pulsante per vedere il nome e il tasto.

All'estrema sinistra, l'elenco {{ui:Area di lavoro}} cambia lo scopo della barra degli strumenti e del pannello di destra: {{ui:Modello}} (modellazione spingi/tira, il giro qui sotto), {{ui:Mesh}} ([modificare una mesh](topic:mesh-edit)), {{ui:Curva}} ([oggetti curva](topic:curves)), {{ui:UV}} ([disporre le UV](topic:uv)), {{ui:Scultura}} ([scolpire](topic:sculpt)), {{ui:Shading}} ([materiali creati con i nodi](topic:shading)), {{ui:Anima}} ([animare](topic:animate)) e {{ui:Render}} ([eseguire il render nella vista](topic:render#render-in-the-view)).

| Gruppo | Pulsanti |
|---|---|
| File | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Salva}}, {{ui:Importa}}, {{ui:Esporta}} (un menu di formati) |
| Disegna | {{ui:Linea}} ({{key:L}}), {{ui:Rettangolo}} ({{key:R}}), {{ui:Cerchio}} ({{key:C}}), {{ui:Poligono}} ({{key:N}}) |
| Modifica | {{ui:Seleziona}} ({{key:Space}}), {{ui:Spingi/tira}} ({{key:P}}), {{ui:Sposta}} ({{key:M}}), {{ui:Ruota}} ({{key:Q}}), {{ui:Scala}} ({{key:S}}), {{ui:Gomma}} ({{key:E}}), {{ui:Metro}} ({{key:T}}) |
| Organizza | {{ui:Componente}} ({{key:G}}), {{ui:Gruppo}} ({{key:Shift+G}}), {{ui:Esplodi}} |
| Modifica | {{ui:Annulla}} ({{key:Mod+Z}}), {{ui:Ripristina}} ({{key:Mod+Y}}), {{ui:Copia}} ({{key:Mod+C}}), {{ui:Incolla}} ({{key:Mod+V}}), {{ui:Altro}} (un menu: taglia, copia, incolla, incolla nella stessa posizione {{key:Mod+Shift+V}}, duplica {{key:Mod+D}}, elimina, seleziona tutto, deseleziona tutto e lo stile dei tasti) |
| Camera | {{ui:Orbita}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Estensione}} ({{key:Shift+Z}}), {{ui:Viste}} (un menu) |

I tasti indicati sono quelli di spingi/tira; se nelle [impostazioni di ModelCraft](topic:settings) è scelto lo stile Modellatore, i suggerimenti mostrano invece quei tasti. Lo strumento in uso appare premuto. Su uno schermo stretto la barra degli strumenti scorre lateralmente.

Il menu {{ui:Viste}} contiene {{ui:Iso}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Destra}}, {{ui:Posteriore}}, {{ui:Sinistra}} e {{ui:Sotto}}, ciascuna adattata al modello, e {{ui:Prospettiva}}, che passa dalla proiezione prospettica a quella parallela.

## La vista 3D

Il centro dello schermo. Le linee rossa, verde e blu sono gli assi: rosso e verde giacciono sul terreno, il blu punta verso l'alto e il **nord è l'asse verde**. Dove si incontrano c'è l'origine.

- All'avvio, una scheda intitolata "Iniziare a modellare" elenca i primi tasti. Scompare quando si sceglie uno strumento di disegno o si fa clic nella vista.
- Mentre uno strumento lavora, la vista mostra **indicatori di inferenza**: piccole forme colorate dove il puntatore si aggancia (un cerchio verde su un punto finale, uno ciano su un punto medio, un quadrato rosso su uno spigolo, un rombo blu su una faccia). Vedere [Inferenza e snap](topic:inference).
- Gli oggetti selezionati diventano blu. Una faccia vista da dietro è grigio-azzurra.
- Quando si apre un gruppo per modificarlo, tutto ciò che è fuori si attenua e gli assi si spostano sugli assi propri del gruppo.
- Quando un modello ha delle scene, una riga di schede delle scene compare lungo il bordo superiore della vista.
- Trascinare un file in un punto qualsiasi della vista per aprirlo o importarlo.

## I pannelli di sinistra

**{{ui:Struttura}}** elenca i gruppi e i componenti del modello, annidati come lo sono nel modello. Un componente usato più volte indica quante, per esempio "Window (4)".

- Fare clic su un nome per selezionarlo. Doppio clic per aprirlo e modificarlo.
- **Cerca per nome** (compare quando ci sono due o più gruppi) mantiene solo le righe il cui nome corrisponde, insieme ai gruppi che le contengono. {{key:Esc}} lo azzera.
- L'**occhio** a fine riga nasconde o mostra quel gruppo o componente (come {{ui:Modifica}} › {{ui:Altro}} › {{ui:Nascondi}}). Un'icona a forma di tag indica che è nascosto dal suo [tag](topic:tags).
- **Rinominare sul posto:** fare clic su una riga, premere {{key:F2}}, digitare e premere {{key:Enter}} ({{key:Esc}} mantiene il vecchio nome).
- **Trascinare una riga** sul centro della riga di un altro gruppo per spostarla al suo interno, sul bordo superiore o inferiore di una riga per metterla subito prima o dopo, oppure sull'intestazione {{ui:Struttura}} per portarla al livello principale. Nel modello resta dov'è e mantiene colore, tag e nome. Un gruppo non può finire dentro se stesso. Ogni spostamento è un passo di annullamento. Vedere [Riorganizzare nella Struttura](topic:groups-components#rearrange-in-the-outliner).
- Mentre si modifica dentro un gruppo, una riga riporta "Modifica: Modello › …" e compare un pulsante {{ui:Chiudi gruppo}}, che chiude tutti i livelli aperti in una volta.

**{{ui:Componenti}}** elenca ogni definizione di componente con il numero di copie posizionate ("3×") e un pulsante {{ui:Posiziona}} che aggiunge un'altra copia dove si fa clic.

## I pannelli di destra

**{{ui:Informazioni sull'entità}}** descrive ciò che è selezionato. L'intestazione cambia per indicare di che cosa si tratta:

| Intestazione | Mostra | Pulsanti |
|---|---|---|
| Modello (nulla di selezionato) | Facce, spigoli, gruppi, componenti e quanti sono posizionati, guide, dimensione complessiva | {{ui:Elimina tutte le guide}} (quando ci sono guide) |
| Faccia | Area, numero di fori | {{ui:Inverti faccia}} |
| Spigolo | Lunghezza | nessuno |
| Gruppo o componente | Nome (digitare per rinominare), quante volte è posizionato, se è un solido chiuso, il volume, la dimensione | {{ui:Modifica}}, {{ui:Esplodi}}, {{ui:Rendi unico}} (un componente posizionato più volte), {{ui:Crea componente}} (un gruppo) |
| Punto guida o linea guida | niente | {{ui:Elimina}} |
| Più oggetti | Quante facce, spigoli, gruppi e guide, l'area totale delle facce | {{ui:Crea componente (G)}}, {{ui:Crea gruppo (Shift+G)}} |

**{{ui:Stile}}** imposta come viene disegnato il modello: {{ui:Facce}} ({{ui:Ombreggiato}}, {{ui:Linee nascoste}}, {{ui:Struttura a fili}}, {{ui:Raggi X}}), {{ui:Mostra gli spigoli}} e {{ui:Ombre del sole}} con data, ora e luogo del sole. Vedere [Stili e ombre del sole](topic:styles-shadows).

**{{ui:Scene}}** salva le viste: {{ui:Aggiungi scena}}, l'elenco delle scene e {{ui:Precedente}}, {{ui:Riproduci}} e {{ui:Successiva}}. Vedere [Salvare le viste come scene](topic:scenes).

## La barra di stato

In basso, da sinistra a destra:

1. **Il suggerimento**: che cosa si aspetta lo strumento, oppure a che cosa si aggancia il puntatore ("Punto finale", "Sull'asse rosso").
2. **I messaggi**: che cosa è appena successo ("Annullato spingi/tira.", "Importato site.dxf: 1697 spigoli sul terreno, in un gruppo.") o perché qualcosa non ha funzionato.
3. **La casella dei valori**: la sua etichetta cambia con lo strumento ({{ui:Lunghezza}}, {{ui:Dimensioni}}, {{ui:Raggio}}, {{ui:Lati}}, {{ui:Distanza}}, {{ui:Angolo}}, {{ui:Scala}}, {{ui:Offset}}). Mostra la dimensione in tempo reale durante il lavoro e accetta ciò che si digita. Vedere [Digitare dimensioni esatte nella casella dei valori](topic:value-box).
4. **Lo stile dei tasti**: {{ui:Tasti: spingi/tira}} o {{ui:Tasti: modellatore}} cambia in una volta le scorciatoie da tastiera e i pulsanti del mouse (come nelle [impostazioni di ModelCraft](topic:settings)).
5. **{{ui:Snap}} e {{ui:Collisione}}**: l'aggancio a punti, spigoli e assi, e i solidi che si fermano dove si toccano. Barrato = disattivato. Fare clic per cambiare. Vedere [impostazioni di ModelCraft](topic:settings).
6. **Il selettore delle unità**: l'unità in cui sono mostrate le lunghezze. Vedere [Iniziare](topic:getting-started#check-the-units-first).

## Su uno schermo stretto

Sotto i 760 pixel circa di larghezza (un telefono o una finestra stretta), la vista 3D occupa lo schermo. La barra degli strumenti è una sola riga che scorre lateralmente e i pannelli si aprono come fogli dalla barra in fondo allo schermo.
