---
title: Aprire, salvare, importare ed esportare
summary: Il file ModelCraft, che cosa si può importare ed esportare, dove vanno i file e che cosa cambia offline e tra browser.
keywords: apri, salva, importa, esporta, file, 3dm, skp, recupero, salvataggio automatico, recenti, desktop, apri in 3d, passaggio, download, file modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formati, offline, salva con nome
from: 0b4896d1
---

ModelCraft legge e scrive file sul computer. Non viene caricato nulla: un file aperto viene letto all'interno del browser e un file salvato è un download. Vedere [Dove vanno i file](common:your-files).

## I formati in sintesi

| Formato | Apri | Importa | Esporta | A cosa serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sì | no | {{ui:Salva}} | Il file di lavoro. Conserva tutto. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sì | sì | {{ui:Salva con nome}}, {{ui:Esporta}} | Programmi di render e di assemblaggio di scene. L'USD di ModelCraft conserva tutto. Vedere [Salvare, aprire ed esportare USD](topic:usd). |
| SketchUp (`.skp`) | no | sì | no | Portare modelli da SketchUp. Conserva gruppi, componenti, colori, texture sulle facce, tag e spigoli morbidi. Vedere [Importare un modello SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sì | sì | Scambiare modelli con altri modellatori 3D. Conserva gruppi, componenti e colori. |
| OBJ (`.obj`) | no | sì | sì | Programmi di render e visualizzazione. |
| glTF (`.glb`, `.gltf`) | no | sì | solo `.glb` | Visualizzatori web, motori di gioco, AR. |
| STL (`.stl`) | no | sì | sì | Stampa 3D (in millimetri). |
| PLY (`.ply`) | no | sì | sì | Mesh con colori: scansioni, stampa a colori. |
| FBX (`.fbx`) | no | sì | no | Modelli da programmi di animazione e di giochi (FBX 2011 e successivi). |
| Alembic (`.abc`) | no | sì | no | Cache di geometria, al primo campione. |
| STEP (`.step`, `.stp`) | no | sì | no | Parti da modellatori di parti e da fornitori, come mesh chiuse alla dimensione reale. Vedere [Formati di file](topic:formats). |
| `.3dm` | no | sì | no | Modelli NURBS: polisuperfici, mesh, curve, blocchi e layer, come mesh, spigoli, componenti e tag. Vedere [Importare un modello .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sì | Stampa 3D, con colori (in millimetri). Da {{ui:Verifica per la stampa 3D (STL o 3MF)…}}: vedere [Preparare un modello per la stampa 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sì | Programmi BIM e BimCraft. |
| DWG (`.dwg`) | no | sì | sì | Una planimetria del sito o una pianta su cui modellare; inviare il modello a un programma CAD. |
| DXF (`.dxf`) | no | sì | sì | Lo stesso, per qualsiasi programma CAD. |

[I formati di file in dettaglio](topic:formats) elenca esattamente che cosa conserva e che cosa lascia fuori ciascun formato.

## Il file ModelCraft

Un file `.modelcraft` conserva l'intero modello: geometria, gruppi, componenti, guide, scene, le unità, la camera e lo stile in uso al momento del salvataggio. Non conserva la cronologia di annullamento.

### Aprire un modello

1. Fare clic su {{ui:Apri}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Se il modello sullo schermo ha modifiche non salvate, ModelCraft chiede: "Questo modello ha modifiche non salvate. Salvare prima una copia?" Scegliere {{ui:Salva una copia}}, {{ui:Scarta le modifiche}} oppure {{ui:Annulla}}.
3. Scegliere il file `.modelcraft`.

Il modello si apre con le unità in cui è stato salvato e con la camera con cui è stato salvato. È anche possibile trascinare un file `.modelcraft` sulla vista 3D, oppure fare clic su uno dell'elenco dei file recenti nella scheda iniziale (browser che possono riaprire un file, e app desktop).

:::desktop
Nell'app desktop, il doppio clic su un file `.modelcraft` lo apre in ModelCraft, così come **Apri con** su un file Collada, OBJ, glTF, DWG o DXF (viene importato in un nuovo modello).
:::

### Salvare un modello

Fare clic su {{ui:Salva}} oppure premere {{key:Mod+S}}. Il browser scarica `<nome>.modelcraft`, dove il nome è quello del file aperto, oppure "Untitled" per un nuovo modello.

:::desktop
Nell'app desktop, {{ui:Salva}} scrive il file aperto sul posto. Un nuovo modello chiede dove salvarlo.
:::

- {{ui:Salva con nome}} ({{key:Mod+Shift+S}}) salva una copia come file `.modelcraft` oppure come [USD](topic:usd); dove il browser lo permette, chiede il nome e la posizione. Altrimenti rinominare il file scaricato: il salvataggio successivo, dopo aver aperto il file rinominato, usa il nuovo nome.
- Ogni salvataggio è un nuovo download. A seconda delle impostazioni del browser, finisce direttamente nella cartella dei download oppure chiede dove salvare. Se esiste già un file con quel nome, la maggior parte dei browser aggiunge un numero, come `Untitled (1).modelcraft`.

:::chromium
Per scegliere ogni volta la cartella, aprire le impostazioni del browser, cercare "download" e attivare "Chiedi dove salvare ogni file prima di scaricarlo".
:::

:::firefox
Per scegliere ogni volta la cartella, aprire **Impostazioni**, poi **Generale**, e in "File e download" scegliere "Chiedi sempre dove salvare i file".
:::

:::safari
Per cambiare dove vanno i download, aprire **Safari**, poi **Impostazioni**, poi **Generali**, e impostare "Posizione download file".
:::

### Iniziare un nuovo modello

Fare clic su {{ui:Nuovo}}. Se ci sono modifiche non salvate, ModelCraft chiede prima. Un nuovo modello parte vuoto, nell'unità della propria area geografica (piedi e pollici negli Stati Uniti, millimetri altrove), senza scene.

### Se il browser si chiude prima del salvataggio

ModelCraft conserva nel browser una copia del lavoro non salvato un paio di secondi dopo ogni modifica. Se la scheda o il browser si chiude prima del salvataggio, la volta successiva che si apre ModelCraft chiede "Recuperare il lavoro?". Il recupero apre il modello com'era, non ancora salvato in un file: salvarlo per conservarlo. Vedere [Recuperare il lavoro](common:recover).

### Da CadCraft: Apri in ModelCraft

Nell'app di disegno CadCraft, **Vista**, poi **Altro**, poi **Apri in ModelCraft** passa il disegno aperto a ModelCraft in una nuova scheda, come DWG. Arriva come un DWG importato: linee sul terreno, in un gruppo, pronte per modellarci sopra. Non viene caricato nulla; il file passa attraverso la memoria del browser.

## Importare

L'importazione aggiunge un file al modello aperto; non lo sostituisce.

1. Fare clic su {{ui:Importa}} nel gruppo {{ui:File}}, oppure trascinare il file sulla vista 3D.
2. Scegliere un file SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   Il file arriva come **un solo gruppo**, selezionato, e la vista esegue lo zoom per mostrarlo. La barra di stato dice che cosa è arrivato ed elenca ciò che non è stato possibile importare, per esempio "Non importato: 2 texture".

3. Per lavorare direttamente sulla sua geometria, fare doppio clic sul gruppo per modificare al suo interno, oppure fare clic su {{ui:Esplodi}}.

Alcune cose da sapere:

- **Dimensione e direzione verso l'alto:** i file Collada indicano la propria unità e quale asse è verso l'alto, e ModelCraft li converte. glTF è sempre in metri. I file OBJ non hanno unità: ModelCraft li legge in metri, con Y verso l'alto. Se un OBJ arriva 1000 volte troppo grande o troppo piccolo, usare [Scala](topic:rotate-scale) con un fattore come `0.001` o `1000`.
- **DWG e DXF** arrivano come linee (spigoli) sul terreno, non come facce. Se il disegno non indica la propria unità, una finestra intitolata "Unità del disegno" chiede quanto vale un'unità del disegno. Vedere [Modellare su una planimetria del sito](topic:site-plan).
- **Limiti:** i file oltre 300 MB vengono rifiutati per l'importazione e oltre 200 MB per l'apertura. I file con più di 2 milioni di vertici o facce vengono rifiutati perché troppo grandi.

## Esportare

1. Fare clic su {{ui:Esporta}} nel gruppo {{ui:File}}.
2. Scegliere un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL per la stampa (.stl, millimetri)}}, {{ui:PLY con colori (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC per BimCraft (.ifc)}}, {{ui:DWG per CAD (.dwg, 2004)}} oppure {{ui:DXF per CAD (.dxf, R12)}}.

Il browser scarica il file, con il nome del modello. Viene esportato l'intero modello, non solo la selezione. Un modello vuoto non viene esportato: "Il modello è vuoto: disegnare prima qualcosa." Vedere [Esportare un modello per altri programmi](topic:export-model).

## Online e offline

Tutto in ModelCraft funziona sul computer, quindi modellare, aprire, salvare, importare ed esportare funzionano senza connessione una volta caricata l'app.

Per aprire ModelCraft senza alcuna connessione, salvarlo per l'uso offline mentre si è online:

1. Fare clic su {{ui:Salva per l'uso offline}} nella barra dell'app in alto.
2. Il pulsante conta ("Salvataggio di 40 su 212") mentre salva. ModelCraft salva i propri file (tra cui il lettore DWG), questa guida e la libreria 3D, quindi può richiedere un po' di tempo.
3. Quando il pulsante riporta {{ui:Pronto per l'uso offline}}, ModelCraft si apre dallo stesso indirizzo senza connessione e anche l'importazione DWG funziona offline.

Fare clic più tardi su {{ui:Pronto per l'uso offline}} per {{ui:Salva di nuovo (scarica la versione più recente)}} oppure {{ui:Rimuovi la copia offline}}. Se il pulsante riporta {{ui:Salvataggio non riuscito}}, alcuni file non sono stati scaricati: controllare la connessione e fare clic per riprovare. {{ui:Offline non disponibile}} significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti). Vedere [Lavorare offline](common:offline).

Il salvataggio nel cloud non è ancora disponibile. Ogni modello resta dove viene salvato.

:::offline
Si è offline. È possibile continuare a modellare e salvare. Se la barra dell'app non mostra {{ui:Pronto per l'uso offline}}, non ricaricare questa scheda finché non si è di nuovo online.
:::

## App desktop

:::desktop
Si sta usando ModelCraft in CadCraft Studio, l'app desktop con tutte e otto le app. I file si aprono e si salvano dove si sceglie.
:::

:::web
ModelCraft funziona nel browser su Mac, Windows e Linux, e in CadCraft Studio, l'app desktop con tutte e otto le app in un'unica installazione, da getcadcraft.com/download.
:::
