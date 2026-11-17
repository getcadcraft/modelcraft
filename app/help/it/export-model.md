---
title: Esportare un modello per altri programmi
summary: Scegliere l'esportazione giusta per il rendering, il web, la stampa 3D, il BIM e BimCraft, e verificare cosa conserva ciascuna.
keywords: stampa, 3mf, pdf, carta, immagine, png, figura, screenshot, render, salva vista, esporta, condividi, rendering, gltf, glb, collada, dae, obj, stl, stampa 3d, ifc, bim, bimcraft, invia, altro software
from: 9e13e80d
---

Esportare crea una copia del modello in un altro formato. Conservare anche il file `.modelcraft`: è l'unico file che mantiene tutto, e l'unico che ModelCraft apre direttamente.

## Esportare

1. Salvare prima ({{key:Mod+S}}), così il file di lavoro è al sicuro.
2. Fare clic su {{ui:Esporta}} nel gruppo {{ui:File}}.
3. Scegliere il formato. Il browser lo scarica, con un nome simile a quello del modello.

Viene esportato l'intero modello. Per esportare una sola parte: salvare, cancellare il resto, esportare, poi annullare o riaprire.

## Quale formato

| Si vuole | Scegliere | Note |
|---|---|---|
| Aprirlo in un altro modellatore 3D | {{ui:Collada (.dae)}} | Mantiene gruppi, gruppi annidati, componenti (condivisi, non copiati), nomi e colori. Z in alto, metri. |
| Renderizzarlo, o usarlo in un programma di visualizzazione | {{ui:OBJ (.obj)}} o {{ui:glTF binario (.glb)}} | OBJ è il più diffuso; scrive ogni posizionamento di gruppo come oggetto separato, ma non ha colori né componenti condivisi. glTF mantiene componenti e colori. |
| Pubblicarlo sul web, in un motore di gioco o in AR | {{ui:glTF binario (.glb)}} | Un unico file con tutto dentro. |
| Stamparlo in 3D | {{ui:Verifica per la stampa 3D (STL o 3MF)…}} | Controlla che il modello sia chiuso e che le facce siano orientate correttamente, poi scrive STL o 3MF in millimetri. Vedi [Preparare un modello per la stampa 3D](topic:print-3d). {{ui:STL per la stampa (.stl, millimetri)}} scrive l'intero modello senza il controllo. |
| Aprirlo in BimCraft o in un altro programma BIM | {{ui:IFC per BimCraft (.ifc)}} | Ogni gruppo o componente di primo livello diventa un elemento dell'edificio. |

La barra di stato conferma ogni esportazione, per esempio "Esportato House.stl (millimetri)." o "Esportato House.dae (Collada 1.4.1, Z in alto, metri; i componenti restano condivisi)."

## Prima di esportare

- **Raggruppare gli oggetti.** Collada, glTF e IFC mantengono gruppi e componenti come oggetti separati. La geometria sciolta esce come un unico blocco; in IFC diventa un elemento chiamato "Geometria sciolta".
- **Dare loro un nome.** I nomi di gruppi e componenti passano in Collada e IFC, quindi un muro chiamato "Muro nord" arriva come "Muro nord".
- **Controllare la direzione delle facce.** Le facce che appaiono grigio-bluastre sull'esterno finiranno rivolte verso l'interno nell'esportazione. Correggerle con {{ui:Inverti faccia}} (vedi [Cancellare e pulire](topic:erase#a-face-facing-the-wrong-way)).
- **Per la stampa,** rendere le parti solidi chiusi: selezionare ogni gruppo e controllare che {{ui:Informazioni sull'entità}} dica "Solido: Sì". Poi scalare il modello alla dimensione stampata, o scalarlo nel software della stampante.

## Inviare un modello a BimCraft

1. Rendere ogni parte dell'edificio un gruppo o un componente e darle un nome.
2. Scegliere {{ui:Esporta}}, poi {{ui:IFC per BimCraft (.ifc)}}.
3. Aprire il file `.ifc` scaricato in BimCraft.

Per la volumetria concettuale, usare {{ui:Esporta}} › {{ui:Volumetria verso BimCraft…}}: ogni gruppo va come opzione di volumetria con piani, superfici di piano e volume. Vedi [Inviare volumetrie a BimCraft](topic:massing-to-bimcraft).

L'esportazione IFC semplice non ha un collegamento diretto tra le due app. L'IFC ha un solo piano, e ogni elemento è un proxy generico di elemento edilizio senza tipo né proprietà: porta solo forma e nome. I gruppi chiusi diventano forme solide; quelli aperti diventano superfici.

## Righe senza facce

Gli spigoli che non fanno parte di alcuna faccia (linee tipo guide, una planimetria del sito importata) vanno in OBJ e Collada come linee. glTF e STL non hanno spazio per esse e le escludono. Guide e scene non vengono esportate in nessun formato.

## Salvare la vista come immagine

{{ui:Esporta}} › {{ui:Immagine della vista (.png)}} salva esattamente ciò che mostra la vista 3D, alla dimensione sullo schermo. {{ui:Immagine al doppio delle dimensioni (.png)}} la salva due volte più larga e due volte più alta (per la stampa o una diapositiva nitida), con quote e segni ridisegnati a quella dimensione anziché stirati.

Per un'immagine che somiglia alla luce del giorno (cielo, sole, ombre morbide, vetri), usare {{ui:Esporta}} › {{ui:Render di un'immagine…}} invece: vedi [Render di un'immagine](topic:render).

Per un'immagine pulita, attivare prima la [vista presentazione](topic:styles-shadows#presentation-view) ({{key:Shift+P}}): assi, guide, contorni di sezione e selezione vengono esclusi. Impostare la camera, lo stile e le ombre come si desidera, oppure andare a una [scena](topic:scenes); per salvare un filmato in movimento delle proprie scene, usare {{ui:Esporta animazione}} nel pannello {{ui:Scene}}.

## Stampare la vista, o salvarla come PDF

- {{ui:Esporta}} › {{ui:PDF della vista (.pdf)}} salva un PDF di una pagina: la vista al doppio della sua dimensione sullo schermo, con le sue quote, su una pagina A4 (Letter quando il modello è in piedi e pollici), in orizzontale, con una riga sotto che riporta il nome del file, la data e l'unità.
- {{ui:Esporta}} › {{ui:Stampa la vista…}} porta la stessa pagina nella finestra di stampa del browser. Scegliere una stampante, oppure "Salva come PDF".

La pagina mostra la vista così com'è: una vista in prospettiva non ha scala. Per un disegno in scala, disattivare {{ui:Prospettiva}} e guardare da {{ui:Sopra}} o {{ui:Anteriore}}, e aggiungere [quote](topic:dimensions) per le misure importanti. [La vista presentazione](topic:styles-shadows#presentation-view) esclude assi, guide e selezione; le quote restano.
