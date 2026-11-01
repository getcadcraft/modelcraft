---
title: Iniziare con ModelCraft
summary: A cosa serve ModelCraft, come aprirlo e il primo box, da un rettangolo a un modello salvato.
keywords: inizio, primo modello, iniziare, tutorial, introduzione, box, volumetria, 3d, spingi tira, avvio rapido, guidato, guida, principiante, nuovo al 3d
from: d47ad719
---

ModelCraft è un modellatore 3D per le prime fasi del progetto: studi volumetrici, disposizione dei locali, forme di edifici veloci e le ombre che proiettano. Si disegnano forme piane, le si tira verso l'alto fino a ottenere solidi e si continua a lavorarci disegnando sulle loro facce. Funziona nel browser e i modelli restano sul computer.

Chi ha già usato SketchUp ritrova quasi tutto: le stesse lettere per gli strumenti, spingi/tira, una casella dei valori per le misure esatte, gruppi e componenti. [Per chi viene da altri modellatori](topic:coming-from) elenca le differenze.

## Aprire ModelCraft

1. Aprire ModelCraft in una versione recente di Chrome, Edge, Firefox o Safari. Vedere [Browser e computer](common:browsers).
2. Attendere che compaia la vista 3D: un'area chiara (o scura) al centro con una scheda intitolata "Iniziare a modellare".

Lo schermo ha una barra degli strumenti in alto, {{ui:Struttura}} e {{ui:Componenti}} a sinistra, la vista 3D al centro, {{ui:Informazioni sull'entità}}, {{ui:Stile}} e {{ui:Scene}} a destra e una barra di stato in basso con la casella dei valori e le unità. [Lo schermo di ModelCraft](topic:workspace) spiega ogni parte.

:::note
ModelCraft richiede WebGL, la funzione del browser per il disegno 3D. Se il centro dello schermo resta vuoto e gli strumenti non rispondono, vedere [Risoluzione dei problemi](topic:troubleshooting#the-3d-view-is-blank).
:::

## Controllare prima le unità

Guardare l'angolo in basso a destra. Il selettore delle unità mostra in che unità sono misurate le lunghezze.

- Un nuovo modello parte in **piedi e pollici** quando il browser è impostato sugli Stati Uniti (anche Liberia e Myanmar) e in **millimetri** ovunque altrove.
- Per cambiare, scegliere un'altra unità nel selettore: {{ui:ft e in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} o {{ui:mm}}. Il modello non cambia dimensione; cambia solo il modo in cui le lunghezze vengono mostrate e i numeri senza unità vengono letti.

Un numero digitato senza unità usa l'unità del modello. In un modello in piedi e pollici un numero semplice è in **pollici**, quindi `120` significa 10 piedi.

## Farsi guidare nel primo modello

Nuovo al 3D? Nella scheda {{ui:Iniziare a modellare}} fare clic su {{ui:Primo modello guidato}} (si trova anche in {{ui:Viste}}). Una piccola scheda accompagna in quattro passi, da un rettangolo piano a un modello pronto per una stampante 3D:

1. Disegnare un rettangolo sul terreno.
2. Tirarlo verso l'alto fino a ottenere un box.
3. Rendere il box un unico oggetto (un gruppo).
4. Verificarlo per la stampa 3D, quindi scaricare un file 3MF o STL.

La scheda osserva il modello, non i pulsanti: passa al passo successivo quando il passo è completato, in qualunque modo, e torna indietro di un passo quando si annulla. {{ui:Scegli lo strumento}} sceglie lo strumento al posto della persona. Si chiude in qualsiasi momento con {{ui:×}}.

## Disegnare il primo box

1. Premere {{key:R}} per lo strumento {{ui:Rettangolo}}, oppure fare clic su {{ui:Rettangolo}} nel gruppo {{ui:Disegna}} della barra degli strumenti.
2. Fare clic una volta sul terreno, vicino al centro della vista. È il primo angolo.
3. Allontanare il puntatore. Un rettangolo lo segue e la casella dei valori in basso (con l'etichetta {{ui:Dimensioni}}) ne mostra la dimensione.
4. Digitare la dimensione e premere {{key:Enter}}: per esempio `4m,3m`, oppure `16',12'` in piedi e pollici. Non serve fare clic prima nella casella dei valori: digitando un numero questo vi arriva da solo.

   Si ottiene un rettangolo piano sul terreno. È una **faccia**: una superficie con degli spigoli intorno.

5. Premere {{key:P}} per {{ui:Spingi/tira}}.
6. Fare clic sul rettangolo, spostare il puntatore verso l'alto e fare di nuovo clic. Oppure fare clic sul rettangolo e digitare un'altezza, come `3m` o `10'`, quindi premere {{key:Enter}}.

   Il rettangolo diventa un box con un lato superiore, uno inferiore e quattro lati.

7. Premere {{key:Space}} per tornare a {{ui:Seleziona}}, quindi fare clic sulla parte superiore del box. {{ui:Informazioni sull'entità}} a destra mostra la sua area.

:::tip
Si può anche trascinare invece di fare clic due volte: premere sul primo angolo, trascinare e rilasciare sul secondo. Entrambi i modi funzionano con ogni strumento di disegno.
:::

## Guardarsi intorno

- **Orbita:** trascinare con il pulsante centrale del mouse (la rotellina), oppure premere {{key:O}} e trascinare con il pulsante sinistro.
- **Pan:** trascinare con il pulsante destro, oppure con il pulsante centrale tenendo premuto {{key:Shift}}.
- **Zoom:** girare la rotellina. Lo zoom avviene verso ciò che si trova sotto il puntatore.
- **Vedere tutto:** premere {{key:Shift+Z}}, oppure fare clic su {{ui:Estensione}}.

Su un trackpad o su uno schermo tattile i gesti sono diversi. Vedere [Orbita, pan e zoom](topic:orbit-pan-zoom).

## Annullare

Premere {{key:Mod+Z}} per annullare e {{key:Mod+Y}} per ripristinare, oppure usare {{ui:Annulla}} e {{ui:Ripristina}} nella barra degli strumenti. ModelCraft ricorda gli ultimi 200 passi finché il modello è aperto. La cronologia non viene salvata nel file.

## Salvare il modello

1. Fare clic su {{ui:Salva}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+S}}.
2. Il browser scarica un file con il nome del modello, come `Untitled.modelcraft`. La barra di stato indica dove è finito: "Salvato Untitled.modelcraft nei download."

**Salvare equivale a scaricare.** Ogni salvataggio crea una nuova copia nella cartella dei download; non sovrascrive il file aperto. Per mantenere ordinata la cartella del progetto, spostare o rinominare il file manualmente. [Aprire, salvare, importare ed esportare](topic:files) spiega il motivo e cos'altro è possibile fare.

:::warning
ModelCraft non salva da solo. Se si chiude la scheda con modifiche non salvate, il browser chiede prima conferma ("Uscire dal sito?"). Scegliere di restare, quindi salvare.
:::

## Ottenere aiuto

Premere {{key:F1}} oppure fare clic su {{ui:Guida}} nella barra dell'app per aprire questa guida accanto al modello. Funziona senza connessione. Premere di nuovo {{key:F1}}, oppure {{key:Esc}} nella guida, per chiuderla. Vedere [Usare questa guida](common:help).

## Dove andare dopo

- [Disegnare facce con linee, rettangoli e cerchi](topic:draw-faces)
- [Spingere e tirare le facce fino a ottenere solidi](topic:push-pull)
- [Digitare dimensioni esatte nella casella dei valori](topic:value-box)
- [Tutti i tasti e le azioni del mouse](topic:keyboard)
