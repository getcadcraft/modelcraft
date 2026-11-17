---
title: Mettere oggetti sul piano di stampa e inviarli a una stampante
summary: Aggiungere elementi della Libreria o un proprio modello al piano della stampante, disporli, controllare gli strati sezionati e inviare la stampa via USB o rete, oppure salvare il G-code, senza esportare prima uno STL.
keywords: fase di stampa, stampa 3D, stampante, piano, invia alla stampante 3D, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, libreria, disponi, adatta tutto, anteprima strati, riempimento, supporti, filamento, pla, petg, add-on, add-on stampa 3D
from: abcf5d7e
---

La {{ui:Fase di stampa}} dispone gli oggetti sul piano della stampante, li seziona e li invia alla stampante. Non serve esportare prima un file. Appartiene all'add-on Stampa 3D, attivo per impostazione predefinita.

:::note
Con questo non è ancora stato stampato nulla su una stampante reale. Lo slicer è nuovo: controllare i primi strati della prima stampa e usare l'anteprima degli strati prima di inviare.
:::

## Cosa si fa

Mettere un modello sul piano, verificare che entri, guardare gli strati sezionati e inviarlo a una stampante oppure salvare il G-code.

## Passaggi

1. Fare clic su {{ui:Fase di stampa}} nella barra degli strumenti. Si apre una scheda sopra la vista e un contorno tratteggiato mostra il piano.
2. Sotto **Aggiungi dalla Libreria**, digitare un nome nel campo di ricerca, premere {{ui:Cerca}} e premere {{ui:Aggiungi}} su un risultato. L'elemento finisce sul piano a grandezza naturale, oppure ridotto per entrare. Anche tutto ciò che è già stato disegnato o importato e si vede nella vista è sul piano.
3. Sotto **Sul piano**, controllare la dimensione di ciascun elemento. Un elemento contrassegnato **Fuori dal piano** va spostato. Spostare, ruotare e ridimensionare gli oggetti nella vista con gli strumenti consueti.
4. Premere {{ui:Disponi sul piano}} per distribuire gli elementi, oppure {{ui:Adatta tutto al piano}} per ridurli finché entrano.
5. Sotto **Stampante**, scegliere la dimensione del **Piano** oppure uno dei profili della stampante.
6. Sotto **Impostazioni di stampa**, scegliere il **Materiale**, la **Qualità** e il **Riempimento %**, e spuntare **Aggiungi supporti sotto gli sbalzi** se la forma li richiede.
7. Premere {{ui:Anteprima strati}} e muovere il cursore **Strato** per guardare gli strati sezionati. Se si cambiano poi la fase o le impostazioni, premere di nuovo {{ui:Anteprima strati}}.
8. Sotto **Connessione**, scegliere {{ui:Cavo USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} oppure {{ui:PrusaLink}}. Per USB premere {{ui:Connetti}}. Per una stampante in rete digitare il suo **Indirizzo** (e la **API key** se la richiede), poi premere {{ui:Prova la connessione}}.
9. Premere {{ui:Invia alla stampante 3D}}. La scheda chiede se il piano è libero e se è caricato il materiale giusto, e mostra tempo, materiale e temperature. Confermare per inviare.

Compare un messaggio che indica che la stampante si sta avviando. {{ui:Interrompi la stampa}} spegne riscaldatori, ventola e motori. Se si vuole solo un file, premere {{ui:Salva invece il G-code}}.

## Note

- L'USB richiede Chrome o Edge su un computer, e la pagina deve restare aperta fino alla fine della stampa. Chiuderla interrompe il flusso.
- Una stampante in rete deve consentire questo sito (in Moonraker aggiungerlo a `cors_domains`; in OctoPrint attivare CORS e copiare una API key). Il browser può chiedere di raggiungere i dispositivi della rete.
- Nulla si connette né invia senza un clic.
- L'elenco degli slicer è sotto **Slicer**. {{ui:CadCraft basic (incluso, il più veloce)}} è integrato. Kiri:Moto, PrusaSlicer, OrcaSlicer e Bambu Lab P2S sono add-on a sé stanti che si attivano dalla scheda oppure in {{ui:Impostazioni}} › {{ui:Add-on}}. PrusaSlicer e OrcaSlicer usano la propria copia e lavorano da CadCraft Studio su un computer.
- I pezzi che non sono solidi chiusi vengono esclusi, e la scheda indica quanta parte della forma è.
- Per le stampanti a resina, vedere [Sezionare per una stampante a resina](topic:resin-printing). Per controllare o riparare prima un modello, vedere [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools).
