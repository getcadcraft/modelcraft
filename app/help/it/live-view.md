---
title: La vista live
summary: Una finestra accanto al modello che lo mostra con l'aspetto in tempo reale, con sole e ombre, e segue ogni modifica; percorrerla e impostare l'ora del giorno e il mese.
keywords: condividi, panorama, 360, tour, tour virtuale, visualizzatore autonomo, visualizzatore offline, invio a un cliente, video, video del percorso, dispersione, disperdere, erba, prato, foresta, rocce, piante, alberi, folla, dipingi piante, vista live, tempo reale, render in tempo reale, percorso, cammina, attraversa, prima persona, presentazione, cliente, secondo schermo, seconda finestra, monitor, ora del giorno, sole, stagione, mese, ombre, occlusione ambientale, riflessi, luce di rimbalzo, illuminazione globale, webgpu, webgl
from: fca3b0d6
---

{{ui:Esporta}} › {{ui:Vista live}} apre un pannello sopra l'app che mostra il modello con l'aspetto in tempo reale: il cielo e il sole secondo il luogo e la data del modello, le ombre del sole, gli aspetti e i materiali assegnati alle facce, le lampade e la luce riflessa da pareti e pavimenti. Segue ciò che si fa: ruotando la vista ruota anche lui, modificando il modello mostra la modifica un istante dopo. Non viene caricato nulla.

## Aprire la vista

1. Scegliere {{ui:Esporta}} › {{ui:Vista live}}. Il pannello si apre nell'angolo in basso a destra.
2. Trascinare la sua barra del titolo per spostarlo, tirare un angolo per ingrandirlo.
3. {{ui:Nuova finestra}} lo sposta in una finestra propria, per un secondo schermo. {{ui:Esporta}} › {{ui:Vista live in una nuova finestra}} lo apre subito lì. Se il browser blocca le finestre pop-up, si apre come pannello.
4. {{ui:Chiudi}} lo chiude.

## I comandi

| Comando | Funzione |
|---|---|
| {{ui:Segui la vista}} | Attivo: la vista live guarda dove guarda la vista di ModelCraft. Camminando si disattiva |
| {{ui:Cammina}} | Percorrere il modello (vedi sotto) |
| {{ui:Gravità}} | Mentre si cammina: stare sui pavimenti e salire le scale. Disattivata: volare |
| {{ui:Ora}} | L'ora del giorno, da 05:00 a 21:00. Il sole si sposta trascinando |
| {{ui:Mese}} | Il mese (il giorno 21), per vedere il sole in inverno e in estate |
| {{ui:Qualità}} | {{ui:Per questo computer}} (ciò che ottiene [il proprio computer](topic:your-machine)), oppure {{ui:Bassa}}, {{ui:Media}} o {{ui:Alta}} |

La riga in basso indica che cosa disegna la vista (WebGPU o WebGL 2), la qualità e la luce di rimbalzo.

## Percorrere il modello

1. Ruotare la vista principale verso il punto in cui si vuole stare e scegliere {{ui:Cammina}}. Si sta sul pavimento sotto il punto di vista, alti 1.6 m.
2. Fare clic nella vista live, poi usare {{key:W}} {{key:A}} {{key:S}} {{key:D}} o i tasti freccia. Tenere premuto {{key:Shift}} per correre. Trascinare per guardarsi intorno.
3. Si salgono i gradini fino a 40 cm (scale); ciò che è più alto è un muro. I muri fermano il movimento, che prosegue lungo di essi.
4. Con {{ui:Gravità}} disattivata si vola: {{key:E}} sale, {{key:Q}} scende.
5. {{key:Esc}} interrompe la camminata.

## Disperdere piante, rocce e persone

{{ui:Dispersione}} nella barra della vista live apre il pannello di dispersione accanto all'immagine. Un set di dispersione distribuisce elementi dalla libreria di elementi di contorno (alberi, arbusti, erba, fiori, rocce, persone, auto) su una parte del modello. Gli elementi sono disegnati solo nella vista live: non sono geometria del modello, e la vista principale non li mostra.

1. **Riempire facce:** selezionare facce (o un gruppo, per esempio un terreno) in ModelCraft, poi scegliere {{ui:Riempi la selezione}}. Il set le copre.
2. **Dipingere:** scegliere {{ui:Colora}}, poi trascinare sulla vista live. Con facce selezionate la pittura cade solo su di esse; senza selezione cade su tutto ciò che si trova sotto il pennello, compreso il terreno. {{ui:Dimensione del pennello}} imposta il pennello; {{ui:Gomma}} rimuove le macchie dipinte.
3. Spuntare ciò che si vuole disperdere. Il numero accanto a ciascuno è il suo peso: 3 e 1 fanno tre del primo per ogni uno del secondo.

| Comando | Funzione |
|---|---|
| {{ui:Per m²}} | Quanti elementi per ogni metro quadrato |
| {{ui:Distanza (m)}} | Nessun elemento più vicino di questa distanza ad altri oggetti, e nessuno sotto un tetto o un tavolo. 0 la disattiva |
| {{ui:Rotazione (°)}} | Di quanto ogni elemento viene ruotato a caso intorno alla verticale |
| {{ui:Massima pendenza (°)}} | Nessun elemento dove la superficie è più ripida |
| {{ui:Dimensione}} | La dimensione minima e massima, come fattore della dimensione dell'elemento |
| {{ui:Altezza da, a (m)}} | Solo tra queste altezze (vuoto = qualsiasi) |
| {{ui:Inclina con la superficie}} | 0 mantiene gli elementi verticali; 1 li dispone perpendicolari alla pendenza |
| {{ui:Seme}}, {{ui:Rimescola}} | Lo stesso seme dà sempre la stessa dispersione; Rimescola ne sceglie un'altra |

I set sono salvati nel file `.modelcraft` e seguono le facce che coprono quando le si modifica. Il numero massimo di elementi disegnati dalla vista live dipende dal livello di [il proprio computer](topic:your-machine): 20 000 per {{ui:Solo processore}}, 100 000 per {{ui:Scheda grafica, base}}, un milione per {{ui:Scheda grafica, alta}}. Il pannello indica quanti elementi sono collocati su quanti ne richiede la densità: se si raggiunge il limite, o dove gli oggetti li escludono, ne vengono collocati meno. Gli elementi vicini alla camera sono disegnati come sono; quelli lontani come forme semplici nei loro colori.

:::note
Gli elementi dispersi sono nella vista live (e nel suo percorso, nei panorami e nel visualizzatore autonomo). Render di un'immagine non li disegna ancora.
:::

## Condividere: panorami, tour, un visualizzatore, un video

{{ui:Condividi}} nella barra della vista live crea file dalla vista live. Tutto viene creato su questo computer; non viene caricato nulla.

| Scelta | Che cosa si ottiene |
|---|---|
| {{ui:Panorama a 360°}} | Un'immagine a 360° dal punto in cui si trova la vista (o dove si sta camminando), come PNG equirettangolare che i visualizzatori di panorami e la maggior parte dei siti fotografici aprono |
| {{ui:Aggiungi questo punto al tour}}, poi {{ui:Salva il tour}} | Una pagina web con un panorama per ogni punto e frecce verso i punti che ciascuno vede (un muro in mezzo nasconde la freccia) |
| {{ui:Salva un visualizzatore}} | Una pagina web con il modello con questo aspetto in tempo reale: ruotarlo, percorrerlo, passare alle sue scene salvate. Si apre offline in un browser con WebGPU o WebGL 2, da una cartella, una chiavetta USB o un'email, senza installazione né account, e non carica nulla da internet |
| {{ui:Video del percorso}} | Il percorso della camera nella timeline (o le scene salvate in ordine) come video con questo aspetto in tempo reale, alle dimensioni della vista live: WebM o MP4 dove il browser è in grado di crearli, altrimenti immagini numerate in uno ZIP |

La dimensione del panorama segue la qualità: 1024, 2048 o 4096 pixel di larghezza su {{ui:Bassa}}, {{ui:Media}} e {{ui:Alta}}. Un file del visualizzatore pesa circa 5 MB più il modello.

:::note
Il tour e il visualizzatore sono pensati per mostrare, non per modificare: conservano il modello così com'è al momento del salvataggio.
:::

## Qualità

| | Bassa | Media | Alta |
|---|---|---|---|
| Ombre del sole | una mappa d'ombra | tre cascate | quattro cascate |
| Occlusione ambientale (ombre di contatto) | | ✓ | ✓, più fine |
| Riflessi nel metallo | | | ✓ |
| Bloom (quando lo imposta Render di un'immagine) | | ✓ | ✓ |
| Spigoli levigati | FXAA | su più fotogrammi (TAA) | su più fotogrammi (TAA) |
| Luce di rimbalzo | grossolana | più fine | la più fine |

{{ui:Per questo computer}} sceglie Bassa su un computer senza una scheda grafica utilizzabile, Media con un chip grafico integrato, Alta con una scheda grafica separata. Bassa è pensata per un portatile da 8 GB senza scheda grafica.

## Luce di rimbalzo

La luce che rimbalza da una parete soleggiata sul pavimento, e l'interno più scuro di una stanza, sono calcolati dallo stesso path tracer che produce le [immagini renderizzate](topic:render): calcola un piccolo panorama in alcuni punti del modello, in background su ogni core del processore. Mentre lavora, la riga in basso indica {{ui:Luce di rimbalzo: 40 %}}; quando è pronto, la vista lo recepisce. Dopo una modifica ricomincia.

:::note
Si tratta di un'approssimazione per una vista live, non di un'immagine renderizzata: i piccoli dettagli tra i punti ricevono la luce di rimbalzo dei punti vicini. Per un'immagine finita usare [Render di un'immagine](topic:render).
:::

## Luminosità e colori

La vista live usa la stessa luminosità, bilanciamento del bianco, contrasto e trasformazione della vista (ACES, AgX, filmic o standard) di [Render di un'immagine](topic:render): impostarli lì e la vista live li segue.

:::note
I browser differiscono. Dove il browser dispone di WebGPU (Chrome ed Edge su Windows, macOS e ChromeOS, Safari 26) la vista live lo usa; altrove (la maggior parte dei browser su Linux, sistemi Apple più vecchi) usa WebGL 2 e l'aspetto è lo stesso.
:::
