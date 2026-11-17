---
title: Importare un modello SKP
summary: Importa un file .skp con i suoi gruppi, componenti, colori, texture, tag e spigoli morbidi, vedi cosa è arrivato e cosa no, e continua a modellare.
keywords: skp, importa, apri skp, componenti, gruppi, tag, layer, materiali, colori, texture, nascosto, spigoli morbidi, 3D Warehouse, migrazione, passaggio
from: 325d3c81
---

ModelCraft legge i file SketchUp (`.skp`) con il proprio lettore, nella pagina. Nulla viene caricato, e funziona offline ogni volta che funziona ModelCraft. Sono stati testati i file da SketchUp 3 fino al 2026.

## Importare il file

1. Fai clic su {{ui:Import}} nel gruppo {{ui:File}} (oppure trascina il file `.skp` sulla vista 3D).
2. Scegli il file.

   La barra di stato indica "Lettura di house.skp…" durante la lettura, poi ciò che è arrivato, ad esempio "Importato house.skp (SketchUp 25.0.575): 1240 facce, 6 componenti, in un gruppo."

L'intero modello arriva come un unico gruppo con il nome del file, selezionato, e la vista si avvicina ad esso. Un {{key:Mod+Z}} lo rimuove di nuovo, tag compresi.

:::tip
Esplodi il gruppo di importazione ({{ui:Entity info}} › {{ui:Explode}}) quando vuoi che il suo contenuto sia sciolto nel tuo modello anziché in un unico gruppo.
:::

## Cosa arriva

- **Facce** con i loro fori, e **spigoli** che non fanno parte di una faccia.
- **Gruppi** che arrivano come gruppi, e **componenti** come componenti: ogni copia di un componente è un posizionamento di una sola definizione, quindi modificarne una cambia tutte le altre, come in SketchUp. I nomi arrivano con essi.
- **Colori.** Il materiale proprio di una faccia le dà il suo colore. Un materiale dipinto su un gruppo o componente diventa la vernice di quel posizionamento, quindi le facce al suo interno senza colore proprio lo ereditano, come in SketchUp. Un componente dipinto di rosso in un punto e di blu in un altro resta un solo componente.
- **Texture.** Una faccia dipinta con un materiale con texture arriva con la sua texture, applicata alla faccia come nel file, e lo stile {{ui:Shaded}} la mostra. L'immagine viene conservata nel file ModelCraft quando salvi, e anche un [render di un'immagine](topic:render) la mostra. Un materiale con texture applicato a un intero gruppo o componente dà a quella copia solo il colore del materiale.
- **Tag.** Un gruppo o componente su un tag di SketchUp riceve un tag ModelCraft con lo stesso nome, elencato in {{ui:Tags}}, mostrato o nascosto come era in SketchUp. Se il tuo modello ha già un tag con quel nome, viene usato quello.
- **Gli elementi nascosti arrivano nascosti:** facce, spigoli, gruppi e componenti, e facce e spigoli su un tag nascosto. Vedi ciò che SketchUp mostrava, e nulla va perso: {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} li mostra. Vedi [Nascondere, isolare e mostrare di nuovo](topic:hide-isolate).
- **Gli spigoli morbidi e lisci restano morbidi**, così le superfici curve appaiono ancora lisce.
- **Le dimensioni** risultano corrette in qualsiasi unità: i file SketchUp sono in pollici al loro interno, e ModelCraft li converte.

## Cosa non arriva

La barra di stato indica cosa è stato escluso, con i conteggi.

- **Alcune texture** conservano solo il colore del loro materiale: una texture mancante dal file, un'immagine in un formato che i browser non possono mostrare (come un file Photoshop), o una texture senza dimensione. Le facce con una texture proiettata arrivano con la texture posizionata in modo approssimativo.
- **Tag su facce e spigoli isolati.** ModelCraft applica i tag solo a gruppi e componenti, quindi una faccia o uno spigolo con un proprio tag arriva senza tag, e la barra di stato li conta. Trasforma queste facce in un gruppo ({{key:Shift+G}}) e assegna il tag al gruppo.
- **Immagini** inserite nel modello, testi, quote, guide, piani di sezione, scene e stili.

## Problemi

- "Questo non è un file SketchUp." oppure "Questo file SketchUp è danneggiato: …": il file è troncato oppure è qualcos'altro con un nome `.skp`. Salvalo di nuovo da SketchUp, oppure richiedi una copia nuova.
- Un file di una versione di SketchUp più recente di quelle note a ModelCraft viene rifiutato, con indicata la versione rilevata.
- Un modello fatto solo di immagini, testi o quote segnala di non avere nulla da mostrare.

## Riportare il modello indietro

ModelCraft non può salvare file `.skp`. Esporta in Collada ({{ui:Export}} › `.dae`) e importa quel file in SketchUp: gruppi, componenti e colori passano; le texture passano come colore del loro materiale. Vedi [Esportare il modello](topic:export-model).
