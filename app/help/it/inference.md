---
title: Inferenza e aggancio
summary: Cosa significano i marcatori colorati, quale aggancio prevale e come bloccare una direzione con i tasti freccia o Shift.
keywords: inferenza, aggancio, snap, estremità, punto medio, centro di faccia, centro, su spigolo, su faccia, asse, asse rosso, asse verde, asse blu, parallelo, perpendicolare, blocco, shift, osnap
from: e78984e9
---

Mentre uno strumento di disegno o modifica è attivo, ModelCraft guarda ciò che si trova sotto il puntatore e si aggancia alla cosa più utile nelle vicinanze. Un marcatore mostra cosa ha trovato, e la punta in basso a sinistra ne indica il nome.

## Marcatori e punte

| Punta | Marcatore | Si aggancia a |
|---|---|---|
| Estremità | Cerchio verde | La fine di uno spigolo |
| Punto medio | Cerchio ciano | Il centro di uno spigolo |
| Centro della faccia | Cerchio blu | Il centro della faccia sotto il puntatore |
| Punto guida | Grigio | Un punto guida lasciato dal metro |
| Origine | Ocra | Dove si incontrano gli assi rosso, verde e blu |
| Su asse rosso / Su asse verde / Su asse blu | Una linea di quel colore | Una linea dal punto di partenza lungo quella direzione |
| Parallelo allo spigolo / Perpendicolare allo spigolo | Linea magenta | Una linea dal punto di partenza parallela o perpendicolare allo spigolo ricordato (vedi sotto) |
| Bloccato | Linea magenta | Una direzione bloccata con un tasto freccia o {{key:Shift}} |
| Su spigolo | Quadrato rosso | Ovunque lungo uno spigolo |
| Su guida | Grigio | Ovunque lungo una linea guida |
| Su faccia | Rombo blu | Ovunque su una faccia |
| Su piano | nessuno | Il piano su cui hai iniziato, quando il puntatore è su uno spazio vuoto |
| Sul terreno | nessuno | Il terreno (il piano rosso-verde), quando non c'è altro |

Quando una linea d'asse dal punto di partenza incrocia uno spigolo o una guida, ModelCraft si aggancia all'incrocio e la punta indica entrambi, ad esempio "Su asse rosso, su spigolo".

## Quale aggancio prevale

1. **Punti** entro circa 12 pixel: prima le estremità, poi i punti guida, i punti medi, il centro della faccia sotto il puntatore e l'origine.
2. **Direzioni** dal punto di partenza: gli assi rosso, verde e blu, e parallelo o perpendicolare allo spigolo ricordato.
3. **Su uno spigolo** o su una linea guida.
4. **Su una faccia.**
5. **Il piano di disegno**, oppure il terreno.

Le cose nascoste dietro una faccia non si agganciano mai. Orbita per vedere il punto che vuoi.

## Disegnare su una faccia a partire da un punto

Un {{ui:Rectangle}}, un {{ui:Circle}} o un {{ui:Polygon}} iniziato da un angolo, un punto medio, uno spigolo o il centro di una faccia viene disegnato **sul piano della faccia sotto il puntatore**, e taglia quella faccia. Uno spigolo appartiene a due facce, quindi decide il lato dello spigolo in cui si trova il puntatore: per disegnare sull'estremità di un box lungo, inizia dal punto medio di uno dei suoi spigoli con il puntatore appena dentro la faccia terminale.

## Parallelo e perpendicolare

ModelCraft ricorda l'**ultimo spigolo che il puntatore ha sorvolato prima del primo clic**. Iniziare su un angolo o su uno spigolo conta come aver sorvolato quello spigolo. Una volta che lo strumento è attivo, gli altri spigoli che sorvoli non lo sostituiscono.

Per disegnare una linea parallela a uno spigolo esistente:

1. Premi {{key:L}} e passa sopra lo spigolo da riprodurre.
2. Spostati sul punto di partenza, evitando, se puoi, di attraversare altri spigoli lungo il percorso, e fai clic.
3. Spostati nella direzione parallela a quello spigolo. La linea diventa magenta e la punta indica "Parallelo allo spigolo". Il perpendicolare funziona allo stesso modo, nel piano su cui stai disegnando.

Se è stato ricordato lo spigolo sbagliato, premi {{key:Esc}}, passa sopra lo spigolo giusto e ricomincia.

## Bloccare una direzione

Dopo il primo clic di uno strumento, puoi tenere il punto successivo su una sola linea:

| Tasto | Blocca su |
|---|---|
| {{key:Right}} | L'asse rosso |
| {{key:Left}} | L'asse verde |
| {{key:Up}} | L'asse blu (verticale verso l'alto) |
| {{key:Down}} | Parallelo allo spigolo ricordato (vedi sopra) |

Premi di nuovo la stessa freccia per sbloccare. La barra di stato indica "Bloccato sull'asse rosso. Premi la stessa freccia per sbloccare."

Mentre è bloccato, il punto scorre lungo la linea verso dove si trova il puntatore, e si allinea comunque ai punti su cui passi: passa sopra l'angolo di un altro box per tracciare una linea lungo il rosso esattamente fino a quell'angolo.

**{{key:Shift}}** blocca la direzione a cui sei agganciato in quel momento (un asse, o il parallelo), finché lo tieni premuto. Rilascialo per sbloccare.

I blocchi funzionano in {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Polygon}}, {{ui:Move}}, {{ui:Scale}} e {{ui:Tape}}. Prima del primo clic, i tasti freccia orbitano la vista.

## All'interno di un gruppo

Mentre modifichi all'interno di un gruppo o componente, gli assi sono quelli propri del gruppo (si spostano con esso, e ruotano se era stato ruotato). Gli agganci trovano comunque punti e spigoli fuori dal gruppo, così puoi allineare le cose con il resto del modello.
