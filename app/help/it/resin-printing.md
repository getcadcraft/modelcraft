---
title: Affettare per una stampante a resina
summary: Affettare il piano di stampa dello stage per una stampante a resina, svuotare e sostenere il pezzo, scorrere i layer, salvare il file della stampante e trovare l'esposizione con il test di esposizione.
keywords: resina, stampa a resina, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, vuoto, foro di sfiato, zattera, supporti, test di esposizione, scala di esposizione, calibrazione, layer, add-on
from: 83c394e1
---

Gli add-on per resina affettano ciò che si trova sul piano di stampa in immagini di layer per lo schermo della stampante, e salvano il file che la stampante legge. Sono gratuiti, senza alcuna funzione bloccata, e restano disattivati finché non vengono attivati.

:::note
Nessun file è ancora stato caricato su una stampante reale. I file sono stati riletti solo dai lettori di CadCraft, e i supporti sono nuovi. Controllare i layer ed eseguire la prima stampa a mano.
:::

## Cosa si farà

Affettare un pezzo per la resina, controllare i layer, salvare il file e copiarlo sulla stampante.

## Passaggi

1. Aprire {{ui:Impostazioni}} › {{ui:Add-on}} e attivare l'add-on dello slicer per resina e l'add-on per il formato file della stampante (Elegoo GOO, SL1, Chitubox oppure Anycubic). Si può anche premere {{ui:Aggiungi stampa a resina}} sulla scheda dello stage di stampa.
2. Posizionare il pezzo sul piano come in [Mettere oggetti sul piano di stampa](topic:print-stage), poi scegliere {{ui:Resina}} accanto a **Stampa con**.
3. Nelle **Impostazioni di stampa a resina**, scegliere la **Stampante** e la **Resina**. La scheda mostra la dimensione dello schermo in pixel. Sono le dimensioni pubblicate dal produttore: verificare la propria; si possono modificare in Personalizzato.
4. Impostare **Altezza layer (mm)**, **Esposizione (s)** e **Esposizione del fondo (s)**. I valori per ogni resina sono solo un punto di partenza.
5. Selezionare **Svuota e aggiungi foro di sfiato** se si vuole un pezzo cavo, e impostare **Parete (mm)** e **Larghezza del foro (mm)**.
6. Selezionare **Supporti e zattera**, poi scegliere la **Densità dei supporti**: Leggera, Media o Pesante.
7. Scegliere il **Formato file**. Se la scheda indica che non ne è ancora aggiunto nessuno, premere il pulsante che riporta Aggiungi e il nome del formato.
8. Premere {{ui:Anteprima dei layer}} e spostare il cursore **Layer**. I pezzi sospesi sono evidenziati con un cerchio. La riga sotto indica i layer, il tempo e la resina in mL, grammi e costo.
9. Premere {{ui:Salva il file di stampa}}, controllare il riepilogo e premere {{ui:Salva}}. Copiare il file sulla stampante.

## Trovare l'esposizione

1. Attivare l'add-on del test di esposizione in {{ui:Impostazioni}} › {{ui:Add-on}}.
2. Premere {{ui:Metti il pezzo di prova sul piano}}.
3. Premere {{ui:Salva la scala di esposizione}}. Si ottiene un file per ogni esposizione, in uno zip.
4. Stampare ogni file con la stessa resina, e tenere l'esposizione con i pilastrini sottili e i fori aperti più nitidi.

## Note

- L'affettatura viene eseguita in background, quindi la pagina resta utilizzabile anche con un piano di stampa grande.
- I pezzi che non sono solidi chiusi vengono esclusi, e la scheda lo indica.
- Se la stampante rifiuta un file, la scheda del formato offre opzioni per ciò che il formato lascia aperto. Cambiarne una, salvare di nuovo e indicare quale ha funzionato.
- Le versioni 517 e 518 di Anycubic non vengono scritte.
