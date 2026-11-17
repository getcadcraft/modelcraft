---
title: Disegnare facce con linee, rettangoli, cerchi e archi
summary: Creare facce piane sul terreno o su altre facce, dividerle con linee e disegnare cerchi e poligoni con il numero di lati desiderato.
keywords: disegna, linea, rettangolo, cerchio, poligono, offset, rientranza, cornice, bordo, arco, curva, spline, liscia, cavo, percorso, rigonfiamento, raggio, curva, faccia, pianta, impronta, dividi, lati, segmenti, contorno, matita
from: b6d7b7dd
---

Tutto in ModelCraft inizia come una **faccia** piana: una superficie chiusa da spigoli. Si può disegnare una faccia direttamente con {{ui:Rettangolo}}, {{ui:Cerchio}} o {{ui:Poligono}}, oppure tracciarne il contorno uno spigolo alla volta con {{ui:Linea}}. Le facce sono ciò che [Spinge o tira](topic:push-pull) trasforma in solidi.

## Disegnare un rettangolo

1. Premere {{key:R}}.
2. Fare clic sul primo vertice: sul terreno, o su una faccia qualsiasi del modello.
3. Spostare il puntatore. Il rettangolo resta sul terreno (o sulla faccia da cui si è iniziato), e la casella dei valori ({{ui:Quote}}) mostra larghezza e profondità. Il suggerimento dice "Quadrato" quando i lati sono uguali.

   Per disegnare su un altro piano, puntarlo: una faccia che passa per il primo vertice pone il rettangolo su quella faccia, e agganciarsi a un punto fuori dal piano (un estremo, uno spigolo, l'asse blu) fa rizzare il rettangolo passando per entrambi i vertici. Agganciarsi di nuovo a un punto del primo piano lo fa ridistendere. Per mantenere un piano, premere un tasto freccia: {{key:Up}} mantiene il rettangolo in piano (il piano blu), {{key:Right}} sul piano rosso, {{key:Left}} sul piano verde. Premere di nuovo lo stesso tasto per sbloccare.
4. Fare clic sul vertice opposto, oppure digitare le due dimensioni separate da una virgola e premere {{key:Enter}}: `4m,3m`, `4000,3000` in un modello in millimetri, o `12',10'6"` in piedi e pollici.

   Appare una faccia con quattro spigoli intorno.

Le dimensioni digitate vanno nella direzione in cui si puntava: se il puntatore è a sinistra del primo vertice quando si digita, il rettangolo cresce verso sinistra.

:::warning
La virgola separa le due dimensioni, quindi non può essere il separatore decimale. Digitare `2.5m,3m`, mai `2,5m`.
:::

## Disegnare un cerchio o un poligono

1. Premere {{key:C}} per un cerchio o {{key:N}} per un poligono.
2. Per cambiare il numero di lati, digitarlo prima di fare clic: `12s` (o solo `12`) e {{key:Enter}}. Un cerchio parte con 24 lati e un poligono con 6. Il suggerimento mostra il numero attuale, e ModelCraft lo mantiene per il cerchio successivo finché non lo si cambia o non si cambia strumento.
3. Fare clic sul centro, sul terreno o su una faccia. Per centrarlo su una faccia, puntare il centro della faccia ("Centro della faccia") o il punto medio di uno dei suoi spigoli ("Punto medio") con il puntatore appena dentro la faccia: il cerchio viene disegnato su quella faccia, anche sulla testata stretta di una scatola lunga.
4. Fare clic per fissare il raggio, oppure digitarlo ({{ui:Raggio}} nella casella dei valori) e premere {{key:Enter}}.

Un cerchio è un poligono con molti lati. Quando lo si tira con Spinge o tira, i suoi lati vengono ammorbiditi, così il cilindro appare come un'unica superficie liscia.

## Disegnare un arco

1. Premere {{key:A}} ({{ui:Arco}}).
2. Fare clic dove inizia l'arco, poi dove finisce (o digitare la lunghezza tra i due punti).
3. Spostare il puntatore per far sporgere l'arco, e fare clic. Il suggerimento dice "Semicerchio" quando la sporgenza è metà della distanza tra le estremità. Oppure digitare quanto si discosta il centro: `2` e {{key:Enter}}.

Per disegnare un arco attorno a un punto, usare {{ui:Arco dal centro}}: fare clic sul centro, poi dove inizia l'arco (o digitare il raggio), poi dove finisce (o digitare l'angolo in gradi, come `90`). Si aggancia a passi di 15°.

Un arco iniziato su una faccia viene disegnato su quella faccia; altrimenti giace sul terreno, o si erge in verticale quando le sue due estremità sono a altezze diverse. Un arco ha 12 segmenti; digitare `24s` durante il disegno per averne di più. Gli archi chiudono le facce proprio come le linee: un arco attraverso l'angolo di un rettangolo lo divide.

## Disegnare una curva liscia

{{ui:Curva}} disegna una linea liscia che passa per ogni punto su cui si fa clic: un cavo, il percorso di un corrimano, il bordo di un giardino. Può staccarsi dal terreno: i punti si agganciano a vertici, spigoli e facce ovunque, e i tasti freccia bloccano il rosso, il verde o il blu come con {{ui:Linea}}.

1. Fare clic su {{ui:Curva}} nel gruppo {{ui:Disegna}}.
2. Fare clic sui punti che la curva attraversa. Digitare `<0,0,1>` e premere {{key:Enter}} per un punto 1 sopra l'ultimo, `[x,y,z]` per un punto esatto, oppure una lunghezza per un punto a quella distanza verso il puntatore.
3. Premere {{key:Enter}} o fare doppio clic per terminare. Fare di nuovo clic sul primo punto per chiudere la curva. {{key:Backspace}} toglie l'ultimo punto.

Una curva si seleziona come un unico elemento. Per modificarla, selezionarla e fare clic su {{ui:Modifica punti}} in {{ui:Informazioni sull'entità}}: i suoi punti appaiono come quadratini. Fare clic su uno, poi fare clic dove deve andare (o digitare `<dx,dy,dz>`). {{key:Esc}} rimette un punto a posto e termina la modifica. Una curva piana chiusa diventa una faccia; una curva che delimita una faccia non può più essere modificata.

## Offset: un bordo dentro o fuori una faccia

{{ui:Offset}} copia il contorno di una faccia a una distanza stabilita al suo interno (o all'esterno), per una cornice, un bordo, un davanzale o il vetro di uno schermo.

1. Premere {{key:F}} e fare clic sulla faccia, oppure selezionare prima la faccia e poi premere {{key:F}}.
2. Spostare il puntatore dentro la faccia per un contorno interno, o fuori per uno esterno. Il nuovo contorno lo segue, e il suggerimento indica la distanza.
3. Fare clic, oppure digitare la distanza e premere {{key:Enter}}.

La faccia si divide in due: la faccia interna e una cornice intorno a essa (oppure un nuovo anello all'esterno). Spingere o tirare subito l'una o l'altra: per uno schermo, disegnare la scatola, spingerla fino allo spessore, fare offset di 30 mm verso l'interno della faccia anteriore e spingere un po' la faccia interna per il vetro. Anche i fori nella faccia subiscono l'offset, e un arco o un cerchio resta una sola curva (più piccola o più grande).

- **Doppio clic** su una faccia con {{ui:Offset}} per applicarle di nuovo l'ultima distanza.
- **Spigoli:** selezionare una catena di spigoli collegati su un piano (per esempio le due linee di una L), premere {{key:F}}, spostarsi dal lato desiderato e digitare la distanza: viene disegnata una copia parallela, con angoli a 45°.
- Quando la distanza è maggiore di quanto la faccia permette, ModelCraft lo segnala e non disegna nulla.

## Archi, cerchi e poligoni sono curve

Fare clic su un qualsiasi segmento di un arco, di un cerchio o di un poligono e viene selezionata l'intera curva. {{ui:Informazioni sull'entità}} mostra allora il suo raggio, i suoi segmenti, il suo angolo (per gli archi) e la sua lunghezza. Digitare lì un nuovo raggio per ridimensionarla rispetto al suo centro; le facce disegnate nel suo piano la seguono. Una volta che la faccia di una curva è stata spinta o tirata, il suo raggio resta com'è.

## Disegnare con le linee

1. Premere {{key:L}}.
2. Fare clic dove inizia la linea.
3. Fare clic dove finisce, oppure digitare una lunghezza e premere {{key:Enter}}. La lunghezza digitata va nella direzione indicata dal puntatore.
4. Continuare a fare clic. Ogni clic fa iniziare la linea successiva dalla fine dell'ultima.
5. Chiudere il contorno facendo di nuovo clic sul primo punto. Quando le linee chiudono un anello piano, si riempie con una faccia e lo strumento smette di concatenare. Premere {{key:Esc}} per fermarsi in qualsiasi momento.

Le linee seguono le direzioni rosso, verde e blu quando ci si avvicina: la linea assume quel colore e il suggerimento dice "Sull'asse rosso". Vedi [Inferenza e aggancio](topic:inference) per bloccare una direzione e agganciarsi ai punti.

### Dove va una linea che non tocca nulla

- Una linea che inizia su una faccia resta nel piano di quella faccia.
- Una linea che inizia sul terreno, o nello spazio vuoto, resta a livello con il suo punto di partenza. Se il modello è visto di taglio, va invece nel piano verticale rivolto verso di sé.
- Per tracciare una linea fino a un punto esatto, digitare il punto: `[x,y,z]` per un punto nel modello, o `<dx,dy,dz>` per uno spostamento dal punto di partenza. Vedi [Digitare dimensioni esatte](topic:value-box).

## Dividere una faccia

Disegnare una linea attraverso una faccia, da uno spigolo a un altro (o da spigolo a spigolo attraverso altre linee). La faccia si divide in due facce. Ciascuna mantiene il proprio lato e colore. Lo stesso vale per un rettangolo o un cerchio disegnato su una faccia: la forma diventa una faccia propria dentro quella più grande, che ora ha un foro.

Questo è il modo per impostare stanze su un solaio, una finestra su un muro o un gradino su una scala: disegnare il contorno sulla faccia, poi spingere o tirare la nuova faccia.

## Facce rivolte nel verso sbagliato

Ogni faccia ha un fronte e un retro. Il retro appare grigio-bluastro. Le facce disegnate sul terreno guardano in alto; le facce disegnate su un'altra faccia guardano nello stesso verso di quella.

Se una faccia mostra il retro dove ci si aspetta il fronte, selezionarla e fare clic su {{ui:Inverti faccia}} in {{ui:Informazioni sull'entità}}.

## Cosa si vede mentre si disegna

- Un indicatore colorato dove il puntatore si aggancia, e il suo nome nel suggerimento in basso a sinistra.
- Un'anteprima della linea o della forma.
- La dimensione in tempo reale nella casella dei valori. Si può digitare sopra in ogni momento.

## Se la forma non è dove ci si aspettava

- Su uno schermo tattile, vedi [Risoluzione dei problemi](topic:troubleshooting#a-shape-starts-in-the-wrong-place-on-a-touch-screen).
- Se una linea si è agganciata a qualcosa molto più lontano, ruotare un po' la vista: i punti nascosti dietro una faccia non si agganciano mai, ma quelli sul suo bordo sì.
- Premere {{key:Mod+Z}} per annullare l'ultima forma; un annullamento toglie una linea o una forma.
