---
title: Apri, salva, importa ed esporta
summary: Il file di ModelCraft, cosa si può importare e inviare, dove finiscono i file e cosa cambia offline e tra browser.
keywords: apri, salva, importa, esporta, file, 3dm, skp, recupera, salvataggio automatico, recenti, desktop, apri in 3D, passaggio, scarica, file modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, offline, salva con nome
from: 3f09ab72
---

ModelCraft legge e scrive i file sul tuo computer. Nulla viene caricato: un file aperto viene letto nel browser, e un file salvato è un download. Vedi [Dove vanno i file](common:your-files).

## Formati in breve

| Formato | Apri | Importa | Esporta | A cosa serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sì | no | {{ui:Salva}} | Il file di lavoro. Mantiene tutto. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sì | sì | {{ui:Salva come}}, {{ui:Esporta}} | Programmi di rendering e di assemblaggio di scene. Il formato USD di ModelCraft mantiene tutto. Vedi [Salvare, aprire ed esportare USD](topic:usd). |
| SketchUp (`.skp`) | no | sì | no | Per portare modelli da SketchUp. Mantiene gruppi, componenti, colori, texture sulle facce, tag e spigoli morbidi. Vedi [Importare un modello SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sì | sì | Scambio di modelli con altri modellatori 3D. Mantiene gruppi, componenti e colori. |
| OBJ (`.obj`) | no | sì | sì | Programmi di rendering e di visualizzazione. |
| glTF (`.glb`, `.gltf`) | no | sì | solo `.glb` | Visualizzatori web, motori di gioco, AR. |
| STL (`.stl`) | no | sì | sì | Stampa 3D (in millimetri). |
| PLY (`.ply`) | no | sì | sì | Mesh con colori: scansioni, stampa a colori. |
| FBX (`.fbx`) | no | sì | no | Modelli da programmi di animazione e di giochi (FBX 2011 e successivi). |
| Alembic (`.abc`) | no | sì | no | Cache di geometria, al loro primo campione. |
| STEP (`.step`, `.stp`) | no | sì | no | Parti da modellatori di parti e fornitori, come mesh chiuse alla dimensione reale. Vedi [Formati di file](topic:formats). |
| `.3dm` | no | sì | no | Modelli NURBS: polysurface, mesh, curve, blocchi e layer, come mesh, spigoli, componenti e tag. Vedi [Importare un modello .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sì | Stampa 3D, con colori (in millimetri). Da {{ui:Verifica per la stampa 3D (STL o 3MF)…}}: vedi [Preparare un modello per la stampa 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sì | Programmi BIM e BimCraft. |
| DWG (`.dwg`) | no | sì | sì | Una planimetria del sito o una pianta su cui modellare; invio del modello a un programma CAD. |
| DXF (`.dxf`) | no | sì | sì | Lo stesso, per qualsiasi programma CAD. |

[Formati di file nel dettaglio](topic:formats) elenca esattamente cosa mantiene e cosa lascia fuori ogni formato.

## Il file di ModelCraft

Un file `.modelcraft` mantiene l'intero modello: geometria, gruppi, componenti, guide, scene, le unità, e la camera e lo stile in uso al momento del salvataggio. Non mantiene la cronologia di annullamento.

### Aprire un modello

1. Fare clic su {{ui:Apri}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Se il modello a schermo ha modifiche non salvate, ModelCraft chiede: "Questo modello contiene modifiche non salvate. Salvare prima una copia?" Scegliere {{ui:Salva una copia}}, {{ui:Scarta le modifiche}} o {{ui:Annulla}}.
3. Selezionare il file `.modelcraft`.

Il modello si apre nelle unità con cui è stato salvato, con la camera con cui è stato salvato. È anche possibile trascinare un file `.modelcraft` nella vista 3D, oppure fare clic su uno dei file nell'elenco dei recenti nella scheda di avvio (browser che possono riaprire un file, e l'app desktop).

:::desktop
Nell'app desktop, un doppio clic su un file `.modelcraft` lo apre in ModelCraft, e lo stesso fa **Apri con** su un file Collada, OBJ, glTF, DWG o DXF (viene importato in un nuovo modello).
:::

### Salvare un modello

Fare clic su {{ui:Salva}} o premere {{key:Mod+S}}. Il browser scarica `<nome>.modelcraft`, dove il nome è quello del file aperto, oppure "Untitled" per un nuovo modello.

:::desktop
Nell'app desktop, {{ui:Salva}} scrive il file aperto nello stesso punto. Un nuovo modello chiede dove salvarlo.
:::

- {{ui:Salva come}} ({{key:Mod+Shift+S}}) salva una copia come file `.modelcraft` o come [USD](topic:usd); dove il browser lo consente, chiede il nome e il percorso. Altrimenti rinominare il file scaricato: il salvataggio successivo, dopo aver aperto il file rinominato, usa il nuovo nome.
- Ogni salvataggio è un nuovo download. A seconda delle impostazioni del browser, va direttamente nella cartella dei download oppure chiede dove salvare. Se nella cartella esiste già un file con quel nome, la maggior parte dei browser aggiunge un numero, come `Untitled (1).modelcraft`.

:::chromium
Per scegliere la cartella ogni volta, aprire le impostazioni del browser, cercare "download" e attivare "Chiedi dove salvare ogni file prima di scaricarlo".
:::

:::firefox
Per scegliere la cartella ogni volta, aprire **Impostazioni**, poi **Generali**, e in "Download" scegliere "Chiedi sempre dove salvare i file".
:::

:::safari
Per cambiare dove finiscono i download, aprire **Safari**, poi **Impostazioni**, poi **Generali**, e impostare "Posizione dei file scaricati".
:::

### Avviare un nuovo modello

Fare clic su {{ui:Nuovo}}. Se ci sono modifiche non salvate, ModelCraft chiede prima. Un nuovo modello parte vuoto, nell'unità della propria lingua (piedi e pollici negli Stati Uniti, millimetri altrove), senza scene.

### Se il browser si chiude prima del salvataggio

ModelCraft conserva una copia del lavoro non salvato nel browser pochi secondi dopo ogni modifica. La copia viene scritta in background, quindi un modello grande non fa attendere. Se la scheda o il browser si chiudono prima del salvataggio, alla successiva apertura di ModelCraft compare la domanda "Recuperare il lavoro?". Recuperando, il modello si apre com'era, non ancora salvato in un file: salvarlo per conservarlo. Vedi [Recuperare il lavoro](common:recover).

### Da CadCraft: Apri in ModelCraft

Nell'app di disegno CadCraft, **Vista**, poi **Altro**, poi **Apri in ModelCraft** passa il disegno aperto a ModelCraft in una nuova scheda, come DWG. Arriva come un DWG importato: linee sul terreno, in un gruppo, pronte per modellare sopra. Nulla viene caricato; il file passa dallo spazio di archiviazione del browser.

## Importare

Importare aggiunge un file al modello aperto; non lo sostituisce.

1. Fare clic su {{ui:Importa}} nel gruppo {{ui:File}}, oppure trascinare il file nella vista 3D.
2. Selezionare un file SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   Il file arriva come **un solo gruppo**, selezionato, e la vista fa lo zoom per mostrarlo. La barra di stato indica cosa è arrivato, ed elenca ciò che non è stato possibile importare, come "Non importato: 2 texture".

3. Per lavorare direttamente sulla sua geometria, fare doppio clic sul gruppo per modificarlo al suo interno, oppure fare clic su {{ui:Esplodi}}.

Alcune cose da sapere:

- **Dimensione e direzione verso l'alto:** i file Collada indicano la propria unità e quale asse è verso l'alto, e ModelCraft li converte. Il glTF è sempre in metri. I file OBJ non hanno unità: ModelCraft li legge come metri, con Y verso l'alto. Se un OBJ arriva 1000 volte più grande o più piccolo, usare [Scala](topic:rotate-scale) con un fattore come `0.001` o `1000`.
- **DWG e DXF** arrivano come linee (spigoli) sul terreno, non come facce. Se il disegno non indica la sua unità, compare una finestra intitolata "Unità di disegno" che chiede quanto vale un'unità del disegno. Vedi [Modellare su una planimetria del sito](topic:site-plan).
- **Limiti:** i file oltre 300 MB sono rifiutati per l'importazione, e oltre 200 MB per l'apertura. I file con più di 2 milioni di vertici o facce sono rifiutati perché troppo grandi. Un OBJ oltre 64 MB viene rifiutato prima di essere letto. I file di testo (Collada, OBJ, STL ASCII, USD testo) vengono letti a pezzi, di circa 4 MB, quindi nessun blocco di testo contiene un intero file; un OBJ da 16 MB ha usato circa 0.5 GB di memoria durante l'apertura nel nostro test.

## Esportare

1. Fare clic su {{ui:Esporta}} nel gruppo {{ui:File}}.
2. Scegliere un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL per la stampa (.stl, millimetri)}}, {{ui:PLY con colori (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC per BimCraft (.ifc)}}, {{ui:DWG per CAD (.dwg, 2004)}} o {{ui:DXF per CAD (.dxf, R12)}}.

Il browser scarica il file, con il nome del modello. Viene esportato l'intero modello, non solo la selezione. I file glTF, Collada e OBJ vengono scritti in background, quindi ModelCraft continua a funzionare mentre un modello grande viene esportato; il download inizia quando il file è pronto. Un modello vuoto non viene esportato: "Il modello è vuoto: disegnare prima qualcosa." Vedi [Esportare un modello per altri programmi](topic:export-model).

## Online e offline

Tutto in ModelCraft gira sul proprio computer, quindi modellare, aprire, salvare, importare ed esportare funzionano senza connessione una volta caricata l'app.

Per aprire ModelCraft senza alcuna connessione, salvarlo per l'uso offline mentre si è online:

1. Fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app in alto.
2. Il pulsante conta ("Salvataggio 40 di 212") mentre salva. ModelCraft salva i propri file (tra cui il lettore DWG), questa guida e la libreria 3D, quindi può richiedere un po' di tempo.
3. Quando il pulsante riporta {{ui:Pronto per l'uso offline}}, ModelCraft si apre dallo stesso indirizzo senza connessione, e anche l'importazione DWG funziona offline.

Fare clic su {{ui:Pronto per l'uso offline}} più tardi per {{ui:Salva di nuovo (scarica la versione più recente)}} o {{ui:Rimuovi la copia offline}}. Se il pulsante riporta {{ui:Salvataggio non riuscito}}, alcuni file non sono stati scaricati: controllare la connessione e fare clic di nuovo per riprovare. {{ui:Offline non disponibile}} significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti). Vedi [Lavorare offline](common:offline).

Il salvataggio nel cloud non è ancora disponibile. Ogni modello si trova dove lo si salva.

:::offline
Si è offline. È possibile continuare a modellare e salvare. A meno che la barra dell'app non mostri {{ui:Pronto per l'uso offline}}, non ricaricare questa scheda finché non si torna online.
:::

## App desktop

:::desktop
Si sta usando ModelCraft in CadCraft Studio, l'app desktop con tutte e otto le app. I file si aprono e si salvano dove si sceglie.
:::

:::web
ModelCraft funziona nel browser su Mac, Windows e Linux, e in CadCraft Studio, l'app desktop con tutte e otto le app in un'unica installazione, da getcadcraft.com/download.
:::
