---
title: Il cubo di navigazione
summary: Fare clic su una faccia, uno spigolo o un vertice del cubo nell'angolo della vista per guardare da lì, trascinarlo per orbitare, ruotare l'anello della bussola, passare tra le viste frontali e tornare alla vista iniziale.
keywords: cubo di navigazione, viewcube, cubo, bussola, nord, vista iniziale, viste standard, alto, anteriore, destra, iso, vertice, spigolo, orbita, ruota vista, icona degli assi, indicatore dell'angolo, navigazione
from: e1ec1347
---

Il cubo di navigazione si trova in alto a destra nella vista 3D. Ruota insieme alla vista, quindi indica sempre in quale direzione si guarda: {{ui:Sopra}} è in alto, {{ui:Anteriore}} guarda a sud (si guarda verso nord, lungo l'asse verde, quando lo si osserva), {{ui:Destra}} guarda a est (asse rosso). Resta trasparente finché non ci si punta sopra.

## Guardare da un lato, uno spigolo o un vertice

1. Puntare il cubo. La parte sotto il puntatore si illumina: il centro di una faccia, uno spigolo (si illumina su entrambe le facce che lo condividono) oppure un vertice (su tutte e tre le facce).
2. Fare clic. La vista ruota per guardare da lì, mantenendo lo stesso centro e lo stesso zoom.

Ci sono 26 punti su cui fare clic: 6 facce ({{ui:Sopra}}, {{ui:Sotto}}, {{ui:Anteriore}}, {{ui:Posteriore}}, {{ui:Sinistra}}, {{ui:Destra}}), 12 spigoli e 8 vertici. Un vertice dà la classica vista a tre quarti; uno spigolo appare a metà strada tra due facce.

Fare clic su {{ui:Anteriore}} equivale a {{ui:Viste}}, {{ui:Anteriore}} nella barra degli strumenti, ma senza l'adattamento dello zoom. {{ui:Viste}} adatta invece lo zoom a tutto il modello.

## Orbitare trascinando il cubo

Trascinare il cubo per ruotare la vista, come per l'orbita nella vista stessa. Un trascinamento non viene mai preso per un clic, quindi il cubo si può afferrare in qualunque punto.

## L'anello della bussola

L'anello sotto il cubo riporta N, E, S e O.

- **Trascinare l'anello** per ruotare il modello attorno all'asse verticale, come se fosse su un giradischi. L'anello segue il puntatore.
- **Fare clic su una lettera** per guardare da quel lato, mantenendo l'inclinazione con cui si guarda dall'alto. In una vista dall'alto, la lettera cliccata va in fondo allo schermo.

## Viste frontali: frecce

Quando si guarda una faccia in pieno, appaiono piccole frecce intorno al cubo:

- I quattro **triangoli** portano in primo piano la faccia su quel lato: il triangolo sopra il cubo mostra la faccia che era in alto, e così via.
- Le due **frecce curve** in alto a destra ruotano l'immagine di un quarto di giro in senso orario o antiorario, senza cambiare la faccia che si guarda. Usarle per ruotare una pianta in modo che un muro lungo attraversi lo schermo.

## Vista iniziale

Il pulsante a forma di casa in alto a sinistra del cubo torna alla vista isometrica a tre quarti {{ui:Iso}} e adatta a schermo tutto il modello. {{key:Home}} fa lo stesso quando il cubo ha il focus della tastiera.

## Con la tastiera

{{key:Tab}} per arrivare al cubo, poi:

| Tasto | Fa |
|---|---|
| {{key:left}} / {{key:right}} | sceglie un lato, uno spigolo o un vertice attorno al cubo, a passi di un ottavo di giro (i lettori di schermo ne annunciano il nome) |
| {{key:up}} / {{key:down}} | sceglie un punto più alto o più basso, fino a {{ui:Sopra}} oppure giù fino a {{ui:Sotto}} |
| {{key:Enter}} oppure {{key:Space}} | guarda da quello scelto |
| {{key:Shift+left}} / {{key:Shift+right}} | ruota la vista di un quarto di giro attorno all'asse verticale |
| {{key:Home}} | la vista iniziale |
| {{key:Esc}} | esce dal cubo |

I tasti premuti sul cubo restano al cubo: non avviano gli strumenti di ModelCraft.

## Icona degli assi oppure nulla

Aprire {{ui:Impostazioni}} ({{key:Mod+,}}), la scheda {{ui:ModelCraft}}, e impostare **Indicatore dell'angolo** su {{ui:ViewCube}} (l'impostazione iniziale), {{ui:Icona degli assi}} (un piccolo marcatore X, Y, Z in basso a sinistra: X rosso, Y verde, Z blu) oppure {{ui:Nessuno}}. Questo browser ricorda la scelta. Vedi [Impostazioni di ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft non ha rollio: lontano dalle viste perfettamente dall'alto e dal basso, in alto sullo schermo è sempre in alto nel modello. Il cubo e le frecce curve possono ruotare una vista in pianta; non possono ribaltare una vista laterale sul proprio spigolo.
:::
