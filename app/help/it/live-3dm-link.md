---
title: Mantenere un modello .3dm in Live
summary: Modificare un modello nel programma che lo ha creato e vederlo cambiare qui, da Rhino 8 o da una definizione Grasshopper, senza salvare e importare di nuovo.
keywords: rhino, grasshopper, collegamento live, connessione live, 3dm, nurbs, parametrico, collegamento, sincronizzazione, script, modello di riferimento, push
from: 331b0a7e
---

Continuare a modellare dove si modella, e usare il risultato qui: per fare il render, illuminarlo o costruire una scena attorno a esso. Ogni modifica nell'altro programma aggiorna un gruppo in ModelCraft.

:::note
Il collegamento richiede **CadCraft Studio** sullo stesso computer. Una scheda del browser non può stabilire la connessione. Nulla passa attraverso internet: lo script comunica con Studio all'indirizzo di questo computer, con un token.
:::

:::warning
Questo collegamento è stato testato con lo scrittore di file dello script e con un sostituto dell'altro programma, non ancora dentro Rhino o Grasshopper stessi. Se lì qualcosa non funziona, segnalare il messaggio visualizzato.
:::

## Configurazione

1. In Studio, aprire ModelCraft. In {{ui:Impostazioni}} › {{ui:ModelCraft}} › {{ui:Assistenti}}, spuntare **Consenti agli assistenti IA e agli script di usare ModelCraft**, poi **Modifica**.
2. In Studio, scegliere {{ui:Collega un assistente}}. Mostra l'indirizzo e il token da incollare più sotto.
3. Scaricare lo script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Da Rhino

1. Eseguire `cadcraft_link.py` nell'editor di script di Rhino (Python 3 in Rhino 8).
2. La prima volta, incollare l'indirizzo e il token. Vengono conservati in `.cadcraft-link.json` nella cartella personale, mai nel modello. Studio genera un nuovo token a ogni avvio, quindi in quel caso lo script lo chiede di nuovo.

L'intero modello arriva come un unico gruppo con il nome del documento, per esempio "chair (linked)". Dopodiché ogni modifica arriva quando ci si ferma per un momento, e vengono inviati solo gli oggetti modificati. Per interrompere, eseguire di nuovo lo script.

## Da Grasshopper

Eseguire prima lo script una volta in Rhino, così indirizzo e token vengono salvati.

1. Aggiungere un componente Script (Python 3) e incollarvi l'intero `cadcraft_link.py`.
2. Assegnare questi input: `G` (la geometria, con accesso a lista), `N` (un nome, facoltativo), `On` (un interruttore booleano) e `Target` (facoltativo: `model` o `part`, se sono aperte entrambe le app).
3. Impostare `On` su true.

A ogni calcolo `G` viene inviato e sostituisce ciò che il componente aveva inviato l'ultima volta, quindi trascinando un cursore il gruppo qui si aggiorna. La sua uscita `a` indica che cosa è successo. Ogni componente ha un proprio gruppo.

## Che cosa si può fare con il gruppo

- **Spostarlo, applicargli un tag, costruire intorno a esso.** La posizione del gruppo e del suo tag resta invariata a ogni aggiornamento, e così tutto ciò che gli sta accanto.
- **Non modificare dentro il gruppo.** Ogni aggiornamento sostituisce ciò che è nel gruppo. Quegli oggetti appartengono all'altro programma.
- **Annulla.** Gli aggiornamenti a meno di due secondi l'uno dall'altro condividono un solo passaggio di annullamento, quindi {{key:Mod+Z}} annulla un intero trascinamento. L'aggiornamento successivo riallinea il modello.
- **Salva.** Il file salvato conserva il collegamento. Dopo averlo riaperto, eseguire di nuovo lo script e lo stesso gruppo si aggiorna.

## Che cosa viene importato

Mesh, polisuperfici, superfici ed estrusioni come la mesh visibile a schermo, SubD come la sua mesh, curve come spigoli, blocchi come oggetti separati nella loro posizione (non come componenti), layer come tag, colori e unità. Vedere [Importa un modello .3dm](topic:import-3dm-files) per il modo in cui questi elementi compaiono qui.

Esclusi, con un conteggio nell'altro programma: punti, testo, quote, luci e simili.

**Un solo senso.** Le modifiche fatte qui non tornano all'altro programma.

## Se qualcosa non funziona

- **"Nessuna finestra di ModelCraft o PartCraft lo consente":** eseguire il passaggio 1 della configurazione.
- **"Studio ha rifiutato il token":** Studio è stato riavviato. Copiare il nuovo token ed eseguire di nuovo lo script. Per Grasshopper, eseguirlo prima in Rhino.
- **"Impossibile raggiungere CadCraft Studio":** Studio non è in esecuzione, oppure l'indirizzo è cambiato.
