---
title: Non ancora implementato
summary: Ciò che questa versione di ModelCraft non fa ancora, e cosa fare invece oggi.
keywords: mancante, non ancora, limitazioni, roadmap, materiali, texture, testo, layer, rifila, dividi, cloud, desktop
from: 179fa5e4
---

ModelCraft è una versione iniziale. Questa pagina elenca ciò che non fa ancora, così non si va a cercarlo, e il modo più vicino per svolgere il lavoro oggi.

## Strumenti di disegno

| Non ancora | Invece, oggi |
|---|---|
| Disegno a mano libera | Cliccare i punti con {{ui:Curva}} |
| Cambiare il numero di segmenti di un arco o di un cerchio dopo averlo disegnato | Cancellarlo e disegnarlo di nuovo dopo aver digitato `24s` |
| Scegliere un carattere per il [testo 3D](topic:text3d), o modificarne le parole dopo averlo posizionato | Eliminarlo e aggiungere di nuovo il testo |
| Cambiare un angolo digitando in una quota angolare, o la dimensione di un cilindro dalla quota del suo cerchio | Ruotare gli spigoli con {{ui:Ruota}}; scalare il cilindro con {{ui:Scala}} |
| Quote nei file del modello esportati | Le quote compaiono in immagini, stampe e PDF della vista; i file del modello contengono solo la geometria |
| Rifila, Dividi e Guscio esterno | I gruppi chiusi con [Unione, Sottrai e Interseca](topic:solids), oppure [interseca le facce](topic:intersect) ed elimina ciò che non serve |
| Scegliere l'asse di rotazione con i tasti freccia | Cliccare il centro di {{ui:Ruota}} su una faccia rivolta nella direzione in cui deve puntare l'asse |
| Bloccare più di un'inferenza alla volta | Bloccare una direzione con un tasto freccia, poi agganciare un punto |
| Ridimensionare lungo una inclinazione, o da un estremo di quota che non si trova su un angolo | Posizionare la quota su due angoli, lungo uno spigolo o lungo rosso, verde o blu |

## Animazione

| Non ancora | Invece, oggi |
|---|---|
| Animare facce, spigoli, l'ora del giorno del sole, lo stile o ciò che è nascosto | Rendere la parte mobile un gruppo o un componente; fare il render di un video separato per un'altra ora del giorno |
| Una camera che segue un percorso disegnato, o che guarda un oggetto in movimento | Impostare più chiavi della camera lungo il percorso ([Anima](topic:animation)) |
| Audio nei video, e video di alta qualità (a tracciamento di percorso) senza WebGPU | Aggiungere l'audio in un editor video; senza WebGPU, fare il render del video con il renderer veloce ([Render del video](topic:animation#render-the-video)) |
| Lampade animate (luminosità, diffusione, colore) in un video renderizzato, un angolo di lente animato senza chiavi della camera in un video, animazione di materiali o impostazioni di render | Le lampade si animano nella vista; per un video, impostare anche la camera per uno zoom; fare il render di video separati per diverse impostazioni delle lampade ([Anima qualsiasi proprietà](topic:animate)) |
| Rimappare pesi o ossa da un lato all'altro, inviluppi visibili delle ossa, mostrare i pesi ombreggiati punto per punto (mostrano per faccia), vedere la mesh posata mentre si dipingono i pesi | Dipingere entrambi i lati, oppure fare una metà e usare un modificatore Specchio prima di aggiungere l'armatura; passare da Dipingi pesi a Posa per verificare |
| Ossa lette da file glTF, FBX o USD come armatura, e armature scritte in quei file | I modelli con scheletro entrano in posizione di riposo con i pesi del file; aggiungere le ossa nell'ordine di giunto del file, poi {{ui:Usa i pesi del file}} ([Anima](topic:animate)) |
| Spostare un bersaglio IK o un polo trascinandolo nella vista, scegliere lo spazio di un vincolo (locale o globale), allungare catene IK, IK lungo una curva | Digitare il punto del bersaglio, oppure puntare un oggetto e spostare quello; mantenere le catene alle loro lunghezze |
| Tessuti, fluidi, corpi morbidi, giunti e cerniere tra corpi rigidi, collisione con la forma esatta di un oggetto (solo scatole e sfere attorno ad esso), una simulazione dal vivo durante la riproduzione, una velocità o rotazione iniziale (i corpi partono fermi) | Eseguire il bake dei corpi rigidi e riprodurre le chiavi; costruire una cerniera con le chiavi; scomporre una forma irregolare in scatole (gruppi) |
| Esportare l'animazione in glTF o altri file di modello | Fare il render di un video; il file `.modelcraft` e un [file USD](topic:usd) salvato da ModelCraft la conservano per ModelCraft |
| Scrivere un commento o un titolo su una segnalazione in VR, note vocali, spostare a mano un piano di sezione in VR | Posizionare la segnalazione in VR, poi aggiungere le parole in un programma BCF; impostare un piano di sezione nella vista prima di entrare: vedi [Rivedere il modello con un visore VR](topic:vr-review) |
| Vedere persone alla scrivania in VR (si vedono solo le persone in VR), registrare una passeggiata in VR | Chiedere loro di unirsi in VR, oppure creare una [animazione](topic:animation) della passeggiata |

## Mesh

| Non ancora | Invece, oggi |
|---|---|
| Scultura per livelli (multirisoluzione), e Dettaglio che elimina i triangoli diventati minuscoli | [Scolpisci](topic:sculpt) una mesh suddivisa; {{ui:Ricostruisci mesh}} per renderli di nuovo uniformi |
| Una ricostruzione in facce a quattro lati che seguono la forma | {{ui:Ricostruisci mesh}} (triangoli uniformi), poi ricostruire con [Ritopologia](topic:mesh-edit#retopology) |
| Pesi dipinti sui vertici per i modificatori (Spostamento, Liscia e Avvolgi lavorano sull'intera mesh) | Applicare il modificatore, poi scolpire o modificare le parti che ne hanno bisogno |
| Copia e incolla di vertici, spigoli o facce, un taglio con il coltello che termina dentro una faccia, spigoli a filo senza faccia | Duplicare la mesh in Modello; tagliare con il coltello da spigolo a spigolo; [Estrudi](topic:mesh-edit#change-the-shape) gli spigoli aperti in facce |

## Organizzare e visualizzare

| Non ancora | Invece, oggi |
|---|---|
| Layer di planimetrie DWG e DXF come tag | La planimetria entra come un gruppo: scomporla e raggruppare le parti da etichettare |
| Più tagli di sezione insieme, una scatola di sezione, o il contorno di una sezione esportato come disegno | Un [piano di sezione](topic:sections) alla volta taglia; esportare la vista come immagine |
| Mostrare gli spigoli morbidi tratteggiati, o ammorbidire mentre si trascina un cursore | [Ammorbidisci per angolo](topic:soften) in Informazioni sull'entità, e annullare per provare un altro angolo |
| Una libreria online di modelli da cercare, o componenti con opzioni da scegliere (colore, stile) | La [libreria di partenza](topic:starter); importare modelli Collada, OBJ o glTF; [stira](topic:stretch) una copia alla misura |
| Posizionare piante dalla libreria di piante | [Disperdi](topic:live-view#scatter-plants-rocks-and-people) piante nella vista dal vivo, oppure posizionare un albero della libreria di partenza |
| Copie indipendenti di un gruppo | Renderlo un componente, poi {{ui:Rendi unico}} (vedi [Risoluzione dei problemi](topic:troubleshooting#editing-one-group-changed-another)) |

## Rendering

| Non ancora | Invece, oggi |
|---|---|
| Rendering nella vista (lo spazio di lavoro {{ui:Render}}), la coda di render, e le opzioni di camera, immagine del cielo, nebbia e miscelazione delle luci senza WebGPU | {{ui:Render di un'immagine…}} in Alta qualità usa il path tracer WebGL, senza quelle opzioni ([Render di un'immagine](topic:render#high-quality)) |
| Un altro programma che disegna l'immagine di render senza un add-on motore di render (CadCraft non esegue mai un programma sotto licenza GNU GPL); camere panoramiche o stereo e un'immagine del cielo tramite un altro programma; il plug-in per Unreal Engine (i file vengono scritti, il plug-in che li apre non è rilasciato) | I nostri motori di tracciamento Fast e Path; il motore di un add-on ([disegnare l'immagine con un altro programma](topic:render-other-program)); un file di cartella USD, glTF o Unreal dall'elenco Motore da portare in qualsiasi programma |
| Piante e rocce disperse in {{ui:Render di un'immagine…}} | Compaiono nella [vista dal vivo](topic:live-view), nei suoi panorami, nel visualizzatore e nei video |

## Materiali e colori

| Non ancora | Invece, oggi |
|---|---|
| Ingressi diversi dal colore base, ruvidezza, metallicità, opacità, normale ed emissione che variano lungo una superficie nelle immagini ad alta qualità (usano la loro media) | [Crea materiali con nodi](topic:shading): collegarli comunque, la vista li mostra variabili |
| Spostamento sulle facce di spinta/tira | Convertire l'oggetto in mesh per lo spostamento |
| Condividere i propri materiali nella Libreria dall'app, e mappe impacchettate (ARM/ORM) o EXR in un set di texture importato | Tenerli nel file; importare le mappe separate come PNG o JPEG |
| Materiali del file nelle sessioni Live TeamWork (restano sul computer che li ha creati) | Salvare il file e condividerlo |
| Decal che si piegano su superfici curve, decal in Annulla, o dipingere le texture di più facce insieme attraverso una cucitura | Posizionare decal più piccole su ogni parte; dipingere ogni lato di una cucitura separatamente |
| Bake su facce di spinta/tira, bake di più oggetti in un'unica immagine, una gabbia che si modella a mano, o luce di bake dalle lampade | Convertire in mesh e srotolarla; fare il bake di ogni oggetto; aumentare la distanza di ricerca; fare il render di un'immagine per la luce delle lampade |
| Dipingere ruvidezza, metallicità o altezza, dipingere con immagini (timbri) e pittura di texture più grande di 512 × 512 | Dipingere qui il colore base; creare le altre mappe in un editor di immagini e importarle come set di texture |
| Texture negli export Collada, STL, PLY, 3MF, IFC, DWG e DXF, e i grafi dei nodi dei materiali propri del file nei modelli esportati | Questi formati ricevono il colore di ogni materiale; glTF e OBJ portano le texture importate; esportare un materiale da solo come [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva l'intero modello per ModelCraft |
| Texture nei file Collada | Vengono contate ed escluse all'importazione; le texture in file `.skp` e `.glb` vengono importate |

## File

| Non ancora | Invece, oggi |
|---|---|
| Salvare file SketchUp, e testo e quote da essi | [Importa](topic:import-sketchup-files) mantiene facce, colori e texture; esportare Collada (`.dae`) per tornare a SketchUp |
| Quote e guide negli export DWG e DXF | Aggiungerle nel programma CAD dopo l'esportazione |
| Punti, tabelle e linee di richiamo multiple da DWG e DXF | Vengono contati ed esclusi; il testo entra come scrittura a tratto singolo, non nel carattere del disegno |
| Superfici, mesh, tabelle e linee di richiamo multiple da DWG e DXF; facce di solidi 3D su superfici a forma libera, estruse, lofted o altre | Vengono anch'esse contate ed escluse (i solidi 3D stessi entrano). Esportare queste parti dal programma CAD come OBJ o Collada e importare quello |
| Tipi IFC, proprietà o materiali IFC | L'export IFC ha [piani](topic:formats#ifc-ifc) ed elementi generici; aggiungere il resto in un programma BIM |
| Inviare un modello direttamente a BimCraft | Esportare {{ui:IFC per BimCraft (.ifc)}} e aprirlo in BimCraft |
| Spigoli sciolti in glTF e STL | Usare OBJ o Collada per il disegno a linee |
| Materiali glTF e FBX oltre al colore base (metallo, ruvidezza, mappe normali, vetro, vernice trasparente, sheen…) | Vengono letti ed elencati; ModelCraft mantiene il colore base o la texture. Ricostruire l'aspetto nello [spazio di lavoro Ombreggiatura](topic:shading) |
| Ossa, animazioni e target di morph glTF | I modelli con scheletro entrano fermi come riposano; animare nella [timeline](topic:animation) |
| Colori e nomi delle parti dell'assieme da file STEP | Le parti entrano come mesh alla loro dimensione reale; [dipingere](topic:paint) e nominarle dopo l'importazione |
| Oggetti SubD, testo, quote e luci da file `.3dm` | Vedi [cosa viene escluso](topic:import-3dm-files#what-is-left-out-and-said); trasformare SubD in mesh nel programma che ha creato il file |
| Texture KTX2 e varianti di materiale in glTF | Esportare con texture PNG o JPEG; viene usata la variante predefinita |
| Scrittura di glTF instancing (EXT_mesh_gpu_instancing) | I componenti sono scritti una volta e posizionati molte volte, cosa che ogni visualizzatore legge |
| Animazione Alembic (ogni campione di una cache), punti e curve Alembic, scrittura in Alembic | Entra il primo campione; animare nella [timeline](topic:animation); scrivere glTF, USD o OBJ |
| Mappe di bump e normali nei materiali OBJ | Entra solo l'immagine del colore (`map_Kd`) |
| Ossa e animazione FBX, esportazione FBX, file FBX 6 | I modelli con scheletro entrano fermi; esportare glTF; salvare i file vecchi come FBX 2011 o più recente |
| Skin, morph, camere, luci, trasformazioni look-at e skew di Collada, riferimenti esterni | Esclusi all'importazione e contati nel messaggio |
| File di backup | {{ui:Salva come}} ({{key:Mod+Shift+S}}) salva un'altra copia. Dopo un arresto anomalo, ModelCraft offre il lavoro non salvato ("Recupera il lavoro?") |
| Salvataggio cloud e sincronizzazione tra computer | Non ancora disponibile. Salvare i file sul computer e copiarli dove servono |

## Stampa 3D

| Non ancora | Invece, oggi |
|---|---|
| Supporti reali per lo slicer (interfacce, raft, il pattern esatto dei supporti) | L'[anteprima dei supporti](topic:print-tools#supports-preview) mostra dove e quanto; l'anteprima del proprio slicer mostra quelli reali |
| Districare una parte che passa attraverso sé stessa, o spigoli dove si incontrano tre o più facce | [Ripara](topic:print-tools#repair) li elenca con la posizione; usare [Interseca facce](topic:intersect) ed eliminare ciò che sta dentro |
| Pattern di riempimento e un reticolo dentro un vuoto | [Svuota](topic:print-tools#hollow) lo lascia vuoto; lo slicer aggiunge il riempimento a una parte piena |
| Dettagli troppo piccoli per l'ugello (diversi dalle pareti) | [Spessore delle pareti](topic:print-tools#wall-thickness) trova le pareti sottili; l'anteprima dei layer dello slicer mostra il resto |

## Prestazioni

Annulla conserva una copia del modello per ogni passo ([mesh](topic:meshes) conserva solo ciò che è cambiato), quindi importazioni molto grandi di geometria spinta/tirata rendono più lenta ogni modifica. Mantenere le importazioni snelle, e salvare e riaprire per cancellare la cronologia.

## Applicazioni e piattaforme

- **Desktop:** ModelCraft gira nel browser su Mac, Windows e Linux, e in CadCraft Studio, l'app desktop con tutte e otto le app in un'unica installazione. Su Android, CadCraft Studio si installa dal suo APK su getcadcraft.com/download. Non esiste ancora una versione per iPad o iPhone.
- **Tocco:** vedi [Orbita, pan e zoom](topic:orbit-pan-zoom) per i gesti con le dita. La pressione di una penna imposta il pennello in [Scolpisci](topic:sculpt); altrove pressione e inclinazione della penna non vengono usate.
- **Tavole:** ModelCraft [stampa una vista per pagina](topic:export-model#print-the-view-or-save-it-as-a-pdf); non ci sono layout di tavole con più viste o un cartiglio. Esportare in DWG/DXF compatibili con CadCraft per disegni in scala.
