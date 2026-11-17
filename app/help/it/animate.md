---
title: Anima qualsiasi proprietà, modellala con curve e combina le clip
summary: L'area di lavoro Animate imposta chiavi per posizione, rotazione e dimensione di un oggetto, per luminosità, apertura e colore di una lampada, per l'obiettivo e per le shape key di una mesh; le armature piegano una mesh con ossa e pesi dipinti; IK e vincoli fanno sì che ossa e oggetti raggiungano, guardino, copino, restino entro limiti, dipendano o seguano altri oggetti; i corpi rigidi cadono, si impilano e urtano e vengono calcolati come chiavi; i driver impostano un valore a partire da altri; la vista Curve della timeline modella ogni variazione con maniglie Bézier e cicli, mentre la vista Clip salva le animazioni come azioni che si possono riposizionare e combinare.
keywords: fisica, corpo rigido, corpi rigidi, simulazione, simula, cadere, caduta, gravità, urtare, collisione, impilare, rimbalzo, attrito, bake, calcolato, ik, cinematica inversa, vincolo, vincoli, guarda verso, traccia verso, mira, copia trasformazioni, copia posizione, copia rotazione, limita rotazione, limiti, figlio di, genitore, segui percorso, percorso, polo, fabrik, catena, armatura, armature, rig, rigging, ossa, osso, scheletro, skin, skinning, pesi, pittura pesi, gruppi di vertici, pesi automatici, bone heat, posa, modalità posa, quaternione duale, interpolazione lineare, shape key, morph, target di morph, forme fuse, espressione facciale, driver, espressioni, area di lavoro animate, anima, animazione, fotogramma chiave, chiave, chiavi, proprietà, trasformazione, posizione, rotazione, scala, lampada, luce, luminosità, colore, obiettivo, campo visivo, fov, editor grafico, curve, curva, bezier, maniglie, tangente, interpolazione, ciclo, cicli, ripeti, loop, avanti e indietro, offset, dope sheet, seleziona chiavi, selezione a riquadro, copia chiavi, incolla chiavi, allunga chiavi, scala chiavi, clip, azioni, nla, combina, miscela, influenza, stash
from: 16d8e12f
---

La [timeline](topic:animation) sposta la camera e interi gruppi e componenti. L'area di lavoro **Animate** imposta chiavi per molto di più, e la timeline ha due viste in più per modellare e riutilizzare le chiavi impostate.

## Apertura

Scegliere {{ui:Anima}} nell'elenco delle aree di lavoro sulla barra degli strumenti. La timeline si apre sotto la vista, la barra degli strumenti mostra i gruppi di Animate ({{ui:Chiavi}}, {{ui:Riproduci}}, {{ui:Timeline}}) e il pannello a destra elenca ciò che si può impostare alla testina di riproduzione.

## Impostare una proprietà

Il pannello elenca, alla testina di riproduzione:

- **Oggetto scelto**: i tre campi {{ui:Posiziona}}, {{ui:Rotazione (°)}} e {{ui:Dimensione}}, tre numeri ciascuno. Digitare un numero e premere {{key:Enter}}: viene impostato alla testina di riproduzione e l'oggetto si sposta lì. Il rombo accanto a una riga imposta il valore com'è ora; un rombo pieno indica che c'è già una chiave alla testina.
- **Lampade**: per ciascuna lampada, {{ui:Luminosità (lm)}}, {{ui:Apertura (°)}} (lampade a faretto) e {{ui:Colore}}.
- **Camera**: {{ui:Angolo dell'obiettivo (°)}}, per uno zoom mentre la camera si muove.

{{ui:Chiave di trasformazione}} (o {{key:I}}) imposta posizione, rotazione e dimensione di ogni gruppo o componente scelto in una volta sola; {{ui:Chiave camera}} (o {{key:K}}) imposta la camera. Con {{ui:Chiave automatica}} attiva, un gruppo di cui posizione, rotazione e dimensione sono impostate in questo modo riceve una nuova chiave ogni volta che lo si sposta.

Le rotazioni sono tre angoli, attorno a X, poi Y, poi Z. Una rotazione impostata oltre 180° prosegue nello stesso verso (190° resta 190°, non −170°), così una ruota può girare più volte.

:::tip
Un gruppo con chiavi impostate con {{ui:Chiave selezione}} sulla timeline ha chiavi di posizione complessiva. Il pulsante curva sulla sua riga le trasforma in curve di posizione, rotazione e dimensione (con la stessa posizione a ogni chiave), così si possono modellare in {{ui:Curve}}.
:::

## Shape key (morph)

Una **shape key** è un'altra forma della stessa [mesh](topic:meshes): un sorriso su un volto, il rigonfiamento di una porta, una foglia piegata. Il suo cursore sfuma dalla mesh com'è (0) a quella forma (1); più shape key si sommano.

1. Scegliere una mesh nell'area di lavoro Animate: il pannello mostra le sue {{ui:Shape key}}.
2. Fare clic su {{ui:Aggiungi shape key}}. ModelCraft passa all'[area di lavoro Mesh](topic:mesh-edit) con la nuova shape key in modifica: spostare i punti, estrudere, scolpire, per trasformare la mesh nella forma desiderata.
3. Tornare a {{ui:Anima}} e fare clic su {{ui:Fine}}. La mesh torna com'era, e la chiave conserva la modifica.

Poi trascinare il cursore della chiave (o digitare un valore) per sfumarla. Il rombo imposta il valore alla testina di riproduzione, quindi una chiave può crescere e svanire nel tempo; una volta che ha una traccia, un nuovo valore viene impostato alla testina. La matita modifica di nuovo la forma della chiave (la mesh la mostra per intero fino a {{ui:Fine}}; {{ui:Annulla}} lascia la chiave com'era), l'occhio disattiva la chiave, il cestino la rimuove.

Un vertice aggiunto durante la modifica di una chiave appartiene alla mesh stessa: resta dove è stato messo, in ogni forma.

:::note
Le shape key agiscono sulla mesh prima dei suoi [modificatori](topic:modifiers): un modificatore Subdivision leviga la forma sfumata. Le immagini e i video di render mostrano le chiavi a ogni fotogramma.
:::

## Armature: ossa che piegano una mesh

Un'**armatura** è un insieme di ossa dentro una [mesh](topic:meshes). Si posano le ossa e la mesh le segue, ogni punto nella misura indicata dai suoi **pesi**.

1. Scegliere la mesh nell'area di lavoro Animate e fare clic su {{ui:Aggiungi un'armatura}} nel pannello (oppure su {{ui:Aggiungi osso}} nel gruppo {{ui:Rig}}): il primo osso corre al centro della mesh a partire dalla sua base.
2. Con un osso scelto, {{ui:Aggiungi un osso figlio}} aggiunge il successivo dalla sua punta. Impostare {{ui:Testa}}, {{ui:Punta}}, {{ui:Rollio (°)}} e da cosa {{ui:Dipende da}} nel pannello; un osso che dipende da un altro si muove con esso. Deselezionare {{ui:Muove la mesh}} per un osso che serve solo a guidare gli altri.
3. Fare clic su {{ui:Pesi automatici}}: ogni osso prende i punti più vicini, e la presa si distribuisce in modo uniforme sulla mesh, così i punti tra due ossa ne condividono l'effetto. {{ui:Solo le ossa più vicine}} è una divisione più rapida e netta.

**Posare** le ossa con {{ui:Posa}} ({{key:P}}): fare clic su un osso per sceglierlo, trascinare per ruotarlo attorno all'asse della vista, trascinare con {{key:Shift}} per spostarlo. Oppure digitare i suoi valori di {{ui:Posiziona}}, {{ui:Rotazione (°)}} e {{ui:Dimensione}} sotto {{ui:Posa}}; le rotazioni sono negli assi propri dell'osso, a partire dalla posizione di riposo. I rombi e {{ui:Inserisci chiavi per tutta la posa}} impostano la posa alla testina di riproduzione; una volta che un osso ha chiavi, posarlo imposta una chiave lì. {{ui:Reimposta questo osso}} e {{ui:Reimposta la posa}} riportano le ossa a riposo.

**Dipingere i pesi** ({{key:W}}) per l'osso scelto: la mesh si mostra a riposo, ogni faccia colorata in base a quanto la tiene quell'osso — rosso tutto, blu nulla. Dipingere per aggiungere presa ({{key:Mod}} la toglie, {{key:Shift}} leviga); {{ui:Dimensione (px)}} e {{ui:Intensità}} impostano il pennello. Con {{ui:Mantieni la somma dei pesi di ogni punto pari a 1}} attivo, dare più peso a un osso ne toglie agli altri. Ogni tratto è un passo di annullamento del modello.

{{ui:Pelle}} sceglie come si muove un punto tra le ossa: {{ui:Lineare (veloce)}} mescola i movimenti delle ossa e stringe un po' un'articolazione piegata; {{ui:Quaternione duale (mantiene il volume nelle giunzioni)}} ruota il punto attorno all'articolazione, così un gomito o un ginocchio mantiene il proprio spessore (in quel caso la {{ui:Dimensione}} di un osso non allunga la pelle).

:::note
Le shape key vengono prima, poi l'armatura, poi i [modificatori](topic:modifiers). La vista, le immagini e i video mostrano tutti la mesh posata; i pesi di una mesh sono salvati con essa, le ossa e la loro posa con l'animazione.
:::

## IK e vincoli

Un **vincolo** sposta un osso o un oggetto dopo le sue chiavi, secondo una regola. Scegliere l'oggetto (oppure, in un'armatura, l'osso) e aggiungerne uno sotto {{ui:Vincoli di …}}; più vincoli si eseguono nell'ordine elencato (le frecce cambiano l'ordine), e ciascuno ha {{ui:Intensità}} (da 0 a 1, impostabile con il suo rombo come qualsiasi proprietà) e un interruttore on/off.

| Vincolo | Per | Cosa fa |
|---|---|---|
| {{ui:Raggiungi (IK)}} | Ossa | L'osso e le ossa da cui dipende ({{ui:Ossa nella catena}}) si piegano in modo che la punta raggiunga il bersaglio. Con due ossa e un {{ui:Polo (la piega punta verso di esso)}}, il gomito o il ginocchio punta verso il polo; catene più lunghe si piegano con dolcezza. Fuori portata, la catena punta dritta verso il bersaglio. |
| {{ui:Guarda verso}} | Entrambi | Ruota in modo che {{ui:Asse che punta}} sia rivolto al bersaglio, mantenendo {{ui:Asse mantenuto in alto}} il più possibile verso l'alto. |
| {{ui:Copia trasformazioni}} | Entrambi | Prende posizione, rotazione o dimensione del bersaglio, quelle spuntate. |
| {{ui:Limiti}} | Entrambi | Mantiene la propria posizione, rotazione (in gradi) o dimensione tra un {{ui:min}} e un {{ui:max}} per asse; lasciare vuota una coppia per lasciare libero quell'asse. |
| {{ui:Figlio di}} | Entrambi | Si muove con il bersaglio come se ne dipendesse, a partire dalla posizione in cui si trovavano entrambi quando si è scelto il bersaglio. |
| {{ui:Segui percorso}} | Oggetti | Sta su un [oggetto curva](topic:curves) a {{ui:Lungo la curva}} (0 all'inizio, 1 alla fine; impostarlo con una chiave per farlo percorrere) e, con {{ui:Ruota lungo la curva}}, si orienta lungo di essa. |

Un bersaglio è un altro oggetto nel gruppo aperto, un osso della stessa armatura, oppure {{ui:Un punto}} che si digita (il punto di un oggetto è nelle coordinate del modello, quello di un osso in quelle della sua mesh). Per una gamba IK, mettere il bersaglio dove dovrebbe stare il piede e impostarlo con una chiave, oppure impostare con una chiave {{ui:Intensità}} per passare la gamba tra le chiavi e l'IK.

:::tip
Un oggetto che guarda un oggetto che segue un percorso lo vede sul percorso: ModelCraft calcola prima i bersagli, qualunque sia l'ordine degli oggetti.
:::

## Fisica: cadere, impilare e urtare

Far cadere gli oggetti e farli urtare tra loro, poi conservare il risultato come chiavi.

1. Scegliere un gruppo, un componente o una mesh e impostare il suo {{ui:Corpo rigido}} in {{ui:Fisica}}: {{ui:Cade e urta}} (si muove) oppure {{ui:Resta fermo, fa da ostacolo}} (un tavolo, un muro, una rampa). Dare a quello che cade la sua {{ui:Forma}} — {{ui:Box (i suoi limiti)}} oppure {{ui:Sfera (attorno ai suoi limiti)}} — la sua {{ui:Massa (kg)}}, {{ui:Attrito}} e {{ui:Rimbalzo}} (0 tonfo, 1 rimbalza indietro fino alla stessa altezza).
2. Sotto {{ui:L'intero modello}}, impostare {{ui:Da (s)}} e {{ui:A (s)}}, la {{ui:Gravità (m/s², verso il basso)}} e se c'è {{ui:Un suolo su cui atterrare}} (e la sua altezza).
3. Fare clic su {{ui:Bake della fisica}} (nel pannello o nel gruppo {{ui:Fisica}}). Ogni oggetto che cade riceve una chiave di posizione, rotazione e dimensione a ogni fotogramma tra i due tempi; riprodurla come qualsiasi animazione.

Ricalcolare sostituisce quelle chiavi; {{ui:Rimuovi le chiavi calcolate}} le toglie. Gli oggetti partono a riposo, dove le loro chiavi, curve e vincoli li mettono a {{ui:Da (s)}} (un movimento impostato prima non prosegue nella caduta). Più {{ui:Passi per fotogramma}} mantiene le pile alte più stabili; la barra di stato indica quando qualcosa è ancora in movimento alla fine.

:::note
Le forme sono box e sfere attorno ai limiti di ciascun oggetto; un box tocca con gli spigoli, con i punti medi dei lati e con i centri delle facce, quindi i box si impilano e si ribaltano come ci si aspetta. Tessuti, fluidi, giunti tra oggetti e forme esatte non sono ancora implementati.
:::

## Driver

Un **driver** imposta una shape key a partire da altre cose invece che a mano: aprire il driver di una chiave (il pulsante calcolatrice), scrivere un'**espressione**, e assegnare a ciascun nome che vi compare ciò che legge ({{ui:Legge}}): il tempo in secondi, il fotogramma, la posizione, la rotazione o la dimensione di un oggetto lungo X, Y o Z, la luminosità di una lampada, oppure un'altra shape key. Per esempio, con `v` che legge la rotazione attorno a Z di una porta, `clamp(v / 90, 0, 1)` apre una forma man mano che la porta si apre.

Le espressioni usano numeri, i nomi, `+ - * / % ^` e parentesi, e le funzioni `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` con `pi` ed `e`. Un errore viene segnalato e non cambia nulla. Il cursore di una chiave pilotata mostra il valore del driver; il driver prevale sulla traccia della chiave finché non lo si rimuove.

## Scegliere e modificare le chiavi (vista Chiavi)

{{ui:Chiavi}} mostra una riga per traccia: la camera, ogni gruppo che si muove e ogni proprietà ("Lampada 2 · Luminosità (lm)"; le chiavi di proprietà sono tonde).

- Fare clic su una chiave per sceglierla; {{key:Shift}}+clic oppure {{key:Mod}}+clic aggiunge o toglie chiavi dalla selezione. Trascinare con {{key:Shift}} sopra le righe disegna un riquadro che aggiunge ogni chiave al suo interno.
- Trascinare una chiave scelta per spostarle tutte; {{key:Left}} / {{key:Right}} le spostano di un fotogramma ({{key:Shift}}: dieci).
- {{key:Mod+C}} copia le chiavi scelte, {{key:Mod+V}} le incolla dalla testina di riproduzione sulle stesse tracce (anche un'altra scheda di ModelCraft può incollarle).
- {{ui:Stiramento}} allarga le chiavi scelte a partire dalla testina di riproduzione, del numero accanto (2 = il doppio della distanza; 0.5 le avvicina).
- La lista delle transizioni imposta come si muove ogni chiave scelta verso la successiva.

## Modellare le curve (vista Curve)

{{ui:Curve}} è un grafico di ogni numero nel tempo: tempo in orizzontale, valore in verticale. Spuntare le curve da mostrare nell'elenco a sinistra (X, Y e Z sono rosso, verde e blu).

- Fare clic su una chiave (un quadratino) per sceglierla, {{key:Shift}}+clic per altre, oppure trascinare un riquadro. Trascinare una chiave scelta per cambiarne tempo e valore; con più chiavi scelte, il trascinamento le sposta nel tempo.
- Una chiave scelta mostra le sue due **maniglie**. Trascinarne una per modellare la curva da quel lato. {{ui:Maniglie}} indica come si comportano: {{ui:Automatiche}} (una curva morbida attraverso le chiavi intorno), {{ui:Rivolte alla chiave successiva}}, {{ui:Allineate}} (le due restano su una linea retta, così la curva non ha spigoli) oppure {{ui:Libera}}.
- {{ui:Dalle chiavi scelte}} imposta come ogni chiave scelta passa alla successiva: {{ui:Curva (maniglie)}}, {{ui:Leviga}}, {{ui:Costante}}, {{ui:Rallenta all'inizio e alla fine}} oppure {{ui:Mantieni}}.
- {{ui:Prima}} e {{ui:Dopo}} impostano cosa fa una curva fuori dalle sue chiavi: {{ui:Mantieni}} (resta al primo o all'ultimo valore), {{ui:Ripeti}}, {{ui:Avanti e indietro}} oppure {{ui:Ripeti e prosegui}} (ogni ripetizione inizia dove è finita la precedente: una ruota continua a rotolare, un camminatore continua a camminare).
- La rotellina fa zoom ({{key:Mod}}: solo valori; {{key:Shift}}: solo tempo); trascinare con il pulsante centrale o con {{key:Alt}} per spostarsi; {{ui:Mostra tutto}} o {{key:Home}} adatta tutte le curve visibili. Fare clic su uno spazio vuoto per spostare lì la testina. {{key:Delete}} elimina le chiavi scelte.

Le maniglie non si incrociano nel tempo, così una curva non torna mai indietro.

## Riutilizzare le animazioni (vista Clip)

Una **clip** riproduce un'animazione salvata (un'**azione**) sulla timeline. Le clip si combinano in ordine, le righe inferiori sopra quelle superiori; le tracce della timeline stessa vanno sopra ogni clip.

1. Impostare le chiavi di gruppi e lampade come di consueto, poi fare clic su {{ui:Crea una clip}} in {{ui:Clip}} e dare un nome all'azione. Le tracce diventano l'azione, e una clip la riproduce dove si trovavano (la camera resta sulla timeline).
2. Per riusarla, scegliere l'azione e fare clic su {{ui:Aggiungi clip}}: una nuova clip inizia alla testina di riproduzione.
3. Trascinare una clip lungo la sua riga per spostarla; fare clic su di essa per impostare {{ui:Inizio (s)}}, {{ui:Velocità}} (2 = due volte più veloce), {{ui:Ripetizioni}}, {{ui:Intensità}} (da 0 a 1), {{ui:Combinazione}} ({{ui:Sostituisci}}, oppure {{ui:Aggiungi sopra}} alle clip precedenti), {{ui:Fuori dalla clip}} (niente, tenere la fine, oppure tenere entrambe le estremità) e {{ui:Silenzia}}. Le frecce cambiano l'ordine; il cestino la rimuove (un'azione che nessuna clip usa più va via con essa).

Una clip con {{ui:Intensità}} inferiore al massimo si fonde con ciò che sta sotto: la clip precedente, oppure la lampada o la posizione così com'è senza l'animazione.

## Cosa riproduce dove

| Cosa | Nella vista | In un video di render |
|---|---|---|
| Chiavi della camera, angolo dell'obiettivo con chiavi della camera | Sì | Sì |
| Posizione, rotazione e dimensione (chiavi, curve, clip) | Sì | Sì |
| Luminosità, apertura e colore delle lampade | Sì | Non ancora: il video usa le lampade come sono all'avvio (vedi [cosa non è ancora implementato](topic:not-built-yet)) |
| Angolo dell'obiettivo senza chiavi della camera | Sì | Non ancora: impostare con una chiave anche la camera |
| Shape key e driver | Sì | Sì |
| Armature (mesh posate) | Sì | Sì |
| IK e vincoli | Sì | Sì |
| Fisica calcolata (chiavi) | Sì | Sì |

Tutto viene salvato nel file `.modelcraft` insieme al resto dell'animazione, e gli {{ui:Annulla}} e {{ui:Ripristina}} della timeline annullano o ripristinano ciascuna di queste modifiche.
