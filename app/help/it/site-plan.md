---
title: Modellare su una planimetria da DWG o DXF
summary: Importare una planimetria o una pianta CAD come linee sul terreno, rispondere alla domanda sulle unità e tracciarla in facce e masse.
keywords: planimetria, dwg, dxf, cad, importa, schizzo, foto di uno schizzo, schizzo a mano, schizzo su tovagliolo, foto, carta, colori della penna, blocchi dinamici, stati di visibilità, testo, tratteggio, spline, ellisse, faccia 3d, traccia, pianta, lotto, confine di proprietà, unità, sottofondo, contesto
from: 3415dc96
---

ModelCraft può importare le linee di un disegno CAD 2D, di una planimetria o di una pianta, e stenderle sul terreno così da poterci modellare sopra.

## Importare il disegno

1. Fare clic su {{ui:Importa}} nel gruppo {{ui:File}} (oppure trascinare il file sulla vista 3D).
2. Scegliere un file `.dwg` o `.dxf`.

   Un DWG grande richiede un momento: la barra di stato indica "Lettura di plan.dwg…" finché non è caricato.

3. Se il disegno non indica quali siano le sue unità, una finestra intitolata "Unità del disegno" chiede: "Qual è un'unità del disegno?" Scegliere {{ui:Pollici}}, {{ui:Piedi}}, {{ui:Millimetri}} o {{ui:Metri}}. La maggior parte delle planimetrie statunitensi è disegnata in piedi, le piante architettoniche in pollici, e le planimetrie metriche in millimetri.

   Il disegno arriva come gruppo di spigoli sul terreno, selezionato, e la vista si avvicina ad esso. La barra di stato indica quanti spigoli sono arrivati, per esempio "Importato site.dwg: 1697 spigoli sul terreno, in un gruppo. Esplodere il gruppo per disegnarci direttamente."

## Cosa entra

- Linee, polilinee (archi compresi), cerchi e archi, e blocchi con tutto ciò che contengono, solo dallo **spazio modello**. Le curve diventano brevi tratti rettilinei.
- Linee, polilinee, archi, cerchi, ellissi e spline atterrano piatti sul terreno, come spigoli.
- I **tratteggi** diventano facce sul terreno, con le loro isole come fori, così si può spingere e tirare subito un'area tratteggiata.
- Le **facce 3D** e i riempimenti solidi diventano facce; le facce 3D mantengono le loro altezze.
- Il **testo** (testo su una riga, testo multilinea e valori di attributo) viene disegnato come spigoli in un carattere semplice a tratto singolo, all'altezza, all'angolo e all'allineamento propri del testo. Il suo carattere non è quello del disegno, quindi le parole possono risultare un po' più lunghe o più corte. I caratteri per cui il carattere non ha forma vengono disegnati come piccoli riquadri e contati.
- Le **quote** vengono disegnate come le mostra il disegno (le loro linee, frecce e testo, come spigoli e facce).
- I **blocchi dinamici** entrano come li mostra il disegno: ogni blocco inserito nello stato di visibilità con cui è stato salvato, e solo le linee di quello stato. La barra di stato li elenca con gli stati mostrati e con gli altri stati di ciascuno, per esempio "Receptacle mostrato come Duplex ×38, GFI ×7 (stati: Duplex, GFI)". ModelCraft non cambia stato.
- I **solidi 3D, le regioni e i corpi** (i dati ACIS del disegno) entrano come gruppi propri: un solido chiuso come solido, una regione o un corpo aperto come facce. Le facce piatte entrano intere; le facce curve (cilindri, coni, sfere, tori, semplici superfici spline) come piccoli triangoli con bordi morbidi tra loro, così si vedono solo gli spigoli propri del solido. Una faccia su un altro tipo di superficie viene omessa ed elencata: "Non ancora disegnato (solidi 3D): …".
- Non importati: punti, tabelle, multiindicazioni, immagini e altri tipi di oggetto. La barra di stato li elenca per tipo, come "Non importato: 12 POINT." Anche ciò che sta su un layout (spazio carta) viene escluso, senza elenco.
- I layer non vengono conservati: tutte le linee entrano allo stesso modo.

Se il disegno è lontano dalla sua origine (coordinate del sistema State Plane, per esempio), viene comunque importato, ma può atterrare lontano dall'origine di ModelCraft. I disegni che superano i 10.000 km dalla loro origine vengono rifiutati: spostare prima il disegno più vicino a 0,0 nel programma CAD.

## Tracciare in facce

Le linee importate raramente si chiudono da sole in facce. Ci sono due modi di lavorare:

**Tenere la planimetria come sottofondo (consigliato)**

1. Lasciare la planimetria come gruppo proprio.
2. Disegnare il proprio edificio sopra con {{ui:Rettangolo}} e {{ui:Linea}}, agganciandosi agli angoli della planimetria ("punto finale") e ai bordi ("su spigolo").
3. Spingere e tirare le facce verso l'alto. La planimetria resta intatta sotto, e si può cancellare l'intero gruppo più tardi con un solo clic.

Lo snap funziona tra i gruppi: si può agganciare agli angoli della planimetria senza aprirla.

**Disegnare sulle linee della planimetria stessa**

1. Selezionare il gruppo della planimetria e fare clic su {{ui:Esplodi}}. Le sue linee diventano spigoli liberi.
2. Dove un contorno chiuso dovrebbe essere una faccia, disegnare una linea sopra uno qualsiasi dei suoi spigoli con {{ui:Linea}}, da angolo ad angolo. Quando il contorno è chiuso e piatto, la faccia di solito si riempie. Se non lo fa, cercare un vuoto o una sovrapposizione nel contorno e disegnarci sopra.
3. Spingere e tirare.

Questo funziona meglio su una planimetria pulita. Su un rilievo affollato, tracciare sopra è più rapido.

## Problemi

- "Questo DXF è binario. Salvarlo come DXF ASCII e riprovare." Salvare di nuovo il DXF dal programma CAD come ASCII (testo).
- "…non ha linee, archi o cerchi nello spazio modello da importare." Il disegno è probabilmente tutto sui layout, oppure tutto testo e tratteggi.
- "Questo disegno non può essere letto (…). Potrebbe essere danneggiato, o salvato in una versione DWG che il lettore non gestisce…" Le parentesi indicano il motivo, per esempio "la versione DWG AC1009 non è supportata". Salvarlo come DXF, oppure come DWG da AutoCAD 2000 a 2018, dal programma CAD.
- La planimetria ha la dimensione sbagliata: si è scelta l'unità sbagliata. Annullare ({{key:Mod+Z}}) e importare di nuovo, oppure [scalare](topic:rotate-scale) il gruppo del fattore giusto (12 tra piedi e pollici, 25.4 tra pollici e millimetri).

Per trasformare le curve di livello in terreno da modellare, vedere [Terreno](topic:terrain).

## Da una foto di uno schizzo a mano

**File › Importa una foto di uno schizzo…** accetta una foto di uno schizzo su carta (JPEG, PNG o TIFF; anche una foto scattata direttamente con il telefono va bene) e crea lo stesso tipo di spigoli sul terreno. Indicare su quale carta è (oppure lasciare che la trovi, presa come A4) e la scala dello schizzo, per esempio 1 : 100. Il bordo del foglio viene trovato e la foto raddrizzata, l'inchiostro viene tracciato in linee e archi, e ogni colore di penna (nero, rosso, blu, verde) diventa un gruppo proprio con un'etichetta (**Schizzo nero**, **Schizzo rosso**, …), il tutto dentro un gruppo unico con il nome della foto. È un solo passaggio di annullamento, e tutto avviene su questo computer: non viene inviato nulla da nessuna parte.

Quando non si trova alcun bordo di carta, l'intera foto viene presa come foglio e la riga di stato lo indica: misurare qualcosa di noto e scalare il gruppo se è sbagliato. Tracciare le linee in facce come sopra.
