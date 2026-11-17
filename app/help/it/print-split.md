---
title: Dividere un modello grande per la stampa
summary: Tagliare un modello troppo grande per la stampante in pezzi che entrano nel piano, con perni, chiavi, code di rondine, fori per spinotti o magneti e il numero del giunto su entrambe le facce, e scaricare ogni pezzo e un foglio di assemblaggio in un unico zip.
keywords: stampa 3D, dividi, taglio obliquo, taglio inclinato, taglio angolato, obliquo, divisore, taglio, troppo grande, dimensioni del piano, volume di stampa, pezzi, parti, connettori, perni, chiavi, coda di rondine, spinotto, magnete, gioco, tolleranza, numeri dei pezzi, assieme, vista esplosa, zip, stl, 3mf, licenza, license, chiave USB, dongle
from: ee96ba77
---

Quando un modello è più grande del piano della stampante, **Dividi per la stampa** lo taglia in pezzi che entrano, aggiunge connettori perché i pezzi si allineino quando vengono uniti, e incide lo stesso numero su entrambe le facce di ogni giunto. Aprire {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}}; la riga **Strumenti di stampa** della finestra contiene {{ui:Dividi per la stampa}}. Si apre come una scheda sopra la vista.

Lavora su ciò che viene stampato: la selezione, oppure tutto ciò che è visibile se non c'è nulla di selezionato. Ciò che si stampa deve essere un solido chiuso; se il controllo trova dei buchi, usare prima [Ripara](topic:print-tools#repair).

Viene eseguito in ModelCraft, sul computer: nessun server di licenza, nessuna chiave USB, nessun caricamento.

## Come tagliare

- **Adattare al piano, con il minor numero di pezzi**: indicare larghezza, profondità e altezza del piano (partono da {{ui:Impostazioni}} › ModelCraft › Stampante 3D). La scheda indica quanti pezzi servono e quanto è grande ciascuno; il modello viene tagliato in pezzi uguali, nel numero minimo che entra. Un pezzo può essere disposto di lato nei file se questo lo fa entrare. I connettori che sporgono da un pezzo contano nelle sue dimensioni.
- **Nei punti indicati**: scegliere l'asse su cui tagliare e digitare dove, in millimetri dal lato basso del modello, separati da virgole (`100, 200` crea tre pezzi).
  **Obliquo** inclina i tagli fino a 60° attorno a uno dei due altri assi (per esempio un taglio attraverso Z inclinato attorno a X): ogni taglio obliquo passa per la linea centrale del modello nel suo punto, dà ai pezzi più superficie di incollaggio e nasconde meglio il giunto su una superficie inclinata. I connettori sono perpendicolari al taglio.

Mentre la scheda è aperta, i piani di taglio sono disegnati attorno al modello con linee tratteggiate.

## Connettori

Ogni punto in cui due pezzi si toccano riceve dei connettori, posizionati dove c'è più spazio: almeno a una distanza pari alla **parete minima** più il **gioco** più la loro dimensione dall'esterno, e abbastanza lontano da ogni altro taglio perché due fori non si incontrino mai. Su una faccia lunga vengono distribuiti due connettori lungo di essa, così i pezzi non possono ruotare.

- **Perni tondi**: un perno su un pezzo (smussato in punta), un foro sull'altro.
- **Chiavi quadre**: lo stesso, quadrato, così un pezzo può entrare in un solo verso.
- **Code di rondine**: una linguetta che scorre in una sede dal lato. Dove un'estremità della sede incontrerebbe un altro taglio, la coda si ferma prima e scorre dall'estremità aperta. Le code di rondine sono adatte a tagli in una sola direzione (una fila di fette); in una griglia, usare perni o spinotti.
- **Fori per spinotti**: un foro su ciascun lato; anche i perni sono stampati (nello zip).
- **Tasche per magneti**: una tasca su ciascun lato per un magnete tondo del diametro e dello spessore indicati. Controllare i poli prima di incollarli.
- **Nessuno (colla)**.

Il **gioco** è lo spazio su ogni lato tra un perno e il suo foro (0,2 mm all'inizio). Viene rispettato con il valore indicato: i fori tondi vengono fatti un po' più grandi perché siano le facce piatte, non gli angoli, a mantenere quel gioco. Aumentarlo se i pezzi della stampante escono troppo stretti.

Quando un giunto non ha spazio per un connettore (una parete sottile, un'area di contatto piccola), la scheda lo indica: incollare quel giunto.

## Numeri dei pezzi

Con **Incidi i numeri dei giunti su entrambe le facce** attivo, ogni giunto riceve il numero dei suoi due pezzi, per esempio `3-4`, inciso di 0,6 mm di profondità su entrambe le facce, leggibile nel verso giusto su ciascuna. I numeri iniziano alti 5 mm e diventano più piccoli per entrare, fino a 2,5 mm; un giunto senza spazio per il suo numero viene elencato. I pezzi sono numerati dallo strato inferiore verso l'alto.

## Anteprima, download, dividi il modello

1. {{ui:Anteprima}} taglia il modello e indica quanti pezzi, giunti e connettori ci sono, se ogni pezzo supera il controllo per la stampa 3D ed entra nel piano, ed elenca le dimensioni di ciascun pezzo. Un anello segnala ogni connettore e ogni numero nella vista.
2. {{ui:Scarica i pezzi (.zip)}} salva un unico zip: un file per pezzo (STL o 3MF, come scelto sotto **File**), ciascuno appoggiato sul piano; i perni per gli spinotti; e il **foglio di assemblaggio**, cioè un'immagine dei pezzi separati con i loro numeri (`assembly.svg` e `assembly.png`) e un elenco di pezzi e giunti (`assembly.txt`).
3. {{ui:Dividi il modello}} inserisce i pezzi nel modello al posto dei gruppi o dei componenti selezionati, con i nomi del foglio di assemblaggio, in un solo passaggio: {{ui:Annulla}} rimette l'originale. Servono i gruppi o i componenti da dividere selezionati; lo scaricamento funziona su qualsiasi cosa si stampi.

## Spostare i connettori a mano

Dopo un'anteprima, **Connettori a mano** permette di correggere dove vanno i connettori:

- {{ui:Sposta uno}}: fare clic su un anello rosso nella vista (diventa verde), poi fare clic dove deve andare, sul taglio.
- {{ui:Aggiungine uno}}: fare clic nella vista dove deve andare un connettore. Va sul piano di taglio che il clic raggiunge, tra i due pezzi.
- {{ui:Rimuovine uno}}: fare clic su un anello rosso per eliminare quel connettore.

Ogni modifica viene ricontrollata come quelle automatiche: un punto troppo vicino al contorno, un altro taglio o un altro connettore non viene creato, e la scheda lo indica. {{ui:Di nuovo automatico}} dimentica i punti scelti. Restano validi finché modello, selezione e tagli non cambiano.

Un'anteprima resta finché non cambiano il modello, la selezione o un'impostazione; poi la scheda chiede di farne una nuova.

:::note
Ogni pezzo viene controllato come lo controllerebbe il controllo per la stampa 3D prima del download. Lo slicer decide comunque come viene stampato ciascun pezzo: guardarlo lì, e stampare prima un giunto per vedere come la stampante gestisce il gioco.
:::
