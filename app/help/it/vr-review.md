---
title: Rivedere il modello con un visore VR
summary: Percorrere il modello a grandezza reale con un visore VR: spostarsi, girarsi, misurare, tagliarlo, collocare segnalazioni con un'immagine, vederlo come modello da tavolo e incontrare gli altri di una sessione Live.
keywords: vr, realtà virtuale, visore, webxr, xr, immersivo, quest, oculus, vive, index, pico, percorrere, passeggiata, teletrasporto, revisione di progetto, revisione, misura, sezione, taglio, segnalazione, segnalazioni, bcf, tavolo, presenza, avatar, live, insieme
from: fa2f591a
---

{{ui:Revisione in VR}} porta dentro il modello con un visore VR, a grandezza reale. Ci si trova dove si trova la camera della vista, sul pavimento sotto di essa, rivolti nella stessa direzione. Nulla viene caricato: il visore mostra ciò che il browser disegna su questo computer (oppure nel browser del visore stesso).

## Cosa serve

- Un visore che il browser sa pilotare (WebXR): il browser integrato di un visore autonomo, oppure Chrome o Edge su un PC con un visore collegato.
- ModelCraft aperto su una pagina sicura (https), come lo è questo sito.

Quando non c'è un visore, {{ui:Revisione in VR}} è disattivato e indica il motivo.

## Avvio

1. Impostare la vista da cui iniziare: in una stanza, oppure all'esterno a guardare l'edificio.
2. Fare clic su {{ui:Viste}} nel gruppo {{ui:Camera}}, poi su {{ui:Revisione in VR}}.
3. Indossare il visore.

Il menu si trova sul dorso della mano sinistra. Puntarlo con il controller destro e premere il grilletto per scegliere un pulsante. (Con una sola mano, il menu fluttua davanti al punto di partenza.)

## Com'è

Il visore mostra il modello nello stile della [vista live](topic:live-view): gli aspetti e i materiali assegnati alle facce, il cielo e il sole dalla posizione e dalla data del modello con la sua ombra, lampade, piante e rocce sparse, e la luce riflessa da muri e pavimenti (calcolata su questo computer mentre ci si guarda intorno, e seguendo i movimenti). Luminosità e trasformazione della vista (ACES o AgX) sono quelle di [Render di un'immagine](topic:render). Quanto viene disegnato dipende da ciò che ha il browser del visore, come sul desktop; l'occlusione ambientale, i riflessi e il bagliore restano sul desktop.

## Muoversi

- **Saltare:** in {{ui:Sposta}}, puntare un pavimento e premere il grilletto; si atterra lì. Oppure spingere la levetta in avanti per puntare, e lasciarla per saltare. Si può atterrare solo su pavimenti e terreno (superfici rivolte verso l'alto), mai su un muro.
- **Girarsi:** spingere la levetta a sinistra o a destra: si ruota di 30° ogni volta.
- **Camminare:** nell'area di gioco, semplicemente camminando.

## Misurare

Scegliere {{ui:Misura}}, poi premere il grilletto su due punti. La distanza compare tra di essi, nelle unità del modello. Un punto vicino a uno spigolo si aggancia allo spigolo.

## Tagliarlo

Scegliere {{ui:Sezione}} e premere il grilletto su una superficie:

- su un muro (o su qualsiasi cosa che non sia un pavimento): tutto ciò che sta tra sé e quella superficie viene tagliato via, così si vede dentro. Funziona meglio dall'esterno, oppure attraverso una stanza;
- su un pavimento, dall'alto: una sezione in pianta a 1.2 m sopra quel pavimento, così i muri mostrano la parte bassa.

{{ui:Cancella}} rimuove il taglio e le misure. Se un piano di sezione taglia il modello nella vista all'avvio, il visore parte con esso.

## Collocare una segnalazione

Scegliere {{ui:Segnalazione}} e premere il grilletto dove si trova il problema. Un perno numerato lo segna, e ModelCraft conserva la segnalazione con un'immagine di ciò che si è visto e della posizione in cui ci si trovava. Quando si esce dalla VR, le segnalazioni si trovano nell'elenco {{ui:Segnalazioni}} a destra:

- il pulsante con l'occhio mostra la segnalazione da dove è stata collocata;
- {{ui:Salva come BCF}} scarica tutte le segnalazioni in un file BCF, che i programmi di revisione BIM aprono (camera e immagine incluse);
- le segnalazioni sono salvate anche nel file `.modelcraft`.

Aggiungere un commento a una segnalazione dopo essere usciti dalla VR, in un programma BCF: scrivere nel visore non è ancora implementato.

## Vederlo come modello da tavolo

{{ui:Sul tavolo}} rimpicciolisce il modello per adattarlo a un tavolo davanti a sé; girarci intorno, oppure ruotarlo con la levetta. {{ui:Grandezza reale}} riporta alla posizione di partenza.

## Con altri, in Live

In una [sessione Live](topic:work-live), chi è in VR vede gli altri come una testa e due mani nel proprio colore, con il nome, e un punto dove ciascuno punta. Le modifiche di chiunque raggiungono il visore in un attimo. Le persone alla scrivania non sono ancora mostrate nel visore.

## Uscire

Scegliere {{ui:Esci dalla VR}} (oppure togliere il visore e terminare lì). La vista sullo schermo si sposta dove si trovava la testa.

:::note
Provato solo con un emulatore di visore, non ancora con un visore reale. Un modello grande può far scattare il visore: nascondere prima ciò che non serve ([nascondere e isolare](topic:hide-isolate)).
:::
