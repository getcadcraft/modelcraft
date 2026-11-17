---
title: Supporti, spessore delle pareti, svuotamento e riparazione
summary: Vedere dove una stampa ha bisogno di supporti e quanti, trovare le pareti troppo sottili per essere stampate, svuotare un pezzo a uno spessore di parete con fori di scarico e riparare una mesh con ogni correzione elencata.
keywords: stampa 3D, supporti, anteprima supporti, sbalzo, supporti ad albero, supporti a colonna, spessore parete, pareti sottili, troppo sottile, ugello, svuota, svuotamento, guscio, foro di scarico, resina, ripara, ripara mesh, non-manifold, facce capovolte, fori, piccoli gusci, auto-intersezione, sovrapposizione, unisci
from: 286bde26
---

Quattro strumenti per preparare un modello a una stampante 3D. Aprire {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}}; la riga **Strumenti di stampa** della finestra contiene {{ui:Anteprima dei supporti}}, {{ui:Spessore delle pareti}}, {{ui:Svuota}} e {{ui:Ripara}}. Ciascuno si apre come una scheda sopra la vista; {{ui:Chiudi}} (la croce) la chiude insieme ai suoi segni. Ne viene mostrata una sola alla volta.

Ogni strumento lavora su ciò che viene stampato: la selezione, oppure tutto ciò che è visibile se non c'è nulla di selezionato. {{ui:Svuota}} e {{ui:Ripara}} richiedono un gruppo, un componente o una mesh selezionati, perché li modificano.

## Anteprima dei supporti

Le facce che sporgono verso l'esterno più dell'**angolo di sbalzo** rispetto alla verticale sono ombreggiate di rosso, e da esse vengono disegnati dei supporti semplici (arancio) fino al piano, o fino alla parte del modello che sta sotto.

- **Angolo di sbalzo**: 45° è ciò che la maggior parte delle stampanti regge senza supporto. Aumentarlo per una stampante che fa bene i ponti.
- **Colonne**: una colonna diritta ogni 3 mm sotto ogni sbalzo. La stima le conta come un motivo di supporto al 15%.
- **Albero**: punti vicini si uniscono in un unico tronco sotto il loro centro; nessun ramo si inclina più di 45°. Gli alberi di solito richiedono meno materiale e toccano il piano in meno punti.

La scheda indica quanta superficie richiede supporto, quanti punti di supporto ci sono e quanto materiale occupano all'incirca. I supporti che poggiano sul modello (non sul piano) vengono conteggiati: lasciano dei segni lì. Con un piano scelto in {{ui:Impostazioni}}, il piano viene disegnato sotto il modello.

:::note
Questa è un'anteprima, non uno slicer: lo slicer decide i supporti reali. Su uno sbalzo molto grande i punti di supporto vengono distribuiti più largamente perché l'anteprima resti rapida; la scheda lo indica.
:::

## Spessore delle pareti

Ogni faccia viene misurata in linea retta attraverso il solido fino all'altro lato. Le pareti sotto lo **spessore minimo di parete ammesso** sono rosse, e quelle sotto una volta e mezza tale valore sono arancio: si stampano, ma potrebbero risultare deboli.

Le zone sottili vengono elencate, dalla più sottile, con quanto sono sottili e quanto sono grandi. {{ui:Mostra}} orienta la camera verso di esse.

Una stampante non può fare una parete più sottile di circa due volte il diametro del suo ugello: 0,8 mm per l'ugello comune da 0,4 mm (il valore iniziale). Le stampanti a resina fanno meno; consultare la guida della stampante.

Su un modello molto grande solo alcune facce inviano un raggio, e le altre prendono lo spessore dei vicini; la scheda indica quante sono state misurate.

## Svuota

Lo svuotamento mantiene l'esterno com'è ed elimina l'interno, lasciando pareti spesse quanto richiesto. Le stampe in resina usano meno resina e tirano meno il piano di costruzione; le stampe a filamento usano meno plastica di quanto farebbe il riempimento.

1. Selezionare il gruppo, il componente o la mesh, poi aprire {{ui:Svuota}}.
2. Impostare la **parete** (2 mm all'inizio) e la larghezza dei **fori di scarico**.
3. Per una stampa in resina, fare clic su {{ui:Posiziona un foro di scarico}}, poi fare clic sull'esterno del modello dove va: in basso, vicino al piano di costruzione, così la resina liquida può uscire. Posizionarne quanti servono; ciascuno appare come un cerchio blu ed è elencato con {{ui:Rimuovi}}.
4. {{ui:Anteprima}} indica quanto materiale lo svuotamento toglie.
5. {{ui:Svuotalo}} applica la modifica: un unico passaggio che {{key:Mod+Z}} annulla.

Il risultato è un solido chiuso che il controllo per la stampa 3D accetta: ModelCraft lo verifica prima e non cambia nulla se non passerebbe. Dove il modello è più sottile di due pareti, resta pieno. Il risultato è un gruppo le cui facce piane sono singole facce, così si può continuare a modellarlo con {{ui:Spingi/tira}}; un pezzo curvo svuotato con la griglia fine di solito ha troppe facce per questo e diventa invece una mesh, e la riga di stato lo indica.

:::tip
Per la maggior parte delle forme l'interno è l'esterno spostato verso l'interno esattamente della misura della parete. Dove angoli o parti sottili lo rendono impossibile, ModelCraft segue l'esterno alla distanza della parete su una griglia fine; la scheda indica allora quanto è vicino (entro una frazione di millimetro).
:::

## Ripara

{{ui:Ripara}} esamina il pezzo selezionato come lo farebbe lo slicer di una stampante, corregge in sicurezza ciò che può e elenca ogni correzione:

| Corregge | Cosa significa |
|---|---|
| Triangoli senza area | eliminati |
| Un triangolo disegnato due volte | ne resta una copia; una faccia disegnata schiena contro schiena con se stessa (senza spessore) viene rimossa |
| Pezzi isolati sotto 0,5 mm | rimossi |
| Triangoli rivolti nel verso sbagliato | girati per allinearsi ai vicini |
| Buchi, piani o no | chiusi con un ventaglio di nuovi triangoli dal centro di ciascun buco |
| Un pezzo rovesciato | girato verso l'esterno (un vuoto dentro un altro pezzo viene lasciato com'è: è previsto che sia rivolto verso l'interno) |

{{ui:Correggi quelli sicuri}} esegue tutte le correzioni in un unico passaggio che {{key:Mod+Z}} annulla, e la riga di stato elenca ciascuna correzione. Il pezzo corretto diventa un gruppo le cui facce piane sono singole facce. Se non si chiude ancora (resta qualcosa sotto **Da sistemare a mano**), oppure avrebbe troppe facce per un gruppo, diventa una mesh: le sue facce restano triangoli, e le facce piane sembrano comunque piane. La riga di stato indica quale dei due casi si è verificato. {{ui:Unisci parti sovrapposte}} funziona allo stesso modo.

Ciò che non può essere corretto in sicurezza è elencato sotto **Da sistemare a mano** e segnato in viola nella vista, con {{ui:Mostra}}:

- **Spigoli in cui si incontrano tre o più facce**: decidere quale faccia appartiene e cancellare le altre.
- **Un pezzo che attraversa se stesso**: spostare o ridisegnare quella parte. Vedere [Intersecare facce](topic:intersect).
- **Buchi troppo grandi o troppo intricati per chiuderli**: disegnare facce attraverso di essi.
- **Pezzi separati che si sovrappongono**: gli slicer li fondono comunque. {{ui:Unisci parti sovrapposte}} li rende un unico corpo chiuso (ricostruisce le facce dove si incontrano, per questo è un pulsante a parte, mai eseguito automaticamente).

Per i gruppi di spingi/tira si può anche correggere un problema alla volta in {{ui:Informazioni sull'entità}} › {{ui:Mostra problemi}} / {{ui:Correggi}}, che conserva le facce disegnate. Vedere [Strumenti solidi](topic:solids).

Correlati: [Preparare un modello per la stampa 3D](topic:print-3d) · [Lo stile Principiante](topic:beginner) · [Non ancora implementato](topic:not-built-yet#3d-printing)
