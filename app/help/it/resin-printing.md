---
title: Slicing per una stampante a resina
summary: Eseguire lo slicing del piano della fase di stampa per una stampante a resina, svuotare e supportare il pezzo, controllare i layer, salvare il file della stampante e trovare la propria esposizione con il test di esposizione.
keywords: resina, suggerisci inclinazione, ventosa, forza di distacco, controventatura, stampa a resina, sla, msla, dlp, slicer, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, svuota, foro di sfiato, zattera, supporti, test di esposizione, scala di esposizione, calibrazione, layer, add-on
from: 8cc12858
---

Gli add-on per la resina eseguono lo slicing di ciò che si trova sul piano di stampa in immagini di layer per lo schermo della stampante, e salvano il file che la stampante legge. Sono gratuiti, senza funzioni bloccate, e restano disattivati finché non vengono attivati.

:::note
Nessun file è stato ancora caricato su una stampante reale. I file sono stati riletti solo dai lettori di CadCraft, e i supporti sono nuovi. Controllare i layer ed eseguire la prima stampa a mano.
:::

## Cosa si farà

Eseguire lo slicing di un pezzo per la resina, controllare i layer, salvare il file e copiarlo sulla stampante.

## Passaggi

1. Aprire {{ui:Impostazioni}} › {{ui:Add-on}} e attivare l'add-on di slicing per la resina e l'add-on per il formato file della stampante (Elegoo GOO, SL1, Chitubox o Anycubic). È possibile anche premere {{ui:Aggiungi stampa a resina}} nella scheda Fase di stampa.
2. Posizionare il pezzo sul piano come descritto in [Posiziona oggetti sul piano di stampa](topic:print-stage), poi scegliere {{ui:Resina}} accanto a **Stampa con**.
3. In **Impostazioni stampa a resina**, scegliere la **Stampante** e la **Resina**. La scheda mostra le dimensioni dello schermo in pixel. Sono le dimensioni pubblicate dal produttore, quindi verificare quelle della propria stampante; è possibile modificarle in Personalizzato.
4. Impostare **Altezza layer (mm)**, **Esposizione (s)** ed **Esposizione base (s)**. I valori per ogni resina sono solo un punto di partenza.
5. Spuntare **Svuota, con foro di sfiato** se si desidera un pezzo cavo, e impostare **Parete (mm)** e **Larghezza foro (mm)**.
6. Spuntare **Supporti e zattera**, e scegliere la **Densità dei supporti**: Leggera, Media o Alta.
7. Scegliere il **Formato file**. Se la scheda indica che non ne è ancora stato aggiunto nessuno, premere il pulsante con scritto Aggiungi e il nome del formato.
8. Premere {{ui:Anteprima layer}} e spostare il cursore **Layer**. I pezzi sospesi sono cerchiati. La riga sotto indica i layer, il tempo e la resina in mL, grammi e costo.
9. Premere {{ui:Salva il file di stampa}}, controllare il riepilogo e premere {{ui:Salva}}. Copiare il file sulla stampante.

## Inclinazione, ventose, controventi e forza di distacco

Questi quattro valori sono stime ricavate dalla forma del pezzo. Nessuno è stato provato su una stampante reale, quindi considerarli ciascuno un suggerimento e controllare i layer.

1. Premere {{ui:Suggerisci un'inclinazione}} sotto **Inclinazione (gradi)**. CadCraft prova inclinazioni da 0 a 60 gradi e sceglie quella con il layer più grande più piccolo, la superficie a sbalzo minore e nessuna ventosa. Imposta **Inclinazione (gradi)** e indica il risultato. I pesi di valutazione sono nostri, non di un produttore di stampanti.
2. Dopo {{ui:Anteprima layer}}, un avviso indica le cavità che si aprono solo verso la pellicola. Una cavità del genere può trattenere l'aspirazione quando un layer si distacca. Inclinare il pezzo o aggiungere un foro. Le tasche più strette della dimensione di cella indicata nell'avviso non vengono rilevate.
3. Con **Supporti e zattera** attivo, spuntare **Rinforza i supporti alti** per aggiungere controventi trasversali tra pilastri alti e sottili.
4. La riga sotto l'anteprima indica il layer più grande in cm2. Mostra una forza solo se si inserisce una **Sollecitazione di distacco misurata** in **Strati di base, sollevamento e velocità**. Senza un valore misurato, mostra solo l'area.

## Trovare l'esposizione

1. Attivare l'add-on del test di esposizione in {{ui:Impostazioni}} › {{ui:Add-on}}.
2. Premere {{ui:Metti il pezzo di prova sul piano}}.
3. Premere {{ui:Salva la scala di esposizione}}. Si ottiene un file per ogni esposizione, in un archivio zip.
4. Stampare ogni file con la stessa resina, e tenere l'esposizione con i pilastri sottili e i fori aperti più nitidi.

## Note

- Lo slicing viene eseguito in secondo piano, quindi la pagina resta utilizzabile anche con un piano grande.
- I pezzi che non sono solidi chiusi vengono esclusi, e la scheda lo indica.
- Se la stampante rifiuta un file, la scheda del formato offre opzioni per ciò che il formato lascia aperto. Modificarne una, salvare di nuovo e indicarci quale ha funzionato.
- Le versioni Anycubic 517 e 518 non sono scritte.
