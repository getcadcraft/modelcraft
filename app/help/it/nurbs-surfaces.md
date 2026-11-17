---
title: Superfici a forma libera (NURBS)
summary: Curve e superfici lisce per gusci di prodotti, carrozzerie e scafi di barche: loft, sweep, reti di curve, patch a quattro spigoli, raccordi, ritagli, con continuità G0, G1 e G2 misurate sulle superfici esatte; solidi con unione, sottrazione e intersezione; viste zebra e di curvatura; facce adattate a una scansione con l'errore misurato; file STEP o IGES.
keywords: nurbs, scansione, ingegneria inversa, adatta, mesh a superficie, nuvola di punti, stl, ritaglia, ritagliata, foro, taglia, solido, solidi, booleana, unione, sottrai, interseca, differenza, cuci, chiuso, forma libera, freeform, free-form, superficie, superfici, b-spline, bspline, curva, spline, loft, sweep, guida, rete, coons, patch, raccordo, corrispondenza, continuità, g0, g1, g2, tangente, curvatura, zebra, punti di controllo, nodi, grado, step, iges, classe A
from: 09887405
---

Il pannello **Superfici** crea curve e superfici lisce del tipo usato per gusci di prodotti, carrozzerie e scafi di barche: NURBS, la stessa matematica usata da altri modellatori di superfici. Tutto viene misurato sulle superfici esatte, mai sui triangoli che si vedono. Le dimensioni nel pannello sono in **millimetri**, qualunque sia l'unità mostrata dal modello.

Aprirlo dal pannello a destra: {{ui:Superfici}} › {{ui:Apri il pannello Superfici}}. Un modello che ha già delle superfici lo apre da solo.

## Come funziona un comando

1. Premere un comando (per esempio **Loft**). Il pannello dice cosa richiede ancora: punti, curve, uno spigolo di superficie o un estremo di curva.
2. Sceglierli: cliccarli nella vista 3D, oppure premere **Scegli** (o i pulsanti spigolo ed estremo) accanto a ciascuno nell'elenco. Per uno spigolo, cliccare vicino a quello spigolo della superficie.
3. Controllare le opzioni (grado, tolleranza, continuità, …) e premere **Crea**.

Le curve da punti prendono i punti digitati uno per riga (`x, y, z` in mm), oppure **Scegli punti nella vista**: ogni clic usa lo stesso aggancio degli strumenti di disegno; premere <kbd>Invio</kbd> o fare doppio clic per terminare, <kbd>Esc</kbd> per fermarsi.

## Curve

- **Curva per punti** passa per ogni punto. **Curva per punti di controllo** segue invece una gabbia di punti.
- **Inserisci nodo**, **Alza grado** e **Abbassa grado** cambiano il modo in cui una curva è descritta senza spostarla (l'abbassamento viene rifiutato se la curva si sposterebbe oltre la tolleranza). **Ricostruisci curva** le dà un nuovo numero di punti di controllo e dice di quanto si è spostata.
- **Corrispondenza curva** fa incontrare l'estremo di una curva con quello di un'altra con G0 (si toccano), G1 (stessa direzione) o G2 (anche stessa curvatura). **Raccordo curva** aggiunge una nuova curva tra due estremi.
- **Unisci curve** e **Dividi curva**.

## Superfici

- **Loft** attraverso due o più curve, **Superficie rigata** tra due, **Estrudi curva**, **Rivoluzione curva**.
- **Sweep lungo una guida** porta un profilo lungo un percorso senza torcerlo; **Sweep lungo due guide** mantiene gli estremi del profilo su entrambe le guide. Gli sweep sono adattati: la riga di stato dice quanto è rimasto vicino allo sweep reale.
- **Superficie da rete di curve** passa attraverso una griglia di curve (le prime scelte sono i profili, le altre le guide). **Patch da quattro spigoli** riempie quattro curve che si incontrano nei loro angoli.
- **Corrispondenza superficie** fa incontrare uno spigolo di superficie con un vicino con G0, G1 o G2; **Raccordo superficie** aggiunge una superficie tra due spigoli.
- **Superficie di offset**, **Estendi superficie** (la superficie prosegue come stava andando), **Ricostruisci superficie**, e nodi e grado per le superfici.

## Verificare la qualità

La tabella **Spigoli condivisi** elenca ogni spigolo che due superfici condividono, con il distacco (mm), l'angolo tra di esse (°) e il salto di curvatura (1/mm), e se questo lo rende G0, G1 o G2. Uno spigolo peggiore di quanto richiesto è anche in **Problemi** (il pulsante ⚠ nella barra dell'app) con una correzione **Corrispondenza**.

**Mostra come** › **Strisce zebra** e **Curvatura (gaussiana)** derivano dalla superficie esatta: le strisce che proseguono senza interruzioni attraverso uno spigolo indicano G1; le strisce che mantengono anche la loro larghezza indicano G2. La curvatura è blu dove la superficie è una sella, rossa dove è una cupola e bianca dove è piatta. **Punti di controllo** disegna le reti di controllo.

G0–G2 sono misurate in 33 punti per spigolo. **G3 e la qualità "classe A" non sono misurate** e non vengono dichiarate.

## Ritagliare una superficie

Il gruppo **Ritaglio** taglia una superficie senza cambiarne la forma: la superficie mantiene tutti i suoi punti di controllo, e viene mostrata, contata e scritta solo la parte dentro il contorno. **Ritaglia su un rettangolo** e **Ritaglia con un cerchio** lavorano su una frazione (da 0 a 1) della superficie in ciascuna direzione, quindi non richiedono di scegliere nulla nella vista; **Ritaglia con una curva** prende una curva chiusa che giace sulla superficie (viene proiettata sulla superficie, e rifiutata con un messaggio se è aperta o dista più della tolleranza). Spuntare **Taglia un foro** per rimuovere l'interno del contorno; lasciarlo disattivato per mantenere solo l'interno. Una superficie può avere un contorno mantenuto e un numero qualsiasi di fori; un contorno che ne incrocia un altro viene rifiutato. **Rimuovi il ritaglio** mostra di nuovo l'intera superficie. Gli spigoli tagliati seguono esattamente il contorno; l'**Annulla** del pannello riporta indietro un ritaglio come ogni altro passo.

STEP conserva il ritaglio come limiti della faccia e IGES come superficie ritagliata (entità 144); entrambi lo leggono di nuovo.

## Solidi e booleane

Il gruppo **Solidi** trasforma le superfici in corpi chiusi e le combina. Un solido qui è un insieme di superfici del pannello che insieme chiudono un volume; le sue facce restano superfici NURBS esatte con i loro ritagli.

- **Solido scatola**, **Solido cilindro** e **Solido sfera** ne creano uno da dimensioni digitate (in mm): una scatola di sei facce piane, un cilindro con un lato rotondo e due estremi piani ritagliati sul cerchio, una sfera di una superficie di rivoluzione.
- **Solido da superfici** raggruppa superfici create dall'utente. Sceglierle, oppure non sceglierne nessuna per usare tutte le superfici mostrate che non sono ancora in un solido. Vengono cucite insieme entro la tolleranza: se non si chiudono, non cambia nulla e il pannello dice quanti spigoli restano aperti e quanto devono essere vicini per incontrarsi.
- **Unione**, **Sottrai** (il secondo solido viene tolto dal primo) e **Interseca** (solo ciò che hanno in comune entrambi) richiedono due solidi: cliccare una faccia di ciascuno nella vista, oppure premere **Scegli** nell'elenco **Solidi**. Spuntare **Mantieni i due solidi** per lasciarli accanto al risultato.

Una booleana mantiene ogni faccia sulla propria superficie esatta e la taglia con nuovi contorni di ritaglio lungo l'intersezione. La riga del risultato riporta i numeri misurati: di quanto i punti del motore dei solidi hanno dovuto spostarsi per stare sulle superfici esatte (mai più della tolleranza), quanto sono vicini i punti di intersezione a entrambe le superfici (di solito pochi milionesimi di millimetro), il volume, e se le nuove facce si richiudono quando vengono cucite di nuovo dalle loro superfici esatte. I volumi sono misurati su triangoli entro la tolleranza (0.05 mm salvo diversa impostazione), quindi il volume di una sfera o di un cilindro risulta leggermente inferiore a quello esatto: una tolleranza più piccola si avvicina di più. Una booleana che non può essere eseguita in modo pulito (i solidi non hanno nulla in comune, un contorno si incrocerebbe) viene rifiutata con un messaggio e non cambia nulla. Una booleana è un passo dell'**Annulla** del pannello.

Nell'elenco **Solidi**, **Separa** mantiene le facce come semplici superfici; il cestino rimuove il solido e le sue facce.

**Aggiungi al modello** (nell'elenco **Solidi**) mette una copia del solido nel modello come un unico gruppo chiuso, con le sue facce come triangoli entro 0.05 mm, in un passo di Annulla del modello. Da lì funziona con **Unione**, **Sottrai** e **Interseca** del modello stesso, con lo spingi/tira e con il controllo della stampa 3D; il solido esatto resta nel pannello.

## Raccordi e ispessimento

**Raccordo tra facce** arrotonda lo spigolo dove due facce di uno stesso solido si incontrano: scegliere le due facce (nella vista, o con **Scegli** nell'elenco), digitare il **raggio** e, per un raggio che cambia lungo lo spigolo, il **raggio alla fine** (0 mantiene un solo raggio). Una sfera di quel raggio viene fatta rotolare lungo lo spigolo toccando entrambe le facce; il raccordo è l'arco circolare esatto che lascia in ogni punto, unito in una sola superficie, e le due facce vengono ritagliate dove la sfera le tocca. Uno spigolo esterno perde materiale, un angolo interno ne guadagna. La riga del risultato riporta ciò che è stato misurato: quanto la superficie di raccordo dista dalla sfera rotolante tra i punti da cui è stata costruita (vengono aggiunti punti finché non è entro un quarto della tolleranza), l'angolo massimo tra il raccordo e ciascuna faccia lungo le linee di contatto, e gli stessi numeri di un'Unione. Un raggio che non entra (la sfera uscirebbe da una faccia, o una faccia si curva più stretta del raggio) viene rifiutato, indicando la faccia, e nulla cambia.

**Raccordo di più spigoli** arrotonda molti spigoli in un solo passo: scegliere le due facce del primo spigolo, poi le due facce del successivo, e così via (una faccia può essere in più coppie, per esempio la faccia superiore di una scatola in quattro di esse); tutti gli spigoli ricevono il raggio digitato. Ogni arrotondamento viene calcolato sul solido com'era, poi vengono tagliati uno dopo l'altro, quindi l'ordine non conta. Dove due spigoli arrotondati si incontrano in un angolo i cui altri spigoli restano vivi, i due raccordi si fondono lungo la loro curva di intersezione (una piega). Dove tre spigoli esterni arrotondati di tre facce piane, perpendicolari tra loro, si incontrano con un solo raggio, l'angolo diventa un unico **pezzo di sfera** tangente a tutti e tre i raccordi (deselezionare **Angoli** per ottenere invece l'angolo a piega); uno spigolo deve essere lungo almeno il doppio del raggio quando entrambi i suoi estremi sono angoli di questo tipo. La riga del risultato dice quanti spigoli sono stati arrotondati e come sono venuti gli angoli. Anche gli spigoli interni possono essere arrotondati insieme, ma un risultato che non si richiude viene solo segnalato (la riga lo dice), quindi va controllato.

**Ispessisci in un solido** dà a una superficie uno spessore: sceglierla, digitare lo **spessore**, e spuntare **Altro lato** per farla crescere dall'altra parte. La faccia di offset viene adattata alla superficie e misurata rispetto ad essa (la riga del risultato dà la differenza massima dallo spessore); le pareti seguono ogni spigolo e ogni contorno di ritaglio. Se la superficie si curva più stretta dello spessore da quel lato, o un'altra parte di essa si trova più vicina dello spessore, viene rifiutata, indicando la superficie e il punto, e nulla cambia.

## Annulla, il file, STEP e IGES

Il pannello ha il proprio **Annulla** e **Ripristina** (un passo per comando). Le superfici vengono salvate nel file `.modelcraft` con il modello; non fanno parte dell'annullamento del modello, come i materiali del file.

**STEP…** (AP242) e **IGES…** salvano curve e superfici esattamente come sono (curve e superfici B-spline, niente trasformato in triangoli). Ogni superficie è una faccia a sé, con il suo ritaglio; un solido viene scritto come un unico guscio chiuso, con ogni spigolo condiviso dalle sue due facce come si aspettano gli altri programmi CAD (la riga di stato dice quanti solidi sono stati esportati in questo modo). In IGES lo stesso solido è un unico B-rep solido manifold (entità 186 sul guscio chiuso 514, facce 510, cicli 508, una lista di spigoli 504 e una lista di vertici 502); un solido le cui facce non si accoppiano spigolo per spigolo viene scritto come facce separate, e la riga lo dice. **Importa…** rilegge come solido quelli scritti così, da STEP e da IGES. Legge curve e superfici scritte in questo modo, e insiemi di patch `.ccnurbs`; i solidi STEP di altri programmi si aprono con File › Importa come mesh.

## Superfici da una scansione (ingegneria inversa)

Selezionare la mesh scansionata nel modello (senza selezione vale tutto ciò che è mostrato), aprire **Superfici**, e nel gruppo **Scansione** scegliere **Adatta superfici alla scansione**. Lo strumento cerca **piani**, **cilindri**, **sfere** e **coni** (le superfici esatte di cui è fatto un pezzo lavorato; ogni riga mostra il raggio o il semiangolo trovato), trova **raccordi** (spigoli e angoli arrotondati: un piccolo cilindro o una sfera tangente in due o più altre facce, mostrato con il suo raggio e le facce che unisce), **raccordi di bordo** (un toro: lo spigolo arrotondato dove una faccia piana incontra un cilindro o un cono, mostrato con il suo raggio e il raggio dell'anello) e **raccordi variabili** (uno spigolo arrotondato il cui raggio cambia lungo di esso, mostrato con il raggio a ciascuna estremità), adatta **una patch a forma libera** a un pezzo liscio e dolcemente curvo, e ritaglia ogni faccia sul contorno della parte di scansione da cui proviene, così i fori e gli angoli restano. Opzioni: la **tolleranza** (di quanto, in mm, un punto di scansione può distare da un piano o da un cilindro e appartenervi ancora, e il bersaglio per una patch a forma libera), il **pezzo più piccolo** (una frazione dell'area della superficie) e il **numero massimo di facce**. La stessa scansione con le stesse opzioni dà sempre le stesse facce.

Il risultato è una tabella, una riga per faccia: il suo tipo, quanti triangoli provengono da essa, e l'errore **misurato dalla scansione alla faccia** (rms, il massimo, e la quota di punti entro la tolleranza). I punti misurati sono i vertici della scansione e il centro di ogni triangolo. L'errore non viene misurato nell'altro senso (faccia verso scansione), quindi una faccia che si estende oltre la scansione non risulterebbe. La nota sotto la tabella dice anche quanta area era troppo piccola per essere adattata. Nella vista, i punti di scansione sono colorati dalla loro **mappa degli scostamenti**: blu sulla faccia, verde a metà della tolleranza, rosso alla tolleranza o oltre (deselezionare **Mostra la mappa degli scostamenti** per nasconderla). I pezzi che si ripiegano su sé stessi (per esempio un tubo chiuso adattato con patch a forma libera) vengono elencati come non adattati, senza mai essere forzati in una sola superficie.

**Cuci le superfici in un solido** cuce in un solido chiuso ogni superficie mostrata che non è in un solido. Le facce della scansione si incontrano solo entro l'errore della scansione stessa, quindi prova la distanza di giunzione più piccola che si chiude (mai più della **distanza di cucitura** impostata) e rifiuta con un messaggio quando le facce non si chiudono. Non copre mai un vuoto. Una scatola con spigoli arrotondati si cuce quando i suoi raccordi sono stati trovati come facce proprie; la distanza di giunzione che si è chiusa è nel risultato. Il solido poi lavora con Unione, Sottrai, Interseca e **Aggiungi al modello**.

Non fa: un **raccordo di bordo** (un toro) viene cercato solo attorno all'asse di un cilindro o cono già trovato, e un **raccordo variabile** solo lungo uno spigolo abbastanza dritto (le sue sezioni sono tagliate perpendicolari a una direzione); altrove vengono resi come patch a forma libera quando sono abbastanza lisci, e altrimenti esclusi; sfere, coni e raccordi vengono trovati per campionamento casuale, quindi uno molto piccolo (pochi triangoli) può sfuggire; la mappa degli scostamenti mostra la distanza dalla scansione alle facce, non il contrario; scansioni molto grandi (oltre 300.000 triangoli) vengono rifiutate qui. Le facce di un cilindro a giro completo vengono tagliate attorno ai fori, con la cucitura messa dove non c'è alcun foro. Controllare ogni faccia rispetto alla scansione prima di fidarsi.

## Non ancora implementato

Arrotondare spigoli che si incontrano in un angolo di facce curve o con raggi diversi (una fusione di vertice), un raccordo tra facce che non si incontrano, un raccordo interno che termina su una faccia inclinata o curva, e booleane e raccordi calcolati sulle superfici senza triangoli (qui il motore dei solidi lavora su triangoli entro la tolleranza, e ogni punto viene poi riportato sulle superfici esatte).
