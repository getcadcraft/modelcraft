---
title: Novità in 0.8 e 0.8.1
summary: Una scelta del motore di rendering con file per altri programmi, superfici NURBS a forma libera con continuità misurata, una scena descritta al proprio assistente, un materiale ricavato da una foto, una foto di schizzo sul terreno, locali arredati, tagli inclinati per la stampa 3D e il controllo di stampa nel pannello Problemi.
keywords: novità, cosa c'è di nuovo, note di rilascio, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, motore di rendering, motore, apri in, usd, gltf, unreal, motore add-on, nurbs, superfici, loft, sweep, continuità, g0, g1, g2, zebra, step, iges, descrivi la scena, scena, meteo, ora del giorno, stagione, assistente, materiale da una foto, foto, foto di schizzo, arredare, arreda un locale, taglio inclinato, dividi, controllo di stampa, problemi, griglia proprietà, lampade, lingue, dispositivi di input, righe della barra degli strumenti, dwg, live
from: e4989b17
---

Ecco le modifiche introdotte in ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. La finestra di dialogo {{ui:Render di un'immagine…}} può ora inviare la scena a un altro programma, il pannello {{ui:Superfici}} crea superfici lisce a forma libera e un assistente collegato può impostare un'intera scena con una sola frase.

## Novità

### Rendering

- **Una scelta del motore.** La finestra di dialogo {{ui:Render di un'immagine…}} ha un elenco **Motore** sopra **Modalità**. I nostri due motori, Veloce e il Path tracer, sono quelli predefiniti e funzionano ovunque. Le altre voci salvano la scena come pacchetto (il modello come file USD, più un file delle impostazioni con i valori esatti dei materiali, le lampade accese, il sole, il cielo, l'esposizione e la camera) da portare in un altro programma. Un'immagine disegnata da un altro programma indica quale programma e quale versione l'hanno creata. Vedi [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Apri in un altro programma.** L'elenco Motore può salvare la scena come file USD, file glTF (`.glb`) o cartella di progetto Unreal (`.zip`), nel browser e in CadCraft Studio. In Studio può anche avviare usdview o il programma predefinito del computer per il file. Vedi [Aprire la scena in un altro programma](topic:render-open-in).
- **Invia a un motore di gioco da Studio.** Studio scrive la scena in un progetto di Unreal Engine e la mantiene allineata a ogni invio, in un solo senso. Le modifiche proprie risiedono in un layer che CadCraft non scrive mai. Vedi [Inviare la scena a un motore di gioco](topic:render-unreal).
- **Motori dagli add-on.** Un add-on può aggiungere un motore all'elenco. Quello scritto in JavaScript disegna nel browser e in Studio; quello che esegue un programma richiede la tua approvazione in Studio. Vedi [Disegnare l'immagine con un altro programma](topic:render-other-program) e [Aggiungere un motore di rendering con un add-on](topic:render-engine-addons).
- **Descrivere la scena.** Scrivere al proprio assistente collegato "crepuscolo, pioggia leggera, alberi d'autunno, persone sulla piazza" e ModelCraft imposta tutto in un solo passaggio: il sole si sposta alla data e all'ora così che le ombre seguano, il cielo cambia, compaiono superfici bagnate e alberi e persone vengono posati come oggetti reali su tag che si possono nascondere, spostare o eliminare. Anche l'ora del giorno, la data o la stagione e il meteo (sereno, coperto, nebbia, pioggia leggera, pioggia, temporale) funzionano da soli, e una richiesta successiva modifica la stessa scena. La nebbia si vede nell'immagine di alta qualità sulla scheda grafica; gli altri motori mostrano cielo, luce e superfici bagnate. La pioggia non viene disegnata come strisce che cadono.

### Materiali

- **Un materiale da una foto.** Fornire a ModelCraft una foto di una superficie (una parete, un pavimento, la pietra) e questo crea un materiale ripetibile: l'illuminazione sulla foto viene appiattita, i bordi vengono resi continui e una mappa colore, una mappa di rugosità e una mappa delle normali vengono ricavate dall'immagine. È una semplice elaborazione dell'immagine sulla propria foto, senza alcun modello addestrato. La rugosità è una stima. Una foto piana, quadrata e frontale dà la piastrella migliore; un motivo forte, come i mattoni, può mostrare un fantasma sfumato dove il giunto viene fuso.

### Superfici

- **Superfici a forma libera.** Il pannello {{ui:Superfici}} crea curve NURBS e superfici non ritagliate: curve passanti per punti, loft, superfici rigate, estrusione, rivoluzione, sweep lungo una o due guide, superfici da una rete di curve, patch da quattro spigoli, allineamento e fusione. Ogni spigolo condiviso viene misurato come G0, G1 o G2 (distacco, angolo, salto di curvatura) sulle superfici esatte, e uno spigolo peggiore di quanto richiesto compare nel pannello Problemi con una correzione **Allinea**. Le strisce zebra e i colori di curvatura sono disegnati dalle superfici esatte. I file STEP e IGES si esportano e si importano. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).

### Area e locali

- **Una foto di schizzo sul terreno.** {{ui:File}} › {{ui:Importa la foto di uno schizzo…}} trasforma una foto da telefono di uno schizzo a mano in spigoli sul terreno, alla scala che si indica: un gruppo, con un tag per ogni colore di penna. Il foglio viene individuato e raddrizzato sul computer e nulla viene inviato altrove. Vedi [Modellare su una planimetria](topic:site-plan).
- **Arredare un locale.** Selezionare un pavimento e usare {{ui:Organizza}} › {{ui:Arreda un locale…}}. L'arredo per camera da letto, soggiorno, sala da pranzo, cucina, bagno o ufficio viene posizionato secondo regole, contro le pareti e lontano da porte e finestre, in un unico gruppo da rimuovere in un solo passaggio. È una disposizione predefinita da rivedere, non un progetto. Vedi [Libreria iniziale](topic:starter).

### Stampa 3D

- **Tagli inclinati.** {{ui:Dividi per la stampa}} può inclinare i tagli fino a 60 gradi, il che dà ai pezzi più superficie di incollaggio. I connettori restano perpendicolari al taglio. Vedi [Dividere un modello per la stampa](topic:print-split).
- **Il controllo di stampa in Problemi.** I risultati del controllo di stampa 3D compaiono nel pannello Problemi con i marcatori sul modello, e {{ui:Ripara}} li corregge da lì. Vedi [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools).

### In ogni app

- **Lingue.** La guida e le app sono disponibili in 54 lingue. Dieci sono nuove: lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili e uzbeko. Le lingue diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha riviste, e alcuni argomenti della guida potrebbero restare in inglese.
- **Dispositivi di input.** Un trackpad, una penna, un mouse 3D, un controller di gioco e i controlli MIDI possono comandare le app, per tutte o per una sola.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › Righe della barra degli strumenti imposta A capo (come prima), 2 righe o 1 riga. Una barra che non entra scorre di lato invece di togliere spazio al disegno. A capo resta l'impostazione predefinita.
- **Griglia delle proprietà.** I campi delle lampade di ModelCraft usano la griglia comune: categorie comprimibili, colonne di etichetta e valore, e densità Compatta. I calcoli digitati, come `2*450`, continuano a funzionare.
- **Problemi.** Il pannello Problemi (il pulsante di avviso nella barra dell'app) è comune a tutte le app. In ModelCraft contiene il controllo di stampa e gli avvisi di continuità delle superfici.
- **Live.** Una sessione Live TeamWork mostra chi si trova dove. Vedi [Modellare insieme con Live TeamWork](topic:work-live).
- **Add-on.** Gli add-on possono aggiungere motori di rendering, come sopra.
- **Collegare la propria AI.** Il contratto degli strumenti e i controlli delle otto app superano le verifiche, per un totale di 454 strumenti. Non sono ancora garantiti: il collegamento con un clic in Studio, un connettore ospitato per gli assistenti nel browser, una chiave propria in Studio e un pacchetto pubblicato. Le app non contengono alcuna AI propria. Vedi [Usare ModelCraft con gli assistenti AI](topic:use-with-ai-assistants).

## Corretto in 0.8.1

- **Sezione delle classi DWG.** La sezione delle classi di un file DWG veniva letta come tipo sbagliato, il che poteva rovinare il file all'importazione. Ora viene letta correttamente, in ModelCraft e nelle altre app che leggono DWG.
- **Tablet in verticale.** L'altezza in eccesso della griglia va alla tela, e il layout della pagina parte da 760 pixel di larghezza o meno. Anche il foglio di stile di ModelCraft contiene la modifica.
- **Lingua in Studio.** CadCraft Studio e le edizioni pacchettizzate possono cambiare lingua mentre sono in esecuzione; prima erano solo in inglese. Non è ancora stato verificato su tutte le piattaforme: segnalare se la lingua non cambia.

## Non ancora in questa versione

- **Non firmato con codice.** Windows potrebbe mostrare SmartScreen: scegliere {{ui:Altre informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, fare clic con il tasto destro e scegliere {{ui:Apri}}. Le versioni per lo Store sono in attesa, e la build per iPad e iPhone non è stata ricompilata per la 0.8.1.
- Un altro programma che disegna l'immagine senza un add-on motore di rendering, fotocamere panoramiche o stereo, un'immagine del cielo tramite un altro programma e il plugin che apre la scena Unreal non ci sono ancora. I file vengono scritti; il plugin non è stato rilasciato e non è stato eseguito in Unreal.
- Superfici a forma libera: G3 e classe A non vengono misurate né dichiarate, e ritaglio e solidi arriveranno più avanti.
- Le immagini degli altri programmi non sono identiche pixel per pixel alle nostre: corrispondono solo camera, sole, lampade ed esposizione.
- La correzione 0.8.1 del cambio lingua in Studio non è verificata su ogni piattaforma.

Tutto il resto è in [Non ancora implementato](topic:not-built-yet). Per la versione precedente, vedi [Novità in 0.7](topic:whats-new-0-7).
