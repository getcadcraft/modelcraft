---
title: Anima la camera e gli oggetti, e crea un video di render
summary: Imposta chiavi per la camera e per gruppi e componenti su una timeline, riproducile nella vista e crea l'animazione come video WebM con cielo, sole e materiali del render.
keywords: animazione, anima, timeline, fotogramma chiave, keyframe, chiavi, chiave, fotogramma, percorso della camera, sorvolo, passeggiata, walkthrough, video, film, webm, render video, fotogrammi, frequenza dei fotogrammi, fps, testina, chiave automatica, transizione, morbido, mantieni, scene, sequenza PNG, movimento
from: d3a58249
---

La **timeline** sposta la camera e ogni gruppo o componente nel tempo. Si impostano **chiavi** (dove si trova qualcosa in un dato momento); ModelCraft lo sposta in modo uniforme da una chiave all'altra. Si riproduce nella vista, poi si crea un video di render con lo stesso cielo, sole, materiali e lampade di [un'immagine di render](topic:render).

## Aprire la timeline

Fare clic su {{ui:Viste}} nel gruppo {{ui:Camera}}, poi su {{ui:Linea temporale dell'animazione}}. La timeline si apre sotto la vista: i comandi in alto, poi una riga **Camera** e una riga per ogni gruppo o componente che si muove. I rombi sono le chiavi; la linea rossa è la **testina di riproduzione**, cioè il momento mostrato nella vista.

:::touch
Su un telefono la timeline si apre anch'essa sotto la vista. I suoi comandi stanno su una sola riga: scorrerla di lato per raggiungere il resto; il pulsante che chiude la timeline resta alla sua fine.
:::

Trascinare il cursore (o fare clic in una riga) per spostare la testina. {{ui:Riproduci}} riproduce dalla testina e diventa {{ui:Pausa}} durante la riproduzione; fare clic di nuovo per fermarsi dove si trova. {{key:Space}} fa lo stesso mentre la timeline è aperta (con la timeline chiusa, Space è ancora {{ui:Seleziona}}). {{ui:Fotogramma chiave precedente}} e {{ui:Fotogramma chiave successivo}} saltano tra le chiavi. Uno stile personalizzato può assegnare a riproduci e pausa un altro tasto: {{ui:Impostazioni}}, poi menu, tasti e mouse, il comando *Riproduci o metti in pausa l'animazione*.

## Spostare la camera

1. Spostare la testina all'inizio dell'inquadratura (0 s), impostare la vista e fare clic su {{ui:Chiave camera}}.
2. Spostare la testina più avanti (per esempio 4 s), orbitare, spostarsi in pan o camminare nella vista fino alla posizione successiva, e fare di nuovo clic su {{ui:Chiave camera}}.
3. Aggiungere quante chiavi si vuole, poi {{ui:Riproduci}}.

La camera passa in modo fluido attraverso ogni chiave e inizia e finisce a riposo.

:::tip
Se si hanno già delle [scene](topic:scenes), {{ui:Dalle scene}} crea da esse il percorso della camera: si ferma su ogni scena, poi passa alla successiva. Se la timeline non ha alcuna chiave, {{ui:Render di un video…}} lo fa da sé, quindi bastano due scene o più per un video di passeggiata.
:::

## Spostare un gruppo o un componente

1. Selezionare il gruppo o il componente (si spostano solo gruppi e componenti interi; prima [creare un gruppo](topic:groups-components)).
2. A 0 s, fare clic su {{ui:Chiave selezione}}.
3. Spostare la testina più avanti, [spostare, ruotare o scalare](topic:move-copy) il gruppo dove deve stare, e fare di nuovo clic su {{ui:Chiave selezione}}.

Scivola, gira e cresce tra le sue chiavi. Le rotazioni prendono la via più breve.

**Chiave automatica** fa risparmiare il clic del passo 3: con {{ui:Chiave automatica}} attiva, un gruppo o componente selezionato che si sposta, ruota o scala riceve da sé una chiave alla testina (e, la prima volta, una chiave a 0 s dove si trovava).

:::note
Spostare un gruppo animato senza chiave dura solo finché la testina si muove: la volta successiva che si riproduce o si scorre, torna dove lo mettono le sue chiavi. La barra di stato lo indica. Premere {{ui:Chiave selezione}} per conservarlo.
:::

## Modificare le chiavi

- **Scegliere una chiave** facendo clic sul suo rombo: la testina va lì.
- **Spostare una chiave** trascinando il suo rombo lungo la riga, oppure con {{key:Left}} e {{key:Right}} (un fotogramma; con {{key:Shift}}, dieci).
- **Eliminare** con {{ui:Elimina chiave}} (la chiave scelta, oppure ogni chiave alla testina) o con {{key:Delete}} su un rombo scelto.
- **Come prosegue**, per la chiave scelta: {{ui:Leviga}} (una curva attraverso le chiavi intorno), {{ui:Costante}} (una linea retta a velocità costante), {{ui:Rallenta all'inizio e alla fine}} (si ferma su questa chiave) oppure {{ui:Mantieni}} (resta ferma fino alla chiave successiva).
- **Lunghezza (s)** imposta la durata dell'animazione; una chiave impostata dopo la fine la allunga. Per accorciarla, prima spostare o eliminare le chiavi oltre la nuova fine.
- Il **×** sulla riga di un gruppo ne interrompe l'animazione.

La timeline ha i propri {{ui:Annulla}} e {{ui:Ripristina}}: l'annullamento del modello ({{key:Mod+Z}}) modifica il modello, non le chiavi. L'animazione è salvata nel file `.modelcraft`. Chiudere la timeline riporta i gruppi in movimento alla loro prima posa.

## Creare il video di render

1. Fare clic su {{ui:Render video}} nella timeline (oppure {{ui:Esporta}} › {{ui:Render di un video…}}).
2. Scegliere {{ui:Dimensione}}, {{ui:Frequenza dei fotogrammi}}, {{ui:Qualità di ogni fotogramma}} e {{ui:File}}.
3. Fare clic su {{ui:Render video}}. Ogni fotogramma appare appena è pronto, con il tempo rimanente.
4. Al termine, fare clic su {{ui:Salva video}}.

{{ui:Stop}} (o {{key:Esc}}) interrompe prima del tempo; {{ui:Salva video}} conserva poi i fotogrammi già realizzati come video più breve.

Cielo, sole, materiali, lampade e luminosità sono quelli impostati in {{ui:Render di un'immagine…}}: impostarli lì prima, controllando un'immagine fissa. Ogni fotogramma viene prodotto su questo computer; nulla viene caricato.

| Impostazione | Cosa fa |
|---|---|
| {{ui:Dimensione}} | 480p, 720p HD, 1080p Full HD, oppure la forma della vista (fino a 1920 pixel di larghezza) |
| {{ui:Frequenza dei fotogrammi}} | 24, 25, 30 o 60 fotogrammi al secondo. Il doppio dei fotogrammi richiede il doppio del tempo |
| {{ui:Qualità di ogni fotogramma}} | {{ui:Rapida}} (4 passaggi), {{ui:Bozza}} (16) o {{ui:Buona}} (64): più passaggi danno ombre e bordi più morbidi |
| {{ui:File}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} dove il browser può scriverlo, oppure {{ui:Immagini PNG, una per fotogramma (ZIP)}} per gli editor video (e per i browser senza codificatore video) |

:::tip
Un video di 10 secondi a 30 fotogrammi al secondo conta 301 fotogrammi. Provare prima {{ui:Rapida}} a 480p per verificare il movimento, poi produrre il render con {{ui:Bozza}} o {{ui:Buona}} a una dimensione maggiore.
:::

Il WebM si riproduce nei browser e in VLC, e gli editor video lo convertono. {{ui:Video MP4 (H.264)}} è offerto dove il browser può scriverlo. {{ui:Render video}} usa il render veloce; per tracciare il percorso della luce su ogni fotogramma, scegliere {{ui:Aggiungi questa animazione alla coda}} nella stessa finestra: i fotogrammi vengono prodotti nella [coda di render](topic:render#the-render-queue), che richiede WebGPU.

:::firefox safari
La generazione di un video richiede un browser che codifichi il video da sé (WebCodecs): Chrome recente, Edge, Firefox e Safari 17 lo fanno. Senza, scegliere {{ui:Immagini PNG, una per fotogramma (ZIP)}}.
:::

## Cose da sapere

- Si spostano solo gruppi e componenti interi. Facce, spigoli, l'ora del sole e lo stile non cambiano ancora nel tempo.
- {{ui:Esporta animazione}} sotto [Scene](topic:scenes) registra ancora la vista così com'è sullo schermo, in tempo reale; {{ui:Render video}} produce ogni fotogramma con cielo, ombre e materiali.
