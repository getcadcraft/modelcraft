---
title: Taglia un'apertura in un muro
summary: Disegna una finestra o una porta su un muro con spessore e spingila attraverso, così il muro ottiene un vero foro.
keywords: finestra, porta, apertura, foro, muro, taglia, spingi attraverso, vuoto, spessore, facciata
from: 6b22f32c
---

Un'apertura richiede un muro con due lati: una scatola, o un muro creato tirando verso l'alto un lungo rettangolo sottile. Una singola faccia in piedi da sola non ha nulla attraverso cui spingere.

## Creare un muro per esercitarsi

1. Premere {{key:R}}, cliccare un angolo sul terreno e digitare `6m,0.3m` (o `20',12"`), poi {{key:Enter}}.
2. Premere {{key:P}}, cliccare il rettangolo e digitare `3m` (o `10'`), poi {{key:Enter}}.

Si ottiene un muro spesso 300 mm (12 in).

## Disegnare l'apertura

1. Orbitare in modo da vedere il lato lungo del muro.
2. Premere {{key:R}}.
3. Passare sulla faccia del muro, poi cliccare dove va l'angolo inferiore della finestra. Il suggerimento dice "Su faccia".
4. Digitare la larghezza e l'altezza della finestra, per esempio `1.2m,1.5m` (o `4',5'`), e premere {{key:Enter}}.

   La finestra è una faccia a sé all'interno della faccia del muro, che ora ha un foro intorno.

Per posizionarla a una distanza esatta dall'angolo e dal pavimento, usare prima le [guide](topic:guides-measure): con {{ui:Metro}}, trascinare le linee guida dai bordi inferiore e finale del muro, poi iniziare il rettangolo dove due guide si incrociano (il suggerimento dice "Su guida").

## Spingerla attraverso

1. Premere {{key:P}}.
2. Cliccare la faccia della finestra e spingerla nel muro.
3. Muovere fino a quando si ferma sulla faccia posteriore, poi cliccare. Oppure digitare lo spessore del muro, `300` (o `12`), e premere {{key:Enter}}.

   ModelCraft si ferma sulla faccia dietro e la apre: il muro ha ora un foro passante, con quattro facce laterali (stipiti, architrave e davanzale) che lo rivestono. {{ui:Informazioni sull'entità}} continua a chiamare il muro un solido chiuso quando è raggruppato.

Se si spinge meno dello spessore completo, si ottiene un incavo invece di un foro.

## Una porta

Disegnare il rettangolo partendo dal bordo inferiore della faccia del muro (il suggerimento dice "Su spigolo" o "Punto finale"), così l'apertura raggiunge il pavimento. Spingerla attraverso allo stesso modo.

## Molte finestre della stessa misura

1. Creare la prima apertura.
2. Per le successive, disegnare i rettangoli, poi fare doppio clic su ciascuno con {{ui:Spingi/tira}}: un doppio clic ripete l'ultima distanza. Vedi [Spingi e tira](topic:push-pull#repeat-the-last-distance).

## Se non ha tagliato fino in fondo

- Il rettangolo deve essere disegnato **sulla** faccia del muro. Se è stato disegnato nell'aria davanti ad essa, è una faccia separata: annullare e disegnarla di nuovo, iniziando sulla faccia.
- La spinta si ferma alla prima faccia dietro l'apertura. Se qualcos'altro è di intralcio all'interno del muro (una faccia interna rimasta da un disegno precedente), si fermerà lì; eliminare gli spigoli di quella faccia e riprovare.
- La geometria in un gruppo separato non viene tagliata. Aprire il gruppo che contiene il muro e disegnare l'apertura al suo interno.
