---
title: Aggiungere un motore di rendering con un add-on
summary: Cosa può aggiungere un add-on all'elenco Motore della finestra Render, il permesso necessario per eseguire un programma, e cosa controllano e chiedono Studio.
keywords: add-on, addon, motore, motore di rendering, sviluppatore, engine.run, permesso, programma, script, firmato, studio, api
from: cd7a39ba
---

Un add-on (Impostazioni › Add-on) può aggiungere un motore all'elenco Motore di {{ui:Render di un'immagine…}}. Il testo completo per gli autori di add-on è la sezione 16 della specifica degli add-on; in breve:

- L'add-on registra un motore con un id che inizia con il proprio, un nome, impostazioni facoltative e **oppure** un programma da eseguire **oppure** una funzione in JavaScript che disegna l'immagine.
- Un motore che esegue un programma richiede il permesso **`engine.run`**, mostrato prima dell'installazione e in Impostazioni. Viene eseguito solo in Studio; nel browser appare come un file da salvare.
- L'add-on indica il programma (un semplice nome di file: mai una shell), uno script che si trova **dentro l'add-on firmato**, e argomenti fatti di segnaposto e parole semplici. Studio trova il programma oppure chiede di indicarlo una sola volta.
- La prima volta che un add-on esegue un programma, **Studio chiede con una propria finestra**: quale add-on, quale programma, e che uno script può fare qualsiasi cosa il programma può fare. Consentirlo solo per un add-on di cui ci si fida. La risposta viene ricordata per quell'add-on e quel programma.
- Il pacchetto (la scena come USD e un file di impostazioni, con il file glTF quando l'add-on lo chiede) e lo script dell'add-on vanno in una cartella temporanea nuova, il programma viene eseguito lì, e l'immagine torna contrassegnata con il nome del motore dell'add-on.

:::note
Gli add-on possono aggiungere motori di rendering solo dalla API di add-on 1.4. Un esempio svolto per un renderer open source a riga di comando è nel suo repository; non è ancora stato eseguito in quel renderer.
:::
