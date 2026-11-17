---
title: Spingere e tirare facce per creare solidi
summary: Trasformare una faccia in un box, rendere un edificio più alto o più basso, aggiungere un risalto o un incavo, e ripetere una distanza con un doppio clic.
keywords: spingi tira, estrudi, altezza, solido, box, massa, più alto, più basso, incavo, sporgenza, ripeti, doppio clic, volume, livello, su faccia, a filo, stessa altezza
from: dc093c91
---

{{ui:Spingi/tira}} ({{key:P}}) sposta una faccia lungo la sua direzione: su e giù per un pavimento, dentro e fuori per una parete. Ciò che succede dipende dalla faccia.

## Creare un solido da una faccia

1. Disegnare una faccia, per esempio un rettangolo a terra ([Disegnare facce](topic:draw-faces)).
2. Premere {{key:P}}.
3. Passare sopra la faccia. Si evidenzia.
4. Fare clic sulla faccia, poi muovere il puntatore. La faccia sale (o scende) e dai suoi bordi crescono dei lati. La casella del valore ({{ui:Distanza}}) e la punta mostrano la distanza.
5. Fare clic per finire, oppure digitare una distanza e premere {{key:Enter}}: `3m`, `10'`, `2700` in un modello in millimetri.

   Ora si ha un solido chiuso. Selezionarlo tutto e raggrupparlo (vedere [Gruppi e componenti](topic:groups-components)): {{ui:Informazioni sull'entità}} mostra poi "Solido: Sì" e il suo volume.

Una faccia isolata può andare in entrambi i sensi: tirarla verso l'alto per una massa sopra il terreno, spingerla verso il basso per una buca o una fondazione.

:::tip
Invece di fare clic due volte, premere sulla faccia, trascinare e rilasciare. Su uno schermo touch è il modo naturale: premere, trascinare, sollevare.
:::

## Tirare fino all'altezza di qualcos'altro

Mentre si tira, passare sopra un angolo, un punto medio, uno spigolo o una guida di un'altra parte del modello. La faccia si aggancia a quell'altezza e un indicatore mostra il punto. Usarlo per rendere due blocchi della stessa altezza, o per fermarsi a una linea guida posta con il [metro a nastro](topic:guides-measure).

Si può anche passare sopra una faccia parallela a quella che si sta spingendo, come la parte superiore di un altro blocco o la cima del box su cui sta un pilastro. La punta dice "Su faccia", e la faccia che si spinge termina a filo con essa. Per esempio, spingere verso il basso la faccia interna di un tubo finché è a filo con il box sotto il tubo.

Una faccia inclinata rispetto a quella che si spinge non imposta un livello: la distanza segue il puntatore. Lo stesso vale per una faccia dietro quella che si spinge.

Quando una faccia spinta torna a terminare a filo con le facce intorno, i suoi lati scompaiono. Non restano lati di altezza zero, e il contorno disegnato resta sulla faccia, così si può spingere di nuovo più tardi. Per renderla di nuovo una sola faccia, cancellare i bordi del contorno con la {{ui:Gomma}}: le due facce si uniscono.

## Rendere un box più alto o più basso

Spingere/tirare la parte superiore di un box. Poiché i lati salgono già diritti da essa, la parte superiore si sposta semplicemente: il box diventa più alto o più basso, e non vengono creati nuovi spigoli.

- Spingere la parte superiore fino in fondo elimina il box. ModelCraft si ferma ad altezza zero; non rovescia mai il box.
- Lo stesso vale per qualsiasi faccia i cui vicini corrono tutti lungo la sua direzione, come la fine di un muro.

## Aggiungere un risalto o un incavo

1. Disegnare un rettangolo sul lato di un box (iniziarlo sulla faccia; resta sul piano della faccia).
2. Premere {{key:P}} e tirare il nuovo rettangolo **verso l'esterno**. Aggiunge materiale: un risalto, un camino, una pensilina.
3. Oppure spingerlo **verso l'interno**. Taglia un incavo: un portico, una nicchia, un ingresso arretrato.

Quando i lati della nuova parte si allineano con facce già presenti, si fondono in un'unica faccia, così non compaiono linee spurie su una parete piana.

## Spingere fino in fondo

Spingere una faccia dentro un solido si ferma alla prima faccia dietro di essa. Quando la raggiunge, taglia un'apertura. È così che si fanno finestre e porte in un muro con spessore. Vedere [Tagliare un'apertura in un muro](topic:openings).

## Digitare una distanza

Dopo aver fatto clic sulla faccia, digitare la distanza e premere {{key:Enter}}.

- La distanza digitata va nel verso in cui ci si stava muovendo. Se non ci si è ancora mossi, va verso l'esterno della faccia (fuori da un solido, in alto da terra).
- Digitare un numero negativo, come `-500`, per andare nell'altro verso.
- Se si cambia idea prima di fare clic, premere {{key:Esc}}. La faccia torna com'era.

## Ripetere l'ultima distanza

Dopo uno spingi/tira, fare doppio clic su un'altra faccia con {{ui:Spingi/tira}} ancora selezionato. Si sposta della stessa distanza. È il modo rapido per dare lo stesso spessore o la stessa altezza a più pareti o più solai.

ModelCraft ricorda la distanza finché non si passa a un altro strumento.

## Da sapere

- Spingi/tira lavora su una faccia alla volta. Se si fa clic su qualcosa che non è una faccia, la barra di stato indica "Spingi/tira lavora su una faccia. Fare clic su una faccia."
- Per spingere/tirare una faccia dentro un gruppo o un componente, aprirlo prima (doppio clic).
- Con **Collisione** attiva, una spinta o un tiro che incontra un altro solido si ferma dove tocca, e la punta indica con cosa tocca (il nome dell'oggetto, oppure "geometria sciolta in questo gruppo") ed evidenzia le facce incontrate. Una tasca spinta nel proprio solido (per esempio una faccia sfalsata riportata in basso) fa parte di quel solido e non viene mai fermata dalle sue pareti.
- Due solidi spinti l'uno contro l'altro non si tagliano né si uniscono: le loro facce semplicemente si attraversano. Vedere [Non ancora implementato](topic:not-built-yet).
