---
title: Render di un'immagine del modello
summary: Crea un'immagine che sembra alla luce del giorno: cielo, sole nella posizione e nella data del modello, ombre morbide, aspetti di vetro e metallo, poi salvarla come PNG.
keywords: render, preimpostazione, preset, preimpostazioni di scena, interno, esterno, vista in sezione, notte, un clic, rendering, path tracing, path traced, ray tracing, illuminazione globale, riflessi, rifrazione, alta qualità, foto, fotorealistico, realistico, immagine, png, fermo immagine, cielo, sole, luce diurna, ombre, ombre morbide, occlusione ambientale, vetro, metallo, lucido, materiali, esposizione, luminosità, nuvoloso, crepuscolo, studio, presentazione, nebbia, foschia, bruma, fumo, nuvola, volume, raggi di luce, god rays, caustiche, campionamento adattivo, rumore
from: 517ba4d3
---

{{ui:Render di un'immagine…}} crea un'immagine della vista che sembra alla luce del giorno e non un disegno: un cielo, il sole nella posizione e nella data del modello, ombre morbide, una luce proveniente da tutto il cielo che scurisce angoli e fessure, e colori che possono sembrare vetro, metallo o vernice lucida. Il modello non viene modificato.

## Render della vista

1. Impostare la vista come si vuole che appaia nell'immagine: ruotare, zoomare, scegliere una [scena](topic:scenes), nascondere ciò che non deve comparire. L'immagine usa la camera della vista.
2. Fare clic su {{ui:Esporta}} nel gruppo {{ui:File}}, poi su {{ui:Render di un'immagine…}}.
3. Scegliere una {{ui:Scena}} se quella premuta non è quella desiderata (vedi [Preimpostazioni di scena](topic:render#scene-presets-a-good-picture-in-one-click)), scegliere la {{ui:Dimensione}}, poi fare clic su {{ui:Render}}.

   L'immagine si completa mentre viene renderizzata e migliora a ogni passaggio. {{ui:Stop}} (oppure {{key:Esc}}) la termina in anticipo e conserva l'immagine ottenuta fino a quel momento.

4. Fare clic su {{ui:Salva}} per scaricarla (un PNG, salvo che {{ui:Salva come}} indichi altrimenti).

:::tip
Iniziare con {{ui:Bozza}} alla {{ui:Dimensione della vista}} per controllare la camera e l'aspetto, poi renderizzare con {{ui:Buona}} o {{ui:Migliore}} a una dimensione maggiore per l'immagine finale.
:::

## Preimpostazioni di scena: una buona immagine con un clic

In alto nella finestra ci sono quattro pulsanti {{ui:Scena}}. Ciascuno imposta in un solo clic cielo, luminosità, terreno, linee dei bordi, qualità e sole, così non c'è nulla da imparare prima della prima immagine. Fare clic su uno, poi su {{ui:Render}}.

| Scena | Cosa imposta | Per cosa usarla |
|---|---|---|
| {{ui:Esterno}} | Cielo sereno, il sole del modello, terreno attivo | L'edificio dall'esterno |
| {{ui:Interno}} | Cielo nuvoloso (luce uniforme, senza macchie di sole nette), mezzo stop più luminoso | Una vista dall'interno di una stanza |
| {{ui:Vista in sezione}} | Studio bianco, senza terreno, linee dei bordi nel render veloce | Un modello tagliato da una sezione |
| {{ui:Notte}} | Il sole sotto l'orizzonte (mezzanotte in pieno inverno per l'emisfero del sito), uno stop più luminoso | Lampade che illuminano il modello. Senza lampade l'immagine è buia |

- {{ui:Scegli per questa vista}} sceglie al posto dell'utente: {{ui:Vista in sezione}} quando è attivo un taglio di sezione, {{ui:Interno}} quando la camera è dentro il modello, altrimenti {{ui:Esterno}}. La prima volta che si apre la finestra di dialogo si avvia così da solo.
- Ogni impostazione resta sotto e può essere modificata. Dopo aver modificato un'impostazione che la scena imposta, nessun pulsante risulta premuto e la riga sotto i pulsanti indica che le impostazioni sono personali. Fare di nuovo clic sulla scena per ripristinarne i valori.
- Una scena non modifica il motore, la modalità, la dimensione, i materiali, la camera né le lampade.

:::note
Le scene danno gli stessi valori in ModelCraft e BimCraft. L'aspetto finale dell'immagine dipende dal modello e dalla scheda grafica.
:::

## Impostazioni

| Impostazione | Cosa fa |
|---|---|
| {{ui:Dimensione}} | La dimensione della vista, il doppio della dimensione della vista, Full HD, 4K o quadrata. Le dimensioni fisse mantengono la camera della vista e mostrano più o meno ai lati |
| {{ui:Modalità}} | {{ui:Veloce}}, oppure {{ui:Alta qualità (path tracing)}} (sotto) con il suo {{ui:Limite di tempo}} |
| {{ui:Qualità}} | Quanti passaggi (o, in alta qualità, quanti campioni) vengono mediati: {{ui:Bozza}} 16, {{ui:Buona}} 64, {{ui:Migliore}} 256. Più passaggi danno ombre e bordi più lisci, ma richiedono più tempo |
| {{ui:Azzurro}} | {{ui:Cielo sereno}}, {{ui:Nuvoloso}} (luce morbida, ombre tenui), {{ui:Crepuscolo}} (luce bassa e calda) oppure {{ui:Studio bianco}} (uno sfondo bianco semplice) |
| {{ui:Sole}} | Il sole viene dalla data, dall'ora e dal luogo in {{ui:Stile}} › sole. Selezionare {{ui:Usa un'altra data e ora per questa immagine}} per provare un altro orario senza cambiare lo stile del modello |
| {{ui:Luminosità}} | Più chiaro o più scuro, a passi (stop) |
| {{ui:Terreno sotto il modello}} | Un terreno che riceve le ombre e sfuma nell'orizzonte. Disattivarlo per un modello che galleggia |
| {{ui:Disegna gli spigoli}} | Disegna i bordi del modello in modo sottile sopra l'immagine, per un aspetto da disegno |

Quando all'ora scelta il sole è sotto l'orizzonte è notte: il cielo diventa scuro e le [lampade](topic:lights) del modello lo illuminano. La finestra di dialogo lo indica.

Le impostazioni vengono salvate nel file `.modelcraft`, quindi la prossima immagine dello stesso modello riparte da dove era stata lasciata.

## Rendere i colori come vetro o metallo

In {{ui:Materiali}}, ogni colore visibile ha un aspetto: {{ui:Opaco}}, {{ui:Satinato}}, {{ui:Lucido}}, {{ui:Metallo}}, {{ui:Metallo lucidato}}, {{ui:Vetro}} oppure {{ui:Vetro satinato}}. {{ui:Facce non colorate}} sono le facce che non hanno un colore proprio.

Per rendere vetro le finestre, [colorare](topic:paint) i vetri con un colore, poi impostare quel colore su {{ui:Vetro}}. Il vetro lascia vedere il cielo e ciò che c'è dietro, tinto dal suo colore, e riflette il cielo.

:::note
Nella modalità {{ui:Veloce}}, vetro e metallo riflettono il cielo, non il resto del modello, e la luce non si rifrange attraverso il vetro. La modalità {{ui:Alta qualità (path tracing)}} qui sotto fa entrambe le cose.
:::

## Alta qualità

Scegliere {{ui:Modalità}} › {{ui:Alta qualità (path tracing)}} per un'immagine che segue la luce come la vede una camera:

- la luce rimbalza tra le superfici, quindi una stanza illuminata da una finestra o da una lampada è illuminata tutt'intorno e i colori si riflettono sui vicini;
- il vetro è vero vetro: la luce lo attraversa e riflette il modello;
- metallo e superfici lucidate riflettono il resto del modello;
- i pannelli luminosi illuminano come pannelli, con ombre morbide.

È molto più lenta di {{ui:Veloce}}: ogni passaggio ricalcola la luce di ogni pixel. L'immagine inizia granulosa e si pulisce man mano che i campioni si sommano, quindi conviene iniziare in piccolo ({{ui:Dimensione della vista}}, {{ui:Bozza}}) e scegliere un {{ui:Limite di tempo}}: quando scade, resta l'immagine ottenuta fino a quel momento. Anche {{ui:Stop}} la mantiene. Il primo passaggio attende mentre il browser prepara il path tracer.

Dove il browser supporta WebGPU, il path tracer è quello di CadCraft e gira sulla scheda grafica; la riga sotto l'immagine dice {{ui:Path tracing sulla scheda grafica (WebGPU)}}. Dopo {{ui:Stop}} o allo scadere del tempo, {{ui:Riprendi}} prosegue con la stessa immagine fino a completare tutti i campioni; cambiare un'impostazione o premere di nuovo {{ui:Render}} riparte da zero. Senza WebGPU l'immagine viene calcolata con path tracing in WebGL (la riga lo indica) e {{ui:Riprendi}} non è disponibile.

:::linux
Firefox e la maggior parte delle configurazioni di Chrome su Linux non hanno ancora WebGPU: qui l'alta qualità usa WebGL.
:::

In questa modalità i bordi non vengono disegnati, le trame della libreria mostrano colore e rugosità ma non i rilievi (un [materiale fatto con i nodi](topic:shading#in-high-quality-pictures) mostra la sua normale e i rilievi), e un taglio di sezione viene fatto sul modello prima dell'avvio dell'immagine.

{{ui:Riduci rumore (elimina la grana rimasta dopo i campioni)}} è attivo per impostazione predefinita: quando l'immagine è terminata, o interrotta, la grana residua viene eliminata da una rete neurale pensata per questo (la rete pubblicata da Intel Open Image Denoise, eseguita sul proprio computer: sulla scheda grafica, altrimenti sul processore). Un'immagine con pochi campioni esce pulita; {{ui:Mostra}} › {{ui:L'immagine prima della riduzione del rumore}} la mostra come renderizzata.

## Render nella vista

L'area di lavoro {{ui:Render}} esegue il path tracer nella vista stessa: ruotare, modificare il modello o cambiare una luce e riparte subito. {{ui:Area}}: trascinare un rettangolo e solo quello viene renderizzato; {{ui:Intera vista}} torna indietro. {{ui:Fuoco}}: fare clic su ciò che deve risultare nitido, e la profondità di campo mette a fuoco lì. {{ui:Dettaglio}} imposta quanti pixel della vista vengono renderizzati (meno pixel significa più velocità). {{ui:Pausa}} ferma e riprende. Richiede WebGPU: senza, l'area di lavoro lo dichiara, e {{ui:Esporta}} › {{ui:Render di un'immagine…}} funziona comunque.

## Cieli e profili luce sulla scheda grafica

Con WebGPU, l'alta qualità ha altri due cieli:

- {{ui:Cielo fisico}} calcola la luce del giorno in base all'altezza del sole: un blu intenso in alto, una fascia pallida all'orizzonte e un sole che diventa più caldo e più debole quando è basso. {{ui:Foschia}} va da una giornata molto limpida (2) a una foschiosa (10).
- {{ui:Immagine del cielo (HDRI)}} illumina il modello con un'immagine panoramica di un luogo reale. {{ui:Scegli un'immagine…}} accetta un file `.hdr` o `.exr` equirettangolare; {{ui:Ruota}} lo fa girare attorno al modello e {{ui:Luminosità dell'immagine}} lo rende più chiaro o più scuro. L'immagine ha un proprio sole, quindi il sole del modello non viene aggiunto. Resta in uso solo finché la pagina è aperta: dopo la riapertura, sceglierla di nuovo.

Ogni lampada nell'elenco {{ui:Lampade}} può avere il profilo luce di un produttore: {{ui:Profilo IES…}} legge un file IES (LM-63) e la lampada proietta la luce come fa quell'apparecchio (un faretto stretto, un lavapareti). Ogni lampada con quel nome usa lo stesso profilo, e la lampada mantiene la propria luminosità. Fare clic sul nome del profilo per smettere di usarlo.

Le finestre di vetro trasparente aiutano la luce del cielo a entrare in una stanza, quindi le immagini d'interno sotto un cielo si schiariscono prima.

La modalità {{ui:Veloce}} e il path tracer WebGL mostrano {{ui:Cielo fisico}} e {{ui:Immagine del cielo (HDRI)}} come cielo sereno e ignorano i profili luce.

## La camera

{{ui:Camera}} imposta l'immagine come una fotografia:

- {{ui:Esposizione}}: mantenere il {{ui:Cursore di luminosità}}, oppure scegliere {{ui:Impostazioni della fotocamera}} e impostare {{ui:Apertura (numero f)}}, {{ui:Tempo di otturazione}} e {{ui:ISO}} come su una fotocamera; il valore EV accanto è il valore di esposizione usuale. f/16 a 1/100 s e ISO 100 corrisponde a una giornata di sole; una scena più scura richiede un'apertura più ampia, un otturatore più lento o un ISO più alto. Funziona in tutte le modalità.
- {{ui:Profondità di campo}} sfuma ciò che è più vicino o più lontano della {{ui:Distanza di messa a fuoco (m)}}, come farebbe un obiettivo di quel numero f (lasciarla vuota per mettere a fuoco ciò che è al centro della vista); {{ui:Forma del diaframma}} dà alle luci fuori fuoco una forma rotonda o a lamelle.
- {{ui:Prospettiva a due punti (le linee verticali restano verticali)}} livella la camera e sposta l'immagine, come fa un obiettivo architettonico tilt-shift, così le pareti non si inclinano quando si guarda in alto o in basso un edificio.
- {{ui:Bilanciamento del bianco}} stabilisce quale colore di luce appare come bianco: più basso (per esempio 3000 K) per la luce calda delle lampade, più alto per l'ombra e le giornate nuvolose.
- {{ui:Proiezione}}: {{ui:Panorama a 360°}} crea un'immagine 2:1 di tutto ciò che sta intorno alla camera, per i visualizzatori di panorami; {{ui:Panorama stereo a 360°}} affianca un panorama per l'occhio sinistro e uno per l'occhio destro, per i visori; {{ui:Mappa cubica (6 facce)}} crea sei viste quadrate in una griglia 3 × 2. La larghezza deriva da {{ui:Dimensione}}.

Proiezione, profondità di campo, prospettiva a due punti e bilanciamento del bianco richiedono il path tracer sulla scheda grafica (WebGPU), quindi compaiono solo in {{ui:Alta qualità}}.

## Rifinire l'immagine

{{ui:Immagine}} rifinisce l'immagine in alta qualità come una fotografia, e ogni controllo modifica subito l'immagine finale senza renderizzare di nuovo:

- {{ui:Resa (trasformazione di visualizzazione)}}: {{ui:ACES filmic}} (l'immagine come prima), {{ui:AgX}} (più morbido, conserva il colore nelle luci molto intense), {{ui:Filmic}} (una curva da pellicola delicata) oppure {{ui:Standard}} (semplice: la luce molto forte si taglia a bianco).
- {{ui:Contrasto}} e {{ui:Compressione delle luci}} (recupera dettagli nelle parti molto luminose).
- {{ui:Bagliore (bloom)}} (un alone morbido intorno alle luci intense), {{ui:Abbagliamento}} con i suoi {{ui:Raggi di abbagliamento}} (raggi a stella dai punti più luminosi) e {{ui:Vignettatura}} (angoli più scuri).
- {{ui:Tabella colori (.cube)…}} applica una correzione colore da un file `.cube`, con la sua {{ui:Intensità della tabella colori}}; come un'immagine del cielo, resta in uso solo finché la pagina è aperta.

## Salvare l'immagine

{{ui:Salva come}} accanto a {{ui:Salva}} sceglie il file: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} per condividere (JPEG e WebP solo dove il browser sa scriverli), e dopo un render in alta qualità sulla scheda grafica anche:

- {{ui:PNG, 16 bit}}: l'immagine corretta con passi più fini tra le sfumature, per la stampa o per ulteriori modifiche.
- {{ui:EXR, ogni livello (float a 32 bit)}}: l'immagine come renderizzata (luce lineare, senza correzione) con ogni elemento di render e ogni gruppo di luci come livello separato, per i programmi di compositing.
- {{ui:File di render (.ccrender, per correggerlo più tardi)}}: tutto ciò che serve alla finestra di dialogo per miscelare e correggere di nuovo l'immagine. {{ui:Apri un file di render…}} lo riporta indietro, con miscela e correzione, senza renderizzare.

## Miscelare le luci dopo il render

Attivare {{ui:Miscelazione della luce (modifica colore e luminosità di ogni lampada dopo il render)}} prima di premere {{ui:Render}}. Quando l'immagine è terminata (o interrotta), {{ui:Miscela l'immagine}} elenca le sue luci in gruppi: il cielo, il sole e le lampade per nome (ogni lampada con lo stesso nome forma un gruppo). Disattivare un gruppo, assegnargli un colore o renderlo più chiaro o più scuro, e l'immagine cambia subito, senza renderizzare di nuovo. {{ui:Salva miscela}} conserva la miscela con un nome da scegliere in seguito; {{ui:Come renderizzato}} torna all'immagine com'era stata creata. {{ui:Salva}} salva l'immagine miscelata.

{{ui:Elementi di render (albedo, normali, profondità, diffuso, speculare, trasmissione, emissione, ID)}} conserva anche le parti dell'immagine. {{ui:Mostra}} passa la vista a una di esse: i colori delle superfici (albedo), le normali, la profondità, la luce diffusa, speculare e trasmessa (ciascuna diretta e indiretta), ciò che emette luce e il cielo, e un colore per oggetto o per materiale per creare maschere.

Entrambi mantengono livelli extra sulla scheda grafica. Con dimensioni grandi la scheda grafica potrebbe non avere spazio sufficiente; la finestra di dialogo lo indica e una dimensione più piccola funziona.

## La coda di render

Dopo una configurazione in alta qualità, {{ui:Aggiungi questa immagine alla coda}} in {{ui:Coda di render}} conserva l'immagine così come è impostata ora; il pulsante {{ui:Aggiungi questa animazione alla coda}} della finestra del video fa lo stesso per un'intera animazione, con path tracing fotogramma per fotogramma. {{ui:Avvia la coda}} renderizza le immagini una dopo l'altra su questo computer, e {{ui:Salva}} accanto a ciascuna terminata la scarica. Chiudere la pagina mantiene la coda: aprendo lo stesso modello si riprende da dove si era fermata. La coda richiede WebGPU.

## Nebbia, fumo, rumore e caustiche

Queste opzioni si trovano in {{ui:Nebbia, fumo e rumore}} e funzionano in {{ui:Alta qualità}} sulla scheda grafica; gli altri motori le escludono.

- {{ui:Nebbia e foschia}} riempie l'aria fino a un'altezza con una bruma che il sole, il cielo e le lampade illuminano. {{ui:Fino a quale distanza si vede, in metri}} ne imposta la densità (circa 100 m per una leggera foschia, 20 m per una nebbia fitta), {{ui:Altezza della nebbia sopra il suolo, in metri}} indica dove finisce, e {{ui:Raggi di luce}} è quanto la bruma si illumina verso la luce. La luce del sole esce dalla nebbia nella parte superiore, quindi dove il sole entra da una finestra o tra due edifici lo si vede come raggi di luce.
- {{ui:Fumo o nuvola}} aggiunge un volume di fumo o di nuvola illuminato come la nebbia. {{ui:Tipo}} è {{ui:Nuvola}}, {{ui:Colonna di fumo}} oppure {{ui:Da un file di volume (.ccvol)}}, il formato a griglia proprio di CadCraft. {{ui:Dettaglio}} e {{ui:Variazione}} modificano una nuvola o una colonna già creata, {{ui:Dimensione del suo lato più lungo, in metri (0 = dimensione del modello)}}, {{ui:Sposta X (m)}}, {{ui:Sposta Y (m)}}, {{ui:Sposta Z (m)}} e {{ui:Ruota}} la posizionano (parte dal centro del modello), {{ui:Spessore}} la rende più densa, {{ui:Bagliore in avanti}} la rende più luminosa verso la luce, e {{ui:Colore}} la tinge. Un file di volume resta in uso solo finché la pagina è aperta, come un'immagine del cielo.
- {{ui:Fermati prima dove l'immagine è pulita (campionamento adattivo)}} non assegna altri campioni ai pixel già stabili, così il resto dell'immagine termina prima. {{ui:Rumore accettabile}} indica quanta grana resta quando un pixel si ferma. La riga sotto l'immagine dice quanti campioni ha ricevuto in media un pixel.
- {{ui:Caustiche (luce piegata dal vetro o riflessa dagli specchi)}} traccia la luce delle lampade e del sole, così la macchia luminosa sotto una sfera di vetro o la luce di uno specchio su una parete risulta pulita invece che granulosa. È disattivata mentre sono attivi nebbia, fumo, la miscelazione delle luci dopo il render o gli elementi di render, ed è pensata per le immagini, non per le immagini a 360°, le animazioni o l'area di lavoro Render.

## Quanto tempo richiede

L'immagine viene prodotta sul proprio computer dalla sua scheda grafica; nulla viene caricato. Il tempo dipende da quella scheda. Cresce con i passaggi e con i pixel: {{ui:Migliore}} ha 16 volte i passaggi di {{ui:Bozza}}, e un'immagine 4K ha circa quattro volte i pixel di Full HD. Un computer senza scheda grafica renderizza comunque, più lentamente.

:::note
Se la finestra di dialogo dice che il browser non può renderizzare immagini, il browser non ha WebGL 2. Aggiornarlo oppure attivare l'accelerazione hardware nelle sue impostazioni.
:::
