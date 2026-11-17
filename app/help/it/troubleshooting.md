---
title: Risoluzione dei problemi
summary: Sintomi, cause e soluzioni, dalla vista 3D vuota alle importazioni di dimensioni sbagliate, con i messaggi che ModelCraft mostra.
keywords: problema, guasto, errore, non funziona, vuoto, webgl, grafica, lento, messaggio, importazione non riuscita, dimensione sbagliata, impossibile selezionare, tocco, tasti non funzionanti, lavoro perso
from: 6e7394be
---

## La vista 3D è vuota

**Sintomo:** il centro dello schermo resta vuoto, oppure mostra solo il colore dello sfondo, e fare clic sugli strumenti non fa nulla.

**Causa:** ModelCraft disegna con WebGL 2, la grafica 3D del browser. Manca quando il browser è vecchio, quando l'accelerazione hardware è disattivata o quando il driver grafico è bloccato.

**Soluzione:**

:::chromium
1. Aprire le impostazioni del browser e cercare "accelerazione grafica".
2. Attivare "Usa l'accelerazione grafica quando disponibile" e riavviare il browser.
3. Se è già attiva, digitare `chrome://gpu` nella barra degli indirizzi (`edge://gpu` in Edge) e cercare "WebGL2" nell'elenco. Se risulta disattivato, aggiornare il driver grafico.
:::

:::firefox
1. Aprire **Impostazioni**, poi **Generali**, e scorrere fino a "Prestazioni".
2. Deselezionare "Usa impostazioni consigliate per le prestazioni", poi selezionare "Usa l'accelerazione hardware quando disponibile". Riavviare Firefox.
3. Se continua a non funzionare, digitare `about:support` nella barra degli indirizzi e cercare WebGL 2 nella sezione "Grafica".
:::

:::safari
Aggiornare macOS e Safari. Le versioni recenti di Safari hanno sempre WebGL 2 attivo. Se sono state modificate le funzioni sperimentali in **Safari**, poi **Impostazioni**, poi **Avanzate** (oppure **Feature Flags**), ripristinarle.
:::

Su un computer di lavoro, desktop remoto o macchina virtuale, la grafica 3D può essere bloccata per policy. Provare un altro computer. Vedi [Browser e computer](common:browsers).

## I tasti non fanno nulla, o scrivono in una casella

**Causa:** il fuoco della tastiera è in un campo del pannello: l'elenco {{ui:Facce}} in {{ui:Stile}}, un'impostazione del sole, il campo {{ui:Nome}} in {{ui:Informazioni sull'entità}}, o il selettore delle unità. Lettere e tasti freccia vanno quindi a quel campo.

**Soluzione:** fare clic nella vista 3D, poi premere di nuovo il tasto. I tasti non funzionano nemmeno mentre una finestra di dialogo è aperta.

## Digitare un numero non fa nulla

- **Nessuna direzione ancora.** Una lunghezza digitata va nella direzione in cui punta il puntatore dal primo clic. Spostare un po' il puntatore nella direzione voluta, poi digitare.
- **Momento sbagliato.** La maggior parte degli strumenti accetta un valore digitato solo dopo il primo clic: fare clic prima sul primo angolo, sulla faccia o sul punto da cui spostare. {{ui:Cerchio}} e {{ui:Poligono}} accettano un numero di lati prima del primo clic.
- **"Digitare una lunghezza, per esempio 3m, 10'6" o 4m,3m."** ModelCraft non l'ha letta. Controllare una virgola decimale (`2,5`): usare il punto.

## Una forma inizia nel punto sbagliato su uno schermo touch

**Sintomo:** con un dito, il primo rettangolo va bene, ma il rettangolo, il cerchio o la linea successivi iniziano dove era finito il tocco precedente invece che dove si è toccato.

**Causa:** un bug di questa versione: su uno schermo touch lo strumento ricorda l'ultimo punto di snap del gesto precedente.

**Soluzione:** toccare di nuovo il pulsante dello strumento nella barra degli strumenti prima di ogni nuova forma. Questo riavvia lo strumento da zero, e il primo punto cade dove si tocca.

## Modificando un gruppo è cambiato un altro

**Sintomo:** si è copiato un gruppo con {{ui:Sposta}} e {{key:Ctrl}}, si è aperta una copia e modificata, e anche l'altra è cambiata. {{ui:Struttura}} mostra entrambi con lo stesso nome.

**Causa:** in questa versione, copiare un gruppo crea una seconda collocazione dello stesso gruppo, come per un componente. Il pulsante {{ui:Rendi unico}} di ModelCraft è offerto solo per i componenti.

**Soluzione:** selezionare la copia da modificare, fare clic su {{ui:Crea componente}} in {{ui:Informazioni sull'entità}}, poi su {{ui:Rendi unico}}. Quella copia ha ora un contenuto proprio. Oppure {{ui:Esplodi}} la copia.

## Spingi/tira non fa ciò che ci si aspetta

- **"Spingi/tira agisce su una faccia. Fare clic su una faccia."** Si è fatto clic su uno spigolo o su uno spazio vuoto. Muovere il puntatore finché la faccia si evidenzia, poi fare clic.
- **La faccia è dentro un gruppo.** Fare doppio clic sul gruppo per aprirlo prima.
- **Una finestra non ha tagliato il muro.** Il rettangolo deve essere disegnato sulla faccia del muro, non davanti ad essa, e il muro deve avere una faccia posteriore. Vedi [Tagliare un'apertura in un muro](topic:openings#if-it-did-not-cut-through).
- **Due solidi si sovrappongono senza unirsi.** I solidi spinti l'uno nell'altro non si tagliano né si uniscono in questa versione.

## Una linea o una forma non ha creato una faccia

Una faccia si riempie solo quando gli spigoli chiudono un anello piano. Controllare che l'ultimo punto si sia agganciato al primo ("Punto finale"), e che tutti gli spigoli stiano su un unico piano. Un anello leggermente fuori piano resta come linee. Disegnare di nuovo uno dei suoi spigoli, agganciandosi agli angoli.

## Non riesco a selezionare o cancellare una faccia

- Con {{ui:Seleziona}}, un clic vicino a uno spigolo prende lo spigolo. Fare clic più vicino al centro della faccia.
- La {{ui:Gomma}} non seleziona le facce. Selezionare la faccia e premere {{key:Delete}}, oppure cancellare uno dei suoi spigoli.
- Se appartiene a un gruppo o componente, il clic seleziona l'intero elemento. Fare doppio clic per aprirlo.

## "Selezionare prima qualcosa da spostare, oppure fare clic su di esso."

{{ui:Sposta}}, {{ui:Ruota}} e {{ui:Scala}} hanno bisogno di qualcosa su cui lavorare: selezionarlo prima, oppure avviare lo strumento facendo clic sull'elemento stesso (non su uno spazio vuoto o su una guida).

## "Selezionare prima una geometria (trascinare una finestra, oppure fare triplo clic per selezionare tutto ciò che è connesso)."

{{key:G}} e {{key:Shift+G}} richiedono una selezione. Le guide non possono essere raggruppate.

## I tasti freccia ruotano la vista invece di bloccare

I blocchi funzionano solo dopo il primo clic di uno strumento di disegno o modifica. {{ui:Spingi/tira}} non ha blocchi, e in {{ui:Ruota}} non cambiano la rotazione. Negli altri casi i tasti freccia ruotano la vista.

## Esc a schermo intero

A schermo intero, il browser potrebbe usare il primo {{key:Esc}} per uscire dallo schermo intero. Premere di nuovo {{key:Esc}} per annullare lo strumento.

## Nessun pulsante centrale

Premere {{key:O}} per {{ui:Orbita}} e trascinare, oppure usare i tasti freccia. Vedi [Orbita, pan e zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importazioni

| Messaggio | Cosa fare |
|---|---|
| "ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG e DXF. … non è nessuno di questi." | Esportare il modello dall'altro programma in uno di questi formati |
| "Questo file supera i 300 MB." | Semplificare o dividere il modello nell'altro programma |
| "…troppo grande per modellarlo qui (oltre 2 milioni di vertici)." | Lo stesso |
| "Questo file .gltf richiede "…"…" | Trascinare il `.gltf` insieme ai file `.bin` e alle texture, oppure aprire la versione `.glb` |
| "Questo file glTF richiede l'estensione … , che ModelCraft non legge ancora." | Esportare di nuovo dall'altro programma senza quell'estensione (per esempio le texture KTX2) |
| Un OBJ viene importato senza i suoi colori o texture | Trascinare il `.obj` insieme al suo `.mtl` e alle immagini |
| "Questo file Alembic usa il vecchio layout HDF5…" | Salvarlo di nuovo dall'altro programma come file Ogawa Alembic |
| Un FBX viene importato senza le sue texture | Trascinare il `.fbx` insieme alle immagini delle texture, oppure incorporare i media durante l'esportazione |
| "Questo file FBX è versione …, che ModelCraft non legge" | Esportare di nuovo come FBX 2011 o successivo |
| Un STL o PLY viene importato 1,000 volte più grande o più piccolo | Lo STL viene letto in millimetri e il PLY in metri: scalarlo (vedi [Ruota e scala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Questo non è un file Collada (.dae)…" o "…non è XML ben formato…" | Il file è danneggiato o non è Collada. Esportarlo di nuovo |
| "Questo file Collada non ha geometria che ModelCraft possa importare." | Contiene solo telecamere, luci o riferimenti ad altri file |
| "Questo è un DXF binario. Salvarlo come DXF ASCII e riprovare." | Salvarlo di nuovo dal programma CAD in formato ASCII |
| "Questo non è un disegno DWG…" | Il file non è un DWG, oppure è danneggiato |
| "Questo disegno non si può leggere (…). Potrebbe essere danneggiato, o salvato in una versione DWG che il lettore non gestisce…" | Le parentesi indicano il motivo. Salvarlo dal programma CAD come DXF, oppure come DWG da AutoCAD 2000 a 2018 |
| "Questo disegno si estende oltre 10,000 km dalla sua origine…" | Spostare il disegno vicino a 0,0 nel programma CAD |

### L'importazione ha dimensioni sbagliate o è coricata

- **OBJ:** OBJ non ha un'unità; ModelCraft legge metri. Un modello in millimetri entra 1000 volte troppo grande: [scalarlo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) di `0.001`; un modello in pollici di `0.0254`.
- **OBJ coricato:** ModelCraft si aspetta file OBJ con Y verso l'alto. Un file scritto con Z verso l'alto entra sdraiato. Ruotarlo di 90° attorno all'asse rosso: fare clic sul centro di {{ui:Ruota}} su una faccia rivolta lungo il rosso, oppure aprire il file nel suo programma ed esportarlo con Y verso l'alto.
- **DWG o DXF:** si è scelta l'unità sbagliata nella finestra "Unità del disegno". Annullare e importare di nuovo.

## Apertura dei file

| Messaggio | Cosa fare |
|---|---|
| "Questo file non è un modello ModelCraft (non è JSON)." | Usare {{ui:Importa}} per gli altri formati |
| "Questo non è un file ModelCraft apribile: …" | Il file è danneggiato o è stato modificato a mano |
| "Questo modello è stato salvato da una versione più recente di ModelCraft…" | Aprirlo nella versione più recente |
| "Questo file supera i 200 MB." | Il modello è troppo grande per essere aperto qui |

## Lavoro perso

ModelCraft non salva da solo in un file. Quando si chiude o si ricarica una scheda con modifiche non salvate, il browser chiede prima ("Lasciare il sito?" o "Ricaricare il sito?"): scegliere di restare e salvare. Anche Nuovo e Apri chiedono ("Modifiche non salvate"). Se il browser o il computer si è bloccato, aprire di nuovo ModelCraft nello stesso browser: propone il lavoro non salvato ("Recuperare il lavoro?"; vedi [Recupera il lavoro](common:recover)). Salvare spesso con {{key:Mod+S}}.

## La cartella dei download si riempie di copie

Ogni salvataggio è un nuovo download, chiamato `Untitled (1).modelcraft`, `Untitled (2).modelcraft` e così via. Eliminare quelli vecchi, oppure impostare il browser perché chieda dove salvare ogni file e sovrascriva da sé il vecchio. Vedi [Apri, salva, importa ed esporta](topic:files#save-a-model).

## Diventa lento

- Ogni passo di annullamento conserva una copia del modello (una [mesh](topic:meshes) conserva solo ciò che è cambiato), quindi con un'importazione molto grande di geometria spinta ogni modifica richiede più tempo. Esplodere o cancellare ciò che non serve, salvare e riaprire: riaprire cancella anche la cronologia di annullamento.
- Le ombre del sole costano di più. Deselezionare {{ui:Ombre del sole}} mentre si modella.

## Nessuna ombra

{{ui:Ombre del sole}} è disattivato, il sole è sotto l'orizzonte all'ora scelta ("The sun is down at this time."), oppure lo stile è {{ui:Struttura a fili}}, che non disegna ombre.

## "Questo browser non consente lo schermo intero."

Alcuni browser e alcune viste incorporate rifiutano lo schermo intero. Usare invece lo schermo intero del browser ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft non si apre senza connessione

ModelCraft si apre offline solo dopo essere stato salvato per l'uso offline in quel browser: il pulsante della barra dell'app deve indicare {{ui:Pronto per l'uso offline}}. Aprirlo con la connessione attiva e fare clic su {{ui:Salva per l'uso offline}}. Se il pulsante indica {{ui:Salvataggio non riuscito}}, fare di nuovo clic con una connessione migliore; {{ui:Offline non disponibile}} significa che questa finestra (una finestra privata, o un computer gestito) non può conservare una copia. Vedi [Lavorare offline](common:offline).
