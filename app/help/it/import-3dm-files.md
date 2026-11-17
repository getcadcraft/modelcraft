---
title: Importare un modello .3dm
summary: Importa un file .3dm con le sue mesh, superfici, curve, blocchi, layer e colori; da dove provengono i triangoli e cosa viene escluso.
keywords: 3dm, importa, nurbs, polysurface, brep, superfici, mesh di rendering, estrusione, curve, blocchi, layer, tag, colori, unità, passaggio, migrazione
from: 3cf29879
---

ModelCraft legge i file `.3dm` con il proprio lettore, nella pagina. Nulla viene caricato, e funziona offline ogni volta che funziona ModelCraft. Sono stati testati i file salvati nei formati delle versioni 5, 6, 7 e 8; quelli più vecchi (versioni da 2 a 4) dovrebbero aprirsi, ma non sono ancora stati provati.

## Importare il file

1. Fai clic su {{ui:Import}} nel gruppo {{ui:File}} (oppure trascina il file `.3dm` sulla vista 3D).
2. Scegli il file.

   La barra di stato indica "Lettura di chair.3dm…" durante la lettura, poi ciò che è arrivato, ad esempio "Importato chair.3dm: 14 mesh (8330 facce), 8 curve, 5 posizionamenti di blocchi, 3 layer come tag. Superfici: 7 facce dalle mesh salvate nel file, 29 tassellate da CadCraft."

L'intero modello arriva come un unico gruppo con il nome del file, selezionato, e la vista si avvicina ad esso. Un {{key:Mod+Z}} lo rimuove di nuovo, tag compresi.

## Da dove provengono i triangoli

ModelCraft lavora con facce e mesh, quindi ogni superficie del file arriva come [mesh](topic:meshes) di piccoli triangoli piatti. Per ogni faccia di una polysurface (e per ogni estrusione) ModelCraft prende, in quest'ordine:

1. **La mesh di rendering salvata nel file.** La maggior parte dei programmi di modellazione salva con ogni superficie la mesh mostrata a schermo; quando c'è, ModelCraft la usa così com'è.
2. **La propria tassellazione**, quando il file non ha una mesh salvata: piani, superfici NURBS, superfici di rivoluzione (sfere, coni, tori, forme al tornio), curve estruse ed estrusioni (con i loro fori e tappi terminali), ritagliate dai loro spigoli. Le facce di una stessa polysurface condividono i punti dei loro spigoli, quindi una polysurface chiusa arriva come mesh chiusa. Le aree curve vengono suddivise finché i triangoli non rientrano entro circa lo 0.15 % della dimensione dell'oggetto dalla superficie reale.
3. **Nulla**, per una faccia di un tipo di superficie che ModelCraft non legge ancora. La barra di stato indica quante facce, e di quale tipo.

La parte "Superfici:" della barra di stato indica quante facce provengono da mesh salvate e quante ModelCraft ha tassellato. Gli spigoli interni a una faccia del file sono morbidi e quelli tra due facce sono netti, così una faccia curva risulta ombreggiata in modo liscio.

:::tip
Per le forme più fedeli, salva il file con le sue mesh di rendering nel programma che lo ha creato (di solito è l'impostazione predefinita; un'opzione "salva ridotto" le esclude).
:::

## Cosa arriva

- **Mesh** con i loro colori dei vertici e coordinate di texture.
- **Polysurface, superfici ed estrusioni**, come descritto sopra.
- **Curve** (linee, polilinee, archi, cerchi, curve NURBS e curve unite da esse) come [spigoli](topic:curves), un gruppo di spigoli per ogni layer.
- **Blocchi** che diventano [componenti](topic:groups-components): ogni posizionamento di un blocco è un posizionamento di un solo componente, quindi modificarne una copia le cambia tutte. I blocchi all'interno di altri blocchi vengono mantenuti.
- **Layer** che diventano [tag](topic:tags) con il nome completo del layer ("Furniture::Chairs"), nascosti quando il layer era spento. Il posizionamento di ogni oggetto porta il tag del proprio layer.
- **Colori.** Il colore di un oggetto deriva da dove lo indica il file: il suo colore, quello del suo layer o il colore di base del suo materiale. Diventa la vernice delle sue facce.
- **Gli oggetti nascosti arrivano nascosti**; {{ui:Unhide all}} li mostra.
- **Unità:** il file indica la sua unità; il modello arriva alla sua dimensione reale.

## Cosa viene escluso (e segnalato)

La parte "Note:" della barra di stato indica tutto ciò che non è arrivato, con il numero:

- punti e nuvole di punti, testo, punti di testo, quote, linee di richiamo, tratteggi, luci, piani di ritaglio e dettagli di layout;
- oggetti SubD: convertili in mesh o polysurface nel programma che ha creato il file, prima;
- facce su superfici offset e altri tipi di superficie che ModelCraft non legge ancora, quando il file non ha salvato una mesh per esse;
- blocchi collegati da altri file (viene letto solo il file che importi);
- estrusioni con estremità inclinate a unghia, che arrivano con estremità squadrate.

Le texture dei materiali, le impostazioni di rendering, le viste con nome, i gruppi e i testi utente non vengono letti; un materiale fornisce solo il suo colore di base.

## Limiti

File fino a 300 MB. Un file danneggiato indica il problema e non aggiunge nulla; un oggetto che non può essere letto viene escluso e conteggiato, e il resto viene importato.
