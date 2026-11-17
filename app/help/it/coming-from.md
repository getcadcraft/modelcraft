---
title: Dagli altri modellatori
summary: Come le abitudini di modellazione push/pull si traducono in ModelCraft, tasto per tasto, e le differenze che colgono di sorpresa.
keywords: passaggio, migrazione, familiare, differenze, modellatore push pull, skp, scorciatoie, abitudini, confronto, riquadro misure, outliner, informazioni sull'entità
from: 74ffd4ac
---

Se si è modellato in SketchUp, ModelCraft risulterà familiare: la stessa idea di facce e push/pull, le stesse lettere degli strumenti, una casella dei valori in cui digitare senza fare clic, l'inferenza con gli assi rosso, verde e blu, gruppi, componenti, un Outliner, Informazioni sull'entità e scene. Questa pagina elenca ciò che si traduce direttamente e, soprattutto, ciò che non si traduce.

## Abitudini che si conservano

| Si è abituati a | In ModelCraft |
|---|---|
| Premere Space per Seleziona, L per Linea, R per Rettangolo, C per Cerchio | Lo stesso: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Premere P per Spingi/tira, M per Sposta, Q per Ruota, S per Scala, E per Gomma, T per Metro a nastro | Lo stesso: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Premere O per Orbita, H per Pan, Z per Zoom, Shift+Z per Zoom estensione | Lo stesso: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Premere G per creare un componente | Lo stesso: {{key:G}}. {{key:Shift+G}} crea un gruppo |
| Digitare nel riquadro delle misure senza farvi clic | Lo stesso, nella casella dei valori in basso. Premere {{key:Enter}} |
| Digitare `4m,3m` per un rettangolo, `12s` per i lati | Lo stesso |
| Digitare `3x` o `/3` dopo una copia con Sposta | Lo stesso; anche `*3` funziona |
| Digitare `[x,y,z]` o `<dx,dy,dz>` per un punto o uno spostamento | Lo stesso |
| Digitare un numero semplice in un modello in pollici architettonici e ottenere pollici | Lo stesso |
| Trascinare col pulsante centrale per orbitare, Shift+centrale per il pan, rotella per lo zoom sul cursore | Lo stesso |
| Doppio clic con Spingi/tira per ripetere la distanza | Lo stesso |
| Frecce per bloccare rosso, verde, blu e parallelo | Lo stesso: {{key:Right}} rosso, {{key:Left}} verde, {{key:Up}} blu, {{key:Down}} parallelo |
| Tenere Shift per bloccare un'inferenza | Lo stesso |
| Ctrl (Option su Mac) per copiare durante lo spostamento | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, su ogni computer |
| Shift per alternare, Ctrl per aggiungere, Shift+Ctrl per rimuovere dalla selezione | Gli stessi tasti; su Mac usare {{key:Mod}} dove c'è scritto Ctrl |
| Finestra da sinistra a destra, intersezione da destra a sinistra | Lo stesso |
| Uno strumento Quota per etichettare le lunghezze | {{key:D}}, e altro: digitare una nuova lunghezza in una quota e il modello si ridimensiona. Vedi [Quota e ridimensionamento](topic:dimensions) |
| Doppio clic su una faccia per faccia più spigoli; triplo clic per tutte le connesse | Lo stesso |
| Doppio clic su un gruppo per modificarlo; Esc per chiudere | Lo stesso |
| Tracciare una linea su una faccia per dividerla; cancellare uno spigolo tra facce complanari per saldarle | Lo stesso |
| Spingere un rettangolo di finestra attraverso un muro per tagliarlo | Lo stesso |
| Facce posteriori in grigio-blu; Inverti facce | Stesso colore; {{ui:Inverti faccia}} in {{ui:Informazioni sull'entità}} |
| Scene come schede sopra la vista, Page Up e Page Down | Lo stesso, con {{ui:Riproduci}} nel pannello {{ui:Scene}} |
| Ombre da data, ora, latitudine e longitudine, con il nord in verde | Lo stesso, nel pannello {{ui:Stile}} |

## Differenze che colgono di sorpresa

### Salvare è un download

Non c'è un Salva che sovrascrive il file aperto, né una finestra Salva con nome, né salvataggio automatico né file di backup. {{ui:Salva}} ({{key:Mod+S}}) scarica ogni volta un nuovo file `.modelcraft`, di solito nella cartella dei download. Salvare spesso, e rinominare o spostare i file da sé. Vedi [Apri, salva, importa ed esporta](topic:files).

### Importa file .skp, ma non li salva

{{ui:Importa}} legge i file SketchUp con il lettore proprio di ModelCraft, nella pagina: gruppi, componenti, colori, texture sulle facce, tag e spigoli morbidi vengono importati. Vedi [Formati dei file in dettaglio](topic:formats#skp-files). ModelCraft non può salvare `.skp`: per tornare indietro, esportare Collada da ModelCraft e importarlo in SketchUp.

### Nessun menu del tasto destro

Il trascinamento con il tasto destro esegue il pan; un clic destro non fa nulla. I comandi che si cercherebbero nel menu contestuale sono in {{ui:Informazioni sull'entità}} ({{ui:Inverti faccia}}, {{ui:Modifica}}, {{ui:Esplodi}}, {{ui:Rendi unico}}, {{ui:Crea componente}}) e nel gruppo {{ui:Organizza}} della barra degli strumenti.

### Le unità stanno nella barra di stato

Non c'è Info modello né scelta di un modello di partenza. Il selettore delle unità è in basso a destra. Un nuovo modello parte in piedi e pollici negli USA e in millimetri altrove, dalla lingua impostata nel browser. I decimali usano sempre il punto: `2.5m`, mai `2,5m`, perché la virgola separa sempre i valori.

### La vernice ha materiali propri

{{ui:Colora}} ({{key:B}}) dipinge colori pieni e i materiali della sezione {{ui:Materiali}}: mattone, rivestimento, copertura, legno, pietra e altro, disegnati da ModelCraft. Non si può ancora caricare una propria immagine come materiale; le texture che arrivano con i file importati vengono mantenute. Vedi [Dipingere con colori e materiali](topic:paint).

### La scala è uniforme, senza grip

Scala non mostra un box con grip. Fare clic sul punto che resta fermo, un punto di riferimento, poi la nuova dimensione o un fattore digitato. Scala sempre in modo uniforme in tutte le direzioni. Per allungare in una sola direzione, spingere/tirare o spostare una faccia, oppure digitare di nuovo la larghezza, la profondità o l'altezza di un gruppo in {{ui:Informazioni sull'entità}}, oppure [ridimensionare con una quota](topic:dimensions).

### La rotazione sceglie il piano da dove si clicca

Non c'è un goniometro che si attacca alle facce mentre si passa sopra con i tasti freccia per scegliere il piano. Fare clic sul centro di una faccia per ruotare nel piano di quella faccia, o sul terreno per ruotare attorno alla verticale. I tasti freccia orbitano la vista prima del primo clic.

### Inferenza dai punti sorvolati

ModelCraft si aggancia alle direzioni degli assi dal **punto di partenza**, e ai punti, agli spigoli e alle facce sotto il puntatore. Non segue una direzione da un punto solo sorvolato (l'inferenza tratteggiata "da punto"). Per allinearsi a un angolo lontano, bloccare l'asse con un tasto freccia e sorvolare quell'angolo: il punto bloccato scorre fino ad allinearsi con esso. Oppure piazzare una [guida](topic:guides-measure).

### Il parallelo usa lo spigolo sorvolato prima di iniziare

L'inferenza parallela e perpendicolare usa l'ultimo spigolo che il puntatore ha attraversato **prima del primo clic**, non gli spigoli sorvolati mentre si disegna. Vedi [Inferenza e snap](topic:inference#parallel-and-perpendicular).

### Le copie di un gruppo sono collegate

Copiare un gruppo con {{ui:Sposta}} crea una seconda collocazione dello stesso gruppo, quindi modificarne uno cambia entrambi, come per i componenti. SketchUp rende i gruppi indipendenti. Vedi [Risoluzione dei problemi](topic:troubleshooting#editing-one-group-changed-another).

### Space non fa il pan

{{key:Space}} sceglie {{ui:Seleziona}}, come in SketchUp. In alcune altre app web tenere premuto Space fa il pan; qui no. Trascinare con il tasto destro per il pan.

### Lo scorrimento con due dita fa zoom

Su un Trackpad, impostare {{ui:Impostazioni}} › {{ui:ModelCraft}} › Scorrimento su Trackpad: due dita orbitano, {{key:Shift}} e due dita fanno il pan, un pizzico fa zoom. Vedi [Orbita, pan e zoom](topic:orbit-pan-zoom#on-a-trackpad).

Se le mani conoscono i tasti di Blender anziché quelli di SketchUp, scegliere lo stile di menu {{ui:Modellatore}}: {{key:G}}, {{key:R}} e {{key:S}} agiscono sulla selezione insieme, {{key:E}} estrude (spingi/tira), {{key:Shift+D}} duplica, e una barra dei menu in alto (File, Modifica, Vista, Seleziona, Aggiungi, Oggetto, Mesh) sostituisce la barra degli strumenti. Provenendo da SketchUp, lo stile {{ui:Spingi/tira}} dà una barra dei menu propria sopra gli stessi tasti degli strumenti. Vedi [Menu, tasti e mouse](topic:menus-keys-and-mouse).

### I solidi spinti l'uno nell'altro non si tagliano

Spingere/tirare taglia la faccia dietro nello stesso oggetto, ma due solidi separati spinti l'uno nell'altro non si intersecano. Non c'è Intersect Faces né Solid Tools.

### Cosa manca

Freehand, Trim, Split e Outer Shell, i propri materiali immagine, le estensioni e uno strumento layout per tavole non sono in questa build. [non ancora implementato](topic:not-built-yet) elenca cosa fare al loro posto.

## Scorciatoie che mantiene il browser

ModelCraft gira in un browser, quindi alcune scorciatoie appartengono al browser, non all'app. {{key:Mod+N}} apre una finestra del browser (usare {{ui:Nuovo}}), e {{key:Mod+W}} chiude la scheda. Se ci sono modifiche non salvate, il browser chiede prima di chiudere. Vedi [Tasti, mouse e trackpad](common:keys#shortcuts-the-browser-keeps).
