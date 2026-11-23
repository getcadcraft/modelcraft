---
title: Novità nella 0.9 (precedenti)
summary: Fase di stampa con slicer proprio e invio via USB, Klipper, OctoPrint e PrusaLink, slicing per resina e add-on di formato file, add-on di flusso dei materiali, gemello digitale e reparto di produzione, raccordi NURBS, ispessimento e adattamento alla scansione, AR in cantiere e dieci metodi per archi.
keywords: novità 0.9, versione precedente, novità, what's new, note di rilascio, changelog, 0.9, fase di stampa, stampa 3d, invia alla stampante 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, stampa a resina, goo, sl1, ctb, anycubic, test di esposizione, flusso dei materiali, gemello digitale, reparto di produzione, plc, nastro trasportatore, nurbs, raccordo, ispessisci, adattamento alla scansione, ar, in cantiere, metodi arco, unità, modifiche, 0.8, 0.8.1, versione, nuove funzioni, motore di render, motore, apri in, usd, gltf, unreal, motore da add-on, superfici, loft, sweep, continuità, g0, g1, g2, zebra, step, iges, descrivi la scena, scena, meteo, ora del giorno, stagione, assistente, materiale da una foto, foto, foto di schizzo, arredare, arreda un locale, inclina, taglio inclinato, dividi, controllo di stampa, problemi, griglia delle proprietà, lampade, lingue, dispositivi di input, righe della barra degli strumenti, dwg, live
from: 2717d1b1
---

Ecco cosa è cambiato in ModelCraft 0.9, rispetto alla 0.8.1. ModelCraft ora arriva fino alla stampante e al reparto di produzione: è possibile posizionare oggetti sul piano di stampa e inviarli senza esportarli, eseguire lo slicing per filamento o resina, e disporre una linea di movimentazione dei materiali. Questa è CadCraft Studio 0.9 e le sue otto app; la maggior parte delle nuove funzioni qui sotto sono add-on.

## Nuovo

### Stampa 3D

- **Fase di stampa.** Fare clic su {{ui:Fase di stampa}} nella barra degli strumenti. Aggiungere elementi della libreria al piano della stampante, disporli, controllare i layer sezionati e premere {{ui:Invia alla stampante 3D}}, senza esportare alcun STL. Fa parte dell'add-on Stampa 3D, attivo per impostazione predefinita, che si può rimuovere come qualsiasi altro add-on. Vedere [Posiziona oggetti sul piano di stampa e inviali a una stampante](topic:print-stage).
- **Slicer di filamento proprio.** {{ui:CadCraft basic (incluso, il più veloce)}} è lo slicer nell'elenco **Slicer** della scheda: pareti, rivestimenti, riempimento, supporti e bordo di innesco, su un worker così la pagina resta utilizzabile. {{ui:Anteprima layer}} con il cursore **Layer** mostra i layer prima dell'invio. I profili di stampante, come gli stili Ender-3 e Prusa MK4, includono il proprio G-code di avvio.
- **Invio.** Tramite USB (Chrome o Edge sul computer, con la pagina aperta), oppure a Klipper (Moonraker), OctoPrint o PrusaLink sulla rete. Nulla si collega né invia senza un clic, e l'invio chiede conferma prima.
- **Altri slicer.** Kiri:Moto, PrusaSlicer e OrcaSlicer sono add-on a sé stanti, disattivati per impostazione predefinita; aggiungerli dalla scheda o da {{ui:Impostazioni}} › {{ui:Add-on}}. PrusaSlicer e OrcaSlicer usano la copia installata sul proprio computer da CadCraft Studio. L'add-on per le stampanti Bambu Lab esegue lo slicing con il proprio OrcaSlicer e i suoi preset P2S e richiede Studio su un computer.
- **Stampa a resina.** Gli add-on per la resina (disattivati per impostazione predefinita) creano immagini di layer per lo schermo della stampante, con svuotamento e fori di sfiato, zattera e supporti, anteprima dei layer, e tempo, resina e costo. Gli add-on di formato scrivono Elegoo GOO, SL1, Chitubox (CBDDLP e CTB da 2 a 5) e Anycubic (PWMX e PWS). Un test di esposizione alla resina produce una scala di cinque esposizioni. Vedere [Slicing per una stampante a resina](topic:resin-printing).
- **Invariato.** {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}}, gli strumenti di stampa e Dividi per la stampa funzionano come nella 0.8. Vedere [Preparare un modello per la stampa 3D](topic:print-3d).

### Flusso dei materiali, Gemello digitale e Reparto di produzione

Questi tre sono add-on, disattivati finché non vengono attivati in {{ui:Impostazioni}} › {{ui:Add-on}}, e ciascuno ha una propria guida una volta attivato.

- **Flusso dei materiali.** Un pannello chiamato Flusso dei materiali dispone nella vista 3D nastri trasportatori, stazioni, buffer e percorsi AGV, esegue una simulazione con seme fisso, la riproduce e mostra la produttività, i tempi di consegna e le code, con i risultati salvati come CSV. Gli ordini possono provenire da un file CSV. Le celle robotiche possono essere verificate ed esportate. Il collegamento PLC ha una modalità soft e una modalità reale su Modbus TCP, che funziona solo in CadCraft Studio.
- **Gemello digitale.** Legge il layout del Flusso dei materiali ed esegue un PLC soft su di esso, con guasti che si possono forzare, test sulle scorte, un confronto dei layout e una distinta base.
- **Reparto di produzione.** Trasforma le stazioni in macchine e celle, le legge in tempo reale o da un simulatore, e gestisce una coda di lavori e un semplice OEE. Legge soltanto: questa versione non può scrivere su una macchina o un PLC.

### Superfici, modelli e disegno

- **Raccordi, ispessimento e booleane su NURBS.** Il pannello {{ui:Superfici}} ha {{ui:Raccordo tra facce}}, {{ui:Raccordo di più spigoli}}, {{ui:Dai spessore e crea un solido}} e Unione, Sottrazione e Intersezione, ciascuna con il proprio scostamento misurato. Vedere [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **Adattare le superfici a una scansione.** Selezionare una mesh scansionata e usare {{ui:Adatta superfici alla scansione}} nel gruppo **Scansione**, poi {{ui:Cuci le superfici in un solido}}. È un primo adattamento, non un pacchetto completo di reverse engineering.
- **Un collegamento live da un modellatore .3dm.** A senso unico, da Rhino 8 o Grasshopper, e richiede CadCraft Studio sullo stesso computer. Vedere [Mantenere un modello .3dm in live](topic:live-3dm-link).
- **Vedere il modello in cantiere.** {{ui:Vista sul cantiere (AR, telefono)}} nel menu {{ui:Viste}} funziona su un telefono Android con Chrome. Vedere [Vedere il modello in cantiere con un telefono Android (AR)](topic:ar-on-site).
- **Metodi arco.** Il menu a discesa {{ui:Metodi arco}} offre dieci modi per disegnare un arco, tra cui {{ui:3 punti}} e {{ui:Inizio, Centro, Fine}}.
- **Altre unità.** Pesi (kg, lb, t, ton) e temperature (gradi C, F, K e R) sono riconosciuti dove si digitano valori con unità.

## In ogni app

- **Tooltip.** Il testo che appare al passaggio del mouse sui pulsanti e sulle etichette troncate è un tooltip Bootstrap.
- **Suggerimento iniziale chiudibile.** La scheda dei suggerimenti sull'area di disegno vuota ha una piccola x di chiusura. Resta chiusa, e la palette dei comandi può mostrarla di nuovo.
- **Barre delle schede a scorrimento.** La barra delle schede di un pannello che non entra scorre invece di essere tagliata.
- **Titoli delle schede.** Con un documento aperto, la scheda del browser inizia con il nome del documento, poi ModelCraft e CadCraft. Un punto compare per primo finché ci sono modifiche non salvate.
- **Layout.** {{ui:Impostazioni}} › {{ui:Generali}} › Layout contiene i layout in un menu a discesa, con una scelta per usare un layout solo per questa app e un pulsante per reimpostare il layout.
- **Lingue.** L'elenco delle lingue nelle Impostazioni segue i file di lingua contenuti nella build. Le lingue diverse dall'inglese sono bozze automatiche.
- **Live e Libreria.** Live TeamWork mostra i cursori e i nomi in tempo reale, e le raccolte della Libreria assegnano a ogni app una raccolta predefinita.

## Corretti

- {{ui:Riproduci}} diventa {{ui:Pausa}} durante la riproduzione di un'animazione, e {{key:Space}} riproduce e mette in pausa mentre la timeline è aperta.
- Il render fisso ripiega su WebGL quando la scheda grafica non può avviare il path tracer. La vista render live può ancora mostrare l'errore; non è stato verificato su una macchina Windows con quel driver.
- La modalità reale di Flusso dei materiali si ricollega dopo che un collegamento è terminato per risposte di eccezione del PLC.

## Limiti dichiarati

- Nulla è stato stampato su una stampante reale: né in filamento, né in resina, né tramite Bambu Connect. I file di resina sono stati riletti solo dai lettori di CadCraft.
- Il gemello digitale e il Reparto di produzione sono stati testati solo con simulatori e risposte note, senza PLC, linea o protocollo reali. Sono strumenti di verifica, non una validazione di sicurezza. La fisica copre solo scatole, fino a otto carichi.
- Il collegamento con Rhino e Grasshopper non è mai stato eseguito nei programmi reali.
- Le lingue diverse dall'inglese sono bozze automatiche.

## Precedenti: 0.8 e 0.8.1

Ecco cosa è cambiato in ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. La finestra {{ui:Render di un'immagine…}} può ora inviare la scena a un altro programma, il pannello Superfici crea superfici a forma libera lisce, e un assistente collegato può impostare un'intera scena con una sola frase.

### Nuovo

**Rendering**

- **Una scelta di motore.** {{ui:Render di un'immagine…}} ha un elenco **Motore** sopra Modalità. I nostri due motori, Veloce e il Path tracer, sono quelli predefiniti e funzionano ovunque. Le altre voci salvano la scena come pacchetto (il modello come file USD, più un file di impostazioni con i valori esatti dei materiali, le lampade accese, il sole, il cielo, l'esposizione e la telecamera) da portare in un altro programma. Un'immagine disegnata da un altro programma indica quale programma e quale versione l'hanno creata. Vedere [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Apri in un altro programma.** L'elenco Motore può salvare la scena come file USD, file glTF (`.glb`) o cartella di progetto Unreal (`.zip`), nel browser e in CadCraft Studio. In Studio può anche avviare usdview o il programma predefinito del computer per il file. Vedere [Aprire la scena in un altro programma](topic:render-open-in).
- **Invio a un motore di gioco da Studio.** Studio scrive la scena in un progetto Unreal Engine e la mantiene allineata a ogni invio, solo in una direzione. Le proprie modifiche si trovano in un layer che CadCraft non scrive mai. Vedere [Inviare la scena a un motore di gioco](topic:render-unreal).
- **Motori dagli add-on.** Un add-on può aggiungere un motore all'elenco. Uno scritto in JavaScript disegna nel browser e in Studio; uno che esegue un programma richiede una conferma in Studio. Vedere [Disegnare l'immagine con un altro programma](topic:render-other-program) e [Aggiungere un motore di render con un add-on](topic:render-engine-addons).
- **Descrivere la scena.** Dire all'assistente collegato "crepuscolo, pioggia leggera, alberi autunnali, persone sulla piazza" e ModelCraft la imposta in un unico passaggio: il sole si sposta alla data e all'ora così le ombre seguono, il cielo cambia, compaiono superfici bagnate, e alberi e persone vengono collocati come oggetti reali su tag che si possono nascondere, spostare o eliminare. Ora del giorno, data o stagione, e meteo (sereno, nuvoloso, nebbia, pioggia leggera, pioggia, temporale) funzionano anche da soli, e una richiesta successiva modifica la stessa scena. La nebbia appare nell'immagine di alta qualità sulla scheda grafica; gli altri motori mostrano il cielo, la luce e le superfici bagnate. La pioggia non viene disegnata come striature cadenti.

**Materiali**

- **Un materiale da una foto.** Fornire a ModelCraft una foto di una superficie (un muro, un pavimento, una pietra) e crea un materiale ripetibile (tile): l'illuminazione sulla foto viene appiattita, i bordi vengono fatti combaciare, e una mappa colore, una mappa di rugosità e una mappa normale vengono ricavate dall'immagine. È una semplice elaborazione di immagini sulla propria foto, senza un modello addestrato. La rugosità è una stima. Una foto semplice, quadrata e frontale dà il tile migliore; un motivo forte come i mattoni può mostrare un'ombra sfumata dove il giunto viene fuso.

**Superfici**

- **Superfici a forma libera.** Il pannello {{ui:Superfici}} crea curve NURBS e superfici non rifilate: curve attraverso punti, loft, rigate, estrusione, rivoluzione, sweep lungo una o due guide, superfici da una rete di curve, patch da quattro spigoli, corrispondenza e fusione. Ogni spigolo condiviso viene misurato come G0, G1 o G2 (distacco, angolo, salto di curvatura) sulle superfici esatte, e uno spigolo peggiore di quanto richiesto compare nel pannello Problemi con una correzione **Corrispondenza**. Le strisce zebra e i colori di curvatura vengono disegnati dalle superfici esatte. I file STEP e IGES vengono esportati e importati. Vedere [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).

**Sito e locali**

- **Una foto di schizzo a terra.** {{ui:File}} › {{ui:Importa la foto di uno schizzo…}} trasforma una foto da telefono di uno schizzo a mano in spigoli a terra alla scala indicata: un gruppo, con un tag per ogni colore di penna. Il foglio viene individuato e raddrizzato sul computer, e nulla viene inviato altrove. Vedere [Modellare su una planimetria](topic:site-plan).
- **Arredare un locale.** Selezionare un piano e usare {{ui:Organizza}} › {{ui:Arreda un locale…}}. Mobili da camera da letto, soggiorno, sala da pranzo, cucina, bagno o ufficio vengono collocati secondo regole, contro le pareti e lontano da porte e finestre, in un unico gruppo che si può rimuovere con un solo passaggio. È una disposizione predefinita da verificare, non un progetto. Vedere [Libreria di partenza](topic:starter).

**Stampa 3D**

- **Tagli inclinati.** Dividi per la stampa può inclinare i tagli fino a 60 gradi, il che dà ai pezzi più superficie di incollaggio. I connettori sono perpendicolari al taglio. Vedere [Dividere un modello per la stampa](topic:print-split).
- **Il controllo di stampa nei Problemi.** I risultati del controllo di stampa 3D compaiono nel pannello Problemi con indicatori sul modello, e Ripara li corregge da lì. Vedere [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools).

**In ogni app**

- **Lingue.** Guida e app sono disponibili in 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeco. Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha riviste, e gli argomenti della guida possono essere ancora in inglese.
- **Dispositivi di input.** Un trackpad, una penna, un mouse 3D, un controller di gioco e i controlli MIDI possono comandare le app, per tutte o per una sola.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › Righe della barra degli strumenti imposta A capo (come prima), 2 righe o 1 riga. Una barra che non entra scorre di lato invece di sottrarre spazio al disegno. A capo resta l'impostazione predefinita.
- **Griglia delle proprietà.** I campi delle lampade di ModelCraft usano la griglia condivisa: categorie comprimibili, colonne di etichetta e valore, e densità Compatta. Il calcolo digitato, come `2*450`, continua a funzionare.
- **Problemi.** Il pannello Problemi (il pulsante di avviso nella barra delle app) è condiviso da tutte le app. In ModelCraft contiene il controllo di stampa e gli avvisi di continuità delle superfici.
- **Live.** Una sessione Live TeamWork mostra chi si trova dove. Vedere [Modellare insieme con Live TeamWork](topic:work-live).
- **Add-on.** Gli add-on possono aggiungere motori di render, come sopra.
- **Collegare l'IA.** Il contratto degli strumenti e i controlli delle otto app sono superati, con 454 strumenti in tutto. Il collegamento con un clic in Studio, un connettore ospitato per gli assistenti nel browser, una propria chiave in Studio e un pacchetto pubblicato non sono ancora previsti. Le app non contengono un'IA propria. Vedere [Usare ModelCraft con gli assistenti IA](topic:use-with-ai-assistants).

### Corretti nella 0.8.1

- **Sezione classi DWG.** La sezione delle classi di un file DWG veniva letta come tipo sbagliato, il che poteva rompere il file in importazione. Ora viene letta correttamente, in ModelCraft e nelle altre app che leggono DWG.
- **Tablet in verticale.** L'altezza della griglia residua va all'area di disegno, e il layout della tavola si attiva con una larghezza di 760 pixel o meno. Anche il foglio di stile di ModelCraft contiene la modifica.
- **Lingua in Studio.** CadCraft Studio e le edizioni impacchettate possono cambiare lingua durante l'esecuzione; prima erano solo in inglese. Non è ancora stato verificato su tutte le piattaforme: segnalarci se la lingua non cambia.

### Non ancora in questa versione

- **Non firmato digitalmente.** Windows può mostrare SmartScreen: scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, fare clic destro e scegliere {{ui:Apri}}. Le build per gli store sono sospese, e la build per iPad e iPhone non è stata ricompilata per la 0.8.1.
- Un altro programma che disegna l'immagine senza un add-on di motore di render, telecamere panoramiche o stereo e un'immagine del cielo tramite un altro programma, e il plug-in che apre la scena Unreal non sono ancora disponibili. I file vengono scritti; il plug-in non è rilasciato e non è stato eseguito in Unreal.
- Superfici a forma libera: G3 e classe A non sono misurate né dichiarate, e rifilatura e solidi arriveranno più avanti.
- Le immagini di altri programmi non sono identiche pixel per pixel alle nostre: corrispondono solo la telecamera, il sole, le lampade e l'esposizione.
- La correzione della 0.8.1 per il cambio lingua in Studio non è stata verificata su tutte le piattaforme.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedere [Novità nella 0.7](topic:whats-new-0-7).
