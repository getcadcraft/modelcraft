---
title: Prepara un modello per la stampa 3D
summary: Verificare che un modello sia chiuso e con le facce rivolte nel verso giusto, vederne dimensioni, base e sbalzi, correggere ciò che non va, e scaricarlo come STL o 3MF per lo slicer.
keywords: stampa 3d, stampante 3d, stampante, stampa, slicer, stl, 3mf, a tenuta stagna, chiuso, manifold, solido, fori, rovesciato, sbalzo, supporti, base, piano, millimetri, esporta, correggi, ripara, svuota, dimensione piano, principiante, spessore delle pareti, strumenti di stampa
from: 948e19af
---

Lo slicer di una stampante 3D richiede una forma chiusa: nessun foro, ogni faccia rivolta verso l'esterno, nulla che attraversi sé stesso. {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}} controlla proprio questo prima di scaricare il file.

## Verificare e scaricare

1. Selezionare ciò che si vuole stampare: uno o più gruppi o componenti, oppure alcune facce. Senza selezione, viene stampato tutto ciò che è mostrato.
2. Cliccare {{ui:Esporta}} nel gruppo {{ui:File}}, poi {{ui:Verifica per la stampa 3D (STL o 3MF)…}}.

   La finestra inizia con una riga: "Pronto per la stampa", quanti problemi correggere prima di stampare, oppure quanti esaminare per primi. Ogni problema ha tre parti: cosa non va, perché conta e cosa fare. Seguono le dimensioni in millimetri, il volume, il numero di triangoli e il piano della stampante.

3. Se la finestra elenca cose da correggere, cliccare {{ui:Correggi ciò che si può correggere}} (vedi sotto). La verifica si ripete da sola.
4. Cliccare {{ui:Scarica 3MF}} o {{ui:Scarica STL}}.

Viene stampato ciò che si vede: facce nascoste, gruppi e componenti nascosti, e tutto ciò che si trova su un tag nascosto viene escluso. Le dimensioni sono sempre in millimetri, l'unità che lo slicer si aspetta, qualunque sia l'unità mostrata dal modello.

:::tip
Preferire 3MF quando lo slicer lo legge: mantiene colori e unità. STL non ha né l'uno né l'altro, e gli slicer presuppongono i millimetri.
:::

## Cosa verifica il controllo

Questi bloccano una stampa o la rovinano, e fanno dire alla finestra "Non pronto per la stampa":

| Problema | Cosa significa | Cosa fare |
|---|---|---|
| Una faccia su un solo lato | Un foro: uno spigolo ha una faccia su un lato e nulla sull'altro | Disegnare la faccia mancante (una linea attraverso il vuoto spesso lo chiude), oppure usare {{ui:Correggi}} (sotto) |
| Condivisa da tre o più facce | Le facce si incontrano in un'aletta o in una parete dentro un solido | Eliminare la faccia interna |
| Facce rivolte in versi opposti | Alcune facce puntano verso l'interno, altre verso l'esterno | Selezionare le facce rivolte verso l'interno e cliccare {{ui:Inverti faccia}} in {{ui:Informazioni sull'entità}} |
| Rovesciato | Un'intera parte chiusa punta verso l'interno | Selezionare le sue facce e invertirle |
| Attraversa sé stesso | Una parte si piega attraverso sé stessa | {{ui:Modifica}} › {{ui:Altro}} › {{ui:Interseca con il modello}}, poi eliminare ciò che è dentro. Vedi [Interseca facce](topic:intersect) |

Questi sono avvisi: il modello si stampa, ma è meglio dare un'occhiata prima.

- **Parti separate si sovrappongono**, oppure **si toccano faccia a faccia**: gli slicer di solito le fondono in una sola. Per un file più pulito, unirle con {{ui:Solidi}} › {{ui:Unione}}. Vedi [Strumenti solidi](topic:solids).
- **Nulla poggia piatto sul fondo**: ruotare il modello in modo che una faccia poggi sul piano, altrimenti lo slicer aggiungerà supporti o un raft.
- **Si inclina verso l'esterno più di 45° dalla verticale**: quelle facce richiedono supporto. La finestra dice quanta superficie ne ha bisogno.
- **Meno di 1 mm di larghezza**: probabilmente modellato nell'unità sbagliata. Controllare l'unità nella barra di stato.

Una parte cava (un guscio chiuso dentro un altro) va bene: le sue facce puntano nella cavità, e il suo volume viene sottratto.

## Correggere i problemi

Sotto **Dove sono i problemi**, la finestra indica ogni gruppo o componente che ha qualcosa che non va (le facce sciolte non in un gruppo sono elencate come "Facce non in un gruppo"), con ciò che non va al suo interno. Un componente posizionato più volte è elencato una sola volta: correggerlo corregge ogni copia.

- {{ui:Mostra}} apre quel gruppo e seleziona gli spigoli e le facce sbagliati, così sono evidenziati.
- {{ui:Correggi ciò che si può correggere}} li corregge tutti insieme: chiude i fori i cui spigoli giacciono piatti, rimuove le facce all'interno della forma e gli spigoli isolati, e rivolge le facce nel verso giusto verso l'esterno. È un solo passo: {{key:Mod+Z}} lo annulla. La verifica poi si ripete e mostra ciò che rimane.

Ciò che non può essere corretto (un foro i cui spigoli non sono piatti, una parte che attraversa sé stessa) resta nell'elenco con ciò che va fatto a mano. {{ui:Ripara}} sotto **Strumenti di stampa** va oltre: chiude i fori che non sono piatti, rimuove i pezzi isolati e le facce doppie, ed elenca ogni correzione. Vedi [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools#repair). Si può anche correggere un gruppo alla volta: selezionarlo, poi usare {{ui:Mostra problemi}} e {{ui:Correggi}} in {{ui:Informazioni sull'entità}}. Vedi [Strumenti solidi](topic:solids).

## Una parte cava

{{ui:Svuota}} sotto **Strumenti di stampa** svuota una parte fino allo spessore delle pareti indicato, con fori di drenaggio dove si clicca. Vedi [Svuota](topic:print-tools#hollow).

Si può anche disegnare la cavità da sé: un gruppo chiuso dentro la parte, senza toccarla, con tutte le sue facce invertite in modo che siano rivolte verso la cavità. La verifica lo conta come cavità e ne sottrae il volume; non viene elencato come qualcosa da correggere.

## Il piano della stampante

Scegliere le dimensioni del piano della stampante in {{ui:Impostazioni}} › {{ui:ModelCraft}} › {{ui:Piano di stampa 3D}}. La verifica avvisa allora quando il modello è più grande del piano, ruotato in entrambi i sensi. Vedi [Impostazioni](topic:settings#3d-printer-bed).

## Strumenti di stampa

Sotto i risultati della finestra, **Strumenti di stampa** apre {{ui:Anteprima dei supporti}} (dove vanno i supporti e quanti circa), {{ui:Spessore delle pareti}} (pareti troppo sottili per essere stampate), {{ui:Svuota}} e {{ui:Ripara}}. Vedi [Supporti, spessore delle pareti, svuotamento e riparazione](topic:print-tools). {{ui:Dividi per la stampa}} taglia un modello troppo grande per il piano in pezzi con connettori e giunti numerati: vedi [Dividere un modello grande per la stampa](topic:print-split).

## Non controllato

La verifica non fa lo slicing: i dettagli troppo piccoli per l'ugello e i supporti reali sono compito dello slicer. Vedi [Non ancora implementato](topic:not-built-yet#3d-printing).
