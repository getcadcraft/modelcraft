---
title: Dividere uno spigolo o una curva in parti uguali
summary: Dividere una linea in parti uguali, oppure dare ad arco o cerchio un nuovo numero di segmenti, con lo strumento Dividi.
keywords: dividi, dividi spigolo, parti uguali, segmenti uguali, suddividi spigolo, segmenti, suddividi, suddividi spigoli, segmenti dell'arco, segmenti del cerchio, punti lungo una linea
from: 5c3ce3ed
---

{{ui:Dividi}} taglia uno spigolo in parti uguali, con un vertice in ogni taglio. Usare i vertici per agganciarsi, per iniziare linee o per spingere e tirare parti di una faccia.

## Dividere uno spigolo

1. Fare clic su {{ui:Dividi}} nella barra degli strumenti, oppure selezionare uno spigolo e fare clic su {{ui:Dividi…}} in {{ui:Informazioni sull'entità}}.
2. Puntare lo spigolo. I segni indicano dove saranno i tagli: al centro dello spigolo sono due parti; spostarsi verso un estremo per averne di più.
3. Fare clic per dividerlo nelle parti mostrate. Oppure digitare un numero, come `5` (o `5s`, o `/5`), e premere {{key:Enter}}: divide subito.

Le parti restano selezionate, e si tratta di un solo passo di annullamento. Una faccia a cui appartiene lo spigolo mantiene la sua forma e acquisisce i nuovi vertici.

## Dividere un arco o un cerchio

Puntare un segmento qualsiasi di un arco o di un cerchio: viene diviso per intero.

- Un arco o un cerchio i cui vertici non sono usati da altro, e che giace piatto sulla sua faccia, viene **ridisegnato con quel numero di segmenti** sull'arco vero. Le estremità restano dove sono, ed è sempre una sola curva, quindi si può ancora selezionare con un solo clic e cambiarne il raggio in {{ui:Informazioni sull'entità}}. Un cerchio di 24 lati diviso in 8 diventa un ottagono.
- Ogni altra curva — il bordo di un cilindro tirato, una curva disegnata con {{ui:Curva}}, un arco con linee unite ai vertici — riceve nuovi vertici a lunghezze uguali lungo di essa, e nulla si sposta.

## Con i tasti del modellatore

Lo strumento è lo stesso con i tasti del modellatore (Impostazioni › ModelCraft › Tasti, oppure lo stile di menu Modeler), dove si trova nel menu {{ui:Mesh}} come {{ui:Suddividi spigoli}}.

## Da sapere

- I numeri digitati vanno da 2 a 1000; spostando il puntatore si arriva fino a 100.
- Una curva disegnata con {{ui:Curva}} mantiene i suoi punti: dopo {{ui:Modifica punti}}, viene ridisegnata da essi e i nuovi vertici scompaiono.

Vedi anche [Disegnare facce con linee, rettangoli, cerchi e archi](topic:draw-faces) e [Digitare dimensioni esatte nella casella dei valori](topic:value-box).
