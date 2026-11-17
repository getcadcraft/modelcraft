---
title: Novità nella 0.9
summary: Fase di stampa con il nostro slicer e invio via USB, Klipper, OctoPrint e PrusaLink, slicing per resina e add-on per i file, flusso dei materiali, gemello digitale e add-on per il piano di fabbrica, raccordi NURBS, spessorazione e adattamento alla scansione, AR in cantiere e dieci metodi per gli archi.
keywords: novità, note di rilascio, changelog, 0.9, fase di stampa, stampa 3d, invia alla stampante 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, stampa in resina, goo, sl1, ctb, anycubic, test di esposizione, flusso dei materiali, gemello digitale, piano di fabbrica, plc, nastro trasportatore, nurbs, raccordo, spessorare, adattamento alla scansione, ar, in cantiere, metodi arco, unità, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, motore di render, motore, apri in, usd, gltf, unreal, motore da add-on, superfici, loft, sweep, continuità, g0, g1, g2, zebra, step, iges, descrivi la scena, scena, meteo, ora del giorno, stagione, assistente, materiale da una foto, foto, foto dello schizzo, arreda, arreda una stanza, inclinato, taglio inclinato, dividi, controllo di stampa, problemi, griglia proprietà, lampade, lingue, dispositivi di input, righe della barra degli strumenti, dwg, live
from: 169048a2
---

Questo è ciò che è cambiato in ModelCraft 0.9, rispetto alla 0.8.1. ModelCraft ora arriva fino alla stampante e al reparto di produzione: si possono mettere oggetti sul piano di stampa e inviarli senza esportarli, affettare per filamento o per resina, e disporre una linea di movimentazione dei materiali. Questo è CadCraft Studio 0.9 e le sue otto app; la maggior parte delle nuove funzioni qui sotto sono add-on.

## Novità

### Stampa 3D

- **Fase di stampa.** Fare clic su {{ui:Fase di stampa}} nella barra degli strumenti. Aggiungere elementi della libreria al piano della stampante, disporli, guardare attraverso gli strati affettati e premere {{ui:Invia alla stampante 3D}}, senza esportare alcun STL. Appartiene all'add-on 3D Print, attivo per impostazione predefinita, e si può rimuovere come qualsiasi add-on. Vedi [Mettere gli oggetti sul piano di stampa e inviarli a una stampante](topic:print-stage).
- **Il nostro slicer per filamento.** {{ui:CadCraft basic (incluso, più rapido)}} è lo slicer nell'elenco **Slicer** della scheda: pareti, pelli, riempimento, supporti e un bordo di partenza, su un worker così la pagina resta utilizzabile. {{ui:Anteprima degli strati}} con il cursore **Strato** mostra gli strati prima dell'invio. I profili di stampante, come gli stili Ender-3 e Prusa MK4, portano con sé il proprio G-code di avvio.
- **Invio.** Via USB (Chrome o Edge su un computer, con la pagina tenuta aperta), oppure verso Klipper (Moonraker), OctoPrint o PrusaLink sulla rete. Nulla si collega né invia senza un clic, e l'invio chiede prima conferma.
- **Altri slicer.** Kiri:Moto, PrusaSlicer e OrcaSlicer sono add-on a sé, disattivati per impostazione predefinita; si aggiungono dalla scheda o da {{ui:Impostazioni}} › {{ui:Add-on}}. PrusaSlicer e OrcaSlicer usano la copia installata sul proprio computer da CadCraft Studio. L'add-on per le stampanti Bambu Lab affetta con il proprio OrcaSlicer e i suoi preset P2S, e richiede Studio su un computer.
- **Stampa in resina.** Gli add-on per la resina (disattivati per impostazione predefinita) creano immagini degli strati per lo schermo della stampante, con svuotamento, fori di sfiato, una zattera e supporti, un'anteprima degli strati, e tempo, resina e costo. Gli add-on per i formati di file scrivono Elegoo GOO, SL1, Chitubox (CBDDLP e CTB da 2 a 5) e Anycubic (PWMX e PWS). Un test di esposizione per la resina produce una scala di cinque esposizioni. Vedi [Affettare per una stampante a resina](topic:resin-printing).
- **Invariato.** {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}}, gli strumenti di stampa e Dividi per la stampa funzionano come nella 0.8. Vedi [Preparare un modello per la stampa 3D](topic:print-3d).

### Flusso dei materiali, gemello digitale e piano di fabbrica

Questi tre sono add-on, disattivati finché non li si attiva in {{ui:Impostazioni}} › {{ui:Add-on}}, e ciascuno ha la propria guida una volta attivato.

- **Flusso dei materiali.** Un pannello chiamato Flusso dei materiali dispone nastri trasportatori, stazioni, buffer e percorsi AGV nella vista 3D, esegue una simulazione con seme, la riproduce e mostra la produttività, i tempi di consegna e le code, con i risultati salvati come CSV. Gli ordini possono arrivare da un file CSV. Le celle robotiche si possono verificare ed esportare. Il collegamento PLC ha una modalità simulata e una modalità reale su Modbus TCP, che funziona solo in CadCraft Studio.
- **Gemello digitale.** Legge la disposizione del Flusso dei materiali ed esegue un PLC simulato su di essa, con guasti che si possono forzare, prove di scorte, un confronto di disposizioni e una distinta base.
- **Piano di fabbrica.** Trasforma le stazioni in macchine e celle, le legge in tempo reale oppure da un simulatore, e mantiene una coda di lavori e un semplice OEE. Legge soltanto: questa versione non può scrivere su una macchina né su un PLC.

### Superfici, modelli e disegno

- **Raccordi, spessorazione e booleane su NURBS.** Il pannello {{ui:Superfici}} ha {{ui:Raccordo tra facce}}, {{ui:Raccordo di più spigoli}}, {{ui:Dai spessore e crea un solido}} e Unione, Sottrazione e Intersezione, ciascuno con la propria deviazione misurata. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **Adattare superfici a una scansione.** Selezionare una mesh scansionata e usare {{ui:Adatta superfici alla scansione}} nel gruppo **Scansione**, poi {{ui:Cuci le superfici in un solido}}. È un primo adattamento, non un pacchetto completo di reverse engineering.
- **Un collegamento in tempo reale da un modellatore .3dm.** A senso unico, da Rhino 8 o Grasshopper, e richiede CadCraft Studio sullo stesso computer. Vedi [Mantenere un modello .3dm in tempo reale](topic:live-3dm-link).
- **Vedere il modello in cantiere.** {{ui:Vista sul cantiere (AR, telefono)}} nel menu {{ui:Viste}} funziona su un telefono Android con Chrome. Vedi [Vedere il modello in cantiere con un telefono Android (AR)](topic:ar-on-site).
- **Metodi per l'arco.** Il menu a tendina {{ui:Metodi arco}} offre dieci modi per disegnare un arco, tra cui {{ui:3 punti}} e {{ui:Inizio, Centro, Fine}}.
- **Altre unità.** Pesi (kg, lb, t, ton) e temperature (gradi C, F, K e R) sono riconosciuti dove si digitano valori con unità.

## In ogni app

- **Suggerimenti.** Il testo che compare passando sui pulsanti e sulle etichette tagliate è un suggerimento Bootstrap.
- **Scheda di avvio chiudibile.** La scheda di suggerimento su un'area di disegno vuota ha una piccola x di chiusura. Resta chiusa, e la palette dei comandi può mostrarla di nuovo.
- **Barre delle schede a scorrimento.** La barra delle schede di un pannello che non entra scorre invece di essere tagliata.
- **Titoli delle schede.** Con un documento aperto, la scheda del browser inizia con il nome del documento, poi ModelCraft e CadCraft. Un punto compare prima quando non è salvato.
- **Layout.** {{ui:Impostazioni}} › {{ui:Generali}} › Layout raccoglie i layout in un menu a tendina, con una scelta per usare un layout solo per questa app e un pulsante per reimpostare il layout.
- **Lingue.** L'elenco delle lingue nelle Impostazioni segue i file di lingua contenuti nella build. Le lingue diverse dall'inglese sono bozze automatiche.
- **Live e Libreria.** Live TeamWork mostra i cursori e i nomi in tempo reale, e le raccolte della Libreria danno a ogni app una raccolta predefinita.

## Corretti

- {{ui:Riproduci}} diventa {{ui:Pausa}} mentre un'animazione è in riproduzione, e {{key:Space}} riproduce e mette in pausa mentre la linea temporale è aperta.
- Il render fisso ricade su WebGL quando la scheda grafica non riesce ad avviare il path tracer. La vista di render dal vivo può ancora mostrare l'errore; non è stato verificato su una macchina Windows con quel driver.
- Il flusso dei materiali in modalità reale si riconnette dopo che un collegamento si è interrotto per risposte di eccezione del PLC.

## Limiti dichiarati

- Nulla è stato stampato su una stampante reale: né filamento, né resina, né tramite Bambu Connect. I file di resina sono stati riletti solo dai lettori propri di CadCraft.
- Il gemello digitale e il piano di fabbrica sono stati provati solo con simulatori e risposte note, senza un PLC, una linea o un protocollo reali. Sono strumenti di controllo, non una validazione di sicurezza. La fisica copre solo scatole, fino a otto carichi.
- Il collegamento con Rhino e Grasshopper non è mai stato eseguito nei programmi reali.
- Le lingue diverse dall'inglese sono bozze automatiche.

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. La finestra {{ui:Render di un'immagine…}} può ora inviare la scena a un altro programma, il pannello Superfici crea superfici lisce a forma libera, e un assistente collegato può impostare un'intera scena con una sola frase.

### Novità

**Rendering**

- **Una scelta di motore.** La finestra {{ui:Render di un'immagine…}} ha un elenco **Motore** sopra Modalità. I nostri due motori, Veloce e il Path tracer, sono quelli predefiniti e funzionano ovunque. Le altre voci salvano la scena come pacchetto (il modello come file USD, più un file di impostazioni con i valori esatti dei materiali, le lampade accese, il sole, il cielo, l'esposizione e la camera) da portare in un altro programma. Un'immagine disegnata da un altro programma indica quale programma e quale versione l'hanno prodotta. Vedi [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Apri in un altro programma.** L'elenco Motore può salvare la scena come file USD, file glTF (`.glb`) o cartella di progetto Unreal (`.zip`), nel browser e in CadCraft Studio. In Studio può anche avviare usdview o il programma del computer per il file. Vedi [Aprire la scena in un altro programma](topic:render-open-in).
- **Invio a un motore di gioco da Studio.** Studio scrive la scena in un progetto di Unreal Engine e la mantiene allineata a ogni invio, in una sola direzione. Le proprie modifiche vivono in un livello che CadCraft non scrive mai. Vedi [Inviare la scena a un motore di gioco](topic:render-unreal).
- **Motori da add-on.** Un add-on può aggiungere un motore all'elenco. Uno scritto in JavaScript disegna nel browser e in Studio; uno che esegue un programma richiede l'approvazione in Studio. Vedi [Disegnare l'immagine con un altro programma](topic:render-other-program) e [Aggiungere un motore di render con un add-on](topic:render-engine-addons).
- **Descrivi la scena.** Dire al proprio assistente collegato "crepuscolo, pioggia leggera, alberi d'autunno, persone sulla piazza" e ModelCraft la imposta in un solo passo: il sole si sposta alla data e all'ora perché le ombre lo seguano, il cielo cambia, compaiono superfici bagnate, e alberi e persone vengono collocati come oggetti reali su tag che si possono nascondere, spostare o eliminare. Ora del giorno, data o stagione, e meteo (sereno, coperto, nebbia, pioggia leggera, pioggia, temporale) funzionano anche da soli, e una richiesta successiva modifica la stessa scena. La nebbia compare nell'immagine ad alta qualità sulla scheda grafica; gli altri motori mostrano il cielo, la luce e le superfici bagnate. La pioggia non viene disegnata come strisce che cadono.

**Materiali**

- **Un materiale da una sola foto.** Dare a ModelCraft una foto di una superficie (un muro, un pavimento, la pietra) e ne crea un materiale piastrellabile: l'illuminazione attraverso la foto viene appiattita, i bordi vengono fatti combaciare e una mappa colore, una mappa di rugosità e una mappa delle normali vengono ricavate dall'immagine. È semplice elaborazione d'immagine sulla propria foto, senza alcun modello addestrato. La rugosità è una stima. Una foto piana, quadrata e frontale dà la piastrella migliore; un motivo forte come i mattoni può mostrare un fantasma sfumato dove il giunto viene fuso.

**Superfici**

- **Superfici a forma libera.** Il pannello {{ui:Superfici}} crea curve e superfici NURBS senza ritaglio: curve che passano per punti, loft, rigate, estrusione, rivoluzione, sweep lungo una o due guide, superfici da una rete di curve, patch da quattro spigoli, raccordo e fusione. Ogni spigolo condiviso viene misurato come G0, G1 o G2 (distacco, angolo, salto di curvatura) sulle superfici esatte, e uno spigolo peggiore di quanto richiesto compare nel pannello Problemi con una correzione **Allinea**. Le strisce zebra e i colori di curvatura vengono disegnati dalle superfici esatte. I file STEP e IGES escono ed entrano. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).

**Sito e stanze**

- **Uno schizzo fotografato sul terreno.** {{ui:File}} › {{ui:Importa la foto di uno schizzo…}} trasforma la foto di un telefono di uno schizzo a mano in spigoli sul terreno alla scala indicata: un gruppo, con un tag per ogni colore di penna. Il foglio viene trovato e raddrizzato sul proprio computer, e nulla viene inviato da nessuna parte. Vedi [Modellare su una planimetria](topic:site-plan).
- **Arreda una stanza.** Selezionare un pavimento e usare {{ui:Organizza}} › {{ui:Arreda un locale…}}. Mobili da camera da letto, soggiorno, sala da pranzo, cucina, bagno o ufficio vengono collocati secondo regole, contro i muri e lontano da porte e finestre, in un unico gruppo che si può eliminare in un solo passo. È una disposizione predefinita da rivedere, non un progetto. Vedi [Libreria iniziale](topic:starter).

**Stampa 3D**

- **Tagli inclinati.** Dividi per la stampa può inclinare i suoi tagli fino a 60 gradi, il che dà ai pezzi più superficie per l'incollaggio. I connettori restano perpendicolari al taglio. Vedi [Dividere un modello per la stampa](topic:print-split).
- **Il controllo di stampa in Problemi.** I risultati del controllo di stampa 3D compaiono nel pannello Problemi con marcatori sul modello, e Ripara li corregge da lì. Vedi [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools).

**In ogni app**

- **Lingue.** Guida e app sono in 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeko. Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha riviste, e gli argomenti della guida possono essere ancora in inglese.
- **Dispositivi di input.** Un trackpad, una penna, un mouse 3D, un controller di gioco e i controlli MIDI possono pilotare le app, per tutte o per una sola.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › Righe della barra degli strumenti imposta A capo (come prima), 2 righe o 1 riga. Una barra che non entra scorre di lato invece di togliere spazio al disegno. A capo resta l'impostazione predefinita.
- **Griglia delle proprietà.** I campi delle lampade di ModelCraft usano la griglia condivisa: categorie comprimibili, colonne di etichetta e valore, e densità Compatta. Il calcolo digitato come `2*450` continua a funzionare.
- **Problemi.** Il pannello Problemi (il pulsante di avviso nella barra dell'app) è condiviso da tutte le app. In ModelCraft contiene il controllo di stampa e gli avvisi di continuità delle superfici.
- **Live.** Una sessione Live TeamWork mostra chi si trova dove. Vedi [Modellare insieme con Live TeamWork](topic:work-live).
- **Add-on.** Gli add-on possono aggiungere motori di render, come sopra.
- **Collegare un'IA.** Il contratto degli strumenti e i controlli delle otto app superano, con 454 strumenti in tutto. Il collegamento con un clic dentro Studio, un connettore ospitato per gli assistenti nel browser, la propria chiave dentro Studio e un pacchetto pubblicato non sono ancora promessi. Le app non contengono alcuna IA propria. Vedi [Usare ModelCraft con un assistente IA](topic:use-with-ai-assistants).

### Corretti nella 0.8.1

- **Sezione delle classi DWG.** La sezione delle classi di un file DWG veniva letta come il tipo sbagliato, il che poteva rompere il file in importazione. Ora viene letta correttamente, in ModelCraft e nelle altre app che leggono DWG.
- **Tablet in verticale.** Lo spazio della griglia in più va alla tela, e la disposizione del foglio inizia a 760 pixel di larghezza o meno. Anche il foglio di stile di ModelCraft ha la modifica.
- **Lingua in Studio.** CadCraft Studio e le edizioni impacchettate possono cambiare lingua mentre sono in esecuzione; prima erano solo in inglese. Non è ancora stato provato su tutte le piattaforme: segnalare se la lingua non cambia.

### Non ancora in questa versione

- **Non firmato digitalmente.** Windows può mostrare SmartScreen: scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su un Mac, fare clic destro e scegliere {{ui:Apri}}. Le build per gli store sono in sospeso, e la build per iPad e iPhone non è stata ricostruita per la 0.8.1.
- Un altro programma che disegna l'immagine senza un add-on motore di render, i panorami o le camere stereo, un'immagine del cielo attraverso un altro programma e il plug-in che apre la scena Unreal non ci sono ancora. I file vengono scritti; il plug-in non è stato rilasciato e non è stato eseguito in Unreal.
- Superfici a forma libera: G3 e classe A non sono misurate né garantite; ritagli e solidi arriveranno dopo.
- Le immagini di altri programmi non sono pixel per pixel come le nostre: coincidono solo camera, sole, lampade ed esposizione.
- La correzione 0.8.1 per il cambio lingua in Studio non è stata provata su tutte le piattaforme.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità nella 0.7](topic:whats-new-0-7).
