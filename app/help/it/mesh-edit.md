---
title: Modificare una mesh nell'area di lavoro Mesh
summary: Selezionare vertici, spigoli e facce di una mesh, spostarli, estrudere, inserire, smussare, tagliare, unire, riempire e collegarli, con entrambi gli stili di tasti.
keywords: mesh, modalità modifica, area di lavoro mesh, vertice, vertici, spigolo, spigoli, faccia, facce, estrudi, inserto, smusso, taglio ad anello, coltello, bisezione, rotazione a passi, unisci, dissolvi, riempi, riempi a griglia, ponte, suddividi, scorri, modifica proporzionale, decadimento, area di lavoro
from: 92a372dd
---

L'**area di lavoro Mesh** modifica una [mesh](topic:meshes) punto per punto: i suoi vertici, spigoli e facce. La geometria push/pull resta nell'**area di lavoro Modello**.

## Aprirla

- Scegliere {{ui:Mesh}} nell'elenco {{ui:Area di lavoro}} a sinistra della barra degli strumenti. La mesh selezionata si apre per la modifica; un gruppo o un componente selezionato viene prima trasformato in mesh (un solo passaggio di annullamento).
- Oppure fare doppio clic su una mesh, oppure, con i tasti del modellatore, selezionarla e premere {{key:Tab}}.
- Senza selezione, il pannello offre mesh da aggiungere: piano, griglia, cubo, cerchio, cilindro, cono, sfera, icosfera e toro. Una nuova mesh va dove guarda la vista e si apre per la modifica.

{{ui:Torna al modello}} (oppure l'elenco, {{key:Tab}} con i tasti del modellatore, {{key:Esc}} senza selezione con i tasti push/pull) torna al Modello con la mesh selezionata. Mentre l'area di lavoro Mesh è aperta, il resto del modello è attenuato e gli strumenti di disegno del Modello vengono riposti.

## Selezionare

| Azione | Per |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Selezionare vertici, spigoli o facce |
| Clic | Seleziona uno; {{key:Shift}}+clic aggiunge o rimuove |
| Trascinare un riquadro | Seleziona ciò che è dentro e visibile; {{key:Shift}} aggiunge, {{key:Ctrl}} rimuove |
| {{key:Alt}}+clic su uno spigolo, o doppio clic su di esso | Il suo anello di spigoli (un anello di facce in modalità facce; l'intero bordo su uno spigolo aperto) |
| {{key:Ctrl}}+{{key:Alt}}+clic su uno spigolo | La sua fascia di spigoli |
| Triplo clic | Tutto ciò che è collegato ad esso |

Il gruppo {{ui:Seleziona}} ha anche {{ui:Tutti}}, {{ui:Collegati}}, {{ui:Anello}}, {{ui:Ciclo}}, {{ui:Altro}} e {{ui:Meno}}.

## Spostare, ruotare, scalare

{{ui:Sposta}}, {{ui:Ruota}} e {{ui:Scala}} partono dal puntatore: spostarlo, poi fare clic o premere {{key:Enter}} per posare la selezione, oppure {{key:Esc}} per annullare. {{key:X}}, {{key:Y}} o {{key:Z}} (o i tasti freccia) bloccano un asse. Digitare una distanza, un angolo o un fattore per un valore esatto — anche i [calcoli](topic:value-box#calculations) funzionano.

**Modifica proporzionale** ({{ui:Proporzionale}}, o dal pannello): i vertici vicini alla selezione seguono lo spostamento, tanto meno quanto più sono lontani, fino alla portata impostata, con il decadimento scelto. Attivare {{ui:Solo lungo la mesh}} per misurare lungo gli spigoli invece che in linea retta.

{{ui:Scorri}} sposta un anello di spigoli selezionato lungo gli spigoli adiacenti.

## Cambiare la forma

| Strumento | Funzione |
|---|---|
| {{ui:Estrudi}} | Estrae le facce selezionate lungo la loro normale, con nuove facce laterali (oppure crea facce dagli spigoli di bordo aperti). Digitare la distanza |
| {{ui:Inserto}} | Una fascia all'interno del contorno delle facce selezionate; premere di nuovo {{key:I}} per ciascuna faccia da sola |
| {{ui:Smusso}} | Smussa gli spigoli selezionati (oppure, con {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, i vertici) con una larghezza; la rotella o i tasti più e meno aggiungono segmenti per uno spigolo arrotondato |
| {{ui:Taglio ad anello}} | Puntare uno spigolo: nuovi anelli attraverso la fascia di facce a quattro lati; la rotella ne imposta il numero; fare clic per tagliare |
| {{ui:Coltello}} | Fare clic su punti di spigoli o angoli; {{key:Enter}} taglia dritto attraverso le facce tra di essi, come si vedono |
| {{ui:Bisezione}} | Tracciare una linea sullo schermo: le facce selezionate (o tutte) vengono tagliate lungo di essa |
| {{ui:Rotazione a passi}} | Ruota le facce selezionate o gli spigoli aperti attorno all'asse blu a passi (la rotella ne imposta il numero); un giro completo chiude |
| {{ui:Suddividi}} | Divide in due gli spigoli selezionati; le facce intere diventano una griglia |
| {{ui:Unisci}} | I vertici selezionati diventano uno solo, al loro centro |
| {{ui:Dissolvi}} | Toglie la selezione ma mantiene la superficie: le facce si uniscono |
| {{ui:Riempi}} | Una faccia attraverso un bordo aperto selezionato (oppure tra due spigoli aperti) |
| {{ui:Riempi a griglia}} | Riempie un bordo aperto con un numero pari di spigoli con una griglia di quadrilateri |
| {{ui:Ponte}} | Unisce due anelli di spigoli aperti selezionati con delle facce |
| {{ui:Piega}} | Quanto restano vivi gli spigoli selezionati quando la mesh è levigata da una superficie di suddivisione: allontanarsi dal centro, usare la rotella (passi di 0.1) oppure digitare da 0 a 1. Il pannello mostra la piega degli spigoli selezionati e accetta anche un valore digitato. Gli spigoli con piega sono disegnati in magenta |
| {{ui:Ribalta}}, {{ui:Leviga}}, {{ui:Elimina}} | Ribaltano le facce; levigano i vertici verso i vicini; eliminano secondo la modalità di selezione |

Ciascuno è un solo passaggio di annullamento. Coordinate di texture, colori e pesi seguono sulle nuove facce e sui nuovi vertici.

## Ricostruisci mesh

{{ui:Ricostruisci mesh}} rifà l'intera mesh con triangoli uniformi di una sola dimensione, richiesta al momento della pressione (più piccola è, più fine e più lenta). Chiude i buchi, unisce i pezzi che si sovrappongono e uniforma una mesh che la scultura ha allungato. Gli spigoli vivi escono leggermente arrotondati. UV, pittura e pieghe ricominciano da capo. Un solo passaggio di annullamento.

## Retopologia

Per costruire una nuova mesh più pulita su una dettagliata (una scultura, una scansione), scegliere quella dettagliata sotto {{ui:Retopologia}} › **Costruisci su** nel pannello, poi:

- **Aggancia i punti spostati alla sua superficie:** i punti spostati e gli spigoli estrusi si posano sulla sua superficie.
- **Posa i punti selezionati su di essa** sposta subito i punti selezionati sulla sua superficie (un solo passaggio di annullamento).
- **Mostra in primo piano gli spigoli di questa mesh** disegna la mesh che si sta costruendo sopra la superficie, così la si vede.

## Regolare l'ultima operazione

Dopo {{ui:Inserto}}, {{ui:Smusso}}, {{ui:Taglio ad anello}}, {{ui:Suddividi}}, {{ui:Leviga}}, {{ui:Riempi a griglia}} o {{ui:Rotazione a passi}}, il pannello mostra le sue impostazioni (larghezza, segmenti, profilo, tagli …). Modificandone una, l'operazione viene rifatta da capo, sempre come un solo passaggio di annullamento.

## Tasti

| | Tasti push/pull | Tasti del modellatore |
|---|---|---|
| Sposta, ruota, scala | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} due volte scorre) |
| Estrudi, inserto | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Elimina | {{key:E}} oppure {{key:Delete}} | {{key:X}} oppure {{key:Delete}} |
| Piega | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleziona tutto, nessuno, inverti | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Entrambi | {{key:Ctrl+B}} smusso, {{key:Ctrl+R}} taglio ad anello, {{key:K}} coltello | lo stesso, e {{key:F}} riempi, {{key:M}} unisci, {{key:Ctrl+X}} dissolvi, {{key:L}} / {{key:Ctrl+L}} collegati, {{key:Alt+N}} ribalta, {{key:O}} proporzionale, {{key:Shift+V}} scorrimento dei vertici |

Vedere anche [Mesh](topic:meshes), [Modificatori su una mesh](topic:modifiers) e [Non ancora implementato](topic:not-built-yet).
